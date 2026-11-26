var t_=Object.defineProperty;var n_=(s,e,t)=>e in s?t_(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var K=(s,e,t)=>n_(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Qu={exports:{}},ta={},Zu={exports:{}},Rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function i_(){if(Cm)return Rt;Cm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),x=Symbol.iterator;function g(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,T={};function y(U,V,ye){this.props=U,this.context=V,this.refs=T,this.updater=ye||_}y.prototype.isReactComponent={},y.prototype.setState=function(U,V){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,V,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function M(){}M.prototype=y.prototype;function w(U,V,ye){this.props=U,this.context=V,this.refs=T,this.updater=ye||_}var b=w.prototype=new M;b.constructor=w,S(b,y.prototype),b.isPureReactComponent=!0;var P=Array.isArray,B=Object.prototype.hasOwnProperty,I={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function A(U,V,ye){var Me,xe={},q=null,re=null;if(V!=null)for(Me in V.ref!==void 0&&(re=V.ref),V.key!==void 0&&(q=""+V.key),V)B.call(V,Me)&&!k.hasOwnProperty(Me)&&(xe[Me]=V[Me]);var W=arguments.length-2;if(W===1)xe.children=ye;else if(1<W){for(var de=Array(W),Te=0;Te<W;Te++)de[Te]=arguments[Te+2];xe.children=de}if(U&&U.defaultProps)for(Me in W=U.defaultProps,W)xe[Me]===void 0&&(xe[Me]=W[Me]);return{$$typeof:s,type:U,key:q,ref:re,props:xe,_owner:I.current}}function D(U,V){return{$$typeof:s,type:U.type,key:V,ref:U.ref,props:U.props,_owner:U._owner}}function j(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function z(U){var V={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ye){return V[ye]})}var Y=/\/+/g;function le(U,V){return typeof U=="object"&&U!==null&&U.key!=null?z(""+U.key):V.toString(36)}function ce(U,V,ye,Me,xe){var q=typeof U;(q==="undefined"||q==="boolean")&&(U=null);var re=!1;if(U===null)re=!0;else switch(q){case"string":case"number":re=!0;break;case"object":switch(U.$$typeof){case s:case e:re=!0}}if(re)return re=U,xe=xe(re),U=Me===""?"."+le(re,0):Me,P(xe)?(ye="",U!=null&&(ye=U.replace(Y,"$&/")+"/"),ce(xe,V,ye,"",function(Te){return Te})):xe!=null&&(j(xe)&&(xe=D(xe,ye+(!xe.key||re&&re.key===xe.key?"":(""+xe.key).replace(Y,"$&/")+"/")+U)),V.push(xe)),1;if(re=0,Me=Me===""?".":Me+":",P(U))for(var W=0;W<U.length;W++){q=U[W];var de=Me+le(q,W);re+=ce(q,V,ye,de,xe)}else if(de=g(U),typeof de=="function")for(U=de.call(U),W=0;!(q=U.next()).done;)q=q.value,de=Me+le(q,W++),re+=ce(q,V,ye,de,xe);else if(q==="object")throw V=String(U),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.");return re}function G(U,V,ye){if(U==null)return U;var Me=[],xe=0;return ce(U,Me,"","",function(q){return V.call(ye,q,xe++)}),Me}function ne(U){if(U._status===-1){var V=U._result;V=V(),V.then(function(ye){(U._status===0||U._status===-1)&&(U._status=1,U._result=ye)},function(ye){(U._status===0||U._status===-1)&&(U._status=2,U._result=ye)}),U._status===-1&&(U._status=0,U._result=V)}if(U._status===1)return U._result.default;throw U._result}var X={current:null},O={transition:null},F={ReactCurrentDispatcher:X,ReactCurrentBatchConfig:O,ReactCurrentOwner:I};function $(){throw Error("act(...) is not supported in production builds of React.")}return Rt.Children={map:G,forEach:function(U,V,ye){G(U,function(){V.apply(this,arguments)},ye)},count:function(U){var V=0;return G(U,function(){V++}),V},toArray:function(U){return G(U,function(V){return V})||[]},only:function(U){if(!j(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},Rt.Component=y,Rt.Fragment=t,Rt.Profiler=o,Rt.PureComponent=w,Rt.StrictMode=r,Rt.Suspense=d,Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,Rt.act=$,Rt.cloneElement=function(U,V,ye){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Me=S({},U.props),xe=U.key,q=U.ref,re=U._owner;if(V!=null){if(V.ref!==void 0&&(q=V.ref,re=I.current),V.key!==void 0&&(xe=""+V.key),U.type&&U.type.defaultProps)var W=U.type.defaultProps;for(de in V)B.call(V,de)&&!k.hasOwnProperty(de)&&(Me[de]=V[de]===void 0&&W!==void 0?W[de]:V[de])}var de=arguments.length-2;if(de===1)Me.children=ye;else if(1<de){W=Array(de);for(var Te=0;Te<de;Te++)W[Te]=arguments[Te+2];Me.children=W}return{$$typeof:s,type:U.type,key:xe,ref:q,props:Me,_owner:re}},Rt.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},Rt.createElement=A,Rt.createFactory=function(U){var V=A.bind(null,U);return V.type=U,V},Rt.createRef=function(){return{current:null}},Rt.forwardRef=function(U){return{$$typeof:f,render:U}},Rt.isValidElement=j,Rt.lazy=function(U){return{$$typeof:m,_payload:{_status:-1,_result:U},_init:ne}},Rt.memo=function(U,V){return{$$typeof:h,type:U,compare:V===void 0?null:V}},Rt.startTransition=function(U){var V=O.transition;O.transition={};try{U()}finally{O.transition=V}},Rt.unstable_act=$,Rt.useCallback=function(U,V){return X.current.useCallback(U,V)},Rt.useContext=function(U){return X.current.useContext(U)},Rt.useDebugValue=function(){},Rt.useDeferredValue=function(U){return X.current.useDeferredValue(U)},Rt.useEffect=function(U,V){return X.current.useEffect(U,V)},Rt.useId=function(){return X.current.useId()},Rt.useImperativeHandle=function(U,V,ye){return X.current.useImperativeHandle(U,V,ye)},Rt.useInsertionEffect=function(U,V){return X.current.useInsertionEffect(U,V)},Rt.useLayoutEffect=function(U,V){return X.current.useLayoutEffect(U,V)},Rt.useMemo=function(U,V){return X.current.useMemo(U,V)},Rt.useReducer=function(U,V,ye){return X.current.useReducer(U,V,ye)},Rt.useRef=function(U){return X.current.useRef(U)},Rt.useState=function(U){return X.current.useState(U)},Rt.useSyncExternalStore=function(U,V,ye){return X.current.useSyncExternalStore(U,V,ye)},Rt.useTransition=function(){return X.current.useTransition()},Rt.version="18.3.1",Rt}var Rm;function Hh(){return Rm||(Rm=1,Zu.exports=i_()),Zu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bm;function r_(){if(bm)return ta;bm=1;var s=Hh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,d,h){var m,x={},g=null,_=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(_=d.ref);for(m in d)r.call(d,m)&&!l.hasOwnProperty(m)&&(x[m]=d[m]);if(f&&f.defaultProps)for(m in d=f.defaultProps,d)x[m]===void 0&&(x[m]=d[m]);return{$$typeof:e,type:f,key:g,ref:_,props:x,_owner:o.current}}return ta.Fragment=t,ta.jsx=c,ta.jsxs=c,ta}var Pm;function s_(){return Pm||(Pm=1,Qu.exports=r_()),Qu.exports}var He=s_(),Ot=Hh(),Sl={},Ju={exports:{}},Jn={},$u={exports:{}},ef={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function o_(){return Lm||(Lm=1,(function(s){function e(O,F){var $=O.length;O.push(F);e:for(;0<$;){var U=$-1>>>1,V=O[U];if(0<o(V,F))O[U]=F,O[$]=V,$=U;else break e}}function t(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var F=O[0],$=O.pop();if($!==F){O[0]=$;e:for(var U=0,V=O.length,ye=V>>>1;U<ye;){var Me=2*(U+1)-1,xe=O[Me],q=Me+1,re=O[q];if(0>o(xe,$))q<V&&0>o(re,xe)?(O[U]=re,O[q]=$,U=q):(O[U]=xe,O[Me]=$,U=Me);else if(q<V&&0>o(re,$))O[U]=re,O[q]=$,U=q;else break e}}return F}function o(O,F){var $=O.sortIndex-F.sortIndex;return $!==0?$:O.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var d=[],h=[],m=1,x=null,g=3,_=!1,S=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(O){for(var F=t(h);F!==null;){if(F.callback===null)r(h);else if(F.startTime<=O)r(h),F.sortIndex=F.expirationTime,e(d,F);else break;F=t(h)}}function P(O){if(T=!1,b(O),!S)if(t(d)!==null)S=!0,ne(B);else{var F=t(h);F!==null&&X(P,F.startTime-O)}}function B(O,F){S=!1,T&&(T=!1,M(A),A=-1),_=!0;var $=g;try{for(b(F),x=t(d);x!==null&&(!(x.expirationTime>F)||O&&!z());){var U=x.callback;if(typeof U=="function"){x.callback=null,g=x.priorityLevel;var V=U(x.expirationTime<=F);F=s.unstable_now(),typeof V=="function"?x.callback=V:x===t(d)&&r(d),b(F)}else r(d);x=t(d)}if(x!==null)var ye=!0;else{var Me=t(h);Me!==null&&X(P,Me.startTime-F),ye=!1}return ye}finally{x=null,g=$,_=!1}}var I=!1,k=null,A=-1,D=5,j=-1;function z(){return!(s.unstable_now()-j<D)}function Y(){if(k!==null){var O=s.unstable_now();j=O;var F=!0;try{F=k(!0,O)}finally{F?le():(I=!1,k=null)}}else I=!1}var le;if(typeof w=="function")le=function(){w(Y)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,G=ce.port2;ce.port1.onmessage=Y,le=function(){G.postMessage(null)}}else le=function(){y(Y,0)};function ne(O){k=O,I||(I=!0,le())}function X(O,F){A=y(function(){O(s.unstable_now())},F)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(O){O.callback=null},s.unstable_continueExecution=function(){S||_||(S=!0,ne(B))},s.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<O?Math.floor(1e3/O):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(O){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var $=g;g=F;try{return O()}finally{g=$}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(O,F){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var $=g;g=O;try{return F()}finally{g=$}},s.unstable_scheduleCallback=function(O,F,$){var U=s.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?U+$:U):$=U,O){case 1:var V=-1;break;case 2:V=250;break;case 5:V=1073741823;break;case 4:V=1e4;break;default:V=5e3}return V=$+V,O={id:m++,callback:F,priorityLevel:O,startTime:$,expirationTime:V,sortIndex:-1},$>U?(O.sortIndex=$,e(h,O),t(d)===null&&O===t(h)&&(T?(M(A),A=-1):T=!0,X(P,$-U))):(O.sortIndex=V,e(d,O),S||_||(S=!0,ne(B))),O},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(O){var F=g;return function(){var $=g;g=F;try{return O.apply(this,arguments)}finally{g=$}}}})(ef)),ef}var Im;function a_(){return Im||(Im=1,$u.exports=o_()),$u.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um;function l_(){if(Um)return Jn;Um=1;var s=Hh(),e=a_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},x={};function g(n){return d.call(x,n)?!0:d.call(m,n)?!1:h.test(n)?x[n]=!0:(m[n]=!0,!1)}function _(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function S(n,i,a,u){if(i===null||typeof i>"u"||_(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(n,i,a,u,p,v,C){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=v,this.removeEmptyString=C}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new T(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function w(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(M,w);y[i]=new T(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(M,w);y[i]=new T(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(M,w);y[i]=new T(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function b(n,i,a,u){var p=y.hasOwnProperty(i)?y[i]:null;(p!==null?p.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(S(i,a,p,u)&&(a=null),u||p===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):p.mustUseProperty?n[p.propertyName]=a===null?p.type===3?!1:"":a:(i=p.attributeName,u=p.attributeNamespace,a===null?n.removeAttribute(i):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),I=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),z=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),O=Symbol.iterator;function F(n){return n===null||typeof n!="object"?null:(n=O&&n[O]||n["@@iterator"],typeof n=="function"?n:null)}var $=Object.assign,U;function V(n){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var ye=!1;function Me(n,i){if(!n||ye)return"";ye=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ge){var u=ge}Reflect.construct(n,[],i)}else{try{i.call()}catch(ge){u=ge}n.call(i.prototype)}else{try{throw Error()}catch(ge){u=ge}n()}}catch(ge){if(ge&&u&&typeof ge.stack=="string"){for(var p=ge.stack.split(`
`),v=u.stack.split(`
`),C=p.length-1,H=v.length-1;1<=C&&0<=H&&p[C]!==v[H];)H--;for(;1<=C&&0<=H;C--,H--)if(p[C]!==v[H]){if(C!==1||H!==1)do if(C--,H--,0>H||p[C]!==v[H]){var Z=`
`+p[C].replace(" at new "," at ");return n.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",n.displayName)),Z}while(1<=C&&0<=H);break}}}finally{ye=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?V(n):""}function xe(n){switch(n.tag){case 5:return V(n.type);case 16:return V("Lazy");case 13:return V("Suspense");case 19:return V("SuspenseList");case 0:case 2:case 15:return n=Me(n.type,!1),n;case 11:return n=Me(n.type.render,!1),n;case 1:return n=Me(n.type,!0),n;default:return""}}function q(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case I:return"Portal";case D:return"Profiler";case A:return"StrictMode";case le:return"Suspense";case ce:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case j:return(n._context.displayName||"Context")+".Provider";case Y:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case G:return i=n.displayName||null,i!==null?i:q(n.type)||"Memo";case ne:i=n._payload,n=n._init;try{return q(n(i))}catch{}}return null}function re(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return q(i);case 8:return i===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function W(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function de(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Te(n){var i=de(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,v=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return p.call(this)},set:function(C){u=""+C,v.call(this,C)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(C){u=""+C},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function pe(n){n._valueTracker||(n._valueTracker=Te(n))}function Fe(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=de(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function Ae(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Ve(n,i){var a=i.checked;return $({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function tt(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=W(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function nt(n,i){i=i.checked,i!=null&&b(n,"checked",i,!1)}function it(n,i){nt(n,i);var a=W(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?yt(n,i.type,a):i.hasOwnProperty("defaultValue")&&yt(n,i.type,W(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function ct(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function yt(n,i,a){(i!=="number"||Ae(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var N=Array.isArray;function xt(n,i,a,u){if(n=n.options,i){i={};for(var p=0;p<a.length;p++)i["$"+a[p]]=!0;for(a=0;a<n.length;a++)p=i.hasOwnProperty("$"+n[a].value),n[a].selected!==p&&(n[a].selected=p),p&&u&&(n[a].defaultSelected=!0)}else{for(a=""+W(a),i=null,p=0;p<n.length;p++){if(n[p].value===a){n[p].selected=!0,u&&(n[p].defaultSelected=!0);return}i!==null||n[p].disabled||(i=n[p])}i!==null&&(i.selected=!0)}}function ot(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return $({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function gt(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(N(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:W(a)}}function Ee(n,i){var a=W(i.value),u=W(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function lt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function L(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?L(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ie,_e=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,p){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,p)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ie=ie||document.createElement("div"),ie.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ie.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Se(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Re={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pe=["Webkit","ms","Moz","O"];Object.keys(Re).forEach(function(n){Pe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Re[i]=Re[n]})});function me(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Re.hasOwnProperty(n)&&Re[n]?(""+i).trim():i+"px"}function ve(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,p=me(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,p):n[a]=p}}var ze=$({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xe(n,i){if(i){if(ze[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ne(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ue=null;function ut(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ft=null,Mt=null,Q=null;function De(n){if(n=zo(n)){if(typeof ft!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Oa(i),ft(n.stateNode,n.type,i))}}function he(n){Mt?Q?Q.push(n):Q=[n]:Mt=n}function We(){if(Mt){var n=Mt,i=Q;if(Q=Mt=null,De(n),i)for(n=0;n<i.length;n++)De(i[n])}}function Oe(n,i){return n(i)}function we(){}var qe=!1;function je(n,i,a){if(qe)return n(i,a);qe=!0;try{return Oe(n,i,a)}finally{qe=!1,(Mt!==null||Q!==null)&&(we(),We())}}function At(n,i){var a=n.stateNode;if(a===null)return null;var u=Oa(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var It=!1;if(f)try{var an={};Object.defineProperty(an,"passive",{get:function(){It=!0}}),window.addEventListener("test",an,an),window.removeEventListener("test",an,an)}catch{It=!1}function kn(n,i,a,u,p,v,C,H,Z){var ge=Array.prototype.slice.call(arguments,3);try{i.apply(a,ge)}catch(be){this.onError(be)}}var Si=!1,$i=null,Ai=!1,er=null,ti={onError:function(n){Si=!0,$i=n}};function Kr(n,i,a,u,p,v,C,H,Z){Si=!1,$i=null,kn.apply(ti,arguments)}function As(n,i,a,u,p,v,C,H,Z){if(Kr.apply(this,arguments),Si){if(Si){var ge=$i;Si=!1,$i=null}else throw Error(t(198));Ai||(Ai=!0,er=ge)}}function ln(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Cn(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Bn(n){if(ln(n)!==n)throw Error(t(188))}function Rn(n){var i=n.alternate;if(!i){if(i=ln(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var p=a.return;if(p===null)break;var v=p.alternate;if(v===null){if(u=p.return,u!==null){a=u;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===a)return Bn(p),n;if(v===u)return Bn(p),i;v=v.sibling}throw Error(t(188))}if(a.return!==u.return)a=p,u=v;else{for(var C=!1,H=p.child;H;){if(H===a){C=!0,a=p,u=v;break}if(H===u){C=!0,u=p,a=v;break}H=H.sibling}if(!C){for(H=v.child;H;){if(H===a){C=!0,a=v,u=p;break}if(H===u){C=!0,u=v,a=p;break}H=H.sibling}if(!C)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function zn(n){return n=Rn(n),n!==null?Hn(n):null}function Hn(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=Hn(n);if(i!==null)return i;n=n.sibling}return null}var qr=e.unstable_scheduleCallback,Yr=e.unstable_cancelCallback,ci=e.unstable_shouldYield,ui=e.unstable_requestPaint,jt=e.unstable_now,Ao=e.unstable_getCurrentPriorityLevel,nn=e.unstable_ImmediatePriority,R=e.unstable_UserBlockingPriority,te=e.unstable_NormalPriority,ue=e.unstable_LowPriority,ae=e.unstable_IdlePriority,oe=null,Be=null;function Ge(n){if(Be&&typeof Be.onCommitFiberRoot=="function")try{Be.onCommitFiberRoot(oe,n,void 0,(n.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:ht,Ze=Math.log,Je=Math.LN2;function ht(n){return n>>>=0,n===0?32:31-(Ze(n)/Je|0)|0}var dt=64,et=4194304;function Ct(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Bt(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,p=n.suspendedLanes,v=n.pingedLanes,C=a&268435455;if(C!==0){var H=C&~p;H!==0?u=Ct(H):(v&=C,v!==0&&(u=Ct(v)))}else C=a&~p,C!==0?u=Ct(C):v!==0&&(u=Ct(v));if(u===0)return 0;if(i!==0&&i!==u&&(i&p)===0&&(p=u&-u,v=i&-i,p>=v||p===16&&(v&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-Ie(i),p=1<<a,u|=n[a],i&=~p;return u}function Wt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zt(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,p=n.expirationTimes,v=n.pendingLanes;0<v;){var C=31-Ie(v),H=1<<C,Z=p[C];Z===-1?((H&a)===0||(H&u)!==0)&&(p[C]=Wt(H,i)):Z<=i&&(n.expiredLanes|=H),v&=~H}}function Zt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ye(){var n=dt;return dt<<=1,(dt&4194240)===0&&(dt=64),n}function rn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Et(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Ie(i),n[i]=a}function vn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var p=31-Ie(a),v=1<<p;i[p]=0,u[p]=-1,n[p]=-1,a&=~v}}function An(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-Ie(a),p=1<<u;p&i|n[u]&i&&(n[u]|=i),a&=~p}}var St=0;function ni(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ht,Kt,Ei,Vt,wi,zi=!1,Qr=[],_r=null,yr=null,Mr=null,Eo=new Map,wo=new Map,Sr=[],Av="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ud(n,i){switch(n){case"focusin":case"focusout":_r=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":Eo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":wo.delete(i.pointerId)}}function To(n,i,a,u,p,v){return n===null||n.nativeEvent!==v?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:v,targetContainers:[p]},i!==null&&(i=zo(i),i!==null&&Kt(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,p!==null&&i.indexOf(p)===-1&&i.push(p),n)}function Ev(n,i,a,u,p){switch(i){case"focusin":return _r=To(_r,n,i,a,u,p),!0;case"dragenter":return yr=To(yr,n,i,a,u,p),!0;case"mouseover":return Mr=To(Mr,n,i,a,u,p),!0;case"pointerover":var v=p.pointerId;return Eo.set(v,To(Eo.get(v)||null,n,i,a,u,p)),!0;case"gotpointercapture":return v=p.pointerId,wo.set(v,To(wo.get(v)||null,n,i,a,u,p)),!0}return!1}function fd(n){var i=Zr(n.target);if(i!==null){var a=ln(i);if(a!==null){if(i=a.tag,i===13){if(i=Cn(a),i!==null){n.blockedOn=i,wi(n.priority,function(){Ei(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Aa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=Ac(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);Ue=u,a.target.dispatchEvent(u),Ue=null}else return i=zo(a),i!==null&&Kt(i),n.blockedOn=a,!1;i.shift()}return!0}function hd(n,i,a){Aa(n)&&a.delete(i)}function wv(){zi=!1,_r!==null&&Aa(_r)&&(_r=null),yr!==null&&Aa(yr)&&(yr=null),Mr!==null&&Aa(Mr)&&(Mr=null),Eo.forEach(hd),wo.forEach(hd)}function Co(n,i){n.blockedOn===i&&(n.blockedOn=null,zi||(zi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,wv)))}function Ro(n){function i(p){return Co(p,n)}if(0<Qr.length){Co(Qr[0],n);for(var a=1;a<Qr.length;a++){var u=Qr[a];u.blockedOn===n&&(u.blockedOn=null)}}for(_r!==null&&Co(_r,n),yr!==null&&Co(yr,n),Mr!==null&&Co(Mr,n),Eo.forEach(i),wo.forEach(i),a=0;a<Sr.length;a++)u=Sr[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<Sr.length&&(a=Sr[0],a.blockedOn===null);)fd(a),a.blockedOn===null&&Sr.shift()}var Es=P.ReactCurrentBatchConfig,Ea=!0;function Tv(n,i,a,u){var p=St,v=Es.transition;Es.transition=null;try{St=1,Sc(n,i,a,u)}finally{St=p,Es.transition=v}}function Cv(n,i,a,u){var p=St,v=Es.transition;Es.transition=null;try{St=4,Sc(n,i,a,u)}finally{St=p,Es.transition=v}}function Sc(n,i,a,u){if(Ea){var p=Ac(n,i,a,u);if(p===null)zc(n,i,u,wa,a),ud(n,u);else if(Ev(p,n,i,a,u))u.stopPropagation();else if(ud(n,u),i&4&&-1<Av.indexOf(n)){for(;p!==null;){var v=zo(p);if(v!==null&&Ht(v),v=Ac(n,i,a,u),v===null&&zc(n,i,u,wa,a),v===p)break;p=v}p!==null&&u.stopPropagation()}else zc(n,i,u,null,a)}}var wa=null;function Ac(n,i,a,u){if(wa=null,n=ut(u),n=Zr(n),n!==null)if(i=ln(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Cn(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return wa=n,null}function dd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ao()){case nn:return 1;case R:return 4;case te:case ue:return 16;case ae:return 536870912;default:return 16}default:return 16}}var Ar=null,Ec=null,Ta=null;function pd(){if(Ta)return Ta;var n,i=Ec,a=i.length,u,p="value"in Ar?Ar.value:Ar.textContent,v=p.length;for(n=0;n<a&&i[n]===p[n];n++);var C=a-n;for(u=1;u<=C&&i[a-u]===p[v-u];u++);return Ta=p.slice(n,1<u?1-u:void 0)}function Ca(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ra(){return!0}function md(){return!1}function ii(n){function i(a,u,p,v,C){this._reactName=a,this._targetInst=p,this.type=u,this.nativeEvent=v,this.target=C,this.currentTarget=null;for(var H in n)n.hasOwnProperty(H)&&(a=n[H],this[H]=a?a(v):v[H]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Ra:md,this.isPropagationStopped=md,this}return $(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ra)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ra)},persist:function(){},isPersistent:Ra}),i}var ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wc=ii(ws),bo=$({},ws,{view:0,detail:0}),Rv=ii(bo),Tc,Cc,Po,ba=$({},bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Po&&(Po&&n.type==="mousemove"?(Tc=n.screenX-Po.screenX,Cc=n.screenY-Po.screenY):Cc=Tc=0,Po=n),Tc)},movementY:function(n){return"movementY"in n?n.movementY:Cc}}),gd=ii(ba),bv=$({},ba,{dataTransfer:0}),Pv=ii(bv),Lv=$({},bo,{relatedTarget:0}),Rc=ii(Lv),Iv=$({},ws,{animationName:0,elapsedTime:0,pseudoElement:0}),Uv=ii(Iv),Dv=$({},ws,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Nv=ii(Dv),Fv=$({},ws,{data:0}),vd=ii(Fv),Ov={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function zv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Bv[n])?!!i[n]:!1}function bc(){return zv}var Hv=$({},bo,{key:function(n){if(n.key){var i=Ov[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ca(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?kv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bc,charCode:function(n){return n.type==="keypress"?Ca(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ca(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Vv=ii(Hv),Gv=$({},ba,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xd=ii(Gv),Wv=$({},bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bc}),Xv=ii(Wv),jv=$({},ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kv=ii(jv),qv=$({},ba,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Yv=ii(qv),Qv=[9,13,27,32],Pc=f&&"CompositionEvent"in window,Lo=null;f&&"documentMode"in document&&(Lo=document.documentMode);var Zv=f&&"TextEvent"in window&&!Lo,_d=f&&(!Pc||Lo&&8<Lo&&11>=Lo),yd=" ",Md=!1;function Sd(n,i){switch(n){case"keyup":return Qv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ad(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ts=!1;function Jv(n,i){switch(n){case"compositionend":return Ad(i);case"keypress":return i.which!==32?null:(Md=!0,yd);case"textInput":return n=i.data,n===yd&&Md?null:n;default:return null}}function $v(n,i){if(Ts)return n==="compositionend"||!Pc&&Sd(n,i)?(n=pd(),Ta=Ec=Ar=null,Ts=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _d&&i.locale!=="ko"?null:i.data;default:return null}}var ex={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ed(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!ex[n.type]:i==="textarea"}function wd(n,i,a,u){he(u),i=Da(i,"onChange"),0<i.length&&(a=new wc("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var Io=null,Uo=null;function tx(n){Gd(n,0)}function Pa(n){var i=Ls(n);if(Fe(i))return n}function nx(n,i){if(n==="change")return i}var Td=!1;if(f){var Lc;if(f){var Ic="oninput"in document;if(!Ic){var Cd=document.createElement("div");Cd.setAttribute("oninput","return;"),Ic=typeof Cd.oninput=="function"}Lc=Ic}else Lc=!1;Td=Lc&&(!document.documentMode||9<document.documentMode)}function Rd(){Io&&(Io.detachEvent("onpropertychange",bd),Uo=Io=null)}function bd(n){if(n.propertyName==="value"&&Pa(Uo)){var i=[];wd(i,Uo,n,ut(n)),je(tx,i)}}function ix(n,i,a){n==="focusin"?(Rd(),Io=i,Uo=a,Io.attachEvent("onpropertychange",bd)):n==="focusout"&&Rd()}function rx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Pa(Uo)}function sx(n,i){if(n==="click")return Pa(i)}function ox(n,i){if(n==="input"||n==="change")return Pa(i)}function ax(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ti=typeof Object.is=="function"?Object.is:ax;function Do(n,i){if(Ti(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var p=a[u];if(!d.call(i,p)||!Ti(n[p],i[p]))return!1}return!0}function Pd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ld(n,i){var a=Pd(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Pd(a)}}function Id(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Id(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Ud(){for(var n=window,i=Ae();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Ae(n.document)}return i}function Uc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function lx(n){var i=Ud(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&Id(a.ownerDocument.documentElement,a)){if(u!==null&&Uc(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var p=a.textContent.length,v=Math.min(u.start,p);u=u.end===void 0?v:Math.min(u.end,p),!n.extend&&v>u&&(p=u,u=v,v=p),p=Ld(a,v);var C=Ld(a,u);p&&C&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==C.node||n.focusOffset!==C.offset)&&(i=i.createRange(),i.setStart(p.node,p.offset),n.removeAllRanges(),v>u?(n.addRange(i),n.extend(C.node,C.offset)):(i.setEnd(C.node,C.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var cx=f&&"documentMode"in document&&11>=document.documentMode,Cs=null,Dc=null,No=null,Nc=!1;function Dd(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Nc||Cs==null||Cs!==Ae(u)||(u=Cs,"selectionStart"in u&&Uc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),No&&Do(No,u)||(No=u,u=Da(Dc,"onSelect"),0<u.length&&(i=new wc("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=Cs)))}function La(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Rs={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionend:La("Transition","TransitionEnd")},Fc={},Nd={};f&&(Nd=document.createElement("div").style,"AnimationEvent"in window||(delete Rs.animationend.animation,delete Rs.animationiteration.animation,delete Rs.animationstart.animation),"TransitionEvent"in window||delete Rs.transitionend.transition);function Ia(n){if(Fc[n])return Fc[n];if(!Rs[n])return n;var i=Rs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in Nd)return Fc[n]=i[a];return n}var Fd=Ia("animationend"),Od=Ia("animationiteration"),kd=Ia("animationstart"),Bd=Ia("transitionend"),zd=new Map,Hd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Er(n,i){zd.set(n,i),l(i,[n])}for(var Oc=0;Oc<Hd.length;Oc++){var kc=Hd[Oc],ux=kc.toLowerCase(),fx=kc[0].toUpperCase()+kc.slice(1);Er(ux,"on"+fx)}Er(Fd,"onAnimationEnd"),Er(Od,"onAnimationIteration"),Er(kd,"onAnimationStart"),Er("dblclick","onDoubleClick"),Er("focusin","onFocus"),Er("focusout","onBlur"),Er(Bd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fo));function Vd(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,As(u,i,void 0,n),n.currentTarget=null}function Gd(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],p=u.event;u=u.listeners;e:{var v=void 0;if(i)for(var C=u.length-1;0<=C;C--){var H=u[C],Z=H.instance,ge=H.currentTarget;if(H=H.listener,Z!==v&&p.isPropagationStopped())break e;Vd(p,H,ge),v=Z}else for(C=0;C<u.length;C++){if(H=u[C],Z=H.instance,ge=H.currentTarget,H=H.listener,Z!==v&&p.isPropagationStopped())break e;Vd(p,H,ge),v=Z}}}if(Ai)throw n=er,Ai=!1,er=null,n}function qt(n,i){var a=i[jc];a===void 0&&(a=i[jc]=new Set);var u=n+"__bubble";a.has(u)||(Wd(i,n,2,!1),a.add(u))}function Bc(n,i,a){var u=0;i&&(u|=4),Wd(a,n,u,i)}var Ua="_reactListening"+Math.random().toString(36).slice(2);function Oo(n){if(!n[Ua]){n[Ua]=!0,r.forEach(function(a){a!=="selectionchange"&&(hx.has(a)||Bc(a,!1,n),Bc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ua]||(i[Ua]=!0,Bc("selectionchange",!1,i))}}function Wd(n,i,a,u){switch(dd(i)){case 1:var p=Tv;break;case 4:p=Cv;break;default:p=Sc}a=p.bind(null,i,a,n),p=void 0,!It||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(p=!0),u?p!==void 0?n.addEventListener(i,a,{capture:!0,passive:p}):n.addEventListener(i,a,!0):p!==void 0?n.addEventListener(i,a,{passive:p}):n.addEventListener(i,a,!1)}function zc(n,i,a,u,p){var v=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var C=u.tag;if(C===3||C===4){var H=u.stateNode.containerInfo;if(H===p||H.nodeType===8&&H.parentNode===p)break;if(C===4)for(C=u.return;C!==null;){var Z=C.tag;if((Z===3||Z===4)&&(Z=C.stateNode.containerInfo,Z===p||Z.nodeType===8&&Z.parentNode===p))return;C=C.return}for(;H!==null;){if(C=Zr(H),C===null)return;if(Z=C.tag,Z===5||Z===6){u=v=C;continue e}H=H.parentNode}}u=u.return}je(function(){var ge=v,be=ut(a),Le=[];e:{var Ce=zd.get(n);if(Ce!==void 0){var Qe=wc,rt=n;switch(n){case"keypress":if(Ca(a)===0)break e;case"keydown":case"keyup":Qe=Vv;break;case"focusin":rt="focus",Qe=Rc;break;case"focusout":rt="blur",Qe=Rc;break;case"beforeblur":case"afterblur":Qe=Rc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Qe=gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Qe=Pv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Qe=Xv;break;case Fd:case Od:case kd:Qe=Uv;break;case Bd:Qe=Kv;break;case"scroll":Qe=Rv;break;case"wheel":Qe=Yv;break;case"copy":case"cut":case"paste":Qe=Nv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Qe=xd}var st=(i&4)!==0,sn=!st&&n==="scroll",se=st?Ce!==null?Ce+"Capture":null:Ce;st=[];for(var ee=ge,fe;ee!==null;){fe=ee;var ke=fe.stateNode;if(fe.tag===5&&ke!==null&&(fe=ke,se!==null&&(ke=At(ee,se),ke!=null&&st.push(ko(ee,ke,fe)))),sn)break;ee=ee.return}0<st.length&&(Ce=new Qe(Ce,rt,null,a,be),Le.push({event:Ce,listeners:st}))}}if((i&7)===0){e:{if(Ce=n==="mouseover"||n==="pointerover",Qe=n==="mouseout"||n==="pointerout",Ce&&a!==Ue&&(rt=a.relatedTarget||a.fromElement)&&(Zr(rt)||rt[tr]))break e;if((Qe||Ce)&&(Ce=be.window===be?be:(Ce=be.ownerDocument)?Ce.defaultView||Ce.parentWindow:window,Qe?(rt=a.relatedTarget||a.toElement,Qe=ge,rt=rt?Zr(rt):null,rt!==null&&(sn=ln(rt),rt!==sn||rt.tag!==5&&rt.tag!==6)&&(rt=null)):(Qe=null,rt=ge),Qe!==rt)){if(st=gd,ke="onMouseLeave",se="onMouseEnter",ee="mouse",(n==="pointerout"||n==="pointerover")&&(st=xd,ke="onPointerLeave",se="onPointerEnter",ee="pointer"),sn=Qe==null?Ce:Ls(Qe),fe=rt==null?Ce:Ls(rt),Ce=new st(ke,ee+"leave",Qe,a,be),Ce.target=sn,Ce.relatedTarget=fe,ke=null,Zr(be)===ge&&(st=new st(se,ee+"enter",rt,a,be),st.target=fe,st.relatedTarget=sn,ke=st),sn=ke,Qe&&rt)t:{for(st=Qe,se=rt,ee=0,fe=st;fe;fe=bs(fe))ee++;for(fe=0,ke=se;ke;ke=bs(ke))fe++;for(;0<ee-fe;)st=bs(st),ee--;for(;0<fe-ee;)se=bs(se),fe--;for(;ee--;){if(st===se||se!==null&&st===se.alternate)break t;st=bs(st),se=bs(se)}st=null}else st=null;Qe!==null&&Xd(Le,Ce,Qe,st,!1),rt!==null&&sn!==null&&Xd(Le,sn,rt,st,!0)}}e:{if(Ce=ge?Ls(ge):window,Qe=Ce.nodeName&&Ce.nodeName.toLowerCase(),Qe==="select"||Qe==="input"&&Ce.type==="file")var at=nx;else if(Ed(Ce))if(Td)at=ox;else{at=rx;var pt=ix}else(Qe=Ce.nodeName)&&Qe.toLowerCase()==="input"&&(Ce.type==="checkbox"||Ce.type==="radio")&&(at=sx);if(at&&(at=at(n,ge))){wd(Le,at,a,be);break e}pt&&pt(n,Ce,ge),n==="focusout"&&(pt=Ce._wrapperState)&&pt.controlled&&Ce.type==="number"&&yt(Ce,"number",Ce.value)}switch(pt=ge?Ls(ge):window,n){case"focusin":(Ed(pt)||pt.contentEditable==="true")&&(Cs=pt,Dc=ge,No=null);break;case"focusout":No=Dc=Cs=null;break;case"mousedown":Nc=!0;break;case"contextmenu":case"mouseup":case"dragend":Nc=!1,Dd(Le,a,be);break;case"selectionchange":if(cx)break;case"keydown":case"keyup":Dd(Le,a,be)}var mt;if(Pc)e:{switch(n){case"compositionstart":var _t="onCompositionStart";break e;case"compositionend":_t="onCompositionEnd";break e;case"compositionupdate":_t="onCompositionUpdate";break e}_t=void 0}else Ts?Sd(n,a)&&(_t="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(_t="onCompositionStart");_t&&(_d&&a.locale!=="ko"&&(Ts||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&Ts&&(mt=pd()):(Ar=be,Ec="value"in Ar?Ar.value:Ar.textContent,Ts=!0)),pt=Da(ge,_t),0<pt.length&&(_t=new vd(_t,n,null,a,be),Le.push({event:_t,listeners:pt}),mt?_t.data=mt:(mt=Ad(a),mt!==null&&(_t.data=mt)))),(mt=Zv?Jv(n,a):$v(n,a))&&(ge=Da(ge,"onBeforeInput"),0<ge.length&&(be=new vd("onBeforeInput","beforeinput",null,a,be),Le.push({event:be,listeners:ge}),be.data=mt))}Gd(Le,i)})}function ko(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Da(n,i){for(var a=i+"Capture",u=[];n!==null;){var p=n,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=At(n,a),v!=null&&u.unshift(ko(n,v,p)),v=At(n,i),v!=null&&u.push(ko(n,v,p))),n=n.return}return u}function bs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Xd(n,i,a,u,p){for(var v=i._reactName,C=[];a!==null&&a!==u;){var H=a,Z=H.alternate,ge=H.stateNode;if(Z!==null&&Z===u)break;H.tag===5&&ge!==null&&(H=ge,p?(Z=At(a,v),Z!=null&&C.unshift(ko(a,Z,H))):p||(Z=At(a,v),Z!=null&&C.push(ko(a,Z,H)))),a=a.return}C.length!==0&&n.push({event:i,listeners:C})}var dx=/\r\n?/g,px=/\u0000|\uFFFD/g;function jd(n){return(typeof n=="string"?n:""+n).replace(dx,`
`).replace(px,"")}function Na(n,i,a){if(i=jd(i),jd(n)!==i&&a)throw Error(t(425))}function Fa(){}var Hc=null,Vc=null;function Gc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Wc=typeof setTimeout=="function"?setTimeout:void 0,mx=typeof clearTimeout=="function"?clearTimeout:void 0,Kd=typeof Promise=="function"?Promise:void 0,gx=typeof queueMicrotask=="function"?queueMicrotask:typeof Kd<"u"?function(n){return Kd.resolve(null).then(n).catch(vx)}:Wc;function vx(n){setTimeout(function(){throw n})}function Xc(n,i){var a=i,u=0;do{var p=a.nextSibling;if(n.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(u===0){n.removeChild(p),Ro(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=p}while(a);Ro(i)}function wr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function qd(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ps=Math.random().toString(36).slice(2),Hi="__reactFiber$"+Ps,Bo="__reactProps$"+Ps,tr="__reactContainer$"+Ps,jc="__reactEvents$"+Ps,xx="__reactListeners$"+Ps,_x="__reactHandles$"+Ps;function Zr(n){var i=n[Hi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[tr]||a[Hi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=qd(n);n!==null;){if(a=n[Hi])return a;n=qd(n)}return i}n=a,a=n.parentNode}return null}function zo(n){return n=n[Hi]||n[tr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ls(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Oa(n){return n[Bo]||null}var Kc=[],Is=-1;function Tr(n){return{current:n}}function Yt(n){0>Is||(n.current=Kc[Is],Kc[Is]=null,Is--)}function Xt(n,i){Is++,Kc[Is]=n.current,n.current=i}var Cr={},bn=Tr(Cr),Kn=Tr(!1),Jr=Cr;function Us(n,i){var a=n.type.contextTypes;if(!a)return Cr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in a)p[v]=i[v];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=p),p}function qn(n){return n=n.childContextTypes,n!=null}function ka(){Yt(Kn),Yt(bn)}function Yd(n,i,a){if(bn.current!==Cr)throw Error(t(168));Xt(bn,i),Xt(Kn,a)}function Qd(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var p in u)if(!(p in i))throw Error(t(108,re(n)||"Unknown",p));return $({},a,u)}function Ba(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Cr,Jr=bn.current,Xt(bn,n),Xt(Kn,Kn.current),!0}function Zd(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=Qd(n,i,Jr),u.__reactInternalMemoizedMergedChildContext=n,Yt(Kn),Yt(bn),Xt(bn,n)):Yt(Kn),Xt(Kn,a)}var nr=null,za=!1,qc=!1;function Jd(n){nr===null?nr=[n]:nr.push(n)}function yx(n){za=!0,Jd(n)}function Rr(){if(!qc&&nr!==null){qc=!0;var n=0,i=St;try{var a=nr;for(St=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}nr=null,za=!1}catch(p){throw nr!==null&&(nr=nr.slice(n+1)),qr(nn,Rr),p}finally{St=i,qc=!1}}return null}var Ds=[],Ns=0,Ha=null,Va=0,fi=[],hi=0,$r=null,ir=1,rr="";function es(n,i){Ds[Ns++]=Va,Ds[Ns++]=Ha,Ha=n,Va=i}function $d(n,i,a){fi[hi++]=ir,fi[hi++]=rr,fi[hi++]=$r,$r=n;var u=ir;n=rr;var p=32-Ie(u)-1;u&=~(1<<p),a+=1;var v=32-Ie(i)+p;if(30<v){var C=p-p%5;v=(u&(1<<C)-1).toString(32),u>>=C,p-=C,ir=1<<32-Ie(i)+p|a<<p|u,rr=v+n}else ir=1<<v|a<<p|u,rr=n}function Yc(n){n.return!==null&&(es(n,1),$d(n,1,0))}function Qc(n){for(;n===Ha;)Ha=Ds[--Ns],Ds[Ns]=null,Va=Ds[--Ns],Ds[Ns]=null;for(;n===$r;)$r=fi[--hi],fi[hi]=null,rr=fi[--hi],fi[hi]=null,ir=fi[--hi],fi[hi]=null}var ri=null,si=null,Qt=!1,Ci=null;function ep(n,i){var a=gi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function tp(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ri=n,si=wr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ri=n,si=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=$r!==null?{id:ir,overflow:rr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=gi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,ri=n,si=null,!0):!1;default:return!1}}function Zc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Jc(n){if(Qt){var i=si;if(i){var a=i;if(!tp(n,i)){if(Zc(n))throw Error(t(418));i=wr(a.nextSibling);var u=ri;i&&tp(n,i)?ep(u,a):(n.flags=n.flags&-4097|2,Qt=!1,ri=n)}}else{if(Zc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Qt=!1,ri=n}}}function np(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ri=n}function Ga(n){if(n!==ri)return!1;if(!Qt)return np(n),Qt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Gc(n.type,n.memoizedProps)),i&&(i=si)){if(Zc(n))throw ip(),Error(t(418));for(;i;)ep(n,i),i=wr(i.nextSibling)}if(np(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){si=wr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}si=null}}else si=ri?wr(n.stateNode.nextSibling):null;return!0}function ip(){for(var n=si;n;)n=wr(n.nextSibling)}function Fs(){si=ri=null,Qt=!1}function $c(n){Ci===null?Ci=[n]:Ci.push(n)}var Mx=P.ReactCurrentBatchConfig;function Ho(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var p=u,v=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===v?i.ref:(i=function(C){var H=p.refs;C===null?delete H[v]:H[v]=C},i._stringRef=v,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Wa(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function rp(n){var i=n._init;return i(n._payload)}function sp(n){function i(se,ee){if(n){var fe=se.deletions;fe===null?(se.deletions=[ee],se.flags|=16):fe.push(ee)}}function a(se,ee){if(!n)return null;for(;ee!==null;)i(se,ee),ee=ee.sibling;return null}function u(se,ee){for(se=new Map;ee!==null;)ee.key!==null?se.set(ee.key,ee):se.set(ee.index,ee),ee=ee.sibling;return se}function p(se,ee){return se=Fr(se,ee),se.index=0,se.sibling=null,se}function v(se,ee,fe){return se.index=fe,n?(fe=se.alternate,fe!==null?(fe=fe.index,fe<ee?(se.flags|=2,ee):fe):(se.flags|=2,ee)):(se.flags|=1048576,ee)}function C(se){return n&&se.alternate===null&&(se.flags|=2),se}function H(se,ee,fe,ke){return ee===null||ee.tag!==6?(ee=Wu(fe,se.mode,ke),ee.return=se,ee):(ee=p(ee,fe),ee.return=se,ee)}function Z(se,ee,fe,ke){var at=fe.type;return at===k?be(se,ee,fe.props.children,ke,fe.key):ee!==null&&(ee.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===ne&&rp(at)===ee.type)?(ke=p(ee,fe.props),ke.ref=Ho(se,ee,fe),ke.return=se,ke):(ke=pl(fe.type,fe.key,fe.props,null,se.mode,ke),ke.ref=Ho(se,ee,fe),ke.return=se,ke)}function ge(se,ee,fe,ke){return ee===null||ee.tag!==4||ee.stateNode.containerInfo!==fe.containerInfo||ee.stateNode.implementation!==fe.implementation?(ee=Xu(fe,se.mode,ke),ee.return=se,ee):(ee=p(ee,fe.children||[]),ee.return=se,ee)}function be(se,ee,fe,ke,at){return ee===null||ee.tag!==7?(ee=ls(fe,se.mode,ke,at),ee.return=se,ee):(ee=p(ee,fe),ee.return=se,ee)}function Le(se,ee,fe){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return ee=Wu(""+ee,se.mode,fe),ee.return=se,ee;if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case B:return fe=pl(ee.type,ee.key,ee.props,null,se.mode,fe),fe.ref=Ho(se,null,ee),fe.return=se,fe;case I:return ee=Xu(ee,se.mode,fe),ee.return=se,ee;case ne:var ke=ee._init;return Le(se,ke(ee._payload),fe)}if(N(ee)||F(ee))return ee=ls(ee,se.mode,fe,null),ee.return=se,ee;Wa(se,ee)}return null}function Ce(se,ee,fe,ke){var at=ee!==null?ee.key:null;if(typeof fe=="string"&&fe!==""||typeof fe=="number")return at!==null?null:H(se,ee,""+fe,ke);if(typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case B:return fe.key===at?Z(se,ee,fe,ke):null;case I:return fe.key===at?ge(se,ee,fe,ke):null;case ne:return at=fe._init,Ce(se,ee,at(fe._payload),ke)}if(N(fe)||F(fe))return at!==null?null:be(se,ee,fe,ke,null);Wa(se,fe)}return null}function Qe(se,ee,fe,ke,at){if(typeof ke=="string"&&ke!==""||typeof ke=="number")return se=se.get(fe)||null,H(ee,se,""+ke,at);if(typeof ke=="object"&&ke!==null){switch(ke.$$typeof){case B:return se=se.get(ke.key===null?fe:ke.key)||null,Z(ee,se,ke,at);case I:return se=se.get(ke.key===null?fe:ke.key)||null,ge(ee,se,ke,at);case ne:var pt=ke._init;return Qe(se,ee,fe,pt(ke._payload),at)}if(N(ke)||F(ke))return se=se.get(fe)||null,be(ee,se,ke,at,null);Wa(ee,ke)}return null}function rt(se,ee,fe,ke){for(var at=null,pt=null,mt=ee,_t=ee=0,yn=null;mt!==null&&_t<fe.length;_t++){mt.index>_t?(yn=mt,mt=null):yn=mt.sibling;var Ft=Ce(se,mt,fe[_t],ke);if(Ft===null){mt===null&&(mt=yn);break}n&&mt&&Ft.alternate===null&&i(se,mt),ee=v(Ft,ee,_t),pt===null?at=Ft:pt.sibling=Ft,pt=Ft,mt=yn}if(_t===fe.length)return a(se,mt),Qt&&es(se,_t),at;if(mt===null){for(;_t<fe.length;_t++)mt=Le(se,fe[_t],ke),mt!==null&&(ee=v(mt,ee,_t),pt===null?at=mt:pt.sibling=mt,pt=mt);return Qt&&es(se,_t),at}for(mt=u(se,mt);_t<fe.length;_t++)yn=Qe(mt,se,_t,fe[_t],ke),yn!==null&&(n&&yn.alternate!==null&&mt.delete(yn.key===null?_t:yn.key),ee=v(yn,ee,_t),pt===null?at=yn:pt.sibling=yn,pt=yn);return n&&mt.forEach(function(Or){return i(se,Or)}),Qt&&es(se,_t),at}function st(se,ee,fe,ke){var at=F(fe);if(typeof at!="function")throw Error(t(150));if(fe=at.call(fe),fe==null)throw Error(t(151));for(var pt=at=null,mt=ee,_t=ee=0,yn=null,Ft=fe.next();mt!==null&&!Ft.done;_t++,Ft=fe.next()){mt.index>_t?(yn=mt,mt=null):yn=mt.sibling;var Or=Ce(se,mt,Ft.value,ke);if(Or===null){mt===null&&(mt=yn);break}n&&mt&&Or.alternate===null&&i(se,mt),ee=v(Or,ee,_t),pt===null?at=Or:pt.sibling=Or,pt=Or,mt=yn}if(Ft.done)return a(se,mt),Qt&&es(se,_t),at;if(mt===null){for(;!Ft.done;_t++,Ft=fe.next())Ft=Le(se,Ft.value,ke),Ft!==null&&(ee=v(Ft,ee,_t),pt===null?at=Ft:pt.sibling=Ft,pt=Ft);return Qt&&es(se,_t),at}for(mt=u(se,mt);!Ft.done;_t++,Ft=fe.next())Ft=Qe(mt,se,_t,Ft.value,ke),Ft!==null&&(n&&Ft.alternate!==null&&mt.delete(Ft.key===null?_t:Ft.key),ee=v(Ft,ee,_t),pt===null?at=Ft:pt.sibling=Ft,pt=Ft);return n&&mt.forEach(function(e_){return i(se,e_)}),Qt&&es(se,_t),at}function sn(se,ee,fe,ke){if(typeof fe=="object"&&fe!==null&&fe.type===k&&fe.key===null&&(fe=fe.props.children),typeof fe=="object"&&fe!==null){switch(fe.$$typeof){case B:e:{for(var at=fe.key,pt=ee;pt!==null;){if(pt.key===at){if(at=fe.type,at===k){if(pt.tag===7){a(se,pt.sibling),ee=p(pt,fe.props.children),ee.return=se,se=ee;break e}}else if(pt.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===ne&&rp(at)===pt.type){a(se,pt.sibling),ee=p(pt,fe.props),ee.ref=Ho(se,pt,fe),ee.return=se,se=ee;break e}a(se,pt);break}else i(se,pt);pt=pt.sibling}fe.type===k?(ee=ls(fe.props.children,se.mode,ke,fe.key),ee.return=se,se=ee):(ke=pl(fe.type,fe.key,fe.props,null,se.mode,ke),ke.ref=Ho(se,ee,fe),ke.return=se,se=ke)}return C(se);case I:e:{for(pt=fe.key;ee!==null;){if(ee.key===pt)if(ee.tag===4&&ee.stateNode.containerInfo===fe.containerInfo&&ee.stateNode.implementation===fe.implementation){a(se,ee.sibling),ee=p(ee,fe.children||[]),ee.return=se,se=ee;break e}else{a(se,ee);break}else i(se,ee);ee=ee.sibling}ee=Xu(fe,se.mode,ke),ee.return=se,se=ee}return C(se);case ne:return pt=fe._init,sn(se,ee,pt(fe._payload),ke)}if(N(fe))return rt(se,ee,fe,ke);if(F(fe))return st(se,ee,fe,ke);Wa(se,fe)}return typeof fe=="string"&&fe!==""||typeof fe=="number"?(fe=""+fe,ee!==null&&ee.tag===6?(a(se,ee.sibling),ee=p(ee,fe),ee.return=se,se=ee):(a(se,ee),ee=Wu(fe,se.mode,ke),ee.return=se,se=ee),C(se)):a(se,ee)}return sn}var Os=sp(!0),op=sp(!1),Xa=Tr(null),ja=null,ks=null,eu=null;function tu(){eu=ks=ja=null}function nu(n){var i=Xa.current;Yt(Xa),n._currentValue=i}function iu(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Bs(n,i){ja=n,eu=ks=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Yn=!0),n.firstContext=null)}function di(n){var i=n._currentValue;if(eu!==n)if(n={context:n,memoizedValue:i,next:null},ks===null){if(ja===null)throw Error(t(308));ks=n,ja.dependencies={lanes:0,firstContext:n}}else ks=ks.next=n;return i}var ts=null;function ru(n){ts===null?ts=[n]:ts.push(n)}function ap(n,i,a,u){var p=i.interleaved;return p===null?(a.next=a,ru(i)):(a.next=p.next,p.next=a),i.interleaved=a,sr(n,u)}function sr(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var br=!1;function su(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function or(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Pr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Ut&2)!==0){var p=u.pending;return p===null?i.next=i:(i.next=p.next,p.next=i),u.pending=i,sr(n,a)}return p=u.interleaved,p===null?(i.next=i,ru(u)):(i.next=p.next,p.next=i),u.interleaved=i,sr(n,a)}function Ka(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,An(n,a)}}function cp(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var p=null,v=null;if(a=a.firstBaseUpdate,a!==null){do{var C={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};v===null?p=v=C:v=v.next=C,a=a.next}while(a!==null);v===null?p=v=i:v=v.next=i}else p=v=i;a={baseState:u.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function qa(n,i,a,u){var p=n.updateQueue;br=!1;var v=p.firstBaseUpdate,C=p.lastBaseUpdate,H=p.shared.pending;if(H!==null){p.shared.pending=null;var Z=H,ge=Z.next;Z.next=null,C===null?v=ge:C.next=ge,C=Z;var be=n.alternate;be!==null&&(be=be.updateQueue,H=be.lastBaseUpdate,H!==C&&(H===null?be.firstBaseUpdate=ge:H.next=ge,be.lastBaseUpdate=Z))}if(v!==null){var Le=p.baseState;C=0,be=ge=Z=null,H=v;do{var Ce=H.lane,Qe=H.eventTime;if((u&Ce)===Ce){be!==null&&(be=be.next={eventTime:Qe,lane:0,tag:H.tag,payload:H.payload,callback:H.callback,next:null});e:{var rt=n,st=H;switch(Ce=i,Qe=a,st.tag){case 1:if(rt=st.payload,typeof rt=="function"){Le=rt.call(Qe,Le,Ce);break e}Le=rt;break e;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=st.payload,Ce=typeof rt=="function"?rt.call(Qe,Le,Ce):rt,Ce==null)break e;Le=$({},Le,Ce);break e;case 2:br=!0}}H.callback!==null&&H.lane!==0&&(n.flags|=64,Ce=p.effects,Ce===null?p.effects=[H]:Ce.push(H))}else Qe={eventTime:Qe,lane:Ce,tag:H.tag,payload:H.payload,callback:H.callback,next:null},be===null?(ge=be=Qe,Z=Le):be=be.next=Qe,C|=Ce;if(H=H.next,H===null){if(H=p.shared.pending,H===null)break;Ce=H,H=Ce.next,Ce.next=null,p.lastBaseUpdate=Ce,p.shared.pending=null}}while(!0);if(be===null&&(Z=Le),p.baseState=Z,p.firstBaseUpdate=ge,p.lastBaseUpdate=be,i=p.shared.interleaved,i!==null){p=i;do C|=p.lane,p=p.next;while(p!==i)}else v===null&&(p.shared.lanes=0);rs|=C,n.lanes=C,n.memoizedState=Le}}function up(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],p=u.callback;if(p!==null){if(u.callback=null,u=a,typeof p!="function")throw Error(t(191,p));p.call(u)}}}var Vo={},Vi=Tr(Vo),Go=Tr(Vo),Wo=Tr(Vo);function ns(n){if(n===Vo)throw Error(t(174));return n}function ou(n,i){switch(Xt(Wo,i),Xt(Go,n),Xt(Vi,Vo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:E(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=E(i,n)}Yt(Vi),Xt(Vi,i)}function zs(){Yt(Vi),Yt(Go),Yt(Wo)}function fp(n){ns(Wo.current);var i=ns(Vi.current),a=E(i,n.type);i!==a&&(Xt(Go,n),Xt(Vi,a))}function au(n){Go.current===n&&(Yt(Vi),Yt(Go))}var Jt=Tr(0);function Ya(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var lu=[];function cu(){for(var n=0;n<lu.length;n++)lu[n]._workInProgressVersionPrimary=null;lu.length=0}var Qa=P.ReactCurrentDispatcher,uu=P.ReactCurrentBatchConfig,is=0,$t=null,hn=null,xn=null,Za=!1,Xo=!1,jo=0,Sx=0;function Pn(){throw Error(t(321))}function fu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!Ti(n[a],i[a]))return!1;return!0}function hu(n,i,a,u,p,v){if(is=v,$t=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Qa.current=n===null||n.memoizedState===null?Tx:Cx,n=a(u,p),Xo){v=0;do{if(Xo=!1,jo=0,25<=v)throw Error(t(301));v+=1,xn=hn=null,i.updateQueue=null,Qa.current=Rx,n=a(u,p)}while(Xo)}if(Qa.current=el,i=hn!==null&&hn.next!==null,is=0,xn=hn=$t=null,Za=!1,i)throw Error(t(300));return n}function du(){var n=jo!==0;return jo=0,n}function Gi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?$t.memoizedState=xn=n:xn=xn.next=n,xn}function pi(){if(hn===null){var n=$t.alternate;n=n!==null?n.memoizedState:null}else n=hn.next;var i=xn===null?$t.memoizedState:xn.next;if(i!==null)xn=i,hn=n;else{if(n===null)throw Error(t(310));hn=n,n={memoizedState:hn.memoizedState,baseState:hn.baseState,baseQueue:hn.baseQueue,queue:hn.queue,next:null},xn===null?$t.memoizedState=xn=n:xn=xn.next=n}return xn}function Ko(n,i){return typeof i=="function"?i(n):i}function pu(n){var i=pi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=hn,p=u.baseQueue,v=a.pending;if(v!==null){if(p!==null){var C=p.next;p.next=v.next,v.next=C}u.baseQueue=p=v,a.pending=null}if(p!==null){v=p.next,u=u.baseState;var H=C=null,Z=null,ge=v;do{var be=ge.lane;if((is&be)===be)Z!==null&&(Z=Z.next={lane:0,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null}),u=ge.hasEagerState?ge.eagerState:n(u,ge.action);else{var Le={lane:be,action:ge.action,hasEagerState:ge.hasEagerState,eagerState:ge.eagerState,next:null};Z===null?(H=Z=Le,C=u):Z=Z.next=Le,$t.lanes|=be,rs|=be}ge=ge.next}while(ge!==null&&ge!==v);Z===null?C=u:Z.next=H,Ti(u,i.memoizedState)||(Yn=!0),i.memoizedState=u,i.baseState=C,i.baseQueue=Z,a.lastRenderedState=u}if(n=a.interleaved,n!==null){p=n;do v=p.lane,$t.lanes|=v,rs|=v,p=p.next;while(p!==n)}else p===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function mu(n){var i=pi(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,p=a.pending,v=i.memoizedState;if(p!==null){a.pending=null;var C=p=p.next;do v=n(v,C.action),C=C.next;while(C!==p);Ti(v,i.memoizedState)||(Yn=!0),i.memoizedState=v,i.baseQueue===null&&(i.baseState=v),a.lastRenderedState=v}return[v,u]}function hp(){}function dp(n,i){var a=$t,u=pi(),p=i(),v=!Ti(u.memoizedState,p);if(v&&(u.memoizedState=p,Yn=!0),u=u.queue,gu(gp.bind(null,a,u,n),[n]),u.getSnapshot!==i||v||xn!==null&&xn.memoizedState.tag&1){if(a.flags|=2048,qo(9,mp.bind(null,a,u,p,i),void 0,null),_n===null)throw Error(t(349));(is&30)!==0||pp(a,i,p)}return p}function pp(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function mp(n,i,a,u){i.value=a,i.getSnapshot=u,vp(i)&&xp(n)}function gp(n,i,a){return a(function(){vp(i)&&xp(n)})}function vp(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!Ti(n,a)}catch{return!0}}function xp(n){var i=sr(n,1);i!==null&&Li(i,n,1,-1)}function _p(n){var i=Gi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ko,lastRenderedState:n},i.queue=n,n=n.dispatch=wx.bind(null,$t,n),[i.memoizedState,n]}function qo(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function yp(){return pi().memoizedState}function Ja(n,i,a,u){var p=Gi();$t.flags|=n,p.memoizedState=qo(1|i,a,void 0,u===void 0?null:u)}function $a(n,i,a,u){var p=pi();u=u===void 0?null:u;var v=void 0;if(hn!==null){var C=hn.memoizedState;if(v=C.destroy,u!==null&&fu(u,C.deps)){p.memoizedState=qo(i,a,v,u);return}}$t.flags|=n,p.memoizedState=qo(1|i,a,v,u)}function Mp(n,i){return Ja(8390656,8,n,i)}function gu(n,i){return $a(2048,8,n,i)}function Sp(n,i){return $a(4,2,n,i)}function Ap(n,i){return $a(4,4,n,i)}function Ep(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function wp(n,i,a){return a=a!=null?a.concat([n]):null,$a(4,4,Ep.bind(null,i,n),a)}function vu(){}function Tp(n,i){var a=pi();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&fu(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function Cp(n,i){var a=pi();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&fu(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function Rp(n,i,a){return(is&21)===0?(n.baseState&&(n.baseState=!1,Yn=!0),n.memoizedState=a):(Ti(a,i)||(a=Ye(),$t.lanes|=a,rs|=a,n.baseState=!0),i)}function Ax(n,i){var a=St;St=a!==0&&4>a?a:4,n(!0);var u=uu.transition;uu.transition={};try{n(!1),i()}finally{St=a,uu.transition=u}}function bp(){return pi().memoizedState}function Ex(n,i,a){var u=Dr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},Pp(n))Lp(i,a);else if(a=ap(n,i,a,u),a!==null){var p=Gn();Li(a,n,u,p),Ip(a,i,u)}}function wx(n,i,a){var u=Dr(n),p={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pp(n))Lp(i,p);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=i.lastRenderedReducer,v!==null))try{var C=i.lastRenderedState,H=v(C,a);if(p.hasEagerState=!0,p.eagerState=H,Ti(H,C)){var Z=i.interleaved;Z===null?(p.next=p,ru(i)):(p.next=Z.next,Z.next=p),i.interleaved=p;return}}catch{}finally{}a=ap(n,i,p,u),a!==null&&(p=Gn(),Li(a,n,u,p),Ip(a,i,u))}}function Pp(n){var i=n.alternate;return n===$t||i!==null&&i===$t}function Lp(n,i){Xo=Za=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function Ip(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,An(n,a)}}var el={readContext:di,useCallback:Pn,useContext:Pn,useEffect:Pn,useImperativeHandle:Pn,useInsertionEffect:Pn,useLayoutEffect:Pn,useMemo:Pn,useReducer:Pn,useRef:Pn,useState:Pn,useDebugValue:Pn,useDeferredValue:Pn,useTransition:Pn,useMutableSource:Pn,useSyncExternalStore:Pn,useId:Pn,unstable_isNewReconciler:!1},Tx={readContext:di,useCallback:function(n,i){return Gi().memoizedState=[n,i===void 0?null:i],n},useContext:di,useEffect:Mp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Ja(4194308,4,Ep.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Ja(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ja(4,2,n,i)},useMemo:function(n,i){var a=Gi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=Gi();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=Ex.bind(null,$t,n),[u.memoizedState,n]},useRef:function(n){var i=Gi();return n={current:n},i.memoizedState=n},useState:_p,useDebugValue:vu,useDeferredValue:function(n){return Gi().memoizedState=n},useTransition:function(){var n=_p(!1),i=n[0];return n=Ax.bind(null,n[1]),Gi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=$t,p=Gi();if(Qt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),_n===null)throw Error(t(349));(is&30)!==0||pp(u,i,a)}p.memoizedState=a;var v={value:a,getSnapshot:i};return p.queue=v,Mp(gp.bind(null,u,v,n),[n]),u.flags|=2048,qo(9,mp.bind(null,u,v,a,i),void 0,null),a},useId:function(){var n=Gi(),i=_n.identifierPrefix;if(Qt){var a=rr,u=ir;a=(u&~(1<<32-Ie(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=jo++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Sx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Cx={readContext:di,useCallback:Tp,useContext:di,useEffect:gu,useImperativeHandle:wp,useInsertionEffect:Sp,useLayoutEffect:Ap,useMemo:Cp,useReducer:pu,useRef:yp,useState:function(){return pu(Ko)},useDebugValue:vu,useDeferredValue:function(n){var i=pi();return Rp(i,hn.memoizedState,n)},useTransition:function(){var n=pu(Ko)[0],i=pi().memoizedState;return[n,i]},useMutableSource:hp,useSyncExternalStore:dp,useId:bp,unstable_isNewReconciler:!1},Rx={readContext:di,useCallback:Tp,useContext:di,useEffect:gu,useImperativeHandle:wp,useInsertionEffect:Sp,useLayoutEffect:Ap,useMemo:Cp,useReducer:mu,useRef:yp,useState:function(){return mu(Ko)},useDebugValue:vu,useDeferredValue:function(n){var i=pi();return hn===null?i.memoizedState=n:Rp(i,hn.memoizedState,n)},useTransition:function(){var n=mu(Ko)[0],i=pi().memoizedState;return[n,i]},useMutableSource:hp,useSyncExternalStore:dp,useId:bp,unstable_isNewReconciler:!1};function Ri(n,i){if(n&&n.defaultProps){i=$({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function xu(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:$({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var tl={isMounted:function(n){return(n=n._reactInternals)?ln(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=Gn(),p=Dr(n),v=or(u,p);v.payload=i,a!=null&&(v.callback=a),i=Pr(n,v,p),i!==null&&(Li(i,n,p,u),Ka(i,n,p))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=Gn(),p=Dr(n),v=or(u,p);v.tag=1,v.payload=i,a!=null&&(v.callback=a),i=Pr(n,v,p),i!==null&&(Li(i,n,p,u),Ka(i,n,p))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Gn(),u=Dr(n),p=or(a,u);p.tag=2,i!=null&&(p.callback=i),i=Pr(n,p,u),i!==null&&(Li(i,n,u,a),Ka(i,n,u))}};function Up(n,i,a,u,p,v,C){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,v,C):i.prototype&&i.prototype.isPureReactComponent?!Do(a,u)||!Do(p,v):!0}function Dp(n,i,a){var u=!1,p=Cr,v=i.contextType;return typeof v=="object"&&v!==null?v=di(v):(p=qn(i)?Jr:bn.current,u=i.contextTypes,v=(u=u!=null)?Us(n,p):Cr),i=new i(a,v),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=tl,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=v),i}function Np(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&tl.enqueueReplaceState(i,i.state,null)}function _u(n,i,a,u){var p=n.stateNode;p.props=a,p.state=n.memoizedState,p.refs={},su(n);var v=i.contextType;typeof v=="object"&&v!==null?p.context=di(v):(v=qn(i)?Jr:bn.current,p.context=Us(n,v)),p.state=n.memoizedState,v=i.getDerivedStateFromProps,typeof v=="function"&&(xu(n,i,v,a),p.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(i=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),i!==p.state&&tl.enqueueReplaceState(p,p.state,null),qa(n,a,p,u),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Hs(n,i){try{var a="",u=i;do a+=xe(u),u=u.return;while(u);var p=a}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:i,stack:p,digest:null}}function yu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function Mu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var bx=typeof WeakMap=="function"?WeakMap:Map;function Fp(n,i,a){a=or(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){ll||(ll=!0,Fu=u),Mu(n,i)},a}function Op(n,i,a){a=or(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var p=i.value;a.payload=function(){return u(p)},a.callback=function(){Mu(n,i)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(a.callback=function(){Mu(n,i),typeof u!="function"&&(Ir===null?Ir=new Set([this]):Ir.add(this));var C=i.stack;this.componentDidCatch(i.value,{componentStack:C!==null?C:""})}),a}function kp(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new bx;var p=new Set;u.set(i,p)}else p=u.get(i),p===void 0&&(p=new Set,u.set(i,p));p.has(a)||(p.add(a),n=Gx.bind(null,n,i,a),i.then(n,n))}function Bp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function zp(n,i,a,u,p){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=or(-1,1),i.tag=2,Pr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var Px=P.ReactCurrentOwner,Yn=!1;function Vn(n,i,a,u){i.child=n===null?op(i,null,a,u):Os(i,n.child,a,u)}function Hp(n,i,a,u,p){a=a.render;var v=i.ref;return Bs(i,p),u=hu(n,i,a,u,v,p),a=du(),n!==null&&!Yn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,ar(n,i,p)):(Qt&&a&&Yc(i),i.flags|=1,Vn(n,i,u,p),i.child)}function Vp(n,i,a,u,p){if(n===null){var v=a.type;return typeof v=="function"&&!Gu(v)&&v.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=v,Gp(n,i,v,u,p)):(n=pl(a.type,null,u,i,i.mode,p),n.ref=i.ref,n.return=i,i.child=n)}if(v=n.child,(n.lanes&p)===0){var C=v.memoizedProps;if(a=a.compare,a=a!==null?a:Do,a(C,u)&&n.ref===i.ref)return ar(n,i,p)}return i.flags|=1,n=Fr(v,u),n.ref=i.ref,n.return=i,i.child=n}function Gp(n,i,a,u,p){if(n!==null){var v=n.memoizedProps;if(Do(v,u)&&n.ref===i.ref)if(Yn=!1,i.pendingProps=u=v,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Yn=!0);else return i.lanes=n.lanes,ar(n,i,p)}return Su(n,i,a,u,p)}function Wp(n,i,a){var u=i.pendingProps,p=u.children,v=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xt(Gs,oi),oi|=a;else{if((a&1073741824)===0)return n=v!==null?v.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Xt(Gs,oi),oi|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=v!==null?v.baseLanes:a,Xt(Gs,oi),oi|=u}else v!==null?(u=v.baseLanes|a,i.memoizedState=null):u=a,Xt(Gs,oi),oi|=u;return Vn(n,i,p,a),i.child}function Xp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Su(n,i,a,u,p){var v=qn(a)?Jr:bn.current;return v=Us(i,v),Bs(i,p),a=hu(n,i,a,u,v,p),u=du(),n!==null&&!Yn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~p,ar(n,i,p)):(Qt&&u&&Yc(i),i.flags|=1,Vn(n,i,a,p),i.child)}function jp(n,i,a,u,p){if(qn(a)){var v=!0;Ba(i)}else v=!1;if(Bs(i,p),i.stateNode===null)il(n,i),Dp(i,a,u),_u(i,a,u,p),u=!0;else if(n===null){var C=i.stateNode,H=i.memoizedProps;C.props=H;var Z=C.context,ge=a.contextType;typeof ge=="object"&&ge!==null?ge=di(ge):(ge=qn(a)?Jr:bn.current,ge=Us(i,ge));var be=a.getDerivedStateFromProps,Le=typeof be=="function"||typeof C.getSnapshotBeforeUpdate=="function";Le||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(H!==u||Z!==ge)&&Np(i,C,u,ge),br=!1;var Ce=i.memoizedState;C.state=Ce,qa(i,u,C,p),Z=i.memoizedState,H!==u||Ce!==Z||Kn.current||br?(typeof be=="function"&&(xu(i,a,be,u),Z=i.memoizedState),(H=br||Up(i,a,H,u,Ce,Z,ge))?(Le||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(i.flags|=4194308)):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=Z),C.props=u,C.state=Z,C.context=ge,u=H):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{C=i.stateNode,lp(n,i),H=i.memoizedProps,ge=i.type===i.elementType?H:Ri(i.type,H),C.props=ge,Le=i.pendingProps,Ce=C.context,Z=a.contextType,typeof Z=="object"&&Z!==null?Z=di(Z):(Z=qn(a)?Jr:bn.current,Z=Us(i,Z));var Qe=a.getDerivedStateFromProps;(be=typeof Qe=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(H!==Le||Ce!==Z)&&Np(i,C,u,Z),br=!1,Ce=i.memoizedState,C.state=Ce,qa(i,u,C,p);var rt=i.memoizedState;H!==Le||Ce!==rt||Kn.current||br?(typeof Qe=="function"&&(xu(i,a,Qe,u),rt=i.memoizedState),(ge=br||Up(i,a,ge,u,Ce,rt,Z)||!1)?(be||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(u,rt,Z),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(u,rt,Z)),typeof C.componentDidUpdate=="function"&&(i.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof C.componentDidUpdate!="function"||H===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=rt),C.props=u,C.state=rt,C.context=Z,u=ge):(typeof C.componentDidUpdate!="function"||H===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=1024),u=!1)}return Au(n,i,a,u,v,p)}function Au(n,i,a,u,p,v){Xp(n,i);var C=(i.flags&128)!==0;if(!u&&!C)return p&&Zd(i,a,!1),ar(n,i,v);u=i.stateNode,Px.current=i;var H=C&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&C?(i.child=Os(i,n.child,null,v),i.child=Os(i,null,H,v)):Vn(n,i,H,v),i.memoizedState=u.state,p&&Zd(i,a,!0),i.child}function Kp(n){var i=n.stateNode;i.pendingContext?Yd(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Yd(n,i.context,!1),ou(n,i.containerInfo)}function qp(n,i,a,u,p){return Fs(),$c(p),i.flags|=256,Vn(n,i,a,u),i.child}var Eu={dehydrated:null,treeContext:null,retryLane:0};function wu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Yp(n,i,a){var u=i.pendingProps,p=Jt.current,v=!1,C=(i.flags&128)!==0,H;if((H=C)||(H=n!==null&&n.memoizedState===null?!1:(p&2)!==0),H?(v=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),Xt(Jt,p&1),n===null)return Jc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(C=u.children,n=u.fallback,v?(u=i.mode,v=i.child,C={mode:"hidden",children:C},(u&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=C):v=ml(C,u,0,null),n=ls(n,u,a,null),v.return=i,n.return=i,v.sibling=n,i.child=v,i.child.memoizedState=wu(a),i.memoizedState=Eu,n):Tu(i,C));if(p=n.memoizedState,p!==null&&(H=p.dehydrated,H!==null))return Lx(n,i,C,u,H,p,a);if(v){v=u.fallback,C=i.mode,p=n.child,H=p.sibling;var Z={mode:"hidden",children:u.children};return(C&1)===0&&i.child!==p?(u=i.child,u.childLanes=0,u.pendingProps=Z,i.deletions=null):(u=Fr(p,Z),u.subtreeFlags=p.subtreeFlags&14680064),H!==null?v=Fr(H,v):(v=ls(v,C,a,null),v.flags|=2),v.return=i,u.return=i,u.sibling=v,i.child=u,u=v,v=i.child,C=n.child.memoizedState,C=C===null?wu(a):{baseLanes:C.baseLanes|a,cachePool:null,transitions:C.transitions},v.memoizedState=C,v.childLanes=n.childLanes&~a,i.memoizedState=Eu,u}return v=n.child,n=v.sibling,u=Fr(v,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function Tu(n,i){return i=ml({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function nl(n,i,a,u){return u!==null&&$c(u),Os(i,n.child,null,a),n=Tu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Lx(n,i,a,u,p,v,C){if(a)return i.flags&256?(i.flags&=-257,u=yu(Error(t(422))),nl(n,i,C,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(v=u.fallback,p=i.mode,u=ml({mode:"visible",children:u.children},p,0,null),v=ls(v,p,C,null),v.flags|=2,u.return=i,v.return=i,u.sibling=v,i.child=u,(i.mode&1)!==0&&Os(i,n.child,null,C),i.child.memoizedState=wu(C),i.memoizedState=Eu,v);if((i.mode&1)===0)return nl(n,i,C,null);if(p.data==="$!"){if(u=p.nextSibling&&p.nextSibling.dataset,u)var H=u.dgst;return u=H,v=Error(t(419)),u=yu(v,u,void 0),nl(n,i,C,u)}if(H=(C&n.childLanes)!==0,Yn||H){if(u=_n,u!==null){switch(C&-C){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(u.suspendedLanes|C))!==0?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,sr(n,p),Li(u,n,p,-1))}return Vu(),u=yu(Error(t(421))),nl(n,i,C,u)}return p.data==="$?"?(i.flags|=128,i.child=n.child,i=Wx.bind(null,n),p._reactRetry=i,null):(n=v.treeContext,si=wr(p.nextSibling),ri=i,Qt=!0,Ci=null,n!==null&&(fi[hi++]=ir,fi[hi++]=rr,fi[hi++]=$r,ir=n.id,rr=n.overflow,$r=i),i=Tu(i,u.children),i.flags|=4096,i)}function Qp(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),iu(n.return,i,a)}function Cu(n,i,a,u,p){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:p}:(v.isBackwards=i,v.rendering=null,v.renderingStartTime=0,v.last=u,v.tail=a,v.tailMode=p)}function Zp(n,i,a){var u=i.pendingProps,p=u.revealOrder,v=u.tail;if(Vn(n,i,u.children,a),u=Jt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Qp(n,a,i);else if(n.tag===19)Qp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Xt(Jt,u),(i.mode&1)===0)i.memoizedState=null;else switch(p){case"forwards":for(a=i.child,p=null;a!==null;)n=a.alternate,n!==null&&Ya(n)===null&&(p=a),a=a.sibling;a=p,a===null?(p=i.child,i.child=null):(p=a.sibling,a.sibling=null),Cu(i,!1,p,a,v);break;case"backwards":for(a=null,p=i.child,i.child=null;p!==null;){if(n=p.alternate,n!==null&&Ya(n)===null){i.child=p;break}n=p.sibling,p.sibling=a,a=p,p=n}Cu(i,!0,a,null,v);break;case"together":Cu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function il(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ar(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),rs|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Fr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Fr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Ix(n,i,a){switch(i.tag){case 3:Kp(i),Fs();break;case 5:fp(i);break;case 1:qn(i.type)&&Ba(i);break;case 4:ou(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,p=i.memoizedProps.value;Xt(Xa,u._currentValue),u._currentValue=p;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Xt(Jt,Jt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Yp(n,i,a):(Xt(Jt,Jt.current&1),n=ar(n,i,a),n!==null?n.sibling:null);Xt(Jt,Jt.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Zp(n,i,a);i.flags|=128}if(p=i.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Xt(Jt,Jt.current),u)break;return null;case 22:case 23:return i.lanes=0,Wp(n,i,a)}return ar(n,i,a)}var Jp,Ru,$p,em;Jp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Ru=function(){},$p=function(n,i,a,u){var p=n.memoizedProps;if(p!==u){n=i.stateNode,ns(Vi.current);var v=null;switch(a){case"input":p=Ve(n,p),u=Ve(n,u),v=[];break;case"select":p=$({},p,{value:void 0}),u=$({},u,{value:void 0}),v=[];break;case"textarea":p=ot(n,p),u=ot(n,u),v=[];break;default:typeof p.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Fa)}Xe(a,u);var C;a=null;for(ge in p)if(!u.hasOwnProperty(ge)&&p.hasOwnProperty(ge)&&p[ge]!=null)if(ge==="style"){var H=p[ge];for(C in H)H.hasOwnProperty(C)&&(a||(a={}),a[C]="")}else ge!=="dangerouslySetInnerHTML"&&ge!=="children"&&ge!=="suppressContentEditableWarning"&&ge!=="suppressHydrationWarning"&&ge!=="autoFocus"&&(o.hasOwnProperty(ge)?v||(v=[]):(v=v||[]).push(ge,null));for(ge in u){var Z=u[ge];if(H=p!=null?p[ge]:void 0,u.hasOwnProperty(ge)&&Z!==H&&(Z!=null||H!=null))if(ge==="style")if(H){for(C in H)!H.hasOwnProperty(C)||Z&&Z.hasOwnProperty(C)||(a||(a={}),a[C]="");for(C in Z)Z.hasOwnProperty(C)&&H[C]!==Z[C]&&(a||(a={}),a[C]=Z[C])}else a||(v||(v=[]),v.push(ge,a)),a=Z;else ge==="dangerouslySetInnerHTML"?(Z=Z?Z.__html:void 0,H=H?H.__html:void 0,Z!=null&&H!==Z&&(v=v||[]).push(ge,Z)):ge==="children"?typeof Z!="string"&&typeof Z!="number"||(v=v||[]).push(ge,""+Z):ge!=="suppressContentEditableWarning"&&ge!=="suppressHydrationWarning"&&(o.hasOwnProperty(ge)?(Z!=null&&ge==="onScroll"&&qt("scroll",n),v||H===Z||(v=[])):(v=v||[]).push(ge,Z))}a&&(v=v||[]).push("style",a);var ge=v;(i.updateQueue=ge)&&(i.flags|=4)}},em=function(n,i,a,u){a!==u&&(i.flags|=4)};function Yo(n,i){if(!Qt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Ln(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags&14680064,u|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)a|=p.lanes|p.childLanes,u|=p.subtreeFlags,u|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function Ux(n,i,a){var u=i.pendingProps;switch(Qc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ln(i),null;case 1:return qn(i.type)&&ka(),Ln(i),null;case 3:return u=i.stateNode,zs(),Yt(Kn),Yt(bn),cu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ga(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Ci!==null&&(Bu(Ci),Ci=null))),Ru(n,i),Ln(i),null;case 5:au(i);var p=ns(Wo.current);if(a=i.type,n!==null&&i.stateNode!=null)$p(n,i,a,u,p),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return Ln(i),null}if(n=ns(Vi.current),Ga(i)){u=i.stateNode,a=i.type;var v=i.memoizedProps;switch(u[Hi]=i,u[Bo]=v,n=(i.mode&1)!==0,a){case"dialog":qt("cancel",u),qt("close",u);break;case"iframe":case"object":case"embed":qt("load",u);break;case"video":case"audio":for(p=0;p<Fo.length;p++)qt(Fo[p],u);break;case"source":qt("error",u);break;case"img":case"image":case"link":qt("error",u),qt("load",u);break;case"details":qt("toggle",u);break;case"input":tt(u,v),qt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!v.multiple},qt("invalid",u);break;case"textarea":gt(u,v),qt("invalid",u)}Xe(a,v),p=null;for(var C in v)if(v.hasOwnProperty(C)){var H=v[C];C==="children"?typeof H=="string"?u.textContent!==H&&(v.suppressHydrationWarning!==!0&&Na(u.textContent,H,n),p=["children",H]):typeof H=="number"&&u.textContent!==""+H&&(v.suppressHydrationWarning!==!0&&Na(u.textContent,H,n),p=["children",""+H]):o.hasOwnProperty(C)&&H!=null&&C==="onScroll"&&qt("scroll",u)}switch(a){case"input":pe(u),ct(u,v,!0);break;case"textarea":pe(u),lt(u);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(u.onclick=Fa)}u=p,i.updateQueue=u,u!==null&&(i.flags|=4)}else{C=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=L(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=C.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=C.createElement(a,{is:u.is}):(n=C.createElement(a),a==="select"&&(C=n,u.multiple?C.multiple=!0:u.size&&(C.size=u.size))):n=C.createElementNS(n,a),n[Hi]=i,n[Bo]=u,Jp(n,i,!1,!1),i.stateNode=n;e:{switch(C=Ne(a,u),a){case"dialog":qt("cancel",n),qt("close",n),p=u;break;case"iframe":case"object":case"embed":qt("load",n),p=u;break;case"video":case"audio":for(p=0;p<Fo.length;p++)qt(Fo[p],n);p=u;break;case"source":qt("error",n),p=u;break;case"img":case"image":case"link":qt("error",n),qt("load",n),p=u;break;case"details":qt("toggle",n),p=u;break;case"input":tt(n,u),p=Ve(n,u),qt("invalid",n);break;case"option":p=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},p=$({},u,{value:void 0}),qt("invalid",n);break;case"textarea":gt(n,u),p=ot(n,u),qt("invalid",n);break;default:p=u}Xe(a,p),H=p;for(v in H)if(H.hasOwnProperty(v)){var Z=H[v];v==="style"?ve(n,Z):v==="dangerouslySetInnerHTML"?(Z=Z?Z.__html:void 0,Z!=null&&_e(n,Z)):v==="children"?typeof Z=="string"?(a!=="textarea"||Z!=="")&&Se(n,Z):typeof Z=="number"&&Se(n,""+Z):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?Z!=null&&v==="onScroll"&&qt("scroll",n):Z!=null&&b(n,v,Z,C))}switch(a){case"input":pe(n),ct(n,u,!1);break;case"textarea":pe(n),lt(n);break;case"option":u.value!=null&&n.setAttribute("value",""+W(u.value));break;case"select":n.multiple=!!u.multiple,v=u.value,v!=null?xt(n,!!u.multiple,v,!1):u.defaultValue!=null&&xt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=Fa)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Ln(i),null;case 6:if(n&&i.stateNode!=null)em(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=ns(Wo.current),ns(Vi.current),Ga(i)){if(u=i.stateNode,a=i.memoizedProps,u[Hi]=i,(v=u.nodeValue!==a)&&(n=ri,n!==null))switch(n.tag){case 3:Na(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Na(u.nodeValue,a,(n.mode&1)!==0)}v&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[Hi]=i,i.stateNode=u}return Ln(i),null;case 13:if(Yt(Jt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Qt&&si!==null&&(i.mode&1)!==0&&(i.flags&128)===0)ip(),Fs(),i.flags|=98560,v=!1;else if(v=Ga(i),u!==null&&u.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=i.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Hi]=i}else Fs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ln(i),v=!1}else Ci!==null&&(Bu(Ci),Ci=null),v=!0;if(!v)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Jt.current&1)!==0?dn===0&&(dn=3):Vu())),i.updateQueue!==null&&(i.flags|=4),Ln(i),null);case 4:return zs(),Ru(n,i),n===null&&Oo(i.stateNode.containerInfo),Ln(i),null;case 10:return nu(i.type._context),Ln(i),null;case 17:return qn(i.type)&&ka(),Ln(i),null;case 19:if(Yt(Jt),v=i.memoizedState,v===null)return Ln(i),null;if(u=(i.flags&128)!==0,C=v.rendering,C===null)if(u)Yo(v,!1);else{if(dn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(C=Ya(n),C!==null){for(i.flags|=128,Yo(v,!1),u=C.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)v=a,n=u,v.flags&=14680066,C=v.alternate,C===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=C.childLanes,v.lanes=C.lanes,v.child=C.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=C.memoizedProps,v.memoizedState=C.memoizedState,v.updateQueue=C.updateQueue,v.type=C.type,n=C.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Xt(Jt,Jt.current&1|2),i.child}n=n.sibling}v.tail!==null&&jt()>Ws&&(i.flags|=128,u=!0,Yo(v,!1),i.lanes=4194304)}else{if(!u)if(n=Ya(C),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Yo(v,!0),v.tail===null&&v.tailMode==="hidden"&&!C.alternate&&!Qt)return Ln(i),null}else 2*jt()-v.renderingStartTime>Ws&&a!==1073741824&&(i.flags|=128,u=!0,Yo(v,!1),i.lanes=4194304);v.isBackwards?(C.sibling=i.child,i.child=C):(a=v.last,a!==null?a.sibling=C:i.child=C,v.last=C)}return v.tail!==null?(i=v.tail,v.rendering=i,v.tail=i.sibling,v.renderingStartTime=jt(),i.sibling=null,a=Jt.current,Xt(Jt,u?a&1|2:a&1),i):(Ln(i),null);case 22:case 23:return Hu(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(oi&1073741824)!==0&&(Ln(i),i.subtreeFlags&6&&(i.flags|=8192)):Ln(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Dx(n,i){switch(Qc(i),i.tag){case 1:return qn(i.type)&&ka(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return zs(),Yt(Kn),Yt(bn),cu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return au(i),null;case 13:if(Yt(Jt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Fs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Yt(Jt),null;case 4:return zs(),null;case 10:return nu(i.type._context),null;case 22:case 23:return Hu(),null;case 24:return null;default:return null}}var rl=!1,In=!1,Nx=typeof WeakSet=="function"?WeakSet:Set,$e=null;function Vs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){en(n,i,u)}else a.current=null}function bu(n,i,a){try{a()}catch(u){en(n,i,u)}}var tm=!1;function Fx(n,i){if(Hc=Ea,n=Ud(),Uc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var p=u.anchorOffset,v=u.focusNode;u=u.focusOffset;try{a.nodeType,v.nodeType}catch{a=null;break e}var C=0,H=-1,Z=-1,ge=0,be=0,Le=n,Ce=null;t:for(;;){for(var Qe;Le!==a||p!==0&&Le.nodeType!==3||(H=C+p),Le!==v||u!==0&&Le.nodeType!==3||(Z=C+u),Le.nodeType===3&&(C+=Le.nodeValue.length),(Qe=Le.firstChild)!==null;)Ce=Le,Le=Qe;for(;;){if(Le===n)break t;if(Ce===a&&++ge===p&&(H=C),Ce===v&&++be===u&&(Z=C),(Qe=Le.nextSibling)!==null)break;Le=Ce,Ce=Le.parentNode}Le=Qe}a=H===-1||Z===-1?null:{start:H,end:Z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vc={focusedElem:n,selectionRange:a},Ea=!1,$e=i;$e!==null;)if(i=$e,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,$e=n;else for(;$e!==null;){i=$e;try{var rt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(rt!==null){var st=rt.memoizedProps,sn=rt.memoizedState,se=i.stateNode,ee=se.getSnapshotBeforeUpdate(i.elementType===i.type?st:Ri(i.type,st),sn);se.__reactInternalSnapshotBeforeUpdate=ee}break;case 3:var fe=i.stateNode.containerInfo;fe.nodeType===1?fe.textContent="":fe.nodeType===9&&fe.documentElement&&fe.removeChild(fe.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ke){en(i,i.return,ke)}if(n=i.sibling,n!==null){n.return=i.return,$e=n;break}$e=i.return}return rt=tm,tm=!1,rt}function Qo(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var p=u=u.next;do{if((p.tag&n)===n){var v=p.destroy;p.destroy=void 0,v!==void 0&&bu(i,a,v)}p=p.next}while(p!==u)}}function sl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function Pu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function nm(n){var i=n.alternate;i!==null&&(n.alternate=null,nm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Hi],delete i[Bo],delete i[jc],delete i[xx],delete i[_x])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function im(n){return n.tag===5||n.tag===3||n.tag===4}function rm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||im(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Lu(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Fa));else if(u!==4&&(n=n.child,n!==null))for(Lu(n,i,a),n=n.sibling;n!==null;)Lu(n,i,a),n=n.sibling}function Iu(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Iu(n,i,a),n=n.sibling;n!==null;)Iu(n,i,a),n=n.sibling}var En=null,bi=!1;function Lr(n,i,a){for(a=a.child;a!==null;)sm(n,i,a),a=a.sibling}function sm(n,i,a){if(Be&&typeof Be.onCommitFiberUnmount=="function")try{Be.onCommitFiberUnmount(oe,a)}catch{}switch(a.tag){case 5:In||Vs(a,i);case 6:var u=En,p=bi;En=null,Lr(n,i,a),En=u,bi=p,En!==null&&(bi?(n=En,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):En.removeChild(a.stateNode));break;case 18:En!==null&&(bi?(n=En,a=a.stateNode,n.nodeType===8?Xc(n.parentNode,a):n.nodeType===1&&Xc(n,a),Ro(n)):Xc(En,a.stateNode));break;case 4:u=En,p=bi,En=a.stateNode.containerInfo,bi=!0,Lr(n,i,a),En=u,bi=p;break;case 0:case 11:case 14:case 15:if(!In&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){p=u=u.next;do{var v=p,C=v.destroy;v=v.tag,C!==void 0&&((v&2)!==0||(v&4)!==0)&&bu(a,i,C),p=p.next}while(p!==u)}Lr(n,i,a);break;case 1:if(!In&&(Vs(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(H){en(a,i,H)}Lr(n,i,a);break;case 21:Lr(n,i,a);break;case 22:a.mode&1?(In=(u=In)||a.memoizedState!==null,Lr(n,i,a),In=u):Lr(n,i,a);break;default:Lr(n,i,a)}}function om(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Nx),i.forEach(function(u){var p=Xx.bind(null,n,u);a.has(u)||(a.add(u),u.then(p,p))})}}function Pi(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var p=a[u];try{var v=n,C=i,H=C;e:for(;H!==null;){switch(H.tag){case 5:En=H.stateNode,bi=!1;break e;case 3:En=H.stateNode.containerInfo,bi=!0;break e;case 4:En=H.stateNode.containerInfo,bi=!0;break e}H=H.return}if(En===null)throw Error(t(160));sm(v,C,p),En=null,bi=!1;var Z=p.alternate;Z!==null&&(Z.return=null),p.return=null}catch(ge){en(p,i,ge)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)am(i,n),i=i.sibling}function am(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Pi(i,n),Wi(n),u&4){try{Qo(3,n,n.return),sl(3,n)}catch(st){en(n,n.return,st)}try{Qo(5,n,n.return)}catch(st){en(n,n.return,st)}}break;case 1:Pi(i,n),Wi(n),u&512&&a!==null&&Vs(a,a.return);break;case 5:if(Pi(i,n),Wi(n),u&512&&a!==null&&Vs(a,a.return),n.flags&32){var p=n.stateNode;try{Se(p,"")}catch(st){en(n,n.return,st)}}if(u&4&&(p=n.stateNode,p!=null)){var v=n.memoizedProps,C=a!==null?a.memoizedProps:v,H=n.type,Z=n.updateQueue;if(n.updateQueue=null,Z!==null)try{H==="input"&&v.type==="radio"&&v.name!=null&&nt(p,v),Ne(H,C);var ge=Ne(H,v);for(C=0;C<Z.length;C+=2){var be=Z[C],Le=Z[C+1];be==="style"?ve(p,Le):be==="dangerouslySetInnerHTML"?_e(p,Le):be==="children"?Se(p,Le):b(p,be,Le,ge)}switch(H){case"input":it(p,v);break;case"textarea":Ee(p,v);break;case"select":var Ce=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var Qe=v.value;Qe!=null?xt(p,!!v.multiple,Qe,!1):Ce!==!!v.multiple&&(v.defaultValue!=null?xt(p,!!v.multiple,v.defaultValue,!0):xt(p,!!v.multiple,v.multiple?[]:"",!1))}p[Bo]=v}catch(st){en(n,n.return,st)}}break;case 6:if(Pi(i,n),Wi(n),u&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,v=n.memoizedProps;try{p.nodeValue=v}catch(st){en(n,n.return,st)}}break;case 3:if(Pi(i,n),Wi(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{Ro(i.containerInfo)}catch(st){en(n,n.return,st)}break;case 4:Pi(i,n),Wi(n);break;case 13:Pi(i,n),Wi(n),p=n.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(Nu=jt())),u&4&&om(n);break;case 22:if(be=a!==null&&a.memoizedState!==null,n.mode&1?(In=(ge=In)||be,Pi(i,n),In=ge):Pi(i,n),Wi(n),u&8192){if(ge=n.memoizedState!==null,(n.stateNode.isHidden=ge)&&!be&&(n.mode&1)!==0)for($e=n,be=n.child;be!==null;){for(Le=$e=be;$e!==null;){switch(Ce=$e,Qe=Ce.child,Ce.tag){case 0:case 11:case 14:case 15:Qo(4,Ce,Ce.return);break;case 1:Vs(Ce,Ce.return);var rt=Ce.stateNode;if(typeof rt.componentWillUnmount=="function"){u=Ce,a=Ce.return;try{i=u,rt.props=i.memoizedProps,rt.state=i.memoizedState,rt.componentWillUnmount()}catch(st){en(u,a,st)}}break;case 5:Vs(Ce,Ce.return);break;case 22:if(Ce.memoizedState!==null){um(Le);continue}}Qe!==null?(Qe.return=Ce,$e=Qe):um(Le)}be=be.sibling}e:for(be=null,Le=n;;){if(Le.tag===5){if(be===null){be=Le;try{p=Le.stateNode,ge?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(H=Le.stateNode,Z=Le.memoizedProps.style,C=Z!=null&&Z.hasOwnProperty("display")?Z.display:null,H.style.display=me("display",C))}catch(st){en(n,n.return,st)}}}else if(Le.tag===6){if(be===null)try{Le.stateNode.nodeValue=ge?"":Le.memoizedProps}catch(st){en(n,n.return,st)}}else if((Le.tag!==22&&Le.tag!==23||Le.memoizedState===null||Le===n)&&Le.child!==null){Le.child.return=Le,Le=Le.child;continue}if(Le===n)break e;for(;Le.sibling===null;){if(Le.return===null||Le.return===n)break e;be===Le&&(be=null),Le=Le.return}be===Le&&(be=null),Le.sibling.return=Le.return,Le=Le.sibling}}break;case 19:Pi(i,n),Wi(n),u&4&&om(n);break;case 21:break;default:Pi(i,n),Wi(n)}}function Wi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(im(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var p=u.stateNode;u.flags&32&&(Se(p,""),u.flags&=-33);var v=rm(n);Iu(n,v,p);break;case 3:case 4:var C=u.stateNode.containerInfo,H=rm(n);Lu(n,H,C);break;default:throw Error(t(161))}}catch(Z){en(n,n.return,Z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Ox(n,i,a){$e=n,lm(n)}function lm(n,i,a){for(var u=(n.mode&1)!==0;$e!==null;){var p=$e,v=p.child;if(p.tag===22&&u){var C=p.memoizedState!==null||rl;if(!C){var H=p.alternate,Z=H!==null&&H.memoizedState!==null||In;H=rl;var ge=In;if(rl=C,(In=Z)&&!ge)for($e=p;$e!==null;)C=$e,Z=C.child,C.tag===22&&C.memoizedState!==null?fm(p):Z!==null?(Z.return=C,$e=Z):fm(p);for(;v!==null;)$e=v,lm(v),v=v.sibling;$e=p,rl=H,In=ge}cm(n)}else(p.subtreeFlags&8772)!==0&&v!==null?(v.return=p,$e=v):cm(n)}}function cm(n){for(;$e!==null;){var i=$e;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:In||sl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!In)if(a===null)u.componentDidMount();else{var p=i.elementType===i.type?a.memoizedProps:Ri(i.type,a.memoizedProps);u.componentDidUpdate(p,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var v=i.updateQueue;v!==null&&up(i,v,u);break;case 3:var C=i.updateQueue;if(C!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}up(i,C,a)}break;case 5:var H=i.stateNode;if(a===null&&i.flags&4){a=H;var Z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":Z.autoFocus&&a.focus();break;case"img":Z.src&&(a.src=Z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ge=i.alternate;if(ge!==null){var be=ge.memoizedState;if(be!==null){var Le=be.dehydrated;Le!==null&&Ro(Le)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}In||i.flags&512&&Pu(i)}catch(Ce){en(i,i.return,Ce)}}if(i===n){$e=null;break}if(a=i.sibling,a!==null){a.return=i.return,$e=a;break}$e=i.return}}function um(n){for(;$e!==null;){var i=$e;if(i===n){$e=null;break}var a=i.sibling;if(a!==null){a.return=i.return,$e=a;break}$e=i.return}}function fm(n){for(;$e!==null;){var i=$e;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{sl(4,i)}catch(Z){en(i,a,Z)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var p=i.return;try{u.componentDidMount()}catch(Z){en(i,p,Z)}}var v=i.return;try{Pu(i)}catch(Z){en(i,v,Z)}break;case 5:var C=i.return;try{Pu(i)}catch(Z){en(i,C,Z)}}}catch(Z){en(i,i.return,Z)}if(i===n){$e=null;break}var H=i.sibling;if(H!==null){H.return=i.return,$e=H;break}$e=i.return}}var kx=Math.ceil,ol=P.ReactCurrentDispatcher,Uu=P.ReactCurrentOwner,mi=P.ReactCurrentBatchConfig,Ut=0,_n=null,cn=null,wn=0,oi=0,Gs=Tr(0),dn=0,Zo=null,rs=0,al=0,Du=0,Jo=null,Qn=null,Nu=0,Ws=1/0,lr=null,ll=!1,Fu=null,Ir=null,cl=!1,Ur=null,ul=0,$o=0,Ou=null,fl=-1,hl=0;function Gn(){return(Ut&6)!==0?jt():fl!==-1?fl:fl=jt()}function Dr(n){return(n.mode&1)===0?1:(Ut&2)!==0&&wn!==0?wn&-wn:Mx.transition!==null?(hl===0&&(hl=Ye()),hl):(n=St,n!==0||(n=window.event,n=n===void 0?16:dd(n.type)),n)}function Li(n,i,a,u){if(50<$o)throw $o=0,Ou=null,Error(t(185));Et(n,a,u),((Ut&2)===0||n!==_n)&&(n===_n&&((Ut&2)===0&&(al|=a),dn===4&&Nr(n,wn)),Zn(n,u),a===1&&Ut===0&&(i.mode&1)===0&&(Ws=jt()+500,za&&Rr()))}function Zn(n,i){var a=n.callbackNode;zt(n,i);var u=Bt(n,n===_n?wn:0);if(u===0)a!==null&&Yr(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&Yr(a),i===1)n.tag===0?yx(dm.bind(null,n)):Jd(dm.bind(null,n)),gx(function(){(Ut&6)===0&&Rr()}),a=null;else{switch(ni(u)){case 1:a=nn;break;case 4:a=R;break;case 16:a=te;break;case 536870912:a=ae;break;default:a=te}a=Mm(a,hm.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function hm(n,i){if(fl=-1,hl=0,(Ut&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Xs()&&n.callbackNode!==a)return null;var u=Bt(n,n===_n?wn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=dl(n,u);else{i=u;var p=Ut;Ut|=2;var v=mm();(_n!==n||wn!==i)&&(lr=null,Ws=jt()+500,os(n,i));do try{Hx();break}catch(H){pm(n,H)}while(!0);tu(),ol.current=v,Ut=p,cn!==null?i=0:(_n=null,wn=0,i=dn)}if(i!==0){if(i===2&&(p=Zt(n),p!==0&&(u=p,i=ku(n,p))),i===1)throw a=Zo,os(n,0),Nr(n,u),Zn(n,jt()),a;if(i===6)Nr(n,u);else{if(p=n.current.alternate,(u&30)===0&&!Bx(p)&&(i=dl(n,u),i===2&&(v=Zt(n),v!==0&&(u=v,i=ku(n,v))),i===1))throw a=Zo,os(n,0),Nr(n,u),Zn(n,jt()),a;switch(n.finishedWork=p,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:as(n,Qn,lr);break;case 3:if(Nr(n,u),(u&130023424)===u&&(i=Nu+500-jt(),10<i)){if(Bt(n,0)!==0)break;if(p=n.suspendedLanes,(p&u)!==u){Gn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=Wc(as.bind(null,n,Qn,lr),i);break}as(n,Qn,lr);break;case 4:if(Nr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,p=-1;0<u;){var C=31-Ie(u);v=1<<C,C=i[C],C>p&&(p=C),u&=~v}if(u=p,u=jt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*kx(u/1960))-u,10<u){n.timeoutHandle=Wc(as.bind(null,n,Qn,lr),u);break}as(n,Qn,lr);break;case 5:as(n,Qn,lr);break;default:throw Error(t(329))}}}return Zn(n,jt()),n.callbackNode===a?hm.bind(null,n):null}function ku(n,i){var a=Jo;return n.current.memoizedState.isDehydrated&&(os(n,i).flags|=256),n=dl(n,i),n!==2&&(i=Qn,Qn=a,i!==null&&Bu(i)),n}function Bu(n){Qn===null?Qn=n:Qn.push.apply(Qn,n)}function Bx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var p=a[u],v=p.getSnapshot;p=p.value;try{if(!Ti(v(),p))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Nr(n,i){for(i&=~Du,i&=~al,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Ie(i),u=1<<a;n[a]=-1,i&=~u}}function dm(n){if((Ut&6)!==0)throw Error(t(327));Xs();var i=Bt(n,0);if((i&1)===0)return Zn(n,jt()),null;var a=dl(n,i);if(n.tag!==0&&a===2){var u=Zt(n);u!==0&&(i=u,a=ku(n,u))}if(a===1)throw a=Zo,os(n,0),Nr(n,i),Zn(n,jt()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,as(n,Qn,lr),Zn(n,jt()),null}function zu(n,i){var a=Ut;Ut|=1;try{return n(i)}finally{Ut=a,Ut===0&&(Ws=jt()+500,za&&Rr())}}function ss(n){Ur!==null&&Ur.tag===0&&(Ut&6)===0&&Xs();var i=Ut;Ut|=1;var a=mi.transition,u=St;try{if(mi.transition=null,St=1,n)return n()}finally{St=u,mi.transition=a,Ut=i,(Ut&6)===0&&Rr()}}function Hu(){oi=Gs.current,Yt(Gs)}function os(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,mx(a)),cn!==null)for(a=cn.return;a!==null;){var u=a;switch(Qc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&ka();break;case 3:zs(),Yt(Kn),Yt(bn),cu();break;case 5:au(u);break;case 4:zs();break;case 13:Yt(Jt);break;case 19:Yt(Jt);break;case 10:nu(u.type._context);break;case 22:case 23:Hu()}a=a.return}if(_n=n,cn=n=Fr(n.current,null),wn=oi=i,dn=0,Zo=null,Du=al=rs=0,Qn=Jo=null,ts!==null){for(i=0;i<ts.length;i++)if(a=ts[i],u=a.interleaved,u!==null){a.interleaved=null;var p=u.next,v=a.pending;if(v!==null){var C=v.next;v.next=p,u.next=C}a.pending=u}ts=null}return n}function pm(n,i){do{var a=cn;try{if(tu(),Qa.current=el,Za){for(var u=$t.memoizedState;u!==null;){var p=u.queue;p!==null&&(p.pending=null),u=u.next}Za=!1}if(is=0,xn=hn=$t=null,Xo=!1,jo=0,Uu.current=null,a===null||a.return===null){dn=1,Zo=i,cn=null;break}e:{var v=n,C=a.return,H=a,Z=i;if(i=wn,H.flags|=32768,Z!==null&&typeof Z=="object"&&typeof Z.then=="function"){var ge=Z,be=H,Le=be.tag;if((be.mode&1)===0&&(Le===0||Le===11||Le===15)){var Ce=be.alternate;Ce?(be.updateQueue=Ce.updateQueue,be.memoizedState=Ce.memoizedState,be.lanes=Ce.lanes):(be.updateQueue=null,be.memoizedState=null)}var Qe=Bp(C);if(Qe!==null){Qe.flags&=-257,zp(Qe,C,H,v,i),Qe.mode&1&&kp(v,ge,i),i=Qe,Z=ge;var rt=i.updateQueue;if(rt===null){var st=new Set;st.add(Z),i.updateQueue=st}else rt.add(Z);break e}else{if((i&1)===0){kp(v,ge,i),Vu();break e}Z=Error(t(426))}}else if(Qt&&H.mode&1){var sn=Bp(C);if(sn!==null){(sn.flags&65536)===0&&(sn.flags|=256),zp(sn,C,H,v,i),$c(Hs(Z,H));break e}}v=Z=Hs(Z,H),dn!==4&&(dn=2),Jo===null?Jo=[v]:Jo.push(v),v=C;do{switch(v.tag){case 3:v.flags|=65536,i&=-i,v.lanes|=i;var se=Fp(v,Z,i);cp(v,se);break e;case 1:H=Z;var ee=v.type,fe=v.stateNode;if((v.flags&128)===0&&(typeof ee.getDerivedStateFromError=="function"||fe!==null&&typeof fe.componentDidCatch=="function"&&(Ir===null||!Ir.has(fe)))){v.flags|=65536,i&=-i,v.lanes|=i;var ke=Op(v,H,i);cp(v,ke);break e}}v=v.return}while(v!==null)}vm(a)}catch(at){i=at,cn===a&&a!==null&&(cn=a=a.return);continue}break}while(!0)}function mm(){var n=ol.current;return ol.current=el,n===null?el:n}function Vu(){(dn===0||dn===3||dn===2)&&(dn=4),_n===null||(rs&268435455)===0&&(al&268435455)===0||Nr(_n,wn)}function dl(n,i){var a=Ut;Ut|=2;var u=mm();(_n!==n||wn!==i)&&(lr=null,os(n,i));do try{zx();break}catch(p){pm(n,p)}while(!0);if(tu(),Ut=a,ol.current=u,cn!==null)throw Error(t(261));return _n=null,wn=0,dn}function zx(){for(;cn!==null;)gm(cn)}function Hx(){for(;cn!==null&&!ci();)gm(cn)}function gm(n){var i=ym(n.alternate,n,oi);n.memoizedProps=n.pendingProps,i===null?vm(n):cn=i,Uu.current=null}function vm(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Ux(a,i,oi),a!==null){cn=a;return}}else{if(a=Dx(a,i),a!==null){a.flags&=32767,cn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{dn=6,cn=null;return}}if(i=i.sibling,i!==null){cn=i;return}cn=i=n}while(i!==null);dn===0&&(dn=5)}function as(n,i,a){var u=St,p=mi.transition;try{mi.transition=null,St=1,Vx(n,i,a,u)}finally{mi.transition=p,St=u}return null}function Vx(n,i,a,u){do Xs();while(Ur!==null);if((Ut&6)!==0)throw Error(t(327));a=n.finishedWork;var p=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=a.lanes|a.childLanes;if(vn(n,v),n===_n&&(cn=_n=null,wn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||cl||(cl=!0,Mm(te,function(){return Xs(),null})),v=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||v){v=mi.transition,mi.transition=null;var C=St;St=1;var H=Ut;Ut|=4,Uu.current=null,Fx(n,a),am(a,n),lx(Vc),Ea=!!Hc,Vc=Hc=null,n.current=a,Ox(a),ui(),Ut=H,St=C,mi.transition=v}else n.current=a;if(cl&&(cl=!1,Ur=n,ul=p),v=n.pendingLanes,v===0&&(Ir=null),Ge(a.stateNode),Zn(n,jt()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)p=i[a],u(p.value,{componentStack:p.stack,digest:p.digest});if(ll)throw ll=!1,n=Fu,Fu=null,n;return(ul&1)!==0&&n.tag!==0&&Xs(),v=n.pendingLanes,(v&1)!==0?n===Ou?$o++:($o=0,Ou=n):$o=0,Rr(),null}function Xs(){if(Ur!==null){var n=ni(ul),i=mi.transition,a=St;try{if(mi.transition=null,St=16>n?16:n,Ur===null)var u=!1;else{if(n=Ur,Ur=null,ul=0,(Ut&6)!==0)throw Error(t(331));var p=Ut;for(Ut|=4,$e=n.current;$e!==null;){var v=$e,C=v.child;if(($e.flags&16)!==0){var H=v.deletions;if(H!==null){for(var Z=0;Z<H.length;Z++){var ge=H[Z];for($e=ge;$e!==null;){var be=$e;switch(be.tag){case 0:case 11:case 15:Qo(8,be,v)}var Le=be.child;if(Le!==null)Le.return=be,$e=Le;else for(;$e!==null;){be=$e;var Ce=be.sibling,Qe=be.return;if(nm(be),be===ge){$e=null;break}if(Ce!==null){Ce.return=Qe,$e=Ce;break}$e=Qe}}}var rt=v.alternate;if(rt!==null){var st=rt.child;if(st!==null){rt.child=null;do{var sn=st.sibling;st.sibling=null,st=sn}while(st!==null)}}$e=v}}if((v.subtreeFlags&2064)!==0&&C!==null)C.return=v,$e=C;else e:for(;$e!==null;){if(v=$e,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:Qo(9,v,v.return)}var se=v.sibling;if(se!==null){se.return=v.return,$e=se;break e}$e=v.return}}var ee=n.current;for($e=ee;$e!==null;){C=$e;var fe=C.child;if((C.subtreeFlags&2064)!==0&&fe!==null)fe.return=C,$e=fe;else e:for(C=ee;$e!==null;){if(H=$e,(H.flags&2048)!==0)try{switch(H.tag){case 0:case 11:case 15:sl(9,H)}}catch(at){en(H,H.return,at)}if(H===C){$e=null;break e}var ke=H.sibling;if(ke!==null){ke.return=H.return,$e=ke;break e}$e=H.return}}if(Ut=p,Rr(),Be&&typeof Be.onPostCommitFiberRoot=="function")try{Be.onPostCommitFiberRoot(oe,n)}catch{}u=!0}return u}finally{St=a,mi.transition=i}}return!1}function xm(n,i,a){i=Hs(a,i),i=Fp(n,i,1),n=Pr(n,i,1),i=Gn(),n!==null&&(Et(n,1,i),Zn(n,i))}function en(n,i,a){if(n.tag===3)xm(n,n,a);else for(;i!==null;){if(i.tag===3){xm(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Ir===null||!Ir.has(u))){n=Hs(a,n),n=Op(i,n,1),i=Pr(i,n,1),n=Gn(),i!==null&&(Et(i,1,n),Zn(i,n));break}}i=i.return}}function Gx(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=Gn(),n.pingedLanes|=n.suspendedLanes&a,_n===n&&(wn&a)===a&&(dn===4||dn===3&&(wn&130023424)===wn&&500>jt()-Nu?os(n,0):Du|=a),Zn(n,i)}function _m(n,i){i===0&&((n.mode&1)===0?i=1:(i=et,et<<=1,(et&130023424)===0&&(et=4194304)));var a=Gn();n=sr(n,i),n!==null&&(Et(n,i,a),Zn(n,a))}function Wx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),_m(n,a)}function Xx(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,p=n.memoizedState;p!==null&&(a=p.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),_m(n,a)}var ym;ym=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Kn.current)Yn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Yn=!1,Ix(n,i,a);Yn=(n.flags&131072)!==0}else Yn=!1,Qt&&(i.flags&1048576)!==0&&$d(i,Va,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;il(n,i),n=i.pendingProps;var p=Us(i,bn.current);Bs(i,a),p=hu(null,i,u,n,p,a);var v=du();return i.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,qn(u)?(v=!0,Ba(i)):v=!1,i.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,su(i),p.updater=tl,i.stateNode=p,p._reactInternals=i,_u(i,u,n,a),i=Au(null,i,u,!0,v,a)):(i.tag=0,Qt&&v&&Yc(i),Vn(null,i,p,a),i=i.child),i;case 16:u=i.elementType;e:{switch(il(n,i),n=i.pendingProps,p=u._init,u=p(u._payload),i.type=u,p=i.tag=Kx(u),n=Ri(u,n),p){case 0:i=Su(null,i,u,n,a);break e;case 1:i=jp(null,i,u,n,a);break e;case 11:i=Hp(null,i,u,n,a);break e;case 14:i=Vp(null,i,u,Ri(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:Ri(u,p),Su(n,i,u,p,a);case 1:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:Ri(u,p),jp(n,i,u,p,a);case 3:e:{if(Kp(i),n===null)throw Error(t(387));u=i.pendingProps,v=i.memoizedState,p=v.element,lp(n,i),qa(i,u,null,a);var C=i.memoizedState;if(u=C.element,v.isDehydrated)if(v={element:u,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},i.updateQueue.baseState=v,i.memoizedState=v,i.flags&256){p=Hs(Error(t(423)),i),i=qp(n,i,u,a,p);break e}else if(u!==p){p=Hs(Error(t(424)),i),i=qp(n,i,u,a,p);break e}else for(si=wr(i.stateNode.containerInfo.firstChild),ri=i,Qt=!0,Ci=null,a=op(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Fs(),u===p){i=ar(n,i,a);break e}Vn(n,i,u,a)}i=i.child}return i;case 5:return fp(i),n===null&&Jc(i),u=i.type,p=i.pendingProps,v=n!==null?n.memoizedProps:null,C=p.children,Gc(u,p)?C=null:v!==null&&Gc(u,v)&&(i.flags|=32),Xp(n,i),Vn(n,i,C,a),i.child;case 6:return n===null&&Jc(i),null;case 13:return Yp(n,i,a);case 4:return ou(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Os(i,null,u,a):Vn(n,i,u,a),i.child;case 11:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:Ri(u,p),Hp(n,i,u,p,a);case 7:return Vn(n,i,i.pendingProps,a),i.child;case 8:return Vn(n,i,i.pendingProps.children,a),i.child;case 12:return Vn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,p=i.pendingProps,v=i.memoizedProps,C=p.value,Xt(Xa,u._currentValue),u._currentValue=C,v!==null)if(Ti(v.value,C)){if(v.children===p.children&&!Kn.current){i=ar(n,i,a);break e}}else for(v=i.child,v!==null&&(v.return=i);v!==null;){var H=v.dependencies;if(H!==null){C=v.child;for(var Z=H.firstContext;Z!==null;){if(Z.context===u){if(v.tag===1){Z=or(-1,a&-a),Z.tag=2;var ge=v.updateQueue;if(ge!==null){ge=ge.shared;var be=ge.pending;be===null?Z.next=Z:(Z.next=be.next,be.next=Z),ge.pending=Z}}v.lanes|=a,Z=v.alternate,Z!==null&&(Z.lanes|=a),iu(v.return,a,i),H.lanes|=a;break}Z=Z.next}}else if(v.tag===10)C=v.type===i.type?null:v.child;else if(v.tag===18){if(C=v.return,C===null)throw Error(t(341));C.lanes|=a,H=C.alternate,H!==null&&(H.lanes|=a),iu(C,a,i),C=v.sibling}else C=v.child;if(C!==null)C.return=v;else for(C=v;C!==null;){if(C===i){C=null;break}if(v=C.sibling,v!==null){v.return=C.return,C=v;break}C=C.return}v=C}Vn(n,i,p.children,a),i=i.child}return i;case 9:return p=i.type,u=i.pendingProps.children,Bs(i,a),p=di(p),u=u(p),i.flags|=1,Vn(n,i,u,a),i.child;case 14:return u=i.type,p=Ri(u,i.pendingProps),p=Ri(u.type,p),Vp(n,i,u,p,a);case 15:return Gp(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,p=i.pendingProps,p=i.elementType===u?p:Ri(u,p),il(n,i),i.tag=1,qn(u)?(n=!0,Ba(i)):n=!1,Bs(i,a),Dp(i,u,p),_u(i,u,p,a),Au(null,i,u,!0,n,a);case 19:return Zp(n,i,a);case 22:return Wp(n,i,a)}throw Error(t(156,i.tag))};function Mm(n,i){return qr(n,i)}function jx(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gi(n,i,a,u){return new jx(n,i,a,u)}function Gu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Kx(n){if(typeof n=="function")return Gu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Y)return 11;if(n===G)return 14}return 2}function Fr(n,i){var a=n.alternate;return a===null?(a=gi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function pl(n,i,a,u,p,v){var C=2;if(u=n,typeof n=="function")Gu(n)&&(C=1);else if(typeof n=="string")C=5;else e:switch(n){case k:return ls(a.children,p,v,i);case A:C=8,p|=8;break;case D:return n=gi(12,a,i,p|2),n.elementType=D,n.lanes=v,n;case le:return n=gi(13,a,i,p),n.elementType=le,n.lanes=v,n;case ce:return n=gi(19,a,i,p),n.elementType=ce,n.lanes=v,n;case X:return ml(a,p,v,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case j:C=10;break e;case z:C=9;break e;case Y:C=11;break e;case G:C=14;break e;case ne:C=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=gi(C,a,i,p),i.elementType=n,i.type=u,i.lanes=v,i}function ls(n,i,a,u){return n=gi(7,n,u,i),n.lanes=a,n}function ml(n,i,a,u){return n=gi(22,n,u,i),n.elementType=X,n.lanes=a,n.stateNode={isHidden:!1},n}function Wu(n,i,a){return n=gi(6,n,null,i),n.lanes=a,n}function Xu(n,i,a){return i=gi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function qx(n,i,a,u,p){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=rn(0),this.expirationTimes=rn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rn(0),this.identifierPrefix=u,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function ju(n,i,a,u,p,v,C,H,Z){return n=new qx(n,i,a,H,Z),i===1?(i=1,v===!0&&(i|=8)):i=0,v=gi(3,null,null,i),n.current=v,v.stateNode=n,v.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},su(v),n}function Yx(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function Sm(n){if(!n)return Cr;n=n._reactInternals;e:{if(ln(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(qn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(qn(a))return Qd(n,a,i)}return i}function Am(n,i,a,u,p,v,C,H,Z){return n=ju(a,u,!0,n,p,v,C,H,Z),n.context=Sm(null),a=n.current,u=Gn(),p=Dr(a),v=or(u,p),v.callback=i??null,Pr(a,v,p),n.current.lanes=p,Et(n,p,u),Zn(n,u),n}function gl(n,i,a,u){var p=i.current,v=Gn(),C=Dr(p);return a=Sm(a),i.context===null?i.context=a:i.pendingContext=a,i=or(v,C),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Pr(p,i,C),n!==null&&(Li(n,p,C,v),Ka(n,p,C)),C}function vl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Em(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Ku(n,i){Em(n,i),(n=n.alternate)&&Em(n,i)}function Qx(){return null}var wm=typeof reportError=="function"?reportError:function(n){console.error(n)};function qu(n){this._internalRoot=n}xl.prototype.render=qu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));gl(n,i,null,null)},xl.prototype.unmount=qu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ss(function(){gl(null,n,null,null)}),i[tr]=null}};function xl(n){this._internalRoot=n}xl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Vt();n={blockedOn:null,target:n,priority:i};for(var a=0;a<Sr.length&&i!==0&&i<Sr[a].priority;a++);Sr.splice(a,0,n),a===0&&fd(n)}};function Yu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function _l(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Tm(){}function Zx(n,i,a,u,p){if(p){if(typeof u=="function"){var v=u;u=function(){var ge=vl(C);v.call(ge)}}var C=Am(i,u,n,0,null,!1,!1,"",Tm);return n._reactRootContainer=C,n[tr]=C.current,Oo(n.nodeType===8?n.parentNode:n),ss(),C}for(;p=n.lastChild;)n.removeChild(p);if(typeof u=="function"){var H=u;u=function(){var ge=vl(Z);H.call(ge)}}var Z=ju(n,0,!1,null,null,!1,!1,"",Tm);return n._reactRootContainer=Z,n[tr]=Z.current,Oo(n.nodeType===8?n.parentNode:n),ss(function(){gl(i,Z,a,u)}),Z}function yl(n,i,a,u,p){var v=a._reactRootContainer;if(v){var C=v;if(typeof p=="function"){var H=p;p=function(){var Z=vl(C);H.call(Z)}}gl(i,C,n,p)}else C=Zx(a,i,n,p,u);return vl(C)}Ht=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Ct(i.pendingLanes);a!==0&&(An(i,a|1),Zn(i,jt()),(Ut&6)===0&&(Ws=jt()+500,Rr()))}break;case 13:ss(function(){var u=sr(n,1);if(u!==null){var p=Gn();Li(u,n,1,p)}}),Ku(n,1)}},Kt=function(n){if(n.tag===13){var i=sr(n,134217728);if(i!==null){var a=Gn();Li(i,n,134217728,a)}Ku(n,134217728)}},Ei=function(n){if(n.tag===13){var i=Dr(n),a=sr(n,i);if(a!==null){var u=Gn();Li(a,n,i,u)}Ku(n,i)}},Vt=function(){return St},wi=function(n,i){var a=St;try{return St=n,i()}finally{St=a}},ft=function(n,i,a){switch(i){case"input":if(it(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var p=Oa(u);if(!p)throw Error(t(90));Fe(u),it(u,p)}}}break;case"textarea":Ee(n,a);break;case"select":i=a.value,i!=null&&xt(n,!!a.multiple,i,!1)}},Oe=zu,we=ss;var Jx={usingClientEntryPoint:!1,Events:[zo,Ls,Oa,he,We,zu]},ea={findFiberByHostInstance:Zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$x={bundleType:ea.bundleType,version:ea.version,rendererPackageName:ea.rendererPackageName,rendererConfig:ea.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=zn(n),n===null?null:n.stateNode},findFiberByHostInstance:ea.findFiberByHostInstance||Qx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ml.isDisabled&&Ml.supportsFiber)try{oe=Ml.inject($x),Be=Ml}catch{}}return Jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jx,Jn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yu(i))throw Error(t(200));return Yx(n,i,null,a)},Jn.createRoot=function(n,i){if(!Yu(n))throw Error(t(299));var a=!1,u="",p=wm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(p=i.onRecoverableError)),i=ju(n,1,!1,null,null,a,!1,u,p),n[tr]=i.current,Oo(n.nodeType===8?n.parentNode:n),new qu(i)},Jn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=zn(i),n=n===null?null:n.stateNode,n},Jn.flushSync=function(n){return ss(n)},Jn.hydrate=function(n,i,a){if(!_l(i))throw Error(t(200));return yl(null,n,i,!0,a)},Jn.hydrateRoot=function(n,i,a){if(!Yu(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,p=!1,v="",C=wm;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(v=a.identifierPrefix),a.onRecoverableError!==void 0&&(C=a.onRecoverableError)),i=Am(i,null,n,1,a??null,p,!1,v,C),n[tr]=i.current,Oo(n),u)for(n=0;n<u.length;n++)a=u[n],p=a._getVersion,p=p(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,p]:i.mutableSourceEagerHydrationData.push(a,p);return new xl(i)},Jn.render=function(n,i,a){if(!_l(i))throw Error(t(200));return yl(null,n,i,!1,a)},Jn.unmountComponentAtNode=function(n){if(!_l(n))throw Error(t(40));return n._reactRootContainer?(ss(function(){yl(null,null,n,!1,function(){n._reactRootContainer=null,n[tr]=null})}),!0):!1},Jn.unstable_batchedUpdates=zu,Jn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!_l(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return yl(n,i,a,!1,u)},Jn.version="18.3.1-next-f1338f8080-20240426",Jn}var Dm;function c_(){if(Dm)return Ju.exports;Dm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Ju.exports=l_(),Ju.exports}var Nm;function u_(){if(Nm)return Sl;Nm=1;var s=c_();return Sl.createRoot=s.createRoot,Sl.hydrateRoot=s.hydrateRoot,Sl}var f_=u_();const Fm={field:{count:1400,size:1,drift:1},look:{trail:.35,grain:.5,glow:1},form:{circle:0},hands:{reach:1,clap:1},sound:{beat:1,sparks:1,bass:1}};function h_(s,e){let t=s;for(const r of e.split(".")){if(typeof t!="object"||t===null)return;t=t[r]}return typeof t=="number"?t:void 0}function vo(s,e){const t=structuredClone(s);for(const[r,o]of Object.entries(e)){if(!Number.isFinite(o)||h_(s,r)===void 0)continue;const l=r.split("."),c=l.pop();let f=t;for(const d of l)f=f[d];f[c]=o}return t}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vh="184",d_=0,Om=1,p_=2,Jl=1,m_=2,ha=3,jr=0,ei=1,Fi=2,mr=0,uo=1,km=2,Bm=3,zm=4,g_=5,ms=100,v_=101,x_=102,__=103,y_=104,M_=200,S_=201,A_=202,E_=203,qf=204,Yf=205,w_=206,T_=207,C_=208,R_=209,b_=210,P_=211,L_=212,I_=213,U_=214,Qf=0,Zf=1,Jf=2,ho=3,$f=4,eh=5,th=6,nh=7,Eg=0,D_=1,N_=2,Yi=0,wg=1,Tg=2,Cg=3,Rg=4,bg=5,Pg=6,Lg=7,Ig=300,_s=301,po=302,tf=303,nf=304,vc=306,oc=1e3,pr=1001,ih=1002,pn=1003,F_=1004,Al=1005,Sn=1006,rf=1007,vs=1008,_i=1009,Ug=1010,Dg=1011,va=1012,Gh=1013,Ji=1014,ki=1015,vr=1016,Wh=1017,Xh=1018,xa=1020,Ng=35902,Fg=35899,Og=1021,kg=1022,yi=1023,xr=1026,xs=1027,Bg=1028,jh=1029,ys=1030,Kh=1031,qh=1033,$l=33776,ec=33777,tc=33778,nc=33779,rh=35840,sh=35841,oh=35842,ah=35843,lh=36196,ch=37492,uh=37496,fh=37488,hh=37489,ac=37490,dh=37491,ph=37808,mh=37809,gh=37810,vh=37811,xh=37812,_h=37813,yh=37814,Mh=37815,Sh=37816,Ah=37817,Eh=37818,wh=37819,Th=37820,Ch=37821,Rh=36492,bh=36494,Ph=36495,Lh=36283,Ih=36284,lc=36285,Uh=36286,O_=3200,Hm=0,k_=1,Wr="",xi="srgb",cc="srgb-linear",uc="linear",Gt="srgb",js=7680,Vm=519,B_=512,z_=513,H_=514,Yh=515,V_=516,G_=517,Qh=518,W_=519,Gm=35044,Wm=35048,Xm="300 es",qi=2e3,fc=2001;function X_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function hc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function j_(){const s=hc("canvas");return s.style.display="block",s}const jm={};function Km(...s){const e="THREE."+s.shift();console.log(e,...s)}function zg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function vt(...s){s=zg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Dt(...s){s=zg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Dh(...s){const e=s.join(" ");e in jm||(jm[e]=!0,vt(...s))}function K_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const q_={[Qf]:Zf,[Jf]:th,[$f]:nh,[ho]:eh,[Zf]:Qf,[th]:Jf,[nh]:$f,[eh]:ho};class Ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qm=1234567;const ma=Math.PI/180,_a=180/Math.PI;function xo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function bt(s,e,t){return Math.max(e,Math.min(t,s))}function Zh(s,e){return(s%e+e)%e}function Y_(s,e,t,r,o){return r+(s-e)*(o-r)/(t-e)}function Q_(s,e,t){return s!==e?(t-s)/(e-s):0}function ga(s,e,t){return(1-t)*s+t*e}function Z_(s,e,t,r){return ga(s,e,1-Math.exp(-t*r))}function J_(s,e=1){return e-Math.abs(Zh(s,e*2)-e)}function $_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function ey(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function ty(s,e){return s+Math.floor(Math.random()*(e-s+1))}function ny(s,e){return s+Math.random()*(e-s)}function iy(s){return s*(.5-Math.random())}function ry(s){s!==void 0&&(qm=s);let e=qm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sy(s){return s*ma}function oy(s){return s*_a}function ay(s){return(s&s-1)===0&&s!==0}function ly(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function cy(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function uy(s,e,t,r,o){const l=Math.cos,c=Math.sin,f=l(t/2),d=c(t/2),h=l((e+r)/2),m=c((e+r)/2),x=l((e-r)/2),g=c((e-r)/2),_=l((r-e)/2),S=c((r-e)/2);switch(o){case"XYX":s.set(f*m,d*x,d*g,f*h);break;case"YZY":s.set(d*g,f*m,d*x,f*h);break;case"ZXZ":s.set(d*x,d*g,f*m,f*h);break;case"XZX":s.set(f*m,d*S,d*_,f*h);break;case"YXY":s.set(d*_,f*m,d*S,f*h);break;case"ZYZ":s.set(d*S,d*_,f*m,f*h);break;default:vt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function ao(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Wn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const sf={DEG2RAD:ma,RAD2DEG:_a,generateUUID:xo,clamp:bt,euclideanModulo:Zh,mapLinear:Y_,inverseLerp:Q_,lerp:ga,damp:Z_,pingpong:J_,smoothstep:$_,smootherstep:ey,randInt:ty,randFloat:ny,randFloatSpread:iy,seededRandom:ry,degToRad:sy,radToDeg:oy,isPowerOfTwo:ay,ceilPowerOfTwo:ly,floorPowerOfTwo:cy,setQuaternionFromProperEuler:uy,normalize:Wn,denormalize:ao},sd=class sd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};sd.prototype.isVector2=!0;let Pt=sd;class Qi{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,c,f){let d=r[o+0],h=r[o+1],m=r[o+2],x=r[o+3],g=l[c+0],_=l[c+1],S=l[c+2],T=l[c+3];if(x!==T||d!==g||h!==_||m!==S){let y=d*g+h*_+m*S+x*T;y<0&&(g=-g,_=-_,S=-S,T=-T,y=-y);let M=1-f;if(y<.9995){const w=Math.acos(y),b=Math.sin(w);M=Math.sin(M*w)/b,f=Math.sin(f*w)/b,d=d*M+g*f,h=h*M+_*f,m=m*M+S*f,x=x*M+T*f}else{d=d*M+g*f,h=h*M+_*f,m=m*M+S*f,x=x*M+T*f;const w=1/Math.sqrt(d*d+h*h+m*m+x*x);d*=w,h*=w,m*=w,x*=w}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=x}static multiplyQuaternionsFlat(e,t,r,o,l,c){const f=r[o],d=r[o+1],h=r[o+2],m=r[o+3],x=l[c],g=l[c+1],_=l[c+2],S=l[c+3];return e[t]=f*S+m*x+d*_-h*g,e[t+1]=d*S+m*g+h*x-f*_,e[t+2]=h*S+m*_+f*g-d*x,e[t+3]=m*S-f*x-d*g-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,d=Math.sin,h=f(r/2),m=f(o/2),x=f(l/2),g=d(r/2),_=d(o/2),S=d(l/2);switch(c){case"XYZ":this._x=g*m*x+h*_*S,this._y=h*_*x-g*m*S,this._z=h*m*S+g*_*x,this._w=h*m*x-g*_*S;break;case"YXZ":this._x=g*m*x+h*_*S,this._y=h*_*x-g*m*S,this._z=h*m*S-g*_*x,this._w=h*m*x+g*_*S;break;case"ZXY":this._x=g*m*x-h*_*S,this._y=h*_*x+g*m*S,this._z=h*m*S+g*_*x,this._w=h*m*x-g*_*S;break;case"ZYX":this._x=g*m*x-h*_*S,this._y=h*_*x+g*m*S,this._z=h*m*S-g*_*x,this._w=h*m*x+g*_*S;break;case"YZX":this._x=g*m*x+h*_*S,this._y=h*_*x+g*m*S,this._z=h*m*S-g*_*x,this._w=h*m*x-g*_*S;break;case"XZY":this._x=g*m*x-h*_*S,this._y=h*_*x-g*m*S,this._z=h*m*S+g*_*x,this._w=h*m*x+g*_*S;break;default:vt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],c=t[1],f=t[5],d=t[9],h=t[2],m=t[6],x=t[10],g=r+f+x;if(g>0){const _=.5/Math.sqrt(g+1);this._w=.25/_,this._x=(m-d)*_,this._y=(l-h)*_,this._z=(c-o)*_}else if(r>f&&r>x){const _=2*Math.sqrt(1+r-f-x);this._w=(m-d)/_,this._x=.25*_,this._y=(o+c)/_,this._z=(l+h)/_}else if(f>x){const _=2*Math.sqrt(1+f-r-x);this._w=(l-h)/_,this._x=(o+c)/_,this._y=.25*_,this._z=(d+m)/_}else{const _=2*Math.sqrt(1+x-r-f);this._w=(c-o)/_,this._x=(l+h)/_,this._y=(d+m)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,c=e._w,f=t._x,d=t._y,h=t._z,m=t._w;return this._x=r*m+c*f+o*h-l*d,this._y=o*m+c*d+l*f-r*h,this._z=l*m+c*h+r*d-o*f,this._w=c*m-r*f-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,c=-c,f=-f);let d=1-t;if(f<.9995){const h=Math.acos(f),m=Math.sin(h);d=Math.sin(d*h)/m,t=Math.sin(t*h)/m,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+l*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const od=class od{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ym.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ym.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,c=e.y,f=e.z,d=e.w,h=2*(c*o-f*r),m=2*(f*t-l*o),x=2*(l*r-c*t);return this.x=t+d*h+c*x-f*m,this.y=r+d*m+f*h-l*x,this.z=o+d*x+l*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,c=t.x,f=t.y,d=t.z;return this.x=o*d-l*f,this.y=l*c-r*d,this.z=r*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return of.copy(this).projectOnVector(e),this.sub(of)}reflect(e){return this.sub(of.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(bt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};od.prototype.isVector3=!0;let J=od;const of=new J,Ym=new Qi,ad=class ad{constructor(e,t,r,o,l,c,f,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,d,h)}set(e,t,r,o,l,c,f,d,h){const m=this.elements;return m[0]=e,m[1]=o,m[2]=f,m[3]=t,m[4]=l,m[5]=d,m[6]=r,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[3],d=r[6],h=r[1],m=r[4],x=r[7],g=r[2],_=r[5],S=r[8],T=o[0],y=o[3],M=o[6],w=o[1],b=o[4],P=o[7],B=o[2],I=o[5],k=o[8];return l[0]=c*T+f*w+d*B,l[3]=c*y+f*b+d*I,l[6]=c*M+f*P+d*k,l[1]=h*T+m*w+x*B,l[4]=h*y+m*b+x*I,l[7]=h*M+m*P+x*k,l[2]=g*T+_*w+S*B,l[5]=g*y+_*b+S*I,l[8]=g*M+_*P+S*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8];return t*c*m-t*f*h-r*l*m+r*f*d+o*l*h-o*c*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8],x=m*c-f*h,g=f*d-m*l,_=h*l-c*d,S=t*x+r*g+o*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/S;return e[0]=x*T,e[1]=(o*h-m*r)*T,e[2]=(f*r-o*c)*T,e[3]=g*T,e[4]=(m*t-o*d)*T,e[5]=(o*l-f*t)*T,e[6]=_*T,e[7]=(r*d-h*t)*T,e[8]=(c*t-r*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,c,f){const d=Math.cos(l),h=Math.sin(l);return this.set(r*d,r*h,-r*(d*c+h*f)+c+e,-o*h,o*d,-o*(-h*c+d*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(af.makeScale(e,t)),this}rotate(e){return this.premultiply(af.makeRotation(-e)),this}translate(e,t){return this.premultiply(af.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ad.prototype.isMatrix3=!0;let wt=ad;const af=new wt,Qm=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zm=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fy(){const s={enabled:!0,workingColorSpace:cc,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Gt&&(o.r=gr(o.r),o.g=gr(o.g),o.b=gr(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Gt&&(o.r=fo(o.r),o.g=fo(o.g),o.b=fo(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Wr?uc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Dh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Dh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[cc]:{primaries:e,whitePoint:r,transfer:uc,toXYZ:Qm,fromXYZ:Zm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:e,whitePoint:r,transfer:Gt,toXYZ:Qm,fromXYZ:Zm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),s}const Lt=fy();function gr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ks;class hy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ks===void 0&&(Ks=hc("canvas")),Ks.width=e.width,Ks.height=e.height;const o=Ks.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ks}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=hc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=gr(l[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(gr(t[r]/255)*255):t[r]=gr(t[r]);return{data:t,width:e.width,height:e.height}}else return vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dy=0;class Jh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dy++}),this.uuid=xo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(lf(o[c].image)):l.push(lf(o[c]))}else l=lf(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function lf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?hy.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(vt("Texture: Unable to serialize Texture."),{})}let py=0;const cf=new J;class Fn extends Ss{constructor(e=Fn.DEFAULT_IMAGE,t=Fn.DEFAULT_MAPPING,r=pr,o=pr,l=Sn,c=vs,f=yi,d=_i,h=Fn.DEFAULT_ANISOTROPY,m=Wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=xo(),this.name="",this.source=new Jh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=h,this.format=f,this.internalFormat=null,this.type=d,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(cf).x}get height(){return this.source.getSize(cf).y}get depth(){return this.source.getSize(cf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){vt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){vt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ig)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oc:e.x=e.x-Math.floor(e.x);break;case pr:e.x=e.x<0?0:1;break;case ih:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oc:e.y=e.y-Math.floor(e.y);break;case pr:e.y=e.y<0?0:1;break;case ih:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Fn.DEFAULT_IMAGE=null;Fn.DEFAULT_MAPPING=Ig;Fn.DEFAULT_ANISOTROPY=1;const ld=class ld{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,h=d[0],m=d[4],x=d[8],g=d[1],_=d[5],S=d[9],T=d[2],y=d[6],M=d[10];if(Math.abs(m-g)<.01&&Math.abs(x-T)<.01&&Math.abs(S-y)<.01){if(Math.abs(m+g)<.1&&Math.abs(x+T)<.1&&Math.abs(S+y)<.1&&Math.abs(h+_+M-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(h+1)/2,P=(_+1)/2,B=(M+1)/2,I=(m+g)/4,k=(x+T)/4,A=(S+y)/4;return b>P&&b>B?b<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(b),o=I/r,l=k/r):P>B?P<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),r=I/o,l=A/o):B<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(B),r=k/l,o=A/l),this.set(r,o,l,t),this}let w=Math.sqrt((y-S)*(y-S)+(x-T)*(x-T)+(g-m)*(g-m));return Math.abs(w)<.001&&(w=1),this.x=(y-S)/w,this.y=(x-T)/w,this.z=(g-m)/w,this.w=Math.acos((h+_+M-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this.w=bt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this.w=bt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(bt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ld.prototype.isVector4=!0;let on=ld;class my extends Ss{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new on(0,0,e,t),this.scissorTest=!1,this.viewport=new on(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Fn(o),c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Jh(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends my{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Hg extends Fn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=pn,this.minFilter=pn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gy extends Fn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=pn,this.minFilter=pn,this.wrapR=pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gc=class gc{constructor(e,t,r,o,l,c,f,d,h,m,x,g,_,S,T,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,d,h,m,x,g,_,S,T,y)}set(e,t,r,o,l,c,f,d,h,m,x,g,_,S,T,y){const M=this.elements;return M[0]=e,M[4]=t,M[8]=r,M[12]=o,M[1]=l,M[5]=c,M[9]=f,M[13]=d,M[2]=h,M[6]=m,M[10]=x,M[14]=g,M[3]=_,M[7]=S,M[11]=T,M[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/qs.setFromMatrixColumn(e,0).length(),l=1/qs.setFromMatrixColumn(e,1).length(),c=1/qs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),d=Math.cos(o),h=Math.sin(o),m=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const g=c*m,_=c*x,S=f*m,T=f*x;t[0]=d*m,t[4]=-d*x,t[8]=h,t[1]=_+S*h,t[5]=g-T*h,t[9]=-f*d,t[2]=T-g*h,t[6]=S+_*h,t[10]=c*d}else if(e.order==="YXZ"){const g=d*m,_=d*x,S=h*m,T=h*x;t[0]=g+T*f,t[4]=S*f-_,t[8]=c*h,t[1]=c*x,t[5]=c*m,t[9]=-f,t[2]=_*f-S,t[6]=T+g*f,t[10]=c*d}else if(e.order==="ZXY"){const g=d*m,_=d*x,S=h*m,T=h*x;t[0]=g-T*f,t[4]=-c*x,t[8]=S+_*f,t[1]=_+S*f,t[5]=c*m,t[9]=T-g*f,t[2]=-c*h,t[6]=f,t[10]=c*d}else if(e.order==="ZYX"){const g=c*m,_=c*x,S=f*m,T=f*x;t[0]=d*m,t[4]=S*h-_,t[8]=g*h+T,t[1]=d*x,t[5]=T*h+g,t[9]=_*h-S,t[2]=-h,t[6]=f*d,t[10]=c*d}else if(e.order==="YZX"){const g=c*d,_=c*h,S=f*d,T=f*h;t[0]=d*m,t[4]=T-g*x,t[8]=S*x+_,t[1]=x,t[5]=c*m,t[9]=-f*m,t[2]=-h*m,t[6]=_*x+S,t[10]=g-T*x}else if(e.order==="XZY"){const g=c*d,_=c*h,S=f*d,T=f*h;t[0]=d*m,t[4]=-x,t[8]=h*m,t[1]=g*x+T,t[5]=c*m,t[9]=_*x-S,t[2]=S*x-_,t[6]=f*m,t[10]=T*x+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vy,e,xy)}lookAt(e,t,r){const o=this.elements;return ai.subVectors(e,t),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),kr.crossVectors(r,ai),kr.lengthSq()===0&&(Math.abs(r.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),kr.crossVectors(r,ai)),kr.normalize(),El.crossVectors(ai,kr),o[0]=kr.x,o[4]=El.x,o[8]=ai.x,o[1]=kr.y,o[5]=El.y,o[9]=ai.y,o[2]=kr.z,o[6]=El.z,o[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[4],d=r[8],h=r[12],m=r[1],x=r[5],g=r[9],_=r[13],S=r[2],T=r[6],y=r[10],M=r[14],w=r[3],b=r[7],P=r[11],B=r[15],I=o[0],k=o[4],A=o[8],D=o[12],j=o[1],z=o[5],Y=o[9],le=o[13],ce=o[2],G=o[6],ne=o[10],X=o[14],O=o[3],F=o[7],$=o[11],U=o[15];return l[0]=c*I+f*j+d*ce+h*O,l[4]=c*k+f*z+d*G+h*F,l[8]=c*A+f*Y+d*ne+h*$,l[12]=c*D+f*le+d*X+h*U,l[1]=m*I+x*j+g*ce+_*O,l[5]=m*k+x*z+g*G+_*F,l[9]=m*A+x*Y+g*ne+_*$,l[13]=m*D+x*le+g*X+_*U,l[2]=S*I+T*j+y*ce+M*O,l[6]=S*k+T*z+y*G+M*F,l[10]=S*A+T*Y+y*ne+M*$,l[14]=S*D+T*le+y*X+M*U,l[3]=w*I+b*j+P*ce+B*O,l[7]=w*k+b*z+P*G+B*F,l[11]=w*A+b*Y+P*ne+B*$,l[15]=w*D+b*le+P*X+B*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],c=e[1],f=e[5],d=e[9],h=e[13],m=e[2],x=e[6],g=e[10],_=e[14],S=e[3],T=e[7],y=e[11],M=e[15],w=d*_-h*g,b=f*_-h*x,P=f*g-d*x,B=c*_-h*m,I=c*g-d*m,k=c*x-f*m;return t*(T*w-y*b+M*P)-r*(S*w-y*B+M*I)+o*(S*b-T*B+M*k)-l*(S*P-T*I+y*k)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],d=e[6],h=e[7],m=e[8],x=e[9],g=e[10],_=e[11],S=e[12],T=e[13],y=e[14],M=e[15],w=t*f-r*c,b=t*d-o*c,P=t*h-l*c,B=r*d-o*f,I=r*h-l*f,k=o*h-l*d,A=m*T-x*S,D=m*y-g*S,j=m*M-_*S,z=x*y-g*T,Y=x*M-_*T,le=g*M-_*y,ce=w*le-b*Y+P*z+B*j-I*D+k*A;if(ce===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/ce;return e[0]=(f*le-d*Y+h*z)*G,e[1]=(o*Y-r*le-l*z)*G,e[2]=(T*k-y*I+M*B)*G,e[3]=(g*I-x*k-_*B)*G,e[4]=(d*j-c*le-h*D)*G,e[5]=(t*le-o*j+l*D)*G,e[6]=(y*P-S*k-M*b)*G,e[7]=(m*k-g*P+_*b)*G,e[8]=(c*Y-f*j+h*A)*G,e[9]=(r*j-t*Y-l*A)*G,e[10]=(S*I-T*P+M*w)*G,e[11]=(x*P-m*I-_*w)*G,e[12]=(f*D-c*z-d*A)*G,e[13]=(t*z-r*D+o*A)*G,e[14]=(T*b-S*B-y*w)*G,e[15]=(m*B-x*b+g*w)*G,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,c=e.x,f=e.y,d=e.z,h=l*c,m=l*f;return this.set(h*c+r,h*f-o*d,h*d+o*f,0,h*f+o*d,m*f+r,m*d-o*c,0,h*d-o*f,m*d+o*c,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,c=t._y,f=t._z,d=t._w,h=l+l,m=c+c,x=f+f,g=l*h,_=l*m,S=l*x,T=c*m,y=c*x,M=f*x,w=d*h,b=d*m,P=d*x,B=r.x,I=r.y,k=r.z;return o[0]=(1-(T+M))*B,o[1]=(_+P)*B,o[2]=(S-b)*B,o[3]=0,o[4]=(_-P)*I,o[5]=(1-(g+M))*I,o[6]=(y+w)*I,o[7]=0,o[8]=(S+b)*k,o[9]=(y-w)*k,o[10]=(1-(g+T))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let c=qs.set(o[0],o[1],o[2]).length();const f=qs.set(o[4],o[5],o[6]).length(),d=qs.set(o[8],o[9],o[10]).length();l<0&&(c=-c),Ii.copy(this);const h=1/c,m=1/f,x=1/d;return Ii.elements[0]*=h,Ii.elements[1]*=h,Ii.elements[2]*=h,Ii.elements[4]*=m,Ii.elements[5]*=m,Ii.elements[6]*=m,Ii.elements[8]*=x,Ii.elements[9]*=x,Ii.elements[10]*=x,t.setFromRotationMatrix(Ii),r.x=c,r.y=f,r.z=d,this}makePerspective(e,t,r,o,l,c,f=qi,d=!1){const h=this.elements,m=2*l/(t-e),x=2*l/(r-o),g=(t+e)/(t-e),_=(r+o)/(r-o);let S,T;if(d)S=l/(c-l),T=c*l/(c-l);else if(f===qi)S=-(c+l)/(c-l),T=-2*c*l/(c-l);else if(f===fc)S=-c/(c-l),T=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=x,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,l,c,f=qi,d=!1){const h=this.elements,m=2/(t-e),x=2/(r-o),g=-(t+e)/(t-e),_=-(r+o)/(r-o);let S,T;if(d)S=1/(c-l),T=c/(c-l);else if(f===qi)S=-2/(c-l),T=-(c+l)/(c-l);else if(f===fc)S=-1/(c-l),T=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=x,h[9]=0,h[13]=_,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};gc.prototype.isMatrix4=!0;let tn=gc;const qs=new J,Ii=new tn,vy=new J(0,0,0),xy=new J(1,1,1),kr=new J,El=new J,ai=new J,Jm=new tn,$m=new Qi;class Ms{constructor(e=0,t=0,r=0,o=Ms.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],d=o[1],h=o[5],m=o[9],x=o[2],g=o[6],_=o[10];switch(t){case"XYZ":this._y=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-m,_),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(f,_),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(bt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,_),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-bt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,_),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(bt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(f,_));break;case"XZY":this._z=Math.asin(-bt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-m,_),this._y=0);break;default:vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Jm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return $m.setFromEuler(this),this.setFromQuaternion($m,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ms.DEFAULT_ORDER="XYZ";class Vg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _y=0;const e0=new J,Ys=new Qi,cr=new tn,wl=new J,na=new J,yy=new J,My=new Qi,t0=new J(1,0,0),n0=new J(0,1,0),i0=new J(0,0,1),r0={type:"added"},Sy={type:"removed"},Qs={type:"childadded",child:null},uf={type:"childremoved",child:null};class jn extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_y++}),this.uuid=xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jn.DEFAULT_UP.clone();const e=new J,t=new Ms,r=new Qi,o=new J(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new tn},normalMatrix:{value:new wt}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(t0,e)}rotateY(e){return this.rotateOnAxis(n0,e)}rotateZ(e){return this.rotateOnAxis(i0,e)}translateOnAxis(e,t){return e0.copy(e).applyQuaternion(this.quaternion),this.position.add(e0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(t0,e)}translateY(e){return this.translateOnAxis(n0,e)}translateZ(e){return this.translateOnAxis(i0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?wl.copy(e):wl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cr.lookAt(na,wl,this.up):cr.lookAt(wl,na,this.up),this.quaternion.setFromRotationMatrix(cr),o&&(cr.extractRotation(o.matrixWorld),Ys.setFromRotationMatrix(cr),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(r0),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):Dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sy),uf.child=e,this.dispatchEvent(uf),uf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cr.multiply(e.parent.matrixWorld)),e.applyMatrix4(cr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(r0),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,e,yy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(na,My,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,d){return f[d.uuid]===void 0&&(f[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const d=f.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const x=d[h];l(e.shapes,x)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let d=0,h=this.material.length;d<h;d++)f.push(l(e.materials,this.material[d]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const d=this.animations[f];o.animations.push(l(e.animations,d))}}if(t){const f=c(e.geometries),d=c(e.materials),h=c(e.textures),m=c(e.images),x=c(e.shapes),g=c(e.skeletons),_=c(e.animations),S=c(e.nodes);f.length>0&&(r.geometries=f),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),m.length>0&&(r.images=m),x.length>0&&(r.shapes=x),g.length>0&&(r.skeletons=g),_.length>0&&(r.animations=_),S.length>0&&(r.nodes=S)}return r.object=o,r;function c(f){const d=[];for(const h in f){const m=f[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}jn.DEFAULT_UP=new J(0,1,0);jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Bi extends jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ay={type:"move"};class ff{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,c=null;const f=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const T of e.hand.values()){const y=t.getJointPose(T,r),M=this._getHandJoint(h,T);y!==null&&(M.matrix.fromArray(y.transform.matrix),M.matrix.decompose(M.position,M.rotation,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=y.radius),M.visible=y!==null}const m=h.joints["index-finger-tip"],x=h.joints["thumb-tip"],g=m.position.distanceTo(x.position),_=.02,S=.005;h.inputState.pinching&&g>_+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=_-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Ay)))}return f!==null&&(f.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Bi;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Gg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Br={h:0,s:0,l:0},Tl={h:0,s:0,l:0};function hf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Nt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Lt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Lt.workingColorSpace){if(e=Zh(e,1),t=bt(t,0,1),r=bt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=hf(c,l,e+1/3),this.g=hf(c,l,e),this.b=hf(c,l,e-1/3)}return Lt.colorSpaceToWorking(this,o),this}setStyle(e,t=xi){function r(l){l!==void 0&&parseFloat(l)<1&&vt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:vt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);vt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xi){const r=Gg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):vt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}copyLinearToSRGB(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return Lt.workingToColorSpace(Dn.copy(this),e),Math.round(bt(Dn.r*255,0,255))*65536+Math.round(bt(Dn.g*255,0,255))*256+Math.round(bt(Dn.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.workingToColorSpace(Dn.copy(this),t);const r=Dn.r,o=Dn.g,l=Dn.b,c=Math.max(r,o,l),f=Math.min(r,o,l);let d,h;const m=(f+c)/2;if(f===c)d=0,h=0;else{const x=c-f;switch(h=m<=.5?x/(c+f):x/(2-c-f),c){case r:d=(o-l)/x+(o<l?6:0);break;case o:d=(l-r)/x+2;break;case l:d=(r-o)/x+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=Lt.workingColorSpace){return Lt.workingToColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=xi){Lt.workingToColorSpace(Dn.copy(this),e);const t=Dn.r,r=Dn.g,o=Dn.b;return e!==xi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Br),this.setHSL(Br.h+e,Br.s+t,Br.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Br),e.getHSL(Tl);const r=ga(Br.h,Tl.h,t),o=ga(Br.s,Tl.s,t),l=ga(Br.l,Tl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Nt;Nt.NAMES=Gg;class $h extends jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ms,this.environmentIntensity=1,this.environmentRotation=new Ms,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ui=new J,ur=new J,df=new J,fr=new J,Zs=new J,Js=new J,s0=new J,pf=new J,mf=new J,gf=new J,vf=new on,xf=new on,_f=new on;class Oi{constructor(e=new J,t=new J,r=new J){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ui.subVectors(e,t),o.cross(Ui);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){Ui.subVectors(o,t),ur.subVectors(r,t),df.subVectors(e,t);const c=Ui.dot(Ui),f=Ui.dot(ur),d=Ui.dot(df),h=ur.dot(ur),m=ur.dot(df),x=c*h-f*f;if(x===0)return l.set(0,0,0),null;const g=1/x,_=(h*d-f*m)*g,S=(c*m-f*d)*g;return l.set(1-_-S,S,_)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,fr)===null?!1:fr.x>=0&&fr.y>=0&&fr.x+fr.y<=1}static getInterpolation(e,t,r,o,l,c,f,d){return this.getBarycoord(e,t,r,o,fr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,fr.x),d.addScaledVector(c,fr.y),d.addScaledVector(f,fr.z),d)}static getInterpolatedAttribute(e,t,r,o,l,c){return vf.setScalar(0),xf.setScalar(0),_f.setScalar(0),vf.fromBufferAttribute(e,t),xf.fromBufferAttribute(e,r),_f.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(vf,l.x),c.addScaledVector(xf,l.y),c.addScaledVector(_f,l.z),c}static isFrontFacing(e,t,r,o){return Ui.subVectors(r,t),ur.subVectors(e,t),Ui.cross(ur).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),ur.subVectors(this.a,this.b),Ui.cross(ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Oi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let c,f;Zs.subVectors(o,r),Js.subVectors(l,r),pf.subVectors(e,r);const d=Zs.dot(pf),h=Js.dot(pf);if(d<=0&&h<=0)return t.copy(r);mf.subVectors(e,o);const m=Zs.dot(mf),x=Js.dot(mf);if(m>=0&&x<=m)return t.copy(o);const g=d*x-m*h;if(g<=0&&d>=0&&m<=0)return c=d/(d-m),t.copy(r).addScaledVector(Zs,c);gf.subVectors(e,l);const _=Zs.dot(gf),S=Js.dot(gf);if(S>=0&&_<=S)return t.copy(l);const T=_*h-d*S;if(T<=0&&h>=0&&S<=0)return f=h/(h-S),t.copy(r).addScaledVector(Js,f);const y=m*S-_*x;if(y<=0&&x-m>=0&&_-S>=0)return s0.subVectors(l,o),f=(x-m)/(x-m+(_-S)),t.copy(o).addScaledVector(s0,f);const M=1/(y+T+g);return c=T*M,f=g*M,t.copy(r).addScaledVector(Zs,c).addScaledVector(Js,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ya{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,Di):Di.fromBufferAttribute(l,c),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Cl.copy(r.boundingBox)),Cl.applyMatrix4(e.matrixWorld),this.union(Cl)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ia),Rl.subVectors(this.max,ia),$s.subVectors(e.a,ia),eo.subVectors(e.b,ia),to.subVectors(e.c,ia),zr.subVectors(eo,$s),Hr.subVectors(to,eo),cs.subVectors($s,to);let t=[0,-zr.z,zr.y,0,-Hr.z,Hr.y,0,-cs.z,cs.y,zr.z,0,-zr.x,Hr.z,0,-Hr.x,cs.z,0,-cs.x,-zr.y,zr.x,0,-Hr.y,Hr.x,0,-cs.y,cs.x,0];return!yf(t,$s,eo,to,Rl)||(t=[1,0,0,0,1,0,0,0,1],!yf(t,$s,eo,to,Rl))?!1:(bl.crossVectors(zr,Hr),t=[bl.x,bl.y,bl.z],yf(t,$s,eo,to,Rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const hr=[new J,new J,new J,new J,new J,new J,new J,new J],Di=new J,Cl=new ya,$s=new J,eo=new J,to=new J,zr=new J,Hr=new J,cs=new J,ia=new J,Rl=new J,bl=new J,us=new J;function yf(s,e,t,r,o){for(let l=0,c=s.length-3;l<=c;l+=3){us.fromArray(s,l);const f=o.x*Math.abs(us.x)+o.y*Math.abs(us.y)+o.z*Math.abs(us.z),d=e.dot(us),h=t.dot(us),m=r.dot(us);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>f)return!1}return!0}const un=new J,Pl=new Pt;let Ey=0;class kt extends Ss{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ey++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Gm,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Pl.fromBufferAttribute(this,t),Pl.applyMatrix3(e),this.setXY(t,Pl.x,Pl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ao(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Wn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ao(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ao(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ao(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ao(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),r=Wn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),r=Wn(r,this.array),o=Wn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),r=Wn(r,this.array),o=Wn(o,this.array),l=Wn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Wg extends kt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Xg extends kt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Tn extends kt{constructor(e,t,r){super(new Float32Array(e),t,r)}}const wy=new ya,ra=new J,Mf=new J;class _o{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):wy.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ra.subVectors(e,this.center);const t=ra.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(ra,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Mf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ra.copy(e.center).add(Mf)),this.expandByPoint(ra.copy(e.center).sub(Mf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ty=0;const vi=new tn,Sf=new jn,no=new J,li=new ya,sa=new ya,Mn=new J;class fn extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(X_(e)?Xg:Wg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new wt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,t,r){return vi.makeTranslation(e,t,r),this.applyMatrix4(vi),this}scale(e,t,r){return vi.makeScale(e,t,r),this.applyMatrix4(vi),this}lookAt(e){return Sf.lookAt(e),Sf.updateMatrix(),this.applyMatrix4(Sf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Tn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];li.setFromBufferAttribute(l),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _o);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const r=this.boundingSphere.center;if(li.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];sa.setFromBufferAttribute(f),this.morphTargetsRelative?(Mn.addVectors(li.min,sa.min),li.expandByPoint(Mn),Mn.addVectors(li.max,sa.max),li.expandByPoint(Mn)):(li.expandByPoint(sa.min),li.expandByPoint(sa.max))}li.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)Mn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(Mn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],d=this.morphTargetsRelative;for(let h=0,m=f.count;h<m;h++)Mn.fromBufferAttribute(f,h),d&&(no.fromBufferAttribute(e,h),Mn.add(no)),o=Math.max(o,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],d=[];for(let A=0;A<r.count;A++)f[A]=new J,d[A]=new J;const h=new J,m=new J,x=new J,g=new Pt,_=new Pt,S=new Pt,T=new J,y=new J;function M(A,D,j){h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,D),x.fromBufferAttribute(r,j),g.fromBufferAttribute(l,A),_.fromBufferAttribute(l,D),S.fromBufferAttribute(l,j),m.sub(h),x.sub(h),_.sub(g),S.sub(g);const z=1/(_.x*S.y-S.x*_.y);isFinite(z)&&(T.copy(m).multiplyScalar(S.y).addScaledVector(x,-_.y).multiplyScalar(z),y.copy(x).multiplyScalar(_.x).addScaledVector(m,-S.x).multiplyScalar(z),f[A].add(T),f[D].add(T),f[j].add(T),d[A].add(y),d[D].add(y),d[j].add(y))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let A=0,D=w.length;A<D;++A){const j=w[A],z=j.start,Y=j.count;for(let le=z,ce=z+Y;le<ce;le+=3)M(e.getX(le+0),e.getX(le+1),e.getX(le+2))}const b=new J,P=new J,B=new J,I=new J;function k(A){B.fromBufferAttribute(o,A),I.copy(B);const D=f[A];b.copy(D),b.sub(B.multiplyScalar(B.dot(D))).normalize(),P.crossVectors(I,D);const z=P.dot(d[A])<0?-1:1;c.setXYZW(A,b.x,b.y,b.z,z)}for(let A=0,D=w.length;A<D;++A){const j=w[A],z=j.start,Y=j.count;for(let le=z,ce=z+Y;le<ce;le+=3)k(e.getX(le+0)),k(e.getX(le+1)),k(e.getX(le+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,_=r.count;g<_;g++)r.setXYZ(g,0,0,0);const o=new J,l=new J,c=new J,f=new J,d=new J,h=new J,m=new J,x=new J;if(e)for(let g=0,_=e.count;g<_;g+=3){const S=e.getX(g+0),T=e.getX(g+1),y=e.getX(g+2);o.fromBufferAttribute(t,S),l.fromBufferAttribute(t,T),c.fromBufferAttribute(t,y),m.subVectors(c,l),x.subVectors(o,l),m.cross(x),f.fromBufferAttribute(r,S),d.fromBufferAttribute(r,T),h.fromBufferAttribute(r,y),f.add(m),d.add(m),h.add(m),r.setXYZ(S,f.x,f.y,f.z),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,_=t.count;g<_;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),m.subVectors(c,l),x.subVectors(o,l),m.cross(x),r.setXYZ(g+0,m.x,m.y,m.z),r.setXYZ(g+1,m.x,m.y,m.z),r.setXYZ(g+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Mn.fromBufferAttribute(e,t),Mn.normalize(),e.setXYZ(t,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(f,d){const h=f.array,m=f.itemSize,x=f.normalized,g=new h.constructor(d.length*m);let _=0,S=0;for(let T=0,y=d.length;T<y;T++){f.isInterleavedBufferAttribute?_=d[T]*f.data.stride+f.offset:_=d[T]*m;for(let M=0;M<m;M++)g[S++]=h[_++]}return new kt(g,m,x)}if(this.index===null)return vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fn,r=this.index.array,o=this.attributes;for(const f in o){const d=o[f],h=e(d,r);t.setAttribute(f,h)}const l=this.morphAttributes;for(const f in l){const d=[],h=l[f];for(let m=0,x=h.length;m<x;m++){const g=h[m],_=e(g,r);d.push(_)}t.morphAttributes[f]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,d=c.length;f<d;f++){const h=c[f];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let x=0,g=h.length;x<g;x++){const _=h[x];m.push(_.toJSON(e.data))}m.length>0&&(o[d]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const m=o[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],x=l[h];for(let g=0,_=x.length;g<_;g++)m.push(x[g].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const x=c[h];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Cy=0;class yo extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=xo(),this.name="",this.type="Material",this.blending=uo,this.side=jr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qf,this.blendDst=Yf,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Nt(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){vt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){vt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==uo&&(r.blending=this.blending),this.side!==jr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==qf&&(r.blendSrc=this.blendSrc),this.blendDst!==Yf&&(r.blendDst=this.blendDst),this.blendEquation!==ms&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ho&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==js&&(r.stencilFail=this.stencilFail),this.stencilZFail!==js&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==js&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const f in l){const d=l[f];delete d.metadata,c.push(d)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const dr=new J,Af=new J,Ll=new J,Vr=new J,Ef=new J,Il=new J,wf=new J;class ed{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dr.copy(this.origin).addScaledVector(this.direction,t),dr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Af.copy(e).add(t).multiplyScalar(.5),Ll.copy(t).sub(e).normalize(),Vr.copy(this.origin).sub(Af);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Ll),f=Vr.dot(this.direction),d=-Vr.dot(Ll),h=Vr.lengthSq(),m=Math.abs(1-c*c);let x,g,_,S;if(m>0)if(x=c*d-f,g=c*f-d,S=l*m,x>=0)if(g>=-S)if(g<=S){const T=1/m;x*=T,g*=T,_=x*(x+c*g+2*f)+g*(c*x+g+2*d)+h}else g=l,x=Math.max(0,-(c*g+f)),_=-x*x+g*(g+2*d)+h;else g=-l,x=Math.max(0,-(c*g+f)),_=-x*x+g*(g+2*d)+h;else g<=-S?(x=Math.max(0,-(-c*l+f)),g=x>0?-l:Math.min(Math.max(-l,-d),l),_=-x*x+g*(g+2*d)+h):g<=S?(x=0,g=Math.min(Math.max(-l,-d),l),_=g*(g+2*d)+h):(x=Math.max(0,-(c*l+f)),g=x>0?l:Math.min(Math.max(-l,-d),l),_=-x*x+g*(g+2*d)+h);else g=c>0?-l:l,x=Math.max(0,-(c*g+f)),_=-x*x+g*(g+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(Af).addScaledVector(Ll,g),_}intersectSphere(e,t){dr.subVectors(e.center,this.origin);const r=dr.dot(this.direction),o=dr.dot(dr)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=r-c,d=r+c;return d<0?null:f<0?this.at(d,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,c,f,d;const h=1/this.direction.x,m=1/this.direction.y,x=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,o=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,o=(e.min.x-g.x)*h),m>=0?(l=(e.min.y-g.y)*m,c=(e.max.y-g.y)*m):(l=(e.max.y-g.y)*m,c=(e.min.y-g.y)*m),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),x>=0?(f=(e.min.z-g.z)*x,d=(e.max.z-g.z)*x):(f=(e.max.z-g.z)*x,d=(e.min.z-g.z)*x),r>d||f>o)||((f>r||r!==r)&&(r=f),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,dr)!==null}intersectTriangle(e,t,r,o,l){Ef.subVectors(t,e),Il.subVectors(r,e),wf.crossVectors(Ef,Il);let c=this.direction.dot(wf),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Vr.subVectors(this.origin,e);const d=f*this.direction.dot(Il.crossVectors(Vr,Il));if(d<0)return null;const h=f*this.direction.dot(Ef.cross(Vr));if(h<0||d+h>c)return null;const m=-f*Vr.dot(wf);return m<0?null:this.at(m/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jg extends yo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ms,this.combine=Eg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const o0=new tn,fs=new ed,Ul=new _o,a0=new J,Dl=new J,Nl=new J,Fl=new J,Tf=new J,Ol=new J,l0=new J,kl=new J;class On extends jn{constructor(e=new fn,t=new jg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Ol.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=f[d],x=l[d];m!==0&&(Tf.fromBufferAttribute(x,e),c?Ol.addScaledVector(Tf,m):Ol.addScaledVector(Tf.sub(t),m))}t.add(Ol)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ul.copy(r.boundingSphere),Ul.applyMatrix4(l),fs.copy(e.ray).recast(e.near),!(Ul.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Ul,a0)===null||fs.origin.distanceToSquared(a0)>(e.far-e.near)**2))&&(o0.copy(l).invert(),fs.copy(e.ray).applyMatrix4(o0),!(r.boundingBox!==null&&fs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,r){let o;const l=this.geometry,c=this.material,f=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,x=l.attributes.normal,g=l.groups,_=l.drawRange;if(f!==null)if(Array.isArray(c))for(let S=0,T=g.length;S<T;S++){const y=g[S],M=c[y.materialIndex],w=Math.max(y.start,_.start),b=Math.min(f.count,Math.min(y.start+y.count,_.start+_.count));for(let P=w,B=b;P<B;P+=3){const I=f.getX(P),k=f.getX(P+1),A=f.getX(P+2);o=Bl(this,M,e,r,h,m,x,I,k,A),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const S=Math.max(0,_.start),T=Math.min(f.count,_.start+_.count);for(let y=S,M=T;y<M;y+=3){const w=f.getX(y),b=f.getX(y+1),P=f.getX(y+2);o=Bl(this,c,e,r,h,m,x,w,b,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let S=0,T=g.length;S<T;S++){const y=g[S],M=c[y.materialIndex],w=Math.max(y.start,_.start),b=Math.min(d.count,Math.min(y.start+y.count,_.start+_.count));for(let P=w,B=b;P<B;P+=3){const I=P,k=P+1,A=P+2;o=Bl(this,M,e,r,h,m,x,I,k,A),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const S=Math.max(0,_.start),T=Math.min(d.count,_.start+_.count);for(let y=S,M=T;y<M;y+=3){const w=y,b=y+1,P=y+2;o=Bl(this,c,e,r,h,m,x,w,b,P),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function Ry(s,e,t,r,o,l,c,f){let d;if(e.side===ei?d=r.intersectTriangle(c,l,o,!0,f):d=r.intersectTriangle(o,l,c,e.side===jr,f),d===null)return null;kl.copy(f),kl.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(kl);return h<t.near||h>t.far?null:{distance:h,point:kl.clone(),object:s}}function Bl(s,e,t,r,o,l,c,f,d,h){s.getVertexPosition(f,Dl),s.getVertexPosition(d,Nl),s.getVertexPosition(h,Fl);const m=Ry(s,e,t,r,Dl,Nl,Fl,l0);if(m){const x=new J;Oi.getBarycoord(l0,Dl,Nl,Fl,x),o&&(m.uv=Oi.getInterpolatedAttribute(o,f,d,h,x,new Pt)),l&&(m.uv1=Oi.getInterpolatedAttribute(l,f,d,h,x,new Pt)),c&&(m.normal=Oi.getInterpolatedAttribute(c,f,d,h,x,new J),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const g={a:f,b:d,c:h,normal:new J,materialIndex:0};Oi.getNormal(Dl,Nl,Fl,g.normal),m.face=g,m.barycoord=x}return m}class Kg extends Fn{constructor(e=null,t=1,r=1,o,l,c,f,d,h=pn,m=pn,x,g){super(null,c,f,d,h,m,o,l,x,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cf=new J,by=new J,Py=new wt;class ds{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=Cf.subVectors(r,t).cross(by.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(Cf),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Py.getNormalMatrix(e),o=this.coplanarPoint(Cf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hs=new _o,Ly=new Pt(.5,.5),zl=new J;class qg{constructor(e=new ds,t=new ds,r=new ds,o=new ds,l=new ds,c=new ds){this.planes=[e,t,r,o,l,c]}set(e,t,r,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=qi,r=!1){const o=this.planes,l=e.elements,c=l[0],f=l[1],d=l[2],h=l[3],m=l[4],x=l[5],g=l[6],_=l[7],S=l[8],T=l[9],y=l[10],M=l[11],w=l[12],b=l[13],P=l[14],B=l[15];if(o[0].setComponents(h-c,_-m,M-S,B-w).normalize(),o[1].setComponents(h+c,_+m,M+S,B+w).normalize(),o[2].setComponents(h+f,_+x,M+T,B+b).normalize(),o[3].setComponents(h-f,_-x,M-T,B-b).normalize(),r)o[4].setComponents(d,g,y,P).normalize(),o[5].setComponents(h-d,_-g,M-y,B-P).normalize();else if(o[4].setComponents(h-d,_-g,M-y,B-P).normalize(),t===qi)o[5].setComponents(h+d,_+g,M+y,B+P).normalize();else if(t===fc)o[5].setComponents(d,g,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hs)}intersectsSprite(e){hs.center.set(0,0,0);const t=Ly.distanceTo(e.center);return hs.radius=.7071067811865476+t,hs.applyMatrix4(e.matrixWorld),this.intersectsSphere(hs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(zl.x=o.normal.x>0?e.max.x:e.min.x,zl.y=o.normal.y>0?e.max.y:e.min.y,zl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(zl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yg extends yo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const dc=new J,pc=new J,c0=new tn,oa=new ed,Hl=new _o,Rf=new J,u0=new J;class Qg extends jn{constructor(e=new fn,t=new Yg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)dc.fromBufferAttribute(t,o-1),pc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=dc.distanceTo(pc);e.setAttribute("lineDistance",new Tn(r,1))}else vt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Hl.copy(r.boundingSphere),Hl.applyMatrix4(o),Hl.radius+=l,e.ray.intersectsSphere(Hl)===!1)return;c0.copy(o).invert(),oa.copy(e.ray).applyMatrix4(c0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=this.isLineSegments?2:1,m=r.index,g=r.attributes.position;if(m!==null){const _=Math.max(0,c.start),S=Math.min(m.count,c.start+c.count);for(let T=_,y=S-1;T<y;T+=h){const M=m.getX(T),w=m.getX(T+1),b=Vl(this,e,oa,d,M,w,T);b&&t.push(b)}if(this.isLineLoop){const T=m.getX(S-1),y=m.getX(_),M=Vl(this,e,oa,d,T,y,S-1);M&&t.push(M)}}else{const _=Math.max(0,c.start),S=Math.min(g.count,c.start+c.count);for(let T=_,y=S-1;T<y;T+=h){const M=Vl(this,e,oa,d,T,T+1,T);M&&t.push(M)}if(this.isLineLoop){const T=Vl(this,e,oa,d,S-1,_,S-1);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Vl(s,e,t,r,o,l,c){const f=s.geometry.attributes.position;if(dc.fromBufferAttribute(f,o),pc.fromBufferAttribute(f,l),t.distanceSqToSegment(dc,pc,Rf,u0)>r)return;Rf.applyMatrix4(s.matrixWorld);const h=e.ray.origin.distanceTo(Rf);if(!(h<e.near||h>e.far))return{distance:h,point:u0.clone().applyMatrix4(s.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:s}}const f0=new J,h0=new J;class Iy extends Qg{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)f0.fromBufferAttribute(t,o),h0.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+f0.distanceTo(h0);e.setAttribute("lineDistance",new Tn(r,1))}else vt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nh extends yo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const d0=new tn,Fh=new ed,Gl=new _o,Wl=new J;class Oh extends jn{constructor(e=new fn,t=new Nh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,c=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Gl.copy(r.boundingSphere),Gl.applyMatrix4(o),Gl.radius+=l,e.ray.intersectsSphere(Gl)===!1)return;d0.copy(o).invert(),Fh.copy(e.ray).applyMatrix4(d0);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=f*f,h=r.index,x=r.attributes.position;if(h!==null){const g=Math.max(0,c.start),_=Math.min(h.count,c.start+c.count);for(let S=g,T=_;S<T;S++){const y=h.getX(S);Wl.fromBufferAttribute(x,y),p0(Wl,y,d,o,e,t,this)}}else{const g=Math.max(0,c.start),_=Math.min(x.count,c.start+c.count);for(let S=g,T=_;S<T;S++)Wl.fromBufferAttribute(x,S),p0(Wl,S,d,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function p0(s,e,t,r,o,l,c){const f=Fh.distanceSqToPoint(s);if(f<t){const d=new J;Fh.closestPointToPoint(s,d),d.applyMatrix4(r);const h=o.ray.origin.distanceTo(d);if(h<o.near||h>o.far)return;l.push({distance:h,distanceToRay:Math.sqrt(f),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class Zg extends Fn{constructor(e=[],t=_s,r,o,l,c,f,d,h,m){super(e,t,r,o,l,c,f,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Uy extends Fn{constructor(e,t,r,o,l,c,f,d,h){super(e,t,r,o,l,c,f,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mo extends Fn{constructor(e,t,r=Ji,o,l,c,f=pn,d=pn,h,m=xr,x=1){if(m!==xr&&m!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:x};super(g,o,l,c,f,d,m,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Dy extends mo{constructor(e,t=Ji,r=_s,o,l,c=pn,f=pn,d,h=xr){const m={width:e,height:e,depth:1},x=[m,m,m,m,m,m];super(e,e,t,r,o,l,c,f,d,h),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Jg extends Fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ma extends fn{constructor(e=1,t=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const d=[],h=[],m=[],x=[];let g=0,_=0;S("z","y","x",-1,-1,r,t,e,c,l,0),S("z","y","x",1,-1,r,t,-e,c,l,1),S("x","z","y",1,1,e,r,t,o,c,2),S("x","z","y",1,-1,e,r,-t,o,c,3),S("x","y","z",1,-1,e,t,r,o,l,4),S("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new Tn(h,3)),this.setAttribute("normal",new Tn(m,3)),this.setAttribute("uv",new Tn(x,2));function S(T,y,M,w,b,P,B,I,k,A,D){const j=P/k,z=B/A,Y=P/2,le=B/2,ce=I/2,G=k+1,ne=A+1;let X=0,O=0;const F=new J;for(let $=0;$<ne;$++){const U=$*z-le;for(let V=0;V<G;V++){const ye=V*j-Y;F[T]=ye*w,F[y]=U*b,F[M]=ce,h.push(F.x,F.y,F.z),F[T]=0,F[y]=0,F[M]=I>0?1:-1,m.push(F.x,F.y,F.z),x.push(V/k),x.push(1-$/A),X+=1}}for(let $=0;$<A;$++)for(let U=0;U<k;U++){const V=g+U+G*$,ye=g+U+G*($+1),Me=g+(U+1)+G*($+1),xe=g+(U+1)+G*$;d.push(V,ye,xe),d.push(ye,Me,xe),O+=6}f.addGroup(_,O,D),_+=O,g+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class td extends fn{constructor(e=[],t=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:r,detail:o};const l=[],c=[];f(o),h(r),m(),this.setAttribute("position",new Tn(l,3)),this.setAttribute("normal",new Tn(l.slice(),3)),this.setAttribute("uv",new Tn(c,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(w){const b=new J,P=new J,B=new J;for(let I=0;I<t.length;I+=3)_(t[I+0],b),_(t[I+1],P),_(t[I+2],B),d(b,P,B,w)}function d(w,b,P,B){const I=B+1,k=[];for(let A=0;A<=I;A++){k[A]=[];const D=w.clone().lerp(P,A/I),j=b.clone().lerp(P,A/I),z=I-A;for(let Y=0;Y<=z;Y++)Y===0&&A===I?k[A][Y]=D:k[A][Y]=D.clone().lerp(j,Y/z)}for(let A=0;A<I;A++)for(let D=0;D<2*(I-A)-1;D++){const j=Math.floor(D/2);D%2===0?(g(k[A][j+1]),g(k[A+1][j]),g(k[A][j])):(g(k[A][j+1]),g(k[A+1][j+1]),g(k[A+1][j]))}}function h(w){const b=new J;for(let P=0;P<l.length;P+=3)b.x=l[P+0],b.y=l[P+1],b.z=l[P+2],b.normalize().multiplyScalar(w),l[P+0]=b.x,l[P+1]=b.y,l[P+2]=b.z}function m(){const w=new J;for(let b=0;b<l.length;b+=3){w.x=l[b+0],w.y=l[b+1],w.z=l[b+2];const P=y(w)/2/Math.PI+.5,B=M(w)/Math.PI+.5;c.push(P,1-B)}S(),x()}function x(){for(let w=0;w<c.length;w+=6){const b=c[w+0],P=c[w+2],B=c[w+4],I=Math.max(b,P,B),k=Math.min(b,P,B);I>.9&&k<.1&&(b<.2&&(c[w+0]+=1),P<.2&&(c[w+2]+=1),B<.2&&(c[w+4]+=1))}}function g(w){l.push(w.x,w.y,w.z)}function _(w,b){const P=w*3;b.x=e[P+0],b.y=e[P+1],b.z=e[P+2]}function S(){const w=new J,b=new J,P=new J,B=new J,I=new Pt,k=new Pt,A=new Pt;for(let D=0,j=0;D<l.length;D+=9,j+=6){w.set(l[D+0],l[D+1],l[D+2]),b.set(l[D+3],l[D+4],l[D+5]),P.set(l[D+6],l[D+7],l[D+8]),I.set(c[j+0],c[j+1]),k.set(c[j+2],c[j+3]),A.set(c[j+4],c[j+5]),B.copy(w).add(b).add(P).divideScalar(3);const z=y(B);T(I,j+0,w,z),T(k,j+2,b,z),T(A,j+4,P,z)}}function T(w,b,P,B){B<0&&w.x===1&&(c[b]=w.x-1),P.x===0&&P.z===0&&(c[b]=B/2/Math.PI+.5)}function y(w){return Math.atan2(w.z,-w.x)}function M(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new td(e.vertices,e.indices,e.radius,e.detail)}}class Ny{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){vt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let c;t?c=t:c=e*r[l-1];let f=0,d=l-1,h;for(;f<=d;)if(o=Math.floor(f+(d-f)/2),h=r[o]-c,h<0)f=o+1;else if(h>0)d=o-1;else{d=o;break}if(o=d,r[o]===c)return o/(l-1);const m=r[o],g=r[o+1]-m,_=(c-m)/g;return(o+_)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const c=this.getPoint(o),f=this.getPoint(l),d=t||(c.isVector2?new Pt:new J);return d.copy(f).sub(c).normalize(),d}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new J,o=[],l=[],c=[],f=new J,d=new tn;for(let _=0;_<=e;_++){const S=_/e;o[_]=this.getTangentAt(S,new J)}l[0]=new J,c[0]=new J;let h=Number.MAX_VALUE;const m=Math.abs(o[0].x),x=Math.abs(o[0].y),g=Math.abs(o[0].z);m<=h&&(h=m,r.set(1,0,0)),x<=h&&(h=x,r.set(0,1,0)),g<=h&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),c[0].crossVectors(o[0],l[0]);for(let _=1;_<=e;_++){if(l[_]=l[_-1].clone(),c[_]=c[_-1].clone(),f.crossVectors(o[_-1],o[_]),f.length()>Number.EPSILON){f.normalize();const S=Math.acos(bt(o[_-1].dot(o[_]),-1,1));l[_].applyMatrix4(d.makeRotationAxis(f,S))}c[_].crossVectors(o[_],l[_])}if(t===!0){let _=Math.acos(bt(l[0].dot(l[e]),-1,1));_/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(_=-_);for(let S=1;S<=e;S++)l[S].applyMatrix4(d.makeRotationAxis(o[S],_*S)),c[S].crossVectors(o[S],l[S])}return{tangents:o,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function nd(){let s=0,e=0,t=0,r=0;function o(l,c,f,d){s=l,e=f,t=-3*l+3*c-2*f-d,r=2*l-2*c+f+d}return{initCatmullRom:function(l,c,f,d,h){o(c,f,h*(f-l),h*(d-c))},initNonuniformCatmullRom:function(l,c,f,d,h,m,x){let g=(c-l)/h-(f-l)/(h+m)+(f-c)/m,_=(f-c)/m-(d-c)/(m+x)+(d-f)/x;g*=m,_*=m,o(c,f,g,_)},calc:function(l){const c=l*l,f=c*l;return s+e*l+t*c+r*f}}}const m0=new J,g0=new J,bf=new nd,Pf=new nd,Lf=new nd;class Fy extends Ny{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new J){const r=t,o=this.points,l=o.length,c=(l-(this.closed?0:1))*e;let f=Math.floor(c),d=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:d===0&&f===l-1&&(f=l-2,d=1);let h,m;this.closed||f>0?h=o[(f-1)%l]:(g0.subVectors(o[0],o[1]).add(o[0]),h=g0);const x=o[f%l],g=o[(f+1)%l];if(this.closed||f+2<l?m=o[(f+2)%l]:(m0.subVectors(o[l-1],o[l-2]).add(o[l-1]),m=m0),this.curveType==="centripetal"||this.curveType==="chordal"){const _=this.curveType==="chordal"?.5:.25;let S=Math.pow(h.distanceToSquared(x),_),T=Math.pow(x.distanceToSquared(g),_),y=Math.pow(g.distanceToSquared(m),_);T<1e-4&&(T=1),S<1e-4&&(S=T),y<1e-4&&(y=T),bf.initNonuniformCatmullRom(h.x,x.x,g.x,m.x,S,T,y),Pf.initNonuniformCatmullRom(h.y,x.y,g.y,m.y,S,T,y),Lf.initNonuniformCatmullRom(h.z,x.z,g.z,m.z,S,T,y)}else this.curveType==="catmullrom"&&(bf.initCatmullRom(h.x,x.x,g.x,m.x,this.tension),Pf.initCatmullRom(h.y,x.y,g.y,m.y,this.tension),Lf.initCatmullRom(h.z,x.z,g.z,m.z,this.tension));return r.set(bf.calc(d),Pf.calc(d),Lf.calc(d)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new J().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class id extends td{constructor(e=1,t=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],l=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,l,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new id(e.radius,e.detail)}}class xc extends fn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(r),d=Math.floor(o),h=f+1,m=d+1,x=e/f,g=t/d,_=[],S=[],T=[],y=[];for(let M=0;M<m;M++){const w=M*g-c;for(let b=0;b<h;b++){const P=b*x-l;S.push(P,-w,0),T.push(0,0,1),y.push(b/f),y.push(1-M/d)}}for(let M=0;M<d;M++)for(let w=0;w<f;w++){const b=w+h*M,P=w+h*(M+1),B=w+1+h*(M+1),I=w+1+h*M;_.push(b,P,I),_.push(P,B,I)}this.setIndex(_),this.setAttribute("position",new Tn(S,3)),this.setAttribute("normal",new Tn(T,3)),this.setAttribute("uv",new Tn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xc(e.width,e.height,e.widthSegments,e.heightSegments)}}class mc extends fn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const d=Math.min(c+f,Math.PI);let h=0;const m=[],x=new J,g=new J,_=[],S=[],T=[],y=[];for(let M=0;M<=r;M++){const w=[],b=M/r;let P=0;M===0&&c===0?P=.5/t:M===r&&d===Math.PI&&(P=-.5/t);for(let B=0;B<=t;B++){const I=B/t;x.x=-e*Math.cos(o+I*l)*Math.sin(c+b*f),x.y=e*Math.cos(c+b*f),x.z=e*Math.sin(o+I*l)*Math.sin(c+b*f),S.push(x.x,x.y,x.z),g.copy(x).normalize(),T.push(g.x,g.y,g.z),y.push(I+P,1-b),w.push(h++)}m.push(w)}for(let M=0;M<r;M++)for(let w=0;w<t;w++){const b=m[M][w+1],P=m[M][w],B=m[M+1][w],I=m[M+1][w+1];(M!==0||c>0)&&_.push(b,P,I),(M!==r-1||d<Math.PI)&&_.push(P,B,I)}this.setIndex(_),this.setAttribute("position",new Tn(S,3)),this.setAttribute("normal",new Tn(T,3)),this.setAttribute("uv",new Tn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function go(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if(v0(o))o.isRenderTargetTexture?(vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if(v0(o[0])){const l=[];for(let c=0,f=o.length;c<f;c++)l[c]=o[c].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function Xn(s){const e={};for(let t=0;t<s.length;t++){const r=go(s[t]);for(const o in r)e[o]=r[o]}return e}function v0(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Oy(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function $g(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const ky={clone:go,merge:Xn};var By=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends yo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=By,this.fragmentShader=zy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=go(e.uniforms),this.uniformsGroups=Oy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Hy extends Mi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vy extends yo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=O_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gy extends yo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xl=new J,jl=new Qi,Xi=new J;class ev extends jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xl,jl,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xl,jl,Xi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Xl,jl,Xi),Xi.x===1&&Xi.y===1&&Xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xl,jl,Xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Gr=new J,x0=new Pt,_0=new Pt;class $n extends ev{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_a*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ma*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _a*2*Math.atan(Math.tan(ma*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Gr.x,Gr.y).multiplyScalar(-e/Gr.z),Gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Gr.x,Gr.y).multiplyScalar(-e/Gr.z)}getViewSize(e,t){return this.getViewBounds(e,x0,_0),t.subVectors(_0,x0)}setViewOffset(e,t,r,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ma*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;l+=c.offsetX*o/d,t-=c.offsetY*r/h,o*=c.width/d,r*=c.height/h}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class tv extends ev{constructor(e=-1,t=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,c=l+h*this.view.width,f-=m*this.view.offsetY,d=f-m*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const io=-90,ro=1;class Wy extends jn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new $n(io,ro,e,t);o.layers=this.layers,this.add(o);const l=new $n(io,ro,e,t);l.layers=this.layers,this.add(l);const c=new $n(io,ro,e,t);c.layers=this.layers,this.add(c);const f=new $n(io,ro,e,t);f.layers=this.layers,this.add(f);const d=new $n(io,ro,e,t);d.layers=this.layers,this.add(d);const h=new $n(io,ro,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,c,f,d]=t;for(const h of t)this.remove(h);if(e===qi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===fc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,d,h,m]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(x,g,_),e.xr.enabled=S,r.texture.needsPMREMUpdate=!0}}class Xy extends $n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const cd=class cd{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};cd.prototype.isMatrix2=!0;let y0=cd;function M0(s,e,t,r){const o=jy(r);switch(t){case Og:return s*e;case Bg:return s*e/o.components*o.byteLength;case jh:return s*e/o.components*o.byteLength;case ys:return s*e*2/o.components*o.byteLength;case Kh:return s*e*2/o.components*o.byteLength;case kg:return s*e*3/o.components*o.byteLength;case yi:return s*e*4/o.components*o.byteLength;case qh:return s*e*4/o.components*o.byteLength;case $l:case ec:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case tc:case nc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sh:case ah:return Math.max(s,16)*Math.max(e,8)/4;case rh:case oh:return Math.max(s,8)*Math.max(e,8)/2;case lh:case ch:case fh:case hh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case uh:case ac:case dh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ph:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case gh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case vh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case xh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case _h:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case yh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Sh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Eh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case wh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Th:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ch:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Rh:case bh:case Ph:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Lh:case Ih:return Math.ceil(s/4)*Math.ceil(e/4)*8;case lc:case Uh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jy(s){switch(s){case _i:case Ug:return{byteLength:1,components:1};case va:case Dg:case vr:return{byteLength:2,components:1};case Wh:case Xh:return{byteLength:2,components:4};case Ji:case Gh:case ki:return{byteLength:4,components:1};case Ng:case Fg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vh}}));typeof window<"u"&&(window.__THREE__?vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function nv(){let s=null,e=!1,t=null,r=null;function o(l,c){t(l,c),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Ky(s){const e=new WeakMap;function t(f,d){const h=f.array,m=f.usage,x=h.byteLength,g=s.createBuffer();s.bindBuffer(d,g),s.bufferData(d,h,m),f.onUploadCallback();let _;if(h instanceof Float32Array)_=s.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)_=s.HALF_FLOAT;else if(h instanceof Uint16Array)f.isFloat16BufferAttribute?_=s.HALF_FLOAT:_=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=s.SHORT;else if(h instanceof Uint32Array)_=s.UNSIGNED_INT;else if(h instanceof Int32Array)_=s.INT;else if(h instanceof Int8Array)_=s.BYTE;else if(h instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:f.version,size:x}}function r(f,d,h){const m=d.array,x=d.updateRanges;if(s.bindBuffer(h,f),x.length===0)s.bufferSubData(h,0,m);else{x.sort((_,S)=>_.start-S.start);let g=0;for(let _=1;_<x.length;_++){const S=x[g],T=x[_];T.start<=S.start+S.count+1?S.count=Math.max(S.count,T.start+T.count-S.start):(++g,x[g]=T)}x.length=g+1;for(let _=0,S=x.length;_<S;_++){const T=x[_];s.bufferSubData(h,T.start*m.BYTES_PER_ELEMENT,m,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=e.get(f);d&&(s.deleteBuffer(d.buffer),e.delete(f))}function c(f,d){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const m=e.get(f);(!m||m.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const h=e.get(f);if(h===void 0)e.set(f,t(f,d));else if(h.version<f.version){if(h.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,f,d),h.version=f.version}}return{get:o,remove:l,update:c}}var qy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yy=`#ifdef USE_ALPHAHASH
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
#endif`,Qy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$y=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eM=`#ifdef USE_AOMAP
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
#endif`,tM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nM=`#ifdef USE_BATCHING
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
#endif`,iM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,aM=`#ifdef USE_IRIDESCENCE
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
#endif`,lM=`#ifdef USE_BUMPMAP
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
#endif`,cM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,pM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,mM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,gM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,vM=`#define PI 3.141592653589793
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
} // validated`,xM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_M=`vec3 transformedNormal = objectNormal;
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
#endif`,yM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,MM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,SM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,AM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,EM="gl_FragColor = linearToOutputTexel( gl_FragColor );",wM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,TM=`#ifdef USE_ENVMAP
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
#endif`,CM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,RM=`#ifdef USE_ENVMAP
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
#endif`,bM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PM=`#ifdef USE_ENVMAP
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
#endif`,LM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NM=`#ifdef USE_GRADIENTMAP
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
}`,FM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,zM=`#ifdef USE_ENVMAP
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
#endif`,HM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XM=`PhysicalMaterial material;
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
#endif`,jM=`uniform sampler2D dfgLUT;
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
}`,KM=`
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
#endif`,qM=`#if defined( RE_IndirectDiffuse )
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
#endif`,YM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QM=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ZM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$M=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rS=`#if defined( USE_POINTS_UV )
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
#endif`,sS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,aS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uS=`#ifdef USE_MORPHTARGETS
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
#endif`,fS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vS=`#ifdef USE_NORMALMAP
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
#endif`,xS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_S=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,MS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,SS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ES=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,LS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,US=`float getShadowMask() {
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
}`,DS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,NS=`#ifdef USE_SKINNING
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
#endif`,FS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,OS=`#ifdef USE_SKINNING
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
#endif`,kS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,BS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,VS=`#ifdef USE_TRANSMISSION
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
#endif`,GS=`#ifdef USE_TRANSMISSION
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
#endif`,WS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YS=`uniform sampler2D t2D;
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
}`,QS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,JS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$S=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e1=`#include <common>
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
}`,t1=`#if DEPTH_PACKING == 3200
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
}`,n1=`#define DISTANCE
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
}`,i1=`#define DISTANCE
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
}`,r1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o1=`uniform float scale;
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
}`,a1=`uniform vec3 diffuse;
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
}`,l1=`#include <common>
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
}`,c1=`uniform vec3 diffuse;
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
}`,u1=`#define LAMBERT
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
}`,f1=`#define LAMBERT
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
}`,h1=`#define MATCAP
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
}`,d1=`#define MATCAP
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
}`,p1=`#define NORMAL
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
}`,m1=`#define NORMAL
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
}`,g1=`#define PHONG
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
}`,v1=`#define PHONG
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
}`,x1=`#define STANDARD
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
}`,_1=`#define STANDARD
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
}`,y1=`#define TOON
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
}`,M1=`#define TOON
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
}`,S1=`uniform float size;
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
}`,A1=`uniform vec3 diffuse;
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
}`,E1=`#include <common>
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
}`,w1=`uniform vec3 color;
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
}`,T1=`uniform float rotation;
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
}`,C1=`uniform vec3 diffuse;
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
}`,Tt={alphahash_fragment:qy,alphahash_pars_fragment:Yy,alphamap_fragment:Qy,alphamap_pars_fragment:Zy,alphatest_fragment:Jy,alphatest_pars_fragment:$y,aomap_fragment:eM,aomap_pars_fragment:tM,batching_pars_vertex:nM,batching_vertex:iM,begin_vertex:rM,beginnormal_vertex:sM,bsdfs:oM,iridescence_fragment:aM,bumpmap_pars_fragment:lM,clipping_planes_fragment:cM,clipping_planes_pars_fragment:uM,clipping_planes_pars_vertex:fM,clipping_planes_vertex:hM,color_fragment:dM,color_pars_fragment:pM,color_pars_vertex:mM,color_vertex:gM,common:vM,cube_uv_reflection_fragment:xM,defaultnormal_vertex:_M,displacementmap_pars_vertex:yM,displacementmap_vertex:MM,emissivemap_fragment:SM,emissivemap_pars_fragment:AM,colorspace_fragment:EM,colorspace_pars_fragment:wM,envmap_fragment:TM,envmap_common_pars_fragment:CM,envmap_pars_fragment:RM,envmap_pars_vertex:bM,envmap_physical_pars_fragment:zM,envmap_vertex:PM,fog_vertex:LM,fog_pars_vertex:IM,fog_fragment:UM,fog_pars_fragment:DM,gradientmap_pars_fragment:NM,lightmap_pars_fragment:FM,lights_lambert_fragment:OM,lights_lambert_pars_fragment:kM,lights_pars_begin:BM,lights_toon_fragment:HM,lights_toon_pars_fragment:VM,lights_phong_fragment:GM,lights_phong_pars_fragment:WM,lights_physical_fragment:XM,lights_physical_pars_fragment:jM,lights_fragment_begin:KM,lights_fragment_maps:qM,lights_fragment_end:YM,lightprobes_pars_fragment:QM,logdepthbuf_fragment:ZM,logdepthbuf_pars_fragment:JM,logdepthbuf_pars_vertex:$M,logdepthbuf_vertex:eS,map_fragment:tS,map_pars_fragment:nS,map_particle_fragment:iS,map_particle_pars_fragment:rS,metalnessmap_fragment:sS,metalnessmap_pars_fragment:oS,morphinstance_vertex:aS,morphcolor_vertex:lS,morphnormal_vertex:cS,morphtarget_pars_vertex:uS,morphtarget_vertex:fS,normal_fragment_begin:hS,normal_fragment_maps:dS,normal_pars_fragment:pS,normal_pars_vertex:mS,normal_vertex:gS,normalmap_pars_fragment:vS,clearcoat_normal_fragment_begin:xS,clearcoat_normal_fragment_maps:_S,clearcoat_pars_fragment:yS,iridescence_pars_fragment:MS,opaque_fragment:SS,packing:AS,premultiplied_alpha_fragment:ES,project_vertex:wS,dithering_fragment:TS,dithering_pars_fragment:CS,roughnessmap_fragment:RS,roughnessmap_pars_fragment:bS,shadowmap_pars_fragment:PS,shadowmap_pars_vertex:LS,shadowmap_vertex:IS,shadowmask_pars_fragment:US,skinbase_vertex:DS,skinning_pars_vertex:NS,skinning_vertex:FS,skinnormal_vertex:OS,specularmap_fragment:kS,specularmap_pars_fragment:BS,tonemapping_fragment:zS,tonemapping_pars_fragment:HS,transmission_fragment:VS,transmission_pars_fragment:GS,uv_pars_fragment:WS,uv_pars_vertex:XS,uv_vertex:jS,worldpos_vertex:KS,background_vert:qS,background_frag:YS,backgroundCube_vert:QS,backgroundCube_frag:ZS,cube_vert:JS,cube_frag:$S,depth_vert:e1,depth_frag:t1,distance_vert:n1,distance_frag:i1,equirect_vert:r1,equirect_frag:s1,linedashed_vert:o1,linedashed_frag:a1,meshbasic_vert:l1,meshbasic_frag:c1,meshlambert_vert:u1,meshlambert_frag:f1,meshmatcap_vert:h1,meshmatcap_frag:d1,meshnormal_vert:p1,meshnormal_frag:m1,meshphong_vert:g1,meshphong_frag:v1,meshphysical_vert:x1,meshphysical_frag:_1,meshtoon_vert:y1,meshtoon_frag:M1,points_vert:S1,points_frag:A1,shadow_vert:E1,shadow_frag:w1,sprite_vert:T1,sprite_frag:C1},Ke={common:{diffuse:{value:new Nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new Nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new Nt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},Ki={basic:{uniforms:Xn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:Xn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Nt(0)},envMapIntensity:{value:1}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:Xn([Ke.common,Ke.specularmap,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,Ke.lights,{emissive:{value:new Nt(0)},specular:{value:new Nt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:Xn([Ke.common,Ke.envmap,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.roughnessmap,Ke.metalnessmap,Ke.fog,Ke.lights,{emissive:{value:new Nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:Xn([Ke.common,Ke.aomap,Ke.lightmap,Ke.emissivemap,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.gradientmap,Ke.fog,Ke.lights,{emissive:{value:new Nt(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:Xn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,Ke.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:Xn([Ke.points,Ke.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:Xn([Ke.common,Ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:Xn([Ke.common,Ke.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:Xn([Ke.common,Ke.bumpmap,Ke.normalmap,Ke.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:Xn([Ke.sprite,Ke.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distance:{uniforms:Xn([Ke.common,Ke.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distance_vert,fragmentShader:Tt.distance_frag},shadow:{uniforms:Xn([Ke.lights,Ke.fog,{color:{value:new Nt(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};Ki.physical={uniforms:Xn([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new Nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new Nt(0)},specularColor:{value:new Nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const Kl={r:0,b:0,g:0},R1=new tn,iv=new wt;iv.set(-1,0,0,0,1,0,0,0,1);function b1(s,e,t,r,o,l){const c=new Nt(0);let f=o===!0?0:1,d,h,m=null,x=0,g=null;function _(w){let b=w.isScene===!0?w.background:null;if(b&&b.isTexture){const P=w.backgroundBlurriness>0;b=e.get(b,P)}return b}function S(w){let b=!1;const P=_(w);P===null?y(c,f):P&&P.isColor&&(y(P,1),b=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?t.buffers.color.setClear(0,0,0,1,l):B==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function T(w,b){const P=_(b);P&&(P.isCubeTexture||P.mapping===vc)?(h===void 0&&(h=new On(new Ma(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:go(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,I,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=P,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(R1.makeRotationFromEuler(b.backgroundRotation)).transpose(),P.isCubeTexture&&P.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(iv),h.material.toneMapped=Lt.getTransfer(P.colorSpace)!==Gt,(m!==P||x!==P.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,m=P,x=P.version,g=s.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(d===void 0&&(d=new On(new xc(2,2),new Mi({name:"BackgroundMaterial",uniforms:go(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:jr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=P,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.toneMapped=Lt.getTransfer(P.colorSpace)!==Gt,P.matrixAutoUpdate===!0&&P.updateMatrix(),d.material.uniforms.uvTransform.value.copy(P.matrix),(m!==P||x!==P.version||g!==s.toneMapping)&&(d.material.needsUpdate=!0,m=P,x=P.version,g=s.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null))}function y(w,b){w.getRGB(Kl,$g(s)),t.buffers.color.setClear(Kl.r,Kl.g,Kl.b,b,l)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(w,b=1){c.set(w),f=b,y(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(w){f=w,y(c,f)},render:S,addToRenderList:T,dispose:M}}function P1(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,c=!1;function f(z,Y,le,ce,G){let ne=!1;const X=x(z,ce,le,Y);l!==X&&(l=X,h(l.object)),ne=_(z,ce,le,G),ne&&S(z,ce,le,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(ne||c)&&(c=!1,P(z,Y,le,ce),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function d(){return s.createVertexArray()}function h(z){return s.bindVertexArray(z)}function m(z){return s.deleteVertexArray(z)}function x(z,Y,le,ce){const G=ce.wireframe===!0;let ne=r[Y.id];ne===void 0&&(ne={},r[Y.id]=ne);const X=z.isInstancedMesh===!0?z.id:0;let O=ne[X];O===void 0&&(O={},ne[X]=O);let F=O[le.id];F===void 0&&(F={},O[le.id]=F);let $=F[G];return $===void 0&&($=g(d()),F[G]=$),$}function g(z){const Y=[],le=[],ce=[];for(let G=0;G<t;G++)Y[G]=0,le[G]=0,ce[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:le,attributeDivisors:ce,object:z,attributes:{},index:null}}function _(z,Y,le,ce){const G=l.attributes,ne=Y.attributes;let X=0;const O=le.getAttributes();for(const F in O)if(O[F].location>=0){const U=G[F];let V=ne[F];if(V===void 0&&(F==="instanceMatrix"&&z.instanceMatrix&&(V=z.instanceMatrix),F==="instanceColor"&&z.instanceColor&&(V=z.instanceColor)),U===void 0||U.attribute!==V||V&&U.data!==V.data)return!0;X++}return l.attributesNum!==X||l.index!==ce}function S(z,Y,le,ce){const G={},ne=Y.attributes;let X=0;const O=le.getAttributes();for(const F in O)if(O[F].location>=0){let U=ne[F];U===void 0&&(F==="instanceMatrix"&&z.instanceMatrix&&(U=z.instanceMatrix),F==="instanceColor"&&z.instanceColor&&(U=z.instanceColor));const V={};V.attribute=U,U&&U.data&&(V.data=U.data),G[F]=V,X++}l.attributes=G,l.attributesNum=X,l.index=ce}function T(){const z=l.newAttributes;for(let Y=0,le=z.length;Y<le;Y++)z[Y]=0}function y(z){M(z,0)}function M(z,Y){const le=l.newAttributes,ce=l.enabledAttributes,G=l.attributeDivisors;le[z]=1,ce[z]===0&&(s.enableVertexAttribArray(z),ce[z]=1),G[z]!==Y&&(s.vertexAttribDivisor(z,Y),G[z]=Y)}function w(){const z=l.newAttributes,Y=l.enabledAttributes;for(let le=0,ce=Y.length;le<ce;le++)Y[le]!==z[le]&&(s.disableVertexAttribArray(le),Y[le]=0)}function b(z,Y,le,ce,G,ne,X){X===!0?s.vertexAttribIPointer(z,Y,le,G,ne):s.vertexAttribPointer(z,Y,le,ce,G,ne)}function P(z,Y,le,ce){T();const G=ce.attributes,ne=le.getAttributes(),X=Y.defaultAttributeValues;for(const O in ne){const F=ne[O];if(F.location>=0){let $=G[O];if($===void 0&&(O==="instanceMatrix"&&z.instanceMatrix&&($=z.instanceMatrix),O==="instanceColor"&&z.instanceColor&&($=z.instanceColor)),$!==void 0){const U=$.normalized,V=$.itemSize,ye=e.get($);if(ye===void 0)continue;const Me=ye.buffer,xe=ye.type,q=ye.bytesPerElement,re=xe===s.INT||xe===s.UNSIGNED_INT||$.gpuType===Gh;if($.isInterleavedBufferAttribute){const W=$.data,de=W.stride,Te=$.offset;if(W.isInstancedInterleavedBuffer){for(let pe=0;pe<F.locationSize;pe++)M(F.location+pe,W.meshPerAttribute);z.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let pe=0;pe<F.locationSize;pe++)y(F.location+pe);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let pe=0;pe<F.locationSize;pe++)b(F.location+pe,V/F.locationSize,xe,U,de*q,(Te+V/F.locationSize*pe)*q,re)}else{if($.isInstancedBufferAttribute){for(let W=0;W<F.locationSize;W++)M(F.location+W,$.meshPerAttribute);z.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let W=0;W<F.locationSize;W++)y(F.location+W);s.bindBuffer(s.ARRAY_BUFFER,Me);for(let W=0;W<F.locationSize;W++)b(F.location+W,V/F.locationSize,xe,U,V*q,V/F.locationSize*W*q,re)}}else if(X!==void 0){const U=X[O];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(F.location,U);break;case 3:s.vertexAttrib3fv(F.location,U);break;case 4:s.vertexAttrib4fv(F.location,U);break;default:s.vertexAttrib1fv(F.location,U)}}}}w()}function B(){D();for(const z in r){const Y=r[z];for(const le in Y){const ce=Y[le];for(const G in ce){const ne=ce[G];for(const X in ne)m(ne[X].object),delete ne[X];delete ce[G]}}delete r[z]}}function I(z){if(r[z.id]===void 0)return;const Y=r[z.id];for(const le in Y){const ce=Y[le];for(const G in ce){const ne=ce[G];for(const X in ne)m(ne[X].object),delete ne[X];delete ce[G]}}delete r[z.id]}function k(z){for(const Y in r){const le=r[Y];for(const ce in le){const G=le[ce];if(G[z.id]===void 0)continue;const ne=G[z.id];for(const X in ne)m(ne[X].object),delete ne[X];delete G[z.id]}}}function A(z){for(const Y in r){const le=r[Y],ce=z.isInstancedMesh===!0?z.id:0,G=le[ce];if(G!==void 0){for(const ne in G){const X=G[ne];for(const O in X)m(X[O].object),delete X[O];delete G[ne]}delete le[ce],Object.keys(le).length===0&&delete r[Y]}}}function D(){j(),c=!0,l!==o&&(l=o,h(l.object))}function j(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:D,resetDefaultState:j,dispose:B,releaseStatesOfGeometry:I,releaseStatesOfObject:A,releaseStatesOfProgram:k,initAttributes:T,enableAttribute:y,disableUnusedAttributes:w}}function L1(s,e,t){let r;function o(d){r=d}function l(d,h){s.drawArrays(r,d,h),t.update(h,r,1)}function c(d,h,m){m!==0&&(s.drawArraysInstanced(r,d,h,m),t.update(h,r,m))}function f(d,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,h,0,m);let g=0;for(let _=0;_<m;_++)g+=h[_];t.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function I1(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(k){return!(k!==yi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(k){const A=k===vr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==_i&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==ki&&!A)}function d(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(vt("WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const x=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),M=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:f,precision:h,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:_,maxVertexTextures:S,maxTextureSize:T,maxCubemapSize:y,maxAttributes:M,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:P,maxSamples:B,samples:I}}function U1(s){const e=this;let t=null,r=0,o=!1,l=!1;const c=new ds,f=new wt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const _=x.length!==0||g||r!==0||o;return o=g,r=x.length,_},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,g){t=m(x,g,0)},this.setState=function(x,g,_){const S=x.clippingPlanes,T=x.clipIntersection,y=x.clipShadows,M=s.get(x);if(!o||S===null||S.length===0||l&&!y)l?m(null):h();else{const w=l?0:r,b=w*4;let P=M.clippingState||null;d.value=P,P=m(S,g,b,_);for(let B=0;B!==b;++B)P[B]=t[B];M.clippingState=P,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=w}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(x,g,_,S){const T=x!==null?x.length:0;let y=null;if(T!==0){if(y=d.value,S!==!0||y===null){const M=_+T*4,w=g.matrixWorldInverse;f.getNormalMatrix(w),(y===null||y.length<M)&&(y=new Float32Array(M));for(let b=0,P=_;b!==T;++b,P+=4)c.copy(x[b]).applyMatrix4(w,f),c.normal.toArray(y,P),y[P+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}const Xr=4,S0=[.125,.215,.35,.446,.526,.582],gs=20,D1=256,aa=new tv,A0=new Nt;let If=null,Uf=0,Df=0,Nf=!1;const N1=new J;class E0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:c=256,position:f=N1}=l;If=this._renderer.getRenderTarget(),Uf=this._renderer.getActiveCubeFace(),Df=this._renderer.getActiveMipmapLevel(),Nf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,f),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=C0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=T0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(If,Uf,Df),this._renderer.xr.enabled=Nf,e.scissorTest=!1,so(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_s||e.mapping===po?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),If=this._renderer.getRenderTarget(),Uf=this._renderer.getActiveCubeFace(),Df=this._renderer.getActiveMipmapLevel(),Nf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:vr,format:yi,colorSpace:cc,depthBuffer:!1},o=w0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=w0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=F1(l)),this._blurMaterial=k1(l,e,t),this._ggxMaterial=O1(l,e,t)}return o}_compileMaterial(e){const t=new On(new fn,e);this._renderer.compile(t,aa)}_sceneToCubeUV(e,t,r,o,l){const d=new $n(90,1,t,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,_=x.toneMapping;x.getClearColor(A0),x.toneMapping=Yi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new On(new Ma,new jg({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,y=T.material;let M=!1;const w=e.background;w?w.isColor&&(y.color.copy(w),e.background=null,M=!0):(y.color.copy(A0),M=!0);for(let b=0;b<6;b++){const P=b%3;P===0?(d.up.set(0,h[b],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+m[b],l.y,l.z)):P===1?(d.up.set(0,0,h[b]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+m[b],l.z)):(d.up.set(0,h[b],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+m[b]));const B=this._cubeSize;so(o,P*B,b>2?B:0,B,B),x.setRenderTarget(o),M&&x.render(T,d),x.render(e,d)}x.toneMapping=_,x.autoClear=g,e.background=w}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===_s||e.mapping===po;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=C0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=T0());const l=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=e;const d=this._cubeSize;so(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(c,aa)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,h=r/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),x=Math.sqrt(h*h-m*m),g=0+h*1.25,_=x*g,{_lodMax:S}=this,T=this._sizeLods[r],y=3*T*(r>S-Xr?r-S+Xr:0),M=4*(this._cubeSize-T);d.envMap.value=e.texture,d.roughness.value=_,d.mipInt.value=S-t,so(l,y,M,3*T,2*T),o.setRenderTarget(l),o.render(f,aa),d.envMap.value=l.texture,d.roughness.value=0,d.mipInt.value=S-r,so(e,y,M,3*T,2*T),o.setRenderTarget(e),o.render(f,aa)}_blur(e,t,r,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",l),this._halfBlur(c,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,c,f){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Dt("blur direction must be either latitudinal or longitudinal!");const m=3,x=this._lodMeshes[o];x.material=h;const g=h.uniforms,_=this._sizeLods[r]-1,S=isFinite(l)?Math.PI/(2*_):2*Math.PI/(2*gs-1),T=l/S,y=isFinite(l)?1+Math.floor(m*T):gs;y>gs&&vt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${gs}`);const M=[];let w=0;for(let k=0;k<gs;++k){const A=k/T,D=Math.exp(-A*A/2);M.push(D),k===0?w+=D:k<y&&(w+=2*D)}for(let k=0;k<M.length;k++)M[k]=M[k]/w;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=M,g.latitudinal.value=c==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:b}=this;g.dTheta.value=S,g.mipInt.value=b-r;const P=this._sizeLods[o],B=3*P*(o>b-Xr?o-b+Xr:0),I=4*(this._cubeSize-P);so(t,B,I,3*P,2*P),d.setRenderTarget(t),d.render(x,aa)}}function F1(s){const e=[],t=[],r=[];let o=s;const l=s-Xr+1+S0.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);e.push(f);let d=1/f;c>s-Xr?d=S0[c-s+Xr-1]:c===0&&(d=0),t.push(d);const h=1/(f-2),m=-h,x=1+h,g=[m,m,x,m,x,x,m,m,x,x,m,x],_=6,S=6,T=3,y=2,M=1,w=new Float32Array(T*S*_),b=new Float32Array(y*S*_),P=new Float32Array(M*S*_);for(let I=0;I<_;I++){const k=I%3*2/3-1,A=I>2?0:-1,D=[k,A,0,k+2/3,A,0,k+2/3,A+1,0,k,A,0,k+2/3,A+1,0,k,A+1,0];w.set(D,T*S*I),b.set(g,y*S*I);const j=[I,I,I,I,I,I];P.set(j,M*S*I)}const B=new fn;B.setAttribute("position",new kt(w,T)),B.setAttribute("uv",new kt(b,y)),B.setAttribute("faceIndex",new kt(P,M)),r.push(new On(B,null)),o>Xr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function w0(s,e,t){const r=new Zi(s,e,t);return r.texture.mapping=vc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function so(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function O1(s,e,t){return new Mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:D1,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_c(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function k1(s,e,t){const r=new Float32Array(gs),o=new J(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:_c(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function T0(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function C0(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function _c(){return`

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
	`}class rv extends Zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Zg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Ma(5,5,5),l=new Mi({name:"CubemapFromEquirect",uniforms:go(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ei,blending:mr});l.uniforms.tEquirect.value=t;const c=new On(o,l),f=t.minFilter;return t.minFilter===vs&&(t.minFilter=Sn),new Wy(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(l)}}function B1(s){let e=new WeakMap,t=new WeakMap,r=null;function o(g,_=!1){return g==null?null:_?c(g):l(g)}function l(g){if(g&&g.isTexture){const _=g.mapping;if(_===tf||_===nf)if(e.has(g)){const S=e.get(g).texture;return f(S,g.mapping)}else{const S=g.image;if(S&&S.height>0){const T=new rv(S.height);return T.fromEquirectangularTexture(s,g),e.set(g,T),g.addEventListener("dispose",h),f(T.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const _=g.mapping,S=_===tf||_===nf,T=_===_s||_===po;if(S||T){let y=t.get(g);const M=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==M)return r===null&&(r=new E0(s)),y=S?r.fromEquirectangular(g,y):r.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),y.texture;if(y!==void 0)return y.texture;{const w=g.image;return S&&w&&w.height>0||T&&w&&d(w)?(r===null&&(r=new E0(s)),y=S?r.fromEquirectangular(g):r.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),g.addEventListener("dispose",m),y.texture):null}}}return g}function f(g,_){return _===tf?g.mapping=_s:_===nf&&(g.mapping=po),g}function d(g){let _=0;const S=6;for(let T=0;T<S;T++)g[T]!==void 0&&_++;return _===S}function h(g){const _=g.target;_.removeEventListener("dispose",h);const S=e.get(_);S!==void 0&&(e.delete(_),S.dispose())}function m(g){const _=g.target;_.removeEventListener("dispose",m);const S=t.get(_);S!==void 0&&(t.delete(_),S.dispose())}function x(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:x}}function z1(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Dh("WebGLRenderer: "+r+" extension not supported."),o}}}function H1(s,e,t,r){const o={},l=new WeakMap;function c(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const S in g.attributes)e.remove(g.attributes[S]);g.removeEventListener("dispose",c),delete o[g.id];const _=l.get(g);_&&(e.remove(_),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(x,g){return o[g.id]===!0||(g.addEventListener("dispose",c),o[g.id]=!0,t.memory.geometries++),g}function d(x){const g=x.attributes;for(const _ in g)e.update(g[_],s.ARRAY_BUFFER)}function h(x){const g=[],_=x.index,S=x.attributes.position;let T=0;if(S===void 0)return;if(_!==null){const w=_.array;T=_.version;for(let b=0,P=w.length;b<P;b+=3){const B=w[b+0],I=w[b+1],k=w[b+2];g.push(B,I,I,k,k,B)}}else{const w=S.array;T=S.version;for(let b=0,P=w.length/3-1;b<P;b+=3){const B=b+0,I=b+1,k=b+2;g.push(B,I,I,k,k,B)}}const y=new(S.count>=65535?Xg:Wg)(g,1);y.version=T;const M=l.get(x);M&&e.remove(M),l.set(x,y)}function m(x){const g=l.get(x);if(g){const _=x.index;_!==null&&g.version<_.version&&h(x)}else h(x);return l.get(x)}return{get:f,update:d,getWireframeAttribute:m}}function V1(s,e,t){let r;function o(x){r=x}let l,c;function f(x){l=x.type,c=x.bytesPerElement}function d(x,g){s.drawElements(r,g,l,x*c),t.update(g,r,1)}function h(x,g,_){_!==0&&(s.drawElementsInstanced(r,g,l,x*c,_),t.update(g,r,_))}function m(x,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,x,0,_);let T=0;for(let y=0;y<_;y++)T+=g[y];t.update(T,r,1)}this.setMode=o,this.setIndex=f,this.render=d,this.renderInstances=h,this.renderMultiDraw=m}function G1(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Dt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function W1(s,e,t){const r=new WeakMap,o=new on;function l(c,f,d){const h=c.morphTargetInfluences,m=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=m!==void 0?m.length:0;let g=r.get(f);if(g===void 0||g.count!==x){let j=function(){A.dispose(),r.delete(f),f.removeEventListener("dispose",j)};var _=j;g!==void 0&&g.texture.dispose();const S=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,M=f.morphAttributes.position||[],w=f.morphAttributes.normal||[],b=f.morphAttributes.color||[];let P=0;S===!0&&(P=1),T===!0&&(P=2),y===!0&&(P=3);let B=f.attributes.position.count*P,I=1;B>e.maxTextureSize&&(I=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const k=new Float32Array(B*I*4*x),A=new Hg(k,B,I,x);A.type=ki,A.needsUpdate=!0;const D=P*4;for(let z=0;z<x;z++){const Y=M[z],le=w[z],ce=b[z],G=B*I*4*z;for(let ne=0;ne<Y.count;ne++){const X=ne*D;S===!0&&(o.fromBufferAttribute(Y,ne),k[G+X+0]=o.x,k[G+X+1]=o.y,k[G+X+2]=o.z,k[G+X+3]=0),T===!0&&(o.fromBufferAttribute(le,ne),k[G+X+4]=o.x,k[G+X+5]=o.y,k[G+X+6]=o.z,k[G+X+7]=0),y===!0&&(o.fromBufferAttribute(ce,ne),k[G+X+8]=o.x,k[G+X+9]=o.y,k[G+X+10]=o.z,k[G+X+11]=ce.itemSize===4?o.w:1)}}g={count:x,texture:A,size:new Pt(B,I)},r.set(f,g),f.addEventListener("dispose",j)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let S=0;for(let y=0;y<h.length;y++)S+=h[y];const T=f.morphTargetsRelative?1:1-S;d.getUniforms().setValue(s,"morphTargetBaseInfluence",T),d.getUniforms().setValue(s,"morphTargetInfluences",h)}d.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function X1(s,e,t,r,o){let l=new WeakMap;function c(h){const m=o.render.frame,x=h.geometry,g=e.get(h,x);if(l.get(g)!==m&&(e.update(g),l.set(g,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),l.get(h)!==m&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),l.set(h,m))),h.isSkinnedMesh){const _=h.skeleton;l.get(_)!==m&&(_.update(),l.set(_,m))}return g}function f(){l=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),r.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:c,dispose:f}}const j1={[wg]:"LINEAR_TONE_MAPPING",[Tg]:"REINHARD_TONE_MAPPING",[Cg]:"CINEON_TONE_MAPPING",[Rg]:"ACES_FILMIC_TONE_MAPPING",[Pg]:"AGX_TONE_MAPPING",[Lg]:"NEUTRAL_TONE_MAPPING",[bg]:"CUSTOM_TONE_MAPPING"};function K1(s,e,t,r,o){const l=new Zi(e,t,{type:s,depthBuffer:r,stencilBuffer:o,depthTexture:r?new mo(e,t):void 0}),c=new Zi(e,t,{type:vr,depthBuffer:!1,stencilBuffer:!1}),f=new fn;f.setAttribute("position",new Tn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Tn([0,2,0,0,2,0],2));const d=new Hy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new On(f,d),m=new tv(-1,1,1,-1,0,1);let x=null,g=null,_=!1,S,T=null,y=[],M=!1;this.setSize=function(w,b){l.setSize(w,b),c.setSize(w,b);for(let P=0;P<y.length;P++){const B=y[P];B.setSize&&B.setSize(w,b)}},this.setEffects=function(w){y=w,M=y.length>0&&y[0].isRenderPass===!0;const b=l.width,P=l.height;for(let B=0;B<y.length;B++){const I=y[B];I.setSize&&I.setSize(b,P)}},this.begin=function(w,b){if(_||w.toneMapping===Yi&&y.length===0)return!1;if(T=b,b!==null){const P=b.width,B=b.height;(l.width!==P||l.height!==B)&&this.setSize(P,B)}return M===!1&&w.setRenderTarget(l),S=w.toneMapping,w.toneMapping=Yi,!0},this.hasRenderPass=function(){return M},this.end=function(w,b){w.toneMapping=S,_=!0;let P=l,B=c;for(let I=0;I<y.length;I++){const k=y[I];if(k.enabled!==!1&&(k.render(w,B,P,b),k.needsSwap!==!1)){const A=P;P=B,B=A}}if(x!==w.outputColorSpace||g!==w.toneMapping){x=w.outputColorSpace,g=w.toneMapping,d.defines={},Lt.getTransfer(x)===Gt&&(d.defines.SRGB_TRANSFER="");const I=j1[g];I&&(d.defines[I]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=P.texture,w.setRenderTarget(T),w.render(h,m),T=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),c.dispose(),f.dispose(),d.dispose()}}const sv=new Fn,kh=new mo(1,1),ov=new Hg,av=new gy,lv=new Zg,R0=[],b0=[],P0=new Float32Array(16),L0=new Float32Array(9),I0=new Float32Array(4);function Mo(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=R0[o];if(l===void 0&&(l=new Float32Array(o),R0[o]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function mn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function gn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function yc(s,e){let t=b0[e];t===void 0&&(t=new Int32Array(e),b0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function q1(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Y1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;s.uniform2fv(this.addr,e),gn(t,e)}}function Q1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;s.uniform3fv(this.addr,e),gn(t,e)}}function Z1(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;s.uniform4fv(this.addr,e),gn(t,e)}}function J1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(mn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,r))return;I0.set(r),s.uniformMatrix2fv(this.addr,!1,I0),gn(t,r)}}function $1(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(mn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,r))return;L0.set(r),s.uniformMatrix3fv(this.addr,!1,L0),gn(t,r)}}function eA(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(mn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,r))return;P0.set(r),s.uniformMatrix4fv(this.addr,!1,P0),gn(t,r)}}function tA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function nA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;s.uniform2iv(this.addr,e),gn(t,e)}}function iA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;s.uniform3iv(this.addr,e),gn(t,e)}}function rA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;s.uniform4iv(this.addr,e),gn(t,e)}}function sA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function oA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;s.uniform2uiv(this.addr,e),gn(t,e)}}function aA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;s.uniform3uiv(this.addr,e),gn(t,e)}}function lA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;s.uniform4uiv(this.addr,e),gn(t,e)}}function cA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(kh.compareFunction=t.isReversedDepthBuffer()?Qh:Yh,l=kh):l=sv,t.setTexture2D(e||l,o)}function uA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||av,o)}function fA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||lv,o)}function hA(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||ov,o)}function dA(s){switch(s){case 5126:return q1;case 35664:return Y1;case 35665:return Q1;case 35666:return Z1;case 35674:return J1;case 35675:return $1;case 35676:return eA;case 5124:case 35670:return tA;case 35667:case 35671:return nA;case 35668:case 35672:return iA;case 35669:case 35673:return rA;case 5125:return sA;case 36294:return oA;case 36295:return aA;case 36296:return lA;case 35678:case 36198:case 36298:case 36306:case 35682:return cA;case 35679:case 36299:case 36307:return uA;case 35680:case 36300:case 36308:case 36293:return fA;case 36289:case 36303:case 36311:case 36292:return hA}}function pA(s,e){s.uniform1fv(this.addr,e)}function mA(s,e){const t=Mo(e,this.size,2);s.uniform2fv(this.addr,t)}function gA(s,e){const t=Mo(e,this.size,3);s.uniform3fv(this.addr,t)}function vA(s,e){const t=Mo(e,this.size,4);s.uniform4fv(this.addr,t)}function xA(s,e){const t=Mo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function _A(s,e){const t=Mo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function yA(s,e){const t=Mo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function MA(s,e){s.uniform1iv(this.addr,e)}function SA(s,e){s.uniform2iv(this.addr,e)}function AA(s,e){s.uniform3iv(this.addr,e)}function EA(s,e){s.uniform4iv(this.addr,e)}function wA(s,e){s.uniform1uiv(this.addr,e)}function TA(s,e){s.uniform2uiv(this.addr,e)}function CA(s,e){s.uniform3uiv(this.addr,e)}function RA(s,e){s.uniform4uiv(this.addr,e)}function bA(s,e,t){const r=this.cache,o=e.length,l=yc(t,o);mn(r,l)||(s.uniform1iv(this.addr,l),gn(r,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=kh:c=sv;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||c,l[f])}function PA(s,e,t){const r=this.cache,o=e.length,l=yc(t,o);mn(r,l)||(s.uniform1iv(this.addr,l),gn(r,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||av,l[c])}function LA(s,e,t){const r=this.cache,o=e.length,l=yc(t,o);mn(r,l)||(s.uniform1iv(this.addr,l),gn(r,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||lv,l[c])}function IA(s,e,t){const r=this.cache,o=e.length,l=yc(t,o);mn(r,l)||(s.uniform1iv(this.addr,l),gn(r,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||ov,l[c])}function UA(s){switch(s){case 5126:return pA;case 35664:return mA;case 35665:return gA;case 35666:return vA;case 35674:return xA;case 35675:return _A;case 35676:return yA;case 5124:case 35670:return MA;case 35667:case 35671:return SA;case 35668:case 35672:return AA;case 35669:case 35673:return EA;case 5125:return wA;case 36294:return TA;case 36295:return CA;case 36296:return RA;case 35678:case 36198:case 36298:case 36306:case 35682:return bA;case 35679:case 36299:case 36307:return PA;case 35680:case 36300:case 36308:case 36293:return LA;case 36289:case 36303:case 36311:case 36292:return IA}}class DA{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=dA(t.type)}}class NA{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=UA(t.type)}}class FA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Ff=/(\w+)(\])?(\[|\.)?/g;function U0(s,e){s.seq.push(e),s.map[e.id]=e}function OA(s,e,t){const r=s.name,o=r.length;for(Ff.lastIndex=0;;){const l=Ff.exec(r),c=Ff.lastIndex;let f=l[1];const d=l[2]==="]",h=l[3];if(d&&(f=f|0),h===void 0||h==="["&&c+2===o){U0(t,h===void 0?new DA(f,s,e):new NA(f,s,e));break}else{let x=t.map[f];x===void 0&&(x=new FA(f),U0(t,x)),t=x}}}class ic{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const f=e.getActiveUniform(t,c),d=e.getUniformLocation(t,f.name);OA(f,d,this)}const o=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],d=r[f.id];d.needsUpdate!==!1&&f.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function D0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const kA=37297;let BA=0;function zA(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const N0=new wt;function HA(s){Lt._getMatrix(N0,Lt.workingColorSpace,s);const e=`mat3( ${N0.elements.map(t=>t.toFixed(4))} )`;switch(Lt.getTransfer(s)){case uc:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return vt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function F0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+zA(s.getShaderSource(e),f)}else return l}function VA(s,e){const t=HA(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const GA={[wg]:"Linear",[Tg]:"Reinhard",[Cg]:"Cineon",[Rg]:"ACESFilmic",[Pg]:"AgX",[Lg]:"Neutral",[bg]:"Custom"};function WA(s,e){const t=GA[e];return t===void 0?(vt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ql=new J;function XA(){Lt.getLuminanceCoefficients(ql);const s=ql.x.toFixed(4),e=ql.y.toFixed(4),t=ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function KA(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function qA(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function da(s){return s!==""}function O0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function k0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const YA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bh(s){return s.replace(YA,ZA)}const QA=new Map;function ZA(s,e){let t=Tt[e];if(t===void 0){const r=QA.get(e);if(r!==void 0)t=Tt[r],vt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Bh(t)}const JA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function B0(s){return s.replace(JA,$A)}function $A(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function z0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const eE={[Jl]:"SHADOWMAP_TYPE_PCF",[ha]:"SHADOWMAP_TYPE_VSM"};function tE(s){return eE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const nE={[_s]:"ENVMAP_TYPE_CUBE",[po]:"ENVMAP_TYPE_CUBE",[vc]:"ENVMAP_TYPE_CUBE_UV"};function iE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":nE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const rE={[po]:"ENVMAP_MODE_REFRACTION"};function sE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":rE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const oE={[Eg]:"ENVMAP_BLENDING_MULTIPLY",[D_]:"ENVMAP_BLENDING_MIX",[N_]:"ENVMAP_BLENDING_ADD"};function aE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":oE[s.combine]||"ENVMAP_BLENDING_NONE"}function lE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function cE(s,e,t,r){const o=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const d=tE(t),h=iE(t),m=sE(t),x=aE(t),g=lE(t),_=jA(t),S=KA(l),T=o.createProgram();let y,M,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(da).join(`
`),y.length>0&&(y+=`
`),M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(da).join(`
`),M.length>0&&(M+=`
`)):(y=[z0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),M=[z0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?Tt.tonemapping_pars_fragment:"",t.toneMapping!==Yi?WA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,VA("linearToOutputTexel",t.outputColorSpace),XA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(da).join(`
`)),c=Bh(c),c=O0(c,t),c=k0(c,t),f=Bh(f),f=O0(f,t),f=k0(f,t),c=B0(c),f=B0(f),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,M=["#define varying in",t.glslVersion===Xm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const b=w+y+c,P=w+M+f,B=D0(o,o.VERTEX_SHADER,b),I=D0(o,o.FRAGMENT_SHADER,P);o.attachShader(T,B),o.attachShader(T,I),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function k(z){if(s.debug.checkShaderErrors){const Y=o.getProgramInfoLog(T)||"",le=o.getShaderInfoLog(B)||"",ce=o.getShaderInfoLog(I)||"",G=Y.trim(),ne=le.trim(),X=ce.trim();let O=!0,F=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,T,B,I);else{const $=F0(o,B,"vertex"),U=F0(o,I,"fragment");Dt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+G+`
`+$+`
`+U)}else G!==""?vt("WebGLProgram: Program Info Log:",G):(ne===""||X==="")&&(F=!1);F&&(z.diagnostics={runnable:O,programLog:G,vertexShader:{log:ne,prefix:y},fragmentShader:{log:X,prefix:M}})}o.deleteShader(B),o.deleteShader(I),A=new ic(o,T),D=qA(o,T)}let A;this.getUniforms=function(){return A===void 0&&k(this),A};let D;this.getAttributes=function(){return D===void 0&&k(this),D};let j=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return j===!1&&(j=o.getProgramParameter(T,kA)),j},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=BA++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=B,this.fragmentShader=I,this}let uE=0;class fE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new hE(e),t.set(e,r)),r}}class hE{constructor(e){this.id=uE++,this.code=e,this.usedTimes=0}}function dE(s){return s===ys||s===ac||s===lc}function pE(s,e,t,r,o,l){const c=new Vg,f=new fE,d=new Set,h=[],m=new Map,x=r.logarithmicDepthBuffer;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(A){return d.add(A),A===0?"uv":`uv${A}`}function T(A,D,j,z,Y,le){const ce=z.fog,G=Y.geometry,ne=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,X=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,O=e.get(A.envMap||ne,X),F=O&&O.mapping===vc?O.image.height:null,$=_[A.type];A.precision!==null&&(g=r.getMaxPrecision(A.precision),g!==A.precision&&vt("WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));const U=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,V=U!==void 0?U.length:0;let ye=0;G.morphAttributes.position!==void 0&&(ye=1),G.morphAttributes.normal!==void 0&&(ye=2),G.morphAttributes.color!==void 0&&(ye=3);let Me,xe,q,re;if($){const je=Ki[$];Me=je.vertexShader,xe=je.fragmentShader}else Me=A.vertexShader,xe=A.fragmentShader,f.update(A),q=f.getVertexShaderID(A),re=f.getFragmentShaderID(A);const W=s.getRenderTarget(),de=s.state.buffers.depth.getReversed(),Te=Y.isInstancedMesh===!0,pe=Y.isBatchedMesh===!0,Fe=!!A.map,Ae=!!A.matcap,Ve=!!O,tt=!!A.aoMap,nt=!!A.lightMap,it=!!A.bumpMap,ct=!!A.normalMap,yt=!!A.displacementMap,N=!!A.emissiveMap,xt=!!A.metalnessMap,ot=!!A.roughnessMap,gt=A.anisotropy>0,Ee=A.clearcoat>0,lt=A.dispersion>0,L=A.iridescence>0,E=A.sheen>0,ie=A.transmission>0,_e=gt&&!!A.anisotropyMap,Se=Ee&&!!A.clearcoatMap,Re=Ee&&!!A.clearcoatNormalMap,Pe=Ee&&!!A.clearcoatRoughnessMap,me=L&&!!A.iridescenceMap,ve=L&&!!A.iridescenceThicknessMap,ze=E&&!!A.sheenColorMap,Xe=E&&!!A.sheenRoughnessMap,Ne=!!A.specularMap,Ue=!!A.specularColorMap,ut=!!A.specularIntensityMap,ft=ie&&!!A.transmissionMap,Mt=ie&&!!A.thicknessMap,Q=!!A.gradientMap,De=!!A.alphaMap,he=A.alphaTest>0,We=!!A.alphaHash,Oe=!!A.extensions;let we=Yi;A.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(we=s.toneMapping);const qe={shaderID:$,shaderType:A.type,shaderName:A.name,vertexShader:Me,fragmentShader:xe,defines:A.defines,customVertexShaderID:q,customFragmentShaderID:re,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,batching:pe,batchingColor:pe&&Y._colorsTexture!==null,instancing:Te,instancingColor:Te&&Y.instanceColor!==null,instancingMorph:Te&&Y.morphTexture!==null,outputColorSpace:W===null?s.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Lt.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:Fe,matcap:Ae,envMap:Ve,envMapMode:Ve&&O.mapping,envMapCubeUVHeight:F,aoMap:tt,lightMap:nt,bumpMap:it,normalMap:ct,displacementMap:yt,emissiveMap:N,normalMapObjectSpace:ct&&A.normalMapType===k_,normalMapTangentSpace:ct&&A.normalMapType===Hm,packedNormalMap:ct&&A.normalMapType===Hm&&dE(A.normalMap.format),metalnessMap:xt,roughnessMap:ot,anisotropy:gt,anisotropyMap:_e,clearcoat:Ee,clearcoatMap:Se,clearcoatNormalMap:Re,clearcoatRoughnessMap:Pe,dispersion:lt,iridescence:L,iridescenceMap:me,iridescenceThicknessMap:ve,sheen:E,sheenColorMap:ze,sheenRoughnessMap:Xe,specularMap:Ne,specularColorMap:Ue,specularIntensityMap:ut,transmission:ie,transmissionMap:ft,thicknessMap:Mt,gradientMap:Q,opaque:A.transparent===!1&&A.blending===uo&&A.alphaToCoverage===!1,alphaMap:De,alphaTest:he,alphaHash:We,combine:A.combine,mapUv:Fe&&S(A.map.channel),aoMapUv:tt&&S(A.aoMap.channel),lightMapUv:nt&&S(A.lightMap.channel),bumpMapUv:it&&S(A.bumpMap.channel),normalMapUv:ct&&S(A.normalMap.channel),displacementMapUv:yt&&S(A.displacementMap.channel),emissiveMapUv:N&&S(A.emissiveMap.channel),metalnessMapUv:xt&&S(A.metalnessMap.channel),roughnessMapUv:ot&&S(A.roughnessMap.channel),anisotropyMapUv:_e&&S(A.anisotropyMap.channel),clearcoatMapUv:Se&&S(A.clearcoatMap.channel),clearcoatNormalMapUv:Re&&S(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&S(A.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&S(A.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&S(A.iridescenceThicknessMap.channel),sheenColorMapUv:ze&&S(A.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&S(A.sheenRoughnessMap.channel),specularMapUv:Ne&&S(A.specularMap.channel),specularColorMapUv:Ue&&S(A.specularColorMap.channel),specularIntensityMapUv:ut&&S(A.specularIntensityMap.channel),transmissionMapUv:ft&&S(A.transmissionMap.channel),thicknessMapUv:Mt&&S(A.thicknessMap.channel),alphaMapUv:De&&S(A.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(ct||gt),vertexNormals:!!G.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!G.attributes.uv&&(Fe||De),fog:!!ce,useFog:A.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||G.attributes.normal===void 0&&ct===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:de,skinning:Y.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:ye,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:le.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:A.dithering,shadowMapEnabled:s.shadowMap.enabled&&j.length>0,shadowMapType:s.shadowMap.type,toneMapping:we,decodeVideoTexture:Fe&&A.map.isVideoTexture===!0&&Lt.getTransfer(A.map.colorSpace)===Gt,decodeVideoTextureEmissive:N&&A.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(A.emissiveMap.colorSpace)===Gt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Fi,flipSided:A.side===ei,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:Oe&&A.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&A.extensions.multiDraw===!0||pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return qe.vertexUv1s=d.has(1),qe.vertexUv2s=d.has(2),qe.vertexUv3s=d.has(3),d.clear(),qe}function y(A){const D=[];if(A.shaderID?D.push(A.shaderID):(D.push(A.customVertexShaderID),D.push(A.customFragmentShaderID)),A.defines!==void 0)for(const j in A.defines)D.push(j),D.push(A.defines[j]);return A.isRawShaderMaterial===!1&&(M(D,A),w(D,A),D.push(s.outputColorSpace)),D.push(A.customProgramCacheKey),D.join()}function M(A,D){A.push(D.precision),A.push(D.outputColorSpace),A.push(D.envMapMode),A.push(D.envMapCubeUVHeight),A.push(D.mapUv),A.push(D.alphaMapUv),A.push(D.lightMapUv),A.push(D.aoMapUv),A.push(D.bumpMapUv),A.push(D.normalMapUv),A.push(D.displacementMapUv),A.push(D.emissiveMapUv),A.push(D.metalnessMapUv),A.push(D.roughnessMapUv),A.push(D.anisotropyMapUv),A.push(D.clearcoatMapUv),A.push(D.clearcoatNormalMapUv),A.push(D.clearcoatRoughnessMapUv),A.push(D.iridescenceMapUv),A.push(D.iridescenceThicknessMapUv),A.push(D.sheenColorMapUv),A.push(D.sheenRoughnessMapUv),A.push(D.specularMapUv),A.push(D.specularColorMapUv),A.push(D.specularIntensityMapUv),A.push(D.transmissionMapUv),A.push(D.thicknessMapUv),A.push(D.combine),A.push(D.fogExp2),A.push(D.sizeAttenuation),A.push(D.morphTargetsCount),A.push(D.morphAttributeCount),A.push(D.numDirLights),A.push(D.numPointLights),A.push(D.numSpotLights),A.push(D.numSpotLightMaps),A.push(D.numHemiLights),A.push(D.numRectAreaLights),A.push(D.numDirLightShadows),A.push(D.numPointLightShadows),A.push(D.numSpotLightShadows),A.push(D.numSpotLightShadowsWithMaps),A.push(D.numLightProbes),A.push(D.shadowMapType),A.push(D.toneMapping),A.push(D.numClippingPlanes),A.push(D.numClipIntersection),A.push(D.depthPacking)}function w(A,D){c.disableAll(),D.instancing&&c.enable(0),D.instancingColor&&c.enable(1),D.instancingMorph&&c.enable(2),D.matcap&&c.enable(3),D.envMap&&c.enable(4),D.normalMapObjectSpace&&c.enable(5),D.normalMapTangentSpace&&c.enable(6),D.clearcoat&&c.enable(7),D.iridescence&&c.enable(8),D.alphaTest&&c.enable(9),D.vertexColors&&c.enable(10),D.vertexAlphas&&c.enable(11),D.vertexUv1s&&c.enable(12),D.vertexUv2s&&c.enable(13),D.vertexUv3s&&c.enable(14),D.vertexTangents&&c.enable(15),D.anisotropy&&c.enable(16),D.alphaHash&&c.enable(17),D.batching&&c.enable(18),D.dispersion&&c.enable(19),D.batchingColor&&c.enable(20),D.gradientMap&&c.enable(21),D.packedNormalMap&&c.enable(22),D.vertexNormals&&c.enable(23),A.push(c.mask),c.disableAll(),D.fog&&c.enable(0),D.useFog&&c.enable(1),D.flatShading&&c.enable(2),D.logarithmicDepthBuffer&&c.enable(3),D.reversedDepthBuffer&&c.enable(4),D.skinning&&c.enable(5),D.morphTargets&&c.enable(6),D.morphNormals&&c.enable(7),D.morphColors&&c.enable(8),D.premultipliedAlpha&&c.enable(9),D.shadowMapEnabled&&c.enable(10),D.doubleSided&&c.enable(11),D.flipSided&&c.enable(12),D.useDepthPacking&&c.enable(13),D.dithering&&c.enable(14),D.transmission&&c.enable(15),D.sheen&&c.enable(16),D.opaque&&c.enable(17),D.pointsUvs&&c.enable(18),D.decodeVideoTexture&&c.enable(19),D.decodeVideoTextureEmissive&&c.enable(20),D.alphaToCoverage&&c.enable(21),D.numLightProbeGrids>0&&c.enable(22),A.push(c.mask)}function b(A){const D=_[A.type];let j;if(D){const z=Ki[D];j=ky.clone(z.uniforms)}else j=A.uniforms;return j}function P(A,D){let j=m.get(D);return j!==void 0?++j.usedTimes:(j=new cE(s,D,A,o),h.push(j),m.set(D,j)),j}function B(A){if(--A.usedTimes===0){const D=h.indexOf(A);h[D]=h[h.length-1],h.pop(),m.delete(A.cacheKey),A.destroy()}}function I(A){f.remove(A)}function k(){f.dispose()}return{getParameters:T,getProgramCacheKey:y,getUniforms:b,acquireProgram:P,releaseProgram:B,releaseShaderCache:I,programs:h,dispose:k}}function mE(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function o(c,f,d){s.get(c)[f]=d}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function gE(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function H0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function V0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function c(g){let _=0;return g.isInstancedMesh&&(_+=2),g.isSkinnedMesh&&(_+=1),_}function f(g,_,S,T,y,M){let w=s[e];return w===void 0?(w={id:g.id,object:g,geometry:_,material:S,materialVariant:c(g),groupOrder:T,renderOrder:g.renderOrder,z:y,group:M},s[e]=w):(w.id=g.id,w.object=g,w.geometry=_,w.material=S,w.materialVariant=c(g),w.groupOrder=T,w.renderOrder=g.renderOrder,w.z=y,w.group=M),e++,w}function d(g,_,S,T,y,M){const w=f(g,_,S,T,y,M);S.transmission>0?r.push(w):S.transparent===!0?o.push(w):t.push(w)}function h(g,_,S,T,y,M){const w=f(g,_,S,T,y,M);S.transmission>0?r.unshift(w):S.transparent===!0?o.unshift(w):t.unshift(w)}function m(g,_){t.length>1&&t.sort(g||gE),r.length>1&&r.sort(_||H0),o.length>1&&o.sort(_||H0)}function x(){for(let g=e,_=s.length;g<_;g++){const S=s[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:d,unshift:h,finish:x,sort:m}}function vE(){let s=new WeakMap;function e(r,o){const l=s.get(r);let c;return l===void 0?(c=new V0,s.set(r,[c])):o>=l.length?(c=new V0,l.push(c)):c=l[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function xE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new Nt};break;case"SpotLight":t={position:new J,direction:new J,color:new Nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new Nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new Nt,groundColor:new Nt};break;case"RectAreaLight":t={color:new Nt,position:new J,halfWidth:new J,halfHeight:new J};break}return s[e.id]=t,t}}}function _E(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let yE=0;function ME(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function SE(s){const e=new xE,t=_E(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new J);const o=new J,l=new tn,c=new tn;function f(h){let m=0,x=0,g=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let _=0,S=0,T=0,y=0,M=0,w=0,b=0,P=0,B=0,I=0,k=0;h.sort(ME);for(let D=0,j=h.length;D<j;D++){const z=h[D],Y=z.color,le=z.intensity,ce=z.distance;let G=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===ys?G=z.shadow.map.texture:G=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)m+=Y.r*le,x+=Y.g*le,g+=Y.b*le;else if(z.isLightProbe){for(let ne=0;ne<9;ne++)r.probe[ne].addScaledVector(z.sh.coefficients[ne],le);k++}else if(z.isDirectionalLight){const ne=e.get(z);if(ne.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const X=z.shadow,O=t.get(z);O.shadowIntensity=X.intensity,O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,r.directionalShadow[_]=O,r.directionalShadowMap[_]=G,r.directionalShadowMatrix[_]=z.shadow.matrix,w++}r.directional[_]=ne,_++}else if(z.isSpotLight){const ne=e.get(z);ne.position.setFromMatrixPosition(z.matrixWorld),ne.color.copy(Y).multiplyScalar(le),ne.distance=ce,ne.coneCos=Math.cos(z.angle),ne.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ne.decay=z.decay,r.spot[T]=ne;const X=z.shadow;if(z.map&&(r.spotLightMap[B]=z.map,B++,X.updateMatrices(z),z.castShadow&&I++),r.spotLightMatrix[T]=X.matrix,z.castShadow){const O=t.get(z);O.shadowIntensity=X.intensity,O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,r.spotShadow[T]=O,r.spotShadowMap[T]=G,P++}T++}else if(z.isRectAreaLight){const ne=e.get(z);ne.color.copy(Y).multiplyScalar(le),ne.halfWidth.set(z.width*.5,0,0),ne.halfHeight.set(0,z.height*.5,0),r.rectArea[y]=ne,y++}else if(z.isPointLight){const ne=e.get(z);if(ne.color.copy(z.color).multiplyScalar(z.intensity),ne.distance=z.distance,ne.decay=z.decay,z.castShadow){const X=z.shadow,O=t.get(z);O.shadowIntensity=X.intensity,O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,O.shadowCameraNear=X.camera.near,O.shadowCameraFar=X.camera.far,r.pointShadow[S]=O,r.pointShadowMap[S]=G,r.pointShadowMatrix[S]=z.shadow.matrix,b++}r.point[S]=ne,S++}else if(z.isHemisphereLight){const ne=e.get(z);ne.skyColor.copy(z.color).multiplyScalar(le),ne.groundColor.copy(z.groundColor).multiplyScalar(le),r.hemi[M]=ne,M++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ke.LTC_FLOAT_1,r.rectAreaLTC2=Ke.LTC_FLOAT_2):(r.rectAreaLTC1=Ke.LTC_HALF_1,r.rectAreaLTC2=Ke.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=x,r.ambient[2]=g;const A=r.hash;(A.directionalLength!==_||A.pointLength!==S||A.spotLength!==T||A.rectAreaLength!==y||A.hemiLength!==M||A.numDirectionalShadows!==w||A.numPointShadows!==b||A.numSpotShadows!==P||A.numSpotMaps!==B||A.numLightProbes!==k)&&(r.directional.length=_,r.spot.length=T,r.rectArea.length=y,r.point.length=S,r.hemi.length=M,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=P+B-I,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=k,A.directionalLength=_,A.pointLength=S,A.spotLength=T,A.rectAreaLength=y,A.hemiLength=M,A.numDirectionalShadows=w,A.numPointShadows=b,A.numSpotShadows=P,A.numSpotMaps=B,A.numLightProbes=k,r.version=yE++)}function d(h,m){let x=0,g=0,_=0,S=0,T=0;const y=m.matrixWorldInverse;for(let M=0,w=h.length;M<w;M++){const b=h[M];if(b.isDirectionalLight){const P=r.directional[x];P.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),x++}else if(b.isSpotLight){const P=r.spot[_];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(y),_++}else if(b.isRectAreaLight){const P=r.rectArea[S];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(y),c.identity(),l.copy(b.matrixWorld),l.premultiply(y),c.extractRotation(l),P.halfWidth.set(b.width*.5,0,0),P.halfHeight.set(0,b.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),S++}else if(b.isPointLight){const P=r.point[g];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(y),g++}else if(b.isHemisphereLight){const P=r.hemi[T];P.direction.setFromMatrixPosition(b.matrixWorld),P.direction.transformDirection(y),T++}}}return{setup:f,setupView:d,state:r}}function G0(s){const e=new SE(s),t=[],r=[],o=[];function l(g){x.camera=g,t.length=0,r.length=0,o.length=0}function c(g){t.push(g)}function f(g){r.push(g)}function d(g){o.push(g)}function h(){e.setup(t)}function m(g){e.setupView(t,g)}const x={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:x,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f,pushLightProbeGrid:d}}function AE(s){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new G0(s),e.set(o,[f])):l>=c.length?(f=new G0(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const EE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wE=`uniform sampler2D shadow_pass;
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
}`,TE=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],CE=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],W0=new tn,la=new J,Of=new J;function RE(s,e,t){let r=new qg;const o=new Pt,l=new Pt,c=new on,f=new Vy,d=new Gy,h={},m=t.maxTextureSize,x={[jr]:ei,[ei]:jr,[Fi]:Fi},g=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:EE,fragmentShader:wE}),_=g.clone();_.defines.HORIZONTAL_PASS=1;const S=new fn;S.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new On(S,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jl;let M=this.type;this.render=function(I,k,A){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;this.type===m_&&(vt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Jl);const D=s.getRenderTarget(),j=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),Y=s.state;Y.setBlending(mr),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const le=M!==this.type;le&&k.traverse(function(ce){ce.material&&(Array.isArray(ce.material)?ce.material.forEach(G=>G.needsUpdate=!0):ce.material.needsUpdate=!0)});for(let ce=0,G=I.length;ce<G;ce++){const ne=I[ce],X=ne.shadow;if(X===void 0){vt("WebGLShadowMap:",ne,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;o.copy(X.mapSize);const O=X.getFrameExtents();o.multiply(O),l.copy(X.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/O.x),o.x=l.x*O.x,X.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/O.y),o.y=l.y*O.y,X.mapSize.y=l.y));const F=s.state.buffers.depth.getReversed();if(X.camera._reversedDepth=F,X.map===null||le===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===ha){if(ne.isPointLight){vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Zi(o.x,o.y,{format:ys,type:vr,minFilter:Sn,magFilter:Sn,generateMipmaps:!1}),X.map.texture.name=ne.name+".shadowMap",X.map.depthTexture=new mo(o.x,o.y,ki),X.map.depthTexture.name=ne.name+".shadowMapDepth",X.map.depthTexture.format=xr,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=pn,X.map.depthTexture.magFilter=pn}else ne.isPointLight?(X.map=new rv(o.x),X.map.depthTexture=new Dy(o.x,Ji)):(X.map=new Zi(o.x,o.y),X.map.depthTexture=new mo(o.x,o.y,Ji)),X.map.depthTexture.name=ne.name+".shadowMap",X.map.depthTexture.format=xr,this.type===Jl?(X.map.depthTexture.compareFunction=F?Qh:Yh,X.map.depthTexture.minFilter=Sn,X.map.depthTexture.magFilter=Sn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=pn,X.map.depthTexture.magFilter=pn);X.camera.updateProjectionMatrix()}const $=X.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<$;U++){if(X.map.isWebGLCubeRenderTarget)s.setRenderTarget(X.map,U),s.clear();else{U===0&&(s.setRenderTarget(X.map),s.clear());const V=X.getViewport(U);c.set(l.x*V.x,l.y*V.y,l.x*V.z,l.y*V.w),Y.viewport(c)}if(ne.isPointLight){const V=X.camera,ye=X.matrix,Me=ne.distance||V.far;Me!==V.far&&(V.far=Me,V.updateProjectionMatrix()),la.setFromMatrixPosition(ne.matrixWorld),V.position.copy(la),Of.copy(V.position),Of.add(TE[U]),V.up.copy(CE[U]),V.lookAt(Of),V.updateMatrixWorld(),ye.makeTranslation(-la.x,-la.y,-la.z),W0.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),X._frustum.setFromProjectionMatrix(W0,V.coordinateSystem,V.reversedDepth)}else X.updateMatrices(ne);r=X.getFrustum(),P(k,A,X.camera,ne,this.type)}X.isPointLightShadow!==!0&&this.type===ha&&w(X,A),X.needsUpdate=!1}M=this.type,y.needsUpdate=!1,s.setRenderTarget(D,j,z)};function w(I,k){const A=e.update(T);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,_.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,_.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Zi(o.x,o.y,{format:ys,type:vr})),g.uniforms.shadow_pass.value=I.map.depthTexture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(k,null,A,g,T,null),_.uniforms.shadow_pass.value=I.mapPass.texture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(k,null,A,_,T,null)}function b(I,k,A,D){let j=null;const z=A.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(z!==void 0)j=z;else if(j=A.isPointLight===!0?d:f,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const Y=j.uuid,le=k.uuid;let ce=h[Y];ce===void 0&&(ce={},h[Y]=ce);let G=ce[le];G===void 0&&(G=j.clone(),ce[le]=G,k.addEventListener("dispose",B)),j=G}if(j.visible=k.visible,j.wireframe=k.wireframe,D===ha?j.side=k.shadowSide!==null?k.shadowSide:k.side:j.side=k.shadowSide!==null?k.shadowSide:x[k.side],j.alphaMap=k.alphaMap,j.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,j.map=k.map,j.clipShadows=k.clipShadows,j.clippingPlanes=k.clippingPlanes,j.clipIntersection=k.clipIntersection,j.displacementMap=k.displacementMap,j.displacementScale=k.displacementScale,j.displacementBias=k.displacementBias,j.wireframeLinewidth=k.wireframeLinewidth,j.linewidth=k.linewidth,A.isPointLight===!0&&j.isMeshDistanceMaterial===!0){const Y=s.properties.get(j);Y.light=A}return j}function P(I,k,A,D,j){if(I.visible===!1)return;if(I.layers.test(k.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&j===ha)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,I.matrixWorld);const le=e.update(I),ce=I.material;if(Array.isArray(ce)){const G=le.groups;for(let ne=0,X=G.length;ne<X;ne++){const O=G[ne],F=ce[O.materialIndex];if(F&&F.visible){const $=b(I,F,D,j);I.onBeforeShadow(s,I,k,A,le,$,O),s.renderBufferDirect(A,null,le,$,I,O),I.onAfterShadow(s,I,k,A,le,$,O)}}}else if(ce.visible){const G=b(I,ce,D,j);I.onBeforeShadow(s,I,k,A,le,G,null),s.renderBufferDirect(A,null,le,G,I,null),I.onAfterShadow(s,I,k,A,le,G,null)}}const Y=I.children;for(let le=0,ce=Y.length;le<ce;le++)P(Y[le],k,A,D,j)}function B(I){I.target.removeEventListener("dispose",B);for(const A in h){const D=h[A],j=I.target.uuid;j in D&&(D[j].dispose(),delete D[j])}}}function bE(s,e){function t(){let Q=!1;const De=new on;let he=null;const We=new on(0,0,0,0);return{setMask:function(Oe){he!==Oe&&!Q&&(s.colorMask(Oe,Oe,Oe,Oe),he=Oe)},setLocked:function(Oe){Q=Oe},setClear:function(Oe,we,qe,je,At){At===!0&&(Oe*=je,we*=je,qe*=je),De.set(Oe,we,qe,je),We.equals(De)===!1&&(s.clearColor(Oe,we,qe,je),We.copy(De))},reset:function(){Q=!1,he=null,We.set(-1,0,0,0)}}}function r(){let Q=!1,De=!1,he=null,We=null,Oe=null;return{setReversed:function(we){if(De!==we){const qe=e.get("EXT_clip_control");we?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),De=we;const je=Oe;Oe=null,this.setClear(je)}},getReversed:function(){return De},setTest:function(we){we?W(s.DEPTH_TEST):de(s.DEPTH_TEST)},setMask:function(we){he!==we&&!Q&&(s.depthMask(we),he=we)},setFunc:function(we){if(De&&(we=q_[we]),We!==we){switch(we){case Qf:s.depthFunc(s.NEVER);break;case Zf:s.depthFunc(s.ALWAYS);break;case Jf:s.depthFunc(s.LESS);break;case ho:s.depthFunc(s.LEQUAL);break;case $f:s.depthFunc(s.EQUAL);break;case eh:s.depthFunc(s.GEQUAL);break;case th:s.depthFunc(s.GREATER);break;case nh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}We=we}},setLocked:function(we){Q=we},setClear:function(we){Oe!==we&&(Oe=we,De&&(we=1-we),s.clearDepth(we))},reset:function(){Q=!1,he=null,We=null,Oe=null,De=!1}}}function o(){let Q=!1,De=null,he=null,We=null,Oe=null,we=null,qe=null,je=null,At=null;return{setTest:function(It){Q||(It?W(s.STENCIL_TEST):de(s.STENCIL_TEST))},setMask:function(It){De!==It&&!Q&&(s.stencilMask(It),De=It)},setFunc:function(It,an,kn){(he!==It||We!==an||Oe!==kn)&&(s.stencilFunc(It,an,kn),he=It,We=an,Oe=kn)},setOp:function(It,an,kn){(we!==It||qe!==an||je!==kn)&&(s.stencilOp(It,an,kn),we=It,qe=an,je=kn)},setLocked:function(It){Q=It},setClear:function(It){At!==It&&(s.clearStencil(It),At=It)},reset:function(){Q=!1,De=null,he=null,We=null,Oe=null,we=null,qe=null,je=null,At=null}}}const l=new t,c=new r,f=new o,d=new WeakMap,h=new WeakMap;let m={},x={},g={},_=new WeakMap,S=[],T=null,y=!1,M=null,w=null,b=null,P=null,B=null,I=null,k=null,A=new Nt(0,0,0),D=0,j=!1,z=null,Y=null,le=null,ce=null,G=null;const ne=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,O=0;const F=s.getParameter(s.VERSION);F.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(F)[1]),X=O>=1):F.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),X=O>=2);let $=null,U={};const V=s.getParameter(s.SCISSOR_BOX),ye=s.getParameter(s.VIEWPORT),Me=new on().fromArray(V),xe=new on().fromArray(ye);function q(Q,De,he,We){const Oe=new Uint8Array(4),we=s.createTexture();s.bindTexture(Q,we),s.texParameteri(Q,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(Q,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let qe=0;qe<he;qe++)Q===s.TEXTURE_3D||Q===s.TEXTURE_2D_ARRAY?s.texImage3D(De,0,s.RGBA,1,1,We,0,s.RGBA,s.UNSIGNED_BYTE,Oe):s.texImage2D(De+qe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Oe);return we}const re={};re[s.TEXTURE_2D]=q(s.TEXTURE_2D,s.TEXTURE_2D,1),re[s.TEXTURE_CUBE_MAP]=q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[s.TEXTURE_2D_ARRAY]=q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),re[s.TEXTURE_3D]=q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),W(s.DEPTH_TEST),c.setFunc(ho),it(!1),ct(Om),W(s.CULL_FACE),tt(mr);function W(Q){m[Q]!==!0&&(s.enable(Q),m[Q]=!0)}function de(Q){m[Q]!==!1&&(s.disable(Q),m[Q]=!1)}function Te(Q,De){return g[Q]!==De?(s.bindFramebuffer(Q,De),g[Q]=De,Q===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=De),Q===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=De),!0):!1}function pe(Q,De){let he=S,We=!1;if(Q){he=_.get(De),he===void 0&&(he=[],_.set(De,he));const Oe=Q.textures;if(he.length!==Oe.length||he[0]!==s.COLOR_ATTACHMENT0){for(let we=0,qe=Oe.length;we<qe;we++)he[we]=s.COLOR_ATTACHMENT0+we;he.length=Oe.length,We=!0}}else he[0]!==s.BACK&&(he[0]=s.BACK,We=!0);We&&s.drawBuffers(he)}function Fe(Q){return T!==Q?(s.useProgram(Q),T=Q,!0):!1}const Ae={[ms]:s.FUNC_ADD,[v_]:s.FUNC_SUBTRACT,[x_]:s.FUNC_REVERSE_SUBTRACT};Ae[__]=s.MIN,Ae[y_]=s.MAX;const Ve={[M_]:s.ZERO,[S_]:s.ONE,[A_]:s.SRC_COLOR,[qf]:s.SRC_ALPHA,[b_]:s.SRC_ALPHA_SATURATE,[C_]:s.DST_COLOR,[w_]:s.DST_ALPHA,[E_]:s.ONE_MINUS_SRC_COLOR,[Yf]:s.ONE_MINUS_SRC_ALPHA,[R_]:s.ONE_MINUS_DST_COLOR,[T_]:s.ONE_MINUS_DST_ALPHA,[P_]:s.CONSTANT_COLOR,[L_]:s.ONE_MINUS_CONSTANT_COLOR,[I_]:s.CONSTANT_ALPHA,[U_]:s.ONE_MINUS_CONSTANT_ALPHA};function tt(Q,De,he,We,Oe,we,qe,je,At,It){if(Q===mr){y===!0&&(de(s.BLEND),y=!1);return}if(y===!1&&(W(s.BLEND),y=!0),Q!==g_){if(Q!==M||It!==j){if((w!==ms||B!==ms)&&(s.blendEquation(s.FUNC_ADD),w=ms,B=ms),It)switch(Q){case uo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case km:s.blendFunc(s.ONE,s.ONE);break;case Bm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case zm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Dt("WebGLState: Invalid blending: ",Q);break}else switch(Q){case uo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case km:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Bm:Dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zm:Dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Dt("WebGLState: Invalid blending: ",Q);break}b=null,P=null,I=null,k=null,A.set(0,0,0),D=0,M=Q,j=It}return}Oe=Oe||De,we=we||he,qe=qe||We,(De!==w||Oe!==B)&&(s.blendEquationSeparate(Ae[De],Ae[Oe]),w=De,B=Oe),(he!==b||We!==P||we!==I||qe!==k)&&(s.blendFuncSeparate(Ve[he],Ve[We],Ve[we],Ve[qe]),b=he,P=We,I=we,k=qe),(je.equals(A)===!1||At!==D)&&(s.blendColor(je.r,je.g,je.b,At),A.copy(je),D=At),M=Q,j=!1}function nt(Q,De){Q.side===Fi?de(s.CULL_FACE):W(s.CULL_FACE);let he=Q.side===ei;De&&(he=!he),it(he),Q.blending===uo&&Q.transparent===!1?tt(mr):tt(Q.blending,Q.blendEquation,Q.blendSrc,Q.blendDst,Q.blendEquationAlpha,Q.blendSrcAlpha,Q.blendDstAlpha,Q.blendColor,Q.blendAlpha,Q.premultipliedAlpha),c.setFunc(Q.depthFunc),c.setTest(Q.depthTest),c.setMask(Q.depthWrite),l.setMask(Q.colorWrite);const We=Q.stencilWrite;f.setTest(We),We&&(f.setMask(Q.stencilWriteMask),f.setFunc(Q.stencilFunc,Q.stencilRef,Q.stencilFuncMask),f.setOp(Q.stencilFail,Q.stencilZFail,Q.stencilZPass)),N(Q.polygonOffset,Q.polygonOffsetFactor,Q.polygonOffsetUnits),Q.alphaToCoverage===!0?W(s.SAMPLE_ALPHA_TO_COVERAGE):de(s.SAMPLE_ALPHA_TO_COVERAGE)}function it(Q){z!==Q&&(Q?s.frontFace(s.CW):s.frontFace(s.CCW),z=Q)}function ct(Q){Q!==d_?(W(s.CULL_FACE),Q!==Y&&(Q===Om?s.cullFace(s.BACK):Q===p_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):de(s.CULL_FACE),Y=Q}function yt(Q){Q!==le&&(X&&s.lineWidth(Q),le=Q)}function N(Q,De,he){Q?(W(s.POLYGON_OFFSET_FILL),(ce!==De||G!==he)&&(ce=De,G=he,c.getReversed()&&(De=-De),s.polygonOffset(De,he))):de(s.POLYGON_OFFSET_FILL)}function xt(Q){Q?W(s.SCISSOR_TEST):de(s.SCISSOR_TEST)}function ot(Q){Q===void 0&&(Q=s.TEXTURE0+ne-1),$!==Q&&(s.activeTexture(Q),$=Q)}function gt(Q,De,he){he===void 0&&($===null?he=s.TEXTURE0+ne-1:he=$);let We=U[he];We===void 0&&(We={type:void 0,texture:void 0},U[he]=We),(We.type!==Q||We.texture!==De)&&($!==he&&(s.activeTexture(he),$=he),s.bindTexture(Q,De||re[Q]),We.type=Q,We.texture=De)}function Ee(){const Q=U[$];Q!==void 0&&Q.type!==void 0&&(s.bindTexture(Q.type,null),Q.type=void 0,Q.texture=void 0)}function lt(){try{s.compressedTexImage2D(...arguments)}catch(Q){Dt("WebGLState:",Q)}}function L(){try{s.compressedTexImage3D(...arguments)}catch(Q){Dt("WebGLState:",Q)}}function E(){try{s.texSubImage2D(...arguments)}catch(Q){Dt("WebGLState:",Q)}}function ie(){try{s.texSubImage3D(...arguments)}catch(Q){Dt("WebGLState:",Q)}}function _e(){try{s.compressedTexSubImage2D(...arguments)}catch(Q){Dt("WebGLState:",Q)}}function Se(){try{s.compressedTexSubImage3D(...arguments)}catch(Q){Dt("WebGLState:",Q)}}function Re(){try{s.texStorage2D(...arguments)}catch(Q){Dt("WebGLState:",Q)}}function Pe(){try{s.texStorage3D(...arguments)}catch(Q){Dt("WebGLState:",Q)}}function me(){try{s.texImage2D(...arguments)}catch(Q){Dt("WebGLState:",Q)}}function ve(){try{s.texImage3D(...arguments)}catch(Q){Dt("WebGLState:",Q)}}function ze(Q){return x[Q]!==void 0?x[Q]:s.getParameter(Q)}function Xe(Q,De){x[Q]!==De&&(s.pixelStorei(Q,De),x[Q]=De)}function Ne(Q){Me.equals(Q)===!1&&(s.scissor(Q.x,Q.y,Q.z,Q.w),Me.copy(Q))}function Ue(Q){xe.equals(Q)===!1&&(s.viewport(Q.x,Q.y,Q.z,Q.w),xe.copy(Q))}function ut(Q,De){let he=h.get(De);he===void 0&&(he=new WeakMap,h.set(De,he));let We=he.get(Q);We===void 0&&(We=s.getUniformBlockIndex(De,Q.name),he.set(Q,We))}function ft(Q,De){const We=h.get(De).get(Q);d.get(De)!==We&&(s.uniformBlockBinding(De,We,Q.__bindingPointIndex),d.set(De,We))}function Mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),m={},x={},$=null,U={},g={},_=new WeakMap,S=[],T=null,y=!1,M=null,w=null,b=null,P=null,B=null,I=null,k=null,A=new Nt(0,0,0),D=0,j=!1,z=null,Y=null,le=null,ce=null,G=null,Me.set(0,0,s.canvas.width,s.canvas.height),xe.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:W,disable:de,bindFramebuffer:Te,drawBuffers:pe,useProgram:Fe,setBlending:tt,setMaterial:nt,setFlipSided:it,setCullFace:ct,setLineWidth:yt,setPolygonOffset:N,setScissorTest:xt,activeTexture:ot,bindTexture:gt,unbindTexture:Ee,compressedTexImage2D:lt,compressedTexImage3D:L,texImage2D:me,texImage3D:ve,pixelStorei:Xe,getParameter:ze,updateUBOMapping:ut,uniformBlockBinding:ft,texStorage2D:Re,texStorage3D:Pe,texSubImage2D:E,texSubImage3D:ie,compressedTexSubImage2D:_e,compressedTexSubImage3D:Se,scissor:Ne,viewport:Ue,reset:Mt}}function PE(s,e,t,r,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Pt,m=new WeakMap,x=new Set;let g;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(L,E){return S?new OffscreenCanvas(L,E):hc("canvas")}function y(L,E,ie){let _e=1;const Se=lt(L);if((Se.width>ie||Se.height>ie)&&(_e=ie/Math.max(Se.width,Se.height)),_e<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Re=Math.floor(_e*Se.width),Pe=Math.floor(_e*Se.height);g===void 0&&(g=T(Re,Pe));const me=E?T(Re,Pe):g;return me.width=Re,me.height=Pe,me.getContext("2d").drawImage(L,0,0,Re,Pe),vt("WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+Re+"x"+Pe+")."),me}else return"data"in L&&vt("WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),L;return L}function M(L){return L.generateMipmaps}function w(L){s.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(L,E,ie,_e,Se,Re=!1){if(L!==null){if(s[L]!==void 0)return s[L];vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Pe;_e&&(Pe=e.get("EXT_texture_norm16"),Pe||vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let me=E;if(E===s.RED&&(ie===s.FLOAT&&(me=s.R32F),ie===s.HALF_FLOAT&&(me=s.R16F),ie===s.UNSIGNED_BYTE&&(me=s.R8),ie===s.UNSIGNED_SHORT&&Pe&&(me=Pe.R16_EXT),ie===s.SHORT&&Pe&&(me=Pe.R16_SNORM_EXT)),E===s.RED_INTEGER&&(ie===s.UNSIGNED_BYTE&&(me=s.R8UI),ie===s.UNSIGNED_SHORT&&(me=s.R16UI),ie===s.UNSIGNED_INT&&(me=s.R32UI),ie===s.BYTE&&(me=s.R8I),ie===s.SHORT&&(me=s.R16I),ie===s.INT&&(me=s.R32I)),E===s.RG&&(ie===s.FLOAT&&(me=s.RG32F),ie===s.HALF_FLOAT&&(me=s.RG16F),ie===s.UNSIGNED_BYTE&&(me=s.RG8),ie===s.UNSIGNED_SHORT&&Pe&&(me=Pe.RG16_EXT),ie===s.SHORT&&Pe&&(me=Pe.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(ie===s.UNSIGNED_BYTE&&(me=s.RG8UI),ie===s.UNSIGNED_SHORT&&(me=s.RG16UI),ie===s.UNSIGNED_INT&&(me=s.RG32UI),ie===s.BYTE&&(me=s.RG8I),ie===s.SHORT&&(me=s.RG16I),ie===s.INT&&(me=s.RG32I)),E===s.RGB_INTEGER&&(ie===s.UNSIGNED_BYTE&&(me=s.RGB8UI),ie===s.UNSIGNED_SHORT&&(me=s.RGB16UI),ie===s.UNSIGNED_INT&&(me=s.RGB32UI),ie===s.BYTE&&(me=s.RGB8I),ie===s.SHORT&&(me=s.RGB16I),ie===s.INT&&(me=s.RGB32I)),E===s.RGBA_INTEGER&&(ie===s.UNSIGNED_BYTE&&(me=s.RGBA8UI),ie===s.UNSIGNED_SHORT&&(me=s.RGBA16UI),ie===s.UNSIGNED_INT&&(me=s.RGBA32UI),ie===s.BYTE&&(me=s.RGBA8I),ie===s.SHORT&&(me=s.RGBA16I),ie===s.INT&&(me=s.RGBA32I)),E===s.RGB&&(ie===s.UNSIGNED_SHORT&&Pe&&(me=Pe.RGB16_EXT),ie===s.SHORT&&Pe&&(me=Pe.RGB16_SNORM_EXT),ie===s.UNSIGNED_INT_5_9_9_9_REV&&(me=s.RGB9_E5),ie===s.UNSIGNED_INT_10F_11F_11F_REV&&(me=s.R11F_G11F_B10F)),E===s.RGBA){const ve=Re?uc:Lt.getTransfer(Se);ie===s.FLOAT&&(me=s.RGBA32F),ie===s.HALF_FLOAT&&(me=s.RGBA16F),ie===s.UNSIGNED_BYTE&&(me=ve===Gt?s.SRGB8_ALPHA8:s.RGBA8),ie===s.UNSIGNED_SHORT&&Pe&&(me=Pe.RGBA16_EXT),ie===s.SHORT&&Pe&&(me=Pe.RGBA16_SNORM_EXT),ie===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),ie===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)}return(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function B(L,E){let ie;return L?E===null||E===Ji||E===xa?ie=s.DEPTH24_STENCIL8:E===ki?ie=s.DEPTH32F_STENCIL8:E===va&&(ie=s.DEPTH24_STENCIL8,vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ji||E===xa?ie=s.DEPTH_COMPONENT24:E===ki?ie=s.DEPTH_COMPONENT32F:E===va&&(ie=s.DEPTH_COMPONENT16),ie}function I(L,E){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==pn&&L.minFilter!==Sn?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function k(L){const E=L.target;E.removeEventListener("dispose",k),D(E),E.isVideoTexture&&m.delete(E),E.isHTMLTexture&&x.delete(E)}function A(L){const E=L.target;E.removeEventListener("dispose",A),z(E)}function D(L){const E=r.get(L);if(E.__webglInit===void 0)return;const ie=L.source,_e=_.get(ie);if(_e){const Se=_e[E.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&j(L),Object.keys(_e).length===0&&_.delete(ie)}r.remove(L)}function j(L){const E=r.get(L);s.deleteTexture(E.__webglTexture);const ie=L.source,_e=_.get(ie);delete _e[E.__cacheKey],c.memory.textures--}function z(L){const E=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(E.__webglFramebuffer[_e]))for(let Se=0;Se<E.__webglFramebuffer[_e].length;Se++)s.deleteFramebuffer(E.__webglFramebuffer[_e][Se]);else s.deleteFramebuffer(E.__webglFramebuffer[_e]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[_e])}else{if(Array.isArray(E.__webglFramebuffer))for(let _e=0;_e<E.__webglFramebuffer.length;_e++)s.deleteFramebuffer(E.__webglFramebuffer[_e]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let _e=0;_e<E.__webglColorRenderbuffer.length;_e++)E.__webglColorRenderbuffer[_e]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[_e]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ie=L.textures;for(let _e=0,Se=ie.length;_e<Se;_e++){const Re=r.get(ie[_e]);Re.__webglTexture&&(s.deleteTexture(Re.__webglTexture),c.memory.textures--),r.remove(ie[_e])}r.remove(L)}let Y=0;function le(){Y=0}function ce(){return Y}function G(L){Y=L}function ne(){const L=Y;return L>=o.maxTextures&&vt("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),Y+=1,L}function X(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function O(L,E){const ie=r.get(L);if(L.isVideoTexture&&gt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&ie.__version!==L.version){const _e=L.image;if(_e===null)vt("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)vt("WebGLRenderer: Texture marked for update but image is incomplete");else{de(ie,L,E);return}}else L.isExternalTexture&&(ie.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ie.__webglTexture,s.TEXTURE0+E)}function F(L,E){const ie=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&ie.__version!==L.version){de(ie,L,E);return}else L.isExternalTexture&&(ie.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ie.__webglTexture,s.TEXTURE0+E)}function $(L,E){const ie=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&ie.__version!==L.version){de(ie,L,E);return}t.bindTexture(s.TEXTURE_3D,ie.__webglTexture,s.TEXTURE0+E)}function U(L,E){const ie=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&ie.__version!==L.version){Te(ie,L,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture,s.TEXTURE0+E)}const V={[oc]:s.REPEAT,[pr]:s.CLAMP_TO_EDGE,[ih]:s.MIRRORED_REPEAT},ye={[pn]:s.NEAREST,[F_]:s.NEAREST_MIPMAP_NEAREST,[Al]:s.NEAREST_MIPMAP_LINEAR,[Sn]:s.LINEAR,[rf]:s.LINEAR_MIPMAP_NEAREST,[vs]:s.LINEAR_MIPMAP_LINEAR},Me={[B_]:s.NEVER,[W_]:s.ALWAYS,[z_]:s.LESS,[Yh]:s.LEQUAL,[H_]:s.EQUAL,[Qh]:s.GEQUAL,[V_]:s.GREATER,[G_]:s.NOTEQUAL};function xe(L,E){if(E.type===ki&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Sn||E.magFilter===rf||E.magFilter===Al||E.magFilter===vs||E.minFilter===Sn||E.minFilter===rf||E.minFilter===Al||E.minFilter===vs)&&vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,V[E.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,V[E.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,V[E.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,ye[E.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,ye[E.minFilter]),E.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,Me[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===pn||E.minFilter!==Al&&E.minFilter!==vs||E.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function q(L,E){let ie=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",k));const _e=E.source;let Se=_.get(_e);Se===void 0&&(Se={},_.set(_e,Se));const Re=X(E);if(Re!==L.__cacheKey){Se[Re]===void 0&&(Se[Re]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,ie=!0),Se[Re].usedTimes++;const Pe=Se[L.__cacheKey];Pe!==void 0&&(Se[L.__cacheKey].usedTimes--,Pe.usedTimes===0&&j(E)),L.__cacheKey=Re,L.__webglTexture=Se[Re].texture}return ie}function re(L,E,ie){return Math.floor(Math.floor(L/ie)/E)}function W(L,E,ie,_e){const Re=L.updateRanges;if(Re.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,ie,_e,E.data);else{Re.sort((Xe,Ne)=>Xe.start-Ne.start);let Pe=0;for(let Xe=1;Xe<Re.length;Xe++){const Ne=Re[Pe],Ue=Re[Xe],ut=Ne.start+Ne.count,ft=re(Ue.start,E.width,4),Mt=re(Ne.start,E.width,4);Ue.start<=ut+1&&ft===Mt&&re(Ue.start+Ue.count-1,E.width,4)===ft?Ne.count=Math.max(Ne.count,Ue.start+Ue.count-Ne.start):(++Pe,Re[Pe]=Ue)}Re.length=Pe+1;const me=t.getParameter(s.UNPACK_ROW_LENGTH),ve=t.getParameter(s.UNPACK_SKIP_PIXELS),ze=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Xe=0,Ne=Re.length;Xe<Ne;Xe++){const Ue=Re[Xe],ut=Math.floor(Ue.start/4),ft=Math.ceil(Ue.count/4),Mt=ut%E.width,Q=Math.floor(ut/E.width),De=ft,he=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Mt),t.pixelStorei(s.UNPACK_SKIP_ROWS,Q),t.texSubImage2D(s.TEXTURE_2D,0,Mt,Q,De,he,ie,_e,E.data)}L.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,me),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(s.UNPACK_SKIP_ROWS,ze)}}function de(L,E,ie){let _e=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(_e=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(_e=s.TEXTURE_3D);const Se=q(L,E),Re=E.source;t.bindTexture(_e,L.__webglTexture,s.TEXTURE0+ie);const Pe=r.get(Re);if(Re.version!==Pe.__version||Se===!0){if(t.activeTexture(s.TEXTURE0+ie),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const he=Lt.getPrimaries(Lt.workingColorSpace),We=E.colorSpace===Wr?null:Lt.getPrimaries(E.colorSpace),Oe=E.colorSpace===Wr||he===We?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe)}t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let ve=y(E.image,!1,o.maxTextureSize);ve=Ee(E,ve);const ze=l.convert(E.format,E.colorSpace),Xe=l.convert(E.type);let Ne=P(E.internalFormat,ze,Xe,E.normalized,E.colorSpace,E.isVideoTexture);xe(_e,E);let Ue;const ut=E.mipmaps,ft=E.isVideoTexture!==!0,Mt=Pe.__version===void 0||Se===!0,Q=Re.dataReady,De=I(E,ve);if(E.isDepthTexture)Ne=B(E.format===xs,E.type),Mt&&(ft?t.texStorage2D(s.TEXTURE_2D,1,Ne,ve.width,ve.height):t.texImage2D(s.TEXTURE_2D,0,Ne,ve.width,ve.height,0,ze,Xe,null));else if(E.isDataTexture)if(ut.length>0){ft&&Mt&&t.texStorage2D(s.TEXTURE_2D,De,Ne,ut[0].width,ut[0].height);for(let he=0,We=ut.length;he<We;he++)Ue=ut[he],ft?Q&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Ue.width,Ue.height,ze,Xe,Ue.data):t.texImage2D(s.TEXTURE_2D,he,Ne,Ue.width,Ue.height,0,ze,Xe,Ue.data);E.generateMipmaps=!1}else ft?(Mt&&t.texStorage2D(s.TEXTURE_2D,De,Ne,ve.width,ve.height),Q&&W(E,ve,ze,Xe)):t.texImage2D(s.TEXTURE_2D,0,Ne,ve.width,ve.height,0,ze,Xe,ve.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ft&&Mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,Ne,ut[0].width,ut[0].height,ve.depth);for(let he=0,We=ut.length;he<We;he++)if(Ue=ut[he],E.format!==yi)if(ze!==null)if(ft){if(Q)if(E.layerUpdates.size>0){const Oe=M0(Ue.width,Ue.height,E.format,E.type);for(const we of E.layerUpdates){const qe=Ue.data.subarray(we*Oe/Ue.data.BYTES_PER_ELEMENT,(we+1)*Oe/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,we,Ue.width,Ue.height,1,ze,qe)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Ue.width,Ue.height,ve.depth,ze,Ue.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,he,Ne,Ue.width,Ue.height,ve.depth,0,Ue.data,0,0);else vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ft?Q&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Ue.width,Ue.height,ve.depth,ze,Xe,Ue.data):t.texImage3D(s.TEXTURE_2D_ARRAY,he,Ne,Ue.width,Ue.height,ve.depth,0,ze,Xe,Ue.data)}else{ft&&Mt&&t.texStorage2D(s.TEXTURE_2D,De,Ne,ut[0].width,ut[0].height);for(let he=0,We=ut.length;he<We;he++)Ue=ut[he],E.format!==yi?ze!==null?ft?Q&&t.compressedTexSubImage2D(s.TEXTURE_2D,he,0,0,Ue.width,Ue.height,ze,Ue.data):t.compressedTexImage2D(s.TEXTURE_2D,he,Ne,Ue.width,Ue.height,0,Ue.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ft?Q&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Ue.width,Ue.height,ze,Xe,Ue.data):t.texImage2D(s.TEXTURE_2D,he,Ne,Ue.width,Ue.height,0,ze,Xe,Ue.data)}else if(E.isDataArrayTexture)if(ft){if(Mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,Ne,ve.width,ve.height,ve.depth),Q)if(E.layerUpdates.size>0){const he=M0(ve.width,ve.height,E.format,E.type);for(const We of E.layerUpdates){const Oe=ve.data.subarray(We*he/ve.data.BYTES_PER_ELEMENT,(We+1)*he/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,We,ve.width,ve.height,1,ze,Xe,Oe)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,ze,Xe,ve.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ne,ve.width,ve.height,ve.depth,0,ze,Xe,ve.data);else if(E.isData3DTexture)ft?(Mt&&t.texStorage3D(s.TEXTURE_3D,De,Ne,ve.width,ve.height,ve.depth),Q&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,ze,Xe,ve.data)):t.texImage3D(s.TEXTURE_3D,0,Ne,ve.width,ve.height,ve.depth,0,ze,Xe,ve.data);else if(E.isFramebufferTexture){if(Mt)if(ft)t.texStorage2D(s.TEXTURE_2D,De,Ne,ve.width,ve.height);else{let he=ve.width,We=ve.height;for(let Oe=0;Oe<De;Oe++)t.texImage2D(s.TEXTURE_2D,Oe,Ne,he,We,0,ze,Xe,null),he>>=1,We>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const he=s.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),ve.parentNode!==he){he.appendChild(ve),x.add(E),he.onpaint=je=>{const At=je.changedElements;for(const It of x)At.includes(It.image)&&(It.needsUpdate=!0)},he.requestPaint();return}const We=0,Oe=s.RGBA,we=s.RGBA,qe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,We,Oe,we,qe,ve),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ut.length>0){if(ft&&Mt){const he=lt(ut[0]);t.texStorage2D(s.TEXTURE_2D,De,Ne,he.width,he.height)}for(let he=0,We=ut.length;he<We;he++)Ue=ut[he],ft?Q&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,ze,Xe,Ue):t.texImage2D(s.TEXTURE_2D,he,Ne,ze,Xe,Ue);E.generateMipmaps=!1}else if(ft){if(Mt){const he=lt(ve);t.texStorage2D(s.TEXTURE_2D,De,Ne,he.width,he.height)}Q&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ze,Xe,ve)}else t.texImage2D(s.TEXTURE_2D,0,Ne,ze,Xe,ve);M(E)&&w(_e),Pe.__version=Re.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function Te(L,E,ie){if(E.image.length!==6)return;const _e=q(L,E),Se=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+ie);const Re=r.get(Se);if(Se.version!==Re.__version||_e===!0){t.activeTexture(s.TEXTURE0+ie);const Pe=Lt.getPrimaries(Lt.workingColorSpace),me=E.colorSpace===Wr?null:Lt.getPrimaries(E.colorSpace),ve=E.colorSpace===Wr||Pe===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const ze=E.isCompressedTexture||E.image[0].isCompressedTexture,Xe=E.image[0]&&E.image[0].isDataTexture,Ne=[];for(let we=0;we<6;we++)!ze&&!Xe?Ne[we]=y(E.image[we],!0,o.maxCubemapSize):Ne[we]=Xe?E.image[we].image:E.image[we],Ne[we]=Ee(E,Ne[we]);const Ue=Ne[0],ut=l.convert(E.format,E.colorSpace),ft=l.convert(E.type),Mt=P(E.internalFormat,ut,ft,E.normalized,E.colorSpace),Q=E.isVideoTexture!==!0,De=Re.__version===void 0||_e===!0,he=Se.dataReady;let We=I(E,Ue);xe(s.TEXTURE_CUBE_MAP,E);let Oe;if(ze){Q&&De&&t.texStorage2D(s.TEXTURE_CUBE_MAP,We,Mt,Ue.width,Ue.height);for(let we=0;we<6;we++){Oe=Ne[we].mipmaps;for(let qe=0;qe<Oe.length;qe++){const je=Oe[qe];E.format!==yi?ut!==null?Q?he&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,qe,0,0,je.width,je.height,ut,je.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,qe,Mt,je.width,je.height,0,je.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Q?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,qe,0,0,je.width,je.height,ut,ft,je.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,qe,Mt,je.width,je.height,0,ut,ft,je.data)}}}else{if(Oe=E.mipmaps,Q&&De){Oe.length>0&&We++;const we=lt(Ne[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,We,Mt,we.width,we.height)}for(let we=0;we<6;we++)if(Xe){Q?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Ne[we].width,Ne[we].height,ut,ft,Ne[we].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Mt,Ne[we].width,Ne[we].height,0,ut,ft,Ne[we].data);for(let qe=0;qe<Oe.length;qe++){const At=Oe[qe].image[we].image;Q?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,qe+1,0,0,At.width,At.height,ut,ft,At.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,qe+1,Mt,At.width,At.height,0,ut,ft,At.data)}}else{Q?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,ut,ft,Ne[we]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Mt,ut,ft,Ne[we]);for(let qe=0;qe<Oe.length;qe++){const je=Oe[qe];Q?he&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,qe+1,0,0,ut,ft,je.image[we]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+we,qe+1,Mt,ut,ft,je.image[we])}}}M(E)&&w(s.TEXTURE_CUBE_MAP),Re.__version=Se.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function pe(L,E,ie,_e,Se,Re){const Pe=l.convert(ie.format,ie.colorSpace),me=l.convert(ie.type),ve=P(ie.internalFormat,Pe,me,ie.normalized,ie.colorSpace),ze=r.get(E),Xe=r.get(ie);if(Xe.__renderTarget=E,!ze.__hasExternalTextures){const Ne=Math.max(1,E.width>>Re),Ue=Math.max(1,E.height>>Re);Se===s.TEXTURE_3D||Se===s.TEXTURE_2D_ARRAY?t.texImage3D(Se,Re,ve,Ne,Ue,E.depth,0,Pe,me,null):t.texImage2D(Se,Re,ve,Ne,Ue,0,Pe,me,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),ot(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,_e,Se,Xe.__webglTexture,0,xt(E)):(Se===s.TEXTURE_2D||Se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,_e,Se,Xe.__webglTexture,Re),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(L,E,ie){if(s.bindRenderbuffer(s.RENDERBUFFER,L),E.depthBuffer){const _e=E.depthTexture,Se=_e&&_e.isDepthTexture?_e.type:null,Re=B(E.stencilBuffer,Se),Pe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ot(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xt(E),Re,E.width,E.height):ie?s.renderbufferStorageMultisample(s.RENDERBUFFER,xt(E),Re,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Re,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Pe,s.RENDERBUFFER,L)}else{const _e=E.textures;for(let Se=0;Se<_e.length;Se++){const Re=_e[Se],Pe=l.convert(Re.format,Re.colorSpace),me=l.convert(Re.type),ve=P(Re.internalFormat,Pe,me,Re.normalized,Re.colorSpace);ot(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xt(E),ve,E.width,E.height):ie?s.renderbufferStorageMultisample(s.RENDERBUFFER,xt(E),ve,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ve,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(L,E,ie){const _e=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Se=r.get(E.depthTexture);if(Se.__renderTarget=E,(!Se.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),_e){if(Se.__webglInit===void 0&&(Se.__webglInit=!0,E.depthTexture.addEventListener("dispose",k)),Se.__webglTexture===void 0){Se.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Se.__webglTexture),xe(s.TEXTURE_CUBE_MAP,E.depthTexture);const ze=l.convert(E.depthTexture.format),Xe=l.convert(E.depthTexture.type);let Ne;E.depthTexture.format===xr?Ne=s.DEPTH_COMPONENT24:E.depthTexture.format===xs&&(Ne=s.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,Ne,E.width,E.height,0,ze,Xe,null)}}else O(E.depthTexture,0);const Re=Se.__webglTexture,Pe=xt(E),me=_e?s.TEXTURE_CUBE_MAP_POSITIVE_X+ie:s.TEXTURE_2D,ve=E.depthTexture.format===xs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===xr)ot(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,me,Re,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,ve,me,Re,0);else if(E.depthTexture.format===xs)ot(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ve,me,Re,0,Pe):s.framebufferTexture2D(s.FRAMEBUFFER,ve,me,Re,0);else throw new Error("Unknown depthTexture format")}function Ve(L){const E=r.get(L),ie=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const _e=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),_e){const Se=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,_e.removeEventListener("dispose",Se)};_e.addEventListener("dispose",Se),E.__depthDisposeCallback=Se}E.__boundDepthTexture=_e}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(ie)for(let _e=0;_e<6;_e++)Ae(E.__webglFramebuffer[_e],L,_e);else{const _e=L.texture.mipmaps;_e&&_e.length>0?Ae(E.__webglFramebuffer[0],L,0):Ae(E.__webglFramebuffer,L,0)}else if(ie){E.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[_e]),E.__webglDepthbuffer[_e]===void 0)E.__webglDepthbuffer[_e]=s.createRenderbuffer(),Fe(E.__webglDepthbuffer[_e],L,!1);else{const Se=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=E.__webglDepthbuffer[_e];s.bindRenderbuffer(s.RENDERBUFFER,Re),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,Re)}}else{const _e=L.texture.mipmaps;if(_e&&_e.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Fe(E.__webglDepthbuffer,L,!1);else{const Se=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Re),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,Re)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function tt(L,E,ie){const _e=r.get(L);E!==void 0&&pe(_e.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ie!==void 0&&Ve(L)}function nt(L){const E=L.texture,ie=r.get(L),_e=r.get(E);L.addEventListener("dispose",A);const Se=L.textures,Re=L.isWebGLCubeRenderTarget===!0,Pe=Se.length>1;if(Pe||(_e.__webglTexture===void 0&&(_e.__webglTexture=s.createTexture()),_e.__version=E.version,c.memory.textures++),Re){ie.__webglFramebuffer=[];for(let me=0;me<6;me++)if(E.mipmaps&&E.mipmaps.length>0){ie.__webglFramebuffer[me]=[];for(let ve=0;ve<E.mipmaps.length;ve++)ie.__webglFramebuffer[me][ve]=s.createFramebuffer()}else ie.__webglFramebuffer[me]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){ie.__webglFramebuffer=[];for(let me=0;me<E.mipmaps.length;me++)ie.__webglFramebuffer[me]=s.createFramebuffer()}else ie.__webglFramebuffer=s.createFramebuffer();if(Pe)for(let me=0,ve=Se.length;me<ve;me++){const ze=r.get(Se[me]);ze.__webglTexture===void 0&&(ze.__webglTexture=s.createTexture(),c.memory.textures++)}if(L.samples>0&&ot(L)===!1){ie.__webglMultisampledFramebuffer=s.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let me=0;me<Se.length;me++){const ve=Se[me];ie.__webglColorRenderbuffer[me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ie.__webglColorRenderbuffer[me]);const ze=l.convert(ve.format,ve.colorSpace),Xe=l.convert(ve.type),Ne=P(ve.internalFormat,ze,Xe,ve.normalized,ve.colorSpace,L.isXRRenderTarget===!0),Ue=xt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,Ne,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,ie.__webglColorRenderbuffer[me])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(ie.__webglDepthRenderbuffer=s.createRenderbuffer(),Fe(ie.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Re){t.bindTexture(s.TEXTURE_CUBE_MAP,_e.__webglTexture),xe(s.TEXTURE_CUBE_MAP,E);for(let me=0;me<6;me++)if(E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)pe(ie.__webglFramebuffer[me][ve],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,ve);else pe(ie.__webglFramebuffer[me],L,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);M(E)&&w(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let me=0,ve=Se.length;me<ve;me++){const ze=Se[me],Xe=r.get(ze);let Ne=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ne=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ne,Xe.__webglTexture),xe(Ne,ze),pe(ie.__webglFramebuffer,L,ze,s.COLOR_ATTACHMENT0+me,Ne,0),M(ze)&&w(Ne)}t.unbindTexture()}else{let me=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(me=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(me,_e.__webglTexture),xe(me,E),E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)pe(ie.__webglFramebuffer[ve],L,E,s.COLOR_ATTACHMENT0,me,ve);else pe(ie.__webglFramebuffer,L,E,s.COLOR_ATTACHMENT0,me,0);M(E)&&w(me),t.unbindTexture()}L.depthBuffer&&Ve(L)}function it(L){const E=L.textures;for(let ie=0,_e=E.length;ie<_e;ie++){const Se=E[ie];if(M(Se)){const Re=b(L),Pe=r.get(Se).__webglTexture;t.bindTexture(Re,Pe),w(Re),t.unbindTexture()}}}const ct=[],yt=[];function N(L){if(L.samples>0){if(ot(L)===!1){const E=L.textures,ie=L.width,_e=L.height;let Se=s.COLOR_BUFFER_BIT;const Re=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=r.get(L),me=E.length>1;if(me)for(let ze=0;ze<E.length;ze++)t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const ve=L.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let ze=0;ze<E.length;ze++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Se|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Se|=s.STENCIL_BUFFER_BIT)),me){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[ze]);const Xe=r.get(E[ze]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Xe,0)}s.blitFramebuffer(0,0,ie,_e,0,0,ie,_e,Se,s.NEAREST),d===!0&&(ct.length=0,yt.length=0,ct.push(s.COLOR_ATTACHMENT0+ze),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ct.push(Re),yt.push(Re),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,yt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),me)for(let ze=0;ze<E.length;ze++){t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.RENDERBUFFER,Pe.__webglColorRenderbuffer[ze]);const Xe=r.get(E[ze]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Pe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ze,s.TEXTURE_2D,Xe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&d){const E=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function xt(L){return Math.min(o.maxSamples,L.samples)}function ot(L){const E=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function gt(L){const E=c.render.frame;m.get(L)!==E&&(m.set(L,E),L.update())}function Ee(L,E){const ie=L.colorSpace,_e=L.format,Se=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||ie!==cc&&ie!==Wr&&(Lt.getTransfer(ie)===Gt?(_e!==yi||Se!==_i)&&vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Dt("WebGLTextures: Unsupported texture color space:",ie)),E}function lt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=ne,this.resetTextureUnits=le,this.getTextureUnits=ce,this.setTextureUnits=G,this.setTexture2D=O,this.setTexture2DArray=F,this.setTexture3D=$,this.setTextureCube=U,this.rebindTextures=tt,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ot,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function LE(s,e){function t(r,o=Wr){let l;const c=Lt.getTransfer(o);if(r===_i)return s.UNSIGNED_BYTE;if(r===Wh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Xh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Ng)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Fg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Ug)return s.BYTE;if(r===Dg)return s.SHORT;if(r===va)return s.UNSIGNED_SHORT;if(r===Gh)return s.INT;if(r===Ji)return s.UNSIGNED_INT;if(r===ki)return s.FLOAT;if(r===vr)return s.HALF_FLOAT;if(r===Og)return s.ALPHA;if(r===kg)return s.RGB;if(r===yi)return s.RGBA;if(r===xr)return s.DEPTH_COMPONENT;if(r===xs)return s.DEPTH_STENCIL;if(r===Bg)return s.RED;if(r===jh)return s.RED_INTEGER;if(r===ys)return s.RG;if(r===Kh)return s.RG_INTEGER;if(r===qh)return s.RGBA_INTEGER;if(r===$l||r===ec||r===tc||r===nc)if(c===Gt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===$l)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ec)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===tc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===nc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===$l)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ec)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===tc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===nc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rh||r===sh||r===oh||r===ah)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===rh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sh)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===oh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ah)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===lh||r===ch||r===uh||r===fh||r===hh||r===ac||r===dh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===lh||r===ch)return c===Gt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===uh)return c===Gt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===fh)return l.COMPRESSED_R11_EAC;if(r===hh)return l.COMPRESSED_SIGNED_R11_EAC;if(r===ac)return l.COMPRESSED_RG11_EAC;if(r===dh)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===ph||r===mh||r===gh||r===vh||r===xh||r===_h||r===yh||r===Mh||r===Sh||r===Ah||r===Eh||r===wh||r===Th||r===Ch)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===ph)return c===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===mh)return c===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gh)return c===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===vh)return c===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xh)return c===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_h)return c===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yh)return c===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Mh)return c===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sh)return c===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ah)return c===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Eh)return c===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wh)return c===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Th)return c===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ch)return c===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Rh||r===bh||r===Ph)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Rh)return c===Gt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===bh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ph)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Lh||r===Ih||r===lc||r===Uh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Lh)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Ih)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===lc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Uh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===xa?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const IE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UE=`
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

}`;class DE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Jg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Mi({vertexShader:IE,fragmentShader:UE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new On(new xc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class NE extends Ss{constructor(e,t){super();const r=this;let o=null,l=1,c=null,f="local-floor",d=1,h=null,m=null,x=null,g=null,_=null,S=null;const T=typeof XRWebGLBinding<"u",y=new DE,M={},w=t.getContextAttributes();let b=null,P=null;const B=[],I=[],k=new Pt;let A=null;const D=new $n;D.viewport=new on;const j=new $n;j.viewport=new on;const z=[D,j],Y=new Xy;let le=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let re=B[q];return re===void 0&&(re=new ff,B[q]=re),re.getTargetRaySpace()},this.getControllerGrip=function(q){let re=B[q];return re===void 0&&(re=new ff,B[q]=re),re.getGripSpace()},this.getHand=function(q){let re=B[q];return re===void 0&&(re=new ff,B[q]=re),re.getHandSpace()};function G(q){const re=I.indexOf(q.inputSource);if(re===-1)return;const W=B[re];W!==void 0&&(W.update(q.inputSource,q.frame,h||c),W.dispatchEvent({type:q.type,data:q.inputSource}))}function ne(){o.removeEventListener("select",G),o.removeEventListener("selectstart",G),o.removeEventListener("selectend",G),o.removeEventListener("squeeze",G),o.removeEventListener("squeezestart",G),o.removeEventListener("squeezeend",G),o.removeEventListener("end",ne),o.removeEventListener("inputsourceschange",X);for(let q=0;q<B.length;q++){const re=I[q];re!==null&&(I[q]=null,B[q].disconnect(re))}le=null,ce=null,y.reset();for(const q in M)delete M[q];e.setRenderTarget(b),_=null,g=null,x=null,o=null,P=null,xe.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){l=q,r.isPresenting===!0&&vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){f=q,r.isPresenting===!0&&vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(q){h=q},this.getBaseLayer=function(){return g!==null?g:_},this.getBinding=function(){return x===null&&T&&(x=new XRWebGLBinding(o,t)),x},this.getFrame=function(){return S},this.getSession=function(){return o},this.setSession=async function(q){if(o=q,o!==null){if(b=e.getRenderTarget(),o.addEventListener("select",G),o.addEventListener("selectstart",G),o.addEventListener("selectend",G),o.addEventListener("squeeze",G),o.addEventListener("squeezestart",G),o.addEventListener("squeezeend",G),o.addEventListener("end",ne),o.addEventListener("inputsourceschange",X),w.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(k),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let W=null,de=null,Te=null;w.depth&&(Te=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=w.stencil?xs:xr,de=w.stencil?xa:Ji);const pe={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:l};x=this.getBinding(),g=x.createProjectionLayer(pe),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),P=new Zi(g.textureWidth,g.textureHeight,{format:yi,type:_i,depthTexture:new mo(g.textureWidth,g.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const W={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:l};_=new XRWebGLLayer(o,t,W),o.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),P=new Zi(_.framebufferWidth,_.framebufferHeight,{format:yi,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await o.requestReferenceSpace(f),xe.setContext(o),xe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function X(q){for(let re=0;re<q.removed.length;re++){const W=q.removed[re],de=I.indexOf(W);de>=0&&(I[de]=null,B[de].disconnect(W))}for(let re=0;re<q.added.length;re++){const W=q.added[re];let de=I.indexOf(W);if(de===-1){for(let pe=0;pe<B.length;pe++)if(pe>=I.length){I.push(W),de=pe;break}else if(I[pe]===null){I[pe]=W,de=pe;break}if(de===-1)break}const Te=B[de];Te&&Te.connect(W)}}const O=new J,F=new J;function $(q,re,W){O.setFromMatrixPosition(re.matrixWorld),F.setFromMatrixPosition(W.matrixWorld);const de=O.distanceTo(F),Te=re.projectionMatrix.elements,pe=W.projectionMatrix.elements,Fe=Te[14]/(Te[10]-1),Ae=Te[14]/(Te[10]+1),Ve=(Te[9]+1)/Te[5],tt=(Te[9]-1)/Te[5],nt=(Te[8]-1)/Te[0],it=(pe[8]+1)/pe[0],ct=Fe*nt,yt=Fe*it,N=de/(-nt+it),xt=N*-nt;if(re.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(xt),q.translateZ(N),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Te[10]===-1)q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const ot=Fe+N,gt=Ae+N,Ee=ct-xt,lt=yt+(de-xt),L=Ve*Ae/gt*ot,E=tt*Ae/gt*ot;q.projectionMatrix.makePerspective(Ee,lt,L,E,ot,gt),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function U(q,re){re===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(re.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(o===null)return;let re=q.near,W=q.far;y.texture!==null&&(y.depthNear>0&&(re=y.depthNear),y.depthFar>0&&(W=y.depthFar)),Y.near=j.near=D.near=re,Y.far=j.far=D.far=W,(le!==Y.near||ce!==Y.far)&&(o.updateRenderState({depthNear:Y.near,depthFar:Y.far}),le=Y.near,ce=Y.far),Y.layers.mask=q.layers.mask|6,D.layers.mask=Y.layers.mask&-5,j.layers.mask=Y.layers.mask&-3;const de=q.parent,Te=Y.cameras;U(Y,de);for(let pe=0;pe<Te.length;pe++)U(Te[pe],de);Te.length===2?$(Y,D,j):Y.projectionMatrix.copy(D.projectionMatrix),V(q,Y,de)};function V(q,re,W){W===null?q.matrix.copy(re.matrixWorld):(q.matrix.copy(W.matrixWorld),q.matrix.invert(),q.matrix.multiply(re.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(re.projectionMatrix),q.projectionMatrixInverse.copy(re.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=_a*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(g===null&&_===null))return d},this.setFoveation=function(q){d=q,g!==null&&(g.fixedFoveation=q),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Y)},this.getCameraTexture=function(q){return M[q]};let ye=null;function Me(q,re){if(m=re.getViewerPose(h||c),S=re,m!==null){const W=m.views;_!==null&&(e.setRenderTargetFramebuffer(P,_.framebuffer),e.setRenderTarget(P));let de=!1;W.length!==Y.cameras.length&&(Y.cameras.length=0,de=!0);for(let Ae=0;Ae<W.length;Ae++){const Ve=W[Ae];let tt=null;if(_!==null)tt=_.getViewport(Ve);else{const it=x.getViewSubImage(g,Ve);tt=it.viewport,Ae===0&&(e.setRenderTargetTextures(P,it.colorTexture,it.depthStencilTexture),e.setRenderTarget(P))}let nt=z[Ae];nt===void 0&&(nt=new $n,nt.layers.enable(Ae),nt.viewport=new on,z[Ae]=nt),nt.matrix.fromArray(Ve.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Ve.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(tt.x,tt.y,tt.width,tt.height),Ae===0&&(Y.matrix.copy(nt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),de===!0&&Y.cameras.push(nt)}const Te=o.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){x=r.getBinding();const Ae=x.getDepthInformation(W[0]);Ae&&Ae.isValid&&Ae.texture&&y.init(Ae,o.renderState)}if(Te&&Te.includes("camera-access")&&T){e.state.unbindTexture(),x=r.getBinding();for(let Ae=0;Ae<W.length;Ae++){const Ve=W[Ae].camera;if(Ve){let tt=M[Ve];tt||(tt=new Jg,M[Ve]=tt);const nt=x.getCameraImage(Ve);tt.sourceTexture=nt}}}}for(let W=0;W<B.length;W++){const de=I[W],Te=B[W];de!==null&&Te!==void 0&&Te.update(de,re,h||c)}ye&&ye(q,re),re.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:re}),S=null}const xe=new nv;xe.setAnimationLoop(Me),this.setAnimationLoop=function(q){ye=q},this.dispose=function(){}}}const FE=new tn,cv=new wt;cv.set(-1,0,0,0,1,0,0,0,1);function OE(s,e){function t(y,M){y.matrixAutoUpdate===!0&&y.updateMatrix(),M.value.copy(y.matrix)}function r(y,M){M.color.getRGB(y.fogColor.value,$g(s)),M.isFog?(y.fogNear.value=M.near,y.fogFar.value=M.far):M.isFogExp2&&(y.fogDensity.value=M.density)}function o(y,M,w,b,P){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?l(y,M):M.isMeshLambertMaterial?(l(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(l(y,M),x(y,M)):M.isMeshPhongMaterial?(l(y,M),m(y,M),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(l(y,M),g(y,M),M.isMeshPhysicalMaterial&&_(y,M,P)):M.isMeshMatcapMaterial?(l(y,M),S(y,M)):M.isMeshDepthMaterial?l(y,M):M.isMeshDistanceMaterial?(l(y,M),T(y,M)):M.isMeshNormalMaterial?l(y,M):M.isLineBasicMaterial?(c(y,M),M.isLineDashedMaterial&&f(y,M)):M.isPointsMaterial?d(y,M,w,b):M.isSpriteMaterial?h(y,M):M.isShadowMaterial?(y.color.value.copy(M.color),y.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function l(y,M){y.opacity.value=M.opacity,M.color&&y.diffuse.value.copy(M.color),M.emissive&&y.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(y.map.value=M.map,t(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,t(M.alphaMap,y.alphaMapTransform)),M.bumpMap&&(y.bumpMap.value=M.bumpMap,t(M.bumpMap,y.bumpMapTransform),y.bumpScale.value=M.bumpScale,M.side===ei&&(y.bumpScale.value*=-1)),M.normalMap&&(y.normalMap.value=M.normalMap,t(M.normalMap,y.normalMapTransform),y.normalScale.value.copy(M.normalScale),M.side===ei&&y.normalScale.value.negate()),M.displacementMap&&(y.displacementMap.value=M.displacementMap,t(M.displacementMap,y.displacementMapTransform),y.displacementScale.value=M.displacementScale,y.displacementBias.value=M.displacementBias),M.emissiveMap&&(y.emissiveMap.value=M.emissiveMap,t(M.emissiveMap,y.emissiveMapTransform)),M.specularMap&&(y.specularMap.value=M.specularMap,t(M.specularMap,y.specularMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest);const w=e.get(M),b=w.envMap,P=w.envMapRotation;b&&(y.envMap.value=b,y.envMapRotation.value.setFromMatrix4(FE.makeRotationFromEuler(P)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(cv),y.reflectivity.value=M.reflectivity,y.ior.value=M.ior,y.refractionRatio.value=M.refractionRatio),M.lightMap&&(y.lightMap.value=M.lightMap,y.lightMapIntensity.value=M.lightMapIntensity,t(M.lightMap,y.lightMapTransform)),M.aoMap&&(y.aoMap.value=M.aoMap,y.aoMapIntensity.value=M.aoMapIntensity,t(M.aoMap,y.aoMapTransform))}function c(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,M.map&&(y.map.value=M.map,t(M.map,y.mapTransform))}function f(y,M){y.dashSize.value=M.dashSize,y.totalSize.value=M.dashSize+M.gapSize,y.scale.value=M.scale}function d(y,M,w,b){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.size.value=M.size*w,y.scale.value=b*.5,M.map&&(y.map.value=M.map,t(M.map,y.uvTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,t(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function h(y,M){y.diffuse.value.copy(M.color),y.opacity.value=M.opacity,y.rotation.value=M.rotation,M.map&&(y.map.value=M.map,t(M.map,y.mapTransform)),M.alphaMap&&(y.alphaMap.value=M.alphaMap,t(M.alphaMap,y.alphaMapTransform)),M.alphaTest>0&&(y.alphaTest.value=M.alphaTest)}function m(y,M){y.specular.value.copy(M.specular),y.shininess.value=Math.max(M.shininess,1e-4)}function x(y,M){M.gradientMap&&(y.gradientMap.value=M.gradientMap)}function g(y,M){y.metalness.value=M.metalness,M.metalnessMap&&(y.metalnessMap.value=M.metalnessMap,t(M.metalnessMap,y.metalnessMapTransform)),y.roughness.value=M.roughness,M.roughnessMap&&(y.roughnessMap.value=M.roughnessMap,t(M.roughnessMap,y.roughnessMapTransform)),M.envMap&&(y.envMapIntensity.value=M.envMapIntensity)}function _(y,M,w){y.ior.value=M.ior,M.sheen>0&&(y.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),y.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(y.sheenColorMap.value=M.sheenColorMap,t(M.sheenColorMap,y.sheenColorMapTransform)),M.sheenRoughnessMap&&(y.sheenRoughnessMap.value=M.sheenRoughnessMap,t(M.sheenRoughnessMap,y.sheenRoughnessMapTransform))),M.clearcoat>0&&(y.clearcoat.value=M.clearcoat,y.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(y.clearcoatMap.value=M.clearcoatMap,t(M.clearcoatMap,y.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,t(M.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(y.clearcoatNormalMap.value=M.clearcoatNormalMap,t(M.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===ei&&y.clearcoatNormalScale.value.negate())),M.dispersion>0&&(y.dispersion.value=M.dispersion),M.iridescence>0&&(y.iridescence.value=M.iridescence,y.iridescenceIOR.value=M.iridescenceIOR,y.iridescenceThicknessMinimum.value=M.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=M.iridescenceThicknessRange[1],M.iridescenceMap&&(y.iridescenceMap.value=M.iridescenceMap,t(M.iridescenceMap,y.iridescenceMapTransform)),M.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=M.iridescenceThicknessMap,t(M.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),M.transmission>0&&(y.transmission.value=M.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),M.transmissionMap&&(y.transmissionMap.value=M.transmissionMap,t(M.transmissionMap,y.transmissionMapTransform)),y.thickness.value=M.thickness,M.thicknessMap&&(y.thicknessMap.value=M.thicknessMap,t(M.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=M.attenuationDistance,y.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(y.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(y.anisotropyMap.value=M.anisotropyMap,t(M.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=M.specularIntensity,y.specularColor.value.copy(M.specularColor),M.specularColorMap&&(y.specularColorMap.value=M.specularColorMap,t(M.specularColorMap,y.specularColorMapTransform)),M.specularIntensityMap&&(y.specularIntensityMap.value=M.specularIntensityMap,t(M.specularIntensityMap,y.specularIntensityMapTransform))}function S(y,M){M.matcap&&(y.matcap.value=M.matcap)}function T(y,M){const w=e.get(M).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function kE(s,e,t,r){let o={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(w,b){const P=b.program;r.uniformBlockBinding(w,P)}function h(w,b){let P=o[w.id];P===void 0&&(S(w),P=m(w),o[w.id]=P,w.addEventListener("dispose",y));const B=b.program;r.updateUBOMapping(w,B);const I=e.render.frame;l[w.id]!==I&&(g(w),l[w.id]=I)}function m(w){const b=x();w.__bindingPointIndex=b;const P=s.createBuffer(),B=w.__size,I=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,B,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,P),P}function x(){for(let w=0;w<f;w++)if(c.indexOf(w)===-1)return c.push(w),w;return Dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const b=o[w.id],P=w.uniforms,B=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let I=0,k=P.length;I<k;I++){const A=Array.isArray(P[I])?P[I]:[P[I]];for(let D=0,j=A.length;D<j;D++){const z=A[D];if(_(z,I,D,B)===!0){const Y=z.__offset,le=Array.isArray(z.value)?z.value:[z.value];let ce=0;for(let G=0;G<le.length;G++){const ne=le[G],X=T(ne);typeof ne=="number"||typeof ne=="boolean"?(z.__data[0]=ne,s.bufferSubData(s.UNIFORM_BUFFER,Y+ce,z.__data)):ne.isMatrix3?(z.__data[0]=ne.elements[0],z.__data[1]=ne.elements[1],z.__data[2]=ne.elements[2],z.__data[3]=0,z.__data[4]=ne.elements[3],z.__data[5]=ne.elements[4],z.__data[6]=ne.elements[5],z.__data[7]=0,z.__data[8]=ne.elements[6],z.__data[9]=ne.elements[7],z.__data[10]=ne.elements[8],z.__data[11]=0):ArrayBuffer.isView(ne)?z.__data.set(new ne.constructor(ne.buffer,ne.byteOffset,z.__data.length)):(ne.toArray(z.__data,ce),ce+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,Y,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(w,b,P,B){const I=w.value,k=b+"_"+P;if(B[k]===void 0)return typeof I=="number"||typeof I=="boolean"?B[k]=I:ArrayBuffer.isView(I)?B[k]=I.slice():B[k]=I.clone(),!0;{const A=B[k];if(typeof I=="number"||typeof I=="boolean"){if(A!==I)return B[k]=I,!0}else{if(ArrayBuffer.isView(I))return!0;if(A.equals(I)===!1)return A.copy(I),!0}}return!1}function S(w){const b=w.uniforms;let P=0;const B=16;for(let k=0,A=b.length;k<A;k++){const D=Array.isArray(b[k])?b[k]:[b[k]];for(let j=0,z=D.length;j<z;j++){const Y=D[j],le=Array.isArray(Y.value)?Y.value:[Y.value];for(let ce=0,G=le.length;ce<G;ce++){const ne=le[ce],X=T(ne),O=P%B,F=O%X.boundary,$=O+F;P+=F,$!==0&&B-$<X.storage&&(P+=B-$),Y.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=P,P+=X.storage}}}const I=P%B;return I>0&&(P+=B-I),w.__size=P,w.__cache={},this}function T(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(b.boundary=16,b.storage=w.byteLength):vt("WebGLRenderer: Unsupported uniform value type.",w),b}function y(w){const b=w.target;b.removeEventListener("dispose",y);const P=c.indexOf(b.__bindingPointIndex);c.splice(P,1),s.deleteBuffer(o[b.id]),delete o[b.id],delete l[b.id]}function M(){for(const w in o)s.deleteBuffer(o[w]);c=[],o={},l={}}return{bind:d,update:h,dispose:M}}const BE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ji=null;function zE(){return ji===null&&(ji=new Kg(BE,16,16,ys,vr),ji.name="DFG_LUT",ji.minFilter=Sn,ji.magFilter=Sn,ji.wrapS=pr,ji.wrapT=pr,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}class uv{constructor(e={}){const{canvas:t=j_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:_=_i}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=c;const T=_,y=new Set([qh,Kh,jh]),M=new Set([_i,Ji,va,xa,Wh,Xh]),w=new Uint32Array(4),b=new Int32Array(4),P=new J;let B=null,I=null;const k=[],A=[];let D=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const j=this;let z=!1,Y=null;this._outputColorSpace=xi;let le=0,ce=0,G=null,ne=-1,X=null;const O=new on,F=new on;let $=null;const U=new Nt(0);let V=0,ye=t.width,Me=t.height,xe=1,q=null,re=null;const W=new on(0,0,ye,Me),de=new on(0,0,ye,Me);let Te=!1;const pe=new qg;let Fe=!1,Ae=!1;const Ve=new tn,tt=new J,nt=new on,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function yt(){return G===null?xe:1}let N=r;function xt(R,te){return t.getContext(R,te)}try{const R={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vh}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",je,!1),N===null){const te="webgl2";if(N=xt(te,R),N===null)throw xt(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Dt("WebGLRenderer: "+R.message),R}let ot,gt,Ee,lt,L,E,ie,_e,Se,Re,Pe,me,ve,ze,Xe,Ne,Ue,ut,ft,Mt,Q,De,he;function We(){ot=new z1(N),ot.init(),Q=new LE(N,ot),gt=new I1(N,ot,e,Q),Ee=new bE(N,ot),gt.reversedDepthBuffer&&g&&Ee.buffers.depth.setReversed(!0),lt=new G1(N),L=new mE,E=new PE(N,ot,Ee,L,gt,Q,lt),ie=new B1(j),_e=new Ky(N),De=new P1(N,_e),Se=new H1(N,_e,lt,De),Re=new X1(N,Se,_e,De,lt),ut=new W1(N,gt,E),Xe=new U1(L),Pe=new pE(j,ie,ot,gt,De,Xe),me=new OE(j,L),ve=new vE,ze=new AE(ot),Ue=new b1(j,ie,Ee,Re,S,d),Ne=new RE(j,Re,gt),he=new kE(N,lt,gt,Ee),ft=new L1(N,ot,lt),Mt=new V1(N,ot,lt),lt.programs=Pe.programs,j.capabilities=gt,j.extensions=ot,j.properties=L,j.renderLists=ve,j.shadowMap=Ne,j.state=Ee,j.info=lt}We(),T!==_i&&(D=new K1(T,t.width,t.height,o,l));const Oe=new NE(j,N);this.xr=Oe,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const R=ot.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ot.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(R){R!==void 0&&(xe=R,this.setSize(ye,Me,!1))},this.getSize=function(R){return R.set(ye,Me)},this.setSize=function(R,te,ue=!0){if(Oe.isPresenting){vt("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=R,Me=te,t.width=Math.floor(R*xe),t.height=Math.floor(te*xe),ue===!0&&(t.style.width=R+"px",t.style.height=te+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,R,te)},this.getDrawingBufferSize=function(R){return R.set(ye*xe,Me*xe).floor()},this.setDrawingBufferSize=function(R,te,ue){ye=R,Me=te,xe=ue,t.width=Math.floor(R*ue),t.height=Math.floor(te*ue),this.setViewport(0,0,R,te)},this.setEffects=function(R){if(T===_i){Dt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let te=0;te<R.length;te++)if(R[te].isOutputPass===!0){vt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(O)},this.getViewport=function(R){return R.copy(W)},this.setViewport=function(R,te,ue,ae){R.isVector4?W.set(R.x,R.y,R.z,R.w):W.set(R,te,ue,ae),Ee.viewport(O.copy(W).multiplyScalar(xe).round())},this.getScissor=function(R){return R.copy(de)},this.setScissor=function(R,te,ue,ae){R.isVector4?de.set(R.x,R.y,R.z,R.w):de.set(R,te,ue,ae),Ee.scissor(F.copy(de).multiplyScalar(xe).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(R){Ee.setScissorTest(Te=R)},this.setOpaqueSort=function(R){q=R},this.setTransparentSort=function(R){re=R},this.getClearColor=function(R){return R.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(R=!0,te=!0,ue=!0){let ae=0;if(R){let oe=!1;if(G!==null){const Be=G.texture.format;oe=y.has(Be)}if(oe){const Be=G.texture.type,Ge=M.has(Be),Ie=Ue.getClearColor(),Ze=Ue.getClearAlpha(),Je=Ie.r,ht=Ie.g,dt=Ie.b;Ge?(w[0]=Je,w[1]=ht,w[2]=dt,w[3]=Ze,N.clearBufferuiv(N.COLOR,0,w)):(b[0]=Je,b[1]=ht,b[2]=dt,b[3]=Ze,N.clearBufferiv(N.COLOR,0,b))}else ae|=N.COLOR_BUFFER_BIT}te&&(ae|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(ae|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&N.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),Y=R},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",je,!1),Ue.dispose(),ve.dispose(),ze.dispose(),L.dispose(),ie.dispose(),Re.dispose(),De.dispose(),he.dispose(),Pe.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",Ai),Oe.removeEventListener("sessionend",er),ti.stop()};function we(R){R.preventDefault(),Km("WebGLRenderer: Context Lost."),z=!0}function qe(){Km("WebGLRenderer: Context Restored."),z=!1;const R=lt.autoReset,te=Ne.enabled,ue=Ne.autoUpdate,ae=Ne.needsUpdate,oe=Ne.type;We(),lt.autoReset=R,Ne.enabled=te,Ne.autoUpdate=ue,Ne.needsUpdate=ae,Ne.type=oe}function je(R){Dt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function At(R){const te=R.target;te.removeEventListener("dispose",At),It(te)}function It(R){an(R),L.remove(R)}function an(R){const te=L.get(R).programs;te!==void 0&&(te.forEach(function(ue){Pe.releaseProgram(ue)}),R.isShaderMaterial&&Pe.releaseShaderCache(R))}this.renderBufferDirect=function(R,te,ue,ae,oe,Be){te===null&&(te=it);const Ge=oe.isMesh&&oe.matrixWorld.determinant()<0,Ie=Yr(R,te,ue,ae,oe);Ee.setMaterial(ae,Ge);let Ze=ue.index,Je=1;if(ae.wireframe===!0){if(Ze=Se.getWireframeAttribute(ue),Ze===void 0)return;Je=2}const ht=ue.drawRange,dt=ue.attributes.position;let et=ht.start*Je,Ct=(ht.start+ht.count)*Je;Be!==null&&(et=Math.max(et,Be.start*Je),Ct=Math.min(Ct,(Be.start+Be.count)*Je)),Ze!==null?(et=Math.max(et,0),Ct=Math.min(Ct,Ze.count)):dt!=null&&(et=Math.max(et,0),Ct=Math.min(Ct,dt.count));const Bt=Ct-et;if(Bt<0||Bt===1/0)return;De.setup(oe,ae,Ie,ue,Ze);let Wt,zt=ft;if(Ze!==null&&(Wt=_e.get(Ze),zt=Mt,zt.setIndex(Wt)),oe.isMesh)ae.wireframe===!0?(Ee.setLineWidth(ae.wireframeLinewidth*yt()),zt.setMode(N.LINES)):zt.setMode(N.TRIANGLES);else if(oe.isLine){let Zt=ae.linewidth;Zt===void 0&&(Zt=1),Ee.setLineWidth(Zt*yt()),oe.isLineSegments?zt.setMode(N.LINES):oe.isLineLoop?zt.setMode(N.LINE_LOOP):zt.setMode(N.LINE_STRIP)}else oe.isPoints?zt.setMode(N.POINTS):oe.isSprite&&zt.setMode(N.TRIANGLES);if(oe.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))zt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{const Zt=oe._multiDrawStarts,Ye=oe._multiDrawCounts,rn=oe._multiDrawCount,Et=Ze?_e.get(Ze).bytesPerElement:1,vn=L.get(ae).currentProgram.getUniforms();for(let An=0;An<rn;An++)vn.setValue(N,"_gl_DrawID",An),zt.render(Zt[An]/Et,Ye[An])}else if(oe.isInstancedMesh)zt.renderInstances(et,Bt,oe.count);else if(ue.isInstancedBufferGeometry){const Zt=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Ye=Math.min(ue.instanceCount,Zt);zt.renderInstances(et,Bt,Ye)}else zt.render(et,Bt)};function kn(R,te,ue){R.transparent===!0&&R.side===Fi&&R.forceSinglePass===!1?(R.side=ei,R.needsUpdate=!0,Rn(R,te,ue),R.side=jr,R.needsUpdate=!0,Rn(R,te,ue),R.side=Fi):Rn(R,te,ue)}this.compile=function(R,te,ue=null){ue===null&&(ue=R),I=ze.get(ue),I.init(te),A.push(I),ue.traverseVisible(function(oe){oe.isLight&&oe.layers.test(te.layers)&&(I.pushLight(oe),oe.castShadow&&I.pushShadow(oe))}),R!==ue&&R.traverseVisible(function(oe){oe.isLight&&oe.layers.test(te.layers)&&(I.pushLight(oe),oe.castShadow&&I.pushShadow(oe))}),I.setupLights();const ae=new Set;return R.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;const Be=oe.material;if(Be)if(Array.isArray(Be))for(let Ge=0;Ge<Be.length;Ge++){const Ie=Be[Ge];kn(Ie,ue,oe),ae.add(Ie)}else kn(Be,ue,oe),ae.add(Be)}),I=A.pop(),ae},this.compileAsync=function(R,te,ue=null){const ae=this.compile(R,te,ue);return new Promise(oe=>{function Be(){if(ae.forEach(function(Ge){L.get(Ge).currentProgram.isReady()&&ae.delete(Ge)}),ae.size===0){oe(R);return}setTimeout(Be,10)}ot.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let Si=null;function $i(R){Si&&Si(R)}function Ai(){ti.stop()}function er(){ti.start()}const ti=new nv;ti.setAnimationLoop($i),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(R){Si=R,Oe.setAnimationLoop(R),R===null?ti.stop():ti.start()},Oe.addEventListener("sessionstart",Ai),Oe.addEventListener("sessionend",er),this.render=function(R,te){if(te!==void 0&&te.isCamera!==!0){Dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;Y!==null&&Y.renderStart(R,te);const ue=Oe.enabled===!0&&Oe.isPresenting===!0,ae=D!==null&&(G===null||ue)&&D.begin(j,G);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(te),te=Oe.getCamera()),R.isScene===!0&&R.onBeforeRender(j,R,te,G),I=ze.get(R,A.length),I.init(te),I.state.textureUnits=E.getTextureUnits(),A.push(I),Ve.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),pe.setFromProjectionMatrix(Ve,qi,te.reversedDepth),Ae=this.localClippingEnabled,Fe=Xe.init(this.clippingPlanes,Ae),B=ve.get(R,k.length),B.init(),k.push(B),Oe.enabled===!0&&Oe.isPresenting===!0){const Ge=j.xr.getDepthSensingMesh();Ge!==null&&Kr(Ge,te,-1/0,j.sortObjects)}Kr(R,te,0,j.sortObjects),B.finish(),j.sortObjects===!0&&B.sort(q,re),ct=Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1,ct&&Ue.addToRenderList(B,R),this.info.render.frame++,Fe===!0&&Xe.beginShadows();const oe=I.state.shadowsArray;if(Ne.render(oe,R,te),Fe===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ae&&D.hasRenderPass())===!1){const Ge=B.opaque,Ie=B.transmissive;if(I.setupLights(),te.isArrayCamera){const Ze=te.cameras;if(Ie.length>0)for(let Je=0,ht=Ze.length;Je<ht;Je++){const dt=Ze[Je];ln(Ge,Ie,R,dt)}ct&&Ue.render(R);for(let Je=0,ht=Ze.length;Je<ht;Je++){const dt=Ze[Je];As(B,R,dt,dt.viewport)}}else Ie.length>0&&ln(Ge,Ie,R,te),ct&&Ue.render(R),As(B,R,te)}G!==null&&ce===0&&(E.updateMultisampleRenderTarget(G),E.updateRenderTargetMipmap(G)),ae&&D.end(j),R.isScene===!0&&R.onAfterRender(j,R,te),De.resetDefaultState(),ne=-1,X=null,A.pop(),A.length>0?(I=A[A.length-1],E.setTextureUnits(I.state.textureUnits),Fe===!0&&Xe.setGlobalState(j.clippingPlanes,I.state.camera)):I=null,k.pop(),k.length>0?B=k[k.length-1]:B=null,Y!==null&&Y.renderEnd()};function Kr(R,te,ue,ae){if(R.visible===!1)return;if(R.layers.test(te.layers)){if(R.isGroup)ue=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(te);else if(R.isLightProbeGrid)I.pushLightProbeGrid(R);else if(R.isLight)I.pushLight(R),R.castShadow&&I.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||pe.intersectsSprite(R)){ae&&nt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ve);const Ge=Re.update(R),Ie=R.material;Ie.visible&&B.push(R,Ge,Ie,ue,nt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||pe.intersectsObject(R))){const Ge=Re.update(R),Ie=R.material;if(ae&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),nt.copy(R.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),nt.copy(Ge.boundingSphere.center)),nt.applyMatrix4(R.matrixWorld).applyMatrix4(Ve)),Array.isArray(Ie)){const Ze=Ge.groups;for(let Je=0,ht=Ze.length;Je<ht;Je++){const dt=Ze[Je],et=Ie[dt.materialIndex];et&&et.visible&&B.push(R,Ge,et,ue,nt.z,dt)}}else Ie.visible&&B.push(R,Ge,Ie,ue,nt.z,null)}}const Be=R.children;for(let Ge=0,Ie=Be.length;Ge<Ie;Ge++)Kr(Be[Ge],te,ue,ae)}function As(R,te,ue,ae){const{opaque:oe,transmissive:Be,transparent:Ge}=R;I.setupLightsView(ue),Fe===!0&&Xe.setGlobalState(j.clippingPlanes,ue),ae&&Ee.viewport(O.copy(ae)),oe.length>0&&Cn(oe,te,ue),Be.length>0&&Cn(Be,te,ue),Ge.length>0&&Cn(Ge,te,ue),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function ln(R,te,ue,ae){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ae.id]===void 0){const et=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ae.id]=new Zi(1,1,{generateMipmaps:!0,type:et?vr:_i,minFilter:vs,samples:Math.max(4,gt.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}const Be=I.state.transmissionRenderTarget[ae.id],Ge=ae.viewport||O;Be.setSize(Ge.z*j.transmissionResolutionScale,Ge.w*j.transmissionResolutionScale);const Ie=j.getRenderTarget(),Ze=j.getActiveCubeFace(),Je=j.getActiveMipmapLevel();j.setRenderTarget(Be),j.getClearColor(U),V=j.getClearAlpha(),V<1&&j.setClearColor(16777215,.5),j.clear(),ct&&Ue.render(ue);const ht=j.toneMapping;j.toneMapping=Yi;const dt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),I.setupLightsView(ae),Fe===!0&&Xe.setGlobalState(j.clippingPlanes,ae),Cn(R,ue,ae),E.updateMultisampleRenderTarget(Be),E.updateRenderTargetMipmap(Be),ot.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Ct=0,Bt=te.length;Ct<Bt;Ct++){const Wt=te[Ct],{object:zt,geometry:Zt,material:Ye,group:rn}=Wt;if(Ye.side===Fi&&zt.layers.test(ae.layers)){const Et=Ye.side;Ye.side=ei,Ye.needsUpdate=!0,Bn(zt,ue,ae,Zt,Ye,rn),Ye.side=Et,Ye.needsUpdate=!0,et=!0}}et===!0&&(E.updateMultisampleRenderTarget(Be),E.updateRenderTargetMipmap(Be))}j.setRenderTarget(Ie,Ze,Je),j.setClearColor(U,V),dt!==void 0&&(ae.viewport=dt),j.toneMapping=ht}function Cn(R,te,ue){const ae=te.isScene===!0?te.overrideMaterial:null;for(let oe=0,Be=R.length;oe<Be;oe++){const Ge=R[oe],{object:Ie,geometry:Ze,group:Je}=Ge;let ht=Ge.material;ht.allowOverride===!0&&ae!==null&&(ht=ae),Ie.layers.test(ue.layers)&&Bn(Ie,te,ue,Ze,ht,Je)}}function Bn(R,te,ue,ae,oe,Be){R.onBeforeRender(j,te,ue,ae,oe,Be),R.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),oe.onBeforeRender(j,te,ue,ae,R,Be),oe.transparent===!0&&oe.side===Fi&&oe.forceSinglePass===!1?(oe.side=ei,oe.needsUpdate=!0,j.renderBufferDirect(ue,te,ae,oe,R,Be),oe.side=jr,oe.needsUpdate=!0,j.renderBufferDirect(ue,te,ae,oe,R,Be),oe.side=Fi):j.renderBufferDirect(ue,te,ae,oe,R,Be),R.onAfterRender(j,te,ue,ae,oe,Be)}function Rn(R,te,ue){te.isScene!==!0&&(te=it);const ae=L.get(R),oe=I.state.lights,Be=I.state.shadowsArray,Ge=oe.state.version,Ie=Pe.getParameters(R,oe.state,Be,te,ue,I.state.lightProbeGridArray),Ze=Pe.getProgramCacheKey(Ie);let Je=ae.programs;ae.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?te.environment:null,ae.fog=te.fog;const ht=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ae.envMap=ie.get(R.envMap||ae.environment,ht),ae.envMapRotation=ae.environment!==null&&R.envMap===null?te.environmentRotation:R.envMapRotation,Je===void 0&&(R.addEventListener("dispose",At),Je=new Map,ae.programs=Je);let dt=Je.get(Ze);if(dt!==void 0){if(ae.currentProgram===dt&&ae.lightsStateVersion===Ge)return Hn(R,Ie),dt}else Ie.uniforms=Pe.getUniforms(R),Y!==null&&R.isNodeMaterial&&Y.build(R,ue,Ie),R.onBeforeCompile(Ie,j),dt=Pe.acquireProgram(Ie,Ze),Je.set(Ze,dt),ae.uniforms=Ie.uniforms;const et=ae.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(et.clippingPlanes=Xe.uniform),Hn(R,Ie),ae.needsLights=ui(R),ae.lightsStateVersion=Ge,ae.needsLights&&(et.ambientLightColor.value=oe.state.ambient,et.lightProbe.value=oe.state.probe,et.directionalLights.value=oe.state.directional,et.directionalLightShadows.value=oe.state.directionalShadow,et.spotLights.value=oe.state.spot,et.spotLightShadows.value=oe.state.spotShadow,et.rectAreaLights.value=oe.state.rectArea,et.ltc_1.value=oe.state.rectAreaLTC1,et.ltc_2.value=oe.state.rectAreaLTC2,et.pointLights.value=oe.state.point,et.pointLightShadows.value=oe.state.pointShadow,et.hemisphereLights.value=oe.state.hemi,et.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,et.spotLightMatrix.value=oe.state.spotLightMatrix,et.spotLightMap.value=oe.state.spotLightMap,et.pointShadowMatrix.value=oe.state.pointShadowMatrix),ae.lightProbeGrid=I.state.lightProbeGridArray.length>0,ae.currentProgram=dt,ae.uniformsList=null,dt}function zn(R){if(R.uniformsList===null){const te=R.currentProgram.getUniforms();R.uniformsList=ic.seqWithValue(te.seq,R.uniforms)}return R.uniformsList}function Hn(R,te){const ue=L.get(R);ue.outputColorSpace=te.outputColorSpace,ue.batching=te.batching,ue.batchingColor=te.batchingColor,ue.instancing=te.instancing,ue.instancingColor=te.instancingColor,ue.instancingMorph=te.instancingMorph,ue.skinning=te.skinning,ue.morphTargets=te.morphTargets,ue.morphNormals=te.morphNormals,ue.morphColors=te.morphColors,ue.morphTargetsCount=te.morphTargetsCount,ue.numClippingPlanes=te.numClippingPlanes,ue.numIntersection=te.numClipIntersection,ue.vertexAlphas=te.vertexAlphas,ue.vertexTangents=te.vertexTangents,ue.toneMapping=te.toneMapping}function qr(R,te){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;P.setFromMatrixPosition(te.matrixWorld);for(let ue=0,ae=R.length;ue<ae;ue++){const oe=R[ue];if(oe.texture!==null&&oe.boundingBox.containsPoint(P))return oe}return null}function Yr(R,te,ue,ae,oe){te.isScene!==!0&&(te=it),E.resetTextureUnits();const Be=te.fog,Ge=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?te.environment:null,Ie=G===null?j.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Lt.workingColorSpace,Ze=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,Je=ie.get(ae.envMap||Ge,Ze),ht=ae.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,dt=!!ue.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),et=!!ue.morphAttributes.position,Ct=!!ue.morphAttributes.normal,Bt=!!ue.morphAttributes.color;let Wt=Yi;ae.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Wt=j.toneMapping);const zt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,Zt=zt!==void 0?zt.length:0,Ye=L.get(ae),rn=I.state.lights;if(Fe===!0&&(Ae===!0||R!==X)){const Vt=R===X&&ae.id===ne;Xe.setState(ae,R,Vt)}let Et=!1;ae.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==rn.state.version||Ye.outputColorSpace!==Ie||oe.isBatchedMesh&&Ye.batching===!1||!oe.isBatchedMesh&&Ye.batching===!0||oe.isBatchedMesh&&Ye.batchingColor===!0&&oe.colorTexture===null||oe.isBatchedMesh&&Ye.batchingColor===!1&&oe.colorTexture!==null||oe.isInstancedMesh&&Ye.instancing===!1||!oe.isInstancedMesh&&Ye.instancing===!0||oe.isSkinnedMesh&&Ye.skinning===!1||!oe.isSkinnedMesh&&Ye.skinning===!0||oe.isInstancedMesh&&Ye.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&Ye.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&Ye.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&Ye.instancingMorph===!1&&oe.morphTexture!==null||Ye.envMap!==Je||ae.fog===!0&&Ye.fog!==Be||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Xe.numPlanes||Ye.numIntersection!==Xe.numIntersection)||Ye.vertexAlphas!==ht||Ye.vertexTangents!==dt||Ye.morphTargets!==et||Ye.morphNormals!==Ct||Ye.morphColors!==Bt||Ye.toneMapping!==Wt||Ye.morphTargetsCount!==Zt||!!Ye.lightProbeGrid!=I.state.lightProbeGridArray.length>0)&&(Et=!0):(Et=!0,Ye.__version=ae.version);let vn=Ye.currentProgram;Et===!0&&(vn=Rn(ae,te,oe),Y&&ae.isNodeMaterial&&Y.onUpdateProgram(ae,vn,Ye));let An=!1,St=!1,ni=!1;const Ht=vn.getUniforms(),Kt=Ye.uniforms;if(Ee.useProgram(vn.program)&&(An=!0,St=!0,ni=!0),ae.id!==ne&&(ne=ae.id,St=!0),Ye.needsLights){const Vt=qr(I.state.lightProbeGridArray,oe);Ye.lightProbeGrid!==Vt&&(Ye.lightProbeGrid=Vt,St=!0)}if(An||X!==R){Ee.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Ht.setValue(N,"projectionMatrix",R.projectionMatrix),Ht.setValue(N,"viewMatrix",R.matrixWorldInverse);const wi=Ht.map.cameraPosition;wi!==void 0&&wi.setValue(N,tt.setFromMatrixPosition(R.matrixWorld)),gt.logarithmicDepthBuffer&&Ht.setValue(N,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Ht.setValue(N,"isOrthographic",R.isOrthographicCamera===!0),X!==R&&(X=R,St=!0,ni=!0)}if(Ye.needsLights&&(rn.state.directionalShadowMap.length>0&&Ht.setValue(N,"directionalShadowMap",rn.state.directionalShadowMap,E),rn.state.spotShadowMap.length>0&&Ht.setValue(N,"spotShadowMap",rn.state.spotShadowMap,E),rn.state.pointShadowMap.length>0&&Ht.setValue(N,"pointShadowMap",rn.state.pointShadowMap,E)),oe.isSkinnedMesh){Ht.setOptional(N,oe,"bindMatrix"),Ht.setOptional(N,oe,"bindMatrixInverse");const Vt=oe.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),Ht.setValue(N,"boneTexture",Vt.boneTexture,E))}oe.isBatchedMesh&&(Ht.setOptional(N,oe,"batchingTexture"),Ht.setValue(N,"batchingTexture",oe._matricesTexture,E),Ht.setOptional(N,oe,"batchingIdTexture"),Ht.setValue(N,"batchingIdTexture",oe._indirectTexture,E),Ht.setOptional(N,oe,"batchingColorTexture"),oe._colorsTexture!==null&&Ht.setValue(N,"batchingColorTexture",oe._colorsTexture,E));const Ei=ue.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&ut.update(oe,ue,vn),(St||Ye.receiveShadow!==oe.receiveShadow)&&(Ye.receiveShadow=oe.receiveShadow,Ht.setValue(N,"receiveShadow",oe.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&te.environment!==null&&(Kt.envMapIntensity.value=te.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=zE()),St){if(Ht.setValue(N,"toneMappingExposure",j.toneMappingExposure),Ye.needsLights&&ci(Kt,ni),Be&&ae.fog===!0&&me.refreshFogUniforms(Kt,Be),me.refreshMaterialUniforms(Kt,ae,xe,Me,I.state.transmissionRenderTarget[R.id]),Ye.needsLights&&Ye.lightProbeGrid){const Vt=Ye.lightProbeGrid;Kt.probesSH.value=Vt.texture,Kt.probesMin.value.copy(Vt.boundingBox.min),Kt.probesMax.value.copy(Vt.boundingBox.max),Kt.probesResolution.value.copy(Vt.resolution)}ic.upload(N,zn(Ye),Kt,E)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(ic.upload(N,zn(Ye),Kt,E),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Ht.setValue(N,"center",oe.center),Ht.setValue(N,"modelViewMatrix",oe.modelViewMatrix),Ht.setValue(N,"normalMatrix",oe.normalMatrix),Ht.setValue(N,"modelMatrix",oe.matrixWorld),ae.uniformsGroups!==void 0){const Vt=ae.uniformsGroups;for(let wi=0,zi=Vt.length;wi<zi;wi++){const Qr=Vt[wi];he.update(Qr,vn),he.bind(Qr,vn)}}return vn}function ci(R,te){R.ambientLightColor.needsUpdate=te,R.lightProbe.needsUpdate=te,R.directionalLights.needsUpdate=te,R.directionalLightShadows.needsUpdate=te,R.pointLights.needsUpdate=te,R.pointLightShadows.needsUpdate=te,R.spotLights.needsUpdate=te,R.spotLightShadows.needsUpdate=te,R.rectAreaLights.needsUpdate=te,R.hemisphereLights.needsUpdate=te}function ui(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(R,te,ue){const ae=L.get(R);ae.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),L.get(R.texture).__webglTexture=te,L.get(R.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:ue,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,te){const ue=L.get(R);ue.__webglFramebuffer=te,ue.__useDefaultFramebuffer=te===void 0};const jt=N.createFramebuffer();this.setRenderTarget=function(R,te=0,ue=0){G=R,le=te,ce=ue;let ae=null,oe=!1,Be=!1;if(R){const Ie=L.get(R);if(Ie.__useDefaultFramebuffer!==void 0){Ee.bindFramebuffer(N.FRAMEBUFFER,Ie.__webglFramebuffer),O.copy(R.viewport),F.copy(R.scissor),$=R.scissorTest,Ee.viewport(O),Ee.scissor(F),Ee.setScissorTest($),ne=-1;return}else if(Ie.__webglFramebuffer===void 0)E.setupRenderTarget(R);else if(Ie.__hasExternalTextures)E.rebindTextures(R,L.get(R.texture).__webglTexture,L.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const ht=R.depthTexture;if(Ie.__boundDepthTexture!==ht){if(ht!==null&&L.has(ht)&&(R.width!==ht.image.width||R.height!==ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(R)}}const Ze=R.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Be=!0);const Je=L.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Je[te])?ae=Je[te][ue]:ae=Je[te],oe=!0):R.samples>0&&E.useMultisampledRTT(R)===!1?ae=L.get(R).__webglMultisampledFramebuffer:Array.isArray(Je)?ae=Je[ue]:ae=Je,O.copy(R.viewport),F.copy(R.scissor),$=R.scissorTest}else O.copy(W).multiplyScalar(xe).floor(),F.copy(de).multiplyScalar(xe).floor(),$=Te;if(ue!==0&&(ae=jt),Ee.bindFramebuffer(N.FRAMEBUFFER,ae)&&Ee.drawBuffers(R,ae),Ee.viewport(O),Ee.scissor(F),Ee.setScissorTest($),oe){const Ie=L.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+te,Ie.__webglTexture,ue)}else if(Be){const Ie=te;for(let Ze=0;Ze<R.textures.length;Ze++){const Je=L.get(R.textures[Ze]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ze,Je.__webglTexture,ue,Ie)}}else if(R!==null&&ue!==0){const Ie=L.get(R.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ie.__webglTexture,ue)}ne=-1},this.readRenderTargetPixels=function(R,te,ue,ae,oe,Be,Ge,Ie=0){if(!(R&&R.isWebGLRenderTarget)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=L.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ze=Ze[Ge]),Ze){Ee.bindFramebuffer(N.FRAMEBUFFER,Ze);try{const Je=R.textures[Ie],ht=Je.format,dt=Je.type;if(R.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ie),!gt.textureFormatReadable(ht)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!gt.textureTypeReadable(dt)){Dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=R.width-ae&&ue>=0&&ue<=R.height-oe&&N.readPixels(te,ue,ae,oe,Q.convert(ht),Q.convert(dt),Be)}finally{const Je=G!==null?L.get(G).__webglFramebuffer:null;Ee.bindFramebuffer(N.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(R,te,ue,ae,oe,Be,Ge,Ie=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=L.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ze=Ze[Ge]),Ze)if(te>=0&&te<=R.width-ae&&ue>=0&&ue<=R.height-oe){Ee.bindFramebuffer(N.FRAMEBUFFER,Ze);const Je=R.textures[Ie],ht=Je.format,dt=Je.type;if(R.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Ie),!gt.textureFormatReadable(ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!gt.textureTypeReadable(dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,et),N.bufferData(N.PIXEL_PACK_BUFFER,Be.byteLength,N.STREAM_READ),N.readPixels(te,ue,ae,oe,Q.convert(ht),Q.convert(dt),0);const Ct=G!==null?L.get(G).__webglFramebuffer:null;Ee.bindFramebuffer(N.FRAMEBUFFER,Ct);const Bt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await K_(N,Bt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,et),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Be),N.deleteBuffer(et),N.deleteSync(Bt),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,te=null,ue=0){const ae=Math.pow(2,-ue),oe=Math.floor(R.image.width*ae),Be=Math.floor(R.image.height*ae),Ge=te!==null?te.x:0,Ie=te!==null?te.y:0;E.setTexture2D(R,0),N.copyTexSubImage2D(N.TEXTURE_2D,ue,0,0,Ge,Ie,oe,Be),Ee.unbindTexture()};const Ao=N.createFramebuffer(),nn=N.createFramebuffer();this.copyTextureToTexture=function(R,te,ue=null,ae=null,oe=0,Be=0){let Ge,Ie,Ze,Je,ht,dt,et,Ct,Bt;const Wt=R.isCompressedTexture?R.mipmaps[Be]:R.image;if(ue!==null)Ge=ue.max.x-ue.min.x,Ie=ue.max.y-ue.min.y,Ze=ue.isBox3?ue.max.z-ue.min.z:1,Je=ue.min.x,ht=ue.min.y,dt=ue.isBox3?ue.min.z:0;else{const Kt=Math.pow(2,-oe);Ge=Math.floor(Wt.width*Kt),Ie=Math.floor(Wt.height*Kt),R.isDataArrayTexture?Ze=Wt.depth:R.isData3DTexture?Ze=Math.floor(Wt.depth*Kt):Ze=1,Je=0,ht=0,dt=0}ae!==null?(et=ae.x,Ct=ae.y,Bt=ae.z):(et=0,Ct=0,Bt=0);const zt=Q.convert(te.format),Zt=Q.convert(te.type);let Ye;te.isData3DTexture?(E.setTexture3D(te,0),Ye=N.TEXTURE_3D):te.isDataArrayTexture||te.isCompressedArrayTexture?(E.setTexture2DArray(te,0),Ye=N.TEXTURE_2D_ARRAY):(E.setTexture2D(te,0),Ye=N.TEXTURE_2D),Ee.activeTexture(N.TEXTURE0),Ee.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,te.flipY),Ee.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),Ee.pixelStorei(N.UNPACK_ALIGNMENT,te.unpackAlignment);const rn=Ee.getParameter(N.UNPACK_ROW_LENGTH),Et=Ee.getParameter(N.UNPACK_IMAGE_HEIGHT),vn=Ee.getParameter(N.UNPACK_SKIP_PIXELS),An=Ee.getParameter(N.UNPACK_SKIP_ROWS),St=Ee.getParameter(N.UNPACK_SKIP_IMAGES);Ee.pixelStorei(N.UNPACK_ROW_LENGTH,Wt.width),Ee.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Wt.height),Ee.pixelStorei(N.UNPACK_SKIP_PIXELS,Je),Ee.pixelStorei(N.UNPACK_SKIP_ROWS,ht),Ee.pixelStorei(N.UNPACK_SKIP_IMAGES,dt);const ni=R.isDataArrayTexture||R.isData3DTexture,Ht=te.isDataArrayTexture||te.isData3DTexture;if(R.isDepthTexture){const Kt=L.get(R),Ei=L.get(te),Vt=L.get(Kt.__renderTarget),wi=L.get(Ei.__renderTarget);Ee.bindFramebuffer(N.READ_FRAMEBUFFER,Vt.__webglFramebuffer),Ee.bindFramebuffer(N.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let zi=0;zi<Ze;zi++)ni&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,L.get(R).__webglTexture,oe,dt+zi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,L.get(te).__webglTexture,Be,Bt+zi)),N.blitFramebuffer(Je,ht,Ge,Ie,et,Ct,Ge,Ie,N.DEPTH_BUFFER_BIT,N.NEAREST);Ee.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(oe!==0||R.isRenderTargetTexture||L.has(R)){const Kt=L.get(R),Ei=L.get(te);Ee.bindFramebuffer(N.READ_FRAMEBUFFER,Ao),Ee.bindFramebuffer(N.DRAW_FRAMEBUFFER,nn);for(let Vt=0;Vt<Ze;Vt++)ni?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Kt.__webglTexture,oe,dt+Vt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Kt.__webglTexture,oe),Ht?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ei.__webglTexture,Be,Bt+Vt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ei.__webglTexture,Be),oe!==0?N.blitFramebuffer(Je,ht,Ge,Ie,et,Ct,Ge,Ie,N.COLOR_BUFFER_BIT,N.NEAREST):Ht?N.copyTexSubImage3D(Ye,Be,et,Ct,Bt+Vt,Je,ht,Ge,Ie):N.copyTexSubImage2D(Ye,Be,et,Ct,Je,ht,Ge,Ie);Ee.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ht?R.isDataTexture||R.isData3DTexture?N.texSubImage3D(Ye,Be,et,Ct,Bt,Ge,Ie,Ze,zt,Zt,Wt.data):te.isCompressedArrayTexture?N.compressedTexSubImage3D(Ye,Be,et,Ct,Bt,Ge,Ie,Ze,zt,Wt.data):N.texSubImage3D(Ye,Be,et,Ct,Bt,Ge,Ie,Ze,zt,Zt,Wt):R.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Be,et,Ct,Ge,Ie,zt,Zt,Wt.data):R.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Be,et,Ct,Wt.width,Wt.height,zt,Wt.data):N.texSubImage2D(N.TEXTURE_2D,Be,et,Ct,Ge,Ie,zt,Zt,Wt);Ee.pixelStorei(N.UNPACK_ROW_LENGTH,rn),Ee.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Et),Ee.pixelStorei(N.UNPACK_SKIP_PIXELS,vn),Ee.pixelStorei(N.UNPACK_SKIP_ROWS,An),Ee.pixelStorei(N.UNPACK_SKIP_IMAGES,St),Be===0&&te.generateMipmaps&&N.generateMipmap(Ye),Ee.unbindTexture()},this.initRenderTarget=function(R){L.get(R).__webglFramebuffer===void 0&&E.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?E.setTextureCube(R,0):R.isData3DTexture?E.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?E.setTexture2DArray(R,0):E.setTexture2D(R,0),Ee.unbindTexture()},this.resetState=function(){le=0,ce=0,G=null,Ee.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}}function ca(s,e,t){const r=e/100,o=t/100,l=(1-Math.abs(2*o-1))*r,c=l*(1-Math.abs(s/60%2-1)),f=o-l/2;let d=0,h=0,m=0;s<60?[d,h,m]=[l,c,0]:s<120?[d,h,m]=[c,l,0]:s<180?[d,h,m]=[0,l,c]:s<240?[d,h,m]=[0,c,l]:s<300?[d,h,m]=[c,0,l]:[d,h,m]=[l,0,c];const x=g=>Math.round((g+f)*255).toString(16).padStart(2,"0");return`#${x(d)}${x(h)}${x(m)}`}function ps(s,e,t){if(t==="grayscale")return["#FFFFFF","#000000","#FFFFFF","#000000"];if(t==="black")return[ca(s,e,50),"#FFFFFF",ca(s,e*.6,70),ca(s,e*.8,35)];const r=ca(s,e,50),o=ca((s+180)%360,e,50);return[r,o,r,o]}const X0=[1],pa=[0];let fv=0;const HE=new Set;function VE(s,e){for(let t=0;t<e.length;t++){const r=e[t]??1;X0[t]=r,pa[t]=(pa[t]??0)+s*r}for(const t of HE)pa[t]=(pa[t]??0)+s*(X0[t]??1)}function GE(s){fv=s}function WE(){return pa[fv]??0}const rc=12,Nn=Math.PI*2;function hv(s,e){if(e<=0)return 0;const t=Math.min(2.2,10/e);return Math.min(e,1+Math.floor(s/t))}const Yl=[[[0,"#5ea733"],[.1,"#a9c97a"],[.17,"#efe6c6"],[.26,"#f2b2c5"],[.36,"#df4a67"],[.45,"#b81f3d"],[.53,"#1a0d33"],[.61,"#2e44d8"],[.7,"#5f78f0"],[.79,"#dfe4f4"],[.87,"#eee6c4"],[.94,"#9cc46c"],[1,"#5ea733"]],[[0,"#e0a82e"],[.1,"#f0cd7a"],[.17,"#f6ead0"],[.26,"#f6b49a"],[.36,"#e8573a"],[.45,"#b52a1c"],[.53,"#2a0a0c"],[.61,"#a8401c"],[.7,"#e8823e"],[.79,"#f7dcc4"],[.87,"#f4e8c8"],[.94,"#e9c060"],[1,"#e0a82e"]],[[0,"#1f9a8a"],[.1,"#86d1bf"],[.17,"#eaf2e2"],[.26,"#9fe3e8"],[.36,"#25b5d4"],[.45,"#13708f"],[.53,"#0b1430"],[.61,"#5a35c8"],[.7,"#9a7cf0"],[.79,"#e6e0f6"],[.87,"#e4f2ea"],[.94,"#5cc2a6"],[1,"#1f9a8a"]],[[0,"#2b3f8f"],[.1,"#7d8fd0"],[.17,"#eef0f6"],[.26,"#c9d0ea"],[.36,"#5266b8"],[.45,"#22307a"],[.53,"#070a1c"],[.61,"#26357e"],[.7,"#6a7cc6"],[.79,"#e8ebf5"],[.87,"#f4f3ee"],[.94,"#8a9ad6"],[1,"#2b3f8f"]]],XE=["Inflated","Paper","Line","Print"],jE=`
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
}`,KE=`
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
}`,qE=0,YE=1,QE=2;function Mc(s){const e=s.replace("#",""),t=e.length===3?e.split("").map(g=>g+g).join(""):e,r=(parseInt(t.slice(0,2),16)||0)/255,o=(parseInt(t.slice(2,4),16)||0)/255,l=(parseInt(t.slice(4,6),16)||0)/255,c=Math.max(r,o,l),f=Math.min(r,o,l),d=(c+f)/2;if(c===f)return[0,0,d];const h=c-f,m=d>.5?h/(2-c-f):h/(c+f);let x;return c===r?x=((o-l)/h+(o<l?6:0))*60:c===o?x=((l-r)/h+2)*60:x=((r-o)/h+4)*60,[x,m,d]}function dv(s,e,t){return`hsl(${(s%360+360)%360} ${Math.max(0,Math.min(1,e))*100}% ${t*100}%)`}const j0=Mc(ps(245,100,"contrast")[0]);function ZE(s){const[e,t]=Mc(s[0]??"#000000");return t===0?{hue:0,sat:0}:{hue:e-j0[0],sat:t/(j0[1]||1)}}function K0(s,e){const t=document.createElement("canvas");t.width=512,t.height=1;const r=t.getContext("2d"),o=r.createLinearGradient(0,0,512,0);for(const[c,f]of s){const[d,h,m]=Mc(f);o.addColorStop(c,dv(d+e.hue,h*e.sat,m))}r.fillStyle=o,r.fillRect(0,0,512,1);const l=new Uy(t);return l.wrapS=oc,l.magFilter=Sn,l.minFilter=Sn,l.generateMipmaps=!1,l}class pv{constructor(){K(this,"textures");K(this,"turnKey","#reference");K(this,"palFrom",0);K(this,"palTo",0);K(this,"palMix",1);K(this,"styleUniform",{value:0});K(this,"turn",{hue:0,sat:1});this.textures=Yl.map(e=>K0(e,{hue:0,sat:1}))}shared(){return{uPalA:{value:this.textures[0]},uPalB:{value:this.textures[0]},uPalMix:{value:0},uT:{value:0},uOff:{value:0},uWA:{value:0},uWB:{value:0},uWC:{value:0},uDepth:{value:.32},uSpec:{value:.16},uCenter:{value:new J}}}material(e,t,r={}){return new Mi({vertexShader:jE,fragmentShader:KE,side:Fi,uniforms:{...t,uStyle:this.styleUniform,uMode:{value:e},uAng:{value:0},uWS:{value:1},...r}})}update(e,t,r,o,l=0){this.styleUniform.value=Math.max(0,Math.min(XE.length-1,Math.round(l)));const c=e[0]??"";if(c!==this.turnKey){this.turnKey=c;const d=ZE(e);this.turn=d;const h=this.textures;this.textures=Yl.map(m=>K0(m,d));for(const m of h)m.dispose()}const f=Math.max(0,Math.min(Yl.length-1,Math.round(t)));o&&(this.palFrom=this.palTo=f,this.palMix=1),f!==this.palTo&&(this.palFrom=this.palMix<.5?this.palFrom:this.palTo,this.palTo=f,this.palMix=0),this.palMix=Math.min(1,this.palMix+r)}apply(e,t,r){e.uPalA.value=this.textures[this.palFrom],e.uPalB.value=this.textures[this.palTo],e.uPalMix.value=this.palMix,e.uDepth.value=t,e.uSpec.value=r}backdrop(e,t,r,o){const l=this.styleUniform.value;if(l===0){gv(e,t,r,o);return}const c=Math.max(0,Math.min(1,o));if(e.globalCompositeOperation="source-over",e.globalAlpha=1,e.fillStyle="#000",e.fillRect(0,0,t,r),l===2||c<=0)return;const f=Yl[this.palTo],d=f.find(([g])=>g===(l===1?.53:.17))??f[0],[h,m,x]=Mc(d[1]);e.globalAlpha=c,e.fillStyle=dv(h+this.turn.hue,m*this.turn.sat,l===1?x*1.25:x),e.fillRect(0,0,t,r),e.globalAlpha=1}dispose(){for(const e of this.textures)e.dispose();this.textures=[]}}function mv(s,e,t){const r=e/t,o=30,l=Math.tan(o/2*Math.PI/180),c=r<16/9?2*Math.atan(l*(16/9)/r)*180/Math.PI:o;(s.aspect!==r||s.fov!==c)&&(s.aspect=r,s.fov=c,s.updateProjectionMatrix())}function gv(s,e,t,r){const o=Math.max(0,Math.min(1,r)),l=c=>{const f=parseInt(c.slice(1),16),d=Math.round((f>>16&255)*o),h=Math.round((f>>8&255)*o),m=Math.round((f&255)*o);return`rgb(${d},${h},${m})`};if(s.globalCompositeOperation="source-over",s.globalAlpha=1,o<=0)s.fillStyle="#000";else{const c=s.createLinearGradient(0,0,0,t);c.addColorStop(0,l("#8e94a2")),c.addColorStop(.2,l("#bfc3d0")),c.addColorStop(.42,l("#dde1ec")),c.addColorStop(.68,l("#d9dde9")),c.addColorStop(1,l("#9ea2af")),s.fillStyle=c}s.fillRect(0,0,e,t)}function vv(s){const e=new uv({canvas:s,antialias:!0,alpha:!0,powerPreference:"high-performance"});return e.setPixelRatio(1),e.setClearColor(0,0),e}function xv(s,e,t,r){s.fillStyle="#000",s.fillRect(0,0,e,t),s.fillStyle="rgba(255,255,255,0.4)",s.font="500 14px ui-monospace, monospace",s.textAlign="center",s.fillText(`${r} NEEDS WEBGL`,e/2,t/2)}class So{constructor(e){K(this,"dt",1/60);K(this,"step",0);K(this,"openness");K(this,"aim",{x:0,y:0});K(this,"spread",.4);K(this,"depth",.35);K(this,"turn",0);K(this,"pinch",0);K(this,"fist",0);K(this,"clapped",!1);K(this,"clapStrength",0);K(this,"wasClapping",!1);K(this,"burst",0);K(this,"bump",0);K(this,"bass",0);K(this,"mid",0);K(this,"high",0);K(this,"kick",0);K(this,"snare",0);K(this,"hat",0);K(this,"energy",.5);K(this,"build",0);K(this,"drop",0);K(this,"bright",.5);K(this,"lastClock",null);K(this,"lastFrame",0);this.rest=e,this.openness=e}read(e,t){const r=performance.now(),o=this.lastFrame?Math.min(.1,(r-this.lastFrame)/1e3):1/60;this.lastFrame=r;const l=WE();this.step=this.lastClock===null?0:Math.max(-.2,Math.min(.2,l-this.lastClock)),this.lastClock=l,this.dt=o;const c=[e.left,e.right].filter(Boolean);let f=this.rest;if(c.length){const w=Math.max(...c.map(b=>b.gesture==="fist"?0:b.fingerCount??3));f=Math.max(0,Math.min(1,w/5))}this.openness+=(f-this.openness)*(1-Math.exp(-o*5));let d=0,h=0;c.length&&(d=(c.reduce((w,b)=>w+b.position.x,0)/c.length-.5)*2,h=(.5-c.reduce((w,b)=>w+b.position.y,0)/c.length)*2);const m=1-Math.exp(-o*4);this.aim.x+=(d-this.aim.x)*m,this.aim.y+=(h-this.aim.y)*m,this.spread+=((e.distanceBetweenHands??.4)-this.spread)*m;const x=c.map(w=>w.depth).filter(w=>w!==void 0);this.depth+=((x.length?Math.max(...x):.35)-this.depth)*m;const g=e.twist??(c.length===1?c[0].angle??0:0);this.turn+=(g-this.turn)*m;const _=c.length?Math.max(...c.map(w=>w.pinch??0)):0;this.pinch+=(_-this.pinch)*(1-Math.exp(-o*10));const S=c.length?Math.max(...c.map(w=>w.openness!==void 0?1-w.openness:w.gesture==="fist"?1:0)):0;this.fist+=(Math.min(1,Math.max(0,(S-.35)/.4))-this.fist)*(1-Math.exp(-o*8));const T=!!e.clapping&&!e.synthetic;this.clapped=T&&!this.wasClapping,this.clapStrength=this.clapped?Math.max(.6,e.clapIntensity??1):0,this.wasClapping=T;const y=e.clapping?e.clapIntensity??1:0;this.burst=Math.max(this.burst*Math.exp(-o*2.2),y);const M=(w,b,P,B)=>w+(b-w)*(1-Math.exp(-o*(b>w?P:B)));this.bass=M(this.bass,(t==null?void 0:t.bass)??0,6,1.5),this.mid=M(this.mid,(t==null?void 0:t.mid)??0,4,1),this.high=M(this.high,(t==null?void 0:t.high)??0,8,2.5),this.bump*=Math.exp(-o/.07),t!=null&&t.beat&&(this.bump=Math.max(this.bump,t.beatIntensity||1)),this.kick=(t==null?void 0:t.kick)??0,this.bump=Math.max(this.bump,this.kick*.9),this.snare=(t==null?void 0:t.snare)??0,this.hat=(t==null?void 0:t.hat)??0,this.energy=M(this.energy,t!=null&&t.live?t.energy??.5:.5,1,1),this.build=(t==null?void 0:t.build)??0,this.drop=(t==null?void 0:t.drop)??0,this.bright=M(this.bright,(t==null?void 0:t.bright)??.5,1,1)}}class JE{constructor(e,t){K(this,"canvas");K(this,"ctx");K(this,"cfg",Fm);K(this,"playing",new So(.6));K(this,"n",0);K(this,"x",new Float32Array(0));K(this,"y",new Float32Array(0));K(this,"z",new Float32Array(0));K(this,"vx",new Float32Array(0));K(this,"vy",new Float32Array(0));K(this,"light",new Float32Array(0));K(this,"phase",new Float32Array(0));K(this,"time",0);K(this,"events",[]);K(this,"lastKick",0);K(this,"lastSnare",0);K(this,"lastHat",0);K(this,"kicks",0);K(this,"flow",[Math.random()*10,Math.random()*10,Math.random()*10]);K(this,"flowTo",[...this.flow]);K(this,"gather",0);K(this,"breath",0);K(this,"grain",document.createElement("canvas"));K(this,"aspect",16/9);this.canvas=e,this.ctx=t,this.grain.width=this.grain.height=256;const r=this.grain.getContext("2d"),o=r.createImageData(256,256);for(let l=0;l<o.data.length;l+=4){const c=Math.random()<.5?0:255;o.data[l]=o.data[l+1]=o.data[l+2]=c,o.data[l+3]=Math.random()<.35?255:0}r.putImageData(o,0,0)}setParams(e){this.cfg=vo(Fm,e)}resize(e){const t=Math.min(this.n,e),r=o=>{const l=new Float32Array(e);return l.set(o.subarray(0,t)),l};this.x=r(this.x),this.y=r(this.y),this.z=r(this.z),this.vx=r(this.vx),this.vy=r(this.vy),this.light=r(this.light),this.phase=r(this.phase);for(let o=t;o<e;o++)this.x[o]=Math.random()*this.aspect,this.y[o]=Math.random(),this.z[o]=.25+.75*Math.pow(Math.random(),2.2),this.phase[o]=Math.random()*Math.PI*2,this.light[o]=0;this.n=e}angleAt(e,t,r){const[o,l,c]=this.flow;return Math.sin(e*1.3+o+r*.05)*1.7+Math.cos(t*1.7-l+r*.04)*1.5+Math.sin((e+t)*.8+c)*1.2}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,d=o.height;if(!f||!d)return;this.aspect=f/d;const h=this.aspect,m=this.playing;m.read(e,r);const x=Math.min(.1,m.dt),g=Math.min(.08,Math.max(0,m.step));this.time+=g;const _=Math.max(50,Math.min(6e3,Math.round(c.field.count)));_!==this.n&&this.resize(_);const S=!!(r!=null&&r.live),T=F=>1-Math.exp(-x*F),y=Math.max(m.kick,m.bump)*c.sound.beat;if(y>.45&&this.lastKick<=.45){this.kicks+=1;const F=Math.random(),$=(.5+.6*Math.random())*Math.min(1.4,y),U=F<.5?0:F<.82?1:2;this.events.push({kind:U,x:Math.random()*h,y:.1+.8*Math.random(),age:0,strength:$,angle:Math.random()*Math.PI,reach:.2+.5*Math.random()}),this.kicks%(6+Math.floor(Math.random()*6))===0&&(this.flowTo=this.flowTo.map(V=>V+(Math.random()-.5)*4))}this.lastKick=y;const M=(F,$)=>{for(let U=0;U<F;U++){const V=Math.floor(Math.random()*this.n);this.light[V]=Math.max(this.light[V],$)}},w=m.snare*c.sound.sparks;w>.5&&this.lastSnare<=.5&&M(Math.round(this.n*.012),1.1),this.lastSnare=w;const b=m.hat*c.sound.sparks;if(b>.5&&this.lastHat<=.5&&M(Math.round(this.n*.004),.7),this.lastHat=b,!S&&Math.random()<x*.35&&this.events.push({kind:0,x:Math.random()*h,y:Math.random(),age:0,strength:.45,angle:0,reach:.4}),m.clapped&&c.hands.clap>0)for(let F=0;F<this.n;F++){this.light[F]=Math.max(this.light[F],1.2*c.hands.clap);const $=this.x[F]-h/2,U=this.y[F]-.5,V=Math.hypot($,U)+.05;this.vx[F]+=$/V*.25*c.hands.clap,this.vy[F]+=U/V*.25*c.hands.clap}this.breath+=(m.bass*c.sound.bass-this.breath)*T(4);for(let F=0;F<3;F++)this.flow[F]+=(this.flowTo[F]-this.flow[F])*T(.3);const B=!e.synthetic?[e.left,e.right].filter(F=>!!F):[],I=B.length?m.fist:0,k=Math.max(Math.min(1,c.form.circle),I*Math.min(1,c.hands.reach));this.gather+=(k-this.gather)*T(k>this.gather?.9:.6);const A=.018*c.field.drift,D=this.time,j=h/2,z=.5,Y=.3,le=D*.04,ce=Math.exp(-x*2.2);for(let F=0;F<this.n;F++){const $=this.z[F],U=this.angleAt(this.x[F],this.y[F],D);let V=this.x[F]+(Math.cos(U)*A*$+this.vx[F])*g,ye=this.y[F]+(Math.sin(U)*A*$+this.vy[F])*g;V+=(V-j)*this.breath*.004*$,ye+=(ye-z)*this.breath*.004*$;for(const Me of B){const xe=Me.position.x*h,q=Me.position.y,re=V-xe,W=ye-q,de=re*re+W*W,Te=Math.exp(-de/.02)*(1-I)*c.hands.reach;if(Te>.01){const pe=Math.sqrt(de)+.01;V+=re/pe*Te*.006,ye+=W/pe*Te*.006,this.light[F]=Math.max(this.light[F],Te*.9)}}if(this.gather>.002){const Me=this.phase[F]+le,xe=Y*(.94+.12*(F*.618%1))*(1+.06*this.breath),q=j+Math.cos(Me)*xe,re=z+Math.sin(Me)*xe,W=this.gather*this.gather*T(1.6);V+=(q-V)*W,ye+=(re-ye)*W}V<-.02?V+=h+.04:V>h+.02&&(V-=h+.04),ye<-.02?ye+=1.04:ye>1.02&&(ye-=1.04),this.x[F]=V,this.y[F]=ye,this.vx[F]*=ce,this.vy[F]*=ce,this.light[F]*=Math.exp(-x*(1.6+.8*Math.random()))}for(const F of this.events){F.age+=x;const $=F.age*.55;for(let U=0;U<this.n;U++){const V=this.x[U]-F.x,ye=this.y[U]-F.y;let Me=0;if(F.kind===0){const xe=Math.hypot(V,ye)-$;Me=Math.exp(-(xe*xe)/.0012)}else if(F.kind===1)F.age<x*1.5&&Math.hypot(V,ye)<F.reach*.6&&Math.random()<.35&&(Me=.6+Math.random()*.6);else{const xe=Math.cos(F.angle),q=Math.sin(F.angle),re=V*-q+ye*xe-(F.age-.6)*.08;Me=Math.exp(-(re*re)/25e-5)*(Math.abs(V*xe+ye*q)<F.age*1.4?1:0)}Me>.02&&(this.light[U]=Math.max(this.light[U],1.6*Me*F.strength*(1-F.age/2.2)))}}this.events=this.events.filter(F=>F.age<2.2),l.globalCompositeOperation="source-over",l.globalAlpha=1-.92*Math.max(0,Math.min(1,c.look.trail)),l.fillStyle="#000",l.fillRect(0,0,f,d),l.globalAlpha=1;const G=8,ne=[];for(let F=0;F<G;F++)ne.push(new Path2D);const X=Math.max(.6,d/720*1.6*c.field.size),O=.2*c.look.glow;for(let F=0;F<this.n;F++){const $=this.z[F],U=.6+.4*Math.sin(D*.7+this.phase[F]*5),V=Math.min(1,(O*U+this.light[F])*(.35+.65*$)+.2*this.gather*$);if(V<.03)continue;const ye=Math.min(G-1,Math.floor(V*G)),Me=X*(.5+$)*(1+.6*Math.min(1,this.light[F]));ne[ye].rect(this.x[F]*d-Me/2,this.y[F]*d-Me/2,Me,Me)}for(let F=0;F<G;F++)l.globalAlpha=(F+.5)/G,l.fillStyle="#fff",l.fill(ne[F]);if(c.look.grain>.01){l.globalCompositeOperation="lighter",l.globalAlpha=.05*c.look.grain;const F=Math.floor(Math.random()*256),$=Math.floor(Math.random()*256),U=l.createPattern(this.grain,"repeat");U&&(l.save(),l.translate(-F,-$),l.fillStyle=U,l.fillRect(F,$,f,d),l.restore())}l.globalAlpha=1,l.globalCompositeOperation="source-over"}}const q0={line:{count:14,weight:1,wave:1,birth:1,zoom:1,speed:1},hands:{open:1,pull:1,clap:1},sound:{beat:1,bass:1,grow:1}},Y0=110,$E=5;function Q0(s){const e=s.replace("#",""),t=e.length===3?e.split("").map(r=>r+r).join(""):e;return[parseInt(t.slice(0,2),16)||0,parseInt(t.slice(2,4),16)||0,parseInt(t.slice(4,6),16)||0]}class ew{constructor(e,t){K(this,"canvas");K(this,"ctx");K(this,"cfg",q0);K(this,"playing",new So(.5));K(this,"age",0);K(this,"time",0);K(this,"unfold",0);K(this,"breath",0);K(this,"shiver",0);K(this,"pulses",[]);K(this,"lastKick",0);K(this,"hand",{x:.5,y:.5,hold:0});K(this,"idle",0);this.canvas=e,this.ctx=t}setParams(e){this.cfg=vo(q0,e)}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,d=o.height;if(!f||!d)return;const h=this.playing;h.read(e,r);const{dt:m}=h,x=Math.max(0,h.step);this.age+=x,this.time+=x*Math.max(0,c.line.speed),this.idle+=m;const g=F=>1-Math.exp(-m*F),_=[e.left,e.right].filter(Boolean),S=_.length>0&&!e.synthetic,T=!!(r!=null&&r.live);let y;S?y=(1-h.fist)*c.hands.open:T?y=(.12+.88*h.energy)*c.sound.grow:y=.35+.3*Math.sin(this.idle*.21),this.unfold+=(Math.min(1,Math.max(0,y))-this.unfold)*g(S?5:.8),this.breath+=(h.bass*c.sound.bass-this.breath)*g(3),h.clapped&&(this.shiver=Math.min(1.4,h.clapStrength*1.3*c.hands.clap)),this.shiver*=Math.exp(-m*2.4);const M=Math.max(h.kick,h.bump)*c.sound.beat;M>.45&&this.lastKick<=.45&&(this.pulses.push({at:0,strength:Math.min(1.2,M)}),this.pulses.length>$E&&this.pulses.shift()),this.lastKick=M;for(const F of this.pulses)F.at+=m*.75;if(this.pulses=this.pulses.filter(F=>F.at<.75),_.length){const F=_.reduce((U,V)=>U+V.position.x,0)/_.length,$=_.reduce((U,V)=>U+V.position.y,0)/_.length;this.hand.x+=(F-this.hand.x)*g(8),this.hand.y+=($-this.hand.y)*g(8)}this.hand.hold+=((S?c.hands.pull:0)-this.hand.hold)*g(4);const w=c.line.birth,b=w<=0?1:Math.min(1,Math.max(0,(this.age-1.6*w)/(5*w))),P=b*b*(3-2*b),B=w<=0?0:Math.max(0,1-this.age/(2.4*w));l.globalCompositeOperation="source-over",l.globalAlpha=1,l.fillStyle="#000",l.fillRect(0,0,f,d);const I=Math.max(1,Math.round(c.line.count)),[k,A,D]=Q0(t[0]??"#8899ff"),[j,z,Y]=Q0(t[2]??t[1]??"#ffffff"),le=Math.max(.1,c.line.zoom),ce=d*le,G=d/720*le,ne=ce*.74*this.unfold*(1+.12*this.breath),X=c.line.wave,O=this.time;if(l.lineCap="round",l.lineJoin="round",l.globalCompositeOperation="lighter",B>.01){const F=(3+2.5*Math.sin(this.idle*2.2))*G*(1+this.breath);l.globalAlpha=Math.min(1,B*1.4),l.fillStyle="#fff",l.beginPath(),l.arc(f/2,d/2,Math.max(1,F),0,Math.PI*2),l.fill()}if(P>.002){const F=.5-.5*P,$=.5+.5*P;for(let U=0;U<I;U++){const V=I===1?0:U/(I-1)*2-1,ye=V*2.6*this.unfold,Me=this.shiver*Math.sin(U*12.9898)*43758.5453,xe=(Me-Math.floor(Me)-.5)*this.shiver*ce*.09;l.beginPath();let q=0,re=0;for(let Ve=0;Ve<=Y0;Ve++){const tt=F+($-F)*(Ve/Y0),nt=Math.sin(Math.PI*tt);let it=d/2+V*ne*.5;it+=(Math.sin(tt*6.2+O*.55+ye)*.6+Math.sin(tt*13.7-O*.38+ye*1.7)*.25)*ce*.035*X*nt*(.35+.65*this.unfold+this.breath*.6),it+=xe*nt*Math.sin(tt*20+U);for(const yt of this.pulses){const N=Math.abs(tt-.5)-yt.at;it-=Math.exp(-(N*N)/.0016)*yt.strength*ce*.05*(1-yt.at/.75)*(V===0?1:Math.sign(V)*-1)}if(this.hand.hold>.01){const yt=tt-this.hand.x,N=Math.exp(-(yt*yt)/.022)*Math.min(1,this.hand.hold)*.85;it+=(this.hand.y*d-it)*N}const ct=tt*f;Ve===0?l.moveTo(ct,it):l.quadraticCurveTo(q,re,(q+ct)/2,(re+it)/2),q=ct,re=it}l.lineTo(q,re);const W=Math.abs(V)*this.unfold,de=Math.round(255+(k+(j-k)*(V*.5+.5)-255)*W),Te=Math.round(255+(A+(z-A)*(V*.5+.5)-255)*W),pe=Math.round(255+(D+(Y-D)*(V*.5+.5)-255)*W),Fe=1/(1+(I-1)*(1-this.unfold)),Ae=c.line.weight*G*(1+.35*M);l.strokeStyle=`rgb(${de},${Te},${pe})`,l.globalAlpha=Math.min(1,.16*Fe*2.2),l.lineWidth=7*Ae,l.stroke(),l.globalAlpha=Math.min(1,.95*Math.max(Fe,.3+.7*this.unfold)),l.lineWidth=1.5*Ae,l.stroke()}}l.globalAlpha=1,l.globalCompositeOperation="source-over"}}const Z0={colour:{speed:1,offset:0,palette:0,depth:.32},field:{count:3,zoom:1,sway:1,bounce:0,drift:.2,backdrop:1},hands:{wind:1,release:1,follow:1,clap:1},sound:{wind:1,gust:1,mid:1,high:1}};function rd(s,e){s.traverse(t=>{if(t instanceof On||t instanceof Oh||t instanceof Qg){t.geometry.dispose();const r=t.material;Array.isArray(r)?r.forEach(o=>o.dispose()):r.dispose()}}),s.clear(),e.dispose(),e.forceContextLoss()}const tw="/assets/dandelion-hJsSsoAd.bin";let ua=null;function nw(){return ua||(ua=fetch(tw).then(s=>{if(!s.ok)throw new Error(`dandelion.bin: ${s.status}`);return s.arrayBuffer()}).then(iw),ua.catch(()=>{ua=null})),ua}function iw(s){const e=new DataView(s);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="DNDL")throw new Error("Not a dandelion file");const r=e.getUint32(4,!0),o=JSON.parse(new TextDecoder().decode(new Uint8Array(s,8,r))),l=8+r,c=(q,re)=>new Float32Array(s.slice(l+q,l+q+re*4)),f=(q,re)=>new Int8Array(s.slice(l+q,l+q+re)),d=(q,re)=>new Uint8Array(s.slice(l+q,l+q+re)),h=(q,re)=>new Uint32Array(s.slice(l+q,l+q+re*4)),m=q=>{const re=o.parts[q],W=c(re.pos,re.count*3),de=f(re.nrm,re.count*3),Te=new Float32Array(re.count*3);for(let pe=0;pe<Te.length;pe++)Te[pe]=de[pe]/127;return{p:re,position:W,normal:Te,index:h(re.idx,re.index)}},x=["stem","base","bracts"].map(m);let g=0,_=0;for(const q of x)g+=q.p.count,_+=q.index.length;const S=new Float32Array(g*3),T=new Float32Array(g*3),y=new Float32Array(g),M=new Uint32Array(_);let w=0;{let q=0,re=0;x.forEach((W,de)=>{S.set(W.position,q*3),T.set(W.normal,q*3),y.fill(de===0?0:1,q,q+W.p.count);for(let Te=0;Te<W.index.length;Te++)M[re+Te]=W.index[Te]+q;if(de===0)for(let Te=1;Te<W.position.length;Te+=3)w=Math.min(w,W.position[Te]);q+=W.p.count,re+=W.index.length})}const b=new fn;b.setAttribute("position",new kt(S,3)),b.setAttribute("normal",new kt(T,3)),b.setAttribute("aRigid",new kt(y,1)),b.setIndex(new kt(M,1));const P=o.seeds,B=c(P.pivot,P.count*3),I=c(P.axis,P.count*3),k=m("achenes"),A=d(o.parts.achenes.seed,k.p.count),D=new Float32Array(k.p.count),j=new Float32Array(k.p.count*3);for(let q=0;q<k.p.count;q++){const re=A[q];D[q]=re,j[q*3]=B[re*3],j[q*3+1]=B[re*3+1],j[q*3+2]=B[re*3+2]}const z=new fn;z.setAttribute("position",new kt(k.position,3)),z.setAttribute("normal",new kt(k.normal,3)),z.setAttribute("aSeed",new kt(D,1)),z.setAttribute("aPivot",new kt(j,3)),z.setIndex(new kt(k.index,1));const Y=P.segments,le=c(P.a,Y*3),ce=c(P.b,Y*3),G=d(P.seed,Y),ne=c(P.ta,Y),X=c(P.tb,Y),O=new Float32Array(Y*4*3),F=new Float32Array(Y*4*3),$=new Float32Array(Y*4*3),U=new Float32Array(Y*4*2),V=new Float32Array(Y*4),ye=new Float32Array(Y*4),Me=new Uint32Array(Y*6);for(let q=0;q<Y;q++){const re=G[q];for(let de=0;de<4;de++){const Te=q*4+de;O.set(le.subarray(q*3,q*3+3),Te*3),F.set(ce.subarray(q*3,q*3+3),Te*3),$.set(B.subarray(re*3,re*3+3),Te*3);const pe=de>>1,Fe=de&1?1:-1;U[Te*2]=pe,U[Te*2+1]=Fe,V[Te]=re,ye[Te]=pe?X[q]:ne[q]}const W=q*4;Me.set([W,W+1,W+2,W+2,W+1,W+3],q*6)}const xe=new fn;xe.setAttribute("position",new kt(O,3)),xe.setAttribute("aB",new kt(F,3)),xe.setAttribute("aPivot",new kt($,3)),xe.setAttribute("aCorner",new kt(U,2)),xe.setAttribute("aSeed",new kt(V,1)),xe.setAttribute("aT",new kt(ye,1)),xe.setIndex(new kt(Me,1));for(const q of[b,z,xe])q.boundingSphere=new _o(new J(0,-5,0),1e4);return{body:b,achenes:z,strokes:xe,seeds:P.count,pivot:B,axis:I,foot:w}}const lo=20,kf=[1.4,3.2],Bf=[2.6,4.6],Sa=`
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
`,rw=`
${Sa}
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
}`,J0=`
${Sa}
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
}`,sw=`
${Sa}
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
}`,ow=`
${Sa}
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
}`,aw=`
${Sa}
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
}`;function zf(s,e){let t=0,r=1/e;for(;s>0;)t+=s%e*r,s=Math.floor(s/e),r/=e;return t}function Ni(s){const e=Math.sin(s*127.1+311.7)*43758.5453;return e-Math.floor(e)}const Hf=Array.from({length:lo},(s,e)=>({x:e===0?0:zf(e+1,2)*2-1,z:e===0?0:-4.6+zf(e,3)*6,y:e===0?.3:-.4+zf(e,5)*1.9,k:e===0?1:.85+Ni(e)*.3,yaw:Ni(e+40)*Nn,ph:Ni(e+80)*Nn,off:e*.137%1}));class lw{constructor(e,t,r=null){K(this,"canvas");K(this,"ctx");K(this,"cfg",Z0);K(this,"surface");K(this,"renderer",null);K(this,"host");K(this,"scene");K(this,"camera");K(this,"group",new Bi);K(this,"depth",0);K(this,"scale",1);K(this,"look",null);K(this,"playing",new So(.5));K(this,"failed",!1);K(this,"model",null);K(this,"flowers",[]);K(this,"materials",[]);K(this,"started",!1);K(this,"since",0);K(this,"seedTex",null);K(this,"seedData",new Float32Array(0));K(this,"off",new Float32Array(0));K(this,"vel",new Float32Array(0));K(this,"turn",new Float32Array(0));K(this,"hold",new Float32Array(0));K(this,"away",new Uint8Array(0));K(this,"thresh",new Float32Array(0));K(this,"flight",new Float32Array(0));K(this,"dest",new Float32Array(0));K(this,"phase",new Float32Array(0));K(this,"motionTime",0);K(this,"colourTime",0);K(this,"gust",0);K(this,"lastBeat",!1);K(this,"lastClap",!1);K(this,"hop",0);K(this,"dance",0);K(this,"sinceClap",99);K(this,"lastAim",{x:0,y:0});K(this,"swipe",new Pt);K(this,"present",0);K(this,"strokeWidth",null);K(this,"viewport",null);K(this,"time",null);this.canvas=e,this.ctx=t,this.host=r,this.scene=r?r.scene:new $h,this.camera=r?r.camera:new $n(30,16/9,.1,200),this.surface=document.createElement("canvas");try{r||(this.renderer=vv(this.surface)),this.look=r?r.look:new pv}catch(o){console.error("Dandelion could not start:",o),this.failed=!0;return}nw().then(o=>{this.look&&this.build(o)}).catch(o=>{console.error("Dandelion model failed to load:",o),this.failed=!0})}setParams(e){this.cfg=vo(Z0,e)}isReady(){return this.model!==null||this.failed}build(e){const t=this.look,r=e.seeds,o=r*lo;this.seedData=new Float32Array(r*2*lo*4),this.seedTex=new Kg(this.seedData,r*2,lo,yi,ki),this.seedTex.magFilter=pn,this.seedTex.minFilter=pn,this.seedTex.needsUpdate=!0,this.off=new Float32Array(o*3),this.vel=new Float32Array(o*3),this.turn=new Float32Array(o*4);for(let m=0;m<o;m++)this.turn[m*4+3]=1;this.hold=new Float32Array(o),this.away=new Uint8Array(o),this.thresh=new Float32Array(o),this.flight=new Float32Array(o),this.dest=new Float32Array(o*3),this.phase=new Float32Array(o);for(let m=0;m<o;m++)this.thresh[m]=.12+Ni(m*3.7+1)*1,this.phase[m]=Ni(m*1.3+7)*Nn;const l={value:new Pt(1,1)},c={value:0},f={value:e.foot},d={value:this.seedTex},h={value:1.5};this.strokeWidth=h,this.viewport=l,this.time=c;for(let m=0;m<lo;m++){const x=t.shared(),g={uBend:{value:new J},uWave:{value:new Pt},uWavePhase:{value:0},uRow:{value:m},uShimmer:{value:0}},_={...x,...g,uViewport:l,uTime:c,uFoot:f,uSeeds:d},S=(M,w,b={})=>{const P=new Mi({vertexShader:M,fragmentShader:w,uniforms:{..._,...b},side:Fi});return this.materials.push(P),P},T=new Bi;T.add(new On(e.body,S(rw,J0))),T.add(new On(e.achenes,S(sw,J0)));const y=S(ow,aw,{uWidth:h});y.transparent=!0,y.depthWrite=!1,T.add(new On(e.strokes,y));for(const M of T.children)M.frustumCulled=!1;T.visible=!1,this.group.add(T),this.flowers.push({root:T,shared:x,u:g,presence:0,at:new J,size:1,placed:!1,bend:new Pt})}this.scene.add(this.group),this.model=e}pickDestination(e,t,r){const o=-4+Math.random()*6,l=(15.5-o)*t;this.dest[e*3]=(Math.random()*2-1)*l*r*.92,this.dest[e*3+1]=.1+(Math.random()*1.75-.85)*l,this.dest[e*3+2]=o}destroy(){var e,t;this.host||(e=this.look)==null||e.dispose(),this.look=null,(t=this.seedTex)==null||t.dispose();for(const r of this.materials)r.dispose();for(const r of this.flowers)r.root.clear();this.scene.remove(this.group),this.renderer&&rd(this.scene,this.renderer),this.renderer=null}render(e,t,r){const{ctx:o,cfg:l}=this,c=this.canvas.width,f=this.canvas.height;if(c===0||f===0)return;const d=this.renderer;if(this.failed||!d||!this.look){xv(o,c,f,"DANDELION");return}gv(o,c,f,l.field.backdrop),this.model&&(mv(this.camera,c,f),this.camera.position.set(0,.5,15.5/Math.max(.3,l.field.zoom)),this.camera.lookAt(0,.1,0),this.update(e,t,r,c,f),(this.surface.width!==c||this.surface.height!==f)&&d.setSize(c,f,!1),d.render(this.scene,this.camera),o.drawImage(this.surface,0,0,c,f))}update(e,t,r,o,l){const{cfg:c}=this,f=this.look,d=this.model;if(!f||!d||this.failed)return;const h=this.playing;h.read(e,r);const{dt:m}=h,x=Math.max(0,h.step),g=e.left||e.right?1:0;this.present+=(g-this.present)*(1-Math.exp(-m*3));const _=Math.min(1,((r==null?void 0:r.overall)??0)*1.4)*c.sound.wind;this.motionTime+=x,this.colourTime+=(x*c.colour.speed*(1+h.mid*c.sound.mid*1.2)+m*h.burst*c.hands.clap*.9)/rc;const S=this.motionTime,T=!!(r!=null&&r.beat),y=T&&!this.lastBeat,M=y&&c.sound.gust>0;this.hop=Math.max(this.hop*Math.exp(-m*5),y?(r==null?void 0:r.beatIntensity)||1:0),this.dance+=x,this.lastBeat=T,M&&(this.gust=Math.max(this.gust,((r==null?void 0:r.beatIntensity)||1)*c.sound.gust)),this.gust*=Math.exp(-m*2.5);const w=!!e.clapping&&c.hands.clap>0,b=w&&!this.lastClap;this.lastClap=w,this.sinceClap+=m;const P=Math.min(1,this.sinceClap/4)**3;b&&(this.sinceClap=0);const B=h.aim.x-this.lastAim.x,I=h.aim.y-this.lastAim.y;this.lastAim={x:h.aim.x,y:h.aim.y};const k=g?B/Math.max(m,.001):0,A=g?I/Math.max(m,.001):0;this.swipe.x+=(k-this.swipe.x)*(1-Math.exp(-m*6)),this.swipe.y+=(A-this.swipe.y)*(1-Math.exp(-m*6));const D=.5*Math.sin(S*.11)+.25*Math.sin(S*.27+1.3),j=.25+_*1.6+this.gust*1.2,z=new J(Math.cos(D)*j,.15*Math.sin(S*.19),Math.sin(D)*j*.4);z.x+=sf.clamp(this.swipe.x,-4,4)*1.6*c.hands.wind,z.y+=sf.clamp(this.swipe.y,-4,4)*1*c.hands.wind;const Y=g?sf.clamp((h.openness-.6)/.4,-1,1)*c.hands.release:0,le=c.field.drift,ce=Math.min(1,le*2),G=Math.sqrt(Math.min(1,3/Math.max(1,Math.round(c.field.count)))),ne=Math.min(.72,G*(le*(.25+_*.45)+Y*.3*this.present*ce)),X=P*Math.min(1,c.hands.clap)*ce*G,O=Math.min(1,ne*5),F=g&&h.openness<.15&&c.hands.release>0,$=!this.started;this.host||f.update(t,c.colour.palette,m,$);const U=Math.tan(this.camera.fov/2*Math.PI/180),V=o/l,ye=Math.max(0,Math.min(lo,Math.round(c.field.count))),Me=Math.max(1,ye);this.since+=m;const xe=hv(this.since,ye),q=2.2*Math.pow(Me,-.42)*this.scale;let re=0;for(let N=0;N<Me;N++)re+=Hf[N].x;re/=Me;let W=0;for(let N=0;N<Me;N++)W=Math.max(W,Math.abs(Hf[N].x-re));const de=new J(h.aim.x*5.2,.1+h.aim.y*3,2),Te=1.2*Math.max(.4,1+(h.spread-.4)*1.6),pe=d.seeds,Fe=new J,Ae=new Qi,Ve=new Qi,tt=new Qi,nt=new J,it=new J(0,1,0),ct=new J(1,0,0),yt=this.seedData;this.flowers.forEach((N,xt)=>{const ot=Hf[xt],gt=xt<xe;if(N.presence+=((gt?1:0)-N.presence)*(1-Math.exp(-m*1.4)),$&&(N.presence=0),!gt&&N.presence<.004&&(N.presence=0),N.root.visible=N.presence>.002,!N.root.visible){N.placed=!1,this.off.fill(0,xt*pe*3,(xt+1)*pe*3),this.vel.fill(0,xt*pe*3,(xt+1)*pe*3),this.away.fill(0,xt*pe,(xt+1)*pe),this.flight.fill(0,xt*pe,(xt+1)*pe);return}const Ee=q*ot.k,lt=(Me===1?0:ot.z)+this.depth,L=(15.5-lt)*U*V,E=Me===1?0:(ot.x-re)/Math.max(.5,W)*L*(.66+.24*Math.min(1,(Me-1)/12)),ie=.1-(15.5-lt)*U,_e=.1+(15.5-lt)*U;let Se=Me===1?ot.y:ot.y*Math.min(1,.5+Me*.1);Se=Math.min(Se,ie-d.foot*Ee-.4,_e-Ee*1.5),Fe.set(E,Se,lt),N.placed||(N.at.copy(Fe),N.size=Ee,N.placed=!0),N.at.lerp(Fe,1-Math.exp(-m*1.2)),N.size+=(Ee-N.size)*(1-Math.exp(-m*1.2));const Re=1-Math.pow(1-N.presence,3);N.root.position.set(N.at.x,N.at.y-(1-Re)*-d.foot*N.size*.8,N.at.z),N.root.rotation.y=ot.yaw,N.root.scale.setScalar(N.size*(.6+.4*Re));const Pe=N.root.scale.x,me=Math.cos(ot.yaw),ve=Math.sin(ot.yaw),ze=this.dance,Xe=N.at.x*.35,Ne=c.field.sway*(.45+_*1),Ue=Ne*(.85*Math.sin(Nn*ze/5.2-Xe+ot.ph*.3)+.15*Math.sin(Nn*ze/3.3+ot.ph*1.7))+z.x*.22+this.gust*.5,ut=Ne*.3*Math.sin(Nn*ze/7.1+ot.ph*2.3)+z.z*.22;N.bend.x+=(Ue-N.bend.x)*(1-Math.exp(-m*1.6)),N.bend.y+=(ut-N.bend.y)*(1-Math.exp(-m*1.6));const ft=N.bend.x,Mt=N.bend.y;N.u.uBend.value.set(ft*me-Mt*ve,0,ft*ve+Mt*me);const Q=c.field.sway*(.12+_*.3);N.u.uWave.value.set(Q*me,Q*ve),N.u.uWavePhase.value=Nn*ze/1.6-Xe*2+ot.ph;const De=c.field.bounce*N.size*((.08+_*.22)*Math.sin(Nn*ze/1.2-Xe+ot.ph)+.3*this.hop*(.6+.4*Ni(xt+7)));N.root.position.y+=De,N.u.uShimmer.value=h.high*c.sound.high*2;const he=N.root.position.x+ft*Pe,We=N.root.position.y,Oe=N.root.position.z+Mt*Pe;for(let qe=0;qe<pe;qe++){const je=xt*pe+qe,At=je*3;b&&Ni(je*1.37+S*7.3)<X?this.hold[je]=Bf[0]+Ni(je+S)*(Bf[1]-Bf[0]):M&&Ni(je*.71+S*13.1)<.008*c.sound.gust*le*G&&(this.hold[je]=kf[0]+Ni(je+S*3.1)*(kf[1]-kf[0])),this.hold[je]=Math.max(0,this.hold[je]-m);const It=.06*O*Math.sin(S*.37+this.phase[je]);F&&(this.flight[je]=0);const an=!F&&(this.hold[je]>0||this.flight[je]>0||ne+It>this.thresh[je]),kn=d.pivot[qe*3],Si=d.pivot[qe*3+1],$i=d.pivot[qe*3+2],Ai=d.axis[qe*3],er=d.axis[qe*3+1],ti=d.axis[qe*3+2],Kr=Ai*me+ti*ve,As=-Ai*ve+ti*me;if(an&&!this.away[je]){this.flight[je]=6+Math.random()*6,this.pickDestination(je,U,V);const nn=.4+(b&&this.hold[je]>0?3.2*c.hands.clap*P:0);this.vel[At]+=Kr*nn,this.vel[At+1]+=er*nn+.2,this.vel[At+2]+=As*nn}this.away[je]=an?1:0;let ln=this.off[At],Cn=this.off[At+1],Bn=this.off[At+2],Rn=this.vel[At],zn=this.vel[At+1],Hn=this.vel[At+2];if(x>0||an){const nn=Math.max(x,0),R=he+(kn*me+$i*ve)*Pe+ln,te=We+Si*Pe+Cn,ue=Oe+(-kn*ve+$i*me)*Pe+Bn,ae=Math.sin(te*.9+S*.7+this.phase[je])*.6,oe=Math.sin(R*.7-S*.5+this.phase[je]*.5)*.45,Be=Math.sin(ue*.8+R*.5+S*.6)*.4;if(an){this.flight[je]=Math.max(0,this.flight[je]-nn);const Ge=je*3;let Ie=this.dest[Ge]-R,Ze=this.dest[Ge+1]-te,Je=this.dest[Ge+2]-ue;const ht=Math.hypot(Ie,Ze,Je);ht<.8&&this.pickDestination(je,U,V);const dt=(1.2+.9*Ni(je*2.9))*Math.min(1,ht/2);Ie=Ie/Math.max(ht,.001)*dt,Ze=Ze/Math.max(ht,.001)*dt,Je=Je/Math.max(ht,.001)*dt;let et=(Ie-Rn)*.7+z.x*.3+ae*.8,Ct=(Ze-zn)*.7+z.y*.3+oe*.8+.05,Bt=(Je-Hn)*.7+z.z*.3+Be*.6;if(this.present>.01&&c.hands.follow>0){const Et=de.x-R,vn=de.y-te,An=de.z-ue,St=Math.hypot(Et,vn,An)+.001,ni=this.present*c.hands.follow*Math.min(1,St/Te-.6);et+=Et/St*ni*2.2-vn/St*this.present*c.hands.follow*1.4,Ct+=vn/St*ni*2.2+Et/St*this.present*c.hands.follow*1.4,Bt+=An/St*ni*1.2}const Wt=(15.5-ue)*U,zt=Wt*V,Zt=Math.abs(R)-zt*1.02;Zt>0&&(et-=Math.sign(R)*Zt*1.5);const Ye=Math.abs(te-.1)-Wt*1.02;Ye>0&&(Ct-=Math.sign(te-.1)*Ye*1.5),ue>6&&(Bt-=(ue-6)*1.5),ue<-8&&(Bt+=(-8-ue)*1.5),Rn+=et*nn*1.6,zn+=Ct*nn*1.6,Hn+=Bt*nn*1.6;const rn=Math.exp(-nn*.5);Rn*=rn,zn*=rn,Hn*=rn}else{const Ge=Math.hypot(ln,Cn,Bn),Ie=Math.min(1.8,Ge*.9)/Math.max(Ge,1e-4),Ze=-ln*Ie+ae*Math.min(1,Ge)*.6,Je=-Cn*Ie+oe*Math.min(1,Ge)*.6,ht=-Bn*Ie+Be*Math.min(1,Ge)*.6,dt=1-Math.exp(-nn*2.4);Rn+=(Ze-Rn)*dt,zn+=(Je-zn)*dt,Hn+=(ht-Hn)*dt,Ge<.004&&Math.hypot(Rn,zn,Hn)<.02&&(ln=Cn=Bn=Rn=zn=Hn=0)}ln+=Rn*nn,Cn+=zn*nn,Bn+=Hn*nn}this.off[At]=ln,this.off[At+1]=Cn,this.off[At+2]=Bn,this.vel[At]=Rn,this.vel[At+1]=zn,this.vel[At+2]=Hn;const qr=Math.hypot(ln,Cn,Bn)/Pe,Yr=Math.min(1,qr/.8),ci=this.turn.subarray(je*4,je*4+4);if(Ae.set(ci[0],ci[1],ci[2],ci[3]),Yr>.001){nt.set(Ai,er,ti),tt.setFromUnitVectors(nt,it);const nn=S*.6+this.phase[je];Ve.setFromAxisAngle(it,nn),tt.premultiply(Ve),Ve.setFromAxisAngle(ct,.3*Math.sin(S*1.3+this.phase[je]*2)),tt.premultiply(Ve),Ve.identity().slerp(tt,Yr),Ae.slerp(Ve,1-Math.exp(-m*3))}else Ae.slerp(Ve.identity(),1-Math.exp(-m*6));ci[0]=Ae.x,ci[1]=Ae.y,ci[2]=Ae.z,ci[3]=Ae.w;const ui=(xt*pe*2+qe*2)*4,jt=(ln*me-Bn*ve)/Pe,Ao=(ln*ve+Bn*me)/Pe;yt[ui]=jt,yt[ui+1]=Cn/Pe,yt[ui+2]=Ao,yt[ui+3]=1-Math.min(1,qr/.6),yt[ui+4]=Ae.x,yt[ui+5]=Ae.y,yt[ui+6]=Ae.z,yt[ui+7]=Ae.w}const we=N.shared;we.uT.value=this.colourTime,we.uOff.value=ot.off+c.colour.offset,f.apply(we,c.colour.depth,.16*(1+h.high*c.sound.high*2))}),this.started=!0,this.seedTex.needsUpdate=!0,this.viewport.value.set(o,l),this.time.value=S,this.strokeWidth.value=Math.max(1,l/620)}}const $0={colour:{speed:1,offset:0,palette:0,style:0,depth:.32},swarm:{count:4,zoom:1,height:0,size:1,drift:1,pulse:1,tentacles:1,backdrop:1},hands:{follow:1,spread:1,clap:1},sound:{beat:1,bass:1,mid:1,high:1,flow:1,swell:0}};class cw{constructor(e,t,r=120,o=20){K(this,"mesh");K(this,"curve");K(this,"position");K(this,"normal");K(this,"points",[]);K(this,"tangents",[]);this.anchors=t,this.length=r,this.sides=o,this.curve=new Fy(t,!1,"centripetal");const l=(r+1)*(o+1),c=new fn;this.position=new kt(new Float32Array(l*3),3),this.normal=new kt(new Float32Array(l*3),3),this.position.setUsage(Wm),this.normal.setUsage(Wm);const f=new Float32Array(l*2),d=[];for(let h=0;h<=r;h++)for(let m=0;m<=o;m++){const x=h*(o+1)+m;if(f[x*2]=h/r,f[x*2+1]=m/o,h<r&&m<o){const g=x,_=x+o+1;d.push(g,_,g+1,_,_+1,g+1)}}c.setAttribute("position",this.position),c.setAttribute("normal",this.normal),c.setAttribute("uv",new kt(f,2)),c.setIndex(d);for(let h=0;h<=r;h++)this.points.push(new J),this.tangents.push(new J);this.mesh=new On(c,e),this.mesh.frustumCulled=!1}update(e,t=1){const{curve:r,points:o,tangents:l,length:c,sides:f}=this;r.updateArcLengths();for(let S=0;S<=c;S++)r.getPointAt(S/c,o[S]);for(let S=0;S<=c;S++){const T=o[Math.max(0,S-1)],y=o[Math.min(c,S+1)];l[S].subVectors(y,T).normalize()}const d=new J,h=new J,m=new J,x=l[0];d.set(0,0,1).addScaledVector(x,-x.z),d.lengthSq()<1e-6&&d.set(1,0,0).addScaledVector(x,-x.x),d.normalize();const g=this.position.array,_=this.normal.array;for(let S=0;S<=c;S++){const T=l[S];d.addScaledVector(T,-d.dot(T)).normalize(),h.crossVectors(T,d);const y=o[S],M=e*(1+(t-1)*(S/c));for(let w=0;w<=f;w++){const b=w/f*Nn;m.copy(d).multiplyScalar(-Math.cos(b)).addScaledVector(h,Math.sin(b));const P=(S*(f+1)+w)*3;g[P]=y.x+m.x*M,g[P+1]=y.y+m.y*M,g[P+2]=y.z+m.z*M,_[P]=m.x,_[P+1]=m.y,_[P+2]=m.z}}this.position.needsUpdate=!0,this.normal.needsUpdate=!0}}const eg=9,Ql=8,tg=4,Zl=9,ng=[{c:[.2,.9,0],a:[1.6,.5,.8],s:1.25,off:0,ph:0,pulses:6},{c:[-3.9,1.5,-1.2],a:[1.2,.6,.8],s:1,off:.37,ph:2.1,pulses:7},{c:[4.1,.4,-.8],a:[1.1,.7,.6],s:1.05,off:.71,ph:4,pulses:5},{c:[-2,-.9,1.2],a:[1.4,.4,.5],s:.8,off:.18,ph:1,pulses:8},{c:[2.4,2.4,-3],a:[1.3,.5,.8],s:.85,off:.55,ph:3.2,pulses:6},{c:[-5.6,-.4,-2.6],a:[.9,.6,.6],s:.8,off:.86,ph:5,pulses:7},{c:[5.8,2,-4],a:[.8,.5,.6],s:.7,off:.28,ph:.6,pulses:9},{c:[-.6,2.7,-5],a:[1.6,.4,.8],s:.7,off:.63,ph:2.7,pulses:8}],uw=[[],[0],[1,2],[0,1,2],[0,1,2,3],[0,1,2,3,4],[0,1,2,3,4,5],[0,1,2,3,4,5,6],[0,1,2,3,4,5,6,7]],Vf=.62,fw=.55;function ig(s,e,t=new J){return t.set(Math.sin(s)*.86*Math.cos(e),-.86*Math.sin(e)+.04,Math.cos(s)*.86*Math.cos(e))}function hw(s){const e=(s/Nn%1+1)%1;return e<.22?Math.sin(e/.22*(Math.PI/2)):.5+.5*Math.cos((e-.22)/.78*Math.PI)}class dw{constructor(e,t,r=null){K(this,"canvas");K(this,"ctx");K(this,"cfg",$0);K(this,"host");K(this,"surface");K(this,"renderer",null);K(this,"scene");K(this,"camera");K(this,"look",null);K(this,"group",new Bi);K(this,"swarm",[]);K(this,"geometries",[]);K(this,"failed",!1);K(this,"playing",new So(.6));K(this,"motionTime",0);K(this,"pace",1);K(this,"handHold",0);K(this,"colourTime",0);K(this,"started",!1);K(this,"since",0);K(this,"current",0);K(this,"carry",0);K(this,"swell",0);K(this,"bassAvg",0);this.canvas=e,this.ctx=t,this.host=r,this.surface=document.createElement("canvas"),this.scene=r?r.scene:new $h,this.camera=r?r.camera:new $n(30,16/9,.1,100);try{r||(this.renderer=vv(this.surface)),this.look=r?r.look:new pv,this.build(this.look)}catch(o){console.error("Jellyfish could not start:",o),this.failed=!0}}setParams(e){this.cfg=vo($0,e)}build(e){const t=new mc(1,44,30),r=new mc(1,40,26);this.geometries.push(t,r),this.scene.add(this.group);for(const o of ng){const l=e.shared(),c=e.shared(),f=new Bi;this.group.add(f);const d=[],h=[];for(let _=0;_<eg;_++){const S=_/eg*Nn,T=new Bi;T.rotation.y=S;const y=new Bi;y.rotation.x=Vf,T.add(y);const M=new On(t,e.material(qE,l,{uAng:{value:S}}));M.scale.set(.42,.18,.52),M.position.set(0,_*5%3*.02,.48),y.add(M),f.add(T),d.push(y),h.push(M)}const m=new On(r,e.material(QE,l));m.scale.set(.44,.26,.44),m.position.y=-.1,f.add(m);const x=[],g=e.material(YE,c,{uWS:{value:.6}});for(let _=0;_<Ql+tg;_++){const S=_>=Ql,T=S?(_-Ql)/tg*Nn+.4:_/Ql*Nn+.2,y=S?new J(Math.sin(T)*.08,-.25,Math.cos(T)*.08):ig(T,Vf),M=Array.from({length:Zl},()=>new J),w=new cw(g,M,S?48:64,S?10:6);this.group.add(w.mesh),x.push({tube:w,from:y,links:M,angle:S?null:T,link:S?.2:.42,radius:S?.085:.028,phase:T*1.7+_})}this.swarm.push({spec:o,root:f,tilts:d,lobes:h,cap:m,strands:x,shared:l,strandShared:c,presence:0,beat:o.ph,lift:0,rise:0,pull:new J,up:new J(0,1,0),last:null,primed:!1})}}destroy(){var e;this.host||(e=this.look)==null||e.dispose(),this.look=null;for(const t of this.geometries)t.dispose();this.host?(this.scene.remove(this.group),this.group.traverse(t=>{t.isMesh&&(t.geometry.dispose(),t.material.dispose())})):this.renderer&&rd(this.scene,this.renderer),this.renderer=null}render(e,t,r){const{ctx:o,cfg:l}=this,c=this.canvas.width,f=this.canvas.height;if(c===0||f===0)return;const d=this.renderer;if(this.failed||!d||!this.look){xv(o,c,f,"JELLYFISH");return}mv(this.camera,c,f);const h=-l.swarm.height*4.5;this.camera.position.set(0,.5+h,15.5/Math.max(.3,l.swarm.zoom)),this.camera.lookAt(0,.1+h,0),this.update(e,t,r),(this.surface.width!==c||this.surface.height!==f)&&d.setSize(c,f,!1),d.render(this.scene,this.camera),this.look.backdrop(o,c,f,l.swarm.backdrop),o.drawImage(this.surface,0,0,c,f)}update(e,t,r){const{cfg:o}=this,l=this.look;if(!l||this.failed)return;const c=this.playing;c.read(e,r);const{dt:f}=c;this.pace+=(Math.max(0,c.step)-this.pace)*(1-Math.exp(-f*.6));const d=this.pace*.6,h=c.burst*o.hands.clap,m=c.bump*o.sound.beat,x=!e.synthetic&&(e.left||e.right)?1:0;this.handHold+=(x-this.handHold)*(1-Math.exp(-f*3)),this.motionTime+=d,this.colourTime+=(d*o.colour.speed*(1+c.mid*o.sound.mid*1.2)+f*h*.9)/rc;const g=this.motionTime,_=Nn*g/rc,S=Math.max(0,Math.min(8,Math.round(o.swarm.count))),T=!this.started;this.host||l.update(t,o.colour.palette,f,T,o.colour.style),this.since+=f;const y=new Set(uw[S].slice(0,hv(this.since*.55,S)));T&&(this.started=!0,this.swarm.forEach(O=>{O.presence=0}));const M=r!=null&&r.live?r.bass:0,w=Math.max(0,M-this.bassAvg-.12);this.bassAvg+=(M-this.bassAvg)*(1-Math.exp(-f*.5));const b=Math.min(1,w*2.2)*o.sound.swell;this.swell+=(b-this.swell)*(1-Math.exp(-f*(b>this.swell?2.5:.45)));const P=(x?Math.max(.3,1+(c.spread-.4)*o.hands.spread*1.6):1)*(1+this.swell*.9),B=new J(c.aim.x*4.6,c.aim.y*2.1,0).multiplyScalar(o.hands.follow*x),I=o.swarm.drift*(1+c.bass*o.sound.bass*.8),A=!!(r!=null&&r.live)?.35+.65*c.energy+.4*c.mid:.35;this.carry+=(o.sound.flow*A-this.carry)*(1-Math.exp(-f*.35)),this.current+=d*(.18+.5*this.carry);const D=.16*(1+c.high*o.sound.high*2.5),j=1+c.high*o.sound.high*1.5,z=o.swarm.size,Y=new J,le=new Qi,ce=new J(0,1,0),G=new J,ne=new J,X=new J;this.swarm.forEach((O,F)=>{const $=y.has(F)?1:0;O.presence=$>O.presence?Math.min($,O.presence+f/5):Math.max($,O.presence-f/3),O.presence<.004&&$===0&&(O.presence=0);const U=O.presence>.002;O.root.visible=U;for(const N of O.strands)N.tube.mesh.visible=U;if(!U){O.last=null,O.primed=!1;return}const V=O.spec;O.beat+=d*Nn*(V.pulses/rc)+f*h*Nn*1.5;const ye=hw(O.beat),Me=Math.min(1.3,Math.max(ye,m*.7)+h*.4),xe=(O.grip??0)+(c.fist-(O.grip??0))*(1-Math.exp(-f*(7-F*.7))),q=Math.max(0,(xe-(O.gripWas??xe))/Math.max(f,.001));O.gripWas=xe,O.grip=xe;const re=this.handHold,W=(Me*(1-re)+xe*re)*o.swarm.pulse,de=(Math.min(1.3,ye+m*.15+h*.4+this.swell*.5)*(1-re)+Math.min(1.3,q*.35)*re)*o.swarm.pulse;O.rise+=(de*1.5-O.rise*1.2)*f,O.lift+=(O.rise-O.lift*.35)*f*.8,Y.set(V.c[0]*P+V.a[0]*I*Math.sin(_+V.ph),V.c[1]*Math.min(1.4,P)+V.a[1]*I*Math.sin(2*_+V.ph*1.7),V.c[2]+V.a[2]*I*Math.cos(_+V.ph*.6));const Te=this.current-F*.35;Y.x+=Math.sin(Te+V.ph*.5)*.9*this.carry,Y.y+=Math.sin(Te*.63+V.ph)*.3*this.carry,Y.z+=Math.cos(Te*.8+V.ph*1.3)*.5*this.carry;const pe=.8+1.6*(1-F/ng.length);if(O.pull.lerp(B,1-Math.exp(-f*pe)),Y.add(O.pull),h>.001&&(G.set(Y.x,Y.y-.5,0),G.lengthSq()<.01&&G.set(F%2?1:-1,.4,0),Y.addScaledVector(G.normalize(),h*2.6)),O.last){G.subVectors(Y,O.last).divideScalar(Math.max(f,.001));const N=new J(G.x*.12,1,G.z*.08).normalize();O.up.lerp(N,1-Math.exp(-f*1.5)).normalize()}O.last=(O.last??new J).copy(Y),Y.addScaledVector(O.up,O.lift-.6);const Fe=O.presence,Ae=Fe*Fe*Fe*(Fe*(Fe*6-15)+10);Y.y-=(1-Ae)*7,Y.y-=.9;const Ve=V.s*z*(.3+.7*Ae)*(1+c.bass*o.sound.bass*.08+m*.04);{const N=this.camera.position,xt=Math.tan(this.camera.fov*Math.PI/360)*Math.max(1,N.z-Y.z),gt=N.y+xt-1.5*Ve-.8;Y.y>gt&&(Y.y=gt+.8*(1-Math.exp(-(Y.y-gt)/.8)))}O.root.position.copy(Y),le.setFromUnitVectors(ce,O.up),O.root.quaternion.copy(le),O.root.rotateY(Math.sin(_+V.ph)*.4),O.root.scale.setScalar(Ve);const tt=Vf+fw*W;for(const N of O.tilts)N.rotation.x=tt;for(const N of O.lobes)N.scale.y=.18*(1-.18*W);O.cap.scale.set(.44*(1-.2*W),.26*(1+.08*W),.44*(1-.2*W)),O.root.updateMatrix();const nt=o.swarm.tentacles,it=O.up.clone().negate();ne.set(1,0,0).applyQuaternion(O.root.quaternion);for(const N of O.strands){const xt=N.links;N.angle!==null&&ig(N.angle,tt,N.from);const ot=xt[0].copy(N.from).applyMatrix4(O.root.matrix);if(!O.primed)for(let gt=1;gt<Zl;gt++)xt[gt].copy(ot).addScaledVector(it,N.link*Ve*nt*gt);for(let gt=1;gt<Zl;gt++){const Ee=xt[gt-1],lt=xt[gt];G.subVectors(lt,Ee),G.lengthSq()<1e-8&&G.copy(it),G.normalize().lerp(it,.22+.1*W).normalize();const L=Math.sin(N.phase+_*3*j-gt*.75)*.06*j*(gt/Zl);G.addScaledVector(ne,L).normalize(),lt.copy(Ee).addScaledVector(G,N.link*Ve*nt)}N.tube.update(N.radius*Ve,.25)}O.primed=!0;const ct=O.shared;ct.uT.value=this.colourTime,ct.uOff.value=V.off+o.colour.offset,ct.uWA.value=1,ct.uWB.value=.6,ct.uWC.value=.8+.4*Math.sin(_+V.ph);const yt=O.strandShared;yt.uT.value=this.colourTime,yt.uOff.value=V.off+.15+o.colour.offset,l.apply(ct,o.colour.depth,D),l.apply(yt,o.colour.depth,D)}),this.scene.updateMatrixWorld(!0),this.camera.updateMatrixWorld(!0);for(const O of this.swarm)O.root.visible&&(O.cap.getWorldPosition(X),X.applyMatrix4(this.camera.matrixWorldInverse),O.shared.uCenter.value.copy(X))}}const rg={grid:{detail:.5,field:.5,figure:.4,words:1,zoom:1},hands:{light:1,close:1,clap:1},sound:{beat:1,quiet:1}};let zh=null,_v=0,sc=0;function pw(){sc++;let s=!1;return()=>{s||(s=!0,sc=Math.max(0,sc-1))}}function mw(){return sc>0}function gw(s,e,t){if(s.length<e*t)return;const r=new Uint8Array(e*t);for(let o=0;o<t;o++)for(let l=0;l<e;l++)r[o*e+l]=s[o*e+(e-1-l)];zh={data:r,width:e,height:t},_v=performance.now()}const vw=4e3;function xw(){return zh&&performance.now()-_v<vw?zh:null}function _w(s,e,t){const r=Math.min(s.width-1.001,Math.max(0,e*(s.width-1))),o=Math.min(s.height-1.001,Math.max(0,t*(s.height-1))),l=Math.floor(r),c=Math.floor(o),f=r-l,d=o-c,h=c*s.width+l,m=s.data[h],x=s.data[h+1],g=s.data[h+s.width],_=s.data[h+s.width+1];return(m+(x-m)*f+(g-m)*d+(m-x-g+_)*f*d)/255}const fa=8;function sg(s){const e=s.replace("#",""),t=e.length===3?e.split("").map(r=>r+r).join(""):e;return[parseInt(t.slice(0,2),16)||0,parseInt(t.slice(2,4),16)||0,parseInt(t.slice(4,6),16)||0]}class yw{constructor(e,t){K(this,"canvas");K(this,"ctx");K(this,"cfg",rg);K(this,"playing",new So(.6));K(this,"lit",new Float32Array(0));K(this,"columns",0);K(this,"rows",0);K(this,"time",0);K(this,"real",0);K(this,"closed",0);K(this,"focus",{x:.89,y:.5});K(this,"rings",[]);K(this,"lastKick",0);K(this,"breath",0);K(this,"release",null);K(this,"glow",document.createElement("canvas"));K(this,"glowKey","");this.canvas=e,this.ctx=t}setParams(e){this.cfg=vo(rg,e)}destroy(){var e;(e=this.release)==null||e.call(this),this.release=null}tint(e){if(e===this.glowKey)return;this.glowKey=e;const[t,r,o]=sg(e);this.glow.width=this.glow.height=96;const l=this.glow.getContext("2d");l.clearRect(0,0,96,96);const c=l.createRadialGradient(48,48,0,48,48,48),f=d=>Math.round(d+(255-d)*.6);c.addColorStop(0,"rgba(255,255,255,1)"),c.addColorStop(.1,`rgba(${f(t)},${f(r)},${f(o)},0.9)`),c.addColorStop(.35,`rgba(${t},${r},${o},0.25)`),c.addColorStop(1,`rgba(${t},${r},${o},0)`),l.fillStyle=c,l.fillRect(0,0,96,96)}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,d=o.height;if(!f||!d)return;const h=f/d,m=this.playing;m.read(e,r);const{dt:x}=m,g=Math.min(.08,Math.max(0,m.step));this.time+=g,this.real+=x;const _=pe=>1-Math.exp(-x*pe);this.tint(t[0]??"#8fb4ff"),c.grid.figure>.01&&!this.release&&(this.release=pw()),c.grid.figure<=.01&&this.release&&(this.release(),this.release=null);const S=Math.round(Math.max(8,Math.min(150,(22+34*Math.max(0,Math.min(1,c.grid.detail)))/Math.max(.2,c.grid.zoom)))),T=Math.round(S*h);(S!==this.rows||T!==this.columns)&&(this.rows=S,this.columns=T,this.lit=new Float32Array(S*T));const y=1/S,M=[e.left,e.right].filter(Boolean),w=M.length>0&&!e.synthetic;let b=M.map(pe=>{const Fe=pe.openness??(pe.gesture==="fist"?0:1),Ae=pe.depth??.35;return{x:pe.position.x*h,y:pe.position.y,reach:(.04+.19*Fe*Fe)*c.hands.light*(.8+.6*Ae),power:.85+.5*Ae}});if(b.length&&!w&&(b=[{x:b.reduce((pe,Fe)=>pe+Fe.x,0)/b.length,y:b.reduce((pe,Fe)=>pe+Fe.y,0)/b.length,reach:.13*c.hands.light,power:.7}]),b.length){const pe=b.reduce((Ae,Ve)=>Ae+Ve.x,0)/b.length,Fe=b.reduce((Ae,Ve)=>Ae+Ve.y,0)/b.length;this.focus.x+=(pe-this.focus.x)*_(6),this.focus.y+=(Fe-this.focus.y)*_(6)}else this.focus.x+=(h/2-this.focus.x)*_(.8),this.focus.y+=(.5-this.focus.y)*_(.8);const P=!!(r!=null&&r.live);let B=0;w?B=m.fist*c.hands.close:P&&(B=Math.max(0,Math.min(.8,(.3-m.energy)*3.2))*c.sound.quiet),this.closed+=(Math.min(1,B)-this.closed)*_(B>this.closed?1.7:2.6),m.clapped&&c.hands.clap>0&&(this.rings.push({x:this.focus.x,y:this.focus.y,at:0,strength:m.clapStrength*c.hands.clap}),this.closed*=.25);const I=(pe,Fe,Ae)=>{const Ve=Math.max(0,Math.min(1,(Ae-pe)/(Fe-pe)));return Ve*Ve*(3-2*Ve)},k=I(.04,.62,this.closed),A=I(.55,1,this.closed),D=Math.max(m.kick,m.bump)*c.sound.beat;D>.45&&this.lastKick<=.45&&(this.rings.push({x:this.focus.x,y:this.focus.y,at:0,strength:.16+.14*Math.min(1,D)}),this.rings.length>6&&this.rings.shift()),this.lastKick=D;for(const pe of this.rings)pe.at+=x;this.rings=this.rings.filter(pe=>pe.at<2.6),this.breath+=(m.bass-this.breath)*_(3);const j=this.release?xw():null,z=c.grid.figure,Y=c.grid.field,le=this.time,ce=this.lit,G=_(16),ne=_(2.4),X=b[0],O=b[1];let F=0,$=0,U=0;X&&O&&(F=O.x-X.x,$=O.y-X.y,U=F*F+$*$);for(let pe=0;pe<S;pe++){const Fe=(pe+.5)*y;for(let Ae=0;Ae<T;Ae++){const Ve=(Ae+.5)*y;let tt=Y*(.16+.07*Math.sin(Ve*2.1+Fe*1.3-le*.5)+.04*Math.sin(Ve*.9-Fe*2.7+le*.31));j&&z>.01&&(tt+=_w(j,Ve/h,Fe)*.34*z);for(const it of b){const ct=Ve-it.x,yt=Fe-it.y;tt+=it.power*Math.exp(-(ct*ct+yt*yt)/(it.reach*it.reach))}if(U>1e-5){const it=Math.max(0,Math.min(1,((Ve-X.x)*F+(Fe-X.y)*$)/U)),ct=Math.hypot(Ve-(X.x+F*it),Fe-(X.y+$*it));tt+=.55*Math.exp(-(ct*ct)/(y*y*.5))}for(const it of this.rings){const ct=Math.hypot(Ve-it.x,Fe-it.y)-it.at*.85;ct>-.09&&ct<.09&&(tt+=it.strength*Math.exp(-(ct*ct)/.0011)*(1-it.at/2.6))}const nt=pe*T+Ae;ce[nt]+=(tt-ce[nt])*(tt>ce[nt]?G:ne)}}l.globalCompositeOperation="source-over",l.globalAlpha=1,l.fillStyle="#000",l.fillRect(0,0,f,d);const V=[];for(let pe=0;pe<fa;pe++)V.push(new Path2D);const ye=y*d,Me=1+.18*this.breath,xe=this.focus.x,q=this.focus.y;for(let pe=0;pe<S;pe++){if(k>.97&&pe%3!==0)continue;const Fe=(pe+.5)*y,Ae=(q+(Fe-q)*(1-k))*d;for(let Ve=0;Ve<T;Ve++){const tt=ce[pe*T+Ve];if(tt<.03)continue;const nt=(Ve+.5)*y,it=(xe+(nt-xe)*(1-A))*d,ct=Math.min(fa-1,Math.floor(Math.min(.999,tt)*fa)),yt=ye*Math.min(.5,.07+.4*Math.min(1,tt))*Me*(1-.45*k),N=V[ct];N.moveTo(it+yt,Ae),N.arc(it,Ae,yt,0,Math.PI*2)}}const[re,W,de]=sg(t[0]??"#8fb4ff"),Te=1-.82*k;for(let pe=0;pe<fa;pe++){const Fe=pe/(fa-1),Ae=(Ve,tt)=>{const nt=tt+(255-tt)*Math.min(1,.35+Math.max(0,Fe*1.6-.6));return Math.round(Ve+(nt-Ve)*Math.min(1,Fe*1.4))};l.fillStyle=`rgb(${Ae(150,re)},${Ae(156,W)},${Ae(170,de)})`,l.globalAlpha=Math.min(1,(.3+.7*Fe)*Te),l.fill(V[pe])}if(A>.02){const pe=ye*(2.4+5*A)*(1+.25*this.breath);l.globalCompositeOperation="lighter",l.globalAlpha=Math.min(1,A*1.2),l.drawImage(this.glow,xe*d-pe,q*d-pe,pe*2,pe*2),l.globalCompositeOperation="source-over"}if(c.grid.words>.01){const pe=d/720,Fe=Math.max(9,Math.round(11*pe));l.font=`500 ${Fe}px ui-monospace, SFMono-Regular, Menlo, monospace`,l.textBaseline="alphabetic",l.textAlign="left";let Ae;this.closed>.9?Ae="standby":this.closed>.25?Ae="closing":w?Ae=b.length>1?"two hands":"one hand":Ae=P?"listening":"waiting";const Ve=it=>Math.round(it+(255-it)*.7);l.fillStyle=`rgb(${Ve(re)},${Ve(W)},${Ve(de)})`,l.globalAlpha=.6*c.grid.words;const tt=20*pe,nt=d-20*pe;if(l.fillText(Ae,tt,nt),Math.floor(this.real*1.6)%2===0){const it=l.measureText(Ae).width;l.fillRect(tt+it+5*pe,nt-Fe*.82,Fe*.55,Fe)}}l.globalAlpha=1}}const og={shape:{size:1,morph:.12,lobes:1,detail:4,style:2},motion:{spin:1,flow:1,dust:.5,points:1400},hands:{shape:1,follow:.25,clap:1},sound:{bass:1,beat:1,spin:1}};class Mw{constructor(e,t){K(this,"canvas");K(this,"ctx");K(this,"cfg",og);K(this,"playing",new So(.6));K(this,"surface",document.createElement("canvas"));K(this,"scene",new $h);K(this,"camera",new $n(50,16/9,.1,100));K(this,"renderer");K(this,"group",new Bi);K(this,"corners",new Float32Array(0));K(this,"edges",new Uint32Array(0));K(this,"shaped",new Float32Array(0));K(this,"points",null);K(this,"lines",null);K(this,"builtDetail",-1);K(this,"wire");K(this,"dots");K(this,"dust");K(this,"time",0);K(this,"flow",0);K(this,"spin",0);K(this,"pull",0);K(this,"swell",0);K(this,"pulse",0);K(this,"burst",0);K(this,"lastDrop",0);K(this,"at",new Pt);this.canvas=e,this.ctx=t,this.renderer=new uv({canvas:this.surface,antialias:!0,alpha:!1}),this.renderer.setPixelRatio(1),this.renderer.setClearColor(0,1),this.camera.position.set(0,0,7.5),this.camera.lookAt(0,0,0),this.scene.add(this.group),this.wire=new Yg({color:6737151,transparent:!0,opacity:.85}),this.dots=new Nh({color:6737151,size:.09,transparent:!0,opacity:1,depthWrite:!1});const r=6e3,o=new Float32Array(r*3);for(let c=0;c<r;c++){const f=4+Math.random()*14,d=Math.random()*Math.PI*2,h=Math.random()*2-1,m=Math.sqrt(1-h*h);o.set([f*m*Math.cos(d),f*h,-Math.abs(f*m*Math.sin(d))-3],c*3)}const l=new fn;l.setAttribute("position",new kt(o,3)),this.dust=new Oh(l,new Nh({color:16777215,size:.03,transparent:!0,opacity:.5,depthWrite:!1})),this.scene.add(this.dust)}setParams(e){this.cfg=vo(og,e)}build(e){this.points&&(this.group.remove(this.points,this.lines),this.points.geometry.dispose(),this.lines.geometry.dispose());const t=new id(1,e),r=t.attributes.position.array,o=new Map,l=[],c=[];for(let g=0;g<r.length;g+=3){const _=`${r[g].toFixed(4)},${r[g+1].toFixed(4)},${r[g+2].toFixed(4)}`;let S=o.get(_);S===void 0&&(S=l.length/3,o.set(_,S),l.push(r[g],r[g+1],r[g+2])),c.push(S)}const f=new Set,d=[],h=l.length/3;for(let g=0;g<c.length;g+=3)for(const[_,S]of[[c[g],c[g+1]],[c[g+1],c[g+2]],[c[g+2],c[g]]]){const T=_<S?_*h+S:S*h+_;f.has(T)||(f.add(T),d.push(_,S))}t.dispose(),this.corners=Float32Array.from(l),this.shaped=new Float32Array(l.length),this.edges=Uint32Array.from(d);const m=new fn;m.setAttribute("position",new kt(this.shaped,3));const x=new fn;x.setAttribute("position",new kt(new Float32Array(d.length*2*3),3)),this.points=new Oh(m,this.dots),this.lines=new Iy(x,this.wire),this.points.frustumCulled=!1,this.lines.frustumCulled=!1,this.group.add(this.lines,this.points),this.builtDetail=e}render(e,t,r){const{canvas:o,ctx:l,cfg:c}=this,f=o.width,d=o.height;if(!f||!d)return;const h=this.playing;h.read(e,r);const{dt:m}=h,x=Math.max(0,h.step),g=F=>1-Math.exp(-m*F);this.time+=x;const _=Math.max(2,Math.min(6,Math.round(c.shape.detail)));_!==this.builtDetail&&this.build(_);const S=[e.left,e.right],T=!e.synthetic&&S.some(Boolean),y=T?Math.max(h.fist,h.pinch):0;this.pull+=(y*c.hands.shape-this.pull)*g(4),this.swell+=(h.bass*c.sound.bass-this.swell)*g(5);const M=Math.max(h.kick,h.bump)*c.sound.beat;this.pulse=Math.max(this.pulse*Math.exp(-m*6),Math.min(1,M)),h.clapped&&c.hands.clap>0&&(this.burst=Math.max(this.burst,h.clapStrength*c.hands.clap)),h.drop>.5&&this.lastDrop<=.5&&(this.burst=Math.max(this.burst,.9)),this.lastDrop=h.drop,this.burst*=Math.exp(-m*2.2);const w=c.shape.morph+.35*this.swell+.5*this.pull+.25*h.build;this.flow+=x*.35*c.motion.flow*(1+this.swell);const b=1.1*Math.max(.3,c.shape.lobes),P=this.flow,B=this.corners,I=this.shaped;for(let F=0;F<B.length;F+=3){const $=B[F],U=B[F+1],V=B[F+2],ye=Math.sin($*b*1.7+P)*.5+Math.sin(U*b*2.1-P*.8+1.3)*.35+Math.sin(($+V)*b*1.4+P*1.3+2.1)*.3+Math.sin((U-V)*b*2.6-P*.6)*.15*(.5+this.pull),Me=1+ye*w+this.pulse*.08*(.6+.4*Math.sin(U*3+P))+this.burst*.6*(.7+.3*ye);I[F]=$*Me,I[F+1]=U*Me,I[F+2]=V*Me}this.points.geometry.attributes.position.needsUpdate=!0;const k=Math.max(0,Math.min(2,c.shape.style)),A=.5*Math.min(1,k/2),D=this.lines.geometry.attributes.position,j=D.array,z=this.edges;for(let F=0,$=0;F<z.length;F+=2){const U=z[F]*3,V=z[F+1]*3,ye=I[U],Me=I[U+1],xe=I[U+2],q=I[V],re=I[V+1],W=I[V+2];j[$++]=ye,j[$++]=Me,j[$++]=xe,j[$++]=ye+(q-ye)*A,j[$++]=Me+(re-Me)*A,j[$++]=xe+(W-xe)*A,j[$++]=q,j[$++]=re,j[$++]=W,j[$++]=q+(ye-q)*A,j[$++]=re+(Me-re)*A,j[$++]=W+(xe-W)*A}D.needsUpdate=!0,this.lines.visible=A>.004,this.spin+=x*.35*c.motion.spin*(1+c.sound.spin*(.8*h.mid+.6*h.energy)),this.group.rotation.set(.35+Math.sin(this.time*.13)*.25,this.spin,Math.sin(this.time*.09)*.2);const Y=T?c.hands.follow:c.hands.follow*.3;this.at.x+=(h.aim.x*2.2*Y-this.at.x)*g(2),this.at.y+=(h.aim.y*1.3*Y-this.at.y)*g(2),this.group.position.set(this.at.x,this.at.y,0),this.group.scale.setScalar(1.6*Math.max(.2,c.shape.size)*(1+.05*this.pulse));const le=Math.min(1,k/2),ce=new Nt(t[0]??"#66ccff"),G=new Nt(t[1]??t[0]??"#3300ff"),ne=ce.clone().lerp(new Nt(1,1,1),.25+.4*this.pulse);this.wire.color.copy(ne),this.dots.color.copy(ne.clone().lerp(G,.3)),this.dots.size=(.08+.05*this.pulse)*(1-.35*le),this.dots.opacity=1,this.wire.opacity=.55+.4*Math.min(1,this.swell+this.pulse);const X=this.dust.material;X.opacity=Math.max(0,Math.min(1,c.motion.dust));const O=Math.max(0,Math.min(6e3,Math.round(c.motion.points)));this.dust.geometry.setDrawRange(0,O),this.dust.visible=c.motion.dust>.01&&O>0,this.dust.rotation.y=-this.time*.03,(this.surface.width!==f||this.surface.height!==d)&&this.renderer.setSize(f,d,!1),this.camera.aspect=f/d,this.camera.updateProjectionMatrix(),this.renderer.render(this.scene,this.camera),l.globalCompositeOperation="source-over",l.globalAlpha=1,l.drawImage(this.surface,0,0,f,d)}destroy(){rd(this.scene,this.renderer)}}const Sw=1.4,Aw=14,Ew=1.2,ag=(s,e)=>1/(1+1/(2*Math.PI*s)/e);class oo{constructor(e=Sw,t=Aw){K(this,"value",null);K(this,"speed",0);this.minCutoff=e,this.beta=t}next(e,t){if(this.value===null||t<=0)return this.value=e,this.speed=0,e;const r=(e-this.value)/t;this.speed+=(r-this.speed)*ag(Ew,t);const o=this.minCutoff+this.beta*Math.abs(this.speed);return this.value+=(e-this.value)*ag(o,t),this.value}reset(){this.value=null,this.speed=0}}class ww{constructor(e=5){K(this,"recent",[]);K(this,"held",null);this.size=e}next(e){this.recent.push(e),this.recent.length>this.size&&this.recent.shift();const t=new Map;let r=e,o=0;for(const l of this.recent){const c=(t.get(l)??0)+1;t.set(l,c),(c>o||c===o&&l===this.held)&&(r=l,o=c)}return this.held=r,r}reset(){this.recent=[],this.held=null}}const lg=[{tip:8,pip:6},{tip:12,pip:10},{tip:16,pip:14},{tip:20,pip:18}];function Tw(s,e){if(!s||s.length<21)return null;const t=(x,g)=>Math.hypot((x.x-g.x)*e,x.y-g.y,(x.z-g.z)*e),r=(x,g)=>Math.hypot((x.x-g.x)*e,x.y-g.y),o=s[0],l=s[9],c=r(o,l);if(c<1e-4)return null;let f=0,d=0;for(const x of lg){const g=t(s[x.tip],o),_=t(s[x.pip],o);g>_*1.12&&f++,d+=Math.min(1,Math.max(0,(g/c-1.05)/.85))}const h=s[17];return t(s[4],h)>t(s[3],h)*1.12&&f++,{fingers:f,pinchGap:t(s[4],s[8])/c,openness:d/lg.length,size:c,angle:Math.atan2((l.x-o.x)*e,o.y-l.y)}}const cg=.32,Gf=.5,Cw=180,ug=30,fg=.08,Rw=.32,bw=.115,hg=.16,Pw=1.3,Lw=.2,Iw=.28,Uw=.7,Dw=200,Nw=.3,Fw=450,Ow=140;class dg{constructor(){K(this,"points",Array.from({length:21},()=>({x:new oo,y:new oo,z:new oo(1,6)})));K(this,"size",new oo(1,4));K(this,"angle",new oo(1.2,3));K(this,"open",new oo(2,6));K(this,"fingers",new ww(5));K(this,"pinched",!1);K(this,"gesture","none");K(this,"gestureSince",0);K(this,"lastAngle",0);K(this,"lastAt",0);K(this,"hand",null);K(this,"seenAt",0)}read(e,t,r){const o=this.lastAt?Math.min(.2,Math.max(.001,(t-this.lastAt)/1e3)):0;this.lastAt=t;const l=e.map((T,y)=>({x:this.points[y].x.next(T.x,o),y:this.points[y].y.next(T.y,o),z:this.points[y].z.next(T.z,o)})),c=Tw(e,r);if(!c)return this.hand;const f=this.fingers.next(c.fingers);this.pinched=c.pinchGap<(this.pinched?Gf:cg);const d=Math.max(0,f-1),h=this.pinched?"pinch":c.openness>.62?"open":c.openness<.28?"fist":d>=3?"open":d<=0?"fist":"none";h!==this.gesture&&(this.gesture=h,this.gestureSince=t);let m=c.angle;for(;m-this.lastAngle>Math.PI;)m-=2*Math.PI;for(;m-this.lastAngle<-Math.PI;)m+=2*Math.PI;this.lastAngle=this.angle.next(m,o);const x=Math.atan2(Math.sin(this.lastAngle),Math.cos(this.lastAngle)),g=this.size.next(c.size,o),_=this.points[9],S=Math.hypot(_.x.speed,_.y.speed);return this.seenAt=t,this.hand={position:{x:l[9].x,y:l[9].y},gesture:h,pinchDistance:this.pinched?c.pinchGap*c.size:void 0,velocity:Math.min(3,S*2),holdDuration:(t-this.gestureSince)/1e3,fingerCount:f,landmarks:l,pinch:Math.min(1,Math.max(0,(Gf+.25-c.pinchGap)/(Gf+.25-cg*.6))),openness:Math.min(1,Math.max(0,this.open.next(c.openness,o))),depth:Math.min(1,Math.max(0,(g-fg)/(Rw-fg))),angle:x},this.hand}forget(){for(const e of this.points)e.x.reset(),e.y.reset(),e.z.reset();this.size.reset(),this.angle.reset(),this.open.reset(),this.fingers.reset(),this.pinched=!1,this.gesture="none",this.lastAt=0,this.lastAngle=0,this.hand=null}}class kw{constructor(){K(this,"kept",{left:new dg,right:new dg});K(this,"trail",[]);K(this,"lastAt",0);K(this,"clapAt",-1e9);K(this,"clapStrength",0);K(this,"gap",1);K(this,"gapAt",-1e9);K(this,"closing",0);K(this,"counted",!1);K(this,"held",!1)}next(e,t,r){const o={};(e.landmarks??[]).forEach((h,m)=>{var S,T,y,M;if(!h||h.length<21)return;const x=h.map(w=>({x:1-w.x,y:w.y,z:w.z}));let _=((M=(y=(T=(S=e.handedness)==null?void 0:S[m])==null?void 0:T[0])==null?void 0:y.categoryName)==null?void 0:M.toLowerCase())==="left"?"right":"left";if(o[_]){const w=o[_],b=x[9].x<w[9].x;o.left=b?x:w,o.right=b?w:x;return}o[_]=x});const c={left:null,right:null};for(const h of["left","right"]){const m=this.kept[h];o[h]?(c[h]=m.read(o[h],t,r),c[h]&&this.trail.push({...c[h].position,hand:h})):m.hand&&t-m.seenAt<=Cw?c[h]=m.hand:m.hand&&m.forget()}this.trail.length>ug&&(this.trail=this.trail.slice(-ug)),c.gestureTrail=[...this.trail];const f=this.lastAt?Math.min(.2,Math.max(.001,(t-this.lastAt)/1e3)):0;this.lastAt=t;const d=h=>{this.counted||t-this.clapAt<Fw||(this.counted=!0,this.clapAt=t,this.clapStrength=Math.min(1,Math.max(.7,h)))};if(c.left&&c.right){const h=c.right.position.x-c.left.position.x,m=c.right.position.y-c.left.position.y;c.distanceBetweenHands=Math.hypot(h,m),c.twist=Math.atan2(m,h*r)}if(o.left&&o.right){const h=o.left[9],m=o.right[9],x=Math.hypot(m.x-h.x,m.y-h.y),g=(t-this.gapAt)/1e3,_=g>0&&g<.15?(this.gap-x)/g:0;this.closing=Math.max(_,this.closing*Math.exp(-f*12)),this.gap=x,this.gapAt=t,x>Nw&&(this.counted=!1),x<Lw&&this.closing>Pw&&d(this.closing/2.2),this.held=x<(this.held?hg:bw),this.held&&(d(.7+this.closing/3),c.clapping=!0,c.clapIntensity=Math.max(.6,1-x/hg))}else t-this.gapAt<Dw&&this.gap<Iw&&this.closing>Uw&&d(.75+this.closing/3),this.closing*=Math.exp(-f*6),this.held=!1,t-this.gapAt>1200&&(this.counted=!1);return t-this.clapAt<=Ow&&(c.clapping=!0,c.clapIntensity=Math.max(c.clapIntensity??0,this.clapStrength)),c}}const Bw=25e3,zw=5e3,Hw=2e4,Vw=6e4,pg=640,Gw="https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",mg="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14";function Ww({videoElement:s,onHandData:e}){const t=Ot.useRef(new kw);return Ot.useEffect(()=>{let r=!0,o=0,l=-1,c=null,f=null,d=0,h=0;const m=()=>s.videoWidth&&s.videoHeight?s.videoWidth/s.videoHeight:16/9,x=(y,M)=>{r&&e(t.current.next(y,M,m()))},g=async()=>{if(!(!r||f))try{const y=await import(mg),M=await y.FilesetResolver.forVisionTasks(`${mg}/wasm`),w=await y.HandLandmarker.createFromOptions(M,{baseOptions:{modelAssetPath:Gw,delegate:"GPU"},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.5,minHandPresenceConfidence:.5,minTrackingConfidence:.5});if(!r){w.close();return}f=w,console.log("✋ Hand tracking is running on the page.");const b=()=>{if(!(!r||!f)&&(o=requestAnimationFrame(b),s.currentTime!==l)){l=s.currentTime;try{const P=performance.now();x(f.detectForVideo(s,P),P)}catch(P){console.error("Hand detection error:",P)}}};b()}catch(y){console.error("Hand tracking could not start:",y)}},_=y=>{c&&(console.warn(`Hand tracking is moving to the page: ${y}`),window.clearTimeout(d),cancelAnimationFrame(o),c.terminate(),c=null,g())},S=()=>{if(typeof Worker>"u"||typeof createImageBitmap!="function"||typeof OffscreenCanvas>"u"){g();return}try{c=new Worker("/hand-worker.js")}catch{g();return}let y=!1,M=!1,w=!1,b=!1,P=!1,B=!1;d=window.setTimeout(()=>{y||_("it took too long to start")},Bw);const I=()=>{if(!r||!c)return;if(o=requestAnimationFrame(I),M){performance.now()-h>(P?Vw:w?zw:Hw)&&_("the worker stopped answering");return}if(s.currentTime===l||s.readyState<2)return;l=s.currentTime,M=!0,h=performance.now();const k=h,A=Math.min(pg,s.videoWidth||pg);createImageBitmap(s,{resizeWidth:A,resizeHeight:Math.max(1,Math.round(A/m())),resizeQuality:"low"}).then(D=>{if(!c){D.close();return}const j=mw();j&&!B&&(P=!0),c.postMessage({type:"frame",bitmap:D,time:k,mask:j},[D])}).catch(()=>{M=!1})};c.onmessage=k=>{const A=k.data;A.type==="ready"?(y=!0,window.clearTimeout(d),console.log("✋ Hand tracking is running in a worker."),I()):A.type==="hands"?(M=!1,w=!0,A.mask&&(B=!0,P=!1,gw(A.mask.data,A.mask.width,A.mask.height)),x({landmarks:A.landmarks,handedness:A.handedness},A.time)):A.type==="note"?(B=!0,P=!1,console.warn(A.reason)):A.type==="failed"?_(A.reason):A.type==="error"&&(M=!1,b||(b=!0,console.warn("Hand tracking worker:",A.reason)),w||_(A.reason))},c.onerror=k=>_(k.message||"the worker failed"),c.postMessage({type:"init"})},T=()=>{r&&(s.readyState>=2?S():window.setTimeout(T,100))};return T(),()=>{r=!1,window.clearTimeout(d),cancelAnimationFrame(o),c==null||c.terminate(),c=null;try{f==null||f.close()}catch(y){console.warn("Error closing hand landmarker:",y)}f=null}},[s,e]),null}const Xw=40;class Wf{constructor(e,t){K(this,"history",[]);K(this,"last",0);K(this,"pulse",0);K(this,"threshold",0);K(this,"recent",[]);K(this,"peak",0);K(this,"flux",0);this.refractory=e,this.decay=t}measure(e,t,r,o){for(this.recent.push({at:r,rise:e,heard:t});this.recent.length&&r-this.recent[0].at>Xw;)this.recent.shift();let l=0,c=0;for(const g of this.recent)l+=g.rise,c+=g.heard;this.history.push(l),this.history.length>90&&this.history.shift();const f=this.history.length;let d=0;for(const g of this.history)d+=g;d/=f;let h=0;for(const g of this.history)h+=(g-d)**2;const m=Math.sqrt(h/f);return this.threshold=d+m*1.9*(1.5-o),this.flux=l,this.peak=Math.max(l,this.peak*.9985),f>=20&&l>this.threshold&&l>this.peak*.5&&c>1.2*(1.3-o*.8)&&r-this.last>this.refractory?l/Math.max(1e-9,this.threshold):0}commit(e,t,r){e&&(this.last=t);const o=this.peak>0?Math.min(1,this.flux/this.peak):0;this.pulse=Math.max(this.pulse*Math.exp(-r/this.decay),e?Math.max(.4,o):0)}}function jw(s,e,t,r){const o=s.map(c=>c.hits.measure(c.flux,c.audible,e,r)),l=Math.max(...o);s.forEach((c,f)=>c.hits.commit(o[f]>0&&o[f]>=l*.7,e,t))}class gg{constructor(e){K(this,"ceiling",-100);K(this,"floor",0);K(this,"seen",!1);this.minSpan=e}place(e,t){this.seen||(this.seen=!0,this.ceiling=e,this.floor=e);const r=l=>1-Math.exp(-t/l);this.ceiling+=(e-this.ceiling)*r(e>this.ceiling?.5:60),this.floor+=(e-this.floor)*r(e<this.floor?2:60);const o=Math.min(this.floor,this.ceiling-this.minSpan);return Math.min(1,Math.max(0,(e-o)/(this.ceiling-o)))}}function Kw(){return{overall:new gg(14),bass:new gg(14),overallSlow:0,bassMid:0,highFast:0,highSlow:0,out:0,onsets:[],energy:0,build:0,drop:0,bright:.5,heard:0}}const vg=-75,qw=2.5;function Yw(s,e,t,r){const o=T=>1-Math.exp(-r/T),l=T=>Math.pow(10,T/10),c=T=>T>1e-10?10*Math.log10(T):-100;if(s.overallSlow+=(l(e.overall)-s.overallSlow)*o(2),s.bassMid+=(l(e.bass)-s.bassMid)*o(.5),s.highFast+=(e.high-s.highFast)*o(1),s.drop*=Math.exp(-r/1.2),s.heard+=r,s.heard<qw){s.highSlow=s.highFast,s.energy=.5;return}s.highSlow+=(e.high-s.highSlow)*o(8);const f=c(s.overallSlow)>vg;s.energy=f?s.overall.place(c(s.overallSlow),r):0;const d=s.bass.place(c(s.bassMid),r),h=s.bass.ceiling>vg;for(e.onset&&s.onsets.push(t);s.onsets.length&&t-s.onsets[0]>2e3;)s.onsets.shift();let m=!1;h&&d<.4?s.out=Math.min(30,s.out+r):d>.65&&(s.out>=2&&(s.drop=Math.max(s.drop,Math.min(1,.55+s.out/14)),m=!0),s.out=0);const x=Math.min(1,Math.max(0,(s.highFast-s.highSlow)/18)),g=Math.min(1,Math.max(0,(s.onsets.length/2-3)/5)),_=Math.min(1,s.out/6),S=f&&s.out>0?_*_*(3-2*_)*Math.max(.1,x,g):0;if(s.build+=(S-s.build)*o(m||S<s.build?.25:.7),e.centroid>0){const T=Math.min(1,Math.max(0,Math.log2(e.centroid/300)/Math.log2(16.666666666666668)));s.bright+=(T-s.bright)*o(1.5)}}const yv={bass:[20,160],lowMid:[160,800],mid:[800,4e3],high:[4e3,12e3]},Qw=Object.keys(yv),Zw=.002,Jw=.04,$w=.25,eT=.0016,tT=6,nT=90,iT=170,rT=1.9;function sT(){const s=()=>({floor:255,ceiling:0});return{envelopes:{bass:s(),lowMid:s(),mid:s(),high:s()},overall:s(),previous:null,flux:[],lastBeat:0,onset:0,rise:0,punch:0,lastNow:0,kick:new Wf(170,.16),snare:new Wf(170,.13),hat:new Wf(70,.06),sections:Kw()}}const co=new Float32Array(256);for(let s=0;s<256;s++)co[s]=Math.pow(10,(s/255*70-100)/20)*1e3;const Xf={kick:[30,150],snare:[1500,5e3],hat:[6e3,12e3]};function xg(s,e){s.floor+=(e-s.floor)*(e>s.floor?Zw:Jw),s.ceiling+=(e-s.ceiling)*(e>s.ceiling?$w:eT);const t=s.ceiling-s.floor;return t<tT?Math.min(1,e/190):Math.min(1,Math.max(0,(e-s.floor)/t))}function jf(s,e,t){const r=Math.max(0,Math.min(s.length-1,e)),o=Math.max(r+1,Math.min(s.length,t));let l=0;for(let c=r;c<o;c++)l+=s[c];return l/(o-r)}function _g(s,e,t){const r=Math.max(1,Math.min(s.length-1,e)),o=Math.max(r+1,Math.min(s.length,t));let l=0;for(let c=r;c<o;c++)l+=(co[s[c]]/1e3)**2;return l>0?Math.max(-100,10*Math.log10(l)):-100}function oT(s,e){const t=-100+10*Math.log10(Math.max(1,e))+5;return Math.min(1,Math.max(0,(s-t)/(-32-t)))}function aT(s,e,t,r,o){const l=e/2/s.length,c=X=>Math.round(X/l),f={};for(const X of Qw){const[O,F]=yv[X];f[X]=xg(t.envelopes[X],jf(s,c(O),c(F)))}const d=xg(t.overall,jf(s,c(20),c(12e3))),h=c(1e4),m=new Float32Array(h);for(let X=0;X<h&&X<s.length;X++)m[X]=s[X];let x=0,g=0;if(t.previous){for(let X=0;X<m.length;X++){const O=t.previous[X]??0,F=m[X]-O;F>0&&(x+=F,g+=co[m[X]]-co[O])}x/=m.length}t.punch=g;const _=t.lastNow?Math.min(.1,Math.max(.001,(o-t.lastNow)/1e3)):1/60;t.lastNow=o;const S=X=>{var Me;const O=t.previous;if(!O)return{flux:0,audible:0};const F=Math.max(1,c(X[0])),$=Math.min(s.length,Math.max(F+1,c(X[1])));let U=0,V=0,ye=0;for(let xe=F;xe<$;xe++){const q=xe<O.length?O[xe]:((Me=t.above)==null?void 0:Me[xe-O.length])??s[xe];U+=co[s[xe]],V+=co[q],s[xe]>q&&(ye+=s[xe]-q)}return{flux:Math.max(0,U-V),audible:ye/($-F)}},T=S(Xf.kick);jw([{hits:t.kick,...T},{hits:t.snare,...S(Xf.snare)},{hits:t.hat,...S(Xf.hat)}],o,_,r),t.rise=x+T.audible*.5,t.previous=m,t.above=s.slice(h),t.flux.push(x),t.flux.length>nT&&t.flux.shift();const y=t.flux.reduce((X,O)=>X+O,0)/Math.max(1,t.flux.length);let M=0;for(const X of t.flux)M+=(X-y)**2;const w=Math.sqrt(M/Math.max(1,t.flux.length)),b=rT*(1.5-r*1),P=y+w*b,I=t.flux.length>=20&&x>P&&x>.35*(1.3-r*.8)&&o-t.lastBeat>iT;I&&(t.lastBeat=o);const k=P>0?Math.min(1,(x-P)/(P+.6)):0;t.onset=Math.max(t.onset*.9,I?Math.max(.35,k):0);let A=0,D=0;const j=Math.min(s.length,c(1e4));for(let X=Math.max(1,c(100));X<j;X++){const O=(s[X]/255)**2;A+=O,D+=O*X*l}const z=_g(s,c(20),c(12e3));Yw(t.sections,{overall:z,bass:_g(s,c(30),c(160)),high:jf(s,c(2e3),c(12e3)),centroid:A>.05?D/A:0,onset:I},o,_);const Y=.6+r*1.2,le=1.5-r,ce=1,G=X=>ce*Math.min(1,Y*Math.pow(Math.max(0,X),le)),ne=I&&ce>.15;return{bass:G(f.bass),lowMid:G(f.lowMid),mid:G(f.mid),high:G(f.high),overall:G(d),beat:ne,beatIntensity:ne?ce*Math.min(1,Math.max(.3,k)):0,onset:ce*t.onset,kick:ce*t.kick.pulse,snare:ce*t.snare.pulse,hat:ce*t.hat.pulse,energy:ce*t.sections.energy,build:ce*t.sections.build,drop:ce*t.sections.drop,bright:t.sections.bright,input:oT(z,c(12e3)-Math.max(1,c(20)))}}const yg=[.35,.45,.8,1.15,1.5,1.9],lT=3.6,cT=2.2,uT=6;function fT(){return{rate:1,clap:0}}function Mg(s){if(!s)return null;if(s.gesture==="fist")return yg[0];const e=s.fingerCount;return e===void 0?null:yg[Math.min(5,Math.max(1,Math.round(e)))]}function hT(s,e,t){const r=[Mg(s.left),Mg(s.right)].filter(c=>c!==null),o=r.length?Math.max(...r):1,l=Math.min(1,t*uT);return e.rate+=(o-e.rate)*l,s.clapping&&(e.clap=Math.max(e.clap,lT*Math.max(.5,s.clapIntensity??1))),e.clap=Math.max(0,e.clap-e.clap*cT*t),e.rate+e.clap}const dT={dust:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD51PXOBSjr0HNJjGAe3fFLz6k0ABBC5oOeMd/SnJI8Uquhw6nIIHepLhmaczSGMmUlzsAUDJ5GAAB9BxQBCFLNgcn0JpXRo5HRl2spIIPr6U9HRmxMZCoBxtI4Pbr2zTFXcRghB79KAG9PQ0oBHp1q8NKuJYY2t40lLMIx5UisXY5IGM5zx6enqKpvDJESHUjkjn260ANwcjPNA78+3FTW8E15PFbwohkY7F5CjJ9SSB+Zpz27szhSSsYwWA3KOmSWHGMnr9KAKw454IoweO1TpHE85WSb7OhxhiDJ/KkGwQjYru7A71KjC88YP/6qAIe2MClx0/nQFJIwcH0qxFbsy8XEKsWKMjPg9Mk+gHbr1oArqrM3AJPp3o6dyeeMd6nuRAZWe0ikS3Zj5fmuGfbnjJAAzjGeKW2vpbJJfs7mKWRShkRypCEYZfTB/pQBE0JWBZGaP5icKHG4Y9R1H41GQc5qZI5ViM4wE+7nI6kenWolxvAfJXPJA5x7UAA+g4o6c+npQeuRwPSkPH0oAMdADS854GKAADgjNHfpzQAAZ9qleFoZADtlAw3ynIwff+fvTXEZdRDubcBkY6N3A9fr+lOliVJGCiQLtBG8YOPWgBAyl2ZBs3NgKGzgfXv6VJdSRzzblt1hwoV9vQuOpAHAz6DimR4UkjJKNkleeP8A9eKsyvc3TRPLO+1VKRCQ5CruJ2gemSeMY5NAFdRvRuQ4QZAPUjPTHaljiacOqJGhRPM5IGQBzyfbPHftVu7jjikkUyW0xIAZ4sBVZiGO0DrjkcYHaokljjidkuTG8ZATEfMgOQfm7AADg/3jQBGbiJrMxGHMgIw6thcDPVQPmPPUn2pYI1nMnzKuzlsybPMGQNqjHJ6fgPap/swvFLIJC5H7hMfewwyOB1wSeoHv2oSOCRHhd5pCIN6Mq7yrLywI4wvXJ5wBnmgCo8SuFaNCiMTt3MDkEnHPr26YpPIkZgY4nG47ce//AOsU5gyXH79RKOVGG4OOOo9KbKrrMwm3iUcENx9KALHk74muDAkcZGxP3hAVxjPbk98f7Qq3GqarFbNd38MIt3jtgkrBSIfmO5cDBC4IOSTll684rXKxxW3lx28mHYMHkGOQMEKAT33Dqeg6VGUkaAs0yKYMbY3b5iDk5A/DJ+ooAnu4IgLiW0tpprXztsVw+chQDgEDjJBBOemMetQ2yxpFcLM0UTjAXzAxP3sEAAEAjrk44XA64qXSjch5Ra3kkMkimIxRhmaVWUhgAODxxg+tVZ4ZkYGY/M43AcHIPOeKAI2RScBwz/dxtI4+pphAB+U575qa2tXuZCqsi7VLEuwUYHYZIyfQDk9qaLeQAkjAAJ+bj9KAI+n9fejtSnk9OKQ4yORQAdunFAB7d6AcDjk0gJzigC1aCNXzJ5uwfe8r7y+/4fhU6LetCvkIj8sq+WA0hBByMdSuAe3HXrVa1nEEgYDD54bdgY7gjuD/AI1Zhv57aWaeCeS0W43xOts+zMbdUAz9zsRnpxQBSjZc5cE8fKQcYPY9OlaFrbG9mULtjVEYmQgkcZOeOQM8fjVaAbZgdp5PHl/NxjkDr29f6VO93LbPLb2pRU8w7QrCRgNpTAfHIwT04PWgBLm4+1xrNHCsflxBZv3jEyncdrHPGcFRxx8ueuaryxr521HUoFUZXOCcc9ff/wCtSJ5gUFBhc8Z+nX3+vamlCjI2QG+8Ce9AGxaWLXq3FqLuGHT7Y+ZJcmMgHoM4xvb5sYUdNxIAyaqSR2n9qrh5IbZuN08ZztI+9hPUY4GevXFQzh1u95TyJIgjDyyflGB8wJ5yTzn1NQt5pbO4s33gc5xk9/rQBOWQWySxNFvMxBUrukwACD0xjt9c1LcTs7JM4LyAbjJPhtx75z75IBz160TXc9zdx3UCi3kEYA8g7dowRxjpkZJ7/wAqrPNG/lrKnllIyCV5LtnqRnqen60AXZmsonYWlzK8JUshmXYd+fQMduVHXnk/iJLSSFNRjFvbbvNHlATShF8zGMiQgAAEq2Tg8cnmqDKt6ryqY4fKjUEEnMpzjI/r2qawlFtcwyxyzR3EbM4WFFbDAfKeTznkH+R6UAMjMlnKkkUhiuIf3u5X2OrZwMe4POBz1PSomlmEZiY+WDl+mS5Iwfm68jt0/Gnxh3uC6RIQrKxiY5D85xj09cfpTjJbvI8kYaCUu7/uhmMA9lU8jALdSe34gEDtuMmyMQgAEqrHGfoTnrUt5cxyTTC3eWSGVg5e4VTKTjnLD3J4+melRTSDA2xxgqqgFM4yBySDySfyznHGKhJCr1U7uc9x7UAIoyc/pRge2e9Jk55FL14z+dACfzNKPXNJnPTHHalCg9KAJUQtEwEeSo3FsgcD69f50szrO4CL5cYHCs5IXjnGfU5NTJNMYhaPJGsKHzFJJZVYjrgcEngHg9hwBUcsclodskUkc4AJWRdpAIBUgEccc59CMUANjaWONipG1uPXP4fjSpGJJGdX2x4yzycBSR0yM55/P2oCgQq0kJAbIDg43D+XBoJSMowLgEZBZeF5wSB0PegC4mnXlxpUl0kMv2eH95gAkAEAFvYcDk/QZ5xPbrpsHkJdEG5S4CujZMTRkcMGUg5HpnBH0qvYyxs6xPOsCIwYSPllVxwGIwSVHPAB7dadIJXa9EdwJosn5xtQOM5DYPb5eg5HHSgCoiC4fdLcqmCAwx8x9cdifrjNWJbJoIfOWzL20jZSVuSO2zIIBOSAR60p3XFtGk6pFDZgpgKeS2TyRyST/KoI7N7mNVg3SyRgsyohIRBjLH8T29KAH8OWiwSsS467VHXIOB2J6mh2mFnFBJNHKvVVDqwGecZ7H8eM0bY4p3aAh0cmMRSn94wI6kDpnPH+TVx7WK3uj9rdA6fLKsbDcjAbcKRkY6HJ64zQBDC8MmntHPHIZFAEUSIPmHzEncTlcZBwAc98Dmktra3SOCU30kbuctsjJKBWOCDnk8Dp6+1RzQm3jhjnlLFC2USUHyx347Z4PuAafZ7Yg264MZQgyQKv31HTvycnoOR1oAikij+zPcQoETIUgzAsWJJGB1xgYPoRyeQKdbRr5aCS7Ft5owAE3Dbzgn3JwPUYz6VA6rM4itkZtzEqAMn8vp25/rVq9aO30+G2WFA7gStui/eLkcAueSCMMAvy8jqc0AUmhmFuZRGxjVtjSgEruxkLnpnAJx3oS4ltxIkMp2yDa2B94fjQsjuDGrEKPmCkk5P4d6iJyxxhec4Ax+lACvHJFI0ciMjqcMGBBH4GkPA/xFS3Mv2i5kmLSMzncTI+9j9T3+tREc5xmgBOD649qU9e3PtQODx0oB4x1oAUEDGCQw65rTOs319FbWl5cNPDA2YEZc+Vk8hB2B9BxkD0FUYPKCSSSru+UqiZI+Yg/NkenX3pkZZJMgHeDgEckfSgCfc22S0Uq8KOXyuCeOM7sAkY7d/SrUeowxZQ2kE3zBkzn5T1AOfvAc/XPJOBVJpprto42b5YsiNGY7UGSxAz0BJJ+pqSGWORpBNIIozG2FEe8E4yqgZ4yQMntz16UARiKJk8zJBOMgdu2fzpgVlQuGHC464PPBA55q5Pd2zQLGIIi7BWd44yhU5OVAzjGMcjFMsZIPP8uZvLilGwuzkBcnqcA5GPXNACg+XZzROuDKq7Qr53HOd3vgdqVn+1yQrDOsQigyDIQnzKCSM9ySDjPPIFQ3EkayMloZfJ4P73aWyPQgevpipg89u6Tl/JuLYLIvzBSBxtI5znJHA5HWgBLLyZGDSxGRi43EOFY5I4GQfz5xnpVkNJZaki3FvFGFhLRiaJeUdSVYgj5zhgQSO49BVaO4uI4iihPMkIm8xQvmA4PRuuMdsjnHFVDIzhlBABIJGc89M5/E/nQBJclZZDIpGHbO3GNv8AjU0V5iVibaLe8ZiPyDHPGQOinGOR9etVwU2hW3K4Jy2Tz6DH+etSXF7NdGFLiUyLEpVM8BQSTwB7nOKAJPtL7AscxjDuPMLNwSDkZA6gdfzqOZnmcqH3BARgLtAAxnA/Cp7W9ksYw/ls3ng7g+CsiZHB7/eXtjpTLW7+z3AuEhhkEYOYpVypzkfjjIP4DrQBFDOIoZISiZYgrJt+ZcZGM+hzyPYdKieQSMWZVyRggDGD9KXz5MDcQwDb8MBjPHNM3fKAFAxnkdTQAhwPyo6HB/8ArUuffrTSfY+9ACjk9eaAB/jSZ4wO1A44zQBMs5WIRqEXnO8L82CMYz6e1Ai3TJGrxyF8AYYgAnjk8VDyMkfnT0fYwbCsc9CuR/8AXoAHXYzLkFgcEg5B+hFW7OzYxPeNbm4ggZfMXcVXnJwW7ZCN3z6A1UjZY2+aJX9mJ/pQZHEZjDHyyQxXPBI6E/r+dAASX7Dk5wBUsE6QxSAR5kZSqtxgAgg8EHsfb1ot7trWdJY44m2c7ZYw6k46lTkH+VNjnZbSW32RMkrK25kBZSucYbqM5OR0PGegoAC6tlY4gWfbjqWB9ue9W47r7DefarWSUyCMoTKoDISCreobjI6dD681TklDj5YUjzj7ue3fr1PrTQfnyVDH0YZoAkad5JIUlLOkfAC4zt9AcH8KdcRES72DRrIokjyAMp0HTHp1xyaYsMvkmaMZRANzL/Bk4APoTimxzNDHLGgTbKAGygJwCDwSMjkdRzjjpQA1mJzuO7vzVhLhrSeQ25IDxtEfMUEgMu1uD06nnqPrUKShIpkMUTmVQoZs5j5ByvPU4xzngn60u6N3VpC5yuDjGSccf0oATKlQNxOOx4/KnPIWt4kMUS7QRvC/M3J6nv1x+FNKYVW3KQewPI+o7UzLcZzgfpQA5ypJ2g4z3PNNHUUdR2xSZ56UAKP1ozj6CkHH8VL0P+FACE8gdqcB+lFFACN1x6DNIDkiiigBSAMflSNkAc9RzRRQAZJY+1OxzRRQAnv74oxljmiigBPQetKflAx2oooAB1/HFL0GfSiigBO+PYUYyM9zRRQAgGTjtQTx9aKKAFxjOO3NLjJC9jRRQB//2Q==",line:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5tooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKK04vDOuzDMWi6jJ/u2sh/pSyeF9ehGZNE1FB6tayD+lVyS7AZdFSzWs9u22aF4j6OpU/rUWCegzUgFFFFABRRRQAUUYPoaVUZjgDJ9KAEoqzHpl/L/q7K4k/3YmP9KnGgaww40q+P/bu/+FVyvsBn0VqL4X15zhNE1FvpayH+lWY/A3iubHl+GdYfP92xlP8A7LRyS7AYVFdXF8LvHU3KeEtYA9XtHQf+PAVY/wCFSeNVGZdFMH/Xa5hj/wDQnFNU5S2QHGUV2P8AwqvxUDg2+ng+h1W0z/6Npw+EnjNx+60mOf8A643lvJ/6DIaapzeyYHGUV1c/wu8c24JfwpqzD1jtXkH5qDWXceEvEVp/x86DqcP/AF0tJF/mtTyy7Ae+SatZn72q2LD1fxPrLfqIgKYmq6aTtXXdJjb0TxtqMB/8ix4rYfVrUr8ni3TA3oPiJcA/+PQYplnrd+9yEtPEGpXQzjbYeLtOvM/hPGM/jW6qv+rCKVpd391N5dnqusXQ/u2PjOxvx/3zOoJ+lNu9Cv5Z/wDTtJ1WZT31DwZa3wP/AG0tWDH61q6poeqTTia80nVrpGAO6/8ADOmakp/G2cMaoT+H7KFluI9HsYD3KeF9Y0xgf96FmUfhSVRpWA5298NeHPNIu9K8OKc8mXT9X0xvx4ZRVX/hDPBExH+jaCD3EXiK6X9GtSa7m2vPLURK8qbeixeI9ci/8daFq0oZL10B8jWXTpvTVdcnH/jluv8AOnzr+v8AhgOCtfht4WmYG30SC7/643+o3P6R2Y/nWzb/AAy0SFDJD4Vg+Xn99pl8wH/Arm4gX9K65tK1CWDzkF9dxqNzx3kOoFAPrd3kQ/Ssn/innnH7zRtNvVPVm0e3A/8ASh6XOrbfl+YGZFaeHbKTy1TRNPmX30a3wfqzXD1dTUTEu2HWI5R2Ftrcij/yWsAPyNan9q3n+r/tD7dGOn2PWblV/K1sVH5VE817KRsttXUn0v8AxDJ/6DGtHtX/AF/VgM1r65fObi9f/uL663/oMCimiS4kPH21v+33xC3/ALJWgy6geqa0B/108SN/SlW3upDh5NZTPrbeI5P5sKXtL/0v8hlVbO8kHzQ6kAe+3xHJ/hUi6BPOeLK7uT/dk0fVXH5z3aCro8P3E+3yoZr0n+G40TUiPznvFH51Xv8AR7WzYDVfDWm2oHV10vSoz+c925/Oj2jQinceH47Ubr3w9YxL/efSdORv/Ji9Y/mKp7dDgb5FtoSOyjw7F/8AFVc+2+HbNs2WpW9mR2N14fh/lG386kTxJvO2PX2l9Bb6roTH8jCKTqXeoFSMW91hIRNNnjEbeHZP0wKLnwvc48w+G7maM/xS+FdKvB+dvKD+Vac+kXuqWhni03Xb1R1L2Gg3q/khVjWanh+1aJ47rw9ZROOQbj4f3Ab/AL+WsmPyo57jKcnh+zij8w6HZ2zL1Z/B+p2Z/wC+reRhUcV7a2vyi8srbHprWuWf/jrI2KktrnTtLnwJ9KtMdv7S1rSMf8BIIFaa6zp78p4n0yM+n/Cw73+TQk0/aPf+v1EKnii5imAg8XGQ+lp4vsLg/gJoRV68tdU162FwbXX9U/vmez0LUEP4IysRVKLX7zVE8htY1G/B6CHVdCvR+UiKTUJ8Pzeb5svhdrlT/HeeELC7z+NtMP0qOTqMlTw/aNFsuPD1hayL0b/hAbpZD/wO1mI/EVPbWdxajbBb6mE9IIvEVoP++RuFV10SFG3RaUtmfS38I6tbY/78zkVfgs7wDbHcaqo7Kul66B+TXCj9aXKwJ4knchWXX4PcS+Ipf0IX+dXJbDUYYvO2zajaJywv7S52/wDk5fKP0rOmtLi2UveaXFcRf3r7Tdv/AKV3+PzFZq3egQTCSyutJsLkHJ/faNb8/RI52/WnyMC4JvDb3AktrnR9KvwctmTR7dR/3ys7/rV8+IbuU7Z7ptSUDANprF4B/wCStkoqi/iS4uOJNQkvvQ2+sX2PytbJB+Rqu9/dyHKSalGP+u/iOT+QFP2bAtyT3MjEpFrUf0ufEUv8kWmA35GRJrQ/7Z+JD/WqTG6frJfEH+9b+I2/9mpy2tzJ/wA/7Y/6h3iF/wCbilyAX0ju3OGudZUe9l4ik/nIKl/si6kYeTbTX+e1xoGoH9bi7UVnppNw/TS57rHaXw9qLD857tRVe50+ziGb7w/p1sB/F/ZGlQt+dxduf0p+zYF6+sNPt3B1bw1plpjq8emaTC3/AJHunP5iqses6RYP/wAS7W7axA7NqOgwY/74haqkWsadYHFnqdnZkdv7R0G3x+Cwvj86kPjK9Pyx+Ktw9IvFWlL+n2cCjlQi+fHl+SAnjBJPaHxDo5P5G3AqwLzWNdtX/eeJNRYDjyW0C+U/8BAUmqC6nrWpQFVn8Q3o/wCmNxoeog/8B2qTWRLYrE0j6po4UY5bV/AIYfjLat/Kn7PYZej0iFZJRqPh6FcqcvqXw/MxH1ktXx+NULC/0PTr7C3Xhyz5xiPU9W0I/wDfJBAqlpl9oVpcuba68K20g6C11vU9EcfRXBUVq2us6gZs2er6sw/6c/HNldj/AMjrU8oFmfW4EmJt/E1lGp6eR8RmkH5TRE0sfiWRuD4wgUeknji2H6rATWh/betFAZLvxI4xyZNR0CT9StVp/FeoQ5U6/qNqP+m+u6Hbj844iaOUDzp/iv4ev1/0yfWHPcXWkaXdj8zGhNEfjnwK+C8elg+s3g+BT+cVwteMUU/au9wPcF8deCIwCs2kgeieHrhf0+2AU2T4j+B1HNvbT/7nhqM/+jrpv5V4jRT9rID2X/hbPheyffYabfK3rDp2mWv8oJD+tNm+PLFdqWeuMo6A660Q/KGKMCvHKKXtZdAPU5vjdcSjH9k3rj/pr4h1Fv5TCqx+MUrZzoCn03axqJx/5MV5rRS9pID0Y/F6U/8AMvwH/e1TUD/7cVFJ8WJXHHhnST/11mvJf/Qrg159RR7SXcDtpviddPzH4Z8Lxn1OlrKf/IhaoR8UfEcR/wBGXSbP/r30i0T/ANpVx9FJ1JN3uB2g+LvjhT8muvGPRLeFR+QSkPxa8ZuMS6rHOPSayt5B/wCPRmuMoqvbVH9p/eFjsl+JN5Jn7d4e8M3+epl0mJGP4xBD+taWnfE3TrI5XwzJp7f39I1i6s8fQFnH6V53RSVSSA9ktfjFZGMpLrPjOFT/AATXNtqCflNGCaG+I3hu4O6fVJ5T/wBPPhPTZD+YYV43RTdRtWA9i/4T/wAIJz5yE/8ATLwhpyn8y5qVPi3oVmv+i3Otg/8ATDS9Ltv1ETGvGKKFUcdgCiiisgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9k=",dandelion:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDovs3tR9m9q1fs3tR9m9q6TMyvs3tR9m9q1fs3tR9m9qAMr7N7UfZvatX7N7UfZvagDK+ze1H2b2rV+ze1H2b2oAyhaknAGSafJYtFjdt59GBrS+z+1Kbb5V4oAyfs3tR9m9q1fs3tR9m9qAMr7N7UfZvatX7N7UfZvagDK+ze1H2b2rV+ze1H2b2oAyvs3tR9m9q1fs3tR9m9qAMr7N7UfZvatX7N7UfZvagDV8gelHkD0q75VHlUgKXkD0o8gelXfKo8qgCkIMnpS+QFbDKeOoq55VHl55NAykYgeigfSneQBFkH5s4xirfkjBx1HIHrS+QAmF+8T0qWrrURSWJQ4JXIB6VOYUVVZCgck5H41MYSAM85HNI0GAp2e+RSd9GgKkke+TJXknpnpTfIHpV9oMHjGKb5VUgKXkD0oFuCcdPrV3yqQxcfWmBTNvtJBHSjyB6Vd8r2o8qgCl5A9KPIHpV3yqPKoApeQPSjyB6Vd8qjyqALvle1Hle1WOKOKQyv5XtSeVUsqoELSHGPekS4hIBVlYdetYutFOxo4JLVjPK9qTyvap0dXGR+tO4rVNNXRmV1hywB4HrStFk468YqcYFHFMCrGjGPBxgdKiWVEuHR2wh4GfX1qa8cRvEgJVC2Wx1I9KqCN5HQMzMHydxOMDNcVWq4+6t0Q30LCtE2QWwR6dMU7y1MhAIJAqOeARjBIGRgsajtilvNt8wEg8++e2KUK0r2Y79y15XtR5VWOKOK7iiv5XtR5XtVjijigCv5XtR5XtVjijigCv5XtR5XtVjijigBM1HcSPHbu6Y3KM0/NFKUeZNCMa4vZp5FSF/l/iGOv+FRvKCXXgRrx8o64/nWu1tCZA4QK47rxUI023DE4PJzivMlhal7p3M3GTGaUJPLdmbK8ADGMf5zWhmmqAihVGAKXNehSh7OCiWlZWFBIOfSjNJmjNaFCmPzTwRuHTIqMxSKFGPmzzn0p4Yg5HBFOMrFcZGfUisJ0eaVwKwM0lxIknQNhQB2Izz61Wn0+SS7DgKAGB3Y6D0q2pK37tz88Y69OD/9epi5PWlUwyk0ybJ7hmjNJmjNdJQuaM0maM0ALmjNJmjNAC5ozSZozQBH5go8wVQ8+jz/AHoA0N42/Wk8wVSeYqQM9AP15pvn0AX/ADBR5gqh59Hn0AX/ADBR5gqh59Hn0AX/ADBR5gqh59Hn0AWZZlS6tzn7xZP/AB3P/stTeYKyL2cqkDg/dnTP0Jx/WrHn1bWiYi/5go8wVQ8+jz6gZf8AMFHmCqHn0efQBf8AMFHmCqHn0efQBf8AMFHmCqHn0efQBn+f70CXcQPXis7z/epbSXdeRc/xZ/Ln+lAF6W4DTOQeMmm+f71m+fnnPWl8/wB6ANHz/ejz/es7z/ejz/egDR8/3o8/3rO8/wB6PP8AegDR8/3o8/3rO8/3o8/3oAsahKTYS4PK4b8mB/pVkz/Mee9ZNzKGtJgxwCjZ/KpBPkA56jNW/gXq/wBCeppef70ef71nef70ef71BRo+f70ef71nef70ef70AaPn+9Hn+9Z3n+9Hn+9AGj5/vR5/vWd5/vR5/vQBR3mprRyLjPorH/x00UUCIN5xS7zRRQMN5o3miigA3mjeaKKADeaN5oooAhu3P2G4/wCuTf8AoJp0EjG2iJ7op/QUUVp9j5k9STeaN5oorMoN5o3miigA3mjeaKKADeaN5oooA//Z",jellyfish:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5UoopcUAJRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABX058MNV+Hvw98Aafqk/g4a7qlwVF7d3UcZKOwLbI94IAAGMDHua+bNNjE2oW0bKGVpFBB6EZ717Fq+m+IPFM1hp+nWcy6daHzC+NqySN1k9/QAdvrW1KF02c9apytJF742N4P8beH7TxB4W8Itouo/aGjkNsqCOZAuSrqnAk6EccjPJ4x4NX0h4P+FSpe6nFr2t3Ol2V3bKsbRQb1eUMOXjPYDOCCCCevavKPiZ8N9R8G6tPKjQ32mO2Y7y1OUOf7y9UOc8H8CaKlO2qQUqqejZw1FFFYnQFFFFABRRRQAUUUUAFFFFABVyDSru4jWRIsI33WchQ30z1/CpvD+lvq+q29sImki3hptvG2MH5iT24zXqel/DrU/FNx/alg0cFlIWjtfMQ5nC9BGo/h4wCcDitIQvqzKdSzsjya50q8tF3ywsEH8Q5FU69x1rwdrGlxPbXWisjwxPK7rMrrIijLMvfgdR1rxrVoEt76RIxtQ4YL6ZGcfrTqQS1TFSqOTakinRRRWRsKrFGDKSCDkEdq9g0n4j+K7jwvHqOhXqTz6ZGI9SsZIUc+SCNs0fGQvZtuCDjtivHqvaLrd/4e1KHUtNuGt7mE5VhyCO4I6EEcEHg1UZNETgpHpXiHx14u1LSoNe0TxJqV5o9uym6sZnDNYSHgLKuPnibor9OxwcCq/hjxNq3z33hgm7SLMl94cunM2U6s8GfmZOpIB3r1O4AtTNMurTX7o634TeDRvEKowutKfBtrxSPnCBuCrDqjceuMbji6jpIkll1vw1Fc6VqOnt515pauwmsWU582FvvNEDz/eTvkYcvmfQXItmJ4m0Q+IILnxXoEVvNp64N5b20Ijk089B5ka8bCeki/KT1Ck7a42vSNH8Xxa5qMWpw3cPhzxfGCPtyKEs9TyMMs6Y2o7DgnGx8/MAeTR8Q+G4daluptN006RrlqC9/oeCAQBky2/qmOSnJA5GV6S9SlpocLRRRSKCiiigAooooAKKK0dA0DUfE2qQ6Zpdu09zMcADgKO7MTwFAySTwAMmhK4m7HunwM+FlzrHh9NSlCW1nNJ5t1K65aVB92JR6EfMSfUdc17TpunTvrMF9DbBbGzcR7AOkeNp2j2Bz9BWbo/xQ8P8A9nWfhjwzEl4LGzLXkkCnZEkShWZWwAw4+9nnjGc1s+GPiv4QtkW3srxJ3T7wUltme7HrXWk+XRHDKUee7fmbfj3w6IPD97cW0fmTRrvjZVyVXjJ+mMg+2a+OfjZ4QtPD2r2N9pwdbTUIBJsPSJsn5Qe4/wAK+3tE8Z6Pqkr6dPe2sjPkwnoJEP8ADg9xnGO45r5y/a3t9K0LQvD2iWc6yym8uLpF7xxFVG0/iePpWTXLFxkjdSUpKcXofMlFFFYnQFFFFADo5HhkWSN2R0IZWU4II6EGutsfGYv3tjq801tf2xH2XWLYYmhI6bwPvr+v15zyFFFxNXOu1rS4NYk3wR2trqxG4xWxH2XUF/56QdlY94+BnOMH5Bn23iS5FvBY6g8ubMj7HdKSLiyYHgK3Urn+A9Oowc5zrDUBbBoZ4/OtnOWTOCp/vKezD9ehrSvoor/Z58wZ5B+5vMY83/Zk9G7Zq/QjXZj9VtH1WR7hxCmpMvmkRACO9Q9ZI8cBvVeO/AIIrniCpIIII6g1q2sz2xOn3jeUobfDIefJf1B/unvTNREc8RmYBJ0O1wOhP/1+oP4dgSmNXWhmUUUVJYUUVasLFr6YrvWKJBuklf7sa+p/oOpPFCVxN21NPwh4Q1DxlqyWFkAiDBmuHHyQr6n3PYdSa9W1HTNP8Nw/8Ib4fVTczpm9Zjh5EGCXuHH3Ihwdg5Y44JKiufsvHkuh6QPDfhjS7eyvyMtftJ81uuDvkbPAlI6tkiMZUc8jA1LxAvh6wfT9MlkN3cHzLi6fPmux/jbPIbk7V/hByfnPy9ELQRyz5ptfl+rN/wAWeObfwrolx4P8Kysr3HGqagBtknI/5Z8fdA5G0H5RkZJLEwaEE+E+gr4julU+LdUhI0i3YZOnwMMG6cf32BIjB6ZLelYXhXT7HRLL/hKtcgWeGNiLCxfpeTDu3/TNTyfU8VJpiv4p1K/8YeLZpJtPt38y4OcNdSfwW6emeAcfdX8KlpvUtNLRbfm+xs6b4r1nwL4Lku5dRnl1fX+bOG4Pm/ZbYN81xh84eRhsU/3Vc91NcV4h8W654re2fWtRlvWtY/KhLgDYucnoBk5PU8/lUOv65d+I9WuNTvSvmzEYRBhI0AwqKOyqoAA7AVnVm5X06GsYpa21CiiipLCiiigAooooAKk85/J8nOU3bgD2NR0UAOLsyqpYlVzgE9KSkooAKKKKAHIjSOEUZJOK1ILgwRpHajcQ37rjmST++fZe35+tVIbciNecNKCc/wB1B1P6H8qef3ZfgrhcN6qvZfqe/wCPvVx0IlqXftqaXamOBhJLIctJ18xgev8AuKeg/ibk9AKg0eyS+uXub52FrEd8zk8v3xn1Pr/9as/57iXtk/kB/gKuTSF40soTtjX5mJ4/E/z/ACHai99xctlpuaU08/i/VlMh8iygAjRFHywx9lUdMn/6/QVH4m15L9bfTLFRFpliCsMa9HY/ec+pPqf61Vub0Wtr9kgyu4HPqAeuf9pu/oOO5rLpyl0FGCvftsFFFFZmoUUVYs5ktnMxAZ0H7sEZG7sT9Ov1xQDK9FFFABRRRQAUUUUAFFFFABUttA91cRwR/ekYKPqTUVbXhfT2vbuVhlVjjI3Zxt3fLn8ix/Cmldik7K4+6Mdpbm6A/wBadlup/uL90/oG+uPes29Bh222fmX5pD6ueo/Dp9c1fnu49Q1h7hVAtLVS0adtifdH4nH51Rs4RcSyXNyS0MX7yU55ck8L9Sf6ntVN32Iiraskgt/Jh3uMsVDkf7P8I/4Ef0FLMn2OMtIcysef9pu/4A/mfpWnDHst5L26JUIRK5Ax+8YfIq+6ryPQt7VgXNw1zKXICjoqjooHQCh6IFdsjJLEkkknkk0lFFQaBRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABXU6Ufsvgy9uIuJZZmRm9lVAP/RrfpRRTiTIw7c7dLvHHVnijJ/2Tub+aj8qvwwRs+j2ZX9zPieUf32LsvPthcfifWiimhSE8Q3MrW+n25b92YBcsAMbpJCSzH36AegArEoooluOGwUUUVJQUUUUAFFFFAH/2Q==",standby:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5voFH4UAdKAFHb/PpQO3+fSkA6cf54pQOn+fSgAHb/PpSUoHTj/PFGKADmj/P86Me1BH+cfWgAOef8+tKe/Xv/WjHXj1/r7UpB549e319qYAc89e/9aDnnr/nNBHXj17fX2oI5PH6fX2oAOc96Bnjr/nFGOen6f8A1qAPb9Pp7UAA7de39KBnjr2/pQB049O309qAOnHp2+ntQADPHXt/Sk5wP8+lAHTj07fT2oxx0/zx7UAJQc0dv/rUEcHikAmPagD/ADijv0/SgD2/SgAA6cfp9PalA6cfp9PakA6cfp9PalA6cfp9PagAA6cfp9PagD2/T/61AHTj9Pp7UY9v0/8ArUAGPb9P/rUuODx+n19qTHt+n/1qcF4PH6fX2oAXZ149e319v8/yeYW+b5Dxn+E/7X+z7fp+UsVsZA2EPQn7h9H/ANn2/wA9t+38M3c4mCWc29FkOPs7k8LOScCHt5Z9MY7YOzSMLgc48DDd8h4z/Cf9r/Z9v89mMhBPy/p9faus1bwlfaeZPPsZoyC4ANtIucNMD1hHTyz+XbB285c2rRuwMZBBP8BHc/7A/wA/oShbUCpt56fp/wDWoA56fp9PalK89P0/+tSAcjj9Pp7VAAB04/T6e3+f5gHTj07fT2/z/NAOnH6fT2/z/MA6cfp9Pb/P80AY4HH6fT2/z/NAOnH6fT2oA6cfp9PagD2/T6e1ABj2/T/61GODx+n/ANajHHT9P/rUEcHj9P8A61ACd+lAHtRRigAHbj/PFA7cf54oH+f0oHb/AD6UAGPb/PFAo/z/ACooAXHt/n8qeB7fp9fao6eP8/rTA2dNtklaQNFnCOeE9EkP/PM+n6duo9t0Hwzb3OlvI1jH/qpufsiZPGoD/n0/2R+Q9Ao8PsHCFztUkqw5UHgrJ7f5/l7d4d1C3h0qcDYQsM6sqIhwdmpYz+79/wAvbgbNXjoIu+MvCtokV2oshjfMdy2qgjDXp6i09h37DsAw8L1u2CX02IlUBjwIwvc/9M1/l/8AW9s8fazCy3hjSDd5kwQPGuSDJegnHl57+vp+HiGssjXspQLtLNjAGOp9FFCVo6gY7Lg9P0/+tTMe36fT2pzYz0/z+VMrEYAdOP0+ntQB04/T6e1A7f59KB2/z6UgAduP0+ntQPp+n/1qB2/z6UgoAXHtSH6UUUAFFFFAAO3+fSgdv8+lA/z+lAPT/PpQAen+fSij/P8AKgUAFOHf/PrTacD7/wCefegC3FLt3YI6MP0f3966e1157e3nQTOu4SDKPjOVuRz83P3/AMj+fIh8BufXv/ve/wDn+dr7SQr4fs3G7/rp/te/6/ntCVhHU6zrzXElwDMZW3yYZ3DDl5z13f7X+e/K3Uu+Rvm7nv7n3p1xcl2fL9S38Xu/+17/AOe9WR9zE7u57/X3onK4EZPNMFOJ9/1/+vSZrEYD/P6UDt/n0oB6f59KAen+fSgBB2/z6UUDt/n0ooAKKM0fjQAZ560A9Of1oz7/AK//AF6Aff8AX/69AAD05/zxSg9Of1+nvQD05/X6e9APTn9fp70AID7/AK/T3oz7/r/9elz7/r9PekB9/wBf/r0AGff9f/r0uevP6/8A16M+/wCv/wBejPv+v196AHbuDz69/r7/AOf5vMhw3zev8X+97+/+e8e7rz+v196cW68+vf6+/wDn+bAe8hO75yev8X+9/te/+e8bNyef1+vvQz9efXv9ff8Az/NC2e/6/wD16AEz7/r/APXoz7/r/wDXoz7/AK//AF6M+/6//XpAAPTn9fp70A9Of1+nvQD05/X6e9APTn9fp70AID05/wA8e9GfegHpz+v096M0AH40fjRn3ozQAZ5/+vQO3NFLyMdeaAEB6c/5496UHpz/AJ496B2/z6UDt/n0oAQHpz+v096M+9Hp/n0ozQAZ96M+/wCtGaKAFJ68/r9fegnrz+v196D3/wA+tB7/AOfWgAJ68/r9fegnrz+v/wBekPfn/PNGaADPvRnpzRmigAB/z+VGff8AzxR6f59KM/5/KgAz/n8qM+9HpSZoAXNGaSigCxFd3EMflxzuiZztB4zTrm+ur1YVuZ3lEQKoGP3QW3H9STRRTuwK4HT/AD6UAdP8+lFFIAA6f59KO1FFABijFFFAB6/59aCOv+fWiigAI/z+dIe9FFABjmlFFFACDt/n0oA/z+VFFAB6f59KKKKAEo9aKKAP/9k=",sphere:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBAUEBAYFBQUGBgYHCQ4JCQgICRINDQoOFRIWFhUSFBQXGiEcFxgfGRQUHScdHyIjJSUlFhwpLCgkKyEkJST/2wBDAQYGBgkICREJCREkGBQYJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCT/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5VGM89KXI7KKTFB9cCgBcjBHqKVOTg9PpTcH0oAzQAvGMevpSYqSGB7idIIEaWSQhUVRyzHsBV5dFuNzCbCbfvLkcfU9B+tAGaAPrV620ieZfMlkgtVxlTcNt389AOv49PerccMUGRBLChA+aQjcV/Pp/nimyf2a0KAyXk8rsS7thVcjAHYt3P59KAKj6XIjFfPgYjsrEn8sZpn2FySMjP+4/+Fafnx2n7oWVrIG+XfJmVYjnjknGfXjHtUVvq90s5O+SHystiF/LAI9h74oAgXR2A/fXdpBnp5rkE+2AD+Z496gudOurXiWJsDoyncv5jirL30V0S00sqSE/fKq4P1H9ant55InSJXjPmYVD5WM/THBHt/KgDGIweDmj610N/bW5kJeOyKkAh4ZGKkY9edreobvVH7BZXAeOC5kjnUHbFKnDHjjdxjv1FAGaCCOQTRgnk8d6GRo2KOCrDggjkH0pMkjGTQAZ+XHvQQRQKd1XB6L+tACfKRknBx0ApKDjJx0o7UAGKCO+MA0dqOp7/hQAp9cmko5z61d0+0EjLNKv7sHAGM7yOTj6D+lAD4EFpbGVyVeQbQR1VSOce5HH0Jq5eSboII55F8sA/wCh7yuxuCWyeASCM9zjnAxVaS4VrsMOSgJA6iJRzj3Y9z6mq0qyziLHzO25yc9OeSTQAt1b3OFYKWhzhNg+Ue3HepZAbeOOOIFrg7gcc+X9Pf37VNp0zabIWifDSxsmcAlgQR8oI4/3uvpSTas01tEk0UTxAsu1RsI6HqOT175oApJE8DAtMIT6A5b8h/WrxmtJbV5Hhy8jLG0xO3B5PKjscD34qr5cMvMMRf8A2Q+GH4HOfwq1ZQWr2+JmuY4pXIG0KxaRV+UDJHcgE9gfwoAqeVhiPs8Sgcl2Ylceuc1Zt9QFok3kwwNHt2MWXO8njj04zg9aYiSXKiNAs0A6ImQU9xnv/Oi906e1iijfYPMzJ95RkHgcZ46Hj3oADKI4RJHGuF6OpKkoT0Iz2PUe9S2lzY3EwW8jlijCnMsZDFFIx0OM9emarWkTo3lyxsYnBDbSDtz3FJeWk2nj7PMjJI3zNkcEfw49eDn8RQBbns2uEPmukjxjalwh+VgOgfuD6E/4VlSIY2KMpVh1Bq5biURpcrI0LINu4dXXtgd/T06Voyi01q2WRoPs1yqlfMTpIw6Ar0GcgZXAHXHJoAwQpOepA7ijooIJz9KQjbx3/lTiSec9u/egBFIDc8ikH545xRyp5pUGc+v0zQAnX04oyc8fpRQQR7EcUAFdBJdotpJC0cKOIYo42EeAVCgsDjkZLckde9YAHQZOTwRWrdbmvEhTq8W3HfJHH/stAEYt0jt2eaFrdZDtDg5UgcnaD17d6kuBFDBAsEiFihyki7dp3E854J5Bx0GaYt04tQpcyW9q21Ub5lJbngH1IJ+lQrJDcQvvBRw28kfMOeDx19O9AEYSZLqOWUMRvHz9c8+tNdcQOv8Ackxn6g/4U6OG4jObdjIDxmIkn8utaRmihNyJY45mY79y4VgRzhSOOhOTg+3rQBnx2oiUS3DtHFnKgD5nPsO31q22pGeGNikaeW52yBQXUYGM+o4qpMftb+Yky7+AEYbSPoen65pqRSCF4jGfM3qQpHPQ9qAHXcU32ry2YvuYeWScgg9CPzp4uWl8yGNyRnMakZHAxjHTkD9KmhkSLyVdVkZ1KbcnarYIByO/3en45qpEI5ZUWOGXzCQAEfv+IoAdAYZSXltxhepjOCx7DHTmtG5XEEE8Nx51wwZJoXXAVgeOOQx246dMd6ivfs0JEdtNgsu5mZeA38WCPcEZ9KjtbKW7glhh8uU53qEYdgSTj6CgCKGZZrg+fGynGJGXgBe+Qf6Yqa4/0KQi3cNHBJuiYjG4dCSOxPGR26VXluwALd1Mka8Fm4bP19PQGrUMDXV20FurT/aFA8lfvklcjA7nOOlAFbUoV3+fGSY2OPocZGfwqlkjofyrYt7V9qJIjPBKpjduBjHIbk9Rn+lZt3bPa3Mts7IXhcxnYdykg4OCOtAEIx3NKMn1oBxkEUgI6EUAKOOGFIDgH3pTwSOvbmkGc8daAJrWL7RdQwryzuqj3ya051cX5uyFUKQEDOowc49ewH8qxs+vWtrWPKvoLS7gJjLxYlDYAMoJ3EHtnAOD70AV5LOSKWWyBRggZTtkU5YHOevtge1Q2tpN5yqI2O/5MDng8VJOHS5dihEkTbiCPvJnP6fy+lQw2/8ApjqANsWWyegA6E/pQBMLeSyZvNV4nj4duQQf7oPr7/WnS6lLcyw3NwEl+URHK9FUYAyP9nAqO4uWeNXgd1VDtbBIyf7x9z/SltZHuElVxGyqN5LoOMe45yRmgCP7PE8rx4aIqTuOdyr/AFH61bgeRIpba2ZJkZOd3JbBzwDyB16VBd3EM3l/umiQqD+7bIJHBJz1PHr3plrAJbmPyHVyzAbD8pPr14/WgCRIkkTywslvMHBVSCck8fXrj1qa9t3spJI7dklkkGZJImDhQedox9eT+H1mWa60X7RYxMSZEaKWT7y4HO1SeOqjJHXtx1os8c8cJ8khiSmYzggjkcdO/tQBB5ZlhVF+Zkcrj2P/AOo/nU9tMkDNEhD/AC5Zuu7HOB7cVZgnASWCO4jmLociYcnHOAew47EZqrGsUUsbTQyQjcMsvzKR36/40ARl5BN5BAmwxUBx/I9auXEsFmInt4i02wBmdshCOoGMdsdexp89obMK6PHLPIgwqnlMZU5B7/L/AJ5qgiPIrwsH8zO8AjnPf9OfwoAutJI8Zs92ImkWfYowMZwOB7EmqF8xa8uGJ+9IzH8TVxMSXSshyPKeL8lKj/2WqNyP9Il65Dnj8aAIjwcgYFGQOn40EHJzx3o6cg0AAxnnkUoO00AgYP50lAByO+K1NPuI2spreXiIMCc9lOASPcHafz9ay81NZ3ktjL5kRGSCpDDIZSMEH2IoAtXE01temJlWXbt+XqD8o6H0Pt61oX2noNPhntvMjW5VRKZ12hWX+AN6Y2ntn8qJ3fWbPzIJ382BAME4O0fwsR1x2b069KoG5MMlwhXcqMA6P0ZR8pz+Q9xQA23szG43yRvG3yv5X7zj8PTrQ6bZwtuyskbcL0ZsdSQe59s1FPbhCJrZmaLG4f3lHv8A41M5nnuZF+WQbz/rBnGenPWgBjWkr5tkRi6yfKDwSrDrz06frSSypaRNbQMru3Ekw7/7K+3v3+laf9owfZTa2qsuIzHNJnf5vO4YVvurxjAPOAT1xWYVik6LE30Yxn9ePyoAFnkiuY5Y2YbwrYXuehH5g1YkmWKO4tXSKSRSC7gbWGDgqCPrzSywxW1qC3nRTAlTuTIjU8jnPXr24+vRsNobm7VY5ov3qc7iVVflwSSRgAEZz7UAVoET7QjRPltw/duME+3oasyxvocskUmRcjIMYP3Pr2zUZmWxYw22fP8AuvOQQR7KO316/SoZZ2WaVTtkTe3yN25PT0oAtanfNdTtPPDA7s7A7Ywg7HgLgDrUlldR2zpIfMDFWKxtiRVG084P6Cie2Qo8owXEuUt2+82V6+44Huc9KqQKdzz3BJJRiFPV+MflQBoWFvbz2zu0iQ/OuwgMrEZyxxyMAKCeRWXezRTXdw8O/wAppGaPcMNgnjOOM4q1du1taiI7RJKMuR2H90emMAfXPpWbnFABjnmg8nilzjnHWjOBgdPpQAgz2JyeMUdvejJBznmkoAUe/SlHPBPHWkzjoaCc0AWLC+uNPuY7i3Yh0YMARkEg9x3rfe3tdUk8+BIIkuOAd6psJz8jZ4GD06ZAH0HMjk5qS3nmtZN8bFTjBHZh6Ed6AL6QR2khgaVmkz90/uyjdM5PX8OtT6nFLb7PtNo9rJKgOI1IVBjrg92GDnPQ+9PgMOtlYnKx3ORje3BH16jHrz7jjNNNneusyxRSXESMZF8o5Ma9CQVyAOnPTigDPsw1vcJLGVmQH5lU/MR34PNEtu2nzsjDdLnCLjt2bHv2qWSV7dA0c32kjqzgEIfoe/v0q1e6tcSW8ImOXUbZZF+WRieRuPcY4x7GgCnZEwuyyzsvmfKUQ5Oc8Z7DnHr9KsXd9mxt0a1hjyGH7sbXYbjyx7nPHTsaghXzQZA0Lxr1DRqrE+g9T+NTXctxcpFNDGsTbcOka7dnJ7nkA/XrmgBlrbJePGpMkRLDbJIMKOehb098cUyeB7aSTYizSEkl1wwX6D+p/wDr0wIkMZlnmLO+VUJ8xx3OTx7d+9WrAGY/NEsMKLu85+Sg+p7fT8KAGXkbRuPMjZ3cbghBJJboT36AfWrNnC028XId7p0Ox+f3SrgszHHICg4Hb14xUlybqa6nu5b2V4iSXud7EyDoAM8rkDoefbtWbc6pIyvFbloomG18Mdzj0J9PbpQBXvbgXEzOowmcKO4UdBUJ6kDp9aMAg4x0zQu4HIH6UAJyT7mlHGc9P50ZxzzmkzQAA4OaVxtYgdqKKAAgYJ6YxSdqKKAHDBU57U0c/lRRQA7c0MgaNmVlIIYHBB9a39MuJdSS4muHbzYvnDqcEk9c9vyHNFFAFZr+e31RI9yzJvUYmUPwccc9vark0aTWjXaxxxNPlmSONdoOc8Ag4oooAx57qbe6B9qxkqoUAAc1ZmvrprqC1knklhVUjCSHcArYJ4PuSaKKAJtSEdrqP2dIIiASocjkAHHbj9K2dZ0u20bRrK5hVppbiLz3aY7vm3ED04AHH1NFFAHKXN7cXTBZJWKZBCDhQfYDjvVZuWNFFADto37e1DDaOPU0UUAIvLgdM+lIfvUUUAf/2Q=="},pT=["w2","w1","w3","w5"].map(s=>({src:`/media/${s}.mp4`,poster:`/media/${s}.jpg`})),mT=["t2","t3","t1"].map(s=>({src:`/media/${s}.mp4`,poster:`/media/${s}.jpg`}));function gT({page:s,onClose:e,onGo:t}){return He.jsx("div",{className:`page ${s==="performances"?"wide":""}`,onClick:e,children:He.jsxs("article",{onClick:r=>r.stopPropagation(),children:[He.jsxs("nav",{className:"tabs",children:[["about","instrument","performances"].map(r=>He.jsx("button",{className:r===s?"on":"",onClick:()=>t(r),children:r},r)),He.jsxs("button",{className:"close",onClick:e,"aria-label":"close",children:[He.jsx("span",{className:"cl",children:"close "}),"×"]})]}),s==="about"&&He.jsxs("section",{children:[He.jsx("h2",{children:"The machine reads, the hand leads."}),He.jsxs("p",{children:[He.jsx("b",{children:"<N4TH>"})," is the visual instrument of Nathalia Cury, a Brazilian art director based in Stuttgart for six years. With a background in typography, editorial design and brand identity, she brings a designer's eye to the club."]}),He.jsx("p",{children:"She built <N4TH> together with AI, using it as a design partner from the first sketches in Figma Make to hand tracking with MediaPipe and real-time graphics in Three.js. The result is a tool that sits between graphic design, code and performance."}),He.jsx("p",{children:"On stage, a camera reads her hands and the music reads the room. Every gesture becomes a move in the visuals: a fist gathers, an open palm releases, a clap breaks everything open. She moves between 2D and 3D worlds, turns colour palettes live, or lets the system run on its own and evolve with the night."}),He.jsx("h3",{children:"Contact"}),He.jsxs("p",{children:[He.jsx("a",{href:"mailto:cury.nathalia@gmail.com",children:"cury.nathalia@gmail.com"}),He.jsx("br",{}),He.jsx("a",{href:"https://instagram.com/nathcury",target:"_blank",rel:"noreferrer",children:"@nathcury"})]})]}),s==="instrument"&&He.jsxs("section",{children:[He.jsx("h2",{children:"Built with AI, played by hand."}),He.jsx("p",{children:"The tool runs in a browser. It listens to the music — its kicks, its builds, its silences — and it watches the hands. Every visual answers both: the sound gives the pulse, the hand gives the decision."}),He.jsxs("ul",{children:[He.jsxs("li",{children:[He.jsx("b",{children:"one finger"})," slow · ",He.jsx("b",{children:"five"})," fast"]}),He.jsxs("li",{children:[He.jsx("b",{children:"a fist"})," gathers · ",He.jsx("b",{children:"an open palm"})," releases"]}),He.jsxs("li",{children:[He.jsx("b",{children:"a clap"})," breaks everything open"]}),He.jsx("li",{children:"the music: pulse, kicks, build-ups, the drop"})]}),He.jsx("p",{children:"Every part of it — the visuals, the way they listen, the way they read a gesture — was written in conversation with AI. That is the question the performance stays with: who is listening to whom?"}),He.jsxs("figure",{children:[He.jsx("img",{src:"/media/instrument.jpg",alt:"The instrument: the visuals of the set, layers, effects, the sound and the hands"}),He.jsx("figcaption",{children:"The instrument as it is played: the set of visuals, the layers, the effects, what it hears."})]})]}),s==="performances"&&He.jsxs("section",{children:[He.jsx("h2",{children:"Performances"}),He.jsx("p",{className:"sub",children:"Stuttgart, November 2026 — Nische at Kultur Bunker. Live with a DJ set."}),He.jsx("div",{className:"shows wide",children:pT.map(r=>He.jsx("video",{src:r.src,poster:r.poster,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,disablePictureInPicture:!0,disableRemotePlayback:!0},r.src))}),He.jsx("div",{className:"shows tall",children:mT.map(r=>He.jsx("video",{src:r.src,poster:r.poster,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,disablePictureInPicture:!0,disableRemotePlayback:!0},r.src))})]})]})})}const Sg=[{id:"dust",name:"Dust",note:"a fist gathers it into a circle"},{id:"line",name:"Line",note:"an open hand unfolds it"},{id:"dandelion",name:"Dandelion",note:"the hand moves the wind"},{id:"jellyfish",name:"Jellyfish",note:"a fist closes the bells"},{id:"standby",name:"Standby",note:"a fist closes the picture to a point"},{id:"sphere",name:"Sphere",note:"a fist pulls it out of shape"}],Mv={dust:{colors:ps(0,0,"grayscale"),params:{"look.glow":1.6,"field.size":1.3,"sound.beat":.35}},line:{colors:ps(268,70,"black"),params:{"line.weight":1.4}},dandelion:{colors:ps(200,60,"black"),params:{"field.count":3}},jellyfish:{colors:ps(215,70,"black"),params:{"swarm.backdrop":0,"swarm.height":.3,"colour.palette":3,"sound.flow":1.7,"swarm.drift":1.3,"sound.swell":1.2,"sound.beat":.6}},standby:{colors:ps(0,0,"grayscale"),params:{"sound.quiet":.4}},sphere:{colors:ps(0,0,"grayscale"),params:{"shape.style":2,"shape.size":1.2,"shape.morph":.32,"shape.lobes":1.05,"shape.detail":2,"motion.spin":.4,"motion.flow":1,"motion.dust":1}}},Sv={dust:{path:"field.count",min:200,max:5e3,start:.6},line:{path:"line.count",min:1,max:40,start:.33},dandelion:{path:"field.count",min:1,max:12,start:.2},jellyfish:{path:"swarm.count",min:1,max:8,start:.43},standby:{path:"grid.detail",min:.2,max:1,start:.38},sphere:{path:"motion.points",min:0,max:6e3,start:.6}},Ag=[{name:"Johannex · m4n4th",src:"/tracks/m4n4th.mp3"}];function vT(s,e,t){return s==="dust"?new JE(e,t):s==="line"?new ew(e,t):s==="jellyfish"?new dw(e,t):s==="standby"?new yw(e,t):s==="sphere"?new Mw(e,t):new lw(e,t)}const xT=(s,e)=>{const t=Sv[s],r=t.min+e*(t.max-t.min);return{...Mv[s].params,[t.path]:t.max>2?Math.round(r):r}};function _T(s){var r,o,l;const e=document.querySelector(s);if(!e||s===".stage")return{top:"42%",left:"50%",transform:"translate(-50%, -50%)"};const t=e.getBoundingClientRect();if(window.innerWidth<=720&&(s===".track"||s===".cards")){const c=(r=document.querySelector(".desk"))==null?void 0:r.getBoundingClientRect(),f=e.getBoundingClientRect();if(c)return{top:c.top-16,left:Math.min(window.innerWidth-150,Math.max(150,f.left+f.width/2)),transform:"translate(-50%, -100%)"}}if(s===".fx"&&window.innerWidth<=720){const c=(o=document.querySelector(".fx.open"))==null?void 0:o.getBoundingClientRect();if(c)return{top:c.top-16,left:window.innerWidth/2,transform:"translate(-50%, -100%)"};const f=(l=document.querySelector(".fxbtn"))==null?void 0:l.getBoundingClientRect();if(f)return{top:f.top-16,left:Math.min(window.innerWidth-150,Math.max(150,f.left+f.width/2)),transform:"translate(-50%, -100%)"}}return s===".fx"?{top:t.top+t.height/2,left:t.left-14,transform:"translate(-100%, -50%)"}:{top:t.top-16,left:t.left+t.width/2,transform:"translate(-50%, -100%)"}}const yT=Math.max(1,Math.min(5,Number(new URLSearchParams(location.search).get("guide"))||2)),MT={left:null,right:null},ST=["5 fingers","2 fingers","fist","pinch","clap"],AT={bass:0,lowMid:0,mid:0,high:0,overall:0,beat:!1,beatIntensity:0,onset:0};function ET(s,e,t){return{position:{x:s,y:e},gesture:t>.5?"fist":"open",openness:1-t,fingerCount:t>.5?0:3,velocity:0}}const Kf=[{key:"play",at:".track",text:"Play a track — the visual moves with the music."},{key:"hand",at:".stage",text:"Raise your hand to the camera — or move the mouse."},{key:"fist",at:".stage",text:"Close your hand (or hold the mouse button) — then open it."},{key:"clap",at:".stage",text:"Clap (or click quickly)."},{key:"fx",at:".fx",text:"Shape it: trail, colour, amount."},{key:"switch",at:".cards",text:"Try another visual."}];function wT(){const s=Ot.useRef(null),[e,t]=Ot.useState("dust"),r=Ot.useRef(e);r.current=e;const[o,l]=Ot.useState(0),[c,f]=Ot.useState(0),[d,h]=Ot.useState(()=>Object.fromEntries(Sg.map(W=>[W.id,Sv[W.id].start]))),[m,x]=Ot.useState(!1),g=Ot.useRef({trail:o,hue:c,amounts:d});g.current={trail:o,hue:c,amounts:d};const[_,S]=Ot.useState(null),[T,y]=Ot.useState("off"),M=Ot.useRef(MT),w=Ot.useRef(null);w.current=_;const b=Ot.useRef({x:.5,y:.5,on:!1,down:0,closed:0,clapAt:0,moved:0}),P=Ot.useCallback(async()=>{y("asking");try{const W=await navigator.mediaDevices.getUserMedia({video:{width:640,height:360,facingMode:"user"}}),de=document.createElement("video");de.muted=!0,de.playsInline=!0,de.srcObject=W,await de.play(),S(de),y("on")}catch{y("refused")}},[]);Ot.useEffect(()=>{P()},[P]);const B=Ot.useRef(null),[I,k]=Ot.useState(null),A=Ot.useRef(null),D=Ot.useCallback(W=>{var Te;let de=B.current;if(!de){de=new Audio,de.crossOrigin="anonymous",de.loop=!0,B.current=de;const pe=new AudioContext,Fe=pe.createMediaElementSource(de),Ae=pe.createAnalyser();Ae.fftSize=2048,Ae.smoothingTimeConstant=.55,Fe.connect(Ae),Ae.connect(pe.destination),A.current={ctx:pe,analyser:Ae,data:new Uint8Array(Ae.frequencyBinCount),state:sT()}}if((Te=A.current)==null||Te.ctx.resume(),I===W){de.pause(),k(null);return}de.src=Ag[W].src,de.play(),k(W)},[I]),[j,z]=Ot.useState(new Set),[Y,le]=Ot.useState(()=>{try{return!localStorage.getItem("n4th-guide-seen")}catch{return!0}}),ce=W=>{le(W);try{localStorage.setItem("n4th-guide-seen","1")}catch{}},G=Ot.useCallback(W=>z(de=>de.has(W)?de:new Set(de).add(W)),[]);Ot.useEffect(()=>{I!==null&&G("play")},[I,G]);const ne=Kf.find(W=>!j.has(W.key));Ot.useEffect(()=>{if(!ne)try{localStorage.setItem("n4th-guide-seen","1")}catch{}},[ne]),Ot.useEffect(()=>{const W=s.current,de=W.getContext("2d"),Te=document.createElement("canvas"),pe=Te.getContext("2d");let Fe=null,Ae=null;const Ve=2.5;let tt=performance.now(),nt=0;const it=fT();let ct=0,yt="";const N=(Ee,lt,L)=>{(Ee.width!==lt||Ee.height!==L)&&(Ee.width=lt,Ee.height=L)},xt=()=>{const Ee=Math.min(window.devicePixelRatio||1,1920/Math.max(1,window.innerWidth)),lt=Math.round(window.innerWidth*Ee),L=Math.round(window.innerHeight*Ee);N(W,lt,L),N(Te,lt,L),Fe&&N(Fe.work,lt,L),Ae&&N(Ae.work,lt,L)},ot=Ee=>{const lt=document.createElement("canvas");lt.width=W.width,lt.height=W.height;const L=vT(Ee,lt,lt.getContext("2d"));return{v:Ee,r:L,amount:-1,work:lt,alpha:0}},gt=Ee=>{var Xe,Ne,Ue,ut,ft,Mt,Q,De;nt=requestAnimationFrame(gt);const lt=Math.min(.1,(Ee-tt)/1e3);tt=Ee,xt();const L=r.current;Fe?Fe.v!==L&&((Ne=Ae==null?void 0:(Xe=Ae.r).destroy)==null||Ne.call(Xe),Ae=Fe,Fe=ot(L)):(Fe=ot(L),Fe.alpha=1),Fe.alpha=Math.min(1,Fe.alpha+lt/Ve),Ae&&(Ae.alpha=Math.max(0,Ae.alpha-lt/Ve),Ae.alpha<=0&&((ut=(Ue=Ae.r).destroy)==null||ut.call(Ue),Ae=null));for(const he of[Fe,Ae])he&&w.current&&he.video!==w.current&&((Mt=(ft=he.r).setVideoElement)==null||Mt.call(ft,w.current),he.video=w.current);const E=b.current;E.closed+=((E.down&&Ee-E.down>220?1:0)-E.closed)*Math.min(1,lt*10);let ie=M.current;!ie.left&&!ie.right&&E.on&&Ee-E.moved<4e3&&(ie={left:ET(E.x,E.y,E.closed),right:null,clapping:Ee-E.clapAt<120,clapIntensity:1});let _e=AT;const Se=A.current;Se&&B.current&&!B.current.paused&&(Se.analyser.getByteFrequencyData(Se.data),_e={...aT(Se.data,Se.ctx.sampleRate,Se.state,.8,Date.now()),live:!0});const Re=new Set;for(const he of[ie.left,ie.right])he&&(he.gesture==="fist"?Re.add("fist"):he.gesture==="pinch"?Re.add("pinch"):he.fingerCount===2?Re.add("2 fingers"):((he.fingerCount??0)>=5||(he.openness??0)>.85)&&Re.add("5 fingers"));ie.clapping&&(ct=Ee),Ee-ct<500&&Re.add("clap");const Pe=[...Re].sort().join("|");Pe!==yt&&(yt=Pe,ye(Re)),VE(lt,[hT(ie,it,lt)]),GE(0);const me=g.current;pe.globalCompositeOperation="source-over",pe.globalAlpha=1,pe.fillStyle="#000",pe.fillRect(0,0,Te.width,Te.height);for(const he of[Ae,Fe]){if(!he)continue;const We=me.amounts[he.v];Math.abs(We-he.amount)>.001&&((De=(Q=he.r).setParams)==null||De.call(Q,xT(he.v,We)),he.amount=We),he.r.render(ie,Mv[he.v].colors,_e);const Oe=he.alpha*he.alpha*(3-2*he.alpha);pe.filter=me.hue?he.v==="dust"?`sepia(1) saturate(5) hue-rotate(${me.hue-40}deg)`:`hue-rotate(${me.hue}deg)`:"none",pe.globalAlpha=Oe,pe.globalCompositeOperation="lighter",pe.drawImage(he.work,0,0)}pe.filter="none",pe.globalCompositeOperation="source-over",pe.globalAlpha=1,de.globalCompositeOperation="source-over";const ve=me.trail*me.trail*1.5,ze=ve<.005?0:Math.exp(-lt*Math.LN2/ve);de.globalAlpha=1-ze,de.fillStyle="#000",de.fillRect(0,0,W.width,W.height),de.globalAlpha=1,de.globalCompositeOperation=ze>0?"lighten":"source-over",de.drawImage(Te,0,0),de.globalCompositeOperation="source-over"};return nt=requestAnimationFrame(gt),()=>{var Ee,lt,L,E;cancelAnimationFrame(nt),(lt=Fe==null?void 0:(Ee=Fe.r).destroy)==null||lt.call(Ee),(E=Ae==null?void 0:(L=Ae.r).destroy)==null||E.call(L)}},[]);const X=W=>{const de=b.current;de.x=W.clientX/window.innerWidth,de.y=W.clientY/window.innerHeight,de.on=!0,de.moved=performance.now(),T!=="on"&&G("hand")},O=W=>{X(W),b.current.down=performance.now()},F=()=>{const W=b.current,de=performance.now()-W.down;W.down&&de<220&&(W.clapAt=performance.now(),G("clap")),W.down&&de>400&&G("fist"),W.down=0},[$,U]=Ot.useState(!1),[V,ye]=Ot.useState(new Set),Me=Ot.useCallback(W=>{var de,Te;M.current=W,U(!!(W.left||W.right)),(W.left||W.right)&&G("hand"),(((de=W.left)==null?void 0:de.gesture)==="fist"||((Te=W.right)==null?void 0:Te.gesture)==="fist")&&G("fist"),W.clapping&&G("clap")},[G]),[xe,q]=Ot.useState(()=>{const W=location.pathname.replace(/^\/+|\/+$/g,"");return["about","instrument","performances"].includes(W)?W:null}),re=W=>{q(W);try{history.replaceState(null,"","/"+(W??""))}catch{}};return He.jsxs(He.Fragment,{children:[He.jsx("canvas",{ref:s,className:"stage",onPointerMove:X,onPointerDown:O,onPointerUp:F,onPointerLeave:()=>{b.current.on=!1,b.current.down=0}}),_&&He.jsx(Ww,{videoElement:_,onHandData:Me}),He.jsxs("header",{className:"top",children:[He.jsx("div",{className:"brand",children:"<N4TH>"}),He.jsx("nav",{children:["about","instrument","performances"].map(W=>He.jsx("button",{onClick:()=>re(W),children:W},W))})]}),Y&&ne&&!xe&&!(m&&window.innerWidth<=720)&&He.jsxs("div",{className:`guide g${yT}`,style:_T(ne.at),"data-at":ne.at,children:[He.jsxs("span",{className:"count",children:[Kf.indexOf(ne)+1,"/",Kf.length]}),He.jsx("span",{children:ne.text}),ne.key==="hand"&&T!=="on"&&He.jsx("button",{className:"cam",onClick:P,disabled:T==="asking",children:T==="refused"?"camera not allowed — the mouse plays":T==="asking"?"…":"allow camera"}),He.jsx("button",{className:"x",onClick:()=>ce(!1),title:"Hide the guide",children:"×"})]}),He.jsxs("aside",{className:`fx ${m?"open":""}`,onPointerDown:()=>G("fx"),children:[He.jsx("div",{className:"fxt",children:"EFFECTS"}),He.jsxs("label",{children:["Trail",He.jsx("input",{type:"range",min:0,max:1,step:.01,value:o,onChange:W=>l(+W.target.value)})]}),He.jsxs("label",{children:["Colour",He.jsx("input",{type:"range",min:0,max:360,step:1,value:c,onChange:W=>f(+W.target.value)})]}),He.jsxs("label",{children:["Amount",He.jsx("input",{type:"range",min:0,max:1,step:.01,value:d[e],onChange:W=>h(de=>({...de,[e]:+W.target.value}))})]})]}),He.jsxs("footer",{className:"desk",children:[He.jsx("div",{className:"cards",children:Sg.map((W,de)=>He.jsxs("button",{className:`card ${e===W.id?"on":""}`,onClick:()=>{t(W.id),W.id!=="dust"&&G("switch")},title:W.note,children:[He.jsx("img",{src:dT[W.id],alt:""}),He.jsx("span",{className:"num",children:de+1}),He.jsx("span",{className:"name",children:W.name})]},W.id))}),He.jsx("div",{className:"sep"}),He.jsx("div",{className:"tracks",children:Ag.map((W,de)=>He.jsxs("button",{className:`track ${I===de?"on":""}`,onClick:()=>D(de),children:[He.jsx("span",{children:I===de?"❚❚":"▶"})," ",W.name]},W.src))}),He.jsx("div",{className:"sep"}),He.jsx("button",{className:`fxbtn ${m?"on":""}`,onClick:()=>{x(W=>!W),G("fx")},children:"FX"}),He.jsx("button",{className:`camera ${T==="on"?"on":""}`,onClick:T==="on"?void 0:P,title:"Play with your hand through the camera",children:T==="on"?He.jsxs(He.Fragment,{children:[He.jsx("span",{className:`dot ${$?"seen":""}`,children:"●"})," hand"]}):T==="refused"?"mouse":"camera"}),He.jsx("div",{className:"words",children:ST.map(W=>He.jsx("span",{className:V.has(W)?"lit":"",children:W},W))})]}),xe&&He.jsx(gT,{page:xe,onClose:()=>re(null),onGo:re})]})}f_.createRoot(document.getElementById("root")).render(He.jsx(Ot.StrictMode,{children:He.jsx(wT,{})}));
