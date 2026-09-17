var K1=Object.defineProperty;var Z1=(a,e,t)=>e in a?K1(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var F=(a,e,t)=>Z1(a,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();var Th={exports:{}},Ao={},Ch={exports:{}},Lt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0;function Q1(){if(_0)return Lt;_0=1;var a=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function m(B){return B===null||typeof B!="object"?null:(B=g&&B[g]||B["@@iterator"],typeof B=="function"?B:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,w={};function _(B,X,ye){this.props=B,this.context=X,this.refs=w,this.updater=ye||y}_.prototype.isReactComponent={},_.prototype.setState=function(B,X){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,X,"setState")},_.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function S(){}S.prototype=_.prototype;function b(B,X,ye){this.props=B,this.context=X,this.refs=w,this.updater=ye||y}var T=b.prototype=new S;T.constructor=b,v(T,_.prototype),T.isPureReactComponent=!0;var E=Array.isArray,N=Object.prototype.hasOwnProperty,A={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function C(B,X,ye){var Me,we={},te=null,xe=null;if(X!=null)for(Me in X.ref!==void 0&&(xe=X.ref),X.key!==void 0&&(te=""+X.key),X)N.call(X,Me)&&!U.hasOwnProperty(Me)&&(we[Me]=X[Me]);var pe=arguments.length-2;if(pe===1)we.children=ye;else if(1<pe){for(var me=Array(pe),Te=0;Te<pe;Te++)me[Te]=arguments[Te+2];we.children=me}if(B&&B.defaultProps)for(Me in pe=B.defaultProps,pe)we[Me]===void 0&&(we[Me]=pe[Me]);return{$$typeof:a,type:B,key:te,ref:xe,props:we,_owner:A.current}}function L(B,X){return{$$typeof:a,type:B.type,key:X,ref:B.ref,props:B.props,_owner:B._owner}}function O(B){return typeof B=="object"&&B!==null&&B.$$typeof===a}function D(B){var X={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(ye){return X[ye]})}var z=/\/+/g;function Z(B,X){return typeof B=="object"&&B!==null&&B.key!=null?D(""+B.key):X.toString(36)}function ne(B,X,ye,Me,we){var te=typeof B;(te==="undefined"||te==="boolean")&&(B=null);var xe=!1;if(B===null)xe=!0;else switch(te){case"string":case"number":xe=!0;break;case"object":switch(B.$$typeof){case a:case e:xe=!0}}if(xe)return xe=B,we=we(xe),B=Me===""?"."+Z(xe,0):Me,E(we)?(ye="",B!=null&&(ye=B.replace(z,"$&/")+"/"),ne(we,X,ye,"",function(Te){return Te})):we!=null&&(O(we)&&(we=L(we,ye+(!we.key||xe&&xe.key===we.key?"":(""+we.key).replace(z,"$&/")+"/")+B)),X.push(we)),1;if(xe=0,Me=Me===""?".":Me+":",E(B))for(var pe=0;pe<B.length;pe++){te=B[pe];var me=Me+Z(te,pe);xe+=ne(te,X,ye,me,we)}else if(me=m(B),typeof me=="function")for(B=me.call(B),pe=0;!(te=B.next()).done;)te=te.value,me=Me+Z(te,pe++),xe+=ne(te,X,ye,me,we);else if(te==="object")throw X=String(B),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.");return xe}function V(B,X,ye){if(B==null)return B;var Me=[],we=0;return ne(B,Me,"","",function(te){return X.call(ye,te,we++)}),Me}function J(B){if(B._status===-1){var X=B._result;X=X(),X.then(function(ye){(B._status===0||B._status===-1)&&(B._status=1,B._result=ye)},function(ye){(B._status===0||B._status===-1)&&(B._status=2,B._result=ye)}),B._status===-1&&(B._status=0,B._result=X)}if(B._status===1)return B._result.default;throw B._result}var $={current:null},K={transition:null},se={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:K,ReactCurrentOwner:A};function ie(){throw Error("act(...) is not supported in production builds of React.")}return Lt.Children={map:V,forEach:function(B,X,ye){V(B,function(){X.apply(this,arguments)},ye)},count:function(B){var X=0;return V(B,function(){X++}),X},toArray:function(B){return V(B,function(X){return X})||[]},only:function(B){if(!O(B))throw Error("React.Children.only expected to receive a single React element child.");return B}},Lt.Component=_,Lt.Fragment=t,Lt.Profiler=s,Lt.PureComponent=b,Lt.StrictMode=i,Lt.Suspense=h,Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,Lt.act=ie,Lt.cloneElement=function(B,X,ye){if(B==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+B+".");var Me=v({},B.props),we=B.key,te=B.ref,xe=B._owner;if(X!=null){if(X.ref!==void 0&&(te=X.ref,xe=A.current),X.key!==void 0&&(we=""+X.key),B.type&&B.type.defaultProps)var pe=B.type.defaultProps;for(me in X)N.call(X,me)&&!U.hasOwnProperty(me)&&(Me[me]=X[me]===void 0&&pe!==void 0?pe[me]:X[me])}var me=arguments.length-2;if(me===1)Me.children=ye;else if(1<me){pe=Array(me);for(var Te=0;Te<me;Te++)pe[Te]=arguments[Te+2];Me.children=pe}return{$$typeof:a,type:B.type,key:we,ref:te,props:Me,_owner:xe}},Lt.createContext=function(B){return B={$$typeof:c,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},B.Provider={$$typeof:o,_context:B},B.Consumer=B},Lt.createElement=C,Lt.createFactory=function(B){var X=C.bind(null,B);return X.type=B,X},Lt.createRef=function(){return{current:null}},Lt.forwardRef=function(B){return{$$typeof:u,render:B}},Lt.isValidElement=O,Lt.lazy=function(B){return{$$typeof:p,_payload:{_status:-1,_result:B},_init:J}},Lt.memo=function(B,X){return{$$typeof:f,type:B,compare:X===void 0?null:X}},Lt.startTransition=function(B){var X=K.transition;K.transition={};try{B()}finally{K.transition=X}},Lt.unstable_act=ie,Lt.useCallback=function(B,X){return $.current.useCallback(B,X)},Lt.useContext=function(B){return $.current.useContext(B)},Lt.useDebugValue=function(){},Lt.useDeferredValue=function(B){return $.current.useDeferredValue(B)},Lt.useEffect=function(B,X){return $.current.useEffect(B,X)},Lt.useId=function(){return $.current.useId()},Lt.useImperativeHandle=function(B,X,ye){return $.current.useImperativeHandle(B,X,ye)},Lt.useInsertionEffect=function(B,X){return $.current.useInsertionEffect(B,X)},Lt.useLayoutEffect=function(B,X){return $.current.useLayoutEffect(B,X)},Lt.useMemo=function(B,X){return $.current.useMemo(B,X)},Lt.useReducer=function(B,X,ye){return $.current.useReducer(B,X,ye)},Lt.useRef=function(B){return $.current.useRef(B)},Lt.useState=function(B){return $.current.useState(B)},Lt.useSyncExternalStore=function(B,X,ye){return $.current.useSyncExternalStore(B,X,ye)},Lt.useTransition=function(){return $.current.useTransition()},Lt.version="18.3.1",Lt}var y0;function Cd(){return y0||(y0=1,Ch.exports=Q1()),Ch.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S0;function J1(){if(S0)return Ao;S0=1;var a=Cd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(u,h,f){var p,g={},m=null,y=null;f!==void 0&&(m=""+f),h.key!==void 0&&(m=""+h.key),h.ref!==void 0&&(y=h.ref);for(p in h)i.call(h,p)&&!o.hasOwnProperty(p)&&(g[p]=h[p]);if(u&&u.defaultProps)for(p in h=u.defaultProps,h)g[p]===void 0&&(g[p]=h[p]);return{$$typeof:e,type:u,key:m,ref:y,props:g,_owner:s.current}}return Ao.Fragment=t,Ao.jsx=c,Ao.jsxs=c,Ao}var M0;function e_(){return M0||(M0=1,Th.exports=J1()),Th.exports}var G=e_(),Zl={},Ah={exports:{}},ti={},Rh={exports:{}},Ph={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w0;function t_(){return w0||(w0=1,(function(a){function e(K,se){var ie=K.length;K.push(se);e:for(;0<ie;){var B=ie-1>>>1,X=K[B];if(0<s(X,se))K[B]=se,K[ie]=X,ie=B;else break e}}function t(K){return K.length===0?null:K[0]}function i(K){if(K.length===0)return null;var se=K[0],ie=K.pop();if(ie!==se){K[0]=ie;e:for(var B=0,X=K.length,ye=X>>>1;B<ye;){var Me=2*(B+1)-1,we=K[Me],te=Me+1,xe=K[te];if(0>s(we,ie))te<X&&0>s(xe,we)?(K[B]=xe,K[te]=ie,B=te):(K[B]=we,K[Me]=ie,B=Me);else if(te<X&&0>s(xe,ie))K[B]=xe,K[te]=ie,B=te;else break e}}return se}function s(K,se){var ie=K.sortIndex-se.sortIndex;return ie!==0?ie:K.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;a.unstable_now=function(){return o.now()}}else{var c=Date,u=c.now();a.unstable_now=function(){return c.now()-u}}var h=[],f=[],p=1,g=null,m=3,y=!1,v=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(K){for(var se=t(f);se!==null;){if(se.callback===null)i(f);else if(se.startTime<=K)i(f),se.sortIndex=se.expirationTime,e(h,se);else break;se=t(f)}}function E(K){if(w=!1,T(K),!v)if(t(h)!==null)v=!0,J(N);else{var se=t(f);se!==null&&$(E,se.startTime-K)}}function N(K,se){v=!1,w&&(w=!1,S(C),C=-1),y=!0;var ie=m;try{for(T(se),g=t(h);g!==null&&(!(g.expirationTime>se)||K&&!D());){var B=g.callback;if(typeof B=="function"){g.callback=null,m=g.priorityLevel;var X=B(g.expirationTime<=se);se=a.unstable_now(),typeof X=="function"?g.callback=X:g===t(h)&&i(h),T(se)}else i(h);g=t(h)}if(g!==null)var ye=!0;else{var Me=t(f);Me!==null&&$(E,Me.startTime-se),ye=!1}return ye}finally{g=null,m=ie,y=!1}}var A=!1,U=null,C=-1,L=5,O=-1;function D(){return!(a.unstable_now()-O<L)}function z(){if(U!==null){var K=a.unstable_now();O=K;var se=!0;try{se=U(!0,K)}finally{se?Z():(A=!1,U=null)}}else A=!1}var Z;if(typeof b=="function")Z=function(){b(z)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,V=ne.port2;ne.port1.onmessage=z,Z=function(){V.postMessage(null)}}else Z=function(){_(z,0)};function J(K){U=K,A||(A=!0,Z())}function $(K,se){C=_(function(){K(a.unstable_now())},se)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(K){K.callback=null},a.unstable_continueExecution=function(){v||y||(v=!0,J(N))},a.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<K?Math.floor(1e3/K):5},a.unstable_getCurrentPriorityLevel=function(){return m},a.unstable_getFirstCallbackNode=function(){return t(h)},a.unstable_next=function(K){switch(m){case 1:case 2:case 3:var se=3;break;default:se=m}var ie=m;m=se;try{return K()}finally{m=ie}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(K,se){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var ie=m;m=K;try{return se()}finally{m=ie}},a.unstable_scheduleCallback=function(K,se,ie){var B=a.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?B+ie:B):ie=B,K){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=ie+X,K={id:p++,callback:se,priorityLevel:K,startTime:ie,expirationTime:X,sortIndex:-1},ie>B?(K.sortIndex=ie,e(f,K),t(h)===null&&K===t(f)&&(w?(S(C),C=-1):w=!0,$(E,ie-B))):(K.sortIndex=X,e(h,K),v||y||(v=!0,J(N))),K},a.unstable_shouldYield=D,a.unstable_wrapCallback=function(K){var se=m;return function(){var ie=m;m=se;try{return K.apply(this,arguments)}finally{m=ie}}}})(Ph)),Ph}var b0;function n_(){return b0||(b0=1,Rh.exports=t_()),Rh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E0;function i_(){if(E0)return ti;E0=1;var a=Cd(),e=n_();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function o(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function m(n){return h.call(g,n)?!0:h.call(p,n)?!1:f.test(n)?g[n]=!0:(p[n]=!0,!1)}function y(n,r,l,d){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function v(n,r,l,d){if(r===null||typeof r>"u"||y(n,r,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function w(n,r,l,d,x,M,I){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=d,this.attributeNamespace=x,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=M,this.removeEmptyString=I}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];_[r]=new w(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(S,b);_[r]=new w(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(S,b);_[r]=new w(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(S,b);_[r]=new w(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function T(n,r,l,d){var x=_.hasOwnProperty(r)?_[r]:null;(x!==null?x.type!==0:d||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(v(r,l,x,d)&&(l=null),d||x===null?m(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):x.mustUseProperty?n[x.propertyName]=l===null?x.type===3?!1:"":l:(r=x.attributeName,d=x.attributeNamespace,l===null?n.removeAttribute(r):(x=x.type,l=x===3||x===4&&l===!0?"":""+l,d?n.setAttributeNS(d,r,l):n.setAttribute(r,l))))}var E=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),A=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),D=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),K=Symbol.iterator;function se(n){return n===null||typeof n!="object"?null:(n=K&&n[K]||n["@@iterator"],typeof n=="function"?n:null)}var ie=Object.assign,B;function X(n){if(B===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);B=r&&r[1]||""}return`
`+B+n}var ye=!1;function Me(n,r){if(!n||ye)return"";ye=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(de){var d=de}Reflect.construct(n,[],r)}else{try{r.call()}catch(de){d=de}n.call(r.prototype)}else{try{throw Error()}catch(de){d=de}n()}}catch(de){if(de&&d&&typeof de.stack=="string"){for(var x=de.stack.split(`
`),M=d.stack.split(`
`),I=x.length-1,H=M.length-1;1<=I&&0<=H&&x[I]!==M[H];)H--;for(;1<=I&&0<=H;I--,H--)if(x[I]!==M[H]){if(I!==1||H!==1)do if(I--,H--,0>H||x[I]!==M[H]){var j=`
`+x[I].replace(" at new "," at ");return n.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",n.displayName)),j}while(1<=I&&0<=H);break}}}finally{ye=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?X(n):""}function we(n){switch(n.tag){case 5:return X(n.type);case 16:return X("Lazy");case 13:return X("Suspense");case 19:return X("SuspenseList");case 0:case 2:case 15:return n=Me(n.type,!1),n;case 11:return n=Me(n.type.render,!1),n;case 1:return n=Me(n.type,!0),n;default:return""}}function te(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case A:return"Portal";case L:return"Profiler";case C:return"StrictMode";case Z:return"Suspense";case ne:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case O:return(n._context.displayName||"Context")+".Provider";case z:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case V:return r=n.displayName||null,r!==null?r:te(n.type)||"Memo";case J:r=n._payload,n=n._init;try{return te(n(r))}catch{}}return null}function xe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(r);case 8:return r===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function pe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function me(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Te(n){var r=me(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),d=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var x=l.get,M=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return x.call(this)},set:function(I){d=""+I,M.call(this,I)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(I){d=""+I},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Pe(n){n._valueTracker||(n._valueTracker=Te(n))}function je(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),d="";return n&&(d=me(n)?n.checked?"true":"false":n.value),n=d,n!==l?(r.setValue(n),!0):!1}function Ye(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function $e(n,r){var l=r.checked;return ie({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function dt(n,r){var l=r.defaultValue==null?"":r.defaultValue,d=r.checked!=null?r.checked:r.defaultChecked;l=pe(r.value!=null?r.value:l),n._wrapperState={initialChecked:d,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Qe(n,r){r=r.checked,r!=null&&T(n,"checked",r,!1)}function Et(n,r){Qe(n,r);var l=pe(r.value),d=r.type;if(l!=null)d==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(d==="submit"||d==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Xt(n,r.type,l):r.hasOwnProperty("defaultValue")&&Xt(n,r.type,pe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function bt(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var d=r.type;if(!(d!=="submit"&&d!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function Xt(n,r,l){(r!=="number"||Ye(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var q=Array.isArray;function Ct(n,r,l,d){if(n=n.options,r){r={};for(var x=0;x<l.length;x++)r["$"+l[x]]=!0;for(l=0;l<n.length;l++)x=r.hasOwnProperty("$"+n[l].value),n[l].selected!==x&&(n[l].selected=x),x&&d&&(n[l].defaultSelected=!0)}else{for(l=""+pe(l),r=null,x=0;x<n.length;x++){if(n[x].value===l){n[x].selected=!0,d&&(n[x].defaultSelected=!0);return}r!==null||n[x].disabled||(r=n[x])}r!==null&&(r.selected=!0)}}function gt(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ie({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function yt(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(q(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:pe(l)}}function Be(n,r){var l=pe(r.value),d=pe(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),d!=null&&(n.defaultValue=""+d)}function zt(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function k(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function R(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?k(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var re,_e=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,d,x){MSApp.execUnsafeLocalFunction(function(){return n(r,l,d,x)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(re=re||document.createElement("div"),re.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=re.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function be(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Le={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},He=["Webkit","ms","Moz","O"];Object.keys(Le).forEach(function(n){He.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Le[r]=Le[n]})});function ge(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Le.hasOwnProperty(n)&&Le[n]?(""+r).trim():r+"px"}function Se(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var d=l.indexOf("--")===0,x=ge(l,r[l],d);l==="float"&&(l="cssFloat"),d?n.setProperty(l,x):n[l]=x}}var We=ie({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qe(n,r){if(r){if(We[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function De(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ne=null;function mt(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var xt=null,ct=null,Y=null;function Fe(n){if(n=fo(n)){if(typeof xt!="function")throw Error(t(280));var r=n.stateNode;r&&(r=fl(r),xt(n.stateNode,n.type,r))}}function ve(n){ct?Y?Y.push(n):Y=[n]:ct=n}function Ve(){if(ct){var n=ct,r=Y;if(Y=ct=null,Fe(n),r)for(n=0;n<r.length;n++)Fe(r[n])}}function ke(n,r){return n(r)}function Ee(){}var nt=!1;function vt(n,r,l){if(nt)return n(r,l);nt=!0;try{return ke(n,r,l)}finally{nt=!1,(ct!==null||Y!==null)&&(Ee(),Ve())}}function Bt(n,r){var l=n.stateNode;if(l===null)return null;var d=fl(l);if(d===null)return null;l=d[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(n=n.type,d=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!d;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Rt=!1;if(u)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){Rt=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{Rt=!1}function Nt(n,r,l,d,x,M,I,H,j){var de=Array.prototype.slice.call(arguments,3);try{r.apply(l,de)}catch(Ae){this.onError(Ae)}}var Ti=!1,sr=null,ar=!1,Gn=null,Ci={onError:function(n){Ti=!0,sr=n}};function Ir(n,r,l,d,x,M,I,H,j){Ti=!1,sr=null,Nt.apply(Ci,arguments)}function fs(n,r,l,d,x,M,I,H,j){if(Ir.apply(this,arguments),Ti){if(Ti){var de=sr;Ti=!1,sr=null}else throw Error(t(198));ar||(ar=!0,Gn=de)}}function si(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function or(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Nr(n){if(si(n)!==n)throw Error(t(188))}function lr(n){var r=n.alternate;if(!r){if(r=si(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,d=r;;){var x=l.return;if(x===null)break;var M=x.alternate;if(M===null){if(d=x.return,d!==null){l=d;continue}break}if(x.child===M.child){for(M=x.child;M;){if(M===l)return Nr(x),n;if(M===d)return Nr(x),r;M=M.sibling}throw Error(t(188))}if(l.return!==d.return)l=x,d=M;else{for(var I=!1,H=x.child;H;){if(H===l){I=!0,l=x,d=M;break}if(H===d){I=!0,d=x,l=M;break}H=H.sibling}if(!I){for(H=M.child;H;){if(H===l){I=!0,l=M,d=x;break}if(H===d){I=!0,d=M,l=x;break}H=H.sibling}if(!I)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function ds(n){return n=lr(n),n!==null?cr(n):null}function cr(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=cr(n);if(r!==null)return r;n=n.sibling}return null}var Ai=e.unstable_scheduleCallback,Ws=e.unstable_cancelCallback,$a=e.unstable_shouldYield,Xs=e.unstable_requestPaint,fe=e.unstable_now,Ie=e.unstable_getCurrentPriorityLevel,Oe=e.unstable_ImmediatePriority,P=e.unstable_UserBlockingPriority,W=e.unstable_NormalPriority,he=e.unstable_LowPriority,ce=e.unstable_IdlePriority,oe=null,Ge=null;function et(n){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(oe,n,void 0,(n.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:St,rt=Math.log,lt=Math.LN2;function St(n){return n>>>=0,n===0?32:31-(rt(n)/lt|0)|0}var Mt=64,at=4194304;function Ut(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function jt(n,r){var l=n.pendingLanes;if(l===0)return 0;var d=0,x=n.suspendedLanes,M=n.pingedLanes,I=l&268435455;if(I!==0){var H=I&~x;H!==0?d=Ut(H):(M&=I,M!==0&&(d=Ut(M)))}else I=l&~x,I!==0?d=Ut(I):M!==0&&(d=Ut(M));if(d===0)return 0;if(r!==0&&r!==d&&(r&x)===0&&(x=d&-d,M=r&-r,x>=M||x===16&&(M&4194240)!==0))return r;if((d&4)!==0&&(d|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=d;0<r;)l=31-ze(r),x=1<<l,d|=n[l],r&=~x;return d}function Jt(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gt(n,r){for(var l=n.suspendedLanes,d=n.pingedLanes,x=n.expirationTimes,M=n.pendingLanes;0<M;){var I=31-ze(M),H=1<<I,j=x[I];j===-1?((H&l)===0||(H&d)!==0)&&(x[I]=Jt(H,r)):j<=r&&(n.expiredLanes|=H),M&=~H}}function hn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ke(){var n=Mt;return Mt<<=1,(Mt&4194240)===0&&(Mt=64),n}function Ln(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function At(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-ze(r),n[r]=l}function Yn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var d=n.eventTimes;for(n=n.expirationTimes;0<l;){var x=31-ze(l),M=1<<x;r[x]=0,d[x]=-1,n[x]=-1,l&=~M}}function $n(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var d=31-ze(l),x=1<<d;x&r|n[d]&r&&(n[d]|=r),l&=~x}}var Pt=0;function ur(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ht,$t,Ri,Vt,Pi,Xi=!1,ps=[],Fr=null,Ur=null,Dr=null,Ka=new Map,Za=new Map,kr=[],vv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function np(n,r){switch(n){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":Ur=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":Ka.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Za.delete(r.pointerId)}}function Qa(n,r,l,d,x,M){return n===null||n.nativeEvent!==M?(n={blockedOn:r,domEventName:l,eventSystemFlags:d,nativeEvent:M,targetContainers:[x]},r!==null&&(r=fo(r),r!==null&&$t(r)),n):(n.eventSystemFlags|=d,r=n.targetContainers,x!==null&&r.indexOf(x)===-1&&r.push(x),n)}function _v(n,r,l,d,x){switch(r){case"focusin":return Fr=Qa(Fr,n,r,l,d,x),!0;case"dragenter":return Ur=Qa(Ur,n,r,l,d,x),!0;case"mouseover":return Dr=Qa(Dr,n,r,l,d,x),!0;case"pointerover":var M=x.pointerId;return Ka.set(M,Qa(Ka.get(M)||null,n,r,l,d,x)),!0;case"gotpointercapture":return M=x.pointerId,Za.set(M,Qa(Za.get(M)||null,n,r,l,d,x)),!0}return!1}function ip(n){var r=ms(n.target);if(r!==null){var l=si(r);if(l!==null){if(r=l.tag,r===13){if(r=or(l),r!==null){n.blockedOn=r,Pi(n.priority,function(){Ri(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Qo(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Jc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var d=new l.constructor(l.type,l);Ne=d,l.target.dispatchEvent(d),Ne=null}else return r=fo(l),r!==null&&$t(r),n.blockedOn=l,!1;r.shift()}return!0}function rp(n,r,l){Qo(n)&&l.delete(r)}function yv(){Xi=!1,Fr!==null&&Qo(Fr)&&(Fr=null),Ur!==null&&Qo(Ur)&&(Ur=null),Dr!==null&&Qo(Dr)&&(Dr=null),Ka.forEach(rp),Za.forEach(rp)}function Ja(n,r){n.blockedOn===r&&(n.blockedOn=null,Xi||(Xi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,yv)))}function eo(n){function r(x){return Ja(x,n)}if(0<ps.length){Ja(ps[0],n);for(var l=1;l<ps.length;l++){var d=ps[l];d.blockedOn===n&&(d.blockedOn=null)}}for(Fr!==null&&Ja(Fr,n),Ur!==null&&Ja(Ur,n),Dr!==null&&Ja(Dr,n),Ka.forEach(r),Za.forEach(r),l=0;l<kr.length;l++)d=kr[l],d.blockedOn===n&&(d.blockedOn=null);for(;0<kr.length&&(l=kr[0],l.blockedOn===null);)ip(l),l.blockedOn===null&&kr.shift()}var js=E.ReactCurrentBatchConfig,Jo=!0;function Sv(n,r,l,d){var x=Pt,M=js.transition;js.transition=null;try{Pt=1,Qc(n,r,l,d)}finally{Pt=x,js.transition=M}}function Mv(n,r,l,d){var x=Pt,M=js.transition;js.transition=null;try{Pt=4,Qc(n,r,l,d)}finally{Pt=x,js.transition=M}}function Qc(n,r,l,d){if(Jo){var x=Jc(n,r,l,d);if(x===null)gu(n,r,d,el,l),np(n,d);else if(_v(x,n,r,l,d))d.stopPropagation();else if(np(n,d),r&4&&-1<vv.indexOf(n)){for(;x!==null;){var M=fo(x);if(M!==null&&Ht(M),M=Jc(n,r,l,d),M===null&&gu(n,r,d,el,l),M===x)break;x=M}x!==null&&d.stopPropagation()}else gu(n,r,d,null,l)}}var el=null;function Jc(n,r,l,d){if(el=null,n=mt(d),n=ms(n),n!==null)if(r=si(n),r===null)n=null;else if(l=r.tag,l===13){if(n=or(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return el=n,null}function sp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ie()){case Oe:return 1;case P:return 4;case W:case he:return 16;case ce:return 536870912;default:return 16}default:return 16}}var Or=null,eu=null,tl=null;function ap(){if(tl)return tl;var n,r=eu,l=r.length,d,x="value"in Or?Or.value:Or.textContent,M=x.length;for(n=0;n<l&&r[n]===x[n];n++);var I=l-n;for(d=1;d<=I&&r[l-d]===x[M-d];d++);return tl=x.slice(n,1<d?1-d:void 0)}function nl(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function il(){return!0}function op(){return!1}function ai(n){function r(l,d,x,M,I){this._reactName=l,this._targetInst=x,this.type=d,this.nativeEvent=M,this.target=I,this.currentTarget=null;for(var H in n)n.hasOwnProperty(H)&&(l=n[H],this[H]=l?l(M):M[H]);return this.isDefaultPrevented=(M.defaultPrevented!=null?M.defaultPrevented:M.returnValue===!1)?il:op,this.isPropagationStopped=op,this}return ie(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),r}var qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tu=ai(qs),to=ie({},qs,{view:0,detail:0}),wv=ai(to),nu,iu,no,rl=ie({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==no&&(no&&n.type==="mousemove"?(nu=n.screenX-no.screenX,iu=n.screenY-no.screenY):iu=nu=0,no=n),nu)},movementY:function(n){return"movementY"in n?n.movementY:iu}}),lp=ai(rl),bv=ie({},rl,{dataTransfer:0}),Ev=ai(bv),Tv=ie({},to,{relatedTarget:0}),ru=ai(Tv),Cv=ie({},qs,{animationName:0,elapsedTime:0,pseudoElement:0}),Av=ai(Cv),Rv=ie({},qs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Pv=ai(Rv),Lv=ie({},qs,{data:0}),cp=ai(Lv),Iv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Fv[n])?!!r[n]:!1}function su(){return Uv}var Dv=ie({},to,{key:function(n){if(n.key){var r=Iv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=nl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Nv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(n){return n.type==="keypress"?nl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?nl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),kv=ai(Dv),Ov=ie({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),up=ai(Ov),zv=ie({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),Bv=ai(zv),Hv=ie({},qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gv=ai(Hv),Vv=ie({},rl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Wv=ai(Vv),Xv=[9,13,27,32],au=u&&"CompositionEvent"in window,io=null;u&&"documentMode"in document&&(io=document.documentMode);var jv=u&&"TextEvent"in window&&!io,hp=u&&(!au||io&&8<io&&11>=io),fp=" ",dp=!1;function pp(n,r){switch(n){case"keyup":return Xv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ys=!1;function qv(n,r){switch(n){case"compositionend":return mp(r);case"keypress":return r.which!==32?null:(dp=!0,fp);case"textInput":return n=r.data,n===fp&&dp?null:n;default:return null}}function Yv(n,r){if(Ys)return n==="compositionend"||!au&&pp(n,r)?(n=ap(),tl=eu=Or=null,Ys=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return hp&&r.locale!=="ko"?null:r.data;default:return null}}var $v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gp(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!$v[n.type]:r==="textarea"}function xp(n,r,l,d){ve(d),r=cl(r,"onChange"),0<r.length&&(l=new tu("onChange","change",null,l,d),n.push({event:l,listeners:r}))}var ro=null,so=null;function Kv(n){Up(n,0)}function sl(n){var r=Js(n);if(je(r))return n}function Zv(n,r){if(n==="change")return r}var vp=!1;if(u){var ou;if(u){var lu="oninput"in document;if(!lu){var _p=document.createElement("div");_p.setAttribute("oninput","return;"),lu=typeof _p.oninput=="function"}ou=lu}else ou=!1;vp=ou&&(!document.documentMode||9<document.documentMode)}function yp(){ro&&(ro.detachEvent("onpropertychange",Sp),so=ro=null)}function Sp(n){if(n.propertyName==="value"&&sl(so)){var r=[];xp(r,so,n,mt(n)),vt(Kv,r)}}function Qv(n,r,l){n==="focusin"?(yp(),ro=r,so=l,ro.attachEvent("onpropertychange",Sp)):n==="focusout"&&yp()}function Jv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return sl(so)}function e1(n,r){if(n==="click")return sl(r)}function t1(n,r){if(n==="input"||n==="change")return sl(r)}function n1(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Li=typeof Object.is=="function"?Object.is:n1;function ao(n,r){if(Li(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),d=Object.keys(r);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var x=l[d];if(!h.call(r,x)||!Li(n[x],r[x]))return!1}return!0}function Mp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function wp(n,r){var l=Mp(n);n=0;for(var d;l;){if(l.nodeType===3){if(d=n+l.textContent.length,n<=r&&d>=r)return{node:l,offset:r-n};n=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Mp(l)}}function bp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?bp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Ep(){for(var n=window,r=Ye();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=Ye(n.document)}return r}function cu(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function i1(n){var r=Ep(),l=n.focusedElem,d=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&bp(l.ownerDocument.documentElement,l)){if(d!==null&&cu(l)){if(r=d.start,n=d.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var x=l.textContent.length,M=Math.min(d.start,x);d=d.end===void 0?M:Math.min(d.end,x),!n.extend&&M>d&&(x=d,d=M,M=x),x=wp(l,M);var I=wp(l,d);x&&I&&(n.rangeCount!==1||n.anchorNode!==x.node||n.anchorOffset!==x.offset||n.focusNode!==I.node||n.focusOffset!==I.offset)&&(r=r.createRange(),r.setStart(x.node,x.offset),n.removeAllRanges(),M>d?(n.addRange(r),n.extend(I.node,I.offset)):(r.setEnd(I.node,I.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var r1=u&&"documentMode"in document&&11>=document.documentMode,$s=null,uu=null,oo=null,hu=!1;function Tp(n,r,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;hu||$s==null||$s!==Ye(d)||(d=$s,"selectionStart"in d&&cu(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),oo&&ao(oo,d)||(oo=d,d=cl(uu,"onSelect"),0<d.length&&(r=new tu("onSelect","select",null,r,l),n.push({event:r,listeners:d}),r.target=$s)))}function al(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Ks={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},fu={},Cp={};u&&(Cp=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function ol(n){if(fu[n])return fu[n];if(!Ks[n])return n;var r=Ks[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in Cp)return fu[n]=r[l];return n}var Ap=ol("animationend"),Rp=ol("animationiteration"),Pp=ol("animationstart"),Lp=ol("transitionend"),Ip=new Map,Np="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(n,r){Ip.set(n,r),o(r,[n])}for(var du=0;du<Np.length;du++){var pu=Np[du],s1=pu.toLowerCase(),a1=pu[0].toUpperCase()+pu.slice(1);zr(s1,"on"+a1)}zr(Ap,"onAnimationEnd"),zr(Rp,"onAnimationIteration"),zr(Pp,"onAnimationStart"),zr("dblclick","onDoubleClick"),zr("focusin","onFocus"),zr("focusout","onBlur"),zr(Lp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),o1=new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));function Fp(n,r,l){var d=n.type||"unknown-event";n.currentTarget=l,fs(d,r,void 0,n),n.currentTarget=null}function Up(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var d=n[l],x=d.event;d=d.listeners;e:{var M=void 0;if(r)for(var I=d.length-1;0<=I;I--){var H=d[I],j=H.instance,de=H.currentTarget;if(H=H.listener,j!==M&&x.isPropagationStopped())break e;Fp(x,H,de),M=j}else for(I=0;I<d.length;I++){if(H=d[I],j=H.instance,de=H.currentTarget,H=H.listener,j!==M&&x.isPropagationStopped())break e;Fp(x,H,de),M=j}}}if(ar)throw n=Gn,ar=!1,Gn=null,n}function Kt(n,r){var l=r[Mu];l===void 0&&(l=r[Mu]=new Set);var d=n+"__bubble";l.has(d)||(Dp(r,n,2,!1),l.add(d))}function mu(n,r,l){var d=0;r&&(d|=4),Dp(l,n,d,r)}var ll="_reactListening"+Math.random().toString(36).slice(2);function co(n){if(!n[ll]){n[ll]=!0,i.forEach(function(l){l!=="selectionchange"&&(o1.has(l)||mu(l,!1,n),mu(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[ll]||(r[ll]=!0,mu("selectionchange",!1,r))}}function Dp(n,r,l,d){switch(sp(r)){case 1:var x=Sv;break;case 4:x=Mv;break;default:x=Qc}l=x.bind(null,r,l,n),x=void 0,!Rt||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(x=!0),d?x!==void 0?n.addEventListener(r,l,{capture:!0,passive:x}):n.addEventListener(r,l,!0):x!==void 0?n.addEventListener(r,l,{passive:x}):n.addEventListener(r,l,!1)}function gu(n,r,l,d,x){var M=d;if((r&1)===0&&(r&2)===0&&d!==null)e:for(;;){if(d===null)return;var I=d.tag;if(I===3||I===4){var H=d.stateNode.containerInfo;if(H===x||H.nodeType===8&&H.parentNode===x)break;if(I===4)for(I=d.return;I!==null;){var j=I.tag;if((j===3||j===4)&&(j=I.stateNode.containerInfo,j===x||j.nodeType===8&&j.parentNode===x))return;I=I.return}for(;H!==null;){if(I=ms(H),I===null)return;if(j=I.tag,j===5||j===6){d=M=I;continue e}H=H.parentNode}}d=d.return}vt(function(){var de=M,Ae=mt(l),Re=[];e:{var Ce=Ip.get(n);if(Ce!==void 0){var Ze=tu,it=n;switch(n){case"keypress":if(nl(l)===0)break e;case"keydown":case"keyup":Ze=kv;break;case"focusin":it="focus",Ze=ru;break;case"focusout":it="blur",Ze=ru;break;case"beforeblur":case"afterblur":Ze=ru;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ze=lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ze=Ev;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ze=Bv;break;case Ap:case Rp:case Pp:Ze=Av;break;case Lp:Ze=Gv;break;case"scroll":Ze=wv;break;case"wheel":Ze=Wv;break;case"copy":case"cut":case"paste":Ze=Pv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ze=up}var st=(r&4)!==0,an=!st&&n==="scroll",ae=st?Ce!==null?Ce+"Capture":null:Ce;st=[];for(var ee=de,ue;ee!==null;){ue=ee;var Ue=ue.stateNode;if(ue.tag===5&&Ue!==null&&(ue=Ue,ae!==null&&(Ue=Bt(ee,ae),Ue!=null&&st.push(uo(ee,Ue,ue)))),an)break;ee=ee.return}0<st.length&&(Ce=new Ze(Ce,it,null,l,Ae),Re.push({event:Ce,listeners:st}))}}if((r&7)===0){e:{if(Ce=n==="mouseover"||n==="pointerover",Ze=n==="mouseout"||n==="pointerout",Ce&&l!==Ne&&(it=l.relatedTarget||l.fromElement)&&(ms(it)||it[hr]))break e;if((Ze||Ce)&&(Ce=Ae.window===Ae?Ae:(Ce=Ae.ownerDocument)?Ce.defaultView||Ce.parentWindow:window,Ze?(it=l.relatedTarget||l.toElement,Ze=de,it=it?ms(it):null,it!==null&&(an=si(it),it!==an||it.tag!==5&&it.tag!==6)&&(it=null)):(Ze=null,it=de),Ze!==it)){if(st=lp,Ue="onMouseLeave",ae="onMouseEnter",ee="mouse",(n==="pointerout"||n==="pointerover")&&(st=up,Ue="onPointerLeave",ae="onPointerEnter",ee="pointer"),an=Ze==null?Ce:Js(Ze),ue=it==null?Ce:Js(it),Ce=new st(Ue,ee+"leave",Ze,l,Ae),Ce.target=an,Ce.relatedTarget=ue,Ue=null,ms(Ae)===de&&(st=new st(ae,ee+"enter",it,l,Ae),st.target=ue,st.relatedTarget=an,Ue=st),an=Ue,Ze&&it)t:{for(st=Ze,ae=it,ee=0,ue=st;ue;ue=Zs(ue))ee++;for(ue=0,Ue=ae;Ue;Ue=Zs(Ue))ue++;for(;0<ee-ue;)st=Zs(st),ee--;for(;0<ue-ee;)ae=Zs(ae),ue--;for(;ee--;){if(st===ae||ae!==null&&st===ae.alternate)break t;st=Zs(st),ae=Zs(ae)}st=null}else st=null;Ze!==null&&kp(Re,Ce,Ze,st,!1),it!==null&&an!==null&&kp(Re,an,it,st,!0)}}e:{if(Ce=de?Js(de):window,Ze=Ce.nodeName&&Ce.nodeName.toLowerCase(),Ze==="select"||Ze==="input"&&Ce.type==="file")var ot=Zv;else if(gp(Ce))if(vp)ot=t1;else{ot=Jv;var ut=Qv}else(Ze=Ce.nodeName)&&Ze.toLowerCase()==="input"&&(Ce.type==="checkbox"||Ce.type==="radio")&&(ot=e1);if(ot&&(ot=ot(n,de))){xp(Re,ot,l,Ae);break e}ut&&ut(n,Ce,de),n==="focusout"&&(ut=Ce._wrapperState)&&ut.controlled&&Ce.type==="number"&&Xt(Ce,"number",Ce.value)}switch(ut=de?Js(de):window,n){case"focusin":(gp(ut)||ut.contentEditable==="true")&&($s=ut,uu=de,oo=null);break;case"focusout":oo=uu=$s=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,Tp(Re,l,Ae);break;case"selectionchange":if(r1)break;case"keydown":case"keyup":Tp(Re,l,Ae)}var ht;if(au)e:{switch(n){case"compositionstart":var _t="onCompositionStart";break e;case"compositionend":_t="onCompositionEnd";break e;case"compositionupdate":_t="onCompositionUpdate";break e}_t=void 0}else Ys?pp(n,l)&&(_t="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(_t="onCompositionStart");_t&&(hp&&l.locale!=="ko"&&(Ys||_t!=="onCompositionStart"?_t==="onCompositionEnd"&&Ys&&(ht=ap()):(Or=Ae,eu="value"in Or?Or.value:Or.textContent,Ys=!0)),ut=cl(de,_t),0<ut.length&&(_t=new cp(_t,n,null,l,Ae),Re.push({event:_t,listeners:ut}),ht?_t.data=ht:(ht=mp(l),ht!==null&&(_t.data=ht)))),(ht=jv?qv(n,l):Yv(n,l))&&(de=cl(de,"onBeforeInput"),0<de.length&&(Ae=new cp("onBeforeInput","beforeinput",null,l,Ae),Re.push({event:Ae,listeners:de}),Ae.data=ht))}Up(Re,r)})}function uo(n,r,l){return{instance:n,listener:r,currentTarget:l}}function cl(n,r){for(var l=r+"Capture",d=[];n!==null;){var x=n,M=x.stateNode;x.tag===5&&M!==null&&(x=M,M=Bt(n,l),M!=null&&d.unshift(uo(n,M,x)),M=Bt(n,r),M!=null&&d.push(uo(n,M,x))),n=n.return}return d}function Zs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function kp(n,r,l,d,x){for(var M=r._reactName,I=[];l!==null&&l!==d;){var H=l,j=H.alternate,de=H.stateNode;if(j!==null&&j===d)break;H.tag===5&&de!==null&&(H=de,x?(j=Bt(l,M),j!=null&&I.unshift(uo(l,j,H))):x||(j=Bt(l,M),j!=null&&I.push(uo(l,j,H)))),l=l.return}I.length!==0&&n.push({event:r,listeners:I})}var l1=/\r\n?/g,c1=/\u0000|\uFFFD/g;function Op(n){return(typeof n=="string"?n:""+n).replace(l1,`
`).replace(c1,"")}function ul(n,r,l){if(r=Op(r),Op(n)!==r&&l)throw Error(t(425))}function hl(){}var xu=null,vu=null;function _u(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var yu=typeof setTimeout=="function"?setTimeout:void 0,u1=typeof clearTimeout=="function"?clearTimeout:void 0,zp=typeof Promise=="function"?Promise:void 0,h1=typeof queueMicrotask=="function"?queueMicrotask:typeof zp<"u"?function(n){return zp.resolve(null).then(n).catch(f1)}:yu;function f1(n){setTimeout(function(){throw n})}function Su(n,r){var l=r,d=0;do{var x=l.nextSibling;if(n.removeChild(l),x&&x.nodeType===8)if(l=x.data,l==="/$"){if(d===0){n.removeChild(x),eo(r);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=x}while(l);eo(r)}function Br(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Bp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),ji="__reactFiber$"+Qs,ho="__reactProps$"+Qs,hr="__reactContainer$"+Qs,Mu="__reactEvents$"+Qs,d1="__reactListeners$"+Qs,p1="__reactHandles$"+Qs;function ms(n){var r=n[ji];if(r)return r;for(var l=n.parentNode;l;){if(r=l[hr]||l[ji]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=Bp(n);n!==null;){if(l=n[ji])return l;n=Bp(n)}return r}n=l,l=n.parentNode}return null}function fo(n){return n=n[ji]||n[hr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Js(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function fl(n){return n[ho]||null}var wu=[],ea=-1;function Hr(n){return{current:n}}function Zt(n){0>ea||(n.current=wu[ea],wu[ea]=null,ea--)}function qt(n,r){ea++,wu[ea]=n.current,n.current=r}var Gr={},Un=Hr(Gr),Kn=Hr(!1),gs=Gr;function ta(n,r){var l=n.type.contextTypes;if(!l)return Gr;var d=n.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===r)return d.__reactInternalMemoizedMaskedChildContext;var x={},M;for(M in l)x[M]=r[M];return d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=x),x}function Zn(n){return n=n.childContextTypes,n!=null}function dl(){Zt(Kn),Zt(Un)}function Hp(n,r,l){if(Un.current!==Gr)throw Error(t(168));qt(Un,r),qt(Kn,l)}function Gp(n,r,l){var d=n.stateNode;if(r=r.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var x in d)if(!(x in r))throw Error(t(108,xe(n)||"Unknown",x));return ie({},l,d)}function pl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Gr,gs=Un.current,qt(Un,n),qt(Kn,Kn.current),!0}function Vp(n,r,l){var d=n.stateNode;if(!d)throw Error(t(169));l?(n=Gp(n,r,gs),d.__reactInternalMemoizedMergedChildContext=n,Zt(Kn),Zt(Un),qt(Un,n)):Zt(Kn),qt(Kn,l)}var fr=null,ml=!1,bu=!1;function Wp(n){fr===null?fr=[n]:fr.push(n)}function m1(n){ml=!0,Wp(n)}function Vr(){if(!bu&&fr!==null){bu=!0;var n=0,r=Pt;try{var l=fr;for(Pt=1;n<l.length;n++){var d=l[n];do d=d(!0);while(d!==null)}fr=null,ml=!1}catch(x){throw fr!==null&&(fr=fr.slice(n+1)),Ai(Oe,Vr),x}finally{Pt=r,bu=!1}}return null}var na=[],ia=0,gl=null,xl=0,xi=[],vi=0,xs=null,dr=1,pr="";function vs(n,r){na[ia++]=xl,na[ia++]=gl,gl=n,xl=r}function Xp(n,r,l){xi[vi++]=dr,xi[vi++]=pr,xi[vi++]=xs,xs=n;var d=dr;n=pr;var x=32-ze(d)-1;d&=~(1<<x),l+=1;var M=32-ze(r)+x;if(30<M){var I=x-x%5;M=(d&(1<<I)-1).toString(32),d>>=I,x-=I,dr=1<<32-ze(r)+x|l<<x|d,pr=M+n}else dr=1<<M|l<<x|d,pr=n}function Eu(n){n.return!==null&&(vs(n,1),Xp(n,1,0))}function Tu(n){for(;n===gl;)gl=na[--ia],na[ia]=null,xl=na[--ia],na[ia]=null;for(;n===xs;)xs=xi[--vi],xi[vi]=null,pr=xi[--vi],xi[vi]=null,dr=xi[--vi],xi[vi]=null}var oi=null,li=null,en=!1,Ii=null;function jp(n,r){var l=Mi(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function qp(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,oi=n,li=Br(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,oi=n,li=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=xs!==null?{id:dr,overflow:pr}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=Mi(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,oi=n,li=null,!0):!1;default:return!1}}function Cu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Au(n){if(en){var r=li;if(r){var l=r;if(!qp(n,r)){if(Cu(n))throw Error(t(418));r=Br(l.nextSibling);var d=oi;r&&qp(n,r)?jp(d,l):(n.flags=n.flags&-4097|2,en=!1,oi=n)}}else{if(Cu(n))throw Error(t(418));n.flags=n.flags&-4097|2,en=!1,oi=n}}}function Yp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;oi=n}function vl(n){if(n!==oi)return!1;if(!en)return Yp(n),en=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!_u(n.type,n.memoizedProps)),r&&(r=li)){if(Cu(n))throw $p(),Error(t(418));for(;r;)jp(n,r),r=Br(r.nextSibling)}if(Yp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){li=Br(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}li=null}}else li=oi?Br(n.stateNode.nextSibling):null;return!0}function $p(){for(var n=li;n;)n=Br(n.nextSibling)}function ra(){li=oi=null,en=!1}function Ru(n){Ii===null?Ii=[n]:Ii.push(n)}var g1=E.ReactCurrentBatchConfig;function po(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,n));var x=d,M=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===M?r.ref:(r=function(I){var H=x.refs;I===null?delete H[M]:H[M]=I},r._stringRef=M,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function _l(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Kp(n){var r=n._init;return r(n._payload)}function Zp(n){function r(ae,ee){if(n){var ue=ae.deletions;ue===null?(ae.deletions=[ee],ae.flags|=16):ue.push(ee)}}function l(ae,ee){if(!n)return null;for(;ee!==null;)r(ae,ee),ee=ee.sibling;return null}function d(ae,ee){for(ae=new Map;ee!==null;)ee.key!==null?ae.set(ee.key,ee):ae.set(ee.index,ee),ee=ee.sibling;return ae}function x(ae,ee){return ae=Zr(ae,ee),ae.index=0,ae.sibling=null,ae}function M(ae,ee,ue){return ae.index=ue,n?(ue=ae.alternate,ue!==null?(ue=ue.index,ue<ee?(ae.flags|=2,ee):ue):(ae.flags|=2,ee)):(ae.flags|=1048576,ee)}function I(ae){return n&&ae.alternate===null&&(ae.flags|=2),ae}function H(ae,ee,ue,Ue){return ee===null||ee.tag!==6?(ee=yh(ue,ae.mode,Ue),ee.return=ae,ee):(ee=x(ee,ue),ee.return=ae,ee)}function j(ae,ee,ue,Ue){var ot=ue.type;return ot===U?Ae(ae,ee,ue.props.children,Ue,ue.key):ee!==null&&(ee.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===J&&Kp(ot)===ee.type)?(Ue=x(ee,ue.props),Ue.ref=po(ae,ee,ue),Ue.return=ae,Ue):(Ue=Vl(ue.type,ue.key,ue.props,null,ae.mode,Ue),Ue.ref=po(ae,ee,ue),Ue.return=ae,Ue)}function de(ae,ee,ue,Ue){return ee===null||ee.tag!==4||ee.stateNode.containerInfo!==ue.containerInfo||ee.stateNode.implementation!==ue.implementation?(ee=Sh(ue,ae.mode,Ue),ee.return=ae,ee):(ee=x(ee,ue.children||[]),ee.return=ae,ee)}function Ae(ae,ee,ue,Ue,ot){return ee===null||ee.tag!==7?(ee=Ts(ue,ae.mode,Ue,ot),ee.return=ae,ee):(ee=x(ee,ue),ee.return=ae,ee)}function Re(ae,ee,ue){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return ee=yh(""+ee,ae.mode,ue),ee.return=ae,ee;if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case N:return ue=Vl(ee.type,ee.key,ee.props,null,ae.mode,ue),ue.ref=po(ae,null,ee),ue.return=ae,ue;case A:return ee=Sh(ee,ae.mode,ue),ee.return=ae,ee;case J:var Ue=ee._init;return Re(ae,Ue(ee._payload),ue)}if(q(ee)||se(ee))return ee=Ts(ee,ae.mode,ue,null),ee.return=ae,ee;_l(ae,ee)}return null}function Ce(ae,ee,ue,Ue){var ot=ee!==null?ee.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number")return ot!==null?null:H(ae,ee,""+ue,Ue);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case N:return ue.key===ot?j(ae,ee,ue,Ue):null;case A:return ue.key===ot?de(ae,ee,ue,Ue):null;case J:return ot=ue._init,Ce(ae,ee,ot(ue._payload),Ue)}if(q(ue)||se(ue))return ot!==null?null:Ae(ae,ee,ue,Ue,null);_l(ae,ue)}return null}function Ze(ae,ee,ue,Ue,ot){if(typeof Ue=="string"&&Ue!==""||typeof Ue=="number")return ae=ae.get(ue)||null,H(ee,ae,""+Ue,ot);if(typeof Ue=="object"&&Ue!==null){switch(Ue.$$typeof){case N:return ae=ae.get(Ue.key===null?ue:Ue.key)||null,j(ee,ae,Ue,ot);case A:return ae=ae.get(Ue.key===null?ue:Ue.key)||null,de(ee,ae,Ue,ot);case J:var ut=Ue._init;return Ze(ae,ee,ue,ut(Ue._payload),ot)}if(q(Ue)||se(Ue))return ae=ae.get(ue)||null,Ae(ee,ae,Ue,ot,null);_l(ee,Ue)}return null}function it(ae,ee,ue,Ue){for(var ot=null,ut=null,ht=ee,_t=ee=0,Cn=null;ht!==null&&_t<ue.length;_t++){ht.index>_t?(Cn=ht,ht=null):Cn=ht.sibling;var Ot=Ce(ae,ht,ue[_t],Ue);if(Ot===null){ht===null&&(ht=Cn);break}n&&ht&&Ot.alternate===null&&r(ae,ht),ee=M(Ot,ee,_t),ut===null?ot=Ot:ut.sibling=Ot,ut=Ot,ht=Cn}if(_t===ue.length)return l(ae,ht),en&&vs(ae,_t),ot;if(ht===null){for(;_t<ue.length;_t++)ht=Re(ae,ue[_t],Ue),ht!==null&&(ee=M(ht,ee,_t),ut===null?ot=ht:ut.sibling=ht,ut=ht);return en&&vs(ae,_t),ot}for(ht=d(ae,ht);_t<ue.length;_t++)Cn=Ze(ht,ae,_t,ue[_t],Ue),Cn!==null&&(n&&Cn.alternate!==null&&ht.delete(Cn.key===null?_t:Cn.key),ee=M(Cn,ee,_t),ut===null?ot=Cn:ut.sibling=Cn,ut=Cn);return n&&ht.forEach(function(Qr){return r(ae,Qr)}),en&&vs(ae,_t),ot}function st(ae,ee,ue,Ue){var ot=se(ue);if(typeof ot!="function")throw Error(t(150));if(ue=ot.call(ue),ue==null)throw Error(t(151));for(var ut=ot=null,ht=ee,_t=ee=0,Cn=null,Ot=ue.next();ht!==null&&!Ot.done;_t++,Ot=ue.next()){ht.index>_t?(Cn=ht,ht=null):Cn=ht.sibling;var Qr=Ce(ae,ht,Ot.value,Ue);if(Qr===null){ht===null&&(ht=Cn);break}n&&ht&&Qr.alternate===null&&r(ae,ht),ee=M(Qr,ee,_t),ut===null?ot=Qr:ut.sibling=Qr,ut=Qr,ht=Cn}if(Ot.done)return l(ae,ht),en&&vs(ae,_t),ot;if(ht===null){for(;!Ot.done;_t++,Ot=ue.next())Ot=Re(ae,Ot.value,Ue),Ot!==null&&(ee=M(Ot,ee,_t),ut===null?ot=Ot:ut.sibling=Ot,ut=Ot);return en&&vs(ae,_t),ot}for(ht=d(ae,ht);!Ot.done;_t++,Ot=ue.next())Ot=Ze(ht,ae,_t,Ot.value,Ue),Ot!==null&&(n&&Ot.alternate!==null&&ht.delete(Ot.key===null?_t:Ot.key),ee=M(Ot,ee,_t),ut===null?ot=Ot:ut.sibling=Ot,ut=Ot);return n&&ht.forEach(function($1){return r(ae,$1)}),en&&vs(ae,_t),ot}function an(ae,ee,ue,Ue){if(typeof ue=="object"&&ue!==null&&ue.type===U&&ue.key===null&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case N:e:{for(var ot=ue.key,ut=ee;ut!==null;){if(ut.key===ot){if(ot=ue.type,ot===U){if(ut.tag===7){l(ae,ut.sibling),ee=x(ut,ue.props.children),ee.return=ae,ae=ee;break e}}else if(ut.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===J&&Kp(ot)===ut.type){l(ae,ut.sibling),ee=x(ut,ue.props),ee.ref=po(ae,ut,ue),ee.return=ae,ae=ee;break e}l(ae,ut);break}else r(ae,ut);ut=ut.sibling}ue.type===U?(ee=Ts(ue.props.children,ae.mode,Ue,ue.key),ee.return=ae,ae=ee):(Ue=Vl(ue.type,ue.key,ue.props,null,ae.mode,Ue),Ue.ref=po(ae,ee,ue),Ue.return=ae,ae=Ue)}return I(ae);case A:e:{for(ut=ue.key;ee!==null;){if(ee.key===ut)if(ee.tag===4&&ee.stateNode.containerInfo===ue.containerInfo&&ee.stateNode.implementation===ue.implementation){l(ae,ee.sibling),ee=x(ee,ue.children||[]),ee.return=ae,ae=ee;break e}else{l(ae,ee);break}else r(ae,ee);ee=ee.sibling}ee=Sh(ue,ae.mode,Ue),ee.return=ae,ae=ee}return I(ae);case J:return ut=ue._init,an(ae,ee,ut(ue._payload),Ue)}if(q(ue))return it(ae,ee,ue,Ue);if(se(ue))return st(ae,ee,ue,Ue);_l(ae,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"?(ue=""+ue,ee!==null&&ee.tag===6?(l(ae,ee.sibling),ee=x(ee,ue),ee.return=ae,ae=ee):(l(ae,ee),ee=yh(ue,ae.mode,Ue),ee.return=ae,ae=ee),I(ae)):l(ae,ee)}return an}var sa=Zp(!0),Qp=Zp(!1),yl=Hr(null),Sl=null,aa=null,Pu=null;function Lu(){Pu=aa=Sl=null}function Iu(n){var r=yl.current;Zt(yl),n._currentValue=r}function Nu(n,r,l){for(;n!==null;){var d=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,d!==null&&(d.childLanes|=r)):d!==null&&(d.childLanes&r)!==r&&(d.childLanes|=r),n===l)break;n=n.return}}function oa(n,r){Sl=n,Pu=aa=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Qn=!0),n.firstContext=null)}function _i(n){var r=n._currentValue;if(Pu!==n)if(n={context:n,memoizedValue:r,next:null},aa===null){if(Sl===null)throw Error(t(308));aa=n,Sl.dependencies={lanes:0,firstContext:n}}else aa=aa.next=n;return r}var _s=null;function Fu(n){_s===null?_s=[n]:_s.push(n)}function Jp(n,r,l,d){var x=r.interleaved;return x===null?(l.next=l,Fu(r)):(l.next=x.next,x.next=l),r.interleaved=l,mr(n,d)}function mr(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Wr=!1;function Uu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function em(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function gr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Xr(n,r,l){var d=n.updateQueue;if(d===null)return null;if(d=d.shared,(Dt&2)!==0){var x=d.pending;return x===null?r.next=r:(r.next=x.next,x.next=r),d.pending=r,mr(n,l)}return x=d.interleaved,x===null?(r.next=r,Fu(d)):(r.next=x.next,x.next=r),d.interleaved=r,mr(n,l)}function Ml(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,$n(n,l)}}function tm(n,r){var l=n.updateQueue,d=n.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var x=null,M=null;if(l=l.firstBaseUpdate,l!==null){do{var I={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};M===null?x=M=I:M=M.next=I,l=l.next}while(l!==null);M===null?x=M=r:M=M.next=r}else x=M=r;l={baseState:d.baseState,firstBaseUpdate:x,lastBaseUpdate:M,shared:d.shared,effects:d.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function wl(n,r,l,d){var x=n.updateQueue;Wr=!1;var M=x.firstBaseUpdate,I=x.lastBaseUpdate,H=x.shared.pending;if(H!==null){x.shared.pending=null;var j=H,de=j.next;j.next=null,I===null?M=de:I.next=de,I=j;var Ae=n.alternate;Ae!==null&&(Ae=Ae.updateQueue,H=Ae.lastBaseUpdate,H!==I&&(H===null?Ae.firstBaseUpdate=de:H.next=de,Ae.lastBaseUpdate=j))}if(M!==null){var Re=x.baseState;I=0,Ae=de=j=null,H=M;do{var Ce=H.lane,Ze=H.eventTime;if((d&Ce)===Ce){Ae!==null&&(Ae=Ae.next={eventTime:Ze,lane:0,tag:H.tag,payload:H.payload,callback:H.callback,next:null});e:{var it=n,st=H;switch(Ce=r,Ze=l,st.tag){case 1:if(it=st.payload,typeof it=="function"){Re=it.call(Ze,Re,Ce);break e}Re=it;break e;case 3:it.flags=it.flags&-65537|128;case 0:if(it=st.payload,Ce=typeof it=="function"?it.call(Ze,Re,Ce):it,Ce==null)break e;Re=ie({},Re,Ce);break e;case 2:Wr=!0}}H.callback!==null&&H.lane!==0&&(n.flags|=64,Ce=x.effects,Ce===null?x.effects=[H]:Ce.push(H))}else Ze={eventTime:Ze,lane:Ce,tag:H.tag,payload:H.payload,callback:H.callback,next:null},Ae===null?(de=Ae=Ze,j=Re):Ae=Ae.next=Ze,I|=Ce;if(H=H.next,H===null){if(H=x.shared.pending,H===null)break;Ce=H,H=Ce.next,Ce.next=null,x.lastBaseUpdate=Ce,x.shared.pending=null}}while(!0);if(Ae===null&&(j=Re),x.baseState=j,x.firstBaseUpdate=de,x.lastBaseUpdate=Ae,r=x.shared.interleaved,r!==null){x=r;do I|=x.lane,x=x.next;while(x!==r)}else M===null&&(x.shared.lanes=0);Ms|=I,n.lanes=I,n.memoizedState=Re}}function nm(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var d=n[r],x=d.callback;if(x!==null){if(d.callback=null,d=l,typeof x!="function")throw Error(t(191,x));x.call(d)}}}var mo={},qi=Hr(mo),go=Hr(mo),xo=Hr(mo);function ys(n){if(n===mo)throw Error(t(174));return n}function Du(n,r){switch(qt(xo,r),qt(go,n),qt(qi,mo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:R(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=R(r,n)}Zt(qi),qt(qi,r)}function la(){Zt(qi),Zt(go),Zt(xo)}function im(n){ys(xo.current);var r=ys(qi.current),l=R(r,n.type);r!==l&&(qt(go,n),qt(qi,l))}function ku(n){go.current===n&&(Zt(qi),Zt(go))}var tn=Hr(0);function bl(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ou=[];function zu(){for(var n=0;n<Ou.length;n++)Ou[n]._workInProgressVersionPrimary=null;Ou.length=0}var El=E.ReactCurrentDispatcher,Bu=E.ReactCurrentBatchConfig,Ss=0,nn=null,xn=null,En=null,Tl=!1,vo=!1,_o=0,x1=0;function Dn(){throw Error(t(321))}function Hu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!Li(n[l],r[l]))return!1;return!0}function Gu(n,r,l,d,x,M){if(Ss=M,nn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,El.current=n===null||n.memoizedState===null?S1:M1,n=l(d,x),vo){M=0;do{if(vo=!1,_o=0,25<=M)throw Error(t(301));M+=1,En=xn=null,r.updateQueue=null,El.current=w1,n=l(d,x)}while(vo)}if(El.current=Rl,r=xn!==null&&xn.next!==null,Ss=0,En=xn=nn=null,Tl=!1,r)throw Error(t(300));return n}function Vu(){var n=_o!==0;return _o=0,n}function Yi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?nn.memoizedState=En=n:En=En.next=n,En}function yi(){if(xn===null){var n=nn.alternate;n=n!==null?n.memoizedState:null}else n=xn.next;var r=En===null?nn.memoizedState:En.next;if(r!==null)En=r,xn=n;else{if(n===null)throw Error(t(310));xn=n,n={memoizedState:xn.memoizedState,baseState:xn.baseState,baseQueue:xn.baseQueue,queue:xn.queue,next:null},En===null?nn.memoizedState=En=n:En=En.next=n}return En}function yo(n,r){return typeof r=="function"?r(n):r}function Wu(n){var r=yi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=xn,x=d.baseQueue,M=l.pending;if(M!==null){if(x!==null){var I=x.next;x.next=M.next,M.next=I}d.baseQueue=x=M,l.pending=null}if(x!==null){M=x.next,d=d.baseState;var H=I=null,j=null,de=M;do{var Ae=de.lane;if((Ss&Ae)===Ae)j!==null&&(j=j.next={lane:0,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),d=de.hasEagerState?de.eagerState:n(d,de.action);else{var Re={lane:Ae,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null};j===null?(H=j=Re,I=d):j=j.next=Re,nn.lanes|=Ae,Ms|=Ae}de=de.next}while(de!==null&&de!==M);j===null?I=d:j.next=H,Li(d,r.memoizedState)||(Qn=!0),r.memoizedState=d,r.baseState=I,r.baseQueue=j,l.lastRenderedState=d}if(n=l.interleaved,n!==null){x=n;do M=x.lane,nn.lanes|=M,Ms|=M,x=x.next;while(x!==n)}else x===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Xu(n){var r=yi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=l.dispatch,x=l.pending,M=r.memoizedState;if(x!==null){l.pending=null;var I=x=x.next;do M=n(M,I.action),I=I.next;while(I!==x);Li(M,r.memoizedState)||(Qn=!0),r.memoizedState=M,r.baseQueue===null&&(r.baseState=M),l.lastRenderedState=M}return[M,d]}function rm(){}function sm(n,r){var l=nn,d=yi(),x=r(),M=!Li(d.memoizedState,x);if(M&&(d.memoizedState=x,Qn=!0),d=d.queue,ju(lm.bind(null,l,d,n),[n]),d.getSnapshot!==r||M||En!==null&&En.memoizedState.tag&1){if(l.flags|=2048,So(9,om.bind(null,l,d,x,r),void 0,null),Tn===null)throw Error(t(349));(Ss&30)!==0||am(l,r,x)}return x}function am(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=nn.updateQueue,r===null?(r={lastEffect:null,stores:null},nn.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function om(n,r,l,d){r.value=l,r.getSnapshot=d,cm(r)&&um(n)}function lm(n,r,l){return l(function(){cm(r)&&um(n)})}function cm(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!Li(n,l)}catch{return!0}}function um(n){var r=mr(n,1);r!==null&&Di(r,n,1,-1)}function hm(n){var r=Yi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:yo,lastRenderedState:n},r.queue=n,n=n.dispatch=y1.bind(null,nn,n),[r.memoizedState,n]}function So(n,r,l,d){return n={tag:n,create:r,destroy:l,deps:d,next:null},r=nn.updateQueue,r===null?(r={lastEffect:null,stores:null},nn.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(d=l.next,l.next=n,n.next=d,r.lastEffect=n)),n}function fm(){return yi().memoizedState}function Cl(n,r,l,d){var x=Yi();nn.flags|=n,x.memoizedState=So(1|r,l,void 0,d===void 0?null:d)}function Al(n,r,l,d){var x=yi();d=d===void 0?null:d;var M=void 0;if(xn!==null){var I=xn.memoizedState;if(M=I.destroy,d!==null&&Hu(d,I.deps)){x.memoizedState=So(r,l,M,d);return}}nn.flags|=n,x.memoizedState=So(1|r,l,M,d)}function dm(n,r){return Cl(8390656,8,n,r)}function ju(n,r){return Al(2048,8,n,r)}function pm(n,r){return Al(4,2,n,r)}function mm(n,r){return Al(4,4,n,r)}function gm(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function xm(n,r,l){return l=l!=null?l.concat([n]):null,Al(4,4,gm.bind(null,r,n),l)}function qu(){}function vm(n,r){var l=yi();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&Hu(r,d[1])?d[0]:(l.memoizedState=[n,r],n)}function _m(n,r){var l=yi();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&Hu(r,d[1])?d[0]:(n=n(),l.memoizedState=[n,r],n)}function ym(n,r,l){return(Ss&21)===0?(n.baseState&&(n.baseState=!1,Qn=!0),n.memoizedState=l):(Li(l,r)||(l=Ke(),nn.lanes|=l,Ms|=l,n.baseState=!0),r)}function v1(n,r){var l=Pt;Pt=l!==0&&4>l?l:4,n(!0);var d=Bu.transition;Bu.transition={};try{n(!1),r()}finally{Pt=l,Bu.transition=d}}function Sm(){return yi().memoizedState}function _1(n,r,l){var d=$r(n);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},Mm(n))wm(r,l);else if(l=Jp(n,r,l,d),l!==null){var x=Wn();Di(l,n,d,x),bm(l,r,d)}}function y1(n,r,l){var d=$r(n),x={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(Mm(n))wm(r,x);else{var M=n.alternate;if(n.lanes===0&&(M===null||M.lanes===0)&&(M=r.lastRenderedReducer,M!==null))try{var I=r.lastRenderedState,H=M(I,l);if(x.hasEagerState=!0,x.eagerState=H,Li(H,I)){var j=r.interleaved;j===null?(x.next=x,Fu(r)):(x.next=j.next,j.next=x),r.interleaved=x;return}}catch{}finally{}l=Jp(n,r,x,d),l!==null&&(x=Wn(),Di(l,n,d,x),bm(l,r,d))}}function Mm(n){var r=n.alternate;return n===nn||r!==null&&r===nn}function wm(n,r){vo=Tl=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function bm(n,r,l){if((l&4194240)!==0){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,$n(n,l)}}var Rl={readContext:_i,useCallback:Dn,useContext:Dn,useEffect:Dn,useImperativeHandle:Dn,useInsertionEffect:Dn,useLayoutEffect:Dn,useMemo:Dn,useReducer:Dn,useRef:Dn,useState:Dn,useDebugValue:Dn,useDeferredValue:Dn,useTransition:Dn,useMutableSource:Dn,useSyncExternalStore:Dn,useId:Dn,unstable_isNewReconciler:!1},S1={readContext:_i,useCallback:function(n,r){return Yi().memoizedState=[n,r===void 0?null:r],n},useContext:_i,useEffect:dm,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,Cl(4194308,4,gm.bind(null,r,n),l)},useLayoutEffect:function(n,r){return Cl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Cl(4,2,n,r)},useMemo:function(n,r){var l=Yi();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var d=Yi();return r=l!==void 0?l(r):r,d.memoizedState=d.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},d.queue=n,n=n.dispatch=_1.bind(null,nn,n),[d.memoizedState,n]},useRef:function(n){var r=Yi();return n={current:n},r.memoizedState=n},useState:hm,useDebugValue:qu,useDeferredValue:function(n){return Yi().memoizedState=n},useTransition:function(){var n=hm(!1),r=n[0];return n=v1.bind(null,n[1]),Yi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var d=nn,x=Yi();if(en){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),Tn===null)throw Error(t(349));(Ss&30)!==0||am(d,r,l)}x.memoizedState=l;var M={value:l,getSnapshot:r};return x.queue=M,dm(lm.bind(null,d,M,n),[n]),d.flags|=2048,So(9,om.bind(null,d,M,l,r),void 0,null),l},useId:function(){var n=Yi(),r=Tn.identifierPrefix;if(en){var l=pr,d=dr;l=(d&~(1<<32-ze(d)-1)).toString(32)+l,r=":"+r+"R"+l,l=_o++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=x1++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},M1={readContext:_i,useCallback:vm,useContext:_i,useEffect:ju,useImperativeHandle:xm,useInsertionEffect:pm,useLayoutEffect:mm,useMemo:_m,useReducer:Wu,useRef:fm,useState:function(){return Wu(yo)},useDebugValue:qu,useDeferredValue:function(n){var r=yi();return ym(r,xn.memoizedState,n)},useTransition:function(){var n=Wu(yo)[0],r=yi().memoizedState;return[n,r]},useMutableSource:rm,useSyncExternalStore:sm,useId:Sm,unstable_isNewReconciler:!1},w1={readContext:_i,useCallback:vm,useContext:_i,useEffect:ju,useImperativeHandle:xm,useInsertionEffect:pm,useLayoutEffect:mm,useMemo:_m,useReducer:Xu,useRef:fm,useState:function(){return Xu(yo)},useDebugValue:qu,useDeferredValue:function(n){var r=yi();return xn===null?r.memoizedState=n:ym(r,xn.memoizedState,n)},useTransition:function(){var n=Xu(yo)[0],r=yi().memoizedState;return[n,r]},useMutableSource:rm,useSyncExternalStore:sm,useId:Sm,unstable_isNewReconciler:!1};function Ni(n,r){if(n&&n.defaultProps){r=ie({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Yu(n,r,l,d){r=n.memoizedState,l=l(d,r),l=l==null?r:ie({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Pl={isMounted:function(n){return(n=n._reactInternals)?si(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var d=Wn(),x=$r(n),M=gr(d,x);M.payload=r,l!=null&&(M.callback=l),r=Xr(n,M,x),r!==null&&(Di(r,n,x,d),Ml(r,n,x))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var d=Wn(),x=$r(n),M=gr(d,x);M.tag=1,M.payload=r,l!=null&&(M.callback=l),r=Xr(n,M,x),r!==null&&(Di(r,n,x,d),Ml(r,n,x))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Wn(),d=$r(n),x=gr(l,d);x.tag=2,r!=null&&(x.callback=r),r=Xr(n,x,d),r!==null&&(Di(r,n,d,l),Ml(r,n,d))}};function Em(n,r,l,d,x,M,I){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(d,M,I):r.prototype&&r.prototype.isPureReactComponent?!ao(l,d)||!ao(x,M):!0}function Tm(n,r,l){var d=!1,x=Gr,M=r.contextType;return typeof M=="object"&&M!==null?M=_i(M):(x=Zn(r)?gs:Un.current,d=r.contextTypes,M=(d=d!=null)?ta(n,x):Gr),r=new r(l,M),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Pl,n.stateNode=r,r._reactInternals=n,d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=x,n.__reactInternalMemoizedMaskedChildContext=M),r}function Cm(n,r,l,d){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,d),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,d),r.state!==n&&Pl.enqueueReplaceState(r,r.state,null)}function $u(n,r,l,d){var x=n.stateNode;x.props=l,x.state=n.memoizedState,x.refs={},Uu(n);var M=r.contextType;typeof M=="object"&&M!==null?x.context=_i(M):(M=Zn(r)?gs:Un.current,x.context=ta(n,M)),x.state=n.memoizedState,M=r.getDerivedStateFromProps,typeof M=="function"&&(Yu(n,r,M,l),x.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof x.getSnapshotBeforeUpdate=="function"||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(r=x.state,typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount(),r!==x.state&&Pl.enqueueReplaceState(x,x.state,null),wl(n,l,x,d),x.state=n.memoizedState),typeof x.componentDidMount=="function"&&(n.flags|=4194308)}function ca(n,r){try{var l="",d=r;do l+=we(d),d=d.return;while(d);var x=l}catch(M){x=`
Error generating stack: `+M.message+`
`+M.stack}return{value:n,source:r,stack:x,digest:null}}function Ku(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Zu(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var b1=typeof WeakMap=="function"?WeakMap:Map;function Am(n,r,l){l=gr(-1,l),l.tag=3,l.payload={element:null};var d=r.value;return l.callback=function(){kl||(kl=!0,fh=d),Zu(n,r)},l}function Rm(n,r,l){l=gr(-1,l),l.tag=3;var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var x=r.value;l.payload=function(){return d(x)},l.callback=function(){Zu(n,r)}}var M=n.stateNode;return M!==null&&typeof M.componentDidCatch=="function"&&(l.callback=function(){Zu(n,r),typeof d!="function"&&(qr===null?qr=new Set([this]):qr.add(this));var I=r.stack;this.componentDidCatch(r.value,{componentStack:I!==null?I:""})}),l}function Pm(n,r,l){var d=n.pingCache;if(d===null){d=n.pingCache=new b1;var x=new Set;d.set(r,x)}else x=d.get(r),x===void 0&&(x=new Set,d.set(r,x));x.has(l)||(x.add(l),n=O1.bind(null,n,r,l),r.then(n,n))}function Lm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Im(n,r,l,d,x){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=gr(-1,1),r.tag=2,Xr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=x,n)}var E1=E.ReactCurrentOwner,Qn=!1;function Vn(n,r,l,d){r.child=n===null?Qp(r,null,l,d):sa(r,n.child,l,d)}function Nm(n,r,l,d,x){l=l.render;var M=r.ref;return oa(r,x),d=Gu(n,r,l,d,M,x),l=Vu(),n!==null&&!Qn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~x,xr(n,r,x)):(en&&l&&Eu(r),r.flags|=1,Vn(n,r,d,x),r.child)}function Fm(n,r,l,d,x){if(n===null){var M=l.type;return typeof M=="function"&&!_h(M)&&M.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=M,Um(n,r,M,d,x)):(n=Vl(l.type,null,d,r,r.mode,x),n.ref=r.ref,n.return=r,r.child=n)}if(M=n.child,(n.lanes&x)===0){var I=M.memoizedProps;if(l=l.compare,l=l!==null?l:ao,l(I,d)&&n.ref===r.ref)return xr(n,r,x)}return r.flags|=1,n=Zr(M,d),n.ref=r.ref,n.return=r,r.child=n}function Um(n,r,l,d,x){if(n!==null){var M=n.memoizedProps;if(ao(M,d)&&n.ref===r.ref)if(Qn=!1,r.pendingProps=d=M,(n.lanes&x)!==0)(n.flags&131072)!==0&&(Qn=!0);else return r.lanes=n.lanes,xr(n,r,x)}return Qu(n,r,l,d,x)}function Dm(n,r,l){var d=r.pendingProps,x=d.children,M=n!==null?n.memoizedState:null;if(d.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},qt(ha,ci),ci|=l;else{if((l&1073741824)===0)return n=M!==null?M.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,qt(ha,ci),ci|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=M!==null?M.baseLanes:l,qt(ha,ci),ci|=d}else M!==null?(d=M.baseLanes|l,r.memoizedState=null):d=l,qt(ha,ci),ci|=d;return Vn(n,r,x,l),r.child}function km(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Qu(n,r,l,d,x){var M=Zn(l)?gs:Un.current;return M=ta(r,M),oa(r,x),l=Gu(n,r,l,d,M,x),d=Vu(),n!==null&&!Qn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~x,xr(n,r,x)):(en&&d&&Eu(r),r.flags|=1,Vn(n,r,l,x),r.child)}function Om(n,r,l,d,x){if(Zn(l)){var M=!0;pl(r)}else M=!1;if(oa(r,x),r.stateNode===null)Il(n,r),Tm(r,l,d),$u(r,l,d,x),d=!0;else if(n===null){var I=r.stateNode,H=r.memoizedProps;I.props=H;var j=I.context,de=l.contextType;typeof de=="object"&&de!==null?de=_i(de):(de=Zn(l)?gs:Un.current,de=ta(r,de));var Ae=l.getDerivedStateFromProps,Re=typeof Ae=="function"||typeof I.getSnapshotBeforeUpdate=="function";Re||typeof I.UNSAFE_componentWillReceiveProps!="function"&&typeof I.componentWillReceiveProps!="function"||(H!==d||j!==de)&&Cm(r,I,d,de),Wr=!1;var Ce=r.memoizedState;I.state=Ce,wl(r,d,I,x),j=r.memoizedState,H!==d||Ce!==j||Kn.current||Wr?(typeof Ae=="function"&&(Yu(r,l,Ae,d),j=r.memoizedState),(H=Wr||Em(r,l,H,d,Ce,j,de))?(Re||typeof I.UNSAFE_componentWillMount!="function"&&typeof I.componentWillMount!="function"||(typeof I.componentWillMount=="function"&&I.componentWillMount(),typeof I.UNSAFE_componentWillMount=="function"&&I.UNSAFE_componentWillMount()),typeof I.componentDidMount=="function"&&(r.flags|=4194308)):(typeof I.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=d,r.memoizedState=j),I.props=d,I.state=j,I.context=de,d=H):(typeof I.componentDidMount=="function"&&(r.flags|=4194308),d=!1)}else{I=r.stateNode,em(n,r),H=r.memoizedProps,de=r.type===r.elementType?H:Ni(r.type,H),I.props=de,Re=r.pendingProps,Ce=I.context,j=l.contextType,typeof j=="object"&&j!==null?j=_i(j):(j=Zn(l)?gs:Un.current,j=ta(r,j));var Ze=l.getDerivedStateFromProps;(Ae=typeof Ze=="function"||typeof I.getSnapshotBeforeUpdate=="function")||typeof I.UNSAFE_componentWillReceiveProps!="function"&&typeof I.componentWillReceiveProps!="function"||(H!==Re||Ce!==j)&&Cm(r,I,d,j),Wr=!1,Ce=r.memoizedState,I.state=Ce,wl(r,d,I,x);var it=r.memoizedState;H!==Re||Ce!==it||Kn.current||Wr?(typeof Ze=="function"&&(Yu(r,l,Ze,d),it=r.memoizedState),(de=Wr||Em(r,l,de,d,Ce,it,j)||!1)?(Ae||typeof I.UNSAFE_componentWillUpdate!="function"&&typeof I.componentWillUpdate!="function"||(typeof I.componentWillUpdate=="function"&&I.componentWillUpdate(d,it,j),typeof I.UNSAFE_componentWillUpdate=="function"&&I.UNSAFE_componentWillUpdate(d,it,j)),typeof I.componentDidUpdate=="function"&&(r.flags|=4),typeof I.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof I.componentDidUpdate!="function"||H===n.memoizedProps&&Ce===n.memoizedState||(r.flags|=4),typeof I.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&Ce===n.memoizedState||(r.flags|=1024),r.memoizedProps=d,r.memoizedState=it),I.props=d,I.state=it,I.context=j,d=de):(typeof I.componentDidUpdate!="function"||H===n.memoizedProps&&Ce===n.memoizedState||(r.flags|=4),typeof I.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&Ce===n.memoizedState||(r.flags|=1024),d=!1)}return Ju(n,r,l,d,M,x)}function Ju(n,r,l,d,x,M){km(n,r);var I=(r.flags&128)!==0;if(!d&&!I)return x&&Vp(r,l,!1),xr(n,r,M);d=r.stateNode,E1.current=r;var H=I&&typeof l.getDerivedStateFromError!="function"?null:d.render();return r.flags|=1,n!==null&&I?(r.child=sa(r,n.child,null,M),r.child=sa(r,null,H,M)):Vn(n,r,H,M),r.memoizedState=d.state,x&&Vp(r,l,!0),r.child}function zm(n){var r=n.stateNode;r.pendingContext?Hp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Hp(n,r.context,!1),Du(n,r.containerInfo)}function Bm(n,r,l,d,x){return ra(),Ru(x),r.flags|=256,Vn(n,r,l,d),r.child}var eh={dehydrated:null,treeContext:null,retryLane:0};function th(n){return{baseLanes:n,cachePool:null,transitions:null}}function Hm(n,r,l){var d=r.pendingProps,x=tn.current,M=!1,I=(r.flags&128)!==0,H;if((H=I)||(H=n!==null&&n.memoizedState===null?!1:(x&2)!==0),H?(M=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(x|=1),qt(tn,x&1),n===null)return Au(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(I=d.children,n=d.fallback,M?(d=r.mode,M=r.child,I={mode:"hidden",children:I},(d&1)===0&&M!==null?(M.childLanes=0,M.pendingProps=I):M=Wl(I,d,0,null),n=Ts(n,d,l,null),M.return=r,n.return=r,M.sibling=n,r.child=M,r.child.memoizedState=th(l),r.memoizedState=eh,n):nh(r,I));if(x=n.memoizedState,x!==null&&(H=x.dehydrated,H!==null))return T1(n,r,I,d,H,x,l);if(M){M=d.fallback,I=r.mode,x=n.child,H=x.sibling;var j={mode:"hidden",children:d.children};return(I&1)===0&&r.child!==x?(d=r.child,d.childLanes=0,d.pendingProps=j,r.deletions=null):(d=Zr(x,j),d.subtreeFlags=x.subtreeFlags&14680064),H!==null?M=Zr(H,M):(M=Ts(M,I,l,null),M.flags|=2),M.return=r,d.return=r,d.sibling=M,r.child=d,d=M,M=r.child,I=n.child.memoizedState,I=I===null?th(l):{baseLanes:I.baseLanes|l,cachePool:null,transitions:I.transitions},M.memoizedState=I,M.childLanes=n.childLanes&~l,r.memoizedState=eh,d}return M=n.child,n=M.sibling,d=Zr(M,{mode:"visible",children:d.children}),(r.mode&1)===0&&(d.lanes=l),d.return=r,d.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=d,r.memoizedState=null,d}function nh(n,r){return r=Wl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Ll(n,r,l,d){return d!==null&&Ru(d),sa(r,n.child,null,l),n=nh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function T1(n,r,l,d,x,M,I){if(l)return r.flags&256?(r.flags&=-257,d=Ku(Error(t(422))),Ll(n,r,I,d)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(M=d.fallback,x=r.mode,d=Wl({mode:"visible",children:d.children},x,0,null),M=Ts(M,x,I,null),M.flags|=2,d.return=r,M.return=r,d.sibling=M,r.child=d,(r.mode&1)!==0&&sa(r,n.child,null,I),r.child.memoizedState=th(I),r.memoizedState=eh,M);if((r.mode&1)===0)return Ll(n,r,I,null);if(x.data==="$!"){if(d=x.nextSibling&&x.nextSibling.dataset,d)var H=d.dgst;return d=H,M=Error(t(419)),d=Ku(M,d,void 0),Ll(n,r,I,d)}if(H=(I&n.childLanes)!==0,Qn||H){if(d=Tn,d!==null){switch(I&-I){case 4:x=2;break;case 16:x=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:x=32;break;case 536870912:x=268435456;break;default:x=0}x=(x&(d.suspendedLanes|I))!==0?0:x,x!==0&&x!==M.retryLane&&(M.retryLane=x,mr(n,x),Di(d,n,x,-1))}return vh(),d=Ku(Error(t(421))),Ll(n,r,I,d)}return x.data==="$?"?(r.flags|=128,r.child=n.child,r=z1.bind(null,n),x._reactRetry=r,null):(n=M.treeContext,li=Br(x.nextSibling),oi=r,en=!0,Ii=null,n!==null&&(xi[vi++]=dr,xi[vi++]=pr,xi[vi++]=xs,dr=n.id,pr=n.overflow,xs=r),r=nh(r,d.children),r.flags|=4096,r)}function Gm(n,r,l){n.lanes|=r;var d=n.alternate;d!==null&&(d.lanes|=r),Nu(n.return,r,l)}function ih(n,r,l,d,x){var M=n.memoizedState;M===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:x}:(M.isBackwards=r,M.rendering=null,M.renderingStartTime=0,M.last=d,M.tail=l,M.tailMode=x)}function Vm(n,r,l){var d=r.pendingProps,x=d.revealOrder,M=d.tail;if(Vn(n,r,d.children,l),d=tn.current,(d&2)!==0)d=d&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Gm(n,l,r);else if(n.tag===19)Gm(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}d&=1}if(qt(tn,d),(r.mode&1)===0)r.memoizedState=null;else switch(x){case"forwards":for(l=r.child,x=null;l!==null;)n=l.alternate,n!==null&&bl(n)===null&&(x=l),l=l.sibling;l=x,l===null?(x=r.child,r.child=null):(x=l.sibling,l.sibling=null),ih(r,!1,x,l,M);break;case"backwards":for(l=null,x=r.child,r.child=null;x!==null;){if(n=x.alternate,n!==null&&bl(n)===null){r.child=x;break}n=x.sibling,x.sibling=l,l=x,x=n}ih(r,!0,l,null,M);break;case"together":ih(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Il(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function xr(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),Ms|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Zr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Zr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function C1(n,r,l){switch(r.tag){case 3:zm(r),ra();break;case 5:im(r);break;case 1:Zn(r.type)&&pl(r);break;case 4:Du(r,r.stateNode.containerInfo);break;case 10:var d=r.type._context,x=r.memoizedProps.value;qt(yl,d._currentValue),d._currentValue=x;break;case 13:if(d=r.memoizedState,d!==null)return d.dehydrated!==null?(qt(tn,tn.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?Hm(n,r,l):(qt(tn,tn.current&1),n=xr(n,r,l),n!==null?n.sibling:null);qt(tn,tn.current&1);break;case 19:if(d=(l&r.childLanes)!==0,(n.flags&128)!==0){if(d)return Vm(n,r,l);r.flags|=128}if(x=r.memoizedState,x!==null&&(x.rendering=null,x.tail=null,x.lastEffect=null),qt(tn,tn.current),d)break;return null;case 22:case 23:return r.lanes=0,Dm(n,r,l)}return xr(n,r,l)}var Wm,rh,Xm,jm;Wm=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},rh=function(){},Xm=function(n,r,l,d){var x=n.memoizedProps;if(x!==d){n=r.stateNode,ys(qi.current);var M=null;switch(l){case"input":x=$e(n,x),d=$e(n,d),M=[];break;case"select":x=ie({},x,{value:void 0}),d=ie({},d,{value:void 0}),M=[];break;case"textarea":x=gt(n,x),d=gt(n,d),M=[];break;default:typeof x.onClick!="function"&&typeof d.onClick=="function"&&(n.onclick=hl)}qe(l,d);var I;l=null;for(de in x)if(!d.hasOwnProperty(de)&&x.hasOwnProperty(de)&&x[de]!=null)if(de==="style"){var H=x[de];for(I in H)H.hasOwnProperty(I)&&(l||(l={}),l[I]="")}else de!=="dangerouslySetInnerHTML"&&de!=="children"&&de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&de!=="autoFocus"&&(s.hasOwnProperty(de)?M||(M=[]):(M=M||[]).push(de,null));for(de in d){var j=d[de];if(H=x!=null?x[de]:void 0,d.hasOwnProperty(de)&&j!==H&&(j!=null||H!=null))if(de==="style")if(H){for(I in H)!H.hasOwnProperty(I)||j&&j.hasOwnProperty(I)||(l||(l={}),l[I]="");for(I in j)j.hasOwnProperty(I)&&H[I]!==j[I]&&(l||(l={}),l[I]=j[I])}else l||(M||(M=[]),M.push(de,l)),l=j;else de==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,H=H?H.__html:void 0,j!=null&&H!==j&&(M=M||[]).push(de,j)):de==="children"?typeof j!="string"&&typeof j!="number"||(M=M||[]).push(de,""+j):de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&(s.hasOwnProperty(de)?(j!=null&&de==="onScroll"&&Kt("scroll",n),M||H===j||(M=[])):(M=M||[]).push(de,j))}l&&(M=M||[]).push("style",l);var de=M;(r.updateQueue=de)&&(r.flags|=4)}},jm=function(n,r,l,d){l!==d&&(r.flags|=4)};function Mo(n,r){if(!en)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:d.sibling=null}}function kn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,d=0;if(r)for(var x=n.child;x!==null;)l|=x.lanes|x.childLanes,d|=x.subtreeFlags&14680064,d|=x.flags&14680064,x.return=n,x=x.sibling;else for(x=n.child;x!==null;)l|=x.lanes|x.childLanes,d|=x.subtreeFlags,d|=x.flags,x.return=n,x=x.sibling;return n.subtreeFlags|=d,n.childLanes=l,r}function A1(n,r,l){var d=r.pendingProps;switch(Tu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kn(r),null;case 1:return Zn(r.type)&&dl(),kn(r),null;case 3:return d=r.stateNode,la(),Zt(Kn),Zt(Un),zu(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(n===null||n.child===null)&&(vl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Ii!==null&&(mh(Ii),Ii=null))),rh(n,r),kn(r),null;case 5:ku(r);var x=ys(xo.current);if(l=r.type,n!==null&&r.stateNode!=null)Xm(n,r,l,d,x),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!d){if(r.stateNode===null)throw Error(t(166));return kn(r),null}if(n=ys(qi.current),vl(r)){d=r.stateNode,l=r.type;var M=r.memoizedProps;switch(d[ji]=r,d[ho]=M,n=(r.mode&1)!==0,l){case"dialog":Kt("cancel",d),Kt("close",d);break;case"iframe":case"object":case"embed":Kt("load",d);break;case"video":case"audio":for(x=0;x<lo.length;x++)Kt(lo[x],d);break;case"source":Kt("error",d);break;case"img":case"image":case"link":Kt("error",d),Kt("load",d);break;case"details":Kt("toggle",d);break;case"input":dt(d,M),Kt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!M.multiple},Kt("invalid",d);break;case"textarea":yt(d,M),Kt("invalid",d)}qe(l,M),x=null;for(var I in M)if(M.hasOwnProperty(I)){var H=M[I];I==="children"?typeof H=="string"?d.textContent!==H&&(M.suppressHydrationWarning!==!0&&ul(d.textContent,H,n),x=["children",H]):typeof H=="number"&&d.textContent!==""+H&&(M.suppressHydrationWarning!==!0&&ul(d.textContent,H,n),x=["children",""+H]):s.hasOwnProperty(I)&&H!=null&&I==="onScroll"&&Kt("scroll",d)}switch(l){case"input":Pe(d),bt(d,M,!0);break;case"textarea":Pe(d),zt(d);break;case"select":case"option":break;default:typeof M.onClick=="function"&&(d.onclick=hl)}d=x,r.updateQueue=d,d!==null&&(r.flags|=4)}else{I=x.nodeType===9?x:x.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=k(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=I.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof d.is=="string"?n=I.createElement(l,{is:d.is}):(n=I.createElement(l),l==="select"&&(I=n,d.multiple?I.multiple=!0:d.size&&(I.size=d.size))):n=I.createElementNS(n,l),n[ji]=r,n[ho]=d,Wm(n,r,!1,!1),r.stateNode=n;e:{switch(I=De(l,d),l){case"dialog":Kt("cancel",n),Kt("close",n),x=d;break;case"iframe":case"object":case"embed":Kt("load",n),x=d;break;case"video":case"audio":for(x=0;x<lo.length;x++)Kt(lo[x],n);x=d;break;case"source":Kt("error",n),x=d;break;case"img":case"image":case"link":Kt("error",n),Kt("load",n),x=d;break;case"details":Kt("toggle",n),x=d;break;case"input":dt(n,d),x=$e(n,d),Kt("invalid",n);break;case"option":x=d;break;case"select":n._wrapperState={wasMultiple:!!d.multiple},x=ie({},d,{value:void 0}),Kt("invalid",n);break;case"textarea":yt(n,d),x=gt(n,d),Kt("invalid",n);break;default:x=d}qe(l,x),H=x;for(M in H)if(H.hasOwnProperty(M)){var j=H[M];M==="style"?Se(n,j):M==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&_e(n,j)):M==="children"?typeof j=="string"?(l!=="textarea"||j!=="")&&be(n,j):typeof j=="number"&&be(n,""+j):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(s.hasOwnProperty(M)?j!=null&&M==="onScroll"&&Kt("scroll",n):j!=null&&T(n,M,j,I))}switch(l){case"input":Pe(n),bt(n,d,!1);break;case"textarea":Pe(n),zt(n);break;case"option":d.value!=null&&n.setAttribute("value",""+pe(d.value));break;case"select":n.multiple=!!d.multiple,M=d.value,M!=null?Ct(n,!!d.multiple,M,!1):d.defaultValue!=null&&Ct(n,!!d.multiple,d.defaultValue,!0);break;default:typeof x.onClick=="function"&&(n.onclick=hl)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return kn(r),null;case 6:if(n&&r.stateNode!=null)jm(n,r,n.memoizedProps,d);else{if(typeof d!="string"&&r.stateNode===null)throw Error(t(166));if(l=ys(xo.current),ys(qi.current),vl(r)){if(d=r.stateNode,l=r.memoizedProps,d[ji]=r,(M=d.nodeValue!==l)&&(n=oi,n!==null))switch(n.tag){case 3:ul(d.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ul(d.nodeValue,l,(n.mode&1)!==0)}M&&(r.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[ji]=r,r.stateNode=d}return kn(r),null;case 13:if(Zt(tn),d=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(en&&li!==null&&(r.mode&1)!==0&&(r.flags&128)===0)$p(),ra(),r.flags|=98560,M=!1;else if(M=vl(r),d!==null&&d.dehydrated!==null){if(n===null){if(!M)throw Error(t(318));if(M=r.memoizedState,M=M!==null?M.dehydrated:null,!M)throw Error(t(317));M[ji]=r}else ra(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;kn(r),M=!1}else Ii!==null&&(mh(Ii),Ii=null),M=!0;if(!M)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(d=d!==null,d!==(n!==null&&n.memoizedState!==null)&&d&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(tn.current&1)!==0?vn===0&&(vn=3):vh())),r.updateQueue!==null&&(r.flags|=4),kn(r),null);case 4:return la(),rh(n,r),n===null&&co(r.stateNode.containerInfo),kn(r),null;case 10:return Iu(r.type._context),kn(r),null;case 17:return Zn(r.type)&&dl(),kn(r),null;case 19:if(Zt(tn),M=r.memoizedState,M===null)return kn(r),null;if(d=(r.flags&128)!==0,I=M.rendering,I===null)if(d)Mo(M,!1);else{if(vn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(I=bl(n),I!==null){for(r.flags|=128,Mo(M,!1),d=I.updateQueue,d!==null&&(r.updateQueue=d,r.flags|=4),r.subtreeFlags=0,d=l,l=r.child;l!==null;)M=l,n=d,M.flags&=14680066,I=M.alternate,I===null?(M.childLanes=0,M.lanes=n,M.child=null,M.subtreeFlags=0,M.memoizedProps=null,M.memoizedState=null,M.updateQueue=null,M.dependencies=null,M.stateNode=null):(M.childLanes=I.childLanes,M.lanes=I.lanes,M.child=I.child,M.subtreeFlags=0,M.deletions=null,M.memoizedProps=I.memoizedProps,M.memoizedState=I.memoizedState,M.updateQueue=I.updateQueue,M.type=I.type,n=I.dependencies,M.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return qt(tn,tn.current&1|2),r.child}n=n.sibling}M.tail!==null&&fe()>fa&&(r.flags|=128,d=!0,Mo(M,!1),r.lanes=4194304)}else{if(!d)if(n=bl(I),n!==null){if(r.flags|=128,d=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),Mo(M,!0),M.tail===null&&M.tailMode==="hidden"&&!I.alternate&&!en)return kn(r),null}else 2*fe()-M.renderingStartTime>fa&&l!==1073741824&&(r.flags|=128,d=!0,Mo(M,!1),r.lanes=4194304);M.isBackwards?(I.sibling=r.child,r.child=I):(l=M.last,l!==null?l.sibling=I:r.child=I,M.last=I)}return M.tail!==null?(r=M.tail,M.rendering=r,M.tail=r.sibling,M.renderingStartTime=fe(),r.sibling=null,l=tn.current,qt(tn,d?l&1|2:l&1),r):(kn(r),null);case 22:case 23:return xh(),d=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==d&&(r.flags|=8192),d&&(r.mode&1)!==0?(ci&1073741824)!==0&&(kn(r),r.subtreeFlags&6&&(r.flags|=8192)):kn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function R1(n,r){switch(Tu(r),r.tag){case 1:return Zn(r.type)&&dl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return la(),Zt(Kn),Zt(Un),zu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return ku(r),null;case 13:if(Zt(tn),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));ra()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Zt(tn),null;case 4:return la(),null;case 10:return Iu(r.type._context),null;case 22:case 23:return xh(),null;case 24:return null;default:return null}}var Nl=!1,On=!1,P1=typeof WeakSet=="function"?WeakSet:Set,tt=null;function ua(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){rn(n,r,d)}else l.current=null}function sh(n,r,l){try{l()}catch(d){rn(n,r,d)}}var qm=!1;function L1(n,r){if(xu=Jo,n=Ep(),cu(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var x=d.anchorOffset,M=d.focusNode;d=d.focusOffset;try{l.nodeType,M.nodeType}catch{l=null;break e}var I=0,H=-1,j=-1,de=0,Ae=0,Re=n,Ce=null;t:for(;;){for(var Ze;Re!==l||x!==0&&Re.nodeType!==3||(H=I+x),Re!==M||d!==0&&Re.nodeType!==3||(j=I+d),Re.nodeType===3&&(I+=Re.nodeValue.length),(Ze=Re.firstChild)!==null;)Ce=Re,Re=Ze;for(;;){if(Re===n)break t;if(Ce===l&&++de===x&&(H=I),Ce===M&&++Ae===d&&(j=I),(Ze=Re.nextSibling)!==null)break;Re=Ce,Ce=Re.parentNode}Re=Ze}l=H===-1||j===-1?null:{start:H,end:j}}else l=null}l=l||{start:0,end:0}}else l=null;for(vu={focusedElem:n,selectionRange:l},Jo=!1,tt=r;tt!==null;)if(r=tt,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,tt=n;else for(;tt!==null;){r=tt;try{var it=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(it!==null){var st=it.memoizedProps,an=it.memoizedState,ae=r.stateNode,ee=ae.getSnapshotBeforeUpdate(r.elementType===r.type?st:Ni(r.type,st),an);ae.__reactInternalSnapshotBeforeUpdate=ee}break;case 3:var ue=r.stateNode.containerInfo;ue.nodeType===1?ue.textContent="":ue.nodeType===9&&ue.documentElement&&ue.removeChild(ue.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ue){rn(r,r.return,Ue)}if(n=r.sibling,n!==null){n.return=r.return,tt=n;break}tt=r.return}return it=qm,qm=!1,it}function wo(n,r,l){var d=r.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var x=d=d.next;do{if((x.tag&n)===n){var M=x.destroy;x.destroy=void 0,M!==void 0&&sh(r,l,M)}x=x.next}while(x!==d)}}function Fl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var d=l.create;l.destroy=d()}l=l.next}while(l!==r)}}function ah(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function Ym(n){var r=n.alternate;r!==null&&(n.alternate=null,Ym(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[ji],delete r[ho],delete r[Mu],delete r[d1],delete r[p1])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function $m(n){return n.tag===5||n.tag===3||n.tag===4}function Km(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||$m(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function oh(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=hl));else if(d!==4&&(n=n.child,n!==null))for(oh(n,r,l),n=n.sibling;n!==null;)oh(n,r,l),n=n.sibling}function lh(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(d!==4&&(n=n.child,n!==null))for(lh(n,r,l),n=n.sibling;n!==null;)lh(n,r,l),n=n.sibling}var In=null,Fi=!1;function jr(n,r,l){for(l=l.child;l!==null;)Zm(n,r,l),l=l.sibling}function Zm(n,r,l){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(oe,l)}catch{}switch(l.tag){case 5:On||ua(l,r);case 6:var d=In,x=Fi;In=null,jr(n,r,l),In=d,Fi=x,In!==null&&(Fi?(n=In,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):In.removeChild(l.stateNode));break;case 18:In!==null&&(Fi?(n=In,l=l.stateNode,n.nodeType===8?Su(n.parentNode,l):n.nodeType===1&&Su(n,l),eo(n)):Su(In,l.stateNode));break;case 4:d=In,x=Fi,In=l.stateNode.containerInfo,Fi=!0,jr(n,r,l),In=d,Fi=x;break;case 0:case 11:case 14:case 15:if(!On&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){x=d=d.next;do{var M=x,I=M.destroy;M=M.tag,I!==void 0&&((M&2)!==0||(M&4)!==0)&&sh(l,r,I),x=x.next}while(x!==d)}jr(n,r,l);break;case 1:if(!On&&(ua(l,r),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(H){rn(l,r,H)}jr(n,r,l);break;case 21:jr(n,r,l);break;case 22:l.mode&1?(On=(d=On)||l.memoizedState!==null,jr(n,r,l),On=d):jr(n,r,l);break;default:jr(n,r,l)}}function Qm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new P1),r.forEach(function(d){var x=B1.bind(null,n,d);l.has(d)||(l.add(d),d.then(x,x))})}}function Ui(n,r){var l=r.deletions;if(l!==null)for(var d=0;d<l.length;d++){var x=l[d];try{var M=n,I=r,H=I;e:for(;H!==null;){switch(H.tag){case 5:In=H.stateNode,Fi=!1;break e;case 3:In=H.stateNode.containerInfo,Fi=!0;break e;case 4:In=H.stateNode.containerInfo,Fi=!0;break e}H=H.return}if(In===null)throw Error(t(160));Zm(M,I,x),In=null,Fi=!1;var j=x.alternate;j!==null&&(j.return=null),x.return=null}catch(de){rn(x,r,de)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Jm(r,n),r=r.sibling}function Jm(n,r){var l=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ui(r,n),$i(n),d&4){try{wo(3,n,n.return),Fl(3,n)}catch(st){rn(n,n.return,st)}try{wo(5,n,n.return)}catch(st){rn(n,n.return,st)}}break;case 1:Ui(r,n),$i(n),d&512&&l!==null&&ua(l,l.return);break;case 5:if(Ui(r,n),$i(n),d&512&&l!==null&&ua(l,l.return),n.flags&32){var x=n.stateNode;try{be(x,"")}catch(st){rn(n,n.return,st)}}if(d&4&&(x=n.stateNode,x!=null)){var M=n.memoizedProps,I=l!==null?l.memoizedProps:M,H=n.type,j=n.updateQueue;if(n.updateQueue=null,j!==null)try{H==="input"&&M.type==="radio"&&M.name!=null&&Qe(x,M),De(H,I);var de=De(H,M);for(I=0;I<j.length;I+=2){var Ae=j[I],Re=j[I+1];Ae==="style"?Se(x,Re):Ae==="dangerouslySetInnerHTML"?_e(x,Re):Ae==="children"?be(x,Re):T(x,Ae,Re,de)}switch(H){case"input":Et(x,M);break;case"textarea":Be(x,M);break;case"select":var Ce=x._wrapperState.wasMultiple;x._wrapperState.wasMultiple=!!M.multiple;var Ze=M.value;Ze!=null?Ct(x,!!M.multiple,Ze,!1):Ce!==!!M.multiple&&(M.defaultValue!=null?Ct(x,!!M.multiple,M.defaultValue,!0):Ct(x,!!M.multiple,M.multiple?[]:"",!1))}x[ho]=M}catch(st){rn(n,n.return,st)}}break;case 6:if(Ui(r,n),$i(n),d&4){if(n.stateNode===null)throw Error(t(162));x=n.stateNode,M=n.memoizedProps;try{x.nodeValue=M}catch(st){rn(n,n.return,st)}}break;case 3:if(Ui(r,n),$i(n),d&4&&l!==null&&l.memoizedState.isDehydrated)try{eo(r.containerInfo)}catch(st){rn(n,n.return,st)}break;case 4:Ui(r,n),$i(n);break;case 13:Ui(r,n),$i(n),x=n.child,x.flags&8192&&(M=x.memoizedState!==null,x.stateNode.isHidden=M,!M||x.alternate!==null&&x.alternate.memoizedState!==null||(hh=fe())),d&4&&Qm(n);break;case 22:if(Ae=l!==null&&l.memoizedState!==null,n.mode&1?(On=(de=On)||Ae,Ui(r,n),On=de):Ui(r,n),$i(n),d&8192){if(de=n.memoizedState!==null,(n.stateNode.isHidden=de)&&!Ae&&(n.mode&1)!==0)for(tt=n,Ae=n.child;Ae!==null;){for(Re=tt=Ae;tt!==null;){switch(Ce=tt,Ze=Ce.child,Ce.tag){case 0:case 11:case 14:case 15:wo(4,Ce,Ce.return);break;case 1:ua(Ce,Ce.return);var it=Ce.stateNode;if(typeof it.componentWillUnmount=="function"){d=Ce,l=Ce.return;try{r=d,it.props=r.memoizedProps,it.state=r.memoizedState,it.componentWillUnmount()}catch(st){rn(d,l,st)}}break;case 5:ua(Ce,Ce.return);break;case 22:if(Ce.memoizedState!==null){n0(Re);continue}}Ze!==null?(Ze.return=Ce,tt=Ze):n0(Re)}Ae=Ae.sibling}e:for(Ae=null,Re=n;;){if(Re.tag===5){if(Ae===null){Ae=Re;try{x=Re.stateNode,de?(M=x.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none"):(H=Re.stateNode,j=Re.memoizedProps.style,I=j!=null&&j.hasOwnProperty("display")?j.display:null,H.style.display=ge("display",I))}catch(st){rn(n,n.return,st)}}}else if(Re.tag===6){if(Ae===null)try{Re.stateNode.nodeValue=de?"":Re.memoizedProps}catch(st){rn(n,n.return,st)}}else if((Re.tag!==22&&Re.tag!==23||Re.memoizedState===null||Re===n)&&Re.child!==null){Re.child.return=Re,Re=Re.child;continue}if(Re===n)break e;for(;Re.sibling===null;){if(Re.return===null||Re.return===n)break e;Ae===Re&&(Ae=null),Re=Re.return}Ae===Re&&(Ae=null),Re.sibling.return=Re.return,Re=Re.sibling}}break;case 19:Ui(r,n),$i(n),d&4&&Qm(n);break;case 21:break;default:Ui(r,n),$i(n)}}function $i(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if($m(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var x=d.stateNode;d.flags&32&&(be(x,""),d.flags&=-33);var M=Km(n);lh(n,M,x);break;case 3:case 4:var I=d.stateNode.containerInfo,H=Km(n);oh(n,H,I);break;default:throw Error(t(161))}}catch(j){rn(n,n.return,j)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function I1(n,r,l){tt=n,e0(n)}function e0(n,r,l){for(var d=(n.mode&1)!==0;tt!==null;){var x=tt,M=x.child;if(x.tag===22&&d){var I=x.memoizedState!==null||Nl;if(!I){var H=x.alternate,j=H!==null&&H.memoizedState!==null||On;H=Nl;var de=On;if(Nl=I,(On=j)&&!de)for(tt=x;tt!==null;)I=tt,j=I.child,I.tag===22&&I.memoizedState!==null?i0(x):j!==null?(j.return=I,tt=j):i0(x);for(;M!==null;)tt=M,e0(M),M=M.sibling;tt=x,Nl=H,On=de}t0(n)}else(x.subtreeFlags&8772)!==0&&M!==null?(M.return=x,tt=M):t0(n)}}function t0(n){for(;tt!==null;){var r=tt;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:On||Fl(5,r);break;case 1:var d=r.stateNode;if(r.flags&4&&!On)if(l===null)d.componentDidMount();else{var x=r.elementType===r.type?l.memoizedProps:Ni(r.type,l.memoizedProps);d.componentDidUpdate(x,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var M=r.updateQueue;M!==null&&nm(r,M,d);break;case 3:var I=r.updateQueue;if(I!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}nm(r,I,l)}break;case 5:var H=r.stateNode;if(l===null&&r.flags&4){l=H;var j=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&l.focus();break;case"img":j.src&&(l.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var de=r.alternate;if(de!==null){var Ae=de.memoizedState;if(Ae!==null){var Re=Ae.dehydrated;Re!==null&&eo(Re)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}On||r.flags&512&&ah(r)}catch(Ce){rn(r,r.return,Ce)}}if(r===n){tt=null;break}if(l=r.sibling,l!==null){l.return=r.return,tt=l;break}tt=r.return}}function n0(n){for(;tt!==null;){var r=tt;if(r===n){tt=null;break}var l=r.sibling;if(l!==null){l.return=r.return,tt=l;break}tt=r.return}}function i0(n){for(;tt!==null;){var r=tt;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Fl(4,r)}catch(j){rn(r,l,j)}break;case 1:var d=r.stateNode;if(typeof d.componentDidMount=="function"){var x=r.return;try{d.componentDidMount()}catch(j){rn(r,x,j)}}var M=r.return;try{ah(r)}catch(j){rn(r,M,j)}break;case 5:var I=r.return;try{ah(r)}catch(j){rn(r,I,j)}}}catch(j){rn(r,r.return,j)}if(r===n){tt=null;break}var H=r.sibling;if(H!==null){H.return=r.return,tt=H;break}tt=r.return}}var N1=Math.ceil,Ul=E.ReactCurrentDispatcher,ch=E.ReactCurrentOwner,Si=E.ReactCurrentBatchConfig,Dt=0,Tn=null,fn=null,Nn=0,ci=0,ha=Hr(0),vn=0,bo=null,Ms=0,Dl=0,uh=0,Eo=null,Jn=null,hh=0,fa=1/0,vr=null,kl=!1,fh=null,qr=null,Ol=!1,Yr=null,zl=0,To=0,dh=null,Bl=-1,Hl=0;function Wn(){return(Dt&6)!==0?fe():Bl!==-1?Bl:Bl=fe()}function $r(n){return(n.mode&1)===0?1:(Dt&2)!==0&&Nn!==0?Nn&-Nn:g1.transition!==null?(Hl===0&&(Hl=Ke()),Hl):(n=Pt,n!==0||(n=window.event,n=n===void 0?16:sp(n.type)),n)}function Di(n,r,l,d){if(50<To)throw To=0,dh=null,Error(t(185));At(n,l,d),((Dt&2)===0||n!==Tn)&&(n===Tn&&((Dt&2)===0&&(Dl|=l),vn===4&&Kr(n,Nn)),ei(n,d),l===1&&Dt===0&&(r.mode&1)===0&&(fa=fe()+500,ml&&Vr()))}function ei(n,r){var l=n.callbackNode;Gt(n,r);var d=jt(n,n===Tn?Nn:0);if(d===0)l!==null&&Ws(l),n.callbackNode=null,n.callbackPriority=0;else if(r=d&-d,n.callbackPriority!==r){if(l!=null&&Ws(l),r===1)n.tag===0?m1(s0.bind(null,n)):Wp(s0.bind(null,n)),h1(function(){(Dt&6)===0&&Vr()}),l=null;else{switch(ur(d)){case 1:l=Oe;break;case 4:l=P;break;case 16:l=W;break;case 536870912:l=ce;break;default:l=W}l=d0(l,r0.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function r0(n,r){if(Bl=-1,Hl=0,(Dt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(da()&&n.callbackNode!==l)return null;var d=jt(n,n===Tn?Nn:0);if(d===0)return null;if((d&30)!==0||(d&n.expiredLanes)!==0||r)r=Gl(n,d);else{r=d;var x=Dt;Dt|=2;var M=o0();(Tn!==n||Nn!==r)&&(vr=null,fa=fe()+500,bs(n,r));do try{D1();break}catch(H){a0(n,H)}while(!0);Lu(),Ul.current=M,Dt=x,fn!==null?r=0:(Tn=null,Nn=0,r=vn)}if(r!==0){if(r===2&&(x=hn(n),x!==0&&(d=x,r=ph(n,x))),r===1)throw l=bo,bs(n,0),Kr(n,d),ei(n,fe()),l;if(r===6)Kr(n,d);else{if(x=n.current.alternate,(d&30)===0&&!F1(x)&&(r=Gl(n,d),r===2&&(M=hn(n),M!==0&&(d=M,r=ph(n,M))),r===1))throw l=bo,bs(n,0),Kr(n,d),ei(n,fe()),l;switch(n.finishedWork=x,n.finishedLanes=d,r){case 0:case 1:throw Error(t(345));case 2:Es(n,Jn,vr);break;case 3:if(Kr(n,d),(d&130023424)===d&&(r=hh+500-fe(),10<r)){if(jt(n,0)!==0)break;if(x=n.suspendedLanes,(x&d)!==d){Wn(),n.pingedLanes|=n.suspendedLanes&x;break}n.timeoutHandle=yu(Es.bind(null,n,Jn,vr),r);break}Es(n,Jn,vr);break;case 4:if(Kr(n,d),(d&4194240)===d)break;for(r=n.eventTimes,x=-1;0<d;){var I=31-ze(d);M=1<<I,I=r[I],I>x&&(x=I),d&=~M}if(d=x,d=fe()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*N1(d/1960))-d,10<d){n.timeoutHandle=yu(Es.bind(null,n,Jn,vr),d);break}Es(n,Jn,vr);break;case 5:Es(n,Jn,vr);break;default:throw Error(t(329))}}}return ei(n,fe()),n.callbackNode===l?r0.bind(null,n):null}function ph(n,r){var l=Eo;return n.current.memoizedState.isDehydrated&&(bs(n,r).flags|=256),n=Gl(n,r),n!==2&&(r=Jn,Jn=l,r!==null&&mh(r)),n}function mh(n){Jn===null?Jn=n:Jn.push.apply(Jn,n)}function F1(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var x=l[d],M=x.getSnapshot;x=x.value;try{if(!Li(M(),x))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Kr(n,r){for(r&=~uh,r&=~Dl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-ze(r),d=1<<l;n[l]=-1,r&=~d}}function s0(n){if((Dt&6)!==0)throw Error(t(327));da();var r=jt(n,0);if((r&1)===0)return ei(n,fe()),null;var l=Gl(n,r);if(n.tag!==0&&l===2){var d=hn(n);d!==0&&(r=d,l=ph(n,d))}if(l===1)throw l=bo,bs(n,0),Kr(n,r),ei(n,fe()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Es(n,Jn,vr),ei(n,fe()),null}function gh(n,r){var l=Dt;Dt|=1;try{return n(r)}finally{Dt=l,Dt===0&&(fa=fe()+500,ml&&Vr())}}function ws(n){Yr!==null&&Yr.tag===0&&(Dt&6)===0&&da();var r=Dt;Dt|=1;var l=Si.transition,d=Pt;try{if(Si.transition=null,Pt=1,n)return n()}finally{Pt=d,Si.transition=l,Dt=r,(Dt&6)===0&&Vr()}}function xh(){ci=ha.current,Zt(ha)}function bs(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,u1(l)),fn!==null)for(l=fn.return;l!==null;){var d=l;switch(Tu(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&dl();break;case 3:la(),Zt(Kn),Zt(Un),zu();break;case 5:ku(d);break;case 4:la();break;case 13:Zt(tn);break;case 19:Zt(tn);break;case 10:Iu(d.type._context);break;case 22:case 23:xh()}l=l.return}if(Tn=n,fn=n=Zr(n.current,null),Nn=ci=r,vn=0,bo=null,uh=Dl=Ms=0,Jn=Eo=null,_s!==null){for(r=0;r<_s.length;r++)if(l=_s[r],d=l.interleaved,d!==null){l.interleaved=null;var x=d.next,M=l.pending;if(M!==null){var I=M.next;M.next=x,d.next=I}l.pending=d}_s=null}return n}function a0(n,r){do{var l=fn;try{if(Lu(),El.current=Rl,Tl){for(var d=nn.memoizedState;d!==null;){var x=d.queue;x!==null&&(x.pending=null),d=d.next}Tl=!1}if(Ss=0,En=xn=nn=null,vo=!1,_o=0,ch.current=null,l===null||l.return===null){vn=1,bo=r,fn=null;break}e:{var M=n,I=l.return,H=l,j=r;if(r=Nn,H.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var de=j,Ae=H,Re=Ae.tag;if((Ae.mode&1)===0&&(Re===0||Re===11||Re===15)){var Ce=Ae.alternate;Ce?(Ae.updateQueue=Ce.updateQueue,Ae.memoizedState=Ce.memoizedState,Ae.lanes=Ce.lanes):(Ae.updateQueue=null,Ae.memoizedState=null)}var Ze=Lm(I);if(Ze!==null){Ze.flags&=-257,Im(Ze,I,H,M,r),Ze.mode&1&&Pm(M,de,r),r=Ze,j=de;var it=r.updateQueue;if(it===null){var st=new Set;st.add(j),r.updateQueue=st}else it.add(j);break e}else{if((r&1)===0){Pm(M,de,r),vh();break e}j=Error(t(426))}}else if(en&&H.mode&1){var an=Lm(I);if(an!==null){(an.flags&65536)===0&&(an.flags|=256),Im(an,I,H,M,r),Ru(ca(j,H));break e}}M=j=ca(j,H),vn!==4&&(vn=2),Eo===null?Eo=[M]:Eo.push(M),M=I;do{switch(M.tag){case 3:M.flags|=65536,r&=-r,M.lanes|=r;var ae=Am(M,j,r);tm(M,ae);break e;case 1:H=j;var ee=M.type,ue=M.stateNode;if((M.flags&128)===0&&(typeof ee.getDerivedStateFromError=="function"||ue!==null&&typeof ue.componentDidCatch=="function"&&(qr===null||!qr.has(ue)))){M.flags|=65536,r&=-r,M.lanes|=r;var Ue=Rm(M,H,r);tm(M,Ue);break e}}M=M.return}while(M!==null)}c0(l)}catch(ot){r=ot,fn===l&&l!==null&&(fn=l=l.return);continue}break}while(!0)}function o0(){var n=Ul.current;return Ul.current=Rl,n===null?Rl:n}function vh(){(vn===0||vn===3||vn===2)&&(vn=4),Tn===null||(Ms&268435455)===0&&(Dl&268435455)===0||Kr(Tn,Nn)}function Gl(n,r){var l=Dt;Dt|=2;var d=o0();(Tn!==n||Nn!==r)&&(vr=null,bs(n,r));do try{U1();break}catch(x){a0(n,x)}while(!0);if(Lu(),Dt=l,Ul.current=d,fn!==null)throw Error(t(261));return Tn=null,Nn=0,vn}function U1(){for(;fn!==null;)l0(fn)}function D1(){for(;fn!==null&&!$a();)l0(fn)}function l0(n){var r=f0(n.alternate,n,ci);n.memoizedProps=n.pendingProps,r===null?c0(n):fn=r,ch.current=null}function c0(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=A1(l,r,ci),l!==null){fn=l;return}}else{if(l=R1(l,r),l!==null){l.flags&=32767,fn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{vn=6,fn=null;return}}if(r=r.sibling,r!==null){fn=r;return}fn=r=n}while(r!==null);vn===0&&(vn=5)}function Es(n,r,l){var d=Pt,x=Si.transition;try{Si.transition=null,Pt=1,k1(n,r,l,d)}finally{Si.transition=x,Pt=d}return null}function k1(n,r,l,d){do da();while(Yr!==null);if((Dt&6)!==0)throw Error(t(327));l=n.finishedWork;var x=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var M=l.lanes|l.childLanes;if(Yn(n,M),n===Tn&&(fn=Tn=null,Nn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Ol||(Ol=!0,d0(W,function(){return da(),null})),M=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||M){M=Si.transition,Si.transition=null;var I=Pt;Pt=1;var H=Dt;Dt|=4,ch.current=null,L1(n,l),Jm(l,n),i1(vu),Jo=!!xu,vu=xu=null,n.current=l,I1(l),Xs(),Dt=H,Pt=I,Si.transition=M}else n.current=l;if(Ol&&(Ol=!1,Yr=n,zl=x),M=n.pendingLanes,M===0&&(qr=null),et(l.stateNode),ei(n,fe()),r!==null)for(d=n.onRecoverableError,l=0;l<r.length;l++)x=r[l],d(x.value,{componentStack:x.stack,digest:x.digest});if(kl)throw kl=!1,n=fh,fh=null,n;return(zl&1)!==0&&n.tag!==0&&da(),M=n.pendingLanes,(M&1)!==0?n===dh?To++:(To=0,dh=n):To=0,Vr(),null}function da(){if(Yr!==null){var n=ur(zl),r=Si.transition,l=Pt;try{if(Si.transition=null,Pt=16>n?16:n,Yr===null)var d=!1;else{if(n=Yr,Yr=null,zl=0,(Dt&6)!==0)throw Error(t(331));var x=Dt;for(Dt|=4,tt=n.current;tt!==null;){var M=tt,I=M.child;if((tt.flags&16)!==0){var H=M.deletions;if(H!==null){for(var j=0;j<H.length;j++){var de=H[j];for(tt=de;tt!==null;){var Ae=tt;switch(Ae.tag){case 0:case 11:case 15:wo(8,Ae,M)}var Re=Ae.child;if(Re!==null)Re.return=Ae,tt=Re;else for(;tt!==null;){Ae=tt;var Ce=Ae.sibling,Ze=Ae.return;if(Ym(Ae),Ae===de){tt=null;break}if(Ce!==null){Ce.return=Ze,tt=Ce;break}tt=Ze}}}var it=M.alternate;if(it!==null){var st=it.child;if(st!==null){it.child=null;do{var an=st.sibling;st.sibling=null,st=an}while(st!==null)}}tt=M}}if((M.subtreeFlags&2064)!==0&&I!==null)I.return=M,tt=I;else e:for(;tt!==null;){if(M=tt,(M.flags&2048)!==0)switch(M.tag){case 0:case 11:case 15:wo(9,M,M.return)}var ae=M.sibling;if(ae!==null){ae.return=M.return,tt=ae;break e}tt=M.return}}var ee=n.current;for(tt=ee;tt!==null;){I=tt;var ue=I.child;if((I.subtreeFlags&2064)!==0&&ue!==null)ue.return=I,tt=ue;else e:for(I=ee;tt!==null;){if(H=tt,(H.flags&2048)!==0)try{switch(H.tag){case 0:case 11:case 15:Fl(9,H)}}catch(ot){rn(H,H.return,ot)}if(H===I){tt=null;break e}var Ue=H.sibling;if(Ue!==null){Ue.return=H.return,tt=Ue;break e}tt=H.return}}if(Dt=x,Vr(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(oe,n)}catch{}d=!0}return d}finally{Pt=l,Si.transition=r}}return!1}function u0(n,r,l){r=ca(l,r),r=Am(n,r,1),n=Xr(n,r,1),r=Wn(),n!==null&&(At(n,1,r),ei(n,r))}function rn(n,r,l){if(n.tag===3)u0(n,n,l);else for(;r!==null;){if(r.tag===3){u0(r,n,l);break}else if(r.tag===1){var d=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(qr===null||!qr.has(d))){n=ca(l,n),n=Rm(r,n,1),r=Xr(r,n,1),n=Wn(),r!==null&&(At(r,1,n),ei(r,n));break}}r=r.return}}function O1(n,r,l){var d=n.pingCache;d!==null&&d.delete(r),r=Wn(),n.pingedLanes|=n.suspendedLanes&l,Tn===n&&(Nn&l)===l&&(vn===4||vn===3&&(Nn&130023424)===Nn&&500>fe()-hh?bs(n,0):uh|=l),ei(n,r)}function h0(n,r){r===0&&((n.mode&1)===0?r=1:(r=at,at<<=1,(at&130023424)===0&&(at=4194304)));var l=Wn();n=mr(n,r),n!==null&&(At(n,r,l),ei(n,l))}function z1(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),h0(n,l)}function B1(n,r){var l=0;switch(n.tag){case 13:var d=n.stateNode,x=n.memoizedState;x!==null&&(l=x.retryLane);break;case 19:d=n.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(r),h0(n,l)}var f0;f0=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||Kn.current)Qn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return Qn=!1,C1(n,r,l);Qn=(n.flags&131072)!==0}else Qn=!1,en&&(r.flags&1048576)!==0&&Xp(r,xl,r.index);switch(r.lanes=0,r.tag){case 2:var d=r.type;Il(n,r),n=r.pendingProps;var x=ta(r,Un.current);oa(r,l),x=Gu(null,r,d,n,x,l);var M=Vu();return r.flags|=1,typeof x=="object"&&x!==null&&typeof x.render=="function"&&x.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Zn(d)?(M=!0,pl(r)):M=!1,r.memoizedState=x.state!==null&&x.state!==void 0?x.state:null,Uu(r),x.updater=Pl,r.stateNode=x,x._reactInternals=r,$u(r,d,n,l),r=Ju(null,r,d,!0,M,l)):(r.tag=0,en&&M&&Eu(r),Vn(null,r,x,l),r=r.child),r;case 16:d=r.elementType;e:{switch(Il(n,r),n=r.pendingProps,x=d._init,d=x(d._payload),r.type=d,x=r.tag=G1(d),n=Ni(d,n),x){case 0:r=Qu(null,r,d,n,l);break e;case 1:r=Om(null,r,d,n,l);break e;case 11:r=Nm(null,r,d,n,l);break e;case 14:r=Fm(null,r,d,Ni(d.type,n),l);break e}throw Error(t(306,d,""))}return r;case 0:return d=r.type,x=r.pendingProps,x=r.elementType===d?x:Ni(d,x),Qu(n,r,d,x,l);case 1:return d=r.type,x=r.pendingProps,x=r.elementType===d?x:Ni(d,x),Om(n,r,d,x,l);case 3:e:{if(zm(r),n===null)throw Error(t(387));d=r.pendingProps,M=r.memoizedState,x=M.element,em(n,r),wl(r,d,null,l);var I=r.memoizedState;if(d=I.element,M.isDehydrated)if(M={element:d,isDehydrated:!1,cache:I.cache,pendingSuspenseBoundaries:I.pendingSuspenseBoundaries,transitions:I.transitions},r.updateQueue.baseState=M,r.memoizedState=M,r.flags&256){x=ca(Error(t(423)),r),r=Bm(n,r,d,l,x);break e}else if(d!==x){x=ca(Error(t(424)),r),r=Bm(n,r,d,l,x);break e}else for(li=Br(r.stateNode.containerInfo.firstChild),oi=r,en=!0,Ii=null,l=Qp(r,null,d,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ra(),d===x){r=xr(n,r,l);break e}Vn(n,r,d,l)}r=r.child}return r;case 5:return im(r),n===null&&Au(r),d=r.type,x=r.pendingProps,M=n!==null?n.memoizedProps:null,I=x.children,_u(d,x)?I=null:M!==null&&_u(d,M)&&(r.flags|=32),km(n,r),Vn(n,r,I,l),r.child;case 6:return n===null&&Au(r),null;case 13:return Hm(n,r,l);case 4:return Du(r,r.stateNode.containerInfo),d=r.pendingProps,n===null?r.child=sa(r,null,d,l):Vn(n,r,d,l),r.child;case 11:return d=r.type,x=r.pendingProps,x=r.elementType===d?x:Ni(d,x),Nm(n,r,d,x,l);case 7:return Vn(n,r,r.pendingProps,l),r.child;case 8:return Vn(n,r,r.pendingProps.children,l),r.child;case 12:return Vn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(d=r.type._context,x=r.pendingProps,M=r.memoizedProps,I=x.value,qt(yl,d._currentValue),d._currentValue=I,M!==null)if(Li(M.value,I)){if(M.children===x.children&&!Kn.current){r=xr(n,r,l);break e}}else for(M=r.child,M!==null&&(M.return=r);M!==null;){var H=M.dependencies;if(H!==null){I=M.child;for(var j=H.firstContext;j!==null;){if(j.context===d){if(M.tag===1){j=gr(-1,l&-l),j.tag=2;var de=M.updateQueue;if(de!==null){de=de.shared;var Ae=de.pending;Ae===null?j.next=j:(j.next=Ae.next,Ae.next=j),de.pending=j}}M.lanes|=l,j=M.alternate,j!==null&&(j.lanes|=l),Nu(M.return,l,r),H.lanes|=l;break}j=j.next}}else if(M.tag===10)I=M.type===r.type?null:M.child;else if(M.tag===18){if(I=M.return,I===null)throw Error(t(341));I.lanes|=l,H=I.alternate,H!==null&&(H.lanes|=l),Nu(I,l,r),I=M.sibling}else I=M.child;if(I!==null)I.return=M;else for(I=M;I!==null;){if(I===r){I=null;break}if(M=I.sibling,M!==null){M.return=I.return,I=M;break}I=I.return}M=I}Vn(n,r,x.children,l),r=r.child}return r;case 9:return x=r.type,d=r.pendingProps.children,oa(r,l),x=_i(x),d=d(x),r.flags|=1,Vn(n,r,d,l),r.child;case 14:return d=r.type,x=Ni(d,r.pendingProps),x=Ni(d.type,x),Fm(n,r,d,x,l);case 15:return Um(n,r,r.type,r.pendingProps,l);case 17:return d=r.type,x=r.pendingProps,x=r.elementType===d?x:Ni(d,x),Il(n,r),r.tag=1,Zn(d)?(n=!0,pl(r)):n=!1,oa(r,l),Tm(r,d,x),$u(r,d,x,l),Ju(null,r,d,!0,n,l);case 19:return Vm(n,r,l);case 22:return Dm(n,r,l)}throw Error(t(156,r.tag))};function d0(n,r){return Ai(n,r)}function H1(n,r,l,d){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mi(n,r,l,d){return new H1(n,r,l,d)}function _h(n){return n=n.prototype,!(!n||!n.isReactComponent)}function G1(n){if(typeof n=="function")return _h(n)?1:0;if(n!=null){if(n=n.$$typeof,n===z)return 11;if(n===V)return 14}return 2}function Zr(n,r){var l=n.alternate;return l===null?(l=Mi(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Vl(n,r,l,d,x,M){var I=2;if(d=n,typeof n=="function")_h(n)&&(I=1);else if(typeof n=="string")I=5;else e:switch(n){case U:return Ts(l.children,x,M,r);case C:I=8,x|=8;break;case L:return n=Mi(12,l,r,x|2),n.elementType=L,n.lanes=M,n;case Z:return n=Mi(13,l,r,x),n.elementType=Z,n.lanes=M,n;case ne:return n=Mi(19,l,r,x),n.elementType=ne,n.lanes=M,n;case $:return Wl(l,x,M,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case O:I=10;break e;case D:I=9;break e;case z:I=11;break e;case V:I=14;break e;case J:I=16,d=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=Mi(I,l,r,x),r.elementType=n,r.type=d,r.lanes=M,r}function Ts(n,r,l,d){return n=Mi(7,n,d,r),n.lanes=l,n}function Wl(n,r,l,d){return n=Mi(22,n,d,r),n.elementType=$,n.lanes=l,n.stateNode={isHidden:!1},n}function yh(n,r,l){return n=Mi(6,n,null,r),n.lanes=l,n}function Sh(n,r,l){return r=Mi(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function V1(n,r,l,d,x){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ln(0),this.expirationTimes=Ln(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ln(0),this.identifierPrefix=d,this.onRecoverableError=x,this.mutableSourceEagerHydrationData=null}function Mh(n,r,l,d,x,M,I,H,j){return n=new V1(n,r,l,H,j),r===1?(r=1,M===!0&&(r|=8)):r=0,M=Mi(3,null,null,r),n.current=M,M.stateNode=n,M.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uu(M),n}function W1(n,r,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A,key:d==null?null:""+d,children:n,containerInfo:r,implementation:l}}function p0(n){if(!n)return Gr;n=n._reactInternals;e:{if(si(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Zn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Zn(l))return Gp(n,l,r)}return r}function m0(n,r,l,d,x,M,I,H,j){return n=Mh(l,d,!0,n,x,M,I,H,j),n.context=p0(null),l=n.current,d=Wn(),x=$r(l),M=gr(d,x),M.callback=r??null,Xr(l,M,x),n.current.lanes=x,At(n,x,d),ei(n,d),n}function Xl(n,r,l,d){var x=r.current,M=Wn(),I=$r(x);return l=p0(l),r.context===null?r.context=l:r.pendingContext=l,r=gr(M,I),r.payload={element:n},d=d===void 0?null:d,d!==null&&(r.callback=d),n=Xr(x,r,I),n!==null&&(Di(n,x,I,M),Ml(n,x,I)),I}function jl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function g0(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function wh(n,r){g0(n,r),(n=n.alternate)&&g0(n,r)}function X1(){return null}var x0=typeof reportError=="function"?reportError:function(n){console.error(n)};function bh(n){this._internalRoot=n}ql.prototype.render=bh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Xl(n,r,null,null)},ql.prototype.unmount=bh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;ws(function(){Xl(null,n,null,null)}),r[hr]=null}};function ql(n){this._internalRoot=n}ql.prototype.unstable_scheduleHydration=function(n){if(n){var r=Vt();n={blockedOn:null,target:n,priority:r};for(var l=0;l<kr.length&&r!==0&&r<kr[l].priority;l++);kr.splice(l,0,n),l===0&&ip(n)}};function Eh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Yl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function v0(){}function j1(n,r,l,d,x){if(x){if(typeof d=="function"){var M=d;d=function(){var de=jl(I);M.call(de)}}var I=m0(r,d,n,0,null,!1,!1,"",v0);return n._reactRootContainer=I,n[hr]=I.current,co(n.nodeType===8?n.parentNode:n),ws(),I}for(;x=n.lastChild;)n.removeChild(x);if(typeof d=="function"){var H=d;d=function(){var de=jl(j);H.call(de)}}var j=Mh(n,0,!1,null,null,!1,!1,"",v0);return n._reactRootContainer=j,n[hr]=j.current,co(n.nodeType===8?n.parentNode:n),ws(function(){Xl(r,j,l,d)}),j}function $l(n,r,l,d,x){var M=l._reactRootContainer;if(M){var I=M;if(typeof x=="function"){var H=x;x=function(){var j=jl(I);H.call(j)}}Xl(r,I,n,x)}else I=j1(l,r,n,x,d);return jl(I)}Ht=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=Ut(r.pendingLanes);l!==0&&($n(r,l|1),ei(r,fe()),(Dt&6)===0&&(fa=fe()+500,Vr()))}break;case 13:ws(function(){var d=mr(n,1);if(d!==null){var x=Wn();Di(d,n,1,x)}}),wh(n,1)}},$t=function(n){if(n.tag===13){var r=mr(n,134217728);if(r!==null){var l=Wn();Di(r,n,134217728,l)}wh(n,134217728)}},Ri=function(n){if(n.tag===13){var r=$r(n),l=mr(n,r);if(l!==null){var d=Wn();Di(l,n,r,d)}wh(n,r)}},Vt=function(){return Pt},Pi=function(n,r){var l=Pt;try{return Pt=n,r()}finally{Pt=l}},xt=function(n,r,l){switch(r){case"input":if(Et(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var d=l[r];if(d!==n&&d.form===n.form){var x=fl(d);if(!x)throw Error(t(90));je(d),Et(d,x)}}}break;case"textarea":Be(n,l);break;case"select":r=l.value,r!=null&&Ct(n,!!l.multiple,r,!1)}},ke=gh,Ee=ws;var q1={usingClientEntryPoint:!1,Events:[fo,Js,fl,ve,Ve,gh]},Co={findFiberByHostInstance:ms,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Y1={bundleType:Co.bundleType,version:Co.version,rendererPackageName:Co.rendererPackageName,rendererConfig:Co.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:E.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ds(n),n===null?null:n.stateNode},findFiberByHostInstance:Co.findFiberByHostInstance||X1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{oe=Kl.inject(Y1),Ge=Kl}catch{}}return ti.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q1,ti.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eh(r))throw Error(t(200));return W1(n,r,null,l)},ti.createRoot=function(n,r){if(!Eh(n))throw Error(t(299));var l=!1,d="",x=x0;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(x=r.onRecoverableError)),r=Mh(n,1,!1,null,null,l,!1,d,x),n[hr]=r.current,co(n.nodeType===8?n.parentNode:n),new bh(r)},ti.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ds(r),n=n===null?null:n.stateNode,n},ti.flushSync=function(n){return ws(n)},ti.hydrate=function(n,r,l){if(!Yl(r))throw Error(t(200));return $l(null,n,r,!0,l)},ti.hydrateRoot=function(n,r,l){if(!Eh(n))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,x=!1,M="",I=x0;if(l!=null&&(l.unstable_strictMode===!0&&(x=!0),l.identifierPrefix!==void 0&&(M=l.identifierPrefix),l.onRecoverableError!==void 0&&(I=l.onRecoverableError)),r=m0(r,null,n,1,l??null,x,!1,M,I),n[hr]=r.current,co(n),d)for(n=0;n<d.length;n++)l=d[n],x=l._getVersion,x=x(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,x]:r.mutableSourceEagerHydrationData.push(l,x);return new ql(r)},ti.render=function(n,r,l){if(!Yl(r))throw Error(t(200));return $l(null,n,r,!1,l)},ti.unmountComponentAtNode=function(n){if(!Yl(n))throw Error(t(40));return n._reactRootContainer?(ws(function(){$l(null,null,n,!1,function(){n._reactRootContainer=null,n[hr]=null})}),!0):!1},ti.unstable_batchedUpdates=gh,ti.unstable_renderSubtreeIntoContainer=function(n,r,l,d){if(!Yl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return $l(n,r,l,!1,d)},ti.version="18.3.1-next-f1338f8080-20240426",ti}var T0;function r_(){if(T0)return Ah.exports;T0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Ah.exports=i_(),Ah.exports}var C0;function s_(){if(C0)return Zl;C0=1;var a=r_();return Zl.createRoot=a.createRoot,Zl.hydrateRoot=a.hydrateRoot,Zl}var a_=s_(),le=Cd();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l_=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase()),A0=a=>{const e=l_(a);return e.charAt(0).toUpperCase()+e.slice(1)},mx=(...a)=>a.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var c_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=le.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:s="",children:o,iconNode:c,...u},h)=>le.createElement("svg",{ref:h,...c_,width:e,height:e,stroke:a,strokeWidth:i?Number(t)*24/Number(e):t,className:mx("lucide",s),...u},[...c.map(([f,p])=>le.createElement(f,p)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=(a,e)=>{const t=le.forwardRef(({className:i,...s},o)=>le.createElement(u_,{ref:o,iconNode:e,className:mx(`lucide-${o_(A0(a))}`,`lucide-${a}`,i),...s}));return t.displayName=A0(a),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],gx=wn("camera",h_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],d_=wn("circle-alert",f_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],m_=wn("circle",p_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],x_=wn("hand",g_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],__=wn("mic-off",v_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],R0=wn("mic",y_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z",key:"1pctta"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",key:"x3v2xh"}]],M_=wn("monitor-play",S_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],b_=wn("music",w_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]],T_=wn("orbit",E_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]],A_=wn("power",C_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],P_=wn("refresh-cw",R_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],xx=wn("rotate-ccw",L_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]],N_=wn("sliders-horizontal",I_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],U_=wn("sparkles",F_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],k_=wn("square",D_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196",key:"w8jjjt"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2",key:"1xawa7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],z_=wn("video-off",O_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],H_=wn("video",B_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],V_=wn("volume-2",G_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],X_=wn("volume-x",W_);function j_({onVideoReady:a}){const e=le.useRef(null),[t,i]=le.useState(""),[s,o]=le.useState(!0),[c,u]=le.useState(0),h=async()=>{try{if(o(!0),i(""),!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error("Camera API not supported in this browser. Please use a modern browser like Chrome, Firefox, or Edge.");const g=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480,facingMode:"user"},audio:!1});e.current&&(e.current.srcObject=g,e.current.onloadedmetadata=()=>{var m;(m=e.current)==null||m.play(),a(e.current),o(!1)})}catch(g){o(!1),g instanceof Error&&(g.name==="NotAllowedError"||g.name==="PermissionDeniedError"?i("Camera permission denied. Please click the camera icon in your browser's address bar and allow camera access, then click Retry below."):g.name==="NotFoundError"?i("No camera found. Please connect a camera to your device."):g.name==="NotReadableError"?i("Camera is already in use by another application. Please close other apps using the camera and try again."):g.name==="OverconstrainedError"?(i("Camera does not meet requirements. Trying with default settings..."),setTimeout(()=>{f()},1e3)):i("Error: "+g.message))}},f=async()=>{try{o(!0),i("");const g=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1});e.current&&(e.current.srcObject=g,e.current.onloadedmetadata=()=>{var m;(m=e.current)==null||m.play(),a(e.current),o(!1)})}catch{o(!1),i("Unable to access camera with default settings.")}},p=()=>{u(g=>g+1),h()};return le.useEffect(()=>(h(),()=>{var g;(g=e.current)!=null&&g.srcObject&&e.current.srcObject.getTracks().forEach(y=>y.stop())}),[a]),G.jsxs("div",{className:"relative",children:[G.jsx("video",{ref:e,className:"w-48 h-36 rounded-lg border-2 border-white/20 shadow-lg bg-black",style:{transform:"scaleX(-1)"},playsInline:!0,muted:!0}),t&&G.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center bg-black/95 rounded-lg p-3 gap-2",children:[G.jsx(d_,{className:"w-6 h-6 text-red-400"}),G.jsx("p",{className:"text-[10px] text-red-400 text-center leading-tight",children:t}),G.jsxs("button",{onClick:p,className:"mt-1 px-3 py-1 bg-white/10 hover:bg-white/20 rounded text-[10px] text-white flex items-center gap-1 transition-colors",children:[G.jsx(P_,{className:"w-3 h-3"}),"Retry"]}),G.jsx("a",{href:"https://support.google.com/chrome/answer/2693767",target:"_blank",rel:"noopener noreferrer",className:"text-[9px] text-blue-400 hover:text-blue-300 underline",children:"How to enable camera"})]}),s&&!t&&G.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center bg-black/80 rounded-lg gap-2",children:[G.jsx(gx,{className:"w-6 h-6 text-white/60 animate-pulse"}),G.jsx("p",{className:"text-xs text-white/60",children:"Loading camera..."})]})]})}const q_=3,vx=400,Y_=.75,$_={mic:"ROOM",music:"TAB",off:"MUTE"},K_={mic:"Take sound: the room through the microphone, music and all, as it actually sounded (S)",music:"Take sound: straight off a tab or the machine, with no room in it. Asks which, each take (S)",off:"Take sound: none (S)"};function P0(a){return a==="mic"?"music":a==="music"?"off":"mic"}async function Z_(a,e){if(a==="off")return{stream:null,owned:!1};if(a==="mic"){if(e&&e.getAudioTracks().some(t=>t.readyState==="live"))return{stream:e,owned:!1};try{return{stream:await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1}}),owned:!0}}catch{return{stream:null,owned:!1,problem:"The microphone was refused, so this take has no sound."}}}try{const t=await navigator.mediaDevices.getDisplayMedia({video:!0,audio:!0});for(const i of t.getVideoTracks())i.stop();return t.getAudioTracks().length===0?{stream:null,owned:!1,problem:'No sound came through. Chrome asks you to tick "share tab audio" in the picker; other browsers do not offer it at all, so MIC is the one that always works.'}:{stream:t,owned:!0}}catch{return{stream:null,owned:!1,problem:"No source was picked, so this take has no sound."}}}function Q_({selectedColors:a,hue:e,saturation:t,mode:i,onHueChange:s,onModeChange:o,autoHueEnabled:c,onAutoHueToggle:u}){const h=(f,p,g)=>{f=f/360,p=p/100,g=g/100;let m,y,v;if(p===0)m=y=v=g;else{const _=(T,E,N)=>(N<0&&(N+=1),N>1&&(N-=1),N<.16666666666666666?T+(E-T)*6*N:N<.5?E:N<.6666666666666666?T+(E-T)*(.6666666666666666-N)*6:T),S=g<.5?g*(1+p):g+p-g*p,b=2*g-S;m=_(b,S,f+.3333333333333333),y=_(b,S,f),v=_(b,S,f-.3333333333333333)}const w=_=>{const S=Math.round(_*255).toString(16);return S.length===1?"0"+S:S};return`#${w(m)}${w(y)}${w(v)}`};return G.jsxs("div",{className:"w-full flex items-center gap-4 px-6 font-mono",children:[G.jsxs("div",{className:"flex gap-1",children:[G.jsx("button",{onClick:()=>o("black"),className:`px-2 py-1 text-[10px] rounded transition-all ${i==="black"?"bg-white/20 text-white":"bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60"}`,title:"1 Color (Fn key)",children:"1C"}),G.jsx("button",{onClick:()=>o("contrast"),className:`px-2 py-1 text-[10px] rounded transition-all ${i==="contrast"?"bg-white/20 text-white":"bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60"}`,title:"2 Colors (Ctrl key)",children:"2C"}),G.jsx("button",{onClick:()=>o("grayscale"),className:`px-2 py-1 text-[10px] rounded transition-all ${i==="grayscale"?"bg-white/20 text-white":"bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60"}`,title:"Black & White (Option/Alt key)",children:"B/W"})]}),i!=="grayscale"&&G.jsxs("div",{className:"flex-1 relative h-6",children:[G.jsx("div",{className:"absolute inset-0 rounded-full",style:{background:"linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)"}}),G.jsx("input",{type:"range",min:"0",max:"360",value:e,onChange:f=>s(Number(f.target.value)),className:"vj-slider-bare absolute inset-0 w-full appearance-none bg-transparent cursor-pointer"}),G.jsx("div",{className:"absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-white shadow-lg pointer-events-none",style:{left:`calc(${e/360*100}% - 10px)`,backgroundColor:h(e,t,50)}})]}),i!=="grayscale"&&G.jsx("button",{onClick:u,className:`px-3 py-1 text-[10px] rounded transition-all whitespace-nowrap ${c?"bg-cyan-500/30 text-cyan-300 border border-cyan-400/50":"bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60"}`,title:"Auto-rotate hue palette",children:c?"⟳ AUTO":"AUTO"})]})}const ir={geometric:{pattern:"geometric",name:"Geometric",short:"Geometric",category:"2D",key:"1",description:"Rotating polygons with trails"},particles:{pattern:"particles",name:"Particles",short:"Particles",category:"2D",key:"2",description:"Dynamic particle system"},waves:{pattern:"waves",name:"Waves",short:"Waves",category:"2D",key:"3",description:"Flowing wave patterns"},technical:{pattern:"technical",name:"Technical Hand Tracker",short:"Tracker",category:"2D",key:"4",description:"Hand tracking visualization"},lottie:{pattern:"lottie",name:"Lottie Inspired",short:"Lottie",category:"2D",key:"5",description:"Animated circular patterns"},"lottie-classic":{pattern:"lottie-classic",name:"Classic Lottie",short:"Lottie 2",category:"2D",key:"Q",description:"Classic Lottie animation"},linefield:{pattern:"linefield",name:"Line Field",short:"Lines",category:"2D",key:"6",description:"Dynamic line fields"},chromatic:{pattern:"chromatic",name:"Chromatic Glow",short:"Chroma",category:"2D",key:"7",description:"RGB chromatic aberration"},halftone:{pattern:"halftone",name:"Halftone Matrix",short:"Halftone",category:"2D",key:"8",description:"Halftone dot patterns"},matrix:{pattern:"matrix",name:"Digital Grid",short:"Grid",category:"2D",key:"9",description:"Matrix-style grid"},distortedcamera:{pattern:"distortedcamera",name:"Distorted Camera",short:"Camera",category:"2D",key:"W",description:"Gesture-controlled camera distortion with chromatic effects"},thicklines:{pattern:"thicklines",name:"Thick Lines",short:"Blocks",category:"2D",key:"=",description:"Rotating blocks with thickness response"},flowfield:{pattern:"flowfield",name:"Flow Field",short:"Flow",category:"2D",key:"D",description:"Flowing vector field"},liquidchrome:{pattern:"liquidchrome",name:"Liquid Chrome",short:"Chrome",category:"2D",key:"-",description:"Iridescent liquid metal simulation"},glitch:{pattern:"glitch",name:"Glitch Network",short:"Glitch",category:"3D",key:"1",description:"Network glitch with perspective effects"},cyberstream:{pattern:"cyberstream",name:"Cyber Stream",short:"Cyber",category:"3D",key:"2",description:"Cyberpunk stream with depth perspective"},morphing:{pattern:"morphing",name:"Morphing Sphere",short:"Sphere",category:"3D",key:"=",description:"Three.js morphing icosphere"},cubewall:{pattern:"cubewall",name:"Cube Wall",short:"Cubes",category:"3D",key:"4",description:"Three.js cube grid waves"},facecloud:{pattern:"facecloud",name:"Op-Art Grid",short:"Op-Art",category:"3D",key:"5",description:"Op-art grid with perspective"},face:{pattern:"face",name:"Face Mesh",short:"Face",category:"3D",key:"-",description:"MediaPipe face tracking with glowing mesh"},"smokehand-torus":{pattern:"smokehand-torus",name:"Smoke Torus",short:"Torus",category:"3D",key:"8",description:"Particle smoke shaped around a torus"},"smokehand-hand":{pattern:"smokehand-hand",name:"Smoke Hand",short:"Hand",category:"3D",key:"7",description:"Particle smoke shaped around a hand model"},"network-cube":{pattern:"network-cube",name:"Network Cube",short:"Network",category:"3D",key:"9",description:"Sparse cubic constellation"},"elastic-net":{pattern:"elastic-net",name:"Elastic Net",short:"Elastic",category:"3D",key:"0",description:"Elastic neural network simulation"},ripple:{pattern:"ripple",name:"Water Ripple",short:"Ripple",category:"TD",key:"1",description:"Camera refracted through a height field your hands leave behind"},text:{pattern:"text",name:"Kinetic Type",short:"Type",category:"TD",key:"2",description:"Your words, extruded and pushed around by your hands"},video:{pattern:"video",name:"Clip",short:"Clip",category:"TD",key:"3",description:"Your own footage, sheared into sliding bands"},chrome:{pattern:"chrome",name:"Chrome",short:"Chrome",category:"TD",key:"5",description:"Liquid metal on black, splitting light into rainbow at its edges"},mosaic:{pattern:"mosaic",name:"Mosaic",short:"Mosaic",category:"TD",key:"4",description:"Your video or photo rebuilt out of letters, dots, blocks or bars"},digitalblocks:{pattern:"digitalblocks",name:"Digital Horizon",short:"Horizon",category:"2D",key:"0",description:"Glitchy digital data sorting"}},Is=10,_x="vj-setlist";function Wo(a){return a===9?"0":String(a+1)}function yf(a){return a==="0"?9:a>="1"&&a<="9"?Number(a)-1:-1}const Lh=["geometric","waves","particles","halftone","ripple","flowfield"];function J_(a){return typeof a=="string"&&a in ir}function ey(){try{const a=localStorage.getItem(_x);if(a===null)return Lh;const e=JSON.parse(a);return Array.isArray(e)?e.filter(J_).filter((i,s,o)=>o.indexOf(i)===s).slice(0,Is):Lh}catch{return Lh}}function ty(a){try{localStorage.setItem(_x,JSON.stringify(a))}catch{}}function ny(a){return a.gesture==="pinch"?"PINCH":a.fingerCount===void 0?null:a.fingerCount===2?"MED":a.fingerCount>=5?"FAST":`${a.fingerCount}F`}function L0({label:a,hand:e}){const t=ny(e);return G.jsxs("div",{children:[G.jsx("div",{className:"text-white/90",children:a}),t&&G.jsx("div",{className:"text-cyan-400",children:t})]})}const iy=[{key:"bass",label:"LOW"},{key:"lowMid",label:"L-MID"},{key:"mid",label:"MID"},{key:"high",label:"HIGH"}];function ry(a){const e=Math.floor(a);return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function Cs({label:a,active:e,warn:t,onClick:i,title:s,children:o}){return G.jsxs("button",{onClick:i,title:s,className:"flex flex-col items-center gap-1 group/btn",children:[G.jsx("span",{className:`w-8 h-8 rounded-full transition-all flex items-center justify-center group-hover/btn:scale-105 group-active/btn:scale-95 ${e?t?"bg-cyan-400 text-black shadow-lg shadow-cyan-400/40":"bg-white text-black shadow-lg shadow-white/40":"bg-white/10 text-white/60 group-hover/btn:bg-white/20 group-hover/btn:text-white"}`,children:o}),G.jsx("span",{className:`text-[8px] tracking-widest transition-colors ${e?"text-white/80":"text-white/35"}`,children:a})]})}function sy({currentPattern:a,onPatternChange:e,layers:t,selectedLayer:i,onPatternHold:s,onLayerCycle:o,showCamera:c,onCameraToggle:u,handData:h,selectedColors:f,hue:p,saturation:g,colorMode:m,onHueChange:y,onSaturationChange:v,onColorModeChange:w,autoHueEnabled:_,onAutoHueToggle:S,set:b,onOpenLibrary:T,audioEnabled:E,onAudioToggle:N,audioSensitivity:A,onAudioSensitivityChange:U,audioLevels:C,motion:L,onMotionChange:O,idleDrive:D,onIdleDriveToggle:z,fxEnabled:Z,fxActive:ne,onFxToggle:V,canRecord:J,recording:$,recordSeconds:K,onRecordToggle:se,sound:ie,onSoundCycle:B,output:X,onOutputToggle:ye}){var pe;const Me=le.useRef(null),we=()=>{Me.current&&(clearTimeout(Me.current.timer),Me.current=null)},te=me=>{we(),Me.current={pattern:me,fired:!1,timer:window.setTimeout(()=>{Me.current&&(Me.current.fired=!0),s(me)},vx)}},xe=me=>{const Te=Me.current;!Te||Te.pattern!==me||(clearTimeout(Te.timer),Me.current=null,Te.fired||e(me))};return G.jsxs(G.Fragment,{children:[G.jsx("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 z-50",children:G.jsx("div",{className:"bg-black/70 backdrop-blur-sm rounded-full py-2 px-6 border border-white/20 font-mono",children:G.jsxs("div",{className:"flex items-center gap-4",children:[G.jsx("button",{onClick:T,title:"Back to the library to change the set (Esc)",className:"px-3 py-1 rounded text-[10px] tracking-wider text-white/40 transition-all hover:bg-white/10 hover:text-white/80",children:"SET"}),G.jsx("div",{className:"w-px h-6 bg-white/20"}),G.jsx("div",{className:"flex items-center gap-1.5",children:b.map((me,Te)=>{const Pe=t.findIndex($e=>$e.pattern===me),je=Pe===i,Ye=Pe!==-1&&!je;return G.jsxs("button",{onPointerDown:()=>te(me),onPointerUp:()=>xe(me),onPointerLeave:we,className:"relative flex w-[46px] shrink-0 flex-col items-center gap-0.5 group/set",title:`${ir[me].name} (${Wo(Te)})${Pe!==-1?` — layer ${Pe+1}`:""} · hold to stack`,children:[G.jsxs("span",{className:`relative flex h-7 w-7 items-center justify-center rounded-full text-xs transition-all ${je?"bg-white text-black shadow-lg shadow-white/50":Ye?"bg-white/25 text-white ring-1 ring-emerald-400/70":"bg-white/10 text-white/60 group-hover/set:bg-white/20 group-hover/set:text-white/90"}`,children:[Wo(Te),Pe!==-1&&t.length>1&&G.jsx("span",{className:"absolute -right-1 -top-1 h-3 w-3 rounded-full bg-emerald-400 text-center text-[7px] leading-3 text-black",children:Pe+1})]}),G.jsx("span",{className:`w-full truncate text-center text-[8px] leading-none transition-colors ${je?"text-white/85":"text-white/35 group-hover/set:text-white/65"}`,children:ir[me].short})]},me)})}),G.jsx("div",{className:"w-px h-6 bg-white/20"}),G.jsxs("div",{className:"flex items-center gap-1.5",title:"How hard the hands drive every visual (- and =)",children:[G.jsx("span",{className:"text-[8px] tracking-widest text-white/35",children:"HANDS"}),G.jsx("input",{type:"range","aria-label":"Hand motion",min:0,max:2,step:.05,value:L,onChange:me=>O(parseFloat(me.target.value)),className:"vj-slider h-1 w-16 cursor-pointer appearance-none rounded-full focus:outline-none",style:{background:`linear-gradient(to right, rgba(255,255,255,0.85) ${L/2*100}%, rgba(255,255,255,0.15) ${L/2*100}%)`}}),G.jsxs("span",{className:`w-7 text-[9px] tabular-nums ${L>1.35?"text-amber-300":L<.65?"text-cyan-300":"text-white/55"}`,children:[Math.round(L*100),"%"]})]}),t.length>1&&G.jsxs(G.Fragment,{children:[G.jsx("div",{className:"w-px h-6 bg-white/20"}),G.jsxs("button",{onClick:o,title:"The layer the sliders and colours act on (L) — fade it with [ and ]",className:"px-2 py-1 rounded text-[10px] whitespace-nowrap bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 transition-all",children:["L",i+1,"/",t.length,G.jsxs("span",{className:"text-emerald-300/60",children:[" ",Math.round((((pe=t[i])==null?void 0:pe.opacity)??1)*100),"%"]})]})]})]})})}),G.jsxs("div",{className:"absolute bottom-[25px] left-6 right-6 z-50 flex items-end gap-4 font-mono pointer-events-none",children:[G.jsx("div",{className:"shrink-0 pointer-events-auto",children:G.jsxs("div",{className:"bg-black/70 backdrop-blur-sm rounded-2xl py-2 px-3 border border-white/20 flex items-end gap-2.5 w-fit",children:[G.jsx(Cs,{label:"CAM",active:c,onClick:u,title:"Show the camera preview (C)",children:c?G.jsx(H_,{className:"w-3.5 h-3.5"}):G.jsx(z_,{className:"w-3.5 h-3.5"})}),G.jsx(Cs,{label:"MIC",active:E,onClick:N,title:"Audio-reactive mode: drive the visuals from the microphone (A)",children:E?G.jsx(R0,{className:"w-3.5 h-3.5"}):G.jsx(__,{className:"w-3.5 h-3.5"})}),G.jsx(Cs,{label:"AUTO",active:D,onClick:z,title:"Auto-motion: keep hand-driven visuals moving when no hands are tracked (I)",children:G.jsx(T_,{className:"w-3.5 h-3.5"})}),G.jsx("div",{className:"w-px h-8 bg-white/15 self-center"}),G.jsx(Cs,{label:"FX",active:Z&&ne,warn:Z&&ne,onClick:V,title:Z?"Post effects are on. Click to bypass the whole chain, keeping every setting (X)":"Post effects bypassed. Click to bring them back (X)",children:G.jsx(U_,{className:"w-3.5 h-3.5"})}),G.jsx("div",{className:"w-px h-8 bg-white/15 self-center"}),G.jsx(Cs,{label:"OUT",active:X,onClick:ye,title:X?"Close the projector window (O)":"Open a second window with only the visuals in it — drag it onto the projector while these controls stay here (O)",children:G.jsx(M_,{className:"w-3.5 h-3.5"})}),J&&G.jsxs(G.Fragment,{children:[G.jsx(Cs,{label:$_[ie],active:ie!=="off",onClick:B,title:K_[ie],children:ie==="off"?G.jsx(X_,{className:"w-3.5 h-3.5"}):ie==="music"?G.jsx(b_,{className:"w-3.5 h-3.5"}):G.jsx(V_,{className:"w-3.5 h-3.5"})}),G.jsx(Cs,{label:$?ry(K):"REC",active:$,warn:$,onClick:se,title:$?"Stop and save the take (R)":"Record the visuals — and the camera if its preview is up — with none of these controls in it (R)",children:$?G.jsx(k_,{className:"w-3 h-3 fill-current"}):G.jsx(m_,{className:"w-3.5 h-3.5 fill-current text-red-500 group-hover/btn:text-red-400"})})]})]})}),G.jsx("div",{className:"flex-1 min-w-0 flex justify-center pointer-events-none",children:G.jsx("div",{className:"bg-black/70 backdrop-blur-sm rounded-full py-2 px-6 border border-white/20 max-w-4xl w-full pointer-events-auto",children:G.jsx(Q_,{selectedColors:f,hue:p,saturation:g,mode:m,onHueChange:y,onModeChange:w,autoHueEnabled:_,onAutoHueToggle:S})})}),!E&&G.jsxs("div",{className:"shrink-0 bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-white/20 space-y-2 text-xs min-w-[200px] font-mono animate-in fade-in duration-300 pointer-events-auto",children:[G.jsx("div",{className:"text-white/80 mb-2",children:"HAND"}),G.jsxs("div",{className:"space-y-1",children:[h.left&&G.jsx(L0,{label:"L HAND",hand:h.left}),h.right&&G.jsx(L0,{label:"R HAND",hand:h.right}),h.clapping&&G.jsx("div",{className:"text-red-500 text-base animate-bounce",children:"CLAP!"}),!h.left&&!h.right&&G.jsx("div",{className:"text-white/50",children:"NO HANDS"})]}),G.jsxs("div",{className:"text-white/50 text-[10px] mt-2 pt-2 border-t border-white/20",children:["OPEN=FOLLOW",G.jsx("br",{}),"PINCH=SLOW 2F=MED 5F=FAST",G.jsx("br",{}),"CLAP=EXPLODE"]})]}),E&&G.jsx("div",{className:"shrink-0 animate-in slide-in-from-right-5 fade-in duration-300 pointer-events-auto",children:G.jsxs("div",{className:"bg-black/70 backdrop-blur-sm rounded-xl p-4 border border-white/20 font-mono flex flex-col gap-4 w-[160px]",children:[G.jsxs("div",{className:"flex items-center gap-2 border-b border-white/10 pb-2",children:[G.jsx(R0,{className:"w-3.5 h-3.5 text-white/90 animate-pulse"}),G.jsx("span",{className:"text-[10px] font-bold text-white/80 tracking-wider",children:"AUDIO"})]}),G.jsxs("div",{className:"space-y-1 group",children:[G.jsxs("div",{className:"flex justify-between text-[9px] text-white/50 font-medium",children:[G.jsx("span",{className:"group-hover:text-white/80 transition-colors",children:"GAIN"}),G.jsxs("span",{className:"text-white",children:[Math.round(A*100),"%"]})]}),G.jsx("div",{className:"relative h-4 flex items-center",children:G.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:A,onChange:me=>U(parseFloat(me.target.value)),className:"vj-slider w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer focus:outline-none",style:{backgroundImage:`linear-gradient(to right, white 0%, white ${A*100}%, rgba(255,255,255,0.2) ${A*100}%)`}})})]}),G.jsxs("div",{className:"space-y-1",children:[G.jsxs("div",{className:"flex justify-between text-[9px] text-white/50 font-medium",children:[G.jsx("span",{children:"LEVELS"}),G.jsx("span",{className:`transition-colors ${C.onset>.05?"text-cyan-300":"text-white/20"}`,children:"●"})]}),G.jsx("div",{className:"flex items-end gap-1 h-10",children:iy.map(({key:me,label:Te})=>G.jsxs("div",{className:"flex-1 flex flex-col items-center gap-1",children:[G.jsx("div",{className:"relative w-full h-8 rounded-sm bg-white/10 overflow-hidden",children:G.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-white transition-[height] duration-75",style:{height:`${Math.round(C[me]*100)}%`}})}),G.jsx("span",{className:"text-[7px] tracking-wider text-white/50",children:Te})]},me))})]})]})})]})]})}const ay="modulepreload",oy=function(a,e){return new URL(a,e).href},I0={},yx=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let c=function(p){return Promise.all(p.map(g=>Promise.resolve(g).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};const u=document.getElementsByTagName("link"),h=document.querySelector("meta[property=csp-nonce]"),f=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));s=c(t.map(p=>{if(p=oy(p,i),p in I0)return;I0[p]=!0;const g=p.endsWith(".css"),m=g?'[rel="stylesheet"]':"";if(!!i)for(let w=u.length-1;w>=0;w--){const _=u[w];if(_.href===p&&(!g||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${m}`))return;const v=document.createElement("link");if(v.rel=g?"stylesheet":ay,g||(v.as="script"),v.crossOrigin="",v.href=p,f&&v.setAttribute("nonce",f),document.head.appendChild(v),g)return new Promise((w,_)=>{v.addEventListener("load",w),v.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${p}`)))})}))}function o(c){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=c,window.dispatchEvent(u),!u.defaultPrevented)throw c}return s.then(c=>{for(const u of c||[])u.status==="rejected"&&o(u.reason);return e().catch(o)})},N0=30,F0=.15;function ly({videoElement:a,onHandData:e}){const t=le.useRef(null),i=le.useRef(!1),s=le.useRef(-1),o=le.useRef(null),c=le.useRef([]),u=le.useRef([]),h=le.useRef({}),f=le.useRef([]),p=le.useRef(null);return le.useEffect(()=>{let g=!0;const m=async()=>{if(!i.current)try{console.log("✋ Initializing MediaPipe Hand Landmarker (Tasks Vision API)...");const _=await yx(()=>import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14"),[],import.meta.url),{HandLandmarker:S,FilesetResolver:b}=_,T=await b.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm");t.current=await S.createFromOptions(T,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",delegate:"GPU"},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.7,minHandPresenceConfidence:.5,minTrackingConfidence:.5}),console.log("✅ Hand tracking initialized (Tasks Vision API)"),i.current=!0,g&&y()}catch(_){console.error("❌ Error initializing hand tracking:",_)}},y=()=>{const _=()=>{if(!g||!t.current||!a)return;const S=performance.now();if(a.currentTime!==s.current){s.current=a.currentTime;try{const b=t.current.detectForVideo(a,S);v(b)}catch(b){console.error("Hand detection error:",b)}}o.current=requestAnimationFrame(_)};_()},v=_=>{const S=Date.now(),b={left:null,right:null};if(_.landmarks&&_.handedness&&_.landmarks.length>0)if(_.handedness.forEach((T,E)=>{const N=_.landmarks[E],A=T[0].categoryName.toLowerCase(),U=N[9],C={x:1-U.x,y:U.y},L=uy(N),O=cy(N),D=A==="left"?u.current:c.current;let z=0;if(D.length>0){const K=D[D.length-1],se=C.x-K.position.x,ie=C.y-K.position.y,B=Math.sqrt(se*se+ie*ie),X=(S-K.timestamp)/1e3;z=X>0?B/X:0,z=Math.min(z*2,3)}const Z=A==="left"?"right":"left";(D.length>0?D[D.length-1].gesture:null)!==L&&(h.current[Z]=S);const V=h.current[Z]||S,J=(S-V)/1e3;D.push({position:C,gesture:L,timestamp:S}),D.length>10&&D.shift(),f.current.push({x:C.x,y:C.y,hand:Z});const $={position:C,gesture:L,pinchDistance:L==="pinch"?hy(N):void 0,velocity:z,holdDuration:J,fingerCount:O,landmarks:N.map(K=>({x:1-K.x,y:K.y,z:K.z}))};A==="left"?b.right=$:b.left=$}),b.left&&b.right){const T=b.left.position.x-b.right.position.x,E=b.left.position.y-b.right.position.y,N=Math.sqrt(T*T+E*E);b.distanceBetweenHands=N,N<F0&&(b.clapping=!0,b.clapIntensity=1-N/F0)}else p.current=null;f.current.length>N0&&(f.current=f.current.slice(-N0)),b.gestureTrail=[...f.current],e(b)},w=()=>{a&&a.readyState>=2?m():setTimeout(w,100)};return w(),()=>{if(g=!1,o.current!==null&&cancelAnimationFrame(o.current),t.current)try{t.current.close(),t.current=null}catch(_){console.warn("Error closing hand landmarker:",_)}i.current=!1}},[a,e]),null}function cy(a){if(!a||a.length<21)return 0;const e=a[0];a[9];let t=0;const i=a[4];a[3];const s=a[2],o=a[1],c=Math.sqrt(Math.pow(i.x-o.x,2)+Math.pow(i.y-o.y,2)),u=Math.sqrt(Math.pow(s.x-o.x,2)+Math.pow(s.y-o.y,2));c>u*1.2&&t++;const h=[{tip:8,pip:6,mcp:5},{tip:12,pip:10,mcp:9},{tip:16,pip:14,mcp:13},{tip:20,pip:18,mcp:17}],f=a[9];f.y-e.y,f.z-e.z;for(const p of h){const g=a[p.tip],m=a[p.pip],y=a[p.mcp],v=g.y<y.y-.02,w=Math.sqrt(Math.pow(g.x-e.x,2)+Math.pow(g.y-e.y,2)+Math.pow(g.z-e.z,2)),_=Math.sqrt(Math.pow(m.x-e.x,2)+Math.pow(m.y-e.y,2)+Math.pow(m.z-e.z,2)),S=w>_*1.05,b={x:y.x-m.x,y:y.y-m.y,z:y.z-m.z},T={x:g.x-m.x,y:g.y-m.y,z:g.z-m.z},E=Math.sqrt(b.x**2+b.y**2+b.z**2),N=Math.sqrt(T.x**2+T.y**2+T.z**2);if(E>0&&N>0){const U=b.x/E*(T.x/N)+b.y/E*(T.y/N)+b.z/E*(T.z/N)<-.3;(v||S||U)&&t++}else(v||S)&&t++}return t}function uy(a){if(!a||a.length<21)return"none";const e=a[9],t=a[4],i=a[8],s=a[12],o=a[16],c=a[20],u=a[6],h=a[10],f=a[14],p=a[18];if(Math.sqrt(Math.pow(t.x-i.x,2)+Math.pow(t.y-i.y,2)+Math.pow(t.z-i.z,2))<.06)return"pinch";const m=Math.sqrt(Math.pow(i.x-e.x,2)+Math.pow(i.y-e.y,2)+Math.pow(i.z-e.z,2)),y=Math.sqrt(Math.pow(u.x-e.x,2)+Math.pow(u.y-e.y,2)+Math.pow(u.z-e.z,2)),v=m>y*1.1,w=Math.sqrt(Math.pow(s.x-e.x,2)+Math.pow(s.y-e.y,2)+Math.pow(s.z-e.z,2)),_=Math.sqrt(Math.pow(h.x-e.x,2)+Math.pow(h.y-e.y,2)+Math.pow(h.z-e.z,2)),S=w>_*1.1,b=Math.sqrt(Math.pow(o.x-e.x,2)+Math.pow(o.y-e.y,2)+Math.pow(o.z-e.z,2)),T=Math.sqrt(Math.pow(f.x-e.x,2)+Math.pow(f.y-e.y,2)+Math.pow(f.z-e.z,2)),E=b>T*1.1,N=Math.sqrt(Math.pow(c.x-e.x,2)+Math.pow(c.y-e.y,2)+Math.pow(c.z-e.z,2)),A=Math.sqrt(Math.pow(p.x-e.x,2)+Math.pow(p.y-e.y,2)+Math.pow(p.z-e.z,2)),U=N>A*1.1,C=[v,S,E,U].filter(Boolean).length;return C>=3?"open":C<=1?"fist":"none"}function hy(a){const e=a[4],t=a[8];return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)+Math.pow(e.z-t.z,2))}function fy({onGrant:a,onSkip:e}){return G.jsx("div",{className:"fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center",children:G.jsx("div",{className:"bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-xl rounded-2xl p-8 max-w-md border border-white/20 shadow-2xl",children:G.jsxs("div",{className:"text-center space-y-6",children:[G.jsx("div",{className:"flex justify-center",children:G.jsx("div",{className:"w-20 h-20 bg-purple-600/30 rounded-full flex items-center justify-center",children:G.jsx(gx,{className:"w-10 h-10 text-purple-300"})})}),G.jsxs("div",{children:[G.jsx("h2",{className:"text-2xl text-white mb-2",children:"Camera Access Required"}),G.jsx("p",{className:"text-white/70 text-sm",children:"This VJ app needs camera access to track your hand movements and gestures for interactive visual control."})]}),G.jsx("div",{className:"bg-black/30 rounded-lg p-4 space-y-2 text-left",children:G.jsxs("div",{className:"flex items-start gap-3",children:[G.jsx(x_,{className:"w-5 h-5 text-green-400 mt-0.5 flex-shrink-0"}),G.jsxs("div",{className:"text-sm",children:[G.jsx("div",{className:"text-white/90",children:"Hand Tracking"}),G.jsx("div",{className:"text-white/60 text-xs",children:"Real-time gesture recognition"})]})]})}),G.jsxs("div",{className:"flex gap-3",children:[G.jsx("button",{onClick:e,className:"flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all",children:"Skip"}),G.jsx("button",{onClick:a,className:"flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg transition-all font-medium",children:"Allow Access"})]}),G.jsx("p",{className:"text-white/50 text-xs",children:"Your camera feed is processed locally on your device. No data is sent to external servers."})]})})})}function ni(a){return Number.isFinite(a)?Math.round(Math.min(255,Math.max(0,a))).toString(16).padStart(2,"0"):"00"}const Sf={physics:{initialVelocity:4,damping:.98},size:{baseRange:[100,200],growthMultiplier:1.5,shrinkMultiplier:.2,transitionSpeed:.3},glow:{layers:2,expansion:.4,layerFade:.3},emission:{openHandRate:.5,closedHandRate:.05},trail:{fadeAlpha:.3},limits:{maxParticles:50},explosion:{particleCount:50,speedRange:[5,20],sizeMultiplier:1.5,forceMultiplier:10,growthFactor:.8,vibrationDuration:.25,cooldown:1e3,flashDelay:20},controls:{fingerCountSpeed:{oneFinger:.01,twoFingers:1,threeFingers:1.4,fourFingers:1.7,fiveFingers:2},openOpacity:1,closedOpacity:1,fadeOutRate:.08}};function Er(a,e){let t=a;for(const i of e.split(".")){if(typeof t!="object"||t===null)return;t=t[i]}return typeof t=="number"?t:void 0}function Ei(a,e){const t=structuredClone(a);for(const[i,s]of Object.entries(e)){if(!Number.isFinite(s)||Er(a,i)===void 0)continue;const o=i.split("."),c=o.pop();let u=t;for(const h of o)u=u[h];u[c]=s}return t}function U0(a){if(typeof a!="object"||a===null||Array.isArray(a))return{};const e={};for(const[t,i]of Object.entries(a)){if(typeof i!="object"||i===null||Array.isArray(i))continue;const s={};for(const[o,c]of Object.entries(i))typeof c=="number"&&Number.isFinite(c)&&(s[o]=c);Object.keys(s).length>0&&(e[t]=s)}return e}const Sx=[1],Mf=[0];let Ad=0;function dy(a,e){for(let t=0;t<e.length;t++){const i=e[t]??1;Sx[t]=i,Mf[t]=(Mf[t]??0)+a*i}}function py(a){Ad=a}function gn(){return Sx[Ad]??1}function $o(){return Mf[Ad]??0}class Ih{constructor(e,t,i,s,o){F(this,"x");F(this,"y");F(this,"vx");F(this,"vy");F(this,"size");F(this,"color");F(this,"baseSize");F(this,"targetSize");F(this,"alpha",1);this.x=e,this.y=t;const c=o.physics.initialVelocity;this.vx=(Math.random()-.5)*c,this.vy=(Math.random()-.5)*c;const[u,h]=o.size.baseRange;this.baseSize=(u+Math.random()*(h-u))*s,this.size=this.baseSize,this.targetSize=this.baseSize,this.color=i}update(e,t,i,s){e?(this.targetSize=this.baseSize*s.size.growthMultiplier,this.alpha=s.controls.openOpacity,t>0&&(this.vx+=(Math.random()-.5)*t*s.explosion.forceMultiplier*i,this.vy+=(Math.random()-.5)*t*s.explosion.forceMultiplier*i,this.targetSize=this.baseSize*(1.2+t*s.explosion.growthFactor))):(this.targetSize=this.baseSize*s.size.shrinkMultiplier,this.alpha=Math.max(0,this.alpha-s.controls.fadeOutRate)),this.size+=(this.targetSize-this.size)*s.size.transitionSpeed,this.x+=this.vx*i,this.y+=this.vy*i,this.vx*=s.physics.damping,this.vy*=s.physics.damping}}class my{constructor(e,t){F(this,"cfg",Sf);F(this,"canvas");F(this,"ctx");F(this,"particles",[]);F(this,"time",0);F(this,"vibrationTimer",0);F(this,"isExploding",!1);this.canvas=e,this.ctx=t}setParams(e){this.cfg=Ei(Sf,e)}render(e,t){this.time+=.016*gn(),this.ctx.fillStyle=`rgba(0, 0, 0, ${this.cfg.trail.fadeAlpha})`,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&!this.isExploding&&(this.createExplosionParticles(t),this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.004,i=Math.max(0,this.vibrationTimer));let s=this.cfg.controls.fingerCountSpeed.twoFingers,o=!1,c=!1,u=0,h=0;e.left&&(o=e.left.gesture==="open",u=e.left.fingerCount||0,e.left.gesture==="pinch"&&(u=1)),e.right&&(c=e.right.gesture==="open",h=e.right.fingerCount||0,e.right.gesture==="pinch"&&(h=1));const f=o||c,p=Math.max(u,h);if(p===1?s=this.cfg.controls.fingerCountSpeed.oneFinger:p===2?s=this.cfg.controls.fingerCountSpeed.twoFingers:p===3?s=this.cfg.controls.fingerCountSpeed.threeFingers:p===4?s=this.cfg.controls.fingerCountSpeed.fourFingers:p>=5&&(s=this.cfg.controls.fingerCountSpeed.fiveFingers),e.left){const m=e.left.gesture==="open"?this.cfg.emission.openHandRate:this.cfg.emission.closedHandRate;Math.random()<m&&this.particles.push(new Ih(e.left.position.x*this.canvas.width,e.left.position.y*this.canvas.height,t[Math.floor(Math.random()*t.length)],1,this.cfg))}if(e.right){const m=e.right.gesture==="open"?this.cfg.emission.openHandRate:this.cfg.emission.closedHandRate;Math.random()<m&&this.particles.push(new Ih(e.right.position.x*this.canvas.width,e.right.position.y*this.canvas.height,t[Math.floor(Math.random()*t.length)],1,this.cfg))}this.particles=this.particles.filter(g=>{if(g.update(f,i,s,this.cfg),g.alpha<.01)return!1;this.ctx.save(),this.ctx.globalAlpha=g.alpha;for(let m=0;m<this.cfg.glow.layers;m++){const y=g.size*(1+m*this.cfg.glow.expansion),v=this.ctx.createRadialGradient(g.x,g.y,0,g.x,g.y,y),w=(1-m*this.cfg.glow.layerFade)*g.alpha;v.addColorStop(0,g.color+ni(w*255)),v.addColorStop(.5,g.color+ni(w*150)),v.addColorStop(1,g.color+"00"),this.ctx.fillStyle=v,this.ctx.beginPath(),this.ctx.arc(g.x,g.y,y,0,Math.PI*2),this.ctx.fill()}return this.ctx.restore(),!0}),this.particles.length>this.cfg.limits.maxParticles&&(this.particles=this.particles.slice(-this.cfg.limits.maxParticles))}createExplosionParticles(e){const t=this.canvas.width/2,i=this.canvas.height/2;for(let s=0;s<this.cfg.explosion.particleCount;s++){const o=Math.random()*Math.PI*2,[c,u]=this.cfg.explosion.speedRange,h=c+Math.random()*(u-c),f=new Ih(t,i,e[Math.floor(Math.random()*e.length)],this.cfg.explosion.sizeMultiplier,this.cfg);f.vx=Math.cos(o)*h,f.vy=Math.sin(o)*h,this.particles.push(f)}this.ctx.fillStyle="#FFFFFFDD",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),setTimeout(()=>{this.ctx.fillStyle=e[0]+"80",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)},this.cfg.explosion.flashDelay),this.vibrationTimer=this.cfg.explosion.vibrationDuration,this.isExploding=!0,setTimeout(()=>{this.isExploding=!1},this.cfg.explosion.cooldown)}}const wf={trail:{fadeAlpha:.1,lineThickness:2},fingerCountSpeed:{oneFinger:.003,normalFingers:1,fiveFingers:2},fingerCountStrokeWidth:{oneFinger:1,twoFingers:4.5,normalFingers:1.5,fiveFingers:6},complexity:{baseSides:3,leftHandMultiplier:1,rightHandMultiplier:.5,maxSides:12,minSides:3},vibration:{flashDuration:.8,shakeAmountX:40,shakeAmountY:40},polygon:{baseSize:100,strokeWidth:2},layers:{count:5,sizeGrowth:.3,rotationOffset:.5,baseOpacity:.3,opacityFade:.05},bridge:{thickness:5,waveAmplitude:30},animation:{baseRotationMultiplier:.01}};class D0{constructor(e,t){F(this,"cfg",wf);F(this,"canvas");F(this,"ctx");F(this,"time",0);F(this,"vibrationTimer",0);this.canvas=e,this.ctx=t}setParams(e){this.cfg=Ei(wf,e)}render(e,t){var w,_,S,b;this.time+=.016*gn(),this.ctx.fillStyle=`rgba(0, 0, 0, ${this.cfg.trail.fadeAlpha})`,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&(this.ctx.fillStyle="#FFFFFFCC",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.vibrationTimer=this.cfg.vibration.flashDuration),this.vibrationTimer>0&&(this.vibrationTimer-=.016,i=Math.max(0,this.vibrationTimer));let s=1,o=this.cfg.complexity.baseSides,c=1;if(e.left&&e.left.gesture==="open"){const T=e.left.fingerCount||2;T===1?(s=this.cfg.fingerCountSpeed.oneFinger,c=this.cfg.fingerCountStrokeWidth.oneFinger):T===2?(s=this.cfg.fingerCountSpeed.normalFingers,c=this.cfg.fingerCountStrokeWidth.twoFingers):T===5?(s=this.cfg.fingerCountSpeed.fiveFingers,c=this.cfg.fingerCountStrokeWidth.fiveFingers):(s=this.cfg.fingerCountSpeed.normalFingers,c=this.cfg.fingerCountStrokeWidth.normalFingers),o=Math.floor(this.cfg.complexity.baseSides+T*this.cfg.complexity.leftHandMultiplier)}if(e.left&&e.left.gesture==="pinch"&&(s=this.cfg.fingerCountSpeed.oneFinger,c=this.cfg.fingerCountStrokeWidth.oneFinger,o=Math.floor(this.cfg.complexity.baseSides+1*this.cfg.complexity.leftHandMultiplier)),e.right&&e.right.gesture==="open"){const T=e.right.fingerCount||2;let E,N;T===1?(E=this.cfg.fingerCountSpeed.oneFinger,N=this.cfg.fingerCountStrokeWidth.oneFinger):T===2?(E=this.cfg.fingerCountSpeed.normalFingers,N=this.cfg.fingerCountStrokeWidth.twoFingers):T===5?(E=this.cfg.fingerCountSpeed.fiveFingers,N=this.cfg.fingerCountStrokeWidth.fiveFingers):(E=this.cfg.fingerCountSpeed.normalFingers,N=this.cfg.fingerCountStrokeWidth.normalFingers),s*=E,c=Math.max(c,N),o+=Math.floor(T*this.cfg.complexity.rightHandMultiplier)}e.right&&e.right.gesture==="pinch"&&(s*=this.cfg.fingerCountSpeed.oneFinger,c=Math.max(c,this.cfg.fingerCountStrokeWidth.oneFinger),o+=Math.floor(1*this.cfg.complexity.rightHandMultiplier));const u=this.time*s*this.cfg.animation.baseRotationMultiplier,h=i>0?(Math.random()-.5)*this.cfg.vibration.shakeAmountX*i:0,f=i>0?(Math.random()-.5)*this.cfg.vibration.shakeAmountY*i:0;this.drawGestureTrails(e,t);const p=(w=e.left)!=null&&w.position.x?e.left.position.x*this.canvas.width+h:this.canvas.width/2,g=(_=e.left)!=null&&_.position.y?e.left.position.y*this.canvas.height+f:this.canvas.height/2,m=(S=e.right)!=null&&S.position.x?e.right.position.x*this.canvas.width+h:this.canvas.width/2+100,y=(b=e.right)!=null&&b.position.y?e.right.position.y*this.canvas.height+f:this.canvas.height/2,v=this.cfg.polygon.baseSize*(1+i);for(let T=0;T<this.cfg.layers.count;T++){const E=v*(1+T*this.cfg.layers.sizeGrowth),N=u+T*this.cfg.layers.rotationOffset;e.left&&e.left.gesture==="open"&&this.drawPolygon(p,g,Math.max(this.cfg.complexity.minSides,Math.min(this.cfg.complexity.maxSides,o+T)),E+T*30,N,t[T%t.length],this.cfg.layers.baseOpacity-T*this.cfg.layers.opacityFade,c),e.right&&e.right.gesture==="open"&&this.drawPolygon(m,y,Math.max(this.cfg.complexity.minSides,Math.min(this.cfg.complexity.maxSides,o+T)),E+T*30,-N,t[(T+2)%t.length],this.cfg.layers.baseOpacity-T*this.cfg.layers.opacityFade,c)}e.left&&e.right&&e.left.gesture==="open"&&e.right.gesture==="open"&&this.drawBridge(p,g,m,y,t,v,o)}drawGestureTrails(e,t){if(!e.gestureTrail||e.gestureTrail.length<2)return;const i=e.gestureTrail;for(let s=1;s<i.length;s++){const o=i[s-1],c=i[s],u=s/i.length,h=c.hand==="left"?t[0]:t[2];this.ctx.strokeStyle=h+ni(u*100),this.ctx.lineWidth=this.cfg.trail.lineThickness*u,this.ctx.lineCap="round",this.ctx.beginPath(),this.ctx.moveTo(o.x*this.canvas.width,o.y*this.canvas.height),this.ctx.lineTo(c.x*this.canvas.width,c.y*this.canvas.height),this.ctx.stroke()}}drawPolygon(e,t,i,s,o,c,u,h){this.ctx.save(),this.ctx.translate(e,t),this.ctx.rotate(o),this.ctx.beginPath();for(let p=0;p<=i;p++){const g=p/i*Math.PI*2,m=Math.cos(g)*s,y=Math.sin(g)*s;p===0?this.ctx.moveTo(m,y):this.ctx.lineTo(m,y)}this.ctx.closePath();const f=this.ctx.createRadialGradient(0,0,0,0,0,s);f.addColorStop(0,c+ni(u*255)),f.addColorStop(1,c+"00"),this.ctx.fillStyle=f,this.ctx.fill(),this.ctx.strokeStyle=c+ni(u*200),this.ctx.lineWidth=this.cfg.polygon.strokeWidth*h,this.ctx.stroke(),this.ctx.restore()}drawBridge(e,t,i,s,o,c,u){const h=this.ctx.createLinearGradient(e,t,i,s);o.forEach((f,p)=>{h.addColorStop(p/(o.length-1),f+"80")}),this.ctx.strokeStyle=h,this.ctx.lineWidth=this.cfg.bridge.thickness,this.ctx.lineCap="round",this.ctx.beginPath();for(let f=0;f<=u;f++){const p=f/u,g=e+(i-e)*p,m=t+(s-t)*p,y=Math.sin(p*Math.PI*4+this.time*2)*this.cfg.bridge.waveAmplitude,v=-(s-t)/Math.hypot(i-e,s-t),w=(i-e)/Math.hypot(i-e,s-t);f===0?this.ctx.moveTo(g+v*y,m+w*y):this.ctx.lineTo(g+v*y,m+w*y)}this.ctx.stroke()}}const bf={fingerCountSpeed:{oneFinger:.05,normalFingers:1,fiveFingers:1.5,maxSpeed:2},wave:{baseAmplitude:50,maxAmplitude:250,baseFrequency:.01,maxFrequency:.05,segments:200,lineThickness:3},fingerAmplitude:{oneFingerMultiplier:.1,twoFingersMultiplier:.6,threeFingersMultiplier:1.2,fourFingersMultiplier:2.5,fiveFingersMultiplier:4,normalFingersMultiplier:.3},gesture:{leftOpenHandBoost:3,rightOpenHandBoost:1.5,leftFistAmplitude:20,rightFistReduction:.5,pinchBaseFrequency:.005,pinchLeftMultiplier:.1,pinchRightMultiplier:.05,pinchLeftYOffsetMultiplier:-150,pinchRightYOffsetMultiplier:-150},velocity:{intensityMultiplier:2},hold:{durationThreshold:2,amplitudeBoost:2},distance:{scaleMultiplier:2},waveCount:{active:7,idle:3},layers:{primarySpeed:2,secondarySpeed:3,tertiarySpeed:1,secondaryAmplitude:.5,tertiaryAmplitude:.3},handInfluence:{strength:.5,radius:200},focalPoint:{baseSize:20,pulseSpeed:5,pulseAmount:.1,glowLayers:3},visual:{backgroundTint:"20",clapFlashOpacity:"30",fillOpacity:50}};class gy{constructor(e,t){F(this,"cfg",bf);F(this,"canvas");F(this,"ctx");F(this,"time",0);F(this,"bgGradient",null);F(this,"needsGradientUpdate",!0);this.canvas=e,this.ctx=t}setParams(e){this.cfg=Ei(bf,e)}render(e,t){var v,w,_,S;this.time+=.016*gn(),this.time>1e3&&(this.time=this.time%1e3),this.needsGradientUpdate&&(this.bgGradient=this.ctx.createLinearGradient(0,0,0,this.canvas.height),this.bgGradient.addColorStop(0,"#000000"),this.bgGradient.addColorStop(1,t[0]+this.cfg.visual.backgroundTint),this.needsGradientUpdate=!1),this.ctx.fillStyle=this.bgGradient,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=this.cfg.wave.baseAmplitude,s=this.cfg.wave.baseFrequency,o=1,c=1,u=1,h=0;if(e.left){Math.max(0,Math.min(1,e.left.position.x||.5)),Math.max(0,Math.min(1,e.left.position.y||.5));const b=e.left.velocity||0,T=Math.max(0,Math.min(b,1));c*=1+T*this.cfg.velocity.intensityMultiplier;let E=e.left.fingerCount||0;e.left.gesture==="pinch"&&(E=1),E===1?(u=this.cfg.fingerCountSpeed.oneFinger,i*=this.cfg.fingerAmplitude.oneFingerMultiplier):E===2?(u=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.twoFingersMultiplier):E===3?(u=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.threeFingersMultiplier):E===4?(u=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.fourFingersMultiplier):E>=5&&(u=this.cfg.fingerCountSpeed.fiveFingers,i*=this.cfg.fingerAmplitude.fiveFingersMultiplier),(e.left.holdDuration||0)>this.cfg.hold.durationThreshold&&(i*=this.cfg.hold.amplitudeBoost),e.left.gesture==="open"?i*=this.cfg.gesture.leftOpenHandBoost*c:e.left.gesture==="fist"?i=this.cfg.gesture.leftFistAmplitude:e.left.gesture==="pinch"&&(s=this.cfg.gesture.pinchBaseFrequency+(e.left.pinchDistance||0)*this.cfg.gesture.pinchLeftMultiplier,h=(e.left.pinchDistance||0)*this.cfg.gesture.pinchLeftYOffsetMultiplier)}if(e.right){Math.max(0,Math.min(1,e.right.position.x||.5)),Math.max(0,Math.min(1,e.right.position.y||.5));const b=e.right.velocity||0,T=Math.max(0,Math.min(b,1));c*=1+T*this.cfg.velocity.intensityMultiplier;let E=e.right.fingerCount||0;e.right.gesture==="pinch"&&(E=1);let N=1;E===1?(N=this.cfg.fingerCountSpeed.oneFinger,i*=this.cfg.fingerAmplitude.oneFingerMultiplier):E===2?(N=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.twoFingersMultiplier):E===3?(N=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.threeFingersMultiplier):E===4?(N=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.fourFingersMultiplier):E>=5&&(N=this.cfg.fingerCountSpeed.fiveFingers,i*=this.cfg.fingerAmplitude.fiveFingersMultiplier),u*=N,(e.right.holdDuration||0)>this.cfg.hold.durationThreshold&&(i*=this.cfg.hold.amplitudeBoost),e.right.gesture==="open"?i*=this.cfg.gesture.rightOpenHandBoost*c:e.right.gesture==="fist"?i*=this.cfg.gesture.rightFistReduction:e.right.gesture==="pinch"&&(s+=(e.right.pinchDistance||0)*this.cfg.gesture.pinchRightMultiplier,h=(e.right.pinchDistance||0)*this.cfg.gesture.pinchRightYOffsetMultiplier)}c=Math.min(c,3),u=Math.min(u,this.cfg.fingerCountSpeed.maxSpeed),i=Math.min(i,this.cfg.wave.maxAmplitude),s=Math.min(s,this.cfg.wave.maxFrequency),isFinite(i)||(i=this.cfg.wave.baseAmplitude),isFinite(s)||(s=this.cfg.wave.baseFrequency),isFinite(u)||(u=1),e.distanceBetweenHands&&(o=.5+e.distanceBetweenHands*this.cfg.distance.scaleMultiplier);const f=e.left||e.right?this.cfg.waveCount.active:this.cfg.waveCount.idle,p=((v=e.left)==null?void 0:v.fingerCount)||0,g=((w=e.right)==null?void 0:w.fingerCount)||0,m=Math.max(p,g);let y=1;m>=4&&(y=.6);for(let b=0;b<f;b++){const T=this.canvas.height/(f+1)*(b+1)+h,E=b/f*Math.PI*2,N=((_=e.left)==null?void 0:_.position.x)??0,A=((S=e.right)==null?void 0:S.position.x)??1,U=Math.max(0,Math.min(1,N))*this.canvas.width,C=Math.max(0,Math.min(1,A))*this.canvas.width;this.drawWave(T,i*o,s,this.time*u+E,t[b%t.length],U,C,b/f,y)}if(e.left){const b=Math.max(0,Math.min(1,e.left.position.x||.5)),T=Math.max(0,Math.min(1,e.left.position.y||.5));this.drawFocalPoint(b*this.canvas.width,T*this.canvas.height,t[0],o,i)}if(e.right){const b=Math.max(0,Math.min(1,e.right.position.x||.5)),T=Math.max(0,Math.min(1,e.right.position.y||.5));this.drawFocalPoint(b*this.canvas.width,T*this.canvas.height,t[2%t.length],o,i)}}drawWave(e,t,i,s,o,c,u,h,f){this.ctx.beginPath();const p=Math.floor(this.cfg.wave.segments*f);t=Math.min(t,150);for(let v=0;v<=p;v++){const w=v/p*this.canvas.width,_=Math.sin(w*i+s*this.cfg.layers.primarySpeed)*t,S=Math.sin(w*i*2+s*this.cfg.layers.secondarySpeed)*(t*this.cfg.layers.secondaryAmplitude),b=Math.sin(w*i*.5+s*this.cfg.layers.tertiarySpeed)*(t*this.cfg.layers.tertiaryAmplitude);let T=0;const E=Math.abs(w-c),N=Math.abs(w-u),A=-E/this.cfg.handInfluence.radius,U=-N/this.cfg.handInfluence.radius;A>-10&&(T+=t*this.cfg.handInfluence.strength*Math.exp(A)),U>-10&&(T+=t*this.cfg.handInfluence.strength*Math.exp(U)),T=Math.min(T,80);let C=e+_+S+b+T;C=Math.max(-50,Math.min(this.canvas.height+50,C)),isFinite(C)&&(v===0?this.ctx.moveTo(w,C):this.ctx.lineTo(w,C))}const g=Math.max(0,Math.min(1,h)),m=this.ctx.createLinearGradient(0,0,this.canvas.width,0);m.addColorStop(0,o+ni(g*100)),m.addColorStop(.5,o+ni(g*255)),m.addColorStop(1,o+ni(g*100)),this.ctx.strokeStyle=m,this.ctx.lineWidth=this.cfg.wave.lineThickness,this.ctx.stroke(),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.closePath();const y=this.ctx.createLinearGradient(0,e,0,this.canvas.height);y.addColorStop(0,o+ni(g*this.cfg.visual.fillOpacity)),y.addColorStop(1,o+"00"),this.ctx.fillStyle=y,this.ctx.fill()}drawFocalPoint(e,t,i,s,o){const c=this.cfg.focalPoint.baseSize*s+Math.sin(this.time*this.cfg.focalPoint.pulseSpeed)*o*this.cfg.focalPoint.pulseAmount,u=Math.max(.1,c);for(let h=0;h<this.cfg.focalPoint.glowLayers;h++){const f=this.ctx.createRadialGradient(e,t,0,e,t,u*(h+1));f.addColorStop(0,i+"AA"),f.addColorStop(1,i+"00"),this.ctx.fillStyle=f,this.ctx.beginPath(),this.ctx.arc(e,t,u*(h+1),0,Math.PI*2),this.ctx.fill()}}}class xy{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"time",0);F(this,"nodes",[]);F(this,"glitchBlocks",[]);F(this,"pixelSize",20);F(this,"vibrationTimer",0);F(this,"glitchIntensity",0);F(this,"isExploding",!1);this.canvas=e,this.ctx=t;const i=40;for(let s=0;s<i;s++){const o=Math.random()*e.width,c=Math.random()*e.height,u={x:o,y:c,targetX:o,targetY:c,vx:0,vy:0,size:4+Math.random()*8,connections:[],waveform:Array.from({length:50},()=>Math.random()*2-1),attractedToHand:null};this.nodes.push(u)}this.updateConnections()}updateConnections(){this.nodes.forEach(e=>e.connections=[]),this.nodes.forEach((e,t)=>{this.nodes.forEach((i,s)=>{t!==s&&Math.hypot(e.x-i.x,e.y-i.y)<200&&e.connections.length<4&&e.connections.push(s)})})}render(e,t){this.time+=.016*gn(),this.ctx.fillStyle="rgba(0, 0, 0, 0.1)",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&!this.isExploding&&(this.vibrationTimer=1,this.glitchIntensity=1,this.createGlitchExplosion(t),this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.016,i=Math.max(0,this.vibrationTimer)),this.glitchIntensity>0&&(this.glitchIntensity-=.01);let s=1,o=!1,c=0,u=0,h=0,f=0,p=!1,g=!1,m=2,y=2;if(e.left&&e.left.gesture==="open"){o=!0,p=!0;const v=e.left.fingerCount||2;m=v,v===1?s=.01:v===5?s=2:s=1,c=e.left.position.x*this.canvas.width,u=e.left.position.y*this.canvas.height}if(e.left&&e.left.gesture==="pinch"&&(o=!0,p=!0,m=1,s=.01,c=e.left.position.x*this.canvas.width,u=e.left.position.y*this.canvas.height),e.right&&e.right.gesture==="open"){o=!0,g=!0;const v=e.right.fingerCount||2;y=v;let w;v===1?w=.01:v===5?w=2:w=1,s*=w,h=e.right.position.x*this.canvas.width,f=e.right.position.y*this.canvas.height}e.right&&e.right.gesture==="pinch"&&(o=!0,g=!0,y=1,s*=.01,h=e.right.position.x*this.canvas.width,f=e.right.position.y*this.canvas.height),this.nodes.forEach((v,w)=>{if(o){if(p&&g){const b=Math.hypot(v.x-c,v.y-u),T=Math.hypot(v.x-h,v.y-f);b<T?(v.attractedToHand="left",v.targetX=c+Math.cos(w*.5+this.time*s)*100,v.targetY=u+Math.sin(w*.5+this.time*s)*100):(v.attractedToHand="right",v.targetX=h+Math.cos(w*.5+this.time*s)*100,v.targetY=f+Math.sin(w*.5+this.time*s)*100)}else if(p){v.attractedToHand="left";const b=w/this.nodes.length*Math.PI*2+this.time*s,T=50+w%3*60;v.targetX=c+Math.cos(b)*T,v.targetY=u+Math.sin(b)*T}else if(g){v.attractedToHand="right";const b=w/this.nodes.length*Math.PI*2+this.time*s,T=50+w%3*60;v.targetX=h+Math.cos(b)*T,v.targetY=f+Math.sin(b)*T}const _=v.targetX-v.x,S=v.targetY-v.y;v.vx+=_*.05*s,v.vy+=S*.05*s}else{v.targetX+=(Math.random()-.5)*2,v.targetY+=(Math.random()-.5)*2;const _=v.targetX-v.x,S=v.targetY-v.y;v.vx+=_*.01,v.vy+=S*.01}i>0&&(v.vx+=(Math.random()-.5)*i*40,v.vy+=(Math.random()-.5)*i*40),v.vx*=.85,v.vy*=.85,v.x+=v.vx,v.y+=v.vy,v.x<0&&(v.x=this.canvas.width),v.x>this.canvas.width&&(v.x=0),v.y<0&&(v.y=this.canvas.height),v.y>this.canvas.height&&(v.y=0),v.waveform.shift(),v.waveform.push(Math.sin(this.time*s*2+v.x*.01)*(o?2:.5))}),this.time%.5<.016&&this.updateConnections(),this.drawNodeConnections(t,i,p,g,c,u,h,f),this.drawNodes(t,i),this.drawWaveforms(t,s),this.drawHandIndicators(e,t,m,y),this.drawGlitchBlocks(t),this.glitchIntensity>.3&&this.drawScreenGlitch(),o&&Math.random()<.03*s&&this.spawnGlitchBlock(t)}drawNodeConnections(e,t,i,s,o,c,u,h){this.nodes.forEach((f,p)=>{if(f.attractedToHand==="left"&&i){this.ctx.beginPath(),this.ctx.moveTo(f.x,f.y),this.ctx.lineTo(o,c);const g=this.ctx.createLinearGradient(f.x,f.y,o,c);g.addColorStop(0,e[0]+"80"),g.addColorStop(1,e[1]+"FF"),this.ctx.strokeStyle=g,this.ctx.lineWidth=2+t*3,this.ctx.stroke()}if(f.attractedToHand==="right"&&s){this.ctx.beginPath(),this.ctx.moveTo(f.x,f.y),this.ctx.lineTo(u,h);const g=this.ctx.createLinearGradient(f.x,f.y,u,h);g.addColorStop(0,e[2]+"80"),g.addColorStop(1,e[3]+"FF"),this.ctx.strokeStyle=g,this.ctx.lineWidth=2+t*3,this.ctx.stroke()}f.connections.forEach(g=>{const m=this.nodes[g];if(!m)return;this.ctx.beginPath(),this.ctx.moveTo(f.x,f.y),this.ctx.lineTo(m.x,m.y);const y=Math.floor(p/this.nodes.length*e.length);this.ctx.strokeStyle=e[y]+"40",this.ctx.lineWidth=1+t*2,this.ctx.stroke()})})}drawNodes(e,t){this.nodes.forEach((i,s)=>{const o=Math.floor(s/this.nodes.length*e.length),c=i.size*(1+t*.5),u=this.ctx.createRadialGradient(i.x,i.y,0,i.x,i.y,c);u.addColorStop(0,e[o]+"FF"),u.addColorStop(.5,e[(o+1)%e.length]+"AA"),u.addColorStop(1,e[o]+"00"),this.ctx.fillStyle=u,this.ctx.beginPath(),this.ctx.arc(i.x,i.y,c,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="#FFFFFF80",this.ctx.beginPath(),this.ctx.arc(i.x,i.y,c*.3,0,Math.PI*2),this.ctx.fill()})}drawWaveforms(e,t){this.nodes.forEach((i,s)=>{const o=Math.floor(s/this.nodes.length*e.length);this.ctx.beginPath(),this.ctx.strokeStyle=e[o]+"60",this.ctx.lineWidth=2;for(let c=0;c<i.waveform.length-1;c++){const u=i.x+c-i.waveform.length/2,h=i.y+i.waveform[c]*20;c===0?this.ctx.moveTo(u,h):this.ctx.lineTo(u,h)}this.ctx.stroke()})}drawHandIndicators(e,t,i,s){if(e.left&&e.left.gesture==="open"){const o=e.left.position.x*this.canvas.width,c=e.left.position.y*this.canvas.height,u=30+Math.sin(this.time*3)*10;this.ctx.strokeStyle=t[0]+"AA",this.ctx.lineWidth=3,this.ctx.beginPath(),this.ctx.arc(o,c,u,0,Math.PI*2),this.ctx.stroke(),this.ctx.fillStyle=t[0],this.ctx.font="20px monospace",this.ctx.fillText(`${i}`,o-10,c+5)}if(e.right&&e.right.gesture==="open"){const o=e.right.position.x*this.canvas.width,c=e.right.position.y*this.canvas.height,u=30+Math.sin(this.time*3)*10;this.ctx.strokeStyle=t[2]+"AA",this.ctx.lineWidth=3,this.ctx.beginPath(),this.ctx.arc(o,c,u,0,Math.PI*2),this.ctx.stroke(),this.ctx.fillStyle=t[2],this.ctx.font="20px monospace",this.ctx.fillText(`${s}`,o-10,c+5)}}drawGlitchBlocks(e){this.glitchBlocks=this.glitchBlocks.filter(t=>(t.life-=.016,t.life>0?(this.ctx.fillStyle=t.color+ni(t.life*255),this.ctx.fillRect(t.x,t.y,t.width,t.height),!0):!1))}spawnGlitchBlock(e){this.glitchBlocks.push({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height,width:20+Math.random()*100,height:10+Math.random()*50,color:e[Math.floor(Math.random()*e.length)],life:.5+Math.random()*.5})}createGlitchExplosion(e){for(let t=0;t<50;t++)this.spawnGlitchBlock(e);this.ctx.fillStyle="#FFFFFF60",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.nodes.forEach(t=>{t.vx=(Math.random()-.5)*50,t.vy=(Math.random()-.5)*50})}drawScreenGlitch(){const e=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height),t=Math.floor(Math.random()*20)-10;this.ctx.putImageData(e,t,0);for(let i=0;i<5;i++){const s=Math.random()*this.canvas.height,o=5+Math.random()*20,c=this.ctx.getImageData(0,s,this.canvas.width,o),u=(Math.random()-.5)*100;this.ctx.putImageData(c,u,s)}}}class vy{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"fragments",[]);F(this,"hearts",[]);F(this,"glitchIntensity",0);F(this,"lastHandsTouching",!1);F(this,"handsTouchingTime",0);F(this,"gracePeriod",0);this.canvas=e,this.ctx=t}render(e,t){this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);const i=this.checkHandsTouching(e);i?(this.handsTouchingTime+=1,this.gracePeriod=30,this.spawnHearts(e)):this.gracePeriod>0?(this.gracePeriod-=1,this.handsTouchingTime+=1):this.handsTouchingTime=0,this.lastHandsTouching=i,this.updateHearts(),this.renderHearts(),this.glitchIntensity*=.95,e.left&&e.left.landmarks&&this.renderHandFromLandmarks(e.left.landmarks,"left"),e.right&&e.right.landmarks&&this.renderHandFromLandmarks(e.right.landmarks,"right"),this.applyNoiseOverlay(),(this.glitchIntensity>.1||Math.random()<.05)&&this.applyGlitchEffect()}renderHandFromLandmarks(e,t){const s=this.canvas.width/2,o=this.canvas.height/2,c=e.map(p=>({x:s+(p.x*this.canvas.width-s)*1.8,y:o+(p.y*this.canvas.height-o)*1.8,z:p.z})),u=c[0],h=180*1.8,f={x:u.x,y:u.y+h,z:u.z};this.fillHandWithDots(c,u,f),this.drawHandSkeleton(c),this.drawTechnicalMarkers(u.x,u.y)}fillHandWithDots(e,t,i){const c=e.map(m=>m.x),u=e.map(m=>m.y),h=Math.min(...c,i.x)-50,f=Math.max(...c,i.x)+50,p=Math.min(...u)-50,g=Math.max(...u,i.y)+50;for(let m=p;m<g;m+=7)for(let y=h;y<f;y+=7){const v=this.getDistanceToHandSkeleton(y,m,e,t,i);if(v.inside){const S=1-v.distance/45,b=Math.pow(S,1.5),T=v.zDepth,E=b*(.7+T*.3);if(E<.15)continue;const N=Math.floor(E*255),A=Math.max(.3,Math.min(1,E*1.2)),U=(Math.random()-.5)*8*this.glitchIntensity,C=(Math.random()-.5)*8*this.glitchIntensity,L=.8+Math.random()*.2;this.ctx.fillStyle=`rgba(${N}, ${N}, ${N}, ${A*L})`,this.ctx.beginPath(),this.ctx.arc(y+U,m+C,1.5,0,Math.PI*2),this.ctx.fill(),E>.8&&Math.random()<.15&&(this.ctx.fillStyle=`rgba(255, 255, 255, ${A*1.3})`,this.ctx.beginPath(),this.ctx.arc(y+U,m+C,1.5*1.2,0,Math.PI*2),this.ctx.fill())}}}getDistanceToHandSkeleton(e,t,i,s,o){const c=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[0,9],[9,10],[10,11],[11,12],[0,13],[13,14],[14,15],[15,16],[0,17],[17,18],[18,19],[19,20],[5,9],[9,13],[13,17]];let u=1/0,h=0;for(const[m,y]of c){const v=i[m],w=i[y],_=this.distanceToSegment(e,t,v.x,v.y,w.x,w.y);u=Math.min(u,_),h=(v.z+w.z)/2}const f=this.distanceToSegment(e,t,s.x,s.y,o.x,o.y);return u=Math.min(u,f),h=(s.z+o.z)/2,{inside:u<45,distance:u,zDepth:h}}distanceToSegment(e,t,i,s,o,c){const u=o-i,h=c-s,f=u*u+h*h;if(f===0)return Math.sqrt((e-i)*(e-i)+(t-s)*(t-s));let p=((e-i)*u+(t-s)*h)/f;p=Math.max(0,Math.min(1,p));const g=i+p*u,m=s+p*h;return Math.sqrt((e-g)*(e-g)+(t-m)*(t-m))}drawHandSkeleton(e){this.ctx.strokeStyle="rgba(255, 255, 255, 0.3)",this.ctx.lineWidth=1,this.ctx.setLineDash([4,4]);const t=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[0,9],[9,10],[10,11],[11,12],[0,13],[13,14],[14,15],[15,16],[0,17],[17,18],[18,19],[19,20],[5,9],[9,13],[13,17],[17,5]];this.ctx.beginPath();for(const[i,s]of t){const o=e[i],c=e[s],u=(Math.random()-.5)*5*this.glitchIntensity,h=(Math.random()-.5)*5*this.glitchIntensity,f=(Math.random()-.5)*5*this.glitchIntensity,p=(Math.random()-.5)*5*this.glitchIntensity;this.ctx.moveTo(o.x+u,o.y+h),this.ctx.lineTo(c.x+f,c.y+p)}this.ctx.stroke(),this.ctx.setLineDash([]),this.ctx.fillStyle="rgba(255, 255, 255, 0.7)",e.forEach(i=>{this.ctx.beginPath(),this.ctx.arc(i.x,i.y,2,0,Math.PI*2),this.ctx.fill()})}drawTechnicalMarkers(e,t){this.ctx.strokeStyle="rgba(255, 255, 255, 0.5)",this.ctx.lineWidth=1;const i=15,s=80;[[e-s,t-s],[e+s,t-s],[e-s,t+s],[e+s,t+s]].forEach(([u,h])=>{this.ctx.beginPath(),this.ctx.moveTo(u,h),this.ctx.lineTo(u+(u<e?i:-i),h),this.ctx.moveTo(u,h),this.ctx.lineTo(u,h+(h<t?i:-i)),this.ctx.stroke()}),this.ctx.strokeStyle="rgba(255, 255, 255, 0.7)",this.ctx.lineWidth=1.5,this.ctx.beginPath(),this.ctx.moveTo(e-12,t),this.ctx.lineTo(e+12,t),this.ctx.moveTo(e,t-12),this.ctx.lineTo(e,t+12),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.arc(e,t,3,0,Math.PI*2),this.ctx.stroke(),this.ctx.fillStyle="rgba(255, 255, 255, 0.8)",this.ctx.font="11px monospace";const c=`[${Math.floor(e)},${Math.floor(t)}]`;this.ctx.fillText(c,e+s+15,t),this.ctx.fillStyle="rgba(255, 255, 255, 0.6)",this.ctx.font="9px monospace",this.ctx.fillText("TRACKING",e+s+15,t+15)}applyNoiseOverlay(){const e=.03+this.glitchIntensity*.04,t=2,i=.15;for(let s=0;s<this.canvas.width;s+=t*2)for(let o=0;o<this.canvas.height;o+=t*2)if(Math.random()<i){const c=Math.floor(Math.random()*255),u=Math.random()*e;this.ctx.fillStyle=`rgba(${c}, ${c}, ${c}, ${u})`,this.ctx.fillRect(s,o,t,t)}}applyGlitchEffect(){const e=Math.max(this.glitchIntensity,Math.random()*.3),t=15+Math.random()*15,i=Math.floor(this.canvas.height/t);for(let s=0;s<i;s++)if(Math.random()<e*.3){const o=s*t,c=(Math.random()-.5)*60*e;try{const u=this.ctx.getImageData(0,o,this.canvas.width,Math.min(t,this.canvas.height-o));this.ctx.putImageData(u,c,o)}catch{}}if(Math.random()<e*.5)for(let s=0;s<8;s++){const o=Math.random()*this.canvas.width,c=Math.random()*this.canvas.height,u=Math.random()*40+10,h=Math.random()*15+5;this.ctx.fillStyle="rgba(255, 255, 255, 0.3)",this.ctx.fillRect(o,c,u,h)}}checkHandsTouching(e){if(!e.left||!e.right||!e.left.landmarks||!e.right.landmarks)return!1;const t=[e.left.landmarks[0],e.left.landmarks[8],e.left.landmarks[12],e.left.landmarks[4]],i=[e.right.landmarks[0],e.right.landmarks[8],e.right.landmarks[12],e.right.landmarks[4]];for(const s of t)for(const o of i){const c=Math.sqrt(Math.pow(s.x-o.x,2)+Math.pow(s.y-o.y,2));if(c<.08)return console.log("✋ Hands touching! Distance:",c.toFixed(3)),!0}return!1}spawnHearts(e){if(!(Math.random()>.8)){console.log("Spawning hearts! Current count:",this.hearts.length);for(let t=0;t<3;t++){let s=!1;for(let o=0;o<20&&!s;o++){const c=Math.random()*this.canvas.width,u=Math.random()*this.canvas.height,h=20+Math.random()*30,f=h*1.5;let p=!1;for(const g of this.hearts){const m=c-g.x,y=u-g.y;if(Math.sqrt(m*m+y*y)<f+g.size*.75){p=!0;break}}p||(this.hearts.push({x:c,y:u,vx:0,vy:0,size:h,life:1,rotation:0,rotationSpeed:0}),s=!0,console.log("Heart placed at:",c,u,"size:",h))}}}}updateHearts(){this.hearts=this.hearts.filter(e=>(e.life-=.008,e.life>0))}renderHearts(){const e=$o();this.hearts.forEach(t=>{this.ctx.save(),this.ctx.translate(t.x,t.y);const s=e*2.5%1;let o=1;s<.15?o=1+Math.sin(s/.15*Math.PI)*.2:s>=.2&&s<.3?o=1+Math.sin((s-.2)/.1*Math.PI)*.15:o=1,this.ctx.scale(o,o);const c=Math.max(2,t.size/8),u=t.life*.9,h=[[0,1,1,0,0,1,1,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,0],[0,0,1,1,1,1,0,0],[0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0]],f=-4*c,p=-4*c;for(let g=0;g<8;g++)for(let m=0;m<8;m++)h[g][m]===1&&(this.ctx.fillStyle=`rgba(255, 255, 255, ${u})`,this.ctx.fillRect(f+m*c,p+g*c,c,c),this.ctx.strokeStyle=`rgba(255, 255, 255, ${u*.3})`,this.ctx.lineWidth=.5,this.ctx.strokeRect(f+m*c,p+g*c,c,c));this.ctx.restore()})}}class _y{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"rectangles",[]);F(this,"baseWidth",1920);F(this,"baseHeight",1080);F(this,"time",0);F(this,"gridStructure",[]);this.canvas=e,this.ctx=t,this.createVariedLayout()}createVariedLayout(){[{x:0,y:0,w:480,h:360},{x:480,y:0,w:320,h:180},{x:800,y:0,w:320,h:180},{x:1120,y:0,w:400,h:180},{x:1520,y:0,w:400,h:180},{x:480,y:180,w:240,h:180},{x:720,y:180,w:240,h:180},{x:960,y:180,w:160,h:180},{x:1120,y:180,w:240,h:180},{x:1360,y:180,w:280,h:180},{x:1640,y:180,w:280,h:180},{x:0,y:360,w:120,h:360},{x:120,y:360,w:120,h:360},{x:240,y:360,w:120,h:360},{x:360,y:360,w:120,h:360},{x:480,y:360,w:320,h:360},{x:800,y:360,w:320,h:360},{x:1120,y:360,w:200,h:180},{x:1320,y:360,w:200,h:180},{x:1520,y:360,w:200,h:180},{x:1720,y:360,w:200,h:180},{x:1120,y:540,w:160,h:180},{x:1280,y:540,w:160,h:180},{x:1440,y:540,w:240,h:180},{x:1680,y:540,w:240,h:180},{x:0,y:720,w:160,h:360},{x:160,y:720,w:160,h:360},{x:320,y:720,w:160,h:360},{x:480,y:720,w:240,h:360},{x:720,y:720,w:240,h:360},{x:960,y:720,w:160,h:360},{x:1120,y:720,w:400,h:360},{x:1520,y:720,w:400,h:360}].forEach((t,i)=>{let s;const o=i%3;o===0?s="vertical":o===1?s="horizontal":s="vertical-reverse",this.rectangles.push({id:i,baseX:t.x,baseY:t.y,baseW:t.w,baseH:t.h,currentX:t.x,currentY:t.y,currentW:t.w,currentH:t.h,gradientDirection:s,rotation:0,borderRadius:0,opacity:1}),this.gridStructure.push({x:t.x,y:t.y,w:t.w,h:t.h,targetW:t.w,targetH:t.h})})}render(e,t,i,s){this.time+=.016*gn();const o=s==="contrast",c=s==="grayscale";let u=t[0]||"#1a00ff",h=t[1]||"#8b5cf6",f=t[2]||"#d9d9d9";if(c&&(u="#333333",h="#888888",f="#ffffff"),o)this.ctx.fillStyle="#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);else{const E=this.ctx.createLinearGradient(0,0,0,this.canvas.height);c?(E.addColorStop(0,"#ffffff"),E.addColorStop(1,"#cccccc")):(E.addColorStop(0,f),E.addColorStop(1,u)),this.ctx.fillStyle=E,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}let p=.1,g="idle",m=0,y=1;const v=i?i.bass:0;i&&i.mid;const w=i?i.high:0,_=i?i.beat:!1;if(e.left||e.right){const E=[];e.left&&E.push(e.left),e.right&&E.push(e.right);let N=0,A=!1;E.forEach(U=>{U.gesture==="pinch"&&(A=!0);const C=U.fingerCount!==void 0?U.fingerCount:5;N=Math.max(N,C)}),A&&(N=0),A?(g="pinch",p=.05,m=20):N<=2?(g="2fingers",p=.2,m=20):N<=4?(g="morph",p=.1,m=100):(g="chaos",p=.4,m=0),this.rectangles.forEach((U,C)=>{this.gridStructure[C].targetW=U.baseW,this.gridStructure[C].targetH=U.baseH}),E.forEach(U=>{var O,D;const C=(((O=U.position)==null?void 0:O.x)||.5)*this.baseWidth,L=(((D=U.position)==null?void 0:D.y)||.5)*this.baseHeight;this.rectangles.forEach((z,Z)=>{const ne=z.baseX+z.baseW/2,V=z.baseY+z.baseH/2,J=C-ne,$=L-V,K=Math.sqrt(J*J+$*$);if(g==="pinch"){const ie=1+Math.sin(K*.05-this.time*5)*.2*(1-Math.min(K/800,1));this.gridStructure[Z].targetW=z.baseW*ie,this.gridStructure[Z].targetH=z.baseH*ie}else if(g==="2fingers"){const ie=1+Math.sin(K*.05-this.time*5)*.2*(1-Math.min(K/800,1));this.gridStructure[Z].targetW=z.baseW*ie,this.gridStructure[Z].targetH=z.baseH*ie}else if(g==="morph"){if(K<500){const se=(1-K/500)*.5;this.gridStructure[Z].targetW=z.baseW*(1+se),this.gridStructure[Z].targetH=z.baseH*(1+se)}}else if(g==="chaos"&&K<600){const se=Math.random()*.5;this.gridStructure[Z].targetW=z.baseW*(.8+se),this.gridStructure[Z].targetH=z.baseH*(.8+se)}})})}else this.rectangles.forEach((E,N)=>{this.gridStructure[N].targetW=E.baseW,this.gridStructure[N].targetH=E.baseH}),i&&_&&(m=10);i&&(this.gridStructure.forEach(E=>{E.targetW*=1+v*.2,E.targetH*=1+v*.2}),g==="chaos"&&(y=.5+w*.5)),this.gridStructure.forEach((E,N)=>{E.w+=(E.targetW-E.w)*p,E.h+=(E.targetH-E.h)*p}),this.normalizeGridPerfectly(),this.rectangles.forEach((E,N)=>{E.currentX=this.gridStructure[N].x,E.currentY=this.gridStructure[N].y,E.currentW=this.gridStructure[N].w,E.currentH=this.gridStructure[N].h,E.borderRadius+=(m-E.borderRadius)*.1,g==="chaos"?E.rotation+=Math.random()*.2-.1:E.rotation+=(0-E.rotation)*.1,E.opacity+=(y-E.opacity)*.1});const S=this.canvas.width/this.baseWidth,b=this.canvas.height/this.baseHeight,T=[u,h,f];this.rectangles.forEach((E,N)=>{this.drawRectangle(E,S,b,T,o,N,i)})}normalizeGridPerfectly(){const e=new Map;this.rectangles.forEach((c,u)=>{const h=Math.round(c.baseY/10)*10;e.has(h)||e.set(h,[]),e.get(h).push(u)});const t=Array.from(e.entries()).sort((c,u)=>c[0]-u[0]).map(c=>c[1]);t.forEach(c=>{c.sort((p,g)=>this.rectangles[p].baseX-this.rectangles[g].baseX);const u=c.reduce((p,g)=>p+this.gridStructure[g].w,0),h=this.baseWidth/u;let f=0;c.forEach(p=>{this.gridStructure[p].w*=h,this.gridStructure[p].x=f,f+=this.gridStructure[p].w})});let i=0;t.forEach(c=>{const u=Math.max(...c.map(h=>this.gridStructure[h].h));c.forEach(h=>{this.gridStructure[h].y=i,this.gridStructure[h].h=u}),i+=u});const s=i,o=this.baseHeight/s;i=0,t.forEach(c=>{const u=this.gridStructure[c[0]].h*o;c.forEach(h=>{this.gridStructure[h].y=i,this.gridStructure[h].h=u}),i+=u})}drawRectangle(e,t,i,s,o,c,u){this.ctx.save();const h=e.currentX*t,f=e.currentY*i,p=e.currentW*t,g=e.currentH*i;if(Math.abs(e.rotation)>.01){const T=h+p/2,E=f+g/2;this.ctx.translate(T,E),this.ctx.rotate(e.rotation),this.ctx.translate(-T,-E)}this.ctx.globalAlpha=e.opacity;let m;const y=s[0],v=s[1],w=s[2],_=o||c%2===0?y:v,S=o?"#000000":w,b=u!=null&&u.beat&&Math.random()>.7?"#FFFFFF":null;e.gradientDirection==="vertical"?(m=this.ctx.createLinearGradient(h,f,h,f+g),m.addColorStop(0,b||S),m.addColorStop(1,_)):e.gradientDirection==="vertical-reverse"?(m=this.ctx.createLinearGradient(h,f,h,f+g),m.addColorStop(0,_),m.addColorStop(1,b||S)):(m=this.ctx.createLinearGradient(h,f,h+p,f),m.addColorStop(0,b||S),m.addColorStop(1,_)),this.ctx.fillStyle=m,e.borderRadius>0?(this.ctx.beginPath(),this.ctx.roundRect(h,f,p,g,e.borderRadius),this.ctx.fill()):this.ctx.fillRect(h,f,p,g),this.ctx.restore()}}class yy{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"glowObjects",[]);F(this,"time",0);F(this,"vibrationTimer",0);F(this,"glitchIntensity",0);F(this,"isExploding",!1);this.canvas=e,this.ctx=t}render(e,t){if(this.canvas.width===0||this.canvas.height===0)return;this.ctx.fillStyle="rgba(0, 0, 0, 0.02)",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&!this.isExploding&&(this.createExplosion(),this.vibrationTimer=1,this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.016,i=Math.max(0,this.vibrationTimer));let s=null,o=null,c=2,u=!1;if(e.left&&e.left.landmarks){let f=this.countFingers(e.left.landmarks,"left");e.left.gesture==="pinch"&&(f=1),f>=1&&(u=!0,s=e.left.position.x*this.canvas.width,o=e.left.position.y*this.canvas.height,c=f)}if(e.right&&e.right.landmarks){let f=this.countFingers(e.right.landmarks,"right");if(e.right.gesture==="pinch"&&(f=1),f>=1){u=!0;const p=e.right.position.x*this.canvas.width,g=e.right.position.y*this.canvas.height;s!==null?(s=(s+p)/2,o=((o||0)+g)/2,c=Math.max(c,f)):(s=p,o=g,c=f)}}if(u&&s!==null&&o!==null){this.time+=1*gn();let f=4,p=100,g=2,m=60;if(c===1?(f=8,p=60,g=1,m=30):c===2?(f=5,p=100,g=2,m=60):c===3||c===4?(f=4,p=130,g=2,m=80):c>=5&&(f=2,p=180,g=3,m=120),this.time>=f){this.time=0;for(let y=0;y<g;y++)this.glowObjects.push({x:s+(Math.random()-.5)*m,y:o+(Math.random()-.5)*m,size:p+Math.random()*(p*.4),vx:(Math.random()-.5)*1.5,vy:(Math.random()-.5)*1.5-.5,life:1,hue:Math.random()*360,decay:.002+c/10*.002})}}const h=gn();this.glowObjects=this.glowObjects.filter(f=>(f.x+=f.vx*h,f.y+=f.vy*h,f.vx*=Math.pow(.99,h),f.vy*=Math.pow(.99,h),f.life-=f.decay*h,i>0&&(f.x+=(Math.random()-.5)*i*10,f.y+=(Math.random()-.5)*i*10),f.life>0)),this.glowObjects.length>120&&(this.glowObjects=this.glowObjects.slice(-120)),this.glowObjects.forEach(f=>{this.renderChromaticShape(f,i,t)}),this.applyNoiseOverlay(),this.glitchIntensity>.1&&this.applyGlitchEffect()}renderChromaticShape(e,t,i){const s=8+t*20;e.life*.4,this.ctx.globalCompositeOperation="screen";const o=this.ctx.createRadialGradient(e.x-s,e.y,0,e.x-s,e.y,e.size*1.2);o.addColorStop(0,i[0]+"FF"),o.addColorStop(.3,i[0]+"99"),o.addColorStop(.6,i[0]+"44"),o.addColorStop(1,"transparent"),this.ctx.fillStyle=o,this.ctx.beginPath(),this.ctx.arc(e.x-s,e.y,e.size*1.2,0,Math.PI*2),this.ctx.fill();const c=this.ctx.createRadialGradient(e.x,e.y,0,e.x,e.y,e.size*1.2);c.addColorStop(0,i[1]+"FF"),c.addColorStop(.3,i[1]+"BB"),c.addColorStop(.6,i[1]+"66"),c.addColorStop(1,"transparent"),this.ctx.fillStyle=c,this.ctx.beginPath(),this.ctx.arc(e.x,e.y,e.size*1.2,0,Math.PI*2),this.ctx.fill();const u=this.ctx.createRadialGradient(e.x+s,e.y,0,e.x+s,e.y,e.size*1.2);u.addColorStop(0,i[2]+"FF"),u.addColorStop(.3,i[2]+"99"),u.addColorStop(.6,i[2]+"44"),u.addColorStop(1,"transparent"),this.ctx.fillStyle=u,this.ctx.beginPath(),this.ctx.arc(e.x+s,e.y,e.size*1.2,0,Math.PI*2),this.ctx.fill(),this.ctx.globalCompositeOperation="source-over"}countFingers(e,t){if(!e||e.length<21)return 0;const i=e[9],s=e[4],o=e[3],c=Math.sqrt(Math.pow(s.x-i.x,2)+Math.pow(s.y-i.y,2)+Math.pow(s.z-i.z,2)),u=Math.sqrt(Math.pow(o.x-i.x,2)+Math.pow(o.y-i.y,2)+Math.pow(o.z-i.z,2));let h=c>u?1:0;const f=[8,12,16,20],p=[6,10,14,18];for(let g=0;g<4;g++){const m=Math.sqrt(Math.pow(e[f[g]].x-i.x,2)+Math.pow(e[f[g]].y-i.y,2)+Math.pow(e[f[g]].z-i.z,2)),y=Math.sqrt(Math.pow(e[p[g]].x-i.x,2)+Math.pow(e[p[g]].y-i.y,2)+Math.pow(e[p[g]].z-i.z,2));m>y*1.1&&h++}return h}createExplosion(){const e=this.canvas.width/2,t=this.canvas.height/2;for(let i=0;i<40;i++){const s=Math.PI*2*i/40,o=10+Math.random()*20;this.glowObjects.push({x:e,y:t,size:80+Math.random()*100,vx:Math.cos(s)*o,vy:Math.sin(s)*o,life:1,hue:Math.random()*360,decay:.003})}}applyNoiseOverlay(){this.ctx.save(),this.ctx.globalAlpha=.05,this.ctx.fillStyle="white";for(let e=0;e<1e3;e++){const t=Math.random()*this.canvas.width,i=Math.random()*this.canvas.height,s=Math.random()*2;this.ctx.fillRect(t,i,s,s)}this.ctx.restore()}applyGlitchEffect(){this.ctx.save(),this.ctx.globalAlpha=this.glitchIntensity*.5,this.ctx.fillStyle="white";for(let e=0;e<5;e++){const t=Math.random()*this.canvas.width,i=Math.random()*this.canvas.height,s=Math.random()*10;this.ctx.fillRect(t,i,s,this.canvas.height)}for(let e=0;e<5;e++){const t=Math.random()*this.canvas.width,i=Math.random()*this.canvas.height,s=Math.random()*10;this.ctx.fillRect(t,i,this.canvas.width,s)}this.ctx.restore()}}class Sy{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"dots",[]);F(this,"gridSpacing",8);F(this,"vibrationTimer",0);F(this,"isExploding",!1);this.canvas=e,this.ctx=t,this.initializeDots()}initializeDots(){this.dots=[];const e=Math.ceil(this.canvas.width/this.gridSpacing),t=Math.ceil(this.canvas.height/this.gridSpacing);for(let i=0;i<t;i++)for(let s=0;s<e;s++)this.dots.push({x:s*this.gridSpacing,y:i*this.gridSpacing,baseSize:1,currentSize:1,targetSize:1})}render(e,t){if(this.canvas.width===0||this.canvas.height===0)return;this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&!this.isExploding&&(this.createExplosion(),this.vibrationTimer=1,this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.016,i=Math.max(0,this.vibrationTimer));let s=null,o=null,c=2,u=!1;if(e.left&&e.left.landmarks){let p=this.countFingers(e.left.landmarks,"left");e.left.gesture==="pinch"&&(p=1),p>=1&&(u=!0,s=e.left.position.x*this.canvas.width,o=e.left.position.y*this.canvas.height,c=p)}if(e.right&&e.right.landmarks){let p=this.countFingers(e.right.landmarks,"right");if(e.right.gesture==="pinch"&&(p=1),p>=1){u=!0;const g=e.right.position.x*this.canvas.width,m=e.right.position.y*this.canvas.height;s!==null?(s=(s+g)/2,o=((o||0)+m)/2,c=Math.max(c,p)):(s=g,o=m,c=p)}}let h=200,f=4;c===1?(h=100,f=2):c>=5&&(h=350,f=6),this.dots.forEach(p=>{if(p.targetSize=p.baseSize,u&&s!==null&&o!==null){const g=p.x-s,m=p.y-o,y=Math.sqrt(g*g+m*m);if(y<h){const v=1-y/h;p.targetSize=p.baseSize+v*f}}p.currentSize+=(p.targetSize-p.currentSize)*Math.min(1,.2*gn()),i>0&&(p.currentSize+=Math.random()*i*3)}),this.ctx.fillStyle="#FFFFFF",this.dots.forEach(p=>{p.currentSize>.5&&(this.ctx.beginPath(),this.ctx.arc(p.x,p.y,p.currentSize,0,Math.PI*2),this.ctx.fill())})}countFingers(e,t){if(!e||e.length<21)return 0;const i=e[9],s=e[4],o=e[3],c=Math.sqrt(Math.pow(s.x-i.x,2)+Math.pow(s.y-i.y,2)+Math.pow(s.z-i.z,2)),u=Math.sqrt(Math.pow(o.x-i.x,2)+Math.pow(o.y-i.y,2)+Math.pow(o.z-i.z,2));let h=c>u?1:0;const f=[8,12,16,20],p=[6,10,14,18];for(let g=0;g<4;g++){const m=Math.sqrt(Math.pow(e[f[g]].x-i.x,2)+Math.pow(e[f[g]].y-i.y,2)+Math.pow(e[f[g]].z-i.z,2)),y=Math.sqrt(Math.pow(e[p[g]].x-i.x,2)+Math.pow(e[p[g]].y-i.y,2)+Math.pow(e[p[g]].z-i.z,2));m>y*1.1&&h++}return h}createExplosion(){if(this.isExploding)return;this.isExploding=!0;const e=this.canvas.width/2,t=this.canvas.height/2;this.dots.forEach(i=>{const s=i.x-e,o=i.y-t,u=Math.sqrt(s*s+o*o)/10;setTimeout(()=>{i.targetSize=8},u)}),setTimeout(()=>{this.isExploding=!1},1e3)}}class My{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"blocks",[]);F(this,"baseBlockSize",40);F(this,"vibrationTimer",0);F(this,"currentBlockSize",40);F(this,"isExploding",!1);this.canvas=e,this.ctx=t,this.initializeGrid()}initializeGrid(){this.blocks=[];const e=Math.ceil(this.canvas.width/this.baseBlockSize),t=Math.ceil(this.canvas.height/this.baseBlockSize);for(let i=0;i<t;i++)for(let s=0;s<e;s++){const o=Math.floor(Math.random()*3);this.blocks.push({x:s*this.baseBlockSize,y:i*this.baseBlockSize,targetX:s*this.baseBlockSize,targetY:i*this.baseBlockSize,size:this.baseBlockSize,colorIndex:o,targetColorIndex:o,hasGrid:Math.random()>.7,gridSize:Math.floor(Math.random()*3)+2,glitchTimer:0,colorChangeTimer:Math.random()*5})}}render(e,t){if(this.canvas.width===0||this.canvas.height===0)return;const i=t[1]&&(t[1].toLowerCase()==="#ffffff"||t[1].toLowerCase()==="#fff");i?this.ctx.fillStyle="#000000":this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let s=0;e.clapping&&!this.isExploding&&(this.createExplosion(),this.vibrationTimer=1,this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.016,s=Math.max(0,this.vibrationTimer));let o=0,c=!1;if(e.left){let m=e.left.fingerCount||0;e.left.gesture==="pinch"&&(m=1),c=!0,o=m}if(e.right){let m=e.right.fingerCount||0;e.right.gesture==="pinch"&&(m=1),c=!0,o=Math.max(o,m)}let u=this.currentBlockSize,h=1;c&&(o===1?(u=100,h=.4):o===2?(u=60,h=.5):o===3?(u=45,h=1):o===4?(u=35,h=1.5):o>=5&&(u=25,h=3)),Math.abs(this.currentBlockSize-u)>1&&(this.currentBlockSize=u,this.baseBlockSize=u,this.initializeGrid()),this.blocks.forEach(m=>{m.size=this.currentBlockSize});const f=s>0?10:1;this.blocks.forEach(m=>{if(m.colorChangeTimer>0)m.colorChangeTimer-=.016*h*f;else{const y=Math.floor(Math.random()*3);y!==m.colorIndex&&(m.targetColorIndex=y,m.glitchTimer=.3),m.colorChangeTimer=2+Math.random()*3}m.colorIndex!==m.targetColorIndex&&(m.colorIndex=m.targetColorIndex),m.glitchTimer>0&&(m.glitchTimer-=.016)}),this.blocks.forEach(m=>{const y=m.x,v=m.y,w=s>0?.3+(1-s)*.7:1,_=m.size*w,S=(m.size-_)/2,b=(m.size-_)/2;let T;if(i?T=m.colorIndex%2===0?t[0]:"#000000":T=t[m.colorIndex]||"#FFFFFF",this.ctx.fillStyle=T,this.ctx.fillRect(y+S,v+b,_,_),m.hasGrid&&_>15){this.ctx.strokeStyle=t[3]||"#000000",this.ctx.lineWidth=1;const E=_/m.gridSize;for(let N=0;N<=m.gridSize;N++)this.ctx.beginPath(),this.ctx.moveTo(y+S+N*E,v+b),this.ctx.lineTo(y+S+N*E,v+b+_),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(y+S,v+b+N*E),this.ctx.lineTo(y+S+_,v+b+N*E),this.ctx.stroke()}if(m.glitchTimer>0||s>.5){let E;i?E=m.colorIndex%2===0?"#000000":t[0]:E=t[(m.colorIndex+1)%3]||"#FFFFFF",this.ctx.strokeStyle=E,this.ctx.lineWidth=s>0?4:3,this.ctx.strokeRect(y+S,v+b,_,_)}}),this.ctx.strokeStyle="rgba(255, 255, 255, 0.1)",this.ctx.lineWidth=1;const p=Math.ceil(this.canvas.width/this.baseBlockSize),g=Math.ceil(this.canvas.height/this.baseBlockSize);for(let m=0;m<=p;m++)this.ctx.beginPath(),this.ctx.moveTo(m*this.baseBlockSize,0),this.ctx.lineTo(m*this.baseBlockSize,this.canvas.height),this.ctx.stroke();for(let m=0;m<=g;m++)this.ctx.beginPath(),this.ctx.moveTo(0,m*this.baseBlockSize),this.ctx.lineTo(this.canvas.width,m*this.baseBlockSize),this.ctx.stroke()}createExplosion(){this.isExploding||(this.isExploding=!0,this.blocks.forEach(e=>{e.targetColorIndex=Math.floor(Math.random()*3),e.colorIndex=e.targetColorIndex,e.glitchTimer=1}),setTimeout(()=>this.isExploding=!1,1e3))}}class wy{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"lines",[]);F(this,"gridSpacing",40);F(this,"lineLength",30);F(this,"isClapping",!1);F(this,"clappingIntensity",0);this.canvas=e,this.ctx=t,this.initializeGrid()}initializeGrid(){this.lines=[];const e=Math.ceil(this.canvas.width/this.gridSpacing)+1,t=Math.ceil(this.canvas.height/this.gridSpacing)+1;for(let i=0;i<t;i++)for(let s=0;s<e;s++)this.lines.push({x:s*this.gridSpacing,y:i*this.gridSpacing,length:this.lineLength,currentAngle:0,targetAngle:0,spinVelocity:0})}render(e,t){t[1]&&(t[1].toLowerCase()==="#ffffff"||t[1].toLowerCase()==="#fff")?this.ctx.fillStyle="#000000":this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),(this.lines.length===0||this.lines[0].x>this.canvas.width||this.lines[0].y>this.canvas.height)&&this.initializeGrid();let s=.1,o=0;const c=[];e.left&&c.push(e.left),e.right&&c.push(e.right),c.forEach(u=>{let h=u.fingerCount||2;u.gesture==="pinch"&&(h=1),o=Math.max(o,h)}),o===1?s=.02:o===2?s=.1:o===3?s=.15:o===4?s=.2:o>=5&&(s=.3),e.clapping?this.isClapping||(this.isClapping=!0,this.clappingIntensity=1):this.isClapping=!1,this.clappingIntensity>0&&(this.clappingIntensity*=.95,this.clappingIntensity<.01&&(this.clappingIntensity=0)),this.lines.forEach(u=>{if(c.length>0){let h=0,f=0,p=0;c.forEach(g=>{var T,E;const m=(((T=g.position)==null?void 0:T.x)||.5)*this.canvas.width,y=(((E=g.position)==null?void 0:E.y)||.5)*this.canvas.height,v=m-u.x,w=y-u.y,S=1/(1+Math.sqrt(v*v+w*w)*.001),b=Math.atan2(w,v);f+=Math.cos(b)*S,p+=Math.sin(b)*S,h+=S}),h>0&&(u.targetAngle=Math.atan2(p,f))}else u.targetAngle=0;if(this.clappingIntensity>0)u.spinVelocity+=this.clappingIntensity*.5,u.currentAngle+=u.spinVelocity,u.spinVelocity*=.9;else{let h=u.targetAngle-u.currentAngle;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;u.currentAngle+=h*s,u.spinVelocity=0}}),this.ctx.strokeStyle=t[0]||"#00ff00",this.ctx.lineWidth=2,this.ctx.lineCap="round",this.lines.forEach(u=>{const h=u.length/2,f=u.x-Math.cos(u.currentAngle)*h,p=u.y-Math.sin(u.currentAngle)*h,g=u.x+Math.cos(u.currentAngle)*h,m=u.y+Math.sin(u.currentAngle)*h;this.ctx.beginPath(),this.ctx.moveTo(f,p),this.ctx.lineTo(g,m),this.ctx.stroke()})}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rd="184",by=0,k0=1,Ey=2,Tc=1,Ty=2,zo=3,cs=0,ii=1,Hi=2,tr=0,Da=1,Oa=2,O0=3,z0=4,Cy=5,Fs=100,Ay=101,Ry=102,Py=103,Ly=104,Iy=200,Ny=201,Fy=202,Uy=203,Ef=204,Tf=205,Dy=206,ky=207,Oy=208,zy=209,By=210,Hy=211,Gy=212,Vy=213,Wy=214,Cf=0,Af=1,Rf=2,za=3,Pf=4,Lf=5,If=6,Nf=7,Pd=0,Xy=1,jy=2,nr=0,Mx=1,wx=2,bx=3,Ex=4,Tx=5,Cx=6,Ax=7,Rx=300,Os=301,Ba=302,Nh=303,Fh=304,jc=306,Ff=1e3,Tr=1001,Uf=1002,Fn=1003,qy=1004,Ql=1005,pn=1006,Uh=1007,Ds=1008,pi=1009,Px=1010,Lx=1011,Xo=1012,Ld=1013,rr=1014,Vi=1015,gi=1016,Id=1017,Nd=1018,jo=1020,Ix=35902,Nx=35899,Fx=1021,Ux=1022,mi=1023,Rr=1026,ks=1027,Fd=1028,Ud=1029,zs=1030,Dd=1031,kd=1033,Cc=33776,Ac=33777,Rc=33778,Pc=33779,Df=35840,kf=35841,Of=35842,zf=35843,Bf=36196,Hf=37492,Gf=37496,Vf=37488,Wf=37489,Nc=37490,Xf=37491,jf=37808,qf=37809,Yf=37810,$f=37811,Kf=37812,Zf=37813,Qf=37814,Jf=37815,ed=37816,td=37817,nd=37818,id=37819,rd=37820,sd=37821,ad=36492,od=36494,ld=36495,cd=36283,ud=36284,Fc=36285,hd=36286,Yy=3200,Uc=0,$y=1,as="",di="srgb",Dc="srgb-linear",kc="linear",Wt="srgb",pa=7680,B0=519,Ky=512,Zy=513,Qy=514,Od=515,Jy=516,eS=517,zd=518,tS=519,H0=35044,G0="300 es",Ji=2e3,qo=2001;function nS(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Oc(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function iS(){const a=Oc("canvas");return a.style.display="block",a}const V0={};function W0(...a){const e="THREE."+a.shift();console.log(e,...a)}function Dx(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function pt(...a){a=Dx(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function kt(...a){a=Dx(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function fd(...a){const e=a.join(" ");e in V0||(V0[e]=!0,pt(...a))}function rS(a,e,t){return new Promise(function(i,s){function o(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:s();break;case a.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}const sS={[Cf]:Af,[Rf]:If,[Pf]:Nf,[za]:Lf,[Af]:Cf,[If]:Rf,[Nf]:Pf,[Lf]:za};class Hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,c=s.length;o<c;o++)s[o].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let X0=1234567;const Ho=Math.PI/180,Yo=180/Math.PI;function Wa(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zn[a&255]+zn[a>>8&255]+zn[a>>16&255]+zn[a>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[t&63|128]+zn[t>>8&255]+"-"+zn[t>>16&255]+zn[t>>24&255]+zn[i&255]+zn[i>>8&255]+zn[i>>16&255]+zn[i>>24&255]).toLowerCase()}function It(a,e,t){return Math.max(e,Math.min(t,a))}function Bd(a,e){return(a%e+e)%e}function aS(a,e,t,i,s){return i+(a-e)*(s-i)/(t-e)}function oS(a,e,t){return a!==e?(t-a)/(e-a):0}function Go(a,e,t){return(1-t)*a+t*e}function lS(a,e,t,i){return Go(a,e,1-Math.exp(-t*i))}function cS(a,e=1){return e-Math.abs(Bd(a,e*2)-e)}function uS(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function hS(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function fS(a,e){return a+Math.floor(Math.random()*(e-a+1))}function dS(a,e){return a+Math.random()*(e-a)}function pS(a){return a*(.5-Math.random())}function mS(a){a!==void 0&&(X0=a);let e=X0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gS(a){return a*Ho}function xS(a){return a*Yo}function vS(a){return(a&a-1)===0&&a!==0}function _S(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function yS(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function SS(a,e,t,i,s){const o=Math.cos,c=Math.sin,u=o(t/2),h=c(t/2),f=o((e+i)/2),p=c((e+i)/2),g=o((e-i)/2),m=c((e-i)/2),y=o((i-e)/2),v=c((i-e)/2);switch(s){case"XYX":a.set(u*p,h*g,h*m,u*f);break;case"YZY":a.set(h*m,u*p,h*g,u*f);break;case"ZXZ":a.set(h*g,h*m,u*p,u*f);break;case"XZX":a.set(u*p,h*v,h*y,u*f);break;case"YXY":a.set(h*y,u*p,h*v,u*f);break;case"ZYZ":a.set(h*v,h*y,u*p,u*f);break;default:pt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function La(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Xn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const ss={DEG2RAD:Ho,RAD2DEG:Yo,generateUUID:Wa,clamp:It,euclideanModulo:Bd,mapLinear:aS,inverseLerp:oS,lerp:Go,damp:lS,pingpong:cS,smoothstep:uS,smootherstep:hS,randInt:fS,randFloat:dS,randFloatSpread:pS,seededRandom:mS,degToRad:gS,radToDeg:xS,isPowerOfTwo:vS,ceilPowerOfTwo:_S,floorPowerOfTwo:yS,setQuaternionFromProperEuler:SS,normalize:Xn,denormalize:La},Zd=class Zd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(It(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*i-c*s+e.x,this.y=o*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Zd.prototype.isVector2=!0;let ft=Zd;class Xa{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,o,c,u){let h=i[s+0],f=i[s+1],p=i[s+2],g=i[s+3],m=o[c+0],y=o[c+1],v=o[c+2],w=o[c+3];if(g!==w||h!==m||f!==y||p!==v){let _=h*m+f*y+p*v+g*w;_<0&&(m=-m,y=-y,v=-v,w=-w,_=-_);let S=1-u;if(_<.9995){const b=Math.acos(_),T=Math.sin(b);S=Math.sin(S*b)/T,u=Math.sin(u*b)/T,h=h*S+m*u,f=f*S+y*u,p=p*S+v*u,g=g*S+w*u}else{h=h*S+m*u,f=f*S+y*u,p=p*S+v*u,g=g*S+w*u;const b=1/Math.sqrt(h*h+f*f+p*p+g*g);h*=b,f*=b,p*=b,g*=b}}e[t]=h,e[t+1]=f,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,s,o,c){const u=i[s],h=i[s+1],f=i[s+2],p=i[s+3],g=o[c],m=o[c+1],y=o[c+2],v=o[c+3];return e[t]=u*v+p*g+h*y-f*m,e[t+1]=h*v+p*m+f*g-u*y,e[t+2]=f*v+p*y+u*m-h*g,e[t+3]=p*v-u*g-h*m-f*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,o=e._z,c=e._order,u=Math.cos,h=Math.sin,f=u(i/2),p=u(s/2),g=u(o/2),m=h(i/2),y=h(s/2),v=h(o/2);switch(c){case"XYZ":this._x=m*p*g+f*y*v,this._y=f*y*g-m*p*v,this._z=f*p*v+m*y*g,this._w=f*p*g-m*y*v;break;case"YXZ":this._x=m*p*g+f*y*v,this._y=f*y*g-m*p*v,this._z=f*p*v-m*y*g,this._w=f*p*g+m*y*v;break;case"ZXY":this._x=m*p*g-f*y*v,this._y=f*y*g+m*p*v,this._z=f*p*v+m*y*g,this._w=f*p*g-m*y*v;break;case"ZYX":this._x=m*p*g-f*y*v,this._y=f*y*g+m*p*v,this._z=f*p*v-m*y*g,this._w=f*p*g+m*y*v;break;case"YZX":this._x=m*p*g+f*y*v,this._y=f*y*g+m*p*v,this._z=f*p*v-m*y*g,this._w=f*p*g-m*y*v;break;case"XZY":this._x=m*p*g-f*y*v,this._y=f*y*g-m*p*v,this._z=f*p*v+m*y*g,this._w=f*p*g+m*y*v;break;default:pt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],o=t[8],c=t[1],u=t[5],h=t[9],f=t[2],p=t[6],g=t[10],m=i+u+g;if(m>0){const y=.5/Math.sqrt(m+1);this._w=.25/y,this._x=(p-h)*y,this._y=(o-f)*y,this._z=(c-s)*y}else if(i>u&&i>g){const y=2*Math.sqrt(1+i-u-g);this._w=(p-h)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(o+f)/y}else if(u>g){const y=2*Math.sqrt(1+u-i-g);this._w=(o-f)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(h+p)/y}else{const y=2*Math.sqrt(1+g-i-u);this._w=(c-s)/y,this._x=(o+f)/y,this._y=(h+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,o=e._z,c=e._w,u=t._x,h=t._y,f=t._z,p=t._w;return this._x=i*p+c*u+s*f-o*h,this._y=s*p+c*h+o*u-i*f,this._z=o*p+c*f+i*h-s*u,this._w=c*p-i*u-s*h-o*f,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,o=e._z,c=e._w,u=this.dot(e);u<0&&(i=-i,s=-s,o=-o,c=-c,u=-u);let h=1-t;if(u<.9995){const f=Math.acos(u),p=Math.sin(f);h=Math.sin(h*f)/p,t=Math.sin(t*f)/p,this._x=this._x*h+i*t,this._y=this._y*h+s*t,this._z=this._z*h+o*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+i*t,this._y=this._y*h+s*t,this._z=this._z*h+o*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Qd=class Qd{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(j0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(j0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*s,this.y=o[1]*t+o[4]*i+o[7]*s,this.z=o[2]*t+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=e.elements,c=1/(o[3]*t+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*s+o[12])*c,this.y=(o[1]*t+o[5]*i+o[9]*s+o[13])*c,this.z=(o[2]*t+o[6]*i+o[10]*s+o[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,o=e.x,c=e.y,u=e.z,h=e.w,f=2*(c*s-u*i),p=2*(u*t-o*s),g=2*(o*i-c*t);return this.x=t+h*f+c*g-u*p,this.y=i+h*p+u*f-o*g,this.z=s+h*g+o*p-c*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s,this.y=o[1]*t+o[5]*i+o[9]*s,this.z=o[2]*t+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this.z=It(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this.z=It(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(It(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,o=e.z,c=t.x,u=t.y,h=t.z;return this.x=s*h-o*u,this.y=o*c-i*h,this.z=i*u-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dh.copy(this).projectOnVector(e),this.sub(Dh)}reflect(e){return this.sub(Dh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(It(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Qd.prototype.isVector3=!0;let Q=Qd;const Dh=new Q,j0=new Xa,Jd=class Jd{constructor(e,t,i,s,o,c,u,h,f){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,c,u,h,f)}set(e,t,i,s,o,c,u,h,f){const p=this.elements;return p[0]=e,p[1]=s,p[2]=u,p[3]=t,p[4]=o,p[5]=h,p[6]=i,p[7]=c,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,c=i[0],u=i[3],h=i[6],f=i[1],p=i[4],g=i[7],m=i[2],y=i[5],v=i[8],w=s[0],_=s[3],S=s[6],b=s[1],T=s[4],E=s[7],N=s[2],A=s[5],U=s[8];return o[0]=c*w+u*b+h*N,o[3]=c*_+u*T+h*A,o[6]=c*S+u*E+h*U,o[1]=f*w+p*b+g*N,o[4]=f*_+p*T+g*A,o[7]=f*S+p*E+g*U,o[2]=m*w+y*b+v*N,o[5]=m*_+y*T+v*A,o[8]=m*S+y*E+v*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],c=e[4],u=e[5],h=e[6],f=e[7],p=e[8];return t*c*p-t*u*f-i*o*p+i*u*h+s*o*f-s*c*h}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],c=e[4],u=e[5],h=e[6],f=e[7],p=e[8],g=p*c-u*f,m=u*h-p*o,y=f*o-c*h,v=t*g+i*m+s*y;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/v;return e[0]=g*w,e[1]=(s*f-p*i)*w,e[2]=(u*i-s*c)*w,e[3]=m*w,e[4]=(p*t-s*h)*w,e[5]=(s*o-u*t)*w,e[6]=y*w,e[7]=(i*h-f*t)*w,e[8]=(c*t-i*o)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,o,c,u){const h=Math.cos(o),f=Math.sin(o);return this.set(i*h,i*f,-i*(h*c+f*u)+c+e,-s*f,s*h,-s*(-f*c+h*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(kh.makeScale(e,t)),this}rotate(e){return this.premultiply(kh.makeRotation(-e)),this}translate(e,t){return this.premultiply(kh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Jd.prototype.isMatrix3=!0;let wt=Jd;const kh=new wt,q0=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Y0=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function MS(){const a={enabled:!0,workingColorSpace:Dc,spaces:{},convert:function(s,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===Wt&&(s.r=Cr(s.r),s.g=Cr(s.g),s.b=Cr(s.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Wt&&(s.r=ka(s.r),s.g=ka(s.g),s.b=ka(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===as?kc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,c){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return fd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return fd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(s,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return a.define({[Dc]:{primaries:e,whitePoint:i,transfer:kc,toXYZ:q0,fromXYZ:Y0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:e,whitePoint:i,transfer:Wt,toXYZ:q0,fromXYZ:Y0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),a}const Ft=MS();function Cr(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function ka(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let ma;class wS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ma===void 0&&(ma=Oc("canvas")),ma.width=e.width,ma.height=e.height;const s=ma.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ma}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Oc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let c=0;c<o.length;c++)o[c]=Cr(o[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Cr(t[i]/255)*255):t[i]=Cr(t[i]);return{data:t,width:e.width,height:e.height}}else return pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bS=0;class Hd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=Wa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?o.push(Oh(s[c].image)):o.push(Oh(s[c]))}else o=Oh(s);i.url=o}return t||(e.images[this.uuid]=i),i}}function Oh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?wS.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(pt("Texture: Unable to serialize Texture."),{})}let ES=0;const zh=new Q;class Hn extends Hs{constructor(e=Hn.DEFAULT_IMAGE,t=Hn.DEFAULT_MAPPING,i=Tr,s=Tr,o=pn,c=Ds,u=mi,h=pi,f=Hn.DEFAULT_ANISOTROPY,p=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=Wa(),this.name="",this.source=new Hd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=c,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=h,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zh).x}get height(){return this.source.getSize(zh).y}get depth(){return this.source.getSize(zh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){pt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){pt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Rx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ff:e.x=e.x-Math.floor(e.x);break;case Tr:e.x=e.x<0?0:1;break;case Uf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ff:e.y=e.y-Math.floor(e.y);break;case Tr:e.y=e.y<0?0:1;break;case Uf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=Rx;Hn.DEFAULT_ANISOTROPY=1;const ep=class ep{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*o,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*o,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*o,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,o;const h=e.elements,f=h[0],p=h[4],g=h[8],m=h[1],y=h[5],v=h[9],w=h[2],_=h[6],S=h[10];if(Math.abs(p-m)<.01&&Math.abs(g-w)<.01&&Math.abs(v-_)<.01){if(Math.abs(p+m)<.1&&Math.abs(g+w)<.1&&Math.abs(v+_)<.1&&Math.abs(f+y+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(f+1)/2,E=(y+1)/2,N=(S+1)/2,A=(p+m)/4,U=(g+w)/4,C=(v+_)/4;return T>E&&T>N?T<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(T),s=A/i,o=U/i):E>N?E<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(E),i=A/s,o=C/s):N<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(N),i=U/o,s=C/o),this.set(i,s,o,t),this}let b=Math.sqrt((_-v)*(_-v)+(g-w)*(g-w)+(m-p)*(m-p));return Math.abs(b)<.001&&(b=1),this.x=(_-v)/b,this.y=(g-w)/b,this.z=(m-p)/b,this.w=Math.acos((f+y+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this.z=It(this.z,e.z,t.z),this.w=It(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this.z=It(this.z,e,t),this.w=It(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(It(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ep.prototype.isVector4=!0;let sn=ep;class TS extends Hs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new sn(0,0,e,t),this.scissorTest=!1,this.viewport=new sn(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},o=new Hn(s),c=i.count;for(let u=0;u<c;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Hd(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ri extends TS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class kx extends Hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class CS extends Hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xc=class Xc{constructor(e,t,i,s,o,c,u,h,f,p,g,m,y,v,w,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,c,u,h,f,p,g,m,y,v,w,_)}set(e,t,i,s,o,c,u,h,f,p,g,m,y,v,w,_){const S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=s,S[1]=o,S[5]=c,S[9]=u,S[13]=h,S[2]=f,S[6]=p,S[10]=g,S[14]=m,S[3]=y,S[7]=v,S[11]=w,S[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ga.setFromMatrixColumn(e,0).length(),o=1/ga.setFromMatrixColumn(e,1).length(),c=1/ga.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,o=e.z,c=Math.cos(i),u=Math.sin(i),h=Math.cos(s),f=Math.sin(s),p=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const m=c*p,y=c*g,v=u*p,w=u*g;t[0]=h*p,t[4]=-h*g,t[8]=f,t[1]=y+v*f,t[5]=m-w*f,t[9]=-u*h,t[2]=w-m*f,t[6]=v+y*f,t[10]=c*h}else if(e.order==="YXZ"){const m=h*p,y=h*g,v=f*p,w=f*g;t[0]=m+w*u,t[4]=v*u-y,t[8]=c*f,t[1]=c*g,t[5]=c*p,t[9]=-u,t[2]=y*u-v,t[6]=w+m*u,t[10]=c*h}else if(e.order==="ZXY"){const m=h*p,y=h*g,v=f*p,w=f*g;t[0]=m-w*u,t[4]=-c*g,t[8]=v+y*u,t[1]=y+v*u,t[5]=c*p,t[9]=w-m*u,t[2]=-c*f,t[6]=u,t[10]=c*h}else if(e.order==="ZYX"){const m=c*p,y=c*g,v=u*p,w=u*g;t[0]=h*p,t[4]=v*f-y,t[8]=m*f+w,t[1]=h*g,t[5]=w*f+m,t[9]=y*f-v,t[2]=-f,t[6]=u*h,t[10]=c*h}else if(e.order==="YZX"){const m=c*h,y=c*f,v=u*h,w=u*f;t[0]=h*p,t[4]=w-m*g,t[8]=v*g+y,t[1]=g,t[5]=c*p,t[9]=-u*p,t[2]=-f*p,t[6]=y*g+v,t[10]=m-w*g}else if(e.order==="XZY"){const m=c*h,y=c*f,v=u*h,w=u*f;t[0]=h*p,t[4]=-g,t[8]=f*p,t[1]=m*g+w,t[5]=c*p,t[9]=y*g-v,t[2]=v*g-y,t[6]=u*p,t[10]=w*g+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(AS,e,RS)}lookAt(e,t,i){const s=this.elements;return ui.subVectors(e,t),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),Jr.crossVectors(i,ui),Jr.lengthSq()===0&&(Math.abs(i.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),Jr.crossVectors(i,ui)),Jr.normalize(),Jl.crossVectors(ui,Jr),s[0]=Jr.x,s[4]=Jl.x,s[8]=ui.x,s[1]=Jr.y,s[5]=Jl.y,s[9]=ui.y,s[2]=Jr.z,s[6]=Jl.z,s[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,c=i[0],u=i[4],h=i[8],f=i[12],p=i[1],g=i[5],m=i[9],y=i[13],v=i[2],w=i[6],_=i[10],S=i[14],b=i[3],T=i[7],E=i[11],N=i[15],A=s[0],U=s[4],C=s[8],L=s[12],O=s[1],D=s[5],z=s[9],Z=s[13],ne=s[2],V=s[6],J=s[10],$=s[14],K=s[3],se=s[7],ie=s[11],B=s[15];return o[0]=c*A+u*O+h*ne+f*K,o[4]=c*U+u*D+h*V+f*se,o[8]=c*C+u*z+h*J+f*ie,o[12]=c*L+u*Z+h*$+f*B,o[1]=p*A+g*O+m*ne+y*K,o[5]=p*U+g*D+m*V+y*se,o[9]=p*C+g*z+m*J+y*ie,o[13]=p*L+g*Z+m*$+y*B,o[2]=v*A+w*O+_*ne+S*K,o[6]=v*U+w*D+_*V+S*se,o[10]=v*C+w*z+_*J+S*ie,o[14]=v*L+w*Z+_*$+S*B,o[3]=b*A+T*O+E*ne+N*K,o[7]=b*U+T*D+E*V+N*se,o[11]=b*C+T*z+E*J+N*ie,o[15]=b*L+T*Z+E*$+N*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],o=e[12],c=e[1],u=e[5],h=e[9],f=e[13],p=e[2],g=e[6],m=e[10],y=e[14],v=e[3],w=e[7],_=e[11],S=e[15],b=h*y-f*m,T=u*y-f*g,E=u*m-h*g,N=c*y-f*p,A=c*m-h*p,U=c*g-u*p;return t*(w*b-_*T+S*E)-i*(v*b-_*N+S*A)+s*(v*T-w*N+S*U)-o*(v*E-w*A+_*U)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],c=e[4],u=e[5],h=e[6],f=e[7],p=e[8],g=e[9],m=e[10],y=e[11],v=e[12],w=e[13],_=e[14],S=e[15],b=t*u-i*c,T=t*h-s*c,E=t*f-o*c,N=i*h-s*u,A=i*f-o*u,U=s*f-o*h,C=p*w-g*v,L=p*_-m*v,O=p*S-y*v,D=g*_-m*w,z=g*S-y*w,Z=m*S-y*_,ne=b*Z-T*z+E*D+N*O-A*L+U*C;if(ne===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/ne;return e[0]=(u*Z-h*z+f*D)*V,e[1]=(s*z-i*Z-o*D)*V,e[2]=(w*U-_*A+S*N)*V,e[3]=(m*A-g*U-y*N)*V,e[4]=(h*O-c*Z-f*L)*V,e[5]=(t*Z-s*O+o*L)*V,e[6]=(_*E-v*U-S*T)*V,e[7]=(p*U-m*E+y*T)*V,e[8]=(c*z-u*O+f*C)*V,e[9]=(i*O-t*z-o*C)*V,e[10]=(v*A-w*E+S*b)*V,e[11]=(g*E-p*A-y*b)*V,e[12]=(u*L-c*D-h*C)*V,e[13]=(t*D-i*L+s*C)*V,e[14]=(w*T-v*N-_*b)*V,e[15]=(p*N-g*T+m*b)*V,this}scale(e){const t=this.elements,i=e.x,s=e.y,o=e.z;return t[0]*=i,t[4]*=s,t[8]*=o,t[1]*=i,t[5]*=s,t[9]*=o,t[2]*=i,t[6]*=s,t[10]*=o,t[3]*=i,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),o=1-i,c=e.x,u=e.y,h=e.z,f=o*c,p=o*u;return this.set(f*c+i,f*u-s*h,f*h+s*u,0,f*u+s*h,p*u+i,p*h-s*c,0,f*h-s*u,p*h+s*c,o*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,o,c){return this.set(1,i,o,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,o=t._x,c=t._y,u=t._z,h=t._w,f=o+o,p=c+c,g=u+u,m=o*f,y=o*p,v=o*g,w=c*p,_=c*g,S=u*g,b=h*f,T=h*p,E=h*g,N=i.x,A=i.y,U=i.z;return s[0]=(1-(w+S))*N,s[1]=(y+E)*N,s[2]=(v-T)*N,s[3]=0,s[4]=(y-E)*A,s[5]=(1-(m+S))*A,s[6]=(_+b)*A,s[7]=0,s[8]=(v+T)*U,s[9]=(_-b)*U,s[10]=(1-(m+w))*U,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const o=this.determinant();if(o===0)return i.set(1,1,1),t.identity(),this;let c=ga.set(s[0],s[1],s[2]).length();const u=ga.set(s[4],s[5],s[6]).length(),h=ga.set(s[8],s[9],s[10]).length();o<0&&(c=-c),ki.copy(this);const f=1/c,p=1/u,g=1/h;return ki.elements[0]*=f,ki.elements[1]*=f,ki.elements[2]*=f,ki.elements[4]*=p,ki.elements[5]*=p,ki.elements[6]*=p,ki.elements[8]*=g,ki.elements[9]*=g,ki.elements[10]*=g,t.setFromRotationMatrix(ki),i.x=c,i.y=u,i.z=h,this}makePerspective(e,t,i,s,o,c,u=Ji,h=!1){const f=this.elements,p=2*o/(t-e),g=2*o/(i-s),m=(t+e)/(t-e),y=(i+s)/(i-s);let v,w;if(h)v=o/(c-o),w=c*o/(c-o);else if(u===Ji)v=-(c+o)/(c-o),w=-2*c*o/(c-o);else if(u===qo)v=-c/(c-o),w=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=p,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=g,f[9]=y,f[13]=0,f[2]=0,f[6]=0,f[10]=v,f[14]=w,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,s,o,c,u=Ji,h=!1){const f=this.elements,p=2/(t-e),g=2/(i-s),m=-(t+e)/(t-e),y=-(i+s)/(i-s);let v,w;if(h)v=1/(c-o),w=c/(c-o);else if(u===Ji)v=-2/(c-o),w=-(c+o)/(c-o);else if(u===qo)v=-1/(c-o),w=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=p,f[4]=0,f[8]=0,f[12]=m,f[1]=0,f[5]=g,f[9]=0,f[13]=y,f[2]=0,f[6]=0,f[10]=v,f[14]=w,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Xc.prototype.isMatrix4=!0;let Yt=Xc;const ga=new Q,ki=new Yt,AS=new Q(0,0,0),RS=new Q(1,1,1),Jr=new Q,Jl=new Q,ui=new Q,$0=new Yt,K0=new Xa;class Pr{constructor(e=0,t=0,i=0,s=Pr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,o=s[0],c=s[4],u=s[8],h=s[1],f=s[5],p=s[9],g=s[2],m=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(It(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-It(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(It(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-It(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(m,y),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(It(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-It(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,y),this._y=0);break;default:pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $0.makeRotationFromQuaternion(e),this.setFromRotationMatrix($0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return K0.setFromEuler(this),this.setFromQuaternion(K0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pr.DEFAULT_ORDER="XYZ";class Ox{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let PS=0;const Z0=new Q,xa=new Xa,_r=new Yt,ec=new Q,Ro=new Q,LS=new Q,IS=new Xa,Q0=new Q(1,0,0),J0=new Q(0,1,0),eg=new Q(0,0,1),tg={type:"added"},NS={type:"removed"},va={type:"childadded",child:null},Bh={type:"childremoved",child:null};class mn extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=Wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new Q,t=new Pr,i=new Xa,s=new Q(1,1,1);function o(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Yt},normalMatrix:{value:new wt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ox,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xa.setFromAxisAngle(e,t),this.quaternion.multiply(xa),this}rotateOnWorldAxis(e,t){return xa.setFromAxisAngle(e,t),this.quaternion.premultiply(xa),this}rotateX(e){return this.rotateOnAxis(Q0,e)}rotateY(e){return this.rotateOnAxis(J0,e)}rotateZ(e){return this.rotateOnAxis(eg,e)}translateOnAxis(e,t){return Z0.copy(e).applyQuaternion(this.quaternion),this.position.add(Z0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Q0,e)}translateY(e){return this.translateOnAxis(J0,e)}translateZ(e){return this.translateOnAxis(eg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_r.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ec.copy(e):ec.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ro.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_r.lookAt(Ro,ec,this.up):_r.lookAt(ec,Ro,this.up),this.quaternion.setFromRotationMatrix(_r),s&&(_r.extractRotation(s.matrixWorld),xa.setFromRotationMatrix(_r),this.quaternion.premultiply(xa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(kt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tg),va.child=e,this.dispatchEvent(va),va.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(NS),Bh.child=e,this.dispatchEvent(Bh),Bh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_r.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_r.multiply(e.parent.matrixWorld)),e.applyMatrix4(_r),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tg),va.child=e,this.dispatchEvent(va),va.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let o=0,c=s.length;o<c;o++)s[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,e,LS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ro,IS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*i-o[8]*s,o[13]+=i-o[1]*t-o[5]*i-o[9]*s,o[14]+=s-o[2]*t-o[6]*i-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let o=0,c=s.length;o<c;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(u=>({...u})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let f=0,p=h.length;f<p;f++){const g=h[f];o(e.shapes,g)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,f=this.material.length;h<f;h++)u.push(o(e.materials,this.material[h]));s.material=u}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];s.animations.push(o(e.animations,h))}}if(t){const u=c(e.geometries),h=c(e.materials),f=c(e.textures),p=c(e.images),g=c(e.shapes),m=c(e.skeletons),y=c(e.animations),v=c(e.nodes);u.length>0&&(i.geometries=u),h.length>0&&(i.materials=h),f.length>0&&(i.textures=f),p.length>0&&(i.images=p),g.length>0&&(i.shapes=g),m.length>0&&(i.skeletons=m),y.length>0&&(i.animations=y),v.length>0&&(i.nodes=v)}return i.object=s,i;function c(u){const h=[];for(const f in u){const p=u[f];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}mn.DEFAULT_UP=new Q(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ia extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FS={type:"move"};class Hh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ia,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ia,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ia,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,o=null,c=null;const u=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){c=!0;for(const w of e.hand.values()){const _=t.getJointPose(w,i),S=this._getHandJoint(f,w);_!==null&&(S.matrix.fromArray(_.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=_.radius),S.visible=_!==null}const p=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],m=p.position.distanceTo(g.position),y=.02,v=.005;f.inputState.pinching&&m>y+v?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&m<=y-v&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));u!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(FS)))}return u!==null&&(u.visible=s!==null),h!==null&&(h.visible=o!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ia;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const zx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},tc={h:0,s:0,l:0};function Gh(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ft.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ft.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ft.workingColorSpace){if(e=Bd(e,1),t=It(t,0,1),i=It(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,c=2*i-o;this.r=Gh(c,o,e+1/3),this.g=Gh(c,o,e),this.b=Gh(c,o,e-1/3)}return Ft.colorSpaceToWorking(this,s),this}setStyle(e,t=di){function i(o){o!==void 0&&parseFloat(o)<1&&pt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:pt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);pt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=di){const i=zx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):pt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cr(e.r),this.g=Cr(e.g),this.b=Cr(e.b),this}copyLinearToSRGB(e){return this.r=ka(e.r),this.g=ka(e.g),this.b=ka(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return Ft.workingToColorSpace(Bn.copy(this),e),Math.round(It(Bn.r*255,0,255))*65536+Math.round(It(Bn.g*255,0,255))*256+Math.round(It(Bn.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ft.workingColorSpace){Ft.workingToColorSpace(Bn.copy(this),t);const i=Bn.r,s=Bn.g,o=Bn.b,c=Math.max(i,s,o),u=Math.min(i,s,o);let h,f;const p=(u+c)/2;if(u===c)h=0,f=0;else{const g=c-u;switch(f=p<=.5?g/(c+u):g/(2-c-u),c){case i:h=(s-o)/g+(s<o?6:0);break;case s:h=(o-i)/g+2;break;case o:h=(i-s)/g+4;break}h/=6}return e.h=h,e.s=f,e.l=p,e}getRGB(e,t=Ft.workingColorSpace){return Ft.workingToColorSpace(Bn.copy(this),t),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=di){Ft.workingToColorSpace(Bn.copy(this),e);const t=Bn.r,i=Bn.g,s=Bn.b;return e!==di?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(es),this.setHSL(es.h+e,es.s+t,es.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(es),e.getHSL(tc);const i=Go(es.h,tc.h,t),s=Go(es.s,tc.s,t),o=Go(es.l,tc.l,t);return this.setHSL(i,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*s,this.g=o[1]*t+o[4]*i+o[7]*s,this.b=o[2]*t+o[5]*i+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new Je;Je.NAMES=zx;class Ko{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Je(e),this.density=t}clone(){return new Ko(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class us extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pr,this.environmentIntensity=1,this.environmentRotation=new Pr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Oi=new Q,yr=new Q,Vh=new Q,Sr=new Q,_a=new Q,ya=new Q,ng=new Q,Wh=new Q,Xh=new Q,jh=new Q,qh=new sn,Yh=new sn,$h=new sn;class Gi{constructor(e=new Q,t=new Q,i=new Q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Oi.subVectors(e,t),s.cross(Oi);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,i,s,o){Oi.subVectors(s,t),yr.subVectors(i,t),Vh.subVectors(e,t);const c=Oi.dot(Oi),u=Oi.dot(yr),h=Oi.dot(Vh),f=yr.dot(yr),p=yr.dot(Vh),g=c*f-u*u;if(g===0)return o.set(0,0,0),null;const m=1/g,y=(f*h-u*p)*m,v=(c*p-u*h)*m;return o.set(1-y-v,v,y)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Sr)===null?!1:Sr.x>=0&&Sr.y>=0&&Sr.x+Sr.y<=1}static getInterpolation(e,t,i,s,o,c,u,h){return this.getBarycoord(e,t,i,s,Sr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,Sr.x),h.addScaledVector(c,Sr.y),h.addScaledVector(u,Sr.z),h)}static getInterpolatedAttribute(e,t,i,s,o,c){return qh.setScalar(0),Yh.setScalar(0),$h.setScalar(0),qh.fromBufferAttribute(e,t),Yh.fromBufferAttribute(e,i),$h.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(qh,o.x),c.addScaledVector(Yh,o.y),c.addScaledVector($h,o.z),c}static isFrontFacing(e,t,i,s){return Oi.subVectors(i,t),yr.subVectors(e,t),Oi.cross(yr).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),yr.subVectors(this.a,this.b),Oi.cross(yr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,o){return Gi.getInterpolation(e,this.a,this.b,this.c,t,i,s,o)}containsPoint(e){return Gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,o=this.c;let c,u;_a.subVectors(s,i),ya.subVectors(o,i),Wh.subVectors(e,i);const h=_a.dot(Wh),f=ya.dot(Wh);if(h<=0&&f<=0)return t.copy(i);Xh.subVectors(e,s);const p=_a.dot(Xh),g=ya.dot(Xh);if(p>=0&&g<=p)return t.copy(s);const m=h*g-p*f;if(m<=0&&h>=0&&p<=0)return c=h/(h-p),t.copy(i).addScaledVector(_a,c);jh.subVectors(e,o);const y=_a.dot(jh),v=ya.dot(jh);if(v>=0&&y<=v)return t.copy(o);const w=y*f-h*v;if(w<=0&&f>=0&&v<=0)return u=f/(f-v),t.copy(i).addScaledVector(ya,u);const _=p*v-y*g;if(_<=0&&g-p>=0&&y-v>=0)return ng.subVectors(o,s),u=(g-p)/(g-p+(y-v)),t.copy(s).addScaledVector(ng,u);const S=1/(_+w+m);return c=w*S,u=m*S,t.copy(i).addScaledVector(_a,c).addScaledVector(ya,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Gs{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=o.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,zi):zi.fromBufferAttribute(o,c),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nc.copy(i.boundingBox)),nc.applyMatrix4(e.matrixWorld),this.union(nc)}const s=e.children;for(let o=0,c=s.length;o<c;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Po),ic.subVectors(this.max,Po),Sa.subVectors(e.a,Po),Ma.subVectors(e.b,Po),wa.subVectors(e.c,Po),ts.subVectors(Ma,Sa),ns.subVectors(wa,Ma),As.subVectors(Sa,wa);let t=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-As.z,As.y,ts.z,0,-ts.x,ns.z,0,-ns.x,As.z,0,-As.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-As.y,As.x,0];return!Kh(t,Sa,Ma,wa,ic)||(t=[1,0,0,0,1,0,0,0,1],!Kh(t,Sa,Ma,wa,ic))?!1:(rc.crossVectors(ts,ns),t=[rc.x,rc.y,rc.z],Kh(t,Sa,Ma,wa,ic))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Mr=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],zi=new Q,nc=new Gs,Sa=new Q,Ma=new Q,wa=new Q,ts=new Q,ns=new Q,As=new Q,Po=new Q,ic=new Q,rc=new Q,Rs=new Q;function Kh(a,e,t,i,s){for(let o=0,c=a.length-3;o<=c;o+=3){Rs.fromArray(a,o);const u=s.x*Math.abs(Rs.x)+s.y*Math.abs(Rs.y)+s.z*Math.abs(Rs.z),h=e.dot(Rs),f=t.dot(Rs),p=i.dot(Rs);if(Math.max(-Math.max(h,f,p),Math.min(h,f,p))>u)return!1}return!0}const dn=new Q,sc=new ft;let US=0;class yn extends Hs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:US++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=H0,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)sc.fromBufferAttribute(this,t),sc.applyMatrix3(e),this.setXY(t,sc.x,sc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=La(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=La(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=La(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=La(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=La(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array),s=Xn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e*=this.itemSize,this.normalized&&(t=Xn(t,this.array),i=Xn(i,this.array),s=Xn(s,this.array),o=Xn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==H0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Bx extends yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Hx extends yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Qt extends yn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const DS=new Gs,Lo=new Q,Zh=new Q;class Vs{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):DS.setFromPoints(e).getCenter(i);let s=0;for(let o=0,c=e.length;o<c;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lo.subVectors(e,this.center);const t=Lo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Lo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lo.copy(e.center).add(Zh)),this.expandByPoint(Lo.copy(e.center).sub(Zh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let kS=0;const wi=new Yt,Qh=new mn,ba=new Q,hi=new Gs,Io=new Gs,An=new Q;class cn extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Wa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nS(e)?Hx:Bx)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new wt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,t,i){return wi.makeTranslation(e,t,i),this.applyMatrix4(wi),this}scale(e,t,i){return wi.makeScale(e,t,i),this.applyMatrix4(wi),this}lookAt(e){return Qh.lookAt(e),Qh.updateMatrix(),this.applyMatrix4(Qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ba).negate(),this.translate(ba.x,ba.y,ba.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,o=e.length;s<o;s++){const c=e[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Qt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];hi.setFromBufferAttribute(o),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const i=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const u=t[o];Io.setFromBufferAttribute(u),this.morphTargetsRelative?(An.addVectors(hi.min,Io.min),hi.expandByPoint(An),An.addVectors(hi.max,Io.max),hi.expandByPoint(An)):(hi.expandByPoint(Io.min),hi.expandByPoint(Io.max))}hi.getCenter(i);let s=0;for(let o=0,c=e.count;o<c;o++)An.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(An));if(t)for(let o=0,c=t.length;o<c;o++){const u=t[o],h=this.morphTargetsRelative;for(let f=0,p=u.count;f<p;f++)An.fromBufferAttribute(u,f),h&&(ba.fromBufferAttribute(e,f),An.add(ba)),s=Math.max(s,i.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],h=[];for(let C=0;C<i.count;C++)u[C]=new Q,h[C]=new Q;const f=new Q,p=new Q,g=new Q,m=new ft,y=new ft,v=new ft,w=new Q,_=new Q;function S(C,L,O){f.fromBufferAttribute(i,C),p.fromBufferAttribute(i,L),g.fromBufferAttribute(i,O),m.fromBufferAttribute(o,C),y.fromBufferAttribute(o,L),v.fromBufferAttribute(o,O),p.sub(f),g.sub(f),y.sub(m),v.sub(m);const D=1/(y.x*v.y-v.x*y.y);isFinite(D)&&(w.copy(p).multiplyScalar(v.y).addScaledVector(g,-y.y).multiplyScalar(D),_.copy(g).multiplyScalar(y.x).addScaledVector(p,-v.x).multiplyScalar(D),u[C].add(w),u[L].add(w),u[O].add(w),h[C].add(_),h[L].add(_),h[O].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let C=0,L=b.length;C<L;++C){const O=b[C],D=O.start,z=O.count;for(let Z=D,ne=D+z;Z<ne;Z+=3)S(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const T=new Q,E=new Q,N=new Q,A=new Q;function U(C){N.fromBufferAttribute(s,C),A.copy(N);const L=u[C];T.copy(L),T.sub(N.multiplyScalar(N.dot(L))).normalize(),E.crossVectors(A,L);const D=E.dot(h[C])<0?-1:1;c.setXYZW(C,T.x,T.y,T.z,D)}for(let C=0,L=b.length;C<L;++C){const O=b[C],D=O.start,z=O.count;for(let Z=D,ne=D+z;Z<ne;Z+=3)U(e.getX(Z+0)),U(e.getX(Z+1)),U(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,y=i.count;m<y;m++)i.setXYZ(m,0,0,0);const s=new Q,o=new Q,c=new Q,u=new Q,h=new Q,f=new Q,p=new Q,g=new Q;if(e)for(let m=0,y=e.count;m<y;m+=3){const v=e.getX(m+0),w=e.getX(m+1),_=e.getX(m+2);s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,w),c.fromBufferAttribute(t,_),p.subVectors(c,o),g.subVectors(s,o),p.cross(g),u.fromBufferAttribute(i,v),h.fromBufferAttribute(i,w),f.fromBufferAttribute(i,_),u.add(p),h.add(p),f.add(p),i.setXYZ(v,u.x,u.y,u.z),i.setXYZ(w,h.x,h.y,h.z),i.setXYZ(_,f.x,f.y,f.z)}else for(let m=0,y=t.count;m<y;m+=3)s.fromBufferAttribute(t,m+0),o.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),p.subVectors(c,o),g.subVectors(s,o),p.cross(g),i.setXYZ(m+0,p.x,p.y,p.z),i.setXYZ(m+1,p.x,p.y,p.z),i.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)An.fromBufferAttribute(e,t),An.normalize(),e.setXYZ(t,An.x,An.y,An.z)}toNonIndexed(){function e(u,h){const f=u.array,p=u.itemSize,g=u.normalized,m=new f.constructor(h.length*p);let y=0,v=0;for(let w=0,_=h.length;w<_;w++){u.isInterleavedBufferAttribute?y=h[w]*u.data.stride+u.offset:y=h[w]*p;for(let S=0;S<p;S++)m[v++]=f[y++]}return new yn(m,p,g)}if(this.index===null)return pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,i=this.index.array,s=this.attributes;for(const u in s){const h=s[u],f=e(h,i);t.setAttribute(u,f)}const o=this.morphAttributes;for(const u in o){const h=[],f=o[u];for(let p=0,g=f.length;p<g;p++){const m=f[p],y=e(m,i);h.push(y)}t.morphAttributes[u]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,h=c.length;u<h;u++){const f=c[u];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const f=i[h];e.data.attributes[h]=f.toJSON(e.data)}const s={};let o=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],p=[];for(let g=0,m=f.length;g<m;g++){const y=f[g];p.push(y.toJSON(e.data))}p.length>0&&(s[h]=p,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const f in s){const p=s[f];this.setAttribute(f,p.clone(t))}const o=e.morphAttributes;for(const f in o){const p=[],g=o[f];for(let m=0,y=g.length;m<y;m++)p.push(g[m].clone(t));this.morphAttributes[f]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let f=0,p=c.length;f<p;f++){const g=c[f];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let OS=0;class Wi extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=Wa(),this.name="",this.type="Material",this.blending=Da,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ef,this.blendDst=Tf,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=B0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pa,this.stencilZFail=pa,this.stencilZPass=pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){pt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){pt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Da&&(i.blending=this.blending),this.side!==cs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ef&&(i.blendSrc=this.blendSrc),this.blendDst!==Tf&&(i.blendDst=this.blendDst),this.blendEquation!==Fs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==za&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==B0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==pa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==pa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}if(t){const o=s(e.textures),c=s(e.images);o.length>0&&(i.textures=o),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const wr=new Q,Jh=new Q,ac=new Q,is=new Q,ef=new Q,oc=new Q,tf=new Q;class Gd{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=wr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(wr.copy(this.origin).addScaledVector(this.direction,t),wr.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Jh.copy(e).add(t).multiplyScalar(.5),ac.copy(t).sub(e).normalize(),is.copy(this.origin).sub(Jh);const o=e.distanceTo(t)*.5,c=-this.direction.dot(ac),u=is.dot(this.direction),h=-is.dot(ac),f=is.lengthSq(),p=Math.abs(1-c*c);let g,m,y,v;if(p>0)if(g=c*h-u,m=c*u-h,v=o*p,g>=0)if(m>=-v)if(m<=v){const w=1/p;g*=w,m*=w,y=g*(g+c*m+2*u)+m*(c*g+m+2*h)+f}else m=o,g=Math.max(0,-(c*m+u)),y=-g*g+m*(m+2*h)+f;else m=-o,g=Math.max(0,-(c*m+u)),y=-g*g+m*(m+2*h)+f;else m<=-v?(g=Math.max(0,-(-c*o+u)),m=g>0?-o:Math.min(Math.max(-o,-h),o),y=-g*g+m*(m+2*h)+f):m<=v?(g=0,m=Math.min(Math.max(-o,-h),o),y=m*(m+2*h)+f):(g=Math.max(0,-(c*o+u)),m=g>0?o:Math.min(Math.max(-o,-h),o),y=-g*g+m*(m+2*h)+f);else m=c>0?-o:o,g=Math.max(0,-(c*m+u)),y=-g*g+m*(m+2*h)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Jh).addScaledVector(ac,m),y}intersectSphere(e,t){wr.subVectors(e.center,this.origin);const i=wr.dot(this.direction),s=wr.dot(wr)-i*i,o=e.radius*e.radius;if(s>o)return null;const c=Math.sqrt(o-s),u=i-c,h=i+c;return h<0?null:u<0?this.at(h,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,o,c,u,h;const f=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,m=this.origin;return f>=0?(i=(e.min.x-m.x)*f,s=(e.max.x-m.x)*f):(i=(e.max.x-m.x)*f,s=(e.min.x-m.x)*f),p>=0?(o=(e.min.y-m.y)*p,c=(e.max.y-m.y)*p):(o=(e.max.y-m.y)*p,c=(e.min.y-m.y)*p),i>c||o>s||((o>i||isNaN(i))&&(i=o),(c<s||isNaN(s))&&(s=c),g>=0?(u=(e.min.z-m.z)*g,h=(e.max.z-m.z)*g):(u=(e.max.z-m.z)*g,h=(e.min.z-m.z)*g),i>h||u>s)||((u>i||i!==i)&&(i=u),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,wr)!==null}intersectTriangle(e,t,i,s,o){ef.subVectors(t,e),oc.subVectors(i,e),tf.crossVectors(ef,oc);let c=this.direction.dot(tf),u;if(c>0){if(s)return null;u=1}else if(c<0)u=-1,c=-c;else return null;is.subVectors(this.origin,e);const h=u*this.direction.dot(oc.crossVectors(is,oc));if(h<0)return null;const f=u*this.direction.dot(ef.cross(is));if(f<0||h+f>c)return null;const p=-u*is.dot(tf);return p<0?null:this.at(p/c,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qc extends Wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pr,this.combine=Pd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ig=new Yt,Ps=new Gd,lc=new Vs,rg=new Q,cc=new Q,uc=new Q,hc=new Q,nf=new Q,fc=new Q,sg=new Q,dc=new Q;class un extends mn{constructor(e=new cn,t=new qc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(o&&u){fc.set(0,0,0);for(let h=0,f=o.length;h<f;h++){const p=u[h],g=o[h];p!==0&&(nf.fromBufferAttribute(g,e),c?fc.addScaledVector(nf,p):fc.addScaledVector(nf.sub(t),p))}t.add(fc)}return t}raycast(e,t){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lc.copy(i.boundingSphere),lc.applyMatrix4(o),Ps.copy(e.ray).recast(e.near),!(lc.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(lc,rg)===null||Ps.origin.distanceToSquared(rg)>(e.far-e.near)**2))&&(ig.copy(o).invert(),Ps.copy(e.ray).applyMatrix4(ig),!(i.boundingBox!==null&&Ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ps)))}_computeIntersections(e,t,i){let s;const o=this.geometry,c=this.material,u=o.index,h=o.attributes.position,f=o.attributes.uv,p=o.attributes.uv1,g=o.attributes.normal,m=o.groups,y=o.drawRange;if(u!==null)if(Array.isArray(c))for(let v=0,w=m.length;v<w;v++){const _=m[v],S=c[_.materialIndex],b=Math.max(_.start,y.start),T=Math.min(u.count,Math.min(_.start+_.count,y.start+y.count));for(let E=b,N=T;E<N;E+=3){const A=u.getX(E),U=u.getX(E+1),C=u.getX(E+2);s=pc(this,S,e,i,f,p,g,A,U,C),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const v=Math.max(0,y.start),w=Math.min(u.count,y.start+y.count);for(let _=v,S=w;_<S;_+=3){const b=u.getX(_),T=u.getX(_+1),E=u.getX(_+2);s=pc(this,c,e,i,f,p,g,b,T,E),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(c))for(let v=0,w=m.length;v<w;v++){const _=m[v],S=c[_.materialIndex],b=Math.max(_.start,y.start),T=Math.min(h.count,Math.min(_.start+_.count,y.start+y.count));for(let E=b,N=T;E<N;E+=3){const A=E,U=E+1,C=E+2;s=pc(this,S,e,i,f,p,g,A,U,C),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const v=Math.max(0,y.start),w=Math.min(h.count,y.start+y.count);for(let _=v,S=w;_<S;_+=3){const b=_,T=_+1,E=_+2;s=pc(this,c,e,i,f,p,g,b,T,E),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function zS(a,e,t,i,s,o,c,u){let h;if(e.side===ii?h=i.intersectTriangle(c,o,s,!0,u):h=i.intersectTriangle(s,o,c,e.side===cs,u),h===null)return null;dc.copy(u),dc.applyMatrix4(a.matrixWorld);const f=t.ray.origin.distanceTo(dc);return f<t.near||f>t.far?null:{distance:f,point:dc.clone(),object:a}}function pc(a,e,t,i,s,o,c,u,h,f){a.getVertexPosition(u,cc),a.getVertexPosition(h,uc),a.getVertexPosition(f,hc);const p=zS(a,e,t,i,cc,uc,hc,sg);if(p){const g=new Q;Gi.getBarycoord(sg,cc,uc,hc,g),s&&(p.uv=Gi.getInterpolatedAttribute(s,u,h,f,g,new ft)),o&&(p.uv1=Gi.getInterpolatedAttribute(o,u,h,f,g,new ft)),c&&(p.normal=Gi.getInterpolatedAttribute(c,u,h,f,g,new Q),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const m={a:u,b:h,c:f,normal:new Q,materialIndex:0};Gi.getNormal(cc,uc,hc,m.normal),p.face=m,p.barycoord=g}return p}class Vd extends Hn{constructor(e=null,t=1,i=1,s,o,c,u,h,f=Fn,p=Fn,g,m){super(null,c,u,h,f,p,s,o,g,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ag extends yn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ea=new Yt,og=new Yt,mc=[],lg=new Gs,BS=new Yt,No=new un,Fo=new Vs;class HS extends un{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ag(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,BS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ea),lg.copy(e.boundingBox).applyMatrix4(Ea),this.boundingBox.union(lg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ea),Fo.copy(e.boundingSphere).applyMatrix4(Ea),this.boundingSphere.union(Fo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,o=i.length+1,c=e*o+1;for(let u=0;u<i.length;u++)i[u]=s[c+u]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(No.geometry=this.geometry,No.material=this.material,No.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fo.copy(this.boundingSphere),Fo.applyMatrix4(i),e.ray.intersectsSphere(Fo)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Ea),og.multiplyMatrices(i,Ea),No.matrixWorld=og,No.raycast(e,mc);for(let c=0,u=mc.length;c<u;c++){const h=mc[c];h.instanceId=o,h.object=this,t.push(h)}mc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ag(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Vd(new Float32Array(s*this.count),s,this.count,Fd,Vi));const o=this.morphTexture.source.data.data;let c=0;for(let f=0;f<i.length;f++)c+=i[f];const u=this.geometry.morphTargetsRelative?1:1-c,h=s*e;return o[h]=u,o.set(i,h+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const rf=new Q,GS=new Q,VS=new wt;class Ns{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=rf.subVectors(i,t).cross(GS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(rf),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return i===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||VS.getNormalMatrix(e),s=this.coplanarPoint(rf).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ls=new Vs,WS=new ft(.5,.5),gc=new Q;class Wd{constructor(e=new Ns,t=new Ns,i=new Ns,s=new Ns,o=new Ns,c=new Ns){this.planes=[e,t,i,s,o,c]}set(e,t,i,s,o,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(s),u[4].copy(o),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ji,i=!1){const s=this.planes,o=e.elements,c=o[0],u=o[1],h=o[2],f=o[3],p=o[4],g=o[5],m=o[6],y=o[7],v=o[8],w=o[9],_=o[10],S=o[11],b=o[12],T=o[13],E=o[14],N=o[15];if(s[0].setComponents(f-c,y-p,S-v,N-b).normalize(),s[1].setComponents(f+c,y+p,S+v,N+b).normalize(),s[2].setComponents(f+u,y+g,S+w,N+T).normalize(),s[3].setComponents(f-u,y-g,S-w,N-T).normalize(),i)s[4].setComponents(h,m,_,E).normalize(),s[5].setComponents(f-h,y-m,S-_,N-E).normalize();else if(s[4].setComponents(f-h,y-m,S-_,N-E).normalize(),t===Ji)s[5].setComponents(f+h,y+m,S+_,N+E).normalize();else if(t===qo)s[5].setComponents(h,m,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(e){Ls.center.set(0,0,0);const t=WS.distanceTo(e.center);return Ls.radius=.7071067811865476+t,Ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(gc.x=s.normal.x>0?e.max.x:e.min.x,gc.y=s.normal.y>0?e.max.y:e.min.y,gc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(gc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vo extends Wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zc=new Q,Bc=new Q,cg=new Yt,Uo=new Gd,xc=new Vs,sf=new Q,ug=new Q;class Gx extends mn{constructor(e=new cn,t=new Vo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,o=t.count;s<o;s++)zc.fromBufferAttribute(t,s-1),Bc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=zc.distanceTo(Bc);e.setAttribute("lineDistance",new Qt(i,1))}else pt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xc.copy(i.boundingSphere),xc.applyMatrix4(s),xc.radius+=o,e.ray.intersectsSphere(xc)===!1)return;cg.copy(s).invert(),Uo.copy(e.ray).applyMatrix4(cg);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,f=this.isLineSegments?2:1,p=i.index,m=i.attributes.position;if(p!==null){const y=Math.max(0,c.start),v=Math.min(p.count,c.start+c.count);for(let w=y,_=v-1;w<_;w+=f){const S=p.getX(w),b=p.getX(w+1),T=vc(this,e,Uo,h,S,b,w);T&&t.push(T)}if(this.isLineLoop){const w=p.getX(v-1),_=p.getX(y),S=vc(this,e,Uo,h,w,_,v-1);S&&t.push(S)}}else{const y=Math.max(0,c.start),v=Math.min(m.count,c.start+c.count);for(let w=y,_=v-1;w<_;w+=f){const S=vc(this,e,Uo,h,w,w+1,w);S&&t.push(S)}if(this.isLineLoop){const w=vc(this,e,Uo,h,v-1,y,v-1);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function vc(a,e,t,i,s,o,c){const u=a.geometry.attributes.position;if(zc.fromBufferAttribute(u,s),Bc.fromBufferAttribute(u,o),t.distanceSqToSegment(zc,Bc,sf,ug)>i)return;sf.applyMatrix4(a.matrixWorld);const f=e.ray.origin.distanceTo(sf);if(!(f<e.near||f>e.far))return{distance:f,point:ug.clone().applyMatrix4(a.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:a}}const hg=new Q,fg=new Q;class dd extends Gx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,o=t.count;s<o;s+=2)hg.fromBufferAttribute(t,s),fg.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+hg.distanceTo(fg);e.setAttribute("lineDistance",new Qt(i,1))}else pt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class os extends Wi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const dg=new Yt,pd=new Gd,_c=new Vs,yc=new Q;class Ar extends mn{constructor(e=new cn,t=new os){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_c.copy(i.boundingSphere),_c.applyMatrix4(s),_c.radius+=o,e.ray.intersectsSphere(_c)===!1)return;dg.copy(s).invert(),pd.copy(e.ray).applyMatrix4(dg);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,f=i.index,g=i.attributes.position;if(f!==null){const m=Math.max(0,c.start),y=Math.min(f.count,c.start+c.count);for(let v=m,w=y;v<w;v++){const _=f.getX(v);yc.fromBufferAttribute(g,_),pg(yc,_,h,s,e,t,this)}}else{const m=Math.max(0,c.start),y=Math.min(g.count,c.start+c.count);for(let v=m,w=y;v<w;v++)yc.fromBufferAttribute(g,v),pg(yc,v,h,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function pg(a,e,t,i,s,o,c){const u=pd.distanceSqToPoint(a);if(u<t){const h=new Q;pd.closestPointToPoint(a,h),h.applyMatrix4(i);const f=s.ray.origin.distanceTo(h);if(f<s.near||f>s.far)return;o.push({distance:f,distanceToRay:Math.sqrt(u),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class XS extends Hn{constructor(e,t,i,s,o=pn,c=pn,u,h,f){super(e,t,i,s,o,c,u,h,f),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const p=this;function g(){p.needsUpdate=!0,p._requestVideoFrameCallbackId=e.requestVideoFrameCallback(g)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(g))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class Vx extends Hn{constructor(e=[],t=Os,i,s,o,c,u,h,f,p){super(e,t,i,s,o,c,u,h,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ha extends Hn{constructor(e,t,i=rr,s,o,c,u=Fn,h=Fn,f,p=Rr,g=1){if(p!==Rr&&p!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:g};super(m,s,o,c,u,h,p,i,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class jS extends Ha{constructor(e,t=rr,i=Os,s,o,c=Fn,u=Fn,h,f=Rr){const p={width:e,height:e,depth:1},g=[p,p,p,p,p,p];super(e,e,t,i,s,o,c,u,h,f),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Wx extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ja extends cn{constructor(e=1,t=1,i=1,s=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:o,depthSegments:c};const u=this;s=Math.floor(s),o=Math.floor(o),c=Math.floor(c);const h=[],f=[],p=[],g=[];let m=0,y=0;v("z","y","x",-1,-1,i,t,e,c,o,0),v("z","y","x",1,-1,i,t,-e,c,o,1),v("x","z","y",1,1,e,i,t,s,c,2),v("x","z","y",1,-1,e,i,-t,s,c,3),v("x","y","z",1,-1,e,t,i,s,o,4),v("x","y","z",-1,-1,e,t,-i,s,o,5),this.setIndex(h),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(p,3)),this.setAttribute("uv",new Qt(g,2));function v(w,_,S,b,T,E,N,A,U,C,L){const O=E/U,D=N/C,z=E/2,Z=N/2,ne=A/2,V=U+1,J=C+1;let $=0,K=0;const se=new Q;for(let ie=0;ie<J;ie++){const B=ie*D-Z;for(let X=0;X<V;X++){const ye=X*O-z;se[w]=ye*b,se[_]=B*T,se[S]=ne,f.push(se.x,se.y,se.z),se[w]=0,se[_]=0,se[S]=A>0?1:-1,p.push(se.x,se.y,se.z),g.push(X/U),g.push(1-ie/C),$+=1}}for(let ie=0;ie<C;ie++)for(let B=0;B<U;B++){const X=m+B+V*ie,ye=m+B+V*(ie+1),Me=m+(B+1)+V*(ie+1),we=m+(B+1)+V*ie;h.push(X,ye,we),h.push(ye,Me,we),K+=6}u.addGroup(y,K,L),y+=K,m+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Xd extends cn{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const o=[],c=[];u(s),f(i),p(),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(o.slice(),3)),this.setAttribute("uv",new Qt(c,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function u(b){const T=new Q,E=new Q,N=new Q;for(let A=0;A<t.length;A+=3)y(t[A+0],T),y(t[A+1],E),y(t[A+2],N),h(T,E,N,b)}function h(b,T,E,N){const A=N+1,U=[];for(let C=0;C<=A;C++){U[C]=[];const L=b.clone().lerp(E,C/A),O=T.clone().lerp(E,C/A),D=A-C;for(let z=0;z<=D;z++)z===0&&C===A?U[C][z]=L:U[C][z]=L.clone().lerp(O,z/D)}for(let C=0;C<A;C++)for(let L=0;L<2*(A-C)-1;L++){const O=Math.floor(L/2);L%2===0?(m(U[C][O+1]),m(U[C+1][O]),m(U[C][O])):(m(U[C][O+1]),m(U[C+1][O+1]),m(U[C+1][O]))}}function f(b){const T=new Q;for(let E=0;E<o.length;E+=3)T.x=o[E+0],T.y=o[E+1],T.z=o[E+2],T.normalize().multiplyScalar(b),o[E+0]=T.x,o[E+1]=T.y,o[E+2]=T.z}function p(){const b=new Q;for(let T=0;T<o.length;T+=3){b.x=o[T+0],b.y=o[T+1],b.z=o[T+2];const E=_(b)/2/Math.PI+.5,N=S(b)/Math.PI+.5;c.push(E,1-N)}v(),g()}function g(){for(let b=0;b<c.length;b+=6){const T=c[b+0],E=c[b+2],N=c[b+4],A=Math.max(T,E,N),U=Math.min(T,E,N);A>.9&&U<.1&&(T<.2&&(c[b+0]+=1),E<.2&&(c[b+2]+=1),N<.2&&(c[b+4]+=1))}}function m(b){o.push(b.x,b.y,b.z)}function y(b,T){const E=b*3;T.x=e[E+0],T.y=e[E+1],T.z=e[E+2]}function v(){const b=new Q,T=new Q,E=new Q,N=new Q,A=new ft,U=new ft,C=new ft;for(let L=0,O=0;L<o.length;L+=9,O+=6){b.set(o[L+0],o[L+1],o[L+2]),T.set(o[L+3],o[L+4],o[L+5]),E.set(o[L+6],o[L+7],o[L+8]),A.set(c[O+0],c[O+1]),U.set(c[O+2],c[O+3]),C.set(c[O+4],c[O+5]),N.copy(b).add(T).add(E).divideScalar(3);const D=_(N);w(A,O+0,b,D),w(U,O+2,T,D),w(C,O+4,E,D)}}function w(b,T,E,N){N<0&&b.x===1&&(c[T]=b.x-1),E.x===0&&E.z===0&&(c[T]=N/2/Math.PI+.5)}function _(b){return Math.atan2(b.z,-b.x)}function S(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xd(e.vertices,e.indices,e.radius,e.detail)}}class jd extends Xd{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new jd(e.radius,e.detail)}}class Lr extends cn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const o=e/2,c=t/2,u=Math.floor(i),h=Math.floor(s),f=u+1,p=h+1,g=e/u,m=t/h,y=[],v=[],w=[],_=[];for(let S=0;S<p;S++){const b=S*m-c;for(let T=0;T<f;T++){const E=T*g-o;v.push(E,-b,0),w.push(0,0,1),_.push(T/u),_.push(1-S/h)}}for(let S=0;S<h;S++)for(let b=0;b<u;b++){const T=b+f*S,E=b+f*(S+1),N=b+1+f*(S+1),A=b+1+f*S;y.push(T,E,A),y.push(E,N,A)}this.setIndex(y),this.setAttribute("position",new Qt(v,3)),this.setAttribute("normal",new Qt(w,3)),this.setAttribute("uv",new Qt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lr(e.width,e.height,e.widthSegments,e.heightSegments)}}class qd extends cn{constructor(e=1,t=.4,i=64,s=8,o=2,c=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:s,p:o,q:c},i=Math.floor(i),s=Math.floor(s);const u=[],h=[],f=[],p=[],g=new Q,m=new Q,y=new Q,v=new Q,w=new Q,_=new Q,S=new Q;for(let T=0;T<=i;++T){const E=T/i*o*Math.PI*2;b(E,o,c,e,y),b(E+.01,o,c,e,v),_.subVectors(v,y),S.addVectors(v,y),w.crossVectors(_,S),S.crossVectors(w,_),w.normalize(),S.normalize();for(let N=0;N<=s;++N){const A=N/s*Math.PI*2,U=-t*Math.cos(A),C=t*Math.sin(A);g.x=y.x+(U*S.x+C*w.x),g.y=y.y+(U*S.y+C*w.y),g.z=y.z+(U*S.z+C*w.z),h.push(g.x,g.y,g.z),m.subVectors(g,y).normalize(),f.push(m.x,m.y,m.z),p.push(T/i),p.push(N/s)}}for(let T=1;T<=i;T++)for(let E=1;E<=s;E++){const N=(s+1)*(T-1)+(E-1),A=(s+1)*T+(E-1),U=(s+1)*T+E,C=(s+1)*(T-1)+E;u.push(N,A,C),u.push(A,U,C)}this.setIndex(u),this.setAttribute("position",new Qt(h,3)),this.setAttribute("normal",new Qt(f,3)),this.setAttribute("uv",new Qt(p,2));function b(T,E,N,A,U){const C=Math.cos(T),L=Math.sin(T),O=N/E*T,D=Math.cos(O);U.x=A*(2+D)*.5*C,U.y=A*(2+D)*L*.5,U.z=A*Math.sin(O)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qd(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}function Ga(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const s=a[t][i];if(mg(s))s.isRenderTargetTexture?(pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(mg(s[0])){const o=[];for(let c=0,u=s.length;c<u;c++)o[c]=s[c].clone();e[t][i]=o}else e[t][i]=s.slice();else e[t][i]=s}}return e}function jn(a){const e={};for(let t=0;t<a.length;t++){const i=Ga(a[t]);for(const s in i)e[s]=i[s]}return e}function mg(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function qS(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Xx(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ft.workingColorSpace}const Hc={clone:Ga,merge:jn};var YS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$S=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends Wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YS,this.fragmentShader=$S,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ga(e.uniforms),this.uniformsGroups=qS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class KS extends ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jx extends Wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uc,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ZS extends Wi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Je(16777215),this.specular=new Je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Uc,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pr,this.combine=Pd,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class QS extends Wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JS extends Wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gg={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(xg(a)||(this.files[a]=e))},get:function(a){if(this.enabled!==!1&&!xg(a))return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};function xg(a){try{const e=a.slice(a.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class eM{constructor(e,t,i){const s=this;let o=!1,c=0,u=0,h;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(p){u++,o===!1&&s.onStart!==void 0&&s.onStart(p,c,u),o=!0},this.itemEnd=function(p){c++,s.onProgress!==void 0&&s.onProgress(p,c,u),c===u&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,g){return f.push(p,g),this},this.removeHandler=function(p){const g=f.indexOf(p);return g!==-1&&f.splice(g,2),this},this.getHandler=function(p){for(let g=0,m=f.length;g<m;g+=2){const y=f[g],v=f[g+1];if(y.global&&(y.lastIndex=0),y.test(p))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const tM=new eM;class Yd{constructor(e){this.manager=e!==void 0?e:tM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,o){i.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Yd.DEFAULT_MATERIAL_NAME="__DEFAULT";const br={};class nM extends Error{constructor(e,t){super(e),this.response=t}}class iM extends Yd{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=gg.get(`file:${e}`);if(o!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0);return}if(br[e]!==void 0){br[e].push({onLoad:t,onProgress:i,onError:s});return}br[e]=[],br[e].push({onLoad:t,onProgress:i,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),u=this.mimeType,h=this.responseType;fetch(c).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&pt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const p=br[e],g=f.body.getReader(),m=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),y=m?parseInt(m):0,v=y!==0;let w=0;const _=new ReadableStream({start(S){b();function b(){g.read().then(({done:T,value:E})=>{if(T)S.close();else{w+=E.byteLength;const N=new ProgressEvent("progress",{lengthComputable:v,loaded:w,total:y});for(let A=0,U=p.length;A<U;A++){const C=p[A];C.onProgress&&C.onProgress(N)}S.enqueue(E),b()}},T=>{S.error(T)})}}});return new Response(_)}else throw new nM(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(h){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(p=>new DOMParser().parseFromString(p,u));case"json":return f.json();default:if(u==="")return f.text();{const g=/charset="?([^;"\s]*)"?/i.exec(u),m=g&&g[1]?g[1].toLowerCase():void 0,y=new TextDecoder(m);return f.arrayBuffer().then(v=>y.decode(v))}}}).then(f=>{gg.add(`file:${e}`,f);const p=br[e];delete br[e];for(let g=0,m=p.length;g<m;g++){const y=p[g];y.onLoad&&y.onLoad(f)}}).catch(f=>{const p=br[e];if(p===void 0)throw this.manager.itemError(e),f;delete br[e];for(let g=0,m=p.length;g<m;g++){const y=p[g];y.onError&&y.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class $d extends mn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const af=new Yt,vg=new Q,_g=new Q;class qx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=pi,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wd,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;vg.setFromMatrixPosition(e.matrixWorld),t.position.copy(vg),_g.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_g),t.updateMatrixWorld(),af.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(af,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===qo||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(af)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Sc=new Q,Mc=new Xa,Ki=new Q;class Yx extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=Ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Sc,Mc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sc,Mc,Ki.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Sc,Mc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sc,Mc,Ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rs=new Q,yg=new ft,Sg=new ft;class Pn extends Yx{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yo*2*Math.atan(Math.tan(Ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rs.x,rs.y).multiplyScalar(-e/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rs.x,rs.y).multiplyScalar(-e/rs.z)}getViewSize(e,t){return this.getViewBounds(e,yg,Sg),t.subVectors(Sg,yg)}setViewOffset(e,t,i,s,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ho*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,o=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,f=c.fullHeight;o+=c.offsetX*s/h,t-=c.offsetY*i/f,s*=c.width/h,i*=c.height/f}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class rM extends qx{constructor(){super(new Pn(90,1,.5,500)),this.isPointLightShadow=!0}}class Gc extends $d{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new rM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class qa extends Yx{constructor(e=-1,t=1,i=1,s=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,c=i+e,u=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,c=o+f*this.view.width,u-=p*this.view.offsetY,h=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,c,u,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class sM extends qx{constructor(){super(new qa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class of extends $d{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mn.DEFAULT_UP),this.updateMatrix(),this.target=new mn,this.shadow=new sM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class $x extends $d{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ta=-90,Ca=1;class aM extends mn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Pn(Ta,Ca,e,t);s.layers=this.layers,this.add(s);const o=new Pn(Ta,Ca,e,t);o.layers=this.layers,this.add(o);const c=new Pn(Ta,Ca,e,t);c.layers=this.layers,this.add(c);const u=new Pn(Ta,Ca,e,t);u.layers=this.layers,this.add(u);const h=new Pn(Ta,Ca,e,t);h.layers=this.layers,this.add(h);const f=new Pn(Ta,Ca,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,o,c,u,h]=t;for(const f of t)this.remove(f);if(e===Ji)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===qo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,c,u,h,f,p]=this.children,g=e.getRenderTarget(),m=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,1,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(i,3,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(i,4,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(g,m,y),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class oM extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class lM{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=cM.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function cM(){this._document.hidden===!1&&this.reset()}const tp=class tp{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const o=this.elements;return o[0]=e,o[2]=t,o[1]=i,o[3]=s,this}};tp.prototype.isMatrix2=!0;let Mg=tp;function wg(a,e,t,i){const s=uM(i);switch(t){case Fx:return a*e;case Fd:return a*e/s.components*s.byteLength;case Ud:return a*e/s.components*s.byteLength;case zs:return a*e*2/s.components*s.byteLength;case Dd:return a*e*2/s.components*s.byteLength;case Ux:return a*e*3/s.components*s.byteLength;case mi:return a*e*4/s.components*s.byteLength;case kd:return a*e*4/s.components*s.byteLength;case Cc:case Ac:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Rc:case Pc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case kf:case zf:return Math.max(a,16)*Math.max(e,8)/4;case Df:case Of:return Math.max(a,8)*Math.max(e,8)/2;case Bf:case Hf:case Vf:case Wf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Gf:case Nc:case Xf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case jf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case qf:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Yf:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case $f:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Kf:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Zf:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Qf:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Jf:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case ed:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case td:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case nd:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case id:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case rd:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case sd:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case ad:case od:case ld:return Math.ceil(a/4)*Math.ceil(e/4)*16;case cd:case ud:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Fc:case hd:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function uM(a){switch(a){case pi:case Px:return{byteLength:1,components:1};case Xo:case Lx:case gi:return{byteLength:2,components:1};case Id:case Nd:return{byteLength:2,components:4};case rr:case Ld:case Vi:return{byteLength:4,components:1};case Ix:case Nx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rd}}));typeof window<"u"&&(window.__THREE__?pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Kx(){let a=null,e=!1,t=null,i=null;function s(o,c){t(o,c),i=a.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&a!==null&&(i=a.requestAnimationFrame(s),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){a=o}}}function hM(a){const e=new WeakMap;function t(u,h){const f=u.array,p=u.usage,g=f.byteLength,m=a.createBuffer();a.bindBuffer(h,m),a.bufferData(h,f,p),u.onUploadCallback();let y;if(f instanceof Float32Array)y=a.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)y=a.HALF_FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?y=a.HALF_FLOAT:y=a.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=a.SHORT;else if(f instanceof Uint32Array)y=a.UNSIGNED_INT;else if(f instanceof Int32Array)y=a.INT;else if(f instanceof Int8Array)y=a.BYTE;else if(f instanceof Uint8Array)y=a.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:g}}function i(u,h,f){const p=h.array,g=h.updateRanges;if(a.bindBuffer(f,u),g.length===0)a.bufferSubData(f,0,p);else{g.sort((y,v)=>y.start-v.start);let m=0;for(let y=1;y<g.length;y++){const v=g[m],w=g[y];w.start<=v.start+v.count+1?v.count=Math.max(v.count,w.start+w.count-v.start):(++m,g[m]=w)}g.length=m+1;for(let y=0,v=g.length;y<v;y++){const w=g[y];a.bufferSubData(f,w.start*p.BYTES_PER_ELEMENT,p,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=e.get(u);h&&(a.deleteBuffer(h.buffer),e.delete(u))}function c(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const f=e.get(u);if(f===void 0)e.set(u,t(u,h));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,u,h),f.version=u.version}}return{get:s,remove:o,update:c}}var fM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dM=`#ifdef USE_ALPHAHASH
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
#endif`,pM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vM=`#ifdef USE_AOMAP
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
#endif`,_M=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yM=`#ifdef USE_BATCHING
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
#endif`,SM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,MM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,EM=`#ifdef USE_IRIDESCENCE
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
#endif`,TM=`#ifdef USE_BUMPMAP
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
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,IM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,NM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,FM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,UM=`#define PI 3.141592653589793
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
} // validated`,DM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kM=`vec3 transformedNormal = objectNormal;
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
#endif`,OM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,BM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,GM="gl_FragColor = linearToOutputTexel( gl_FragColor );",VM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WM=`#ifdef USE_ENVMAP
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
#endif`,XM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jM=`#ifdef USE_ENVMAP
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
#endif`,qM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YM=`#ifdef USE_ENVMAP
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
#endif`,$M=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JM=`#ifdef USE_GRADIENTMAP
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
}`,ew=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iw=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,rw=`#ifdef USE_ENVMAP
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
#endif`,sw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ow=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cw=`PhysicalMaterial material;
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
#endif`,uw=`uniform sampler2D dfgLUT;
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
}`,hw=`
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
#endif`,fw=`#if defined( RE_IndirectDiffuse )
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
#endif`,dw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pw=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,mw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_w=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Mw=`#if defined( USE_POINTS_UV )
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
#endif`,ww=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ew=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Aw=`#ifdef USE_MORPHTARGETS
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
#endif`,Rw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Iw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uw=`#ifdef USE_NORMALMAP
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
#endif`,Dw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ow=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Gw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ww=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$w=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Kw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zw=`float getShadowMask() {
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
}`,Qw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jw=`#ifdef USE_SKINNING
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
#endif`,eb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tb=`#ifdef USE_SKINNING
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
#endif`,nb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ib=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ab=`#ifdef USE_TRANSMISSION
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
#endif`,ob=`#ifdef USE_TRANSMISSION
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
#endif`,lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,db=`uniform sampler2D t2D;
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
}`,pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vb=`#include <common>
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
}`,_b=`#if DEPTH_PACKING == 3200
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
}`,yb=`#define DISTANCE
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
}`,Sb=`#define DISTANCE
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
}`,Mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bb=`uniform float scale;
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
}`,Eb=`uniform vec3 diffuse;
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
}`,Tb=`#include <common>
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
}`,Cb=`uniform vec3 diffuse;
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
}`,Ab=`#define LAMBERT
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
}`,Rb=`#define LAMBERT
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
}`,Pb=`#define MATCAP
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
}`,Lb=`#define MATCAP
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
}`,Ib=`#define NORMAL
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
}`,Nb=`#define NORMAL
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
}`,Fb=`#define PHONG
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
}`,Ub=`#define PHONG
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
}`,Db=`#define STANDARD
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
}`,kb=`#define STANDARD
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
}`,Ob=`#define TOON
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
}`,zb=`#define TOON
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
}`,Bb=`uniform float size;
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
}`,Hb=`uniform vec3 diffuse;
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
}`,Gb=`#include <common>
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
}`,Vb=`uniform vec3 color;
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
}`,Wb=`uniform float rotation;
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
}`,Xb=`uniform vec3 diffuse;
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
}`,Tt={alphahash_fragment:fM,alphahash_pars_fragment:dM,alphamap_fragment:pM,alphamap_pars_fragment:mM,alphatest_fragment:gM,alphatest_pars_fragment:xM,aomap_fragment:vM,aomap_pars_fragment:_M,batching_pars_vertex:yM,batching_vertex:SM,begin_vertex:MM,beginnormal_vertex:wM,bsdfs:bM,iridescence_fragment:EM,bumpmap_pars_fragment:TM,clipping_planes_fragment:CM,clipping_planes_pars_fragment:AM,clipping_planes_pars_vertex:RM,clipping_planes_vertex:PM,color_fragment:LM,color_pars_fragment:IM,color_pars_vertex:NM,color_vertex:FM,common:UM,cube_uv_reflection_fragment:DM,defaultnormal_vertex:kM,displacementmap_pars_vertex:OM,displacementmap_vertex:zM,emissivemap_fragment:BM,emissivemap_pars_fragment:HM,colorspace_fragment:GM,colorspace_pars_fragment:VM,envmap_fragment:WM,envmap_common_pars_fragment:XM,envmap_pars_fragment:jM,envmap_pars_vertex:qM,envmap_physical_pars_fragment:rw,envmap_vertex:YM,fog_vertex:$M,fog_pars_vertex:KM,fog_fragment:ZM,fog_pars_fragment:QM,gradientmap_pars_fragment:JM,lightmap_pars_fragment:ew,lights_lambert_fragment:tw,lights_lambert_pars_fragment:nw,lights_pars_begin:iw,lights_toon_fragment:sw,lights_toon_pars_fragment:aw,lights_phong_fragment:ow,lights_phong_pars_fragment:lw,lights_physical_fragment:cw,lights_physical_pars_fragment:uw,lights_fragment_begin:hw,lights_fragment_maps:fw,lights_fragment_end:dw,lightprobes_pars_fragment:pw,logdepthbuf_fragment:mw,logdepthbuf_pars_fragment:gw,logdepthbuf_pars_vertex:xw,logdepthbuf_vertex:vw,map_fragment:_w,map_pars_fragment:yw,map_particle_fragment:Sw,map_particle_pars_fragment:Mw,metalnessmap_fragment:ww,metalnessmap_pars_fragment:bw,morphinstance_vertex:Ew,morphcolor_vertex:Tw,morphnormal_vertex:Cw,morphtarget_pars_vertex:Aw,morphtarget_vertex:Rw,normal_fragment_begin:Pw,normal_fragment_maps:Lw,normal_pars_fragment:Iw,normal_pars_vertex:Nw,normal_vertex:Fw,normalmap_pars_fragment:Uw,clearcoat_normal_fragment_begin:Dw,clearcoat_normal_fragment_maps:kw,clearcoat_pars_fragment:Ow,iridescence_pars_fragment:zw,opaque_fragment:Bw,packing:Hw,premultiplied_alpha_fragment:Gw,project_vertex:Vw,dithering_fragment:Ww,dithering_pars_fragment:Xw,roughnessmap_fragment:jw,roughnessmap_pars_fragment:qw,shadowmap_pars_fragment:Yw,shadowmap_pars_vertex:$w,shadowmap_vertex:Kw,shadowmask_pars_fragment:Zw,skinbase_vertex:Qw,skinning_pars_vertex:Jw,skinning_vertex:eb,skinnormal_vertex:tb,specularmap_fragment:nb,specularmap_pars_fragment:ib,tonemapping_fragment:rb,tonemapping_pars_fragment:sb,transmission_fragment:ab,transmission_pars_fragment:ob,uv_pars_fragment:lb,uv_pars_vertex:cb,uv_vertex:ub,worldpos_vertex:hb,background_vert:fb,background_frag:db,backgroundCube_vert:pb,backgroundCube_frag:mb,cube_vert:gb,cube_frag:xb,depth_vert:vb,depth_frag:_b,distance_vert:yb,distance_frag:Sb,equirect_vert:Mb,equirect_frag:wb,linedashed_vert:bb,linedashed_frag:Eb,meshbasic_vert:Tb,meshbasic_frag:Cb,meshlambert_vert:Ab,meshlambert_frag:Rb,meshmatcap_vert:Pb,meshmatcap_frag:Lb,meshnormal_vert:Ib,meshnormal_frag:Nb,meshphong_vert:Fb,meshphong_frag:Ub,meshphysical_vert:Db,meshphysical_frag:kb,meshtoon_vert:Ob,meshtoon_frag:zb,points_vert:Bb,points_frag:Hb,shadow_vert:Gb,shadow_frag:Vb,sprite_vert:Wb,sprite_frag:Xb},Xe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},Qi={basic:{uniforms:jn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:jn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:jn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:jn([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:jn([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:jn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:jn([Xe.points,Xe.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:jn([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:jn([Xe.common,Xe.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:jn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:jn([Xe.sprite,Xe.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distance:{uniforms:jn([Xe.common,Xe.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distance_vert,fragmentShader:Tt.distance_frag},shadow:{uniforms:jn([Xe.lights,Xe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};Qi.physical={uniforms:jn([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const wc={r:0,b:0,g:0},jb=new Yt,Zx=new wt;Zx.set(-1,0,0,0,1,0,0,0,1);function qb(a,e,t,i,s,o){const c=new Je(0);let u=s===!0?0:1,h,f,p=null,g=0,m=null;function y(b){let T=b.isScene===!0?b.background:null;if(T&&T.isTexture){const E=b.backgroundBlurriness>0;T=e.get(T,E)}return T}function v(b){let T=!1;const E=y(b);E===null?_(c,u):E&&E.isColor&&(_(E,1),T=!0);const N=a.xr.getEnvironmentBlendMode();N==="additive"?t.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(a.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function w(b,T){const E=y(T);E&&(E.isCubeTexture||E.mapping===jc)?(f===void 0&&(f=new un(new ja(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:Ga(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(N,A,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=E,f.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(jb.makeRotationFromEuler(T.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply(Zx),f.material.toneMapped=Ft.getTransfer(E.colorSpace)!==Wt,(p!==E||g!==E.version||m!==a.toneMapping)&&(f.material.needsUpdate=!0,p=E,g=E.version,m=a.toneMapping),f.layers.enableAll(),b.unshift(f,f.geometry,f.material,0,0,null)):E&&E.isTexture&&(h===void 0&&(h=new un(new Lr(2,2),new ln({name:"BackgroundMaterial",uniforms:Ga(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=E,h.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,h.material.toneMapped=Ft.getTransfer(E.colorSpace)!==Wt,E.matrixAutoUpdate===!0&&E.updateMatrix(),h.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||g!==E.version||m!==a.toneMapping)&&(h.material.needsUpdate=!0,p=E,g=E.version,m=a.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function _(b,T){b.getRGB(wc,Xx(a)),t.buffers.color.setClear(wc.r,wc.g,wc.b,T,o)}function S(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(b,T=1){c.set(b),u=T,_(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(b){u=b,_(c,u)},render:v,addToRenderList:w,dispose:S}}function Yb(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},s=m(null);let o=s,c=!1;function u(D,z,Z,ne,V){let J=!1;const $=g(D,ne,Z,z);o!==$&&(o=$,f(o.object)),J=y(D,ne,Z,V),J&&v(D,ne,Z,V),V!==null&&e.update(V,a.ELEMENT_ARRAY_BUFFER),(J||c)&&(c=!1,E(D,z,Z,ne),V!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function h(){return a.createVertexArray()}function f(D){return a.bindVertexArray(D)}function p(D){return a.deleteVertexArray(D)}function g(D,z,Z,ne){const V=ne.wireframe===!0;let J=i[z.id];J===void 0&&(J={},i[z.id]=J);const $=D.isInstancedMesh===!0?D.id:0;let K=J[$];K===void 0&&(K={},J[$]=K);let se=K[Z.id];se===void 0&&(se={},K[Z.id]=se);let ie=se[V];return ie===void 0&&(ie=m(h()),se[V]=ie),ie}function m(D){const z=[],Z=[],ne=[];for(let V=0;V<t;V++)z[V]=0,Z[V]=0,ne[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Z,attributeDivisors:ne,object:D,attributes:{},index:null}}function y(D,z,Z,ne){const V=o.attributes,J=z.attributes;let $=0;const K=Z.getAttributes();for(const se in K)if(K[se].location>=0){const B=V[se];let X=J[se];if(X===void 0&&(se==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),se==="instanceColor"&&D.instanceColor&&(X=D.instanceColor)),B===void 0||B.attribute!==X||X&&B.data!==X.data)return!0;$++}return o.attributesNum!==$||o.index!==ne}function v(D,z,Z,ne){const V={},J=z.attributes;let $=0;const K=Z.getAttributes();for(const se in K)if(K[se].location>=0){let B=J[se];B===void 0&&(se==="instanceMatrix"&&D.instanceMatrix&&(B=D.instanceMatrix),se==="instanceColor"&&D.instanceColor&&(B=D.instanceColor));const X={};X.attribute=B,B&&B.data&&(X.data=B.data),V[se]=X,$++}o.attributes=V,o.attributesNum=$,o.index=ne}function w(){const D=o.newAttributes;for(let z=0,Z=D.length;z<Z;z++)D[z]=0}function _(D){S(D,0)}function S(D,z){const Z=o.newAttributes,ne=o.enabledAttributes,V=o.attributeDivisors;Z[D]=1,ne[D]===0&&(a.enableVertexAttribArray(D),ne[D]=1),V[D]!==z&&(a.vertexAttribDivisor(D,z),V[D]=z)}function b(){const D=o.newAttributes,z=o.enabledAttributes;for(let Z=0,ne=z.length;Z<ne;Z++)z[Z]!==D[Z]&&(a.disableVertexAttribArray(Z),z[Z]=0)}function T(D,z,Z,ne,V,J,$){$===!0?a.vertexAttribIPointer(D,z,Z,V,J):a.vertexAttribPointer(D,z,Z,ne,V,J)}function E(D,z,Z,ne){w();const V=ne.attributes,J=Z.getAttributes(),$=z.defaultAttributeValues;for(const K in J){const se=J[K];if(se.location>=0){let ie=V[K];if(ie===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor)),ie!==void 0){const B=ie.normalized,X=ie.itemSize,ye=e.get(ie);if(ye===void 0)continue;const Me=ye.buffer,we=ye.type,te=ye.bytesPerElement,xe=we===a.INT||we===a.UNSIGNED_INT||ie.gpuType===Ld;if(ie.isInterleavedBufferAttribute){const pe=ie.data,me=pe.stride,Te=ie.offset;if(pe.isInstancedInterleavedBuffer){for(let Pe=0;Pe<se.locationSize;Pe++)S(se.location+Pe,pe.meshPerAttribute);D.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Pe=0;Pe<se.locationSize;Pe++)_(se.location+Pe);a.bindBuffer(a.ARRAY_BUFFER,Me);for(let Pe=0;Pe<se.locationSize;Pe++)T(se.location+Pe,X/se.locationSize,we,B,me*te,(Te+X/se.locationSize*Pe)*te,xe)}else{if(ie.isInstancedBufferAttribute){for(let pe=0;pe<se.locationSize;pe++)S(se.location+pe,ie.meshPerAttribute);D.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let pe=0;pe<se.locationSize;pe++)_(se.location+pe);a.bindBuffer(a.ARRAY_BUFFER,Me);for(let pe=0;pe<se.locationSize;pe++)T(se.location+pe,X/se.locationSize,we,B,X*te,X/se.locationSize*pe*te,xe)}}else if($!==void 0){const B=$[K];if(B!==void 0)switch(B.length){case 2:a.vertexAttrib2fv(se.location,B);break;case 3:a.vertexAttrib3fv(se.location,B);break;case 4:a.vertexAttrib4fv(se.location,B);break;default:a.vertexAttrib1fv(se.location,B)}}}}b()}function N(){L();for(const D in i){const z=i[D];for(const Z in z){const ne=z[Z];for(const V in ne){const J=ne[V];for(const $ in J)p(J[$].object),delete J[$];delete ne[V]}}delete i[D]}}function A(D){if(i[D.id]===void 0)return;const z=i[D.id];for(const Z in z){const ne=z[Z];for(const V in ne){const J=ne[V];for(const $ in J)p(J[$].object),delete J[$];delete ne[V]}}delete i[D.id]}function U(D){for(const z in i){const Z=i[z];for(const ne in Z){const V=Z[ne];if(V[D.id]===void 0)continue;const J=V[D.id];for(const $ in J)p(J[$].object),delete J[$];delete V[D.id]}}}function C(D){for(const z in i){const Z=i[z],ne=D.isInstancedMesh===!0?D.id:0,V=Z[ne];if(V!==void 0){for(const J in V){const $=V[J];for(const K in $)p($[K].object),delete $[K];delete V[J]}delete Z[ne],Object.keys(Z).length===0&&delete i[z]}}}function L(){O(),c=!0,o!==s&&(o=s,f(o.object))}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:L,resetDefaultState:O,dispose:N,releaseStatesOfGeometry:A,releaseStatesOfObject:C,releaseStatesOfProgram:U,initAttributes:w,enableAttribute:_,disableUnusedAttributes:b}}function $b(a,e,t){let i;function s(h){i=h}function o(h,f){a.drawArrays(i,h,f),t.update(f,i,1)}function c(h,f,p){p!==0&&(a.drawArraysInstanced(i,h,f,p),t.update(f,i,p))}function u(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,f,0,p);let m=0;for(let y=0;y<p;y++)m+=f[y];t.update(m,i,1)}this.setMode=s,this.render=o,this.renderInstances=c,this.renderMultiDraw=u}function Kb(a,e,t,i){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");s=a.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(U){return!(U!==mi&&i.convert(U)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(U){const C=U===gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==pi&&i.convert(U)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Vi&&!C)}function h(U){if(U==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const p=h(f);p!==f&&(pt("WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const g=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),v=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=a.getParameter(a.MAX_TEXTURE_SIZE),_=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),S=a.getParameter(a.MAX_VERTEX_ATTRIBS),b=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),T=a.getParameter(a.MAX_VARYING_VECTORS),E=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),N=a.getParameter(a.MAX_SAMPLES),A=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:g,reversedDepthBuffer:m,maxTextures:y,maxVertexTextures:v,maxTextureSize:w,maxCubemapSize:_,maxAttributes:S,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:E,maxSamples:N,samples:A}}function Zb(a){const e=this;let t=null,i=0,s=!1,o=!1;const c=new Ns,u=new wt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,m){const y=g.length!==0||m||i!==0||s;return s=m,i=g.length,y},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,m){t=p(g,m,0)},this.setState=function(g,m,y){const v=g.clippingPlanes,w=g.clipIntersection,_=g.clipShadows,S=a.get(g);if(!s||v===null||v.length===0||o&&!_)o?p(null):f();else{const b=o?0:i,T=b*4;let E=S.clippingState||null;h.value=E,E=p(v,m,T,y);for(let N=0;N!==T;++N)E[N]=t[N];S.clippingState=E,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=b}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(g,m,y,v){const w=g!==null?g.length:0;let _=null;if(w!==0){if(_=h.value,v!==!0||_===null){const S=y+w*4,b=m.matrixWorldInverse;u.getNormalMatrix(b),(_===null||_.length<S)&&(_=new Float32Array(S));for(let T=0,E=y;T!==w;++T,E+=4)c.copy(g[T]).applyMatrix4(b,u),c.normal.toArray(_,E),_[E+3]=c.constant}h.value=_,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,_}}const ls=4,bg=[.125,.215,.35,.446,.526,.582],Us=20,Qb=256,Do=new qa,Eg=new Je;let lf=null,cf=0,uf=0,hf=!1;const Jb=new Q;class Tg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,o={}){const{size:c=256,position:u=Jb}=o;lf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),uf=this._renderer.getActiveMipmapLevel(),hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,i,s,h,u),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ag(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lf,cf,uf),this._renderer.xr.enabled=hf,e.scissorTest=!1,Aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Os||e.mapping===Ba?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),uf=this._renderer.getActiveMipmapLevel(),hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:gi,format:mi,colorSpace:Dc,depthBuffer:!1},s=Cg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cg(e,t,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=e2(o)),this._blurMaterial=n2(o,e,t),this._ggxMaterial=t2(o,e,t)}return s}_compileMaterial(e){const t=new un(new cn,e);this._renderer.compile(t,Do)}_sceneToCubeUV(e,t,i,s,o){const h=new Pn(90,1,t,i),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,m=g.autoClear,y=g.toneMapping;g.getClearColor(Eg),g.toneMapping=nr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new un(new ja,new qc({name:"PMREM.Background",side:ii,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,_=w.material;let S=!1;const b=e.background;b?b.isColor&&(_.color.copy(b),e.background=null,S=!0):(_.color.copy(Eg),S=!0);for(let T=0;T<6;T++){const E=T%3;E===0?(h.up.set(0,f[T],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x+p[T],o.y,o.z)):E===1?(h.up.set(0,0,f[T]),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y+p[T],o.z)):(h.up.set(0,f[T],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y,o.z+p[T]));const N=this._cubeSize;Aa(s,E*N,T>2?N:0,N,N),g.setRenderTarget(s),S&&g.render(w,h),g.render(e,h)}g.toneMapping=y,g.autoClear=m,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Os||e.mapping===Ba;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ag());const o=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=o;const u=o.uniforms;u.envMap.value=e;const h=this._cubeSize;Aa(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(c,Do)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,o=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[i];u.material=c;const h=c.uniforms,f=i/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),g=Math.sqrt(f*f-p*p),m=0+f*1.25,y=g*m,{_lodMax:v}=this,w=this._sizeLods[i],_=3*w*(i>v-ls?i-v+ls:0),S=4*(this._cubeSize-w);h.envMap.value=e.texture,h.roughness.value=y,h.mipInt.value=v-t,Aa(o,_,S,3*w,2*w),s.setRenderTarget(o),s.render(u,Do),h.envMap.value=o.texture,h.roughness.value=0,h.mipInt.value=v-i,Aa(e,_,S,3*w,2*w),s.setRenderTarget(e),s.render(u,Do)}_blur(e,t,i,s,o){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",o),this._halfBlur(c,e,i,i,s,"longitudinal",o)}_halfBlur(e,t,i,s,o,c,u){const h=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&kt("blur direction must be either latitudinal or longitudinal!");const p=3,g=this._lodMeshes[s];g.material=f;const m=f.uniforms,y=this._sizeLods[i]-1,v=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*Us-1),w=o/v,_=isFinite(o)?1+Math.floor(p*w):Us;_>Us&&pt(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Us}`);const S=[];let b=0;for(let U=0;U<Us;++U){const C=U/w,L=Math.exp(-C*C/2);S.push(L),U===0?b+=L:U<_&&(b+=2*L)}for(let U=0;U<S.length;U++)S[U]=S[U]/b;m.envMap.value=e.texture,m.samples.value=_,m.weights.value=S,m.latitudinal.value=c==="latitudinal",u&&(m.poleAxis.value=u);const{_lodMax:T}=this;m.dTheta.value=v,m.mipInt.value=T-i;const E=this._sizeLods[s],N=3*E*(s>T-ls?s-T+ls:0),A=4*(this._cubeSize-E);Aa(t,N,A,3*E,2*E),h.setRenderTarget(t),h.render(g,Do)}}function e2(a){const e=[],t=[],i=[];let s=a;const o=a-ls+1+bg.length;for(let c=0;c<o;c++){const u=Math.pow(2,s);e.push(u);let h=1/u;c>a-ls?h=bg[c-a+ls-1]:c===0&&(h=0),t.push(h);const f=1/(u-2),p=-f,g=1+f,m=[p,p,g,p,g,g,p,p,g,g,p,g],y=6,v=6,w=3,_=2,S=1,b=new Float32Array(w*v*y),T=new Float32Array(_*v*y),E=new Float32Array(S*v*y);for(let A=0;A<y;A++){const U=A%3*2/3-1,C=A>2?0:-1,L=[U,C,0,U+2/3,C,0,U+2/3,C+1,0,U,C,0,U+2/3,C+1,0,U,C+1,0];b.set(L,w*v*A),T.set(m,_*v*A);const O=[A,A,A,A,A,A];E.set(O,S*v*A)}const N=new cn;N.setAttribute("position",new yn(b,w)),N.setAttribute("uv",new yn(T,_)),N.setAttribute("faceIndex",new yn(E,S)),i.push(new un(N,null)),s>ls&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Cg(a,e,t){const i=new ri(a,e,t);return i.texture.mapping=jc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Aa(a,e,t,i,s){a.viewport.set(e,t,i,s),a.scissor.set(e,t,i,s)}function t2(a,e,t){return new ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Qb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function n2(a,e,t){const i=new Float32Array(Us),s=new Q(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Ag(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Rg(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Yc(){return`

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
	`}class Qx extends ri{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Vx(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ja(5,5,5),o=new ln({name:"CubemapFromEquirect",uniforms:Ga(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ii,blending:tr});o.uniforms.tEquirect.value=t;const c=new un(s,o),u=t.minFilter;return t.minFilter===Ds&&(t.minFilter=pn),new aM(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(o)}}function i2(a){let e=new WeakMap,t=new WeakMap,i=null;function s(m,y=!1){return m==null?null:y?c(m):o(m)}function o(m){if(m&&m.isTexture){const y=m.mapping;if(y===Nh||y===Fh)if(e.has(m)){const v=e.get(m).texture;return u(v,m.mapping)}else{const v=m.image;if(v&&v.height>0){const w=new Qx(v.height);return w.fromEquirectangularTexture(a,m),e.set(m,w),m.addEventListener("dispose",f),u(w.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const y=m.mapping,v=y===Nh||y===Fh,w=y===Os||y===Ba;if(v||w){let _=t.get(m);const S=_!==void 0?_.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==S)return i===null&&(i=new Tg(a)),_=v?i.fromEquirectangular(m,_):i.fromCubemap(m,_),_.texture.pmremVersion=m.pmremVersion,t.set(m,_),_.texture;if(_!==void 0)return _.texture;{const b=m.image;return v&&b&&b.height>0||w&&b&&h(b)?(i===null&&(i=new Tg(a)),_=v?i.fromEquirectangular(m):i.fromCubemap(m),_.texture.pmremVersion=m.pmremVersion,t.set(m,_),m.addEventListener("dispose",p),_.texture):null}}}return m}function u(m,y){return y===Nh?m.mapping=Os:y===Fh&&(m.mapping=Ba),m}function h(m){let y=0;const v=6;for(let w=0;w<v;w++)m[w]!==void 0&&y++;return y===v}function f(m){const y=m.target;y.removeEventListener("dispose",f);const v=e.get(y);v!==void 0&&(e.delete(y),v.dispose())}function p(m){const y=m.target;y.removeEventListener("dispose",p);const v=t.get(y);v!==void 0&&(t.delete(y),v.dispose())}function g(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:g}}function r2(a){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=a.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&fd("WebGLRenderer: "+i+" extension not supported."),s}}}function s2(a,e,t,i){const s={},o=new WeakMap;function c(g){const m=g.target;m.index!==null&&e.remove(m.index);for(const v in m.attributes)e.remove(m.attributes[v]);m.removeEventListener("dispose",c),delete s[m.id];const y=o.get(m);y&&(e.remove(y),o.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function u(g,m){return s[m.id]===!0||(m.addEventListener("dispose",c),s[m.id]=!0,t.memory.geometries++),m}function h(g){const m=g.attributes;for(const y in m)e.update(m[y],a.ARRAY_BUFFER)}function f(g){const m=[],y=g.index,v=g.attributes.position;let w=0;if(v===void 0)return;if(y!==null){const b=y.array;w=y.version;for(let T=0,E=b.length;T<E;T+=3){const N=b[T+0],A=b[T+1],U=b[T+2];m.push(N,A,A,U,U,N)}}else{const b=v.array;w=v.version;for(let T=0,E=b.length/3-1;T<E;T+=3){const N=T+0,A=T+1,U=T+2;m.push(N,A,A,U,U,N)}}const _=new(v.count>=65535?Hx:Bx)(m,1);_.version=w;const S=o.get(g);S&&e.remove(S),o.set(g,_)}function p(g){const m=o.get(g);if(m){const y=g.index;y!==null&&m.version<y.version&&f(g)}else f(g);return o.get(g)}return{get:u,update:h,getWireframeAttribute:p}}function a2(a,e,t){let i;function s(g){i=g}let o,c;function u(g){o=g.type,c=g.bytesPerElement}function h(g,m){a.drawElements(i,m,o,g*c),t.update(m,i,1)}function f(g,m,y){y!==0&&(a.drawElementsInstanced(i,m,o,g*c,y),t.update(m,i,y))}function p(g,m,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,o,g,0,y);let w=0;for(let _=0;_<y;_++)w+=m[_];t.update(w,i,1)}this.setMode=s,this.setIndex=u,this.render=h,this.renderInstances=f,this.renderMultiDraw=p}function o2(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,c,u){switch(t.calls++,c){case a.TRIANGLES:t.triangles+=u*(o/3);break;case a.LINES:t.lines+=u*(o/2);break;case a.LINE_STRIP:t.lines+=u*(o-1);break;case a.LINE_LOOP:t.lines+=u*o;break;case a.POINTS:t.points+=u*o;break;default:kt("WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function l2(a,e,t){const i=new WeakMap,s=new sn;function o(c,u,h){const f=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let m=i.get(u);if(m===void 0||m.count!==g){let L=function(){U.dispose(),i.delete(u),u.removeEventListener("dispose",L)};m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,_=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let T=0;y===!0&&(T=1),v===!0&&(T=2),w===!0&&(T=3);let E=u.attributes.position.count*T,N=1;E>e.maxTextureSize&&(N=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const A=new Float32Array(E*N*4*g),U=new kx(A,E,N,g);U.type=Vi,U.needsUpdate=!0;const C=T*4;for(let O=0;O<g;O++){const D=_[O],z=S[O],Z=b[O],ne=E*N*4*O;for(let V=0;V<D.count;V++){const J=V*C;y===!0&&(s.fromBufferAttribute(D,V),A[ne+J+0]=s.x,A[ne+J+1]=s.y,A[ne+J+2]=s.z,A[ne+J+3]=0),v===!0&&(s.fromBufferAttribute(z,V),A[ne+J+4]=s.x,A[ne+J+5]=s.y,A[ne+J+6]=s.z,A[ne+J+7]=0),w===!0&&(s.fromBufferAttribute(Z,V),A[ne+J+8]=s.x,A[ne+J+9]=s.y,A[ne+J+10]=s.z,A[ne+J+11]=Z.itemSize===4?s.w:1)}}m={count:g,texture:U,size:new ft(E,N)},i.set(u,m),u.addEventListener("dispose",L)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(a,"morphTexture",c.morphTexture,t);else{let y=0;for(let w=0;w<f.length;w++)y+=f[w];const v=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(a,"morphTargetBaseInfluence",v),h.getUniforms().setValue(a,"morphTargetInfluences",f)}h.getUniforms().setValue(a,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(a,"morphTargetsTextureSize",m.size)}return{update:o}}function c2(a,e,t,i,s){let o=new WeakMap;function c(f){const p=s.render.frame,g=f.geometry,m=e.get(f,g);if(o.get(m)!==p&&(e.update(m),o.set(m,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),o.get(f)!==p&&(t.update(f.instanceMatrix,a.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,a.ARRAY_BUFFER),o.set(f,p))),f.isSkinnedMesh){const y=f.skeleton;o.get(y)!==p&&(y.update(),o.set(y,p))}return m}function u(){o=new WeakMap}function h(f){const p=f.target;p.removeEventListener("dispose",h),i.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:c,dispose:u}}const u2={[Mx]:"LINEAR_TONE_MAPPING",[wx]:"REINHARD_TONE_MAPPING",[bx]:"CINEON_TONE_MAPPING",[Ex]:"ACES_FILMIC_TONE_MAPPING",[Cx]:"AGX_TONE_MAPPING",[Ax]:"NEUTRAL_TONE_MAPPING",[Tx]:"CUSTOM_TONE_MAPPING"};function h2(a,e,t,i,s){const o=new ri(e,t,{type:a,depthBuffer:i,stencilBuffer:s,depthTexture:i?new Ha(e,t):void 0}),c=new ri(e,t,{type:gi,depthBuffer:!1,stencilBuffer:!1}),u=new cn;u.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Qt([0,2,0,0,2,0],2));const h=new KS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new un(u,h),p=new qa(-1,1,1,-1,0,1);let g=null,m=null,y=!1,v,w=null,_=[],S=!1;this.setSize=function(b,T){o.setSize(b,T),c.setSize(b,T);for(let E=0;E<_.length;E++){const N=_[E];N.setSize&&N.setSize(b,T)}},this.setEffects=function(b){_=b,S=_.length>0&&_[0].isRenderPass===!0;const T=o.width,E=o.height;for(let N=0;N<_.length;N++){const A=_[N];A.setSize&&A.setSize(T,E)}},this.begin=function(b,T){if(y||b.toneMapping===nr&&_.length===0)return!1;if(w=T,T!==null){const E=T.width,N=T.height;(o.width!==E||o.height!==N)&&this.setSize(E,N)}return S===!1&&b.setRenderTarget(o),v=b.toneMapping,b.toneMapping=nr,!0},this.hasRenderPass=function(){return S},this.end=function(b,T){b.toneMapping=v,y=!0;let E=o,N=c;for(let A=0;A<_.length;A++){const U=_[A];if(U.enabled!==!1&&(U.render(b,N,E,T),U.needsSwap!==!1)){const C=E;E=N,N=C}}if(g!==b.outputColorSpace||m!==b.toneMapping){g=b.outputColorSpace,m=b.toneMapping,h.defines={},Ft.getTransfer(g)===Wt&&(h.defines.SRGB_TRANSFER="");const A=u2[m];A&&(h.defines[A]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,b.setRenderTarget(w),b.render(f,p),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),c.dispose(),u.dispose(),h.dispose()}}const Jx=new Hn,md=new Ha(1,1),ev=new kx,tv=new CS,nv=new Vx,Pg=[],Lg=[],Ig=new Float32Array(16),Ng=new Float32Array(9),Fg=new Float32Array(4);function Ya(a,e,t){const i=a[0];if(i<=0||i>0)return a;const s=e*t;let o=Pg[s];if(o===void 0&&(o=new Float32Array(s),Pg[s]=o),e!==0){i.toArray(o,0);for(let c=1,u=0;c!==e;++c)u+=t,a[c].toArray(o,u)}return o}function Sn(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function Mn(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function $c(a,e){let t=Lg[e];t===void 0&&(t=new Int32Array(e),Lg[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function f2(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function d2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;a.uniform2fv(this.addr,e),Mn(t,e)}}function p2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Sn(t,e))return;a.uniform3fv(this.addr,e),Mn(t,e)}}function m2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;a.uniform4fv(this.addr,e),Mn(t,e)}}function g2(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Sn(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Mn(t,e)}else{if(Sn(t,i))return;Fg.set(i),a.uniformMatrix2fv(this.addr,!1,Fg),Mn(t,i)}}function x2(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Sn(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Mn(t,e)}else{if(Sn(t,i))return;Ng.set(i),a.uniformMatrix3fv(this.addr,!1,Ng),Mn(t,i)}}function v2(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Sn(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Mn(t,e)}else{if(Sn(t,i))return;Ig.set(i),a.uniformMatrix4fv(this.addr,!1,Ig),Mn(t,i)}}function _2(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function y2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;a.uniform2iv(this.addr,e),Mn(t,e)}}function S2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;a.uniform3iv(this.addr,e),Mn(t,e)}}function M2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;a.uniform4iv(this.addr,e),Mn(t,e)}}function w2(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function b2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;a.uniform2uiv(this.addr,e),Mn(t,e)}}function E2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;a.uniform3uiv(this.addr,e),Mn(t,e)}}function T2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;a.uniform4uiv(this.addr,e),Mn(t,e)}}function C2(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s);let o;this.type===a.SAMPLER_2D_SHADOW?(md.compareFunction=t.isReversedDepthBuffer()?zd:Od,o=md):o=Jx,t.setTexture2D(e||o,s)}function A2(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||tv,s)}function R2(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||nv,s)}function P2(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||ev,s)}function L2(a){switch(a){case 5126:return f2;case 35664:return d2;case 35665:return p2;case 35666:return m2;case 35674:return g2;case 35675:return x2;case 35676:return v2;case 5124:case 35670:return _2;case 35667:case 35671:return y2;case 35668:case 35672:return S2;case 35669:case 35673:return M2;case 5125:return w2;case 36294:return b2;case 36295:return E2;case 36296:return T2;case 35678:case 36198:case 36298:case 36306:case 35682:return C2;case 35679:case 36299:case 36307:return A2;case 35680:case 36300:case 36308:case 36293:return R2;case 36289:case 36303:case 36311:case 36292:return P2}}function I2(a,e){a.uniform1fv(this.addr,e)}function N2(a,e){const t=Ya(e,this.size,2);a.uniform2fv(this.addr,t)}function F2(a,e){const t=Ya(e,this.size,3);a.uniform3fv(this.addr,t)}function U2(a,e){const t=Ya(e,this.size,4);a.uniform4fv(this.addr,t)}function D2(a,e){const t=Ya(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function k2(a,e){const t=Ya(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function O2(a,e){const t=Ya(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function z2(a,e){a.uniform1iv(this.addr,e)}function B2(a,e){a.uniform2iv(this.addr,e)}function H2(a,e){a.uniform3iv(this.addr,e)}function G2(a,e){a.uniform4iv(this.addr,e)}function V2(a,e){a.uniform1uiv(this.addr,e)}function W2(a,e){a.uniform2uiv(this.addr,e)}function X2(a,e){a.uniform3uiv(this.addr,e)}function j2(a,e){a.uniform4uiv(this.addr,e)}function q2(a,e,t){const i=this.cache,s=e.length,o=$c(t,s);Sn(i,o)||(a.uniform1iv(this.addr,o),Mn(i,o));let c;this.type===a.SAMPLER_2D_SHADOW?c=md:c=Jx;for(let u=0;u!==s;++u)t.setTexture2D(e[u]||c,o[u])}function Y2(a,e,t){const i=this.cache,s=e.length,o=$c(t,s);Sn(i,o)||(a.uniform1iv(this.addr,o),Mn(i,o));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||tv,o[c])}function $2(a,e,t){const i=this.cache,s=e.length,o=$c(t,s);Sn(i,o)||(a.uniform1iv(this.addr,o),Mn(i,o));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||nv,o[c])}function K2(a,e,t){const i=this.cache,s=e.length,o=$c(t,s);Sn(i,o)||(a.uniform1iv(this.addr,o),Mn(i,o));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||ev,o[c])}function Z2(a){switch(a){case 5126:return I2;case 35664:return N2;case 35665:return F2;case 35666:return U2;case 35674:return D2;case 35675:return k2;case 35676:return O2;case 5124:case 35670:return z2;case 35667:case 35671:return B2;case 35668:case 35672:return H2;case 35669:case 35673:return G2;case 5125:return V2;case 36294:return W2;case 36295:return X2;case 36296:return j2;case 35678:case 36198:case 36298:case 36306:case 35682:return q2;case 35679:case 36299:case 36307:return Y2;case 35680:case 36300:case 36308:case 36293:return $2;case 36289:case 36303:case 36311:case 36292:return K2}}class Q2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=L2(t.type)}}class J2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Z2(t.type)}}class eE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let o=0,c=s.length;o!==c;++o){const u=s[o];u.setValue(e,t[u.id],i)}}}const ff=/(\w+)(\])?(\[|\.)?/g;function Ug(a,e){a.seq.push(e),a.map[e.id]=e}function tE(a,e,t){const i=a.name,s=i.length;for(ff.lastIndex=0;;){const o=ff.exec(i),c=ff.lastIndex;let u=o[1];const h=o[2]==="]",f=o[3];if(h&&(u=u|0),f===void 0||f==="["&&c+2===s){Ug(t,f===void 0?new Q2(u,a,e):new J2(u,a,e));break}else{let g=t.map[u];g===void 0&&(g=new eE(u),Ug(t,g)),t=g}}}class Lc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const u=e.getActiveUniform(t,c),h=e.getUniformLocation(t,u.name);tE(u,h,this)}const s=[],o=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(c):o.push(c);s.length>0&&(this.seq=s.concat(o))}setValue(e,t,i,s){const o=this.map[t];o!==void 0&&o.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let o=0,c=t.length;o!==c;++o){const u=t[o],h=i[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,o=e.length;s!==o;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function Dg(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}const nE=37297;let iE=0;function rE(a,e){const t=a.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=s;c<o;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const kg=new wt;function sE(a){Ft._getMatrix(kg,Ft.workingColorSpace,a);const e=`mat3( ${kg.elements.map(t=>t.toFixed(4))} )`;switch(Ft.getTransfer(a)){case kc:return[e,"LinearTransferOETF"];case Wt:return[e,"sRGBTransferOETF"];default:return pt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Og(a,e,t){const i=a.getShaderParameter(e,a.COMPILE_STATUS),o=(a.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+o+`

`+rE(a.getShaderSource(e),u)}else return o}function aE(a,e){const t=sE(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const oE={[Mx]:"Linear",[wx]:"Reinhard",[bx]:"Cineon",[Ex]:"ACESFilmic",[Cx]:"AgX",[Ax]:"Neutral",[Tx]:"Custom"};function lE(a,e){const t=oE[e];return t===void 0?(pt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const bc=new Q;function cE(){Ft.getLuminanceCoefficients(bc);const a=bc.x.toFixed(4),e=bc.y.toFixed(4),t=bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uE(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function hE(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function fE(a,e){const t={},i=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=a.getActiveAttrib(e,s),c=o.name;let u=1;o.type===a.FLOAT_MAT2&&(u=2),o.type===a.FLOAT_MAT3&&(u=3),o.type===a.FLOAT_MAT4&&(u=4),t[c]={type:o.type,location:a.getAttribLocation(e,c),locationSize:u}}return t}function Bo(a){return a!==""}function zg(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bg(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dE=/^[ \t]*#include +<([\w\d./]+)>/gm;function gd(a){return a.replace(dE,mE)}const pE=new Map;function mE(a,e){let t=Tt[e];if(t===void 0){const i=pE.get(e);if(i!==void 0)t=Tt[i],pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gd(t)}const gE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hg(a){return a.replace(gE,xE)}function xE(a,e,t,i){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Gg(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const vE={[Tc]:"SHADOWMAP_TYPE_PCF",[zo]:"SHADOWMAP_TYPE_VSM"};function _E(a){return vE[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const yE={[Os]:"ENVMAP_TYPE_CUBE",[Ba]:"ENVMAP_TYPE_CUBE",[jc]:"ENVMAP_TYPE_CUBE_UV"};function SE(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":yE[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const ME={[Ba]:"ENVMAP_MODE_REFRACTION"};function wE(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":ME[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const bE={[Pd]:"ENVMAP_BLENDING_MULTIPLY",[Xy]:"ENVMAP_BLENDING_MIX",[jy]:"ENVMAP_BLENDING_ADD"};function EE(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":bE[a.combine]||"ENVMAP_BLENDING_NONE"}function TE(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function CE(a,e,t,i){const s=a.getContext(),o=t.defines;let c=t.vertexShader,u=t.fragmentShader;const h=_E(t),f=SE(t),p=wE(t),g=EE(t),m=TE(t),y=uE(t),v=hE(o),w=s.createProgram();let _,S,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Bo).join(`
`),_.length>0&&(_+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Bo).join(`
`),S.length>0&&(S+=`
`)):(_=[Gg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),S=[Gg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nr?"#define TONE_MAPPING":"",t.toneMapping!==nr?Tt.tonemapping_pars_fragment:"",t.toneMapping!==nr?lE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,aE("linearToOutputTexel",t.outputColorSpace),cE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bo).join(`
`)),c=gd(c),c=zg(c,t),c=Bg(c,t),u=gd(u),u=zg(u,t),u=Bg(u,t),c=Hg(c),u=Hg(u),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,S=["#define varying in",t.glslVersion===G0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===G0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const T=b+_+c,E=b+S+u,N=Dg(s,s.VERTEX_SHADER,T),A=Dg(s,s.FRAGMENT_SHADER,E);s.attachShader(w,N),s.attachShader(w,A),t.index0AttributeName!==void 0?s.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(w,0,"position"),s.linkProgram(w);function U(D){if(a.debug.checkShaderErrors){const z=s.getProgramInfoLog(w)||"",Z=s.getShaderInfoLog(N)||"",ne=s.getShaderInfoLog(A)||"",V=z.trim(),J=Z.trim(),$=ne.trim();let K=!0,se=!0;if(s.getProgramParameter(w,s.LINK_STATUS)===!1)if(K=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(s,w,N,A);else{const ie=Og(s,N,"vertex"),B=Og(s,A,"fragment");kt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(w,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+ie+`
`+B)}else V!==""?pt("WebGLProgram: Program Info Log:",V):(J===""||$==="")&&(se=!1);se&&(D.diagnostics={runnable:K,programLog:V,vertexShader:{log:J,prefix:_},fragmentShader:{log:$,prefix:S}})}s.deleteShader(N),s.deleteShader(A),C=new Lc(s,w),L=fE(s,w)}let C;this.getUniforms=function(){return C===void 0&&U(this),C};let L;this.getAttributes=function(){return L===void 0&&U(this),L};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(w,nE)),O},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iE++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=N,this.fragmentShader=A,this}let AE=0;class RE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new PE(e),t.set(e,i)),i}}class PE{constructor(e){this.id=AE++,this.code=e,this.usedTimes=0}}function LE(a){return a===zs||a===Nc||a===Fc}function IE(a,e,t,i,s,o){const c=new Ox,u=new RE,h=new Set,f=[],p=new Map,g=i.logarithmicDepthBuffer;let m=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(C){return h.add(C),C===0?"uv":`uv${C}`}function w(C,L,O,D,z,Z){const ne=D.fog,V=z.geometry,J=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?D.environment:null,$=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap,K=e.get(C.envMap||J,$),se=K&&K.mapping===jc?K.image.height:null,ie=y[C.type];C.precision!==null&&(m=i.getMaxPrecision(C.precision),m!==C.precision&&pt("WebGLProgram.getParameters:",C.precision,"not supported, using",m,"instead."));const B=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,X=B!==void 0?B.length:0;let ye=0;V.morphAttributes.position!==void 0&&(ye=1),V.morphAttributes.normal!==void 0&&(ye=2),V.morphAttributes.color!==void 0&&(ye=3);let Me,we,te,xe;if(ie){const vt=Qi[ie];Me=vt.vertexShader,we=vt.fragmentShader}else Me=C.vertexShader,we=C.fragmentShader,u.update(C),te=u.getVertexShaderID(C),xe=u.getFragmentShaderID(C);const pe=a.getRenderTarget(),me=a.state.buffers.depth.getReversed(),Te=z.isInstancedMesh===!0,Pe=z.isBatchedMesh===!0,je=!!C.map,Ye=!!C.matcap,$e=!!K,dt=!!C.aoMap,Qe=!!C.lightMap,Et=!!C.bumpMap,bt=!!C.normalMap,Xt=!!C.displacementMap,q=!!C.emissiveMap,Ct=!!C.metalnessMap,gt=!!C.roughnessMap,yt=C.anisotropy>0,Be=C.clearcoat>0,zt=C.dispersion>0,k=C.iridescence>0,R=C.sheen>0,re=C.transmission>0,_e=yt&&!!C.anisotropyMap,be=Be&&!!C.clearcoatMap,Le=Be&&!!C.clearcoatNormalMap,He=Be&&!!C.clearcoatRoughnessMap,ge=k&&!!C.iridescenceMap,Se=k&&!!C.iridescenceThicknessMap,We=R&&!!C.sheenColorMap,qe=R&&!!C.sheenRoughnessMap,De=!!C.specularMap,Ne=!!C.specularColorMap,mt=!!C.specularIntensityMap,xt=re&&!!C.transmissionMap,ct=re&&!!C.thicknessMap,Y=!!C.gradientMap,Fe=!!C.alphaMap,ve=C.alphaTest>0,Ve=!!C.alphaHash,ke=!!C.extensions;let Ee=nr;C.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Ee=a.toneMapping);const nt={shaderID:ie,shaderType:C.type,shaderName:C.name,vertexShader:Me,fragmentShader:we,defines:C.defines,customVertexShaderID:te,customFragmentShaderID:xe,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:m,batching:Pe,batchingColor:Pe&&z._colorsTexture!==null,instancing:Te,instancingColor:Te&&z.instanceColor!==null,instancingMorph:Te&&z.morphTexture!==null,outputColorSpace:pe===null?a.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Ft.workingColorSpace,alphaToCoverage:!!C.alphaToCoverage,map:je,matcap:Ye,envMap:$e,envMapMode:$e&&K.mapping,envMapCubeUVHeight:se,aoMap:dt,lightMap:Qe,bumpMap:Et,normalMap:bt,displacementMap:Xt,emissiveMap:q,normalMapObjectSpace:bt&&C.normalMapType===$y,normalMapTangentSpace:bt&&C.normalMapType===Uc,packedNormalMap:bt&&C.normalMapType===Uc&&LE(C.normalMap.format),metalnessMap:Ct,roughnessMap:gt,anisotropy:yt,anisotropyMap:_e,clearcoat:Be,clearcoatMap:be,clearcoatNormalMap:Le,clearcoatRoughnessMap:He,dispersion:zt,iridescence:k,iridescenceMap:ge,iridescenceThicknessMap:Se,sheen:R,sheenColorMap:We,sheenRoughnessMap:qe,specularMap:De,specularColorMap:Ne,specularIntensityMap:mt,transmission:re,transmissionMap:xt,thicknessMap:ct,gradientMap:Y,opaque:C.transparent===!1&&C.blending===Da&&C.alphaToCoverage===!1,alphaMap:Fe,alphaTest:ve,alphaHash:Ve,combine:C.combine,mapUv:je&&v(C.map.channel),aoMapUv:dt&&v(C.aoMap.channel),lightMapUv:Qe&&v(C.lightMap.channel),bumpMapUv:Et&&v(C.bumpMap.channel),normalMapUv:bt&&v(C.normalMap.channel),displacementMapUv:Xt&&v(C.displacementMap.channel),emissiveMapUv:q&&v(C.emissiveMap.channel),metalnessMapUv:Ct&&v(C.metalnessMap.channel),roughnessMapUv:gt&&v(C.roughnessMap.channel),anisotropyMapUv:_e&&v(C.anisotropyMap.channel),clearcoatMapUv:be&&v(C.clearcoatMap.channel),clearcoatNormalMapUv:Le&&v(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&v(C.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&v(C.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&v(C.iridescenceThicknessMap.channel),sheenColorMapUv:We&&v(C.sheenColorMap.channel),sheenRoughnessMapUv:qe&&v(C.sheenRoughnessMap.channel),specularMapUv:De&&v(C.specularMap.channel),specularColorMapUv:Ne&&v(C.specularColorMap.channel),specularIntensityMapUv:mt&&v(C.specularIntensityMap.channel),transmissionMapUv:xt&&v(C.transmissionMap.channel),thicknessMapUv:ct&&v(C.thicknessMap.channel),alphaMapUv:Fe&&v(C.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(bt||yt),vertexNormals:!!V.attributes.normal,vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!V.attributes.uv&&(je||Fe),fog:!!ne,useFog:C.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:C.wireframe===!1&&(C.flatShading===!0||V.attributes.normal===void 0&&bt===!1&&(C.isMeshLambertMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isMeshPhysicalMaterial)),sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:me,skinning:z.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:ye,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:Z.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:C.dithering,shadowMapEnabled:a.shadowMap.enabled&&O.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ee,decodeVideoTexture:je&&C.map.isVideoTexture===!0&&Ft.getTransfer(C.map.colorSpace)===Wt,decodeVideoTextureEmissive:q&&C.emissiveMap.isVideoTexture===!0&&Ft.getTransfer(C.emissiveMap.colorSpace)===Wt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Hi,flipSided:C.side===ii,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:ke&&C.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&C.extensions.multiDraw===!0||Pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return nt.vertexUv1s=h.has(1),nt.vertexUv2s=h.has(2),nt.vertexUv3s=h.has(3),h.clear(),nt}function _(C){const L=[];if(C.shaderID?L.push(C.shaderID):(L.push(C.customVertexShaderID),L.push(C.customFragmentShaderID)),C.defines!==void 0)for(const O in C.defines)L.push(O),L.push(C.defines[O]);return C.isRawShaderMaterial===!1&&(S(L,C),b(L,C),L.push(a.outputColorSpace)),L.push(C.customProgramCacheKey),L.join()}function S(C,L){C.push(L.precision),C.push(L.outputColorSpace),C.push(L.envMapMode),C.push(L.envMapCubeUVHeight),C.push(L.mapUv),C.push(L.alphaMapUv),C.push(L.lightMapUv),C.push(L.aoMapUv),C.push(L.bumpMapUv),C.push(L.normalMapUv),C.push(L.displacementMapUv),C.push(L.emissiveMapUv),C.push(L.metalnessMapUv),C.push(L.roughnessMapUv),C.push(L.anisotropyMapUv),C.push(L.clearcoatMapUv),C.push(L.clearcoatNormalMapUv),C.push(L.clearcoatRoughnessMapUv),C.push(L.iridescenceMapUv),C.push(L.iridescenceThicknessMapUv),C.push(L.sheenColorMapUv),C.push(L.sheenRoughnessMapUv),C.push(L.specularMapUv),C.push(L.specularColorMapUv),C.push(L.specularIntensityMapUv),C.push(L.transmissionMapUv),C.push(L.thicknessMapUv),C.push(L.combine),C.push(L.fogExp2),C.push(L.sizeAttenuation),C.push(L.morphTargetsCount),C.push(L.morphAttributeCount),C.push(L.numDirLights),C.push(L.numPointLights),C.push(L.numSpotLights),C.push(L.numSpotLightMaps),C.push(L.numHemiLights),C.push(L.numRectAreaLights),C.push(L.numDirLightShadows),C.push(L.numPointLightShadows),C.push(L.numSpotLightShadows),C.push(L.numSpotLightShadowsWithMaps),C.push(L.numLightProbes),C.push(L.shadowMapType),C.push(L.toneMapping),C.push(L.numClippingPlanes),C.push(L.numClipIntersection),C.push(L.depthPacking)}function b(C,L){c.disableAll(),L.instancing&&c.enable(0),L.instancingColor&&c.enable(1),L.instancingMorph&&c.enable(2),L.matcap&&c.enable(3),L.envMap&&c.enable(4),L.normalMapObjectSpace&&c.enable(5),L.normalMapTangentSpace&&c.enable(6),L.clearcoat&&c.enable(7),L.iridescence&&c.enable(8),L.alphaTest&&c.enable(9),L.vertexColors&&c.enable(10),L.vertexAlphas&&c.enable(11),L.vertexUv1s&&c.enable(12),L.vertexUv2s&&c.enable(13),L.vertexUv3s&&c.enable(14),L.vertexTangents&&c.enable(15),L.anisotropy&&c.enable(16),L.alphaHash&&c.enable(17),L.batching&&c.enable(18),L.dispersion&&c.enable(19),L.batchingColor&&c.enable(20),L.gradientMap&&c.enable(21),L.packedNormalMap&&c.enable(22),L.vertexNormals&&c.enable(23),C.push(c.mask),c.disableAll(),L.fog&&c.enable(0),L.useFog&&c.enable(1),L.flatShading&&c.enable(2),L.logarithmicDepthBuffer&&c.enable(3),L.reversedDepthBuffer&&c.enable(4),L.skinning&&c.enable(5),L.morphTargets&&c.enable(6),L.morphNormals&&c.enable(7),L.morphColors&&c.enable(8),L.premultipliedAlpha&&c.enable(9),L.shadowMapEnabled&&c.enable(10),L.doubleSided&&c.enable(11),L.flipSided&&c.enable(12),L.useDepthPacking&&c.enable(13),L.dithering&&c.enable(14),L.transmission&&c.enable(15),L.sheen&&c.enable(16),L.opaque&&c.enable(17),L.pointsUvs&&c.enable(18),L.decodeVideoTexture&&c.enable(19),L.decodeVideoTextureEmissive&&c.enable(20),L.alphaToCoverage&&c.enable(21),L.numLightProbeGrids>0&&c.enable(22),C.push(c.mask)}function T(C){const L=y[C.type];let O;if(L){const D=Qi[L];O=Hc.clone(D.uniforms)}else O=C.uniforms;return O}function E(C,L){let O=p.get(L);return O!==void 0?++O.usedTimes:(O=new CE(a,L,C,s),f.push(O),p.set(L,O)),O}function N(C){if(--C.usedTimes===0){const L=f.indexOf(C);f[L]=f[f.length-1],f.pop(),p.delete(C.cacheKey),C.destroy()}}function A(C){u.remove(C)}function U(){u.dispose()}return{getParameters:w,getProgramCacheKey:_,getUniforms:T,acquireProgram:E,releaseProgram:N,releaseShaderCache:A,programs:f,dispose:U}}function NE(){let a=new WeakMap;function e(c){return a.has(c)}function t(c){let u=a.get(c);return u===void 0&&(u={},a.set(c,u)),u}function i(c){a.delete(c)}function s(c,u,h){a.get(c)[u]=h}function o(){a=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:o}}function FE(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function Vg(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Wg(){const a=[];let e=0;const t=[],i=[],s=[];function o(){e=0,t.length=0,i.length=0,s.length=0}function c(m){let y=0;return m.isInstancedMesh&&(y+=2),m.isSkinnedMesh&&(y+=1),y}function u(m,y,v,w,_,S){let b=a[e];return b===void 0?(b={id:m.id,object:m,geometry:y,material:v,materialVariant:c(m),groupOrder:w,renderOrder:m.renderOrder,z:_,group:S},a[e]=b):(b.id=m.id,b.object=m,b.geometry=y,b.material=v,b.materialVariant=c(m),b.groupOrder=w,b.renderOrder=m.renderOrder,b.z=_,b.group=S),e++,b}function h(m,y,v,w,_,S){const b=u(m,y,v,w,_,S);v.transmission>0?i.push(b):v.transparent===!0?s.push(b):t.push(b)}function f(m,y,v,w,_,S){const b=u(m,y,v,w,_,S);v.transmission>0?i.unshift(b):v.transparent===!0?s.unshift(b):t.unshift(b)}function p(m,y){t.length>1&&t.sort(m||FE),i.length>1&&i.sort(y||Vg),s.length>1&&s.sort(y||Vg)}function g(){for(let m=e,y=a.length;m<y;m++){const v=a[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:s,init:o,push:h,unshift:f,finish:g,sort:p}}function UE(){let a=new WeakMap;function e(i,s){const o=a.get(i);let c;return o===void 0?(c=new Wg,a.set(i,[c])):s>=o.length?(c=new Wg,o.push(c)):c=o[s],c}function t(){a=new WeakMap}return{get:e,dispose:t}}function DE(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new Je};break;case"SpotLight":t={position:new Q,direction:new Q,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return a[e.id]=t,t}}}function kE(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let OE=0;function zE(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function BE(a){const e=new DE,t=kE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new Q);const s=new Q,o=new Yt,c=new Yt;function u(f){let p=0,g=0,m=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let y=0,v=0,w=0,_=0,S=0,b=0,T=0,E=0,N=0,A=0,U=0;f.sort(zE);for(let L=0,O=f.length;L<O;L++){const D=f[L],z=D.color,Z=D.intensity,ne=D.distance;let V=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===zs?V=D.shadow.map.texture:V=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)p+=z.r*Z,g+=z.g*Z,m+=z.b*Z;else if(D.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(D.sh.coefficients[J],Z);U++}else if(D.isDirectionalLight){const J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const $=D.shadow,K=t.get(D);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,i.directionalShadow[y]=K,i.directionalShadowMap[y]=V,i.directionalShadowMatrix[y]=D.shadow.matrix,b++}i.directional[y]=J,y++}else if(D.isSpotLight){const J=e.get(D);J.position.setFromMatrixPosition(D.matrixWorld),J.color.copy(z).multiplyScalar(Z),J.distance=ne,J.coneCos=Math.cos(D.angle),J.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),J.decay=D.decay,i.spot[w]=J;const $=D.shadow;if(D.map&&(i.spotLightMap[N]=D.map,N++,$.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[w]=$.matrix,D.castShadow){const K=t.get(D);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,i.spotShadow[w]=K,i.spotShadowMap[w]=V,E++}w++}else if(D.isRectAreaLight){const J=e.get(D);J.color.copy(z).multiplyScalar(Z),J.halfWidth.set(D.width*.5,0,0),J.halfHeight.set(0,D.height*.5,0),i.rectArea[_]=J,_++}else if(D.isPointLight){const J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),J.distance=D.distance,J.decay=D.decay,D.castShadow){const $=D.shadow,K=t.get(D);K.shadowIntensity=$.intensity,K.shadowBias=$.bias,K.shadowNormalBias=$.normalBias,K.shadowRadius=$.radius,K.shadowMapSize=$.mapSize,K.shadowCameraNear=$.camera.near,K.shadowCameraFar=$.camera.far,i.pointShadow[v]=K,i.pointShadowMap[v]=V,i.pointShadowMatrix[v]=D.shadow.matrix,T++}i.point[v]=J,v++}else if(D.isHemisphereLight){const J=e.get(D);J.skyColor.copy(D.color).multiplyScalar(Z),J.groundColor.copy(D.groundColor).multiplyScalar(Z),i.hemi[S]=J,S++}}_>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Xe.LTC_FLOAT_1,i.rectAreaLTC2=Xe.LTC_FLOAT_2):(i.rectAreaLTC1=Xe.LTC_HALF_1,i.rectAreaLTC2=Xe.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=g,i.ambient[2]=m;const C=i.hash;(C.directionalLength!==y||C.pointLength!==v||C.spotLength!==w||C.rectAreaLength!==_||C.hemiLength!==S||C.numDirectionalShadows!==b||C.numPointShadows!==T||C.numSpotShadows!==E||C.numSpotMaps!==N||C.numLightProbes!==U)&&(i.directional.length=y,i.spot.length=w,i.rectArea.length=_,i.point.length=v,i.hemi.length=S,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=E+N-A,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=U,C.directionalLength=y,C.pointLength=v,C.spotLength=w,C.rectAreaLength=_,C.hemiLength=S,C.numDirectionalShadows=b,C.numPointShadows=T,C.numSpotShadows=E,C.numSpotMaps=N,C.numLightProbes=U,i.version=OE++)}function h(f,p){let g=0,m=0,y=0,v=0,w=0;const _=p.matrixWorldInverse;for(let S=0,b=f.length;S<b;S++){const T=f[S];if(T.isDirectionalLight){const E=i.directional[g];E.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(_),g++}else if(T.isSpotLight){const E=i.spot[y];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(_),E.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(_),y++}else if(T.isRectAreaLight){const E=i.rectArea[v];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(_),c.identity(),o.copy(T.matrixWorld),o.premultiply(_),c.extractRotation(o),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(c),E.halfHeight.applyMatrix4(c),v++}else if(T.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(_),m++}else if(T.isHemisphereLight){const E=i.hemi[w];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(_),w++}}}return{setup:u,setupView:h,state:i}}function Xg(a){const e=new BE(a),t=[],i=[],s=[];function o(m){g.camera=m,t.length=0,i.length=0,s.length=0}function c(m){t.push(m)}function u(m){i.push(m)}function h(m){s.push(m)}function f(){e.setup(t)}function p(m){e.setupView(t,m)}const g={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:g,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:u,pushLightProbeGrid:h}}function HE(a){let e=new WeakMap;function t(s,o=0){const c=e.get(s);let u;return c===void 0?(u=new Xg(a),e.set(s,[u])):o>=c.length?(u=new Xg(a),c.push(u)):u=c[o],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const GE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VE=`uniform sampler2D shadow_pass;
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
}`,WE=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],XE=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],jg=new Yt,ko=new Q,df=new Q;function jE(a,e,t){let i=new Wd;const s=new ft,o=new ft,c=new sn,u=new QS,h=new JS,f={},p=t.maxTextureSize,g={[cs]:ii,[ii]:cs,[Hi]:Hi},m=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:GE,fragmentShader:VE}),y=m.clone();y.defines.HORIZONTAL_PASS=1;const v=new cn;v.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new un(v,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tc;let S=this.type;this.render=function(A,U,C){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||A.length===0)return;this.type===Ty&&(pt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Tc);const L=a.getRenderTarget(),O=a.getActiveCubeFace(),D=a.getActiveMipmapLevel(),z=a.state;z.setBlending(tr),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const Z=S!==this.type;Z&&U.traverse(function(ne){ne.material&&(Array.isArray(ne.material)?ne.material.forEach(V=>V.needsUpdate=!0):ne.material.needsUpdate=!0)});for(let ne=0,V=A.length;ne<V;ne++){const J=A[ne],$=J.shadow;if($===void 0){pt("WebGLShadowMap:",J,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const K=$.getFrameExtents();s.multiply(K),o.copy($.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(o.x=Math.floor(p/K.x),s.x=o.x*K.x,$.mapSize.x=o.x),s.y>p&&(o.y=Math.floor(p/K.y),s.y=o.y*K.y,$.mapSize.y=o.y));const se=a.state.buffers.depth.getReversed();if($.camera._reversedDepth=se,$.map===null||Z===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===zo){if(J.isPointLight){pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new ri(s.x,s.y,{format:zs,type:gi,minFilter:pn,magFilter:pn,generateMipmaps:!1}),$.map.texture.name=J.name+".shadowMap",$.map.depthTexture=new Ha(s.x,s.y,Vi),$.map.depthTexture.name=J.name+".shadowMapDepth",$.map.depthTexture.format=Rr,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Fn,$.map.depthTexture.magFilter=Fn}else J.isPointLight?($.map=new Qx(s.x),$.map.depthTexture=new jS(s.x,rr)):($.map=new ri(s.x,s.y),$.map.depthTexture=new Ha(s.x,s.y,rr)),$.map.depthTexture.name=J.name+".shadowMap",$.map.depthTexture.format=Rr,this.type===Tc?($.map.depthTexture.compareFunction=se?zd:Od,$.map.depthTexture.minFilter=pn,$.map.depthTexture.magFilter=pn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Fn,$.map.depthTexture.magFilter=Fn);$.camera.updateProjectionMatrix()}const ie=$.map.isWebGLCubeRenderTarget?6:1;for(let B=0;B<ie;B++){if($.map.isWebGLCubeRenderTarget)a.setRenderTarget($.map,B),a.clear();else{B===0&&(a.setRenderTarget($.map),a.clear());const X=$.getViewport(B);c.set(o.x*X.x,o.y*X.y,o.x*X.z,o.y*X.w),z.viewport(c)}if(J.isPointLight){const X=$.camera,ye=$.matrix,Me=J.distance||X.far;Me!==X.far&&(X.far=Me,X.updateProjectionMatrix()),ko.setFromMatrixPosition(J.matrixWorld),X.position.copy(ko),df.copy(X.position),df.add(WE[B]),X.up.copy(XE[B]),X.lookAt(df),X.updateMatrixWorld(),ye.makeTranslation(-ko.x,-ko.y,-ko.z),jg.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),$._frustum.setFromProjectionMatrix(jg,X.coordinateSystem,X.reversedDepth)}else $.updateMatrices(J);i=$.getFrustum(),E(U,C,$.camera,J,this.type)}$.isPointLightShadow!==!0&&this.type===zo&&b($,C),$.needsUpdate=!1}S=this.type,_.needsUpdate=!1,a.setRenderTarget(L,O,D)};function b(A,U){const C=e.update(w);m.defines.VSM_SAMPLES!==A.blurSamples&&(m.defines.VSM_SAMPLES=A.blurSamples,y.defines.VSM_SAMPLES=A.blurSamples,m.needsUpdate=!0,y.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ri(s.x,s.y,{format:zs,type:gi})),m.uniforms.shadow_pass.value=A.map.depthTexture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,a.setRenderTarget(A.mapPass),a.clear(),a.renderBufferDirect(U,null,C,m,w,null),y.uniforms.shadow_pass.value=A.mapPass.texture,y.uniforms.resolution.value=A.mapSize,y.uniforms.radius.value=A.radius,a.setRenderTarget(A.map),a.clear(),a.renderBufferDirect(U,null,C,y,w,null)}function T(A,U,C,L){let O=null;const D=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)O=D;else if(O=C.isPointLight===!0?h:u,a.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const z=O.uuid,Z=U.uuid;let ne=f[z];ne===void 0&&(ne={},f[z]=ne);let V=ne[Z];V===void 0&&(V=O.clone(),ne[Z]=V,U.addEventListener("dispose",N)),O=V}if(O.visible=U.visible,O.wireframe=U.wireframe,L===zo?O.side=U.shadowSide!==null?U.shadowSide:U.side:O.side=U.shadowSide!==null?U.shadowSide:g[U.side],O.alphaMap=U.alphaMap,O.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,O.map=U.map,O.clipShadows=U.clipShadows,O.clippingPlanes=U.clippingPlanes,O.clipIntersection=U.clipIntersection,O.displacementMap=U.displacementMap,O.displacementScale=U.displacementScale,O.displacementBias=U.displacementBias,O.wireframeLinewidth=U.wireframeLinewidth,O.linewidth=U.linewidth,C.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const z=a.properties.get(O);z.light=C}return O}function E(A,U,C,L,O){if(A.visible===!1)return;if(A.layers.test(U.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&O===zo)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const Z=e.update(A),ne=A.material;if(Array.isArray(ne)){const V=Z.groups;for(let J=0,$=V.length;J<$;J++){const K=V[J],se=ne[K.materialIndex];if(se&&se.visible){const ie=T(A,se,L,O);A.onBeforeShadow(a,A,U,C,Z,ie,K),a.renderBufferDirect(C,null,Z,ie,A,K),A.onAfterShadow(a,A,U,C,Z,ie,K)}}}else if(ne.visible){const V=T(A,ne,L,O);A.onBeforeShadow(a,A,U,C,Z,V,null),a.renderBufferDirect(C,null,Z,V,A,null),A.onAfterShadow(a,A,U,C,Z,V,null)}}const z=A.children;for(let Z=0,ne=z.length;Z<ne;Z++)E(z[Z],U,C,L,O)}function N(A){A.target.removeEventListener("dispose",N);for(const C in f){const L=f[C],O=A.target.uuid;O in L&&(L[O].dispose(),delete L[O])}}}function qE(a,e){function t(){let Y=!1;const Fe=new sn;let ve=null;const Ve=new sn(0,0,0,0);return{setMask:function(ke){ve!==ke&&!Y&&(a.colorMask(ke,ke,ke,ke),ve=ke)},setLocked:function(ke){Y=ke},setClear:function(ke,Ee,nt,vt,Bt){Bt===!0&&(ke*=vt,Ee*=vt,nt*=vt),Fe.set(ke,Ee,nt,vt),Ve.equals(Fe)===!1&&(a.clearColor(ke,Ee,nt,vt),Ve.copy(Fe))},reset:function(){Y=!1,ve=null,Ve.set(-1,0,0,0)}}}function i(){let Y=!1,Fe=!1,ve=null,Ve=null,ke=null;return{setReversed:function(Ee){if(Fe!==Ee){const nt=e.get("EXT_clip_control");Ee?nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.ZERO_TO_ONE_EXT):nt.clipControlEXT(nt.LOWER_LEFT_EXT,nt.NEGATIVE_ONE_TO_ONE_EXT),Fe=Ee;const vt=ke;ke=null,this.setClear(vt)}},getReversed:function(){return Fe},setTest:function(Ee){Ee?pe(a.DEPTH_TEST):me(a.DEPTH_TEST)},setMask:function(Ee){ve!==Ee&&!Y&&(a.depthMask(Ee),ve=Ee)},setFunc:function(Ee){if(Fe&&(Ee=sS[Ee]),Ve!==Ee){switch(Ee){case Cf:a.depthFunc(a.NEVER);break;case Af:a.depthFunc(a.ALWAYS);break;case Rf:a.depthFunc(a.LESS);break;case za:a.depthFunc(a.LEQUAL);break;case Pf:a.depthFunc(a.EQUAL);break;case Lf:a.depthFunc(a.GEQUAL);break;case If:a.depthFunc(a.GREATER);break;case Nf:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ve=Ee}},setLocked:function(Ee){Y=Ee},setClear:function(Ee){ke!==Ee&&(ke=Ee,Fe&&(Ee=1-Ee),a.clearDepth(Ee))},reset:function(){Y=!1,ve=null,Ve=null,ke=null,Fe=!1}}}function s(){let Y=!1,Fe=null,ve=null,Ve=null,ke=null,Ee=null,nt=null,vt=null,Bt=null;return{setTest:function(Rt){Y||(Rt?pe(a.STENCIL_TEST):me(a.STENCIL_TEST))},setMask:function(Rt){Fe!==Rt&&!Y&&(a.stencilMask(Rt),Fe=Rt)},setFunc:function(Rt,bn,Nt){(ve!==Rt||Ve!==bn||ke!==Nt)&&(a.stencilFunc(Rt,bn,Nt),ve=Rt,Ve=bn,ke=Nt)},setOp:function(Rt,bn,Nt){(Ee!==Rt||nt!==bn||vt!==Nt)&&(a.stencilOp(Rt,bn,Nt),Ee=Rt,nt=bn,vt=Nt)},setLocked:function(Rt){Y=Rt},setClear:function(Rt){Bt!==Rt&&(a.clearStencil(Rt),Bt=Rt)},reset:function(){Y=!1,Fe=null,ve=null,Ve=null,ke=null,Ee=null,nt=null,vt=null,Bt=null}}}const o=new t,c=new i,u=new s,h=new WeakMap,f=new WeakMap;let p={},g={},m={},y=new WeakMap,v=[],w=null,_=!1,S=null,b=null,T=null,E=null,N=null,A=null,U=null,C=new Je(0,0,0),L=0,O=!1,D=null,z=null,Z=null,ne=null,V=null;const J=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,K=0;const se=a.getParameter(a.VERSION);se.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(se)[1]),$=K>=1):se.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),$=K>=2);let ie=null,B={};const X=a.getParameter(a.SCISSOR_BOX),ye=a.getParameter(a.VIEWPORT),Me=new sn().fromArray(X),we=new sn().fromArray(ye);function te(Y,Fe,ve,Ve){const ke=new Uint8Array(4),Ee=a.createTexture();a.bindTexture(Y,Ee),a.texParameteri(Y,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(Y,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let nt=0;nt<ve;nt++)Y===a.TEXTURE_3D||Y===a.TEXTURE_2D_ARRAY?a.texImage3D(Fe,0,a.RGBA,1,1,Ve,0,a.RGBA,a.UNSIGNED_BYTE,ke):a.texImage2D(Fe+nt,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ke);return Ee}const xe={};xe[a.TEXTURE_2D]=te(a.TEXTURE_2D,a.TEXTURE_2D,1),xe[a.TEXTURE_CUBE_MAP]=te(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[a.TEXTURE_2D_ARRAY]=te(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),xe[a.TEXTURE_3D]=te(a.TEXTURE_3D,a.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),pe(a.DEPTH_TEST),c.setFunc(za),Et(!1),bt(k0),pe(a.CULL_FACE),dt(tr);function pe(Y){p[Y]!==!0&&(a.enable(Y),p[Y]=!0)}function me(Y){p[Y]!==!1&&(a.disable(Y),p[Y]=!1)}function Te(Y,Fe){return m[Y]!==Fe?(a.bindFramebuffer(Y,Fe),m[Y]=Fe,Y===a.DRAW_FRAMEBUFFER&&(m[a.FRAMEBUFFER]=Fe),Y===a.FRAMEBUFFER&&(m[a.DRAW_FRAMEBUFFER]=Fe),!0):!1}function Pe(Y,Fe){let ve=v,Ve=!1;if(Y){ve=y.get(Fe),ve===void 0&&(ve=[],y.set(Fe,ve));const ke=Y.textures;if(ve.length!==ke.length||ve[0]!==a.COLOR_ATTACHMENT0){for(let Ee=0,nt=ke.length;Ee<nt;Ee++)ve[Ee]=a.COLOR_ATTACHMENT0+Ee;ve.length=ke.length,Ve=!0}}else ve[0]!==a.BACK&&(ve[0]=a.BACK,Ve=!0);Ve&&a.drawBuffers(ve)}function je(Y){return w!==Y?(a.useProgram(Y),w=Y,!0):!1}const Ye={[Fs]:a.FUNC_ADD,[Ay]:a.FUNC_SUBTRACT,[Ry]:a.FUNC_REVERSE_SUBTRACT};Ye[Py]=a.MIN,Ye[Ly]=a.MAX;const $e={[Iy]:a.ZERO,[Ny]:a.ONE,[Fy]:a.SRC_COLOR,[Ef]:a.SRC_ALPHA,[By]:a.SRC_ALPHA_SATURATE,[Oy]:a.DST_COLOR,[Dy]:a.DST_ALPHA,[Uy]:a.ONE_MINUS_SRC_COLOR,[Tf]:a.ONE_MINUS_SRC_ALPHA,[zy]:a.ONE_MINUS_DST_COLOR,[ky]:a.ONE_MINUS_DST_ALPHA,[Hy]:a.CONSTANT_COLOR,[Gy]:a.ONE_MINUS_CONSTANT_COLOR,[Vy]:a.CONSTANT_ALPHA,[Wy]:a.ONE_MINUS_CONSTANT_ALPHA};function dt(Y,Fe,ve,Ve,ke,Ee,nt,vt,Bt,Rt){if(Y===tr){_===!0&&(me(a.BLEND),_=!1);return}if(_===!1&&(pe(a.BLEND),_=!0),Y!==Cy){if(Y!==S||Rt!==O){if((b!==Fs||N!==Fs)&&(a.blendEquation(a.FUNC_ADD),b=Fs,N=Fs),Rt)switch(Y){case Da:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Oa:a.blendFunc(a.ONE,a.ONE);break;case O0:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case z0:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:kt("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Da:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Oa:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case O0:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case z0:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",Y);break}T=null,E=null,A=null,U=null,C.set(0,0,0),L=0,S=Y,O=Rt}return}ke=ke||Fe,Ee=Ee||ve,nt=nt||Ve,(Fe!==b||ke!==N)&&(a.blendEquationSeparate(Ye[Fe],Ye[ke]),b=Fe,N=ke),(ve!==T||Ve!==E||Ee!==A||nt!==U)&&(a.blendFuncSeparate($e[ve],$e[Ve],$e[Ee],$e[nt]),T=ve,E=Ve,A=Ee,U=nt),(vt.equals(C)===!1||Bt!==L)&&(a.blendColor(vt.r,vt.g,vt.b,Bt),C.copy(vt),L=Bt),S=Y,O=!1}function Qe(Y,Fe){Y.side===Hi?me(a.CULL_FACE):pe(a.CULL_FACE);let ve=Y.side===ii;Fe&&(ve=!ve),Et(ve),Y.blending===Da&&Y.transparent===!1?dt(tr):dt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),c.setFunc(Y.depthFunc),c.setTest(Y.depthTest),c.setMask(Y.depthWrite),o.setMask(Y.colorWrite);const Ve=Y.stencilWrite;u.setTest(Ve),Ve&&(u.setMask(Y.stencilWriteMask),u.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),u.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),q(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?pe(a.SAMPLE_ALPHA_TO_COVERAGE):me(a.SAMPLE_ALPHA_TO_COVERAGE)}function Et(Y){D!==Y&&(Y?a.frontFace(a.CW):a.frontFace(a.CCW),D=Y)}function bt(Y){Y!==by?(pe(a.CULL_FACE),Y!==z&&(Y===k0?a.cullFace(a.BACK):Y===Ey?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):me(a.CULL_FACE),z=Y}function Xt(Y){Y!==Z&&($&&a.lineWidth(Y),Z=Y)}function q(Y,Fe,ve){Y?(pe(a.POLYGON_OFFSET_FILL),(ne!==Fe||V!==ve)&&(ne=Fe,V=ve,c.getReversed()&&(Fe=-Fe),a.polygonOffset(Fe,ve))):me(a.POLYGON_OFFSET_FILL)}function Ct(Y){Y?pe(a.SCISSOR_TEST):me(a.SCISSOR_TEST)}function gt(Y){Y===void 0&&(Y=a.TEXTURE0+J-1),ie!==Y&&(a.activeTexture(Y),ie=Y)}function yt(Y,Fe,ve){ve===void 0&&(ie===null?ve=a.TEXTURE0+J-1:ve=ie);let Ve=B[ve];Ve===void 0&&(Ve={type:void 0,texture:void 0},B[ve]=Ve),(Ve.type!==Y||Ve.texture!==Fe)&&(ie!==ve&&(a.activeTexture(ve),ie=ve),a.bindTexture(Y,Fe||xe[Y]),Ve.type=Y,Ve.texture=Fe)}function Be(){const Y=B[ie];Y!==void 0&&Y.type!==void 0&&(a.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function zt(){try{a.compressedTexImage2D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function k(){try{a.compressedTexImage3D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function R(){try{a.texSubImage2D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function re(){try{a.texSubImage3D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function _e(){try{a.compressedTexSubImage2D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function be(){try{a.compressedTexSubImage3D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function Le(){try{a.texStorage2D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function He(){try{a.texStorage3D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function ge(){try{a.texImage2D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function Se(){try{a.texImage3D(...arguments)}catch(Y){kt("WebGLState:",Y)}}function We(Y){return g[Y]!==void 0?g[Y]:a.getParameter(Y)}function qe(Y,Fe){g[Y]!==Fe&&(a.pixelStorei(Y,Fe),g[Y]=Fe)}function De(Y){Me.equals(Y)===!1&&(a.scissor(Y.x,Y.y,Y.z,Y.w),Me.copy(Y))}function Ne(Y){we.equals(Y)===!1&&(a.viewport(Y.x,Y.y,Y.z,Y.w),we.copy(Y))}function mt(Y,Fe){let ve=f.get(Fe);ve===void 0&&(ve=new WeakMap,f.set(Fe,ve));let Ve=ve.get(Y);Ve===void 0&&(Ve=a.getUniformBlockIndex(Fe,Y.name),ve.set(Y,Ve))}function xt(Y,Fe){const Ve=f.get(Fe).get(Y);h.get(Fe)!==Ve&&(a.uniformBlockBinding(Fe,Ve,Y.__bindingPointIndex),h.set(Fe,Ve))}function ct(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),c.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),p={},g={},ie=null,B={},m={},y=new WeakMap,v=[],w=null,_=!1,S=null,b=null,T=null,E=null,N=null,A=null,U=null,C=new Je(0,0,0),L=0,O=!1,D=null,z=null,Z=null,ne=null,V=null,Me.set(0,0,a.canvas.width,a.canvas.height),we.set(0,0,a.canvas.width,a.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:pe,disable:me,bindFramebuffer:Te,drawBuffers:Pe,useProgram:je,setBlending:dt,setMaterial:Qe,setFlipSided:Et,setCullFace:bt,setLineWidth:Xt,setPolygonOffset:q,setScissorTest:Ct,activeTexture:gt,bindTexture:yt,unbindTexture:Be,compressedTexImage2D:zt,compressedTexImage3D:k,texImage2D:ge,texImage3D:Se,pixelStorei:qe,getParameter:We,updateUBOMapping:mt,uniformBlockBinding:xt,texStorage2D:Le,texStorage3D:He,texSubImage2D:R,texSubImage3D:re,compressedTexSubImage2D:_e,compressedTexSubImage3D:be,scissor:De,viewport:Ne,reset:ct}}function YE(a,e,t,i,s,o,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new ft,p=new WeakMap,g=new Set;let m;const y=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(k,R){return v?new OffscreenCanvas(k,R):Oc("canvas")}function _(k,R,re){let _e=1;const be=zt(k);if((be.width>re||be.height>re)&&(_e=re/Math.max(be.width,be.height)),_e<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const Le=Math.floor(_e*be.width),He=Math.floor(_e*be.height);m===void 0&&(m=w(Le,He));const ge=R?w(Le,He):m;return ge.width=Le,ge.height=He,ge.getContext("2d").drawImage(k,0,0,Le,He),pt("WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+Le+"x"+He+")."),ge}else return"data"in k&&pt("WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),k;return k}function S(k){return k.generateMipmaps}function b(k){a.generateMipmap(k)}function T(k){return k.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?a.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function E(k,R,re,_e,be,Le=!1){if(k!==null){if(a[k]!==void 0)return a[k];pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let He;_e&&(He=e.get("EXT_texture_norm16"),He||pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=R;if(R===a.RED&&(re===a.FLOAT&&(ge=a.R32F),re===a.HALF_FLOAT&&(ge=a.R16F),re===a.UNSIGNED_BYTE&&(ge=a.R8),re===a.UNSIGNED_SHORT&&He&&(ge=He.R16_EXT),re===a.SHORT&&He&&(ge=He.R16_SNORM_EXT)),R===a.RED_INTEGER&&(re===a.UNSIGNED_BYTE&&(ge=a.R8UI),re===a.UNSIGNED_SHORT&&(ge=a.R16UI),re===a.UNSIGNED_INT&&(ge=a.R32UI),re===a.BYTE&&(ge=a.R8I),re===a.SHORT&&(ge=a.R16I),re===a.INT&&(ge=a.R32I)),R===a.RG&&(re===a.FLOAT&&(ge=a.RG32F),re===a.HALF_FLOAT&&(ge=a.RG16F),re===a.UNSIGNED_BYTE&&(ge=a.RG8),re===a.UNSIGNED_SHORT&&He&&(ge=He.RG16_EXT),re===a.SHORT&&He&&(ge=He.RG16_SNORM_EXT)),R===a.RG_INTEGER&&(re===a.UNSIGNED_BYTE&&(ge=a.RG8UI),re===a.UNSIGNED_SHORT&&(ge=a.RG16UI),re===a.UNSIGNED_INT&&(ge=a.RG32UI),re===a.BYTE&&(ge=a.RG8I),re===a.SHORT&&(ge=a.RG16I),re===a.INT&&(ge=a.RG32I)),R===a.RGB_INTEGER&&(re===a.UNSIGNED_BYTE&&(ge=a.RGB8UI),re===a.UNSIGNED_SHORT&&(ge=a.RGB16UI),re===a.UNSIGNED_INT&&(ge=a.RGB32UI),re===a.BYTE&&(ge=a.RGB8I),re===a.SHORT&&(ge=a.RGB16I),re===a.INT&&(ge=a.RGB32I)),R===a.RGBA_INTEGER&&(re===a.UNSIGNED_BYTE&&(ge=a.RGBA8UI),re===a.UNSIGNED_SHORT&&(ge=a.RGBA16UI),re===a.UNSIGNED_INT&&(ge=a.RGBA32UI),re===a.BYTE&&(ge=a.RGBA8I),re===a.SHORT&&(ge=a.RGBA16I),re===a.INT&&(ge=a.RGBA32I)),R===a.RGB&&(re===a.UNSIGNED_SHORT&&He&&(ge=He.RGB16_EXT),re===a.SHORT&&He&&(ge=He.RGB16_SNORM_EXT),re===a.UNSIGNED_INT_5_9_9_9_REV&&(ge=a.RGB9_E5),re===a.UNSIGNED_INT_10F_11F_11F_REV&&(ge=a.R11F_G11F_B10F)),R===a.RGBA){const Se=Le?kc:Ft.getTransfer(be);re===a.FLOAT&&(ge=a.RGBA32F),re===a.HALF_FLOAT&&(ge=a.RGBA16F),re===a.UNSIGNED_BYTE&&(ge=Se===Wt?a.SRGB8_ALPHA8:a.RGBA8),re===a.UNSIGNED_SHORT&&He&&(ge=He.RGBA16_EXT),re===a.SHORT&&He&&(ge=He.RGBA16_SNORM_EXT),re===a.UNSIGNED_SHORT_4_4_4_4&&(ge=a.RGBA4),re===a.UNSIGNED_SHORT_5_5_5_1&&(ge=a.RGB5_A1)}return(ge===a.R16F||ge===a.R32F||ge===a.RG16F||ge===a.RG32F||ge===a.RGBA16F||ge===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function N(k,R){let re;return k?R===null||R===rr||R===jo?re=a.DEPTH24_STENCIL8:R===Vi?re=a.DEPTH32F_STENCIL8:R===Xo&&(re=a.DEPTH24_STENCIL8,pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===rr||R===jo?re=a.DEPTH_COMPONENT24:R===Vi?re=a.DEPTH_COMPONENT32F:R===Xo&&(re=a.DEPTH_COMPONENT16),re}function A(k,R){return S(k)===!0||k.isFramebufferTexture&&k.minFilter!==Fn&&k.minFilter!==pn?Math.log2(Math.max(R.width,R.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?R.mipmaps.length:1}function U(k){const R=k.target;R.removeEventListener("dispose",U),L(R),R.isVideoTexture&&p.delete(R),R.isHTMLTexture&&g.delete(R)}function C(k){const R=k.target;R.removeEventListener("dispose",C),D(R)}function L(k){const R=i.get(k);if(R.__webglInit===void 0)return;const re=k.source,_e=y.get(re);if(_e){const be=_e[R.__cacheKey];be.usedTimes--,be.usedTimes===0&&O(k),Object.keys(_e).length===0&&y.delete(re)}i.remove(k)}function O(k){const R=i.get(k);a.deleteTexture(R.__webglTexture);const re=k.source,_e=y.get(re);delete _e[R.__cacheKey],c.memory.textures--}function D(k){const R=i.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),i.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(R.__webglFramebuffer[_e]))for(let be=0;be<R.__webglFramebuffer[_e].length;be++)a.deleteFramebuffer(R.__webglFramebuffer[_e][be]);else a.deleteFramebuffer(R.__webglFramebuffer[_e]);R.__webglDepthbuffer&&a.deleteRenderbuffer(R.__webglDepthbuffer[_e])}else{if(Array.isArray(R.__webglFramebuffer))for(let _e=0;_e<R.__webglFramebuffer.length;_e++)a.deleteFramebuffer(R.__webglFramebuffer[_e]);else a.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&a.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&a.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let _e=0;_e<R.__webglColorRenderbuffer.length;_e++)R.__webglColorRenderbuffer[_e]&&a.deleteRenderbuffer(R.__webglColorRenderbuffer[_e]);R.__webglDepthRenderbuffer&&a.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const re=k.textures;for(let _e=0,be=re.length;_e<be;_e++){const Le=i.get(re[_e]);Le.__webglTexture&&(a.deleteTexture(Le.__webglTexture),c.memory.textures--),i.remove(re[_e])}i.remove(k)}let z=0;function Z(){z=0}function ne(){return z}function V(k){z=k}function J(){const k=z;return k>=s.maxTextures&&pt("WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+s.maxTextures),z+=1,k}function $(k){const R=[];return R.push(k.wrapS),R.push(k.wrapT),R.push(k.wrapR||0),R.push(k.magFilter),R.push(k.minFilter),R.push(k.anisotropy),R.push(k.internalFormat),R.push(k.format),R.push(k.type),R.push(k.generateMipmaps),R.push(k.premultiplyAlpha),R.push(k.flipY),R.push(k.unpackAlignment),R.push(k.colorSpace),R.join()}function K(k,R){const re=i.get(k);if(k.isVideoTexture&&yt(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&re.__version!==k.version){const _e=k.image;if(_e===null)pt("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)pt("WebGLRenderer: Texture marked for update but image is incomplete");else{me(re,k,R);return}}else k.isExternalTexture&&(re.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,re.__webglTexture,a.TEXTURE0+R)}function se(k,R){const re=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&re.__version!==k.version){me(re,k,R);return}else k.isExternalTexture&&(re.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,re.__webglTexture,a.TEXTURE0+R)}function ie(k,R){const re=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&re.__version!==k.version){me(re,k,R);return}t.bindTexture(a.TEXTURE_3D,re.__webglTexture,a.TEXTURE0+R)}function B(k,R){const re=i.get(k);if(k.isCubeDepthTexture!==!0&&k.version>0&&re.__version!==k.version){Te(re,k,R);return}t.bindTexture(a.TEXTURE_CUBE_MAP,re.__webglTexture,a.TEXTURE0+R)}const X={[Ff]:a.REPEAT,[Tr]:a.CLAMP_TO_EDGE,[Uf]:a.MIRRORED_REPEAT},ye={[Fn]:a.NEAREST,[qy]:a.NEAREST_MIPMAP_NEAREST,[Ql]:a.NEAREST_MIPMAP_LINEAR,[pn]:a.LINEAR,[Uh]:a.LINEAR_MIPMAP_NEAREST,[Ds]:a.LINEAR_MIPMAP_LINEAR},Me={[Ky]:a.NEVER,[tS]:a.ALWAYS,[Zy]:a.LESS,[Od]:a.LEQUAL,[Qy]:a.EQUAL,[zd]:a.GEQUAL,[Jy]:a.GREATER,[eS]:a.NOTEQUAL};function we(k,R){if(R.type===Vi&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===pn||R.magFilter===Uh||R.magFilter===Ql||R.magFilter===Ds||R.minFilter===pn||R.minFilter===Uh||R.minFilter===Ql||R.minFilter===Ds)&&pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(k,a.TEXTURE_WRAP_S,X[R.wrapS]),a.texParameteri(k,a.TEXTURE_WRAP_T,X[R.wrapT]),(k===a.TEXTURE_3D||k===a.TEXTURE_2D_ARRAY)&&a.texParameteri(k,a.TEXTURE_WRAP_R,X[R.wrapR]),a.texParameteri(k,a.TEXTURE_MAG_FILTER,ye[R.magFilter]),a.texParameteri(k,a.TEXTURE_MIN_FILTER,ye[R.minFilter]),R.compareFunction&&(a.texParameteri(k,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(k,a.TEXTURE_COMPARE_FUNC,Me[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Fn||R.minFilter!==Ql&&R.minFilter!==Ds||R.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");a.texParameterf(k,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function te(k,R){let re=!1;k.__webglInit===void 0&&(k.__webglInit=!0,R.addEventListener("dispose",U));const _e=R.source;let be=y.get(_e);be===void 0&&(be={},y.set(_e,be));const Le=$(R);if(Le!==k.__cacheKey){be[Le]===void 0&&(be[Le]={texture:a.createTexture(),usedTimes:0},c.memory.textures++,re=!0),be[Le].usedTimes++;const He=be[k.__cacheKey];He!==void 0&&(be[k.__cacheKey].usedTimes--,He.usedTimes===0&&O(R)),k.__cacheKey=Le,k.__webglTexture=be[Le].texture}return re}function xe(k,R,re){return Math.floor(Math.floor(k/re)/R)}function pe(k,R,re,_e){const Le=k.updateRanges;if(Le.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,R.width,R.height,re,_e,R.data);else{Le.sort((qe,De)=>qe.start-De.start);let He=0;for(let qe=1;qe<Le.length;qe++){const De=Le[He],Ne=Le[qe],mt=De.start+De.count,xt=xe(Ne.start,R.width,4),ct=xe(De.start,R.width,4);Ne.start<=mt+1&&xt===ct&&xe(Ne.start+Ne.count-1,R.width,4)===xt?De.count=Math.max(De.count,Ne.start+Ne.count-De.start):(++He,Le[He]=Ne)}Le.length=He+1;const ge=t.getParameter(a.UNPACK_ROW_LENGTH),Se=t.getParameter(a.UNPACK_SKIP_PIXELS),We=t.getParameter(a.UNPACK_SKIP_ROWS);t.pixelStorei(a.UNPACK_ROW_LENGTH,R.width);for(let qe=0,De=Le.length;qe<De;qe++){const Ne=Le[qe],mt=Math.floor(Ne.start/4),xt=Math.ceil(Ne.count/4),ct=mt%R.width,Y=Math.floor(mt/R.width),Fe=xt,ve=1;t.pixelStorei(a.UNPACK_SKIP_PIXELS,ct),t.pixelStorei(a.UNPACK_SKIP_ROWS,Y),t.texSubImage2D(a.TEXTURE_2D,0,ct,Y,Fe,ve,re,_e,R.data)}k.clearUpdateRanges(),t.pixelStorei(a.UNPACK_ROW_LENGTH,ge),t.pixelStorei(a.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(a.UNPACK_SKIP_ROWS,We)}}function me(k,R,re){let _e=a.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(_e=a.TEXTURE_2D_ARRAY),R.isData3DTexture&&(_e=a.TEXTURE_3D);const be=te(k,R),Le=R.source;t.bindTexture(_e,k.__webglTexture,a.TEXTURE0+re);const He=i.get(Le);if(Le.version!==He.__version||be===!0){if(t.activeTexture(a.TEXTURE0+re),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){const ve=Ft.getPrimaries(Ft.workingColorSpace),Ve=R.colorSpace===as?null:Ft.getPrimaries(R.colorSpace),ke=R.colorSpace===as||ve===Ve?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(a.UNPACK_ALIGNMENT,R.unpackAlignment);let Se=_(R.image,!1,s.maxTextureSize);Se=Be(R,Se);const We=o.convert(R.format,R.colorSpace),qe=o.convert(R.type);let De=E(R.internalFormat,We,qe,R.normalized,R.colorSpace,R.isVideoTexture);we(_e,R);let Ne;const mt=R.mipmaps,xt=R.isVideoTexture!==!0,ct=He.__version===void 0||be===!0,Y=Le.dataReady,Fe=A(R,Se);if(R.isDepthTexture)De=N(R.format===ks,R.type),ct&&(xt?t.texStorage2D(a.TEXTURE_2D,1,De,Se.width,Se.height):t.texImage2D(a.TEXTURE_2D,0,De,Se.width,Se.height,0,We,qe,null));else if(R.isDataTexture)if(mt.length>0){xt&&ct&&t.texStorage2D(a.TEXTURE_2D,Fe,De,mt[0].width,mt[0].height);for(let ve=0,Ve=mt.length;ve<Ve;ve++)Ne=mt[ve],xt?Y&&t.texSubImage2D(a.TEXTURE_2D,ve,0,0,Ne.width,Ne.height,We,qe,Ne.data):t.texImage2D(a.TEXTURE_2D,ve,De,Ne.width,Ne.height,0,We,qe,Ne.data);R.generateMipmaps=!1}else xt?(ct&&t.texStorage2D(a.TEXTURE_2D,Fe,De,Se.width,Se.height),Y&&pe(R,Se,We,qe)):t.texImage2D(a.TEXTURE_2D,0,De,Se.width,Se.height,0,We,qe,Se.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){xt&&ct&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Fe,De,mt[0].width,mt[0].height,Se.depth);for(let ve=0,Ve=mt.length;ve<Ve;ve++)if(Ne=mt[ve],R.format!==mi)if(We!==null)if(xt){if(Y)if(R.layerUpdates.size>0){const ke=wg(Ne.width,Ne.height,R.format,R.type);for(const Ee of R.layerUpdates){const nt=Ne.data.subarray(Ee*ke/Ne.data.BYTES_PER_ELEMENT,(Ee+1)*ke/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ve,0,0,Ee,Ne.width,Ne.height,1,We,nt)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ve,0,0,0,Ne.width,Ne.height,Se.depth,We,Ne.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ve,De,Ne.width,Ne.height,Se.depth,0,Ne.data,0,0);else pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else xt?Y&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,ve,0,0,0,Ne.width,Ne.height,Se.depth,We,qe,Ne.data):t.texImage3D(a.TEXTURE_2D_ARRAY,ve,De,Ne.width,Ne.height,Se.depth,0,We,qe,Ne.data)}else{xt&&ct&&t.texStorage2D(a.TEXTURE_2D,Fe,De,mt[0].width,mt[0].height);for(let ve=0,Ve=mt.length;ve<Ve;ve++)Ne=mt[ve],R.format!==mi?We!==null?xt?Y&&t.compressedTexSubImage2D(a.TEXTURE_2D,ve,0,0,Ne.width,Ne.height,We,Ne.data):t.compressedTexImage2D(a.TEXTURE_2D,ve,De,Ne.width,Ne.height,0,Ne.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):xt?Y&&t.texSubImage2D(a.TEXTURE_2D,ve,0,0,Ne.width,Ne.height,We,qe,Ne.data):t.texImage2D(a.TEXTURE_2D,ve,De,Ne.width,Ne.height,0,We,qe,Ne.data)}else if(R.isDataArrayTexture)if(xt){if(ct&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Fe,De,Se.width,Se.height,Se.depth),Y)if(R.layerUpdates.size>0){const ve=wg(Se.width,Se.height,R.format,R.type);for(const Ve of R.layerUpdates){const ke=Se.data.subarray(Ve*ve/Se.data.BYTES_PER_ELEMENT,(Ve+1)*ve/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Ve,Se.width,Se.height,1,We,qe,ke)}R.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,We,qe,Se.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,De,Se.width,Se.height,Se.depth,0,We,qe,Se.data);else if(R.isData3DTexture)xt?(ct&&t.texStorage3D(a.TEXTURE_3D,Fe,De,Se.width,Se.height,Se.depth),Y&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,We,qe,Se.data)):t.texImage3D(a.TEXTURE_3D,0,De,Se.width,Se.height,Se.depth,0,We,qe,Se.data);else if(R.isFramebufferTexture){if(ct)if(xt)t.texStorage2D(a.TEXTURE_2D,Fe,De,Se.width,Se.height);else{let ve=Se.width,Ve=Se.height;for(let ke=0;ke<Fe;ke++)t.texImage2D(a.TEXTURE_2D,ke,De,ve,Ve,0,We,qe,null),ve>>=1,Ve>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in a){const ve=a.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),Se.parentNode!==ve){ve.appendChild(Se),g.add(R),ve.onpaint=vt=>{const Bt=vt.changedElements;for(const Rt of g)Bt.includes(Rt.image)&&(Rt.needsUpdate=!0)},ve.requestPaint();return}const Ve=0,ke=a.RGBA,Ee=a.RGBA,nt=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,Ve,ke,Ee,nt,Se),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(mt.length>0){if(xt&&ct){const ve=zt(mt[0]);t.texStorage2D(a.TEXTURE_2D,Fe,De,ve.width,ve.height)}for(let ve=0,Ve=mt.length;ve<Ve;ve++)Ne=mt[ve],xt?Y&&t.texSubImage2D(a.TEXTURE_2D,ve,0,0,We,qe,Ne):t.texImage2D(a.TEXTURE_2D,ve,De,We,qe,Ne);R.generateMipmaps=!1}else if(xt){if(ct){const ve=zt(Se);t.texStorage2D(a.TEXTURE_2D,Fe,De,ve.width,ve.height)}Y&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,We,qe,Se)}else t.texImage2D(a.TEXTURE_2D,0,De,We,qe,Se);S(R)&&b(_e),He.__version=Le.version,R.onUpdate&&R.onUpdate(R)}k.__version=R.version}function Te(k,R,re){if(R.image.length!==6)return;const _e=te(k,R),be=R.source;t.bindTexture(a.TEXTURE_CUBE_MAP,k.__webglTexture,a.TEXTURE0+re);const Le=i.get(be);if(be.version!==Le.__version||_e===!0){t.activeTexture(a.TEXTURE0+re);const He=Ft.getPrimaries(Ft.workingColorSpace),ge=R.colorSpace===as?null:Ft.getPrimaries(R.colorSpace),Se=R.colorSpace===as||He===ge?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(a.UNPACK_ALIGNMENT,R.unpackAlignment),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const We=R.isCompressedTexture||R.image[0].isCompressedTexture,qe=R.image[0]&&R.image[0].isDataTexture,De=[];for(let Ee=0;Ee<6;Ee++)!We&&!qe?De[Ee]=_(R.image[Ee],!0,s.maxCubemapSize):De[Ee]=qe?R.image[Ee].image:R.image[Ee],De[Ee]=Be(R,De[Ee]);const Ne=De[0],mt=o.convert(R.format,R.colorSpace),xt=o.convert(R.type),ct=E(R.internalFormat,mt,xt,R.normalized,R.colorSpace),Y=R.isVideoTexture!==!0,Fe=Le.__version===void 0||_e===!0,ve=be.dataReady;let Ve=A(R,Ne);we(a.TEXTURE_CUBE_MAP,R);let ke;if(We){Y&&Fe&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Ve,ct,Ne.width,Ne.height);for(let Ee=0;Ee<6;Ee++){ke=De[Ee].mipmaps;for(let nt=0;nt<ke.length;nt++){const vt=ke[nt];R.format!==mi?mt!==null?Y?ve&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,nt,0,0,vt.width,vt.height,mt,vt.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,nt,ct,vt.width,vt.height,0,vt.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?ve&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,nt,0,0,vt.width,vt.height,mt,xt,vt.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,nt,ct,vt.width,vt.height,0,mt,xt,vt.data)}}}else{if(ke=R.mipmaps,Y&&Fe){ke.length>0&&Ve++;const Ee=zt(De[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,Ve,ct,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(qe){Y?ve&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,De[Ee].width,De[Ee].height,mt,xt,De[Ee].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ct,De[Ee].width,De[Ee].height,0,mt,xt,De[Ee].data);for(let nt=0;nt<ke.length;nt++){const Bt=ke[nt].image[Ee].image;Y?ve&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,nt+1,0,0,Bt.width,Bt.height,mt,xt,Bt.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,nt+1,ct,Bt.width,Bt.height,0,mt,xt,Bt.data)}}else{Y?ve&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,mt,xt,De[Ee]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ct,mt,xt,De[Ee]);for(let nt=0;nt<ke.length;nt++){const vt=ke[nt];Y?ve&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,nt+1,0,0,mt,xt,vt.image[Ee]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,nt+1,ct,mt,xt,vt.image[Ee])}}}S(R)&&b(a.TEXTURE_CUBE_MAP),Le.__version=be.version,R.onUpdate&&R.onUpdate(R)}k.__version=R.version}function Pe(k,R,re,_e,be,Le){const He=o.convert(re.format,re.colorSpace),ge=o.convert(re.type),Se=E(re.internalFormat,He,ge,re.normalized,re.colorSpace),We=i.get(R),qe=i.get(re);if(qe.__renderTarget=R,!We.__hasExternalTextures){const De=Math.max(1,R.width>>Le),Ne=Math.max(1,R.height>>Le);be===a.TEXTURE_3D||be===a.TEXTURE_2D_ARRAY?t.texImage3D(be,Le,Se,De,Ne,R.depth,0,He,ge,null):t.texImage2D(be,Le,Se,De,Ne,0,He,ge,null)}t.bindFramebuffer(a.FRAMEBUFFER,k),gt(R)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,_e,be,qe.__webglTexture,0,Ct(R)):(be===a.TEXTURE_2D||be>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,_e,be,qe.__webglTexture,Le),t.bindFramebuffer(a.FRAMEBUFFER,null)}function je(k,R,re){if(a.bindRenderbuffer(a.RENDERBUFFER,k),R.depthBuffer){const _e=R.depthTexture,be=_e&&_e.isDepthTexture?_e.type:null,Le=N(R.stencilBuffer,be),He=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;gt(R)?u.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ct(R),Le,R.width,R.height):re?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ct(R),Le,R.width,R.height):a.renderbufferStorage(a.RENDERBUFFER,Le,R.width,R.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,He,a.RENDERBUFFER,k)}else{const _e=R.textures;for(let be=0;be<_e.length;be++){const Le=_e[be],He=o.convert(Le.format,Le.colorSpace),ge=o.convert(Le.type),Se=E(Le.internalFormat,He,ge,Le.normalized,Le.colorSpace);gt(R)?u.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ct(R),Se,R.width,R.height):re?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ct(R),Se,R.width,R.height):a.renderbufferStorage(a.RENDERBUFFER,Se,R.width,R.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Ye(k,R,re){const _e=R.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,k),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const be=i.get(R.depthTexture);if(be.__renderTarget=R,(!be.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),_e){if(be.__webglInit===void 0&&(be.__webglInit=!0,R.depthTexture.addEventListener("dispose",U)),be.__webglTexture===void 0){be.__webglTexture=a.createTexture(),t.bindTexture(a.TEXTURE_CUBE_MAP,be.__webglTexture),we(a.TEXTURE_CUBE_MAP,R.depthTexture);const We=o.convert(R.depthTexture.format),qe=o.convert(R.depthTexture.type);let De;R.depthTexture.format===Rr?De=a.DEPTH_COMPONENT24:R.depthTexture.format===ks&&(De=a.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,De,R.width,R.height,0,We,qe,null)}}else K(R.depthTexture,0);const Le=be.__webglTexture,He=Ct(R),ge=_e?a.TEXTURE_CUBE_MAP_POSITIVE_X+re:a.TEXTURE_2D,Se=R.depthTexture.format===ks?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(R.depthTexture.format===Rr)gt(R)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Se,ge,Le,0,He):a.framebufferTexture2D(a.FRAMEBUFFER,Se,ge,Le,0);else if(R.depthTexture.format===ks)gt(R)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Se,ge,Le,0,He):a.framebufferTexture2D(a.FRAMEBUFFER,Se,ge,Le,0);else throw new Error("Unknown depthTexture format")}function $e(k){const R=i.get(k),re=k.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==k.depthTexture){const _e=k.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),_e){const be=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,_e.removeEventListener("dispose",be)};_e.addEventListener("dispose",be),R.__depthDisposeCallback=be}R.__boundDepthTexture=_e}if(k.depthTexture&&!R.__autoAllocateDepthBuffer)if(re)for(let _e=0;_e<6;_e++)Ye(R.__webglFramebuffer[_e],k,_e);else{const _e=k.texture.mipmaps;_e&&_e.length>0?Ye(R.__webglFramebuffer[0],k,0):Ye(R.__webglFramebuffer,k,0)}else if(re){R.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(a.FRAMEBUFFER,R.__webglFramebuffer[_e]),R.__webglDepthbuffer[_e]===void 0)R.__webglDepthbuffer[_e]=a.createRenderbuffer(),je(R.__webglDepthbuffer[_e],k,!1);else{const be=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Le=R.__webglDepthbuffer[_e];a.bindRenderbuffer(a.RENDERBUFFER,Le),a.framebufferRenderbuffer(a.FRAMEBUFFER,be,a.RENDERBUFFER,Le)}}else{const _e=k.texture.mipmaps;if(_e&&_e.length>0?t.bindFramebuffer(a.FRAMEBUFFER,R.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=a.createRenderbuffer(),je(R.__webglDepthbuffer,k,!1);else{const be=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Le=R.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Le),a.framebufferRenderbuffer(a.FRAMEBUFFER,be,a.RENDERBUFFER,Le)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function dt(k,R,re){const _e=i.get(k);R!==void 0&&Pe(_e.__webglFramebuffer,k,k.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),re!==void 0&&$e(k)}function Qe(k){const R=k.texture,re=i.get(k),_e=i.get(R);k.addEventListener("dispose",C);const be=k.textures,Le=k.isWebGLCubeRenderTarget===!0,He=be.length>1;if(He||(_e.__webglTexture===void 0&&(_e.__webglTexture=a.createTexture()),_e.__version=R.version,c.memory.textures++),Le){re.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(R.mipmaps&&R.mipmaps.length>0){re.__webglFramebuffer[ge]=[];for(let Se=0;Se<R.mipmaps.length;Se++)re.__webglFramebuffer[ge][Se]=a.createFramebuffer()}else re.__webglFramebuffer[ge]=a.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){re.__webglFramebuffer=[];for(let ge=0;ge<R.mipmaps.length;ge++)re.__webglFramebuffer[ge]=a.createFramebuffer()}else re.__webglFramebuffer=a.createFramebuffer();if(He)for(let ge=0,Se=be.length;ge<Se;ge++){const We=i.get(be[ge]);We.__webglTexture===void 0&&(We.__webglTexture=a.createTexture(),c.memory.textures++)}if(k.samples>0&&gt(k)===!1){re.__webglMultisampledFramebuffer=a.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let ge=0;ge<be.length;ge++){const Se=be[ge];re.__webglColorRenderbuffer[ge]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,re.__webglColorRenderbuffer[ge]);const We=o.convert(Se.format,Se.colorSpace),qe=o.convert(Se.type),De=E(Se.internalFormat,We,qe,Se.normalized,Se.colorSpace,k.isXRRenderTarget===!0),Ne=Ct(k);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ne,De,k.width,k.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ge,a.RENDERBUFFER,re.__webglColorRenderbuffer[ge])}a.bindRenderbuffer(a.RENDERBUFFER,null),k.depthBuffer&&(re.__webglDepthRenderbuffer=a.createRenderbuffer(),je(re.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Le){t.bindTexture(a.TEXTURE_CUBE_MAP,_e.__webglTexture),we(a.TEXTURE_CUBE_MAP,R);for(let ge=0;ge<6;ge++)if(R.mipmaps&&R.mipmaps.length>0)for(let Se=0;Se<R.mipmaps.length;Se++)Pe(re.__webglFramebuffer[ge][Se],k,R,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Se);else Pe(re.__webglFramebuffer[ge],k,R,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);S(R)&&b(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(He){for(let ge=0,Se=be.length;ge<Se;ge++){const We=be[ge],qe=i.get(We);let De=a.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(De=k.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(De,qe.__webglTexture),we(De,We),Pe(re.__webglFramebuffer,k,We,a.COLOR_ATTACHMENT0+ge,De,0),S(We)&&b(De)}t.unbindTexture()}else{let ge=a.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(ge=k.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(ge,_e.__webglTexture),we(ge,R),R.mipmaps&&R.mipmaps.length>0)for(let Se=0;Se<R.mipmaps.length;Se++)Pe(re.__webglFramebuffer[Se],k,R,a.COLOR_ATTACHMENT0,ge,Se);else Pe(re.__webglFramebuffer,k,R,a.COLOR_ATTACHMENT0,ge,0);S(R)&&b(ge),t.unbindTexture()}k.depthBuffer&&$e(k)}function Et(k){const R=k.textures;for(let re=0,_e=R.length;re<_e;re++){const be=R[re];if(S(be)){const Le=T(k),He=i.get(be).__webglTexture;t.bindTexture(Le,He),b(Le),t.unbindTexture()}}}const bt=[],Xt=[];function q(k){if(k.samples>0){if(gt(k)===!1){const R=k.textures,re=k.width,_e=k.height;let be=a.COLOR_BUFFER_BIT;const Le=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,He=i.get(k),ge=R.length>1;if(ge)for(let We=0;We<R.length;We++)t.bindFramebuffer(a.FRAMEBUFFER,He.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+We,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,He.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+We,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,He.__webglMultisampledFramebuffer);const Se=k.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,He.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,He.__webglFramebuffer);for(let We=0;We<R.length;We++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(be|=a.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(be|=a.STENCIL_BUFFER_BIT)),ge){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,He.__webglColorRenderbuffer[We]);const qe=i.get(R[We]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,qe,0)}a.blitFramebuffer(0,0,re,_e,0,0,re,_e,be,a.NEAREST),h===!0&&(bt.length=0,Xt.length=0,bt.push(a.COLOR_ATTACHMENT0+We),k.depthBuffer&&k.resolveDepthBuffer===!1&&(bt.push(Le),Xt.push(Le),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,Xt)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,bt))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ge)for(let We=0;We<R.length;We++){t.bindFramebuffer(a.FRAMEBUFFER,He.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+We,a.RENDERBUFFER,He.__webglColorRenderbuffer[We]);const qe=i.get(R[We]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,He.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+We,a.TEXTURE_2D,qe,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,He.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&h){const R=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[R])}}}function Ct(k){return Math.min(s.maxSamples,k.samples)}function gt(k){const R=i.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function yt(k){const R=c.render.frame;p.get(k)!==R&&(p.set(k,R),k.update())}function Be(k,R){const re=k.colorSpace,_e=k.format,be=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||re!==Dc&&re!==as&&(Ft.getTransfer(re)===Wt?(_e!==mi||be!==pi)&&pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",re)),R}function zt(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(f.width=k.naturalWidth||k.width,f.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(f.width=k.displayWidth,f.height=k.displayHeight):(f.width=k.width,f.height=k.height),f}this.allocateTextureUnit=J,this.resetTextureUnits=Z,this.getTextureUnits=ne,this.setTextureUnits=V,this.setTexture2D=K,this.setTexture2DArray=se,this.setTexture3D=ie,this.setTextureCube=B,this.rebindTextures=dt,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function $E(a,e){function t(i,s=as){let o;const c=Ft.getTransfer(s);if(i===pi)return a.UNSIGNED_BYTE;if(i===Id)return a.UNSIGNED_SHORT_4_4_4_4;if(i===Nd)return a.UNSIGNED_SHORT_5_5_5_1;if(i===Ix)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===Nx)return a.UNSIGNED_INT_10F_11F_11F_REV;if(i===Px)return a.BYTE;if(i===Lx)return a.SHORT;if(i===Xo)return a.UNSIGNED_SHORT;if(i===Ld)return a.INT;if(i===rr)return a.UNSIGNED_INT;if(i===Vi)return a.FLOAT;if(i===gi)return a.HALF_FLOAT;if(i===Fx)return a.ALPHA;if(i===Ux)return a.RGB;if(i===mi)return a.RGBA;if(i===Rr)return a.DEPTH_COMPONENT;if(i===ks)return a.DEPTH_STENCIL;if(i===Fd)return a.RED;if(i===Ud)return a.RED_INTEGER;if(i===zs)return a.RG;if(i===Dd)return a.RG_INTEGER;if(i===kd)return a.RGBA_INTEGER;if(i===Cc||i===Ac||i===Rc||i===Pc)if(c===Wt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Cc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ac)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Cc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ac)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Df||i===kf||i===Of||i===zf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Df)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===kf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Of)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===zf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Bf||i===Hf||i===Gf||i===Vf||i===Wf||i===Nc||i===Xf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Bf||i===Hf)return c===Wt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Gf)return c===Wt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===Vf)return o.COMPRESSED_R11_EAC;if(i===Wf)return o.COMPRESSED_SIGNED_R11_EAC;if(i===Nc)return o.COMPRESSED_RG11_EAC;if(i===Xf)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===jf||i===qf||i===Yf||i===$f||i===Kf||i===Zf||i===Qf||i===Jf||i===ed||i===td||i===nd||i===id||i===rd||i===sd)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===jf)return c===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qf)return c===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Yf)return c===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===$f)return c===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Kf)return c===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zf)return c===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Qf)return c===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jf)return c===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ed)return c===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===td)return c===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nd)return c===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===id)return c===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rd)return c===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sd)return c===Wt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ad||i===od||i===ld)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===ad)return c===Wt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===od)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ld)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cd||i===ud||i===Fc||i===hd)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===cd)return o.COMPRESSED_RED_RGTC1_EXT;if(i===ud)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Fc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hd)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===jo?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:t}}const KE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZE=`
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

}`;class QE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Wx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ln({vertexShader:KE,fragmentShader:ZE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new un(new Lr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JE extends Hs{constructor(e,t){super();const i=this;let s=null,o=1,c=null,u="local-floor",h=1,f=null,p=null,g=null,m=null,y=null,v=null;const w=typeof XRWebGLBinding<"u",_=new QE,S={},b=t.getContextAttributes();let T=null,E=null;const N=[],A=[],U=new ft;let C=null;const L=new Pn;L.viewport=new sn;const O=new Pn;O.viewport=new sn;const D=[L,O],z=new oM;let Z=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let xe=N[te];return xe===void 0&&(xe=new Hh,N[te]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(te){let xe=N[te];return xe===void 0&&(xe=new Hh,N[te]=xe),xe.getGripSpace()},this.getHand=function(te){let xe=N[te];return xe===void 0&&(xe=new Hh,N[te]=xe),xe.getHandSpace()};function V(te){const xe=A.indexOf(te.inputSource);if(xe===-1)return;const pe=N[xe];pe!==void 0&&(pe.update(te.inputSource,te.frame,f||c),pe.dispatchEvent({type:te.type,data:te.inputSource}))}function J(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",$);for(let te=0;te<N.length;te++){const xe=A[te];xe!==null&&(A[te]=null,N[te].disconnect(xe))}Z=null,ne=null,_.reset();for(const te in S)delete S[te];e.setRenderTarget(T),y=null,m=null,g=null,s=null,E=null,we.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){o=te,i.isPresenting===!0&&pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){u=te,i.isPresenting===!0&&pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(te){f=te},this.getBaseLayer=function(){return m!==null?m:y},this.getBinding=function(){return g===null&&w&&(g=new XRWebGLBinding(s,t)),g},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",J),s.addEventListener("inputsourceschange",$),b.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(U),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,me=null,Te=null;b.depth&&(Te=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=b.stencil?ks:Rr,me=b.stencil?jo:rr);const Pe={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:o};g=this.getBinding(),m=g.createProjectionLayer(Pe),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),E=new ri(m.textureWidth,m.textureHeight,{format:mi,type:pi,depthTexture:new Ha(m.textureWidth,m.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const pe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),E=new ri(y.framebufferWidth,y.framebufferHeight,{format:mi,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(h),f=null,c=await s.requestReferenceSpace(u),we.setContext(s),we.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(te){for(let xe=0;xe<te.removed.length;xe++){const pe=te.removed[xe],me=A.indexOf(pe);me>=0&&(A[me]=null,N[me].disconnect(pe))}for(let xe=0;xe<te.added.length;xe++){const pe=te.added[xe];let me=A.indexOf(pe);if(me===-1){for(let Pe=0;Pe<N.length;Pe++)if(Pe>=A.length){A.push(pe),me=Pe;break}else if(A[Pe]===null){A[Pe]=pe,me=Pe;break}if(me===-1)break}const Te=N[me];Te&&Te.connect(pe)}}const K=new Q,se=new Q;function ie(te,xe,pe){K.setFromMatrixPosition(xe.matrixWorld),se.setFromMatrixPosition(pe.matrixWorld);const me=K.distanceTo(se),Te=xe.projectionMatrix.elements,Pe=pe.projectionMatrix.elements,je=Te[14]/(Te[10]-1),Ye=Te[14]/(Te[10]+1),$e=(Te[9]+1)/Te[5],dt=(Te[9]-1)/Te[5],Qe=(Te[8]-1)/Te[0],Et=(Pe[8]+1)/Pe[0],bt=je*Qe,Xt=je*Et,q=me/(-Qe+Et),Ct=q*-Qe;if(xe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ct),te.translateZ(q),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Te[10]===-1)te.projectionMatrix.copy(xe.projectionMatrix),te.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const gt=je+q,yt=Ye+q,Be=bt-Ct,zt=Xt+(me-Ct),k=$e*Ye/yt*gt,R=dt*Ye/yt*gt;te.projectionMatrix.makePerspective(Be,zt,k,R,gt,yt),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function B(te,xe){xe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(xe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let xe=te.near,pe=te.far;_.texture!==null&&(_.depthNear>0&&(xe=_.depthNear),_.depthFar>0&&(pe=_.depthFar)),z.near=O.near=L.near=xe,z.far=O.far=L.far=pe,(Z!==z.near||ne!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),Z=z.near,ne=z.far),z.layers.mask=te.layers.mask|6,L.layers.mask=z.layers.mask&-5,O.layers.mask=z.layers.mask&-3;const me=te.parent,Te=z.cameras;B(z,me);for(let Pe=0;Pe<Te.length;Pe++)B(Te[Pe],me);Te.length===2?ie(z,L,O):z.projectionMatrix.copy(L.projectionMatrix),X(te,z,me)};function X(te,xe,pe){pe===null?te.matrix.copy(xe.matrixWorld):(te.matrix.copy(pe.matrixWorld),te.matrix.invert(),te.matrix.multiply(xe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(xe.projectionMatrix),te.projectionMatrixInverse.copy(xe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Yo*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(m===null&&y===null))return h},this.setFoveation=function(te){h=te,m!==null&&(m.fixedFoveation=te),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=te)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(z)},this.getCameraTexture=function(te){return S[te]};let ye=null;function Me(te,xe){if(p=xe.getViewerPose(f||c),v=xe,p!==null){const pe=p.views;y!==null&&(e.setRenderTargetFramebuffer(E,y.framebuffer),e.setRenderTarget(E));let me=!1;pe.length!==z.cameras.length&&(z.cameras.length=0,me=!0);for(let Ye=0;Ye<pe.length;Ye++){const $e=pe[Ye];let dt=null;if(y!==null)dt=y.getViewport($e);else{const Et=g.getViewSubImage(m,$e);dt=Et.viewport,Ye===0&&(e.setRenderTargetTextures(E,Et.colorTexture,Et.depthStencilTexture),e.setRenderTarget(E))}let Qe=D[Ye];Qe===void 0&&(Qe=new Pn,Qe.layers.enable(Ye),Qe.viewport=new sn,D[Ye]=Qe),Qe.matrix.fromArray($e.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray($e.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(dt.x,dt.y,dt.width,dt.height),Ye===0&&(z.matrix.copy(Qe.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),me===!0&&z.cameras.push(Qe)}const Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){g=i.getBinding();const Ye=g.getDepthInformation(pe[0]);Ye&&Ye.isValid&&Ye.texture&&_.init(Ye,s.renderState)}if(Te&&Te.includes("camera-access")&&w){e.state.unbindTexture(),g=i.getBinding();for(let Ye=0;Ye<pe.length;Ye++){const $e=pe[Ye].camera;if($e){let dt=S[$e];dt||(dt=new Wx,S[$e]=dt);const Qe=g.getCameraImage($e);dt.sourceTexture=Qe}}}}for(let pe=0;pe<N.length;pe++){const me=A[pe],Te=N[pe];me!==null&&Te!==void 0&&Te.update(me,xe,f||c)}ye&&ye(te,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),v=null}const we=new Kx;we.setAnimationLoop(Me),this.setAnimationLoop=function(te){ye=te},this.dispose=function(){}}}const eT=new Yt,iv=new wt;iv.set(-1,0,0,0,1,0,0,0,1);function tT(a,e){function t(_,S){_.matrixAutoUpdate===!0&&_.updateMatrix(),S.value.copy(_.matrix)}function i(_,S){S.color.getRGB(_.fogColor.value,Xx(a)),S.isFog?(_.fogNear.value=S.near,_.fogFar.value=S.far):S.isFogExp2&&(_.fogDensity.value=S.density)}function s(_,S,b,T,E){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?o(_,S):S.isMeshLambertMaterial?(o(_,S),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(o(_,S),g(_,S)):S.isMeshPhongMaterial?(o(_,S),p(_,S),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(o(_,S),m(_,S),S.isMeshPhysicalMaterial&&y(_,S,E)):S.isMeshMatcapMaterial?(o(_,S),v(_,S)):S.isMeshDepthMaterial?o(_,S):S.isMeshDistanceMaterial?(o(_,S),w(_,S)):S.isMeshNormalMaterial?o(_,S):S.isLineBasicMaterial?(c(_,S),S.isLineDashedMaterial&&u(_,S)):S.isPointsMaterial?h(_,S,b,T):S.isSpriteMaterial?f(_,S):S.isShadowMaterial?(_.color.value.copy(S.color),_.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function o(_,S){_.opacity.value=S.opacity,S.color&&_.diffuse.value.copy(S.color),S.emissive&&_.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(_.map.value=S.map,t(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.bumpMap&&(_.bumpMap.value=S.bumpMap,t(S.bumpMap,_.bumpMapTransform),_.bumpScale.value=S.bumpScale,S.side===ii&&(_.bumpScale.value*=-1)),S.normalMap&&(_.normalMap.value=S.normalMap,t(S.normalMap,_.normalMapTransform),_.normalScale.value.copy(S.normalScale),S.side===ii&&_.normalScale.value.negate()),S.displacementMap&&(_.displacementMap.value=S.displacementMap,t(S.displacementMap,_.displacementMapTransform),_.displacementScale.value=S.displacementScale,_.displacementBias.value=S.displacementBias),S.emissiveMap&&(_.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,_.emissiveMapTransform)),S.specularMap&&(_.specularMap.value=S.specularMap,t(S.specularMap,_.specularMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest);const b=e.get(S),T=b.envMap,E=b.envMapRotation;T&&(_.envMap.value=T,_.envMapRotation.value.setFromMatrix4(eT.makeRotationFromEuler(E)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(iv),_.reflectivity.value=S.reflectivity,_.ior.value=S.ior,_.refractionRatio.value=S.refractionRatio),S.lightMap&&(_.lightMap.value=S.lightMap,_.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,_.lightMapTransform)),S.aoMap&&(_.aoMap.value=S.aoMap,_.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,_.aoMapTransform))}function c(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,S.map&&(_.map.value=S.map,t(S.map,_.mapTransform))}function u(_,S){_.dashSize.value=S.dashSize,_.totalSize.value=S.dashSize+S.gapSize,_.scale.value=S.scale}function h(_,S,b,T){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.size.value=S.size*b,_.scale.value=T*.5,S.map&&(_.map.value=S.map,t(S.map,_.uvTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function f(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.rotation.value=S.rotation,S.map&&(_.map.value=S.map,t(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function p(_,S){_.specular.value.copy(S.specular),_.shininess.value=Math.max(S.shininess,1e-4)}function g(_,S){S.gradientMap&&(_.gradientMap.value=S.gradientMap)}function m(_,S){_.metalness.value=S.metalness,S.metalnessMap&&(_.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,_.metalnessMapTransform)),_.roughness.value=S.roughness,S.roughnessMap&&(_.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,_.roughnessMapTransform)),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)}function y(_,S,b){_.ior.value=S.ior,S.sheen>0&&(_.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),_.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(_.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,_.sheenColorMapTransform)),S.sheenRoughnessMap&&(_.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,_.sheenRoughnessMapTransform))),S.clearcoat>0&&(_.clearcoat.value=S.clearcoat,_.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(_.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,_.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(_.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ii&&_.clearcoatNormalScale.value.negate())),S.dispersion>0&&(_.dispersion.value=S.dispersion),S.iridescence>0&&(_.iridescence.value=S.iridescence,_.iridescenceIOR.value=S.iridescenceIOR,_.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(_.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,_.iridescenceMapTransform)),S.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),S.transmission>0&&(_.transmission.value=S.transmission,_.transmissionSamplerMap.value=b.texture,_.transmissionSamplerSize.value.set(b.width,b.height),S.transmissionMap&&(_.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,_.transmissionMapTransform)),_.thickness.value=S.thickness,S.thicknessMap&&(_.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=S.attenuationDistance,_.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(_.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(_.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=S.specularIntensity,_.specularColor.value.copy(S.specularColor),S.specularColorMap&&(_.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,_.specularColorMapTransform)),S.specularIntensityMap&&(_.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,S){S.matcap&&(_.matcap.value=S.matcap)}function w(_,S){const b=e.get(S).light;_.referencePosition.value.setFromMatrixPosition(b.matrixWorld),_.nearDistance.value=b.shadow.camera.near,_.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function nT(a,e,t,i){let s={},o={},c=[];const u=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function h(b,T){const E=T.program;i.uniformBlockBinding(b,E)}function f(b,T){let E=s[b.id];E===void 0&&(v(b),E=p(b),s[b.id]=E,b.addEventListener("dispose",_));const N=T.program;i.updateUBOMapping(b,N);const A=e.render.frame;o[b.id]!==A&&(m(b),o[b.id]=A)}function p(b){const T=g();b.__bindingPointIndex=T;const E=a.createBuffer(),N=b.__size,A=b.usage;return a.bindBuffer(a.UNIFORM_BUFFER,E),a.bufferData(a.UNIFORM_BUFFER,N,A),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,T,E),E}function g(){for(let b=0;b<u;b++)if(c.indexOf(b)===-1)return c.push(b),b;return kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(b){const T=s[b.id],E=b.uniforms,N=b.__cache;a.bindBuffer(a.UNIFORM_BUFFER,T);for(let A=0,U=E.length;A<U;A++){const C=Array.isArray(E[A])?E[A]:[E[A]];for(let L=0,O=C.length;L<O;L++){const D=C[L];if(y(D,A,L,N)===!0){const z=D.__offset,Z=Array.isArray(D.value)?D.value:[D.value];let ne=0;for(let V=0;V<Z.length;V++){const J=Z[V],$=w(J);typeof J=="number"||typeof J=="boolean"?(D.__data[0]=J,a.bufferSubData(a.UNIFORM_BUFFER,z+ne,D.__data)):J.isMatrix3?(D.__data[0]=J.elements[0],D.__data[1]=J.elements[1],D.__data[2]=J.elements[2],D.__data[3]=0,D.__data[4]=J.elements[3],D.__data[5]=J.elements[4],D.__data[6]=J.elements[5],D.__data[7]=0,D.__data[8]=J.elements[6],D.__data[9]=J.elements[7],D.__data[10]=J.elements[8],D.__data[11]=0):ArrayBuffer.isView(J)?D.__data.set(new J.constructor(J.buffer,J.byteOffset,D.__data.length)):(J.toArray(D.__data,ne),ne+=$.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,z,D.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function y(b,T,E,N){const A=b.value,U=T+"_"+E;if(N[U]===void 0)return typeof A=="number"||typeof A=="boolean"?N[U]=A:ArrayBuffer.isView(A)?N[U]=A.slice():N[U]=A.clone(),!0;{const C=N[U];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return N[U]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(C.equals(A)===!1)return C.copy(A),!0}}return!1}function v(b){const T=b.uniforms;let E=0;const N=16;for(let U=0,C=T.length;U<C;U++){const L=Array.isArray(T[U])?T[U]:[T[U]];for(let O=0,D=L.length;O<D;O++){const z=L[O],Z=Array.isArray(z.value)?z.value:[z.value];for(let ne=0,V=Z.length;ne<V;ne++){const J=Z[ne],$=w(J),K=E%N,se=K%$.boundary,ie=K+se;E+=se,ie!==0&&N-ie<$.storage&&(E+=N-ie),z.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=E,E+=$.storage}}}const A=E%N;return A>0&&(E+=N-A),b.__size=E,b.__cache={},this}function w(b){const T={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(T.boundary=4,T.storage=4):b.isVector2?(T.boundary=8,T.storage=8):b.isVector3||b.isColor?(T.boundary=16,T.storage=12):b.isVector4?(T.boundary=16,T.storage=16):b.isMatrix3?(T.boundary=48,T.storage=48):b.isMatrix4?(T.boundary=64,T.storage=64):b.isTexture?pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(T.boundary=16,T.storage=b.byteLength):pt("WebGLRenderer: Unsupported uniform value type.",b),T}function _(b){const T=b.target;T.removeEventListener("dispose",_);const E=c.indexOf(T.__bindingPointIndex);c.splice(E,1),a.deleteBuffer(s[T.id]),delete s[T.id],delete o[T.id]}function S(){for(const b in s)a.deleteBuffer(s[b]);c=[],s={},o={}}return{bind:h,update:f,dispose:S}}const iT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zi=null;function rT(){return Zi===null&&(Zi=new Vd(iT,16,16,zs,gi),Zi.name="DFG_LUT",Zi.minFilter=pn,Zi.magFilter=pn,Zi.wrapS=Tr,Zi.wrapT=Tr,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}class hs{constructor(e={}){const{canvas:t=iS(),context:i=null,depth:s=!0,stencil:o=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:m=!1,outputBufferType:y=pi}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=c;const w=y,_=new Set([kd,Dd,Ud]),S=new Set([pi,rr,Xo,jo,Id,Nd]),b=new Uint32Array(4),T=new Int32Array(4),E=new Q;let N=null,A=null;const U=[],C=[];let L=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let D=!1,z=null;this._outputColorSpace=di;let Z=0,ne=0,V=null,J=-1,$=null;const K=new sn,se=new sn;let ie=null;const B=new Je(0);let X=0,ye=t.width,Me=t.height,we=1,te=null,xe=null;const pe=new sn(0,0,ye,Me),me=new sn(0,0,ye,Me);let Te=!1;const Pe=new Wd;let je=!1,Ye=!1;const $e=new Yt,dt=new Q,Qe=new sn,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function Xt(){return V===null?we:1}let q=i;function Ct(P,W){return t.getContext(P,W)}try{const P={alpha:!0,depth:s,stencil:o,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rd}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",nt,!1),t.addEventListener("webglcontextcreationerror",vt,!1),q===null){const W="webgl2";if(q=Ct(W,P),q===null)throw Ct(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw kt("WebGLRenderer: "+P.message),P}let gt,yt,Be,zt,k,R,re,_e,be,Le,He,ge,Se,We,qe,De,Ne,mt,xt,ct,Y,Fe,ve;function Ve(){gt=new r2(q),gt.init(),Y=new $E(q,gt),yt=new Kb(q,gt,e,Y),Be=new qE(q,gt),yt.reversedDepthBuffer&&m&&Be.buffers.depth.setReversed(!0),zt=new o2(q),k=new NE,R=new YE(q,gt,Be,k,yt,Y,zt),re=new i2(O),_e=new hM(q),Fe=new Yb(q,_e),be=new s2(q,_e,zt,Fe),Le=new c2(q,be,_e,Fe,zt),mt=new l2(q,yt,R),qe=new Zb(k),He=new IE(O,re,gt,yt,Fe,qe),ge=new tT(O,k),Se=new UE,We=new HE(gt),Ne=new qb(O,re,Be,Le,v,h),De=new jE(O,Le,yt),ve=new nT(q,zt,yt,Be),xt=new $b(q,gt,zt),ct=new a2(q,gt,zt),zt.programs=He.programs,O.capabilities=yt,O.extensions=gt,O.properties=k,O.renderLists=Se,O.shadowMap=De,O.state=Be,O.info=zt}Ve(),w!==pi&&(L=new h2(w,t.width,t.height,s,o));const ke=new JE(O,q);this.xr=ke,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const P=gt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=gt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(P){P!==void 0&&(we=P,this.setSize(ye,Me,!1))},this.getSize=function(P){return P.set(ye,Me)},this.setSize=function(P,W,he=!0){if(ke.isPresenting){pt("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=P,Me=W,t.width=Math.floor(P*we),t.height=Math.floor(W*we),he===!0&&(t.style.width=P+"px",t.style.height=W+"px"),L!==null&&L.setSize(t.width,t.height),this.setViewport(0,0,P,W)},this.getDrawingBufferSize=function(P){return P.set(ye*we,Me*we).floor()},this.setDrawingBufferSize=function(P,W,he){ye=P,Me=W,we=he,t.width=Math.floor(P*he),t.height=Math.floor(W*he),this.setViewport(0,0,P,W)},this.setEffects=function(P){if(w===pi){kt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let W=0;W<P.length;W++)if(P[W].isOutputPass===!0){pt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(K)},this.getViewport=function(P){return P.copy(pe)},this.setViewport=function(P,W,he,ce){P.isVector4?pe.set(P.x,P.y,P.z,P.w):pe.set(P,W,he,ce),Be.viewport(K.copy(pe).multiplyScalar(we).round())},this.getScissor=function(P){return P.copy(me)},this.setScissor=function(P,W,he,ce){P.isVector4?me.set(P.x,P.y,P.z,P.w):me.set(P,W,he,ce),Be.scissor(se.copy(me).multiplyScalar(we).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(P){Be.setScissorTest(Te=P)},this.setOpaqueSort=function(P){te=P},this.setTransparentSort=function(P){xe=P},this.getClearColor=function(P){return P.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(P=!0,W=!0,he=!0){let ce=0;if(P){let oe=!1;if(V!==null){const Ge=V.texture.format;oe=_.has(Ge)}if(oe){const Ge=V.texture.type,et=S.has(Ge),ze=Ne.getClearColor(),rt=Ne.getClearAlpha(),lt=ze.r,St=ze.g,Mt=ze.b;et?(b[0]=lt,b[1]=St,b[2]=Mt,b[3]=rt,q.clearBufferuiv(q.COLOR,0,b)):(T[0]=lt,T[1]=St,T[2]=Mt,T[3]=rt,q.clearBufferiv(q.COLOR,0,T))}else ce|=q.COLOR_BUFFER_BIT}W&&(ce|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(ce|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&q.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),z=P},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",nt,!1),t.removeEventListener("webglcontextcreationerror",vt,!1),Ne.dispose(),Se.dispose(),We.dispose(),k.dispose(),re.dispose(),Le.dispose(),Fe.dispose(),ve.dispose(),He.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",ar),ke.removeEventListener("sessionend",Gn),Ci.stop()};function Ee(P){P.preventDefault(),W0("WebGLRenderer: Context Lost."),D=!0}function nt(){W0("WebGLRenderer: Context Restored."),D=!1;const P=zt.autoReset,W=De.enabled,he=De.autoUpdate,ce=De.needsUpdate,oe=De.type;Ve(),zt.autoReset=P,De.enabled=W,De.autoUpdate=he,De.needsUpdate=ce,De.type=oe}function vt(P){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Bt(P){const W=P.target;W.removeEventListener("dispose",Bt),Rt(W)}function Rt(P){bn(P),k.remove(P)}function bn(P){const W=k.get(P).programs;W!==void 0&&(W.forEach(function(he){He.releaseProgram(he)}),P.isShaderMaterial&&He.releaseShaderCache(P))}this.renderBufferDirect=function(P,W,he,ce,oe,Ge){W===null&&(W=Et);const et=oe.isMesh&&oe.matrixWorld.determinant()<0,ze=Ws(P,W,he,ce,oe);Be.setMaterial(ce,et);let rt=he.index,lt=1;if(ce.wireframe===!0){if(rt=be.getWireframeAttribute(he),rt===void 0)return;lt=2}const St=he.drawRange,Mt=he.attributes.position;let at=St.start*lt,Ut=(St.start+St.count)*lt;Ge!==null&&(at=Math.max(at,Ge.start*lt),Ut=Math.min(Ut,(Ge.start+Ge.count)*lt)),rt!==null?(at=Math.max(at,0),Ut=Math.min(Ut,rt.count)):Mt!=null&&(at=Math.max(at,0),Ut=Math.min(Ut,Mt.count));const jt=Ut-at;if(jt<0||jt===1/0)return;Fe.setup(oe,ce,ze,he,rt);let Jt,Gt=xt;if(rt!==null&&(Jt=_e.get(rt),Gt=ct,Gt.setIndex(Jt)),oe.isMesh)ce.wireframe===!0?(Be.setLineWidth(ce.wireframeLinewidth*Xt()),Gt.setMode(q.LINES)):Gt.setMode(q.TRIANGLES);else if(oe.isLine){let hn=ce.linewidth;hn===void 0&&(hn=1),Be.setLineWidth(hn*Xt()),oe.isLineSegments?Gt.setMode(q.LINES):oe.isLineLoop?Gt.setMode(q.LINE_LOOP):Gt.setMode(q.LINE_STRIP)}else oe.isPoints?Gt.setMode(q.POINTS):oe.isSprite&&Gt.setMode(q.TRIANGLES);if(oe.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))Gt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{const hn=oe._multiDrawStarts,Ke=oe._multiDrawCounts,Ln=oe._multiDrawCount,At=rt?_e.get(rt).bytesPerElement:1,Yn=k.get(ce).currentProgram.getUniforms();for(let $n=0;$n<Ln;$n++)Yn.setValue(q,"_gl_DrawID",$n),Gt.render(hn[$n]/At,Ke[$n])}else if(oe.isInstancedMesh)Gt.renderInstances(at,jt,oe.count);else if(he.isInstancedBufferGeometry){const hn=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,Ke=Math.min(he.instanceCount,hn);Gt.renderInstances(at,jt,Ke)}else Gt.render(at,jt)};function Nt(P,W,he){P.transparent===!0&&P.side===Hi&&P.forceSinglePass===!1?(P.side=ii,P.needsUpdate=!0,lr(P,W,he),P.side=cs,P.needsUpdate=!0,lr(P,W,he),P.side=Hi):lr(P,W,he)}this.compile=function(P,W,he=null){he===null&&(he=P),A=We.get(he),A.init(W),C.push(A),he.traverseVisible(function(oe){oe.isLight&&oe.layers.test(W.layers)&&(A.pushLight(oe),oe.castShadow&&A.pushShadow(oe))}),P!==he&&P.traverseVisible(function(oe){oe.isLight&&oe.layers.test(W.layers)&&(A.pushLight(oe),oe.castShadow&&A.pushShadow(oe))}),A.setupLights();const ce=new Set;return P.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;const Ge=oe.material;if(Ge)if(Array.isArray(Ge))for(let et=0;et<Ge.length;et++){const ze=Ge[et];Nt(ze,he,oe),ce.add(ze)}else Nt(Ge,he,oe),ce.add(Ge)}),A=C.pop(),ce},this.compileAsync=function(P,W,he=null){const ce=this.compile(P,W,he);return new Promise(oe=>{function Ge(){if(ce.forEach(function(et){k.get(et).currentProgram.isReady()&&ce.delete(et)}),ce.size===0){oe(P);return}setTimeout(Ge,10)}gt.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let Ti=null;function sr(P){Ti&&Ti(P)}function ar(){Ci.stop()}function Gn(){Ci.start()}const Ci=new Kx;Ci.setAnimationLoop(sr),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(P){Ti=P,ke.setAnimationLoop(P),P===null?Ci.stop():Ci.start()},ke.addEventListener("sessionstart",ar),ke.addEventListener("sessionend",Gn),this.render=function(P,W){if(W!==void 0&&W.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;z!==null&&z.renderStart(P,W);const he=ke.enabled===!0&&ke.isPresenting===!0,ce=L!==null&&(V===null||he)&&L.begin(O,V);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(W),W=ke.getCamera()),P.isScene===!0&&P.onBeforeRender(O,P,W,V),A=We.get(P,C.length),A.init(W),A.state.textureUnits=R.getTextureUnits(),C.push(A),$e.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Pe.setFromProjectionMatrix($e,Ji,W.reversedDepth),Ye=this.localClippingEnabled,je=qe.init(this.clippingPlanes,Ye),N=Se.get(P,U.length),N.init(),U.push(N),ke.enabled===!0&&ke.isPresenting===!0){const et=O.xr.getDepthSensingMesh();et!==null&&Ir(et,W,-1/0,O.sortObjects)}Ir(P,W,0,O.sortObjects),N.finish(),O.sortObjects===!0&&N.sort(te,xe),bt=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,bt&&Ne.addToRenderList(N,P),this.info.render.frame++,je===!0&&qe.beginShadows();const oe=A.state.shadowsArray;if(De.render(oe,P,W),je===!0&&qe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ce&&L.hasRenderPass())===!1){const et=N.opaque,ze=N.transmissive;if(A.setupLights(),W.isArrayCamera){const rt=W.cameras;if(ze.length>0)for(let lt=0,St=rt.length;lt<St;lt++){const Mt=rt[lt];si(et,ze,P,Mt)}bt&&Ne.render(P);for(let lt=0,St=rt.length;lt<St;lt++){const Mt=rt[lt];fs(N,P,Mt,Mt.viewport)}}else ze.length>0&&si(et,ze,P,W),bt&&Ne.render(P),fs(N,P,W)}V!==null&&ne===0&&(R.updateMultisampleRenderTarget(V),R.updateRenderTargetMipmap(V)),ce&&L.end(O),P.isScene===!0&&P.onAfterRender(O,P,W),Fe.resetDefaultState(),J=-1,$=null,C.pop(),C.length>0?(A=C[C.length-1],R.setTextureUnits(A.state.textureUnits),je===!0&&qe.setGlobalState(O.clippingPlanes,A.state.camera)):A=null,U.pop(),U.length>0?N=U[U.length-1]:N=null,z!==null&&z.renderEnd()};function Ir(P,W,he,ce){if(P.visible===!1)return;if(P.layers.test(W.layers)){if(P.isGroup)he=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(W);else if(P.isLightProbeGrid)A.pushLightProbeGrid(P);else if(P.isLight)A.pushLight(P),P.castShadow&&A.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Pe.intersectsSprite(P)){ce&&Qe.setFromMatrixPosition(P.matrixWorld).applyMatrix4($e);const et=Le.update(P),ze=P.material;ze.visible&&N.push(P,et,ze,he,Qe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Pe.intersectsObject(P))){const et=Le.update(P),ze=P.material;if(ce&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Qe.copy(P.boundingSphere.center)):(et.boundingSphere===null&&et.computeBoundingSphere(),Qe.copy(et.boundingSphere.center)),Qe.applyMatrix4(P.matrixWorld).applyMatrix4($e)),Array.isArray(ze)){const rt=et.groups;for(let lt=0,St=rt.length;lt<St;lt++){const Mt=rt[lt],at=ze[Mt.materialIndex];at&&at.visible&&N.push(P,et,at,he,Qe.z,Mt)}}else ze.visible&&N.push(P,et,ze,he,Qe.z,null)}}const Ge=P.children;for(let et=0,ze=Ge.length;et<ze;et++)Ir(Ge[et],W,he,ce)}function fs(P,W,he,ce){const{opaque:oe,transmissive:Ge,transparent:et}=P;A.setupLightsView(he),je===!0&&qe.setGlobalState(O.clippingPlanes,he),ce&&Be.viewport(K.copy(ce)),oe.length>0&&or(oe,W,he),Ge.length>0&&or(Ge,W,he),et.length>0&&or(et,W,he),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function si(P,W,he,ce){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[ce.id]===void 0){const at=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[ce.id]=new ri(1,1,{generateMipmaps:!0,type:at?gi:pi,minFilter:Ds,samples:Math.max(4,yt.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ft.workingColorSpace})}const Ge=A.state.transmissionRenderTarget[ce.id],et=ce.viewport||K;Ge.setSize(et.z*O.transmissionResolutionScale,et.w*O.transmissionResolutionScale);const ze=O.getRenderTarget(),rt=O.getActiveCubeFace(),lt=O.getActiveMipmapLevel();O.setRenderTarget(Ge),O.getClearColor(B),X=O.getClearAlpha(),X<1&&O.setClearColor(16777215,.5),O.clear(),bt&&Ne.render(he);const St=O.toneMapping;O.toneMapping=nr;const Mt=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),A.setupLightsView(ce),je===!0&&qe.setGlobalState(O.clippingPlanes,ce),or(P,he,ce),R.updateMultisampleRenderTarget(Ge),R.updateRenderTargetMipmap(Ge),gt.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Ut=0,jt=W.length;Ut<jt;Ut++){const Jt=W[Ut],{object:Gt,geometry:hn,material:Ke,group:Ln}=Jt;if(Ke.side===Hi&&Gt.layers.test(ce.layers)){const At=Ke.side;Ke.side=ii,Ke.needsUpdate=!0,Nr(Gt,he,ce,hn,Ke,Ln),Ke.side=At,Ke.needsUpdate=!0,at=!0}}at===!0&&(R.updateMultisampleRenderTarget(Ge),R.updateRenderTargetMipmap(Ge))}O.setRenderTarget(ze,rt,lt),O.setClearColor(B,X),Mt!==void 0&&(ce.viewport=Mt),O.toneMapping=St}function or(P,W,he){const ce=W.isScene===!0?W.overrideMaterial:null;for(let oe=0,Ge=P.length;oe<Ge;oe++){const et=P[oe],{object:ze,geometry:rt,group:lt}=et;let St=et.material;St.allowOverride===!0&&ce!==null&&(St=ce),ze.layers.test(he.layers)&&Nr(ze,W,he,rt,St,lt)}}function Nr(P,W,he,ce,oe,Ge){P.onBeforeRender(O,W,he,ce,oe,Ge),P.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),oe.onBeforeRender(O,W,he,ce,P,Ge),oe.transparent===!0&&oe.side===Hi&&oe.forceSinglePass===!1?(oe.side=ii,oe.needsUpdate=!0,O.renderBufferDirect(he,W,ce,oe,P,Ge),oe.side=cs,oe.needsUpdate=!0,O.renderBufferDirect(he,W,ce,oe,P,Ge),oe.side=Hi):O.renderBufferDirect(he,W,ce,oe,P,Ge),P.onAfterRender(O,W,he,ce,oe,Ge)}function lr(P,W,he){W.isScene!==!0&&(W=Et);const ce=k.get(P),oe=A.state.lights,Ge=A.state.shadowsArray,et=oe.state.version,ze=He.getParameters(P,oe.state,Ge,W,he,A.state.lightProbeGridArray),rt=He.getProgramCacheKey(ze);let lt=ce.programs;ce.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?W.environment:null,ce.fog=W.fog;const St=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;ce.envMap=re.get(P.envMap||ce.environment,St),ce.envMapRotation=ce.environment!==null&&P.envMap===null?W.environmentRotation:P.envMapRotation,lt===void 0&&(P.addEventListener("dispose",Bt),lt=new Map,ce.programs=lt);let Mt=lt.get(rt);if(Mt!==void 0){if(ce.currentProgram===Mt&&ce.lightsStateVersion===et)return cr(P,ze),Mt}else ze.uniforms=He.getUniforms(P),z!==null&&P.isNodeMaterial&&z.build(P,he,ze),P.onBeforeCompile(ze,O),Mt=He.acquireProgram(ze,rt),lt.set(rt,Mt),ce.uniforms=ze.uniforms;const at=ce.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(at.clippingPlanes=qe.uniform),cr(P,ze),ce.needsLights=Xs(P),ce.lightsStateVersion=et,ce.needsLights&&(at.ambientLightColor.value=oe.state.ambient,at.lightProbe.value=oe.state.probe,at.directionalLights.value=oe.state.directional,at.directionalLightShadows.value=oe.state.directionalShadow,at.spotLights.value=oe.state.spot,at.spotLightShadows.value=oe.state.spotShadow,at.rectAreaLights.value=oe.state.rectArea,at.ltc_1.value=oe.state.rectAreaLTC1,at.ltc_2.value=oe.state.rectAreaLTC2,at.pointLights.value=oe.state.point,at.pointLightShadows.value=oe.state.pointShadow,at.hemisphereLights.value=oe.state.hemi,at.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,at.spotLightMatrix.value=oe.state.spotLightMatrix,at.spotLightMap.value=oe.state.spotLightMap,at.pointShadowMatrix.value=oe.state.pointShadowMatrix),ce.lightProbeGrid=A.state.lightProbeGridArray.length>0,ce.currentProgram=Mt,ce.uniformsList=null,Mt}function ds(P){if(P.uniformsList===null){const W=P.currentProgram.getUniforms();P.uniformsList=Lc.seqWithValue(W.seq,P.uniforms)}return P.uniformsList}function cr(P,W){const he=k.get(P);he.outputColorSpace=W.outputColorSpace,he.batching=W.batching,he.batchingColor=W.batchingColor,he.instancing=W.instancing,he.instancingColor=W.instancingColor,he.instancingMorph=W.instancingMorph,he.skinning=W.skinning,he.morphTargets=W.morphTargets,he.morphNormals=W.morphNormals,he.morphColors=W.morphColors,he.morphTargetsCount=W.morphTargetsCount,he.numClippingPlanes=W.numClippingPlanes,he.numIntersection=W.numClipIntersection,he.vertexAlphas=W.vertexAlphas,he.vertexTangents=W.vertexTangents,he.toneMapping=W.toneMapping}function Ai(P,W){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;E.setFromMatrixPosition(W.matrixWorld);for(let he=0,ce=P.length;he<ce;he++){const oe=P[he];if(oe.texture!==null&&oe.boundingBox.containsPoint(E))return oe}return null}function Ws(P,W,he,ce,oe){W.isScene!==!0&&(W=Et),R.resetTextureUnits();const Ge=W.fog,et=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?W.environment:null,ze=V===null?O.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Ft.workingColorSpace,rt=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,lt=re.get(ce.envMap||et,rt),St=ce.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,Mt=!!he.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),at=!!he.morphAttributes.position,Ut=!!he.morphAttributes.normal,jt=!!he.morphAttributes.color;let Jt=nr;ce.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Jt=O.toneMapping);const Gt=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,hn=Gt!==void 0?Gt.length:0,Ke=k.get(ce),Ln=A.state.lights;if(je===!0&&(Ye===!0||P!==$)){const Vt=P===$&&ce.id===J;qe.setState(ce,P,Vt)}let At=!1;ce.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Ln.state.version||Ke.outputColorSpace!==ze||oe.isBatchedMesh&&Ke.batching===!1||!oe.isBatchedMesh&&Ke.batching===!0||oe.isBatchedMesh&&Ke.batchingColor===!0&&oe.colorTexture===null||oe.isBatchedMesh&&Ke.batchingColor===!1&&oe.colorTexture!==null||oe.isInstancedMesh&&Ke.instancing===!1||!oe.isInstancedMesh&&Ke.instancing===!0||oe.isSkinnedMesh&&Ke.skinning===!1||!oe.isSkinnedMesh&&Ke.skinning===!0||oe.isInstancedMesh&&Ke.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&Ke.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&Ke.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&Ke.instancingMorph===!1&&oe.morphTexture!==null||Ke.envMap!==lt||ce.fog===!0&&Ke.fog!==Ge||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==qe.numPlanes||Ke.numIntersection!==qe.numIntersection)||Ke.vertexAlphas!==St||Ke.vertexTangents!==Mt||Ke.morphTargets!==at||Ke.morphNormals!==Ut||Ke.morphColors!==jt||Ke.toneMapping!==Jt||Ke.morphTargetsCount!==hn||!!Ke.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(At=!0):(At=!0,Ke.__version=ce.version);let Yn=Ke.currentProgram;At===!0&&(Yn=lr(ce,W,oe),z&&ce.isNodeMaterial&&z.onUpdateProgram(ce,Yn,Ke));let $n=!1,Pt=!1,ur=!1;const Ht=Yn.getUniforms(),$t=Ke.uniforms;if(Be.useProgram(Yn.program)&&($n=!0,Pt=!0,ur=!0),ce.id!==J&&(J=ce.id,Pt=!0),Ke.needsLights){const Vt=Ai(A.state.lightProbeGridArray,oe);Ke.lightProbeGrid!==Vt&&(Ke.lightProbeGrid=Vt,Pt=!0)}if($n||$!==P){Be.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Ht.setValue(q,"projectionMatrix",P.projectionMatrix),Ht.setValue(q,"viewMatrix",P.matrixWorldInverse);const Pi=Ht.map.cameraPosition;Pi!==void 0&&Pi.setValue(q,dt.setFromMatrixPosition(P.matrixWorld)),yt.logarithmicDepthBuffer&&Ht.setValue(q,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Ht.setValue(q,"isOrthographic",P.isOrthographicCamera===!0),$!==P&&($=P,Pt=!0,ur=!0)}if(Ke.needsLights&&(Ln.state.directionalShadowMap.length>0&&Ht.setValue(q,"directionalShadowMap",Ln.state.directionalShadowMap,R),Ln.state.spotShadowMap.length>0&&Ht.setValue(q,"spotShadowMap",Ln.state.spotShadowMap,R),Ln.state.pointShadowMap.length>0&&Ht.setValue(q,"pointShadowMap",Ln.state.pointShadowMap,R)),oe.isSkinnedMesh){Ht.setOptional(q,oe,"bindMatrix"),Ht.setOptional(q,oe,"bindMatrixInverse");const Vt=oe.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),Ht.setValue(q,"boneTexture",Vt.boneTexture,R))}oe.isBatchedMesh&&(Ht.setOptional(q,oe,"batchingTexture"),Ht.setValue(q,"batchingTexture",oe._matricesTexture,R),Ht.setOptional(q,oe,"batchingIdTexture"),Ht.setValue(q,"batchingIdTexture",oe._indirectTexture,R),Ht.setOptional(q,oe,"batchingColorTexture"),oe._colorsTexture!==null&&Ht.setValue(q,"batchingColorTexture",oe._colorsTexture,R));const Ri=he.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&mt.update(oe,he,Yn),(Pt||Ke.receiveShadow!==oe.receiveShadow)&&(Ke.receiveShadow=oe.receiveShadow,Ht.setValue(q,"receiveShadow",oe.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&W.environment!==null&&($t.envMapIntensity.value=W.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=rT()),Pt){if(Ht.setValue(q,"toneMappingExposure",O.toneMappingExposure),Ke.needsLights&&$a($t,ur),Ge&&ce.fog===!0&&ge.refreshFogUniforms($t,Ge),ge.refreshMaterialUniforms($t,ce,we,Me,A.state.transmissionRenderTarget[P.id]),Ke.needsLights&&Ke.lightProbeGrid){const Vt=Ke.lightProbeGrid;$t.probesSH.value=Vt.texture,$t.probesMin.value.copy(Vt.boundingBox.min),$t.probesMax.value.copy(Vt.boundingBox.max),$t.probesResolution.value.copy(Vt.resolution)}Lc.upload(q,ds(Ke),$t,R)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Lc.upload(q,ds(Ke),$t,R),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Ht.setValue(q,"center",oe.center),Ht.setValue(q,"modelViewMatrix",oe.modelViewMatrix),Ht.setValue(q,"normalMatrix",oe.normalMatrix),Ht.setValue(q,"modelMatrix",oe.matrixWorld),ce.uniformsGroups!==void 0){const Vt=ce.uniformsGroups;for(let Pi=0,Xi=Vt.length;Pi<Xi;Pi++){const ps=Vt[Pi];ve.update(ps,Yn),ve.bind(ps,Yn)}}return Yn}function $a(P,W){P.ambientLightColor.needsUpdate=W,P.lightProbe.needsUpdate=W,P.directionalLights.needsUpdate=W,P.directionalLightShadows.needsUpdate=W,P.pointLights.needsUpdate=W,P.pointLightShadows.needsUpdate=W,P.spotLights.needsUpdate=W,P.spotLightShadows.needsUpdate=W,P.rectAreaLights.needsUpdate=W,P.hemisphereLights.needsUpdate=W}function Xs(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return ne},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(P,W,he){const ce=k.get(P);ce.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),k.get(P.texture).__webglTexture=W,k.get(P.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:he,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,W){const he=k.get(P);he.__webglFramebuffer=W,he.__useDefaultFramebuffer=W===void 0};const fe=q.createFramebuffer();this.setRenderTarget=function(P,W=0,he=0){V=P,Z=W,ne=he;let ce=null,oe=!1,Ge=!1;if(P){const ze=k.get(P);if(ze.__useDefaultFramebuffer!==void 0){Be.bindFramebuffer(q.FRAMEBUFFER,ze.__webglFramebuffer),K.copy(P.viewport),se.copy(P.scissor),ie=P.scissorTest,Be.viewport(K),Be.scissor(se),Be.setScissorTest(ie),J=-1;return}else if(ze.__webglFramebuffer===void 0)R.setupRenderTarget(P);else if(ze.__hasExternalTextures)R.rebindTextures(P,k.get(P.texture).__webglTexture,k.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const St=P.depthTexture;if(ze.__boundDepthTexture!==St){if(St!==null&&k.has(St)&&(P.width!==St.image.width||P.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(P)}}const rt=P.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Ge=!0);const lt=k.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(lt[W])?ce=lt[W][he]:ce=lt[W],oe=!0):P.samples>0&&R.useMultisampledRTT(P)===!1?ce=k.get(P).__webglMultisampledFramebuffer:Array.isArray(lt)?ce=lt[he]:ce=lt,K.copy(P.viewport),se.copy(P.scissor),ie=P.scissorTest}else K.copy(pe).multiplyScalar(we).floor(),se.copy(me).multiplyScalar(we).floor(),ie=Te;if(he!==0&&(ce=fe),Be.bindFramebuffer(q.FRAMEBUFFER,ce)&&Be.drawBuffers(P,ce),Be.viewport(K),Be.scissor(se),Be.setScissorTest(ie),oe){const ze=k.get(P.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+W,ze.__webglTexture,he)}else if(Ge){const ze=W;for(let rt=0;rt<P.textures.length;rt++){const lt=k.get(P.textures[rt]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+rt,lt.__webglTexture,he,ze)}}else if(P!==null&&he!==0){const ze=k.get(P.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,ze.__webglTexture,he)}J=-1},this.readRenderTargetPixels=function(P,W,he,ce,oe,Ge,et,ze=0){if(!(P&&P.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let rt=k.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&et!==void 0&&(rt=rt[et]),rt){Be.bindFramebuffer(q.FRAMEBUFFER,rt);try{const lt=P.textures[ze],St=lt.format,Mt=lt.type;if(P.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+ze),!yt.textureFormatReadable(St)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Mt)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=P.width-ce&&he>=0&&he<=P.height-oe&&q.readPixels(W,he,ce,oe,Y.convert(St),Y.convert(Mt),Ge)}finally{const lt=V!==null?k.get(V).__webglFramebuffer:null;Be.bindFramebuffer(q.FRAMEBUFFER,lt)}}},this.readRenderTargetPixelsAsync=async function(P,W,he,ce,oe,Ge,et,ze=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let rt=k.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&et!==void 0&&(rt=rt[et]),rt)if(W>=0&&W<=P.width-ce&&he>=0&&he<=P.height-oe){Be.bindFramebuffer(q.FRAMEBUFFER,rt);const lt=P.textures[ze],St=lt.format,Mt=lt.type;if(P.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+ze),!yt.textureFormatReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const at=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,at),q.bufferData(q.PIXEL_PACK_BUFFER,Ge.byteLength,q.STREAM_READ),q.readPixels(W,he,ce,oe,Y.convert(St),Y.convert(Mt),0);const Ut=V!==null?k.get(V).__webglFramebuffer:null;Be.bindFramebuffer(q.FRAMEBUFFER,Ut);const jt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await rS(q,jt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,at),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Ge),q.deleteBuffer(at),q.deleteSync(jt),Ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,W=null,he=0){const ce=Math.pow(2,-he),oe=Math.floor(P.image.width*ce),Ge=Math.floor(P.image.height*ce),et=W!==null?W.x:0,ze=W!==null?W.y:0;R.setTexture2D(P,0),q.copyTexSubImage2D(q.TEXTURE_2D,he,0,0,et,ze,oe,Ge),Be.unbindTexture()};const Ie=q.createFramebuffer(),Oe=q.createFramebuffer();this.copyTextureToTexture=function(P,W,he=null,ce=null,oe=0,Ge=0){let et,ze,rt,lt,St,Mt,at,Ut,jt;const Jt=P.isCompressedTexture?P.mipmaps[Ge]:P.image;if(he!==null)et=he.max.x-he.min.x,ze=he.max.y-he.min.y,rt=he.isBox3?he.max.z-he.min.z:1,lt=he.min.x,St=he.min.y,Mt=he.isBox3?he.min.z:0;else{const $t=Math.pow(2,-oe);et=Math.floor(Jt.width*$t),ze=Math.floor(Jt.height*$t),P.isDataArrayTexture?rt=Jt.depth:P.isData3DTexture?rt=Math.floor(Jt.depth*$t):rt=1,lt=0,St=0,Mt=0}ce!==null?(at=ce.x,Ut=ce.y,jt=ce.z):(at=0,Ut=0,jt=0);const Gt=Y.convert(W.format),hn=Y.convert(W.type);let Ke;W.isData3DTexture?(R.setTexture3D(W,0),Ke=q.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(R.setTexture2DArray(W,0),Ke=q.TEXTURE_2D_ARRAY):(R.setTexture2D(W,0),Ke=q.TEXTURE_2D),Be.activeTexture(q.TEXTURE0),Be.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,W.flipY),Be.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),Be.pixelStorei(q.UNPACK_ALIGNMENT,W.unpackAlignment);const Ln=Be.getParameter(q.UNPACK_ROW_LENGTH),At=Be.getParameter(q.UNPACK_IMAGE_HEIGHT),Yn=Be.getParameter(q.UNPACK_SKIP_PIXELS),$n=Be.getParameter(q.UNPACK_SKIP_ROWS),Pt=Be.getParameter(q.UNPACK_SKIP_IMAGES);Be.pixelStorei(q.UNPACK_ROW_LENGTH,Jt.width),Be.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Jt.height),Be.pixelStorei(q.UNPACK_SKIP_PIXELS,lt),Be.pixelStorei(q.UNPACK_SKIP_ROWS,St),Be.pixelStorei(q.UNPACK_SKIP_IMAGES,Mt);const ur=P.isDataArrayTexture||P.isData3DTexture,Ht=W.isDataArrayTexture||W.isData3DTexture;if(P.isDepthTexture){const $t=k.get(P),Ri=k.get(W),Vt=k.get($t.__renderTarget),Pi=k.get(Ri.__renderTarget);Be.bindFramebuffer(q.READ_FRAMEBUFFER,Vt.__webglFramebuffer),Be.bindFramebuffer(q.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let Xi=0;Xi<rt;Xi++)ur&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,k.get(P).__webglTexture,oe,Mt+Xi),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,k.get(W).__webglTexture,Ge,jt+Xi)),q.blitFramebuffer(lt,St,et,ze,at,Ut,et,ze,q.DEPTH_BUFFER_BIT,q.NEAREST);Be.bindFramebuffer(q.READ_FRAMEBUFFER,null),Be.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(oe!==0||P.isRenderTargetTexture||k.has(P)){const $t=k.get(P),Ri=k.get(W);Be.bindFramebuffer(q.READ_FRAMEBUFFER,Ie),Be.bindFramebuffer(q.DRAW_FRAMEBUFFER,Oe);for(let Vt=0;Vt<rt;Vt++)ur?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,$t.__webglTexture,oe,Mt+Vt):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,$t.__webglTexture,oe),Ht?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ri.__webglTexture,Ge,jt+Vt):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ri.__webglTexture,Ge),oe!==0?q.blitFramebuffer(lt,St,et,ze,at,Ut,et,ze,q.COLOR_BUFFER_BIT,q.NEAREST):Ht?q.copyTexSubImage3D(Ke,Ge,at,Ut,jt+Vt,lt,St,et,ze):q.copyTexSubImage2D(Ke,Ge,at,Ut,lt,St,et,ze);Be.bindFramebuffer(q.READ_FRAMEBUFFER,null),Be.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Ht?P.isDataTexture||P.isData3DTexture?q.texSubImage3D(Ke,Ge,at,Ut,jt,et,ze,rt,Gt,hn,Jt.data):W.isCompressedArrayTexture?q.compressedTexSubImage3D(Ke,Ge,at,Ut,jt,et,ze,rt,Gt,Jt.data):q.texSubImage3D(Ke,Ge,at,Ut,jt,et,ze,rt,Gt,hn,Jt):P.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Ge,at,Ut,et,ze,Gt,hn,Jt.data):P.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Ge,at,Ut,Jt.width,Jt.height,Gt,Jt.data):q.texSubImage2D(q.TEXTURE_2D,Ge,at,Ut,et,ze,Gt,hn,Jt);Be.pixelStorei(q.UNPACK_ROW_LENGTH,Ln),Be.pixelStorei(q.UNPACK_IMAGE_HEIGHT,At),Be.pixelStorei(q.UNPACK_SKIP_PIXELS,Yn),Be.pixelStorei(q.UNPACK_SKIP_ROWS,$n),Be.pixelStorei(q.UNPACK_SKIP_IMAGES,Pt),Ge===0&&W.generateMipmaps&&q.generateMipmap(Ke),Be.unbindTexture()},this.initRenderTarget=function(P){k.get(P).__webglFramebuffer===void 0&&R.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?R.setTextureCube(P,0):P.isData3DTexture?R.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?R.setTexture2DArray(P,0):R.setTexture2D(P,0),Be.unbindTexture()},this.resetState=function(){Z=0,ne=0,V=null,Be.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ft._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ft._getUnpackColorSpace()}}class sT{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"threeCanvas");F(this,"scene");F(this,"camera");F(this,"renderer");F(this,"videoTexture",null);F(this,"videoElement",null);F(this,"plane",null);F(this,"time",0);F(this,"uniforms");F(this,"targetAmplitude",.3);F(this,"targetFrequency",100);F(this,"currentAmplitude",.3);F(this,"currentFrequency",100);F(this,"clapVibration",0);this.canvas=e,this.ctx=t,this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.scene=new us,this.camera=new qa(-1,1,1,-1,0,1),this.renderer=new hs({canvas:this.threeCanvas,alpha:!1,antialias:!1}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const i=new Vd(new Uint8Array([0,0,0,255]),1,1,mi);i.needsUpdate=!0,this.uniforms={uTime:{value:0},uTexture:{value:i},uAmplitude:{value:.3},uFrequency:{value:100},uColorIntensity:{value:.8},uColor1:{value:new Je("#6366f1")},uColor2:{value:new Je("#8b5cf6")},uColor3:{value:new Je("#d946ef")},uColor4:{value:new Je("#ec4899")},uColor5:{value:new Je("#f43f5e")}};const s=new ln({uniforms:this.uniforms,vertexShader:this.getVertexShader(),fragmentShader:this.getFragmentShader()}),o=new Lr(2,2);this.plane=new un(o,s),this.scene.add(this.plane),console.log("🎥 DistortedCameraRenderer initialized")}setVideoElement(e){if(!e){console.warn("DistortedCameraRenderer: No video element provided");return}this.videoElement===e&&this.videoTexture||(this.videoElement=e,this.videoTexture&&this.videoTexture.dispose(),this.videoTexture=new XS(e),this.videoTexture.minFilter=pn,this.videoTexture.magFilter=pn,this.videoTexture.format=mi,this.uniforms.uTexture.value=this.videoTexture,console.log("✅ DistortedCameraRenderer: Video texture created"))}getVertexShader(){return`
      varying vec2 vUv;
      
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `}getFragmentShader(){return`
      uniform sampler2D uTexture;
      uniform float uTime;
      uniform float uAmplitude;
      uniform float uFrequency;
      
      uniform vec3 uColor1;
      uniform vec3 uColor2;
      uniform vec3 uColor3;
      uniform vec3 uColor4;
      uniform vec3 uColor5;
      
      varying vec2 vUv;
      
      // Function to interpolate between 5 colors based on a 0-1 factor
      vec3 getColorRamp(float t) {
        if (t < 0.25) return mix(uColor1, uColor2, t * 4.0);
        if (t < 0.5) return mix(uColor2, uColor3, (t - 0.25) * 4.0);
        if (t < 0.75) return mix(uColor3, uColor4, (t - 0.5) * 4.0);
        return mix(uColor4, uColor5, (t - 0.75) * 4.0);
      }
      
      // Random noise function
      float random(vec2 st) {
          return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }
      
      void main() {
        // Mirror horizontally
        vec2 mirroredUv = vec2(1.0 - vUv.x, vUv.y);
        
        // --- 1. WAVE DISTORTION (Zig-Zag) ---
        // Vertical waves (Up/Down distortion based on X position)
        float wave = sin(mirroredUv.x * uFrequency + uTime * 3.0) * uAmplitude * 0.05; 
        
        // Apply distortion to Y coordinate (Vertical shift)
        vec2 distortedUv = vec2(mirroredUv.x, mirroredUv.y + wave);
        
        // Clamp to avoid edge artifacts
        distortedUv = clamp(distortedUv, 0.001, 0.999);
        
        // --- 2. BLUR SAMPLING ---
        // Heavy blur for abstraction
        vec4 sum = vec4(0.0);
        float blurSize = 0.012; // INCREASED BLUR
        
        // 9-tap gaussian-ish blur
        sum += texture2D(uTexture, distortedUv);
        sum += texture2D(uTexture, distortedUv + vec2(blurSize, 0.0));
        sum += texture2D(uTexture, distortedUv + vec2(-blurSize, 0.0));
        sum += texture2D(uTexture, distortedUv + vec2(0.0, blurSize));
        sum += texture2D(uTexture, distortedUv + vec2(0.0, -blurSize));
        // Diagonals
        sum += texture2D(uTexture, distortedUv + vec2(blurSize, blurSize));
        sum += texture2D(uTexture, distortedUv + vec2(-blurSize, -blurSize));
        sum += texture2D(uTexture, distortedUv + vec2(blurSize, -blurSize));
        sum += texture2D(uTexture, distortedUv + vec2(-blurSize, blurSize));
        
        vec4 blurredColor = sum / 9.0;
        
        // --- 3. HEAT MAP COLORING ---
        // Convert to grayscale luminance
        float lum = dot(blurredColor.rgb, vec3(0.299, 0.587, 0.114));
        
        // Boost contrast for more dramatic heat map
        float contrastLum = pow(lum, 1.2); 
        
        // Map luminance to our custom color palette
        vec3 finalColor = getColorRamp(contrastLum);
        
        // --- 4. NOISE / DOT EFFECT ---
        // Add static noise
        float noise = random(distortedUv + uTime * 0.1);
        
        // Add dot grid effect
        float dotGrid = sin(gl_FragCoord.x * 0.5) * sin(gl_FragCoord.y * 0.5);
        float grain = mix(noise, dotGrid, 0.3); // Mix noise and dots
        
        // Blend noise into final color (overlay mode-ish)
        finalColor = mix(finalColor, finalColor * (0.8 + grain * 0.4), 0.3);
        
        // Add a bit of the original luminance back but very subtle
        finalColor = mix(finalColor, vec3(1.0), contrastLum * 0.1);
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `}render(e,t,i){if(!this.plane)return;(this.canvas.width!==this.threeCanvas.width||this.canvas.height!==this.threeCanvas.height)&&(this.threeCanvas.width=this.canvas.width,this.threeCanvas.height=this.canvas.height,this.renderer.setSize(this.canvas.width,this.canvas.height)),this.time+=.016*gn(),this.uniforms.uTime.value=this.time,t&&t.length>0&&(this.uniforms.uColor1.value.set(t[0]),this.uniforms.uColor2.value.set(t[1]||t[0]),this.uniforms.uColor3.value.set(t[2]||t[0]),this.uniforms.uColor4.value.set(t[3]||t[0]),this.uniforms.uColor5.value.set(t[4]||t[0]));const s=e.left,o=e.right;if(s||o)if(e.clapping)this.targetAmplitude=2,this.targetFrequency=300,this.clapVibration=1;else{const u=s||o;if(u){const f=50+Math.max(0,Math.min(1,u.position.x))*350,g=Math.max(0,Math.min(1,1-u.position.y))*1.5,m=u.fingerCount||0;u.gesture==="pinch"||m<=1?(this.targetAmplitude=g*.2,this.targetFrequency=f*.5):(this.targetAmplitude=g,this.targetFrequency=f)}}else this.targetAmplitude=.5,this.targetFrequency=150;this.currentAmplitude+=(this.targetAmplitude-this.currentAmplitude)*.1,this.currentFrequency+=(this.targetFrequency-this.currentFrequency)*.1,this.clapVibration*=.95;const c=this.currentAmplitude+this.clapVibration*Math.sin(this.time*50)*.5;this.uniforms.uAmplitude.value=c,this.uniforms.uFrequency.value=this.currentFrequency,this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){this.videoTexture&&this.videoTexture.dispose(),this.plane&&(this.plane.geometry.dispose(),this.plane.material instanceof Wi&&this.plane.material.dispose()),this.renderer.dispose(),this.renderer.forceContextLoss(),console.log("🎥 DistortedCameraRenderer destroyed")}}class aT{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"streams",[]);F(this,"vanishingPoint",{x:0,y:0});F(this,"targetVanishingPoint",{x:0,y:0});F(this,"vanishingPointRight",{x:0,y:0});F(this,"targetVanishingPointRight",{x:0,y:0});F(this,"scanLineOffset",0);F(this,"clapAccumulation",0);F(this,"shakeIntensity",0);F(this,"time",0);F(this,"lastFingerCount",5);this.canvas=e,this.ctx=t,this.vanishingPoint.x=e.width*.3,this.vanishingPoint.y=e.height/2,this.targetVanishingPoint.x=this.vanishingPoint.x,this.targetVanishingPoint.y=this.vanishingPoint.y,this.vanishingPointRight.x=e.width*.7,this.vanishingPointRight.y=e.height/2,this.targetVanishingPointRight.x=this.vanishingPointRight.x,this.targetVanishingPointRight.y=this.vanishingPointRight.y;for(let i=0;i<6;i++)this.streams.push({angle:i/6*Math.PI*2,speed:1,packets:[],branchLevel:0})}render(e,t){const{width:i,height:s}=this.canvas;this.time+=.016*gn();const o=e.left,c=e.right,u=e.clapping||!1,h=e.clapIntensity||0;let f=1,p=1,g=5;o&&c?g=Math.floor(((o.fingerCount||5)+(c.fingerCount||5))/2):(o||c)&&(g=(o||c).fingerCount||5),this.lastFingerCount=g,g===1?(f=.003,p=.3):g===2?(f=.5,p=.7):(f=2,p=2.5),u?(this.clapAccumulation=Math.min(10,this.clapAccumulation+h*2),this.shakeIntensity=this.clapAccumulation*3,this.clapAccumulation>2&&Math.random()<.3&&this.spawnFractalBranch()):(this.clapAccumulation*=.98,this.shakeIntensity*=.9),o?(this.targetVanishingPoint.x=o.position.x*i,this.targetVanishingPoint.y=o.position.y*s):(this.targetVanishingPoint.x=i*.3,this.targetVanishingPoint.y=s/2),c?(this.targetVanishingPointRight.x=c.position.x*i,this.targetVanishingPointRight.y=c.position.y*s):(this.targetVanishingPointRight.x=i*.7,this.targetVanishingPointRight.y=s/2),this.vanishingPoint.x+=(this.targetVanishingPoint.x-this.vanishingPoint.x)*.05,this.vanishingPoint.y+=(this.targetVanishingPoint.y-this.vanishingPoint.y)*.05,this.vanishingPointRight.x+=(this.targetVanishingPointRight.x-this.vanishingPointRight.x)*.05,this.vanishingPointRight.y+=(this.targetVanishingPointRight.y-this.vanishingPointRight.y)*.05;let m=0,y=0;this.shakeIntensity>.5&&(m=(Math.random()-.5)*this.shakeIntensity,y=(Math.random()-.5)*this.shakeIntensity),this.ctx.fillStyle="rgba(0, 0, 0, 0.15)",this.ctx.fillRect(0,0,i,s),this.ctx.save(),this.ctx.translate(m,y),this.streams.forEach((_,S)=>{const b=.05*p*(_.branchLevel===0?1:.5);if(Math.random()<b){const T=["rect","hex","diamond"];_.packets.push({x:this.vanishingPoint.x,y:this.vanishingPoint.y,z:0,width:4+Math.random()*8,height:20+Math.random()*40,rotation:_.angle+(Math.random()-.5)*.3,rotationSpeed:(Math.random()-.5)*.02*f,streamIndex:S,age:0,hue:Math.random()*360,shimmerPhase:Math.random()*Math.PI*2,panelType:T[Math.floor(Math.random()*3)],waveAmplitude:Math.random()*10,waveFrequency:Math.random()*2+1,quantumPhase:Math.random()*Math.PI*2,particleCloud:[]})}_.packets=_.packets.filter(T=>{T.age+=.016*f,T.z+=.01*f*(1+_.branchLevel*.2),T.rotation+=T.rotationSpeed;const E=200*T.z,N=Math.sin(T.age*2+S)*30*T.z;return T.x=this.vanishingPoint.x+Math.cos(_.angle)*E+Math.sin(T.age*3)*N,T.y=this.vanishingPoint.y+Math.sin(_.angle)*E+Math.cos(T.age*2.5)*N,T.z<1&&T.x>-100&&T.x<i+100&&T.y>-100&&T.y<s+100})});const v=this.streams.flatMap(_=>_.packets);v.sort((_,S)=>_.z-S.z),v.forEach(_=>{const S=.2+_.z*.8,b=.3+_.z*.7,T=Math.sin(this.time*10+_.quantumPhase)*3*(1-_.z),E=Math.cos(_.age*_.waveFrequency)*T,N=Math.sin(_.age*_.waveFrequency)*T;this.ctx.save(),this.ctx.translate(_.x+E,_.y+N);const A=Math.floor(_.streamIndex%t.length),U=t[A],C=_.width*S,L=_.height*S;_.particleCloud.length<20&&Math.random()<.3&&_.particleCloud.push({dx:(Math.random()-.5)*C*2,dy:(Math.random()-.5)*L*2,life:1}),_.particleCloud=_.particleCloud.filter(D=>{if(D.life-=.02,D.life>0){const z=Math.sin(this.time*5+D.dx+D.dy)*.5+.5;return this.ctx.globalAlpha=b*D.life*.4*z,this.ctx.fillStyle=U,this.ctx.beginPath(),this.ctx.arc(D.dx,D.dy,1.5*S,0,Math.PI*2),this.ctx.fill(),!0}return!1}),this.ctx.globalAlpha=b*.8;const O=this.ctx.createRadialGradient(0,0,0,0,0,Math.max(C,L));O.addColorStop(0,this.addAlpha(U,.8)),O.addColorStop(.3,this.addAlpha(U,.4)),O.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.fillStyle=O,this.ctx.beginPath(),this.ctx.arc(0,0,Math.max(C,L),0,Math.PI*2),this.ctx.fill(),this.ctx.globalAlpha=b*.6,this.ctx.strokeStyle=U,this.ctx.lineWidth=1.5*S;for(let D=0;D<3;D++){this.ctx.beginPath();const z=D*Math.PI*.66,Z=(this.time*50+_.age*30+z*20)%(Math.max(C,L)*2);Z>0&&(this.ctx.globalAlpha=b*(1-Z/(Math.max(C,L)*2))*.5,this.ctx.arc(0,0,Z,0,Math.PI*2),this.ctx.stroke())}this.ctx.globalAlpha=b*.4,this.ctx.strokeStyle=U,this.ctx.lineWidth=.8*S;for(let D=0;D<6;D++){const z=D/6*Math.PI*2+this.time*.5,Z=(Math.sin(this.time*2+D)*.5+1)*L*.8;this.ctx.beginPath(),this.ctx.moveTo(0,0);const ne=Math.cos(z+.3)*Z*.6,V=Math.sin(z+.3)*Z*.6,J=Math.cos(z)*Z,$=Math.sin(z)*Z;this.ctx.quadraticCurveTo(ne,V,J,$),this.ctx.stroke(),this.ctx.globalAlpha=b*.8,this.ctx.fillStyle=U,this.ctx.beginPath(),this.ctx.arc(J,$,2*S,0,Math.PI*2),this.ctx.fill()}if(this.ctx.shadowBlur=20*S,this.ctx.shadowColor=U,this.ctx.globalAlpha=b,this.ctx.fillStyle=U,this.ctx.beginPath(),this.ctx.arc(0,0,3*S,0,Math.PI*2),this.ctx.fill(),this.ctx.shadowBlur=0,this.ctx.globalAlpha=b*.9,this.ctx.fillStyle="white",this.ctx.beginPath(),this.ctx.arc(0,0,1.5*S,0,Math.PI*2),this.ctx.fill(),Math.random()<.05){const D=Math.random()*Math.PI*2,z=Math.random()*Math.max(C,L)*1.5;this.ctx.globalAlpha=b*.6,this.ctx.strokeStyle=U,this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(Math.cos(D)*z,Math.sin(D)*z),this.ctx.stroke()}this.ctx.restore()}),this.ctx.globalAlpha=.05;for(let _=0;_<8;_++){const S=_/8*Math.PI*2,b=Math.max(i,s);this.ctx.strokeStyle=t[_%t.length]||"#00ffff",this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(this.vanishingPoint.x,this.vanishingPoint.y);const T=50;for(let E=0;E<=T;E++){const N=E/T,A=b*N,U=Math.sin(N*10+this.time*2)*20,C=this.vanishingPoint.x+Math.cos(S)*A+Math.cos(S+Math.PI/2)*U,L=this.vanishingPoint.y+Math.sin(S)*A+Math.sin(S+Math.PI/2)*U;E===0?this.ctx.moveTo(C,L):this.ctx.lineTo(C,L)}this.ctx.stroke()}for(let _=50;_<Math.max(i,s);_+=80){const S=_/100,b=Math.sin(this.time*2+S)*5;this.ctx.globalAlpha=.04,this.ctx.strokeStyle=t[Math.floor(S)%t.length]||"#00ffff",this.ctx.lineWidth=1,this.ctx.beginPath();const T=60;for(let E=0;E<=T;E++){const N=E/T*Math.PI*2,A=_+Math.sin(N*6+this.time*3)*b,U=this.vanishingPoint.x+Math.cos(N)*A,C=this.vanishingPoint.y+Math.sin(N)*A;E===0?this.ctx.moveTo(U,C):this.ctx.lineTo(U,C)}this.ctx.closePath(),this.ctx.stroke()}this.ctx.restore(),this.ctx.globalAlpha=.02;for(let _=0;_<100;_++){const S=Math.random()*i,b=Math.random()*s;Math.sin(this.time*20+_)*.5+.5>.7&&(this.ctx.fillStyle=t[_%t.length]||"#00ffff",this.ctx.beginPath(),this.ctx.arc(S,b,1,0,Math.PI*2),this.ctx.fill())}if(this.shakeIntensity>5){this.ctx.globalCompositeOperation="screen";for(let _=0;_<3;_++){this.ctx.globalAlpha=.05;const S=this.ctx.createRadialGradient(this.vanishingPoint.x,this.vanishingPoint.y,0,this.vanishingPoint.x,this.vanishingPoint.y,Math.max(i,s)*(.3+_*.2)),b=(this.time*100+_*120)%360;S.addColorStop(0,`hsla(${b}, 100%, 50%, 0.3)`),S.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.fillStyle=S,this.ctx.fillRect(0,0,i,s)}this.ctx.globalCompositeOperation="source-over"}const w=(_,S,b,T,E)=>{const N=5+Math.sin(this.time*4)*3,A=t[b]||"#00ffff";for(let C=0;C<3;C++){const L=N*(2+C),O=.3-C*.1;this.ctx.globalAlpha=O,this.ctx.strokeStyle=A,this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.arc(_,S,L,this.time*(1+C*.5),this.time*(1+C*.5)+Math.PI*1.5),this.ctx.stroke()}const U=this.ctx.createRadialGradient(_,S,0,_,S,N*4);if(U.addColorStop(0,this.addAlpha(A,.9)),U.addColorStop(.5,this.addAlpha(A,.5)),U.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.globalAlpha=.9,this.ctx.fillStyle=U,this.ctx.beginPath(),this.ctx.arc(_,S,N*4,0,Math.PI*2),this.ctx.fill(),this.ctx.globalAlpha=1,this.ctx.fillStyle="white",this.ctx.shadowBlur=15,this.ctx.shadowColor=A,this.ctx.beginPath(),this.ctx.arc(_,S,N,0,Math.PI*2),this.ctx.fill(),this.ctx.shadowBlur=0,this.clapAccumulation>.5){const C=this.clapAccumulation/10;for(let L=0;L<5;L++){const O=(this.time*3+L*.5)%2,D=20+O*100+this.clapAccumulation*20,z=(1-O/2)*C;this.ctx.globalAlpha=z*.5,this.ctx.strokeStyle=t[L%t.length]||"#00ffff",this.ctx.lineWidth=3,this.ctx.beginPath(),this.ctx.arc(_,S,D,0,Math.PI*2),this.ctx.stroke()}for(let L=0;L<Math.floor(this.clapAccumulation*5);L++){const O=L/(this.clapAccumulation*5)*Math.PI*2,D=30+Math.sin(this.time*5+L)*20,z=_+Math.cos(O+this.time*2)*D,Z=S+Math.sin(O+this.time*2)*D;this.ctx.globalAlpha=C*.7,this.ctx.fillStyle=t[L%t.length]||"#00ffff",this.ctx.beginPath(),this.ctx.arc(z,Z,2,0,Math.PI*2),this.ctx.fill()}}if(T){this.ctx.globalAlpha=1,this.ctx.fillStyle="white",this.ctx.font="12px monospace",this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.shadowBlur=8,this.ctx.shadowColor="rgba(0, 0, 0, 0.8)";const C=`X:${Math.floor(_)} Y:${Math.floor(S)}`;this.ctx.fillText(C,_,S-8);const L=new Date,O=L.toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric"}),D=L.toLocaleTimeString("en-US",{hour12:!1}),z=`${O} - ${D}`;this.ctx.fillText(z,_,S+8),this.ctx.shadowBlur=0}};w(this.vanishingPoint.x,this.vanishingPoint.y,0,!!o),c&&w(this.vanishingPointRight.x,this.vanishingPointRight.y,1,!0)}spawnFractalBranch(){if(this.streams.length>30)return;const e=this.streams[Math.floor(Math.random()*Math.min(6,this.streams.length))],t=e.angle+(Math.random()-.5)*.8;this.streams.push({angle:t,speed:1.2,packets:[],branchLevel:(e.branchLevel||0)+1,parentAngle:e.angle})}drawHexagon(e,t,i){this.ctx.beginPath();for(let s=0;s<6;s++){const o=Math.PI/3*s,c=e+i*Math.cos(o),u=t+i*Math.sin(o);s===0?this.ctx.moveTo(c,u):this.ctx.lineTo(c,u)}this.ctx.closePath()}addAlpha(e,t){if(e.startsWith("#")){const i=parseInt(e.slice(1,3),16),s=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16);return`rgba(${i}, ${s}, ${o}, ${t})`}return e}}class oT{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"particles",[]);F(this,"config",{baseSize:1.5,gridSpacing:8,distortionRadius:200,distortionStrength:0,friction:.9,ease:.1});F(this,"faceData",[[60,100,1],[70,100,1],[50,110,1],[60,110,1],[70,110,1],[80,110,1],[40,120,1],[50,120,2],[60,120,1],[70,120,1],[80,120,2],[90,120,1],[40,130,2],[50,130,3],[60,130,1],[70,130,1],[80,130,3],[90,130,2],[30,140,2],[40,140,3],[50,140,4],[60,140,1],[70,140,1],[80,140,4],[90,140,3],[100,140,2],[20,150,2],[30,150,3],[40,150,3],[50,150,3],[60,150,1],[70,150,1],[80,150,3],[90,150,3],[100,150,3],[110,150,2],[30,160,2],[40,160,3],[50,160,2],[80,160,2],[90,160,3],[100,160,2],[40,170,2],[50,170,2],[80,170,2],[90,170,2],[40,180,1],[50,180,1],[80,180,1],[90,180,1],[40,190,1],[50,190,2],[80,190,2],[90,190,1],[50,200,2],[80,200,2],[50,210,1],[60,210,1],[70,210,1],[80,210,1],[50,220,1],[60,220,2],[70,220,2],[80,220,1],[60,230,3],[70,230,3],[60,240,4],[70,240,4],[60,250,3],[70,250,3],[60,260,2],[70,260,2]]);this.canvas=e,this.ctx=t,this.createParticles()}createParticles(){this.particles=[];const e=this.canvas.width/2,t=this.canvas.height/2,i=275,s=14,o=1.2,c=this.config.baseSize*o;for(let u=t-i;u<t+i;u+=s)for(let h=e-i;h<e+i;h+=s)Math.sqrt((h-e)**2+(u-t)**2)<i&&this.particles.push({originX:h,originY:u,x:h,y:u,vx:0,vy:0,intensity:o,size:c,currentSize:c})}render(e,t){var c,u;t[1]&&(t[1].toLowerCase()==="#ffffff"||t[1].toLowerCase()==="#fff")?this.ctx.fillStyle="#000000":this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);const s=e.left||e.right;if(s){const h=(((c=s.position)==null?void 0:c.x)||.5)*this.canvas.width,f=(((u=s.position)==null?void 0:u.y)||.5)*this.canvas.height;let p=0;const g=s.fingerCount||2;s.gesture==="pinch"||g===1?p=5:g===2?p=20:g>=5?p=50:p=15+(g-2)*10,this.config.distortionStrength+=(p-this.config.distortionStrength)*.1,this.particles.forEach(m=>{const y=h-m.x,v=f-m.y,w=Math.sqrt(y*y+v*v);if(w<this.config.distortionRadius){const b=(this.config.distortionRadius-w)/this.config.distortionRadius,T=Math.atan2(v,y),E=Math.cos(T)*b*this.config.distortionStrength,N=Math.sin(T)*b*this.config.distortionStrength;m.vx-=E,m.vy-=N,m.currentSize=m.size+b*4*Math.abs(this.config.distortionStrength/10)}else m.currentSize=m.size;const _=m.originX-m.x,S=m.originY-m.y;m.vx+=_*this.config.ease,m.vy+=S*this.config.ease,m.vx*=this.config.friction,m.vy*=this.config.friction,m.x+=m.vx,m.y+=m.vy})}else this.config.distortionStrength*=.9,this.particles.forEach(h=>{const f=h.originX-h.x,p=h.originY-h.y;h.vx+=f*this.config.ease,h.vy+=p*this.config.ease,h.vx*=this.config.friction,h.vy*=this.config.friction,h.x+=h.vx,h.y+=h.vy,h.currentSize=h.size});if(e.clapping){const h=this.canvas.width/2,f=this.canvas.height/2;this.particles.forEach(p=>{const g=p.x-h,m=p.y-f,y=Math.sqrt(g*g+m*m),v=30;p.vx+=g/(y+1)*v,p.vy+=m/(y+1)*v})}const o=t[0]||"#FFFFFF";this.particles.forEach(h=>{this.ctx.fillStyle=o,this.ctx.globalAlpha=.85;const f=Math.max(.5,h.currentSize);this.ctx.fillRect(h.x-f/2,h.y-f/2,f,f)}),this.ctx.globalAlpha=1}}const on=class on{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"faceLandmarker",null);F(this,"isLoading",!0);F(this,"lastVideoTime",-1);F(this,"results");F(this,"video",null);F(this,"hasFailed",!1);F(this,"isLocalInitializing",!1);F(this,"drawingUtils",null);F(this,"initAttempts",0);F(this,"maxInitAttempts",60);F(this,"FACE_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,129],[129,49],[49,209],[131,29],[29,52],[52,131],[43,106],[106,204],[204,43],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[33,168],[168,8],[8,33],[228,117],[117,31],[31,228],[107,189],[189,55],[55,107],[126,217],[217,1],[1,126],[233,79],[79,218],[218,233],[35,154],[154,26],[26,35],[125,129],[129,49],[49,125],[52,131],[131,29],[29,52],[169,106],[106,43],[43,169],[6,74],[74,184],[184,6],[191,80],[80,183],[183,191],[43,106],[106,204],[204,43]]);this.canvas=e,this.ctx=t,console.log("👤 FaceRenderer initialized"),this.initializeMediaPipe()}async initializeMediaPipe(){if(!(this.isLocalInitializing||this.hasFailed)){this.isLocalInitializing=!0;try{if(this.initAttempts++,this.video=document.querySelector("video"),!this.video||!this.video.srcObject){this.isLocalInitializing=!1,this.initAttempts<this.maxInitAttempts?setTimeout(()=>this.initializeMediaPipe(),1e3):(console.error("❌ Max retry attempts reached."),this.hasFailed=!0,this.isLoading=!1);return}if(on.isGlobalInitializing){console.log("⏳ Waiting for global init..."),this.isLocalInitializing=!1,setTimeout(()=>this.initializeMediaPipe(),500);return}if(!on.filesetResolver){on.isGlobalInitializing=!0,console.log("📦 Loading MediaPipe modules...");const t=await yx(()=>import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14"),[],import.meta.url);on.faceLandmarkerClass=t.FaceLandmarker,on.drawingUtilsClass=t.DrawingUtils,on.filesetResolver=await t.FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm"),console.log("🔧 WASM initialized"),on.isGlobalInitializing=!1}const e="https://raw.githubusercontent.com/NPC-88/3dfiles/9d9b1c903c6397d41d71ad993f114bbce9fe5db6/face_landmarker.task";if(!this.faceLandmarker)try{this.faceLandmarker=await on.faceLandmarkerClass.createFromOptions(on.filesetResolver,{baseOptions:{modelAssetPath:e,delegate:"GPU"},outputFaceBlendshapes:!1,outputFacialTransformationMatrixes:!1,runningMode:"VIDEO",numFaces:1}),console.log("✅ Face tracking initialized (GPU)")}catch{console.warn("GPU failed, trying CPU..."),this.faceLandmarker=await on.faceLandmarkerClass.createFromOptions(on.filesetResolver,{baseOptions:{modelAssetPath:e,delegate:"CPU"},outputFaceBlendshapes:!1,outputFacialTransformationMatrixes:!1,runningMode:"VIDEO",numFaces:1}),console.log("✅ Face tracking initialized (CPU)")}on.drawingUtilsClass&&(this.drawingUtils=new on.drawingUtilsClass(this.ctx)),this.isLoading=!1,this.isLocalInitializing=!1}catch(e){console.error("❌ Failed to initialize MediaPipe:",e),this.hasFailed=!0,this.isLoading=!1,this.isLocalInitializing=!1,on.isGlobalInitializing=!1}}}render(e,t,i){if(this.hasFailed){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#ff4444",this.ctx.font="18px monospace",this.ctx.textAlign="center",this.ctx.fillText("Initialization Failed",this.canvas.width/2,this.canvas.height/2),this.ctx.font="14px monospace",this.ctx.fillStyle="#ff8888",this.ctx.fillText("Refresh the page to try again",this.canvas.width/2,this.canvas.height/2+30);return}if(this.isLoading){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#666666",this.ctx.font="20px monospace",this.ctx.textAlign="center",this.ctx.fillText("Initializing Face Model...",this.canvas.width/2,this.canvas.height/2),this.ctx.font="14px monospace",this.ctx.fillStyle="#888888",this.ctx.fillText("Press Q to enable camera if needed",this.canvas.width/2,this.canvas.height/2+30);return}if(!this.faceLandmarker||!this.video||!this.drawingUtils){if(!this.isLocalInitializing&&!this.hasFailed){const p=document.querySelector("video");p&&p.srcObject&&(console.log("📹 Video found during render, triggering init once..."),this.initializeMediaPipe())}this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#666666",this.ctx.font="18px monospace",this.ctx.textAlign="center",this.ctx.fillText("Waiting for camera...",this.canvas.width/2,this.canvas.height/2),this.ctx.font="14px monospace",this.ctx.fillStyle="#888888",this.ctx.fillText("Press Q to enable camera",this.canvas.width/2,this.canvas.height/2+30);return}const s=performance.now();if(this.lastVideoTime!==this.video.currentTime){this.lastVideoTime=this.video.currentTime;try{this.results=this.faceLandmarker.detectForVideo(this.video,s)}catch(p){console.error("Face detection error:",p)}}this.ctx.save(),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);const o=performance.now(),c=Math.abs(Math.sin(o*.002)),u=.1+.6*c,h=15*c,f=t[0]||"#00d2ff";if(this.results&&this.results.faceLandmarks&&this.results.faceLandmarks.length>0)for(const p of this.results.faceLandmarks)this.ctx.shadowColor=f,this.ctx.shadowBlur=h,this.drawingUtils.drawConnectors(p,on.faceLandmarkerClass.FACE_LANDMARKS_TESSELATION,{color:`rgba(255, 255, 255, ${u})`,lineWidth:1}),this.ctx.shadowBlur=0;else this.ctx.fillStyle="#666666",this.ctx.font="16px monospace",this.ctx.textAlign="center",this.ctx.fillText("No Face Detected",this.canvas.width/2,this.canvas.height/2),this.ctx.font="12px monospace",this.ctx.fillStyle="#888888",this.ctx.fillText("Position your face in front of the camera",this.canvas.width/2,this.canvas.height/2+25);this.ctx.restore()}resize(e,t){}destroy(){this.faceLandmarker&&(this.faceLandmarker.close(),this.faceLandmarker=null),console.log("👤 FaceRenderer destroyed")}};F(on,"filesetResolver",null),F(on,"faceLandmarkerClass",null),F(on,"drawingUtilsClass",null),F(on,"isGlobalInitializing",!1);let xd=on;function Kc(a,e){a.traverse(t=>{if(t instanceof un||t instanceof Ar||t instanceof Gx){t.geometry.dispose();const i=t.material;Array.isArray(i)?i.forEach(s=>s.dispose()):i.dispose()}}),a.clear(),e.dispose(),e.forceContextLoss()}class lT{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"threeCanvas");F(this,"scene");F(this,"camera");F(this,"renderer");F(this,"sphere");F(this,"particleMesh");F(this,"pointLight");F(this,"pointLight2");F(this,"originalPositions",[]);F(this,"time",0);F(this,"handX",.5);F(this,"handY",.5);F(this,"pinchDistance",1);F(this,"SPHERE_RADIUS",1.5);F(this,"DETAIL",4);F(this,"CHAOS_MULTIPLIER",1.5);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances of Three")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.initThreeJS(),console.log("🌐 MorphingSphereRenderer initialized with Three.js"),console.warn=i}initThreeJS(){this.scene=new us,this.scene.fog=new Ko(0,.05),this.camera=new Pn(75,this.canvas.width/this.canvas.height,.1,1e3),this.camera.position.set(0,0,5),this.camera.lookAt(0,0,0),this.renderer=new hs({canvas:this.threeCanvas,antialias:!0,alpha:!0}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=new $x(4210752);this.scene.add(e),this.pointLight=new Gc(65484,2,50),this.pointLight.position.set(5,5,5),this.scene.add(this.pointLight),this.pointLight2=new Gc(3342591,2,50),this.pointLight2.position.set(-5,-5,5),this.scene.add(this.pointLight2);const t=new jd(this.SPHERE_RADIUS,this.DETAIL),i=t.attributes.position;for(let f=0;f<i.count;f++)this.originalPositions.push(new Q(i.getX(f),i.getY(f),i.getZ(f)));const s=new jx({color:1118481,wireframe:!0,emissive:3342591,emissiveIntensity:.5,roughness:.4,metalness:.8});this.sphere=new un(t,s),this.scene.add(this.sphere);const o=new cn,c=1e3,u=new Float32Array(c*3);for(let f=0;f<c*3;f++)u[f]=(Math.random()-.5)*20;o.setAttribute("position",new yn(u,3));const h=new os({size:.02,color:16777215,transparent:!0,opacity:.5});this.particleMesh=new Ar(o,h),this.scene.add(this.particleMesh)}noise(e,t,i){return Math.sin(e)*Math.cos(t)*Math.sin(i)}calculatePinch(e){if(!e||!e.landmarks)return 1;const t=e.landmarks[4],i=e.landmarks[8],s=Math.sqrt(Math.pow(t.x-i.x,2)+Math.pow(t.y-i.y,2));return Math.min(Math.max((s-.02)*5,0),1)}updateState(e){const t=e.left,i=e.right,s=this.calculatePinch(t),o=this.calculatePinch(i),u=Math.min(s,o);this.pinchDistance+=(u-this.pinchDistance)*.1;let h=.5,f=.5;t&&t.position?(h=t.position.x,f=t.position.y):i&&i.position&&(h=i.position.x,f=i.position.y),this.handX+=(h-this.handX)*.1,this.handY+=(f-this.handY)*.1,!t&&!i&&(this.handX+=(.5-this.handX)*.05,this.handY+=(.5-this.handY)*.05,this.pinchDistance+=(1-this.pinchDistance)*.05)}render(e,t){this.time+=.02*gn(),this.updateState(e);const i=this.renderer.getPixelRatio(),s=Math.floor(this.canvas.width*i),o=Math.floor(this.canvas.height*i);(this.threeCanvas.width!==s||this.threeCanvas.height!==o)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=s,this.threeCanvas.height=o,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix()),this.renderer.clear();const c=(this.handX-.5)*4,u=(.5-this.handY)*3;this.sphere.position.x+=(c-this.sphere.position.x)*.15,this.sphere.position.y+=(u-this.sphere.position.y)*.15;const h=(this.handY-.5)*2,f=(this.handX-.5)*2;this.sphere.rotation.x+=(h-this.sphere.rotation.x)*.05,this.sphere.rotation.y+=(f-this.sphere.rotation.y)*.05,this.sphere.rotation.z+=.005;const p=this.sphere.geometry.attributes.position,g=(1-this.pinchDistance)*this.CHAOS_MULTIPLIER,m=Math.sin(this.time)*.1;for(let v=0;v<p.count;v++){const w=this.originalPositions[v],_=this.noise(w.x*2+this.time,w.y*2+this.time,w.z*2),S=1+m+_*g;p.setXYZ(v,w.x*S,w.y*S,w.z*S)}p.needsUpdate=!0;const y=this.sphere.material;if(t&&t.length>0)try{const v=new Je(t[0]),w=new Je(t[0]);y.color=v,y.emissive=w.multiplyScalar(.3+g*.4);const _=new Je(t[0]),S=t.length>1?new Je(t[1]):new Je(t[0]);this.pointLight.color=_,this.pointLight2.color=S}catch{y.color.setHex(65484),y.emissive.setHex(13107),this.pointLight.color.setHex(65484),this.pointLight2.color.setHex(3342591)}else y.color.setHex(65484),y.emissive.setHex(13107),this.pointLight.color.setHex(65484),this.pointLight2.color.setHex(3342591);this.pointLight.position.x=(this.handX-.5)*10,this.pointLight.position.y=(.5-this.handY)*10,this.particleMesh.rotation.y=-this.time*.1,this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){Kc(this.scene,this.renderer)}}class cT{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"threeCanvas");F(this,"scene");F(this,"camera");F(this,"renderer");F(this,"instancedMesh");F(this,"gridWidth");F(this,"gridHeight");F(this,"cubePositions",[]);F(this,"time",0);F(this,"hands",[]);F(this,"speedMultiplier",1);F(this,"handsTogetherBoost",1);F(this,"currentFingerMode","slow");F(this,"GRID_WIDTH",120);F(this,"GRID_HEIGHT",90);F(this,"SPACING",.12);F(this,"WAVE_AMPLITUDE",2.5);F(this,"CUBE_SIZE",.03);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances of Three")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.gridWidth=this.GRID_WIDTH,this.gridHeight=this.GRID_HEIGHT,this.initThreeJS(),console.log("🧊 CubeWallRenderer initialized with Three.js"),console.warn=i}initThreeJS(){this.scene=new us,this.scene.background=new Je(0),this.camera=new Pn(60,this.canvas.width/this.canvas.height,.1,100),this.camera.position.set(0,0,4.5),this.camera.lookAt(0,0,0),this.renderer=new hs({canvas:this.threeCanvas,antialias:!0,alpha:!1}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=new $x(2105376,.3);this.scene.add(e);const t=new of(16777215,.8);t.position.set(3,5,8),this.scene.add(t);const i=new of(4474111,.4);i.position.set(-5,-3,5),this.scene.add(i);const s=new Gc(65484,.6,50);s.position.set(5,5,5),this.scene.add(s);const o=new ja(this.CUBE_SIZE,this.CUBE_SIZE,this.CUBE_SIZE),c=new jx({color:65535,emissive:8738,emissiveIntensity:.2,metalness:.6,roughness:.4,flatShading:!0}),u=this.gridWidth*this.gridHeight;this.instancedMesh=new HS(o,c,u),this.scene.add(this.instancedMesh);const h=new mn;let f=0;for(let p=0;p<this.gridHeight;p++)for(let g=0;g<this.gridWidth;g++){const m=(g-this.gridWidth/2)*this.SPACING,y=(p-this.gridHeight/2)*this.SPACING,v=0;this.cubePositions.push(new Q(m,y,v)),h.position.set(m,y,v),h.updateMatrix(),this.instancedMesh.setMatrixAt(f,h.matrix),f++}this.instancedMesh.instanceMatrix.needsUpdate=!0}getFingerSpeedMultiplier(e){if(!e||!e.fingerCount)return 0;const t=e.fingerCount;return t<=1?.05:t===2?.3:t>=5?1.5:.3+(t-2)/3*1.2}updateHandData(e){this.hands=[];let t=1;if(e.left){const s=this.getFingerSpeedMultiplier(e.left);t=Math.max(t,s),this.hands.push({x:e.left.position.x,y:1-e.left.position.y,intensity:1,fingerCount:e.left.fingerCount||0})}if(e.right){const s=this.getFingerSpeedMultiplier(e.right);t=Math.max(t,s),this.hands.push({x:e.right.position.x,y:1-e.right.position.y,intensity:1,fingerCount:e.right.fingerCount||0})}this.speedMultiplier+=(t-this.speedMultiplier)*.1;const i=e.clapping||e.distanceBetweenHands&&e.distanceBetweenHands<.15?3:1;if(this.handsTogetherBoost+=(i-this.handsTogetherBoost)*.15,this.hands.length>0){const s=this.hands.reduce((o,c)=>o+c.fingerCount,0);s<=1?this.currentFingerMode="pinch":s>=5?this.currentFingerMode="fast":this.currentFingerMode="slow"}}calculateDisplacement(e,t){let i=0;const s=Math.sin(e*8+this.time)*Math.cos(t*8+this.time)*.05;i+=s;for(const o of this.hands){const c=(o.x-.5)*this.gridWidth*this.SPACING*.8,u=(o.y-.5)*this.gridHeight*this.SPACING*.8,h=e-c,f=t-u,p=Math.sqrt(h*h+f*f),g=Math.sin(p*6-this.time*4)/(p*.5+.5);i+=g*o.intensity*this.WAVE_AMPLITUDE}return i*=this.speedMultiplier*this.handsTogetherBoost,i}render(e,t){this.time+=.016*this.speedMultiplier*gn(),this.updateHandData(e);const i=this.renderer.getPixelRatio(),s=Math.floor(this.canvas.width*i),o=Math.floor(this.canvas.height*i);(this.threeCanvas.width!==s||this.threeCanvas.height!==o)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=s,this.threeCanvas.height=o,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix());const c=new mn;let u=0,h=.5,f=.2;this.currentFingerMode==="pinch"?(h=.02,f=.01):this.currentFingerMode==="slow"?(h=.5,f=.25):this.currentFingerMode==="fast"&&(h=.9,f=.4);for(let p=0;p<this.gridHeight;p++)for(let g=0;g<this.gridWidth;g++){const m=this.cubePositions[u],y=this.calculateDisplacement(m.x,m.y);c.position.set(m.x,m.y,m.z+y),c.rotation.x=y*h,c.rotation.y=y*h*.7,c.rotation.z=y*h*.4;const v=1+Math.abs(y)*f;c.scale.set(v,v,v),c.updateMatrix(),this.instancedMesh.setMatrixAt(u,c.matrix),u++}if(this.instancedMesh.instanceMatrix.needsUpdate=!0,t&&t.length>0)try{const p=this.instancedMesh.material,g=new Je(t[0]);if(p.color=g,p.emissive=new Je(t[0]).multiplyScalar(.3),t.length>1){const m=this.scene.children.find(v=>v instanceof of&&v.position.x<0),y=this.scene.children.find(v=>v instanceof Gc);m&&(m.color=new Je(t[1])),y&&(y.color=new Je(t.length>2?t[2]:t[1]))}}catch{const g=this.instancedMesh.material;g.color.setHex(65535),g.emissive.setHex(13107)}this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){Kc(this.scene,this.renderer)}}const Ic={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Zo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const uT=new qa(-1,1,1,-1,0,1);class hT extends cn{constructor(){super(),this.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qt([0,2,0,0,2,0],2))}}const fT=new hT;class rv{constructor(e){this._mesh=new un(fT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,uT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class dT extends Zo{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ln?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Hc.clone(e.uniforms),this.material=new ln({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new rv(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class qg extends Zo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let c,u;this.inverse?(c=0,u=1):(c=1,u=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,c,4294967295),o.buffers.stencil.setClear(u),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class pT extends Zo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class sv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ft);this._width=i.width,this._height=i.height,t=new ri(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:gi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new dT(Ic),this.copyPass.material.blending=tr,this.timer=new lM}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,o=this.passes.length;s<o;s++){const c=this.passes[s];if(c.enabled!==!1){if(c.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),c.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),c.needsSwap){if(i){const u=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(u.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(u.EQUAL,1,4294967295)}this.swapBuffers()}qg!==void 0&&(c instanceof qg?i=!0:c instanceof pT&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ft);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class av extends Zo{constructor(e,t,i=null,s=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Je}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let o,c;this.overrideMaterial!==null&&(c=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=c),e.autoClear=s}}const mT={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Je(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Bs extends Zo{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ft(e.x,e.y):new ft(256,256),this.clearColor=new Je(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);this.renderTargetBright=new ri(o,c,{type:gi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let p=0;p<this.nMips;p++){const g=new ri(o,c,{type:gi});g.texture.name="UnrealBloomPass.h"+p,g.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(g);const m=new ri(o,c,{type:gi});m.texture.name="UnrealBloomPass.v"+p,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),o=Math.round(o/2),c=Math.round(c/2)}const u=mT;this.highPassUniforms=Hc.clone(u.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ln({uniforms:this.highPassUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader}),this.separableBlurMaterials=[];const h=[6,10,14,18,22];o=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);for(let p=0;p<this.nMips;p++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(h[p])),this.separableBlurMaterials[p].uniforms.invSize.value=new ft(1/o,1/c),o=Math.round(o/2),c=Math.round(c/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const f=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=f,this.bloomTintColors=[new Q(1,1,1),new Q(1,1,1),new Q(1,1,1),new Q(1,1,1),new Q(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Hc.clone(Ic.uniforms),this.blendMaterial=new ln({uniforms:this.copyUniforms,vertexShader:Ic.vertexShader,fragmentShader:Ic.fragmentShader,premultipliedAlpha:!0,blending:Oa,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Je,this._oldClearAlpha=1,this._basic=new qc,this._fsQuad=new rv(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,s),this.renderTargetsVertical[o].setSize(i,s),this.separableBlurMaterials[o].uniforms.invSize.value=new ft(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,o){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const c=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let u=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this._fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=u.texture,this.separableBlurMaterials[h].uniforms.direction.value=Bs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[h]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=Bs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[h]),e.clear(),this._fsQuad.render(e),u=this.renderTargetsVertical[h];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=c}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new ln({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ft(.5,.5)},direction:{value:new ft(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new ln({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Bs.BlurDirectionX=new ft(1,0);Bs.BlurDirectionY=new ft(0,1);const gT=/^[og]\s*(.+)?/,xT=/^mtllib /,vT=/^usemtl /,_T=/^usemap /,Yg=/\s+/,$g=new Q,pf=new Q,Kg=new Q,Zg=new Q,bi=new Q,Ec=new Je;function yT(){const a={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,o){const c=this._finalize(!1);c&&(c.inherited||c.groupCount<=0)&&this.materials.splice(c.index,1);const u={index:this.materials.length,name:s||"",mtllib:Array.isArray(o)&&o.length>0?o[o.length-1]:"",smooth:c!==void 0?c.smooth:this.smooth,groupStart:c!==void 0?c.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(h){const f={index:typeof h=="number"?h:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return f.clone=this.clone.bind(f),f}};return this.materials.push(u),u},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const o=this.currentMaterial();if(o&&o.groupEnd===-1&&(o.groupEnd=this.geometry.vertices.length/3,o.groupCount=o.groupEnd-o.groupStart,o.inherited=!1),s&&this.materials.length>1)for(let c=this.materials.length-1;c>=0;c--)this.materials[c].groupCount<=0&&this.materials.splice(c,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),o}},i&&i.name&&typeof i.clone=="function"){const s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const s=this.vertices,o=this.object.geometry.vertices;o.push(s[e+0],s[e+1],s[e+2]),o.push(s[t+0],s[t+1],s[t+2]),o.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const s=this.normals,o=this.object.geometry.normals;o.push(s[e+0],s[e+1],s[e+2]),o.push(s[t+0],s[t+1],s[t+2]),o.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(e,t,i){const s=this.vertices,o=this.object.geometry.normals;$g.fromArray(s,e),pf.fromArray(s,t),Kg.fromArray(s,i),bi.subVectors(Kg,pf),Zg.subVectors($g,pf),bi.cross(Zg),bi.normalize(),o.push(bi.x,bi.y,bi.z),o.push(bi.x,bi.y,bi.z),o.push(bi.x,bi.y,bi.z)},addColor:function(e,t,i){const s=this.colors,o=this.object.geometry.colors;s[e]!==void 0&&o.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&o.push(s[t+0],s[t+1],s[t+2]),s[i]!==void 0&&o.push(s[i+0],s[i+1],s[i+2])},addUV:function(e,t,i){const s=this.uvs,o=this.object.geometry.uvs;o.push(s[e+0],s[e+1]),o.push(s[t+0],s[t+1]),o.push(s[i+0],s[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,s,o,c,u,h,f){const p=this.vertices.length;let g=this.parseVertexIndex(e,p),m=this.parseVertexIndex(t,p),y=this.parseVertexIndex(i,p);if(this.addVertex(g,m,y),this.addColor(g,m,y),u!==void 0&&u!==""){const v=this.normals.length;g=this.parseNormalIndex(u,v),m=this.parseNormalIndex(h,v),y=this.parseNormalIndex(f,v),this.addNormal(g,m,y)}else this.addFaceNormal(g,m,y);if(s!==void 0&&s!==""){const v=this.uvs.length;g=this.parseUVIndex(s,v),m=this.parseUVIndex(o,v),y=this.parseUVIndex(c,v),this.addUV(g,m,y),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,s=e.length;i<s;i++){const o=this.parseVertexIndex(e[i],t);this.addVertexPoint(o),this.addColor(o)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,s=this.uvs.length;for(let o=0,c=e.length;o<c;o++)this.addVertexLine(this.parseVertexIndex(e[o],i));for(let o=0,c=t.length;o<c;o++)this.addUVLine(this.parseUVIndex(t[o],s))}};return a.startObject("",!1),a}class ST extends Yd{constructor(e){super(e),this.materials=null}load(e,t,i,s){const o=this,c=new iM(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{t(o.parse(u))}catch(h){s?s(h):console.error(h),o.manager.itemError(e)}},i,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new yT;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let s=[];for(let u=0,h=i.length;u<h;u++){const f=i[u].trimStart();if(f.length===0)continue;const p=f.charAt(0);if(p!=="#")if(p==="v"){const g=f.split(Yg);switch(g[0]){case"v":t.vertices.push(parseFloat(g[1]),parseFloat(g[2]),parseFloat(g[3])),g.length>=7?(Ec.setRGB(parseFloat(g[4]),parseFloat(g[5]),parseFloat(g[6]),di),t.colors.push(Ec.r,Ec.g,Ec.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(g[1]),parseFloat(g[2]),parseFloat(g[3]));break;case"vt":t.uvs.push(parseFloat(g[1]),parseFloat(g[2]));break}}else if(p==="f"){const m=f.slice(1).trim().split(Yg),y=[];for(let w=0,_=m.length;w<_;w++){const S=m[w];if(S.length>0){const b=S.split("/");y.push(b)}}const v=y[0];for(let w=1,_=y.length-1;w<_;w++){const S=y[w],b=y[w+1];t.addFace(v[0],S[0],b[0],v[1],S[1],b[1],v[2],S[2],b[2])}}else if(p==="l"){const g=f.substring(1).trim().split(" ");let m=[];const y=[];if(f.indexOf("/")===-1)m=g;else for(let v=0,w=g.length;v<w;v++){const _=g[v].split("/");_[0]!==""&&m.push(_[0]),_[1]!==""&&y.push(_[1])}t.addLineGeometry(m,y)}else if(p==="p"){const m=f.slice(1).trim().split(" ");t.addPointGeometry(m)}else if((s=gT.exec(f))!==null){const g=(" "+s[0].slice(1).trim()).slice(1);t.startObject(g)}else if(vT.test(f))t.object.startMaterial(f.substring(7).trim(),t.materialLibraries);else if(xT.test(f))t.materialLibraries.push(f.substring(7).trim());else if(_T.test(f))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(p==="s"){if(s=f.split(" "),s.length>1){const m=s[1].trim().toLowerCase();t.object.smooth=m!=="0"&&m!=="off"}else t.object.smooth=!0;const g=t.object.currentMaterial();g&&(g.smooth=t.object.smooth)}else{if(f==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+f+'"')}}t.finalize();const o=new Ia;if(o.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let u=0,h=t.objects.length;u<h;u++){const f=t.objects[u],p=f.geometry,g=f.materials,m=p.type==="Line",y=p.type==="Points";let v=!1;if(p.vertices.length===0)continue;const w=new cn;w.setAttribute("position",new Qt(p.vertices,3)),p.normals.length>0&&w.setAttribute("normal",new Qt(p.normals,3)),p.colors.length>0&&(v=!0,w.setAttribute("color",new Qt(p.colors,3))),p.hasUVIndices===!0&&w.setAttribute("uv",new Qt(p.uvs,2));const _=[];for(let b=0,T=g.length;b<T;b++){const E=g[b],N=E.name+"_"+E.smooth+"_"+v;let A=t.materials[N];if(this.materials!==null){if(A=this.materials.create(E.name),m&&A&&!(A instanceof Vo)){const U=new Vo;Wi.prototype.copy.call(U,A),U.color.copy(A.color),A=U}else if(y&&A&&!(A instanceof os)){const U=new os({size:10,sizeAttenuation:!1});Wi.prototype.copy.call(U,A),U.color.copy(A.color),U.map=A.map,A=U}}A===void 0&&(m?A=new Vo:y?A=new os({size:1,sizeAttenuation:!1}):A=new ZS,A.name=E.name,A.flatShading=!E.smooth,A.vertexColors=v,t.materials[N]=A),_.push(A)}let S;if(_.length>1){for(let b=0,T=g.length;b<T;b++){const E=g[b];w.addGroup(E.groupStart,E.groupCount,b)}m?S=new dd(w,_):y?S=new Ar(w,_):S=new un(w,_)}else m?S=new dd(w,_[0]):y?S=new Ar(w,_[0]):S=new un(w,_[0]);S.name=f.name,o.add(S)}else if(t.vertices.length>0){const u=new os({size:1,sizeAttenuation:!1}),h=new cn;h.setAttribute("position",new Qt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(h.setAttribute("color",new Qt(t.colors,3)),u.vertexColors=!0);const f=new Ar(h,u);o.add(f)}return o}}const Bi=class Bi{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"threeCanvas");F(this,"scene");F(this,"camera");F(this,"renderer");F(this,"composer");F(this,"handGroup",null);F(this,"backgroundParticles",null);F(this,"pinchStrength",0);F(this,"baseScale",1);F(this,"currentModel","torus");F(this,"disposed",!1);F(this,"uniforms",{uTime:{value:0},uPinch:{value:0},uColor:{value:new Q(0,.53,1)}});F(this,"bgUniforms",{uTime:{value:0},uColor:{value:new Q(.5,.7,1)}});this.canvas=e,this.ctx=t,this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.scene=new us;const i=this.threeCanvas.width/this.threeCanvas.height;this.camera=new Pn(50,i,.1,100),this.camera.position.z=10,this.renderer=new hs({canvas:this.threeCanvas,alpha:!0,antialias:!0}),this.renderer.setSize(this.threeCanvas.width,this.threeCanvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const s=new av(this.scene,this.camera),o=new Bs(new ft(this.threeCanvas.width,this.threeCanvas.height),3,1,0);this.composer=new sv(this.renderer),this.composer.addPass(s),this.composer.addPass(o),this.createBackgroundDust(),this.createTorusGeometry(),console.log("💨 SmokeHandRenderer initialized")}static loadHandGeometry(){return Bi.handGeometry||(Bi.handGeometry=new Promise((e,t)=>{new ST().load(Bi.HAND_MODEL_URL,i=>{const s=[];i.traverse(c=>{c instanceof un&&s.push(c)});const o=s[s.length-1];o!=null&&o.geometry?e(o.geometry):t(new Error("No mesh in the hand model"))},void 0,t)}),Bi.handGeometry.catch(()=>{Bi.handGeometry=null})),Bi.handGeometry}createBackgroundDust(){const t=new Float32Array(6e3),i=new Float32Array(2e3*3);for(let c=0;c<2e3;c++)t[c*3]=(Math.random()-.5)*40,t[c*3+1]=(Math.random()-.5)*30,t[c*3+2]=-5-Math.random()*20,i[c*3]=Math.random(),i[c*3+1]=Math.random(),i[c*3+2]=Math.random();const s=new cn;s.setAttribute("position",new yn(t,3)),s.setAttribute("aRandom",new yn(i,3));const o=new ln({uniforms:this.bgUniforms,transparent:!0,depthWrite:!1,blending:Oa,vertexShader:`
        uniform float uTime;
        attribute vec3 aRandom;
        varying float vAlpha;
        void main() {
          vec3 pos = position;
          pos.y += sin(uTime * 0.5 + aRandom.x * 10.0) * 0.5;
          pos.x += cos(uTime * 0.3 + aRandom.y * 10.0) * 0.5;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = (20.0 * aRandom.z + 5.0) * (1.0 / -gl_Position.z);
          vAlpha = 0.3 + 0.3 * sin(uTime * 2.0 + aRandom.z * 20.0);
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        varying float vAlpha;
        void main() {
          vec2 xy = gl_PointCoord.xy - 0.5;
          float r = length(xy);
          if (r > 0.5) discard;
          float glow = 1.0 - (r * 2.0);
          glow = pow(glow, 2.0);
          gl_FragColor = vec4(uColor, glow * vAlpha);
        }
      `});this.backgroundParticles=new Ar(s,o),this.scene.add(this.backgroundParticles)}createTorusGeometry(){const e=new qd(1.5,.45,900,150);this.createParticleSystem(e)}createParticleSystem(e){this.handGroup&&this.scene.remove(this.handGroup),this.handGroup=new Ia;const t=e.getAttribute("position").count,i=e.getAttribute("position").array,s=new Float32Array(t*3),o=new Float32Array(t*3);for(let f=0;f<t;f++)s[f*3]=i[f*3],s[f*3+1]=i[f*3+1],s[f*3+2]=i[f*3+2],o[f*3]=Math.random(),o[f*3+1]=Math.random(),o[f*3+2]=Math.random();const c=new cn;c.setAttribute("position",new yn(s,3)),c.setAttribute("aRandom",new yn(o,3)),c.setAttribute("aOriginalPos",new yn(i,3));const u=new ln({uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:Oa,vertexShader:`
        uniform float uTime;
        uniform float uPinch;
        attribute vec3 aRandom;
        attribute vec3 aOriginalPos;
        varying float vAlpha;
        
        vec3 curlNoise(vec3 p) {
          return vec3(
            sin(p.y * 3.0 + uTime) * 0.2 + sin(p.z * 5.0 + uTime * 2.0) * 0.1,
            sin(p.z * 3.0 + uTime) * 0.2 + sin(p.x * 5.0 + uTime * 2.0) * 0.1,
            sin(p.x * 3.0 + uTime) * 0.2 + sin(p.y * 5.0 + uTime * 2.0) * 0.1
          );
        }

        void main() {
          vec3 pos = aOriginalPos;
          
          // Turbulence
          vec3 turbulence = curlNoise(pos * 0.8 + uTime * 0.2);
          float breath = sin(uTime * 2.0 + pos.y) * 0.05;
          vec3 smokePos = pos + turbulence * 0.3 + (normalize(pos) * breath);

          // Expansion based on open hand
          vec3 dir = normalize(pos);
          float explodeRand = 1.0 + aRandom.x * 0.5;
          smokePos += dir * uPinch * 2.0 * explodeRand;
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(smokePos, 1.0);
          
          // Dynamic Size
          float size = 15.0 + (uPinch * 45.0);
          size *= (0.8 + 0.4 * sin(uTime * 10.0 + aRandom.y * 10.0));
          gl_PointSize = size * (1.0 / -gl_Position.z);
          
          // Alpha / Flicker
          vAlpha = 0.3 + 0.7 * sin(uTime * 3.0 + aRandom.z * 6.0);
          vAlpha += uPinch * 0.5;
        }
      `,fragmentShader:`
        uniform vec3 uColor;
        varying float vAlpha;

        void main() {
          vec2 xy = gl_PointCoord.xy - 0.5;
          float r = length(xy);
          if (r > 0.5) discard;
          
          float glow = pow(1.0 - r * 2.0, 2.0);
          vec3 finalColor = mix(uColor, vec3(1.0), glow * 0.5);
          gl_FragColor = vec4(finalColor, glow * vAlpha);
        }
      `}),h=new Ar(c,u);if(h.geometry.computeBoundingSphere(),h.geometry.boundingSphere){const f=h.geometry.boundingSphere.center;h.position.sub(f);const p=h.geometry.boundingSphere.radius;this.baseScale=2.5/p,this.handGroup.scale.set(this.baseScale,this.baseScale,this.baseScale)}this.handGroup.add(h),this.scene.add(this.handGroup)}render(e,t,i){const s=performance.now()*.001;this.uniforms.uTime.value=s,this.bgUniforms.uTime.value=s;const o=new Je(t[0]||"#0088ff");this.uniforms.uColor.value.set(o.r,o.g,o.b);const c=new Je(t[1]||t[0]||"#5588ff");this.bgUniforms.uColor.value.set(c.r*.5,c.g*.7,c.b);let u=0;if(e.right&&e.right.gesture==="open"&&e.right.landmarks){const h=e.right.landmarks,f=h[8],p=h[4],g=f.x*2-1,m=-(f.y*2-1),y=new Q(g,m,.5);y.unproject(this.camera);const v=y.sub(this.camera.position).normalize(),w=(0-this.camera.position.z)/v.z,_=this.camera.position.clone().add(v.multiplyScalar(w));this.handGroup&&(this.handGroup.position.lerp(_,.15),this.handGroup.rotation.y=g*.8,this.handGroup.rotation.x=-m*.8);const S=f.x-p.x,b=f.y-p.y,T=Math.sqrt(S*S+b*b);u=ss.mapLinear(T,.02,.15,0,1),u=ss.clamp(u,0,1)}else if(e.left&&e.left.gesture==="open"&&e.left.landmarks){const h=e.left.landmarks,f=h[8],p=h[4],g=f.x*2-1,m=-(f.y*2-1),y=new Q(g,m,.5);y.unproject(this.camera);const v=y.sub(this.camera.position).normalize(),w=(0-this.camera.position.z)/v.z,_=this.camera.position.clone().add(v.multiplyScalar(w));this.handGroup&&(this.handGroup.position.lerp(_,.15),this.handGroup.rotation.y=g*.8,this.handGroup.rotation.x=-m*.8);const S=f.x-p.x,b=f.y-p.y,T=Math.sqrt(S*S+b*b);u=ss.mapLinear(T,.02,.15,0,1),u=ss.clamp(u,0,1)}else this.handGroup&&(this.handGroup.rotation.y+=.005,this.handGroup.rotation.z=Math.sin(s*.5)*.1,this.handGroup.position.lerp(new Q(0,0,0),.05));if(this.pinchStrength=ss.lerp(this.pinchStrength,u,.1),this.uniforms.uPinch.value=this.pinchStrength,this.handGroup){const h=this.baseScale*(1+this.pinchStrength*.5),f=this.handGroup.scale.x,p=ss.lerp(f,h,.1);this.handGroup.scale.set(p,p,p)}this.composer.render(),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}resize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer.setSize(e,t),this.threeCanvas.width=e,this.threeCanvas.height=t}setSmokeHandModel(e){if(this.currentModel!==e){if(this.currentModel=e,e==="torus"){this.createTorusGeometry();return}this.createTorusGeometry(),Bi.loadHandGeometry().then(t=>{this.currentModel==="hand"&&!this.disposed&&this.createParticleSystem(t)},t=>{console.error("Hand model unavailable, staying on the torus:",t)})}}destroy(){this.disposed=!0,this.handGroup&&this.scene.remove(this.handGroup),this.backgroundParticles&&this.scene.remove(this.backgroundParticles),this.composer.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),console.log("💨 SmokeHandRenderer destroyed")}};F(Bi,"handGeometry",null),F(Bi,"HAND_MODEL_URL","https://raw.githubusercontent.com/NPC-88/3dfiles/195a81cd4607a3176f231766b5bd2dd4b4d216fb/16834_hand_v1_NEW.obj");let Vc=Bi;class MT{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"lines",[]);F(this,"gridSpacing",30);F(this,"lineLength",22);F(this,"isClapping",!1);F(this,"clappingIntensity",0);this.canvas=e,this.ctx=t,this.initializeGrid(),console.log("✅ ThickLineRenderer initialized")}initializeGrid(){this.lines=[];const e=Math.ceil(this.canvas.width/this.gridSpacing)+1,t=Math.ceil(this.canvas.height/this.gridSpacing)+1;for(let i=0;i<t;i++)for(let s=0;s<e;s++)this.lines.push({x:s*this.gridSpacing,y:i*this.gridSpacing,length:this.lineLength,currentAngle:0,targetAngle:0,spinVelocity:0})}render(e,t){t[1]&&(t[1].toLowerCase()==="#ffffff"||t[1].toLowerCase()==="#fff")?this.ctx.fillStyle="#000000":this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),(this.lines.length===0||this.lines[0].x>this.canvas.width||this.lines[0].y>this.canvas.height)&&this.initializeGrid();let s=.12,o=0;const c=[];e.left&&c.push(e.left),e.right&&c.push(e.right),c.forEach(h=>{let f=h.fingerCount||2;h.gesture==="pinch"&&(f=1),o=Math.max(o,f)}),o===1?s=.03:o>=4&&(s=.25),e.clapping?this.isClapping||(this.isClapping=!0,this.clappingIntensity=1):this.isClapping=!1,this.clappingIntensity>0&&(this.clappingIntensity*=.95,this.clappingIntensity<.01&&(this.clappingIntensity=0));const u=t[0]||"#ffffff";this.lines.forEach(h=>{if(c.length>0){let p=0,g=0,m=0;c.forEach(y=>{var N,A;const v=(((N=y.position)==null?void 0:N.x)||.5)*this.canvas.width,w=(((A=y.position)==null?void 0:A.y)||.5)*this.canvas.height,_=v-h.x,S=w-h.y,T=1/(1+Math.sqrt(_*_+S*S)*.005),E=Math.atan2(S,_);g+=Math.cos(E)*T,m+=Math.sin(E)*T,p+=T}),p>0&&(h.targetAngle=Math.atan2(m,g))}else h.targetAngle=0;if(this.clappingIntensity>0)h.spinVelocity+=this.clappingIntensity*.8,h.currentAngle+=h.spinVelocity,h.spinVelocity*=.9;else{let p=h.targetAngle-h.currentAngle;for(;p>Math.PI;)p-=Math.PI*2;for(;p<-Math.PI;)p+=Math.PI*2;h.currentAngle+=p*s,h.spinVelocity=0}let f=2;if(c.length>0){let p=1/0;c.forEach(v=>{var b,T;const w=(((b=v.position)==null?void 0:b.x)||.5)*this.canvas.width,_=(((T=v.position)==null?void 0:T.y)||.5)*this.canvas.height,S=Math.hypot(w-h.x,_-h.y);S<p&&(p=S)});const g=35,m=2,y=600;if(p<y){const v=Math.pow(1-p/y,3);f=m+(g-m)*v}}this.ctx.save(),this.ctx.translate(h.x,h.y),this.ctx.rotate(h.currentAngle),this.ctx.fillStyle=u,this.ctx.fillRect(-h.length/2,-f/2,h.length,f),this.ctx.restore()})}}class wT{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"elements",[]);F(this,"gridSpacing",20);F(this,"elementLength",12);F(this,"elementWidth",3);F(this,"time",0);F(this,"isClapping",!1);this.canvas=e,this.ctx=t,this.initializeField(),console.log("✅ FlowFieldRenderer initialized")}initializeField(){this.elements=[];const e=Math.ceil(this.canvas.width/this.gridSpacing)+1,t=Math.ceil(this.canvas.height/this.gridSpacing)+1;for(let i=0;i<t;i++)for(let s=0;s<e;s++)this.elements.push({x:s*this.gridSpacing,y:i*this.gridSpacing,angle:Math.random()*Math.PI*2,velocity:0,targetAngle:0})}noise(e,t,i){return Math.sin(e*.01+i)+Math.sin(t*.01+i)+Math.sin((e+t)*.01+i)}render(e,t,i){const s=.01+(i?i.mid*.05:0);this.time+=s*gn(),t[4]&&t[4]+"",e.clapping?this.ctx.fillStyle="#222222":this.ctx.fillStyle="#000510",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),(this.elements.length===0||this.elements[0].x>this.canvas.width)&&this.initializeField();const o=[];e.left&&o.push(e.left),e.right&&o.push(e.right);const c=i?i.bass:0,u=i?i.high:0,h=i?i.beat:!1,f=this.elementLength*(1+c*1.5),p=this.elementWidth*(1+c*.5);this.ctx.save(),this.elements.forEach((g,m)=>{let v=this.noise(g.x,g.y,this.time)*Math.PI,w=null;if(u>.2&&(v+=(Math.random()-.5)*u),o.length>0){let S=0,b=0,T="none";if(o.forEach(E=>{var Z,ne;const N=(((Z=E.position)==null?void 0:Z.x)||.5)*this.canvas.width,A=(((ne=E.position)==null?void 0:ne.y)||.5)*this.canvas.height,U=N-g.x,C=A-g.y,L=Math.sqrt(U*U+C*C),O=Math.atan2(C,U),z=Math.max(0,1-L/800);if(z>b){b=z;const V=E.fingerCount??5;E.gesture==="pinch"?(S=O,T="pinch"):V<=2?(S=O+Math.PI/2,T="2fingers"):(S=O+Math.PI,T="5fingers")}}),b>.1){let E=S-v;for(;E>Math.PI;)E-=Math.PI*2;for(;E<-Math.PI;)E+=Math.PI*2;v+=E*(b*.95),b>.3&&(T==="pinch"?w=t[1]||"#ff00ff":T==="5fingers"?w=t[2]||"#00ffff":T==="2fingers"&&(w=t[0]||"#ffffff"))}}if(e.clapping||h){const S=this.canvas.width/2,b=this.canvas.height/2,T=g.x-S,E=g.y-b,N=Math.atan2(E,T),A=(e.clapping?.9:0)+(h?.4:0);if(A>0){let U=N-v;for(;U>Math.PI;)U-=Math.PI*2;for(;U<-Math.PI;)U+=Math.PI*2;v+=U*A,e.clapping&&(w="#ffffff")}}let _=v-g.angle;for(;_>Math.PI;)_-=Math.PI*2;for(;_<-Math.PI;)_+=Math.PI*2;g.angle+=_*.25,this.ctx.translate(g.x,g.y),this.ctx.rotate(g.angle),w?this.ctx.fillStyle=w:this.ctx.fillStyle=h&&Math.random()>.7?"#ffffff":t[0]||"#ffffff",this.ctx.fillRect(-f/2,-p/2,f,p),this.ctx.rotate(-g.angle),this.ctx.translate(-g.x,-g.y)}),this.ctx.restore()}}class bT{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"threeCanvas");F(this,"scene");F(this,"camera");F(this,"renderer");F(this,"material");F(this,"time",0);F(this,"hand1",new ft(.5,.5));F(this,"hand2",new ft(.5,.5));F(this,"h1Radius",.3);F(this,"h1Strength",0);F(this,"h2Radius",.3);F(this,"h2Strength",0);F(this,"vertexShader",`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `);F(this,"fragmentShader",`
    uniform float uTime;
    uniform vec2 uResolution;
    
    uniform vec2 uHand1Pos;
    uniform float uHand1Radius;
    uniform float uHand1Strength;
    
    uniform vec2 uHand2Pos;
    uniform float uHand2Radius;
    uniform float uHand2Strength;
    
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    
    varying vec2 vUv;

    // Simplex 2D noise
    vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }
    float snoise(vec2 v){
      const vec4 C = vec4(0.211324865405187, 0.366025403784439,
               -0.577350269189626, 0.024390243902439);
      vec2 i  = floor(v + dot(v, C.yy) );
      vec2 x0 = v -   i + dot(i, C.xx);
      vec2 i1;
      i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
      vec4 x12 = x0.xyxy + C.xxzz;
      x12.xy -= i1;
      i = mod(i, 289.0);
      vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
      + i.x + vec3(0.0, i1.x, 1.0 ));
      vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
      m = m*m ;
      m = m*m ;
      vec3 x = 2.0 * fract(p * C.www) - 1.0;
      vec3 h = abs(x) - 0.5;
      vec3 ox = floor(x + 0.5);
      vec3 a0 = x - ox;
      m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
      vec3 g;
      g.x  = a0.x  * x0.x  + h.x  * x0.y;
      g.yz = a0.yz * x12.xz + h.yz * x12.yw;
      return 130.0 * dot(m, g);
    }

    // Domain warping for liquid effect
    float fbm(vec2 p) {
        float f = 0.0;
        float w = 0.5;
        float t = uTime * 0.2;
        for (int i = 0; i < 3; i++) {
            f += w * snoise(p);
            p = p * 2.0 + vec2(t * 0.5, -t * 0.3); 
            w *= 0.5;
        }
        return f;
    }

    float pattern(vec2 p, out vec2 q, out vec2 r) {
        // Hand interaction - distort the coordinate space
        float d1 = distance(p, uHand1Pos);
        float d2 = distance(p, uHand2Pos);
        float influence = 0.0;
        
        if (uHand1Strength > 0.01) {
             influence += smoothstep(uHand1Radius, 0.0, d1) * uHand1Strength;
        }
        if (uHand2Strength > 0.01) {
             influence += smoothstep(uHand2Radius, 0.0, d2) * uHand2Strength;
        }
        
        // Domain warping with interaction
        // The influence distorts the domain, creating the "push"
        q.x = fbm(p + vec2(0.0, 0.0) + influence * 0.2);
        q.y = fbm(p + vec2(5.2, 1.3) - influence * 0.2);

        r.x = fbm(p + 4.0*q + vec2(1.7, 9.2));
        r.y = fbm(p + 4.0*q + vec2(8.3, 2.8));

        return fbm(p + 4.0*r);
    }

    void main() {
        vec2 uv = vUv;
        // Correct aspect ratio
        uv.x *= uResolution.x / uResolution.y;
        
        // Zoom out slightly
        uv *= 0.8;

        vec2 q, r;
        float noiseVal = pattern(uv, q, r);

        // Calculate normal-like vector from noise derivatives (fake)
        vec3 normal = normalize(vec3(q, 1.0)); // Using the warp vector as normal

        // Lighting / Chrome effect
        vec3 lightDir = normalize(vec3(-1.0, 1.0, 1.0));
        float diffuse = max(0.0, dot(normal, lightDir));
        float specular = pow(max(0.0, dot(normal, lightDir)), 20.0); // Sharp highlights

        // Chromatic Aberration / Iridescence
        // We sample the pattern with slight offsets for R, G, B
        vec3 col;
        
        // Base metallic colors mixed with user colors
        // Mix between dark liquid and the noise value
        vec3 base = mix(vec3(0.05), uColor1, noiseVal * 0.5);
        
        // Add the "oil slick" rainbow effect
        // Cosine palette based on noise and time
        vec3 rainbow = 0.5 + 0.5 * cos(uTime * 0.5 + noiseVal * 6.0 + vec3(0.0, 2.0, 4.0));
        
        // Final composite
        col = base;
        col += rainbow * 0.3 * length(q); // Add rainbow at edges of flow
        col += specular * 0.8; // Add white highlights
        
        // Add grain
        float grain = fract(sin(dot(vUv, vec2(12.9898, 78.233) * uTime)) * 43758.5453);
        col += (grain - 0.5) * 0.15;

        gl_FragColor = vec4(col, 1.0);
    }
  `);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.initThreeJS(),console.log("💧 LiquidChromeRenderer initialized"),console.warn=i}initThreeJS(){this.scene=new us,this.camera=new qa(-1,1,1,-1,0,1),this.renderer=new hs({canvas:this.threeCanvas,antialias:!1,alpha:!0}),this.renderer.setSize(this.canvas.width,this.canvas.height);const e=new Lr(2,2);this.material=new ln({vertexShader:this.vertexShader,fragmentShader:this.fragmentShader,uniforms:{uTime:{value:0},uResolution:{value:new ft(this.canvas.width,this.canvas.height)},uHand1Pos:{value:new ft(.5,.5)},uHand1Radius:{value:.3},uHand1Strength:{value:0},uHand2Pos:{value:new ft(.5,.5)},uHand2Radius:{value:.3},uHand2Strength:{value:0},uColor1:{value:new Je(6514417)},uColor2:{value:new Je(9133302)},uColor3:{value:new Je(14239471)}}});const t=new un(e,this.material);this.scene.add(t)}getHandParams(e){return e?e.gesture==="pinch"?{radius:.15,strength:2.5}:(e.fingerCount!==void 0?e.fingerCount:5)<=2?{radius:.3,strength:1.5}:{radius:.6,strength:1}:{radius:.3,strength:0}}render(e,t){this.time+=.01*gn(),(this.threeCanvas.width!==this.canvas.width||this.threeCanvas.height!==this.canvas.height)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=this.canvas.width,this.threeCanvas.height=this.canvas.height,this.material.uniforms.uResolution.value.set(this.canvas.width,this.canvas.height)),this.material.uniforms.uTime.value=this.time;const i=this.canvas.width/this.canvas.height;if(e.clapping){const o=3+Math.sin(this.time*20)*.5;this.h1Radius+=(1.5-this.h1Radius)*.1,this.h1Strength+=(o-this.h1Strength)*.1,this.h2Radius+=(1.5-this.h2Radius)*.1,this.h2Strength+=(o-this.h2Strength)*.1}else{if(e.left){const s=this.getHandParams(e.left);this.h1Radius+=(s.radius-this.h1Radius)*.1,this.h1Strength+=(s.strength-this.h1Strength)*.1;const o=e.left.position.x*i*.8,c=(1-e.left.position.y)*.8;this.material.uniforms.uHand1Pos.value.set(o,c)}else this.h1Strength*=.9;if(e.right){const s=this.getHandParams(e.right);this.h2Radius+=(s.radius-this.h2Radius)*.1,this.h2Strength+=(s.strength-this.h2Strength)*.1;const o=e.right.position.x*i*.8,c=(1-e.right.position.y)*.8;this.material.uniforms.uHand2Pos.value.set(o,c)}else this.h2Strength*=.9}this.material.uniforms.uHand1Radius.value=this.h1Radius,this.material.uniforms.uHand1Strength.value=this.h1Strength,this.material.uniforms.uHand2Radius.value=this.h2Radius,this.material.uniforms.uHand2Strength.value=this.h2Strength,t&&t.length>=3&&(this.material.uniforms.uColor1.value.set(t[0]),this.material.uniforms.uColor2.value.set(t[1]),this.material.uniforms.uColor3.value.set(t[2])),this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0)}destroy(){this.renderer.dispose(),this.renderer.forceContextLoss(),this.material.dispose()}}class ET{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"rectangles",[]);F(this,"baseWidth",1920);F(this,"baseHeight",1080);F(this,"gridStructure",[]);this.canvas=e,this.ctx=t,this.createVariedLayout()}createVariedLayout(){[{x:0,y:0,w:480,h:360},{x:480,y:0,w:320,h:180},{x:800,y:0,w:320,h:180},{x:1120,y:0,w:400,h:180},{x:1520,y:0,w:400,h:180},{x:480,y:180,w:240,h:180},{x:720,y:180,w:240,h:180},{x:960,y:180,w:160,h:180},{x:1120,y:180,w:240,h:180},{x:1360,y:180,w:280,h:180},{x:1640,y:180,w:280,h:180},{x:0,y:360,w:120,h:360},{x:120,y:360,w:120,h:360},{x:240,y:360,w:120,h:360},{x:360,y:360,w:120,h:360},{x:480,y:360,w:320,h:360},{x:800,y:360,w:320,h:360},{x:1120,y:360,w:200,h:180},{x:1320,y:360,w:200,h:180},{x:1520,y:360,w:200,h:180},{x:1720,y:360,w:200,h:180},{x:1120,y:540,w:160,h:180},{x:1280,y:540,w:160,h:180},{x:1440,y:540,w:240,h:180},{x:1680,y:540,w:240,h:180},{x:0,y:720,w:160,h:360},{x:160,y:720,w:160,h:360},{x:320,y:720,w:160,h:360},{x:480,y:720,w:240,h:360},{x:720,y:720,w:240,h:360},{x:960,y:720,w:160,h:360},{x:1120,y:720,w:400,h:360},{x:1520,y:720,w:400,h:360}].forEach((t,i)=>{let s;const o=i%3;o===0?s="vertical":o===1?s="horizontal":s="vertical-reverse",this.rectangles.push({id:i,baseX:t.x,baseY:t.y,baseW:t.w,baseH:t.h,currentX:t.x,currentY:t.y,currentW:t.w,currentH:t.h,gradientDirection:s}),this.gridStructure.push({x:t.x,y:t.y,w:t.w,h:t.h,targetW:t.w,targetH:t.h})})}render(e,t){const i=this.ctx.createLinearGradient(0,0,0,this.canvas.height);i.addColorStop(0,t[2]||"#d9d9d9"),i.addColorStop(1,t[0]||"#1a00ff"),this.ctx.fillStyle=i,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let s=.15;if(e.left||e.right){const h=[];e.left&&h.push(e.left),e.right&&h.push(e.right);let f=0;h.forEach(p=>{let g=p.fingerCount||2;p.gesture==="pinch"&&(g=1),f=Math.max(f,g)}),f===1?s=.02:f===2?s=.15:f===3?s=.25:f===4?s=.35:f>=5&&(s=.5),this.rectangles.forEach((p,g)=>{this.gridStructure[g].targetW=p.baseW,this.gridStructure[g].targetH=p.baseH}),h.forEach(p=>{var v,w;const g=(((v=p.position)==null?void 0:v.x)||.5)*this.baseWidth,m=(((w=p.position)==null?void 0:w.y)||.5)*this.baseHeight,y=p.velocity||0;this.rectangles.forEach((_,S)=>{const b=_.baseX+_.baseW/2,T=_.baseY+_.baseH/2,E=g-b,N=m-T,A=Math.sqrt(E*E+N*N),C=Math.max(0,1-A/700);if(C>.1){const L=Math.atan2(N,E),O=1+C*.6,D=Math.min(y*.5,.4),z=O+Math.abs(Math.cos(L))*D,Z=O+Math.abs(Math.sin(L))*D;this.gridStructure[S].targetW=_.baseW*z,this.gridStructure[S].targetH=_.baseH*Z}})})}else this.rectangles.forEach((h,f)=>{this.gridStructure[f].targetW=h.baseW,this.gridStructure[f].targetH=h.baseH});const o=Math.min(.95,s*gn());this.gridStructure.forEach(h=>{h.w+=(h.targetW-h.w)*o,h.h+=(h.targetH-h.h)*o}),this.normalizeGridPerfectly(),this.rectangles.forEach((h,f)=>{h.currentX=this.gridStructure[f].x,h.currentY=this.gridStructure[f].y,h.currentW=this.gridStructure[f].w,h.currentH=this.gridStructure[f].h});const c=this.canvas.width/this.baseWidth,u=this.canvas.height/this.baseHeight;this.rectangles.forEach(h=>{this.drawRectangle(h,c,u,t)})}normalizeGridPerfectly(){const e=new Map;this.rectangles.forEach((c,u)=>{const h=Math.round(c.baseY/10)*10;e.has(h)||e.set(h,[]),e.get(h).push(u)});const t=Array.from(e.entries()).sort((c,u)=>c[0]-u[0]).map(c=>c[1]);t.forEach(c=>{c.sort((p,g)=>this.rectangles[p].baseX-this.rectangles[g].baseX);const u=c.reduce((p,g)=>p+this.gridStructure[g].w,0),h=this.baseWidth/u;c.forEach(p=>{this.gridStructure[p].w*=h});let f=0;c.forEach(p=>{this.gridStructure[p].x=f,f+=this.gridStructure[p].w})});let i=0;t.forEach(c=>{const u=Math.max(...c.map(h=>this.gridStructure[h].h));c.forEach(h=>{this.gridStructure[h].y=i,this.gridStructure[h].h=u}),i+=u});const s=i,o=this.baseHeight/s;i=0,t.forEach(c=>{const u=this.gridStructure[c[0]].h*o;c.forEach(h=>{this.gridStructure[h].y=i,this.gridStructure[h].h=u}),i+=u})}drawRectangle(e,t,i,s){this.ctx.save();const o=e.currentX*t,c=e.currentY*i,u=e.currentW*t,h=e.currentH*i;let f;e.gradientDirection==="vertical"?(f=this.ctx.createLinearGradient(o,c,o,c+h),f.addColorStop(0,s[2]||"#d9d9d9"),f.addColorStop(1,s[0]||"#1a00ff")):e.gradientDirection==="vertical-reverse"?(f=this.ctx.createLinearGradient(o,c,o,c+h),f.addColorStop(0,s[0]||"#1a00ff"),f.addColorStop(1,s[2]||"#d9d9d9")):(f=this.ctx.createLinearGradient(o,c,o+u,c),f.addColorStop(0,s[2]||"#d9d9d9"),f.addColorStop(1,s[0]||"#1a00ff")),this.ctx.fillStyle=f,this.ctx.fillRect(o,c,u,h),this.ctx.restore()}}class TT{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"threeCanvas");F(this,"scene");F(this,"camera");F(this,"renderer");F(this,"linesMesh");F(this,"pointsMesh");F(this,"gridPoints");F(this,"edges");F(this,"originalToSortedMap");F(this,"time",0);F(this,"interactionLevel",.5);F(this,"handX",.5);F(this,"handY",.5);F(this,"GRID_SIZE",10);F(this,"SPACING",1.5);F(this,"TOTAL_POINTS",1e3);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.initThreeJS(),console.log("🕸️ NetworkCubeRenderer initialized"),console.warn=i}initThreeJS(){this.scene=new us,this.scene.fog=new Ko(0,.06),this.camera=new Pn(75,this.canvas.width/this.canvas.height,.1,1e3),this.camera.position.z=20,this.renderer=new hs({canvas:this.threeCanvas,antialias:!0,alpha:!0}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=this.GRID_SIZE*this.GRID_SIZE*this.GRID_SIZE;this.gridPoints=new Float32Array(e*3);const t=[],i=(this.GRID_SIZE-1)*this.SPACING*.5,s=(v,w,_)=>v+w*this.GRID_SIZE+_*this.GRID_SIZE*this.GRID_SIZE;let o=0;for(let v=0;v<this.GRID_SIZE;v++)for(let w=0;w<this.GRID_SIZE;w++)for(let _=0;_<this.GRID_SIZE;_++){this.gridPoints[o++]=_*this.SPACING-i+(Math.random()-.5)*.3,this.gridPoints[o++]=w*this.SPACING-i+(Math.random()-.5)*.3,this.gridPoints[o++]=v*this.SPACING-i+(Math.random()-.5)*.3;const b=s(_,w,v);_<this.GRID_SIZE-1&&t.push(b,s(_+1,w,v)),w<this.GRID_SIZE-1&&t.push(b,s(_,w+1,v)),v<this.GRID_SIZE-1&&t.push(b,s(_,w,v+1)),Math.random()>.8&&_<this.GRID_SIZE-1&&w<this.GRID_SIZE-1&&t.push(b,s(_+1,w+1,v))}this.edges=new Int32Array(t);const c=new Int32Array(e);for(let v=0;v<e;v++)c[v]=v;for(let v=e-1;v>0;v--){const w=Math.floor(Math.random()*(v+1));[c[v],c[w]]=[c[w],c[v]]}const u=new Float32Array(e*3);this.originalToSortedMap=new Int32Array(e);for(let v=0;v<e;v++){const w=c[v];this.originalToSortedMap[w]=v,u[v*3]=this.gridPoints[w*3],u[v*3+1]=this.gridPoints[w*3+1],u[v*3+2]=this.gridPoints[w*3+2]}const h=new cn;h.setAttribute("position",new yn(u,3));const f=new os({color:16777215,size:.15,transparent:!0,opacity:.9,sizeAttenuation:!0});this.pointsMesh=new Ar(h,f),this.scene.add(this.pointsMesh);const p=new cn,g=this.edges.length*3,m=new Float32Array(g);p.setAttribute("position",new yn(m,3));const y=new Vo({color:65535,transparent:!0,opacity:.2,blending:Oa});this.linesMesh=new dd(p,y),this.linesMesh.frustumCulled=!1,this.scene.add(this.linesMesh)}updateLogic(e,t){let i=0;const s=e.left||e.right;s?(this.handX+=(s.position.x-this.handX)*.1,this.handY+=(s.position.y-this.handY)*.1,e.clapping?i=1.2:s.gesture==="pinch"?i=.05:i=.2+(s.fingerCount||0)/5*.8):(this.handX+=(.5-this.handX)*.05,this.handY+=(.5-this.handY)*.05,i=.3+Math.sin(this.time*.5)*.1),this.interactionLevel+=(i-this.interactionLevel)*.08;const o=t?t.bass:0,c=t?t.high:0,u=Math.max(0,Math.min(1.5,this.interactionLevel+o*.3)),h=this.pointsMesh.geometry.attributes.position.count,f=50,p=Math.floor(f+u*(h-f));this.pointsMesh.geometry.setDrawRange(0,p);const g=this.linesMesh.geometry.attributes.position.array;let m=0;for(let S=0;S<this.edges.length;S+=2){const b=this.edges[S],T=this.edges[S+1],E=this.originalToSortedMap[b],N=this.originalToSortedMap[T];if(E<p&&N<p){const A=b*3,U=T*3;g[m++]=this.gridPoints[A],g[m++]=this.gridPoints[A+1],g[m++]=this.gridPoints[A+2],g[m++]=this.gridPoints[U],g[m++]=this.gridPoints[U+1],g[m++]=this.gridPoints[U+2]}}this.linesMesh.geometry.setDrawRange(0,m/3),this.linesMesh.geometry.attributes.position.needsUpdate=!0;const y=.6+u*.8;this.scene.rotation.y+=.002+u*.005;const v=(this.handY-.5)*1.5,w=(this.handX-.5)*1.5;this.scene.rotation.x+=(v-this.scene.rotation.x)*.1,this.scene.rotation.z+=(w-this.scene.rotation.z)*.1,this.pointsMesh.scale.setScalar(y),this.linesMesh.scale.setScalar(y);const _=this.pointsMesh.material;_.size=.15+c*.1}render(e,t,i){this.time+=.02*gn();const s=this.renderer.getPixelRatio(),o=Math.floor(this.canvas.width*s),c=Math.floor(this.canvas.height*s);(this.threeCanvas.width!==o||this.threeCanvas.height!==c)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=o,this.threeCanvas.height=c,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix()),this.updateLogic(e,i);const u=new Je(t[0]||"#ffffff"),h=new Je(t[1]||"#888888");this.pointsMesh.material.color.lerp(u,.1),this.linesMesh.material.color.lerp(h,.1),this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){Kc(this.scene,this.renderer)}}class CT{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"threeCanvas");F(this,"scene");F(this,"camera");F(this,"renderer");F(this,"mesh");F(this,"points");F(this,"originalPositions");F(this,"currentPositions");F(this,"velocities");F(this,"time",0);F(this,"handX",.5);F(this,"handY",.5);F(this,"isHandPresent",!1);F(this,"pinchStrength",0);F(this,"ROWS",30);F(this,"COLS",30);F(this,"SIZE",12);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.initThreeJS(),console.log("🕸️ ElasticNetRenderer initialized"),console.warn=i}initThreeJS(){this.scene=new us,this.scene.fog=new Ko(0,.08),this.camera=new Pn(75,this.canvas.width/this.canvas.height,.1,1e3),this.camera.position.z=8,this.renderer=new hs({canvas:this.threeCanvas,antialias:!0,alpha:!0}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=new Lr(this.SIZE,this.SIZE,this.COLS,this.ROWS),t=e.attributes.position,i=t.count;this.originalPositions=new Float32Array(i*3),this.currentPositions=new Float32Array(i*3),this.velocities=new Float32Array(i*3);for(let c=0;c<i*3;c++)this.originalPositions[c]=t.array[c],this.currentPositions[c]=t.array[c],this.velocities[c]=0;const s=new qc({color:65535,wireframe:!0,transparent:!0,opacity:.3,side:Hi});this.mesh=new un(e,s),this.scene.add(this.mesh);const o=new os({color:16777215,size:.15,transparent:!0,opacity:.8});this.points=new Ar(e,o),this.scene.add(this.points)}updatePhysics(e,t){const i=this.mesh.geometry.attributes.position,s=i.count,o=t?t.bass:0,c=t?t.high:0,u=t?t.mid:0;let h=0,f=0,p=0;const g=e.left||e.right;g?(this.isHandPresent=!0,h=(g.position.x-.5)*12,f=-(g.position.y-.5)*10,g.gesture==="pinch"?(this.pinchStrength+=(1-this.pinchStrength)*.1,p=-25):(g.fingerCount||5)>=5?(this.pinchStrength+=(0-this.pinchStrength)*.1,p=15):(this.pinchStrength+=(0-this.pinchStrength)*.1,p=5)):(this.isHandPresent=!1,this.pinchStrength+=(0-this.pinchStrength)*.1);const m=c*.05;for(let y=0;y<s;y++){const v=y*3,w=y*3+1,_=y*3+2,S=this.originalPositions[v],b=this.originalPositions[w],T=this.originalPositions[_];let E=this.currentPositions[v],N=this.currentPositions[w],A=this.currentPositions[_];const U=.05+this.pinchStrength*.2,C=(S-E)*U,L=(b-N)*U,O=(T-A)*U;if(this.velocities[v]+=C,this.velocities[w]+=L,this.velocities[_]+=O,this.isHandPresent){const J=E-h,$=N-f,K=A,se=J*J+$*$+K*K,ie=Math.sqrt(se),B=4+o*2;if(ie<B){const X=1-ie/B,ye=J/ie,Me=$/ie,we=K/ie,te=p*X*.2;this.velocities[v]+=ye*te,this.velocities[w]+=Me*te,this.velocities[_]+=we*te}}const D=this.time*(1+u),z=Math.sin(w*.1+D)*.02,Z=Math.cos(v*.1+D)*.02,ne=Math.sin(v*.1+w*.1+D)*.02;this.velocities[v]+=z,this.velocities[w]+=Z,this.velocities[_]+=ne,c>.1&&(this.velocities[v]+=(Math.random()-.5)*m,this.velocities[w]+=(Math.random()-.5)*m,this.velocities[_]+=(Math.random()-.5)*m);const V=.9-this.pinchStrength*.05;this.velocities[v]*=V,this.velocities[w]*=V,this.velocities[_]*=V,this.currentPositions[v]+=this.velocities[v],this.currentPositions[w]+=this.velocities[w],this.currentPositions[_]+=this.velocities[_],i.setXYZ(y,this.currentPositions[v],this.currentPositions[w],this.currentPositions[_])}i.needsUpdate=!0}render(e,t,i){this.time+=.01*gn();const s=this.renderer.getPixelRatio(),o=Math.floor(this.canvas.width*s),c=Math.floor(this.canvas.height*s);(this.threeCanvas.width!==o||this.threeCanvas.height!==c)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=o,this.threeCanvas.height=c,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix()),this.updatePhysics(e,i);const u=new Je(t[0]||"#00ffff"),h=new Je(t[1]||"#ff00ff"),f=this.mesh.material;f.color.lerp(u,.1),f.opacity=.2+((i==null?void 0:i.bass)||0)*.3;const p=this.points.material;p.color.lerp(h,.1),p.size=.1+((i==null?void 0:i.high)||0)*.2,this.camera.position.x=Math.sin(this.time*.2)*.5,this.camera.position.y=Math.cos(this.time*.2)*.5,this.camera.lookAt(0,0,0),this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){Kc(this.scene,this.renderer)}}const vd={chaos:{idle:.06,range:.45,openness:.6,velocity:.4,clap:.5,audio:.3,ease:.03},strips:{base:10,chaos:20,blocks:5,blocksChaos:15},speed:{base:.05,variation:.1,chaos:.35}};class AT{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"threeCanvas");F(this,"scene");F(this,"camera");F(this,"renderer");F(this,"composer");F(this,"material");F(this,"plane");F(this,"chaosLevel",0);F(this,"cfg",vd);F(this,"uniforms",{uTime:{value:0},uColor1:{value:new Q(.5,0,1)},uColor2:{value:new Q(0,0,0)},uColor3:{value:new Q(.8,.9,1)},uChaos:{value:0},uStrips:{value:10},uStripsChaos:{value:20},uBlocks:{value:5},uBlocksChaos:{value:15},uSpeedBase:{value:.05},uSpeedVar:{value:.1},uSpeedChaos:{value:.35},uAudioLow:{value:0},uAudioMid:{value:0},uAudioHigh:{value:0}});F(this,"geometry",new Lr(20,12));this.canvas=e,this.ctx=t,this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.scene=new us,this.camera=new Pn(75,e.width/e.height,.1,100),this.camera.position.z=2,this.renderer=new hs({canvas:this.threeCanvas,alpha:!0,antialias:!0}),this.renderer.setSize(e.width,e.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.material=new ln({uniforms:this.uniforms,vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;
        uniform float uChaos;
        uniform float uStrips;
        uniform float uStripsChaos;
        uniform float uBlocks;
        uniform float uBlocksChaos;
        uniform float uSpeedBase;
        uniform float uSpeedVar;
        uniform float uSpeedChaos;
        uniform float uAudioLow;
        uniform float uAudioHigh;
        
        varying vec2 vUv;

        // Random function
        float random(vec2 st) {
            return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
        }

        float noise(vec2 st) {
            vec2 i = floor(st);
            vec2 f = fract(st);
            float a = random(i);
            float b = random(i + vec2(1.0, 0.0));
            float c = random(i + vec2(0.0, 1.0));
            float d = random(i + vec2(1.0, 1.0));
            vec2 u = f * f * (3.0 - 2.0 * f);
            return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
        }

        void main() {
            vec2 uv = vUv; // Back to standard vertical orientation
            
            // 1. Create Vertical Columns (Strips)
            float numStrips = uStrips + (uChaos * uStripsChaos);
            float stripIdx = floor(uv.x * numStrips);
            
            // 2. Vertical Movement per strip
            // SIGNIFICANTLY REDUCED SPEEDS
            float baseSpeed = uSpeedBase + random(vec2(stripIdx, 1.0)) * uSpeedVar;
            float speed = baseSpeed + uChaos * uSpeedChaos;
            
            float yOffset = uTime * speed;
            
            // Audio reactivity - bass jumps the strips
            if (random(vec2(stripIdx, 2.0)) > 0.5) {
                yOffset += uAudioLow * 0.2; 
            } else {
                yOffset -= uAudioLow * 0.2;
            }

            // 3. Blocky distortion
            float numBlocks = uBlocks + uChaos * uBlocksChaos;
            float blockY = floor((uv.y + yOffset) * numBlocks);
            
            // 4. Determine Color / Noise
            float n = noise(vec2(stripIdx, blockY));
            
            // 5. Color Mixing
            vec3 finalColor = uColor2; 
            
            float intensity = n;
            
            // Horizontal Scanline effect (Standard TV style)
            float scanline = sin(uv.y * 120.0 + uTime * 2.0) * 0.05;
            intensity += scanline;

            if (intensity > 0.4) {
                finalColor = mix(uColor2, uColor1, (intensity - 0.4) * 2.0);
            }
            if (intensity > 0.7) {
                finalColor = mix(finalColor, uColor3, (intensity - 0.7) * 3.0);
            }
            
            // Chromatic Aberration - Toned down
            if (uChaos > 0.2 || uAudioHigh > 0.6) {
                float rOff = 0.005 * (uChaos + uAudioHigh); // Reduced offset
                float nR = noise(vec2(stripIdx, blockY + rOff));
                float nB = noise(vec2(stripIdx, blockY - rOff));
                
                if (nR > 0.6) finalColor.r += 0.2;
                if (nB > 0.6) finalColor.b += 0.2;
            }
            
            // VHS Grain / Noise
            float grain = random(vUv * uTime * 10.0);
            finalColor += (grain - 0.5) * 0.12; 
            
            // Vignette
            float dist = distance(uv, vec2(0.5));
            finalColor *= (1.2 - dist * 0.8);

            gl_FragColor = vec4(finalColor, 1.0);
        }
      `,side:Hi});const i=new Lr(20,12);this.plane=new un(i,this.material),this.scene.add(this.plane);const s=new av(this.scene,this.camera),o=new Bs(new ft(e.width,e.height),1.5,.4,.85);this.composer=new sv(this.renderer),this.composer.addPass(s),this.composer.addPass(o),console.log("📼 DigitalBlockRenderer initialized")}setParams(e){this.cfg=Ei(vd,e)}render(e,t,i){(this.threeCanvas.width!==this.canvas.width||this.threeCanvas.height!==this.canvas.height)&&(this.threeCanvas.width=this.canvas.width,this.threeCanvas.height=this.canvas.height,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.canvas.width,this.canvas.height,!1),this.composer.setSize(this.canvas.width,this.canvas.height));const s=performance.now()*.001;this.uniforms.uTime.value=s;const o=i?i.bass:0,c=i?i.mid:0,u=i?i.high:0;this.uniforms.uAudioLow.value=ss.lerp(this.uniforms.uAudioLow.value,o,.2),this.uniforms.uAudioMid.value=c,this.uniforms.uAudioHigh.value=u;const h=this.cfg.chaos,f=e.right??e.left;let p=h.idle;if(f){const y=f.fingerCount??(f.gesture==="open"?5:0),v=Math.min(1,Math.max(0,y/5)),w=Math.min(1,Math.max(0,f.velocity??0));p=h.idle+(v*h.openness+w*h.velocity)*h.range}else o>.6&&(p=h.idle+o*h.audio);e.clapping&&(p+=h.clap*(e.clapIntensity??1)),p=Math.min(h.range,p),this.chaosLevel=ss.lerp(this.chaosLevel,p,h.ease),this.uniforms.uChaos.value=this.chaosLevel;const g=this.cfg.strips,m=this.cfg.speed;if(this.uniforms.uStrips.value=g.base,this.uniforms.uStripsChaos.value=g.chaos,this.uniforms.uBlocks.value=g.blocks,this.uniforms.uBlocksChaos.value=g.blocksChaos,this.uniforms.uSpeedBase.value=m.base,this.uniforms.uSpeedVar.value=m.variation,this.uniforms.uSpeedChaos.value=m.chaos,t&&t.length>=3){const y=new Je(t[0]),v=new Je(t[3]||"#000000"),w=new Je(t[1]);this.uniforms.uColor1.value.lerp(new Q(y.r,y.g,y.b),.1),this.uniforms.uColor2.value.lerp(new Q(v.r,v.g,v.b),.1),this.uniforms.uColor3.value.lerp(new Q(w.r,w.g,w.b),.1)}this.composer.render(),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){var e;this.composer.dispose(),(e=this.geometry)==null||e.dispose(),this.material.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),console.log("📼 DigitalBlockRenderer destroyed")}}const _d={stamp:{radius:.075,strength:.55,fingerScale:.45,audioSwell:.5},field:{decay:.965,spread:1.6},refraction:{amount:.09,dispersion:.35},highlight:{amount:.9,sharpness:3.5,tint:.35},fallback:{fieldBrightness:.85}},RT=`#version 300 es
out vec2 vUv;
void main() {
  // 0,0 / 2,0 / 0,2 — one oversized triangle, clipped to the viewport.
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,PT=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTex;
uniform vec2 uResolution;
uniform float uTime;
`;function Qg(a,e,t){const i=a.createShader(e);if(!i)throw new Error("Could not create shader");if(a.shaderSource(i,t),a.compileShader(i),!a.getShaderParameter(i,a.COMPILE_STATUS)){const s=a.getShaderInfoLog(i);a.deleteShader(i);const o=t.split(`
`).map((c,u)=>`${String(u+1).padStart(3)} | ${c}`).join(`
`);throw new Error(`Shader failed to compile: ${s}
${o}`)}return i}function fi(a,e){const t=Qg(a,a.VERTEX_SHADER,RT),i=Qg(a,a.FRAGMENT_SHADER,PT+e),s=a.createProgram();if(!s)throw new Error("Could not create program");if(a.attachShader(s,t),a.attachShader(s,i),a.linkProgram(s),a.deleteShader(t),a.deleteShader(i),!a.getProgramParameter(s,a.LINK_STATUS)){const o=a.getProgramInfoLog(s);throw a.deleteProgram(s),new Error(`Program failed to link: ${o}`)}return s}function Na(a,e,t){const i=a.createTexture();a.bindTexture(a.TEXTURE_2D,i),a.texImage2D(a.TEXTURE_2D,0,a.RGBA8,e,t,0,a.RGBA,a.UNSIGNED_BYTE,null),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);const s=a.createFramebuffer();return a.bindFramebuffer(a.FRAMEBUFFER,s),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,i,0),a.bindFramebuffer(a.FRAMEBUFFER,null),{framebuffer:s,texture:i,width:e,height:t}}function Fa(a,e,t,i){e.width===t&&e.height===i||(a.bindTexture(a.TEXTURE_2D,e.texture),a.texImage2D(a.TEXTURE_2D,0,a.RGBA8,t,i,0,a.RGBA,a.UNSIGNED_BYTE,null),e.width=t,e.height=i)}function Ua(a,e){a.deleteFramebuffer(e.framebuffer),a.deleteTexture(e.texture)}function qn(a,e,t,i){a.bindFramebuffer(a.FRAMEBUFFER,e?e.framebuffer:null),a.viewport(0,0,e?e.width:t,e?e.height:i),a.drawArrays(a.TRIANGLES,0,3)}function Rn(a,e,t,i,s){a.activeTexture(a.TEXTURE0+s),a.bindTexture(a.TEXTURE_2D,i),a.uniform1i(a.getUniformLocation(e,t),s)}const Wc=10,LT=`
uniform sampler2D uField;
uniform vec3 uStamps[${Wc}];   // x, y, radius
uniform int uStampCount;
uniform float uDecay;
uniform float uSpread;
uniform float uStrength;

void main() {
  vec2 texel = uSpread / uResolution;

  // Blur and decay what is already there: the trail spreading and fading.
  float h = texture(uField, vUv).r * 0.4;
  h += texture(uField, vUv + vec2( texel.x, 0.0)).r * 0.15;
  h += texture(uField, vUv + vec2(-texel.x, 0.0)).r * 0.15;
  h += texture(uField, vUv + vec2(0.0,  texel.y)).r * 0.15;
  h += texture(uField, vUv + vec2(0.0, -texel.y)).r * 0.15;
  h *= uDecay;

  // Stamp the hands in. Aspect-corrected so a blob is round, not an ellipse.
  float aspect = uResolution.x / uResolution.y;
  for (int i = 0; i < ${Wc}; i++) {
    if (i >= uStampCount) break;
    vec3 stamp = uStamps[i];
    vec2 d = vUv - stamp.xy;
    d.x *= aspect;
    float falloff = 1.0 - smoothstep(0.0, stamp.z, length(d));
    h += falloff * falloff * uStrength;
  }

  fragColor = vec4(clamp(h, 0.0, 1.0), 0.0, 0.0, 1.0);
}`,IT=`
uniform sampler2D uField;
uniform sampler2D uVideo;
uniform vec3 uColor;
uniform float uHasVideo;
uniform float uRefract;
uniform float uDispersion;
uniform float uGloss;
uniform float uSharpness;
uniform float uTint;
uniform float uFieldBrightness;

/** Height at a point, so the gradient can be taken by central difference. */
float height(vec2 uv) {
  return texture(uField, clamp(uv, 0.0, 1.0)).r;
}

void main() {
  vec2 texel = 1.0 / uResolution;

  // Slope of the height field: which way the surface tilts here. This is what
  // TouchDesigner's slope TOP produces, and what does all the work below.
  vec2 slope = vec2(
    height(vUv + vec2(texel.x, 0.0)) - height(vUv - vec2(texel.x, 0.0)),
    height(vUv + vec2(0.0, texel.y)) - height(vUv - vec2(0.0, texel.y))
  );

  float h = height(vUv);

  // Push the image along the slope — how light bends crossing a curved surface.
  vec2 offset = slope * uRefract;

  vec3 image;
  if (uHasVideo > 0.5) {
    // Mirrored, so moving your hand right moves the ripple right.
    vec2 uv = vec2(1.0 - vUv.x, vUv.y);
    vec2 push = vec2(-offset.x, offset.y);
    // Each channel bends slightly differently: thick glass, not clean water.
    float spread = 1.0 + uDispersion;
    image = vec3(
      texture(uVideo, clamp(uv + push * spread, 0.0, 1.0)).r,
      texture(uVideo, clamp(uv + push, 0.0, 1.0)).g,
      texture(uVideo, clamp(uv + push / spread, 0.0, 1.0)).b
    );
  } else {
    // No camera: show the field itself so there is still something to look at.
    image = uColor * h * uFieldBrightness;
  }

  // Gloss on the ridge. Steep slope facing the light reads as a highlight.
  float lit = clamp(dot(normalize(vec3(slope * 40.0, 1.0)), normalize(vec3(-0.6, 0.6, 0.8))), 0.0, 1.0);
  float spec = pow(lit, uSharpness) * smoothstep(0.02, 0.25, h) * uGloss;

  fragColor = vec4(image + mix(vec3(1.0), uColor, uTint) * spec, 1.0);
}`;class NT{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"glCanvas");F(this,"gl");F(this,"cfg",_d);F(this,"fieldProgram");F(this,"refractProgram");F(this,"fields");F(this,"ping",0);F(this,"videoTexture");F(this,"video",null);this.canvas=e,this.ctx=t,this.glCanvas=document.createElement("canvas"),this.glCanvas.width=e.width,this.glCanvas.height=e.height;const i=this.glCanvas.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1});if(!i)throw new Error("WebGL2 is not available");this.gl=i,this.fieldProgram=fi(i,LT),this.refractProgram=fi(i,IT),this.fields=[Na(i,e.width,e.height),Na(i,e.width,e.height)],this.videoTexture=i.createTexture(),i.bindTexture(i.TEXTURE_2D,this.videoTexture),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}setParams(e){this.cfg=Ei(_d,e)}setVideoElement(e){this.video=e}collectStamps(e,t){const i=1+((t==null?void 0:t.bass)??0)*this.cfg.stamp.audioSwell,s=this.cfg.stamp.radius*i,o=[];for(const c of[e.left,e.right]){if(!c||o.length/3>=Wc)continue;o.push(c.position.x,1-c.position.y,s);const u=c.landmarks;if(u&&this.cfg.stamp.fingerScale>0)for(const h of[8,12,16,20]){if(o.length/3>=Wc)break;const f=u[h];f&&o.push(f.x,1-f.y,s*this.cfg.stamp.fingerScale)}}return o}render(e,t,i){const s=this.gl,o=this.canvas.width,c=this.canvas.height;if(o===0||c===0)return;(this.glCanvas.width!==o||this.glCanvas.height!==c)&&(this.glCanvas.width=o,this.glCanvas.height=c,Fa(s,this.fields[0],o,c),Fa(s,this.fields[1],o,c));const u=this.fields[this.ping];this.ping^=1;const h=this.fields[this.ping],f=this.collectStamps(e,i),p=i!=null&&i.beat?1+(i.beatIntensity??0):1;s.useProgram(this.fieldProgram),s.uniform2f(s.getUniformLocation(this.fieldProgram,"uResolution"),o,c),Rn(s,this.fieldProgram,"uField",u.texture,0),s.uniform1i(s.getUniformLocation(this.fieldProgram,"uStampCount"),f.length/3),f.length>0&&s.uniform3fv(s.getUniformLocation(this.fieldProgram,"uStamps"),f),s.uniform1f(s.getUniformLocation(this.fieldProgram,"uDecay"),this.cfg.field.decay),s.uniform1f(s.getUniformLocation(this.fieldProgram,"uSpread"),this.cfg.field.spread),s.uniform1f(s.getUniformLocation(this.fieldProgram,"uStrength"),this.cfg.stamp.strength*p),qn(s,h,o,c);const g=this.video&&this.video.readyState>=2&&this.video.videoWidth>0;g&&(s.bindTexture(s.TEXTURE_2D,this.videoTexture),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!0),s.texImage2D(s.TEXTURE_2D,0,s.RGBA,s.RGBA,s.UNSIGNED_BYTE,this.video));const m=FT(t[0]??"#ffffff");s.useProgram(this.refractProgram),s.uniform2f(s.getUniformLocation(this.refractProgram,"uResolution"),o,c),Rn(s,this.refractProgram,"uField",h.texture,0),Rn(s,this.refractProgram,"uVideo",this.videoTexture,1),s.uniform1f(s.getUniformLocation(this.refractProgram,"uHasVideo"),g?1:0),s.uniform3f(s.getUniformLocation(this.refractProgram,"uColor"),m[0],m[1],m[2]),s.uniform1f(s.getUniformLocation(this.refractProgram,"uRefract"),this.cfg.refraction.amount),s.uniform1f(s.getUniformLocation(this.refractProgram,"uDispersion"),this.cfg.refraction.dispersion),s.uniform1f(s.getUniformLocation(this.refractProgram,"uGloss"),this.cfg.highlight.amount),s.uniform1f(s.getUniformLocation(this.refractProgram,"uSharpness"),this.cfg.highlight.sharpness),s.uniform1f(s.getUniformLocation(this.refractProgram,"uTint"),this.cfg.highlight.tint),s.uniform1f(s.getUniformLocation(this.refractProgram,"uFieldBrightness"),this.cfg.fallback.fieldBrightness),qn(s,null,o,c),this.ctx.clearRect(0,0,o,c),this.ctx.drawImage(this.glCanvas,0,0,o,c)}destroy(){var t;const e=this.gl;e.deleteProgram(this.fieldProgram),e.deleteProgram(this.refractProgram),e.deleteTexture(this.videoTexture),Ua(e,this.fields[0]),Ua(e,this.fields[1]),(t=e.getExtension("WEBGL_lose_context"))==null||t.loseContext()}}function FT(a){const e=a.replace("#","");return e.length<6?[1,1,1]:[parseInt(e.slice(0,2),16)/255,parseInt(e.slice(2,4),16)/255,parseInt(e.slice(4,6),16)/255]}const yd={mode:0,type:{fit:.82,weight:700,tracking:.08,outline:0,strokeWidth:1.5},grid:{columns:14,rows:26,spread:1,breathe:0,breatheSpeed:.4},mask:{reach:.18,threshold:.5,softness:.25,invert:0},radial:{strength:.6,power:2,ring:.55,ringDensity:3.2,twist:.5},wave:{amplitude:.12,frequency:1.5,speed:1,scaleWave:0},depth:{speed:.35,spread:1.4,curve:1.6,size:.1,horizon:.12,steps:18},scatter:{amount:.6,spiral:0,stagger:.35,drift:.5,size:.12},color:{rainbow:0,step:37,cycleSpeed:.3},motion:{handInfluence:1},audio:{bassScale:.3,beatKick:.5},trail:{fadeAlpha:1}},Jg="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",UT=1400;class DT{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"cfg",yd);F(this,"text","N4TH");F(this,"aim",{x:.5,y:.5});F(this,"openness",.25);F(this,"ringEnergy",0);F(this,"ringPhase",0);this.canvas=e,this.ctx=t}setParams(e){this.cfg=Ei(yd,e)}setText(e){const t=e.trim()||"N4TH";t!==this.text&&(this.text=t)}static noise(e){const t=Math.sin(e*12.9898)*43758.5453;return t-Math.floor(t)}colorFor(e,t,i){const{color:s}=this.cfg;return s.rainbow>=.5?`hsl(${(e*s.step+t*s.cycleSpeed*60)%360}, 100%, 62%)`:i[e%Math.max(1,i.length)]??"#ffffff"}stamp(e,t,i,s,o=1,c=this.text,u=this.cfg.type.tracking){const{ctx:h,cfg:f}=this;h.globalAlpha=Math.min(1,Math.max(0,o)),h.font=`${Math.round(f.type.weight)} ${Math.max(1,i)}px ${Jg}`;try{h.letterSpacing=`${u}em`}catch{}f.type.outline>=.5?(h.strokeStyle=s,h.lineWidth=Math.max(.5,f.type.strokeWidth),h.strokeText(c,e,t)):(h.fillStyle=s,h.fillText(c,e,t)),h.globalAlpha=1}fitSize(e,t){const{ctx:i,cfg:s}=this;i.font=`${Math.round(s.type.weight)} 100px ${Jg}`;try{i.letterSpacing=`${s.type.tracking}em`}catch{}const o=i.measureText(e).width;return o>0?t/o*100:10}handPoints(e){const t=[];for(const i of[e.left,e.right]){if(!i)continue;t.push(i.position);const s=i.landmarks;if(s)for(const o of[4,8,12,16,20]){const c=s[o];c&&t.push({x:c.x,y:c.y})}}return t}render(e,t,i){const{ctx:s,cfg:o}=this,c=this.canvas.width,u=this.canvas.height;if(c===0||u===0)return;s.globalCompositeOperation="source-over",s.fillStyle=o.trail.fadeAlpha>=1?"#000":`#000000${ni(o.trail.fadeAlpha*255)}`,s.fillRect(0,0,c,u);const h=$o(),f=(i==null?void 0:i.bass)??0,p=this.handPoints(e);if(p.length>0){const w=p.reduce((S,b)=>S+b.x,0)/p.length,_=p.reduce((S,b)=>S+b.y,0)/p.length;this.aim.x+=(w-this.aim.x)*.16,this.aim.y+=(_-this.aim.y)*.16}const g=[e.left,e.right].filter(Boolean),m=g.length?Math.max(...g.map(w=>w.fingerCount??2)):2;this.openness+=((m-1)/4-this.openness)*.1;const y=Math.max(i!=null&&i.beat?i.beatIntensity:0,((i==null?void 0:i.onset)??0)*.8,e.clapping?e.clapIntensity??1:0);this.ringEnergy=Math.max(this.ringEnergy*.94,y),y>this.ringEnergy*.98&&(this.ringPhase=0),this.ringPhase=(this.ringPhase+.012*gn())%1;const v=1+f*o.audio.bassScale;s.textAlign="center",s.textBaseline="middle",s.lineJoin="round",this.radial(c,u,v,h,t)}spacing(e,t,i){const{cfg:s}=this,o=1+Math.sin(i*s.grid.breatheSpeed)*s.grid.breathe,c=Math.max(1,Math.round(s.grid.columns)),u=Math.max(1,Math.round(s.grid.rows)),h=s.grid.spread*o;return{cols:c,rows:Math.min(u,Math.max(1,Math.floor(UT/c))),dx:e/c*h,dy:t/u*h}}radial(e,t,i,s,o){const{cfg:c}=this,{cols:u,rows:h,dx:f,dy:p}=this.spacing(e,t,s),g=this.fitSize(this.text,f*c.type.fit)*i,m=c.motion.handInfluence,y=.5+(this.aim.x-.5)*m,v=.5+(this.aim.y-.5)*m,w=c.radial.twist*this.openness,_=c.radial.strength*(1+this.ringEnergy*.8);let S=0;for(let b=0;b<h;b++)for(let T=0;T<u;T++,S++){const E=(T+.5)/u,N=(b+.5)/h,A=E-y,U=N-v,C=Math.hypot(A,U),L=Math.min(1,C*1.42),O=Math.cos((C-this.ringPhase)*c.radial.ringDensity*Math.PI*2),D=this.ringEnergy*c.radial.ring*Math.max(0,O),z=1+Math.pow(L,c.radial.power)*_+D,Z=Math.atan2(U,A)+w*L,ne=C*z,V=(y+Math.cos(Z)*ne)*e,J=(v+Math.sin(Z)*ne)*t;V<-f||V>e+f||J<-p||J>t+p||this.stamp(V,J,g,this.colorFor(S,s,o))}}}const Sd={frame:{zoom:1,spreadZoom:.5,handDrift:.12,mirror:0},slice:{count:12,offset:.06,speed:.8,beatKick:1.25},look:{tint:0,gain:1},trail:{fadeAlpha:1}};class kT{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"cfg",Sd);F(this,"video",null);F(this,"url",null);F(this,"drift",{x:0,y:0});this.canvas=e,this.ctx=t}setParams(e){this.cfg=Ei(Sd,e)}setClipUrl(e){var i;if(e===this.url||(this.url=e,(i=this.video)==null||i.pause(),this.video=null,!e))return;const t=document.createElement("video");t.src=e,t.loop=!0,t.muted=!0,t.playsInline=!0,t.play().catch(()=>{}),this.video=t}followTempo(e){const t=Math.min(4,Math.max(.25,gn()));if(Math.abs(e.playbackRate-t)>.02)try{e.playbackRate=t}catch{}}destroy(){var e;(e=this.video)==null||e.pause(),this.video=null}render(e,t,i){const{ctx:s,cfg:o}=this,c=this.canvas.width,u=this.canvas.height;if(c===0||u===0)return;o.trail.fadeAlpha>=1?(s.globalCompositeOperation="source-over",s.fillStyle="#000",s.fillRect(0,0,c,u)):(s.fillStyle=`#000000${ni(o.trail.fadeAlpha*255)}`,s.fillRect(0,0,c,u));const h=this.video,f=h&&h.readyState>=2&&h.videoWidth>0;if(h&&this.followTempo(h),!f){s.fillStyle=`${t[0]??"#ffffff"}66`,s.font="500 14px ui-monospace, monospace",s.textAlign="center",s.fillText(this.url?"LOADING CLIP…":"NO CLIP — UPLOAD ONE IN THE LIBRARY",c/2,u/2);return}const p=[e.left,e.right].filter(Boolean);let g=0,m=0;if(p.length>0){const L=p.reduce((D,z)=>D+z.position.x,0)/p.length,O=p.reduce((D,z)=>D+z.position.y,0)/p.length;g=(L-.5)*2,m=(O-.5)*2}this.drift.x+=(g-this.drift.x)*.1,this.drift.y+=(m-this.drift.y)*.1;const y=e.distanceBetweenHands??.4,v=Math.max(.05,o.frame.zoom*(1+(y-.4)*o.frame.spreadZoom)),w=Math.max(c/h.videoWidth,u/h.videoHeight),_=h.videoWidth*w*v,S=h.videoHeight*w*v,b=(c-_)/2+this.drift.x*c*o.frame.handDrift,T=(u-S)/2+this.drift.y*u*o.frame.handDrift,E=$o(),N=Math.max((i==null?void 0:i.onset)??0,i!=null&&i.beat?1:0),A=1+(o.slice.beatKick-1)*N,U=Math.max(1,Math.round(o.slice.count)),C=u/U;s.save(),o.frame.mirror>=.5&&(s.translate(c,0),s.scale(-1,1));for(let L=0;L<U;L++){const O=L/U*Math.PI*2,D=U<2?0:Math.sin(E*o.slice.speed+O)*c*o.slice.offset*A*(1+Math.abs(this.drift.x)),z=L*C;s.save(),s.beginPath(),s.rect(0,z,c,C+1),s.clip(),s.drawImage(h,b+D,T,_,S),s.restore()}s.restore(),o.look.tint>0&&(s.globalCompositeOperation="overlay",s.fillStyle=`${t[0]??"#ffffff"}${ni(o.look.tint*255)}`,s.fillRect(0,0,c,u),s.globalCompositeOperation="source-over"),o.look.gain>1&&(s.globalCompositeOperation="lighter",s.globalAlpha=Math.min(1,o.look.gain-1),s.drawImage(this.canvas,0,0),s.globalAlpha=1,s.globalCompositeOperation="source-over")}}const Md={mode:0,grid:{columns:48,cellAspect:1.15,fill:.95,spreadDensity:.35},tone:{brightness:0,contrast:1.3,floor:.08,invert:0},letters:{ramp:0,weight:600,outline:0},shape:{rotate:0,anchor:0,minimum:.05},warp:{handPush:.04,ripple:0,rippleSpeed:.6},colour:{fromSource:0,spread:1},audio:{bassScale:.35,beatKick:.25},trail:{fadeAlpha:1}},ex="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",mf=" .:-=+*#%@",gf=6e3;class OT{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"cfg",Md);F(this,"url",null);F(this,"kind","video");F(this,"video",null);F(this,"image",null);F(this,"failed",!1);F(this,"sampler");F(this,"samplerCtx");F(this,"text","N4TH");F(this,"aim",{x:.5,y:.5});this.canvas=e,this.ctx=t,this.sampler=document.createElement("canvas"),this.samplerCtx=this.sampler.getContext("2d",{willReadFrequently:!0})}setParams(e){this.cfg=Ei(Md,e)}setText(e){this.text=e.trim()||"N4TH"}setClipUrl(e,t="video"){var s;if(e===this.url&&t===this.kind||(this.url=e,this.kind=t,this.failed=!1,(s=this.video)==null||s.pause(),this.video=null,this.image=null,!e))return;if(t==="image"){const o=new Image;o.onerror=()=>{this.failed=!0},o.src=e,this.image=o;return}const i=document.createElement("video");i.src=e,i.loop=!0,i.muted=!0,i.playsInline=!0,i.onerror=()=>{this.failed=!0},i.play().catch(()=>{}),this.video=i}followTempo(e){const t=Math.min(4,Math.max(.25,gn()));if(Math.abs(e.playbackRate-t)>.02)try{e.playbackRate=t}catch{}}destroy(){var e;(e=this.video)==null||e.pause(),this.video=null,this.image=null}source(){const{video:e,image:t}=this;return e&&this.followTempo(e),e&&e.readyState>=2&&e.videoWidth>0?{el:e,w:e.videoWidth,h:e.videoHeight}:t&&t.complete&&t.naturalWidth>0?{el:t,w:t.naturalWidth,h:t.naturalHeight}:null}notice(e,t,i){const{ctx:s}=this;s.fillStyle=`${i[0]??"#ffffff"}66`,s.font="500 14px ui-monospace, monospace",s.textAlign="center",s.textBaseline="middle",s.fillText(this.failed?"THAT FILE WOULD NOT OPEN":this.url?"LOADING…":"NO FILE — UPLOAD ONE IN THE LIBRARY",e/2,t/2)}colorFor(e,t,i,s,o){const{colour:c}=this.cfg,u=Math.max(1,Math.round(c.spread)),h=o[Math.floor(e/u)%Math.max(1,o.length)]??"#ffffff";if(c.fromSource<=0)return h;if(c.fromSource>=1)return`rgb(${t}, ${i}, ${s})`;const f=h.replace("#",""),p=f.length===3?f.split("").map(_=>_+_).join(""):f,g=parseInt(p.slice(0,2),16)||0,m=parseInt(p.slice(2,4),16)||0,y=parseInt(p.slice(4,6),16)||0,v=c.fromSource,w=(_,S)=>Math.round(_+(S-_)*v);return`rgb(${w(g,t)}, ${w(m,i)}, ${w(y,s)})`}render(e,t,i){const{ctx:s,cfg:o}=this,c=this.canvas.width,u=this.canvas.height;if(c===0||u===0)return;s.globalCompositeOperation="source-over",s.fillStyle=o.trail.fadeAlpha>=1?"#000":`#000000${ni(o.trail.fadeAlpha*255)}`,s.fillRect(0,0,c,u);const h=this.source();if(!h){this.notice(c,u,t);return}const f=[e.left,e.right].filter(Boolean);if(f.length>0){const ne=f.reduce((J,$)=>J+$.position.x,0)/f.length,V=f.reduce((J,$)=>J+$.position.y,0)/f.length;this.aim.x+=(ne-this.aim.x)*.08,this.aim.y+=(V-this.aim.y)*.08}const g=1-((e.distanceBetweenHands??.4)-.4)*o.grid.spreadDensity;let m=Math.max(2,Math.round(o.grid.columns*Math.max(.25,g)));const v=c/m*Math.max(.2,o.grid.cellAspect);let w=Math.max(2,Math.round(u/v));m*w>gf&&(w=Math.max(2,Math.floor(gf/m)),m=Math.max(2,Math.min(m,Math.floor(gf/w))));const _=this.samplerCtx;if(!_)return;(this.sampler.width!==m||this.sampler.height!==w)&&(this.sampler.width=m,this.sampler.height=w);const S=Math.max(m/h.w,w/h.h),b=h.w*S,T=h.h*S;_.drawImage(h.el,(m-b)/2,(w-T)/2,b,T);let E;try{E=_.getImageData(0,0,m,w).data}catch{this.notice(c,u,t);return}const N=$o(),A=(i==null?void 0:i.bass)??0,U=i!=null&&i.beat?o.audio.beatKick:0,C=1+A*o.audio.bassScale+U,L=Math.round(o.mode),O=this.text,D=c/m,z=u/w,Z=Math.min(D,z)*o.grid.fill*C;if(s.textAlign="center",s.textBaseline="middle",s.lineJoin="round",L===0){s.font=`${Math.round(o.letters.weight)} 100px ${ex}`;const ne=s.measureText("M").width||60,V=Math.max(1,D*o.grid.fill*C/(ne/100));s.font=`${Math.round(o.letters.weight)} ${V}px ${ex}`,s.lineWidth=Math.max(.5,V*.06)}for(let ne=0;ne<w;ne++)for(let V=0;V<m;V++){const J=(ne*m+V)*4,$=E[J],K=E[J+1],se=E[J+2];let ie=(.2126*$+.7152*K+.0722*se)/255;if(ie=(ie-.5)*o.tone.contrast+.5+o.tone.brightness,o.tone.invert>=.5&&(ie=1-ie),ie=Math.min(1,Math.max(0,ie)),ie<=o.tone.floor)continue;const B=(ie-o.tone.floor)/(1-o.tone.floor);let X=(V+.5)*D,ye=(ne+.5)*z;if(o.warp.handPush!==0&&f.length>0){const te=X/c-this.aim.x,xe=ye/u-this.aim.y,pe=Math.exp(-(te*te+xe*xe)*8);X+=te*pe*c*o.warp.handPush,ye+=xe*pe*u*o.warp.handPush}o.warp.ripple!==0&&(ye+=Math.sin(V*.35+N*o.warp.rippleSpeed)*z*o.warp.ripple);const Me=ne*m+V,we=this.colorFor(Me,$,K,se,t);switch(L){case 1:{const te=Z/2*Math.max(o.shape.minimum,B);s.fillStyle=we,s.beginPath(),s.arc(X,ye,te,0,Math.PI*2),s.fill();break}case 2:{const te=Z*Math.max(o.shape.minimum,B);s.fillStyle=we,o.shape.rotate!==0?(s.save(),s.translate(X,ye),s.rotate(o.shape.rotate*Math.PI*.25),s.fillRect(-te/2,-te/2,te,te),s.restore()):s.fillRect(X-te/2,ye-te/2,te,te);break}case 3:{const te=Math.max(1,D*o.grid.fill*.6),xe=z*o.grid.fill*C*Math.max(o.shape.minimum,B),pe=o.shape.anchor>=.5?(ne+1)*z-xe+(ye-(ne+.5)*z):ye-xe/2;s.fillStyle=we,s.fillRect(X-te/2,pe,te,xe);break}default:{const te=o.letters.ramp>=.5?O[Me%O.length]:mf[Math.min(mf.length-1,Math.round(B*(mf.length-1)))];if(!te||te===" ")break;o.letters.outline>=.5?(s.strokeStyle=we,s.strokeText(te,X,ye)):(s.globalAlpha=o.letters.ramp>=.5?B:1,s.fillStyle=we,s.fillText(te,X,ye),s.globalAlpha=1);break}}}}}const wd={form:{lobes:7,spread:1.3,size:.72,blend:.82,ripple:.2,rippleScale:1.5},motion:{drift:.14,churn:.2,spin:.08},material:{dispersion:.85,rimTightness:2,split:.1,silver:.92,facing:.05,polish:52},light:{keyX:-.55,keyY:.72,key:2.1,fill:.3,ambient:.03},hands:{push:.55,spread:.45,kick:.55},look:{grain:.055,gain:1}},zT=`#version 300 es
in vec2 p;
void main() { gl_Position = vec4(p, 0.0, 1.0); }`,BT=`#version 300 es
precision highp float;
out vec4 fragColor;

uniform vec2  uSize;
uniform float uTime;
uniform float uLobes, uSpread, uSize2, uBlend, uRipple, uRippleScale;
uniform float uDrift, uChurn, uSpin;
uniform float uDispersion, uRimTight, uSplit, uSilver, uFacing, uPolish;
uniform vec2  uKey;
uniform float uKeyGain, uFill, uAmbient;
uniform vec2  uPush;
uniform float uKick, uGrain, uGain, uHue;

// ── noise ────────────────────────────────────────────────────────────────────
vec3 hash3(vec3 p) {
  p = vec3(dot(p, vec3(127.1, 311.7, 74.7)),
           dot(p, vec3(269.5, 183.3, 246.1)),
           dot(p, vec3(113.5, 271.9, 124.6)));
  return -1.0 + 2.0 * fract(sin(p) * 43758.5453123);
}

float noise(vec3 p) {
  vec3 i = floor(p), f = fract(p);
  vec3 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(dot(hash3(i + vec3(0,0,0)), f - vec3(0,0,0)),
                     dot(hash3(i + vec3(1,0,0)), f - vec3(1,0,0)), u.x),
                 mix(dot(hash3(i + vec3(0,1,0)), f - vec3(0,1,0)),
                     dot(hash3(i + vec3(1,1,0)), f - vec3(1,1,0)), u.x), u.y),
             mix(mix(dot(hash3(i + vec3(0,0,1)), f - vec3(0,0,1)),
                     dot(hash3(i + vec3(1,0,1)), f - vec3(1,0,1)), u.x),
                 mix(dot(hash3(i + vec3(0,1,1)), f - vec3(0,1,1)),
                     dot(hash3(i + vec3(1,1,1)), f - vec3(1,1,1)), u.x), u.y), u.z);
}

// Polynomial smooth minimum: the join that makes two balls one surface with a
// neck rather than two balls touching.
float smin(float a, float b, float k) {
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}

mat2 rot(float a) { float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }

// ── the form ─────────────────────────────────────────────────────────────────
float map(vec3 p) {
  p.xz *= rot(uTime * uSpin);
  p.xy += uPush;

  float d = 1e9;
  for (int i = 0; i < 7; i++) {
    if (float(i) >= uLobes) break;
    float f = float(i);
    // Each lobe on its own slow orbit, at a rate that does not divide into the
    // others, so the arrangement never settles into a repeat.
    float t = uTime * uDrift;
    vec3 c = vec3(
      sin(t * (0.7 + f * 0.13) + f * 2.4),
      cos(t * (0.6 + f * 0.17) + f * 1.7),
      sin(t * (0.5 + f * 0.11) + f * 3.1)
    ) * uSpread;
    float r = uSize2 * (0.72 + 0.4 * sin(f * 1.9 + t));
    /*
     * Stretched, not round.
     *
     * Spheres merge into a bunch of grapes. The reference is drapery — tall
     * folds that fall and pinch — so each lobe is squashed vertically before
     * the distance is taken, which turns the same metaball into a hanging
     * sheet and the joins between them into ribbons rather than necks.
     */
    vec3 q = (p - c) * vec3(1.0, 0.62, 1.0);
    d = smin(d, length(q) - r, uBlend);
  }

  // The ripple is what stops it reading as a pile of spheres.
  d += noise(p * uRippleScale + vec3(0.0, 0.0, uTime * uChurn)) * uRipple;
  d += noise(p * uRippleScale * 2.7 + vec3(uTime * uChurn * 0.6)) * uRipple * 0.35;
  return d;
}

/**
 * How enclosed a point is, from a few taps along its own normal.
 *
 * This is what puts the black in the folds. Without it every crevice is lit
 * as brightly as every ridge, and the form reads as a soft pale lump instead
 * of as metal — the deep inky concaves in the reference are occlusion, not
 * shading.
 */
float occlusion(vec3 p, vec3 n) {
  float sum = 0.0;
  float weight = 1.0;
  for (int i = 1; i <= 5; i++) {
    float step = 0.035 * float(i);
    sum += (step - map(p + n * step)) * weight;
    weight *= 0.65;
  }
  return clamp(1.0 - 2.2 * sum, 0.0, 1.0);
}

vec3 normalAt(vec3 p) {
  vec2 e = vec2(0.0015, 0.0);
  return normalize(vec3(
    map(p + e.xyy) - map(p - e.xyy),
    map(p + e.yxy) - map(p - e.yxy),
    map(p + e.yyx) - map(p - e.yyx)));
}

float march(vec3 ro, vec3 rd, out bool hit) {
  float t = 0.0;
  hit = false;
  for (int i = 0; i < 96; i++) {
    vec3 p = ro + rd * t;
    float d = map(p);
    if (d < 0.0015 * t + 0.0009) { hit = true; break; }
    t += d * 0.82;          // understep: the noise makes the field non-exact
    if (t > 12.0) break;
  }
  return t;
}

/*
 * What a reflected ray finds.
 *
 * There is no environment map — the scene is a void and a couple of lights, so
 * the reflection is those lights and nothing else. That is deliberate: every
 * bit of colour then comes from the dispersion rather than from something the
 * shader was handed, which is what keeps it reading as spectral rather than
 * as tinted.
 */
float env(vec3 dir, vec3 key) {
  float spec = pow(max(dot(dir, key), 0.0), uPolish) * uKeyGain;
  float broad = pow(max(dot(dir, key), 0.0), 3.0) * 0.5 * uKeyGain;
  vec3 fillDir = normalize(vec3(0.6, -0.5, 0.4));
  float back = pow(max(dot(dir, fillDir), 0.0), 9.0) * uFill;

  /*
   * A gradient for everything the two lights do not cover.
   *
   * Without it the only bright thing on the surface is a small specular dot
   * and the rest reads as flat grey — which is what the first version looked
   * like. Mirrors show their surroundings, so a chrome surface in a void is
   * a grey blob no matter how good the material is. This is the cheapest
   * possible surrounding: brighter above, darker below, and it is what makes
   * the long sweeping highlights run along the folds.
   */
  /*
   * A gradient for everything the two lights do not cover.
   *
   * Mirrors show their surroundings, so a chrome surface in a pure void is a
   * grey blob however good the material is — that is what the first version
   * looked like. But the second version made this bright and even, and the
   * result was milky, like pearl. A room is not evenly lit: there is
   * something above and nothing below. Dark underneath is what gives chrome
   * its contrast.
   */
  /*
   * A studio, not a sky.
   *
   * An even gradient overhead lights roughly half of a convex form, and the
   * result is pale all over — twice now that has turned this into pearl. A
   * black room with one softbox above is what the reference actually is, and
   * it is the darkness between the reflections that makes the bright ones
   * read as mirror rather than as paint.
   */
  float box = smoothstep(0.45, 0.95, dir.y) * 0.62;
  float bounce = smoothstep(0.0, -0.8, dir.y) * 0.035;
  return spec + broad + back + box + bounce;
}

// Hue rotation, so the layer's colour control reaches a shader whose colour is
// generated rather than chosen.
vec3 turn(vec3 c, float a) {
  const vec3 k = vec3(0.57735);
  float ca = cos(a);
  return c * ca + cross(k, c) * sin(a) + k * dot(k, c) * (1.0 - ca);
}

void main() {
  vec2 uv = (gl_FragCoord.xy * 2.0 - uSize) / min(uSize.x, uSize.y);
  vec3 ro = vec3(0.0, 0.0, 3.0);
  vec3 rd = normalize(vec3(uv, -1.3));

  bool hit;
  float t = march(ro, rd, hit);

  vec3 col = vec3(0.0);
  if (hit) {
    vec3 p = ro + rd * t;
    vec3 n = normalAt(p);
    vec3 key = normalize(vec3(uKey, 0.55));

    // Fresnel: how far round the surface has turned from the eye. Everything
    // spectral hangs off this, which is why the colour tracks the curvature.
    float fres = pow(1.0 - clamp(dot(n, -rd), 0.0, 1.0), uRimTight);

    // Three reflections at slightly different indices. The separation is the
    // rainbow — no LUT, no gradient, just red, green and blue bouncing off at
    // angles that differ by a fraction of a degree.
    float split = uSplit * (0.35 + fres) * uDispersion;
    vec3 r = reflect(rd, normalize(n + vec3( split,  split * 0.6, 0.0)));
    vec3 g = reflect(rd, normalize(n));
    vec3 b = reflect(rd, normalize(n - vec3( split,  split * 0.6, 0.0)));

    /*
     * A mirror is its reflection, multiplied — not a surface with a reflection
     * added on top.
     *
     * Adding them is what kept this pale through several attempts: the
     * environment landed at full strength wherever a normal happened to face
     * up, so no part of the form could ever be dark, however black the room
     * was. A metal's colour is the environment times its reflectance, and a
     * chrome-like metal reflects strongly at every angle — so the black in
     * the folds is not shading, it is a reflection of nothing.
     */
    /*
     * Where the colour concentrates.
     *
     * Two places: glancing angles, which the Fresnel term gives, and
     * curvature ridges. One extra tap along the normal estimates the second —
     * on a flat surface the field a short way out grows by exactly that
     * distance, and the shortfall is how sharply the surface is bending. A
     * tight pinch therefore picks up bands a broad swell does not, which is
     * what makes the iridescence follow the form instead of the outline.
     */
    float ridge = clamp((0.06 - map(p + n * 0.06)) * 9.0, 0.0, 1.0);

    /*
     * Thin-film interference. The mean is taken out so this can only tint:
     * added whole it brings its own grey, and enough of that turns the form
     * milky — which it did, twice.
     */
    float thickness = fres * 4.2 + ridge * 2.6 + (1.0 - abs(n.z)) * 0.7 + uTime * 0.18;
    vec3 film = 0.5 + 0.5 * cos(thickness * 1.7 + vec3(0.0, 2.09, 4.19));
    film -= dot(film, vec3(0.3333));

    vec3 reflection = vec3(env(r, key), env(g, key), env(b, key));
    vec3 tint = vec3(uSilver, uSilver * 1.02, uSilver * 1.12);
    col = reflection * tint;

    // Dispersion rides the reflection rather than sitting beside it: a rainbow
    // in an unlit fold would give the game away immediately.
    float lit = max(max(reflection.r, reflection.g), reflection.b);
    col += film * (0.1 + 2.2 * fres * fres + ridge * 1.1) * uDispersion
         * (0.35 + lit * 1.4);

    // A little extra rim, so the silhouette keeps its edge against the black.
    col += tint * fres * fres * uFacing * 6.0;

    col *= occlusion(p, n);
    col += uAmbient;

    // Distance keeps the far side of the form from competing with the near.
    col *= exp(-max(0.0, t - 3.0) * 0.16);
  }

  col = turn(col, uHue);
  col *= uGain;
  // A shoulder that only bites near the top, so highlights roll off without
  // the darks being lifted into grey along with them.
  col = col / (1.0 + col * 0.45);
  col = pow(max(col, 0.0), vec3(0.52));

  // Grain, which is most of what makes a render look photographed.
  float grain = fract(sin(dot(gl_FragCoord.xy + uTime, vec2(12.9898, 78.233))) * 43758.5453);
  col += (grain - 0.5) * uGrain;

  fragColor = vec4(max(col, 0.0), 1.0);
}`;class HT{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"cfg",wd);F(this,"gl",null);F(this,"surface");F(this,"program",null);F(this,"uniforms",{});F(this,"aim",{x:0,y:0});F(this,"kick",0);F(this,"swell",0);F(this,"openness",.25);F(this,"failed",!1);this.canvas=e,this.ctx=t,this.surface=document.createElement("canvas"),this.init()}setParams(e){this.cfg=Ei(wd,e)}init(){const e=this.surface.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"high-performance"});if(!e){this.failed=!0;return}this.gl=e;const t=(h,f)=>{const p=e.createShader(h);return e.shaderSource(p,f),e.compileShader(p),e.getShaderParameter(p,e.COMPILE_STATUS)?p:(console.error("Chrome shader:",e.getShaderInfoLog(p)),null)},i=t(e.VERTEX_SHADER,zT),s=t(e.FRAGMENT_SHADER,BT);if(!i||!s){this.failed=!0;return}const o=e.createProgram();if(e.attachShader(o,i),e.attachShader(o,s),e.linkProgram(o),!e.getProgramParameter(o,e.LINK_STATUS)){console.error("Chrome link:",e.getProgramInfoLog(o)),this.failed=!0;return}this.program=o,e.useProgram(o);const c=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,c),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW);const u=e.getAttribLocation(o,"p");e.enableVertexAttribArray(u),e.vertexAttribPointer(u,2,e.FLOAT,!1,0,0);for(const h of["uSize","uTime","uLobes","uSpread","uSize2","uBlend","uRipple","uRippleScale","uDrift","uChurn","uSpin","uDispersion","uRimTight","uSplit","uSilver","uFacing","uPolish","uKey","uKeyGain","uFill","uAmbient","uPush","uKick","uGrain","uGain","uHue"])this.uniforms[h]=e.getUniformLocation(o,h)}destroy(){var t;const e=this.gl;e&&(this.program&&e.deleteProgram(this.program),(t=e.getExtension("WEBGL_lose_context"))==null||t.loseContext(),this.gl=null,this.program=null)}hueFrom(e){const t=(e[0]??"#8888ff").replace("#",""),i=t.length===3?t.split("").map(u=>u+u).join(""):t,s=(parseInt(i.slice(0,2),16)||0)/255,o=(parseInt(i.slice(2,4),16)||0)/255,c=(parseInt(i.slice(4,6),16)||0)/255;return Math.atan2(Math.sqrt(3)*(o-c),2*s-o-c)-2.2}render(e,t,i){const{ctx:s,cfg:o}=this,c=this.canvas.width,u=this.canvas.height;if(c===0||u===0)return;const h=this.gl;if(this.failed||!h||!this.program){s.fillStyle="#000",s.fillRect(0,0,c,u),s.fillStyle="rgba(255,255,255,0.4)",s.font="500 14px ui-monospace, monospace",s.textAlign="center",s.fillText("CHROME NEEDS WEBGL2",c/2,u/2);return}const f=.6,p=Math.max(2,Math.round(c*f)),g=Math.max(2,Math.round(u*f));(this.surface.width!==p||this.surface.height!==g)&&(this.surface.width=p,this.surface.height=g),h.viewport(0,0,p,g),h.useProgram(this.program);const m=[e.left,e.right].filter(Boolean),y=m.length?Math.max(...m.map(N=>N.fingerCount??2)):2;this.openness+=((y-1)/4-this.openness)*.08;let v=0,w=0;if(m.length>0){const N=m.reduce((U,C)=>U+C.position.x,0)/m.length,A=m.reduce((U,C)=>U+C.position.y,0)/m.length;v=(N-.5)*2,w=(.5-A)*2}this.aim.x+=(v-this.aim.x)*.14,this.aim.y+=(w-this.aim.y)*.14;const _=Math.min(1,((i==null?void 0:i.bass)??0)*.8+((i==null?void 0:i.onset)??0)*.35);this.swell+=(_-this.swell)*(_>this.swell?.014:.006);const S=e.clapping?e.clapIntensity??1:0;this.kick=Math.max(this.kick*.94,S);const b=e.distanceBetweenHands??.4,T=this.uniforms,E=(N,A)=>h.uniform1f(T[N],A);h.uniform2f(T.uSize,p,g),E("uTime",$o()),E("uLobes",Math.max(1,Math.min(7,Math.round(o.form.lobes)))),E("uSpread",o.form.spread*(1+(b-.4)*o.hands.spread+(this.openness-.25)*.55)+this.kick*o.hands.kick*.35),E("uSize2",o.form.size*(1+this.swell*.14)),E("uBlend",Math.max(.05,o.form.blend)),E("uRipple",o.form.ripple*(1.35-this.openness*.7+this.kick*o.hands.kick*1.6)),E("uRippleScale",o.form.rippleScale),E("uDrift",o.motion.drift*(1+this.swell*.18)),E("uChurn",o.motion.churn),E("uSpin",o.motion.spin),E("uDispersion",o.material.dispersion*(1+this.swell*.18+this.kick*.3)),E("uRimTight",Math.max(.5,o.material.rimTightness)),E("uSplit",o.material.split),E("uSilver",o.material.silver),E("uFacing",o.material.facing),E("uPolish",Math.max(2,o.material.polish)),h.uniform2f(T.uKey,o.light.keyX,o.light.keyY),E("uKeyGain",o.light.key),E("uFill",o.light.fill),E("uAmbient",o.light.ambient),h.uniform2f(T.uPush,this.aim.x*o.hands.push,this.aim.y*o.hands.push),E("uKick",this.kick),E("uGrain",o.look.grain),E("uGain",o.look.gain),E("uHue",this.hueFrom(t)),h.drawArrays(h.TRIANGLES,0,3),s.globalCompositeOperation="source-over",s.fillStyle="#000",s.fillRect(0,0,c,u),s.imageSmoothingEnabled=!0,s.drawImage(this.surface,0,0,c,u)}}function ov(a,e,t,i){var o,c;let s;switch(a){case"geometric":s=new D0(e,t);break;case"particles":s=new my(e,t);break;case"waves":s=new gy(e,t);break;case"glitch":s=new xy(e,t);break;case"technical":s=new vy(e,t);break;case"lottie":s=new _y(e,t);break;case"lottie-classic":s=new ET(e,t);break;case"linefield":s=new wy(e,t);break;case"thicklines":s=new MT(e,t);break;case"flowfield":s=new wT(e,t);break;case"liquidchrome":s=new bT(e,t);break;case"chromatic":s=new yy(e,t);break;case"halftone":s=new Sy(e,t);break;case"matrix":s=new My(e,t);break;case"distortedcamera":s=new sT(e,t),i&&((o=s.setVideoElement)==null||o.call(s,i));break;case"cyberstream":s=new aT(e,t);break;case"facecloud":s=new oT(e,t);break;case"face":s=new xd(e,t);break;case"morphing":s=new lT(e,t);break;case"cubewall":s=new cT(e,t);break;case"smokehand-torus":s=new Vc(e,t);break;case"smokehand-hand":s=new Vc(e,t),(c=s.setSmokeHandModel)==null||c.call(s,"hand");break;case"network-cube":s=new TT(e,t);break;case"elastic-net":s=new CT(e,t);break;case"text":s=new DT(e,t);break;case"video":s=new kT(e,t);break;case"mosaic":s=new OT(e,t);break;case"chrome":s=new HT(e,t);break;case"ripple":s=new NT(e,t);break;case"digitalblocks":s=new AT(e,t);break;default:s=new D0(e,t);break}return s}const tx=[.35,.45,.8,1.15,1.5,1.9],GT=3.6,VT=2.2,WT=6;function nx(){return{rate:1,clap:0}}function ix(a){if(!a)return null;if(a.gesture==="fist")return tx[0];const e=a.fingerCount;return e===void 0?null:tx[Math.min(5,Math.max(1,Math.round(e)))]}function rx(a,e,t){const i=[ix(a.left),ix(a.right)].filter(c=>c!==null),s=i.length?Math.max(...i):1,o=Math.min(1,t*WT);return e.rate+=(s-e.rate)*o,a.clapping&&(e.clap=Math.max(e.clap,GT*Math.max(.5,a.clapIntensity??1))),e.clap=Math.max(0,e.clap-e.clap*VT*t),e.rate+e.clap}const Va={master:{enabled:1},transition:{enabled:1,duration:1},feedback:{enabled:1,mix:1,amount:0,zoom:1,rotate:0,offsetX:0,offsetY:0,hueShift:0},colour:{enabled:1,mix:1,hue:0,saturation:1},displace:{enabled:1,mix:1,amount:0,scale:3,speed:.2},rgbSplit:{enabled:1,mix:1,amount:0},kaleido:{enabled:1,mix:1,segments:0,spin:0},pixelate:{enabled:1,mix:1,pixel:0,levels:0},noiseTile:{enabled:1,mix:1,size:0,grain:.35,drift:.4},echo:{enabled:1,mix:1,count:0,depth:.18,fade:.68,speed:.25},fluted:{enabled:1,mix:1,ribs:0,bend:.5,shine:.35,vertical:1}},Zc=`
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float valueNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y);
}

vec3 hueRotate(vec3 c, float angle) {
  const vec3 k = vec3(0.57735);
  float cosA = cos(angle);
  return c * cosA + cross(k, c) * sin(angle) + k * dot(k, c) * (1.0 - cosA);
}
`,XT=`${Zc}
uniform sampler2D uFeedback;
uniform float uAmount;
uniform float uZoom;
uniform float uRotate;
uniform vec2  uOffset;
uniform float uHueShift;
uniform float uMix;

void main() {
  vec3 src = texture(uTex, vUv).rgb;

  vec2 c = vUv - 0.5;
  c.x *= uResolution.x / uResolution.y;          // rotate in square space
  float s = sin(uRotate), co = cos(uRotate);
  c = mat2(co, -s, s, co) * c;
  c /= max(uZoom, 0.0001);
  c.x /= uResolution.x / uResolution.y;
  vec2 fuv = c + 0.5 + uOffset;

  vec3 fb = texture(uFeedback, clamp(fuv, 0.0, 1.0)).rgb * uAmount;
  fb = hueRotate(fb, uHueShift);

  vec3 wet = 1.0 - (1.0 - src) * (1.0 - clamp(fb, 0.0, 1.0));
  fragColor = vec4(mix(src, wet, uMix), 1.0);
}`,jT=`${Zc}
uniform float uAmount;
uniform float uScale;
uniform float uSpeed;
uniform float uMix;

void main() {
  float t = uTime * uSpeed;
  vec2 d = vec2(
    valueNoise(vUv * uScale + vec2(t, 0.0)),
    valueNoise(vUv * uScale + vec2(0.0, t) + 17.3)
  ) - 0.5;
  vec3 wet = texture(uTex, clamp(vUv + d * uAmount, 0.0, 1.0)).rgb;
  fragColor = vec4(mix(texture(uTex, vUv).rgb, wet, uMix), 1.0);
}`,qT=`
uniform float uAmount;
uniform float uMix;

void main() {
  vec2 dir = (vUv - 0.5) * uAmount;
  vec3 wet = vec3(
    texture(uTex, clamp(vUv + dir, 0.0, 1.0)).r,
    texture(uTex, vUv).g,
    texture(uTex, clamp(vUv - dir, 0.0, 1.0)).b);
  fragColor = vec4(mix(texture(uTex, vUv).rgb, wet, uMix), 1.0);
}`,YT=`
uniform float uSegments;
uniform float uSpin;
uniform float uMix;

void main() {
  vec2 p = vUv - 0.5;
  p.x *= uResolution.x / uResolution.y;

  float a = atan(p.y, p.x) + uSpin;
  float r = length(p);

  float seg = 6.2831853 / uSegments;
  a = mod(a, seg);
  a = abs(a - seg * 0.5);                        // mirror each wedge

  vec2 q = vec2(cos(a), sin(a)) * r;
  q.x /= uResolution.x / uResolution.y;
  vec3 wet = texture(uTex, clamp(q + 0.5, 0.0, 1.0)).rgb;
  fragColor = vec4(mix(texture(uTex, vUv).rgb, wet, uMix), 1.0);
}`,$T=`
uniform float uPixel;
uniform float uLevels;
uniform float uMix;

void main() {
  vec2 uv = vUv;
  if (uPixel > 1.0) {
    vec2 grid = uResolution / uPixel;
    uv = (floor(vUv * grid) + 0.5) / grid;
  }
  vec3 c = texture(uTex, uv).rgb;
  if (uLevels >= 2.0) {
    c = floor(c * uLevels + 0.5) / uLevels;
  }
  fragColor = vec4(mix(texture(uTex, vUv).rgb, c, uMix), 1.0);
}`,KT=`
uniform sampler2D uNext;
uniform float uMix;

void main() {
  fragColor = vec4(mix(texture(uTex, vUv).rgb, texture(uNext, vUv).rgb, uMix), 1.0);
}`,ZT=`
void main() {
  fragColor = vec4(texture(uTex, vUv).rgb, 1.0);
}`,QT=`${Zc}
uniform float uHue;
uniform float uSaturation;
uniform float uMix;

void main() {
  vec3 src = texture(uTex, vUv).rgb;
  vec3 wet = hueRotate(src, uHue);
  float grey = dot(wet, vec3(0.299, 0.587, 0.114));
  wet = mix(vec3(grey), wet, uSaturation);
  fragColor = vec4(mix(src, clamp(wet, 0.0, 1.0), uMix), 1.0);
}`,JT=`${Zc}
uniform float uSize;
uniform float uGrain;
uniform float uDrift;
uniform float uMix;

/** Ordered 4x4 threshold matrix, normalised to 0..1. */
float bayer(vec2 cell) {
  vec2 c = mod(floor(cell), 4.0);
  int index = int(c.x) + int(c.y) * 4;
  float m[16] = float[16](
     0.0,  8.0,  2.0, 10.0,
    12.0,  4.0, 14.0,  6.0,
     3.0, 11.0,  1.0,  9.0,
    15.0,  7.0, 13.0,  5.0);
  return (m[index] + 0.5) / 16.0;
}

void main() {
  vec2 px = max(vec2(1.0), vec2(uSize));
  vec2 cell = floor(vUv * uResolution / px);
  // Sample the middle of the cell, so every pixel in it agrees.
  vec2 uv = (cell + 0.5) * px / uResolution;
  vec4 src = texture(uTex, uv);

  // The threshold, plus noise that moves if drift is up.
  float threshold = bayer(cell);
  float wander = valueNoise(cell * 0.7 + vec2(uTime * uDrift * 3.0, 0.0));
  threshold = mix(threshold, wander, clamp(uGrain, 0.0, 1.0));

  // Three levels per channel: enough to keep the picture, few enough that the
  // dither has to do the work of the missing tones.
  vec3 scaled = src.rgb * 3.0;
  vec3 low = floor(scaled);
  vec3 frac = scaled - low;
  vec3 stepped = (low + step(vec3(threshold), frac)) / 3.0;

  fragColor = vec4(mix(src.rgb, clamp(stepped, 0.0, 1.0), uMix), src.a);
}`,eC=`
uniform float uCount;
uniform float uDepth;
uniform float uFade;
uniform float uSpeed;
uniform float uMix;

void main() {
  vec4 src = texture(uTex, vUv);
  vec3 sum = src.rgb;
  float weight = 1.0;

  // The ladder slides by one whole step per cycle, so what leaves the front
  // is replaced by what arrives at the back and the loop has no seam.
  float phase = fract(uTime * uSpeed);
  int count = int(clamp(uCount, 0.0, 6.0));

  for (int i = 1; i <= 6; i++) {
    if (i > count) break;
    float rung = float(i) - phase;
    float scale = pow(1.0 + uDepth, rung);
    vec2 uv = (vUv - 0.5) * scale + 0.5;
    // An echo that has left the frame contributes nothing; without this the
    // edge pixels smear outward and the tunnel gains a border.
    float inside = step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
    float fade = pow(uFade, rung) * inside;
    sum += texture(uTex, uv).rgb * fade;
    weight += fade;
  }

  vec3 echoed = sum / max(0.001, weight);
  fragColor = vec4(mix(src.rgb, echoed, uMix), src.a);
}`,tC=`
uniform float uRibs;
uniform float uBend;
uniform float uShine;
uniform float uVertical;
uniform float uMix;

void main() {
  vec2 uv = vUv;
  float aspect = uResolution.x / uResolution.y;

  // Which rib we are in, and where across it, in -1..1.
  float along = uVertical >= 0.5 ? uv.x * aspect : uv.y;
  float ribs = max(1.0, uRibs);
  float cell = along * ribs;
  float across = fract(cell) * 2.0 - 1.0;

  // A cylinder's surface turns fastest at its edges, so the displacement is
  // strongest there and zero at the crown.
  float bend = across * uBend * 0.1;
  vec2 shifted = uVertical >= 0.5
    ? vec2(uv.x + bend / aspect, uv.y)
    : vec2(uv.x, uv.y + bend);

  vec4 refracted = texture(uTex, clamp(shifted, 0.001, 0.999));

  // Light catches the turn: bright just off the crown, dark in the valley.
  float curve = across * across;
  float highlight = pow(1.0 - curve, 6.0) * uShine;
  float shadow = pow(curve, 2.0) * uShine * 0.55;
  vec3 glass = refracted.rgb * (1.0 - shadow) + highlight * 0.35;

  fragColor = vec4(mix(texture(uTex, uv).rgb, glass, uMix), refracted.a);
}`;function _n(a,e){return a.enabled>=.5&&a.mix>0&&e}function nC(a,e){const t=Ei(Va,e);switch(a){case"feedback":return _n(t.feedback,t.feedback.amount>0);case"colour":return _n(t.colour,t.colour.hue!==0||t.colour.saturation!==1);case"displace":return _n(t.displace,t.displace.amount>0);case"rgbSplit":return _n(t.rgbSplit,t.rgbSplit.amount>0);case"kaleido":return _n(t.kaleido,t.kaleido.segments>=2);case"pixelate":return _n(t.pixelate,t.pixelate.pixel>1||t.pixelate.levels>=2);case"noiseTile":return _n(t.noiseTile,t.noiseTile.size>1);case"echo":return _n(t.echo,t.echo.count>=1);case"fluted":return _n(t.fluted,t.fluted.ribs>=1);case"transition":return t.transition.enabled>=.5;default:return!1}}function lv(a){const e=Ei(Va,a);return e.master.enabled<.5?!1:_n(e.colour,e.colour.hue!==0||e.colour.saturation!==1)||_n(e.feedback,e.feedback.amount>0)||_n(e.displace,e.displace.amount>0)||_n(e.rgbSplit,e.rgbSplit.amount>0)||_n(e.kaleido,e.kaleido.segments>=2)||_n(e.pixelate,e.pixelate.pixel>1||e.pixelate.levels>=2)||_n(e.noiseTile,e.noiseTile.size>1)||_n(e.echo,e.echo.count>=1)||_n(e.fluted,e.fluted.ribs>=1)}class iC{constructor(e){F(this,"gl");F(this,"cfg",Va);F(this,"programs",{});F(this,"sourceTexture");F(this,"previousTexture");F(this,"blendTarget");F(this,"targets");F(this,"feedback");F(this,"width",1);F(this,"height",1);F(this,"ping",0);F(this,"feedbackPrimed",!1);const t=e.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,powerPreference:"high-performance"});if(!t)throw new Error("WebGL2 is not available");this.gl=t,this.programs={colour:fi(t,QT),copy:fi(t,ZT),feedback:fi(t,XT),displace:fi(t,jT),rgbSplit:fi(t,qT),kaleido:fi(t,YT),pixelate:fi(t,$T),blend:fi(t,KT),noiseTile:fi(t,JT),echo:fi(t,eC),fluted:fi(t,tC)},t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),this.sourceTexture=t.createTexture(),this.previousTexture=t.createTexture();for(const i of[this.sourceTexture,this.previousTexture])t.bindTexture(t.TEXTURE_2D,i),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE);this.blendTarget=Na(t,1,1),this.targets=[Na(t,1,1),Na(t,1,1)],this.feedback=Na(t,1,1)}setParams(e){this.cfg=Ei(Va,e)}live(e,t){return this.cfg.master.enabled>=.5&&_n(e,t)}get active(){const e=this.cfg;return e.master.enabled<.5?!1:this.live(e.colour,e.colour.hue!==0||e.colour.saturation!==1)||this.live(e.feedback,e.feedback.amount>0)||this.live(e.displace,e.displace.amount>0)||this.live(e.rgbSplit,e.rgbSplit.amount>0)||this.live(e.kaleido,e.kaleido.segments>=2)||this.live(e.pixelate,e.pixelate.pixel>1||e.pixelate.levels>=2)||this.live(e.noiseTile,e.noiseTile.size>1)||this.live(e.echo,e.echo.count>=1)||this.live(e.fluted,e.fluted.ribs>=1)}resize(e,t){if(this.width===e&&this.height===t)return;const i=this.gl;this.width=e,this.height=t,Fa(i,this.targets[0],e,t),Fa(i,this.targets[1],e,t),Fa(i,this.feedback,e,t),Fa(i,this.blendTarget,e,t),this.feedbackPrimed=!1}use(e,t=this.width,i=this.height,s=0){const o=this.gl,c=this.programs[e];return o.useProgram(c),o.uniform2f(o.getUniformLocation(c,"uResolution"),t,i),o.uniform1f(o.getUniformLocation(c,"uTime"),s),o.uniform1f(o.getUniformLocation(c,"uMix"),1),c}next(){return this.ping^=1,this.targets[this.ping]}render(e,t,i,s=1){const o=this.gl,c=e.width,u=e.height;if(c===0||u===0)return;const h=o.canvas;(h.width!==c||h.height!==u)&&(h.width=c,h.height=u),this.resize(c,u),o.bindTexture(o.TEXTURE_2D,this.sourceTexture),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,o.RGBA,o.UNSIGNED_BYTE,e);let f=this.sourceTexture;if(i&&s<1&&i.width===c&&i.height===u){o.bindTexture(o.TEXTURE_2D,this.previousTexture),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,o.RGBA,o.UNSIGNED_BYTE,i);const v=this.use("blend");Rn(o,v,"uTex",this.previousTexture,0),Rn(o,v,"uNext",this.sourceTexture,1),o.uniform1f(o.getUniformLocation(v,"uMix"),s),qn(o,this.blendTarget,c,u),f=this.blendTarget.texture}if(!this.active){this.feedbackPrimed&&(this.feedbackPrimed=!1);const v=this.use("copy");Rn(o,v,"uTex",f,0),qn(o,null,c,u);return}const p=this.cfg;let g=f,m;if(this.live(p.colour,p.colour.hue!==0||p.colour.saturation!==1)){const v=this.use("colour");Rn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uHue"),p.colour.hue),o.uniform1f(o.getUniformLocation(v,"uSaturation"),p.colour.saturation),o.uniform1f(o.getUniformLocation(v,"uMix"),p.colour.mix),m=this.next(),qn(o,m,c,u),g=m.texture}if(this.live(p.feedback,p.feedback.amount>0)){const v=this.use("feedback");Rn(o,v,"uTex",g,0),Rn(o,v,"uFeedback",this.feedback.texture,1),o.uniform1f(o.getUniformLocation(v,"uAmount"),this.feedbackPrimed?p.feedback.amount:0),o.uniform1f(o.getUniformLocation(v,"uZoom"),p.feedback.zoom),o.uniform1f(o.getUniformLocation(v,"uRotate"),p.feedback.rotate),o.uniform2f(o.getUniformLocation(v,"uOffset"),p.feedback.offsetX,p.feedback.offsetY),o.uniform1f(o.getUniformLocation(v,"uHueShift"),p.feedback.hueShift),o.uniform1f(o.getUniformLocation(v,"uMix"),p.feedback.mix),m=this.next(),qn(o,m,c,u),g=m.texture}if(this.live(p.displace,p.displace.amount>0)){const v=this.use("displace",c,u,t);Rn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uAmount"),p.displace.amount),o.uniform1f(o.getUniformLocation(v,"uScale"),p.displace.scale),o.uniform1f(o.getUniformLocation(v,"uSpeed"),p.displace.speed),o.uniform1f(o.getUniformLocation(v,"uMix"),p.displace.mix),m=this.next(),qn(o,m,c,u),g=m.texture}if(this.live(p.rgbSplit,p.rgbSplit.amount>0)){const v=this.use("rgbSplit");Rn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uAmount"),p.rgbSplit.amount),o.uniform1f(o.getUniformLocation(v,"uMix"),p.rgbSplit.mix),m=this.next(),qn(o,m,c,u),g=m.texture}if(this.live(p.kaleido,p.kaleido.segments>=2)){const v=this.use("kaleido");Rn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uSegments"),Math.round(p.kaleido.segments)),o.uniform1f(o.getUniformLocation(v,"uSpin"),p.kaleido.spin),o.uniform1f(o.getUniformLocation(v,"uMix"),p.kaleido.mix),m=this.next(),qn(o,m,c,u),g=m.texture}if(this.live(p.pixelate,p.pixelate.pixel>1||p.pixelate.levels>=2)){const v=this.use("pixelate");Rn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uPixel"),p.pixelate.pixel),o.uniform1f(o.getUniformLocation(v,"uLevels"),p.pixelate.levels),o.uniform1f(o.getUniformLocation(v,"uMix"),p.pixelate.mix),m=this.next(),qn(o,m,c,u),g=m.texture}if(this.live(p.noiseTile,p.noiseTile.size>1)){const v=this.use("noiseTile",c,u,t);Rn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uSize"),p.noiseTile.size),o.uniform1f(o.getUniformLocation(v,"uGrain"),p.noiseTile.grain),o.uniform1f(o.getUniformLocation(v,"uDrift"),p.noiseTile.drift),o.uniform1f(o.getUniformLocation(v,"uMix"),p.noiseTile.mix),m=this.next(),qn(o,m,c,u),g=m.texture}if(this.live(p.echo,p.echo.count>=1)){const v=this.use("echo",c,u,t);Rn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uCount"),p.echo.count),o.uniform1f(o.getUniformLocation(v,"uDepth"),p.echo.depth),o.uniform1f(o.getUniformLocation(v,"uFade"),p.echo.fade),o.uniform1f(o.getUniformLocation(v,"uSpeed"),p.echo.speed),o.uniform1f(o.getUniformLocation(v,"uMix"),p.echo.mix),m=this.next(),qn(o,m,c,u),g=m.texture}if(this.live(p.fluted,p.fluted.ribs>=1)){const v=this.use("fluted",c,u,t);Rn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uRibs"),p.fluted.ribs),o.uniform1f(o.getUniformLocation(v,"uBend"),p.fluted.bend),o.uniform1f(o.getUniformLocation(v,"uShine"),p.fluted.shine),o.uniform1f(o.getUniformLocation(v,"uVertical"),p.fluted.vertical),o.uniform1f(o.getUniformLocation(v,"uMix"),p.fluted.mix),m=this.next(),qn(o,m,c,u),g=m.texture}const y=this.use("copy");Rn(o,y,"uTex",g,0),qn(o,this.feedback,c,u),this.feedbackPrimed=!0,Rn(o,y,"uTex",g,0),qn(o,null,c,u)}destroy(){var t;const e=this.gl;for(const i of Object.values(this.programs))e.deleteProgram(i);e.deleteTexture(this.sourceTexture),e.deleteTexture(this.previousTexture),Ua(e,this.blendTarget),Ua(e,this.targets[0]),Ua(e,this.targets[1]),Ua(e,this.feedback),(t=e.getExtension("WEBGL_lose_context"))==null||t.loseContext()}}const rC="screen";function sx(a,e){return a.duration<=0?1:Math.min(1,(e-a.fadeStart)/1e3/a.duration)}function sC({handData:a,layerColors:e,layers:t,videoElement:i,audioData:s,layerParams:o,fxByPattern:c,content:u,motion:h,colorModes:f,autoHandData:p,autoDrive:g,onCanvasReady:m}){const y=le.useRef(null),v=le.useRef(null),w=le.useRef(m);w.current=m;const _=le.useCallback(X=>{var ye;y.current=X,b.current=X?X.getContext("2d"):null,(ye=w.current)==null||ye.call(w,X)},[]),S=le.useRef(new Map),b=le.useRef(null),[T,E]=le.useState(!1),N=le.useRef([]),A=le.useRef(t),U=le.useRef(null),C=le.useRef(a),L=le.useRef(e),O=le.useRef(i??null),D=le.useRef(s),z=le.useRef(o),Z=le.useRef(c),ne=le.useRef(u),V=le.useRef(h),J=le.useRef(f),$=le.useRef({hands:p,on:g}),K=le.useRef(nx()),se=le.useRef(nx());le.useEffect(()=>{C.current=a,L.current=e,O.current=i??null,D.current=s,z.current=o,A.current=t,Z.current=c,ne.current=u,V.current=h,J.current=f,$.current={hands:p,on:g}},[a,e,i,s,o,t,c,u,h,f,p,g]),le.useEffect(()=>{var X,ye,Me,we;for(const te of N.current){if(!te)continue;const xe=u.clips[te.current.pattern];(ye=(X=te.current.renderer).setText)==null||ye.call(X,u.text),(we=(Me=te.current.renderer).setClipUrl)==null||we.call(Me,(xe==null?void 0:xe.url)??null,xe==null?void 0:xe.kind)}},[u]),le.useEffect(()=>{N.current.forEach((X,ye)=>{var Me,we;(we=X==null?void 0:(Me=X.current.renderer).setParams)==null||we.call(Me,(o==null?void 0:o[ye])??{})})},[o]);const ie=le.useCallback(X=>{var ye;return((ye=Z.current)==null?void 0:ye[X])??{}},[]);le.useEffect(()=>{for(const[X,ye]of S.current)ye.pipeline.setParams((c==null?void 0:c[X])??{})},[c]);const B=le.useCallback((X,ye)=>{const Me=S.current.get(X);if(Me)return Me;if(T)return null;try{const we=document.createElement("canvas"),te=new iC(we);te.setParams(ye);const xe={pipeline:te,canvas:we};return S.current.set(X,xe),xe}catch(we){return console.error("Post pipeline unavailable; this visual plays without effects:",we),E(!0),null}},[T]);return le.useEffect(()=>{const X=document.createElement("canvas");U.current=X.getContext("2d");const ye=()=>{const me=window.innerWidth,Te=window.innerHeight;X.width=me,X.height=Te;for(const je of N.current)for(const Ye of[je==null?void 0:je.current,je==null?void 0:je.outgoing])Ye&&(Ye.canvas.width=me,Ye.canvas.height=Te);const Pe=y.current;Pe&&(Pe.width=me,Pe.height=Te)};ye(),window.addEventListener("resize",ye);const Me=(me,Te,Pe)=>{var je,Ye,$e;try{O.current&&((Ye=(je=me.renderer).setVideoElement)==null||Ye.call(je,O.current));const Qe=((($e=V.current)==null?void 0:$e[Te])??1)>0||!$.current.on?C.current:$.current.hands;me.renderer.render(Pe?Pe.heldHands:Qe,Pe?Pe.heldColors:L.current[Te]??L.current[0]??[],Pe?Pe.heldAudio:D.current,J.current[Te])}catch(dt){me.reportedError||(me.reportedError=!0,console.error(`Renderer "${me.pattern}" threw while drawing:`,dt))}};let we=!1;const te=(me,Te)=>{me.globalCompositeOperation="source-over",me.globalAlpha=1,me.fillStyle="#000",me.fillRect(0,0,me.canvas.width,me.canvas.height),N.current.forEach((Pe,je)=>{var Xt;if(!Pe)return;const Ye=je===0,$e=((Xt=A.current[je])==null?void 0:Xt.opacity)??1;if($e<=0)return;const dt=Pe.outgoing?sx(Pe.outgoing,Te):1,Qe=q=>{const Ct=ie(q.pattern);if(!lv(Ct))return q.canvas;const gt=B(q.pattern,Ct);if(!gt)return q.canvas;try{return gt.pipeline.render(q.canvas,Te/1e3),gt.canvas}catch(yt){return we||(we=!0,console.error("Post pipeline threw while presenting:",yt)),q.canvas}};me.globalCompositeOperation=Ye?"source-over":rC;const Et=me.canvas.width,bt=me.canvas.height;Pe.outgoing&&(me.globalAlpha=$e*(Ye?1:1-dt),me.drawImage(Qe(Pe.outgoing),0,0,Et,bt)),me.globalAlpha=$e*dt,me.drawImage(Qe(Pe.current),0,0,Et,bt)}),me.globalAlpha=1,me.globalCompositeOperation="source-over"};let xe=performance.now();const pe=()=>{var dt;const me=performance.now(),Te=U.current,Pe=Math.min(.1,(me-xe)/1e3);xe=me;const je=rx(C.current,K.current,Pe),Ye=rx($.current.hands,se.current,Pe),$e=(V.current??[]).map(Qe=>Qe>0?Qe*je:$.current.on?Ye:1);dy(Pe,$e.length?$e:[je]),N.current.forEach((Qe,Et)=>{var bt,Xt,q;if(Qe&&(py(Et),Me(Qe.current,Et),Qe.outgoing))if(sx(Qe.outgoing,me)>=1){const Ct=Qe.outgoing.pattern;(Xt=(bt=Qe.outgoing.renderer).destroy)==null||Xt.call(bt),Qe.outgoing=null,N.current.some(yt=>{var Be;return(yt==null?void 0:yt.current.pattern)===Ct||((Be=yt==null?void 0:yt.outgoing)==null?void 0:Be.pattern)===Ct})||((q=S.current.get(Ct))==null||q.pipeline.destroy(),S.current.delete(Ct))}else Me(Qe.outgoing,Et,Qe.outgoing)}),Te&&N.current.length>0&&(te(Te,me),(dt=b.current)==null||dt.drawImage(Te.canvas,0,0)),v.current=requestAnimationFrame(pe)};return pe(),()=>{var me,Te,Pe,je,Ye;window.removeEventListener("resize",ye),v.current&&cancelAnimationFrame(v.current);for(const $e of S.current.values())$e.pipeline.destroy();S.current.clear();for(const $e of N.current)(Pe=(me=$e==null?void 0:$e.outgoing)==null?void 0:(Te=me.renderer).destroy)==null||Pe.call(Te),(Ye=$e==null?void 0:(je=$e.current.renderer).destroy)==null||Ye.call(je);N.current=[],U.current=null}},[]),le.useEffect(()=>{var we,te,xe,pe,me;const X=N.current,ye=Va.transition.duration,Me=(Te,Pe)=>{var Qe,Et,bt,Xt;const je=document.createElement("canvas");je.width=window.innerWidth,je.height=window.innerHeight;const Ye=je.getContext("2d");if(!Ye)return null;let $e;try{$e=ov(Te,je,Ye,O.current)}catch(q){return console.error("Failed to create renderer for pattern:",Te,q),null}(Et=$e.setParams)==null||Et.call($e,((Qe=z.current)==null?void 0:Qe[Pe])??{}),(bt=$e.setText)==null||bt.call($e,ne.current.text);const dt=ne.current.clips[Te];return(Xt=$e.setClipUrl)==null||Xt.call($e,(dt==null?void 0:dt.url)??null,dt==null?void 0:dt.kind),{renderer:$e,canvas:je,pattern:Te}};t.forEach(({pattern:Te},Pe)=>{var $e,dt,Qe,Et,bt;const je=X[Pe];if((je==null?void 0:je.current.pattern)===Te)return;const Ye=Me(Te,Pe);if(Ye){if(!je){X[Pe]={current:Ye,outgoing:null};return}(Qe=($e=je.outgoing)==null?void 0:(dt=$e.renderer).destroy)==null||Qe.call(dt),ye>0?je.outgoing={...je.current,fadeStart:performance.now(),duration:ye,heldHands:C.current,heldAudio:D.current,heldColors:L.current[Pe]??L.current[0]??[]}:((bt=(Et=je.current.renderer).destroy)==null||bt.call(Et),je.outgoing=null),je.current=Ye}});for(const Te of X.splice(t.length))(xe=(we=Te==null?void 0:Te.outgoing)==null?void 0:(te=we.renderer).destroy)==null||xe.call(te),(me=Te==null?void 0:(pe=Te.current.renderer).destroy)==null||me.call(pe)},[t.map(X=>X.pattern).join("|")]),G.jsx("canvas",{ref:_,className:"absolute inset-0 w-full h-full z-0"})}const cv={bass:[20,160],lowMid:[160,800],mid:[800,4e3],high:[4e3,12e3]},aC=Object.keys(cv),oC=.002,lC=.04,cC=.25,uC=.0016,hC=6,fC=90,dC=170,pC=1.9;function mC(){const a=()=>({floor:255,ceiling:0});return{envelopes:{bass:a(),lowMid:a(),mid:a(),high:a()},overall:a(),previous:null,flux:[],lastBeat:0,onset:0}}function ax(a,e){a.floor+=(e-a.floor)*(e>a.floor?oC:lC),a.ceiling+=(e-a.ceiling)*(e>a.ceiling?cC:uC);const t=a.ceiling-a.floor;return t<hC?Math.min(1,e/190):Math.min(1,Math.max(0,(e-a.floor)/t))}function ox(a,e,t){const i=Math.max(0,Math.min(a.length-1,e)),s=Math.max(i+1,Math.min(a.length,t));let o=0;for(let c=i;c<s;c++)o+=a[c];return o/(s-i)}function gC(a,e,t,i,s){const o=e/2/a.length,c=A=>Math.round(A/o),u={};for(const A of aC){const[U,C]=cv[A];u[A]=ax(t.envelopes[A],ox(a,c(U),c(C)))}const h=ax(t.overall,ox(a,c(20),c(12e3))),f=c(1e4),p=new Float32Array(f);for(let A=0;A<f&&A<a.length;A++)p[A]=a[A];let g=0;if(t.previous){for(let A=0;A<p.length;A++){const U=p[A]-(t.previous[A]??0);U>0&&(g+=U)}g/=p.length}t.previous=p,t.flux.push(g),t.flux.length>fC&&t.flux.shift();const m=t.flux.reduce((A,U)=>A+U,0)/Math.max(1,t.flux.length);let y=0;for(const A of t.flux)y+=(A-m)**2;const v=Math.sqrt(y/Math.max(1,t.flux.length)),w=pC*(1.4-i*.8),_=m+v*w,b=t.flux.length>=20&&g>_&&g>.35&&s-t.lastBeat>dC;b&&(t.lastBeat=s);const T=_>0?Math.min(1,(g-_)/(_+.6)):0;t.onset=Math.max(t.onset*.9,b?Math.max(.35,T):0);const E=.55+i*.9,N=A=>Math.min(1,A*E);return{bass:N(u.bass),lowMid:N(u.lowMid),mid:N(u.mid),high:N(u.high),overall:N(h),beat:b,beatIntensity:b?Math.min(1,Math.max(.3,T)):0,onset:t.onset}}function xC({onAudioData:a,onStream:e,enabled:t,sensitivity:i}){const s=le.useRef(null),o=le.useRef(null),c=le.useRef(null),u=le.useRef(null),h=le.useRef(null),f=le.useRef(mC()),[p,g]=le.useState(null),m=le.useRef(e);m.current=e;const y=le.useRef(i);return y.current=i,le.useEffect(()=>{let v=!1;const w=()=>{var T;v=!0,h.current!==null&&(cancelAnimationFrame(h.current),h.current=null),u.current&&(u.current.getTracks().forEach(E=>E.stop()),u.current=null,(T=m.current)==null||T.call(m,null));const b=s.current;s.current=null,b&&b.state!=="closed"&&b.close(),o.current=null,c.current=null};if(!t){w(),a({bass:0,lowMid:0,mid:0,high:0,overall:0,beat:!1,beatIntensity:0,onset:0});return}const _=async()=>{var b;try{const T=await navigator.mediaDevices.getUserMedia({audio:!0});if(v){T.getTracks().forEach(L=>L.stop());return}u.current=T,(b=m.current)==null||b.call(m,T);const E=new AudioContext;s.current=E;const N=E.createAnalyser();N.fftSize=2048,N.smoothingTimeConstant=.55,o.current=N,E.createMediaStreamSource(T).connect(N);const U=N.frequencyBinCount,C=new Uint8Array(U);c.current=C,g(null),S()}catch(T){if(v)return;g("Microphone access denied"),console.error("Audio initialization error:",T)}},S=()=>{const b=o.current,T=c.current,E=s.current;!b||!T||!E||(b.getByteFrequencyData(T),a(gC(T,E.sampleRate,f.current,y.current,Date.now())),h.current=requestAnimationFrame(S))};return _(),w},[t,a]),p?G.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500/20 border border-red-500 px-4 py-2 rounded",children:G.jsx("p",{className:"text-red-500 font-mono",children:p})}):null}function bd(a,e,t,i){const o={x:a,y:e+.08800000000000001},c=[{...o,z:0}];return[{angle:-1.05,length:.62},{angle:-.34,length:.95},{angle:-.1,length:1},{angle:.14,length:.92},{angle:.38,length:.76}].forEach((h,f)=>{const p=.25+Math.sin(t*.6+i+f)*.2;for(let g=1;g<=4;g++){const m=g/4,y=h.angle+p*m*.5,v=.16*h.length*m;c.push({x:o.x+Math.sin(y)*v,y:o.y-Math.cos(y)*v,z:0})}}),c}function uv(a){const e=(t,i)=>{const s={x:i+Math.sin(a*.23+t)*.18,y:.5+Math.sin(a*.31+t*1.7)*.22};return{position:s,gesture:"open",fingerCount:3+Math.round(1.5+Math.sin(a*.11+t)*1.5),velocity:.25+Math.sin(a*.37+t)*.15,holdDuration:1,landmarks:bd(s.x,s.y,a,t)}};return{left:e(0,.32),right:e(Math.PI,.68),distanceBetweenHands:.36}}const hv="vj-text",vC="n4thvj",er="clips",xf="clip",_C=["video","mosaic"],Ed="N4TH";function yC(){try{return localStorage.getItem(hv)??Ed}catch{return Ed}}function SC(a){try{localStorage.setItem(hv,a)}catch{}}function Kd(){return new Promise((a,e)=>{const t=indexedDB.open(vC,1);t.onupgradeneeded=()=>{t.result.objectStoreNames.contains(er)||t.result.createObjectStore(er)},t.onsuccess=()=>a(t.result),t.onerror=()=>e(t.error)})}function lx(a){return a.type.startsWith("image/")?"image":"video"}async function fv(a,e,t){const i=await Kd();await new Promise((s,o)=>{const c=i.transaction(er,"readwrite");c.objectStore(er).put({file:e,name:t},a),c.oncomplete=()=>s(),c.onerror=()=>o(c.error)}),i.close()}function MC(a,e){return new Promise(t=>{const i=a.get(e);i.onsuccess=()=>{const s=i.result;if(!s||typeof s!="object")return t(null);const{file:o,name:c}=s;if(!(o instanceof Blob))return t(null);t({file:o,name:typeof c=="string"?c:"clip"})},i.onerror=()=>t(null)})}async function wC(){try{const a=await Kd(),e=await new Promise((c,u)=>{const h=a.transaction(er,"readonly").objectStore(er).getAllKeys();h.onsuccess=()=>c(h.result),h.onerror=()=>u(h.error)}),t={},s=a.transaction(er,"readonly").objectStore(er);for(const c of e){if(typeof c!="string")continue;const u=await MC(s,c);u&&(t[c]=u)}a.close();const o=t[xf];if(o){delete t[xf];for(const c of _C)t[c]||(t[c]=o,fv(c,o.file,o.name).catch(()=>{}));dv(xf).catch(()=>{})}return t}catch{return{}}}async function dv(a){try{const e=await Kd();await new Promise(t=>{const i=e.transaction(er,"readwrite");i.objectStore(er).delete(a),i.oncomplete=()=>t(),i.onerror=()=>t()}),e.close()}catch{}}const bC=4,EC=14,cx=45,TC=480,CC=300,AC=["#ffffff","#d4d4d4","#ffffff","#a3a3a3"],RC={"2D":"text-cyan-300 border-cyan-400/30 bg-cyan-400/10","3D":"text-violet-300 border-violet-400/30 bg-violet-400/10",TD:"text-emerald-300 border-emerald-400/30 bg-emerald-400/10"},ux=Object.values(ir),PC=["2D","3D","TD"];function LC({set:a,onSetChange:e,onStart:t,text:i,onTextChange:s,clips:o,onClipChange:c}){const[u,h]=le.useState("ALL"),[f,p]=le.useState(null),[g,m]=le.useState(null),y=le.useCallback((L,O)=>{const D=a.indexOf(L);if(D===-1||D===O)return;const z=[...a];z.splice(D,1),z.splice(O,0,L),e(z)},[a,e]),v=le.useRef(new Map),w=le.useRef(new Set),_=le.useRef(null),S=le.useRef(a);S.current=a;const b=le.useRef({text:i,clips:o});b.current={text:i,clips:o};const T=u==="ALL"?ux:ux.filter(L=>L.category===u),E=le.useCallback(L=>{const O=S.current;if(O.indexOf(L)!==-1){e(O.filter(z=>z!==L));return}O.length>=Is||e([...O,L])},[e]),N=le.useCallback((L,O)=>{const D=S.current.filter(ne=>ne!==L),z=Math.min(O,D.length);if(z>=Is)return;const Z=[...D];Z.splice(z,0,L),e(Z.slice(0,Is))},[e]);le.useEffect(()=>{const L=O=>{if(O.ctrlKey||O.metaKey||O.altKey)return;if(O.key==="Enter"&&S.current.length>0){t();return}if(!f)return;const D=yf(O.key);D!==-1&&(O.preventDefault(),N(f,D))};return window.addEventListener("keydown",L),()=>window.removeEventListener("keydown",L)},[f,N,t]),le.useEffect(()=>{_.current=new IntersectionObserver(D=>{for(const z of D){const Z=z.target.getAttribute("data-pattern");Z&&(z.isIntersecting?w.current.add(Z):w.current.delete(Z))}},{rootMargin:"250px 0px"});for(const D of v.current.values())_.current.observe(D.canvas);let L=0;const O=()=>{var V,J,$,K,se,ie,B,X;if(L=requestAnimationFrame(O),document.hidden)return;const D=uv(Date.now()/1e3);let z=0,Z=0;const ne=[...v.current].sort(([,ye],[,Me])=>{const we=ye.frames<cx?0:1,te=Me.frames<cx?0:1;return we-te});for(const[ye,Me]of ne){const we=ir[ye].category!=="2D",te=we?z<bC:Z<EC;if(w.current.has(ye)&&te&&!Me.failed){if(!Me.renderer)try{Me.renderer=ov(ye,Me.canvas,Me.ctx,null)}catch{Me.failed=!0;continue}try{(J=(V=Me.renderer).setText)==null||J.call(V,b.current.text);const pe=b.current.clips[ye];(K=($=Me.renderer).setClipUrl)==null||K.call($,(pe==null?void 0:pe.url)??null,pe==null?void 0:pe.kind),Me.renderer.render(D,AC,void 0,"contrast")}catch{Me.failed=!0,(ie=(se=Me.renderer).destroy)==null||ie.call(se),Me.renderer=null;continue}Me.frames++,we?z++:Z++}else Me.renderer&&((X=(B=Me.renderer).destroy)==null||X.call(B),Me.renderer=null)}};return L=requestAnimationFrame(O),()=>{var D,z,Z;cancelAnimationFrame(L),(D=_.current)==null||D.disconnect();for(const ne of v.current.values())(Z=(z=ne.renderer)==null?void 0:z.destroy)==null||Z.call(z);v.current.clear()}},[]);const A=le.useRef(new Map),U=L=>{let O=A.current.get(L);return O||(O=D=>C(L,D),A.current.set(L,O)),O},C=le.useCallback((L,O)=>{var z,Z,ne;if(!O){const V=v.current.get(L);(Z=(z=V==null?void 0:V.renderer)==null?void 0:z.destroy)==null||Z.call(z),v.current.delete(L),w.current.delete(L);return}if(v.current.has(L))return;O.width=TC,O.height=CC;const D=O.getContext("2d");D&&(v.current.set(L,{canvas:O,ctx:D,renderer:null,frames:0}),(ne=_.current)==null||ne.observe(O))},[]);return G.jsxs("div",{className:"min-h-screen w-full bg-[#07070a] text-white font-mono",children:[G.jsx("div",{"aria-hidden":!0,className:"pointer-events-none fixed inset-0 opacity-70",style:{background:"radial-gradient(60rem 40rem at 50% -10%, rgba(99,102,241,0.18), transparent 70%),radial-gradient(40rem 30rem at 85% 15%, rgba(217,70,239,0.10), transparent 70%)"}}),G.jsxs("div",{className:"relative mx-auto max-w-[1500px] px-6 pb-40 pt-14",children:[G.jsx("header",{className:"mb-10",children:G.jsxs("div",{className:"flex flex-wrap items-end justify-between gap-6",children:[G.jsxs("div",{children:[G.jsx("h1",{className:"text-2xl font-semibold tracking-[-0.02em] sm:text-3xl",children:"<N4TH>"}),G.jsxs("p",{className:"mt-3 max-w-xl text-sm leading-relaxed text-white/45",children:["Every visual, running. Pick up to ",Is," and they become your keyboard — click to add, or hover one and press the number you want it on."]})]}),G.jsx("nav",{className:"flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] p-1.5",children:["ALL",...PC].map(L=>G.jsx("button",{onClick:()=>h(L),className:`rounded-full px-4 py-1.5 text-[11px] tracking-wider transition-all ${u===L?"bg-white text-black":"text-white/45 hover:bg-white/5 hover:text-white/80"}`,children:L},L))})]})}),G.jsx("div",{className:"grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:T.map(L=>{var ne;const O=a.indexOf(L.pattern),D=O!==-1,z=a.length>=Is&&!D,Z=L.pattern==="text"?"text":L.pattern==="video"||L.pattern==="mosaic"?"file":null;return G.jsxs("div",{onMouseEnter:()=>p(L.pattern),onMouseLeave:()=>p(V=>V===L.pattern?null:V),className:`group relative overflow-hidden rounded-2xl border text-left transition-all duration-200 ${D?"border-white/70 bg-white/[0.06] shadow-[0_0_0_1px_rgba(255,255,255,0.35),0_18px_50px_-20px_rgba(255,255,255,0.35)]":z?"border-white/5 opacity-35":"border-white/10 bg-white/[0.02] hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.05]"}`,children:[G.jsxs("button",{onClick:()=>E(L.pattern),disabled:z,title:z?"The set is full — take one off first":`${L.description}${D?"":" · click to add"}`,className:`block w-full text-left ${z?"cursor-not-allowed":""}`,children:[G.jsxs("div",{className:"relative aspect-[16/10] w-full overflow-hidden bg-black",children:[G.jsx("canvas",{"data-pattern":L.pattern,ref:U(L.pattern),className:"h-full w-full object-cover"}),G.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/85 to-transparent"}),D&&G.jsx("div",{className:"absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-base font-semibold text-black shadow-lg",children:Wo(O)})]}),G.jsxs("div",{className:"flex items-center justify-between gap-3 px-4 pb-3 pt-3",children:[G.jsxs("div",{className:"min-w-0",children:[G.jsx("div",{className:"truncate text-[13px] tracking-wide text-white/90",children:L.name}),G.jsx("div",{className:"mt-0.5 truncate text-[10px] text-white/35",children:L.description})]}),G.jsx("span",{className:`shrink-0 rounded border px-1.5 py-0.5 text-[9px] tracking-widest ${RC[L.category]}`,children:L.category})]})]}),Z==="text"&&G.jsx("div",{className:"px-4 pb-4",children:G.jsx("input",{value:i,onChange:V=>s(V.target.value),onKeyDown:V=>V.stopPropagation(),placeholder:Ed,maxLength:48,"aria-label":"Words for Kinetic Type",className:"w-full rounded-lg border border-white/15 bg-black/60 px-3 py-2 text-[12px] tracking-wide text-white placeholder:text-white/25 focus:border-white/45 focus:outline-none"})}),Z==="file"&&G.jsxs("div",{className:"flex items-center gap-2 px-4 pb-4",children:[G.jsxs("label",{className:"cursor-pointer rounded-lg border border-white/15 bg-black/60 px-3 py-2 text-[11px] tracking-wider text-white/75 transition-colors hover:border-white/45 hover:text-white",children:[o[L.pattern]?"REPLACE":"UPLOAD",G.jsx("input",{type:"file",accept:"video/*,image/*",className:"hidden",onChange:V=>{var $;const J=($=V.target.files)==null?void 0:$[0];J&&c(L.pattern,J),V.target.value=""}})]}),G.jsx("span",{className:"min-w-0 flex-1 truncate text-[10px] text-white/35",children:((ne=o[L.pattern])==null?void 0:ne.name)??"no file yet"}),o[L.pattern]&&G.jsx("button",{onClick:()=>c(L.pattern,null),title:"Remove this visual's file",className:"shrink-0 px-1 text-white/25 transition-colors hover:text-white/80",children:"×"})]})]},L.pattern)})})]}),G.jsx("footer",{className:"fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/80 backdrop-blur-xl",children:G.jsxs("div",{className:"mx-auto flex max-w-[1500px] flex-wrap items-center gap-4 px-6 py-4",children:[G.jsxs("div",{className:"flex min-w-0 flex-1 flex-wrap items-center gap-2",children:[G.jsxs("span",{className:"mr-1 text-[10px] tracking-widest text-white/35",children:["SET ",a.length,"/",Is]}),a.length===0&&G.jsx("span",{className:"text-[11px] text-white/30",children:"Nothing chosen yet — pick a visual to start building the row."}),a.map((L,O)=>G.jsxs("div",{draggable:!0,onDragStart:D=>{m(L),D.dataTransfer.effectAllowed="move",D.dataTransfer.setData("text/plain",L)},onDragEnd:()=>m(null),onDragOver:D=>{!g||g===L||(D.preventDefault(),D.dataTransfer.dropEffect="move")},onDrop:D=>{D.preventDefault(),g&&y(g,O),m(null)},className:`group flex cursor-grab items-center gap-2 rounded-full border py-1 pl-1 pr-3 transition-all active:cursor-grabbing ${g===L?"border-white/60 bg-white/20 opacity-50":"border-white/15 bg-white/[0.06] hover:border-white/40 hover:bg-white/10"}`,children:[G.jsx("span",{className:"flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-black",children:Wo(O)}),G.jsx("span",{className:"select-none text-[11px] text-white/80",children:ir[L].name}),G.jsx("button",{onClick:()=>E(L),title:"Take off the set",className:"text-white/25 transition-colors group-hover:text-white/70 hover:!text-white",children:"×"})]},L))]}),G.jsxs("div",{className:"flex shrink-0 items-center gap-3",children:[a.length>0&&G.jsx("button",{onClick:()=>e([]),className:"rounded-full px-3 py-2 text-[11px] tracking-wider text-white/40 transition-colors hover:text-white/80",children:"CLEAR"}),G.jsx("button",{onClick:t,disabled:a.length===0,className:`rounded-full px-7 py-3 text-[12px] font-semibold tracking-[0.18em] transition-all ${a.length===0?"cursor-not-allowed bg-white/10 text-white/25":"bg-white text-black hover:scale-[1.03] hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.6)]"}`,children:"START SET →"})]})]})})]})}function IC(a,e){const t=Math.max(0,Math.ceil(-Math.log10(e)));return a.toFixed(Math.min(t,4))}function pv({spec:a,value:e,isDefault:t,inert:i,onChange:s,onReset:o}){var u;const c=(e-a.min)/(a.max-a.min)*100;return G.jsxs("div",{className:`group ${i?"opacity-40":""}`,title:i?`Does nothing until ${a.needs} is above zero`:void 0,children:[G.jsxs("div",{className:"flex justify-between items-baseline text-[9px] leading-tight",children:[G.jsxs("button",{onClick:o,title:t?a.hint??a.path:`${a.path} — click to reset`,className:`text-left transition-colors ${t?"text-white/50 hover:text-white/70":"text-cyan-300 hover:text-cyan-200"}`,children:[a.label,!t&&G.jsx("span",{className:"ml-1 opacity-60",children:"•"})]}),G.jsx("span",{className:`text-white ${a.labels?"":"tabular-nums"}`,children:((u=a.labels)==null?void 0:u[Math.round(e)])??IC(e,a.step)})]}),G.jsx("input",{type:"range",className:"vj-slider w-full h-1 mt-1 mb-2 rounded-full appearance-none cursor-pointer focus:outline-none",min:a.min,max:a.max,step:a.step,value:e,onChange:h=>s(parseFloat(h.target.value)),style:{backgroundImage:`linear-gradient(to right, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.85) ${c}%, rgba(255,255,255,0.2) ${c}%)`}})]})}function NC({sections:a,header:e}){var f;const[t,i]=le.useState(!1),[s,o]=le.useState((f=a[0])==null?void 0:f.key),c=a.filter(p=>p.entry.groups.length>0);if(c.length===0)return null;const u=c.find(p=>p.key===s)??c[0],h=u.entry.groups.some(p=>p.params.some(g=>u.values[g.path]!==void 0));return G.jsx("div",{className:"absolute left-6 top-24 bottom-32 z-50 w-[168px] flex flex-col font-mono pointer-events-auto",children:G.jsxs("div",{className:"bg-black/70 backdrop-blur-sm rounded-xl border border-white/20 flex flex-col min-h-0",children:[e&&G.jsx("div",{className:"border-b border-white/10",children:e}),G.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-2 border-b border-white/10",children:[G.jsx("button",{onClick:()=>i(p=>!p),className:"text-white/60 hover:text-white transition-colors shrink-0",title:t?"Show parameters":"Hide parameters",children:G.jsx(N_,{className:"w-3.5 h-3.5"})}),G.jsx("div",{className:"flex gap-1 flex-1 min-w-0",children:c.map(p=>{const g=p.entry.groups.some(m=>m.params.some(y=>p.values[y.path]!==void 0));return G.jsxs("button",{onClick:()=>{o(p.key),i(!1)},className:`px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider transition-all ${p.key===u.key?"bg-white/20 text-white":"text-white/40 hover:text-white/70"}`,children:[p.label,g&&G.jsx("span",{className:"ml-1 text-cyan-300",children:"•"})]},p.key)})}),h&&G.jsx("button",{onClick:()=>u.onReset(),title:`Reset every ${u.label} parameter`,className:"text-white/40 hover:text-white transition-colors shrink-0",children:G.jsx(xx,{className:"w-3 h-3"})})]}),!t&&G.jsx("div",{className:"overflow-y-auto px-3 py-2 min-h-0",children:u.entry.groups.map(p=>{if(p.visibleWhen){const y=u.values[p.visibleWhen.path]??Er(u.entry.config,p.visibleWhen.path)??0;if(!p.visibleWhen.equals.includes(Math.round(y)))return null}const m=(p.togglePath?u.values[p.togglePath]??Er(u.entry.config,p.togglePath)??1:1)>=.5;return G.jsxs("div",{className:"mb-3 last:mb-1",children:[p.togglePath?G.jsxs("button",{onClick:()=>u.onChange(p.togglePath,m?0:1),title:m?`Bypass ${p.name}`:`Enable ${p.name}`,className:"flex items-center gap-1.5 w-full mb-1.5 group/head",children:[G.jsx("span",{className:`w-1.5 h-1.5 rounded-full transition-colors ${m?"bg-cyan-300":"bg-white/20"}`}),G.jsx("span",{className:`text-[8px] tracking-widest uppercase transition-colors ${m?"text-white/55 group-hover/head:text-white/80":"text-white/25"}`,children:p.name})]}):G.jsx("div",{className:"text-[8px] text-white/35 tracking-widest uppercase mb-1.5",children:p.name}),G.jsx("div",{className:m?"":"opacity-35 pointer-events-none",children:p.params.map(y=>{const v=Er(u.entry.config,y.path);if(v===void 0)return null;const w=u.values[y.path]??v,_=y.needs?u.values[y.needs]??Er(u.entry.config,y.needs)??0:1;return G.jsx(pv,{spec:y,inert:!(_>0),value:w,isDefault:u.values[y.path]===void 0,onChange:S=>u.onChange(y.path,S),onReset:()=>u.onReset(y.path)},y.path)})})]},p.name)})})]})})}function Ra(a,e,t){const i=u=>t[u]??Er(e.config,u)??0,s=a.togglePath?i(a.togglePath)>=.5:!0,o=a.stage?nC(a.stage,t):!1,c=a.params.some(u=>t[u.path]!==void 0);return{on:s,live:o,touched:c}}function FC({entry:a,values:e,onChange:t,onReset:i,layerLabel:s,openName:o,onOpen:c}){const u=a.groups,h=u.find(g=>g.name===o)??null,f=(e["master.enabled"]??1)>=.5,p=u.some(g=>g.params.some(m=>e[m.path]!==void 0));return G.jsx("div",{className:"absolute right-6 top-44 bottom-32 z-50 w-[178px] font-mono pointer-events-auto flex flex-col",children:G.jsxs("div",{className:"bg-black/70 backdrop-blur-sm rounded-xl border border-white/20 flex flex-col min-h-0 overflow-y-auto",children:[G.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-2 border-b border-white/10",children:[G.jsx("button",{onClick:()=>t("master.enabled",f?0:1),title:f?"Bypass every effect on this layer (X)":"Bring the effects back (X)",className:`shrink-0 transition-colors ${f?"text-cyan-300 hover:text-cyan-200":"text-white/25 hover:text-white/60"}`,children:G.jsx(A_,{className:"w-3.5 h-3.5"})}),G.jsxs("span",{className:"flex-1 min-w-0 truncate text-[9px] tracking-widest text-white/55",children:["FX · ",s]}),p&&G.jsx("button",{onClick:()=>i(),title:"Clear every effect on this layer",className:"shrink-0 text-white/40 hover:text-white transition-colors",children:G.jsx(xx,{className:"w-3 h-3"})})]}),G.jsx("div",{className:`grid grid-cols-2 gap-1 p-2 ${f?"":"opacity-35"}`,children:u.map(g=>{const{live:m,touched:y}=Ra(g,a,e),v=g.name===(h==null?void 0:h.name);return G.jsxs("button",{onClick:()=>{if(!m){g.togglePath&&t(g.togglePath,1);for(const[w,_]of Object.entries(g.turnOn??{})){const S=e[w],b=Er(a.config,w)??0;t(w,S!==void 0&&S!==b?S:_)}c(g.name);return}if(!v){c(g.name);return}g.togglePath&&t(g.togglePath,0),c(null)},title:m?v?`${g.name} — running. Click to switch it off`:`${g.name} — running. Click to show its controls`:`${g.name} — click to switch it on`,className:`flex items-center gap-1 rounded px-1.5 py-1 text-left text-[8.5px] leading-tight tracking-wide transition-all ${v?"bg-white text-black":m?"bg-white/15 text-white":"text-white/40 hover:bg-white/10 hover:text-white/70"}`,children:[G.jsx("span",{className:`w-1 h-1 shrink-0 rounded-full ${m?v?"bg-black":"bg-cyan-300":v?"bg-black/30":"bg-white/20"}`}),G.jsx("span",{className:"min-w-0 truncate",children:g.name}),y&&!v&&G.jsx("span",{className:"text-cyan-300",children:"·"})]},g.name)})}),h&&G.jsxs("div",{className:`border-t border-white/10 px-3 py-2 ${f?"":"opacity-35"}`,children:[h.togglePath&&G.jsxs("button",{onClick:()=>t(h.togglePath,Ra(h,a,e).on?0:1),className:"flex items-center gap-1.5 w-full mb-2 group/head",title:Ra(h,a,e).on?`Bypass ${h.name}`:`Enable ${h.name}`,children:[G.jsx("span",{className:`w-1.5 h-1.5 rounded-full transition-colors ${Ra(h,a,e).on?"bg-cyan-300":"bg-white/20"}`}),G.jsx("span",{className:"text-[8px] tracking-widest uppercase text-white/55 group-hover/head:text-white/80",children:Ra(h,a,e).on?"on":"bypassed"})]}),G.jsx("div",{className:Ra(h,a,e).on?"":"opacity-35 pointer-events-none",children:h.params.map(g=>{const m=Er(a.config,g.path);if(m===void 0)return null;const y=g.needs?e[g.needs]??Er(a.config,g.needs)??0:1;return G.jsx(pv,{spec:g,inert:!(y>0),value:e[g.path]??m,isDefault:e[g.path]===void 0,onChange:v=>t(g.path,v),onReset:()=>i(g.path)},g.path)})})]})]})})}function UC({layers:a,selectedLayer:e,set:t,onSelect:i,onOpacityChange:s,onRemove:o}){return G.jsxs("div",{className:"px-3 pt-2 pb-1",children:[G.jsxs("div",{className:"mb-1.5 flex items-baseline justify-between",children:[G.jsx("span",{className:"text-[8px] uppercase tracking-widest text-white/35",children:"Layers"}),G.jsx("span",{className:"text-[8px] text-white/25",children:"L cycles · [ ] fade"})]}),a.map((c,u)=>{const h=u===e,f=t.indexOf(c.pattern);return G.jsxs("div",{className:`mb-1 rounded px-1.5 py-1 transition-colors ${h?"bg-white/[0.11]":"hover:bg-white/[0.05]"}`,children:[G.jsxs("div",{className:"flex items-center gap-1.5",children:[G.jsxs("button",{onClick:()=>i(u),title:h?"Editing this layer":"Edit this layer",className:"flex min-w-0 flex-1 items-center gap-1.5 text-left",children:[G.jsx("span",{className:`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[8px] ${h?"bg-white text-black":"bg-white/15 text-white/60"}`,children:f===-1?"·":Wo(f)}),G.jsx("span",{className:`truncate text-[9px] ${h?"text-white":"text-white/55"}`,children:ir[c.pattern].short})]}),G.jsxs("span",{className:"shrink-0 text-[8px] tabular-nums text-white/45",children:[Math.round(c.opacity*100),"%"]}),a.length>1&&G.jsx("button",{onClick:()=>o(u),title:"Take this layer off",className:"shrink-0 px-0.5 text-[10px] leading-none text-white/25 transition-colors hover:text-white/80",children:"×"})]}),G.jsx("input",{type:"range","aria-label":`${ir[c.pattern].name} opacity`,className:"vj-slider mt-1 h-1 w-full cursor-pointer appearance-none rounded-full focus:outline-none",min:0,max:1,step:.01,value:c.opacity,onChange:p=>s(u,parseFloat(p.target.value)),onPointerDown:()=>i(u),style:{background:`linear-gradient(to right, rgba(255,255,255,${h?.85:.4}) ${c.opacity*100}%, rgba(255,255,255,0.12) ${c.opacity*100}%)`}})]},`${c.pattern}-${u}`)})]})}const hx={geometric:{config:wf,groups:[{name:"Shape",params:[{path:"polygon.baseSize",label:"Size",min:20,max:400,step:5},{path:"polygon.strokeWidth",label:"Stroke",min:.5,max:20,step:.5},{path:"complexity.baseSides",label:"Sides",min:3,max:12,step:1,hint:"with no hands"},{path:"complexity.maxSides",label:"Max sides",min:3,max:24,step:1}]},{name:"Layers",params:[{path:"layers.count",label:"Count",min:1,max:20,step:1},{path:"layers.sizeGrowth",label:"Growth",min:0,max:1.5,step:.01},{path:"layers.rotationOffset",label:"Twist",min:0,max:2,step:.01},{path:"layers.baseOpacity",label:"Opacity",min:0,max:1,step:.01},{path:"layers.opacityFade",label:"Fade",min:0,max:.3,step:.005}]},{name:"Motion",params:[{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"},{path:"animation.baseRotationMultiplier",label:"Spin",min:0,max:.1,step:.001}]},{name:"Bridge & clap",params:[{path:"bridge.thickness",label:"Bridge",min:0,max:30,step:.5},{path:"bridge.waveAmplitude",label:"Bridge wave",min:0,max:150,step:1},{path:"vibration.shakeAmountX",label:"Shake X",min:0,max:200,step:1},{path:"vibration.shakeAmountY",label:"Shake Y",min:0,max:200,step:1},{path:"vibration.flashDuration",label:"Flash",min:0,max:3,step:.05}]}]},particles:{config:Sf,groups:[{name:"Emission",params:[{path:"limits.maxParticles",label:"Max",min:5,max:500,step:5},{path:"emission.openHandRate",label:"Open hand",min:0,max:1,step:.01},{path:"emission.closedHandRate",label:"Closed hand",min:0,max:1,step:.01},{path:"controls.fadeOutRate",label:"Fade out",min:.005,max:.5,step:.005}]},{name:"Motion",params:[{path:"physics.initialVelocity",label:"Velocity",min:.5,max:20,step:.5},{path:"physics.damping",label:"Damping",min:.8,max:1,step:.005,hint:"1 = never slows"},{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"}]},{name:"Size",params:[{path:"size.baseRange.0",label:"Radius min",min:2,max:300,step:2},{path:"size.baseRange.1",label:"Radius max",min:2,max:400,step:2},{path:"size.growthMultiplier",label:"Grow",min:.2,max:6,step:.1},{path:"size.shrinkMultiplier",label:"Shrink",min:.05,max:2,step:.05},{path:"size.transitionSpeed",label:"Ease",min:.02,max:1,step:.01}]},{name:"Glow",params:[{path:"glow.layers",label:"Layers",min:0,max:8,step:1},{path:"glow.expansion",label:"Spread",min:0,max:2,step:.05},{path:"glow.layerFade",label:"Fade",min:0,max:1,step:.01}]},{name:"Clap",params:[{path:"explosion.particleCount",label:"Burst",min:0,max:300,step:5},{path:"explosion.forceMultiplier",label:"Force",min:0,max:50,step:1},{path:"explosion.sizeMultiplier",label:"Size",min:.2,max:6,step:.1}]}]},ripple:{config:_d,groups:[{name:"Hand",params:[{path:"stamp.radius",label:"Size",min:.01,max:.3,step:.005},{path:"stamp.strength",label:"Weight",min:.05,max:1,step:.01},{path:"stamp.fingerScale",label:"Fingers",min:0,max:1,step:.05,hint:"0 = palm only"},{path:"stamp.audioSwell",label:"Bass swell",min:0,max:3,step:.05}]},{name:"Trail",params:[{path:"field.decay",label:"Length",min:.8,max:.998,step:.002,hint:"higher = lingers"},{path:"field.spread",label:"Spread",min:.2,max:8,step:.1}]},{name:"Water",params:[{path:"refraction.amount",label:"Refraction",min:0,max:.4,step:.005},{path:"refraction.dispersion",label:"Dispersion",min:0,max:1.5,step:.05}]},{name:"Gloss",params:[{path:"highlight.amount",label:"Amount",min:0,max:3,step:.05},{path:"highlight.sharpness",label:"Sharpness",min:.5,max:20,step:.5},{path:"highlight.tint",label:"Tint",min:0,max:1,step:.05,hint:"palette into the gloss"}]}]},text:{config:yd,groups:[{name:"Field",params:[{path:"motion.handInfluence",label:"Hands",min:0,max:3,step:.05,hint:"how far the field follows"},{path:"radial.strength",label:"Warp",min:-2,max:3,step:.05,hint:"negative pinches"},{path:"radial.twist",label:"Twist",min:-3,max:3,step:.05,hint:"opens with the hand"},{path:"radial.power",label:"Bite",min:.4,max:5,step:.1},{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"}]},{name:"Beat",params:[{path:"radial.ring",label:"Ring",min:0,max:2,step:.05,hint:"thrown out on each onset"},{path:"radial.ringDensity",label:"Rings",min:.5,max:8,step:.1},{path:"audio.bassScale",label:"Bass swell",min:0,max:2,step:.05}]},{name:"Grid",params:[{path:"grid.columns",label:"Columns",min:1,max:40,step:1},{path:"grid.rows",label:"Rows",min:1,max:60,step:1},{path:"grid.spread",label:"Spread",min:.2,max:3,step:.02}]},{name:"Colour",params:[{path:"color.step",label:"Hue step",min:0,max:120,step:1},{path:"color.cycleSpeed",label:"Cycle",min:0,max:3,step:.05}]}]},video:{config:Sd,groups:[{name:"Frame",params:[{path:"frame.zoom",label:"Zoom",min:.2,max:4,step:.05},{path:"frame.spreadZoom",label:"Spread zoom",min:0,max:3,step:.05},{path:"frame.handDrift",label:"Hand drift",min:0,max:.6,step:.01},{path:"frame.mirror",label:"Mirror",min:0,max:1,step:1}]},{name:"Slice",params:[{path:"slice.count",label:"Bands",min:1,max:60,step:1,hint:"1 = whole frame"},{path:"slice.offset",label:"Shear",min:0,max:.4,step:.005},{path:"slice.speed",label:"Speed",min:0,max:5,step:.05},{path:"slice.beatKick",label:"Beat kick",min:1,max:2.5,step:.02,hint:"1 = none"}]},{name:"Look",params:[{path:"look.tint",label:"Tint",min:0,max:1,step:.02,hint:"palette over the clip"},{path:"look.gain",label:"Gain",min:1,max:3,step:.05},{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"}]}]},chrome:{config:wd,groups:[{name:"Form",params:[{path:"form.lobes",label:"Lobes",min:1,max:7,step:1},{path:"form.spread",label:"Spread",min:.2,max:2.4,step:.05,hint:"wider pulls tendrils out"},{path:"form.size",label:"Mass",min:.2,max:1.2,step:.02},{path:"form.blend",label:"Melt",min:.05,max:1.4,step:.05,hint:"higher closes the holes"},{path:"form.ripple",label:"Ripple",min:0,max:.4,step:.005},{path:"form.rippleScale",label:"Ripple scale",min:.5,max:9,step:.1}]},{name:"Motion",params:[{path:"motion.drift",label:"Drift",min:0,max:1.2,step:.01},{path:"motion.churn",label:"Churn",min:0,max:2,step:.02},{path:"motion.spin",label:"Spin",min:-.6,max:.6,step:.01}]},{name:"Chrome",params:[{path:"material.dispersion",label:"Rainbow",min:0,max:2.5,step:.05},{path:"material.split",label:"Spread",min:0,max:.3,step:.005,hint:"width of the rainbow"},{path:"material.rimTightness",label:"Rim",min:.5,max:8,step:.1,hint:"higher = thinner band"},{path:"material.silver",label:"Silver",min:0,max:1.5,step:.02},{path:"material.facing",label:"Face-on",min:0,max:.6,step:.01,hint:"low keeps the middles dark"},{path:"material.polish",label:"Polish",min:4,max:260,step:2}]},{name:"Light",params:[{path:"light.keyX",label:"Key X",min:-1,max:1,step:.02},{path:"light.keyY",label:"Key Y",min:-1,max:1,step:.02},{path:"light.key",label:"Key",min:0,max:3,step:.05},{path:"light.fill",label:"Fill",min:0,max:1.5,step:.02},{path:"light.ambient",label:"Ambient",min:0,max:.3,step:.005}]},{name:"Hands and sound",params:[{path:"hands.push",label:"Hand push",min:0,max:2,step:.05},{path:"hands.spread",label:"Hand spread",min:0,max:1.5,step:.05},{path:"hands.kick",label:"Beat throw",min:0,max:2,step:.05},{path:"look.gain",label:"Exposure",min:.2,max:2.5,step:.05},{path:"look.grain",label:"Grain",min:0,max:.2,step:.005}]}]},mosaic:{config:Md,groups:[{name:"Mark",params:[{path:"mode",label:"Mode",min:0,max:3,step:1,labels:["Letters","Dots","Blocks","Bars"]},{path:"grid.columns",label:"Detail",min:8,max:140,step:1,hint:"cells across"},{path:"grid.fill",label:"Weight",min:.2,max:1.8,step:.05},{path:"grid.cellAspect",label:"Cell shape",min:.4,max:2.5,step:.05,hint:"above 1 = taller"},{path:"grid.spreadDensity",label:"Spread coarsens",min:0,max:1.5,step:.05}]},{name:"Image",params:[{path:"tone.contrast",label:"Contrast",min:.2,max:4,step:.05},{path:"tone.brightness",label:"Brightness",min:-.5,max:.5,step:.02},{path:"tone.floor",label:"Cut",min:0,max:.9,step:.01,hint:"darker cells draw nothing"},{path:"tone.invert",label:"Invert",min:0,max:1,step:1}]},{name:"Letters",visibleWhen:{path:"mode",equals:[0]},params:[{path:"letters.ramp",label:"Glyphs",min:0,max:1,step:1,labels:["Density ramp","Your word"]},{path:"letters.weight",label:"Weight",min:100,max:900,step:100},{path:"letters.outline",label:"Hollow",min:0,max:1,step:1}]},{name:"Shape",visibleWhen:{path:"mode",equals:[1,2,3]},params:[{path:"shape.minimum",label:"Floor",min:0,max:.6,step:.01,hint:"size of the faintest mark"},{path:"shape.rotate",label:"Turn",min:0,max:1,step:.02,hint:"blocks towards diamonds"},{path:"shape.anchor",label:"From the floor",min:0,max:1,step:1,hint:"bars only"}]},{name:"Warp",params:[{path:"warp.handPush",label:"Hand push",min:0,max:.3,step:.005},{path:"warp.ripple",label:"Ripple",min:0,max:2,step:.05},{path:"warp.rippleSpeed",label:"Ripple speed",min:0,max:4,step:.05}]},{name:"Colour",params:[{path:"colour.fromSource",label:"Own colour",min:0,max:1,step:.02,hint:"0 = your palette"},{path:"colour.spread",label:"Palette run",min:1,max:40,step:1},{path:"audio.bassScale",label:"Bass swell",min:0,max:2,step:.05},{path:"audio.beatKick",label:"Beat kick",min:0,max:1.5,step:.05},{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"}]}]},digitalblocks:{config:vd,groups:[{name:"Hands",params:[{path:"chaos.range",label:"Ceiling",min:.05,max:1,step:.01,hint:"how wild it can get"},{path:"chaos.openness",label:"Open hand",min:0,max:1,step:.02},{path:"chaos.velocity",label:"Hand speed",min:0,max:1,step:.02},{path:"chaos.clap",label:"Clap",min:0,max:1,step:.02},{path:"chaos.ease",label:"Ease",min:.005,max:.3,step:.005,hint:"lower = calmer"},{path:"chaos.idle",label:"Idle",min:0,max:.5,step:.01}]},{name:"Motion",params:[{path:"speed.base",label:"Drift",min:0,max:.4,step:.005},{path:"speed.variation",label:"Spread",min:0,max:.5,step:.005},{path:"speed.chaos",label:"Chaos speed",min:0,max:1.5,step:.02}]},{name:"Grid",params:[{path:"strips.base",label:"Columns",min:2,max:60,step:1},{path:"strips.chaos",label:"Columns +",min:0,max:60,step:1},{path:"strips.blocks",label:"Blocks",min:1,max:40,step:1},{path:"strips.blocksChaos",label:"Blocks +",min:0,max:40,step:1}]}]},waves:{config:bf,groups:[{name:"Wave",params:[{path:"waveCount.active",label:"Count",min:1,max:24,step:1,hint:"hands present"},{path:"waveCount.idle",label:"Count idle",min:1,max:24,step:1},{path:"wave.baseAmplitude",label:"Amplitude",min:0,max:400,step:5},{path:"wave.maxAmplitude",label:"Max amp",min:10,max:800,step:10},{path:"wave.baseFrequency",label:"Frequency",min:.001,max:.1,step:.001},{path:"wave.maxFrequency",label:"Max freq",min:.001,max:.2,step:.001}]},{name:"Line",params:[{path:"wave.segments",label:"Segments",min:20,max:600,step:10,hint:"lower = angular"},{path:"wave.lineThickness",label:"Thickness",min:.5,max:20,step:.5},{path:"visual.fillOpacity",label:"Fill",min:0,max:255,step:1}]},{name:"Layers",params:[{path:"layers.primarySpeed",label:"Speed 1",min:0,max:10,step:.1},{path:"layers.secondarySpeed",label:"Speed 2",min:0,max:10,step:.1},{path:"layers.tertiarySpeed",label:"Speed 3",min:0,max:10,step:.1},{path:"layers.secondaryAmplitude",label:"Amp 2",min:0,max:2,step:.01},{path:"layers.tertiaryAmplitude",label:"Amp 3",min:0,max:2,step:.01},{path:"fingerCountSpeed.maxSpeed",label:"Speed cap",min:.1,max:10,step:.1}]},{name:"Hands & focus",params:[{path:"handInfluence.strength",label:"Pull",min:0,max:3,step:.05},{path:"handInfluence.radius",label:"Reach",min:20,max:800,step:10},{path:"focalPoint.baseSize",label:"Dot size",min:0,max:100,step:1},{path:"focalPoint.pulseSpeed",label:"Pulse",min:0,max:20,step:.5},{path:"focalPoint.pulseAmount",label:"Pulse depth",min:0,max:1,step:.01},{path:"focalPoint.glowLayers",label:"Dot glow",min:0,max:10,step:1}]}]}},fx={config:Va,groups:[{name:"Feedback",stage:"feedback",turnOn:{"feedback.amount":.72,"feedback.zoom":1.02},togglePath:"feedback.enabled",params:[{path:"feedback.amount",label:"Trail",min:0,max:.99,step:.01,hint:"how long the image hangs on"},{needs:"feedback.amount",path:"feedback.zoom",label:"Tunnel",min:.9,max:1.1,step:.001,hint:"above the middle pushes outward"},{needs:"feedback.amount",path:"feedback.rotate",label:"Spiral",min:-.05,max:.05,step:5e-4}]},{name:"Colour",stage:"colour",turnOn:{"colour.hue":1.1},togglePath:"colour.enabled",params:[{path:"colour.hue",label:"Hue",min:-3.14,max:3.14,step:.01,hint:"turns the whole frame"},{path:"colour.saturation",label:"Saturation",min:0,max:2,step:.01,hint:"1 = untouched"}]},{name:"Displace",stage:"displace",turnOn:{"displace.amount":.08},togglePath:"displace.enabled",params:[{path:"displace.amount",label:"Warp",min:0,max:.3,step:.002},{path:"displace.scale",label:"Scale",min:.5,max:40,step:.5},{path:"displace.speed",label:"Speed",min:0,max:3,step:.02}]},{name:"Chromatic",stage:"rgbSplit",turnOn:{"rgbSplit.amount":.022},togglePath:"rgbSplit.enabled",params:[{path:"rgbSplit.amount",label:"Split",min:0,max:.1,step:.001}]},{name:"Kaleido",stage:"kaleido",turnOn:{"kaleido.segments":4},togglePath:"kaleido.enabled",params:[{path:"kaleido.segments",label:"Mirrors",min:0,max:4,step:1,labels:["Off","Off","2","3","4"]},{needs:"kaleido.segments",path:"kaleido.spin",label:"Angle",min:-3.14,max:3.14,step:.01}]},{name:"Pixelate",stage:"pixelate",turnOn:{"pixelate.pixel":14},togglePath:"pixelate.enabled",params:[{path:"pixelate.pixel",label:"Block",min:0,max:64,step:1,hint:"0 = off"},{path:"pixelate.levels",label:"Colours",min:0,max:16,step:1,hint:"steps per channel"}]},{name:"Noise",stage:"noiseTile",turnOn:{"noiseTile.size":2},togglePath:"noiseTile.enabled",params:[{path:"noiseTile.grain",label:"Grain",min:0,max:1,step:.02,hint:"coarse noise over the dither"}]},{name:"Echo",stage:"echo",turnOn:{"echo.count":4},togglePath:"echo.enabled",params:[{path:"echo.count",label:"Echoes",min:0,max:6,step:1,hint:"0 = off"},{needs:"echo.count",path:"echo.depth",label:"Depth",min:.02,max:.6,step:.01},{needs:"echo.count",path:"echo.speed",label:"Travel",min:0,max:1.5,step:.01,hint:"loops seamlessly"}]},{name:"Fluted",stage:"fluted",turnOn:{"fluted.ribs":26},togglePath:"fluted.enabled",params:[{path:"fluted.ribs",label:"Ribs",min:0,max:80,step:1,hint:"0 = off"},{needs:"fluted.ribs",path:"fluted.bend",label:"Bend",min:0,max:2,step:.02},{needs:"fluted.ribs",path:"fluted.shine",label:"Shine",min:0,max:1,step:.02}]}]},Td=1,DC=0,kC=2;function OC(a){return Math.min(1,.06+a*.94)}function mv(a){return .55+a*.45}function dx(a,e,t){var h;const i=OC(t),s=mv(t),o=e?{x:.5+(e.position.x-.5)/s,y:.5+(e.position.y-.5)/s}:a.position,c=o.x+(a.position.x-o.x)*i,u=o.y+(a.position.y-o.y)*i;return{...a,position:{x:.5+(c-.5)*s,y:.5+(u-.5)*s},velocity:a.velocity===void 0?void 0:a.velocity*t,landmarks:(h=a.landmarks)==null?void 0:h.map(f=>({...f,x:.5+(f.x-.5)*s,y:.5+(f.y-.5)*s}))}}function zC(a,e,t){return t===Td?a:{...a,left:a.left?dx(a.left,(e==null?void 0:e.left)??null,t):null,right:a.right?dx(a.right,(e==null?void 0:e.right)??null,t):null,clapIntensity:a.clapIntensity===void 0?void 0:a.clapIntensity*t,distanceBetweenHands:a.distanceBetweenHands===void 0?void 0:.4+(a.distanceBetweenHands-.4)*mv(t)}}function Oo(a,e,t){const i=e/100,s=t/100,o=(1-Math.abs(2*s-1))*i,c=o*(1-Math.abs(a/60%2-1)),u=s-o/2;let h=0,f=0,p=0;a<60?[h,f,p]=[o,c,0]:a<120?[h,f,p]=[c,o,0]:a<180?[h,f,p]=[0,o,c]:a<240?[h,f,p]=[0,c,o]:a<300?[h,f,p]=[c,0,o]:[h,f,p]=[o,0,c];const g=m=>Math.round((m+u)*255).toString(16).padStart(2,"0");return`#${g(h)}${g(f)}${g(p)}`}function BC(a,e,t){if(t==="grayscale")return["#FFFFFF","#000000","#FFFFFF","#000000"];if(t==="black")return[Oo(a,e,50),"#FFFFFF",Oo(a,e*.6,70),Oo(a,e*.8,35)];const i=Oo(a,e,50),s=Oo((a+180)%360,e,50);return[i,s,i,s]}const HC=["video/mp4;codecs=avc1.42E01E,mp4a.40.2","video/mp4","video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"],GC=30,VC=12e6;function gv(){if(!(typeof MediaRecorder>"u")){for(const a of HC)if(MediaRecorder.isTypeSupported(a))return a}}function WC(){return typeof MediaRecorder<"u"&&typeof HTMLCanvasElement.prototype.captureStream=="function"&&gv()!==void 0}class XC{constructor(e){F(this,"sources");F(this,"frame",null);F(this,"ctx",null);F(this,"recorder",null);F(this,"chunks",[]);F(this,"raf",0);F(this,"startedAt",0);F(this,"format","");F(this,"draw",()=>{this.raf=requestAnimationFrame(this.draw);const{ctx:e,frame:t}=this;if(!e||!t)return;const i=this.sources.canvas();if(!i)return;e.fillStyle="#000",e.fillRect(0,0,t.width,t.height);const s=Math.min(t.width/i.width,t.height/i.height),o=i.width*s,c=i.height*s;try{e.drawImage(i,(t.width-o)/2,(t.height-c)/2,o,c)}catch{return}const u=this.sources.camera();u&&u.readyState>=2&&u.videoWidth>0&&this.drawCamera(e,t,u)});this.sources=e}get recording(){return this.recorder!==null&&this.recorder.state==="recording"}get elapsed(){return this.startedAt?(performance.now()-this.startedAt)/1e3:0}start(e){if(this.recording)return;const t=this.sources.canvas(),i=gv();if(!t||!i)return;this.format=i;const s=document.createElement("canvas");s.width=Math.max(2,t.width-t.width%2),s.height=Math.max(2,t.height-t.height%2);const o=s.getContext("2d",{alpha:!1});if(!o)return;this.frame=s,this.ctx=o;const c=s.captureStream(GC);if(e)for(const h of e.getAudioTracks())c.addTrack(h);const u=new MediaRecorder(c,{mimeType:i,videoBitsPerSecond:VC});this.chunks=[],u.ondataavailable=h=>{h.data.size>0&&this.chunks.push(h.data)},u.start(1e3),this.recorder=u,this.startedAt=performance.now(),this.draw()}stop(){const e=this.recorder;if(!e||e.state==="inactive")return Promise.resolve(null);const t=this.elapsed;return new Promise(i=>{e.onstop=()=>{cancelAnimationFrame(this.raf),this.raf=0,this.recorder=null,this.startedAt=0,this.frame=null,this.ctx=null;const s=new Blob(this.chunks,{type:this.format});this.chunks=[],i(s.size>0?{blob:s,extension:this.format.startsWith("video/mp4")?"mp4":"webm",seconds:t}:null)},e.stop()})}drawCamera(e,t,i){const s=Math.round(t.width*.014),o=Math.round(t.width*.17),c=Math.round(o*i.videoHeight/i.videoWidth),u=t.width-o-s,h=s,f=Math.round(o*.06);e.save(),e.beginPath(),typeof e.roundRect=="function"?e.roundRect(u,h,o,c,f):e.rect(u,h,o,c),e.clip(),e.translate(u+o,h),e.scale(-1,1),e.drawImage(i,0,0,o,c),e.restore(),e.save(),e.strokeStyle="rgba(255, 255, 255, 0.35)",e.lineWidth=Math.max(1,t.width*.001),e.beginPath(),typeof e.roundRect=="function"?e.roundRect(u,h,o,c,f):e.rect(u,h,o,c),e.stroke(),e.restore()}}function px(a){const e=new Date().toISOString().slice(0,19).replace("T","-").replace(/:/g,""),t=URL.createObjectURL(a.blob),i=document.createElement("a");i.href=t,i.download=`n4thvj-${e}.${a.extension}`,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),6e4)}const jC=60,qC=`<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>N4TH — OUTPUT</title>
    <style>
      html, body {
        height: 100%;
        margin: 0;
        background: #000;
        overflow: hidden;
      }
      /* The pointer is needed while she is placing the window and is nothing
         but a distraction once it is on the wall, so it follows full screen. */
      body:fullscreen { cursor: none; }
      video {
        width: 100%;
        height: 100%;
        display: block;
        /* Letterboxed rather than cropped: a projector rarely matches the
           window's shape, and losing the edges of a composition is worse
           than black bars. */
        object-fit: contain;
        background: #000;
      }
      #hint {
        position: fixed;
        inset: auto 0 0 0;
        padding: 14px;
        text-align: center;
        color: rgba(255, 255, 255, 0.4);
        font: 12px/1.5 ui-monospace, SFMono-Regular, Menlo, monospace;
        transition: opacity 0.6s;
      }
      /* The hint is for placing the window, never for the wall. It goes the
         moment this is full screen, whether that is in two seconds or two
         minutes — a timer would either rush her or show the audience. */
      body.projecting #hint { opacity: 0; }
    </style>
  </head>
  <body>
    <video id="out" autoplay playsinline muted></video>
    <p id="hint">Drag onto the projector, then press F — or double-click — for full screen</p>
    <script>
      function settle() {
        document.body.classList.toggle('projecting', !!document.fullscreenElement);
      }
      addEventListener('fullscreenchange', settle);
      addEventListener('keydown', function (e) {
        if (e.key.toLowerCase() !== 'f') return;
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen().catch(function () {});
      });
      // Double-click is what people try on a video before they try a key.
      addEventListener('dblclick', function () {
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen().catch(function () {});
      });
    <\/script>
  </body>
</html>`;class YC{constructor(e){F(this,"win",null);F(this,"stream",null);F(this,"onClose");F(this,"poll",0);this.onClose=e}get open(){return this.win!==null&&!this.win.closed}show(e){var i;if(this.open)return(i=this.win)==null||i.focus(),null;if(!e)return"The visuals are not running yet.";if(typeof e.captureStream!="function")return"This browser cannot send a canvas to a second window.";const t=window.open("","n4thvj-output","width=1280,height=720");return t?(t.document.open(),t.document.write(qC),t.document.close(),this.win=t,this.attach(e),this.poll=window.setInterval(()=>{this.win&&this.win.closed&&this.close()},500),null):"The browser blocked the window. Allow pop-ups for this page and try again."}attach(e){var s;const t=this.win;if(!t||t.closed||!e||typeof e.captureStream!="function")return;const i=t.document.getElementById("out");if(i){for(const o of((s=this.stream)==null?void 0:s.getTracks())??[])o.stop();this.stream=e.captureStream(jC),i.srcObject=this.stream,i.play().catch(()=>{})}}close(){var t;clearInterval(this.poll),this.poll=0;for(const i of((t=this.stream)==null?void 0:t.getTracks())??[])i.stop();this.stream=null;const e=this.win;this.win=null,e&&!e.closed&&e.close(),this.onClose()}}function vf(a,e,t){try{const i=localStorage.getItem(a);if(i===null)return e;const s=JSON.parse(i);return t(s)?s:e}catch{return e}}function Pa(a,e){try{localStorage.setItem(a,JSON.stringify(e))}catch{}}function _f(){return{hue:245,saturation:100,colorMode:"contrast"}}function $C(){const[a,e]=le.useState(()=>[{pattern:"geometric",opacity:1,motion:Td}]),[t,i]=le.useState(0),s=(a[t]??a[0]).pattern,o=le.useCallback(fe=>{const Ie=a.findIndex(Oe=>Oe.pattern===fe);if(Ie!==-1){i(Ie);return}e(Oe=>Oe.map((P,W)=>W===t?{...P,pattern:fe}:P))},[a,t]),c=le.useCallback(fe=>{const Ie=a.findIndex(P=>P.pattern===fe);if(Ie!==-1){if(a.length===1)return;e(a.filter((P,W)=>W!==Ie)),i(P=>P>Ie?P-1:Math.min(P,a.length-2));return}if(a.length>=q_)return;const Oe=a[t]??a[0];e([...a,{pattern:fe,opacity:Y_,motion:Oe.motion}]),i(a.length)},[a,t]),u=le.useCallback(()=>{i(fe=>(fe+1)%a.length)},[a.length]),h=le.useCallback((fe,Ie)=>{e(Oe=>Oe.map((P,W)=>W===fe?{...P,opacity:Ie}:P))},[]),f=le.useCallback(fe=>{e(Ie=>Ie.length===1?Ie:Ie.filter((Oe,P)=>P!==fe)),i(Ie=>Ie>fe?Ie-1:Math.min(Ie,a.length-2))},[a.length]),p=le.useCallback(fe=>{e(Ie=>Ie.map((Oe,P)=>P===t?{...Oe,opacity:Math.min(1,Math.max(0,Math.round((Oe.opacity+fe)*100)/100))}:Oe))},[t]),[g,m]=le.useState(!1),[y,v]=le.useState(!0),[w,_]=le.useState(()=>vf("vj-looks",{},fe=>typeof fe=="object"&&fe!==null));le.useEffect(()=>{Pa("vj-looks",w)},[w]);const S=le.useCallback(fe=>w[fe]??_f(),[w]),{hue:b,saturation:T,colorMode:E}=S(s),N=(fe,Ie)=>typeof fe=="function"?fe(Ie):fe,A=le.useCallback((fe,Ie)=>{_(Oe=>{const P=Oe[s]??_f();return{...Oe,[s]:{...P,[fe]:N(Ie,P[fe])}}})},[s]),U=le.useCallback(fe=>A("hue",fe),[A]),C=le.useCallback(fe=>A("saturation",fe),[A]),L=le.useCallback(fe=>A("colorMode",fe),[A]),O=le.useMemo(()=>a.map(fe=>{const Ie=w[fe.pattern]??_f();return BC(Ie.hue,Ie.saturation,Ie.colorMode)}),[a,w]),D=O[t]??O[0],[z,Z]=le.useState(!1),ne=(a[t]??a[0]).motion,V=le.useCallback(fe=>{e(Ie=>Ie.map((Oe,P)=>P===t?{...Oe,motion:typeof fe=="function"?fe(Oe.motion):fe}:Oe))},[t]),J=le.useCallback(fe=>{V(Ie=>Math.min(kC,Math.max(DC,Math.round((Ie+fe)*100)/100)))},[]),[$,K]=le.useState(yC),[se,ie]=le.useState({});le.useEffect(()=>{SC($)},[$]),le.useEffect(()=>{const fe=[];let Ie=!1;return wC().then(Oe=>{if(Ie)return;const P={};for(const[W,{file:he,name:ce}]of Object.entries(Oe)){const oe=URL.createObjectURL(he);fe.push(oe),P[W]={url:oe,name:ce,kind:lx(he)}}ie(P)}),()=>{Ie=!0,fe.forEach(Oe=>URL.revokeObjectURL(Oe))}},[]);const B=le.useCallback((fe,Ie)=>{ie(Oe=>{const P=Oe[fe];P&&URL.revokeObjectURL(P.url);const W={...Oe};return Ie?W[fe]={url:URL.createObjectURL(Ie),name:Ie.name,kind:lx(Ie)}:delete W[fe],W}),Ie?fv(fe,Ie,Ie.name).catch(()=>{}):dv(fe).catch(()=>{})},[]),X=le.useMemo(()=>({text:$,clips:se}),[$,se]),ye=le.useRef(null),Me=le.useRef(null),we=le.useRef(null),te=le.useRef(!1),[xe,pe]=le.useState(!1),[me,Te]=le.useState(0),Pe=le.useMemo(()=>WC(),[]),je=le.useRef(null);!je.current&&Pe&&(je.current=new XC({canvas:()=>ye.current,camera:()=>te.current?we.current:null}));const[Ye,$e]=le.useState(()=>{try{const fe=localStorage.getItem("vj-sound");return fe==="music"||fe==="off"||fe==="mic"?fe:"mic"}catch{return"mic"}});le.useEffect(()=>{try{localStorage.setItem("vj-sound",Ye)}catch{}},[Ye]);const dt=le.useRef(null),[Qe,Et]=le.useState(null),bt=le.useCallback(async()=>{var Oe;const fe=je.current;if(!fe)return;if(fe.recording){pe(!1);const P=await fe.stop();for(const W of((Oe=dt.current)==null?void 0:Oe.getTracks())??[])W.stop();dt.current=null,P&&px(P);return}Et(null);const Ie=await Z_(Ye,Me.current);Ie.problem&&Et(Ie.problem),dt.current=Ie.owned?Ie.stream:null,fe.start(Ie.stream),pe(fe.recording)},[Ye]);le.useEffect(()=>{if(!Qe)return;const fe=setTimeout(()=>Et(null),9e3);return()=>clearTimeout(fe)},[Qe]);const[Xt,q]=le.useState(!1),[Ct,gt]=le.useState(null),yt=le.useRef(null);yt.current||(yt.current=new YC(()=>q(!1)));const Be=le.useCallback(()=>{const fe=yt.current;if(!fe)return;if(fe.open){fe.close();return}const Ie=fe.show(ye.current);gt(Ie),q(fe.open)},[]);le.useEffect(()=>{if(!Ct)return;const fe=setTimeout(()=>gt(null),9e3);return()=>clearTimeout(fe)},[Ct]),le.useEffect(()=>()=>{var fe;return(fe=yt.current)==null?void 0:fe.close()},[]),le.useEffect(()=>{if(!xe){Te(0);return}const fe=setInterval(()=>{var Ie;Te(((Ie=je.current)==null?void 0:Ie.elapsed)??0)},500);return()=>clearInterval(fe)},[xe]),le.useEffect(()=>{const fe=()=>{var Ie;(Ie=je.current)!=null&&Ie.recording&&je.current.stop().then(Oe=>Oe&&px(Oe))};return window.addEventListener("pagehide",fe),()=>window.removeEventListener("pagehide",fe)},[]);const[zt,k]=le.useState(!0),[R,re]=le.useState(()=>U0(vf("vj-params",{},()=>!0))),[_e,be]=le.useState(()=>U0(vf("vj-fx",{},()=>!0))),Le=_e[s]??{},He=le.useCallback((fe,Ie)=>{be(Oe=>({...Oe,[s]:{...Oe[s]??{},[fe]:Ie}}))},[s]),ge=(Le["master.enabled"]??1)>=.5,Se=le.useCallback(()=>{be(fe=>{const Ie=fe[s]??{};return{...fe,[s]:{...Ie,"master.enabled":(Ie["master.enabled"]??1)>=.5?0:1}}})},[s]),[We,qe]=le.useState(null),De=le.useCallback(fe=>{be(Ie=>{if(fe===void 0)return{...Ie,[s]:{}};const{[fe]:Oe,...P}=Ie[s]??{};return{...Ie,[s]:P}})},[s]),Ne=le.useCallback((fe,Ie)=>{re(Oe=>({...Oe,[s]:{...Oe[s],[fe]:Ie}}))},[s]),mt=le.useCallback(fe=>{re(Ie=>{if(fe===void 0){const{[s]:W,...he}=Ie;return he}const{[fe]:Oe,...P}=Ie[s]??{};return{...Ie,[s]:P}})},[s]),xt=le.useMemo(()=>a.map(fe=>R[fe.pattern]),[a,R]),[ct,Y]=le.useState(ey),[Fe,ve]=le.useState("library"),[Ve,ke]=le.useState({left:null,right:null}),[Ee,nt]=le.useState(null);le.useEffect(()=>{we.current=Ee,te.current=g},[Ee,g]);const[vt,Bt]=le.useState(!1),[Rt,bn]=le.useState(!1),[Nt,Ti]=le.useState({bass:0,lowMid:0,mid:0,high:0,overall:0,beat:!1,beatIntensity:0,onset:0}),[sr,ar]=le.useState(.5),[Gn,Ci]=le.useState(0),Ir=Ve.left!==null||Ve.right!==null,fs=Fe==="vj"&&(Rt||zt&&!Ir);le.useEffect(()=>{if(!fs)return;let fe;const Ie=()=>{Ci(Date.now()/1e3),fe=requestAnimationFrame(Ie)};return Ie(),()=>cancelAnimationFrame(fe)},[fs]),le.useEffect(()=>{if(!z)return;const fe=setInterval(()=>{U(Ie=>(Ie+1)%360)},50);return()=>clearInterval(fe)},[z]);const si=le.useMemo(()=>uv(Gn),[Gn]),or=Rt?{left:{position:{x:.3+Math.sin(Gn)*.2*Nt.mid,y:.5+Nt.bass*.3},gesture:Nt.overall>.25?"open":"fist",fingerCount:1+Math.round(Math.min(1,Nt.mid+Nt.high*.6)*4),velocity:Math.min(1,Nt.mid*.7+Nt.onset*.6),landmarks:bd(.3+Math.sin(Gn)*.2*Nt.mid,.5+Nt.bass*.3,Gn,0)},right:{position:{x:.7-Math.sin(Gn)*.2*Nt.mid,y:.5+Nt.bass*.3},gesture:Nt.overall>.25?"open":"fist",fingerCount:1+Math.round(Math.min(1,Nt.mid+Nt.high*.6)*4),velocity:Math.min(1,Nt.mid*.7+Nt.onset*.6),landmarks:bd(.7-Math.sin(Gn)*.2*Nt.mid,.5+Nt.bass*.3,Gn,Math.PI)},clapping:Nt.beat,clapIntensity:Nt.beatIntensity,distanceBetweenHands:.45-Nt.bass*.3}:Ir||!zt?Ve:si,Nr=le.useRef(null),lr=zC(or,Nr.current,ne);Nr.current=lr,le.useEffect(()=>{Pa("vj-hue",b),Pa("vj-saturation",T),Pa("vj-color-mode",E)},[b,T,E]),le.useEffect(()=>{Pa("vj-params",R)},[R]),le.useEffect(()=>{Pa("vj-fx",_e)},[_e]),le.useEffect(()=>{ty(ct)},[ct]);const ds=le.useCallback(()=>{ct.length!==0&&(e([{pattern:ct[0],opacity:1,motion:Td}]),i(0),be(fe=>{const Ie={};for(const[Oe,P]of Object.entries(fe)){Ie[Oe]={...P};for(const W of fx.groups)W.togglePath&&(Ie[Oe][W.togglePath]=0);Ie[Oe]["master.enabled"]=1}return Ie}),qe(null),ve("vj"))},[ct]),cr=le.useCallback(fe=>{if(ct.length===0)return;const Ie=ct.indexOf(s),P=Ie===-1?fe==="next"?0:ct.length-1:(Ie+(fe==="next"?1:-1)+ct.length)%ct.length;o(ct[P])},[s,ct,o]),Ai=le.useRef(null);le.useEffect(()=>{const fe=Oe=>{if(Oe.key==="Control"){L("contrast");return}if(Oe.key==="Alt"){L("grayscale");return}if(Oe.key==="Meta"){L("black");return}if(Oe.ctrlKey||Oe.metaKey||Oe.altKey)return;if(Oe.key.toLowerCase()==="c"){m(W=>!W);return}if(Oe.key.toLowerCase()==="a"){bn(W=>!W);return}if(Oe.key.toLowerCase()==="r"){bt();return}if(Oe.key.toLowerCase()==="s"){$e(P0);return}if(Oe.key.toLowerCase()==="o"){Be();return}if(Oe.key.toLowerCase()==="x"){Se();return}if(Oe.key.toLowerCase()==="i"){k(W=>!W);return}if(Oe.key.toLowerCase()==="d"){o("flowfield");return}if(Oe.key==="Escape"){ve("library");return}if(Oe.key.toLowerCase()==="l"){u();return}if(Oe.key==="-"){J(-.1);return}if(Oe.key==="="||Oe.key==="+"){J(.1);return}if(Oe.key==="["){p(-.1);return}if(Oe.key==="]"){p(.1);return}const P=ct[yf(Oe.key)];if(P){if(Oe.repeat||Ai.current)return;Ai.current={key:Oe.key.toLowerCase(),fired:!1,timer:window.setTimeout(()=>{Ai.current&&(Ai.current.fired=!0),c(P)},vx)};return}switch(Oe.key){case"ArrowLeft":Oe.preventDefault(),cr("prev");break;case"ArrowRight":Oe.preventDefault(),cr("next");break;case"ArrowUp":Oe.preventDefault(),C(W=>Math.min(100,W+5));break;case"ArrowDown":Oe.preventDefault(),C(W=>Math.max(0,W-5));break}},Ie=Oe=>{const P=Ai.current;if(!P||P.key!==Oe.key.toLowerCase()||(clearTimeout(P.timer),Ai.current=null,P.fired))return;const W=ct[yf(Oe.key)];W&&o(W)};return window.addEventListener("keydown",fe),window.addEventListener("keyup",Ie),()=>{window.removeEventListener("keydown",fe),window.removeEventListener("keyup",Ie)}},[ct,cr,Se,o,c,u,p,J,bt,Be]),le.useEffect(()=>{const fe=Ie=>{Ie.preventDefault(),v(Oe=>!Oe)};return window.addEventListener("contextmenu",fe),()=>window.removeEventListener("contextmenu",fe)},[]),le.useEffect(()=>{(s==="face"||s.startsWith("smokehand"))&&m(!0)},[s]);const Ws=()=>{Bt(!1)},$a=()=>{Bt(!1)},Xs=Nt;return Fe==="library"?G.jsx(LC,{set:ct,onSetChange:Y,onStart:ds,text:$,onTextChange:K,clips:se,onClipChange:B}):G.jsxs("div",{className:"relative w-screen h-screen overflow-hidden bg-black",children:[vt&&G.jsx(fy,{onGrant:Ws,onSkip:$a}),G.jsx(sC,{handData:lr,layerColors:O,layers:a,videoElement:Ee,audioData:Xs,layerParams:xt,content:X,motion:a.map(fe=>fe.motion),colorModes:a.map(fe=>S(fe.pattern).colorMode),autoHandData:si,autoDrive:zt,fxByPattern:_e,onCanvasReady:fe=>{var Ie;ye.current=fe,(Ie=yt.current)==null||Ie.attach(fe)}}),G.jsx("div",{className:`absolute top-4 right-4 ${g?"opacity-100":"opacity-0 pointer-events-none"}`,children:G.jsx(j_,{onVideoReady:nt})}),Ee&&s!=="face"&&G.jsx(ly,{videoElement:Ee,onHandData:ke}),G.jsx(xC,{enabled:Rt,sensitivity:sr,onAudioData:Ti,onStream:fe=>{Me.current=fe}}),y&&G.jsx(NC,{header:G.jsx(UC,{layers:a,selectedLayer:t,set:ct,onSelect:i,onOpacityChange:h,onRemove:f}),sections:hx[s]?[{key:"shape",label:"SHAPE",entry:hx[s],values:R[s]??{},onChange:Ne,onReset:mt}]:[]}),y&&G.jsx(FC,{entry:fx,values:Le,onChange:He,onReset:De,openName:We,onOpen:qe,layerLabel:a.length>1?`L${t+1} ${ir[s].short}`:ir[s].short}),y&&G.jsx(sy,{currentPattern:s,onPatternChange:o,layers:a,selectedLayer:t,onPatternHold:c,onLayerCycle:u,showCamera:g,onCameraToggle:()=>m(!g),handData:Ve,selectedColors:D,colorMode:E,hue:b,saturation:T,onHueChange:U,onSaturationChange:C,onColorModeChange:L,autoHueEnabled:z,onAutoHueToggle:()=>Z(fe=>!fe),set:ct,onOpenLibrary:()=>ve("library"),audioEnabled:Rt,onAudioToggle:()=>bn(!Rt),audioSensitivity:sr,onAudioSensitivityChange:ar,audioLevels:Xs,motion:ne,onMotionChange:V,idleDrive:zt,onIdleDriveToggle:()=>k(fe=>!fe),fxEnabled:ge,fxActive:lv(Le),onFxToggle:Se,canRecord:Pe,recording:xe,recordSeconds:me,onRecordToggle:()=>void bt(),sound:Ye,onSoundCycle:()=>$e(P0),output:Xt,onOutputToggle:Be}),(Qe||Ct)&&G.jsx("div",{className:"pointer-events-none absolute bottom-28 left-1/2 z-[60] w-[min(34rem,90vw)] -translate-x-1/2",children:G.jsx("div",{className:"rounded-xl border border-amber-300/30 bg-black/85 px-4 py-3 text-center font-mono text-[11px] leading-relaxed text-amber-200/90 backdrop-blur-sm",children:Qe??Ct})})]})}const xv=document.getElementById("root");if(!xv)throw new Error("Root element #root not found");a_.createRoot(xv).render(G.jsx($C,{}));try{sessionStorage.removeItem("vj-stale-bundle-reload")}catch{}
