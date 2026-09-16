var U_=Object.defineProperty;var F_=(a,e,t)=>e in a?U_(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var D=(a,e,t)=>F_(a,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();var Th={exports:{}},_o={},Ch={exports:{}},bt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0;function D_(){if(p0)return bt;p0=1;var a=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function m(z){return z===null||typeof z!="object"?null:(z=g&&z[g]||z["@@iterator"],typeof z=="function"?z:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,w={};function _(z,Z,me){this.props=z,this.context=Z,this.refs=w,this.updater=me||y}_.prototype.isReactComponent={},_.prototype.setState=function(z,Z){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,Z,"setState")},_.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function S(){}S.prototype=_.prototype;function b(z,Z,me){this.props=z,this.context=Z,this.refs=w,this.updater=me||y}var C=b.prototype=new S;C.constructor=b,v(C,_.prototype),C.isPureReactComponent=!0;var T=Array.isArray,L=Object.prototype.hasOwnProperty,R={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function E(z,Z,me){var Ae,Ee={},Q=null,ve=null;if(Z!=null)for(Ae in Z.ref!==void 0&&(ve=Z.ref),Z.key!==void 0&&(Q=""+Z.key),Z)L.call(Z,Ae)&&!F.hasOwnProperty(Ae)&&(Ee[Ae]=Z[Ae]);var pe=arguments.length-2;if(pe===1)Ee.children=me;else if(1<pe){for(var Oe=Array(pe),et=0;et<pe;et++)Oe[et]=arguments[et+2];Ee.children=Oe}if(z&&z.defaultProps)for(Ae in pe=z.defaultProps,pe)Ee[Ae]===void 0&&(Ee[Ae]=pe[Ae]);return{$$typeof:a,type:z,key:Q,ref:ve,props:Ee,_owner:R.current}}function I(z,Z){return{$$typeof:a,type:z.type,key:Z,ref:z.ref,props:z.props,_owner:z._owner}}function k(z){return typeof z=="object"&&z!==null&&z.$$typeof===a}function U(z){var Z={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(me){return Z[me]})}var B=/\/+/g;function K(z,Z){return typeof z=="object"&&z!==null&&z.key!=null?U(""+z.key):Z.toString(36)}function ie(z,Z,me,Ae,Ee){var Q=typeof z;(Q==="undefined"||Q==="boolean")&&(z=null);var ve=!1;if(z===null)ve=!0;else switch(Q){case"string":case"number":ve=!0;break;case"object":switch(z.$$typeof){case a:case e:ve=!0}}if(ve)return ve=z,Ee=Ee(ve),z=Ae===""?"."+K(ve,0):Ae,T(Ee)?(me="",z!=null&&(me=z.replace(B,"$&/")+"/"),ie(Ee,Z,me,"",function(et){return et})):Ee!=null&&(k(Ee)&&(Ee=I(Ee,me+(!Ee.key||ve&&ve.key===Ee.key?"":(""+Ee.key).replace(B,"$&/")+"/")+z)),Z.push(Ee)),1;if(ve=0,Ae=Ae===""?".":Ae+":",T(z))for(var pe=0;pe<z.length;pe++){Q=z[pe];var Oe=Ae+K(Q,pe);ve+=ie(Q,Z,me,Oe,Ee)}else if(Oe=m(z),typeof Oe=="function")for(z=Oe.call(z),pe=0;!(Q=z.next()).done;)Q=Q.value,Oe=Ae+K(Q,pe++),ve+=ie(Q,Z,me,Oe,Ee);else if(Q==="object")throw Z=String(z),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.");return ve}function W(z,Z,me){if(z==null)return z;var Ae=[],Ee=0;return ie(z,Ae,"","",function(Q){return Z.call(me,Q,Ee++)}),Ae}function ee(z){if(z._status===-1){var Z=z._result;Z=Z(),Z.then(function(me){(z._status===0||z._status===-1)&&(z._status=1,z._result=me)},function(me){(z._status===0||z._status===-1)&&(z._status=2,z._result=me)}),z._status===-1&&(z._status=0,z._result=Z)}if(z._status===1)return z._result.default;throw z._result}var V={current:null},G={transition:null},$={ReactCurrentDispatcher:V,ReactCurrentBatchConfig:G,ReactCurrentOwner:R};function X(){throw Error("act(...) is not supported in production builds of React.")}return bt.Children={map:W,forEach:function(z,Z,me){W(z,function(){Z.apply(this,arguments)},me)},count:function(z){var Z=0;return W(z,function(){Z++}),Z},toArray:function(z){return W(z,function(Z){return Z})||[]},only:function(z){if(!k(z))throw Error("React.Children.only expected to receive a single React element child.");return z}},bt.Component=_,bt.Fragment=t,bt.Profiler=s,bt.PureComponent=b,bt.StrictMode=i,bt.Suspense=h,bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$,bt.act=X,bt.cloneElement=function(z,Z,me){if(z==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+z+".");var Ae=v({},z.props),Ee=z.key,Q=z.ref,ve=z._owner;if(Z!=null){if(Z.ref!==void 0&&(Q=Z.ref,ve=R.current),Z.key!==void 0&&(Ee=""+Z.key),z.type&&z.type.defaultProps)var pe=z.type.defaultProps;for(Oe in Z)L.call(Z,Oe)&&!F.hasOwnProperty(Oe)&&(Ae[Oe]=Z[Oe]===void 0&&pe!==void 0?pe[Oe]:Z[Oe])}var Oe=arguments.length-2;if(Oe===1)Ae.children=me;else if(1<Oe){pe=Array(Oe);for(var et=0;et<Oe;et++)pe[et]=arguments[et+2];Ae.children=pe}return{$$typeof:a,type:z.type,key:Ee,ref:Q,props:Ae,_owner:ve}},bt.createContext=function(z){return z={$$typeof:c,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},z.Provider={$$typeof:o,_context:z},z.Consumer=z},bt.createElement=E,bt.createFactory=function(z){var Z=E.bind(null,z);return Z.type=z,Z},bt.createRef=function(){return{current:null}},bt.forwardRef=function(z){return{$$typeof:u,render:z}},bt.isValidElement=k,bt.lazy=function(z){return{$$typeof:p,_payload:{_status:-1,_result:z},_init:ee}},bt.memo=function(z,Z){return{$$typeof:d,type:z,compare:Z===void 0?null:Z}},bt.startTransition=function(z){var Z=G.transition;G.transition={};try{z()}finally{G.transition=Z}},bt.unstable_act=X,bt.useCallback=function(z,Z){return V.current.useCallback(z,Z)},bt.useContext=function(z){return V.current.useContext(z)},bt.useDebugValue=function(){},bt.useDeferredValue=function(z){return V.current.useDeferredValue(z)},bt.useEffect=function(z,Z){return V.current.useEffect(z,Z)},bt.useId=function(){return V.current.useId()},bt.useImperativeHandle=function(z,Z,me){return V.current.useImperativeHandle(z,Z,me)},bt.useInsertionEffect=function(z,Z){return V.current.useInsertionEffect(z,Z)},bt.useLayoutEffect=function(z,Z){return V.current.useLayoutEffect(z,Z)},bt.useMemo=function(z,Z){return V.current.useMemo(z,Z)},bt.useReducer=function(z,Z,me){return V.current.useReducer(z,Z,me)},bt.useRef=function(z){return V.current.useRef(z)},bt.useState=function(z){return V.current.useState(z)},bt.useSyncExternalStore=function(z,Z,me){return V.current.useSyncExternalStore(z,Z,me)},bt.useTransition=function(){return V.current.useTransition()},bt.version="18.3.1",bt}var m0;function Sd(){return m0||(m0=1,Ch.exports=D_()),Ch.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0;function k_(){if(g0)return _o;g0=1;var a=Sd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(u,h,d){var p,g={},m=null,y=null;d!==void 0&&(m=""+d),h.key!==void 0&&(m=""+h.key),h.ref!==void 0&&(y=h.ref);for(p in h)i.call(h,p)&&!o.hasOwnProperty(p)&&(g[p]=h[p]);if(u&&u.defaultProps)for(p in h=u.defaultProps,h)g[p]===void 0&&(g[p]=h[p]);return{$$typeof:e,type:u,key:m,ref:y,props:g,_owner:s.current}}return _o.Fragment=t,_o.jsx=c,_o.jsxs=c,_o}var x0;function O_(){return x0||(x0=1,Th.exports=k_()),Th.exports}var Y=O_(),ql={},Ah={exports:{}},Qn={},Rh={exports:{}},Ph={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v0;function z_(){return v0||(v0=1,(function(a){function e(G,$){var X=G.length;G.push($);e:for(;0<X;){var z=X-1>>>1,Z=G[z];if(0<s(Z,$))G[z]=$,G[X]=Z,X=z;else break e}}function t(G){return G.length===0?null:G[0]}function i(G){if(G.length===0)return null;var $=G[0],X=G.pop();if(X!==$){G[0]=X;e:for(var z=0,Z=G.length,me=Z>>>1;z<me;){var Ae=2*(z+1)-1,Ee=G[Ae],Q=Ae+1,ve=G[Q];if(0>s(Ee,X))Q<Z&&0>s(ve,Ee)?(G[z]=ve,G[Q]=X,z=Q):(G[z]=Ee,G[Ae]=X,z=Ae);else if(Q<Z&&0>s(ve,X))G[z]=ve,G[Q]=X,z=Q;else break e}}return $}function s(G,$){var X=G.sortIndex-$.sortIndex;return X!==0?X:G.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;a.unstable_now=function(){return o.now()}}else{var c=Date,u=c.now();a.unstable_now=function(){return c.now()-u}}var h=[],d=[],p=1,g=null,m=3,y=!1,v=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(G){for(var $=t(d);$!==null;){if($.callback===null)i(d);else if($.startTime<=G)i(d),$.sortIndex=$.expirationTime,e(h,$);else break;$=t(d)}}function T(G){if(w=!1,C(G),!v)if(t(h)!==null)v=!0,ee(L);else{var $=t(d);$!==null&&V(T,$.startTime-G)}}function L(G,$){v=!1,w&&(w=!1,S(E),E=-1),y=!0;var X=m;try{for(C($),g=t(h);g!==null&&(!(g.expirationTime>$)||G&&!U());){var z=g.callback;if(typeof z=="function"){g.callback=null,m=g.priorityLevel;var Z=z(g.expirationTime<=$);$=a.unstable_now(),typeof Z=="function"?g.callback=Z:g===t(h)&&i(h),C($)}else i(h);g=t(h)}if(g!==null)var me=!0;else{var Ae=t(d);Ae!==null&&V(T,Ae.startTime-$),me=!1}return me}finally{g=null,m=X,y=!1}}var R=!1,F=null,E=-1,I=5,k=-1;function U(){return!(a.unstable_now()-k<I)}function B(){if(F!==null){var G=a.unstable_now();k=G;var $=!0;try{$=F(!0,G)}finally{$?K():(R=!1,F=null)}}else R=!1}var K;if(typeof b=="function")K=function(){b(B)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,W=ie.port2;ie.port1.onmessage=B,K=function(){W.postMessage(null)}}else K=function(){_(B,0)};function ee(G){F=G,R||(R=!0,K())}function V(G,$){E=_(function(){G(a.unstable_now())},$)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(G){G.callback=null},a.unstable_continueExecution=function(){v||y||(v=!0,ee(L))},a.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<G?Math.floor(1e3/G):5},a.unstable_getCurrentPriorityLevel=function(){return m},a.unstable_getFirstCallbackNode=function(){return t(h)},a.unstable_next=function(G){switch(m){case 1:case 2:case 3:var $=3;break;default:$=m}var X=m;m=$;try{return G()}finally{m=X}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(G,$){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var X=m;m=G;try{return $()}finally{m=X}},a.unstable_scheduleCallback=function(G,$,X){var z=a.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?z+X:z):X=z,G){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=X+Z,G={id:p++,callback:$,priorityLevel:G,startTime:X,expirationTime:Z,sortIndex:-1},X>z?(G.sortIndex=X,e(d,G),t(h)===null&&G===t(d)&&(w?(S(E),E=-1):w=!0,V(T,X-z))):(G.sortIndex=Z,e(h,G),v||y||(v=!0,ee(L))),G},a.unstable_shouldYield=U,a.unstable_wrapCallback=function(G){var $=m;return function(){var X=m;m=$;try{return G.apply(this,arguments)}finally{m=X}}}})(Ph)),Ph}var _0;function B_(){return _0||(_0=1,Rh.exports=z_()),Rh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0;function H_(){if(y0)return Qn;y0=1;var a=Sd(),e=B_();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function o(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function m(n){return h.call(g,n)?!0:h.call(p,n)?!1:d.test(n)?g[n]=!0:(p[n]=!0,!1)}function y(n,r,l,f){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function v(n,r,l,f){if(r===null||typeof r>"u"||y(n,r,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function w(n,r,l,f,x,M,P){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=f,this.attributeNamespace=x,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=M,this.removeEmptyString=P}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];_[r]=new w(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(S,b);_[r]=new w(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(S,b);_[r]=new w(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(S,b);_[r]=new w(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function C(n,r,l,f){var x=_.hasOwnProperty(r)?_[r]:null;(x!==null?x.type!==0:f||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(v(r,l,x,f)&&(l=null),f||x===null?m(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):x.mustUseProperty?n[x.propertyName]=l===null?x.type===3?!1:"":l:(r=x.attributeName,f=x.attributeNamespace,l===null?n.removeAttribute(r):(x=x.type,l=x===3||x===4&&l===!0?"":""+l,f?n.setAttributeNS(f,r,l):n.setAttribute(r,l))))}var T=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),R=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),U=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),V=Symbol.for("react.offscreen"),G=Symbol.iterator;function $(n){return n===null||typeof n!="object"?null:(n=G&&n[G]||n["@@iterator"],typeof n=="function"?n:null)}var X=Object.assign,z;function Z(n){if(z===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);z=r&&r[1]||""}return`
`+z+n}var me=!1;function Ae(n,r){if(!n||me)return"";me=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(he){var f=he}Reflect.construct(n,[],r)}else{try{r.call()}catch(he){f=he}n.call(r.prototype)}else{try{throw Error()}catch(he){f=he}n()}}catch(he){if(he&&f&&typeof he.stack=="string"){for(var x=he.stack.split(`
`),M=f.stack.split(`
`),P=x.length-1,H=M.length-1;1<=P&&0<=H&&x[P]!==M[H];)H--;for(;1<=P&&0<=H;P--,H--)if(x[P]!==M[H]){if(P!==1||H!==1)do if(P--,H--,0>H||x[P]!==M[H]){var q=`
`+x[P].replace(" at new "," at ");return n.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",n.displayName)),q}while(1<=P&&0<=H);break}}}finally{me=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?Z(n):""}function Ee(n){switch(n.tag){case 5:return Z(n.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 2:case 15:return n=Ae(n.type,!1),n;case 11:return n=Ae(n.type.render,!1),n;case 1:return n=Ae(n.type,!0),n;default:return""}}function Q(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case R:return"Portal";case I:return"Profiler";case E:return"StrictMode";case K:return"Suspense";case ie:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case U:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case B:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case W:return r=n.displayName||null,r!==null?r:Q(n.type)||"Memo";case ee:r=n._payload,n=n._init;try{return Q(n(r))}catch{}}return null}function ve(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Q(r);case 8:return r===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function pe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Oe(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function et(n){var r=Oe(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),f=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var x=l.get,M=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return x.call(this)},set:function(P){f=""+P,M.call(this,P)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(P){f=""+P},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function rt(n){n._valueTracker||(n._valueTracker=et(n))}function Dt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),f="";return n&&(f=Oe(n)?n.checked?"true":"false":n.value),n=f,n!==l?(r.setValue(n),!0):!1}function gt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function At(n,r){var l=r.checked;return X({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function kt(n,r){var l=r.defaultValue==null?"":r.defaultValue,f=r.checked!=null?r.checked:r.defaultChecked;l=pe(r.value!=null?r.value:l),n._wrapperState={initialChecked:f,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function vt(n,r){r=r.checked,r!=null&&C(n,"checked",r,!1)}function _t(n,r){vt(n,r);var l=pe(r.value),f=r.type;if(l!=null)f==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(f==="submit"||f==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?fn(n,r.type,l):r.hasOwnProperty("defaultValue")&&fn(n,r.type,pe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Gt(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var f=r.type;if(!(f!=="submit"&&f!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function fn(n,r,l){(r!=="number"||gt(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var te=Array.isArray;function Ft(n,r,l,f){if(n=n.options,r){r={};for(var x=0;x<l.length;x++)r["$"+l[x]]=!0;for(l=0;l<n.length;l++)x=r.hasOwnProperty("$"+n[l].value),n[l].selected!==x&&(n[l].selected=x),x&&f&&(n[l].defaultSelected=!0)}else{for(l=""+pe(l),r=null,x=0;x<n.length;x++){if(n[x].value===l){n[x].selected=!0,f&&(n[x].defaultSelected=!0);return}r!==null||n[x].disabled||(r=n[x])}r!==null&&(r.selected=!0)}}function yt(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return X({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Lt(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(te(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:pe(l)}}function ze(n,r){var l=pe(r.value),f=pe(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),f!=null&&(n.defaultValue=""+f)}function Wt(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function O(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function A(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?O(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var se,fe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,f,x){MSApp.execUnsafeLocalFunction(function(){return n(r,l,f,x)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(se=se||document.createElement("div"),se.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=se.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function ye(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Ce={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Fe=["Webkit","ms","Moz","O"];Object.keys(Ce).forEach(function(n){Fe.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ce[r]=Ce[n]})});function de(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Ce.hasOwnProperty(n)&&Ce[n]?(""+r).trim():r+"px"}function _e(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var f=l.indexOf("--")===0,x=de(l,r[l],f);l==="float"&&(l="cssFloat"),f?n.setProperty(l,x):n[l]=x}}var Be=X({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ge(n,r){if(r){if(Be[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Re(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pe=null;function st(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ut=null,St=null,j=null;function Le(n){if(n=io(n)){if(typeof ut!="function")throw Error(t(280));var r=n.stateNode;r&&(r=ll(r),ut(n.stateNode,n.type,r))}}function xe(n){St?j?j.push(n):j=[n]:St=n}function He(){if(St){var n=St,r=j;if(j=St=null,Le(n),r)for(n=0;n<r.length;n++)Le(r[n])}}function Ne(n,r){return n(r)}function Se(){}var qe=!1;function ht(n,r,l){if(qe)return n(r,l);qe=!0;try{return Ne(n,r,l)}finally{qe=!1,(St!==null||j!==null)&&(Se(),He())}}function zt(n,r){var l=n.stateNode;if(l===null)return null;var f=ll(l);if(f===null)return null;l=f[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(n=n.type,f=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!f;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Rt=!1;if(u)try{var be={};Object.defineProperty(be,"passive",{get:function(){Rt=!0}}),window.addEventListener("test",be,be),window.removeEventListener("test",be,be)}catch{Rt=!1}function We(n,r,l,f,x,M,P,H,q){var he=Array.prototype.slice.call(arguments,3);try{r.apply(l,he)}catch(we){this.onError(we)}}var De=!1,dt=null,Xt=!1,Sr=null,Ji={onError:function(n){De=!0,dt=n}};function Da(n,r,l,f,x,M,P,H,q){De=!1,dt=null,We.apply(Ji,arguments)}function Xo(n,r,l,f,x,M,P,H,q){if(Da.apply(this,arguments),De){if(De){var he=dt;De=!1,dt=null}else throw Error(t(198));Xt||(Xt=!0,Sr=he)}}function Bi(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function as(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function ka(n){if(Bi(n)!==n)throw Error(t(188))}function Ds(n){var r=n.alternate;if(!r){if(r=Bi(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,f=r;;){var x=l.return;if(x===null)break;var M=x.alternate;if(M===null){if(f=x.return,f!==null){l=f;continue}break}if(x.child===M.child){for(M=x.child;M;){if(M===l)return ka(x),n;if(M===f)return ka(x),r;M=M.sibling}throw Error(t(188))}if(l.return!==f.return)l=x,f=M;else{for(var P=!1,H=x.child;H;){if(H===l){P=!0,l=x,f=M;break}if(H===f){P=!0,f=x,l=M;break}H=H.sibling}if(!P){for(H=M.child;H;){if(H===l){P=!0,l=M,f=x;break}if(H===f){P=!0,f=M,l=x;break}H=H.sibling}if(!P)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function Oa(n){return n=Ds(n),n!==null?za(n):null}function za(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=za(n);if(r!==null)return r;n=n.sibling}return null}var jo=e.unstable_scheduleCallback,qo=e.unstable_cancelCallback,$c=e.unstable_shouldYield,Kc=e.unstable_requestPaint,tn=e.unstable_now,Zc=e.unstable_getCurrentPriorityLevel,Ba=e.unstable_ImmediatePriority,N=e.unstable_UserBlockingPriority,re=e.unstable_NormalPriority,ue=e.unstable_LowPriority,le=e.unstable_IdlePriority,oe=null,ke=null;function $e(n){if(ke&&typeof ke.onCommitFiberRoot=="function")try{ke.onCommitFiberRoot(oe,n,void 0,(n.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:pt,Qe=Math.log,it=Math.LN2;function pt(n){return n>>>=0,n===0?32:31-(Qe(n)/it|0)|0}var mt=64,tt=4194304;function Pt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function jt(n,r){var l=n.pendingLanes;if(l===0)return 0;var f=0,x=n.suspendedLanes,M=n.pingedLanes,P=l&268435455;if(P!==0){var H=P&~x;H!==0?f=Pt(H):(M&=P,M!==0&&(f=Pt(M)))}else P=l&~x,P!==0?f=Pt(P):M!==0&&(f=Pt(M));if(f===0)return 0;if(r!==0&&r!==f&&(r&x)===0&&(x=f&-f,M=r&-r,x>=M||x===16&&(M&4194240)!==0))return r;if((f&4)!==0&&(f|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=f;0<r;)l=31-Ue(r),x=1<<l,f|=n[l],r&=~x;return f}function Jt(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bt(n,r){for(var l=n.suspendedLanes,f=n.pingedLanes,x=n.expirationTimes,M=n.pendingLanes;0<M;){var P=31-Ue(M),H=1<<P,q=x[P];q===-1?((H&l)===0||(H&f)!==0)&&(x[P]=Jt(H,r)):q<=r&&(n.expiredLanes|=H),M&=~H}}function dn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Xe(){var n=mt;return mt<<=1,(mt&4194240)===0&&(mt=64),n}function Rn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function wt(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Ue(r),n[r]=l}function Xn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var f=n.eventTimes;for(n=n.expirationTimes;0<l;){var x=31-Ue(l),M=1<<x;r[x]=0,f[x]=-1,n[x]=-1,l&=~M}}function jn(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var f=31-Ue(l),x=1<<f;x&r|n[f]&r&&(n[f]|=r),l&=~x}}var Et=0;function er(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ot,$t,wi,Ht,Ei,Hi=!1,os=[],Mr=null,wr=null,Er=null,Ha=new Map,Va=new Map,br=[],nv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zd(n,r){switch(n){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":Ha.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Va.delete(r.pointerId)}}function Ga(n,r,l,f,x,M){return n===null||n.nativeEvent!==M?(n={blockedOn:r,domEventName:l,eventSystemFlags:f,nativeEvent:M,targetContainers:[x]},r!==null&&(r=io(r),r!==null&&$t(r)),n):(n.eventSystemFlags|=f,r=n.targetContainers,x!==null&&r.indexOf(x)===-1&&r.push(x),n)}function iv(n,r,l,f,x){switch(r){case"focusin":return Mr=Ga(Mr,n,r,l,f,x),!0;case"dragenter":return wr=Ga(wr,n,r,l,f,x),!0;case"mouseover":return Er=Ga(Er,n,r,l,f,x),!0;case"pointerover":var M=x.pointerId;return Ha.set(M,Ga(Ha.get(M)||null,n,r,l,f,x)),!0;case"gotpointercapture":return M=x.pointerId,Va.set(M,Ga(Va.get(M)||null,n,r,l,f,x)),!0}return!1}function Qd(n){var r=ls(n.target);if(r!==null){var l=Bi(r);if(l!==null){if(r=l.tag,r===13){if(r=as(l),r!==null){n.blockedOn=r,Ei(n.priority,function(){wi(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Yo(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Jc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var f=new l.constructor(l.type,l);Pe=f,l.target.dispatchEvent(f),Pe=null}else return r=io(l),r!==null&&$t(r),n.blockedOn=l,!1;r.shift()}return!0}function Jd(n,r,l){Yo(n)&&l.delete(r)}function rv(){Hi=!1,Mr!==null&&Yo(Mr)&&(Mr=null),wr!==null&&Yo(wr)&&(wr=null),Er!==null&&Yo(Er)&&(Er=null),Ha.forEach(Jd),Va.forEach(Jd)}function Wa(n,r){n.blockedOn===r&&(n.blockedOn=null,Hi||(Hi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,rv)))}function Xa(n){function r(x){return Wa(x,n)}if(0<os.length){Wa(os[0],n);for(var l=1;l<os.length;l++){var f=os[l];f.blockedOn===n&&(f.blockedOn=null)}}for(Mr!==null&&Wa(Mr,n),wr!==null&&Wa(wr,n),Er!==null&&Wa(Er,n),Ha.forEach(r),Va.forEach(r),l=0;l<br.length;l++)f=br[l],f.blockedOn===n&&(f.blockedOn=null);for(;0<br.length&&(l=br[0],l.blockedOn===null);)Qd(l),l.blockedOn===null&&br.shift()}var ks=T.ReactCurrentBatchConfig,$o=!0;function sv(n,r,l,f){var x=Et,M=ks.transition;ks.transition=null;try{Et=1,Qc(n,r,l,f)}finally{Et=x,ks.transition=M}}function av(n,r,l,f){var x=Et,M=ks.transition;ks.transition=null;try{Et=4,Qc(n,r,l,f)}finally{Et=x,ks.transition=M}}function Qc(n,r,l,f){if($o){var x=Jc(n,r,l,f);if(x===null)gu(n,r,f,Ko,l),Zd(n,f);else if(iv(x,n,r,l,f))f.stopPropagation();else if(Zd(n,f),r&4&&-1<nv.indexOf(n)){for(;x!==null;){var M=io(x);if(M!==null&&Ot(M),M=Jc(n,r,l,f),M===null&&gu(n,r,f,Ko,l),M===x)break;x=M}x!==null&&f.stopPropagation()}else gu(n,r,f,null,l)}}var Ko=null;function Jc(n,r,l,f){if(Ko=null,n=st(f),n=ls(n),n!==null)if(r=Bi(n),r===null)n=null;else if(l=r.tag,l===13){if(n=as(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Ko=n,null}function ep(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zc()){case Ba:return 1;case N:return 4;case re:case ue:return 16;case le:return 536870912;default:return 16}default:return 16}}var Tr=null,eu=null,Zo=null;function tp(){if(Zo)return Zo;var n,r=eu,l=r.length,f,x="value"in Tr?Tr.value:Tr.textContent,M=x.length;for(n=0;n<l&&r[n]===x[n];n++);var P=l-n;for(f=1;f<=P&&r[l-f]===x[M-f];f++);return Zo=x.slice(n,1<f?1-f:void 0)}function Qo(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Jo(){return!0}function np(){return!1}function ii(n){function r(l,f,x,M,P){this._reactName=l,this._targetInst=x,this.type=f,this.nativeEvent=M,this.target=P,this.currentTarget=null;for(var H in n)n.hasOwnProperty(H)&&(l=n[H],this[H]=l?l(M):M[H]);return this.isDefaultPrevented=(M.defaultPrevented!=null?M.defaultPrevented:M.returnValue===!1)?Jo:np,this.isPropagationStopped=np,this}return X(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),r}var Os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tu=ii(Os),ja=X({},Os,{view:0,detail:0}),ov=ii(ja),nu,iu,qa,el=X({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==qa&&(qa&&n.type==="mousemove"?(nu=n.screenX-qa.screenX,iu=n.screenY-qa.screenY):iu=nu=0,qa=n),nu)},movementY:function(n){return"movementY"in n?n.movementY:iu}}),ip=ii(el),lv=X({},el,{dataTransfer:0}),cv=ii(lv),uv=X({},ja,{relatedTarget:0}),ru=ii(uv),hv=X({},Os,{animationName:0,elapsedTime:0,pseudoElement:0}),fv=ii(hv),dv=X({},Os,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),pv=ii(dv),mv=X({},Os,{data:0}),rp=ii(mv),gv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _v(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=vv[n])?!!r[n]:!1}function su(){return _v}var yv=X({},ja,{key:function(n){if(n.key){var r=gv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Qo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?xv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(n){return n.type==="keypress"?Qo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Qo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Sv=ii(yv),Mv=X({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sp=ii(Mv),wv=X({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),Ev=ii(wv),bv=X({},Os,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tv=ii(bv),Cv=X({},el,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Av=ii(Cv),Rv=[9,13,27,32],au=u&&"CompositionEvent"in window,Ya=null;u&&"documentMode"in document&&(Ya=document.documentMode);var Pv=u&&"TextEvent"in window&&!Ya,ap=u&&(!au||Ya&&8<Ya&&11>=Ya),op=" ",lp=!1;function cp(n,r){switch(n){case"keyup":return Rv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function up(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var zs=!1;function Lv(n,r){switch(n){case"compositionend":return up(r);case"keypress":return r.which!==32?null:(lp=!0,op);case"textInput":return n=r.data,n===op&&lp?null:n;default:return null}}function Iv(n,r){if(zs)return n==="compositionend"||!au&&cp(n,r)?(n=tp(),Zo=eu=Tr=null,zs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return ap&&r.locale!=="ko"?null:r.data;default:return null}}var Nv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hp(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Nv[n.type]:r==="textarea"}function fp(n,r,l,f){xe(f),r=sl(r,"onChange"),0<r.length&&(l=new tu("onChange","change",null,l,f),n.push({event:l,listeners:r}))}var $a=null,Ka=null;function Uv(n){Pp(n,0)}function tl(n){var r=Ws(n);if(Dt(r))return n}function Fv(n,r){if(n==="change")return r}var dp=!1;if(u){var ou;if(u){var lu="oninput"in document;if(!lu){var pp=document.createElement("div");pp.setAttribute("oninput","return;"),lu=typeof pp.oninput=="function"}ou=lu}else ou=!1;dp=ou&&(!document.documentMode||9<document.documentMode)}function mp(){$a&&($a.detachEvent("onpropertychange",gp),Ka=$a=null)}function gp(n){if(n.propertyName==="value"&&tl(Ka)){var r=[];fp(r,Ka,n,st(n)),ht(Uv,r)}}function Dv(n,r,l){n==="focusin"?(mp(),$a=r,Ka=l,$a.attachEvent("onpropertychange",gp)):n==="focusout"&&mp()}function kv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return tl(Ka)}function Ov(n,r){if(n==="click")return tl(r)}function zv(n,r){if(n==="input"||n==="change")return tl(r)}function Bv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var bi=typeof Object.is=="function"?Object.is:Bv;function Za(n,r){if(bi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),f=Object.keys(r);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var x=l[f];if(!h.call(r,x)||!bi(n[x],r[x]))return!1}return!0}function xp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function vp(n,r){var l=xp(n);n=0;for(var f;l;){if(l.nodeType===3){if(f=n+l.textContent.length,n<=r&&f>=r)return{node:l,offset:r-n};n=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=xp(l)}}function _p(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?_p(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function yp(){for(var n=window,r=gt();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=gt(n.document)}return r}function cu(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Hv(n){var r=yp(),l=n.focusedElem,f=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&_p(l.ownerDocument.documentElement,l)){if(f!==null&&cu(l)){if(r=f.start,n=f.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var x=l.textContent.length,M=Math.min(f.start,x);f=f.end===void 0?M:Math.min(f.end,x),!n.extend&&M>f&&(x=f,f=M,M=x),x=vp(l,M);var P=vp(l,f);x&&P&&(n.rangeCount!==1||n.anchorNode!==x.node||n.anchorOffset!==x.offset||n.focusNode!==P.node||n.focusOffset!==P.offset)&&(r=r.createRange(),r.setStart(x.node,x.offset),n.removeAllRanges(),M>f?(n.addRange(r),n.extend(P.node,P.offset)):(r.setEnd(P.node,P.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Vv=u&&"documentMode"in document&&11>=document.documentMode,Bs=null,uu=null,Qa=null,hu=!1;function Sp(n,r,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;hu||Bs==null||Bs!==gt(f)||(f=Bs,"selectionStart"in f&&cu(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Qa&&Za(Qa,f)||(Qa=f,f=sl(uu,"onSelect"),0<f.length&&(r=new tu("onSelect","select",null,r,l),n.push({event:r,listeners:f}),r.target=Bs)))}function nl(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Hs={animationend:nl("Animation","AnimationEnd"),animationiteration:nl("Animation","AnimationIteration"),animationstart:nl("Animation","AnimationStart"),transitionend:nl("Transition","TransitionEnd")},fu={},Mp={};u&&(Mp=document.createElement("div").style,"AnimationEvent"in window||(delete Hs.animationend.animation,delete Hs.animationiteration.animation,delete Hs.animationstart.animation),"TransitionEvent"in window||delete Hs.transitionend.transition);function il(n){if(fu[n])return fu[n];if(!Hs[n])return n;var r=Hs[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in Mp)return fu[n]=r[l];return n}var wp=il("animationend"),Ep=il("animationiteration"),bp=il("animationstart"),Tp=il("transitionend"),Cp=new Map,Ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(n,r){Cp.set(n,r),o(r,[n])}for(var du=0;du<Ap.length;du++){var pu=Ap[du],Gv=pu.toLowerCase(),Wv=pu[0].toUpperCase()+pu.slice(1);Cr(Gv,"on"+Wv)}Cr(wp,"onAnimationEnd"),Cr(Ep,"onAnimationIteration"),Cr(bp,"onAnimationStart"),Cr("dblclick","onDoubleClick"),Cr("focusin","onFocus"),Cr("focusout","onBlur"),Cr(Tp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ja="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ja));function Rp(n,r,l){var f=n.type||"unknown-event";n.currentTarget=l,Xo(f,r,void 0,n),n.currentTarget=null}function Pp(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var f=n[l],x=f.event;f=f.listeners;e:{var M=void 0;if(r)for(var P=f.length-1;0<=P;P--){var H=f[P],q=H.instance,he=H.currentTarget;if(H=H.listener,q!==M&&x.isPropagationStopped())break e;Rp(x,H,he),M=q}else for(P=0;P<f.length;P++){if(H=f[P],q=H.instance,he=H.currentTarget,H=H.listener,q!==M&&x.isPropagationStopped())break e;Rp(x,H,he),M=q}}}if(Xt)throw n=Sr,Xt=!1,Sr=null,n}function Kt(n,r){var l=r[Mu];l===void 0&&(l=r[Mu]=new Set);var f=n+"__bubble";l.has(f)||(Lp(r,n,2,!1),l.add(f))}function mu(n,r,l){var f=0;r&&(f|=4),Lp(l,n,f,r)}var rl="_reactListening"+Math.random().toString(36).slice(2);function eo(n){if(!n[rl]){n[rl]=!0,i.forEach(function(l){l!=="selectionchange"&&(Xv.has(l)||mu(l,!1,n),mu(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[rl]||(r[rl]=!0,mu("selectionchange",!1,r))}}function Lp(n,r,l,f){switch(ep(r)){case 1:var x=sv;break;case 4:x=av;break;default:x=Qc}l=x.bind(null,r,l,n),x=void 0,!Rt||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(x=!0),f?x!==void 0?n.addEventListener(r,l,{capture:!0,passive:x}):n.addEventListener(r,l,!0):x!==void 0?n.addEventListener(r,l,{passive:x}):n.addEventListener(r,l,!1)}function gu(n,r,l,f,x){var M=f;if((r&1)===0&&(r&2)===0&&f!==null)e:for(;;){if(f===null)return;var P=f.tag;if(P===3||P===4){var H=f.stateNode.containerInfo;if(H===x||H.nodeType===8&&H.parentNode===x)break;if(P===4)for(P=f.return;P!==null;){var q=P.tag;if((q===3||q===4)&&(q=P.stateNode.containerInfo,q===x||q.nodeType===8&&q.parentNode===x))return;P=P.return}for(;H!==null;){if(P=ls(H),P===null)return;if(q=P.tag,q===5||q===6){f=M=P;continue e}H=H.parentNode}}f=f.return}ht(function(){var he=M,we=st(l),Te=[];e:{var Me=Cp.get(n);if(Me!==void 0){var je=tu,Ze=n;switch(n){case"keypress":if(Qo(l)===0)break e;case"keydown":case"keyup":je=Sv;break;case"focusin":Ze="focus",je=ru;break;case"focusout":Ze="blur",je=ru;break;case"beforeblur":case"afterblur":je=ru;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":je=ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":je=cv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":je=Ev;break;case wp:case Ep:case bp:je=fv;break;case Tp:je=Tv;break;case"scroll":je=ov;break;case"wheel":je=Av;break;case"copy":case"cut":case"paste":je=pv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":je=sp}var Je=(r&4)!==0,on=!Je&&n==="scroll",ae=Je?Me!==null?Me+"Capture":null:Me;Je=[];for(var ne=he,ce;ne!==null;){ce=ne;var Ie=ce.stateNode;if(ce.tag===5&&Ie!==null&&(ce=Ie,ae!==null&&(Ie=zt(ne,ae),Ie!=null&&Je.push(to(ne,Ie,ce)))),on)break;ne=ne.return}0<Je.length&&(Me=new je(Me,Ze,null,l,we),Te.push({event:Me,listeners:Je}))}}if((r&7)===0){e:{if(Me=n==="mouseover"||n==="pointerover",je=n==="mouseout"||n==="pointerout",Me&&l!==Pe&&(Ze=l.relatedTarget||l.fromElement)&&(ls(Ze)||Ze[tr]))break e;if((je||Me)&&(Me=we.window===we?we:(Me=we.ownerDocument)?Me.defaultView||Me.parentWindow:window,je?(Ze=l.relatedTarget||l.toElement,je=he,Ze=Ze?ls(Ze):null,Ze!==null&&(on=Bi(Ze),Ze!==on||Ze.tag!==5&&Ze.tag!==6)&&(Ze=null)):(je=null,Ze=he),je!==Ze)){if(Je=ip,Ie="onMouseLeave",ae="onMouseEnter",ne="mouse",(n==="pointerout"||n==="pointerover")&&(Je=sp,Ie="onPointerLeave",ae="onPointerEnter",ne="pointer"),on=je==null?Me:Ws(je),ce=Ze==null?Me:Ws(Ze),Me=new Je(Ie,ne+"leave",je,l,we),Me.target=on,Me.relatedTarget=ce,Ie=null,ls(we)===he&&(Je=new Je(ae,ne+"enter",Ze,l,we),Je.target=ce,Je.relatedTarget=on,Ie=Je),on=Ie,je&&Ze)t:{for(Je=je,ae=Ze,ne=0,ce=Je;ce;ce=Vs(ce))ne++;for(ce=0,Ie=ae;Ie;Ie=Vs(Ie))ce++;for(;0<ne-ce;)Je=Vs(Je),ne--;for(;0<ce-ne;)ae=Vs(ae),ce--;for(;ne--;){if(Je===ae||ae!==null&&Je===ae.alternate)break t;Je=Vs(Je),ae=Vs(ae)}Je=null}else Je=null;je!==null&&Ip(Te,Me,je,Je,!1),Ze!==null&&on!==null&&Ip(Te,on,Ze,Je,!0)}}e:{if(Me=he?Ws(he):window,je=Me.nodeName&&Me.nodeName.toLowerCase(),je==="select"||je==="input"&&Me.type==="file")var nt=Fv;else if(hp(Me))if(dp)nt=zv;else{nt=kv;var at=Dv}else(je=Me.nodeName)&&je.toLowerCase()==="input"&&(Me.type==="checkbox"||Me.type==="radio")&&(nt=Ov);if(nt&&(nt=nt(n,he))){fp(Te,nt,l,we);break e}at&&at(n,Me,he),n==="focusout"&&(at=Me._wrapperState)&&at.controlled&&Me.type==="number"&&fn(Me,"number",Me.value)}switch(at=he?Ws(he):window,n){case"focusin":(hp(at)||at.contentEditable==="true")&&(Bs=at,uu=he,Qa=null);break;case"focusout":Qa=uu=Bs=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,Sp(Te,l,we);break;case"selectionchange":if(Vv)break;case"keydown":case"keyup":Sp(Te,l,we)}var ot;if(au)e:{switch(n){case"compositionstart":var ft="onCompositionStart";break e;case"compositionend":ft="onCompositionEnd";break e;case"compositionupdate":ft="onCompositionUpdate";break e}ft=void 0}else zs?cp(n,l)&&(ft="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(ft="onCompositionStart");ft&&(ap&&l.locale!=="ko"&&(zs||ft!=="onCompositionStart"?ft==="onCompositionEnd"&&zs&&(ot=tp()):(Tr=we,eu="value"in Tr?Tr.value:Tr.textContent,zs=!0)),at=sl(he,ft),0<at.length&&(ft=new rp(ft,n,null,l,we),Te.push({event:ft,listeners:at}),ot?ft.data=ot:(ot=up(l),ot!==null&&(ft.data=ot)))),(ot=Pv?Lv(n,l):Iv(n,l))&&(he=sl(he,"onBeforeInput"),0<he.length&&(we=new rp("onBeforeInput","beforeinput",null,l,we),Te.push({event:we,listeners:he}),we.data=ot))}Pp(Te,r)})}function to(n,r,l){return{instance:n,listener:r,currentTarget:l}}function sl(n,r){for(var l=r+"Capture",f=[];n!==null;){var x=n,M=x.stateNode;x.tag===5&&M!==null&&(x=M,M=zt(n,l),M!=null&&f.unshift(to(n,M,x)),M=zt(n,r),M!=null&&f.push(to(n,M,x))),n=n.return}return f}function Vs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ip(n,r,l,f,x){for(var M=r._reactName,P=[];l!==null&&l!==f;){var H=l,q=H.alternate,he=H.stateNode;if(q!==null&&q===f)break;H.tag===5&&he!==null&&(H=he,x?(q=zt(l,M),q!=null&&P.unshift(to(l,q,H))):x||(q=zt(l,M),q!=null&&P.push(to(l,q,H)))),l=l.return}P.length!==0&&n.push({event:r,listeners:P})}var jv=/\r\n?/g,qv=/\u0000|\uFFFD/g;function Np(n){return(typeof n=="string"?n:""+n).replace(jv,`
`).replace(qv,"")}function al(n,r,l){if(r=Np(r),Np(n)!==r&&l)throw Error(t(425))}function ol(){}var xu=null,vu=null;function _u(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var yu=typeof setTimeout=="function"?setTimeout:void 0,Yv=typeof clearTimeout=="function"?clearTimeout:void 0,Up=typeof Promise=="function"?Promise:void 0,$v=typeof queueMicrotask=="function"?queueMicrotask:typeof Up<"u"?function(n){return Up.resolve(null).then(n).catch(Kv)}:yu;function Kv(n){setTimeout(function(){throw n})}function Su(n,r){var l=r,f=0;do{var x=l.nextSibling;if(n.removeChild(l),x&&x.nodeType===8)if(l=x.data,l==="/$"){if(f===0){n.removeChild(x),Xa(r);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=x}while(l);Xa(r)}function Ar(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Fp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Gs=Math.random().toString(36).slice(2),Vi="__reactFiber$"+Gs,no="__reactProps$"+Gs,tr="__reactContainer$"+Gs,Mu="__reactEvents$"+Gs,Zv="__reactListeners$"+Gs,Qv="__reactHandles$"+Gs;function ls(n){var r=n[Vi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[tr]||l[Vi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=Fp(n);n!==null;){if(l=n[Vi])return l;n=Fp(n)}return r}n=l,l=n.parentNode}return null}function io(n){return n=n[Vi]||n[tr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ws(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ll(n){return n[no]||null}var wu=[],Xs=-1;function Rr(n){return{current:n}}function Zt(n){0>Xs||(n.current=wu[Xs],wu[Xs]=null,Xs--)}function qt(n,r){Xs++,wu[Xs]=n.current,n.current=r}var Pr={},Nn=Rr(Pr),qn=Rr(!1),cs=Pr;function js(n,r){var l=n.type.contextTypes;if(!l)return Pr;var f=n.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===r)return f.__reactInternalMemoizedMaskedChildContext;var x={},M;for(M in l)x[M]=r[M];return f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=x),x}function Yn(n){return n=n.childContextTypes,n!=null}function cl(){Zt(qn),Zt(Nn)}function Dp(n,r,l){if(Nn.current!==Pr)throw Error(t(168));qt(Nn,r),qt(qn,l)}function kp(n,r,l){var f=n.stateNode;if(r=r.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var x in f)if(!(x in r))throw Error(t(108,ve(n)||"Unknown",x));return X({},l,f)}function ul(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Pr,cs=Nn.current,qt(Nn,n),qt(qn,qn.current),!0}function Op(n,r,l){var f=n.stateNode;if(!f)throw Error(t(169));l?(n=kp(n,r,cs),f.__reactInternalMemoizedMergedChildContext=n,Zt(qn),Zt(Nn),qt(Nn,n)):Zt(qn),qt(qn,l)}var nr=null,hl=!1,Eu=!1;function zp(n){nr===null?nr=[n]:nr.push(n)}function Jv(n){hl=!0,zp(n)}function Lr(){if(!Eu&&nr!==null){Eu=!0;var n=0,r=Et;try{var l=nr;for(Et=1;n<l.length;n++){var f=l[n];do f=f(!0);while(f!==null)}nr=null,hl=!1}catch(x){throw nr!==null&&(nr=nr.slice(n+1)),jo(Ba,Lr),x}finally{Et=r,Eu=!1}}return null}var qs=[],Ys=0,fl=null,dl=0,pi=[],mi=0,us=null,ir=1,rr="";function hs(n,r){qs[Ys++]=dl,qs[Ys++]=fl,fl=n,dl=r}function Bp(n,r,l){pi[mi++]=ir,pi[mi++]=rr,pi[mi++]=us,us=n;var f=ir;n=rr;var x=32-Ue(f)-1;f&=~(1<<x),l+=1;var M=32-Ue(r)+x;if(30<M){var P=x-x%5;M=(f&(1<<P)-1).toString(32),f>>=P,x-=P,ir=1<<32-Ue(r)+x|l<<x|f,rr=M+n}else ir=1<<M|l<<x|f,rr=n}function bu(n){n.return!==null&&(hs(n,1),Bp(n,1,0))}function Tu(n){for(;n===fl;)fl=qs[--Ys],qs[Ys]=null,dl=qs[--Ys],qs[Ys]=null;for(;n===us;)us=pi[--mi],pi[mi]=null,rr=pi[--mi],pi[mi]=null,ir=pi[--mi],pi[mi]=null}var ri=null,si=null,en=!1,Ti=null;function Hp(n,r){var l=_i(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Vp(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,ri=n,si=Ar(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,ri=n,si=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=us!==null?{id:ir,overflow:rr}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=_i(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,ri=n,si=null,!0):!1;default:return!1}}function Cu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Au(n){if(en){var r=si;if(r){var l=r;if(!Vp(n,r)){if(Cu(n))throw Error(t(418));r=Ar(l.nextSibling);var f=ri;r&&Vp(n,r)?Hp(f,l):(n.flags=n.flags&-4097|2,en=!1,ri=n)}}else{if(Cu(n))throw Error(t(418));n.flags=n.flags&-4097|2,en=!1,ri=n}}}function Gp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ri=n}function pl(n){if(n!==ri)return!1;if(!en)return Gp(n),en=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!_u(n.type,n.memoizedProps)),r&&(r=si)){if(Cu(n))throw Wp(),Error(t(418));for(;r;)Hp(n,r),r=Ar(r.nextSibling)}if(Gp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){si=Ar(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}si=null}}else si=ri?Ar(n.stateNode.nextSibling):null;return!0}function Wp(){for(var n=si;n;)n=Ar(n.nextSibling)}function $s(){si=ri=null,en=!1}function Ru(n){Ti===null?Ti=[n]:Ti.push(n)}var e_=T.ReactCurrentBatchConfig;function ro(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,n));var x=f,M=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===M?r.ref:(r=function(P){var H=x.refs;P===null?delete H[M]:H[M]=P},r._stringRef=M,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function ml(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Xp(n){var r=n._init;return r(n._payload)}function jp(n){function r(ae,ne){if(n){var ce=ae.deletions;ce===null?(ae.deletions=[ne],ae.flags|=16):ce.push(ne)}}function l(ae,ne){if(!n)return null;for(;ne!==null;)r(ae,ne),ne=ne.sibling;return null}function f(ae,ne){for(ae=new Map;ne!==null;)ne.key!==null?ae.set(ne.key,ne):ae.set(ne.index,ne),ne=ne.sibling;return ae}function x(ae,ne){return ae=zr(ae,ne),ae.index=0,ae.sibling=null,ae}function M(ae,ne,ce){return ae.index=ce,n?(ce=ae.alternate,ce!==null?(ce=ce.index,ce<ne?(ae.flags|=2,ne):ce):(ae.flags|=2,ne)):(ae.flags|=1048576,ne)}function P(ae){return n&&ae.alternate===null&&(ae.flags|=2),ae}function H(ae,ne,ce,Ie){return ne===null||ne.tag!==6?(ne=yh(ce,ae.mode,Ie),ne.return=ae,ne):(ne=x(ne,ce),ne.return=ae,ne)}function q(ae,ne,ce,Ie){var nt=ce.type;return nt===F?we(ae,ne,ce.props.children,Ie,ce.key):ne!==null&&(ne.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===ee&&Xp(nt)===ne.type)?(Ie=x(ne,ce.props),Ie.ref=ro(ae,ne,ce),Ie.return=ae,Ie):(Ie=zl(ce.type,ce.key,ce.props,null,ae.mode,Ie),Ie.ref=ro(ae,ne,ce),Ie.return=ae,Ie)}function he(ae,ne,ce,Ie){return ne===null||ne.tag!==4||ne.stateNode.containerInfo!==ce.containerInfo||ne.stateNode.implementation!==ce.implementation?(ne=Sh(ce,ae.mode,Ie),ne.return=ae,ne):(ne=x(ne,ce.children||[]),ne.return=ae,ne)}function we(ae,ne,ce,Ie,nt){return ne===null||ne.tag!==7?(ne=_s(ce,ae.mode,Ie,nt),ne.return=ae,ne):(ne=x(ne,ce),ne.return=ae,ne)}function Te(ae,ne,ce){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return ne=yh(""+ne,ae.mode,ce),ne.return=ae,ne;if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case L:return ce=zl(ne.type,ne.key,ne.props,null,ae.mode,ce),ce.ref=ro(ae,null,ne),ce.return=ae,ce;case R:return ne=Sh(ne,ae.mode,ce),ne.return=ae,ne;case ee:var Ie=ne._init;return Te(ae,Ie(ne._payload),ce)}if(te(ne)||$(ne))return ne=_s(ne,ae.mode,ce,null),ne.return=ae,ne;ml(ae,ne)}return null}function Me(ae,ne,ce,Ie){var nt=ne!==null?ne.key:null;if(typeof ce=="string"&&ce!==""||typeof ce=="number")return nt!==null?null:H(ae,ne,""+ce,Ie);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case L:return ce.key===nt?q(ae,ne,ce,Ie):null;case R:return ce.key===nt?he(ae,ne,ce,Ie):null;case ee:return nt=ce._init,Me(ae,ne,nt(ce._payload),Ie)}if(te(ce)||$(ce))return nt!==null?null:we(ae,ne,ce,Ie,null);ml(ae,ce)}return null}function je(ae,ne,ce,Ie,nt){if(typeof Ie=="string"&&Ie!==""||typeof Ie=="number")return ae=ae.get(ce)||null,H(ne,ae,""+Ie,nt);if(typeof Ie=="object"&&Ie!==null){switch(Ie.$$typeof){case L:return ae=ae.get(Ie.key===null?ce:Ie.key)||null,q(ne,ae,Ie,nt);case R:return ae=ae.get(Ie.key===null?ce:Ie.key)||null,he(ne,ae,Ie,nt);case ee:var at=Ie._init;return je(ae,ne,ce,at(Ie._payload),nt)}if(te(Ie)||$(Ie))return ae=ae.get(ce)||null,we(ne,ae,Ie,nt,null);ml(ne,Ie)}return null}function Ze(ae,ne,ce,Ie){for(var nt=null,at=null,ot=ne,ft=ne=0,Tn=null;ot!==null&&ft<ce.length;ft++){ot.index>ft?(Tn=ot,ot=null):Tn=ot.sibling;var Ut=Me(ae,ot,ce[ft],Ie);if(Ut===null){ot===null&&(ot=Tn);break}n&&ot&&Ut.alternate===null&&r(ae,ot),ne=M(Ut,ne,ft),at===null?nt=Ut:at.sibling=Ut,at=Ut,ot=Tn}if(ft===ce.length)return l(ae,ot),en&&hs(ae,ft),nt;if(ot===null){for(;ft<ce.length;ft++)ot=Te(ae,ce[ft],Ie),ot!==null&&(ne=M(ot,ne,ft),at===null?nt=ot:at.sibling=ot,at=ot);return en&&hs(ae,ft),nt}for(ot=f(ae,ot);ft<ce.length;ft++)Tn=je(ot,ae,ft,ce[ft],Ie),Tn!==null&&(n&&Tn.alternate!==null&&ot.delete(Tn.key===null?ft:Tn.key),ne=M(Tn,ne,ft),at===null?nt=Tn:at.sibling=Tn,at=Tn);return n&&ot.forEach(function(Br){return r(ae,Br)}),en&&hs(ae,ft),nt}function Je(ae,ne,ce,Ie){var nt=$(ce);if(typeof nt!="function")throw Error(t(150));if(ce=nt.call(ce),ce==null)throw Error(t(151));for(var at=nt=null,ot=ne,ft=ne=0,Tn=null,Ut=ce.next();ot!==null&&!Ut.done;ft++,Ut=ce.next()){ot.index>ft?(Tn=ot,ot=null):Tn=ot.sibling;var Br=Me(ae,ot,Ut.value,Ie);if(Br===null){ot===null&&(ot=Tn);break}n&&ot&&Br.alternate===null&&r(ae,ot),ne=M(Br,ne,ft),at===null?nt=Br:at.sibling=Br,at=Br,ot=Tn}if(Ut.done)return l(ae,ot),en&&hs(ae,ft),nt;if(ot===null){for(;!Ut.done;ft++,Ut=ce.next())Ut=Te(ae,Ut.value,Ie),Ut!==null&&(ne=M(Ut,ne,ft),at===null?nt=Ut:at.sibling=Ut,at=Ut);return en&&hs(ae,ft),nt}for(ot=f(ae,ot);!Ut.done;ft++,Ut=ce.next())Ut=je(ot,ae,ft,Ut.value,Ie),Ut!==null&&(n&&Ut.alternate!==null&&ot.delete(Ut.key===null?ft:Ut.key),ne=M(Ut,ne,ft),at===null?nt=Ut:at.sibling=Ut,at=Ut);return n&&ot.forEach(function(N_){return r(ae,N_)}),en&&hs(ae,ft),nt}function on(ae,ne,ce,Ie){if(typeof ce=="object"&&ce!==null&&ce.type===F&&ce.key===null&&(ce=ce.props.children),typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case L:e:{for(var nt=ce.key,at=ne;at!==null;){if(at.key===nt){if(nt=ce.type,nt===F){if(at.tag===7){l(ae,at.sibling),ne=x(at,ce.props.children),ne.return=ae,ae=ne;break e}}else if(at.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===ee&&Xp(nt)===at.type){l(ae,at.sibling),ne=x(at,ce.props),ne.ref=ro(ae,at,ce),ne.return=ae,ae=ne;break e}l(ae,at);break}else r(ae,at);at=at.sibling}ce.type===F?(ne=_s(ce.props.children,ae.mode,Ie,ce.key),ne.return=ae,ae=ne):(Ie=zl(ce.type,ce.key,ce.props,null,ae.mode,Ie),Ie.ref=ro(ae,ne,ce),Ie.return=ae,ae=Ie)}return P(ae);case R:e:{for(at=ce.key;ne!==null;){if(ne.key===at)if(ne.tag===4&&ne.stateNode.containerInfo===ce.containerInfo&&ne.stateNode.implementation===ce.implementation){l(ae,ne.sibling),ne=x(ne,ce.children||[]),ne.return=ae,ae=ne;break e}else{l(ae,ne);break}else r(ae,ne);ne=ne.sibling}ne=Sh(ce,ae.mode,Ie),ne.return=ae,ae=ne}return P(ae);case ee:return at=ce._init,on(ae,ne,at(ce._payload),Ie)}if(te(ce))return Ze(ae,ne,ce,Ie);if($(ce))return Je(ae,ne,ce,Ie);ml(ae,ce)}return typeof ce=="string"&&ce!==""||typeof ce=="number"?(ce=""+ce,ne!==null&&ne.tag===6?(l(ae,ne.sibling),ne=x(ne,ce),ne.return=ae,ae=ne):(l(ae,ne),ne=yh(ce,ae.mode,Ie),ne.return=ae,ae=ne),P(ae)):l(ae,ne)}return on}var Ks=jp(!0),qp=jp(!1),gl=Rr(null),xl=null,Zs=null,Pu=null;function Lu(){Pu=Zs=xl=null}function Iu(n){var r=gl.current;Zt(gl),n._currentValue=r}function Nu(n,r,l){for(;n!==null;){var f=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,f!==null&&(f.childLanes|=r)):f!==null&&(f.childLanes&r)!==r&&(f.childLanes|=r),n===l)break;n=n.return}}function Qs(n,r){xl=n,Pu=Zs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&($n=!0),n.firstContext=null)}function gi(n){var r=n._currentValue;if(Pu!==n)if(n={context:n,memoizedValue:r,next:null},Zs===null){if(xl===null)throw Error(t(308));Zs=n,xl.dependencies={lanes:0,firstContext:n}}else Zs=Zs.next=n;return r}var fs=null;function Uu(n){fs===null?fs=[n]:fs.push(n)}function Yp(n,r,l,f){var x=r.interleaved;return x===null?(l.next=l,Uu(r)):(l.next=x.next,x.next=l),r.interleaved=l,sr(n,f)}function sr(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Ir=!1;function Fu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $p(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ar(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Nr(n,r,l){var f=n.updateQueue;if(f===null)return null;if(f=f.shared,(It&2)!==0){var x=f.pending;return x===null?r.next=r:(r.next=x.next,x.next=r),f.pending=r,sr(n,l)}return x=f.interleaved,x===null?(r.next=r,Uu(f)):(r.next=x.next,x.next=r),f.interleaved=r,sr(n,l)}function vl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,jn(n,l)}}function Kp(n,r){var l=n.updateQueue,f=n.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var x=null,M=null;if(l=l.firstBaseUpdate,l!==null){do{var P={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};M===null?x=M=P:M=M.next=P,l=l.next}while(l!==null);M===null?x=M=r:M=M.next=r}else x=M=r;l={baseState:f.baseState,firstBaseUpdate:x,lastBaseUpdate:M,shared:f.shared,effects:f.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function _l(n,r,l,f){var x=n.updateQueue;Ir=!1;var M=x.firstBaseUpdate,P=x.lastBaseUpdate,H=x.shared.pending;if(H!==null){x.shared.pending=null;var q=H,he=q.next;q.next=null,P===null?M=he:P.next=he,P=q;var we=n.alternate;we!==null&&(we=we.updateQueue,H=we.lastBaseUpdate,H!==P&&(H===null?we.firstBaseUpdate=he:H.next=he,we.lastBaseUpdate=q))}if(M!==null){var Te=x.baseState;P=0,we=he=q=null,H=M;do{var Me=H.lane,je=H.eventTime;if((f&Me)===Me){we!==null&&(we=we.next={eventTime:je,lane:0,tag:H.tag,payload:H.payload,callback:H.callback,next:null});e:{var Ze=n,Je=H;switch(Me=r,je=l,Je.tag){case 1:if(Ze=Je.payload,typeof Ze=="function"){Te=Ze.call(je,Te,Me);break e}Te=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=Je.payload,Me=typeof Ze=="function"?Ze.call(je,Te,Me):Ze,Me==null)break e;Te=X({},Te,Me);break e;case 2:Ir=!0}}H.callback!==null&&H.lane!==0&&(n.flags|=64,Me=x.effects,Me===null?x.effects=[H]:Me.push(H))}else je={eventTime:je,lane:Me,tag:H.tag,payload:H.payload,callback:H.callback,next:null},we===null?(he=we=je,q=Te):we=we.next=je,P|=Me;if(H=H.next,H===null){if(H=x.shared.pending,H===null)break;Me=H,H=Me.next,Me.next=null,x.lastBaseUpdate=Me,x.shared.pending=null}}while(!0);if(we===null&&(q=Te),x.baseState=q,x.firstBaseUpdate=he,x.lastBaseUpdate=we,r=x.shared.interleaved,r!==null){x=r;do P|=x.lane,x=x.next;while(x!==r)}else M===null&&(x.shared.lanes=0);ms|=P,n.lanes=P,n.memoizedState=Te}}function Zp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var f=n[r],x=f.callback;if(x!==null){if(f.callback=null,f=l,typeof x!="function")throw Error(t(191,x));x.call(f)}}}var so={},Gi=Rr(so),ao=Rr(so),oo=Rr(so);function ds(n){if(n===so)throw Error(t(174));return n}function Du(n,r){switch(qt(oo,r),qt(ao,n),qt(Gi,so),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:A(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=A(r,n)}Zt(Gi),qt(Gi,r)}function Js(){Zt(Gi),Zt(ao),Zt(oo)}function Qp(n){ds(oo.current);var r=ds(Gi.current),l=A(r,n.type);r!==l&&(qt(ao,n),qt(Gi,l))}function ku(n){ao.current===n&&(Zt(Gi),Zt(ao))}var nn=Rr(0);function yl(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ou=[];function zu(){for(var n=0;n<Ou.length;n++)Ou[n]._workInProgressVersionPrimary=null;Ou.length=0}var Sl=T.ReactCurrentDispatcher,Bu=T.ReactCurrentBatchConfig,ps=0,rn=null,_n=null,En=null,Ml=!1,lo=!1,co=0,t_=0;function Un(){throw Error(t(321))}function Hu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!bi(n[l],r[l]))return!1;return!0}function Vu(n,r,l,f,x,M){if(ps=M,rn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Sl.current=n===null||n.memoizedState===null?s_:a_,n=l(f,x),lo){M=0;do{if(lo=!1,co=0,25<=M)throw Error(t(301));M+=1,En=_n=null,r.updateQueue=null,Sl.current=o_,n=l(f,x)}while(lo)}if(Sl.current=bl,r=_n!==null&&_n.next!==null,ps=0,En=_n=rn=null,Ml=!1,r)throw Error(t(300));return n}function Gu(){var n=co!==0;return co=0,n}function Wi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?rn.memoizedState=En=n:En=En.next=n,En}function xi(){if(_n===null){var n=rn.alternate;n=n!==null?n.memoizedState:null}else n=_n.next;var r=En===null?rn.memoizedState:En.next;if(r!==null)En=r,_n=n;else{if(n===null)throw Error(t(310));_n=n,n={memoizedState:_n.memoizedState,baseState:_n.baseState,baseQueue:_n.baseQueue,queue:_n.queue,next:null},En===null?rn.memoizedState=En=n:En=En.next=n}return En}function uo(n,r){return typeof r=="function"?r(n):r}function Wu(n){var r=xi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=_n,x=f.baseQueue,M=l.pending;if(M!==null){if(x!==null){var P=x.next;x.next=M.next,M.next=P}f.baseQueue=x=M,l.pending=null}if(x!==null){M=x.next,f=f.baseState;var H=P=null,q=null,he=M;do{var we=he.lane;if((ps&we)===we)q!==null&&(q=q.next={lane:0,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),f=he.hasEagerState?he.eagerState:n(f,he.action);else{var Te={lane:we,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null};q===null?(H=q=Te,P=f):q=q.next=Te,rn.lanes|=we,ms|=we}he=he.next}while(he!==null&&he!==M);q===null?P=f:q.next=H,bi(f,r.memoizedState)||($n=!0),r.memoizedState=f,r.baseState=P,r.baseQueue=q,l.lastRenderedState=f}if(n=l.interleaved,n!==null){x=n;do M=x.lane,rn.lanes|=M,ms|=M,x=x.next;while(x!==n)}else x===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Xu(n){var r=xi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=l.dispatch,x=l.pending,M=r.memoizedState;if(x!==null){l.pending=null;var P=x=x.next;do M=n(M,P.action),P=P.next;while(P!==x);bi(M,r.memoizedState)||($n=!0),r.memoizedState=M,r.baseQueue===null&&(r.baseState=M),l.lastRenderedState=M}return[M,f]}function Jp(){}function em(n,r){var l=rn,f=xi(),x=r(),M=!bi(f.memoizedState,x);if(M&&(f.memoizedState=x,$n=!0),f=f.queue,ju(im.bind(null,l,f,n),[n]),f.getSnapshot!==r||M||En!==null&&En.memoizedState.tag&1){if(l.flags|=2048,ho(9,nm.bind(null,l,f,x,r),void 0,null),bn===null)throw Error(t(349));(ps&30)!==0||tm(l,r,x)}return x}function tm(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=rn.updateQueue,r===null?(r={lastEffect:null,stores:null},rn.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function nm(n,r,l,f){r.value=l,r.getSnapshot=f,rm(r)&&sm(n)}function im(n,r,l){return l(function(){rm(r)&&sm(n)})}function rm(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!bi(n,l)}catch{return!0}}function sm(n){var r=sr(n,1);r!==null&&Pi(r,n,1,-1)}function am(n){var r=Wi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:uo,lastRenderedState:n},r.queue=n,n=n.dispatch=r_.bind(null,rn,n),[r.memoizedState,n]}function ho(n,r,l,f){return n={tag:n,create:r,destroy:l,deps:f,next:null},r=rn.updateQueue,r===null?(r={lastEffect:null,stores:null},rn.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(f=l.next,l.next=n,n.next=f,r.lastEffect=n)),n}function om(){return xi().memoizedState}function wl(n,r,l,f){var x=Wi();rn.flags|=n,x.memoizedState=ho(1|r,l,void 0,f===void 0?null:f)}function El(n,r,l,f){var x=xi();f=f===void 0?null:f;var M=void 0;if(_n!==null){var P=_n.memoizedState;if(M=P.destroy,f!==null&&Hu(f,P.deps)){x.memoizedState=ho(r,l,M,f);return}}rn.flags|=n,x.memoizedState=ho(1|r,l,M,f)}function lm(n,r){return wl(8390656,8,n,r)}function ju(n,r){return El(2048,8,n,r)}function cm(n,r){return El(4,2,n,r)}function um(n,r){return El(4,4,n,r)}function hm(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function fm(n,r,l){return l=l!=null?l.concat([n]):null,El(4,4,hm.bind(null,r,n),l)}function qu(){}function dm(n,r){var l=xi();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&Hu(r,f[1])?f[0]:(l.memoizedState=[n,r],n)}function pm(n,r){var l=xi();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&Hu(r,f[1])?f[0]:(n=n(),l.memoizedState=[n,r],n)}function mm(n,r,l){return(ps&21)===0?(n.baseState&&(n.baseState=!1,$n=!0),n.memoizedState=l):(bi(l,r)||(l=Xe(),rn.lanes|=l,ms|=l,n.baseState=!0),r)}function n_(n,r){var l=Et;Et=l!==0&&4>l?l:4,n(!0);var f=Bu.transition;Bu.transition={};try{n(!1),r()}finally{Et=l,Bu.transition=f}}function gm(){return xi().memoizedState}function i_(n,r,l){var f=kr(n);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},xm(n))vm(r,l);else if(l=Yp(n,r,l,f),l!==null){var x=Vn();Pi(l,n,f,x),_m(l,r,f)}}function r_(n,r,l){var f=kr(n),x={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(xm(n))vm(r,x);else{var M=n.alternate;if(n.lanes===0&&(M===null||M.lanes===0)&&(M=r.lastRenderedReducer,M!==null))try{var P=r.lastRenderedState,H=M(P,l);if(x.hasEagerState=!0,x.eagerState=H,bi(H,P)){var q=r.interleaved;q===null?(x.next=x,Uu(r)):(x.next=q.next,q.next=x),r.interleaved=x;return}}catch{}finally{}l=Yp(n,r,x,f),l!==null&&(x=Vn(),Pi(l,n,f,x),_m(l,r,f))}}function xm(n){var r=n.alternate;return n===rn||r!==null&&r===rn}function vm(n,r){lo=Ml=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function _m(n,r,l){if((l&4194240)!==0){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,jn(n,l)}}var bl={readContext:gi,useCallback:Un,useContext:Un,useEffect:Un,useImperativeHandle:Un,useInsertionEffect:Un,useLayoutEffect:Un,useMemo:Un,useReducer:Un,useRef:Un,useState:Un,useDebugValue:Un,useDeferredValue:Un,useTransition:Un,useMutableSource:Un,useSyncExternalStore:Un,useId:Un,unstable_isNewReconciler:!1},s_={readContext:gi,useCallback:function(n,r){return Wi().memoizedState=[n,r===void 0?null:r],n},useContext:gi,useEffect:lm,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,wl(4194308,4,hm.bind(null,r,n),l)},useLayoutEffect:function(n,r){return wl(4194308,4,n,r)},useInsertionEffect:function(n,r){return wl(4,2,n,r)},useMemo:function(n,r){var l=Wi();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var f=Wi();return r=l!==void 0?l(r):r,f.memoizedState=f.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},f.queue=n,n=n.dispatch=i_.bind(null,rn,n),[f.memoizedState,n]},useRef:function(n){var r=Wi();return n={current:n},r.memoizedState=n},useState:am,useDebugValue:qu,useDeferredValue:function(n){return Wi().memoizedState=n},useTransition:function(){var n=am(!1),r=n[0];return n=n_.bind(null,n[1]),Wi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var f=rn,x=Wi();if(en){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),bn===null)throw Error(t(349));(ps&30)!==0||tm(f,r,l)}x.memoizedState=l;var M={value:l,getSnapshot:r};return x.queue=M,lm(im.bind(null,f,M,n),[n]),f.flags|=2048,ho(9,nm.bind(null,f,M,l,r),void 0,null),l},useId:function(){var n=Wi(),r=bn.identifierPrefix;if(en){var l=rr,f=ir;l=(f&~(1<<32-Ue(f)-1)).toString(32)+l,r=":"+r+"R"+l,l=co++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=t_++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},a_={readContext:gi,useCallback:dm,useContext:gi,useEffect:ju,useImperativeHandle:fm,useInsertionEffect:cm,useLayoutEffect:um,useMemo:pm,useReducer:Wu,useRef:om,useState:function(){return Wu(uo)},useDebugValue:qu,useDeferredValue:function(n){var r=xi();return mm(r,_n.memoizedState,n)},useTransition:function(){var n=Wu(uo)[0],r=xi().memoizedState;return[n,r]},useMutableSource:Jp,useSyncExternalStore:em,useId:gm,unstable_isNewReconciler:!1},o_={readContext:gi,useCallback:dm,useContext:gi,useEffect:ju,useImperativeHandle:fm,useInsertionEffect:cm,useLayoutEffect:um,useMemo:pm,useReducer:Xu,useRef:om,useState:function(){return Xu(uo)},useDebugValue:qu,useDeferredValue:function(n){var r=xi();return _n===null?r.memoizedState=n:mm(r,_n.memoizedState,n)},useTransition:function(){var n=Xu(uo)[0],r=xi().memoizedState;return[n,r]},useMutableSource:Jp,useSyncExternalStore:em,useId:gm,unstable_isNewReconciler:!1};function Ci(n,r){if(n&&n.defaultProps){r=X({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Yu(n,r,l,f){r=n.memoizedState,l=l(f,r),l=l==null?r:X({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Tl={isMounted:function(n){return(n=n._reactInternals)?Bi(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var f=Vn(),x=kr(n),M=ar(f,x);M.payload=r,l!=null&&(M.callback=l),r=Nr(n,M,x),r!==null&&(Pi(r,n,x,f),vl(r,n,x))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var f=Vn(),x=kr(n),M=ar(f,x);M.tag=1,M.payload=r,l!=null&&(M.callback=l),r=Nr(n,M,x),r!==null&&(Pi(r,n,x,f),vl(r,n,x))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Vn(),f=kr(n),x=ar(l,f);x.tag=2,r!=null&&(x.callback=r),r=Nr(n,x,f),r!==null&&(Pi(r,n,f,l),vl(r,n,f))}};function ym(n,r,l,f,x,M,P){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(f,M,P):r.prototype&&r.prototype.isPureReactComponent?!Za(l,f)||!Za(x,M):!0}function Sm(n,r,l){var f=!1,x=Pr,M=r.contextType;return typeof M=="object"&&M!==null?M=gi(M):(x=Yn(r)?cs:Nn.current,f=r.contextTypes,M=(f=f!=null)?js(n,x):Pr),r=new r(l,M),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Tl,n.stateNode=r,r._reactInternals=n,f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=x,n.__reactInternalMemoizedMaskedChildContext=M),r}function Mm(n,r,l,f){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,f),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,f),r.state!==n&&Tl.enqueueReplaceState(r,r.state,null)}function $u(n,r,l,f){var x=n.stateNode;x.props=l,x.state=n.memoizedState,x.refs={},Fu(n);var M=r.contextType;typeof M=="object"&&M!==null?x.context=gi(M):(M=Yn(r)?cs:Nn.current,x.context=js(n,M)),x.state=n.memoizedState,M=r.getDerivedStateFromProps,typeof M=="function"&&(Yu(n,r,M,l),x.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof x.getSnapshotBeforeUpdate=="function"||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(r=x.state,typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount(),r!==x.state&&Tl.enqueueReplaceState(x,x.state,null),_l(n,l,x,f),x.state=n.memoizedState),typeof x.componentDidMount=="function"&&(n.flags|=4194308)}function ea(n,r){try{var l="",f=r;do l+=Ee(f),f=f.return;while(f);var x=l}catch(M){x=`
Error generating stack: `+M.message+`
`+M.stack}return{value:n,source:r,stack:x,digest:null}}function Ku(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Zu(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var l_=typeof WeakMap=="function"?WeakMap:Map;function wm(n,r,l){l=ar(-1,l),l.tag=3,l.payload={element:null};var f=r.value;return l.callback=function(){Nl||(Nl=!0,fh=f),Zu(n,r)},l}function Em(n,r,l){l=ar(-1,l),l.tag=3;var f=n.type.getDerivedStateFromError;if(typeof f=="function"){var x=r.value;l.payload=function(){return f(x)},l.callback=function(){Zu(n,r)}}var M=n.stateNode;return M!==null&&typeof M.componentDidCatch=="function"&&(l.callback=function(){Zu(n,r),typeof f!="function"&&(Fr===null?Fr=new Set([this]):Fr.add(this));var P=r.stack;this.componentDidCatch(r.value,{componentStack:P!==null?P:""})}),l}function bm(n,r,l){var f=n.pingCache;if(f===null){f=n.pingCache=new l_;var x=new Set;f.set(r,x)}else x=f.get(r),x===void 0&&(x=new Set,f.set(r,x));x.has(l)||(x.add(l),n=M_.bind(null,n,r,l),r.then(n,n))}function Tm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Cm(n,r,l,f,x){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=ar(-1,1),r.tag=2,Nr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=x,n)}var c_=T.ReactCurrentOwner,$n=!1;function Hn(n,r,l,f){r.child=n===null?qp(r,null,l,f):Ks(r,n.child,l,f)}function Am(n,r,l,f,x){l=l.render;var M=r.ref;return Qs(r,x),f=Vu(n,r,l,f,M,x),l=Gu(),n!==null&&!$n?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~x,or(n,r,x)):(en&&l&&bu(r),r.flags|=1,Hn(n,r,f,x),r.child)}function Rm(n,r,l,f,x){if(n===null){var M=l.type;return typeof M=="function"&&!_h(M)&&M.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=M,Pm(n,r,M,f,x)):(n=zl(l.type,null,f,r,r.mode,x),n.ref=r.ref,n.return=r,r.child=n)}if(M=n.child,(n.lanes&x)===0){var P=M.memoizedProps;if(l=l.compare,l=l!==null?l:Za,l(P,f)&&n.ref===r.ref)return or(n,r,x)}return r.flags|=1,n=zr(M,f),n.ref=r.ref,n.return=r,r.child=n}function Pm(n,r,l,f,x){if(n!==null){var M=n.memoizedProps;if(Za(M,f)&&n.ref===r.ref)if($n=!1,r.pendingProps=f=M,(n.lanes&x)!==0)(n.flags&131072)!==0&&($n=!0);else return r.lanes=n.lanes,or(n,r,x)}return Qu(n,r,l,f,x)}function Lm(n,r,l){var f=r.pendingProps,x=f.children,M=n!==null?n.memoizedState:null;if(f.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},qt(na,ai),ai|=l;else{if((l&1073741824)===0)return n=M!==null?M.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,qt(na,ai),ai|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=M!==null?M.baseLanes:l,qt(na,ai),ai|=f}else M!==null?(f=M.baseLanes|l,r.memoizedState=null):f=l,qt(na,ai),ai|=f;return Hn(n,r,x,l),r.child}function Im(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Qu(n,r,l,f,x){var M=Yn(l)?cs:Nn.current;return M=js(r,M),Qs(r,x),l=Vu(n,r,l,f,M,x),f=Gu(),n!==null&&!$n?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~x,or(n,r,x)):(en&&f&&bu(r),r.flags|=1,Hn(n,r,l,x),r.child)}function Nm(n,r,l,f,x){if(Yn(l)){var M=!0;ul(r)}else M=!1;if(Qs(r,x),r.stateNode===null)Al(n,r),Sm(r,l,f),$u(r,l,f,x),f=!0;else if(n===null){var P=r.stateNode,H=r.memoizedProps;P.props=H;var q=P.context,he=l.contextType;typeof he=="object"&&he!==null?he=gi(he):(he=Yn(l)?cs:Nn.current,he=js(r,he));var we=l.getDerivedStateFromProps,Te=typeof we=="function"||typeof P.getSnapshotBeforeUpdate=="function";Te||typeof P.UNSAFE_componentWillReceiveProps!="function"&&typeof P.componentWillReceiveProps!="function"||(H!==f||q!==he)&&Mm(r,P,f,he),Ir=!1;var Me=r.memoizedState;P.state=Me,_l(r,f,P,x),q=r.memoizedState,H!==f||Me!==q||qn.current||Ir?(typeof we=="function"&&(Yu(r,l,we,f),q=r.memoizedState),(H=Ir||ym(r,l,H,f,Me,q,he))?(Te||typeof P.UNSAFE_componentWillMount!="function"&&typeof P.componentWillMount!="function"||(typeof P.componentWillMount=="function"&&P.componentWillMount(),typeof P.UNSAFE_componentWillMount=="function"&&P.UNSAFE_componentWillMount()),typeof P.componentDidMount=="function"&&(r.flags|=4194308)):(typeof P.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=f,r.memoizedState=q),P.props=f,P.state=q,P.context=he,f=H):(typeof P.componentDidMount=="function"&&(r.flags|=4194308),f=!1)}else{P=r.stateNode,$p(n,r),H=r.memoizedProps,he=r.type===r.elementType?H:Ci(r.type,H),P.props=he,Te=r.pendingProps,Me=P.context,q=l.contextType,typeof q=="object"&&q!==null?q=gi(q):(q=Yn(l)?cs:Nn.current,q=js(r,q));var je=l.getDerivedStateFromProps;(we=typeof je=="function"||typeof P.getSnapshotBeforeUpdate=="function")||typeof P.UNSAFE_componentWillReceiveProps!="function"&&typeof P.componentWillReceiveProps!="function"||(H!==Te||Me!==q)&&Mm(r,P,f,q),Ir=!1,Me=r.memoizedState,P.state=Me,_l(r,f,P,x);var Ze=r.memoizedState;H!==Te||Me!==Ze||qn.current||Ir?(typeof je=="function"&&(Yu(r,l,je,f),Ze=r.memoizedState),(he=Ir||ym(r,l,he,f,Me,Ze,q)||!1)?(we||typeof P.UNSAFE_componentWillUpdate!="function"&&typeof P.componentWillUpdate!="function"||(typeof P.componentWillUpdate=="function"&&P.componentWillUpdate(f,Ze,q),typeof P.UNSAFE_componentWillUpdate=="function"&&P.UNSAFE_componentWillUpdate(f,Ze,q)),typeof P.componentDidUpdate=="function"&&(r.flags|=4),typeof P.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof P.componentDidUpdate!="function"||H===n.memoizedProps&&Me===n.memoizedState||(r.flags|=4),typeof P.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&Me===n.memoizedState||(r.flags|=1024),r.memoizedProps=f,r.memoizedState=Ze),P.props=f,P.state=Ze,P.context=q,f=he):(typeof P.componentDidUpdate!="function"||H===n.memoizedProps&&Me===n.memoizedState||(r.flags|=4),typeof P.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&Me===n.memoizedState||(r.flags|=1024),f=!1)}return Ju(n,r,l,f,M,x)}function Ju(n,r,l,f,x,M){Im(n,r);var P=(r.flags&128)!==0;if(!f&&!P)return x&&Op(r,l,!1),or(n,r,M);f=r.stateNode,c_.current=r;var H=P&&typeof l.getDerivedStateFromError!="function"?null:f.render();return r.flags|=1,n!==null&&P?(r.child=Ks(r,n.child,null,M),r.child=Ks(r,null,H,M)):Hn(n,r,H,M),r.memoizedState=f.state,x&&Op(r,l,!0),r.child}function Um(n){var r=n.stateNode;r.pendingContext?Dp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Dp(n,r.context,!1),Du(n,r.containerInfo)}function Fm(n,r,l,f,x){return $s(),Ru(x),r.flags|=256,Hn(n,r,l,f),r.child}var eh={dehydrated:null,treeContext:null,retryLane:0};function th(n){return{baseLanes:n,cachePool:null,transitions:null}}function Dm(n,r,l){var f=r.pendingProps,x=nn.current,M=!1,P=(r.flags&128)!==0,H;if((H=P)||(H=n!==null&&n.memoizedState===null?!1:(x&2)!==0),H?(M=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(x|=1),qt(nn,x&1),n===null)return Au(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(P=f.children,n=f.fallback,M?(f=r.mode,M=r.child,P={mode:"hidden",children:P},(f&1)===0&&M!==null?(M.childLanes=0,M.pendingProps=P):M=Bl(P,f,0,null),n=_s(n,f,l,null),M.return=r,n.return=r,M.sibling=n,r.child=M,r.child.memoizedState=th(l),r.memoizedState=eh,n):nh(r,P));if(x=n.memoizedState,x!==null&&(H=x.dehydrated,H!==null))return u_(n,r,P,f,H,x,l);if(M){M=f.fallback,P=r.mode,x=n.child,H=x.sibling;var q={mode:"hidden",children:f.children};return(P&1)===0&&r.child!==x?(f=r.child,f.childLanes=0,f.pendingProps=q,r.deletions=null):(f=zr(x,q),f.subtreeFlags=x.subtreeFlags&14680064),H!==null?M=zr(H,M):(M=_s(M,P,l,null),M.flags|=2),M.return=r,f.return=r,f.sibling=M,r.child=f,f=M,M=r.child,P=n.child.memoizedState,P=P===null?th(l):{baseLanes:P.baseLanes|l,cachePool:null,transitions:P.transitions},M.memoizedState=P,M.childLanes=n.childLanes&~l,r.memoizedState=eh,f}return M=n.child,n=M.sibling,f=zr(M,{mode:"visible",children:f.children}),(r.mode&1)===0&&(f.lanes=l),f.return=r,f.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=f,r.memoizedState=null,f}function nh(n,r){return r=Bl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Cl(n,r,l,f){return f!==null&&Ru(f),Ks(r,n.child,null,l),n=nh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function u_(n,r,l,f,x,M,P){if(l)return r.flags&256?(r.flags&=-257,f=Ku(Error(t(422))),Cl(n,r,P,f)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(M=f.fallback,x=r.mode,f=Bl({mode:"visible",children:f.children},x,0,null),M=_s(M,x,P,null),M.flags|=2,f.return=r,M.return=r,f.sibling=M,r.child=f,(r.mode&1)!==0&&Ks(r,n.child,null,P),r.child.memoizedState=th(P),r.memoizedState=eh,M);if((r.mode&1)===0)return Cl(n,r,P,null);if(x.data==="$!"){if(f=x.nextSibling&&x.nextSibling.dataset,f)var H=f.dgst;return f=H,M=Error(t(419)),f=Ku(M,f,void 0),Cl(n,r,P,f)}if(H=(P&n.childLanes)!==0,$n||H){if(f=bn,f!==null){switch(P&-P){case 4:x=2;break;case 16:x=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:x=32;break;case 536870912:x=268435456;break;default:x=0}x=(x&(f.suspendedLanes|P))!==0?0:x,x!==0&&x!==M.retryLane&&(M.retryLane=x,sr(n,x),Pi(f,n,x,-1))}return vh(),f=Ku(Error(t(421))),Cl(n,r,P,f)}return x.data==="$?"?(r.flags|=128,r.child=n.child,r=w_.bind(null,n),x._reactRetry=r,null):(n=M.treeContext,si=Ar(x.nextSibling),ri=r,en=!0,Ti=null,n!==null&&(pi[mi++]=ir,pi[mi++]=rr,pi[mi++]=us,ir=n.id,rr=n.overflow,us=r),r=nh(r,f.children),r.flags|=4096,r)}function km(n,r,l){n.lanes|=r;var f=n.alternate;f!==null&&(f.lanes|=r),Nu(n.return,r,l)}function ih(n,r,l,f,x){var M=n.memoizedState;M===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:x}:(M.isBackwards=r,M.rendering=null,M.renderingStartTime=0,M.last=f,M.tail=l,M.tailMode=x)}function Om(n,r,l){var f=r.pendingProps,x=f.revealOrder,M=f.tail;if(Hn(n,r,f.children,l),f=nn.current,(f&2)!==0)f=f&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&km(n,l,r);else if(n.tag===19)km(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}f&=1}if(qt(nn,f),(r.mode&1)===0)r.memoizedState=null;else switch(x){case"forwards":for(l=r.child,x=null;l!==null;)n=l.alternate,n!==null&&yl(n)===null&&(x=l),l=l.sibling;l=x,l===null?(x=r.child,r.child=null):(x=l.sibling,l.sibling=null),ih(r,!1,x,l,M);break;case"backwards":for(l=null,x=r.child,r.child=null;x!==null;){if(n=x.alternate,n!==null&&yl(n)===null){r.child=x;break}n=x.sibling,x.sibling=l,l=x,x=n}ih(r,!0,l,null,M);break;case"together":ih(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Al(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function or(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),ms|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=zr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=zr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function h_(n,r,l){switch(r.tag){case 3:Um(r),$s();break;case 5:Qp(r);break;case 1:Yn(r.type)&&ul(r);break;case 4:Du(r,r.stateNode.containerInfo);break;case 10:var f=r.type._context,x=r.memoizedProps.value;qt(gl,f._currentValue),f._currentValue=x;break;case 13:if(f=r.memoizedState,f!==null)return f.dehydrated!==null?(qt(nn,nn.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?Dm(n,r,l):(qt(nn,nn.current&1),n=or(n,r,l),n!==null?n.sibling:null);qt(nn,nn.current&1);break;case 19:if(f=(l&r.childLanes)!==0,(n.flags&128)!==0){if(f)return Om(n,r,l);r.flags|=128}if(x=r.memoizedState,x!==null&&(x.rendering=null,x.tail=null,x.lastEffect=null),qt(nn,nn.current),f)break;return null;case 22:case 23:return r.lanes=0,Lm(n,r,l)}return or(n,r,l)}var zm,rh,Bm,Hm;zm=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},rh=function(){},Bm=function(n,r,l,f){var x=n.memoizedProps;if(x!==f){n=r.stateNode,ds(Gi.current);var M=null;switch(l){case"input":x=At(n,x),f=At(n,f),M=[];break;case"select":x=X({},x,{value:void 0}),f=X({},f,{value:void 0}),M=[];break;case"textarea":x=yt(n,x),f=yt(n,f),M=[];break;default:typeof x.onClick!="function"&&typeof f.onClick=="function"&&(n.onclick=ol)}Ge(l,f);var P;l=null;for(he in x)if(!f.hasOwnProperty(he)&&x.hasOwnProperty(he)&&x[he]!=null)if(he==="style"){var H=x[he];for(P in H)H.hasOwnProperty(P)&&(l||(l={}),l[P]="")}else he!=="dangerouslySetInnerHTML"&&he!=="children"&&he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&he!=="autoFocus"&&(s.hasOwnProperty(he)?M||(M=[]):(M=M||[]).push(he,null));for(he in f){var q=f[he];if(H=x!=null?x[he]:void 0,f.hasOwnProperty(he)&&q!==H&&(q!=null||H!=null))if(he==="style")if(H){for(P in H)!H.hasOwnProperty(P)||q&&q.hasOwnProperty(P)||(l||(l={}),l[P]="");for(P in q)q.hasOwnProperty(P)&&H[P]!==q[P]&&(l||(l={}),l[P]=q[P])}else l||(M||(M=[]),M.push(he,l)),l=q;else he==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,H=H?H.__html:void 0,q!=null&&H!==q&&(M=M||[]).push(he,q)):he==="children"?typeof q!="string"&&typeof q!="number"||(M=M||[]).push(he,""+q):he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&(s.hasOwnProperty(he)?(q!=null&&he==="onScroll"&&Kt("scroll",n),M||H===q||(M=[])):(M=M||[]).push(he,q))}l&&(M=M||[]).push("style",l);var he=M;(r.updateQueue=he)&&(r.flags|=4)}},Hm=function(n,r,l,f){l!==f&&(r.flags|=4)};function fo(n,r){if(!en)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:f.sibling=null}}function Fn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,f=0;if(r)for(var x=n.child;x!==null;)l|=x.lanes|x.childLanes,f|=x.subtreeFlags&14680064,f|=x.flags&14680064,x.return=n,x=x.sibling;else for(x=n.child;x!==null;)l|=x.lanes|x.childLanes,f|=x.subtreeFlags,f|=x.flags,x.return=n,x=x.sibling;return n.subtreeFlags|=f,n.childLanes=l,r}function f_(n,r,l){var f=r.pendingProps;switch(Tu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fn(r),null;case 1:return Yn(r.type)&&cl(),Fn(r),null;case 3:return f=r.stateNode,Js(),Zt(qn),Zt(Nn),zu(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(n===null||n.child===null)&&(pl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Ti!==null&&(mh(Ti),Ti=null))),rh(n,r),Fn(r),null;case 5:ku(r);var x=ds(oo.current);if(l=r.type,n!==null&&r.stateNode!=null)Bm(n,r,l,f,x),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!f){if(r.stateNode===null)throw Error(t(166));return Fn(r),null}if(n=ds(Gi.current),pl(r)){f=r.stateNode,l=r.type;var M=r.memoizedProps;switch(f[Vi]=r,f[no]=M,n=(r.mode&1)!==0,l){case"dialog":Kt("cancel",f),Kt("close",f);break;case"iframe":case"object":case"embed":Kt("load",f);break;case"video":case"audio":for(x=0;x<Ja.length;x++)Kt(Ja[x],f);break;case"source":Kt("error",f);break;case"img":case"image":case"link":Kt("error",f),Kt("load",f);break;case"details":Kt("toggle",f);break;case"input":kt(f,M),Kt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!M.multiple},Kt("invalid",f);break;case"textarea":Lt(f,M),Kt("invalid",f)}Ge(l,M),x=null;for(var P in M)if(M.hasOwnProperty(P)){var H=M[P];P==="children"?typeof H=="string"?f.textContent!==H&&(M.suppressHydrationWarning!==!0&&al(f.textContent,H,n),x=["children",H]):typeof H=="number"&&f.textContent!==""+H&&(M.suppressHydrationWarning!==!0&&al(f.textContent,H,n),x=["children",""+H]):s.hasOwnProperty(P)&&H!=null&&P==="onScroll"&&Kt("scroll",f)}switch(l){case"input":rt(f),Gt(f,M,!0);break;case"textarea":rt(f),Wt(f);break;case"select":case"option":break;default:typeof M.onClick=="function"&&(f.onclick=ol)}f=x,r.updateQueue=f,f!==null&&(r.flags|=4)}else{P=x.nodeType===9?x:x.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=O(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=P.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof f.is=="string"?n=P.createElement(l,{is:f.is}):(n=P.createElement(l),l==="select"&&(P=n,f.multiple?P.multiple=!0:f.size&&(P.size=f.size))):n=P.createElementNS(n,l),n[Vi]=r,n[no]=f,zm(n,r,!1,!1),r.stateNode=n;e:{switch(P=Re(l,f),l){case"dialog":Kt("cancel",n),Kt("close",n),x=f;break;case"iframe":case"object":case"embed":Kt("load",n),x=f;break;case"video":case"audio":for(x=0;x<Ja.length;x++)Kt(Ja[x],n);x=f;break;case"source":Kt("error",n),x=f;break;case"img":case"image":case"link":Kt("error",n),Kt("load",n),x=f;break;case"details":Kt("toggle",n),x=f;break;case"input":kt(n,f),x=At(n,f),Kt("invalid",n);break;case"option":x=f;break;case"select":n._wrapperState={wasMultiple:!!f.multiple},x=X({},f,{value:void 0}),Kt("invalid",n);break;case"textarea":Lt(n,f),x=yt(n,f),Kt("invalid",n);break;default:x=f}Ge(l,x),H=x;for(M in H)if(H.hasOwnProperty(M)){var q=H[M];M==="style"?_e(n,q):M==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,q!=null&&fe(n,q)):M==="children"?typeof q=="string"?(l!=="textarea"||q!=="")&&ye(n,q):typeof q=="number"&&ye(n,""+q):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(s.hasOwnProperty(M)?q!=null&&M==="onScroll"&&Kt("scroll",n):q!=null&&C(n,M,q,P))}switch(l){case"input":rt(n),Gt(n,f,!1);break;case"textarea":rt(n),Wt(n);break;case"option":f.value!=null&&n.setAttribute("value",""+pe(f.value));break;case"select":n.multiple=!!f.multiple,M=f.value,M!=null?Ft(n,!!f.multiple,M,!1):f.defaultValue!=null&&Ft(n,!!f.multiple,f.defaultValue,!0);break;default:typeof x.onClick=="function"&&(n.onclick=ol)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Fn(r),null;case 6:if(n&&r.stateNode!=null)Hm(n,r,n.memoizedProps,f);else{if(typeof f!="string"&&r.stateNode===null)throw Error(t(166));if(l=ds(oo.current),ds(Gi.current),pl(r)){if(f=r.stateNode,l=r.memoizedProps,f[Vi]=r,(M=f.nodeValue!==l)&&(n=ri,n!==null))switch(n.tag){case 3:al(f.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&al(f.nodeValue,l,(n.mode&1)!==0)}M&&(r.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[Vi]=r,r.stateNode=f}return Fn(r),null;case 13:if(Zt(nn),f=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(en&&si!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Wp(),$s(),r.flags|=98560,M=!1;else if(M=pl(r),f!==null&&f.dehydrated!==null){if(n===null){if(!M)throw Error(t(318));if(M=r.memoizedState,M=M!==null?M.dehydrated:null,!M)throw Error(t(317));M[Vi]=r}else $s(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Fn(r),M=!1}else Ti!==null&&(mh(Ti),Ti=null),M=!0;if(!M)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(f=f!==null,f!==(n!==null&&n.memoizedState!==null)&&f&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(nn.current&1)!==0?yn===0&&(yn=3):vh())),r.updateQueue!==null&&(r.flags|=4),Fn(r),null);case 4:return Js(),rh(n,r),n===null&&eo(r.stateNode.containerInfo),Fn(r),null;case 10:return Iu(r.type._context),Fn(r),null;case 17:return Yn(r.type)&&cl(),Fn(r),null;case 19:if(Zt(nn),M=r.memoizedState,M===null)return Fn(r),null;if(f=(r.flags&128)!==0,P=M.rendering,P===null)if(f)fo(M,!1);else{if(yn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(P=yl(n),P!==null){for(r.flags|=128,fo(M,!1),f=P.updateQueue,f!==null&&(r.updateQueue=f,r.flags|=4),r.subtreeFlags=0,f=l,l=r.child;l!==null;)M=l,n=f,M.flags&=14680066,P=M.alternate,P===null?(M.childLanes=0,M.lanes=n,M.child=null,M.subtreeFlags=0,M.memoizedProps=null,M.memoizedState=null,M.updateQueue=null,M.dependencies=null,M.stateNode=null):(M.childLanes=P.childLanes,M.lanes=P.lanes,M.child=P.child,M.subtreeFlags=0,M.deletions=null,M.memoizedProps=P.memoizedProps,M.memoizedState=P.memoizedState,M.updateQueue=P.updateQueue,M.type=P.type,n=P.dependencies,M.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return qt(nn,nn.current&1|2),r.child}n=n.sibling}M.tail!==null&&tn()>ia&&(r.flags|=128,f=!0,fo(M,!1),r.lanes=4194304)}else{if(!f)if(n=yl(P),n!==null){if(r.flags|=128,f=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),fo(M,!0),M.tail===null&&M.tailMode==="hidden"&&!P.alternate&&!en)return Fn(r),null}else 2*tn()-M.renderingStartTime>ia&&l!==1073741824&&(r.flags|=128,f=!0,fo(M,!1),r.lanes=4194304);M.isBackwards?(P.sibling=r.child,r.child=P):(l=M.last,l!==null?l.sibling=P:r.child=P,M.last=P)}return M.tail!==null?(r=M.tail,M.rendering=r,M.tail=r.sibling,M.renderingStartTime=tn(),r.sibling=null,l=nn.current,qt(nn,f?l&1|2:l&1),r):(Fn(r),null);case 22:case 23:return xh(),f=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==f&&(r.flags|=8192),f&&(r.mode&1)!==0?(ai&1073741824)!==0&&(Fn(r),r.subtreeFlags&6&&(r.flags|=8192)):Fn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function d_(n,r){switch(Tu(r),r.tag){case 1:return Yn(r.type)&&cl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Js(),Zt(qn),Zt(Nn),zu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return ku(r),null;case 13:if(Zt(nn),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));$s()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Zt(nn),null;case 4:return Js(),null;case 10:return Iu(r.type._context),null;case 22:case 23:return xh(),null;case 24:return null;default:return null}}var Rl=!1,Dn=!1,p_=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function ta(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){sn(n,r,f)}else l.current=null}function sh(n,r,l){try{l()}catch(f){sn(n,r,f)}}var Vm=!1;function m_(n,r){if(xu=$o,n=yp(),cu(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var x=f.anchorOffset,M=f.focusNode;f=f.focusOffset;try{l.nodeType,M.nodeType}catch{l=null;break e}var P=0,H=-1,q=-1,he=0,we=0,Te=n,Me=null;t:for(;;){for(var je;Te!==l||x!==0&&Te.nodeType!==3||(H=P+x),Te!==M||f!==0&&Te.nodeType!==3||(q=P+f),Te.nodeType===3&&(P+=Te.nodeValue.length),(je=Te.firstChild)!==null;)Me=Te,Te=je;for(;;){if(Te===n)break t;if(Me===l&&++he===x&&(H=P),Me===M&&++we===f&&(q=P),(je=Te.nextSibling)!==null)break;Te=Me,Me=Te.parentNode}Te=je}l=H===-1||q===-1?null:{start:H,end:q}}else l=null}l=l||{start:0,end:0}}else l=null;for(vu={focusedElem:n,selectionRange:l},$o=!1,Ke=r;Ke!==null;)if(r=Ke,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Ke=n;else for(;Ke!==null;){r=Ke;try{var Ze=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Ze!==null){var Je=Ze.memoizedProps,on=Ze.memoizedState,ae=r.stateNode,ne=ae.getSnapshotBeforeUpdate(r.elementType===r.type?Je:Ci(r.type,Je),on);ae.__reactInternalSnapshotBeforeUpdate=ne}break;case 3:var ce=r.stateNode.containerInfo;ce.nodeType===1?ce.textContent="":ce.nodeType===9&&ce.documentElement&&ce.removeChild(ce.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ie){sn(r,r.return,Ie)}if(n=r.sibling,n!==null){n.return=r.return,Ke=n;break}Ke=r.return}return Ze=Vm,Vm=!1,Ze}function po(n,r,l){var f=r.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var x=f=f.next;do{if((x.tag&n)===n){var M=x.destroy;x.destroy=void 0,M!==void 0&&sh(r,l,M)}x=x.next}while(x!==f)}}function Pl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var f=l.create;l.destroy=f()}l=l.next}while(l!==r)}}function ah(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function Gm(n){var r=n.alternate;r!==null&&(n.alternate=null,Gm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Vi],delete r[no],delete r[Mu],delete r[Zv],delete r[Qv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Wm(n){return n.tag===5||n.tag===3||n.tag===4}function Xm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Wm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function oh(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=ol));else if(f!==4&&(n=n.child,n!==null))for(oh(n,r,l),n=n.sibling;n!==null;)oh(n,r,l),n=n.sibling}function lh(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(f!==4&&(n=n.child,n!==null))for(lh(n,r,l),n=n.sibling;n!==null;)lh(n,r,l),n=n.sibling}var Pn=null,Ai=!1;function Ur(n,r,l){for(l=l.child;l!==null;)jm(n,r,l),l=l.sibling}function jm(n,r,l){if(ke&&typeof ke.onCommitFiberUnmount=="function")try{ke.onCommitFiberUnmount(oe,l)}catch{}switch(l.tag){case 5:Dn||ta(l,r);case 6:var f=Pn,x=Ai;Pn=null,Ur(n,r,l),Pn=f,Ai=x,Pn!==null&&(Ai?(n=Pn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):Pn.removeChild(l.stateNode));break;case 18:Pn!==null&&(Ai?(n=Pn,l=l.stateNode,n.nodeType===8?Su(n.parentNode,l):n.nodeType===1&&Su(n,l),Xa(n)):Su(Pn,l.stateNode));break;case 4:f=Pn,x=Ai,Pn=l.stateNode.containerInfo,Ai=!0,Ur(n,r,l),Pn=f,Ai=x;break;case 0:case 11:case 14:case 15:if(!Dn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){x=f=f.next;do{var M=x,P=M.destroy;M=M.tag,P!==void 0&&((M&2)!==0||(M&4)!==0)&&sh(l,r,P),x=x.next}while(x!==f)}Ur(n,r,l);break;case 1:if(!Dn&&(ta(l,r),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(H){sn(l,r,H)}Ur(n,r,l);break;case 21:Ur(n,r,l);break;case 22:l.mode&1?(Dn=(f=Dn)||l.memoizedState!==null,Ur(n,r,l),Dn=f):Ur(n,r,l);break;default:Ur(n,r,l)}}function qm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new p_),r.forEach(function(f){var x=E_.bind(null,n,f);l.has(f)||(l.add(f),f.then(x,x))})}}function Ri(n,r){var l=r.deletions;if(l!==null)for(var f=0;f<l.length;f++){var x=l[f];try{var M=n,P=r,H=P;e:for(;H!==null;){switch(H.tag){case 5:Pn=H.stateNode,Ai=!1;break e;case 3:Pn=H.stateNode.containerInfo,Ai=!0;break e;case 4:Pn=H.stateNode.containerInfo,Ai=!0;break e}H=H.return}if(Pn===null)throw Error(t(160));jm(M,P,x),Pn=null,Ai=!1;var q=x.alternate;q!==null&&(q.return=null),x.return=null}catch(he){sn(x,r,he)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Ym(r,n),r=r.sibling}function Ym(n,r){var l=n.alternate,f=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ri(r,n),Xi(n),f&4){try{po(3,n,n.return),Pl(3,n)}catch(Je){sn(n,n.return,Je)}try{po(5,n,n.return)}catch(Je){sn(n,n.return,Je)}}break;case 1:Ri(r,n),Xi(n),f&512&&l!==null&&ta(l,l.return);break;case 5:if(Ri(r,n),Xi(n),f&512&&l!==null&&ta(l,l.return),n.flags&32){var x=n.stateNode;try{ye(x,"")}catch(Je){sn(n,n.return,Je)}}if(f&4&&(x=n.stateNode,x!=null)){var M=n.memoizedProps,P=l!==null?l.memoizedProps:M,H=n.type,q=n.updateQueue;if(n.updateQueue=null,q!==null)try{H==="input"&&M.type==="radio"&&M.name!=null&&vt(x,M),Re(H,P);var he=Re(H,M);for(P=0;P<q.length;P+=2){var we=q[P],Te=q[P+1];we==="style"?_e(x,Te):we==="dangerouslySetInnerHTML"?fe(x,Te):we==="children"?ye(x,Te):C(x,we,Te,he)}switch(H){case"input":_t(x,M);break;case"textarea":ze(x,M);break;case"select":var Me=x._wrapperState.wasMultiple;x._wrapperState.wasMultiple=!!M.multiple;var je=M.value;je!=null?Ft(x,!!M.multiple,je,!1):Me!==!!M.multiple&&(M.defaultValue!=null?Ft(x,!!M.multiple,M.defaultValue,!0):Ft(x,!!M.multiple,M.multiple?[]:"",!1))}x[no]=M}catch(Je){sn(n,n.return,Je)}}break;case 6:if(Ri(r,n),Xi(n),f&4){if(n.stateNode===null)throw Error(t(162));x=n.stateNode,M=n.memoizedProps;try{x.nodeValue=M}catch(Je){sn(n,n.return,Je)}}break;case 3:if(Ri(r,n),Xi(n),f&4&&l!==null&&l.memoizedState.isDehydrated)try{Xa(r.containerInfo)}catch(Je){sn(n,n.return,Je)}break;case 4:Ri(r,n),Xi(n);break;case 13:Ri(r,n),Xi(n),x=n.child,x.flags&8192&&(M=x.memoizedState!==null,x.stateNode.isHidden=M,!M||x.alternate!==null&&x.alternate.memoizedState!==null||(hh=tn())),f&4&&qm(n);break;case 22:if(we=l!==null&&l.memoizedState!==null,n.mode&1?(Dn=(he=Dn)||we,Ri(r,n),Dn=he):Ri(r,n),Xi(n),f&8192){if(he=n.memoizedState!==null,(n.stateNode.isHidden=he)&&!we&&(n.mode&1)!==0)for(Ke=n,we=n.child;we!==null;){for(Te=Ke=we;Ke!==null;){switch(Me=Ke,je=Me.child,Me.tag){case 0:case 11:case 14:case 15:po(4,Me,Me.return);break;case 1:ta(Me,Me.return);var Ze=Me.stateNode;if(typeof Ze.componentWillUnmount=="function"){f=Me,l=Me.return;try{r=f,Ze.props=r.memoizedProps,Ze.state=r.memoizedState,Ze.componentWillUnmount()}catch(Je){sn(f,l,Je)}}break;case 5:ta(Me,Me.return);break;case 22:if(Me.memoizedState!==null){Zm(Te);continue}}je!==null?(je.return=Me,Ke=je):Zm(Te)}we=we.sibling}e:for(we=null,Te=n;;){if(Te.tag===5){if(we===null){we=Te;try{x=Te.stateNode,he?(M=x.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none"):(H=Te.stateNode,q=Te.memoizedProps.style,P=q!=null&&q.hasOwnProperty("display")?q.display:null,H.style.display=de("display",P))}catch(Je){sn(n,n.return,Je)}}}else if(Te.tag===6){if(we===null)try{Te.stateNode.nodeValue=he?"":Te.memoizedProps}catch(Je){sn(n,n.return,Je)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===n)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===n)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===n)break e;we===Te&&(we=null),Te=Te.return}we===Te&&(we=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:Ri(r,n),Xi(n),f&4&&qm(n);break;case 21:break;default:Ri(r,n),Xi(n)}}function Xi(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(Wm(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var x=f.stateNode;f.flags&32&&(ye(x,""),f.flags&=-33);var M=Xm(n);lh(n,M,x);break;case 3:case 4:var P=f.stateNode.containerInfo,H=Xm(n);oh(n,H,P);break;default:throw Error(t(161))}}catch(q){sn(n,n.return,q)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function g_(n,r,l){Ke=n,$m(n)}function $m(n,r,l){for(var f=(n.mode&1)!==0;Ke!==null;){var x=Ke,M=x.child;if(x.tag===22&&f){var P=x.memoizedState!==null||Rl;if(!P){var H=x.alternate,q=H!==null&&H.memoizedState!==null||Dn;H=Rl;var he=Dn;if(Rl=P,(Dn=q)&&!he)for(Ke=x;Ke!==null;)P=Ke,q=P.child,P.tag===22&&P.memoizedState!==null?Qm(x):q!==null?(q.return=P,Ke=q):Qm(x);for(;M!==null;)Ke=M,$m(M),M=M.sibling;Ke=x,Rl=H,Dn=he}Km(n)}else(x.subtreeFlags&8772)!==0&&M!==null?(M.return=x,Ke=M):Km(n)}}function Km(n){for(;Ke!==null;){var r=Ke;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Dn||Pl(5,r);break;case 1:var f=r.stateNode;if(r.flags&4&&!Dn)if(l===null)f.componentDidMount();else{var x=r.elementType===r.type?l.memoizedProps:Ci(r.type,l.memoizedProps);f.componentDidUpdate(x,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var M=r.updateQueue;M!==null&&Zp(r,M,f);break;case 3:var P=r.updateQueue;if(P!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Zp(r,P,l)}break;case 5:var H=r.stateNode;if(l===null&&r.flags&4){l=H;var q=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":q.autoFocus&&l.focus();break;case"img":q.src&&(l.src=q.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var he=r.alternate;if(he!==null){var we=he.memoizedState;if(we!==null){var Te=we.dehydrated;Te!==null&&Xa(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Dn||r.flags&512&&ah(r)}catch(Me){sn(r,r.return,Me)}}if(r===n){Ke=null;break}if(l=r.sibling,l!==null){l.return=r.return,Ke=l;break}Ke=r.return}}function Zm(n){for(;Ke!==null;){var r=Ke;if(r===n){Ke=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Ke=l;break}Ke=r.return}}function Qm(n){for(;Ke!==null;){var r=Ke;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Pl(4,r)}catch(q){sn(r,l,q)}break;case 1:var f=r.stateNode;if(typeof f.componentDidMount=="function"){var x=r.return;try{f.componentDidMount()}catch(q){sn(r,x,q)}}var M=r.return;try{ah(r)}catch(q){sn(r,M,q)}break;case 5:var P=r.return;try{ah(r)}catch(q){sn(r,P,q)}}}catch(q){sn(r,r.return,q)}if(r===n){Ke=null;break}var H=r.sibling;if(H!==null){H.return=r.return,Ke=H;break}Ke=r.return}}var x_=Math.ceil,Ll=T.ReactCurrentDispatcher,ch=T.ReactCurrentOwner,vi=T.ReactCurrentBatchConfig,It=0,bn=null,pn=null,Ln=0,ai=0,na=Rr(0),yn=0,mo=null,ms=0,Il=0,uh=0,go=null,Kn=null,hh=0,ia=1/0,lr=null,Nl=!1,fh=null,Fr=null,Ul=!1,Dr=null,Fl=0,xo=0,dh=null,Dl=-1,kl=0;function Vn(){return(It&6)!==0?tn():Dl!==-1?Dl:Dl=tn()}function kr(n){return(n.mode&1)===0?1:(It&2)!==0&&Ln!==0?Ln&-Ln:e_.transition!==null?(kl===0&&(kl=Xe()),kl):(n=Et,n!==0||(n=window.event,n=n===void 0?16:ep(n.type)),n)}function Pi(n,r,l,f){if(50<xo)throw xo=0,dh=null,Error(t(185));wt(n,l,f),((It&2)===0||n!==bn)&&(n===bn&&((It&2)===0&&(Il|=l),yn===4&&Or(n,Ln)),Zn(n,f),l===1&&It===0&&(r.mode&1)===0&&(ia=tn()+500,hl&&Lr()))}function Zn(n,r){var l=n.callbackNode;Bt(n,r);var f=jt(n,n===bn?Ln:0);if(f===0)l!==null&&qo(l),n.callbackNode=null,n.callbackPriority=0;else if(r=f&-f,n.callbackPriority!==r){if(l!=null&&qo(l),r===1)n.tag===0?Jv(e0.bind(null,n)):zp(e0.bind(null,n)),$v(function(){(It&6)===0&&Lr()}),l=null;else{switch(er(f)){case 1:l=Ba;break;case 4:l=N;break;case 16:l=re;break;case 536870912:l=le;break;default:l=re}l=l0(l,Jm.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Jm(n,r){if(Dl=-1,kl=0,(It&6)!==0)throw Error(t(327));var l=n.callbackNode;if(ra()&&n.callbackNode!==l)return null;var f=jt(n,n===bn?Ln:0);if(f===0)return null;if((f&30)!==0||(f&n.expiredLanes)!==0||r)r=Ol(n,f);else{r=f;var x=It;It|=2;var M=n0();(bn!==n||Ln!==r)&&(lr=null,ia=tn()+500,xs(n,r));do try{y_();break}catch(H){t0(n,H)}while(!0);Lu(),Ll.current=M,It=x,pn!==null?r=0:(bn=null,Ln=0,r=yn)}if(r!==0){if(r===2&&(x=dn(n),x!==0&&(f=x,r=ph(n,x))),r===1)throw l=mo,xs(n,0),Or(n,f),Zn(n,tn()),l;if(r===6)Or(n,f);else{if(x=n.current.alternate,(f&30)===0&&!v_(x)&&(r=Ol(n,f),r===2&&(M=dn(n),M!==0&&(f=M,r=ph(n,M))),r===1))throw l=mo,xs(n,0),Or(n,f),Zn(n,tn()),l;switch(n.finishedWork=x,n.finishedLanes=f,r){case 0:case 1:throw Error(t(345));case 2:vs(n,Kn,lr);break;case 3:if(Or(n,f),(f&130023424)===f&&(r=hh+500-tn(),10<r)){if(jt(n,0)!==0)break;if(x=n.suspendedLanes,(x&f)!==f){Vn(),n.pingedLanes|=n.suspendedLanes&x;break}n.timeoutHandle=yu(vs.bind(null,n,Kn,lr),r);break}vs(n,Kn,lr);break;case 4:if(Or(n,f),(f&4194240)===f)break;for(r=n.eventTimes,x=-1;0<f;){var P=31-Ue(f);M=1<<P,P=r[P],P>x&&(x=P),f&=~M}if(f=x,f=tn()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*x_(f/1960))-f,10<f){n.timeoutHandle=yu(vs.bind(null,n,Kn,lr),f);break}vs(n,Kn,lr);break;case 5:vs(n,Kn,lr);break;default:throw Error(t(329))}}}return Zn(n,tn()),n.callbackNode===l?Jm.bind(null,n):null}function ph(n,r){var l=go;return n.current.memoizedState.isDehydrated&&(xs(n,r).flags|=256),n=Ol(n,r),n!==2&&(r=Kn,Kn=l,r!==null&&mh(r)),n}function mh(n){Kn===null?Kn=n:Kn.push.apply(Kn,n)}function v_(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var x=l[f],M=x.getSnapshot;x=x.value;try{if(!bi(M(),x))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Or(n,r){for(r&=~uh,r&=~Il,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-Ue(r),f=1<<l;n[l]=-1,r&=~f}}function e0(n){if((It&6)!==0)throw Error(t(327));ra();var r=jt(n,0);if((r&1)===0)return Zn(n,tn()),null;var l=Ol(n,r);if(n.tag!==0&&l===2){var f=dn(n);f!==0&&(r=f,l=ph(n,f))}if(l===1)throw l=mo,xs(n,0),Or(n,r),Zn(n,tn()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,vs(n,Kn,lr),Zn(n,tn()),null}function gh(n,r){var l=It;It|=1;try{return n(r)}finally{It=l,It===0&&(ia=tn()+500,hl&&Lr())}}function gs(n){Dr!==null&&Dr.tag===0&&(It&6)===0&&ra();var r=It;It|=1;var l=vi.transition,f=Et;try{if(vi.transition=null,Et=1,n)return n()}finally{Et=f,vi.transition=l,It=r,(It&6)===0&&Lr()}}function xh(){ai=na.current,Zt(na)}function xs(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,Yv(l)),pn!==null)for(l=pn.return;l!==null;){var f=l;switch(Tu(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&cl();break;case 3:Js(),Zt(qn),Zt(Nn),zu();break;case 5:ku(f);break;case 4:Js();break;case 13:Zt(nn);break;case 19:Zt(nn);break;case 10:Iu(f.type._context);break;case 22:case 23:xh()}l=l.return}if(bn=n,pn=n=zr(n.current,null),Ln=ai=r,yn=0,mo=null,uh=Il=ms=0,Kn=go=null,fs!==null){for(r=0;r<fs.length;r++)if(l=fs[r],f=l.interleaved,f!==null){l.interleaved=null;var x=f.next,M=l.pending;if(M!==null){var P=M.next;M.next=x,f.next=P}l.pending=f}fs=null}return n}function t0(n,r){do{var l=pn;try{if(Lu(),Sl.current=bl,Ml){for(var f=rn.memoizedState;f!==null;){var x=f.queue;x!==null&&(x.pending=null),f=f.next}Ml=!1}if(ps=0,En=_n=rn=null,lo=!1,co=0,ch.current=null,l===null||l.return===null){yn=1,mo=r,pn=null;break}e:{var M=n,P=l.return,H=l,q=r;if(r=Ln,H.flags|=32768,q!==null&&typeof q=="object"&&typeof q.then=="function"){var he=q,we=H,Te=we.tag;if((we.mode&1)===0&&(Te===0||Te===11||Te===15)){var Me=we.alternate;Me?(we.updateQueue=Me.updateQueue,we.memoizedState=Me.memoizedState,we.lanes=Me.lanes):(we.updateQueue=null,we.memoizedState=null)}var je=Tm(P);if(je!==null){je.flags&=-257,Cm(je,P,H,M,r),je.mode&1&&bm(M,he,r),r=je,q=he;var Ze=r.updateQueue;if(Ze===null){var Je=new Set;Je.add(q),r.updateQueue=Je}else Ze.add(q);break e}else{if((r&1)===0){bm(M,he,r),vh();break e}q=Error(t(426))}}else if(en&&H.mode&1){var on=Tm(P);if(on!==null){(on.flags&65536)===0&&(on.flags|=256),Cm(on,P,H,M,r),Ru(ea(q,H));break e}}M=q=ea(q,H),yn!==4&&(yn=2),go===null?go=[M]:go.push(M),M=P;do{switch(M.tag){case 3:M.flags|=65536,r&=-r,M.lanes|=r;var ae=wm(M,q,r);Kp(M,ae);break e;case 1:H=q;var ne=M.type,ce=M.stateNode;if((M.flags&128)===0&&(typeof ne.getDerivedStateFromError=="function"||ce!==null&&typeof ce.componentDidCatch=="function"&&(Fr===null||!Fr.has(ce)))){M.flags|=65536,r&=-r,M.lanes|=r;var Ie=Em(M,H,r);Kp(M,Ie);break e}}M=M.return}while(M!==null)}r0(l)}catch(nt){r=nt,pn===l&&l!==null&&(pn=l=l.return);continue}break}while(!0)}function n0(){var n=Ll.current;return Ll.current=bl,n===null?bl:n}function vh(){(yn===0||yn===3||yn===2)&&(yn=4),bn===null||(ms&268435455)===0&&(Il&268435455)===0||Or(bn,Ln)}function Ol(n,r){var l=It;It|=2;var f=n0();(bn!==n||Ln!==r)&&(lr=null,xs(n,r));do try{__();break}catch(x){t0(n,x)}while(!0);if(Lu(),It=l,Ll.current=f,pn!==null)throw Error(t(261));return bn=null,Ln=0,yn}function __(){for(;pn!==null;)i0(pn)}function y_(){for(;pn!==null&&!$c();)i0(pn)}function i0(n){var r=o0(n.alternate,n,ai);n.memoizedProps=n.pendingProps,r===null?r0(n):pn=r,ch.current=null}function r0(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=f_(l,r,ai),l!==null){pn=l;return}}else{if(l=d_(l,r),l!==null){l.flags&=32767,pn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{yn=6,pn=null;return}}if(r=r.sibling,r!==null){pn=r;return}pn=r=n}while(r!==null);yn===0&&(yn=5)}function vs(n,r,l){var f=Et,x=vi.transition;try{vi.transition=null,Et=1,S_(n,r,l,f)}finally{vi.transition=x,Et=f}return null}function S_(n,r,l,f){do ra();while(Dr!==null);if((It&6)!==0)throw Error(t(327));l=n.finishedWork;var x=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var M=l.lanes|l.childLanes;if(Xn(n,M),n===bn&&(pn=bn=null,Ln=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Ul||(Ul=!0,l0(re,function(){return ra(),null})),M=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||M){M=vi.transition,vi.transition=null;var P=Et;Et=1;var H=It;It|=4,ch.current=null,m_(n,l),Ym(l,n),Hv(vu),$o=!!xu,vu=xu=null,n.current=l,g_(l),Kc(),It=H,Et=P,vi.transition=M}else n.current=l;if(Ul&&(Ul=!1,Dr=n,Fl=x),M=n.pendingLanes,M===0&&(Fr=null),$e(l.stateNode),Zn(n,tn()),r!==null)for(f=n.onRecoverableError,l=0;l<r.length;l++)x=r[l],f(x.value,{componentStack:x.stack,digest:x.digest});if(Nl)throw Nl=!1,n=fh,fh=null,n;return(Fl&1)!==0&&n.tag!==0&&ra(),M=n.pendingLanes,(M&1)!==0?n===dh?xo++:(xo=0,dh=n):xo=0,Lr(),null}function ra(){if(Dr!==null){var n=er(Fl),r=vi.transition,l=Et;try{if(vi.transition=null,Et=16>n?16:n,Dr===null)var f=!1;else{if(n=Dr,Dr=null,Fl=0,(It&6)!==0)throw Error(t(331));var x=It;for(It|=4,Ke=n.current;Ke!==null;){var M=Ke,P=M.child;if((Ke.flags&16)!==0){var H=M.deletions;if(H!==null){for(var q=0;q<H.length;q++){var he=H[q];for(Ke=he;Ke!==null;){var we=Ke;switch(we.tag){case 0:case 11:case 15:po(8,we,M)}var Te=we.child;if(Te!==null)Te.return=we,Ke=Te;else for(;Ke!==null;){we=Ke;var Me=we.sibling,je=we.return;if(Gm(we),we===he){Ke=null;break}if(Me!==null){Me.return=je,Ke=Me;break}Ke=je}}}var Ze=M.alternate;if(Ze!==null){var Je=Ze.child;if(Je!==null){Ze.child=null;do{var on=Je.sibling;Je.sibling=null,Je=on}while(Je!==null)}}Ke=M}}if((M.subtreeFlags&2064)!==0&&P!==null)P.return=M,Ke=P;else e:for(;Ke!==null;){if(M=Ke,(M.flags&2048)!==0)switch(M.tag){case 0:case 11:case 15:po(9,M,M.return)}var ae=M.sibling;if(ae!==null){ae.return=M.return,Ke=ae;break e}Ke=M.return}}var ne=n.current;for(Ke=ne;Ke!==null;){P=Ke;var ce=P.child;if((P.subtreeFlags&2064)!==0&&ce!==null)ce.return=P,Ke=ce;else e:for(P=ne;Ke!==null;){if(H=Ke,(H.flags&2048)!==0)try{switch(H.tag){case 0:case 11:case 15:Pl(9,H)}}catch(nt){sn(H,H.return,nt)}if(H===P){Ke=null;break e}var Ie=H.sibling;if(Ie!==null){Ie.return=H.return,Ke=Ie;break e}Ke=H.return}}if(It=x,Lr(),ke&&typeof ke.onPostCommitFiberRoot=="function")try{ke.onPostCommitFiberRoot(oe,n)}catch{}f=!0}return f}finally{Et=l,vi.transition=r}}return!1}function s0(n,r,l){r=ea(l,r),r=wm(n,r,1),n=Nr(n,r,1),r=Vn(),n!==null&&(wt(n,1,r),Zn(n,r))}function sn(n,r,l){if(n.tag===3)s0(n,n,l);else for(;r!==null;){if(r.tag===3){s0(r,n,l);break}else if(r.tag===1){var f=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Fr===null||!Fr.has(f))){n=ea(l,n),n=Em(r,n,1),r=Nr(r,n,1),n=Vn(),r!==null&&(wt(r,1,n),Zn(r,n));break}}r=r.return}}function M_(n,r,l){var f=n.pingCache;f!==null&&f.delete(r),r=Vn(),n.pingedLanes|=n.suspendedLanes&l,bn===n&&(Ln&l)===l&&(yn===4||yn===3&&(Ln&130023424)===Ln&&500>tn()-hh?xs(n,0):uh|=l),Zn(n,r)}function a0(n,r){r===0&&((n.mode&1)===0?r=1:(r=tt,tt<<=1,(tt&130023424)===0&&(tt=4194304)));var l=Vn();n=sr(n,r),n!==null&&(wt(n,r,l),Zn(n,l))}function w_(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),a0(n,l)}function E_(n,r){var l=0;switch(n.tag){case 13:var f=n.stateNode,x=n.memoizedState;x!==null&&(l=x.retryLane);break;case 19:f=n.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(r),a0(n,l)}var o0;o0=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||qn.current)$n=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return $n=!1,h_(n,r,l);$n=(n.flags&131072)!==0}else $n=!1,en&&(r.flags&1048576)!==0&&Bp(r,dl,r.index);switch(r.lanes=0,r.tag){case 2:var f=r.type;Al(n,r),n=r.pendingProps;var x=js(r,Nn.current);Qs(r,l),x=Vu(null,r,f,n,x,l);var M=Gu();return r.flags|=1,typeof x=="object"&&x!==null&&typeof x.render=="function"&&x.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Yn(f)?(M=!0,ul(r)):M=!1,r.memoizedState=x.state!==null&&x.state!==void 0?x.state:null,Fu(r),x.updater=Tl,r.stateNode=x,x._reactInternals=r,$u(r,f,n,l),r=Ju(null,r,f,!0,M,l)):(r.tag=0,en&&M&&bu(r),Hn(null,r,x,l),r=r.child),r;case 16:f=r.elementType;e:{switch(Al(n,r),n=r.pendingProps,x=f._init,f=x(f._payload),r.type=f,x=r.tag=T_(f),n=Ci(f,n),x){case 0:r=Qu(null,r,f,n,l);break e;case 1:r=Nm(null,r,f,n,l);break e;case 11:r=Am(null,r,f,n,l);break e;case 14:r=Rm(null,r,f,Ci(f.type,n),l);break e}throw Error(t(306,f,""))}return r;case 0:return f=r.type,x=r.pendingProps,x=r.elementType===f?x:Ci(f,x),Qu(n,r,f,x,l);case 1:return f=r.type,x=r.pendingProps,x=r.elementType===f?x:Ci(f,x),Nm(n,r,f,x,l);case 3:e:{if(Um(r),n===null)throw Error(t(387));f=r.pendingProps,M=r.memoizedState,x=M.element,$p(n,r),_l(r,f,null,l);var P=r.memoizedState;if(f=P.element,M.isDehydrated)if(M={element:f,isDehydrated:!1,cache:P.cache,pendingSuspenseBoundaries:P.pendingSuspenseBoundaries,transitions:P.transitions},r.updateQueue.baseState=M,r.memoizedState=M,r.flags&256){x=ea(Error(t(423)),r),r=Fm(n,r,f,l,x);break e}else if(f!==x){x=ea(Error(t(424)),r),r=Fm(n,r,f,l,x);break e}else for(si=Ar(r.stateNode.containerInfo.firstChild),ri=r,en=!0,Ti=null,l=qp(r,null,f,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if($s(),f===x){r=or(n,r,l);break e}Hn(n,r,f,l)}r=r.child}return r;case 5:return Qp(r),n===null&&Au(r),f=r.type,x=r.pendingProps,M=n!==null?n.memoizedProps:null,P=x.children,_u(f,x)?P=null:M!==null&&_u(f,M)&&(r.flags|=32),Im(n,r),Hn(n,r,P,l),r.child;case 6:return n===null&&Au(r),null;case 13:return Dm(n,r,l);case 4:return Du(r,r.stateNode.containerInfo),f=r.pendingProps,n===null?r.child=Ks(r,null,f,l):Hn(n,r,f,l),r.child;case 11:return f=r.type,x=r.pendingProps,x=r.elementType===f?x:Ci(f,x),Am(n,r,f,x,l);case 7:return Hn(n,r,r.pendingProps,l),r.child;case 8:return Hn(n,r,r.pendingProps.children,l),r.child;case 12:return Hn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(f=r.type._context,x=r.pendingProps,M=r.memoizedProps,P=x.value,qt(gl,f._currentValue),f._currentValue=P,M!==null)if(bi(M.value,P)){if(M.children===x.children&&!qn.current){r=or(n,r,l);break e}}else for(M=r.child,M!==null&&(M.return=r);M!==null;){var H=M.dependencies;if(H!==null){P=M.child;for(var q=H.firstContext;q!==null;){if(q.context===f){if(M.tag===1){q=ar(-1,l&-l),q.tag=2;var he=M.updateQueue;if(he!==null){he=he.shared;var we=he.pending;we===null?q.next=q:(q.next=we.next,we.next=q),he.pending=q}}M.lanes|=l,q=M.alternate,q!==null&&(q.lanes|=l),Nu(M.return,l,r),H.lanes|=l;break}q=q.next}}else if(M.tag===10)P=M.type===r.type?null:M.child;else if(M.tag===18){if(P=M.return,P===null)throw Error(t(341));P.lanes|=l,H=P.alternate,H!==null&&(H.lanes|=l),Nu(P,l,r),P=M.sibling}else P=M.child;if(P!==null)P.return=M;else for(P=M;P!==null;){if(P===r){P=null;break}if(M=P.sibling,M!==null){M.return=P.return,P=M;break}P=P.return}M=P}Hn(n,r,x.children,l),r=r.child}return r;case 9:return x=r.type,f=r.pendingProps.children,Qs(r,l),x=gi(x),f=f(x),r.flags|=1,Hn(n,r,f,l),r.child;case 14:return f=r.type,x=Ci(f,r.pendingProps),x=Ci(f.type,x),Rm(n,r,f,x,l);case 15:return Pm(n,r,r.type,r.pendingProps,l);case 17:return f=r.type,x=r.pendingProps,x=r.elementType===f?x:Ci(f,x),Al(n,r),r.tag=1,Yn(f)?(n=!0,ul(r)):n=!1,Qs(r,l),Sm(r,f,x),$u(r,f,x,l),Ju(null,r,f,!0,n,l);case 19:return Om(n,r,l);case 22:return Lm(n,r,l)}throw Error(t(156,r.tag))};function l0(n,r){return jo(n,r)}function b_(n,r,l,f){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _i(n,r,l,f){return new b_(n,r,l,f)}function _h(n){return n=n.prototype,!(!n||!n.isReactComponent)}function T_(n){if(typeof n=="function")return _h(n)?1:0;if(n!=null){if(n=n.$$typeof,n===B)return 11;if(n===W)return 14}return 2}function zr(n,r){var l=n.alternate;return l===null?(l=_i(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function zl(n,r,l,f,x,M){var P=2;if(f=n,typeof n=="function")_h(n)&&(P=1);else if(typeof n=="string")P=5;else e:switch(n){case F:return _s(l.children,x,M,r);case E:P=8,x|=8;break;case I:return n=_i(12,l,r,x|2),n.elementType=I,n.lanes=M,n;case K:return n=_i(13,l,r,x),n.elementType=K,n.lanes=M,n;case ie:return n=_i(19,l,r,x),n.elementType=ie,n.lanes=M,n;case V:return Bl(l,x,M,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:P=10;break e;case U:P=9;break e;case B:P=11;break e;case W:P=14;break e;case ee:P=16,f=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=_i(P,l,r,x),r.elementType=n,r.type=f,r.lanes=M,r}function _s(n,r,l,f){return n=_i(7,n,f,r),n.lanes=l,n}function Bl(n,r,l,f){return n=_i(22,n,f,r),n.elementType=V,n.lanes=l,n.stateNode={isHidden:!1},n}function yh(n,r,l){return n=_i(6,n,null,r),n.lanes=l,n}function Sh(n,r,l){return r=_i(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function C_(n,r,l,f,x){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rn(0),this.expirationTimes=Rn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rn(0),this.identifierPrefix=f,this.onRecoverableError=x,this.mutableSourceEagerHydrationData=null}function Mh(n,r,l,f,x,M,P,H,q){return n=new C_(n,r,l,H,q),r===1?(r=1,M===!0&&(r|=8)):r=0,M=_i(3,null,null,r),n.current=M,M.stateNode=n,M.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fu(M),n}function A_(n,r,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:R,key:f==null?null:""+f,children:n,containerInfo:r,implementation:l}}function c0(n){if(!n)return Pr;n=n._reactInternals;e:{if(Bi(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Yn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Yn(l))return kp(n,l,r)}return r}function u0(n,r,l,f,x,M,P,H,q){return n=Mh(l,f,!0,n,x,M,P,H,q),n.context=c0(null),l=n.current,f=Vn(),x=kr(l),M=ar(f,x),M.callback=r??null,Nr(l,M,x),n.current.lanes=x,wt(n,x,f),Zn(n,f),n}function Hl(n,r,l,f){var x=r.current,M=Vn(),P=kr(x);return l=c0(l),r.context===null?r.context=l:r.pendingContext=l,r=ar(M,P),r.payload={element:n},f=f===void 0?null:f,f!==null&&(r.callback=f),n=Nr(x,r,P),n!==null&&(Pi(n,x,P,M),vl(n,x,P)),P}function Vl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function h0(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function wh(n,r){h0(n,r),(n=n.alternate)&&h0(n,r)}function R_(){return null}var f0=typeof reportError=="function"?reportError:function(n){console.error(n)};function Eh(n){this._internalRoot=n}Gl.prototype.render=Eh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Hl(n,r,null,null)},Gl.prototype.unmount=Eh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;gs(function(){Hl(null,n,null,null)}),r[tr]=null}};function Gl(n){this._internalRoot=n}Gl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Ht();n={blockedOn:null,target:n,priority:r};for(var l=0;l<br.length&&r!==0&&r<br[l].priority;l++);br.splice(l,0,n),l===0&&Qd(n)}};function bh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Wl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function d0(){}function P_(n,r,l,f,x){if(x){if(typeof f=="function"){var M=f;f=function(){var he=Vl(P);M.call(he)}}var P=u0(r,f,n,0,null,!1,!1,"",d0);return n._reactRootContainer=P,n[tr]=P.current,eo(n.nodeType===8?n.parentNode:n),gs(),P}for(;x=n.lastChild;)n.removeChild(x);if(typeof f=="function"){var H=f;f=function(){var he=Vl(q);H.call(he)}}var q=Mh(n,0,!1,null,null,!1,!1,"",d0);return n._reactRootContainer=q,n[tr]=q.current,eo(n.nodeType===8?n.parentNode:n),gs(function(){Hl(r,q,l,f)}),q}function Xl(n,r,l,f,x){var M=l._reactRootContainer;if(M){var P=M;if(typeof x=="function"){var H=x;x=function(){var q=Vl(P);H.call(q)}}Hl(r,P,n,x)}else P=P_(l,r,n,x,f);return Vl(P)}Ot=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=Pt(r.pendingLanes);l!==0&&(jn(r,l|1),Zn(r,tn()),(It&6)===0&&(ia=tn()+500,Lr()))}break;case 13:gs(function(){var f=sr(n,1);if(f!==null){var x=Vn();Pi(f,n,1,x)}}),wh(n,1)}},$t=function(n){if(n.tag===13){var r=sr(n,134217728);if(r!==null){var l=Vn();Pi(r,n,134217728,l)}wh(n,134217728)}},wi=function(n){if(n.tag===13){var r=kr(n),l=sr(n,r);if(l!==null){var f=Vn();Pi(l,n,r,f)}wh(n,r)}},Ht=function(){return Et},Ei=function(n,r){var l=Et;try{return Et=n,r()}finally{Et=l}},ut=function(n,r,l){switch(r){case"input":if(_t(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var f=l[r];if(f!==n&&f.form===n.form){var x=ll(f);if(!x)throw Error(t(90));Dt(f),_t(f,x)}}}break;case"textarea":ze(n,l);break;case"select":r=l.value,r!=null&&Ft(n,!!l.multiple,r,!1)}},Ne=gh,Se=gs;var L_={usingClientEntryPoint:!1,Events:[io,Ws,ll,xe,He,gh]},vo={findFiberByHostInstance:ls,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},I_={bundleType:vo.bundleType,version:vo.version,rendererPackageName:vo.rendererPackageName,rendererConfig:vo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Oa(n),n===null?null:n.stateNode},findFiberByHostInstance:vo.findFiberByHostInstance||R_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{oe=jl.inject(I_),ke=jl}catch{}}return Qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L_,Qn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bh(r))throw Error(t(200));return A_(n,r,null,l)},Qn.createRoot=function(n,r){if(!bh(n))throw Error(t(299));var l=!1,f="",x=f0;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onRecoverableError!==void 0&&(x=r.onRecoverableError)),r=Mh(n,1,!1,null,null,l,!1,f,x),n[tr]=r.current,eo(n.nodeType===8?n.parentNode:n),new Eh(r)},Qn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Oa(r),n=n===null?null:n.stateNode,n},Qn.flushSync=function(n){return gs(n)},Qn.hydrate=function(n,r,l){if(!Wl(r))throw Error(t(200));return Xl(null,n,r,!0,l)},Qn.hydrateRoot=function(n,r,l){if(!bh(n))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,x=!1,M="",P=f0;if(l!=null&&(l.unstable_strictMode===!0&&(x=!0),l.identifierPrefix!==void 0&&(M=l.identifierPrefix),l.onRecoverableError!==void 0&&(P=l.onRecoverableError)),r=u0(r,null,n,1,l??null,x,!1,M,P),n[tr]=r.current,eo(n),f)for(n=0;n<f.length;n++)l=f[n],x=l._getVersion,x=x(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,x]:r.mutableSourceEagerHydrationData.push(l,x);return new Gl(r)},Qn.render=function(n,r,l){if(!Wl(r))throw Error(t(200));return Xl(null,n,r,!1,l)},Qn.unmountComponentAtNode=function(n){if(!Wl(n))throw Error(t(40));return n._reactRootContainer?(gs(function(){Xl(null,null,n,!1,function(){n._reactRootContainer=null,n[tr]=null})}),!0):!1},Qn.unstable_batchedUpdates=gh,Qn.unstable_renderSubtreeIntoContainer=function(n,r,l,f){if(!Wl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Xl(n,r,l,!1,f)},Qn.version="18.3.1-next-f1338f8080-20240426",Qn}var S0;function V_(){if(S0)return Ah.exports;S0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Ah.exports=H_(),Ah.exports}var M0;function G_(){if(M0)return ql;M0=1;var a=V_();return ql.createRoot=a.createRoot,ql.hydrateRoot=a.hydrateRoot,ql}var W_=G_(),ge=Sd();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),j_=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase()),w0=a=>{const e=j_(a);return e.charAt(0).toUpperCase()+e.slice(1)},rx=(...a)=>a.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var q_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=ge.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:s="",children:o,iconNode:c,...u},h)=>ge.createElement("svg",{ref:h,...q_,width:e,height:e,stroke:a,strokeWidth:i?Number(t)*24/Number(e):t,className:rx("lucide",s),...u},[...c.map(([d,p])=>ge.createElement(d,p)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=(a,e)=>{const t=ge.forwardRef(({className:i,...s},o)=>ge.createElement(Y_,{ref:o,iconNode:e,className:rx(`lucide-${X_(w0(a))}`,`lucide-${a}`,i),...s}));return t.displayName=w0(a),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],sx=Mi("camera",$_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],Z_=Mi("circle-alert",K_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],J_=Mi("hand",Q_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],t1=Mi("mic-off",e1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],E0=Mi("mic",n1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]],r1=Mi("orbit",i1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],a1=Mi("refresh-cw",s1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],l1=Mi("rotate-ccw",o1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]],u1=Mi("sliders-horizontal",c1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],f1=Mi("sparkles",h1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196",key:"w8jjjt"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2",key:"1xawa7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],p1=Mi("video-off",d1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],g1=Mi("video",m1);function x1({onVideoReady:a}){const e=ge.useRef(null),[t,i]=ge.useState(""),[s,o]=ge.useState(!0),[c,u]=ge.useState(0),h=async()=>{try{if(o(!0),i(""),!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error("Camera API not supported in this browser. Please use a modern browser like Chrome, Firefox, or Edge.");const g=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480,facingMode:"user"},audio:!1});e.current&&(e.current.srcObject=g,e.current.onloadedmetadata=()=>{var m;(m=e.current)==null||m.play(),a(e.current),o(!1)})}catch(g){o(!1),g instanceof Error&&(g.name==="NotAllowedError"||g.name==="PermissionDeniedError"?i("Camera permission denied. Please click the camera icon in your browser's address bar and allow camera access, then click Retry below."):g.name==="NotFoundError"?i("No camera found. Please connect a camera to your device."):g.name==="NotReadableError"?i("Camera is already in use by another application. Please close other apps using the camera and try again."):g.name==="OverconstrainedError"?(i("Camera does not meet requirements. Trying with default settings..."),setTimeout(()=>{d()},1e3)):i("Error: "+g.message))}},d=async()=>{try{o(!0),i("");const g=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1});e.current&&(e.current.srcObject=g,e.current.onloadedmetadata=()=>{var m;(m=e.current)==null||m.play(),a(e.current),o(!1)})}catch{o(!1),i("Unable to access camera with default settings.")}},p=()=>{u(g=>g+1),h()};return ge.useEffect(()=>(h(),()=>{var g;(g=e.current)!=null&&g.srcObject&&e.current.srcObject.getTracks().forEach(y=>y.stop())}),[a]),Y.jsxs("div",{className:"relative",children:[Y.jsx("video",{ref:e,className:"w-48 h-36 rounded-lg border-2 border-white/20 shadow-lg bg-black",style:{transform:"scaleX(-1)"},playsInline:!0,muted:!0}),t&&Y.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center bg-black/95 rounded-lg p-3 gap-2",children:[Y.jsx(Z_,{className:"w-6 h-6 text-red-400"}),Y.jsx("p",{className:"text-[10px] text-red-400 text-center leading-tight",children:t}),Y.jsxs("button",{onClick:p,className:"mt-1 px-3 py-1 bg-white/10 hover:bg-white/20 rounded text-[10px] text-white flex items-center gap-1 transition-colors",children:[Y.jsx(a1,{className:"w-3 h-3"}),"Retry"]}),Y.jsx("a",{href:"https://support.google.com/chrome/answer/2693767",target:"_blank",rel:"noopener noreferrer",className:"text-[9px] text-blue-400 hover:text-blue-300 underline",children:"How to enable camera"})]}),s&&!t&&Y.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center bg-black/80 rounded-lg gap-2",children:[Y.jsx(sx,{className:"w-6 h-6 text-white/60 animate-pulse"}),Y.jsx("p",{className:"text-xs text-white/60",children:"Loading camera..."})]})]})}const v1=3,ax=400,_1=.75;function y1({selectedColors:a,hue:e,saturation:t,mode:i,onHueChange:s,onModeChange:o,autoHueEnabled:c,onAutoHueToggle:u}){const h=(d,p,g)=>{d=d/360,p=p/100,g=g/100;let m,y,v;if(p===0)m=y=v=g;else{const _=(C,T,L)=>(L<0&&(L+=1),L>1&&(L-=1),L<.16666666666666666?C+(T-C)*6*L:L<.5?T:L<.6666666666666666?C+(T-C)*(.6666666666666666-L)*6:C),S=g<.5?g*(1+p):g+p-g*p,b=2*g-S;m=_(b,S,d+.3333333333333333),y=_(b,S,d),v=_(b,S,d-.3333333333333333)}const w=_=>{const S=Math.round(_*255).toString(16);return S.length===1?"0"+S:S};return`#${w(m)}${w(y)}${w(v)}`};return Y.jsxs("div",{className:"w-full flex items-center gap-4 px-6 font-mono",children:[Y.jsxs("div",{className:"flex gap-1",children:[Y.jsx("button",{onClick:()=>o("black"),className:`px-2 py-1 text-[10px] rounded transition-all ${i==="black"?"bg-white/20 text-white":"bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60"}`,title:"1 Color (Fn key)",children:"1C"}),Y.jsx("button",{onClick:()=>o("contrast"),className:`px-2 py-1 text-[10px] rounded transition-all ${i==="contrast"?"bg-white/20 text-white":"bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60"}`,title:"2 Colors (Ctrl key)",children:"2C"}),Y.jsx("button",{onClick:()=>o("grayscale"),className:`px-2 py-1 text-[10px] rounded transition-all ${i==="grayscale"?"bg-white/20 text-white":"bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60"}`,title:"Black & White (Option/Alt key)",children:"B/W"})]}),i!=="grayscale"&&Y.jsxs("div",{className:"flex-1 relative h-6",children:[Y.jsx("div",{className:"absolute inset-0 rounded-full",style:{background:"linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)"}}),Y.jsx("input",{type:"range",min:"0",max:"360",value:e,onChange:d=>s(Number(d.target.value)),className:"vj-slider-bare absolute inset-0 w-full appearance-none bg-transparent cursor-pointer"}),Y.jsx("div",{className:"absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-white shadow-lg pointer-events-none",style:{left:`calc(${e/360*100}% - 10px)`,backgroundColor:h(e,t,50)}})]}),i!=="grayscale"&&Y.jsx("button",{onClick:u,className:`px-3 py-1 text-[10px] rounded transition-all whitespace-nowrap ${c?"bg-cyan-500/30 text-cyan-300 border border-cyan-400/50":"bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60"}`,title:"Auto-rotate hue palette",children:c?"⟳ AUTO":"AUTO"})]})}const ts={geometric:{pattern:"geometric",name:"Geometric",short:"Geometric",category:"2D",key:"1",description:"Rotating polygons with trails"},particles:{pattern:"particles",name:"Particles",short:"Particles",category:"2D",key:"2",description:"Dynamic particle system"},waves:{pattern:"waves",name:"Waves",short:"Waves",category:"2D",key:"3",description:"Flowing wave patterns"},technical:{pattern:"technical",name:"Technical Hand Tracker",short:"Tracker",category:"2D",key:"4",description:"Hand tracking visualization"},lottie:{pattern:"lottie",name:"Lottie Inspired",short:"Lottie",category:"2D",key:"5",description:"Animated circular patterns"},"lottie-classic":{pattern:"lottie-classic",name:"Classic Lottie",short:"Lottie 2",category:"2D",key:"Q",description:"Classic Lottie animation"},linefield:{pattern:"linefield",name:"Line Field",short:"Lines",category:"2D",key:"6",description:"Dynamic line fields"},chromatic:{pattern:"chromatic",name:"Chromatic Glow",short:"Chroma",category:"2D",key:"7",description:"RGB chromatic aberration"},halftone:{pattern:"halftone",name:"Halftone Matrix",short:"Halftone",category:"2D",key:"8",description:"Halftone dot patterns"},matrix:{pattern:"matrix",name:"Digital Grid",short:"Grid",category:"2D",key:"9",description:"Matrix-style grid"},distortedcamera:{pattern:"distortedcamera",name:"Distorted Camera",short:"Camera",category:"2D",key:"W",description:"Gesture-controlled camera distortion with chromatic effects"},thicklines:{pattern:"thicklines",name:"Thick Lines",short:"Blocks",category:"2D",key:"=",description:"Rotating blocks with thickness response"},flowfield:{pattern:"flowfield",name:"Flow Field",short:"Flow",category:"2D",key:"D",description:"Flowing vector field"},liquidchrome:{pattern:"liquidchrome",name:"Liquid Chrome",short:"Chrome",category:"2D",key:"-",description:"Iridescent liquid metal simulation"},glitch:{pattern:"glitch",name:"Glitch Network",short:"Glitch",category:"3D",key:"1",description:"Network glitch with perspective effects"},cyberstream:{pattern:"cyberstream",name:"Cyber Stream",short:"Cyber",category:"3D",key:"2",description:"Cyberpunk stream with depth perspective"},morphing:{pattern:"morphing",name:"Morphing Sphere",short:"Sphere",category:"3D",key:"=",description:"Three.js morphing icosphere"},cubewall:{pattern:"cubewall",name:"Cube Wall",short:"Cubes",category:"3D",key:"4",description:"Three.js cube grid waves"},facecloud:{pattern:"facecloud",name:"Op-Art Grid",short:"Op-Art",category:"3D",key:"5",description:"Op-art grid with perspective"},face:{pattern:"face",name:"Face Mesh",short:"Face",category:"3D",key:"-",description:"MediaPipe face tracking with glowing mesh"},"smokehand-torus":{pattern:"smokehand-torus",name:"Smoke Torus",short:"Torus",category:"3D",key:"8",description:"Particle smoke shaped around a torus"},"smokehand-hand":{pattern:"smokehand-hand",name:"Smoke Hand",short:"Hand",category:"3D",key:"7",description:"Particle smoke shaped around a hand model"},"network-cube":{pattern:"network-cube",name:"Network Cube",short:"Network",category:"3D",key:"9",description:"Sparse cubic constellation"},"elastic-net":{pattern:"elastic-net",name:"Elastic Net",short:"Elastic",category:"3D",key:"0",description:"Elastic neural network simulation"},ripple:{pattern:"ripple",name:"Water Ripple",short:"Ripple",category:"TD",key:"1",description:"Camera refracted through a height field your hands leave behind"},text:{pattern:"text",name:"Kinetic Type",short:"Type",category:"TD",key:"2",description:"Your words, extruded and pushed around by your hands"},video:{pattern:"video",name:"Clip",short:"Clip",category:"TD",key:"3",description:"Your own footage, sheared into sliding bands"},mosaic:{pattern:"mosaic",name:"Mosaic",short:"Mosaic",category:"TD",key:"4",description:"The same file rebuilt out of letters, dots, blocks or bars"},digitalblocks:{pattern:"digitalblocks",name:"Digital Horizon",short:"Horizon",category:"2D",key:"0",description:"Glitchy digital data sorting"}},Es=10,ox="vj-setlist";function ko(a){return a===9?"0":String(a+1)}function xf(a){return a==="0"?9:a>="1"&&a<="9"?Number(a)-1:-1}const Lh=["geometric","waves","particles","halftone","ripple","flowfield"];function S1(a){return typeof a=="string"&&a in ts}function M1(){try{const a=localStorage.getItem(ox);if(a===null)return Lh;const e=JSON.parse(a);return Array.isArray(e)?e.filter(S1).filter((i,s,o)=>o.indexOf(i)===s).slice(0,Es):Lh}catch{return Lh}}function w1(a){try{localStorage.setItem(ox,JSON.stringify(a))}catch{}}function E1(a){return a.gesture==="pinch"?"PINCH":a.fingerCount===void 0?null:a.fingerCount===2?"MED":a.fingerCount>=5?"FAST":`${a.fingerCount}F`}function b0({label:a,hand:e}){const t=E1(e);return Y.jsxs("div",{children:[Y.jsx("div",{className:"text-white/90",children:a}),t&&Y.jsx("div",{className:"text-cyan-400",children:t})]})}function Yl({label:a,active:e,warn:t,onClick:i,title:s,children:o}){return Y.jsxs("button",{onClick:i,title:s,className:"flex flex-col items-center gap-1 group/btn",children:[Y.jsx("span",{className:`w-8 h-8 rounded-full transition-all flex items-center justify-center group-hover/btn:scale-105 group-active/btn:scale-95 ${e?t?"bg-cyan-400 text-black shadow-lg shadow-cyan-400/40":"bg-white text-black shadow-lg shadow-white/40":"bg-white/10 text-white/60 group-hover/btn:bg-white/20 group-hover/btn:text-white"}`,children:o}),Y.jsx("span",{className:`text-[8px] tracking-widest transition-colors ${e?"text-white/80":"text-white/35"}`,children:a})]})}function b1({currentPattern:a,onPatternChange:e,layers:t,selectedLayer:i,onPatternHold:s,onLayerCycle:o,showCamera:c,onCameraToggle:u,handData:h,selectedColors:d,hue:p,saturation:g,colorMode:m,onHueChange:y,onSaturationChange:v,onColorModeChange:w,autoHueEnabled:_,onAutoHueToggle:S,set:b,onOpenLibrary:C,audioEnabled:T,onAudioToggle:L,audioSensitivity:R,onAudioSensitivityChange:F,audioControlSpeed:E,onAudioControlSpeedChange:I,audioControlDensity:k,onAudioControlDensityChange:U,audioTriggerBeats:B,onAudioTriggerBeatsChange:K,motion:ie,onMotionChange:W,idleDrive:ee,onIdleDriveToggle:V,fxEnabled:G,fxActive:$,onFxToggle:X}){var Ee;const z=ge.useRef(null),Z=()=>{z.current&&(clearTimeout(z.current.timer),z.current=null)},me=Q=>{Z(),z.current={pattern:Q,fired:!1,timer:window.setTimeout(()=>{z.current&&(z.current.fired=!0),s(Q)},ax)}},Ae=Q=>{const ve=z.current;!ve||ve.pattern!==Q||(clearTimeout(ve.timer),z.current=null,ve.fired||e(Q))};return Y.jsxs(Y.Fragment,{children:[Y.jsx("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 z-50",children:Y.jsx("div",{className:"bg-black/70 backdrop-blur-sm rounded-full py-2 px-6 border border-white/20 font-mono",children:Y.jsxs("div",{className:"flex items-center gap-4",children:[Y.jsx("button",{onClick:C,title:"Back to the library to change the set (Esc)",className:"px-3 py-1 rounded text-[10px] tracking-wider text-white/40 transition-all hover:bg-white/10 hover:text-white/80",children:"SET"}),Y.jsx("div",{className:"w-px h-6 bg-white/20"}),Y.jsx("div",{className:"flex items-center gap-1.5",children:b.map((Q,ve)=>{const pe=t.findIndex(rt=>rt.pattern===Q),Oe=pe===i,et=pe!==-1&&!Oe;return Y.jsxs("button",{onPointerDown:()=>me(Q),onPointerUp:()=>Ae(Q),onPointerLeave:Z,className:"relative flex w-[46px] shrink-0 flex-col items-center gap-0.5 group/set",title:`${ts[Q].name} (${ko(ve)})${pe!==-1?` — layer ${pe+1}`:""} · hold to stack`,children:[Y.jsxs("span",{className:`relative flex h-7 w-7 items-center justify-center rounded-full text-xs transition-all ${Oe?"bg-white text-black shadow-lg shadow-white/50":et?"bg-white/25 text-white ring-1 ring-emerald-400/70":"bg-white/10 text-white/60 group-hover/set:bg-white/20 group-hover/set:text-white/90"}`,children:[ko(ve),pe!==-1&&t.length>1&&Y.jsx("span",{className:"absolute -right-1 -top-1 h-3 w-3 rounded-full bg-emerald-400 text-center text-[7px] leading-3 text-black",children:pe+1})]}),Y.jsx("span",{className:`w-full truncate text-center text-[8px] leading-none transition-colors ${Oe?"text-white/85":"text-white/35 group-hover/set:text-white/65"}`,children:ts[Q].short})]},Q)})}),Y.jsx("div",{className:"w-px h-6 bg-white/20"}),Y.jsxs("div",{className:"flex items-center gap-1.5",title:"How hard the hands drive every visual (- and =)",children:[Y.jsx("span",{className:"text-[8px] tracking-widest text-white/35",children:"HANDS"}),Y.jsx("input",{type:"range","aria-label":"Hand motion",min:0,max:2,step:.05,value:ie,onChange:Q=>W(parseFloat(Q.target.value)),className:"vj-slider h-1 w-16 cursor-pointer appearance-none rounded-full focus:outline-none",style:{background:`linear-gradient(to right, rgba(255,255,255,0.85) ${ie/2*100}%, rgba(255,255,255,0.15) ${ie/2*100}%)`}}),Y.jsxs("span",{className:`w-7 text-[9px] tabular-nums ${ie>1.35?"text-amber-300":ie<.65?"text-cyan-300":"text-white/55"}`,children:[Math.round(ie*100),"%"]})]}),t.length>1&&Y.jsxs(Y.Fragment,{children:[Y.jsx("div",{className:"w-px h-6 bg-white/20"}),Y.jsxs("button",{onClick:o,title:"The layer the sliders and colours act on (L) — fade it with [ and ]",className:"px-2 py-1 rounded text-[10px] whitespace-nowrap bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 transition-all",children:["L",i+1,"/",t.length,Y.jsxs("span",{className:"text-emerald-300/60",children:[" ",Math.round((((Ee=t[i])==null?void 0:Ee.opacity)??1)*100),"%"]})]})]})]})})}),Y.jsxs("div",{className:"absolute bottom-[25px] left-6 right-6 z-50 flex items-end gap-4 font-mono pointer-events-none",children:[Y.jsx("div",{className:"shrink-0 pointer-events-auto",children:Y.jsxs("div",{className:"bg-black/70 backdrop-blur-sm rounded-2xl py-2 px-3 border border-white/20 flex items-end gap-2.5 w-fit",children:[Y.jsx(Yl,{label:"CAM",active:c,onClick:u,title:"Show the camera preview (C)",children:c?Y.jsx(g1,{className:"w-3.5 h-3.5"}):Y.jsx(p1,{className:"w-3.5 h-3.5"})}),Y.jsx(Yl,{label:"MIC",active:T,onClick:L,title:"Audio-reactive mode: drive the visuals from the microphone (A)",children:T?Y.jsx(E0,{className:"w-3.5 h-3.5"}):Y.jsx(t1,{className:"w-3.5 h-3.5"})}),Y.jsx(Yl,{label:"AUTO",active:ee,onClick:V,title:"Auto-motion: keep hand-driven visuals moving when no hands are tracked (I)",children:Y.jsx(r1,{className:"w-3.5 h-3.5"})}),Y.jsx("div",{className:"w-px h-8 bg-white/15 self-center"}),Y.jsx(Yl,{label:"FX",active:G&&$,warn:G&&$,onClick:X,title:G?"Post effects are on. Click to bypass the whole chain, keeping every setting (X)":"Post effects bypassed. Click to bring them back (X)",children:Y.jsx(f1,{className:"w-3.5 h-3.5"})})]})}),Y.jsx("div",{className:"flex-1 min-w-0 flex justify-center pointer-events-none",children:Y.jsx("div",{className:"bg-black/70 backdrop-blur-sm rounded-full py-2 px-6 border border-white/20 max-w-4xl w-full pointer-events-auto",children:Y.jsx(y1,{selectedColors:d,hue:p,saturation:g,mode:m,onHueChange:y,onModeChange:w,autoHueEnabled:_,onAutoHueToggle:S})})}),!T&&Y.jsxs("div",{className:"shrink-0 bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-white/20 space-y-2 text-xs min-w-[200px] font-mono animate-in fade-in duration-300 pointer-events-auto",children:[Y.jsx("div",{className:"text-white/80 mb-2",children:"HAND"}),Y.jsxs("div",{className:"space-y-1",children:[h.left&&Y.jsx(b0,{label:"L HAND",hand:h.left}),h.right&&Y.jsx(b0,{label:"R HAND",hand:h.right}),h.clapping&&Y.jsx("div",{className:"text-red-500 text-base animate-bounce",children:"CLAP!"}),!h.left&&!h.right&&Y.jsx("div",{className:"text-white/50",children:"NO HANDS"})]}),Y.jsxs("div",{className:"text-white/50 text-[10px] mt-2 pt-2 border-t border-white/20",children:["OPEN=FOLLOW",Y.jsx("br",{}),"PINCH=SLOW 2F=MED 5F=FAST",Y.jsx("br",{}),"CLAP=EXPLODE"]})]}),T&&Y.jsx("div",{className:"shrink-0 animate-in slide-in-from-right-5 fade-in duration-300 pointer-events-auto",children:Y.jsxs("div",{className:"bg-black/70 backdrop-blur-sm rounded-xl p-4 border border-white/20 font-mono flex flex-col gap-4 w-[160px]",children:[Y.jsxs("div",{className:"flex items-center gap-2 border-b border-white/10 pb-2",children:[Y.jsx(E0,{className:"w-3.5 h-3.5 text-white/90 animate-pulse"}),Y.jsx("span",{className:"text-[10px] font-bold text-white/80 tracking-wider",children:"AUDIO"})]}),Y.jsxs("div",{className:"space-y-1 group",children:[Y.jsxs("div",{className:"flex justify-between text-[9px] text-white/50 font-medium",children:[Y.jsx("span",{className:"group-hover:text-white/80 transition-colors",children:"GAIN"}),Y.jsxs("span",{className:"text-white",children:[Math.round(R*100),"%"]})]}),Y.jsx("div",{className:"relative h-4 flex items-center",children:Y.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:R,onChange:Q=>F(parseFloat(Q.target.value)),className:"vj-slider w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer focus:outline-none",style:{backgroundImage:`linear-gradient(to right, white 0%, white ${R*100}%, rgba(255,255,255,0.2) ${R*100}%)`}})})]}),Y.jsxs("div",{className:"flex flex-col gap-1.5",children:[Y.jsxs("button",{onClick:()=>I(!E),className:`flex justify-between items-center px-2 py-1.5 rounded-md text-[9px] font-bold transition-all border ${E?"bg-white text-black border-white shadow-[0_0_10px_rgba(255,255,255,0.3)]":"bg-transparent text-white/50 border-white/10 hover:bg-white/10 hover:text-white"}`,children:[Y.jsx("span",{children:"SPEED"}),Y.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${E?"bg-black":"bg-white/30"}`})]}),Y.jsxs("button",{onClick:()=>U(!k),className:`flex justify-between items-center px-2 py-1.5 rounded-md text-[9px] font-bold transition-all border ${k?"bg-white text-black border-white shadow-[0_0_10px_rgba(255,255,255,0.3)]":"bg-transparent text-white/50 border-white/10 hover:bg-white/10 hover:text-white"}`,children:[Y.jsx("span",{children:"DENSITY"}),Y.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${k?"bg-black":"bg-white/30"}`})]}),Y.jsxs("button",{onClick:()=>K(!B),className:`flex justify-between items-center px-2 py-1.5 rounded-md text-[9px] font-bold transition-all border ${B?"bg-white text-black border-white shadow-[0_0_10px_rgba(255,255,255,0.3)]":"bg-transparent text-white/50 border-white/10 hover:bg-white/10 hover:text-white"}`,children:[Y.jsx("span",{children:"BEATS"}),Y.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${B?"bg-black":"bg-white/30"}`})]})]})]})})]})]})}const T1="modulepreload",C1=function(a,e){return new URL(a,e).href},T0={},lx=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let c=function(p){return Promise.all(p.map(g=>Promise.resolve(g).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};const u=document.getElementsByTagName("link"),h=document.querySelector("meta[property=csp-nonce]"),d=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));s=c(t.map(p=>{if(p=C1(p,i),p in T0)return;T0[p]=!0;const g=p.endsWith(".css"),m=g?'[rel="stylesheet"]':"";if(!!i)for(let w=u.length-1;w>=0;w--){const _=u[w];if(_.href===p&&(!g||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${m}`))return;const v=document.createElement("link");if(v.rel=g?"stylesheet":T1,g||(v.as="script"),v.crossOrigin="",v.href=p,d&&v.setAttribute("nonce",d),document.head.appendChild(v),g)return new Promise((w,_)=>{v.addEventListener("load",w),v.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${p}`)))})}))}function o(c){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=c,window.dispatchEvent(u),!u.defaultPrevented)throw c}return s.then(c=>{for(const u of c||[])u.status==="rejected"&&o(u.reason);return e().catch(o)})},C0=30,A0=.15;function A1({videoElement:a,onHandData:e}){const t=ge.useRef(null),i=ge.useRef(!1),s=ge.useRef(-1),o=ge.useRef(null),c=ge.useRef([]),u=ge.useRef([]),h=ge.useRef({}),d=ge.useRef([]),p=ge.useRef(null);return ge.useEffect(()=>{let g=!0;const m=async()=>{if(!i.current)try{console.log("✋ Initializing MediaPipe Hand Landmarker (Tasks Vision API)...");const _=await lx(()=>import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14"),[],import.meta.url),{HandLandmarker:S,FilesetResolver:b}=_,C=await b.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm");t.current=await S.createFromOptions(C,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",delegate:"GPU"},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.7,minHandPresenceConfidence:.5,minTrackingConfidence:.5}),console.log("✅ Hand tracking initialized (Tasks Vision API)"),i.current=!0,g&&y()}catch(_){console.error("❌ Error initializing hand tracking:",_)}},y=()=>{const _=()=>{if(!g||!t.current||!a)return;const S=performance.now();if(a.currentTime!==s.current){s.current=a.currentTime;try{const b=t.current.detectForVideo(a,S);v(b)}catch(b){console.error("Hand detection error:",b)}}o.current=requestAnimationFrame(_)};_()},v=_=>{const S=Date.now(),b={left:null,right:null};if(_.landmarks&&_.handedness&&_.landmarks.length>0)if(_.handedness.forEach((C,T)=>{const L=_.landmarks[T],R=C[0].categoryName.toLowerCase(),F=L[9],E={x:1-F.x,y:F.y},I=P1(L),k=R1(L),U=R==="left"?u.current:c.current;let B=0;if(U.length>0){const G=U[U.length-1],$=E.x-G.position.x,X=E.y-G.position.y,z=Math.sqrt($*$+X*X),Z=(S-G.timestamp)/1e3;B=Z>0?z/Z:0,B=Math.min(B*2,3)}const K=R==="left"?"right":"left";(U.length>0?U[U.length-1].gesture:null)!==I&&(h.current[K]=S);const W=h.current[K]||S,ee=(S-W)/1e3;U.push({position:E,gesture:I,timestamp:S}),U.length>10&&U.shift(),d.current.push({x:E.x,y:E.y,hand:K});const V={position:E,gesture:I,pinchDistance:I==="pinch"?L1(L):void 0,velocity:B,holdDuration:ee,fingerCount:k,landmarks:L.map(G=>({x:1-G.x,y:G.y,z:G.z}))};R==="left"?b.right=V:b.left=V}),b.left&&b.right){const C=b.left.position.x-b.right.position.x,T=b.left.position.y-b.right.position.y,L=Math.sqrt(C*C+T*T);b.distanceBetweenHands=L,L<A0&&(b.clapping=!0,b.clapIntensity=1-L/A0)}else p.current=null;d.current.length>C0&&(d.current=d.current.slice(-C0)),b.gestureTrail=[...d.current],e(b)},w=()=>{a&&a.readyState>=2?m():setTimeout(w,100)};return w(),()=>{if(g=!1,o.current!==null&&cancelAnimationFrame(o.current),t.current)try{t.current.close(),t.current=null}catch(_){console.warn("Error closing hand landmarker:",_)}i.current=!1}},[a,e]),null}function R1(a){if(!a||a.length<21)return 0;const e=a[0];a[9];let t=0;const i=a[4];a[3];const s=a[2],o=a[1],c=Math.sqrt(Math.pow(i.x-o.x,2)+Math.pow(i.y-o.y,2)),u=Math.sqrt(Math.pow(s.x-o.x,2)+Math.pow(s.y-o.y,2));c>u*1.2&&t++;const h=[{tip:8,pip:6,mcp:5},{tip:12,pip:10,mcp:9},{tip:16,pip:14,mcp:13},{tip:20,pip:18,mcp:17}],d=a[9];d.y-e.y,d.z-e.z;for(const p of h){const g=a[p.tip],m=a[p.pip],y=a[p.mcp],v=g.y<y.y-.02,w=Math.sqrt(Math.pow(g.x-e.x,2)+Math.pow(g.y-e.y,2)+Math.pow(g.z-e.z,2)),_=Math.sqrt(Math.pow(m.x-e.x,2)+Math.pow(m.y-e.y,2)+Math.pow(m.z-e.z,2)),S=w>_*1.05,b={x:y.x-m.x,y:y.y-m.y,z:y.z-m.z},C={x:g.x-m.x,y:g.y-m.y,z:g.z-m.z},T=Math.sqrt(b.x**2+b.y**2+b.z**2),L=Math.sqrt(C.x**2+C.y**2+C.z**2);if(T>0&&L>0){const F=b.x/T*(C.x/L)+b.y/T*(C.y/L)+b.z/T*(C.z/L)<-.3;(v||S||F)&&t++}else(v||S)&&t++}return t}function P1(a){if(!a||a.length<21)return"none";const e=a[9],t=a[4],i=a[8],s=a[12],o=a[16],c=a[20],u=a[6],h=a[10],d=a[14],p=a[18];if(Math.sqrt(Math.pow(t.x-i.x,2)+Math.pow(t.y-i.y,2)+Math.pow(t.z-i.z,2))<.06)return"pinch";const m=Math.sqrt(Math.pow(i.x-e.x,2)+Math.pow(i.y-e.y,2)+Math.pow(i.z-e.z,2)),y=Math.sqrt(Math.pow(u.x-e.x,2)+Math.pow(u.y-e.y,2)+Math.pow(u.z-e.z,2)),v=m>y*1.1,w=Math.sqrt(Math.pow(s.x-e.x,2)+Math.pow(s.y-e.y,2)+Math.pow(s.z-e.z,2)),_=Math.sqrt(Math.pow(h.x-e.x,2)+Math.pow(h.y-e.y,2)+Math.pow(h.z-e.z,2)),S=w>_*1.1,b=Math.sqrt(Math.pow(o.x-e.x,2)+Math.pow(o.y-e.y,2)+Math.pow(o.z-e.z,2)),C=Math.sqrt(Math.pow(d.x-e.x,2)+Math.pow(d.y-e.y,2)+Math.pow(d.z-e.z,2)),T=b>C*1.1,L=Math.sqrt(Math.pow(c.x-e.x,2)+Math.pow(c.y-e.y,2)+Math.pow(c.z-e.z,2)),R=Math.sqrt(Math.pow(p.x-e.x,2)+Math.pow(p.y-e.y,2)+Math.pow(p.z-e.z,2)),F=L>R*1.1,E=[v,S,T,F].filter(Boolean).length;return E>=3?"open":E<=1?"fist":"none"}function L1(a){const e=a[4],t=a[8];return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)+Math.pow(e.z-t.z,2))}function I1({onGrant:a,onSkip:e}){return Y.jsx("div",{className:"fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center",children:Y.jsx("div",{className:"bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-xl rounded-2xl p-8 max-w-md border border-white/20 shadow-2xl",children:Y.jsxs("div",{className:"text-center space-y-6",children:[Y.jsx("div",{className:"flex justify-center",children:Y.jsx("div",{className:"w-20 h-20 bg-purple-600/30 rounded-full flex items-center justify-center",children:Y.jsx(sx,{className:"w-10 h-10 text-purple-300"})})}),Y.jsxs("div",{children:[Y.jsx("h2",{className:"text-2xl text-white mb-2",children:"Camera Access Required"}),Y.jsx("p",{className:"text-white/70 text-sm",children:"This VJ app needs camera access to track your hand movements and gestures for interactive visual control."})]}),Y.jsx("div",{className:"bg-black/30 rounded-lg p-4 space-y-2 text-left",children:Y.jsxs("div",{className:"flex items-start gap-3",children:[Y.jsx(J_,{className:"w-5 h-5 text-green-400 mt-0.5 flex-shrink-0"}),Y.jsxs("div",{className:"text-sm",children:[Y.jsx("div",{className:"text-white/90",children:"Hand Tracking"}),Y.jsx("div",{className:"text-white/60 text-xs",children:"Real-time gesture recognition"})]})]})}),Y.jsxs("div",{className:"flex gap-3",children:[Y.jsx("button",{onClick:e,className:"flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all",children:"Skip"}),Y.jsx("button",{onClick:a,className:"flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg transition-all font-medium",children:"Allow Access"})]}),Y.jsx("p",{className:"text-white/50 text-xs",children:"Your camera feed is processed locally on your device. No data is sent to external servers."})]})})})}function Jn(a){return Number.isFinite(a)?Math.round(Math.min(255,Math.max(0,a))).toString(16).padStart(2,"0"):"00"}const vf={physics:{initialVelocity:4,damping:.98},size:{baseRange:[100,200],growthMultiplier:1.5,shrinkMultiplier:.2,transitionSpeed:.3},glow:{layers:2,expansion:.4,layerFade:.3},emission:{openHandRate:.5,closedHandRate:.05},trail:{fadeAlpha:.3},limits:{maxParticles:50},explosion:{particleCount:50,speedRange:[5,20],sizeMultiplier:1.5,forceMultiplier:10,growthFactor:.8,vibrationDuration:.25,cooldown:1e3,flashDelay:20},controls:{fingerCountSpeed:{oneFinger:.01,twoFingers:1,threeFingers:1.4,fourFingers:1.7,fiveFingers:2},openOpacity:1,closedOpacity:1,fadeOutRate:.08}};function Po(a,e){let t=a;for(const i of e.split(".")){if(typeof t!="object"||t===null)return;t=t[i]}return typeof t=="number"?t:void 0}function zi(a,e){const t=structuredClone(a);for(const[i,s]of Object.entries(e)){if(!Number.isFinite(s)||Po(a,i)===void 0)continue;const o=i.split("."),c=o.pop();let u=t;for(const h of o)u=u[h];u[c]=s}return t}function R0(a){if(typeof a!="object"||a===null||Array.isArray(a))return{};const e={};for(const[t,i]of Object.entries(a)){if(typeof i!="object"||i===null||Array.isArray(i))continue;const s={};for(const[o,c]of Object.entries(i))typeof c=="number"&&Number.isFinite(c)&&(s[o]=c);Object.keys(s).length>0&&(e[t]=s)}return e}let cx=1,ux=0;function N1(a,e){cx=e,ux+=a*e}function ni(){return cx}function Gc(){return ux}class Ih{constructor(e,t,i,s,o){D(this,"x");D(this,"y");D(this,"vx");D(this,"vy");D(this,"size");D(this,"color");D(this,"baseSize");D(this,"targetSize");D(this,"alpha",1);this.x=e,this.y=t;const c=o.physics.initialVelocity;this.vx=(Math.random()-.5)*c,this.vy=(Math.random()-.5)*c;const[u,h]=o.size.baseRange;this.baseSize=(u+Math.random()*(h-u))*s,this.size=this.baseSize,this.targetSize=this.baseSize,this.color=i}update(e,t,i,s){e?(this.targetSize=this.baseSize*s.size.growthMultiplier,this.alpha=s.controls.openOpacity,t>0&&(this.vx+=(Math.random()-.5)*t*s.explosion.forceMultiplier*i,this.vy+=(Math.random()-.5)*t*s.explosion.forceMultiplier*i,this.targetSize=this.baseSize*(1.2+t*s.explosion.growthFactor))):(this.targetSize=this.baseSize*s.size.shrinkMultiplier,this.alpha=Math.max(0,this.alpha-s.controls.fadeOutRate)),this.size+=(this.targetSize-this.size)*s.size.transitionSpeed,this.x+=this.vx*i,this.y+=this.vy*i,this.vx*=s.physics.damping,this.vy*=s.physics.damping}}class U1{constructor(e,t){D(this,"cfg",vf);D(this,"canvas");D(this,"ctx");D(this,"particles",[]);D(this,"time",0);D(this,"vibrationTimer",0);D(this,"isExploding",!1);this.canvas=e,this.ctx=t}setParams(e){this.cfg=zi(vf,e)}render(e,t){this.time+=.016*ni(),this.ctx.fillStyle=`rgba(0, 0, 0, ${this.cfg.trail.fadeAlpha})`,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&!this.isExploding&&(this.createExplosionParticles(t),this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.004,i=Math.max(0,this.vibrationTimer));let s=this.cfg.controls.fingerCountSpeed.twoFingers,o=!1,c=!1,u=0,h=0;e.left&&(o=e.left.gesture==="open",u=e.left.fingerCount||0,e.left.gesture==="pinch"&&(u=1)),e.right&&(c=e.right.gesture==="open",h=e.right.fingerCount||0,e.right.gesture==="pinch"&&(h=1));const d=o||c,p=Math.max(u,h);if(p===1?s=this.cfg.controls.fingerCountSpeed.oneFinger:p===2?s=this.cfg.controls.fingerCountSpeed.twoFingers:p===3?s=this.cfg.controls.fingerCountSpeed.threeFingers:p===4?s=this.cfg.controls.fingerCountSpeed.fourFingers:p>=5&&(s=this.cfg.controls.fingerCountSpeed.fiveFingers),e.left){const m=e.left.gesture==="open"?this.cfg.emission.openHandRate:this.cfg.emission.closedHandRate;Math.random()<m&&this.particles.push(new Ih(e.left.position.x*this.canvas.width,e.left.position.y*this.canvas.height,t[Math.floor(Math.random()*t.length)],1,this.cfg))}if(e.right){const m=e.right.gesture==="open"?this.cfg.emission.openHandRate:this.cfg.emission.closedHandRate;Math.random()<m&&this.particles.push(new Ih(e.right.position.x*this.canvas.width,e.right.position.y*this.canvas.height,t[Math.floor(Math.random()*t.length)],1,this.cfg))}this.particles=this.particles.filter(g=>{if(g.update(d,i,s,this.cfg),g.alpha<.01)return!1;this.ctx.save(),this.ctx.globalAlpha=g.alpha;for(let m=0;m<this.cfg.glow.layers;m++){const y=g.size*(1+m*this.cfg.glow.expansion),v=this.ctx.createRadialGradient(g.x,g.y,0,g.x,g.y,y),w=(1-m*this.cfg.glow.layerFade)*g.alpha;v.addColorStop(0,g.color+Jn(w*255)),v.addColorStop(.5,g.color+Jn(w*150)),v.addColorStop(1,g.color+"00"),this.ctx.fillStyle=v,this.ctx.beginPath(),this.ctx.arc(g.x,g.y,y,0,Math.PI*2),this.ctx.fill()}return this.ctx.restore(),!0}),this.particles.length>this.cfg.limits.maxParticles&&(this.particles=this.particles.slice(-this.cfg.limits.maxParticles))}createExplosionParticles(e){const t=this.canvas.width/2,i=this.canvas.height/2;for(let s=0;s<this.cfg.explosion.particleCount;s++){const o=Math.random()*Math.PI*2,[c,u]=this.cfg.explosion.speedRange,h=c+Math.random()*(u-c),d=new Ih(t,i,e[Math.floor(Math.random()*e.length)],this.cfg.explosion.sizeMultiplier,this.cfg);d.vx=Math.cos(o)*h,d.vy=Math.sin(o)*h,this.particles.push(d)}this.ctx.fillStyle="#FFFFFFDD",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),setTimeout(()=>{this.ctx.fillStyle=e[0]+"80",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)},this.cfg.explosion.flashDelay),this.vibrationTimer=this.cfg.explosion.vibrationDuration,this.isExploding=!0,setTimeout(()=>{this.isExploding=!1},this.cfg.explosion.cooldown)}}const _f={trail:{fadeAlpha:.1,lineThickness:2},fingerCountSpeed:{oneFinger:.003,normalFingers:1,fiveFingers:2},fingerCountStrokeWidth:{oneFinger:1,twoFingers:4.5,normalFingers:1.5,fiveFingers:6},complexity:{baseSides:3,leftHandMultiplier:1,rightHandMultiplier:.5,maxSides:12,minSides:3},vibration:{flashDuration:.8,shakeAmountX:40,shakeAmountY:40},polygon:{baseSize:100,strokeWidth:2},layers:{count:5,sizeGrowth:.3,rotationOffset:.5,baseOpacity:.3,opacityFade:.05},bridge:{thickness:5,waveAmplitude:30},animation:{baseRotationMultiplier:.01}};class P0{constructor(e,t){D(this,"cfg",_f);D(this,"canvas");D(this,"ctx");D(this,"time",0);D(this,"vibrationTimer",0);this.canvas=e,this.ctx=t}setParams(e){this.cfg=zi(_f,e)}render(e,t){var w,_,S,b;this.time+=.016*ni(),this.ctx.fillStyle=`rgba(0, 0, 0, ${this.cfg.trail.fadeAlpha})`,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&(this.ctx.fillStyle="#FFFFFFCC",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.vibrationTimer=this.cfg.vibration.flashDuration),this.vibrationTimer>0&&(this.vibrationTimer-=.016,i=Math.max(0,this.vibrationTimer));let s=1,o=this.cfg.complexity.baseSides,c=1;if(e.left&&e.left.gesture==="open"){const C=e.left.fingerCount||2;C===1?(s=this.cfg.fingerCountSpeed.oneFinger,c=this.cfg.fingerCountStrokeWidth.oneFinger):C===2?(s=this.cfg.fingerCountSpeed.normalFingers,c=this.cfg.fingerCountStrokeWidth.twoFingers):C===5?(s=this.cfg.fingerCountSpeed.fiveFingers,c=this.cfg.fingerCountStrokeWidth.fiveFingers):(s=this.cfg.fingerCountSpeed.normalFingers,c=this.cfg.fingerCountStrokeWidth.normalFingers),o=Math.floor(this.cfg.complexity.baseSides+C*this.cfg.complexity.leftHandMultiplier)}if(e.left&&e.left.gesture==="pinch"&&(s=this.cfg.fingerCountSpeed.oneFinger,c=this.cfg.fingerCountStrokeWidth.oneFinger,o=Math.floor(this.cfg.complexity.baseSides+1*this.cfg.complexity.leftHandMultiplier)),e.right&&e.right.gesture==="open"){const C=e.right.fingerCount||2;let T,L;C===1?(T=this.cfg.fingerCountSpeed.oneFinger,L=this.cfg.fingerCountStrokeWidth.oneFinger):C===2?(T=this.cfg.fingerCountSpeed.normalFingers,L=this.cfg.fingerCountStrokeWidth.twoFingers):C===5?(T=this.cfg.fingerCountSpeed.fiveFingers,L=this.cfg.fingerCountStrokeWidth.fiveFingers):(T=this.cfg.fingerCountSpeed.normalFingers,L=this.cfg.fingerCountStrokeWidth.normalFingers),s*=T,c=Math.max(c,L),o+=Math.floor(C*this.cfg.complexity.rightHandMultiplier)}e.right&&e.right.gesture==="pinch"&&(s*=this.cfg.fingerCountSpeed.oneFinger,c=Math.max(c,this.cfg.fingerCountStrokeWidth.oneFinger),o+=Math.floor(1*this.cfg.complexity.rightHandMultiplier));const u=this.time*s*this.cfg.animation.baseRotationMultiplier,h=i>0?(Math.random()-.5)*this.cfg.vibration.shakeAmountX*i:0,d=i>0?(Math.random()-.5)*this.cfg.vibration.shakeAmountY*i:0;this.drawGestureTrails(e,t);const p=(w=e.left)!=null&&w.position.x?e.left.position.x*this.canvas.width+h:this.canvas.width/2,g=(_=e.left)!=null&&_.position.y?e.left.position.y*this.canvas.height+d:this.canvas.height/2,m=(S=e.right)!=null&&S.position.x?e.right.position.x*this.canvas.width+h:this.canvas.width/2+100,y=(b=e.right)!=null&&b.position.y?e.right.position.y*this.canvas.height+d:this.canvas.height/2,v=this.cfg.polygon.baseSize*(1+i);for(let C=0;C<this.cfg.layers.count;C++){const T=v*(1+C*this.cfg.layers.sizeGrowth),L=u+C*this.cfg.layers.rotationOffset;e.left&&e.left.gesture==="open"&&this.drawPolygon(p,g,Math.max(this.cfg.complexity.minSides,Math.min(this.cfg.complexity.maxSides,o+C)),T+C*30,L,t[C%t.length],this.cfg.layers.baseOpacity-C*this.cfg.layers.opacityFade,c),e.right&&e.right.gesture==="open"&&this.drawPolygon(m,y,Math.max(this.cfg.complexity.minSides,Math.min(this.cfg.complexity.maxSides,o+C)),T+C*30,-L,t[(C+2)%t.length],this.cfg.layers.baseOpacity-C*this.cfg.layers.opacityFade,c)}e.left&&e.right&&e.left.gesture==="open"&&e.right.gesture==="open"&&this.drawBridge(p,g,m,y,t,v,o)}drawGestureTrails(e,t){if(!e.gestureTrail||e.gestureTrail.length<2)return;const i=e.gestureTrail;for(let s=1;s<i.length;s++){const o=i[s-1],c=i[s],u=s/i.length,h=c.hand==="left"?t[0]:t[2];this.ctx.strokeStyle=h+Jn(u*100),this.ctx.lineWidth=this.cfg.trail.lineThickness*u,this.ctx.lineCap="round",this.ctx.beginPath(),this.ctx.moveTo(o.x*this.canvas.width,o.y*this.canvas.height),this.ctx.lineTo(c.x*this.canvas.width,c.y*this.canvas.height),this.ctx.stroke()}}drawPolygon(e,t,i,s,o,c,u,h){this.ctx.save(),this.ctx.translate(e,t),this.ctx.rotate(o),this.ctx.beginPath();for(let p=0;p<=i;p++){const g=p/i*Math.PI*2,m=Math.cos(g)*s,y=Math.sin(g)*s;p===0?this.ctx.moveTo(m,y):this.ctx.lineTo(m,y)}this.ctx.closePath();const d=this.ctx.createRadialGradient(0,0,0,0,0,s);d.addColorStop(0,c+Jn(u*255)),d.addColorStop(1,c+"00"),this.ctx.fillStyle=d,this.ctx.fill(),this.ctx.strokeStyle=c+Jn(u*200),this.ctx.lineWidth=this.cfg.polygon.strokeWidth*h,this.ctx.stroke(),this.ctx.restore()}drawBridge(e,t,i,s,o,c,u){const h=this.ctx.createLinearGradient(e,t,i,s);o.forEach((d,p)=>{h.addColorStop(p/(o.length-1),d+"80")}),this.ctx.strokeStyle=h,this.ctx.lineWidth=this.cfg.bridge.thickness,this.ctx.lineCap="round",this.ctx.beginPath();for(let d=0;d<=u;d++){const p=d/u,g=e+(i-e)*p,m=t+(s-t)*p,y=Math.sin(p*Math.PI*4+this.time*2)*this.cfg.bridge.waveAmplitude,v=-(s-t)/Math.hypot(i-e,s-t),w=(i-e)/Math.hypot(i-e,s-t);d===0?this.ctx.moveTo(g+v*y,m+w*y):this.ctx.lineTo(g+v*y,m+w*y)}this.ctx.stroke()}}const yf={fingerCountSpeed:{oneFinger:.05,normalFingers:1,fiveFingers:1.5,maxSpeed:2},wave:{baseAmplitude:50,maxAmplitude:250,baseFrequency:.01,maxFrequency:.05,segments:200,lineThickness:3},fingerAmplitude:{oneFingerMultiplier:.1,twoFingersMultiplier:.6,threeFingersMultiplier:1.2,fourFingersMultiplier:2.5,fiveFingersMultiplier:4,normalFingersMultiplier:.3},gesture:{leftOpenHandBoost:3,rightOpenHandBoost:1.5,leftFistAmplitude:20,rightFistReduction:.5,pinchBaseFrequency:.005,pinchLeftMultiplier:.1,pinchRightMultiplier:.05,pinchLeftYOffsetMultiplier:-150,pinchRightYOffsetMultiplier:-150},velocity:{intensityMultiplier:2},hold:{durationThreshold:2,amplitudeBoost:2},distance:{scaleMultiplier:2},waveCount:{active:7,idle:3},layers:{primarySpeed:2,secondarySpeed:3,tertiarySpeed:1,secondaryAmplitude:.5,tertiaryAmplitude:.3},handInfluence:{strength:.5,radius:200},focalPoint:{baseSize:20,pulseSpeed:5,pulseAmount:.1,glowLayers:3},visual:{backgroundTint:"20",clapFlashOpacity:"30",fillOpacity:50}};class F1{constructor(e,t){D(this,"cfg",yf);D(this,"canvas");D(this,"ctx");D(this,"time",0);D(this,"bgGradient",null);D(this,"needsGradientUpdate",!0);this.canvas=e,this.ctx=t}setParams(e){this.cfg=zi(yf,e)}render(e,t){var v,w,_,S;this.time+=.016*ni(),this.time>1e3&&(this.time=this.time%1e3),this.needsGradientUpdate&&(this.bgGradient=this.ctx.createLinearGradient(0,0,0,this.canvas.height),this.bgGradient.addColorStop(0,"#000000"),this.bgGradient.addColorStop(1,t[0]+this.cfg.visual.backgroundTint),this.needsGradientUpdate=!1),this.ctx.fillStyle=this.bgGradient,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=this.cfg.wave.baseAmplitude,s=this.cfg.wave.baseFrequency,o=1,c=1,u=1,h=0;if(e.left){Math.max(0,Math.min(1,e.left.position.x||.5)),Math.max(0,Math.min(1,e.left.position.y||.5));const b=e.left.velocity||0,C=Math.max(0,Math.min(b,1));c*=1+C*this.cfg.velocity.intensityMultiplier;let T=e.left.fingerCount||0;e.left.gesture==="pinch"&&(T=1),T===1?(u=this.cfg.fingerCountSpeed.oneFinger,i*=this.cfg.fingerAmplitude.oneFingerMultiplier):T===2?(u=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.twoFingersMultiplier):T===3?(u=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.threeFingersMultiplier):T===4?(u=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.fourFingersMultiplier):T>=5&&(u=this.cfg.fingerCountSpeed.fiveFingers,i*=this.cfg.fingerAmplitude.fiveFingersMultiplier),(e.left.holdDuration||0)>this.cfg.hold.durationThreshold&&(i*=this.cfg.hold.amplitudeBoost),e.left.gesture==="open"?i*=this.cfg.gesture.leftOpenHandBoost*c:e.left.gesture==="fist"?i=this.cfg.gesture.leftFistAmplitude:e.left.gesture==="pinch"&&(s=this.cfg.gesture.pinchBaseFrequency+(e.left.pinchDistance||0)*this.cfg.gesture.pinchLeftMultiplier,h=(e.left.pinchDistance||0)*this.cfg.gesture.pinchLeftYOffsetMultiplier)}if(e.right){Math.max(0,Math.min(1,e.right.position.x||.5)),Math.max(0,Math.min(1,e.right.position.y||.5));const b=e.right.velocity||0,C=Math.max(0,Math.min(b,1));c*=1+C*this.cfg.velocity.intensityMultiplier;let T=e.right.fingerCount||0;e.right.gesture==="pinch"&&(T=1);let L=1;T===1?(L=this.cfg.fingerCountSpeed.oneFinger,i*=this.cfg.fingerAmplitude.oneFingerMultiplier):T===2?(L=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.twoFingersMultiplier):T===3?(L=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.threeFingersMultiplier):T===4?(L=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.fourFingersMultiplier):T>=5&&(L=this.cfg.fingerCountSpeed.fiveFingers,i*=this.cfg.fingerAmplitude.fiveFingersMultiplier),u*=L,(e.right.holdDuration||0)>this.cfg.hold.durationThreshold&&(i*=this.cfg.hold.amplitudeBoost),e.right.gesture==="open"?i*=this.cfg.gesture.rightOpenHandBoost*c:e.right.gesture==="fist"?i*=this.cfg.gesture.rightFistReduction:e.right.gesture==="pinch"&&(s+=(e.right.pinchDistance||0)*this.cfg.gesture.pinchRightMultiplier,h=(e.right.pinchDistance||0)*this.cfg.gesture.pinchRightYOffsetMultiplier)}c=Math.min(c,3),u=Math.min(u,this.cfg.fingerCountSpeed.maxSpeed),i=Math.min(i,this.cfg.wave.maxAmplitude),s=Math.min(s,this.cfg.wave.maxFrequency),isFinite(i)||(i=this.cfg.wave.baseAmplitude),isFinite(s)||(s=this.cfg.wave.baseFrequency),isFinite(u)||(u=1),e.distanceBetweenHands&&(o=.5+e.distanceBetweenHands*this.cfg.distance.scaleMultiplier);const d=e.left||e.right?this.cfg.waveCount.active:this.cfg.waveCount.idle,p=((v=e.left)==null?void 0:v.fingerCount)||0,g=((w=e.right)==null?void 0:w.fingerCount)||0,m=Math.max(p,g);let y=1;m>=4&&(y=.6);for(let b=0;b<d;b++){const C=this.canvas.height/(d+1)*(b+1)+h,T=b/d*Math.PI*2,L=((_=e.left)==null?void 0:_.position.x)??0,R=((S=e.right)==null?void 0:S.position.x)??1,F=Math.max(0,Math.min(1,L))*this.canvas.width,E=Math.max(0,Math.min(1,R))*this.canvas.width;this.drawWave(C,i*o,s,this.time*u+T,t[b%t.length],F,E,b/d,y)}if(e.left){const b=Math.max(0,Math.min(1,e.left.position.x||.5)),C=Math.max(0,Math.min(1,e.left.position.y||.5));this.drawFocalPoint(b*this.canvas.width,C*this.canvas.height,t[0],o,i)}if(e.right){const b=Math.max(0,Math.min(1,e.right.position.x||.5)),C=Math.max(0,Math.min(1,e.right.position.y||.5));this.drawFocalPoint(b*this.canvas.width,C*this.canvas.height,t[2%t.length],o,i)}}drawWave(e,t,i,s,o,c,u,h,d){this.ctx.beginPath();const p=Math.floor(this.cfg.wave.segments*d);t=Math.min(t,150);for(let v=0;v<=p;v++){const w=v/p*this.canvas.width,_=Math.sin(w*i+s*this.cfg.layers.primarySpeed)*t,S=Math.sin(w*i*2+s*this.cfg.layers.secondarySpeed)*(t*this.cfg.layers.secondaryAmplitude),b=Math.sin(w*i*.5+s*this.cfg.layers.tertiarySpeed)*(t*this.cfg.layers.tertiaryAmplitude);let C=0;const T=Math.abs(w-c),L=Math.abs(w-u),R=-T/this.cfg.handInfluence.radius,F=-L/this.cfg.handInfluence.radius;R>-10&&(C+=t*this.cfg.handInfluence.strength*Math.exp(R)),F>-10&&(C+=t*this.cfg.handInfluence.strength*Math.exp(F)),C=Math.min(C,80);let E=e+_+S+b+C;E=Math.max(-50,Math.min(this.canvas.height+50,E)),isFinite(E)&&(v===0?this.ctx.moveTo(w,E):this.ctx.lineTo(w,E))}const g=Math.max(0,Math.min(1,h)),m=this.ctx.createLinearGradient(0,0,this.canvas.width,0);m.addColorStop(0,o+Jn(g*100)),m.addColorStop(.5,o+Jn(g*255)),m.addColorStop(1,o+Jn(g*100)),this.ctx.strokeStyle=m,this.ctx.lineWidth=this.cfg.wave.lineThickness,this.ctx.stroke(),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.closePath();const y=this.ctx.createLinearGradient(0,e,0,this.canvas.height);y.addColorStop(0,o+Jn(g*this.cfg.visual.fillOpacity)),y.addColorStop(1,o+"00"),this.ctx.fillStyle=y,this.ctx.fill()}drawFocalPoint(e,t,i,s,o){const c=this.cfg.focalPoint.baseSize*s+Math.sin(this.time*this.cfg.focalPoint.pulseSpeed)*o*this.cfg.focalPoint.pulseAmount,u=Math.max(.1,c);for(let h=0;h<this.cfg.focalPoint.glowLayers;h++){const d=this.ctx.createRadialGradient(e,t,0,e,t,u*(h+1));d.addColorStop(0,i+"AA"),d.addColorStop(1,i+"00"),this.ctx.fillStyle=d,this.ctx.beginPath(),this.ctx.arc(e,t,u*(h+1),0,Math.PI*2),this.ctx.fill()}}}class D1{constructor(e,t){D(this,"canvas");D(this,"ctx");D(this,"time",0);D(this,"nodes",[]);D(this,"glitchBlocks",[]);D(this,"pixelSize",20);D(this,"vibrationTimer",0);D(this,"glitchIntensity",0);D(this,"isExploding",!1);this.canvas=e,this.ctx=t;const i=40;for(let s=0;s<i;s++){const o=Math.random()*e.width,c=Math.random()*e.height,u={x:o,y:c,targetX:o,targetY:c,vx:0,vy:0,size:4+Math.random()*8,connections:[],waveform:Array.from({length:50},()=>Math.random()*2-1),attractedToHand:null};this.nodes.push(u)}this.updateConnections()}updateConnections(){this.nodes.forEach(e=>e.connections=[]),this.nodes.forEach((e,t)=>{this.nodes.forEach((i,s)=>{t!==s&&Math.hypot(e.x-i.x,e.y-i.y)<200&&e.connections.length<4&&e.connections.push(s)})})}render(e,t){this.time+=.016*ni(),this.ctx.fillStyle="rgba(0, 0, 0, 0.1)",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&!this.isExploding&&(this.vibrationTimer=1,this.glitchIntensity=1,this.createGlitchExplosion(t),this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.016,i=Math.max(0,this.vibrationTimer)),this.glitchIntensity>0&&(this.glitchIntensity-=.01);let s=1,o=!1,c=0,u=0,h=0,d=0,p=!1,g=!1,m=2,y=2;if(e.left&&e.left.gesture==="open"){o=!0,p=!0;const v=e.left.fingerCount||2;m=v,v===1?s=.01:v===5?s=2:s=1,c=e.left.position.x*this.canvas.width,u=e.left.position.y*this.canvas.height}if(e.left&&e.left.gesture==="pinch"&&(o=!0,p=!0,m=1,s=.01,c=e.left.position.x*this.canvas.width,u=e.left.position.y*this.canvas.height),e.right&&e.right.gesture==="open"){o=!0,g=!0;const v=e.right.fingerCount||2;y=v;let w;v===1?w=.01:v===5?w=2:w=1,s*=w,h=e.right.position.x*this.canvas.width,d=e.right.position.y*this.canvas.height}e.right&&e.right.gesture==="pinch"&&(o=!0,g=!0,y=1,s*=.01,h=e.right.position.x*this.canvas.width,d=e.right.position.y*this.canvas.height),this.nodes.forEach((v,w)=>{if(o){if(p&&g){const b=Math.hypot(v.x-c,v.y-u),C=Math.hypot(v.x-h,v.y-d);b<C?(v.attractedToHand="left",v.targetX=c+Math.cos(w*.5+this.time*s)*100,v.targetY=u+Math.sin(w*.5+this.time*s)*100):(v.attractedToHand="right",v.targetX=h+Math.cos(w*.5+this.time*s)*100,v.targetY=d+Math.sin(w*.5+this.time*s)*100)}else if(p){v.attractedToHand="left";const b=w/this.nodes.length*Math.PI*2+this.time*s,C=50+w%3*60;v.targetX=c+Math.cos(b)*C,v.targetY=u+Math.sin(b)*C}else if(g){v.attractedToHand="right";const b=w/this.nodes.length*Math.PI*2+this.time*s,C=50+w%3*60;v.targetX=h+Math.cos(b)*C,v.targetY=d+Math.sin(b)*C}const _=v.targetX-v.x,S=v.targetY-v.y;v.vx+=_*.05*s,v.vy+=S*.05*s}else{v.targetX+=(Math.random()-.5)*2,v.targetY+=(Math.random()-.5)*2;const _=v.targetX-v.x,S=v.targetY-v.y;v.vx+=_*.01,v.vy+=S*.01}i>0&&(v.vx+=(Math.random()-.5)*i*40,v.vy+=(Math.random()-.5)*i*40),v.vx*=.85,v.vy*=.85,v.x+=v.vx,v.y+=v.vy,v.x<0&&(v.x=this.canvas.width),v.x>this.canvas.width&&(v.x=0),v.y<0&&(v.y=this.canvas.height),v.y>this.canvas.height&&(v.y=0),v.waveform.shift(),v.waveform.push(Math.sin(this.time*s*2+v.x*.01)*(o?2:.5))}),this.time%.5<.016&&this.updateConnections(),this.drawNodeConnections(t,i,p,g,c,u,h,d),this.drawNodes(t,i),this.drawWaveforms(t,s),this.drawHandIndicators(e,t,m,y),this.drawGlitchBlocks(t),this.glitchIntensity>.3&&this.drawScreenGlitch(),o&&Math.random()<.03*s&&this.spawnGlitchBlock(t)}drawNodeConnections(e,t,i,s,o,c,u,h){this.nodes.forEach((d,p)=>{if(d.attractedToHand==="left"&&i){this.ctx.beginPath(),this.ctx.moveTo(d.x,d.y),this.ctx.lineTo(o,c);const g=this.ctx.createLinearGradient(d.x,d.y,o,c);g.addColorStop(0,e[0]+"80"),g.addColorStop(1,e[1]+"FF"),this.ctx.strokeStyle=g,this.ctx.lineWidth=2+t*3,this.ctx.stroke()}if(d.attractedToHand==="right"&&s){this.ctx.beginPath(),this.ctx.moveTo(d.x,d.y),this.ctx.lineTo(u,h);const g=this.ctx.createLinearGradient(d.x,d.y,u,h);g.addColorStop(0,e[2]+"80"),g.addColorStop(1,e[3]+"FF"),this.ctx.strokeStyle=g,this.ctx.lineWidth=2+t*3,this.ctx.stroke()}d.connections.forEach(g=>{const m=this.nodes[g];if(!m)return;this.ctx.beginPath(),this.ctx.moveTo(d.x,d.y),this.ctx.lineTo(m.x,m.y);const y=Math.floor(p/this.nodes.length*e.length);this.ctx.strokeStyle=e[y]+"40",this.ctx.lineWidth=1+t*2,this.ctx.stroke()})})}drawNodes(e,t){this.nodes.forEach((i,s)=>{const o=Math.floor(s/this.nodes.length*e.length),c=i.size*(1+t*.5),u=this.ctx.createRadialGradient(i.x,i.y,0,i.x,i.y,c);u.addColorStop(0,e[o]+"FF"),u.addColorStop(.5,e[(o+1)%e.length]+"AA"),u.addColorStop(1,e[o]+"00"),this.ctx.fillStyle=u,this.ctx.beginPath(),this.ctx.arc(i.x,i.y,c,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="#FFFFFF80",this.ctx.beginPath(),this.ctx.arc(i.x,i.y,c*.3,0,Math.PI*2),this.ctx.fill()})}drawWaveforms(e,t){this.nodes.forEach((i,s)=>{const o=Math.floor(s/this.nodes.length*e.length);this.ctx.beginPath(),this.ctx.strokeStyle=e[o]+"60",this.ctx.lineWidth=2;for(let c=0;c<i.waveform.length-1;c++){const u=i.x+c-i.waveform.length/2,h=i.y+i.waveform[c]*20;c===0?this.ctx.moveTo(u,h):this.ctx.lineTo(u,h)}this.ctx.stroke()})}drawHandIndicators(e,t,i,s){if(e.left&&e.left.gesture==="open"){const o=e.left.position.x*this.canvas.width,c=e.left.position.y*this.canvas.height,u=30+Math.sin(this.time*3)*10;this.ctx.strokeStyle=t[0]+"AA",this.ctx.lineWidth=3,this.ctx.beginPath(),this.ctx.arc(o,c,u,0,Math.PI*2),this.ctx.stroke(),this.ctx.fillStyle=t[0],this.ctx.font="20px monospace",this.ctx.fillText(`${i}`,o-10,c+5)}if(e.right&&e.right.gesture==="open"){const o=e.right.position.x*this.canvas.width,c=e.right.position.y*this.canvas.height,u=30+Math.sin(this.time*3)*10;this.ctx.strokeStyle=t[2]+"AA",this.ctx.lineWidth=3,this.ctx.beginPath(),this.ctx.arc(o,c,u,0,Math.PI*2),this.ctx.stroke(),this.ctx.fillStyle=t[2],this.ctx.font="20px monospace",this.ctx.fillText(`${s}`,o-10,c+5)}}drawGlitchBlocks(e){this.glitchBlocks=this.glitchBlocks.filter(t=>(t.life-=.016,t.life>0?(this.ctx.fillStyle=t.color+Jn(t.life*255),this.ctx.fillRect(t.x,t.y,t.width,t.height),!0):!1))}spawnGlitchBlock(e){this.glitchBlocks.push({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height,width:20+Math.random()*100,height:10+Math.random()*50,color:e[Math.floor(Math.random()*e.length)],life:.5+Math.random()*.5})}createGlitchExplosion(e){for(let t=0;t<50;t++)this.spawnGlitchBlock(e);this.ctx.fillStyle="#FFFFFF60",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.nodes.forEach(t=>{t.vx=(Math.random()-.5)*50,t.vy=(Math.random()-.5)*50})}drawScreenGlitch(){const e=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height),t=Math.floor(Math.random()*20)-10;this.ctx.putImageData(e,t,0);for(let i=0;i<5;i++){const s=Math.random()*this.canvas.height,o=5+Math.random()*20,c=this.ctx.getImageData(0,s,this.canvas.width,o),u=(Math.random()-.5)*100;this.ctx.putImageData(c,u,s)}}}class k1{constructor(e,t){D(this,"canvas");D(this,"ctx");D(this,"fragments",[]);D(this,"hearts",[]);D(this,"glitchIntensity",0);D(this,"lastHandsTouching",!1);D(this,"handsTouchingTime",0);D(this,"gracePeriod",0);this.canvas=e,this.ctx=t}render(e,t){this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);const i=this.checkHandsTouching(e);i?(this.handsTouchingTime+=1,this.gracePeriod=30,this.spawnHearts(e)):this.gracePeriod>0?(this.gracePeriod-=1,this.handsTouchingTime+=1):this.handsTouchingTime=0,this.lastHandsTouching=i,this.updateHearts(),this.renderHearts(),this.glitchIntensity*=.95,e.left&&e.left.landmarks&&this.renderHandFromLandmarks(e.left.landmarks,"left"),e.right&&e.right.landmarks&&this.renderHandFromLandmarks(e.right.landmarks,"right"),this.applyNoiseOverlay(),(this.glitchIntensity>.1||Math.random()<.05)&&this.applyGlitchEffect()}renderHandFromLandmarks(e,t){const s=this.canvas.width/2,o=this.canvas.height/2,c=e.map(p=>({x:s+(p.x*this.canvas.width-s)*1.8,y:o+(p.y*this.canvas.height-o)*1.8,z:p.z})),u=c[0],h=180*1.8,d={x:u.x,y:u.y+h,z:u.z};this.fillHandWithDots(c,u,d),this.drawHandSkeleton(c),this.drawTechnicalMarkers(u.x,u.y)}fillHandWithDots(e,t,i){const c=e.map(m=>m.x),u=e.map(m=>m.y),h=Math.min(...c,i.x)-50,d=Math.max(...c,i.x)+50,p=Math.min(...u)-50,g=Math.max(...u,i.y)+50;for(let m=p;m<g;m+=7)for(let y=h;y<d;y+=7){const v=this.getDistanceToHandSkeleton(y,m,e,t,i);if(v.inside){const S=1-v.distance/45,b=Math.pow(S,1.5),C=v.zDepth,T=b*(.7+C*.3);if(T<.15)continue;const L=Math.floor(T*255),R=Math.max(.3,Math.min(1,T*1.2)),F=(Math.random()-.5)*8*this.glitchIntensity,E=(Math.random()-.5)*8*this.glitchIntensity,I=.8+Math.random()*.2;this.ctx.fillStyle=`rgba(${L}, ${L}, ${L}, ${R*I})`,this.ctx.beginPath(),this.ctx.arc(y+F,m+E,1.5,0,Math.PI*2),this.ctx.fill(),T>.8&&Math.random()<.15&&(this.ctx.fillStyle=`rgba(255, 255, 255, ${R*1.3})`,this.ctx.beginPath(),this.ctx.arc(y+F,m+E,1.5*1.2,0,Math.PI*2),this.ctx.fill())}}}getDistanceToHandSkeleton(e,t,i,s,o){const c=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[0,9],[9,10],[10,11],[11,12],[0,13],[13,14],[14,15],[15,16],[0,17],[17,18],[18,19],[19,20],[5,9],[9,13],[13,17]];let u=1/0,h=0;for(const[m,y]of c){const v=i[m],w=i[y],_=this.distanceToSegment(e,t,v.x,v.y,w.x,w.y);u=Math.min(u,_),h=(v.z+w.z)/2}const d=this.distanceToSegment(e,t,s.x,s.y,o.x,o.y);return u=Math.min(u,d),h=(s.z+o.z)/2,{inside:u<45,distance:u,zDepth:h}}distanceToSegment(e,t,i,s,o,c){const u=o-i,h=c-s,d=u*u+h*h;if(d===0)return Math.sqrt((e-i)*(e-i)+(t-s)*(t-s));let p=((e-i)*u+(t-s)*h)/d;p=Math.max(0,Math.min(1,p));const g=i+p*u,m=s+p*h;return Math.sqrt((e-g)*(e-g)+(t-m)*(t-m))}drawHandSkeleton(e){this.ctx.strokeStyle="rgba(255, 255, 255, 0.3)",this.ctx.lineWidth=1,this.ctx.setLineDash([4,4]);const t=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[0,9],[9,10],[10,11],[11,12],[0,13],[13,14],[14,15],[15,16],[0,17],[17,18],[18,19],[19,20],[5,9],[9,13],[13,17],[17,5]];this.ctx.beginPath();for(const[i,s]of t){const o=e[i],c=e[s],u=(Math.random()-.5)*5*this.glitchIntensity,h=(Math.random()-.5)*5*this.glitchIntensity,d=(Math.random()-.5)*5*this.glitchIntensity,p=(Math.random()-.5)*5*this.glitchIntensity;this.ctx.moveTo(o.x+u,o.y+h),this.ctx.lineTo(c.x+d,c.y+p)}this.ctx.stroke(),this.ctx.setLineDash([]),this.ctx.fillStyle="rgba(255, 255, 255, 0.7)",e.forEach(i=>{this.ctx.beginPath(),this.ctx.arc(i.x,i.y,2,0,Math.PI*2),this.ctx.fill()})}drawTechnicalMarkers(e,t){this.ctx.strokeStyle="rgba(255, 255, 255, 0.5)",this.ctx.lineWidth=1;const i=15,s=80;[[e-s,t-s],[e+s,t-s],[e-s,t+s],[e+s,t+s]].forEach(([u,h])=>{this.ctx.beginPath(),this.ctx.moveTo(u,h),this.ctx.lineTo(u+(u<e?i:-i),h),this.ctx.moveTo(u,h),this.ctx.lineTo(u,h+(h<t?i:-i)),this.ctx.stroke()}),this.ctx.strokeStyle="rgba(255, 255, 255, 0.7)",this.ctx.lineWidth=1.5,this.ctx.beginPath(),this.ctx.moveTo(e-12,t),this.ctx.lineTo(e+12,t),this.ctx.moveTo(e,t-12),this.ctx.lineTo(e,t+12),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.arc(e,t,3,0,Math.PI*2),this.ctx.stroke(),this.ctx.fillStyle="rgba(255, 255, 255, 0.8)",this.ctx.font="11px monospace";const c=`[${Math.floor(e)},${Math.floor(t)}]`;this.ctx.fillText(c,e+s+15,t),this.ctx.fillStyle="rgba(255, 255, 255, 0.6)",this.ctx.font="9px monospace",this.ctx.fillText("TRACKING",e+s+15,t+15)}applyNoiseOverlay(){const e=.03+this.glitchIntensity*.04,t=2,i=.15;for(let s=0;s<this.canvas.width;s+=t*2)for(let o=0;o<this.canvas.height;o+=t*2)if(Math.random()<i){const c=Math.floor(Math.random()*255),u=Math.random()*e;this.ctx.fillStyle=`rgba(${c}, ${c}, ${c}, ${u})`,this.ctx.fillRect(s,o,t,t)}}applyGlitchEffect(){const e=Math.max(this.glitchIntensity,Math.random()*.3),t=15+Math.random()*15,i=Math.floor(this.canvas.height/t);for(let s=0;s<i;s++)if(Math.random()<e*.3){const o=s*t,c=(Math.random()-.5)*60*e;try{const u=this.ctx.getImageData(0,o,this.canvas.width,Math.min(t,this.canvas.height-o));this.ctx.putImageData(u,c,o)}catch{}}if(Math.random()<e*.5)for(let s=0;s<8;s++){const o=Math.random()*this.canvas.width,c=Math.random()*this.canvas.height,u=Math.random()*40+10,h=Math.random()*15+5;this.ctx.fillStyle="rgba(255, 255, 255, 0.3)",this.ctx.fillRect(o,c,u,h)}}checkHandsTouching(e){if(!e.left||!e.right||!e.left.landmarks||!e.right.landmarks)return!1;const t=[e.left.landmarks[0],e.left.landmarks[8],e.left.landmarks[12],e.left.landmarks[4]],i=[e.right.landmarks[0],e.right.landmarks[8],e.right.landmarks[12],e.right.landmarks[4]];for(const s of t)for(const o of i){const c=Math.sqrt(Math.pow(s.x-o.x,2)+Math.pow(s.y-o.y,2));if(c<.08)return console.log("✋ Hands touching! Distance:",c.toFixed(3)),!0}return!1}spawnHearts(e){if(!(Math.random()>.8)){console.log("Spawning hearts! Current count:",this.hearts.length);for(let t=0;t<3;t++){let s=!1;for(let o=0;o<20&&!s;o++){const c=Math.random()*this.canvas.width,u=Math.random()*this.canvas.height,h=20+Math.random()*30,d=h*1.5;let p=!1;for(const g of this.hearts){const m=c-g.x,y=u-g.y;if(Math.sqrt(m*m+y*y)<d+g.size*.75){p=!0;break}}p||(this.hearts.push({x:c,y:u,vx:0,vy:0,size:h,life:1,rotation:0,rotationSpeed:0}),s=!0,console.log("Heart placed at:",c,u,"size:",h))}}}}updateHearts(){this.hearts=this.hearts.filter(e=>(e.life-=.008,e.life>0))}renderHearts(){const e=Gc();this.hearts.forEach(t=>{this.ctx.save(),this.ctx.translate(t.x,t.y);const s=e*2.5%1;let o=1;s<.15?o=1+Math.sin(s/.15*Math.PI)*.2:s>=.2&&s<.3?o=1+Math.sin((s-.2)/.1*Math.PI)*.15:o=1,this.ctx.scale(o,o);const c=Math.max(2,t.size/8),u=t.life*.9,h=[[0,1,1,0,0,1,1,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,0],[0,0,1,1,1,1,0,0],[0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0]],d=-4*c,p=-4*c;for(let g=0;g<8;g++)for(let m=0;m<8;m++)h[g][m]===1&&(this.ctx.fillStyle=`rgba(255, 255, 255, ${u})`,this.ctx.fillRect(d+m*c,p+g*c,c,c),this.ctx.strokeStyle=`rgba(255, 255, 255, ${u*.3})`,this.ctx.lineWidth=.5,this.ctx.strokeRect(d+m*c,p+g*c,c,c));this.ctx.restore()})}}class O1{constructor(e,t){D(this,"canvas");D(this,"ctx");D(this,"rectangles",[]);D(this,"baseWidth",1920);D(this,"baseHeight",1080);D(this,"time",0);D(this,"gridStructure",[]);this.canvas=e,this.ctx=t,this.createVariedLayout()}createVariedLayout(){[{x:0,y:0,w:480,h:360},{x:480,y:0,w:320,h:180},{x:800,y:0,w:320,h:180},{x:1120,y:0,w:400,h:180},{x:1520,y:0,w:400,h:180},{x:480,y:180,w:240,h:180},{x:720,y:180,w:240,h:180},{x:960,y:180,w:160,h:180},{x:1120,y:180,w:240,h:180},{x:1360,y:180,w:280,h:180},{x:1640,y:180,w:280,h:180},{x:0,y:360,w:120,h:360},{x:120,y:360,w:120,h:360},{x:240,y:360,w:120,h:360},{x:360,y:360,w:120,h:360},{x:480,y:360,w:320,h:360},{x:800,y:360,w:320,h:360},{x:1120,y:360,w:200,h:180},{x:1320,y:360,w:200,h:180},{x:1520,y:360,w:200,h:180},{x:1720,y:360,w:200,h:180},{x:1120,y:540,w:160,h:180},{x:1280,y:540,w:160,h:180},{x:1440,y:540,w:240,h:180},{x:1680,y:540,w:240,h:180},{x:0,y:720,w:160,h:360},{x:160,y:720,w:160,h:360},{x:320,y:720,w:160,h:360},{x:480,y:720,w:240,h:360},{x:720,y:720,w:240,h:360},{x:960,y:720,w:160,h:360},{x:1120,y:720,w:400,h:360},{x:1520,y:720,w:400,h:360}].forEach((t,i)=>{let s;const o=i%3;o===0?s="vertical":o===1?s="horizontal":s="vertical-reverse",this.rectangles.push({id:i,baseX:t.x,baseY:t.y,baseW:t.w,baseH:t.h,currentX:t.x,currentY:t.y,currentW:t.w,currentH:t.h,gradientDirection:s,rotation:0,borderRadius:0,opacity:1}),this.gridStructure.push({x:t.x,y:t.y,w:t.w,h:t.h,targetW:t.w,targetH:t.h})})}render(e,t,i,s){this.time+=.016*ni();const o=s==="contrast",c=s==="grayscale";let u=t[0]||"#1a00ff",h=t[1]||"#8b5cf6",d=t[2]||"#d9d9d9";if(c&&(u="#333333",h="#888888",d="#ffffff"),o)this.ctx.fillStyle="#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);else{const T=this.ctx.createLinearGradient(0,0,0,this.canvas.height);c?(T.addColorStop(0,"#ffffff"),T.addColorStop(1,"#cccccc")):(T.addColorStop(0,d),T.addColorStop(1,u)),this.ctx.fillStyle=T,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}let p=.1,g="idle",m=0,y=1;const v=i?i.bass:0;i&&i.mid;const w=i?i.high:0,_=i?i.beat:!1;if(e.left||e.right){const T=[];e.left&&T.push(e.left),e.right&&T.push(e.right);let L=0,R=!1;T.forEach(F=>{F.gesture==="pinch"&&(R=!0);const E=F.fingerCount!==void 0?F.fingerCount:5;L=Math.max(L,E)}),R&&(L=0),R?(g="pinch",p=.05,m=20):L<=2?(g="2fingers",p=.2,m=20):L<=4?(g="morph",p=.1,m=100):(g="chaos",p=.4,m=0),this.rectangles.forEach((F,E)=>{this.gridStructure[E].targetW=F.baseW,this.gridStructure[E].targetH=F.baseH}),T.forEach(F=>{var k,U;const E=(((k=F.position)==null?void 0:k.x)||.5)*this.baseWidth,I=(((U=F.position)==null?void 0:U.y)||.5)*this.baseHeight;this.rectangles.forEach((B,K)=>{const ie=B.baseX+B.baseW/2,W=B.baseY+B.baseH/2,ee=E-ie,V=I-W,G=Math.sqrt(ee*ee+V*V);if(g==="pinch"){const X=1+Math.sin(G*.05-this.time*5)*.2*(1-Math.min(G/800,1));this.gridStructure[K].targetW=B.baseW*X,this.gridStructure[K].targetH=B.baseH*X}else if(g==="2fingers"){const X=1+Math.sin(G*.05-this.time*5)*.2*(1-Math.min(G/800,1));this.gridStructure[K].targetW=B.baseW*X,this.gridStructure[K].targetH=B.baseH*X}else if(g==="morph"){if(G<500){const $=(1-G/500)*.5;this.gridStructure[K].targetW=B.baseW*(1+$),this.gridStructure[K].targetH=B.baseH*(1+$)}}else if(g==="chaos"&&G<600){const $=Math.random()*.5;this.gridStructure[K].targetW=B.baseW*(.8+$),this.gridStructure[K].targetH=B.baseH*(.8+$)}})})}else this.rectangles.forEach((T,L)=>{this.gridStructure[L].targetW=T.baseW,this.gridStructure[L].targetH=T.baseH}),i&&_&&(m=10);i&&(this.gridStructure.forEach(T=>{T.targetW*=1+v*.2,T.targetH*=1+v*.2}),g==="chaos"&&(y=.5+w*.5)),this.gridStructure.forEach((T,L)=>{T.w+=(T.targetW-T.w)*p,T.h+=(T.targetH-T.h)*p}),this.normalizeGridPerfectly(),this.rectangles.forEach((T,L)=>{T.currentX=this.gridStructure[L].x,T.currentY=this.gridStructure[L].y,T.currentW=this.gridStructure[L].w,T.currentH=this.gridStructure[L].h,T.borderRadius+=(m-T.borderRadius)*.1,g==="chaos"?T.rotation+=Math.random()*.2-.1:T.rotation+=(0-T.rotation)*.1,T.opacity+=(y-T.opacity)*.1});const S=this.canvas.width/this.baseWidth,b=this.canvas.height/this.baseHeight,C=[u,h,d];this.rectangles.forEach((T,L)=>{this.drawRectangle(T,S,b,C,o,L,i)})}normalizeGridPerfectly(){const e=new Map;this.rectangles.forEach((c,u)=>{const h=Math.round(c.baseY/10)*10;e.has(h)||e.set(h,[]),e.get(h).push(u)});const t=Array.from(e.entries()).sort((c,u)=>c[0]-u[0]).map(c=>c[1]);t.forEach(c=>{c.sort((p,g)=>this.rectangles[p].baseX-this.rectangles[g].baseX);const u=c.reduce((p,g)=>p+this.gridStructure[g].w,0),h=this.baseWidth/u;let d=0;c.forEach(p=>{this.gridStructure[p].w*=h,this.gridStructure[p].x=d,d+=this.gridStructure[p].w})});let i=0;t.forEach(c=>{const u=Math.max(...c.map(h=>this.gridStructure[h].h));c.forEach(h=>{this.gridStructure[h].y=i,this.gridStructure[h].h=u}),i+=u});const s=i,o=this.baseHeight/s;i=0,t.forEach(c=>{const u=this.gridStructure[c[0]].h*o;c.forEach(h=>{this.gridStructure[h].y=i,this.gridStructure[h].h=u}),i+=u})}drawRectangle(e,t,i,s,o,c,u){this.ctx.save();const h=e.currentX*t,d=e.currentY*i,p=e.currentW*t,g=e.currentH*i;if(Math.abs(e.rotation)>.01){const C=h+p/2,T=d+g/2;this.ctx.translate(C,T),this.ctx.rotate(e.rotation),this.ctx.translate(-C,-T)}this.ctx.globalAlpha=e.opacity;let m;const y=s[0],v=s[1],w=s[2],_=o||c%2===0?y:v,S=o?"#000000":w,b=u!=null&&u.beat&&Math.random()>.7?"#FFFFFF":null;e.gradientDirection==="vertical"?(m=this.ctx.createLinearGradient(h,d,h,d+g),m.addColorStop(0,b||S),m.addColorStop(1,_)):e.gradientDirection==="vertical-reverse"?(m=this.ctx.createLinearGradient(h,d,h,d+g),m.addColorStop(0,_),m.addColorStop(1,b||S)):(m=this.ctx.createLinearGradient(h,d,h+p,d),m.addColorStop(0,b||S),m.addColorStop(1,_)),this.ctx.fillStyle=m,e.borderRadius>0?(this.ctx.beginPath(),this.ctx.roundRect(h,d,p,g,e.borderRadius),this.ctx.fill()):this.ctx.fillRect(h,d,p,g),this.ctx.restore()}}class z1{constructor(e,t){D(this,"canvas");D(this,"ctx");D(this,"glowObjects",[]);D(this,"time",0);D(this,"vibrationTimer",0);D(this,"glitchIntensity",0);D(this,"isExploding",!1);this.canvas=e,this.ctx=t}render(e,t){if(this.canvas.width===0||this.canvas.height===0)return;this.ctx.fillStyle="rgba(0, 0, 0, 0.02)",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&!this.isExploding&&(this.createExplosion(),this.vibrationTimer=1,this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.016,i=Math.max(0,this.vibrationTimer));let s=null,o=null,c=2,u=!1;if(e.left&&e.left.landmarks){let h=this.countFingers(e.left.landmarks,"left");e.left.gesture==="pinch"&&(h=1),h>=1&&(u=!0,s=e.left.position.x*this.canvas.width,o=e.left.position.y*this.canvas.height,c=h)}if(e.right&&e.right.landmarks){let h=this.countFingers(e.right.landmarks,"right");if(e.right.gesture==="pinch"&&(h=1),h>=1){u=!0;const d=e.right.position.x*this.canvas.width,p=e.right.position.y*this.canvas.height;s!==null?(s=(s+d)/2,o=((o||0)+p)/2,c=Math.max(c,h)):(s=d,o=p,c=h)}}if(u&&s!==null&&o!==null){this.time+=1*ni();let h=4,d=100,p=2,g=60;if(c===1?(h=8,d=60,p=1,g=30):c===2?(h=5,d=100,p=2,g=60):c===3||c===4?(h=4,d=130,p=2,g=80):c>=5&&(h=2,d=180,p=3,g=120),this.time>=h){this.time=0;for(let m=0;m<p;m++)this.glowObjects.push({x:s+(Math.random()-.5)*g,y:o+(Math.random()-.5)*g,size:d+Math.random()*(d*.4),vx:(Math.random()-.5)*1.5,vy:(Math.random()-.5)*1.5-.5,life:1,hue:Math.random()*360,decay:.002+c/10*.002})}}this.glowObjects=this.glowObjects.filter(h=>(h.x+=h.vx,h.y+=h.vy,h.vx*=.99,h.vy*=.99,h.life-=h.decay,i>0&&(h.x+=(Math.random()-.5)*i*10,h.y+=(Math.random()-.5)*i*10),h.life>0)),this.glowObjects.length>120&&(this.glowObjects=this.glowObjects.slice(-120)),this.glowObjects.forEach(h=>{this.renderChromaticShape(h,i,t)}),this.applyNoiseOverlay(),this.glitchIntensity>.1&&this.applyGlitchEffect()}renderChromaticShape(e,t,i){const s=8+t*20;e.life*.4,this.ctx.globalCompositeOperation="screen";const o=this.ctx.createRadialGradient(e.x-s,e.y,0,e.x-s,e.y,e.size*1.2);o.addColorStop(0,i[0]+"FF"),o.addColorStop(.3,i[0]+"99"),o.addColorStop(.6,i[0]+"44"),o.addColorStop(1,"transparent"),this.ctx.fillStyle=o,this.ctx.beginPath(),this.ctx.arc(e.x-s,e.y,e.size*1.2,0,Math.PI*2),this.ctx.fill();const c=this.ctx.createRadialGradient(e.x,e.y,0,e.x,e.y,e.size*1.2);c.addColorStop(0,i[1]+"FF"),c.addColorStop(.3,i[1]+"BB"),c.addColorStop(.6,i[1]+"66"),c.addColorStop(1,"transparent"),this.ctx.fillStyle=c,this.ctx.beginPath(),this.ctx.arc(e.x,e.y,e.size*1.2,0,Math.PI*2),this.ctx.fill();const u=this.ctx.createRadialGradient(e.x+s,e.y,0,e.x+s,e.y,e.size*1.2);u.addColorStop(0,i[2]+"FF"),u.addColorStop(.3,i[2]+"99"),u.addColorStop(.6,i[2]+"44"),u.addColorStop(1,"transparent"),this.ctx.fillStyle=u,this.ctx.beginPath(),this.ctx.arc(e.x+s,e.y,e.size*1.2,0,Math.PI*2),this.ctx.fill(),this.ctx.globalCompositeOperation="source-over"}countFingers(e,t){if(!e||e.length<21)return 0;const i=e[9],s=e[4],o=e[3],c=Math.sqrt(Math.pow(s.x-i.x,2)+Math.pow(s.y-i.y,2)+Math.pow(s.z-i.z,2)),u=Math.sqrt(Math.pow(o.x-i.x,2)+Math.pow(o.y-i.y,2)+Math.pow(o.z-i.z,2));let h=c>u?1:0;const d=[8,12,16,20],p=[6,10,14,18];for(let g=0;g<4;g++){const m=Math.sqrt(Math.pow(e[d[g]].x-i.x,2)+Math.pow(e[d[g]].y-i.y,2)+Math.pow(e[d[g]].z-i.z,2)),y=Math.sqrt(Math.pow(e[p[g]].x-i.x,2)+Math.pow(e[p[g]].y-i.y,2)+Math.pow(e[p[g]].z-i.z,2));m>y*1.1&&h++}return h}createExplosion(){const e=this.canvas.width/2,t=this.canvas.height/2;for(let i=0;i<40;i++){const s=Math.PI*2*i/40,o=10+Math.random()*20;this.glowObjects.push({x:e,y:t,size:80+Math.random()*100,vx:Math.cos(s)*o,vy:Math.sin(s)*o,life:1,hue:Math.random()*360,decay:.003})}}applyNoiseOverlay(){this.ctx.save(),this.ctx.globalAlpha=.05,this.ctx.fillStyle="white";for(let e=0;e<1e3;e++){const t=Math.random()*this.canvas.width,i=Math.random()*this.canvas.height,s=Math.random()*2;this.ctx.fillRect(t,i,s,s)}this.ctx.restore()}applyGlitchEffect(){this.ctx.save(),this.ctx.globalAlpha=this.glitchIntensity*.5,this.ctx.fillStyle="white";for(let e=0;e<5;e++){const t=Math.random()*this.canvas.width,i=Math.random()*this.canvas.height,s=Math.random()*10;this.ctx.fillRect(t,i,s,this.canvas.height)}for(let e=0;e<5;e++){const t=Math.random()*this.canvas.width,i=Math.random()*this.canvas.height,s=Math.random()*10;this.ctx.fillRect(t,i,this.canvas.width,s)}this.ctx.restore()}}class B1{constructor(e,t){D(this,"canvas");D(this,"ctx");D(this,"dots",[]);D(this,"gridSpacing",8);D(this,"vibrationTimer",0);D(this,"isExploding",!1);this.canvas=e,this.ctx=t,this.initializeDots()}initializeDots(){this.dots=[];const e=Math.ceil(this.canvas.width/this.gridSpacing),t=Math.ceil(this.canvas.height/this.gridSpacing);for(let i=0;i<t;i++)for(let s=0;s<e;s++)this.dots.push({x:s*this.gridSpacing,y:i*this.gridSpacing,baseSize:1,currentSize:1,targetSize:1})}render(e,t){if(this.canvas.width===0||this.canvas.height===0)return;this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&!this.isExploding&&(this.createExplosion(),this.vibrationTimer=1,this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.016,i=Math.max(0,this.vibrationTimer));let s=null,o=null,c=2,u=!1;if(e.left&&e.left.landmarks){let p=this.countFingers(e.left.landmarks,"left");e.left.gesture==="pinch"&&(p=1),p>=1&&(u=!0,s=e.left.position.x*this.canvas.width,o=e.left.position.y*this.canvas.height,c=p)}if(e.right&&e.right.landmarks){let p=this.countFingers(e.right.landmarks,"right");if(e.right.gesture==="pinch"&&(p=1),p>=1){u=!0;const g=e.right.position.x*this.canvas.width,m=e.right.position.y*this.canvas.height;s!==null?(s=(s+g)/2,o=((o||0)+m)/2,c=Math.max(c,p)):(s=g,o=m,c=p)}}let h=200,d=4;c===1?(h=100,d=2):c>=5&&(h=350,d=6),this.dots.forEach(p=>{if(p.targetSize=p.baseSize,u&&s!==null&&o!==null){const g=p.x-s,m=p.y-o,y=Math.sqrt(g*g+m*m);if(y<h){const v=1-y/h;p.targetSize=p.baseSize+v*d}}p.currentSize+=(p.targetSize-p.currentSize)*.2,i>0&&(p.currentSize+=Math.random()*i*3)}),this.ctx.fillStyle="#FFFFFF",this.dots.forEach(p=>{p.currentSize>.5&&(this.ctx.beginPath(),this.ctx.arc(p.x,p.y,p.currentSize,0,Math.PI*2),this.ctx.fill())})}countFingers(e,t){if(!e||e.length<21)return 0;const i=e[9],s=e[4],o=e[3],c=Math.sqrt(Math.pow(s.x-i.x,2)+Math.pow(s.y-i.y,2)+Math.pow(s.z-i.z,2)),u=Math.sqrt(Math.pow(o.x-i.x,2)+Math.pow(o.y-i.y,2)+Math.pow(o.z-i.z,2));let h=c>u?1:0;const d=[8,12,16,20],p=[6,10,14,18];for(let g=0;g<4;g++){const m=Math.sqrt(Math.pow(e[d[g]].x-i.x,2)+Math.pow(e[d[g]].y-i.y,2)+Math.pow(e[d[g]].z-i.z,2)),y=Math.sqrt(Math.pow(e[p[g]].x-i.x,2)+Math.pow(e[p[g]].y-i.y,2)+Math.pow(e[p[g]].z-i.z,2));m>y*1.1&&h++}return h}createExplosion(){if(this.isExploding)return;this.isExploding=!0;const e=this.canvas.width/2,t=this.canvas.height/2;this.dots.forEach(i=>{const s=i.x-e,o=i.y-t,u=Math.sqrt(s*s+o*o)/10;setTimeout(()=>{i.targetSize=8},u)}),setTimeout(()=>{this.isExploding=!1},1e3)}}class H1{constructor(e,t){D(this,"canvas");D(this,"ctx");D(this,"blocks",[]);D(this,"baseBlockSize",40);D(this,"vibrationTimer",0);D(this,"currentBlockSize",40);D(this,"isExploding",!1);this.canvas=e,this.ctx=t,this.initializeGrid()}initializeGrid(){this.blocks=[];const e=Math.ceil(this.canvas.width/this.baseBlockSize),t=Math.ceil(this.canvas.height/this.baseBlockSize);for(let i=0;i<t;i++)for(let s=0;s<e;s++){const o=Math.floor(Math.random()*3);this.blocks.push({x:s*this.baseBlockSize,y:i*this.baseBlockSize,targetX:s*this.baseBlockSize,targetY:i*this.baseBlockSize,size:this.baseBlockSize,colorIndex:o,targetColorIndex:o,hasGrid:Math.random()>.7,gridSize:Math.floor(Math.random()*3)+2,glitchTimer:0,colorChangeTimer:Math.random()*5})}}render(e,t){if(this.canvas.width===0||this.canvas.height===0)return;const i=t[1]&&(t[1].toLowerCase()==="#ffffff"||t[1].toLowerCase()==="#fff");i?this.ctx.fillStyle="#000000":this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let s=0;e.clapping&&!this.isExploding&&(this.createExplosion(),this.vibrationTimer=1,this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.016,s=Math.max(0,this.vibrationTimer));let o=0,c=!1;if(e.left){let m=e.left.fingerCount||0;e.left.gesture==="pinch"&&(m=1),c=!0,o=m}if(e.right){let m=e.right.fingerCount||0;e.right.gesture==="pinch"&&(m=1),c=!0,o=Math.max(o,m)}let u=this.currentBlockSize,h=1;c&&(o===1?(u=100,h=.4):o===2?(u=60,h=.5):o===3?(u=45,h=1):o===4?(u=35,h=1.5):o>=5&&(u=25,h=3)),Math.abs(this.currentBlockSize-u)>1&&(this.currentBlockSize=u,this.baseBlockSize=u,this.initializeGrid()),this.blocks.forEach(m=>{m.size=this.currentBlockSize});const d=s>0?10:1;this.blocks.forEach(m=>{if(m.colorChangeTimer>0)m.colorChangeTimer-=.016*h*d;else{const y=Math.floor(Math.random()*3);y!==m.colorIndex&&(m.targetColorIndex=y,m.glitchTimer=.3),m.colorChangeTimer=2+Math.random()*3}m.colorIndex!==m.targetColorIndex&&(m.colorIndex=m.targetColorIndex),m.glitchTimer>0&&(m.glitchTimer-=.016)}),this.blocks.forEach(m=>{const y=m.x,v=m.y,w=s>0?.3+(1-s)*.7:1,_=m.size*w,S=(m.size-_)/2,b=(m.size-_)/2;let C;if(i?C=m.colorIndex%2===0?t[0]:"#000000":C=t[m.colorIndex]||"#FFFFFF",this.ctx.fillStyle=C,this.ctx.fillRect(y+S,v+b,_,_),m.hasGrid&&_>15){this.ctx.strokeStyle=t[3]||"#000000",this.ctx.lineWidth=1;const T=_/m.gridSize;for(let L=0;L<=m.gridSize;L++)this.ctx.beginPath(),this.ctx.moveTo(y+S+L*T,v+b),this.ctx.lineTo(y+S+L*T,v+b+_),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(y+S,v+b+L*T),this.ctx.lineTo(y+S+_,v+b+L*T),this.ctx.stroke()}if(m.glitchTimer>0||s>.5){let T;i?T=m.colorIndex%2===0?"#000000":t[0]:T=t[(m.colorIndex+1)%3]||"#FFFFFF",this.ctx.strokeStyle=T,this.ctx.lineWidth=s>0?4:3,this.ctx.strokeRect(y+S,v+b,_,_)}}),this.ctx.strokeStyle="rgba(255, 255, 255, 0.1)",this.ctx.lineWidth=1;const p=Math.ceil(this.canvas.width/this.baseBlockSize),g=Math.ceil(this.canvas.height/this.baseBlockSize);for(let m=0;m<=p;m++)this.ctx.beginPath(),this.ctx.moveTo(m*this.baseBlockSize,0),this.ctx.lineTo(m*this.baseBlockSize,this.canvas.height),this.ctx.stroke();for(let m=0;m<=g;m++)this.ctx.beginPath(),this.ctx.moveTo(0,m*this.baseBlockSize),this.ctx.lineTo(this.canvas.width,m*this.baseBlockSize),this.ctx.stroke()}createExplosion(){this.isExploding||(this.isExploding=!0,this.blocks.forEach(e=>{e.targetColorIndex=Math.floor(Math.random()*3),e.colorIndex=e.targetColorIndex,e.glitchTimer=1}),setTimeout(()=>this.isExploding=!1,1e3))}}class V1{constructor(e,t){D(this,"canvas");D(this,"ctx");D(this,"lines",[]);D(this,"gridSpacing",40);D(this,"lineLength",30);D(this,"isClapping",!1);D(this,"clappingIntensity",0);this.canvas=e,this.ctx=t,this.initializeGrid()}initializeGrid(){this.lines=[];const e=Math.ceil(this.canvas.width/this.gridSpacing)+1,t=Math.ceil(this.canvas.height/this.gridSpacing)+1;for(let i=0;i<t;i++)for(let s=0;s<e;s++)this.lines.push({x:s*this.gridSpacing,y:i*this.gridSpacing,length:this.lineLength,currentAngle:0,targetAngle:0,spinVelocity:0})}render(e,t){t[1]&&(t[1].toLowerCase()==="#ffffff"||t[1].toLowerCase()==="#fff")?this.ctx.fillStyle="#000000":this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),(this.lines.length===0||this.lines[0].x>this.canvas.width||this.lines[0].y>this.canvas.height)&&this.initializeGrid();let s=.1,o=0;const c=[];e.left&&c.push(e.left),e.right&&c.push(e.right),c.forEach(u=>{let h=u.fingerCount||2;u.gesture==="pinch"&&(h=1),o=Math.max(o,h)}),o===1?s=.02:o===2?s=.1:o===3?s=.15:o===4?s=.2:o>=5&&(s=.3),e.clapping?this.isClapping||(this.isClapping=!0,this.clappingIntensity=1):this.isClapping=!1,this.clappingIntensity>0&&(this.clappingIntensity*=.95,this.clappingIntensity<.01&&(this.clappingIntensity=0)),this.lines.forEach(u=>{if(c.length>0){let h=0,d=0,p=0;c.forEach(g=>{var C,T;const m=(((C=g.position)==null?void 0:C.x)||.5)*this.canvas.width,y=(((T=g.position)==null?void 0:T.y)||.5)*this.canvas.height,v=m-u.x,w=y-u.y,S=1/(1+Math.sqrt(v*v+w*w)*.001),b=Math.atan2(w,v);d+=Math.cos(b)*S,p+=Math.sin(b)*S,h+=S}),h>0&&(u.targetAngle=Math.atan2(p,d))}else u.targetAngle=0;if(this.clappingIntensity>0)u.spinVelocity+=this.clappingIntensity*.5,u.currentAngle+=u.spinVelocity,u.spinVelocity*=.9;else{let h=u.targetAngle-u.currentAngle;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;u.currentAngle+=h*s,u.spinVelocity=0}}),this.ctx.strokeStyle=t[0]||"#00ff00",this.ctx.lineWidth=2,this.ctx.lineCap="round",this.lines.forEach(u=>{const h=u.length/2,d=u.x-Math.cos(u.currentAngle)*h,p=u.y-Math.sin(u.currentAngle)*h,g=u.x+Math.cos(u.currentAngle)*h,m=u.y+Math.sin(u.currentAngle)*h;this.ctx.beginPath(),this.ctx.moveTo(d,p),this.ctx.lineTo(g,m),this.ctx.stroke()})}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Md="184",G1=0,L0=1,W1=2,wc=1,X1=2,Lo=3,ns=0,ei=1,Fi=2,Ki=0,wa=1,Ta=2,I0=3,N0=4,j1=5,Ts=100,q1=101,Y1=102,$1=103,K1=104,Z1=200,Q1=201,J1=202,ey=203,Sf=204,Mf=205,ty=206,ny=207,iy=208,ry=209,sy=210,ay=211,oy=212,ly=213,cy=214,wf=0,Ef=1,bf=2,Ca=3,Tf=4,Cf=5,Af=6,Rf=7,wd=0,uy=1,hy=2,Zi=0,hx=1,fx=2,dx=3,px=4,mx=5,gx=6,xx=7,vx=300,Ps=301,Aa=302,Nh=303,Uh=304,Wc=306,Pf=1e3,mr=1001,Lf=1002,In=1003,fy=1004,$l=1005,xn=1006,Fh=1007,As=1008,hi=1009,_x=1010,yx=1011,Oo=1012,Ed=1013,Qi=1014,ki=1015,di=1016,bd=1017,Td=1018,zo=1020,Sx=35902,Mx=35899,wx=1021,Ex=1022,fi=1023,vr=1026,Rs=1027,Cd=1028,Ad=1029,Ls=1030,Rd=1031,Pd=1033,Ec=33776,bc=33777,Tc=33778,Cc=33779,If=35840,Nf=35841,Uf=35842,Ff=35843,Df=36196,kf=37492,Of=37496,zf=37488,Bf=37489,Pc=37490,Hf=37491,Vf=37808,Gf=37809,Wf=37810,Xf=37811,jf=37812,qf=37813,Yf=37814,$f=37815,Kf=37816,Zf=37817,Qf=37818,Jf=37819,ed=37820,td=37821,nd=36492,id=36494,rd=36495,sd=36283,ad=36284,Lc=36285,od=36286,dy=3200,Ic=0,py=1,Qr="",ui="srgb",Nc="srgb-linear",Uc="linear",Vt="srgb",sa=7680,U0=519,my=512,gy=513,xy=514,Ld=515,vy=516,_y=517,Id=518,yy=519,F0=35044,D0="300 es",$i=2e3,Bo=2001;function Sy(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Fc(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function My(){const a=Fc("canvas");return a.style.display="block",a}const k0={};function O0(...a){const e="THREE."+a.shift();console.log(e,...a)}function bx(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function ct(...a){a=bx(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function Nt(...a){a=bx(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function ld(...a){const e=a.join(" ");e in k0||(k0[e]=!0,ct(...a))}function wy(a,e,t){return new Promise(function(i,s){function o(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:s();break;case a.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}const Ey={[wf]:Ef,[bf]:Af,[Tf]:Rf,[Ca]:Cf,[Ef]:wf,[Af]:bf,[Rf]:Tf,[Cf]:Ca};class Ns{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,c=s.length;o<c;o++)s[o].call(this,e);e.target=null}}}const kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let z0=1234567;const No=Math.PI/180,Ho=180/Math.PI;function La(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kn[a&255]+kn[a>>8&255]+kn[a>>16&255]+kn[a>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[t&63|128]+kn[t>>8&255]+"-"+kn[t>>16&255]+kn[t>>24&255]+kn[i&255]+kn[i>>8&255]+kn[i>>16&255]+kn[i>>24&255]).toLowerCase()}function Tt(a,e,t){return Math.max(e,Math.min(t,a))}function Nd(a,e){return(a%e+e)%e}function by(a,e,t,i,s){return i+(a-e)*(s-i)/(t-e)}function Ty(a,e,t){return a!==e?(t-a)/(e-a):0}function Uo(a,e,t){return(1-t)*a+t*e}function Cy(a,e,t,i){return Uo(a,e,1-Math.exp(-t*i))}function Ay(a,e=1){return e-Math.abs(Nd(a,e*2)-e)}function Ry(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function Py(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Ly(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Iy(a,e){return a+Math.random()*(e-a)}function Ny(a){return a*(.5-Math.random())}function Uy(a){a!==void 0&&(z0=a);let e=z0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Fy(a){return a*No}function Dy(a){return a*Ho}function ky(a){return(a&a-1)===0&&a!==0}function Oy(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function zy(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function By(a,e,t,i,s){const o=Math.cos,c=Math.sin,u=o(t/2),h=c(t/2),d=o((e+i)/2),p=c((e+i)/2),g=o((e-i)/2),m=c((e-i)/2),y=o((i-e)/2),v=c((i-e)/2);switch(s){case"XYX":a.set(u*p,h*g,h*m,u*d);break;case"YZY":a.set(h*m,u*p,h*g,u*d);break;case"ZXZ":a.set(h*g,h*m,u*p,u*d);break;case"XZX":a.set(u*p,h*v,h*y,u*d);break;case"YXY":a.set(h*y,u*p,h*v,u*d);break;case"ZYZ":a.set(h*v,h*y,u*p,u*d);break;default:ct("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Sa(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Gn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const Yr={DEG2RAD:No,RAD2DEG:Ho,generateUUID:La,clamp:Tt,euclideanModulo:Nd,mapLinear:by,inverseLerp:Ty,lerp:Uo,damp:Cy,pingpong:Ay,smoothstep:Ry,smootherstep:Py,randInt:Ly,randFloat:Iy,randFloatSpread:Ny,seededRandom:Uy,degToRad:Fy,radToDeg:Dy,isPowerOfTwo:ky,ceilPowerOfTwo:Oy,floorPowerOfTwo:zy,setQuaternionFromProperEuler:By,normalize:Gn,denormalize:Sa},jd=class jd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*i-c*s+e.x,this.y=o*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jd.prototype.isVector2=!0;let lt=jd;class Ia{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,o,c,u){let h=i[s+0],d=i[s+1],p=i[s+2],g=i[s+3],m=o[c+0],y=o[c+1],v=o[c+2],w=o[c+3];if(g!==w||h!==m||d!==y||p!==v){let _=h*m+d*y+p*v+g*w;_<0&&(m=-m,y=-y,v=-v,w=-w,_=-_);let S=1-u;if(_<.9995){const b=Math.acos(_),C=Math.sin(b);S=Math.sin(S*b)/C,u=Math.sin(u*b)/C,h=h*S+m*u,d=d*S+y*u,p=p*S+v*u,g=g*S+w*u}else{h=h*S+m*u,d=d*S+y*u,p=p*S+v*u,g=g*S+w*u;const b=1/Math.sqrt(h*h+d*d+p*p+g*g);h*=b,d*=b,p*=b,g*=b}}e[t]=h,e[t+1]=d,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,s,o,c){const u=i[s],h=i[s+1],d=i[s+2],p=i[s+3],g=o[c],m=o[c+1],y=o[c+2],v=o[c+3];return e[t]=u*v+p*g+h*y-d*m,e[t+1]=h*v+p*m+d*g-u*y,e[t+2]=d*v+p*y+u*m-h*g,e[t+3]=p*v-u*g-h*m-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,o=e._z,c=e._order,u=Math.cos,h=Math.sin,d=u(i/2),p=u(s/2),g=u(o/2),m=h(i/2),y=h(s/2),v=h(o/2);switch(c){case"XYZ":this._x=m*p*g+d*y*v,this._y=d*y*g-m*p*v,this._z=d*p*v+m*y*g,this._w=d*p*g-m*y*v;break;case"YXZ":this._x=m*p*g+d*y*v,this._y=d*y*g-m*p*v,this._z=d*p*v-m*y*g,this._w=d*p*g+m*y*v;break;case"ZXY":this._x=m*p*g-d*y*v,this._y=d*y*g+m*p*v,this._z=d*p*v+m*y*g,this._w=d*p*g-m*y*v;break;case"ZYX":this._x=m*p*g-d*y*v,this._y=d*y*g+m*p*v,this._z=d*p*v-m*y*g,this._w=d*p*g+m*y*v;break;case"YZX":this._x=m*p*g+d*y*v,this._y=d*y*g+m*p*v,this._z=d*p*v-m*y*g,this._w=d*p*g-m*y*v;break;case"XZY":this._x=m*p*g-d*y*v,this._y=d*y*g-m*p*v,this._z=d*p*v+m*y*g,this._w=d*p*g+m*y*v;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],o=t[8],c=t[1],u=t[5],h=t[9],d=t[2],p=t[6],g=t[10],m=i+u+g;if(m>0){const y=.5/Math.sqrt(m+1);this._w=.25/y,this._x=(p-h)*y,this._y=(o-d)*y,this._z=(c-s)*y}else if(i>u&&i>g){const y=2*Math.sqrt(1+i-u-g);this._w=(p-h)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(o+d)/y}else if(u>g){const y=2*Math.sqrt(1+u-i-g);this._w=(o-d)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(h+p)/y}else{const y=2*Math.sqrt(1+g-i-u);this._w=(c-s)/y,this._x=(o+d)/y,this._y=(h+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,o=e._z,c=e._w,u=t._x,h=t._y,d=t._z,p=t._w;return this._x=i*p+c*u+s*d-o*h,this._y=s*p+c*h+o*u-i*d,this._z=o*p+c*d+i*h-s*u,this._w=c*p-i*u-s*h-o*d,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,o=e._z,c=e._w,u=this.dot(e);u<0&&(i=-i,s=-s,o=-o,c=-c,u=-u);let h=1-t;if(u<.9995){const d=Math.acos(u),p=Math.sin(d);h=Math.sin(h*d)/p,t=Math.sin(t*d)/p,this._x=this._x*h+i*t,this._y=this._y*h+s*t,this._z=this._z*h+o*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+i*t,this._y=this._y*h+s*t,this._z=this._z*h+o*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const qd=class qd{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(B0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(B0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*s,this.y=o[1]*t+o[4]*i+o[7]*s,this.z=o[2]*t+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=e.elements,c=1/(o[3]*t+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*s+o[12])*c,this.y=(o[1]*t+o[5]*i+o[9]*s+o[13])*c,this.z=(o[2]*t+o[6]*i+o[10]*s+o[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,o=e.x,c=e.y,u=e.z,h=e.w,d=2*(c*s-u*i),p=2*(u*t-o*s),g=2*(o*i-c*t);return this.x=t+h*d+c*g-u*p,this.y=i+h*p+u*d-o*g,this.z=s+h*g+o*p-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s,this.y=o[1]*t+o[5]*i+o[9]*s,this.z=o[2]*t+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,o=e.z,c=t.x,u=t.y,h=t.z;return this.x=s*h-o*u,this.y=o*c-i*h,this.z=i*u-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dh.copy(this).projectOnVector(e),this.sub(Dh)}reflect(e){return this.sub(Dh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qd.prototype.isVector3=!0;let J=qd;const Dh=new J,B0=new Ia,Yd=class Yd{constructor(e,t,i,s,o,c,u,h,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,c,u,h,d)}set(e,t,i,s,o,c,u,h,d){const p=this.elements;return p[0]=e,p[1]=s,p[2]=u,p[3]=t,p[4]=o,p[5]=h,p[6]=i,p[7]=c,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,c=i[0],u=i[3],h=i[6],d=i[1],p=i[4],g=i[7],m=i[2],y=i[5],v=i[8],w=s[0],_=s[3],S=s[6],b=s[1],C=s[4],T=s[7],L=s[2],R=s[5],F=s[8];return o[0]=c*w+u*b+h*L,o[3]=c*_+u*C+h*R,o[6]=c*S+u*T+h*F,o[1]=d*w+p*b+g*L,o[4]=d*_+p*C+g*R,o[7]=d*S+p*T+g*F,o[2]=m*w+y*b+v*L,o[5]=m*_+y*C+v*R,o[8]=m*S+y*T+v*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],c=e[4],u=e[5],h=e[6],d=e[7],p=e[8];return t*c*p-t*u*d-i*o*p+i*u*h+s*o*d-s*c*h}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],c=e[4],u=e[5],h=e[6],d=e[7],p=e[8],g=p*c-u*d,m=u*h-p*o,y=d*o-c*h,v=t*g+i*m+s*y;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/v;return e[0]=g*w,e[1]=(s*d-p*i)*w,e[2]=(u*i-s*c)*w,e[3]=m*w,e[4]=(p*t-s*h)*w,e[5]=(s*o-u*t)*w,e[6]=y*w,e[7]=(i*h-d*t)*w,e[8]=(c*t-i*o)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,o,c,u){const h=Math.cos(o),d=Math.sin(o);return this.set(i*h,i*d,-i*(h*c+d*u)+c+e,-s*d,s*h,-s*(-d*c+h*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(kh.makeScale(e,t)),this}rotate(e){return this.premultiply(kh.makeRotation(-e)),this}translate(e,t){return this.premultiply(kh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Yd.prototype.isMatrix3=!0;let xt=Yd;const kh=new xt,H0=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),V0=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hy(){const a={enabled:!0,workingColorSpace:Nc,spaces:{},convert:function(s,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===Vt&&(s.r=gr(s.r),s.g=gr(s.g),s.b=gr(s.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Vt&&(s.r=Ea(s.r),s.g=Ea(s.g),s.b=Ea(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Qr?Uc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,c){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return ld("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return ld("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(s,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return a.define({[Nc]:{primaries:e,whitePoint:i,transfer:Uc,toXYZ:H0,fromXYZ:V0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ui},outputColorSpaceConfig:{drawingBufferColorSpace:ui}},[ui]:{primaries:e,whitePoint:i,transfer:Vt,toXYZ:H0,fromXYZ:V0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ui}}}),a}const Ct=Hy();function gr(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ea(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let aa;class Vy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{aa===void 0&&(aa=Fc("canvas")),aa.width=e.width,aa.height=e.height;const s=aa.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=aa}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let c=0;c<o.length;c++)o[c]=gr(o[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(gr(t[i]/255)*255):t[i]=gr(t[i]);return{data:t,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gy=0;class Ud{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=La(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?o.push(Oh(s[c].image)):o.push(Oh(s[c]))}else o=Oh(s);i.url=o}return t||(e.images[this.uuid]=i),i}}function Oh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Vy.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let Wy=0;const zh=new J;class Bn extends Ns{constructor(e=Bn.DEFAULT_IMAGE,t=Bn.DEFAULT_MAPPING,i=mr,s=mr,o=xn,c=As,u=fi,h=hi,d=Bn.DEFAULT_ANISOTROPY,p=Qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wy++}),this.uuid=La(),this.name="",this.source=new Ud(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=c,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=h,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zh).x}get height(){return this.source.getSize(zh).y}get depth(){return this.source.getSize(zh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ct(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ct(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pf:e.x=e.x-Math.floor(e.x);break;case mr:e.x=e.x<0?0:1;break;case Lf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pf:e.y=e.y-Math.floor(e.y);break;case mr:e.y=e.y<0?0:1;break;case Lf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=vx;Bn.DEFAULT_ANISOTROPY=1;const $d=class $d{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*o,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*o,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*o,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,o;const h=e.elements,d=h[0],p=h[4],g=h[8],m=h[1],y=h[5],v=h[9],w=h[2],_=h[6],S=h[10];if(Math.abs(p-m)<.01&&Math.abs(g-w)<.01&&Math.abs(v-_)<.01){if(Math.abs(p+m)<.1&&Math.abs(g+w)<.1&&Math.abs(v+_)<.1&&Math.abs(d+y+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(d+1)/2,T=(y+1)/2,L=(S+1)/2,R=(p+m)/4,F=(g+w)/4,E=(v+_)/4;return C>T&&C>L?C<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(C),s=R/i,o=F/i):T>L?T<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(T),i=R/s,o=E/s):L<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(L),i=F/o,s=E/o),this.set(i,s,o,t),this}let b=Math.sqrt((_-v)*(_-v)+(g-w)*(g-w)+(m-p)*(m-p));return Math.abs(b)<.001&&(b=1),this.x=(_-v)/b,this.y=(g-w)/b,this.z=(m-p)/b,this.w=Math.acos((d+y+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this.w=Tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this.w=Tt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$d.prototype.isVector4=!0;let an=$d;class Xy extends Ns{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new an(0,0,e,t),this.scissorTest=!1,this.viewport=new an(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},o=new Bn(s),c=i.count;for(let u=0;u<c;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ud(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends Xy{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Tx extends Bn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jy extends Bn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vc=class Vc{constructor(e,t,i,s,o,c,u,h,d,p,g,m,y,v,w,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,c,u,h,d,p,g,m,y,v,w,_)}set(e,t,i,s,o,c,u,h,d,p,g,m,y,v,w,_){const S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=s,S[1]=o,S[5]=c,S[9]=u,S[13]=h,S[2]=d,S[6]=p,S[10]=g,S[14]=m,S[3]=y,S[7]=v,S[11]=w,S[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/oa.setFromMatrixColumn(e,0).length(),o=1/oa.setFromMatrixColumn(e,1).length(),c=1/oa.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,o=e.z,c=Math.cos(i),u=Math.sin(i),h=Math.cos(s),d=Math.sin(s),p=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const m=c*p,y=c*g,v=u*p,w=u*g;t[0]=h*p,t[4]=-h*g,t[8]=d,t[1]=y+v*d,t[5]=m-w*d,t[9]=-u*h,t[2]=w-m*d,t[6]=v+y*d,t[10]=c*h}else if(e.order==="YXZ"){const m=h*p,y=h*g,v=d*p,w=d*g;t[0]=m+w*u,t[4]=v*u-y,t[8]=c*d,t[1]=c*g,t[5]=c*p,t[9]=-u,t[2]=y*u-v,t[6]=w+m*u,t[10]=c*h}else if(e.order==="ZXY"){const m=h*p,y=h*g,v=d*p,w=d*g;t[0]=m-w*u,t[4]=-c*g,t[8]=v+y*u,t[1]=y+v*u,t[5]=c*p,t[9]=w-m*u,t[2]=-c*d,t[6]=u,t[10]=c*h}else if(e.order==="ZYX"){const m=c*p,y=c*g,v=u*p,w=u*g;t[0]=h*p,t[4]=v*d-y,t[8]=m*d+w,t[1]=h*g,t[5]=w*d+m,t[9]=y*d-v,t[2]=-d,t[6]=u*h,t[10]=c*h}else if(e.order==="YZX"){const m=c*h,y=c*d,v=u*h,w=u*d;t[0]=h*p,t[4]=w-m*g,t[8]=v*g+y,t[1]=g,t[5]=c*p,t[9]=-u*p,t[2]=-d*p,t[6]=y*g+v,t[10]=m-w*g}else if(e.order==="XZY"){const m=c*h,y=c*d,v=u*h,w=u*d;t[0]=h*p,t[4]=-g,t[8]=d*p,t[1]=m*g+w,t[5]=c*p,t[9]=y*g-v,t[2]=v*g-y,t[6]=u*p,t[10]=w*g+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qy,e,Yy)}lookAt(e,t,i){const s=this.elements;return oi.subVectors(e,t),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),Hr.crossVectors(i,oi),Hr.lengthSq()===0&&(Math.abs(i.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),Hr.crossVectors(i,oi)),Hr.normalize(),Kl.crossVectors(oi,Hr),s[0]=Hr.x,s[4]=Kl.x,s[8]=oi.x,s[1]=Hr.y,s[5]=Kl.y,s[9]=oi.y,s[2]=Hr.z,s[6]=Kl.z,s[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,c=i[0],u=i[4],h=i[8],d=i[12],p=i[1],g=i[5],m=i[9],y=i[13],v=i[2],w=i[6],_=i[10],S=i[14],b=i[3],C=i[7],T=i[11],L=i[15],R=s[0],F=s[4],E=s[8],I=s[12],k=s[1],U=s[5],B=s[9],K=s[13],ie=s[2],W=s[6],ee=s[10],V=s[14],G=s[3],$=s[7],X=s[11],z=s[15];return o[0]=c*R+u*k+h*ie+d*G,o[4]=c*F+u*U+h*W+d*$,o[8]=c*E+u*B+h*ee+d*X,o[12]=c*I+u*K+h*V+d*z,o[1]=p*R+g*k+m*ie+y*G,o[5]=p*F+g*U+m*W+y*$,o[9]=p*E+g*B+m*ee+y*X,o[13]=p*I+g*K+m*V+y*z,o[2]=v*R+w*k+_*ie+S*G,o[6]=v*F+w*U+_*W+S*$,o[10]=v*E+w*B+_*ee+S*X,o[14]=v*I+w*K+_*V+S*z,o[3]=b*R+C*k+T*ie+L*G,o[7]=b*F+C*U+T*W+L*$,o[11]=b*E+C*B+T*ee+L*X,o[15]=b*I+C*K+T*V+L*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],o=e[12],c=e[1],u=e[5],h=e[9],d=e[13],p=e[2],g=e[6],m=e[10],y=e[14],v=e[3],w=e[7],_=e[11],S=e[15],b=h*y-d*m,C=u*y-d*g,T=u*m-h*g,L=c*y-d*p,R=c*m-h*p,F=c*g-u*p;return t*(w*b-_*C+S*T)-i*(v*b-_*L+S*R)+s*(v*C-w*L+S*F)-o*(v*T-w*R+_*F)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],c=e[4],u=e[5],h=e[6],d=e[7],p=e[8],g=e[9],m=e[10],y=e[11],v=e[12],w=e[13],_=e[14],S=e[15],b=t*u-i*c,C=t*h-s*c,T=t*d-o*c,L=i*h-s*u,R=i*d-o*u,F=s*d-o*h,E=p*w-g*v,I=p*_-m*v,k=p*S-y*v,U=g*_-m*w,B=g*S-y*w,K=m*S-y*_,ie=b*K-C*B+T*U+L*k-R*I+F*E;if(ie===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/ie;return e[0]=(u*K-h*B+d*U)*W,e[1]=(s*B-i*K-o*U)*W,e[2]=(w*F-_*R+S*L)*W,e[3]=(m*R-g*F-y*L)*W,e[4]=(h*k-c*K-d*I)*W,e[5]=(t*K-s*k+o*I)*W,e[6]=(_*T-v*F-S*C)*W,e[7]=(p*F-m*T+y*C)*W,e[8]=(c*B-u*k+d*E)*W,e[9]=(i*k-t*B-o*E)*W,e[10]=(v*R-w*T+S*b)*W,e[11]=(g*T-p*R-y*b)*W,e[12]=(u*I-c*U-h*E)*W,e[13]=(t*U-i*I+s*E)*W,e[14]=(w*C-v*L-_*b)*W,e[15]=(p*L-g*C+m*b)*W,this}scale(e){const t=this.elements,i=e.x,s=e.y,o=e.z;return t[0]*=i,t[4]*=s,t[8]*=o,t[1]*=i,t[5]*=s,t[9]*=o,t[2]*=i,t[6]*=s,t[10]*=o,t[3]*=i,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),o=1-i,c=e.x,u=e.y,h=e.z,d=o*c,p=o*u;return this.set(d*c+i,d*u-s*h,d*h+s*u,0,d*u+s*h,p*u+i,p*h-s*c,0,d*h-s*u,p*h+s*c,o*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,o,c){return this.set(1,i,o,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,o=t._x,c=t._y,u=t._z,h=t._w,d=o+o,p=c+c,g=u+u,m=o*d,y=o*p,v=o*g,w=c*p,_=c*g,S=u*g,b=h*d,C=h*p,T=h*g,L=i.x,R=i.y,F=i.z;return s[0]=(1-(w+S))*L,s[1]=(y+T)*L,s[2]=(v-C)*L,s[3]=0,s[4]=(y-T)*R,s[5]=(1-(m+S))*R,s[6]=(_+b)*R,s[7]=0,s[8]=(v+C)*F,s[9]=(_-b)*F,s[10]=(1-(m+w))*F,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const o=this.determinant();if(o===0)return i.set(1,1,1),t.identity(),this;let c=oa.set(s[0],s[1],s[2]).length();const u=oa.set(s[4],s[5],s[6]).length(),h=oa.set(s[8],s[9],s[10]).length();o<0&&(c=-c),Li.copy(this);const d=1/c,p=1/u,g=1/h;return Li.elements[0]*=d,Li.elements[1]*=d,Li.elements[2]*=d,Li.elements[4]*=p,Li.elements[5]*=p,Li.elements[6]*=p,Li.elements[8]*=g,Li.elements[9]*=g,Li.elements[10]*=g,t.setFromRotationMatrix(Li),i.x=c,i.y=u,i.z=h,this}makePerspective(e,t,i,s,o,c,u=$i,h=!1){const d=this.elements,p=2*o/(t-e),g=2*o/(i-s),m=(t+e)/(t-e),y=(i+s)/(i-s);let v,w;if(h)v=o/(c-o),w=c*o/(c-o);else if(u===$i)v=-(c+o)/(c-o),w=-2*c*o/(c-o);else if(u===Bo)v=-c/(c-o),w=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=p,d[4]=0,d[8]=m,d[12]=0,d[1]=0,d[5]=g,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=v,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,s,o,c,u=$i,h=!1){const d=this.elements,p=2/(t-e),g=2/(i-s),m=-(t+e)/(t-e),y=-(i+s)/(i-s);let v,w;if(h)v=1/(c-o),w=c/(c-o);else if(u===$i)v=-2/(c-o),w=-(c+o)/(c-o);else if(u===Bo)v=-1/(c-o),w=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=p,d[4]=0,d[8]=0,d[12]=m,d[1]=0,d[5]=g,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=v,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Vc.prototype.isMatrix4=!0;let Yt=Vc;const oa=new J,Li=new Yt,qy=new J(0,0,0),Yy=new J(1,1,1),Hr=new J,Kl=new J,oi=new J,G0=new Yt,W0=new Ia;class _r{constructor(e=0,t=0,i=0,s=_r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,o=s[0],c=s[4],u=s[8],h=s[1],d=s[5],p=s[9],g=s[2],m=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(m,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-Tt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(m,y),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Tt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-Tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,d),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,y),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return G0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(G0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return W0.setFromEuler(this),this.setFromQuaternion(W0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_r.DEFAULT_ORDER="XYZ";class Cx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $y=0;const X0=new J,la=new Ia,cr=new Yt,Zl=new J,yo=new J,Ky=new J,Zy=new Ia,j0=new J(1,0,0),q0=new J(0,1,0),Y0=new J(0,0,1),$0={type:"added"},Qy={type:"removed"},ca={type:"childadded",child:null},Bh={type:"childremoved",child:null};class vn extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=La(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new J,t=new _r,i=new Ia,s=new J(1,1,1);function o(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Yt},normalMatrix:{value:new xt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Cx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return la.setFromAxisAngle(e,t),this.quaternion.multiply(la),this}rotateOnWorldAxis(e,t){return la.setFromAxisAngle(e,t),this.quaternion.premultiply(la),this}rotateX(e){return this.rotateOnAxis(j0,e)}rotateY(e){return this.rotateOnAxis(q0,e)}rotateZ(e){return this.rotateOnAxis(Y0,e)}translateOnAxis(e,t){return X0.copy(e).applyQuaternion(this.quaternion),this.position.add(X0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(j0,e)}translateY(e){return this.translateOnAxis(q0,e)}translateZ(e){return this.translateOnAxis(Y0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zl.copy(e):Zl.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cr.lookAt(yo,Zl,this.up):cr.lookAt(Zl,yo,this.up),this.quaternion.setFromRotationMatrix(cr),s&&(cr.extractRotation(s.matrixWorld),la.setFromRotationMatrix(cr),this.quaternion.premultiply(la.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($0),ca.child=e,this.dispatchEvent(ca),ca.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qy),Bh.child=e,this.dispatchEvent(Bh),Bh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cr.multiply(e.parent.matrixWorld)),e.applyMatrix4(cr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($0),ca.child=e,this.dispatchEvent(ca),ca.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let o=0,c=s.length;o<c;o++)s[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,e,Ky),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,Zy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*i-o[8]*s,o[13]+=i-o[1]*t-o[5]*i-o[9]*s,o[14]+=s-o[2]*t-o[6]*i-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let o=0,c=s.length;o<c;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(u=>({...u})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let d=0,p=h.length;d<p;d++){const g=h[d];o(e.shapes,g)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,d=this.material.length;h<d;h++)u.push(o(e.materials,this.material[h]));s.material=u}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];s.animations.push(o(e.animations,h))}}if(t){const u=c(e.geometries),h=c(e.materials),d=c(e.textures),p=c(e.images),g=c(e.shapes),m=c(e.skeletons),y=c(e.animations),v=c(e.nodes);u.length>0&&(i.geometries=u),h.length>0&&(i.materials=h),d.length>0&&(i.textures=d),p.length>0&&(i.images=p),g.length>0&&(i.shapes=g),m.length>0&&(i.skeletons=m),y.length>0&&(i.animations=y),v.length>0&&(i.nodes=v)}return i.object=s,i;function c(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}vn.DEFAULT_UP=new J(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ma extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Jy={type:"move"};class Hh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ma,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ma,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ma,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,o=null,c=null;const u=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const w of e.hand.values()){const _=t.getJointPose(w,i),S=this._getHandJoint(d,w);_!==null&&(S.matrix.fromArray(_.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=_.radius),S.visible=_!==null}const p=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],m=p.position.distanceTo(g.position),y=.02,v=.005;d.inputState.pinching&&m>y+v?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&m<=y-v&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));u!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(Jy)))}return u!==null&&(u.visible=s!==null),h!==null&&(h.visible=o!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ma;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Ax={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vr={h:0,s:0,l:0},Ql={h:0,s:0,l:0};function Vh(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ui){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ct.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ct.workingColorSpace){if(e=Nd(e,1),t=Tt(t,0,1),i=Tt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,c=2*i-o;this.r=Vh(c,o,e+1/3),this.g=Vh(c,o,e),this.b=Vh(c,o,e-1/3)}return Ct.colorSpaceToWorking(this,s),this}setStyle(e,t=ui){function i(o){o!==void 0&&parseFloat(o)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:ct("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ui){const i=Ax[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}copyLinearToSRGB(e){return this.r=Ea(e.r),this.g=Ea(e.g),this.b=Ea(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ui){return Ct.workingToColorSpace(On.copy(this),e),Math.round(Tt(On.r*255,0,255))*65536+Math.round(Tt(On.g*255,0,255))*256+Math.round(Tt(On.b*255,0,255))}getHexString(e=ui){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.workingToColorSpace(On.copy(this),t);const i=On.r,s=On.g,o=On.b,c=Math.max(i,s,o),u=Math.min(i,s,o);let h,d;const p=(u+c)/2;if(u===c)h=0,d=0;else{const g=c-u;switch(d=p<=.5?g/(c+u):g/(2-c-u),c){case i:h=(s-o)/g+(s<o?6:0);break;case s:h=(o-i)/g+2;break;case o:h=(i-s)/g+4;break}h/=6}return e.h=h,e.s=d,e.l=p,e}getRGB(e,t=Ct.workingColorSpace){return Ct.workingToColorSpace(On.copy(this),t),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=ui){Ct.workingToColorSpace(On.copy(this),e);const t=On.r,i=On.g,s=On.b;return e!==ui?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Vr),this.setHSL(Vr.h+e,Vr.s+t,Vr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Vr),e.getHSL(Ql);const i=Uo(Vr.h,Ql.h,t),s=Uo(Vr.s,Ql.s,t),o=Uo(Vr.l,Ql.l,t);return this.setHSL(i,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*s,this.g=o[1]*t+o[4]*i+o[7]*s,this.b=o[2]*t+o[5]*i+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Ye;Ye.NAMES=Ax;class Go{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ye(e),this.density=t}clone(){return new Go(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class rs extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _r,this.environmentIntensity=1,this.environmentRotation=new _r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ii=new J,ur=new J,Gh=new J,hr=new J,ua=new J,ha=new J,K0=new J,Wh=new J,Xh=new J,jh=new J,qh=new an,Yh=new an,$h=new an;class Di{constructor(e=new J,t=new J,i=new J){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Ii.subVectors(e,t),s.cross(Ii);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,i,s,o){Ii.subVectors(s,t),ur.subVectors(i,t),Gh.subVectors(e,t);const c=Ii.dot(Ii),u=Ii.dot(ur),h=Ii.dot(Gh),d=ur.dot(ur),p=ur.dot(Gh),g=c*d-u*u;if(g===0)return o.set(0,0,0),null;const m=1/g,y=(d*h-u*p)*m,v=(c*p-u*h)*m;return o.set(1-y-v,v,y)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,hr)===null?!1:hr.x>=0&&hr.y>=0&&hr.x+hr.y<=1}static getInterpolation(e,t,i,s,o,c,u,h){return this.getBarycoord(e,t,i,s,hr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,hr.x),h.addScaledVector(c,hr.y),h.addScaledVector(u,hr.z),h)}static getInterpolatedAttribute(e,t,i,s,o,c){return qh.setScalar(0),Yh.setScalar(0),$h.setScalar(0),qh.fromBufferAttribute(e,t),Yh.fromBufferAttribute(e,i),$h.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(qh,o.x),c.addScaledVector(Yh,o.y),c.addScaledVector($h,o.z),c}static isFrontFacing(e,t,i,s){return Ii.subVectors(i,t),ur.subVectors(e,t),Ii.cross(ur).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ii.subVectors(this.c,this.b),ur.subVectors(this.a,this.b),Ii.cross(ur).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,o){return Di.getInterpolation(e,this.a,this.b,this.c,t,i,s,o)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,o=this.c;let c,u;ua.subVectors(s,i),ha.subVectors(o,i),Wh.subVectors(e,i);const h=ua.dot(Wh),d=ha.dot(Wh);if(h<=0&&d<=0)return t.copy(i);Xh.subVectors(e,s);const p=ua.dot(Xh),g=ha.dot(Xh);if(p>=0&&g<=p)return t.copy(s);const m=h*g-p*d;if(m<=0&&h>=0&&p<=0)return c=h/(h-p),t.copy(i).addScaledVector(ua,c);jh.subVectors(e,o);const y=ua.dot(jh),v=ha.dot(jh);if(v>=0&&y<=v)return t.copy(o);const w=y*d-h*v;if(w<=0&&d>=0&&v<=0)return u=d/(d-v),t.copy(i).addScaledVector(ha,u);const _=p*v-y*g;if(_<=0&&g-p>=0&&y-v>=0)return K0.subVectors(o,s),u=(g-p)/(g-p+(y-v)),t.copy(s).addScaledVector(K0,u);const S=1/(_+w+m);return c=w*S,u=m*S,t.copy(i).addScaledVector(ua,c).addScaledVector(ha,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Us{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=o.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Ni):Ni.fromBufferAttribute(o,c),Ni.applyMatrix4(e.matrixWorld),this.expandByPoint(Ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jl.copy(i.boundingBox)),Jl.applyMatrix4(e.matrixWorld),this.union(Jl)}const s=e.children;for(let o=0,c=s.length;o<c;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ni),Ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(So),ec.subVectors(this.max,So),fa.subVectors(e.a,So),da.subVectors(e.b,So),pa.subVectors(e.c,So),Gr.subVectors(da,fa),Wr.subVectors(pa,da),ys.subVectors(fa,pa);let t=[0,-Gr.z,Gr.y,0,-Wr.z,Wr.y,0,-ys.z,ys.y,Gr.z,0,-Gr.x,Wr.z,0,-Wr.x,ys.z,0,-ys.x,-Gr.y,Gr.x,0,-Wr.y,Wr.x,0,-ys.y,ys.x,0];return!Kh(t,fa,da,pa,ec)||(t=[1,0,0,0,1,0,0,0,1],!Kh(t,fa,da,pa,ec))?!1:(tc.crossVectors(Gr,Wr),t=[tc.x,tc.y,tc.z],Kh(t,fa,da,pa,ec))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fr=[new J,new J,new J,new J,new J,new J,new J,new J],Ni=new J,Jl=new Us,fa=new J,da=new J,pa=new J,Gr=new J,Wr=new J,ys=new J,So=new J,ec=new J,tc=new J,Ss=new J;function Kh(a,e,t,i,s){for(let o=0,c=a.length-3;o<=c;o+=3){Ss.fromArray(a,o);const u=s.x*Math.abs(Ss.x)+s.y*Math.abs(Ss.y)+s.z*Math.abs(Ss.z),h=e.dot(Ss),d=t.dot(Ss),p=i.dot(Ss);if(Math.max(-Math.max(h,d,p),Math.min(h,d,p))>u)return!1}return!0}const mn=new J,nc=new lt;let eS=0;class Sn extends Ns{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=F0,this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)nc.fromBufferAttribute(this,t),nc.applyMatrix3(e),this.setXY(t,nc.x,nc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix3(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Sa(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),i=Gn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),i=Gn(i,this.array),s=Gn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),i=Gn(i,this.array),s=Gn(s,this.array),o=Gn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==F0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Rx extends Sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Px extends Sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Qt extends Sn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const tS=new Us,Mo=new J,Zh=new J;class Fs{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):tS.setFromPoints(e).getCenter(i);let s=0;for(let o=0,c=e.length;o<c;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mo.subVectors(e,this.center);const t=Mo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Mo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mo.copy(e.center).add(Zh)),this.expandByPoint(Mo.copy(e.center).sub(Zh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let nS=0;const yi=new Yt,Qh=new vn,ma=new J,li=new Us,wo=new Us,Cn=new J;class un extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=La(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sy(e)?Px:Rx)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new xt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,t,i){return yi.makeTranslation(e,t,i),this.applyMatrix4(yi),this}scale(e,t,i){return yi.makeScale(e,t,i),this.applyMatrix4(yi),this}lookAt(e){return Qh.lookAt(e),Qh.updateMatrix(),this.applyMatrix4(Qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ma).negate(),this.translate(ma.x,ma.y,ma.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,o=e.length;s<o;s++){const c=e[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Qt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Us);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];li.setFromBufferAttribute(o),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const i=this.boundingSphere.center;if(li.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const u=t[o];wo.setFromBufferAttribute(u),this.morphTargetsRelative?(Cn.addVectors(li.min,wo.min),li.expandByPoint(Cn),Cn.addVectors(li.max,wo.max),li.expandByPoint(Cn)):(li.expandByPoint(wo.min),li.expandByPoint(wo.max))}li.getCenter(i);let s=0;for(let o=0,c=e.count;o<c;o++)Cn.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(Cn));if(t)for(let o=0,c=t.length;o<c;o++){const u=t[o],h=this.morphTargetsRelative;for(let d=0,p=u.count;d<p;d++)Cn.fromBufferAttribute(u,d),h&&(ma.fromBufferAttribute(e,d),Cn.add(ma)),s=Math.max(s,i.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],h=[];for(let E=0;E<i.count;E++)u[E]=new J,h[E]=new J;const d=new J,p=new J,g=new J,m=new lt,y=new lt,v=new lt,w=new J,_=new J;function S(E,I,k){d.fromBufferAttribute(i,E),p.fromBufferAttribute(i,I),g.fromBufferAttribute(i,k),m.fromBufferAttribute(o,E),y.fromBufferAttribute(o,I),v.fromBufferAttribute(o,k),p.sub(d),g.sub(d),y.sub(m),v.sub(m);const U=1/(y.x*v.y-v.x*y.y);isFinite(U)&&(w.copy(p).multiplyScalar(v.y).addScaledVector(g,-y.y).multiplyScalar(U),_.copy(g).multiplyScalar(y.x).addScaledVector(p,-v.x).multiplyScalar(U),u[E].add(w),u[I].add(w),u[k].add(w),h[E].add(_),h[I].add(_),h[k].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let E=0,I=b.length;E<I;++E){const k=b[E],U=k.start,B=k.count;for(let K=U,ie=U+B;K<ie;K+=3)S(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const C=new J,T=new J,L=new J,R=new J;function F(E){L.fromBufferAttribute(s,E),R.copy(L);const I=u[E];C.copy(I),C.sub(L.multiplyScalar(L.dot(I))).normalize(),T.crossVectors(R,I);const U=T.dot(h[E])<0?-1:1;c.setXYZW(E,C.x,C.y,C.z,U)}for(let E=0,I=b.length;E<I;++E){const k=b[E],U=k.start,B=k.count;for(let K=U,ie=U+B;K<ie;K+=3)F(e.getX(K+0)),F(e.getX(K+1)),F(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,y=i.count;m<y;m++)i.setXYZ(m,0,0,0);const s=new J,o=new J,c=new J,u=new J,h=new J,d=new J,p=new J,g=new J;if(e)for(let m=0,y=e.count;m<y;m+=3){const v=e.getX(m+0),w=e.getX(m+1),_=e.getX(m+2);s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,w),c.fromBufferAttribute(t,_),p.subVectors(c,o),g.subVectors(s,o),p.cross(g),u.fromBufferAttribute(i,v),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,_),u.add(p),h.add(p),d.add(p),i.setXYZ(v,u.x,u.y,u.z),i.setXYZ(w,h.x,h.y,h.z),i.setXYZ(_,d.x,d.y,d.z)}else for(let m=0,y=t.count;m<y;m+=3)s.fromBufferAttribute(t,m+0),o.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),p.subVectors(c,o),g.subVectors(s,o),p.cross(g),i.setXYZ(m+0,p.x,p.y,p.z),i.setXYZ(m+1,p.x,p.y,p.z),i.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Cn.fromBufferAttribute(e,t),Cn.normalize(),e.setXYZ(t,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(u,h){const d=u.array,p=u.itemSize,g=u.normalized,m=new d.constructor(h.length*p);let y=0,v=0;for(let w=0,_=h.length;w<_;w++){u.isInterleavedBufferAttribute?y=h[w]*u.data.stride+u.offset:y=h[w]*p;for(let S=0;S<p;S++)m[v++]=d[y++]}return new Sn(m,p,g)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new un,i=this.index.array,s=this.attributes;for(const u in s){const h=s[u],d=e(h,i);t.setAttribute(u,d)}const o=this.morphAttributes;for(const u in o){const h=[],d=o[u];for(let p=0,g=d.length;p<g;p++){const m=d[p],y=e(m,i);h.push(y)}t.morphAttributes[u]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,h=c.length;u<h;u++){const d=c[u];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const d=i[h];e.data.attributes[h]=d.toJSON(e.data)}const s={};let o=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],p=[];for(let g=0,m=d.length;g<m;g++){const y=d[g];p.push(y.toJSON(e.data))}p.length>0&&(s[h]=p,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const d in s){const p=s[d];this.setAttribute(d,p.clone(t))}const o=e.morphAttributes;for(const d in o){const p=[],g=o[d];for(let m=0,y=g.length;m<y;m++)p.push(g[m].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,p=c.length;d<p;d++){const g=c[d];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let iS=0;class Oi extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=La(),this.name="",this.type="Material",this.blending=wa,this.side=ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sf,this.blendDst=Mf,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Ca,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=U0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sa,this.stencilZFail=sa,this.stencilZPass=sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ct(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ct(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==wa&&(i.blending=this.blending),this.side!==ns&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sf&&(i.blendSrc=this.blendSrc),this.blendDst!==Mf&&(i.blendDst=this.blendDst),this.blendEquation!==Ts&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ca&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==U0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==sa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==sa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}if(t){const o=s(e.textures),c=s(e.images);o.length>0&&(i.textures=o),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const dr=new J,Jh=new J,ic=new J,Xr=new J,ef=new J,rc=new J,tf=new J;class Fd{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dr.copy(this.origin).addScaledVector(this.direction,t),dr.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Jh.copy(e).add(t).multiplyScalar(.5),ic.copy(t).sub(e).normalize(),Xr.copy(this.origin).sub(Jh);const o=e.distanceTo(t)*.5,c=-this.direction.dot(ic),u=Xr.dot(this.direction),h=-Xr.dot(ic),d=Xr.lengthSq(),p=Math.abs(1-c*c);let g,m,y,v;if(p>0)if(g=c*h-u,m=c*u-h,v=o*p,g>=0)if(m>=-v)if(m<=v){const w=1/p;g*=w,m*=w,y=g*(g+c*m+2*u)+m*(c*g+m+2*h)+d}else m=o,g=Math.max(0,-(c*m+u)),y=-g*g+m*(m+2*h)+d;else m=-o,g=Math.max(0,-(c*m+u)),y=-g*g+m*(m+2*h)+d;else m<=-v?(g=Math.max(0,-(-c*o+u)),m=g>0?-o:Math.min(Math.max(-o,-h),o),y=-g*g+m*(m+2*h)+d):m<=v?(g=0,m=Math.min(Math.max(-o,-h),o),y=m*(m+2*h)+d):(g=Math.max(0,-(c*o+u)),m=g>0?o:Math.min(Math.max(-o,-h),o),y=-g*g+m*(m+2*h)+d);else m=c>0?-o:o,g=Math.max(0,-(c*m+u)),y=-g*g+m*(m+2*h)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Jh).addScaledVector(ic,m),y}intersectSphere(e,t){dr.subVectors(e.center,this.origin);const i=dr.dot(this.direction),s=dr.dot(dr)-i*i,o=e.radius*e.radius;if(s>o)return null;const c=Math.sqrt(o-s),u=i-c,h=i+c;return h<0?null:u<0?this.at(h,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,o,c,u,h;const d=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,m=this.origin;return d>=0?(i=(e.min.x-m.x)*d,s=(e.max.x-m.x)*d):(i=(e.max.x-m.x)*d,s=(e.min.x-m.x)*d),p>=0?(o=(e.min.y-m.y)*p,c=(e.max.y-m.y)*p):(o=(e.max.y-m.y)*p,c=(e.min.y-m.y)*p),i>c||o>s||((o>i||isNaN(i))&&(i=o),(c<s||isNaN(s))&&(s=c),g>=0?(u=(e.min.z-m.z)*g,h=(e.max.z-m.z)*g):(u=(e.max.z-m.z)*g,h=(e.min.z-m.z)*g),i>h||u>s)||((u>i||i!==i)&&(i=u),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,dr)!==null}intersectTriangle(e,t,i,s,o){ef.subVectors(t,e),rc.subVectors(i,e),tf.crossVectors(ef,rc);let c=this.direction.dot(tf),u;if(c>0){if(s)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Xr.subVectors(this.origin,e);const h=u*this.direction.dot(rc.crossVectors(Xr,rc));if(h<0)return null;const d=u*this.direction.dot(ef.cross(Xr));if(d<0||h+d>c)return null;const p=-u*Xr.dot(tf);return p<0?null:this.at(p/c,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xc extends Oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _r,this.combine=wd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Z0=new Yt,Ms=new Fd,sc=new Fs,Q0=new J,ac=new J,oc=new J,lc=new J,nf=new J,cc=new J,J0=new J,uc=new J;class hn extends vn{constructor(e=new un,t=new Xc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(o&&u){cc.set(0,0,0);for(let h=0,d=o.length;h<d;h++){const p=u[h],g=o[h];p!==0&&(nf.fromBufferAttribute(g,e),c?cc.addScaledVector(nf,p):cc.addScaledVector(nf.sub(t),p))}t.add(cc)}return t}raycast(e,t){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sc.copy(i.boundingSphere),sc.applyMatrix4(o),Ms.copy(e.ray).recast(e.near),!(sc.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(sc,Q0)===null||Ms.origin.distanceToSquared(Q0)>(e.far-e.near)**2))&&(Z0.copy(o).invert(),Ms.copy(e.ray).applyMatrix4(Z0),!(i.boundingBox!==null&&Ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ms)))}_computeIntersections(e,t,i){let s;const o=this.geometry,c=this.material,u=o.index,h=o.attributes.position,d=o.attributes.uv,p=o.attributes.uv1,g=o.attributes.normal,m=o.groups,y=o.drawRange;if(u!==null)if(Array.isArray(c))for(let v=0,w=m.length;v<w;v++){const _=m[v],S=c[_.materialIndex],b=Math.max(_.start,y.start),C=Math.min(u.count,Math.min(_.start+_.count,y.start+y.count));for(let T=b,L=C;T<L;T+=3){const R=u.getX(T),F=u.getX(T+1),E=u.getX(T+2);s=hc(this,S,e,i,d,p,g,R,F,E),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const v=Math.max(0,y.start),w=Math.min(u.count,y.start+y.count);for(let _=v,S=w;_<S;_+=3){const b=u.getX(_),C=u.getX(_+1),T=u.getX(_+2);s=hc(this,c,e,i,d,p,g,b,C,T),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(c))for(let v=0,w=m.length;v<w;v++){const _=m[v],S=c[_.materialIndex],b=Math.max(_.start,y.start),C=Math.min(h.count,Math.min(_.start+_.count,y.start+y.count));for(let T=b,L=C;T<L;T+=3){const R=T,F=T+1,E=T+2;s=hc(this,S,e,i,d,p,g,R,F,E),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const v=Math.max(0,y.start),w=Math.min(h.count,y.start+y.count);for(let _=v,S=w;_<S;_+=3){const b=_,C=_+1,T=_+2;s=hc(this,c,e,i,d,p,g,b,C,T),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function rS(a,e,t,i,s,o,c,u){let h;if(e.side===ei?h=i.intersectTriangle(c,o,s,!0,u):h=i.intersectTriangle(s,o,c,e.side===ns,u),h===null)return null;uc.copy(u),uc.applyMatrix4(a.matrixWorld);const d=t.ray.origin.distanceTo(uc);return d<t.near||d>t.far?null:{distance:d,point:uc.clone(),object:a}}function hc(a,e,t,i,s,o,c,u,h,d){a.getVertexPosition(u,ac),a.getVertexPosition(h,oc),a.getVertexPosition(d,lc);const p=rS(a,e,t,i,ac,oc,lc,J0);if(p){const g=new J;Di.getBarycoord(J0,ac,oc,lc,g),s&&(p.uv=Di.getInterpolatedAttribute(s,u,h,d,g,new lt)),o&&(p.uv1=Di.getInterpolatedAttribute(o,u,h,d,g,new lt)),c&&(p.normal=Di.getInterpolatedAttribute(c,u,h,d,g,new J),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const m={a:u,b:h,c:d,normal:new J,materialIndex:0};Di.getNormal(ac,oc,lc,m.normal),p.face=m,p.barycoord=g}return p}class Dd extends Bn{constructor(e=null,t=1,i=1,s,o,c,u,h,d=In,p=In,g,m){super(null,c,u,h,d,p,s,o,g,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eg extends Sn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ga=new Yt,tg=new Yt,fc=[],ng=new Us,sS=new Yt,Eo=new hn,bo=new Fs;class aS extends hn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new eg(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,sS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Us),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ga),ng.copy(e.boundingBox).applyMatrix4(ga),this.boundingBox.union(ng)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ga),bo.copy(e.boundingSphere).applyMatrix4(ga),this.boundingSphere.union(bo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,o=i.length+1,c=e*o+1;for(let u=0;u<i.length;u++)i[u]=s[c+u]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Eo.geometry=this.geometry,Eo.material=this.material,Eo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bo.copy(this.boundingSphere),bo.applyMatrix4(i),e.ray.intersectsSphere(bo)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,ga),tg.multiplyMatrices(i,ga),Eo.matrixWorld=tg,Eo.raycast(e,fc);for(let c=0,u=fc.length;c<u;c++){const h=fc[c];h.instanceId=o,h.object=this,t.push(h)}fc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new eg(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Dd(new Float32Array(s*this.count),s,this.count,Cd,ki));const o=this.morphTexture.source.data.data;let c=0;for(let d=0;d<i.length;d++)c+=i[d];const u=this.geometry.morphTargetsRelative?1:1-c,h=s*e;return o[h]=u,o.set(i,h+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const rf=new J,oS=new J,lS=new xt;class bs{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=rf.subVectors(i,t).cross(oS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(rf),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return i===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||lS.getNormalMatrix(e),s=this.coplanarPoint(rf).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ws=new Fs,cS=new lt(.5,.5),dc=new J;class kd{constructor(e=new bs,t=new bs,i=new bs,s=new bs,o=new bs,c=new bs){this.planes=[e,t,i,s,o,c]}set(e,t,i,s,o,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(s),u[4].copy(o),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=$i,i=!1){const s=this.planes,o=e.elements,c=o[0],u=o[1],h=o[2],d=o[3],p=o[4],g=o[5],m=o[6],y=o[7],v=o[8],w=o[9],_=o[10],S=o[11],b=o[12],C=o[13],T=o[14],L=o[15];if(s[0].setComponents(d-c,y-p,S-v,L-b).normalize(),s[1].setComponents(d+c,y+p,S+v,L+b).normalize(),s[2].setComponents(d+u,y+g,S+w,L+C).normalize(),s[3].setComponents(d-u,y-g,S-w,L-C).normalize(),i)s[4].setComponents(h,m,_,T).normalize(),s[5].setComponents(d-h,y-m,S-_,L-T).normalize();else if(s[4].setComponents(d-h,y-m,S-_,L-T).normalize(),t===$i)s[5].setComponents(d+h,y+m,S+_,L+T).normalize();else if(t===Bo)s[5].setComponents(h,m,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ws)}intersectsSprite(e){ws.center.set(0,0,0);const t=cS.distanceTo(e.center);return ws.radius=.7071067811865476+t,ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(ws)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(dc.x=s.normal.x>0?e.max.x:e.min.x,dc.y=s.normal.y>0?e.max.y:e.min.y,dc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(dc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fo extends Oi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Dc=new J,kc=new J,ig=new Yt,To=new Fd,pc=new Fs,sf=new J,rg=new J;class Lx extends vn{constructor(e=new un,t=new Fo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,o=t.count;s<o;s++)Dc.fromBufferAttribute(t,s-1),kc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Dc.distanceTo(kc);e.setAttribute("lineDistance",new Qt(i,1))}else ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pc.copy(i.boundingSphere),pc.applyMatrix4(s),pc.radius+=o,e.ray.intersectsSphere(pc)===!1)return;ig.copy(s).invert(),To.copy(e.ray).applyMatrix4(ig);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,d=this.isLineSegments?2:1,p=i.index,m=i.attributes.position;if(p!==null){const y=Math.max(0,c.start),v=Math.min(p.count,c.start+c.count);for(let w=y,_=v-1;w<_;w+=d){const S=p.getX(w),b=p.getX(w+1),C=mc(this,e,To,h,S,b,w);C&&t.push(C)}if(this.isLineLoop){const w=p.getX(v-1),_=p.getX(y),S=mc(this,e,To,h,w,_,v-1);S&&t.push(S)}}else{const y=Math.max(0,c.start),v=Math.min(m.count,c.start+c.count);for(let w=y,_=v-1;w<_;w+=d){const S=mc(this,e,To,h,w,w+1,w);S&&t.push(S)}if(this.isLineLoop){const w=mc(this,e,To,h,v-1,y,v-1);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function mc(a,e,t,i,s,o,c){const u=a.geometry.attributes.position;if(Dc.fromBufferAttribute(u,s),kc.fromBufferAttribute(u,o),t.distanceSqToSegment(Dc,kc,sf,rg)>i)return;sf.applyMatrix4(a.matrixWorld);const d=e.ray.origin.distanceTo(sf);if(!(d<e.near||d>e.far))return{distance:d,point:rg.clone().applyMatrix4(a.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:a}}const sg=new J,ag=new J;class cd extends Lx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,o=t.count;s<o;s+=2)sg.fromBufferAttribute(t,s),ag.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+sg.distanceTo(ag);e.setAttribute("lineDistance",new Qt(i,1))}else ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Jr extends Oi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const og=new Yt,ud=new Fd,gc=new Fs,xc=new J;class xr extends vn{constructor(e=new un,t=new Jr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gc.copy(i.boundingSphere),gc.applyMatrix4(s),gc.radius+=o,e.ray.intersectsSphere(gc)===!1)return;og.copy(s).invert(),ud.copy(e.ray).applyMatrix4(og);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,d=i.index,g=i.attributes.position;if(d!==null){const m=Math.max(0,c.start),y=Math.min(d.count,c.start+c.count);for(let v=m,w=y;v<w;v++){const _=d.getX(v);xc.fromBufferAttribute(g,_),lg(xc,_,h,s,e,t,this)}}else{const m=Math.max(0,c.start),y=Math.min(g.count,c.start+c.count);for(let v=m,w=y;v<w;v++)xc.fromBufferAttribute(g,v),lg(xc,v,h,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function lg(a,e,t,i,s,o,c){const u=ud.distanceSqToPoint(a);if(u<t){const h=new J;ud.closestPointToPoint(a,h),h.applyMatrix4(i);const d=s.ray.origin.distanceTo(h);if(d<s.near||d>s.far)return;o.push({distance:d,distanceToRay:Math.sqrt(u),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class uS extends Bn{constructor(e,t,i,s,o=xn,c=xn,u,h,d){super(e,t,i,s,o,c,u,h,d),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const p=this;function g(){p.needsUpdate=!0,p._requestVideoFrameCallbackId=e.requestVideoFrameCallback(g)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(g))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class Ix extends Bn{constructor(e=[],t=Ps,i,s,o,c,u,h,d,p){super(e,t,i,s,o,c,u,h,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ra extends Bn{constructor(e,t,i=Qi,s,o,c,u=In,h=In,d,p=vr,g=1){if(p!==vr&&p!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:g};super(m,s,o,c,u,h,p,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ud(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class hS extends Ra{constructor(e,t=Qi,i=Ps,s,o,c=In,u=In,h,d=vr){const p={width:e,height:e,depth:1},g=[p,p,p,p,p,p];super(e,e,t,i,s,o,c,u,h,d),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Nx extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Na extends un{constructor(e=1,t=1,i=1,s=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:o,depthSegments:c};const u=this;s=Math.floor(s),o=Math.floor(o),c=Math.floor(c);const h=[],d=[],p=[],g=[];let m=0,y=0;v("z","y","x",-1,-1,i,t,e,c,o,0),v("z","y","x",1,-1,i,t,-e,c,o,1),v("x","z","y",1,1,e,i,t,s,c,2),v("x","z","y",1,-1,e,i,-t,s,c,3),v("x","y","z",1,-1,e,t,i,s,o,4),v("x","y","z",-1,-1,e,t,-i,s,o,5),this.setIndex(h),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(p,3)),this.setAttribute("uv",new Qt(g,2));function v(w,_,S,b,C,T,L,R,F,E,I){const k=T/F,U=L/E,B=T/2,K=L/2,ie=R/2,W=F+1,ee=E+1;let V=0,G=0;const $=new J;for(let X=0;X<ee;X++){const z=X*U-K;for(let Z=0;Z<W;Z++){const me=Z*k-B;$[w]=me*b,$[_]=z*C,$[S]=ie,d.push($.x,$.y,$.z),$[w]=0,$[_]=0,$[S]=R>0?1:-1,p.push($.x,$.y,$.z),g.push(Z/F),g.push(1-X/E),V+=1}}for(let X=0;X<E;X++)for(let z=0;z<F;z++){const Z=m+z+W*X,me=m+z+W*(X+1),Ae=m+(z+1)+W*(X+1),Ee=m+(z+1)+W*X;h.push(Z,me,Ee),h.push(me,Ae,Ee),G+=6}u.addGroup(y,G,I),y+=G,m+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Na(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Od extends un{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const o=[],c=[];u(s),d(i),p(),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(o.slice(),3)),this.setAttribute("uv",new Qt(c,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function u(b){const C=new J,T=new J,L=new J;for(let R=0;R<t.length;R+=3)y(t[R+0],C),y(t[R+1],T),y(t[R+2],L),h(C,T,L,b)}function h(b,C,T,L){const R=L+1,F=[];for(let E=0;E<=R;E++){F[E]=[];const I=b.clone().lerp(T,E/R),k=C.clone().lerp(T,E/R),U=R-E;for(let B=0;B<=U;B++)B===0&&E===R?F[E][B]=I:F[E][B]=I.clone().lerp(k,B/U)}for(let E=0;E<R;E++)for(let I=0;I<2*(R-E)-1;I++){const k=Math.floor(I/2);I%2===0?(m(F[E][k+1]),m(F[E+1][k]),m(F[E][k])):(m(F[E][k+1]),m(F[E+1][k+1]),m(F[E+1][k]))}}function d(b){const C=new J;for(let T=0;T<o.length;T+=3)C.x=o[T+0],C.y=o[T+1],C.z=o[T+2],C.normalize().multiplyScalar(b),o[T+0]=C.x,o[T+1]=C.y,o[T+2]=C.z}function p(){const b=new J;for(let C=0;C<o.length;C+=3){b.x=o[C+0],b.y=o[C+1],b.z=o[C+2];const T=_(b)/2/Math.PI+.5,L=S(b)/Math.PI+.5;c.push(T,1-L)}v(),g()}function g(){for(let b=0;b<c.length;b+=6){const C=c[b+0],T=c[b+2],L=c[b+4],R=Math.max(C,T,L),F=Math.min(C,T,L);R>.9&&F<.1&&(C<.2&&(c[b+0]+=1),T<.2&&(c[b+2]+=1),L<.2&&(c[b+4]+=1))}}function m(b){o.push(b.x,b.y,b.z)}function y(b,C){const T=b*3;C.x=e[T+0],C.y=e[T+1],C.z=e[T+2]}function v(){const b=new J,C=new J,T=new J,L=new J,R=new lt,F=new lt,E=new lt;for(let I=0,k=0;I<o.length;I+=9,k+=6){b.set(o[I+0],o[I+1],o[I+2]),C.set(o[I+3],o[I+4],o[I+5]),T.set(o[I+6],o[I+7],o[I+8]),R.set(c[k+0],c[k+1]),F.set(c[k+2],c[k+3]),E.set(c[k+4],c[k+5]),L.copy(b).add(C).add(T).divideScalar(3);const U=_(L);w(R,k+0,b,U),w(F,k+2,C,U),w(E,k+4,T,U)}}function w(b,C,T,L){L<0&&b.x===1&&(c[C]=b.x-1),T.x===0&&T.z===0&&(c[C]=L/2/Math.PI+.5)}function _(b){return Math.atan2(b.z,-b.x)}function S(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Od(e.vertices,e.indices,e.radius,e.detail)}}class zd extends Od{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zd(e.radius,e.detail)}}class yr extends un{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const o=e/2,c=t/2,u=Math.floor(i),h=Math.floor(s),d=u+1,p=h+1,g=e/u,m=t/h,y=[],v=[],w=[],_=[];for(let S=0;S<p;S++){const b=S*m-c;for(let C=0;C<d;C++){const T=C*g-o;v.push(T,-b,0),w.push(0,0,1),_.push(C/u),_.push(1-S/h)}}for(let S=0;S<h;S++)for(let b=0;b<u;b++){const C=b+d*S,T=b+d*(S+1),L=b+1+d*(S+1),R=b+1+d*S;y.push(C,T,R),y.push(T,L,R)}this.setIndex(y),this.setAttribute("position",new Qt(v,3)),this.setAttribute("normal",new Qt(w,3)),this.setAttribute("uv",new Qt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Bd extends un{constructor(e=1,t=.4,i=64,s=8,o=2,c=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:s,p:o,q:c},i=Math.floor(i),s=Math.floor(s);const u=[],h=[],d=[],p=[],g=new J,m=new J,y=new J,v=new J,w=new J,_=new J,S=new J;for(let C=0;C<=i;++C){const T=C/i*o*Math.PI*2;b(T,o,c,e,y),b(T+.01,o,c,e,v),_.subVectors(v,y),S.addVectors(v,y),w.crossVectors(_,S),S.crossVectors(w,_),w.normalize(),S.normalize();for(let L=0;L<=s;++L){const R=L/s*Math.PI*2,F=-t*Math.cos(R),E=t*Math.sin(R);g.x=y.x+(F*S.x+E*w.x),g.y=y.y+(F*S.y+E*w.y),g.z=y.z+(F*S.z+E*w.z),h.push(g.x,g.y,g.z),m.subVectors(g,y).normalize(),d.push(m.x,m.y,m.z),p.push(C/i),p.push(L/s)}}for(let C=1;C<=i;C++)for(let T=1;T<=s;T++){const L=(s+1)*(C-1)+(T-1),R=(s+1)*C+(T-1),F=(s+1)*C+T,E=(s+1)*(C-1)+T;u.push(L,R,E),u.push(R,F,E)}this.setIndex(u),this.setAttribute("position",new Qt(h,3)),this.setAttribute("normal",new Qt(d,3)),this.setAttribute("uv",new Qt(p,2));function b(C,T,L,R,F){const E=Math.cos(C),I=Math.sin(C),k=L/T*C,U=Math.cos(k);F.x=R*(2+U)*.5*E,F.y=R*(2+U)*I*.5,F.z=R*Math.sin(k)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bd(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}function Pa(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const s=a[t][i];if(cg(s))s.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(cg(s[0])){const o=[];for(let c=0,u=s.length;c<u;c++)o[c]=s[c].clone();e[t][i]=o}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Wn(a){const e={};for(let t=0;t<a.length;t++){const i=Pa(a[t]);for(const s in i)e[s]=i[s]}return e}function cg(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function fS(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Ux(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const Oc={clone:Pa,merge:Wn};var dS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends Oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dS,this.fragmentShader=pS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Pa(e.uniforms),this.uniformsGroups=fS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class mS extends cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Fx extends Oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ic,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _r,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gS extends Oi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ye(16777215),this.specular=new Ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ic,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _r,this.combine=wd,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xS extends Oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vS extends Oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ug={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(hg(a)||(this.files[a]=e))},get:function(a){if(this.enabled!==!1&&!hg(a))return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};function hg(a){try{const e=a.slice(a.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class _S{constructor(e,t,i){const s=this;let o=!1,c=0,u=0,h;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(p){u++,o===!1&&s.onStart!==void 0&&s.onStart(p,c,u),o=!0},this.itemEnd=function(p){c++,s.onProgress!==void 0&&s.onProgress(p,c,u),c===u&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,g){return d.push(p,g),this},this.removeHandler=function(p){const g=d.indexOf(p);return g!==-1&&d.splice(g,2),this},this.getHandler=function(p){for(let g=0,m=d.length;g<m;g+=2){const y=d[g],v=d[g+1];if(y.global&&(y.lastIndex=0),y.test(p))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const yS=new _S;class Hd{constructor(e){this.manager=e!==void 0?e:yS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,o){i.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Hd.DEFAULT_MATERIAL_NAME="__DEFAULT";const pr={};class SS extends Error{constructor(e,t){super(e),this.response=t}}class MS extends Hd{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=ug.get(`file:${e}`);if(o!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0);return}if(pr[e]!==void 0){pr[e].push({onLoad:t,onProgress:i,onError:s});return}pr[e]=[],pr[e].push({onLoad:t,onProgress:i,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),u=this.mimeType,h=this.responseType;fetch(c).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&ct("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const p=pr[e],g=d.body.getReader(),m=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),y=m?parseInt(m):0,v=y!==0;let w=0;const _=new ReadableStream({start(S){b();function b(){g.read().then(({done:C,value:T})=>{if(C)S.close();else{w+=T.byteLength;const L=new ProgressEvent("progress",{lengthComputable:v,loaded:w,total:y});for(let R=0,F=p.length;R<F;R++){const E=p[R];E.onProgress&&E.onProgress(L)}S.enqueue(T),b()}},C=>{S.error(C)})}}});return new Response(_)}else throw new SS(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(h){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(p=>new DOMParser().parseFromString(p,u));case"json":return d.json();default:if(u==="")return d.text();{const g=/charset="?([^;"\s]*)"?/i.exec(u),m=g&&g[1]?g[1].toLowerCase():void 0,y=new TextDecoder(m);return d.arrayBuffer().then(v=>y.decode(v))}}}).then(d=>{ug.add(`file:${e}`,d);const p=pr[e];delete pr[e];for(let g=0,m=p.length;g<m;g++){const y=p[g];y.onLoad&&y.onLoad(d)}}).catch(d=>{const p=pr[e];if(p===void 0)throw this.manager.itemError(e),d;delete pr[e];for(let g=0,m=p.length;g<m;g++){const y=p[g];y.onError&&y.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Vd extends vn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const af=new Yt,fg=new J,dg=new J;class Dx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=hi,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kd,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;fg.setFromMatrixPosition(e.matrixWorld),t.position.copy(fg),dg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dg),t.updateMatrixWorld(),af.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(af,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Bo||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(af)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const vc=new J,_c=new Ia,ji=new J;class kx extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=$i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vc,_c,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vc,_c,ji.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(vc,_c,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vc,_c,ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const jr=new J,pg=new lt,mg=new lt;class An extends kx{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ho*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(No*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ho*2*Math.atan(Math.tan(No*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jr.x,jr.y).multiplyScalar(-e/jr.z),jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(jr.x,jr.y).multiplyScalar(-e/jr.z)}getViewSize(e,t){return this.getViewBounds(e,pg,mg),t.subVectors(mg,pg)}setViewOffset(e,t,i,s,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(No*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,o=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,d=c.fullHeight;o+=c.offsetX*s/h,t-=c.offsetY*i/d,s*=c.width/h,i*=c.height/d}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class wS extends Dx{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0}}class zc extends Vd{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new wS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ua extends kx{constructor(e=-1,t=1,i=1,s=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,c=i+e,u=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,c=o+d*this.view.width,u-=p*this.view.offsetY,h=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,c,u,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ES extends Dx{constructor(){super(new Ua(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class of extends Vd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new ES}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Ox extends Vd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const xa=-90,va=1;class bS extends vn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new An(xa,va,e,t);s.layers=this.layers,this.add(s);const o=new An(xa,va,e,t);o.layers=this.layers,this.add(o);const c=new An(xa,va,e,t);c.layers=this.layers,this.add(c);const u=new An(xa,va,e,t);u.layers=this.layers,this.add(u);const h=new An(xa,va,e,t);h.layers=this.layers,this.add(h);const d=new An(xa,va,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,o,c,u,h]=t;for(const d of t)this.remove(d);if(e===$i)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Bo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,c,u,h,d,p]=this.children,g=e.getRenderTarget(),m=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,1,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(i,3,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(i,4,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(g,m,y),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class TS extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class CS{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=AS.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function AS(){this._document.hidden===!1&&this.reset()}const Kd=class Kd{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const o=this.elements;return o[0]=e,o[2]=t,o[1]=i,o[3]=s,this}};Kd.prototype.isMatrix2=!0;let gg=Kd;function xg(a,e,t,i){const s=RS(i);switch(t){case wx:return a*e;case Cd:return a*e/s.components*s.byteLength;case Ad:return a*e/s.components*s.byteLength;case Ls:return a*e*2/s.components*s.byteLength;case Rd:return a*e*2/s.components*s.byteLength;case Ex:return a*e*3/s.components*s.byteLength;case fi:return a*e*4/s.components*s.byteLength;case Pd:return a*e*4/s.components*s.byteLength;case Ec:case bc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Tc:case Cc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Nf:case Ff:return Math.max(a,16)*Math.max(e,8)/4;case If:case Uf:return Math.max(a,8)*Math.max(e,8)/2;case Df:case kf:case zf:case Bf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Of:case Pc:case Hf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Vf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Gf:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Wf:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case jf:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case qf:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Yf:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case $f:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Kf:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Zf:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Qf:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Jf:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case ed:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case td:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case nd:case id:case rd:return Math.ceil(a/4)*Math.ceil(e/4)*16;case sd:case ad:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Lc:case od:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function RS(a){switch(a){case hi:case _x:return{byteLength:1,components:1};case Oo:case yx:case di:return{byteLength:2,components:1};case bd:case Td:return{byteLength:2,components:4};case Qi:case Ed:case ki:return{byteLength:4,components:1};case Sx:case Mx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Md}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Md);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function zx(){let a=null,e=!1,t=null,i=null;function s(o,c){t(o,c),i=a.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&a!==null&&(i=a.requestAnimationFrame(s),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){a=o}}}function PS(a){const e=new WeakMap;function t(u,h){const d=u.array,p=u.usage,g=d.byteLength,m=a.createBuffer();a.bindBuffer(h,m),a.bufferData(h,d,p),u.onUploadCallback();let y;if(d instanceof Float32Array)y=a.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=a.HALF_FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?y=a.HALF_FLOAT:y=a.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=a.SHORT;else if(d instanceof Uint32Array)y=a.UNSIGNED_INT;else if(d instanceof Int32Array)y=a.INT;else if(d instanceof Int8Array)y=a.BYTE;else if(d instanceof Uint8Array)y=a.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:g}}function i(u,h,d){const p=h.array,g=h.updateRanges;if(a.bindBuffer(d,u),g.length===0)a.bufferSubData(d,0,p);else{g.sort((y,v)=>y.start-v.start);let m=0;for(let y=1;y<g.length;y++){const v=g[m],w=g[y];w.start<=v.start+v.count+1?v.count=Math.max(v.count,w.start+w.count-v.start):(++m,g[m]=w)}g.length=m+1;for(let y=0,v=g.length;y<v;y++){const w=g[y];a.bufferSubData(d,w.start*p.BYTES_PER_ELEMENT,p,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=e.get(u);h&&(a.deleteBuffer(h.buffer),e.delete(u))}function c(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const d=e.get(u);if(d===void 0)e.set(u,t(u,h));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,u,h),d.version=u.version}}return{get:s,remove:o,update:c}}var LS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,IS=`#ifdef USE_ALPHAHASH
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
#endif`,NS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,US=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,DS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kS=`#ifdef USE_AOMAP
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
#endif`,OS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zS=`#ifdef USE_BATCHING
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
#endif`,BS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,HS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,VS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,WS=`#ifdef USE_IRIDESCENCE
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
#endif`,XS=`#ifdef USE_BUMPMAP
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
#endif`,jS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,YS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$S=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,KS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ZS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,QS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,JS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,eM=`#define PI 3.141592653589793
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
} // validated`,tM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nM=`vec3 transformedNormal = objectNormal;
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
#endif`,iM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,aM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oM="gl_FragColor = linearToOutputTexel( gl_FragColor );",lM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cM=`#ifdef USE_ENVMAP
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
#endif`,uM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hM=`#ifdef USE_ENVMAP
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
#endif`,fM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dM=`#ifdef USE_ENVMAP
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
#endif`,pM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vM=`#ifdef USE_GRADIENTMAP
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
}`,_M=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,wM=`#ifdef USE_ENVMAP
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
#endif`,EM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AM=`PhysicalMaterial material;
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
#endif`,RM=`uniform sampler2D dfgLUT;
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
}`,PM=`
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
#endif`,LM=`#if defined( RE_IndirectDiffuse )
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
#endif`,IM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NM=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,UM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,FM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,OM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,HM=`#if defined( USE_POINTS_UV )
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
#endif`,VM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qM=`#ifdef USE_MORPHTARGETS
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
#endif`,YM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$M=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,KM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ZM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ew=`#ifdef USE_NORMALMAP
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
#endif`,tw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ow=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gw=`float getShadowMask() {
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
}`,xw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vw=`#ifdef USE_SKINNING
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
#endif`,_w=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yw=`#ifdef USE_SKINNING
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
#endif`,Sw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ww=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ew=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bw=`#ifdef USE_TRANSMISSION
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
#endif`,Tw=`#ifdef USE_TRANSMISSION
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
#endif`,Cw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Iw=`uniform sampler2D t2D;
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
}`,Nw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kw=`#include <common>
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
}`,Ow=`#if DEPTH_PACKING == 3200
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
}`,zw=`#define DISTANCE
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
}`,Bw=`#define DISTANCE
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
}`,Hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gw=`uniform float scale;
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
}`,Ww=`uniform vec3 diffuse;
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
}`,Xw=`#include <common>
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
}`,jw=`uniform vec3 diffuse;
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
}`,qw=`#define LAMBERT
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
}`,Yw=`#define LAMBERT
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
}`,$w=`#define MATCAP
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
}`,Kw=`#define MATCAP
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
}`,Zw=`#define NORMAL
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
}`,Qw=`#define NORMAL
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
}`,Jw=`#define PHONG
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
}`,e2=`#define PHONG
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
}`,t2=`#define STANDARD
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
}`,n2=`#define STANDARD
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
}`,i2=`#define TOON
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
}`,r2=`#define TOON
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
}`,s2=`uniform float size;
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
}`,a2=`uniform vec3 diffuse;
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
}`,o2=`#include <common>
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
}`,l2=`uniform vec3 color;
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
}`,c2=`uniform float rotation;
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
}`,u2=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:LS,alphahash_pars_fragment:IS,alphamap_fragment:NS,alphamap_pars_fragment:US,alphatest_fragment:FS,alphatest_pars_fragment:DS,aomap_fragment:kS,aomap_pars_fragment:OS,batching_pars_vertex:zS,batching_vertex:BS,begin_vertex:HS,beginnormal_vertex:VS,bsdfs:GS,iridescence_fragment:WS,bumpmap_pars_fragment:XS,clipping_planes_fragment:jS,clipping_planes_pars_fragment:qS,clipping_planes_pars_vertex:YS,clipping_planes_vertex:$S,color_fragment:KS,color_pars_fragment:ZS,color_pars_vertex:QS,color_vertex:JS,common:eM,cube_uv_reflection_fragment:tM,defaultnormal_vertex:nM,displacementmap_pars_vertex:iM,displacementmap_vertex:rM,emissivemap_fragment:sM,emissivemap_pars_fragment:aM,colorspace_fragment:oM,colorspace_pars_fragment:lM,envmap_fragment:cM,envmap_common_pars_fragment:uM,envmap_pars_fragment:hM,envmap_pars_vertex:fM,envmap_physical_pars_fragment:wM,envmap_vertex:dM,fog_vertex:pM,fog_pars_vertex:mM,fog_fragment:gM,fog_pars_fragment:xM,gradientmap_pars_fragment:vM,lightmap_pars_fragment:_M,lights_lambert_fragment:yM,lights_lambert_pars_fragment:SM,lights_pars_begin:MM,lights_toon_fragment:EM,lights_toon_pars_fragment:bM,lights_phong_fragment:TM,lights_phong_pars_fragment:CM,lights_physical_fragment:AM,lights_physical_pars_fragment:RM,lights_fragment_begin:PM,lights_fragment_maps:LM,lights_fragment_end:IM,lightprobes_pars_fragment:NM,logdepthbuf_fragment:UM,logdepthbuf_pars_fragment:FM,logdepthbuf_pars_vertex:DM,logdepthbuf_vertex:kM,map_fragment:OM,map_pars_fragment:zM,map_particle_fragment:BM,map_particle_pars_fragment:HM,metalnessmap_fragment:VM,metalnessmap_pars_fragment:GM,morphinstance_vertex:WM,morphcolor_vertex:XM,morphnormal_vertex:jM,morphtarget_pars_vertex:qM,morphtarget_vertex:YM,normal_fragment_begin:$M,normal_fragment_maps:KM,normal_pars_fragment:ZM,normal_pars_vertex:QM,normal_vertex:JM,normalmap_pars_fragment:ew,clearcoat_normal_fragment_begin:tw,clearcoat_normal_fragment_maps:nw,clearcoat_pars_fragment:iw,iridescence_pars_fragment:rw,opaque_fragment:sw,packing:aw,premultiplied_alpha_fragment:ow,project_vertex:lw,dithering_fragment:cw,dithering_pars_fragment:uw,roughnessmap_fragment:hw,roughnessmap_pars_fragment:fw,shadowmap_pars_fragment:dw,shadowmap_pars_vertex:pw,shadowmap_vertex:mw,shadowmask_pars_fragment:gw,skinbase_vertex:xw,skinning_pars_vertex:vw,skinning_vertex:_w,skinnormal_vertex:yw,specularmap_fragment:Sw,specularmap_pars_fragment:Mw,tonemapping_fragment:ww,tonemapping_pars_fragment:Ew,transmission_fragment:bw,transmission_pars_fragment:Tw,uv_pars_fragment:Cw,uv_pars_vertex:Aw,uv_vertex:Rw,worldpos_vertex:Pw,background_vert:Lw,background_frag:Iw,backgroundCube_vert:Nw,backgroundCube_frag:Uw,cube_vert:Fw,cube_frag:Dw,depth_vert:kw,depth_frag:Ow,distance_vert:zw,distance_frag:Bw,equirect_vert:Hw,equirect_frag:Vw,linedashed_vert:Gw,linedashed_frag:Ww,meshbasic_vert:Xw,meshbasic_frag:jw,meshlambert_vert:qw,meshlambert_frag:Yw,meshmatcap_vert:$w,meshmatcap_frag:Kw,meshnormal_vert:Zw,meshnormal_frag:Qw,meshphong_vert:Jw,meshphong_frag:e2,meshphysical_vert:t2,meshphysical_frag:n2,meshtoon_vert:i2,meshtoon_frag:r2,points_vert:s2,points_frag:a2,shadow_vert:o2,shadow_frag:l2,sprite_vert:c2,sprite_frag:u2},Ve={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Yi={basic:{uniforms:Wn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:Wn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:Wn([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:Wn([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:Wn([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:Wn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:Wn([Ve.points,Ve.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:Wn([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:Wn([Ve.common,Ve.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:Wn([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:Wn([Ve.sprite,Ve.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distance:{uniforms:Wn([Ve.common,Ve.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distance_vert,fragmentShader:Mt.distance_frag},shadow:{uniforms:Wn([Ve.lights,Ve.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};Yi.physical={uniforms:Wn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const yc={r:0,b:0,g:0},h2=new Yt,Bx=new xt;Bx.set(-1,0,0,0,1,0,0,0,1);function f2(a,e,t,i,s,o){const c=new Ye(0);let u=s===!0?0:1,h,d,p=null,g=0,m=null;function y(b){let C=b.isScene===!0?b.background:null;if(C&&C.isTexture){const T=b.backgroundBlurriness>0;C=e.get(C,T)}return C}function v(b){let C=!1;const T=y(b);T===null?_(c,u):T&&T.isColor&&(_(T,1),C=!0);const L=a.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(a.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function w(b,C){const T=y(C);T&&(T.isCubeTexture||T.mapping===Wc)?(d===void 0&&(d=new hn(new Na(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Pa(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,R,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=T,d.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(h2.makeRotationFromEuler(C.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Bx),d.material.toneMapped=Ct.getTransfer(T.colorSpace)!==Vt,(p!==T||g!==T.version||m!==a.toneMapping)&&(d.material.needsUpdate=!0,p=T,g=T.version,m=a.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):T&&T.isTexture&&(h===void 0&&(h=new hn(new yr(2,2),new cn({name:"BackgroundMaterial",uniforms:Pa(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:ns,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=T,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=Ct.getTransfer(T.colorSpace)!==Vt,T.matrixAutoUpdate===!0&&T.updateMatrix(),h.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||g!==T.version||m!==a.toneMapping)&&(h.material.needsUpdate=!0,p=T,g=T.version,m=a.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function _(b,C){b.getRGB(yc,Ux(a)),t.buffers.color.setClear(yc.r,yc.g,yc.b,C,o)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(b,C=1){c.set(b),u=C,_(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(b){u=b,_(c,u)},render:v,addToRenderList:w,dispose:S}}function d2(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},s=m(null);let o=s,c=!1;function u(U,B,K,ie,W){let ee=!1;const V=g(U,ie,K,B);o!==V&&(o=V,d(o.object)),ee=y(U,ie,K,W),ee&&v(U,ie,K,W),W!==null&&e.update(W,a.ELEMENT_ARRAY_BUFFER),(ee||c)&&(c=!1,T(U,B,K,ie),W!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function h(){return a.createVertexArray()}function d(U){return a.bindVertexArray(U)}function p(U){return a.deleteVertexArray(U)}function g(U,B,K,ie){const W=ie.wireframe===!0;let ee=i[B.id];ee===void 0&&(ee={},i[B.id]=ee);const V=U.isInstancedMesh===!0?U.id:0;let G=ee[V];G===void 0&&(G={},ee[V]=G);let $=G[K.id];$===void 0&&($={},G[K.id]=$);let X=$[W];return X===void 0&&(X=m(h()),$[W]=X),X}function m(U){const B=[],K=[],ie=[];for(let W=0;W<t;W++)B[W]=0,K[W]=0,ie[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:K,attributeDivisors:ie,object:U,attributes:{},index:null}}function y(U,B,K,ie){const W=o.attributes,ee=B.attributes;let V=0;const G=K.getAttributes();for(const $ in G)if(G[$].location>=0){const z=W[$];let Z=ee[$];if(Z===void 0&&($==="instanceMatrix"&&U.instanceMatrix&&(Z=U.instanceMatrix),$==="instanceColor"&&U.instanceColor&&(Z=U.instanceColor)),z===void 0||z.attribute!==Z||Z&&z.data!==Z.data)return!0;V++}return o.attributesNum!==V||o.index!==ie}function v(U,B,K,ie){const W={},ee=B.attributes;let V=0;const G=K.getAttributes();for(const $ in G)if(G[$].location>=0){let z=ee[$];z===void 0&&($==="instanceMatrix"&&U.instanceMatrix&&(z=U.instanceMatrix),$==="instanceColor"&&U.instanceColor&&(z=U.instanceColor));const Z={};Z.attribute=z,z&&z.data&&(Z.data=z.data),W[$]=Z,V++}o.attributes=W,o.attributesNum=V,o.index=ie}function w(){const U=o.newAttributes;for(let B=0,K=U.length;B<K;B++)U[B]=0}function _(U){S(U,0)}function S(U,B){const K=o.newAttributes,ie=o.enabledAttributes,W=o.attributeDivisors;K[U]=1,ie[U]===0&&(a.enableVertexAttribArray(U),ie[U]=1),W[U]!==B&&(a.vertexAttribDivisor(U,B),W[U]=B)}function b(){const U=o.newAttributes,B=o.enabledAttributes;for(let K=0,ie=B.length;K<ie;K++)B[K]!==U[K]&&(a.disableVertexAttribArray(K),B[K]=0)}function C(U,B,K,ie,W,ee,V){V===!0?a.vertexAttribIPointer(U,B,K,W,ee):a.vertexAttribPointer(U,B,K,ie,W,ee)}function T(U,B,K,ie){w();const W=ie.attributes,ee=K.getAttributes(),V=B.defaultAttributeValues;for(const G in ee){const $=ee[G];if($.location>=0){let X=W[G];if(X===void 0&&(G==="instanceMatrix"&&U.instanceMatrix&&(X=U.instanceMatrix),G==="instanceColor"&&U.instanceColor&&(X=U.instanceColor)),X!==void 0){const z=X.normalized,Z=X.itemSize,me=e.get(X);if(me===void 0)continue;const Ae=me.buffer,Ee=me.type,Q=me.bytesPerElement,ve=Ee===a.INT||Ee===a.UNSIGNED_INT||X.gpuType===Ed;if(X.isInterleavedBufferAttribute){const pe=X.data,Oe=pe.stride,et=X.offset;if(pe.isInstancedInterleavedBuffer){for(let rt=0;rt<$.locationSize;rt++)S($.location+rt,pe.meshPerAttribute);U.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let rt=0;rt<$.locationSize;rt++)_($.location+rt);a.bindBuffer(a.ARRAY_BUFFER,Ae);for(let rt=0;rt<$.locationSize;rt++)C($.location+rt,Z/$.locationSize,Ee,z,Oe*Q,(et+Z/$.locationSize*rt)*Q,ve)}else{if(X.isInstancedBufferAttribute){for(let pe=0;pe<$.locationSize;pe++)S($.location+pe,X.meshPerAttribute);U.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let pe=0;pe<$.locationSize;pe++)_($.location+pe);a.bindBuffer(a.ARRAY_BUFFER,Ae);for(let pe=0;pe<$.locationSize;pe++)C($.location+pe,Z/$.locationSize,Ee,z,Z*Q,Z/$.locationSize*pe*Q,ve)}}else if(V!==void 0){const z=V[G];if(z!==void 0)switch(z.length){case 2:a.vertexAttrib2fv($.location,z);break;case 3:a.vertexAttrib3fv($.location,z);break;case 4:a.vertexAttrib4fv($.location,z);break;default:a.vertexAttrib1fv($.location,z)}}}}b()}function L(){I();for(const U in i){const B=i[U];for(const K in B){const ie=B[K];for(const W in ie){const ee=ie[W];for(const V in ee)p(ee[V].object),delete ee[V];delete ie[W]}}delete i[U]}}function R(U){if(i[U.id]===void 0)return;const B=i[U.id];for(const K in B){const ie=B[K];for(const W in ie){const ee=ie[W];for(const V in ee)p(ee[V].object),delete ee[V];delete ie[W]}}delete i[U.id]}function F(U){for(const B in i){const K=i[B];for(const ie in K){const W=K[ie];if(W[U.id]===void 0)continue;const ee=W[U.id];for(const V in ee)p(ee[V].object),delete ee[V];delete W[U.id]}}}function E(U){for(const B in i){const K=i[B],ie=U.isInstancedMesh===!0?U.id:0,W=K[ie];if(W!==void 0){for(const ee in W){const V=W[ee];for(const G in V)p(V[G].object),delete V[G];delete W[ee]}delete K[ie],Object.keys(K).length===0&&delete i[B]}}}function I(){k(),c=!0,o!==s&&(o=s,d(o.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:I,resetDefaultState:k,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfObject:E,releaseStatesOfProgram:F,initAttributes:w,enableAttribute:_,disableUnusedAttributes:b}}function p2(a,e,t){let i;function s(h){i=h}function o(h,d){a.drawArrays(i,h,d),t.update(d,i,1)}function c(h,d,p){p!==0&&(a.drawArraysInstanced(i,h,d,p),t.update(d,i,p))}function u(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,d,0,p);let m=0;for(let y=0;y<p;y++)m+=d[y];t.update(m,i,1)}this.setMode=s,this.render=o,this.renderInstances=c,this.renderMultiDraw=u}function m2(a,e,t,i){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");s=a.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(F){return!(F!==fi&&i.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(F){const E=F===di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==hi&&i.convert(F)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ki&&!E)}function h(F){if(F==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const p=h(d);p!==d&&(ct("WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const g=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),v=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=a.getParameter(a.MAX_TEXTURE_SIZE),_=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),S=a.getParameter(a.MAX_VERTEX_ATTRIBS),b=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),C=a.getParameter(a.MAX_VARYING_VECTORS),T=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),L=a.getParameter(a.MAX_SAMPLES),R=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:g,reversedDepthBuffer:m,maxTextures:y,maxVertexTextures:v,maxTextureSize:w,maxCubemapSize:_,maxAttributes:S,maxVertexUniforms:b,maxVaryings:C,maxFragmentUniforms:T,maxSamples:L,samples:R}}function g2(a){const e=this;let t=null,i=0,s=!1,o=!1;const c=new bs,u=new xt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,m){const y=g.length!==0||m||i!==0||s;return s=m,i=g.length,y},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,m){t=p(g,m,0)},this.setState=function(g,m,y){const v=g.clippingPlanes,w=g.clipIntersection,_=g.clipShadows,S=a.get(g);if(!s||v===null||v.length===0||o&&!_)o?p(null):d();else{const b=o?0:i,C=b*4;let T=S.clippingState||null;h.value=T,T=p(v,m,C,y);for(let L=0;L!==C;++L)T[L]=t[L];S.clippingState=T,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=b}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(g,m,y,v){const w=g!==null?g.length:0;let _=null;if(w!==0){if(_=h.value,v!==!0||_===null){const S=y+w*4,b=m.matrixWorldInverse;u.getNormalMatrix(b),(_===null||_.length<S)&&(_=new Float32Array(S));for(let C=0,T=y;C!==w;++C,T+=4)c.copy(g[C]).applyMatrix4(b,u),c.normal.toArray(_,T),_[T+3]=c.constant}h.value=_,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,_}}const es=4,vg=[.125,.215,.35,.446,.526,.582],Cs=20,x2=256,Co=new Ua,_g=new Ye;let lf=null,cf=0,uf=0,hf=!1;const v2=new J;class yg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,o={}){const{size:c=256,position:u=v2}=o;lf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),uf=this._renderer.getActiveMipmapLevel(),hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,i,s,h,u),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lf,cf,uf),this._renderer.xr.enabled=hf,e.scissorTest=!1,_a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ps||e.mapping===Aa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),uf=this._renderer.getActiveMipmapLevel(),hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:di,format:fi,colorSpace:Nc,depthBuffer:!1},s=Sg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sg(e,t,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_2(o)),this._blurMaterial=S2(o,e,t),this._ggxMaterial=y2(o,e,t)}return s}_compileMaterial(e){const t=new hn(new un,e);this._renderer.compile(t,Co)}_sceneToCubeUV(e,t,i,s,o){const h=new An(90,1,t,i),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,m=g.autoClear,y=g.toneMapping;g.getClearColor(_g),g.toneMapping=Zi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new hn(new Na,new Xc({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,_=w.material;let S=!1;const b=e.background;b?b.isColor&&(_.color.copy(b),e.background=null,S=!0):(_.color.copy(_g),S=!0);for(let C=0;C<6;C++){const T=C%3;T===0?(h.up.set(0,d[C],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x+p[C],o.y,o.z)):T===1?(h.up.set(0,0,d[C]),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y+p[C],o.z)):(h.up.set(0,d[C],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y,o.z+p[C]));const L=this._cubeSize;_a(s,T*L,C>2?L:0,L,L),g.setRenderTarget(s),S&&g.render(w,h),g.render(e,h)}g.toneMapping=y,g.autoClear=m,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ps||e.mapping===Aa;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mg());const o=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=o;const u=o.uniforms;u.envMap.value=e;const h=this._cubeSize;_a(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(c,Co)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,o=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[i];u.material=c;const h=c.uniforms,d=i/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),g=Math.sqrt(d*d-p*p),m=0+d*1.25,y=g*m,{_lodMax:v}=this,w=this._sizeLods[i],_=3*w*(i>v-es?i-v+es:0),S=4*(this._cubeSize-w);h.envMap.value=e.texture,h.roughness.value=y,h.mipInt.value=v-t,_a(o,_,S,3*w,2*w),s.setRenderTarget(o),s.render(u,Co),h.envMap.value=o.texture,h.roughness.value=0,h.mipInt.value=v-i,_a(e,_,S,3*w,2*w),s.setRenderTarget(e),s.render(u,Co)}_blur(e,t,i,s,o){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",o),this._halfBlur(c,e,i,i,s,"longitudinal",o)}_halfBlur(e,t,i,s,o,c,u){const h=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Nt("blur direction must be either latitudinal or longitudinal!");const p=3,g=this._lodMeshes[s];g.material=d;const m=d.uniforms,y=this._sizeLods[i]-1,v=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*Cs-1),w=o/v,_=isFinite(o)?1+Math.floor(p*w):Cs;_>Cs&&ct(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Cs}`);const S=[];let b=0;for(let F=0;F<Cs;++F){const E=F/w,I=Math.exp(-E*E/2);S.push(I),F===0?b+=I:F<_&&(b+=2*I)}for(let F=0;F<S.length;F++)S[F]=S[F]/b;m.envMap.value=e.texture,m.samples.value=_,m.weights.value=S,m.latitudinal.value=c==="latitudinal",u&&(m.poleAxis.value=u);const{_lodMax:C}=this;m.dTheta.value=v,m.mipInt.value=C-i;const T=this._sizeLods[s],L=3*T*(s>C-es?s-C+es:0),R=4*(this._cubeSize-T);_a(t,L,R,3*T,2*T),h.setRenderTarget(t),h.render(g,Co)}}function _2(a){const e=[],t=[],i=[];let s=a;const o=a-es+1+vg.length;for(let c=0;c<o;c++){const u=Math.pow(2,s);e.push(u);let h=1/u;c>a-es?h=vg[c-a+es-1]:c===0&&(h=0),t.push(h);const d=1/(u-2),p=-d,g=1+d,m=[p,p,g,p,g,g,p,p,g,g,p,g],y=6,v=6,w=3,_=2,S=1,b=new Float32Array(w*v*y),C=new Float32Array(_*v*y),T=new Float32Array(S*v*y);for(let R=0;R<y;R++){const F=R%3*2/3-1,E=R>2?0:-1,I=[F,E,0,F+2/3,E,0,F+2/3,E+1,0,F,E,0,F+2/3,E+1,0,F,E+1,0];b.set(I,w*v*R),C.set(m,_*v*R);const k=[R,R,R,R,R,R];T.set(k,S*v*R)}const L=new un;L.setAttribute("position",new Sn(b,w)),L.setAttribute("uv",new Sn(C,_)),L.setAttribute("faceIndex",new Sn(T,S)),i.push(new hn(L,null)),s>es&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Sg(a,e,t){const i=new ti(a,e,t);return i.texture.mapping=Wc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _a(a,e,t,i,s){a.viewport.set(e,t,i,s),a.scissor.set(e,t,i,s)}function y2(a,e,t){return new cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:x2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jc(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function S2(a,e,t){const i=new Float32Array(Cs),s=new J(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jc(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Mg(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function wg(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function jc(){return`

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
	`}class Hx extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ix(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Na(5,5,5),o=new cn({name:"CubemapFromEquirect",uniforms:Pa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ei,blending:Ki});o.uniforms.tEquirect.value=t;const c=new hn(s,o),u=t.minFilter;return t.minFilter===As&&(t.minFilter=xn),new bS(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(o)}}function M2(a){let e=new WeakMap,t=new WeakMap,i=null;function s(m,y=!1){return m==null?null:y?c(m):o(m)}function o(m){if(m&&m.isTexture){const y=m.mapping;if(y===Nh||y===Uh)if(e.has(m)){const v=e.get(m).texture;return u(v,m.mapping)}else{const v=m.image;if(v&&v.height>0){const w=new Hx(v.height);return w.fromEquirectangularTexture(a,m),e.set(m,w),m.addEventListener("dispose",d),u(w.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const y=m.mapping,v=y===Nh||y===Uh,w=y===Ps||y===Aa;if(v||w){let _=t.get(m);const S=_!==void 0?_.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==S)return i===null&&(i=new yg(a)),_=v?i.fromEquirectangular(m,_):i.fromCubemap(m,_),_.texture.pmremVersion=m.pmremVersion,t.set(m,_),_.texture;if(_!==void 0)return _.texture;{const b=m.image;return v&&b&&b.height>0||w&&b&&h(b)?(i===null&&(i=new yg(a)),_=v?i.fromEquirectangular(m):i.fromCubemap(m),_.texture.pmremVersion=m.pmremVersion,t.set(m,_),m.addEventListener("dispose",p),_.texture):null}}}return m}function u(m,y){return y===Nh?m.mapping=Ps:y===Uh&&(m.mapping=Aa),m}function h(m){let y=0;const v=6;for(let w=0;w<v;w++)m[w]!==void 0&&y++;return y===v}function d(m){const y=m.target;y.removeEventListener("dispose",d);const v=e.get(y);v!==void 0&&(e.delete(y),v.dispose())}function p(m){const y=m.target;y.removeEventListener("dispose",p);const v=t.get(y);v!==void 0&&(t.delete(y),v.dispose())}function g(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:g}}function w2(a){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=a.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ld("WebGLRenderer: "+i+" extension not supported."),s}}}function E2(a,e,t,i){const s={},o=new WeakMap;function c(g){const m=g.target;m.index!==null&&e.remove(m.index);for(const v in m.attributes)e.remove(m.attributes[v]);m.removeEventListener("dispose",c),delete s[m.id];const y=o.get(m);y&&(e.remove(y),o.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function u(g,m){return s[m.id]===!0||(m.addEventListener("dispose",c),s[m.id]=!0,t.memory.geometries++),m}function h(g){const m=g.attributes;for(const y in m)e.update(m[y],a.ARRAY_BUFFER)}function d(g){const m=[],y=g.index,v=g.attributes.position;let w=0;if(v===void 0)return;if(y!==null){const b=y.array;w=y.version;for(let C=0,T=b.length;C<T;C+=3){const L=b[C+0],R=b[C+1],F=b[C+2];m.push(L,R,R,F,F,L)}}else{const b=v.array;w=v.version;for(let C=0,T=b.length/3-1;C<T;C+=3){const L=C+0,R=C+1,F=C+2;m.push(L,R,R,F,F,L)}}const _=new(v.count>=65535?Px:Rx)(m,1);_.version=w;const S=o.get(g);S&&e.remove(S),o.set(g,_)}function p(g){const m=o.get(g);if(m){const y=g.index;y!==null&&m.version<y.version&&d(g)}else d(g);return o.get(g)}return{get:u,update:h,getWireframeAttribute:p}}function b2(a,e,t){let i;function s(g){i=g}let o,c;function u(g){o=g.type,c=g.bytesPerElement}function h(g,m){a.drawElements(i,m,o,g*c),t.update(m,i,1)}function d(g,m,y){y!==0&&(a.drawElementsInstanced(i,m,o,g*c,y),t.update(m,i,y))}function p(g,m,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,o,g,0,y);let w=0;for(let _=0;_<y;_++)w+=m[_];t.update(w,i,1)}this.setMode=s,this.setIndex=u,this.render=h,this.renderInstances=d,this.renderMultiDraw=p}function T2(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,c,u){switch(t.calls++,c){case a.TRIANGLES:t.triangles+=u*(o/3);break;case a.LINES:t.lines+=u*(o/2);break;case a.LINE_STRIP:t.lines+=u*(o-1);break;case a.LINE_LOOP:t.lines+=u*o;break;case a.POINTS:t.points+=u*o;break;default:Nt("WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function C2(a,e,t){const i=new WeakMap,s=new an;function o(c,u,h){const d=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let m=i.get(u);if(m===void 0||m.count!==g){let I=function(){F.dispose(),i.delete(u),u.removeEventListener("dispose",I)};m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,_=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let C=0;y===!0&&(C=1),v===!0&&(C=2),w===!0&&(C=3);let T=u.attributes.position.count*C,L=1;T>e.maxTextureSize&&(L=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const R=new Float32Array(T*L*4*g),F=new Tx(R,T,L,g);F.type=ki,F.needsUpdate=!0;const E=C*4;for(let k=0;k<g;k++){const U=_[k],B=S[k],K=b[k],ie=T*L*4*k;for(let W=0;W<U.count;W++){const ee=W*E;y===!0&&(s.fromBufferAttribute(U,W),R[ie+ee+0]=s.x,R[ie+ee+1]=s.y,R[ie+ee+2]=s.z,R[ie+ee+3]=0),v===!0&&(s.fromBufferAttribute(B,W),R[ie+ee+4]=s.x,R[ie+ee+5]=s.y,R[ie+ee+6]=s.z,R[ie+ee+7]=0),w===!0&&(s.fromBufferAttribute(K,W),R[ie+ee+8]=s.x,R[ie+ee+9]=s.y,R[ie+ee+10]=s.z,R[ie+ee+11]=K.itemSize===4?s.w:1)}}m={count:g,texture:F,size:new lt(T,L)},i.set(u,m),u.addEventListener("dispose",I)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(a,"morphTexture",c.morphTexture,t);else{let y=0;for(let w=0;w<d.length;w++)y+=d[w];const v=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(a,"morphTargetBaseInfluence",v),h.getUniforms().setValue(a,"morphTargetInfluences",d)}h.getUniforms().setValue(a,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(a,"morphTargetsTextureSize",m.size)}return{update:o}}function A2(a,e,t,i,s){let o=new WeakMap;function c(d){const p=s.render.frame,g=d.geometry,m=e.get(d,g);if(o.get(m)!==p&&(e.update(m),o.set(m,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),o.get(d)!==p&&(t.update(d.instanceMatrix,a.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,a.ARRAY_BUFFER),o.set(d,p))),d.isSkinnedMesh){const y=d.skeleton;o.get(y)!==p&&(y.update(),o.set(y,p))}return m}function u(){o=new WeakMap}function h(d){const p=d.target;p.removeEventListener("dispose",h),i.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:c,dispose:u}}const R2={[hx]:"LINEAR_TONE_MAPPING",[fx]:"REINHARD_TONE_MAPPING",[dx]:"CINEON_TONE_MAPPING",[px]:"ACES_FILMIC_TONE_MAPPING",[gx]:"AGX_TONE_MAPPING",[xx]:"NEUTRAL_TONE_MAPPING",[mx]:"CUSTOM_TONE_MAPPING"};function P2(a,e,t,i,s){const o=new ti(e,t,{type:a,depthBuffer:i,stencilBuffer:s,depthTexture:i?new Ra(e,t):void 0}),c=new ti(e,t,{type:di,depthBuffer:!1,stencilBuffer:!1}),u=new un;u.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Qt([0,2,0,0,2,0],2));const h=new mS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new hn(u,h),p=new Ua(-1,1,1,-1,0,1);let g=null,m=null,y=!1,v,w=null,_=[],S=!1;this.setSize=function(b,C){o.setSize(b,C),c.setSize(b,C);for(let T=0;T<_.length;T++){const L=_[T];L.setSize&&L.setSize(b,C)}},this.setEffects=function(b){_=b,S=_.length>0&&_[0].isRenderPass===!0;const C=o.width,T=o.height;for(let L=0;L<_.length;L++){const R=_[L];R.setSize&&R.setSize(C,T)}},this.begin=function(b,C){if(y||b.toneMapping===Zi&&_.length===0)return!1;if(w=C,C!==null){const T=C.width,L=C.height;(o.width!==T||o.height!==L)&&this.setSize(T,L)}return S===!1&&b.setRenderTarget(o),v=b.toneMapping,b.toneMapping=Zi,!0},this.hasRenderPass=function(){return S},this.end=function(b,C){b.toneMapping=v,y=!0;let T=o,L=c;for(let R=0;R<_.length;R++){const F=_[R];if(F.enabled!==!1&&(F.render(b,L,T,C),F.needsSwap!==!1)){const E=T;T=L,L=E}}if(g!==b.outputColorSpace||m!==b.toneMapping){g=b.outputColorSpace,m=b.toneMapping,h.defines={},Ct.getTransfer(g)===Vt&&(h.defines.SRGB_TRANSFER="");const R=R2[m];R&&(h.defines[R]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,b.setRenderTarget(w),b.render(d,p),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),c.dispose(),u.dispose(),h.dispose()}}const Vx=new Bn,hd=new Ra(1,1),Gx=new Tx,Wx=new jy,Xx=new Ix,Eg=[],bg=[],Tg=new Float32Array(16),Cg=new Float32Array(9),Ag=new Float32Array(4);function Fa(a,e,t){const i=a[0];if(i<=0||i>0)return a;const s=e*t;let o=Eg[s];if(o===void 0&&(o=new Float32Array(s),Eg[s]=o),e!==0){i.toArray(o,0);for(let c=1,u=0;c!==e;++c)u+=t,a[c].toArray(o,u)}return o}function Mn(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function wn(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function qc(a,e){let t=bg[e];t===void 0&&(t=new Int32Array(e),bg[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function L2(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function I2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;a.uniform2fv(this.addr,e),wn(t,e)}}function N2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mn(t,e))return;a.uniform3fv(this.addr,e),wn(t,e)}}function U2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;a.uniform4fv(this.addr,e),wn(t,e)}}function F2(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mn(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),wn(t,e)}else{if(Mn(t,i))return;Ag.set(i),a.uniformMatrix2fv(this.addr,!1,Ag),wn(t,i)}}function D2(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mn(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),wn(t,e)}else{if(Mn(t,i))return;Cg.set(i),a.uniformMatrix3fv(this.addr,!1,Cg),wn(t,i)}}function k2(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mn(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),wn(t,e)}else{if(Mn(t,i))return;Tg.set(i),a.uniformMatrix4fv(this.addr,!1,Tg),wn(t,i)}}function O2(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function z2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;a.uniform2iv(this.addr,e),wn(t,e)}}function B2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;a.uniform3iv(this.addr,e),wn(t,e)}}function H2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;a.uniform4iv(this.addr,e),wn(t,e)}}function V2(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function G2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;a.uniform2uiv(this.addr,e),wn(t,e)}}function W2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;a.uniform3uiv(this.addr,e),wn(t,e)}}function X2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;a.uniform4uiv(this.addr,e),wn(t,e)}}function j2(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s);let o;this.type===a.SAMPLER_2D_SHADOW?(hd.compareFunction=t.isReversedDepthBuffer()?Id:Ld,o=hd):o=Vx,t.setTexture2D(e||o,s)}function q2(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Wx,s)}function Y2(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Xx,s)}function $2(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Gx,s)}function K2(a){switch(a){case 5126:return L2;case 35664:return I2;case 35665:return N2;case 35666:return U2;case 35674:return F2;case 35675:return D2;case 35676:return k2;case 5124:case 35670:return O2;case 35667:case 35671:return z2;case 35668:case 35672:return B2;case 35669:case 35673:return H2;case 5125:return V2;case 36294:return G2;case 36295:return W2;case 36296:return X2;case 35678:case 36198:case 36298:case 36306:case 35682:return j2;case 35679:case 36299:case 36307:return q2;case 35680:case 36300:case 36308:case 36293:return Y2;case 36289:case 36303:case 36311:case 36292:return $2}}function Z2(a,e){a.uniform1fv(this.addr,e)}function Q2(a,e){const t=Fa(e,this.size,2);a.uniform2fv(this.addr,t)}function J2(a,e){const t=Fa(e,this.size,3);a.uniform3fv(this.addr,t)}function eE(a,e){const t=Fa(e,this.size,4);a.uniform4fv(this.addr,t)}function tE(a,e){const t=Fa(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function nE(a,e){const t=Fa(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function iE(a,e){const t=Fa(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function rE(a,e){a.uniform1iv(this.addr,e)}function sE(a,e){a.uniform2iv(this.addr,e)}function aE(a,e){a.uniform3iv(this.addr,e)}function oE(a,e){a.uniform4iv(this.addr,e)}function lE(a,e){a.uniform1uiv(this.addr,e)}function cE(a,e){a.uniform2uiv(this.addr,e)}function uE(a,e){a.uniform3uiv(this.addr,e)}function hE(a,e){a.uniform4uiv(this.addr,e)}function fE(a,e,t){const i=this.cache,s=e.length,o=qc(t,s);Mn(i,o)||(a.uniform1iv(this.addr,o),wn(i,o));let c;this.type===a.SAMPLER_2D_SHADOW?c=hd:c=Vx;for(let u=0;u!==s;++u)t.setTexture2D(e[u]||c,o[u])}function dE(a,e,t){const i=this.cache,s=e.length,o=qc(t,s);Mn(i,o)||(a.uniform1iv(this.addr,o),wn(i,o));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||Wx,o[c])}function pE(a,e,t){const i=this.cache,s=e.length,o=qc(t,s);Mn(i,o)||(a.uniform1iv(this.addr,o),wn(i,o));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||Xx,o[c])}function mE(a,e,t){const i=this.cache,s=e.length,o=qc(t,s);Mn(i,o)||(a.uniform1iv(this.addr,o),wn(i,o));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||Gx,o[c])}function gE(a){switch(a){case 5126:return Z2;case 35664:return Q2;case 35665:return J2;case 35666:return eE;case 35674:return tE;case 35675:return nE;case 35676:return iE;case 5124:case 35670:return rE;case 35667:case 35671:return sE;case 35668:case 35672:return aE;case 35669:case 35673:return oE;case 5125:return lE;case 36294:return cE;case 36295:return uE;case 36296:return hE;case 35678:case 36198:case 36298:case 36306:case 35682:return fE;case 35679:case 36299:case 36307:return dE;case 35680:case 36300:case 36308:case 36293:return pE;case 36289:case 36303:case 36311:case 36292:return mE}}class xE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=K2(t.type)}}class vE{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gE(t.type)}}class _E{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let o=0,c=s.length;o!==c;++o){const u=s[o];u.setValue(e,t[u.id],i)}}}const ff=/(\w+)(\])?(\[|\.)?/g;function Rg(a,e){a.seq.push(e),a.map[e.id]=e}function yE(a,e,t){const i=a.name,s=i.length;for(ff.lastIndex=0;;){const o=ff.exec(i),c=ff.lastIndex;let u=o[1];const h=o[2]==="]",d=o[3];if(h&&(u=u|0),d===void 0||d==="["&&c+2===s){Rg(t,d===void 0?new xE(u,a,e):new vE(u,a,e));break}else{let g=t.map[u];g===void 0&&(g=new _E(u),Rg(t,g)),t=g}}}class Ac{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const u=e.getActiveUniform(t,c),h=e.getUniformLocation(t,u.name);yE(u,h,this)}const s=[],o=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(c):o.push(c);s.length>0&&(this.seq=s.concat(o))}setValue(e,t,i,s){const o=this.map[t];o!==void 0&&o.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let o=0,c=t.length;o!==c;++o){const u=t[o],h=i[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,o=e.length;s!==o;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function Pg(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}const SE=37297;let ME=0;function wE(a,e){const t=a.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=s;c<o;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const Lg=new xt;function EE(a){Ct._getMatrix(Lg,Ct.workingColorSpace,a);const e=`mat3( ${Lg.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(a)){case Uc:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Ig(a,e,t){const i=a.getShaderParameter(e,a.COMPILE_STATUS),o=(a.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+o+`

`+wE(a.getShaderSource(e),u)}else return o}function bE(a,e){const t=EE(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const TE={[hx]:"Linear",[fx]:"Reinhard",[dx]:"Cineon",[px]:"ACESFilmic",[gx]:"AgX",[xx]:"Neutral",[mx]:"Custom"};function CE(a,e){const t=TE[e];return t===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sc=new J;function AE(){Ct.getLuminanceCoefficients(Sc);const a=Sc.x.toFixed(4),e=Sc.y.toFixed(4),t=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RE(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function PE(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function LE(a,e){const t={},i=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=a.getActiveAttrib(e,s),c=o.name;let u=1;o.type===a.FLOAT_MAT2&&(u=2),o.type===a.FLOAT_MAT3&&(u=3),o.type===a.FLOAT_MAT4&&(u=4),t[c]={type:o.type,location:a.getAttribLocation(e,c),locationSize:u}}return t}function Io(a){return a!==""}function Ng(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ug(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const IE=/^[ \t]*#include +<([\w\d./]+)>/gm;function fd(a){return a.replace(IE,UE)}const NE=new Map;function UE(a,e){let t=Mt[e];if(t===void 0){const i=NE.get(e);if(i!==void 0)t=Mt[i],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return fd(t)}const FE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fg(a){return a.replace(FE,DE)}function DE(a,e,t,i){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Dg(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const kE={[wc]:"SHADOWMAP_TYPE_PCF",[Lo]:"SHADOWMAP_TYPE_VSM"};function OE(a){return kE[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const zE={[Ps]:"ENVMAP_TYPE_CUBE",[Aa]:"ENVMAP_TYPE_CUBE",[Wc]:"ENVMAP_TYPE_CUBE_UV"};function BE(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":zE[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const HE={[Aa]:"ENVMAP_MODE_REFRACTION"};function VE(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":HE[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const GE={[wd]:"ENVMAP_BLENDING_MULTIPLY",[uy]:"ENVMAP_BLENDING_MIX",[hy]:"ENVMAP_BLENDING_ADD"};function WE(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":GE[a.combine]||"ENVMAP_BLENDING_NONE"}function XE(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function jE(a,e,t,i){const s=a.getContext(),o=t.defines;let c=t.vertexShader,u=t.fragmentShader;const h=OE(t),d=BE(t),p=VE(t),g=WE(t),m=XE(t),y=RE(t),v=PE(o),w=s.createProgram();let _,S,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Io).join(`
`),_.length>0&&(_+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Io).join(`
`),S.length>0&&(S+=`
`)):(_=[Dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),S=[Dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?Mt.tonemapping_pars_fragment:"",t.toneMapping!==Zi?CE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,bE("linearToOutputTexel",t.outputColorSpace),AE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Io).join(`
`)),c=fd(c),c=Ng(c,t),c=Ug(c,t),u=fd(u),u=Ng(u,t),u=Ug(u,t),c=Fg(c),u=Fg(u),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,S=["#define varying in",t.glslVersion===D0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===D0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const C=b+_+c,T=b+S+u,L=Pg(s,s.VERTEX_SHADER,C),R=Pg(s,s.FRAGMENT_SHADER,T);s.attachShader(w,L),s.attachShader(w,R),t.index0AttributeName!==void 0?s.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(w,0,"position"),s.linkProgram(w);function F(U){if(a.debug.checkShaderErrors){const B=s.getProgramInfoLog(w)||"",K=s.getShaderInfoLog(L)||"",ie=s.getShaderInfoLog(R)||"",W=B.trim(),ee=K.trim(),V=ie.trim();let G=!0,$=!0;if(s.getProgramParameter(w,s.LINK_STATUS)===!1)if(G=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(s,w,L,R);else{const X=Ig(s,L,"vertex"),z=Ig(s,R,"fragment");Nt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(w,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+W+`
`+X+`
`+z)}else W!==""?ct("WebGLProgram: Program Info Log:",W):(ee===""||V==="")&&($=!1);$&&(U.diagnostics={runnable:G,programLog:W,vertexShader:{log:ee,prefix:_},fragmentShader:{log:V,prefix:S}})}s.deleteShader(L),s.deleteShader(R),E=new Ac(s,w),I=LE(s,w)}let E;this.getUniforms=function(){return E===void 0&&F(this),E};let I;this.getAttributes=function(){return I===void 0&&F(this),I};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(w,SE)),k},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ME++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=L,this.fragmentShader=R,this}let qE=0;class YE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new $E(e),t.set(e,i)),i}}class $E{constructor(e){this.id=qE++,this.code=e,this.usedTimes=0}}function KE(a){return a===Ls||a===Pc||a===Lc}function ZE(a,e,t,i,s,o){const c=new Cx,u=new YE,h=new Set,d=[],p=new Map,g=i.logarithmicDepthBuffer;let m=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(E){return h.add(E),E===0?"uv":`uv${E}`}function w(E,I,k,U,B,K){const ie=U.fog,W=B.geometry,ee=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,V=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,G=e.get(E.envMap||ee,V),$=G&&G.mapping===Wc?G.image.height:null,X=y[E.type];E.precision!==null&&(m=i.getMaxPrecision(E.precision),m!==E.precision&&ct("WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const z=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Z=z!==void 0?z.length:0;let me=0;W.morphAttributes.position!==void 0&&(me=1),W.morphAttributes.normal!==void 0&&(me=2),W.morphAttributes.color!==void 0&&(me=3);let Ae,Ee,Q,ve;if(X){const ht=Yi[X];Ae=ht.vertexShader,Ee=ht.fragmentShader}else Ae=E.vertexShader,Ee=E.fragmentShader,u.update(E),Q=u.getVertexShaderID(E),ve=u.getFragmentShaderID(E);const pe=a.getRenderTarget(),Oe=a.state.buffers.depth.getReversed(),et=B.isInstancedMesh===!0,rt=B.isBatchedMesh===!0,Dt=!!E.map,gt=!!E.matcap,At=!!G,kt=!!E.aoMap,vt=!!E.lightMap,_t=!!E.bumpMap,Gt=!!E.normalMap,fn=!!E.displacementMap,te=!!E.emissiveMap,Ft=!!E.metalnessMap,yt=!!E.roughnessMap,Lt=E.anisotropy>0,ze=E.clearcoat>0,Wt=E.dispersion>0,O=E.iridescence>0,A=E.sheen>0,se=E.transmission>0,fe=Lt&&!!E.anisotropyMap,ye=ze&&!!E.clearcoatMap,Ce=ze&&!!E.clearcoatNormalMap,Fe=ze&&!!E.clearcoatRoughnessMap,de=O&&!!E.iridescenceMap,_e=O&&!!E.iridescenceThicknessMap,Be=A&&!!E.sheenColorMap,Ge=A&&!!E.sheenRoughnessMap,Re=!!E.specularMap,Pe=!!E.specularColorMap,st=!!E.specularIntensityMap,ut=se&&!!E.transmissionMap,St=se&&!!E.thicknessMap,j=!!E.gradientMap,Le=!!E.alphaMap,xe=E.alphaTest>0,He=!!E.alphaHash,Ne=!!E.extensions;let Se=Zi;E.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Se=a.toneMapping);const qe={shaderID:X,shaderType:E.type,shaderName:E.name,vertexShader:Ae,fragmentShader:Ee,defines:E.defines,customVertexShaderID:Q,customFragmentShaderID:ve,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:rt,batchingColor:rt&&B._colorsTexture!==null,instancing:et,instancingColor:et&&B.instanceColor!==null,instancingMorph:et&&B.morphTexture!==null,outputColorSpace:pe===null?a.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Ct.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Dt,matcap:gt,envMap:At,envMapMode:At&&G.mapping,envMapCubeUVHeight:$,aoMap:kt,lightMap:vt,bumpMap:_t,normalMap:Gt,displacementMap:fn,emissiveMap:te,normalMapObjectSpace:Gt&&E.normalMapType===py,normalMapTangentSpace:Gt&&E.normalMapType===Ic,packedNormalMap:Gt&&E.normalMapType===Ic&&KE(E.normalMap.format),metalnessMap:Ft,roughnessMap:yt,anisotropy:Lt,anisotropyMap:fe,clearcoat:ze,clearcoatMap:ye,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Fe,dispersion:Wt,iridescence:O,iridescenceMap:de,iridescenceThicknessMap:_e,sheen:A,sheenColorMap:Be,sheenRoughnessMap:Ge,specularMap:Re,specularColorMap:Pe,specularIntensityMap:st,transmission:se,transmissionMap:ut,thicknessMap:St,gradientMap:j,opaque:E.transparent===!1&&E.blending===wa&&E.alphaToCoverage===!1,alphaMap:Le,alphaTest:xe,alphaHash:He,combine:E.combine,mapUv:Dt&&v(E.map.channel),aoMapUv:kt&&v(E.aoMap.channel),lightMapUv:vt&&v(E.lightMap.channel),bumpMapUv:_t&&v(E.bumpMap.channel),normalMapUv:Gt&&v(E.normalMap.channel),displacementMapUv:fn&&v(E.displacementMap.channel),emissiveMapUv:te&&v(E.emissiveMap.channel),metalnessMapUv:Ft&&v(E.metalnessMap.channel),roughnessMapUv:yt&&v(E.roughnessMap.channel),anisotropyMapUv:fe&&v(E.anisotropyMap.channel),clearcoatMapUv:ye&&v(E.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&v(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Fe&&v(E.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&v(E.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&v(E.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&v(E.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&v(E.sheenRoughnessMap.channel),specularMapUv:Re&&v(E.specularMap.channel),specularColorMapUv:Pe&&v(E.specularColorMap.channel),specularIntensityMapUv:st&&v(E.specularIntensityMap.channel),transmissionMapUv:ut&&v(E.transmissionMap.channel),thicknessMapUv:St&&v(E.thicknessMap.channel),alphaMapUv:Le&&v(E.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Gt||Lt),vertexNormals:!!W.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!W.attributes.uv&&(Dt||Le),fog:!!ie,useFog:E.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||W.attributes.normal===void 0&&Gt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Oe,skinning:B.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:me,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:K.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:E.dithering,shadowMapEnabled:a.shadowMap.enabled&&k.length>0,shadowMapType:a.shadowMap.type,toneMapping:Se,decodeVideoTexture:Dt&&E.map.isVideoTexture===!0&&Ct.getTransfer(E.map.colorSpace)===Vt,decodeVideoTextureEmissive:te&&E.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(E.emissiveMap.colorSpace)===Vt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Fi,flipSided:E.side===ei,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ne&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&E.extensions.multiDraw===!0||rt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return qe.vertexUv1s=h.has(1),qe.vertexUv2s=h.has(2),qe.vertexUv3s=h.has(3),h.clear(),qe}function _(E){const I=[];if(E.shaderID?I.push(E.shaderID):(I.push(E.customVertexShaderID),I.push(E.customFragmentShaderID)),E.defines!==void 0)for(const k in E.defines)I.push(k),I.push(E.defines[k]);return E.isRawShaderMaterial===!1&&(S(I,E),b(I,E),I.push(a.outputColorSpace)),I.push(E.customProgramCacheKey),I.join()}function S(E,I){E.push(I.precision),E.push(I.outputColorSpace),E.push(I.envMapMode),E.push(I.envMapCubeUVHeight),E.push(I.mapUv),E.push(I.alphaMapUv),E.push(I.lightMapUv),E.push(I.aoMapUv),E.push(I.bumpMapUv),E.push(I.normalMapUv),E.push(I.displacementMapUv),E.push(I.emissiveMapUv),E.push(I.metalnessMapUv),E.push(I.roughnessMapUv),E.push(I.anisotropyMapUv),E.push(I.clearcoatMapUv),E.push(I.clearcoatNormalMapUv),E.push(I.clearcoatRoughnessMapUv),E.push(I.iridescenceMapUv),E.push(I.iridescenceThicknessMapUv),E.push(I.sheenColorMapUv),E.push(I.sheenRoughnessMapUv),E.push(I.specularMapUv),E.push(I.specularColorMapUv),E.push(I.specularIntensityMapUv),E.push(I.transmissionMapUv),E.push(I.thicknessMapUv),E.push(I.combine),E.push(I.fogExp2),E.push(I.sizeAttenuation),E.push(I.morphTargetsCount),E.push(I.morphAttributeCount),E.push(I.numDirLights),E.push(I.numPointLights),E.push(I.numSpotLights),E.push(I.numSpotLightMaps),E.push(I.numHemiLights),E.push(I.numRectAreaLights),E.push(I.numDirLightShadows),E.push(I.numPointLightShadows),E.push(I.numSpotLightShadows),E.push(I.numSpotLightShadowsWithMaps),E.push(I.numLightProbes),E.push(I.shadowMapType),E.push(I.toneMapping),E.push(I.numClippingPlanes),E.push(I.numClipIntersection),E.push(I.depthPacking)}function b(E,I){c.disableAll(),I.instancing&&c.enable(0),I.instancingColor&&c.enable(1),I.instancingMorph&&c.enable(2),I.matcap&&c.enable(3),I.envMap&&c.enable(4),I.normalMapObjectSpace&&c.enable(5),I.normalMapTangentSpace&&c.enable(6),I.clearcoat&&c.enable(7),I.iridescence&&c.enable(8),I.alphaTest&&c.enable(9),I.vertexColors&&c.enable(10),I.vertexAlphas&&c.enable(11),I.vertexUv1s&&c.enable(12),I.vertexUv2s&&c.enable(13),I.vertexUv3s&&c.enable(14),I.vertexTangents&&c.enable(15),I.anisotropy&&c.enable(16),I.alphaHash&&c.enable(17),I.batching&&c.enable(18),I.dispersion&&c.enable(19),I.batchingColor&&c.enable(20),I.gradientMap&&c.enable(21),I.packedNormalMap&&c.enable(22),I.vertexNormals&&c.enable(23),E.push(c.mask),c.disableAll(),I.fog&&c.enable(0),I.useFog&&c.enable(1),I.flatShading&&c.enable(2),I.logarithmicDepthBuffer&&c.enable(3),I.reversedDepthBuffer&&c.enable(4),I.skinning&&c.enable(5),I.morphTargets&&c.enable(6),I.morphNormals&&c.enable(7),I.morphColors&&c.enable(8),I.premultipliedAlpha&&c.enable(9),I.shadowMapEnabled&&c.enable(10),I.doubleSided&&c.enable(11),I.flipSided&&c.enable(12),I.useDepthPacking&&c.enable(13),I.dithering&&c.enable(14),I.transmission&&c.enable(15),I.sheen&&c.enable(16),I.opaque&&c.enable(17),I.pointsUvs&&c.enable(18),I.decodeVideoTexture&&c.enable(19),I.decodeVideoTextureEmissive&&c.enable(20),I.alphaToCoverage&&c.enable(21),I.numLightProbeGrids>0&&c.enable(22),E.push(c.mask)}function C(E){const I=y[E.type];let k;if(I){const U=Yi[I];k=Oc.clone(U.uniforms)}else k=E.uniforms;return k}function T(E,I){let k=p.get(I);return k!==void 0?++k.usedTimes:(k=new jE(a,I,E,s),d.push(k),p.set(I,k)),k}function L(E){if(--E.usedTimes===0){const I=d.indexOf(E);d[I]=d[d.length-1],d.pop(),p.delete(E.cacheKey),E.destroy()}}function R(E){u.remove(E)}function F(){u.dispose()}return{getParameters:w,getProgramCacheKey:_,getUniforms:C,acquireProgram:T,releaseProgram:L,releaseShaderCache:R,programs:d,dispose:F}}function QE(){let a=new WeakMap;function e(c){return a.has(c)}function t(c){let u=a.get(c);return u===void 0&&(u={},a.set(c,u)),u}function i(c){a.delete(c)}function s(c,u,h){a.get(c)[u]=h}function o(){a=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:o}}function JE(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function kg(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Og(){const a=[];let e=0;const t=[],i=[],s=[];function o(){e=0,t.length=0,i.length=0,s.length=0}function c(m){let y=0;return m.isInstancedMesh&&(y+=2),m.isSkinnedMesh&&(y+=1),y}function u(m,y,v,w,_,S){let b=a[e];return b===void 0?(b={id:m.id,object:m,geometry:y,material:v,materialVariant:c(m),groupOrder:w,renderOrder:m.renderOrder,z:_,group:S},a[e]=b):(b.id=m.id,b.object=m,b.geometry=y,b.material=v,b.materialVariant=c(m),b.groupOrder=w,b.renderOrder=m.renderOrder,b.z=_,b.group=S),e++,b}function h(m,y,v,w,_,S){const b=u(m,y,v,w,_,S);v.transmission>0?i.push(b):v.transparent===!0?s.push(b):t.push(b)}function d(m,y,v,w,_,S){const b=u(m,y,v,w,_,S);v.transmission>0?i.unshift(b):v.transparent===!0?s.unshift(b):t.unshift(b)}function p(m,y){t.length>1&&t.sort(m||JE),i.length>1&&i.sort(y||kg),s.length>1&&s.sort(y||kg)}function g(){for(let m=e,y=a.length;m<y;m++){const v=a[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:s,init:o,push:h,unshift:d,finish:g,sort:p}}function eb(){let a=new WeakMap;function e(i,s){const o=a.get(i);let c;return o===void 0?(c=new Og,a.set(i,[c])):s>=o.length?(c=new Og,o.push(c)):c=o[s],c}function t(){a=new WeakMap}return{get:e,dispose:t}}function tb(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new Ye};break;case"SpotLight":t={position:new J,direction:new J,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new J,halfWidth:new J,halfHeight:new J};break}return a[e.id]=t,t}}}function nb(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let ib=0;function rb(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function sb(a){const e=new tb,t=nb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new J);const s=new J,o=new Yt,c=new Yt;function u(d){let p=0,g=0,m=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let y=0,v=0,w=0,_=0,S=0,b=0,C=0,T=0,L=0,R=0,F=0;d.sort(rb);for(let I=0,k=d.length;I<k;I++){const U=d[I],B=U.color,K=U.intensity,ie=U.distance;let W=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Ls?W=U.shadow.map.texture:W=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)p+=B.r*K,g+=B.g*K,m+=B.b*K;else if(U.isLightProbe){for(let ee=0;ee<9;ee++)i.probe[ee].addScaledVector(U.sh.coefficients[ee],K);F++}else if(U.isDirectionalLight){const ee=e.get(U);if(ee.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const V=U.shadow,G=t.get(U);G.shadowIntensity=V.intensity,G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,i.directionalShadow[y]=G,i.directionalShadowMap[y]=W,i.directionalShadowMatrix[y]=U.shadow.matrix,b++}i.directional[y]=ee,y++}else if(U.isSpotLight){const ee=e.get(U);ee.position.setFromMatrixPosition(U.matrixWorld),ee.color.copy(B).multiplyScalar(K),ee.distance=ie,ee.coneCos=Math.cos(U.angle),ee.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),ee.decay=U.decay,i.spot[w]=ee;const V=U.shadow;if(U.map&&(i.spotLightMap[L]=U.map,L++,V.updateMatrices(U),U.castShadow&&R++),i.spotLightMatrix[w]=V.matrix,U.castShadow){const G=t.get(U);G.shadowIntensity=V.intensity,G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,i.spotShadow[w]=G,i.spotShadowMap[w]=W,T++}w++}else if(U.isRectAreaLight){const ee=e.get(U);ee.color.copy(B).multiplyScalar(K),ee.halfWidth.set(U.width*.5,0,0),ee.halfHeight.set(0,U.height*.5,0),i.rectArea[_]=ee,_++}else if(U.isPointLight){const ee=e.get(U);if(ee.color.copy(U.color).multiplyScalar(U.intensity),ee.distance=U.distance,ee.decay=U.decay,U.castShadow){const V=U.shadow,G=t.get(U);G.shadowIntensity=V.intensity,G.shadowBias=V.bias,G.shadowNormalBias=V.normalBias,G.shadowRadius=V.radius,G.shadowMapSize=V.mapSize,G.shadowCameraNear=V.camera.near,G.shadowCameraFar=V.camera.far,i.pointShadow[v]=G,i.pointShadowMap[v]=W,i.pointShadowMatrix[v]=U.shadow.matrix,C++}i.point[v]=ee,v++}else if(U.isHemisphereLight){const ee=e.get(U);ee.skyColor.copy(U.color).multiplyScalar(K),ee.groundColor.copy(U.groundColor).multiplyScalar(K),i.hemi[S]=ee,S++}}_>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ve.LTC_FLOAT_1,i.rectAreaLTC2=Ve.LTC_FLOAT_2):(i.rectAreaLTC1=Ve.LTC_HALF_1,i.rectAreaLTC2=Ve.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=g,i.ambient[2]=m;const E=i.hash;(E.directionalLength!==y||E.pointLength!==v||E.spotLength!==w||E.rectAreaLength!==_||E.hemiLength!==S||E.numDirectionalShadows!==b||E.numPointShadows!==C||E.numSpotShadows!==T||E.numSpotMaps!==L||E.numLightProbes!==F)&&(i.directional.length=y,i.spot.length=w,i.rectArea.length=_,i.point.length=v,i.hemi.length=S,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=T+L-R,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=F,E.directionalLength=y,E.pointLength=v,E.spotLength=w,E.rectAreaLength=_,E.hemiLength=S,E.numDirectionalShadows=b,E.numPointShadows=C,E.numSpotShadows=T,E.numSpotMaps=L,E.numLightProbes=F,i.version=ib++)}function h(d,p){let g=0,m=0,y=0,v=0,w=0;const _=p.matrixWorldInverse;for(let S=0,b=d.length;S<b;S++){const C=d[S];if(C.isDirectionalLight){const T=i.directional[g];T.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(_),g++}else if(C.isSpotLight){const T=i.spot[y];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(_),T.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(_),y++}else if(C.isRectAreaLight){const T=i.rectArea[v];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(_),c.identity(),o.copy(C.matrixWorld),o.premultiply(_),c.extractRotation(o),T.halfWidth.set(C.width*.5,0,0),T.halfHeight.set(0,C.height*.5,0),T.halfWidth.applyMatrix4(c),T.halfHeight.applyMatrix4(c),v++}else if(C.isPointLight){const T=i.point[m];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(_),m++}else if(C.isHemisphereLight){const T=i.hemi[w];T.direction.setFromMatrixPosition(C.matrixWorld),T.direction.transformDirection(_),w++}}}return{setup:u,setupView:h,state:i}}function zg(a){const e=new sb(a),t=[],i=[],s=[];function o(m){g.camera=m,t.length=0,i.length=0,s.length=0}function c(m){t.push(m)}function u(m){i.push(m)}function h(m){s.push(m)}function d(){e.setup(t)}function p(m){e.setupView(t,m)}const g={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:g,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:u,pushLightProbeGrid:h}}function ab(a){let e=new WeakMap;function t(s,o=0){const c=e.get(s);let u;return c===void 0?(u=new zg(a),e.set(s,[u])):o>=c.length?(u=new zg(a),c.push(u)):u=c[o],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const ob=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lb=`uniform sampler2D shadow_pass;
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
}`,cb=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],ub=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Bg=new Yt,Ao=new J,df=new J;function hb(a,e,t){let i=new kd;const s=new lt,o=new lt,c=new an,u=new xS,h=new vS,d={},p=t.maxTextureSize,g={[ns]:ei,[ei]:ns,[Fi]:Fi},m=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:ob,fragmentShader:lb}),y=m.clone();y.defines.HORIZONTAL_PASS=1;const v=new un;v.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new hn(v,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc;let S=this.type;this.render=function(R,F,E){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||R.length===0)return;this.type===X1&&(ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=wc);const I=a.getRenderTarget(),k=a.getActiveCubeFace(),U=a.getActiveMipmapLevel(),B=a.state;B.setBlending(Ki),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const K=S!==this.type;K&&F.traverse(function(ie){ie.material&&(Array.isArray(ie.material)?ie.material.forEach(W=>W.needsUpdate=!0):ie.material.needsUpdate=!0)});for(let ie=0,W=R.length;ie<W;ie++){const ee=R[ie],V=ee.shadow;if(V===void 0){ct("WebGLShadowMap:",ee,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const G=V.getFrameExtents();s.multiply(G),o.copy(V.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(o.x=Math.floor(p/G.x),s.x=o.x*G.x,V.mapSize.x=o.x),s.y>p&&(o.y=Math.floor(p/G.y),s.y=o.y*G.y,V.mapSize.y=o.y));const $=a.state.buffers.depth.getReversed();if(V.camera._reversedDepth=$,V.map===null||K===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Lo){if(ee.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ti(s.x,s.y,{format:Ls,type:di,minFilter:xn,magFilter:xn,generateMipmaps:!1}),V.map.texture.name=ee.name+".shadowMap",V.map.depthTexture=new Ra(s.x,s.y,ki),V.map.depthTexture.name=ee.name+".shadowMapDepth",V.map.depthTexture.format=vr,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=In,V.map.depthTexture.magFilter=In}else ee.isPointLight?(V.map=new Hx(s.x),V.map.depthTexture=new hS(s.x,Qi)):(V.map=new ti(s.x,s.y),V.map.depthTexture=new Ra(s.x,s.y,Qi)),V.map.depthTexture.name=ee.name+".shadowMap",V.map.depthTexture.format=vr,this.type===wc?(V.map.depthTexture.compareFunction=$?Id:Ld,V.map.depthTexture.minFilter=xn,V.map.depthTexture.magFilter=xn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=In,V.map.depthTexture.magFilter=In);V.camera.updateProjectionMatrix()}const X=V.map.isWebGLCubeRenderTarget?6:1;for(let z=0;z<X;z++){if(V.map.isWebGLCubeRenderTarget)a.setRenderTarget(V.map,z),a.clear();else{z===0&&(a.setRenderTarget(V.map),a.clear());const Z=V.getViewport(z);c.set(o.x*Z.x,o.y*Z.y,o.x*Z.z,o.y*Z.w),B.viewport(c)}if(ee.isPointLight){const Z=V.camera,me=V.matrix,Ae=ee.distance||Z.far;Ae!==Z.far&&(Z.far=Ae,Z.updateProjectionMatrix()),Ao.setFromMatrixPosition(ee.matrixWorld),Z.position.copy(Ao),df.copy(Z.position),df.add(cb[z]),Z.up.copy(ub[z]),Z.lookAt(df),Z.updateMatrixWorld(),me.makeTranslation(-Ao.x,-Ao.y,-Ao.z),Bg.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Bg,Z.coordinateSystem,Z.reversedDepth)}else V.updateMatrices(ee);i=V.getFrustum(),T(F,E,V.camera,ee,this.type)}V.isPointLightShadow!==!0&&this.type===Lo&&b(V,E),V.needsUpdate=!1}S=this.type,_.needsUpdate=!1,a.setRenderTarget(I,k,U)};function b(R,F){const E=e.update(w);m.defines.VSM_SAMPLES!==R.blurSamples&&(m.defines.VSM_SAMPLES=R.blurSamples,y.defines.VSM_SAMPLES=R.blurSamples,m.needsUpdate=!0,y.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ti(s.x,s.y,{format:Ls,type:di})),m.uniforms.shadow_pass.value=R.map.depthTexture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,a.setRenderTarget(R.mapPass),a.clear(),a.renderBufferDirect(F,null,E,m,w,null),y.uniforms.shadow_pass.value=R.mapPass.texture,y.uniforms.resolution.value=R.mapSize,y.uniforms.radius.value=R.radius,a.setRenderTarget(R.map),a.clear(),a.renderBufferDirect(F,null,E,y,w,null)}function C(R,F,E,I){let k=null;const U=E.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)k=U;else if(k=E.isPointLight===!0?h:u,a.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const B=k.uuid,K=F.uuid;let ie=d[B];ie===void 0&&(ie={},d[B]=ie);let W=ie[K];W===void 0&&(W=k.clone(),ie[K]=W,F.addEventListener("dispose",L)),k=W}if(k.visible=F.visible,k.wireframe=F.wireframe,I===Lo?k.side=F.shadowSide!==null?F.shadowSide:F.side:k.side=F.shadowSide!==null?F.shadowSide:g[F.side],k.alphaMap=F.alphaMap,k.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,k.map=F.map,k.clipShadows=F.clipShadows,k.clippingPlanes=F.clippingPlanes,k.clipIntersection=F.clipIntersection,k.displacementMap=F.displacementMap,k.displacementScale=F.displacementScale,k.displacementBias=F.displacementBias,k.wireframeLinewidth=F.wireframeLinewidth,k.linewidth=F.linewidth,E.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const B=a.properties.get(k);B.light=E}return k}function T(R,F,E,I,k){if(R.visible===!1)return;if(R.layers.test(F.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&k===Lo)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,R.matrixWorld);const K=e.update(R),ie=R.material;if(Array.isArray(ie)){const W=K.groups;for(let ee=0,V=W.length;ee<V;ee++){const G=W[ee],$=ie[G.materialIndex];if($&&$.visible){const X=C(R,$,I,k);R.onBeforeShadow(a,R,F,E,K,X,G),a.renderBufferDirect(E,null,K,X,R,G),R.onAfterShadow(a,R,F,E,K,X,G)}}}else if(ie.visible){const W=C(R,ie,I,k);R.onBeforeShadow(a,R,F,E,K,W,null),a.renderBufferDirect(E,null,K,W,R,null),R.onAfterShadow(a,R,F,E,K,W,null)}}const B=R.children;for(let K=0,ie=B.length;K<ie;K++)T(B[K],F,E,I,k)}function L(R){R.target.removeEventListener("dispose",L);for(const E in d){const I=d[E],k=R.target.uuid;k in I&&(I[k].dispose(),delete I[k])}}}function fb(a,e){function t(){let j=!1;const Le=new an;let xe=null;const He=new an(0,0,0,0);return{setMask:function(Ne){xe!==Ne&&!j&&(a.colorMask(Ne,Ne,Ne,Ne),xe=Ne)},setLocked:function(Ne){j=Ne},setClear:function(Ne,Se,qe,ht,zt){zt===!0&&(Ne*=ht,Se*=ht,qe*=ht),Le.set(Ne,Se,qe,ht),He.equals(Le)===!1&&(a.clearColor(Ne,Se,qe,ht),He.copy(Le))},reset:function(){j=!1,xe=null,He.set(-1,0,0,0)}}}function i(){let j=!1,Le=!1,xe=null,He=null,Ne=null;return{setReversed:function(Se){if(Le!==Se){const qe=e.get("EXT_clip_control");Se?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT),Le=Se;const ht=Ne;Ne=null,this.setClear(ht)}},getReversed:function(){return Le},setTest:function(Se){Se?pe(a.DEPTH_TEST):Oe(a.DEPTH_TEST)},setMask:function(Se){xe!==Se&&!j&&(a.depthMask(Se),xe=Se)},setFunc:function(Se){if(Le&&(Se=Ey[Se]),He!==Se){switch(Se){case wf:a.depthFunc(a.NEVER);break;case Ef:a.depthFunc(a.ALWAYS);break;case bf:a.depthFunc(a.LESS);break;case Ca:a.depthFunc(a.LEQUAL);break;case Tf:a.depthFunc(a.EQUAL);break;case Cf:a.depthFunc(a.GEQUAL);break;case Af:a.depthFunc(a.GREATER);break;case Rf:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}He=Se}},setLocked:function(Se){j=Se},setClear:function(Se){Ne!==Se&&(Ne=Se,Le&&(Se=1-Se),a.clearDepth(Se))},reset:function(){j=!1,xe=null,He=null,Ne=null,Le=!1}}}function s(){let j=!1,Le=null,xe=null,He=null,Ne=null,Se=null,qe=null,ht=null,zt=null;return{setTest:function(Rt){j||(Rt?pe(a.STENCIL_TEST):Oe(a.STENCIL_TEST))},setMask:function(Rt){Le!==Rt&&!j&&(a.stencilMask(Rt),Le=Rt)},setFunc:function(Rt,be,We){(xe!==Rt||He!==be||Ne!==We)&&(a.stencilFunc(Rt,be,We),xe=Rt,He=be,Ne=We)},setOp:function(Rt,be,We){(Se!==Rt||qe!==be||ht!==We)&&(a.stencilOp(Rt,be,We),Se=Rt,qe=be,ht=We)},setLocked:function(Rt){j=Rt},setClear:function(Rt){zt!==Rt&&(a.clearStencil(Rt),zt=Rt)},reset:function(){j=!1,Le=null,xe=null,He=null,Ne=null,Se=null,qe=null,ht=null,zt=null}}}const o=new t,c=new i,u=new s,h=new WeakMap,d=new WeakMap;let p={},g={},m={},y=new WeakMap,v=[],w=null,_=!1,S=null,b=null,C=null,T=null,L=null,R=null,F=null,E=new Ye(0,0,0),I=0,k=!1,U=null,B=null,K=null,ie=null,W=null;const ee=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,G=0;const $=a.getParameter(a.VERSION);$.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec($)[1]),V=G>=1):$.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),V=G>=2);let X=null,z={};const Z=a.getParameter(a.SCISSOR_BOX),me=a.getParameter(a.VIEWPORT),Ae=new an().fromArray(Z),Ee=new an().fromArray(me);function Q(j,Le,xe,He){const Ne=new Uint8Array(4),Se=a.createTexture();a.bindTexture(j,Se),a.texParameteri(j,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(j,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let qe=0;qe<xe;qe++)j===a.TEXTURE_3D||j===a.TEXTURE_2D_ARRAY?a.texImage3D(Le,0,a.RGBA,1,1,He,0,a.RGBA,a.UNSIGNED_BYTE,Ne):a.texImage2D(Le+qe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ne);return Se}const ve={};ve[a.TEXTURE_2D]=Q(a.TEXTURE_2D,a.TEXTURE_2D,1),ve[a.TEXTURE_CUBE_MAP]=Q(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[a.TEXTURE_2D_ARRAY]=Q(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ve[a.TEXTURE_3D]=Q(a.TEXTURE_3D,a.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),pe(a.DEPTH_TEST),c.setFunc(Ca),_t(!1),Gt(L0),pe(a.CULL_FACE),kt(Ki);function pe(j){p[j]!==!0&&(a.enable(j),p[j]=!0)}function Oe(j){p[j]!==!1&&(a.disable(j),p[j]=!1)}function et(j,Le){return m[j]!==Le?(a.bindFramebuffer(j,Le),m[j]=Le,j===a.DRAW_FRAMEBUFFER&&(m[a.FRAMEBUFFER]=Le),j===a.FRAMEBUFFER&&(m[a.DRAW_FRAMEBUFFER]=Le),!0):!1}function rt(j,Le){let xe=v,He=!1;if(j){xe=y.get(Le),xe===void 0&&(xe=[],y.set(Le,xe));const Ne=j.textures;if(xe.length!==Ne.length||xe[0]!==a.COLOR_ATTACHMENT0){for(let Se=0,qe=Ne.length;Se<qe;Se++)xe[Se]=a.COLOR_ATTACHMENT0+Se;xe.length=Ne.length,He=!0}}else xe[0]!==a.BACK&&(xe[0]=a.BACK,He=!0);He&&a.drawBuffers(xe)}function Dt(j){return w!==j?(a.useProgram(j),w=j,!0):!1}const gt={[Ts]:a.FUNC_ADD,[q1]:a.FUNC_SUBTRACT,[Y1]:a.FUNC_REVERSE_SUBTRACT};gt[$1]=a.MIN,gt[K1]=a.MAX;const At={[Z1]:a.ZERO,[Q1]:a.ONE,[J1]:a.SRC_COLOR,[Sf]:a.SRC_ALPHA,[sy]:a.SRC_ALPHA_SATURATE,[iy]:a.DST_COLOR,[ty]:a.DST_ALPHA,[ey]:a.ONE_MINUS_SRC_COLOR,[Mf]:a.ONE_MINUS_SRC_ALPHA,[ry]:a.ONE_MINUS_DST_COLOR,[ny]:a.ONE_MINUS_DST_ALPHA,[ay]:a.CONSTANT_COLOR,[oy]:a.ONE_MINUS_CONSTANT_COLOR,[ly]:a.CONSTANT_ALPHA,[cy]:a.ONE_MINUS_CONSTANT_ALPHA};function kt(j,Le,xe,He,Ne,Se,qe,ht,zt,Rt){if(j===Ki){_===!0&&(Oe(a.BLEND),_=!1);return}if(_===!1&&(pe(a.BLEND),_=!0),j!==j1){if(j!==S||Rt!==k){if((b!==Ts||L!==Ts)&&(a.blendEquation(a.FUNC_ADD),b=Ts,L=Ts),Rt)switch(j){case wa:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ta:a.blendFunc(a.ONE,a.ONE);break;case I0:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case N0:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Nt("WebGLState: Invalid blending: ",j);break}else switch(j){case wa:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ta:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case I0:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case N0:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",j);break}C=null,T=null,R=null,F=null,E.set(0,0,0),I=0,S=j,k=Rt}return}Ne=Ne||Le,Se=Se||xe,qe=qe||He,(Le!==b||Ne!==L)&&(a.blendEquationSeparate(gt[Le],gt[Ne]),b=Le,L=Ne),(xe!==C||He!==T||Se!==R||qe!==F)&&(a.blendFuncSeparate(At[xe],At[He],At[Se],At[qe]),C=xe,T=He,R=Se,F=qe),(ht.equals(E)===!1||zt!==I)&&(a.blendColor(ht.r,ht.g,ht.b,zt),E.copy(ht),I=zt),S=j,k=!1}function vt(j,Le){j.side===Fi?Oe(a.CULL_FACE):pe(a.CULL_FACE);let xe=j.side===ei;Le&&(xe=!xe),_t(xe),j.blending===wa&&j.transparent===!1?kt(Ki):kt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),c.setFunc(j.depthFunc),c.setTest(j.depthTest),c.setMask(j.depthWrite),o.setMask(j.colorWrite);const He=j.stencilWrite;u.setTest(He),He&&(u.setMask(j.stencilWriteMask),u.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),u.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),te(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?pe(a.SAMPLE_ALPHA_TO_COVERAGE):Oe(a.SAMPLE_ALPHA_TO_COVERAGE)}function _t(j){U!==j&&(j?a.frontFace(a.CW):a.frontFace(a.CCW),U=j)}function Gt(j){j!==G1?(pe(a.CULL_FACE),j!==B&&(j===L0?a.cullFace(a.BACK):j===W1?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Oe(a.CULL_FACE),B=j}function fn(j){j!==K&&(V&&a.lineWidth(j),K=j)}function te(j,Le,xe){j?(pe(a.POLYGON_OFFSET_FILL),(ie!==Le||W!==xe)&&(ie=Le,W=xe,c.getReversed()&&(Le=-Le),a.polygonOffset(Le,xe))):Oe(a.POLYGON_OFFSET_FILL)}function Ft(j){j?pe(a.SCISSOR_TEST):Oe(a.SCISSOR_TEST)}function yt(j){j===void 0&&(j=a.TEXTURE0+ee-1),X!==j&&(a.activeTexture(j),X=j)}function Lt(j,Le,xe){xe===void 0&&(X===null?xe=a.TEXTURE0+ee-1:xe=X);let He=z[xe];He===void 0&&(He={type:void 0,texture:void 0},z[xe]=He),(He.type!==j||He.texture!==Le)&&(X!==xe&&(a.activeTexture(xe),X=xe),a.bindTexture(j,Le||ve[j]),He.type=j,He.texture=Le)}function ze(){const j=z[X];j!==void 0&&j.type!==void 0&&(a.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function Wt(){try{a.compressedTexImage2D(...arguments)}catch(j){Nt("WebGLState:",j)}}function O(){try{a.compressedTexImage3D(...arguments)}catch(j){Nt("WebGLState:",j)}}function A(){try{a.texSubImage2D(...arguments)}catch(j){Nt("WebGLState:",j)}}function se(){try{a.texSubImage3D(...arguments)}catch(j){Nt("WebGLState:",j)}}function fe(){try{a.compressedTexSubImage2D(...arguments)}catch(j){Nt("WebGLState:",j)}}function ye(){try{a.compressedTexSubImage3D(...arguments)}catch(j){Nt("WebGLState:",j)}}function Ce(){try{a.texStorage2D(...arguments)}catch(j){Nt("WebGLState:",j)}}function Fe(){try{a.texStorage3D(...arguments)}catch(j){Nt("WebGLState:",j)}}function de(){try{a.texImage2D(...arguments)}catch(j){Nt("WebGLState:",j)}}function _e(){try{a.texImage3D(...arguments)}catch(j){Nt("WebGLState:",j)}}function Be(j){return g[j]!==void 0?g[j]:a.getParameter(j)}function Ge(j,Le){g[j]!==Le&&(a.pixelStorei(j,Le),g[j]=Le)}function Re(j){Ae.equals(j)===!1&&(a.scissor(j.x,j.y,j.z,j.w),Ae.copy(j))}function Pe(j){Ee.equals(j)===!1&&(a.viewport(j.x,j.y,j.z,j.w),Ee.copy(j))}function st(j,Le){let xe=d.get(Le);xe===void 0&&(xe=new WeakMap,d.set(Le,xe));let He=xe.get(j);He===void 0&&(He=a.getUniformBlockIndex(Le,j.name),xe.set(j,He))}function ut(j,Le){const He=d.get(Le).get(j);h.get(Le)!==He&&(a.uniformBlockBinding(Le,He,j.__bindingPointIndex),h.set(Le,He))}function St(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),c.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),p={},g={},X=null,z={},m={},y=new WeakMap,v=[],w=null,_=!1,S=null,b=null,C=null,T=null,L=null,R=null,F=null,E=new Ye(0,0,0),I=0,k=!1,U=null,B=null,K=null,ie=null,W=null,Ae.set(0,0,a.canvas.width,a.canvas.height),Ee.set(0,0,a.canvas.width,a.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:pe,disable:Oe,bindFramebuffer:et,drawBuffers:rt,useProgram:Dt,setBlending:kt,setMaterial:vt,setFlipSided:_t,setCullFace:Gt,setLineWidth:fn,setPolygonOffset:te,setScissorTest:Ft,activeTexture:yt,bindTexture:Lt,unbindTexture:ze,compressedTexImage2D:Wt,compressedTexImage3D:O,texImage2D:de,texImage3D:_e,pixelStorei:Ge,getParameter:Be,updateUBOMapping:st,uniformBlockBinding:ut,texStorage2D:Ce,texStorage3D:Fe,texSubImage2D:A,texSubImage3D:se,compressedTexSubImage2D:fe,compressedTexSubImage3D:ye,scissor:Re,viewport:Pe,reset:St}}function db(a,e,t,i,s,o,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new lt,p=new WeakMap,g=new Set;let m;const y=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(O,A){return v?new OffscreenCanvas(O,A):Fc("canvas")}function _(O,A,se){let fe=1;const ye=Wt(O);if((ye.width>se||ye.height>se)&&(fe=se/Math.max(ye.width,ye.height)),fe<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const Ce=Math.floor(fe*ye.width),Fe=Math.floor(fe*ye.height);m===void 0&&(m=w(Ce,Fe));const de=A?w(Ce,Fe):m;return de.width=Ce,de.height=Fe,de.getContext("2d").drawImage(O,0,0,Ce,Fe),ct("WebGLRenderer: Texture has been resized from ("+ye.width+"x"+ye.height+") to ("+Ce+"x"+Fe+")."),de}else return"data"in O&&ct("WebGLRenderer: Image in DataTexture is too big ("+ye.width+"x"+ye.height+")."),O;return O}function S(O){return O.generateMipmaps}function b(O){a.generateMipmap(O)}function C(O){return O.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?a.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function T(O,A,se,fe,ye,Ce=!1){if(O!==null){if(a[O]!==void 0)return a[O];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Fe;fe&&(Fe=e.get("EXT_texture_norm16"),Fe||ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=A;if(A===a.RED&&(se===a.FLOAT&&(de=a.R32F),se===a.HALF_FLOAT&&(de=a.R16F),se===a.UNSIGNED_BYTE&&(de=a.R8),se===a.UNSIGNED_SHORT&&Fe&&(de=Fe.R16_EXT),se===a.SHORT&&Fe&&(de=Fe.R16_SNORM_EXT)),A===a.RED_INTEGER&&(se===a.UNSIGNED_BYTE&&(de=a.R8UI),se===a.UNSIGNED_SHORT&&(de=a.R16UI),se===a.UNSIGNED_INT&&(de=a.R32UI),se===a.BYTE&&(de=a.R8I),se===a.SHORT&&(de=a.R16I),se===a.INT&&(de=a.R32I)),A===a.RG&&(se===a.FLOAT&&(de=a.RG32F),se===a.HALF_FLOAT&&(de=a.RG16F),se===a.UNSIGNED_BYTE&&(de=a.RG8),se===a.UNSIGNED_SHORT&&Fe&&(de=Fe.RG16_EXT),se===a.SHORT&&Fe&&(de=Fe.RG16_SNORM_EXT)),A===a.RG_INTEGER&&(se===a.UNSIGNED_BYTE&&(de=a.RG8UI),se===a.UNSIGNED_SHORT&&(de=a.RG16UI),se===a.UNSIGNED_INT&&(de=a.RG32UI),se===a.BYTE&&(de=a.RG8I),se===a.SHORT&&(de=a.RG16I),se===a.INT&&(de=a.RG32I)),A===a.RGB_INTEGER&&(se===a.UNSIGNED_BYTE&&(de=a.RGB8UI),se===a.UNSIGNED_SHORT&&(de=a.RGB16UI),se===a.UNSIGNED_INT&&(de=a.RGB32UI),se===a.BYTE&&(de=a.RGB8I),se===a.SHORT&&(de=a.RGB16I),se===a.INT&&(de=a.RGB32I)),A===a.RGBA_INTEGER&&(se===a.UNSIGNED_BYTE&&(de=a.RGBA8UI),se===a.UNSIGNED_SHORT&&(de=a.RGBA16UI),se===a.UNSIGNED_INT&&(de=a.RGBA32UI),se===a.BYTE&&(de=a.RGBA8I),se===a.SHORT&&(de=a.RGBA16I),se===a.INT&&(de=a.RGBA32I)),A===a.RGB&&(se===a.UNSIGNED_SHORT&&Fe&&(de=Fe.RGB16_EXT),se===a.SHORT&&Fe&&(de=Fe.RGB16_SNORM_EXT),se===a.UNSIGNED_INT_5_9_9_9_REV&&(de=a.RGB9_E5),se===a.UNSIGNED_INT_10F_11F_11F_REV&&(de=a.R11F_G11F_B10F)),A===a.RGBA){const _e=Ce?Uc:Ct.getTransfer(ye);se===a.FLOAT&&(de=a.RGBA32F),se===a.HALF_FLOAT&&(de=a.RGBA16F),se===a.UNSIGNED_BYTE&&(de=_e===Vt?a.SRGB8_ALPHA8:a.RGBA8),se===a.UNSIGNED_SHORT&&Fe&&(de=Fe.RGBA16_EXT),se===a.SHORT&&Fe&&(de=Fe.RGBA16_SNORM_EXT),se===a.UNSIGNED_SHORT_4_4_4_4&&(de=a.RGBA4),se===a.UNSIGNED_SHORT_5_5_5_1&&(de=a.RGB5_A1)}return(de===a.R16F||de===a.R32F||de===a.RG16F||de===a.RG32F||de===a.RGBA16F||de===a.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function L(O,A){let se;return O?A===null||A===Qi||A===zo?se=a.DEPTH24_STENCIL8:A===ki?se=a.DEPTH32F_STENCIL8:A===Oo&&(se=a.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Qi||A===zo?se=a.DEPTH_COMPONENT24:A===ki?se=a.DEPTH_COMPONENT32F:A===Oo&&(se=a.DEPTH_COMPONENT16),se}function R(O,A){return S(O)===!0||O.isFramebufferTexture&&O.minFilter!==In&&O.minFilter!==xn?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function F(O){const A=O.target;A.removeEventListener("dispose",F),I(A),A.isVideoTexture&&p.delete(A),A.isHTMLTexture&&g.delete(A)}function E(O){const A=O.target;A.removeEventListener("dispose",E),U(A)}function I(O){const A=i.get(O);if(A.__webglInit===void 0)return;const se=O.source,fe=y.get(se);if(fe){const ye=fe[A.__cacheKey];ye.usedTimes--,ye.usedTimes===0&&k(O),Object.keys(fe).length===0&&y.delete(se)}i.remove(O)}function k(O){const A=i.get(O);a.deleteTexture(A.__webglTexture);const se=O.source,fe=y.get(se);delete fe[A.__cacheKey],c.memory.textures--}function U(O){const A=i.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),i.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(A.__webglFramebuffer[fe]))for(let ye=0;ye<A.__webglFramebuffer[fe].length;ye++)a.deleteFramebuffer(A.__webglFramebuffer[fe][ye]);else a.deleteFramebuffer(A.__webglFramebuffer[fe]);A.__webglDepthbuffer&&a.deleteRenderbuffer(A.__webglDepthbuffer[fe])}else{if(Array.isArray(A.__webglFramebuffer))for(let fe=0;fe<A.__webglFramebuffer.length;fe++)a.deleteFramebuffer(A.__webglFramebuffer[fe]);else a.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&a.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&a.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let fe=0;fe<A.__webglColorRenderbuffer.length;fe++)A.__webglColorRenderbuffer[fe]&&a.deleteRenderbuffer(A.__webglColorRenderbuffer[fe]);A.__webglDepthRenderbuffer&&a.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const se=O.textures;for(let fe=0,ye=se.length;fe<ye;fe++){const Ce=i.get(se[fe]);Ce.__webglTexture&&(a.deleteTexture(Ce.__webglTexture),c.memory.textures--),i.remove(se[fe])}i.remove(O)}let B=0;function K(){B=0}function ie(){return B}function W(O){B=O}function ee(){const O=B;return O>=s.maxTextures&&ct("WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+s.maxTextures),B+=1,O}function V(O){const A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function G(O,A){const se=i.get(O);if(O.isVideoTexture&&Lt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&se.__version!==O.version){const fe=O.image;if(fe===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(fe.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(se,O,A);return}}else O.isExternalTexture&&(se.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,se.__webglTexture,a.TEXTURE0+A)}function $(O,A){const se=i.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&se.__version!==O.version){Oe(se,O,A);return}else O.isExternalTexture&&(se.__webglTexture=O.sourceTexture?O.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,se.__webglTexture,a.TEXTURE0+A)}function X(O,A){const se=i.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&se.__version!==O.version){Oe(se,O,A);return}t.bindTexture(a.TEXTURE_3D,se.__webglTexture,a.TEXTURE0+A)}function z(O,A){const se=i.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&se.__version!==O.version){et(se,O,A);return}t.bindTexture(a.TEXTURE_CUBE_MAP,se.__webglTexture,a.TEXTURE0+A)}const Z={[Pf]:a.REPEAT,[mr]:a.CLAMP_TO_EDGE,[Lf]:a.MIRRORED_REPEAT},me={[In]:a.NEAREST,[fy]:a.NEAREST_MIPMAP_NEAREST,[$l]:a.NEAREST_MIPMAP_LINEAR,[xn]:a.LINEAR,[Fh]:a.LINEAR_MIPMAP_NEAREST,[As]:a.LINEAR_MIPMAP_LINEAR},Ae={[my]:a.NEVER,[yy]:a.ALWAYS,[gy]:a.LESS,[Ld]:a.LEQUAL,[xy]:a.EQUAL,[Id]:a.GEQUAL,[vy]:a.GREATER,[_y]:a.NOTEQUAL};function Ee(O,A){if(A.type===ki&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===xn||A.magFilter===Fh||A.magFilter===$l||A.magFilter===As||A.minFilter===xn||A.minFilter===Fh||A.minFilter===$l||A.minFilter===As)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(O,a.TEXTURE_WRAP_S,Z[A.wrapS]),a.texParameteri(O,a.TEXTURE_WRAP_T,Z[A.wrapT]),(O===a.TEXTURE_3D||O===a.TEXTURE_2D_ARRAY)&&a.texParameteri(O,a.TEXTURE_WRAP_R,Z[A.wrapR]),a.texParameteri(O,a.TEXTURE_MAG_FILTER,me[A.magFilter]),a.texParameteri(O,a.TEXTURE_MIN_FILTER,me[A.minFilter]),A.compareFunction&&(a.texParameteri(O,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(O,a.TEXTURE_COMPARE_FUNC,Ae[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===In||A.minFilter!==$l&&A.minFilter!==As||A.type===ki&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");a.texParameterf(O,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function Q(O,A){let se=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",F));const fe=A.source;let ye=y.get(fe);ye===void 0&&(ye={},y.set(fe,ye));const Ce=V(A);if(Ce!==O.__cacheKey){ye[Ce]===void 0&&(ye[Ce]={texture:a.createTexture(),usedTimes:0},c.memory.textures++,se=!0),ye[Ce].usedTimes++;const Fe=ye[O.__cacheKey];Fe!==void 0&&(ye[O.__cacheKey].usedTimes--,Fe.usedTimes===0&&k(A)),O.__cacheKey=Ce,O.__webglTexture=ye[Ce].texture}return se}function ve(O,A,se){return Math.floor(Math.floor(O/se)/A)}function pe(O,A,se,fe){const Ce=O.updateRanges;if(Ce.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,A.width,A.height,se,fe,A.data);else{Ce.sort((Ge,Re)=>Ge.start-Re.start);let Fe=0;for(let Ge=1;Ge<Ce.length;Ge++){const Re=Ce[Fe],Pe=Ce[Ge],st=Re.start+Re.count,ut=ve(Pe.start,A.width,4),St=ve(Re.start,A.width,4);Pe.start<=st+1&&ut===St&&ve(Pe.start+Pe.count-1,A.width,4)===ut?Re.count=Math.max(Re.count,Pe.start+Pe.count-Re.start):(++Fe,Ce[Fe]=Pe)}Ce.length=Fe+1;const de=t.getParameter(a.UNPACK_ROW_LENGTH),_e=t.getParameter(a.UNPACK_SKIP_PIXELS),Be=t.getParameter(a.UNPACK_SKIP_ROWS);t.pixelStorei(a.UNPACK_ROW_LENGTH,A.width);for(let Ge=0,Re=Ce.length;Ge<Re;Ge++){const Pe=Ce[Ge],st=Math.floor(Pe.start/4),ut=Math.ceil(Pe.count/4),St=st%A.width,j=Math.floor(st/A.width),Le=ut,xe=1;t.pixelStorei(a.UNPACK_SKIP_PIXELS,St),t.pixelStorei(a.UNPACK_SKIP_ROWS,j),t.texSubImage2D(a.TEXTURE_2D,0,St,j,Le,xe,se,fe,A.data)}O.clearUpdateRanges(),t.pixelStorei(a.UNPACK_ROW_LENGTH,de),t.pixelStorei(a.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(a.UNPACK_SKIP_ROWS,Be)}}function Oe(O,A,se){let fe=a.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(fe=a.TEXTURE_2D_ARRAY),A.isData3DTexture&&(fe=a.TEXTURE_3D);const ye=Q(O,A),Ce=A.source;t.bindTexture(fe,O.__webglTexture,a.TEXTURE0+se);const Fe=i.get(Ce);if(Ce.version!==Fe.__version||ye===!0){if(t.activeTexture(a.TEXTURE0+se),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const xe=Ct.getPrimaries(Ct.workingColorSpace),He=A.colorSpace===Qr?null:Ct.getPrimaries(A.colorSpace),Ne=A.colorSpace===Qr||xe===He?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(a.UNPACK_ALIGNMENT,A.unpackAlignment);let _e=_(A.image,!1,s.maxTextureSize);_e=ze(A,_e);const Be=o.convert(A.format,A.colorSpace),Ge=o.convert(A.type);let Re=T(A.internalFormat,Be,Ge,A.normalized,A.colorSpace,A.isVideoTexture);Ee(fe,A);let Pe;const st=A.mipmaps,ut=A.isVideoTexture!==!0,St=Fe.__version===void 0||ye===!0,j=Ce.dataReady,Le=R(A,_e);if(A.isDepthTexture)Re=L(A.format===Rs,A.type),St&&(ut?t.texStorage2D(a.TEXTURE_2D,1,Re,_e.width,_e.height):t.texImage2D(a.TEXTURE_2D,0,Re,_e.width,_e.height,0,Be,Ge,null));else if(A.isDataTexture)if(st.length>0){ut&&St&&t.texStorage2D(a.TEXTURE_2D,Le,Re,st[0].width,st[0].height);for(let xe=0,He=st.length;xe<He;xe++)Pe=st[xe],ut?j&&t.texSubImage2D(a.TEXTURE_2D,xe,0,0,Pe.width,Pe.height,Be,Ge,Pe.data):t.texImage2D(a.TEXTURE_2D,xe,Re,Pe.width,Pe.height,0,Be,Ge,Pe.data);A.generateMipmaps=!1}else ut?(St&&t.texStorage2D(a.TEXTURE_2D,Le,Re,_e.width,_e.height),j&&pe(A,_e,Be,Ge)):t.texImage2D(a.TEXTURE_2D,0,Re,_e.width,_e.height,0,Be,Ge,_e.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ut&&St&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Le,Re,st[0].width,st[0].height,_e.depth);for(let xe=0,He=st.length;xe<He;xe++)if(Pe=st[xe],A.format!==fi)if(Be!==null)if(ut){if(j)if(A.layerUpdates.size>0){const Ne=xg(Pe.width,Pe.height,A.format,A.type);for(const Se of A.layerUpdates){const qe=Pe.data.subarray(Se*Ne/Pe.data.BYTES_PER_ELEMENT,(Se+1)*Ne/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,Se,Pe.width,Pe.height,1,Be,qe)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,0,Pe.width,Pe.height,_e.depth,Be,Pe.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,xe,Re,Pe.width,Pe.height,_e.depth,0,Pe.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ut?j&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,0,Pe.width,Pe.height,_e.depth,Be,Ge,Pe.data):t.texImage3D(a.TEXTURE_2D_ARRAY,xe,Re,Pe.width,Pe.height,_e.depth,0,Be,Ge,Pe.data)}else{ut&&St&&t.texStorage2D(a.TEXTURE_2D,Le,Re,st[0].width,st[0].height);for(let xe=0,He=st.length;xe<He;xe++)Pe=st[xe],A.format!==fi?Be!==null?ut?j&&t.compressedTexSubImage2D(a.TEXTURE_2D,xe,0,0,Pe.width,Pe.height,Be,Pe.data):t.compressedTexImage2D(a.TEXTURE_2D,xe,Re,Pe.width,Pe.height,0,Pe.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ut?j&&t.texSubImage2D(a.TEXTURE_2D,xe,0,0,Pe.width,Pe.height,Be,Ge,Pe.data):t.texImage2D(a.TEXTURE_2D,xe,Re,Pe.width,Pe.height,0,Be,Ge,Pe.data)}else if(A.isDataArrayTexture)if(ut){if(St&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Le,Re,_e.width,_e.height,_e.depth),j)if(A.layerUpdates.size>0){const xe=xg(_e.width,_e.height,A.format,A.type);for(const He of A.layerUpdates){const Ne=_e.data.subarray(He*xe/_e.data.BYTES_PER_ELEMENT,(He+1)*xe/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,He,_e.width,_e.height,1,Be,Ge,Ne)}A.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Be,Ge,_e.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Re,_e.width,_e.height,_e.depth,0,Be,Ge,_e.data);else if(A.isData3DTexture)ut?(St&&t.texStorage3D(a.TEXTURE_3D,Le,Re,_e.width,_e.height,_e.depth),j&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Be,Ge,_e.data)):t.texImage3D(a.TEXTURE_3D,0,Re,_e.width,_e.height,_e.depth,0,Be,Ge,_e.data);else if(A.isFramebufferTexture){if(St)if(ut)t.texStorage2D(a.TEXTURE_2D,Le,Re,_e.width,_e.height);else{let xe=_e.width,He=_e.height;for(let Ne=0;Ne<Le;Ne++)t.texImage2D(a.TEXTURE_2D,Ne,Re,xe,He,0,Be,Ge,null),xe>>=1,He>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in a){const xe=a.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),_e.parentNode!==xe){xe.appendChild(_e),g.add(A),xe.onpaint=ht=>{const zt=ht.changedElements;for(const Rt of g)zt.includes(Rt.image)&&(Rt.needsUpdate=!0)},xe.requestPaint();return}const He=0,Ne=a.RGBA,Se=a.RGBA,qe=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,He,Ne,Se,qe,_e),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(st.length>0){if(ut&&St){const xe=Wt(st[0]);t.texStorage2D(a.TEXTURE_2D,Le,Re,xe.width,xe.height)}for(let xe=0,He=st.length;xe<He;xe++)Pe=st[xe],ut?j&&t.texSubImage2D(a.TEXTURE_2D,xe,0,0,Be,Ge,Pe):t.texImage2D(a.TEXTURE_2D,xe,Re,Be,Ge,Pe);A.generateMipmaps=!1}else if(ut){if(St){const xe=Wt(_e);t.texStorage2D(a.TEXTURE_2D,Le,Re,xe.width,xe.height)}j&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,Be,Ge,_e)}else t.texImage2D(a.TEXTURE_2D,0,Re,Be,Ge,_e);S(A)&&b(fe),Fe.__version=Ce.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function et(O,A,se){if(A.image.length!==6)return;const fe=Q(O,A),ye=A.source;t.bindTexture(a.TEXTURE_CUBE_MAP,O.__webglTexture,a.TEXTURE0+se);const Ce=i.get(ye);if(ye.version!==Ce.__version||fe===!0){t.activeTexture(a.TEXTURE0+se);const Fe=Ct.getPrimaries(Ct.workingColorSpace),de=A.colorSpace===Qr?null:Ct.getPrimaries(A.colorSpace),_e=A.colorSpace===Qr||Fe===de?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(a.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Be=A.isCompressedTexture||A.image[0].isCompressedTexture,Ge=A.image[0]&&A.image[0].isDataTexture,Re=[];for(let Se=0;Se<6;Se++)!Be&&!Ge?Re[Se]=_(A.image[Se],!0,s.maxCubemapSize):Re[Se]=Ge?A.image[Se].image:A.image[Se],Re[Se]=ze(A,Re[Se]);const Pe=Re[0],st=o.convert(A.format,A.colorSpace),ut=o.convert(A.type),St=T(A.internalFormat,st,ut,A.normalized,A.colorSpace),j=A.isVideoTexture!==!0,Le=Ce.__version===void 0||fe===!0,xe=ye.dataReady;let He=R(A,Pe);Ee(a.TEXTURE_CUBE_MAP,A);let Ne;if(Be){j&&Le&&t.texStorage2D(a.TEXTURE_CUBE_MAP,He,St,Pe.width,Pe.height);for(let Se=0;Se<6;Se++){Ne=Re[Se].mipmaps;for(let qe=0;qe<Ne.length;qe++){const ht=Ne[qe];A.format!==fi?st!==null?j?xe&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,qe,0,0,ht.width,ht.height,st,ht.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,qe,St,ht.width,ht.height,0,ht.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?xe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,qe,0,0,ht.width,ht.height,st,ut,ht.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,qe,St,ht.width,ht.height,0,st,ut,ht.data)}}}else{if(Ne=A.mipmaps,j&&Le){Ne.length>0&&He++;const Se=Wt(Re[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,He,St,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Ge){j?xe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Re[Se].width,Re[Se].height,st,ut,Re[Se].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,St,Re[Se].width,Re[Se].height,0,st,ut,Re[Se].data);for(let qe=0;qe<Ne.length;qe++){const zt=Ne[qe].image[Se].image;j?xe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,qe+1,0,0,zt.width,zt.height,st,ut,zt.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,qe+1,St,zt.width,zt.height,0,st,ut,zt.data)}}else{j?xe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,st,ut,Re[Se]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,St,st,ut,Re[Se]);for(let qe=0;qe<Ne.length;qe++){const ht=Ne[qe];j?xe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,qe+1,0,0,st,ut,ht.image[Se]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Se,qe+1,St,st,ut,ht.image[Se])}}}S(A)&&b(a.TEXTURE_CUBE_MAP),Ce.__version=ye.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function rt(O,A,se,fe,ye,Ce){const Fe=o.convert(se.format,se.colorSpace),de=o.convert(se.type),_e=T(se.internalFormat,Fe,de,se.normalized,se.colorSpace),Be=i.get(A),Ge=i.get(se);if(Ge.__renderTarget=A,!Be.__hasExternalTextures){const Re=Math.max(1,A.width>>Ce),Pe=Math.max(1,A.height>>Ce);ye===a.TEXTURE_3D||ye===a.TEXTURE_2D_ARRAY?t.texImage3D(ye,Ce,_e,Re,Pe,A.depth,0,Fe,de,null):t.texImage2D(ye,Ce,_e,Re,Pe,0,Fe,de,null)}t.bindFramebuffer(a.FRAMEBUFFER,O),yt(A)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,fe,ye,Ge.__webglTexture,0,Ft(A)):(ye===a.TEXTURE_2D||ye>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&ye<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,fe,ye,Ge.__webglTexture,Ce),t.bindFramebuffer(a.FRAMEBUFFER,null)}function Dt(O,A,se){if(a.bindRenderbuffer(a.RENDERBUFFER,O),A.depthBuffer){const fe=A.depthTexture,ye=fe&&fe.isDepthTexture?fe.type:null,Ce=L(A.stencilBuffer,ye),Fe=A.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;yt(A)?u.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ft(A),Ce,A.width,A.height):se?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ft(A),Ce,A.width,A.height):a.renderbufferStorage(a.RENDERBUFFER,Ce,A.width,A.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Fe,a.RENDERBUFFER,O)}else{const fe=A.textures;for(let ye=0;ye<fe.length;ye++){const Ce=fe[ye],Fe=o.convert(Ce.format,Ce.colorSpace),de=o.convert(Ce.type),_e=T(Ce.internalFormat,Fe,de,Ce.normalized,Ce.colorSpace);yt(A)?u.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ft(A),_e,A.width,A.height):se?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ft(A),_e,A.width,A.height):a.renderbufferStorage(a.RENDERBUFFER,_e,A.width,A.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function gt(O,A,se){const fe=A.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ye=i.get(A.depthTexture);if(ye.__renderTarget=A,(!ye.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),fe){if(ye.__webglInit===void 0&&(ye.__webglInit=!0,A.depthTexture.addEventListener("dispose",F)),ye.__webglTexture===void 0){ye.__webglTexture=a.createTexture(),t.bindTexture(a.TEXTURE_CUBE_MAP,ye.__webglTexture),Ee(a.TEXTURE_CUBE_MAP,A.depthTexture);const Be=o.convert(A.depthTexture.format),Ge=o.convert(A.depthTexture.type);let Re;A.depthTexture.format===vr?Re=a.DEPTH_COMPONENT24:A.depthTexture.format===Rs&&(Re=a.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Re,A.width,A.height,0,Be,Ge,null)}}else G(A.depthTexture,0);const Ce=ye.__webglTexture,Fe=Ft(A),de=fe?a.TEXTURE_CUBE_MAP_POSITIVE_X+se:a.TEXTURE_2D,_e=A.depthTexture.format===Rs?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(A.depthTexture.format===vr)yt(A)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,_e,de,Ce,0,Fe):a.framebufferTexture2D(a.FRAMEBUFFER,_e,de,Ce,0);else if(A.depthTexture.format===Rs)yt(A)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,_e,de,Ce,0,Fe):a.framebufferTexture2D(a.FRAMEBUFFER,_e,de,Ce,0);else throw new Error("Unknown depthTexture format")}function At(O){const A=i.get(O),se=O.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==O.depthTexture){const fe=O.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),fe){const ye=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,fe.removeEventListener("dispose",ye)};fe.addEventListener("dispose",ye),A.__depthDisposeCallback=ye}A.__boundDepthTexture=fe}if(O.depthTexture&&!A.__autoAllocateDepthBuffer)if(se)for(let fe=0;fe<6;fe++)gt(A.__webglFramebuffer[fe],O,fe);else{const fe=O.texture.mipmaps;fe&&fe.length>0?gt(A.__webglFramebuffer[0],O,0):gt(A.__webglFramebuffer,O,0)}else if(se){A.__webglDepthbuffer=[];for(let fe=0;fe<6;fe++)if(t.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer[fe]),A.__webglDepthbuffer[fe]===void 0)A.__webglDepthbuffer[fe]=a.createRenderbuffer(),Dt(A.__webglDepthbuffer[fe],O,!1);else{const ye=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ce=A.__webglDepthbuffer[fe];a.bindRenderbuffer(a.RENDERBUFFER,Ce),a.framebufferRenderbuffer(a.FRAMEBUFFER,ye,a.RENDERBUFFER,Ce)}}else{const fe=O.texture.mipmaps;if(fe&&fe.length>0?t.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=a.createRenderbuffer(),Dt(A.__webglDepthbuffer,O,!1);else{const ye=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ce=A.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Ce),a.framebufferRenderbuffer(a.FRAMEBUFFER,ye,a.RENDERBUFFER,Ce)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function kt(O,A,se){const fe=i.get(O);A!==void 0&&rt(fe.__webglFramebuffer,O,O.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),se!==void 0&&At(O)}function vt(O){const A=O.texture,se=i.get(O),fe=i.get(A);O.addEventListener("dispose",E);const ye=O.textures,Ce=O.isWebGLCubeRenderTarget===!0,Fe=ye.length>1;if(Fe||(fe.__webglTexture===void 0&&(fe.__webglTexture=a.createTexture()),fe.__version=A.version,c.memory.textures++),Ce){se.__webglFramebuffer=[];for(let de=0;de<6;de++)if(A.mipmaps&&A.mipmaps.length>0){se.__webglFramebuffer[de]=[];for(let _e=0;_e<A.mipmaps.length;_e++)se.__webglFramebuffer[de][_e]=a.createFramebuffer()}else se.__webglFramebuffer[de]=a.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){se.__webglFramebuffer=[];for(let de=0;de<A.mipmaps.length;de++)se.__webglFramebuffer[de]=a.createFramebuffer()}else se.__webglFramebuffer=a.createFramebuffer();if(Fe)for(let de=0,_e=ye.length;de<_e;de++){const Be=i.get(ye[de]);Be.__webglTexture===void 0&&(Be.__webglTexture=a.createTexture(),c.memory.textures++)}if(O.samples>0&&yt(O)===!1){se.__webglMultisampledFramebuffer=a.createFramebuffer(),se.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let de=0;de<ye.length;de++){const _e=ye[de];se.__webglColorRenderbuffer[de]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,se.__webglColorRenderbuffer[de]);const Be=o.convert(_e.format,_e.colorSpace),Ge=o.convert(_e.type),Re=T(_e.internalFormat,Be,Ge,_e.normalized,_e.colorSpace,O.isXRRenderTarget===!0),Pe=Ft(O);a.renderbufferStorageMultisample(a.RENDERBUFFER,Pe,Re,O.width,O.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+de,a.RENDERBUFFER,se.__webglColorRenderbuffer[de])}a.bindRenderbuffer(a.RENDERBUFFER,null),O.depthBuffer&&(se.__webglDepthRenderbuffer=a.createRenderbuffer(),Dt(se.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Ce){t.bindTexture(a.TEXTURE_CUBE_MAP,fe.__webglTexture),Ee(a.TEXTURE_CUBE_MAP,A);for(let de=0;de<6;de++)if(A.mipmaps&&A.mipmaps.length>0)for(let _e=0;_e<A.mipmaps.length;_e++)rt(se.__webglFramebuffer[de][_e],O,A,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+de,_e);else rt(se.__webglFramebuffer[de],O,A,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);S(A)&&b(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let de=0,_e=ye.length;de<_e;de++){const Be=ye[de],Ge=i.get(Be);let Re=a.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Re=O.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(Re,Ge.__webglTexture),Ee(Re,Be),rt(se.__webglFramebuffer,O,Be,a.COLOR_ATTACHMENT0+de,Re,0),S(Be)&&b(Re)}t.unbindTexture()}else{let de=a.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(de=O.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(de,fe.__webglTexture),Ee(de,A),A.mipmaps&&A.mipmaps.length>0)for(let _e=0;_e<A.mipmaps.length;_e++)rt(se.__webglFramebuffer[_e],O,A,a.COLOR_ATTACHMENT0,de,_e);else rt(se.__webglFramebuffer,O,A,a.COLOR_ATTACHMENT0,de,0);S(A)&&b(de),t.unbindTexture()}O.depthBuffer&&At(O)}function _t(O){const A=O.textures;for(let se=0,fe=A.length;se<fe;se++){const ye=A[se];if(S(ye)){const Ce=C(O),Fe=i.get(ye).__webglTexture;t.bindTexture(Ce,Fe),b(Ce),t.unbindTexture()}}}const Gt=[],fn=[];function te(O){if(O.samples>0){if(yt(O)===!1){const A=O.textures,se=O.width,fe=O.height;let ye=a.COLOR_BUFFER_BIT;const Ce=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Fe=i.get(O),de=A.length>1;if(de)for(let Be=0;Be<A.length;Be++)t.bindFramebuffer(a.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Be,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,Fe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Be,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);const _e=O.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Be=0;Be<A.length;Be++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(ye|=a.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(ye|=a.STENCIL_BUFFER_BIT)),de){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Fe.__webglColorRenderbuffer[Be]);const Ge=i.get(A[Be]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ge,0)}a.blitFramebuffer(0,0,se,fe,0,0,se,fe,ye,a.NEAREST),h===!0&&(Gt.length=0,fn.length=0,Gt.push(a.COLOR_ATTACHMENT0+Be),O.depthBuffer&&O.resolveDepthBuffer===!1&&(Gt.push(Ce),fn.push(Ce),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,fn)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Gt))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),de)for(let Be=0;Be<A.length;Be++){t.bindFramebuffer(a.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Be,a.RENDERBUFFER,Fe.__webglColorRenderbuffer[Be]);const Ge=i.get(A[Be]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,Fe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Be,a.TEXTURE_2D,Ge,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&h){const A=O.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[A])}}}function Ft(O){return Math.min(s.maxSamples,O.samples)}function yt(O){const A=i.get(O);return O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Lt(O){const A=c.render.frame;p.get(O)!==A&&(p.set(O,A),O.update())}function ze(O,A){const se=O.colorSpace,fe=O.format,ye=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||se!==Nc&&se!==Qr&&(Ct.getTransfer(se)===Vt?(fe!==fi||ye!==hi)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",se)),A}function Wt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(d.width=O.naturalWidth||O.width,d.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(d.width=O.displayWidth,d.height=O.displayHeight):(d.width=O.width,d.height=O.height),d}this.allocateTextureUnit=ee,this.resetTextureUnits=K,this.getTextureUnits=ie,this.setTextureUnits=W,this.setTexture2D=G,this.setTexture2DArray=$,this.setTexture3D=X,this.setTextureCube=z,this.rebindTextures=kt,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=yt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function pb(a,e){function t(i,s=Qr){let o;const c=Ct.getTransfer(s);if(i===hi)return a.UNSIGNED_BYTE;if(i===bd)return a.UNSIGNED_SHORT_4_4_4_4;if(i===Td)return a.UNSIGNED_SHORT_5_5_5_1;if(i===Sx)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===Mx)return a.UNSIGNED_INT_10F_11F_11F_REV;if(i===_x)return a.BYTE;if(i===yx)return a.SHORT;if(i===Oo)return a.UNSIGNED_SHORT;if(i===Ed)return a.INT;if(i===Qi)return a.UNSIGNED_INT;if(i===ki)return a.FLOAT;if(i===di)return a.HALF_FLOAT;if(i===wx)return a.ALPHA;if(i===Ex)return a.RGB;if(i===fi)return a.RGBA;if(i===vr)return a.DEPTH_COMPONENT;if(i===Rs)return a.DEPTH_STENCIL;if(i===Cd)return a.RED;if(i===Ad)return a.RED_INTEGER;if(i===Ls)return a.RG;if(i===Rd)return a.RG_INTEGER;if(i===Pd)return a.RGBA_INTEGER;if(i===Ec||i===bc||i===Tc||i===Cc)if(c===Vt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Ec)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===bc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Tc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Cc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Ec)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===bc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Tc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Cc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===If||i===Nf||i===Uf||i===Ff)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===If)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Uf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ff)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Df||i===kf||i===Of||i===zf||i===Bf||i===Pc||i===Hf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Df||i===kf)return c===Vt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Of)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===zf)return o.COMPRESSED_R11_EAC;if(i===Bf)return o.COMPRESSED_SIGNED_R11_EAC;if(i===Pc)return o.COMPRESSED_RG11_EAC;if(i===Hf)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Vf||i===Gf||i===Wf||i===Xf||i===jf||i===qf||i===Yf||i===$f||i===Kf||i===Zf||i===Qf||i===Jf||i===ed||i===td)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Vf)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gf)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wf)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xf)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===jf)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qf)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Yf)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$f)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Kf)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zf)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qf)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jf)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ed)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===td)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===nd||i===id||i===rd)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===nd)return c===Vt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===id)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rd)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sd||i===ad||i===Lc||i===od)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===sd)return o.COMPRESSED_RED_RGTC1_EXT;if(i===ad)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===od)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===zo?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:t}}const mb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gb=`
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

}`;class xb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Nx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new cn({vertexShader:mb,fragmentShader:gb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new hn(new yr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vb extends Ns{constructor(e,t){super();const i=this;let s=null,o=1,c=null,u="local-floor",h=1,d=null,p=null,g=null,m=null,y=null,v=null;const w=typeof XRWebGLBinding<"u",_=new xb,S={},b=t.getContextAttributes();let C=null,T=null;const L=[],R=[],F=new lt;let E=null;const I=new An;I.viewport=new an;const k=new An;k.viewport=new an;const U=[I,k],B=new TS;let K=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ve=L[Q];return ve===void 0&&(ve=new Hh,L[Q]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(Q){let ve=L[Q];return ve===void 0&&(ve=new Hh,L[Q]=ve),ve.getGripSpace()},this.getHand=function(Q){let ve=L[Q];return ve===void 0&&(ve=new Hh,L[Q]=ve),ve.getHandSpace()};function W(Q){const ve=R.indexOf(Q.inputSource);if(ve===-1)return;const pe=L[ve];pe!==void 0&&(pe.update(Q.inputSource,Q.frame,d||c),pe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ee(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",V);for(let Q=0;Q<L.length;Q++){const ve=R[Q];ve!==null&&(R[Q]=null,L[Q].disconnect(ve))}K=null,ie=null,_.reset();for(const Q in S)delete S[Q];e.setRenderTarget(C),y=null,m=null,g=null,s=null,T=null,Ee.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(F.width,F.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){o=Q,i.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){u=Q,i.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(Q){d=Q},this.getBaseLayer=function(){return m!==null?m:y},this.getBinding=function(){return g===null&&w&&(g=new XRWebGLBinding(s,t)),g},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",V),b.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(F),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Oe=null,et=null;b.depth&&(et=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=b.stencil?Rs:vr,Oe=b.stencil?zo:Qi);const rt={colorFormat:t.RGBA8,depthFormat:et,scaleFactor:o};g=this.getBinding(),m=g.createProjectionLayer(rt),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),T=new ti(m.textureWidth,m.textureHeight,{format:fi,type:hi,depthTexture:new Ra(m.textureWidth,m.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const pe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),T=new ti(y.framebufferWidth,y.framebufferHeight,{format:fi,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(h),d=null,c=await s.requestReferenceSpace(u),Ee.setContext(s),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(Q){for(let ve=0;ve<Q.removed.length;ve++){const pe=Q.removed[ve],Oe=R.indexOf(pe);Oe>=0&&(R[Oe]=null,L[Oe].disconnect(pe))}for(let ve=0;ve<Q.added.length;ve++){const pe=Q.added[ve];let Oe=R.indexOf(pe);if(Oe===-1){for(let rt=0;rt<L.length;rt++)if(rt>=R.length){R.push(pe),Oe=rt;break}else if(R[rt]===null){R[rt]=pe,Oe=rt;break}if(Oe===-1)break}const et=L[Oe];et&&et.connect(pe)}}const G=new J,$=new J;function X(Q,ve,pe){G.setFromMatrixPosition(ve.matrixWorld),$.setFromMatrixPosition(pe.matrixWorld);const Oe=G.distanceTo($),et=ve.projectionMatrix.elements,rt=pe.projectionMatrix.elements,Dt=et[14]/(et[10]-1),gt=et[14]/(et[10]+1),At=(et[9]+1)/et[5],kt=(et[9]-1)/et[5],vt=(et[8]-1)/et[0],_t=(rt[8]+1)/rt[0],Gt=Dt*vt,fn=Dt*_t,te=Oe/(-vt+_t),Ft=te*-vt;if(ve.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ft),Q.translateZ(te),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),et[10]===-1)Q.projectionMatrix.copy(ve.projectionMatrix),Q.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const yt=Dt+te,Lt=gt+te,ze=Gt-Ft,Wt=fn+(Oe-Ft),O=At*gt/Lt*yt,A=kt*gt/Lt*yt;Q.projectionMatrix.makePerspective(ze,Wt,O,A,yt,Lt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function z(Q,ve){ve===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ve.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ve=Q.near,pe=Q.far;_.texture!==null&&(_.depthNear>0&&(ve=_.depthNear),_.depthFar>0&&(pe=_.depthFar)),B.near=k.near=I.near=ve,B.far=k.far=I.far=pe,(K!==B.near||ie!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),K=B.near,ie=B.far),B.layers.mask=Q.layers.mask|6,I.layers.mask=B.layers.mask&-5,k.layers.mask=B.layers.mask&-3;const Oe=Q.parent,et=B.cameras;z(B,Oe);for(let rt=0;rt<et.length;rt++)z(et[rt],Oe);et.length===2?X(B,I,k):B.projectionMatrix.copy(I.projectionMatrix),Z(Q,B,Oe)};function Z(Q,ve,pe){pe===null?Q.matrix.copy(ve.matrixWorld):(Q.matrix.copy(pe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ve.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ve.projectionMatrix),Q.projectionMatrixInverse.copy(ve.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ho*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(m===null&&y===null))return h},this.setFoveation=function(Q){h=Q,m!==null&&(m.fixedFoveation=Q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(B)},this.getCameraTexture=function(Q){return S[Q]};let me=null;function Ae(Q,ve){if(p=ve.getViewerPose(d||c),v=ve,p!==null){const pe=p.views;y!==null&&(e.setRenderTargetFramebuffer(T,y.framebuffer),e.setRenderTarget(T));let Oe=!1;pe.length!==B.cameras.length&&(B.cameras.length=0,Oe=!0);for(let gt=0;gt<pe.length;gt++){const At=pe[gt];let kt=null;if(y!==null)kt=y.getViewport(At);else{const _t=g.getViewSubImage(m,At);kt=_t.viewport,gt===0&&(e.setRenderTargetTextures(T,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(T))}let vt=U[gt];vt===void 0&&(vt=new An,vt.layers.enable(gt),vt.viewport=new an,U[gt]=vt),vt.matrix.fromArray(At.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(At.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(kt.x,kt.y,kt.width,kt.height),gt===0&&(B.matrix.copy(vt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Oe===!0&&B.cameras.push(vt)}const et=s.enabledFeatures;if(et&&et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){g=i.getBinding();const gt=g.getDepthInformation(pe[0]);gt&&gt.isValid&&gt.texture&&_.init(gt,s.renderState)}if(et&&et.includes("camera-access")&&w){e.state.unbindTexture(),g=i.getBinding();for(let gt=0;gt<pe.length;gt++){const At=pe[gt].camera;if(At){let kt=S[At];kt||(kt=new Nx,S[At]=kt);const vt=g.getCameraImage(At);kt.sourceTexture=vt}}}}for(let pe=0;pe<L.length;pe++){const Oe=R[pe],et=L[pe];Oe!==null&&et!==void 0&&et.update(Oe,ve,d||c)}me&&me(Q,ve),ve.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ve}),v=null}const Ee=new zx;Ee.setAnimationLoop(Ae),this.setAnimationLoop=function(Q){me=Q},this.dispose=function(){}}}const _b=new Yt,jx=new xt;jx.set(-1,0,0,0,1,0,0,0,1);function yb(a,e){function t(_,S){_.matrixAutoUpdate===!0&&_.updateMatrix(),S.value.copy(_.matrix)}function i(_,S){S.color.getRGB(_.fogColor.value,Ux(a)),S.isFog?(_.fogNear.value=S.near,_.fogFar.value=S.far):S.isFogExp2&&(_.fogDensity.value=S.density)}function s(_,S,b,C,T){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?o(_,S):S.isMeshLambertMaterial?(o(_,S),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(o(_,S),g(_,S)):S.isMeshPhongMaterial?(o(_,S),p(_,S),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(o(_,S),m(_,S),S.isMeshPhysicalMaterial&&y(_,S,T)):S.isMeshMatcapMaterial?(o(_,S),v(_,S)):S.isMeshDepthMaterial?o(_,S):S.isMeshDistanceMaterial?(o(_,S),w(_,S)):S.isMeshNormalMaterial?o(_,S):S.isLineBasicMaterial?(c(_,S),S.isLineDashedMaterial&&u(_,S)):S.isPointsMaterial?h(_,S,b,C):S.isSpriteMaterial?d(_,S):S.isShadowMaterial?(_.color.value.copy(S.color),_.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function o(_,S){_.opacity.value=S.opacity,S.color&&_.diffuse.value.copy(S.color),S.emissive&&_.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(_.map.value=S.map,t(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.bumpMap&&(_.bumpMap.value=S.bumpMap,t(S.bumpMap,_.bumpMapTransform),_.bumpScale.value=S.bumpScale,S.side===ei&&(_.bumpScale.value*=-1)),S.normalMap&&(_.normalMap.value=S.normalMap,t(S.normalMap,_.normalMapTransform),_.normalScale.value.copy(S.normalScale),S.side===ei&&_.normalScale.value.negate()),S.displacementMap&&(_.displacementMap.value=S.displacementMap,t(S.displacementMap,_.displacementMapTransform),_.displacementScale.value=S.displacementScale,_.displacementBias.value=S.displacementBias),S.emissiveMap&&(_.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,_.emissiveMapTransform)),S.specularMap&&(_.specularMap.value=S.specularMap,t(S.specularMap,_.specularMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest);const b=e.get(S),C=b.envMap,T=b.envMapRotation;C&&(_.envMap.value=C,_.envMapRotation.value.setFromMatrix4(_b.makeRotationFromEuler(T)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(jx),_.reflectivity.value=S.reflectivity,_.ior.value=S.ior,_.refractionRatio.value=S.refractionRatio),S.lightMap&&(_.lightMap.value=S.lightMap,_.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,_.lightMapTransform)),S.aoMap&&(_.aoMap.value=S.aoMap,_.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,_.aoMapTransform))}function c(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,S.map&&(_.map.value=S.map,t(S.map,_.mapTransform))}function u(_,S){_.dashSize.value=S.dashSize,_.totalSize.value=S.dashSize+S.gapSize,_.scale.value=S.scale}function h(_,S,b,C){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.size.value=S.size*b,_.scale.value=C*.5,S.map&&(_.map.value=S.map,t(S.map,_.uvTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function d(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.rotation.value=S.rotation,S.map&&(_.map.value=S.map,t(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function p(_,S){_.specular.value.copy(S.specular),_.shininess.value=Math.max(S.shininess,1e-4)}function g(_,S){S.gradientMap&&(_.gradientMap.value=S.gradientMap)}function m(_,S){_.metalness.value=S.metalness,S.metalnessMap&&(_.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,_.metalnessMapTransform)),_.roughness.value=S.roughness,S.roughnessMap&&(_.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,_.roughnessMapTransform)),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)}function y(_,S,b){_.ior.value=S.ior,S.sheen>0&&(_.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),_.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(_.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,_.sheenColorMapTransform)),S.sheenRoughnessMap&&(_.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,_.sheenRoughnessMapTransform))),S.clearcoat>0&&(_.clearcoat.value=S.clearcoat,_.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(_.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,_.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(_.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ei&&_.clearcoatNormalScale.value.negate())),S.dispersion>0&&(_.dispersion.value=S.dispersion),S.iridescence>0&&(_.iridescence.value=S.iridescence,_.iridescenceIOR.value=S.iridescenceIOR,_.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(_.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,_.iridescenceMapTransform)),S.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),S.transmission>0&&(_.transmission.value=S.transmission,_.transmissionSamplerMap.value=b.texture,_.transmissionSamplerSize.value.set(b.width,b.height),S.transmissionMap&&(_.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,_.transmissionMapTransform)),_.thickness.value=S.thickness,S.thicknessMap&&(_.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=S.attenuationDistance,_.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(_.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(_.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=S.specularIntensity,_.specularColor.value.copy(S.specularColor),S.specularColorMap&&(_.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,_.specularColorMapTransform)),S.specularIntensityMap&&(_.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,S){S.matcap&&(_.matcap.value=S.matcap)}function w(_,S){const b=e.get(S).light;_.referencePosition.value.setFromMatrixPosition(b.matrixWorld),_.nearDistance.value=b.shadow.camera.near,_.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Sb(a,e,t,i){let s={},o={},c=[];const u=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function h(b,C){const T=C.program;i.uniformBlockBinding(b,T)}function d(b,C){let T=s[b.id];T===void 0&&(v(b),T=p(b),s[b.id]=T,b.addEventListener("dispose",_));const L=C.program;i.updateUBOMapping(b,L);const R=e.render.frame;o[b.id]!==R&&(m(b),o[b.id]=R)}function p(b){const C=g();b.__bindingPointIndex=C;const T=a.createBuffer(),L=b.__size,R=b.usage;return a.bindBuffer(a.UNIFORM_BUFFER,T),a.bufferData(a.UNIFORM_BUFFER,L,R),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,C,T),T}function g(){for(let b=0;b<u;b++)if(c.indexOf(b)===-1)return c.push(b),b;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(b){const C=s[b.id],T=b.uniforms,L=b.__cache;a.bindBuffer(a.UNIFORM_BUFFER,C);for(let R=0,F=T.length;R<F;R++){const E=Array.isArray(T[R])?T[R]:[T[R]];for(let I=0,k=E.length;I<k;I++){const U=E[I];if(y(U,R,I,L)===!0){const B=U.__offset,K=Array.isArray(U.value)?U.value:[U.value];let ie=0;for(let W=0;W<K.length;W++){const ee=K[W],V=w(ee);typeof ee=="number"||typeof ee=="boolean"?(U.__data[0]=ee,a.bufferSubData(a.UNIFORM_BUFFER,B+ie,U.__data)):ee.isMatrix3?(U.__data[0]=ee.elements[0],U.__data[1]=ee.elements[1],U.__data[2]=ee.elements[2],U.__data[3]=0,U.__data[4]=ee.elements[3],U.__data[5]=ee.elements[4],U.__data[6]=ee.elements[5],U.__data[7]=0,U.__data[8]=ee.elements[6],U.__data[9]=ee.elements[7],U.__data[10]=ee.elements[8],U.__data[11]=0):ArrayBuffer.isView(ee)?U.__data.set(new ee.constructor(ee.buffer,ee.byteOffset,U.__data.length)):(ee.toArray(U.__data,ie),ie+=V.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,B,U.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function y(b,C,T,L){const R=b.value,F=C+"_"+T;if(L[F]===void 0)return typeof R=="number"||typeof R=="boolean"?L[F]=R:ArrayBuffer.isView(R)?L[F]=R.slice():L[F]=R.clone(),!0;{const E=L[F];if(typeof R=="number"||typeof R=="boolean"){if(E!==R)return L[F]=R,!0}else{if(ArrayBuffer.isView(R))return!0;if(E.equals(R)===!1)return E.copy(R),!0}}return!1}function v(b){const C=b.uniforms;let T=0;const L=16;for(let F=0,E=C.length;F<E;F++){const I=Array.isArray(C[F])?C[F]:[C[F]];for(let k=0,U=I.length;k<U;k++){const B=I[k],K=Array.isArray(B.value)?B.value:[B.value];for(let ie=0,W=K.length;ie<W;ie++){const ee=K[ie],V=w(ee),G=T%L,$=G%V.boundary,X=G+$;T+=$,X!==0&&L-X<V.storage&&(T+=L-X),B.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=T,T+=V.storage}}}const R=T%L;return R>0&&(T+=L-R),b.__size=T,b.__cache={},this}function w(b){const C={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(C.boundary=4,C.storage=4):b.isVector2?(C.boundary=8,C.storage=8):b.isVector3||b.isColor?(C.boundary=16,C.storage=12):b.isVector4?(C.boundary=16,C.storage=16):b.isMatrix3?(C.boundary=48,C.storage=48):b.isMatrix4?(C.boundary=64,C.storage=64):b.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(C.boundary=16,C.storage=b.byteLength):ct("WebGLRenderer: Unsupported uniform value type.",b),C}function _(b){const C=b.target;C.removeEventListener("dispose",_);const T=c.indexOf(C.__bindingPointIndex);c.splice(T,1),a.deleteBuffer(s[C.id]),delete s[C.id],delete o[C.id]}function S(){for(const b in s)a.deleteBuffer(s[b]);c=[],s={},o={}}return{bind:h,update:d,dispose:S}}const Mb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let qi=null;function wb(){return qi===null&&(qi=new Dd(Mb,16,16,Ls,di),qi.name="DFG_LUT",qi.minFilter=xn,qi.magFilter=xn,qi.wrapS=mr,qi.wrapT=mr,qi.generateMipmaps=!1,qi.needsUpdate=!0),qi}class ss{constructor(e={}){const{canvas:t=My(),context:i=null,depth:s=!0,stencil:o=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:m=!1,outputBufferType:y=hi}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=c;const w=y,_=new Set([Pd,Rd,Ad]),S=new Set([hi,Qi,Oo,zo,bd,Td]),b=new Uint32Array(4),C=new Int32Array(4),T=new J;let L=null,R=null;const F=[],E=[];let I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let U=!1,B=null;this._outputColorSpace=ui;let K=0,ie=0,W=null,ee=-1,V=null;const G=new an,$=new an;let X=null;const z=new Ye(0);let Z=0,me=t.width,Ae=t.height,Ee=1,Q=null,ve=null;const pe=new an(0,0,me,Ae),Oe=new an(0,0,me,Ae);let et=!1;const rt=new kd;let Dt=!1,gt=!1;const At=new Yt,kt=new J,vt=new an,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function fn(){return W===null?Ee:1}let te=i;function Ft(N,re){return t.getContext(N,re)}try{const N={alpha:!0,depth:s,stencil:o,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Md}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",ht,!1),te===null){const re="webgl2";if(te=Ft(re,N),te===null)throw Ft(re)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw Nt("WebGLRenderer: "+N.message),N}let yt,Lt,ze,Wt,O,A,se,fe,ye,Ce,Fe,de,_e,Be,Ge,Re,Pe,st,ut,St,j,Le,xe;function He(){yt=new w2(te),yt.init(),j=new pb(te,yt),Lt=new m2(te,yt,e,j),ze=new fb(te,yt),Lt.reversedDepthBuffer&&m&&ze.buffers.depth.setReversed(!0),Wt=new T2(te),O=new QE,A=new db(te,yt,ze,O,Lt,j,Wt),se=new M2(k),fe=new PS(te),Le=new d2(te,fe),ye=new E2(te,fe,Wt,Le),Ce=new A2(te,ye,fe,Le,Wt),st=new C2(te,Lt,A),Ge=new g2(O),Fe=new ZE(k,se,yt,Lt,Le,Ge),de=new yb(k,O),_e=new eb,Be=new ab(yt),Pe=new f2(k,se,ze,Ce,v,h),Re=new hb(k,Ce,Lt),xe=new Sb(te,Wt,Lt,ze),ut=new p2(te,yt,Wt),St=new b2(te,yt,Wt),Wt.programs=Fe.programs,k.capabilities=Lt,k.extensions=yt,k.properties=O,k.renderLists=_e,k.shadowMap=Re,k.state=ze,k.info=Wt}He(),w!==hi&&(I=new P2(w,t.width,t.height,s,o));const Ne=new vb(k,te);this.xr=Ne,this.getContext=function(){return te},this.getContextAttributes=function(){return te.getContextAttributes()},this.forceContextLoss=function(){const N=yt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=yt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(N){N!==void 0&&(Ee=N,this.setSize(me,Ae,!1))},this.getSize=function(N){return N.set(me,Ae)},this.setSize=function(N,re,ue=!0){if(Ne.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}me=N,Ae=re,t.width=Math.floor(N*Ee),t.height=Math.floor(re*Ee),ue===!0&&(t.style.width=N+"px",t.style.height=re+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,N,re)},this.getDrawingBufferSize=function(N){return N.set(me*Ee,Ae*Ee).floor()},this.setDrawingBufferSize=function(N,re,ue){me=N,Ae=re,Ee=ue,t.width=Math.floor(N*ue),t.height=Math.floor(re*ue),this.setViewport(0,0,N,re)},this.setEffects=function(N){if(w===hi){Nt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let re=0;re<N.length;re++)if(N[re].isOutputPass===!0){ct("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(G)},this.getViewport=function(N){return N.copy(pe)},this.setViewport=function(N,re,ue,le){N.isVector4?pe.set(N.x,N.y,N.z,N.w):pe.set(N,re,ue,le),ze.viewport(G.copy(pe).multiplyScalar(Ee).round())},this.getScissor=function(N){return N.copy(Oe)},this.setScissor=function(N,re,ue,le){N.isVector4?Oe.set(N.x,N.y,N.z,N.w):Oe.set(N,re,ue,le),ze.scissor($.copy(Oe).multiplyScalar(Ee).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(N){ze.setScissorTest(et=N)},this.setOpaqueSort=function(N){Q=N},this.setTransparentSort=function(N){ve=N},this.getClearColor=function(N){return N.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(N=!0,re=!0,ue=!0){let le=0;if(N){let oe=!1;if(W!==null){const ke=W.texture.format;oe=_.has(ke)}if(oe){const ke=W.texture.type,$e=S.has(ke),Ue=Pe.getClearColor(),Qe=Pe.getClearAlpha(),it=Ue.r,pt=Ue.g,mt=Ue.b;$e?(b[0]=it,b[1]=pt,b[2]=mt,b[3]=Qe,te.clearBufferuiv(te.COLOR,0,b)):(C[0]=it,C[1]=pt,C[2]=mt,C[3]=Qe,te.clearBufferiv(te.COLOR,0,C))}else le|=te.COLOR_BUFFER_BIT}re&&(le|=te.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(le|=te.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&te.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),B=N},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",ht,!1),Pe.dispose(),_e.dispose(),Be.dispose(),O.dispose(),se.dispose(),Ce.dispose(),Le.dispose(),xe.dispose(),Fe.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",Xt),Ne.removeEventListener("sessionend",Sr),Ji.stop()};function Se(N){N.preventDefault(),O0("WebGLRenderer: Context Lost."),U=!0}function qe(){O0("WebGLRenderer: Context Restored."),U=!1;const N=Wt.autoReset,re=Re.enabled,ue=Re.autoUpdate,le=Re.needsUpdate,oe=Re.type;He(),Wt.autoReset=N,Re.enabled=re,Re.autoUpdate=ue,Re.needsUpdate=le,Re.type=oe}function ht(N){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function zt(N){const re=N.target;re.removeEventListener("dispose",zt),Rt(re)}function Rt(N){be(N),O.remove(N)}function be(N){const re=O.get(N).programs;re!==void 0&&(re.forEach(function(ue){Fe.releaseProgram(ue)}),N.isShaderMaterial&&Fe.releaseShaderCache(N))}this.renderBufferDirect=function(N,re,ue,le,oe,ke){re===null&&(re=_t);const $e=oe.isMesh&&oe.matrixWorld.determinant()<0,Ue=qo(N,re,ue,le,oe);ze.setMaterial(le,$e);let Qe=ue.index,it=1;if(le.wireframe===!0){if(Qe=ye.getWireframeAttribute(ue),Qe===void 0)return;it=2}const pt=ue.drawRange,mt=ue.attributes.position;let tt=pt.start*it,Pt=(pt.start+pt.count)*it;ke!==null&&(tt=Math.max(tt,ke.start*it),Pt=Math.min(Pt,(ke.start+ke.count)*it)),Qe!==null?(tt=Math.max(tt,0),Pt=Math.min(Pt,Qe.count)):mt!=null&&(tt=Math.max(tt,0),Pt=Math.min(Pt,mt.count));const jt=Pt-tt;if(jt<0||jt===1/0)return;Le.setup(oe,le,Ue,ue,Qe);let Jt,Bt=ut;if(Qe!==null&&(Jt=fe.get(Qe),Bt=St,Bt.setIndex(Jt)),oe.isMesh)le.wireframe===!0?(ze.setLineWidth(le.wireframeLinewidth*fn()),Bt.setMode(te.LINES)):Bt.setMode(te.TRIANGLES);else if(oe.isLine){let dn=le.linewidth;dn===void 0&&(dn=1),ze.setLineWidth(dn*fn()),oe.isLineSegments?Bt.setMode(te.LINES):oe.isLineLoop?Bt.setMode(te.LINE_LOOP):Bt.setMode(te.LINE_STRIP)}else oe.isPoints?Bt.setMode(te.POINTS):oe.isSprite&&Bt.setMode(te.TRIANGLES);if(oe.isBatchedMesh)if(yt.get("WEBGL_multi_draw"))Bt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{const dn=oe._multiDrawStarts,Xe=oe._multiDrawCounts,Rn=oe._multiDrawCount,wt=Qe?fe.get(Qe).bytesPerElement:1,Xn=O.get(le).currentProgram.getUniforms();for(let jn=0;jn<Rn;jn++)Xn.setValue(te,"_gl_DrawID",jn),Bt.render(dn[jn]/wt,Xe[jn])}else if(oe.isInstancedMesh)Bt.renderInstances(tt,jt,oe.count);else if(ue.isInstancedBufferGeometry){const dn=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Xe=Math.min(ue.instanceCount,dn);Bt.renderInstances(tt,jt,Xe)}else Bt.render(tt,jt)};function We(N,re,ue){N.transparent===!0&&N.side===Fi&&N.forceSinglePass===!1?(N.side=ei,N.needsUpdate=!0,Ds(N,re,ue),N.side=ns,N.needsUpdate=!0,Ds(N,re,ue),N.side=Fi):Ds(N,re,ue)}this.compile=function(N,re,ue=null){ue===null&&(ue=N),R=Be.get(ue),R.init(re),E.push(R),ue.traverseVisible(function(oe){oe.isLight&&oe.layers.test(re.layers)&&(R.pushLight(oe),oe.castShadow&&R.pushShadow(oe))}),N!==ue&&N.traverseVisible(function(oe){oe.isLight&&oe.layers.test(re.layers)&&(R.pushLight(oe),oe.castShadow&&R.pushShadow(oe))}),R.setupLights();const le=new Set;return N.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;const ke=oe.material;if(ke)if(Array.isArray(ke))for(let $e=0;$e<ke.length;$e++){const Ue=ke[$e];We(Ue,ue,oe),le.add(Ue)}else We(ke,ue,oe),le.add(ke)}),R=E.pop(),le},this.compileAsync=function(N,re,ue=null){const le=this.compile(N,re,ue);return new Promise(oe=>{function ke(){if(le.forEach(function($e){O.get($e).currentProgram.isReady()&&le.delete($e)}),le.size===0){oe(N);return}setTimeout(ke,10)}yt.get("KHR_parallel_shader_compile")!==null?ke():setTimeout(ke,10)})};let De=null;function dt(N){De&&De(N)}function Xt(){Ji.stop()}function Sr(){Ji.start()}const Ji=new zx;Ji.setAnimationLoop(dt),typeof self<"u"&&Ji.setContext(self),this.setAnimationLoop=function(N){De=N,Ne.setAnimationLoop(N),N===null?Ji.stop():Ji.start()},Ne.addEventListener("sessionstart",Xt),Ne.addEventListener("sessionend",Sr),this.render=function(N,re){if(re!==void 0&&re.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;B!==null&&B.renderStart(N,re);const ue=Ne.enabled===!0&&Ne.isPresenting===!0,le=I!==null&&(W===null||ue)&&I.begin(k,W);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),re.parent===null&&re.matrixWorldAutoUpdate===!0&&re.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(re),re=Ne.getCamera()),N.isScene===!0&&N.onBeforeRender(k,N,re,W),R=Be.get(N,E.length),R.init(re),R.state.textureUnits=A.getTextureUnits(),E.push(R),At.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),rt.setFromProjectionMatrix(At,$i,re.reversedDepth),gt=this.localClippingEnabled,Dt=Ge.init(this.clippingPlanes,gt),L=_e.get(N,F.length),L.init(),F.push(L),Ne.enabled===!0&&Ne.isPresenting===!0){const $e=k.xr.getDepthSensingMesh();$e!==null&&Da($e,re,-1/0,k.sortObjects)}Da(N,re,0,k.sortObjects),L.finish(),k.sortObjects===!0&&L.sort(Q,ve),Gt=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,Gt&&Pe.addToRenderList(L,N),this.info.render.frame++,Dt===!0&&Ge.beginShadows();const oe=R.state.shadowsArray;if(Re.render(oe,N,re),Dt===!0&&Ge.endShadows(),this.info.autoReset===!0&&this.info.reset(),(le&&I.hasRenderPass())===!1){const $e=L.opaque,Ue=L.transmissive;if(R.setupLights(),re.isArrayCamera){const Qe=re.cameras;if(Ue.length>0)for(let it=0,pt=Qe.length;it<pt;it++){const mt=Qe[it];Bi($e,Ue,N,mt)}Gt&&Pe.render(N);for(let it=0,pt=Qe.length;it<pt;it++){const mt=Qe[it];Xo(L,N,mt,mt.viewport)}}else Ue.length>0&&Bi($e,Ue,N,re),Gt&&Pe.render(N),Xo(L,N,re)}W!==null&&ie===0&&(A.updateMultisampleRenderTarget(W),A.updateRenderTargetMipmap(W)),le&&I.end(k),N.isScene===!0&&N.onAfterRender(k,N,re),Le.resetDefaultState(),ee=-1,V=null,E.pop(),E.length>0?(R=E[E.length-1],A.setTextureUnits(R.state.textureUnits),Dt===!0&&Ge.setGlobalState(k.clippingPlanes,R.state.camera)):R=null,F.pop(),F.length>0?L=F[F.length-1]:L=null,B!==null&&B.renderEnd()};function Da(N,re,ue,le){if(N.visible===!1)return;if(N.layers.test(re.layers)){if(N.isGroup)ue=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(re);else if(N.isLightProbeGrid)R.pushLightProbeGrid(N);else if(N.isLight)R.pushLight(N),N.castShadow&&R.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||rt.intersectsSprite(N)){le&&vt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(At);const $e=Ce.update(N),Ue=N.material;Ue.visible&&L.push(N,$e,Ue,ue,vt.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||rt.intersectsObject(N))){const $e=Ce.update(N),Ue=N.material;if(le&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),vt.copy(N.boundingSphere.center)):($e.boundingSphere===null&&$e.computeBoundingSphere(),vt.copy($e.boundingSphere.center)),vt.applyMatrix4(N.matrixWorld).applyMatrix4(At)),Array.isArray(Ue)){const Qe=$e.groups;for(let it=0,pt=Qe.length;it<pt;it++){const mt=Qe[it],tt=Ue[mt.materialIndex];tt&&tt.visible&&L.push(N,$e,tt,ue,vt.z,mt)}}else Ue.visible&&L.push(N,$e,Ue,ue,vt.z,null)}}const ke=N.children;for(let $e=0,Ue=ke.length;$e<Ue;$e++)Da(ke[$e],re,ue,le)}function Xo(N,re,ue,le){const{opaque:oe,transmissive:ke,transparent:$e}=N;R.setupLightsView(ue),Dt===!0&&Ge.setGlobalState(k.clippingPlanes,ue),le&&ze.viewport(G.copy(le)),oe.length>0&&as(oe,re,ue),ke.length>0&&as(ke,re,ue),$e.length>0&&as($e,re,ue),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function Bi(N,re,ue,le){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[le.id]===void 0){const tt=yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[le.id]=new ti(1,1,{generateMipmaps:!0,type:tt?di:hi,minFilter:As,samples:Math.max(4,Lt.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const ke=R.state.transmissionRenderTarget[le.id],$e=le.viewport||G;ke.setSize($e.z*k.transmissionResolutionScale,$e.w*k.transmissionResolutionScale);const Ue=k.getRenderTarget(),Qe=k.getActiveCubeFace(),it=k.getActiveMipmapLevel();k.setRenderTarget(ke),k.getClearColor(z),Z=k.getClearAlpha(),Z<1&&k.setClearColor(16777215,.5),k.clear(),Gt&&Pe.render(ue);const pt=k.toneMapping;k.toneMapping=Zi;const mt=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),R.setupLightsView(le),Dt===!0&&Ge.setGlobalState(k.clippingPlanes,le),as(N,ue,le),A.updateMultisampleRenderTarget(ke),A.updateRenderTargetMipmap(ke),yt.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Pt=0,jt=re.length;Pt<jt;Pt++){const Jt=re[Pt],{object:Bt,geometry:dn,material:Xe,group:Rn}=Jt;if(Xe.side===Fi&&Bt.layers.test(le.layers)){const wt=Xe.side;Xe.side=ei,Xe.needsUpdate=!0,ka(Bt,ue,le,dn,Xe,Rn),Xe.side=wt,Xe.needsUpdate=!0,tt=!0}}tt===!0&&(A.updateMultisampleRenderTarget(ke),A.updateRenderTargetMipmap(ke))}k.setRenderTarget(Ue,Qe,it),k.setClearColor(z,Z),mt!==void 0&&(le.viewport=mt),k.toneMapping=pt}function as(N,re,ue){const le=re.isScene===!0?re.overrideMaterial:null;for(let oe=0,ke=N.length;oe<ke;oe++){const $e=N[oe],{object:Ue,geometry:Qe,group:it}=$e;let pt=$e.material;pt.allowOverride===!0&&le!==null&&(pt=le),Ue.layers.test(ue.layers)&&ka(Ue,re,ue,Qe,pt,it)}}function ka(N,re,ue,le,oe,ke){N.onBeforeRender(k,re,ue,le,oe,ke),N.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),oe.onBeforeRender(k,re,ue,le,N,ke),oe.transparent===!0&&oe.side===Fi&&oe.forceSinglePass===!1?(oe.side=ei,oe.needsUpdate=!0,k.renderBufferDirect(ue,re,le,oe,N,ke),oe.side=ns,oe.needsUpdate=!0,k.renderBufferDirect(ue,re,le,oe,N,ke),oe.side=Fi):k.renderBufferDirect(ue,re,le,oe,N,ke),N.onAfterRender(k,re,ue,le,oe,ke)}function Ds(N,re,ue){re.isScene!==!0&&(re=_t);const le=O.get(N),oe=R.state.lights,ke=R.state.shadowsArray,$e=oe.state.version,Ue=Fe.getParameters(N,oe.state,ke,re,ue,R.state.lightProbeGridArray),Qe=Fe.getProgramCacheKey(Ue);let it=le.programs;le.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?re.environment:null,le.fog=re.fog;const pt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;le.envMap=se.get(N.envMap||le.environment,pt),le.envMapRotation=le.environment!==null&&N.envMap===null?re.environmentRotation:N.envMapRotation,it===void 0&&(N.addEventListener("dispose",zt),it=new Map,le.programs=it);let mt=it.get(Qe);if(mt!==void 0){if(le.currentProgram===mt&&le.lightsStateVersion===$e)return za(N,Ue),mt}else Ue.uniforms=Fe.getUniforms(N),B!==null&&N.isNodeMaterial&&B.build(N,ue,Ue),N.onBeforeCompile(Ue,k),mt=Fe.acquireProgram(Ue,Qe),it.set(Qe,mt),le.uniforms=Ue.uniforms;const tt=le.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(tt.clippingPlanes=Ge.uniform),za(N,Ue),le.needsLights=Kc(N),le.lightsStateVersion=$e,le.needsLights&&(tt.ambientLightColor.value=oe.state.ambient,tt.lightProbe.value=oe.state.probe,tt.directionalLights.value=oe.state.directional,tt.directionalLightShadows.value=oe.state.directionalShadow,tt.spotLights.value=oe.state.spot,tt.spotLightShadows.value=oe.state.spotShadow,tt.rectAreaLights.value=oe.state.rectArea,tt.ltc_1.value=oe.state.rectAreaLTC1,tt.ltc_2.value=oe.state.rectAreaLTC2,tt.pointLights.value=oe.state.point,tt.pointLightShadows.value=oe.state.pointShadow,tt.hemisphereLights.value=oe.state.hemi,tt.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,tt.spotLightMatrix.value=oe.state.spotLightMatrix,tt.spotLightMap.value=oe.state.spotLightMap,tt.pointShadowMatrix.value=oe.state.pointShadowMatrix),le.lightProbeGrid=R.state.lightProbeGridArray.length>0,le.currentProgram=mt,le.uniformsList=null,mt}function Oa(N){if(N.uniformsList===null){const re=N.currentProgram.getUniforms();N.uniformsList=Ac.seqWithValue(re.seq,N.uniforms)}return N.uniformsList}function za(N,re){const ue=O.get(N);ue.outputColorSpace=re.outputColorSpace,ue.batching=re.batching,ue.batchingColor=re.batchingColor,ue.instancing=re.instancing,ue.instancingColor=re.instancingColor,ue.instancingMorph=re.instancingMorph,ue.skinning=re.skinning,ue.morphTargets=re.morphTargets,ue.morphNormals=re.morphNormals,ue.morphColors=re.morphColors,ue.morphTargetsCount=re.morphTargetsCount,ue.numClippingPlanes=re.numClippingPlanes,ue.numIntersection=re.numClipIntersection,ue.vertexAlphas=re.vertexAlphas,ue.vertexTangents=re.vertexTangents,ue.toneMapping=re.toneMapping}function jo(N,re){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;T.setFromMatrixPosition(re.matrixWorld);for(let ue=0,le=N.length;ue<le;ue++){const oe=N[ue];if(oe.texture!==null&&oe.boundingBox.containsPoint(T))return oe}return null}function qo(N,re,ue,le,oe){re.isScene!==!0&&(re=_t),A.resetTextureUnits();const ke=re.fog,$e=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?re.environment:null,Ue=W===null?k.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Ct.workingColorSpace,Qe=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,it=se.get(le.envMap||$e,Qe),pt=le.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,mt=!!ue.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),tt=!!ue.morphAttributes.position,Pt=!!ue.morphAttributes.normal,jt=!!ue.morphAttributes.color;let Jt=Zi;le.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Jt=k.toneMapping);const Bt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,dn=Bt!==void 0?Bt.length:0,Xe=O.get(le),Rn=R.state.lights;if(Dt===!0&&(gt===!0||N!==V)){const Ht=N===V&&le.id===ee;Ge.setState(le,N,Ht)}let wt=!1;le.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==Rn.state.version||Xe.outputColorSpace!==Ue||oe.isBatchedMesh&&Xe.batching===!1||!oe.isBatchedMesh&&Xe.batching===!0||oe.isBatchedMesh&&Xe.batchingColor===!0&&oe.colorTexture===null||oe.isBatchedMesh&&Xe.batchingColor===!1&&oe.colorTexture!==null||oe.isInstancedMesh&&Xe.instancing===!1||!oe.isInstancedMesh&&Xe.instancing===!0||oe.isSkinnedMesh&&Xe.skinning===!1||!oe.isSkinnedMesh&&Xe.skinning===!0||oe.isInstancedMesh&&Xe.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&Xe.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&Xe.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&Xe.instancingMorph===!1&&oe.morphTexture!==null||Xe.envMap!==it||le.fog===!0&&Xe.fog!==ke||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Ge.numPlanes||Xe.numIntersection!==Ge.numIntersection)||Xe.vertexAlphas!==pt||Xe.vertexTangents!==mt||Xe.morphTargets!==tt||Xe.morphNormals!==Pt||Xe.morphColors!==jt||Xe.toneMapping!==Jt||Xe.morphTargetsCount!==dn||!!Xe.lightProbeGrid!=R.state.lightProbeGridArray.length>0)&&(wt=!0):(wt=!0,Xe.__version=le.version);let Xn=Xe.currentProgram;wt===!0&&(Xn=Ds(le,re,oe),B&&le.isNodeMaterial&&B.onUpdateProgram(le,Xn,Xe));let jn=!1,Et=!1,er=!1;const Ot=Xn.getUniforms(),$t=Xe.uniforms;if(ze.useProgram(Xn.program)&&(jn=!0,Et=!0,er=!0),le.id!==ee&&(ee=le.id,Et=!0),Xe.needsLights){const Ht=jo(R.state.lightProbeGridArray,oe);Xe.lightProbeGrid!==Ht&&(Xe.lightProbeGrid=Ht,Et=!0)}if(jn||V!==N){ze.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Ot.setValue(te,"projectionMatrix",N.projectionMatrix),Ot.setValue(te,"viewMatrix",N.matrixWorldInverse);const Ei=Ot.map.cameraPosition;Ei!==void 0&&Ei.setValue(te,kt.setFromMatrixPosition(N.matrixWorld)),Lt.logarithmicDepthBuffer&&Ot.setValue(te,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Ot.setValue(te,"isOrthographic",N.isOrthographicCamera===!0),V!==N&&(V=N,Et=!0,er=!0)}if(Xe.needsLights&&(Rn.state.directionalShadowMap.length>0&&Ot.setValue(te,"directionalShadowMap",Rn.state.directionalShadowMap,A),Rn.state.spotShadowMap.length>0&&Ot.setValue(te,"spotShadowMap",Rn.state.spotShadowMap,A),Rn.state.pointShadowMap.length>0&&Ot.setValue(te,"pointShadowMap",Rn.state.pointShadowMap,A)),oe.isSkinnedMesh){Ot.setOptional(te,oe,"bindMatrix"),Ot.setOptional(te,oe,"bindMatrixInverse");const Ht=oe.skeleton;Ht&&(Ht.boneTexture===null&&Ht.computeBoneTexture(),Ot.setValue(te,"boneTexture",Ht.boneTexture,A))}oe.isBatchedMesh&&(Ot.setOptional(te,oe,"batchingTexture"),Ot.setValue(te,"batchingTexture",oe._matricesTexture,A),Ot.setOptional(te,oe,"batchingIdTexture"),Ot.setValue(te,"batchingIdTexture",oe._indirectTexture,A),Ot.setOptional(te,oe,"batchingColorTexture"),oe._colorsTexture!==null&&Ot.setValue(te,"batchingColorTexture",oe._colorsTexture,A));const wi=ue.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&st.update(oe,ue,Xn),(Et||Xe.receiveShadow!==oe.receiveShadow)&&(Xe.receiveShadow=oe.receiveShadow,Ot.setValue(te,"receiveShadow",oe.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&re.environment!==null&&($t.envMapIntensity.value=re.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=wb()),Et){if(Ot.setValue(te,"toneMappingExposure",k.toneMappingExposure),Xe.needsLights&&$c($t,er),ke&&le.fog===!0&&de.refreshFogUniforms($t,ke),de.refreshMaterialUniforms($t,le,Ee,Ae,R.state.transmissionRenderTarget[N.id]),Xe.needsLights&&Xe.lightProbeGrid){const Ht=Xe.lightProbeGrid;$t.probesSH.value=Ht.texture,$t.probesMin.value.copy(Ht.boundingBox.min),$t.probesMax.value.copy(Ht.boundingBox.max),$t.probesResolution.value.copy(Ht.resolution)}Ac.upload(te,Oa(Xe),$t,A)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Ac.upload(te,Oa(Xe),$t,A),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Ot.setValue(te,"center",oe.center),Ot.setValue(te,"modelViewMatrix",oe.modelViewMatrix),Ot.setValue(te,"normalMatrix",oe.normalMatrix),Ot.setValue(te,"modelMatrix",oe.matrixWorld),le.uniformsGroups!==void 0){const Ht=le.uniformsGroups;for(let Ei=0,Hi=Ht.length;Ei<Hi;Ei++){const os=Ht[Ei];xe.update(os,Xn),xe.bind(os,Xn)}}return Xn}function $c(N,re){N.ambientLightColor.needsUpdate=re,N.lightProbe.needsUpdate=re,N.directionalLights.needsUpdate=re,N.directionalLightShadows.needsUpdate=re,N.pointLights.needsUpdate=re,N.pointLightShadows.needsUpdate=re,N.spotLights.needsUpdate=re,N.spotLightShadows.needsUpdate=re,N.rectAreaLights.needsUpdate=re,N.hemisphereLights.needsUpdate=re}function Kc(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return ie},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(N,re,ue){const le=O.get(N);le.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),O.get(N.texture).__webglTexture=re,O.get(N.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:ue,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,re){const ue=O.get(N);ue.__webglFramebuffer=re,ue.__useDefaultFramebuffer=re===void 0};const tn=te.createFramebuffer();this.setRenderTarget=function(N,re=0,ue=0){W=N,K=re,ie=ue;let le=null,oe=!1,ke=!1;if(N){const Ue=O.get(N);if(Ue.__useDefaultFramebuffer!==void 0){ze.bindFramebuffer(te.FRAMEBUFFER,Ue.__webglFramebuffer),G.copy(N.viewport),$.copy(N.scissor),X=N.scissorTest,ze.viewport(G),ze.scissor($),ze.setScissorTest(X),ee=-1;return}else if(Ue.__webglFramebuffer===void 0)A.setupRenderTarget(N);else if(Ue.__hasExternalTextures)A.rebindTextures(N,O.get(N.texture).__webglTexture,O.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const pt=N.depthTexture;if(Ue.__boundDepthTexture!==pt){if(pt!==null&&O.has(pt)&&(N.width!==pt.image.width||N.height!==pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(N)}}const Qe=N.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(ke=!0);const it=O.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(it[re])?le=it[re][ue]:le=it[re],oe=!0):N.samples>0&&A.useMultisampledRTT(N)===!1?le=O.get(N).__webglMultisampledFramebuffer:Array.isArray(it)?le=it[ue]:le=it,G.copy(N.viewport),$.copy(N.scissor),X=N.scissorTest}else G.copy(pe).multiplyScalar(Ee).floor(),$.copy(Oe).multiplyScalar(Ee).floor(),X=et;if(ue!==0&&(le=tn),ze.bindFramebuffer(te.FRAMEBUFFER,le)&&ze.drawBuffers(N,le),ze.viewport(G),ze.scissor($),ze.setScissorTest(X),oe){const Ue=O.get(N.texture);te.framebufferTexture2D(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0,te.TEXTURE_CUBE_MAP_POSITIVE_X+re,Ue.__webglTexture,ue)}else if(ke){const Ue=re;for(let Qe=0;Qe<N.textures.length;Qe++){const it=O.get(N.textures[Qe]);te.framebufferTextureLayer(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0+Qe,it.__webglTexture,ue,Ue)}}else if(N!==null&&ue!==0){const Ue=O.get(N.texture);te.framebufferTexture2D(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0,te.TEXTURE_2D,Ue.__webglTexture,ue)}ee=-1},this.readRenderTargetPixels=function(N,re,ue,le,oe,ke,$e,Ue=0){if(!(N&&N.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=O.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&$e!==void 0&&(Qe=Qe[$e]),Qe){ze.bindFramebuffer(te.FRAMEBUFFER,Qe);try{const it=N.textures[Ue],pt=it.format,mt=it.type;if(N.textures.length>1&&te.readBuffer(te.COLOR_ATTACHMENT0+Ue),!Lt.textureFormatReadable(pt)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(mt)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}re>=0&&re<=N.width-le&&ue>=0&&ue<=N.height-oe&&te.readPixels(re,ue,le,oe,j.convert(pt),j.convert(mt),ke)}finally{const it=W!==null?O.get(W).__webglFramebuffer:null;ze.bindFramebuffer(te.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(N,re,ue,le,oe,ke,$e,Ue=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=O.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&$e!==void 0&&(Qe=Qe[$e]),Qe)if(re>=0&&re<=N.width-le&&ue>=0&&ue<=N.height-oe){ze.bindFramebuffer(te.FRAMEBUFFER,Qe);const it=N.textures[Ue],pt=it.format,mt=it.type;if(N.textures.length>1&&te.readBuffer(te.COLOR_ATTACHMENT0+Ue),!Lt.textureFormatReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=te.createBuffer();te.bindBuffer(te.PIXEL_PACK_BUFFER,tt),te.bufferData(te.PIXEL_PACK_BUFFER,ke.byteLength,te.STREAM_READ),te.readPixels(re,ue,le,oe,j.convert(pt),j.convert(mt),0);const Pt=W!==null?O.get(W).__webglFramebuffer:null;ze.bindFramebuffer(te.FRAMEBUFFER,Pt);const jt=te.fenceSync(te.SYNC_GPU_COMMANDS_COMPLETE,0);return te.flush(),await wy(te,jt,4),te.bindBuffer(te.PIXEL_PACK_BUFFER,tt),te.getBufferSubData(te.PIXEL_PACK_BUFFER,0,ke),te.deleteBuffer(tt),te.deleteSync(jt),ke}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,re=null,ue=0){const le=Math.pow(2,-ue),oe=Math.floor(N.image.width*le),ke=Math.floor(N.image.height*le),$e=re!==null?re.x:0,Ue=re!==null?re.y:0;A.setTexture2D(N,0),te.copyTexSubImage2D(te.TEXTURE_2D,ue,0,0,$e,Ue,oe,ke),ze.unbindTexture()};const Zc=te.createFramebuffer(),Ba=te.createFramebuffer();this.copyTextureToTexture=function(N,re,ue=null,le=null,oe=0,ke=0){let $e,Ue,Qe,it,pt,mt,tt,Pt,jt;const Jt=N.isCompressedTexture?N.mipmaps[ke]:N.image;if(ue!==null)$e=ue.max.x-ue.min.x,Ue=ue.max.y-ue.min.y,Qe=ue.isBox3?ue.max.z-ue.min.z:1,it=ue.min.x,pt=ue.min.y,mt=ue.isBox3?ue.min.z:0;else{const $t=Math.pow(2,-oe);$e=Math.floor(Jt.width*$t),Ue=Math.floor(Jt.height*$t),N.isDataArrayTexture?Qe=Jt.depth:N.isData3DTexture?Qe=Math.floor(Jt.depth*$t):Qe=1,it=0,pt=0,mt=0}le!==null?(tt=le.x,Pt=le.y,jt=le.z):(tt=0,Pt=0,jt=0);const Bt=j.convert(re.format),dn=j.convert(re.type);let Xe;re.isData3DTexture?(A.setTexture3D(re,0),Xe=te.TEXTURE_3D):re.isDataArrayTexture||re.isCompressedArrayTexture?(A.setTexture2DArray(re,0),Xe=te.TEXTURE_2D_ARRAY):(A.setTexture2D(re,0),Xe=te.TEXTURE_2D),ze.activeTexture(te.TEXTURE0),ze.pixelStorei(te.UNPACK_FLIP_Y_WEBGL,re.flipY),ze.pixelStorei(te.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),ze.pixelStorei(te.UNPACK_ALIGNMENT,re.unpackAlignment);const Rn=ze.getParameter(te.UNPACK_ROW_LENGTH),wt=ze.getParameter(te.UNPACK_IMAGE_HEIGHT),Xn=ze.getParameter(te.UNPACK_SKIP_PIXELS),jn=ze.getParameter(te.UNPACK_SKIP_ROWS),Et=ze.getParameter(te.UNPACK_SKIP_IMAGES);ze.pixelStorei(te.UNPACK_ROW_LENGTH,Jt.width),ze.pixelStorei(te.UNPACK_IMAGE_HEIGHT,Jt.height),ze.pixelStorei(te.UNPACK_SKIP_PIXELS,it),ze.pixelStorei(te.UNPACK_SKIP_ROWS,pt),ze.pixelStorei(te.UNPACK_SKIP_IMAGES,mt);const er=N.isDataArrayTexture||N.isData3DTexture,Ot=re.isDataArrayTexture||re.isData3DTexture;if(N.isDepthTexture){const $t=O.get(N),wi=O.get(re),Ht=O.get($t.__renderTarget),Ei=O.get(wi.__renderTarget);ze.bindFramebuffer(te.READ_FRAMEBUFFER,Ht.__webglFramebuffer),ze.bindFramebuffer(te.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let Hi=0;Hi<Qe;Hi++)er&&(te.framebufferTextureLayer(te.READ_FRAMEBUFFER,te.COLOR_ATTACHMENT0,O.get(N).__webglTexture,oe,mt+Hi),te.framebufferTextureLayer(te.DRAW_FRAMEBUFFER,te.COLOR_ATTACHMENT0,O.get(re).__webglTexture,ke,jt+Hi)),te.blitFramebuffer(it,pt,$e,Ue,tt,Pt,$e,Ue,te.DEPTH_BUFFER_BIT,te.NEAREST);ze.bindFramebuffer(te.READ_FRAMEBUFFER,null),ze.bindFramebuffer(te.DRAW_FRAMEBUFFER,null)}else if(oe!==0||N.isRenderTargetTexture||O.has(N)){const $t=O.get(N),wi=O.get(re);ze.bindFramebuffer(te.READ_FRAMEBUFFER,Zc),ze.bindFramebuffer(te.DRAW_FRAMEBUFFER,Ba);for(let Ht=0;Ht<Qe;Ht++)er?te.framebufferTextureLayer(te.READ_FRAMEBUFFER,te.COLOR_ATTACHMENT0,$t.__webglTexture,oe,mt+Ht):te.framebufferTexture2D(te.READ_FRAMEBUFFER,te.COLOR_ATTACHMENT0,te.TEXTURE_2D,$t.__webglTexture,oe),Ot?te.framebufferTextureLayer(te.DRAW_FRAMEBUFFER,te.COLOR_ATTACHMENT0,wi.__webglTexture,ke,jt+Ht):te.framebufferTexture2D(te.DRAW_FRAMEBUFFER,te.COLOR_ATTACHMENT0,te.TEXTURE_2D,wi.__webglTexture,ke),oe!==0?te.blitFramebuffer(it,pt,$e,Ue,tt,Pt,$e,Ue,te.COLOR_BUFFER_BIT,te.NEAREST):Ot?te.copyTexSubImage3D(Xe,ke,tt,Pt,jt+Ht,it,pt,$e,Ue):te.copyTexSubImage2D(Xe,ke,tt,Pt,it,pt,$e,Ue);ze.bindFramebuffer(te.READ_FRAMEBUFFER,null),ze.bindFramebuffer(te.DRAW_FRAMEBUFFER,null)}else Ot?N.isDataTexture||N.isData3DTexture?te.texSubImage3D(Xe,ke,tt,Pt,jt,$e,Ue,Qe,Bt,dn,Jt.data):re.isCompressedArrayTexture?te.compressedTexSubImage3D(Xe,ke,tt,Pt,jt,$e,Ue,Qe,Bt,Jt.data):te.texSubImage3D(Xe,ke,tt,Pt,jt,$e,Ue,Qe,Bt,dn,Jt):N.isDataTexture?te.texSubImage2D(te.TEXTURE_2D,ke,tt,Pt,$e,Ue,Bt,dn,Jt.data):N.isCompressedTexture?te.compressedTexSubImage2D(te.TEXTURE_2D,ke,tt,Pt,Jt.width,Jt.height,Bt,Jt.data):te.texSubImage2D(te.TEXTURE_2D,ke,tt,Pt,$e,Ue,Bt,dn,Jt);ze.pixelStorei(te.UNPACK_ROW_LENGTH,Rn),ze.pixelStorei(te.UNPACK_IMAGE_HEIGHT,wt),ze.pixelStorei(te.UNPACK_SKIP_PIXELS,Xn),ze.pixelStorei(te.UNPACK_SKIP_ROWS,jn),ze.pixelStorei(te.UNPACK_SKIP_IMAGES,Et),ke===0&&re.generateMipmaps&&te.generateMipmap(Xe),ze.unbindTexture()},this.initRenderTarget=function(N){O.get(N).__webglFramebuffer===void 0&&A.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?A.setTextureCube(N,0):N.isData3DTexture?A.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?A.setTexture2DArray(N,0):A.setTexture2D(N,0),ze.unbindTexture()},this.resetState=function(){K=0,ie=0,W=null,ze.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}}class Eb{constructor(e,t){D(this,"canvas");D(this,"ctx");D(this,"threeCanvas");D(this,"scene");D(this,"camera");D(this,"renderer");D(this,"videoTexture",null);D(this,"videoElement",null);D(this,"plane",null);D(this,"time",0);D(this,"uniforms");D(this,"targetAmplitude",.3);D(this,"targetFrequency",100);D(this,"currentAmplitude",.3);D(this,"currentFrequency",100);D(this,"clapVibration",0);this.canvas=e,this.ctx=t,this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.scene=new rs,this.camera=new Ua(-1,1,1,-1,0,1),this.renderer=new ss({canvas:this.threeCanvas,alpha:!1,antialias:!1}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const i=new Dd(new Uint8Array([0,0,0,255]),1,1,fi);i.needsUpdate=!0,this.uniforms={uTime:{value:0},uTexture:{value:i},uAmplitude:{value:.3},uFrequency:{value:100},uColorIntensity:{value:.8},uColor1:{value:new Ye("#6366f1")},uColor2:{value:new Ye("#8b5cf6")},uColor3:{value:new Ye("#d946ef")},uColor4:{value:new Ye("#ec4899")},uColor5:{value:new Ye("#f43f5e")}};const s=new cn({uniforms:this.uniforms,vertexShader:this.getVertexShader(),fragmentShader:this.getFragmentShader()}),o=new yr(2,2);this.plane=new hn(o,s),this.scene.add(this.plane),console.log("🎥 DistortedCameraRenderer initialized")}setVideoElement(e){if(!e){console.warn("DistortedCameraRenderer: No video element provided");return}this.videoElement===e&&this.videoTexture||(this.videoElement=e,this.videoTexture&&this.videoTexture.dispose(),this.videoTexture=new uS(e),this.videoTexture.minFilter=xn,this.videoTexture.magFilter=xn,this.videoTexture.format=fi,this.uniforms.uTexture.value=this.videoTexture,console.log("✅ DistortedCameraRenderer: Video texture created"))}getVertexShader(){return`
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
    `}render(e,t,i){if(!this.plane)return;(this.canvas.width!==this.threeCanvas.width||this.canvas.height!==this.threeCanvas.height)&&(this.threeCanvas.width=this.canvas.width,this.threeCanvas.height=this.canvas.height,this.renderer.setSize(this.canvas.width,this.canvas.height)),this.time+=.016*ni(),this.uniforms.uTime.value=this.time,t&&t.length>0&&(this.uniforms.uColor1.value.set(t[0]),this.uniforms.uColor2.value.set(t[1]||t[0]),this.uniforms.uColor3.value.set(t[2]||t[0]),this.uniforms.uColor4.value.set(t[3]||t[0]),this.uniforms.uColor5.value.set(t[4]||t[0]));const s=e.left,o=e.right;if(s||o)if(e.clapping)this.targetAmplitude=2,this.targetFrequency=300,this.clapVibration=1;else{const u=s||o;if(u){const d=50+Math.max(0,Math.min(1,u.position.x))*350,g=Math.max(0,Math.min(1,1-u.position.y))*1.5,m=u.fingerCount||0;u.gesture==="pinch"||m<=1?(this.targetAmplitude=g*.2,this.targetFrequency=d*.5):(this.targetAmplitude=g,this.targetFrequency=d)}}else this.targetAmplitude=.5,this.targetFrequency=150;this.currentAmplitude+=(this.targetAmplitude-this.currentAmplitude)*.1,this.currentFrequency+=(this.targetFrequency-this.currentFrequency)*.1,this.clapVibration*=.95;const c=this.currentAmplitude+this.clapVibration*Math.sin(this.time*50)*.5;this.uniforms.uAmplitude.value=c,this.uniforms.uFrequency.value=this.currentFrequency,this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){this.videoTexture&&this.videoTexture.dispose(),this.plane&&(this.plane.geometry.dispose(),this.plane.material instanceof Oi&&this.plane.material.dispose()),this.renderer.dispose(),this.renderer.forceContextLoss(),console.log("🎥 DistortedCameraRenderer destroyed")}}class bb{constructor(e,t){D(this,"canvas");D(this,"ctx");D(this,"streams",[]);D(this,"vanishingPoint",{x:0,y:0});D(this,"targetVanishingPoint",{x:0,y:0});D(this,"vanishingPointRight",{x:0,y:0});D(this,"targetVanishingPointRight",{x:0,y:0});D(this,"scanLineOffset",0);D(this,"clapAccumulation",0);D(this,"shakeIntensity",0);D(this,"time",0);D(this,"lastFingerCount",5);this.canvas=e,this.ctx=t,this.vanishingPoint.x=e.width*.3,this.vanishingPoint.y=e.height/2,this.targetVanishingPoint.x=this.vanishingPoint.x,this.targetVanishingPoint.y=this.vanishingPoint.y,this.vanishingPointRight.x=e.width*.7,this.vanishingPointRight.y=e.height/2,this.targetVanishingPointRight.x=this.vanishingPointRight.x,this.targetVanishingPointRight.y=this.vanishingPointRight.y;for(let i=0;i<6;i++)this.streams.push({angle:i/6*Math.PI*2,speed:1,packets:[],branchLevel:0})}render(e,t){const{width:i,height:s}=this.canvas;this.time+=.016*ni();const o=e.left,c=e.right,u=e.clapping||!1,h=e.clapIntensity||0;let d=1,p=1,g=5;o&&c?g=Math.floor(((o.fingerCount||5)+(c.fingerCount||5))/2):(o||c)&&(g=(o||c).fingerCount||5),this.lastFingerCount=g,g===1?(d=.003,p=.3):g===2?(d=.5,p=.7):(d=2,p=2.5),u?(this.clapAccumulation=Math.min(10,this.clapAccumulation+h*2),this.shakeIntensity=this.clapAccumulation*3,this.clapAccumulation>2&&Math.random()<.3&&this.spawnFractalBranch()):(this.clapAccumulation*=.98,this.shakeIntensity*=.9),o?(this.targetVanishingPoint.x=o.position.x*i,this.targetVanishingPoint.y=o.position.y*s):(this.targetVanishingPoint.x=i*.3,this.targetVanishingPoint.y=s/2),c?(this.targetVanishingPointRight.x=c.position.x*i,this.targetVanishingPointRight.y=c.position.y*s):(this.targetVanishingPointRight.x=i*.7,this.targetVanishingPointRight.y=s/2),this.vanishingPoint.x+=(this.targetVanishingPoint.x-this.vanishingPoint.x)*.05,this.vanishingPoint.y+=(this.targetVanishingPoint.y-this.vanishingPoint.y)*.05,this.vanishingPointRight.x+=(this.targetVanishingPointRight.x-this.vanishingPointRight.x)*.05,this.vanishingPointRight.y+=(this.targetVanishingPointRight.y-this.vanishingPointRight.y)*.05;let m=0,y=0;this.shakeIntensity>.5&&(m=(Math.random()-.5)*this.shakeIntensity,y=(Math.random()-.5)*this.shakeIntensity),this.ctx.fillStyle="rgba(0, 0, 0, 0.15)",this.ctx.fillRect(0,0,i,s),this.ctx.save(),this.ctx.translate(m,y),this.streams.forEach((_,S)=>{const b=.05*p*(_.branchLevel===0?1:.5);if(Math.random()<b){const C=["rect","hex","diamond"];_.packets.push({x:this.vanishingPoint.x,y:this.vanishingPoint.y,z:0,width:4+Math.random()*8,height:20+Math.random()*40,rotation:_.angle+(Math.random()-.5)*.3,rotationSpeed:(Math.random()-.5)*.02*d,streamIndex:S,age:0,hue:Math.random()*360,shimmerPhase:Math.random()*Math.PI*2,panelType:C[Math.floor(Math.random()*3)],waveAmplitude:Math.random()*10,waveFrequency:Math.random()*2+1,quantumPhase:Math.random()*Math.PI*2,particleCloud:[]})}_.packets=_.packets.filter(C=>{C.age+=.016*d,C.z+=.01*d*(1+_.branchLevel*.2),C.rotation+=C.rotationSpeed;const T=200*C.z,L=Math.sin(C.age*2+S)*30*C.z;return C.x=this.vanishingPoint.x+Math.cos(_.angle)*T+Math.sin(C.age*3)*L,C.y=this.vanishingPoint.y+Math.sin(_.angle)*T+Math.cos(C.age*2.5)*L,C.z<1&&C.x>-100&&C.x<i+100&&C.y>-100&&C.y<s+100})});const v=this.streams.flatMap(_=>_.packets);v.sort((_,S)=>_.z-S.z),v.forEach(_=>{const S=.2+_.z*.8,b=.3+_.z*.7,C=Math.sin(this.time*10+_.quantumPhase)*3*(1-_.z),T=Math.cos(_.age*_.waveFrequency)*C,L=Math.sin(_.age*_.waveFrequency)*C;this.ctx.save(),this.ctx.translate(_.x+T,_.y+L);const R=Math.floor(_.streamIndex%t.length),F=t[R],E=_.width*S,I=_.height*S;_.particleCloud.length<20&&Math.random()<.3&&_.particleCloud.push({dx:(Math.random()-.5)*E*2,dy:(Math.random()-.5)*I*2,life:1}),_.particleCloud=_.particleCloud.filter(U=>{if(U.life-=.02,U.life>0){const B=Math.sin(this.time*5+U.dx+U.dy)*.5+.5;return this.ctx.globalAlpha=b*U.life*.4*B,this.ctx.fillStyle=F,this.ctx.beginPath(),this.ctx.arc(U.dx,U.dy,1.5*S,0,Math.PI*2),this.ctx.fill(),!0}return!1}),this.ctx.globalAlpha=b*.8;const k=this.ctx.createRadialGradient(0,0,0,0,0,Math.max(E,I));k.addColorStop(0,this.addAlpha(F,.8)),k.addColorStop(.3,this.addAlpha(F,.4)),k.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.fillStyle=k,this.ctx.beginPath(),this.ctx.arc(0,0,Math.max(E,I),0,Math.PI*2),this.ctx.fill(),this.ctx.globalAlpha=b*.6,this.ctx.strokeStyle=F,this.ctx.lineWidth=1.5*S;for(let U=0;U<3;U++){this.ctx.beginPath();const B=U*Math.PI*.66,K=(this.time*50+_.age*30+B*20)%(Math.max(E,I)*2);K>0&&(this.ctx.globalAlpha=b*(1-K/(Math.max(E,I)*2))*.5,this.ctx.arc(0,0,K,0,Math.PI*2),this.ctx.stroke())}this.ctx.globalAlpha=b*.4,this.ctx.strokeStyle=F,this.ctx.lineWidth=.8*S;for(let U=0;U<6;U++){const B=U/6*Math.PI*2+this.time*.5,K=(Math.sin(this.time*2+U)*.5+1)*I*.8;this.ctx.beginPath(),this.ctx.moveTo(0,0);const ie=Math.cos(B+.3)*K*.6,W=Math.sin(B+.3)*K*.6,ee=Math.cos(B)*K,V=Math.sin(B)*K;this.ctx.quadraticCurveTo(ie,W,ee,V),this.ctx.stroke(),this.ctx.globalAlpha=b*.8,this.ctx.fillStyle=F,this.ctx.beginPath(),this.ctx.arc(ee,V,2*S,0,Math.PI*2),this.ctx.fill()}if(this.ctx.shadowBlur=20*S,this.ctx.shadowColor=F,this.ctx.globalAlpha=b,this.ctx.fillStyle=F,this.ctx.beginPath(),this.ctx.arc(0,0,3*S,0,Math.PI*2),this.ctx.fill(),this.ctx.shadowBlur=0,this.ctx.globalAlpha=b*.9,this.ctx.fillStyle="white",this.ctx.beginPath(),this.ctx.arc(0,0,1.5*S,0,Math.PI*2),this.ctx.fill(),Math.random()<.05){const U=Math.random()*Math.PI*2,B=Math.random()*Math.max(E,I)*1.5;this.ctx.globalAlpha=b*.6,this.ctx.strokeStyle=F,this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(Math.cos(U)*B,Math.sin(U)*B),this.ctx.stroke()}this.ctx.restore()}),this.ctx.globalAlpha=.05;for(let _=0;_<8;_++){const S=_/8*Math.PI*2,b=Math.max(i,s);this.ctx.strokeStyle=t[_%t.length]||"#00ffff",this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(this.vanishingPoint.x,this.vanishingPoint.y);const C=50;for(let T=0;T<=C;T++){const L=T/C,R=b*L,F=Math.sin(L*10+this.time*2)*20,E=this.vanishingPoint.x+Math.cos(S)*R+Math.cos(S+Math.PI/2)*F,I=this.vanishingPoint.y+Math.sin(S)*R+Math.sin(S+Math.PI/2)*F;T===0?this.ctx.moveTo(E,I):this.ctx.lineTo(E,I)}this.ctx.stroke()}for(let _=50;_<Math.max(i,s);_+=80){const S=_/100,b=Math.sin(this.time*2+S)*5;this.ctx.globalAlpha=.04,this.ctx.strokeStyle=t[Math.floor(S)%t.length]||"#00ffff",this.ctx.lineWidth=1,this.ctx.beginPath();const C=60;for(let T=0;T<=C;T++){const L=T/C*Math.PI*2,R=_+Math.sin(L*6+this.time*3)*b,F=this.vanishingPoint.x+Math.cos(L)*R,E=this.vanishingPoint.y+Math.sin(L)*R;T===0?this.ctx.moveTo(F,E):this.ctx.lineTo(F,E)}this.ctx.closePath(),this.ctx.stroke()}this.ctx.restore(),this.ctx.globalAlpha=.02;for(let _=0;_<100;_++){const S=Math.random()*i,b=Math.random()*s;Math.sin(this.time*20+_)*.5+.5>.7&&(this.ctx.fillStyle=t[_%t.length]||"#00ffff",this.ctx.beginPath(),this.ctx.arc(S,b,1,0,Math.PI*2),this.ctx.fill())}if(this.shakeIntensity>5){this.ctx.globalCompositeOperation="screen";for(let _=0;_<3;_++){this.ctx.globalAlpha=.05;const S=this.ctx.createRadialGradient(this.vanishingPoint.x,this.vanishingPoint.y,0,this.vanishingPoint.x,this.vanishingPoint.y,Math.max(i,s)*(.3+_*.2)),b=(this.time*100+_*120)%360;S.addColorStop(0,`hsla(${b}, 100%, 50%, 0.3)`),S.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.fillStyle=S,this.ctx.fillRect(0,0,i,s)}this.ctx.globalCompositeOperation="source-over"}const w=(_,S,b,C,T)=>{const L=5+Math.sin(this.time*4)*3,R=t[b]||"#00ffff";for(let E=0;E<3;E++){const I=L*(2+E),k=.3-E*.1;this.ctx.globalAlpha=k,this.ctx.strokeStyle=R,this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.arc(_,S,I,this.time*(1+E*.5),this.time*(1+E*.5)+Math.PI*1.5),this.ctx.stroke()}const F=this.ctx.createRadialGradient(_,S,0,_,S,L*4);if(F.addColorStop(0,this.addAlpha(R,.9)),F.addColorStop(.5,this.addAlpha(R,.5)),F.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.globalAlpha=.9,this.ctx.fillStyle=F,this.ctx.beginPath(),this.ctx.arc(_,S,L*4,0,Math.PI*2),this.ctx.fill(),this.ctx.globalAlpha=1,this.ctx.fillStyle="white",this.ctx.shadowBlur=15,this.ctx.shadowColor=R,this.ctx.beginPath(),this.ctx.arc(_,S,L,0,Math.PI*2),this.ctx.fill(),this.ctx.shadowBlur=0,this.clapAccumulation>.5){const E=this.clapAccumulation/10;for(let I=0;I<5;I++){const k=(this.time*3+I*.5)%2,U=20+k*100+this.clapAccumulation*20,B=(1-k/2)*E;this.ctx.globalAlpha=B*.5,this.ctx.strokeStyle=t[I%t.length]||"#00ffff",this.ctx.lineWidth=3,this.ctx.beginPath(),this.ctx.arc(_,S,U,0,Math.PI*2),this.ctx.stroke()}for(let I=0;I<Math.floor(this.clapAccumulation*5);I++){const k=I/(this.clapAccumulation*5)*Math.PI*2,U=30+Math.sin(this.time*5+I)*20,B=_+Math.cos(k+this.time*2)*U,K=S+Math.sin(k+this.time*2)*U;this.ctx.globalAlpha=E*.7,this.ctx.fillStyle=t[I%t.length]||"#00ffff",this.ctx.beginPath(),this.ctx.arc(B,K,2,0,Math.PI*2),this.ctx.fill()}}if(C){this.ctx.globalAlpha=1,this.ctx.fillStyle="white",this.ctx.font="12px monospace",this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.shadowBlur=8,this.ctx.shadowColor="rgba(0, 0, 0, 0.8)";const E=`X:${Math.floor(_)} Y:${Math.floor(S)}`;this.ctx.fillText(E,_,S-8);const I=new Date,k=I.toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric"}),U=I.toLocaleTimeString("en-US",{hour12:!1}),B=`${k} - ${U}`;this.ctx.fillText(B,_,S+8),this.ctx.shadowBlur=0}};w(this.vanishingPoint.x,this.vanishingPoint.y,0,!!o),c&&w(this.vanishingPointRight.x,this.vanishingPointRight.y,1,!0)}spawnFractalBranch(){if(this.streams.length>30)return;const e=this.streams[Math.floor(Math.random()*Math.min(6,this.streams.length))],t=e.angle+(Math.random()-.5)*.8;this.streams.push({angle:t,speed:1.2,packets:[],branchLevel:(e.branchLevel||0)+1,parentAngle:e.angle})}drawHexagon(e,t,i){this.ctx.beginPath();for(let s=0;s<6;s++){const o=Math.PI/3*s,c=e+i*Math.cos(o),u=t+i*Math.sin(o);s===0?this.ctx.moveTo(c,u):this.ctx.lineTo(c,u)}this.ctx.closePath()}addAlpha(e,t){if(e.startsWith("#")){const i=parseInt(e.slice(1,3),16),s=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16);return`rgba(${i}, ${s}, ${o}, ${t})`}return e}}class Tb{constructor(e,t){D(this,"canvas");D(this,"ctx");D(this,"particles",[]);D(this,"config",{baseSize:1.5,gridSpacing:8,distortionRadius:200,distortionStrength:0,friction:.9,ease:.1});D(this,"faceData",[[60,100,1],[70,100,1],[50,110,1],[60,110,1],[70,110,1],[80,110,1],[40,120,1],[50,120,2],[60,120,1],[70,120,1],[80,120,2],[90,120,1],[40,130,2],[50,130,3],[60,130,1],[70,130,1],[80,130,3],[90,130,2],[30,140,2],[40,140,3],[50,140,4],[60,140,1],[70,140,1],[80,140,4],[90,140,3],[100,140,2],[20,150,2],[30,150,3],[40,150,3],[50,150,3],[60,150,1],[70,150,1],[80,150,3],[90,150,3],[100,150,3],[110,150,2],[30,160,2],[40,160,3],[50,160,2],[80,160,2],[90,160,3],[100,160,2],[40,170,2],[50,170,2],[80,170,2],[90,170,2],[40,180,1],[50,180,1],[80,180,1],[90,180,1],[40,190,1],[50,190,2],[80,190,2],[90,190,1],[50,200,2],[80,200,2],[50,210,1],[60,210,1],[70,210,1],[80,210,1],[50,220,1],[60,220,2],[70,220,2],[80,220,1],[60,230,3],[70,230,3],[60,240,4],[70,240,4],[60,250,3],[70,250,3],[60,260,2],[70,260,2]]);this.canvas=e,this.ctx=t,this.createParticles()}createParticles(){this.particles=[];const e=this.canvas.width/2,t=this.canvas.height/2,i=275,s=14,o=1.2,c=this.config.baseSize*o;for(let u=t-i;u<t+i;u+=s)for(let h=e-i;h<e+i;h+=s)Math.sqrt((h-e)**2+(u-t)**2)<i&&this.particles.push({originX:h,originY:u,x:h,y:u,vx:0,vy:0,intensity:o,size:c,currentSize:c})}render(e,t){var c,u;t[1]&&(t[1].toLowerCase()==="#ffffff"||t[1].toLowerCase()==="#fff")?this.ctx.fillStyle="#000000":this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);const s=e.left||e.right;if(s){const h=(((c=s.position)==null?void 0:c.x)||.5)*this.canvas.width,d=(((u=s.position)==null?void 0:u.y)||.5)*this.canvas.height;let p=0;const g=s.fingerCount||2;s.gesture==="pinch"||g===1?p=5:g===2?p=20:g>=5?p=50:p=15+(g-2)*10,this.config.distortionStrength+=(p-this.config.distortionStrength)*.1,this.particles.forEach(m=>{const y=h-m.x,v=d-m.y,w=Math.sqrt(y*y+v*v);if(w<this.config.distortionRadius){const b=(this.config.distortionRadius-w)/this.config.distortionRadius,C=Math.atan2(v,y),T=Math.cos(C)*b*this.config.distortionStrength,L=Math.sin(C)*b*this.config.distortionStrength;m.vx-=T,m.vy-=L,m.currentSize=m.size+b*4*Math.abs(this.config.distortionStrength/10)}else m.currentSize=m.size;const _=m.originX-m.x,S=m.originY-m.y;m.vx+=_*this.config.ease,m.vy+=S*this.config.ease,m.vx*=this.config.friction,m.vy*=this.config.friction,m.x+=m.vx,m.y+=m.vy})}else this.config.distortionStrength*=.9,this.particles.forEach(h=>{const d=h.originX-h.x,p=h.originY-h.y;h.vx+=d*this.config.ease,h.vy+=p*this.config.ease,h.vx*=this.config.friction,h.vy*=this.config.friction,h.x+=h.vx,h.y+=h.vy,h.currentSize=h.size});if(e.clapping){const h=this.canvas.width/2,d=this.canvas.height/2;this.particles.forEach(p=>{const g=p.x-h,m=p.y-d,y=Math.sqrt(g*g+m*m),v=30;p.vx+=g/(y+1)*v,p.vy+=m/(y+1)*v})}const o=t[0]||"#FFFFFF";this.particles.forEach(h=>{this.ctx.fillStyle=o,this.ctx.globalAlpha=.85;const d=Math.max(.5,h.currentSize);this.ctx.fillRect(h.x-d/2,h.y-d/2,d,d)}),this.ctx.globalAlpha=1}}const ln=class ln{constructor(e,t){D(this,"canvas");D(this,"ctx");D(this,"faceLandmarker",null);D(this,"isLoading",!0);D(this,"lastVideoTime",-1);D(this,"results");D(this,"video",null);D(this,"hasFailed",!1);D(this,"isLocalInitializing",!1);D(this,"drawingUtils",null);D(this,"initAttempts",0);D(this,"maxInitAttempts",60);D(this,"FACE_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,129],[129,49],[49,209],[131,29],[29,52],[52,131],[43,106],[106,204],[204,43],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[33,168],[168,8],[8,33],[228,117],[117,31],[31,228],[107,189],[189,55],[55,107],[126,217],[217,1],[1,126],[233,79],[79,218],[218,233],[35,154],[154,26],[26,35],[125,129],[129,49],[49,125],[52,131],[131,29],[29,52],[169,106],[106,43],[43,169],[6,74],[74,184],[184,6],[191,80],[80,183],[183,191],[43,106],[106,204],[204,43]]);this.canvas=e,this.ctx=t,console.log("👤 FaceRenderer initialized"),this.initializeMediaPipe()}async initializeMediaPipe(){if(!(this.isLocalInitializing||this.hasFailed)){this.isLocalInitializing=!0;try{if(this.initAttempts++,this.video=document.querySelector("video"),!this.video||!this.video.srcObject){this.isLocalInitializing=!1,this.initAttempts<this.maxInitAttempts?setTimeout(()=>this.initializeMediaPipe(),1e3):(console.error("❌ Max retry attempts reached."),this.hasFailed=!0,this.isLoading=!1);return}if(ln.isGlobalInitializing){console.log("⏳ Waiting for global init..."),this.isLocalInitializing=!1,setTimeout(()=>this.initializeMediaPipe(),500);return}if(!ln.filesetResolver){ln.isGlobalInitializing=!0,console.log("📦 Loading MediaPipe modules...");const t=await lx(()=>import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14"),[],import.meta.url);ln.faceLandmarkerClass=t.FaceLandmarker,ln.drawingUtilsClass=t.DrawingUtils,ln.filesetResolver=await t.FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm"),console.log("🔧 WASM initialized"),ln.isGlobalInitializing=!1}const e="https://raw.githubusercontent.com/NPC-88/3dfiles/9d9b1c903c6397d41d71ad993f114bbce9fe5db6/face_landmarker.task";if(!this.faceLandmarker)try{this.faceLandmarker=await ln.faceLandmarkerClass.createFromOptions(ln.filesetResolver,{baseOptions:{modelAssetPath:e,delegate:"GPU"},outputFaceBlendshapes:!1,outputFacialTransformationMatrixes:!1,runningMode:"VIDEO",numFaces:1}),console.log("✅ Face tracking initialized (GPU)")}catch{console.warn("GPU failed, trying CPU..."),this.faceLandmarker=await ln.faceLandmarkerClass.createFromOptions(ln.filesetResolver,{baseOptions:{modelAssetPath:e,delegate:"CPU"},outputFaceBlendshapes:!1,outputFacialTransformationMatrixes:!1,runningMode:"VIDEO",numFaces:1}),console.log("✅ Face tracking initialized (CPU)")}ln.drawingUtilsClass&&(this.drawingUtils=new ln.drawingUtilsClass(this.ctx)),this.isLoading=!1,this.isLocalInitializing=!1}catch(e){console.error("❌ Failed to initialize MediaPipe:",e),this.hasFailed=!0,this.isLoading=!1,this.isLocalInitializing=!1,ln.isGlobalInitializing=!1}}}render(e,t,i){if(this.hasFailed){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#ff4444",this.ctx.font="18px monospace",this.ctx.textAlign="center",this.ctx.fillText("Initialization Failed",this.canvas.width/2,this.canvas.height/2),this.ctx.font="14px monospace",this.ctx.fillStyle="#ff8888",this.ctx.fillText("Refresh the page to try again",this.canvas.width/2,this.canvas.height/2+30);return}if(this.isLoading){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#666666",this.ctx.font="20px monospace",this.ctx.textAlign="center",this.ctx.fillText("Initializing Face Model...",this.canvas.width/2,this.canvas.height/2),this.ctx.font="14px monospace",this.ctx.fillStyle="#888888",this.ctx.fillText("Press Q to enable camera if needed",this.canvas.width/2,this.canvas.height/2+30);return}if(!this.faceLandmarker||!this.video||!this.drawingUtils){if(!this.isLocalInitializing&&!this.hasFailed){const p=document.querySelector("video");p&&p.srcObject&&(console.log("📹 Video found during render, triggering init once..."),this.initializeMediaPipe())}this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#666666",this.ctx.font="18px monospace",this.ctx.textAlign="center",this.ctx.fillText("Waiting for camera...",this.canvas.width/2,this.canvas.height/2),this.ctx.font="14px monospace",this.ctx.fillStyle="#888888",this.ctx.fillText("Press Q to enable camera",this.canvas.width/2,this.canvas.height/2+30);return}const s=performance.now();if(this.lastVideoTime!==this.video.currentTime){this.lastVideoTime=this.video.currentTime;try{this.results=this.faceLandmarker.detectForVideo(this.video,s)}catch(p){console.error("Face detection error:",p)}}this.ctx.save(),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);const o=performance.now(),c=Math.abs(Math.sin(o*.002)),u=.1+.6*c,h=15*c,d=t[0]||"#00d2ff";if(this.results&&this.results.faceLandmarks&&this.results.faceLandmarks.length>0)for(const p of this.results.faceLandmarks)this.ctx.shadowColor=d,this.ctx.shadowBlur=h,this.drawingUtils.drawConnectors(p,ln.faceLandmarkerClass.FACE_LANDMARKS_TESSELATION,{color:`rgba(255, 255, 255, ${u})`,lineWidth:1}),this.ctx.shadowBlur=0;else this.ctx.fillStyle="#666666",this.ctx.font="16px monospace",this.ctx.textAlign="center",this.ctx.fillText("No Face Detected",this.canvas.width/2,this.canvas.height/2),this.ctx.font="12px monospace",this.ctx.fillStyle="#888888",this.ctx.fillText("Position your face in front of the camera",this.canvas.width/2,this.canvas.height/2+25);this.ctx.restore()}resize(e,t){}destroy(){this.faceLandmarker&&(this.faceLandmarker.close(),this.faceLandmarker=null),console.log("👤 FaceRenderer destroyed")}};D(ln,"filesetResolver",null),D(ln,"faceLandmarkerClass",null),D(ln,"drawingUtilsClass",null),D(ln,"isGlobalInitializing",!1);let dd=ln;function Yc(a,e){a.traverse(t=>{if(t instanceof hn||t instanceof xr||t instanceof Lx){t.geometry.dispose();const i=t.material;Array.isArray(i)?i.forEach(s=>s.dispose()):i.dispose()}}),a.clear(),e.dispose(),e.forceContextLoss()}class Cb{constructor(e,t){D(this,"canvas");D(this,"ctx");D(this,"threeCanvas");D(this,"scene");D(this,"camera");D(this,"renderer");D(this,"sphere");D(this,"particleMesh");D(this,"pointLight");D(this,"pointLight2");D(this,"originalPositions",[]);D(this,"time",0);D(this,"handX",.5);D(this,"handY",.5);D(this,"pinchDistance",1);D(this,"SPHERE_RADIUS",1.5);D(this,"DETAIL",4);D(this,"CHAOS_MULTIPLIER",1.5);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances of Three")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.initThreeJS(),console.log("🌐 MorphingSphereRenderer initialized with Three.js"),console.warn=i}initThreeJS(){this.scene=new rs,this.scene.fog=new Go(0,.05),this.camera=new An(75,this.canvas.width/this.canvas.height,.1,1e3),this.camera.position.set(0,0,5),this.camera.lookAt(0,0,0),this.renderer=new ss({canvas:this.threeCanvas,antialias:!0,alpha:!0}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=new Ox(4210752);this.scene.add(e),this.pointLight=new zc(65484,2,50),this.pointLight.position.set(5,5,5),this.scene.add(this.pointLight),this.pointLight2=new zc(3342591,2,50),this.pointLight2.position.set(-5,-5,5),this.scene.add(this.pointLight2);const t=new zd(this.SPHERE_RADIUS,this.DETAIL),i=t.attributes.position;for(let d=0;d<i.count;d++)this.originalPositions.push(new J(i.getX(d),i.getY(d),i.getZ(d)));const s=new Fx({color:1118481,wireframe:!0,emissive:3342591,emissiveIntensity:.5,roughness:.4,metalness:.8});this.sphere=new hn(t,s),this.scene.add(this.sphere);const o=new un,c=1e3,u=new Float32Array(c*3);for(let d=0;d<c*3;d++)u[d]=(Math.random()-.5)*20;o.setAttribute("position",new Sn(u,3));const h=new Jr({size:.02,color:16777215,transparent:!0,opacity:.5});this.particleMesh=new xr(o,h),this.scene.add(this.particleMesh)}noise(e,t,i){return Math.sin(e)*Math.cos(t)*Math.sin(i)}calculatePinch(e){if(!e||!e.landmarks)return 1;const t=e.landmarks[4],i=e.landmarks[8],s=Math.sqrt(Math.pow(t.x-i.x,2)+Math.pow(t.y-i.y,2));return Math.min(Math.max((s-.02)*5,0),1)}updateState(e){const t=e.left,i=e.right,s=this.calculatePinch(t),o=this.calculatePinch(i),u=Math.min(s,o);this.pinchDistance+=(u-this.pinchDistance)*.1;let h=.5,d=.5;t&&t.position?(h=t.position.x,d=t.position.y):i&&i.position&&(h=i.position.x,d=i.position.y),this.handX+=(h-this.handX)*.1,this.handY+=(d-this.handY)*.1,!t&&!i&&(this.handX+=(.5-this.handX)*.05,this.handY+=(.5-this.handY)*.05,this.pinchDistance+=(1-this.pinchDistance)*.05)}render(e,t){this.time+=.02*ni(),this.updateState(e);const i=this.renderer.getPixelRatio(),s=Math.floor(this.canvas.width*i),o=Math.floor(this.canvas.height*i);(this.threeCanvas.width!==s||this.threeCanvas.height!==o)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=s,this.threeCanvas.height=o,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix()),this.renderer.clear();const c=(this.handX-.5)*4,u=(.5-this.handY)*3;this.sphere.position.x+=(c-this.sphere.position.x)*.15,this.sphere.position.y+=(u-this.sphere.position.y)*.15;const h=(this.handY-.5)*2,d=(this.handX-.5)*2;this.sphere.rotation.x+=(h-this.sphere.rotation.x)*.05,this.sphere.rotation.y+=(d-this.sphere.rotation.y)*.05,this.sphere.rotation.z+=.005;const p=this.sphere.geometry.attributes.position,g=(1-this.pinchDistance)*this.CHAOS_MULTIPLIER,m=Math.sin(this.time)*.1;for(let v=0;v<p.count;v++){const w=this.originalPositions[v],_=this.noise(w.x*2+this.time,w.y*2+this.time,w.z*2),S=1+m+_*g;p.setXYZ(v,w.x*S,w.y*S,w.z*S)}p.needsUpdate=!0;const y=this.sphere.material;if(t&&t.length>0)try{const v=new Ye(t[0]),w=new Ye(t[0]);y.color=v,y.emissive=w.multiplyScalar(.3+g*.4);const _=new Ye(t[0]),S=t.length>1?new Ye(t[1]):new Ye(t[0]);this.pointLight.color=_,this.pointLight2.color=S}catch{y.color.setHex(65484),y.emissive.setHex(13107),this.pointLight.color.setHex(65484),this.pointLight2.color.setHex(3342591)}else y.color.setHex(65484),y.emissive.setHex(13107),this.pointLight.color.setHex(65484),this.pointLight2.color.setHex(3342591);this.pointLight.position.x=(this.handX-.5)*10,this.pointLight.position.y=(.5-this.handY)*10,this.particleMesh.rotation.y=-this.time*.1,this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){Yc(this.scene,this.renderer)}}class Ab{constructor(e,t){D(this,"canvas");D(this,"ctx");D(this,"threeCanvas");D(this,"scene");D(this,"camera");D(this,"renderer");D(this,"instancedMesh");D(this,"gridWidth");D(this,"gridHeight");D(this,"cubePositions",[]);D(this,"time",0);D(this,"hands",[]);D(this,"speedMultiplier",1);D(this,"handsTogetherBoost",1);D(this,"currentFingerMode","slow");D(this,"GRID_WIDTH",120);D(this,"GRID_HEIGHT",90);D(this,"SPACING",.12);D(this,"WAVE_AMPLITUDE",2.5);D(this,"CUBE_SIZE",.03);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances of Three")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.gridWidth=this.GRID_WIDTH,this.gridHeight=this.GRID_HEIGHT,this.initThreeJS(),console.log("🧊 CubeWallRenderer initialized with Three.js"),console.warn=i}initThreeJS(){this.scene=new rs,this.scene.background=new Ye(0),this.camera=new An(60,this.canvas.width/this.canvas.height,.1,100),this.camera.position.set(0,0,4.5),this.camera.lookAt(0,0,0),this.renderer=new ss({canvas:this.threeCanvas,antialias:!0,alpha:!1}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=new Ox(2105376,.3);this.scene.add(e);const t=new of(16777215,.8);t.position.set(3,5,8),this.scene.add(t);const i=new of(4474111,.4);i.position.set(-5,-3,5),this.scene.add(i);const s=new zc(65484,.6,50);s.position.set(5,5,5),this.scene.add(s);const o=new Na(this.CUBE_SIZE,this.CUBE_SIZE,this.CUBE_SIZE),c=new Fx({color:65535,emissive:8738,emissiveIntensity:.2,metalness:.6,roughness:.4,flatShading:!0}),u=this.gridWidth*this.gridHeight;this.instancedMesh=new aS(o,c,u),this.scene.add(this.instancedMesh);const h=new vn;let d=0;for(let p=0;p<this.gridHeight;p++)for(let g=0;g<this.gridWidth;g++){const m=(g-this.gridWidth/2)*this.SPACING,y=(p-this.gridHeight/2)*this.SPACING,v=0;this.cubePositions.push(new J(m,y,v)),h.position.set(m,y,v),h.updateMatrix(),this.instancedMesh.setMatrixAt(d,h.matrix),d++}this.instancedMesh.instanceMatrix.needsUpdate=!0}getFingerSpeedMultiplier(e){if(!e||!e.fingerCount)return 0;const t=e.fingerCount;return t<=1?.05:t===2?.3:t>=5?1.5:.3+(t-2)/3*1.2}updateHandData(e){this.hands=[];let t=1;if(e.left){const s=this.getFingerSpeedMultiplier(e.left);t=Math.max(t,s),this.hands.push({x:e.left.position.x,y:1-e.left.position.y,intensity:1,fingerCount:e.left.fingerCount||0})}if(e.right){const s=this.getFingerSpeedMultiplier(e.right);t=Math.max(t,s),this.hands.push({x:e.right.position.x,y:1-e.right.position.y,intensity:1,fingerCount:e.right.fingerCount||0})}this.speedMultiplier+=(t-this.speedMultiplier)*.1;const i=e.clapping||e.distanceBetweenHands&&e.distanceBetweenHands<.15?3:1;if(this.handsTogetherBoost+=(i-this.handsTogetherBoost)*.15,this.hands.length>0){const s=this.hands.reduce((o,c)=>o+c.fingerCount,0);s<=1?this.currentFingerMode="pinch":s>=5?this.currentFingerMode="fast":this.currentFingerMode="slow"}}calculateDisplacement(e,t){let i=0;const s=Math.sin(e*8+this.time)*Math.cos(t*8+this.time)*.05;i+=s;for(const o of this.hands){const c=(o.x-.5)*this.gridWidth*this.SPACING*.8,u=(o.y-.5)*this.gridHeight*this.SPACING*.8,h=e-c,d=t-u,p=Math.sqrt(h*h+d*d),g=Math.sin(p*6-this.time*4)/(p*.5+.5);i+=g*o.intensity*this.WAVE_AMPLITUDE}return i*=this.speedMultiplier*this.handsTogetherBoost,i}render(e,t){this.time+=.016*this.speedMultiplier*ni(),this.updateHandData(e);const i=this.renderer.getPixelRatio(),s=Math.floor(this.canvas.width*i),o=Math.floor(this.canvas.height*i);(this.threeCanvas.width!==s||this.threeCanvas.height!==o)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=s,this.threeCanvas.height=o,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix());const c=new vn;let u=0,h=.5,d=.2;this.currentFingerMode==="pinch"?(h=.02,d=.01):this.currentFingerMode==="slow"?(h=.5,d=.25):this.currentFingerMode==="fast"&&(h=.9,d=.4);for(let p=0;p<this.gridHeight;p++)for(let g=0;g<this.gridWidth;g++){const m=this.cubePositions[u],y=this.calculateDisplacement(m.x,m.y);c.position.set(m.x,m.y,m.z+y),c.rotation.x=y*h,c.rotation.y=y*h*.7,c.rotation.z=y*h*.4;const v=1+Math.abs(y)*d;c.scale.set(v,v,v),c.updateMatrix(),this.instancedMesh.setMatrixAt(u,c.matrix),u++}if(this.instancedMesh.instanceMatrix.needsUpdate=!0,t&&t.length>0)try{const p=this.instancedMesh.material,g=new Ye(t[0]);if(p.color=g,p.emissive=new Ye(t[0]).multiplyScalar(.3),t.length>1){const m=this.scene.children.find(v=>v instanceof of&&v.position.x<0),y=this.scene.children.find(v=>v instanceof zc);m&&(m.color=new Ye(t[1])),y&&(y.color=new Ye(t.length>2?t[2]:t[1]))}}catch{const g=this.instancedMesh.material;g.color.setHex(65535),g.emissive.setHex(13107)}this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){Yc(this.scene,this.renderer)}}const Rc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Wo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Rb=new Ua(-1,1,1,-1,0,1);class Pb extends un{constructor(){super(),this.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qt([0,2,0,0,2,0],2))}}const Lb=new Pb;class qx{constructor(e){this._mesh=new hn(Lb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Rb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ib extends Wo{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof cn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Oc.clone(e.uniforms),this.material=new cn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new qx(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Hg extends Wo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let c,u;this.inverse?(c=0,u=1):(c=1,u=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,c,4294967295),o.buffers.stencil.setClear(u),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class Nb extends Wo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Yx{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new lt);this._width=i.width,this._height=i.height,t=new ti(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:di}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ib(Rc),this.copyPass.material.blending=Ki,this.timer=new CS}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,o=this.passes.length;s<o;s++){const c=this.passes[s];if(c.enabled!==!1){if(c.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),c.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),c.needsSwap){if(i){const u=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(u.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(u.EQUAL,1,4294967295)}this.swapBuffers()}Hg!==void 0&&(c instanceof Hg?i=!0:c instanceof Nb&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class $x extends Wo{constructor(e,t,i=null,s=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ye}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let o,c;this.overrideMaterial!==null&&(c=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=c),e.autoClear=s}}const Ub={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ye(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Is extends Wo{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new lt(e.x,e.y):new lt(256,256),this.clearColor=new Ye(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);this.renderTargetBright=new ti(o,c,{type:di}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let p=0;p<this.nMips;p++){const g=new ti(o,c,{type:di});g.texture.name="UnrealBloomPass.h"+p,g.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(g);const m=new ti(o,c,{type:di});m.texture.name="UnrealBloomPass.v"+p,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),o=Math.round(o/2),c=Math.round(c/2)}const u=Ub;this.highPassUniforms=Oc.clone(u.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new cn({uniforms:this.highPassUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader}),this.separableBlurMaterials=[];const h=[6,10,14,18,22];o=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);for(let p=0;p<this.nMips;p++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(h[p])),this.separableBlurMaterials[p].uniforms.invSize.value=new lt(1/o,1/c),o=Math.round(o/2),c=Math.round(c/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new J(1,1,1),new J(1,1,1),new J(1,1,1),new J(1,1,1),new J(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Oc.clone(Rc.uniforms),this.blendMaterial=new cn({uniforms:this.copyUniforms,vertexShader:Rc.vertexShader,fragmentShader:Rc.fragmentShader,premultipliedAlpha:!0,blending:Ta,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ye,this._oldClearAlpha=1,this._basic=new Xc,this._fsQuad=new qx(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,s),this.renderTargetsVertical[o].setSize(i,s),this.separableBlurMaterials[o].uniforms.invSize.value=new lt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,o){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const c=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let u=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this._fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=u.texture,this.separableBlurMaterials[h].uniforms.direction.value=Is.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[h]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=Is.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[h]),e.clear(),this._fsQuad.render(e),u=this.renderTargetsVertical[h];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=c}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new cn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new lt(.5,.5)},direction:{value:new lt(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new cn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Is.BlurDirectionX=new lt(1,0);Is.BlurDirectionY=new lt(0,1);const Fb=/^[og]\s*(.+)?/,Db=/^mtllib /,kb=/^usemtl /,Ob=/^usemap /,Vg=/\s+/,Gg=new J,pf=new J,Wg=new J,Xg=new J,Si=new J,Mc=new Ye;function zb(){const a={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,o){const c=this._finalize(!1);c&&(c.inherited||c.groupCount<=0)&&this.materials.splice(c.index,1);const u={index:this.materials.length,name:s||"",mtllib:Array.isArray(o)&&o.length>0?o[o.length-1]:"",smooth:c!==void 0?c.smooth:this.smooth,groupStart:c!==void 0?c.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(h){const d={index:typeof h=="number"?h:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return d.clone=this.clone.bind(d),d}};return this.materials.push(u),u},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const o=this.currentMaterial();if(o&&o.groupEnd===-1&&(o.groupEnd=this.geometry.vertices.length/3,o.groupCount=o.groupEnd-o.groupStart,o.inherited=!1),s&&this.materials.length>1)for(let c=this.materials.length-1;c>=0;c--)this.materials[c].groupCount<=0&&this.materials.splice(c,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),o}},i&&i.name&&typeof i.clone=="function"){const s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const s=this.vertices,o=this.object.geometry.vertices;o.push(s[e+0],s[e+1],s[e+2]),o.push(s[t+0],s[t+1],s[t+2]),o.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const s=this.normals,o=this.object.geometry.normals;o.push(s[e+0],s[e+1],s[e+2]),o.push(s[t+0],s[t+1],s[t+2]),o.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(e,t,i){const s=this.vertices,o=this.object.geometry.normals;Gg.fromArray(s,e),pf.fromArray(s,t),Wg.fromArray(s,i),Si.subVectors(Wg,pf),Xg.subVectors(Gg,pf),Si.cross(Xg),Si.normalize(),o.push(Si.x,Si.y,Si.z),o.push(Si.x,Si.y,Si.z),o.push(Si.x,Si.y,Si.z)},addColor:function(e,t,i){const s=this.colors,o=this.object.geometry.colors;s[e]!==void 0&&o.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&o.push(s[t+0],s[t+1],s[t+2]),s[i]!==void 0&&o.push(s[i+0],s[i+1],s[i+2])},addUV:function(e,t,i){const s=this.uvs,o=this.object.geometry.uvs;o.push(s[e+0],s[e+1]),o.push(s[t+0],s[t+1]),o.push(s[i+0],s[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,s,o,c,u,h,d){const p=this.vertices.length;let g=this.parseVertexIndex(e,p),m=this.parseVertexIndex(t,p),y=this.parseVertexIndex(i,p);if(this.addVertex(g,m,y),this.addColor(g,m,y),u!==void 0&&u!==""){const v=this.normals.length;g=this.parseNormalIndex(u,v),m=this.parseNormalIndex(h,v),y=this.parseNormalIndex(d,v),this.addNormal(g,m,y)}else this.addFaceNormal(g,m,y);if(s!==void 0&&s!==""){const v=this.uvs.length;g=this.parseUVIndex(s,v),m=this.parseUVIndex(o,v),y=this.parseUVIndex(c,v),this.addUV(g,m,y),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,s=e.length;i<s;i++){const o=this.parseVertexIndex(e[i],t);this.addVertexPoint(o),this.addColor(o)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,s=this.uvs.length;for(let o=0,c=e.length;o<c;o++)this.addVertexLine(this.parseVertexIndex(e[o],i));for(let o=0,c=t.length;o<c;o++)this.addUVLine(this.parseUVIndex(t[o],s))}};return a.startObject("",!1),a}class Bb extends Hd{constructor(e){super(e),this.materials=null}load(e,t,i,s){const o=this,c=new MS(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{t(o.parse(u))}catch(h){s?s(h):console.error(h),o.manager.itemError(e)}},i,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new zb;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let s=[];for(let u=0,h=i.length;u<h;u++){const d=i[u].trimStart();if(d.length===0)continue;const p=d.charAt(0);if(p!=="#")if(p==="v"){const g=d.split(Vg);switch(g[0]){case"v":t.vertices.push(parseFloat(g[1]),parseFloat(g[2]),parseFloat(g[3])),g.length>=7?(Mc.setRGB(parseFloat(g[4]),parseFloat(g[5]),parseFloat(g[6]),ui),t.colors.push(Mc.r,Mc.g,Mc.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(g[1]),parseFloat(g[2]),parseFloat(g[3]));break;case"vt":t.uvs.push(parseFloat(g[1]),parseFloat(g[2]));break}}else if(p==="f"){const m=d.slice(1).trim().split(Vg),y=[];for(let w=0,_=m.length;w<_;w++){const S=m[w];if(S.length>0){const b=S.split("/");y.push(b)}}const v=y[0];for(let w=1,_=y.length-1;w<_;w++){const S=y[w],b=y[w+1];t.addFace(v[0],S[0],b[0],v[1],S[1],b[1],v[2],S[2],b[2])}}else if(p==="l"){const g=d.substring(1).trim().split(" ");let m=[];const y=[];if(d.indexOf("/")===-1)m=g;else for(let v=0,w=g.length;v<w;v++){const _=g[v].split("/");_[0]!==""&&m.push(_[0]),_[1]!==""&&y.push(_[1])}t.addLineGeometry(m,y)}else if(p==="p"){const m=d.slice(1).trim().split(" ");t.addPointGeometry(m)}else if((s=Fb.exec(d))!==null){const g=(" "+s[0].slice(1).trim()).slice(1);t.startObject(g)}else if(kb.test(d))t.object.startMaterial(d.substring(7).trim(),t.materialLibraries);else if(Db.test(d))t.materialLibraries.push(d.substring(7).trim());else if(Ob.test(d))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(p==="s"){if(s=d.split(" "),s.length>1){const m=s[1].trim().toLowerCase();t.object.smooth=m!=="0"&&m!=="off"}else t.object.smooth=!0;const g=t.object.currentMaterial();g&&(g.smooth=t.object.smooth)}else{if(d==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+d+'"')}}t.finalize();const o=new Ma;if(o.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let u=0,h=t.objects.length;u<h;u++){const d=t.objects[u],p=d.geometry,g=d.materials,m=p.type==="Line",y=p.type==="Points";let v=!1;if(p.vertices.length===0)continue;const w=new un;w.setAttribute("position",new Qt(p.vertices,3)),p.normals.length>0&&w.setAttribute("normal",new Qt(p.normals,3)),p.colors.length>0&&(v=!0,w.setAttribute("color",new Qt(p.colors,3))),p.hasUVIndices===!0&&w.setAttribute("uv",new Qt(p.uvs,2));const _=[];for(let b=0,C=g.length;b<C;b++){const T=g[b],L=T.name+"_"+T.smooth+"_"+v;let R=t.materials[L];if(this.materials!==null){if(R=this.materials.create(T.name),m&&R&&!(R instanceof Fo)){const F=new Fo;Oi.prototype.copy.call(F,R),F.color.copy(R.color),R=F}else if(y&&R&&!(R instanceof Jr)){const F=new Jr({size:10,sizeAttenuation:!1});Oi.prototype.copy.call(F,R),F.color.copy(R.color),F.map=R.map,R=F}}R===void 0&&(m?R=new Fo:y?R=new Jr({size:1,sizeAttenuation:!1}):R=new gS,R.name=T.name,R.flatShading=!T.smooth,R.vertexColors=v,t.materials[L]=R),_.push(R)}let S;if(_.length>1){for(let b=0,C=g.length;b<C;b++){const T=g[b];w.addGroup(T.groupStart,T.groupCount,b)}m?S=new cd(w,_):y?S=new xr(w,_):S=new hn(w,_)}else m?S=new cd(w,_[0]):y?S=new xr(w,_[0]):S=new hn(w,_[0]);S.name=d.name,o.add(S)}else if(t.vertices.length>0){const u=new Jr({size:1,sizeAttenuation:!1}),h=new un;h.setAttribute("position",new Qt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(h.setAttribute("color",new Qt(t.colors,3)),u.vertexColors=!0);const d=new xr(h,u);o.add(d)}return o}}const Ui=class Ui{constructor(e,t){D(this,"canvas");D(this,"ctx");D(this,"threeCanvas");D(this,"scene");D(this,"camera");D(this,"renderer");D(this,"composer");D(this,"handGroup",null);D(this,"backgroundParticles",null);D(this,"pinchStrength",0);D(this,"baseScale",1);D(this,"currentModel","torus");D(this,"disposed",!1);D(this,"uniforms",{uTime:{value:0},uPinch:{value:0},uColor:{value:new J(0,.53,1)}});D(this,"bgUniforms",{uTime:{value:0},uColor:{value:new J(.5,.7,1)}});this.canvas=e,this.ctx=t,this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.scene=new rs;const i=this.threeCanvas.width/this.threeCanvas.height;this.camera=new An(50,i,.1,100),this.camera.position.z=10,this.renderer=new ss({canvas:this.threeCanvas,alpha:!0,antialias:!0}),this.renderer.setSize(this.threeCanvas.width,this.threeCanvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const s=new $x(this.scene,this.camera),o=new Is(new lt(this.threeCanvas.width,this.threeCanvas.height),3,1,0);this.composer=new Yx(this.renderer),this.composer.addPass(s),this.composer.addPass(o),this.createBackgroundDust(),this.createTorusGeometry(),console.log("💨 SmokeHandRenderer initialized")}static loadHandGeometry(){return Ui.handGeometry||(Ui.handGeometry=new Promise((e,t)=>{new Bb().load(Ui.HAND_MODEL_URL,i=>{const s=[];i.traverse(c=>{c instanceof hn&&s.push(c)});const o=s[s.length-1];o!=null&&o.geometry?e(o.geometry):t(new Error("No mesh in the hand model"))},void 0,t)}),Ui.handGeometry.catch(()=>{Ui.handGeometry=null})),Ui.handGeometry}createBackgroundDust(){const t=new Float32Array(6e3),i=new Float32Array(2e3*3);for(let c=0;c<2e3;c++)t[c*3]=(Math.random()-.5)*40,t[c*3+1]=(Math.random()-.5)*30,t[c*3+2]=-5-Math.random()*20,i[c*3]=Math.random(),i[c*3+1]=Math.random(),i[c*3+2]=Math.random();const s=new un;s.setAttribute("position",new Sn(t,3)),s.setAttribute("aRandom",new Sn(i,3));const o=new cn({uniforms:this.bgUniforms,transparent:!0,depthWrite:!1,blending:Ta,vertexShader:`
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
      `});this.backgroundParticles=new xr(s,o),this.scene.add(this.backgroundParticles)}createTorusGeometry(){const e=new Bd(1.5,.45,900,150);this.createParticleSystem(e)}createParticleSystem(e){this.handGroup&&this.scene.remove(this.handGroup),this.handGroup=new Ma;const t=e.getAttribute("position").count,i=e.getAttribute("position").array,s=new Float32Array(t*3),o=new Float32Array(t*3);for(let d=0;d<t;d++)s[d*3]=i[d*3],s[d*3+1]=i[d*3+1],s[d*3+2]=i[d*3+2],o[d*3]=Math.random(),o[d*3+1]=Math.random(),o[d*3+2]=Math.random();const c=new un;c.setAttribute("position",new Sn(s,3)),c.setAttribute("aRandom",new Sn(o,3)),c.setAttribute("aOriginalPos",new Sn(i,3));const u=new cn({uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:Ta,vertexShader:`
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
      `}),h=new xr(c,u);if(h.geometry.computeBoundingSphere(),h.geometry.boundingSphere){const d=h.geometry.boundingSphere.center;h.position.sub(d);const p=h.geometry.boundingSphere.radius;this.baseScale=2.5/p,this.handGroup.scale.set(this.baseScale,this.baseScale,this.baseScale)}this.handGroup.add(h),this.scene.add(this.handGroup)}render(e,t,i){const s=performance.now()*.001;this.uniforms.uTime.value=s,this.bgUniforms.uTime.value=s;const o=new Ye(t[0]||"#0088ff");this.uniforms.uColor.value.set(o.r,o.g,o.b);const c=new Ye(t[1]||t[0]||"#5588ff");this.bgUniforms.uColor.value.set(c.r*.5,c.g*.7,c.b);let u=0;if(e.right&&e.right.gesture==="open"&&e.right.landmarks){const h=e.right.landmarks,d=h[8],p=h[4],g=d.x*2-1,m=-(d.y*2-1),y=new J(g,m,.5);y.unproject(this.camera);const v=y.sub(this.camera.position).normalize(),w=(0-this.camera.position.z)/v.z,_=this.camera.position.clone().add(v.multiplyScalar(w));this.handGroup&&(this.handGroup.position.lerp(_,.15),this.handGroup.rotation.y=g*.8,this.handGroup.rotation.x=-m*.8);const S=d.x-p.x,b=d.y-p.y,C=Math.sqrt(S*S+b*b);u=Yr.mapLinear(C,.02,.15,0,1),u=Yr.clamp(u,0,1)}else if(e.left&&e.left.gesture==="open"&&e.left.landmarks){const h=e.left.landmarks,d=h[8],p=h[4],g=d.x*2-1,m=-(d.y*2-1),y=new J(g,m,.5);y.unproject(this.camera);const v=y.sub(this.camera.position).normalize(),w=(0-this.camera.position.z)/v.z,_=this.camera.position.clone().add(v.multiplyScalar(w));this.handGroup&&(this.handGroup.position.lerp(_,.15),this.handGroup.rotation.y=g*.8,this.handGroup.rotation.x=-m*.8);const S=d.x-p.x,b=d.y-p.y,C=Math.sqrt(S*S+b*b);u=Yr.mapLinear(C,.02,.15,0,1),u=Yr.clamp(u,0,1)}else this.handGroup&&(this.handGroup.rotation.y+=.005,this.handGroup.rotation.z=Math.sin(s*.5)*.1,this.handGroup.position.lerp(new J(0,0,0),.05));if(this.pinchStrength=Yr.lerp(this.pinchStrength,u,.1),this.uniforms.uPinch.value=this.pinchStrength,this.handGroup){const h=this.baseScale*(1+this.pinchStrength*.5),d=this.handGroup.scale.x,p=Yr.lerp(d,h,.1);this.handGroup.scale.set(p,p,p)}this.composer.render(),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}resize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer.setSize(e,t),this.threeCanvas.width=e,this.threeCanvas.height=t}setSmokeHandModel(e){if(this.currentModel!==e){if(this.currentModel=e,e==="torus"){this.createTorusGeometry();return}this.createTorusGeometry(),Ui.loadHandGeometry().then(t=>{this.currentModel==="hand"&&!this.disposed&&this.createParticleSystem(t)},t=>{console.error("Hand model unavailable, staying on the torus:",t)})}}destroy(){this.disposed=!0,this.handGroup&&this.scene.remove(this.handGroup),this.backgroundParticles&&this.scene.remove(this.backgroundParticles),this.composer.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),console.log("💨 SmokeHandRenderer destroyed")}};D(Ui,"handGeometry",null),D(Ui,"HAND_MODEL_URL","https://raw.githubusercontent.com/NPC-88/3dfiles/195a81cd4607a3176f231766b5bd2dd4b4d216fb/16834_hand_v1_NEW.obj");let Bc=Ui;class Hb{constructor(e,t){D(this,"canvas");D(this,"ctx");D(this,"lines",[]);D(this,"gridSpacing",30);D(this,"lineLength",22);D(this,"isClapping",!1);D(this,"clappingIntensity",0);this.canvas=e,this.ctx=t,this.initializeGrid(),console.log("✅ ThickLineRenderer initialized")}initializeGrid(){this.lines=[];const e=Math.ceil(this.canvas.width/this.gridSpacing)+1,t=Math.ceil(this.canvas.height/this.gridSpacing)+1;for(let i=0;i<t;i++)for(let s=0;s<e;s++)this.lines.push({x:s*this.gridSpacing,y:i*this.gridSpacing,length:this.lineLength,currentAngle:0,targetAngle:0,spinVelocity:0})}render(e,t){t[1]&&(t[1].toLowerCase()==="#ffffff"||t[1].toLowerCase()==="#fff")?this.ctx.fillStyle="#000000":this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),(this.lines.length===0||this.lines[0].x>this.canvas.width||this.lines[0].y>this.canvas.height)&&this.initializeGrid();let s=.12,o=0;const c=[];e.left&&c.push(e.left),e.right&&c.push(e.right),c.forEach(h=>{let d=h.fingerCount||2;h.gesture==="pinch"&&(d=1),o=Math.max(o,d)}),o===1?s=.03:o>=4&&(s=.25),e.clapping?this.isClapping||(this.isClapping=!0,this.clappingIntensity=1):this.isClapping=!1,this.clappingIntensity>0&&(this.clappingIntensity*=.95,this.clappingIntensity<.01&&(this.clappingIntensity=0));const u=t[0]||"#ffffff";this.lines.forEach(h=>{if(c.length>0){let p=0,g=0,m=0;c.forEach(y=>{var L,R;const v=(((L=y.position)==null?void 0:L.x)||.5)*this.canvas.width,w=(((R=y.position)==null?void 0:R.y)||.5)*this.canvas.height,_=v-h.x,S=w-h.y,C=1/(1+Math.sqrt(_*_+S*S)*.005),T=Math.atan2(S,_);g+=Math.cos(T)*C,m+=Math.sin(T)*C,p+=C}),p>0&&(h.targetAngle=Math.atan2(m,g))}else h.targetAngle=0;if(this.clappingIntensity>0)h.spinVelocity+=this.clappingIntensity*.8,h.currentAngle+=h.spinVelocity,h.spinVelocity*=.9;else{let p=h.targetAngle-h.currentAngle;for(;p>Math.PI;)p-=Math.PI*2;for(;p<-Math.PI;)p+=Math.PI*2;h.currentAngle+=p*s,h.spinVelocity=0}let d=2;if(c.length>0){let p=1/0;c.forEach(v=>{var b,C;const w=(((b=v.position)==null?void 0:b.x)||.5)*this.canvas.width,_=(((C=v.position)==null?void 0:C.y)||.5)*this.canvas.height,S=Math.hypot(w-h.x,_-h.y);S<p&&(p=S)});const g=35,m=2,y=600;if(p<y){const v=Math.pow(1-p/y,3);d=m+(g-m)*v}}this.ctx.save(),this.ctx.translate(h.x,h.y),this.ctx.rotate(h.currentAngle),this.ctx.fillStyle=u,this.ctx.fillRect(-h.length/2,-d/2,h.length,d),this.ctx.restore()})}}class Vb{constructor(e,t){D(this,"canvas");D(this,"ctx");D(this,"elements",[]);D(this,"gridSpacing",20);D(this,"elementLength",12);D(this,"elementWidth",3);D(this,"time",0);D(this,"isClapping",!1);this.canvas=e,this.ctx=t,this.initializeField(),console.log("✅ FlowFieldRenderer initialized")}initializeField(){this.elements=[];const e=Math.ceil(this.canvas.width/this.gridSpacing)+1,t=Math.ceil(this.canvas.height/this.gridSpacing)+1;for(let i=0;i<t;i++)for(let s=0;s<e;s++)this.elements.push({x:s*this.gridSpacing,y:i*this.gridSpacing,angle:Math.random()*Math.PI*2,velocity:0,targetAngle:0})}noise(e,t,i){return Math.sin(e*.01+i)+Math.sin(t*.01+i)+Math.sin((e+t)*.01+i)}render(e,t,i){const s=.01+(i?i.mid*.05:0);this.time+=s*ni(),t[4]&&t[4]+"",e.clapping?this.ctx.fillStyle="#222222":this.ctx.fillStyle="#000510",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),(this.elements.length===0||this.elements[0].x>this.canvas.width)&&this.initializeField();const o=[];e.left&&o.push(e.left),e.right&&o.push(e.right);const c=i?i.bass:0,u=i?i.high:0,h=i?i.beat:!1,d=this.elementLength*(1+c*1.5),p=this.elementWidth*(1+c*.5);this.ctx.save(),this.elements.forEach((g,m)=>{let v=this.noise(g.x,g.y,this.time)*Math.PI,w=null;if(u>.2&&(v+=(Math.random()-.5)*u),o.length>0){let S=0,b=0,C="none";if(o.forEach(T=>{var K,ie;const L=(((K=T.position)==null?void 0:K.x)||.5)*this.canvas.width,R=(((ie=T.position)==null?void 0:ie.y)||.5)*this.canvas.height,F=L-g.x,E=R-g.y,I=Math.sqrt(F*F+E*E),k=Math.atan2(E,F),B=Math.max(0,1-I/800);if(B>b){b=B;const W=T.fingerCount??5;T.gesture==="pinch"?(S=k,C="pinch"):W<=2?(S=k+Math.PI/2,C="2fingers"):(S=k+Math.PI,C="5fingers")}}),b>.1){let T=S-v;for(;T>Math.PI;)T-=Math.PI*2;for(;T<-Math.PI;)T+=Math.PI*2;v+=T*(b*.95),b>.3&&(C==="pinch"?w=t[1]||"#ff00ff":C==="5fingers"?w=t[2]||"#00ffff":C==="2fingers"&&(w=t[0]||"#ffffff"))}}if(e.clapping||h){const S=this.canvas.width/2,b=this.canvas.height/2,C=g.x-S,T=g.y-b,L=Math.atan2(T,C),R=(e.clapping?.9:0)+(h?.4:0);if(R>0){let F=L-v;for(;F>Math.PI;)F-=Math.PI*2;for(;F<-Math.PI;)F+=Math.PI*2;v+=F*R,e.clapping&&(w="#ffffff")}}let _=v-g.angle;for(;_>Math.PI;)_-=Math.PI*2;for(;_<-Math.PI;)_+=Math.PI*2;g.angle+=_*.25,this.ctx.translate(g.x,g.y),this.ctx.rotate(g.angle),w?this.ctx.fillStyle=w:this.ctx.fillStyle=h&&Math.random()>.7?"#ffffff":t[0]||"#ffffff",this.ctx.fillRect(-d/2,-p/2,d,p),this.ctx.rotate(-g.angle),this.ctx.translate(-g.x,-g.y)}),this.ctx.restore()}}class Gb{constructor(e,t){D(this,"canvas");D(this,"ctx");D(this,"threeCanvas");D(this,"scene");D(this,"camera");D(this,"renderer");D(this,"material");D(this,"time",0);D(this,"hand1",new lt(.5,.5));D(this,"hand2",new lt(.5,.5));D(this,"h1Radius",.3);D(this,"h1Strength",0);D(this,"h2Radius",.3);D(this,"h2Strength",0);D(this,"vertexShader",`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `);D(this,"fragmentShader",`
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
  `);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.initThreeJS(),console.log("💧 LiquidChromeRenderer initialized"),console.warn=i}initThreeJS(){this.scene=new rs,this.camera=new Ua(-1,1,1,-1,0,1),this.renderer=new ss({canvas:this.threeCanvas,antialias:!1,alpha:!0}),this.renderer.setSize(this.canvas.width,this.canvas.height);const e=new yr(2,2);this.material=new cn({vertexShader:this.vertexShader,fragmentShader:this.fragmentShader,uniforms:{uTime:{value:0},uResolution:{value:new lt(this.canvas.width,this.canvas.height)},uHand1Pos:{value:new lt(.5,.5)},uHand1Radius:{value:.3},uHand1Strength:{value:0},uHand2Pos:{value:new lt(.5,.5)},uHand2Radius:{value:.3},uHand2Strength:{value:0},uColor1:{value:new Ye(6514417)},uColor2:{value:new Ye(9133302)},uColor3:{value:new Ye(14239471)}}});const t=new hn(e,this.material);this.scene.add(t)}getHandParams(e){return e?e.gesture==="pinch"?{radius:.15,strength:2.5}:(e.fingerCount!==void 0?e.fingerCount:5)<=2?{radius:.3,strength:1.5}:{radius:.6,strength:1}:{radius:.3,strength:0}}render(e,t){this.time+=.01*ni(),(this.threeCanvas.width!==this.canvas.width||this.threeCanvas.height!==this.canvas.height)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=this.canvas.width,this.threeCanvas.height=this.canvas.height,this.material.uniforms.uResolution.value.set(this.canvas.width,this.canvas.height)),this.material.uniforms.uTime.value=this.time;const i=this.canvas.width/this.canvas.height;if(e.clapping){const o=3+Math.sin(this.time*20)*.5;this.h1Radius+=(1.5-this.h1Radius)*.1,this.h1Strength+=(o-this.h1Strength)*.1,this.h2Radius+=(1.5-this.h2Radius)*.1,this.h2Strength+=(o-this.h2Strength)*.1}else{if(e.left){const s=this.getHandParams(e.left);this.h1Radius+=(s.radius-this.h1Radius)*.1,this.h1Strength+=(s.strength-this.h1Strength)*.1;const o=e.left.position.x*i*.8,c=(1-e.left.position.y)*.8;this.material.uniforms.uHand1Pos.value.set(o,c)}else this.h1Strength*=.9;if(e.right){const s=this.getHandParams(e.right);this.h2Radius+=(s.radius-this.h2Radius)*.1,this.h2Strength+=(s.strength-this.h2Strength)*.1;const o=e.right.position.x*i*.8,c=(1-e.right.position.y)*.8;this.material.uniforms.uHand2Pos.value.set(o,c)}else this.h2Strength*=.9}this.material.uniforms.uHand1Radius.value=this.h1Radius,this.material.uniforms.uHand1Strength.value=this.h1Strength,this.material.uniforms.uHand2Radius.value=this.h2Radius,this.material.uniforms.uHand2Strength.value=this.h2Strength,t&&t.length>=3&&(this.material.uniforms.uColor1.value.set(t[0]),this.material.uniforms.uColor2.value.set(t[1]),this.material.uniforms.uColor3.value.set(t[2])),this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0)}destroy(){this.renderer.dispose(),this.renderer.forceContextLoss(),this.material.dispose()}}class Wb{constructor(e,t){D(this,"canvas");D(this,"ctx");D(this,"rectangles",[]);D(this,"baseWidth",1920);D(this,"baseHeight",1080);D(this,"gridStructure",[]);this.canvas=e,this.ctx=t,this.createVariedLayout()}createVariedLayout(){[{x:0,y:0,w:480,h:360},{x:480,y:0,w:320,h:180},{x:800,y:0,w:320,h:180},{x:1120,y:0,w:400,h:180},{x:1520,y:0,w:400,h:180},{x:480,y:180,w:240,h:180},{x:720,y:180,w:240,h:180},{x:960,y:180,w:160,h:180},{x:1120,y:180,w:240,h:180},{x:1360,y:180,w:280,h:180},{x:1640,y:180,w:280,h:180},{x:0,y:360,w:120,h:360},{x:120,y:360,w:120,h:360},{x:240,y:360,w:120,h:360},{x:360,y:360,w:120,h:360},{x:480,y:360,w:320,h:360},{x:800,y:360,w:320,h:360},{x:1120,y:360,w:200,h:180},{x:1320,y:360,w:200,h:180},{x:1520,y:360,w:200,h:180},{x:1720,y:360,w:200,h:180},{x:1120,y:540,w:160,h:180},{x:1280,y:540,w:160,h:180},{x:1440,y:540,w:240,h:180},{x:1680,y:540,w:240,h:180},{x:0,y:720,w:160,h:360},{x:160,y:720,w:160,h:360},{x:320,y:720,w:160,h:360},{x:480,y:720,w:240,h:360},{x:720,y:720,w:240,h:360},{x:960,y:720,w:160,h:360},{x:1120,y:720,w:400,h:360},{x:1520,y:720,w:400,h:360}].forEach((t,i)=>{let s;const o=i%3;o===0?s="vertical":o===1?s="horizontal":s="vertical-reverse",this.rectangles.push({id:i,baseX:t.x,baseY:t.y,baseW:t.w,baseH:t.h,currentX:t.x,currentY:t.y,currentW:t.w,currentH:t.h,gradientDirection:s}),this.gridStructure.push({x:t.x,y:t.y,w:t.w,h:t.h,targetW:t.w,targetH:t.h})})}render(e,t){const i=this.ctx.createLinearGradient(0,0,0,this.canvas.height);i.addColorStop(0,t[2]||"#d9d9d9"),i.addColorStop(1,t[0]||"#1a00ff"),this.ctx.fillStyle=i,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let s=.15;if(e.left||e.right){const u=[];e.left&&u.push(e.left),e.right&&u.push(e.right);let h=0;u.forEach(d=>{let p=d.fingerCount||2;d.gesture==="pinch"&&(p=1),h=Math.max(h,p)}),h===1?s=.02:h===2?s=.15:h===3?s=.25:h===4?s=.35:h>=5&&(s=.5),this.rectangles.forEach((d,p)=>{this.gridStructure[p].targetW=d.baseW,this.gridStructure[p].targetH=d.baseH}),u.forEach(d=>{var y,v;const p=(((y=d.position)==null?void 0:y.x)||.5)*this.baseWidth,g=(((v=d.position)==null?void 0:v.y)||.5)*this.baseHeight,m=d.velocity||0;this.rectangles.forEach((w,_)=>{const S=w.baseX+w.baseW/2,b=w.baseY+w.baseH/2,C=p-S,T=g-b,L=Math.sqrt(C*C+T*T),F=Math.max(0,1-L/700);if(F>.1){const E=Math.atan2(T,C),I=1+F*.6,k=Math.min(m*.5,.4),U=I+Math.abs(Math.cos(E))*k,B=I+Math.abs(Math.sin(E))*k;this.gridStructure[_].targetW=w.baseW*U,this.gridStructure[_].targetH=w.baseH*B}})})}else this.rectangles.forEach((u,h)=>{this.gridStructure[h].targetW=u.baseW,this.gridStructure[h].targetH=u.baseH});this.gridStructure.forEach((u,h)=>{u.w+=(u.targetW-u.w)*s,u.h+=(u.targetH-u.h)*s}),this.normalizeGridPerfectly(),this.rectangles.forEach((u,h)=>{u.currentX=this.gridStructure[h].x,u.currentY=this.gridStructure[h].y,u.currentW=this.gridStructure[h].w,u.currentH=this.gridStructure[h].h});const o=this.canvas.width/this.baseWidth,c=this.canvas.height/this.baseHeight;this.rectangles.forEach(u=>{this.drawRectangle(u,o,c,t)})}normalizeGridPerfectly(){const e=new Map;this.rectangles.forEach((c,u)=>{const h=Math.round(c.baseY/10)*10;e.has(h)||e.set(h,[]),e.get(h).push(u)});const t=Array.from(e.entries()).sort((c,u)=>c[0]-u[0]).map(c=>c[1]);t.forEach(c=>{c.sort((p,g)=>this.rectangles[p].baseX-this.rectangles[g].baseX);const u=c.reduce((p,g)=>p+this.gridStructure[g].w,0),h=this.baseWidth/u;c.forEach(p=>{this.gridStructure[p].w*=h});let d=0;c.forEach(p=>{this.gridStructure[p].x=d,d+=this.gridStructure[p].w})});let i=0;t.forEach(c=>{const u=Math.max(...c.map(h=>this.gridStructure[h].h));c.forEach(h=>{this.gridStructure[h].y=i,this.gridStructure[h].h=u}),i+=u});const s=i,o=this.baseHeight/s;i=0,t.forEach(c=>{const u=this.gridStructure[c[0]].h*o;c.forEach(h=>{this.gridStructure[h].y=i,this.gridStructure[h].h=u}),i+=u})}drawRectangle(e,t,i,s){this.ctx.save();const o=e.currentX*t,c=e.currentY*i,u=e.currentW*t,h=e.currentH*i;let d;e.gradientDirection==="vertical"?(d=this.ctx.createLinearGradient(o,c,o,c+h),d.addColorStop(0,s[2]||"#d9d9d9"),d.addColorStop(1,s[0]||"#1a00ff")):e.gradientDirection==="vertical-reverse"?(d=this.ctx.createLinearGradient(o,c,o,c+h),d.addColorStop(0,s[0]||"#1a00ff"),d.addColorStop(1,s[2]||"#d9d9d9")):(d=this.ctx.createLinearGradient(o,c,o+u,c),d.addColorStop(0,s[2]||"#d9d9d9"),d.addColorStop(1,s[0]||"#1a00ff")),this.ctx.fillStyle=d,this.ctx.fillRect(o,c,u,h),this.ctx.restore()}}class Xb{constructor(e,t){D(this,"canvas");D(this,"ctx");D(this,"threeCanvas");D(this,"scene");D(this,"camera");D(this,"renderer");D(this,"linesMesh");D(this,"pointsMesh");D(this,"gridPoints");D(this,"edges");D(this,"originalToSortedMap");D(this,"time",0);D(this,"interactionLevel",.5);D(this,"handX",.5);D(this,"handY",.5);D(this,"GRID_SIZE",10);D(this,"SPACING",1.5);D(this,"TOTAL_POINTS",1e3);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.initThreeJS(),console.log("🕸️ NetworkCubeRenderer initialized"),console.warn=i}initThreeJS(){this.scene=new rs,this.scene.fog=new Go(0,.06),this.camera=new An(75,this.canvas.width/this.canvas.height,.1,1e3),this.camera.position.z=20,this.renderer=new ss({canvas:this.threeCanvas,antialias:!0,alpha:!0}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=this.GRID_SIZE*this.GRID_SIZE*this.GRID_SIZE;this.gridPoints=new Float32Array(e*3);const t=[],i=(this.GRID_SIZE-1)*this.SPACING*.5,s=(v,w,_)=>v+w*this.GRID_SIZE+_*this.GRID_SIZE*this.GRID_SIZE;let o=0;for(let v=0;v<this.GRID_SIZE;v++)for(let w=0;w<this.GRID_SIZE;w++)for(let _=0;_<this.GRID_SIZE;_++){this.gridPoints[o++]=_*this.SPACING-i+(Math.random()-.5)*.3,this.gridPoints[o++]=w*this.SPACING-i+(Math.random()-.5)*.3,this.gridPoints[o++]=v*this.SPACING-i+(Math.random()-.5)*.3;const b=s(_,w,v);_<this.GRID_SIZE-1&&t.push(b,s(_+1,w,v)),w<this.GRID_SIZE-1&&t.push(b,s(_,w+1,v)),v<this.GRID_SIZE-1&&t.push(b,s(_,w,v+1)),Math.random()>.8&&_<this.GRID_SIZE-1&&w<this.GRID_SIZE-1&&t.push(b,s(_+1,w+1,v))}this.edges=new Int32Array(t);const c=new Int32Array(e);for(let v=0;v<e;v++)c[v]=v;for(let v=e-1;v>0;v--){const w=Math.floor(Math.random()*(v+1));[c[v],c[w]]=[c[w],c[v]]}const u=new Float32Array(e*3);this.originalToSortedMap=new Int32Array(e);for(let v=0;v<e;v++){const w=c[v];this.originalToSortedMap[w]=v,u[v*3]=this.gridPoints[w*3],u[v*3+1]=this.gridPoints[w*3+1],u[v*3+2]=this.gridPoints[w*3+2]}const h=new un;h.setAttribute("position",new Sn(u,3));const d=new Jr({color:16777215,size:.15,transparent:!0,opacity:.9,sizeAttenuation:!0});this.pointsMesh=new xr(h,d),this.scene.add(this.pointsMesh);const p=new un,g=this.edges.length*3,m=new Float32Array(g);p.setAttribute("position",new Sn(m,3));const y=new Fo({color:65535,transparent:!0,opacity:.2,blending:Ta});this.linesMesh=new cd(p,y),this.linesMesh.frustumCulled=!1,this.scene.add(this.linesMesh)}updateLogic(e,t){let i=0;const s=e.left||e.right;s?(this.handX+=(s.position.x-this.handX)*.1,this.handY+=(s.position.y-this.handY)*.1,e.clapping?i=1.2:s.gesture==="pinch"?i=.05:i=.2+(s.fingerCount||0)/5*.8):(this.handX+=(.5-this.handX)*.05,this.handY+=(.5-this.handY)*.05,i=.3+Math.sin(this.time*.5)*.1),this.interactionLevel+=(i-this.interactionLevel)*.08;const o=t?t.bass:0,c=t?t.high:0,u=Math.max(0,Math.min(1.5,this.interactionLevel+o*.3)),h=this.pointsMesh.geometry.attributes.position.count,d=50,p=Math.floor(d+u*(h-d));this.pointsMesh.geometry.setDrawRange(0,p);const g=this.linesMesh.geometry.attributes.position.array;let m=0;for(let S=0;S<this.edges.length;S+=2){const b=this.edges[S],C=this.edges[S+1],T=this.originalToSortedMap[b],L=this.originalToSortedMap[C];if(T<p&&L<p){const R=b*3,F=C*3;g[m++]=this.gridPoints[R],g[m++]=this.gridPoints[R+1],g[m++]=this.gridPoints[R+2],g[m++]=this.gridPoints[F],g[m++]=this.gridPoints[F+1],g[m++]=this.gridPoints[F+2]}}this.linesMesh.geometry.setDrawRange(0,m/3),this.linesMesh.geometry.attributes.position.needsUpdate=!0;const y=.6+u*.8;this.scene.rotation.y+=.002+u*.005;const v=(this.handY-.5)*1.5,w=(this.handX-.5)*1.5;this.scene.rotation.x+=(v-this.scene.rotation.x)*.1,this.scene.rotation.z+=(w-this.scene.rotation.z)*.1,this.pointsMesh.scale.setScalar(y),this.linesMesh.scale.setScalar(y);const _=this.pointsMesh.material;_.size=.15+c*.1}render(e,t,i){this.time+=.02*ni();const s=this.renderer.getPixelRatio(),o=Math.floor(this.canvas.width*s),c=Math.floor(this.canvas.height*s);(this.threeCanvas.width!==o||this.threeCanvas.height!==c)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=o,this.threeCanvas.height=c,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix()),this.updateLogic(e,i);const u=new Ye(t[0]||"#ffffff"),h=new Ye(t[1]||"#888888");this.pointsMesh.material.color.lerp(u,.1),this.linesMesh.material.color.lerp(h,.1),this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){Yc(this.scene,this.renderer)}}class jb{constructor(e,t){D(this,"canvas");D(this,"ctx");D(this,"threeCanvas");D(this,"scene");D(this,"camera");D(this,"renderer");D(this,"mesh");D(this,"points");D(this,"originalPositions");D(this,"currentPositions");D(this,"velocities");D(this,"time",0);D(this,"handX",.5);D(this,"handY",.5);D(this,"isHandPresent",!1);D(this,"pinchStrength",0);D(this,"ROWS",30);D(this,"COLS",30);D(this,"SIZE",12);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.initThreeJS(),console.log("🕸️ ElasticNetRenderer initialized"),console.warn=i}initThreeJS(){this.scene=new rs,this.scene.fog=new Go(0,.08),this.camera=new An(75,this.canvas.width/this.canvas.height,.1,1e3),this.camera.position.z=8,this.renderer=new ss({canvas:this.threeCanvas,antialias:!0,alpha:!0}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=new yr(this.SIZE,this.SIZE,this.COLS,this.ROWS),t=e.attributes.position,i=t.count;this.originalPositions=new Float32Array(i*3),this.currentPositions=new Float32Array(i*3),this.velocities=new Float32Array(i*3);for(let c=0;c<i*3;c++)this.originalPositions[c]=t.array[c],this.currentPositions[c]=t.array[c],this.velocities[c]=0;const s=new Xc({color:65535,wireframe:!0,transparent:!0,opacity:.3,side:Fi});this.mesh=new hn(e,s),this.scene.add(this.mesh);const o=new Jr({color:16777215,size:.15,transparent:!0,opacity:.8});this.points=new xr(e,o),this.scene.add(this.points)}updatePhysics(e,t){const i=this.mesh.geometry.attributes.position,s=i.count,o=t?t.bass:0,c=t?t.high:0,u=t?t.mid:0;let h=0,d=0,p=0;const g=e.left||e.right;g?(this.isHandPresent=!0,h=(g.position.x-.5)*12,d=-(g.position.y-.5)*10,g.gesture==="pinch"?(this.pinchStrength+=(1-this.pinchStrength)*.1,p=-25):(g.fingerCount||5)>=5?(this.pinchStrength+=(0-this.pinchStrength)*.1,p=15):(this.pinchStrength+=(0-this.pinchStrength)*.1,p=5)):(this.isHandPresent=!1,this.pinchStrength+=(0-this.pinchStrength)*.1);const m=c*.05;for(let y=0;y<s;y++){const v=y*3,w=y*3+1,_=y*3+2,S=this.originalPositions[v],b=this.originalPositions[w],C=this.originalPositions[_];let T=this.currentPositions[v],L=this.currentPositions[w],R=this.currentPositions[_];const F=.05+this.pinchStrength*.2,E=(S-T)*F,I=(b-L)*F,k=(C-R)*F;if(this.velocities[v]+=E,this.velocities[w]+=I,this.velocities[_]+=k,this.isHandPresent){const ee=T-h,V=L-d,G=R,$=ee*ee+V*V+G*G,X=Math.sqrt($),z=4+o*2;if(X<z){const Z=1-X/z,me=ee/X,Ae=V/X,Ee=G/X,Q=p*Z*.2;this.velocities[v]+=me*Q,this.velocities[w]+=Ae*Q,this.velocities[_]+=Ee*Q}}const U=this.time*(1+u),B=Math.sin(w*.1+U)*.02,K=Math.cos(v*.1+U)*.02,ie=Math.sin(v*.1+w*.1+U)*.02;this.velocities[v]+=B,this.velocities[w]+=K,this.velocities[_]+=ie,c>.1&&(this.velocities[v]+=(Math.random()-.5)*m,this.velocities[w]+=(Math.random()-.5)*m,this.velocities[_]+=(Math.random()-.5)*m);const W=.9-this.pinchStrength*.05;this.velocities[v]*=W,this.velocities[w]*=W,this.velocities[_]*=W,this.currentPositions[v]+=this.velocities[v],this.currentPositions[w]+=this.velocities[w],this.currentPositions[_]+=this.velocities[_],i.setXYZ(y,this.currentPositions[v],this.currentPositions[w],this.currentPositions[_])}i.needsUpdate=!0}render(e,t,i){this.time+=.01*ni();const s=this.renderer.getPixelRatio(),o=Math.floor(this.canvas.width*s),c=Math.floor(this.canvas.height*s);(this.threeCanvas.width!==o||this.threeCanvas.height!==c)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=o,this.threeCanvas.height=c,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix()),this.updatePhysics(e,i);const u=new Ye(t[0]||"#00ffff"),h=new Ye(t[1]||"#ff00ff"),d=this.mesh.material;d.color.lerp(u,.1),d.opacity=.2+((i==null?void 0:i.bass)||0)*.3;const p=this.points.material;p.color.lerp(h,.1),p.size=.1+((i==null?void 0:i.high)||0)*.2,this.camera.position.x=Math.sin(this.time*.2)*.5,this.camera.position.y=Math.cos(this.time*.2)*.5,this.camera.lookAt(0,0,0),this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){Yc(this.scene,this.renderer)}}const pd={chaos:{idle:.06,range:.45,openness:.6,velocity:.4,clap:.5,audio:.3,ease:.03},strips:{base:10,chaos:20,blocks:5,blocksChaos:15},speed:{base:.05,variation:.1,chaos:.35}};class qb{constructor(e,t){D(this,"canvas");D(this,"ctx");D(this,"threeCanvas");D(this,"scene");D(this,"camera");D(this,"renderer");D(this,"composer");D(this,"material");D(this,"plane");D(this,"chaosLevel",0);D(this,"cfg",pd);D(this,"uniforms",{uTime:{value:0},uColor1:{value:new J(.5,0,1)},uColor2:{value:new J(0,0,0)},uColor3:{value:new J(.8,.9,1)},uChaos:{value:0},uStrips:{value:10},uStripsChaos:{value:20},uBlocks:{value:5},uBlocksChaos:{value:15},uSpeedBase:{value:.05},uSpeedVar:{value:.1},uSpeedChaos:{value:.35},uAudioLow:{value:0},uAudioMid:{value:0},uAudioHigh:{value:0}});D(this,"geometry",new yr(20,12));this.canvas=e,this.ctx=t,this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.scene=new rs,this.camera=new An(75,e.width/e.height,.1,100),this.camera.position.z=2,this.renderer=new ss({canvas:this.threeCanvas,alpha:!0,antialias:!0}),this.renderer.setSize(e.width,e.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.material=new cn({uniforms:this.uniforms,vertexShader:`
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
      `,side:Fi});const i=new yr(20,12);this.plane=new hn(i,this.material),this.scene.add(this.plane);const s=new $x(this.scene,this.camera),o=new Is(new lt(e.width,e.height),1.5,.4,.85);this.composer=new Yx(this.renderer),this.composer.addPass(s),this.composer.addPass(o),console.log("📼 DigitalBlockRenderer initialized")}setParams(e){this.cfg=zi(pd,e)}render(e,t,i){(this.threeCanvas.width!==this.canvas.width||this.threeCanvas.height!==this.canvas.height)&&(this.threeCanvas.width=this.canvas.width,this.threeCanvas.height=this.canvas.height,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.canvas.width,this.canvas.height,!1),this.composer.setSize(this.canvas.width,this.canvas.height));const s=performance.now()*.001;this.uniforms.uTime.value=s;const o=i?i.bass:0,c=i?i.mid:0,u=i?i.high:0;this.uniforms.uAudioLow.value=Yr.lerp(this.uniforms.uAudioLow.value,o,.2),this.uniforms.uAudioMid.value=c,this.uniforms.uAudioHigh.value=u;const h=this.cfg.chaos,d=e.right??e.left;let p=h.idle;if(d){const y=d.fingerCount??(d.gesture==="open"?5:0),v=Math.min(1,Math.max(0,y/5)),w=Math.min(1,Math.max(0,d.velocity??0));p=h.idle+(v*h.openness+w*h.velocity)*h.range}else o>.6&&(p=h.idle+o*h.audio);e.clapping&&(p+=h.clap*(e.clapIntensity??1)),p=Math.min(h.range,p),this.chaosLevel=Yr.lerp(this.chaosLevel,p,h.ease),this.uniforms.uChaos.value=this.chaosLevel;const g=this.cfg.strips,m=this.cfg.speed;if(this.uniforms.uStrips.value=g.base,this.uniforms.uStripsChaos.value=g.chaos,this.uniforms.uBlocks.value=g.blocks,this.uniforms.uBlocksChaos.value=g.blocksChaos,this.uniforms.uSpeedBase.value=m.base,this.uniforms.uSpeedVar.value=m.variation,this.uniforms.uSpeedChaos.value=m.chaos,t&&t.length>=3){const y=new Ye(t[0]),v=new Ye(t[3]||"#000000"),w=new Ye(t[1]);this.uniforms.uColor1.value.lerp(new J(y.r,y.g,y.b),.1),this.uniforms.uColor2.value.lerp(new J(v.r,v.g,v.b),.1),this.uniforms.uColor3.value.lerp(new J(w.r,w.g,w.b),.1)}this.composer.render(),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){var e;this.composer.dispose(),(e=this.geometry)==null||e.dispose(),this.material.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),console.log("📼 DigitalBlockRenderer destroyed")}}const md={stamp:{radius:.075,strength:.55,fingerScale:.45,audioSwell:.5},field:{decay:.965,spread:1.6},refraction:{amount:.09,dispersion:.35},highlight:{amount:.9,sharpness:3.5,tint:.35},fallback:{fieldBrightness:.85}},Yb=`#version 300 es
out vec2 vUv;
void main() {
  // 0,0 / 2,0 / 0,2 — one oversized triangle, clipped to the viewport.
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,$b=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTex;
uniform vec2 uResolution;
uniform float uTime;
`;function jg(a,e,t){const i=a.createShader(e);if(!i)throw new Error("Could not create shader");if(a.shaderSource(i,t),a.compileShader(i),!a.getShaderParameter(i,a.COMPILE_STATUS)){const s=a.getShaderInfoLog(i);a.deleteShader(i);const o=t.split(`
`).map((c,u)=>`${String(u+1).padStart(3)} | ${c}`).join(`
`);throw new Error(`Shader failed to compile: ${s}
${o}`)}return i}function ci(a,e){const t=jg(a,a.VERTEX_SHADER,Yb),i=jg(a,a.FRAGMENT_SHADER,$b+e),s=a.createProgram();if(!s)throw new Error("Could not create program");if(a.attachShader(s,t),a.attachShader(s,i),a.linkProgram(s),a.deleteShader(t),a.deleteShader(i),!a.getProgramParameter(s,a.LINK_STATUS)){const o=a.getProgramInfoLog(s);throw a.deleteProgram(s),new Error(`Program failed to link: ${o}`)}return s}function $r(a,e,t){const i=a.createTexture();a.bindTexture(a.TEXTURE_2D,i),a.texImage2D(a.TEXTURE_2D,0,a.RGBA8,e,t,0,a.RGBA,a.UNSIGNED_BYTE,null),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);const s=a.createFramebuffer();return a.bindFramebuffer(a.FRAMEBUFFER,s),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,i,0),a.bindFramebuffer(a.FRAMEBUFFER,null),{framebuffer:s,texture:i,width:e,height:t}}function Kr(a,e,t,i){e.width===t&&e.height===i||(a.bindTexture(a.TEXTURE_2D,e.texture),a.texImage2D(a.TEXTURE_2D,0,a.RGBA8,t,i,0,a.RGBA,a.UNSIGNED_BYTE,null),e.width=t,e.height=i)}function Zr(a,e){a.deleteFramebuffer(e.framebuffer),a.deleteTexture(e.texture)}function zn(a,e,t,i){a.bindFramebuffer(a.FRAMEBUFFER,e?e.framebuffer:null),a.viewport(0,0,e?e.width:t,e?e.height:i),a.drawArrays(a.TRIANGLES,0,3)}function gn(a,e,t,i,s){a.activeTexture(a.TEXTURE0+s),a.bindTexture(a.TEXTURE_2D,i),a.uniform1i(a.getUniformLocation(e,t),s)}const Hc=10,Kb=`
uniform sampler2D uField;
uniform vec3 uStamps[${Hc}];   // x, y, radius
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
  for (int i = 0; i < ${Hc}; i++) {
    if (i >= uStampCount) break;
    vec3 stamp = uStamps[i];
    vec2 d = vUv - stamp.xy;
    d.x *= aspect;
    float falloff = 1.0 - smoothstep(0.0, stamp.z, length(d));
    h += falloff * falloff * uStrength;
  }

  fragColor = vec4(clamp(h, 0.0, 1.0), 0.0, 0.0, 1.0);
}`,Zb=`
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
}`;class Qb{constructor(e,t){D(this,"canvas");D(this,"ctx");D(this,"glCanvas");D(this,"gl");D(this,"cfg",md);D(this,"fieldProgram");D(this,"refractProgram");D(this,"fields");D(this,"ping",0);D(this,"videoTexture");D(this,"video",null);this.canvas=e,this.ctx=t,this.glCanvas=document.createElement("canvas"),this.glCanvas.width=e.width,this.glCanvas.height=e.height;const i=this.glCanvas.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1});if(!i)throw new Error("WebGL2 is not available");this.gl=i,this.fieldProgram=ci(i,Kb),this.refractProgram=ci(i,Zb),this.fields=[$r(i,e.width,e.height),$r(i,e.width,e.height)],this.videoTexture=i.createTexture(),i.bindTexture(i.TEXTURE_2D,this.videoTexture),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}setParams(e){this.cfg=zi(md,e)}setVideoElement(e){this.video=e}collectStamps(e,t){const i=1+((t==null?void 0:t.bass)??0)*this.cfg.stamp.audioSwell,s=this.cfg.stamp.radius*i,o=[];for(const c of[e.left,e.right]){if(!c||o.length/3>=Hc)continue;o.push(c.position.x,1-c.position.y,s);const u=c.landmarks;if(u&&this.cfg.stamp.fingerScale>0)for(const h of[8,12,16,20]){if(o.length/3>=Hc)break;const d=u[h];d&&o.push(d.x,1-d.y,s*this.cfg.stamp.fingerScale)}}return o}render(e,t,i){const s=this.gl,o=this.canvas.width,c=this.canvas.height;if(o===0||c===0)return;(this.glCanvas.width!==o||this.glCanvas.height!==c)&&(this.glCanvas.width=o,this.glCanvas.height=c,Kr(s,this.fields[0],o,c),Kr(s,this.fields[1],o,c));const u=this.fields[this.ping];this.ping^=1;const h=this.fields[this.ping],d=this.collectStamps(e,i),p=i!=null&&i.beat?1+(i.beatIntensity??0):1;s.useProgram(this.fieldProgram),s.uniform2f(s.getUniformLocation(this.fieldProgram,"uResolution"),o,c),gn(s,this.fieldProgram,"uField",u.texture,0),s.uniform1i(s.getUniformLocation(this.fieldProgram,"uStampCount"),d.length/3),d.length>0&&s.uniform3fv(s.getUniformLocation(this.fieldProgram,"uStamps"),d),s.uniform1f(s.getUniformLocation(this.fieldProgram,"uDecay"),this.cfg.field.decay),s.uniform1f(s.getUniformLocation(this.fieldProgram,"uSpread"),this.cfg.field.spread),s.uniform1f(s.getUniformLocation(this.fieldProgram,"uStrength"),this.cfg.stamp.strength*p),zn(s,h,o,c);const g=this.video&&this.video.readyState>=2&&this.video.videoWidth>0;g&&(s.bindTexture(s.TEXTURE_2D,this.videoTexture),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!0),s.texImage2D(s.TEXTURE_2D,0,s.RGBA,s.RGBA,s.UNSIGNED_BYTE,this.video));const m=Jb(t[0]??"#ffffff");s.useProgram(this.refractProgram),s.uniform2f(s.getUniformLocation(this.refractProgram,"uResolution"),o,c),gn(s,this.refractProgram,"uField",h.texture,0),gn(s,this.refractProgram,"uVideo",this.videoTexture,1),s.uniform1f(s.getUniformLocation(this.refractProgram,"uHasVideo"),g?1:0),s.uniform3f(s.getUniformLocation(this.refractProgram,"uColor"),m[0],m[1],m[2]),s.uniform1f(s.getUniformLocation(this.refractProgram,"uRefract"),this.cfg.refraction.amount),s.uniform1f(s.getUniformLocation(this.refractProgram,"uDispersion"),this.cfg.refraction.dispersion),s.uniform1f(s.getUniformLocation(this.refractProgram,"uGloss"),this.cfg.highlight.amount),s.uniform1f(s.getUniformLocation(this.refractProgram,"uSharpness"),this.cfg.highlight.sharpness),s.uniform1f(s.getUniformLocation(this.refractProgram,"uTint"),this.cfg.highlight.tint),s.uniform1f(s.getUniformLocation(this.refractProgram,"uFieldBrightness"),this.cfg.fallback.fieldBrightness),zn(s,null,o,c),this.ctx.clearRect(0,0,o,c),this.ctx.drawImage(this.glCanvas,0,0,o,c)}destroy(){var t;const e=this.gl;e.deleteProgram(this.fieldProgram),e.deleteProgram(this.refractProgram),e.deleteTexture(this.videoTexture),Zr(e,this.fields[0]),Zr(e,this.fields[1]),(t=e.getExtension("WEBGL_lose_context"))==null||t.loseContext()}}function Jb(a){const e=a.replace("#","");return e.length<6?[1,1,1]:[parseInt(e.slice(0,2),16)/255,parseInt(e.slice(2,4),16)/255,parseInt(e.slice(4,6),16)/255]}const gd={mode:0,type:{fit:.82,weight:700,tracking:.08,outline:0,strokeWidth:1.5},grid:{columns:14,rows:26,spread:1,breathe:0,breatheSpeed:.4},mask:{reach:.18,threshold:.5,softness:.25,invert:0},radial:{strength:.6,power:2,pulse:.5,pulseSpeed:.5},wave:{amplitude:.12,frequency:1.5,speed:1,scaleWave:0},depth:{speed:.35,spread:1.4,curve:1.6,size:.1,horizon:.12,steps:18},scatter:{amount:.6,spiral:0,stagger:.35,drift:.5,size:.12},color:{rainbow:0,step:37,cycleSpeed:.3},motion:{handInfluence:1},audio:{bassScale:.3,beatKick:.5},trail:{fadeAlpha:1}},qg="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",eT=1400;class Do{constructor(e,t){D(this,"canvas");D(this,"ctx");D(this,"cfg",gd);D(this,"text","N4TH");D(this,"aim",{x:.5,y:.5});D(this,"targets",[]);this.canvas=e,this.ctx=t}setParams(e){this.cfg=zi(gd,e)}setText(e){const t=e.trim()||"N4TH";t!==this.text&&(this.text=t,this.targets=[])}static noise(e){const t=Math.sin(e*12.9898)*43758.5453;return t-Math.floor(t)}colorFor(e,t,i){const{color:s}=this.cfg;return s.rainbow>=.5?`hsl(${(e*s.step+t*s.cycleSpeed*60)%360}, 100%, 62%)`:i[e%Math.max(1,i.length)]??"#ffffff"}stamp(e,t,i,s,o=1,c=this.text,u=this.cfg.type.tracking){const{ctx:h,cfg:d}=this;h.globalAlpha=Math.min(1,Math.max(0,o)),h.font=`${Math.round(d.type.weight)} ${Math.max(1,i)}px ${qg}`;try{h.letterSpacing=`${u}em`}catch{}d.type.outline>=.5?(h.strokeStyle=s,h.lineWidth=Math.max(.5,d.type.strokeWidth),h.strokeText(c,e,t)):(h.fillStyle=s,h.fillText(c,e,t)),h.globalAlpha=1}fitSize(e,t){const{ctx:i,cfg:s}=this;i.font=`${Math.round(s.type.weight)} 100px ${qg}`;try{i.letterSpacing=`${s.type.tracking}em`}catch{}const o=i.measureText(e).width;return o>0?t/o*100:10}handPoints(e){const t=[];for(const i of[e.left,e.right]){if(!i)continue;t.push(i.position);const s=i.landmarks;if(s)for(const o of[4,8,12,16,20]){const c=s[o];c&&t.push({x:c.x,y:c.y})}}return t}render(e,t,i){const{ctx:s,cfg:o}=this,c=this.canvas.width,u=this.canvas.height;if(c===0||u===0)return;s.globalCompositeOperation="source-over",s.fillStyle=o.trail.fadeAlpha>=1?"#000":`#000000${Jn(o.trail.fadeAlpha*255)}`,s.fillRect(0,0,c,u);const h=Gc(),d=(i==null?void 0:i.bass)??0,p=i!=null&&i.beat?o.audio.beatKick:0,g=this.handPoints(e);if(g.length>0){const y=g.reduce((w,_)=>w+_.x,0)/g.length,v=g.reduce((w,_)=>w+_.y,0)/g.length;this.aim.x+=(y-this.aim.x)*.08,this.aim.y+=(v-this.aim.y)*.08}const m=1+d*o.audio.bassScale;switch(s.textAlign="center",s.textBaseline="middle",s.lineJoin="round",Math.round(o.mode)){case 1:this.radial(c,u,m,h,p,t);break;case 2:this.wave(c,u,m,h,p,t);break;case 3:this.depth(c,u,m,h,p,t);break;case 4:this.scatter(c,u,m,h,p,t);break;default:this.mask(c,u,m,h,g,t);break}}spacing(e,t,i){const{cfg:s}=this,o=1+Math.sin(i*s.grid.breatheSpeed)*s.grid.breathe,c=Math.max(1,Math.round(s.grid.columns)),u=Math.max(1,Math.round(s.grid.rows)),h=s.grid.spread*o;return{cols:c,rows:Math.min(u,Math.max(1,Math.floor(eT/c))),dx:e/c*h,dy:t/u*h}}mask(e,t,i,s,o,c){const{cfg:u}=this,{cols:h,rows:d,dx:p,dy:g}=this.spacing(e,t,s),m=this.fitSize(this.text,p*u.type.fit)*i,y=Math.max(.01,u.mask.reach),v=e/t;let w=0;for(let _=0;_<d;_++)for(let S=0;S<h;S++,w++){const b=(S+.5)/h,C=(_+.5)/d;let T=0;for(const k of o){const U=(b-k.x)*v,B=C-k.y;T+=Math.exp(-((U*U+B*B)/(y*y)))}const L=u.mask.softness*.5,R=L<=0?T>u.mask.threshold?1:0:Math.min(1,Math.max(0,(T-(u.mask.threshold-L))/(L*2))),F=u.mask.invert>=.5?1-R:R;if(F<=.02)continue;const E=(S+.5)*p+(e-h*p)/2,I=(_+.5)*g+(t-d*g)/2;this.stamp(E,I,m,this.colorFor(w,s,c),F)}}radial(e,t,i,s,o,c){const{cfg:u}=this,{cols:h,rows:d,dx:p,dy:g}=this.spacing(e,t,s),m=this.fitSize(this.text,p*u.type.fit)*i,y=(u.radial.strength+o)*(1+Math.sin(s*u.radial.pulseSpeed)*u.radial.pulse),v=.5+(this.aim.x-.5)*u.motion.handInfluence,w=.5+(this.aim.y-.5)*u.motion.handInfluence;let _=0;for(let S=0;S<d;S++)for(let b=0;b<h;b++,_++){const C=(b+.5)/h,T=(S+.5)/d,L=C-v,R=T-w,F=Math.min(1,Math.hypot(L,R)*1.42),E=1+Math.pow(F,u.radial.power)*y,I=(v+L*E)*e,k=(w+R*E)*t;I<-p||I>e+p||k<-g||k>t+g||this.stamp(I,k,m,this.colorFor(_,s,c))}}wave(e,t,i,s,o,c){const{cfg:u}=this,{cols:h,rows:d,dx:p,dy:g}=this.spacing(e,t,s),m=this.fitSize(this.text,p*u.type.fit)*i,y=e*u.wave.amplitude*(1+o),v=(this.aim.y-.5)*2*u.motion.handInfluence;let w=0;for(let _=0;_<d;_++){const S=_/Math.max(1,d)*u.wave.frequency*Math.PI*2,b=Math.sin(S+s*u.wave.speed+v)*y,C=1+Math.sin(S+s*u.wave.speed)*u.wave.scaleWave;for(let T=0;T<h;T++,w++){const L=(T+.5)*p+(e-h*p)/2+b,R=(_+.5)*g+(t-d*g)/2,F=(L%e+e)%e;this.stamp(F,R,m*C,this.colorFor(w,s,c))}}}depth(e,t,i,s,o,c){const{cfg:u}=this,h=t*u.depth.size*i,d=Math.max(2,Math.round(u.depth.steps)),p=s*u.depth.speed,g=t*(u.depth.horizon+(this.aim.y-.5)*u.motion.handInfluence*.3);for(let m=0;m<d;m++){const y=((m/d+p)%1+1)%1,v=Math.pow(y,u.depth.curve),w=v*(1+o),_=g+v*(t-g)*1.1;_>t+h||w<=.001||this.stamp(e/2,_,Math.max(1,h*w),this.colorFor(m,s,c),Math.min(1,.25+v),this.text,u.type.tracking+v*u.depth.spread)}}scatter(e,t,i,s,o,c){const{cfg:u}=this,h=[...this.text];if(h.length===0)return;this.targets.length!==h.length&&(this.targets=h.map((y,v)=>({x:Do.noise(v*3.7+1),y:Do.noise(v*7.1+2),seed:Do.noise(v*11.3+3)})));const d=Math.max(2,t*u.scatter.size*i),p=Math.min(1,Math.max(0,u.scatter.amount+o+(this.aim.x-.5)*u.motion.handInfluence)),g=d*(.62+u.type.tracking),m=g*h.length;h.forEach((y,v)=>{const w=this.targets[v],_=v*u.scatter.stagger*.1,S=Math.min(1,Math.max(0,p-_)),b=e/2-m/2+g*(v+.5),C=t/2;let T,L;if(u.scatter.spiral>=.5){const R=v/h.length*Math.PI*6+s*u.scatter.drift,F=(.1+v/h.length*.4)*Math.min(e,t);T=e/2+Math.cos(R)*F,L=t/2+Math.sin(R)*F}else{const R=s*u.scatter.drift+w.seed*Math.PI*2;T=(.08+w.x*.84)*e+Math.cos(R)*e*.05,L=(.08+w.y*.84)*t+Math.sin(R)*t*.05}this.stamp(b+(T-b)*S,C+(L-C)*S,d,this.colorFor(v,s,c),1,y)})}}const xd={frame:{zoom:1,spreadZoom:.5,handDrift:.12,mirror:0},slice:{count:12,offset:.06,speed:.8,beatKick:1.5},look:{tint:0,gain:1},trail:{fadeAlpha:1}};class tT{constructor(e,t){D(this,"canvas");D(this,"ctx");D(this,"cfg",xd);D(this,"video",null);D(this,"url",null);D(this,"drift",{x:0,y:0});this.canvas=e,this.ctx=t}setParams(e){this.cfg=zi(xd,e)}setClipUrl(e){var i;if(e===this.url||(this.url=e,(i=this.video)==null||i.pause(),this.video=null,!e))return;const t=document.createElement("video");t.src=e,t.loop=!0,t.muted=!0,t.playsInline=!0,t.play().catch(()=>{}),this.video=t}destroy(){var e;(e=this.video)==null||e.pause(),this.video=null}render(e,t,i){const{ctx:s,cfg:o}=this,c=this.canvas.width,u=this.canvas.height;if(c===0||u===0)return;o.trail.fadeAlpha>=1?(s.globalCompositeOperation="source-over",s.fillStyle="#000",s.fillRect(0,0,c,u)):(s.fillStyle=`#000000${Jn(o.trail.fadeAlpha*255)}`,s.fillRect(0,0,c,u));const h=this.video;if(!(h&&h.readyState>=2&&h.videoWidth>0)){s.fillStyle=`${t[0]??"#ffffff"}66`,s.font="500 14px ui-monospace, monospace",s.textAlign="center",s.fillText(this.url?"LOADING CLIP…":"NO CLIP — UPLOAD ONE IN THE LIBRARY",c/2,u/2);return}const p=[e.left,e.right].filter(Boolean);let g=0,m=0;if(p.length>0){const E=p.reduce((k,U)=>k+U.position.x,0)/p.length,I=p.reduce((k,U)=>k+U.position.y,0)/p.length;g=(E-.5)*2,m=(I-.5)*2}this.drift.x+=(g-this.drift.x)*.1,this.drift.y+=(m-this.drift.y)*.1;const y=e.distanceBetweenHands??.4,v=Math.max(.05,o.frame.zoom*(1+(y-.4)*o.frame.spreadZoom)),w=Math.max(c/h.videoWidth,u/h.videoHeight),_=h.videoWidth*w*v,S=h.videoHeight*w*v,b=(c-_)/2+this.drift.x*c*o.frame.handDrift,C=(u-S)/2+this.drift.y*u*o.frame.handDrift,T=Gc(),L=i!=null&&i.beat?o.slice.beatKick:1,R=Math.max(1,Math.round(o.slice.count)),F=u/R;s.save(),o.frame.mirror>=.5&&(s.translate(c,0),s.scale(-1,1));for(let E=0;E<R;E++){const I=E/R*Math.PI*2,k=R<2?0:Math.sin(T*o.slice.speed+I)*c*o.slice.offset*L*(1+Math.abs(this.drift.x)),U=E*F;s.save(),s.beginPath(),s.rect(0,U,c,F+1),s.clip(),s.drawImage(h,b+k,C,_,S),s.restore()}s.restore(),o.look.tint>0&&(s.globalCompositeOperation="overlay",s.fillStyle=`${t[0]??"#ffffff"}${Jn(o.look.tint*255)}`,s.fillRect(0,0,c,u),s.globalCompositeOperation="source-over"),o.look.gain>1&&(s.globalCompositeOperation="lighter",s.globalAlpha=Math.min(1,o.look.gain-1),s.drawImage(this.canvas,0,0),s.globalAlpha=1,s.globalCompositeOperation="source-over")}}const vd={mode:0,grid:{columns:48,cellAspect:1.15,fill:.95,spreadDensity:.35},tone:{brightness:0,contrast:1.3,floor:.08,invert:0},letters:{ramp:0,weight:600,outline:0},shape:{rotate:0,anchor:0,minimum:.05},warp:{handPush:.04,ripple:0,rippleSpeed:.6},colour:{fromSource:0,spread:1},audio:{bassScale:.35,beatKick:.25},trail:{fadeAlpha:1}},Yg="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",mf=" .:-=+*#%@",gf=6e3;class nT{constructor(e,t){D(this,"canvas");D(this,"ctx");D(this,"cfg",vd);D(this,"url",null);D(this,"kind","video");D(this,"video",null);D(this,"image",null);D(this,"failed",!1);D(this,"sampler");D(this,"samplerCtx");D(this,"text","N4TH");D(this,"aim",{x:.5,y:.5});this.canvas=e,this.ctx=t,this.sampler=document.createElement("canvas"),this.samplerCtx=this.sampler.getContext("2d",{willReadFrequently:!0})}setParams(e){this.cfg=zi(vd,e)}setText(e){this.text=e.trim()||"N4TH"}setClipUrl(e,t="video"){var s;if(e===this.url&&t===this.kind||(this.url=e,this.kind=t,this.failed=!1,(s=this.video)==null||s.pause(),this.video=null,this.image=null,!e))return;if(t==="image"){const o=new Image;o.onerror=()=>{this.failed=!0},o.src=e,this.image=o;return}const i=document.createElement("video");i.src=e,i.loop=!0,i.muted=!0,i.playsInline=!0,i.onerror=()=>{this.failed=!0},i.play().catch(()=>{}),this.video=i}destroy(){var e;(e=this.video)==null||e.pause(),this.video=null,this.image=null}source(){const{video:e,image:t}=this;return e&&e.readyState>=2&&e.videoWidth>0?{el:e,w:e.videoWidth,h:e.videoHeight}:t&&t.complete&&t.naturalWidth>0?{el:t,w:t.naturalWidth,h:t.naturalHeight}:null}notice(e,t,i){const{ctx:s}=this;s.fillStyle=`${i[0]??"#ffffff"}66`,s.font="500 14px ui-monospace, monospace",s.textAlign="center",s.textBaseline="middle",s.fillText(this.failed?"THAT FILE WOULD NOT OPEN":this.url?"LOADING…":"NO FILE — UPLOAD ONE IN THE LIBRARY",e/2,t/2)}colorFor(e,t,i,s,o){const{colour:c}=this.cfg,u=Math.max(1,Math.round(c.spread)),h=o[Math.floor(e/u)%Math.max(1,o.length)]??"#ffffff";if(c.fromSource<=0)return h;if(c.fromSource>=1)return`rgb(${t}, ${i}, ${s})`;const d=h.replace("#",""),p=d.length===3?d.split("").map(_=>_+_).join(""):d,g=parseInt(p.slice(0,2),16)||0,m=parseInt(p.slice(2,4),16)||0,y=parseInt(p.slice(4,6),16)||0,v=c.fromSource,w=(_,S)=>Math.round(_+(S-_)*v);return`rgb(${w(g,t)}, ${w(m,i)}, ${w(y,s)})`}render(e,t,i){const{ctx:s,cfg:o}=this,c=this.canvas.width,u=this.canvas.height;if(c===0||u===0)return;s.globalCompositeOperation="source-over",s.fillStyle=o.trail.fadeAlpha>=1?"#000":`#000000${Jn(o.trail.fadeAlpha*255)}`,s.fillRect(0,0,c,u);const h=this.source();if(!h){this.notice(c,u,t);return}const d=[e.left,e.right].filter(Boolean);if(d.length>0){const ie=d.reduce((ee,V)=>ee+V.position.x,0)/d.length,W=d.reduce((ee,V)=>ee+V.position.y,0)/d.length;this.aim.x+=(ie-this.aim.x)*.08,this.aim.y+=(W-this.aim.y)*.08}const g=1-((e.distanceBetweenHands??.4)-.4)*o.grid.spreadDensity;let m=Math.max(2,Math.round(o.grid.columns*Math.max(.25,g)));const v=c/m*Math.max(.2,o.grid.cellAspect);let w=Math.max(2,Math.round(u/v));m*w>gf&&(w=Math.max(2,Math.floor(gf/m)),m=Math.max(2,Math.min(m,Math.floor(gf/w))));const _=this.samplerCtx;if(!_)return;(this.sampler.width!==m||this.sampler.height!==w)&&(this.sampler.width=m,this.sampler.height=w);const S=Math.max(m/h.w,w/h.h),b=h.w*S,C=h.h*S;_.drawImage(h.el,(m-b)/2,(w-C)/2,b,C);let T;try{T=_.getImageData(0,0,m,w).data}catch{this.notice(c,u,t);return}const L=Gc(),R=(i==null?void 0:i.bass)??0,F=i!=null&&i.beat?o.audio.beatKick:0,E=1+R*o.audio.bassScale+F,I=Math.round(o.mode),k=this.text,U=c/m,B=u/w,K=Math.min(U,B)*o.grid.fill*E;if(s.textAlign="center",s.textBaseline="middle",s.lineJoin="round",I===0){s.font=`${Math.round(o.letters.weight)} 100px ${Yg}`;const ie=s.measureText("M").width||60,W=Math.max(1,U*o.grid.fill*E/(ie/100));s.font=`${Math.round(o.letters.weight)} ${W}px ${Yg}`,s.lineWidth=Math.max(.5,W*.06)}for(let ie=0;ie<w;ie++)for(let W=0;W<m;W++){const ee=(ie*m+W)*4,V=T[ee],G=T[ee+1],$=T[ee+2];let X=(.2126*V+.7152*G+.0722*$)/255;if(X=(X-.5)*o.tone.contrast+.5+o.tone.brightness,o.tone.invert>=.5&&(X=1-X),X=Math.min(1,Math.max(0,X)),X<=o.tone.floor)continue;const z=(X-o.tone.floor)/(1-o.tone.floor);let Z=(W+.5)*U,me=(ie+.5)*B;if(o.warp.handPush!==0&&d.length>0){const Q=Z/c-this.aim.x,ve=me/u-this.aim.y,pe=Math.exp(-(Q*Q+ve*ve)*8);Z+=Q*pe*c*o.warp.handPush,me+=ve*pe*u*o.warp.handPush}o.warp.ripple!==0&&(me+=Math.sin(W*.35+L*o.warp.rippleSpeed)*B*o.warp.ripple);const Ae=ie*m+W,Ee=this.colorFor(Ae,V,G,$,t);switch(I){case 1:{const Q=K/2*Math.max(o.shape.minimum,z);s.fillStyle=Ee,s.beginPath(),s.arc(Z,me,Q,0,Math.PI*2),s.fill();break}case 2:{const Q=K*Math.max(o.shape.minimum,z);s.fillStyle=Ee,o.shape.rotate!==0?(s.save(),s.translate(Z,me),s.rotate(o.shape.rotate*Math.PI*.25),s.fillRect(-Q/2,-Q/2,Q,Q),s.restore()):s.fillRect(Z-Q/2,me-Q/2,Q,Q);break}case 3:{const Q=Math.max(1,U*o.grid.fill*.6),ve=B*o.grid.fill*E*Math.max(o.shape.minimum,z),pe=o.shape.anchor>=.5?(ie+1)*B-ve+(me-(ie+.5)*B):me-ve/2;s.fillStyle=Ee,s.fillRect(Z-Q/2,pe,Q,ve);break}default:{const Q=o.letters.ramp>=.5?k[Ae%k.length]:mf[Math.min(mf.length-1,Math.round(z*(mf.length-1)))];if(!Q||Q===" ")break;o.letters.outline>=.5?(s.strokeStyle=Ee,s.strokeText(Q,Z,me)):(s.globalAlpha=o.letters.ramp>=.5?z:1,s.fillStyle=Ee,s.fillText(Q,Z,me),s.globalAlpha=1);break}}}}}function Kx(a,e,t,i){var o,c;let s;switch(a){case"geometric":s=new P0(e,t);break;case"particles":s=new U1(e,t);break;case"waves":s=new F1(e,t);break;case"glitch":s=new D1(e,t);break;case"technical":s=new k1(e,t);break;case"lottie":s=new O1(e,t);break;case"lottie-classic":s=new Wb(e,t);break;case"linefield":s=new V1(e,t);break;case"thicklines":s=new Hb(e,t);break;case"flowfield":s=new Vb(e,t);break;case"liquidchrome":s=new Gb(e,t);break;case"chromatic":s=new z1(e,t);break;case"halftone":s=new B1(e,t);break;case"matrix":s=new H1(e,t);break;case"distortedcamera":s=new Eb(e,t),i&&((o=s.setVideoElement)==null||o.call(s,i));break;case"cyberstream":s=new bb(e,t);break;case"facecloud":s=new Tb(e,t);break;case"face":s=new dd(e,t);break;case"morphing":s=new Cb(e,t);break;case"cubewall":s=new Ab(e,t);break;case"smokehand-torus":s=new Bc(e,t);break;case"smokehand-hand":s=new Bc(e,t),(c=s.setSmokeHandModel)==null||c.call(s,"hand");break;case"network-cube":s=new Xb(e,t);break;case"elastic-net":s=new jb(e,t);break;case"text":s=new Do(e,t);break;case"video":s=new tT(e,t);break;case"mosaic":s=new nT(e,t);break;case"ripple":s=new Qb(e,t);break;case"digitalblocks":s=new qb(e,t);break;default:s=new P0(e,t);break}return s}const Vo={master:{enabled:1},transition:{enabled:1,duration:.6},feedback:{enabled:1,mix:1,amount:0,zoom:1,rotate:0,offsetX:0,offsetY:0,hueShift:0},colour:{enabled:1,mix:1,hue:0,saturation:1},displace:{enabled:1,mix:1,amount:0,scale:3,speed:.2},rgbSplit:{enabled:1,mix:1,amount:0},kaleido:{enabled:1,mix:1,segments:0,spin:0},quantize:{enabled:1,mix:1,pixel:0,levels:0},bloom:{enabled:1,mix:1,amount:0,threshold:.6}},Gd=`
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
`,iT=`${Gd}
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
}`,rT=`${Gd}
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
}`,sT=`
uniform float uAmount;
uniform float uMix;

void main() {
  vec2 dir = (vUv - 0.5) * uAmount;
  vec3 wet = vec3(
    texture(uTex, clamp(vUv + dir, 0.0, 1.0)).r,
    texture(uTex, vUv).g,
    texture(uTex, clamp(vUv - dir, 0.0, 1.0)).b);
  fragColor = vec4(mix(texture(uTex, vUv).rgb, wet, uMix), 1.0);
}`,aT=`
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
}`,oT=`
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
}`,lT=`
uniform float uThreshold;

void main() {
  vec3 c = texture(uTex, vUv).rgb;
  float luma = dot(c, vec3(0.2126, 0.7152, 0.0722));
  float keep = smoothstep(uThreshold, uThreshold + 0.25, luma);
  fragColor = vec4(c * keep, 1.0);
}`,cT=`
uniform vec2 uDirection;

void main() {
  vec2 texel = uDirection / uResolution;
  vec3 sum = texture(uTex, vUv).rgb * 0.2270270270;
  sum += texture(uTex, clamp(vUv + texel * 1.3846153846, 0.0, 1.0)).rgb * 0.3162162162;
  sum += texture(uTex, clamp(vUv - texel * 1.3846153846, 0.0, 1.0)).rgb * 0.3162162162;
  sum += texture(uTex, clamp(vUv + texel * 3.2307692308, 0.0, 1.0)).rgb * 0.0702702703;
  sum += texture(uTex, clamp(vUv - texel * 3.2307692308, 0.0, 1.0)).rgb * 0.0702702703;
  fragColor = vec4(sum, 1.0);
}`,uT=`
uniform sampler2D uBloom;
uniform float uAmount;
uniform float uMix;

void main() {
  vec3 base = texture(uTex, vUv).rgb;
  vec3 glow = texture(uBloom, vUv).rgb * uAmount;
  fragColor = vec4(mix(base, base + glow, uMix), 1.0);
}`,hT=`
uniform sampler2D uNext;
uniform float uMix;

void main() {
  fragColor = vec4(mix(texture(uTex, vUv).rgb, texture(uNext, vUv).rgb, uMix), 1.0);
}`,fT=`
void main() {
  fragColor = vec4(texture(uTex, vUv).rgb, 1.0);
}`,dT=`${Gd}
uniform float uHue;
uniform float uSaturation;
uniform float uMix;

void main() {
  vec3 src = texture(uTex, vUv).rgb;
  vec3 wet = hueRotate(src, uHue);
  float grey = dot(wet, vec3(0.299, 0.587, 0.114));
  wet = mix(vec3(grey), wet, uSaturation);
  fragColor = vec4(mix(src, clamp(wet, 0.0, 1.0), uMix), 1.0);
}`;function qr(a,e){return a.enabled>=.5&&a.mix>0&&e}function pT(a){const e=zi(Vo,a);return e.master.enabled<.5?!1:qr(e.colour,e.colour.hue!==0||e.colour.saturation!==1)||qr(e.feedback,e.feedback.amount>0)||qr(e.displace,e.displace.amount>0)||qr(e.rgbSplit,e.rgbSplit.amount>0)||qr(e.kaleido,e.kaleido.segments>=2)||qr(e.quantize,e.quantize.pixel>1||e.quantize.levels>=2)||qr(e.bloom,e.bloom.amount>0)}class mT{constructor(e){D(this,"gl");D(this,"cfg",Vo);D(this,"programs",{});D(this,"sourceTexture");D(this,"previousTexture");D(this,"blendTarget");D(this,"targets");D(this,"feedback");D(this,"bloomTargets");D(this,"width",1);D(this,"height",1);D(this,"ping",0);D(this,"feedbackPrimed",!1);const t=e.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,powerPreference:"high-performance"});if(!t)throw new Error("WebGL2 is not available");this.gl=t,this.programs={colour:ci(t,dT),copy:ci(t,fT),feedback:ci(t,iT),displace:ci(t,rT),rgbSplit:ci(t,sT),kaleido:ci(t,aT),quantize:ci(t,oT),blend:ci(t,hT),bloomBright:ci(t,lT),bloomBlur:ci(t,cT),bloomComposite:ci(t,uT)},t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),this.sourceTexture=t.createTexture(),this.previousTexture=t.createTexture();for(const i of[this.sourceTexture,this.previousTexture])t.bindTexture(t.TEXTURE_2D,i),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE);this.blendTarget=$r(t,1,1),this.targets=[$r(t,1,1),$r(t,1,1)],this.feedback=$r(t,1,1),this.bloomTargets=[$r(t,1,1),$r(t,1,1)]}setParams(e){this.cfg=zi(Vo,e)}live(e,t){return this.cfg.master.enabled>=.5&&qr(e,t)}get active(){const e=this.cfg;return e.master.enabled<.5?!1:this.live(e.colour,e.colour.hue!==0||e.colour.saturation!==1)||this.live(e.feedback,e.feedback.amount>0)||this.live(e.displace,e.displace.amount>0)||this.live(e.rgbSplit,e.rgbSplit.amount>0)||this.live(e.kaleido,e.kaleido.segments>=2)||this.live(e.quantize,e.quantize.pixel>1||e.quantize.levels>=2)||this.live(e.bloom,e.bloom.amount>0)}resize(e,t){if(this.width===e&&this.height===t)return;const i=this.gl;this.width=e,this.height=t,Kr(i,this.targets[0],e,t),Kr(i,this.targets[1],e,t),Kr(i,this.feedback,e,t),Kr(i,this.blendTarget,e,t),Kr(i,this.bloomTargets[0],Math.max(1,e>>1),Math.max(1,t>>1)),Kr(i,this.bloomTargets[1],Math.max(1,e>>1),Math.max(1,t>>1)),this.feedbackPrimed=!1}use(e,t=this.width,i=this.height,s=0){const o=this.gl,c=this.programs[e];return o.useProgram(c),o.uniform2f(o.getUniformLocation(c,"uResolution"),t,i),o.uniform1f(o.getUniformLocation(c,"uTime"),s),c}next(){return this.ping^=1,this.targets[this.ping]}render(e,t,i,s=1){const o=this.gl,c=e.width,u=e.height;if(c===0||u===0)return;const h=o.canvas;(h.width!==c||h.height!==u)&&(h.width=c,h.height=u),this.resize(c,u),o.bindTexture(o.TEXTURE_2D,this.sourceTexture),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,o.RGBA,o.UNSIGNED_BYTE,e);let d=this.sourceTexture;if(i&&s<1&&i.width===c&&i.height===u){o.bindTexture(o.TEXTURE_2D,this.previousTexture),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,o.RGBA,o.UNSIGNED_BYTE,i);const v=this.use("blend");gn(o,v,"uTex",this.previousTexture,0),gn(o,v,"uNext",this.sourceTexture,1),o.uniform1f(o.getUniformLocation(v,"uMix"),s),zn(o,this.blendTarget,c,u),d=this.blendTarget.texture}if(!this.active){this.feedbackPrimed&&(this.feedbackPrimed=!1);const v=this.use("copy");gn(o,v,"uTex",d,0),zn(o,null,c,u);return}const p=this.cfg;let g=d,m;if(this.live(p.colour,p.colour.hue!==0||p.colour.saturation!==1)){const v=this.use("colour");gn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uHue"),p.colour.hue),o.uniform1f(o.getUniformLocation(v,"uSaturation"),p.colour.saturation),o.uniform1f(o.getUniformLocation(v,"uMix"),p.colour.mix),m=this.next(),zn(o,m,c,u),g=m.texture}if(this.live(p.feedback,p.feedback.amount>0)){const v=this.use("feedback");gn(o,v,"uTex",g,0),gn(o,v,"uFeedback",this.feedback.texture,1),o.uniform1f(o.getUniformLocation(v,"uAmount"),this.feedbackPrimed?p.feedback.amount:0),o.uniform1f(o.getUniformLocation(v,"uZoom"),p.feedback.zoom),o.uniform1f(o.getUniformLocation(v,"uRotate"),p.feedback.rotate),o.uniform2f(o.getUniformLocation(v,"uOffset"),p.feedback.offsetX,p.feedback.offsetY),o.uniform1f(o.getUniformLocation(v,"uHueShift"),p.feedback.hueShift),o.uniform1f(o.getUniformLocation(v,"uMix"),p.feedback.mix),m=this.next(),zn(o,m,c,u),g=m.texture}if(this.live(p.displace,p.displace.amount>0)){const v=this.use("displace",c,u,t);gn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uAmount"),p.displace.amount),o.uniform1f(o.getUniformLocation(v,"uScale"),p.displace.scale),o.uniform1f(o.getUniformLocation(v,"uSpeed"),p.displace.speed),o.uniform1f(o.getUniformLocation(v,"uMix"),p.displace.mix),m=this.next(),zn(o,m,c,u),g=m.texture}if(this.live(p.rgbSplit,p.rgbSplit.amount>0)){const v=this.use("rgbSplit");gn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uAmount"),p.rgbSplit.amount),o.uniform1f(o.getUniformLocation(v,"uMix"),p.rgbSplit.mix),m=this.next(),zn(o,m,c,u),g=m.texture}if(this.live(p.kaleido,p.kaleido.segments>=2)){const v=this.use("kaleido");gn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uSegments"),Math.round(p.kaleido.segments)),o.uniform1f(o.getUniformLocation(v,"uSpin"),p.kaleido.spin),o.uniform1f(o.getUniformLocation(v,"uMix"),p.kaleido.mix),m=this.next(),zn(o,m,c,u),g=m.texture}if(this.live(p.quantize,p.quantize.pixel>1||p.quantize.levels>=2)){const v=this.use("quantize");gn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uPixel"),p.quantize.pixel),o.uniform1f(o.getUniformLocation(v,"uLevels"),p.quantize.levels),o.uniform1f(o.getUniformLocation(v,"uMix"),p.quantize.mix),m=this.next(),zn(o,m,c,u),g=m.texture}this.live(p.bloom,p.bloom.amount>0)&&(g=this.renderBloom(g,c,u));const y=this.use("copy");gn(o,y,"uTex",g,0),zn(o,this.feedback,c,u),this.feedbackPrimed=!0,gn(o,y,"uTex",g,0),zn(o,null,c,u)}renderBloom(e,t,i){const s=this.gl,o=this.bloomTargets,c=o[0].width,u=o[0].height;let h=this.use("bloomBright",c,u);gn(s,h,"uTex",e,0),s.uniform1f(s.getUniformLocation(h,"uThreshold"),this.cfg.bloom.threshold),zn(s,o[0],c,u),h=this.use("bloomBlur",c,u),gn(s,h,"uTex",o[0].texture,0),s.uniform2f(s.getUniformLocation(h,"uDirection"),1,0),zn(s,o[1],c,u),h=this.use("bloomBlur",c,u),gn(s,h,"uTex",o[1].texture,0),s.uniform2f(s.getUniformLocation(h,"uDirection"),0,1),zn(s,o[0],c,u),h=this.use("bloomComposite"),gn(s,h,"uTex",e,0),gn(s,h,"uBloom",o[0].texture,1),s.uniform1f(s.getUniformLocation(h,"uAmount"),this.cfg.bloom.amount),s.uniform1f(s.getUniformLocation(h,"uMix"),this.cfg.bloom.mix);const d=this.next();return zn(s,d,t,i),d.texture}destroy(){var t;const e=this.gl;for(const i of Object.values(this.programs))e.deleteProgram(i);e.deleteTexture(this.sourceTexture),e.deleteTexture(this.previousTexture),Zr(e,this.blendTarget),Zr(e,this.targets[0]),Zr(e,this.targets[1]),Zr(e,this.feedback),Zr(e,this.bloomTargets[0]),Zr(e,this.bloomTargets[1]),(t=e.getExtension("WEBGL_lose_context"))==null||t.loseContext()}}const gT="screen";function $g(a,e){return a.duration<=0?1:Math.min(1,(e-a.fadeStart)/1e3/a.duration)}function xT({handData:a,layerColors:e,layers:t,videoElement:i,audioData:s,layerParams:o,fxParams:c,content:u,motion:h}){const d=ge.useRef(null),p=ge.useRef(null),g=ge.useRef(null),m=ge.useRef(null),[y,v]=ge.useState(!1),w=ge.useRef([]),_=ge.useRef(t),S=ge.useRef(null),b=ge.useRef(a),C=ge.useRef(e),T=ge.useRef(i??null),L=ge.useRef(s),R=ge.useRef(o),F=ge.useRef(c),E=ge.useRef(u),I=ge.useRef(h);return ge.useEffect(()=>{b.current=a,C.current=e,T.current=i??null,L.current=s,R.current=o,_.current=t,F.current=c,E.current=u,I.current=h},[a,e,i,s,o,t,c,u,h]),ge.useEffect(()=>{var k,U,B,K;for(const ie of w.current)(U=ie==null?void 0:(k=ie.current.renderer).setText)==null||U.call(k,u.text),(K=ie==null?void 0:(B=ie.current.renderer).setClipUrl)==null||K.call(B,u.clipUrl,u.clipKind)},[u]),ge.useEffect(()=>{w.current.forEach((k,U)=>{var B,K;(K=k==null?void 0:(B=k.current.renderer).setParams)==null||K.call(B,(o==null?void 0:o[U])??{})})},[o]),ge.useEffect(()=>{var k;(k=g.current)==null||k.setParams(c??{})},[c]),ge.useEffect(()=>{const k=d.current;if(!k)return;if(y){m.current=k.getContext("2d");return}let U=null;try{U=new mT(k),U.setParams(F.current??{}),g.current=U}catch(B){console.error("Post pipeline unavailable, falling back to direct output:",B),g.current=null,v(!0)}return()=>{U==null||U.destroy(),g.current=null}},[y]),ge.useEffect(()=>{const k=document.createElement("canvas");S.current=k.getContext("2d");const U=()=>{const V=window.innerWidth,G=window.innerHeight;k.width=V,k.height=G;for(const X of w.current)for(const z of[X==null?void 0:X.current,X==null?void 0:X.outgoing])z&&(z.canvas.width=V,z.canvas.height=G);const $=d.current;$&&!g.current&&($.width=V,$.height=G)};U(),window.addEventListener("resize",U);const B=(V,G)=>{var $,X;try{T.current&&((X=($=V.renderer).setVideoElement)==null||X.call($,T.current));const z=_.current[G];V.renderer.render(b.current,C.current[G]??C.current[0]??[],L.current,z==null?void 0:z.colorMode)}catch(z){V.reportedError||(V.reportedError=!0,console.error(`Renderer "${V.pattern}" threw while drawing:`,z))}};let K=!1;const ie=(V,G)=>{V.globalCompositeOperation="source-over",V.globalAlpha=1,V.fillStyle="#000",V.fillRect(0,0,V.canvas.width,V.canvas.height),w.current.forEach(($,X)=>{var Ae;if(!$)return;const z=X===0,Z=((Ae=_.current[X])==null?void 0:Ae.opacity)??1;if(Z<=0)return;V.globalCompositeOperation=z?"source-over":gT;const me=$.outgoing?$g($.outgoing,G):1;$.outgoing&&(V.globalAlpha=Z*(z?1:1-me),V.drawImage($.outgoing.canvas,0,0)),V.globalAlpha=Z*me,V.drawImage($.current.canvas,0,0)}),V.globalAlpha=1,V.globalCompositeOperation="source-over"};let W=performance.now();const ee=()=>{const V=performance.now(),G=S.current,$=Math.min(.1,(V-W)/1e3);if(W=V,N1($,I.current),w.current.forEach((X,z)=>{var Z,me;X&&(B(X.current,z),X.outgoing&&($g(X.outgoing,V)>=1?((me=(Z=X.outgoing.renderer).destroy)==null||me.call(Z),X.outgoing=null):B(X.outgoing,z)))}),G&&w.current.length>0){ie(G,V);const X=g.current;if(X)try{X.render(G.canvas,V/1e3)}catch(z){K||(K=!0,console.error("Post pipeline threw while presenting:",z))}else m.current&&m.current.drawImage(G.canvas,0,0)}p.current=requestAnimationFrame(ee)};return ee(),()=>{var V,G,$,X,z;window.removeEventListener("resize",U),p.current&&cancelAnimationFrame(p.current);for(const Z of w.current)($=(V=Z==null?void 0:Z.outgoing)==null?void 0:(G=V.renderer).destroy)==null||$.call(G),(z=Z==null?void 0:(X=Z.current.renderer).destroy)==null||z.call(X);w.current=[],S.current=null}},[]),ge.useEffect(()=>{var ie,W,ee,V,G;const k=w.current,U=zi(Vo,F.current??{}).transition,B=U.enabled>=.5?U.duration:0,K=($,X)=>{var Ae,Ee,Q,ve;const z=document.createElement("canvas");z.width=window.innerWidth,z.height=window.innerHeight;const Z=z.getContext("2d");if(!Z)return null;let me;try{me=Kx($,z,Z,T.current)}catch(pe){return console.error("Failed to create renderer for pattern:",$,pe),null}return(Ee=me.setParams)==null||Ee.call(me,((Ae=R.current)==null?void 0:Ae[X])??{}),(Q=me.setText)==null||Q.call(me,E.current.text),(ve=me.setClipUrl)==null||ve.call(me,E.current.clipUrl,E.current.clipKind),{renderer:me,canvas:z,pattern:$}};t.forEach(({pattern:$},X)=>{var me,Ae,Ee,Q,ve;const z=k[X];if((z==null?void 0:z.current.pattern)===$)return;const Z=K($,X);if(Z){if(!z){k[X]={current:Z,outgoing:null};return}(Ee=(me=z.outgoing)==null?void 0:(Ae=me.renderer).destroy)==null||Ee.call(Ae),B>0?z.outgoing={...z.current,fadeStart:performance.now(),duration:B}:((ve=(Q=z.current.renderer).destroy)==null||ve.call(Q),z.outgoing=null),z.current=Z}});for(const $ of k.splice(t.length))(ee=(ie=$==null?void 0:$.outgoing)==null?void 0:(W=ie.renderer).destroy)==null||ee.call(W),(G=$==null?void 0:(V=$.current.renderer).destroy)==null||G.call(V)},[t.map(k=>k.pattern).join("|")]),Y.jsx("canvas",{ref:d,className:"absolute inset-0 w-full h-full z-0"},y?"fallback-2d":"pipeline-gl")}function vT({onAudioData:a,enabled:e,sensitivity:t}){const i=ge.useRef(null),s=ge.useRef(null),o=ge.useRef(null),c=ge.useRef(null),u=ge.useRef(null),h=ge.useRef([]),d=ge.useRef(0),[p,g]=ge.useState(null),m=ge.useRef(t);return m.current=t,ge.useEffect(()=>{let y=!1;const v=()=>{y=!0,u.current!==null&&(cancelAnimationFrame(u.current),u.current=null),c.current&&(c.current.getTracks().forEach(b=>b.stop()),c.current=null);const S=i.current;i.current=null,S&&S.state!=="closed"&&S.close(),s.current=null,o.current=null};if(!e){v(),a({bass:0,mid:0,high:0,overall:0,beat:!1,beatIntensity:0});return}const w=async()=>{try{const S=await navigator.mediaDevices.getUserMedia({audio:!0});if(y){S.getTracks().forEach(F=>F.stop());return}c.current=S;const b=new AudioContext;i.current=b;const C=b.createAnalyser();C.fftSize=2048,C.smoothingTimeConstant=.8,s.current=C,b.createMediaStreamSource(S).connect(C);const L=C.frequencyBinCount,R=new Uint8Array(L);o.current=R,g(null),_()}catch(S){if(y)return;g("Microphone access denied"),console.error("Audio initialization error:",S)}},_=()=>{if(!s.current||!o.current)return;s.current.getByteFrequencyData(o.current);const S=o.current,b=S.length,C=Math.floor(b*.12),T=Math.floor(b*.4);let L=0,R=0,F=0,E=0;for(let $=0;$<b;$++){const X=S[$];E+=X,$<C?L+=X:$<T?R+=X:F+=X}const I=m.current,k=Math.min(1,L/(C*255)*(1+I)),U=Math.min(1,R/((T-C)*255)*(1+I)),B=Math.min(1,F/((b-T)*255)*(1+I)),K=Math.min(1,E/(b*255)*(1+I)),ie=Date.now(),W=.6*I;h.current.push(k),h.current.length>10&&h.current.shift();const ee=h.current.reduce(($,X)=>$+X,0)/h.current.length,V=k>ee*1.5&&k>W&&ie-d.current>300;V&&(d.current=ie);const G=V?Math.min(1,(k-ee)/ee):0;a({bass:k,mid:U,high:B,overall:K,beat:V,beatIntensity:G}),u.current=requestAnimationFrame(_)};return w(),v},[e,a]),p?Y.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500/20 border border-red-500 px-4 py-2 rounded",children:Y.jsx("p",{className:"text-red-500 font-mono",children:p})}):null}function _T(a,e,t,i){const o={x:a,y:e+.08800000000000001},c=[{...o,z:0}];return[{angle:-1.05,length:.62},{angle:-.34,length:.95},{angle:-.1,length:1},{angle:.14,length:.92},{angle:.38,length:.76}].forEach((h,d)=>{const p=.25+Math.sin(t*.6+i+d)*.2;for(let g=1;g<=4;g++){const m=g/4,y=h.angle+p*m*.5,v=.16*h.length*m;c.push({x:o.x+Math.sin(y)*v,y:o.y-Math.cos(y)*v,z:0})}}),c}function Zx(a){const e=(t,i)=>{const s={x:i+Math.sin(a*.23+t)*.18,y:.5+Math.sin(a*.31+t*1.7)*.22};return{position:s,gesture:"open",fingerCount:3+Math.round(1.5+Math.sin(a*.11+t)*1.5),velocity:.25+Math.sin(a*.37+t)*.15,holdDuration:1,landmarks:_T(s.x,s.y,a,t)}};return{left:e(0,.32),right:e(Math.PI,.68),distanceBetweenHands:.36}}const Qx="vj-text",yT="n4thvj",is="clips",Wd="clip",_d="N4TH";function ST(){try{return localStorage.getItem(Qx)??_d}catch{return _d}}function MT(a){try{localStorage.setItem(Qx,a)}catch{}}function Xd(){return new Promise((a,e)=>{const t=indexedDB.open(yT,1);t.onupgradeneeded=()=>{t.result.objectStoreNames.contains(is)||t.result.createObjectStore(is)},t.onsuccess=()=>a(t.result),t.onerror=()=>e(t.error)})}async function wT(a,e){const t=await Xd();await new Promise((i,s)=>{const o=t.transaction(is,"readwrite");o.objectStore(is).put({file:a,name:e},Wd),o.oncomplete=()=>i(),o.onerror=()=>s(o.error)}),t.close()}function Kg(a){return a.type.startsWith("image/")?"image":"video"}async function ET(){try{const a=await Xd(),e=await new Promise((s,o)=>{const u=a.transaction(is,"readonly").objectStore(is).get(Wd);u.onsuccess=()=>s(u.result),u.onerror=()=>o(u.error)});if(a.close(),!e||typeof e!="object")return null;const{file:t,name:i}=e;return t instanceof Blob?{file:t,name:typeof i=="string"?i:"clip"}:null}catch{return null}}async function bT(){try{const a=await Xd();await new Promise(e=>{const t=a.transaction(is,"readwrite");t.objectStore(is).delete(Wd),t.oncomplete=()=>e(),t.onerror=()=>e()}),a.close()}catch{}}const TT=4,CT=14,Zg=45,AT=480,RT=300,PT=["#ffffff","#d4d4d4","#ffffff","#a3a3a3"],LT={"2D":"text-cyan-300 border-cyan-400/30 bg-cyan-400/10","3D":"text-violet-300 border-violet-400/30 bg-violet-400/10",TD:"text-emerald-300 border-emerald-400/30 bg-emerald-400/10"},Qg=Object.values(ts),IT=["2D","3D","TD"];function NT({set:a,onSetChange:e,onStart:t,text:i,onTextChange:s,clipName:o,clipUrl:c,clipKind:u,onClipChange:h}){const[d,p]=ge.useState("ALL"),[g,m]=ge.useState(null),y=ge.useRef(new Map),v=ge.useRef(new Set),w=ge.useRef(null),_=ge.useRef(a);_.current=a;const S=ge.useRef({text:i,clipUrl:c,clipKind:u});S.current={text:i,clipUrl:c,clipKind:u};const b=d==="ALL"?Qg:Qg.filter(E=>E.category===d),C=ge.useCallback(E=>{const I=_.current;if(I.indexOf(E)!==-1){e(I.filter(U=>U!==E));return}I.length>=Es||e([...I,E])},[e]),T=ge.useCallback((E,I)=>{const k=_.current.filter(K=>K!==E),U=Math.min(I,k.length);if(U>=Es)return;const B=[...k];B.splice(U,0,E),e(B.slice(0,Es))},[e]);ge.useEffect(()=>{const E=I=>{if(I.ctrlKey||I.metaKey||I.altKey)return;if(I.key==="Enter"&&_.current.length>0){t();return}if(!g)return;const k=xf(I.key);k!==-1&&(I.preventDefault(),T(g,k))};return window.addEventListener("keydown",E),()=>window.removeEventListener("keydown",E)},[g,T,t]),ge.useEffect(()=>{w.current=new IntersectionObserver(k=>{for(const U of k){const B=U.target.getAttribute("data-pattern");B&&(U.isIntersecting?v.current.add(B):v.current.delete(B))}},{rootMargin:"250px 0px"});for(const k of y.current.values())w.current.observe(k.canvas);let E=0;const I=()=>{var ie,W,ee,V,G,$,X,z;if(E=requestAnimationFrame(I),document.hidden)return;const k=Zx(Date.now()/1e3);let U=0,B=0;const K=[...y.current].sort(([,Z],[,me])=>{const Ae=Z.frames<Zg?0:1,Ee=me.frames<Zg?0:1;return Ae-Ee});for(const[Z,me]of K){const Ae=ts[Z].category!=="2D",Ee=Ae?U<TT:B<CT;if(v.current.has(Z)&&Ee&&!me.failed){if(!me.renderer)try{me.renderer=Kx(Z,me.canvas,me.ctx,null)}catch{me.failed=!0;continue}try{(W=(ie=me.renderer).setText)==null||W.call(ie,S.current.text),(V=(ee=me.renderer).setClipUrl)==null||V.call(ee,S.current.clipUrl,S.current.clipKind),me.renderer.render(k,PT,void 0,"contrast")}catch{me.failed=!0,($=(G=me.renderer).destroy)==null||$.call(G),me.renderer=null;continue}me.frames++,Ae?U++:B++}else me.renderer&&((z=(X=me.renderer).destroy)==null||z.call(X),me.renderer=null)}};return E=requestAnimationFrame(I),()=>{var k,U,B;cancelAnimationFrame(E),(k=w.current)==null||k.disconnect();for(const K of y.current.values())(B=(U=K.renderer)==null?void 0:U.destroy)==null||B.call(U);y.current.clear()}},[]);const L=ge.useRef(new Map),R=E=>{let I=L.current.get(E);return I||(I=k=>F(E,k),L.current.set(E,I)),I},F=ge.useCallback((E,I)=>{var U,B,K;if(!I){const ie=y.current.get(E);(B=(U=ie==null?void 0:ie.renderer)==null?void 0:U.destroy)==null||B.call(U),y.current.delete(E),v.current.delete(E);return}if(y.current.has(E))return;I.width=AT,I.height=RT;const k=I.getContext("2d");k&&(y.current.set(E,{canvas:I,ctx:k,renderer:null,frames:0}),(K=w.current)==null||K.observe(I))},[]);return Y.jsxs("div",{className:"min-h-screen w-full bg-[#07070a] text-white font-mono",children:[Y.jsx("div",{"aria-hidden":!0,className:"pointer-events-none fixed inset-0 opacity-70",style:{background:"radial-gradient(60rem 40rem at 50% -10%, rgba(99,102,241,0.18), transparent 70%),radial-gradient(40rem 30rem at 85% 15%, rgba(217,70,239,0.10), transparent 70%)"}}),Y.jsxs("div",{className:"relative mx-auto max-w-[1500px] px-6 pb-40 pt-14",children:[Y.jsx("header",{className:"mb-10",children:Y.jsxs("div",{className:"flex flex-wrap items-end justify-between gap-6",children:[Y.jsxs("div",{children:[Y.jsx("h1",{className:"text-2xl font-semibold tracking-[-0.02em] sm:text-3xl",children:"<N4TH>"}),Y.jsxs("p",{className:"mt-3 max-w-xl text-sm leading-relaxed text-white/45",children:["Every visual, running. Pick up to ",Es," and they become your keyboard — click to add, or hover one and press the number you want it on."]})]}),Y.jsx("nav",{className:"flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] p-1.5",children:["ALL",...IT].map(E=>Y.jsx("button",{onClick:()=>p(E),className:`rounded-full px-4 py-1.5 text-[11px] tracking-wider transition-all ${d===E?"bg-white text-black":"text-white/45 hover:bg-white/5 hover:text-white/80"}`,children:E},E))})]})}),Y.jsx("div",{className:"grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:b.map(E=>{const I=a.indexOf(E.pattern),k=I!==-1,U=a.length>=Es&&!k,B=E.pattern==="text"?"text":E.pattern==="video"||E.pattern==="mosaic"?"file":null;return Y.jsxs("div",{onMouseEnter:()=>m(E.pattern),onMouseLeave:()=>m(K=>K===E.pattern?null:K),className:`group relative overflow-hidden rounded-2xl border text-left transition-all duration-200 ${k?"border-white/70 bg-white/[0.06] shadow-[0_0_0_1px_rgba(255,255,255,0.35),0_18px_50px_-20px_rgba(255,255,255,0.35)]":U?"border-white/5 opacity-35":"border-white/10 bg-white/[0.02] hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.05]"}`,children:[Y.jsxs("button",{onClick:()=>C(E.pattern),disabled:U,title:U?"The set is full — take one off first":`${E.description}${k?"":" · click to add"}`,className:`block w-full text-left ${U?"cursor-not-allowed":""}`,children:[Y.jsxs("div",{className:"relative aspect-[16/10] w-full overflow-hidden bg-black",children:[Y.jsx("canvas",{"data-pattern":E.pattern,ref:R(E.pattern),className:"h-full w-full object-cover"}),Y.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/85 to-transparent"}),k&&Y.jsx("div",{className:"absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-base font-semibold text-black shadow-lg",children:ko(I)})]}),Y.jsxs("div",{className:"flex items-center justify-between gap-3 px-4 pb-3 pt-3",children:[Y.jsxs("div",{className:"min-w-0",children:[Y.jsx("div",{className:"truncate text-[13px] tracking-wide text-white/90",children:E.name}),Y.jsx("div",{className:"mt-0.5 truncate text-[10px] text-white/35",children:E.description})]}),Y.jsx("span",{className:`shrink-0 rounded border px-1.5 py-0.5 text-[9px] tracking-widest ${LT[E.category]}`,children:E.category})]})]}),B==="text"&&Y.jsx("div",{className:"px-4 pb-4",children:Y.jsx("input",{value:i,onChange:K=>s(K.target.value),onKeyDown:K=>K.stopPropagation(),placeholder:_d,maxLength:48,"aria-label":"Words for Kinetic Type",className:"w-full rounded-lg border border-white/15 bg-black/60 px-3 py-2 text-[12px] tracking-wide text-white placeholder:text-white/25 focus:border-white/45 focus:outline-none"})}),B==="file"&&Y.jsxs("div",{className:"flex items-center gap-2 px-4 pb-4",children:[Y.jsxs("label",{className:"cursor-pointer rounded-lg border border-white/15 bg-black/60 px-3 py-2 text-[11px] tracking-wider text-white/75 transition-colors hover:border-white/45 hover:text-white",children:[o?"REPLACE":"UPLOAD",Y.jsx("input",{type:"file",accept:"video/*,image/*",className:"hidden",onChange:K=>{var W;const ie=(W=K.target.files)==null?void 0:W[0];ie&&h(ie),K.target.value=""}})]}),Y.jsx("span",{className:"min-w-0 flex-1 truncate text-[10px] text-white/35",children:o??"no file yet"}),o&&Y.jsx("button",{onClick:()=>h(null),title:"Remove the file",className:"shrink-0 px-1 text-white/25 transition-colors hover:text-white/80",children:"×"})]})]},E.pattern)})})]}),Y.jsx("footer",{className:"fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/80 backdrop-blur-xl",children:Y.jsxs("div",{className:"mx-auto flex max-w-[1500px] flex-wrap items-center gap-4 px-6 py-4",children:[Y.jsxs("div",{className:"flex min-w-0 flex-1 flex-wrap items-center gap-2",children:[Y.jsxs("span",{className:"mr-1 text-[10px] tracking-widest text-white/35",children:["SET ",a.length,"/",Es]}),a.length===0&&Y.jsx("span",{className:"text-[11px] text-white/30",children:"Nothing chosen yet — pick a visual to start building the row."}),a.map((E,I)=>Y.jsxs("button",{onClick:()=>C(E),title:"Take off the set",className:"group flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] py-1 pl-1 pr-3 transition-all hover:border-white/40 hover:bg-white/10",children:[Y.jsx("span",{className:"flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-black",children:ko(I)}),Y.jsx("span",{className:"text-[11px] text-white/80",children:ts[E].name}),Y.jsx("span",{className:"text-white/25 transition-colors group-hover:text-white/70",children:"×"})]},E))]}),Y.jsxs("div",{className:"flex shrink-0 items-center gap-3",children:[a.length>0&&Y.jsx("button",{onClick:()=>e([]),className:"rounded-full px-3 py-2 text-[11px] tracking-wider text-white/40 transition-colors hover:text-white/80",children:"CLEAR"}),Y.jsx("button",{onClick:t,disabled:a.length===0,className:`rounded-full px-7 py-3 text-[12px] font-semibold tracking-[0.18em] transition-all ${a.length===0?"cursor-not-allowed bg-white/10 text-white/25":"bg-white text-black hover:scale-[1.03] hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.6)]"}`,children:"START SET →"})]})]})})]})}function UT(a,e){const t=Math.max(0,Math.ceil(-Math.log10(e)));return a.toFixed(Math.min(t,4))}function FT({spec:a,value:e,isDefault:t,inert:i,onChange:s,onReset:o}){var u;const c=(e-a.min)/(a.max-a.min)*100;return Y.jsxs("div",{className:`group ${i?"opacity-40":""}`,title:i?`Does nothing until ${a.needs} is above zero`:void 0,children:[Y.jsxs("div",{className:"flex justify-between items-baseline text-[9px] leading-tight",children:[Y.jsxs("button",{onClick:o,title:t?a.hint??a.path:`${a.path} — click to reset`,className:`text-left transition-colors ${t?"text-white/50 hover:text-white/70":"text-cyan-300 hover:text-cyan-200"}`,children:[a.label,!t&&Y.jsx("span",{className:"ml-1 opacity-60",children:"•"})]}),Y.jsx("span",{className:`text-white ${a.labels?"":"tabular-nums"}`,children:((u=a.labels)==null?void 0:u[Math.round(e)])??UT(e,a.step)})]}),Y.jsx("input",{type:"range",className:"vj-slider w-full h-1 mt-1 mb-2 rounded-full appearance-none cursor-pointer focus:outline-none",min:a.min,max:a.max,step:a.step,value:e,onChange:h=>s(parseFloat(h.target.value)),style:{backgroundImage:`linear-gradient(to right, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.85) ${c}%, rgba(255,255,255,0.2) ${c}%)`}})]})}function DT({sections:a,header:e}){var d;const[t,i]=ge.useState(!1),[s,o]=ge.useState((d=a[0])==null?void 0:d.key),c=a.filter(p=>p.entry.groups.length>0);if(c.length===0)return null;const u=c.find(p=>p.key===s)??c[0],h=u.entry.groups.some(p=>p.params.some(g=>u.values[g.path]!==void 0));return Y.jsx("div",{className:"absolute left-6 top-24 bottom-32 z-50 w-[168px] flex flex-col font-mono pointer-events-auto",children:Y.jsxs("div",{className:"bg-black/70 backdrop-blur-sm rounded-xl border border-white/20 flex flex-col min-h-0",children:[e&&Y.jsx("div",{className:"border-b border-white/10",children:e}),Y.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-2 border-b border-white/10",children:[Y.jsx("button",{onClick:()=>i(p=>!p),className:"text-white/60 hover:text-white transition-colors shrink-0",title:t?"Show parameters":"Hide parameters",children:Y.jsx(u1,{className:"w-3.5 h-3.5"})}),Y.jsx("div",{className:"flex gap-1 flex-1 min-w-0",children:c.map(p=>{const g=p.entry.groups.some(m=>m.params.some(y=>p.values[y.path]!==void 0));return Y.jsxs("button",{onClick:()=>{o(p.key),i(!1)},className:`px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider transition-all ${p.key===u.key?"bg-white/20 text-white":"text-white/40 hover:text-white/70"}`,children:[p.label,g&&Y.jsx("span",{className:"ml-1 text-cyan-300",children:"•"})]},p.key)})}),h&&Y.jsx("button",{onClick:()=>u.onReset(),title:`Reset every ${u.label} parameter`,className:"text-white/40 hover:text-white transition-colors shrink-0",children:Y.jsx(l1,{className:"w-3 h-3"})})]}),!t&&Y.jsx("div",{className:"overflow-y-auto px-3 py-2 min-h-0",children:u.entry.groups.map(p=>{if(p.visibleWhen){const y=u.values[p.visibleWhen.path]??Po(u.entry.config,p.visibleWhen.path)??0;if(!p.visibleWhen.equals.includes(Math.round(y)))return null}const m=(p.togglePath?u.values[p.togglePath]??Po(u.entry.config,p.togglePath)??1:1)>=.5;return Y.jsxs("div",{className:"mb-3 last:mb-1",children:[p.togglePath?Y.jsxs("button",{onClick:()=>u.onChange(p.togglePath,m?0:1),title:m?`Bypass ${p.name}`:`Enable ${p.name}`,className:"flex items-center gap-1.5 w-full mb-1.5 group/head",children:[Y.jsx("span",{className:`w-1.5 h-1.5 rounded-full transition-colors ${m?"bg-cyan-300":"bg-white/20"}`}),Y.jsx("span",{className:`text-[8px] tracking-widest uppercase transition-colors ${m?"text-white/55 group-hover/head:text-white/80":"text-white/25"}`,children:p.name})]}):Y.jsx("div",{className:"text-[8px] text-white/35 tracking-widest uppercase mb-1.5",children:p.name}),Y.jsx("div",{className:m?"":"opacity-35 pointer-events-none",children:p.params.map(y=>{const v=Po(u.entry.config,y.path);if(v===void 0)return null;const w=u.values[y.path]??v,_=y.needs?u.values[y.needs]??Po(u.entry.config,y.needs)??0:1;return Y.jsx(FT,{spec:y,inert:!(_>0),value:w,isDefault:u.values[y.path]===void 0,onChange:S=>u.onChange(y.path,S),onReset:()=>u.onReset(y.path)},y.path)})})]},p.name)})})]})})}function kT({layers:a,selectedLayer:e,set:t,onSelect:i,onOpacityChange:s,onRemove:o}){return Y.jsxs("div",{className:"px-3 pt-2 pb-1",children:[Y.jsxs("div",{className:"mb-1.5 flex items-baseline justify-between",children:[Y.jsx("span",{className:"text-[8px] uppercase tracking-widest text-white/35",children:"Layers"}),Y.jsx("span",{className:"text-[8px] text-white/25",children:"L cycles · [ ] fade"})]}),a.map((c,u)=>{const h=u===e,d=t.indexOf(c.pattern);return Y.jsxs("div",{className:`mb-1 rounded px-1.5 py-1 transition-colors ${h?"bg-white/[0.11]":"hover:bg-white/[0.05]"}`,children:[Y.jsxs("div",{className:"flex items-center gap-1.5",children:[Y.jsxs("button",{onClick:()=>i(u),title:h?"Editing this layer":"Edit this layer",className:"flex min-w-0 flex-1 items-center gap-1.5 text-left",children:[Y.jsx("span",{className:`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[8px] ${h?"bg-white text-black":"bg-white/15 text-white/60"}`,children:d===-1?"·":ko(d)}),Y.jsx("span",{className:`truncate text-[9px] ${h?"text-white":"text-white/55"}`,children:ts[c.pattern].short})]}),Y.jsxs("span",{className:"shrink-0 text-[8px] tabular-nums text-white/45",children:[Math.round(c.opacity*100),"%"]}),a.length>1&&Y.jsx("button",{onClick:()=>o(u),title:"Take this layer off",className:"shrink-0 px-0.5 text-[10px] leading-none text-white/25 transition-colors hover:text-white/80",children:"×"})]}),Y.jsx("input",{type:"range","aria-label":`${ts[c.pattern].name} opacity`,className:"vj-slider mt-1 h-1 w-full cursor-pointer appearance-none rounded-full focus:outline-none",min:0,max:1,step:.01,value:c.opacity,onChange:p=>s(u,parseFloat(p.target.value)),onPointerDown:()=>i(u),style:{background:`linear-gradient(to right, rgba(255,255,255,${h?.85:.4}) ${c.opacity*100}%, rgba(255,255,255,0.12) ${c.opacity*100}%)`}})]},`${c.pattern}-${u}`)})]})}const Jg={geometric:{config:_f,groups:[{name:"Shape",params:[{path:"polygon.baseSize",label:"Size",min:20,max:400,step:5},{path:"polygon.strokeWidth",label:"Stroke",min:.5,max:20,step:.5},{path:"complexity.baseSides",label:"Sides",min:3,max:12,step:1,hint:"with no hands"},{path:"complexity.maxSides",label:"Max sides",min:3,max:24,step:1}]},{name:"Layers",params:[{path:"layers.count",label:"Count",min:1,max:20,step:1},{path:"layers.sizeGrowth",label:"Growth",min:0,max:1.5,step:.01},{path:"layers.rotationOffset",label:"Twist",min:0,max:2,step:.01},{path:"layers.baseOpacity",label:"Opacity",min:0,max:1,step:.01},{path:"layers.opacityFade",label:"Fade",min:0,max:.3,step:.005}]},{name:"Motion",params:[{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"},{path:"animation.baseRotationMultiplier",label:"Spin",min:0,max:.1,step:.001}]},{name:"Bridge & clap",params:[{path:"bridge.thickness",label:"Bridge",min:0,max:30,step:.5},{path:"bridge.waveAmplitude",label:"Bridge wave",min:0,max:150,step:1},{path:"vibration.shakeAmountX",label:"Shake X",min:0,max:200,step:1},{path:"vibration.shakeAmountY",label:"Shake Y",min:0,max:200,step:1},{path:"vibration.flashDuration",label:"Flash",min:0,max:3,step:.05}]}]},particles:{config:vf,groups:[{name:"Emission",params:[{path:"limits.maxParticles",label:"Max",min:5,max:500,step:5},{path:"emission.openHandRate",label:"Open hand",min:0,max:1,step:.01},{path:"emission.closedHandRate",label:"Closed hand",min:0,max:1,step:.01},{path:"controls.fadeOutRate",label:"Fade out",min:.005,max:.5,step:.005}]},{name:"Motion",params:[{path:"physics.initialVelocity",label:"Velocity",min:.5,max:20,step:.5},{path:"physics.damping",label:"Damping",min:.8,max:1,step:.005,hint:"1 = never slows"},{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"}]},{name:"Size",params:[{path:"size.baseRange.0",label:"Radius min",min:2,max:300,step:2},{path:"size.baseRange.1",label:"Radius max",min:2,max:400,step:2},{path:"size.growthMultiplier",label:"Grow",min:.2,max:6,step:.1},{path:"size.shrinkMultiplier",label:"Shrink",min:.05,max:2,step:.05},{path:"size.transitionSpeed",label:"Ease",min:.02,max:1,step:.01}]},{name:"Glow",params:[{path:"glow.layers",label:"Layers",min:0,max:8,step:1},{path:"glow.expansion",label:"Spread",min:0,max:2,step:.05},{path:"glow.layerFade",label:"Fade",min:0,max:1,step:.01}]},{name:"Clap",params:[{path:"explosion.particleCount",label:"Burst",min:0,max:300,step:5},{path:"explosion.forceMultiplier",label:"Force",min:0,max:50,step:1},{path:"explosion.sizeMultiplier",label:"Size",min:.2,max:6,step:.1}]}]},ripple:{config:md,groups:[{name:"Hand",params:[{path:"stamp.radius",label:"Size",min:.01,max:.3,step:.005},{path:"stamp.strength",label:"Weight",min:.05,max:1,step:.01},{path:"stamp.fingerScale",label:"Fingers",min:0,max:1,step:.05,hint:"0 = palm only"},{path:"stamp.audioSwell",label:"Bass swell",min:0,max:3,step:.05}]},{name:"Trail",params:[{path:"field.decay",label:"Length",min:.8,max:.998,step:.002,hint:"higher = lingers"},{path:"field.spread",label:"Spread",min:.2,max:8,step:.1}]},{name:"Water",params:[{path:"refraction.amount",label:"Refraction",min:0,max:.4,step:.005},{path:"refraction.dispersion",label:"Dispersion",min:0,max:1.5,step:.05}]},{name:"Gloss",params:[{path:"highlight.amount",label:"Amount",min:0,max:3,step:.05},{path:"highlight.sharpness",label:"Sharpness",min:.5,max:20,step:.5},{path:"highlight.tint",label:"Tint",min:0,max:1,step:.05,hint:"palette into the gloss"}]}]},text:{config:gd,groups:[{name:"Movement",params:[{path:"mode",label:"Mode",min:0,max:4,step:1,labels:["Mask","Radial","Wave","Depth","Scatter"],hint:"each mode brings its own controls"},{path:"motion.handInfluence",label:"Hands",min:0,max:3,step:.05},{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"}]},{name:"Type",params:[{path:"type.fit",label:"Fit",min:.2,max:1.6,step:.02,hint:"word width in its cell"},{path:"type.weight",label:"Weight",min:100,max:900,step:100},{path:"type.tracking",label:"Tracking",min:-.1,max:1.2,step:.01},{path:"type.outline",label:"Outline",min:0,max:1,step:1,hint:"filled or hollow"},{path:"type.strokeWidth",label:"Stroke",min:.5,max:8,step:.5}]},{name:"Grid",visibleWhen:{path:"mode",equals:[0,1,2]},params:[{path:"grid.columns",label:"Columns",min:1,max:40,step:1},{path:"grid.rows",label:"Rows",min:1,max:60,step:1},{path:"grid.spread",label:"Spread",min:.2,max:3,step:.02},{path:"grid.breathe",label:"Breathe",min:0,max:1,step:.02},{path:"grid.breatheSpeed",label:"Breath speed",min:0,max:3,step:.05}]},{name:"Mask",visibleWhen:{path:"mode",equals:[0]},params:[{path:"mask.reach",label:"Reach",min:.02,max:.8,step:.01,hint:"hand size"},{path:"mask.threshold",label:"Threshold",min:.02,max:2,step:.02,hint:"lower fills more"},{path:"mask.softness",label:"Softness",min:0,max:1,step:.02,hint:"0 = hard cut"},{path:"mask.invert",label:"Invert",min:0,max:1,step:1}]},{name:"Radial",visibleWhen:{path:"mode",equals:[1]},params:[{path:"radial.strength",label:"Warp",min:-2,max:3,step:.05,hint:"negative pinches"},{path:"radial.power",label:"Bite",min:.4,max:5,step:.1},{path:"radial.pulse",label:"Pulse",min:0,max:2,step:.05},{path:"radial.pulseSpeed",label:"Pulse speed",min:0,max:3,step:.05}]},{name:"Wave",visibleWhen:{path:"mode",equals:[2]},params:[{path:"wave.amplitude",label:"Amount",min:0,max:.6,step:.01},{path:"wave.frequency",label:"Waves",min:.2,max:8,step:.1},{path:"wave.speed",label:"Speed",min:-4,max:4,step:.05},{path:"wave.scaleWave",label:"Swell",min:0,max:1,step:.02}]},{name:"Depth",visibleWhen:{path:"mode",equals:[3]},params:[{path:"depth.speed",label:"Fly",min:-2,max:2,step:.02},{path:"depth.spread",label:"Open",min:0,max:4,step:.05,hint:"tracking with distance"},{path:"depth.curve",label:"Curve",min:.5,max:4,step:.05},{path:"depth.steps",label:"Rows",min:2,max:40,step:1},{path:"depth.size",label:"Size",min:.02,max:.5,step:.005},{path:"depth.horizon",label:"Horizon",min:-.2,max:.8,step:.01}]},{name:"Scatter",visibleWhen:{path:"mode",equals:[4]},params:[{path:"scatter.amount",label:"Spread",min:0,max:1.5,step:.02,hint:"0 = readable"},{path:"scatter.spiral",label:"Spiral",min:0,max:1,step:1},{path:"scatter.stagger",label:"Stagger",min:0,max:2,step:.05},{path:"scatter.drift",label:"Drift",min:0,max:3,step:.05},{path:"scatter.size",label:"Letter size",min:.02,max:.5,step:.005}]},{name:"Colour",params:[{path:"color.rainbow",label:"Rainbow",min:0,max:1,step:1,hint:"ignores the palette"},{path:"color.step",label:"Hue step",min:0,max:120,step:1},{path:"color.cycleSpeed",label:"Cycle",min:0,max:3,step:.05}]},{name:"Audio",params:[{path:"audio.bassScale",label:"Bass swell",min:0,max:2,step:.05},{path:"audio.beatKick",label:"Beat kick",min:0,max:3,step:.05}]}]},video:{config:xd,groups:[{name:"Frame",params:[{path:"frame.zoom",label:"Zoom",min:.2,max:4,step:.05},{path:"frame.spreadZoom",label:"Spread zoom",min:0,max:3,step:.05},{path:"frame.handDrift",label:"Hand drift",min:0,max:.6,step:.01},{path:"frame.mirror",label:"Mirror",min:0,max:1,step:1}]},{name:"Slice",params:[{path:"slice.count",label:"Bands",min:1,max:60,step:1,hint:"1 = whole frame"},{path:"slice.offset",label:"Shear",min:0,max:.4,step:.005},{path:"slice.speed",label:"Speed",min:0,max:5,step:.05},{path:"slice.beatKick",label:"Beat kick",min:1,max:6,step:.1}]},{name:"Look",params:[{path:"look.tint",label:"Tint",min:0,max:1,step:.02,hint:"palette over the clip"},{path:"look.gain",label:"Gain",min:1,max:3,step:.05},{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"}]}]},mosaic:{config:vd,groups:[{name:"Mark",params:[{path:"mode",label:"Mode",min:0,max:3,step:1,labels:["Letters","Dots","Blocks","Bars"]},{path:"grid.columns",label:"Detail",min:8,max:140,step:1,hint:"cells across"},{path:"grid.fill",label:"Weight",min:.2,max:1.8,step:.05},{path:"grid.cellAspect",label:"Cell shape",min:.4,max:2.5,step:.05,hint:"above 1 = taller"},{path:"grid.spreadDensity",label:"Spread coarsens",min:0,max:1.5,step:.05}]},{name:"Image",params:[{path:"tone.contrast",label:"Contrast",min:.2,max:4,step:.05},{path:"tone.brightness",label:"Brightness",min:-.5,max:.5,step:.02},{path:"tone.floor",label:"Cut",min:0,max:.9,step:.01,hint:"darker cells draw nothing"},{path:"tone.invert",label:"Invert",min:0,max:1,step:1}]},{name:"Letters",visibleWhen:{path:"mode",equals:[0]},params:[{path:"letters.ramp",label:"Glyphs",min:0,max:1,step:1,labels:["Density ramp","Your word"]},{path:"letters.weight",label:"Weight",min:100,max:900,step:100},{path:"letters.outline",label:"Hollow",min:0,max:1,step:1}]},{name:"Shape",visibleWhen:{path:"mode",equals:[1,2,3]},params:[{path:"shape.minimum",label:"Floor",min:0,max:.6,step:.01,hint:"size of the faintest mark"},{path:"shape.rotate",label:"Turn",min:0,max:1,step:.02,hint:"blocks towards diamonds"},{path:"shape.anchor",label:"From the floor",min:0,max:1,step:1,hint:"bars only"}]},{name:"Warp",params:[{path:"warp.handPush",label:"Hand push",min:0,max:.3,step:.005},{path:"warp.ripple",label:"Ripple",min:0,max:2,step:.05},{path:"warp.rippleSpeed",label:"Ripple speed",min:0,max:4,step:.05}]},{name:"Colour",params:[{path:"colour.fromSource",label:"Own colour",min:0,max:1,step:.02,hint:"0 = your palette"},{path:"colour.spread",label:"Palette run",min:1,max:40,step:1},{path:"audio.bassScale",label:"Bass swell",min:0,max:2,step:.05},{path:"audio.beatKick",label:"Beat kick",min:0,max:1.5,step:.05},{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"}]}]},digitalblocks:{config:pd,groups:[{name:"Hands",params:[{path:"chaos.range",label:"Ceiling",min:.05,max:1,step:.01,hint:"how wild it can get"},{path:"chaos.openness",label:"Open hand",min:0,max:1,step:.02},{path:"chaos.velocity",label:"Hand speed",min:0,max:1,step:.02},{path:"chaos.clap",label:"Clap",min:0,max:1,step:.02},{path:"chaos.ease",label:"Ease",min:.005,max:.3,step:.005,hint:"lower = calmer"},{path:"chaos.idle",label:"Idle",min:0,max:.5,step:.01}]},{name:"Motion",params:[{path:"speed.base",label:"Drift",min:0,max:.4,step:.005},{path:"speed.variation",label:"Spread",min:0,max:.5,step:.005},{path:"speed.chaos",label:"Chaos speed",min:0,max:1.5,step:.02}]},{name:"Grid",params:[{path:"strips.base",label:"Columns",min:2,max:60,step:1},{path:"strips.chaos",label:"Columns +",min:0,max:60,step:1},{path:"strips.blocks",label:"Blocks",min:1,max:40,step:1},{path:"strips.blocksChaos",label:"Blocks +",min:0,max:40,step:1}]}]},waves:{config:yf,groups:[{name:"Wave",params:[{path:"waveCount.active",label:"Count",min:1,max:24,step:1,hint:"hands present"},{path:"waveCount.idle",label:"Count idle",min:1,max:24,step:1},{path:"wave.baseAmplitude",label:"Amplitude",min:0,max:400,step:5},{path:"wave.maxAmplitude",label:"Max amp",min:10,max:800,step:10},{path:"wave.baseFrequency",label:"Frequency",min:.001,max:.1,step:.001},{path:"wave.maxFrequency",label:"Max freq",min:.001,max:.2,step:.001}]},{name:"Line",params:[{path:"wave.segments",label:"Segments",min:20,max:600,step:10,hint:"lower = angular"},{path:"wave.lineThickness",label:"Thickness",min:.5,max:20,step:.5},{path:"visual.fillOpacity",label:"Fill",min:0,max:255,step:1}]},{name:"Layers",params:[{path:"layers.primarySpeed",label:"Speed 1",min:0,max:10,step:.1},{path:"layers.secondarySpeed",label:"Speed 2",min:0,max:10,step:.1},{path:"layers.tertiarySpeed",label:"Speed 3",min:0,max:10,step:.1},{path:"layers.secondaryAmplitude",label:"Amp 2",min:0,max:2,step:.01},{path:"layers.tertiaryAmplitude",label:"Amp 3",min:0,max:2,step:.01},{path:"fingerCountSpeed.maxSpeed",label:"Speed cap",min:.1,max:10,step:.1}]},{name:"Hands & focus",params:[{path:"handInfluence.strength",label:"Pull",min:0,max:3,step:.05},{path:"handInfluence.radius",label:"Reach",min:20,max:800,step:10},{path:"focalPoint.baseSize",label:"Dot size",min:0,max:100,step:1},{path:"focalPoint.pulseSpeed",label:"Pulse",min:0,max:20,step:.5},{path:"focalPoint.pulseAmount",label:"Pulse depth",min:0,max:1,step:.01},{path:"focalPoint.glowLayers",label:"Dot glow",min:0,max:10,step:1}]}]}},OT={config:Vo,groups:[{name:"Transition",togglePath:"transition.enabled",params:[{path:"transition.duration",label:"Crossfade",min:.05,max:5,step:.05,hint:"seconds between visuals"}]},{name:"Colour",togglePath:"colour.enabled",params:[{path:"colour.mix",label:"Mix",min:0,max:1,step:.01,hint:"stage opacity"},{path:"colour.hue",label:"Hue",min:-3.14,max:3.14,step:.01,hint:"turns the whole frame"},{path:"colour.saturation",label:"Saturation",min:0,max:2,step:.01,hint:"1 = untouched"}]},{name:"Feedback",togglePath:"feedback.enabled",params:[{path:"feedback.mix",label:"Mix",min:0,max:1,step:.01,hint:"stage opacity"},{path:"feedback.amount",label:"Amount",min:0,max:.99,step:.01,hint:"0 = off"},{needs:"feedback.amount",path:"feedback.zoom",label:"Zoom",min:.9,max:1.1,step:.001,hint:">1 tunnels out"},{needs:"feedback.amount",path:"feedback.rotate",label:"Rotate",min:-.05,max:.05,step:5e-4},{needs:"feedback.amount",path:"feedback.offsetX",label:"Drift X",min:-.02,max:.02,step:5e-4},{needs:"feedback.amount",path:"feedback.offsetY",label:"Drift Y",min:-.02,max:.02,step:5e-4},{path:"feedback.hueShift",label:"Trail hue",min:-.2,max:.2,step:.002,hint:"ages the trail — needs Amount"}]},{name:"Displace",togglePath:"displace.enabled",params:[{path:"displace.mix",label:"Mix",min:0,max:1,step:.01,hint:"stage opacity"},{path:"displace.amount",label:"Amount",min:0,max:.3,step:.002},{path:"displace.scale",label:"Scale",min:.5,max:40,step:.5},{path:"displace.speed",label:"Speed",min:0,max:3,step:.02}]},{name:"Chromatic",togglePath:"rgbSplit.enabled",params:[{path:"rgbSplit.mix",label:"Mix",min:0,max:1,step:.01,hint:"stage opacity"},{path:"rgbSplit.amount",label:"RGB split",min:0,max:.1,step:.001}]},{name:"Kaleidoscope",togglePath:"kaleido.enabled",params:[{path:"kaleido.mix",label:"Mix",min:0,max:1,step:.01,hint:"stage opacity"},{path:"kaleido.segments",label:"Segments",min:0,max:24,step:1,hint:"<2 = off"},{path:"kaleido.spin",label:"Spin",min:-3.14,max:3.14,step:.01}]},{name:"Quantize",togglePath:"quantize.enabled",params:[{path:"quantize.mix",label:"Mix",min:0,max:1,step:.01,hint:"stage opacity"},{path:"quantize.pixel",label:"Pixel size",min:0,max:64,step:1,hint:"<=1 = off"},{path:"quantize.levels",label:"Colour steps",min:0,max:16,step:1,hint:"<2 = off"}]},{name:"Bloom",togglePath:"bloom.enabled",params:[{path:"bloom.mix",label:"Mix",min:0,max:1,step:.01,hint:"stage opacity"},{path:"bloom.amount",label:"Amount",min:0,max:3,step:.05},{path:"bloom.threshold",label:"Threshold",min:0,max:1,step:.01}]}]},Jx=1,ex=0,tx=2;function zT(a){return Math.min(1,.06+a*.94)}function ev(a){return .55+a*.45}function nx(a,e,t){var h;const i=zT(t),s=ev(t),o=e?{x:.5+(e.position.x-.5)/s,y:.5+(e.position.y-.5)/s}:a.position,c=o.x+(a.position.x-o.x)*i,u=o.y+(a.position.y-o.y)*i;return{...a,position:{x:.5+(c-.5)*s,y:.5+(u-.5)*s},velocity:a.velocity===void 0?void 0:a.velocity*t,landmarks:(h=a.landmarks)==null?void 0:h.map(d=>({...d,x:.5+(d.x-.5)*s,y:.5+(d.y-.5)*s}))}}function BT(a,e,t){return t===Jx?a:{...a,left:a.left?nx(a.left,(e==null?void 0:e.left)??null,t):null,right:a.right?nx(a.right,(e==null?void 0:e.right)??null,t):null,clapIntensity:a.clapIntensity===void 0?void 0:a.clapIntensity*t,distanceBetweenHands:a.distanceBetweenHands===void 0?void 0:.4+(a.distanceBetweenHands-.4)*ev(t)}}function Ro(a,e,t){const i=e/100,s=t/100,o=(1-Math.abs(2*s-1))*i,c=o*(1-Math.abs(a/60%2-1)),u=s-o/2;let h=0,d=0,p=0;a<60?[h,d,p]=[o,c,0]:a<120?[h,d,p]=[c,o,0]:a<180?[h,d,p]=[0,o,c]:a<240?[h,d,p]=[0,c,o]:a<300?[h,d,p]=[c,0,o]:[h,d,p]=[o,0,c];const g=m=>Math.round((m+u)*255).toString(16).padStart(2,"0");return`#${g(h)}${g(d)}${g(p)}`}function HT(a,e,t){if(t==="grayscale")return["#FFFFFF","#000000","#FFFFFF","#000000"];if(t==="black")return[Ro(a,e,50),"#FFFFFF",Ro(a,e*.6,70),Ro(a,e*.8,35)];const i=Ro(a,e,50),s=Ro((a+180)%360,e,50);return[i,s,i,s]}function ba(a,e,t){try{const i=localStorage.getItem(a);if(i===null)return e;const s=JSON.parse(i);return t(s)?s:e}catch{return e}}function ya(a,e){try{localStorage.setItem(a,JSON.stringify(e))}catch{}}const yd=(a,e)=>t=>typeof t=="number"&&Number.isFinite(t)&&t>=a&&t<=e;function ix(){return{hue:ba("vj-hue",245,yd(0,360)),saturation:ba("vj-saturation",100,yd(0,100)),colorMode:ba("vj-color-mode","contrast",a=>a==="black"||a==="contrast"||a==="grayscale")}}function VT(){const[a,e]=ge.useState(()=>[{pattern:"geometric",opacity:1,...ix()}]),[t,i]=ge.useState(0),s=(a[t]??a[0]).pattern,o=ge.useCallback(be=>{const We=a.findIndex(De=>De.pattern===be);if(We!==-1){i(We);return}e(De=>De.map((dt,Xt)=>Xt===t?{...dt,pattern:be}:dt))},[a,t]),c=ge.useCallback(be=>{const We=a.findIndex(dt=>dt.pattern===be);if(We!==-1){if(a.length===1)return;e(a.filter((dt,Xt)=>Xt!==We)),i(dt=>dt>We?dt-1:Math.min(dt,a.length-2));return}if(a.length>=v1)return;const De=a[t]??a[0];e([...a,{pattern:be,opacity:_1,hue:De.hue,saturation:De.saturation,colorMode:De.colorMode}])},[a,t]),u=ge.useCallback(()=>{i(be=>(be+1)%a.length)},[a.length]),h=ge.useCallback((be,We)=>{e(De=>De.map((dt,Xt)=>Xt===be?{...dt,opacity:We}:dt))},[]),d=ge.useCallback(be=>{e(We=>We.length===1?We:We.filter((De,dt)=>dt!==be)),i(We=>We>be?We-1:Math.min(We,a.length-2))},[a.length]),p=ge.useCallback(be=>{e(We=>We.map((De,dt)=>dt===t?{...De,opacity:Math.min(1,Math.max(0,Math.round((De.opacity+be)*100)/100))}:De))},[t]),[g,m]=ge.useState(!1),[y,v]=ge.useState(!0),w=a[t]??a[0],{hue:_,saturation:S,colorMode:b}=w;ge.useCallback(be=>{e(We=>We.map((De,dt)=>dt===t?{...De,...be}:De))},[t]);const C=(be,We)=>typeof be=="function"?be(We):be,T=ge.useCallback(be=>{e(We=>We.map((De,dt)=>dt===t?{...De,hue:C(be,De.hue)}:De))},[t]),L=ge.useCallback(be=>{e(We=>We.map((De,dt)=>dt===t?{...De,saturation:C(be,De.saturation)}:De))},[t]),R=ge.useCallback(be=>{e(We=>We.map((De,dt)=>dt===t?{...De,colorMode:C(be,De.colorMode)}:De))},[t]),F=ge.useMemo(()=>a.map(be=>HT(be.hue,be.saturation,be.colorMode)),[a]),E=F[t]??F[0],[I,k]=ge.useState(!1),[U,B]=ge.useState(()=>ba("vj-motion",Jx,yd(ex,tx)));ge.useEffect(()=>{ya("vj-motion",U)},[U]);const K=ge.useCallback(be=>{B(We=>Math.min(tx,Math.max(ex,Math.round((We+be)*100)/100)))},[]),[ie,W]=ge.useState(ST),[ee,V]=ge.useState(null),[G,$]=ge.useState(null),[X,z]=ge.useState("video");ge.useEffect(()=>{MT(ie)},[ie]),ge.useEffect(()=>{let be=null,We=!1;return ET().then(De=>{We||!De||(be=URL.createObjectURL(De.file),V(be),$(De.name),z(Kg(De.file)))}),()=>{We=!0,be&&URL.revokeObjectURL(be)}},[]);const Z=ge.useCallback(be=>{V(We=>(We&&URL.revokeObjectURL(We),be?URL.createObjectURL(be):null)),$(be?be.name:null),z(be?Kg(be):"video"),be?wT(be,be.name).catch(()=>{}):bT().catch(()=>{})},[]),me=ge.useMemo(()=>({text:ie,clipUrl:ee,clipKind:X}),[ie,ee,X]),[Ae,Ee]=ge.useState(!0),[Q,ve]=ge.useState(()=>R0(ba("vj-params",{},()=>!0))),[pe,Oe]=ge.useState(()=>R0(ba("vj-fx",{},()=>!0)).fx??{}),et=ge.useCallback((be,We)=>{Oe(De=>({...De,[be]:We}))},[]),rt=(pe["master.enabled"]??1)>=.5,Dt=ge.useCallback(()=>{Oe(be=>({...be,"master.enabled":(be["master.enabled"]??1)>=.5?0:1}))},[]),gt=ge.useCallback(be=>{Oe(We=>{if(be===void 0)return{};const{[be]:De,...dt}=We;return dt})},[]),At=ge.useCallback((be,We)=>{ve(De=>({...De,[s]:{...De[s],[be]:We}}))},[s]),kt=ge.useCallback(be=>{ve(We=>{if(be===void 0){const{[s]:Xt,...Sr}=We;return Sr}const{[be]:De,...dt}=We[s]??{};return{...We,[s]:dt}})},[s]),vt=ge.useMemo(()=>a.map(be=>Q[be.pattern]),[a,Q]),[_t,Gt]=ge.useState(M1),[fn,te]=ge.useState("library"),[Ft,yt]=ge.useState({left:null,right:null}),[Lt,ze]=ge.useState(null),[Wt,O]=ge.useState(!1),[A,se]=ge.useState(!1),[fe,ye]=ge.useState({bass:0,mid:0,high:0,overall:0,beat:!1,beatIntensity:0}),[Ce,Fe]=ge.useState(.5),[de,_e]=ge.useState(!0),[Be,Ge]=ge.useState(!0),[Re,Pe]=ge.useState(!0),[st,ut]=ge.useState(0),St=Ft.left!==null||Ft.right!==null,j=fn==="vj"&&(A||Ae&&!St);ge.useEffect(()=>{if(!j)return;let be;const We=()=>{ut(Date.now()/1e3),be=requestAnimationFrame(We)};return We(),()=>cancelAnimationFrame(be)},[j]),ge.useEffect(()=>{if(!I)return;const be=setInterval(()=>{T(We=>(We+1)%360)},50);return()=>clearInterval(be)},[I]);const Le=A?{left:{position:{x:.3+Math.sin(st)*.2*fe.mid,y:.5+fe.bass*.3},gesture:fe.overall>.3?"open":"fist",fingerCount:de?Math.max(1,Math.ceil(fe.mid*5)):5,velocity:de?fe.mid:.5},right:{position:{x:.7-Math.sin(st)*.2*fe.mid,y:.5+fe.bass*.3},gesture:fe.overall>.3?"open":"fist",fingerCount:de?Math.max(1,Math.ceil(fe.mid*5)):5,velocity:de?fe.mid:.5},clapping:Re&&fe.beat,clapIntensity:fe.beatIntensity,distanceBetweenHands:.4-fe.bass*.2}:St||!Ae?Ft:Zx(st),xe=ge.useRef(null),He=BT(Le,xe.current,U);xe.current=He,ge.useEffect(()=>{ya("vj-hue",_),ya("vj-saturation",S),ya("vj-color-mode",b)},[_,S,b]),ge.useEffect(()=>{ya("vj-params",Q)},[Q]),ge.useEffect(()=>{ya("vj-fx",{fx:pe})},[pe]),ge.useEffect(()=>{w1(_t)},[_t]);const Ne=ge.useCallback(()=>{_t.length!==0&&(e([{pattern:_t[0],opacity:1,...ix()}]),i(0),te("vj"))},[_t]),Se=ge.useCallback(be=>{if(_t.length===0)return;const We=_t.indexOf(s),dt=We===-1?be==="next"?0:_t.length-1:(We+(be==="next"?1:-1)+_t.length)%_t.length;o(_t[dt])},[s,_t,o]),qe=ge.useRef(null);ge.useEffect(()=>{const be=De=>{if(De.key==="Control"){R("contrast");return}if(De.key==="Alt"){R("grayscale");return}if(De.key==="Meta"){R("black");return}if(De.ctrlKey||De.metaKey||De.altKey)return;if(De.key.toLowerCase()==="c"){m(Xt=>!Xt);return}if(De.key.toLowerCase()==="a"){se(Xt=>!Xt);return}if(De.key.toLowerCase()==="x"){Dt();return}if(De.key.toLowerCase()==="i"){Ee(Xt=>!Xt);return}if(De.key.toLowerCase()==="d"){o("flowfield");return}if(De.key==="Escape"){te("library");return}if(De.key.toLowerCase()==="l"){u();return}if(De.key==="-"){K(-.1);return}if(De.key==="="||De.key==="+"){K(.1);return}if(De.key==="["){p(-.1);return}if(De.key==="]"){p(.1);return}const dt=_t[xf(De.key)];if(dt){if(De.repeat||qe.current)return;qe.current={key:De.key.toLowerCase(),fired:!1,timer:window.setTimeout(()=>{qe.current&&(qe.current.fired=!0),c(dt)},ax)};return}switch(De.key){case"ArrowLeft":De.preventDefault(),Se("prev");break;case"ArrowRight":De.preventDefault(),Se("next");break;case"ArrowUp":De.preventDefault(),L(Xt=>Math.min(100,Xt+5));break;case"ArrowDown":De.preventDefault(),L(Xt=>Math.max(0,Xt-5));break}},We=De=>{const dt=qe.current;if(!dt||dt.key!==De.key.toLowerCase()||(clearTimeout(dt.timer),qe.current=null,dt.fired))return;const Xt=_t[xf(De.key)];Xt&&o(Xt)};return window.addEventListener("keydown",be),window.addEventListener("keyup",We),()=>{window.removeEventListener("keydown",be),window.removeEventListener("keyup",We)}},[_t,Se,Dt,o,c,u,p,K]),ge.useEffect(()=>{const be=We=>{We.preventDefault(),v(De=>!De)};return window.addEventListener("contextmenu",be),()=>window.removeEventListener("contextmenu",be)},[]),ge.useEffect(()=>{(s==="face"||s.startsWith("smokehand"))&&m(!0)},[s]);const ht=()=>{O(!1)},zt=()=>{O(!1)},Rt={...fe,mid:de?fe.mid:0,high:Be?fe.high:0,beat:Re?fe.beat:!1,beatIntensity:Re?fe.beatIntensity:0};return fn==="library"?Y.jsx(NT,{set:_t,onSetChange:Gt,onStart:Ne,text:ie,onTextChange:W,clipName:G,clipUrl:ee,clipKind:X,onClipChange:Z}):Y.jsxs("div",{className:"relative w-screen h-screen overflow-hidden bg-black",children:[Wt&&Y.jsx(I1,{onGrant:ht,onSkip:zt}),Y.jsx(xT,{handData:He,layerColors:F,layers:a,videoElement:Lt,audioData:Rt,layerParams:vt,content:me,motion:U,fxParams:pe}),Y.jsx("div",{className:`absolute top-4 right-4 ${g?"opacity-100":"opacity-0 pointer-events-none"}`,children:Y.jsx(x1,{onVideoReady:ze})}),Lt&&s!=="face"&&Y.jsx(A1,{videoElement:Lt,onHandData:yt}),Y.jsx(vT,{enabled:A,sensitivity:Ce,onAudioData:ye}),y&&Y.jsx(DT,{header:Y.jsx(kT,{layers:a,selectedLayer:t,set:_t,onSelect:i,onOpacityChange:h,onRemove:d}),sections:[...Jg[s]?[{key:"shape",label:"SHAPE",entry:Jg[s],values:Q[s]??{},onChange:At,onReset:kt}]:[],{key:"fx",label:"FX",entry:OT,values:pe,onChange:et,onReset:gt}]}),y&&Y.jsx(b1,{currentPattern:s,onPatternChange:o,layers:a,selectedLayer:t,onPatternHold:c,onLayerCycle:u,showCamera:g,onCameraToggle:()=>m(!g),handData:Ft,selectedColors:E,colorMode:b,hue:_,saturation:S,onHueChange:T,onSaturationChange:L,onColorModeChange:R,autoHueEnabled:I,onAutoHueToggle:()=>k(be=>!be),set:_t,onOpenLibrary:()=>te("library"),audioEnabled:A,onAudioToggle:()=>se(!A),audioSensitivity:Ce,onAudioSensitivityChange:Fe,audioControlSpeed:de,onAudioControlSpeedChange:_e,audioControlDensity:Be,onAudioControlDensityChange:Ge,audioTriggerBeats:Re,onAudioTriggerBeatsChange:Pe,motion:U,onMotionChange:B,idleDrive:Ae,onIdleDriveToggle:()=>Ee(be=>!be),fxEnabled:rt,fxActive:pT(pe),onFxToggle:Dt})]})}const tv=document.getElementById("root");if(!tv)throw new Error("Root element #root not found");W_.createRoot(tv).render(Y.jsx(VT,{}));try{sessionStorage.removeItem("vj-stale-bundle-reload")}catch{}
