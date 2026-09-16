var z1=Object.defineProperty;var B1=(a,e,t)=>e in a?z1(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var F=(a,e,t)=>B1(a,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();var Th={exports:{}},To={},Ch={exports:{}},Ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0;function H1(){if(p0)return Ct;p0=1;var a=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function m(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,w={};function _(O,G,pe){this.props=O,this.context=G,this.refs=w,this.updater=pe||y}_.prototype.isReactComponent={},_.prototype.setState=function(O,G){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,G,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function S(){}S.prototype=_.prototype;function b(O,G,pe){this.props=O,this.context=G,this.refs=w,this.updater=pe||y}var C=b.prototype=new S;C.constructor=b,v(C,_.prototype),C.isPureReactComponent=!0;var E=Array.isArray,I=Object.prototype.hasOwnProperty,A={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function T(O,G,pe){var Me,ye={},te=null,ge=null;if(G!=null)for(Me in G.ref!==void 0&&(ge=G.ref),G.key!==void 0&&(te=""+G.key),G)I.call(G,Me)&&!N.hasOwnProperty(Me)&&(ye[Me]=G[Me]);var me=arguments.length-2;if(me===1)ye.children=pe;else if(1<me){for(var Ae=Array(me),We=0;We<me;We++)Ae[We]=arguments[We+2];ye.children=Ae}if(O&&O.defaultProps)for(Me in me=O.defaultProps,me)ye[Me]===void 0&&(ye[Me]=me[Me]);return{$$typeof:a,type:O,key:te,ref:ge,props:ye,_owner:A.current}}function U(O,G){return{$$typeof:a,type:O.type,key:G,ref:O.ref,props:O.props,_owner:O._owner}}function z(O){return typeof O=="object"&&O!==null&&O.$$typeof===a}function D(O){var G={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(pe){return G[pe]})}var B=/\/+/g;function $(O,G){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):G.toString(36)}function ee(O,G,pe,Me,ye){var te=typeof O;(te==="undefined"||te==="boolean")&&(O=null);var ge=!1;if(O===null)ge=!0;else switch(te){case"string":case"number":ge=!0;break;case"object":switch(O.$$typeof){case a:case e:ge=!0}}if(ge)return ge=O,ye=ye(ge),O=Me===""?"."+$(ge,0):Me,E(ye)?(pe="",O!=null&&(pe=O.replace(B,"$&/")+"/"),ee(ye,G,pe,"",function(We){return We})):ye!=null&&(z(ye)&&(ye=U(ye,pe+(!ye.key||ge&&ge.key===ye.key?"":(""+ye.key).replace(B,"$&/")+"/")+O)),G.push(ye)),1;if(ge=0,Me=Me===""?".":Me+":",E(O))for(var me=0;me<O.length;me++){te=O[me];var Ae=Me+$(te,me);ge+=ee(te,G,pe,Ae,ye)}else if(Ae=m(O),typeof Ae=="function")for(O=Ae.call(O),me=0;!(te=O.next()).done;)te=te.value,Ae=Me+$(te,me++),ge+=ee(te,G,pe,Ae,ye);else if(te==="object")throw G=String(O),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return ge}function V(O,G,pe){if(O==null)return O;var Me=[],ye=0;return ee(O,Me,"","",function(te){return G.call(pe,te,ye++)}),Me}function Z(O){if(O._status===-1){var G=O._result;G=G(),G.then(function(pe){(O._status===0||O._status===-1)&&(O._status=1,O._result=pe)},function(pe){(O._status===0||O._status===-1)&&(O._status=2,O._result=pe)}),O._status===-1&&(O._status=0,O._result=G)}if(O._status===1)return O._result.default;throw O._result}var K={current:null},X={transition:null},re={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:X,ReactCurrentOwner:A};function j(){throw Error("act(...) is not supported in production builds of React.")}return Ct.Children={map:V,forEach:function(O,G,pe){V(O,function(){G.apply(this,arguments)},pe)},count:function(O){var G=0;return V(O,function(){G++}),G},toArray:function(O){return V(O,function(G){return G})||[]},only:function(O){if(!z(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ct.Component=_,Ct.Fragment=t,Ct.Profiler=s,Ct.PureComponent=b,Ct.StrictMode=i,Ct.Suspense=h,Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,Ct.act=j,Ct.cloneElement=function(O,G,pe){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Me=v({},O.props),ye=O.key,te=O.ref,ge=O._owner;if(G!=null){if(G.ref!==void 0&&(te=G.ref,ge=A.current),G.key!==void 0&&(ye=""+G.key),O.type&&O.type.defaultProps)var me=O.type.defaultProps;for(Ae in G)I.call(G,Ae)&&!N.hasOwnProperty(Ae)&&(Me[Ae]=G[Ae]===void 0&&me!==void 0?me[Ae]:G[Ae])}var Ae=arguments.length-2;if(Ae===1)Me.children=pe;else if(1<Ae){me=Array(Ae);for(var We=0;We<Ae;We++)me[We]=arguments[We+2];Me.children=me}return{$$typeof:a,type:O.type,key:ye,ref:te,props:Me,_owner:ge}},Ct.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:o,_context:O},O.Consumer=O},Ct.createElement=T,Ct.createFactory=function(O){var G=T.bind(null,O);return G.type=O,G},Ct.createRef=function(){return{current:null}},Ct.forwardRef=function(O){return{$$typeof:u,render:O}},Ct.isValidElement=z,Ct.lazy=function(O){return{$$typeof:p,_payload:{_status:-1,_result:O},_init:Z}},Ct.memo=function(O,G){return{$$typeof:d,type:O,compare:G===void 0?null:G}},Ct.startTransition=function(O){var G=X.transition;X.transition={};try{O()}finally{X.transition=G}},Ct.unstable_act=j,Ct.useCallback=function(O,G){return K.current.useCallback(O,G)},Ct.useContext=function(O){return K.current.useContext(O)},Ct.useDebugValue=function(){},Ct.useDeferredValue=function(O){return K.current.useDeferredValue(O)},Ct.useEffect=function(O,G){return K.current.useEffect(O,G)},Ct.useId=function(){return K.current.useId()},Ct.useImperativeHandle=function(O,G,pe){return K.current.useImperativeHandle(O,G,pe)},Ct.useInsertionEffect=function(O,G){return K.current.useInsertionEffect(O,G)},Ct.useLayoutEffect=function(O,G){return K.current.useLayoutEffect(O,G)},Ct.useMemo=function(O,G){return K.current.useMemo(O,G)},Ct.useReducer=function(O,G,pe){return K.current.useReducer(O,G,pe)},Ct.useRef=function(O){return K.current.useRef(O)},Ct.useState=function(O){return K.current.useState(O)},Ct.useSyncExternalStore=function(O,G,pe){return K.current.useSyncExternalStore(O,G,pe)},Ct.useTransition=function(){return K.current.useTransition()},Ct.version="18.3.1",Ct}var m0;function Md(){return m0||(m0=1,Ch.exports=H1()),Ch.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0;function V1(){if(g0)return To;g0=1;var a=Md(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(u,h,d){var p,g={},m=null,y=null;d!==void 0&&(m=""+d),h.key!==void 0&&(m=""+h.key),h.ref!==void 0&&(y=h.ref);for(p in h)i.call(h,p)&&!o.hasOwnProperty(p)&&(g[p]=h[p]);if(u&&u.defaultProps)for(p in h=u.defaultProps,h)g[p]===void 0&&(g[p]=h[p]);return{$$typeof:e,type:u,key:m,ref:y,props:g,_owner:s.current}}return To.Fragment=t,To.jsx=c,To.jsxs=c,To}var x0;function G1(){return x0||(x0=1,Th.exports=V1()),Th.exports}var W=G1(),Zl={},Ah={exports:{}},Jn={},Rh={exports:{}},Ph={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v0;function W1(){return v0||(v0=1,(function(a){function e(X,re){var j=X.length;X.push(re);e:for(;0<j;){var O=j-1>>>1,G=X[O];if(0<s(G,re))X[O]=re,X[j]=G,j=O;else break e}}function t(X){return X.length===0?null:X[0]}function i(X){if(X.length===0)return null;var re=X[0],j=X.pop();if(j!==re){X[0]=j;e:for(var O=0,G=X.length,pe=G>>>1;O<pe;){var Me=2*(O+1)-1,ye=X[Me],te=Me+1,ge=X[te];if(0>s(ye,j))te<G&&0>s(ge,ye)?(X[O]=ge,X[te]=j,O=te):(X[O]=ye,X[Me]=j,O=Me);else if(te<G&&0>s(ge,j))X[O]=ge,X[te]=j,O=te;else break e}}return re}function s(X,re){var j=X.sortIndex-re.sortIndex;return j!==0?j:X.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;a.unstable_now=function(){return o.now()}}else{var c=Date,u=c.now();a.unstable_now=function(){return c.now()-u}}var h=[],d=[],p=1,g=null,m=3,y=!1,v=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(X){for(var re=t(d);re!==null;){if(re.callback===null)i(d);else if(re.startTime<=X)i(d),re.sortIndex=re.expirationTime,e(h,re);else break;re=t(d)}}function E(X){if(w=!1,C(X),!v)if(t(h)!==null)v=!0,Z(I);else{var re=t(d);re!==null&&K(E,re.startTime-X)}}function I(X,re){v=!1,w&&(w=!1,S(T),T=-1),y=!0;var j=m;try{for(C(re),g=t(h);g!==null&&(!(g.expirationTime>re)||X&&!D());){var O=g.callback;if(typeof O=="function"){g.callback=null,m=g.priorityLevel;var G=O(g.expirationTime<=re);re=a.unstable_now(),typeof G=="function"?g.callback=G:g===t(h)&&i(h),C(re)}else i(h);g=t(h)}if(g!==null)var pe=!0;else{var Me=t(d);Me!==null&&K(E,Me.startTime-re),pe=!1}return pe}finally{g=null,m=j,y=!1}}var A=!1,N=null,T=-1,U=5,z=-1;function D(){return!(a.unstable_now()-z<U)}function B(){if(N!==null){var X=a.unstable_now();z=X;var re=!0;try{re=N(!0,X)}finally{re?$():(A=!1,N=null)}}else A=!1}var $;if(typeof b=="function")$=function(){b(B)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,V=ee.port2;ee.port1.onmessage=B,$=function(){V.postMessage(null)}}else $=function(){_(B,0)};function Z(X){N=X,A||(A=!0,$())}function K(X,re){T=_(function(){X(a.unstable_now())},re)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(X){X.callback=null},a.unstable_continueExecution=function(){v||y||(v=!0,Z(I))},a.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<X?Math.floor(1e3/X):5},a.unstable_getCurrentPriorityLevel=function(){return m},a.unstable_getFirstCallbackNode=function(){return t(h)},a.unstable_next=function(X){switch(m){case 1:case 2:case 3:var re=3;break;default:re=m}var j=m;m=re;try{return X()}finally{m=j}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(X,re){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var j=m;m=X;try{return re()}finally{m=j}},a.unstable_scheduleCallback=function(X,re,j){var O=a.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?O+j:O):j=O,X){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=j+G,X={id:p++,callback:re,priorityLevel:X,startTime:j,expirationTime:G,sortIndex:-1},j>O?(X.sortIndex=j,e(d,X),t(h)===null&&X===t(d)&&(w?(S(T),T=-1):w=!0,K(E,j-O))):(X.sortIndex=G,e(h,X),v||y||(v=!0,Z(I))),X},a.unstable_shouldYield=D,a.unstable_wrapCallback=function(X){var re=m;return function(){var j=m;m=re;try{return X.apply(this,arguments)}finally{m=j}}}})(Ph)),Ph}var _0;function X1(){return _0||(_0=1,Rh.exports=W1()),Rh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0;function j1(){if(y0)return Jn;y0=1;var a=Md(),e=X1();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function o(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function m(n){return h.call(g,n)?!0:h.call(p,n)?!1:d.test(n)?g[n]=!0:(p[n]=!0,!1)}function y(n,r,l,f){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function v(n,r,l,f){if(r===null||typeof r>"u"||y(n,r,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function w(n,r,l,f,x,M,P){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=f,this.attributeNamespace=x,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=M,this.removeEmptyString=P}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];_[r]=new w(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(S,b);_[r]=new w(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(S,b);_[r]=new w(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(S,b);_[r]=new w(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function C(n,r,l,f){var x=_.hasOwnProperty(r)?_[r]:null;(x!==null?x.type!==0:f||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(v(r,l,x,f)&&(l=null),f||x===null?m(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):x.mustUseProperty?n[x.propertyName]=l===null?x.type===3?!1:"":l:(r=x.attributeName,f=x.attributeNamespace,l===null?n.removeAttribute(r):(x=x.type,l=x===3||x===4&&l===!0?"":""+l,f?n.setAttributeNS(f,r,l):n.setAttribute(r,l))))}var E=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),A=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),D=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),X=Symbol.iterator;function re(n){return n===null||typeof n!="object"?null:(n=X&&n[X]||n["@@iterator"],typeof n=="function"?n:null)}var j=Object.assign,O;function G(n){if(O===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var pe=!1;function Me(n,r){if(!n||pe)return"";pe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(fe){var f=fe}Reflect.construct(n,[],r)}else{try{r.call()}catch(fe){f=fe}n.call(r.prototype)}else{try{throw Error()}catch(fe){f=fe}n()}}catch(fe){if(fe&&f&&typeof fe.stack=="string"){for(var x=fe.stack.split(`
`),M=f.stack.split(`
`),P=x.length-1,H=M.length-1;1<=P&&0<=H&&x[P]!==M[H];)H--;for(;1<=P&&0<=H;P--,H--)if(x[P]!==M[H]){if(P!==1||H!==1)do if(P--,H--,0>H||x[P]!==M[H]){var q=`
`+x[P].replace(" at new "," at ");return n.displayName&&q.includes("<anonymous>")&&(q=q.replace("<anonymous>",n.displayName)),q}while(1<=P&&0<=H);break}}}finally{pe=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?G(n):""}function ye(n){switch(n.tag){case 5:return G(n.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return n=Me(n.type,!1),n;case 11:return n=Me(n.type.render,!1),n;case 1:return n=Me(n.type,!0),n;default:return""}}function te(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case A:return"Portal";case U:return"Profiler";case T:return"StrictMode";case $:return"Suspense";case ee:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case z:return(n._context.displayName||"Context")+".Provider";case B:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case V:return r=n.displayName||null,r!==null?r:te(n.type)||"Memo";case Z:r=n._payload,n=n._init;try{return te(n(r))}catch{}}return null}function ge(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return te(r);case 8:return r===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ae(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function We(n){var r=Ae(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),f=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var x=l.get,M=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return x.call(this)},set:function(P){f=""+P,M.call(this,P)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(P){f=""+P},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function tt(n){n._valueTracker||(n._valueTracker=We(n))}function Pt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),f="";return n&&(f=Ae(n)?n.checked?"true":"false":n.value),n=f,n!==l?(r.setValue(n),!0):!1}function ft(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function st(n,r){var l=r.checked;return j({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Mt(n,r){var l=r.defaultValue==null?"":r.defaultValue,f=r.checked!=null?r.checked:r.defaultChecked;l=me(r.value!=null?r.value:l),n._wrapperState={initialChecked:f,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function dt(n,r){r=r.checked,r!=null&&C(n,"checked",r,!1)}function kt(n,r){dt(n,r);var l=me(r.value),f=r.type;if(l!=null)f==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(f==="submit"||f==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?nn(n,r.type,l):r.hasOwnProperty("defaultValue")&&nn(n,r.type,me(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function It(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var f=r.type;if(!(f!=="submit"&&f!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function nn(n,r,l){(r!=="number"||ft(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var Q=Array.isArray;function Ot(n,r,l,f){if(n=n.options,r){r={};for(var x=0;x<l.length;x++)r["$"+l[x]]=!0;for(l=0;l<n.length;l++)x=r.hasOwnProperty("$"+n[l].value),n[l].selected!==x&&(n[l].selected=x),x&&f&&(n[l].defaultSelected=!0)}else{for(l=""+me(l),r=null,x=0;x<n.length;x++){if(n[x].value===l){n[x].selected=!0,f&&(n[x].defaultSelected=!0);return}r!==null||n[x].disabled||(r=n[x])}r!==null&&(r.selected=!0)}}function vt(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return j({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ft(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(Q(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:me(l)}}function Be(n,r){var l=me(r.value),f=me(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),f!=null&&(n.defaultValue=""+f)}function Wt(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function k(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function R(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?k(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var se,_e=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,f,x){MSApp.execUnsafeLocalFunction(function(){return n(r,l,f,x)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(se=se||document.createElement("div"),se.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=se.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function be(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=["Webkit","ms","Moz","O"];Object.keys(Pe).forEach(function(n){ze.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Pe[r]=Pe[n]})});function de(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Pe.hasOwnProperty(n)&&Pe[n]?(""+r).trim():r+"px"}function Se(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var f=l.indexOf("--")===0,x=de(l,r[l],f);l==="float"&&(l="cssFloat"),f?n.setProperty(l,x):n[l]=x}}var Le=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xe(n,r){if(r){if(Le[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Ue(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ie=null;function at(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var mt=null,xt=null,Y=null;function Ne(n){if(n=uo(n)){if(typeof mt!="function")throw Error(t(280));var r=n.stateNode;r&&(r=fl(r),mt(n.stateNode,n.type,r))}}function xe(n){xt?Y?Y.push(n):Y=[n]:xt=n}function Ve(){if(xt){var n=xt,r=Y;if(Y=xt=null,Ne(n),r)for(n=0;n<r.length;n++)Ne(r[n])}}function ke(n,r){return n(r)}function ve(){}var Ze=!1;function pt(n,r,l){if(Ze)return n(r,l);Ze=!0;try{return ke(n,r,l)}finally{Ze=!1,(xt!==null||Y!==null)&&(ve(),Ve())}}function Bt(n,r){var l=n.stateNode;if(l===null)return null;var f=fl(l);if(f===null)return null;l=f[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(n=n.type,f=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!f;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var bt=!1;if(u)try{var An={};Object.defineProperty(An,"passive",{get:function(){bt=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{bt=!1}function Hn(n,r,l,f,x,M,P,H,q){var fe=Array.prototype.slice.call(arguments,3);try{r.apply(l,fe)}catch(Ce){this.onError(Ce)}}var Ei=!1,Ti=null,ar=!1,Xi=null,Ci={onError:function(n){Ei=!0,Ti=n}};function Rr(n,r,l,f,x,M,P,H,q){Ei=!1,Ti=null,Hn.apply(Ci,arguments)}function ms(n,r,l,f,x,M,P,H,q){if(Rr.apply(this,arguments),Ei){if(Ei){var fe=Ti;Ei=!1,Ti=null}else throw Error(t(198));ar||(ar=!0,Xi=fe)}}function mi(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function ji(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Pr(n){if(mi(n)!==n)throw Error(t(188))}function Lr(n){var r=n.alternate;if(!r){if(r=mi(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,f=r;;){var x=l.return;if(x===null)break;var M=x.alternate;if(M===null){if(f=x.return,f!==null){l=f;continue}break}if(x.child===M.child){for(M=x.child;M;){if(M===l)return Pr(x),n;if(M===f)return Pr(x),r;M=M.sibling}throw Error(t(188))}if(l.return!==f.return)l=x,f=M;else{for(var P=!1,H=x.child;H;){if(H===l){P=!0,l=x,f=M;break}if(H===f){P=!0,f=x,l=M;break}H=H.sibling}if(!P){for(H=M.child;H;){if(H===l){P=!0,l=M,f=x;break}if(H===f){P=!0,f=M,l=x;break}H=H.sibling}if(!P)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function or(n){return n=Lr(n),n!==null?gi(n):null}function gi(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=gi(n);if(r!==null)return r;n=n.sibling}return null}var js=e.unstable_scheduleCallback,qs=e.unstable_cancelCallback,qa=e.unstable_shouldYield,we=e.unstable_requestPaint,Ee=e.unstable_now,Fe=e.unstable_getCurrentPriorityLevel,ot=e.unstable_ImmediatePriority,L=e.unstable_UserBlockingPriority,ie=e.unstable_NormalPriority,he=e.unstable_LowPriority,oe=e.unstable_IdlePriority,le=null,He=null;function $e(n){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(le,n,void 0,(n.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:_t,Je=Math.log,rt=Math.LN2;function _t(n){return n>>>=0,n===0?32:31-(Je(n)/rt|0)|0}var yt=64,nt=4194304;function Lt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Xt(n,r){var l=n.pendingLanes;if(l===0)return 0;var f=0,x=n.suspendedLanes,M=n.pingedLanes,P=l&268435455;if(P!==0){var H=P&~x;H!==0?f=Lt(H):(M&=P,M!==0&&(f=Lt(M)))}else P=l&~x,P!==0?f=Lt(P):M!==0&&(f=Lt(M));if(f===0)return 0;if(r!==0&&r!==f&&(r&x)===0&&(x=f&-f,M=r&-r,x>=M||x===16&&(M&4194240)!==0))return r;if((f&4)!==0&&(f|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=f;0<r;)l=31-Oe(r),x=1<<l,f|=n[l],r&=~x;return f}function Qt(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ht(n,r){for(var l=n.suspendedLanes,f=n.pingedLanes,x=n.expirationTimes,M=n.pendingLanes;0<M;){var P=31-Oe(M),H=1<<P,q=x[P];q===-1?((H&l)===0||(H&f)!==0)&&(x[P]=Qt(H,r)):q<=r&&(n.expiredLanes|=H),M&=~H}}function hn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function je(){var n=yt;return yt<<=1,(yt&4194240)===0&&(yt=64),n}function Rn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function Et(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Oe(r),n[r]=l}function jn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var f=n.eventTimes;for(n=n.expirationTimes;0<l;){var x=31-Oe(l),M=1<<x;r[x]=0,f[x]=-1,n[x]=-1,l&=~M}}function qn(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var f=31-Oe(l),x=1<<f;x&r|n[f]&r&&(n[f]|=r),l&=~x}}var Tt=0;function lr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var zt,Yt,Ai,Vt,Ri,qi=!1,gs=[],Ir=null,Nr=null,Ur=null,Ya=new Map,$a=new Map,Fr=[],ov="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zd(n,r){switch(n){case"focusin":case"focusout":Ir=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":Ur=null;break;case"pointerover":case"pointerout":Ya.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":$a.delete(r.pointerId)}}function Ka(n,r,l,f,x,M){return n===null||n.nativeEvent!==M?(n={blockedOn:r,domEventName:l,eventSystemFlags:f,nativeEvent:M,targetContainers:[x]},r!==null&&(r=uo(r),r!==null&&Yt(r)),n):(n.eventSystemFlags|=f,r=n.targetContainers,x!==null&&r.indexOf(x)===-1&&r.push(x),n)}function lv(n,r,l,f,x){switch(r){case"focusin":return Ir=Ka(Ir,n,r,l,f,x),!0;case"dragenter":return Nr=Ka(Nr,n,r,l,f,x),!0;case"mouseover":return Ur=Ka(Ur,n,r,l,f,x),!0;case"pointerover":var M=x.pointerId;return Ya.set(M,Ka(Ya.get(M)||null,n,r,l,f,x)),!0;case"gotpointercapture":return M=x.pointerId,$a.set(M,Ka($a.get(M)||null,n,r,l,f,x)),!0}return!1}function Qd(n){var r=xs(n.target);if(r!==null){var l=mi(r);if(l!==null){if(r=l.tag,r===13){if(r=ji(l),r!==null){n.blockedOn=r,Ri(n.priority,function(){Ai(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Qo(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Jc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var f=new l.constructor(l.type,l);Ie=f,l.target.dispatchEvent(f),Ie=null}else return r=uo(l),r!==null&&Yt(r),n.blockedOn=l,!1;r.shift()}return!0}function Jd(n,r,l){Qo(n)&&l.delete(r)}function cv(){qi=!1,Ir!==null&&Qo(Ir)&&(Ir=null),Nr!==null&&Qo(Nr)&&(Nr=null),Ur!==null&&Qo(Ur)&&(Ur=null),Ya.forEach(Jd),$a.forEach(Jd)}function Za(n,r){n.blockedOn===r&&(n.blockedOn=null,qi||(qi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,cv)))}function Qa(n){function r(x){return Za(x,n)}if(0<gs.length){Za(gs[0],n);for(var l=1;l<gs.length;l++){var f=gs[l];f.blockedOn===n&&(f.blockedOn=null)}}for(Ir!==null&&Za(Ir,n),Nr!==null&&Za(Nr,n),Ur!==null&&Za(Ur,n),Ya.forEach(r),$a.forEach(r),l=0;l<Fr.length;l++)f=Fr[l],f.blockedOn===n&&(f.blockedOn=null);for(;0<Fr.length&&(l=Fr[0],l.blockedOn===null);)Qd(l),l.blockedOn===null&&Fr.shift()}var Ys=E.ReactCurrentBatchConfig,Jo=!0;function uv(n,r,l,f){var x=Tt,M=Ys.transition;Ys.transition=null;try{Tt=1,Qc(n,r,l,f)}finally{Tt=x,Ys.transition=M}}function hv(n,r,l,f){var x=Tt,M=Ys.transition;Ys.transition=null;try{Tt=4,Qc(n,r,l,f)}finally{Tt=x,Ys.transition=M}}function Qc(n,r,l,f){if(Jo){var x=Jc(n,r,l,f);if(x===null)gu(n,r,f,el,l),Zd(n,f);else if(lv(x,n,r,l,f))f.stopPropagation();else if(Zd(n,f),r&4&&-1<ov.indexOf(n)){for(;x!==null;){var M=uo(x);if(M!==null&&zt(M),M=Jc(n,r,l,f),M===null&&gu(n,r,f,el,l),M===x)break;x=M}x!==null&&f.stopPropagation()}else gu(n,r,f,null,l)}}var el=null;function Jc(n,r,l,f){if(el=null,n=at(f),n=xs(n),n!==null)if(r=mi(n),r===null)n=null;else if(l=r.tag,l===13){if(n=ji(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return el=n,null}function ep(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fe()){case ot:return 1;case L:return 4;case ie:case he:return 16;case oe:return 536870912;default:return 16}default:return 16}}var Dr=null,eu=null,tl=null;function tp(){if(tl)return tl;var n,r=eu,l=r.length,f,x="value"in Dr?Dr.value:Dr.textContent,M=x.length;for(n=0;n<l&&r[n]===x[n];n++);var P=l-n;for(f=1;f<=P&&r[l-f]===x[M-f];f++);return tl=x.slice(n,1<f?1-f:void 0)}function nl(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function il(){return!0}function np(){return!1}function ri(n){function r(l,f,x,M,P){this._reactName=l,this._targetInst=x,this.type=f,this.nativeEvent=M,this.target=P,this.currentTarget=null;for(var H in n)n.hasOwnProperty(H)&&(l=n[H],this[H]=l?l(M):M[H]);return this.isDefaultPrevented=(M.defaultPrevented!=null?M.defaultPrevented:M.returnValue===!1)?il:np,this.isPropagationStopped=np,this}return j(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=il)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=il)},persist:function(){},isPersistent:il}),r}var $s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tu=ri($s),Ja=j({},$s,{view:0,detail:0}),fv=ri(Ja),nu,iu,eo,rl=j({},Ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==eo&&(eo&&n.type==="mousemove"?(nu=n.screenX-eo.screenX,iu=n.screenY-eo.screenY):iu=nu=0,eo=n),nu)},movementY:function(n){return"movementY"in n?n.movementY:iu}}),ip=ri(rl),dv=j({},rl,{dataTransfer:0}),pv=ri(dv),mv=j({},Ja,{relatedTarget:0}),ru=ri(mv),gv=j({},$s,{animationName:0,elapsedTime:0,pseudoElement:0}),xv=ri(gv),vv=j({},$s,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),_v=ri(vv),yv=j({},$s,{data:0}),rp=ri(yv),Sv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=wv[n])?!!r[n]:!1}function su(){return bv}var Ev=j({},Ja,{key:function(n){if(n.key){var r=Sv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=nl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Mv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(n){return n.type==="keypress"?nl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?nl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Tv=ri(Ev),Cv=j({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sp=ri(Cv),Av=j({},Ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),Rv=ri(Av),Pv=j({},$s,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lv=ri(Pv),Iv=j({},rl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Nv=ri(Iv),Uv=[9,13,27,32],au=u&&"CompositionEvent"in window,to=null;u&&"documentMode"in document&&(to=document.documentMode);var Fv=u&&"TextEvent"in window&&!to,ap=u&&(!au||to&&8<to&&11>=to),op=" ",lp=!1;function cp(n,r){switch(n){case"keyup":return Uv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function up(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ks=!1;function Dv(n,r){switch(n){case"compositionend":return up(r);case"keypress":return r.which!==32?null:(lp=!0,op);case"textInput":return n=r.data,n===op&&lp?null:n;default:return null}}function kv(n,r){if(Ks)return n==="compositionend"||!au&&cp(n,r)?(n=tp(),tl=eu=Dr=null,Ks=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return ap&&r.locale!=="ko"?null:r.data;default:return null}}var Ov={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hp(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Ov[n.type]:r==="textarea"}function fp(n,r,l,f){xe(f),r=cl(r,"onChange"),0<r.length&&(l=new tu("onChange","change",null,l,f),n.push({event:l,listeners:r}))}var no=null,io=null;function zv(n){Pp(n,0)}function sl(n){var r=ta(n);if(Pt(r))return n}function Bv(n,r){if(n==="change")return r}var dp=!1;if(u){var ou;if(u){var lu="oninput"in document;if(!lu){var pp=document.createElement("div");pp.setAttribute("oninput","return;"),lu=typeof pp.oninput=="function"}ou=lu}else ou=!1;dp=ou&&(!document.documentMode||9<document.documentMode)}function mp(){no&&(no.detachEvent("onpropertychange",gp),io=no=null)}function gp(n){if(n.propertyName==="value"&&sl(io)){var r=[];fp(r,io,n,at(n)),pt(zv,r)}}function Hv(n,r,l){n==="focusin"?(mp(),no=r,io=l,no.attachEvent("onpropertychange",gp)):n==="focusout"&&mp()}function Vv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return sl(io)}function Gv(n,r){if(n==="click")return sl(r)}function Wv(n,r){if(n==="input"||n==="change")return sl(r)}function Xv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Pi=typeof Object.is=="function"?Object.is:Xv;function ro(n,r){if(Pi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),f=Object.keys(r);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var x=l[f];if(!h.call(r,x)||!Pi(n[x],r[x]))return!1}return!0}function xp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function vp(n,r){var l=xp(n);n=0;for(var f;l;){if(l.nodeType===3){if(f=n+l.textContent.length,n<=r&&f>=r)return{node:l,offset:r-n};n=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=xp(l)}}function _p(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?_p(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function yp(){for(var n=window,r=ft();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=ft(n.document)}return r}function cu(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function jv(n){var r=yp(),l=n.focusedElem,f=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&_p(l.ownerDocument.documentElement,l)){if(f!==null&&cu(l)){if(r=f.start,n=f.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var x=l.textContent.length,M=Math.min(f.start,x);f=f.end===void 0?M:Math.min(f.end,x),!n.extend&&M>f&&(x=f,f=M,M=x),x=vp(l,M);var P=vp(l,f);x&&P&&(n.rangeCount!==1||n.anchorNode!==x.node||n.anchorOffset!==x.offset||n.focusNode!==P.node||n.focusOffset!==P.offset)&&(r=r.createRange(),r.setStart(x.node,x.offset),n.removeAllRanges(),M>f?(n.addRange(r),n.extend(P.node,P.offset)):(r.setEnd(P.node,P.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var qv=u&&"documentMode"in document&&11>=document.documentMode,Zs=null,uu=null,so=null,hu=!1;function Sp(n,r,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;hu||Zs==null||Zs!==ft(f)||(f=Zs,"selectionStart"in f&&cu(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),so&&ro(so,f)||(so=f,f=cl(uu,"onSelect"),0<f.length&&(r=new tu("onSelect","select",null,r,l),n.push({event:r,listeners:f}),r.target=Zs)))}function al(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Qs={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},fu={},Mp={};u&&(Mp=document.createElement("div").style,"AnimationEvent"in window||(delete Qs.animationend.animation,delete Qs.animationiteration.animation,delete Qs.animationstart.animation),"TransitionEvent"in window||delete Qs.transitionend.transition);function ol(n){if(fu[n])return fu[n];if(!Qs[n])return n;var r=Qs[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in Mp)return fu[n]=r[l];return n}var wp=ol("animationend"),bp=ol("animationiteration"),Ep=ol("animationstart"),Tp=ol("transitionend"),Cp=new Map,Ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(n,r){Cp.set(n,r),o(r,[n])}for(var du=0;du<Ap.length;du++){var pu=Ap[du],Yv=pu.toLowerCase(),$v=pu[0].toUpperCase()+pu.slice(1);kr(Yv,"on"+$v)}kr(wp,"onAnimationEnd"),kr(bp,"onAnimationIteration"),kr(Ep,"onAnimationStart"),kr("dblclick","onDoubleClick"),kr("focusin","onFocus"),kr("focusout","onBlur"),kr(Tp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));function Rp(n,r,l){var f=n.type||"unknown-event";n.currentTarget=l,ms(f,r,void 0,n),n.currentTarget=null}function Pp(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var f=n[l],x=f.event;f=f.listeners;e:{var M=void 0;if(r)for(var P=f.length-1;0<=P;P--){var H=f[P],q=H.instance,fe=H.currentTarget;if(H=H.listener,q!==M&&x.isPropagationStopped())break e;Rp(x,H,fe),M=q}else for(P=0;P<f.length;P++){if(H=f[P],q=H.instance,fe=H.currentTarget,H=H.listener,q!==M&&x.isPropagationStopped())break e;Rp(x,H,fe),M=q}}}if(ar)throw n=Xi,ar=!1,Xi=null,n}function $t(n,r){var l=r[Mu];l===void 0&&(l=r[Mu]=new Set);var f=n+"__bubble";l.has(f)||(Lp(r,n,2,!1),l.add(f))}function mu(n,r,l){var f=0;r&&(f|=4),Lp(l,n,f,r)}var ll="_reactListening"+Math.random().toString(36).slice(2);function oo(n){if(!n[ll]){n[ll]=!0,i.forEach(function(l){l!=="selectionchange"&&(Kv.has(l)||mu(l,!1,n),mu(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[ll]||(r[ll]=!0,mu("selectionchange",!1,r))}}function Lp(n,r,l,f){switch(ep(r)){case 1:var x=uv;break;case 4:x=hv;break;default:x=Qc}l=x.bind(null,r,l,n),x=void 0,!bt||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(x=!0),f?x!==void 0?n.addEventListener(r,l,{capture:!0,passive:x}):n.addEventListener(r,l,!0):x!==void 0?n.addEventListener(r,l,{passive:x}):n.addEventListener(r,l,!1)}function gu(n,r,l,f,x){var M=f;if((r&1)===0&&(r&2)===0&&f!==null)e:for(;;){if(f===null)return;var P=f.tag;if(P===3||P===4){var H=f.stateNode.containerInfo;if(H===x||H.nodeType===8&&H.parentNode===x)break;if(P===4)for(P=f.return;P!==null;){var q=P.tag;if((q===3||q===4)&&(q=P.stateNode.containerInfo,q===x||q.nodeType===8&&q.parentNode===x))return;P=P.return}for(;H!==null;){if(P=xs(H),P===null)return;if(q=P.tag,q===5||q===6){f=M=P;continue e}H=H.parentNode}}f=f.return}pt(function(){var fe=M,Ce=at(l),Re=[];e:{var Te=Cp.get(n);if(Te!==void 0){var qe=tu,Qe=n;switch(n){case"keypress":if(nl(l)===0)break e;case"keydown":case"keyup":qe=Tv;break;case"focusin":Qe="focus",qe=ru;break;case"focusout":Qe="blur",qe=ru;break;case"beforeblur":case"afterblur":qe=ru;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":qe=ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":qe=pv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":qe=Rv;break;case wp:case bp:case Ep:qe=xv;break;case Tp:qe=Lv;break;case"scroll":qe=fv;break;case"wheel":qe=Nv;break;case"copy":case"cut":case"paste":qe=_v;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":qe=sp}var et=(r&4)!==0,an=!et&&n==="scroll",ae=et?Te!==null?Te+"Capture":null:Te;et=[];for(var ne=fe,ce;ne!==null;){ce=ne;var De=ce.stateNode;if(ce.tag===5&&De!==null&&(ce=De,ae!==null&&(De=Bt(ne,ae),De!=null&&et.push(lo(ne,De,ce)))),an)break;ne=ne.return}0<et.length&&(Te=new qe(Te,Qe,null,l,Ce),Re.push({event:Te,listeners:et}))}}if((r&7)===0){e:{if(Te=n==="mouseover"||n==="pointerover",qe=n==="mouseout"||n==="pointerout",Te&&l!==Ie&&(Qe=l.relatedTarget||l.fromElement)&&(xs(Qe)||Qe[cr]))break e;if((qe||Te)&&(Te=Ce.window===Ce?Ce:(Te=Ce.ownerDocument)?Te.defaultView||Te.parentWindow:window,qe?(Qe=l.relatedTarget||l.toElement,qe=fe,Qe=Qe?xs(Qe):null,Qe!==null&&(an=mi(Qe),Qe!==an||Qe.tag!==5&&Qe.tag!==6)&&(Qe=null)):(qe=null,Qe=fe),qe!==Qe)){if(et=ip,De="onMouseLeave",ae="onMouseEnter",ne="mouse",(n==="pointerout"||n==="pointerover")&&(et=sp,De="onPointerLeave",ae="onPointerEnter",ne="pointer"),an=qe==null?Te:ta(qe),ce=Qe==null?Te:ta(Qe),Te=new et(De,ne+"leave",qe,l,Ce),Te.target=an,Te.relatedTarget=ce,De=null,xs(Ce)===fe&&(et=new et(ae,ne+"enter",Qe,l,Ce),et.target=ce,et.relatedTarget=an,De=et),an=De,qe&&Qe)t:{for(et=qe,ae=Qe,ne=0,ce=et;ce;ce=Js(ce))ne++;for(ce=0,De=ae;De;De=Js(De))ce++;for(;0<ne-ce;)et=Js(et),ne--;for(;0<ce-ne;)ae=Js(ae),ce--;for(;ne--;){if(et===ae||ae!==null&&et===ae.alternate)break t;et=Js(et),ae=Js(ae)}et=null}else et=null;qe!==null&&Ip(Re,Te,qe,et,!1),Qe!==null&&an!==null&&Ip(Re,an,Qe,et,!0)}}e:{if(Te=fe?ta(fe):window,qe=Te.nodeName&&Te.nodeName.toLowerCase(),qe==="select"||qe==="input"&&Te.type==="file")var it=Bv;else if(hp(Te))if(dp)it=Wv;else{it=Vv;var lt=Hv}else(qe=Te.nodeName)&&qe.toLowerCase()==="input"&&(Te.type==="checkbox"||Te.type==="radio")&&(it=Gv);if(it&&(it=it(n,fe))){fp(Re,it,l,Ce);break e}lt&&lt(n,Te,fe),n==="focusout"&&(lt=Te._wrapperState)&&lt.controlled&&Te.type==="number"&&nn(Te,"number",Te.value)}switch(lt=fe?ta(fe):window,n){case"focusin":(hp(lt)||lt.contentEditable==="true")&&(Zs=lt,uu=fe,so=null);break;case"focusout":so=uu=Zs=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,Sp(Re,l,Ce);break;case"selectionchange":if(qv)break;case"keydown":case"keyup":Sp(Re,l,Ce)}var ct;if(au)e:{switch(n){case"compositionstart":var gt="onCompositionStart";break e;case"compositionend":gt="onCompositionEnd";break e;case"compositionupdate":gt="onCompositionUpdate";break e}gt=void 0}else Ks?cp(n,l)&&(gt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(gt="onCompositionStart");gt&&(ap&&l.locale!=="ko"&&(Ks||gt!=="onCompositionStart"?gt==="onCompositionEnd"&&Ks&&(ct=tp()):(Dr=Ce,eu="value"in Dr?Dr.value:Dr.textContent,Ks=!0)),lt=cl(fe,gt),0<lt.length&&(gt=new rp(gt,n,null,l,Ce),Re.push({event:gt,listeners:lt}),ct?gt.data=ct:(ct=up(l),ct!==null&&(gt.data=ct)))),(ct=Fv?Dv(n,l):kv(n,l))&&(fe=cl(fe,"onBeforeInput"),0<fe.length&&(Ce=new rp("onBeforeInput","beforeinput",null,l,Ce),Re.push({event:Ce,listeners:fe}),Ce.data=ct))}Pp(Re,r)})}function lo(n,r,l){return{instance:n,listener:r,currentTarget:l}}function cl(n,r){for(var l=r+"Capture",f=[];n!==null;){var x=n,M=x.stateNode;x.tag===5&&M!==null&&(x=M,M=Bt(n,l),M!=null&&f.unshift(lo(n,M,x)),M=Bt(n,r),M!=null&&f.push(lo(n,M,x))),n=n.return}return f}function Js(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ip(n,r,l,f,x){for(var M=r._reactName,P=[];l!==null&&l!==f;){var H=l,q=H.alternate,fe=H.stateNode;if(q!==null&&q===f)break;H.tag===5&&fe!==null&&(H=fe,x?(q=Bt(l,M),q!=null&&P.unshift(lo(l,q,H))):x||(q=Bt(l,M),q!=null&&P.push(lo(l,q,H)))),l=l.return}P.length!==0&&n.push({event:r,listeners:P})}var Zv=/\r\n?/g,Qv=/\u0000|\uFFFD/g;function Np(n){return(typeof n=="string"?n:""+n).replace(Zv,`
`).replace(Qv,"")}function ul(n,r,l){if(r=Np(r),Np(n)!==r&&l)throw Error(t(425))}function hl(){}var xu=null,vu=null;function _u(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var yu=typeof setTimeout=="function"?setTimeout:void 0,Jv=typeof clearTimeout=="function"?clearTimeout:void 0,Up=typeof Promise=="function"?Promise:void 0,e1=typeof queueMicrotask=="function"?queueMicrotask:typeof Up<"u"?function(n){return Up.resolve(null).then(n).catch(t1)}:yu;function t1(n){setTimeout(function(){throw n})}function Su(n,r){var l=r,f=0;do{var x=l.nextSibling;if(n.removeChild(l),x&&x.nodeType===8)if(l=x.data,l==="/$"){if(f===0){n.removeChild(x),Qa(r);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=x}while(l);Qa(r)}function Or(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Fp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var ea=Math.random().toString(36).slice(2),Yi="__reactFiber$"+ea,co="__reactProps$"+ea,cr="__reactContainer$"+ea,Mu="__reactEvents$"+ea,n1="__reactListeners$"+ea,i1="__reactHandles$"+ea;function xs(n){var r=n[Yi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[cr]||l[Yi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=Fp(n);n!==null;){if(l=n[Yi])return l;n=Fp(n)}return r}n=l,l=n.parentNode}return null}function uo(n){return n=n[Yi]||n[cr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ta(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function fl(n){return n[co]||null}var wu=[],na=-1;function zr(n){return{current:n}}function Kt(n){0>na||(n.current=wu[na],wu[na]=null,na--)}function jt(n,r){na++,wu[na]=n.current,n.current=r}var Br={},Nn=zr(Br),Yn=zr(!1),vs=Br;function ia(n,r){var l=n.type.contextTypes;if(!l)return Br;var f=n.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===r)return f.__reactInternalMemoizedMaskedChildContext;var x={},M;for(M in l)x[M]=r[M];return f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=x),x}function $n(n){return n=n.childContextTypes,n!=null}function dl(){Kt(Yn),Kt(Nn)}function Dp(n,r,l){if(Nn.current!==Br)throw Error(t(168));jt(Nn,r),jt(Yn,l)}function kp(n,r,l){var f=n.stateNode;if(r=r.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var x in f)if(!(x in r))throw Error(t(108,ge(n)||"Unknown",x));return j({},l,f)}function pl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Br,vs=Nn.current,jt(Nn,n),jt(Yn,Yn.current),!0}function Op(n,r,l){var f=n.stateNode;if(!f)throw Error(t(169));l?(n=kp(n,r,vs),f.__reactInternalMemoizedMergedChildContext=n,Kt(Yn),Kt(Nn),jt(Nn,n)):Kt(Yn),jt(Yn,l)}var ur=null,ml=!1,bu=!1;function zp(n){ur===null?ur=[n]:ur.push(n)}function r1(n){ml=!0,zp(n)}function Hr(){if(!bu&&ur!==null){bu=!0;var n=0,r=Tt;try{var l=ur;for(Tt=1;n<l.length;n++){var f=l[n];do f=f(!0);while(f!==null)}ur=null,ml=!1}catch(x){throw ur!==null&&(ur=ur.slice(n+1)),js(ot,Hr),x}finally{Tt=r,bu=!1}}return null}var ra=[],sa=0,gl=null,xl=0,xi=[],vi=0,_s=null,hr=1,fr="";function ys(n,r){ra[sa++]=xl,ra[sa++]=gl,gl=n,xl=r}function Bp(n,r,l){xi[vi++]=hr,xi[vi++]=fr,xi[vi++]=_s,_s=n;var f=hr;n=fr;var x=32-Oe(f)-1;f&=~(1<<x),l+=1;var M=32-Oe(r)+x;if(30<M){var P=x-x%5;M=(f&(1<<P)-1).toString(32),f>>=P,x-=P,hr=1<<32-Oe(r)+x|l<<x|f,fr=M+n}else hr=1<<M|l<<x|f,fr=n}function Eu(n){n.return!==null&&(ys(n,1),Bp(n,1,0))}function Tu(n){for(;n===gl;)gl=ra[--sa],ra[sa]=null,xl=ra[--sa],ra[sa]=null;for(;n===_s;)_s=xi[--vi],xi[vi]=null,fr=xi[--vi],xi[vi]=null,hr=xi[--vi],xi[vi]=null}var si=null,ai=null,Jt=!1,Li=null;function Hp(n,r){var l=Mi(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Vp(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,si=n,ai=Or(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,si=n,ai=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=_s!==null?{id:hr,overflow:fr}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=Mi(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,si=n,ai=null,!0):!1;default:return!1}}function Cu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Au(n){if(Jt){var r=ai;if(r){var l=r;if(!Vp(n,r)){if(Cu(n))throw Error(t(418));r=Or(l.nextSibling);var f=si;r&&Vp(n,r)?Hp(f,l):(n.flags=n.flags&-4097|2,Jt=!1,si=n)}}else{if(Cu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Jt=!1,si=n}}}function Gp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;si=n}function vl(n){if(n!==si)return!1;if(!Jt)return Gp(n),Jt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!_u(n.type,n.memoizedProps)),r&&(r=ai)){if(Cu(n))throw Wp(),Error(t(418));for(;r;)Hp(n,r),r=Or(r.nextSibling)}if(Gp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){ai=Or(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}ai=null}}else ai=si?Or(n.stateNode.nextSibling):null;return!0}function Wp(){for(var n=ai;n;)n=Or(n.nextSibling)}function aa(){ai=si=null,Jt=!1}function Ru(n){Li===null?Li=[n]:Li.push(n)}var s1=E.ReactCurrentBatchConfig;function ho(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,n));var x=f,M=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===M?r.ref:(r=function(P){var H=x.refs;P===null?delete H[M]:H[M]=P},r._stringRef=M,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function _l(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Xp(n){var r=n._init;return r(n._payload)}function jp(n){function r(ae,ne){if(n){var ce=ae.deletions;ce===null?(ae.deletions=[ne],ae.flags|=16):ce.push(ne)}}function l(ae,ne){if(!n)return null;for(;ne!==null;)r(ae,ne),ne=ne.sibling;return null}function f(ae,ne){for(ae=new Map;ne!==null;)ne.key!==null?ae.set(ne.key,ne):ae.set(ne.index,ne),ne=ne.sibling;return ae}function x(ae,ne){return ae=$r(ae,ne),ae.index=0,ae.sibling=null,ae}function M(ae,ne,ce){return ae.index=ce,n?(ce=ae.alternate,ce!==null?(ce=ce.index,ce<ne?(ae.flags|=2,ne):ce):(ae.flags|=2,ne)):(ae.flags|=1048576,ne)}function P(ae){return n&&ae.alternate===null&&(ae.flags|=2),ae}function H(ae,ne,ce,De){return ne===null||ne.tag!==6?(ne=yh(ce,ae.mode,De),ne.return=ae,ne):(ne=x(ne,ce),ne.return=ae,ne)}function q(ae,ne,ce,De){var it=ce.type;return it===N?Ce(ae,ne,ce.props.children,De,ce.key):ne!==null&&(ne.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===Z&&Xp(it)===ne.type)?(De=x(ne,ce.props),De.ref=ho(ae,ne,ce),De.return=ae,De):(De=Gl(ce.type,ce.key,ce.props,null,ae.mode,De),De.ref=ho(ae,ne,ce),De.return=ae,De)}function fe(ae,ne,ce,De){return ne===null||ne.tag!==4||ne.stateNode.containerInfo!==ce.containerInfo||ne.stateNode.implementation!==ce.implementation?(ne=Sh(ce,ae.mode,De),ne.return=ae,ne):(ne=x(ne,ce.children||[]),ne.return=ae,ne)}function Ce(ae,ne,ce,De,it){return ne===null||ne.tag!==7?(ne=As(ce,ae.mode,De,it),ne.return=ae,ne):(ne=x(ne,ce),ne.return=ae,ne)}function Re(ae,ne,ce){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return ne=yh(""+ne,ae.mode,ce),ne.return=ae,ne;if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case I:return ce=Gl(ne.type,ne.key,ne.props,null,ae.mode,ce),ce.ref=ho(ae,null,ne),ce.return=ae,ce;case A:return ne=Sh(ne,ae.mode,ce),ne.return=ae,ne;case Z:var De=ne._init;return Re(ae,De(ne._payload),ce)}if(Q(ne)||re(ne))return ne=As(ne,ae.mode,ce,null),ne.return=ae,ne;_l(ae,ne)}return null}function Te(ae,ne,ce,De){var it=ne!==null?ne.key:null;if(typeof ce=="string"&&ce!==""||typeof ce=="number")return it!==null?null:H(ae,ne,""+ce,De);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case I:return ce.key===it?q(ae,ne,ce,De):null;case A:return ce.key===it?fe(ae,ne,ce,De):null;case Z:return it=ce._init,Te(ae,ne,it(ce._payload),De)}if(Q(ce)||re(ce))return it!==null?null:Ce(ae,ne,ce,De,null);_l(ae,ce)}return null}function qe(ae,ne,ce,De,it){if(typeof De=="string"&&De!==""||typeof De=="number")return ae=ae.get(ce)||null,H(ne,ae,""+De,it);if(typeof De=="object"&&De!==null){switch(De.$$typeof){case I:return ae=ae.get(De.key===null?ce:De.key)||null,q(ne,ae,De,it);case A:return ae=ae.get(De.key===null?ce:De.key)||null,fe(ne,ae,De,it);case Z:var lt=De._init;return qe(ae,ne,ce,lt(De._payload),it)}if(Q(De)||re(De))return ae=ae.get(ce)||null,Ce(ne,ae,De,it,null);_l(ne,De)}return null}function Qe(ae,ne,ce,De){for(var it=null,lt=null,ct=ne,gt=ne=0,bn=null;ct!==null&&gt<ce.length;gt++){ct.index>gt?(bn=ct,ct=null):bn=ct.sibling;var Dt=Te(ae,ct,ce[gt],De);if(Dt===null){ct===null&&(ct=bn);break}n&&ct&&Dt.alternate===null&&r(ae,ct),ne=M(Dt,ne,gt),lt===null?it=Dt:lt.sibling=Dt,lt=Dt,ct=bn}if(gt===ce.length)return l(ae,ct),Jt&&ys(ae,gt),it;if(ct===null){for(;gt<ce.length;gt++)ct=Re(ae,ce[gt],De),ct!==null&&(ne=M(ct,ne,gt),lt===null?it=ct:lt.sibling=ct,lt=ct);return Jt&&ys(ae,gt),it}for(ct=f(ae,ct);gt<ce.length;gt++)bn=qe(ct,ae,gt,ce[gt],De),bn!==null&&(n&&bn.alternate!==null&&ct.delete(bn.key===null?gt:bn.key),ne=M(bn,ne,gt),lt===null?it=bn:lt.sibling=bn,lt=bn);return n&&ct.forEach(function(Kr){return r(ae,Kr)}),Jt&&ys(ae,gt),it}function et(ae,ne,ce,De){var it=re(ce);if(typeof it!="function")throw Error(t(150));if(ce=it.call(ce),ce==null)throw Error(t(151));for(var lt=it=null,ct=ne,gt=ne=0,bn=null,Dt=ce.next();ct!==null&&!Dt.done;gt++,Dt=ce.next()){ct.index>gt?(bn=ct,ct=null):bn=ct.sibling;var Kr=Te(ae,ct,Dt.value,De);if(Kr===null){ct===null&&(ct=bn);break}n&&ct&&Kr.alternate===null&&r(ae,ct),ne=M(Kr,ne,gt),lt===null?it=Kr:lt.sibling=Kr,lt=Kr,ct=bn}if(Dt.done)return l(ae,ct),Jt&&ys(ae,gt),it;if(ct===null){for(;!Dt.done;gt++,Dt=ce.next())Dt=Re(ae,Dt.value,De),Dt!==null&&(ne=M(Dt,ne,gt),lt===null?it=Dt:lt.sibling=Dt,lt=Dt);return Jt&&ys(ae,gt),it}for(ct=f(ae,ct);!Dt.done;gt++,Dt=ce.next())Dt=qe(ct,ae,gt,Dt.value,De),Dt!==null&&(n&&Dt.alternate!==null&&ct.delete(Dt.key===null?gt:Dt.key),ne=M(Dt,ne,gt),lt===null?it=Dt:lt.sibling=Dt,lt=Dt);return n&&ct.forEach(function(O1){return r(ae,O1)}),Jt&&ys(ae,gt),it}function an(ae,ne,ce,De){if(typeof ce=="object"&&ce!==null&&ce.type===N&&ce.key===null&&(ce=ce.props.children),typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case I:e:{for(var it=ce.key,lt=ne;lt!==null;){if(lt.key===it){if(it=ce.type,it===N){if(lt.tag===7){l(ae,lt.sibling),ne=x(lt,ce.props.children),ne.return=ae,ae=ne;break e}}else if(lt.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===Z&&Xp(it)===lt.type){l(ae,lt.sibling),ne=x(lt,ce.props),ne.ref=ho(ae,lt,ce),ne.return=ae,ae=ne;break e}l(ae,lt);break}else r(ae,lt);lt=lt.sibling}ce.type===N?(ne=As(ce.props.children,ae.mode,De,ce.key),ne.return=ae,ae=ne):(De=Gl(ce.type,ce.key,ce.props,null,ae.mode,De),De.ref=ho(ae,ne,ce),De.return=ae,ae=De)}return P(ae);case A:e:{for(lt=ce.key;ne!==null;){if(ne.key===lt)if(ne.tag===4&&ne.stateNode.containerInfo===ce.containerInfo&&ne.stateNode.implementation===ce.implementation){l(ae,ne.sibling),ne=x(ne,ce.children||[]),ne.return=ae,ae=ne;break e}else{l(ae,ne);break}else r(ae,ne);ne=ne.sibling}ne=Sh(ce,ae.mode,De),ne.return=ae,ae=ne}return P(ae);case Z:return lt=ce._init,an(ae,ne,lt(ce._payload),De)}if(Q(ce))return Qe(ae,ne,ce,De);if(re(ce))return et(ae,ne,ce,De);_l(ae,ce)}return typeof ce=="string"&&ce!==""||typeof ce=="number"?(ce=""+ce,ne!==null&&ne.tag===6?(l(ae,ne.sibling),ne=x(ne,ce),ne.return=ae,ae=ne):(l(ae,ne),ne=yh(ce,ae.mode,De),ne.return=ae,ae=ne),P(ae)):l(ae,ne)}return an}var oa=jp(!0),qp=jp(!1),yl=zr(null),Sl=null,la=null,Pu=null;function Lu(){Pu=la=Sl=null}function Iu(n){var r=yl.current;Kt(yl),n._currentValue=r}function Nu(n,r,l){for(;n!==null;){var f=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,f!==null&&(f.childLanes|=r)):f!==null&&(f.childLanes&r)!==r&&(f.childLanes|=r),n===l)break;n=n.return}}function ca(n,r){Sl=n,Pu=la=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Kn=!0),n.firstContext=null)}function _i(n){var r=n._currentValue;if(Pu!==n)if(n={context:n,memoizedValue:r,next:null},la===null){if(Sl===null)throw Error(t(308));la=n,Sl.dependencies={lanes:0,firstContext:n}}else la=la.next=n;return r}var Ss=null;function Uu(n){Ss===null?Ss=[n]:Ss.push(n)}function Yp(n,r,l,f){var x=r.interleaved;return x===null?(l.next=l,Uu(r)):(l.next=x.next,x.next=l),r.interleaved=l,dr(n,f)}function dr(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Vr=!1;function Fu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $p(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function pr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Gr(n,r,l){var f=n.updateQueue;if(f===null)return null;if(f=f.shared,(Nt&2)!==0){var x=f.pending;return x===null?r.next=r:(r.next=x.next,x.next=r),f.pending=r,dr(n,l)}return x=f.interleaved,x===null?(r.next=r,Uu(f)):(r.next=x.next,x.next=r),f.interleaved=r,dr(n,l)}function Ml(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,qn(n,l)}}function Kp(n,r){var l=n.updateQueue,f=n.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var x=null,M=null;if(l=l.firstBaseUpdate,l!==null){do{var P={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};M===null?x=M=P:M=M.next=P,l=l.next}while(l!==null);M===null?x=M=r:M=M.next=r}else x=M=r;l={baseState:f.baseState,firstBaseUpdate:x,lastBaseUpdate:M,shared:f.shared,effects:f.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function wl(n,r,l,f){var x=n.updateQueue;Vr=!1;var M=x.firstBaseUpdate,P=x.lastBaseUpdate,H=x.shared.pending;if(H!==null){x.shared.pending=null;var q=H,fe=q.next;q.next=null,P===null?M=fe:P.next=fe,P=q;var Ce=n.alternate;Ce!==null&&(Ce=Ce.updateQueue,H=Ce.lastBaseUpdate,H!==P&&(H===null?Ce.firstBaseUpdate=fe:H.next=fe,Ce.lastBaseUpdate=q))}if(M!==null){var Re=x.baseState;P=0,Ce=fe=q=null,H=M;do{var Te=H.lane,qe=H.eventTime;if((f&Te)===Te){Ce!==null&&(Ce=Ce.next={eventTime:qe,lane:0,tag:H.tag,payload:H.payload,callback:H.callback,next:null});e:{var Qe=n,et=H;switch(Te=r,qe=l,et.tag){case 1:if(Qe=et.payload,typeof Qe=="function"){Re=Qe.call(qe,Re,Te);break e}Re=Qe;break e;case 3:Qe.flags=Qe.flags&-65537|128;case 0:if(Qe=et.payload,Te=typeof Qe=="function"?Qe.call(qe,Re,Te):Qe,Te==null)break e;Re=j({},Re,Te);break e;case 2:Vr=!0}}H.callback!==null&&H.lane!==0&&(n.flags|=64,Te=x.effects,Te===null?x.effects=[H]:Te.push(H))}else qe={eventTime:qe,lane:Te,tag:H.tag,payload:H.payload,callback:H.callback,next:null},Ce===null?(fe=Ce=qe,q=Re):Ce=Ce.next=qe,P|=Te;if(H=H.next,H===null){if(H=x.shared.pending,H===null)break;Te=H,H=Te.next,Te.next=null,x.lastBaseUpdate=Te,x.shared.pending=null}}while(!0);if(Ce===null&&(q=Re),x.baseState=q,x.firstBaseUpdate=fe,x.lastBaseUpdate=Ce,r=x.shared.interleaved,r!==null){x=r;do P|=x.lane,x=x.next;while(x!==r)}else M===null&&(x.shared.lanes=0);bs|=P,n.lanes=P,n.memoizedState=Re}}function Zp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var f=n[r],x=f.callback;if(x!==null){if(f.callback=null,f=l,typeof x!="function")throw Error(t(191,x));x.call(f)}}}var fo={},$i=zr(fo),po=zr(fo),mo=zr(fo);function Ms(n){if(n===fo)throw Error(t(174));return n}function Du(n,r){switch(jt(mo,r),jt(po,n),jt($i,fo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:R(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=R(r,n)}Kt($i),jt($i,r)}function ua(){Kt($i),Kt(po),Kt(mo)}function Qp(n){Ms(mo.current);var r=Ms($i.current),l=R(r,n.type);r!==l&&(jt(po,n),jt($i,l))}function ku(n){po.current===n&&(Kt($i),Kt(po))}var en=zr(0);function bl(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ou=[];function zu(){for(var n=0;n<Ou.length;n++)Ou[n]._workInProgressVersionPrimary=null;Ou.length=0}var El=E.ReactCurrentDispatcher,Bu=E.ReactCurrentBatchConfig,ws=0,tn=null,xn=null,Mn=null,Tl=!1,go=!1,xo=0,a1=0;function Un(){throw Error(t(321))}function Hu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!Pi(n[l],r[l]))return!1;return!0}function Vu(n,r,l,f,x,M){if(ws=M,tn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,El.current=n===null||n.memoizedState===null?u1:h1,n=l(f,x),go){M=0;do{if(go=!1,xo=0,25<=M)throw Error(t(301));M+=1,Mn=xn=null,r.updateQueue=null,El.current=f1,n=l(f,x)}while(go)}if(El.current=Rl,r=xn!==null&&xn.next!==null,ws=0,Mn=xn=tn=null,Tl=!1,r)throw Error(t(300));return n}function Gu(){var n=xo!==0;return xo=0,n}function Ki(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Mn===null?tn.memoizedState=Mn=n:Mn=Mn.next=n,Mn}function yi(){if(xn===null){var n=tn.alternate;n=n!==null?n.memoizedState:null}else n=xn.next;var r=Mn===null?tn.memoizedState:Mn.next;if(r!==null)Mn=r,xn=n;else{if(n===null)throw Error(t(310));xn=n,n={memoizedState:xn.memoizedState,baseState:xn.baseState,baseQueue:xn.baseQueue,queue:xn.queue,next:null},Mn===null?tn.memoizedState=Mn=n:Mn=Mn.next=n}return Mn}function vo(n,r){return typeof r=="function"?r(n):r}function Wu(n){var r=yi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=xn,x=f.baseQueue,M=l.pending;if(M!==null){if(x!==null){var P=x.next;x.next=M.next,M.next=P}f.baseQueue=x=M,l.pending=null}if(x!==null){M=x.next,f=f.baseState;var H=P=null,q=null,fe=M;do{var Ce=fe.lane;if((ws&Ce)===Ce)q!==null&&(q=q.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),f=fe.hasEagerState?fe.eagerState:n(f,fe.action);else{var Re={lane:Ce,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};q===null?(H=q=Re,P=f):q=q.next=Re,tn.lanes|=Ce,bs|=Ce}fe=fe.next}while(fe!==null&&fe!==M);q===null?P=f:q.next=H,Pi(f,r.memoizedState)||(Kn=!0),r.memoizedState=f,r.baseState=P,r.baseQueue=q,l.lastRenderedState=f}if(n=l.interleaved,n!==null){x=n;do M=x.lane,tn.lanes|=M,bs|=M,x=x.next;while(x!==n)}else x===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Xu(n){var r=yi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=l.dispatch,x=l.pending,M=r.memoizedState;if(x!==null){l.pending=null;var P=x=x.next;do M=n(M,P.action),P=P.next;while(P!==x);Pi(M,r.memoizedState)||(Kn=!0),r.memoizedState=M,r.baseQueue===null&&(r.baseState=M),l.lastRenderedState=M}return[M,f]}function Jp(){}function em(n,r){var l=tn,f=yi(),x=r(),M=!Pi(f.memoizedState,x);if(M&&(f.memoizedState=x,Kn=!0),f=f.queue,ju(im.bind(null,l,f,n),[n]),f.getSnapshot!==r||M||Mn!==null&&Mn.memoizedState.tag&1){if(l.flags|=2048,_o(9,nm.bind(null,l,f,x,r),void 0,null),wn===null)throw Error(t(349));(ws&30)!==0||tm(l,r,x)}return x}function tm(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=tn.updateQueue,r===null?(r={lastEffect:null,stores:null},tn.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function nm(n,r,l,f){r.value=l,r.getSnapshot=f,rm(r)&&sm(n)}function im(n,r,l){return l(function(){rm(r)&&sm(n)})}function rm(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!Pi(n,l)}catch{return!0}}function sm(n){var r=dr(n,1);r!==null&&Fi(r,n,1,-1)}function am(n){var r=Ki();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:n},r.queue=n,n=n.dispatch=c1.bind(null,tn,n),[r.memoizedState,n]}function _o(n,r,l,f){return n={tag:n,create:r,destroy:l,deps:f,next:null},r=tn.updateQueue,r===null?(r={lastEffect:null,stores:null},tn.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(f=l.next,l.next=n,n.next=f,r.lastEffect=n)),n}function om(){return yi().memoizedState}function Cl(n,r,l,f){var x=Ki();tn.flags|=n,x.memoizedState=_o(1|r,l,void 0,f===void 0?null:f)}function Al(n,r,l,f){var x=yi();f=f===void 0?null:f;var M=void 0;if(xn!==null){var P=xn.memoizedState;if(M=P.destroy,f!==null&&Hu(f,P.deps)){x.memoizedState=_o(r,l,M,f);return}}tn.flags|=n,x.memoizedState=_o(1|r,l,M,f)}function lm(n,r){return Cl(8390656,8,n,r)}function ju(n,r){return Al(2048,8,n,r)}function cm(n,r){return Al(4,2,n,r)}function um(n,r){return Al(4,4,n,r)}function hm(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function fm(n,r,l){return l=l!=null?l.concat([n]):null,Al(4,4,hm.bind(null,r,n),l)}function qu(){}function dm(n,r){var l=yi();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&Hu(r,f[1])?f[0]:(l.memoizedState=[n,r],n)}function pm(n,r){var l=yi();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&Hu(r,f[1])?f[0]:(n=n(),l.memoizedState=[n,r],n)}function mm(n,r,l){return(ws&21)===0?(n.baseState&&(n.baseState=!1,Kn=!0),n.memoizedState=l):(Pi(l,r)||(l=je(),tn.lanes|=l,bs|=l,n.baseState=!0),r)}function o1(n,r){var l=Tt;Tt=l!==0&&4>l?l:4,n(!0);var f=Bu.transition;Bu.transition={};try{n(!1),r()}finally{Tt=l,Bu.transition=f}}function gm(){return yi().memoizedState}function l1(n,r,l){var f=qr(n);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},xm(n))vm(r,l);else if(l=Yp(n,r,l,f),l!==null){var x=Gn();Fi(l,n,f,x),_m(l,r,f)}}function c1(n,r,l){var f=qr(n),x={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(xm(n))vm(r,x);else{var M=n.alternate;if(n.lanes===0&&(M===null||M.lanes===0)&&(M=r.lastRenderedReducer,M!==null))try{var P=r.lastRenderedState,H=M(P,l);if(x.hasEagerState=!0,x.eagerState=H,Pi(H,P)){var q=r.interleaved;q===null?(x.next=x,Uu(r)):(x.next=q.next,q.next=x),r.interleaved=x;return}}catch{}finally{}l=Yp(n,r,x,f),l!==null&&(x=Gn(),Fi(l,n,f,x),_m(l,r,f))}}function xm(n){var r=n.alternate;return n===tn||r!==null&&r===tn}function vm(n,r){go=Tl=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function _m(n,r,l){if((l&4194240)!==0){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,qn(n,l)}}var Rl={readContext:_i,useCallback:Un,useContext:Un,useEffect:Un,useImperativeHandle:Un,useInsertionEffect:Un,useLayoutEffect:Un,useMemo:Un,useReducer:Un,useRef:Un,useState:Un,useDebugValue:Un,useDeferredValue:Un,useTransition:Un,useMutableSource:Un,useSyncExternalStore:Un,useId:Un,unstable_isNewReconciler:!1},u1={readContext:_i,useCallback:function(n,r){return Ki().memoizedState=[n,r===void 0?null:r],n},useContext:_i,useEffect:lm,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,Cl(4194308,4,hm.bind(null,r,n),l)},useLayoutEffect:function(n,r){return Cl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Cl(4,2,n,r)},useMemo:function(n,r){var l=Ki();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var f=Ki();return r=l!==void 0?l(r):r,f.memoizedState=f.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},f.queue=n,n=n.dispatch=l1.bind(null,tn,n),[f.memoizedState,n]},useRef:function(n){var r=Ki();return n={current:n},r.memoizedState=n},useState:am,useDebugValue:qu,useDeferredValue:function(n){return Ki().memoizedState=n},useTransition:function(){var n=am(!1),r=n[0];return n=o1.bind(null,n[1]),Ki().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var f=tn,x=Ki();if(Jt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),wn===null)throw Error(t(349));(ws&30)!==0||tm(f,r,l)}x.memoizedState=l;var M={value:l,getSnapshot:r};return x.queue=M,lm(im.bind(null,f,M,n),[n]),f.flags|=2048,_o(9,nm.bind(null,f,M,l,r),void 0,null),l},useId:function(){var n=Ki(),r=wn.identifierPrefix;if(Jt){var l=fr,f=hr;l=(f&~(1<<32-Oe(f)-1)).toString(32)+l,r=":"+r+"R"+l,l=xo++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=a1++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},h1={readContext:_i,useCallback:dm,useContext:_i,useEffect:ju,useImperativeHandle:fm,useInsertionEffect:cm,useLayoutEffect:um,useMemo:pm,useReducer:Wu,useRef:om,useState:function(){return Wu(vo)},useDebugValue:qu,useDeferredValue:function(n){var r=yi();return mm(r,xn.memoizedState,n)},useTransition:function(){var n=Wu(vo)[0],r=yi().memoizedState;return[n,r]},useMutableSource:Jp,useSyncExternalStore:em,useId:gm,unstable_isNewReconciler:!1},f1={readContext:_i,useCallback:dm,useContext:_i,useEffect:ju,useImperativeHandle:fm,useInsertionEffect:cm,useLayoutEffect:um,useMemo:pm,useReducer:Xu,useRef:om,useState:function(){return Xu(vo)},useDebugValue:qu,useDeferredValue:function(n){var r=yi();return xn===null?r.memoizedState=n:mm(r,xn.memoizedState,n)},useTransition:function(){var n=Xu(vo)[0],r=yi().memoizedState;return[n,r]},useMutableSource:Jp,useSyncExternalStore:em,useId:gm,unstable_isNewReconciler:!1};function Ii(n,r){if(n&&n.defaultProps){r=j({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Yu(n,r,l,f){r=n.memoizedState,l=l(f,r),l=l==null?r:j({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Pl={isMounted:function(n){return(n=n._reactInternals)?mi(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var f=Gn(),x=qr(n),M=pr(f,x);M.payload=r,l!=null&&(M.callback=l),r=Gr(n,M,x),r!==null&&(Fi(r,n,x,f),Ml(r,n,x))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var f=Gn(),x=qr(n),M=pr(f,x);M.tag=1,M.payload=r,l!=null&&(M.callback=l),r=Gr(n,M,x),r!==null&&(Fi(r,n,x,f),Ml(r,n,x))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Gn(),f=qr(n),x=pr(l,f);x.tag=2,r!=null&&(x.callback=r),r=Gr(n,x,f),r!==null&&(Fi(r,n,f,l),Ml(r,n,f))}};function ym(n,r,l,f,x,M,P){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(f,M,P):r.prototype&&r.prototype.isPureReactComponent?!ro(l,f)||!ro(x,M):!0}function Sm(n,r,l){var f=!1,x=Br,M=r.contextType;return typeof M=="object"&&M!==null?M=_i(M):(x=$n(r)?vs:Nn.current,f=r.contextTypes,M=(f=f!=null)?ia(n,x):Br),r=new r(l,M),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Pl,n.stateNode=r,r._reactInternals=n,f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=x,n.__reactInternalMemoizedMaskedChildContext=M),r}function Mm(n,r,l,f){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,f),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,f),r.state!==n&&Pl.enqueueReplaceState(r,r.state,null)}function $u(n,r,l,f){var x=n.stateNode;x.props=l,x.state=n.memoizedState,x.refs={},Fu(n);var M=r.contextType;typeof M=="object"&&M!==null?x.context=_i(M):(M=$n(r)?vs:Nn.current,x.context=ia(n,M)),x.state=n.memoizedState,M=r.getDerivedStateFromProps,typeof M=="function"&&(Yu(n,r,M,l),x.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof x.getSnapshotBeforeUpdate=="function"||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(r=x.state,typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount(),r!==x.state&&Pl.enqueueReplaceState(x,x.state,null),wl(n,l,x,f),x.state=n.memoizedState),typeof x.componentDidMount=="function"&&(n.flags|=4194308)}function ha(n,r){try{var l="",f=r;do l+=ye(f),f=f.return;while(f);var x=l}catch(M){x=`
Error generating stack: `+M.message+`
`+M.stack}return{value:n,source:r,stack:x,digest:null}}function Ku(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Zu(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var d1=typeof WeakMap=="function"?WeakMap:Map;function wm(n,r,l){l=pr(-1,l),l.tag=3,l.payload={element:null};var f=r.value;return l.callback=function(){kl||(kl=!0,fh=f),Zu(n,r)},l}function bm(n,r,l){l=pr(-1,l),l.tag=3;var f=n.type.getDerivedStateFromError;if(typeof f=="function"){var x=r.value;l.payload=function(){return f(x)},l.callback=function(){Zu(n,r)}}var M=n.stateNode;return M!==null&&typeof M.componentDidCatch=="function"&&(l.callback=function(){Zu(n,r),typeof f!="function"&&(Xr===null?Xr=new Set([this]):Xr.add(this));var P=r.stack;this.componentDidCatch(r.value,{componentStack:P!==null?P:""})}),l}function Em(n,r,l){var f=n.pingCache;if(f===null){f=n.pingCache=new d1;var x=new Set;f.set(r,x)}else x=f.get(r),x===void 0&&(x=new Set,f.set(r,x));x.has(l)||(x.add(l),n=C1.bind(null,n,r,l),r.then(n,n))}function Tm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Cm(n,r,l,f,x){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=pr(-1,1),r.tag=2,Gr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=x,n)}var p1=E.ReactCurrentOwner,Kn=!1;function Vn(n,r,l,f){r.child=n===null?qp(r,null,l,f):oa(r,n.child,l,f)}function Am(n,r,l,f,x){l=l.render;var M=r.ref;return ca(r,x),f=Vu(n,r,l,f,M,x),l=Gu(),n!==null&&!Kn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~x,mr(n,r,x)):(Jt&&l&&Eu(r),r.flags|=1,Vn(n,r,f,x),r.child)}function Rm(n,r,l,f,x){if(n===null){var M=l.type;return typeof M=="function"&&!_h(M)&&M.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=M,Pm(n,r,M,f,x)):(n=Gl(l.type,null,f,r,r.mode,x),n.ref=r.ref,n.return=r,r.child=n)}if(M=n.child,(n.lanes&x)===0){var P=M.memoizedProps;if(l=l.compare,l=l!==null?l:ro,l(P,f)&&n.ref===r.ref)return mr(n,r,x)}return r.flags|=1,n=$r(M,f),n.ref=r.ref,n.return=r,r.child=n}function Pm(n,r,l,f,x){if(n!==null){var M=n.memoizedProps;if(ro(M,f)&&n.ref===r.ref)if(Kn=!1,r.pendingProps=f=M,(n.lanes&x)!==0)(n.flags&131072)!==0&&(Kn=!0);else return r.lanes=n.lanes,mr(n,r,x)}return Qu(n,r,l,f,x)}function Lm(n,r,l){var f=r.pendingProps,x=f.children,M=n!==null?n.memoizedState:null;if(f.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},jt(da,oi),oi|=l;else{if((l&1073741824)===0)return n=M!==null?M.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,jt(da,oi),oi|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=M!==null?M.baseLanes:l,jt(da,oi),oi|=f}else M!==null?(f=M.baseLanes|l,r.memoizedState=null):f=l,jt(da,oi),oi|=f;return Vn(n,r,x,l),r.child}function Im(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Qu(n,r,l,f,x){var M=$n(l)?vs:Nn.current;return M=ia(r,M),ca(r,x),l=Vu(n,r,l,f,M,x),f=Gu(),n!==null&&!Kn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~x,mr(n,r,x)):(Jt&&f&&Eu(r),r.flags|=1,Vn(n,r,l,x),r.child)}function Nm(n,r,l,f,x){if($n(l)){var M=!0;pl(r)}else M=!1;if(ca(r,x),r.stateNode===null)Il(n,r),Sm(r,l,f),$u(r,l,f,x),f=!0;else if(n===null){var P=r.stateNode,H=r.memoizedProps;P.props=H;var q=P.context,fe=l.contextType;typeof fe=="object"&&fe!==null?fe=_i(fe):(fe=$n(l)?vs:Nn.current,fe=ia(r,fe));var Ce=l.getDerivedStateFromProps,Re=typeof Ce=="function"||typeof P.getSnapshotBeforeUpdate=="function";Re||typeof P.UNSAFE_componentWillReceiveProps!="function"&&typeof P.componentWillReceiveProps!="function"||(H!==f||q!==fe)&&Mm(r,P,f,fe),Vr=!1;var Te=r.memoizedState;P.state=Te,wl(r,f,P,x),q=r.memoizedState,H!==f||Te!==q||Yn.current||Vr?(typeof Ce=="function"&&(Yu(r,l,Ce,f),q=r.memoizedState),(H=Vr||ym(r,l,H,f,Te,q,fe))?(Re||typeof P.UNSAFE_componentWillMount!="function"&&typeof P.componentWillMount!="function"||(typeof P.componentWillMount=="function"&&P.componentWillMount(),typeof P.UNSAFE_componentWillMount=="function"&&P.UNSAFE_componentWillMount()),typeof P.componentDidMount=="function"&&(r.flags|=4194308)):(typeof P.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=f,r.memoizedState=q),P.props=f,P.state=q,P.context=fe,f=H):(typeof P.componentDidMount=="function"&&(r.flags|=4194308),f=!1)}else{P=r.stateNode,$p(n,r),H=r.memoizedProps,fe=r.type===r.elementType?H:Ii(r.type,H),P.props=fe,Re=r.pendingProps,Te=P.context,q=l.contextType,typeof q=="object"&&q!==null?q=_i(q):(q=$n(l)?vs:Nn.current,q=ia(r,q));var qe=l.getDerivedStateFromProps;(Ce=typeof qe=="function"||typeof P.getSnapshotBeforeUpdate=="function")||typeof P.UNSAFE_componentWillReceiveProps!="function"&&typeof P.componentWillReceiveProps!="function"||(H!==Re||Te!==q)&&Mm(r,P,f,q),Vr=!1,Te=r.memoizedState,P.state=Te,wl(r,f,P,x);var Qe=r.memoizedState;H!==Re||Te!==Qe||Yn.current||Vr?(typeof qe=="function"&&(Yu(r,l,qe,f),Qe=r.memoizedState),(fe=Vr||ym(r,l,fe,f,Te,Qe,q)||!1)?(Ce||typeof P.UNSAFE_componentWillUpdate!="function"&&typeof P.componentWillUpdate!="function"||(typeof P.componentWillUpdate=="function"&&P.componentWillUpdate(f,Qe,q),typeof P.UNSAFE_componentWillUpdate=="function"&&P.UNSAFE_componentWillUpdate(f,Qe,q)),typeof P.componentDidUpdate=="function"&&(r.flags|=4),typeof P.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof P.componentDidUpdate!="function"||H===n.memoizedProps&&Te===n.memoizedState||(r.flags|=4),typeof P.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&Te===n.memoizedState||(r.flags|=1024),r.memoizedProps=f,r.memoizedState=Qe),P.props=f,P.state=Qe,P.context=q,f=fe):(typeof P.componentDidUpdate!="function"||H===n.memoizedProps&&Te===n.memoizedState||(r.flags|=4),typeof P.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&Te===n.memoizedState||(r.flags|=1024),f=!1)}return Ju(n,r,l,f,M,x)}function Ju(n,r,l,f,x,M){Im(n,r);var P=(r.flags&128)!==0;if(!f&&!P)return x&&Op(r,l,!1),mr(n,r,M);f=r.stateNode,p1.current=r;var H=P&&typeof l.getDerivedStateFromError!="function"?null:f.render();return r.flags|=1,n!==null&&P?(r.child=oa(r,n.child,null,M),r.child=oa(r,null,H,M)):Vn(n,r,H,M),r.memoizedState=f.state,x&&Op(r,l,!0),r.child}function Um(n){var r=n.stateNode;r.pendingContext?Dp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Dp(n,r.context,!1),Du(n,r.containerInfo)}function Fm(n,r,l,f,x){return aa(),Ru(x),r.flags|=256,Vn(n,r,l,f),r.child}var eh={dehydrated:null,treeContext:null,retryLane:0};function th(n){return{baseLanes:n,cachePool:null,transitions:null}}function Dm(n,r,l){var f=r.pendingProps,x=en.current,M=!1,P=(r.flags&128)!==0,H;if((H=P)||(H=n!==null&&n.memoizedState===null?!1:(x&2)!==0),H?(M=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(x|=1),jt(en,x&1),n===null)return Au(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(P=f.children,n=f.fallback,M?(f=r.mode,M=r.child,P={mode:"hidden",children:P},(f&1)===0&&M!==null?(M.childLanes=0,M.pendingProps=P):M=Wl(P,f,0,null),n=As(n,f,l,null),M.return=r,n.return=r,M.sibling=n,r.child=M,r.child.memoizedState=th(l),r.memoizedState=eh,n):nh(r,P));if(x=n.memoizedState,x!==null&&(H=x.dehydrated,H!==null))return m1(n,r,P,f,H,x,l);if(M){M=f.fallback,P=r.mode,x=n.child,H=x.sibling;var q={mode:"hidden",children:f.children};return(P&1)===0&&r.child!==x?(f=r.child,f.childLanes=0,f.pendingProps=q,r.deletions=null):(f=$r(x,q),f.subtreeFlags=x.subtreeFlags&14680064),H!==null?M=$r(H,M):(M=As(M,P,l,null),M.flags|=2),M.return=r,f.return=r,f.sibling=M,r.child=f,f=M,M=r.child,P=n.child.memoizedState,P=P===null?th(l):{baseLanes:P.baseLanes|l,cachePool:null,transitions:P.transitions},M.memoizedState=P,M.childLanes=n.childLanes&~l,r.memoizedState=eh,f}return M=n.child,n=M.sibling,f=$r(M,{mode:"visible",children:f.children}),(r.mode&1)===0&&(f.lanes=l),f.return=r,f.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=f,r.memoizedState=null,f}function nh(n,r){return r=Wl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Ll(n,r,l,f){return f!==null&&Ru(f),oa(r,n.child,null,l),n=nh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function m1(n,r,l,f,x,M,P){if(l)return r.flags&256?(r.flags&=-257,f=Ku(Error(t(422))),Ll(n,r,P,f)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(M=f.fallback,x=r.mode,f=Wl({mode:"visible",children:f.children},x,0,null),M=As(M,x,P,null),M.flags|=2,f.return=r,M.return=r,f.sibling=M,r.child=f,(r.mode&1)!==0&&oa(r,n.child,null,P),r.child.memoizedState=th(P),r.memoizedState=eh,M);if((r.mode&1)===0)return Ll(n,r,P,null);if(x.data==="$!"){if(f=x.nextSibling&&x.nextSibling.dataset,f)var H=f.dgst;return f=H,M=Error(t(419)),f=Ku(M,f,void 0),Ll(n,r,P,f)}if(H=(P&n.childLanes)!==0,Kn||H){if(f=wn,f!==null){switch(P&-P){case 4:x=2;break;case 16:x=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:x=32;break;case 536870912:x=268435456;break;default:x=0}x=(x&(f.suspendedLanes|P))!==0?0:x,x!==0&&x!==M.retryLane&&(M.retryLane=x,dr(n,x),Fi(f,n,x,-1))}return vh(),f=Ku(Error(t(421))),Ll(n,r,P,f)}return x.data==="$?"?(r.flags|=128,r.child=n.child,r=A1.bind(null,n),x._reactRetry=r,null):(n=M.treeContext,ai=Or(x.nextSibling),si=r,Jt=!0,Li=null,n!==null&&(xi[vi++]=hr,xi[vi++]=fr,xi[vi++]=_s,hr=n.id,fr=n.overflow,_s=r),r=nh(r,f.children),r.flags|=4096,r)}function km(n,r,l){n.lanes|=r;var f=n.alternate;f!==null&&(f.lanes|=r),Nu(n.return,r,l)}function ih(n,r,l,f,x){var M=n.memoizedState;M===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:x}:(M.isBackwards=r,M.rendering=null,M.renderingStartTime=0,M.last=f,M.tail=l,M.tailMode=x)}function Om(n,r,l){var f=r.pendingProps,x=f.revealOrder,M=f.tail;if(Vn(n,r,f.children,l),f=en.current,(f&2)!==0)f=f&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&km(n,l,r);else if(n.tag===19)km(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}f&=1}if(jt(en,f),(r.mode&1)===0)r.memoizedState=null;else switch(x){case"forwards":for(l=r.child,x=null;l!==null;)n=l.alternate,n!==null&&bl(n)===null&&(x=l),l=l.sibling;l=x,l===null?(x=r.child,r.child=null):(x=l.sibling,l.sibling=null),ih(r,!1,x,l,M);break;case"backwards":for(l=null,x=r.child,r.child=null;x!==null;){if(n=x.alternate,n!==null&&bl(n)===null){r.child=x;break}n=x.sibling,x.sibling=l,l=x,x=n}ih(r,!0,l,null,M);break;case"together":ih(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Il(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function mr(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),bs|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=$r(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=$r(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function g1(n,r,l){switch(r.tag){case 3:Um(r),aa();break;case 5:Qp(r);break;case 1:$n(r.type)&&pl(r);break;case 4:Du(r,r.stateNode.containerInfo);break;case 10:var f=r.type._context,x=r.memoizedProps.value;jt(yl,f._currentValue),f._currentValue=x;break;case 13:if(f=r.memoizedState,f!==null)return f.dehydrated!==null?(jt(en,en.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?Dm(n,r,l):(jt(en,en.current&1),n=mr(n,r,l),n!==null?n.sibling:null);jt(en,en.current&1);break;case 19:if(f=(l&r.childLanes)!==0,(n.flags&128)!==0){if(f)return Om(n,r,l);r.flags|=128}if(x=r.memoizedState,x!==null&&(x.rendering=null,x.tail=null,x.lastEffect=null),jt(en,en.current),f)break;return null;case 22:case 23:return r.lanes=0,Lm(n,r,l)}return mr(n,r,l)}var zm,rh,Bm,Hm;zm=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},rh=function(){},Bm=function(n,r,l,f){var x=n.memoizedProps;if(x!==f){n=r.stateNode,Ms($i.current);var M=null;switch(l){case"input":x=st(n,x),f=st(n,f),M=[];break;case"select":x=j({},x,{value:void 0}),f=j({},f,{value:void 0}),M=[];break;case"textarea":x=vt(n,x),f=vt(n,f),M=[];break;default:typeof x.onClick!="function"&&typeof f.onClick=="function"&&(n.onclick=hl)}Xe(l,f);var P;l=null;for(fe in x)if(!f.hasOwnProperty(fe)&&x.hasOwnProperty(fe)&&x[fe]!=null)if(fe==="style"){var H=x[fe];for(P in H)H.hasOwnProperty(P)&&(l||(l={}),l[P]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(s.hasOwnProperty(fe)?M||(M=[]):(M=M||[]).push(fe,null));for(fe in f){var q=f[fe];if(H=x!=null?x[fe]:void 0,f.hasOwnProperty(fe)&&q!==H&&(q!=null||H!=null))if(fe==="style")if(H){for(P in H)!H.hasOwnProperty(P)||q&&q.hasOwnProperty(P)||(l||(l={}),l[P]="");for(P in q)q.hasOwnProperty(P)&&H[P]!==q[P]&&(l||(l={}),l[P]=q[P])}else l||(M||(M=[]),M.push(fe,l)),l=q;else fe==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,H=H?H.__html:void 0,q!=null&&H!==q&&(M=M||[]).push(fe,q)):fe==="children"?typeof q!="string"&&typeof q!="number"||(M=M||[]).push(fe,""+q):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(s.hasOwnProperty(fe)?(q!=null&&fe==="onScroll"&&$t("scroll",n),M||H===q||(M=[])):(M=M||[]).push(fe,q))}l&&(M=M||[]).push("style",l);var fe=M;(r.updateQueue=fe)&&(r.flags|=4)}},Hm=function(n,r,l,f){l!==f&&(r.flags|=4)};function yo(n,r){if(!Jt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:f.sibling=null}}function Fn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,f=0;if(r)for(var x=n.child;x!==null;)l|=x.lanes|x.childLanes,f|=x.subtreeFlags&14680064,f|=x.flags&14680064,x.return=n,x=x.sibling;else for(x=n.child;x!==null;)l|=x.lanes|x.childLanes,f|=x.subtreeFlags,f|=x.flags,x.return=n,x=x.sibling;return n.subtreeFlags|=f,n.childLanes=l,r}function x1(n,r,l){var f=r.pendingProps;switch(Tu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fn(r),null;case 1:return $n(r.type)&&dl(),Fn(r),null;case 3:return f=r.stateNode,ua(),Kt(Yn),Kt(Nn),zu(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(n===null||n.child===null)&&(vl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Li!==null&&(mh(Li),Li=null))),rh(n,r),Fn(r),null;case 5:ku(r);var x=Ms(mo.current);if(l=r.type,n!==null&&r.stateNode!=null)Bm(n,r,l,f,x),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!f){if(r.stateNode===null)throw Error(t(166));return Fn(r),null}if(n=Ms($i.current),vl(r)){f=r.stateNode,l=r.type;var M=r.memoizedProps;switch(f[Yi]=r,f[co]=M,n=(r.mode&1)!==0,l){case"dialog":$t("cancel",f),$t("close",f);break;case"iframe":case"object":case"embed":$t("load",f);break;case"video":case"audio":for(x=0;x<ao.length;x++)$t(ao[x],f);break;case"source":$t("error",f);break;case"img":case"image":case"link":$t("error",f),$t("load",f);break;case"details":$t("toggle",f);break;case"input":Mt(f,M),$t("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!M.multiple},$t("invalid",f);break;case"textarea":Ft(f,M),$t("invalid",f)}Xe(l,M),x=null;for(var P in M)if(M.hasOwnProperty(P)){var H=M[P];P==="children"?typeof H=="string"?f.textContent!==H&&(M.suppressHydrationWarning!==!0&&ul(f.textContent,H,n),x=["children",H]):typeof H=="number"&&f.textContent!==""+H&&(M.suppressHydrationWarning!==!0&&ul(f.textContent,H,n),x=["children",""+H]):s.hasOwnProperty(P)&&H!=null&&P==="onScroll"&&$t("scroll",f)}switch(l){case"input":tt(f),It(f,M,!0);break;case"textarea":tt(f),Wt(f);break;case"select":case"option":break;default:typeof M.onClick=="function"&&(f.onclick=hl)}f=x,r.updateQueue=f,f!==null&&(r.flags|=4)}else{P=x.nodeType===9?x:x.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=k(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=P.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof f.is=="string"?n=P.createElement(l,{is:f.is}):(n=P.createElement(l),l==="select"&&(P=n,f.multiple?P.multiple=!0:f.size&&(P.size=f.size))):n=P.createElementNS(n,l),n[Yi]=r,n[co]=f,zm(n,r,!1,!1),r.stateNode=n;e:{switch(P=Ue(l,f),l){case"dialog":$t("cancel",n),$t("close",n),x=f;break;case"iframe":case"object":case"embed":$t("load",n),x=f;break;case"video":case"audio":for(x=0;x<ao.length;x++)$t(ao[x],n);x=f;break;case"source":$t("error",n),x=f;break;case"img":case"image":case"link":$t("error",n),$t("load",n),x=f;break;case"details":$t("toggle",n),x=f;break;case"input":Mt(n,f),x=st(n,f),$t("invalid",n);break;case"option":x=f;break;case"select":n._wrapperState={wasMultiple:!!f.multiple},x=j({},f,{value:void 0}),$t("invalid",n);break;case"textarea":Ft(n,f),x=vt(n,f),$t("invalid",n);break;default:x=f}Xe(l,x),H=x;for(M in H)if(H.hasOwnProperty(M)){var q=H[M];M==="style"?Se(n,q):M==="dangerouslySetInnerHTML"?(q=q?q.__html:void 0,q!=null&&_e(n,q)):M==="children"?typeof q=="string"?(l!=="textarea"||q!=="")&&be(n,q):typeof q=="number"&&be(n,""+q):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(s.hasOwnProperty(M)?q!=null&&M==="onScroll"&&$t("scroll",n):q!=null&&C(n,M,q,P))}switch(l){case"input":tt(n),It(n,f,!1);break;case"textarea":tt(n),Wt(n);break;case"option":f.value!=null&&n.setAttribute("value",""+me(f.value));break;case"select":n.multiple=!!f.multiple,M=f.value,M!=null?Ot(n,!!f.multiple,M,!1):f.defaultValue!=null&&Ot(n,!!f.multiple,f.defaultValue,!0);break;default:typeof x.onClick=="function"&&(n.onclick=hl)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Fn(r),null;case 6:if(n&&r.stateNode!=null)Hm(n,r,n.memoizedProps,f);else{if(typeof f!="string"&&r.stateNode===null)throw Error(t(166));if(l=Ms(mo.current),Ms($i.current),vl(r)){if(f=r.stateNode,l=r.memoizedProps,f[Yi]=r,(M=f.nodeValue!==l)&&(n=si,n!==null))switch(n.tag){case 3:ul(f.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ul(f.nodeValue,l,(n.mode&1)!==0)}M&&(r.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[Yi]=r,r.stateNode=f}return Fn(r),null;case 13:if(Kt(en),f=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Jt&&ai!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Wp(),aa(),r.flags|=98560,M=!1;else if(M=vl(r),f!==null&&f.dehydrated!==null){if(n===null){if(!M)throw Error(t(318));if(M=r.memoizedState,M=M!==null?M.dehydrated:null,!M)throw Error(t(317));M[Yi]=r}else aa(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Fn(r),M=!1}else Li!==null&&(mh(Li),Li=null),M=!0;if(!M)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(f=f!==null,f!==(n!==null&&n.memoizedState!==null)&&f&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(en.current&1)!==0?vn===0&&(vn=3):vh())),r.updateQueue!==null&&(r.flags|=4),Fn(r),null);case 4:return ua(),rh(n,r),n===null&&oo(r.stateNode.containerInfo),Fn(r),null;case 10:return Iu(r.type._context),Fn(r),null;case 17:return $n(r.type)&&dl(),Fn(r),null;case 19:if(Kt(en),M=r.memoizedState,M===null)return Fn(r),null;if(f=(r.flags&128)!==0,P=M.rendering,P===null)if(f)yo(M,!1);else{if(vn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(P=bl(n),P!==null){for(r.flags|=128,yo(M,!1),f=P.updateQueue,f!==null&&(r.updateQueue=f,r.flags|=4),r.subtreeFlags=0,f=l,l=r.child;l!==null;)M=l,n=f,M.flags&=14680066,P=M.alternate,P===null?(M.childLanes=0,M.lanes=n,M.child=null,M.subtreeFlags=0,M.memoizedProps=null,M.memoizedState=null,M.updateQueue=null,M.dependencies=null,M.stateNode=null):(M.childLanes=P.childLanes,M.lanes=P.lanes,M.child=P.child,M.subtreeFlags=0,M.deletions=null,M.memoizedProps=P.memoizedProps,M.memoizedState=P.memoizedState,M.updateQueue=P.updateQueue,M.type=P.type,n=P.dependencies,M.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return jt(en,en.current&1|2),r.child}n=n.sibling}M.tail!==null&&Ee()>pa&&(r.flags|=128,f=!0,yo(M,!1),r.lanes=4194304)}else{if(!f)if(n=bl(P),n!==null){if(r.flags|=128,f=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),yo(M,!0),M.tail===null&&M.tailMode==="hidden"&&!P.alternate&&!Jt)return Fn(r),null}else 2*Ee()-M.renderingStartTime>pa&&l!==1073741824&&(r.flags|=128,f=!0,yo(M,!1),r.lanes=4194304);M.isBackwards?(P.sibling=r.child,r.child=P):(l=M.last,l!==null?l.sibling=P:r.child=P,M.last=P)}return M.tail!==null?(r=M.tail,M.rendering=r,M.tail=r.sibling,M.renderingStartTime=Ee(),r.sibling=null,l=en.current,jt(en,f?l&1|2:l&1),r):(Fn(r),null);case 22:case 23:return xh(),f=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==f&&(r.flags|=8192),f&&(r.mode&1)!==0?(oi&1073741824)!==0&&(Fn(r),r.subtreeFlags&6&&(r.flags|=8192)):Fn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function v1(n,r){switch(Tu(r),r.tag){case 1:return $n(r.type)&&dl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return ua(),Kt(Yn),Kt(Nn),zu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return ku(r),null;case 13:if(Kt(en),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));aa()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Kt(en),null;case 4:return ua(),null;case 10:return Iu(r.type._context),null;case 22:case 23:return xh(),null;case 24:return null;default:return null}}var Nl=!1,Dn=!1,_1=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function fa(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){rn(n,r,f)}else l.current=null}function sh(n,r,l){try{l()}catch(f){rn(n,r,f)}}var Vm=!1;function y1(n,r){if(xu=Jo,n=yp(),cu(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var x=f.anchorOffset,M=f.focusNode;f=f.focusOffset;try{l.nodeType,M.nodeType}catch{l=null;break e}var P=0,H=-1,q=-1,fe=0,Ce=0,Re=n,Te=null;t:for(;;){for(var qe;Re!==l||x!==0&&Re.nodeType!==3||(H=P+x),Re!==M||f!==0&&Re.nodeType!==3||(q=P+f),Re.nodeType===3&&(P+=Re.nodeValue.length),(qe=Re.firstChild)!==null;)Te=Re,Re=qe;for(;;){if(Re===n)break t;if(Te===l&&++fe===x&&(H=P),Te===M&&++Ce===f&&(q=P),(qe=Re.nextSibling)!==null)break;Re=Te,Te=Re.parentNode}Re=qe}l=H===-1||q===-1?null:{start:H,end:q}}else l=null}l=l||{start:0,end:0}}else l=null;for(vu={focusedElem:n,selectionRange:l},Jo=!1,Ke=r;Ke!==null;)if(r=Ke,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Ke=n;else for(;Ke!==null;){r=Ke;try{var Qe=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Qe!==null){var et=Qe.memoizedProps,an=Qe.memoizedState,ae=r.stateNode,ne=ae.getSnapshotBeforeUpdate(r.elementType===r.type?et:Ii(r.type,et),an);ae.__reactInternalSnapshotBeforeUpdate=ne}break;case 3:var ce=r.stateNode.containerInfo;ce.nodeType===1?ce.textContent="":ce.nodeType===9&&ce.documentElement&&ce.removeChild(ce.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(De){rn(r,r.return,De)}if(n=r.sibling,n!==null){n.return=r.return,Ke=n;break}Ke=r.return}return Qe=Vm,Vm=!1,Qe}function So(n,r,l){var f=r.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var x=f=f.next;do{if((x.tag&n)===n){var M=x.destroy;x.destroy=void 0,M!==void 0&&sh(r,l,M)}x=x.next}while(x!==f)}}function Ul(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var f=l.create;l.destroy=f()}l=l.next}while(l!==r)}}function ah(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function Gm(n){var r=n.alternate;r!==null&&(n.alternate=null,Gm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Yi],delete r[co],delete r[Mu],delete r[n1],delete r[i1])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Wm(n){return n.tag===5||n.tag===3||n.tag===4}function Xm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Wm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function oh(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=hl));else if(f!==4&&(n=n.child,n!==null))for(oh(n,r,l),n=n.sibling;n!==null;)oh(n,r,l),n=n.sibling}function lh(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(f!==4&&(n=n.child,n!==null))for(lh(n,r,l),n=n.sibling;n!==null;)lh(n,r,l),n=n.sibling}var Pn=null,Ni=!1;function Wr(n,r,l){for(l=l.child;l!==null;)jm(n,r,l),l=l.sibling}function jm(n,r,l){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(le,l)}catch{}switch(l.tag){case 5:Dn||fa(l,r);case 6:var f=Pn,x=Ni;Pn=null,Wr(n,r,l),Pn=f,Ni=x,Pn!==null&&(Ni?(n=Pn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):Pn.removeChild(l.stateNode));break;case 18:Pn!==null&&(Ni?(n=Pn,l=l.stateNode,n.nodeType===8?Su(n.parentNode,l):n.nodeType===1&&Su(n,l),Qa(n)):Su(Pn,l.stateNode));break;case 4:f=Pn,x=Ni,Pn=l.stateNode.containerInfo,Ni=!0,Wr(n,r,l),Pn=f,Ni=x;break;case 0:case 11:case 14:case 15:if(!Dn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){x=f=f.next;do{var M=x,P=M.destroy;M=M.tag,P!==void 0&&((M&2)!==0||(M&4)!==0)&&sh(l,r,P),x=x.next}while(x!==f)}Wr(n,r,l);break;case 1:if(!Dn&&(fa(l,r),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(H){rn(l,r,H)}Wr(n,r,l);break;case 21:Wr(n,r,l);break;case 22:l.mode&1?(Dn=(f=Dn)||l.memoizedState!==null,Wr(n,r,l),Dn=f):Wr(n,r,l);break;default:Wr(n,r,l)}}function qm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new _1),r.forEach(function(f){var x=R1.bind(null,n,f);l.has(f)||(l.add(f),f.then(x,x))})}}function Ui(n,r){var l=r.deletions;if(l!==null)for(var f=0;f<l.length;f++){var x=l[f];try{var M=n,P=r,H=P;e:for(;H!==null;){switch(H.tag){case 5:Pn=H.stateNode,Ni=!1;break e;case 3:Pn=H.stateNode.containerInfo,Ni=!0;break e;case 4:Pn=H.stateNode.containerInfo,Ni=!0;break e}H=H.return}if(Pn===null)throw Error(t(160));jm(M,P,x),Pn=null,Ni=!1;var q=x.alternate;q!==null&&(q.return=null),x.return=null}catch(fe){rn(x,r,fe)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Ym(r,n),r=r.sibling}function Ym(n,r){var l=n.alternate,f=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ui(r,n),Zi(n),f&4){try{So(3,n,n.return),Ul(3,n)}catch(et){rn(n,n.return,et)}try{So(5,n,n.return)}catch(et){rn(n,n.return,et)}}break;case 1:Ui(r,n),Zi(n),f&512&&l!==null&&fa(l,l.return);break;case 5:if(Ui(r,n),Zi(n),f&512&&l!==null&&fa(l,l.return),n.flags&32){var x=n.stateNode;try{be(x,"")}catch(et){rn(n,n.return,et)}}if(f&4&&(x=n.stateNode,x!=null)){var M=n.memoizedProps,P=l!==null?l.memoizedProps:M,H=n.type,q=n.updateQueue;if(n.updateQueue=null,q!==null)try{H==="input"&&M.type==="radio"&&M.name!=null&&dt(x,M),Ue(H,P);var fe=Ue(H,M);for(P=0;P<q.length;P+=2){var Ce=q[P],Re=q[P+1];Ce==="style"?Se(x,Re):Ce==="dangerouslySetInnerHTML"?_e(x,Re):Ce==="children"?be(x,Re):C(x,Ce,Re,fe)}switch(H){case"input":kt(x,M);break;case"textarea":Be(x,M);break;case"select":var Te=x._wrapperState.wasMultiple;x._wrapperState.wasMultiple=!!M.multiple;var qe=M.value;qe!=null?Ot(x,!!M.multiple,qe,!1):Te!==!!M.multiple&&(M.defaultValue!=null?Ot(x,!!M.multiple,M.defaultValue,!0):Ot(x,!!M.multiple,M.multiple?[]:"",!1))}x[co]=M}catch(et){rn(n,n.return,et)}}break;case 6:if(Ui(r,n),Zi(n),f&4){if(n.stateNode===null)throw Error(t(162));x=n.stateNode,M=n.memoizedProps;try{x.nodeValue=M}catch(et){rn(n,n.return,et)}}break;case 3:if(Ui(r,n),Zi(n),f&4&&l!==null&&l.memoizedState.isDehydrated)try{Qa(r.containerInfo)}catch(et){rn(n,n.return,et)}break;case 4:Ui(r,n),Zi(n);break;case 13:Ui(r,n),Zi(n),x=n.child,x.flags&8192&&(M=x.memoizedState!==null,x.stateNode.isHidden=M,!M||x.alternate!==null&&x.alternate.memoizedState!==null||(hh=Ee())),f&4&&qm(n);break;case 22:if(Ce=l!==null&&l.memoizedState!==null,n.mode&1?(Dn=(fe=Dn)||Ce,Ui(r,n),Dn=fe):Ui(r,n),Zi(n),f&8192){if(fe=n.memoizedState!==null,(n.stateNode.isHidden=fe)&&!Ce&&(n.mode&1)!==0)for(Ke=n,Ce=n.child;Ce!==null;){for(Re=Ke=Ce;Ke!==null;){switch(Te=Ke,qe=Te.child,Te.tag){case 0:case 11:case 14:case 15:So(4,Te,Te.return);break;case 1:fa(Te,Te.return);var Qe=Te.stateNode;if(typeof Qe.componentWillUnmount=="function"){f=Te,l=Te.return;try{r=f,Qe.props=r.memoizedProps,Qe.state=r.memoizedState,Qe.componentWillUnmount()}catch(et){rn(f,l,et)}}break;case 5:fa(Te,Te.return);break;case 22:if(Te.memoizedState!==null){Zm(Re);continue}}qe!==null?(qe.return=Te,Ke=qe):Zm(Re)}Ce=Ce.sibling}e:for(Ce=null,Re=n;;){if(Re.tag===5){if(Ce===null){Ce=Re;try{x=Re.stateNode,fe?(M=x.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none"):(H=Re.stateNode,q=Re.memoizedProps.style,P=q!=null&&q.hasOwnProperty("display")?q.display:null,H.style.display=de("display",P))}catch(et){rn(n,n.return,et)}}}else if(Re.tag===6){if(Ce===null)try{Re.stateNode.nodeValue=fe?"":Re.memoizedProps}catch(et){rn(n,n.return,et)}}else if((Re.tag!==22&&Re.tag!==23||Re.memoizedState===null||Re===n)&&Re.child!==null){Re.child.return=Re,Re=Re.child;continue}if(Re===n)break e;for(;Re.sibling===null;){if(Re.return===null||Re.return===n)break e;Ce===Re&&(Ce=null),Re=Re.return}Ce===Re&&(Ce=null),Re.sibling.return=Re.return,Re=Re.sibling}}break;case 19:Ui(r,n),Zi(n),f&4&&qm(n);break;case 21:break;default:Ui(r,n),Zi(n)}}function Zi(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(Wm(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var x=f.stateNode;f.flags&32&&(be(x,""),f.flags&=-33);var M=Xm(n);lh(n,M,x);break;case 3:case 4:var P=f.stateNode.containerInfo,H=Xm(n);oh(n,H,P);break;default:throw Error(t(161))}}catch(q){rn(n,n.return,q)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function S1(n,r,l){Ke=n,$m(n)}function $m(n,r,l){for(var f=(n.mode&1)!==0;Ke!==null;){var x=Ke,M=x.child;if(x.tag===22&&f){var P=x.memoizedState!==null||Nl;if(!P){var H=x.alternate,q=H!==null&&H.memoizedState!==null||Dn;H=Nl;var fe=Dn;if(Nl=P,(Dn=q)&&!fe)for(Ke=x;Ke!==null;)P=Ke,q=P.child,P.tag===22&&P.memoizedState!==null?Qm(x):q!==null?(q.return=P,Ke=q):Qm(x);for(;M!==null;)Ke=M,$m(M),M=M.sibling;Ke=x,Nl=H,Dn=fe}Km(n)}else(x.subtreeFlags&8772)!==0&&M!==null?(M.return=x,Ke=M):Km(n)}}function Km(n){for(;Ke!==null;){var r=Ke;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Dn||Ul(5,r);break;case 1:var f=r.stateNode;if(r.flags&4&&!Dn)if(l===null)f.componentDidMount();else{var x=r.elementType===r.type?l.memoizedProps:Ii(r.type,l.memoizedProps);f.componentDidUpdate(x,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var M=r.updateQueue;M!==null&&Zp(r,M,f);break;case 3:var P=r.updateQueue;if(P!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Zp(r,P,l)}break;case 5:var H=r.stateNode;if(l===null&&r.flags&4){l=H;var q=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":q.autoFocus&&l.focus();break;case"img":q.src&&(l.src=q.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var fe=r.alternate;if(fe!==null){var Ce=fe.memoizedState;if(Ce!==null){var Re=Ce.dehydrated;Re!==null&&Qa(Re)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Dn||r.flags&512&&ah(r)}catch(Te){rn(r,r.return,Te)}}if(r===n){Ke=null;break}if(l=r.sibling,l!==null){l.return=r.return,Ke=l;break}Ke=r.return}}function Zm(n){for(;Ke!==null;){var r=Ke;if(r===n){Ke=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Ke=l;break}Ke=r.return}}function Qm(n){for(;Ke!==null;){var r=Ke;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Ul(4,r)}catch(q){rn(r,l,q)}break;case 1:var f=r.stateNode;if(typeof f.componentDidMount=="function"){var x=r.return;try{f.componentDidMount()}catch(q){rn(r,x,q)}}var M=r.return;try{ah(r)}catch(q){rn(r,M,q)}break;case 5:var P=r.return;try{ah(r)}catch(q){rn(r,P,q)}}}catch(q){rn(r,r.return,q)}if(r===n){Ke=null;break}var H=r.sibling;if(H!==null){H.return=r.return,Ke=H;break}Ke=r.return}}var M1=Math.ceil,Fl=E.ReactCurrentDispatcher,ch=E.ReactCurrentOwner,Si=E.ReactCurrentBatchConfig,Nt=0,wn=null,fn=null,Ln=0,oi=0,da=zr(0),vn=0,Mo=null,bs=0,Dl=0,uh=0,wo=null,Zn=null,hh=0,pa=1/0,gr=null,kl=!1,fh=null,Xr=null,Ol=!1,jr=null,zl=0,bo=0,dh=null,Bl=-1,Hl=0;function Gn(){return(Nt&6)!==0?Ee():Bl!==-1?Bl:Bl=Ee()}function qr(n){return(n.mode&1)===0?1:(Nt&2)!==0&&Ln!==0?Ln&-Ln:s1.transition!==null?(Hl===0&&(Hl=je()),Hl):(n=Tt,n!==0||(n=window.event,n=n===void 0?16:ep(n.type)),n)}function Fi(n,r,l,f){if(50<bo)throw bo=0,dh=null,Error(t(185));Et(n,l,f),((Nt&2)===0||n!==wn)&&(n===wn&&((Nt&2)===0&&(Dl|=l),vn===4&&Yr(n,Ln)),Qn(n,f),l===1&&Nt===0&&(r.mode&1)===0&&(pa=Ee()+500,ml&&Hr()))}function Qn(n,r){var l=n.callbackNode;Ht(n,r);var f=Xt(n,n===wn?Ln:0);if(f===0)l!==null&&qs(l),n.callbackNode=null,n.callbackPriority=0;else if(r=f&-f,n.callbackPriority!==r){if(l!=null&&qs(l),r===1)n.tag===0?r1(e0.bind(null,n)):zp(e0.bind(null,n)),e1(function(){(Nt&6)===0&&Hr()}),l=null;else{switch(lr(f)){case 1:l=ot;break;case 4:l=L;break;case 16:l=ie;break;case 536870912:l=oe;break;default:l=ie}l=l0(l,Jm.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Jm(n,r){if(Bl=-1,Hl=0,(Nt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(ma()&&n.callbackNode!==l)return null;var f=Xt(n,n===wn?Ln:0);if(f===0)return null;if((f&30)!==0||(f&n.expiredLanes)!==0||r)r=Vl(n,f);else{r=f;var x=Nt;Nt|=2;var M=n0();(wn!==n||Ln!==r)&&(gr=null,pa=Ee()+500,Ts(n,r));do try{E1();break}catch(H){t0(n,H)}while(!0);Lu(),Fl.current=M,Nt=x,fn!==null?r=0:(wn=null,Ln=0,r=vn)}if(r!==0){if(r===2&&(x=hn(n),x!==0&&(f=x,r=ph(n,x))),r===1)throw l=Mo,Ts(n,0),Yr(n,f),Qn(n,Ee()),l;if(r===6)Yr(n,f);else{if(x=n.current.alternate,(f&30)===0&&!w1(x)&&(r=Vl(n,f),r===2&&(M=hn(n),M!==0&&(f=M,r=ph(n,M))),r===1))throw l=Mo,Ts(n,0),Yr(n,f),Qn(n,Ee()),l;switch(n.finishedWork=x,n.finishedLanes=f,r){case 0:case 1:throw Error(t(345));case 2:Cs(n,Zn,gr);break;case 3:if(Yr(n,f),(f&130023424)===f&&(r=hh+500-Ee(),10<r)){if(Xt(n,0)!==0)break;if(x=n.suspendedLanes,(x&f)!==f){Gn(),n.pingedLanes|=n.suspendedLanes&x;break}n.timeoutHandle=yu(Cs.bind(null,n,Zn,gr),r);break}Cs(n,Zn,gr);break;case 4:if(Yr(n,f),(f&4194240)===f)break;for(r=n.eventTimes,x=-1;0<f;){var P=31-Oe(f);M=1<<P,P=r[P],P>x&&(x=P),f&=~M}if(f=x,f=Ee()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*M1(f/1960))-f,10<f){n.timeoutHandle=yu(Cs.bind(null,n,Zn,gr),f);break}Cs(n,Zn,gr);break;case 5:Cs(n,Zn,gr);break;default:throw Error(t(329))}}}return Qn(n,Ee()),n.callbackNode===l?Jm.bind(null,n):null}function ph(n,r){var l=wo;return n.current.memoizedState.isDehydrated&&(Ts(n,r).flags|=256),n=Vl(n,r),n!==2&&(r=Zn,Zn=l,r!==null&&mh(r)),n}function mh(n){Zn===null?Zn=n:Zn.push.apply(Zn,n)}function w1(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var x=l[f],M=x.getSnapshot;x=x.value;try{if(!Pi(M(),x))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Yr(n,r){for(r&=~uh,r&=~Dl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-Oe(r),f=1<<l;n[l]=-1,r&=~f}}function e0(n){if((Nt&6)!==0)throw Error(t(327));ma();var r=Xt(n,0);if((r&1)===0)return Qn(n,Ee()),null;var l=Vl(n,r);if(n.tag!==0&&l===2){var f=hn(n);f!==0&&(r=f,l=ph(n,f))}if(l===1)throw l=Mo,Ts(n,0),Yr(n,r),Qn(n,Ee()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Cs(n,Zn,gr),Qn(n,Ee()),null}function gh(n,r){var l=Nt;Nt|=1;try{return n(r)}finally{Nt=l,Nt===0&&(pa=Ee()+500,ml&&Hr())}}function Es(n){jr!==null&&jr.tag===0&&(Nt&6)===0&&ma();var r=Nt;Nt|=1;var l=Si.transition,f=Tt;try{if(Si.transition=null,Tt=1,n)return n()}finally{Tt=f,Si.transition=l,Nt=r,(Nt&6)===0&&Hr()}}function xh(){oi=da.current,Kt(da)}function Ts(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,Jv(l)),fn!==null)for(l=fn.return;l!==null;){var f=l;switch(Tu(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&dl();break;case 3:ua(),Kt(Yn),Kt(Nn),zu();break;case 5:ku(f);break;case 4:ua();break;case 13:Kt(en);break;case 19:Kt(en);break;case 10:Iu(f.type._context);break;case 22:case 23:xh()}l=l.return}if(wn=n,fn=n=$r(n.current,null),Ln=oi=r,vn=0,Mo=null,uh=Dl=bs=0,Zn=wo=null,Ss!==null){for(r=0;r<Ss.length;r++)if(l=Ss[r],f=l.interleaved,f!==null){l.interleaved=null;var x=f.next,M=l.pending;if(M!==null){var P=M.next;M.next=x,f.next=P}l.pending=f}Ss=null}return n}function t0(n,r){do{var l=fn;try{if(Lu(),El.current=Rl,Tl){for(var f=tn.memoizedState;f!==null;){var x=f.queue;x!==null&&(x.pending=null),f=f.next}Tl=!1}if(ws=0,Mn=xn=tn=null,go=!1,xo=0,ch.current=null,l===null||l.return===null){vn=1,Mo=r,fn=null;break}e:{var M=n,P=l.return,H=l,q=r;if(r=Ln,H.flags|=32768,q!==null&&typeof q=="object"&&typeof q.then=="function"){var fe=q,Ce=H,Re=Ce.tag;if((Ce.mode&1)===0&&(Re===0||Re===11||Re===15)){var Te=Ce.alternate;Te?(Ce.updateQueue=Te.updateQueue,Ce.memoizedState=Te.memoizedState,Ce.lanes=Te.lanes):(Ce.updateQueue=null,Ce.memoizedState=null)}var qe=Tm(P);if(qe!==null){qe.flags&=-257,Cm(qe,P,H,M,r),qe.mode&1&&Em(M,fe,r),r=qe,q=fe;var Qe=r.updateQueue;if(Qe===null){var et=new Set;et.add(q),r.updateQueue=et}else Qe.add(q);break e}else{if((r&1)===0){Em(M,fe,r),vh();break e}q=Error(t(426))}}else if(Jt&&H.mode&1){var an=Tm(P);if(an!==null){(an.flags&65536)===0&&(an.flags|=256),Cm(an,P,H,M,r),Ru(ha(q,H));break e}}M=q=ha(q,H),vn!==4&&(vn=2),wo===null?wo=[M]:wo.push(M),M=P;do{switch(M.tag){case 3:M.flags|=65536,r&=-r,M.lanes|=r;var ae=wm(M,q,r);Kp(M,ae);break e;case 1:H=q;var ne=M.type,ce=M.stateNode;if((M.flags&128)===0&&(typeof ne.getDerivedStateFromError=="function"||ce!==null&&typeof ce.componentDidCatch=="function"&&(Xr===null||!Xr.has(ce)))){M.flags|=65536,r&=-r,M.lanes|=r;var De=bm(M,H,r);Kp(M,De);break e}}M=M.return}while(M!==null)}r0(l)}catch(it){r=it,fn===l&&l!==null&&(fn=l=l.return);continue}break}while(!0)}function n0(){var n=Fl.current;return Fl.current=Rl,n===null?Rl:n}function vh(){(vn===0||vn===3||vn===2)&&(vn=4),wn===null||(bs&268435455)===0&&(Dl&268435455)===0||Yr(wn,Ln)}function Vl(n,r){var l=Nt;Nt|=2;var f=n0();(wn!==n||Ln!==r)&&(gr=null,Ts(n,r));do try{b1();break}catch(x){t0(n,x)}while(!0);if(Lu(),Nt=l,Fl.current=f,fn!==null)throw Error(t(261));return wn=null,Ln=0,vn}function b1(){for(;fn!==null;)i0(fn)}function E1(){for(;fn!==null&&!qa();)i0(fn)}function i0(n){var r=o0(n.alternate,n,oi);n.memoizedProps=n.pendingProps,r===null?r0(n):fn=r,ch.current=null}function r0(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=x1(l,r,oi),l!==null){fn=l;return}}else{if(l=v1(l,r),l!==null){l.flags&=32767,fn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{vn=6,fn=null;return}}if(r=r.sibling,r!==null){fn=r;return}fn=r=n}while(r!==null);vn===0&&(vn=5)}function Cs(n,r,l){var f=Tt,x=Si.transition;try{Si.transition=null,Tt=1,T1(n,r,l,f)}finally{Si.transition=x,Tt=f}return null}function T1(n,r,l,f){do ma();while(jr!==null);if((Nt&6)!==0)throw Error(t(327));l=n.finishedWork;var x=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var M=l.lanes|l.childLanes;if(jn(n,M),n===wn&&(fn=wn=null,Ln=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Ol||(Ol=!0,l0(ie,function(){return ma(),null})),M=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||M){M=Si.transition,Si.transition=null;var P=Tt;Tt=1;var H=Nt;Nt|=4,ch.current=null,y1(n,l),Ym(l,n),jv(vu),Jo=!!xu,vu=xu=null,n.current=l,S1(l),we(),Nt=H,Tt=P,Si.transition=M}else n.current=l;if(Ol&&(Ol=!1,jr=n,zl=x),M=n.pendingLanes,M===0&&(Xr=null),$e(l.stateNode),Qn(n,Ee()),r!==null)for(f=n.onRecoverableError,l=0;l<r.length;l++)x=r[l],f(x.value,{componentStack:x.stack,digest:x.digest});if(kl)throw kl=!1,n=fh,fh=null,n;return(zl&1)!==0&&n.tag!==0&&ma(),M=n.pendingLanes,(M&1)!==0?n===dh?bo++:(bo=0,dh=n):bo=0,Hr(),null}function ma(){if(jr!==null){var n=lr(zl),r=Si.transition,l=Tt;try{if(Si.transition=null,Tt=16>n?16:n,jr===null)var f=!1;else{if(n=jr,jr=null,zl=0,(Nt&6)!==0)throw Error(t(331));var x=Nt;for(Nt|=4,Ke=n.current;Ke!==null;){var M=Ke,P=M.child;if((Ke.flags&16)!==0){var H=M.deletions;if(H!==null){for(var q=0;q<H.length;q++){var fe=H[q];for(Ke=fe;Ke!==null;){var Ce=Ke;switch(Ce.tag){case 0:case 11:case 15:So(8,Ce,M)}var Re=Ce.child;if(Re!==null)Re.return=Ce,Ke=Re;else for(;Ke!==null;){Ce=Ke;var Te=Ce.sibling,qe=Ce.return;if(Gm(Ce),Ce===fe){Ke=null;break}if(Te!==null){Te.return=qe,Ke=Te;break}Ke=qe}}}var Qe=M.alternate;if(Qe!==null){var et=Qe.child;if(et!==null){Qe.child=null;do{var an=et.sibling;et.sibling=null,et=an}while(et!==null)}}Ke=M}}if((M.subtreeFlags&2064)!==0&&P!==null)P.return=M,Ke=P;else e:for(;Ke!==null;){if(M=Ke,(M.flags&2048)!==0)switch(M.tag){case 0:case 11:case 15:So(9,M,M.return)}var ae=M.sibling;if(ae!==null){ae.return=M.return,Ke=ae;break e}Ke=M.return}}var ne=n.current;for(Ke=ne;Ke!==null;){P=Ke;var ce=P.child;if((P.subtreeFlags&2064)!==0&&ce!==null)ce.return=P,Ke=ce;else e:for(P=ne;Ke!==null;){if(H=Ke,(H.flags&2048)!==0)try{switch(H.tag){case 0:case 11:case 15:Ul(9,H)}}catch(it){rn(H,H.return,it)}if(H===P){Ke=null;break e}var De=H.sibling;if(De!==null){De.return=H.return,Ke=De;break e}Ke=H.return}}if(Nt=x,Hr(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(le,n)}catch{}f=!0}return f}finally{Tt=l,Si.transition=r}}return!1}function s0(n,r,l){r=ha(l,r),r=wm(n,r,1),n=Gr(n,r,1),r=Gn(),n!==null&&(Et(n,1,r),Qn(n,r))}function rn(n,r,l){if(n.tag===3)s0(n,n,l);else for(;r!==null;){if(r.tag===3){s0(r,n,l);break}else if(r.tag===1){var f=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Xr===null||!Xr.has(f))){n=ha(l,n),n=bm(r,n,1),r=Gr(r,n,1),n=Gn(),r!==null&&(Et(r,1,n),Qn(r,n));break}}r=r.return}}function C1(n,r,l){var f=n.pingCache;f!==null&&f.delete(r),r=Gn(),n.pingedLanes|=n.suspendedLanes&l,wn===n&&(Ln&l)===l&&(vn===4||vn===3&&(Ln&130023424)===Ln&&500>Ee()-hh?Ts(n,0):uh|=l),Qn(n,r)}function a0(n,r){r===0&&((n.mode&1)===0?r=1:(r=nt,nt<<=1,(nt&130023424)===0&&(nt=4194304)));var l=Gn();n=dr(n,r),n!==null&&(Et(n,r,l),Qn(n,l))}function A1(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),a0(n,l)}function R1(n,r){var l=0;switch(n.tag){case 13:var f=n.stateNode,x=n.memoizedState;x!==null&&(l=x.retryLane);break;case 19:f=n.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(r),a0(n,l)}var o0;o0=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||Yn.current)Kn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return Kn=!1,g1(n,r,l);Kn=(n.flags&131072)!==0}else Kn=!1,Jt&&(r.flags&1048576)!==0&&Bp(r,xl,r.index);switch(r.lanes=0,r.tag){case 2:var f=r.type;Il(n,r),n=r.pendingProps;var x=ia(r,Nn.current);ca(r,l),x=Vu(null,r,f,n,x,l);var M=Gu();return r.flags|=1,typeof x=="object"&&x!==null&&typeof x.render=="function"&&x.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,$n(f)?(M=!0,pl(r)):M=!1,r.memoizedState=x.state!==null&&x.state!==void 0?x.state:null,Fu(r),x.updater=Pl,r.stateNode=x,x._reactInternals=r,$u(r,f,n,l),r=Ju(null,r,f,!0,M,l)):(r.tag=0,Jt&&M&&Eu(r),Vn(null,r,x,l),r=r.child),r;case 16:f=r.elementType;e:{switch(Il(n,r),n=r.pendingProps,x=f._init,f=x(f._payload),r.type=f,x=r.tag=L1(f),n=Ii(f,n),x){case 0:r=Qu(null,r,f,n,l);break e;case 1:r=Nm(null,r,f,n,l);break e;case 11:r=Am(null,r,f,n,l);break e;case 14:r=Rm(null,r,f,Ii(f.type,n),l);break e}throw Error(t(306,f,""))}return r;case 0:return f=r.type,x=r.pendingProps,x=r.elementType===f?x:Ii(f,x),Qu(n,r,f,x,l);case 1:return f=r.type,x=r.pendingProps,x=r.elementType===f?x:Ii(f,x),Nm(n,r,f,x,l);case 3:e:{if(Um(r),n===null)throw Error(t(387));f=r.pendingProps,M=r.memoizedState,x=M.element,$p(n,r),wl(r,f,null,l);var P=r.memoizedState;if(f=P.element,M.isDehydrated)if(M={element:f,isDehydrated:!1,cache:P.cache,pendingSuspenseBoundaries:P.pendingSuspenseBoundaries,transitions:P.transitions},r.updateQueue.baseState=M,r.memoizedState=M,r.flags&256){x=ha(Error(t(423)),r),r=Fm(n,r,f,l,x);break e}else if(f!==x){x=ha(Error(t(424)),r),r=Fm(n,r,f,l,x);break e}else for(ai=Or(r.stateNode.containerInfo.firstChild),si=r,Jt=!0,Li=null,l=qp(r,null,f,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(aa(),f===x){r=mr(n,r,l);break e}Vn(n,r,f,l)}r=r.child}return r;case 5:return Qp(r),n===null&&Au(r),f=r.type,x=r.pendingProps,M=n!==null?n.memoizedProps:null,P=x.children,_u(f,x)?P=null:M!==null&&_u(f,M)&&(r.flags|=32),Im(n,r),Vn(n,r,P,l),r.child;case 6:return n===null&&Au(r),null;case 13:return Dm(n,r,l);case 4:return Du(r,r.stateNode.containerInfo),f=r.pendingProps,n===null?r.child=oa(r,null,f,l):Vn(n,r,f,l),r.child;case 11:return f=r.type,x=r.pendingProps,x=r.elementType===f?x:Ii(f,x),Am(n,r,f,x,l);case 7:return Vn(n,r,r.pendingProps,l),r.child;case 8:return Vn(n,r,r.pendingProps.children,l),r.child;case 12:return Vn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(f=r.type._context,x=r.pendingProps,M=r.memoizedProps,P=x.value,jt(yl,f._currentValue),f._currentValue=P,M!==null)if(Pi(M.value,P)){if(M.children===x.children&&!Yn.current){r=mr(n,r,l);break e}}else for(M=r.child,M!==null&&(M.return=r);M!==null;){var H=M.dependencies;if(H!==null){P=M.child;for(var q=H.firstContext;q!==null;){if(q.context===f){if(M.tag===1){q=pr(-1,l&-l),q.tag=2;var fe=M.updateQueue;if(fe!==null){fe=fe.shared;var Ce=fe.pending;Ce===null?q.next=q:(q.next=Ce.next,Ce.next=q),fe.pending=q}}M.lanes|=l,q=M.alternate,q!==null&&(q.lanes|=l),Nu(M.return,l,r),H.lanes|=l;break}q=q.next}}else if(M.tag===10)P=M.type===r.type?null:M.child;else if(M.tag===18){if(P=M.return,P===null)throw Error(t(341));P.lanes|=l,H=P.alternate,H!==null&&(H.lanes|=l),Nu(P,l,r),P=M.sibling}else P=M.child;if(P!==null)P.return=M;else for(P=M;P!==null;){if(P===r){P=null;break}if(M=P.sibling,M!==null){M.return=P.return,P=M;break}P=P.return}M=P}Vn(n,r,x.children,l),r=r.child}return r;case 9:return x=r.type,f=r.pendingProps.children,ca(r,l),x=_i(x),f=f(x),r.flags|=1,Vn(n,r,f,l),r.child;case 14:return f=r.type,x=Ii(f,r.pendingProps),x=Ii(f.type,x),Rm(n,r,f,x,l);case 15:return Pm(n,r,r.type,r.pendingProps,l);case 17:return f=r.type,x=r.pendingProps,x=r.elementType===f?x:Ii(f,x),Il(n,r),r.tag=1,$n(f)?(n=!0,pl(r)):n=!1,ca(r,l),Sm(r,f,x),$u(r,f,x,l),Ju(null,r,f,!0,n,l);case 19:return Om(n,r,l);case 22:return Lm(n,r,l)}throw Error(t(156,r.tag))};function l0(n,r){return js(n,r)}function P1(n,r,l,f){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mi(n,r,l,f){return new P1(n,r,l,f)}function _h(n){return n=n.prototype,!(!n||!n.isReactComponent)}function L1(n){if(typeof n=="function")return _h(n)?1:0;if(n!=null){if(n=n.$$typeof,n===B)return 11;if(n===V)return 14}return 2}function $r(n,r){var l=n.alternate;return l===null?(l=Mi(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Gl(n,r,l,f,x,M){var P=2;if(f=n,typeof n=="function")_h(n)&&(P=1);else if(typeof n=="string")P=5;else e:switch(n){case N:return As(l.children,x,M,r);case T:P=8,x|=8;break;case U:return n=Mi(12,l,r,x|2),n.elementType=U,n.lanes=M,n;case $:return n=Mi(13,l,r,x),n.elementType=$,n.lanes=M,n;case ee:return n=Mi(19,l,r,x),n.elementType=ee,n.lanes=M,n;case K:return Wl(l,x,M,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case z:P=10;break e;case D:P=9;break e;case B:P=11;break e;case V:P=14;break e;case Z:P=16,f=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=Mi(P,l,r,x),r.elementType=n,r.type=f,r.lanes=M,r}function As(n,r,l,f){return n=Mi(7,n,f,r),n.lanes=l,n}function Wl(n,r,l,f){return n=Mi(22,n,f,r),n.elementType=K,n.lanes=l,n.stateNode={isHidden:!1},n}function yh(n,r,l){return n=Mi(6,n,null,r),n.lanes=l,n}function Sh(n,r,l){return r=Mi(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function I1(n,r,l,f,x){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rn(0),this.expirationTimes=Rn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rn(0),this.identifierPrefix=f,this.onRecoverableError=x,this.mutableSourceEagerHydrationData=null}function Mh(n,r,l,f,x,M,P,H,q){return n=new I1(n,r,l,H,q),r===1?(r=1,M===!0&&(r|=8)):r=0,M=Mi(3,null,null,r),n.current=M,M.stateNode=n,M.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fu(M),n}function N1(n,r,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A,key:f==null?null:""+f,children:n,containerInfo:r,implementation:l}}function c0(n){if(!n)return Br;n=n._reactInternals;e:{if(mi(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if($n(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if($n(l))return kp(n,l,r)}return r}function u0(n,r,l,f,x,M,P,H,q){return n=Mh(l,f,!0,n,x,M,P,H,q),n.context=c0(null),l=n.current,f=Gn(),x=qr(l),M=pr(f,x),M.callback=r??null,Gr(l,M,x),n.current.lanes=x,Et(n,x,f),Qn(n,f),n}function Xl(n,r,l,f){var x=r.current,M=Gn(),P=qr(x);return l=c0(l),r.context===null?r.context=l:r.pendingContext=l,r=pr(M,P),r.payload={element:n},f=f===void 0?null:f,f!==null&&(r.callback=f),n=Gr(x,r,P),n!==null&&(Fi(n,x,P,M),Ml(n,x,P)),P}function jl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function h0(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function wh(n,r){h0(n,r),(n=n.alternate)&&h0(n,r)}function U1(){return null}var f0=typeof reportError=="function"?reportError:function(n){console.error(n)};function bh(n){this._internalRoot=n}ql.prototype.render=bh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Xl(n,r,null,null)},ql.prototype.unmount=bh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Es(function(){Xl(null,n,null,null)}),r[cr]=null}};function ql(n){this._internalRoot=n}ql.prototype.unstable_scheduleHydration=function(n){if(n){var r=Vt();n={blockedOn:null,target:n,priority:r};for(var l=0;l<Fr.length&&r!==0&&r<Fr[l].priority;l++);Fr.splice(l,0,n),l===0&&Qd(n)}};function Eh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Yl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function d0(){}function F1(n,r,l,f,x){if(x){if(typeof f=="function"){var M=f;f=function(){var fe=jl(P);M.call(fe)}}var P=u0(r,f,n,0,null,!1,!1,"",d0);return n._reactRootContainer=P,n[cr]=P.current,oo(n.nodeType===8?n.parentNode:n),Es(),P}for(;x=n.lastChild;)n.removeChild(x);if(typeof f=="function"){var H=f;f=function(){var fe=jl(q);H.call(fe)}}var q=Mh(n,0,!1,null,null,!1,!1,"",d0);return n._reactRootContainer=q,n[cr]=q.current,oo(n.nodeType===8?n.parentNode:n),Es(function(){Xl(r,q,l,f)}),q}function $l(n,r,l,f,x){var M=l._reactRootContainer;if(M){var P=M;if(typeof x=="function"){var H=x;x=function(){var q=jl(P);H.call(q)}}Xl(r,P,n,x)}else P=F1(l,r,n,x,f);return jl(P)}zt=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=Lt(r.pendingLanes);l!==0&&(qn(r,l|1),Qn(r,Ee()),(Nt&6)===0&&(pa=Ee()+500,Hr()))}break;case 13:Es(function(){var f=dr(n,1);if(f!==null){var x=Gn();Fi(f,n,1,x)}}),wh(n,1)}},Yt=function(n){if(n.tag===13){var r=dr(n,134217728);if(r!==null){var l=Gn();Fi(r,n,134217728,l)}wh(n,134217728)}},Ai=function(n){if(n.tag===13){var r=qr(n),l=dr(n,r);if(l!==null){var f=Gn();Fi(l,n,r,f)}wh(n,r)}},Vt=function(){return Tt},Ri=function(n,r){var l=Tt;try{return Tt=n,r()}finally{Tt=l}},mt=function(n,r,l){switch(r){case"input":if(kt(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var f=l[r];if(f!==n&&f.form===n.form){var x=fl(f);if(!x)throw Error(t(90));Pt(f),kt(f,x)}}}break;case"textarea":Be(n,l);break;case"select":r=l.value,r!=null&&Ot(n,!!l.multiple,r,!1)}},ke=gh,ve=Es;var D1={usingClientEntryPoint:!1,Events:[uo,ta,fl,xe,Ve,gh]},Eo={findFiberByHostInstance:xs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},k1={bundleType:Eo.bundleType,version:Eo.version,rendererPackageName:Eo.rendererPackageName,rendererConfig:Eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:E.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=or(n),n===null?null:n.stateNode},findFiberByHostInstance:Eo.findFiberByHostInstance||U1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kl.isDisabled&&Kl.supportsFiber)try{le=Kl.inject(k1),He=Kl}catch{}}return Jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D1,Jn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eh(r))throw Error(t(200));return N1(n,r,null,l)},Jn.createRoot=function(n,r){if(!Eh(n))throw Error(t(299));var l=!1,f="",x=f0;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onRecoverableError!==void 0&&(x=r.onRecoverableError)),r=Mh(n,1,!1,null,null,l,!1,f,x),n[cr]=r.current,oo(n.nodeType===8?n.parentNode:n),new bh(r)},Jn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=or(r),n=n===null?null:n.stateNode,n},Jn.flushSync=function(n){return Es(n)},Jn.hydrate=function(n,r,l){if(!Yl(r))throw Error(t(200));return $l(null,n,r,!0,l)},Jn.hydrateRoot=function(n,r,l){if(!Eh(n))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,x=!1,M="",P=f0;if(l!=null&&(l.unstable_strictMode===!0&&(x=!0),l.identifierPrefix!==void 0&&(M=l.identifierPrefix),l.onRecoverableError!==void 0&&(P=l.onRecoverableError)),r=u0(r,null,n,1,l??null,x,!1,M,P),n[cr]=r.current,oo(n),f)for(n=0;n<f.length;n++)l=f[n],x=l._getVersion,x=x(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,x]:r.mutableSourceEagerHydrationData.push(l,x);return new ql(r)},Jn.render=function(n,r,l){if(!Yl(r))throw Error(t(200));return $l(null,n,r,!1,l)},Jn.unmountComponentAtNode=function(n){if(!Yl(n))throw Error(t(40));return n._reactRootContainer?(Es(function(){$l(null,null,n,!1,function(){n._reactRootContainer=null,n[cr]=null})}),!0):!1},Jn.unstable_batchedUpdates=gh,Jn.unstable_renderSubtreeIntoContainer=function(n,r,l,f){if(!Yl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return $l(n,r,l,!1,f)},Jn.version="18.3.1-next-f1338f8080-20240426",Jn}var S0;function q1(){if(S0)return Ah.exports;S0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Ah.exports=j1(),Ah.exports}var M0;function Y1(){if(M0)return Zl;M0=1;var a=q1();return Zl.createRoot=a.createRoot,Zl.hydrateRoot=a.hydrateRoot,Zl}var $1=Y1(),ue=Md();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Z1=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase()),w0=a=>{const e=Z1(a);return e.charAt(0).toUpperCase()+e.slice(1)},ax=(...a)=>a.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Q1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=ue.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:s="",children:o,iconNode:c,...u},h)=>ue.createElement("svg",{ref:h,...Q1,width:e,height:e,stroke:a,strokeWidth:i?Number(t)*24/Number(e):t,className:ax("lucide",s),...u},[...c.map(([d,p])=>ue.createElement(d,p)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=(a,e)=>{const t=ue.forwardRef(({className:i,...s},o)=>ue.createElement(J1,{ref:o,iconNode:e,className:ax(`lucide-${K1(w0(a))}`,`lucide-${a}`,i),...s}));return t.displayName=w0(a),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],ox=Cn("camera",e_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],n_=Cn("circle-alert",t_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],r_=Cn("circle",i_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],a_=Cn("hand",s_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],l_=Cn("mic-off",o_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],b0=Cn("mic",c_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z",key:"1pctta"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",key:"x3v2xh"}]],h_=Cn("monitor-play",u_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],d_=Cn("music",f_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]],m_=Cn("orbit",p_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],x_=Cn("refresh-cw",g_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],__=Cn("rotate-ccw",v_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]],S_=Cn("sliders-horizontal",y_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],w_=Cn("sparkles",M_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],E_=Cn("square",b_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_=[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196",key:"w8jjjt"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2",key:"1xawa7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],C_=Cn("video-off",T_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],R_=Cn("video",A_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],L_=Cn("volume-2",P_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],N_=Cn("volume-x",I_);function U_({onVideoReady:a}){const e=ue.useRef(null),[t,i]=ue.useState(""),[s,o]=ue.useState(!0),[c,u]=ue.useState(0),h=async()=>{try{if(o(!0),i(""),!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error("Camera API not supported in this browser. Please use a modern browser like Chrome, Firefox, or Edge.");const g=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480,facingMode:"user"},audio:!1});e.current&&(e.current.srcObject=g,e.current.onloadedmetadata=()=>{var m;(m=e.current)==null||m.play(),a(e.current),o(!1)})}catch(g){o(!1),g instanceof Error&&(g.name==="NotAllowedError"||g.name==="PermissionDeniedError"?i("Camera permission denied. Please click the camera icon in your browser's address bar and allow camera access, then click Retry below."):g.name==="NotFoundError"?i("No camera found. Please connect a camera to your device."):g.name==="NotReadableError"?i("Camera is already in use by another application. Please close other apps using the camera and try again."):g.name==="OverconstrainedError"?(i("Camera does not meet requirements. Trying with default settings..."),setTimeout(()=>{d()},1e3)):i("Error: "+g.message))}},d=async()=>{try{o(!0),i("");const g=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1});e.current&&(e.current.srcObject=g,e.current.onloadedmetadata=()=>{var m;(m=e.current)==null||m.play(),a(e.current),o(!1)})}catch{o(!1),i("Unable to access camera with default settings.")}},p=()=>{u(g=>g+1),h()};return ue.useEffect(()=>(h(),()=>{var g;(g=e.current)!=null&&g.srcObject&&e.current.srcObject.getTracks().forEach(y=>y.stop())}),[a]),W.jsxs("div",{className:"relative",children:[W.jsx("video",{ref:e,className:"w-48 h-36 rounded-lg border-2 border-white/20 shadow-lg bg-black",style:{transform:"scaleX(-1)"},playsInline:!0,muted:!0}),t&&W.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center bg-black/95 rounded-lg p-3 gap-2",children:[W.jsx(n_,{className:"w-6 h-6 text-red-400"}),W.jsx("p",{className:"text-[10px] text-red-400 text-center leading-tight",children:t}),W.jsxs("button",{onClick:p,className:"mt-1 px-3 py-1 bg-white/10 hover:bg-white/20 rounded text-[10px] text-white flex items-center gap-1 transition-colors",children:[W.jsx(x_,{className:"w-3 h-3"}),"Retry"]}),W.jsx("a",{href:"https://support.google.com/chrome/answer/2693767",target:"_blank",rel:"noopener noreferrer",className:"text-[9px] text-blue-400 hover:text-blue-300 underline",children:"How to enable camera"})]}),s&&!t&&W.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center bg-black/80 rounded-lg gap-2",children:[W.jsx(ox,{className:"w-6 h-6 text-white/60 animate-pulse"}),W.jsx("p",{className:"text-xs text-white/60",children:"Loading camera..."})]})]})}const F_=3,lx=400,D_=.75,k_={mic:"ROOM",music:"TAB",off:"MUTE"},O_={mic:"Take sound: the room through the microphone, music and all, as it actually sounded (S)",music:"Take sound: straight off a tab or the machine, with no room in it. Asks which, each take (S)",off:"Take sound: none (S)"};function E0(a){return a==="mic"?"music":a==="music"?"off":"mic"}async function z_(a,e){if(a==="off")return{stream:null,owned:!1};if(a==="mic"){if(e&&e.getAudioTracks().some(t=>t.readyState==="live"))return{stream:e,owned:!1};try{return{stream:await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1}}),owned:!0}}catch{return{stream:null,owned:!1,problem:"The microphone was refused, so this take has no sound."}}}try{const t=await navigator.mediaDevices.getDisplayMedia({video:!0,audio:!0});for(const i of t.getVideoTracks())i.stop();return t.getAudioTracks().length===0?{stream:null,owned:!1,problem:'No sound came through. Chrome asks you to tick "share tab audio" in the picker; other browsers do not offer it at all, so MIC is the one that always works.'}:{stream:t,owned:!0}}catch{return{stream:null,owned:!1,problem:"No source was picked, so this take has no sound."}}}function B_({selectedColors:a,hue:e,saturation:t,mode:i,onHueChange:s,onModeChange:o,autoHueEnabled:c,onAutoHueToggle:u}){const h=(d,p,g)=>{d=d/360,p=p/100,g=g/100;let m,y,v;if(p===0)m=y=v=g;else{const _=(C,E,I)=>(I<0&&(I+=1),I>1&&(I-=1),I<.16666666666666666?C+(E-C)*6*I:I<.5?E:I<.6666666666666666?C+(E-C)*(.6666666666666666-I)*6:C),S=g<.5?g*(1+p):g+p-g*p,b=2*g-S;m=_(b,S,d+.3333333333333333),y=_(b,S,d),v=_(b,S,d-.3333333333333333)}const w=_=>{const S=Math.round(_*255).toString(16);return S.length===1?"0"+S:S};return`#${w(m)}${w(y)}${w(v)}`};return W.jsxs("div",{className:"w-full flex items-center gap-4 px-6 font-mono",children:[W.jsxs("div",{className:"flex gap-1",children:[W.jsx("button",{onClick:()=>o("black"),className:`px-2 py-1 text-[10px] rounded transition-all ${i==="black"?"bg-white/20 text-white":"bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60"}`,title:"1 Color (Fn key)",children:"1C"}),W.jsx("button",{onClick:()=>o("contrast"),className:`px-2 py-1 text-[10px] rounded transition-all ${i==="contrast"?"bg-white/20 text-white":"bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60"}`,title:"2 Colors (Ctrl key)",children:"2C"}),W.jsx("button",{onClick:()=>o("grayscale"),className:`px-2 py-1 text-[10px] rounded transition-all ${i==="grayscale"?"bg-white/20 text-white":"bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60"}`,title:"Black & White (Option/Alt key)",children:"B/W"})]}),i!=="grayscale"&&W.jsxs("div",{className:"flex-1 relative h-6",children:[W.jsx("div",{className:"absolute inset-0 rounded-full",style:{background:"linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)"}}),W.jsx("input",{type:"range",min:"0",max:"360",value:e,onChange:d=>s(Number(d.target.value)),className:"vj-slider-bare absolute inset-0 w-full appearance-none bg-transparent cursor-pointer"}),W.jsx("div",{className:"absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-white shadow-lg pointer-events-none",style:{left:`calc(${e/360*100}% - 10px)`,backgroundColor:h(e,t,50)}})]}),i!=="grayscale"&&W.jsx("button",{onClick:u,className:`px-3 py-1 text-[10px] rounded transition-all whitespace-nowrap ${c?"bg-cyan-500/30 text-cyan-300 border border-cyan-400/50":"bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60"}`,title:"Auto-rotate hue palette",children:c?"⟳ AUTO":"AUTO"})]})}const hs={geometric:{pattern:"geometric",name:"Geometric",short:"Geometric",category:"2D",key:"1",description:"Rotating polygons with trails"},particles:{pattern:"particles",name:"Particles",short:"Particles",category:"2D",key:"2",description:"Dynamic particle system"},waves:{pattern:"waves",name:"Waves",short:"Waves",category:"2D",key:"3",description:"Flowing wave patterns"},technical:{pattern:"technical",name:"Technical Hand Tracker",short:"Tracker",category:"2D",key:"4",description:"Hand tracking visualization"},lottie:{pattern:"lottie",name:"Lottie Inspired",short:"Lottie",category:"2D",key:"5",description:"Animated circular patterns"},"lottie-classic":{pattern:"lottie-classic",name:"Classic Lottie",short:"Lottie 2",category:"2D",key:"Q",description:"Classic Lottie animation"},linefield:{pattern:"linefield",name:"Line Field",short:"Lines",category:"2D",key:"6",description:"Dynamic line fields"},chromatic:{pattern:"chromatic",name:"Chromatic Glow",short:"Chroma",category:"2D",key:"7",description:"RGB chromatic aberration"},halftone:{pattern:"halftone",name:"Halftone Matrix",short:"Halftone",category:"2D",key:"8",description:"Halftone dot patterns"},matrix:{pattern:"matrix",name:"Digital Grid",short:"Grid",category:"2D",key:"9",description:"Matrix-style grid"},distortedcamera:{pattern:"distortedcamera",name:"Distorted Camera",short:"Camera",category:"2D",key:"W",description:"Gesture-controlled camera distortion with chromatic effects"},thicklines:{pattern:"thicklines",name:"Thick Lines",short:"Blocks",category:"2D",key:"=",description:"Rotating blocks with thickness response"},flowfield:{pattern:"flowfield",name:"Flow Field",short:"Flow",category:"2D",key:"D",description:"Flowing vector field"},liquidchrome:{pattern:"liquidchrome",name:"Liquid Chrome",short:"Chrome",category:"2D",key:"-",description:"Iridescent liquid metal simulation"},glitch:{pattern:"glitch",name:"Glitch Network",short:"Glitch",category:"3D",key:"1",description:"Network glitch with perspective effects"},cyberstream:{pattern:"cyberstream",name:"Cyber Stream",short:"Cyber",category:"3D",key:"2",description:"Cyberpunk stream with depth perspective"},morphing:{pattern:"morphing",name:"Morphing Sphere",short:"Sphere",category:"3D",key:"=",description:"Three.js morphing icosphere"},cubewall:{pattern:"cubewall",name:"Cube Wall",short:"Cubes",category:"3D",key:"4",description:"Three.js cube grid waves"},facecloud:{pattern:"facecloud",name:"Op-Art Grid",short:"Op-Art",category:"3D",key:"5",description:"Op-art grid with perspective"},face:{pattern:"face",name:"Face Mesh",short:"Face",category:"3D",key:"-",description:"MediaPipe face tracking with glowing mesh"},"smokehand-torus":{pattern:"smokehand-torus",name:"Smoke Torus",short:"Torus",category:"3D",key:"8",description:"Particle smoke shaped around a torus"},"smokehand-hand":{pattern:"smokehand-hand",name:"Smoke Hand",short:"Hand",category:"3D",key:"7",description:"Particle smoke shaped around a hand model"},"network-cube":{pattern:"network-cube",name:"Network Cube",short:"Network",category:"3D",key:"9",description:"Sparse cubic constellation"},"elastic-net":{pattern:"elastic-net",name:"Elastic Net",short:"Elastic",category:"3D",key:"0",description:"Elastic neural network simulation"},ripple:{pattern:"ripple",name:"Water Ripple",short:"Ripple",category:"TD",key:"1",description:"Camera refracted through a height field your hands leave behind"},text:{pattern:"text",name:"Kinetic Type",short:"Type",category:"TD",key:"2",description:"Your words, extruded and pushed around by your hands"},video:{pattern:"video",name:"Clip",short:"Clip",category:"TD",key:"3",description:"Your own footage, sheared into sliding bands"},mosaic:{pattern:"mosaic",name:"Mosaic",short:"Mosaic",category:"TD",key:"4",description:"Your video or photo rebuilt out of letters, dots, blocks or bars"},digitalblocks:{pattern:"digitalblocks",name:"Digital Horizon",short:"Horizon",category:"2D",key:"0",description:"Glitchy digital data sorting"}},Us=10,cx="vj-setlist";function Wo(a){return a===9?"0":String(a+1)}function vf(a){return a==="0"?9:a>="1"&&a<="9"?Number(a)-1:-1}const Lh=["geometric","waves","particles","halftone","ripple","flowfield"];function H_(a){return typeof a=="string"&&a in hs}function V_(){try{const a=localStorage.getItem(cx);if(a===null)return Lh;const e=JSON.parse(a);return Array.isArray(e)?e.filter(H_).filter((i,s,o)=>o.indexOf(i)===s).slice(0,Us):Lh}catch{return Lh}}function G_(a){try{localStorage.setItem(cx,JSON.stringify(a))}catch{}}function W_(a){return a.gesture==="pinch"?"PINCH":a.fingerCount===void 0?null:a.fingerCount===2?"MED":a.fingerCount>=5?"FAST":`${a.fingerCount}F`}function T0({label:a,hand:e}){const t=W_(e);return W.jsxs("div",{children:[W.jsx("div",{className:"text-white/90",children:a}),t&&W.jsx("div",{className:"text-cyan-400",children:t})]})}function X_(a){const e=Math.floor(a);return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function Rs({label:a,active:e,warn:t,onClick:i,title:s,children:o}){return W.jsxs("button",{onClick:i,title:s,className:"flex flex-col items-center gap-1 group/btn",children:[W.jsx("span",{className:`w-8 h-8 rounded-full transition-all flex items-center justify-center group-hover/btn:scale-105 group-active/btn:scale-95 ${e?t?"bg-cyan-400 text-black shadow-lg shadow-cyan-400/40":"bg-white text-black shadow-lg shadow-white/40":"bg-white/10 text-white/60 group-hover/btn:bg-white/20 group-hover/btn:text-white"}`,children:o}),W.jsx("span",{className:`text-[8px] tracking-widest transition-colors ${e?"text-white/80":"text-white/35"}`,children:a})]})}function j_({currentPattern:a,onPatternChange:e,layers:t,selectedLayer:i,onPatternHold:s,onLayerCycle:o,showCamera:c,onCameraToggle:u,handData:h,selectedColors:d,hue:p,saturation:g,colorMode:m,onHueChange:y,onSaturationChange:v,onColorModeChange:w,autoHueEnabled:_,onAutoHueToggle:S,set:b,onOpenLibrary:C,audioEnabled:E,onAudioToggle:I,audioSensitivity:A,onAudioSensitivityChange:N,audioControlSpeed:T,onAudioControlSpeedChange:U,audioControlDensity:z,onAudioControlDensityChange:D,audioTriggerBeats:B,onAudioTriggerBeatsChange:$,motion:ee,onMotionChange:V,idleDrive:Z,onIdleDriveToggle:K,fxEnabled:X,fxActive:re,onFxToggle:j,canRecord:O,recording:G,recordSeconds:pe,onRecordToggle:Me,sound:ye,onSoundCycle:te,output:ge,onOutputToggle:me}){var ft;const Ae=ue.useRef(null),We=()=>{Ae.current&&(clearTimeout(Ae.current.timer),Ae.current=null)},tt=st=>{We(),Ae.current={pattern:st,fired:!1,timer:window.setTimeout(()=>{Ae.current&&(Ae.current.fired=!0),s(st)},lx)}},Pt=st=>{const Mt=Ae.current;!Mt||Mt.pattern!==st||(clearTimeout(Mt.timer),Ae.current=null,Mt.fired||e(st))};return W.jsxs(W.Fragment,{children:[W.jsx("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 z-50",children:W.jsx("div",{className:"bg-black/70 backdrop-blur-sm rounded-full py-2 px-6 border border-white/20 font-mono",children:W.jsxs("div",{className:"flex items-center gap-4",children:[W.jsx("button",{onClick:C,title:"Back to the library to change the set (Esc)",className:"px-3 py-1 rounded text-[10px] tracking-wider text-white/40 transition-all hover:bg-white/10 hover:text-white/80",children:"SET"}),W.jsx("div",{className:"w-px h-6 bg-white/20"}),W.jsx("div",{className:"flex items-center gap-1.5",children:b.map((st,Mt)=>{const dt=t.findIndex(nn=>nn.pattern===st),kt=dt===i,It=dt!==-1&&!kt;return W.jsxs("button",{onPointerDown:()=>tt(st),onPointerUp:()=>Pt(st),onPointerLeave:We,className:"relative flex w-[46px] shrink-0 flex-col items-center gap-0.5 group/set",title:`${hs[st].name} (${Wo(Mt)})${dt!==-1?` — layer ${dt+1}`:""} · hold to stack`,children:[W.jsxs("span",{className:`relative flex h-7 w-7 items-center justify-center rounded-full text-xs transition-all ${kt?"bg-white text-black shadow-lg shadow-white/50":It?"bg-white/25 text-white ring-1 ring-emerald-400/70":"bg-white/10 text-white/60 group-hover/set:bg-white/20 group-hover/set:text-white/90"}`,children:[Wo(Mt),dt!==-1&&t.length>1&&W.jsx("span",{className:"absolute -right-1 -top-1 h-3 w-3 rounded-full bg-emerald-400 text-center text-[7px] leading-3 text-black",children:dt+1})]}),W.jsx("span",{className:`w-full truncate text-center text-[8px] leading-none transition-colors ${kt?"text-white/85":"text-white/35 group-hover/set:text-white/65"}`,children:hs[st].short})]},st)})}),W.jsx("div",{className:"w-px h-6 bg-white/20"}),W.jsxs("div",{className:"flex items-center gap-1.5",title:"How hard the hands drive every visual (- and =)",children:[W.jsx("span",{className:"text-[8px] tracking-widest text-white/35",children:"HANDS"}),W.jsx("input",{type:"range","aria-label":"Hand motion",min:0,max:2,step:.05,value:ee,onChange:st=>V(parseFloat(st.target.value)),className:"vj-slider h-1 w-16 cursor-pointer appearance-none rounded-full focus:outline-none",style:{background:`linear-gradient(to right, rgba(255,255,255,0.85) ${ee/2*100}%, rgba(255,255,255,0.15) ${ee/2*100}%)`}}),W.jsxs("span",{className:`w-7 text-[9px] tabular-nums ${ee>1.35?"text-amber-300":ee<.65?"text-cyan-300":"text-white/55"}`,children:[Math.round(ee*100),"%"]})]}),t.length>1&&W.jsxs(W.Fragment,{children:[W.jsx("div",{className:"w-px h-6 bg-white/20"}),W.jsxs("button",{onClick:o,title:"The layer the sliders and colours act on (L) — fade it with [ and ]",className:"px-2 py-1 rounded text-[10px] whitespace-nowrap bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 transition-all",children:["L",i+1,"/",t.length,W.jsxs("span",{className:"text-emerald-300/60",children:[" ",Math.round((((ft=t[i])==null?void 0:ft.opacity)??1)*100),"%"]})]})]})]})})}),W.jsxs("div",{className:"absolute bottom-[25px] left-6 right-6 z-50 flex items-end gap-4 font-mono pointer-events-none",children:[W.jsx("div",{className:"shrink-0 pointer-events-auto",children:W.jsxs("div",{className:"bg-black/70 backdrop-blur-sm rounded-2xl py-2 px-3 border border-white/20 flex items-end gap-2.5 w-fit",children:[W.jsx(Rs,{label:"CAM",active:c,onClick:u,title:"Show the camera preview (C)",children:c?W.jsx(R_,{className:"w-3.5 h-3.5"}):W.jsx(C_,{className:"w-3.5 h-3.5"})}),W.jsx(Rs,{label:"MIC",active:E,onClick:I,title:"Audio-reactive mode: drive the visuals from the microphone (A)",children:E?W.jsx(b0,{className:"w-3.5 h-3.5"}):W.jsx(l_,{className:"w-3.5 h-3.5"})}),W.jsx(Rs,{label:"AUTO",active:Z,onClick:K,title:"Auto-motion: keep hand-driven visuals moving when no hands are tracked (I)",children:W.jsx(m_,{className:"w-3.5 h-3.5"})}),W.jsx("div",{className:"w-px h-8 bg-white/15 self-center"}),W.jsx(Rs,{label:"FX",active:X&&re,warn:X&&re,onClick:j,title:X?"Post effects are on. Click to bypass the whole chain, keeping every setting (X)":"Post effects bypassed. Click to bring them back (X)",children:W.jsx(w_,{className:"w-3.5 h-3.5"})}),W.jsx("div",{className:"w-px h-8 bg-white/15 self-center"}),W.jsx(Rs,{label:"OUT",active:ge,onClick:me,title:ge?"Close the projector window (O)":"Open a second window with only the visuals in it — drag it onto the projector while these controls stay here (O)",children:W.jsx(h_,{className:"w-3.5 h-3.5"})}),O&&W.jsxs(W.Fragment,{children:[W.jsx(Rs,{label:k_[ye],active:ye!=="off",onClick:te,title:O_[ye],children:ye==="off"?W.jsx(N_,{className:"w-3.5 h-3.5"}):ye==="music"?W.jsx(d_,{className:"w-3.5 h-3.5"}):W.jsx(L_,{className:"w-3.5 h-3.5"})}),W.jsx(Rs,{label:G?X_(pe):"REC",active:G,warn:G,onClick:Me,title:G?"Stop and save the take (R)":"Record the visuals — and the camera if its preview is up — with none of these controls in it (R)",children:G?W.jsx(E_,{className:"w-3 h-3 fill-current"}):W.jsx(r_,{className:"w-3.5 h-3.5 fill-current text-red-500 group-hover/btn:text-red-400"})})]})]})}),W.jsx("div",{className:"flex-1 min-w-0 flex justify-center pointer-events-none",children:W.jsx("div",{className:"bg-black/70 backdrop-blur-sm rounded-full py-2 px-6 border border-white/20 max-w-4xl w-full pointer-events-auto",children:W.jsx(B_,{selectedColors:d,hue:p,saturation:g,mode:m,onHueChange:y,onModeChange:w,autoHueEnabled:_,onAutoHueToggle:S})})}),!E&&W.jsxs("div",{className:"shrink-0 bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-white/20 space-y-2 text-xs min-w-[200px] font-mono animate-in fade-in duration-300 pointer-events-auto",children:[W.jsx("div",{className:"text-white/80 mb-2",children:"HAND"}),W.jsxs("div",{className:"space-y-1",children:[h.left&&W.jsx(T0,{label:"L HAND",hand:h.left}),h.right&&W.jsx(T0,{label:"R HAND",hand:h.right}),h.clapping&&W.jsx("div",{className:"text-red-500 text-base animate-bounce",children:"CLAP!"}),!h.left&&!h.right&&W.jsx("div",{className:"text-white/50",children:"NO HANDS"})]}),W.jsxs("div",{className:"text-white/50 text-[10px] mt-2 pt-2 border-t border-white/20",children:["OPEN=FOLLOW",W.jsx("br",{}),"PINCH=SLOW 2F=MED 5F=FAST",W.jsx("br",{}),"CLAP=EXPLODE"]})]}),E&&W.jsx("div",{className:"shrink-0 animate-in slide-in-from-right-5 fade-in duration-300 pointer-events-auto",children:W.jsxs("div",{className:"bg-black/70 backdrop-blur-sm rounded-xl p-4 border border-white/20 font-mono flex flex-col gap-4 w-[160px]",children:[W.jsxs("div",{className:"flex items-center gap-2 border-b border-white/10 pb-2",children:[W.jsx(b0,{className:"w-3.5 h-3.5 text-white/90 animate-pulse"}),W.jsx("span",{className:"text-[10px] font-bold text-white/80 tracking-wider",children:"AUDIO"})]}),W.jsxs("div",{className:"space-y-1 group",children:[W.jsxs("div",{className:"flex justify-between text-[9px] text-white/50 font-medium",children:[W.jsx("span",{className:"group-hover:text-white/80 transition-colors",children:"GAIN"}),W.jsxs("span",{className:"text-white",children:[Math.round(A*100),"%"]})]}),W.jsx("div",{className:"relative h-4 flex items-center",children:W.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:A,onChange:st=>N(parseFloat(st.target.value)),className:"vj-slider w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer focus:outline-none",style:{backgroundImage:`linear-gradient(to right, white 0%, white ${A*100}%, rgba(255,255,255,0.2) ${A*100}%)`}})})]}),W.jsxs("div",{className:"flex flex-col gap-1.5",children:[W.jsxs("button",{onClick:()=>U(!T),className:`flex justify-between items-center px-2 py-1.5 rounded-md text-[9px] font-bold transition-all border ${T?"bg-white text-black border-white shadow-[0_0_10px_rgba(255,255,255,0.3)]":"bg-transparent text-white/50 border-white/10 hover:bg-white/10 hover:text-white"}`,children:[W.jsx("span",{children:"SPEED"}),W.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${T?"bg-black":"bg-white/30"}`})]}),W.jsxs("button",{onClick:()=>D(!z),className:`flex justify-between items-center px-2 py-1.5 rounded-md text-[9px] font-bold transition-all border ${z?"bg-white text-black border-white shadow-[0_0_10px_rgba(255,255,255,0.3)]":"bg-transparent text-white/50 border-white/10 hover:bg-white/10 hover:text-white"}`,children:[W.jsx("span",{children:"DENSITY"}),W.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${z?"bg-black":"bg-white/30"}`})]}),W.jsxs("button",{onClick:()=>$(!B),className:`flex justify-between items-center px-2 py-1.5 rounded-md text-[9px] font-bold transition-all border ${B?"bg-white text-black border-white shadow-[0_0_10px_rgba(255,255,255,0.3)]":"bg-transparent text-white/50 border-white/10 hover:bg-white/10 hover:text-white"}`,children:[W.jsx("span",{children:"BEATS"}),W.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${B?"bg-black":"bg-white/30"}`})]})]})]})})]})]})}const q_="modulepreload",Y_=function(a,e){return new URL(a,e).href},C0={},ux=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let c=function(p){return Promise.all(p.map(g=>Promise.resolve(g).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};const u=document.getElementsByTagName("link"),h=document.querySelector("meta[property=csp-nonce]"),d=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));s=c(t.map(p=>{if(p=Y_(p,i),p in C0)return;C0[p]=!0;const g=p.endsWith(".css"),m=g?'[rel="stylesheet"]':"";if(!!i)for(let w=u.length-1;w>=0;w--){const _=u[w];if(_.href===p&&(!g||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${m}`))return;const v=document.createElement("link");if(v.rel=g?"stylesheet":q_,g||(v.as="script"),v.crossOrigin="",v.href=p,d&&v.setAttribute("nonce",d),document.head.appendChild(v),g)return new Promise((w,_)=>{v.addEventListener("load",w),v.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${p}`)))})}))}function o(c){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=c,window.dispatchEvent(u),!u.defaultPrevented)throw c}return s.then(c=>{for(const u of c||[])u.status==="rejected"&&o(u.reason);return e().catch(o)})},A0=30,R0=.15;function $_({videoElement:a,onHandData:e}){const t=ue.useRef(null),i=ue.useRef(!1),s=ue.useRef(-1),o=ue.useRef(null),c=ue.useRef([]),u=ue.useRef([]),h=ue.useRef({}),d=ue.useRef([]),p=ue.useRef(null);return ue.useEffect(()=>{let g=!0;const m=async()=>{if(!i.current)try{console.log("✋ Initializing MediaPipe Hand Landmarker (Tasks Vision API)...");const _=await ux(()=>import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14"),[],import.meta.url),{HandLandmarker:S,FilesetResolver:b}=_,C=await b.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm");t.current=await S.createFromOptions(C,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",delegate:"GPU"},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.7,minHandPresenceConfidence:.5,minTrackingConfidence:.5}),console.log("✅ Hand tracking initialized (Tasks Vision API)"),i.current=!0,g&&y()}catch(_){console.error("❌ Error initializing hand tracking:",_)}},y=()=>{const _=()=>{if(!g||!t.current||!a)return;const S=performance.now();if(a.currentTime!==s.current){s.current=a.currentTime;try{const b=t.current.detectForVideo(a,S);v(b)}catch(b){console.error("Hand detection error:",b)}}o.current=requestAnimationFrame(_)};_()},v=_=>{const S=Date.now(),b={left:null,right:null};if(_.landmarks&&_.handedness&&_.landmarks.length>0)if(_.handedness.forEach((C,E)=>{const I=_.landmarks[E],A=C[0].categoryName.toLowerCase(),N=I[9],T={x:1-N.x,y:N.y},U=Z_(I),z=K_(I),D=A==="left"?u.current:c.current;let B=0;if(D.length>0){const X=D[D.length-1],re=T.x-X.position.x,j=T.y-X.position.y,O=Math.sqrt(re*re+j*j),G=(S-X.timestamp)/1e3;B=G>0?O/G:0,B=Math.min(B*2,3)}const $=A==="left"?"right":"left";(D.length>0?D[D.length-1].gesture:null)!==U&&(h.current[$]=S);const V=h.current[$]||S,Z=(S-V)/1e3;D.push({position:T,gesture:U,timestamp:S}),D.length>10&&D.shift(),d.current.push({x:T.x,y:T.y,hand:$});const K={position:T,gesture:U,pinchDistance:U==="pinch"?Q_(I):void 0,velocity:B,holdDuration:Z,fingerCount:z,landmarks:I.map(X=>({x:1-X.x,y:X.y,z:X.z}))};A==="left"?b.right=K:b.left=K}),b.left&&b.right){const C=b.left.position.x-b.right.position.x,E=b.left.position.y-b.right.position.y,I=Math.sqrt(C*C+E*E);b.distanceBetweenHands=I,I<R0&&(b.clapping=!0,b.clapIntensity=1-I/R0)}else p.current=null;d.current.length>A0&&(d.current=d.current.slice(-A0)),b.gestureTrail=[...d.current],e(b)},w=()=>{a&&a.readyState>=2?m():setTimeout(w,100)};return w(),()=>{if(g=!1,o.current!==null&&cancelAnimationFrame(o.current),t.current)try{t.current.close(),t.current=null}catch(_){console.warn("Error closing hand landmarker:",_)}i.current=!1}},[a,e]),null}function K_(a){if(!a||a.length<21)return 0;const e=a[0];a[9];let t=0;const i=a[4];a[3];const s=a[2],o=a[1],c=Math.sqrt(Math.pow(i.x-o.x,2)+Math.pow(i.y-o.y,2)),u=Math.sqrt(Math.pow(s.x-o.x,2)+Math.pow(s.y-o.y,2));c>u*1.2&&t++;const h=[{tip:8,pip:6,mcp:5},{tip:12,pip:10,mcp:9},{tip:16,pip:14,mcp:13},{tip:20,pip:18,mcp:17}],d=a[9];d.y-e.y,d.z-e.z;for(const p of h){const g=a[p.tip],m=a[p.pip],y=a[p.mcp],v=g.y<y.y-.02,w=Math.sqrt(Math.pow(g.x-e.x,2)+Math.pow(g.y-e.y,2)+Math.pow(g.z-e.z,2)),_=Math.sqrt(Math.pow(m.x-e.x,2)+Math.pow(m.y-e.y,2)+Math.pow(m.z-e.z,2)),S=w>_*1.05,b={x:y.x-m.x,y:y.y-m.y,z:y.z-m.z},C={x:g.x-m.x,y:g.y-m.y,z:g.z-m.z},E=Math.sqrt(b.x**2+b.y**2+b.z**2),I=Math.sqrt(C.x**2+C.y**2+C.z**2);if(E>0&&I>0){const N=b.x/E*(C.x/I)+b.y/E*(C.y/I)+b.z/E*(C.z/I)<-.3;(v||S||N)&&t++}else(v||S)&&t++}return t}function Z_(a){if(!a||a.length<21)return"none";const e=a[9],t=a[4],i=a[8],s=a[12],o=a[16],c=a[20],u=a[6],h=a[10],d=a[14],p=a[18];if(Math.sqrt(Math.pow(t.x-i.x,2)+Math.pow(t.y-i.y,2)+Math.pow(t.z-i.z,2))<.06)return"pinch";const m=Math.sqrt(Math.pow(i.x-e.x,2)+Math.pow(i.y-e.y,2)+Math.pow(i.z-e.z,2)),y=Math.sqrt(Math.pow(u.x-e.x,2)+Math.pow(u.y-e.y,2)+Math.pow(u.z-e.z,2)),v=m>y*1.1,w=Math.sqrt(Math.pow(s.x-e.x,2)+Math.pow(s.y-e.y,2)+Math.pow(s.z-e.z,2)),_=Math.sqrt(Math.pow(h.x-e.x,2)+Math.pow(h.y-e.y,2)+Math.pow(h.z-e.z,2)),S=w>_*1.1,b=Math.sqrt(Math.pow(o.x-e.x,2)+Math.pow(o.y-e.y,2)+Math.pow(o.z-e.z,2)),C=Math.sqrt(Math.pow(d.x-e.x,2)+Math.pow(d.y-e.y,2)+Math.pow(d.z-e.z,2)),E=b>C*1.1,I=Math.sqrt(Math.pow(c.x-e.x,2)+Math.pow(c.y-e.y,2)+Math.pow(c.z-e.z,2)),A=Math.sqrt(Math.pow(p.x-e.x,2)+Math.pow(p.y-e.y,2)+Math.pow(p.z-e.z,2)),N=I>A*1.1,T=[v,S,E,N].filter(Boolean).length;return T>=3?"open":T<=1?"fist":"none"}function Q_(a){const e=a[4],t=a[8];return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)+Math.pow(e.z-t.z,2))}function J_({onGrant:a,onSkip:e}){return W.jsx("div",{className:"fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center",children:W.jsx("div",{className:"bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-xl rounded-2xl p-8 max-w-md border border-white/20 shadow-2xl",children:W.jsxs("div",{className:"text-center space-y-6",children:[W.jsx("div",{className:"flex justify-center",children:W.jsx("div",{className:"w-20 h-20 bg-purple-600/30 rounded-full flex items-center justify-center",children:W.jsx(ox,{className:"w-10 h-10 text-purple-300"})})}),W.jsxs("div",{children:[W.jsx("h2",{className:"text-2xl text-white mb-2",children:"Camera Access Required"}),W.jsx("p",{className:"text-white/70 text-sm",children:"This VJ app needs camera access to track your hand movements and gestures for interactive visual control."})]}),W.jsx("div",{className:"bg-black/30 rounded-lg p-4 space-y-2 text-left",children:W.jsxs("div",{className:"flex items-start gap-3",children:[W.jsx(a_,{className:"w-5 h-5 text-green-400 mt-0.5 flex-shrink-0"}),W.jsxs("div",{className:"text-sm",children:[W.jsx("div",{className:"text-white/90",children:"Hand Tracking"}),W.jsx("div",{className:"text-white/60 text-xs",children:"Real-time gesture recognition"})]})]})}),W.jsxs("div",{className:"flex gap-3",children:[W.jsx("button",{onClick:e,className:"flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all",children:"Skip"}),W.jsx("button",{onClick:a,className:"flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg transition-all font-medium",children:"Allow Access"})]}),W.jsx("p",{className:"text-white/50 text-xs",children:"Your camera feed is processed locally on your device. No data is sent to external servers."})]})})})}function ei(a){return Number.isFinite(a)?Math.round(Math.min(255,Math.max(0,a))).toString(16).padStart(2,"0"):"00"}const _f={physics:{initialVelocity:4,damping:.98},size:{baseRange:[100,200],growthMultiplier:1.5,shrinkMultiplier:.2,transitionSpeed:.3},glow:{layers:2,expansion:.4,layerFade:.3},emission:{openHandRate:.5,closedHandRate:.05},trail:{fadeAlpha:.3},limits:{maxParticles:50},explosion:{particleCount:50,speedRange:[5,20],sizeMultiplier:1.5,forceMultiplier:10,growthFactor:.8,vibrationDuration:.25,cooldown:1e3,flashDelay:20},controls:{fingerCountSpeed:{oneFinger:.01,twoFingers:1,threeFingers:1.4,fourFingers:1.7,fiveFingers:2},openOpacity:1,closedOpacity:1,fadeOutRate:.08}};function ko(a,e){let t=a;for(const i of e.split(".")){if(typeof t!="object"||t===null)return;t=t[i]}return typeof t=="number"?t:void 0}function Wi(a,e){const t=structuredClone(a);for(const[i,s]of Object.entries(e)){if(!Number.isFinite(s)||ko(a,i)===void 0)continue;const o=i.split("."),c=o.pop();let u=t;for(const h of o)u=u[h];u[c]=s}return t}function P0(a){if(typeof a!="object"||a===null||Array.isArray(a))return{};const e={};for(const[t,i]of Object.entries(a)){if(typeof i!="object"||i===null||Array.isArray(i))continue;const s={};for(const[o,c]of Object.entries(i))typeof c=="number"&&Number.isFinite(c)&&(s[o]=c);Object.keys(s).length>0&&(e[t]=s)}return e}let hx=1,fx=0;function ey(a,e){hx=e,fx+=a*e}function ii(){return hx}function jc(){return fx}class Ih{constructor(e,t,i,s,o){F(this,"x");F(this,"y");F(this,"vx");F(this,"vy");F(this,"size");F(this,"color");F(this,"baseSize");F(this,"targetSize");F(this,"alpha",1);this.x=e,this.y=t;const c=o.physics.initialVelocity;this.vx=(Math.random()-.5)*c,this.vy=(Math.random()-.5)*c;const[u,h]=o.size.baseRange;this.baseSize=(u+Math.random()*(h-u))*s,this.size=this.baseSize,this.targetSize=this.baseSize,this.color=i}update(e,t,i,s){e?(this.targetSize=this.baseSize*s.size.growthMultiplier,this.alpha=s.controls.openOpacity,t>0&&(this.vx+=(Math.random()-.5)*t*s.explosion.forceMultiplier*i,this.vy+=(Math.random()-.5)*t*s.explosion.forceMultiplier*i,this.targetSize=this.baseSize*(1.2+t*s.explosion.growthFactor))):(this.targetSize=this.baseSize*s.size.shrinkMultiplier,this.alpha=Math.max(0,this.alpha-s.controls.fadeOutRate)),this.size+=(this.targetSize-this.size)*s.size.transitionSpeed,this.x+=this.vx*i,this.y+=this.vy*i,this.vx*=s.physics.damping,this.vy*=s.physics.damping}}class ty{constructor(e,t){F(this,"cfg",_f);F(this,"canvas");F(this,"ctx");F(this,"particles",[]);F(this,"time",0);F(this,"vibrationTimer",0);F(this,"isExploding",!1);this.canvas=e,this.ctx=t}setParams(e){this.cfg=Wi(_f,e)}render(e,t){this.time+=.016*ii(),this.ctx.fillStyle=`rgba(0, 0, 0, ${this.cfg.trail.fadeAlpha})`,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&!this.isExploding&&(this.createExplosionParticles(t),this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.004,i=Math.max(0,this.vibrationTimer));let s=this.cfg.controls.fingerCountSpeed.twoFingers,o=!1,c=!1,u=0,h=0;e.left&&(o=e.left.gesture==="open",u=e.left.fingerCount||0,e.left.gesture==="pinch"&&(u=1)),e.right&&(c=e.right.gesture==="open",h=e.right.fingerCount||0,e.right.gesture==="pinch"&&(h=1));const d=o||c,p=Math.max(u,h);if(p===1?s=this.cfg.controls.fingerCountSpeed.oneFinger:p===2?s=this.cfg.controls.fingerCountSpeed.twoFingers:p===3?s=this.cfg.controls.fingerCountSpeed.threeFingers:p===4?s=this.cfg.controls.fingerCountSpeed.fourFingers:p>=5&&(s=this.cfg.controls.fingerCountSpeed.fiveFingers),e.left){const m=e.left.gesture==="open"?this.cfg.emission.openHandRate:this.cfg.emission.closedHandRate;Math.random()<m&&this.particles.push(new Ih(e.left.position.x*this.canvas.width,e.left.position.y*this.canvas.height,t[Math.floor(Math.random()*t.length)],1,this.cfg))}if(e.right){const m=e.right.gesture==="open"?this.cfg.emission.openHandRate:this.cfg.emission.closedHandRate;Math.random()<m&&this.particles.push(new Ih(e.right.position.x*this.canvas.width,e.right.position.y*this.canvas.height,t[Math.floor(Math.random()*t.length)],1,this.cfg))}this.particles=this.particles.filter(g=>{if(g.update(d,i,s,this.cfg),g.alpha<.01)return!1;this.ctx.save(),this.ctx.globalAlpha=g.alpha;for(let m=0;m<this.cfg.glow.layers;m++){const y=g.size*(1+m*this.cfg.glow.expansion),v=this.ctx.createRadialGradient(g.x,g.y,0,g.x,g.y,y),w=(1-m*this.cfg.glow.layerFade)*g.alpha;v.addColorStop(0,g.color+ei(w*255)),v.addColorStop(.5,g.color+ei(w*150)),v.addColorStop(1,g.color+"00"),this.ctx.fillStyle=v,this.ctx.beginPath(),this.ctx.arc(g.x,g.y,y,0,Math.PI*2),this.ctx.fill()}return this.ctx.restore(),!0}),this.particles.length>this.cfg.limits.maxParticles&&(this.particles=this.particles.slice(-this.cfg.limits.maxParticles))}createExplosionParticles(e){const t=this.canvas.width/2,i=this.canvas.height/2;for(let s=0;s<this.cfg.explosion.particleCount;s++){const o=Math.random()*Math.PI*2,[c,u]=this.cfg.explosion.speedRange,h=c+Math.random()*(u-c),d=new Ih(t,i,e[Math.floor(Math.random()*e.length)],this.cfg.explosion.sizeMultiplier,this.cfg);d.vx=Math.cos(o)*h,d.vy=Math.sin(o)*h,this.particles.push(d)}this.ctx.fillStyle="#FFFFFFDD",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),setTimeout(()=>{this.ctx.fillStyle=e[0]+"80",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)},this.cfg.explosion.flashDelay),this.vibrationTimer=this.cfg.explosion.vibrationDuration,this.isExploding=!0,setTimeout(()=>{this.isExploding=!1},this.cfg.explosion.cooldown)}}const yf={trail:{fadeAlpha:.1,lineThickness:2},fingerCountSpeed:{oneFinger:.003,normalFingers:1,fiveFingers:2},fingerCountStrokeWidth:{oneFinger:1,twoFingers:4.5,normalFingers:1.5,fiveFingers:6},complexity:{baseSides:3,leftHandMultiplier:1,rightHandMultiplier:.5,maxSides:12,minSides:3},vibration:{flashDuration:.8,shakeAmountX:40,shakeAmountY:40},polygon:{baseSize:100,strokeWidth:2},layers:{count:5,sizeGrowth:.3,rotationOffset:.5,baseOpacity:.3,opacityFade:.05},bridge:{thickness:5,waveAmplitude:30},animation:{baseRotationMultiplier:.01}};class L0{constructor(e,t){F(this,"cfg",yf);F(this,"canvas");F(this,"ctx");F(this,"time",0);F(this,"vibrationTimer",0);this.canvas=e,this.ctx=t}setParams(e){this.cfg=Wi(yf,e)}render(e,t){var w,_,S,b;this.time+=.016*ii(),this.ctx.fillStyle=`rgba(0, 0, 0, ${this.cfg.trail.fadeAlpha})`,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&(this.ctx.fillStyle="#FFFFFFCC",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.vibrationTimer=this.cfg.vibration.flashDuration),this.vibrationTimer>0&&(this.vibrationTimer-=.016,i=Math.max(0,this.vibrationTimer));let s=1,o=this.cfg.complexity.baseSides,c=1;if(e.left&&e.left.gesture==="open"){const C=e.left.fingerCount||2;C===1?(s=this.cfg.fingerCountSpeed.oneFinger,c=this.cfg.fingerCountStrokeWidth.oneFinger):C===2?(s=this.cfg.fingerCountSpeed.normalFingers,c=this.cfg.fingerCountStrokeWidth.twoFingers):C===5?(s=this.cfg.fingerCountSpeed.fiveFingers,c=this.cfg.fingerCountStrokeWidth.fiveFingers):(s=this.cfg.fingerCountSpeed.normalFingers,c=this.cfg.fingerCountStrokeWidth.normalFingers),o=Math.floor(this.cfg.complexity.baseSides+C*this.cfg.complexity.leftHandMultiplier)}if(e.left&&e.left.gesture==="pinch"&&(s=this.cfg.fingerCountSpeed.oneFinger,c=this.cfg.fingerCountStrokeWidth.oneFinger,o=Math.floor(this.cfg.complexity.baseSides+1*this.cfg.complexity.leftHandMultiplier)),e.right&&e.right.gesture==="open"){const C=e.right.fingerCount||2;let E,I;C===1?(E=this.cfg.fingerCountSpeed.oneFinger,I=this.cfg.fingerCountStrokeWidth.oneFinger):C===2?(E=this.cfg.fingerCountSpeed.normalFingers,I=this.cfg.fingerCountStrokeWidth.twoFingers):C===5?(E=this.cfg.fingerCountSpeed.fiveFingers,I=this.cfg.fingerCountStrokeWidth.fiveFingers):(E=this.cfg.fingerCountSpeed.normalFingers,I=this.cfg.fingerCountStrokeWidth.normalFingers),s*=E,c=Math.max(c,I),o+=Math.floor(C*this.cfg.complexity.rightHandMultiplier)}e.right&&e.right.gesture==="pinch"&&(s*=this.cfg.fingerCountSpeed.oneFinger,c=Math.max(c,this.cfg.fingerCountStrokeWidth.oneFinger),o+=Math.floor(1*this.cfg.complexity.rightHandMultiplier));const u=this.time*s*this.cfg.animation.baseRotationMultiplier,h=i>0?(Math.random()-.5)*this.cfg.vibration.shakeAmountX*i:0,d=i>0?(Math.random()-.5)*this.cfg.vibration.shakeAmountY*i:0;this.drawGestureTrails(e,t);const p=(w=e.left)!=null&&w.position.x?e.left.position.x*this.canvas.width+h:this.canvas.width/2,g=(_=e.left)!=null&&_.position.y?e.left.position.y*this.canvas.height+d:this.canvas.height/2,m=(S=e.right)!=null&&S.position.x?e.right.position.x*this.canvas.width+h:this.canvas.width/2+100,y=(b=e.right)!=null&&b.position.y?e.right.position.y*this.canvas.height+d:this.canvas.height/2,v=this.cfg.polygon.baseSize*(1+i);for(let C=0;C<this.cfg.layers.count;C++){const E=v*(1+C*this.cfg.layers.sizeGrowth),I=u+C*this.cfg.layers.rotationOffset;e.left&&e.left.gesture==="open"&&this.drawPolygon(p,g,Math.max(this.cfg.complexity.minSides,Math.min(this.cfg.complexity.maxSides,o+C)),E+C*30,I,t[C%t.length],this.cfg.layers.baseOpacity-C*this.cfg.layers.opacityFade,c),e.right&&e.right.gesture==="open"&&this.drawPolygon(m,y,Math.max(this.cfg.complexity.minSides,Math.min(this.cfg.complexity.maxSides,o+C)),E+C*30,-I,t[(C+2)%t.length],this.cfg.layers.baseOpacity-C*this.cfg.layers.opacityFade,c)}e.left&&e.right&&e.left.gesture==="open"&&e.right.gesture==="open"&&this.drawBridge(p,g,m,y,t,v,o)}drawGestureTrails(e,t){if(!e.gestureTrail||e.gestureTrail.length<2)return;const i=e.gestureTrail;for(let s=1;s<i.length;s++){const o=i[s-1],c=i[s],u=s/i.length,h=c.hand==="left"?t[0]:t[2];this.ctx.strokeStyle=h+ei(u*100),this.ctx.lineWidth=this.cfg.trail.lineThickness*u,this.ctx.lineCap="round",this.ctx.beginPath(),this.ctx.moveTo(o.x*this.canvas.width,o.y*this.canvas.height),this.ctx.lineTo(c.x*this.canvas.width,c.y*this.canvas.height),this.ctx.stroke()}}drawPolygon(e,t,i,s,o,c,u,h){this.ctx.save(),this.ctx.translate(e,t),this.ctx.rotate(o),this.ctx.beginPath();for(let p=0;p<=i;p++){const g=p/i*Math.PI*2,m=Math.cos(g)*s,y=Math.sin(g)*s;p===0?this.ctx.moveTo(m,y):this.ctx.lineTo(m,y)}this.ctx.closePath();const d=this.ctx.createRadialGradient(0,0,0,0,0,s);d.addColorStop(0,c+ei(u*255)),d.addColorStop(1,c+"00"),this.ctx.fillStyle=d,this.ctx.fill(),this.ctx.strokeStyle=c+ei(u*200),this.ctx.lineWidth=this.cfg.polygon.strokeWidth*h,this.ctx.stroke(),this.ctx.restore()}drawBridge(e,t,i,s,o,c,u){const h=this.ctx.createLinearGradient(e,t,i,s);o.forEach((d,p)=>{h.addColorStop(p/(o.length-1),d+"80")}),this.ctx.strokeStyle=h,this.ctx.lineWidth=this.cfg.bridge.thickness,this.ctx.lineCap="round",this.ctx.beginPath();for(let d=0;d<=u;d++){const p=d/u,g=e+(i-e)*p,m=t+(s-t)*p,y=Math.sin(p*Math.PI*4+this.time*2)*this.cfg.bridge.waveAmplitude,v=-(s-t)/Math.hypot(i-e,s-t),w=(i-e)/Math.hypot(i-e,s-t);d===0?this.ctx.moveTo(g+v*y,m+w*y):this.ctx.lineTo(g+v*y,m+w*y)}this.ctx.stroke()}}const Sf={fingerCountSpeed:{oneFinger:.05,normalFingers:1,fiveFingers:1.5,maxSpeed:2},wave:{baseAmplitude:50,maxAmplitude:250,baseFrequency:.01,maxFrequency:.05,segments:200,lineThickness:3},fingerAmplitude:{oneFingerMultiplier:.1,twoFingersMultiplier:.6,threeFingersMultiplier:1.2,fourFingersMultiplier:2.5,fiveFingersMultiplier:4,normalFingersMultiplier:.3},gesture:{leftOpenHandBoost:3,rightOpenHandBoost:1.5,leftFistAmplitude:20,rightFistReduction:.5,pinchBaseFrequency:.005,pinchLeftMultiplier:.1,pinchRightMultiplier:.05,pinchLeftYOffsetMultiplier:-150,pinchRightYOffsetMultiplier:-150},velocity:{intensityMultiplier:2},hold:{durationThreshold:2,amplitudeBoost:2},distance:{scaleMultiplier:2},waveCount:{active:7,idle:3},layers:{primarySpeed:2,secondarySpeed:3,tertiarySpeed:1,secondaryAmplitude:.5,tertiaryAmplitude:.3},handInfluence:{strength:.5,radius:200},focalPoint:{baseSize:20,pulseSpeed:5,pulseAmount:.1,glowLayers:3},visual:{backgroundTint:"20",clapFlashOpacity:"30",fillOpacity:50}};class ny{constructor(e,t){F(this,"cfg",Sf);F(this,"canvas");F(this,"ctx");F(this,"time",0);F(this,"bgGradient",null);F(this,"needsGradientUpdate",!0);this.canvas=e,this.ctx=t}setParams(e){this.cfg=Wi(Sf,e)}render(e,t){var v,w,_,S;this.time+=.016*ii(),this.time>1e3&&(this.time=this.time%1e3),this.needsGradientUpdate&&(this.bgGradient=this.ctx.createLinearGradient(0,0,0,this.canvas.height),this.bgGradient.addColorStop(0,"#000000"),this.bgGradient.addColorStop(1,t[0]+this.cfg.visual.backgroundTint),this.needsGradientUpdate=!1),this.ctx.fillStyle=this.bgGradient,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=this.cfg.wave.baseAmplitude,s=this.cfg.wave.baseFrequency,o=1,c=1,u=1,h=0;if(e.left){Math.max(0,Math.min(1,e.left.position.x||.5)),Math.max(0,Math.min(1,e.left.position.y||.5));const b=e.left.velocity||0,C=Math.max(0,Math.min(b,1));c*=1+C*this.cfg.velocity.intensityMultiplier;let E=e.left.fingerCount||0;e.left.gesture==="pinch"&&(E=1),E===1?(u=this.cfg.fingerCountSpeed.oneFinger,i*=this.cfg.fingerAmplitude.oneFingerMultiplier):E===2?(u=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.twoFingersMultiplier):E===3?(u=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.threeFingersMultiplier):E===4?(u=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.fourFingersMultiplier):E>=5&&(u=this.cfg.fingerCountSpeed.fiveFingers,i*=this.cfg.fingerAmplitude.fiveFingersMultiplier),(e.left.holdDuration||0)>this.cfg.hold.durationThreshold&&(i*=this.cfg.hold.amplitudeBoost),e.left.gesture==="open"?i*=this.cfg.gesture.leftOpenHandBoost*c:e.left.gesture==="fist"?i=this.cfg.gesture.leftFistAmplitude:e.left.gesture==="pinch"&&(s=this.cfg.gesture.pinchBaseFrequency+(e.left.pinchDistance||0)*this.cfg.gesture.pinchLeftMultiplier,h=(e.left.pinchDistance||0)*this.cfg.gesture.pinchLeftYOffsetMultiplier)}if(e.right){Math.max(0,Math.min(1,e.right.position.x||.5)),Math.max(0,Math.min(1,e.right.position.y||.5));const b=e.right.velocity||0,C=Math.max(0,Math.min(b,1));c*=1+C*this.cfg.velocity.intensityMultiplier;let E=e.right.fingerCount||0;e.right.gesture==="pinch"&&(E=1);let I=1;E===1?(I=this.cfg.fingerCountSpeed.oneFinger,i*=this.cfg.fingerAmplitude.oneFingerMultiplier):E===2?(I=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.twoFingersMultiplier):E===3?(I=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.threeFingersMultiplier):E===4?(I=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.fourFingersMultiplier):E>=5&&(I=this.cfg.fingerCountSpeed.fiveFingers,i*=this.cfg.fingerAmplitude.fiveFingersMultiplier),u*=I,(e.right.holdDuration||0)>this.cfg.hold.durationThreshold&&(i*=this.cfg.hold.amplitudeBoost),e.right.gesture==="open"?i*=this.cfg.gesture.rightOpenHandBoost*c:e.right.gesture==="fist"?i*=this.cfg.gesture.rightFistReduction:e.right.gesture==="pinch"&&(s+=(e.right.pinchDistance||0)*this.cfg.gesture.pinchRightMultiplier,h=(e.right.pinchDistance||0)*this.cfg.gesture.pinchRightYOffsetMultiplier)}c=Math.min(c,3),u=Math.min(u,this.cfg.fingerCountSpeed.maxSpeed),i=Math.min(i,this.cfg.wave.maxAmplitude),s=Math.min(s,this.cfg.wave.maxFrequency),isFinite(i)||(i=this.cfg.wave.baseAmplitude),isFinite(s)||(s=this.cfg.wave.baseFrequency),isFinite(u)||(u=1),e.distanceBetweenHands&&(o=.5+e.distanceBetweenHands*this.cfg.distance.scaleMultiplier);const d=e.left||e.right?this.cfg.waveCount.active:this.cfg.waveCount.idle,p=((v=e.left)==null?void 0:v.fingerCount)||0,g=((w=e.right)==null?void 0:w.fingerCount)||0,m=Math.max(p,g);let y=1;m>=4&&(y=.6);for(let b=0;b<d;b++){const C=this.canvas.height/(d+1)*(b+1)+h,E=b/d*Math.PI*2,I=((_=e.left)==null?void 0:_.position.x)??0,A=((S=e.right)==null?void 0:S.position.x)??1,N=Math.max(0,Math.min(1,I))*this.canvas.width,T=Math.max(0,Math.min(1,A))*this.canvas.width;this.drawWave(C,i*o,s,this.time*u+E,t[b%t.length],N,T,b/d,y)}if(e.left){const b=Math.max(0,Math.min(1,e.left.position.x||.5)),C=Math.max(0,Math.min(1,e.left.position.y||.5));this.drawFocalPoint(b*this.canvas.width,C*this.canvas.height,t[0],o,i)}if(e.right){const b=Math.max(0,Math.min(1,e.right.position.x||.5)),C=Math.max(0,Math.min(1,e.right.position.y||.5));this.drawFocalPoint(b*this.canvas.width,C*this.canvas.height,t[2%t.length],o,i)}}drawWave(e,t,i,s,o,c,u,h,d){this.ctx.beginPath();const p=Math.floor(this.cfg.wave.segments*d);t=Math.min(t,150);for(let v=0;v<=p;v++){const w=v/p*this.canvas.width,_=Math.sin(w*i+s*this.cfg.layers.primarySpeed)*t,S=Math.sin(w*i*2+s*this.cfg.layers.secondarySpeed)*(t*this.cfg.layers.secondaryAmplitude),b=Math.sin(w*i*.5+s*this.cfg.layers.tertiarySpeed)*(t*this.cfg.layers.tertiaryAmplitude);let C=0;const E=Math.abs(w-c),I=Math.abs(w-u),A=-E/this.cfg.handInfluence.radius,N=-I/this.cfg.handInfluence.radius;A>-10&&(C+=t*this.cfg.handInfluence.strength*Math.exp(A)),N>-10&&(C+=t*this.cfg.handInfluence.strength*Math.exp(N)),C=Math.min(C,80);let T=e+_+S+b+C;T=Math.max(-50,Math.min(this.canvas.height+50,T)),isFinite(T)&&(v===0?this.ctx.moveTo(w,T):this.ctx.lineTo(w,T))}const g=Math.max(0,Math.min(1,h)),m=this.ctx.createLinearGradient(0,0,this.canvas.width,0);m.addColorStop(0,o+ei(g*100)),m.addColorStop(.5,o+ei(g*255)),m.addColorStop(1,o+ei(g*100)),this.ctx.strokeStyle=m,this.ctx.lineWidth=this.cfg.wave.lineThickness,this.ctx.stroke(),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.closePath();const y=this.ctx.createLinearGradient(0,e,0,this.canvas.height);y.addColorStop(0,o+ei(g*this.cfg.visual.fillOpacity)),y.addColorStop(1,o+"00"),this.ctx.fillStyle=y,this.ctx.fill()}drawFocalPoint(e,t,i,s,o){const c=this.cfg.focalPoint.baseSize*s+Math.sin(this.time*this.cfg.focalPoint.pulseSpeed)*o*this.cfg.focalPoint.pulseAmount,u=Math.max(.1,c);for(let h=0;h<this.cfg.focalPoint.glowLayers;h++){const d=this.ctx.createRadialGradient(e,t,0,e,t,u*(h+1));d.addColorStop(0,i+"AA"),d.addColorStop(1,i+"00"),this.ctx.fillStyle=d,this.ctx.beginPath(),this.ctx.arc(e,t,u*(h+1),0,Math.PI*2),this.ctx.fill()}}}class iy{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"time",0);F(this,"nodes",[]);F(this,"glitchBlocks",[]);F(this,"pixelSize",20);F(this,"vibrationTimer",0);F(this,"glitchIntensity",0);F(this,"isExploding",!1);this.canvas=e,this.ctx=t;const i=40;for(let s=0;s<i;s++){const o=Math.random()*e.width,c=Math.random()*e.height,u={x:o,y:c,targetX:o,targetY:c,vx:0,vy:0,size:4+Math.random()*8,connections:[],waveform:Array.from({length:50},()=>Math.random()*2-1),attractedToHand:null};this.nodes.push(u)}this.updateConnections()}updateConnections(){this.nodes.forEach(e=>e.connections=[]),this.nodes.forEach((e,t)=>{this.nodes.forEach((i,s)=>{t!==s&&Math.hypot(e.x-i.x,e.y-i.y)<200&&e.connections.length<4&&e.connections.push(s)})})}render(e,t){this.time+=.016*ii(),this.ctx.fillStyle="rgba(0, 0, 0, 0.1)",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&!this.isExploding&&(this.vibrationTimer=1,this.glitchIntensity=1,this.createGlitchExplosion(t),this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.016,i=Math.max(0,this.vibrationTimer)),this.glitchIntensity>0&&(this.glitchIntensity-=.01);let s=1,o=!1,c=0,u=0,h=0,d=0,p=!1,g=!1,m=2,y=2;if(e.left&&e.left.gesture==="open"){o=!0,p=!0;const v=e.left.fingerCount||2;m=v,v===1?s=.01:v===5?s=2:s=1,c=e.left.position.x*this.canvas.width,u=e.left.position.y*this.canvas.height}if(e.left&&e.left.gesture==="pinch"&&(o=!0,p=!0,m=1,s=.01,c=e.left.position.x*this.canvas.width,u=e.left.position.y*this.canvas.height),e.right&&e.right.gesture==="open"){o=!0,g=!0;const v=e.right.fingerCount||2;y=v;let w;v===1?w=.01:v===5?w=2:w=1,s*=w,h=e.right.position.x*this.canvas.width,d=e.right.position.y*this.canvas.height}e.right&&e.right.gesture==="pinch"&&(o=!0,g=!0,y=1,s*=.01,h=e.right.position.x*this.canvas.width,d=e.right.position.y*this.canvas.height),this.nodes.forEach((v,w)=>{if(o){if(p&&g){const b=Math.hypot(v.x-c,v.y-u),C=Math.hypot(v.x-h,v.y-d);b<C?(v.attractedToHand="left",v.targetX=c+Math.cos(w*.5+this.time*s)*100,v.targetY=u+Math.sin(w*.5+this.time*s)*100):(v.attractedToHand="right",v.targetX=h+Math.cos(w*.5+this.time*s)*100,v.targetY=d+Math.sin(w*.5+this.time*s)*100)}else if(p){v.attractedToHand="left";const b=w/this.nodes.length*Math.PI*2+this.time*s,C=50+w%3*60;v.targetX=c+Math.cos(b)*C,v.targetY=u+Math.sin(b)*C}else if(g){v.attractedToHand="right";const b=w/this.nodes.length*Math.PI*2+this.time*s,C=50+w%3*60;v.targetX=h+Math.cos(b)*C,v.targetY=d+Math.sin(b)*C}const _=v.targetX-v.x,S=v.targetY-v.y;v.vx+=_*.05*s,v.vy+=S*.05*s}else{v.targetX+=(Math.random()-.5)*2,v.targetY+=(Math.random()-.5)*2;const _=v.targetX-v.x,S=v.targetY-v.y;v.vx+=_*.01,v.vy+=S*.01}i>0&&(v.vx+=(Math.random()-.5)*i*40,v.vy+=(Math.random()-.5)*i*40),v.vx*=.85,v.vy*=.85,v.x+=v.vx,v.y+=v.vy,v.x<0&&(v.x=this.canvas.width),v.x>this.canvas.width&&(v.x=0),v.y<0&&(v.y=this.canvas.height),v.y>this.canvas.height&&(v.y=0),v.waveform.shift(),v.waveform.push(Math.sin(this.time*s*2+v.x*.01)*(o?2:.5))}),this.time%.5<.016&&this.updateConnections(),this.drawNodeConnections(t,i,p,g,c,u,h,d),this.drawNodes(t,i),this.drawWaveforms(t,s),this.drawHandIndicators(e,t,m,y),this.drawGlitchBlocks(t),this.glitchIntensity>.3&&this.drawScreenGlitch(),o&&Math.random()<.03*s&&this.spawnGlitchBlock(t)}drawNodeConnections(e,t,i,s,o,c,u,h){this.nodes.forEach((d,p)=>{if(d.attractedToHand==="left"&&i){this.ctx.beginPath(),this.ctx.moveTo(d.x,d.y),this.ctx.lineTo(o,c);const g=this.ctx.createLinearGradient(d.x,d.y,o,c);g.addColorStop(0,e[0]+"80"),g.addColorStop(1,e[1]+"FF"),this.ctx.strokeStyle=g,this.ctx.lineWidth=2+t*3,this.ctx.stroke()}if(d.attractedToHand==="right"&&s){this.ctx.beginPath(),this.ctx.moveTo(d.x,d.y),this.ctx.lineTo(u,h);const g=this.ctx.createLinearGradient(d.x,d.y,u,h);g.addColorStop(0,e[2]+"80"),g.addColorStop(1,e[3]+"FF"),this.ctx.strokeStyle=g,this.ctx.lineWidth=2+t*3,this.ctx.stroke()}d.connections.forEach(g=>{const m=this.nodes[g];if(!m)return;this.ctx.beginPath(),this.ctx.moveTo(d.x,d.y),this.ctx.lineTo(m.x,m.y);const y=Math.floor(p/this.nodes.length*e.length);this.ctx.strokeStyle=e[y]+"40",this.ctx.lineWidth=1+t*2,this.ctx.stroke()})})}drawNodes(e,t){this.nodes.forEach((i,s)=>{const o=Math.floor(s/this.nodes.length*e.length),c=i.size*(1+t*.5),u=this.ctx.createRadialGradient(i.x,i.y,0,i.x,i.y,c);u.addColorStop(0,e[o]+"FF"),u.addColorStop(.5,e[(o+1)%e.length]+"AA"),u.addColorStop(1,e[o]+"00"),this.ctx.fillStyle=u,this.ctx.beginPath(),this.ctx.arc(i.x,i.y,c,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="#FFFFFF80",this.ctx.beginPath(),this.ctx.arc(i.x,i.y,c*.3,0,Math.PI*2),this.ctx.fill()})}drawWaveforms(e,t){this.nodes.forEach((i,s)=>{const o=Math.floor(s/this.nodes.length*e.length);this.ctx.beginPath(),this.ctx.strokeStyle=e[o]+"60",this.ctx.lineWidth=2;for(let c=0;c<i.waveform.length-1;c++){const u=i.x+c-i.waveform.length/2,h=i.y+i.waveform[c]*20;c===0?this.ctx.moveTo(u,h):this.ctx.lineTo(u,h)}this.ctx.stroke()})}drawHandIndicators(e,t,i,s){if(e.left&&e.left.gesture==="open"){const o=e.left.position.x*this.canvas.width,c=e.left.position.y*this.canvas.height,u=30+Math.sin(this.time*3)*10;this.ctx.strokeStyle=t[0]+"AA",this.ctx.lineWidth=3,this.ctx.beginPath(),this.ctx.arc(o,c,u,0,Math.PI*2),this.ctx.stroke(),this.ctx.fillStyle=t[0],this.ctx.font="20px monospace",this.ctx.fillText(`${i}`,o-10,c+5)}if(e.right&&e.right.gesture==="open"){const o=e.right.position.x*this.canvas.width,c=e.right.position.y*this.canvas.height,u=30+Math.sin(this.time*3)*10;this.ctx.strokeStyle=t[2]+"AA",this.ctx.lineWidth=3,this.ctx.beginPath(),this.ctx.arc(o,c,u,0,Math.PI*2),this.ctx.stroke(),this.ctx.fillStyle=t[2],this.ctx.font="20px monospace",this.ctx.fillText(`${s}`,o-10,c+5)}}drawGlitchBlocks(e){this.glitchBlocks=this.glitchBlocks.filter(t=>(t.life-=.016,t.life>0?(this.ctx.fillStyle=t.color+ei(t.life*255),this.ctx.fillRect(t.x,t.y,t.width,t.height),!0):!1))}spawnGlitchBlock(e){this.glitchBlocks.push({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height,width:20+Math.random()*100,height:10+Math.random()*50,color:e[Math.floor(Math.random()*e.length)],life:.5+Math.random()*.5})}createGlitchExplosion(e){for(let t=0;t<50;t++)this.spawnGlitchBlock(e);this.ctx.fillStyle="#FFFFFF60",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.nodes.forEach(t=>{t.vx=(Math.random()-.5)*50,t.vy=(Math.random()-.5)*50})}drawScreenGlitch(){const e=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height),t=Math.floor(Math.random()*20)-10;this.ctx.putImageData(e,t,0);for(let i=0;i<5;i++){const s=Math.random()*this.canvas.height,o=5+Math.random()*20,c=this.ctx.getImageData(0,s,this.canvas.width,o),u=(Math.random()-.5)*100;this.ctx.putImageData(c,u,s)}}}class ry{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"fragments",[]);F(this,"hearts",[]);F(this,"glitchIntensity",0);F(this,"lastHandsTouching",!1);F(this,"handsTouchingTime",0);F(this,"gracePeriod",0);this.canvas=e,this.ctx=t}render(e,t){this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);const i=this.checkHandsTouching(e);i?(this.handsTouchingTime+=1,this.gracePeriod=30,this.spawnHearts(e)):this.gracePeriod>0?(this.gracePeriod-=1,this.handsTouchingTime+=1):this.handsTouchingTime=0,this.lastHandsTouching=i,this.updateHearts(),this.renderHearts(),this.glitchIntensity*=.95,e.left&&e.left.landmarks&&this.renderHandFromLandmarks(e.left.landmarks,"left"),e.right&&e.right.landmarks&&this.renderHandFromLandmarks(e.right.landmarks,"right"),this.applyNoiseOverlay(),(this.glitchIntensity>.1||Math.random()<.05)&&this.applyGlitchEffect()}renderHandFromLandmarks(e,t){const s=this.canvas.width/2,o=this.canvas.height/2,c=e.map(p=>({x:s+(p.x*this.canvas.width-s)*1.8,y:o+(p.y*this.canvas.height-o)*1.8,z:p.z})),u=c[0],h=180*1.8,d={x:u.x,y:u.y+h,z:u.z};this.fillHandWithDots(c,u,d),this.drawHandSkeleton(c),this.drawTechnicalMarkers(u.x,u.y)}fillHandWithDots(e,t,i){const c=e.map(m=>m.x),u=e.map(m=>m.y),h=Math.min(...c,i.x)-50,d=Math.max(...c,i.x)+50,p=Math.min(...u)-50,g=Math.max(...u,i.y)+50;for(let m=p;m<g;m+=7)for(let y=h;y<d;y+=7){const v=this.getDistanceToHandSkeleton(y,m,e,t,i);if(v.inside){const S=1-v.distance/45,b=Math.pow(S,1.5),C=v.zDepth,E=b*(.7+C*.3);if(E<.15)continue;const I=Math.floor(E*255),A=Math.max(.3,Math.min(1,E*1.2)),N=(Math.random()-.5)*8*this.glitchIntensity,T=(Math.random()-.5)*8*this.glitchIntensity,U=.8+Math.random()*.2;this.ctx.fillStyle=`rgba(${I}, ${I}, ${I}, ${A*U})`,this.ctx.beginPath(),this.ctx.arc(y+N,m+T,1.5,0,Math.PI*2),this.ctx.fill(),E>.8&&Math.random()<.15&&(this.ctx.fillStyle=`rgba(255, 255, 255, ${A*1.3})`,this.ctx.beginPath(),this.ctx.arc(y+N,m+T,1.5*1.2,0,Math.PI*2),this.ctx.fill())}}}getDistanceToHandSkeleton(e,t,i,s,o){const c=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[0,9],[9,10],[10,11],[11,12],[0,13],[13,14],[14,15],[15,16],[0,17],[17,18],[18,19],[19,20],[5,9],[9,13],[13,17]];let u=1/0,h=0;for(const[m,y]of c){const v=i[m],w=i[y],_=this.distanceToSegment(e,t,v.x,v.y,w.x,w.y);u=Math.min(u,_),h=(v.z+w.z)/2}const d=this.distanceToSegment(e,t,s.x,s.y,o.x,o.y);return u=Math.min(u,d),h=(s.z+o.z)/2,{inside:u<45,distance:u,zDepth:h}}distanceToSegment(e,t,i,s,o,c){const u=o-i,h=c-s,d=u*u+h*h;if(d===0)return Math.sqrt((e-i)*(e-i)+(t-s)*(t-s));let p=((e-i)*u+(t-s)*h)/d;p=Math.max(0,Math.min(1,p));const g=i+p*u,m=s+p*h;return Math.sqrt((e-g)*(e-g)+(t-m)*(t-m))}drawHandSkeleton(e){this.ctx.strokeStyle="rgba(255, 255, 255, 0.3)",this.ctx.lineWidth=1,this.ctx.setLineDash([4,4]);const t=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[0,9],[9,10],[10,11],[11,12],[0,13],[13,14],[14,15],[15,16],[0,17],[17,18],[18,19],[19,20],[5,9],[9,13],[13,17],[17,5]];this.ctx.beginPath();for(const[i,s]of t){const o=e[i],c=e[s],u=(Math.random()-.5)*5*this.glitchIntensity,h=(Math.random()-.5)*5*this.glitchIntensity,d=(Math.random()-.5)*5*this.glitchIntensity,p=(Math.random()-.5)*5*this.glitchIntensity;this.ctx.moveTo(o.x+u,o.y+h),this.ctx.lineTo(c.x+d,c.y+p)}this.ctx.stroke(),this.ctx.setLineDash([]),this.ctx.fillStyle="rgba(255, 255, 255, 0.7)",e.forEach(i=>{this.ctx.beginPath(),this.ctx.arc(i.x,i.y,2,0,Math.PI*2),this.ctx.fill()})}drawTechnicalMarkers(e,t){this.ctx.strokeStyle="rgba(255, 255, 255, 0.5)",this.ctx.lineWidth=1;const i=15,s=80;[[e-s,t-s],[e+s,t-s],[e-s,t+s],[e+s,t+s]].forEach(([u,h])=>{this.ctx.beginPath(),this.ctx.moveTo(u,h),this.ctx.lineTo(u+(u<e?i:-i),h),this.ctx.moveTo(u,h),this.ctx.lineTo(u,h+(h<t?i:-i)),this.ctx.stroke()}),this.ctx.strokeStyle="rgba(255, 255, 255, 0.7)",this.ctx.lineWidth=1.5,this.ctx.beginPath(),this.ctx.moveTo(e-12,t),this.ctx.lineTo(e+12,t),this.ctx.moveTo(e,t-12),this.ctx.lineTo(e,t+12),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.arc(e,t,3,0,Math.PI*2),this.ctx.stroke(),this.ctx.fillStyle="rgba(255, 255, 255, 0.8)",this.ctx.font="11px monospace";const c=`[${Math.floor(e)},${Math.floor(t)}]`;this.ctx.fillText(c,e+s+15,t),this.ctx.fillStyle="rgba(255, 255, 255, 0.6)",this.ctx.font="9px monospace",this.ctx.fillText("TRACKING",e+s+15,t+15)}applyNoiseOverlay(){const e=.03+this.glitchIntensity*.04,t=2,i=.15;for(let s=0;s<this.canvas.width;s+=t*2)for(let o=0;o<this.canvas.height;o+=t*2)if(Math.random()<i){const c=Math.floor(Math.random()*255),u=Math.random()*e;this.ctx.fillStyle=`rgba(${c}, ${c}, ${c}, ${u})`,this.ctx.fillRect(s,o,t,t)}}applyGlitchEffect(){const e=Math.max(this.glitchIntensity,Math.random()*.3),t=15+Math.random()*15,i=Math.floor(this.canvas.height/t);for(let s=0;s<i;s++)if(Math.random()<e*.3){const o=s*t,c=(Math.random()-.5)*60*e;try{const u=this.ctx.getImageData(0,o,this.canvas.width,Math.min(t,this.canvas.height-o));this.ctx.putImageData(u,c,o)}catch{}}if(Math.random()<e*.5)for(let s=0;s<8;s++){const o=Math.random()*this.canvas.width,c=Math.random()*this.canvas.height,u=Math.random()*40+10,h=Math.random()*15+5;this.ctx.fillStyle="rgba(255, 255, 255, 0.3)",this.ctx.fillRect(o,c,u,h)}}checkHandsTouching(e){if(!e.left||!e.right||!e.left.landmarks||!e.right.landmarks)return!1;const t=[e.left.landmarks[0],e.left.landmarks[8],e.left.landmarks[12],e.left.landmarks[4]],i=[e.right.landmarks[0],e.right.landmarks[8],e.right.landmarks[12],e.right.landmarks[4]];for(const s of t)for(const o of i){const c=Math.sqrt(Math.pow(s.x-o.x,2)+Math.pow(s.y-o.y,2));if(c<.08)return console.log("✋ Hands touching! Distance:",c.toFixed(3)),!0}return!1}spawnHearts(e){if(!(Math.random()>.8)){console.log("Spawning hearts! Current count:",this.hearts.length);for(let t=0;t<3;t++){let s=!1;for(let o=0;o<20&&!s;o++){const c=Math.random()*this.canvas.width,u=Math.random()*this.canvas.height,h=20+Math.random()*30,d=h*1.5;let p=!1;for(const g of this.hearts){const m=c-g.x,y=u-g.y;if(Math.sqrt(m*m+y*y)<d+g.size*.75){p=!0;break}}p||(this.hearts.push({x:c,y:u,vx:0,vy:0,size:h,life:1,rotation:0,rotationSpeed:0}),s=!0,console.log("Heart placed at:",c,u,"size:",h))}}}}updateHearts(){this.hearts=this.hearts.filter(e=>(e.life-=.008,e.life>0))}renderHearts(){const e=jc();this.hearts.forEach(t=>{this.ctx.save(),this.ctx.translate(t.x,t.y);const s=e*2.5%1;let o=1;s<.15?o=1+Math.sin(s/.15*Math.PI)*.2:s>=.2&&s<.3?o=1+Math.sin((s-.2)/.1*Math.PI)*.15:o=1,this.ctx.scale(o,o);const c=Math.max(2,t.size/8),u=t.life*.9,h=[[0,1,1,0,0,1,1,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,0],[0,0,1,1,1,1,0,0],[0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0]],d=-4*c,p=-4*c;for(let g=0;g<8;g++)for(let m=0;m<8;m++)h[g][m]===1&&(this.ctx.fillStyle=`rgba(255, 255, 255, ${u})`,this.ctx.fillRect(d+m*c,p+g*c,c,c),this.ctx.strokeStyle=`rgba(255, 255, 255, ${u*.3})`,this.ctx.lineWidth=.5,this.ctx.strokeRect(d+m*c,p+g*c,c,c));this.ctx.restore()})}}class sy{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"rectangles",[]);F(this,"baseWidth",1920);F(this,"baseHeight",1080);F(this,"time",0);F(this,"gridStructure",[]);this.canvas=e,this.ctx=t,this.createVariedLayout()}createVariedLayout(){[{x:0,y:0,w:480,h:360},{x:480,y:0,w:320,h:180},{x:800,y:0,w:320,h:180},{x:1120,y:0,w:400,h:180},{x:1520,y:0,w:400,h:180},{x:480,y:180,w:240,h:180},{x:720,y:180,w:240,h:180},{x:960,y:180,w:160,h:180},{x:1120,y:180,w:240,h:180},{x:1360,y:180,w:280,h:180},{x:1640,y:180,w:280,h:180},{x:0,y:360,w:120,h:360},{x:120,y:360,w:120,h:360},{x:240,y:360,w:120,h:360},{x:360,y:360,w:120,h:360},{x:480,y:360,w:320,h:360},{x:800,y:360,w:320,h:360},{x:1120,y:360,w:200,h:180},{x:1320,y:360,w:200,h:180},{x:1520,y:360,w:200,h:180},{x:1720,y:360,w:200,h:180},{x:1120,y:540,w:160,h:180},{x:1280,y:540,w:160,h:180},{x:1440,y:540,w:240,h:180},{x:1680,y:540,w:240,h:180},{x:0,y:720,w:160,h:360},{x:160,y:720,w:160,h:360},{x:320,y:720,w:160,h:360},{x:480,y:720,w:240,h:360},{x:720,y:720,w:240,h:360},{x:960,y:720,w:160,h:360},{x:1120,y:720,w:400,h:360},{x:1520,y:720,w:400,h:360}].forEach((t,i)=>{let s;const o=i%3;o===0?s="vertical":o===1?s="horizontal":s="vertical-reverse",this.rectangles.push({id:i,baseX:t.x,baseY:t.y,baseW:t.w,baseH:t.h,currentX:t.x,currentY:t.y,currentW:t.w,currentH:t.h,gradientDirection:s,rotation:0,borderRadius:0,opacity:1}),this.gridStructure.push({x:t.x,y:t.y,w:t.w,h:t.h,targetW:t.w,targetH:t.h})})}render(e,t,i,s){this.time+=.016*ii();const o=s==="contrast",c=s==="grayscale";let u=t[0]||"#1a00ff",h=t[1]||"#8b5cf6",d=t[2]||"#d9d9d9";if(c&&(u="#333333",h="#888888",d="#ffffff"),o)this.ctx.fillStyle="#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);else{const E=this.ctx.createLinearGradient(0,0,0,this.canvas.height);c?(E.addColorStop(0,"#ffffff"),E.addColorStop(1,"#cccccc")):(E.addColorStop(0,d),E.addColorStop(1,u)),this.ctx.fillStyle=E,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}let p=.1,g="idle",m=0,y=1;const v=i?i.bass:0;i&&i.mid;const w=i?i.high:0,_=i?i.beat:!1;if(e.left||e.right){const E=[];e.left&&E.push(e.left),e.right&&E.push(e.right);let I=0,A=!1;E.forEach(N=>{N.gesture==="pinch"&&(A=!0);const T=N.fingerCount!==void 0?N.fingerCount:5;I=Math.max(I,T)}),A&&(I=0),A?(g="pinch",p=.05,m=20):I<=2?(g="2fingers",p=.2,m=20):I<=4?(g="morph",p=.1,m=100):(g="chaos",p=.4,m=0),this.rectangles.forEach((N,T)=>{this.gridStructure[T].targetW=N.baseW,this.gridStructure[T].targetH=N.baseH}),E.forEach(N=>{var z,D;const T=(((z=N.position)==null?void 0:z.x)||.5)*this.baseWidth,U=(((D=N.position)==null?void 0:D.y)||.5)*this.baseHeight;this.rectangles.forEach((B,$)=>{const ee=B.baseX+B.baseW/2,V=B.baseY+B.baseH/2,Z=T-ee,K=U-V,X=Math.sqrt(Z*Z+K*K);if(g==="pinch"){const j=1+Math.sin(X*.05-this.time*5)*.2*(1-Math.min(X/800,1));this.gridStructure[$].targetW=B.baseW*j,this.gridStructure[$].targetH=B.baseH*j}else if(g==="2fingers"){const j=1+Math.sin(X*.05-this.time*5)*.2*(1-Math.min(X/800,1));this.gridStructure[$].targetW=B.baseW*j,this.gridStructure[$].targetH=B.baseH*j}else if(g==="morph"){if(X<500){const re=(1-X/500)*.5;this.gridStructure[$].targetW=B.baseW*(1+re),this.gridStructure[$].targetH=B.baseH*(1+re)}}else if(g==="chaos"&&X<600){const re=Math.random()*.5;this.gridStructure[$].targetW=B.baseW*(.8+re),this.gridStructure[$].targetH=B.baseH*(.8+re)}})})}else this.rectangles.forEach((E,I)=>{this.gridStructure[I].targetW=E.baseW,this.gridStructure[I].targetH=E.baseH}),i&&_&&(m=10);i&&(this.gridStructure.forEach(E=>{E.targetW*=1+v*.2,E.targetH*=1+v*.2}),g==="chaos"&&(y=.5+w*.5)),this.gridStructure.forEach((E,I)=>{E.w+=(E.targetW-E.w)*p,E.h+=(E.targetH-E.h)*p}),this.normalizeGridPerfectly(),this.rectangles.forEach((E,I)=>{E.currentX=this.gridStructure[I].x,E.currentY=this.gridStructure[I].y,E.currentW=this.gridStructure[I].w,E.currentH=this.gridStructure[I].h,E.borderRadius+=(m-E.borderRadius)*.1,g==="chaos"?E.rotation+=Math.random()*.2-.1:E.rotation+=(0-E.rotation)*.1,E.opacity+=(y-E.opacity)*.1});const S=this.canvas.width/this.baseWidth,b=this.canvas.height/this.baseHeight,C=[u,h,d];this.rectangles.forEach((E,I)=>{this.drawRectangle(E,S,b,C,o,I,i)})}normalizeGridPerfectly(){const e=new Map;this.rectangles.forEach((c,u)=>{const h=Math.round(c.baseY/10)*10;e.has(h)||e.set(h,[]),e.get(h).push(u)});const t=Array.from(e.entries()).sort((c,u)=>c[0]-u[0]).map(c=>c[1]);t.forEach(c=>{c.sort((p,g)=>this.rectangles[p].baseX-this.rectangles[g].baseX);const u=c.reduce((p,g)=>p+this.gridStructure[g].w,0),h=this.baseWidth/u;let d=0;c.forEach(p=>{this.gridStructure[p].w*=h,this.gridStructure[p].x=d,d+=this.gridStructure[p].w})});let i=0;t.forEach(c=>{const u=Math.max(...c.map(h=>this.gridStructure[h].h));c.forEach(h=>{this.gridStructure[h].y=i,this.gridStructure[h].h=u}),i+=u});const s=i,o=this.baseHeight/s;i=0,t.forEach(c=>{const u=this.gridStructure[c[0]].h*o;c.forEach(h=>{this.gridStructure[h].y=i,this.gridStructure[h].h=u}),i+=u})}drawRectangle(e,t,i,s,o,c,u){this.ctx.save();const h=e.currentX*t,d=e.currentY*i,p=e.currentW*t,g=e.currentH*i;if(Math.abs(e.rotation)>.01){const C=h+p/2,E=d+g/2;this.ctx.translate(C,E),this.ctx.rotate(e.rotation),this.ctx.translate(-C,-E)}this.ctx.globalAlpha=e.opacity;let m;const y=s[0],v=s[1],w=s[2],_=o||c%2===0?y:v,S=o?"#000000":w,b=u!=null&&u.beat&&Math.random()>.7?"#FFFFFF":null;e.gradientDirection==="vertical"?(m=this.ctx.createLinearGradient(h,d,h,d+g),m.addColorStop(0,b||S),m.addColorStop(1,_)):e.gradientDirection==="vertical-reverse"?(m=this.ctx.createLinearGradient(h,d,h,d+g),m.addColorStop(0,_),m.addColorStop(1,b||S)):(m=this.ctx.createLinearGradient(h,d,h+p,d),m.addColorStop(0,b||S),m.addColorStop(1,_)),this.ctx.fillStyle=m,e.borderRadius>0?(this.ctx.beginPath(),this.ctx.roundRect(h,d,p,g,e.borderRadius),this.ctx.fill()):this.ctx.fillRect(h,d,p,g),this.ctx.restore()}}class ay{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"glowObjects",[]);F(this,"time",0);F(this,"vibrationTimer",0);F(this,"glitchIntensity",0);F(this,"isExploding",!1);this.canvas=e,this.ctx=t}render(e,t){if(this.canvas.width===0||this.canvas.height===0)return;this.ctx.fillStyle="rgba(0, 0, 0, 0.02)",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&!this.isExploding&&(this.createExplosion(),this.vibrationTimer=1,this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.016,i=Math.max(0,this.vibrationTimer));let s=null,o=null,c=2,u=!1;if(e.left&&e.left.landmarks){let h=this.countFingers(e.left.landmarks,"left");e.left.gesture==="pinch"&&(h=1),h>=1&&(u=!0,s=e.left.position.x*this.canvas.width,o=e.left.position.y*this.canvas.height,c=h)}if(e.right&&e.right.landmarks){let h=this.countFingers(e.right.landmarks,"right");if(e.right.gesture==="pinch"&&(h=1),h>=1){u=!0;const d=e.right.position.x*this.canvas.width,p=e.right.position.y*this.canvas.height;s!==null?(s=(s+d)/2,o=((o||0)+p)/2,c=Math.max(c,h)):(s=d,o=p,c=h)}}if(u&&s!==null&&o!==null){this.time+=1*ii();let h=4,d=100,p=2,g=60;if(c===1?(h=8,d=60,p=1,g=30):c===2?(h=5,d=100,p=2,g=60):c===3||c===4?(h=4,d=130,p=2,g=80):c>=5&&(h=2,d=180,p=3,g=120),this.time>=h){this.time=0;for(let m=0;m<p;m++)this.glowObjects.push({x:s+(Math.random()-.5)*g,y:o+(Math.random()-.5)*g,size:d+Math.random()*(d*.4),vx:(Math.random()-.5)*1.5,vy:(Math.random()-.5)*1.5-.5,life:1,hue:Math.random()*360,decay:.002+c/10*.002})}}this.glowObjects=this.glowObjects.filter(h=>(h.x+=h.vx,h.y+=h.vy,h.vx*=.99,h.vy*=.99,h.life-=h.decay,i>0&&(h.x+=(Math.random()-.5)*i*10,h.y+=(Math.random()-.5)*i*10),h.life>0)),this.glowObjects.length>120&&(this.glowObjects=this.glowObjects.slice(-120)),this.glowObjects.forEach(h=>{this.renderChromaticShape(h,i,t)}),this.applyNoiseOverlay(),this.glitchIntensity>.1&&this.applyGlitchEffect()}renderChromaticShape(e,t,i){const s=8+t*20;e.life*.4,this.ctx.globalCompositeOperation="screen";const o=this.ctx.createRadialGradient(e.x-s,e.y,0,e.x-s,e.y,e.size*1.2);o.addColorStop(0,i[0]+"FF"),o.addColorStop(.3,i[0]+"99"),o.addColorStop(.6,i[0]+"44"),o.addColorStop(1,"transparent"),this.ctx.fillStyle=o,this.ctx.beginPath(),this.ctx.arc(e.x-s,e.y,e.size*1.2,0,Math.PI*2),this.ctx.fill();const c=this.ctx.createRadialGradient(e.x,e.y,0,e.x,e.y,e.size*1.2);c.addColorStop(0,i[1]+"FF"),c.addColorStop(.3,i[1]+"BB"),c.addColorStop(.6,i[1]+"66"),c.addColorStop(1,"transparent"),this.ctx.fillStyle=c,this.ctx.beginPath(),this.ctx.arc(e.x,e.y,e.size*1.2,0,Math.PI*2),this.ctx.fill();const u=this.ctx.createRadialGradient(e.x+s,e.y,0,e.x+s,e.y,e.size*1.2);u.addColorStop(0,i[2]+"FF"),u.addColorStop(.3,i[2]+"99"),u.addColorStop(.6,i[2]+"44"),u.addColorStop(1,"transparent"),this.ctx.fillStyle=u,this.ctx.beginPath(),this.ctx.arc(e.x+s,e.y,e.size*1.2,0,Math.PI*2),this.ctx.fill(),this.ctx.globalCompositeOperation="source-over"}countFingers(e,t){if(!e||e.length<21)return 0;const i=e[9],s=e[4],o=e[3],c=Math.sqrt(Math.pow(s.x-i.x,2)+Math.pow(s.y-i.y,2)+Math.pow(s.z-i.z,2)),u=Math.sqrt(Math.pow(o.x-i.x,2)+Math.pow(o.y-i.y,2)+Math.pow(o.z-i.z,2));let h=c>u?1:0;const d=[8,12,16,20],p=[6,10,14,18];for(let g=0;g<4;g++){const m=Math.sqrt(Math.pow(e[d[g]].x-i.x,2)+Math.pow(e[d[g]].y-i.y,2)+Math.pow(e[d[g]].z-i.z,2)),y=Math.sqrt(Math.pow(e[p[g]].x-i.x,2)+Math.pow(e[p[g]].y-i.y,2)+Math.pow(e[p[g]].z-i.z,2));m>y*1.1&&h++}return h}createExplosion(){const e=this.canvas.width/2,t=this.canvas.height/2;for(let i=0;i<40;i++){const s=Math.PI*2*i/40,o=10+Math.random()*20;this.glowObjects.push({x:e,y:t,size:80+Math.random()*100,vx:Math.cos(s)*o,vy:Math.sin(s)*o,life:1,hue:Math.random()*360,decay:.003})}}applyNoiseOverlay(){this.ctx.save(),this.ctx.globalAlpha=.05,this.ctx.fillStyle="white";for(let e=0;e<1e3;e++){const t=Math.random()*this.canvas.width,i=Math.random()*this.canvas.height,s=Math.random()*2;this.ctx.fillRect(t,i,s,s)}this.ctx.restore()}applyGlitchEffect(){this.ctx.save(),this.ctx.globalAlpha=this.glitchIntensity*.5,this.ctx.fillStyle="white";for(let e=0;e<5;e++){const t=Math.random()*this.canvas.width,i=Math.random()*this.canvas.height,s=Math.random()*10;this.ctx.fillRect(t,i,s,this.canvas.height)}for(let e=0;e<5;e++){const t=Math.random()*this.canvas.width,i=Math.random()*this.canvas.height,s=Math.random()*10;this.ctx.fillRect(t,i,this.canvas.width,s)}this.ctx.restore()}}class oy{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"dots",[]);F(this,"gridSpacing",8);F(this,"vibrationTimer",0);F(this,"isExploding",!1);this.canvas=e,this.ctx=t,this.initializeDots()}initializeDots(){this.dots=[];const e=Math.ceil(this.canvas.width/this.gridSpacing),t=Math.ceil(this.canvas.height/this.gridSpacing);for(let i=0;i<t;i++)for(let s=0;s<e;s++)this.dots.push({x:s*this.gridSpacing,y:i*this.gridSpacing,baseSize:1,currentSize:1,targetSize:1})}render(e,t){if(this.canvas.width===0||this.canvas.height===0)return;this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&!this.isExploding&&(this.createExplosion(),this.vibrationTimer=1,this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.016,i=Math.max(0,this.vibrationTimer));let s=null,o=null,c=2,u=!1;if(e.left&&e.left.landmarks){let p=this.countFingers(e.left.landmarks,"left");e.left.gesture==="pinch"&&(p=1),p>=1&&(u=!0,s=e.left.position.x*this.canvas.width,o=e.left.position.y*this.canvas.height,c=p)}if(e.right&&e.right.landmarks){let p=this.countFingers(e.right.landmarks,"right");if(e.right.gesture==="pinch"&&(p=1),p>=1){u=!0;const g=e.right.position.x*this.canvas.width,m=e.right.position.y*this.canvas.height;s!==null?(s=(s+g)/2,o=((o||0)+m)/2,c=Math.max(c,p)):(s=g,o=m,c=p)}}let h=200,d=4;c===1?(h=100,d=2):c>=5&&(h=350,d=6),this.dots.forEach(p=>{if(p.targetSize=p.baseSize,u&&s!==null&&o!==null){const g=p.x-s,m=p.y-o,y=Math.sqrt(g*g+m*m);if(y<h){const v=1-y/h;p.targetSize=p.baseSize+v*d}}p.currentSize+=(p.targetSize-p.currentSize)*.2,i>0&&(p.currentSize+=Math.random()*i*3)}),this.ctx.fillStyle="#FFFFFF",this.dots.forEach(p=>{p.currentSize>.5&&(this.ctx.beginPath(),this.ctx.arc(p.x,p.y,p.currentSize,0,Math.PI*2),this.ctx.fill())})}countFingers(e,t){if(!e||e.length<21)return 0;const i=e[9],s=e[4],o=e[3],c=Math.sqrt(Math.pow(s.x-i.x,2)+Math.pow(s.y-i.y,2)+Math.pow(s.z-i.z,2)),u=Math.sqrt(Math.pow(o.x-i.x,2)+Math.pow(o.y-i.y,2)+Math.pow(o.z-i.z,2));let h=c>u?1:0;const d=[8,12,16,20],p=[6,10,14,18];for(let g=0;g<4;g++){const m=Math.sqrt(Math.pow(e[d[g]].x-i.x,2)+Math.pow(e[d[g]].y-i.y,2)+Math.pow(e[d[g]].z-i.z,2)),y=Math.sqrt(Math.pow(e[p[g]].x-i.x,2)+Math.pow(e[p[g]].y-i.y,2)+Math.pow(e[p[g]].z-i.z,2));m>y*1.1&&h++}return h}createExplosion(){if(this.isExploding)return;this.isExploding=!0;const e=this.canvas.width/2,t=this.canvas.height/2;this.dots.forEach(i=>{const s=i.x-e,o=i.y-t,u=Math.sqrt(s*s+o*o)/10;setTimeout(()=>{i.targetSize=8},u)}),setTimeout(()=>{this.isExploding=!1},1e3)}}class ly{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"blocks",[]);F(this,"baseBlockSize",40);F(this,"vibrationTimer",0);F(this,"currentBlockSize",40);F(this,"isExploding",!1);this.canvas=e,this.ctx=t,this.initializeGrid()}initializeGrid(){this.blocks=[];const e=Math.ceil(this.canvas.width/this.baseBlockSize),t=Math.ceil(this.canvas.height/this.baseBlockSize);for(let i=0;i<t;i++)for(let s=0;s<e;s++){const o=Math.floor(Math.random()*3);this.blocks.push({x:s*this.baseBlockSize,y:i*this.baseBlockSize,targetX:s*this.baseBlockSize,targetY:i*this.baseBlockSize,size:this.baseBlockSize,colorIndex:o,targetColorIndex:o,hasGrid:Math.random()>.7,gridSize:Math.floor(Math.random()*3)+2,glitchTimer:0,colorChangeTimer:Math.random()*5})}}render(e,t){if(this.canvas.width===0||this.canvas.height===0)return;const i=t[1]&&(t[1].toLowerCase()==="#ffffff"||t[1].toLowerCase()==="#fff");i?this.ctx.fillStyle="#000000":this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let s=0;e.clapping&&!this.isExploding&&(this.createExplosion(),this.vibrationTimer=1,this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.016,s=Math.max(0,this.vibrationTimer));let o=0,c=!1;if(e.left){let m=e.left.fingerCount||0;e.left.gesture==="pinch"&&(m=1),c=!0,o=m}if(e.right){let m=e.right.fingerCount||0;e.right.gesture==="pinch"&&(m=1),c=!0,o=Math.max(o,m)}let u=this.currentBlockSize,h=1;c&&(o===1?(u=100,h=.4):o===2?(u=60,h=.5):o===3?(u=45,h=1):o===4?(u=35,h=1.5):o>=5&&(u=25,h=3)),Math.abs(this.currentBlockSize-u)>1&&(this.currentBlockSize=u,this.baseBlockSize=u,this.initializeGrid()),this.blocks.forEach(m=>{m.size=this.currentBlockSize});const d=s>0?10:1;this.blocks.forEach(m=>{if(m.colorChangeTimer>0)m.colorChangeTimer-=.016*h*d;else{const y=Math.floor(Math.random()*3);y!==m.colorIndex&&(m.targetColorIndex=y,m.glitchTimer=.3),m.colorChangeTimer=2+Math.random()*3}m.colorIndex!==m.targetColorIndex&&(m.colorIndex=m.targetColorIndex),m.glitchTimer>0&&(m.glitchTimer-=.016)}),this.blocks.forEach(m=>{const y=m.x,v=m.y,w=s>0?.3+(1-s)*.7:1,_=m.size*w,S=(m.size-_)/2,b=(m.size-_)/2;let C;if(i?C=m.colorIndex%2===0?t[0]:"#000000":C=t[m.colorIndex]||"#FFFFFF",this.ctx.fillStyle=C,this.ctx.fillRect(y+S,v+b,_,_),m.hasGrid&&_>15){this.ctx.strokeStyle=t[3]||"#000000",this.ctx.lineWidth=1;const E=_/m.gridSize;for(let I=0;I<=m.gridSize;I++)this.ctx.beginPath(),this.ctx.moveTo(y+S+I*E,v+b),this.ctx.lineTo(y+S+I*E,v+b+_),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(y+S,v+b+I*E),this.ctx.lineTo(y+S+_,v+b+I*E),this.ctx.stroke()}if(m.glitchTimer>0||s>.5){let E;i?E=m.colorIndex%2===0?"#000000":t[0]:E=t[(m.colorIndex+1)%3]||"#FFFFFF",this.ctx.strokeStyle=E,this.ctx.lineWidth=s>0?4:3,this.ctx.strokeRect(y+S,v+b,_,_)}}),this.ctx.strokeStyle="rgba(255, 255, 255, 0.1)",this.ctx.lineWidth=1;const p=Math.ceil(this.canvas.width/this.baseBlockSize),g=Math.ceil(this.canvas.height/this.baseBlockSize);for(let m=0;m<=p;m++)this.ctx.beginPath(),this.ctx.moveTo(m*this.baseBlockSize,0),this.ctx.lineTo(m*this.baseBlockSize,this.canvas.height),this.ctx.stroke();for(let m=0;m<=g;m++)this.ctx.beginPath(),this.ctx.moveTo(0,m*this.baseBlockSize),this.ctx.lineTo(this.canvas.width,m*this.baseBlockSize),this.ctx.stroke()}createExplosion(){this.isExploding||(this.isExploding=!0,this.blocks.forEach(e=>{e.targetColorIndex=Math.floor(Math.random()*3),e.colorIndex=e.targetColorIndex,e.glitchTimer=1}),setTimeout(()=>this.isExploding=!1,1e3))}}class cy{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"lines",[]);F(this,"gridSpacing",40);F(this,"lineLength",30);F(this,"isClapping",!1);F(this,"clappingIntensity",0);this.canvas=e,this.ctx=t,this.initializeGrid()}initializeGrid(){this.lines=[];const e=Math.ceil(this.canvas.width/this.gridSpacing)+1,t=Math.ceil(this.canvas.height/this.gridSpacing)+1;for(let i=0;i<t;i++)for(let s=0;s<e;s++)this.lines.push({x:s*this.gridSpacing,y:i*this.gridSpacing,length:this.lineLength,currentAngle:0,targetAngle:0,spinVelocity:0})}render(e,t){t[1]&&(t[1].toLowerCase()==="#ffffff"||t[1].toLowerCase()==="#fff")?this.ctx.fillStyle="#000000":this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),(this.lines.length===0||this.lines[0].x>this.canvas.width||this.lines[0].y>this.canvas.height)&&this.initializeGrid();let s=.1,o=0;const c=[];e.left&&c.push(e.left),e.right&&c.push(e.right),c.forEach(u=>{let h=u.fingerCount||2;u.gesture==="pinch"&&(h=1),o=Math.max(o,h)}),o===1?s=.02:o===2?s=.1:o===3?s=.15:o===4?s=.2:o>=5&&(s=.3),e.clapping?this.isClapping||(this.isClapping=!0,this.clappingIntensity=1):this.isClapping=!1,this.clappingIntensity>0&&(this.clappingIntensity*=.95,this.clappingIntensity<.01&&(this.clappingIntensity=0)),this.lines.forEach(u=>{if(c.length>0){let h=0,d=0,p=0;c.forEach(g=>{var C,E;const m=(((C=g.position)==null?void 0:C.x)||.5)*this.canvas.width,y=(((E=g.position)==null?void 0:E.y)||.5)*this.canvas.height,v=m-u.x,w=y-u.y,S=1/(1+Math.sqrt(v*v+w*w)*.001),b=Math.atan2(w,v);d+=Math.cos(b)*S,p+=Math.sin(b)*S,h+=S}),h>0&&(u.targetAngle=Math.atan2(p,d))}else u.targetAngle=0;if(this.clappingIntensity>0)u.spinVelocity+=this.clappingIntensity*.5,u.currentAngle+=u.spinVelocity,u.spinVelocity*=.9;else{let h=u.targetAngle-u.currentAngle;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;u.currentAngle+=h*s,u.spinVelocity=0}}),this.ctx.strokeStyle=t[0]||"#00ff00",this.ctx.lineWidth=2,this.ctx.lineCap="round",this.lines.forEach(u=>{const h=u.length/2,d=u.x-Math.cos(u.currentAngle)*h,p=u.y-Math.sin(u.currentAngle)*h,g=u.x+Math.cos(u.currentAngle)*h,m=u.y+Math.sin(u.currentAngle)*h;this.ctx.beginPath(),this.ctx.moveTo(d,p),this.ctx.lineTo(g,m),this.ctx.stroke()})}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wd="184",uy=0,I0=1,hy=2,Tc=1,fy=2,Oo=3,fs=0,ti=1,Bi=2,ir=0,Ua=1,ka=2,N0=3,U0=4,dy=5,Ds=100,py=101,my=102,gy=103,xy=104,vy=200,_y=201,yy=202,Sy=203,Mf=204,wf=205,My=206,wy=207,by=208,Ey=209,Ty=210,Cy=211,Ay=212,Ry=213,Py=214,bf=0,Ef=1,Tf=2,Oa=3,Cf=4,Af=5,Rf=6,Pf=7,bd=0,Ly=1,Iy=2,rr=0,dx=1,px=2,mx=3,gx=4,xx=5,vx=6,_x=7,yx=300,Bs=301,za=302,Nh=303,Uh=304,qc=306,Lf=1e3,wr=1001,If=1002,In=1003,Ny=1004,Ql=1005,mn=1006,Fh=1007,Os=1008,fi=1009,Sx=1010,Mx=1011,Xo=1012,Ed=1013,sr=1014,Vi=1015,pi=1016,Td=1017,Cd=1018,jo=1020,wx=35902,bx=35899,Ex=1021,Tx=1022,di=1023,Tr=1026,zs=1027,Ad=1028,Rd=1029,Hs=1030,Pd=1031,Ld=1033,Cc=33776,Ac=33777,Rc=33778,Pc=33779,Nf=35840,Uf=35841,Ff=35842,Df=35843,kf=36196,Of=37492,zf=37496,Bf=37488,Hf=37489,Nc=37490,Vf=37491,Gf=37808,Wf=37809,Xf=37810,jf=37811,qf=37812,Yf=37813,$f=37814,Kf=37815,Zf=37816,Qf=37817,Jf=37818,ed=37819,td=37820,nd=37821,id=36492,rd=36494,sd=36495,ad=36283,od=36284,Uc=36285,ld=36286,Uy=3200,Fc=0,Fy=1,ls="",hi="srgb",Dc="srgb-linear",kc="linear",Gt="srgb",ga=7680,F0=519,Dy=512,ky=513,Oy=514,Id=515,zy=516,By=517,Nd=518,Hy=519,D0=35044,k0="300 es",tr=2e3,qo=2001;function Vy(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Oc(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Gy(){const a=Oc("canvas");return a.style.display="block",a}const O0={};function z0(...a){const e="THREE."+a.shift();console.log(e,...a)}function Cx(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function ht(...a){a=Cx(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function Ut(...a){a=Cx(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function cd(...a){const e=a.join(" ");e in O0||(O0[e]=!0,ht(...a))}function Wy(a,e,t){return new Promise(function(i,s){function o(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:s();break;case a.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}const Xy={[bf]:Ef,[Tf]:Rf,[Cf]:Pf,[Oa]:Af,[Ef]:bf,[Rf]:Tf,[Pf]:Cf,[Af]:Oa};class Gs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,c=s.length;o<c;o++)s[o].call(this,e);e.target=null}}}const kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let B0=1234567;const Bo=Math.PI/180,Yo=180/Math.PI;function Va(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kn[a&255]+kn[a>>8&255]+kn[a>>16&255]+kn[a>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[t&63|128]+kn[t>>8&255]+"-"+kn[t>>16&255]+kn[t>>24&255]+kn[i&255]+kn[i>>8&255]+kn[i>>16&255]+kn[i>>24&255]).toLowerCase()}function At(a,e,t){return Math.max(e,Math.min(t,a))}function Ud(a,e){return(a%e+e)%e}function jy(a,e,t,i,s){return i+(a-e)*(s-i)/(t-e)}function qy(a,e,t){return a!==e?(t-a)/(e-a):0}function Ho(a,e,t){return(1-t)*a+t*e}function Yy(a,e,t,i){return Ho(a,e,1-Math.exp(-t*i))}function $y(a,e=1){return e-Math.abs(Ud(a,e*2)-e)}function Ky(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function Zy(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function Qy(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Jy(a,e){return a+Math.random()*(e-a)}function eS(a){return a*(.5-Math.random())}function tS(a){a!==void 0&&(B0=a);let e=B0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function nS(a){return a*Bo}function iS(a){return a*Yo}function rS(a){return(a&a-1)===0&&a!==0}function sS(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function aS(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function oS(a,e,t,i,s){const o=Math.cos,c=Math.sin,u=o(t/2),h=c(t/2),d=o((e+i)/2),p=c((e+i)/2),g=o((e-i)/2),m=c((e-i)/2),y=o((i-e)/2),v=c((i-e)/2);switch(s){case"XYX":a.set(u*p,h*g,h*m,u*d);break;case"YZY":a.set(h*m,u*p,h*g,u*d);break;case"ZXZ":a.set(h*g,h*m,u*p,u*d);break;case"XZX":a.set(u*p,h*v,h*y,u*d);break;case"YXY":a.set(h*y,u*p,h*v,u*d);break;case"ZYZ":a.set(h*v,h*y,u*p,u*d);break;default:ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ia(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Wn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const rs={DEG2RAD:Bo,RAD2DEG:Yo,generateUUID:Va,clamp:At,euclideanModulo:Ud,mapLinear:jy,inverseLerp:qy,lerp:Ho,damp:Yy,pingpong:$y,smoothstep:Ky,smootherstep:Zy,randInt:Qy,randFloat:Jy,randFloatSpread:eS,seededRandom:tS,degToRad:nS,radToDeg:iS,isPowerOfTwo:rS,ceilPowerOfTwo:sS,floorPowerOfTwo:aS,setQuaternionFromProperEuler:oS,normalize:Wn,denormalize:Ia},jd=class jd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*i-c*s+e.x,this.y=o*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jd.prototype.isVector2=!0;let ut=jd;class Ga{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,o,c,u){let h=i[s+0],d=i[s+1],p=i[s+2],g=i[s+3],m=o[c+0],y=o[c+1],v=o[c+2],w=o[c+3];if(g!==w||h!==m||d!==y||p!==v){let _=h*m+d*y+p*v+g*w;_<0&&(m=-m,y=-y,v=-v,w=-w,_=-_);let S=1-u;if(_<.9995){const b=Math.acos(_),C=Math.sin(b);S=Math.sin(S*b)/C,u=Math.sin(u*b)/C,h=h*S+m*u,d=d*S+y*u,p=p*S+v*u,g=g*S+w*u}else{h=h*S+m*u,d=d*S+y*u,p=p*S+v*u,g=g*S+w*u;const b=1/Math.sqrt(h*h+d*d+p*p+g*g);h*=b,d*=b,p*=b,g*=b}}e[t]=h,e[t+1]=d,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,s,o,c){const u=i[s],h=i[s+1],d=i[s+2],p=i[s+3],g=o[c],m=o[c+1],y=o[c+2],v=o[c+3];return e[t]=u*v+p*g+h*y-d*m,e[t+1]=h*v+p*m+d*g-u*y,e[t+2]=d*v+p*y+u*m-h*g,e[t+3]=p*v-u*g-h*m-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,o=e._z,c=e._order,u=Math.cos,h=Math.sin,d=u(i/2),p=u(s/2),g=u(o/2),m=h(i/2),y=h(s/2),v=h(o/2);switch(c){case"XYZ":this._x=m*p*g+d*y*v,this._y=d*y*g-m*p*v,this._z=d*p*v+m*y*g,this._w=d*p*g-m*y*v;break;case"YXZ":this._x=m*p*g+d*y*v,this._y=d*y*g-m*p*v,this._z=d*p*v-m*y*g,this._w=d*p*g+m*y*v;break;case"ZXY":this._x=m*p*g-d*y*v,this._y=d*y*g+m*p*v,this._z=d*p*v+m*y*g,this._w=d*p*g-m*y*v;break;case"ZYX":this._x=m*p*g-d*y*v,this._y=d*y*g+m*p*v,this._z=d*p*v-m*y*g,this._w=d*p*g+m*y*v;break;case"YZX":this._x=m*p*g+d*y*v,this._y=d*y*g+m*p*v,this._z=d*p*v-m*y*g,this._w=d*p*g-m*y*v;break;case"XZY":this._x=m*p*g-d*y*v,this._y=d*y*g-m*p*v,this._z=d*p*v+m*y*g,this._w=d*p*g+m*y*v;break;default:ht("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],o=t[8],c=t[1],u=t[5],h=t[9],d=t[2],p=t[6],g=t[10],m=i+u+g;if(m>0){const y=.5/Math.sqrt(m+1);this._w=.25/y,this._x=(p-h)*y,this._y=(o-d)*y,this._z=(c-s)*y}else if(i>u&&i>g){const y=2*Math.sqrt(1+i-u-g);this._w=(p-h)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(o+d)/y}else if(u>g){const y=2*Math.sqrt(1+u-i-g);this._w=(o-d)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(h+p)/y}else{const y=2*Math.sqrt(1+g-i-u);this._w=(c-s)/y,this._x=(o+d)/y,this._y=(h+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,o=e._z,c=e._w,u=t._x,h=t._y,d=t._z,p=t._w;return this._x=i*p+c*u+s*d-o*h,this._y=s*p+c*h+o*u-i*d,this._z=o*p+c*d+i*h-s*u,this._w=c*p-i*u-s*h-o*d,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,o=e._z,c=e._w,u=this.dot(e);u<0&&(i=-i,s=-s,o=-o,c=-c,u=-u);let h=1-t;if(u<.9995){const d=Math.acos(u),p=Math.sin(d);h=Math.sin(h*d)/p,t=Math.sin(t*d)/p,this._x=this._x*h+i*t,this._y=this._y*h+s*t,this._z=this._z*h+o*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+i*t,this._y=this._y*h+s*t,this._z=this._z*h+o*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const qd=class qd{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(H0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(H0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*s,this.y=o[1]*t+o[4]*i+o[7]*s,this.z=o[2]*t+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=e.elements,c=1/(o[3]*t+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*s+o[12])*c,this.y=(o[1]*t+o[5]*i+o[9]*s+o[13])*c,this.z=(o[2]*t+o[6]*i+o[10]*s+o[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,o=e.x,c=e.y,u=e.z,h=e.w,d=2*(c*s-u*i),p=2*(u*t-o*s),g=2*(o*i-c*t);return this.x=t+h*d+c*g-u*p,this.y=i+h*p+u*d-o*g,this.z=s+h*g+o*p-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s,this.y=o[1]*t+o[5]*i+o[9]*s,this.z=o[2]*t+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,o=e.z,c=t.x,u=t.y,h=t.z;return this.x=s*h-o*u,this.y=o*c-i*h,this.z=i*u-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dh.copy(this).projectOnVector(e),this.sub(Dh)}reflect(e){return this.sub(Dh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qd.prototype.isVector3=!0;let J=qd;const Dh=new J,H0=new Ga,Yd=class Yd{constructor(e,t,i,s,o,c,u,h,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,c,u,h,d)}set(e,t,i,s,o,c,u,h,d){const p=this.elements;return p[0]=e,p[1]=s,p[2]=u,p[3]=t,p[4]=o,p[5]=h,p[6]=i,p[7]=c,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,c=i[0],u=i[3],h=i[6],d=i[1],p=i[4],g=i[7],m=i[2],y=i[5],v=i[8],w=s[0],_=s[3],S=s[6],b=s[1],C=s[4],E=s[7],I=s[2],A=s[5],N=s[8];return o[0]=c*w+u*b+h*I,o[3]=c*_+u*C+h*A,o[6]=c*S+u*E+h*N,o[1]=d*w+p*b+g*I,o[4]=d*_+p*C+g*A,o[7]=d*S+p*E+g*N,o[2]=m*w+y*b+v*I,o[5]=m*_+y*C+v*A,o[8]=m*S+y*E+v*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],c=e[4],u=e[5],h=e[6],d=e[7],p=e[8];return t*c*p-t*u*d-i*o*p+i*u*h+s*o*d-s*c*h}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],c=e[4],u=e[5],h=e[6],d=e[7],p=e[8],g=p*c-u*d,m=u*h-p*o,y=d*o-c*h,v=t*g+i*m+s*y;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/v;return e[0]=g*w,e[1]=(s*d-p*i)*w,e[2]=(u*i-s*c)*w,e[3]=m*w,e[4]=(p*t-s*h)*w,e[5]=(s*o-u*t)*w,e[6]=y*w,e[7]=(i*h-d*t)*w,e[8]=(c*t-i*o)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,o,c,u){const h=Math.cos(o),d=Math.sin(o);return this.set(i*h,i*d,-i*(h*c+d*u)+c+e,-s*d,s*h,-s*(-d*c+h*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(kh.makeScale(e,t)),this}rotate(e){return this.premultiply(kh.makeRotation(-e)),this}translate(e,t){return this.premultiply(kh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Yd.prototype.isMatrix3=!0;let St=Yd;const kh=new St,V0=new St().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),G0=new St().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lS(){const a={enabled:!0,workingColorSpace:Dc,spaces:{},convert:function(s,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===Gt&&(s.r=br(s.r),s.g=br(s.g),s.b=br(s.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Gt&&(s.r=Fa(s.r),s.g=Fa(s.g),s.b=Fa(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ls?kc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,c){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return cd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return cd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(s,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return a.define({[Dc]:{primaries:e,whitePoint:i,transfer:kc,toXYZ:V0,fromXYZ:G0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:i,transfer:Gt,toXYZ:V0,fromXYZ:G0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),a}const Rt=lS();function br(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Fa(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let xa;class cS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{xa===void 0&&(xa=Oc("canvas")),xa.width=e.width,xa.height=e.height;const s=xa.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=xa}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Oc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let c=0;c<o.length;c++)o[c]=br(o[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(br(t[i]/255)*255):t[i]=br(t[i]);return{data:t,width:e.width,height:e.height}}else return ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uS=0;class Fd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uS++}),this.uuid=Va(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?o.push(Oh(s[c].image)):o.push(Oh(s[c]))}else o=Oh(s);i.url=o}return t||(e.images[this.uuid]=i),i}}function Oh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?cS.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(ht("Texture: Unable to serialize Texture."),{})}let hS=0;const zh=new J;class Bn extends Gs{constructor(e=Bn.DEFAULT_IMAGE,t=Bn.DEFAULT_MAPPING,i=wr,s=wr,o=mn,c=Os,u=di,h=fi,d=Bn.DEFAULT_ANISOTROPY,p=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=Va(),this.name="",this.source=new Fd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=c,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=h,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zh).x}get height(){return this.source.getSize(zh).y}get depth(){return this.source.getSize(zh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ht(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ht(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lf:e.x=e.x-Math.floor(e.x);break;case wr:e.x=e.x<0?0:1;break;case If:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lf:e.y=e.y-Math.floor(e.y);break;case wr:e.y=e.y<0?0:1;break;case If:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=yx;Bn.DEFAULT_ANISOTROPY=1;const $d=class $d{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*o,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*o,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*o,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,o;const h=e.elements,d=h[0],p=h[4],g=h[8],m=h[1],y=h[5],v=h[9],w=h[2],_=h[6],S=h[10];if(Math.abs(p-m)<.01&&Math.abs(g-w)<.01&&Math.abs(v-_)<.01){if(Math.abs(p+m)<.1&&Math.abs(g+w)<.1&&Math.abs(v+_)<.1&&Math.abs(d+y+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(d+1)/2,E=(y+1)/2,I=(S+1)/2,A=(p+m)/4,N=(g+w)/4,T=(v+_)/4;return C>E&&C>I?C<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(C),s=A/i,o=N/i):E>I?E<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(E),i=A/s,o=T/s):I<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(I),i=N/o,s=T/o),this.set(i,s,o,t),this}let b=Math.sqrt((_-v)*(_-v)+(g-w)*(g-w)+(m-p)*(m-p));return Math.abs(b)<.001&&(b=1),this.x=(_-v)/b,this.y=(g-w)/b,this.z=(m-p)/b,this.w=Math.acos((d+y+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this.w=At(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this.w=At(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$d.prototype.isVector4=!0;let sn=$d;class fS extends Gs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new sn(0,0,e,t),this.scissorTest=!1,this.viewport=new sn(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},o=new Bn(s),c=i.count;for(let u=0;u<c;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Fd(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ni extends fS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ax extends Bn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dS extends Bn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=In,this.minFilter=In,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xc=class Xc{constructor(e,t,i,s,o,c,u,h,d,p,g,m,y,v,w,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,c,u,h,d,p,g,m,y,v,w,_)}set(e,t,i,s,o,c,u,h,d,p,g,m,y,v,w,_){const S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=s,S[1]=o,S[5]=c,S[9]=u,S[13]=h,S[2]=d,S[6]=p,S[10]=g,S[14]=m,S[3]=y,S[7]=v,S[11]=w,S[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/va.setFromMatrixColumn(e,0).length(),o=1/va.setFromMatrixColumn(e,1).length(),c=1/va.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,o=e.z,c=Math.cos(i),u=Math.sin(i),h=Math.cos(s),d=Math.sin(s),p=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const m=c*p,y=c*g,v=u*p,w=u*g;t[0]=h*p,t[4]=-h*g,t[8]=d,t[1]=y+v*d,t[5]=m-w*d,t[9]=-u*h,t[2]=w-m*d,t[6]=v+y*d,t[10]=c*h}else if(e.order==="YXZ"){const m=h*p,y=h*g,v=d*p,w=d*g;t[0]=m+w*u,t[4]=v*u-y,t[8]=c*d,t[1]=c*g,t[5]=c*p,t[9]=-u,t[2]=y*u-v,t[6]=w+m*u,t[10]=c*h}else if(e.order==="ZXY"){const m=h*p,y=h*g,v=d*p,w=d*g;t[0]=m-w*u,t[4]=-c*g,t[8]=v+y*u,t[1]=y+v*u,t[5]=c*p,t[9]=w-m*u,t[2]=-c*d,t[6]=u,t[10]=c*h}else if(e.order==="ZYX"){const m=c*p,y=c*g,v=u*p,w=u*g;t[0]=h*p,t[4]=v*d-y,t[8]=m*d+w,t[1]=h*g,t[5]=w*d+m,t[9]=y*d-v,t[2]=-d,t[6]=u*h,t[10]=c*h}else if(e.order==="YZX"){const m=c*h,y=c*d,v=u*h,w=u*d;t[0]=h*p,t[4]=w-m*g,t[8]=v*g+y,t[1]=g,t[5]=c*p,t[9]=-u*p,t[2]=-d*p,t[6]=y*g+v,t[10]=m-w*g}else if(e.order==="XZY"){const m=c*h,y=c*d,v=u*h,w=u*d;t[0]=h*p,t[4]=-g,t[8]=d*p,t[1]=m*g+w,t[5]=c*p,t[9]=y*g-v,t[2]=v*g-y,t[6]=u*p,t[10]=w*g+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pS,e,mS)}lookAt(e,t,i){const s=this.elements;return li.subVectors(e,t),li.lengthSq()===0&&(li.z=1),li.normalize(),Zr.crossVectors(i,li),Zr.lengthSq()===0&&(Math.abs(i.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),Zr.crossVectors(i,li)),Zr.normalize(),Jl.crossVectors(li,Zr),s[0]=Zr.x,s[4]=Jl.x,s[8]=li.x,s[1]=Zr.y,s[5]=Jl.y,s[9]=li.y,s[2]=Zr.z,s[6]=Jl.z,s[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,c=i[0],u=i[4],h=i[8],d=i[12],p=i[1],g=i[5],m=i[9],y=i[13],v=i[2],w=i[6],_=i[10],S=i[14],b=i[3],C=i[7],E=i[11],I=i[15],A=s[0],N=s[4],T=s[8],U=s[12],z=s[1],D=s[5],B=s[9],$=s[13],ee=s[2],V=s[6],Z=s[10],K=s[14],X=s[3],re=s[7],j=s[11],O=s[15];return o[0]=c*A+u*z+h*ee+d*X,o[4]=c*N+u*D+h*V+d*re,o[8]=c*T+u*B+h*Z+d*j,o[12]=c*U+u*$+h*K+d*O,o[1]=p*A+g*z+m*ee+y*X,o[5]=p*N+g*D+m*V+y*re,o[9]=p*T+g*B+m*Z+y*j,o[13]=p*U+g*$+m*K+y*O,o[2]=v*A+w*z+_*ee+S*X,o[6]=v*N+w*D+_*V+S*re,o[10]=v*T+w*B+_*Z+S*j,o[14]=v*U+w*$+_*K+S*O,o[3]=b*A+C*z+E*ee+I*X,o[7]=b*N+C*D+E*V+I*re,o[11]=b*T+C*B+E*Z+I*j,o[15]=b*U+C*$+E*K+I*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],o=e[12],c=e[1],u=e[5],h=e[9],d=e[13],p=e[2],g=e[6],m=e[10],y=e[14],v=e[3],w=e[7],_=e[11],S=e[15],b=h*y-d*m,C=u*y-d*g,E=u*m-h*g,I=c*y-d*p,A=c*m-h*p,N=c*g-u*p;return t*(w*b-_*C+S*E)-i*(v*b-_*I+S*A)+s*(v*C-w*I+S*N)-o*(v*E-w*A+_*N)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],c=e[4],u=e[5],h=e[6],d=e[7],p=e[8],g=e[9],m=e[10],y=e[11],v=e[12],w=e[13],_=e[14],S=e[15],b=t*u-i*c,C=t*h-s*c,E=t*d-o*c,I=i*h-s*u,A=i*d-o*u,N=s*d-o*h,T=p*w-g*v,U=p*_-m*v,z=p*S-y*v,D=g*_-m*w,B=g*S-y*w,$=m*S-y*_,ee=b*$-C*B+E*D+I*z-A*U+N*T;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/ee;return e[0]=(u*$-h*B+d*D)*V,e[1]=(s*B-i*$-o*D)*V,e[2]=(w*N-_*A+S*I)*V,e[3]=(m*A-g*N-y*I)*V,e[4]=(h*z-c*$-d*U)*V,e[5]=(t*$-s*z+o*U)*V,e[6]=(_*E-v*N-S*C)*V,e[7]=(p*N-m*E+y*C)*V,e[8]=(c*B-u*z+d*T)*V,e[9]=(i*z-t*B-o*T)*V,e[10]=(v*A-w*E+S*b)*V,e[11]=(g*E-p*A-y*b)*V,e[12]=(u*U-c*D-h*T)*V,e[13]=(t*D-i*U+s*T)*V,e[14]=(w*C-v*I-_*b)*V,e[15]=(p*I-g*C+m*b)*V,this}scale(e){const t=this.elements,i=e.x,s=e.y,o=e.z;return t[0]*=i,t[4]*=s,t[8]*=o,t[1]*=i,t[5]*=s,t[9]*=o,t[2]*=i,t[6]*=s,t[10]*=o,t[3]*=i,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),o=1-i,c=e.x,u=e.y,h=e.z,d=o*c,p=o*u;return this.set(d*c+i,d*u-s*h,d*h+s*u,0,d*u+s*h,p*u+i,p*h-s*c,0,d*h-s*u,p*h+s*c,o*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,o,c){return this.set(1,i,o,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,o=t._x,c=t._y,u=t._z,h=t._w,d=o+o,p=c+c,g=u+u,m=o*d,y=o*p,v=o*g,w=c*p,_=c*g,S=u*g,b=h*d,C=h*p,E=h*g,I=i.x,A=i.y,N=i.z;return s[0]=(1-(w+S))*I,s[1]=(y+E)*I,s[2]=(v-C)*I,s[3]=0,s[4]=(y-E)*A,s[5]=(1-(m+S))*A,s[6]=(_+b)*A,s[7]=0,s[8]=(v+C)*N,s[9]=(_-b)*N,s[10]=(1-(m+w))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const o=this.determinant();if(o===0)return i.set(1,1,1),t.identity(),this;let c=va.set(s[0],s[1],s[2]).length();const u=va.set(s[4],s[5],s[6]).length(),h=va.set(s[8],s[9],s[10]).length();o<0&&(c=-c),Di.copy(this);const d=1/c,p=1/u,g=1/h;return Di.elements[0]*=d,Di.elements[1]*=d,Di.elements[2]*=d,Di.elements[4]*=p,Di.elements[5]*=p,Di.elements[6]*=p,Di.elements[8]*=g,Di.elements[9]*=g,Di.elements[10]*=g,t.setFromRotationMatrix(Di),i.x=c,i.y=u,i.z=h,this}makePerspective(e,t,i,s,o,c,u=tr,h=!1){const d=this.elements,p=2*o/(t-e),g=2*o/(i-s),m=(t+e)/(t-e),y=(i+s)/(i-s);let v,w;if(h)v=o/(c-o),w=c*o/(c-o);else if(u===tr)v=-(c+o)/(c-o),w=-2*c*o/(c-o);else if(u===qo)v=-c/(c-o),w=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=p,d[4]=0,d[8]=m,d[12]=0,d[1]=0,d[5]=g,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=v,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,s,o,c,u=tr,h=!1){const d=this.elements,p=2/(t-e),g=2/(i-s),m=-(t+e)/(t-e),y=-(i+s)/(i-s);let v,w;if(h)v=1/(c-o),w=c/(c-o);else if(u===tr)v=-2/(c-o),w=-(c+o)/(c-o);else if(u===qo)v=-1/(c-o),w=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=p,d[4]=0,d[8]=0,d[12]=m,d[1]=0,d[5]=g,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=v,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Xc.prototype.isMatrix4=!0;let qt=Xc;const va=new J,Di=new qt,pS=new J(0,0,0),mS=new J(1,1,1),Zr=new J,Jl=new J,li=new J,W0=new qt,X0=new Ga;class Cr{constructor(e=0,t=0,i=0,s=Cr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,o=s[0],c=s[4],u=s[8],h=s[1],d=s[5],p=s[9],g=s[2],m=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(At(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(m,d),this._z=0);break;case"YXZ":this._x=Math.asin(-At(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(At(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-At(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(m,y),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,d),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,y),this._y=0);break;default:ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return W0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(W0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return X0.setFromEuler(this),this.setFromQuaternion(X0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Cr.DEFAULT_ORDER="XYZ";class Rx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let gS=0;const j0=new J,_a=new Ga,xr=new qt,ec=new J,Co=new J,xS=new J,vS=new Ga,q0=new J(1,0,0),Y0=new J(0,1,0),$0=new J(0,0,1),K0={type:"added"},_S={type:"removed"},ya={type:"childadded",child:null},Bh={type:"childremoved",child:null};class gn extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=Va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new J,t=new Cr,i=new Ga,s=new J(1,1,1);function o(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qt},normalMatrix:{value:new St}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _a.setFromAxisAngle(e,t),this.quaternion.multiply(_a),this}rotateOnWorldAxis(e,t){return _a.setFromAxisAngle(e,t),this.quaternion.premultiply(_a),this}rotateX(e){return this.rotateOnAxis(q0,e)}rotateY(e){return this.rotateOnAxis(Y0,e)}rotateZ(e){return this.rotateOnAxis($0,e)}translateOnAxis(e,t){return j0.copy(e).applyQuaternion(this.quaternion),this.position.add(j0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(q0,e)}translateY(e){return this.translateOnAxis(Y0,e)}translateZ(e){return this.translateOnAxis($0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ec.copy(e):ec.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xr.lookAt(Co,ec,this.up):xr.lookAt(ec,Co,this.up),this.quaternion.setFromRotationMatrix(xr),s&&(xr.extractRotation(s.matrixWorld),_a.setFromRotationMatrix(xr),this.quaternion.premultiply(_a.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(K0),ya.child=e,this.dispatchEvent(ya),ya.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_S),Bh.child=e,this.dispatchEvent(Bh),Bh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xr.multiply(e.parent.matrixWorld)),e.applyMatrix4(xr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(K0),ya.child=e,this.dispatchEvent(ya),ya.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let o=0,c=s.length;o<c;o++)s[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,xS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,vS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*i-o[8]*s,o[13]+=i-o[1]*t-o[5]*i-o[9]*s,o[14]+=s-o[2]*t-o[6]*i-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let o=0,c=s.length;o<c;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(u=>({...u})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let d=0,p=h.length;d<p;d++){const g=h[d];o(e.shapes,g)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,d=this.material.length;h<d;h++)u.push(o(e.materials,this.material[h]));s.material=u}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];s.animations.push(o(e.animations,h))}}if(t){const u=c(e.geometries),h=c(e.materials),d=c(e.textures),p=c(e.images),g=c(e.shapes),m=c(e.skeletons),y=c(e.animations),v=c(e.nodes);u.length>0&&(i.geometries=u),h.length>0&&(i.materials=h),d.length>0&&(i.textures=d),p.length>0&&(i.images=p),g.length>0&&(i.shapes=g),m.length>0&&(i.skeletons=m),y.length>0&&(i.animations=y),v.length>0&&(i.nodes=v)}return i.object=s,i;function c(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}gn.DEFAULT_UP=new J(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Na extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yS={type:"move"};class Hh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Na,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Na,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Na,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,o=null,c=null;const u=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const w of e.hand.values()){const _=t.getJointPose(w,i),S=this._getHandJoint(d,w);_!==null&&(S.matrix.fromArray(_.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=_.radius),S.visible=_!==null}const p=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],m=p.position.distanceTo(g.position),y=.02,v=.005;d.inputState.pinching&&m>y+v?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&m<=y-v&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));u!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(yS)))}return u!==null&&(u.visible=s!==null),h!==null&&(h.visible=o!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Na;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Px={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qr={h:0,s:0,l:0},tc={h:0,s:0,l:0};function Vh(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Rt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Rt.workingColorSpace){if(e=Ud(e,1),t=At(t,0,1),i=At(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,c=2*i-o;this.r=Vh(c,o,e+1/3),this.g=Vh(c,o,e),this.b=Vh(c,o,e-1/3)}return Rt.colorSpaceToWorking(this,s),this}setStyle(e,t=hi){function i(o){o!==void 0&&parseFloat(o)<1&&ht("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:ht("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);ht("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hi){const i=Px[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ht("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=br(e.r),this.g=br(e.g),this.b=br(e.b),this}copyLinearToSRGB(e){return this.r=Fa(e.r),this.g=Fa(e.g),this.b=Fa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return Rt.workingToColorSpace(On.copy(this),e),Math.round(At(On.r*255,0,255))*65536+Math.round(At(On.g*255,0,255))*256+Math.round(At(On.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(On.copy(this),t);const i=On.r,s=On.g,o=On.b,c=Math.max(i,s,o),u=Math.min(i,s,o);let h,d;const p=(u+c)/2;if(u===c)h=0,d=0;else{const g=c-u;switch(d=p<=.5?g/(c+u):g/(2-c-u),c){case i:h=(s-o)/g+(s<o?6:0);break;case s:h=(o-i)/g+2;break;case o:h=(i-s)/g+4;break}h/=6}return e.h=h,e.s=d,e.l=p,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(On.copy(this),t),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=hi){Rt.workingToColorSpace(On.copy(this),e);const t=On.r,i=On.g,s=On.b;return e!==hi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Qr),this.setHSL(Qr.h+e,Qr.s+t,Qr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qr),e.getHSL(tc);const i=Ho(Qr.h,tc.h,t),s=Ho(Qr.s,tc.s,t),o=Ho(Qr.l,tc.l,t);return this.setHSL(i,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*s,this.g=o[1]*t+o[4]*i+o[7]*s,this.b=o[2]*t+o[5]*i+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Ye;Ye.NAMES=Px;class Ko{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ye(e),this.density=t}clone(){return new Ko(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ds extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cr,this.environmentIntensity=1,this.environmentRotation=new Cr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ki=new J,vr=new J,Gh=new J,_r=new J,Sa=new J,Ma=new J,Z0=new J,Wh=new J,Xh=new J,jh=new J,qh=new sn,Yh=new sn,$h=new sn;class Hi{constructor(e=new J,t=new J,i=new J){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),ki.subVectors(e,t),s.cross(ki);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,i,s,o){ki.subVectors(s,t),vr.subVectors(i,t),Gh.subVectors(e,t);const c=ki.dot(ki),u=ki.dot(vr),h=ki.dot(Gh),d=vr.dot(vr),p=vr.dot(Gh),g=c*d-u*u;if(g===0)return o.set(0,0,0),null;const m=1/g,y=(d*h-u*p)*m,v=(c*p-u*h)*m;return o.set(1-y-v,v,y)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,_r)===null?!1:_r.x>=0&&_r.y>=0&&_r.x+_r.y<=1}static getInterpolation(e,t,i,s,o,c,u,h){return this.getBarycoord(e,t,i,s,_r)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,_r.x),h.addScaledVector(c,_r.y),h.addScaledVector(u,_r.z),h)}static getInterpolatedAttribute(e,t,i,s,o,c){return qh.setScalar(0),Yh.setScalar(0),$h.setScalar(0),qh.fromBufferAttribute(e,t),Yh.fromBufferAttribute(e,i),$h.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(qh,o.x),c.addScaledVector(Yh,o.y),c.addScaledVector($h,o.z),c}static isFrontFacing(e,t,i,s){return ki.subVectors(i,t),vr.subVectors(e,t),ki.cross(vr).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ki.subVectors(this.c,this.b),vr.subVectors(this.a,this.b),ki.cross(vr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Hi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,o){return Hi.getInterpolation(e,this.a,this.b,this.c,t,i,s,o)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,o=this.c;let c,u;Sa.subVectors(s,i),Ma.subVectors(o,i),Wh.subVectors(e,i);const h=Sa.dot(Wh),d=Ma.dot(Wh);if(h<=0&&d<=0)return t.copy(i);Xh.subVectors(e,s);const p=Sa.dot(Xh),g=Ma.dot(Xh);if(p>=0&&g<=p)return t.copy(s);const m=h*g-p*d;if(m<=0&&h>=0&&p<=0)return c=h/(h-p),t.copy(i).addScaledVector(Sa,c);jh.subVectors(e,o);const y=Sa.dot(jh),v=Ma.dot(jh);if(v>=0&&y<=v)return t.copy(o);const w=y*d-h*v;if(w<=0&&d>=0&&v<=0)return u=d/(d-v),t.copy(i).addScaledVector(Ma,u);const _=p*v-y*g;if(_<=0&&g-p>=0&&y-v>=0)return Z0.subVectors(o,s),u=(g-p)/(g-p+(y-v)),t.copy(s).addScaledVector(Z0,u);const S=1/(_+w+m);return c=w*S,u=m*S,t.copy(i).addScaledVector(Sa,c).addScaledVector(Ma,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ws{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=o.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Oi):Oi.fromBufferAttribute(o,c),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),nc.copy(i.boundingBox)),nc.applyMatrix4(e.matrixWorld),this.union(nc)}const s=e.children;for(let o=0,c=s.length;o<c;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),ic.subVectors(this.max,Ao),wa.subVectors(e.a,Ao),ba.subVectors(e.b,Ao),Ea.subVectors(e.c,Ao),Jr.subVectors(ba,wa),es.subVectors(Ea,ba),Ps.subVectors(wa,Ea);let t=[0,-Jr.z,Jr.y,0,-es.z,es.y,0,-Ps.z,Ps.y,Jr.z,0,-Jr.x,es.z,0,-es.x,Ps.z,0,-Ps.x,-Jr.y,Jr.x,0,-es.y,es.x,0,-Ps.y,Ps.x,0];return!Kh(t,wa,ba,Ea,ic)||(t=[1,0,0,0,1,0,0,0,1],!Kh(t,wa,ba,Ea,ic))?!1:(rc.crossVectors(Jr,es),t=[rc.x,rc.y,rc.z],Kh(t,wa,ba,Ea,ic))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yr=[new J,new J,new J,new J,new J,new J,new J,new J],Oi=new J,nc=new Ws,wa=new J,ba=new J,Ea=new J,Jr=new J,es=new J,Ps=new J,Ao=new J,ic=new J,rc=new J,Ls=new J;function Kh(a,e,t,i,s){for(let o=0,c=a.length-3;o<=c;o+=3){Ls.fromArray(a,o);const u=s.x*Math.abs(Ls.x)+s.y*Math.abs(Ls.y)+s.z*Math.abs(Ls.z),h=e.dot(Ls),d=t.dot(Ls),p=i.dot(Ls);if(Math.max(-Math.max(h,d,p),Math.min(h,d,p))>u)return!1}return!0}const dn=new J,sc=new ut;let SS=0;class _n extends Gs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:SS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=D0,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)sc.fromBufferAttribute(this,t),sc.applyMatrix3(e),this.setXY(t,sc.x,sc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ia(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ia(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ia(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ia(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ia(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),i=Wn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),i=Wn(i,this.array),s=Wn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),i=Wn(i,this.array),s=Wn(s,this.array),o=Wn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==D0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Lx extends _n{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ix extends _n{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Zt extends _n{constructor(e,t,i){super(new Float32Array(e),t,i)}}const MS=new Ws,Ro=new J,Zh=new J;class Xs{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):MS.setFromPoints(e).getCenter(i);let s=0;for(let o=0,c=e.length;o<c;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const t=Ro.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ro,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(Zh)),this.expandByPoint(Ro.copy(e.center).sub(Zh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let wS=0;const wi=new qt,Qh=new gn,Ta=new J,ci=new Ws,Po=new Ws,En=new J;class cn extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=Va(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vy(e)?Ix:Lx)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new St().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wi.makeRotationFromQuaternion(e),this.applyMatrix4(wi),this}rotateX(e){return wi.makeRotationX(e),this.applyMatrix4(wi),this}rotateY(e){return wi.makeRotationY(e),this.applyMatrix4(wi),this}rotateZ(e){return wi.makeRotationZ(e),this.applyMatrix4(wi),this}translate(e,t,i){return wi.makeTranslation(e,t,i),this.applyMatrix4(wi),this}scale(e,t,i){return wi.makeScale(e,t,i),this.applyMatrix4(wi),this}lookAt(e){return Qh.lookAt(e),Qh.updateMatrix(),this.applyMatrix4(Qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ta).negate(),this.translate(Ta.x,Ta.y,Ta.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,o=e.length;s<o;s++){const c=e[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Zt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];ci.setFromBufferAttribute(o),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ci.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ci.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ci.min),this.boundingBox.expandByPoint(ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const i=this.boundingSphere.center;if(ci.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const u=t[o];Po.setFromBufferAttribute(u),this.morphTargetsRelative?(En.addVectors(ci.min,Po.min),ci.expandByPoint(En),En.addVectors(ci.max,Po.max),ci.expandByPoint(En)):(ci.expandByPoint(Po.min),ci.expandByPoint(Po.max))}ci.getCenter(i);let s=0;for(let o=0,c=e.count;o<c;o++)En.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(En));if(t)for(let o=0,c=t.length;o<c;o++){const u=t[o],h=this.morphTargetsRelative;for(let d=0,p=u.count;d<p;d++)En.fromBufferAttribute(u,d),h&&(Ta.fromBufferAttribute(e,d),En.add(Ta)),s=Math.max(s,i.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],h=[];for(let T=0;T<i.count;T++)u[T]=new J,h[T]=new J;const d=new J,p=new J,g=new J,m=new ut,y=new ut,v=new ut,w=new J,_=new J;function S(T,U,z){d.fromBufferAttribute(i,T),p.fromBufferAttribute(i,U),g.fromBufferAttribute(i,z),m.fromBufferAttribute(o,T),y.fromBufferAttribute(o,U),v.fromBufferAttribute(o,z),p.sub(d),g.sub(d),y.sub(m),v.sub(m);const D=1/(y.x*v.y-v.x*y.y);isFinite(D)&&(w.copy(p).multiplyScalar(v.y).addScaledVector(g,-y.y).multiplyScalar(D),_.copy(g).multiplyScalar(y.x).addScaledVector(p,-v.x).multiplyScalar(D),u[T].add(w),u[U].add(w),u[z].add(w),h[T].add(_),h[U].add(_),h[z].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let T=0,U=b.length;T<U;++T){const z=b[T],D=z.start,B=z.count;for(let $=D,ee=D+B;$<ee;$+=3)S(e.getX($+0),e.getX($+1),e.getX($+2))}const C=new J,E=new J,I=new J,A=new J;function N(T){I.fromBufferAttribute(s,T),A.copy(I);const U=u[T];C.copy(U),C.sub(I.multiplyScalar(I.dot(U))).normalize(),E.crossVectors(A,U);const D=E.dot(h[T])<0?-1:1;c.setXYZW(T,C.x,C.y,C.z,D)}for(let T=0,U=b.length;T<U;++T){const z=b[T],D=z.start,B=z.count;for(let $=D,ee=D+B;$<ee;$+=3)N(e.getX($+0)),N(e.getX($+1)),N(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _n(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,y=i.count;m<y;m++)i.setXYZ(m,0,0,0);const s=new J,o=new J,c=new J,u=new J,h=new J,d=new J,p=new J,g=new J;if(e)for(let m=0,y=e.count;m<y;m+=3){const v=e.getX(m+0),w=e.getX(m+1),_=e.getX(m+2);s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,w),c.fromBufferAttribute(t,_),p.subVectors(c,o),g.subVectors(s,o),p.cross(g),u.fromBufferAttribute(i,v),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,_),u.add(p),h.add(p),d.add(p),i.setXYZ(v,u.x,u.y,u.z),i.setXYZ(w,h.x,h.y,h.z),i.setXYZ(_,d.x,d.y,d.z)}else for(let m=0,y=t.count;m<y;m+=3)s.fromBufferAttribute(t,m+0),o.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),p.subVectors(c,o),g.subVectors(s,o),p.cross(g),i.setXYZ(m+0,p.x,p.y,p.z),i.setXYZ(m+1,p.x,p.y,p.z),i.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(u,h){const d=u.array,p=u.itemSize,g=u.normalized,m=new d.constructor(h.length*p);let y=0,v=0;for(let w=0,_=h.length;w<_;w++){u.isInterleavedBufferAttribute?y=h[w]*u.data.stride+u.offset:y=h[w]*p;for(let S=0;S<p;S++)m[v++]=d[y++]}return new _n(m,p,g)}if(this.index===null)return ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,i=this.index.array,s=this.attributes;for(const u in s){const h=s[u],d=e(h,i);t.setAttribute(u,d)}const o=this.morphAttributes;for(const u in o){const h=[],d=o[u];for(let p=0,g=d.length;p<g;p++){const m=d[p],y=e(m,i);h.push(y)}t.morphAttributes[u]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,h=c.length;u<h;u++){const d=c[u];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const d=i[h];e.data.attributes[h]=d.toJSON(e.data)}const s={};let o=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],p=[];for(let g=0,m=d.length;g<m;g++){const y=d[g];p.push(y.toJSON(e.data))}p.length>0&&(s[h]=p,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const d in s){const p=s[d];this.setAttribute(d,p.clone(t))}const o=e.morphAttributes;for(const d in o){const p=[],g=o[d];for(let m=0,y=g.length;m<y;m++)p.push(g[m].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,p=c.length;d<p;d++){const g=c[d];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let bS=0;class Gi extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=Va(),this.name="",this.type="Material",this.blending=Ua,this.side=fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mf,this.blendDst=wf,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=F0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ga,this.stencilZFail=ga,this.stencilZPass=ga,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ht(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ht(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ua&&(i.blending=this.blending),this.side!==fs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Mf&&(i.blendSrc=this.blendSrc),this.blendDst!==wf&&(i.blendDst=this.blendDst),this.blendEquation!==Ds&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Oa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==F0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ga&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ga&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ga&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}if(t){const o=s(e.textures),c=s(e.images);o.length>0&&(i.textures=o),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Sr=new J,Jh=new J,ac=new J,ts=new J,ef=new J,oc=new J,tf=new J;class Dd{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sr.copy(this.origin).addScaledVector(this.direction,t),Sr.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Jh.copy(e).add(t).multiplyScalar(.5),ac.copy(t).sub(e).normalize(),ts.copy(this.origin).sub(Jh);const o=e.distanceTo(t)*.5,c=-this.direction.dot(ac),u=ts.dot(this.direction),h=-ts.dot(ac),d=ts.lengthSq(),p=Math.abs(1-c*c);let g,m,y,v;if(p>0)if(g=c*h-u,m=c*u-h,v=o*p,g>=0)if(m>=-v)if(m<=v){const w=1/p;g*=w,m*=w,y=g*(g+c*m+2*u)+m*(c*g+m+2*h)+d}else m=o,g=Math.max(0,-(c*m+u)),y=-g*g+m*(m+2*h)+d;else m=-o,g=Math.max(0,-(c*m+u)),y=-g*g+m*(m+2*h)+d;else m<=-v?(g=Math.max(0,-(-c*o+u)),m=g>0?-o:Math.min(Math.max(-o,-h),o),y=-g*g+m*(m+2*h)+d):m<=v?(g=0,m=Math.min(Math.max(-o,-h),o),y=m*(m+2*h)+d):(g=Math.max(0,-(c*o+u)),m=g>0?o:Math.min(Math.max(-o,-h),o),y=-g*g+m*(m+2*h)+d);else m=c>0?-o:o,g=Math.max(0,-(c*m+u)),y=-g*g+m*(m+2*h)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Jh).addScaledVector(ac,m),y}intersectSphere(e,t){Sr.subVectors(e.center,this.origin);const i=Sr.dot(this.direction),s=Sr.dot(Sr)-i*i,o=e.radius*e.radius;if(s>o)return null;const c=Math.sqrt(o-s),u=i-c,h=i+c;return h<0?null:u<0?this.at(h,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,o,c,u,h;const d=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,m=this.origin;return d>=0?(i=(e.min.x-m.x)*d,s=(e.max.x-m.x)*d):(i=(e.max.x-m.x)*d,s=(e.min.x-m.x)*d),p>=0?(o=(e.min.y-m.y)*p,c=(e.max.y-m.y)*p):(o=(e.max.y-m.y)*p,c=(e.min.y-m.y)*p),i>c||o>s||((o>i||isNaN(i))&&(i=o),(c<s||isNaN(s))&&(s=c),g>=0?(u=(e.min.z-m.z)*g,h=(e.max.z-m.z)*g):(u=(e.max.z-m.z)*g,h=(e.min.z-m.z)*g),i>h||u>s)||((u>i||i!==i)&&(i=u),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Sr)!==null}intersectTriangle(e,t,i,s,o){ef.subVectors(t,e),oc.subVectors(i,e),tf.crossVectors(ef,oc);let c=this.direction.dot(tf),u;if(c>0){if(s)return null;u=1}else if(c<0)u=-1,c=-c;else return null;ts.subVectors(this.origin,e);const h=u*this.direction.dot(oc.crossVectors(ts,oc));if(h<0)return null;const d=u*this.direction.dot(ef.cross(ts));if(d<0||h+d>c)return null;const p=-u*ts.dot(tf);return p<0?null:this.at(p/c,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yc extends Gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cr,this.combine=bd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Q0=new qt,Is=new Dd,lc=new Xs,J0=new J,cc=new J,uc=new J,hc=new J,nf=new J,fc=new J,eg=new J,dc=new J;class un extends gn{constructor(e=new cn,t=new Yc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(o&&u){fc.set(0,0,0);for(let h=0,d=o.length;h<d;h++){const p=u[h],g=o[h];p!==0&&(nf.fromBufferAttribute(g,e),c?fc.addScaledVector(nf,p):fc.addScaledVector(nf.sub(t),p))}t.add(fc)}return t}raycast(e,t){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),lc.copy(i.boundingSphere),lc.applyMatrix4(o),Is.copy(e.ray).recast(e.near),!(lc.containsPoint(Is.origin)===!1&&(Is.intersectSphere(lc,J0)===null||Is.origin.distanceToSquared(J0)>(e.far-e.near)**2))&&(Q0.copy(o).invert(),Is.copy(e.ray).applyMatrix4(Q0),!(i.boundingBox!==null&&Is.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Is)))}_computeIntersections(e,t,i){let s;const o=this.geometry,c=this.material,u=o.index,h=o.attributes.position,d=o.attributes.uv,p=o.attributes.uv1,g=o.attributes.normal,m=o.groups,y=o.drawRange;if(u!==null)if(Array.isArray(c))for(let v=0,w=m.length;v<w;v++){const _=m[v],S=c[_.materialIndex],b=Math.max(_.start,y.start),C=Math.min(u.count,Math.min(_.start+_.count,y.start+y.count));for(let E=b,I=C;E<I;E+=3){const A=u.getX(E),N=u.getX(E+1),T=u.getX(E+2);s=pc(this,S,e,i,d,p,g,A,N,T),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const v=Math.max(0,y.start),w=Math.min(u.count,y.start+y.count);for(let _=v,S=w;_<S;_+=3){const b=u.getX(_),C=u.getX(_+1),E=u.getX(_+2);s=pc(this,c,e,i,d,p,g,b,C,E),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(c))for(let v=0,w=m.length;v<w;v++){const _=m[v],S=c[_.materialIndex],b=Math.max(_.start,y.start),C=Math.min(h.count,Math.min(_.start+_.count,y.start+y.count));for(let E=b,I=C;E<I;E+=3){const A=E,N=E+1,T=E+2;s=pc(this,S,e,i,d,p,g,A,N,T),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const v=Math.max(0,y.start),w=Math.min(h.count,y.start+y.count);for(let _=v,S=w;_<S;_+=3){const b=_,C=_+1,E=_+2;s=pc(this,c,e,i,d,p,g,b,C,E),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function ES(a,e,t,i,s,o,c,u){let h;if(e.side===ti?h=i.intersectTriangle(c,o,s,!0,u):h=i.intersectTriangle(s,o,c,e.side===fs,u),h===null)return null;dc.copy(u),dc.applyMatrix4(a.matrixWorld);const d=t.ray.origin.distanceTo(dc);return d<t.near||d>t.far?null:{distance:d,point:dc.clone(),object:a}}function pc(a,e,t,i,s,o,c,u,h,d){a.getVertexPosition(u,cc),a.getVertexPosition(h,uc),a.getVertexPosition(d,hc);const p=ES(a,e,t,i,cc,uc,hc,eg);if(p){const g=new J;Hi.getBarycoord(eg,cc,uc,hc,g),s&&(p.uv=Hi.getInterpolatedAttribute(s,u,h,d,g,new ut)),o&&(p.uv1=Hi.getInterpolatedAttribute(o,u,h,d,g,new ut)),c&&(p.normal=Hi.getInterpolatedAttribute(c,u,h,d,g,new J),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const m={a:u,b:h,c:d,normal:new J,materialIndex:0};Hi.getNormal(cc,uc,hc,m.normal),p.face=m,p.barycoord=g}return p}class kd extends Bn{constructor(e=null,t=1,i=1,s,o,c,u,h,d=In,p=In,g,m){super(null,c,u,h,d,p,s,o,g,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tg extends _n{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ca=new qt,ng=new qt,mc=[],ig=new Ws,TS=new qt,Lo=new un,Io=new Xs;class CS extends un{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new tg(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,TS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ws),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ca),ig.copy(e.boundingBox).applyMatrix4(Ca),this.boundingBox.union(ig)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ca),Io.copy(e.boundingSphere).applyMatrix4(Ca),this.boundingSphere.union(Io)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,o=i.length+1,c=e*o+1;for(let u=0;u<i.length;u++)i[u]=s[c+u]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Lo.geometry=this.geometry,Lo.material=this.material,Lo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Io.copy(this.boundingSphere),Io.applyMatrix4(i),e.ray.intersectsSphere(Io)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Ca),ng.multiplyMatrices(i,Ca),Lo.matrixWorld=ng,Lo.raycast(e,mc);for(let c=0,u=mc.length;c<u;c++){const h=mc[c];h.instanceId=o,h.object=this,t.push(h)}mc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new tg(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new kd(new Float32Array(s*this.count),s,this.count,Ad,Vi));const o=this.morphTexture.source.data.data;let c=0;for(let d=0;d<i.length;d++)c+=i[d];const u=this.geometry.morphTargetsRelative?1:1-c,h=s*e;return o[h]=u,o.set(i,h+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const rf=new J,AS=new J,RS=new St;class Fs{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=rf.subVectors(i,t).cross(AS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(rf),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return i===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||RS.getNormalMatrix(e),s=this.coplanarPoint(rf).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ns=new Xs,PS=new ut(.5,.5),gc=new J;class Od{constructor(e=new Fs,t=new Fs,i=new Fs,s=new Fs,o=new Fs,c=new Fs){this.planes=[e,t,i,s,o,c]}set(e,t,i,s,o,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(s),u[4].copy(o),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=tr,i=!1){const s=this.planes,o=e.elements,c=o[0],u=o[1],h=o[2],d=o[3],p=o[4],g=o[5],m=o[6],y=o[7],v=o[8],w=o[9],_=o[10],S=o[11],b=o[12],C=o[13],E=o[14],I=o[15];if(s[0].setComponents(d-c,y-p,S-v,I-b).normalize(),s[1].setComponents(d+c,y+p,S+v,I+b).normalize(),s[2].setComponents(d+u,y+g,S+w,I+C).normalize(),s[3].setComponents(d-u,y-g,S-w,I-C).normalize(),i)s[4].setComponents(h,m,_,E).normalize(),s[5].setComponents(d-h,y-m,S-_,I-E).normalize();else if(s[4].setComponents(d-h,y-m,S-_,I-E).normalize(),t===tr)s[5].setComponents(d+h,y+m,S+_,I+E).normalize();else if(t===qo)s[5].setComponents(h,m,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(e){Ns.center.set(0,0,0);const t=PS.distanceTo(e.center);return Ns.radius=.7071067811865476+t,Ns.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(gc.x=s.normal.x>0?e.max.x:e.min.x,gc.y=s.normal.y>0?e.max.y:e.min.y,gc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(gc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vo extends Gi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const zc=new J,Bc=new J,rg=new qt,No=new Dd,xc=new Xs,sf=new J,sg=new J;class Nx extends gn{constructor(e=new cn,t=new Vo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,o=t.count;s<o;s++)zc.fromBufferAttribute(t,s-1),Bc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=zc.distanceTo(Bc);e.setAttribute("lineDistance",new Zt(i,1))}else ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),xc.copy(i.boundingSphere),xc.applyMatrix4(s),xc.radius+=o,e.ray.intersectsSphere(xc)===!1)return;rg.copy(s).invert(),No.copy(e.ray).applyMatrix4(rg);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,d=this.isLineSegments?2:1,p=i.index,m=i.attributes.position;if(p!==null){const y=Math.max(0,c.start),v=Math.min(p.count,c.start+c.count);for(let w=y,_=v-1;w<_;w+=d){const S=p.getX(w),b=p.getX(w+1),C=vc(this,e,No,h,S,b,w);C&&t.push(C)}if(this.isLineLoop){const w=p.getX(v-1),_=p.getX(y),S=vc(this,e,No,h,w,_,v-1);S&&t.push(S)}}else{const y=Math.max(0,c.start),v=Math.min(m.count,c.start+c.count);for(let w=y,_=v-1;w<_;w+=d){const S=vc(this,e,No,h,w,w+1,w);S&&t.push(S)}if(this.isLineLoop){const w=vc(this,e,No,h,v-1,y,v-1);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function vc(a,e,t,i,s,o,c){const u=a.geometry.attributes.position;if(zc.fromBufferAttribute(u,s),Bc.fromBufferAttribute(u,o),t.distanceSqToSegment(zc,Bc,sf,sg)>i)return;sf.applyMatrix4(a.matrixWorld);const d=e.ray.origin.distanceTo(sf);if(!(d<e.near||d>e.far))return{distance:d,point:sg.clone().applyMatrix4(a.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:a}}const ag=new J,og=new J;class ud extends Nx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,o=t.count;s<o;s+=2)ag.fromBufferAttribute(t,s),og.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+ag.distanceTo(og);e.setAttribute("lineDistance",new Zt(i,1))}else ht("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class cs extends Gi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const lg=new qt,hd=new Dd,_c=new Xs,yc=new J;class Er extends gn{constructor(e=new cn,t=new cs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_c.copy(i.boundingSphere),_c.applyMatrix4(s),_c.radius+=o,e.ray.intersectsSphere(_c)===!1)return;lg.copy(s).invert(),hd.copy(e.ray).applyMatrix4(lg);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,d=i.index,g=i.attributes.position;if(d!==null){const m=Math.max(0,c.start),y=Math.min(d.count,c.start+c.count);for(let v=m,w=y;v<w;v++){const _=d.getX(v);yc.fromBufferAttribute(g,_),cg(yc,_,h,s,e,t,this)}}else{const m=Math.max(0,c.start),y=Math.min(g.count,c.start+c.count);for(let v=m,w=y;v<w;v++)yc.fromBufferAttribute(g,v),cg(yc,v,h,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function cg(a,e,t,i,s,o,c){const u=hd.distanceSqToPoint(a);if(u<t){const h=new J;hd.closestPointToPoint(a,h),h.applyMatrix4(i);const d=s.ray.origin.distanceTo(h);if(d<s.near||d>s.far)return;o.push({distance:d,distanceToRay:Math.sqrt(u),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class LS extends Bn{constructor(e,t,i,s,o=mn,c=mn,u,h,d){super(e,t,i,s,o,c,u,h,d),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const p=this;function g(){p.needsUpdate=!0,p._requestVideoFrameCallbackId=e.requestVideoFrameCallback(g)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(g))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class Ux extends Bn{constructor(e=[],t=Bs,i,s,o,c,u,h,d,p){super(e,t,i,s,o,c,u,h,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ba extends Bn{constructor(e,t,i=sr,s,o,c,u=In,h=In,d,p=Tr,g=1){if(p!==Tr&&p!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:g};super(m,s,o,c,u,h,p,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class IS extends Ba{constructor(e,t=sr,i=Bs,s,o,c=In,u=In,h,d=Tr){const p={width:e,height:e,depth:1},g=[p,p,p,p,p,p];super(e,e,t,i,s,o,c,u,h,d),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Fx extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Wa extends cn{constructor(e=1,t=1,i=1,s=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:o,depthSegments:c};const u=this;s=Math.floor(s),o=Math.floor(o),c=Math.floor(c);const h=[],d=[],p=[],g=[];let m=0,y=0;v("z","y","x",-1,-1,i,t,e,c,o,0),v("z","y","x",1,-1,i,t,-e,c,o,1),v("x","z","y",1,1,e,i,t,s,c,2),v("x","z","y",1,-1,e,i,-t,s,c,3),v("x","y","z",1,-1,e,t,i,s,o,4),v("x","y","z",-1,-1,e,t,-i,s,o,5),this.setIndex(h),this.setAttribute("position",new Zt(d,3)),this.setAttribute("normal",new Zt(p,3)),this.setAttribute("uv",new Zt(g,2));function v(w,_,S,b,C,E,I,A,N,T,U){const z=E/N,D=I/T,B=E/2,$=I/2,ee=A/2,V=N+1,Z=T+1;let K=0,X=0;const re=new J;for(let j=0;j<Z;j++){const O=j*D-$;for(let G=0;G<V;G++){const pe=G*z-B;re[w]=pe*b,re[_]=O*C,re[S]=ee,d.push(re.x,re.y,re.z),re[w]=0,re[_]=0,re[S]=A>0?1:-1,p.push(re.x,re.y,re.z),g.push(G/N),g.push(1-j/T),K+=1}}for(let j=0;j<T;j++)for(let O=0;O<N;O++){const G=m+O+V*j,pe=m+O+V*(j+1),Me=m+(O+1)+V*(j+1),ye=m+(O+1)+V*j;h.push(G,pe,ye),h.push(pe,Me,ye),X+=6}u.addGroup(y,X,U),y+=X,m+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class zd extends cn{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const o=[],c=[];u(s),d(i),p(),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(o.slice(),3)),this.setAttribute("uv",new Zt(c,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function u(b){const C=new J,E=new J,I=new J;for(let A=0;A<t.length;A+=3)y(t[A+0],C),y(t[A+1],E),y(t[A+2],I),h(C,E,I,b)}function h(b,C,E,I){const A=I+1,N=[];for(let T=0;T<=A;T++){N[T]=[];const U=b.clone().lerp(E,T/A),z=C.clone().lerp(E,T/A),D=A-T;for(let B=0;B<=D;B++)B===0&&T===A?N[T][B]=U:N[T][B]=U.clone().lerp(z,B/D)}for(let T=0;T<A;T++)for(let U=0;U<2*(A-T)-1;U++){const z=Math.floor(U/2);U%2===0?(m(N[T][z+1]),m(N[T+1][z]),m(N[T][z])):(m(N[T][z+1]),m(N[T+1][z+1]),m(N[T+1][z]))}}function d(b){const C=new J;for(let E=0;E<o.length;E+=3)C.x=o[E+0],C.y=o[E+1],C.z=o[E+2],C.normalize().multiplyScalar(b),o[E+0]=C.x,o[E+1]=C.y,o[E+2]=C.z}function p(){const b=new J;for(let C=0;C<o.length;C+=3){b.x=o[C+0],b.y=o[C+1],b.z=o[C+2];const E=_(b)/2/Math.PI+.5,I=S(b)/Math.PI+.5;c.push(E,1-I)}v(),g()}function g(){for(let b=0;b<c.length;b+=6){const C=c[b+0],E=c[b+2],I=c[b+4],A=Math.max(C,E,I),N=Math.min(C,E,I);A>.9&&N<.1&&(C<.2&&(c[b+0]+=1),E<.2&&(c[b+2]+=1),I<.2&&(c[b+4]+=1))}}function m(b){o.push(b.x,b.y,b.z)}function y(b,C){const E=b*3;C.x=e[E+0],C.y=e[E+1],C.z=e[E+2]}function v(){const b=new J,C=new J,E=new J,I=new J,A=new ut,N=new ut,T=new ut;for(let U=0,z=0;U<o.length;U+=9,z+=6){b.set(o[U+0],o[U+1],o[U+2]),C.set(o[U+3],o[U+4],o[U+5]),E.set(o[U+6],o[U+7],o[U+8]),A.set(c[z+0],c[z+1]),N.set(c[z+2],c[z+3]),T.set(c[z+4],c[z+5]),I.copy(b).add(C).add(E).divideScalar(3);const D=_(I);w(A,z+0,b,D),w(N,z+2,C,D),w(T,z+4,E,D)}}function w(b,C,E,I){I<0&&b.x===1&&(c[C]=b.x-1),E.x===0&&E.z===0&&(c[C]=I/2/Math.PI+.5)}function _(b){return Math.atan2(b.z,-b.x)}function S(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zd(e.vertices,e.indices,e.radius,e.detail)}}class Bd extends zd{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Bd(e.radius,e.detail)}}class Ar extends cn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const o=e/2,c=t/2,u=Math.floor(i),h=Math.floor(s),d=u+1,p=h+1,g=e/u,m=t/h,y=[],v=[],w=[],_=[];for(let S=0;S<p;S++){const b=S*m-c;for(let C=0;C<d;C++){const E=C*g-o;v.push(E,-b,0),w.push(0,0,1),_.push(C/u),_.push(1-S/h)}}for(let S=0;S<h;S++)for(let b=0;b<u;b++){const C=b+d*S,E=b+d*(S+1),I=b+1+d*(S+1),A=b+1+d*S;y.push(C,E,A),y.push(E,I,A)}this.setIndex(y),this.setAttribute("position",new Zt(v,3)),this.setAttribute("normal",new Zt(w,3)),this.setAttribute("uv",new Zt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hd extends cn{constructor(e=1,t=.4,i=64,s=8,o=2,c=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:s,p:o,q:c},i=Math.floor(i),s=Math.floor(s);const u=[],h=[],d=[],p=[],g=new J,m=new J,y=new J,v=new J,w=new J,_=new J,S=new J;for(let C=0;C<=i;++C){const E=C/i*o*Math.PI*2;b(E,o,c,e,y),b(E+.01,o,c,e,v),_.subVectors(v,y),S.addVectors(v,y),w.crossVectors(_,S),S.crossVectors(w,_),w.normalize(),S.normalize();for(let I=0;I<=s;++I){const A=I/s*Math.PI*2,N=-t*Math.cos(A),T=t*Math.sin(A);g.x=y.x+(N*S.x+T*w.x),g.y=y.y+(N*S.y+T*w.y),g.z=y.z+(N*S.z+T*w.z),h.push(g.x,g.y,g.z),m.subVectors(g,y).normalize(),d.push(m.x,m.y,m.z),p.push(C/i),p.push(I/s)}}for(let C=1;C<=i;C++)for(let E=1;E<=s;E++){const I=(s+1)*(C-1)+(E-1),A=(s+1)*C+(E-1),N=(s+1)*C+E,T=(s+1)*(C-1)+E;u.push(I,A,T),u.push(A,N,T)}this.setIndex(u),this.setAttribute("position",new Zt(h,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(p,2));function b(C,E,I,A,N){const T=Math.cos(C),U=Math.sin(C),z=I/E*C,D=Math.cos(z);N.x=A*(2+D)*.5*T,N.y=A*(2+D)*U*.5,N.z=A*Math.sin(z)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hd(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}function Ha(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const s=a[t][i];if(ug(s))s.isRenderTargetTexture?(ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(ug(s[0])){const o=[];for(let c=0,u=s.length;c<u;c++)o[c]=s[c].clone();e[t][i]=o}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Xn(a){const e={};for(let t=0;t<a.length;t++){const i=Ha(a[t]);for(const s in i)e[s]=i[s]}return e}function ug(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function NS(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Dx(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const Hc={clone:Ha,merge:Xn};var US=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends Gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=US,this.fragmentShader=FS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ha(e.uniforms),this.uniformsGroups=NS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class DS extends ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class kx extends Gi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fc,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kS extends Gi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ye(16777215),this.specular=new Ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fc,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cr,this.combine=bd,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class OS extends Gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zS extends Gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hg={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(fg(a)||(this.files[a]=e))},get:function(a){if(this.enabled!==!1&&!fg(a))return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};function fg(a){try{const e=a.slice(a.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class BS{constructor(e,t,i){const s=this;let o=!1,c=0,u=0,h;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(p){u++,o===!1&&s.onStart!==void 0&&s.onStart(p,c,u),o=!0},this.itemEnd=function(p){c++,s.onProgress!==void 0&&s.onProgress(p,c,u),c===u&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,g){return d.push(p,g),this},this.removeHandler=function(p){const g=d.indexOf(p);return g!==-1&&d.splice(g,2),this},this.getHandler=function(p){for(let g=0,m=d.length;g<m;g+=2){const y=d[g],v=d[g+1];if(y.global&&(y.lastIndex=0),y.test(p))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const HS=new BS;class Vd{constructor(e){this.manager=e!==void 0?e:HS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,o){i.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Vd.DEFAULT_MATERIAL_NAME="__DEFAULT";const Mr={};class VS extends Error{constructor(e,t){super(e),this.response=t}}class GS extends Vd{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=hg.get(`file:${e}`);if(o!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0);return}if(Mr[e]!==void 0){Mr[e].push({onLoad:t,onProgress:i,onError:s});return}Mr[e]=[],Mr[e].push({onLoad:t,onProgress:i,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),u=this.mimeType,h=this.responseType;fetch(c).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&ht("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const p=Mr[e],g=d.body.getReader(),m=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),y=m?parseInt(m):0,v=y!==0;let w=0;const _=new ReadableStream({start(S){b();function b(){g.read().then(({done:C,value:E})=>{if(C)S.close();else{w+=E.byteLength;const I=new ProgressEvent("progress",{lengthComputable:v,loaded:w,total:y});for(let A=0,N=p.length;A<N;A++){const T=p[A];T.onProgress&&T.onProgress(I)}S.enqueue(E),b()}},C=>{S.error(C)})}}});return new Response(_)}else throw new VS(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(h){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(p=>new DOMParser().parseFromString(p,u));case"json":return d.json();default:if(u==="")return d.text();{const g=/charset="?([^;"\s]*)"?/i.exec(u),m=g&&g[1]?g[1].toLowerCase():void 0,y=new TextDecoder(m);return d.arrayBuffer().then(v=>y.decode(v))}}}).then(d=>{hg.add(`file:${e}`,d);const p=Mr[e];delete Mr[e];for(let g=0,m=p.length;g<m;g++){const y=p[g];y.onLoad&&y.onLoad(d)}}).catch(d=>{const p=Mr[e];if(p===void 0)throw this.manager.itemError(e),d;delete Mr[e];for(let g=0,m=p.length;g<m;g++){const y=p[g];y.onError&&y.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Gd extends gn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const af=new qt,dg=new J,pg=new J;class Ox{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=fi,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Od,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;dg.setFromMatrixPosition(e.matrixWorld),t.position.copy(dg),pg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pg),t.updateMatrixWorld(),af.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(af,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===qo||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(af)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Sc=new J,Mc=new Ga,Qi=new J;class zx extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=tr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Sc,Mc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sc,Mc,Qi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Sc,Mc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Sc,Mc,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ns=new J,mg=new ut,gg=new ut;class Tn extends zx{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yo*2*Math.atan(Math.tan(Bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,mg,gg),t.subVectors(gg,mg)}setViewOffset(e,t,i,s,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,o=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,d=c.fullHeight;o+=c.offsetX*s/h,t-=c.offsetY*i/d,s*=c.width/h,i*=c.height/d}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class WS extends Ox{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0}}class Vc extends Gd{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new WS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Xa extends zx{constructor(e=-1,t=1,i=1,s=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,c=i+e,u=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,c=o+d*this.view.width,u-=p*this.view.offsetY,h=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,c,u,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class XS extends Ox{constructor(){super(new Xa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class of extends Gd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new XS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Bx extends Gd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Aa=-90,Ra=1;class jS extends gn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Tn(Aa,Ra,e,t);s.layers=this.layers,this.add(s);const o=new Tn(Aa,Ra,e,t);o.layers=this.layers,this.add(o);const c=new Tn(Aa,Ra,e,t);c.layers=this.layers,this.add(c);const u=new Tn(Aa,Ra,e,t);u.layers=this.layers,this.add(u);const h=new Tn(Aa,Ra,e,t);h.layers=this.layers,this.add(h);const d=new Tn(Aa,Ra,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,o,c,u,h]=t;for(const d of t)this.remove(d);if(e===tr)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===qo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,c,u,h,d,p]=this.children,g=e.getRenderTarget(),m=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,1,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(i,3,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(i,4,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(g,m,y),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class qS extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class YS{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=$S.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function $S(){this._document.hidden===!1&&this.reset()}const Kd=class Kd{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const o=this.elements;return o[0]=e,o[2]=t,o[1]=i,o[3]=s,this}};Kd.prototype.isMatrix2=!0;let xg=Kd;function vg(a,e,t,i){const s=KS(i);switch(t){case Ex:return a*e;case Ad:return a*e/s.components*s.byteLength;case Rd:return a*e/s.components*s.byteLength;case Hs:return a*e*2/s.components*s.byteLength;case Pd:return a*e*2/s.components*s.byteLength;case Tx:return a*e*3/s.components*s.byteLength;case di:return a*e*4/s.components*s.byteLength;case Ld:return a*e*4/s.components*s.byteLength;case Cc:case Ac:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Rc:case Pc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Uf:case Df:return Math.max(a,16)*Math.max(e,8)/4;case Nf:case Ff:return Math.max(a,8)*Math.max(e,8)/2;case kf:case Of:case Bf:case Hf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case zf:case Nc:case Vf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Gf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Wf:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Xf:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case jf:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case qf:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Yf:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case $f:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Kf:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Zf:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Qf:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Jf:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case ed:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case td:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case nd:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case id:case rd:case sd:return Math.ceil(a/4)*Math.ceil(e/4)*16;case ad:case od:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Uc:case ld:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function KS(a){switch(a){case fi:case Sx:return{byteLength:1,components:1};case Xo:case Mx:case pi:return{byteLength:2,components:1};case Td:case Cd:return{byteLength:2,components:4};case sr:case Ed:case Vi:return{byteLength:4,components:1};case wx:case bx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wd}}));typeof window<"u"&&(window.__THREE__?ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hx(){let a=null,e=!1,t=null,i=null;function s(o,c){t(o,c),i=a.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&a!==null&&(i=a.requestAnimationFrame(s),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){a=o}}}function ZS(a){const e=new WeakMap;function t(u,h){const d=u.array,p=u.usage,g=d.byteLength,m=a.createBuffer();a.bindBuffer(h,m),a.bufferData(h,d,p),u.onUploadCallback();let y;if(d instanceof Float32Array)y=a.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=a.HALF_FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?y=a.HALF_FLOAT:y=a.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=a.SHORT;else if(d instanceof Uint32Array)y=a.UNSIGNED_INT;else if(d instanceof Int32Array)y=a.INT;else if(d instanceof Int8Array)y=a.BYTE;else if(d instanceof Uint8Array)y=a.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:g}}function i(u,h,d){const p=h.array,g=h.updateRanges;if(a.bindBuffer(d,u),g.length===0)a.bufferSubData(d,0,p);else{g.sort((y,v)=>y.start-v.start);let m=0;for(let y=1;y<g.length;y++){const v=g[m],w=g[y];w.start<=v.start+v.count+1?v.count=Math.max(v.count,w.start+w.count-v.start):(++m,g[m]=w)}g.length=m+1;for(let y=0,v=g.length;y<v;y++){const w=g[y];a.bufferSubData(d,w.start*p.BYTES_PER_ELEMENT,p,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=e.get(u);h&&(a.deleteBuffer(h.buffer),e.delete(u))}function c(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const d=e.get(u);if(d===void 0)e.set(u,t(u,h));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,u,h),d.version=u.version}}return{get:s,remove:o,update:c}}var QS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JS=`#ifdef USE_ALPHAHASH
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
#endif`,eM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rM=`#ifdef USE_AOMAP
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
#endif`,sM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aM=`#ifdef USE_BATCHING
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
#endif`,oM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hM=`#ifdef USE_IRIDESCENCE
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
#endif`,fM=`#ifdef USE_BUMPMAP
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
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,vM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_M=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,SM=`#define PI 3.141592653589793
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
} // validated`,MM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,wM=`vec3 transformedNormal = objectNormal;
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
#endif`,EM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,TM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AM="gl_FragColor = linearToOutputTexel( gl_FragColor );",RM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PM=`#ifdef USE_ENVMAP
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
#endif`,LM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,IM=`#ifdef USE_ENVMAP
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
#endif`,NM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UM=`#ifdef USE_ENVMAP
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
#endif`,FM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zM=`#ifdef USE_GRADIENTMAP
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
}`,BM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,HM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,VM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,WM=`#ifdef USE_ENVMAP
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
#endif`,XM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,YM=`varying vec3 vViewPosition;
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
#endif`,KM=`uniform sampler2D dfgLUT;
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
}`,ZM=`
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
#endif`,QM=`#if defined( RE_IndirectDiffuse )
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
#endif`,JM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ew=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,tw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ow=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,lw=`#if defined( USE_POINTS_UV )
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
#endif`,cw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pw=`#ifdef USE_MORPHTARGETS
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
#endif`,mw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_w=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sw=`#ifdef USE_NORMALMAP
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
#endif`,Mw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ww=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ew=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Aw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Iw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kw=`float getShadowMask() {
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
}`,Ow=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zw=`#ifdef USE_SKINNING
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
#endif`,Bw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hw=`#ifdef USE_SKINNING
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
#endif`,Vw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ww=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jw=`#ifdef USE_TRANSMISSION
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
#endif`,qw=`#ifdef USE_TRANSMISSION
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
#endif`,Yw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$w=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jw=`uniform sampler2D t2D;
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
}`,e2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,n2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r2=`#include <common>
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
}`,s2=`#if DEPTH_PACKING == 3200
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
}`,a2=`#define DISTANCE
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
}`,o2=`#define DISTANCE
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
}`,l2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u2=`uniform float scale;
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
}`,h2=`uniform vec3 diffuse;
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
}`,f2=`#include <common>
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
}`,d2=`uniform vec3 diffuse;
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
}`,p2=`#define LAMBERT
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
}`,m2=`#define LAMBERT
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
}`,g2=`#define MATCAP
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
}`,x2=`#define MATCAP
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
}`,v2=`#define NORMAL
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
}`,_2=`#define NORMAL
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
}`,y2=`#define PHONG
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
}`,S2=`#define PHONG
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
}`,M2=`#define STANDARD
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
}`,w2=`#define STANDARD
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
}`,b2=`#define TOON
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
}`,E2=`#define TOON
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
}`,T2=`uniform float size;
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
}`,C2=`uniform vec3 diffuse;
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
}`,A2=`#include <common>
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
}`,R2=`uniform vec3 color;
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
}`,P2=`uniform float rotation;
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
}`,L2=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:QS,alphahash_pars_fragment:JS,alphamap_fragment:eM,alphamap_pars_fragment:tM,alphatest_fragment:nM,alphatest_pars_fragment:iM,aomap_fragment:rM,aomap_pars_fragment:sM,batching_pars_vertex:aM,batching_vertex:oM,begin_vertex:lM,beginnormal_vertex:cM,bsdfs:uM,iridescence_fragment:hM,bumpmap_pars_fragment:fM,clipping_planes_fragment:dM,clipping_planes_pars_fragment:pM,clipping_planes_pars_vertex:mM,clipping_planes_vertex:gM,color_fragment:xM,color_pars_fragment:vM,color_pars_vertex:_M,color_vertex:yM,common:SM,cube_uv_reflection_fragment:MM,defaultnormal_vertex:wM,displacementmap_pars_vertex:bM,displacementmap_vertex:EM,emissivemap_fragment:TM,emissivemap_pars_fragment:CM,colorspace_fragment:AM,colorspace_pars_fragment:RM,envmap_fragment:PM,envmap_common_pars_fragment:LM,envmap_pars_fragment:IM,envmap_pars_vertex:NM,envmap_physical_pars_fragment:WM,envmap_vertex:UM,fog_vertex:FM,fog_pars_vertex:DM,fog_fragment:kM,fog_pars_fragment:OM,gradientmap_pars_fragment:zM,lightmap_pars_fragment:BM,lights_lambert_fragment:HM,lights_lambert_pars_fragment:VM,lights_pars_begin:GM,lights_toon_fragment:XM,lights_toon_pars_fragment:jM,lights_phong_fragment:qM,lights_phong_pars_fragment:YM,lights_physical_fragment:$M,lights_physical_pars_fragment:KM,lights_fragment_begin:ZM,lights_fragment_maps:QM,lights_fragment_end:JM,lightprobes_pars_fragment:ew,logdepthbuf_fragment:tw,logdepthbuf_pars_fragment:nw,logdepthbuf_pars_vertex:iw,logdepthbuf_vertex:rw,map_fragment:sw,map_pars_fragment:aw,map_particle_fragment:ow,map_particle_pars_fragment:lw,metalnessmap_fragment:cw,metalnessmap_pars_fragment:uw,morphinstance_vertex:hw,morphcolor_vertex:fw,morphnormal_vertex:dw,morphtarget_pars_vertex:pw,morphtarget_vertex:mw,normal_fragment_begin:gw,normal_fragment_maps:xw,normal_pars_fragment:vw,normal_pars_vertex:_w,normal_vertex:yw,normalmap_pars_fragment:Sw,clearcoat_normal_fragment_begin:Mw,clearcoat_normal_fragment_maps:ww,clearcoat_pars_fragment:bw,iridescence_pars_fragment:Ew,opaque_fragment:Tw,packing:Cw,premultiplied_alpha_fragment:Aw,project_vertex:Rw,dithering_fragment:Pw,dithering_pars_fragment:Lw,roughnessmap_fragment:Iw,roughnessmap_pars_fragment:Nw,shadowmap_pars_fragment:Uw,shadowmap_pars_vertex:Fw,shadowmap_vertex:Dw,shadowmask_pars_fragment:kw,skinbase_vertex:Ow,skinning_pars_vertex:zw,skinning_vertex:Bw,skinnormal_vertex:Hw,specularmap_fragment:Vw,specularmap_pars_fragment:Gw,tonemapping_fragment:Ww,tonemapping_pars_fragment:Xw,transmission_fragment:jw,transmission_pars_fragment:qw,uv_pars_fragment:Yw,uv_pars_vertex:$w,uv_vertex:Kw,worldpos_vertex:Zw,background_vert:Qw,background_frag:Jw,backgroundCube_vert:e2,backgroundCube_frag:t2,cube_vert:n2,cube_frag:i2,depth_vert:r2,depth_frag:s2,distance_vert:a2,distance_frag:o2,equirect_vert:l2,equirect_frag:c2,linedashed_vert:u2,linedashed_frag:h2,meshbasic_vert:f2,meshbasic_frag:d2,meshlambert_vert:p2,meshlambert_frag:m2,meshmatcap_vert:g2,meshmatcap_frag:x2,meshnormal_vert:v2,meshnormal_frag:_2,meshphong_vert:y2,meshphong_frag:S2,meshphysical_vert:M2,meshphysical_frag:w2,meshtoon_vert:b2,meshtoon_frag:E2,points_vert:T2,points_frag:C2,shadow_vert:A2,shadow_frag:R2,sprite_vert:P2,sprite_frag:L2},Ge={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new St}},envmap:{envMap:{value:null},envMapRotation:{value:new St},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new St}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new St}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new St},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new St},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new St},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new St}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new St}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new St}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}}},er={basic:{uniforms:Xn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:Xn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:Xn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:Xn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:Xn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Ye(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:Xn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:Xn([Ge.points,Ge.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:Xn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:Xn([Ge.common,Ge.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:Xn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:Xn([Ge.sprite,Ge.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new St}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distance:{uniforms:Xn([Ge.common,Ge.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distance_vert,fragmentShader:wt.distance_frag},shadow:{uniforms:Xn([Ge.lights,Ge.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};er.physical={uniforms:Xn([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new St},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new St},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new St},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new St},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new St},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new St},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new St},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new St},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new St},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new St},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new St},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new St}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const wc={r:0,b:0,g:0},I2=new qt,Vx=new St;Vx.set(-1,0,0,0,1,0,0,0,1);function N2(a,e,t,i,s,o){const c=new Ye(0);let u=s===!0?0:1,h,d,p=null,g=0,m=null;function y(b){let C=b.isScene===!0?b.background:null;if(C&&C.isTexture){const E=b.backgroundBlurriness>0;C=e.get(C,E)}return C}function v(b){let C=!1;const E=y(b);E===null?_(c,u):E&&E.isColor&&(_(E,1),C=!0);const I=a.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(a.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function w(b,C){const E=y(C);E&&(E.isCubeTexture||E.mapping===qc)?(d===void 0&&(d=new un(new Wa(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:Ha(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(I,A,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=E,d.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(I2.makeRotationFromEuler(C.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Vx),d.material.toneMapped=Rt.getTransfer(E.colorSpace)!==Gt,(p!==E||g!==E.version||m!==a.toneMapping)&&(d.material.needsUpdate=!0,p=E,g=E.version,m=a.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):E&&E.isTexture&&(h===void 0&&(h=new un(new Ar(2,2),new ln({name:"BackgroundMaterial",uniforms:Ha(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:fs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=E,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=Rt.getTransfer(E.colorSpace)!==Gt,E.matrixAutoUpdate===!0&&E.updateMatrix(),h.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||g!==E.version||m!==a.toneMapping)&&(h.material.needsUpdate=!0,p=E,g=E.version,m=a.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function _(b,C){b.getRGB(wc,Dx(a)),t.buffers.color.setClear(wc.r,wc.g,wc.b,C,o)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(b,C=1){c.set(b),u=C,_(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(b){u=b,_(c,u)},render:v,addToRenderList:w,dispose:S}}function U2(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},s=m(null);let o=s,c=!1;function u(D,B,$,ee,V){let Z=!1;const K=g(D,ee,$,B);o!==K&&(o=K,d(o.object)),Z=y(D,ee,$,V),Z&&v(D,ee,$,V),V!==null&&e.update(V,a.ELEMENT_ARRAY_BUFFER),(Z||c)&&(c=!1,E(D,B,$,ee),V!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function h(){return a.createVertexArray()}function d(D){return a.bindVertexArray(D)}function p(D){return a.deleteVertexArray(D)}function g(D,B,$,ee){const V=ee.wireframe===!0;let Z=i[B.id];Z===void 0&&(Z={},i[B.id]=Z);const K=D.isInstancedMesh===!0?D.id:0;let X=Z[K];X===void 0&&(X={},Z[K]=X);let re=X[$.id];re===void 0&&(re={},X[$.id]=re);let j=re[V];return j===void 0&&(j=m(h()),re[V]=j),j}function m(D){const B=[],$=[],ee=[];for(let V=0;V<t;V++)B[V]=0,$[V]=0,ee[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:$,attributeDivisors:ee,object:D,attributes:{},index:null}}function y(D,B,$,ee){const V=o.attributes,Z=B.attributes;let K=0;const X=$.getAttributes();for(const re in X)if(X[re].location>=0){const O=V[re];let G=Z[re];if(G===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(G=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(G=D.instanceColor)),O===void 0||O.attribute!==G||G&&O.data!==G.data)return!0;K++}return o.attributesNum!==K||o.index!==ee}function v(D,B,$,ee){const V={},Z=B.attributes;let K=0;const X=$.getAttributes();for(const re in X)if(X[re].location>=0){let O=Z[re];O===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(O=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(O=D.instanceColor));const G={};G.attribute=O,O&&O.data&&(G.data=O.data),V[re]=G,K++}o.attributes=V,o.attributesNum=K,o.index=ee}function w(){const D=o.newAttributes;for(let B=0,$=D.length;B<$;B++)D[B]=0}function _(D){S(D,0)}function S(D,B){const $=o.newAttributes,ee=o.enabledAttributes,V=o.attributeDivisors;$[D]=1,ee[D]===0&&(a.enableVertexAttribArray(D),ee[D]=1),V[D]!==B&&(a.vertexAttribDivisor(D,B),V[D]=B)}function b(){const D=o.newAttributes,B=o.enabledAttributes;for(let $=0,ee=B.length;$<ee;$++)B[$]!==D[$]&&(a.disableVertexAttribArray($),B[$]=0)}function C(D,B,$,ee,V,Z,K){K===!0?a.vertexAttribIPointer(D,B,$,V,Z):a.vertexAttribPointer(D,B,$,ee,V,Z)}function E(D,B,$,ee){w();const V=ee.attributes,Z=$.getAttributes(),K=B.defaultAttributeValues;for(const X in Z){const re=Z[X];if(re.location>=0){let j=V[X];if(j===void 0&&(X==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),X==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){const O=j.normalized,G=j.itemSize,pe=e.get(j);if(pe===void 0)continue;const Me=pe.buffer,ye=pe.type,te=pe.bytesPerElement,ge=ye===a.INT||ye===a.UNSIGNED_INT||j.gpuType===Ed;if(j.isInterleavedBufferAttribute){const me=j.data,Ae=me.stride,We=j.offset;if(me.isInstancedInterleavedBuffer){for(let tt=0;tt<re.locationSize;tt++)S(re.location+tt,me.meshPerAttribute);D.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let tt=0;tt<re.locationSize;tt++)_(re.location+tt);a.bindBuffer(a.ARRAY_BUFFER,Me);for(let tt=0;tt<re.locationSize;tt++)C(re.location+tt,G/re.locationSize,ye,O,Ae*te,(We+G/re.locationSize*tt)*te,ge)}else{if(j.isInstancedBufferAttribute){for(let me=0;me<re.locationSize;me++)S(re.location+me,j.meshPerAttribute);D.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let me=0;me<re.locationSize;me++)_(re.location+me);a.bindBuffer(a.ARRAY_BUFFER,Me);for(let me=0;me<re.locationSize;me++)C(re.location+me,G/re.locationSize,ye,O,G*te,G/re.locationSize*me*te,ge)}}else if(K!==void 0){const O=K[X];if(O!==void 0)switch(O.length){case 2:a.vertexAttrib2fv(re.location,O);break;case 3:a.vertexAttrib3fv(re.location,O);break;case 4:a.vertexAttrib4fv(re.location,O);break;default:a.vertexAttrib1fv(re.location,O)}}}}b()}function I(){U();for(const D in i){const B=i[D];for(const $ in B){const ee=B[$];for(const V in ee){const Z=ee[V];for(const K in Z)p(Z[K].object),delete Z[K];delete ee[V]}}delete i[D]}}function A(D){if(i[D.id]===void 0)return;const B=i[D.id];for(const $ in B){const ee=B[$];for(const V in ee){const Z=ee[V];for(const K in Z)p(Z[K].object),delete Z[K];delete ee[V]}}delete i[D.id]}function N(D){for(const B in i){const $=i[B];for(const ee in $){const V=$[ee];if(V[D.id]===void 0)continue;const Z=V[D.id];for(const K in Z)p(Z[K].object),delete Z[K];delete V[D.id]}}}function T(D){for(const B in i){const $=i[B],ee=D.isInstancedMesh===!0?D.id:0,V=$[ee];if(V!==void 0){for(const Z in V){const K=V[Z];for(const X in K)p(K[X].object),delete K[X];delete V[Z]}delete $[ee],Object.keys($).length===0&&delete i[B]}}}function U(){z(),c=!0,o!==s&&(o=s,d(o.object))}function z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:U,resetDefaultState:z,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfObject:T,releaseStatesOfProgram:N,initAttributes:w,enableAttribute:_,disableUnusedAttributes:b}}function F2(a,e,t){let i;function s(h){i=h}function o(h,d){a.drawArrays(i,h,d),t.update(d,i,1)}function c(h,d,p){p!==0&&(a.drawArraysInstanced(i,h,d,p),t.update(d,i,p))}function u(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,d,0,p);let m=0;for(let y=0;y<p;y++)m+=d[y];t.update(m,i,1)}this.setMode=s,this.render=o,this.renderInstances=c,this.renderMultiDraw=u}function D2(a,e,t,i){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");s=a.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(N){return!(N!==di&&i.convert(N)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(N){const T=N===pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==fi&&i.convert(N)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Vi&&!T)}function h(N){if(N==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const p=h(d);p!==d&&(ht("WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const g=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),v=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=a.getParameter(a.MAX_TEXTURE_SIZE),_=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),S=a.getParameter(a.MAX_VERTEX_ATTRIBS),b=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),C=a.getParameter(a.MAX_VARYING_VECTORS),E=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),I=a.getParameter(a.MAX_SAMPLES),A=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:g,reversedDepthBuffer:m,maxTextures:y,maxVertexTextures:v,maxTextureSize:w,maxCubemapSize:_,maxAttributes:S,maxVertexUniforms:b,maxVaryings:C,maxFragmentUniforms:E,maxSamples:I,samples:A}}function k2(a){const e=this;let t=null,i=0,s=!1,o=!1;const c=new Fs,u=new St,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,m){const y=g.length!==0||m||i!==0||s;return s=m,i=g.length,y},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,m){t=p(g,m,0)},this.setState=function(g,m,y){const v=g.clippingPlanes,w=g.clipIntersection,_=g.clipShadows,S=a.get(g);if(!s||v===null||v.length===0||o&&!_)o?p(null):d();else{const b=o?0:i,C=b*4;let E=S.clippingState||null;h.value=E,E=p(v,m,C,y);for(let I=0;I!==C;++I)E[I]=t[I];S.clippingState=E,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=b}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(g,m,y,v){const w=g!==null?g.length:0;let _=null;if(w!==0){if(_=h.value,v!==!0||_===null){const S=y+w*4,b=m.matrixWorldInverse;u.getNormalMatrix(b),(_===null||_.length<S)&&(_=new Float32Array(S));for(let C=0,E=y;C!==w;++C,E+=4)c.copy(g[C]).applyMatrix4(b,u),c.normal.toArray(_,E),_[E+3]=c.constant}h.value=_,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,_}}const us=4,_g=[.125,.215,.35,.446,.526,.582],ks=20,O2=256,Uo=new Xa,yg=new Ye;let lf=null,cf=0,uf=0,hf=!1;const z2=new J;class Sg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,o={}){const{size:c=256,position:u=z2}=o;lf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),uf=this._renderer.getActiveMipmapLevel(),hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,i,s,h,u),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lf,cf,uf),this._renderer.xr.enabled=hf,e.scissorTest=!1,Pa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bs||e.mapping===za?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),uf=this._renderer.getActiveMipmapLevel(),hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:pi,format:di,colorSpace:Dc,depthBuffer:!1},s=Mg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mg(e,t,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=B2(o)),this._blurMaterial=V2(o,e,t),this._ggxMaterial=H2(o,e,t)}return s}_compileMaterial(e){const t=new un(new cn,e);this._renderer.compile(t,Uo)}_sceneToCubeUV(e,t,i,s,o){const h=new Tn(90,1,t,i),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,m=g.autoClear,y=g.toneMapping;g.getClearColor(yg),g.toneMapping=rr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new un(new Wa,new Yc({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,_=w.material;let S=!1;const b=e.background;b?b.isColor&&(_.color.copy(b),e.background=null,S=!0):(_.color.copy(yg),S=!0);for(let C=0;C<6;C++){const E=C%3;E===0?(h.up.set(0,d[C],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x+p[C],o.y,o.z)):E===1?(h.up.set(0,0,d[C]),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y+p[C],o.z)):(h.up.set(0,d[C],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y,o.z+p[C]));const I=this._cubeSize;Pa(s,E*I,C>2?I:0,I,I),g.setRenderTarget(s),S&&g.render(w,h),g.render(e,h)}g.toneMapping=y,g.autoClear=m,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Bs||e.mapping===za;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wg());const o=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=o;const u=o.uniforms;u.envMap.value=e;const h=this._cubeSize;Pa(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(c,Uo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,o=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[i];u.material=c;const h=c.uniforms,d=i/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),g=Math.sqrt(d*d-p*p),m=0+d*1.25,y=g*m,{_lodMax:v}=this,w=this._sizeLods[i],_=3*w*(i>v-us?i-v+us:0),S=4*(this._cubeSize-w);h.envMap.value=e.texture,h.roughness.value=y,h.mipInt.value=v-t,Pa(o,_,S,3*w,2*w),s.setRenderTarget(o),s.render(u,Uo),h.envMap.value=o.texture,h.roughness.value=0,h.mipInt.value=v-i,Pa(e,_,S,3*w,2*w),s.setRenderTarget(e),s.render(u,Uo)}_blur(e,t,i,s,o){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",o),this._halfBlur(c,e,i,i,s,"longitudinal",o)}_halfBlur(e,t,i,s,o,c,u){const h=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Ut("blur direction must be either latitudinal or longitudinal!");const p=3,g=this._lodMeshes[s];g.material=d;const m=d.uniforms,y=this._sizeLods[i]-1,v=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*ks-1),w=o/v,_=isFinite(o)?1+Math.floor(p*w):ks;_>ks&&ht(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ks}`);const S=[];let b=0;for(let N=0;N<ks;++N){const T=N/w,U=Math.exp(-T*T/2);S.push(U),N===0?b+=U:N<_&&(b+=2*U)}for(let N=0;N<S.length;N++)S[N]=S[N]/b;m.envMap.value=e.texture,m.samples.value=_,m.weights.value=S,m.latitudinal.value=c==="latitudinal",u&&(m.poleAxis.value=u);const{_lodMax:C}=this;m.dTheta.value=v,m.mipInt.value=C-i;const E=this._sizeLods[s],I=3*E*(s>C-us?s-C+us:0),A=4*(this._cubeSize-E);Pa(t,I,A,3*E,2*E),h.setRenderTarget(t),h.render(g,Uo)}}function B2(a){const e=[],t=[],i=[];let s=a;const o=a-us+1+_g.length;for(let c=0;c<o;c++){const u=Math.pow(2,s);e.push(u);let h=1/u;c>a-us?h=_g[c-a+us-1]:c===0&&(h=0),t.push(h);const d=1/(u-2),p=-d,g=1+d,m=[p,p,g,p,g,g,p,p,g,g,p,g],y=6,v=6,w=3,_=2,S=1,b=new Float32Array(w*v*y),C=new Float32Array(_*v*y),E=new Float32Array(S*v*y);for(let A=0;A<y;A++){const N=A%3*2/3-1,T=A>2?0:-1,U=[N,T,0,N+2/3,T,0,N+2/3,T+1,0,N,T,0,N+2/3,T+1,0,N,T+1,0];b.set(U,w*v*A),C.set(m,_*v*A);const z=[A,A,A,A,A,A];E.set(z,S*v*A)}const I=new cn;I.setAttribute("position",new _n(b,w)),I.setAttribute("uv",new _n(C,_)),I.setAttribute("faceIndex",new _n(E,S)),i.push(new un(I,null)),s>us&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Mg(a,e,t){const i=new ni(a,e,t);return i.texture.mapping=qc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Pa(a,e,t,i,s){a.viewport.set(e,t,i,s),a.scissor.set(e,t,i,s)}function H2(a,e,t){return new ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:O2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$c(),fragmentShader:`

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
		`,blending:ir,depthTest:!1,depthWrite:!1})}function V2(a,e,t){const i=new Float32Array(ks),s=new J(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:ks,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$c(),fragmentShader:`

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
		`,blending:ir,depthTest:!1,depthWrite:!1})}function wg(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$c(),fragmentShader:`

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
		`,blending:ir,depthTest:!1,depthWrite:!1})}function bg(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function $c(){return`

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
	`}class Gx extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ux(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Wa(5,5,5),o=new ln({name:"CubemapFromEquirect",uniforms:Ha(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ti,blending:ir});o.uniforms.tEquirect.value=t;const c=new un(s,o),u=t.minFilter;return t.minFilter===Os&&(t.minFilter=mn),new jS(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(o)}}function G2(a){let e=new WeakMap,t=new WeakMap,i=null;function s(m,y=!1){return m==null?null:y?c(m):o(m)}function o(m){if(m&&m.isTexture){const y=m.mapping;if(y===Nh||y===Uh)if(e.has(m)){const v=e.get(m).texture;return u(v,m.mapping)}else{const v=m.image;if(v&&v.height>0){const w=new Gx(v.height);return w.fromEquirectangularTexture(a,m),e.set(m,w),m.addEventListener("dispose",d),u(w.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const y=m.mapping,v=y===Nh||y===Uh,w=y===Bs||y===za;if(v||w){let _=t.get(m);const S=_!==void 0?_.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==S)return i===null&&(i=new Sg(a)),_=v?i.fromEquirectangular(m,_):i.fromCubemap(m,_),_.texture.pmremVersion=m.pmremVersion,t.set(m,_),_.texture;if(_!==void 0)return _.texture;{const b=m.image;return v&&b&&b.height>0||w&&b&&h(b)?(i===null&&(i=new Sg(a)),_=v?i.fromEquirectangular(m):i.fromCubemap(m),_.texture.pmremVersion=m.pmremVersion,t.set(m,_),m.addEventListener("dispose",p),_.texture):null}}}return m}function u(m,y){return y===Nh?m.mapping=Bs:y===Uh&&(m.mapping=za),m}function h(m){let y=0;const v=6;for(let w=0;w<v;w++)m[w]!==void 0&&y++;return y===v}function d(m){const y=m.target;y.removeEventListener("dispose",d);const v=e.get(y);v!==void 0&&(e.delete(y),v.dispose())}function p(m){const y=m.target;y.removeEventListener("dispose",p);const v=t.get(y);v!==void 0&&(t.delete(y),v.dispose())}function g(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:g}}function W2(a){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=a.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&cd("WebGLRenderer: "+i+" extension not supported."),s}}}function X2(a,e,t,i){const s={},o=new WeakMap;function c(g){const m=g.target;m.index!==null&&e.remove(m.index);for(const v in m.attributes)e.remove(m.attributes[v]);m.removeEventListener("dispose",c),delete s[m.id];const y=o.get(m);y&&(e.remove(y),o.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function u(g,m){return s[m.id]===!0||(m.addEventListener("dispose",c),s[m.id]=!0,t.memory.geometries++),m}function h(g){const m=g.attributes;for(const y in m)e.update(m[y],a.ARRAY_BUFFER)}function d(g){const m=[],y=g.index,v=g.attributes.position;let w=0;if(v===void 0)return;if(y!==null){const b=y.array;w=y.version;for(let C=0,E=b.length;C<E;C+=3){const I=b[C+0],A=b[C+1],N=b[C+2];m.push(I,A,A,N,N,I)}}else{const b=v.array;w=v.version;for(let C=0,E=b.length/3-1;C<E;C+=3){const I=C+0,A=C+1,N=C+2;m.push(I,A,A,N,N,I)}}const _=new(v.count>=65535?Ix:Lx)(m,1);_.version=w;const S=o.get(g);S&&e.remove(S),o.set(g,_)}function p(g){const m=o.get(g);if(m){const y=g.index;y!==null&&m.version<y.version&&d(g)}else d(g);return o.get(g)}return{get:u,update:h,getWireframeAttribute:p}}function j2(a,e,t){let i;function s(g){i=g}let o,c;function u(g){o=g.type,c=g.bytesPerElement}function h(g,m){a.drawElements(i,m,o,g*c),t.update(m,i,1)}function d(g,m,y){y!==0&&(a.drawElementsInstanced(i,m,o,g*c,y),t.update(m,i,y))}function p(g,m,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,o,g,0,y);let w=0;for(let _=0;_<y;_++)w+=m[_];t.update(w,i,1)}this.setMode=s,this.setIndex=u,this.render=h,this.renderInstances=d,this.renderMultiDraw=p}function q2(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,c,u){switch(t.calls++,c){case a.TRIANGLES:t.triangles+=u*(o/3);break;case a.LINES:t.lines+=u*(o/2);break;case a.LINE_STRIP:t.lines+=u*(o-1);break;case a.LINE_LOOP:t.lines+=u*o;break;case a.POINTS:t.points+=u*o;break;default:Ut("WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Y2(a,e,t){const i=new WeakMap,s=new sn;function o(c,u,h){const d=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let m=i.get(u);if(m===void 0||m.count!==g){let U=function(){N.dispose(),i.delete(u),u.removeEventListener("dispose",U)};m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,_=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let C=0;y===!0&&(C=1),v===!0&&(C=2),w===!0&&(C=3);let E=u.attributes.position.count*C,I=1;E>e.maxTextureSize&&(I=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const A=new Float32Array(E*I*4*g),N=new Ax(A,E,I,g);N.type=Vi,N.needsUpdate=!0;const T=C*4;for(let z=0;z<g;z++){const D=_[z],B=S[z],$=b[z],ee=E*I*4*z;for(let V=0;V<D.count;V++){const Z=V*T;y===!0&&(s.fromBufferAttribute(D,V),A[ee+Z+0]=s.x,A[ee+Z+1]=s.y,A[ee+Z+2]=s.z,A[ee+Z+3]=0),v===!0&&(s.fromBufferAttribute(B,V),A[ee+Z+4]=s.x,A[ee+Z+5]=s.y,A[ee+Z+6]=s.z,A[ee+Z+7]=0),w===!0&&(s.fromBufferAttribute($,V),A[ee+Z+8]=s.x,A[ee+Z+9]=s.y,A[ee+Z+10]=s.z,A[ee+Z+11]=$.itemSize===4?s.w:1)}}m={count:g,texture:N,size:new ut(E,I)},i.set(u,m),u.addEventListener("dispose",U)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(a,"morphTexture",c.morphTexture,t);else{let y=0;for(let w=0;w<d.length;w++)y+=d[w];const v=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(a,"morphTargetBaseInfluence",v),h.getUniforms().setValue(a,"morphTargetInfluences",d)}h.getUniforms().setValue(a,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(a,"morphTargetsTextureSize",m.size)}return{update:o}}function $2(a,e,t,i,s){let o=new WeakMap;function c(d){const p=s.render.frame,g=d.geometry,m=e.get(d,g);if(o.get(m)!==p&&(e.update(m),o.set(m,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),o.get(d)!==p&&(t.update(d.instanceMatrix,a.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,a.ARRAY_BUFFER),o.set(d,p))),d.isSkinnedMesh){const y=d.skeleton;o.get(y)!==p&&(y.update(),o.set(y,p))}return m}function u(){o=new WeakMap}function h(d){const p=d.target;p.removeEventListener("dispose",h),i.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:c,dispose:u}}const K2={[dx]:"LINEAR_TONE_MAPPING",[px]:"REINHARD_TONE_MAPPING",[mx]:"CINEON_TONE_MAPPING",[gx]:"ACES_FILMIC_TONE_MAPPING",[vx]:"AGX_TONE_MAPPING",[_x]:"NEUTRAL_TONE_MAPPING",[xx]:"CUSTOM_TONE_MAPPING"};function Z2(a,e,t,i,s){const o=new ni(e,t,{type:a,depthBuffer:i,stencilBuffer:s,depthTexture:i?new Ba(e,t):void 0}),c=new ni(e,t,{type:pi,depthBuffer:!1,stencilBuffer:!1}),u=new cn;u.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Zt([0,2,0,0,2,0],2));const h=new DS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new un(u,h),p=new Xa(-1,1,1,-1,0,1);let g=null,m=null,y=!1,v,w=null,_=[],S=!1;this.setSize=function(b,C){o.setSize(b,C),c.setSize(b,C);for(let E=0;E<_.length;E++){const I=_[E];I.setSize&&I.setSize(b,C)}},this.setEffects=function(b){_=b,S=_.length>0&&_[0].isRenderPass===!0;const C=o.width,E=o.height;for(let I=0;I<_.length;I++){const A=_[I];A.setSize&&A.setSize(C,E)}},this.begin=function(b,C){if(y||b.toneMapping===rr&&_.length===0)return!1;if(w=C,C!==null){const E=C.width,I=C.height;(o.width!==E||o.height!==I)&&this.setSize(E,I)}return S===!1&&b.setRenderTarget(o),v=b.toneMapping,b.toneMapping=rr,!0},this.hasRenderPass=function(){return S},this.end=function(b,C){b.toneMapping=v,y=!0;let E=o,I=c;for(let A=0;A<_.length;A++){const N=_[A];if(N.enabled!==!1&&(N.render(b,I,E,C),N.needsSwap!==!1)){const T=E;E=I,I=T}}if(g!==b.outputColorSpace||m!==b.toneMapping){g=b.outputColorSpace,m=b.toneMapping,h.defines={},Rt.getTransfer(g)===Gt&&(h.defines.SRGB_TRANSFER="");const A=K2[m];A&&(h.defines[A]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,b.setRenderTarget(w),b.render(d,p),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),c.dispose(),u.dispose(),h.dispose()}}const Wx=new Bn,fd=new Ba(1,1),Xx=new Ax,jx=new dS,qx=new Ux,Eg=[],Tg=[],Cg=new Float32Array(16),Ag=new Float32Array(9),Rg=new Float32Array(4);function ja(a,e,t){const i=a[0];if(i<=0||i>0)return a;const s=e*t;let o=Eg[s];if(o===void 0&&(o=new Float32Array(s),Eg[s]=o),e!==0){i.toArray(o,0);for(let c=1,u=0;c!==e;++c)u+=t,a[c].toArray(o,u)}return o}function yn(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function Sn(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function Kc(a,e){let t=Tg[e];t===void 0&&(t=new Int32Array(e),Tg[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function Q2(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function J2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;a.uniform2fv(this.addr,e),Sn(t,e)}}function eb(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yn(t,e))return;a.uniform3fv(this.addr,e),Sn(t,e)}}function tb(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;a.uniform4fv(this.addr,e),Sn(t,e)}}function nb(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(yn(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Sn(t,e)}else{if(yn(t,i))return;Rg.set(i),a.uniformMatrix2fv(this.addr,!1,Rg),Sn(t,i)}}function ib(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(yn(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Sn(t,e)}else{if(yn(t,i))return;Ag.set(i),a.uniformMatrix3fv(this.addr,!1,Ag),Sn(t,i)}}function rb(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(yn(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Sn(t,e)}else{if(yn(t,i))return;Cg.set(i),a.uniformMatrix4fv(this.addr,!1,Cg),Sn(t,i)}}function sb(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function ab(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;a.uniform2iv(this.addr,e),Sn(t,e)}}function ob(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;a.uniform3iv(this.addr,e),Sn(t,e)}}function lb(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;a.uniform4iv(this.addr,e),Sn(t,e)}}function cb(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function ub(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;a.uniform2uiv(this.addr,e),Sn(t,e)}}function hb(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;a.uniform3uiv(this.addr,e),Sn(t,e)}}function fb(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;a.uniform4uiv(this.addr,e),Sn(t,e)}}function db(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s);let o;this.type===a.SAMPLER_2D_SHADOW?(fd.compareFunction=t.isReversedDepthBuffer()?Nd:Id,o=fd):o=Wx,t.setTexture2D(e||o,s)}function pb(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||jx,s)}function mb(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||qx,s)}function gb(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Xx,s)}function xb(a){switch(a){case 5126:return Q2;case 35664:return J2;case 35665:return eb;case 35666:return tb;case 35674:return nb;case 35675:return ib;case 35676:return rb;case 5124:case 35670:return sb;case 35667:case 35671:return ab;case 35668:case 35672:return ob;case 35669:case 35673:return lb;case 5125:return cb;case 36294:return ub;case 36295:return hb;case 36296:return fb;case 35678:case 36198:case 36298:case 36306:case 35682:return db;case 35679:case 36299:case 36307:return pb;case 35680:case 36300:case 36308:case 36293:return mb;case 36289:case 36303:case 36311:case 36292:return gb}}function vb(a,e){a.uniform1fv(this.addr,e)}function _b(a,e){const t=ja(e,this.size,2);a.uniform2fv(this.addr,t)}function yb(a,e){const t=ja(e,this.size,3);a.uniform3fv(this.addr,t)}function Sb(a,e){const t=ja(e,this.size,4);a.uniform4fv(this.addr,t)}function Mb(a,e){const t=ja(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function wb(a,e){const t=ja(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function bb(a,e){const t=ja(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function Eb(a,e){a.uniform1iv(this.addr,e)}function Tb(a,e){a.uniform2iv(this.addr,e)}function Cb(a,e){a.uniform3iv(this.addr,e)}function Ab(a,e){a.uniform4iv(this.addr,e)}function Rb(a,e){a.uniform1uiv(this.addr,e)}function Pb(a,e){a.uniform2uiv(this.addr,e)}function Lb(a,e){a.uniform3uiv(this.addr,e)}function Ib(a,e){a.uniform4uiv(this.addr,e)}function Nb(a,e,t){const i=this.cache,s=e.length,o=Kc(t,s);yn(i,o)||(a.uniform1iv(this.addr,o),Sn(i,o));let c;this.type===a.SAMPLER_2D_SHADOW?c=fd:c=Wx;for(let u=0;u!==s;++u)t.setTexture2D(e[u]||c,o[u])}function Ub(a,e,t){const i=this.cache,s=e.length,o=Kc(t,s);yn(i,o)||(a.uniform1iv(this.addr,o),Sn(i,o));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||jx,o[c])}function Fb(a,e,t){const i=this.cache,s=e.length,o=Kc(t,s);yn(i,o)||(a.uniform1iv(this.addr,o),Sn(i,o));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||qx,o[c])}function Db(a,e,t){const i=this.cache,s=e.length,o=Kc(t,s);yn(i,o)||(a.uniform1iv(this.addr,o),Sn(i,o));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||Xx,o[c])}function kb(a){switch(a){case 5126:return vb;case 35664:return _b;case 35665:return yb;case 35666:return Sb;case 35674:return Mb;case 35675:return wb;case 35676:return bb;case 5124:case 35670:return Eb;case 35667:case 35671:return Tb;case 35668:case 35672:return Cb;case 35669:case 35673:return Ab;case 5125:return Rb;case 36294:return Pb;case 36295:return Lb;case 36296:return Ib;case 35678:case 36198:case 36298:case 36306:case 35682:return Nb;case 35679:case 36299:case 36307:return Ub;case 35680:case 36300:case 36308:case 36293:return Fb;case 36289:case 36303:case 36311:case 36292:return Db}}class Ob{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=xb(t.type)}}class zb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kb(t.type)}}class Bb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let o=0,c=s.length;o!==c;++o){const u=s[o];u.setValue(e,t[u.id],i)}}}const ff=/(\w+)(\])?(\[|\.)?/g;function Pg(a,e){a.seq.push(e),a.map[e.id]=e}function Hb(a,e,t){const i=a.name,s=i.length;for(ff.lastIndex=0;;){const o=ff.exec(i),c=ff.lastIndex;let u=o[1];const h=o[2]==="]",d=o[3];if(h&&(u=u|0),d===void 0||d==="["&&c+2===s){Pg(t,d===void 0?new Ob(u,a,e):new zb(u,a,e));break}else{let g=t.map[u];g===void 0&&(g=new Bb(u),Pg(t,g)),t=g}}}class Lc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const u=e.getActiveUniform(t,c),h=e.getUniformLocation(t,u.name);Hb(u,h,this)}const s=[],o=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(c):o.push(c);s.length>0&&(this.seq=s.concat(o))}setValue(e,t,i,s){const o=this.map[t];o!==void 0&&o.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let o=0,c=t.length;o!==c;++o){const u=t[o],h=i[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,o=e.length;s!==o;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function Lg(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}const Vb=37297;let Gb=0;function Wb(a,e){const t=a.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=s;c<o;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const Ig=new St;function Xb(a){Rt._getMatrix(Ig,Rt.workingColorSpace,a);const e=`mat3( ${Ig.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(a)){case kc:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return ht("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Ng(a,e,t){const i=a.getShaderParameter(e,a.COMPILE_STATUS),o=(a.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+o+`

`+Wb(a.getShaderSource(e),u)}else return o}function jb(a,e){const t=Xb(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const qb={[dx]:"Linear",[px]:"Reinhard",[mx]:"Cineon",[gx]:"ACESFilmic",[vx]:"AgX",[_x]:"Neutral",[xx]:"Custom"};function Yb(a,e){const t=qb[e];return t===void 0?(ht("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const bc=new J;function $b(){Rt.getLuminanceCoefficients(bc);const a=bc.x.toFixed(4),e=bc.y.toFixed(4),t=bc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kb(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function Zb(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Qb(a,e){const t={},i=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=a.getActiveAttrib(e,s),c=o.name;let u=1;o.type===a.FLOAT_MAT2&&(u=2),o.type===a.FLOAT_MAT3&&(u=3),o.type===a.FLOAT_MAT4&&(u=4),t[c]={type:o.type,location:a.getAttribLocation(e,c),locationSize:u}}return t}function zo(a){return a!==""}function Ug(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Fg(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Jb=/^[ \t]*#include +<([\w\d./]+)>/gm;function dd(a){return a.replace(Jb,tE)}const eE=new Map;function tE(a,e){let t=wt[e];if(t===void 0){const i=eE.get(e);if(i!==void 0)t=wt[i],ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return dd(t)}const nE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dg(a){return a.replace(nE,iE)}function iE(a,e,t,i){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function kg(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const rE={[Tc]:"SHADOWMAP_TYPE_PCF",[Oo]:"SHADOWMAP_TYPE_VSM"};function sE(a){return rE[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const aE={[Bs]:"ENVMAP_TYPE_CUBE",[za]:"ENVMAP_TYPE_CUBE",[qc]:"ENVMAP_TYPE_CUBE_UV"};function oE(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":aE[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const lE={[za]:"ENVMAP_MODE_REFRACTION"};function cE(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":lE[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const uE={[bd]:"ENVMAP_BLENDING_MULTIPLY",[Ly]:"ENVMAP_BLENDING_MIX",[Iy]:"ENVMAP_BLENDING_ADD"};function hE(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":uE[a.combine]||"ENVMAP_BLENDING_NONE"}function fE(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function dE(a,e,t,i){const s=a.getContext(),o=t.defines;let c=t.vertexShader,u=t.fragmentShader;const h=sE(t),d=oE(t),p=cE(t),g=hE(t),m=fE(t),y=Kb(t),v=Zb(o),w=s.createProgram();let _,S,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(zo).join(`
`),_.length>0&&(_+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(zo).join(`
`),S.length>0&&(S+=`
`)):(_=[kg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),S=[kg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rr?"#define TONE_MAPPING":"",t.toneMapping!==rr?wt.tonemapping_pars_fragment:"",t.toneMapping!==rr?Yb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,jb("linearToOutputTexel",t.outputColorSpace),$b(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zo).join(`
`)),c=dd(c),c=Ug(c,t),c=Fg(c,t),u=dd(u),u=Ug(u,t),u=Fg(u,t),c=Dg(c),u=Dg(u),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,S=["#define varying in",t.glslVersion===k0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===k0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const C=b+_+c,E=b+S+u,I=Lg(s,s.VERTEX_SHADER,C),A=Lg(s,s.FRAGMENT_SHADER,E);s.attachShader(w,I),s.attachShader(w,A),t.index0AttributeName!==void 0?s.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(w,0,"position"),s.linkProgram(w);function N(D){if(a.debug.checkShaderErrors){const B=s.getProgramInfoLog(w)||"",$=s.getShaderInfoLog(I)||"",ee=s.getShaderInfoLog(A)||"",V=B.trim(),Z=$.trim(),K=ee.trim();let X=!0,re=!0;if(s.getProgramParameter(w,s.LINK_STATUS)===!1)if(X=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(s,w,I,A);else{const j=Ng(s,I,"vertex"),O=Ng(s,A,"fragment");Ut("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(w,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+j+`
`+O)}else V!==""?ht("WebGLProgram: Program Info Log:",V):(Z===""||K==="")&&(re=!1);re&&(D.diagnostics={runnable:X,programLog:V,vertexShader:{log:Z,prefix:_},fragmentShader:{log:K,prefix:S}})}s.deleteShader(I),s.deleteShader(A),T=new Lc(s,w),U=Qb(s,w)}let T;this.getUniforms=function(){return T===void 0&&N(this),T};let U;this.getAttributes=function(){return U===void 0&&N(this),U};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(w,Vb)),z},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gb++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=I,this.fragmentShader=A,this}let pE=0;class mE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new gE(e),t.set(e,i)),i}}class gE{constructor(e){this.id=pE++,this.code=e,this.usedTimes=0}}function xE(a){return a===Hs||a===Nc||a===Uc}function vE(a,e,t,i,s,o){const c=new Rx,u=new mE,h=new Set,d=[],p=new Map,g=i.logarithmicDepthBuffer;let m=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return h.add(T),T===0?"uv":`uv${T}`}function w(T,U,z,D,B,$){const ee=D.fog,V=B.geometry,Z=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?D.environment:null,K=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,X=e.get(T.envMap||Z,K),re=X&&X.mapping===qc?X.image.height:null,j=y[T.type];T.precision!==null&&(m=i.getMaxPrecision(T.precision),m!==T.precision&&ht("WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const O=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,G=O!==void 0?O.length:0;let pe=0;V.morphAttributes.position!==void 0&&(pe=1),V.morphAttributes.normal!==void 0&&(pe=2),V.morphAttributes.color!==void 0&&(pe=3);let Me,ye,te,ge;if(j){const pt=er[j];Me=pt.vertexShader,ye=pt.fragmentShader}else Me=T.vertexShader,ye=T.fragmentShader,u.update(T),te=u.getVertexShaderID(T),ge=u.getFragmentShaderID(T);const me=a.getRenderTarget(),Ae=a.state.buffers.depth.getReversed(),We=B.isInstancedMesh===!0,tt=B.isBatchedMesh===!0,Pt=!!T.map,ft=!!T.matcap,st=!!X,Mt=!!T.aoMap,dt=!!T.lightMap,kt=!!T.bumpMap,It=!!T.normalMap,nn=!!T.displacementMap,Q=!!T.emissiveMap,Ot=!!T.metalnessMap,vt=!!T.roughnessMap,Ft=T.anisotropy>0,Be=T.clearcoat>0,Wt=T.dispersion>0,k=T.iridescence>0,R=T.sheen>0,se=T.transmission>0,_e=Ft&&!!T.anisotropyMap,be=Be&&!!T.clearcoatMap,Pe=Be&&!!T.clearcoatNormalMap,ze=Be&&!!T.clearcoatRoughnessMap,de=k&&!!T.iridescenceMap,Se=k&&!!T.iridescenceThicknessMap,Le=R&&!!T.sheenColorMap,Xe=R&&!!T.sheenRoughnessMap,Ue=!!T.specularMap,Ie=!!T.specularColorMap,at=!!T.specularIntensityMap,mt=se&&!!T.transmissionMap,xt=se&&!!T.thicknessMap,Y=!!T.gradientMap,Ne=!!T.alphaMap,xe=T.alphaTest>0,Ve=!!T.alphaHash,ke=!!T.extensions;let ve=rr;T.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(ve=a.toneMapping);const Ze={shaderID:j,shaderType:T.type,shaderName:T.name,vertexShader:Me,fragmentShader:ye,defines:T.defines,customVertexShaderID:te,customFragmentShaderID:ge,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:tt,batchingColor:tt&&B._colorsTexture!==null,instancing:We,instancingColor:We&&B.instanceColor!==null,instancingMorph:We&&B.morphTexture!==null,outputColorSpace:me===null?a.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Pt,matcap:ft,envMap:st,envMapMode:st&&X.mapping,envMapCubeUVHeight:re,aoMap:Mt,lightMap:dt,bumpMap:kt,normalMap:It,displacementMap:nn,emissiveMap:Q,normalMapObjectSpace:It&&T.normalMapType===Fy,normalMapTangentSpace:It&&T.normalMapType===Fc,packedNormalMap:It&&T.normalMapType===Fc&&xE(T.normalMap.format),metalnessMap:Ot,roughnessMap:vt,anisotropy:Ft,anisotropyMap:_e,clearcoat:Be,clearcoatMap:be,clearcoatNormalMap:Pe,clearcoatRoughnessMap:ze,dispersion:Wt,iridescence:k,iridescenceMap:de,iridescenceThicknessMap:Se,sheen:R,sheenColorMap:Le,sheenRoughnessMap:Xe,specularMap:Ue,specularColorMap:Ie,specularIntensityMap:at,transmission:se,transmissionMap:mt,thicknessMap:xt,gradientMap:Y,opaque:T.transparent===!1&&T.blending===Ua&&T.alphaToCoverage===!1,alphaMap:Ne,alphaTest:xe,alphaHash:Ve,combine:T.combine,mapUv:Pt&&v(T.map.channel),aoMapUv:Mt&&v(T.aoMap.channel),lightMapUv:dt&&v(T.lightMap.channel),bumpMapUv:kt&&v(T.bumpMap.channel),normalMapUv:It&&v(T.normalMap.channel),displacementMapUv:nn&&v(T.displacementMap.channel),emissiveMapUv:Q&&v(T.emissiveMap.channel),metalnessMapUv:Ot&&v(T.metalnessMap.channel),roughnessMapUv:vt&&v(T.roughnessMap.channel),anisotropyMapUv:_e&&v(T.anisotropyMap.channel),clearcoatMapUv:be&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&v(T.sheenRoughnessMap.channel),specularMapUv:Ue&&v(T.specularMap.channel),specularColorMapUv:Ie&&v(T.specularColorMap.channel),specularIntensityMapUv:at&&v(T.specularIntensityMap.channel),transmissionMapUv:mt&&v(T.transmissionMap.channel),thicknessMapUv:xt&&v(T.thicknessMap.channel),alphaMapUv:Ne&&v(T.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(It||Ft),vertexNormals:!!V.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!V.attributes.uv&&(Pt||Ne),fog:!!ee,useFog:T.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||V.attributes.normal===void 0&&It===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ae,skinning:B.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:pe,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&z.length>0,shadowMapType:a.shadowMap.type,toneMapping:ve,decodeVideoTexture:Pt&&T.map.isVideoTexture===!0&&Rt.getTransfer(T.map.colorSpace)===Gt,decodeVideoTextureEmissive:Q&&T.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(T.emissiveMap.colorSpace)===Gt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Bi,flipSided:T.side===ti,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ke&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&T.extensions.multiDraw===!0||tt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ze.vertexUv1s=h.has(1),Ze.vertexUv2s=h.has(2),Ze.vertexUv3s=h.has(3),h.clear(),Ze}function _(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const z in T.defines)U.push(z),U.push(T.defines[z]);return T.isRawShaderMaterial===!1&&(S(U,T),b(U,T),U.push(a.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function S(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function b(T,U){c.disableAll(),U.instancing&&c.enable(0),U.instancingColor&&c.enable(1),U.instancingMorph&&c.enable(2),U.matcap&&c.enable(3),U.envMap&&c.enable(4),U.normalMapObjectSpace&&c.enable(5),U.normalMapTangentSpace&&c.enable(6),U.clearcoat&&c.enable(7),U.iridescence&&c.enable(8),U.alphaTest&&c.enable(9),U.vertexColors&&c.enable(10),U.vertexAlphas&&c.enable(11),U.vertexUv1s&&c.enable(12),U.vertexUv2s&&c.enable(13),U.vertexUv3s&&c.enable(14),U.vertexTangents&&c.enable(15),U.anisotropy&&c.enable(16),U.alphaHash&&c.enable(17),U.batching&&c.enable(18),U.dispersion&&c.enable(19),U.batchingColor&&c.enable(20),U.gradientMap&&c.enable(21),U.packedNormalMap&&c.enable(22),U.vertexNormals&&c.enable(23),T.push(c.mask),c.disableAll(),U.fog&&c.enable(0),U.useFog&&c.enable(1),U.flatShading&&c.enable(2),U.logarithmicDepthBuffer&&c.enable(3),U.reversedDepthBuffer&&c.enable(4),U.skinning&&c.enable(5),U.morphTargets&&c.enable(6),U.morphNormals&&c.enable(7),U.morphColors&&c.enable(8),U.premultipliedAlpha&&c.enable(9),U.shadowMapEnabled&&c.enable(10),U.doubleSided&&c.enable(11),U.flipSided&&c.enable(12),U.useDepthPacking&&c.enable(13),U.dithering&&c.enable(14),U.transmission&&c.enable(15),U.sheen&&c.enable(16),U.opaque&&c.enable(17),U.pointsUvs&&c.enable(18),U.decodeVideoTexture&&c.enable(19),U.decodeVideoTextureEmissive&&c.enable(20),U.alphaToCoverage&&c.enable(21),U.numLightProbeGrids>0&&c.enable(22),T.push(c.mask)}function C(T){const U=y[T.type];let z;if(U){const D=er[U];z=Hc.clone(D.uniforms)}else z=T.uniforms;return z}function E(T,U){let z=p.get(U);return z!==void 0?++z.usedTimes:(z=new dE(a,U,T,s),d.push(z),p.set(U,z)),z}function I(T){if(--T.usedTimes===0){const U=d.indexOf(T);d[U]=d[d.length-1],d.pop(),p.delete(T.cacheKey),T.destroy()}}function A(T){u.remove(T)}function N(){u.dispose()}return{getParameters:w,getProgramCacheKey:_,getUniforms:C,acquireProgram:E,releaseProgram:I,releaseShaderCache:A,programs:d,dispose:N}}function _E(){let a=new WeakMap;function e(c){return a.has(c)}function t(c){let u=a.get(c);return u===void 0&&(u={},a.set(c,u)),u}function i(c){a.delete(c)}function s(c,u,h){a.get(c)[u]=h}function o(){a=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:o}}function yE(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function Og(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function zg(){const a=[];let e=0;const t=[],i=[],s=[];function o(){e=0,t.length=0,i.length=0,s.length=0}function c(m){let y=0;return m.isInstancedMesh&&(y+=2),m.isSkinnedMesh&&(y+=1),y}function u(m,y,v,w,_,S){let b=a[e];return b===void 0?(b={id:m.id,object:m,geometry:y,material:v,materialVariant:c(m),groupOrder:w,renderOrder:m.renderOrder,z:_,group:S},a[e]=b):(b.id=m.id,b.object=m,b.geometry=y,b.material=v,b.materialVariant=c(m),b.groupOrder=w,b.renderOrder=m.renderOrder,b.z=_,b.group=S),e++,b}function h(m,y,v,w,_,S){const b=u(m,y,v,w,_,S);v.transmission>0?i.push(b):v.transparent===!0?s.push(b):t.push(b)}function d(m,y,v,w,_,S){const b=u(m,y,v,w,_,S);v.transmission>0?i.unshift(b):v.transparent===!0?s.unshift(b):t.unshift(b)}function p(m,y){t.length>1&&t.sort(m||yE),i.length>1&&i.sort(y||Og),s.length>1&&s.sort(y||Og)}function g(){for(let m=e,y=a.length;m<y;m++){const v=a[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:s,init:o,push:h,unshift:d,finish:g,sort:p}}function SE(){let a=new WeakMap;function e(i,s){const o=a.get(i);let c;return o===void 0?(c=new zg,a.set(i,[c])):s>=o.length?(c=new zg,o.push(c)):c=o[s],c}function t(){a=new WeakMap}return{get:e,dispose:t}}function ME(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new Ye};break;case"SpotLight":t={position:new J,direction:new J,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new J,halfWidth:new J,halfHeight:new J};break}return a[e.id]=t,t}}}function wE(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let bE=0;function EE(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function TE(a){const e=new ME,t=wE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new J);const s=new J,o=new qt,c=new qt;function u(d){let p=0,g=0,m=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let y=0,v=0,w=0,_=0,S=0,b=0,C=0,E=0,I=0,A=0,N=0;d.sort(EE);for(let U=0,z=d.length;U<z;U++){const D=d[U],B=D.color,$=D.intensity,ee=D.distance;let V=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Hs?V=D.shadow.map.texture:V=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)p+=B.r*$,g+=B.g*$,m+=B.b*$;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(D.sh.coefficients[Z],$);N++}else if(D.isDirectionalLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const K=D.shadow,X=t.get(D);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,i.directionalShadow[y]=X,i.directionalShadowMap[y]=V,i.directionalShadowMatrix[y]=D.shadow.matrix,b++}i.directional[y]=Z,y++}else if(D.isSpotLight){const Z=e.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(B).multiplyScalar($),Z.distance=ee,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,i.spot[w]=Z;const K=D.shadow;if(D.map&&(i.spotLightMap[I]=D.map,I++,K.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[w]=K.matrix,D.castShadow){const X=t.get(D);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,i.spotShadow[w]=X,i.spotShadowMap[w]=V,E++}w++}else if(D.isRectAreaLight){const Z=e.get(D);Z.color.copy(B).multiplyScalar($),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),i.rectArea[_]=Z,_++}else if(D.isPointLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const K=D.shadow,X=t.get(D);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,X.shadowCameraNear=K.camera.near,X.shadowCameraFar=K.camera.far,i.pointShadow[v]=X,i.pointShadowMap[v]=V,i.pointShadowMatrix[v]=D.shadow.matrix,C++}i.point[v]=Z,v++}else if(D.isHemisphereLight){const Z=e.get(D);Z.skyColor.copy(D.color).multiplyScalar($),Z.groundColor.copy(D.groundColor).multiplyScalar($),i.hemi[S]=Z,S++}}_>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ge.LTC_FLOAT_1,i.rectAreaLTC2=Ge.LTC_FLOAT_2):(i.rectAreaLTC1=Ge.LTC_HALF_1,i.rectAreaLTC2=Ge.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=g,i.ambient[2]=m;const T=i.hash;(T.directionalLength!==y||T.pointLength!==v||T.spotLength!==w||T.rectAreaLength!==_||T.hemiLength!==S||T.numDirectionalShadows!==b||T.numPointShadows!==C||T.numSpotShadows!==E||T.numSpotMaps!==I||T.numLightProbes!==N)&&(i.directional.length=y,i.spot.length=w,i.rectArea.length=_,i.point.length=v,i.hemi.length=S,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=E+I-A,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=N,T.directionalLength=y,T.pointLength=v,T.spotLength=w,T.rectAreaLength=_,T.hemiLength=S,T.numDirectionalShadows=b,T.numPointShadows=C,T.numSpotShadows=E,T.numSpotMaps=I,T.numLightProbes=N,i.version=bE++)}function h(d,p){let g=0,m=0,y=0,v=0,w=0;const _=p.matrixWorldInverse;for(let S=0,b=d.length;S<b;S++){const C=d[S];if(C.isDirectionalLight){const E=i.directional[g];E.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(_),g++}else if(C.isSpotLight){const E=i.spot[y];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(_),E.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(_),y++}else if(C.isRectAreaLight){const E=i.rectArea[v];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(_),c.identity(),o.copy(C.matrixWorld),o.premultiply(_),c.extractRotation(o),E.halfWidth.set(C.width*.5,0,0),E.halfHeight.set(0,C.height*.5,0),E.halfWidth.applyMatrix4(c),E.halfHeight.applyMatrix4(c),v++}else if(C.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(_),m++}else if(C.isHemisphereLight){const E=i.hemi[w];E.direction.setFromMatrixPosition(C.matrixWorld),E.direction.transformDirection(_),w++}}}return{setup:u,setupView:h,state:i}}function Bg(a){const e=new TE(a),t=[],i=[],s=[];function o(m){g.camera=m,t.length=0,i.length=0,s.length=0}function c(m){t.push(m)}function u(m){i.push(m)}function h(m){s.push(m)}function d(){e.setup(t)}function p(m){e.setupView(t,m)}const g={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:g,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:u,pushLightProbeGrid:h}}function CE(a){let e=new WeakMap;function t(s,o=0){const c=e.get(s);let u;return c===void 0?(u=new Bg(a),e.set(s,[u])):o>=c.length?(u=new Bg(a),c.push(u)):u=c[o],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const AE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,RE=`uniform sampler2D shadow_pass;
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
}`,PE=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],LE=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Hg=new qt,Fo=new J,df=new J;function IE(a,e,t){let i=new Od;const s=new ut,o=new ut,c=new sn,u=new OS,h=new zS,d={},p=t.maxTextureSize,g={[fs]:ti,[ti]:fs,[Bi]:Bi},m=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:AE,fragmentShader:RE}),y=m.clone();y.defines.HORIZONTAL_PASS=1;const v=new cn;v.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new un(v,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Tc;let S=this.type;this.render=function(A,N,T){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||A.length===0)return;this.type===fy&&(ht("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Tc);const U=a.getRenderTarget(),z=a.getActiveCubeFace(),D=a.getActiveMipmapLevel(),B=a.state;B.setBlending(ir),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const $=S!==this.type;$&&N.traverse(function(ee){ee.material&&(Array.isArray(ee.material)?ee.material.forEach(V=>V.needsUpdate=!0):ee.material.needsUpdate=!0)});for(let ee=0,V=A.length;ee<V;ee++){const Z=A[ee],K=Z.shadow;if(K===void 0){ht("WebGLShadowMap:",Z,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const X=K.getFrameExtents();s.multiply(X),o.copy(K.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(o.x=Math.floor(p/X.x),s.x=o.x*X.x,K.mapSize.x=o.x),s.y>p&&(o.y=Math.floor(p/X.y),s.y=o.y*X.y,K.mapSize.y=o.y));const re=a.state.buffers.depth.getReversed();if(K.camera._reversedDepth=re,K.map===null||$===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Oo){if(Z.isPointLight){ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new ni(s.x,s.y,{format:Hs,type:pi,minFilter:mn,magFilter:mn,generateMipmaps:!1}),K.map.texture.name=Z.name+".shadowMap",K.map.depthTexture=new Ba(s.x,s.y,Vi),K.map.depthTexture.name=Z.name+".shadowMapDepth",K.map.depthTexture.format=Tr,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=In,K.map.depthTexture.magFilter=In}else Z.isPointLight?(K.map=new Gx(s.x),K.map.depthTexture=new IS(s.x,sr)):(K.map=new ni(s.x,s.y),K.map.depthTexture=new Ba(s.x,s.y,sr)),K.map.depthTexture.name=Z.name+".shadowMap",K.map.depthTexture.format=Tr,this.type===Tc?(K.map.depthTexture.compareFunction=re?Nd:Id,K.map.depthTexture.minFilter=mn,K.map.depthTexture.magFilter=mn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=In,K.map.depthTexture.magFilter=In);K.camera.updateProjectionMatrix()}const j=K.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<j;O++){if(K.map.isWebGLCubeRenderTarget)a.setRenderTarget(K.map,O),a.clear();else{O===0&&(a.setRenderTarget(K.map),a.clear());const G=K.getViewport(O);c.set(o.x*G.x,o.y*G.y,o.x*G.z,o.y*G.w),B.viewport(c)}if(Z.isPointLight){const G=K.camera,pe=K.matrix,Me=Z.distance||G.far;Me!==G.far&&(G.far=Me,G.updateProjectionMatrix()),Fo.setFromMatrixPosition(Z.matrixWorld),G.position.copy(Fo),df.copy(G.position),df.add(PE[O]),G.up.copy(LE[O]),G.lookAt(df),G.updateMatrixWorld(),pe.makeTranslation(-Fo.x,-Fo.y,-Fo.z),Hg.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Hg,G.coordinateSystem,G.reversedDepth)}else K.updateMatrices(Z);i=K.getFrustum(),E(N,T,K.camera,Z,this.type)}K.isPointLightShadow!==!0&&this.type===Oo&&b(K,T),K.needsUpdate=!1}S=this.type,_.needsUpdate=!1,a.setRenderTarget(U,z,D)};function b(A,N){const T=e.update(w);m.defines.VSM_SAMPLES!==A.blurSamples&&(m.defines.VSM_SAMPLES=A.blurSamples,y.defines.VSM_SAMPLES=A.blurSamples,m.needsUpdate=!0,y.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ni(s.x,s.y,{format:Hs,type:pi})),m.uniforms.shadow_pass.value=A.map.depthTexture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,a.setRenderTarget(A.mapPass),a.clear(),a.renderBufferDirect(N,null,T,m,w,null),y.uniforms.shadow_pass.value=A.mapPass.texture,y.uniforms.resolution.value=A.mapSize,y.uniforms.radius.value=A.radius,a.setRenderTarget(A.map),a.clear(),a.renderBufferDirect(N,null,T,y,w,null)}function C(A,N,T,U){let z=null;const D=T.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)z=D;else if(z=T.isPointLight===!0?h:u,a.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const B=z.uuid,$=N.uuid;let ee=d[B];ee===void 0&&(ee={},d[B]=ee);let V=ee[$];V===void 0&&(V=z.clone(),ee[$]=V,N.addEventListener("dispose",I)),z=V}if(z.visible=N.visible,z.wireframe=N.wireframe,U===Oo?z.side=N.shadowSide!==null?N.shadowSide:N.side:z.side=N.shadowSide!==null?N.shadowSide:g[N.side],z.alphaMap=N.alphaMap,z.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,z.map=N.map,z.clipShadows=N.clipShadows,z.clippingPlanes=N.clippingPlanes,z.clipIntersection=N.clipIntersection,z.displacementMap=N.displacementMap,z.displacementScale=N.displacementScale,z.displacementBias=N.displacementBias,z.wireframeLinewidth=N.wireframeLinewidth,z.linewidth=N.linewidth,T.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const B=a.properties.get(z);B.light=T}return z}function E(A,N,T,U,z){if(A.visible===!1)return;if(A.layers.test(N.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&z===Oo)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,A.matrixWorld);const $=e.update(A),ee=A.material;if(Array.isArray(ee)){const V=$.groups;for(let Z=0,K=V.length;Z<K;Z++){const X=V[Z],re=ee[X.materialIndex];if(re&&re.visible){const j=C(A,re,U,z);A.onBeforeShadow(a,A,N,T,$,j,X),a.renderBufferDirect(T,null,$,j,A,X),A.onAfterShadow(a,A,N,T,$,j,X)}}}else if(ee.visible){const V=C(A,ee,U,z);A.onBeforeShadow(a,A,N,T,$,V,null),a.renderBufferDirect(T,null,$,V,A,null),A.onAfterShadow(a,A,N,T,$,V,null)}}const B=A.children;for(let $=0,ee=B.length;$<ee;$++)E(B[$],N,T,U,z)}function I(A){A.target.removeEventListener("dispose",I);for(const T in d){const U=d[T],z=A.target.uuid;z in U&&(U[z].dispose(),delete U[z])}}}function NE(a,e){function t(){let Y=!1;const Ne=new sn;let xe=null;const Ve=new sn(0,0,0,0);return{setMask:function(ke){xe!==ke&&!Y&&(a.colorMask(ke,ke,ke,ke),xe=ke)},setLocked:function(ke){Y=ke},setClear:function(ke,ve,Ze,pt,Bt){Bt===!0&&(ke*=pt,ve*=pt,Ze*=pt),Ne.set(ke,ve,Ze,pt),Ve.equals(Ne)===!1&&(a.clearColor(ke,ve,Ze,pt),Ve.copy(Ne))},reset:function(){Y=!1,xe=null,Ve.set(-1,0,0,0)}}}function i(){let Y=!1,Ne=!1,xe=null,Ve=null,ke=null;return{setReversed:function(ve){if(Ne!==ve){const Ze=e.get("EXT_clip_control");ve?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),Ne=ve;const pt=ke;ke=null,this.setClear(pt)}},getReversed:function(){return Ne},setTest:function(ve){ve?me(a.DEPTH_TEST):Ae(a.DEPTH_TEST)},setMask:function(ve){xe!==ve&&!Y&&(a.depthMask(ve),xe=ve)},setFunc:function(ve){if(Ne&&(ve=Xy[ve]),Ve!==ve){switch(ve){case bf:a.depthFunc(a.NEVER);break;case Ef:a.depthFunc(a.ALWAYS);break;case Tf:a.depthFunc(a.LESS);break;case Oa:a.depthFunc(a.LEQUAL);break;case Cf:a.depthFunc(a.EQUAL);break;case Af:a.depthFunc(a.GEQUAL);break;case Rf:a.depthFunc(a.GREATER);break;case Pf:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ve=ve}},setLocked:function(ve){Y=ve},setClear:function(ve){ke!==ve&&(ke=ve,Ne&&(ve=1-ve),a.clearDepth(ve))},reset:function(){Y=!1,xe=null,Ve=null,ke=null,Ne=!1}}}function s(){let Y=!1,Ne=null,xe=null,Ve=null,ke=null,ve=null,Ze=null,pt=null,Bt=null;return{setTest:function(bt){Y||(bt?me(a.STENCIL_TEST):Ae(a.STENCIL_TEST))},setMask:function(bt){Ne!==bt&&!Y&&(a.stencilMask(bt),Ne=bt)},setFunc:function(bt,An,Hn){(xe!==bt||Ve!==An||ke!==Hn)&&(a.stencilFunc(bt,An,Hn),xe=bt,Ve=An,ke=Hn)},setOp:function(bt,An,Hn){(ve!==bt||Ze!==An||pt!==Hn)&&(a.stencilOp(bt,An,Hn),ve=bt,Ze=An,pt=Hn)},setLocked:function(bt){Y=bt},setClear:function(bt){Bt!==bt&&(a.clearStencil(bt),Bt=bt)},reset:function(){Y=!1,Ne=null,xe=null,Ve=null,ke=null,ve=null,Ze=null,pt=null,Bt=null}}}const o=new t,c=new i,u=new s,h=new WeakMap,d=new WeakMap;let p={},g={},m={},y=new WeakMap,v=[],w=null,_=!1,S=null,b=null,C=null,E=null,I=null,A=null,N=null,T=new Ye(0,0,0),U=0,z=!1,D=null,B=null,$=null,ee=null,V=null;const Z=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,X=0;const re=a.getParameter(a.VERSION);re.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(re)[1]),K=X>=1):re.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),K=X>=2);let j=null,O={};const G=a.getParameter(a.SCISSOR_BOX),pe=a.getParameter(a.VIEWPORT),Me=new sn().fromArray(G),ye=new sn().fromArray(pe);function te(Y,Ne,xe,Ve){const ke=new Uint8Array(4),ve=a.createTexture();a.bindTexture(Y,ve),a.texParameteri(Y,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(Y,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Ze=0;Ze<xe;Ze++)Y===a.TEXTURE_3D||Y===a.TEXTURE_2D_ARRAY?a.texImage3D(Ne,0,a.RGBA,1,1,Ve,0,a.RGBA,a.UNSIGNED_BYTE,ke):a.texImage2D(Ne+Ze,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ke);return ve}const ge={};ge[a.TEXTURE_2D]=te(a.TEXTURE_2D,a.TEXTURE_2D,1),ge[a.TEXTURE_CUBE_MAP]=te(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[a.TEXTURE_2D_ARRAY]=te(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ge[a.TEXTURE_3D]=te(a.TEXTURE_3D,a.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),me(a.DEPTH_TEST),c.setFunc(Oa),kt(!1),It(I0),me(a.CULL_FACE),Mt(ir);function me(Y){p[Y]!==!0&&(a.enable(Y),p[Y]=!0)}function Ae(Y){p[Y]!==!1&&(a.disable(Y),p[Y]=!1)}function We(Y,Ne){return m[Y]!==Ne?(a.bindFramebuffer(Y,Ne),m[Y]=Ne,Y===a.DRAW_FRAMEBUFFER&&(m[a.FRAMEBUFFER]=Ne),Y===a.FRAMEBUFFER&&(m[a.DRAW_FRAMEBUFFER]=Ne),!0):!1}function tt(Y,Ne){let xe=v,Ve=!1;if(Y){xe=y.get(Ne),xe===void 0&&(xe=[],y.set(Ne,xe));const ke=Y.textures;if(xe.length!==ke.length||xe[0]!==a.COLOR_ATTACHMENT0){for(let ve=0,Ze=ke.length;ve<Ze;ve++)xe[ve]=a.COLOR_ATTACHMENT0+ve;xe.length=ke.length,Ve=!0}}else xe[0]!==a.BACK&&(xe[0]=a.BACK,Ve=!0);Ve&&a.drawBuffers(xe)}function Pt(Y){return w!==Y?(a.useProgram(Y),w=Y,!0):!1}const ft={[Ds]:a.FUNC_ADD,[py]:a.FUNC_SUBTRACT,[my]:a.FUNC_REVERSE_SUBTRACT};ft[gy]=a.MIN,ft[xy]=a.MAX;const st={[vy]:a.ZERO,[_y]:a.ONE,[yy]:a.SRC_COLOR,[Mf]:a.SRC_ALPHA,[Ty]:a.SRC_ALPHA_SATURATE,[by]:a.DST_COLOR,[My]:a.DST_ALPHA,[Sy]:a.ONE_MINUS_SRC_COLOR,[wf]:a.ONE_MINUS_SRC_ALPHA,[Ey]:a.ONE_MINUS_DST_COLOR,[wy]:a.ONE_MINUS_DST_ALPHA,[Cy]:a.CONSTANT_COLOR,[Ay]:a.ONE_MINUS_CONSTANT_COLOR,[Ry]:a.CONSTANT_ALPHA,[Py]:a.ONE_MINUS_CONSTANT_ALPHA};function Mt(Y,Ne,xe,Ve,ke,ve,Ze,pt,Bt,bt){if(Y===ir){_===!0&&(Ae(a.BLEND),_=!1);return}if(_===!1&&(me(a.BLEND),_=!0),Y!==dy){if(Y!==S||bt!==z){if((b!==Ds||I!==Ds)&&(a.blendEquation(a.FUNC_ADD),b=Ds,I=Ds),bt)switch(Y){case Ua:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case ka:a.blendFunc(a.ONE,a.ONE);break;case N0:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case U0:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Ut("WebGLState: Invalid blending: ",Y);break}else switch(Y){case Ua:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case ka:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case N0:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case U0:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",Y);break}C=null,E=null,A=null,N=null,T.set(0,0,0),U=0,S=Y,z=bt}return}ke=ke||Ne,ve=ve||xe,Ze=Ze||Ve,(Ne!==b||ke!==I)&&(a.blendEquationSeparate(ft[Ne],ft[ke]),b=Ne,I=ke),(xe!==C||Ve!==E||ve!==A||Ze!==N)&&(a.blendFuncSeparate(st[xe],st[Ve],st[ve],st[Ze]),C=xe,E=Ve,A=ve,N=Ze),(pt.equals(T)===!1||Bt!==U)&&(a.blendColor(pt.r,pt.g,pt.b,Bt),T.copy(pt),U=Bt),S=Y,z=!1}function dt(Y,Ne){Y.side===Bi?Ae(a.CULL_FACE):me(a.CULL_FACE);let xe=Y.side===ti;Ne&&(xe=!xe),kt(xe),Y.blending===Ua&&Y.transparent===!1?Mt(ir):Mt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),c.setFunc(Y.depthFunc),c.setTest(Y.depthTest),c.setMask(Y.depthWrite),o.setMask(Y.colorWrite);const Ve=Y.stencilWrite;u.setTest(Ve),Ve&&(u.setMask(Y.stencilWriteMask),u.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),u.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),Q(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?me(a.SAMPLE_ALPHA_TO_COVERAGE):Ae(a.SAMPLE_ALPHA_TO_COVERAGE)}function kt(Y){D!==Y&&(Y?a.frontFace(a.CW):a.frontFace(a.CCW),D=Y)}function It(Y){Y!==uy?(me(a.CULL_FACE),Y!==B&&(Y===I0?a.cullFace(a.BACK):Y===hy?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ae(a.CULL_FACE),B=Y}function nn(Y){Y!==$&&(K&&a.lineWidth(Y),$=Y)}function Q(Y,Ne,xe){Y?(me(a.POLYGON_OFFSET_FILL),(ee!==Ne||V!==xe)&&(ee=Ne,V=xe,c.getReversed()&&(Ne=-Ne),a.polygonOffset(Ne,xe))):Ae(a.POLYGON_OFFSET_FILL)}function Ot(Y){Y?me(a.SCISSOR_TEST):Ae(a.SCISSOR_TEST)}function vt(Y){Y===void 0&&(Y=a.TEXTURE0+Z-1),j!==Y&&(a.activeTexture(Y),j=Y)}function Ft(Y,Ne,xe){xe===void 0&&(j===null?xe=a.TEXTURE0+Z-1:xe=j);let Ve=O[xe];Ve===void 0&&(Ve={type:void 0,texture:void 0},O[xe]=Ve),(Ve.type!==Y||Ve.texture!==Ne)&&(j!==xe&&(a.activeTexture(xe),j=xe),a.bindTexture(Y,Ne||ge[Y]),Ve.type=Y,Ve.texture=Ne)}function Be(){const Y=O[j];Y!==void 0&&Y.type!==void 0&&(a.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Wt(){try{a.compressedTexImage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function k(){try{a.compressedTexImage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function R(){try{a.texSubImage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function se(){try{a.texSubImage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function _e(){try{a.compressedTexSubImage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function be(){try{a.compressedTexSubImage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function Pe(){try{a.texStorage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function ze(){try{a.texStorage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function de(){try{a.texImage2D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function Se(){try{a.texImage3D(...arguments)}catch(Y){Ut("WebGLState:",Y)}}function Le(Y){return g[Y]!==void 0?g[Y]:a.getParameter(Y)}function Xe(Y,Ne){g[Y]!==Ne&&(a.pixelStorei(Y,Ne),g[Y]=Ne)}function Ue(Y){Me.equals(Y)===!1&&(a.scissor(Y.x,Y.y,Y.z,Y.w),Me.copy(Y))}function Ie(Y){ye.equals(Y)===!1&&(a.viewport(Y.x,Y.y,Y.z,Y.w),ye.copy(Y))}function at(Y,Ne){let xe=d.get(Ne);xe===void 0&&(xe=new WeakMap,d.set(Ne,xe));let Ve=xe.get(Y);Ve===void 0&&(Ve=a.getUniformBlockIndex(Ne,Y.name),xe.set(Y,Ve))}function mt(Y,Ne){const Ve=d.get(Ne).get(Y);h.get(Ne)!==Ve&&(a.uniformBlockBinding(Ne,Ve,Y.__bindingPointIndex),h.set(Ne,Ve))}function xt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),c.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),p={},g={},j=null,O={},m={},y=new WeakMap,v=[],w=null,_=!1,S=null,b=null,C=null,E=null,I=null,A=null,N=null,T=new Ye(0,0,0),U=0,z=!1,D=null,B=null,$=null,ee=null,V=null,Me.set(0,0,a.canvas.width,a.canvas.height),ye.set(0,0,a.canvas.width,a.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:me,disable:Ae,bindFramebuffer:We,drawBuffers:tt,useProgram:Pt,setBlending:Mt,setMaterial:dt,setFlipSided:kt,setCullFace:It,setLineWidth:nn,setPolygonOffset:Q,setScissorTest:Ot,activeTexture:vt,bindTexture:Ft,unbindTexture:Be,compressedTexImage2D:Wt,compressedTexImage3D:k,texImage2D:de,texImage3D:Se,pixelStorei:Xe,getParameter:Le,updateUBOMapping:at,uniformBlockBinding:mt,texStorage2D:Pe,texStorage3D:ze,texSubImage2D:R,texSubImage3D:se,compressedTexSubImage2D:_e,compressedTexSubImage3D:be,scissor:Ue,viewport:Ie,reset:xt}}function UE(a,e,t,i,s,o,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ut,p=new WeakMap,g=new Set;let m;const y=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(k,R){return v?new OffscreenCanvas(k,R):Oc("canvas")}function _(k,R,se){let _e=1;const be=Wt(k);if((be.width>se||be.height>se)&&(_e=se/Math.max(be.width,be.height)),_e<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const Pe=Math.floor(_e*be.width),ze=Math.floor(_e*be.height);m===void 0&&(m=w(Pe,ze));const de=R?w(Pe,ze):m;return de.width=Pe,de.height=ze,de.getContext("2d").drawImage(k,0,0,Pe,ze),ht("WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+Pe+"x"+ze+")."),de}else return"data"in k&&ht("WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),k;return k}function S(k){return k.generateMipmaps}function b(k){a.generateMipmap(k)}function C(k){return k.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?a.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function E(k,R,se,_e,be,Pe=!1){if(k!==null){if(a[k]!==void 0)return a[k];ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let ze;_e&&(ze=e.get("EXT_texture_norm16"),ze||ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=R;if(R===a.RED&&(se===a.FLOAT&&(de=a.R32F),se===a.HALF_FLOAT&&(de=a.R16F),se===a.UNSIGNED_BYTE&&(de=a.R8),se===a.UNSIGNED_SHORT&&ze&&(de=ze.R16_EXT),se===a.SHORT&&ze&&(de=ze.R16_SNORM_EXT)),R===a.RED_INTEGER&&(se===a.UNSIGNED_BYTE&&(de=a.R8UI),se===a.UNSIGNED_SHORT&&(de=a.R16UI),se===a.UNSIGNED_INT&&(de=a.R32UI),se===a.BYTE&&(de=a.R8I),se===a.SHORT&&(de=a.R16I),se===a.INT&&(de=a.R32I)),R===a.RG&&(se===a.FLOAT&&(de=a.RG32F),se===a.HALF_FLOAT&&(de=a.RG16F),se===a.UNSIGNED_BYTE&&(de=a.RG8),se===a.UNSIGNED_SHORT&&ze&&(de=ze.RG16_EXT),se===a.SHORT&&ze&&(de=ze.RG16_SNORM_EXT)),R===a.RG_INTEGER&&(se===a.UNSIGNED_BYTE&&(de=a.RG8UI),se===a.UNSIGNED_SHORT&&(de=a.RG16UI),se===a.UNSIGNED_INT&&(de=a.RG32UI),se===a.BYTE&&(de=a.RG8I),se===a.SHORT&&(de=a.RG16I),se===a.INT&&(de=a.RG32I)),R===a.RGB_INTEGER&&(se===a.UNSIGNED_BYTE&&(de=a.RGB8UI),se===a.UNSIGNED_SHORT&&(de=a.RGB16UI),se===a.UNSIGNED_INT&&(de=a.RGB32UI),se===a.BYTE&&(de=a.RGB8I),se===a.SHORT&&(de=a.RGB16I),se===a.INT&&(de=a.RGB32I)),R===a.RGBA_INTEGER&&(se===a.UNSIGNED_BYTE&&(de=a.RGBA8UI),se===a.UNSIGNED_SHORT&&(de=a.RGBA16UI),se===a.UNSIGNED_INT&&(de=a.RGBA32UI),se===a.BYTE&&(de=a.RGBA8I),se===a.SHORT&&(de=a.RGBA16I),se===a.INT&&(de=a.RGBA32I)),R===a.RGB&&(se===a.UNSIGNED_SHORT&&ze&&(de=ze.RGB16_EXT),se===a.SHORT&&ze&&(de=ze.RGB16_SNORM_EXT),se===a.UNSIGNED_INT_5_9_9_9_REV&&(de=a.RGB9_E5),se===a.UNSIGNED_INT_10F_11F_11F_REV&&(de=a.R11F_G11F_B10F)),R===a.RGBA){const Se=Pe?kc:Rt.getTransfer(be);se===a.FLOAT&&(de=a.RGBA32F),se===a.HALF_FLOAT&&(de=a.RGBA16F),se===a.UNSIGNED_BYTE&&(de=Se===Gt?a.SRGB8_ALPHA8:a.RGBA8),se===a.UNSIGNED_SHORT&&ze&&(de=ze.RGBA16_EXT),se===a.SHORT&&ze&&(de=ze.RGBA16_SNORM_EXT),se===a.UNSIGNED_SHORT_4_4_4_4&&(de=a.RGBA4),se===a.UNSIGNED_SHORT_5_5_5_1&&(de=a.RGB5_A1)}return(de===a.R16F||de===a.R32F||de===a.RG16F||de===a.RG32F||de===a.RGBA16F||de===a.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function I(k,R){let se;return k?R===null||R===sr||R===jo?se=a.DEPTH24_STENCIL8:R===Vi?se=a.DEPTH32F_STENCIL8:R===Xo&&(se=a.DEPTH24_STENCIL8,ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===sr||R===jo?se=a.DEPTH_COMPONENT24:R===Vi?se=a.DEPTH_COMPONENT32F:R===Xo&&(se=a.DEPTH_COMPONENT16),se}function A(k,R){return S(k)===!0||k.isFramebufferTexture&&k.minFilter!==In&&k.minFilter!==mn?Math.log2(Math.max(R.width,R.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?R.mipmaps.length:1}function N(k){const R=k.target;R.removeEventListener("dispose",N),U(R),R.isVideoTexture&&p.delete(R),R.isHTMLTexture&&g.delete(R)}function T(k){const R=k.target;R.removeEventListener("dispose",T),D(R)}function U(k){const R=i.get(k);if(R.__webglInit===void 0)return;const se=k.source,_e=y.get(se);if(_e){const be=_e[R.__cacheKey];be.usedTimes--,be.usedTimes===0&&z(k),Object.keys(_e).length===0&&y.delete(se)}i.remove(k)}function z(k){const R=i.get(k);a.deleteTexture(R.__webglTexture);const se=k.source,_e=y.get(se);delete _e[R.__cacheKey],c.memory.textures--}function D(k){const R=i.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),i.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(R.__webglFramebuffer[_e]))for(let be=0;be<R.__webglFramebuffer[_e].length;be++)a.deleteFramebuffer(R.__webglFramebuffer[_e][be]);else a.deleteFramebuffer(R.__webglFramebuffer[_e]);R.__webglDepthbuffer&&a.deleteRenderbuffer(R.__webglDepthbuffer[_e])}else{if(Array.isArray(R.__webglFramebuffer))for(let _e=0;_e<R.__webglFramebuffer.length;_e++)a.deleteFramebuffer(R.__webglFramebuffer[_e]);else a.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&a.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&a.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let _e=0;_e<R.__webglColorRenderbuffer.length;_e++)R.__webglColorRenderbuffer[_e]&&a.deleteRenderbuffer(R.__webglColorRenderbuffer[_e]);R.__webglDepthRenderbuffer&&a.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const se=k.textures;for(let _e=0,be=se.length;_e<be;_e++){const Pe=i.get(se[_e]);Pe.__webglTexture&&(a.deleteTexture(Pe.__webglTexture),c.memory.textures--),i.remove(se[_e])}i.remove(k)}let B=0;function $(){B=0}function ee(){return B}function V(k){B=k}function Z(){const k=B;return k>=s.maxTextures&&ht("WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+s.maxTextures),B+=1,k}function K(k){const R=[];return R.push(k.wrapS),R.push(k.wrapT),R.push(k.wrapR||0),R.push(k.magFilter),R.push(k.minFilter),R.push(k.anisotropy),R.push(k.internalFormat),R.push(k.format),R.push(k.type),R.push(k.generateMipmaps),R.push(k.premultiplyAlpha),R.push(k.flipY),R.push(k.unpackAlignment),R.push(k.colorSpace),R.join()}function X(k,R){const se=i.get(k);if(k.isVideoTexture&&Ft(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&se.__version!==k.version){const _e=k.image;if(_e===null)ht("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)ht("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(se,k,R);return}}else k.isExternalTexture&&(se.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,se.__webglTexture,a.TEXTURE0+R)}function re(k,R){const se=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&se.__version!==k.version){Ae(se,k,R);return}else k.isExternalTexture&&(se.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,se.__webglTexture,a.TEXTURE0+R)}function j(k,R){const se=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&se.__version!==k.version){Ae(se,k,R);return}t.bindTexture(a.TEXTURE_3D,se.__webglTexture,a.TEXTURE0+R)}function O(k,R){const se=i.get(k);if(k.isCubeDepthTexture!==!0&&k.version>0&&se.__version!==k.version){We(se,k,R);return}t.bindTexture(a.TEXTURE_CUBE_MAP,se.__webglTexture,a.TEXTURE0+R)}const G={[Lf]:a.REPEAT,[wr]:a.CLAMP_TO_EDGE,[If]:a.MIRRORED_REPEAT},pe={[In]:a.NEAREST,[Ny]:a.NEAREST_MIPMAP_NEAREST,[Ql]:a.NEAREST_MIPMAP_LINEAR,[mn]:a.LINEAR,[Fh]:a.LINEAR_MIPMAP_NEAREST,[Os]:a.LINEAR_MIPMAP_LINEAR},Me={[Dy]:a.NEVER,[Hy]:a.ALWAYS,[ky]:a.LESS,[Id]:a.LEQUAL,[Oy]:a.EQUAL,[Nd]:a.GEQUAL,[zy]:a.GREATER,[By]:a.NOTEQUAL};function ye(k,R){if(R.type===Vi&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===mn||R.magFilter===Fh||R.magFilter===Ql||R.magFilter===Os||R.minFilter===mn||R.minFilter===Fh||R.minFilter===Ql||R.minFilter===Os)&&ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(k,a.TEXTURE_WRAP_S,G[R.wrapS]),a.texParameteri(k,a.TEXTURE_WRAP_T,G[R.wrapT]),(k===a.TEXTURE_3D||k===a.TEXTURE_2D_ARRAY)&&a.texParameteri(k,a.TEXTURE_WRAP_R,G[R.wrapR]),a.texParameteri(k,a.TEXTURE_MAG_FILTER,pe[R.magFilter]),a.texParameteri(k,a.TEXTURE_MIN_FILTER,pe[R.minFilter]),R.compareFunction&&(a.texParameteri(k,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(k,a.TEXTURE_COMPARE_FUNC,Me[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===In||R.minFilter!==Ql&&R.minFilter!==Os||R.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");a.texParameterf(k,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function te(k,R){let se=!1;k.__webglInit===void 0&&(k.__webglInit=!0,R.addEventListener("dispose",N));const _e=R.source;let be=y.get(_e);be===void 0&&(be={},y.set(_e,be));const Pe=K(R);if(Pe!==k.__cacheKey){be[Pe]===void 0&&(be[Pe]={texture:a.createTexture(),usedTimes:0},c.memory.textures++,se=!0),be[Pe].usedTimes++;const ze=be[k.__cacheKey];ze!==void 0&&(be[k.__cacheKey].usedTimes--,ze.usedTimes===0&&z(R)),k.__cacheKey=Pe,k.__webglTexture=be[Pe].texture}return se}function ge(k,R,se){return Math.floor(Math.floor(k/se)/R)}function me(k,R,se,_e){const Pe=k.updateRanges;if(Pe.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,R.width,R.height,se,_e,R.data);else{Pe.sort((Xe,Ue)=>Xe.start-Ue.start);let ze=0;for(let Xe=1;Xe<Pe.length;Xe++){const Ue=Pe[ze],Ie=Pe[Xe],at=Ue.start+Ue.count,mt=ge(Ie.start,R.width,4),xt=ge(Ue.start,R.width,4);Ie.start<=at+1&&mt===xt&&ge(Ie.start+Ie.count-1,R.width,4)===mt?Ue.count=Math.max(Ue.count,Ie.start+Ie.count-Ue.start):(++ze,Pe[ze]=Ie)}Pe.length=ze+1;const de=t.getParameter(a.UNPACK_ROW_LENGTH),Se=t.getParameter(a.UNPACK_SKIP_PIXELS),Le=t.getParameter(a.UNPACK_SKIP_ROWS);t.pixelStorei(a.UNPACK_ROW_LENGTH,R.width);for(let Xe=0,Ue=Pe.length;Xe<Ue;Xe++){const Ie=Pe[Xe],at=Math.floor(Ie.start/4),mt=Math.ceil(Ie.count/4),xt=at%R.width,Y=Math.floor(at/R.width),Ne=mt,xe=1;t.pixelStorei(a.UNPACK_SKIP_PIXELS,xt),t.pixelStorei(a.UNPACK_SKIP_ROWS,Y),t.texSubImage2D(a.TEXTURE_2D,0,xt,Y,Ne,xe,se,_e,R.data)}k.clearUpdateRanges(),t.pixelStorei(a.UNPACK_ROW_LENGTH,de),t.pixelStorei(a.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(a.UNPACK_SKIP_ROWS,Le)}}function Ae(k,R,se){let _e=a.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(_e=a.TEXTURE_2D_ARRAY),R.isData3DTexture&&(_e=a.TEXTURE_3D);const be=te(k,R),Pe=R.source;t.bindTexture(_e,k.__webglTexture,a.TEXTURE0+se);const ze=i.get(Pe);if(Pe.version!==ze.__version||be===!0){if(t.activeTexture(a.TEXTURE0+se),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){const xe=Rt.getPrimaries(Rt.workingColorSpace),Ve=R.colorSpace===ls?null:Rt.getPrimaries(R.colorSpace),ke=R.colorSpace===ls||xe===Ve?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(a.UNPACK_ALIGNMENT,R.unpackAlignment);let Se=_(R.image,!1,s.maxTextureSize);Se=Be(R,Se);const Le=o.convert(R.format,R.colorSpace),Xe=o.convert(R.type);let Ue=E(R.internalFormat,Le,Xe,R.normalized,R.colorSpace,R.isVideoTexture);ye(_e,R);let Ie;const at=R.mipmaps,mt=R.isVideoTexture!==!0,xt=ze.__version===void 0||be===!0,Y=Pe.dataReady,Ne=A(R,Se);if(R.isDepthTexture)Ue=I(R.format===zs,R.type),xt&&(mt?t.texStorage2D(a.TEXTURE_2D,1,Ue,Se.width,Se.height):t.texImage2D(a.TEXTURE_2D,0,Ue,Se.width,Se.height,0,Le,Xe,null));else if(R.isDataTexture)if(at.length>0){mt&&xt&&t.texStorage2D(a.TEXTURE_2D,Ne,Ue,at[0].width,at[0].height);for(let xe=0,Ve=at.length;xe<Ve;xe++)Ie=at[xe],mt?Y&&t.texSubImage2D(a.TEXTURE_2D,xe,0,0,Ie.width,Ie.height,Le,Xe,Ie.data):t.texImage2D(a.TEXTURE_2D,xe,Ue,Ie.width,Ie.height,0,Le,Xe,Ie.data);R.generateMipmaps=!1}else mt?(xt&&t.texStorage2D(a.TEXTURE_2D,Ne,Ue,Se.width,Se.height),Y&&me(R,Se,Le,Xe)):t.texImage2D(a.TEXTURE_2D,0,Ue,Se.width,Se.height,0,Le,Xe,Se.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){mt&&xt&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Ne,Ue,at[0].width,at[0].height,Se.depth);for(let xe=0,Ve=at.length;xe<Ve;xe++)if(Ie=at[xe],R.format!==di)if(Le!==null)if(mt){if(Y)if(R.layerUpdates.size>0){const ke=vg(Ie.width,Ie.height,R.format,R.type);for(const ve of R.layerUpdates){const Ze=Ie.data.subarray(ve*ke/Ie.data.BYTES_PER_ELEMENT,(ve+1)*ke/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,ve,Ie.width,Ie.height,1,Le,Ze)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,0,Ie.width,Ie.height,Se.depth,Le,Ie.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,xe,Ue,Ie.width,Ie.height,Se.depth,0,Ie.data,0,0);else ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else mt?Y&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,0,Ie.width,Ie.height,Se.depth,Le,Xe,Ie.data):t.texImage3D(a.TEXTURE_2D_ARRAY,xe,Ue,Ie.width,Ie.height,Se.depth,0,Le,Xe,Ie.data)}else{mt&&xt&&t.texStorage2D(a.TEXTURE_2D,Ne,Ue,at[0].width,at[0].height);for(let xe=0,Ve=at.length;xe<Ve;xe++)Ie=at[xe],R.format!==di?Le!==null?mt?Y&&t.compressedTexSubImage2D(a.TEXTURE_2D,xe,0,0,Ie.width,Ie.height,Le,Ie.data):t.compressedTexImage2D(a.TEXTURE_2D,xe,Ue,Ie.width,Ie.height,0,Ie.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):mt?Y&&t.texSubImage2D(a.TEXTURE_2D,xe,0,0,Ie.width,Ie.height,Le,Xe,Ie.data):t.texImage2D(a.TEXTURE_2D,xe,Ue,Ie.width,Ie.height,0,Le,Xe,Ie.data)}else if(R.isDataArrayTexture)if(mt){if(xt&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Ne,Ue,Se.width,Se.height,Se.depth),Y)if(R.layerUpdates.size>0){const xe=vg(Se.width,Se.height,R.format,R.type);for(const Ve of R.layerUpdates){const ke=Se.data.subarray(Ve*xe/Se.data.BYTES_PER_ELEMENT,(Ve+1)*xe/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Ve,Se.width,Se.height,1,Le,Xe,ke)}R.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Le,Xe,Se.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Ue,Se.width,Se.height,Se.depth,0,Le,Xe,Se.data);else if(R.isData3DTexture)mt?(xt&&t.texStorage3D(a.TEXTURE_3D,Ne,Ue,Se.width,Se.height,Se.depth),Y&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Le,Xe,Se.data)):t.texImage3D(a.TEXTURE_3D,0,Ue,Se.width,Se.height,Se.depth,0,Le,Xe,Se.data);else if(R.isFramebufferTexture){if(xt)if(mt)t.texStorage2D(a.TEXTURE_2D,Ne,Ue,Se.width,Se.height);else{let xe=Se.width,Ve=Se.height;for(let ke=0;ke<Ne;ke++)t.texImage2D(a.TEXTURE_2D,ke,Ue,xe,Ve,0,Le,Xe,null),xe>>=1,Ve>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in a){const xe=a.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),Se.parentNode!==xe){xe.appendChild(Se),g.add(R),xe.onpaint=pt=>{const Bt=pt.changedElements;for(const bt of g)Bt.includes(bt.image)&&(bt.needsUpdate=!0)},xe.requestPaint();return}const Ve=0,ke=a.RGBA,ve=a.RGBA,Ze=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,Ve,ke,ve,Ze,Se),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(at.length>0){if(mt&&xt){const xe=Wt(at[0]);t.texStorage2D(a.TEXTURE_2D,Ne,Ue,xe.width,xe.height)}for(let xe=0,Ve=at.length;xe<Ve;xe++)Ie=at[xe],mt?Y&&t.texSubImage2D(a.TEXTURE_2D,xe,0,0,Le,Xe,Ie):t.texImage2D(a.TEXTURE_2D,xe,Ue,Le,Xe,Ie);R.generateMipmaps=!1}else if(mt){if(xt){const xe=Wt(Se);t.texStorage2D(a.TEXTURE_2D,Ne,Ue,xe.width,xe.height)}Y&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,Le,Xe,Se)}else t.texImage2D(a.TEXTURE_2D,0,Ue,Le,Xe,Se);S(R)&&b(_e),ze.__version=Pe.version,R.onUpdate&&R.onUpdate(R)}k.__version=R.version}function We(k,R,se){if(R.image.length!==6)return;const _e=te(k,R),be=R.source;t.bindTexture(a.TEXTURE_CUBE_MAP,k.__webglTexture,a.TEXTURE0+se);const Pe=i.get(be);if(be.version!==Pe.__version||_e===!0){t.activeTexture(a.TEXTURE0+se);const ze=Rt.getPrimaries(Rt.workingColorSpace),de=R.colorSpace===ls?null:Rt.getPrimaries(R.colorSpace),Se=R.colorSpace===ls||ze===de?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(a.UNPACK_ALIGNMENT,R.unpackAlignment),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Le=R.isCompressedTexture||R.image[0].isCompressedTexture,Xe=R.image[0]&&R.image[0].isDataTexture,Ue=[];for(let ve=0;ve<6;ve++)!Le&&!Xe?Ue[ve]=_(R.image[ve],!0,s.maxCubemapSize):Ue[ve]=Xe?R.image[ve].image:R.image[ve],Ue[ve]=Be(R,Ue[ve]);const Ie=Ue[0],at=o.convert(R.format,R.colorSpace),mt=o.convert(R.type),xt=E(R.internalFormat,at,mt,R.normalized,R.colorSpace),Y=R.isVideoTexture!==!0,Ne=Pe.__version===void 0||_e===!0,xe=be.dataReady;let Ve=A(R,Ie);ye(a.TEXTURE_CUBE_MAP,R);let ke;if(Le){Y&&Ne&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Ve,xt,Ie.width,Ie.height);for(let ve=0;ve<6;ve++){ke=Ue[ve].mipmaps;for(let Ze=0;Ze<ke.length;Ze++){const pt=ke[Ze];R.format!==di?at!==null?Y?xe&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ze,0,0,pt.width,pt.height,at,pt.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ze,xt,pt.width,pt.height,0,pt.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?xe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ze,0,0,pt.width,pt.height,at,mt,pt.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ze,xt,pt.width,pt.height,0,at,mt,pt.data)}}}else{if(ke=R.mipmaps,Y&&Ne){ke.length>0&&Ve++;const ve=Wt(Ue[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,Ve,xt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Xe){Y?xe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ue[ve].width,Ue[ve].height,at,mt,Ue[ve].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,xt,Ue[ve].width,Ue[ve].height,0,at,mt,Ue[ve].data);for(let Ze=0;Ze<ke.length;Ze++){const Bt=ke[Ze].image[ve].image;Y?xe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ze+1,0,0,Bt.width,Bt.height,at,mt,Bt.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ze+1,xt,Bt.width,Bt.height,0,at,mt,Bt.data)}}else{Y?xe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,at,mt,Ue[ve]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,xt,at,mt,Ue[ve]);for(let Ze=0;Ze<ke.length;Ze++){const pt=ke[Ze];Y?xe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ze+1,0,0,at,mt,pt.image[ve]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ze+1,xt,at,mt,pt.image[ve])}}}S(R)&&b(a.TEXTURE_CUBE_MAP),Pe.__version=be.version,R.onUpdate&&R.onUpdate(R)}k.__version=R.version}function tt(k,R,se,_e,be,Pe){const ze=o.convert(se.format,se.colorSpace),de=o.convert(se.type),Se=E(se.internalFormat,ze,de,se.normalized,se.colorSpace),Le=i.get(R),Xe=i.get(se);if(Xe.__renderTarget=R,!Le.__hasExternalTextures){const Ue=Math.max(1,R.width>>Pe),Ie=Math.max(1,R.height>>Pe);be===a.TEXTURE_3D||be===a.TEXTURE_2D_ARRAY?t.texImage3D(be,Pe,Se,Ue,Ie,R.depth,0,ze,de,null):t.texImage2D(be,Pe,Se,Ue,Ie,0,ze,de,null)}t.bindFramebuffer(a.FRAMEBUFFER,k),vt(R)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,_e,be,Xe.__webglTexture,0,Ot(R)):(be===a.TEXTURE_2D||be>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,_e,be,Xe.__webglTexture,Pe),t.bindFramebuffer(a.FRAMEBUFFER,null)}function Pt(k,R,se){if(a.bindRenderbuffer(a.RENDERBUFFER,k),R.depthBuffer){const _e=R.depthTexture,be=_e&&_e.isDepthTexture?_e.type:null,Pe=I(R.stencilBuffer,be),ze=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;vt(R)?u.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ot(R),Pe,R.width,R.height):se?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ot(R),Pe,R.width,R.height):a.renderbufferStorage(a.RENDERBUFFER,Pe,R.width,R.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,ze,a.RENDERBUFFER,k)}else{const _e=R.textures;for(let be=0;be<_e.length;be++){const Pe=_e[be],ze=o.convert(Pe.format,Pe.colorSpace),de=o.convert(Pe.type),Se=E(Pe.internalFormat,ze,de,Pe.normalized,Pe.colorSpace);vt(R)?u.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ot(R),Se,R.width,R.height):se?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ot(R),Se,R.width,R.height):a.renderbufferStorage(a.RENDERBUFFER,Se,R.width,R.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ft(k,R,se){const _e=R.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,k),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const be=i.get(R.depthTexture);if(be.__renderTarget=R,(!be.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),_e){if(be.__webglInit===void 0&&(be.__webglInit=!0,R.depthTexture.addEventListener("dispose",N)),be.__webglTexture===void 0){be.__webglTexture=a.createTexture(),t.bindTexture(a.TEXTURE_CUBE_MAP,be.__webglTexture),ye(a.TEXTURE_CUBE_MAP,R.depthTexture);const Le=o.convert(R.depthTexture.format),Xe=o.convert(R.depthTexture.type);let Ue;R.depthTexture.format===Tr?Ue=a.DEPTH_COMPONENT24:R.depthTexture.format===zs&&(Ue=a.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Ue,R.width,R.height,0,Le,Xe,null)}}else X(R.depthTexture,0);const Pe=be.__webglTexture,ze=Ot(R),de=_e?a.TEXTURE_CUBE_MAP_POSITIVE_X+se:a.TEXTURE_2D,Se=R.depthTexture.format===zs?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(R.depthTexture.format===Tr)vt(R)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Se,de,Pe,0,ze):a.framebufferTexture2D(a.FRAMEBUFFER,Se,de,Pe,0);else if(R.depthTexture.format===zs)vt(R)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Se,de,Pe,0,ze):a.framebufferTexture2D(a.FRAMEBUFFER,Se,de,Pe,0);else throw new Error("Unknown depthTexture format")}function st(k){const R=i.get(k),se=k.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==k.depthTexture){const _e=k.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),_e){const be=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,_e.removeEventListener("dispose",be)};_e.addEventListener("dispose",be),R.__depthDisposeCallback=be}R.__boundDepthTexture=_e}if(k.depthTexture&&!R.__autoAllocateDepthBuffer)if(se)for(let _e=0;_e<6;_e++)ft(R.__webglFramebuffer[_e],k,_e);else{const _e=k.texture.mipmaps;_e&&_e.length>0?ft(R.__webglFramebuffer[0],k,0):ft(R.__webglFramebuffer,k,0)}else if(se){R.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(a.FRAMEBUFFER,R.__webglFramebuffer[_e]),R.__webglDepthbuffer[_e]===void 0)R.__webglDepthbuffer[_e]=a.createRenderbuffer(),Pt(R.__webglDepthbuffer[_e],k,!1);else{const be=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Pe=R.__webglDepthbuffer[_e];a.bindRenderbuffer(a.RENDERBUFFER,Pe),a.framebufferRenderbuffer(a.FRAMEBUFFER,be,a.RENDERBUFFER,Pe)}}else{const _e=k.texture.mipmaps;if(_e&&_e.length>0?t.bindFramebuffer(a.FRAMEBUFFER,R.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=a.createRenderbuffer(),Pt(R.__webglDepthbuffer,k,!1);else{const be=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Pe=R.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Pe),a.framebufferRenderbuffer(a.FRAMEBUFFER,be,a.RENDERBUFFER,Pe)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function Mt(k,R,se){const _e=i.get(k);R!==void 0&&tt(_e.__webglFramebuffer,k,k.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),se!==void 0&&st(k)}function dt(k){const R=k.texture,se=i.get(k),_e=i.get(R);k.addEventListener("dispose",T);const be=k.textures,Pe=k.isWebGLCubeRenderTarget===!0,ze=be.length>1;if(ze||(_e.__webglTexture===void 0&&(_e.__webglTexture=a.createTexture()),_e.__version=R.version,c.memory.textures++),Pe){se.__webglFramebuffer=[];for(let de=0;de<6;de++)if(R.mipmaps&&R.mipmaps.length>0){se.__webglFramebuffer[de]=[];for(let Se=0;Se<R.mipmaps.length;Se++)se.__webglFramebuffer[de][Se]=a.createFramebuffer()}else se.__webglFramebuffer[de]=a.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){se.__webglFramebuffer=[];for(let de=0;de<R.mipmaps.length;de++)se.__webglFramebuffer[de]=a.createFramebuffer()}else se.__webglFramebuffer=a.createFramebuffer();if(ze)for(let de=0,Se=be.length;de<Se;de++){const Le=i.get(be[de]);Le.__webglTexture===void 0&&(Le.__webglTexture=a.createTexture(),c.memory.textures++)}if(k.samples>0&&vt(k)===!1){se.__webglMultisampledFramebuffer=a.createFramebuffer(),se.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let de=0;de<be.length;de++){const Se=be[de];se.__webglColorRenderbuffer[de]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,se.__webglColorRenderbuffer[de]);const Le=o.convert(Se.format,Se.colorSpace),Xe=o.convert(Se.type),Ue=E(Se.internalFormat,Le,Xe,Se.normalized,Se.colorSpace,k.isXRRenderTarget===!0),Ie=Ot(k);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ie,Ue,k.width,k.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+de,a.RENDERBUFFER,se.__webglColorRenderbuffer[de])}a.bindRenderbuffer(a.RENDERBUFFER,null),k.depthBuffer&&(se.__webglDepthRenderbuffer=a.createRenderbuffer(),Pt(se.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Pe){t.bindTexture(a.TEXTURE_CUBE_MAP,_e.__webglTexture),ye(a.TEXTURE_CUBE_MAP,R);for(let de=0;de<6;de++)if(R.mipmaps&&R.mipmaps.length>0)for(let Se=0;Se<R.mipmaps.length;Se++)tt(se.__webglFramebuffer[de][Se],k,R,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+de,Se);else tt(se.__webglFramebuffer[de],k,R,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);S(R)&&b(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ze){for(let de=0,Se=be.length;de<Se;de++){const Le=be[de],Xe=i.get(Le);let Ue=a.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Ue=k.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(Ue,Xe.__webglTexture),ye(Ue,Le),tt(se.__webglFramebuffer,k,Le,a.COLOR_ATTACHMENT0+de,Ue,0),S(Le)&&b(Ue)}t.unbindTexture()}else{let de=a.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(de=k.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(de,_e.__webglTexture),ye(de,R),R.mipmaps&&R.mipmaps.length>0)for(let Se=0;Se<R.mipmaps.length;Se++)tt(se.__webglFramebuffer[Se],k,R,a.COLOR_ATTACHMENT0,de,Se);else tt(se.__webglFramebuffer,k,R,a.COLOR_ATTACHMENT0,de,0);S(R)&&b(de),t.unbindTexture()}k.depthBuffer&&st(k)}function kt(k){const R=k.textures;for(let se=0,_e=R.length;se<_e;se++){const be=R[se];if(S(be)){const Pe=C(k),ze=i.get(be).__webglTexture;t.bindTexture(Pe,ze),b(Pe),t.unbindTexture()}}}const It=[],nn=[];function Q(k){if(k.samples>0){if(vt(k)===!1){const R=k.textures,se=k.width,_e=k.height;let be=a.COLOR_BUFFER_BIT;const Pe=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ze=i.get(k),de=R.length>1;if(de)for(let Le=0;Le<R.length;Le++)t.bindFramebuffer(a.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Le,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,ze.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Le,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer);const Se=k.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ze.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Le=0;Le<R.length;Le++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(be|=a.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(be|=a.STENCIL_BUFFER_BIT)),de){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,ze.__webglColorRenderbuffer[Le]);const Xe=i.get(R[Le]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Xe,0)}a.blitFramebuffer(0,0,se,_e,0,0,se,_e,be,a.NEAREST),h===!0&&(It.length=0,nn.length=0,It.push(a.COLOR_ATTACHMENT0+Le),k.depthBuffer&&k.resolveDepthBuffer===!1&&(It.push(Pe),nn.push(Pe),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,nn)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,It))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),de)for(let Le=0;Le<R.length;Le++){t.bindFramebuffer(a.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Le,a.RENDERBUFFER,ze.__webglColorRenderbuffer[Le]);const Xe=i.get(R[Le]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,ze.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Le,a.TEXTURE_2D,Xe,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&h){const R=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[R])}}}function Ot(k){return Math.min(s.maxSamples,k.samples)}function vt(k){const R=i.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ft(k){const R=c.render.frame;p.get(k)!==R&&(p.set(k,R),k.update())}function Be(k,R){const se=k.colorSpace,_e=k.format,be=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||se!==Dc&&se!==ls&&(Rt.getTransfer(se)===Gt?(_e!==di||be!==fi)&&ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",se)),R}function Wt(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(d.width=k.naturalWidth||k.width,d.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(d.width=k.displayWidth,d.height=k.displayHeight):(d.width=k.width,d.height=k.height),d}this.allocateTextureUnit=Z,this.resetTextureUnits=$,this.getTextureUnits=ee,this.setTextureUnits=V,this.setTexture2D=X,this.setTexture2DArray=re,this.setTexture3D=j,this.setTextureCube=O,this.rebindTextures=Mt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=kt,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=vt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function FE(a,e){function t(i,s=ls){let o;const c=Rt.getTransfer(s);if(i===fi)return a.UNSIGNED_BYTE;if(i===Td)return a.UNSIGNED_SHORT_4_4_4_4;if(i===Cd)return a.UNSIGNED_SHORT_5_5_5_1;if(i===wx)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===bx)return a.UNSIGNED_INT_10F_11F_11F_REV;if(i===Sx)return a.BYTE;if(i===Mx)return a.SHORT;if(i===Xo)return a.UNSIGNED_SHORT;if(i===Ed)return a.INT;if(i===sr)return a.UNSIGNED_INT;if(i===Vi)return a.FLOAT;if(i===pi)return a.HALF_FLOAT;if(i===Ex)return a.ALPHA;if(i===Tx)return a.RGB;if(i===di)return a.RGBA;if(i===Tr)return a.DEPTH_COMPONENT;if(i===zs)return a.DEPTH_STENCIL;if(i===Ad)return a.RED;if(i===Rd)return a.RED_INTEGER;if(i===Hs)return a.RG;if(i===Pd)return a.RG_INTEGER;if(i===Ld)return a.RGBA_INTEGER;if(i===Cc||i===Ac||i===Rc||i===Pc)if(c===Gt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Cc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ac)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Rc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Cc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ac)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Rc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nf||i===Uf||i===Ff||i===Df)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Nf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Uf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ff)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Df)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kf||i===Of||i===zf||i===Bf||i===Hf||i===Nc||i===Vf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===kf||i===Of)return c===Gt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===zf)return c===Gt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===Bf)return o.COMPRESSED_R11_EAC;if(i===Hf)return o.COMPRESSED_SIGNED_R11_EAC;if(i===Nc)return o.COMPRESSED_RG11_EAC;if(i===Vf)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Gf||i===Wf||i===Xf||i===jf||i===qf||i===Yf||i===$f||i===Kf||i===Zf||i===Qf||i===Jf||i===ed||i===td||i===nd)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Gf)return c===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wf)return c===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xf)return c===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jf)return c===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qf)return c===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yf)return c===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$f)return c===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Kf)return c===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zf)return c===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qf)return c===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jf)return c===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ed)return c===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===td)return c===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nd)return c===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===id||i===rd||i===sd)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===id)return c===Gt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rd)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sd)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ad||i===od||i===Uc||i===ld)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===ad)return o.COMPRESSED_RED_RGTC1_EXT;if(i===od)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Uc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ld)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===jo?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:t}}const DE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kE=`
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

}`;class OE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Fx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ln({vertexShader:DE,fragmentShader:kE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new un(new Ar(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zE extends Gs{constructor(e,t){super();const i=this;let s=null,o=1,c=null,u="local-floor",h=1,d=null,p=null,g=null,m=null,y=null,v=null;const w=typeof XRWebGLBinding<"u",_=new OE,S={},b=t.getContextAttributes();let C=null,E=null;const I=[],A=[],N=new ut;let T=null;const U=new Tn;U.viewport=new sn;const z=new Tn;z.viewport=new sn;const D=[U,z],B=new qS;let $=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ge=I[te];return ge===void 0&&(ge=new Hh,I[te]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(te){let ge=I[te];return ge===void 0&&(ge=new Hh,I[te]=ge),ge.getGripSpace()},this.getHand=function(te){let ge=I[te];return ge===void 0&&(ge=new Hh,I[te]=ge),ge.getHandSpace()};function V(te){const ge=A.indexOf(te.inputSource);if(ge===-1)return;const me=I[ge];me!==void 0&&(me.update(te.inputSource,te.frame,d||c),me.dispatchEvent({type:te.type,data:te.inputSource}))}function Z(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",K);for(let te=0;te<I.length;te++){const ge=A[te];ge!==null&&(A[te]=null,I[te].disconnect(ge))}$=null,ee=null,_.reset();for(const te in S)delete S[te];e.setRenderTarget(C),y=null,m=null,g=null,s=null,E=null,ye.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){o=te,i.isPresenting===!0&&ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){u=te,i.isPresenting===!0&&ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(te){d=te},this.getBaseLayer=function(){return m!==null?m:y},this.getBinding=function(){return g===null&&w&&(g=new XRWebGLBinding(s,t)),g},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",K),b.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(N),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ae=null,We=null;b.depth&&(We=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=b.stencil?zs:Tr,Ae=b.stencil?jo:sr);const tt={colorFormat:t.RGBA8,depthFormat:We,scaleFactor:o};g=this.getBinding(),m=g.createProjectionLayer(tt),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),E=new ni(m.textureWidth,m.textureHeight,{format:di,type:fi,depthTexture:new Ba(m.textureWidth,m.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const me={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),E=new ni(y.framebufferWidth,y.framebufferHeight,{format:di,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(h),d=null,c=await s.requestReferenceSpace(u),ye.setContext(s),ye.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(te){for(let ge=0;ge<te.removed.length;ge++){const me=te.removed[ge],Ae=A.indexOf(me);Ae>=0&&(A[Ae]=null,I[Ae].disconnect(me))}for(let ge=0;ge<te.added.length;ge++){const me=te.added[ge];let Ae=A.indexOf(me);if(Ae===-1){for(let tt=0;tt<I.length;tt++)if(tt>=A.length){A.push(me),Ae=tt;break}else if(A[tt]===null){A[tt]=me,Ae=tt;break}if(Ae===-1)break}const We=I[Ae];We&&We.connect(me)}}const X=new J,re=new J;function j(te,ge,me){X.setFromMatrixPosition(ge.matrixWorld),re.setFromMatrixPosition(me.matrixWorld);const Ae=X.distanceTo(re),We=ge.projectionMatrix.elements,tt=me.projectionMatrix.elements,Pt=We[14]/(We[10]-1),ft=We[14]/(We[10]+1),st=(We[9]+1)/We[5],Mt=(We[9]-1)/We[5],dt=(We[8]-1)/We[0],kt=(tt[8]+1)/tt[0],It=Pt*dt,nn=Pt*kt,Q=Ae/(-dt+kt),Ot=Q*-dt;if(ge.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Ot),te.translateZ(Q),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),We[10]===-1)te.projectionMatrix.copy(ge.projectionMatrix),te.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const vt=Pt+Q,Ft=ft+Q,Be=It-Ot,Wt=nn+(Ae-Ot),k=st*ft/Ft*vt,R=Mt*ft/Ft*vt;te.projectionMatrix.makePerspective(Be,Wt,k,R,vt,Ft),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function O(te,ge){ge===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ge.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let ge=te.near,me=te.far;_.texture!==null&&(_.depthNear>0&&(ge=_.depthNear),_.depthFar>0&&(me=_.depthFar)),B.near=z.near=U.near=ge,B.far=z.far=U.far=me,($!==B.near||ee!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),$=B.near,ee=B.far),B.layers.mask=te.layers.mask|6,U.layers.mask=B.layers.mask&-5,z.layers.mask=B.layers.mask&-3;const Ae=te.parent,We=B.cameras;O(B,Ae);for(let tt=0;tt<We.length;tt++)O(We[tt],Ae);We.length===2?j(B,U,z):B.projectionMatrix.copy(U.projectionMatrix),G(te,B,Ae)};function G(te,ge,me){me===null?te.matrix.copy(ge.matrixWorld):(te.matrix.copy(me.matrixWorld),te.matrix.invert(),te.matrix.multiply(ge.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ge.projectionMatrix),te.projectionMatrixInverse.copy(ge.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Yo*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(m===null&&y===null))return h},this.setFoveation=function(te){h=te,m!==null&&(m.fixedFoveation=te),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=te)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(B)},this.getCameraTexture=function(te){return S[te]};let pe=null;function Me(te,ge){if(p=ge.getViewerPose(d||c),v=ge,p!==null){const me=p.views;y!==null&&(e.setRenderTargetFramebuffer(E,y.framebuffer),e.setRenderTarget(E));let Ae=!1;me.length!==B.cameras.length&&(B.cameras.length=0,Ae=!0);for(let ft=0;ft<me.length;ft++){const st=me[ft];let Mt=null;if(y!==null)Mt=y.getViewport(st);else{const kt=g.getViewSubImage(m,st);Mt=kt.viewport,ft===0&&(e.setRenderTargetTextures(E,kt.colorTexture,kt.depthStencilTexture),e.setRenderTarget(E))}let dt=D[ft];dt===void 0&&(dt=new Tn,dt.layers.enable(ft),dt.viewport=new sn,D[ft]=dt),dt.matrix.fromArray(st.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(st.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),ft===0&&(B.matrix.copy(dt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ae===!0&&B.cameras.push(dt)}const We=s.enabledFeatures;if(We&&We.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){g=i.getBinding();const ft=g.getDepthInformation(me[0]);ft&&ft.isValid&&ft.texture&&_.init(ft,s.renderState)}if(We&&We.includes("camera-access")&&w){e.state.unbindTexture(),g=i.getBinding();for(let ft=0;ft<me.length;ft++){const st=me[ft].camera;if(st){let Mt=S[st];Mt||(Mt=new Fx,S[st]=Mt);const dt=g.getCameraImage(st);Mt.sourceTexture=dt}}}}for(let me=0;me<I.length;me++){const Ae=A[me],We=I[me];Ae!==null&&We!==void 0&&We.update(Ae,ge,d||c)}pe&&pe(te,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),v=null}const ye=new Hx;ye.setAnimationLoop(Me),this.setAnimationLoop=function(te){pe=te},this.dispose=function(){}}}const BE=new qt,Yx=new St;Yx.set(-1,0,0,0,1,0,0,0,1);function HE(a,e){function t(_,S){_.matrixAutoUpdate===!0&&_.updateMatrix(),S.value.copy(_.matrix)}function i(_,S){S.color.getRGB(_.fogColor.value,Dx(a)),S.isFog?(_.fogNear.value=S.near,_.fogFar.value=S.far):S.isFogExp2&&(_.fogDensity.value=S.density)}function s(_,S,b,C,E){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?o(_,S):S.isMeshLambertMaterial?(o(_,S),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(o(_,S),g(_,S)):S.isMeshPhongMaterial?(o(_,S),p(_,S),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(o(_,S),m(_,S),S.isMeshPhysicalMaterial&&y(_,S,E)):S.isMeshMatcapMaterial?(o(_,S),v(_,S)):S.isMeshDepthMaterial?o(_,S):S.isMeshDistanceMaterial?(o(_,S),w(_,S)):S.isMeshNormalMaterial?o(_,S):S.isLineBasicMaterial?(c(_,S),S.isLineDashedMaterial&&u(_,S)):S.isPointsMaterial?h(_,S,b,C):S.isSpriteMaterial?d(_,S):S.isShadowMaterial?(_.color.value.copy(S.color),_.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function o(_,S){_.opacity.value=S.opacity,S.color&&_.diffuse.value.copy(S.color),S.emissive&&_.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(_.map.value=S.map,t(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.bumpMap&&(_.bumpMap.value=S.bumpMap,t(S.bumpMap,_.bumpMapTransform),_.bumpScale.value=S.bumpScale,S.side===ti&&(_.bumpScale.value*=-1)),S.normalMap&&(_.normalMap.value=S.normalMap,t(S.normalMap,_.normalMapTransform),_.normalScale.value.copy(S.normalScale),S.side===ti&&_.normalScale.value.negate()),S.displacementMap&&(_.displacementMap.value=S.displacementMap,t(S.displacementMap,_.displacementMapTransform),_.displacementScale.value=S.displacementScale,_.displacementBias.value=S.displacementBias),S.emissiveMap&&(_.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,_.emissiveMapTransform)),S.specularMap&&(_.specularMap.value=S.specularMap,t(S.specularMap,_.specularMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest);const b=e.get(S),C=b.envMap,E=b.envMapRotation;C&&(_.envMap.value=C,_.envMapRotation.value.setFromMatrix4(BE.makeRotationFromEuler(E)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(Yx),_.reflectivity.value=S.reflectivity,_.ior.value=S.ior,_.refractionRatio.value=S.refractionRatio),S.lightMap&&(_.lightMap.value=S.lightMap,_.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,_.lightMapTransform)),S.aoMap&&(_.aoMap.value=S.aoMap,_.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,_.aoMapTransform))}function c(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,S.map&&(_.map.value=S.map,t(S.map,_.mapTransform))}function u(_,S){_.dashSize.value=S.dashSize,_.totalSize.value=S.dashSize+S.gapSize,_.scale.value=S.scale}function h(_,S,b,C){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.size.value=S.size*b,_.scale.value=C*.5,S.map&&(_.map.value=S.map,t(S.map,_.uvTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function d(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.rotation.value=S.rotation,S.map&&(_.map.value=S.map,t(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function p(_,S){_.specular.value.copy(S.specular),_.shininess.value=Math.max(S.shininess,1e-4)}function g(_,S){S.gradientMap&&(_.gradientMap.value=S.gradientMap)}function m(_,S){_.metalness.value=S.metalness,S.metalnessMap&&(_.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,_.metalnessMapTransform)),_.roughness.value=S.roughness,S.roughnessMap&&(_.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,_.roughnessMapTransform)),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)}function y(_,S,b){_.ior.value=S.ior,S.sheen>0&&(_.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),_.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(_.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,_.sheenColorMapTransform)),S.sheenRoughnessMap&&(_.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,_.sheenRoughnessMapTransform))),S.clearcoat>0&&(_.clearcoat.value=S.clearcoat,_.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(_.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,_.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(_.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ti&&_.clearcoatNormalScale.value.negate())),S.dispersion>0&&(_.dispersion.value=S.dispersion),S.iridescence>0&&(_.iridescence.value=S.iridescence,_.iridescenceIOR.value=S.iridescenceIOR,_.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(_.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,_.iridescenceMapTransform)),S.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),S.transmission>0&&(_.transmission.value=S.transmission,_.transmissionSamplerMap.value=b.texture,_.transmissionSamplerSize.value.set(b.width,b.height),S.transmissionMap&&(_.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,_.transmissionMapTransform)),_.thickness.value=S.thickness,S.thicknessMap&&(_.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=S.attenuationDistance,_.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(_.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(_.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=S.specularIntensity,_.specularColor.value.copy(S.specularColor),S.specularColorMap&&(_.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,_.specularColorMapTransform)),S.specularIntensityMap&&(_.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,S){S.matcap&&(_.matcap.value=S.matcap)}function w(_,S){const b=e.get(S).light;_.referencePosition.value.setFromMatrixPosition(b.matrixWorld),_.nearDistance.value=b.shadow.camera.near,_.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function VE(a,e,t,i){let s={},o={},c=[];const u=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function h(b,C){const E=C.program;i.uniformBlockBinding(b,E)}function d(b,C){let E=s[b.id];E===void 0&&(v(b),E=p(b),s[b.id]=E,b.addEventListener("dispose",_));const I=C.program;i.updateUBOMapping(b,I);const A=e.render.frame;o[b.id]!==A&&(m(b),o[b.id]=A)}function p(b){const C=g();b.__bindingPointIndex=C;const E=a.createBuffer(),I=b.__size,A=b.usage;return a.bindBuffer(a.UNIFORM_BUFFER,E),a.bufferData(a.UNIFORM_BUFFER,I,A),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,C,E),E}function g(){for(let b=0;b<u;b++)if(c.indexOf(b)===-1)return c.push(b),b;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(b){const C=s[b.id],E=b.uniforms,I=b.__cache;a.bindBuffer(a.UNIFORM_BUFFER,C);for(let A=0,N=E.length;A<N;A++){const T=Array.isArray(E[A])?E[A]:[E[A]];for(let U=0,z=T.length;U<z;U++){const D=T[U];if(y(D,A,U,I)===!0){const B=D.__offset,$=Array.isArray(D.value)?D.value:[D.value];let ee=0;for(let V=0;V<$.length;V++){const Z=$[V],K=w(Z);typeof Z=="number"||typeof Z=="boolean"?(D.__data[0]=Z,a.bufferSubData(a.UNIFORM_BUFFER,B+ee,D.__data)):Z.isMatrix3?(D.__data[0]=Z.elements[0],D.__data[1]=Z.elements[1],D.__data[2]=Z.elements[2],D.__data[3]=0,D.__data[4]=Z.elements[3],D.__data[5]=Z.elements[4],D.__data[6]=Z.elements[5],D.__data[7]=0,D.__data[8]=Z.elements[6],D.__data[9]=Z.elements[7],D.__data[10]=Z.elements[8],D.__data[11]=0):ArrayBuffer.isView(Z)?D.__data.set(new Z.constructor(Z.buffer,Z.byteOffset,D.__data.length)):(Z.toArray(D.__data,ee),ee+=K.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,B,D.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function y(b,C,E,I){const A=b.value,N=C+"_"+E;if(I[N]===void 0)return typeof A=="number"||typeof A=="boolean"?I[N]=A:ArrayBuffer.isView(A)?I[N]=A.slice():I[N]=A.clone(),!0;{const T=I[N];if(typeof A=="number"||typeof A=="boolean"){if(T!==A)return I[N]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(T.equals(A)===!1)return T.copy(A),!0}}return!1}function v(b){const C=b.uniforms;let E=0;const I=16;for(let N=0,T=C.length;N<T;N++){const U=Array.isArray(C[N])?C[N]:[C[N]];for(let z=0,D=U.length;z<D;z++){const B=U[z],$=Array.isArray(B.value)?B.value:[B.value];for(let ee=0,V=$.length;ee<V;ee++){const Z=$[ee],K=w(Z),X=E%I,re=X%K.boundary,j=X+re;E+=re,j!==0&&I-j<K.storage&&(E+=I-j),B.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=E,E+=K.storage}}}const A=E%I;return A>0&&(E+=I-A),b.__size=E,b.__cache={},this}function w(b){const C={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(C.boundary=4,C.storage=4):b.isVector2?(C.boundary=8,C.storage=8):b.isVector3||b.isColor?(C.boundary=16,C.storage=12):b.isVector4?(C.boundary=16,C.storage=16):b.isMatrix3?(C.boundary=48,C.storage=48):b.isMatrix4?(C.boundary=64,C.storage=64):b.isTexture?ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(C.boundary=16,C.storage=b.byteLength):ht("WebGLRenderer: Unsupported uniform value type.",b),C}function _(b){const C=b.target;C.removeEventListener("dispose",_);const E=c.indexOf(C.__bindingPointIndex);c.splice(E,1),a.deleteBuffer(s[C.id]),delete s[C.id],delete o[C.id]}function S(){for(const b in s)a.deleteBuffer(s[b]);c=[],s={},o={}}return{bind:h,update:d,dispose:S}}const GE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ji=null;function WE(){return Ji===null&&(Ji=new kd(GE,16,16,Hs,pi),Ji.name="DFG_LUT",Ji.minFilter=mn,Ji.magFilter=mn,Ji.wrapS=wr,Ji.wrapT=wr,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}class ps{constructor(e={}){const{canvas:t=Gy(),context:i=null,depth:s=!0,stencil:o=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:m=!1,outputBufferType:y=fi}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=c;const w=y,_=new Set([Ld,Pd,Rd]),S=new Set([fi,sr,Xo,jo,Td,Cd]),b=new Uint32Array(4),C=new Int32Array(4),E=new J;let I=null,A=null;const N=[],T=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let D=!1,B=null;this._outputColorSpace=hi;let $=0,ee=0,V=null,Z=-1,K=null;const X=new sn,re=new sn;let j=null;const O=new Ye(0);let G=0,pe=t.width,Me=t.height,ye=1,te=null,ge=null;const me=new sn(0,0,pe,Me),Ae=new sn(0,0,pe,Me);let We=!1;const tt=new Od;let Pt=!1,ft=!1;const st=new qt,Mt=new J,dt=new sn,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function nn(){return V===null?ye:1}let Q=i;function Ot(L,ie){return t.getContext(L,ie)}try{const L={alpha:!0,depth:s,stencil:o,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wd}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Ze,!1),t.addEventListener("webglcontextcreationerror",pt,!1),Q===null){const ie="webgl2";if(Q=Ot(ie,L),Q===null)throw Ot(ie)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw Ut("WebGLRenderer: "+L.message),L}let vt,Ft,Be,Wt,k,R,se,_e,be,Pe,ze,de,Se,Le,Xe,Ue,Ie,at,mt,xt,Y,Ne,xe;function Ve(){vt=new W2(Q),vt.init(),Y=new FE(Q,vt),Ft=new D2(Q,vt,e,Y),Be=new NE(Q,vt),Ft.reversedDepthBuffer&&m&&Be.buffers.depth.setReversed(!0),Wt=new q2(Q),k=new _E,R=new UE(Q,vt,Be,k,Ft,Y,Wt),se=new G2(z),_e=new ZS(Q),Ne=new U2(Q,_e),be=new X2(Q,_e,Wt,Ne),Pe=new $2(Q,be,_e,Ne,Wt),at=new Y2(Q,Ft,R),Xe=new k2(k),ze=new vE(z,se,vt,Ft,Ne,Xe),de=new HE(z,k),Se=new SE,Le=new CE(vt),Ie=new N2(z,se,Be,Pe,v,h),Ue=new IE(z,Pe,Ft),xe=new VE(Q,Wt,Ft,Be),mt=new F2(Q,vt,Wt),xt=new j2(Q,vt,Wt),Wt.programs=ze.programs,z.capabilities=Ft,z.extensions=vt,z.properties=k,z.renderLists=Se,z.shadowMap=Ue,z.state=Be,z.info=Wt}Ve(),w!==fi&&(U=new Z2(w,t.width,t.height,s,o));const ke=new zE(z,Q);this.xr=ke,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const L=vt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=vt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(L){L!==void 0&&(ye=L,this.setSize(pe,Me,!1))},this.getSize=function(L){return L.set(pe,Me)},this.setSize=function(L,ie,he=!0){if(ke.isPresenting){ht("WebGLRenderer: Can't change size while VR device is presenting.");return}pe=L,Me=ie,t.width=Math.floor(L*ye),t.height=Math.floor(ie*ye),he===!0&&(t.style.width=L+"px",t.style.height=ie+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,L,ie)},this.getDrawingBufferSize=function(L){return L.set(pe*ye,Me*ye).floor()},this.setDrawingBufferSize=function(L,ie,he){pe=L,Me=ie,ye=he,t.width=Math.floor(L*he),t.height=Math.floor(ie*he),this.setViewport(0,0,L,ie)},this.setEffects=function(L){if(w===fi){Ut("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let ie=0;ie<L.length;ie++)if(L[ie].isOutputPass===!0){ht("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(X)},this.getViewport=function(L){return L.copy(me)},this.setViewport=function(L,ie,he,oe){L.isVector4?me.set(L.x,L.y,L.z,L.w):me.set(L,ie,he,oe),Be.viewport(X.copy(me).multiplyScalar(ye).round())},this.getScissor=function(L){return L.copy(Ae)},this.setScissor=function(L,ie,he,oe){L.isVector4?Ae.set(L.x,L.y,L.z,L.w):Ae.set(L,ie,he,oe),Be.scissor(re.copy(Ae).multiplyScalar(ye).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(L){Be.setScissorTest(We=L)},this.setOpaqueSort=function(L){te=L},this.setTransparentSort=function(L){ge=L},this.getClearColor=function(L){return L.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(L=!0,ie=!0,he=!0){let oe=0;if(L){let le=!1;if(V!==null){const He=V.texture.format;le=_.has(He)}if(le){const He=V.texture.type,$e=S.has(He),Oe=Ie.getClearColor(),Je=Ie.getClearAlpha(),rt=Oe.r,_t=Oe.g,yt=Oe.b;$e?(b[0]=rt,b[1]=_t,b[2]=yt,b[3]=Je,Q.clearBufferuiv(Q.COLOR,0,b)):(C[0]=rt,C[1]=_t,C[2]=yt,C[3]=Je,Q.clearBufferiv(Q.COLOR,0,C))}else oe|=Q.COLOR_BUFFER_BIT}ie&&(oe|=Q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(oe|=Q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&Q.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),B=L},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Ze,!1),t.removeEventListener("webglcontextcreationerror",pt,!1),Ie.dispose(),Se.dispose(),Le.dispose(),k.dispose(),se.dispose(),Pe.dispose(),Ne.dispose(),xe.dispose(),ze.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",ar),ke.removeEventListener("sessionend",Xi),Ci.stop()};function ve(L){L.preventDefault(),z0("WebGLRenderer: Context Lost."),D=!0}function Ze(){z0("WebGLRenderer: Context Restored."),D=!1;const L=Wt.autoReset,ie=Ue.enabled,he=Ue.autoUpdate,oe=Ue.needsUpdate,le=Ue.type;Ve(),Wt.autoReset=L,Ue.enabled=ie,Ue.autoUpdate=he,Ue.needsUpdate=oe,Ue.type=le}function pt(L){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Bt(L){const ie=L.target;ie.removeEventListener("dispose",Bt),bt(ie)}function bt(L){An(L),k.remove(L)}function An(L){const ie=k.get(L).programs;ie!==void 0&&(ie.forEach(function(he){ze.releaseProgram(he)}),L.isShaderMaterial&&ze.releaseShaderCache(L))}this.renderBufferDirect=function(L,ie,he,oe,le,He){ie===null&&(ie=kt);const $e=le.isMesh&&le.matrixWorld.determinant()<0,Oe=qs(L,ie,he,oe,le);Be.setMaterial(oe,$e);let Je=he.index,rt=1;if(oe.wireframe===!0){if(Je=be.getWireframeAttribute(he),Je===void 0)return;rt=2}const _t=he.drawRange,yt=he.attributes.position;let nt=_t.start*rt,Lt=(_t.start+_t.count)*rt;He!==null&&(nt=Math.max(nt,He.start*rt),Lt=Math.min(Lt,(He.start+He.count)*rt)),Je!==null?(nt=Math.max(nt,0),Lt=Math.min(Lt,Je.count)):yt!=null&&(nt=Math.max(nt,0),Lt=Math.min(Lt,yt.count));const Xt=Lt-nt;if(Xt<0||Xt===1/0)return;Ne.setup(le,oe,Oe,he,Je);let Qt,Ht=mt;if(Je!==null&&(Qt=_e.get(Je),Ht=xt,Ht.setIndex(Qt)),le.isMesh)oe.wireframe===!0?(Be.setLineWidth(oe.wireframeLinewidth*nn()),Ht.setMode(Q.LINES)):Ht.setMode(Q.TRIANGLES);else if(le.isLine){let hn=oe.linewidth;hn===void 0&&(hn=1),Be.setLineWidth(hn*nn()),le.isLineSegments?Ht.setMode(Q.LINES):le.isLineLoop?Ht.setMode(Q.LINE_LOOP):Ht.setMode(Q.LINE_STRIP)}else le.isPoints?Ht.setMode(Q.POINTS):le.isSprite&&Ht.setMode(Q.TRIANGLES);if(le.isBatchedMesh)if(vt.get("WEBGL_multi_draw"))Ht.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{const hn=le._multiDrawStarts,je=le._multiDrawCounts,Rn=le._multiDrawCount,Et=Je?_e.get(Je).bytesPerElement:1,jn=k.get(oe).currentProgram.getUniforms();for(let qn=0;qn<Rn;qn++)jn.setValue(Q,"_gl_DrawID",qn),Ht.render(hn[qn]/Et,je[qn])}else if(le.isInstancedMesh)Ht.renderInstances(nt,Xt,le.count);else if(he.isInstancedBufferGeometry){const hn=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,je=Math.min(he.instanceCount,hn);Ht.renderInstances(nt,Xt,je)}else Ht.render(nt,Xt)};function Hn(L,ie,he){L.transparent===!0&&L.side===Bi&&L.forceSinglePass===!1?(L.side=ti,L.needsUpdate=!0,Lr(L,ie,he),L.side=fs,L.needsUpdate=!0,Lr(L,ie,he),L.side=Bi):Lr(L,ie,he)}this.compile=function(L,ie,he=null){he===null&&(he=L),A=Le.get(he),A.init(ie),T.push(A),he.traverseVisible(function(le){le.isLight&&le.layers.test(ie.layers)&&(A.pushLight(le),le.castShadow&&A.pushShadow(le))}),L!==he&&L.traverseVisible(function(le){le.isLight&&le.layers.test(ie.layers)&&(A.pushLight(le),le.castShadow&&A.pushShadow(le))}),A.setupLights();const oe=new Set;return L.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;const He=le.material;if(He)if(Array.isArray(He))for(let $e=0;$e<He.length;$e++){const Oe=He[$e];Hn(Oe,he,le),oe.add(Oe)}else Hn(He,he,le),oe.add(He)}),A=T.pop(),oe},this.compileAsync=function(L,ie,he=null){const oe=this.compile(L,ie,he);return new Promise(le=>{function He(){if(oe.forEach(function($e){k.get($e).currentProgram.isReady()&&oe.delete($e)}),oe.size===0){le(L);return}setTimeout(He,10)}vt.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let Ei=null;function Ti(L){Ei&&Ei(L)}function ar(){Ci.stop()}function Xi(){Ci.start()}const Ci=new Hx;Ci.setAnimationLoop(Ti),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(L){Ei=L,ke.setAnimationLoop(L),L===null?Ci.stop():Ci.start()},ke.addEventListener("sessionstart",ar),ke.addEventListener("sessionend",Xi),this.render=function(L,ie){if(ie!==void 0&&ie.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;B!==null&&B.renderStart(L,ie);const he=ke.enabled===!0&&ke.isPresenting===!0,oe=U!==null&&(V===null||he)&&U.begin(z,V);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),ie.parent===null&&ie.matrixWorldAutoUpdate===!0&&ie.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(ie),ie=ke.getCamera()),L.isScene===!0&&L.onBeforeRender(z,L,ie,V),A=Le.get(L,T.length),A.init(ie),A.state.textureUnits=R.getTextureUnits(),T.push(A),st.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),tt.setFromProjectionMatrix(st,tr,ie.reversedDepth),ft=this.localClippingEnabled,Pt=Xe.init(this.clippingPlanes,ft),I=Se.get(L,N.length),I.init(),N.push(I),ke.enabled===!0&&ke.isPresenting===!0){const $e=z.xr.getDepthSensingMesh();$e!==null&&Rr($e,ie,-1/0,z.sortObjects)}Rr(L,ie,0,z.sortObjects),I.finish(),z.sortObjects===!0&&I.sort(te,ge),It=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,It&&Ie.addToRenderList(I,L),this.info.render.frame++,Pt===!0&&Xe.beginShadows();const le=A.state.shadowsArray;if(Ue.render(le,L,ie),Pt===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(oe&&U.hasRenderPass())===!1){const $e=I.opaque,Oe=I.transmissive;if(A.setupLights(),ie.isArrayCamera){const Je=ie.cameras;if(Oe.length>0)for(let rt=0,_t=Je.length;rt<_t;rt++){const yt=Je[rt];mi($e,Oe,L,yt)}It&&Ie.render(L);for(let rt=0,_t=Je.length;rt<_t;rt++){const yt=Je[rt];ms(I,L,yt,yt.viewport)}}else Oe.length>0&&mi($e,Oe,L,ie),It&&Ie.render(L),ms(I,L,ie)}V!==null&&ee===0&&(R.updateMultisampleRenderTarget(V),R.updateRenderTargetMipmap(V)),oe&&U.end(z),L.isScene===!0&&L.onAfterRender(z,L,ie),Ne.resetDefaultState(),Z=-1,K=null,T.pop(),T.length>0?(A=T[T.length-1],R.setTextureUnits(A.state.textureUnits),Pt===!0&&Xe.setGlobalState(z.clippingPlanes,A.state.camera)):A=null,N.pop(),N.length>0?I=N[N.length-1]:I=null,B!==null&&B.renderEnd()};function Rr(L,ie,he,oe){if(L.visible===!1)return;if(L.layers.test(ie.layers)){if(L.isGroup)he=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(ie);else if(L.isLightProbeGrid)A.pushLightProbeGrid(L);else if(L.isLight)A.pushLight(L),L.castShadow&&A.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||tt.intersectsSprite(L)){oe&&dt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(st);const $e=Pe.update(L),Oe=L.material;Oe.visible&&I.push(L,$e,Oe,he,dt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||tt.intersectsObject(L))){const $e=Pe.update(L),Oe=L.material;if(oe&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),dt.copy(L.boundingSphere.center)):($e.boundingSphere===null&&$e.computeBoundingSphere(),dt.copy($e.boundingSphere.center)),dt.applyMatrix4(L.matrixWorld).applyMatrix4(st)),Array.isArray(Oe)){const Je=$e.groups;for(let rt=0,_t=Je.length;rt<_t;rt++){const yt=Je[rt],nt=Oe[yt.materialIndex];nt&&nt.visible&&I.push(L,$e,nt,he,dt.z,yt)}}else Oe.visible&&I.push(L,$e,Oe,he,dt.z,null)}}const He=L.children;for(let $e=0,Oe=He.length;$e<Oe;$e++)Rr(He[$e],ie,he,oe)}function ms(L,ie,he,oe){const{opaque:le,transmissive:He,transparent:$e}=L;A.setupLightsView(he),Pt===!0&&Xe.setGlobalState(z.clippingPlanes,he),oe&&Be.viewport(X.copy(oe)),le.length>0&&ji(le,ie,he),He.length>0&&ji(He,ie,he),$e.length>0&&ji($e,ie,he),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function mi(L,ie,he,oe){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[oe.id]===void 0){const nt=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[oe.id]=new ni(1,1,{generateMipmaps:!0,type:nt?pi:fi,minFilter:Os,samples:Math.max(4,Ft.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const He=A.state.transmissionRenderTarget[oe.id],$e=oe.viewport||X;He.setSize($e.z*z.transmissionResolutionScale,$e.w*z.transmissionResolutionScale);const Oe=z.getRenderTarget(),Je=z.getActiveCubeFace(),rt=z.getActiveMipmapLevel();z.setRenderTarget(He),z.getClearColor(O),G=z.getClearAlpha(),G<1&&z.setClearColor(16777215,.5),z.clear(),It&&Ie.render(he);const _t=z.toneMapping;z.toneMapping=rr;const yt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),A.setupLightsView(oe),Pt===!0&&Xe.setGlobalState(z.clippingPlanes,oe),ji(L,he,oe),R.updateMultisampleRenderTarget(He),R.updateRenderTargetMipmap(He),vt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Lt=0,Xt=ie.length;Lt<Xt;Lt++){const Qt=ie[Lt],{object:Ht,geometry:hn,material:je,group:Rn}=Qt;if(je.side===Bi&&Ht.layers.test(oe.layers)){const Et=je.side;je.side=ti,je.needsUpdate=!0,Pr(Ht,he,oe,hn,je,Rn),je.side=Et,je.needsUpdate=!0,nt=!0}}nt===!0&&(R.updateMultisampleRenderTarget(He),R.updateRenderTargetMipmap(He))}z.setRenderTarget(Oe,Je,rt),z.setClearColor(O,G),yt!==void 0&&(oe.viewport=yt),z.toneMapping=_t}function ji(L,ie,he){const oe=ie.isScene===!0?ie.overrideMaterial:null;for(let le=0,He=L.length;le<He;le++){const $e=L[le],{object:Oe,geometry:Je,group:rt}=$e;let _t=$e.material;_t.allowOverride===!0&&oe!==null&&(_t=oe),Oe.layers.test(he.layers)&&Pr(Oe,ie,he,Je,_t,rt)}}function Pr(L,ie,he,oe,le,He){L.onBeforeRender(z,ie,he,oe,le,He),L.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),le.onBeforeRender(z,ie,he,oe,L,He),le.transparent===!0&&le.side===Bi&&le.forceSinglePass===!1?(le.side=ti,le.needsUpdate=!0,z.renderBufferDirect(he,ie,oe,le,L,He),le.side=fs,le.needsUpdate=!0,z.renderBufferDirect(he,ie,oe,le,L,He),le.side=Bi):z.renderBufferDirect(he,ie,oe,le,L,He),L.onAfterRender(z,ie,he,oe,le,He)}function Lr(L,ie,he){ie.isScene!==!0&&(ie=kt);const oe=k.get(L),le=A.state.lights,He=A.state.shadowsArray,$e=le.state.version,Oe=ze.getParameters(L,le.state,He,ie,he,A.state.lightProbeGridArray),Je=ze.getProgramCacheKey(Oe);let rt=oe.programs;oe.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?ie.environment:null,oe.fog=ie.fog;const _t=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;oe.envMap=se.get(L.envMap||oe.environment,_t),oe.envMapRotation=oe.environment!==null&&L.envMap===null?ie.environmentRotation:L.envMapRotation,rt===void 0&&(L.addEventListener("dispose",Bt),rt=new Map,oe.programs=rt);let yt=rt.get(Je);if(yt!==void 0){if(oe.currentProgram===yt&&oe.lightsStateVersion===$e)return gi(L,Oe),yt}else Oe.uniforms=ze.getUniforms(L),B!==null&&L.isNodeMaterial&&B.build(L,he,Oe),L.onBeforeCompile(Oe,z),yt=ze.acquireProgram(Oe,Je),rt.set(Je,yt),oe.uniforms=Oe.uniforms;const nt=oe.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(nt.clippingPlanes=Xe.uniform),gi(L,Oe),oe.needsLights=we(L),oe.lightsStateVersion=$e,oe.needsLights&&(nt.ambientLightColor.value=le.state.ambient,nt.lightProbe.value=le.state.probe,nt.directionalLights.value=le.state.directional,nt.directionalLightShadows.value=le.state.directionalShadow,nt.spotLights.value=le.state.spot,nt.spotLightShadows.value=le.state.spotShadow,nt.rectAreaLights.value=le.state.rectArea,nt.ltc_1.value=le.state.rectAreaLTC1,nt.ltc_2.value=le.state.rectAreaLTC2,nt.pointLights.value=le.state.point,nt.pointLightShadows.value=le.state.pointShadow,nt.hemisphereLights.value=le.state.hemi,nt.directionalShadowMatrix.value=le.state.directionalShadowMatrix,nt.spotLightMatrix.value=le.state.spotLightMatrix,nt.spotLightMap.value=le.state.spotLightMap,nt.pointShadowMatrix.value=le.state.pointShadowMatrix),oe.lightProbeGrid=A.state.lightProbeGridArray.length>0,oe.currentProgram=yt,oe.uniformsList=null,yt}function or(L){if(L.uniformsList===null){const ie=L.currentProgram.getUniforms();L.uniformsList=Lc.seqWithValue(ie.seq,L.uniforms)}return L.uniformsList}function gi(L,ie){const he=k.get(L);he.outputColorSpace=ie.outputColorSpace,he.batching=ie.batching,he.batchingColor=ie.batchingColor,he.instancing=ie.instancing,he.instancingColor=ie.instancingColor,he.instancingMorph=ie.instancingMorph,he.skinning=ie.skinning,he.morphTargets=ie.morphTargets,he.morphNormals=ie.morphNormals,he.morphColors=ie.morphColors,he.morphTargetsCount=ie.morphTargetsCount,he.numClippingPlanes=ie.numClippingPlanes,he.numIntersection=ie.numClipIntersection,he.vertexAlphas=ie.vertexAlphas,he.vertexTangents=ie.vertexTangents,he.toneMapping=ie.toneMapping}function js(L,ie){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;E.setFromMatrixPosition(ie.matrixWorld);for(let he=0,oe=L.length;he<oe;he++){const le=L[he];if(le.texture!==null&&le.boundingBox.containsPoint(E))return le}return null}function qs(L,ie,he,oe,le){ie.isScene!==!0&&(ie=kt),R.resetTextureUnits();const He=ie.fog,$e=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?ie.environment:null,Oe=V===null?z.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Rt.workingColorSpace,Je=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,rt=se.get(oe.envMap||$e,Je),_t=oe.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,yt=!!he.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),nt=!!he.morphAttributes.position,Lt=!!he.morphAttributes.normal,Xt=!!he.morphAttributes.color;let Qt=rr;oe.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Qt=z.toneMapping);const Ht=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,hn=Ht!==void 0?Ht.length:0,je=k.get(oe),Rn=A.state.lights;if(Pt===!0&&(ft===!0||L!==K)){const Vt=L===K&&oe.id===Z;Xe.setState(oe,L,Vt)}let Et=!1;oe.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Rn.state.version||je.outputColorSpace!==Oe||le.isBatchedMesh&&je.batching===!1||!le.isBatchedMesh&&je.batching===!0||le.isBatchedMesh&&je.batchingColor===!0&&le.colorTexture===null||le.isBatchedMesh&&je.batchingColor===!1&&le.colorTexture!==null||le.isInstancedMesh&&je.instancing===!1||!le.isInstancedMesh&&je.instancing===!0||le.isSkinnedMesh&&je.skinning===!1||!le.isSkinnedMesh&&je.skinning===!0||le.isInstancedMesh&&je.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&je.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&je.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&je.instancingMorph===!1&&le.morphTexture!==null||je.envMap!==rt||oe.fog===!0&&je.fog!==He||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Xe.numPlanes||je.numIntersection!==Xe.numIntersection)||je.vertexAlphas!==_t||je.vertexTangents!==yt||je.morphTargets!==nt||je.morphNormals!==Lt||je.morphColors!==Xt||je.toneMapping!==Qt||je.morphTargetsCount!==hn||!!je.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(Et=!0):(Et=!0,je.__version=oe.version);let jn=je.currentProgram;Et===!0&&(jn=Lr(oe,ie,le),B&&oe.isNodeMaterial&&B.onUpdateProgram(oe,jn,je));let qn=!1,Tt=!1,lr=!1;const zt=jn.getUniforms(),Yt=je.uniforms;if(Be.useProgram(jn.program)&&(qn=!0,Tt=!0,lr=!0),oe.id!==Z&&(Z=oe.id,Tt=!0),je.needsLights){const Vt=js(A.state.lightProbeGridArray,le);je.lightProbeGrid!==Vt&&(je.lightProbeGrid=Vt,Tt=!0)}if(qn||K!==L){Be.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),zt.setValue(Q,"projectionMatrix",L.projectionMatrix),zt.setValue(Q,"viewMatrix",L.matrixWorldInverse);const Ri=zt.map.cameraPosition;Ri!==void 0&&Ri.setValue(Q,Mt.setFromMatrixPosition(L.matrixWorld)),Ft.logarithmicDepthBuffer&&zt.setValue(Q,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&zt.setValue(Q,"isOrthographic",L.isOrthographicCamera===!0),K!==L&&(K=L,Tt=!0,lr=!0)}if(je.needsLights&&(Rn.state.directionalShadowMap.length>0&&zt.setValue(Q,"directionalShadowMap",Rn.state.directionalShadowMap,R),Rn.state.spotShadowMap.length>0&&zt.setValue(Q,"spotShadowMap",Rn.state.spotShadowMap,R),Rn.state.pointShadowMap.length>0&&zt.setValue(Q,"pointShadowMap",Rn.state.pointShadowMap,R)),le.isSkinnedMesh){zt.setOptional(Q,le,"bindMatrix"),zt.setOptional(Q,le,"bindMatrixInverse");const Vt=le.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),zt.setValue(Q,"boneTexture",Vt.boneTexture,R))}le.isBatchedMesh&&(zt.setOptional(Q,le,"batchingTexture"),zt.setValue(Q,"batchingTexture",le._matricesTexture,R),zt.setOptional(Q,le,"batchingIdTexture"),zt.setValue(Q,"batchingIdTexture",le._indirectTexture,R),zt.setOptional(Q,le,"batchingColorTexture"),le._colorsTexture!==null&&zt.setValue(Q,"batchingColorTexture",le._colorsTexture,R));const Ai=he.morphAttributes;if((Ai.position!==void 0||Ai.normal!==void 0||Ai.color!==void 0)&&at.update(le,he,jn),(Tt||je.receiveShadow!==le.receiveShadow)&&(je.receiveShadow=le.receiveShadow,zt.setValue(Q,"receiveShadow",le.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&ie.environment!==null&&(Yt.envMapIntensity.value=ie.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=WE()),Tt){if(zt.setValue(Q,"toneMappingExposure",z.toneMappingExposure),je.needsLights&&qa(Yt,lr),He&&oe.fog===!0&&de.refreshFogUniforms(Yt,He),de.refreshMaterialUniforms(Yt,oe,ye,Me,A.state.transmissionRenderTarget[L.id]),je.needsLights&&je.lightProbeGrid){const Vt=je.lightProbeGrid;Yt.probesSH.value=Vt.texture,Yt.probesMin.value.copy(Vt.boundingBox.min),Yt.probesMax.value.copy(Vt.boundingBox.max),Yt.probesResolution.value.copy(Vt.resolution)}Lc.upload(Q,or(je),Yt,R)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Lc.upload(Q,or(je),Yt,R),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&zt.setValue(Q,"center",le.center),zt.setValue(Q,"modelViewMatrix",le.modelViewMatrix),zt.setValue(Q,"normalMatrix",le.normalMatrix),zt.setValue(Q,"modelMatrix",le.matrixWorld),oe.uniformsGroups!==void 0){const Vt=oe.uniformsGroups;for(let Ri=0,qi=Vt.length;Ri<qi;Ri++){const gs=Vt[Ri];xe.update(gs,jn),xe.bind(gs,jn)}}return jn}function qa(L,ie){L.ambientLightColor.needsUpdate=ie,L.lightProbe.needsUpdate=ie,L.directionalLights.needsUpdate=ie,L.directionalLightShadows.needsUpdate=ie,L.pointLights.needsUpdate=ie,L.pointLightShadows.needsUpdate=ie,L.spotLights.needsUpdate=ie,L.spotLightShadows.needsUpdate=ie,L.rectAreaLights.needsUpdate=ie,L.hemisphereLights.needsUpdate=ie}function we(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(L,ie,he){const oe=k.get(L);oe.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),k.get(L.texture).__webglTexture=ie,k.get(L.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:he,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,ie){const he=k.get(L);he.__webglFramebuffer=ie,he.__useDefaultFramebuffer=ie===void 0};const Ee=Q.createFramebuffer();this.setRenderTarget=function(L,ie=0,he=0){V=L,$=ie,ee=he;let oe=null,le=!1,He=!1;if(L){const Oe=k.get(L);if(Oe.__useDefaultFramebuffer!==void 0){Be.bindFramebuffer(Q.FRAMEBUFFER,Oe.__webglFramebuffer),X.copy(L.viewport),re.copy(L.scissor),j=L.scissorTest,Be.viewport(X),Be.scissor(re),Be.setScissorTest(j),Z=-1;return}else if(Oe.__webglFramebuffer===void 0)R.setupRenderTarget(L);else if(Oe.__hasExternalTextures)R.rebindTextures(L,k.get(L.texture).__webglTexture,k.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const _t=L.depthTexture;if(Oe.__boundDepthTexture!==_t){if(_t!==null&&k.has(_t)&&(L.width!==_t.image.width||L.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(L)}}const Je=L.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(He=!0);const rt=k.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(rt[ie])?oe=rt[ie][he]:oe=rt[ie],le=!0):L.samples>0&&R.useMultisampledRTT(L)===!1?oe=k.get(L).__webglMultisampledFramebuffer:Array.isArray(rt)?oe=rt[he]:oe=rt,X.copy(L.viewport),re.copy(L.scissor),j=L.scissorTest}else X.copy(me).multiplyScalar(ye).floor(),re.copy(Ae).multiplyScalar(ye).floor(),j=We;if(he!==0&&(oe=Ee),Be.bindFramebuffer(Q.FRAMEBUFFER,oe)&&Be.drawBuffers(L,oe),Be.viewport(X),Be.scissor(re),Be.setScissorTest(j),le){const Oe=k.get(L.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe.__webglTexture,he)}else if(He){const Oe=ie;for(let Je=0;Je<L.textures.length;Je++){const rt=k.get(L.textures[Je]);Q.framebufferTextureLayer(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0+Je,rt.__webglTexture,he,Oe)}}else if(L!==null&&he!==0){const Oe=k.get(L.texture);Q.framebufferTexture2D(Q.FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Oe.__webglTexture,he)}Z=-1},this.readRenderTargetPixels=function(L,ie,he,oe,le,He,$e,Oe=0){if(!(L&&L.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=k.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&$e!==void 0&&(Je=Je[$e]),Je){Be.bindFramebuffer(Q.FRAMEBUFFER,Je);try{const rt=L.textures[Oe],_t=rt.format,yt=rt.type;if(L.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Oe),!Ft.textureFormatReadable(_t)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(yt)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ie>=0&&ie<=L.width-oe&&he>=0&&he<=L.height-le&&Q.readPixels(ie,he,oe,le,Y.convert(_t),Y.convert(yt),He)}finally{const rt=V!==null?k.get(V).__webglFramebuffer:null;Be.bindFramebuffer(Q.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(L,ie,he,oe,le,He,$e,Oe=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=k.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&$e!==void 0&&(Je=Je[$e]),Je)if(ie>=0&&ie<=L.width-oe&&he>=0&&he<=L.height-le){Be.bindFramebuffer(Q.FRAMEBUFFER,Je);const rt=L.textures[Oe],_t=rt.format,yt=rt.type;if(L.textures.length>1&&Q.readBuffer(Q.COLOR_ATTACHMENT0+Oe),!Ft.textureFormatReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=Q.createBuffer();Q.bindBuffer(Q.PIXEL_PACK_BUFFER,nt),Q.bufferData(Q.PIXEL_PACK_BUFFER,He.byteLength,Q.STREAM_READ),Q.readPixels(ie,he,oe,le,Y.convert(_t),Y.convert(yt),0);const Lt=V!==null?k.get(V).__webglFramebuffer:null;Be.bindFramebuffer(Q.FRAMEBUFFER,Lt);const Xt=Q.fenceSync(Q.SYNC_GPU_COMMANDS_COMPLETE,0);return Q.flush(),await Wy(Q,Xt,4),Q.bindBuffer(Q.PIXEL_PACK_BUFFER,nt),Q.getBufferSubData(Q.PIXEL_PACK_BUFFER,0,He),Q.deleteBuffer(nt),Q.deleteSync(Xt),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,ie=null,he=0){const oe=Math.pow(2,-he),le=Math.floor(L.image.width*oe),He=Math.floor(L.image.height*oe),$e=ie!==null?ie.x:0,Oe=ie!==null?ie.y:0;R.setTexture2D(L,0),Q.copyTexSubImage2D(Q.TEXTURE_2D,he,0,0,$e,Oe,le,He),Be.unbindTexture()};const Fe=Q.createFramebuffer(),ot=Q.createFramebuffer();this.copyTextureToTexture=function(L,ie,he=null,oe=null,le=0,He=0){let $e,Oe,Je,rt,_t,yt,nt,Lt,Xt;const Qt=L.isCompressedTexture?L.mipmaps[He]:L.image;if(he!==null)$e=he.max.x-he.min.x,Oe=he.max.y-he.min.y,Je=he.isBox3?he.max.z-he.min.z:1,rt=he.min.x,_t=he.min.y,yt=he.isBox3?he.min.z:0;else{const Yt=Math.pow(2,-le);$e=Math.floor(Qt.width*Yt),Oe=Math.floor(Qt.height*Yt),L.isDataArrayTexture?Je=Qt.depth:L.isData3DTexture?Je=Math.floor(Qt.depth*Yt):Je=1,rt=0,_t=0,yt=0}oe!==null?(nt=oe.x,Lt=oe.y,Xt=oe.z):(nt=0,Lt=0,Xt=0);const Ht=Y.convert(ie.format),hn=Y.convert(ie.type);let je;ie.isData3DTexture?(R.setTexture3D(ie,0),je=Q.TEXTURE_3D):ie.isDataArrayTexture||ie.isCompressedArrayTexture?(R.setTexture2DArray(ie,0),je=Q.TEXTURE_2D_ARRAY):(R.setTexture2D(ie,0),je=Q.TEXTURE_2D),Be.activeTexture(Q.TEXTURE0),Be.pixelStorei(Q.UNPACK_FLIP_Y_WEBGL,ie.flipY),Be.pixelStorei(Q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),Be.pixelStorei(Q.UNPACK_ALIGNMENT,ie.unpackAlignment);const Rn=Be.getParameter(Q.UNPACK_ROW_LENGTH),Et=Be.getParameter(Q.UNPACK_IMAGE_HEIGHT),jn=Be.getParameter(Q.UNPACK_SKIP_PIXELS),qn=Be.getParameter(Q.UNPACK_SKIP_ROWS),Tt=Be.getParameter(Q.UNPACK_SKIP_IMAGES);Be.pixelStorei(Q.UNPACK_ROW_LENGTH,Qt.width),Be.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Qt.height),Be.pixelStorei(Q.UNPACK_SKIP_PIXELS,rt),Be.pixelStorei(Q.UNPACK_SKIP_ROWS,_t),Be.pixelStorei(Q.UNPACK_SKIP_IMAGES,yt);const lr=L.isDataArrayTexture||L.isData3DTexture,zt=ie.isDataArrayTexture||ie.isData3DTexture;if(L.isDepthTexture){const Yt=k.get(L),Ai=k.get(ie),Vt=k.get(Yt.__renderTarget),Ri=k.get(Ai.__renderTarget);Be.bindFramebuffer(Q.READ_FRAMEBUFFER,Vt.__webglFramebuffer),Be.bindFramebuffer(Q.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let qi=0;qi<Je;qi++)lr&&(Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,k.get(L).__webglTexture,le,yt+qi),Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,k.get(ie).__webglTexture,He,Xt+qi)),Q.blitFramebuffer(rt,_t,$e,Oe,nt,Lt,$e,Oe,Q.DEPTH_BUFFER_BIT,Q.NEAREST);Be.bindFramebuffer(Q.READ_FRAMEBUFFER,null),Be.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else if(le!==0||L.isRenderTargetTexture||k.has(L)){const Yt=k.get(L),Ai=k.get(ie);Be.bindFramebuffer(Q.READ_FRAMEBUFFER,Fe),Be.bindFramebuffer(Q.DRAW_FRAMEBUFFER,ot);for(let Vt=0;Vt<Je;Vt++)lr?Q.framebufferTextureLayer(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Yt.__webglTexture,le,yt+Vt):Q.framebufferTexture2D(Q.READ_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Yt.__webglTexture,le),zt?Q.framebufferTextureLayer(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Ai.__webglTexture,He,Xt+Vt):Q.framebufferTexture2D(Q.DRAW_FRAMEBUFFER,Q.COLOR_ATTACHMENT0,Q.TEXTURE_2D,Ai.__webglTexture,He),le!==0?Q.blitFramebuffer(rt,_t,$e,Oe,nt,Lt,$e,Oe,Q.COLOR_BUFFER_BIT,Q.NEAREST):zt?Q.copyTexSubImage3D(je,He,nt,Lt,Xt+Vt,rt,_t,$e,Oe):Q.copyTexSubImage2D(je,He,nt,Lt,rt,_t,$e,Oe);Be.bindFramebuffer(Q.READ_FRAMEBUFFER,null),Be.bindFramebuffer(Q.DRAW_FRAMEBUFFER,null)}else zt?L.isDataTexture||L.isData3DTexture?Q.texSubImage3D(je,He,nt,Lt,Xt,$e,Oe,Je,Ht,hn,Qt.data):ie.isCompressedArrayTexture?Q.compressedTexSubImage3D(je,He,nt,Lt,Xt,$e,Oe,Je,Ht,Qt.data):Q.texSubImage3D(je,He,nt,Lt,Xt,$e,Oe,Je,Ht,hn,Qt):L.isDataTexture?Q.texSubImage2D(Q.TEXTURE_2D,He,nt,Lt,$e,Oe,Ht,hn,Qt.data):L.isCompressedTexture?Q.compressedTexSubImage2D(Q.TEXTURE_2D,He,nt,Lt,Qt.width,Qt.height,Ht,Qt.data):Q.texSubImage2D(Q.TEXTURE_2D,He,nt,Lt,$e,Oe,Ht,hn,Qt);Be.pixelStorei(Q.UNPACK_ROW_LENGTH,Rn),Be.pixelStorei(Q.UNPACK_IMAGE_HEIGHT,Et),Be.pixelStorei(Q.UNPACK_SKIP_PIXELS,jn),Be.pixelStorei(Q.UNPACK_SKIP_ROWS,qn),Be.pixelStorei(Q.UNPACK_SKIP_IMAGES,Tt),He===0&&ie.generateMipmaps&&Q.generateMipmap(je),Be.unbindTexture()},this.initRenderTarget=function(L){k.get(L).__webglFramebuffer===void 0&&R.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?R.setTextureCube(L,0):L.isData3DTexture?R.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?R.setTexture2DArray(L,0):R.setTexture2D(L,0),Be.unbindTexture()},this.resetState=function(){$=0,ee=0,V=null,Be.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}class XE{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"threeCanvas");F(this,"scene");F(this,"camera");F(this,"renderer");F(this,"videoTexture",null);F(this,"videoElement",null);F(this,"plane",null);F(this,"time",0);F(this,"uniforms");F(this,"targetAmplitude",.3);F(this,"targetFrequency",100);F(this,"currentAmplitude",.3);F(this,"currentFrequency",100);F(this,"clapVibration",0);this.canvas=e,this.ctx=t,this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.scene=new ds,this.camera=new Xa(-1,1,1,-1,0,1),this.renderer=new ps({canvas:this.threeCanvas,alpha:!1,antialias:!1}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const i=new kd(new Uint8Array([0,0,0,255]),1,1,di);i.needsUpdate=!0,this.uniforms={uTime:{value:0},uTexture:{value:i},uAmplitude:{value:.3},uFrequency:{value:100},uColorIntensity:{value:.8},uColor1:{value:new Ye("#6366f1")},uColor2:{value:new Ye("#8b5cf6")},uColor3:{value:new Ye("#d946ef")},uColor4:{value:new Ye("#ec4899")},uColor5:{value:new Ye("#f43f5e")}};const s=new ln({uniforms:this.uniforms,vertexShader:this.getVertexShader(),fragmentShader:this.getFragmentShader()}),o=new Ar(2,2);this.plane=new un(o,s),this.scene.add(this.plane),console.log("🎥 DistortedCameraRenderer initialized")}setVideoElement(e){if(!e){console.warn("DistortedCameraRenderer: No video element provided");return}this.videoElement===e&&this.videoTexture||(this.videoElement=e,this.videoTexture&&this.videoTexture.dispose(),this.videoTexture=new LS(e),this.videoTexture.minFilter=mn,this.videoTexture.magFilter=mn,this.videoTexture.format=di,this.uniforms.uTexture.value=this.videoTexture,console.log("✅ DistortedCameraRenderer: Video texture created"))}getVertexShader(){return`
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
    `}render(e,t,i){if(!this.plane)return;(this.canvas.width!==this.threeCanvas.width||this.canvas.height!==this.threeCanvas.height)&&(this.threeCanvas.width=this.canvas.width,this.threeCanvas.height=this.canvas.height,this.renderer.setSize(this.canvas.width,this.canvas.height)),this.time+=.016*ii(),this.uniforms.uTime.value=this.time,t&&t.length>0&&(this.uniforms.uColor1.value.set(t[0]),this.uniforms.uColor2.value.set(t[1]||t[0]),this.uniforms.uColor3.value.set(t[2]||t[0]),this.uniforms.uColor4.value.set(t[3]||t[0]),this.uniforms.uColor5.value.set(t[4]||t[0]));const s=e.left,o=e.right;if(s||o)if(e.clapping)this.targetAmplitude=2,this.targetFrequency=300,this.clapVibration=1;else{const u=s||o;if(u){const d=50+Math.max(0,Math.min(1,u.position.x))*350,g=Math.max(0,Math.min(1,1-u.position.y))*1.5,m=u.fingerCount||0;u.gesture==="pinch"||m<=1?(this.targetAmplitude=g*.2,this.targetFrequency=d*.5):(this.targetAmplitude=g,this.targetFrequency=d)}}else this.targetAmplitude=.5,this.targetFrequency=150;this.currentAmplitude+=(this.targetAmplitude-this.currentAmplitude)*.1,this.currentFrequency+=(this.targetFrequency-this.currentFrequency)*.1,this.clapVibration*=.95;const c=this.currentAmplitude+this.clapVibration*Math.sin(this.time*50)*.5;this.uniforms.uAmplitude.value=c,this.uniforms.uFrequency.value=this.currentFrequency,this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){this.videoTexture&&this.videoTexture.dispose(),this.plane&&(this.plane.geometry.dispose(),this.plane.material instanceof Gi&&this.plane.material.dispose()),this.renderer.dispose(),this.renderer.forceContextLoss(),console.log("🎥 DistortedCameraRenderer destroyed")}}class jE{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"streams",[]);F(this,"vanishingPoint",{x:0,y:0});F(this,"targetVanishingPoint",{x:0,y:0});F(this,"vanishingPointRight",{x:0,y:0});F(this,"targetVanishingPointRight",{x:0,y:0});F(this,"scanLineOffset",0);F(this,"clapAccumulation",0);F(this,"shakeIntensity",0);F(this,"time",0);F(this,"lastFingerCount",5);this.canvas=e,this.ctx=t,this.vanishingPoint.x=e.width*.3,this.vanishingPoint.y=e.height/2,this.targetVanishingPoint.x=this.vanishingPoint.x,this.targetVanishingPoint.y=this.vanishingPoint.y,this.vanishingPointRight.x=e.width*.7,this.vanishingPointRight.y=e.height/2,this.targetVanishingPointRight.x=this.vanishingPointRight.x,this.targetVanishingPointRight.y=this.vanishingPointRight.y;for(let i=0;i<6;i++)this.streams.push({angle:i/6*Math.PI*2,speed:1,packets:[],branchLevel:0})}render(e,t){const{width:i,height:s}=this.canvas;this.time+=.016*ii();const o=e.left,c=e.right,u=e.clapping||!1,h=e.clapIntensity||0;let d=1,p=1,g=5;o&&c?g=Math.floor(((o.fingerCount||5)+(c.fingerCount||5))/2):(o||c)&&(g=(o||c).fingerCount||5),this.lastFingerCount=g,g===1?(d=.003,p=.3):g===2?(d=.5,p=.7):(d=2,p=2.5),u?(this.clapAccumulation=Math.min(10,this.clapAccumulation+h*2),this.shakeIntensity=this.clapAccumulation*3,this.clapAccumulation>2&&Math.random()<.3&&this.spawnFractalBranch()):(this.clapAccumulation*=.98,this.shakeIntensity*=.9),o?(this.targetVanishingPoint.x=o.position.x*i,this.targetVanishingPoint.y=o.position.y*s):(this.targetVanishingPoint.x=i*.3,this.targetVanishingPoint.y=s/2),c?(this.targetVanishingPointRight.x=c.position.x*i,this.targetVanishingPointRight.y=c.position.y*s):(this.targetVanishingPointRight.x=i*.7,this.targetVanishingPointRight.y=s/2),this.vanishingPoint.x+=(this.targetVanishingPoint.x-this.vanishingPoint.x)*.05,this.vanishingPoint.y+=(this.targetVanishingPoint.y-this.vanishingPoint.y)*.05,this.vanishingPointRight.x+=(this.targetVanishingPointRight.x-this.vanishingPointRight.x)*.05,this.vanishingPointRight.y+=(this.targetVanishingPointRight.y-this.vanishingPointRight.y)*.05;let m=0,y=0;this.shakeIntensity>.5&&(m=(Math.random()-.5)*this.shakeIntensity,y=(Math.random()-.5)*this.shakeIntensity),this.ctx.fillStyle="rgba(0, 0, 0, 0.15)",this.ctx.fillRect(0,0,i,s),this.ctx.save(),this.ctx.translate(m,y),this.streams.forEach((_,S)=>{const b=.05*p*(_.branchLevel===0?1:.5);if(Math.random()<b){const C=["rect","hex","diamond"];_.packets.push({x:this.vanishingPoint.x,y:this.vanishingPoint.y,z:0,width:4+Math.random()*8,height:20+Math.random()*40,rotation:_.angle+(Math.random()-.5)*.3,rotationSpeed:(Math.random()-.5)*.02*d,streamIndex:S,age:0,hue:Math.random()*360,shimmerPhase:Math.random()*Math.PI*2,panelType:C[Math.floor(Math.random()*3)],waveAmplitude:Math.random()*10,waveFrequency:Math.random()*2+1,quantumPhase:Math.random()*Math.PI*2,particleCloud:[]})}_.packets=_.packets.filter(C=>{C.age+=.016*d,C.z+=.01*d*(1+_.branchLevel*.2),C.rotation+=C.rotationSpeed;const E=200*C.z,I=Math.sin(C.age*2+S)*30*C.z;return C.x=this.vanishingPoint.x+Math.cos(_.angle)*E+Math.sin(C.age*3)*I,C.y=this.vanishingPoint.y+Math.sin(_.angle)*E+Math.cos(C.age*2.5)*I,C.z<1&&C.x>-100&&C.x<i+100&&C.y>-100&&C.y<s+100})});const v=this.streams.flatMap(_=>_.packets);v.sort((_,S)=>_.z-S.z),v.forEach(_=>{const S=.2+_.z*.8,b=.3+_.z*.7,C=Math.sin(this.time*10+_.quantumPhase)*3*(1-_.z),E=Math.cos(_.age*_.waveFrequency)*C,I=Math.sin(_.age*_.waveFrequency)*C;this.ctx.save(),this.ctx.translate(_.x+E,_.y+I);const A=Math.floor(_.streamIndex%t.length),N=t[A],T=_.width*S,U=_.height*S;_.particleCloud.length<20&&Math.random()<.3&&_.particleCloud.push({dx:(Math.random()-.5)*T*2,dy:(Math.random()-.5)*U*2,life:1}),_.particleCloud=_.particleCloud.filter(D=>{if(D.life-=.02,D.life>0){const B=Math.sin(this.time*5+D.dx+D.dy)*.5+.5;return this.ctx.globalAlpha=b*D.life*.4*B,this.ctx.fillStyle=N,this.ctx.beginPath(),this.ctx.arc(D.dx,D.dy,1.5*S,0,Math.PI*2),this.ctx.fill(),!0}return!1}),this.ctx.globalAlpha=b*.8;const z=this.ctx.createRadialGradient(0,0,0,0,0,Math.max(T,U));z.addColorStop(0,this.addAlpha(N,.8)),z.addColorStop(.3,this.addAlpha(N,.4)),z.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.fillStyle=z,this.ctx.beginPath(),this.ctx.arc(0,0,Math.max(T,U),0,Math.PI*2),this.ctx.fill(),this.ctx.globalAlpha=b*.6,this.ctx.strokeStyle=N,this.ctx.lineWidth=1.5*S;for(let D=0;D<3;D++){this.ctx.beginPath();const B=D*Math.PI*.66,$=(this.time*50+_.age*30+B*20)%(Math.max(T,U)*2);$>0&&(this.ctx.globalAlpha=b*(1-$/(Math.max(T,U)*2))*.5,this.ctx.arc(0,0,$,0,Math.PI*2),this.ctx.stroke())}this.ctx.globalAlpha=b*.4,this.ctx.strokeStyle=N,this.ctx.lineWidth=.8*S;for(let D=0;D<6;D++){const B=D/6*Math.PI*2+this.time*.5,$=(Math.sin(this.time*2+D)*.5+1)*U*.8;this.ctx.beginPath(),this.ctx.moveTo(0,0);const ee=Math.cos(B+.3)*$*.6,V=Math.sin(B+.3)*$*.6,Z=Math.cos(B)*$,K=Math.sin(B)*$;this.ctx.quadraticCurveTo(ee,V,Z,K),this.ctx.stroke(),this.ctx.globalAlpha=b*.8,this.ctx.fillStyle=N,this.ctx.beginPath(),this.ctx.arc(Z,K,2*S,0,Math.PI*2),this.ctx.fill()}if(this.ctx.shadowBlur=20*S,this.ctx.shadowColor=N,this.ctx.globalAlpha=b,this.ctx.fillStyle=N,this.ctx.beginPath(),this.ctx.arc(0,0,3*S,0,Math.PI*2),this.ctx.fill(),this.ctx.shadowBlur=0,this.ctx.globalAlpha=b*.9,this.ctx.fillStyle="white",this.ctx.beginPath(),this.ctx.arc(0,0,1.5*S,0,Math.PI*2),this.ctx.fill(),Math.random()<.05){const D=Math.random()*Math.PI*2,B=Math.random()*Math.max(T,U)*1.5;this.ctx.globalAlpha=b*.6,this.ctx.strokeStyle=N,this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(Math.cos(D)*B,Math.sin(D)*B),this.ctx.stroke()}this.ctx.restore()}),this.ctx.globalAlpha=.05;for(let _=0;_<8;_++){const S=_/8*Math.PI*2,b=Math.max(i,s);this.ctx.strokeStyle=t[_%t.length]||"#00ffff",this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(this.vanishingPoint.x,this.vanishingPoint.y);const C=50;for(let E=0;E<=C;E++){const I=E/C,A=b*I,N=Math.sin(I*10+this.time*2)*20,T=this.vanishingPoint.x+Math.cos(S)*A+Math.cos(S+Math.PI/2)*N,U=this.vanishingPoint.y+Math.sin(S)*A+Math.sin(S+Math.PI/2)*N;E===0?this.ctx.moveTo(T,U):this.ctx.lineTo(T,U)}this.ctx.stroke()}for(let _=50;_<Math.max(i,s);_+=80){const S=_/100,b=Math.sin(this.time*2+S)*5;this.ctx.globalAlpha=.04,this.ctx.strokeStyle=t[Math.floor(S)%t.length]||"#00ffff",this.ctx.lineWidth=1,this.ctx.beginPath();const C=60;for(let E=0;E<=C;E++){const I=E/C*Math.PI*2,A=_+Math.sin(I*6+this.time*3)*b,N=this.vanishingPoint.x+Math.cos(I)*A,T=this.vanishingPoint.y+Math.sin(I)*A;E===0?this.ctx.moveTo(N,T):this.ctx.lineTo(N,T)}this.ctx.closePath(),this.ctx.stroke()}this.ctx.restore(),this.ctx.globalAlpha=.02;for(let _=0;_<100;_++){const S=Math.random()*i,b=Math.random()*s;Math.sin(this.time*20+_)*.5+.5>.7&&(this.ctx.fillStyle=t[_%t.length]||"#00ffff",this.ctx.beginPath(),this.ctx.arc(S,b,1,0,Math.PI*2),this.ctx.fill())}if(this.shakeIntensity>5){this.ctx.globalCompositeOperation="screen";for(let _=0;_<3;_++){this.ctx.globalAlpha=.05;const S=this.ctx.createRadialGradient(this.vanishingPoint.x,this.vanishingPoint.y,0,this.vanishingPoint.x,this.vanishingPoint.y,Math.max(i,s)*(.3+_*.2)),b=(this.time*100+_*120)%360;S.addColorStop(0,`hsla(${b}, 100%, 50%, 0.3)`),S.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.fillStyle=S,this.ctx.fillRect(0,0,i,s)}this.ctx.globalCompositeOperation="source-over"}const w=(_,S,b,C,E)=>{const I=5+Math.sin(this.time*4)*3,A=t[b]||"#00ffff";for(let T=0;T<3;T++){const U=I*(2+T),z=.3-T*.1;this.ctx.globalAlpha=z,this.ctx.strokeStyle=A,this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.arc(_,S,U,this.time*(1+T*.5),this.time*(1+T*.5)+Math.PI*1.5),this.ctx.stroke()}const N=this.ctx.createRadialGradient(_,S,0,_,S,I*4);if(N.addColorStop(0,this.addAlpha(A,.9)),N.addColorStop(.5,this.addAlpha(A,.5)),N.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.globalAlpha=.9,this.ctx.fillStyle=N,this.ctx.beginPath(),this.ctx.arc(_,S,I*4,0,Math.PI*2),this.ctx.fill(),this.ctx.globalAlpha=1,this.ctx.fillStyle="white",this.ctx.shadowBlur=15,this.ctx.shadowColor=A,this.ctx.beginPath(),this.ctx.arc(_,S,I,0,Math.PI*2),this.ctx.fill(),this.ctx.shadowBlur=0,this.clapAccumulation>.5){const T=this.clapAccumulation/10;for(let U=0;U<5;U++){const z=(this.time*3+U*.5)%2,D=20+z*100+this.clapAccumulation*20,B=(1-z/2)*T;this.ctx.globalAlpha=B*.5,this.ctx.strokeStyle=t[U%t.length]||"#00ffff",this.ctx.lineWidth=3,this.ctx.beginPath(),this.ctx.arc(_,S,D,0,Math.PI*2),this.ctx.stroke()}for(let U=0;U<Math.floor(this.clapAccumulation*5);U++){const z=U/(this.clapAccumulation*5)*Math.PI*2,D=30+Math.sin(this.time*5+U)*20,B=_+Math.cos(z+this.time*2)*D,$=S+Math.sin(z+this.time*2)*D;this.ctx.globalAlpha=T*.7,this.ctx.fillStyle=t[U%t.length]||"#00ffff",this.ctx.beginPath(),this.ctx.arc(B,$,2,0,Math.PI*2),this.ctx.fill()}}if(C){this.ctx.globalAlpha=1,this.ctx.fillStyle="white",this.ctx.font="12px monospace",this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.shadowBlur=8,this.ctx.shadowColor="rgba(0, 0, 0, 0.8)";const T=`X:${Math.floor(_)} Y:${Math.floor(S)}`;this.ctx.fillText(T,_,S-8);const U=new Date,z=U.toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric"}),D=U.toLocaleTimeString("en-US",{hour12:!1}),B=`${z} - ${D}`;this.ctx.fillText(B,_,S+8),this.ctx.shadowBlur=0}};w(this.vanishingPoint.x,this.vanishingPoint.y,0,!!o),c&&w(this.vanishingPointRight.x,this.vanishingPointRight.y,1,!0)}spawnFractalBranch(){if(this.streams.length>30)return;const e=this.streams[Math.floor(Math.random()*Math.min(6,this.streams.length))],t=e.angle+(Math.random()-.5)*.8;this.streams.push({angle:t,speed:1.2,packets:[],branchLevel:(e.branchLevel||0)+1,parentAngle:e.angle})}drawHexagon(e,t,i){this.ctx.beginPath();for(let s=0;s<6;s++){const o=Math.PI/3*s,c=e+i*Math.cos(o),u=t+i*Math.sin(o);s===0?this.ctx.moveTo(c,u):this.ctx.lineTo(c,u)}this.ctx.closePath()}addAlpha(e,t){if(e.startsWith("#")){const i=parseInt(e.slice(1,3),16),s=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16);return`rgba(${i}, ${s}, ${o}, ${t})`}return e}}class qE{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"particles",[]);F(this,"config",{baseSize:1.5,gridSpacing:8,distortionRadius:200,distortionStrength:0,friction:.9,ease:.1});F(this,"faceData",[[60,100,1],[70,100,1],[50,110,1],[60,110,1],[70,110,1],[80,110,1],[40,120,1],[50,120,2],[60,120,1],[70,120,1],[80,120,2],[90,120,1],[40,130,2],[50,130,3],[60,130,1],[70,130,1],[80,130,3],[90,130,2],[30,140,2],[40,140,3],[50,140,4],[60,140,1],[70,140,1],[80,140,4],[90,140,3],[100,140,2],[20,150,2],[30,150,3],[40,150,3],[50,150,3],[60,150,1],[70,150,1],[80,150,3],[90,150,3],[100,150,3],[110,150,2],[30,160,2],[40,160,3],[50,160,2],[80,160,2],[90,160,3],[100,160,2],[40,170,2],[50,170,2],[80,170,2],[90,170,2],[40,180,1],[50,180,1],[80,180,1],[90,180,1],[40,190,1],[50,190,2],[80,190,2],[90,190,1],[50,200,2],[80,200,2],[50,210,1],[60,210,1],[70,210,1],[80,210,1],[50,220,1],[60,220,2],[70,220,2],[80,220,1],[60,230,3],[70,230,3],[60,240,4],[70,240,4],[60,250,3],[70,250,3],[60,260,2],[70,260,2]]);this.canvas=e,this.ctx=t,this.createParticles()}createParticles(){this.particles=[];const e=this.canvas.width/2,t=this.canvas.height/2,i=275,s=14,o=1.2,c=this.config.baseSize*o;for(let u=t-i;u<t+i;u+=s)for(let h=e-i;h<e+i;h+=s)Math.sqrt((h-e)**2+(u-t)**2)<i&&this.particles.push({originX:h,originY:u,x:h,y:u,vx:0,vy:0,intensity:o,size:c,currentSize:c})}render(e,t){var c,u;t[1]&&(t[1].toLowerCase()==="#ffffff"||t[1].toLowerCase()==="#fff")?this.ctx.fillStyle="#000000":this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);const s=e.left||e.right;if(s){const h=(((c=s.position)==null?void 0:c.x)||.5)*this.canvas.width,d=(((u=s.position)==null?void 0:u.y)||.5)*this.canvas.height;let p=0;const g=s.fingerCount||2;s.gesture==="pinch"||g===1?p=5:g===2?p=20:g>=5?p=50:p=15+(g-2)*10,this.config.distortionStrength+=(p-this.config.distortionStrength)*.1,this.particles.forEach(m=>{const y=h-m.x,v=d-m.y,w=Math.sqrt(y*y+v*v);if(w<this.config.distortionRadius){const b=(this.config.distortionRadius-w)/this.config.distortionRadius,C=Math.atan2(v,y),E=Math.cos(C)*b*this.config.distortionStrength,I=Math.sin(C)*b*this.config.distortionStrength;m.vx-=E,m.vy-=I,m.currentSize=m.size+b*4*Math.abs(this.config.distortionStrength/10)}else m.currentSize=m.size;const _=m.originX-m.x,S=m.originY-m.y;m.vx+=_*this.config.ease,m.vy+=S*this.config.ease,m.vx*=this.config.friction,m.vy*=this.config.friction,m.x+=m.vx,m.y+=m.vy})}else this.config.distortionStrength*=.9,this.particles.forEach(h=>{const d=h.originX-h.x,p=h.originY-h.y;h.vx+=d*this.config.ease,h.vy+=p*this.config.ease,h.vx*=this.config.friction,h.vy*=this.config.friction,h.x+=h.vx,h.y+=h.vy,h.currentSize=h.size});if(e.clapping){const h=this.canvas.width/2,d=this.canvas.height/2;this.particles.forEach(p=>{const g=p.x-h,m=p.y-d,y=Math.sqrt(g*g+m*m),v=30;p.vx+=g/(y+1)*v,p.vy+=m/(y+1)*v})}const o=t[0]||"#FFFFFF";this.particles.forEach(h=>{this.ctx.fillStyle=o,this.ctx.globalAlpha=.85;const d=Math.max(.5,h.currentSize);this.ctx.fillRect(h.x-d/2,h.y-d/2,d,d)}),this.ctx.globalAlpha=1}}const on=class on{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"faceLandmarker",null);F(this,"isLoading",!0);F(this,"lastVideoTime",-1);F(this,"results");F(this,"video",null);F(this,"hasFailed",!1);F(this,"isLocalInitializing",!1);F(this,"drawingUtils",null);F(this,"initAttempts",0);F(this,"maxInitAttempts",60);F(this,"FACE_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,129],[129,49],[49,209],[131,29],[29,52],[52,131],[43,106],[106,204],[204,43],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[33,168],[168,8],[8,33],[228,117],[117,31],[31,228],[107,189],[189,55],[55,107],[126,217],[217,1],[1,126],[233,79],[79,218],[218,233],[35,154],[154,26],[26,35],[125,129],[129,49],[49,125],[52,131],[131,29],[29,52],[169,106],[106,43],[43,169],[6,74],[74,184],[184,6],[191,80],[80,183],[183,191],[43,106],[106,204],[204,43]]);this.canvas=e,this.ctx=t,console.log("👤 FaceRenderer initialized"),this.initializeMediaPipe()}async initializeMediaPipe(){if(!(this.isLocalInitializing||this.hasFailed)){this.isLocalInitializing=!0;try{if(this.initAttempts++,this.video=document.querySelector("video"),!this.video||!this.video.srcObject){this.isLocalInitializing=!1,this.initAttempts<this.maxInitAttempts?setTimeout(()=>this.initializeMediaPipe(),1e3):(console.error("❌ Max retry attempts reached."),this.hasFailed=!0,this.isLoading=!1);return}if(on.isGlobalInitializing){console.log("⏳ Waiting for global init..."),this.isLocalInitializing=!1,setTimeout(()=>this.initializeMediaPipe(),500);return}if(!on.filesetResolver){on.isGlobalInitializing=!0,console.log("📦 Loading MediaPipe modules...");const t=await ux(()=>import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14"),[],import.meta.url);on.faceLandmarkerClass=t.FaceLandmarker,on.drawingUtilsClass=t.DrawingUtils,on.filesetResolver=await t.FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm"),console.log("🔧 WASM initialized"),on.isGlobalInitializing=!1}const e="https://raw.githubusercontent.com/NPC-88/3dfiles/9d9b1c903c6397d41d71ad993f114bbce9fe5db6/face_landmarker.task";if(!this.faceLandmarker)try{this.faceLandmarker=await on.faceLandmarkerClass.createFromOptions(on.filesetResolver,{baseOptions:{modelAssetPath:e,delegate:"GPU"},outputFaceBlendshapes:!1,outputFacialTransformationMatrixes:!1,runningMode:"VIDEO",numFaces:1}),console.log("✅ Face tracking initialized (GPU)")}catch{console.warn("GPU failed, trying CPU..."),this.faceLandmarker=await on.faceLandmarkerClass.createFromOptions(on.filesetResolver,{baseOptions:{modelAssetPath:e,delegate:"CPU"},outputFaceBlendshapes:!1,outputFacialTransformationMatrixes:!1,runningMode:"VIDEO",numFaces:1}),console.log("✅ Face tracking initialized (CPU)")}on.drawingUtilsClass&&(this.drawingUtils=new on.drawingUtilsClass(this.ctx)),this.isLoading=!1,this.isLocalInitializing=!1}catch(e){console.error("❌ Failed to initialize MediaPipe:",e),this.hasFailed=!0,this.isLoading=!1,this.isLocalInitializing=!1,on.isGlobalInitializing=!1}}}render(e,t,i){if(this.hasFailed){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#ff4444",this.ctx.font="18px monospace",this.ctx.textAlign="center",this.ctx.fillText("Initialization Failed",this.canvas.width/2,this.canvas.height/2),this.ctx.font="14px monospace",this.ctx.fillStyle="#ff8888",this.ctx.fillText("Refresh the page to try again",this.canvas.width/2,this.canvas.height/2+30);return}if(this.isLoading){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#666666",this.ctx.font="20px monospace",this.ctx.textAlign="center",this.ctx.fillText("Initializing Face Model...",this.canvas.width/2,this.canvas.height/2),this.ctx.font="14px monospace",this.ctx.fillStyle="#888888",this.ctx.fillText("Press Q to enable camera if needed",this.canvas.width/2,this.canvas.height/2+30);return}if(!this.faceLandmarker||!this.video||!this.drawingUtils){if(!this.isLocalInitializing&&!this.hasFailed){const p=document.querySelector("video");p&&p.srcObject&&(console.log("📹 Video found during render, triggering init once..."),this.initializeMediaPipe())}this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#666666",this.ctx.font="18px monospace",this.ctx.textAlign="center",this.ctx.fillText("Waiting for camera...",this.canvas.width/2,this.canvas.height/2),this.ctx.font="14px monospace",this.ctx.fillStyle="#888888",this.ctx.fillText("Press Q to enable camera",this.canvas.width/2,this.canvas.height/2+30);return}const s=performance.now();if(this.lastVideoTime!==this.video.currentTime){this.lastVideoTime=this.video.currentTime;try{this.results=this.faceLandmarker.detectForVideo(this.video,s)}catch(p){console.error("Face detection error:",p)}}this.ctx.save(),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);const o=performance.now(),c=Math.abs(Math.sin(o*.002)),u=.1+.6*c,h=15*c,d=t[0]||"#00d2ff";if(this.results&&this.results.faceLandmarks&&this.results.faceLandmarks.length>0)for(const p of this.results.faceLandmarks)this.ctx.shadowColor=d,this.ctx.shadowBlur=h,this.drawingUtils.drawConnectors(p,on.faceLandmarkerClass.FACE_LANDMARKS_TESSELATION,{color:`rgba(255, 255, 255, ${u})`,lineWidth:1}),this.ctx.shadowBlur=0;else this.ctx.fillStyle="#666666",this.ctx.font="16px monospace",this.ctx.textAlign="center",this.ctx.fillText("No Face Detected",this.canvas.width/2,this.canvas.height/2),this.ctx.font="12px monospace",this.ctx.fillStyle="#888888",this.ctx.fillText("Position your face in front of the camera",this.canvas.width/2,this.canvas.height/2+25);this.ctx.restore()}resize(e,t){}destroy(){this.faceLandmarker&&(this.faceLandmarker.close(),this.faceLandmarker=null),console.log("👤 FaceRenderer destroyed")}};F(on,"filesetResolver",null),F(on,"faceLandmarkerClass",null),F(on,"drawingUtilsClass",null),F(on,"isGlobalInitializing",!1);let pd=on;function Zc(a,e){a.traverse(t=>{if(t instanceof un||t instanceof Er||t instanceof Nx){t.geometry.dispose();const i=t.material;Array.isArray(i)?i.forEach(s=>s.dispose()):i.dispose()}}),a.clear(),e.dispose(),e.forceContextLoss()}class YE{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"threeCanvas");F(this,"scene");F(this,"camera");F(this,"renderer");F(this,"sphere");F(this,"particleMesh");F(this,"pointLight");F(this,"pointLight2");F(this,"originalPositions",[]);F(this,"time",0);F(this,"handX",.5);F(this,"handY",.5);F(this,"pinchDistance",1);F(this,"SPHERE_RADIUS",1.5);F(this,"DETAIL",4);F(this,"CHAOS_MULTIPLIER",1.5);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances of Three")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.initThreeJS(),console.log("🌐 MorphingSphereRenderer initialized with Three.js"),console.warn=i}initThreeJS(){this.scene=new ds,this.scene.fog=new Ko(0,.05),this.camera=new Tn(75,this.canvas.width/this.canvas.height,.1,1e3),this.camera.position.set(0,0,5),this.camera.lookAt(0,0,0),this.renderer=new ps({canvas:this.threeCanvas,antialias:!0,alpha:!0}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=new Bx(4210752);this.scene.add(e),this.pointLight=new Vc(65484,2,50),this.pointLight.position.set(5,5,5),this.scene.add(this.pointLight),this.pointLight2=new Vc(3342591,2,50),this.pointLight2.position.set(-5,-5,5),this.scene.add(this.pointLight2);const t=new Bd(this.SPHERE_RADIUS,this.DETAIL),i=t.attributes.position;for(let d=0;d<i.count;d++)this.originalPositions.push(new J(i.getX(d),i.getY(d),i.getZ(d)));const s=new kx({color:1118481,wireframe:!0,emissive:3342591,emissiveIntensity:.5,roughness:.4,metalness:.8});this.sphere=new un(t,s),this.scene.add(this.sphere);const o=new cn,c=1e3,u=new Float32Array(c*3);for(let d=0;d<c*3;d++)u[d]=(Math.random()-.5)*20;o.setAttribute("position",new _n(u,3));const h=new cs({size:.02,color:16777215,transparent:!0,opacity:.5});this.particleMesh=new Er(o,h),this.scene.add(this.particleMesh)}noise(e,t,i){return Math.sin(e)*Math.cos(t)*Math.sin(i)}calculatePinch(e){if(!e||!e.landmarks)return 1;const t=e.landmarks[4],i=e.landmarks[8],s=Math.sqrt(Math.pow(t.x-i.x,2)+Math.pow(t.y-i.y,2));return Math.min(Math.max((s-.02)*5,0),1)}updateState(e){const t=e.left,i=e.right,s=this.calculatePinch(t),o=this.calculatePinch(i),u=Math.min(s,o);this.pinchDistance+=(u-this.pinchDistance)*.1;let h=.5,d=.5;t&&t.position?(h=t.position.x,d=t.position.y):i&&i.position&&(h=i.position.x,d=i.position.y),this.handX+=(h-this.handX)*.1,this.handY+=(d-this.handY)*.1,!t&&!i&&(this.handX+=(.5-this.handX)*.05,this.handY+=(.5-this.handY)*.05,this.pinchDistance+=(1-this.pinchDistance)*.05)}render(e,t){this.time+=.02*ii(),this.updateState(e);const i=this.renderer.getPixelRatio(),s=Math.floor(this.canvas.width*i),o=Math.floor(this.canvas.height*i);(this.threeCanvas.width!==s||this.threeCanvas.height!==o)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=s,this.threeCanvas.height=o,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix()),this.renderer.clear();const c=(this.handX-.5)*4,u=(.5-this.handY)*3;this.sphere.position.x+=(c-this.sphere.position.x)*.15,this.sphere.position.y+=(u-this.sphere.position.y)*.15;const h=(this.handY-.5)*2,d=(this.handX-.5)*2;this.sphere.rotation.x+=(h-this.sphere.rotation.x)*.05,this.sphere.rotation.y+=(d-this.sphere.rotation.y)*.05,this.sphere.rotation.z+=.005;const p=this.sphere.geometry.attributes.position,g=(1-this.pinchDistance)*this.CHAOS_MULTIPLIER,m=Math.sin(this.time)*.1;for(let v=0;v<p.count;v++){const w=this.originalPositions[v],_=this.noise(w.x*2+this.time,w.y*2+this.time,w.z*2),S=1+m+_*g;p.setXYZ(v,w.x*S,w.y*S,w.z*S)}p.needsUpdate=!0;const y=this.sphere.material;if(t&&t.length>0)try{const v=new Ye(t[0]),w=new Ye(t[0]);y.color=v,y.emissive=w.multiplyScalar(.3+g*.4);const _=new Ye(t[0]),S=t.length>1?new Ye(t[1]):new Ye(t[0]);this.pointLight.color=_,this.pointLight2.color=S}catch{y.color.setHex(65484),y.emissive.setHex(13107),this.pointLight.color.setHex(65484),this.pointLight2.color.setHex(3342591)}else y.color.setHex(65484),y.emissive.setHex(13107),this.pointLight.color.setHex(65484),this.pointLight2.color.setHex(3342591);this.pointLight.position.x=(this.handX-.5)*10,this.pointLight.position.y=(.5-this.handY)*10,this.particleMesh.rotation.y=-this.time*.1,this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){Zc(this.scene,this.renderer)}}class $E{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"threeCanvas");F(this,"scene");F(this,"camera");F(this,"renderer");F(this,"instancedMesh");F(this,"gridWidth");F(this,"gridHeight");F(this,"cubePositions",[]);F(this,"time",0);F(this,"hands",[]);F(this,"speedMultiplier",1);F(this,"handsTogetherBoost",1);F(this,"currentFingerMode","slow");F(this,"GRID_WIDTH",120);F(this,"GRID_HEIGHT",90);F(this,"SPACING",.12);F(this,"WAVE_AMPLITUDE",2.5);F(this,"CUBE_SIZE",.03);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances of Three")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.gridWidth=this.GRID_WIDTH,this.gridHeight=this.GRID_HEIGHT,this.initThreeJS(),console.log("🧊 CubeWallRenderer initialized with Three.js"),console.warn=i}initThreeJS(){this.scene=new ds,this.scene.background=new Ye(0),this.camera=new Tn(60,this.canvas.width/this.canvas.height,.1,100),this.camera.position.set(0,0,4.5),this.camera.lookAt(0,0,0),this.renderer=new ps({canvas:this.threeCanvas,antialias:!0,alpha:!1}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=new Bx(2105376,.3);this.scene.add(e);const t=new of(16777215,.8);t.position.set(3,5,8),this.scene.add(t);const i=new of(4474111,.4);i.position.set(-5,-3,5),this.scene.add(i);const s=new Vc(65484,.6,50);s.position.set(5,5,5),this.scene.add(s);const o=new Wa(this.CUBE_SIZE,this.CUBE_SIZE,this.CUBE_SIZE),c=new kx({color:65535,emissive:8738,emissiveIntensity:.2,metalness:.6,roughness:.4,flatShading:!0}),u=this.gridWidth*this.gridHeight;this.instancedMesh=new CS(o,c,u),this.scene.add(this.instancedMesh);const h=new gn;let d=0;for(let p=0;p<this.gridHeight;p++)for(let g=0;g<this.gridWidth;g++){const m=(g-this.gridWidth/2)*this.SPACING,y=(p-this.gridHeight/2)*this.SPACING,v=0;this.cubePositions.push(new J(m,y,v)),h.position.set(m,y,v),h.updateMatrix(),this.instancedMesh.setMatrixAt(d,h.matrix),d++}this.instancedMesh.instanceMatrix.needsUpdate=!0}getFingerSpeedMultiplier(e){if(!e||!e.fingerCount)return 0;const t=e.fingerCount;return t<=1?.05:t===2?.3:t>=5?1.5:.3+(t-2)/3*1.2}updateHandData(e){this.hands=[];let t=1;if(e.left){const s=this.getFingerSpeedMultiplier(e.left);t=Math.max(t,s),this.hands.push({x:e.left.position.x,y:1-e.left.position.y,intensity:1,fingerCount:e.left.fingerCount||0})}if(e.right){const s=this.getFingerSpeedMultiplier(e.right);t=Math.max(t,s),this.hands.push({x:e.right.position.x,y:1-e.right.position.y,intensity:1,fingerCount:e.right.fingerCount||0})}this.speedMultiplier+=(t-this.speedMultiplier)*.1;const i=e.clapping||e.distanceBetweenHands&&e.distanceBetweenHands<.15?3:1;if(this.handsTogetherBoost+=(i-this.handsTogetherBoost)*.15,this.hands.length>0){const s=this.hands.reduce((o,c)=>o+c.fingerCount,0);s<=1?this.currentFingerMode="pinch":s>=5?this.currentFingerMode="fast":this.currentFingerMode="slow"}}calculateDisplacement(e,t){let i=0;const s=Math.sin(e*8+this.time)*Math.cos(t*8+this.time)*.05;i+=s;for(const o of this.hands){const c=(o.x-.5)*this.gridWidth*this.SPACING*.8,u=(o.y-.5)*this.gridHeight*this.SPACING*.8,h=e-c,d=t-u,p=Math.sqrt(h*h+d*d),g=Math.sin(p*6-this.time*4)/(p*.5+.5);i+=g*o.intensity*this.WAVE_AMPLITUDE}return i*=this.speedMultiplier*this.handsTogetherBoost,i}render(e,t){this.time+=.016*this.speedMultiplier*ii(),this.updateHandData(e);const i=this.renderer.getPixelRatio(),s=Math.floor(this.canvas.width*i),o=Math.floor(this.canvas.height*i);(this.threeCanvas.width!==s||this.threeCanvas.height!==o)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=s,this.threeCanvas.height=o,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix());const c=new gn;let u=0,h=.5,d=.2;this.currentFingerMode==="pinch"?(h=.02,d=.01):this.currentFingerMode==="slow"?(h=.5,d=.25):this.currentFingerMode==="fast"&&(h=.9,d=.4);for(let p=0;p<this.gridHeight;p++)for(let g=0;g<this.gridWidth;g++){const m=this.cubePositions[u],y=this.calculateDisplacement(m.x,m.y);c.position.set(m.x,m.y,m.z+y),c.rotation.x=y*h,c.rotation.y=y*h*.7,c.rotation.z=y*h*.4;const v=1+Math.abs(y)*d;c.scale.set(v,v,v),c.updateMatrix(),this.instancedMesh.setMatrixAt(u,c.matrix),u++}if(this.instancedMesh.instanceMatrix.needsUpdate=!0,t&&t.length>0)try{const p=this.instancedMesh.material,g=new Ye(t[0]);if(p.color=g,p.emissive=new Ye(t[0]).multiplyScalar(.3),t.length>1){const m=this.scene.children.find(v=>v instanceof of&&v.position.x<0),y=this.scene.children.find(v=>v instanceof Vc);m&&(m.color=new Ye(t[1])),y&&(y.color=new Ye(t.length>2?t[2]:t[1]))}}catch{const g=this.instancedMesh.material;g.color.setHex(65535),g.emissive.setHex(13107)}this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){Zc(this.scene,this.renderer)}}const Ic={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Zo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const KE=new Xa(-1,1,1,-1,0,1);class ZE extends cn{constructor(){super(),this.setAttribute("position",new Zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Zt([0,2,0,0,2,0],2))}}const QE=new ZE;class $x{constructor(e){this._mesh=new un(QE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,KE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class JE extends Zo{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ln?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Hc.clone(e.uniforms),this.material=new ln({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new $x(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Vg extends Zo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let c,u;this.inverse?(c=0,u=1):(c=1,u=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,c,4294967295),o.buffers.stencil.setClear(u),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class eT extends Zo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Kx{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ut);this._width=i.width,this._height=i.height,t=new ni(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new JE(Ic),this.copyPass.material.blending=ir,this.timer=new YS}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,o=this.passes.length;s<o;s++){const c=this.passes[s];if(c.enabled!==!1){if(c.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),c.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),c.needsSwap){if(i){const u=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(u.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(u.EQUAL,1,4294967295)}this.swapBuffers()}Vg!==void 0&&(c instanceof Vg?i=!0:c instanceof eT&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ut);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Zx extends Zo{constructor(e,t,i=null,s=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ye}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let o,c;this.overrideMaterial!==null&&(c=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=c),e.autoClear=s}}const tT={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ye(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Vs extends Zo{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ut(e.x,e.y):new ut(256,256),this.clearColor=new Ye(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);this.renderTargetBright=new ni(o,c,{type:pi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let p=0;p<this.nMips;p++){const g=new ni(o,c,{type:pi});g.texture.name="UnrealBloomPass.h"+p,g.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(g);const m=new ni(o,c,{type:pi});m.texture.name="UnrealBloomPass.v"+p,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),o=Math.round(o/2),c=Math.round(c/2)}const u=tT;this.highPassUniforms=Hc.clone(u.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ln({uniforms:this.highPassUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader}),this.separableBlurMaterials=[];const h=[6,10,14,18,22];o=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);for(let p=0;p<this.nMips;p++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(h[p])),this.separableBlurMaterials[p].uniforms.invSize.value=new ut(1/o,1/c),o=Math.round(o/2),c=Math.round(c/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new J(1,1,1),new J(1,1,1),new J(1,1,1),new J(1,1,1),new J(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Hc.clone(Ic.uniforms),this.blendMaterial=new ln({uniforms:this.copyUniforms,vertexShader:Ic.vertexShader,fragmentShader:Ic.fragmentShader,premultipliedAlpha:!0,blending:ka,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ye,this._oldClearAlpha=1,this._basic=new Yc,this._fsQuad=new $x(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,s),this.renderTargetsVertical[o].setSize(i,s),this.separableBlurMaterials[o].uniforms.invSize.value=new ut(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,o){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const c=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let u=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this._fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=u.texture,this.separableBlurMaterials[h].uniforms.direction.value=Vs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[h]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=Vs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[h]),e.clear(),this._fsQuad.render(e),u=this.renderTargetsVertical[h];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=c}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new ln({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ut(.5,.5)},direction:{value:new ut(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}}Vs.BlurDirectionX=new ut(1,0);Vs.BlurDirectionY=new ut(0,1);const nT=/^[og]\s*(.+)?/,iT=/^mtllib /,rT=/^usemtl /,sT=/^usemap /,Gg=/\s+/,Wg=new J,pf=new J,Xg=new J,jg=new J,bi=new J,Ec=new Ye;function aT(){const a={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,o){const c=this._finalize(!1);c&&(c.inherited||c.groupCount<=0)&&this.materials.splice(c.index,1);const u={index:this.materials.length,name:s||"",mtllib:Array.isArray(o)&&o.length>0?o[o.length-1]:"",smooth:c!==void 0?c.smooth:this.smooth,groupStart:c!==void 0?c.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(h){const d={index:typeof h=="number"?h:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return d.clone=this.clone.bind(d),d}};return this.materials.push(u),u},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const o=this.currentMaterial();if(o&&o.groupEnd===-1&&(o.groupEnd=this.geometry.vertices.length/3,o.groupCount=o.groupEnd-o.groupStart,o.inherited=!1),s&&this.materials.length>1)for(let c=this.materials.length-1;c>=0;c--)this.materials[c].groupCount<=0&&this.materials.splice(c,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),o}},i&&i.name&&typeof i.clone=="function"){const s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const s=this.vertices,o=this.object.geometry.vertices;o.push(s[e+0],s[e+1],s[e+2]),o.push(s[t+0],s[t+1],s[t+2]),o.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const s=this.normals,o=this.object.geometry.normals;o.push(s[e+0],s[e+1],s[e+2]),o.push(s[t+0],s[t+1],s[t+2]),o.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(e,t,i){const s=this.vertices,o=this.object.geometry.normals;Wg.fromArray(s,e),pf.fromArray(s,t),Xg.fromArray(s,i),bi.subVectors(Xg,pf),jg.subVectors(Wg,pf),bi.cross(jg),bi.normalize(),o.push(bi.x,bi.y,bi.z),o.push(bi.x,bi.y,bi.z),o.push(bi.x,bi.y,bi.z)},addColor:function(e,t,i){const s=this.colors,o=this.object.geometry.colors;s[e]!==void 0&&o.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&o.push(s[t+0],s[t+1],s[t+2]),s[i]!==void 0&&o.push(s[i+0],s[i+1],s[i+2])},addUV:function(e,t,i){const s=this.uvs,o=this.object.geometry.uvs;o.push(s[e+0],s[e+1]),o.push(s[t+0],s[t+1]),o.push(s[i+0],s[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,s,o,c,u,h,d){const p=this.vertices.length;let g=this.parseVertexIndex(e,p),m=this.parseVertexIndex(t,p),y=this.parseVertexIndex(i,p);if(this.addVertex(g,m,y),this.addColor(g,m,y),u!==void 0&&u!==""){const v=this.normals.length;g=this.parseNormalIndex(u,v),m=this.parseNormalIndex(h,v),y=this.parseNormalIndex(d,v),this.addNormal(g,m,y)}else this.addFaceNormal(g,m,y);if(s!==void 0&&s!==""){const v=this.uvs.length;g=this.parseUVIndex(s,v),m=this.parseUVIndex(o,v),y=this.parseUVIndex(c,v),this.addUV(g,m,y),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,s=e.length;i<s;i++){const o=this.parseVertexIndex(e[i],t);this.addVertexPoint(o),this.addColor(o)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,s=this.uvs.length;for(let o=0,c=e.length;o<c;o++)this.addVertexLine(this.parseVertexIndex(e[o],i));for(let o=0,c=t.length;o<c;o++)this.addUVLine(this.parseUVIndex(t[o],s))}};return a.startObject("",!1),a}class oT extends Vd{constructor(e){super(e),this.materials=null}load(e,t,i,s){const o=this,c=new GS(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{t(o.parse(u))}catch(h){s?s(h):console.error(h),o.manager.itemError(e)}},i,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new aT;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let s=[];for(let u=0,h=i.length;u<h;u++){const d=i[u].trimStart();if(d.length===0)continue;const p=d.charAt(0);if(p!=="#")if(p==="v"){const g=d.split(Gg);switch(g[0]){case"v":t.vertices.push(parseFloat(g[1]),parseFloat(g[2]),parseFloat(g[3])),g.length>=7?(Ec.setRGB(parseFloat(g[4]),parseFloat(g[5]),parseFloat(g[6]),hi),t.colors.push(Ec.r,Ec.g,Ec.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(g[1]),parseFloat(g[2]),parseFloat(g[3]));break;case"vt":t.uvs.push(parseFloat(g[1]),parseFloat(g[2]));break}}else if(p==="f"){const m=d.slice(1).trim().split(Gg),y=[];for(let w=0,_=m.length;w<_;w++){const S=m[w];if(S.length>0){const b=S.split("/");y.push(b)}}const v=y[0];for(let w=1,_=y.length-1;w<_;w++){const S=y[w],b=y[w+1];t.addFace(v[0],S[0],b[0],v[1],S[1],b[1],v[2],S[2],b[2])}}else if(p==="l"){const g=d.substring(1).trim().split(" ");let m=[];const y=[];if(d.indexOf("/")===-1)m=g;else for(let v=0,w=g.length;v<w;v++){const _=g[v].split("/");_[0]!==""&&m.push(_[0]),_[1]!==""&&y.push(_[1])}t.addLineGeometry(m,y)}else if(p==="p"){const m=d.slice(1).trim().split(" ");t.addPointGeometry(m)}else if((s=nT.exec(d))!==null){const g=(" "+s[0].slice(1).trim()).slice(1);t.startObject(g)}else if(rT.test(d))t.object.startMaterial(d.substring(7).trim(),t.materialLibraries);else if(iT.test(d))t.materialLibraries.push(d.substring(7).trim());else if(sT.test(d))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(p==="s"){if(s=d.split(" "),s.length>1){const m=s[1].trim().toLowerCase();t.object.smooth=m!=="0"&&m!=="off"}else t.object.smooth=!0;const g=t.object.currentMaterial();g&&(g.smooth=t.object.smooth)}else{if(d==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+d+'"')}}t.finalize();const o=new Na;if(o.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let u=0,h=t.objects.length;u<h;u++){const d=t.objects[u],p=d.geometry,g=d.materials,m=p.type==="Line",y=p.type==="Points";let v=!1;if(p.vertices.length===0)continue;const w=new cn;w.setAttribute("position",new Zt(p.vertices,3)),p.normals.length>0&&w.setAttribute("normal",new Zt(p.normals,3)),p.colors.length>0&&(v=!0,w.setAttribute("color",new Zt(p.colors,3))),p.hasUVIndices===!0&&w.setAttribute("uv",new Zt(p.uvs,2));const _=[];for(let b=0,C=g.length;b<C;b++){const E=g[b],I=E.name+"_"+E.smooth+"_"+v;let A=t.materials[I];if(this.materials!==null){if(A=this.materials.create(E.name),m&&A&&!(A instanceof Vo)){const N=new Vo;Gi.prototype.copy.call(N,A),N.color.copy(A.color),A=N}else if(y&&A&&!(A instanceof cs)){const N=new cs({size:10,sizeAttenuation:!1});Gi.prototype.copy.call(N,A),N.color.copy(A.color),N.map=A.map,A=N}}A===void 0&&(m?A=new Vo:y?A=new cs({size:1,sizeAttenuation:!1}):A=new kS,A.name=E.name,A.flatShading=!E.smooth,A.vertexColors=v,t.materials[I]=A),_.push(A)}let S;if(_.length>1){for(let b=0,C=g.length;b<C;b++){const E=g[b];w.addGroup(E.groupStart,E.groupCount,b)}m?S=new ud(w,_):y?S=new Er(w,_):S=new un(w,_)}else m?S=new ud(w,_[0]):y?S=new Er(w,_[0]):S=new un(w,_[0]);S.name=d.name,o.add(S)}else if(t.vertices.length>0){const u=new cs({size:1,sizeAttenuation:!1}),h=new cn;h.setAttribute("position",new Zt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(h.setAttribute("color",new Zt(t.colors,3)),u.vertexColors=!0);const d=new Er(h,u);o.add(d)}return o}}const zi=class zi{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"threeCanvas");F(this,"scene");F(this,"camera");F(this,"renderer");F(this,"composer");F(this,"handGroup",null);F(this,"backgroundParticles",null);F(this,"pinchStrength",0);F(this,"baseScale",1);F(this,"currentModel","torus");F(this,"disposed",!1);F(this,"uniforms",{uTime:{value:0},uPinch:{value:0},uColor:{value:new J(0,.53,1)}});F(this,"bgUniforms",{uTime:{value:0},uColor:{value:new J(.5,.7,1)}});this.canvas=e,this.ctx=t,this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.scene=new ds;const i=this.threeCanvas.width/this.threeCanvas.height;this.camera=new Tn(50,i,.1,100),this.camera.position.z=10,this.renderer=new ps({canvas:this.threeCanvas,alpha:!0,antialias:!0}),this.renderer.setSize(this.threeCanvas.width,this.threeCanvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const s=new Zx(this.scene,this.camera),o=new Vs(new ut(this.threeCanvas.width,this.threeCanvas.height),3,1,0);this.composer=new Kx(this.renderer),this.composer.addPass(s),this.composer.addPass(o),this.createBackgroundDust(),this.createTorusGeometry(),console.log("💨 SmokeHandRenderer initialized")}static loadHandGeometry(){return zi.handGeometry||(zi.handGeometry=new Promise((e,t)=>{new oT().load(zi.HAND_MODEL_URL,i=>{const s=[];i.traverse(c=>{c instanceof un&&s.push(c)});const o=s[s.length-1];o!=null&&o.geometry?e(o.geometry):t(new Error("No mesh in the hand model"))},void 0,t)}),zi.handGeometry.catch(()=>{zi.handGeometry=null})),zi.handGeometry}createBackgroundDust(){const t=new Float32Array(6e3),i=new Float32Array(2e3*3);for(let c=0;c<2e3;c++)t[c*3]=(Math.random()-.5)*40,t[c*3+1]=(Math.random()-.5)*30,t[c*3+2]=-5-Math.random()*20,i[c*3]=Math.random(),i[c*3+1]=Math.random(),i[c*3+2]=Math.random();const s=new cn;s.setAttribute("position",new _n(t,3)),s.setAttribute("aRandom",new _n(i,3));const o=new ln({uniforms:this.bgUniforms,transparent:!0,depthWrite:!1,blending:ka,vertexShader:`
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
      `});this.backgroundParticles=new Er(s,o),this.scene.add(this.backgroundParticles)}createTorusGeometry(){const e=new Hd(1.5,.45,900,150);this.createParticleSystem(e)}createParticleSystem(e){this.handGroup&&this.scene.remove(this.handGroup),this.handGroup=new Na;const t=e.getAttribute("position").count,i=e.getAttribute("position").array,s=new Float32Array(t*3),o=new Float32Array(t*3);for(let d=0;d<t;d++)s[d*3]=i[d*3],s[d*3+1]=i[d*3+1],s[d*3+2]=i[d*3+2],o[d*3]=Math.random(),o[d*3+1]=Math.random(),o[d*3+2]=Math.random();const c=new cn;c.setAttribute("position",new _n(s,3)),c.setAttribute("aRandom",new _n(o,3)),c.setAttribute("aOriginalPos",new _n(i,3));const u=new ln({uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:ka,vertexShader:`
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
      `}),h=new Er(c,u);if(h.geometry.computeBoundingSphere(),h.geometry.boundingSphere){const d=h.geometry.boundingSphere.center;h.position.sub(d);const p=h.geometry.boundingSphere.radius;this.baseScale=2.5/p,this.handGroup.scale.set(this.baseScale,this.baseScale,this.baseScale)}this.handGroup.add(h),this.scene.add(this.handGroup)}render(e,t,i){const s=performance.now()*.001;this.uniforms.uTime.value=s,this.bgUniforms.uTime.value=s;const o=new Ye(t[0]||"#0088ff");this.uniforms.uColor.value.set(o.r,o.g,o.b);const c=new Ye(t[1]||t[0]||"#5588ff");this.bgUniforms.uColor.value.set(c.r*.5,c.g*.7,c.b);let u=0;if(e.right&&e.right.gesture==="open"&&e.right.landmarks){const h=e.right.landmarks,d=h[8],p=h[4],g=d.x*2-1,m=-(d.y*2-1),y=new J(g,m,.5);y.unproject(this.camera);const v=y.sub(this.camera.position).normalize(),w=(0-this.camera.position.z)/v.z,_=this.camera.position.clone().add(v.multiplyScalar(w));this.handGroup&&(this.handGroup.position.lerp(_,.15),this.handGroup.rotation.y=g*.8,this.handGroup.rotation.x=-m*.8);const S=d.x-p.x,b=d.y-p.y,C=Math.sqrt(S*S+b*b);u=rs.mapLinear(C,.02,.15,0,1),u=rs.clamp(u,0,1)}else if(e.left&&e.left.gesture==="open"&&e.left.landmarks){const h=e.left.landmarks,d=h[8],p=h[4],g=d.x*2-1,m=-(d.y*2-1),y=new J(g,m,.5);y.unproject(this.camera);const v=y.sub(this.camera.position).normalize(),w=(0-this.camera.position.z)/v.z,_=this.camera.position.clone().add(v.multiplyScalar(w));this.handGroup&&(this.handGroup.position.lerp(_,.15),this.handGroup.rotation.y=g*.8,this.handGroup.rotation.x=-m*.8);const S=d.x-p.x,b=d.y-p.y,C=Math.sqrt(S*S+b*b);u=rs.mapLinear(C,.02,.15,0,1),u=rs.clamp(u,0,1)}else this.handGroup&&(this.handGroup.rotation.y+=.005,this.handGroup.rotation.z=Math.sin(s*.5)*.1,this.handGroup.position.lerp(new J(0,0,0),.05));if(this.pinchStrength=rs.lerp(this.pinchStrength,u,.1),this.uniforms.uPinch.value=this.pinchStrength,this.handGroup){const h=this.baseScale*(1+this.pinchStrength*.5),d=this.handGroup.scale.x,p=rs.lerp(d,h,.1);this.handGroup.scale.set(p,p,p)}this.composer.render(),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}resize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer.setSize(e,t),this.threeCanvas.width=e,this.threeCanvas.height=t}setSmokeHandModel(e){if(this.currentModel!==e){if(this.currentModel=e,e==="torus"){this.createTorusGeometry();return}this.createTorusGeometry(),zi.loadHandGeometry().then(t=>{this.currentModel==="hand"&&!this.disposed&&this.createParticleSystem(t)},t=>{console.error("Hand model unavailable, staying on the torus:",t)})}}destroy(){this.disposed=!0,this.handGroup&&this.scene.remove(this.handGroup),this.backgroundParticles&&this.scene.remove(this.backgroundParticles),this.composer.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),console.log("💨 SmokeHandRenderer destroyed")}};F(zi,"handGeometry",null),F(zi,"HAND_MODEL_URL","https://raw.githubusercontent.com/NPC-88/3dfiles/195a81cd4607a3176f231766b5bd2dd4b4d216fb/16834_hand_v1_NEW.obj");let Gc=zi;class lT{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"lines",[]);F(this,"gridSpacing",30);F(this,"lineLength",22);F(this,"isClapping",!1);F(this,"clappingIntensity",0);this.canvas=e,this.ctx=t,this.initializeGrid(),console.log("✅ ThickLineRenderer initialized")}initializeGrid(){this.lines=[];const e=Math.ceil(this.canvas.width/this.gridSpacing)+1,t=Math.ceil(this.canvas.height/this.gridSpacing)+1;for(let i=0;i<t;i++)for(let s=0;s<e;s++)this.lines.push({x:s*this.gridSpacing,y:i*this.gridSpacing,length:this.lineLength,currentAngle:0,targetAngle:0,spinVelocity:0})}render(e,t){t[1]&&(t[1].toLowerCase()==="#ffffff"||t[1].toLowerCase()==="#fff")?this.ctx.fillStyle="#000000":this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),(this.lines.length===0||this.lines[0].x>this.canvas.width||this.lines[0].y>this.canvas.height)&&this.initializeGrid();let s=.12,o=0;const c=[];e.left&&c.push(e.left),e.right&&c.push(e.right),c.forEach(h=>{let d=h.fingerCount||2;h.gesture==="pinch"&&(d=1),o=Math.max(o,d)}),o===1?s=.03:o>=4&&(s=.25),e.clapping?this.isClapping||(this.isClapping=!0,this.clappingIntensity=1):this.isClapping=!1,this.clappingIntensity>0&&(this.clappingIntensity*=.95,this.clappingIntensity<.01&&(this.clappingIntensity=0));const u=t[0]||"#ffffff";this.lines.forEach(h=>{if(c.length>0){let p=0,g=0,m=0;c.forEach(y=>{var I,A;const v=(((I=y.position)==null?void 0:I.x)||.5)*this.canvas.width,w=(((A=y.position)==null?void 0:A.y)||.5)*this.canvas.height,_=v-h.x,S=w-h.y,C=1/(1+Math.sqrt(_*_+S*S)*.005),E=Math.atan2(S,_);g+=Math.cos(E)*C,m+=Math.sin(E)*C,p+=C}),p>0&&(h.targetAngle=Math.atan2(m,g))}else h.targetAngle=0;if(this.clappingIntensity>0)h.spinVelocity+=this.clappingIntensity*.8,h.currentAngle+=h.spinVelocity,h.spinVelocity*=.9;else{let p=h.targetAngle-h.currentAngle;for(;p>Math.PI;)p-=Math.PI*2;for(;p<-Math.PI;)p+=Math.PI*2;h.currentAngle+=p*s,h.spinVelocity=0}let d=2;if(c.length>0){let p=1/0;c.forEach(v=>{var b,C;const w=(((b=v.position)==null?void 0:b.x)||.5)*this.canvas.width,_=(((C=v.position)==null?void 0:C.y)||.5)*this.canvas.height,S=Math.hypot(w-h.x,_-h.y);S<p&&(p=S)});const g=35,m=2,y=600;if(p<y){const v=Math.pow(1-p/y,3);d=m+(g-m)*v}}this.ctx.save(),this.ctx.translate(h.x,h.y),this.ctx.rotate(h.currentAngle),this.ctx.fillStyle=u,this.ctx.fillRect(-h.length/2,-d/2,h.length,d),this.ctx.restore()})}}class cT{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"elements",[]);F(this,"gridSpacing",20);F(this,"elementLength",12);F(this,"elementWidth",3);F(this,"time",0);F(this,"isClapping",!1);this.canvas=e,this.ctx=t,this.initializeField(),console.log("✅ FlowFieldRenderer initialized")}initializeField(){this.elements=[];const e=Math.ceil(this.canvas.width/this.gridSpacing)+1,t=Math.ceil(this.canvas.height/this.gridSpacing)+1;for(let i=0;i<t;i++)for(let s=0;s<e;s++)this.elements.push({x:s*this.gridSpacing,y:i*this.gridSpacing,angle:Math.random()*Math.PI*2,velocity:0,targetAngle:0})}noise(e,t,i){return Math.sin(e*.01+i)+Math.sin(t*.01+i)+Math.sin((e+t)*.01+i)}render(e,t,i){const s=.01+(i?i.mid*.05:0);this.time+=s*ii(),t[4]&&t[4]+"",e.clapping?this.ctx.fillStyle="#222222":this.ctx.fillStyle="#000510",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),(this.elements.length===0||this.elements[0].x>this.canvas.width)&&this.initializeField();const o=[];e.left&&o.push(e.left),e.right&&o.push(e.right);const c=i?i.bass:0,u=i?i.high:0,h=i?i.beat:!1,d=this.elementLength*(1+c*1.5),p=this.elementWidth*(1+c*.5);this.ctx.save(),this.elements.forEach((g,m)=>{let v=this.noise(g.x,g.y,this.time)*Math.PI,w=null;if(u>.2&&(v+=(Math.random()-.5)*u),o.length>0){let S=0,b=0,C="none";if(o.forEach(E=>{var $,ee;const I=((($=E.position)==null?void 0:$.x)||.5)*this.canvas.width,A=(((ee=E.position)==null?void 0:ee.y)||.5)*this.canvas.height,N=I-g.x,T=A-g.y,U=Math.sqrt(N*N+T*T),z=Math.atan2(T,N),B=Math.max(0,1-U/800);if(B>b){b=B;const V=E.fingerCount??5;E.gesture==="pinch"?(S=z,C="pinch"):V<=2?(S=z+Math.PI/2,C="2fingers"):(S=z+Math.PI,C="5fingers")}}),b>.1){let E=S-v;for(;E>Math.PI;)E-=Math.PI*2;for(;E<-Math.PI;)E+=Math.PI*2;v+=E*(b*.95),b>.3&&(C==="pinch"?w=t[1]||"#ff00ff":C==="5fingers"?w=t[2]||"#00ffff":C==="2fingers"&&(w=t[0]||"#ffffff"))}}if(e.clapping||h){const S=this.canvas.width/2,b=this.canvas.height/2,C=g.x-S,E=g.y-b,I=Math.atan2(E,C),A=(e.clapping?.9:0)+(h?.4:0);if(A>0){let N=I-v;for(;N>Math.PI;)N-=Math.PI*2;for(;N<-Math.PI;)N+=Math.PI*2;v+=N*A,e.clapping&&(w="#ffffff")}}let _=v-g.angle;for(;_>Math.PI;)_-=Math.PI*2;for(;_<-Math.PI;)_+=Math.PI*2;g.angle+=_*.25,this.ctx.translate(g.x,g.y),this.ctx.rotate(g.angle),w?this.ctx.fillStyle=w:this.ctx.fillStyle=h&&Math.random()>.7?"#ffffff":t[0]||"#ffffff",this.ctx.fillRect(-d/2,-p/2,d,p),this.ctx.rotate(-g.angle),this.ctx.translate(-g.x,-g.y)}),this.ctx.restore()}}class uT{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"threeCanvas");F(this,"scene");F(this,"camera");F(this,"renderer");F(this,"material");F(this,"time",0);F(this,"hand1",new ut(.5,.5));F(this,"hand2",new ut(.5,.5));F(this,"h1Radius",.3);F(this,"h1Strength",0);F(this,"h2Radius",.3);F(this,"h2Strength",0);F(this,"vertexShader",`
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
  `);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.initThreeJS(),console.log("💧 LiquidChromeRenderer initialized"),console.warn=i}initThreeJS(){this.scene=new ds,this.camera=new Xa(-1,1,1,-1,0,1),this.renderer=new ps({canvas:this.threeCanvas,antialias:!1,alpha:!0}),this.renderer.setSize(this.canvas.width,this.canvas.height);const e=new Ar(2,2);this.material=new ln({vertexShader:this.vertexShader,fragmentShader:this.fragmentShader,uniforms:{uTime:{value:0},uResolution:{value:new ut(this.canvas.width,this.canvas.height)},uHand1Pos:{value:new ut(.5,.5)},uHand1Radius:{value:.3},uHand1Strength:{value:0},uHand2Pos:{value:new ut(.5,.5)},uHand2Radius:{value:.3},uHand2Strength:{value:0},uColor1:{value:new Ye(6514417)},uColor2:{value:new Ye(9133302)},uColor3:{value:new Ye(14239471)}}});const t=new un(e,this.material);this.scene.add(t)}getHandParams(e){return e?e.gesture==="pinch"?{radius:.15,strength:2.5}:(e.fingerCount!==void 0?e.fingerCount:5)<=2?{radius:.3,strength:1.5}:{radius:.6,strength:1}:{radius:.3,strength:0}}render(e,t){this.time+=.01*ii(),(this.threeCanvas.width!==this.canvas.width||this.threeCanvas.height!==this.canvas.height)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=this.canvas.width,this.threeCanvas.height=this.canvas.height,this.material.uniforms.uResolution.value.set(this.canvas.width,this.canvas.height)),this.material.uniforms.uTime.value=this.time;const i=this.canvas.width/this.canvas.height;if(e.clapping){const o=3+Math.sin(this.time*20)*.5;this.h1Radius+=(1.5-this.h1Radius)*.1,this.h1Strength+=(o-this.h1Strength)*.1,this.h2Radius+=(1.5-this.h2Radius)*.1,this.h2Strength+=(o-this.h2Strength)*.1}else{if(e.left){const s=this.getHandParams(e.left);this.h1Radius+=(s.radius-this.h1Radius)*.1,this.h1Strength+=(s.strength-this.h1Strength)*.1;const o=e.left.position.x*i*.8,c=(1-e.left.position.y)*.8;this.material.uniforms.uHand1Pos.value.set(o,c)}else this.h1Strength*=.9;if(e.right){const s=this.getHandParams(e.right);this.h2Radius+=(s.radius-this.h2Radius)*.1,this.h2Strength+=(s.strength-this.h2Strength)*.1;const o=e.right.position.x*i*.8,c=(1-e.right.position.y)*.8;this.material.uniforms.uHand2Pos.value.set(o,c)}else this.h2Strength*=.9}this.material.uniforms.uHand1Radius.value=this.h1Radius,this.material.uniforms.uHand1Strength.value=this.h1Strength,this.material.uniforms.uHand2Radius.value=this.h2Radius,this.material.uniforms.uHand2Strength.value=this.h2Strength,t&&t.length>=3&&(this.material.uniforms.uColor1.value.set(t[0]),this.material.uniforms.uColor2.value.set(t[1]),this.material.uniforms.uColor3.value.set(t[2])),this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0)}destroy(){this.renderer.dispose(),this.renderer.forceContextLoss(),this.material.dispose()}}class hT{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"rectangles",[]);F(this,"baseWidth",1920);F(this,"baseHeight",1080);F(this,"gridStructure",[]);this.canvas=e,this.ctx=t,this.createVariedLayout()}createVariedLayout(){[{x:0,y:0,w:480,h:360},{x:480,y:0,w:320,h:180},{x:800,y:0,w:320,h:180},{x:1120,y:0,w:400,h:180},{x:1520,y:0,w:400,h:180},{x:480,y:180,w:240,h:180},{x:720,y:180,w:240,h:180},{x:960,y:180,w:160,h:180},{x:1120,y:180,w:240,h:180},{x:1360,y:180,w:280,h:180},{x:1640,y:180,w:280,h:180},{x:0,y:360,w:120,h:360},{x:120,y:360,w:120,h:360},{x:240,y:360,w:120,h:360},{x:360,y:360,w:120,h:360},{x:480,y:360,w:320,h:360},{x:800,y:360,w:320,h:360},{x:1120,y:360,w:200,h:180},{x:1320,y:360,w:200,h:180},{x:1520,y:360,w:200,h:180},{x:1720,y:360,w:200,h:180},{x:1120,y:540,w:160,h:180},{x:1280,y:540,w:160,h:180},{x:1440,y:540,w:240,h:180},{x:1680,y:540,w:240,h:180},{x:0,y:720,w:160,h:360},{x:160,y:720,w:160,h:360},{x:320,y:720,w:160,h:360},{x:480,y:720,w:240,h:360},{x:720,y:720,w:240,h:360},{x:960,y:720,w:160,h:360},{x:1120,y:720,w:400,h:360},{x:1520,y:720,w:400,h:360}].forEach((t,i)=>{let s;const o=i%3;o===0?s="vertical":o===1?s="horizontal":s="vertical-reverse",this.rectangles.push({id:i,baseX:t.x,baseY:t.y,baseW:t.w,baseH:t.h,currentX:t.x,currentY:t.y,currentW:t.w,currentH:t.h,gradientDirection:s}),this.gridStructure.push({x:t.x,y:t.y,w:t.w,h:t.h,targetW:t.w,targetH:t.h})})}render(e,t){const i=this.ctx.createLinearGradient(0,0,0,this.canvas.height);i.addColorStop(0,t[2]||"#d9d9d9"),i.addColorStop(1,t[0]||"#1a00ff"),this.ctx.fillStyle=i,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let s=.15;if(e.left||e.right){const u=[];e.left&&u.push(e.left),e.right&&u.push(e.right);let h=0;u.forEach(d=>{let p=d.fingerCount||2;d.gesture==="pinch"&&(p=1),h=Math.max(h,p)}),h===1?s=.02:h===2?s=.15:h===3?s=.25:h===4?s=.35:h>=5&&(s=.5),this.rectangles.forEach((d,p)=>{this.gridStructure[p].targetW=d.baseW,this.gridStructure[p].targetH=d.baseH}),u.forEach(d=>{var y,v;const p=(((y=d.position)==null?void 0:y.x)||.5)*this.baseWidth,g=(((v=d.position)==null?void 0:v.y)||.5)*this.baseHeight,m=d.velocity||0;this.rectangles.forEach((w,_)=>{const S=w.baseX+w.baseW/2,b=w.baseY+w.baseH/2,C=p-S,E=g-b,I=Math.sqrt(C*C+E*E),N=Math.max(0,1-I/700);if(N>.1){const T=Math.atan2(E,C),U=1+N*.6,z=Math.min(m*.5,.4),D=U+Math.abs(Math.cos(T))*z,B=U+Math.abs(Math.sin(T))*z;this.gridStructure[_].targetW=w.baseW*D,this.gridStructure[_].targetH=w.baseH*B}})})}else this.rectangles.forEach((u,h)=>{this.gridStructure[h].targetW=u.baseW,this.gridStructure[h].targetH=u.baseH});this.gridStructure.forEach((u,h)=>{u.w+=(u.targetW-u.w)*s,u.h+=(u.targetH-u.h)*s}),this.normalizeGridPerfectly(),this.rectangles.forEach((u,h)=>{u.currentX=this.gridStructure[h].x,u.currentY=this.gridStructure[h].y,u.currentW=this.gridStructure[h].w,u.currentH=this.gridStructure[h].h});const o=this.canvas.width/this.baseWidth,c=this.canvas.height/this.baseHeight;this.rectangles.forEach(u=>{this.drawRectangle(u,o,c,t)})}normalizeGridPerfectly(){const e=new Map;this.rectangles.forEach((c,u)=>{const h=Math.round(c.baseY/10)*10;e.has(h)||e.set(h,[]),e.get(h).push(u)});const t=Array.from(e.entries()).sort((c,u)=>c[0]-u[0]).map(c=>c[1]);t.forEach(c=>{c.sort((p,g)=>this.rectangles[p].baseX-this.rectangles[g].baseX);const u=c.reduce((p,g)=>p+this.gridStructure[g].w,0),h=this.baseWidth/u;c.forEach(p=>{this.gridStructure[p].w*=h});let d=0;c.forEach(p=>{this.gridStructure[p].x=d,d+=this.gridStructure[p].w})});let i=0;t.forEach(c=>{const u=Math.max(...c.map(h=>this.gridStructure[h].h));c.forEach(h=>{this.gridStructure[h].y=i,this.gridStructure[h].h=u}),i+=u});const s=i,o=this.baseHeight/s;i=0,t.forEach(c=>{const u=this.gridStructure[c[0]].h*o;c.forEach(h=>{this.gridStructure[h].y=i,this.gridStructure[h].h=u}),i+=u})}drawRectangle(e,t,i,s){this.ctx.save();const o=e.currentX*t,c=e.currentY*i,u=e.currentW*t,h=e.currentH*i;let d;e.gradientDirection==="vertical"?(d=this.ctx.createLinearGradient(o,c,o,c+h),d.addColorStop(0,s[2]||"#d9d9d9"),d.addColorStop(1,s[0]||"#1a00ff")):e.gradientDirection==="vertical-reverse"?(d=this.ctx.createLinearGradient(o,c,o,c+h),d.addColorStop(0,s[0]||"#1a00ff"),d.addColorStop(1,s[2]||"#d9d9d9")):(d=this.ctx.createLinearGradient(o,c,o+u,c),d.addColorStop(0,s[2]||"#d9d9d9"),d.addColorStop(1,s[0]||"#1a00ff")),this.ctx.fillStyle=d,this.ctx.fillRect(o,c,u,h),this.ctx.restore()}}class fT{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"threeCanvas");F(this,"scene");F(this,"camera");F(this,"renderer");F(this,"linesMesh");F(this,"pointsMesh");F(this,"gridPoints");F(this,"edges");F(this,"originalToSortedMap");F(this,"time",0);F(this,"interactionLevel",.5);F(this,"handX",.5);F(this,"handY",.5);F(this,"GRID_SIZE",10);F(this,"SPACING",1.5);F(this,"TOTAL_POINTS",1e3);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.initThreeJS(),console.log("🕸️ NetworkCubeRenderer initialized"),console.warn=i}initThreeJS(){this.scene=new ds,this.scene.fog=new Ko(0,.06),this.camera=new Tn(75,this.canvas.width/this.canvas.height,.1,1e3),this.camera.position.z=20,this.renderer=new ps({canvas:this.threeCanvas,antialias:!0,alpha:!0}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=this.GRID_SIZE*this.GRID_SIZE*this.GRID_SIZE;this.gridPoints=new Float32Array(e*3);const t=[],i=(this.GRID_SIZE-1)*this.SPACING*.5,s=(v,w,_)=>v+w*this.GRID_SIZE+_*this.GRID_SIZE*this.GRID_SIZE;let o=0;for(let v=0;v<this.GRID_SIZE;v++)for(let w=0;w<this.GRID_SIZE;w++)for(let _=0;_<this.GRID_SIZE;_++){this.gridPoints[o++]=_*this.SPACING-i+(Math.random()-.5)*.3,this.gridPoints[o++]=w*this.SPACING-i+(Math.random()-.5)*.3,this.gridPoints[o++]=v*this.SPACING-i+(Math.random()-.5)*.3;const b=s(_,w,v);_<this.GRID_SIZE-1&&t.push(b,s(_+1,w,v)),w<this.GRID_SIZE-1&&t.push(b,s(_,w+1,v)),v<this.GRID_SIZE-1&&t.push(b,s(_,w,v+1)),Math.random()>.8&&_<this.GRID_SIZE-1&&w<this.GRID_SIZE-1&&t.push(b,s(_+1,w+1,v))}this.edges=new Int32Array(t);const c=new Int32Array(e);for(let v=0;v<e;v++)c[v]=v;for(let v=e-1;v>0;v--){const w=Math.floor(Math.random()*(v+1));[c[v],c[w]]=[c[w],c[v]]}const u=new Float32Array(e*3);this.originalToSortedMap=new Int32Array(e);for(let v=0;v<e;v++){const w=c[v];this.originalToSortedMap[w]=v,u[v*3]=this.gridPoints[w*3],u[v*3+1]=this.gridPoints[w*3+1],u[v*3+2]=this.gridPoints[w*3+2]}const h=new cn;h.setAttribute("position",new _n(u,3));const d=new cs({color:16777215,size:.15,transparent:!0,opacity:.9,sizeAttenuation:!0});this.pointsMesh=new Er(h,d),this.scene.add(this.pointsMesh);const p=new cn,g=this.edges.length*3,m=new Float32Array(g);p.setAttribute("position",new _n(m,3));const y=new Vo({color:65535,transparent:!0,opacity:.2,blending:ka});this.linesMesh=new ud(p,y),this.linesMesh.frustumCulled=!1,this.scene.add(this.linesMesh)}updateLogic(e,t){let i=0;const s=e.left||e.right;s?(this.handX+=(s.position.x-this.handX)*.1,this.handY+=(s.position.y-this.handY)*.1,e.clapping?i=1.2:s.gesture==="pinch"?i=.05:i=.2+(s.fingerCount||0)/5*.8):(this.handX+=(.5-this.handX)*.05,this.handY+=(.5-this.handY)*.05,i=.3+Math.sin(this.time*.5)*.1),this.interactionLevel+=(i-this.interactionLevel)*.08;const o=t?t.bass:0,c=t?t.high:0,u=Math.max(0,Math.min(1.5,this.interactionLevel+o*.3)),h=this.pointsMesh.geometry.attributes.position.count,d=50,p=Math.floor(d+u*(h-d));this.pointsMesh.geometry.setDrawRange(0,p);const g=this.linesMesh.geometry.attributes.position.array;let m=0;for(let S=0;S<this.edges.length;S+=2){const b=this.edges[S],C=this.edges[S+1],E=this.originalToSortedMap[b],I=this.originalToSortedMap[C];if(E<p&&I<p){const A=b*3,N=C*3;g[m++]=this.gridPoints[A],g[m++]=this.gridPoints[A+1],g[m++]=this.gridPoints[A+2],g[m++]=this.gridPoints[N],g[m++]=this.gridPoints[N+1],g[m++]=this.gridPoints[N+2]}}this.linesMesh.geometry.setDrawRange(0,m/3),this.linesMesh.geometry.attributes.position.needsUpdate=!0;const y=.6+u*.8;this.scene.rotation.y+=.002+u*.005;const v=(this.handY-.5)*1.5,w=(this.handX-.5)*1.5;this.scene.rotation.x+=(v-this.scene.rotation.x)*.1,this.scene.rotation.z+=(w-this.scene.rotation.z)*.1,this.pointsMesh.scale.setScalar(y),this.linesMesh.scale.setScalar(y);const _=this.pointsMesh.material;_.size=.15+c*.1}render(e,t,i){this.time+=.02*ii();const s=this.renderer.getPixelRatio(),o=Math.floor(this.canvas.width*s),c=Math.floor(this.canvas.height*s);(this.threeCanvas.width!==o||this.threeCanvas.height!==c)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=o,this.threeCanvas.height=c,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix()),this.updateLogic(e,i);const u=new Ye(t[0]||"#ffffff"),h=new Ye(t[1]||"#888888");this.pointsMesh.material.color.lerp(u,.1),this.linesMesh.material.color.lerp(h,.1),this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){Zc(this.scene,this.renderer)}}class dT{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"threeCanvas");F(this,"scene");F(this,"camera");F(this,"renderer");F(this,"mesh");F(this,"points");F(this,"originalPositions");F(this,"currentPositions");F(this,"velocities");F(this,"time",0);F(this,"handX",.5);F(this,"handY",.5);F(this,"isHandPresent",!1);F(this,"pinchStrength",0);F(this,"ROWS",30);F(this,"COLS",30);F(this,"SIZE",12);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.initThreeJS(),console.log("🕸️ ElasticNetRenderer initialized"),console.warn=i}initThreeJS(){this.scene=new ds,this.scene.fog=new Ko(0,.08),this.camera=new Tn(75,this.canvas.width/this.canvas.height,.1,1e3),this.camera.position.z=8,this.renderer=new ps({canvas:this.threeCanvas,antialias:!0,alpha:!0}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=new Ar(this.SIZE,this.SIZE,this.COLS,this.ROWS),t=e.attributes.position,i=t.count;this.originalPositions=new Float32Array(i*3),this.currentPositions=new Float32Array(i*3),this.velocities=new Float32Array(i*3);for(let c=0;c<i*3;c++)this.originalPositions[c]=t.array[c],this.currentPositions[c]=t.array[c],this.velocities[c]=0;const s=new Yc({color:65535,wireframe:!0,transparent:!0,opacity:.3,side:Bi});this.mesh=new un(e,s),this.scene.add(this.mesh);const o=new cs({color:16777215,size:.15,transparent:!0,opacity:.8});this.points=new Er(e,o),this.scene.add(this.points)}updatePhysics(e,t){const i=this.mesh.geometry.attributes.position,s=i.count,o=t?t.bass:0,c=t?t.high:0,u=t?t.mid:0;let h=0,d=0,p=0;const g=e.left||e.right;g?(this.isHandPresent=!0,h=(g.position.x-.5)*12,d=-(g.position.y-.5)*10,g.gesture==="pinch"?(this.pinchStrength+=(1-this.pinchStrength)*.1,p=-25):(g.fingerCount||5)>=5?(this.pinchStrength+=(0-this.pinchStrength)*.1,p=15):(this.pinchStrength+=(0-this.pinchStrength)*.1,p=5)):(this.isHandPresent=!1,this.pinchStrength+=(0-this.pinchStrength)*.1);const m=c*.05;for(let y=0;y<s;y++){const v=y*3,w=y*3+1,_=y*3+2,S=this.originalPositions[v],b=this.originalPositions[w],C=this.originalPositions[_];let E=this.currentPositions[v],I=this.currentPositions[w],A=this.currentPositions[_];const N=.05+this.pinchStrength*.2,T=(S-E)*N,U=(b-I)*N,z=(C-A)*N;if(this.velocities[v]+=T,this.velocities[w]+=U,this.velocities[_]+=z,this.isHandPresent){const Z=E-h,K=I-d,X=A,re=Z*Z+K*K+X*X,j=Math.sqrt(re),O=4+o*2;if(j<O){const G=1-j/O,pe=Z/j,Me=K/j,ye=X/j,te=p*G*.2;this.velocities[v]+=pe*te,this.velocities[w]+=Me*te,this.velocities[_]+=ye*te}}const D=this.time*(1+u),B=Math.sin(w*.1+D)*.02,$=Math.cos(v*.1+D)*.02,ee=Math.sin(v*.1+w*.1+D)*.02;this.velocities[v]+=B,this.velocities[w]+=$,this.velocities[_]+=ee,c>.1&&(this.velocities[v]+=(Math.random()-.5)*m,this.velocities[w]+=(Math.random()-.5)*m,this.velocities[_]+=(Math.random()-.5)*m);const V=.9-this.pinchStrength*.05;this.velocities[v]*=V,this.velocities[w]*=V,this.velocities[_]*=V,this.currentPositions[v]+=this.velocities[v],this.currentPositions[w]+=this.velocities[w],this.currentPositions[_]+=this.velocities[_],i.setXYZ(y,this.currentPositions[v],this.currentPositions[w],this.currentPositions[_])}i.needsUpdate=!0}render(e,t,i){this.time+=.01*ii();const s=this.renderer.getPixelRatio(),o=Math.floor(this.canvas.width*s),c=Math.floor(this.canvas.height*s);(this.threeCanvas.width!==o||this.threeCanvas.height!==c)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=o,this.threeCanvas.height=c,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix()),this.updatePhysics(e,i);const u=new Ye(t[0]||"#00ffff"),h=new Ye(t[1]||"#ff00ff"),d=this.mesh.material;d.color.lerp(u,.1),d.opacity=.2+((i==null?void 0:i.bass)||0)*.3;const p=this.points.material;p.color.lerp(h,.1),p.size=.1+((i==null?void 0:i.high)||0)*.2,this.camera.position.x=Math.sin(this.time*.2)*.5,this.camera.position.y=Math.cos(this.time*.2)*.5,this.camera.lookAt(0,0,0),this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){Zc(this.scene,this.renderer)}}const md={chaos:{idle:.06,range:.45,openness:.6,velocity:.4,clap:.5,audio:.3,ease:.03},strips:{base:10,chaos:20,blocks:5,blocksChaos:15},speed:{base:.05,variation:.1,chaos:.35}};class pT{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"threeCanvas");F(this,"scene");F(this,"camera");F(this,"renderer");F(this,"composer");F(this,"material");F(this,"plane");F(this,"chaosLevel",0);F(this,"cfg",md);F(this,"uniforms",{uTime:{value:0},uColor1:{value:new J(.5,0,1)},uColor2:{value:new J(0,0,0)},uColor3:{value:new J(.8,.9,1)},uChaos:{value:0},uStrips:{value:10},uStripsChaos:{value:20},uBlocks:{value:5},uBlocksChaos:{value:15},uSpeedBase:{value:.05},uSpeedVar:{value:.1},uSpeedChaos:{value:.35},uAudioLow:{value:0},uAudioMid:{value:0},uAudioHigh:{value:0}});F(this,"geometry",new Ar(20,12));this.canvas=e,this.ctx=t,this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.scene=new ds,this.camera=new Tn(75,e.width/e.height,.1,100),this.camera.position.z=2,this.renderer=new ps({canvas:this.threeCanvas,alpha:!0,antialias:!0}),this.renderer.setSize(e.width,e.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.material=new ln({uniforms:this.uniforms,vertexShader:`
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
      `,side:Bi});const i=new Ar(20,12);this.plane=new un(i,this.material),this.scene.add(this.plane);const s=new Zx(this.scene,this.camera),o=new Vs(new ut(e.width,e.height),1.5,.4,.85);this.composer=new Kx(this.renderer),this.composer.addPass(s),this.composer.addPass(o),console.log("📼 DigitalBlockRenderer initialized")}setParams(e){this.cfg=Wi(md,e)}render(e,t,i){(this.threeCanvas.width!==this.canvas.width||this.threeCanvas.height!==this.canvas.height)&&(this.threeCanvas.width=this.canvas.width,this.threeCanvas.height=this.canvas.height,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.canvas.width,this.canvas.height,!1),this.composer.setSize(this.canvas.width,this.canvas.height));const s=performance.now()*.001;this.uniforms.uTime.value=s;const o=i?i.bass:0,c=i?i.mid:0,u=i?i.high:0;this.uniforms.uAudioLow.value=rs.lerp(this.uniforms.uAudioLow.value,o,.2),this.uniforms.uAudioMid.value=c,this.uniforms.uAudioHigh.value=u;const h=this.cfg.chaos,d=e.right??e.left;let p=h.idle;if(d){const y=d.fingerCount??(d.gesture==="open"?5:0),v=Math.min(1,Math.max(0,y/5)),w=Math.min(1,Math.max(0,d.velocity??0));p=h.idle+(v*h.openness+w*h.velocity)*h.range}else o>.6&&(p=h.idle+o*h.audio);e.clapping&&(p+=h.clap*(e.clapIntensity??1)),p=Math.min(h.range,p),this.chaosLevel=rs.lerp(this.chaosLevel,p,h.ease),this.uniforms.uChaos.value=this.chaosLevel;const g=this.cfg.strips,m=this.cfg.speed;if(this.uniforms.uStrips.value=g.base,this.uniforms.uStripsChaos.value=g.chaos,this.uniforms.uBlocks.value=g.blocks,this.uniforms.uBlocksChaos.value=g.blocksChaos,this.uniforms.uSpeedBase.value=m.base,this.uniforms.uSpeedVar.value=m.variation,this.uniforms.uSpeedChaos.value=m.chaos,t&&t.length>=3){const y=new Ye(t[0]),v=new Ye(t[3]||"#000000"),w=new Ye(t[1]);this.uniforms.uColor1.value.lerp(new J(y.r,y.g,y.b),.1),this.uniforms.uColor2.value.lerp(new J(v.r,v.g,v.b),.1),this.uniforms.uColor3.value.lerp(new J(w.r,w.g,w.b),.1)}this.composer.render(),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){var e;this.composer.dispose(),(e=this.geometry)==null||e.dispose(),this.material.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),console.log("📼 DigitalBlockRenderer destroyed")}}const gd={stamp:{radius:.075,strength:.55,fingerScale:.45,audioSwell:.5},field:{decay:.965,spread:1.6},refraction:{amount:.09,dispersion:.35},highlight:{amount:.9,sharpness:3.5,tint:.35},fallback:{fieldBrightness:.85}},mT=`#version 300 es
out vec2 vUv;
void main() {
  // 0,0 / 2,0 / 0,2 — one oversized triangle, clipped to the viewport.
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,gT=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTex;
uniform vec2 uResolution;
uniform float uTime;
`;function qg(a,e,t){const i=a.createShader(e);if(!i)throw new Error("Could not create shader");if(a.shaderSource(i,t),a.compileShader(i),!a.getShaderParameter(i,a.COMPILE_STATUS)){const s=a.getShaderInfoLog(i);a.deleteShader(i);const o=t.split(`
`).map((c,u)=>`${String(u+1).padStart(3)} | ${c}`).join(`
`);throw new Error(`Shader failed to compile: ${s}
${o}`)}return i}function ui(a,e){const t=qg(a,a.VERTEX_SHADER,mT),i=qg(a,a.FRAGMENT_SHADER,gT+e),s=a.createProgram();if(!s)throw new Error("Could not create program");if(a.attachShader(s,t),a.attachShader(s,i),a.linkProgram(s),a.deleteShader(t),a.deleteShader(i),!a.getProgramParameter(s,a.LINK_STATUS)){const o=a.getProgramInfoLog(s);throw a.deleteProgram(s),new Error(`Program failed to link: ${o}`)}return s}function ss(a,e,t){const i=a.createTexture();a.bindTexture(a.TEXTURE_2D,i),a.texImage2D(a.TEXTURE_2D,0,a.RGBA8,e,t,0,a.RGBA,a.UNSIGNED_BYTE,null),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);const s=a.createFramebuffer();return a.bindFramebuffer(a.FRAMEBUFFER,s),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,i,0),a.bindFramebuffer(a.FRAMEBUFFER,null),{framebuffer:s,texture:i,width:e,height:t}}function as(a,e,t,i){e.width===t&&e.height===i||(a.bindTexture(a.TEXTURE_2D,e.texture),a.texImage2D(a.TEXTURE_2D,0,a.RGBA8,t,i,0,a.RGBA,a.UNSIGNED_BYTE,null),e.width=t,e.height=i)}function os(a,e){a.deleteFramebuffer(e.framebuffer),a.deleteTexture(e.texture)}function zn(a,e,t,i){a.bindFramebuffer(a.FRAMEBUFFER,e?e.framebuffer:null),a.viewport(0,0,e?e.width:t,e?e.height:i),a.drawArrays(a.TRIANGLES,0,3)}function pn(a,e,t,i,s){a.activeTexture(a.TEXTURE0+s),a.bindTexture(a.TEXTURE_2D,i),a.uniform1i(a.getUniformLocation(e,t),s)}const Wc=10,xT=`
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
}`,vT=`
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
}`;class _T{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"glCanvas");F(this,"gl");F(this,"cfg",gd);F(this,"fieldProgram");F(this,"refractProgram");F(this,"fields");F(this,"ping",0);F(this,"videoTexture");F(this,"video",null);this.canvas=e,this.ctx=t,this.glCanvas=document.createElement("canvas"),this.glCanvas.width=e.width,this.glCanvas.height=e.height;const i=this.glCanvas.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1});if(!i)throw new Error("WebGL2 is not available");this.gl=i,this.fieldProgram=ui(i,xT),this.refractProgram=ui(i,vT),this.fields=[ss(i,e.width,e.height),ss(i,e.width,e.height)],this.videoTexture=i.createTexture(),i.bindTexture(i.TEXTURE_2D,this.videoTexture),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}setParams(e){this.cfg=Wi(gd,e)}setVideoElement(e){this.video=e}collectStamps(e,t){const i=1+((t==null?void 0:t.bass)??0)*this.cfg.stamp.audioSwell,s=this.cfg.stamp.radius*i,o=[];for(const c of[e.left,e.right]){if(!c||o.length/3>=Wc)continue;o.push(c.position.x,1-c.position.y,s);const u=c.landmarks;if(u&&this.cfg.stamp.fingerScale>0)for(const h of[8,12,16,20]){if(o.length/3>=Wc)break;const d=u[h];d&&o.push(d.x,1-d.y,s*this.cfg.stamp.fingerScale)}}return o}render(e,t,i){const s=this.gl,o=this.canvas.width,c=this.canvas.height;if(o===0||c===0)return;(this.glCanvas.width!==o||this.glCanvas.height!==c)&&(this.glCanvas.width=o,this.glCanvas.height=c,as(s,this.fields[0],o,c),as(s,this.fields[1],o,c));const u=this.fields[this.ping];this.ping^=1;const h=this.fields[this.ping],d=this.collectStamps(e,i),p=i!=null&&i.beat?1+(i.beatIntensity??0):1;s.useProgram(this.fieldProgram),s.uniform2f(s.getUniformLocation(this.fieldProgram,"uResolution"),o,c),pn(s,this.fieldProgram,"uField",u.texture,0),s.uniform1i(s.getUniformLocation(this.fieldProgram,"uStampCount"),d.length/3),d.length>0&&s.uniform3fv(s.getUniformLocation(this.fieldProgram,"uStamps"),d),s.uniform1f(s.getUniformLocation(this.fieldProgram,"uDecay"),this.cfg.field.decay),s.uniform1f(s.getUniformLocation(this.fieldProgram,"uSpread"),this.cfg.field.spread),s.uniform1f(s.getUniformLocation(this.fieldProgram,"uStrength"),this.cfg.stamp.strength*p),zn(s,h,o,c);const g=this.video&&this.video.readyState>=2&&this.video.videoWidth>0;g&&(s.bindTexture(s.TEXTURE_2D,this.videoTexture),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!0),s.texImage2D(s.TEXTURE_2D,0,s.RGBA,s.RGBA,s.UNSIGNED_BYTE,this.video));const m=yT(t[0]??"#ffffff");s.useProgram(this.refractProgram),s.uniform2f(s.getUniformLocation(this.refractProgram,"uResolution"),o,c),pn(s,this.refractProgram,"uField",h.texture,0),pn(s,this.refractProgram,"uVideo",this.videoTexture,1),s.uniform1f(s.getUniformLocation(this.refractProgram,"uHasVideo"),g?1:0),s.uniform3f(s.getUniformLocation(this.refractProgram,"uColor"),m[0],m[1],m[2]),s.uniform1f(s.getUniformLocation(this.refractProgram,"uRefract"),this.cfg.refraction.amount),s.uniform1f(s.getUniformLocation(this.refractProgram,"uDispersion"),this.cfg.refraction.dispersion),s.uniform1f(s.getUniformLocation(this.refractProgram,"uGloss"),this.cfg.highlight.amount),s.uniform1f(s.getUniformLocation(this.refractProgram,"uSharpness"),this.cfg.highlight.sharpness),s.uniform1f(s.getUniformLocation(this.refractProgram,"uTint"),this.cfg.highlight.tint),s.uniform1f(s.getUniformLocation(this.refractProgram,"uFieldBrightness"),this.cfg.fallback.fieldBrightness),zn(s,null,o,c),this.ctx.clearRect(0,0,o,c),this.ctx.drawImage(this.glCanvas,0,0,o,c)}destroy(){var t;const e=this.gl;e.deleteProgram(this.fieldProgram),e.deleteProgram(this.refractProgram),e.deleteTexture(this.videoTexture),os(e,this.fields[0]),os(e,this.fields[1]),(t=e.getExtension("WEBGL_lose_context"))==null||t.loseContext()}}function yT(a){const e=a.replace("#","");return e.length<6?[1,1,1]:[parseInt(e.slice(0,2),16)/255,parseInt(e.slice(2,4),16)/255,parseInt(e.slice(4,6),16)/255]}const xd={mode:0,type:{fit:.82,weight:700,tracking:.08,outline:0,strokeWidth:1.5},grid:{columns:14,rows:26,spread:1,breathe:0,breatheSpeed:.4},mask:{reach:.18,threshold:.5,softness:.25,invert:0},radial:{strength:.6,power:2,pulse:.5,pulseSpeed:.5},wave:{amplitude:.12,frequency:1.5,speed:1,scaleWave:0},depth:{speed:.35,spread:1.4,curve:1.6,size:.1,horizon:.12,steps:18},scatter:{amount:.6,spiral:0,stagger:.35,drift:.5,size:.12},color:{rainbow:0,step:37,cycleSpeed:.3},motion:{handInfluence:1},audio:{bassScale:.3,beatKick:.5},trail:{fadeAlpha:1}},Yg="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",ST=1400;class Go{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"cfg",xd);F(this,"text","N4TH");F(this,"aim",{x:.5,y:.5});F(this,"targets",[]);this.canvas=e,this.ctx=t}setParams(e){this.cfg=Wi(xd,e)}setText(e){const t=e.trim()||"N4TH";t!==this.text&&(this.text=t,this.targets=[])}static noise(e){const t=Math.sin(e*12.9898)*43758.5453;return t-Math.floor(t)}colorFor(e,t,i){const{color:s}=this.cfg;return s.rainbow>=.5?`hsl(${(e*s.step+t*s.cycleSpeed*60)%360}, 100%, 62%)`:i[e%Math.max(1,i.length)]??"#ffffff"}stamp(e,t,i,s,o=1,c=this.text,u=this.cfg.type.tracking){const{ctx:h,cfg:d}=this;h.globalAlpha=Math.min(1,Math.max(0,o)),h.font=`${Math.round(d.type.weight)} ${Math.max(1,i)}px ${Yg}`;try{h.letterSpacing=`${u}em`}catch{}d.type.outline>=.5?(h.strokeStyle=s,h.lineWidth=Math.max(.5,d.type.strokeWidth),h.strokeText(c,e,t)):(h.fillStyle=s,h.fillText(c,e,t)),h.globalAlpha=1}fitSize(e,t){const{ctx:i,cfg:s}=this;i.font=`${Math.round(s.type.weight)} 100px ${Yg}`;try{i.letterSpacing=`${s.type.tracking}em`}catch{}const o=i.measureText(e).width;return o>0?t/o*100:10}handPoints(e){const t=[];for(const i of[e.left,e.right]){if(!i)continue;t.push(i.position);const s=i.landmarks;if(s)for(const o of[4,8,12,16,20]){const c=s[o];c&&t.push({x:c.x,y:c.y})}}return t}render(e,t,i){const{ctx:s,cfg:o}=this,c=this.canvas.width,u=this.canvas.height;if(c===0||u===0)return;s.globalCompositeOperation="source-over",s.fillStyle=o.trail.fadeAlpha>=1?"#000":`#000000${ei(o.trail.fadeAlpha*255)}`,s.fillRect(0,0,c,u);const h=jc(),d=(i==null?void 0:i.bass)??0,p=i!=null&&i.beat?o.audio.beatKick:0,g=this.handPoints(e);if(g.length>0){const y=g.reduce((w,_)=>w+_.x,0)/g.length,v=g.reduce((w,_)=>w+_.y,0)/g.length;this.aim.x+=(y-this.aim.x)*.08,this.aim.y+=(v-this.aim.y)*.08}const m=1+d*o.audio.bassScale;switch(s.textAlign="center",s.textBaseline="middle",s.lineJoin="round",Math.round(o.mode)){case 1:this.radial(c,u,m,h,p,t);break;case 2:this.wave(c,u,m,h,p,t);break;case 3:this.depth(c,u,m,h,p,t);break;case 4:this.scatter(c,u,m,h,p,t);break;default:this.mask(c,u,m,h,g,t);break}}spacing(e,t,i){const{cfg:s}=this,o=1+Math.sin(i*s.grid.breatheSpeed)*s.grid.breathe,c=Math.max(1,Math.round(s.grid.columns)),u=Math.max(1,Math.round(s.grid.rows)),h=s.grid.spread*o;return{cols:c,rows:Math.min(u,Math.max(1,Math.floor(ST/c))),dx:e/c*h,dy:t/u*h}}mask(e,t,i,s,o,c){const{cfg:u}=this,{cols:h,rows:d,dx:p,dy:g}=this.spacing(e,t,s),m=this.fitSize(this.text,p*u.type.fit)*i,y=Math.max(.01,u.mask.reach),v=e/t;let w=0;for(let _=0;_<d;_++)for(let S=0;S<h;S++,w++){const b=(S+.5)/h,C=(_+.5)/d;let E=0;for(const z of o){const D=(b-z.x)*v,B=C-z.y;E+=Math.exp(-((D*D+B*B)/(y*y)))}const I=u.mask.softness*.5,A=I<=0?E>u.mask.threshold?1:0:Math.min(1,Math.max(0,(E-(u.mask.threshold-I))/(I*2))),N=u.mask.invert>=.5?1-A:A;if(N<=.02)continue;const T=(S+.5)*p+(e-h*p)/2,U=(_+.5)*g+(t-d*g)/2;this.stamp(T,U,m,this.colorFor(w,s,c),N)}}radial(e,t,i,s,o,c){const{cfg:u}=this,{cols:h,rows:d,dx:p,dy:g}=this.spacing(e,t,s),m=this.fitSize(this.text,p*u.type.fit)*i,y=(u.radial.strength+o)*(1+Math.sin(s*u.radial.pulseSpeed)*u.radial.pulse),v=.5+(this.aim.x-.5)*u.motion.handInfluence,w=.5+(this.aim.y-.5)*u.motion.handInfluence;let _=0;for(let S=0;S<d;S++)for(let b=0;b<h;b++,_++){const C=(b+.5)/h,E=(S+.5)/d,I=C-v,A=E-w,N=Math.min(1,Math.hypot(I,A)*1.42),T=1+Math.pow(N,u.radial.power)*y,U=(v+I*T)*e,z=(w+A*T)*t;U<-p||U>e+p||z<-g||z>t+g||this.stamp(U,z,m,this.colorFor(_,s,c))}}wave(e,t,i,s,o,c){const{cfg:u}=this,{cols:h,rows:d,dx:p,dy:g}=this.spacing(e,t,s),m=this.fitSize(this.text,p*u.type.fit)*i,y=e*u.wave.amplitude*(1+o),v=(this.aim.y-.5)*2*u.motion.handInfluence;let w=0;for(let _=0;_<d;_++){const S=_/Math.max(1,d)*u.wave.frequency*Math.PI*2,b=Math.sin(S+s*u.wave.speed+v)*y,C=1+Math.sin(S+s*u.wave.speed)*u.wave.scaleWave;for(let E=0;E<h;E++,w++){const I=(E+.5)*p+(e-h*p)/2+b,A=(_+.5)*g+(t-d*g)/2,N=(I%e+e)%e;this.stamp(N,A,m*C,this.colorFor(w,s,c))}}}depth(e,t,i,s,o,c){const{cfg:u}=this,h=t*u.depth.size*i,d=Math.max(2,Math.round(u.depth.steps)),p=s*u.depth.speed,g=t*(u.depth.horizon+(this.aim.y-.5)*u.motion.handInfluence*.3);for(let m=0;m<d;m++){const y=((m/d+p)%1+1)%1,v=Math.pow(y,u.depth.curve),w=v*(1+o),_=g+v*(t-g)*1.1;_>t+h||w<=.001||this.stamp(e/2,_,Math.max(1,h*w),this.colorFor(m,s,c),Math.min(1,.25+v),this.text,u.type.tracking+v*u.depth.spread)}}scatter(e,t,i,s,o,c){const{cfg:u}=this,h=[...this.text];if(h.length===0)return;this.targets.length!==h.length&&(this.targets=h.map((y,v)=>({x:Go.noise(v*3.7+1),y:Go.noise(v*7.1+2),seed:Go.noise(v*11.3+3)})));const d=Math.max(2,t*u.scatter.size*i),p=Math.min(1,Math.max(0,u.scatter.amount+o+(this.aim.x-.5)*u.motion.handInfluence)),g=d*(.62+u.type.tracking),m=g*h.length;h.forEach((y,v)=>{const w=this.targets[v],_=v*u.scatter.stagger*.1,S=Math.min(1,Math.max(0,p-_)),b=e/2-m/2+g*(v+.5),C=t/2;let E,I;if(u.scatter.spiral>=.5){const A=v/h.length*Math.PI*6+s*u.scatter.drift,N=(.1+v/h.length*.4)*Math.min(e,t);E=e/2+Math.cos(A)*N,I=t/2+Math.sin(A)*N}else{const A=s*u.scatter.drift+w.seed*Math.PI*2;E=(.08+w.x*.84)*e+Math.cos(A)*e*.05,I=(.08+w.y*.84)*t+Math.sin(A)*t*.05}this.stamp(b+(E-b)*S,C+(I-C)*S,d,this.colorFor(v,s,c),1,y)})}}const vd={frame:{zoom:1,spreadZoom:.5,handDrift:.12,mirror:0},slice:{count:12,offset:.06,speed:.8,beatKick:1.5},look:{tint:0,gain:1},trail:{fadeAlpha:1}};class MT{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"cfg",vd);F(this,"video",null);F(this,"url",null);F(this,"drift",{x:0,y:0});this.canvas=e,this.ctx=t}setParams(e){this.cfg=Wi(vd,e)}setClipUrl(e){var i;if(e===this.url||(this.url=e,(i=this.video)==null||i.pause(),this.video=null,!e))return;const t=document.createElement("video");t.src=e,t.loop=!0,t.muted=!0,t.playsInline=!0,t.play().catch(()=>{}),this.video=t}destroy(){var e;(e=this.video)==null||e.pause(),this.video=null}render(e,t,i){const{ctx:s,cfg:o}=this,c=this.canvas.width,u=this.canvas.height;if(c===0||u===0)return;o.trail.fadeAlpha>=1?(s.globalCompositeOperation="source-over",s.fillStyle="#000",s.fillRect(0,0,c,u)):(s.fillStyle=`#000000${ei(o.trail.fadeAlpha*255)}`,s.fillRect(0,0,c,u));const h=this.video;if(!(h&&h.readyState>=2&&h.videoWidth>0)){s.fillStyle=`${t[0]??"#ffffff"}66`,s.font="500 14px ui-monospace, monospace",s.textAlign="center",s.fillText(this.url?"LOADING CLIP…":"NO CLIP — UPLOAD ONE IN THE LIBRARY",c/2,u/2);return}const p=[e.left,e.right].filter(Boolean);let g=0,m=0;if(p.length>0){const T=p.reduce((z,D)=>z+D.position.x,0)/p.length,U=p.reduce((z,D)=>z+D.position.y,0)/p.length;g=(T-.5)*2,m=(U-.5)*2}this.drift.x+=(g-this.drift.x)*.1,this.drift.y+=(m-this.drift.y)*.1;const y=e.distanceBetweenHands??.4,v=Math.max(.05,o.frame.zoom*(1+(y-.4)*o.frame.spreadZoom)),w=Math.max(c/h.videoWidth,u/h.videoHeight),_=h.videoWidth*w*v,S=h.videoHeight*w*v,b=(c-_)/2+this.drift.x*c*o.frame.handDrift,C=(u-S)/2+this.drift.y*u*o.frame.handDrift,E=jc(),I=i!=null&&i.beat?o.slice.beatKick:1,A=Math.max(1,Math.round(o.slice.count)),N=u/A;s.save(),o.frame.mirror>=.5&&(s.translate(c,0),s.scale(-1,1));for(let T=0;T<A;T++){const U=T/A*Math.PI*2,z=A<2?0:Math.sin(E*o.slice.speed+U)*c*o.slice.offset*I*(1+Math.abs(this.drift.x)),D=T*N;s.save(),s.beginPath(),s.rect(0,D,c,N+1),s.clip(),s.drawImage(h,b+z,C,_,S),s.restore()}s.restore(),o.look.tint>0&&(s.globalCompositeOperation="overlay",s.fillStyle=`${t[0]??"#ffffff"}${ei(o.look.tint*255)}`,s.fillRect(0,0,c,u),s.globalCompositeOperation="source-over"),o.look.gain>1&&(s.globalCompositeOperation="lighter",s.globalAlpha=Math.min(1,o.look.gain-1),s.drawImage(this.canvas,0,0),s.globalAlpha=1,s.globalCompositeOperation="source-over")}}const _d={mode:0,grid:{columns:48,cellAspect:1.15,fill:.95,spreadDensity:.35},tone:{brightness:0,contrast:1.3,floor:.08,invert:0},letters:{ramp:0,weight:600,outline:0},shape:{rotate:0,anchor:0,minimum:.05},warp:{handPush:.04,ripple:0,rippleSpeed:.6},colour:{fromSource:0,spread:1},audio:{bassScale:.35,beatKick:.25},trail:{fadeAlpha:1}},$g="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",mf=" .:-=+*#%@",gf=6e3;class wT{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"cfg",_d);F(this,"url",null);F(this,"kind","video");F(this,"video",null);F(this,"image",null);F(this,"failed",!1);F(this,"sampler");F(this,"samplerCtx");F(this,"text","N4TH");F(this,"aim",{x:.5,y:.5});this.canvas=e,this.ctx=t,this.sampler=document.createElement("canvas"),this.samplerCtx=this.sampler.getContext("2d",{willReadFrequently:!0})}setParams(e){this.cfg=Wi(_d,e)}setText(e){this.text=e.trim()||"N4TH"}setClipUrl(e,t="video"){var s;if(e===this.url&&t===this.kind||(this.url=e,this.kind=t,this.failed=!1,(s=this.video)==null||s.pause(),this.video=null,this.image=null,!e))return;if(t==="image"){const o=new Image;o.onerror=()=>{this.failed=!0},o.src=e,this.image=o;return}const i=document.createElement("video");i.src=e,i.loop=!0,i.muted=!0,i.playsInline=!0,i.onerror=()=>{this.failed=!0},i.play().catch(()=>{}),this.video=i}destroy(){var e;(e=this.video)==null||e.pause(),this.video=null,this.image=null}source(){const{video:e,image:t}=this;return e&&e.readyState>=2&&e.videoWidth>0?{el:e,w:e.videoWidth,h:e.videoHeight}:t&&t.complete&&t.naturalWidth>0?{el:t,w:t.naturalWidth,h:t.naturalHeight}:null}notice(e,t,i){const{ctx:s}=this;s.fillStyle=`${i[0]??"#ffffff"}66`,s.font="500 14px ui-monospace, monospace",s.textAlign="center",s.textBaseline="middle",s.fillText(this.failed?"THAT FILE WOULD NOT OPEN":this.url?"LOADING…":"NO FILE — UPLOAD ONE IN THE LIBRARY",e/2,t/2)}colorFor(e,t,i,s,o){const{colour:c}=this.cfg,u=Math.max(1,Math.round(c.spread)),h=o[Math.floor(e/u)%Math.max(1,o.length)]??"#ffffff";if(c.fromSource<=0)return h;if(c.fromSource>=1)return`rgb(${t}, ${i}, ${s})`;const d=h.replace("#",""),p=d.length===3?d.split("").map(_=>_+_).join(""):d,g=parseInt(p.slice(0,2),16)||0,m=parseInt(p.slice(2,4),16)||0,y=parseInt(p.slice(4,6),16)||0,v=c.fromSource,w=(_,S)=>Math.round(_+(S-_)*v);return`rgb(${w(g,t)}, ${w(m,i)}, ${w(y,s)})`}render(e,t,i){const{ctx:s,cfg:o}=this,c=this.canvas.width,u=this.canvas.height;if(c===0||u===0)return;s.globalCompositeOperation="source-over",s.fillStyle=o.trail.fadeAlpha>=1?"#000":`#000000${ei(o.trail.fadeAlpha*255)}`,s.fillRect(0,0,c,u);const h=this.source();if(!h){this.notice(c,u,t);return}const d=[e.left,e.right].filter(Boolean);if(d.length>0){const ee=d.reduce((Z,K)=>Z+K.position.x,0)/d.length,V=d.reduce((Z,K)=>Z+K.position.y,0)/d.length;this.aim.x+=(ee-this.aim.x)*.08,this.aim.y+=(V-this.aim.y)*.08}const g=1-((e.distanceBetweenHands??.4)-.4)*o.grid.spreadDensity;let m=Math.max(2,Math.round(o.grid.columns*Math.max(.25,g)));const v=c/m*Math.max(.2,o.grid.cellAspect);let w=Math.max(2,Math.round(u/v));m*w>gf&&(w=Math.max(2,Math.floor(gf/m)),m=Math.max(2,Math.min(m,Math.floor(gf/w))));const _=this.samplerCtx;if(!_)return;(this.sampler.width!==m||this.sampler.height!==w)&&(this.sampler.width=m,this.sampler.height=w);const S=Math.max(m/h.w,w/h.h),b=h.w*S,C=h.h*S;_.drawImage(h.el,(m-b)/2,(w-C)/2,b,C);let E;try{E=_.getImageData(0,0,m,w).data}catch{this.notice(c,u,t);return}const I=jc(),A=(i==null?void 0:i.bass)??0,N=i!=null&&i.beat?o.audio.beatKick:0,T=1+A*o.audio.bassScale+N,U=Math.round(o.mode),z=this.text,D=c/m,B=u/w,$=Math.min(D,B)*o.grid.fill*T;if(s.textAlign="center",s.textBaseline="middle",s.lineJoin="round",U===0){s.font=`${Math.round(o.letters.weight)} 100px ${$g}`;const ee=s.measureText("M").width||60,V=Math.max(1,D*o.grid.fill*T/(ee/100));s.font=`${Math.round(o.letters.weight)} ${V}px ${$g}`,s.lineWidth=Math.max(.5,V*.06)}for(let ee=0;ee<w;ee++)for(let V=0;V<m;V++){const Z=(ee*m+V)*4,K=E[Z],X=E[Z+1],re=E[Z+2];let j=(.2126*K+.7152*X+.0722*re)/255;if(j=(j-.5)*o.tone.contrast+.5+o.tone.brightness,o.tone.invert>=.5&&(j=1-j),j=Math.min(1,Math.max(0,j)),j<=o.tone.floor)continue;const O=(j-o.tone.floor)/(1-o.tone.floor);let G=(V+.5)*D,pe=(ee+.5)*B;if(o.warp.handPush!==0&&d.length>0){const te=G/c-this.aim.x,ge=pe/u-this.aim.y,me=Math.exp(-(te*te+ge*ge)*8);G+=te*me*c*o.warp.handPush,pe+=ge*me*u*o.warp.handPush}o.warp.ripple!==0&&(pe+=Math.sin(V*.35+I*o.warp.rippleSpeed)*B*o.warp.ripple);const Me=ee*m+V,ye=this.colorFor(Me,K,X,re,t);switch(U){case 1:{const te=$/2*Math.max(o.shape.minimum,O);s.fillStyle=ye,s.beginPath(),s.arc(G,pe,te,0,Math.PI*2),s.fill();break}case 2:{const te=$*Math.max(o.shape.minimum,O);s.fillStyle=ye,o.shape.rotate!==0?(s.save(),s.translate(G,pe),s.rotate(o.shape.rotate*Math.PI*.25),s.fillRect(-te/2,-te/2,te,te),s.restore()):s.fillRect(G-te/2,pe-te/2,te,te);break}case 3:{const te=Math.max(1,D*o.grid.fill*.6),ge=B*o.grid.fill*T*Math.max(o.shape.minimum,O),me=o.shape.anchor>=.5?(ee+1)*B-ge+(pe-(ee+.5)*B):pe-ge/2;s.fillStyle=ye,s.fillRect(G-te/2,me,te,ge);break}default:{const te=o.letters.ramp>=.5?z[Me%z.length]:mf[Math.min(mf.length-1,Math.round(O*(mf.length-1)))];if(!te||te===" ")break;o.letters.outline>=.5?(s.strokeStyle=ye,s.strokeText(te,G,pe)):(s.globalAlpha=o.letters.ramp>=.5?O:1,s.fillStyle=ye,s.fillText(te,G,pe),s.globalAlpha=1);break}}}}}function Qx(a,e,t,i){var o,c;let s;switch(a){case"geometric":s=new L0(e,t);break;case"particles":s=new ty(e,t);break;case"waves":s=new ny(e,t);break;case"glitch":s=new iy(e,t);break;case"technical":s=new ry(e,t);break;case"lottie":s=new sy(e,t);break;case"lottie-classic":s=new hT(e,t);break;case"linefield":s=new cy(e,t);break;case"thicklines":s=new lT(e,t);break;case"flowfield":s=new cT(e,t);break;case"liquidchrome":s=new uT(e,t);break;case"chromatic":s=new ay(e,t);break;case"halftone":s=new oy(e,t);break;case"matrix":s=new ly(e,t);break;case"distortedcamera":s=new XE(e,t),i&&((o=s.setVideoElement)==null||o.call(s,i));break;case"cyberstream":s=new jE(e,t);break;case"facecloud":s=new qE(e,t);break;case"face":s=new pd(e,t);break;case"morphing":s=new YE(e,t);break;case"cubewall":s=new $E(e,t);break;case"smokehand-torus":s=new Gc(e,t);break;case"smokehand-hand":s=new Gc(e,t),(c=s.setSmokeHandModel)==null||c.call(s,"hand");break;case"network-cube":s=new fT(e,t);break;case"elastic-net":s=new dT(e,t);break;case"text":s=new Go(e,t);break;case"video":s=new MT(e,t);break;case"mosaic":s=new wT(e,t);break;case"ripple":s=new _T(e,t);break;case"digitalblocks":s=new pT(e,t);break;default:s=new L0(e,t);break}return s}const $o={master:{enabled:1},transition:{enabled:1,duration:.6},feedback:{enabled:1,mix:1,amount:0,zoom:1,rotate:0,offsetX:0,offsetY:0,hueShift:0},colour:{enabled:1,mix:1,hue:0,saturation:1},displace:{enabled:1,mix:1,amount:0,scale:3,speed:.2},rgbSplit:{enabled:1,mix:1,amount:0},kaleido:{enabled:1,mix:1,segments:0,spin:0},quantize:{enabled:1,mix:1,pixel:0,levels:0},bloom:{enabled:1,mix:1,amount:0,threshold:.6}},Wd=`
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
`,bT=`${Wd}
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
}`,ET=`${Wd}
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
}`,TT=`
uniform float uAmount;
uniform float uMix;

void main() {
  vec2 dir = (vUv - 0.5) * uAmount;
  vec3 wet = vec3(
    texture(uTex, clamp(vUv + dir, 0.0, 1.0)).r,
    texture(uTex, vUv).g,
    texture(uTex, clamp(vUv - dir, 0.0, 1.0)).b);
  fragColor = vec4(mix(texture(uTex, vUv).rgb, wet, uMix), 1.0);
}`,CT=`
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
}`,AT=`
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
}`,RT=`
uniform float uThreshold;

void main() {
  vec3 c = texture(uTex, vUv).rgb;
  float luma = dot(c, vec3(0.2126, 0.7152, 0.0722));
  float keep = smoothstep(uThreshold, uThreshold + 0.25, luma);
  fragColor = vec4(c * keep, 1.0);
}`,PT=`
uniform vec2 uDirection;

void main() {
  vec2 texel = uDirection / uResolution;
  vec3 sum = texture(uTex, vUv).rgb * 0.2270270270;
  sum += texture(uTex, clamp(vUv + texel * 1.3846153846, 0.0, 1.0)).rgb * 0.3162162162;
  sum += texture(uTex, clamp(vUv - texel * 1.3846153846, 0.0, 1.0)).rgb * 0.3162162162;
  sum += texture(uTex, clamp(vUv + texel * 3.2307692308, 0.0, 1.0)).rgb * 0.0702702703;
  sum += texture(uTex, clamp(vUv - texel * 3.2307692308, 0.0, 1.0)).rgb * 0.0702702703;
  fragColor = vec4(sum, 1.0);
}`,LT=`
uniform sampler2D uBloom;
uniform float uAmount;
uniform float uMix;

void main() {
  vec3 base = texture(uTex, vUv).rgb;
  vec3 glow = texture(uBloom, vUv).rgb * uAmount;
  fragColor = vec4(mix(base, base + glow, uMix), 1.0);
}`,IT=`
uniform sampler2D uNext;
uniform float uMix;

void main() {
  fragColor = vec4(mix(texture(uTex, vUv).rgb, texture(uNext, vUv).rgb, uMix), 1.0);
}`,NT=`
void main() {
  fragColor = vec4(texture(uTex, vUv).rgb, 1.0);
}`,UT=`${Wd}
uniform float uHue;
uniform float uSaturation;
uniform float uMix;

void main() {
  vec3 src = texture(uTex, vUv).rgb;
  vec3 wet = hueRotate(src, uHue);
  float grey = dot(wet, vec3(0.299, 0.587, 0.114));
  wet = mix(vec3(grey), wet, uSaturation);
  fragColor = vec4(mix(src, clamp(wet, 0.0, 1.0), uMix), 1.0);
}`;function is(a,e){return a.enabled>=.5&&a.mix>0&&e}function FT(a){const e=Wi($o,a);return e.master.enabled<.5?!1:is(e.colour,e.colour.hue!==0||e.colour.saturation!==1)||is(e.feedback,e.feedback.amount>0)||is(e.displace,e.displace.amount>0)||is(e.rgbSplit,e.rgbSplit.amount>0)||is(e.kaleido,e.kaleido.segments>=2)||is(e.quantize,e.quantize.pixel>1||e.quantize.levels>=2)||is(e.bloom,e.bloom.amount>0)}class DT{constructor(e){F(this,"gl");F(this,"cfg",$o);F(this,"programs",{});F(this,"sourceTexture");F(this,"previousTexture");F(this,"blendTarget");F(this,"targets");F(this,"feedback");F(this,"bloomTargets");F(this,"width",1);F(this,"height",1);F(this,"ping",0);F(this,"feedbackPrimed",!1);const t=e.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,powerPreference:"high-performance"});if(!t)throw new Error("WebGL2 is not available");this.gl=t,this.programs={colour:ui(t,UT),copy:ui(t,NT),feedback:ui(t,bT),displace:ui(t,ET),rgbSplit:ui(t,TT),kaleido:ui(t,CT),quantize:ui(t,AT),blend:ui(t,IT),bloomBright:ui(t,RT),bloomBlur:ui(t,PT),bloomComposite:ui(t,LT)},t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),this.sourceTexture=t.createTexture(),this.previousTexture=t.createTexture();for(const i of[this.sourceTexture,this.previousTexture])t.bindTexture(t.TEXTURE_2D,i),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE);this.blendTarget=ss(t,1,1),this.targets=[ss(t,1,1),ss(t,1,1)],this.feedback=ss(t,1,1),this.bloomTargets=[ss(t,1,1),ss(t,1,1)]}setParams(e){this.cfg=Wi($o,e)}live(e,t){return this.cfg.master.enabled>=.5&&is(e,t)}get active(){const e=this.cfg;return e.master.enabled<.5?!1:this.live(e.colour,e.colour.hue!==0||e.colour.saturation!==1)||this.live(e.feedback,e.feedback.amount>0)||this.live(e.displace,e.displace.amount>0)||this.live(e.rgbSplit,e.rgbSplit.amount>0)||this.live(e.kaleido,e.kaleido.segments>=2)||this.live(e.quantize,e.quantize.pixel>1||e.quantize.levels>=2)||this.live(e.bloom,e.bloom.amount>0)}resize(e,t){if(this.width===e&&this.height===t)return;const i=this.gl;this.width=e,this.height=t,as(i,this.targets[0],e,t),as(i,this.targets[1],e,t),as(i,this.feedback,e,t),as(i,this.blendTarget,e,t),as(i,this.bloomTargets[0],Math.max(1,e>>1),Math.max(1,t>>1)),as(i,this.bloomTargets[1],Math.max(1,e>>1),Math.max(1,t>>1)),this.feedbackPrimed=!1}use(e,t=this.width,i=this.height,s=0){const o=this.gl,c=this.programs[e];return o.useProgram(c),o.uniform2f(o.getUniformLocation(c,"uResolution"),t,i),o.uniform1f(o.getUniformLocation(c,"uTime"),s),c}next(){return this.ping^=1,this.targets[this.ping]}render(e,t,i,s=1){const o=this.gl,c=e.width,u=e.height;if(c===0||u===0)return;const h=o.canvas;(h.width!==c||h.height!==u)&&(h.width=c,h.height=u),this.resize(c,u),o.bindTexture(o.TEXTURE_2D,this.sourceTexture),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,o.RGBA,o.UNSIGNED_BYTE,e);let d=this.sourceTexture;if(i&&s<1&&i.width===c&&i.height===u){o.bindTexture(o.TEXTURE_2D,this.previousTexture),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,o.RGBA,o.UNSIGNED_BYTE,i);const v=this.use("blend");pn(o,v,"uTex",this.previousTexture,0),pn(o,v,"uNext",this.sourceTexture,1),o.uniform1f(o.getUniformLocation(v,"uMix"),s),zn(o,this.blendTarget,c,u),d=this.blendTarget.texture}if(!this.active){this.feedbackPrimed&&(this.feedbackPrimed=!1);const v=this.use("copy");pn(o,v,"uTex",d,0),zn(o,null,c,u);return}const p=this.cfg;let g=d,m;if(this.live(p.colour,p.colour.hue!==0||p.colour.saturation!==1)){const v=this.use("colour");pn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uHue"),p.colour.hue),o.uniform1f(o.getUniformLocation(v,"uSaturation"),p.colour.saturation),o.uniform1f(o.getUniformLocation(v,"uMix"),p.colour.mix),m=this.next(),zn(o,m,c,u),g=m.texture}if(this.live(p.feedback,p.feedback.amount>0)){const v=this.use("feedback");pn(o,v,"uTex",g,0),pn(o,v,"uFeedback",this.feedback.texture,1),o.uniform1f(o.getUniformLocation(v,"uAmount"),this.feedbackPrimed?p.feedback.amount:0),o.uniform1f(o.getUniformLocation(v,"uZoom"),p.feedback.zoom),o.uniform1f(o.getUniformLocation(v,"uRotate"),p.feedback.rotate),o.uniform2f(o.getUniformLocation(v,"uOffset"),p.feedback.offsetX,p.feedback.offsetY),o.uniform1f(o.getUniformLocation(v,"uHueShift"),p.feedback.hueShift),o.uniform1f(o.getUniformLocation(v,"uMix"),p.feedback.mix),m=this.next(),zn(o,m,c,u),g=m.texture}if(this.live(p.displace,p.displace.amount>0)){const v=this.use("displace",c,u,t);pn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uAmount"),p.displace.amount),o.uniform1f(o.getUniformLocation(v,"uScale"),p.displace.scale),o.uniform1f(o.getUniformLocation(v,"uSpeed"),p.displace.speed),o.uniform1f(o.getUniformLocation(v,"uMix"),p.displace.mix),m=this.next(),zn(o,m,c,u),g=m.texture}if(this.live(p.rgbSplit,p.rgbSplit.amount>0)){const v=this.use("rgbSplit");pn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uAmount"),p.rgbSplit.amount),o.uniform1f(o.getUniformLocation(v,"uMix"),p.rgbSplit.mix),m=this.next(),zn(o,m,c,u),g=m.texture}if(this.live(p.kaleido,p.kaleido.segments>=2)){const v=this.use("kaleido");pn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uSegments"),Math.round(p.kaleido.segments)),o.uniform1f(o.getUniformLocation(v,"uSpin"),p.kaleido.spin),o.uniform1f(o.getUniformLocation(v,"uMix"),p.kaleido.mix),m=this.next(),zn(o,m,c,u),g=m.texture}if(this.live(p.quantize,p.quantize.pixel>1||p.quantize.levels>=2)){const v=this.use("quantize");pn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uPixel"),p.quantize.pixel),o.uniform1f(o.getUniformLocation(v,"uLevels"),p.quantize.levels),o.uniform1f(o.getUniformLocation(v,"uMix"),p.quantize.mix),m=this.next(),zn(o,m,c,u),g=m.texture}this.live(p.bloom,p.bloom.amount>0)&&(g=this.renderBloom(g,c,u));const y=this.use("copy");pn(o,y,"uTex",g,0),zn(o,this.feedback,c,u),this.feedbackPrimed=!0,pn(o,y,"uTex",g,0),zn(o,null,c,u)}renderBloom(e,t,i){const s=this.gl,o=this.bloomTargets,c=o[0].width,u=o[0].height;let h=this.use("bloomBright",c,u);pn(s,h,"uTex",e,0),s.uniform1f(s.getUniformLocation(h,"uThreshold"),this.cfg.bloom.threshold),zn(s,o[0],c,u),h=this.use("bloomBlur",c,u),pn(s,h,"uTex",o[0].texture,0),s.uniform2f(s.getUniformLocation(h,"uDirection"),1,0),zn(s,o[1],c,u),h=this.use("bloomBlur",c,u),pn(s,h,"uTex",o[1].texture,0),s.uniform2f(s.getUniformLocation(h,"uDirection"),0,1),zn(s,o[0],c,u),h=this.use("bloomComposite"),pn(s,h,"uTex",e,0),pn(s,h,"uBloom",o[0].texture,1),s.uniform1f(s.getUniformLocation(h,"uAmount"),this.cfg.bloom.amount),s.uniform1f(s.getUniformLocation(h,"uMix"),this.cfg.bloom.mix);const d=this.next();return zn(s,d,t,i),d.texture}destroy(){var t;const e=this.gl;for(const i of Object.values(this.programs))e.deleteProgram(i);e.deleteTexture(this.sourceTexture),e.deleteTexture(this.previousTexture),os(e,this.blendTarget),os(e,this.targets[0]),os(e,this.targets[1]),os(e,this.feedback),os(e,this.bloomTargets[0]),os(e,this.bloomTargets[1]),(t=e.getExtension("WEBGL_lose_context"))==null||t.loseContext()}}const kT="screen";function Kg(a,e){return a.duration<=0?1:Math.min(1,(e-a.fadeStart)/1e3/a.duration)}function OT({handData:a,layerColors:e,layers:t,videoElement:i,audioData:s,layerParams:o,fxParams:c,content:u,motion:h,onCanvasReady:d}){const p=ue.useRef(null),g=ue.useRef(null),m=ue.useRef(d);m.current=d;const y=ue.useCallback($=>{var ee;p.current=$,(ee=m.current)==null||ee.call(m,$)},[]),v=ue.useRef(null),w=ue.useRef(null),[_,S]=ue.useState(!1),b=ue.useRef([]),C=ue.useRef(t),E=ue.useRef(null),I=ue.useRef(a),A=ue.useRef(e),N=ue.useRef(i??null),T=ue.useRef(s),U=ue.useRef(o),z=ue.useRef(c),D=ue.useRef(u),B=ue.useRef(h);return ue.useEffect(()=>{I.current=a,A.current=e,N.current=i??null,T.current=s,U.current=o,C.current=t,z.current=c,D.current=u,B.current=h},[a,e,i,s,o,t,c,u,h]),ue.useEffect(()=>{var $,ee,V,Z;for(const K of b.current){if(!K)continue;const X=u.clips[K.current.pattern];(ee=($=K.current.renderer).setText)==null||ee.call($,u.text),(Z=(V=K.current.renderer).setClipUrl)==null||Z.call(V,(X==null?void 0:X.url)??null,X==null?void 0:X.kind)}},[u]),ue.useEffect(()=>{b.current.forEach(($,ee)=>{var V,Z;(Z=$==null?void 0:(V=$.current.renderer).setParams)==null||Z.call(V,(o==null?void 0:o[ee])??{})})},[o]),ue.useEffect(()=>{var $;($=v.current)==null||$.setParams(c??{})},[c]),ue.useEffect(()=>{const $=p.current;if(!$)return;if(_){w.current=$.getContext("2d");return}let ee=null;try{ee=new DT($),ee.setParams(z.current??{}),v.current=ee}catch(V){console.error("Post pipeline unavailable, falling back to direct output:",V),v.current=null,S(!0)}return()=>{ee==null||ee.destroy(),v.current=null}},[_]),ue.useEffect(()=>{const $=document.createElement("canvas");E.current=$.getContext("2d");const ee=()=>{const j=window.innerWidth,O=window.innerHeight;$.width=j,$.height=O;for(const pe of b.current)for(const Me of[pe==null?void 0:pe.current,pe==null?void 0:pe.outgoing])Me&&(Me.canvas.width=j,Me.canvas.height=O);const G=p.current;G&&!v.current&&(G.width=j,G.height=O)};ee(),window.addEventListener("resize",ee);const V=(j,O)=>{var G,pe;try{N.current&&((pe=(G=j.renderer).setVideoElement)==null||pe.call(G,N.current));const Me=C.current[O];j.renderer.render(I.current,A.current[O]??A.current[0]??[],T.current,Me==null?void 0:Me.colorMode)}catch(Me){j.reportedError||(j.reportedError=!0,console.error(`Renderer "${j.pattern}" threw while drawing:`,Me))}};let Z=!1;const K=(j,O)=>{j.globalCompositeOperation="source-over",j.globalAlpha=1,j.fillStyle="#000",j.fillRect(0,0,j.canvas.width,j.canvas.height),b.current.forEach((G,pe)=>{var ge;if(!G)return;const Me=pe===0,ye=((ge=C.current[pe])==null?void 0:ge.opacity)??1;if(ye<=0)return;j.globalCompositeOperation=Me?"source-over":kT;const te=G.outgoing?Kg(G.outgoing,O):1;G.outgoing&&(j.globalAlpha=ye*(Me?1:1-te),j.drawImage(G.outgoing.canvas,0,0)),j.globalAlpha=ye*te,j.drawImage(G.current.canvas,0,0)}),j.globalAlpha=1,j.globalCompositeOperation="source-over"};let X=performance.now();const re=()=>{const j=performance.now(),O=E.current,G=Math.min(.1,(j-X)/1e3);if(X=j,ey(G,B.current),b.current.forEach((pe,Me)=>{var ye,te;pe&&(V(pe.current,Me),pe.outgoing&&(Kg(pe.outgoing,j)>=1?((te=(ye=pe.outgoing.renderer).destroy)==null||te.call(ye),pe.outgoing=null):V(pe.outgoing,Me)))}),O&&b.current.length>0){K(O,j);const pe=v.current;if(pe)try{pe.render(O.canvas,j/1e3)}catch(Me){Z||(Z=!0,console.error("Post pipeline threw while presenting:",Me))}else w.current&&w.current.drawImage(O.canvas,0,0)}g.current=requestAnimationFrame(re)};return re(),()=>{var j,O,G,pe,Me;window.removeEventListener("resize",ee),g.current&&cancelAnimationFrame(g.current);for(const ye of b.current)(G=(j=ye==null?void 0:ye.outgoing)==null?void 0:(O=j.renderer).destroy)==null||G.call(O),(Me=ye==null?void 0:(pe=ye.current.renderer).destroy)==null||Me.call(pe);b.current=[],E.current=null}},[]),ue.useEffect(()=>{var K,X,re,j,O;const $=b.current,ee=Wi($o,z.current??{}).transition,V=ee.enabled>=.5?ee.duration:0,Z=(G,pe)=>{var me,Ae,We,tt;const Me=document.createElement("canvas");Me.width=window.innerWidth,Me.height=window.innerHeight;const ye=Me.getContext("2d");if(!ye)return null;let te;try{te=Qx(G,Me,ye,N.current)}catch(Pt){return console.error("Failed to create renderer for pattern:",G,Pt),null}(Ae=te.setParams)==null||Ae.call(te,((me=U.current)==null?void 0:me[pe])??{}),(We=te.setText)==null||We.call(te,D.current.text);const ge=D.current.clips[G];return(tt=te.setClipUrl)==null||tt.call(te,(ge==null?void 0:ge.url)??null,ge==null?void 0:ge.kind),{renderer:te,canvas:Me,pattern:G}};t.forEach(({pattern:G},pe)=>{var te,ge,me,Ae,We;const Me=$[pe];if((Me==null?void 0:Me.current.pattern)===G)return;const ye=Z(G,pe);if(ye){if(!Me){$[pe]={current:ye,outgoing:null};return}(me=(te=Me.outgoing)==null?void 0:(ge=te.renderer).destroy)==null||me.call(ge),V>0?Me.outgoing={...Me.current,fadeStart:performance.now(),duration:V}:((We=(Ae=Me.current.renderer).destroy)==null||We.call(Ae),Me.outgoing=null),Me.current=ye}});for(const G of $.splice(t.length))(re=(K=G==null?void 0:G.outgoing)==null?void 0:(X=K.renderer).destroy)==null||re.call(X),(O=G==null?void 0:(j=G.current.renderer).destroy)==null||O.call(j)},[t.map($=>$.pattern).join("|")]),W.jsx("canvas",{ref:y,className:"absolute inset-0 w-full h-full z-0"},_?"fallback-2d":"pipeline-gl")}function zT({onAudioData:a,onStream:e,enabled:t,sensitivity:i}){const s=ue.useRef(null),o=ue.useRef(null),c=ue.useRef(null),u=ue.useRef(null),h=ue.useRef(null),d=ue.useRef([]),p=ue.useRef(0),[g,m]=ue.useState(null),y=ue.useRef(e);y.current=e;const v=ue.useRef(i);return v.current=i,ue.useEffect(()=>{let w=!1;const _=()=>{var E;w=!0,h.current!==null&&(cancelAnimationFrame(h.current),h.current=null),u.current&&(u.current.getTracks().forEach(I=>I.stop()),u.current=null,(E=y.current)==null||E.call(y,null));const C=s.current;s.current=null,C&&C.state!=="closed"&&C.close(),o.current=null,c.current=null};if(!t){_(),a({bass:0,mid:0,high:0,overall:0,beat:!1,beatIntensity:0});return}const S=async()=>{var C;try{const E=await navigator.mediaDevices.getUserMedia({audio:!0});if(w){E.getTracks().forEach(z=>z.stop());return}u.current=E,(C=y.current)==null||C.call(y,E);const I=new AudioContext;s.current=I;const A=I.createAnalyser();A.fftSize=2048,A.smoothingTimeConstant=.8,o.current=A,I.createMediaStreamSource(E).connect(A);const T=A.frequencyBinCount,U=new Uint8Array(T);c.current=U,m(null),b()}catch(E){if(w)return;m("Microphone access denied"),console.error("Audio initialization error:",E)}},b=()=>{if(!o.current||!c.current)return;o.current.getByteFrequencyData(c.current);const C=c.current,E=C.length,I=Math.floor(E*.12),A=Math.floor(E*.4);let N=0,T=0,U=0,z=0;for(let O=0;O<E;O++){const G=C[O];z+=G,O<I?N+=G:O<A?T+=G:U+=G}const D=v.current,B=Math.min(1,N/(I*255)*(1+D)),$=Math.min(1,T/((A-I)*255)*(1+D)),ee=Math.min(1,U/((E-A)*255)*(1+D)),V=Math.min(1,z/(E*255)*(1+D)),Z=Date.now(),K=.6*D;d.current.push(B),d.current.length>10&&d.current.shift();const X=d.current.reduce((O,G)=>O+G,0)/d.current.length,re=B>X*1.5&&B>K&&Z-p.current>300;re&&(p.current=Z);const j=re?Math.min(1,(B-X)/X):0;a({bass:B,mid:$,high:ee,overall:V,beat:re,beatIntensity:j}),h.current=requestAnimationFrame(b)};return S(),_},[t,a]),g?W.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500/20 border border-red-500 px-4 py-2 rounded",children:W.jsx("p",{className:"text-red-500 font-mono",children:g})}):null}function BT(a,e,t,i){const o={x:a,y:e+.08800000000000001},c=[{...o,z:0}];return[{angle:-1.05,length:.62},{angle:-.34,length:.95},{angle:-.1,length:1},{angle:.14,length:.92},{angle:.38,length:.76}].forEach((h,d)=>{const p=.25+Math.sin(t*.6+i+d)*.2;for(let g=1;g<=4;g++){const m=g/4,y=h.angle+p*m*.5,v=.16*h.length*m;c.push({x:o.x+Math.sin(y)*v,y:o.y-Math.cos(y)*v,z:0})}}),c}function Jx(a){const e=(t,i)=>{const s={x:i+Math.sin(a*.23+t)*.18,y:.5+Math.sin(a*.31+t*1.7)*.22};return{position:s,gesture:"open",fingerCount:3+Math.round(1.5+Math.sin(a*.11+t)*1.5),velocity:.25+Math.sin(a*.37+t)*.15,holdDuration:1,landmarks:BT(s.x,s.y,a,t)}};return{left:e(0,.32),right:e(Math.PI,.68),distanceBetweenHands:.36}}const ev="vj-text",HT="n4thvj",nr="clips",xf="clip",VT=["video","mosaic"],yd="N4TH";function GT(){try{return localStorage.getItem(ev)??yd}catch{return yd}}function WT(a){try{localStorage.setItem(ev,a)}catch{}}function Xd(){return new Promise((a,e)=>{const t=indexedDB.open(HT,1);t.onupgradeneeded=()=>{t.result.objectStoreNames.contains(nr)||t.result.createObjectStore(nr)},t.onsuccess=()=>a(t.result),t.onerror=()=>e(t.error)})}function Zg(a){return a.type.startsWith("image/")?"image":"video"}async function tv(a,e,t){const i=await Xd();await new Promise((s,o)=>{const c=i.transaction(nr,"readwrite");c.objectStore(nr).put({file:e,name:t},a),c.oncomplete=()=>s(),c.onerror=()=>o(c.error)}),i.close()}function XT(a,e){return new Promise(t=>{const i=a.get(e);i.onsuccess=()=>{const s=i.result;if(!s||typeof s!="object")return t(null);const{file:o,name:c}=s;if(!(o instanceof Blob))return t(null);t({file:o,name:typeof c=="string"?c:"clip"})},i.onerror=()=>t(null)})}async function jT(){try{const a=await Xd(),e=await new Promise((c,u)=>{const h=a.transaction(nr,"readonly").objectStore(nr).getAllKeys();h.onsuccess=()=>c(h.result),h.onerror=()=>u(h.error)}),t={},s=a.transaction(nr,"readonly").objectStore(nr);for(const c of e){if(typeof c!="string")continue;const u=await XT(s,c);u&&(t[c]=u)}a.close();const o=t[xf];if(o){delete t[xf];for(const c of VT)t[c]||(t[c]=o,tv(c,o.file,o.name).catch(()=>{}));nv(xf).catch(()=>{})}return t}catch{return{}}}async function nv(a){try{const e=await Xd();await new Promise(t=>{const i=e.transaction(nr,"readwrite");i.objectStore(nr).delete(a),i.oncomplete=()=>t(),i.onerror=()=>t()}),e.close()}catch{}}const qT=4,YT=14,Qg=45,$T=480,KT=300,ZT=["#ffffff","#d4d4d4","#ffffff","#a3a3a3"],QT={"2D":"text-cyan-300 border-cyan-400/30 bg-cyan-400/10","3D":"text-violet-300 border-violet-400/30 bg-violet-400/10",TD:"text-emerald-300 border-emerald-400/30 bg-emerald-400/10"},Jg=Object.values(hs),JT=["2D","3D","TD"];function eC({set:a,onSetChange:e,onStart:t,text:i,onTextChange:s,clips:o,onClipChange:c}){const[u,h]=ue.useState("ALL"),[d,p]=ue.useState(null),g=ue.useRef(new Map),m=ue.useRef(new Set),y=ue.useRef(null),v=ue.useRef(a);v.current=a;const w=ue.useRef({text:i,clips:o});w.current={text:i,clips:o};const _=u==="ALL"?Jg:Jg.filter(A=>A.category===u),S=ue.useCallback(A=>{const N=v.current;if(N.indexOf(A)!==-1){e(N.filter(U=>U!==A));return}N.length>=Us||e([...N,A])},[e]),b=ue.useCallback((A,N)=>{const T=v.current.filter(D=>D!==A),U=Math.min(N,T.length);if(U>=Us)return;const z=[...T];z.splice(U,0,A),e(z.slice(0,Us))},[e]);ue.useEffect(()=>{const A=N=>{if(N.ctrlKey||N.metaKey||N.altKey)return;if(N.key==="Enter"&&v.current.length>0){t();return}if(!d)return;const T=vf(N.key);T!==-1&&(N.preventDefault(),b(d,T))};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[d,b,t]),ue.useEffect(()=>{y.current=new IntersectionObserver(T=>{for(const U of T){const z=U.target.getAttribute("data-pattern");z&&(U.isIntersecting?m.current.add(z):m.current.delete(z))}},{rootMargin:"250px 0px"});for(const T of g.current.values())y.current.observe(T.canvas);let A=0;const N=()=>{var B,$,ee,V,Z,K,X,re;if(A=requestAnimationFrame(N),document.hidden)return;const T=Jx(Date.now()/1e3);let U=0,z=0;const D=[...g.current].sort(([,j],[,O])=>{const G=j.frames<Qg?0:1,pe=O.frames<Qg?0:1;return G-pe});for(const[j,O]of D){const G=hs[j].category!=="2D",pe=G?U<qT:z<YT;if(m.current.has(j)&&pe&&!O.failed){if(!O.renderer)try{O.renderer=Qx(j,O.canvas,O.ctx,null)}catch{O.failed=!0;continue}try{($=(B=O.renderer).setText)==null||$.call(B,w.current.text);const ye=w.current.clips[j];(V=(ee=O.renderer).setClipUrl)==null||V.call(ee,(ye==null?void 0:ye.url)??null,ye==null?void 0:ye.kind),O.renderer.render(T,ZT,void 0,"contrast")}catch{O.failed=!0,(K=(Z=O.renderer).destroy)==null||K.call(Z),O.renderer=null;continue}O.frames++,G?U++:z++}else O.renderer&&((re=(X=O.renderer).destroy)==null||re.call(X),O.renderer=null)}};return A=requestAnimationFrame(N),()=>{var T,U,z;cancelAnimationFrame(A),(T=y.current)==null||T.disconnect();for(const D of g.current.values())(z=(U=D.renderer)==null?void 0:U.destroy)==null||z.call(U);g.current.clear()}},[]);const C=ue.useRef(new Map),E=A=>{let N=C.current.get(A);return N||(N=T=>I(A,T),C.current.set(A,N)),N},I=ue.useCallback((A,N)=>{var U,z,D;if(!N){const B=g.current.get(A);(z=(U=B==null?void 0:B.renderer)==null?void 0:U.destroy)==null||z.call(U),g.current.delete(A),m.current.delete(A);return}if(g.current.has(A))return;N.width=$T,N.height=KT;const T=N.getContext("2d");T&&(g.current.set(A,{canvas:N,ctx:T,renderer:null,frames:0}),(D=y.current)==null||D.observe(N))},[]);return W.jsxs("div",{className:"min-h-screen w-full bg-[#07070a] text-white font-mono",children:[W.jsx("div",{"aria-hidden":!0,className:"pointer-events-none fixed inset-0 opacity-70",style:{background:"radial-gradient(60rem 40rem at 50% -10%, rgba(99,102,241,0.18), transparent 70%),radial-gradient(40rem 30rem at 85% 15%, rgba(217,70,239,0.10), transparent 70%)"}}),W.jsxs("div",{className:"relative mx-auto max-w-[1500px] px-6 pb-40 pt-14",children:[W.jsx("header",{className:"mb-10",children:W.jsxs("div",{className:"flex flex-wrap items-end justify-between gap-6",children:[W.jsxs("div",{children:[W.jsx("h1",{className:"text-2xl font-semibold tracking-[-0.02em] sm:text-3xl",children:"<N4TH>"}),W.jsxs("p",{className:"mt-3 max-w-xl text-sm leading-relaxed text-white/45",children:["Every visual, running. Pick up to ",Us," and they become your keyboard — click to add, or hover one and press the number you want it on."]})]}),W.jsx("nav",{className:"flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] p-1.5",children:["ALL",...JT].map(A=>W.jsx("button",{onClick:()=>h(A),className:`rounded-full px-4 py-1.5 text-[11px] tracking-wider transition-all ${u===A?"bg-white text-black":"text-white/45 hover:bg-white/5 hover:text-white/80"}`,children:A},A))})]})}),W.jsx("div",{className:"grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:_.map(A=>{var D;const N=a.indexOf(A.pattern),T=N!==-1,U=a.length>=Us&&!T,z=A.pattern==="text"?"text":A.pattern==="video"||A.pattern==="mosaic"?"file":null;return W.jsxs("div",{onMouseEnter:()=>p(A.pattern),onMouseLeave:()=>p(B=>B===A.pattern?null:B),className:`group relative overflow-hidden rounded-2xl border text-left transition-all duration-200 ${T?"border-white/70 bg-white/[0.06] shadow-[0_0_0_1px_rgba(255,255,255,0.35),0_18px_50px_-20px_rgba(255,255,255,0.35)]":U?"border-white/5 opacity-35":"border-white/10 bg-white/[0.02] hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.05]"}`,children:[W.jsxs("button",{onClick:()=>S(A.pattern),disabled:U,title:U?"The set is full — take one off first":`${A.description}${T?"":" · click to add"}`,className:`block w-full text-left ${U?"cursor-not-allowed":""}`,children:[W.jsxs("div",{className:"relative aspect-[16/10] w-full overflow-hidden bg-black",children:[W.jsx("canvas",{"data-pattern":A.pattern,ref:E(A.pattern),className:"h-full w-full object-cover"}),W.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/85 to-transparent"}),T&&W.jsx("div",{className:"absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-base font-semibold text-black shadow-lg",children:Wo(N)})]}),W.jsxs("div",{className:"flex items-center justify-between gap-3 px-4 pb-3 pt-3",children:[W.jsxs("div",{className:"min-w-0",children:[W.jsx("div",{className:"truncate text-[13px] tracking-wide text-white/90",children:A.name}),W.jsx("div",{className:"mt-0.5 truncate text-[10px] text-white/35",children:A.description})]}),W.jsx("span",{className:`shrink-0 rounded border px-1.5 py-0.5 text-[9px] tracking-widest ${QT[A.category]}`,children:A.category})]})]}),z==="text"&&W.jsx("div",{className:"px-4 pb-4",children:W.jsx("input",{value:i,onChange:B=>s(B.target.value),onKeyDown:B=>B.stopPropagation(),placeholder:yd,maxLength:48,"aria-label":"Words for Kinetic Type",className:"w-full rounded-lg border border-white/15 bg-black/60 px-3 py-2 text-[12px] tracking-wide text-white placeholder:text-white/25 focus:border-white/45 focus:outline-none"})}),z==="file"&&W.jsxs("div",{className:"flex items-center gap-2 px-4 pb-4",children:[W.jsxs("label",{className:"cursor-pointer rounded-lg border border-white/15 bg-black/60 px-3 py-2 text-[11px] tracking-wider text-white/75 transition-colors hover:border-white/45 hover:text-white",children:[o[A.pattern]?"REPLACE":"UPLOAD",W.jsx("input",{type:"file",accept:"video/*,image/*",className:"hidden",onChange:B=>{var ee;const $=(ee=B.target.files)==null?void 0:ee[0];$&&c(A.pattern,$),B.target.value=""}})]}),W.jsx("span",{className:"min-w-0 flex-1 truncate text-[10px] text-white/35",children:((D=o[A.pattern])==null?void 0:D.name)??"no file yet"}),o[A.pattern]&&W.jsx("button",{onClick:()=>c(A.pattern,null),title:"Remove this visual's file",className:"shrink-0 px-1 text-white/25 transition-colors hover:text-white/80",children:"×"})]})]},A.pattern)})})]}),W.jsx("footer",{className:"fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/80 backdrop-blur-xl",children:W.jsxs("div",{className:"mx-auto flex max-w-[1500px] flex-wrap items-center gap-4 px-6 py-4",children:[W.jsxs("div",{className:"flex min-w-0 flex-1 flex-wrap items-center gap-2",children:[W.jsxs("span",{className:"mr-1 text-[10px] tracking-widest text-white/35",children:["SET ",a.length,"/",Us]}),a.length===0&&W.jsx("span",{className:"text-[11px] text-white/30",children:"Nothing chosen yet — pick a visual to start building the row."}),a.map((A,N)=>W.jsxs("button",{onClick:()=>S(A),title:"Take off the set",className:"group flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] py-1 pl-1 pr-3 transition-all hover:border-white/40 hover:bg-white/10",children:[W.jsx("span",{className:"flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-black",children:Wo(N)}),W.jsx("span",{className:"text-[11px] text-white/80",children:hs[A].name}),W.jsx("span",{className:"text-white/25 transition-colors group-hover:text-white/70",children:"×"})]},A))]}),W.jsxs("div",{className:"flex shrink-0 items-center gap-3",children:[a.length>0&&W.jsx("button",{onClick:()=>e([]),className:"rounded-full px-3 py-2 text-[11px] tracking-wider text-white/40 transition-colors hover:text-white/80",children:"CLEAR"}),W.jsx("button",{onClick:t,disabled:a.length===0,className:`rounded-full px-7 py-3 text-[12px] font-semibold tracking-[0.18em] transition-all ${a.length===0?"cursor-not-allowed bg-white/10 text-white/25":"bg-white text-black hover:scale-[1.03] hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.6)]"}`,children:"START SET →"})]})]})})]})}function tC(a,e){const t=Math.max(0,Math.ceil(-Math.log10(e)));return a.toFixed(Math.min(t,4))}function nC({spec:a,value:e,isDefault:t,inert:i,onChange:s,onReset:o}){var u;const c=(e-a.min)/(a.max-a.min)*100;return W.jsxs("div",{className:`group ${i?"opacity-40":""}`,title:i?`Does nothing until ${a.needs} is above zero`:void 0,children:[W.jsxs("div",{className:"flex justify-between items-baseline text-[9px] leading-tight",children:[W.jsxs("button",{onClick:o,title:t?a.hint??a.path:`${a.path} — click to reset`,className:`text-left transition-colors ${t?"text-white/50 hover:text-white/70":"text-cyan-300 hover:text-cyan-200"}`,children:[a.label,!t&&W.jsx("span",{className:"ml-1 opacity-60",children:"•"})]}),W.jsx("span",{className:`text-white ${a.labels?"":"tabular-nums"}`,children:((u=a.labels)==null?void 0:u[Math.round(e)])??tC(e,a.step)})]}),W.jsx("input",{type:"range",className:"vj-slider w-full h-1 mt-1 mb-2 rounded-full appearance-none cursor-pointer focus:outline-none",min:a.min,max:a.max,step:a.step,value:e,onChange:h=>s(parseFloat(h.target.value)),style:{backgroundImage:`linear-gradient(to right, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.85) ${c}%, rgba(255,255,255,0.2) ${c}%)`}})]})}function iC({sections:a,header:e}){var d;const[t,i]=ue.useState(!1),[s,o]=ue.useState((d=a[0])==null?void 0:d.key),c=a.filter(p=>p.entry.groups.length>0);if(c.length===0)return null;const u=c.find(p=>p.key===s)??c[0],h=u.entry.groups.some(p=>p.params.some(g=>u.values[g.path]!==void 0));return W.jsx("div",{className:"absolute left-6 top-24 bottom-32 z-50 w-[168px] flex flex-col font-mono pointer-events-auto",children:W.jsxs("div",{className:"bg-black/70 backdrop-blur-sm rounded-xl border border-white/20 flex flex-col min-h-0",children:[e&&W.jsx("div",{className:"border-b border-white/10",children:e}),W.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-2 border-b border-white/10",children:[W.jsx("button",{onClick:()=>i(p=>!p),className:"text-white/60 hover:text-white transition-colors shrink-0",title:t?"Show parameters":"Hide parameters",children:W.jsx(S_,{className:"w-3.5 h-3.5"})}),W.jsx("div",{className:"flex gap-1 flex-1 min-w-0",children:c.map(p=>{const g=p.entry.groups.some(m=>m.params.some(y=>p.values[y.path]!==void 0));return W.jsxs("button",{onClick:()=>{o(p.key),i(!1)},className:`px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider transition-all ${p.key===u.key?"bg-white/20 text-white":"text-white/40 hover:text-white/70"}`,children:[p.label,g&&W.jsx("span",{className:"ml-1 text-cyan-300",children:"•"})]},p.key)})}),h&&W.jsx("button",{onClick:()=>u.onReset(),title:`Reset every ${u.label} parameter`,className:"text-white/40 hover:text-white transition-colors shrink-0",children:W.jsx(__,{className:"w-3 h-3"})})]}),!t&&W.jsx("div",{className:"overflow-y-auto px-3 py-2 min-h-0",children:u.entry.groups.map(p=>{if(p.visibleWhen){const y=u.values[p.visibleWhen.path]??ko(u.entry.config,p.visibleWhen.path)??0;if(!p.visibleWhen.equals.includes(Math.round(y)))return null}const m=(p.togglePath?u.values[p.togglePath]??ko(u.entry.config,p.togglePath)??1:1)>=.5;return W.jsxs("div",{className:"mb-3 last:mb-1",children:[p.togglePath?W.jsxs("button",{onClick:()=>u.onChange(p.togglePath,m?0:1),title:m?`Bypass ${p.name}`:`Enable ${p.name}`,className:"flex items-center gap-1.5 w-full mb-1.5 group/head",children:[W.jsx("span",{className:`w-1.5 h-1.5 rounded-full transition-colors ${m?"bg-cyan-300":"bg-white/20"}`}),W.jsx("span",{className:`text-[8px] tracking-widest uppercase transition-colors ${m?"text-white/55 group-hover/head:text-white/80":"text-white/25"}`,children:p.name})]}):W.jsx("div",{className:"text-[8px] text-white/35 tracking-widest uppercase mb-1.5",children:p.name}),W.jsx("div",{className:m?"":"opacity-35 pointer-events-none",children:p.params.map(y=>{const v=ko(u.entry.config,y.path);if(v===void 0)return null;const w=u.values[y.path]??v,_=y.needs?u.values[y.needs]??ko(u.entry.config,y.needs)??0:1;return W.jsx(nC,{spec:y,inert:!(_>0),value:w,isDefault:u.values[y.path]===void 0,onChange:S=>u.onChange(y.path,S),onReset:()=>u.onReset(y.path)},y.path)})})]},p.name)})})]})})}function rC({layers:a,selectedLayer:e,set:t,onSelect:i,onOpacityChange:s,onRemove:o}){return W.jsxs("div",{className:"px-3 pt-2 pb-1",children:[W.jsxs("div",{className:"mb-1.5 flex items-baseline justify-between",children:[W.jsx("span",{className:"text-[8px] uppercase tracking-widest text-white/35",children:"Layers"}),W.jsx("span",{className:"text-[8px] text-white/25",children:"L cycles · [ ] fade"})]}),a.map((c,u)=>{const h=u===e,d=t.indexOf(c.pattern);return W.jsxs("div",{className:`mb-1 rounded px-1.5 py-1 transition-colors ${h?"bg-white/[0.11]":"hover:bg-white/[0.05]"}`,children:[W.jsxs("div",{className:"flex items-center gap-1.5",children:[W.jsxs("button",{onClick:()=>i(u),title:h?"Editing this layer":"Edit this layer",className:"flex min-w-0 flex-1 items-center gap-1.5 text-left",children:[W.jsx("span",{className:`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[8px] ${h?"bg-white text-black":"bg-white/15 text-white/60"}`,children:d===-1?"·":Wo(d)}),W.jsx("span",{className:`truncate text-[9px] ${h?"text-white":"text-white/55"}`,children:hs[c.pattern].short})]}),W.jsxs("span",{className:"shrink-0 text-[8px] tabular-nums text-white/45",children:[Math.round(c.opacity*100),"%"]}),a.length>1&&W.jsx("button",{onClick:()=>o(u),title:"Take this layer off",className:"shrink-0 px-0.5 text-[10px] leading-none text-white/25 transition-colors hover:text-white/80",children:"×"})]}),W.jsx("input",{type:"range","aria-label":`${hs[c.pattern].name} opacity`,className:"vj-slider mt-1 h-1 w-full cursor-pointer appearance-none rounded-full focus:outline-none",min:0,max:1,step:.01,value:c.opacity,onChange:p=>s(u,parseFloat(p.target.value)),onPointerDown:()=>i(u),style:{background:`linear-gradient(to right, rgba(255,255,255,${h?.85:.4}) ${c.opacity*100}%, rgba(255,255,255,0.12) ${c.opacity*100}%)`}})]},`${c.pattern}-${u}`)})]})}const ex={geometric:{config:yf,groups:[{name:"Shape",params:[{path:"polygon.baseSize",label:"Size",min:20,max:400,step:5},{path:"polygon.strokeWidth",label:"Stroke",min:.5,max:20,step:.5},{path:"complexity.baseSides",label:"Sides",min:3,max:12,step:1,hint:"with no hands"},{path:"complexity.maxSides",label:"Max sides",min:3,max:24,step:1}]},{name:"Layers",params:[{path:"layers.count",label:"Count",min:1,max:20,step:1},{path:"layers.sizeGrowth",label:"Growth",min:0,max:1.5,step:.01},{path:"layers.rotationOffset",label:"Twist",min:0,max:2,step:.01},{path:"layers.baseOpacity",label:"Opacity",min:0,max:1,step:.01},{path:"layers.opacityFade",label:"Fade",min:0,max:.3,step:.005}]},{name:"Motion",params:[{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"},{path:"animation.baseRotationMultiplier",label:"Spin",min:0,max:.1,step:.001}]},{name:"Bridge & clap",params:[{path:"bridge.thickness",label:"Bridge",min:0,max:30,step:.5},{path:"bridge.waveAmplitude",label:"Bridge wave",min:0,max:150,step:1},{path:"vibration.shakeAmountX",label:"Shake X",min:0,max:200,step:1},{path:"vibration.shakeAmountY",label:"Shake Y",min:0,max:200,step:1},{path:"vibration.flashDuration",label:"Flash",min:0,max:3,step:.05}]}]},particles:{config:_f,groups:[{name:"Emission",params:[{path:"limits.maxParticles",label:"Max",min:5,max:500,step:5},{path:"emission.openHandRate",label:"Open hand",min:0,max:1,step:.01},{path:"emission.closedHandRate",label:"Closed hand",min:0,max:1,step:.01},{path:"controls.fadeOutRate",label:"Fade out",min:.005,max:.5,step:.005}]},{name:"Motion",params:[{path:"physics.initialVelocity",label:"Velocity",min:.5,max:20,step:.5},{path:"physics.damping",label:"Damping",min:.8,max:1,step:.005,hint:"1 = never slows"},{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"}]},{name:"Size",params:[{path:"size.baseRange.0",label:"Radius min",min:2,max:300,step:2},{path:"size.baseRange.1",label:"Radius max",min:2,max:400,step:2},{path:"size.growthMultiplier",label:"Grow",min:.2,max:6,step:.1},{path:"size.shrinkMultiplier",label:"Shrink",min:.05,max:2,step:.05},{path:"size.transitionSpeed",label:"Ease",min:.02,max:1,step:.01}]},{name:"Glow",params:[{path:"glow.layers",label:"Layers",min:0,max:8,step:1},{path:"glow.expansion",label:"Spread",min:0,max:2,step:.05},{path:"glow.layerFade",label:"Fade",min:0,max:1,step:.01}]},{name:"Clap",params:[{path:"explosion.particleCount",label:"Burst",min:0,max:300,step:5},{path:"explosion.forceMultiplier",label:"Force",min:0,max:50,step:1},{path:"explosion.sizeMultiplier",label:"Size",min:.2,max:6,step:.1}]}]},ripple:{config:gd,groups:[{name:"Hand",params:[{path:"stamp.radius",label:"Size",min:.01,max:.3,step:.005},{path:"stamp.strength",label:"Weight",min:.05,max:1,step:.01},{path:"stamp.fingerScale",label:"Fingers",min:0,max:1,step:.05,hint:"0 = palm only"},{path:"stamp.audioSwell",label:"Bass swell",min:0,max:3,step:.05}]},{name:"Trail",params:[{path:"field.decay",label:"Length",min:.8,max:.998,step:.002,hint:"higher = lingers"},{path:"field.spread",label:"Spread",min:.2,max:8,step:.1}]},{name:"Water",params:[{path:"refraction.amount",label:"Refraction",min:0,max:.4,step:.005},{path:"refraction.dispersion",label:"Dispersion",min:0,max:1.5,step:.05}]},{name:"Gloss",params:[{path:"highlight.amount",label:"Amount",min:0,max:3,step:.05},{path:"highlight.sharpness",label:"Sharpness",min:.5,max:20,step:.5},{path:"highlight.tint",label:"Tint",min:0,max:1,step:.05,hint:"palette into the gloss"}]}]},text:{config:xd,groups:[{name:"Movement",params:[{path:"mode",label:"Mode",min:0,max:4,step:1,labels:["Mask","Radial","Wave","Depth","Scatter"],hint:"each mode brings its own controls"},{path:"motion.handInfluence",label:"Hands",min:0,max:3,step:.05},{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"}]},{name:"Type",params:[{path:"type.fit",label:"Fit",min:.2,max:1.6,step:.02,hint:"word width in its cell"},{path:"type.weight",label:"Weight",min:100,max:900,step:100},{path:"type.tracking",label:"Tracking",min:-.1,max:1.2,step:.01},{path:"type.outline",label:"Outline",min:0,max:1,step:1,hint:"filled or hollow"},{path:"type.strokeWidth",label:"Stroke",min:.5,max:8,step:.5}]},{name:"Grid",visibleWhen:{path:"mode",equals:[0,1,2]},params:[{path:"grid.columns",label:"Columns",min:1,max:40,step:1},{path:"grid.rows",label:"Rows",min:1,max:60,step:1},{path:"grid.spread",label:"Spread",min:.2,max:3,step:.02},{path:"grid.breathe",label:"Breathe",min:0,max:1,step:.02},{path:"grid.breatheSpeed",label:"Breath speed",min:0,max:3,step:.05}]},{name:"Mask",visibleWhen:{path:"mode",equals:[0]},params:[{path:"mask.reach",label:"Reach",min:.02,max:.8,step:.01,hint:"hand size"},{path:"mask.threshold",label:"Threshold",min:.02,max:2,step:.02,hint:"lower fills more"},{path:"mask.softness",label:"Softness",min:0,max:1,step:.02,hint:"0 = hard cut"},{path:"mask.invert",label:"Invert",min:0,max:1,step:1}]},{name:"Radial",visibleWhen:{path:"mode",equals:[1]},params:[{path:"radial.strength",label:"Warp",min:-2,max:3,step:.05,hint:"negative pinches"},{path:"radial.power",label:"Bite",min:.4,max:5,step:.1},{path:"radial.pulse",label:"Pulse",min:0,max:2,step:.05},{path:"radial.pulseSpeed",label:"Pulse speed",min:0,max:3,step:.05}]},{name:"Wave",visibleWhen:{path:"mode",equals:[2]},params:[{path:"wave.amplitude",label:"Amount",min:0,max:.6,step:.01},{path:"wave.frequency",label:"Waves",min:.2,max:8,step:.1},{path:"wave.speed",label:"Speed",min:-4,max:4,step:.05},{path:"wave.scaleWave",label:"Swell",min:0,max:1,step:.02}]},{name:"Depth",visibleWhen:{path:"mode",equals:[3]},params:[{path:"depth.speed",label:"Fly",min:-2,max:2,step:.02},{path:"depth.spread",label:"Open",min:0,max:4,step:.05,hint:"tracking with distance"},{path:"depth.curve",label:"Curve",min:.5,max:4,step:.05},{path:"depth.steps",label:"Rows",min:2,max:40,step:1},{path:"depth.size",label:"Size",min:.02,max:.5,step:.005},{path:"depth.horizon",label:"Horizon",min:-.2,max:.8,step:.01}]},{name:"Scatter",visibleWhen:{path:"mode",equals:[4]},params:[{path:"scatter.amount",label:"Spread",min:0,max:1.5,step:.02,hint:"0 = readable"},{path:"scatter.spiral",label:"Spiral",min:0,max:1,step:1},{path:"scatter.stagger",label:"Stagger",min:0,max:2,step:.05},{path:"scatter.drift",label:"Drift",min:0,max:3,step:.05},{path:"scatter.size",label:"Letter size",min:.02,max:.5,step:.005}]},{name:"Colour",params:[{path:"color.rainbow",label:"Rainbow",min:0,max:1,step:1,hint:"ignores the palette"},{path:"color.step",label:"Hue step",min:0,max:120,step:1},{path:"color.cycleSpeed",label:"Cycle",min:0,max:3,step:.05}]},{name:"Audio",params:[{path:"audio.bassScale",label:"Bass swell",min:0,max:2,step:.05},{path:"audio.beatKick",label:"Beat kick",min:0,max:3,step:.05}]}]},video:{config:vd,groups:[{name:"Frame",params:[{path:"frame.zoom",label:"Zoom",min:.2,max:4,step:.05},{path:"frame.spreadZoom",label:"Spread zoom",min:0,max:3,step:.05},{path:"frame.handDrift",label:"Hand drift",min:0,max:.6,step:.01},{path:"frame.mirror",label:"Mirror",min:0,max:1,step:1}]},{name:"Slice",params:[{path:"slice.count",label:"Bands",min:1,max:60,step:1,hint:"1 = whole frame"},{path:"slice.offset",label:"Shear",min:0,max:.4,step:.005},{path:"slice.speed",label:"Speed",min:0,max:5,step:.05},{path:"slice.beatKick",label:"Beat kick",min:1,max:6,step:.1}]},{name:"Look",params:[{path:"look.tint",label:"Tint",min:0,max:1,step:.02,hint:"palette over the clip"},{path:"look.gain",label:"Gain",min:1,max:3,step:.05},{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"}]}]},mosaic:{config:_d,groups:[{name:"Mark",params:[{path:"mode",label:"Mode",min:0,max:3,step:1,labels:["Letters","Dots","Blocks","Bars"]},{path:"grid.columns",label:"Detail",min:8,max:140,step:1,hint:"cells across"},{path:"grid.fill",label:"Weight",min:.2,max:1.8,step:.05},{path:"grid.cellAspect",label:"Cell shape",min:.4,max:2.5,step:.05,hint:"above 1 = taller"},{path:"grid.spreadDensity",label:"Spread coarsens",min:0,max:1.5,step:.05}]},{name:"Image",params:[{path:"tone.contrast",label:"Contrast",min:.2,max:4,step:.05},{path:"tone.brightness",label:"Brightness",min:-.5,max:.5,step:.02},{path:"tone.floor",label:"Cut",min:0,max:.9,step:.01,hint:"darker cells draw nothing"},{path:"tone.invert",label:"Invert",min:0,max:1,step:1}]},{name:"Letters",visibleWhen:{path:"mode",equals:[0]},params:[{path:"letters.ramp",label:"Glyphs",min:0,max:1,step:1,labels:["Density ramp","Your word"]},{path:"letters.weight",label:"Weight",min:100,max:900,step:100},{path:"letters.outline",label:"Hollow",min:0,max:1,step:1}]},{name:"Shape",visibleWhen:{path:"mode",equals:[1,2,3]},params:[{path:"shape.minimum",label:"Floor",min:0,max:.6,step:.01,hint:"size of the faintest mark"},{path:"shape.rotate",label:"Turn",min:0,max:1,step:.02,hint:"blocks towards diamonds"},{path:"shape.anchor",label:"From the floor",min:0,max:1,step:1,hint:"bars only"}]},{name:"Warp",params:[{path:"warp.handPush",label:"Hand push",min:0,max:.3,step:.005},{path:"warp.ripple",label:"Ripple",min:0,max:2,step:.05},{path:"warp.rippleSpeed",label:"Ripple speed",min:0,max:4,step:.05}]},{name:"Colour",params:[{path:"colour.fromSource",label:"Own colour",min:0,max:1,step:.02,hint:"0 = your palette"},{path:"colour.spread",label:"Palette run",min:1,max:40,step:1},{path:"audio.bassScale",label:"Bass swell",min:0,max:2,step:.05},{path:"audio.beatKick",label:"Beat kick",min:0,max:1.5,step:.05},{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"}]}]},digitalblocks:{config:md,groups:[{name:"Hands",params:[{path:"chaos.range",label:"Ceiling",min:.05,max:1,step:.01,hint:"how wild it can get"},{path:"chaos.openness",label:"Open hand",min:0,max:1,step:.02},{path:"chaos.velocity",label:"Hand speed",min:0,max:1,step:.02},{path:"chaos.clap",label:"Clap",min:0,max:1,step:.02},{path:"chaos.ease",label:"Ease",min:.005,max:.3,step:.005,hint:"lower = calmer"},{path:"chaos.idle",label:"Idle",min:0,max:.5,step:.01}]},{name:"Motion",params:[{path:"speed.base",label:"Drift",min:0,max:.4,step:.005},{path:"speed.variation",label:"Spread",min:0,max:.5,step:.005},{path:"speed.chaos",label:"Chaos speed",min:0,max:1.5,step:.02}]},{name:"Grid",params:[{path:"strips.base",label:"Columns",min:2,max:60,step:1},{path:"strips.chaos",label:"Columns +",min:0,max:60,step:1},{path:"strips.blocks",label:"Blocks",min:1,max:40,step:1},{path:"strips.blocksChaos",label:"Blocks +",min:0,max:40,step:1}]}]},waves:{config:Sf,groups:[{name:"Wave",params:[{path:"waveCount.active",label:"Count",min:1,max:24,step:1,hint:"hands present"},{path:"waveCount.idle",label:"Count idle",min:1,max:24,step:1},{path:"wave.baseAmplitude",label:"Amplitude",min:0,max:400,step:5},{path:"wave.maxAmplitude",label:"Max amp",min:10,max:800,step:10},{path:"wave.baseFrequency",label:"Frequency",min:.001,max:.1,step:.001},{path:"wave.maxFrequency",label:"Max freq",min:.001,max:.2,step:.001}]},{name:"Line",params:[{path:"wave.segments",label:"Segments",min:20,max:600,step:10,hint:"lower = angular"},{path:"wave.lineThickness",label:"Thickness",min:.5,max:20,step:.5},{path:"visual.fillOpacity",label:"Fill",min:0,max:255,step:1}]},{name:"Layers",params:[{path:"layers.primarySpeed",label:"Speed 1",min:0,max:10,step:.1},{path:"layers.secondarySpeed",label:"Speed 2",min:0,max:10,step:.1},{path:"layers.tertiarySpeed",label:"Speed 3",min:0,max:10,step:.1},{path:"layers.secondaryAmplitude",label:"Amp 2",min:0,max:2,step:.01},{path:"layers.tertiaryAmplitude",label:"Amp 3",min:0,max:2,step:.01},{path:"fingerCountSpeed.maxSpeed",label:"Speed cap",min:.1,max:10,step:.1}]},{name:"Hands & focus",params:[{path:"handInfluence.strength",label:"Pull",min:0,max:3,step:.05},{path:"handInfluence.radius",label:"Reach",min:20,max:800,step:10},{path:"focalPoint.baseSize",label:"Dot size",min:0,max:100,step:1},{path:"focalPoint.pulseSpeed",label:"Pulse",min:0,max:20,step:.5},{path:"focalPoint.pulseAmount",label:"Pulse depth",min:0,max:1,step:.01},{path:"focalPoint.glowLayers",label:"Dot glow",min:0,max:10,step:1}]}]}},sC={config:$o,groups:[{name:"Transition",togglePath:"transition.enabled",params:[{path:"transition.duration",label:"Crossfade",min:.05,max:5,step:.05,hint:"seconds between visuals"}]},{name:"Colour",togglePath:"colour.enabled",params:[{path:"colour.mix",label:"Mix",min:0,max:1,step:.01,hint:"stage opacity"},{path:"colour.hue",label:"Hue",min:-3.14,max:3.14,step:.01,hint:"turns the whole frame"},{path:"colour.saturation",label:"Saturation",min:0,max:2,step:.01,hint:"1 = untouched"}]},{name:"Feedback",togglePath:"feedback.enabled",params:[{path:"feedback.mix",label:"Mix",min:0,max:1,step:.01,hint:"stage opacity"},{path:"feedback.amount",label:"Amount",min:0,max:.99,step:.01,hint:"0 = off"},{needs:"feedback.amount",path:"feedback.zoom",label:"Zoom",min:.9,max:1.1,step:.001,hint:">1 tunnels out"},{needs:"feedback.amount",path:"feedback.rotate",label:"Rotate",min:-.05,max:.05,step:5e-4},{needs:"feedback.amount",path:"feedback.offsetX",label:"Drift X",min:-.02,max:.02,step:5e-4},{needs:"feedback.amount",path:"feedback.offsetY",label:"Drift Y",min:-.02,max:.02,step:5e-4},{path:"feedback.hueShift",label:"Trail hue",min:-.2,max:.2,step:.002,hint:"ages the trail — needs Amount"}]},{name:"Displace",togglePath:"displace.enabled",params:[{path:"displace.mix",label:"Mix",min:0,max:1,step:.01,hint:"stage opacity"},{path:"displace.amount",label:"Amount",min:0,max:.3,step:.002},{path:"displace.scale",label:"Scale",min:.5,max:40,step:.5},{path:"displace.speed",label:"Speed",min:0,max:3,step:.02}]},{name:"Chromatic",togglePath:"rgbSplit.enabled",params:[{path:"rgbSplit.mix",label:"Mix",min:0,max:1,step:.01,hint:"stage opacity"},{path:"rgbSplit.amount",label:"RGB split",min:0,max:.1,step:.001}]},{name:"Kaleidoscope",togglePath:"kaleido.enabled",params:[{path:"kaleido.mix",label:"Mix",min:0,max:1,step:.01,hint:"stage opacity"},{path:"kaleido.segments",label:"Segments",min:0,max:24,step:1,hint:"<2 = off"},{path:"kaleido.spin",label:"Spin",min:-3.14,max:3.14,step:.01}]},{name:"Quantize",togglePath:"quantize.enabled",params:[{path:"quantize.mix",label:"Mix",min:0,max:1,step:.01,hint:"stage opacity"},{path:"quantize.pixel",label:"Pixel size",min:0,max:64,step:1,hint:"<=1 = off"},{path:"quantize.levels",label:"Colour steps",min:0,max:16,step:1,hint:"<2 = off"}]},{name:"Bloom",togglePath:"bloom.enabled",params:[{path:"bloom.mix",label:"Mix",min:0,max:1,step:.01,hint:"stage opacity"},{path:"bloom.amount",label:"Amount",min:0,max:3,step:.05},{path:"bloom.threshold",label:"Threshold",min:0,max:1,step:.01}]}]},iv=1,tx=0,nx=2;function aC(a){return Math.min(1,.06+a*.94)}function rv(a){return .55+a*.45}function ix(a,e,t){var h;const i=aC(t),s=rv(t),o=e?{x:.5+(e.position.x-.5)/s,y:.5+(e.position.y-.5)/s}:a.position,c=o.x+(a.position.x-o.x)*i,u=o.y+(a.position.y-o.y)*i;return{...a,position:{x:.5+(c-.5)*s,y:.5+(u-.5)*s},velocity:a.velocity===void 0?void 0:a.velocity*t,landmarks:(h=a.landmarks)==null?void 0:h.map(d=>({...d,x:.5+(d.x-.5)*s,y:.5+(d.y-.5)*s}))}}function oC(a,e,t){return t===iv?a:{...a,left:a.left?ix(a.left,(e==null?void 0:e.left)??null,t):null,right:a.right?ix(a.right,(e==null?void 0:e.right)??null,t):null,clapIntensity:a.clapIntensity===void 0?void 0:a.clapIntensity*t,distanceBetweenHands:a.distanceBetweenHands===void 0?void 0:.4+(a.distanceBetweenHands-.4)*rv(t)}}function Do(a,e,t){const i=e/100,s=t/100,o=(1-Math.abs(2*s-1))*i,c=o*(1-Math.abs(a/60%2-1)),u=s-o/2;let h=0,d=0,p=0;a<60?[h,d,p]=[o,c,0]:a<120?[h,d,p]=[c,o,0]:a<180?[h,d,p]=[0,o,c]:a<240?[h,d,p]=[0,c,o]:a<300?[h,d,p]=[c,0,o]:[h,d,p]=[o,0,c];const g=m=>Math.round((m+u)*255).toString(16).padStart(2,"0");return`#${g(h)}${g(d)}${g(p)}`}function lC(a,e,t){if(t==="grayscale")return["#FFFFFF","#000000","#FFFFFF","#000000"];if(t==="black")return[Do(a,e,50),"#FFFFFF",Do(a,e*.6,70),Do(a,e*.8,35)];const i=Do(a,e,50),s=Do((a+180)%360,e,50);return[i,s,i,s]}const cC=["video/mp4;codecs=avc1.42E01E,mp4a.40.2","video/mp4","video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"],uC=30,hC=12e6;function sv(){if(!(typeof MediaRecorder>"u")){for(const a of cC)if(MediaRecorder.isTypeSupported(a))return a}}function fC(){return typeof MediaRecorder<"u"&&typeof HTMLCanvasElement.prototype.captureStream=="function"&&sv()!==void 0}class dC{constructor(e){F(this,"sources");F(this,"frame",null);F(this,"ctx",null);F(this,"recorder",null);F(this,"chunks",[]);F(this,"raf",0);F(this,"startedAt",0);F(this,"format","");F(this,"draw",()=>{this.raf=requestAnimationFrame(this.draw);const{ctx:e,frame:t}=this;if(!e||!t)return;const i=this.sources.canvas();if(!i)return;e.fillStyle="#000",e.fillRect(0,0,t.width,t.height);const s=Math.min(t.width/i.width,t.height/i.height),o=i.width*s,c=i.height*s;try{e.drawImage(i,(t.width-o)/2,(t.height-c)/2,o,c)}catch{return}const u=this.sources.camera();u&&u.readyState>=2&&u.videoWidth>0&&this.drawCamera(e,t,u)});this.sources=e}get recording(){return this.recorder!==null&&this.recorder.state==="recording"}get elapsed(){return this.startedAt?(performance.now()-this.startedAt)/1e3:0}start(e){if(this.recording)return;const t=this.sources.canvas(),i=sv();if(!t||!i)return;this.format=i;const s=document.createElement("canvas");s.width=Math.max(2,t.width-t.width%2),s.height=Math.max(2,t.height-t.height%2);const o=s.getContext("2d",{alpha:!1});if(!o)return;this.frame=s,this.ctx=o;const c=s.captureStream(uC);if(e)for(const h of e.getAudioTracks())c.addTrack(h);const u=new MediaRecorder(c,{mimeType:i,videoBitsPerSecond:hC});this.chunks=[],u.ondataavailable=h=>{h.data.size>0&&this.chunks.push(h.data)},u.start(1e3),this.recorder=u,this.startedAt=performance.now(),this.draw()}stop(){const e=this.recorder;if(!e||e.state==="inactive")return Promise.resolve(null);const t=this.elapsed;return new Promise(i=>{e.onstop=()=>{cancelAnimationFrame(this.raf),this.raf=0,this.recorder=null,this.startedAt=0,this.frame=null,this.ctx=null;const s=new Blob(this.chunks,{type:this.format});this.chunks=[],i(s.size>0?{blob:s,extension:this.format.startsWith("video/mp4")?"mp4":"webm",seconds:t}:null)},e.stop()})}drawCamera(e,t,i){const s=Math.round(t.width*.014),o=Math.round(t.width*.17),c=Math.round(o*i.videoHeight/i.videoWidth),u=t.width-o-s,h=s,d=Math.round(o*.06);e.save(),e.beginPath(),typeof e.roundRect=="function"?e.roundRect(u,h,o,c,d):e.rect(u,h,o,c),e.clip(),e.translate(u+o,h),e.scale(-1,1),e.drawImage(i,0,0,o,c),e.restore(),e.save(),e.strokeStyle="rgba(255, 255, 255, 0.35)",e.lineWidth=Math.max(1,t.width*.001),e.beginPath(),typeof e.roundRect=="function"?e.roundRect(u,h,o,c,d):e.rect(u,h,o,c),e.stroke(),e.restore()}}function rx(a){const e=new Date().toISOString().slice(0,19).replace("T","-").replace(/:/g,""),t=URL.createObjectURL(a.blob),i=document.createElement("a");i.href=t,i.download=`n4thvj-${e}.${a.extension}`,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),6e4)}const pC=60,mC=`<!doctype html>
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
</html>`;class gC{constructor(e){F(this,"win",null);F(this,"stream",null);F(this,"onClose");F(this,"poll",0);this.onClose=e}get open(){return this.win!==null&&!this.win.closed}show(e){var i;if(this.open)return(i=this.win)==null||i.focus(),null;if(!e)return"The visuals are not running yet.";if(typeof e.captureStream!="function")return"This browser cannot send a canvas to a second window.";const t=window.open("","n4thvj-output","width=1280,height=720");return t?(t.document.open(),t.document.write(mC),t.document.close(),this.win=t,this.attach(e),this.poll=window.setInterval(()=>{this.win&&this.win.closed&&this.close()},500),null):"The browser blocked the window. Allow pop-ups for this page and try again."}attach(e){var s;const t=this.win;if(!t||t.closed||!e||typeof e.captureStream!="function")return;const i=t.document.getElementById("out");if(i){for(const o of((s=this.stream)==null?void 0:s.getTracks())??[])o.stop();this.stream=e.captureStream(pC),i.srcObject=this.stream,i.play().catch(()=>{})}}close(){var t;clearInterval(this.poll),this.poll=0;for(const i of((t=this.stream)==null?void 0:t.getTracks())??[])i.stop();this.stream=null;const e=this.win;this.win=null,e&&!e.closed&&e.close(),this.onClose()}}function Da(a,e,t){try{const i=localStorage.getItem(a);if(i===null)return e;const s=JSON.parse(i);return t(s)?s:e}catch{return e}}function La(a,e){try{localStorage.setItem(a,JSON.stringify(e))}catch{}}const Sd=(a,e)=>t=>typeof t=="number"&&Number.isFinite(t)&&t>=a&&t<=e;function sx(){return{hue:Da("vj-hue",245,Sd(0,360)),saturation:Da("vj-saturation",100,Sd(0,100)),colorMode:Da("vj-color-mode","contrast",a=>a==="black"||a==="contrast"||a==="grayscale")}}function xC(){const[a,e]=ue.useState(()=>[{pattern:"geometric",opacity:1,...sx()}]),[t,i]=ue.useState(0),s=(a[t]??a[0]).pattern,o=ue.useCallback(we=>{const Ee=a.findIndex(Fe=>Fe.pattern===we);if(Ee!==-1){i(Ee);return}e(Fe=>Fe.map((ot,L)=>L===t?{...ot,pattern:we}:ot))},[a,t]),c=ue.useCallback(we=>{const Ee=a.findIndex(ot=>ot.pattern===we);if(Ee!==-1){if(a.length===1)return;e(a.filter((ot,L)=>L!==Ee)),i(ot=>ot>Ee?ot-1:Math.min(ot,a.length-2));return}if(a.length>=F_)return;const Fe=a[t]??a[0];e([...a,{pattern:we,opacity:D_,hue:Fe.hue,saturation:Fe.saturation,colorMode:Fe.colorMode}])},[a,t]),u=ue.useCallback(()=>{i(we=>(we+1)%a.length)},[a.length]),h=ue.useCallback((we,Ee)=>{e(Fe=>Fe.map((ot,L)=>L===we?{...ot,opacity:Ee}:ot))},[]),d=ue.useCallback(we=>{e(Ee=>Ee.length===1?Ee:Ee.filter((Fe,ot)=>ot!==we)),i(Ee=>Ee>we?Ee-1:Math.min(Ee,a.length-2))},[a.length]),p=ue.useCallback(we=>{e(Ee=>Ee.map((Fe,ot)=>ot===t?{...Fe,opacity:Math.min(1,Math.max(0,Math.round((Fe.opacity+we)*100)/100))}:Fe))},[t]),[g,m]=ue.useState(!1),[y,v]=ue.useState(!0),w=a[t]??a[0],{hue:_,saturation:S,colorMode:b}=w;ue.useCallback(we=>{e(Ee=>Ee.map((Fe,ot)=>ot===t?{...Fe,...we}:Fe))},[t]);const C=(we,Ee)=>typeof we=="function"?we(Ee):we,E=ue.useCallback(we=>{e(Ee=>Ee.map((Fe,ot)=>ot===t?{...Fe,hue:C(we,Fe.hue)}:Fe))},[t]),I=ue.useCallback(we=>{e(Ee=>Ee.map((Fe,ot)=>ot===t?{...Fe,saturation:C(we,Fe.saturation)}:Fe))},[t]),A=ue.useCallback(we=>{e(Ee=>Ee.map((Fe,ot)=>ot===t?{...Fe,colorMode:C(we,Fe.colorMode)}:Fe))},[t]),N=ue.useMemo(()=>a.map(we=>lC(we.hue,we.saturation,we.colorMode)),[a]),T=N[t]??N[0],[U,z]=ue.useState(!1),[D,B]=ue.useState(()=>Da("vj-motion",iv,Sd(tx,nx)));ue.useEffect(()=>{La("vj-motion",D)},[D]);const $=ue.useCallback(we=>{B(Ee=>Math.min(nx,Math.max(tx,Math.round((Ee+we)*100)/100)))},[]),[ee,V]=ue.useState(GT),[Z,K]=ue.useState({});ue.useEffect(()=>{WT(ee)},[ee]),ue.useEffect(()=>{const we=[];let Ee=!1;return jT().then(Fe=>{if(Ee)return;const ot={};for(const[L,{file:ie,name:he}]of Object.entries(Fe)){const oe=URL.createObjectURL(ie);we.push(oe),ot[L]={url:oe,name:he,kind:Zg(ie)}}K(ot)}),()=>{Ee=!0,we.forEach(Fe=>URL.revokeObjectURL(Fe))}},[]);const X=ue.useCallback((we,Ee)=>{K(Fe=>{const ot=Fe[we];ot&&URL.revokeObjectURL(ot.url);const L={...Fe};return Ee?L[we]={url:URL.createObjectURL(Ee),name:Ee.name,kind:Zg(Ee)}:delete L[we],L}),Ee?tv(we,Ee,Ee.name).catch(()=>{}):nv(we).catch(()=>{})},[]),re=ue.useMemo(()=>({text:ee,clips:Z}),[ee,Z]),j=ue.useRef(null),O=ue.useRef(null),G=ue.useRef(null),pe=ue.useRef(!1),[Me,ye]=ue.useState(!1),[te,ge]=ue.useState(0),me=ue.useMemo(()=>fC(),[]),Ae=ue.useRef(null);!Ae.current&&me&&(Ae.current=new dC({canvas:()=>j.current,camera:()=>pe.current?G.current:null}));const[We,tt]=ue.useState(()=>{try{const we=localStorage.getItem("vj-sound");return we==="music"||we==="off"||we==="mic"?we:"mic"}catch{return"mic"}});ue.useEffect(()=>{try{localStorage.setItem("vj-sound",We)}catch{}},[We]);const Pt=ue.useRef(null),[ft,st]=ue.useState(null),Mt=ue.useCallback(async()=>{var Fe;const we=Ae.current;if(!we)return;if(we.recording){ye(!1);const ot=await we.stop();for(const L of((Fe=Pt.current)==null?void 0:Fe.getTracks())??[])L.stop();Pt.current=null,ot&&rx(ot);return}st(null);const Ee=await z_(We,O.current);Ee.problem&&st(Ee.problem),Pt.current=Ee.owned?Ee.stream:null,we.start(Ee.stream),ye(we.recording)},[We]);ue.useEffect(()=>{if(!ft)return;const we=setTimeout(()=>st(null),9e3);return()=>clearTimeout(we)},[ft]);const[dt,kt]=ue.useState(!1),[It,nn]=ue.useState(null),Q=ue.useRef(null);Q.current||(Q.current=new gC(()=>kt(!1)));const Ot=ue.useCallback(()=>{const we=Q.current;if(!we)return;if(we.open){we.close();return}const Ee=we.show(j.current);nn(Ee),kt(we.open)},[]);ue.useEffect(()=>{if(!It)return;const we=setTimeout(()=>nn(null),9e3);return()=>clearTimeout(we)},[It]),ue.useEffect(()=>()=>{var we;return(we=Q.current)==null?void 0:we.close()},[]),ue.useEffect(()=>{if(!Me){ge(0);return}const we=setInterval(()=>{var Ee;ge(((Ee=Ae.current)==null?void 0:Ee.elapsed)??0)},500);return()=>clearInterval(we)},[Me]),ue.useEffect(()=>{const we=()=>{var Ee;(Ee=Ae.current)!=null&&Ee.recording&&Ae.current.stop().then(Fe=>Fe&&rx(Fe))};return window.addEventListener("pagehide",we),()=>window.removeEventListener("pagehide",we)},[]);const[vt,Ft]=ue.useState(!0),[Be,Wt]=ue.useState(()=>P0(Da("vj-params",{},()=>!0))),[k,R]=ue.useState(()=>P0(Da("vj-fx",{},()=>!0)).fx??{}),se=ue.useCallback((we,Ee)=>{R(Fe=>({...Fe,[we]:Ee}))},[]),_e=(k["master.enabled"]??1)>=.5,be=ue.useCallback(()=>{R(we=>({...we,"master.enabled":(we["master.enabled"]??1)>=.5?0:1}))},[]),Pe=ue.useCallback(we=>{R(Ee=>{if(we===void 0)return{};const{[we]:Fe,...ot}=Ee;return ot})},[]),ze=ue.useCallback((we,Ee)=>{Wt(Fe=>({...Fe,[s]:{...Fe[s],[we]:Ee}}))},[s]),de=ue.useCallback(we=>{Wt(Ee=>{if(we===void 0){const{[s]:L,...ie}=Ee;return ie}const{[we]:Fe,...ot}=Ee[s]??{};return{...Ee,[s]:ot}})},[s]),Se=ue.useMemo(()=>a.map(we=>Be[we.pattern]),[a,Be]),[Le,Xe]=ue.useState(V_),[Ue,Ie]=ue.useState("library"),[at,mt]=ue.useState({left:null,right:null}),[xt,Y]=ue.useState(null);ue.useEffect(()=>{G.current=xt,pe.current=g},[xt,g]);const[Ne,xe]=ue.useState(!1),[Ve,ke]=ue.useState(!1),[ve,Ze]=ue.useState({bass:0,mid:0,high:0,overall:0,beat:!1,beatIntensity:0}),[pt,Bt]=ue.useState(.5),[bt,An]=ue.useState(!0),[Hn,Ei]=ue.useState(!0),[Ti,ar]=ue.useState(!0),[Xi,Ci]=ue.useState(0),Rr=at.left!==null||at.right!==null,ms=Ue==="vj"&&(Ve||vt&&!Rr);ue.useEffect(()=>{if(!ms)return;let we;const Ee=()=>{Ci(Date.now()/1e3),we=requestAnimationFrame(Ee)};return Ee(),()=>cancelAnimationFrame(we)},[ms]),ue.useEffect(()=>{if(!U)return;const we=setInterval(()=>{E(Ee=>(Ee+1)%360)},50);return()=>clearInterval(we)},[U]);const mi=Ve?{left:{position:{x:.3+Math.sin(Xi)*.2*ve.mid,y:.5+ve.bass*.3},gesture:ve.overall>.3?"open":"fist",fingerCount:bt?Math.max(1,Math.ceil(ve.mid*5)):5,velocity:bt?ve.mid:.5},right:{position:{x:.7-Math.sin(Xi)*.2*ve.mid,y:.5+ve.bass*.3},gesture:ve.overall>.3?"open":"fist",fingerCount:bt?Math.max(1,Math.ceil(ve.mid*5)):5,velocity:bt?ve.mid:.5},clapping:Ti&&ve.beat,clapIntensity:ve.beatIntensity,distanceBetweenHands:.4-ve.bass*.2}:Rr||!vt?at:Jx(Xi),ji=ue.useRef(null),Pr=oC(mi,ji.current,D);ji.current=Pr,ue.useEffect(()=>{La("vj-hue",_),La("vj-saturation",S),La("vj-color-mode",b)},[_,S,b]),ue.useEffect(()=>{La("vj-params",Be)},[Be]),ue.useEffect(()=>{La("vj-fx",{fx:k})},[k]),ue.useEffect(()=>{G_(Le)},[Le]);const Lr=ue.useCallback(()=>{Le.length!==0&&(e([{pattern:Le[0],opacity:1,...sx()}]),i(0),Ie("vj"))},[Le]),or=ue.useCallback(we=>{if(Le.length===0)return;const Ee=Le.indexOf(s),ot=Ee===-1?we==="next"?0:Le.length-1:(Ee+(we==="next"?1:-1)+Le.length)%Le.length;o(Le[ot])},[s,Le,o]),gi=ue.useRef(null);ue.useEffect(()=>{const we=Fe=>{if(Fe.key==="Control"){A("contrast");return}if(Fe.key==="Alt"){A("grayscale");return}if(Fe.key==="Meta"){A("black");return}if(Fe.ctrlKey||Fe.metaKey||Fe.altKey)return;if(Fe.key.toLowerCase()==="c"){m(L=>!L);return}if(Fe.key.toLowerCase()==="a"){ke(L=>!L);return}if(Fe.key.toLowerCase()==="r"){Mt();return}if(Fe.key.toLowerCase()==="s"){tt(E0);return}if(Fe.key.toLowerCase()==="o"){Ot();return}if(Fe.key.toLowerCase()==="x"){be();return}if(Fe.key.toLowerCase()==="i"){Ft(L=>!L);return}if(Fe.key.toLowerCase()==="d"){o("flowfield");return}if(Fe.key==="Escape"){Ie("library");return}if(Fe.key.toLowerCase()==="l"){u();return}if(Fe.key==="-"){$(-.1);return}if(Fe.key==="="||Fe.key==="+"){$(.1);return}if(Fe.key==="["){p(-.1);return}if(Fe.key==="]"){p(.1);return}const ot=Le[vf(Fe.key)];if(ot){if(Fe.repeat||gi.current)return;gi.current={key:Fe.key.toLowerCase(),fired:!1,timer:window.setTimeout(()=>{gi.current&&(gi.current.fired=!0),c(ot)},lx)};return}switch(Fe.key){case"ArrowLeft":Fe.preventDefault(),or("prev");break;case"ArrowRight":Fe.preventDefault(),or("next");break;case"ArrowUp":Fe.preventDefault(),I(L=>Math.min(100,L+5));break;case"ArrowDown":Fe.preventDefault(),I(L=>Math.max(0,L-5));break}},Ee=Fe=>{const ot=gi.current;if(!ot||ot.key!==Fe.key.toLowerCase()||(clearTimeout(ot.timer),gi.current=null,ot.fired))return;const L=Le[vf(Fe.key)];L&&o(L)};return window.addEventListener("keydown",we),window.addEventListener("keyup",Ee),()=>{window.removeEventListener("keydown",we),window.removeEventListener("keyup",Ee)}},[Le,or,be,o,c,u,p,$,Mt,Ot]),ue.useEffect(()=>{const we=Ee=>{Ee.preventDefault(),v(Fe=>!Fe)};return window.addEventListener("contextmenu",we),()=>window.removeEventListener("contextmenu",we)},[]),ue.useEffect(()=>{(s==="face"||s.startsWith("smokehand"))&&m(!0)},[s]);const js=()=>{xe(!1)},qs=()=>{xe(!1)},qa={...ve,mid:bt?ve.mid:0,high:Hn?ve.high:0,beat:Ti?ve.beat:!1,beatIntensity:Ti?ve.beatIntensity:0};return Ue==="library"?W.jsx(eC,{set:Le,onSetChange:Xe,onStart:Lr,text:ee,onTextChange:V,clips:Z,onClipChange:X}):W.jsxs("div",{className:"relative w-screen h-screen overflow-hidden bg-black",children:[Ne&&W.jsx(J_,{onGrant:js,onSkip:qs}),W.jsx(OT,{handData:Pr,layerColors:N,layers:a,videoElement:xt,audioData:qa,layerParams:Se,content:re,motion:D,fxParams:k,onCanvasReady:we=>{var Ee;j.current=we,(Ee=Q.current)==null||Ee.attach(we)}}),W.jsx("div",{className:`absolute top-4 right-4 ${g?"opacity-100":"opacity-0 pointer-events-none"}`,children:W.jsx(U_,{onVideoReady:Y})}),xt&&s!=="face"&&W.jsx($_,{videoElement:xt,onHandData:mt}),W.jsx(zT,{enabled:Ve,sensitivity:pt,onAudioData:Ze,onStream:we=>{O.current=we}}),y&&W.jsx(iC,{header:W.jsx(rC,{layers:a,selectedLayer:t,set:Le,onSelect:i,onOpacityChange:h,onRemove:d}),sections:[...ex[s]?[{key:"shape",label:"SHAPE",entry:ex[s],values:Be[s]??{},onChange:ze,onReset:de}]:[],{key:"fx",label:"FX",entry:sC,values:k,onChange:se,onReset:Pe}]}),y&&W.jsx(j_,{currentPattern:s,onPatternChange:o,layers:a,selectedLayer:t,onPatternHold:c,onLayerCycle:u,showCamera:g,onCameraToggle:()=>m(!g),handData:at,selectedColors:T,colorMode:b,hue:_,saturation:S,onHueChange:E,onSaturationChange:I,onColorModeChange:A,autoHueEnabled:U,onAutoHueToggle:()=>z(we=>!we),set:Le,onOpenLibrary:()=>Ie("library"),audioEnabled:Ve,onAudioToggle:()=>ke(!Ve),audioSensitivity:pt,onAudioSensitivityChange:Bt,audioControlSpeed:bt,onAudioControlSpeedChange:An,audioControlDensity:Hn,onAudioControlDensityChange:Ei,audioTriggerBeats:Ti,onAudioTriggerBeatsChange:ar,motion:D,onMotionChange:B,idleDrive:vt,onIdleDriveToggle:()=>Ft(we=>!we),fxEnabled:_e,fxActive:FT(k),onFxToggle:be,canRecord:me,recording:Me,recordSeconds:te,onRecordToggle:()=>void Mt(),sound:We,onSoundCycle:()=>tt(E0),output:dt,onOutputToggle:Ot}),(ft||It)&&W.jsx("div",{className:"pointer-events-none absolute bottom-28 left-1/2 z-[60] w-[min(34rem,90vw)] -translate-x-1/2",children:W.jsx("div",{className:"rounded-xl border border-amber-300/30 bg-black/85 px-4 py-3 text-center font-mono text-[11px] leading-relaxed text-amber-200/90 backdrop-blur-sm",children:ft??It})})]})}const av=document.getElementById("root");if(!av)throw new Error("Root element #root not found");$1.createRoot(av).render(W.jsx(xC,{}));try{sessionStorage.removeItem("vj-stale-bundle-reload")}catch{}
