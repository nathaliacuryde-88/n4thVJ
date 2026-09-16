var j1=Object.defineProperty;var q1=(a,e,t)=>e in a?j1(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var U=(a,e,t)=>q1(a,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();var Th={exports:{}},To={},Ch={exports:{}},At={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0;function Y1(){if(g0)return At;g0=1;var a=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function m(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,b={};function _(O,q,ve){this.props=O,this.context=q,this.refs=b,this.updater=ve||y}_.prototype.isReactComponent={},_.prototype.setState=function(O,q){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,q,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function S(){}S.prototype=_.prototype;function w(O,q,ve){this.props=O,this.context=q,this.refs=b,this.updater=ve||y}var E=w.prototype=new S;E.constructor=w,v(E,_.prototype),E.isPureReactComponent=!0;var T=Array.isArray,L=Object.prototype.hasOwnProperty,A={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function C(O,q,ve){var be,de={},Y=null,me=null;if(q!=null)for(be in q.ref!==void 0&&(me=q.ref),q.key!==void 0&&(Y=""+q.key),q)L.call(q,be)&&!I.hasOwnProperty(be)&&(de[be]=q[be]);var pe=arguments.length-2;if(pe===1)de.children=ve;else if(1<pe){for(var Ie=Array(pe),Xe=0;Xe<pe;Xe++)Ie[Xe]=arguments[Xe+2];de.children=Ie}if(O&&O.defaultProps)for(be in pe=O.defaultProps,pe)de[be]===void 0&&(de[be]=pe[be]);return{$$typeof:a,type:O,key:Y,ref:me,props:de,_owner:A.current}}function F(O,q){return{$$typeof:a,type:O.type,key:q,ref:O.ref,props:O.props,_owner:O._owner}}function z(O){return typeof O=="object"&&O!==null&&O.$$typeof===a}function D(O){var q={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ve){return q[ve]})}var H=/\/+/g;function ie(O,q){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):q.toString(36)}function J(O,q,ve,be,de){var Y=typeof O;(Y==="undefined"||Y==="boolean")&&(O=null);var me=!1;if(O===null)me=!0;else switch(Y){case"string":case"number":me=!0;break;case"object":switch(O.$$typeof){case a:case e:me=!0}}if(me)return me=O,de=de(me),O=be===""?"."+ie(me,0):be,T(de)?(ve="",O!=null&&(ve=O.replace(H,"$&/")+"/"),J(de,q,ve,"",function(Xe){return Xe})):de!=null&&(z(de)&&(de=F(de,ve+(!de.key||me&&me.key===de.key?"":(""+de.key).replace(H,"$&/")+"/")+O)),q.push(de)),1;if(me=0,be=be===""?".":be+":",T(O))for(var pe=0;pe<O.length;pe++){Y=O[pe];var Ie=be+ie(Y,pe);me+=J(Y,q,ve,Ie,de)}else if(Ie=m(O),typeof Ie=="function")for(O=Ie.call(O),pe=0;!(Y=O.next()).done;)Y=Y.value,Ie=be+ie(Y,pe++),me+=J(Y,q,ve,Ie,de);else if(Y==="object")throw q=String(O),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return me}function G(O,q,ve){if(O==null)return O;var be=[],de=0;return J(O,be,"","",function(Y){return q.call(ve,Y,de++)}),be}function $(O){if(O._status===-1){var q=O._result;q=q(),q.then(function(ve){(O._status===0||O._status===-1)&&(O._status=1,O._result=ve)},function(ve){(O._status===0||O._status===-1)&&(O._status=2,O._result=ve)}),O._status===-1&&(O._status=0,O._result=q)}if(O._status===1)return O._result.default;throw O._result}var K={current:null},W={transition:null},re={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:W,ReactCurrentOwner:A};function ne(){throw Error("act(...) is not supported in production builds of React.")}return At.Children={map:G,forEach:function(O,q,ve){G(O,function(){q.apply(this,arguments)},ve)},count:function(O){var q=0;return G(O,function(){q++}),q},toArray:function(O){return G(O,function(q){return q})||[]},only:function(O){if(!z(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},At.Component=_,At.Fragment=t,At.Profiler=s,At.PureComponent=w,At.StrictMode=i,At.Suspense=h,At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,At.act=ne,At.cloneElement=function(O,q,ve){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var be=v({},O.props),de=O.key,Y=O.ref,me=O._owner;if(q!=null){if(q.ref!==void 0&&(Y=q.ref,me=A.current),q.key!==void 0&&(de=""+q.key),O.type&&O.type.defaultProps)var pe=O.type.defaultProps;for(Ie in q)L.call(q,Ie)&&!I.hasOwnProperty(Ie)&&(be[Ie]=q[Ie]===void 0&&pe!==void 0?pe[Ie]:q[Ie])}var Ie=arguments.length-2;if(Ie===1)be.children=ve;else if(1<Ie){pe=Array(Ie);for(var Xe=0;Xe<Ie;Xe++)pe[Xe]=arguments[Xe+2];be.children=pe}return{$$typeof:a,type:O.type,key:de,ref:Y,props:be,_owner:me}},At.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:o,_context:O},O.Consumer=O},At.createElement=C,At.createFactory=function(O){var q=C.bind(null,O);return q.type=O,q},At.createRef=function(){return{current:null}},At.forwardRef=function(O){return{$$typeof:u,render:O}},At.isValidElement=z,At.lazy=function(O){return{$$typeof:p,_payload:{_status:-1,_result:O},_init:$}},At.memo=function(O,q){return{$$typeof:f,type:O,compare:q===void 0?null:q}},At.startTransition=function(O){var q=W.transition;W.transition={};try{O()}finally{W.transition=q}},At.unstable_act=ne,At.useCallback=function(O,q){return K.current.useCallback(O,q)},At.useContext=function(O){return K.current.useContext(O)},At.useDebugValue=function(){},At.useDeferredValue=function(O){return K.current.useDeferredValue(O)},At.useEffect=function(O,q){return K.current.useEffect(O,q)},At.useId=function(){return K.current.useId()},At.useImperativeHandle=function(O,q,ve){return K.current.useImperativeHandle(O,q,ve)},At.useInsertionEffect=function(O,q){return K.current.useInsertionEffect(O,q)},At.useLayoutEffect=function(O,q){return K.current.useLayoutEffect(O,q)},At.useMemo=function(O,q){return K.current.useMemo(O,q)},At.useReducer=function(O,q,ve){return K.current.useReducer(O,q,ve)},At.useRef=function(O){return K.current.useRef(O)},At.useState=function(O){return K.current.useState(O)},At.useSyncExternalStore=function(O,q,ve){return K.current.useSyncExternalStore(O,q,ve)},At.useTransition=function(){return K.current.useTransition()},At.version="18.3.1",At}var x0;function bd(){return x0||(x0=1,Ch.exports=Y1()),Ch.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v0;function $1(){if(v0)return To;v0=1;var a=bd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(u,h,f){var p,g={},m=null,y=null;f!==void 0&&(m=""+f),h.key!==void 0&&(m=""+h.key),h.ref!==void 0&&(y=h.ref);for(p in h)i.call(h,p)&&!o.hasOwnProperty(p)&&(g[p]=h[p]);if(u&&u.defaultProps)for(p in h=u.defaultProps,h)g[p]===void 0&&(g[p]=h[p]);return{$$typeof:e,type:u,key:m,ref:y,props:g,_owner:s.current}}return To.Fragment=t,To.jsx=c,To.jsxs=c,To}var _0;function K1(){return _0||(_0=1,Th.exports=$1()),Th.exports}var V=K1(),Ql={},Ah={exports:{}},ni={},Rh={exports:{}},Ph={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0;function Z1(){return y0||(y0=1,(function(a){function e(W,re){var ne=W.length;W.push(re);e:for(;0<ne;){var O=ne-1>>>1,q=W[O];if(0<s(q,re))W[O]=re,W[ne]=q,ne=O;else break e}}function t(W){return W.length===0?null:W[0]}function i(W){if(W.length===0)return null;var re=W[0],ne=W.pop();if(ne!==re){W[0]=ne;e:for(var O=0,q=W.length,ve=q>>>1;O<ve;){var be=2*(O+1)-1,de=W[be],Y=be+1,me=W[Y];if(0>s(de,ne))Y<q&&0>s(me,de)?(W[O]=me,W[Y]=ne,O=Y):(W[O]=de,W[be]=ne,O=be);else if(Y<q&&0>s(me,ne))W[O]=me,W[Y]=ne,O=Y;else break e}}return re}function s(W,re){var ne=W.sortIndex-re.sortIndex;return ne!==0?ne:W.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;a.unstable_now=function(){return o.now()}}else{var c=Date,u=c.now();a.unstable_now=function(){return c.now()-u}}var h=[],f=[],p=1,g=null,m=3,y=!1,v=!1,b=!1,_=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(W){for(var re=t(f);re!==null;){if(re.callback===null)i(f);else if(re.startTime<=W)i(f),re.sortIndex=re.expirationTime,e(h,re);else break;re=t(f)}}function T(W){if(b=!1,E(W),!v)if(t(h)!==null)v=!0,$(L);else{var re=t(f);re!==null&&K(T,re.startTime-W)}}function L(W,re){v=!1,b&&(b=!1,S(C),C=-1),y=!0;var ne=m;try{for(E(re),g=t(h);g!==null&&(!(g.expirationTime>re)||W&&!D());){var O=g.callback;if(typeof O=="function"){g.callback=null,m=g.priorityLevel;var q=O(g.expirationTime<=re);re=a.unstable_now(),typeof q=="function"?g.callback=q:g===t(h)&&i(h),E(re)}else i(h);g=t(h)}if(g!==null)var ve=!0;else{var be=t(f);be!==null&&K(T,be.startTime-re),ve=!1}return ve}finally{g=null,m=ne,y=!1}}var A=!1,I=null,C=-1,F=5,z=-1;function D(){return!(a.unstable_now()-z<F)}function H(){if(I!==null){var W=a.unstable_now();z=W;var re=!0;try{re=I(!0,W)}finally{re?ie():(A=!1,I=null)}}else A=!1}var ie;if(typeof w=="function")ie=function(){w(H)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,G=J.port2;J.port1.onmessage=H,ie=function(){G.postMessage(null)}}else ie=function(){_(H,0)};function $(W){I=W,A||(A=!0,ie())}function K(W,re){C=_(function(){W(a.unstable_now())},re)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(W){W.callback=null},a.unstable_continueExecution=function(){v||y||(v=!0,$(L))},a.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<W?Math.floor(1e3/W):5},a.unstable_getCurrentPriorityLevel=function(){return m},a.unstable_getFirstCallbackNode=function(){return t(h)},a.unstable_next=function(W){switch(m){case 1:case 2:case 3:var re=3;break;default:re=m}var ne=m;m=re;try{return W()}finally{m=ne}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(W,re){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ne=m;m=W;try{return re()}finally{m=ne}},a.unstable_scheduleCallback=function(W,re,ne){var O=a.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?O+ne:O):ne=O,W){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=ne+q,W={id:p++,callback:re,priorityLevel:W,startTime:ne,expirationTime:q,sortIndex:-1},ne>O?(W.sortIndex=ne,e(f,W),t(h)===null&&W===t(f)&&(b?(S(C),C=-1):b=!0,K(T,ne-O))):(W.sortIndex=q,e(h,W),v||y||(v=!0,$(L))),W},a.unstable_shouldYield=D,a.unstable_wrapCallback=function(W){var re=m;return function(){var ne=m;m=re;try{return W.apply(this,arguments)}finally{m=ne}}}})(Ph)),Ph}var S0;function Q1(){return S0||(S0=1,Rh.exports=Z1()),Rh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M0;function J1(){if(M0)return ni;M0=1;var a=bd(),e=Q1();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function o(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function m(n){return h.call(g,n)?!0:h.call(p,n)?!1:f.test(n)?g[n]=!0:(p[n]=!0,!1)}function y(n,r,l,d){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function v(n,r,l,d){if(r===null||typeof r>"u"||y(n,r,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function b(n,r,l,d,x,M,P){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=d,this.attributeNamespace=x,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=M,this.removeEmptyString=P}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new b(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];_[r]=new b(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new b(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new b(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new b(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new b(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new b(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new b(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new b(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function w(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(S,w);_[r]=new b(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(S,w);_[r]=new b(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(S,w);_[r]=new b(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new b(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new b(n,1,!1,n.toLowerCase(),null,!0,!0)});function E(n,r,l,d){var x=_.hasOwnProperty(r)?_[r]:null;(x!==null?x.type!==0:d||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(v(r,l,x,d)&&(l=null),d||x===null?m(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):x.mustUseProperty?n[x.propertyName]=l===null?x.type===3?!1:"":l:(r=x.attributeName,d=x.attributeNamespace,l===null?n.removeAttribute(r):(x=x.type,l=x===3||x===4&&l===!0?"":""+l,d?n.setAttributeNS(d,r,l):n.setAttribute(r,l))))}var T=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),A=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),D=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),W=Symbol.iterator;function re(n){return n===null||typeof n!="object"?null:(n=W&&n[W]||n["@@iterator"],typeof n=="function"?n:null)}var ne=Object.assign,O;function q(n){if(O===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var ve=!1;function be(n,r){if(!n||ve)return"";ve=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(fe){var d=fe}Reflect.construct(n,[],r)}else{try{r.call()}catch(fe){d=fe}n.call(r.prototype)}else{try{throw Error()}catch(fe){d=fe}n()}}catch(fe){if(fe&&d&&typeof fe.stack=="string"){for(var x=fe.stack.split(`
`),M=d.stack.split(`
`),P=x.length-1,B=M.length-1;1<=P&&0<=B&&x[P]!==M[B];)B--;for(;1<=P&&0<=B;P--,B--)if(x[P]!==M[B]){if(P!==1||B!==1)do if(P--,B--,0>B||x[P]!==M[B]){var X=`
`+x[P].replace(" at new "," at ");return n.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",n.displayName)),X}while(1<=P&&0<=B);break}}}finally{ve=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?q(n):""}function de(n){switch(n.tag){case 5:return q(n.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return n=be(n.type,!1),n;case 11:return n=be(n.type.render,!1),n;case 1:return n=be(n.type,!0),n;default:return""}}function Y(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case A:return"Portal";case F:return"Profiler";case C:return"StrictMode";case ie:return"Suspense";case J:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case z:return(n._context.displayName||"Context")+".Provider";case H:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case G:return r=n.displayName||null,r!==null?r:Y(n.type)||"Memo";case $:r=n._payload,n=n._init;try{return Y(n(r))}catch{}}return null}function me(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Y(r);case 8:return r===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function pe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ie(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Xe(n){var r=Ie(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),d=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var x=l.get,M=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return x.call(this)},set:function(P){d=""+P,M.call(this,P)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(P){d=""+P},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Oe(n){n._valueTracker||(n._valueTracker=Xe(n))}function gt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),d="";return n&&(d=Ie(n)?n.checked?"true":"false":n.value),n=d,n!==l?(r.setValue(n),!0):!1}function rt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function bt(n,r){var l=r.checked;return ne({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Lt(n,r){var l=r.defaultValue==null?"":r.defaultValue,d=r.checked!=null?r.checked:r.defaultChecked;l=pe(r.value!=null?r.value:l),n._wrapperState={initialChecked:d,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function vt(n,r){r=r.checked,r!=null&&E(n,"checked",r,!1)}function Xt(n,r){vt(n,r);var l=pe(r.value),d=r.type;if(l!=null)d==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(d==="submit"||d==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?hn(n,r.type,l):r.hasOwnProperty("defaultValue")&&hn(n,r.type,pe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function kt(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var d=r.type;if(!(d!=="submit"&&d!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function hn(n,r,l){(r!=="number"||rt(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var Z=Array.isArray;function Ot(n,r,l,d){if(n=n.options,r){r={};for(var x=0;x<l.length;x++)r["$"+l[x]]=!0;for(l=0;l<n.length;l++)x=r.hasOwnProperty("$"+n[l].value),n[l].selected!==x&&(n[l].selected=x),x&&d&&(n[l].defaultSelected=!0)}else{for(l=""+pe(l),r=null,x=0;x<n.length;x++){if(n[x].value===l){n[x].selected=!0,d&&(n[x].defaultSelected=!0);return}r!==null||n[x].disabled||(r=n[x])}r!==null&&(r.selected=!0)}}function _t(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ut(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(Z(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:pe(l)}}function He(n,r){var l=pe(r.value),d=pe(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),d!=null&&(n.defaultValue=""+d)}function Wt(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function k(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function R(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?k(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var se,ye=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,d,x){MSApp.execUnsafeLocalFunction(function(){return n(r,l,d,x)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(se=se||document.createElement("div"),se.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=se.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function we(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Ae={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=["Webkit","ms","Moz","O"];Object.keys(Ae).forEach(function(n){Be.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ae[r]=Ae[n]})});function xe(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Ae.hasOwnProperty(n)&&Ae[n]?(""+r).trim():r+"px"}function Se(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var d=l.indexOf("--")===0,x=xe(l,r[l],d);l==="float"&&(l="cssFloat"),d?n.setProperty(l,x):n[l]=x}}var Re=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function je(n,r){if(r){if(Re[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Ne(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pe=null;function at(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var pt=null,xt=null,j=null;function Le(n){if(n=uo(n)){if(typeof pt!="function")throw Error(t(280));var r=n.stateNode;r&&(r=dl(r),pt(n.stateNode,n.type,r))}}function _e(n){xt?j?j.push(n):j=[n]:xt=n}function Ve(){if(xt){var n=xt,r=j;if(j=xt=null,Le(n),r)for(n=0;n<r.length;n++)Le(r[n])}}function ke(n,r){return n(r)}function ge(){}var Qe=!1;function dt(n,r,l){if(Qe)return n(r,l);Qe=!0;try{return ke(n,r,l)}finally{Qe=!1,(xt!==null||j!==null)&&(ge(),Ve())}}function Bt(n,r){var l=n.stateNode;if(l===null)return null;var d=dl(l);if(d===null)return null;l=d[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(n=n.type,d=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!d;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var wt=!1;if(u)try{var Pn={};Object.defineProperty(Pn,"passive",{get:function(){wt=!0}}),window.addEventListener("test",Pn,Pn),window.removeEventListener("test",Pn,Pn)}catch{wt=!1}function Yn(n,r,l,d,x,M,P,B,X){var fe=Array.prototype.slice.call(arguments,3);try{r.apply(l,fe)}catch(Te){this.onError(Te)}}var Ln=!1,Ar=null,ji=!1,ar=null,Ai={onError:function(n){Ln=!0,Ar=n}};function Rr(n,r,l,d,x,M,P,B,X){Ln=!1,Ar=null,Yn.apply(Ai,arguments)}function gs(n,r,l,d,x,M,P,B,X){if(Rr.apply(this,arguments),Ln){if(Ln){var fe=Ar;Ln=!1,Ar=null}else throw Error(t(198));ji||(ji=!0,ar=fe)}}function xi(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function Ri(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function vi(n){if(xi(n)!==n)throw Error(t(188))}function Pr(n){var r=n.alternate;if(!r){if(r=xi(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,d=r;;){var x=l.return;if(x===null)break;var M=x.alternate;if(M===null){if(d=x.return,d!==null){l=d;continue}break}if(x.child===M.child){for(M=x.child;M;){if(M===l)return vi(x),n;if(M===d)return vi(x),r;M=M.sibling}throw Error(t(188))}if(l.return!==d.return)l=x,d=M;else{for(var P=!1,B=x.child;B;){if(B===l){P=!0,l=x,d=M;break}if(B===d){P=!0,d=x,l=M;break}B=B.sibling}if(!P){for(B=M.child;B;){if(B===l){P=!0,l=M,d=x;break}if(B===d){P=!0,d=M,l=x;break}B=B.sibling}if(!P)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function xs(n){return n=Pr(n),n!==null?Lr(n):null}function Lr(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Lr(n);if(r!==null)return r;n=n.sibling}return null}var Me=e.unstable_scheduleCallback,Fe=e.unstable_cancelCallback,Ue=e.unstable_shouldYield,ut=e.unstable_requestPaint,ht=e.unstable_now,Ir=e.unstable_getCurrentPriorityLevel,vs=e.unstable_ImmediatePriority,N=e.unstable_UserBlockingPriority,te=e.unstable_NormalPriority,he=e.unstable_LowPriority,le=e.unstable_IdlePriority,oe=null,Ge=null;function Ke(n){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(oe,n,void 0,(n.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:yt,et=Math.log,st=Math.LN2;function yt(n){return n>>>=0,n===0?32:31-(et(n)/st|0)|0}var St=64,nt=4194304;function It(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function jt(n,r){var l=n.pendingLanes;if(l===0)return 0;var d=0,x=n.suspendedLanes,M=n.pingedLanes,P=l&268435455;if(P!==0){var B=P&~x;B!==0?d=It(B):(M&=P,M!==0&&(d=It(M)))}else P=l&~x,P!==0?d=It(P):M!==0&&(d=It(M));if(d===0)return 0;if(r!==0&&r!==d&&(r&x)===0&&(x=d&-d,M=r&-r,x>=M||x===16&&(M&4194240)!==0))return r;if((d&4)!==0&&(d|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=d;0<r;)l=31-ze(r),x=1<<l,d|=n[l],r&=~x;return d}function Jt(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ht(n,r){for(var l=n.suspendedLanes,d=n.pingedLanes,x=n.expirationTimes,M=n.pendingLanes;0<M;){var P=31-ze(M),B=1<<P,X=x[P];X===-1?((B&l)===0||(B&d)!==0)&&(x[P]=Jt(B,r)):X<=r&&(n.expiredLanes|=B),M&=~B}}function fn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function qe(){var n=St;return St<<=1,(St&4194240)===0&&(St=64),n}function In(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function Tt(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-ze(r),n[r]=l}function $n(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var d=n.eventTimes;for(n=n.expirationTimes;0<l;){var x=31-ze(l),M=1<<x;r[x]=0,d[x]=-1,n[x]=-1,l&=~M}}function Kn(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var d=31-ze(l),x=1<<d;x&r|n[d]&r&&(n[d]|=r),l&=~x}}var Ct=0;function or(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var zt,$t,Pi,Gt,Li,qi=!1,_s=[],Nr=null,Fr=null,Ur=null,Ya=new Map,$a=new Map,Dr=[],pv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jd(n,r){switch(n){case"focusin":case"focusout":Nr=null;break;case"dragenter":case"dragleave":Fr=null;break;case"mouseover":case"mouseout":Ur=null;break;case"pointerover":case"pointerout":Ya.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":$a.delete(r.pointerId)}}function Ka(n,r,l,d,x,M){return n===null||n.nativeEvent!==M?(n={blockedOn:r,domEventName:l,eventSystemFlags:d,nativeEvent:M,targetContainers:[x]},r!==null&&(r=uo(r),r!==null&&$t(r)),n):(n.eventSystemFlags|=d,r=n.targetContainers,x!==null&&r.indexOf(x)===-1&&r.push(x),n)}function mv(n,r,l,d,x){switch(r){case"focusin":return Nr=Ka(Nr,n,r,l,d,x),!0;case"dragenter":return Fr=Ka(Fr,n,r,l,d,x),!0;case"mouseover":return Ur=Ka(Ur,n,r,l,d,x),!0;case"pointerover":var M=x.pointerId;return Ya.set(M,Ka(Ya.get(M)||null,n,r,l,d,x)),!0;case"gotpointercapture":return M=x.pointerId,$a.set(M,Ka($a.get(M)||null,n,r,l,d,x)),!0}return!1}function ep(n){var r=ys(n.target);if(r!==null){var l=xi(r);if(l!==null){if(r=l.tag,r===13){if(r=Ri(l),r!==null){n.blockedOn=r,Li(n.priority,function(){Pi(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Jo(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Jc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var d=new l.constructor(l.type,l);Pe=d,l.target.dispatchEvent(d),Pe=null}else return r=uo(l),r!==null&&$t(r),n.blockedOn=l,!1;r.shift()}return!0}function tp(n,r,l){Jo(n)&&l.delete(r)}function gv(){qi=!1,Nr!==null&&Jo(Nr)&&(Nr=null),Fr!==null&&Jo(Fr)&&(Fr=null),Ur!==null&&Jo(Ur)&&(Ur=null),Ya.forEach(tp),$a.forEach(tp)}function Za(n,r){n.blockedOn===r&&(n.blockedOn=null,qi||(qi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,gv)))}function Qa(n){function r(x){return Za(x,n)}if(0<_s.length){Za(_s[0],n);for(var l=1;l<_s.length;l++){var d=_s[l];d.blockedOn===n&&(d.blockedOn=null)}}for(Nr!==null&&Za(Nr,n),Fr!==null&&Za(Fr,n),Ur!==null&&Za(Ur,n),Ya.forEach(r),$a.forEach(r),l=0;l<Dr.length;l++)d=Dr[l],d.blockedOn===n&&(d.blockedOn=null);for(;0<Dr.length&&(l=Dr[0],l.blockedOn===null);)ep(l),l.blockedOn===null&&Dr.shift()}var $s=T.ReactCurrentBatchConfig,el=!0;function xv(n,r,l,d){var x=Ct,M=$s.transition;$s.transition=null;try{Ct=1,Qc(n,r,l,d)}finally{Ct=x,$s.transition=M}}function vv(n,r,l,d){var x=Ct,M=$s.transition;$s.transition=null;try{Ct=4,Qc(n,r,l,d)}finally{Ct=x,$s.transition=M}}function Qc(n,r,l,d){if(el){var x=Jc(n,r,l,d);if(x===null)gu(n,r,d,tl,l),Jd(n,d);else if(mv(x,n,r,l,d))d.stopPropagation();else if(Jd(n,d),r&4&&-1<pv.indexOf(n)){for(;x!==null;){var M=uo(x);if(M!==null&&zt(M),M=Jc(n,r,l,d),M===null&&gu(n,r,d,tl,l),M===x)break;x=M}x!==null&&d.stopPropagation()}else gu(n,r,d,null,l)}}var tl=null;function Jc(n,r,l,d){if(tl=null,n=at(d),n=ys(n),n!==null)if(r=xi(n),r===null)n=null;else if(l=r.tag,l===13){if(n=Ri(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return tl=n,null}function np(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ir()){case vs:return 1;case N:return 4;case te:case he:return 16;case le:return 536870912;default:return 16}default:return 16}}var kr=null,eu=null,nl=null;function ip(){if(nl)return nl;var n,r=eu,l=r.length,d,x="value"in kr?kr.value:kr.textContent,M=x.length;for(n=0;n<l&&r[n]===x[n];n++);var P=l-n;for(d=1;d<=P&&r[l-d]===x[M-d];d++);return nl=x.slice(n,1<d?1-d:void 0)}function il(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function rl(){return!0}function rp(){return!1}function ai(n){function r(l,d,x,M,P){this._reactName=l,this._targetInst=x,this.type=d,this.nativeEvent=M,this.target=P,this.currentTarget=null;for(var B in n)n.hasOwnProperty(B)&&(l=n[B],this[B]=l?l(M):M[B]);return this.isDefaultPrevented=(M.defaultPrevented!=null?M.defaultPrevented:M.returnValue===!1)?rl:rp,this.isPropagationStopped=rp,this}return ne(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),r}var Ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tu=ai(Ks),Ja=ne({},Ks,{view:0,detail:0}),_v=ai(Ja),nu,iu,eo,sl=ne({},Ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==eo&&(eo&&n.type==="mousemove"?(nu=n.screenX-eo.screenX,iu=n.screenY-eo.screenY):iu=nu=0,eo=n),nu)},movementY:function(n){return"movementY"in n?n.movementY:iu}}),sp=ai(sl),yv=ne({},sl,{dataTransfer:0}),Sv=ai(yv),Mv=ne({},Ja,{relatedTarget:0}),ru=ai(Mv),wv=ne({},Ks,{animationName:0,elapsedTime:0,pseudoElement:0}),bv=ai(wv),Ev=ne({},Ks,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Tv=ai(Ev),Cv=ne({},Ks,{data:0}),ap=ai(Cv),Av={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Pv[n])?!!r[n]:!1}function su(){return Lv}var Iv=ne({},Ja,{key:function(n){if(n.key){var r=Av[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=il(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Rv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(n){return n.type==="keypress"?il(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?il(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Nv=ai(Iv),Fv=ne({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),op=ai(Fv),Uv=ne({},Ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),Dv=ai(Uv),kv=ne({},Ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ov=ai(kv),zv=ne({},sl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Bv=ai(zv),Hv=[9,13,27,32],au=u&&"CompositionEvent"in window,to=null;u&&"documentMode"in document&&(to=document.documentMode);var Gv=u&&"TextEvent"in window&&!to,lp=u&&(!au||to&&8<to&&11>=to),cp=" ",up=!1;function hp(n,r){switch(n){case"keyup":return Hv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Zs=!1;function Vv(n,r){switch(n){case"compositionend":return fp(r);case"keypress":return r.which!==32?null:(up=!0,cp);case"textInput":return n=r.data,n===cp&&up?null:n;default:return null}}function Wv(n,r){if(Zs)return n==="compositionend"||!au&&hp(n,r)?(n=ip(),nl=eu=kr=null,Zs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return lp&&r.locale!=="ko"?null:r.data;default:return null}}var Xv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dp(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Xv[n.type]:r==="textarea"}function pp(n,r,l,d){_e(d),r=ul(r,"onChange"),0<r.length&&(l=new tu("onChange","change",null,l,d),n.push({event:l,listeners:r}))}var no=null,io=null;function jv(n){Ip(n,0)}function al(n){var r=na(n);if(gt(r))return n}function qv(n,r){if(n==="change")return r}var mp=!1;if(u){var ou;if(u){var lu="oninput"in document;if(!lu){var gp=document.createElement("div");gp.setAttribute("oninput","return;"),lu=typeof gp.oninput=="function"}ou=lu}else ou=!1;mp=ou&&(!document.documentMode||9<document.documentMode)}function xp(){no&&(no.detachEvent("onpropertychange",vp),io=no=null)}function vp(n){if(n.propertyName==="value"&&al(io)){var r=[];pp(r,io,n,at(n)),dt(jv,r)}}function Yv(n,r,l){n==="focusin"?(xp(),no=r,io=l,no.attachEvent("onpropertychange",vp)):n==="focusout"&&xp()}function $v(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return al(io)}function Kv(n,r){if(n==="click")return al(r)}function Zv(n,r){if(n==="input"||n==="change")return al(r)}function Qv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Ii=typeof Object.is=="function"?Object.is:Qv;function ro(n,r){if(Ii(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),d=Object.keys(r);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var x=l[d];if(!h.call(r,x)||!Ii(n[x],r[x]))return!1}return!0}function _p(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function yp(n,r){var l=_p(n);n=0;for(var d;l;){if(l.nodeType===3){if(d=n+l.textContent.length,n<=r&&d>=r)return{node:l,offset:r-n};n=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=_p(l)}}function Sp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Sp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Mp(){for(var n=window,r=rt();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=rt(n.document)}return r}function cu(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Jv(n){var r=Mp(),l=n.focusedElem,d=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&Sp(l.ownerDocument.documentElement,l)){if(d!==null&&cu(l)){if(r=d.start,n=d.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var x=l.textContent.length,M=Math.min(d.start,x);d=d.end===void 0?M:Math.min(d.end,x),!n.extend&&M>d&&(x=d,d=M,M=x),x=yp(l,M);var P=yp(l,d);x&&P&&(n.rangeCount!==1||n.anchorNode!==x.node||n.anchorOffset!==x.offset||n.focusNode!==P.node||n.focusOffset!==P.offset)&&(r=r.createRange(),r.setStart(x.node,x.offset),n.removeAllRanges(),M>d?(n.addRange(r),n.extend(P.node,P.offset)):(r.setEnd(P.node,P.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var e1=u&&"documentMode"in document&&11>=document.documentMode,Qs=null,uu=null,so=null,hu=!1;function wp(n,r,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;hu||Qs==null||Qs!==rt(d)||(d=Qs,"selectionStart"in d&&cu(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),so&&ro(so,d)||(so=d,d=ul(uu,"onSelect"),0<d.length&&(r=new tu("onSelect","select",null,r,l),n.push({event:r,listeners:d}),r.target=Qs)))}function ol(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Js={animationend:ol("Animation","AnimationEnd"),animationiteration:ol("Animation","AnimationIteration"),animationstart:ol("Animation","AnimationStart"),transitionend:ol("Transition","TransitionEnd")},fu={},bp={};u&&(bp=document.createElement("div").style,"AnimationEvent"in window||(delete Js.animationend.animation,delete Js.animationiteration.animation,delete Js.animationstart.animation),"TransitionEvent"in window||delete Js.transitionend.transition);function ll(n){if(fu[n])return fu[n];if(!Js[n])return n;var r=Js[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in bp)return fu[n]=r[l];return n}var Ep=ll("animationend"),Tp=ll("animationiteration"),Cp=ll("animationstart"),Ap=ll("transitionend"),Rp=new Map,Pp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(n,r){Rp.set(n,r),o(r,[n])}for(var du=0;du<Pp.length;du++){var pu=Pp[du],t1=pu.toLowerCase(),n1=pu[0].toUpperCase()+pu.slice(1);Or(t1,"on"+n1)}Or(Ep,"onAnimationEnd"),Or(Tp,"onAnimationIteration"),Or(Cp,"onAnimationStart"),Or("dblclick","onDoubleClick"),Or("focusin","onFocus"),Or("focusout","onBlur"),Or(Ap,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ao="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),i1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ao));function Lp(n,r,l){var d=n.type||"unknown-event";n.currentTarget=l,gs(d,r,void 0,n),n.currentTarget=null}function Ip(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var d=n[l],x=d.event;d=d.listeners;e:{var M=void 0;if(r)for(var P=d.length-1;0<=P;P--){var B=d[P],X=B.instance,fe=B.currentTarget;if(B=B.listener,X!==M&&x.isPropagationStopped())break e;Lp(x,B,fe),M=X}else for(P=0;P<d.length;P++){if(B=d[P],X=B.instance,fe=B.currentTarget,B=B.listener,X!==M&&x.isPropagationStopped())break e;Lp(x,B,fe),M=X}}}if(ji)throw n=ar,ji=!1,ar=null,n}function Kt(n,r){var l=r[Mu];l===void 0&&(l=r[Mu]=new Set);var d=n+"__bubble";l.has(d)||(Np(r,n,2,!1),l.add(d))}function mu(n,r,l){var d=0;r&&(d|=4),Np(l,n,d,r)}var cl="_reactListening"+Math.random().toString(36).slice(2);function oo(n){if(!n[cl]){n[cl]=!0,i.forEach(function(l){l!=="selectionchange"&&(i1.has(l)||mu(l,!1,n),mu(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[cl]||(r[cl]=!0,mu("selectionchange",!1,r))}}function Np(n,r,l,d){switch(np(r)){case 1:var x=xv;break;case 4:x=vv;break;default:x=Qc}l=x.bind(null,r,l,n),x=void 0,!wt||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(x=!0),d?x!==void 0?n.addEventListener(r,l,{capture:!0,passive:x}):n.addEventListener(r,l,!0):x!==void 0?n.addEventListener(r,l,{passive:x}):n.addEventListener(r,l,!1)}function gu(n,r,l,d,x){var M=d;if((r&1)===0&&(r&2)===0&&d!==null)e:for(;;){if(d===null)return;var P=d.tag;if(P===3||P===4){var B=d.stateNode.containerInfo;if(B===x||B.nodeType===8&&B.parentNode===x)break;if(P===4)for(P=d.return;P!==null;){var X=P.tag;if((X===3||X===4)&&(X=P.stateNode.containerInfo,X===x||X.nodeType===8&&X.parentNode===x))return;P=P.return}for(;B!==null;){if(P=ys(B),P===null)return;if(X=P.tag,X===5||X===6){d=M=P;continue e}B=B.parentNode}}d=d.return}dt(function(){var fe=M,Te=at(l),Ce=[];e:{var Ee=Rp.get(n);if(Ee!==void 0){var Ye=tu,Je=n;switch(n){case"keypress":if(il(l)===0)break e;case"keydown":case"keyup":Ye=Nv;break;case"focusin":Je="focus",Ye=ru;break;case"focusout":Je="blur",Ye=ru;break;case"beforeblur":case"afterblur":Ye=ru;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ye=sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ye=Sv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ye=Dv;break;case Ep:case Tp:case Cp:Ye=bv;break;case Ap:Ye=Ov;break;case"scroll":Ye=_v;break;case"wheel":Ye=Bv;break;case"copy":case"cut":case"paste":Ye=Tv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ye=op}var tt=(r&4)!==0,an=!tt&&n==="scroll",ae=tt?Ee!==null?Ee+"Capture":null:Ee;tt=[];for(var ee=fe,ce;ee!==null;){ce=ee;var De=ce.stateNode;if(ce.tag===5&&De!==null&&(ce=De,ae!==null&&(De=Bt(ee,ae),De!=null&&tt.push(lo(ee,De,ce)))),an)break;ee=ee.return}0<tt.length&&(Ee=new Ye(Ee,Je,null,l,Te),Ce.push({event:Ee,listeners:tt}))}}if((r&7)===0){e:{if(Ee=n==="mouseover"||n==="pointerover",Ye=n==="mouseout"||n==="pointerout",Ee&&l!==Pe&&(Je=l.relatedTarget||l.fromElement)&&(ys(Je)||Je[lr]))break e;if((Ye||Ee)&&(Ee=Te.window===Te?Te:(Ee=Te.ownerDocument)?Ee.defaultView||Ee.parentWindow:window,Ye?(Je=l.relatedTarget||l.toElement,Ye=fe,Je=Je?ys(Je):null,Je!==null&&(an=xi(Je),Je!==an||Je.tag!==5&&Je.tag!==6)&&(Je=null)):(Ye=null,Je=fe),Ye!==Je)){if(tt=sp,De="onMouseLeave",ae="onMouseEnter",ee="mouse",(n==="pointerout"||n==="pointerover")&&(tt=op,De="onPointerLeave",ae="onPointerEnter",ee="pointer"),an=Ye==null?Ee:na(Ye),ce=Je==null?Ee:na(Je),Ee=new tt(De,ee+"leave",Ye,l,Te),Ee.target=an,Ee.relatedTarget=ce,De=null,ys(Te)===fe&&(tt=new tt(ae,ee+"enter",Je,l,Te),tt.target=ce,tt.relatedTarget=an,De=tt),an=De,Ye&&Je)t:{for(tt=Ye,ae=Je,ee=0,ce=tt;ce;ce=ea(ce))ee++;for(ce=0,De=ae;De;De=ea(De))ce++;for(;0<ee-ce;)tt=ea(tt),ee--;for(;0<ce-ee;)ae=ea(ae),ce--;for(;ee--;){if(tt===ae||ae!==null&&tt===ae.alternate)break t;tt=ea(tt),ae=ea(ae)}tt=null}else tt=null;Ye!==null&&Fp(Ce,Ee,Ye,tt,!1),Je!==null&&an!==null&&Fp(Ce,an,Je,tt,!0)}}e:{if(Ee=fe?na(fe):window,Ye=Ee.nodeName&&Ee.nodeName.toLowerCase(),Ye==="select"||Ye==="input"&&Ee.type==="file")var it=qv;else if(dp(Ee))if(mp)it=Zv;else{it=$v;var ot=Yv}else(Ye=Ee.nodeName)&&Ye.toLowerCase()==="input"&&(Ee.type==="checkbox"||Ee.type==="radio")&&(it=Kv);if(it&&(it=it(n,fe))){pp(Ce,it,l,Te);break e}ot&&ot(n,Ee,fe),n==="focusout"&&(ot=Ee._wrapperState)&&ot.controlled&&Ee.type==="number"&&hn(Ee,"number",Ee.value)}switch(ot=fe?na(fe):window,n){case"focusin":(dp(ot)||ot.contentEditable==="true")&&(Qs=ot,uu=fe,so=null);break;case"focusout":so=uu=Qs=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,wp(Ce,l,Te);break;case"selectionchange":if(e1)break;case"keydown":case"keyup":wp(Ce,l,Te)}var lt;if(au)e:{switch(n){case"compositionstart":var mt="onCompositionStart";break e;case"compositionend":mt="onCompositionEnd";break e;case"compositionupdate":mt="onCompositionUpdate";break e}mt=void 0}else Zs?hp(n,l)&&(mt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(mt="onCompositionStart");mt&&(lp&&l.locale!=="ko"&&(Zs||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&Zs&&(lt=ip()):(kr=Te,eu="value"in kr?kr.value:kr.textContent,Zs=!0)),ot=ul(fe,mt),0<ot.length&&(mt=new ap(mt,n,null,l,Te),Ce.push({event:mt,listeners:ot}),lt?mt.data=lt:(lt=fp(l),lt!==null&&(mt.data=lt)))),(lt=Gv?Vv(n,l):Wv(n,l))&&(fe=ul(fe,"onBeforeInput"),0<fe.length&&(Te=new ap("onBeforeInput","beforeinput",null,l,Te),Ce.push({event:Te,listeners:fe}),Te.data=lt))}Ip(Ce,r)})}function lo(n,r,l){return{instance:n,listener:r,currentTarget:l}}function ul(n,r){for(var l=r+"Capture",d=[];n!==null;){var x=n,M=x.stateNode;x.tag===5&&M!==null&&(x=M,M=Bt(n,l),M!=null&&d.unshift(lo(n,M,x)),M=Bt(n,r),M!=null&&d.push(lo(n,M,x))),n=n.return}return d}function ea(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Fp(n,r,l,d,x){for(var M=r._reactName,P=[];l!==null&&l!==d;){var B=l,X=B.alternate,fe=B.stateNode;if(X!==null&&X===d)break;B.tag===5&&fe!==null&&(B=fe,x?(X=Bt(l,M),X!=null&&P.unshift(lo(l,X,B))):x||(X=Bt(l,M),X!=null&&P.push(lo(l,X,B)))),l=l.return}P.length!==0&&n.push({event:r,listeners:P})}var r1=/\r\n?/g,s1=/\u0000|\uFFFD/g;function Up(n){return(typeof n=="string"?n:""+n).replace(r1,`
`).replace(s1,"")}function hl(n,r,l){if(r=Up(r),Up(n)!==r&&l)throw Error(t(425))}function fl(){}var xu=null,vu=null;function _u(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var yu=typeof setTimeout=="function"?setTimeout:void 0,a1=typeof clearTimeout=="function"?clearTimeout:void 0,Dp=typeof Promise=="function"?Promise:void 0,o1=typeof queueMicrotask=="function"?queueMicrotask:typeof Dp<"u"?function(n){return Dp.resolve(null).then(n).catch(l1)}:yu;function l1(n){setTimeout(function(){throw n})}function Su(n,r){var l=r,d=0;do{var x=l.nextSibling;if(n.removeChild(l),x&&x.nodeType===8)if(l=x.data,l==="/$"){if(d===0){n.removeChild(x),Qa(r);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=x}while(l);Qa(r)}function zr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function kp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var ta=Math.random().toString(36).slice(2),Yi="__reactFiber$"+ta,co="__reactProps$"+ta,lr="__reactContainer$"+ta,Mu="__reactEvents$"+ta,c1="__reactListeners$"+ta,u1="__reactHandles$"+ta;function ys(n){var r=n[Yi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[lr]||l[Yi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=kp(n);n!==null;){if(l=n[Yi])return l;n=kp(n)}return r}n=l,l=n.parentNode}return null}function uo(n){return n=n[Yi]||n[lr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function na(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function dl(n){return n[co]||null}var wu=[],ia=-1;function Br(n){return{current:n}}function Zt(n){0>ia||(n.current=wu[ia],wu[ia]=null,ia--)}function qt(n,r){ia++,wu[ia]=n.current,n.current=r}var Hr={},Dn=Br(Hr),Zn=Br(!1),Ss=Hr;function ra(n,r){var l=n.type.contextTypes;if(!l)return Hr;var d=n.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===r)return d.__reactInternalMemoizedMaskedChildContext;var x={},M;for(M in l)x[M]=r[M];return d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=x),x}function Qn(n){return n=n.childContextTypes,n!=null}function pl(){Zt(Zn),Zt(Dn)}function Op(n,r,l){if(Dn.current!==Hr)throw Error(t(168));qt(Dn,r),qt(Zn,l)}function zp(n,r,l){var d=n.stateNode;if(r=r.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var x in d)if(!(x in r))throw Error(t(108,me(n)||"Unknown",x));return ne({},l,d)}function ml(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Hr,Ss=Dn.current,qt(Dn,n),qt(Zn,Zn.current),!0}function Bp(n,r,l){var d=n.stateNode;if(!d)throw Error(t(169));l?(n=zp(n,r,Ss),d.__reactInternalMemoizedMergedChildContext=n,Zt(Zn),Zt(Dn),qt(Dn,n)):Zt(Zn),qt(Zn,l)}var cr=null,gl=!1,bu=!1;function Hp(n){cr===null?cr=[n]:cr.push(n)}function h1(n){gl=!0,Hp(n)}function Gr(){if(!bu&&cr!==null){bu=!0;var n=0,r=Ct;try{var l=cr;for(Ct=1;n<l.length;n++){var d=l[n];do d=d(!0);while(d!==null)}cr=null,gl=!1}catch(x){throw cr!==null&&(cr=cr.slice(n+1)),Me(vs,Gr),x}finally{Ct=r,bu=!1}}return null}var sa=[],aa=0,xl=null,vl=0,_i=[],yi=0,Ms=null,ur=1,hr="";function ws(n,r){sa[aa++]=vl,sa[aa++]=xl,xl=n,vl=r}function Gp(n,r,l){_i[yi++]=ur,_i[yi++]=hr,_i[yi++]=Ms,Ms=n;var d=ur;n=hr;var x=32-ze(d)-1;d&=~(1<<x),l+=1;var M=32-ze(r)+x;if(30<M){var P=x-x%5;M=(d&(1<<P)-1).toString(32),d>>=P,x-=P,ur=1<<32-ze(r)+x|l<<x|d,hr=M+n}else ur=1<<M|l<<x|d,hr=n}function Eu(n){n.return!==null&&(ws(n,1),Gp(n,1,0))}function Tu(n){for(;n===xl;)xl=sa[--aa],sa[aa]=null,vl=sa[--aa],sa[aa]=null;for(;n===Ms;)Ms=_i[--yi],_i[yi]=null,hr=_i[--yi],_i[yi]=null,ur=_i[--yi],_i[yi]=null}var oi=null,li=null,en=!1,Ni=null;function Vp(n,r){var l=bi(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Wp(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,oi=n,li=zr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,oi=n,li=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=Ms!==null?{id:ur,overflow:hr}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=bi(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,oi=n,li=null,!0):!1;default:return!1}}function Cu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Au(n){if(en){var r=li;if(r){var l=r;if(!Wp(n,r)){if(Cu(n))throw Error(t(418));r=zr(l.nextSibling);var d=oi;r&&Wp(n,r)?Vp(d,l):(n.flags=n.flags&-4097|2,en=!1,oi=n)}}else{if(Cu(n))throw Error(t(418));n.flags=n.flags&-4097|2,en=!1,oi=n}}}function Xp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;oi=n}function _l(n){if(n!==oi)return!1;if(!en)return Xp(n),en=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!_u(n.type,n.memoizedProps)),r&&(r=li)){if(Cu(n))throw jp(),Error(t(418));for(;r;)Vp(n,r),r=zr(r.nextSibling)}if(Xp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){li=zr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}li=null}}else li=oi?zr(n.stateNode.nextSibling):null;return!0}function jp(){for(var n=li;n;)n=zr(n.nextSibling)}function oa(){li=oi=null,en=!1}function Ru(n){Ni===null?Ni=[n]:Ni.push(n)}var f1=T.ReactCurrentBatchConfig;function ho(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,n));var x=d,M=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===M?r.ref:(r=function(P){var B=x.refs;P===null?delete B[M]:B[M]=P},r._stringRef=M,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function yl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function qp(n){var r=n._init;return r(n._payload)}function Yp(n){function r(ae,ee){if(n){var ce=ae.deletions;ce===null?(ae.deletions=[ee],ae.flags|=16):ce.push(ee)}}function l(ae,ee){if(!n)return null;for(;ee!==null;)r(ae,ee),ee=ee.sibling;return null}function d(ae,ee){for(ae=new Map;ee!==null;)ee.key!==null?ae.set(ee.key,ee):ae.set(ee.index,ee),ee=ee.sibling;return ae}function x(ae,ee){return ae=Kr(ae,ee),ae.index=0,ae.sibling=null,ae}function M(ae,ee,ce){return ae.index=ce,n?(ce=ae.alternate,ce!==null?(ce=ce.index,ce<ee?(ae.flags|=2,ee):ce):(ae.flags|=2,ee)):(ae.flags|=1048576,ee)}function P(ae){return n&&ae.alternate===null&&(ae.flags|=2),ae}function B(ae,ee,ce,De){return ee===null||ee.tag!==6?(ee=yh(ce,ae.mode,De),ee.return=ae,ee):(ee=x(ee,ce),ee.return=ae,ee)}function X(ae,ee,ce,De){var it=ce.type;return it===I?Te(ae,ee,ce.props.children,De,ce.key):ee!==null&&(ee.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===$&&qp(it)===ee.type)?(De=x(ee,ce.props),De.ref=ho(ae,ee,ce),De.return=ae,De):(De=Wl(ce.type,ce.key,ce.props,null,ae.mode,De),De.ref=ho(ae,ee,ce),De.return=ae,De)}function fe(ae,ee,ce,De){return ee===null||ee.tag!==4||ee.stateNode.containerInfo!==ce.containerInfo||ee.stateNode.implementation!==ce.implementation?(ee=Sh(ce,ae.mode,De),ee.return=ae,ee):(ee=x(ee,ce.children||[]),ee.return=ae,ee)}function Te(ae,ee,ce,De,it){return ee===null||ee.tag!==7?(ee=Ls(ce,ae.mode,De,it),ee.return=ae,ee):(ee=x(ee,ce),ee.return=ae,ee)}function Ce(ae,ee,ce){if(typeof ee=="string"&&ee!==""||typeof ee=="number")return ee=yh(""+ee,ae.mode,ce),ee.return=ae,ee;if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case L:return ce=Wl(ee.type,ee.key,ee.props,null,ae.mode,ce),ce.ref=ho(ae,null,ee),ce.return=ae,ce;case A:return ee=Sh(ee,ae.mode,ce),ee.return=ae,ee;case $:var De=ee._init;return Ce(ae,De(ee._payload),ce)}if(Z(ee)||re(ee))return ee=Ls(ee,ae.mode,ce,null),ee.return=ae,ee;yl(ae,ee)}return null}function Ee(ae,ee,ce,De){var it=ee!==null?ee.key:null;if(typeof ce=="string"&&ce!==""||typeof ce=="number")return it!==null?null:B(ae,ee,""+ce,De);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case L:return ce.key===it?X(ae,ee,ce,De):null;case A:return ce.key===it?fe(ae,ee,ce,De):null;case $:return it=ce._init,Ee(ae,ee,it(ce._payload),De)}if(Z(ce)||re(ce))return it!==null?null:Te(ae,ee,ce,De,null);yl(ae,ce)}return null}function Ye(ae,ee,ce,De,it){if(typeof De=="string"&&De!==""||typeof De=="number")return ae=ae.get(ce)||null,B(ee,ae,""+De,it);if(typeof De=="object"&&De!==null){switch(De.$$typeof){case L:return ae=ae.get(De.key===null?ce:De.key)||null,X(ee,ae,De,it);case A:return ae=ae.get(De.key===null?ce:De.key)||null,fe(ee,ae,De,it);case $:var ot=De._init;return Ye(ae,ee,ce,ot(De._payload),it)}if(Z(De)||re(De))return ae=ae.get(ce)||null,Te(ee,ae,De,it,null);yl(ee,De)}return null}function Je(ae,ee,ce,De){for(var it=null,ot=null,lt=ee,mt=ee=0,Tn=null;lt!==null&&mt<ce.length;mt++){lt.index>mt?(Tn=lt,lt=null):Tn=lt.sibling;var Dt=Ee(ae,lt,ce[mt],De);if(Dt===null){lt===null&&(lt=Tn);break}n&&lt&&Dt.alternate===null&&r(ae,lt),ee=M(Dt,ee,mt),ot===null?it=Dt:ot.sibling=Dt,ot=Dt,lt=Tn}if(mt===ce.length)return l(ae,lt),en&&ws(ae,mt),it;if(lt===null){for(;mt<ce.length;mt++)lt=Ce(ae,ce[mt],De),lt!==null&&(ee=M(lt,ee,mt),ot===null?it=lt:ot.sibling=lt,ot=lt);return en&&ws(ae,mt),it}for(lt=d(ae,lt);mt<ce.length;mt++)Tn=Ye(lt,ae,mt,ce[mt],De),Tn!==null&&(n&&Tn.alternate!==null&&lt.delete(Tn.key===null?mt:Tn.key),ee=M(Tn,ee,mt),ot===null?it=Tn:ot.sibling=Tn,ot=Tn);return n&&lt.forEach(function(Zr){return r(ae,Zr)}),en&&ws(ae,mt),it}function tt(ae,ee,ce,De){var it=re(ce);if(typeof it!="function")throw Error(t(150));if(ce=it.call(ce),ce==null)throw Error(t(151));for(var ot=it=null,lt=ee,mt=ee=0,Tn=null,Dt=ce.next();lt!==null&&!Dt.done;mt++,Dt=ce.next()){lt.index>mt?(Tn=lt,lt=null):Tn=lt.sibling;var Zr=Ee(ae,lt,Dt.value,De);if(Zr===null){lt===null&&(lt=Tn);break}n&&lt&&Zr.alternate===null&&r(ae,lt),ee=M(Zr,ee,mt),ot===null?it=Zr:ot.sibling=Zr,ot=Zr,lt=Tn}if(Dt.done)return l(ae,lt),en&&ws(ae,mt),it;if(lt===null){for(;!Dt.done;mt++,Dt=ce.next())Dt=Ce(ae,Dt.value,De),Dt!==null&&(ee=M(Dt,ee,mt),ot===null?it=Dt:ot.sibling=Dt,ot=Dt);return en&&ws(ae,mt),it}for(lt=d(ae,lt);!Dt.done;mt++,Dt=ce.next())Dt=Ye(lt,ae,mt,Dt.value,De),Dt!==null&&(n&&Dt.alternate!==null&&lt.delete(Dt.key===null?mt:Dt.key),ee=M(Dt,ee,mt),ot===null?it=Dt:ot.sibling=Dt,ot=Dt);return n&&lt.forEach(function(X1){return r(ae,X1)}),en&&ws(ae,mt),it}function an(ae,ee,ce,De){if(typeof ce=="object"&&ce!==null&&ce.type===I&&ce.key===null&&(ce=ce.props.children),typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case L:e:{for(var it=ce.key,ot=ee;ot!==null;){if(ot.key===it){if(it=ce.type,it===I){if(ot.tag===7){l(ae,ot.sibling),ee=x(ot,ce.props.children),ee.return=ae,ae=ee;break e}}else if(ot.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===$&&qp(it)===ot.type){l(ae,ot.sibling),ee=x(ot,ce.props),ee.ref=ho(ae,ot,ce),ee.return=ae,ae=ee;break e}l(ae,ot);break}else r(ae,ot);ot=ot.sibling}ce.type===I?(ee=Ls(ce.props.children,ae.mode,De,ce.key),ee.return=ae,ae=ee):(De=Wl(ce.type,ce.key,ce.props,null,ae.mode,De),De.ref=ho(ae,ee,ce),De.return=ae,ae=De)}return P(ae);case A:e:{for(ot=ce.key;ee!==null;){if(ee.key===ot)if(ee.tag===4&&ee.stateNode.containerInfo===ce.containerInfo&&ee.stateNode.implementation===ce.implementation){l(ae,ee.sibling),ee=x(ee,ce.children||[]),ee.return=ae,ae=ee;break e}else{l(ae,ee);break}else r(ae,ee);ee=ee.sibling}ee=Sh(ce,ae.mode,De),ee.return=ae,ae=ee}return P(ae);case $:return ot=ce._init,an(ae,ee,ot(ce._payload),De)}if(Z(ce))return Je(ae,ee,ce,De);if(re(ce))return tt(ae,ee,ce,De);yl(ae,ce)}return typeof ce=="string"&&ce!==""||typeof ce=="number"?(ce=""+ce,ee!==null&&ee.tag===6?(l(ae,ee.sibling),ee=x(ee,ce),ee.return=ae,ae=ee):(l(ae,ee),ee=yh(ce,ae.mode,De),ee.return=ae,ae=ee),P(ae)):l(ae,ee)}return an}var la=Yp(!0),$p=Yp(!1),Sl=Br(null),Ml=null,ca=null,Pu=null;function Lu(){Pu=ca=Ml=null}function Iu(n){var r=Sl.current;Zt(Sl),n._currentValue=r}function Nu(n,r,l){for(;n!==null;){var d=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,d!==null&&(d.childLanes|=r)):d!==null&&(d.childLanes&r)!==r&&(d.childLanes|=r),n===l)break;n=n.return}}function ua(n,r){Ml=n,Pu=ca=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Jn=!0),n.firstContext=null)}function Si(n){var r=n._currentValue;if(Pu!==n)if(n={context:n,memoizedValue:r,next:null},ca===null){if(Ml===null)throw Error(t(308));ca=n,Ml.dependencies={lanes:0,firstContext:n}}else ca=ca.next=n;return r}var bs=null;function Fu(n){bs===null?bs=[n]:bs.push(n)}function Kp(n,r,l,d){var x=r.interleaved;return x===null?(l.next=l,Fu(r)):(l.next=x.next,x.next=l),r.interleaved=l,fr(n,d)}function fr(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Vr=!1;function Uu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function dr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Wr(n,r,l){var d=n.updateQueue;if(d===null)return null;if(d=d.shared,(Nt&2)!==0){var x=d.pending;return x===null?r.next=r:(r.next=x.next,x.next=r),d.pending=r,fr(n,l)}return x=d.interleaved,x===null?(r.next=r,Fu(d)):(r.next=x.next,x.next=r),d.interleaved=r,fr(n,l)}function wl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,Kn(n,l)}}function Qp(n,r){var l=n.updateQueue,d=n.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var x=null,M=null;if(l=l.firstBaseUpdate,l!==null){do{var P={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};M===null?x=M=P:M=M.next=P,l=l.next}while(l!==null);M===null?x=M=r:M=M.next=r}else x=M=r;l={baseState:d.baseState,firstBaseUpdate:x,lastBaseUpdate:M,shared:d.shared,effects:d.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function bl(n,r,l,d){var x=n.updateQueue;Vr=!1;var M=x.firstBaseUpdate,P=x.lastBaseUpdate,B=x.shared.pending;if(B!==null){x.shared.pending=null;var X=B,fe=X.next;X.next=null,P===null?M=fe:P.next=fe,P=X;var Te=n.alternate;Te!==null&&(Te=Te.updateQueue,B=Te.lastBaseUpdate,B!==P&&(B===null?Te.firstBaseUpdate=fe:B.next=fe,Te.lastBaseUpdate=X))}if(M!==null){var Ce=x.baseState;P=0,Te=fe=X=null,B=M;do{var Ee=B.lane,Ye=B.eventTime;if((d&Ee)===Ee){Te!==null&&(Te=Te.next={eventTime:Ye,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var Je=n,tt=B;switch(Ee=r,Ye=l,tt.tag){case 1:if(Je=tt.payload,typeof Je=="function"){Ce=Je.call(Ye,Ce,Ee);break e}Ce=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=tt.payload,Ee=typeof Je=="function"?Je.call(Ye,Ce,Ee):Je,Ee==null)break e;Ce=ne({},Ce,Ee);break e;case 2:Vr=!0}}B.callback!==null&&B.lane!==0&&(n.flags|=64,Ee=x.effects,Ee===null?x.effects=[B]:Ee.push(B))}else Ye={eventTime:Ye,lane:Ee,tag:B.tag,payload:B.payload,callback:B.callback,next:null},Te===null?(fe=Te=Ye,X=Ce):Te=Te.next=Ye,P|=Ee;if(B=B.next,B===null){if(B=x.shared.pending,B===null)break;Ee=B,B=Ee.next,Ee.next=null,x.lastBaseUpdate=Ee,x.shared.pending=null}}while(!0);if(Te===null&&(X=Ce),x.baseState=X,x.firstBaseUpdate=fe,x.lastBaseUpdate=Te,r=x.shared.interleaved,r!==null){x=r;do P|=x.lane,x=x.next;while(x!==r)}else M===null&&(x.shared.lanes=0);Cs|=P,n.lanes=P,n.memoizedState=Ce}}function Jp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var d=n[r],x=d.callback;if(x!==null){if(d.callback=null,d=l,typeof x!="function")throw Error(t(191,x));x.call(d)}}}var fo={},$i=Br(fo),po=Br(fo),mo=Br(fo);function Es(n){if(n===fo)throw Error(t(174));return n}function Du(n,r){switch(qt(mo,r),qt(po,n),qt($i,fo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:R(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=R(r,n)}Zt($i),qt($i,r)}function ha(){Zt($i),Zt(po),Zt(mo)}function em(n){Es(mo.current);var r=Es($i.current),l=R(r,n.type);r!==l&&(qt(po,n),qt($i,l))}function ku(n){po.current===n&&(Zt($i),Zt(po))}var tn=Br(0);function El(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ou=[];function zu(){for(var n=0;n<Ou.length;n++)Ou[n]._workInProgressVersionPrimary=null;Ou.length=0}var Tl=T.ReactCurrentDispatcher,Bu=T.ReactCurrentBatchConfig,Ts=0,nn=null,vn=null,bn=null,Cl=!1,go=!1,xo=0,d1=0;function kn(){throw Error(t(321))}function Hu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!Ii(n[l],r[l]))return!1;return!0}function Gu(n,r,l,d,x,M){if(Ts=M,nn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Tl.current=n===null||n.memoizedState===null?x1:v1,n=l(d,x),go){M=0;do{if(go=!1,xo=0,25<=M)throw Error(t(301));M+=1,bn=vn=null,r.updateQueue=null,Tl.current=_1,n=l(d,x)}while(go)}if(Tl.current=Pl,r=vn!==null&&vn.next!==null,Ts=0,bn=vn=nn=null,Cl=!1,r)throw Error(t(300));return n}function Vu(){var n=xo!==0;return xo=0,n}function Ki(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bn===null?nn.memoizedState=bn=n:bn=bn.next=n,bn}function Mi(){if(vn===null){var n=nn.alternate;n=n!==null?n.memoizedState:null}else n=vn.next;var r=bn===null?nn.memoizedState:bn.next;if(r!==null)bn=r,vn=n;else{if(n===null)throw Error(t(310));vn=n,n={memoizedState:vn.memoizedState,baseState:vn.baseState,baseQueue:vn.baseQueue,queue:vn.queue,next:null},bn===null?nn.memoizedState=bn=n:bn=bn.next=n}return bn}function vo(n,r){return typeof r=="function"?r(n):r}function Wu(n){var r=Mi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=vn,x=d.baseQueue,M=l.pending;if(M!==null){if(x!==null){var P=x.next;x.next=M.next,M.next=P}d.baseQueue=x=M,l.pending=null}if(x!==null){M=x.next,d=d.baseState;var B=P=null,X=null,fe=M;do{var Te=fe.lane;if((Ts&Te)===Te)X!==null&&(X=X.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),d=fe.hasEagerState?fe.eagerState:n(d,fe.action);else{var Ce={lane:Te,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};X===null?(B=X=Ce,P=d):X=X.next=Ce,nn.lanes|=Te,Cs|=Te}fe=fe.next}while(fe!==null&&fe!==M);X===null?P=d:X.next=B,Ii(d,r.memoizedState)||(Jn=!0),r.memoizedState=d,r.baseState=P,r.baseQueue=X,l.lastRenderedState=d}if(n=l.interleaved,n!==null){x=n;do M=x.lane,nn.lanes|=M,Cs|=M,x=x.next;while(x!==n)}else x===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Xu(n){var r=Mi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=l.dispatch,x=l.pending,M=r.memoizedState;if(x!==null){l.pending=null;var P=x=x.next;do M=n(M,P.action),P=P.next;while(P!==x);Ii(M,r.memoizedState)||(Jn=!0),r.memoizedState=M,r.baseQueue===null&&(r.baseState=M),l.lastRenderedState=M}return[M,d]}function tm(){}function nm(n,r){var l=nn,d=Mi(),x=r(),M=!Ii(d.memoizedState,x);if(M&&(d.memoizedState=x,Jn=!0),d=d.queue,ju(sm.bind(null,l,d,n),[n]),d.getSnapshot!==r||M||bn!==null&&bn.memoizedState.tag&1){if(l.flags|=2048,_o(9,rm.bind(null,l,d,x,r),void 0,null),En===null)throw Error(t(349));(Ts&30)!==0||im(l,r,x)}return x}function im(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=nn.updateQueue,r===null?(r={lastEffect:null,stores:null},nn.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function rm(n,r,l,d){r.value=l,r.getSnapshot=d,am(r)&&om(n)}function sm(n,r,l){return l(function(){am(r)&&om(n)})}function am(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!Ii(n,l)}catch{return!0}}function om(n){var r=fr(n,1);r!==null&&ki(r,n,1,-1)}function lm(n){var r=Ki();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:n},r.queue=n,n=n.dispatch=g1.bind(null,nn,n),[r.memoizedState,n]}function _o(n,r,l,d){return n={tag:n,create:r,destroy:l,deps:d,next:null},r=nn.updateQueue,r===null?(r={lastEffect:null,stores:null},nn.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(d=l.next,l.next=n,n.next=d,r.lastEffect=n)),n}function cm(){return Mi().memoizedState}function Al(n,r,l,d){var x=Ki();nn.flags|=n,x.memoizedState=_o(1|r,l,void 0,d===void 0?null:d)}function Rl(n,r,l,d){var x=Mi();d=d===void 0?null:d;var M=void 0;if(vn!==null){var P=vn.memoizedState;if(M=P.destroy,d!==null&&Hu(d,P.deps)){x.memoizedState=_o(r,l,M,d);return}}nn.flags|=n,x.memoizedState=_o(1|r,l,M,d)}function um(n,r){return Al(8390656,8,n,r)}function ju(n,r){return Rl(2048,8,n,r)}function hm(n,r){return Rl(4,2,n,r)}function fm(n,r){return Rl(4,4,n,r)}function dm(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function pm(n,r,l){return l=l!=null?l.concat([n]):null,Rl(4,4,dm.bind(null,r,n),l)}function qu(){}function mm(n,r){var l=Mi();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&Hu(r,d[1])?d[0]:(l.memoizedState=[n,r],n)}function gm(n,r){var l=Mi();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&Hu(r,d[1])?d[0]:(n=n(),l.memoizedState=[n,r],n)}function xm(n,r,l){return(Ts&21)===0?(n.baseState&&(n.baseState=!1,Jn=!0),n.memoizedState=l):(Ii(l,r)||(l=qe(),nn.lanes|=l,Cs|=l,n.baseState=!0),r)}function p1(n,r){var l=Ct;Ct=l!==0&&4>l?l:4,n(!0);var d=Bu.transition;Bu.transition={};try{n(!1),r()}finally{Ct=l,Bu.transition=d}}function vm(){return Mi().memoizedState}function m1(n,r,l){var d=Yr(n);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},_m(n))ym(r,l);else if(l=Kp(n,r,l,d),l!==null){var x=Xn();ki(l,n,d,x),Sm(l,r,d)}}function g1(n,r,l){var d=Yr(n),x={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(_m(n))ym(r,x);else{var M=n.alternate;if(n.lanes===0&&(M===null||M.lanes===0)&&(M=r.lastRenderedReducer,M!==null))try{var P=r.lastRenderedState,B=M(P,l);if(x.hasEagerState=!0,x.eagerState=B,Ii(B,P)){var X=r.interleaved;X===null?(x.next=x,Fu(r)):(x.next=X.next,X.next=x),r.interleaved=x;return}}catch{}finally{}l=Kp(n,r,x,d),l!==null&&(x=Xn(),ki(l,n,d,x),Sm(l,r,d))}}function _m(n){var r=n.alternate;return n===nn||r!==null&&r===nn}function ym(n,r){go=Cl=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function Sm(n,r,l){if((l&4194240)!==0){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,Kn(n,l)}}var Pl={readContext:Si,useCallback:kn,useContext:kn,useEffect:kn,useImperativeHandle:kn,useInsertionEffect:kn,useLayoutEffect:kn,useMemo:kn,useReducer:kn,useRef:kn,useState:kn,useDebugValue:kn,useDeferredValue:kn,useTransition:kn,useMutableSource:kn,useSyncExternalStore:kn,useId:kn,unstable_isNewReconciler:!1},x1={readContext:Si,useCallback:function(n,r){return Ki().memoizedState=[n,r===void 0?null:r],n},useContext:Si,useEffect:um,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,Al(4194308,4,dm.bind(null,r,n),l)},useLayoutEffect:function(n,r){return Al(4194308,4,n,r)},useInsertionEffect:function(n,r){return Al(4,2,n,r)},useMemo:function(n,r){var l=Ki();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var d=Ki();return r=l!==void 0?l(r):r,d.memoizedState=d.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},d.queue=n,n=n.dispatch=m1.bind(null,nn,n),[d.memoizedState,n]},useRef:function(n){var r=Ki();return n={current:n},r.memoizedState=n},useState:lm,useDebugValue:qu,useDeferredValue:function(n){return Ki().memoizedState=n},useTransition:function(){var n=lm(!1),r=n[0];return n=p1.bind(null,n[1]),Ki().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var d=nn,x=Ki();if(en){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),En===null)throw Error(t(349));(Ts&30)!==0||im(d,r,l)}x.memoizedState=l;var M={value:l,getSnapshot:r};return x.queue=M,um(sm.bind(null,d,M,n),[n]),d.flags|=2048,_o(9,rm.bind(null,d,M,l,r),void 0,null),l},useId:function(){var n=Ki(),r=En.identifierPrefix;if(en){var l=hr,d=ur;l=(d&~(1<<32-ze(d)-1)).toString(32)+l,r=":"+r+"R"+l,l=xo++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=d1++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},v1={readContext:Si,useCallback:mm,useContext:Si,useEffect:ju,useImperativeHandle:pm,useInsertionEffect:hm,useLayoutEffect:fm,useMemo:gm,useReducer:Wu,useRef:cm,useState:function(){return Wu(vo)},useDebugValue:qu,useDeferredValue:function(n){var r=Mi();return xm(r,vn.memoizedState,n)},useTransition:function(){var n=Wu(vo)[0],r=Mi().memoizedState;return[n,r]},useMutableSource:tm,useSyncExternalStore:nm,useId:vm,unstable_isNewReconciler:!1},_1={readContext:Si,useCallback:mm,useContext:Si,useEffect:ju,useImperativeHandle:pm,useInsertionEffect:hm,useLayoutEffect:fm,useMemo:gm,useReducer:Xu,useRef:cm,useState:function(){return Xu(vo)},useDebugValue:qu,useDeferredValue:function(n){var r=Mi();return vn===null?r.memoizedState=n:xm(r,vn.memoizedState,n)},useTransition:function(){var n=Xu(vo)[0],r=Mi().memoizedState;return[n,r]},useMutableSource:tm,useSyncExternalStore:nm,useId:vm,unstable_isNewReconciler:!1};function Fi(n,r){if(n&&n.defaultProps){r=ne({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Yu(n,r,l,d){r=n.memoizedState,l=l(d,r),l=l==null?r:ne({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Ll={isMounted:function(n){return(n=n._reactInternals)?xi(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var d=Xn(),x=Yr(n),M=dr(d,x);M.payload=r,l!=null&&(M.callback=l),r=Wr(n,M,x),r!==null&&(ki(r,n,x,d),wl(r,n,x))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var d=Xn(),x=Yr(n),M=dr(d,x);M.tag=1,M.payload=r,l!=null&&(M.callback=l),r=Wr(n,M,x),r!==null&&(ki(r,n,x,d),wl(r,n,x))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Xn(),d=Yr(n),x=dr(l,d);x.tag=2,r!=null&&(x.callback=r),r=Wr(n,x,d),r!==null&&(ki(r,n,d,l),wl(r,n,d))}};function Mm(n,r,l,d,x,M,P){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(d,M,P):r.prototype&&r.prototype.isPureReactComponent?!ro(l,d)||!ro(x,M):!0}function wm(n,r,l){var d=!1,x=Hr,M=r.contextType;return typeof M=="object"&&M!==null?M=Si(M):(x=Qn(r)?Ss:Dn.current,d=r.contextTypes,M=(d=d!=null)?ra(n,x):Hr),r=new r(l,M),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ll,n.stateNode=r,r._reactInternals=n,d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=x,n.__reactInternalMemoizedMaskedChildContext=M),r}function bm(n,r,l,d){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,d),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,d),r.state!==n&&Ll.enqueueReplaceState(r,r.state,null)}function $u(n,r,l,d){var x=n.stateNode;x.props=l,x.state=n.memoizedState,x.refs={},Uu(n);var M=r.contextType;typeof M=="object"&&M!==null?x.context=Si(M):(M=Qn(r)?Ss:Dn.current,x.context=ra(n,M)),x.state=n.memoizedState,M=r.getDerivedStateFromProps,typeof M=="function"&&(Yu(n,r,M,l),x.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof x.getSnapshotBeforeUpdate=="function"||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(r=x.state,typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount(),r!==x.state&&Ll.enqueueReplaceState(x,x.state,null),bl(n,l,x,d),x.state=n.memoizedState),typeof x.componentDidMount=="function"&&(n.flags|=4194308)}function fa(n,r){try{var l="",d=r;do l+=de(d),d=d.return;while(d);var x=l}catch(M){x=`
Error generating stack: `+M.message+`
`+M.stack}return{value:n,source:r,stack:x,digest:null}}function Ku(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Zu(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var y1=typeof WeakMap=="function"?WeakMap:Map;function Em(n,r,l){l=dr(-1,l),l.tag=3,l.payload={element:null};var d=r.value;return l.callback=function(){Ol||(Ol=!0,fh=d),Zu(n,r)},l}function Tm(n,r,l){l=dr(-1,l),l.tag=3;var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var x=r.value;l.payload=function(){return d(x)},l.callback=function(){Zu(n,r)}}var M=n.stateNode;return M!==null&&typeof M.componentDidCatch=="function"&&(l.callback=function(){Zu(n,r),typeof d!="function"&&(jr===null?jr=new Set([this]):jr.add(this));var P=r.stack;this.componentDidCatch(r.value,{componentStack:P!==null?P:""})}),l}function Cm(n,r,l){var d=n.pingCache;if(d===null){d=n.pingCache=new y1;var x=new Set;d.set(r,x)}else x=d.get(r),x===void 0&&(x=new Set,d.set(r,x));x.has(l)||(x.add(l),n=F1.bind(null,n,r,l),r.then(n,n))}function Am(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Rm(n,r,l,d,x){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=dr(-1,1),r.tag=2,Wr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=x,n)}var S1=T.ReactCurrentOwner,Jn=!1;function Wn(n,r,l,d){r.child=n===null?$p(r,null,l,d):la(r,n.child,l,d)}function Pm(n,r,l,d,x){l=l.render;var M=r.ref;return ua(r,x),d=Gu(n,r,l,d,M,x),l=Vu(),n!==null&&!Jn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~x,pr(n,r,x)):(en&&l&&Eu(r),r.flags|=1,Wn(n,r,d,x),r.child)}function Lm(n,r,l,d,x){if(n===null){var M=l.type;return typeof M=="function"&&!_h(M)&&M.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=M,Im(n,r,M,d,x)):(n=Wl(l.type,null,d,r,r.mode,x),n.ref=r.ref,n.return=r,r.child=n)}if(M=n.child,(n.lanes&x)===0){var P=M.memoizedProps;if(l=l.compare,l=l!==null?l:ro,l(P,d)&&n.ref===r.ref)return pr(n,r,x)}return r.flags|=1,n=Kr(M,d),n.ref=r.ref,n.return=r,r.child=n}function Im(n,r,l,d,x){if(n!==null){var M=n.memoizedProps;if(ro(M,d)&&n.ref===r.ref)if(Jn=!1,r.pendingProps=d=M,(n.lanes&x)!==0)(n.flags&131072)!==0&&(Jn=!0);else return r.lanes=n.lanes,pr(n,r,x)}return Qu(n,r,l,d,x)}function Nm(n,r,l){var d=r.pendingProps,x=d.children,M=n!==null?n.memoizedState:null;if(d.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},qt(pa,ci),ci|=l;else{if((l&1073741824)===0)return n=M!==null?M.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,qt(pa,ci),ci|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=M!==null?M.baseLanes:l,qt(pa,ci),ci|=d}else M!==null?(d=M.baseLanes|l,r.memoizedState=null):d=l,qt(pa,ci),ci|=d;return Wn(n,r,x,l),r.child}function Fm(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Qu(n,r,l,d,x){var M=Qn(l)?Ss:Dn.current;return M=ra(r,M),ua(r,x),l=Gu(n,r,l,d,M,x),d=Vu(),n!==null&&!Jn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~x,pr(n,r,x)):(en&&d&&Eu(r),r.flags|=1,Wn(n,r,l,x),r.child)}function Um(n,r,l,d,x){if(Qn(l)){var M=!0;ml(r)}else M=!1;if(ua(r,x),r.stateNode===null)Nl(n,r),wm(r,l,d),$u(r,l,d,x),d=!0;else if(n===null){var P=r.stateNode,B=r.memoizedProps;P.props=B;var X=P.context,fe=l.contextType;typeof fe=="object"&&fe!==null?fe=Si(fe):(fe=Qn(l)?Ss:Dn.current,fe=ra(r,fe));var Te=l.getDerivedStateFromProps,Ce=typeof Te=="function"||typeof P.getSnapshotBeforeUpdate=="function";Ce||typeof P.UNSAFE_componentWillReceiveProps!="function"&&typeof P.componentWillReceiveProps!="function"||(B!==d||X!==fe)&&bm(r,P,d,fe),Vr=!1;var Ee=r.memoizedState;P.state=Ee,bl(r,d,P,x),X=r.memoizedState,B!==d||Ee!==X||Zn.current||Vr?(typeof Te=="function"&&(Yu(r,l,Te,d),X=r.memoizedState),(B=Vr||Mm(r,l,B,d,Ee,X,fe))?(Ce||typeof P.UNSAFE_componentWillMount!="function"&&typeof P.componentWillMount!="function"||(typeof P.componentWillMount=="function"&&P.componentWillMount(),typeof P.UNSAFE_componentWillMount=="function"&&P.UNSAFE_componentWillMount()),typeof P.componentDidMount=="function"&&(r.flags|=4194308)):(typeof P.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=d,r.memoizedState=X),P.props=d,P.state=X,P.context=fe,d=B):(typeof P.componentDidMount=="function"&&(r.flags|=4194308),d=!1)}else{P=r.stateNode,Zp(n,r),B=r.memoizedProps,fe=r.type===r.elementType?B:Fi(r.type,B),P.props=fe,Ce=r.pendingProps,Ee=P.context,X=l.contextType,typeof X=="object"&&X!==null?X=Si(X):(X=Qn(l)?Ss:Dn.current,X=ra(r,X));var Ye=l.getDerivedStateFromProps;(Te=typeof Ye=="function"||typeof P.getSnapshotBeforeUpdate=="function")||typeof P.UNSAFE_componentWillReceiveProps!="function"&&typeof P.componentWillReceiveProps!="function"||(B!==Ce||Ee!==X)&&bm(r,P,d,X),Vr=!1,Ee=r.memoizedState,P.state=Ee,bl(r,d,P,x);var Je=r.memoizedState;B!==Ce||Ee!==Je||Zn.current||Vr?(typeof Ye=="function"&&(Yu(r,l,Ye,d),Je=r.memoizedState),(fe=Vr||Mm(r,l,fe,d,Ee,Je,X)||!1)?(Te||typeof P.UNSAFE_componentWillUpdate!="function"&&typeof P.componentWillUpdate!="function"||(typeof P.componentWillUpdate=="function"&&P.componentWillUpdate(d,Je,X),typeof P.UNSAFE_componentWillUpdate=="function"&&P.UNSAFE_componentWillUpdate(d,Je,X)),typeof P.componentDidUpdate=="function"&&(r.flags|=4),typeof P.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof P.componentDidUpdate!="function"||B===n.memoizedProps&&Ee===n.memoizedState||(r.flags|=4),typeof P.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Ee===n.memoizedState||(r.flags|=1024),r.memoizedProps=d,r.memoizedState=Je),P.props=d,P.state=Je,P.context=X,d=fe):(typeof P.componentDidUpdate!="function"||B===n.memoizedProps&&Ee===n.memoizedState||(r.flags|=4),typeof P.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Ee===n.memoizedState||(r.flags|=1024),d=!1)}return Ju(n,r,l,d,M,x)}function Ju(n,r,l,d,x,M){Fm(n,r);var P=(r.flags&128)!==0;if(!d&&!P)return x&&Bp(r,l,!1),pr(n,r,M);d=r.stateNode,S1.current=r;var B=P&&typeof l.getDerivedStateFromError!="function"?null:d.render();return r.flags|=1,n!==null&&P?(r.child=la(r,n.child,null,M),r.child=la(r,null,B,M)):Wn(n,r,B,M),r.memoizedState=d.state,x&&Bp(r,l,!0),r.child}function Dm(n){var r=n.stateNode;r.pendingContext?Op(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Op(n,r.context,!1),Du(n,r.containerInfo)}function km(n,r,l,d,x){return oa(),Ru(x),r.flags|=256,Wn(n,r,l,d),r.child}var eh={dehydrated:null,treeContext:null,retryLane:0};function th(n){return{baseLanes:n,cachePool:null,transitions:null}}function Om(n,r,l){var d=r.pendingProps,x=tn.current,M=!1,P=(r.flags&128)!==0,B;if((B=P)||(B=n!==null&&n.memoizedState===null?!1:(x&2)!==0),B?(M=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(x|=1),qt(tn,x&1),n===null)return Au(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(P=d.children,n=d.fallback,M?(d=r.mode,M=r.child,P={mode:"hidden",children:P},(d&1)===0&&M!==null?(M.childLanes=0,M.pendingProps=P):M=Xl(P,d,0,null),n=Ls(n,d,l,null),M.return=r,n.return=r,M.sibling=n,r.child=M,r.child.memoizedState=th(l),r.memoizedState=eh,n):nh(r,P));if(x=n.memoizedState,x!==null&&(B=x.dehydrated,B!==null))return M1(n,r,P,d,B,x,l);if(M){M=d.fallback,P=r.mode,x=n.child,B=x.sibling;var X={mode:"hidden",children:d.children};return(P&1)===0&&r.child!==x?(d=r.child,d.childLanes=0,d.pendingProps=X,r.deletions=null):(d=Kr(x,X),d.subtreeFlags=x.subtreeFlags&14680064),B!==null?M=Kr(B,M):(M=Ls(M,P,l,null),M.flags|=2),M.return=r,d.return=r,d.sibling=M,r.child=d,d=M,M=r.child,P=n.child.memoizedState,P=P===null?th(l):{baseLanes:P.baseLanes|l,cachePool:null,transitions:P.transitions},M.memoizedState=P,M.childLanes=n.childLanes&~l,r.memoizedState=eh,d}return M=n.child,n=M.sibling,d=Kr(M,{mode:"visible",children:d.children}),(r.mode&1)===0&&(d.lanes=l),d.return=r,d.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=d,r.memoizedState=null,d}function nh(n,r){return r=Xl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Il(n,r,l,d){return d!==null&&Ru(d),la(r,n.child,null,l),n=nh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function M1(n,r,l,d,x,M,P){if(l)return r.flags&256?(r.flags&=-257,d=Ku(Error(t(422))),Il(n,r,P,d)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(M=d.fallback,x=r.mode,d=Xl({mode:"visible",children:d.children},x,0,null),M=Ls(M,x,P,null),M.flags|=2,d.return=r,M.return=r,d.sibling=M,r.child=d,(r.mode&1)!==0&&la(r,n.child,null,P),r.child.memoizedState=th(P),r.memoizedState=eh,M);if((r.mode&1)===0)return Il(n,r,P,null);if(x.data==="$!"){if(d=x.nextSibling&&x.nextSibling.dataset,d)var B=d.dgst;return d=B,M=Error(t(419)),d=Ku(M,d,void 0),Il(n,r,P,d)}if(B=(P&n.childLanes)!==0,Jn||B){if(d=En,d!==null){switch(P&-P){case 4:x=2;break;case 16:x=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:x=32;break;case 536870912:x=268435456;break;default:x=0}x=(x&(d.suspendedLanes|P))!==0?0:x,x!==0&&x!==M.retryLane&&(M.retryLane=x,fr(n,x),ki(d,n,x,-1))}return vh(),d=Ku(Error(t(421))),Il(n,r,P,d)}return x.data==="$?"?(r.flags|=128,r.child=n.child,r=U1.bind(null,n),x._reactRetry=r,null):(n=M.treeContext,li=zr(x.nextSibling),oi=r,en=!0,Ni=null,n!==null&&(_i[yi++]=ur,_i[yi++]=hr,_i[yi++]=Ms,ur=n.id,hr=n.overflow,Ms=r),r=nh(r,d.children),r.flags|=4096,r)}function zm(n,r,l){n.lanes|=r;var d=n.alternate;d!==null&&(d.lanes|=r),Nu(n.return,r,l)}function ih(n,r,l,d,x){var M=n.memoizedState;M===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:x}:(M.isBackwards=r,M.rendering=null,M.renderingStartTime=0,M.last=d,M.tail=l,M.tailMode=x)}function Bm(n,r,l){var d=r.pendingProps,x=d.revealOrder,M=d.tail;if(Wn(n,r,d.children,l),d=tn.current,(d&2)!==0)d=d&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&zm(n,l,r);else if(n.tag===19)zm(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}d&=1}if(qt(tn,d),(r.mode&1)===0)r.memoizedState=null;else switch(x){case"forwards":for(l=r.child,x=null;l!==null;)n=l.alternate,n!==null&&El(n)===null&&(x=l),l=l.sibling;l=x,l===null?(x=r.child,r.child=null):(x=l.sibling,l.sibling=null),ih(r,!1,x,l,M);break;case"backwards":for(l=null,x=r.child,r.child=null;x!==null;){if(n=x.alternate,n!==null&&El(n)===null){r.child=x;break}n=x.sibling,x.sibling=l,l=x,x=n}ih(r,!0,l,null,M);break;case"together":ih(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Nl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function pr(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),Cs|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Kr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Kr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function w1(n,r,l){switch(r.tag){case 3:Dm(r),oa();break;case 5:em(r);break;case 1:Qn(r.type)&&ml(r);break;case 4:Du(r,r.stateNode.containerInfo);break;case 10:var d=r.type._context,x=r.memoizedProps.value;qt(Sl,d._currentValue),d._currentValue=x;break;case 13:if(d=r.memoizedState,d!==null)return d.dehydrated!==null?(qt(tn,tn.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?Om(n,r,l):(qt(tn,tn.current&1),n=pr(n,r,l),n!==null?n.sibling:null);qt(tn,tn.current&1);break;case 19:if(d=(l&r.childLanes)!==0,(n.flags&128)!==0){if(d)return Bm(n,r,l);r.flags|=128}if(x=r.memoizedState,x!==null&&(x.rendering=null,x.tail=null,x.lastEffect=null),qt(tn,tn.current),d)break;return null;case 22:case 23:return r.lanes=0,Nm(n,r,l)}return pr(n,r,l)}var Hm,rh,Gm,Vm;Hm=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},rh=function(){},Gm=function(n,r,l,d){var x=n.memoizedProps;if(x!==d){n=r.stateNode,Es($i.current);var M=null;switch(l){case"input":x=bt(n,x),d=bt(n,d),M=[];break;case"select":x=ne({},x,{value:void 0}),d=ne({},d,{value:void 0}),M=[];break;case"textarea":x=_t(n,x),d=_t(n,d),M=[];break;default:typeof x.onClick!="function"&&typeof d.onClick=="function"&&(n.onclick=fl)}je(l,d);var P;l=null;for(fe in x)if(!d.hasOwnProperty(fe)&&x.hasOwnProperty(fe)&&x[fe]!=null)if(fe==="style"){var B=x[fe];for(P in B)B.hasOwnProperty(P)&&(l||(l={}),l[P]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(s.hasOwnProperty(fe)?M||(M=[]):(M=M||[]).push(fe,null));for(fe in d){var X=d[fe];if(B=x!=null?x[fe]:void 0,d.hasOwnProperty(fe)&&X!==B&&(X!=null||B!=null))if(fe==="style")if(B){for(P in B)!B.hasOwnProperty(P)||X&&X.hasOwnProperty(P)||(l||(l={}),l[P]="");for(P in X)X.hasOwnProperty(P)&&B[P]!==X[P]&&(l||(l={}),l[P]=X[P])}else l||(M||(M=[]),M.push(fe,l)),l=X;else fe==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,B=B?B.__html:void 0,X!=null&&B!==X&&(M=M||[]).push(fe,X)):fe==="children"?typeof X!="string"&&typeof X!="number"||(M=M||[]).push(fe,""+X):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(s.hasOwnProperty(fe)?(X!=null&&fe==="onScroll"&&Kt("scroll",n),M||B===X||(M=[])):(M=M||[]).push(fe,X))}l&&(M=M||[]).push("style",l);var fe=M;(r.updateQueue=fe)&&(r.flags|=4)}},Vm=function(n,r,l,d){l!==d&&(r.flags|=4)};function yo(n,r){if(!en)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:d.sibling=null}}function On(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,d=0;if(r)for(var x=n.child;x!==null;)l|=x.lanes|x.childLanes,d|=x.subtreeFlags&14680064,d|=x.flags&14680064,x.return=n,x=x.sibling;else for(x=n.child;x!==null;)l|=x.lanes|x.childLanes,d|=x.subtreeFlags,d|=x.flags,x.return=n,x=x.sibling;return n.subtreeFlags|=d,n.childLanes=l,r}function b1(n,r,l){var d=r.pendingProps;switch(Tu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return On(r),null;case 1:return Qn(r.type)&&pl(),On(r),null;case 3:return d=r.stateNode,ha(),Zt(Zn),Zt(Dn),zu(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(n===null||n.child===null)&&(_l(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Ni!==null&&(mh(Ni),Ni=null))),rh(n,r),On(r),null;case 5:ku(r);var x=Es(mo.current);if(l=r.type,n!==null&&r.stateNode!=null)Gm(n,r,l,d,x),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!d){if(r.stateNode===null)throw Error(t(166));return On(r),null}if(n=Es($i.current),_l(r)){d=r.stateNode,l=r.type;var M=r.memoizedProps;switch(d[Yi]=r,d[co]=M,n=(r.mode&1)!==0,l){case"dialog":Kt("cancel",d),Kt("close",d);break;case"iframe":case"object":case"embed":Kt("load",d);break;case"video":case"audio":for(x=0;x<ao.length;x++)Kt(ao[x],d);break;case"source":Kt("error",d);break;case"img":case"image":case"link":Kt("error",d),Kt("load",d);break;case"details":Kt("toggle",d);break;case"input":Lt(d,M),Kt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!M.multiple},Kt("invalid",d);break;case"textarea":Ut(d,M),Kt("invalid",d)}je(l,M),x=null;for(var P in M)if(M.hasOwnProperty(P)){var B=M[P];P==="children"?typeof B=="string"?d.textContent!==B&&(M.suppressHydrationWarning!==!0&&hl(d.textContent,B,n),x=["children",B]):typeof B=="number"&&d.textContent!==""+B&&(M.suppressHydrationWarning!==!0&&hl(d.textContent,B,n),x=["children",""+B]):s.hasOwnProperty(P)&&B!=null&&P==="onScroll"&&Kt("scroll",d)}switch(l){case"input":Oe(d),kt(d,M,!0);break;case"textarea":Oe(d),Wt(d);break;case"select":case"option":break;default:typeof M.onClick=="function"&&(d.onclick=fl)}d=x,r.updateQueue=d,d!==null&&(r.flags|=4)}else{P=x.nodeType===9?x:x.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=k(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=P.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof d.is=="string"?n=P.createElement(l,{is:d.is}):(n=P.createElement(l),l==="select"&&(P=n,d.multiple?P.multiple=!0:d.size&&(P.size=d.size))):n=P.createElementNS(n,l),n[Yi]=r,n[co]=d,Hm(n,r,!1,!1),r.stateNode=n;e:{switch(P=Ne(l,d),l){case"dialog":Kt("cancel",n),Kt("close",n),x=d;break;case"iframe":case"object":case"embed":Kt("load",n),x=d;break;case"video":case"audio":for(x=0;x<ao.length;x++)Kt(ao[x],n);x=d;break;case"source":Kt("error",n),x=d;break;case"img":case"image":case"link":Kt("error",n),Kt("load",n),x=d;break;case"details":Kt("toggle",n),x=d;break;case"input":Lt(n,d),x=bt(n,d),Kt("invalid",n);break;case"option":x=d;break;case"select":n._wrapperState={wasMultiple:!!d.multiple},x=ne({},d,{value:void 0}),Kt("invalid",n);break;case"textarea":Ut(n,d),x=_t(n,d),Kt("invalid",n);break;default:x=d}je(l,x),B=x;for(M in B)if(B.hasOwnProperty(M)){var X=B[M];M==="style"?Se(n,X):M==="dangerouslySetInnerHTML"?(X=X?X.__html:void 0,X!=null&&ye(n,X)):M==="children"?typeof X=="string"?(l!=="textarea"||X!=="")&&we(n,X):typeof X=="number"&&we(n,""+X):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(s.hasOwnProperty(M)?X!=null&&M==="onScroll"&&Kt("scroll",n):X!=null&&E(n,M,X,P))}switch(l){case"input":Oe(n),kt(n,d,!1);break;case"textarea":Oe(n),Wt(n);break;case"option":d.value!=null&&n.setAttribute("value",""+pe(d.value));break;case"select":n.multiple=!!d.multiple,M=d.value,M!=null?Ot(n,!!d.multiple,M,!1):d.defaultValue!=null&&Ot(n,!!d.multiple,d.defaultValue,!0);break;default:typeof x.onClick=="function"&&(n.onclick=fl)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return On(r),null;case 6:if(n&&r.stateNode!=null)Vm(n,r,n.memoizedProps,d);else{if(typeof d!="string"&&r.stateNode===null)throw Error(t(166));if(l=Es(mo.current),Es($i.current),_l(r)){if(d=r.stateNode,l=r.memoizedProps,d[Yi]=r,(M=d.nodeValue!==l)&&(n=oi,n!==null))switch(n.tag){case 3:hl(d.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&hl(d.nodeValue,l,(n.mode&1)!==0)}M&&(r.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[Yi]=r,r.stateNode=d}return On(r),null;case 13:if(Zt(tn),d=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(en&&li!==null&&(r.mode&1)!==0&&(r.flags&128)===0)jp(),oa(),r.flags|=98560,M=!1;else if(M=_l(r),d!==null&&d.dehydrated!==null){if(n===null){if(!M)throw Error(t(318));if(M=r.memoizedState,M=M!==null?M.dehydrated:null,!M)throw Error(t(317));M[Yi]=r}else oa(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;On(r),M=!1}else Ni!==null&&(mh(Ni),Ni=null),M=!0;if(!M)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(d=d!==null,d!==(n!==null&&n.memoizedState!==null)&&d&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(tn.current&1)!==0?_n===0&&(_n=3):vh())),r.updateQueue!==null&&(r.flags|=4),On(r),null);case 4:return ha(),rh(n,r),n===null&&oo(r.stateNode.containerInfo),On(r),null;case 10:return Iu(r.type._context),On(r),null;case 17:return Qn(r.type)&&pl(),On(r),null;case 19:if(Zt(tn),M=r.memoizedState,M===null)return On(r),null;if(d=(r.flags&128)!==0,P=M.rendering,P===null)if(d)yo(M,!1);else{if(_n!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(P=El(n),P!==null){for(r.flags|=128,yo(M,!1),d=P.updateQueue,d!==null&&(r.updateQueue=d,r.flags|=4),r.subtreeFlags=0,d=l,l=r.child;l!==null;)M=l,n=d,M.flags&=14680066,P=M.alternate,P===null?(M.childLanes=0,M.lanes=n,M.child=null,M.subtreeFlags=0,M.memoizedProps=null,M.memoizedState=null,M.updateQueue=null,M.dependencies=null,M.stateNode=null):(M.childLanes=P.childLanes,M.lanes=P.lanes,M.child=P.child,M.subtreeFlags=0,M.deletions=null,M.memoizedProps=P.memoizedProps,M.memoizedState=P.memoizedState,M.updateQueue=P.updateQueue,M.type=P.type,n=P.dependencies,M.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return qt(tn,tn.current&1|2),r.child}n=n.sibling}M.tail!==null&&ht()>ma&&(r.flags|=128,d=!0,yo(M,!1),r.lanes=4194304)}else{if(!d)if(n=El(P),n!==null){if(r.flags|=128,d=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),yo(M,!0),M.tail===null&&M.tailMode==="hidden"&&!P.alternate&&!en)return On(r),null}else 2*ht()-M.renderingStartTime>ma&&l!==1073741824&&(r.flags|=128,d=!0,yo(M,!1),r.lanes=4194304);M.isBackwards?(P.sibling=r.child,r.child=P):(l=M.last,l!==null?l.sibling=P:r.child=P,M.last=P)}return M.tail!==null?(r=M.tail,M.rendering=r,M.tail=r.sibling,M.renderingStartTime=ht(),r.sibling=null,l=tn.current,qt(tn,d?l&1|2:l&1),r):(On(r),null);case 22:case 23:return xh(),d=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==d&&(r.flags|=8192),d&&(r.mode&1)!==0?(ci&1073741824)!==0&&(On(r),r.subtreeFlags&6&&(r.flags|=8192)):On(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function E1(n,r){switch(Tu(r),r.tag){case 1:return Qn(r.type)&&pl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return ha(),Zt(Zn),Zt(Dn),zu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return ku(r),null;case 13:if(Zt(tn),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));oa()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Zt(tn),null;case 4:return ha(),null;case 10:return Iu(r.type._context),null;case 22:case 23:return xh(),null;case 24:return null;default:return null}}var Fl=!1,zn=!1,T1=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function da(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){rn(n,r,d)}else l.current=null}function sh(n,r,l){try{l()}catch(d){rn(n,r,d)}}var Wm=!1;function C1(n,r){if(xu=el,n=Mp(),cu(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var x=d.anchorOffset,M=d.focusNode;d=d.focusOffset;try{l.nodeType,M.nodeType}catch{l=null;break e}var P=0,B=-1,X=-1,fe=0,Te=0,Ce=n,Ee=null;t:for(;;){for(var Ye;Ce!==l||x!==0&&Ce.nodeType!==3||(B=P+x),Ce!==M||d!==0&&Ce.nodeType!==3||(X=P+d),Ce.nodeType===3&&(P+=Ce.nodeValue.length),(Ye=Ce.firstChild)!==null;)Ee=Ce,Ce=Ye;for(;;){if(Ce===n)break t;if(Ee===l&&++fe===x&&(B=P),Ee===M&&++Te===d&&(X=P),(Ye=Ce.nextSibling)!==null)break;Ce=Ee,Ee=Ce.parentNode}Ce=Ye}l=B===-1||X===-1?null:{start:B,end:X}}else l=null}l=l||{start:0,end:0}}else l=null;for(vu={focusedElem:n,selectionRange:l},el=!1,Ze=r;Ze!==null;)if(r=Ze,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Ze=n;else for(;Ze!==null;){r=Ze;try{var Je=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Je!==null){var tt=Je.memoizedProps,an=Je.memoizedState,ae=r.stateNode,ee=ae.getSnapshotBeforeUpdate(r.elementType===r.type?tt:Fi(r.type,tt),an);ae.__reactInternalSnapshotBeforeUpdate=ee}break;case 3:var ce=r.stateNode.containerInfo;ce.nodeType===1?ce.textContent="":ce.nodeType===9&&ce.documentElement&&ce.removeChild(ce.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(De){rn(r,r.return,De)}if(n=r.sibling,n!==null){n.return=r.return,Ze=n;break}Ze=r.return}return Je=Wm,Wm=!1,Je}function So(n,r,l){var d=r.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var x=d=d.next;do{if((x.tag&n)===n){var M=x.destroy;x.destroy=void 0,M!==void 0&&sh(r,l,M)}x=x.next}while(x!==d)}}function Ul(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var d=l.create;l.destroy=d()}l=l.next}while(l!==r)}}function ah(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function Xm(n){var r=n.alternate;r!==null&&(n.alternate=null,Xm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Yi],delete r[co],delete r[Mu],delete r[c1],delete r[u1])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function jm(n){return n.tag===5||n.tag===3||n.tag===4}function qm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||jm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function oh(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=fl));else if(d!==4&&(n=n.child,n!==null))for(oh(n,r,l),n=n.sibling;n!==null;)oh(n,r,l),n=n.sibling}function lh(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(d!==4&&(n=n.child,n!==null))for(lh(n,r,l),n=n.sibling;n!==null;)lh(n,r,l),n=n.sibling}var Nn=null,Ui=!1;function Xr(n,r,l){for(l=l.child;l!==null;)Ym(n,r,l),l=l.sibling}function Ym(n,r,l){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(oe,l)}catch{}switch(l.tag){case 5:zn||da(l,r);case 6:var d=Nn,x=Ui;Nn=null,Xr(n,r,l),Nn=d,Ui=x,Nn!==null&&(Ui?(n=Nn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):Nn.removeChild(l.stateNode));break;case 18:Nn!==null&&(Ui?(n=Nn,l=l.stateNode,n.nodeType===8?Su(n.parentNode,l):n.nodeType===1&&Su(n,l),Qa(n)):Su(Nn,l.stateNode));break;case 4:d=Nn,x=Ui,Nn=l.stateNode.containerInfo,Ui=!0,Xr(n,r,l),Nn=d,Ui=x;break;case 0:case 11:case 14:case 15:if(!zn&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){x=d=d.next;do{var M=x,P=M.destroy;M=M.tag,P!==void 0&&((M&2)!==0||(M&4)!==0)&&sh(l,r,P),x=x.next}while(x!==d)}Xr(n,r,l);break;case 1:if(!zn&&(da(l,r),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(B){rn(l,r,B)}Xr(n,r,l);break;case 21:Xr(n,r,l);break;case 22:l.mode&1?(zn=(d=zn)||l.memoizedState!==null,Xr(n,r,l),zn=d):Xr(n,r,l);break;default:Xr(n,r,l)}}function $m(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new T1),r.forEach(function(d){var x=D1.bind(null,n,d);l.has(d)||(l.add(d),d.then(x,x))})}}function Di(n,r){var l=r.deletions;if(l!==null)for(var d=0;d<l.length;d++){var x=l[d];try{var M=n,P=r,B=P;e:for(;B!==null;){switch(B.tag){case 5:Nn=B.stateNode,Ui=!1;break e;case 3:Nn=B.stateNode.containerInfo,Ui=!0;break e;case 4:Nn=B.stateNode.containerInfo,Ui=!0;break e}B=B.return}if(Nn===null)throw Error(t(160));Ym(M,P,x),Nn=null,Ui=!1;var X=x.alternate;X!==null&&(X.return=null),x.return=null}catch(fe){rn(x,r,fe)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Km(r,n),r=r.sibling}function Km(n,r){var l=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Di(r,n),Zi(n),d&4){try{So(3,n,n.return),Ul(3,n)}catch(tt){rn(n,n.return,tt)}try{So(5,n,n.return)}catch(tt){rn(n,n.return,tt)}}break;case 1:Di(r,n),Zi(n),d&512&&l!==null&&da(l,l.return);break;case 5:if(Di(r,n),Zi(n),d&512&&l!==null&&da(l,l.return),n.flags&32){var x=n.stateNode;try{we(x,"")}catch(tt){rn(n,n.return,tt)}}if(d&4&&(x=n.stateNode,x!=null)){var M=n.memoizedProps,P=l!==null?l.memoizedProps:M,B=n.type,X=n.updateQueue;if(n.updateQueue=null,X!==null)try{B==="input"&&M.type==="radio"&&M.name!=null&&vt(x,M),Ne(B,P);var fe=Ne(B,M);for(P=0;P<X.length;P+=2){var Te=X[P],Ce=X[P+1];Te==="style"?Se(x,Ce):Te==="dangerouslySetInnerHTML"?ye(x,Ce):Te==="children"?we(x,Ce):E(x,Te,Ce,fe)}switch(B){case"input":Xt(x,M);break;case"textarea":He(x,M);break;case"select":var Ee=x._wrapperState.wasMultiple;x._wrapperState.wasMultiple=!!M.multiple;var Ye=M.value;Ye!=null?Ot(x,!!M.multiple,Ye,!1):Ee!==!!M.multiple&&(M.defaultValue!=null?Ot(x,!!M.multiple,M.defaultValue,!0):Ot(x,!!M.multiple,M.multiple?[]:"",!1))}x[co]=M}catch(tt){rn(n,n.return,tt)}}break;case 6:if(Di(r,n),Zi(n),d&4){if(n.stateNode===null)throw Error(t(162));x=n.stateNode,M=n.memoizedProps;try{x.nodeValue=M}catch(tt){rn(n,n.return,tt)}}break;case 3:if(Di(r,n),Zi(n),d&4&&l!==null&&l.memoizedState.isDehydrated)try{Qa(r.containerInfo)}catch(tt){rn(n,n.return,tt)}break;case 4:Di(r,n),Zi(n);break;case 13:Di(r,n),Zi(n),x=n.child,x.flags&8192&&(M=x.memoizedState!==null,x.stateNode.isHidden=M,!M||x.alternate!==null&&x.alternate.memoizedState!==null||(hh=ht())),d&4&&$m(n);break;case 22:if(Te=l!==null&&l.memoizedState!==null,n.mode&1?(zn=(fe=zn)||Te,Di(r,n),zn=fe):Di(r,n),Zi(n),d&8192){if(fe=n.memoizedState!==null,(n.stateNode.isHidden=fe)&&!Te&&(n.mode&1)!==0)for(Ze=n,Te=n.child;Te!==null;){for(Ce=Ze=Te;Ze!==null;){switch(Ee=Ze,Ye=Ee.child,Ee.tag){case 0:case 11:case 14:case 15:So(4,Ee,Ee.return);break;case 1:da(Ee,Ee.return);var Je=Ee.stateNode;if(typeof Je.componentWillUnmount=="function"){d=Ee,l=Ee.return;try{r=d,Je.props=r.memoizedProps,Je.state=r.memoizedState,Je.componentWillUnmount()}catch(tt){rn(d,l,tt)}}break;case 5:da(Ee,Ee.return);break;case 22:if(Ee.memoizedState!==null){Jm(Ce);continue}}Ye!==null?(Ye.return=Ee,Ze=Ye):Jm(Ce)}Te=Te.sibling}e:for(Te=null,Ce=n;;){if(Ce.tag===5){if(Te===null){Te=Ce;try{x=Ce.stateNode,fe?(M=x.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none"):(B=Ce.stateNode,X=Ce.memoizedProps.style,P=X!=null&&X.hasOwnProperty("display")?X.display:null,B.style.display=xe("display",P))}catch(tt){rn(n,n.return,tt)}}}else if(Ce.tag===6){if(Te===null)try{Ce.stateNode.nodeValue=fe?"":Ce.memoizedProps}catch(tt){rn(n,n.return,tt)}}else if((Ce.tag!==22&&Ce.tag!==23||Ce.memoizedState===null||Ce===n)&&Ce.child!==null){Ce.child.return=Ce,Ce=Ce.child;continue}if(Ce===n)break e;for(;Ce.sibling===null;){if(Ce.return===null||Ce.return===n)break e;Te===Ce&&(Te=null),Ce=Ce.return}Te===Ce&&(Te=null),Ce.sibling.return=Ce.return,Ce=Ce.sibling}}break;case 19:Di(r,n),Zi(n),d&4&&$m(n);break;case 21:break;default:Di(r,n),Zi(n)}}function Zi(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(jm(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var x=d.stateNode;d.flags&32&&(we(x,""),d.flags&=-33);var M=qm(n);lh(n,M,x);break;case 3:case 4:var P=d.stateNode.containerInfo,B=qm(n);oh(n,B,P);break;default:throw Error(t(161))}}catch(X){rn(n,n.return,X)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function A1(n,r,l){Ze=n,Zm(n)}function Zm(n,r,l){for(var d=(n.mode&1)!==0;Ze!==null;){var x=Ze,M=x.child;if(x.tag===22&&d){var P=x.memoizedState!==null||Fl;if(!P){var B=x.alternate,X=B!==null&&B.memoizedState!==null||zn;B=Fl;var fe=zn;if(Fl=P,(zn=X)&&!fe)for(Ze=x;Ze!==null;)P=Ze,X=P.child,P.tag===22&&P.memoizedState!==null?e0(x):X!==null?(X.return=P,Ze=X):e0(x);for(;M!==null;)Ze=M,Zm(M),M=M.sibling;Ze=x,Fl=B,zn=fe}Qm(n)}else(x.subtreeFlags&8772)!==0&&M!==null?(M.return=x,Ze=M):Qm(n)}}function Qm(n){for(;Ze!==null;){var r=Ze;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:zn||Ul(5,r);break;case 1:var d=r.stateNode;if(r.flags&4&&!zn)if(l===null)d.componentDidMount();else{var x=r.elementType===r.type?l.memoizedProps:Fi(r.type,l.memoizedProps);d.componentDidUpdate(x,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var M=r.updateQueue;M!==null&&Jp(r,M,d);break;case 3:var P=r.updateQueue;if(P!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Jp(r,P,l)}break;case 5:var B=r.stateNode;if(l===null&&r.flags&4){l=B;var X=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":X.autoFocus&&l.focus();break;case"img":X.src&&(l.src=X.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var fe=r.alternate;if(fe!==null){var Te=fe.memoizedState;if(Te!==null){var Ce=Te.dehydrated;Ce!==null&&Qa(Ce)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}zn||r.flags&512&&ah(r)}catch(Ee){rn(r,r.return,Ee)}}if(r===n){Ze=null;break}if(l=r.sibling,l!==null){l.return=r.return,Ze=l;break}Ze=r.return}}function Jm(n){for(;Ze!==null;){var r=Ze;if(r===n){Ze=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Ze=l;break}Ze=r.return}}function e0(n){for(;Ze!==null;){var r=Ze;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Ul(4,r)}catch(X){rn(r,l,X)}break;case 1:var d=r.stateNode;if(typeof d.componentDidMount=="function"){var x=r.return;try{d.componentDidMount()}catch(X){rn(r,x,X)}}var M=r.return;try{ah(r)}catch(X){rn(r,M,X)}break;case 5:var P=r.return;try{ah(r)}catch(X){rn(r,P,X)}}}catch(X){rn(r,r.return,X)}if(r===n){Ze=null;break}var B=r.sibling;if(B!==null){B.return=r.return,Ze=B;break}Ze=r.return}}var R1=Math.ceil,Dl=T.ReactCurrentDispatcher,ch=T.ReactCurrentOwner,wi=T.ReactCurrentBatchConfig,Nt=0,En=null,dn=null,Fn=0,ci=0,pa=Br(0),_n=0,Mo=null,Cs=0,kl=0,uh=0,wo=null,ei=null,hh=0,ma=1/0,mr=null,Ol=!1,fh=null,jr=null,zl=!1,qr=null,Bl=0,bo=0,dh=null,Hl=-1,Gl=0;function Xn(){return(Nt&6)!==0?ht():Hl!==-1?Hl:Hl=ht()}function Yr(n){return(n.mode&1)===0?1:(Nt&2)!==0&&Fn!==0?Fn&-Fn:f1.transition!==null?(Gl===0&&(Gl=qe()),Gl):(n=Ct,n!==0||(n=window.event,n=n===void 0?16:np(n.type)),n)}function ki(n,r,l,d){if(50<bo)throw bo=0,dh=null,Error(t(185));Tt(n,l,d),((Nt&2)===0||n!==En)&&(n===En&&((Nt&2)===0&&(kl|=l),_n===4&&$r(n,Fn)),ti(n,d),l===1&&Nt===0&&(r.mode&1)===0&&(ma=ht()+500,gl&&Gr()))}function ti(n,r){var l=n.callbackNode;Ht(n,r);var d=jt(n,n===En?Fn:0);if(d===0)l!==null&&Fe(l),n.callbackNode=null,n.callbackPriority=0;else if(r=d&-d,n.callbackPriority!==r){if(l!=null&&Fe(l),r===1)n.tag===0?h1(n0.bind(null,n)):Hp(n0.bind(null,n)),o1(function(){(Nt&6)===0&&Gr()}),l=null;else{switch(or(d)){case 1:l=vs;break;case 4:l=N;break;case 16:l=te;break;case 536870912:l=le;break;default:l=te}l=u0(l,t0.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function t0(n,r){if(Hl=-1,Gl=0,(Nt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(ga()&&n.callbackNode!==l)return null;var d=jt(n,n===En?Fn:0);if(d===0)return null;if((d&30)!==0||(d&n.expiredLanes)!==0||r)r=Vl(n,d);else{r=d;var x=Nt;Nt|=2;var M=r0();(En!==n||Fn!==r)&&(mr=null,ma=ht()+500,Rs(n,r));do try{I1();break}catch(B){i0(n,B)}while(!0);Lu(),Dl.current=M,Nt=x,dn!==null?r=0:(En=null,Fn=0,r=_n)}if(r!==0){if(r===2&&(x=fn(n),x!==0&&(d=x,r=ph(n,x))),r===1)throw l=Mo,Rs(n,0),$r(n,d),ti(n,ht()),l;if(r===6)$r(n,d);else{if(x=n.current.alternate,(d&30)===0&&!P1(x)&&(r=Vl(n,d),r===2&&(M=fn(n),M!==0&&(d=M,r=ph(n,M))),r===1))throw l=Mo,Rs(n,0),$r(n,d),ti(n,ht()),l;switch(n.finishedWork=x,n.finishedLanes=d,r){case 0:case 1:throw Error(t(345));case 2:Ps(n,ei,mr);break;case 3:if($r(n,d),(d&130023424)===d&&(r=hh+500-ht(),10<r)){if(jt(n,0)!==0)break;if(x=n.suspendedLanes,(x&d)!==d){Xn(),n.pingedLanes|=n.suspendedLanes&x;break}n.timeoutHandle=yu(Ps.bind(null,n,ei,mr),r);break}Ps(n,ei,mr);break;case 4:if($r(n,d),(d&4194240)===d)break;for(r=n.eventTimes,x=-1;0<d;){var P=31-ze(d);M=1<<P,P=r[P],P>x&&(x=P),d&=~M}if(d=x,d=ht()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*R1(d/1960))-d,10<d){n.timeoutHandle=yu(Ps.bind(null,n,ei,mr),d);break}Ps(n,ei,mr);break;case 5:Ps(n,ei,mr);break;default:throw Error(t(329))}}}return ti(n,ht()),n.callbackNode===l?t0.bind(null,n):null}function ph(n,r){var l=wo;return n.current.memoizedState.isDehydrated&&(Rs(n,r).flags|=256),n=Vl(n,r),n!==2&&(r=ei,ei=l,r!==null&&mh(r)),n}function mh(n){ei===null?ei=n:ei.push.apply(ei,n)}function P1(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var x=l[d],M=x.getSnapshot;x=x.value;try{if(!Ii(M(),x))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function $r(n,r){for(r&=~uh,r&=~kl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-ze(r),d=1<<l;n[l]=-1,r&=~d}}function n0(n){if((Nt&6)!==0)throw Error(t(327));ga();var r=jt(n,0);if((r&1)===0)return ti(n,ht()),null;var l=Vl(n,r);if(n.tag!==0&&l===2){var d=fn(n);d!==0&&(r=d,l=ph(n,d))}if(l===1)throw l=Mo,Rs(n,0),$r(n,r),ti(n,ht()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Ps(n,ei,mr),ti(n,ht()),null}function gh(n,r){var l=Nt;Nt|=1;try{return n(r)}finally{Nt=l,Nt===0&&(ma=ht()+500,gl&&Gr())}}function As(n){qr!==null&&qr.tag===0&&(Nt&6)===0&&ga();var r=Nt;Nt|=1;var l=wi.transition,d=Ct;try{if(wi.transition=null,Ct=1,n)return n()}finally{Ct=d,wi.transition=l,Nt=r,(Nt&6)===0&&Gr()}}function xh(){ci=pa.current,Zt(pa)}function Rs(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,a1(l)),dn!==null)for(l=dn.return;l!==null;){var d=l;switch(Tu(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&pl();break;case 3:ha(),Zt(Zn),Zt(Dn),zu();break;case 5:ku(d);break;case 4:ha();break;case 13:Zt(tn);break;case 19:Zt(tn);break;case 10:Iu(d.type._context);break;case 22:case 23:xh()}l=l.return}if(En=n,dn=n=Kr(n.current,null),Fn=ci=r,_n=0,Mo=null,uh=kl=Cs=0,ei=wo=null,bs!==null){for(r=0;r<bs.length;r++)if(l=bs[r],d=l.interleaved,d!==null){l.interleaved=null;var x=d.next,M=l.pending;if(M!==null){var P=M.next;M.next=x,d.next=P}l.pending=d}bs=null}return n}function i0(n,r){do{var l=dn;try{if(Lu(),Tl.current=Pl,Cl){for(var d=nn.memoizedState;d!==null;){var x=d.queue;x!==null&&(x.pending=null),d=d.next}Cl=!1}if(Ts=0,bn=vn=nn=null,go=!1,xo=0,ch.current=null,l===null||l.return===null){_n=1,Mo=r,dn=null;break}e:{var M=n,P=l.return,B=l,X=r;if(r=Fn,B.flags|=32768,X!==null&&typeof X=="object"&&typeof X.then=="function"){var fe=X,Te=B,Ce=Te.tag;if((Te.mode&1)===0&&(Ce===0||Ce===11||Ce===15)){var Ee=Te.alternate;Ee?(Te.updateQueue=Ee.updateQueue,Te.memoizedState=Ee.memoizedState,Te.lanes=Ee.lanes):(Te.updateQueue=null,Te.memoizedState=null)}var Ye=Am(P);if(Ye!==null){Ye.flags&=-257,Rm(Ye,P,B,M,r),Ye.mode&1&&Cm(M,fe,r),r=Ye,X=fe;var Je=r.updateQueue;if(Je===null){var tt=new Set;tt.add(X),r.updateQueue=tt}else Je.add(X);break e}else{if((r&1)===0){Cm(M,fe,r),vh();break e}X=Error(t(426))}}else if(en&&B.mode&1){var an=Am(P);if(an!==null){(an.flags&65536)===0&&(an.flags|=256),Rm(an,P,B,M,r),Ru(fa(X,B));break e}}M=X=fa(X,B),_n!==4&&(_n=2),wo===null?wo=[M]:wo.push(M),M=P;do{switch(M.tag){case 3:M.flags|=65536,r&=-r,M.lanes|=r;var ae=Em(M,X,r);Qp(M,ae);break e;case 1:B=X;var ee=M.type,ce=M.stateNode;if((M.flags&128)===0&&(typeof ee.getDerivedStateFromError=="function"||ce!==null&&typeof ce.componentDidCatch=="function"&&(jr===null||!jr.has(ce)))){M.flags|=65536,r&=-r,M.lanes|=r;var De=Tm(M,B,r);Qp(M,De);break e}}M=M.return}while(M!==null)}a0(l)}catch(it){r=it,dn===l&&l!==null&&(dn=l=l.return);continue}break}while(!0)}function r0(){var n=Dl.current;return Dl.current=Pl,n===null?Pl:n}function vh(){(_n===0||_n===3||_n===2)&&(_n=4),En===null||(Cs&268435455)===0&&(kl&268435455)===0||$r(En,Fn)}function Vl(n,r){var l=Nt;Nt|=2;var d=r0();(En!==n||Fn!==r)&&(mr=null,Rs(n,r));do try{L1();break}catch(x){i0(n,x)}while(!0);if(Lu(),Nt=l,Dl.current=d,dn!==null)throw Error(t(261));return En=null,Fn=0,_n}function L1(){for(;dn!==null;)s0(dn)}function I1(){for(;dn!==null&&!Ue();)s0(dn)}function s0(n){var r=c0(n.alternate,n,ci);n.memoizedProps=n.pendingProps,r===null?a0(n):dn=r,ch.current=null}function a0(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=b1(l,r,ci),l!==null){dn=l;return}}else{if(l=E1(l,r),l!==null){l.flags&=32767,dn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{_n=6,dn=null;return}}if(r=r.sibling,r!==null){dn=r;return}dn=r=n}while(r!==null);_n===0&&(_n=5)}function Ps(n,r,l){var d=Ct,x=wi.transition;try{wi.transition=null,Ct=1,N1(n,r,l,d)}finally{wi.transition=x,Ct=d}return null}function N1(n,r,l,d){do ga();while(qr!==null);if((Nt&6)!==0)throw Error(t(327));l=n.finishedWork;var x=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var M=l.lanes|l.childLanes;if($n(n,M),n===En&&(dn=En=null,Fn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||zl||(zl=!0,u0(te,function(){return ga(),null})),M=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||M){M=wi.transition,wi.transition=null;var P=Ct;Ct=1;var B=Nt;Nt|=4,ch.current=null,C1(n,l),Km(l,n),Jv(vu),el=!!xu,vu=xu=null,n.current=l,A1(l),ut(),Nt=B,Ct=P,wi.transition=M}else n.current=l;if(zl&&(zl=!1,qr=n,Bl=x),M=n.pendingLanes,M===0&&(jr=null),Ke(l.stateNode),ti(n,ht()),r!==null)for(d=n.onRecoverableError,l=0;l<r.length;l++)x=r[l],d(x.value,{componentStack:x.stack,digest:x.digest});if(Ol)throw Ol=!1,n=fh,fh=null,n;return(Bl&1)!==0&&n.tag!==0&&ga(),M=n.pendingLanes,(M&1)!==0?n===dh?bo++:(bo=0,dh=n):bo=0,Gr(),null}function ga(){if(qr!==null){var n=or(Bl),r=wi.transition,l=Ct;try{if(wi.transition=null,Ct=16>n?16:n,qr===null)var d=!1;else{if(n=qr,qr=null,Bl=0,(Nt&6)!==0)throw Error(t(331));var x=Nt;for(Nt|=4,Ze=n.current;Ze!==null;){var M=Ze,P=M.child;if((Ze.flags&16)!==0){var B=M.deletions;if(B!==null){for(var X=0;X<B.length;X++){var fe=B[X];for(Ze=fe;Ze!==null;){var Te=Ze;switch(Te.tag){case 0:case 11:case 15:So(8,Te,M)}var Ce=Te.child;if(Ce!==null)Ce.return=Te,Ze=Ce;else for(;Ze!==null;){Te=Ze;var Ee=Te.sibling,Ye=Te.return;if(Xm(Te),Te===fe){Ze=null;break}if(Ee!==null){Ee.return=Ye,Ze=Ee;break}Ze=Ye}}}var Je=M.alternate;if(Je!==null){var tt=Je.child;if(tt!==null){Je.child=null;do{var an=tt.sibling;tt.sibling=null,tt=an}while(tt!==null)}}Ze=M}}if((M.subtreeFlags&2064)!==0&&P!==null)P.return=M,Ze=P;else e:for(;Ze!==null;){if(M=Ze,(M.flags&2048)!==0)switch(M.tag){case 0:case 11:case 15:So(9,M,M.return)}var ae=M.sibling;if(ae!==null){ae.return=M.return,Ze=ae;break e}Ze=M.return}}var ee=n.current;for(Ze=ee;Ze!==null;){P=Ze;var ce=P.child;if((P.subtreeFlags&2064)!==0&&ce!==null)ce.return=P,Ze=ce;else e:for(P=ee;Ze!==null;){if(B=Ze,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:Ul(9,B)}}catch(it){rn(B,B.return,it)}if(B===P){Ze=null;break e}var De=B.sibling;if(De!==null){De.return=B.return,Ze=De;break e}Ze=B.return}}if(Nt=x,Gr(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(oe,n)}catch{}d=!0}return d}finally{Ct=l,wi.transition=r}}return!1}function o0(n,r,l){r=fa(l,r),r=Em(n,r,1),n=Wr(n,r,1),r=Xn(),n!==null&&(Tt(n,1,r),ti(n,r))}function rn(n,r,l){if(n.tag===3)o0(n,n,l);else for(;r!==null;){if(r.tag===3){o0(r,n,l);break}else if(r.tag===1){var d=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(jr===null||!jr.has(d))){n=fa(l,n),n=Tm(r,n,1),r=Wr(r,n,1),n=Xn(),r!==null&&(Tt(r,1,n),ti(r,n));break}}r=r.return}}function F1(n,r,l){var d=n.pingCache;d!==null&&d.delete(r),r=Xn(),n.pingedLanes|=n.suspendedLanes&l,En===n&&(Fn&l)===l&&(_n===4||_n===3&&(Fn&130023424)===Fn&&500>ht()-hh?Rs(n,0):uh|=l),ti(n,r)}function l0(n,r){r===0&&((n.mode&1)===0?r=1:(r=nt,nt<<=1,(nt&130023424)===0&&(nt=4194304)));var l=Xn();n=fr(n,r),n!==null&&(Tt(n,r,l),ti(n,l))}function U1(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),l0(n,l)}function D1(n,r){var l=0;switch(n.tag){case 13:var d=n.stateNode,x=n.memoizedState;x!==null&&(l=x.retryLane);break;case 19:d=n.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(r),l0(n,l)}var c0;c0=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||Zn.current)Jn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return Jn=!1,w1(n,r,l);Jn=(n.flags&131072)!==0}else Jn=!1,en&&(r.flags&1048576)!==0&&Gp(r,vl,r.index);switch(r.lanes=0,r.tag){case 2:var d=r.type;Nl(n,r),n=r.pendingProps;var x=ra(r,Dn.current);ua(r,l),x=Gu(null,r,d,n,x,l);var M=Vu();return r.flags|=1,typeof x=="object"&&x!==null&&typeof x.render=="function"&&x.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Qn(d)?(M=!0,ml(r)):M=!1,r.memoizedState=x.state!==null&&x.state!==void 0?x.state:null,Uu(r),x.updater=Ll,r.stateNode=x,x._reactInternals=r,$u(r,d,n,l),r=Ju(null,r,d,!0,M,l)):(r.tag=0,en&&M&&Eu(r),Wn(null,r,x,l),r=r.child),r;case 16:d=r.elementType;e:{switch(Nl(n,r),n=r.pendingProps,x=d._init,d=x(d._payload),r.type=d,x=r.tag=O1(d),n=Fi(d,n),x){case 0:r=Qu(null,r,d,n,l);break e;case 1:r=Um(null,r,d,n,l);break e;case 11:r=Pm(null,r,d,n,l);break e;case 14:r=Lm(null,r,d,Fi(d.type,n),l);break e}throw Error(t(306,d,""))}return r;case 0:return d=r.type,x=r.pendingProps,x=r.elementType===d?x:Fi(d,x),Qu(n,r,d,x,l);case 1:return d=r.type,x=r.pendingProps,x=r.elementType===d?x:Fi(d,x),Um(n,r,d,x,l);case 3:e:{if(Dm(r),n===null)throw Error(t(387));d=r.pendingProps,M=r.memoizedState,x=M.element,Zp(n,r),bl(r,d,null,l);var P=r.memoizedState;if(d=P.element,M.isDehydrated)if(M={element:d,isDehydrated:!1,cache:P.cache,pendingSuspenseBoundaries:P.pendingSuspenseBoundaries,transitions:P.transitions},r.updateQueue.baseState=M,r.memoizedState=M,r.flags&256){x=fa(Error(t(423)),r),r=km(n,r,d,l,x);break e}else if(d!==x){x=fa(Error(t(424)),r),r=km(n,r,d,l,x);break e}else for(li=zr(r.stateNode.containerInfo.firstChild),oi=r,en=!0,Ni=null,l=$p(r,null,d,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(oa(),d===x){r=pr(n,r,l);break e}Wn(n,r,d,l)}r=r.child}return r;case 5:return em(r),n===null&&Au(r),d=r.type,x=r.pendingProps,M=n!==null?n.memoizedProps:null,P=x.children,_u(d,x)?P=null:M!==null&&_u(d,M)&&(r.flags|=32),Fm(n,r),Wn(n,r,P,l),r.child;case 6:return n===null&&Au(r),null;case 13:return Om(n,r,l);case 4:return Du(r,r.stateNode.containerInfo),d=r.pendingProps,n===null?r.child=la(r,null,d,l):Wn(n,r,d,l),r.child;case 11:return d=r.type,x=r.pendingProps,x=r.elementType===d?x:Fi(d,x),Pm(n,r,d,x,l);case 7:return Wn(n,r,r.pendingProps,l),r.child;case 8:return Wn(n,r,r.pendingProps.children,l),r.child;case 12:return Wn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(d=r.type._context,x=r.pendingProps,M=r.memoizedProps,P=x.value,qt(Sl,d._currentValue),d._currentValue=P,M!==null)if(Ii(M.value,P)){if(M.children===x.children&&!Zn.current){r=pr(n,r,l);break e}}else for(M=r.child,M!==null&&(M.return=r);M!==null;){var B=M.dependencies;if(B!==null){P=M.child;for(var X=B.firstContext;X!==null;){if(X.context===d){if(M.tag===1){X=dr(-1,l&-l),X.tag=2;var fe=M.updateQueue;if(fe!==null){fe=fe.shared;var Te=fe.pending;Te===null?X.next=X:(X.next=Te.next,Te.next=X),fe.pending=X}}M.lanes|=l,X=M.alternate,X!==null&&(X.lanes|=l),Nu(M.return,l,r),B.lanes|=l;break}X=X.next}}else if(M.tag===10)P=M.type===r.type?null:M.child;else if(M.tag===18){if(P=M.return,P===null)throw Error(t(341));P.lanes|=l,B=P.alternate,B!==null&&(B.lanes|=l),Nu(P,l,r),P=M.sibling}else P=M.child;if(P!==null)P.return=M;else for(P=M;P!==null;){if(P===r){P=null;break}if(M=P.sibling,M!==null){M.return=P.return,P=M;break}P=P.return}M=P}Wn(n,r,x.children,l),r=r.child}return r;case 9:return x=r.type,d=r.pendingProps.children,ua(r,l),x=Si(x),d=d(x),r.flags|=1,Wn(n,r,d,l),r.child;case 14:return d=r.type,x=Fi(d,r.pendingProps),x=Fi(d.type,x),Lm(n,r,d,x,l);case 15:return Im(n,r,r.type,r.pendingProps,l);case 17:return d=r.type,x=r.pendingProps,x=r.elementType===d?x:Fi(d,x),Nl(n,r),r.tag=1,Qn(d)?(n=!0,ml(r)):n=!1,ua(r,l),wm(r,d,x),$u(r,d,x,l),Ju(null,r,d,!0,n,l);case 19:return Bm(n,r,l);case 22:return Nm(n,r,l)}throw Error(t(156,r.tag))};function u0(n,r){return Me(n,r)}function k1(n,r,l,d){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bi(n,r,l,d){return new k1(n,r,l,d)}function _h(n){return n=n.prototype,!(!n||!n.isReactComponent)}function O1(n){if(typeof n=="function")return _h(n)?1:0;if(n!=null){if(n=n.$$typeof,n===H)return 11;if(n===G)return 14}return 2}function Kr(n,r){var l=n.alternate;return l===null?(l=bi(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Wl(n,r,l,d,x,M){var P=2;if(d=n,typeof n=="function")_h(n)&&(P=1);else if(typeof n=="string")P=5;else e:switch(n){case I:return Ls(l.children,x,M,r);case C:P=8,x|=8;break;case F:return n=bi(12,l,r,x|2),n.elementType=F,n.lanes=M,n;case ie:return n=bi(13,l,r,x),n.elementType=ie,n.lanes=M,n;case J:return n=bi(19,l,r,x),n.elementType=J,n.lanes=M,n;case K:return Xl(l,x,M,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case z:P=10;break e;case D:P=9;break e;case H:P=11;break e;case G:P=14;break e;case $:P=16,d=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=bi(P,l,r,x),r.elementType=n,r.type=d,r.lanes=M,r}function Ls(n,r,l,d){return n=bi(7,n,d,r),n.lanes=l,n}function Xl(n,r,l,d){return n=bi(22,n,d,r),n.elementType=K,n.lanes=l,n.stateNode={isHidden:!1},n}function yh(n,r,l){return n=bi(6,n,null,r),n.lanes=l,n}function Sh(n,r,l){return r=bi(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function z1(n,r,l,d,x){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=In(0),this.expirationTimes=In(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=In(0),this.identifierPrefix=d,this.onRecoverableError=x,this.mutableSourceEagerHydrationData=null}function Mh(n,r,l,d,x,M,P,B,X){return n=new z1(n,r,l,B,X),r===1?(r=1,M===!0&&(r|=8)):r=0,M=bi(3,null,null,r),n.current=M,M.stateNode=n,M.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uu(M),n}function B1(n,r,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A,key:d==null?null:""+d,children:n,containerInfo:r,implementation:l}}function h0(n){if(!n)return Hr;n=n._reactInternals;e:{if(xi(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Qn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Qn(l))return zp(n,l,r)}return r}function f0(n,r,l,d,x,M,P,B,X){return n=Mh(l,d,!0,n,x,M,P,B,X),n.context=h0(null),l=n.current,d=Xn(),x=Yr(l),M=dr(d,x),M.callback=r??null,Wr(l,M,x),n.current.lanes=x,Tt(n,x,d),ti(n,d),n}function jl(n,r,l,d){var x=r.current,M=Xn(),P=Yr(x);return l=h0(l),r.context===null?r.context=l:r.pendingContext=l,r=dr(M,P),r.payload={element:n},d=d===void 0?null:d,d!==null&&(r.callback=d),n=Wr(x,r,P),n!==null&&(ki(n,x,P,M),wl(n,x,P)),P}function ql(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function d0(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function wh(n,r){d0(n,r),(n=n.alternate)&&d0(n,r)}function H1(){return null}var p0=typeof reportError=="function"?reportError:function(n){console.error(n)};function bh(n){this._internalRoot=n}Yl.prototype.render=bh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));jl(n,r,null,null)},Yl.prototype.unmount=bh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;As(function(){jl(null,n,null,null)}),r[lr]=null}};function Yl(n){this._internalRoot=n}Yl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Gt();n={blockedOn:null,target:n,priority:r};for(var l=0;l<Dr.length&&r!==0&&r<Dr[l].priority;l++);Dr.splice(l,0,n),l===0&&ep(n)}};function Eh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function $l(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function m0(){}function G1(n,r,l,d,x){if(x){if(typeof d=="function"){var M=d;d=function(){var fe=ql(P);M.call(fe)}}var P=f0(r,d,n,0,null,!1,!1,"",m0);return n._reactRootContainer=P,n[lr]=P.current,oo(n.nodeType===8?n.parentNode:n),As(),P}for(;x=n.lastChild;)n.removeChild(x);if(typeof d=="function"){var B=d;d=function(){var fe=ql(X);B.call(fe)}}var X=Mh(n,0,!1,null,null,!1,!1,"",m0);return n._reactRootContainer=X,n[lr]=X.current,oo(n.nodeType===8?n.parentNode:n),As(function(){jl(r,X,l,d)}),X}function Kl(n,r,l,d,x){var M=l._reactRootContainer;if(M){var P=M;if(typeof x=="function"){var B=x;x=function(){var X=ql(P);B.call(X)}}jl(r,P,n,x)}else P=G1(l,r,n,x,d);return ql(P)}zt=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=It(r.pendingLanes);l!==0&&(Kn(r,l|1),ti(r,ht()),(Nt&6)===0&&(ma=ht()+500,Gr()))}break;case 13:As(function(){var d=fr(n,1);if(d!==null){var x=Xn();ki(d,n,1,x)}}),wh(n,1)}},$t=function(n){if(n.tag===13){var r=fr(n,134217728);if(r!==null){var l=Xn();ki(r,n,134217728,l)}wh(n,134217728)}},Pi=function(n){if(n.tag===13){var r=Yr(n),l=fr(n,r);if(l!==null){var d=Xn();ki(l,n,r,d)}wh(n,r)}},Gt=function(){return Ct},Li=function(n,r){var l=Ct;try{return Ct=n,r()}finally{Ct=l}},pt=function(n,r,l){switch(r){case"input":if(Xt(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var d=l[r];if(d!==n&&d.form===n.form){var x=dl(d);if(!x)throw Error(t(90));gt(d),Xt(d,x)}}}break;case"textarea":He(n,l);break;case"select":r=l.value,r!=null&&Ot(n,!!l.multiple,r,!1)}},ke=gh,ge=As;var V1={usingClientEntryPoint:!1,Events:[uo,na,dl,_e,Ve,gh]},Eo={findFiberByHostInstance:ys,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},W1={bundleType:Eo.bundleType,version:Eo.version,rendererPackageName:Eo.rendererPackageName,rendererConfig:Eo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=xs(n),n===null?null:n.stateNode},findFiberByHostInstance:Eo.findFiberByHostInstance||H1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{oe=Zl.inject(W1),Ge=Zl}catch{}}return ni.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V1,ni.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eh(r))throw Error(t(200));return B1(n,r,null,l)},ni.createRoot=function(n,r){if(!Eh(n))throw Error(t(299));var l=!1,d="",x=p0;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(x=r.onRecoverableError)),r=Mh(n,1,!1,null,null,l,!1,d,x),n[lr]=r.current,oo(n.nodeType===8?n.parentNode:n),new bh(r)},ni.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=xs(r),n=n===null?null:n.stateNode,n},ni.flushSync=function(n){return As(n)},ni.hydrate=function(n,r,l){if(!$l(r))throw Error(t(200));return Kl(null,n,r,!0,l)},ni.hydrateRoot=function(n,r,l){if(!Eh(n))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,x=!1,M="",P=p0;if(l!=null&&(l.unstable_strictMode===!0&&(x=!0),l.identifierPrefix!==void 0&&(M=l.identifierPrefix),l.onRecoverableError!==void 0&&(P=l.onRecoverableError)),r=f0(r,null,n,1,l??null,x,!1,M,P),n[lr]=r.current,oo(n),d)for(n=0;n<d.length;n++)l=d[n],x=l._getVersion,x=x(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,x]:r.mutableSourceEagerHydrationData.push(l,x);return new Yl(r)},ni.render=function(n,r,l){if(!$l(r))throw Error(t(200));return Kl(null,n,r,!1,l)},ni.unmountComponentAtNode=function(n){if(!$l(n))throw Error(t(40));return n._reactRootContainer?(As(function(){Kl(null,null,n,!1,function(){n._reactRootContainer=null,n[lr]=null})}),!0):!1},ni.unstable_batchedUpdates=gh,ni.unstable_renderSubtreeIntoContainer=function(n,r,l,d){if(!$l(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Kl(n,r,l,!1,d)},ni.version="18.3.1-next-f1338f8080-20240426",ni}var w0;function e_(){if(w0)return Ah.exports;w0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Ah.exports=J1(),Ah.exports}var b0;function t_(){if(b0)return Ql;b0=1;var a=e_();return Ql.createRoot=a.createRoot,Ql.hydrateRoot=a.hydrateRoot,Ql}var n_=t_(),ue=bd();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),r_=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase()),E0=a=>{const e=r_(a);return e.charAt(0).toUpperCase()+e.slice(1)},fx=(...a)=>a.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var s_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=ue.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:s="",children:o,iconNode:c,...u},h)=>ue.createElement("svg",{ref:h,...s_,width:e,height:e,stroke:a,strokeWidth:i?Number(t)*24/Number(e):t,className:fx("lucide",s),...u},[...c.map(([f,p])=>ue.createElement(f,p)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=(a,e)=>{const t=ue.forwardRef(({className:i,...s},o)=>ue.createElement(a_,{ref:o,iconNode:e,className:fx(`lucide-${i_(E0(a))}`,`lucide-${a}`,i),...s}));return t.displayName=E0(a),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],dx=Rn("camera",o_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],c_=Rn("circle-alert",l_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],h_=Rn("circle",u_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],d_=Rn("hand",f_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],m_=Rn("mic-off",p_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],T0=Rn("mic",g_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z",key:"1pctta"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",key:"x3v2xh"}]],v_=Rn("monitor-play",x_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],y_=Rn("music",__);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]],M_=Rn("orbit",S_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],b_=Rn("refresh-cw",w_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],T_=Rn("rotate-ccw",E_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]],A_=Rn("sliders-horizontal",C_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],P_=Rn("sparkles",R_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],I_=Rn("square",L_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196",key:"w8jjjt"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2",key:"1xawa7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],F_=Rn("video-off",N_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],D_=Rn("video",U_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],O_=Rn("volume-2",k_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],B_=Rn("volume-x",z_);function H_({onVideoReady:a}){const e=ue.useRef(null),[t,i]=ue.useState(""),[s,o]=ue.useState(!0),[c,u]=ue.useState(0),h=async()=>{try{if(o(!0),i(""),!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error("Camera API not supported in this browser. Please use a modern browser like Chrome, Firefox, or Edge.");const g=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480,facingMode:"user"},audio:!1});e.current&&(e.current.srcObject=g,e.current.onloadedmetadata=()=>{var m;(m=e.current)==null||m.play(),a(e.current),o(!1)})}catch(g){o(!1),g instanceof Error&&(g.name==="NotAllowedError"||g.name==="PermissionDeniedError"?i("Camera permission denied. Please click the camera icon in your browser's address bar and allow camera access, then click Retry below."):g.name==="NotFoundError"?i("No camera found. Please connect a camera to your device."):g.name==="NotReadableError"?i("Camera is already in use by another application. Please close other apps using the camera and try again."):g.name==="OverconstrainedError"?(i("Camera does not meet requirements. Trying with default settings..."),setTimeout(()=>{f()},1e3)):i("Error: "+g.message))}},f=async()=>{try{o(!0),i("");const g=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1});e.current&&(e.current.srcObject=g,e.current.onloadedmetadata=()=>{var m;(m=e.current)==null||m.play(),a(e.current),o(!1)})}catch{o(!1),i("Unable to access camera with default settings.")}},p=()=>{u(g=>g+1),h()};return ue.useEffect(()=>(h(),()=>{var g;(g=e.current)!=null&&g.srcObject&&e.current.srcObject.getTracks().forEach(y=>y.stop())}),[a]),V.jsxs("div",{className:"relative",children:[V.jsx("video",{ref:e,className:"w-48 h-36 rounded-lg border-2 border-white/20 shadow-lg bg-black",style:{transform:"scaleX(-1)"},playsInline:!0,muted:!0}),t&&V.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center bg-black/95 rounded-lg p-3 gap-2",children:[V.jsx(c_,{className:"w-6 h-6 text-red-400"}),V.jsx("p",{className:"text-[10px] text-red-400 text-center leading-tight",children:t}),V.jsxs("button",{onClick:p,className:"mt-1 px-3 py-1 bg-white/10 hover:bg-white/20 rounded text-[10px] text-white flex items-center gap-1 transition-colors",children:[V.jsx(b_,{className:"w-3 h-3"}),"Retry"]}),V.jsx("a",{href:"https://support.google.com/chrome/answer/2693767",target:"_blank",rel:"noopener noreferrer",className:"text-[9px] text-blue-400 hover:text-blue-300 underline",children:"How to enable camera"})]}),s&&!t&&V.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center bg-black/80 rounded-lg gap-2",children:[V.jsx(dx,{className:"w-6 h-6 text-white/60 animate-pulse"}),V.jsx("p",{className:"text-xs text-white/60",children:"Loading camera..."})]})]})}const G_=3,px=400,V_=.75,W_={mic:"ROOM",music:"TAB",off:"MUTE"},X_={mic:"Take sound: the room through the microphone, music and all, as it actually sounded (S)",music:"Take sound: straight off a tab or the machine, with no room in it. Asks which, each take (S)",off:"Take sound: none (S)"};function C0(a){return a==="mic"?"music":a==="music"?"off":"mic"}async function j_(a,e){if(a==="off")return{stream:null,owned:!1};if(a==="mic"){if(e&&e.getAudioTracks().some(t=>t.readyState==="live"))return{stream:e,owned:!1};try{return{stream:await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1}}),owned:!0}}catch{return{stream:null,owned:!1,problem:"The microphone was refused, so this take has no sound."}}}try{const t=await navigator.mediaDevices.getDisplayMedia({video:!0,audio:!0});for(const i of t.getVideoTracks())i.stop();return t.getAudioTracks().length===0?{stream:null,owned:!1,problem:'No sound came through. Chrome asks you to tick "share tab audio" in the picker; other browsers do not offer it at all, so MIC is the one that always works.'}:{stream:t,owned:!0}}catch{return{stream:null,owned:!1,problem:"No source was picked, so this take has no sound."}}}function q_({selectedColors:a,hue:e,saturation:t,mode:i,onHueChange:s,onModeChange:o,autoHueEnabled:c,onAutoHueToggle:u}){const h=(f,p,g)=>{f=f/360,p=p/100,g=g/100;let m,y,v;if(p===0)m=y=v=g;else{const _=(E,T,L)=>(L<0&&(L+=1),L>1&&(L-=1),L<.16666666666666666?E+(T-E)*6*L:L<.5?T:L<.6666666666666666?E+(T-E)*(.6666666666666666-L)*6:E),S=g<.5?g*(1+p):g+p-g*p,w=2*g-S;m=_(w,S,f+.3333333333333333),y=_(w,S,f),v=_(w,S,f-.3333333333333333)}const b=_=>{const S=Math.round(_*255).toString(16);return S.length===1?"0"+S:S};return`#${b(m)}${b(y)}${b(v)}`};return V.jsxs("div",{className:"w-full flex items-center gap-4 px-6 font-mono",children:[V.jsxs("div",{className:"flex gap-1",children:[V.jsx("button",{onClick:()=>o("black"),className:`px-2 py-1 text-[10px] rounded transition-all ${i==="black"?"bg-white/20 text-white":"bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60"}`,title:"1 Color (Fn key)",children:"1C"}),V.jsx("button",{onClick:()=>o("contrast"),className:`px-2 py-1 text-[10px] rounded transition-all ${i==="contrast"?"bg-white/20 text-white":"bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60"}`,title:"2 Colors (Ctrl key)",children:"2C"}),V.jsx("button",{onClick:()=>o("grayscale"),className:`px-2 py-1 text-[10px] rounded transition-all ${i==="grayscale"?"bg-white/20 text-white":"bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60"}`,title:"Black & White (Option/Alt key)",children:"B/W"})]}),i!=="grayscale"&&V.jsxs("div",{className:"flex-1 relative h-6",children:[V.jsx("div",{className:"absolute inset-0 rounded-full",style:{background:"linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)"}}),V.jsx("input",{type:"range",min:"0",max:"360",value:e,onChange:f=>s(Number(f.target.value)),className:"vj-slider-bare absolute inset-0 w-full appearance-none bg-transparent cursor-pointer"}),V.jsx("div",{className:"absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-white shadow-lg pointer-events-none",style:{left:`calc(${e/360*100}% - 10px)`,backgroundColor:h(e,t,50)}})]}),i!=="grayscale"&&V.jsx("button",{onClick:u,className:`px-3 py-1 text-[10px] rounded transition-all whitespace-nowrap ${c?"bg-cyan-500/30 text-cyan-300 border border-cyan-400/50":"bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60"}`,title:"Auto-rotate hue palette",children:c?"⟳ AUTO":"AUTO"})]})}const fs={geometric:{pattern:"geometric",name:"Geometric",short:"Geometric",category:"2D",key:"1",description:"Rotating polygons with trails"},particles:{pattern:"particles",name:"Particles",short:"Particles",category:"2D",key:"2",description:"Dynamic particle system"},waves:{pattern:"waves",name:"Waves",short:"Waves",category:"2D",key:"3",description:"Flowing wave patterns"},technical:{pattern:"technical",name:"Technical Hand Tracker",short:"Tracker",category:"2D",key:"4",description:"Hand tracking visualization"},lottie:{pattern:"lottie",name:"Lottie Inspired",short:"Lottie",category:"2D",key:"5",description:"Animated circular patterns"},"lottie-classic":{pattern:"lottie-classic",name:"Classic Lottie",short:"Lottie 2",category:"2D",key:"Q",description:"Classic Lottie animation"},linefield:{pattern:"linefield",name:"Line Field",short:"Lines",category:"2D",key:"6",description:"Dynamic line fields"},chromatic:{pattern:"chromatic",name:"Chromatic Glow",short:"Chroma",category:"2D",key:"7",description:"RGB chromatic aberration"},halftone:{pattern:"halftone",name:"Halftone Matrix",short:"Halftone",category:"2D",key:"8",description:"Halftone dot patterns"},matrix:{pattern:"matrix",name:"Digital Grid",short:"Grid",category:"2D",key:"9",description:"Matrix-style grid"},distortedcamera:{pattern:"distortedcamera",name:"Distorted Camera",short:"Camera",category:"2D",key:"W",description:"Gesture-controlled camera distortion with chromatic effects"},thicklines:{pattern:"thicklines",name:"Thick Lines",short:"Blocks",category:"2D",key:"=",description:"Rotating blocks with thickness response"},flowfield:{pattern:"flowfield",name:"Flow Field",short:"Flow",category:"2D",key:"D",description:"Flowing vector field"},liquidchrome:{pattern:"liquidchrome",name:"Liquid Chrome",short:"Chrome",category:"2D",key:"-",description:"Iridescent liquid metal simulation"},glitch:{pattern:"glitch",name:"Glitch Network",short:"Glitch",category:"3D",key:"1",description:"Network glitch with perspective effects"},cyberstream:{pattern:"cyberstream",name:"Cyber Stream",short:"Cyber",category:"3D",key:"2",description:"Cyberpunk stream with depth perspective"},morphing:{pattern:"morphing",name:"Morphing Sphere",short:"Sphere",category:"3D",key:"=",description:"Three.js morphing icosphere"},cubewall:{pattern:"cubewall",name:"Cube Wall",short:"Cubes",category:"3D",key:"4",description:"Three.js cube grid waves"},facecloud:{pattern:"facecloud",name:"Op-Art Grid",short:"Op-Art",category:"3D",key:"5",description:"Op-art grid with perspective"},face:{pattern:"face",name:"Face Mesh",short:"Face",category:"3D",key:"-",description:"MediaPipe face tracking with glowing mesh"},"smokehand-torus":{pattern:"smokehand-torus",name:"Smoke Torus",short:"Torus",category:"3D",key:"8",description:"Particle smoke shaped around a torus"},"smokehand-hand":{pattern:"smokehand-hand",name:"Smoke Hand",short:"Hand",category:"3D",key:"7",description:"Particle smoke shaped around a hand model"},"network-cube":{pattern:"network-cube",name:"Network Cube",short:"Network",category:"3D",key:"9",description:"Sparse cubic constellation"},"elastic-net":{pattern:"elastic-net",name:"Elastic Net",short:"Elastic",category:"3D",key:"0",description:"Elastic neural network simulation"},ripple:{pattern:"ripple",name:"Water Ripple",short:"Ripple",category:"TD",key:"1",description:"Camera refracted through a height field your hands leave behind"},text:{pattern:"text",name:"Kinetic Type",short:"Type",category:"TD",key:"2",description:"Your words, extruded and pushed around by your hands"},video:{pattern:"video",name:"Clip",short:"Clip",category:"TD",key:"3",description:"Your own footage, sheared into sliding bands"},chrome:{pattern:"chrome",name:"Chrome",short:"Chrome",category:"TD",key:"5",description:"Liquid metal on black, splitting light into rainbow at its edges"},mosaic:{pattern:"mosaic",name:"Mosaic",short:"Mosaic",category:"TD",key:"4",description:"Your video or photo rebuilt out of letters, dots, blocks or bars"},digitalblocks:{pattern:"digitalblocks",name:"Digital Horizon",short:"Horizon",category:"2D",key:"0",description:"Glitchy digital data sorting"}},ks=10,mx="vj-setlist";function Wo(a){return a===9?"0":String(a+1)}function vf(a){return a==="0"?9:a>="1"&&a<="9"?Number(a)-1:-1}const Lh=["geometric","waves","particles","halftone","ripple","flowfield"];function Y_(a){return typeof a=="string"&&a in fs}function $_(){try{const a=localStorage.getItem(mx);if(a===null)return Lh;const e=JSON.parse(a);return Array.isArray(e)?e.filter(Y_).filter((i,s,o)=>o.indexOf(i)===s).slice(0,ks):Lh}catch{return Lh}}function K_(a){try{localStorage.setItem(mx,JSON.stringify(a))}catch{}}function Z_(a){return a.gesture==="pinch"?"PINCH":a.fingerCount===void 0?null:a.fingerCount===2?"MED":a.fingerCount>=5?"FAST":`${a.fingerCount}F`}function A0({label:a,hand:e}){const t=Z_(e);return V.jsxs("div",{children:[V.jsx("div",{className:"text-white/90",children:a}),t&&V.jsx("div",{className:"text-cyan-400",children:t})]})}const Q_=[{key:"bass",label:"LOW",band:"bass"},{key:"lowMid",label:"L-MID",band:"bass"},{key:"mid",label:"MID",band:"mid"},{key:"high",label:"HIGH",band:"high"}],J_=[{band:"bass",label:"LOWS",hint:"Kick and bassline drive scale, weight and push"},{band:"mid",label:"MIDS",hint:"Melody and voice drive speed and movement"},{band:"high",label:"HIGHS",hint:"Hats and air drive density and detail"},{band:"beat",label:"BEAT",hint:"Onsets hit the visuals, the way a clap does"}];function ey(a){const e=Math.floor(a);return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function Is({label:a,active:e,warn:t,onClick:i,title:s,children:o}){return V.jsxs("button",{onClick:i,title:s,className:"flex flex-col items-center gap-1 group/btn",children:[V.jsx("span",{className:`w-8 h-8 rounded-full transition-all flex items-center justify-center group-hover/btn:scale-105 group-active/btn:scale-95 ${e?t?"bg-cyan-400 text-black shadow-lg shadow-cyan-400/40":"bg-white text-black shadow-lg shadow-white/40":"bg-white/10 text-white/60 group-hover/btn:bg-white/20 group-hover/btn:text-white"}`,children:o}),V.jsx("span",{className:`text-[8px] tracking-widest transition-colors ${e?"text-white/80":"text-white/35"}`,children:a})]})}function ty({currentPattern:a,onPatternChange:e,layers:t,selectedLayer:i,onPatternHold:s,onLayerCycle:o,showCamera:c,onCameraToggle:u,handData:h,selectedColors:f,hue:p,saturation:g,colorMode:m,onHueChange:y,onSaturationChange:v,onColorModeChange:b,autoHueEnabled:_,onAutoHueToggle:S,set:w,onOpenLibrary:E,audioEnabled:T,onAudioToggle:L,audioSensitivity:A,onAudioSensitivityChange:I,audioUse:C,onAudioUseToggle:F,audioLevels:z,motion:D,onMotionChange:H,idleDrive:ie,onIdleDriveToggle:J,fxEnabled:G,fxActive:$,onFxToggle:K,canRecord:W,recording:re,recordSeconds:ne,onRecordToggle:O,sound:q,onSoundCycle:ve,output:be,onOutputToggle:de}){var Xe;const Y=ue.useRef(null),me=()=>{Y.current&&(clearTimeout(Y.current.timer),Y.current=null)},pe=Oe=>{me(),Y.current={pattern:Oe,fired:!1,timer:window.setTimeout(()=>{Y.current&&(Y.current.fired=!0),s(Oe)},px)}},Ie=Oe=>{const gt=Y.current;!gt||gt.pattern!==Oe||(clearTimeout(gt.timer),Y.current=null,gt.fired||e(Oe))};return V.jsxs(V.Fragment,{children:[V.jsx("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 z-50",children:V.jsx("div",{className:"bg-black/70 backdrop-blur-sm rounded-full py-2 px-6 border border-white/20 font-mono",children:V.jsxs("div",{className:"flex items-center gap-4",children:[V.jsx("button",{onClick:E,title:"Back to the library to change the set (Esc)",className:"px-3 py-1 rounded text-[10px] tracking-wider text-white/40 transition-all hover:bg-white/10 hover:text-white/80",children:"SET"}),V.jsx("div",{className:"w-px h-6 bg-white/20"}),V.jsx("div",{className:"flex items-center gap-1.5",children:w.map((Oe,gt)=>{const rt=t.findIndex(vt=>vt.pattern===Oe),bt=rt===i,Lt=rt!==-1&&!bt;return V.jsxs("button",{onPointerDown:()=>pe(Oe),onPointerUp:()=>Ie(Oe),onPointerLeave:me,className:"relative flex w-[46px] shrink-0 flex-col items-center gap-0.5 group/set",title:`${fs[Oe].name} (${Wo(gt)})${rt!==-1?` — layer ${rt+1}`:""} · hold to stack`,children:[V.jsxs("span",{className:`relative flex h-7 w-7 items-center justify-center rounded-full text-xs transition-all ${bt?"bg-white text-black shadow-lg shadow-white/50":Lt?"bg-white/25 text-white ring-1 ring-emerald-400/70":"bg-white/10 text-white/60 group-hover/set:bg-white/20 group-hover/set:text-white/90"}`,children:[Wo(gt),rt!==-1&&t.length>1&&V.jsx("span",{className:"absolute -right-1 -top-1 h-3 w-3 rounded-full bg-emerald-400 text-center text-[7px] leading-3 text-black",children:rt+1})]}),V.jsx("span",{className:`w-full truncate text-center text-[8px] leading-none transition-colors ${bt?"text-white/85":"text-white/35 group-hover/set:text-white/65"}`,children:fs[Oe].short})]},Oe)})}),V.jsx("div",{className:"w-px h-6 bg-white/20"}),V.jsxs("div",{className:"flex items-center gap-1.5",title:"How hard the hands drive every visual (- and =)",children:[V.jsx("span",{className:"text-[8px] tracking-widest text-white/35",children:"HANDS"}),V.jsx("input",{type:"range","aria-label":"Hand motion",min:0,max:2,step:.05,value:D,onChange:Oe=>H(parseFloat(Oe.target.value)),className:"vj-slider h-1 w-16 cursor-pointer appearance-none rounded-full focus:outline-none",style:{background:`linear-gradient(to right, rgba(255,255,255,0.85) ${D/2*100}%, rgba(255,255,255,0.15) ${D/2*100}%)`}}),V.jsxs("span",{className:`w-7 text-[9px] tabular-nums ${D>1.35?"text-amber-300":D<.65?"text-cyan-300":"text-white/55"}`,children:[Math.round(D*100),"%"]})]}),t.length>1&&V.jsxs(V.Fragment,{children:[V.jsx("div",{className:"w-px h-6 bg-white/20"}),V.jsxs("button",{onClick:o,title:"The layer the sliders and colours act on (L) — fade it with [ and ]",className:"px-2 py-1 rounded text-[10px] whitespace-nowrap bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 transition-all",children:["L",i+1,"/",t.length,V.jsxs("span",{className:"text-emerald-300/60",children:[" ",Math.round((((Xe=t[i])==null?void 0:Xe.opacity)??1)*100),"%"]})]})]})]})})}),V.jsxs("div",{className:"absolute bottom-[25px] left-6 right-6 z-50 flex items-end gap-4 font-mono pointer-events-none",children:[V.jsx("div",{className:"shrink-0 pointer-events-auto",children:V.jsxs("div",{className:"bg-black/70 backdrop-blur-sm rounded-2xl py-2 px-3 border border-white/20 flex items-end gap-2.5 w-fit",children:[V.jsx(Is,{label:"CAM",active:c,onClick:u,title:"Show the camera preview (C)",children:c?V.jsx(D_,{className:"w-3.5 h-3.5"}):V.jsx(F_,{className:"w-3.5 h-3.5"})}),V.jsx(Is,{label:"MIC",active:T,onClick:L,title:"Audio-reactive mode: drive the visuals from the microphone (A)",children:T?V.jsx(T0,{className:"w-3.5 h-3.5"}):V.jsx(m_,{className:"w-3.5 h-3.5"})}),V.jsx(Is,{label:"AUTO",active:ie,onClick:J,title:"Auto-motion: keep hand-driven visuals moving when no hands are tracked (I)",children:V.jsx(M_,{className:"w-3.5 h-3.5"})}),V.jsx("div",{className:"w-px h-8 bg-white/15 self-center"}),V.jsx(Is,{label:"FX",active:G&&$,warn:G&&$,onClick:K,title:G?"Post effects are on. Click to bypass the whole chain, keeping every setting (X)":"Post effects bypassed. Click to bring them back (X)",children:V.jsx(P_,{className:"w-3.5 h-3.5"})}),V.jsx("div",{className:"w-px h-8 bg-white/15 self-center"}),V.jsx(Is,{label:"OUT",active:be,onClick:de,title:be?"Close the projector window (O)":"Open a second window with only the visuals in it — drag it onto the projector while these controls stay here (O)",children:V.jsx(v_,{className:"w-3.5 h-3.5"})}),W&&V.jsxs(V.Fragment,{children:[V.jsx(Is,{label:W_[q],active:q!=="off",onClick:ve,title:X_[q],children:q==="off"?V.jsx(B_,{className:"w-3.5 h-3.5"}):q==="music"?V.jsx(y_,{className:"w-3.5 h-3.5"}):V.jsx(O_,{className:"w-3.5 h-3.5"})}),V.jsx(Is,{label:re?ey(ne):"REC",active:re,warn:re,onClick:O,title:re?"Stop and save the take (R)":"Record the visuals — and the camera if its preview is up — with none of these controls in it (R)",children:re?V.jsx(I_,{className:"w-3 h-3 fill-current"}):V.jsx(h_,{className:"w-3.5 h-3.5 fill-current text-red-500 group-hover/btn:text-red-400"})})]})]})}),V.jsx("div",{className:"flex-1 min-w-0 flex justify-center pointer-events-none",children:V.jsx("div",{className:"bg-black/70 backdrop-blur-sm rounded-full py-2 px-6 border border-white/20 max-w-4xl w-full pointer-events-auto",children:V.jsx(q_,{selectedColors:f,hue:p,saturation:g,mode:m,onHueChange:y,onModeChange:b,autoHueEnabled:_,onAutoHueToggle:S})})}),!T&&V.jsxs("div",{className:"shrink-0 bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-white/20 space-y-2 text-xs min-w-[200px] font-mono animate-in fade-in duration-300 pointer-events-auto",children:[V.jsx("div",{className:"text-white/80 mb-2",children:"HAND"}),V.jsxs("div",{className:"space-y-1",children:[h.left&&V.jsx(A0,{label:"L HAND",hand:h.left}),h.right&&V.jsx(A0,{label:"R HAND",hand:h.right}),h.clapping&&V.jsx("div",{className:"text-red-500 text-base animate-bounce",children:"CLAP!"}),!h.left&&!h.right&&V.jsx("div",{className:"text-white/50",children:"NO HANDS"})]}),V.jsxs("div",{className:"text-white/50 text-[10px] mt-2 pt-2 border-t border-white/20",children:["OPEN=FOLLOW",V.jsx("br",{}),"PINCH=SLOW 2F=MED 5F=FAST",V.jsx("br",{}),"CLAP=EXPLODE"]})]}),T&&V.jsx("div",{className:"shrink-0 animate-in slide-in-from-right-5 fade-in duration-300 pointer-events-auto",children:V.jsxs("div",{className:"bg-black/70 backdrop-blur-sm rounded-xl p-4 border border-white/20 font-mono flex flex-col gap-4 w-[160px]",children:[V.jsxs("div",{className:"flex items-center gap-2 border-b border-white/10 pb-2",children:[V.jsx(T0,{className:"w-3.5 h-3.5 text-white/90 animate-pulse"}),V.jsx("span",{className:"text-[10px] font-bold text-white/80 tracking-wider",children:"AUDIO"})]}),V.jsxs("div",{className:"space-y-1 group",children:[V.jsxs("div",{className:"flex justify-between text-[9px] text-white/50 font-medium",children:[V.jsx("span",{className:"group-hover:text-white/80 transition-colors",children:"GAIN"}),V.jsxs("span",{className:"text-white",children:[Math.round(A*100),"%"]})]}),V.jsx("div",{className:"relative h-4 flex items-center",children:V.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:A,onChange:Oe=>I(parseFloat(Oe.target.value)),className:"vj-slider w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer focus:outline-none",style:{backgroundImage:`linear-gradient(to right, white 0%, white ${A*100}%, rgba(255,255,255,0.2) ${A*100}%)`}})})]}),V.jsxs("div",{className:"space-y-1",children:[V.jsxs("div",{className:"flex justify-between text-[9px] text-white/50 font-medium",children:[V.jsx("span",{children:"LEVELS"}),V.jsx("span",{className:`transition-colors ${z.onset>.05?"text-cyan-300":"text-white/20"}`,children:"●"})]}),V.jsx("div",{className:"flex items-end gap-1 h-10",children:Q_.map(({key:Oe,label:gt,band:rt})=>V.jsxs("div",{className:"flex-1 flex flex-col items-center gap-1",children:[V.jsx("div",{className:"relative w-full h-8 rounded-sm bg-white/10 overflow-hidden",children:V.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-white transition-[height] duration-75",style:{height:`${Math.round(z[Oe]*100)}%`}})}),V.jsx("span",{className:`text-[7px] tracking-wider ${C[rt]?"text-white/50":"text-white/20"}`,children:gt})]},Oe))})]}),V.jsx("div",{className:"flex flex-col gap-1.5",children:J_.map(({band:Oe,label:gt,hint:rt})=>V.jsxs("button",{onClick:()=>F(Oe),title:rt,className:`flex justify-between items-center px-2 py-1.5 rounded-md text-[9px] font-bold transition-all border ${C[Oe]?"bg-white text-black border-white shadow-[0_0_10px_rgba(255,255,255,0.3)]":"bg-transparent text-white/50 border-white/10 hover:bg-white/10 hover:text-white"}`,children:[V.jsx("span",{children:gt}),V.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${C[Oe]?"bg-black":"bg-white/30"}`})]},Oe))})]})})]})]})}const ny="modulepreload",iy=function(a,e){return new URL(a,e).href},R0={},gx=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let c=function(p){return Promise.all(p.map(g=>Promise.resolve(g).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};const u=document.getElementsByTagName("link"),h=document.querySelector("meta[property=csp-nonce]"),f=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));s=c(t.map(p=>{if(p=iy(p,i),p in R0)return;R0[p]=!0;const g=p.endsWith(".css"),m=g?'[rel="stylesheet"]':"";if(!!i)for(let b=u.length-1;b>=0;b--){const _=u[b];if(_.href===p&&(!g||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${m}`))return;const v=document.createElement("link");if(v.rel=g?"stylesheet":ny,g||(v.as="script"),v.crossOrigin="",v.href=p,f&&v.setAttribute("nonce",f),document.head.appendChild(v),g)return new Promise((b,_)=>{v.addEventListener("load",b),v.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${p}`)))})}))}function o(c){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=c,window.dispatchEvent(u),!u.defaultPrevented)throw c}return s.then(c=>{for(const u of c||[])u.status==="rejected"&&o(u.reason);return e().catch(o)})},P0=30,L0=.15;function ry({videoElement:a,onHandData:e}){const t=ue.useRef(null),i=ue.useRef(!1),s=ue.useRef(-1),o=ue.useRef(null),c=ue.useRef([]),u=ue.useRef([]),h=ue.useRef({}),f=ue.useRef([]),p=ue.useRef(null);return ue.useEffect(()=>{let g=!0;const m=async()=>{if(!i.current)try{console.log("✋ Initializing MediaPipe Hand Landmarker (Tasks Vision API)...");const _=await gx(()=>import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14"),[],import.meta.url),{HandLandmarker:S,FilesetResolver:w}=_,E=await w.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm");t.current=await S.createFromOptions(E,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",delegate:"GPU"},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.7,minHandPresenceConfidence:.5,minTrackingConfidence:.5}),console.log("✅ Hand tracking initialized (Tasks Vision API)"),i.current=!0,g&&y()}catch(_){console.error("❌ Error initializing hand tracking:",_)}},y=()=>{const _=()=>{if(!g||!t.current||!a)return;const S=performance.now();if(a.currentTime!==s.current){s.current=a.currentTime;try{const w=t.current.detectForVideo(a,S);v(w)}catch(w){console.error("Hand detection error:",w)}}o.current=requestAnimationFrame(_)};_()},v=_=>{const S=Date.now(),w={left:null,right:null};if(_.landmarks&&_.handedness&&_.landmarks.length>0)if(_.handedness.forEach((E,T)=>{const L=_.landmarks[T],A=E[0].categoryName.toLowerCase(),I=L[9],C={x:1-I.x,y:I.y},F=ay(L),z=sy(L),D=A==="left"?u.current:c.current;let H=0;if(D.length>0){const W=D[D.length-1],re=C.x-W.position.x,ne=C.y-W.position.y,O=Math.sqrt(re*re+ne*ne),q=(S-W.timestamp)/1e3;H=q>0?O/q:0,H=Math.min(H*2,3)}const ie=A==="left"?"right":"left";(D.length>0?D[D.length-1].gesture:null)!==F&&(h.current[ie]=S);const G=h.current[ie]||S,$=(S-G)/1e3;D.push({position:C,gesture:F,timestamp:S}),D.length>10&&D.shift(),f.current.push({x:C.x,y:C.y,hand:ie});const K={position:C,gesture:F,pinchDistance:F==="pinch"?oy(L):void 0,velocity:H,holdDuration:$,fingerCount:z,landmarks:L.map(W=>({x:1-W.x,y:W.y,z:W.z}))};A==="left"?w.right=K:w.left=K}),w.left&&w.right){const E=w.left.position.x-w.right.position.x,T=w.left.position.y-w.right.position.y,L=Math.sqrt(E*E+T*T);w.distanceBetweenHands=L,L<L0&&(w.clapping=!0,w.clapIntensity=1-L/L0)}else p.current=null;f.current.length>P0&&(f.current=f.current.slice(-P0)),w.gestureTrail=[...f.current],e(w)},b=()=>{a&&a.readyState>=2?m():setTimeout(b,100)};return b(),()=>{if(g=!1,o.current!==null&&cancelAnimationFrame(o.current),t.current)try{t.current.close(),t.current=null}catch(_){console.warn("Error closing hand landmarker:",_)}i.current=!1}},[a,e]),null}function sy(a){if(!a||a.length<21)return 0;const e=a[0];a[9];let t=0;const i=a[4];a[3];const s=a[2],o=a[1],c=Math.sqrt(Math.pow(i.x-o.x,2)+Math.pow(i.y-o.y,2)),u=Math.sqrt(Math.pow(s.x-o.x,2)+Math.pow(s.y-o.y,2));c>u*1.2&&t++;const h=[{tip:8,pip:6,mcp:5},{tip:12,pip:10,mcp:9},{tip:16,pip:14,mcp:13},{tip:20,pip:18,mcp:17}],f=a[9];f.y-e.y,f.z-e.z;for(const p of h){const g=a[p.tip],m=a[p.pip],y=a[p.mcp],v=g.y<y.y-.02,b=Math.sqrt(Math.pow(g.x-e.x,2)+Math.pow(g.y-e.y,2)+Math.pow(g.z-e.z,2)),_=Math.sqrt(Math.pow(m.x-e.x,2)+Math.pow(m.y-e.y,2)+Math.pow(m.z-e.z,2)),S=b>_*1.05,w={x:y.x-m.x,y:y.y-m.y,z:y.z-m.z},E={x:g.x-m.x,y:g.y-m.y,z:g.z-m.z},T=Math.sqrt(w.x**2+w.y**2+w.z**2),L=Math.sqrt(E.x**2+E.y**2+E.z**2);if(T>0&&L>0){const I=w.x/T*(E.x/L)+w.y/T*(E.y/L)+w.z/T*(E.z/L)<-.3;(v||S||I)&&t++}else(v||S)&&t++}return t}function ay(a){if(!a||a.length<21)return"none";const e=a[9],t=a[4],i=a[8],s=a[12],o=a[16],c=a[20],u=a[6],h=a[10],f=a[14],p=a[18];if(Math.sqrt(Math.pow(t.x-i.x,2)+Math.pow(t.y-i.y,2)+Math.pow(t.z-i.z,2))<.06)return"pinch";const m=Math.sqrt(Math.pow(i.x-e.x,2)+Math.pow(i.y-e.y,2)+Math.pow(i.z-e.z,2)),y=Math.sqrt(Math.pow(u.x-e.x,2)+Math.pow(u.y-e.y,2)+Math.pow(u.z-e.z,2)),v=m>y*1.1,b=Math.sqrt(Math.pow(s.x-e.x,2)+Math.pow(s.y-e.y,2)+Math.pow(s.z-e.z,2)),_=Math.sqrt(Math.pow(h.x-e.x,2)+Math.pow(h.y-e.y,2)+Math.pow(h.z-e.z,2)),S=b>_*1.1,w=Math.sqrt(Math.pow(o.x-e.x,2)+Math.pow(o.y-e.y,2)+Math.pow(o.z-e.z,2)),E=Math.sqrt(Math.pow(f.x-e.x,2)+Math.pow(f.y-e.y,2)+Math.pow(f.z-e.z,2)),T=w>E*1.1,L=Math.sqrt(Math.pow(c.x-e.x,2)+Math.pow(c.y-e.y,2)+Math.pow(c.z-e.z,2)),A=Math.sqrt(Math.pow(p.x-e.x,2)+Math.pow(p.y-e.y,2)+Math.pow(p.z-e.z,2)),I=L>A*1.1,C=[v,S,T,I].filter(Boolean).length;return C>=3?"open":C<=1?"fist":"none"}function oy(a){const e=a[4],t=a[8];return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)+Math.pow(e.z-t.z,2))}function ly({onGrant:a,onSkip:e}){return V.jsx("div",{className:"fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center",children:V.jsx("div",{className:"bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-xl rounded-2xl p-8 max-w-md border border-white/20 shadow-2xl",children:V.jsxs("div",{className:"text-center space-y-6",children:[V.jsx("div",{className:"flex justify-center",children:V.jsx("div",{className:"w-20 h-20 bg-purple-600/30 rounded-full flex items-center justify-center",children:V.jsx(dx,{className:"w-10 h-10 text-purple-300"})})}),V.jsxs("div",{children:[V.jsx("h2",{className:"text-2xl text-white mb-2",children:"Camera Access Required"}),V.jsx("p",{className:"text-white/70 text-sm",children:"This VJ app needs camera access to track your hand movements and gestures for interactive visual control."})]}),V.jsx("div",{className:"bg-black/30 rounded-lg p-4 space-y-2 text-left",children:V.jsxs("div",{className:"flex items-start gap-3",children:[V.jsx(d_,{className:"w-5 h-5 text-green-400 mt-0.5 flex-shrink-0"}),V.jsxs("div",{className:"text-sm",children:[V.jsx("div",{className:"text-white/90",children:"Hand Tracking"}),V.jsx("div",{className:"text-white/60 text-xs",children:"Real-time gesture recognition"})]})]})}),V.jsxs("div",{className:"flex gap-3",children:[V.jsx("button",{onClick:e,className:"flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all",children:"Skip"}),V.jsx("button",{onClick:a,className:"flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg transition-all font-medium",children:"Allow Access"})]}),V.jsx("p",{className:"text-white/50 text-xs",children:"Your camera feed is processed locally on your device. No data is sent to external servers."})]})})})}function ii(a){return Number.isFinite(a)?Math.round(Math.min(255,Math.max(0,a))).toString(16).padStart(2,"0"):"00"}const _f={physics:{initialVelocity:4,damping:.98},size:{baseRange:[100,200],growthMultiplier:1.5,shrinkMultiplier:.2,transitionSpeed:.3},glow:{layers:2,expansion:.4,layerFade:.3},emission:{openHandRate:.5,closedHandRate:.05},trail:{fadeAlpha:.3},limits:{maxParticles:50},explosion:{particleCount:50,speedRange:[5,20],sizeMultiplier:1.5,forceMultiplier:10,growthFactor:.8,vibrationDuration:.25,cooldown:1e3,flashDelay:20},controls:{fingerCountSpeed:{oneFinger:.01,twoFingers:1,threeFingers:1.4,fourFingers:1.7,fiveFingers:2},openOpacity:1,closedOpacity:1,fadeOutRate:.08}};function ko(a,e){let t=a;for(const i of e.split(".")){if(typeof t!="object"||t===null)return;t=t[i]}return typeof t=="number"?t:void 0}function Ci(a,e){const t=structuredClone(a);for(const[i,s]of Object.entries(e)){if(!Number.isFinite(s)||ko(a,i)===void 0)continue;const o=i.split("."),c=o.pop();let u=t;for(const h of o)u=u[h];u[c]=s}return t}function I0(a){if(typeof a!="object"||a===null||Array.isArray(a))return{};const e={};for(const[t,i]of Object.entries(a)){if(typeof i!="object"||i===null||Array.isArray(i))continue;const s={};for(const[o,c]of Object.entries(i))typeof c=="number"&&Number.isFinite(c)&&(s[o]=c);Object.keys(s).length>0&&(e[t]=s)}return e}let xx=1,vx=0;function cy(a,e){xx=e,vx+=a*e}function Sn(){return xx}function Ko(){return vx}class Ih{constructor(e,t,i,s,o){U(this,"x");U(this,"y");U(this,"vx");U(this,"vy");U(this,"size");U(this,"color");U(this,"baseSize");U(this,"targetSize");U(this,"alpha",1);this.x=e,this.y=t;const c=o.physics.initialVelocity;this.vx=(Math.random()-.5)*c,this.vy=(Math.random()-.5)*c;const[u,h]=o.size.baseRange;this.baseSize=(u+Math.random()*(h-u))*s,this.size=this.baseSize,this.targetSize=this.baseSize,this.color=i}update(e,t,i,s){e?(this.targetSize=this.baseSize*s.size.growthMultiplier,this.alpha=s.controls.openOpacity,t>0&&(this.vx+=(Math.random()-.5)*t*s.explosion.forceMultiplier*i,this.vy+=(Math.random()-.5)*t*s.explosion.forceMultiplier*i,this.targetSize=this.baseSize*(1.2+t*s.explosion.growthFactor))):(this.targetSize=this.baseSize*s.size.shrinkMultiplier,this.alpha=Math.max(0,this.alpha-s.controls.fadeOutRate)),this.size+=(this.targetSize-this.size)*s.size.transitionSpeed,this.x+=this.vx*i,this.y+=this.vy*i,this.vx*=s.physics.damping,this.vy*=s.physics.damping}}class uy{constructor(e,t){U(this,"cfg",_f);U(this,"canvas");U(this,"ctx");U(this,"particles",[]);U(this,"time",0);U(this,"vibrationTimer",0);U(this,"isExploding",!1);this.canvas=e,this.ctx=t}setParams(e){this.cfg=Ci(_f,e)}render(e,t){this.time+=.016*Sn(),this.ctx.fillStyle=`rgba(0, 0, 0, ${this.cfg.trail.fadeAlpha})`,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&!this.isExploding&&(this.createExplosionParticles(t),this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.004,i=Math.max(0,this.vibrationTimer));let s=this.cfg.controls.fingerCountSpeed.twoFingers,o=!1,c=!1,u=0,h=0;e.left&&(o=e.left.gesture==="open",u=e.left.fingerCount||0,e.left.gesture==="pinch"&&(u=1)),e.right&&(c=e.right.gesture==="open",h=e.right.fingerCount||0,e.right.gesture==="pinch"&&(h=1));const f=o||c,p=Math.max(u,h);if(p===1?s=this.cfg.controls.fingerCountSpeed.oneFinger:p===2?s=this.cfg.controls.fingerCountSpeed.twoFingers:p===3?s=this.cfg.controls.fingerCountSpeed.threeFingers:p===4?s=this.cfg.controls.fingerCountSpeed.fourFingers:p>=5&&(s=this.cfg.controls.fingerCountSpeed.fiveFingers),e.left){const m=e.left.gesture==="open"?this.cfg.emission.openHandRate:this.cfg.emission.closedHandRate;Math.random()<m&&this.particles.push(new Ih(e.left.position.x*this.canvas.width,e.left.position.y*this.canvas.height,t[Math.floor(Math.random()*t.length)],1,this.cfg))}if(e.right){const m=e.right.gesture==="open"?this.cfg.emission.openHandRate:this.cfg.emission.closedHandRate;Math.random()<m&&this.particles.push(new Ih(e.right.position.x*this.canvas.width,e.right.position.y*this.canvas.height,t[Math.floor(Math.random()*t.length)],1,this.cfg))}this.particles=this.particles.filter(g=>{if(g.update(f,i,s,this.cfg),g.alpha<.01)return!1;this.ctx.save(),this.ctx.globalAlpha=g.alpha;for(let m=0;m<this.cfg.glow.layers;m++){const y=g.size*(1+m*this.cfg.glow.expansion),v=this.ctx.createRadialGradient(g.x,g.y,0,g.x,g.y,y),b=(1-m*this.cfg.glow.layerFade)*g.alpha;v.addColorStop(0,g.color+ii(b*255)),v.addColorStop(.5,g.color+ii(b*150)),v.addColorStop(1,g.color+"00"),this.ctx.fillStyle=v,this.ctx.beginPath(),this.ctx.arc(g.x,g.y,y,0,Math.PI*2),this.ctx.fill()}return this.ctx.restore(),!0}),this.particles.length>this.cfg.limits.maxParticles&&(this.particles=this.particles.slice(-this.cfg.limits.maxParticles))}createExplosionParticles(e){const t=this.canvas.width/2,i=this.canvas.height/2;for(let s=0;s<this.cfg.explosion.particleCount;s++){const o=Math.random()*Math.PI*2,[c,u]=this.cfg.explosion.speedRange,h=c+Math.random()*(u-c),f=new Ih(t,i,e[Math.floor(Math.random()*e.length)],this.cfg.explosion.sizeMultiplier,this.cfg);f.vx=Math.cos(o)*h,f.vy=Math.sin(o)*h,this.particles.push(f)}this.ctx.fillStyle="#FFFFFFDD",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),setTimeout(()=>{this.ctx.fillStyle=e[0]+"80",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)},this.cfg.explosion.flashDelay),this.vibrationTimer=this.cfg.explosion.vibrationDuration,this.isExploding=!0,setTimeout(()=>{this.isExploding=!1},this.cfg.explosion.cooldown)}}const yf={trail:{fadeAlpha:.1,lineThickness:2},fingerCountSpeed:{oneFinger:.003,normalFingers:1,fiveFingers:2},fingerCountStrokeWidth:{oneFinger:1,twoFingers:4.5,normalFingers:1.5,fiveFingers:6},complexity:{baseSides:3,leftHandMultiplier:1,rightHandMultiplier:.5,maxSides:12,minSides:3},vibration:{flashDuration:.8,shakeAmountX:40,shakeAmountY:40},polygon:{baseSize:100,strokeWidth:2},layers:{count:5,sizeGrowth:.3,rotationOffset:.5,baseOpacity:.3,opacityFade:.05},bridge:{thickness:5,waveAmplitude:30},animation:{baseRotationMultiplier:.01}};class N0{constructor(e,t){U(this,"cfg",yf);U(this,"canvas");U(this,"ctx");U(this,"time",0);U(this,"vibrationTimer",0);this.canvas=e,this.ctx=t}setParams(e){this.cfg=Ci(yf,e)}render(e,t){var b,_,S,w;this.time+=.016*Sn(),this.ctx.fillStyle=`rgba(0, 0, 0, ${this.cfg.trail.fadeAlpha})`,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&(this.ctx.fillStyle="#FFFFFFCC",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.vibrationTimer=this.cfg.vibration.flashDuration),this.vibrationTimer>0&&(this.vibrationTimer-=.016,i=Math.max(0,this.vibrationTimer));let s=1,o=this.cfg.complexity.baseSides,c=1;if(e.left&&e.left.gesture==="open"){const E=e.left.fingerCount||2;E===1?(s=this.cfg.fingerCountSpeed.oneFinger,c=this.cfg.fingerCountStrokeWidth.oneFinger):E===2?(s=this.cfg.fingerCountSpeed.normalFingers,c=this.cfg.fingerCountStrokeWidth.twoFingers):E===5?(s=this.cfg.fingerCountSpeed.fiveFingers,c=this.cfg.fingerCountStrokeWidth.fiveFingers):(s=this.cfg.fingerCountSpeed.normalFingers,c=this.cfg.fingerCountStrokeWidth.normalFingers),o=Math.floor(this.cfg.complexity.baseSides+E*this.cfg.complexity.leftHandMultiplier)}if(e.left&&e.left.gesture==="pinch"&&(s=this.cfg.fingerCountSpeed.oneFinger,c=this.cfg.fingerCountStrokeWidth.oneFinger,o=Math.floor(this.cfg.complexity.baseSides+1*this.cfg.complexity.leftHandMultiplier)),e.right&&e.right.gesture==="open"){const E=e.right.fingerCount||2;let T,L;E===1?(T=this.cfg.fingerCountSpeed.oneFinger,L=this.cfg.fingerCountStrokeWidth.oneFinger):E===2?(T=this.cfg.fingerCountSpeed.normalFingers,L=this.cfg.fingerCountStrokeWidth.twoFingers):E===5?(T=this.cfg.fingerCountSpeed.fiveFingers,L=this.cfg.fingerCountStrokeWidth.fiveFingers):(T=this.cfg.fingerCountSpeed.normalFingers,L=this.cfg.fingerCountStrokeWidth.normalFingers),s*=T,c=Math.max(c,L),o+=Math.floor(E*this.cfg.complexity.rightHandMultiplier)}e.right&&e.right.gesture==="pinch"&&(s*=this.cfg.fingerCountSpeed.oneFinger,c=Math.max(c,this.cfg.fingerCountStrokeWidth.oneFinger),o+=Math.floor(1*this.cfg.complexity.rightHandMultiplier));const u=this.time*s*this.cfg.animation.baseRotationMultiplier,h=i>0?(Math.random()-.5)*this.cfg.vibration.shakeAmountX*i:0,f=i>0?(Math.random()-.5)*this.cfg.vibration.shakeAmountY*i:0;this.drawGestureTrails(e,t);const p=(b=e.left)!=null&&b.position.x?e.left.position.x*this.canvas.width+h:this.canvas.width/2,g=(_=e.left)!=null&&_.position.y?e.left.position.y*this.canvas.height+f:this.canvas.height/2,m=(S=e.right)!=null&&S.position.x?e.right.position.x*this.canvas.width+h:this.canvas.width/2+100,y=(w=e.right)!=null&&w.position.y?e.right.position.y*this.canvas.height+f:this.canvas.height/2,v=this.cfg.polygon.baseSize*(1+i);for(let E=0;E<this.cfg.layers.count;E++){const T=v*(1+E*this.cfg.layers.sizeGrowth),L=u+E*this.cfg.layers.rotationOffset;e.left&&e.left.gesture==="open"&&this.drawPolygon(p,g,Math.max(this.cfg.complexity.minSides,Math.min(this.cfg.complexity.maxSides,o+E)),T+E*30,L,t[E%t.length],this.cfg.layers.baseOpacity-E*this.cfg.layers.opacityFade,c),e.right&&e.right.gesture==="open"&&this.drawPolygon(m,y,Math.max(this.cfg.complexity.minSides,Math.min(this.cfg.complexity.maxSides,o+E)),T+E*30,-L,t[(E+2)%t.length],this.cfg.layers.baseOpacity-E*this.cfg.layers.opacityFade,c)}e.left&&e.right&&e.left.gesture==="open"&&e.right.gesture==="open"&&this.drawBridge(p,g,m,y,t,v,o)}drawGestureTrails(e,t){if(!e.gestureTrail||e.gestureTrail.length<2)return;const i=e.gestureTrail;for(let s=1;s<i.length;s++){const o=i[s-1],c=i[s],u=s/i.length,h=c.hand==="left"?t[0]:t[2];this.ctx.strokeStyle=h+ii(u*100),this.ctx.lineWidth=this.cfg.trail.lineThickness*u,this.ctx.lineCap="round",this.ctx.beginPath(),this.ctx.moveTo(o.x*this.canvas.width,o.y*this.canvas.height),this.ctx.lineTo(c.x*this.canvas.width,c.y*this.canvas.height),this.ctx.stroke()}}drawPolygon(e,t,i,s,o,c,u,h){this.ctx.save(),this.ctx.translate(e,t),this.ctx.rotate(o),this.ctx.beginPath();for(let p=0;p<=i;p++){const g=p/i*Math.PI*2,m=Math.cos(g)*s,y=Math.sin(g)*s;p===0?this.ctx.moveTo(m,y):this.ctx.lineTo(m,y)}this.ctx.closePath();const f=this.ctx.createRadialGradient(0,0,0,0,0,s);f.addColorStop(0,c+ii(u*255)),f.addColorStop(1,c+"00"),this.ctx.fillStyle=f,this.ctx.fill(),this.ctx.strokeStyle=c+ii(u*200),this.ctx.lineWidth=this.cfg.polygon.strokeWidth*h,this.ctx.stroke(),this.ctx.restore()}drawBridge(e,t,i,s,o,c,u){const h=this.ctx.createLinearGradient(e,t,i,s);o.forEach((f,p)=>{h.addColorStop(p/(o.length-1),f+"80")}),this.ctx.strokeStyle=h,this.ctx.lineWidth=this.cfg.bridge.thickness,this.ctx.lineCap="round",this.ctx.beginPath();for(let f=0;f<=u;f++){const p=f/u,g=e+(i-e)*p,m=t+(s-t)*p,y=Math.sin(p*Math.PI*4+this.time*2)*this.cfg.bridge.waveAmplitude,v=-(s-t)/Math.hypot(i-e,s-t),b=(i-e)/Math.hypot(i-e,s-t);f===0?this.ctx.moveTo(g+v*y,m+b*y):this.ctx.lineTo(g+v*y,m+b*y)}this.ctx.stroke()}}const Sf={fingerCountSpeed:{oneFinger:.05,normalFingers:1,fiveFingers:1.5,maxSpeed:2},wave:{baseAmplitude:50,maxAmplitude:250,baseFrequency:.01,maxFrequency:.05,segments:200,lineThickness:3},fingerAmplitude:{oneFingerMultiplier:.1,twoFingersMultiplier:.6,threeFingersMultiplier:1.2,fourFingersMultiplier:2.5,fiveFingersMultiplier:4,normalFingersMultiplier:.3},gesture:{leftOpenHandBoost:3,rightOpenHandBoost:1.5,leftFistAmplitude:20,rightFistReduction:.5,pinchBaseFrequency:.005,pinchLeftMultiplier:.1,pinchRightMultiplier:.05,pinchLeftYOffsetMultiplier:-150,pinchRightYOffsetMultiplier:-150},velocity:{intensityMultiplier:2},hold:{durationThreshold:2,amplitudeBoost:2},distance:{scaleMultiplier:2},waveCount:{active:7,idle:3},layers:{primarySpeed:2,secondarySpeed:3,tertiarySpeed:1,secondaryAmplitude:.5,tertiaryAmplitude:.3},handInfluence:{strength:.5,radius:200},focalPoint:{baseSize:20,pulseSpeed:5,pulseAmount:.1,glowLayers:3},visual:{backgroundTint:"20",clapFlashOpacity:"30",fillOpacity:50}};class hy{constructor(e,t){U(this,"cfg",Sf);U(this,"canvas");U(this,"ctx");U(this,"time",0);U(this,"bgGradient",null);U(this,"needsGradientUpdate",!0);this.canvas=e,this.ctx=t}setParams(e){this.cfg=Ci(Sf,e)}render(e,t){var v,b,_,S;this.time+=.016*Sn(),this.time>1e3&&(this.time=this.time%1e3),this.needsGradientUpdate&&(this.bgGradient=this.ctx.createLinearGradient(0,0,0,this.canvas.height),this.bgGradient.addColorStop(0,"#000000"),this.bgGradient.addColorStop(1,t[0]+this.cfg.visual.backgroundTint),this.needsGradientUpdate=!1),this.ctx.fillStyle=this.bgGradient,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=this.cfg.wave.baseAmplitude,s=this.cfg.wave.baseFrequency,o=1,c=1,u=1,h=0;if(e.left){Math.max(0,Math.min(1,e.left.position.x||.5)),Math.max(0,Math.min(1,e.left.position.y||.5));const w=e.left.velocity||0,E=Math.max(0,Math.min(w,1));c*=1+E*this.cfg.velocity.intensityMultiplier;let T=e.left.fingerCount||0;e.left.gesture==="pinch"&&(T=1),T===1?(u=this.cfg.fingerCountSpeed.oneFinger,i*=this.cfg.fingerAmplitude.oneFingerMultiplier):T===2?(u=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.twoFingersMultiplier):T===3?(u=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.threeFingersMultiplier):T===4?(u=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.fourFingersMultiplier):T>=5&&(u=this.cfg.fingerCountSpeed.fiveFingers,i*=this.cfg.fingerAmplitude.fiveFingersMultiplier),(e.left.holdDuration||0)>this.cfg.hold.durationThreshold&&(i*=this.cfg.hold.amplitudeBoost),e.left.gesture==="open"?i*=this.cfg.gesture.leftOpenHandBoost*c:e.left.gesture==="fist"?i=this.cfg.gesture.leftFistAmplitude:e.left.gesture==="pinch"&&(s=this.cfg.gesture.pinchBaseFrequency+(e.left.pinchDistance||0)*this.cfg.gesture.pinchLeftMultiplier,h=(e.left.pinchDistance||0)*this.cfg.gesture.pinchLeftYOffsetMultiplier)}if(e.right){Math.max(0,Math.min(1,e.right.position.x||.5)),Math.max(0,Math.min(1,e.right.position.y||.5));const w=e.right.velocity||0,E=Math.max(0,Math.min(w,1));c*=1+E*this.cfg.velocity.intensityMultiplier;let T=e.right.fingerCount||0;e.right.gesture==="pinch"&&(T=1);let L=1;T===1?(L=this.cfg.fingerCountSpeed.oneFinger,i*=this.cfg.fingerAmplitude.oneFingerMultiplier):T===2?(L=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.twoFingersMultiplier):T===3?(L=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.threeFingersMultiplier):T===4?(L=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.fourFingersMultiplier):T>=5&&(L=this.cfg.fingerCountSpeed.fiveFingers,i*=this.cfg.fingerAmplitude.fiveFingersMultiplier),u*=L,(e.right.holdDuration||0)>this.cfg.hold.durationThreshold&&(i*=this.cfg.hold.amplitudeBoost),e.right.gesture==="open"?i*=this.cfg.gesture.rightOpenHandBoost*c:e.right.gesture==="fist"?i*=this.cfg.gesture.rightFistReduction:e.right.gesture==="pinch"&&(s+=(e.right.pinchDistance||0)*this.cfg.gesture.pinchRightMultiplier,h=(e.right.pinchDistance||0)*this.cfg.gesture.pinchRightYOffsetMultiplier)}c=Math.min(c,3),u=Math.min(u,this.cfg.fingerCountSpeed.maxSpeed),i=Math.min(i,this.cfg.wave.maxAmplitude),s=Math.min(s,this.cfg.wave.maxFrequency),isFinite(i)||(i=this.cfg.wave.baseAmplitude),isFinite(s)||(s=this.cfg.wave.baseFrequency),isFinite(u)||(u=1),e.distanceBetweenHands&&(o=.5+e.distanceBetweenHands*this.cfg.distance.scaleMultiplier);const f=e.left||e.right?this.cfg.waveCount.active:this.cfg.waveCount.idle,p=((v=e.left)==null?void 0:v.fingerCount)||0,g=((b=e.right)==null?void 0:b.fingerCount)||0,m=Math.max(p,g);let y=1;m>=4&&(y=.6);for(let w=0;w<f;w++){const E=this.canvas.height/(f+1)*(w+1)+h,T=w/f*Math.PI*2,L=((_=e.left)==null?void 0:_.position.x)??0,A=((S=e.right)==null?void 0:S.position.x)??1,I=Math.max(0,Math.min(1,L))*this.canvas.width,C=Math.max(0,Math.min(1,A))*this.canvas.width;this.drawWave(E,i*o,s,this.time*u+T,t[w%t.length],I,C,w/f,y)}if(e.left){const w=Math.max(0,Math.min(1,e.left.position.x||.5)),E=Math.max(0,Math.min(1,e.left.position.y||.5));this.drawFocalPoint(w*this.canvas.width,E*this.canvas.height,t[0],o,i)}if(e.right){const w=Math.max(0,Math.min(1,e.right.position.x||.5)),E=Math.max(0,Math.min(1,e.right.position.y||.5));this.drawFocalPoint(w*this.canvas.width,E*this.canvas.height,t[2%t.length],o,i)}}drawWave(e,t,i,s,o,c,u,h,f){this.ctx.beginPath();const p=Math.floor(this.cfg.wave.segments*f);t=Math.min(t,150);for(let v=0;v<=p;v++){const b=v/p*this.canvas.width,_=Math.sin(b*i+s*this.cfg.layers.primarySpeed)*t,S=Math.sin(b*i*2+s*this.cfg.layers.secondarySpeed)*(t*this.cfg.layers.secondaryAmplitude),w=Math.sin(b*i*.5+s*this.cfg.layers.tertiarySpeed)*(t*this.cfg.layers.tertiaryAmplitude);let E=0;const T=Math.abs(b-c),L=Math.abs(b-u),A=-T/this.cfg.handInfluence.radius,I=-L/this.cfg.handInfluence.radius;A>-10&&(E+=t*this.cfg.handInfluence.strength*Math.exp(A)),I>-10&&(E+=t*this.cfg.handInfluence.strength*Math.exp(I)),E=Math.min(E,80);let C=e+_+S+w+E;C=Math.max(-50,Math.min(this.canvas.height+50,C)),isFinite(C)&&(v===0?this.ctx.moveTo(b,C):this.ctx.lineTo(b,C))}const g=Math.max(0,Math.min(1,h)),m=this.ctx.createLinearGradient(0,0,this.canvas.width,0);m.addColorStop(0,o+ii(g*100)),m.addColorStop(.5,o+ii(g*255)),m.addColorStop(1,o+ii(g*100)),this.ctx.strokeStyle=m,this.ctx.lineWidth=this.cfg.wave.lineThickness,this.ctx.stroke(),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.closePath();const y=this.ctx.createLinearGradient(0,e,0,this.canvas.height);y.addColorStop(0,o+ii(g*this.cfg.visual.fillOpacity)),y.addColorStop(1,o+"00"),this.ctx.fillStyle=y,this.ctx.fill()}drawFocalPoint(e,t,i,s,o){const c=this.cfg.focalPoint.baseSize*s+Math.sin(this.time*this.cfg.focalPoint.pulseSpeed)*o*this.cfg.focalPoint.pulseAmount,u=Math.max(.1,c);for(let h=0;h<this.cfg.focalPoint.glowLayers;h++){const f=this.ctx.createRadialGradient(e,t,0,e,t,u*(h+1));f.addColorStop(0,i+"AA"),f.addColorStop(1,i+"00"),this.ctx.fillStyle=f,this.ctx.beginPath(),this.ctx.arc(e,t,u*(h+1),0,Math.PI*2),this.ctx.fill()}}}class fy{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"time",0);U(this,"nodes",[]);U(this,"glitchBlocks",[]);U(this,"pixelSize",20);U(this,"vibrationTimer",0);U(this,"glitchIntensity",0);U(this,"isExploding",!1);this.canvas=e,this.ctx=t;const i=40;for(let s=0;s<i;s++){const o=Math.random()*e.width,c=Math.random()*e.height,u={x:o,y:c,targetX:o,targetY:c,vx:0,vy:0,size:4+Math.random()*8,connections:[],waveform:Array.from({length:50},()=>Math.random()*2-1),attractedToHand:null};this.nodes.push(u)}this.updateConnections()}updateConnections(){this.nodes.forEach(e=>e.connections=[]),this.nodes.forEach((e,t)=>{this.nodes.forEach((i,s)=>{t!==s&&Math.hypot(e.x-i.x,e.y-i.y)<200&&e.connections.length<4&&e.connections.push(s)})})}render(e,t){this.time+=.016*Sn(),this.ctx.fillStyle="rgba(0, 0, 0, 0.1)",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&!this.isExploding&&(this.vibrationTimer=1,this.glitchIntensity=1,this.createGlitchExplosion(t),this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.016,i=Math.max(0,this.vibrationTimer)),this.glitchIntensity>0&&(this.glitchIntensity-=.01);let s=1,o=!1,c=0,u=0,h=0,f=0,p=!1,g=!1,m=2,y=2;if(e.left&&e.left.gesture==="open"){o=!0,p=!0;const v=e.left.fingerCount||2;m=v,v===1?s=.01:v===5?s=2:s=1,c=e.left.position.x*this.canvas.width,u=e.left.position.y*this.canvas.height}if(e.left&&e.left.gesture==="pinch"&&(o=!0,p=!0,m=1,s=.01,c=e.left.position.x*this.canvas.width,u=e.left.position.y*this.canvas.height),e.right&&e.right.gesture==="open"){o=!0,g=!0;const v=e.right.fingerCount||2;y=v;let b;v===1?b=.01:v===5?b=2:b=1,s*=b,h=e.right.position.x*this.canvas.width,f=e.right.position.y*this.canvas.height}e.right&&e.right.gesture==="pinch"&&(o=!0,g=!0,y=1,s*=.01,h=e.right.position.x*this.canvas.width,f=e.right.position.y*this.canvas.height),this.nodes.forEach((v,b)=>{if(o){if(p&&g){const w=Math.hypot(v.x-c,v.y-u),E=Math.hypot(v.x-h,v.y-f);w<E?(v.attractedToHand="left",v.targetX=c+Math.cos(b*.5+this.time*s)*100,v.targetY=u+Math.sin(b*.5+this.time*s)*100):(v.attractedToHand="right",v.targetX=h+Math.cos(b*.5+this.time*s)*100,v.targetY=f+Math.sin(b*.5+this.time*s)*100)}else if(p){v.attractedToHand="left";const w=b/this.nodes.length*Math.PI*2+this.time*s,E=50+b%3*60;v.targetX=c+Math.cos(w)*E,v.targetY=u+Math.sin(w)*E}else if(g){v.attractedToHand="right";const w=b/this.nodes.length*Math.PI*2+this.time*s,E=50+b%3*60;v.targetX=h+Math.cos(w)*E,v.targetY=f+Math.sin(w)*E}const _=v.targetX-v.x,S=v.targetY-v.y;v.vx+=_*.05*s,v.vy+=S*.05*s}else{v.targetX+=(Math.random()-.5)*2,v.targetY+=(Math.random()-.5)*2;const _=v.targetX-v.x,S=v.targetY-v.y;v.vx+=_*.01,v.vy+=S*.01}i>0&&(v.vx+=(Math.random()-.5)*i*40,v.vy+=(Math.random()-.5)*i*40),v.vx*=.85,v.vy*=.85,v.x+=v.vx,v.y+=v.vy,v.x<0&&(v.x=this.canvas.width),v.x>this.canvas.width&&(v.x=0),v.y<0&&(v.y=this.canvas.height),v.y>this.canvas.height&&(v.y=0),v.waveform.shift(),v.waveform.push(Math.sin(this.time*s*2+v.x*.01)*(o?2:.5))}),this.time%.5<.016&&this.updateConnections(),this.drawNodeConnections(t,i,p,g,c,u,h,f),this.drawNodes(t,i),this.drawWaveforms(t,s),this.drawHandIndicators(e,t,m,y),this.drawGlitchBlocks(t),this.glitchIntensity>.3&&this.drawScreenGlitch(),o&&Math.random()<.03*s&&this.spawnGlitchBlock(t)}drawNodeConnections(e,t,i,s,o,c,u,h){this.nodes.forEach((f,p)=>{if(f.attractedToHand==="left"&&i){this.ctx.beginPath(),this.ctx.moveTo(f.x,f.y),this.ctx.lineTo(o,c);const g=this.ctx.createLinearGradient(f.x,f.y,o,c);g.addColorStop(0,e[0]+"80"),g.addColorStop(1,e[1]+"FF"),this.ctx.strokeStyle=g,this.ctx.lineWidth=2+t*3,this.ctx.stroke()}if(f.attractedToHand==="right"&&s){this.ctx.beginPath(),this.ctx.moveTo(f.x,f.y),this.ctx.lineTo(u,h);const g=this.ctx.createLinearGradient(f.x,f.y,u,h);g.addColorStop(0,e[2]+"80"),g.addColorStop(1,e[3]+"FF"),this.ctx.strokeStyle=g,this.ctx.lineWidth=2+t*3,this.ctx.stroke()}f.connections.forEach(g=>{const m=this.nodes[g];if(!m)return;this.ctx.beginPath(),this.ctx.moveTo(f.x,f.y),this.ctx.lineTo(m.x,m.y);const y=Math.floor(p/this.nodes.length*e.length);this.ctx.strokeStyle=e[y]+"40",this.ctx.lineWidth=1+t*2,this.ctx.stroke()})})}drawNodes(e,t){this.nodes.forEach((i,s)=>{const o=Math.floor(s/this.nodes.length*e.length),c=i.size*(1+t*.5),u=this.ctx.createRadialGradient(i.x,i.y,0,i.x,i.y,c);u.addColorStop(0,e[o]+"FF"),u.addColorStop(.5,e[(o+1)%e.length]+"AA"),u.addColorStop(1,e[o]+"00"),this.ctx.fillStyle=u,this.ctx.beginPath(),this.ctx.arc(i.x,i.y,c,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="#FFFFFF80",this.ctx.beginPath(),this.ctx.arc(i.x,i.y,c*.3,0,Math.PI*2),this.ctx.fill()})}drawWaveforms(e,t){this.nodes.forEach((i,s)=>{const o=Math.floor(s/this.nodes.length*e.length);this.ctx.beginPath(),this.ctx.strokeStyle=e[o]+"60",this.ctx.lineWidth=2;for(let c=0;c<i.waveform.length-1;c++){const u=i.x+c-i.waveform.length/2,h=i.y+i.waveform[c]*20;c===0?this.ctx.moveTo(u,h):this.ctx.lineTo(u,h)}this.ctx.stroke()})}drawHandIndicators(e,t,i,s){if(e.left&&e.left.gesture==="open"){const o=e.left.position.x*this.canvas.width,c=e.left.position.y*this.canvas.height,u=30+Math.sin(this.time*3)*10;this.ctx.strokeStyle=t[0]+"AA",this.ctx.lineWidth=3,this.ctx.beginPath(),this.ctx.arc(o,c,u,0,Math.PI*2),this.ctx.stroke(),this.ctx.fillStyle=t[0],this.ctx.font="20px monospace",this.ctx.fillText(`${i}`,o-10,c+5)}if(e.right&&e.right.gesture==="open"){const o=e.right.position.x*this.canvas.width,c=e.right.position.y*this.canvas.height,u=30+Math.sin(this.time*3)*10;this.ctx.strokeStyle=t[2]+"AA",this.ctx.lineWidth=3,this.ctx.beginPath(),this.ctx.arc(o,c,u,0,Math.PI*2),this.ctx.stroke(),this.ctx.fillStyle=t[2],this.ctx.font="20px monospace",this.ctx.fillText(`${s}`,o-10,c+5)}}drawGlitchBlocks(e){this.glitchBlocks=this.glitchBlocks.filter(t=>(t.life-=.016,t.life>0?(this.ctx.fillStyle=t.color+ii(t.life*255),this.ctx.fillRect(t.x,t.y,t.width,t.height),!0):!1))}spawnGlitchBlock(e){this.glitchBlocks.push({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height,width:20+Math.random()*100,height:10+Math.random()*50,color:e[Math.floor(Math.random()*e.length)],life:.5+Math.random()*.5})}createGlitchExplosion(e){for(let t=0;t<50;t++)this.spawnGlitchBlock(e);this.ctx.fillStyle="#FFFFFF60",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.nodes.forEach(t=>{t.vx=(Math.random()-.5)*50,t.vy=(Math.random()-.5)*50})}drawScreenGlitch(){const e=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height),t=Math.floor(Math.random()*20)-10;this.ctx.putImageData(e,t,0);for(let i=0;i<5;i++){const s=Math.random()*this.canvas.height,o=5+Math.random()*20,c=this.ctx.getImageData(0,s,this.canvas.width,o),u=(Math.random()-.5)*100;this.ctx.putImageData(c,u,s)}}}class dy{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"fragments",[]);U(this,"hearts",[]);U(this,"glitchIntensity",0);U(this,"lastHandsTouching",!1);U(this,"handsTouchingTime",0);U(this,"gracePeriod",0);this.canvas=e,this.ctx=t}render(e,t){this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);const i=this.checkHandsTouching(e);i?(this.handsTouchingTime+=1,this.gracePeriod=30,this.spawnHearts(e)):this.gracePeriod>0?(this.gracePeriod-=1,this.handsTouchingTime+=1):this.handsTouchingTime=0,this.lastHandsTouching=i,this.updateHearts(),this.renderHearts(),this.glitchIntensity*=.95,e.left&&e.left.landmarks&&this.renderHandFromLandmarks(e.left.landmarks,"left"),e.right&&e.right.landmarks&&this.renderHandFromLandmarks(e.right.landmarks,"right"),this.applyNoiseOverlay(),(this.glitchIntensity>.1||Math.random()<.05)&&this.applyGlitchEffect()}renderHandFromLandmarks(e,t){const s=this.canvas.width/2,o=this.canvas.height/2,c=e.map(p=>({x:s+(p.x*this.canvas.width-s)*1.8,y:o+(p.y*this.canvas.height-o)*1.8,z:p.z})),u=c[0],h=180*1.8,f={x:u.x,y:u.y+h,z:u.z};this.fillHandWithDots(c,u,f),this.drawHandSkeleton(c),this.drawTechnicalMarkers(u.x,u.y)}fillHandWithDots(e,t,i){const c=e.map(m=>m.x),u=e.map(m=>m.y),h=Math.min(...c,i.x)-50,f=Math.max(...c,i.x)+50,p=Math.min(...u)-50,g=Math.max(...u,i.y)+50;for(let m=p;m<g;m+=7)for(let y=h;y<f;y+=7){const v=this.getDistanceToHandSkeleton(y,m,e,t,i);if(v.inside){const S=1-v.distance/45,w=Math.pow(S,1.5),E=v.zDepth,T=w*(.7+E*.3);if(T<.15)continue;const L=Math.floor(T*255),A=Math.max(.3,Math.min(1,T*1.2)),I=(Math.random()-.5)*8*this.glitchIntensity,C=(Math.random()-.5)*8*this.glitchIntensity,F=.8+Math.random()*.2;this.ctx.fillStyle=`rgba(${L}, ${L}, ${L}, ${A*F})`,this.ctx.beginPath(),this.ctx.arc(y+I,m+C,1.5,0,Math.PI*2),this.ctx.fill(),T>.8&&Math.random()<.15&&(this.ctx.fillStyle=`rgba(255, 255, 255, ${A*1.3})`,this.ctx.beginPath(),this.ctx.arc(y+I,m+C,1.5*1.2,0,Math.PI*2),this.ctx.fill())}}}getDistanceToHandSkeleton(e,t,i,s,o){const c=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[0,9],[9,10],[10,11],[11,12],[0,13],[13,14],[14,15],[15,16],[0,17],[17,18],[18,19],[19,20],[5,9],[9,13],[13,17]];let u=1/0,h=0;for(const[m,y]of c){const v=i[m],b=i[y],_=this.distanceToSegment(e,t,v.x,v.y,b.x,b.y);u=Math.min(u,_),h=(v.z+b.z)/2}const f=this.distanceToSegment(e,t,s.x,s.y,o.x,o.y);return u=Math.min(u,f),h=(s.z+o.z)/2,{inside:u<45,distance:u,zDepth:h}}distanceToSegment(e,t,i,s,o,c){const u=o-i,h=c-s,f=u*u+h*h;if(f===0)return Math.sqrt((e-i)*(e-i)+(t-s)*(t-s));let p=((e-i)*u+(t-s)*h)/f;p=Math.max(0,Math.min(1,p));const g=i+p*u,m=s+p*h;return Math.sqrt((e-g)*(e-g)+(t-m)*(t-m))}drawHandSkeleton(e){this.ctx.strokeStyle="rgba(255, 255, 255, 0.3)",this.ctx.lineWidth=1,this.ctx.setLineDash([4,4]);const t=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[0,9],[9,10],[10,11],[11,12],[0,13],[13,14],[14,15],[15,16],[0,17],[17,18],[18,19],[19,20],[5,9],[9,13],[13,17],[17,5]];this.ctx.beginPath();for(const[i,s]of t){const o=e[i],c=e[s],u=(Math.random()-.5)*5*this.glitchIntensity,h=(Math.random()-.5)*5*this.glitchIntensity,f=(Math.random()-.5)*5*this.glitchIntensity,p=(Math.random()-.5)*5*this.glitchIntensity;this.ctx.moveTo(o.x+u,o.y+h),this.ctx.lineTo(c.x+f,c.y+p)}this.ctx.stroke(),this.ctx.setLineDash([]),this.ctx.fillStyle="rgba(255, 255, 255, 0.7)",e.forEach(i=>{this.ctx.beginPath(),this.ctx.arc(i.x,i.y,2,0,Math.PI*2),this.ctx.fill()})}drawTechnicalMarkers(e,t){this.ctx.strokeStyle="rgba(255, 255, 255, 0.5)",this.ctx.lineWidth=1;const i=15,s=80;[[e-s,t-s],[e+s,t-s],[e-s,t+s],[e+s,t+s]].forEach(([u,h])=>{this.ctx.beginPath(),this.ctx.moveTo(u,h),this.ctx.lineTo(u+(u<e?i:-i),h),this.ctx.moveTo(u,h),this.ctx.lineTo(u,h+(h<t?i:-i)),this.ctx.stroke()}),this.ctx.strokeStyle="rgba(255, 255, 255, 0.7)",this.ctx.lineWidth=1.5,this.ctx.beginPath(),this.ctx.moveTo(e-12,t),this.ctx.lineTo(e+12,t),this.ctx.moveTo(e,t-12),this.ctx.lineTo(e,t+12),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.arc(e,t,3,0,Math.PI*2),this.ctx.stroke(),this.ctx.fillStyle="rgba(255, 255, 255, 0.8)",this.ctx.font="11px monospace";const c=`[${Math.floor(e)},${Math.floor(t)}]`;this.ctx.fillText(c,e+s+15,t),this.ctx.fillStyle="rgba(255, 255, 255, 0.6)",this.ctx.font="9px monospace",this.ctx.fillText("TRACKING",e+s+15,t+15)}applyNoiseOverlay(){const e=.03+this.glitchIntensity*.04,t=2,i=.15;for(let s=0;s<this.canvas.width;s+=t*2)for(let o=0;o<this.canvas.height;o+=t*2)if(Math.random()<i){const c=Math.floor(Math.random()*255),u=Math.random()*e;this.ctx.fillStyle=`rgba(${c}, ${c}, ${c}, ${u})`,this.ctx.fillRect(s,o,t,t)}}applyGlitchEffect(){const e=Math.max(this.glitchIntensity,Math.random()*.3),t=15+Math.random()*15,i=Math.floor(this.canvas.height/t);for(let s=0;s<i;s++)if(Math.random()<e*.3){const o=s*t,c=(Math.random()-.5)*60*e;try{const u=this.ctx.getImageData(0,o,this.canvas.width,Math.min(t,this.canvas.height-o));this.ctx.putImageData(u,c,o)}catch{}}if(Math.random()<e*.5)for(let s=0;s<8;s++){const o=Math.random()*this.canvas.width,c=Math.random()*this.canvas.height,u=Math.random()*40+10,h=Math.random()*15+5;this.ctx.fillStyle="rgba(255, 255, 255, 0.3)",this.ctx.fillRect(o,c,u,h)}}checkHandsTouching(e){if(!e.left||!e.right||!e.left.landmarks||!e.right.landmarks)return!1;const t=[e.left.landmarks[0],e.left.landmarks[8],e.left.landmarks[12],e.left.landmarks[4]],i=[e.right.landmarks[0],e.right.landmarks[8],e.right.landmarks[12],e.right.landmarks[4]];for(const s of t)for(const o of i){const c=Math.sqrt(Math.pow(s.x-o.x,2)+Math.pow(s.y-o.y,2));if(c<.08)return console.log("✋ Hands touching! Distance:",c.toFixed(3)),!0}return!1}spawnHearts(e){if(!(Math.random()>.8)){console.log("Spawning hearts! Current count:",this.hearts.length);for(let t=0;t<3;t++){let s=!1;for(let o=0;o<20&&!s;o++){const c=Math.random()*this.canvas.width,u=Math.random()*this.canvas.height,h=20+Math.random()*30,f=h*1.5;let p=!1;for(const g of this.hearts){const m=c-g.x,y=u-g.y;if(Math.sqrt(m*m+y*y)<f+g.size*.75){p=!0;break}}p||(this.hearts.push({x:c,y:u,vx:0,vy:0,size:h,life:1,rotation:0,rotationSpeed:0}),s=!0,console.log("Heart placed at:",c,u,"size:",h))}}}}updateHearts(){this.hearts=this.hearts.filter(e=>(e.life-=.008,e.life>0))}renderHearts(){const e=Ko();this.hearts.forEach(t=>{this.ctx.save(),this.ctx.translate(t.x,t.y);const s=e*2.5%1;let o=1;s<.15?o=1+Math.sin(s/.15*Math.PI)*.2:s>=.2&&s<.3?o=1+Math.sin((s-.2)/.1*Math.PI)*.15:o=1,this.ctx.scale(o,o);const c=Math.max(2,t.size/8),u=t.life*.9,h=[[0,1,1,0,0,1,1,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,0],[0,0,1,1,1,1,0,0],[0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0]],f=-4*c,p=-4*c;for(let g=0;g<8;g++)for(let m=0;m<8;m++)h[g][m]===1&&(this.ctx.fillStyle=`rgba(255, 255, 255, ${u})`,this.ctx.fillRect(f+m*c,p+g*c,c,c),this.ctx.strokeStyle=`rgba(255, 255, 255, ${u*.3})`,this.ctx.lineWidth=.5,this.ctx.strokeRect(f+m*c,p+g*c,c,c));this.ctx.restore()})}}class py{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"rectangles",[]);U(this,"baseWidth",1920);U(this,"baseHeight",1080);U(this,"time",0);U(this,"gridStructure",[]);this.canvas=e,this.ctx=t,this.createVariedLayout()}createVariedLayout(){[{x:0,y:0,w:480,h:360},{x:480,y:0,w:320,h:180},{x:800,y:0,w:320,h:180},{x:1120,y:0,w:400,h:180},{x:1520,y:0,w:400,h:180},{x:480,y:180,w:240,h:180},{x:720,y:180,w:240,h:180},{x:960,y:180,w:160,h:180},{x:1120,y:180,w:240,h:180},{x:1360,y:180,w:280,h:180},{x:1640,y:180,w:280,h:180},{x:0,y:360,w:120,h:360},{x:120,y:360,w:120,h:360},{x:240,y:360,w:120,h:360},{x:360,y:360,w:120,h:360},{x:480,y:360,w:320,h:360},{x:800,y:360,w:320,h:360},{x:1120,y:360,w:200,h:180},{x:1320,y:360,w:200,h:180},{x:1520,y:360,w:200,h:180},{x:1720,y:360,w:200,h:180},{x:1120,y:540,w:160,h:180},{x:1280,y:540,w:160,h:180},{x:1440,y:540,w:240,h:180},{x:1680,y:540,w:240,h:180},{x:0,y:720,w:160,h:360},{x:160,y:720,w:160,h:360},{x:320,y:720,w:160,h:360},{x:480,y:720,w:240,h:360},{x:720,y:720,w:240,h:360},{x:960,y:720,w:160,h:360},{x:1120,y:720,w:400,h:360},{x:1520,y:720,w:400,h:360}].forEach((t,i)=>{let s;const o=i%3;o===0?s="vertical":o===1?s="horizontal":s="vertical-reverse",this.rectangles.push({id:i,baseX:t.x,baseY:t.y,baseW:t.w,baseH:t.h,currentX:t.x,currentY:t.y,currentW:t.w,currentH:t.h,gradientDirection:s,rotation:0,borderRadius:0,opacity:1}),this.gridStructure.push({x:t.x,y:t.y,w:t.w,h:t.h,targetW:t.w,targetH:t.h})})}render(e,t,i,s){this.time+=.016*Sn();const o=s==="contrast",c=s==="grayscale";let u=t[0]||"#1a00ff",h=t[1]||"#8b5cf6",f=t[2]||"#d9d9d9";if(c&&(u="#333333",h="#888888",f="#ffffff"),o)this.ctx.fillStyle="#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);else{const T=this.ctx.createLinearGradient(0,0,0,this.canvas.height);c?(T.addColorStop(0,"#ffffff"),T.addColorStop(1,"#cccccc")):(T.addColorStop(0,f),T.addColorStop(1,u)),this.ctx.fillStyle=T,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}let p=.1,g="idle",m=0,y=1;const v=i?i.bass:0;i&&i.mid;const b=i?i.high:0,_=i?i.beat:!1;if(e.left||e.right){const T=[];e.left&&T.push(e.left),e.right&&T.push(e.right);let L=0,A=!1;T.forEach(I=>{I.gesture==="pinch"&&(A=!0);const C=I.fingerCount!==void 0?I.fingerCount:5;L=Math.max(L,C)}),A&&(L=0),A?(g="pinch",p=.05,m=20):L<=2?(g="2fingers",p=.2,m=20):L<=4?(g="morph",p=.1,m=100):(g="chaos",p=.4,m=0),this.rectangles.forEach((I,C)=>{this.gridStructure[C].targetW=I.baseW,this.gridStructure[C].targetH=I.baseH}),T.forEach(I=>{var z,D;const C=(((z=I.position)==null?void 0:z.x)||.5)*this.baseWidth,F=(((D=I.position)==null?void 0:D.y)||.5)*this.baseHeight;this.rectangles.forEach((H,ie)=>{const J=H.baseX+H.baseW/2,G=H.baseY+H.baseH/2,$=C-J,K=F-G,W=Math.sqrt($*$+K*K);if(g==="pinch"){const ne=1+Math.sin(W*.05-this.time*5)*.2*(1-Math.min(W/800,1));this.gridStructure[ie].targetW=H.baseW*ne,this.gridStructure[ie].targetH=H.baseH*ne}else if(g==="2fingers"){const ne=1+Math.sin(W*.05-this.time*5)*.2*(1-Math.min(W/800,1));this.gridStructure[ie].targetW=H.baseW*ne,this.gridStructure[ie].targetH=H.baseH*ne}else if(g==="morph"){if(W<500){const re=(1-W/500)*.5;this.gridStructure[ie].targetW=H.baseW*(1+re),this.gridStructure[ie].targetH=H.baseH*(1+re)}}else if(g==="chaos"&&W<600){const re=Math.random()*.5;this.gridStructure[ie].targetW=H.baseW*(.8+re),this.gridStructure[ie].targetH=H.baseH*(.8+re)}})})}else this.rectangles.forEach((T,L)=>{this.gridStructure[L].targetW=T.baseW,this.gridStructure[L].targetH=T.baseH}),i&&_&&(m=10);i&&(this.gridStructure.forEach(T=>{T.targetW*=1+v*.2,T.targetH*=1+v*.2}),g==="chaos"&&(y=.5+b*.5)),this.gridStructure.forEach((T,L)=>{T.w+=(T.targetW-T.w)*p,T.h+=(T.targetH-T.h)*p}),this.normalizeGridPerfectly(),this.rectangles.forEach((T,L)=>{T.currentX=this.gridStructure[L].x,T.currentY=this.gridStructure[L].y,T.currentW=this.gridStructure[L].w,T.currentH=this.gridStructure[L].h,T.borderRadius+=(m-T.borderRadius)*.1,g==="chaos"?T.rotation+=Math.random()*.2-.1:T.rotation+=(0-T.rotation)*.1,T.opacity+=(y-T.opacity)*.1});const S=this.canvas.width/this.baseWidth,w=this.canvas.height/this.baseHeight,E=[u,h,f];this.rectangles.forEach((T,L)=>{this.drawRectangle(T,S,w,E,o,L,i)})}normalizeGridPerfectly(){const e=new Map;this.rectangles.forEach((c,u)=>{const h=Math.round(c.baseY/10)*10;e.has(h)||e.set(h,[]),e.get(h).push(u)});const t=Array.from(e.entries()).sort((c,u)=>c[0]-u[0]).map(c=>c[1]);t.forEach(c=>{c.sort((p,g)=>this.rectangles[p].baseX-this.rectangles[g].baseX);const u=c.reduce((p,g)=>p+this.gridStructure[g].w,0),h=this.baseWidth/u;let f=0;c.forEach(p=>{this.gridStructure[p].w*=h,this.gridStructure[p].x=f,f+=this.gridStructure[p].w})});let i=0;t.forEach(c=>{const u=Math.max(...c.map(h=>this.gridStructure[h].h));c.forEach(h=>{this.gridStructure[h].y=i,this.gridStructure[h].h=u}),i+=u});const s=i,o=this.baseHeight/s;i=0,t.forEach(c=>{const u=this.gridStructure[c[0]].h*o;c.forEach(h=>{this.gridStructure[h].y=i,this.gridStructure[h].h=u}),i+=u})}drawRectangle(e,t,i,s,o,c,u){this.ctx.save();const h=e.currentX*t,f=e.currentY*i,p=e.currentW*t,g=e.currentH*i;if(Math.abs(e.rotation)>.01){const E=h+p/2,T=f+g/2;this.ctx.translate(E,T),this.ctx.rotate(e.rotation),this.ctx.translate(-E,-T)}this.ctx.globalAlpha=e.opacity;let m;const y=s[0],v=s[1],b=s[2],_=o||c%2===0?y:v,S=o?"#000000":b,w=u!=null&&u.beat&&Math.random()>.7?"#FFFFFF":null;e.gradientDirection==="vertical"?(m=this.ctx.createLinearGradient(h,f,h,f+g),m.addColorStop(0,w||S),m.addColorStop(1,_)):e.gradientDirection==="vertical-reverse"?(m=this.ctx.createLinearGradient(h,f,h,f+g),m.addColorStop(0,_),m.addColorStop(1,w||S)):(m=this.ctx.createLinearGradient(h,f,h+p,f),m.addColorStop(0,w||S),m.addColorStop(1,_)),this.ctx.fillStyle=m,e.borderRadius>0?(this.ctx.beginPath(),this.ctx.roundRect(h,f,p,g,e.borderRadius),this.ctx.fill()):this.ctx.fillRect(h,f,p,g),this.ctx.restore()}}class my{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"glowObjects",[]);U(this,"time",0);U(this,"vibrationTimer",0);U(this,"glitchIntensity",0);U(this,"isExploding",!1);this.canvas=e,this.ctx=t}render(e,t){if(this.canvas.width===0||this.canvas.height===0)return;this.ctx.fillStyle="rgba(0, 0, 0, 0.02)",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&!this.isExploding&&(this.createExplosion(),this.vibrationTimer=1,this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.016,i=Math.max(0,this.vibrationTimer));let s=null,o=null,c=2,u=!1;if(e.left&&e.left.landmarks){let f=this.countFingers(e.left.landmarks,"left");e.left.gesture==="pinch"&&(f=1),f>=1&&(u=!0,s=e.left.position.x*this.canvas.width,o=e.left.position.y*this.canvas.height,c=f)}if(e.right&&e.right.landmarks){let f=this.countFingers(e.right.landmarks,"right");if(e.right.gesture==="pinch"&&(f=1),f>=1){u=!0;const p=e.right.position.x*this.canvas.width,g=e.right.position.y*this.canvas.height;s!==null?(s=(s+p)/2,o=((o||0)+g)/2,c=Math.max(c,f)):(s=p,o=g,c=f)}}if(u&&s!==null&&o!==null){this.time+=1*Sn();let f=4,p=100,g=2,m=60;if(c===1?(f=8,p=60,g=1,m=30):c===2?(f=5,p=100,g=2,m=60):c===3||c===4?(f=4,p=130,g=2,m=80):c>=5&&(f=2,p=180,g=3,m=120),this.time>=f){this.time=0;for(let y=0;y<g;y++)this.glowObjects.push({x:s+(Math.random()-.5)*m,y:o+(Math.random()-.5)*m,size:p+Math.random()*(p*.4),vx:(Math.random()-.5)*1.5,vy:(Math.random()-.5)*1.5-.5,life:1,hue:Math.random()*360,decay:.002+c/10*.002})}}const h=Sn();this.glowObjects=this.glowObjects.filter(f=>(f.x+=f.vx*h,f.y+=f.vy*h,f.vx*=Math.pow(.99,h),f.vy*=Math.pow(.99,h),f.life-=f.decay*h,i>0&&(f.x+=(Math.random()-.5)*i*10,f.y+=(Math.random()-.5)*i*10),f.life>0)),this.glowObjects.length>120&&(this.glowObjects=this.glowObjects.slice(-120)),this.glowObjects.forEach(f=>{this.renderChromaticShape(f,i,t)}),this.applyNoiseOverlay(),this.glitchIntensity>.1&&this.applyGlitchEffect()}renderChromaticShape(e,t,i){const s=8+t*20;e.life*.4,this.ctx.globalCompositeOperation="screen";const o=this.ctx.createRadialGradient(e.x-s,e.y,0,e.x-s,e.y,e.size*1.2);o.addColorStop(0,i[0]+"FF"),o.addColorStop(.3,i[0]+"99"),o.addColorStop(.6,i[0]+"44"),o.addColorStop(1,"transparent"),this.ctx.fillStyle=o,this.ctx.beginPath(),this.ctx.arc(e.x-s,e.y,e.size*1.2,0,Math.PI*2),this.ctx.fill();const c=this.ctx.createRadialGradient(e.x,e.y,0,e.x,e.y,e.size*1.2);c.addColorStop(0,i[1]+"FF"),c.addColorStop(.3,i[1]+"BB"),c.addColorStop(.6,i[1]+"66"),c.addColorStop(1,"transparent"),this.ctx.fillStyle=c,this.ctx.beginPath(),this.ctx.arc(e.x,e.y,e.size*1.2,0,Math.PI*2),this.ctx.fill();const u=this.ctx.createRadialGradient(e.x+s,e.y,0,e.x+s,e.y,e.size*1.2);u.addColorStop(0,i[2]+"FF"),u.addColorStop(.3,i[2]+"99"),u.addColorStop(.6,i[2]+"44"),u.addColorStop(1,"transparent"),this.ctx.fillStyle=u,this.ctx.beginPath(),this.ctx.arc(e.x+s,e.y,e.size*1.2,0,Math.PI*2),this.ctx.fill(),this.ctx.globalCompositeOperation="source-over"}countFingers(e,t){if(!e||e.length<21)return 0;const i=e[9],s=e[4],o=e[3],c=Math.sqrt(Math.pow(s.x-i.x,2)+Math.pow(s.y-i.y,2)+Math.pow(s.z-i.z,2)),u=Math.sqrt(Math.pow(o.x-i.x,2)+Math.pow(o.y-i.y,2)+Math.pow(o.z-i.z,2));let h=c>u?1:0;const f=[8,12,16,20],p=[6,10,14,18];for(let g=0;g<4;g++){const m=Math.sqrt(Math.pow(e[f[g]].x-i.x,2)+Math.pow(e[f[g]].y-i.y,2)+Math.pow(e[f[g]].z-i.z,2)),y=Math.sqrt(Math.pow(e[p[g]].x-i.x,2)+Math.pow(e[p[g]].y-i.y,2)+Math.pow(e[p[g]].z-i.z,2));m>y*1.1&&h++}return h}createExplosion(){const e=this.canvas.width/2,t=this.canvas.height/2;for(let i=0;i<40;i++){const s=Math.PI*2*i/40,o=10+Math.random()*20;this.glowObjects.push({x:e,y:t,size:80+Math.random()*100,vx:Math.cos(s)*o,vy:Math.sin(s)*o,life:1,hue:Math.random()*360,decay:.003})}}applyNoiseOverlay(){this.ctx.save(),this.ctx.globalAlpha=.05,this.ctx.fillStyle="white";for(let e=0;e<1e3;e++){const t=Math.random()*this.canvas.width,i=Math.random()*this.canvas.height,s=Math.random()*2;this.ctx.fillRect(t,i,s,s)}this.ctx.restore()}applyGlitchEffect(){this.ctx.save(),this.ctx.globalAlpha=this.glitchIntensity*.5,this.ctx.fillStyle="white";for(let e=0;e<5;e++){const t=Math.random()*this.canvas.width,i=Math.random()*this.canvas.height,s=Math.random()*10;this.ctx.fillRect(t,i,s,this.canvas.height)}for(let e=0;e<5;e++){const t=Math.random()*this.canvas.width,i=Math.random()*this.canvas.height,s=Math.random()*10;this.ctx.fillRect(t,i,this.canvas.width,s)}this.ctx.restore()}}class gy{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"dots",[]);U(this,"gridSpacing",8);U(this,"vibrationTimer",0);U(this,"isExploding",!1);this.canvas=e,this.ctx=t,this.initializeDots()}initializeDots(){this.dots=[];const e=Math.ceil(this.canvas.width/this.gridSpacing),t=Math.ceil(this.canvas.height/this.gridSpacing);for(let i=0;i<t;i++)for(let s=0;s<e;s++)this.dots.push({x:s*this.gridSpacing,y:i*this.gridSpacing,baseSize:1,currentSize:1,targetSize:1})}render(e,t){if(this.canvas.width===0||this.canvas.height===0)return;this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&!this.isExploding&&(this.createExplosion(),this.vibrationTimer=1,this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.016,i=Math.max(0,this.vibrationTimer));let s=null,o=null,c=2,u=!1;if(e.left&&e.left.landmarks){let p=this.countFingers(e.left.landmarks,"left");e.left.gesture==="pinch"&&(p=1),p>=1&&(u=!0,s=e.left.position.x*this.canvas.width,o=e.left.position.y*this.canvas.height,c=p)}if(e.right&&e.right.landmarks){let p=this.countFingers(e.right.landmarks,"right");if(e.right.gesture==="pinch"&&(p=1),p>=1){u=!0;const g=e.right.position.x*this.canvas.width,m=e.right.position.y*this.canvas.height;s!==null?(s=(s+g)/2,o=((o||0)+m)/2,c=Math.max(c,p)):(s=g,o=m,c=p)}}let h=200,f=4;c===1?(h=100,f=2):c>=5&&(h=350,f=6),this.dots.forEach(p=>{if(p.targetSize=p.baseSize,u&&s!==null&&o!==null){const g=p.x-s,m=p.y-o,y=Math.sqrt(g*g+m*m);if(y<h){const v=1-y/h;p.targetSize=p.baseSize+v*f}}p.currentSize+=(p.targetSize-p.currentSize)*Math.min(1,.2*Sn()),i>0&&(p.currentSize+=Math.random()*i*3)}),this.ctx.fillStyle="#FFFFFF",this.dots.forEach(p=>{p.currentSize>.5&&(this.ctx.beginPath(),this.ctx.arc(p.x,p.y,p.currentSize,0,Math.PI*2),this.ctx.fill())})}countFingers(e,t){if(!e||e.length<21)return 0;const i=e[9],s=e[4],o=e[3],c=Math.sqrt(Math.pow(s.x-i.x,2)+Math.pow(s.y-i.y,2)+Math.pow(s.z-i.z,2)),u=Math.sqrt(Math.pow(o.x-i.x,2)+Math.pow(o.y-i.y,2)+Math.pow(o.z-i.z,2));let h=c>u?1:0;const f=[8,12,16,20],p=[6,10,14,18];for(let g=0;g<4;g++){const m=Math.sqrt(Math.pow(e[f[g]].x-i.x,2)+Math.pow(e[f[g]].y-i.y,2)+Math.pow(e[f[g]].z-i.z,2)),y=Math.sqrt(Math.pow(e[p[g]].x-i.x,2)+Math.pow(e[p[g]].y-i.y,2)+Math.pow(e[p[g]].z-i.z,2));m>y*1.1&&h++}return h}createExplosion(){if(this.isExploding)return;this.isExploding=!0;const e=this.canvas.width/2,t=this.canvas.height/2;this.dots.forEach(i=>{const s=i.x-e,o=i.y-t,u=Math.sqrt(s*s+o*o)/10;setTimeout(()=>{i.targetSize=8},u)}),setTimeout(()=>{this.isExploding=!1},1e3)}}class xy{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"blocks",[]);U(this,"baseBlockSize",40);U(this,"vibrationTimer",0);U(this,"currentBlockSize",40);U(this,"isExploding",!1);this.canvas=e,this.ctx=t,this.initializeGrid()}initializeGrid(){this.blocks=[];const e=Math.ceil(this.canvas.width/this.baseBlockSize),t=Math.ceil(this.canvas.height/this.baseBlockSize);for(let i=0;i<t;i++)for(let s=0;s<e;s++){const o=Math.floor(Math.random()*3);this.blocks.push({x:s*this.baseBlockSize,y:i*this.baseBlockSize,targetX:s*this.baseBlockSize,targetY:i*this.baseBlockSize,size:this.baseBlockSize,colorIndex:o,targetColorIndex:o,hasGrid:Math.random()>.7,gridSize:Math.floor(Math.random()*3)+2,glitchTimer:0,colorChangeTimer:Math.random()*5})}}render(e,t){if(this.canvas.width===0||this.canvas.height===0)return;const i=t[1]&&(t[1].toLowerCase()==="#ffffff"||t[1].toLowerCase()==="#fff");i?this.ctx.fillStyle="#000000":this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let s=0;e.clapping&&!this.isExploding&&(this.createExplosion(),this.vibrationTimer=1,this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.016,s=Math.max(0,this.vibrationTimer));let o=0,c=!1;if(e.left){let m=e.left.fingerCount||0;e.left.gesture==="pinch"&&(m=1),c=!0,o=m}if(e.right){let m=e.right.fingerCount||0;e.right.gesture==="pinch"&&(m=1),c=!0,o=Math.max(o,m)}let u=this.currentBlockSize,h=1;c&&(o===1?(u=100,h=.4):o===2?(u=60,h=.5):o===3?(u=45,h=1):o===4?(u=35,h=1.5):o>=5&&(u=25,h=3)),Math.abs(this.currentBlockSize-u)>1&&(this.currentBlockSize=u,this.baseBlockSize=u,this.initializeGrid()),this.blocks.forEach(m=>{m.size=this.currentBlockSize});const f=s>0?10:1;this.blocks.forEach(m=>{if(m.colorChangeTimer>0)m.colorChangeTimer-=.016*h*f;else{const y=Math.floor(Math.random()*3);y!==m.colorIndex&&(m.targetColorIndex=y,m.glitchTimer=.3),m.colorChangeTimer=2+Math.random()*3}m.colorIndex!==m.targetColorIndex&&(m.colorIndex=m.targetColorIndex),m.glitchTimer>0&&(m.glitchTimer-=.016)}),this.blocks.forEach(m=>{const y=m.x,v=m.y,b=s>0?.3+(1-s)*.7:1,_=m.size*b,S=(m.size-_)/2,w=(m.size-_)/2;let E;if(i?E=m.colorIndex%2===0?t[0]:"#000000":E=t[m.colorIndex]||"#FFFFFF",this.ctx.fillStyle=E,this.ctx.fillRect(y+S,v+w,_,_),m.hasGrid&&_>15){this.ctx.strokeStyle=t[3]||"#000000",this.ctx.lineWidth=1;const T=_/m.gridSize;for(let L=0;L<=m.gridSize;L++)this.ctx.beginPath(),this.ctx.moveTo(y+S+L*T,v+w),this.ctx.lineTo(y+S+L*T,v+w+_),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(y+S,v+w+L*T),this.ctx.lineTo(y+S+_,v+w+L*T),this.ctx.stroke()}if(m.glitchTimer>0||s>.5){let T;i?T=m.colorIndex%2===0?"#000000":t[0]:T=t[(m.colorIndex+1)%3]||"#FFFFFF",this.ctx.strokeStyle=T,this.ctx.lineWidth=s>0?4:3,this.ctx.strokeRect(y+S,v+w,_,_)}}),this.ctx.strokeStyle="rgba(255, 255, 255, 0.1)",this.ctx.lineWidth=1;const p=Math.ceil(this.canvas.width/this.baseBlockSize),g=Math.ceil(this.canvas.height/this.baseBlockSize);for(let m=0;m<=p;m++)this.ctx.beginPath(),this.ctx.moveTo(m*this.baseBlockSize,0),this.ctx.lineTo(m*this.baseBlockSize,this.canvas.height),this.ctx.stroke();for(let m=0;m<=g;m++)this.ctx.beginPath(),this.ctx.moveTo(0,m*this.baseBlockSize),this.ctx.lineTo(this.canvas.width,m*this.baseBlockSize),this.ctx.stroke()}createExplosion(){this.isExploding||(this.isExploding=!0,this.blocks.forEach(e=>{e.targetColorIndex=Math.floor(Math.random()*3),e.colorIndex=e.targetColorIndex,e.glitchTimer=1}),setTimeout(()=>this.isExploding=!1,1e3))}}class vy{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"lines",[]);U(this,"gridSpacing",40);U(this,"lineLength",30);U(this,"isClapping",!1);U(this,"clappingIntensity",0);this.canvas=e,this.ctx=t,this.initializeGrid()}initializeGrid(){this.lines=[];const e=Math.ceil(this.canvas.width/this.gridSpacing)+1,t=Math.ceil(this.canvas.height/this.gridSpacing)+1;for(let i=0;i<t;i++)for(let s=0;s<e;s++)this.lines.push({x:s*this.gridSpacing,y:i*this.gridSpacing,length:this.lineLength,currentAngle:0,targetAngle:0,spinVelocity:0})}render(e,t){t[1]&&(t[1].toLowerCase()==="#ffffff"||t[1].toLowerCase()==="#fff")?this.ctx.fillStyle="#000000":this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),(this.lines.length===0||this.lines[0].x>this.canvas.width||this.lines[0].y>this.canvas.height)&&this.initializeGrid();let s=.1,o=0;const c=[];e.left&&c.push(e.left),e.right&&c.push(e.right),c.forEach(u=>{let h=u.fingerCount||2;u.gesture==="pinch"&&(h=1),o=Math.max(o,h)}),o===1?s=.02:o===2?s=.1:o===3?s=.15:o===4?s=.2:o>=5&&(s=.3),e.clapping?this.isClapping||(this.isClapping=!0,this.clappingIntensity=1):this.isClapping=!1,this.clappingIntensity>0&&(this.clappingIntensity*=.95,this.clappingIntensity<.01&&(this.clappingIntensity=0)),this.lines.forEach(u=>{if(c.length>0){let h=0,f=0,p=0;c.forEach(g=>{var E,T;const m=(((E=g.position)==null?void 0:E.x)||.5)*this.canvas.width,y=(((T=g.position)==null?void 0:T.y)||.5)*this.canvas.height,v=m-u.x,b=y-u.y,S=1/(1+Math.sqrt(v*v+b*b)*.001),w=Math.atan2(b,v);f+=Math.cos(w)*S,p+=Math.sin(w)*S,h+=S}),h>0&&(u.targetAngle=Math.atan2(p,f))}else u.targetAngle=0;if(this.clappingIntensity>0)u.spinVelocity+=this.clappingIntensity*.5,u.currentAngle+=u.spinVelocity,u.spinVelocity*=.9;else{let h=u.targetAngle-u.currentAngle;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;u.currentAngle+=h*s,u.spinVelocity=0}}),this.ctx.strokeStyle=t[0]||"#00ff00",this.ctx.lineWidth=2,this.ctx.lineCap="round",this.lines.forEach(u=>{const h=u.length/2,f=u.x-Math.cos(u.currentAngle)*h,p=u.y-Math.sin(u.currentAngle)*h,g=u.x+Math.cos(u.currentAngle)*h,m=u.y+Math.sin(u.currentAngle)*h;this.ctx.beginPath(),this.ctx.moveTo(f,p),this.ctx.lineTo(g,m),this.ctx.stroke()})}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ed="184",_y=0,F0=1,yy=2,Cc=1,Sy=2,Oo=3,ds=0,ri=1,Gi=2,ir=0,Ua=1,Oa=2,U0=3,D0=4,My=5,zs=100,wy=101,by=102,Ey=103,Ty=104,Cy=200,Ay=201,Ry=202,Py=203,Mf=204,wf=205,Ly=206,Iy=207,Ny=208,Fy=209,Uy=210,Dy=211,ky=212,Oy=213,zy=214,bf=0,Ef=1,Tf=2,za=3,Cf=4,Af=5,Rf=6,Pf=7,Td=0,By=1,Hy=2,rr=0,_x=1,yx=2,Sx=3,Mx=4,wx=5,bx=6,Ex=7,Tx=300,Vs=301,Ba=302,Nh=303,Fh=304,qc=306,Lf=1e3,Mr=1001,If=1002,Un=1003,Gy=1004,Jl=1005,gn=1006,Uh=1007,Hs=1008,pi=1009,Cx=1010,Ax=1011,Xo=1012,Cd=1013,sr=1014,Wi=1015,gi=1016,Ad=1017,Rd=1018,jo=1020,Rx=35902,Px=35899,Lx=1021,Ix=1022,mi=1023,Er=1026,Gs=1027,Pd=1028,Ld=1029,Ws=1030,Id=1031,Nd=1033,Ac=33776,Rc=33777,Pc=33778,Lc=33779,Nf=35840,Ff=35841,Uf=35842,Df=35843,kf=36196,Of=37492,zf=37496,Bf=37488,Hf=37489,Fc=37490,Gf=37491,Vf=37808,Wf=37809,Xf=37810,jf=37811,qf=37812,Yf=37813,$f=37814,Kf=37815,Zf=37816,Qf=37817,Jf=37818,ed=37819,td=37820,nd=37821,id=36492,rd=36494,sd=36495,ad=36283,od=36284,Uc=36285,ld=36286,Vy=3200,Dc=0,Wy=1,cs="",di="srgb",kc="srgb-linear",Oc="linear",Vt="srgb",xa=7680,k0=519,Xy=512,jy=513,qy=514,Fd=515,Yy=516,$y=517,Ud=518,Ky=519,O0=35044,z0="300 es",tr=2e3,qo=2001;function Zy(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function zc(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Qy(){const a=zc("canvas");return a.style.display="block",a}const B0={};function H0(...a){const e="THREE."+a.shift();console.log(e,...a)}function Nx(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function ft(...a){a=Nx(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function Ft(...a){a=Nx(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function cd(...a){const e=a.join(" ");e in B0||(B0[e]=!0,ft(...a))}function Jy(a,e,t){return new Promise(function(i,s){function o(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:s();break;case a.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}const eS={[bf]:Ef,[Tf]:Rf,[Cf]:Pf,[za]:Af,[Ef]:bf,[Rf]:Tf,[Pf]:Cf,[Af]:za};class js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,c=s.length;o<c;o++)s[o].call(this,e);e.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let G0=1234567;const Bo=Math.PI/180,Yo=180/Math.PI;function Va(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bn[a&255]+Bn[a>>8&255]+Bn[a>>16&255]+Bn[a>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[t&63|128]+Bn[t>>8&255]+"-"+Bn[t>>16&255]+Bn[t>>24&255]+Bn[i&255]+Bn[i>>8&255]+Bn[i>>16&255]+Bn[i>>24&255]).toLowerCase()}function Rt(a,e,t){return Math.max(e,Math.min(t,a))}function Dd(a,e){return(a%e+e)%e}function tS(a,e,t,i,s){return i+(a-e)*(s-i)/(t-e)}function nS(a,e,t){return a!==e?(t-a)/(e-a):0}function Ho(a,e,t){return(1-t)*a+t*e}function iS(a,e,t,i){return Ho(a,e,1-Math.exp(-t*i))}function rS(a,e=1){return e-Math.abs(Dd(a,e*2)-e)}function sS(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function aS(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function oS(a,e){return a+Math.floor(Math.random()*(e-a+1))}function lS(a,e){return a+Math.random()*(e-a)}function cS(a){return a*(.5-Math.random())}function uS(a){a!==void 0&&(G0=a);let e=G0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hS(a){return a*Bo}function fS(a){return a*Yo}function dS(a){return(a&a-1)===0&&a!==0}function pS(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function mS(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function gS(a,e,t,i,s){const o=Math.cos,c=Math.sin,u=o(t/2),h=c(t/2),f=o((e+i)/2),p=c((e+i)/2),g=o((e-i)/2),m=c((e-i)/2),y=o((i-e)/2),v=c((i-e)/2);switch(s){case"XYX":a.set(u*p,h*g,h*m,u*f);break;case"YZY":a.set(h*m,u*p,h*g,u*f);break;case"ZXZ":a.set(h*g,h*m,u*p,u*f);break;case"XZX":a.set(u*p,h*v,h*y,u*f);break;case"YXY":a.set(h*y,u*p,h*v,u*f);break;case"ZYZ":a.set(h*v,h*y,u*p,u*f);break;default:ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Na(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function jn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const ss={DEG2RAD:Bo,RAD2DEG:Yo,generateUUID:Va,clamp:Rt,euclideanModulo:Dd,mapLinear:tS,inverseLerp:nS,lerp:Ho,damp:iS,pingpong:rS,smoothstep:sS,smootherstep:aS,randInt:oS,randFloat:lS,randFloatSpread:cS,seededRandom:uS,degToRad:hS,radToDeg:fS,isPowerOfTwo:dS,ceilPowerOfTwo:pS,floorPowerOfTwo:mS,setQuaternionFromProperEuler:gS,normalize:jn,denormalize:Na},Yd=class Yd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*i-c*s+e.x,this.y=o*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yd.prototype.isVector2=!0;let ct=Yd;class Wa{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,o,c,u){let h=i[s+0],f=i[s+1],p=i[s+2],g=i[s+3],m=o[c+0],y=o[c+1],v=o[c+2],b=o[c+3];if(g!==b||h!==m||f!==y||p!==v){let _=h*m+f*y+p*v+g*b;_<0&&(m=-m,y=-y,v=-v,b=-b,_=-_);let S=1-u;if(_<.9995){const w=Math.acos(_),E=Math.sin(w);S=Math.sin(S*w)/E,u=Math.sin(u*w)/E,h=h*S+m*u,f=f*S+y*u,p=p*S+v*u,g=g*S+b*u}else{h=h*S+m*u,f=f*S+y*u,p=p*S+v*u,g=g*S+b*u;const w=1/Math.sqrt(h*h+f*f+p*p+g*g);h*=w,f*=w,p*=w,g*=w}}e[t]=h,e[t+1]=f,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,s,o,c){const u=i[s],h=i[s+1],f=i[s+2],p=i[s+3],g=o[c],m=o[c+1],y=o[c+2],v=o[c+3];return e[t]=u*v+p*g+h*y-f*m,e[t+1]=h*v+p*m+f*g-u*y,e[t+2]=f*v+p*y+u*m-h*g,e[t+3]=p*v-u*g-h*m-f*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,o=e._z,c=e._order,u=Math.cos,h=Math.sin,f=u(i/2),p=u(s/2),g=u(o/2),m=h(i/2),y=h(s/2),v=h(o/2);switch(c){case"XYZ":this._x=m*p*g+f*y*v,this._y=f*y*g-m*p*v,this._z=f*p*v+m*y*g,this._w=f*p*g-m*y*v;break;case"YXZ":this._x=m*p*g+f*y*v,this._y=f*y*g-m*p*v,this._z=f*p*v-m*y*g,this._w=f*p*g+m*y*v;break;case"ZXY":this._x=m*p*g-f*y*v,this._y=f*y*g+m*p*v,this._z=f*p*v+m*y*g,this._w=f*p*g-m*y*v;break;case"ZYX":this._x=m*p*g-f*y*v,this._y=f*y*g+m*p*v,this._z=f*p*v-m*y*g,this._w=f*p*g+m*y*v;break;case"YZX":this._x=m*p*g+f*y*v,this._y=f*y*g+m*p*v,this._z=f*p*v-m*y*g,this._w=f*p*g-m*y*v;break;case"XZY":this._x=m*p*g-f*y*v,this._y=f*y*g-m*p*v,this._z=f*p*v+m*y*g,this._w=f*p*g+m*y*v;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],o=t[8],c=t[1],u=t[5],h=t[9],f=t[2],p=t[6],g=t[10],m=i+u+g;if(m>0){const y=.5/Math.sqrt(m+1);this._w=.25/y,this._x=(p-h)*y,this._y=(o-f)*y,this._z=(c-s)*y}else if(i>u&&i>g){const y=2*Math.sqrt(1+i-u-g);this._w=(p-h)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(o+f)/y}else if(u>g){const y=2*Math.sqrt(1+u-i-g);this._w=(o-f)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(h+p)/y}else{const y=2*Math.sqrt(1+g-i-u);this._w=(c-s)/y,this._x=(o+f)/y,this._y=(h+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,o=e._z,c=e._w,u=t._x,h=t._y,f=t._z,p=t._w;return this._x=i*p+c*u+s*f-o*h,this._y=s*p+c*h+o*u-i*f,this._z=o*p+c*f+i*h-s*u,this._w=c*p-i*u-s*h-o*f,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,o=e._z,c=e._w,u=this.dot(e);u<0&&(i=-i,s=-s,o=-o,c=-c,u=-u);let h=1-t;if(u<.9995){const f=Math.acos(u),p=Math.sin(f);h=Math.sin(h*f)/p,t=Math.sin(t*f)/p,this._x=this._x*h+i*t,this._y=this._y*h+s*t,this._z=this._z*h+o*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+i*t,this._y=this._y*h+s*t,this._z=this._z*h+o*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const $d=class $d{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(V0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(V0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*s,this.y=o[1]*t+o[4]*i+o[7]*s,this.z=o[2]*t+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=e.elements,c=1/(o[3]*t+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*s+o[12])*c,this.y=(o[1]*t+o[5]*i+o[9]*s+o[13])*c,this.z=(o[2]*t+o[6]*i+o[10]*s+o[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,o=e.x,c=e.y,u=e.z,h=e.w,f=2*(c*s-u*i),p=2*(u*t-o*s),g=2*(o*i-c*t);return this.x=t+h*f+c*g-u*p,this.y=i+h*p+u*f-o*g,this.z=s+h*g+o*p-c*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s,this.y=o[1]*t+o[5]*i+o[9]*s,this.z=o[2]*t+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,o=e.z,c=t.x,u=t.y,h=t.z;return this.x=s*h-o*u,this.y=o*c-i*h,this.z=i*u-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dh.copy(this).projectOnVector(e),this.sub(Dh)}reflect(e){return this.sub(Dh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};$d.prototype.isVector3=!0;let Q=$d;const Dh=new Q,V0=new Wa,Kd=class Kd{constructor(e,t,i,s,o,c,u,h,f){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,c,u,h,f)}set(e,t,i,s,o,c,u,h,f){const p=this.elements;return p[0]=e,p[1]=s,p[2]=u,p[3]=t,p[4]=o,p[5]=h,p[6]=i,p[7]=c,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,c=i[0],u=i[3],h=i[6],f=i[1],p=i[4],g=i[7],m=i[2],y=i[5],v=i[8],b=s[0],_=s[3],S=s[6],w=s[1],E=s[4],T=s[7],L=s[2],A=s[5],I=s[8];return o[0]=c*b+u*w+h*L,o[3]=c*_+u*E+h*A,o[6]=c*S+u*T+h*I,o[1]=f*b+p*w+g*L,o[4]=f*_+p*E+g*A,o[7]=f*S+p*T+g*I,o[2]=m*b+y*w+v*L,o[5]=m*_+y*E+v*A,o[8]=m*S+y*T+v*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],c=e[4],u=e[5],h=e[6],f=e[7],p=e[8];return t*c*p-t*u*f-i*o*p+i*u*h+s*o*f-s*c*h}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],c=e[4],u=e[5],h=e[6],f=e[7],p=e[8],g=p*c-u*f,m=u*h-p*o,y=f*o-c*h,v=t*g+i*m+s*y;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/v;return e[0]=g*b,e[1]=(s*f-p*i)*b,e[2]=(u*i-s*c)*b,e[3]=m*b,e[4]=(p*t-s*h)*b,e[5]=(s*o-u*t)*b,e[6]=y*b,e[7]=(i*h-f*t)*b,e[8]=(c*t-i*o)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,o,c,u){const h=Math.cos(o),f=Math.sin(o);return this.set(i*h,i*f,-i*(h*c+f*u)+c+e,-s*f,s*h,-s*(-f*c+h*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(kh.makeScale(e,t)),this}rotate(e){return this.premultiply(kh.makeRotation(-e)),this}translate(e,t){return this.premultiply(kh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Kd.prototype.isMatrix3=!0;let Mt=Kd;const kh=new Mt,W0=new Mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),X0=new Mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xS(){const a={enabled:!0,workingColorSpace:kc,spaces:{},convert:function(s,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===Vt&&(s.r=wr(s.r),s.g=wr(s.g),s.b=wr(s.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Vt&&(s.r=Da(s.r),s.g=Da(s.g),s.b=Da(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===cs?Oc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,c){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return cd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return cd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(s,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return a.define({[kc]:{primaries:e,whitePoint:i,transfer:Oc,toXYZ:W0,fromXYZ:X0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:e,whitePoint:i,transfer:Vt,toXYZ:W0,fromXYZ:X0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),a}const Pt=xS();function wr(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Da(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let va;class vS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{va===void 0&&(va=zc("canvas")),va.width=e.width,va.height=e.height;const s=va.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=va}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let c=0;c<o.length;c++)o[c]=wr(o[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wr(t[i]/255)*255):t[i]=wr(t[i]);return{data:t,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _S=0;class kd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=Va(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?o.push(Oh(s[c].image)):o.push(Oh(s[c]))}else o=Oh(s);i.url=o}return t||(e.images[this.uuid]=i),i}}function Oh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?vS.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let yS=0;const zh=new Q;class Vn extends js{constructor(e=Vn.DEFAULT_IMAGE,t=Vn.DEFAULT_MAPPING,i=Mr,s=Mr,o=gn,c=Hs,u=mi,h=pi,f=Vn.DEFAULT_ANISOTROPY,p=cs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=Va(),this.name="",this.source=new kd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=c,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=h,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zh).x}get height(){return this.source.getSize(zh).y}get depth(){return this.source.getSize(zh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ft(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ft(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lf:e.x=e.x-Math.floor(e.x);break;case Mr:e.x=e.x<0?0:1;break;case If:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lf:e.y=e.y-Math.floor(e.y);break;case Mr:e.y=e.y<0?0:1;break;case If:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Tx;Vn.DEFAULT_ANISOTROPY=1;const Zd=class Zd{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*o,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*o,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*o,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,o;const h=e.elements,f=h[0],p=h[4],g=h[8],m=h[1],y=h[5],v=h[9],b=h[2],_=h[6],S=h[10];if(Math.abs(p-m)<.01&&Math.abs(g-b)<.01&&Math.abs(v-_)<.01){if(Math.abs(p+m)<.1&&Math.abs(g+b)<.1&&Math.abs(v+_)<.1&&Math.abs(f+y+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(f+1)/2,T=(y+1)/2,L=(S+1)/2,A=(p+m)/4,I=(g+b)/4,C=(v+_)/4;return E>T&&E>L?E<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(E),s=A/i,o=I/i):T>L?T<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(T),i=A/s,o=C/s):L<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(L),i=I/o,s=C/o),this.set(i,s,o,t),this}let w=Math.sqrt((_-v)*(_-v)+(g-b)*(g-b)+(m-p)*(m-p));return Math.abs(w)<.001&&(w=1),this.x=(_-v)/w,this.y=(g-b)/w,this.z=(m-p)/w,this.w=Math.acos((f+y+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Rt(this.x,e.x,t.x),this.y=Rt(this.y,e.y,t.y),this.z=Rt(this.z,e.z,t.z),this.w=Rt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Rt(this.x,e,t),this.y=Rt(this.y,e,t),this.z=Rt(this.z,e,t),this.w=Rt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Rt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zd.prototype.isVector4=!0;let sn=Zd;class SS extends js{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new sn(0,0,e,t),this.scissorTest=!1,this.viewport=new sn(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},o=new Vn(s),c=i.count;for(let u=0;u<c;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new kd(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends SS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Fx extends Vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class MS extends Vn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=Mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jc=class jc{constructor(e,t,i,s,o,c,u,h,f,p,g,m,y,v,b,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,c,u,h,f,p,g,m,y,v,b,_)}set(e,t,i,s,o,c,u,h,f,p,g,m,y,v,b,_){const S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=s,S[1]=o,S[5]=c,S[9]=u,S[13]=h,S[2]=f,S[6]=p,S[10]=g,S[14]=m,S[3]=y,S[7]=v,S[11]=b,S[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/_a.setFromMatrixColumn(e,0).length(),o=1/_a.setFromMatrixColumn(e,1).length(),c=1/_a.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,o=e.z,c=Math.cos(i),u=Math.sin(i),h=Math.cos(s),f=Math.sin(s),p=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const m=c*p,y=c*g,v=u*p,b=u*g;t[0]=h*p,t[4]=-h*g,t[8]=f,t[1]=y+v*f,t[5]=m-b*f,t[9]=-u*h,t[2]=b-m*f,t[6]=v+y*f,t[10]=c*h}else if(e.order==="YXZ"){const m=h*p,y=h*g,v=f*p,b=f*g;t[0]=m+b*u,t[4]=v*u-y,t[8]=c*f,t[1]=c*g,t[5]=c*p,t[9]=-u,t[2]=y*u-v,t[6]=b+m*u,t[10]=c*h}else if(e.order==="ZXY"){const m=h*p,y=h*g,v=f*p,b=f*g;t[0]=m-b*u,t[4]=-c*g,t[8]=v+y*u,t[1]=y+v*u,t[5]=c*p,t[9]=b-m*u,t[2]=-c*f,t[6]=u,t[10]=c*h}else if(e.order==="ZYX"){const m=c*p,y=c*g,v=u*p,b=u*g;t[0]=h*p,t[4]=v*f-y,t[8]=m*f+b,t[1]=h*g,t[5]=b*f+m,t[9]=y*f-v,t[2]=-f,t[6]=u*h,t[10]=c*h}else if(e.order==="YZX"){const m=c*h,y=c*f,v=u*h,b=u*f;t[0]=h*p,t[4]=b-m*g,t[8]=v*g+y,t[1]=g,t[5]=c*p,t[9]=-u*p,t[2]=-f*p,t[6]=y*g+v,t[10]=m-b*g}else if(e.order==="XZY"){const m=c*h,y=c*f,v=u*h,b=u*f;t[0]=h*p,t[4]=-g,t[8]=f*p,t[1]=m*g+b,t[5]=c*p,t[9]=y*g-v,t[2]=v*g-y,t[6]=u*p,t[10]=b*g+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wS,e,bS)}lookAt(e,t,i){const s=this.elements;return ui.subVectors(e,t),ui.lengthSq()===0&&(ui.z=1),ui.normalize(),Qr.crossVectors(i,ui),Qr.lengthSq()===0&&(Math.abs(i.z)===1?ui.x+=1e-4:ui.z+=1e-4,ui.normalize(),Qr.crossVectors(i,ui)),Qr.normalize(),ec.crossVectors(ui,Qr),s[0]=Qr.x,s[4]=ec.x,s[8]=ui.x,s[1]=Qr.y,s[5]=ec.y,s[9]=ui.y,s[2]=Qr.z,s[6]=ec.z,s[10]=ui.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,c=i[0],u=i[4],h=i[8],f=i[12],p=i[1],g=i[5],m=i[9],y=i[13],v=i[2],b=i[6],_=i[10],S=i[14],w=i[3],E=i[7],T=i[11],L=i[15],A=s[0],I=s[4],C=s[8],F=s[12],z=s[1],D=s[5],H=s[9],ie=s[13],J=s[2],G=s[6],$=s[10],K=s[14],W=s[3],re=s[7],ne=s[11],O=s[15];return o[0]=c*A+u*z+h*J+f*W,o[4]=c*I+u*D+h*G+f*re,o[8]=c*C+u*H+h*$+f*ne,o[12]=c*F+u*ie+h*K+f*O,o[1]=p*A+g*z+m*J+y*W,o[5]=p*I+g*D+m*G+y*re,o[9]=p*C+g*H+m*$+y*ne,o[13]=p*F+g*ie+m*K+y*O,o[2]=v*A+b*z+_*J+S*W,o[6]=v*I+b*D+_*G+S*re,o[10]=v*C+b*H+_*$+S*ne,o[14]=v*F+b*ie+_*K+S*O,o[3]=w*A+E*z+T*J+L*W,o[7]=w*I+E*D+T*G+L*re,o[11]=w*C+E*H+T*$+L*ne,o[15]=w*F+E*ie+T*K+L*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],o=e[12],c=e[1],u=e[5],h=e[9],f=e[13],p=e[2],g=e[6],m=e[10],y=e[14],v=e[3],b=e[7],_=e[11],S=e[15],w=h*y-f*m,E=u*y-f*g,T=u*m-h*g,L=c*y-f*p,A=c*m-h*p,I=c*g-u*p;return t*(b*w-_*E+S*T)-i*(v*w-_*L+S*A)+s*(v*E-b*L+S*I)-o*(v*T-b*A+_*I)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],c=e[4],u=e[5],h=e[6],f=e[7],p=e[8],g=e[9],m=e[10],y=e[11],v=e[12],b=e[13],_=e[14],S=e[15],w=t*u-i*c,E=t*h-s*c,T=t*f-o*c,L=i*h-s*u,A=i*f-o*u,I=s*f-o*h,C=p*b-g*v,F=p*_-m*v,z=p*S-y*v,D=g*_-m*b,H=g*S-y*b,ie=m*S-y*_,J=w*ie-E*H+T*D+L*z-A*F+I*C;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/J;return e[0]=(u*ie-h*H+f*D)*G,e[1]=(s*H-i*ie-o*D)*G,e[2]=(b*I-_*A+S*L)*G,e[3]=(m*A-g*I-y*L)*G,e[4]=(h*z-c*ie-f*F)*G,e[5]=(t*ie-s*z+o*F)*G,e[6]=(_*T-v*I-S*E)*G,e[7]=(p*I-m*T+y*E)*G,e[8]=(c*H-u*z+f*C)*G,e[9]=(i*z-t*H-o*C)*G,e[10]=(v*A-b*T+S*w)*G,e[11]=(g*T-p*A-y*w)*G,e[12]=(u*F-c*D-h*C)*G,e[13]=(t*D-i*F+s*C)*G,e[14]=(b*E-v*L-_*w)*G,e[15]=(p*L-g*E+m*w)*G,this}scale(e){const t=this.elements,i=e.x,s=e.y,o=e.z;return t[0]*=i,t[4]*=s,t[8]*=o,t[1]*=i,t[5]*=s,t[9]*=o,t[2]*=i,t[6]*=s,t[10]*=o,t[3]*=i,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),o=1-i,c=e.x,u=e.y,h=e.z,f=o*c,p=o*u;return this.set(f*c+i,f*u-s*h,f*h+s*u,0,f*u+s*h,p*u+i,p*h-s*c,0,f*h-s*u,p*h+s*c,o*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,o,c){return this.set(1,i,o,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,o=t._x,c=t._y,u=t._z,h=t._w,f=o+o,p=c+c,g=u+u,m=o*f,y=o*p,v=o*g,b=c*p,_=c*g,S=u*g,w=h*f,E=h*p,T=h*g,L=i.x,A=i.y,I=i.z;return s[0]=(1-(b+S))*L,s[1]=(y+T)*L,s[2]=(v-E)*L,s[3]=0,s[4]=(y-T)*A,s[5]=(1-(m+S))*A,s[6]=(_+w)*A,s[7]=0,s[8]=(v+E)*I,s[9]=(_-w)*I,s[10]=(1-(m+b))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const o=this.determinant();if(o===0)return i.set(1,1,1),t.identity(),this;let c=_a.set(s[0],s[1],s[2]).length();const u=_a.set(s[4],s[5],s[6]).length(),h=_a.set(s[8],s[9],s[10]).length();o<0&&(c=-c),Oi.copy(this);const f=1/c,p=1/u,g=1/h;return Oi.elements[0]*=f,Oi.elements[1]*=f,Oi.elements[2]*=f,Oi.elements[4]*=p,Oi.elements[5]*=p,Oi.elements[6]*=p,Oi.elements[8]*=g,Oi.elements[9]*=g,Oi.elements[10]*=g,t.setFromRotationMatrix(Oi),i.x=c,i.y=u,i.z=h,this}makePerspective(e,t,i,s,o,c,u=tr,h=!1){const f=this.elements,p=2*o/(t-e),g=2*o/(i-s),m=(t+e)/(t-e),y=(i+s)/(i-s);let v,b;if(h)v=o/(c-o),b=c*o/(c-o);else if(u===tr)v=-(c+o)/(c-o),b=-2*c*o/(c-o);else if(u===qo)v=-c/(c-o),b=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=p,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=g,f[9]=y,f[13]=0,f[2]=0,f[6]=0,f[10]=v,f[14]=b,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,s,o,c,u=tr,h=!1){const f=this.elements,p=2/(t-e),g=2/(i-s),m=-(t+e)/(t-e),y=-(i+s)/(i-s);let v,b;if(h)v=1/(c-o),b=c/(c-o);else if(u===tr)v=-2/(c-o),b=-(c+o)/(c-o);else if(u===qo)v=-1/(c-o),b=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=p,f[4]=0,f[8]=0,f[12]=m,f[1]=0,f[5]=g,f[9]=0,f[13]=y,f[2]=0,f[6]=0,f[10]=v,f[14]=b,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};jc.prototype.isMatrix4=!0;let Yt=jc;const _a=new Q,Oi=new Yt,wS=new Q(0,0,0),bS=new Q(1,1,1),Qr=new Q,ec=new Q,ui=new Q,j0=new Yt,q0=new Wa;class Tr{constructor(e=0,t=0,i=0,s=Tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,o=s[0],c=s[4],u=s[8],h=s[1],f=s[5],p=s[9],g=s[2],m=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-Rt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(m,y),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-Rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,y),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return j0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(j0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return q0.setFromEuler(this),this.setFromQuaternion(q0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tr.DEFAULT_ORDER="XYZ";class Ux{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ES=0;const Y0=new Q,ya=new Wa,gr=new Yt,tc=new Q,Co=new Q,TS=new Q,CS=new Wa,$0=new Q(1,0,0),K0=new Q(0,1,0),Z0=new Q(0,0,1),Q0={type:"added"},AS={type:"removed"},Sa={type:"childadded",child:null},Bh={type:"childremoved",child:null};class xn extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=Va(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new Q,t=new Tr,i=new Wa,s=new Q(1,1,1);function o(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Mt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ux,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ya.setFromAxisAngle(e,t),this.quaternion.multiply(ya),this}rotateOnWorldAxis(e,t){return ya.setFromAxisAngle(e,t),this.quaternion.premultiply(ya),this}rotateX(e){return this.rotateOnAxis($0,e)}rotateY(e){return this.rotateOnAxis(K0,e)}rotateZ(e){return this.rotateOnAxis(Z0,e)}translateOnAxis(e,t){return Y0.copy(e).applyQuaternion(this.quaternion),this.position.add(Y0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($0,e)}translateY(e){return this.translateOnAxis(K0,e)}translateZ(e){return this.translateOnAxis(Z0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?tc.copy(e):tc.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gr.lookAt(Co,tc,this.up):gr.lookAt(tc,Co,this.up),this.quaternion.setFromRotationMatrix(gr),s&&(gr.extractRotation(s.matrixWorld),ya.setFromRotationMatrix(gr),this.quaternion.premultiply(ya.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Q0),Sa.child=e,this.dispatchEvent(Sa),Sa.child=null):Ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(AS),Bh.child=e,this.dispatchEvent(Bh),Bh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gr.multiply(e.parent.matrixWorld)),e.applyMatrix4(gr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Q0),Sa.child=e,this.dispatchEvent(Sa),Sa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let o=0,c=s.length;o<c;o++)s[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,TS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,CS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*i-o[8]*s,o[13]+=i-o[1]*t-o[5]*i-o[9]*s,o[14]+=s-o[2]*t-o[6]*i-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let o=0,c=s.length;o<c;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(u=>({...u})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let f=0,p=h.length;f<p;f++){const g=h[f];o(e.shapes,g)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,f=this.material.length;h<f;h++)u.push(o(e.materials,this.material[h]));s.material=u}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];s.animations.push(o(e.animations,h))}}if(t){const u=c(e.geometries),h=c(e.materials),f=c(e.textures),p=c(e.images),g=c(e.shapes),m=c(e.skeletons),y=c(e.animations),v=c(e.nodes);u.length>0&&(i.geometries=u),h.length>0&&(i.materials=h),f.length>0&&(i.textures=f),p.length>0&&(i.images=p),g.length>0&&(i.shapes=g),m.length>0&&(i.skeletons=m),y.length>0&&(i.animations=y),v.length>0&&(i.nodes=v)}return i.object=s,i;function c(u){const h=[];for(const f in u){const p=u[f];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}xn.DEFAULT_UP=new Q(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Fa extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RS={type:"move"};class Hh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,o=null,c=null;const u=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){c=!0;for(const b of e.hand.values()){const _=t.getJointPose(b,i),S=this._getHandJoint(f,b);_!==null&&(S.matrix.fromArray(_.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=_.radius),S.visible=_!==null}const p=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],m=p.position.distanceTo(g.position),y=.02,v=.005;f.inputState.pinching&&m>y+v?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&m<=y-v&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));u!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(RS)))}return u!==null&&(u.visible=s!==null),h!==null&&(h.visible=o!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Fa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Dx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jr={h:0,s:0,l:0},nc={h:0,s:0,l:0};function Gh(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Pt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Pt.workingColorSpace){if(e=Dd(e,1),t=Rt(t,0,1),i=Rt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,c=2*i-o;this.r=Gh(c,o,e+1/3),this.g=Gh(c,o,e),this.b=Gh(c,o,e-1/3)}return Pt.colorSpaceToWorking(this,s),this}setStyle(e,t=di){function i(o){o!==void 0&&parseFloat(o)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:ft("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=di){const i=Dx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}copyLinearToSRGB(e){return this.r=Da(e.r),this.g=Da(e.g),this.b=Da(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return Pt.workingToColorSpace(Hn.copy(this),e),Math.round(Rt(Hn.r*255,0,255))*65536+Math.round(Rt(Hn.g*255,0,255))*256+Math.round(Rt(Hn.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.workingToColorSpace(Hn.copy(this),t);const i=Hn.r,s=Hn.g,o=Hn.b,c=Math.max(i,s,o),u=Math.min(i,s,o);let h,f;const p=(u+c)/2;if(u===c)h=0,f=0;else{const g=c-u;switch(f=p<=.5?g/(c+u):g/(2-c-u),c){case i:h=(s-o)/g+(s<o?6:0);break;case s:h=(o-i)/g+2;break;case o:h=(i-s)/g+4;break}h/=6}return e.h=h,e.s=f,e.l=p,e}getRGB(e,t=Pt.workingColorSpace){return Pt.workingToColorSpace(Hn.copy(this),t),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=di){Pt.workingToColorSpace(Hn.copy(this),e);const t=Hn.r,i=Hn.g,s=Hn.b;return e!==di?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Jr),this.setHSL(Jr.h+e,Jr.s+t,Jr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Jr),e.getHSL(nc);const i=Ho(Jr.h,nc.h,t),s=Ho(Jr.s,nc.s,t),o=Ho(Jr.l,nc.l,t);return this.setHSL(i,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*s,this.g=o[1]*t+o[4]*i+o[7]*s,this.b=o[2]*t+o[5]*i+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new $e;$e.NAMES=Dx;class Zo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new $e(e),this.density=t}clone(){return new Zo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ps extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tr,this.environmentIntensity=1,this.environmentRotation=new Tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const zi=new Q,xr=new Q,Vh=new Q,vr=new Q,Ma=new Q,wa=new Q,J0=new Q,Wh=new Q,Xh=new Q,jh=new Q,qh=new sn,Yh=new sn,$h=new sn;class Vi{constructor(e=new Q,t=new Q,i=new Q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),zi.subVectors(e,t),s.cross(zi);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,i,s,o){zi.subVectors(s,t),xr.subVectors(i,t),Vh.subVectors(e,t);const c=zi.dot(zi),u=zi.dot(xr),h=zi.dot(Vh),f=xr.dot(xr),p=xr.dot(Vh),g=c*f-u*u;if(g===0)return o.set(0,0,0),null;const m=1/g,y=(f*h-u*p)*m,v=(c*p-u*h)*m;return o.set(1-y-v,v,y)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,vr)===null?!1:vr.x>=0&&vr.y>=0&&vr.x+vr.y<=1}static getInterpolation(e,t,i,s,o,c,u,h){return this.getBarycoord(e,t,i,s,vr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,vr.x),h.addScaledVector(c,vr.y),h.addScaledVector(u,vr.z),h)}static getInterpolatedAttribute(e,t,i,s,o,c){return qh.setScalar(0),Yh.setScalar(0),$h.setScalar(0),qh.fromBufferAttribute(e,t),Yh.fromBufferAttribute(e,i),$h.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(qh,o.x),c.addScaledVector(Yh,o.y),c.addScaledVector($h,o.z),c}static isFrontFacing(e,t,i,s){return zi.subVectors(i,t),xr.subVectors(e,t),zi.cross(xr).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zi.subVectors(this.c,this.b),xr.subVectors(this.a,this.b),zi.cross(xr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,o){return Vi.getInterpolation(e,this.a,this.b,this.c,t,i,s,o)}containsPoint(e){return Vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,o=this.c;let c,u;Ma.subVectors(s,i),wa.subVectors(o,i),Wh.subVectors(e,i);const h=Ma.dot(Wh),f=wa.dot(Wh);if(h<=0&&f<=0)return t.copy(i);Xh.subVectors(e,s);const p=Ma.dot(Xh),g=wa.dot(Xh);if(p>=0&&g<=p)return t.copy(s);const m=h*g-p*f;if(m<=0&&h>=0&&p<=0)return c=h/(h-p),t.copy(i).addScaledVector(Ma,c);jh.subVectors(e,o);const y=Ma.dot(jh),v=wa.dot(jh);if(v>=0&&y<=v)return t.copy(o);const b=y*f-h*v;if(b<=0&&f>=0&&v<=0)return u=f/(f-v),t.copy(i).addScaledVector(wa,u);const _=p*v-y*g;if(_<=0&&g-p>=0&&y-v>=0)return J0.subVectors(o,s),u=(g-p)/(g-p+(y-v)),t.copy(s).addScaledVector(J0,u);const S=1/(_+b+m);return c=b*S,u=m*S,t.copy(i).addScaledVector(Ma,c).addScaledVector(wa,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class qs{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=o.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Bi):Bi.fromBufferAttribute(o,c),Bi.applyMatrix4(e.matrixWorld),this.expandByPoint(Bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ic.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ic.copy(i.boundingBox)),ic.applyMatrix4(e.matrixWorld),this.union(ic)}const s=e.children;for(let o=0,c=s.length;o<c;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bi),Bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),rc.subVectors(this.max,Ao),ba.subVectors(e.a,Ao),Ea.subVectors(e.b,Ao),Ta.subVectors(e.c,Ao),es.subVectors(Ea,ba),ts.subVectors(Ta,Ea),Ns.subVectors(ba,Ta);let t=[0,-es.z,es.y,0,-ts.z,ts.y,0,-Ns.z,Ns.y,es.z,0,-es.x,ts.z,0,-ts.x,Ns.z,0,-Ns.x,-es.y,es.x,0,-ts.y,ts.x,0,-Ns.y,Ns.x,0];return!Kh(t,ba,Ea,Ta,rc)||(t=[1,0,0,0,1,0,0,0,1],!Kh(t,ba,Ea,Ta,rc))?!1:(sc.crossVectors(es,ts),t=[sc.x,sc.y,sc.z],Kh(t,ba,Ea,Ta,rc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_r[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_r[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_r[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_r[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_r[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_r[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_r[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_r[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_r),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _r=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Bi=new Q,ic=new qs,ba=new Q,Ea=new Q,Ta=new Q,es=new Q,ts=new Q,Ns=new Q,Ao=new Q,rc=new Q,sc=new Q,Fs=new Q;function Kh(a,e,t,i,s){for(let o=0,c=a.length-3;o<=c;o+=3){Fs.fromArray(a,o);const u=s.x*Math.abs(Fs.x)+s.y*Math.abs(Fs.y)+s.z*Math.abs(Fs.z),h=e.dot(Fs),f=t.dot(Fs),p=i.dot(Fs);if(Math.max(-Math.max(h,f,p),Math.min(h,f,p))>u)return!1}return!0}const pn=new Q,ac=new ct;let PS=0;class yn extends js{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=O0,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ac.fromBufferAttribute(this,t),ac.applyMatrix3(e),this.setXY(t,ac.x,ac.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix3(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Na(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Na(t,this.array)),t}setX(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Na(t,this.array)),t}setY(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Na(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Na(t,this.array)),t}setW(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),i=jn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),i=jn(i,this.array),s=jn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),i=jn(i,this.array),s=jn(s,this.array),o=jn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==O0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class kx extends yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ox extends yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Qt extends yn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const LS=new qs,Ro=new Q,Zh=new Q;class Ys{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):LS.setFromPoints(e).getCenter(i);let s=0;for(let o=0,c=e.length;o<c;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const t=Ro.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ro,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(Zh)),this.expandByPoint(Ro.copy(e.center).sub(Zh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let IS=0;const Ei=new Yt,Qh=new xn,Ca=new Q,hi=new qs,Po=new qs,Cn=new Q;class cn extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=Va(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zy(e)?Ox:kx)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Mt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,t,i){return Ei.makeTranslation(e,t,i),this.applyMatrix4(Ei),this}scale(e,t,i){return Ei.makeScale(e,t,i),this.applyMatrix4(Ei),this}lookAt(e){return Qh.lookAt(e),Qh.updateMatrix(),this.applyMatrix4(Qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ca).negate(),this.translate(Ca.x,Ca.y,Ca.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,o=e.length;s<o;s++){const c=e[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Qt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];hi.setFromBufferAttribute(o),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const i=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const u=t[o];Po.setFromBufferAttribute(u),this.morphTargetsRelative?(Cn.addVectors(hi.min,Po.min),hi.expandByPoint(Cn),Cn.addVectors(hi.max,Po.max),hi.expandByPoint(Cn)):(hi.expandByPoint(Po.min),hi.expandByPoint(Po.max))}hi.getCenter(i);let s=0;for(let o=0,c=e.count;o<c;o++)Cn.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(Cn));if(t)for(let o=0,c=t.length;o<c;o++){const u=t[o],h=this.morphTargetsRelative;for(let f=0,p=u.count;f<p;f++)Cn.fromBufferAttribute(u,f),h&&(Ca.fromBufferAttribute(e,f),Cn.add(Ca)),s=Math.max(s,i.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],h=[];for(let C=0;C<i.count;C++)u[C]=new Q,h[C]=new Q;const f=new Q,p=new Q,g=new Q,m=new ct,y=new ct,v=new ct,b=new Q,_=new Q;function S(C,F,z){f.fromBufferAttribute(i,C),p.fromBufferAttribute(i,F),g.fromBufferAttribute(i,z),m.fromBufferAttribute(o,C),y.fromBufferAttribute(o,F),v.fromBufferAttribute(o,z),p.sub(f),g.sub(f),y.sub(m),v.sub(m);const D=1/(y.x*v.y-v.x*y.y);isFinite(D)&&(b.copy(p).multiplyScalar(v.y).addScaledVector(g,-y.y).multiplyScalar(D),_.copy(g).multiplyScalar(y.x).addScaledVector(p,-v.x).multiplyScalar(D),u[C].add(b),u[F].add(b),u[z].add(b),h[C].add(_),h[F].add(_),h[z].add(_))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let C=0,F=w.length;C<F;++C){const z=w[C],D=z.start,H=z.count;for(let ie=D,J=D+H;ie<J;ie+=3)S(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const E=new Q,T=new Q,L=new Q,A=new Q;function I(C){L.fromBufferAttribute(s,C),A.copy(L);const F=u[C];E.copy(F),E.sub(L.multiplyScalar(L.dot(F))).normalize(),T.crossVectors(A,F);const D=T.dot(h[C])<0?-1:1;c.setXYZW(C,E.x,E.y,E.z,D)}for(let C=0,F=w.length;C<F;++C){const z=w[C],D=z.start,H=z.count;for(let ie=D,J=D+H;ie<J;ie+=3)I(e.getX(ie+0)),I(e.getX(ie+1)),I(e.getX(ie+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,y=i.count;m<y;m++)i.setXYZ(m,0,0,0);const s=new Q,o=new Q,c=new Q,u=new Q,h=new Q,f=new Q,p=new Q,g=new Q;if(e)for(let m=0,y=e.count;m<y;m+=3){const v=e.getX(m+0),b=e.getX(m+1),_=e.getX(m+2);s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,b),c.fromBufferAttribute(t,_),p.subVectors(c,o),g.subVectors(s,o),p.cross(g),u.fromBufferAttribute(i,v),h.fromBufferAttribute(i,b),f.fromBufferAttribute(i,_),u.add(p),h.add(p),f.add(p),i.setXYZ(v,u.x,u.y,u.z),i.setXYZ(b,h.x,h.y,h.z),i.setXYZ(_,f.x,f.y,f.z)}else for(let m=0,y=t.count;m<y;m+=3)s.fromBufferAttribute(t,m+0),o.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),p.subVectors(c,o),g.subVectors(s,o),p.cross(g),i.setXYZ(m+0,p.x,p.y,p.z),i.setXYZ(m+1,p.x,p.y,p.z),i.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Cn.fromBufferAttribute(e,t),Cn.normalize(),e.setXYZ(t,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function e(u,h){const f=u.array,p=u.itemSize,g=u.normalized,m=new f.constructor(h.length*p);let y=0,v=0;for(let b=0,_=h.length;b<_;b++){u.isInterleavedBufferAttribute?y=h[b]*u.data.stride+u.offset:y=h[b]*p;for(let S=0;S<p;S++)m[v++]=f[y++]}return new yn(m,p,g)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,i=this.index.array,s=this.attributes;for(const u in s){const h=s[u],f=e(h,i);t.setAttribute(u,f)}const o=this.morphAttributes;for(const u in o){const h=[],f=o[u];for(let p=0,g=f.length;p<g;p++){const m=f[p],y=e(m,i);h.push(y)}t.morphAttributes[u]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,h=c.length;u<h;u++){const f=c[u];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const f=i[h];e.data.attributes[h]=f.toJSON(e.data)}const s={};let o=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],p=[];for(let g=0,m=f.length;g<m;g++){const y=f[g];p.push(y.toJSON(e.data))}p.length>0&&(s[h]=p,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const f in s){const p=s[f];this.setAttribute(f,p.clone(t))}const o=e.morphAttributes;for(const f in o){const p=[],g=o[f];for(let m=0,y=g.length;m<y;m++)p.push(g[m].clone(t));this.morphAttributes[f]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let f=0,p=c.length;f<p;f++){const g=c[f];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let NS=0;class Xi extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NS++}),this.uuid=Va(),this.name="",this.type="Material",this.blending=Ua,this.side=ds,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mf,this.blendDst=wf,this.blendEquation=zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=k0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xa,this.stencilZFail=xa,this.stencilZPass=xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ft(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ft(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ua&&(i.blending=this.blending),this.side!==ds&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Mf&&(i.blendSrc=this.blendSrc),this.blendDst!==wf&&(i.blendDst=this.blendDst),this.blendEquation!==zs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==za&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==k0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}if(t){const o=s(e.textures),c=s(e.images);o.length>0&&(i.textures=o),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const yr=new Q,Jh=new Q,oc=new Q,ns=new Q,ef=new Q,lc=new Q,tf=new Q;class Od{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yr.copy(this.origin).addScaledVector(this.direction,t),yr.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Jh.copy(e).add(t).multiplyScalar(.5),oc.copy(t).sub(e).normalize(),ns.copy(this.origin).sub(Jh);const o=e.distanceTo(t)*.5,c=-this.direction.dot(oc),u=ns.dot(this.direction),h=-ns.dot(oc),f=ns.lengthSq(),p=Math.abs(1-c*c);let g,m,y,v;if(p>0)if(g=c*h-u,m=c*u-h,v=o*p,g>=0)if(m>=-v)if(m<=v){const b=1/p;g*=b,m*=b,y=g*(g+c*m+2*u)+m*(c*g+m+2*h)+f}else m=o,g=Math.max(0,-(c*m+u)),y=-g*g+m*(m+2*h)+f;else m=-o,g=Math.max(0,-(c*m+u)),y=-g*g+m*(m+2*h)+f;else m<=-v?(g=Math.max(0,-(-c*o+u)),m=g>0?-o:Math.min(Math.max(-o,-h),o),y=-g*g+m*(m+2*h)+f):m<=v?(g=0,m=Math.min(Math.max(-o,-h),o),y=m*(m+2*h)+f):(g=Math.max(0,-(c*o+u)),m=g>0?o:Math.min(Math.max(-o,-h),o),y=-g*g+m*(m+2*h)+f);else m=c>0?-o:o,g=Math.max(0,-(c*m+u)),y=-g*g+m*(m+2*h)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Jh).addScaledVector(oc,m),y}intersectSphere(e,t){yr.subVectors(e.center,this.origin);const i=yr.dot(this.direction),s=yr.dot(yr)-i*i,o=e.radius*e.radius;if(s>o)return null;const c=Math.sqrt(o-s),u=i-c,h=i+c;return h<0?null:u<0?this.at(h,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,o,c,u,h;const f=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,m=this.origin;return f>=0?(i=(e.min.x-m.x)*f,s=(e.max.x-m.x)*f):(i=(e.max.x-m.x)*f,s=(e.min.x-m.x)*f),p>=0?(o=(e.min.y-m.y)*p,c=(e.max.y-m.y)*p):(o=(e.max.y-m.y)*p,c=(e.min.y-m.y)*p),i>c||o>s||((o>i||isNaN(i))&&(i=o),(c<s||isNaN(s))&&(s=c),g>=0?(u=(e.min.z-m.z)*g,h=(e.max.z-m.z)*g):(u=(e.max.z-m.z)*g,h=(e.min.z-m.z)*g),i>h||u>s)||((u>i||i!==i)&&(i=u),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,yr)!==null}intersectTriangle(e,t,i,s,o){ef.subVectors(t,e),lc.subVectors(i,e),tf.crossVectors(ef,lc);let c=this.direction.dot(tf),u;if(c>0){if(s)return null;u=1}else if(c<0)u=-1,c=-c;else return null;ns.subVectors(this.origin,e);const h=u*this.direction.dot(lc.crossVectors(ns,lc));if(h<0)return null;const f=u*this.direction.dot(ef.cross(ns));if(f<0||h+f>c)return null;const p=-u*ns.dot(tf);return p<0?null:this.at(p/c,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yc extends Xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tr,this.combine=Td,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const eg=new Yt,Us=new Od,cc=new Ys,tg=new Q,uc=new Q,hc=new Q,fc=new Q,nf=new Q,dc=new Q,ng=new Q,pc=new Q;class un extends xn{constructor(e=new cn,t=new Yc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(o&&u){dc.set(0,0,0);for(let h=0,f=o.length;h<f;h++){const p=u[h],g=o[h];p!==0&&(nf.fromBufferAttribute(g,e),c?dc.addScaledVector(nf,p):dc.addScaledVector(nf.sub(t),p))}t.add(dc)}return t}raycast(e,t){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cc.copy(i.boundingSphere),cc.applyMatrix4(o),Us.copy(e.ray).recast(e.near),!(cc.containsPoint(Us.origin)===!1&&(Us.intersectSphere(cc,tg)===null||Us.origin.distanceToSquared(tg)>(e.far-e.near)**2))&&(eg.copy(o).invert(),Us.copy(e.ray).applyMatrix4(eg),!(i.boundingBox!==null&&Us.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Us)))}_computeIntersections(e,t,i){let s;const o=this.geometry,c=this.material,u=o.index,h=o.attributes.position,f=o.attributes.uv,p=o.attributes.uv1,g=o.attributes.normal,m=o.groups,y=o.drawRange;if(u!==null)if(Array.isArray(c))for(let v=0,b=m.length;v<b;v++){const _=m[v],S=c[_.materialIndex],w=Math.max(_.start,y.start),E=Math.min(u.count,Math.min(_.start+_.count,y.start+y.count));for(let T=w,L=E;T<L;T+=3){const A=u.getX(T),I=u.getX(T+1),C=u.getX(T+2);s=mc(this,S,e,i,f,p,g,A,I,C),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const v=Math.max(0,y.start),b=Math.min(u.count,y.start+y.count);for(let _=v,S=b;_<S;_+=3){const w=u.getX(_),E=u.getX(_+1),T=u.getX(_+2);s=mc(this,c,e,i,f,p,g,w,E,T),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(c))for(let v=0,b=m.length;v<b;v++){const _=m[v],S=c[_.materialIndex],w=Math.max(_.start,y.start),E=Math.min(h.count,Math.min(_.start+_.count,y.start+y.count));for(let T=w,L=E;T<L;T+=3){const A=T,I=T+1,C=T+2;s=mc(this,S,e,i,f,p,g,A,I,C),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const v=Math.max(0,y.start),b=Math.min(h.count,y.start+y.count);for(let _=v,S=b;_<S;_+=3){const w=_,E=_+1,T=_+2;s=mc(this,c,e,i,f,p,g,w,E,T),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function FS(a,e,t,i,s,o,c,u){let h;if(e.side===ri?h=i.intersectTriangle(c,o,s,!0,u):h=i.intersectTriangle(s,o,c,e.side===ds,u),h===null)return null;pc.copy(u),pc.applyMatrix4(a.matrixWorld);const f=t.ray.origin.distanceTo(pc);return f<t.near||f>t.far?null:{distance:f,point:pc.clone(),object:a}}function mc(a,e,t,i,s,o,c,u,h,f){a.getVertexPosition(u,uc),a.getVertexPosition(h,hc),a.getVertexPosition(f,fc);const p=FS(a,e,t,i,uc,hc,fc,ng);if(p){const g=new Q;Vi.getBarycoord(ng,uc,hc,fc,g),s&&(p.uv=Vi.getInterpolatedAttribute(s,u,h,f,g,new ct)),o&&(p.uv1=Vi.getInterpolatedAttribute(o,u,h,f,g,new ct)),c&&(p.normal=Vi.getInterpolatedAttribute(c,u,h,f,g,new Q),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const m={a:u,b:h,c:f,normal:new Q,materialIndex:0};Vi.getNormal(uc,hc,fc,m.normal),p.face=m,p.barycoord=g}return p}class zd extends Vn{constructor(e=null,t=1,i=1,s,o,c,u,h,f=Un,p=Un,g,m){super(null,c,u,h,f,p,s,o,g,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ig extends yn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Aa=new Yt,rg=new Yt,gc=[],sg=new qs,US=new Yt,Lo=new un,Io=new Ys;class DS extends un{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ig(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,US)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Aa),sg.copy(e.boundingBox).applyMatrix4(Aa),this.boundingBox.union(sg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ys),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Aa),Io.copy(e.boundingSphere).applyMatrix4(Aa),this.boundingSphere.union(Io)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,o=i.length+1,c=e*o+1;for(let u=0;u<i.length;u++)i[u]=s[c+u]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Lo.geometry=this.geometry,Lo.material=this.material,Lo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Io.copy(this.boundingSphere),Io.applyMatrix4(i),e.ray.intersectsSphere(Io)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Aa),rg.multiplyMatrices(i,Aa),Lo.matrixWorld=rg,Lo.raycast(e,gc);for(let c=0,u=gc.length;c<u;c++){const h=gc[c];h.instanceId=o,h.object=this,t.push(h)}gc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ig(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new zd(new Float32Array(s*this.count),s,this.count,Pd,Wi));const o=this.morphTexture.source.data.data;let c=0;for(let f=0;f<i.length;f++)c+=i[f];const u=this.geometry.morphTargetsRelative?1:1-c,h=s*e;return o[h]=u,o.set(i,h+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const rf=new Q,kS=new Q,OS=new Mt;class Os{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=rf.subVectors(i,t).cross(kS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(rf),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return i===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||OS.getNormalMatrix(e),s=this.coplanarPoint(rf).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ds=new Ys,zS=new ct(.5,.5),xc=new Q;class Bd{constructor(e=new Os,t=new Os,i=new Os,s=new Os,o=new Os,c=new Os){this.planes=[e,t,i,s,o,c]}set(e,t,i,s,o,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(s),u[4].copy(o),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=tr,i=!1){const s=this.planes,o=e.elements,c=o[0],u=o[1],h=o[2],f=o[3],p=o[4],g=o[5],m=o[6],y=o[7],v=o[8],b=o[9],_=o[10],S=o[11],w=o[12],E=o[13],T=o[14],L=o[15];if(s[0].setComponents(f-c,y-p,S-v,L-w).normalize(),s[1].setComponents(f+c,y+p,S+v,L+w).normalize(),s[2].setComponents(f+u,y+g,S+b,L+E).normalize(),s[3].setComponents(f-u,y-g,S-b,L-E).normalize(),i)s[4].setComponents(h,m,_,T).normalize(),s[5].setComponents(f-h,y-m,S-_,L-T).normalize();else if(s[4].setComponents(f-h,y-m,S-_,L-T).normalize(),t===tr)s[5].setComponents(f+h,y+m,S+_,L+T).normalize();else if(t===qo)s[5].setComponents(h,m,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(e){Ds.center.set(0,0,0);const t=zS.distanceTo(e.center);return Ds.radius=.7071067811865476+t,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(xc.x=s.normal.x>0?e.max.x:e.min.x,xc.y=s.normal.y>0?e.max.y:e.min.y,xc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Go extends Xi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bc=new Q,Hc=new Q,ag=new Yt,No=new Od,vc=new Ys,sf=new Q,og=new Q;class zx extends xn{constructor(e=new cn,t=new Go){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,o=t.count;s<o;s++)Bc.fromBufferAttribute(t,s-1),Hc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Bc.distanceTo(Hc);e.setAttribute("lineDistance",new Qt(i,1))}else ft("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vc.copy(i.boundingSphere),vc.applyMatrix4(s),vc.radius+=o,e.ray.intersectsSphere(vc)===!1)return;ag.copy(s).invert(),No.copy(e.ray).applyMatrix4(ag);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,f=this.isLineSegments?2:1,p=i.index,m=i.attributes.position;if(p!==null){const y=Math.max(0,c.start),v=Math.min(p.count,c.start+c.count);for(let b=y,_=v-1;b<_;b+=f){const S=p.getX(b),w=p.getX(b+1),E=_c(this,e,No,h,S,w,b);E&&t.push(E)}if(this.isLineLoop){const b=p.getX(v-1),_=p.getX(y),S=_c(this,e,No,h,b,_,v-1);S&&t.push(S)}}else{const y=Math.max(0,c.start),v=Math.min(m.count,c.start+c.count);for(let b=y,_=v-1;b<_;b+=f){const S=_c(this,e,No,h,b,b+1,b);S&&t.push(S)}if(this.isLineLoop){const b=_c(this,e,No,h,v-1,y,v-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function _c(a,e,t,i,s,o,c){const u=a.geometry.attributes.position;if(Bc.fromBufferAttribute(u,s),Hc.fromBufferAttribute(u,o),t.distanceSqToSegment(Bc,Hc,sf,og)>i)return;sf.applyMatrix4(a.matrixWorld);const f=e.ray.origin.distanceTo(sf);if(!(f<e.near||f>e.far))return{distance:f,point:og.clone().applyMatrix4(a.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:a}}const lg=new Q,cg=new Q;class ud extends zx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,o=t.count;s<o;s+=2)lg.fromBufferAttribute(t,s),cg.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+lg.distanceTo(cg);e.setAttribute("lineDistance",new Qt(i,1))}else ft("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class us extends Xi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ug=new Yt,hd=new Od,yc=new Ys,Sc=new Q;class br extends xn{constructor(e=new cn,t=new us){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yc.copy(i.boundingSphere),yc.applyMatrix4(s),yc.radius+=o,e.ray.intersectsSphere(yc)===!1)return;ug.copy(s).invert(),hd.copy(e.ray).applyMatrix4(ug);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,f=i.index,g=i.attributes.position;if(f!==null){const m=Math.max(0,c.start),y=Math.min(f.count,c.start+c.count);for(let v=m,b=y;v<b;v++){const _=f.getX(v);Sc.fromBufferAttribute(g,_),hg(Sc,_,h,s,e,t,this)}}else{const m=Math.max(0,c.start),y=Math.min(g.count,c.start+c.count);for(let v=m,b=y;v<b;v++)Sc.fromBufferAttribute(g,v),hg(Sc,v,h,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function hg(a,e,t,i,s,o,c){const u=hd.distanceSqToPoint(a);if(u<t){const h=new Q;hd.closestPointToPoint(a,h),h.applyMatrix4(i);const f=s.ray.origin.distanceTo(h);if(f<s.near||f>s.far)return;o.push({distance:f,distanceToRay:Math.sqrt(u),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class BS extends Vn{constructor(e,t,i,s,o=gn,c=gn,u,h,f){super(e,t,i,s,o,c,u,h,f),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const p=this;function g(){p.needsUpdate=!0,p._requestVideoFrameCallbackId=e.requestVideoFrameCallback(g)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(g))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class Bx extends Vn{constructor(e=[],t=Vs,i,s,o,c,u,h,f,p){super(e,t,i,s,o,c,u,h,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ha extends Vn{constructor(e,t,i=sr,s,o,c,u=Un,h=Un,f,p=Er,g=1){if(p!==Er&&p!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:g};super(m,s,o,c,u,h,p,i,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class HS extends Ha{constructor(e,t=sr,i=Vs,s,o,c=Un,u=Un,h,f=Er){const p={width:e,height:e,depth:1},g=[p,p,p,p,p,p];super(e,e,t,i,s,o,c,u,h,f),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Hx extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xa extends cn{constructor(e=1,t=1,i=1,s=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:o,depthSegments:c};const u=this;s=Math.floor(s),o=Math.floor(o),c=Math.floor(c);const h=[],f=[],p=[],g=[];let m=0,y=0;v("z","y","x",-1,-1,i,t,e,c,o,0),v("z","y","x",1,-1,i,t,-e,c,o,1),v("x","z","y",1,1,e,i,t,s,c,2),v("x","z","y",1,-1,e,i,-t,s,c,3),v("x","y","z",1,-1,e,t,i,s,o,4),v("x","y","z",-1,-1,e,t,-i,s,o,5),this.setIndex(h),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(p,3)),this.setAttribute("uv",new Qt(g,2));function v(b,_,S,w,E,T,L,A,I,C,F){const z=T/I,D=L/C,H=T/2,ie=L/2,J=A/2,G=I+1,$=C+1;let K=0,W=0;const re=new Q;for(let ne=0;ne<$;ne++){const O=ne*D-ie;for(let q=0;q<G;q++){const ve=q*z-H;re[b]=ve*w,re[_]=O*E,re[S]=J,f.push(re.x,re.y,re.z),re[b]=0,re[_]=0,re[S]=A>0?1:-1,p.push(re.x,re.y,re.z),g.push(q/I),g.push(1-ne/C),K+=1}}for(let ne=0;ne<C;ne++)for(let O=0;O<I;O++){const q=m+O+G*ne,ve=m+O+G*(ne+1),be=m+(O+1)+G*(ne+1),de=m+(O+1)+G*ne;h.push(q,ve,de),h.push(ve,be,de),W+=6}u.addGroup(y,W,F),y+=W,m+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Hd extends cn{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const o=[],c=[];u(s),f(i),p(),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(o.slice(),3)),this.setAttribute("uv",new Qt(c,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function u(w){const E=new Q,T=new Q,L=new Q;for(let A=0;A<t.length;A+=3)y(t[A+0],E),y(t[A+1],T),y(t[A+2],L),h(E,T,L,w)}function h(w,E,T,L){const A=L+1,I=[];for(let C=0;C<=A;C++){I[C]=[];const F=w.clone().lerp(T,C/A),z=E.clone().lerp(T,C/A),D=A-C;for(let H=0;H<=D;H++)H===0&&C===A?I[C][H]=F:I[C][H]=F.clone().lerp(z,H/D)}for(let C=0;C<A;C++)for(let F=0;F<2*(A-C)-1;F++){const z=Math.floor(F/2);F%2===0?(m(I[C][z+1]),m(I[C+1][z]),m(I[C][z])):(m(I[C][z+1]),m(I[C+1][z+1]),m(I[C+1][z]))}}function f(w){const E=new Q;for(let T=0;T<o.length;T+=3)E.x=o[T+0],E.y=o[T+1],E.z=o[T+2],E.normalize().multiplyScalar(w),o[T+0]=E.x,o[T+1]=E.y,o[T+2]=E.z}function p(){const w=new Q;for(let E=0;E<o.length;E+=3){w.x=o[E+0],w.y=o[E+1],w.z=o[E+2];const T=_(w)/2/Math.PI+.5,L=S(w)/Math.PI+.5;c.push(T,1-L)}v(),g()}function g(){for(let w=0;w<c.length;w+=6){const E=c[w+0],T=c[w+2],L=c[w+4],A=Math.max(E,T,L),I=Math.min(E,T,L);A>.9&&I<.1&&(E<.2&&(c[w+0]+=1),T<.2&&(c[w+2]+=1),L<.2&&(c[w+4]+=1))}}function m(w){o.push(w.x,w.y,w.z)}function y(w,E){const T=w*3;E.x=e[T+0],E.y=e[T+1],E.z=e[T+2]}function v(){const w=new Q,E=new Q,T=new Q,L=new Q,A=new ct,I=new ct,C=new ct;for(let F=0,z=0;F<o.length;F+=9,z+=6){w.set(o[F+0],o[F+1],o[F+2]),E.set(o[F+3],o[F+4],o[F+5]),T.set(o[F+6],o[F+7],o[F+8]),A.set(c[z+0],c[z+1]),I.set(c[z+2],c[z+3]),C.set(c[z+4],c[z+5]),L.copy(w).add(E).add(T).divideScalar(3);const D=_(L);b(A,z+0,w,D),b(I,z+2,E,D),b(C,z+4,T,D)}}function b(w,E,T,L){L<0&&w.x===1&&(c[E]=w.x-1),T.x===0&&T.z===0&&(c[E]=L/2/Math.PI+.5)}function _(w){return Math.atan2(w.z,-w.x)}function S(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hd(e.vertices,e.indices,e.radius,e.detail)}}class Gd extends Hd{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Gd(e.radius,e.detail)}}class Cr extends cn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const o=e/2,c=t/2,u=Math.floor(i),h=Math.floor(s),f=u+1,p=h+1,g=e/u,m=t/h,y=[],v=[],b=[],_=[];for(let S=0;S<p;S++){const w=S*m-c;for(let E=0;E<f;E++){const T=E*g-o;v.push(T,-w,0),b.push(0,0,1),_.push(E/u),_.push(1-S/h)}}for(let S=0;S<h;S++)for(let w=0;w<u;w++){const E=w+f*S,T=w+f*(S+1),L=w+1+f*(S+1),A=w+1+f*S;y.push(E,T,A),y.push(T,L,A)}this.setIndex(y),this.setAttribute("position",new Qt(v,3)),this.setAttribute("normal",new Qt(b,3)),this.setAttribute("uv",new Qt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vd extends cn{constructor(e=1,t=.4,i=64,s=8,o=2,c=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:s,p:o,q:c},i=Math.floor(i),s=Math.floor(s);const u=[],h=[],f=[],p=[],g=new Q,m=new Q,y=new Q,v=new Q,b=new Q,_=new Q,S=new Q;for(let E=0;E<=i;++E){const T=E/i*o*Math.PI*2;w(T,o,c,e,y),w(T+.01,o,c,e,v),_.subVectors(v,y),S.addVectors(v,y),b.crossVectors(_,S),S.crossVectors(b,_),b.normalize(),S.normalize();for(let L=0;L<=s;++L){const A=L/s*Math.PI*2,I=-t*Math.cos(A),C=t*Math.sin(A);g.x=y.x+(I*S.x+C*b.x),g.y=y.y+(I*S.y+C*b.y),g.z=y.z+(I*S.z+C*b.z),h.push(g.x,g.y,g.z),m.subVectors(g,y).normalize(),f.push(m.x,m.y,m.z),p.push(E/i),p.push(L/s)}}for(let E=1;E<=i;E++)for(let T=1;T<=s;T++){const L=(s+1)*(E-1)+(T-1),A=(s+1)*E+(T-1),I=(s+1)*E+T,C=(s+1)*(E-1)+T;u.push(L,A,C),u.push(A,I,C)}this.setIndex(u),this.setAttribute("position",new Qt(h,3)),this.setAttribute("normal",new Qt(f,3)),this.setAttribute("uv",new Qt(p,2));function w(E,T,L,A,I){const C=Math.cos(E),F=Math.sin(E),z=L/T*E,D=Math.cos(z);I.x=A*(2+D)*.5*C,I.y=A*(2+D)*F*.5,I.z=A*Math.sin(z)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vd(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}function Ga(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const s=a[t][i];if(fg(s))s.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(fg(s[0])){const o=[];for(let c=0,u=s.length;c<u;c++)o[c]=s[c].clone();e[t][i]=o}else e[t][i]=s.slice();else e[t][i]=s}}return e}function qn(a){const e={};for(let t=0;t<a.length;t++){const i=Ga(a[t]);for(const s in i)e[s]=i[s]}return e}function fg(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function GS(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Gx(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const Gc={clone:Ga,merge:qn};var VS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends Xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VS,this.fragmentShader=WS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ga(e.uniforms),this.uniformsGroups=GS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class XS extends ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vx extends Xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dc,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jS extends Xi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new $e(16777215),this.specular=new $e(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dc,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tr,this.combine=Td,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qS extends Xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class YS extends Xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dg={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(pg(a)||(this.files[a]=e))},get:function(a){if(this.enabled!==!1&&!pg(a))return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};function pg(a){try{const e=a.slice(a.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class $S{constructor(e,t,i){const s=this;let o=!1,c=0,u=0,h;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(p){u++,o===!1&&s.onStart!==void 0&&s.onStart(p,c,u),o=!0},this.itemEnd=function(p){c++,s.onProgress!==void 0&&s.onProgress(p,c,u),c===u&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,g){return f.push(p,g),this},this.removeHandler=function(p){const g=f.indexOf(p);return g!==-1&&f.splice(g,2),this},this.getHandler=function(p){for(let g=0,m=f.length;g<m;g+=2){const y=f[g],v=f[g+1];if(y.global&&(y.lastIndex=0),y.test(p))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const KS=new $S;class Wd{constructor(e){this.manager=e!==void 0?e:KS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,o){i.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Wd.DEFAULT_MATERIAL_NAME="__DEFAULT";const Sr={};class ZS extends Error{constructor(e,t){super(e),this.response=t}}class QS extends Wd{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=dg.get(`file:${e}`);if(o!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0);return}if(Sr[e]!==void 0){Sr[e].push({onLoad:t,onProgress:i,onError:s});return}Sr[e]=[],Sr[e].push({onLoad:t,onProgress:i,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),u=this.mimeType,h=this.responseType;fetch(c).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&ft("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const p=Sr[e],g=f.body.getReader(),m=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),y=m?parseInt(m):0,v=y!==0;let b=0;const _=new ReadableStream({start(S){w();function w(){g.read().then(({done:E,value:T})=>{if(E)S.close();else{b+=T.byteLength;const L=new ProgressEvent("progress",{lengthComputable:v,loaded:b,total:y});for(let A=0,I=p.length;A<I;A++){const C=p[A];C.onProgress&&C.onProgress(L)}S.enqueue(T),w()}},E=>{S.error(E)})}}});return new Response(_)}else throw new ZS(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(h){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(p=>new DOMParser().parseFromString(p,u));case"json":return f.json();default:if(u==="")return f.text();{const g=/charset="?([^;"\s]*)"?/i.exec(u),m=g&&g[1]?g[1].toLowerCase():void 0,y=new TextDecoder(m);return f.arrayBuffer().then(v=>y.decode(v))}}}).then(f=>{dg.add(`file:${e}`,f);const p=Sr[e];delete Sr[e];for(let g=0,m=p.length;g<m;g++){const y=p[g];y.onLoad&&y.onLoad(f)}}).catch(f=>{const p=Sr[e];if(p===void 0)throw this.manager.itemError(e),f;delete Sr[e];for(let g=0,m=p.length;g<m;g++){const y=p[g];y.onError&&y.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Xd extends xn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const af=new Yt,mg=new Q,gg=new Q;class Wx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=pi,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bd,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;mg.setFromMatrixPosition(e.matrixWorld),t.position.copy(mg),gg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gg),t.updateMatrixWorld(),af.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(af,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===qo||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(af)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Mc=new Q,wc=new Wa,Qi=new Q;class Xx extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=tr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Mc,wc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mc,wc,Qi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Mc,wc,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mc,wc,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const is=new Q,xg=new ct,vg=new ct;class An extends Xx{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yo*2*Math.atan(Math.tan(Bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,t){return this.getViewBounds(e,xg,vg),t.subVectors(vg,xg)}setViewOffset(e,t,i,s,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,o=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,f=c.fullHeight;o+=c.offsetX*s/h,t-=c.offsetY*i/f,s*=c.width/h,i*=c.height/f}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class JS extends Wx{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0}}class Vc extends Xd{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new JS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class ja extends Xx{constructor(e=-1,t=1,i=1,s=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,c=i+e,u=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,c=o+f*this.view.width,u-=p*this.view.offsetY,h=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,c,u,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class eM extends Wx{constructor(){super(new ja(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class of extends Xd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new eM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class jx extends Xd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ra=-90,Pa=1;class tM extends xn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new An(Ra,Pa,e,t);s.layers=this.layers,this.add(s);const o=new An(Ra,Pa,e,t);o.layers=this.layers,this.add(o);const c=new An(Ra,Pa,e,t);c.layers=this.layers,this.add(c);const u=new An(Ra,Pa,e,t);u.layers=this.layers,this.add(u);const h=new An(Ra,Pa,e,t);h.layers=this.layers,this.add(h);const f=new An(Ra,Pa,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,o,c,u,h]=t;for(const f of t)this.remove(f);if(e===tr)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===qo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,c,u,h,f,p]=this.children,g=e.getRenderTarget(),m=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,1,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(i,3,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(i,4,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(g,m,y),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class nM extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class iM{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=rM.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function rM(){this._document.hidden===!1&&this.reset()}const Qd=class Qd{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const o=this.elements;return o[0]=e,o[2]=t,o[1]=i,o[3]=s,this}};Qd.prototype.isMatrix2=!0;let _g=Qd;function yg(a,e,t,i){const s=sM(i);switch(t){case Lx:return a*e;case Pd:return a*e/s.components*s.byteLength;case Ld:return a*e/s.components*s.byteLength;case Ws:return a*e*2/s.components*s.byteLength;case Id:return a*e*2/s.components*s.byteLength;case Ix:return a*e*3/s.components*s.byteLength;case mi:return a*e*4/s.components*s.byteLength;case Nd:return a*e*4/s.components*s.byteLength;case Ac:case Rc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Pc:case Lc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Ff:case Df:return Math.max(a,16)*Math.max(e,8)/4;case Nf:case Uf:return Math.max(a,8)*Math.max(e,8)/2;case kf:case Of:case Bf:case Hf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case zf:case Fc:case Gf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Vf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Wf:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Xf:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case jf:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case qf:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Yf:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case $f:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Kf:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Zf:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Qf:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Jf:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case ed:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case td:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case nd:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case id:case rd:case sd:return Math.ceil(a/4)*Math.ceil(e/4)*16;case ad:case od:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Uc:case ld:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function sM(a){switch(a){case pi:case Cx:return{byteLength:1,components:1};case Xo:case Ax:case gi:return{byteLength:2,components:1};case Ad:case Rd:return{byteLength:2,components:4};case sr:case Cd:case Wi:return{byteLength:4,components:1};case Rx:case Px:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ed}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ed);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qx(){let a=null,e=!1,t=null,i=null;function s(o,c){t(o,c),i=a.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&a!==null&&(i=a.requestAnimationFrame(s),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){a=o}}}function aM(a){const e=new WeakMap;function t(u,h){const f=u.array,p=u.usage,g=f.byteLength,m=a.createBuffer();a.bindBuffer(h,m),a.bufferData(h,f,p),u.onUploadCallback();let y;if(f instanceof Float32Array)y=a.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)y=a.HALF_FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?y=a.HALF_FLOAT:y=a.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=a.SHORT;else if(f instanceof Uint32Array)y=a.UNSIGNED_INT;else if(f instanceof Int32Array)y=a.INT;else if(f instanceof Int8Array)y=a.BYTE;else if(f instanceof Uint8Array)y=a.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:g}}function i(u,h,f){const p=h.array,g=h.updateRanges;if(a.bindBuffer(f,u),g.length===0)a.bufferSubData(f,0,p);else{g.sort((y,v)=>y.start-v.start);let m=0;for(let y=1;y<g.length;y++){const v=g[m],b=g[y];b.start<=v.start+v.count+1?v.count=Math.max(v.count,b.start+b.count-v.start):(++m,g[m]=b)}g.length=m+1;for(let y=0,v=g.length;y<v;y++){const b=g[y];a.bufferSubData(f,b.start*p.BYTES_PER_ELEMENT,p,b.start,b.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=e.get(u);h&&(a.deleteBuffer(h.buffer),e.delete(u))}function c(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const f=e.get(u);if(f===void 0)e.set(u,t(u,h));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,u,h),f.version=u.version}}return{get:s,remove:o,update:c}}var oM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lM=`#ifdef USE_ALPHAHASH
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
#endif`,cM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dM=`#ifdef USE_AOMAP
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
#endif`,pM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mM=`#ifdef USE_BATCHING
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
#endif`,gM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_M=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yM=`#ifdef USE_IRIDESCENCE
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
#endif`,SM=`#ifdef USE_BUMPMAP
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
#endif`,MM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,CM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,AM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,RM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,PM=`#define PI 3.141592653589793
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
} // validated`,LM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,IM=`vec3 transformedNormal = objectNormal;
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
#endif`,NM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,DM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kM="gl_FragColor = linearToOutputTexel( gl_FragColor );",OM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zM=`#ifdef USE_ENVMAP
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
#endif`,BM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,HM=`#ifdef USE_ENVMAP
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
#endif`,GM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VM=`#ifdef USE_ENVMAP
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
#endif`,WM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,YM=`#ifdef USE_GRADIENTMAP
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
}`,$M=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,JM=`#ifdef USE_ENVMAP
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
#endif`,ew=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rw=`PhysicalMaterial material;
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
#endif`,sw=`uniform sampler2D dfgLUT;
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
}`,aw=`
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
#endif`,ow=`#if defined( RE_IndirectDiffuse )
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
#endif`,lw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cw=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,uw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xw=`#if defined( USE_POINTS_UV )
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
#endif`,vw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_w=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ww=`#ifdef USE_MORPHTARGETS
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
#endif`,bw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ew=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Aw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pw=`#ifdef USE_NORMALMAP
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
#endif`,Lw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Iw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ow=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ww=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jw=`float getShadowMask() {
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
}`,qw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yw=`#ifdef USE_SKINNING
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
#endif`,$w=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kw=`#ifdef USE_SKINNING
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
#endif`,Zw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tb=`#ifdef USE_TRANSMISSION
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
#endif`,nb=`#ifdef USE_TRANSMISSION
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
#endif`,ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ab=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ob=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lb=`uniform sampler2D t2D;
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
}`,cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ub=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,db=`#include <common>
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
}`,pb=`#if DEPTH_PACKING == 3200
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
}`,mb=`#define DISTANCE
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
}`,gb=`#define DISTANCE
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
}`,xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_b=`uniform float scale;
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
}`,yb=`uniform vec3 diffuse;
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
}`,Sb=`#include <common>
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
}`,Mb=`uniform vec3 diffuse;
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
}`,wb=`#define LAMBERT
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
}`,bb=`#define LAMBERT
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
}`,Eb=`#define MATCAP
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
}`,Tb=`#define MATCAP
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
}`,Cb=`#define NORMAL
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
}`,Ab=`#define NORMAL
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
}`,Rb=`#define PHONG
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
}`,Pb=`#define PHONG
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
}`,Lb=`#define STANDARD
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
}`,Ib=`#define STANDARD
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
}`,Nb=`#define TOON
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
}`,Fb=`#define TOON
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
}`,Ub=`uniform float size;
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
}`,Db=`uniform vec3 diffuse;
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
}`,kb=`#include <common>
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
}`,Ob=`uniform vec3 color;
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
}`,zb=`uniform float rotation;
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
}`,Bb=`uniform vec3 diffuse;
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
}`,Et={alphahash_fragment:oM,alphahash_pars_fragment:lM,alphamap_fragment:cM,alphamap_pars_fragment:uM,alphatest_fragment:hM,alphatest_pars_fragment:fM,aomap_fragment:dM,aomap_pars_fragment:pM,batching_pars_vertex:mM,batching_vertex:gM,begin_vertex:xM,beginnormal_vertex:vM,bsdfs:_M,iridescence_fragment:yM,bumpmap_pars_fragment:SM,clipping_planes_fragment:MM,clipping_planes_pars_fragment:wM,clipping_planes_pars_vertex:bM,clipping_planes_vertex:EM,color_fragment:TM,color_pars_fragment:CM,color_pars_vertex:AM,color_vertex:RM,common:PM,cube_uv_reflection_fragment:LM,defaultnormal_vertex:IM,displacementmap_pars_vertex:NM,displacementmap_vertex:FM,emissivemap_fragment:UM,emissivemap_pars_fragment:DM,colorspace_fragment:kM,colorspace_pars_fragment:OM,envmap_fragment:zM,envmap_common_pars_fragment:BM,envmap_pars_fragment:HM,envmap_pars_vertex:GM,envmap_physical_pars_fragment:JM,envmap_vertex:VM,fog_vertex:WM,fog_pars_vertex:XM,fog_fragment:jM,fog_pars_fragment:qM,gradientmap_pars_fragment:YM,lightmap_pars_fragment:$M,lights_lambert_fragment:KM,lights_lambert_pars_fragment:ZM,lights_pars_begin:QM,lights_toon_fragment:ew,lights_toon_pars_fragment:tw,lights_phong_fragment:nw,lights_phong_pars_fragment:iw,lights_physical_fragment:rw,lights_physical_pars_fragment:sw,lights_fragment_begin:aw,lights_fragment_maps:ow,lights_fragment_end:lw,lightprobes_pars_fragment:cw,logdepthbuf_fragment:uw,logdepthbuf_pars_fragment:hw,logdepthbuf_pars_vertex:fw,logdepthbuf_vertex:dw,map_fragment:pw,map_pars_fragment:mw,map_particle_fragment:gw,map_particle_pars_fragment:xw,metalnessmap_fragment:vw,metalnessmap_pars_fragment:_w,morphinstance_vertex:yw,morphcolor_vertex:Sw,morphnormal_vertex:Mw,morphtarget_pars_vertex:ww,morphtarget_vertex:bw,normal_fragment_begin:Ew,normal_fragment_maps:Tw,normal_pars_fragment:Cw,normal_pars_vertex:Aw,normal_vertex:Rw,normalmap_pars_fragment:Pw,clearcoat_normal_fragment_begin:Lw,clearcoat_normal_fragment_maps:Iw,clearcoat_pars_fragment:Nw,iridescence_pars_fragment:Fw,opaque_fragment:Uw,packing:Dw,premultiplied_alpha_fragment:kw,project_vertex:Ow,dithering_fragment:zw,dithering_pars_fragment:Bw,roughnessmap_fragment:Hw,roughnessmap_pars_fragment:Gw,shadowmap_pars_fragment:Vw,shadowmap_pars_vertex:Ww,shadowmap_vertex:Xw,shadowmask_pars_fragment:jw,skinbase_vertex:qw,skinning_pars_vertex:Yw,skinning_vertex:$w,skinnormal_vertex:Kw,specularmap_fragment:Zw,specularmap_pars_fragment:Qw,tonemapping_fragment:Jw,tonemapping_pars_fragment:eb,transmission_fragment:tb,transmission_pars_fragment:nb,uv_pars_fragment:ib,uv_pars_vertex:rb,uv_vertex:sb,worldpos_vertex:ab,background_vert:ob,background_frag:lb,backgroundCube_vert:cb,backgroundCube_frag:ub,cube_vert:hb,cube_frag:fb,depth_vert:db,depth_frag:pb,distance_vert:mb,distance_frag:gb,equirect_vert:xb,equirect_frag:vb,linedashed_vert:_b,linedashed_frag:yb,meshbasic_vert:Sb,meshbasic_frag:Mb,meshlambert_vert:wb,meshlambert_frag:bb,meshmatcap_vert:Eb,meshmatcap_frag:Tb,meshnormal_vert:Cb,meshnormal_frag:Ab,meshphong_vert:Rb,meshphong_frag:Pb,meshphysical_vert:Lb,meshphysical_frag:Ib,meshtoon_vert:Nb,meshtoon_frag:Fb,points_vert:Ub,points_frag:Db,shadow_vert:kb,shadow_frag:Ob,sprite_vert:zb,sprite_frag:Bb},We={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},envMapRotation:{value:new Mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},er={basic:{uniforms:qn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:qn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:qn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:qn([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:qn([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new $e(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:qn([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:qn([We.points,We.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:qn([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:qn([We.common,We.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:qn([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:qn([We.sprite,We.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Mt}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distance:{uniforms:qn([We.common,We.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distance_vert,fragmentShader:Et.distance_frag},shadow:{uniforms:qn([We.lights,We.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};er.physical={uniforms:qn([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};const bc={r:0,b:0,g:0},Hb=new Yt,Yx=new Mt;Yx.set(-1,0,0,0,1,0,0,0,1);function Gb(a,e,t,i,s,o){const c=new $e(0);let u=s===!0?0:1,h,f,p=null,g=0,m=null;function y(w){let E=w.isScene===!0?w.background:null;if(E&&E.isTexture){const T=w.backgroundBlurriness>0;E=e.get(E,T)}return E}function v(w){let E=!1;const T=y(w);T===null?_(c,u):T&&T.isColor&&(_(T,1),E=!0);const L=a.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(a.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function b(w,E){const T=y(E);T&&(T.isCubeTexture||T.mapping===qc)?(f===void 0&&(f=new un(new Xa(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:Ga(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(L,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=T,f.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Hb.makeRotationFromEuler(E.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply(Yx),f.material.toneMapped=Pt.getTransfer(T.colorSpace)!==Vt,(p!==T||g!==T.version||m!==a.toneMapping)&&(f.material.needsUpdate=!0,p=T,g=T.version,m=a.toneMapping),f.layers.enableAll(),w.unshift(f,f.geometry,f.material,0,0,null)):T&&T.isTexture&&(h===void 0&&(h=new un(new Cr(2,2),new ln({name:"BackgroundMaterial",uniforms:Ga(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:ds,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=T,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.toneMapped=Pt.getTransfer(T.colorSpace)!==Vt,T.matrixAutoUpdate===!0&&T.updateMatrix(),h.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||g!==T.version||m!==a.toneMapping)&&(h.material.needsUpdate=!0,p=T,g=T.version,m=a.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null))}function _(w,E){w.getRGB(bc,Gx(a)),t.buffers.color.setClear(bc.r,bc.g,bc.b,E,o)}function S(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(w,E=1){c.set(w),u=E,_(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(w){u=w,_(c,u)},render:v,addToRenderList:b,dispose:S}}function Vb(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},s=m(null);let o=s,c=!1;function u(D,H,ie,J,G){let $=!1;const K=g(D,J,ie,H);o!==K&&(o=K,f(o.object)),$=y(D,J,ie,G),$&&v(D,J,ie,G),G!==null&&e.update(G,a.ELEMENT_ARRAY_BUFFER),($||c)&&(c=!1,T(D,H,ie,J),G!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function h(){return a.createVertexArray()}function f(D){return a.bindVertexArray(D)}function p(D){return a.deleteVertexArray(D)}function g(D,H,ie,J){const G=J.wireframe===!0;let $=i[H.id];$===void 0&&($={},i[H.id]=$);const K=D.isInstancedMesh===!0?D.id:0;let W=$[K];W===void 0&&(W={},$[K]=W);let re=W[ie.id];re===void 0&&(re={},W[ie.id]=re);let ne=re[G];return ne===void 0&&(ne=m(h()),re[G]=ne),ne}function m(D){const H=[],ie=[],J=[];for(let G=0;G<t;G++)H[G]=0,ie[G]=0,J[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ie,attributeDivisors:J,object:D,attributes:{},index:null}}function y(D,H,ie,J){const G=o.attributes,$=H.attributes;let K=0;const W=ie.getAttributes();for(const re in W)if(W[re].location>=0){const O=G[re];let q=$[re];if(q===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(q=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(q=D.instanceColor)),O===void 0||O.attribute!==q||q&&O.data!==q.data)return!0;K++}return o.attributesNum!==K||o.index!==J}function v(D,H,ie,J){const G={},$=H.attributes;let K=0;const W=ie.getAttributes();for(const re in W)if(W[re].location>=0){let O=$[re];O===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(O=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(O=D.instanceColor));const q={};q.attribute=O,O&&O.data&&(q.data=O.data),G[re]=q,K++}o.attributes=G,o.attributesNum=K,o.index=J}function b(){const D=o.newAttributes;for(let H=0,ie=D.length;H<ie;H++)D[H]=0}function _(D){S(D,0)}function S(D,H){const ie=o.newAttributes,J=o.enabledAttributes,G=o.attributeDivisors;ie[D]=1,J[D]===0&&(a.enableVertexAttribArray(D),J[D]=1),G[D]!==H&&(a.vertexAttribDivisor(D,H),G[D]=H)}function w(){const D=o.newAttributes,H=o.enabledAttributes;for(let ie=0,J=H.length;ie<J;ie++)H[ie]!==D[ie]&&(a.disableVertexAttribArray(ie),H[ie]=0)}function E(D,H,ie,J,G,$,K){K===!0?a.vertexAttribIPointer(D,H,ie,G,$):a.vertexAttribPointer(D,H,ie,J,G,$)}function T(D,H,ie,J){b();const G=J.attributes,$=ie.getAttributes(),K=H.defaultAttributeValues;for(const W in $){const re=$[W];if(re.location>=0){let ne=G[W];if(ne===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(ne=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(ne=D.instanceColor)),ne!==void 0){const O=ne.normalized,q=ne.itemSize,ve=e.get(ne);if(ve===void 0)continue;const be=ve.buffer,de=ve.type,Y=ve.bytesPerElement,me=de===a.INT||de===a.UNSIGNED_INT||ne.gpuType===Cd;if(ne.isInterleavedBufferAttribute){const pe=ne.data,Ie=pe.stride,Xe=ne.offset;if(pe.isInstancedInterleavedBuffer){for(let Oe=0;Oe<re.locationSize;Oe++)S(re.location+Oe,pe.meshPerAttribute);D.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Oe=0;Oe<re.locationSize;Oe++)_(re.location+Oe);a.bindBuffer(a.ARRAY_BUFFER,be);for(let Oe=0;Oe<re.locationSize;Oe++)E(re.location+Oe,q/re.locationSize,de,O,Ie*Y,(Xe+q/re.locationSize*Oe)*Y,me)}else{if(ne.isInstancedBufferAttribute){for(let pe=0;pe<re.locationSize;pe++)S(re.location+pe,ne.meshPerAttribute);D.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let pe=0;pe<re.locationSize;pe++)_(re.location+pe);a.bindBuffer(a.ARRAY_BUFFER,be);for(let pe=0;pe<re.locationSize;pe++)E(re.location+pe,q/re.locationSize,de,O,q*Y,q/re.locationSize*pe*Y,me)}}else if(K!==void 0){const O=K[W];if(O!==void 0)switch(O.length){case 2:a.vertexAttrib2fv(re.location,O);break;case 3:a.vertexAttrib3fv(re.location,O);break;case 4:a.vertexAttrib4fv(re.location,O);break;default:a.vertexAttrib1fv(re.location,O)}}}}w()}function L(){F();for(const D in i){const H=i[D];for(const ie in H){const J=H[ie];for(const G in J){const $=J[G];for(const K in $)p($[K].object),delete $[K];delete J[G]}}delete i[D]}}function A(D){if(i[D.id]===void 0)return;const H=i[D.id];for(const ie in H){const J=H[ie];for(const G in J){const $=J[G];for(const K in $)p($[K].object),delete $[K];delete J[G]}}delete i[D.id]}function I(D){for(const H in i){const ie=i[H];for(const J in ie){const G=ie[J];if(G[D.id]===void 0)continue;const $=G[D.id];for(const K in $)p($[K].object),delete $[K];delete G[D.id]}}}function C(D){for(const H in i){const ie=i[H],J=D.isInstancedMesh===!0?D.id:0,G=ie[J];if(G!==void 0){for(const $ in G){const K=G[$];for(const W in K)p(K[W].object),delete K[W];delete G[$]}delete ie[J],Object.keys(ie).length===0&&delete i[H]}}}function F(){z(),c=!0,o!==s&&(o=s,f(o.object))}function z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:F,resetDefaultState:z,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfObject:C,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:_,disableUnusedAttributes:w}}function Wb(a,e,t){let i;function s(h){i=h}function o(h,f){a.drawArrays(i,h,f),t.update(f,i,1)}function c(h,f,p){p!==0&&(a.drawArraysInstanced(i,h,f,p),t.update(f,i,p))}function u(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,f,0,p);let m=0;for(let y=0;y<p;y++)m+=f[y];t.update(m,i,1)}this.setMode=s,this.render=o,this.renderInstances=c,this.renderMultiDraw=u}function Xb(a,e,t,i){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=a.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(I){return!(I!==mi&&i.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(I){const C=I===gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==pi&&i.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Wi&&!C)}function h(I){if(I==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const p=h(f);p!==f&&(ft("WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const g=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),v=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=a.getParameter(a.MAX_TEXTURE_SIZE),_=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),S=a.getParameter(a.MAX_VERTEX_ATTRIBS),w=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),E=a.getParameter(a.MAX_VARYING_VECTORS),T=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),L=a.getParameter(a.MAX_SAMPLES),A=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:g,reversedDepthBuffer:m,maxTextures:y,maxVertexTextures:v,maxTextureSize:b,maxCubemapSize:_,maxAttributes:S,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:T,maxSamples:L,samples:A}}function jb(a){const e=this;let t=null,i=0,s=!1,o=!1;const c=new Os,u=new Mt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,m){const y=g.length!==0||m||i!==0||s;return s=m,i=g.length,y},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,m){t=p(g,m,0)},this.setState=function(g,m,y){const v=g.clippingPlanes,b=g.clipIntersection,_=g.clipShadows,S=a.get(g);if(!s||v===null||v.length===0||o&&!_)o?p(null):f();else{const w=o?0:i,E=w*4;let T=S.clippingState||null;h.value=T,T=p(v,m,E,y);for(let L=0;L!==E;++L)T[L]=t[L];S.clippingState=T,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=w}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(g,m,y,v){const b=g!==null?g.length:0;let _=null;if(b!==0){if(_=h.value,v!==!0||_===null){const S=y+b*4,w=m.matrixWorldInverse;u.getNormalMatrix(w),(_===null||_.length<S)&&(_=new Float32Array(S));for(let E=0,T=y;E!==b;++E,T+=4)c.copy(g[E]).applyMatrix4(w,u),c.normal.toArray(_,T),_[T+3]=c.constant}h.value=_,h.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,_}}const hs=4,Sg=[.125,.215,.35,.446,.526,.582],Bs=20,qb=256,Fo=new ja,Mg=new $e;let lf=null,cf=0,uf=0,hf=!1;const Yb=new Q;class wg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,o={}){const{size:c=256,position:u=Yb}=o;lf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),uf=this._renderer.getActiveMipmapLevel(),hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,i,s,h,u),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lf,cf,uf),this._renderer.xr.enabled=hf,e.scissorTest=!1,La(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Vs||e.mapping===Ba?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),uf=this._renderer.getActiveMipmapLevel(),hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:gi,format:mi,colorSpace:kc,depthBuffer:!1},s=bg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bg(e,t,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$b(o)),this._blurMaterial=Zb(o,e,t),this._ggxMaterial=Kb(o,e,t)}return s}_compileMaterial(e){const t=new un(new cn,e);this._renderer.compile(t,Fo)}_sceneToCubeUV(e,t,i,s,o){const h=new An(90,1,t,i),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,m=g.autoClear,y=g.toneMapping;g.getClearColor(Mg),g.toneMapping=rr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new un(new Xa,new Yc({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,_=b.material;let S=!1;const w=e.background;w?w.isColor&&(_.color.copy(w),e.background=null,S=!0):(_.color.copy(Mg),S=!0);for(let E=0;E<6;E++){const T=E%3;T===0?(h.up.set(0,f[E],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x+p[E],o.y,o.z)):T===1?(h.up.set(0,0,f[E]),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y+p[E],o.z)):(h.up.set(0,f[E],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y,o.z+p[E]));const L=this._cubeSize;La(s,T*L,E>2?L:0,L,L),g.setRenderTarget(s),S&&g.render(b,h),g.render(e,h)}g.toneMapping=y,g.autoClear=m,e.background=w}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Vs||e.mapping===Ba;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eg());const o=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=o;const u=o.uniforms;u.envMap.value=e;const h=this._cubeSize;La(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(c,Fo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,o=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[i];u.material=c;const h=c.uniforms,f=i/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),g=Math.sqrt(f*f-p*p),m=0+f*1.25,y=g*m,{_lodMax:v}=this,b=this._sizeLods[i],_=3*b*(i>v-hs?i-v+hs:0),S=4*(this._cubeSize-b);h.envMap.value=e.texture,h.roughness.value=y,h.mipInt.value=v-t,La(o,_,S,3*b,2*b),s.setRenderTarget(o),s.render(u,Fo),h.envMap.value=o.texture,h.roughness.value=0,h.mipInt.value=v-i,La(e,_,S,3*b,2*b),s.setRenderTarget(e),s.render(u,Fo)}_blur(e,t,i,s,o){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",o),this._halfBlur(c,e,i,i,s,"longitudinal",o)}_halfBlur(e,t,i,s,o,c,u){const h=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Ft("blur direction must be either latitudinal or longitudinal!");const p=3,g=this._lodMeshes[s];g.material=f;const m=f.uniforms,y=this._sizeLods[i]-1,v=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*Bs-1),b=o/v,_=isFinite(o)?1+Math.floor(p*b):Bs;_>Bs&&ft(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Bs}`);const S=[];let w=0;for(let I=0;I<Bs;++I){const C=I/b,F=Math.exp(-C*C/2);S.push(F),I===0?w+=F:I<_&&(w+=2*F)}for(let I=0;I<S.length;I++)S[I]=S[I]/w;m.envMap.value=e.texture,m.samples.value=_,m.weights.value=S,m.latitudinal.value=c==="latitudinal",u&&(m.poleAxis.value=u);const{_lodMax:E}=this;m.dTheta.value=v,m.mipInt.value=E-i;const T=this._sizeLods[s],L=3*T*(s>E-hs?s-E+hs:0),A=4*(this._cubeSize-T);La(t,L,A,3*T,2*T),h.setRenderTarget(t),h.render(g,Fo)}}function $b(a){const e=[],t=[],i=[];let s=a;const o=a-hs+1+Sg.length;for(let c=0;c<o;c++){const u=Math.pow(2,s);e.push(u);let h=1/u;c>a-hs?h=Sg[c-a+hs-1]:c===0&&(h=0),t.push(h);const f=1/(u-2),p=-f,g=1+f,m=[p,p,g,p,g,g,p,p,g,g,p,g],y=6,v=6,b=3,_=2,S=1,w=new Float32Array(b*v*y),E=new Float32Array(_*v*y),T=new Float32Array(S*v*y);for(let A=0;A<y;A++){const I=A%3*2/3-1,C=A>2?0:-1,F=[I,C,0,I+2/3,C,0,I+2/3,C+1,0,I,C,0,I+2/3,C+1,0,I,C+1,0];w.set(F,b*v*A),E.set(m,_*v*A);const z=[A,A,A,A,A,A];T.set(z,S*v*A)}const L=new cn;L.setAttribute("position",new yn(w,b)),L.setAttribute("uv",new yn(E,_)),L.setAttribute("faceIndex",new yn(T,S)),i.push(new un(L,null)),s>hs&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function bg(a,e,t){const i=new si(a,e,t);return i.texture.mapping=qc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function La(a,e,t,i,s){a.viewport.set(e,t,i,s),a.scissor.set(e,t,i,s)}function Kb(a,e,t){return new ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$c(),fragmentShader:`

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
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Zb(a,e,t){const i=new Float32Array(Bs),s=new Q(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$c(),fragmentShader:`

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
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Eg(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$c(),fragmentShader:`

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
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Tg(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$c(),fragmentShader:`

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
	`}class $x extends si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Bx(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xa(5,5,5),o=new ln({name:"CubemapFromEquirect",uniforms:Ga(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ri,blending:ir});o.uniforms.tEquirect.value=t;const c=new un(s,o),u=t.minFilter;return t.minFilter===Hs&&(t.minFilter=gn),new tM(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(o)}}function Qb(a){let e=new WeakMap,t=new WeakMap,i=null;function s(m,y=!1){return m==null?null:y?c(m):o(m)}function o(m){if(m&&m.isTexture){const y=m.mapping;if(y===Nh||y===Fh)if(e.has(m)){const v=e.get(m).texture;return u(v,m.mapping)}else{const v=m.image;if(v&&v.height>0){const b=new $x(v.height);return b.fromEquirectangularTexture(a,m),e.set(m,b),m.addEventListener("dispose",f),u(b.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const y=m.mapping,v=y===Nh||y===Fh,b=y===Vs||y===Ba;if(v||b){let _=t.get(m);const S=_!==void 0?_.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==S)return i===null&&(i=new wg(a)),_=v?i.fromEquirectangular(m,_):i.fromCubemap(m,_),_.texture.pmremVersion=m.pmremVersion,t.set(m,_),_.texture;if(_!==void 0)return _.texture;{const w=m.image;return v&&w&&w.height>0||b&&w&&h(w)?(i===null&&(i=new wg(a)),_=v?i.fromEquirectangular(m):i.fromCubemap(m),_.texture.pmremVersion=m.pmremVersion,t.set(m,_),m.addEventListener("dispose",p),_.texture):null}}}return m}function u(m,y){return y===Nh?m.mapping=Vs:y===Fh&&(m.mapping=Ba),m}function h(m){let y=0;const v=6;for(let b=0;b<v;b++)m[b]!==void 0&&y++;return y===v}function f(m){const y=m.target;y.removeEventListener("dispose",f);const v=e.get(y);v!==void 0&&(e.delete(y),v.dispose())}function p(m){const y=m.target;y.removeEventListener("dispose",p);const v=t.get(y);v!==void 0&&(t.delete(y),v.dispose())}function g(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:g}}function Jb(a){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=a.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&cd("WebGLRenderer: "+i+" extension not supported."),s}}}function e2(a,e,t,i){const s={},o=new WeakMap;function c(g){const m=g.target;m.index!==null&&e.remove(m.index);for(const v in m.attributes)e.remove(m.attributes[v]);m.removeEventListener("dispose",c),delete s[m.id];const y=o.get(m);y&&(e.remove(y),o.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function u(g,m){return s[m.id]===!0||(m.addEventListener("dispose",c),s[m.id]=!0,t.memory.geometries++),m}function h(g){const m=g.attributes;for(const y in m)e.update(m[y],a.ARRAY_BUFFER)}function f(g){const m=[],y=g.index,v=g.attributes.position;let b=0;if(v===void 0)return;if(y!==null){const w=y.array;b=y.version;for(let E=0,T=w.length;E<T;E+=3){const L=w[E+0],A=w[E+1],I=w[E+2];m.push(L,A,A,I,I,L)}}else{const w=v.array;b=v.version;for(let E=0,T=w.length/3-1;E<T;E+=3){const L=E+0,A=E+1,I=E+2;m.push(L,A,A,I,I,L)}}const _=new(v.count>=65535?Ox:kx)(m,1);_.version=b;const S=o.get(g);S&&e.remove(S),o.set(g,_)}function p(g){const m=o.get(g);if(m){const y=g.index;y!==null&&m.version<y.version&&f(g)}else f(g);return o.get(g)}return{get:u,update:h,getWireframeAttribute:p}}function t2(a,e,t){let i;function s(g){i=g}let o,c;function u(g){o=g.type,c=g.bytesPerElement}function h(g,m){a.drawElements(i,m,o,g*c),t.update(m,i,1)}function f(g,m,y){y!==0&&(a.drawElementsInstanced(i,m,o,g*c,y),t.update(m,i,y))}function p(g,m,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,o,g,0,y);let b=0;for(let _=0;_<y;_++)b+=m[_];t.update(b,i,1)}this.setMode=s,this.setIndex=u,this.render=h,this.renderInstances=f,this.renderMultiDraw=p}function n2(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,c,u){switch(t.calls++,c){case a.TRIANGLES:t.triangles+=u*(o/3);break;case a.LINES:t.lines+=u*(o/2);break;case a.LINE_STRIP:t.lines+=u*(o-1);break;case a.LINE_LOOP:t.lines+=u*o;break;case a.POINTS:t.points+=u*o;break;default:Ft("WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function i2(a,e,t){const i=new WeakMap,s=new sn;function o(c,u,h){const f=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let m=i.get(u);if(m===void 0||m.count!==g){let F=function(){I.dispose(),i.delete(u),u.removeEventListener("dispose",F)};m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,b=u.morphAttributes.color!==void 0,_=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let E=0;y===!0&&(E=1),v===!0&&(E=2),b===!0&&(E=3);let T=u.attributes.position.count*E,L=1;T>e.maxTextureSize&&(L=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const A=new Float32Array(T*L*4*g),I=new Fx(A,T,L,g);I.type=Wi,I.needsUpdate=!0;const C=E*4;for(let z=0;z<g;z++){const D=_[z],H=S[z],ie=w[z],J=T*L*4*z;for(let G=0;G<D.count;G++){const $=G*C;y===!0&&(s.fromBufferAttribute(D,G),A[J+$+0]=s.x,A[J+$+1]=s.y,A[J+$+2]=s.z,A[J+$+3]=0),v===!0&&(s.fromBufferAttribute(H,G),A[J+$+4]=s.x,A[J+$+5]=s.y,A[J+$+6]=s.z,A[J+$+7]=0),b===!0&&(s.fromBufferAttribute(ie,G),A[J+$+8]=s.x,A[J+$+9]=s.y,A[J+$+10]=s.z,A[J+$+11]=ie.itemSize===4?s.w:1)}}m={count:g,texture:I,size:new ct(T,L)},i.set(u,m),u.addEventListener("dispose",F)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(a,"morphTexture",c.morphTexture,t);else{let y=0;for(let b=0;b<f.length;b++)y+=f[b];const v=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(a,"morphTargetBaseInfluence",v),h.getUniforms().setValue(a,"morphTargetInfluences",f)}h.getUniforms().setValue(a,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(a,"morphTargetsTextureSize",m.size)}return{update:o}}function r2(a,e,t,i,s){let o=new WeakMap;function c(f){const p=s.render.frame,g=f.geometry,m=e.get(f,g);if(o.get(m)!==p&&(e.update(m),o.set(m,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),o.get(f)!==p&&(t.update(f.instanceMatrix,a.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,a.ARRAY_BUFFER),o.set(f,p))),f.isSkinnedMesh){const y=f.skeleton;o.get(y)!==p&&(y.update(),o.set(y,p))}return m}function u(){o=new WeakMap}function h(f){const p=f.target;p.removeEventListener("dispose",h),i.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:c,dispose:u}}const s2={[_x]:"LINEAR_TONE_MAPPING",[yx]:"REINHARD_TONE_MAPPING",[Sx]:"CINEON_TONE_MAPPING",[Mx]:"ACES_FILMIC_TONE_MAPPING",[bx]:"AGX_TONE_MAPPING",[Ex]:"NEUTRAL_TONE_MAPPING",[wx]:"CUSTOM_TONE_MAPPING"};function a2(a,e,t,i,s){const o=new si(e,t,{type:a,depthBuffer:i,stencilBuffer:s,depthTexture:i?new Ha(e,t):void 0}),c=new si(e,t,{type:gi,depthBuffer:!1,stencilBuffer:!1}),u=new cn;u.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Qt([0,2,0,0,2,0],2));const h=new XS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new un(u,h),p=new ja(-1,1,1,-1,0,1);let g=null,m=null,y=!1,v,b=null,_=[],S=!1;this.setSize=function(w,E){o.setSize(w,E),c.setSize(w,E);for(let T=0;T<_.length;T++){const L=_[T];L.setSize&&L.setSize(w,E)}},this.setEffects=function(w){_=w,S=_.length>0&&_[0].isRenderPass===!0;const E=o.width,T=o.height;for(let L=0;L<_.length;L++){const A=_[L];A.setSize&&A.setSize(E,T)}},this.begin=function(w,E){if(y||w.toneMapping===rr&&_.length===0)return!1;if(b=E,E!==null){const T=E.width,L=E.height;(o.width!==T||o.height!==L)&&this.setSize(T,L)}return S===!1&&w.setRenderTarget(o),v=w.toneMapping,w.toneMapping=rr,!0},this.hasRenderPass=function(){return S},this.end=function(w,E){w.toneMapping=v,y=!0;let T=o,L=c;for(let A=0;A<_.length;A++){const I=_[A];if(I.enabled!==!1&&(I.render(w,L,T,E),I.needsSwap!==!1)){const C=T;T=L,L=C}}if(g!==w.outputColorSpace||m!==w.toneMapping){g=w.outputColorSpace,m=w.toneMapping,h.defines={},Pt.getTransfer(g)===Vt&&(h.defines.SRGB_TRANSFER="");const A=s2[m];A&&(h.defines[A]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,w.setRenderTarget(b),w.render(f,p),b=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),c.dispose(),u.dispose(),h.dispose()}}const Kx=new Vn,fd=new Ha(1,1),Zx=new Fx,Qx=new MS,Jx=new Bx,Cg=[],Ag=[],Rg=new Float32Array(16),Pg=new Float32Array(9),Lg=new Float32Array(4);function qa(a,e,t){const i=a[0];if(i<=0||i>0)return a;const s=e*t;let o=Cg[s];if(o===void 0&&(o=new Float32Array(s),Cg[s]=o),e!==0){i.toArray(o,0);for(let c=1,u=0;c!==e;++c)u+=t,a[c].toArray(o,u)}return o}function Mn(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function wn(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function Kc(a,e){let t=Ag[e];t===void 0&&(t=new Int32Array(e),Ag[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function o2(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function l2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;a.uniform2fv(this.addr,e),wn(t,e)}}function c2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mn(t,e))return;a.uniform3fv(this.addr,e),wn(t,e)}}function u2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;a.uniform4fv(this.addr,e),wn(t,e)}}function h2(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mn(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),wn(t,e)}else{if(Mn(t,i))return;Lg.set(i),a.uniformMatrix2fv(this.addr,!1,Lg),wn(t,i)}}function f2(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mn(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),wn(t,e)}else{if(Mn(t,i))return;Pg.set(i),a.uniformMatrix3fv(this.addr,!1,Pg),wn(t,i)}}function d2(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mn(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),wn(t,e)}else{if(Mn(t,i))return;Rg.set(i),a.uniformMatrix4fv(this.addr,!1,Rg),wn(t,i)}}function p2(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function m2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;a.uniform2iv(this.addr,e),wn(t,e)}}function g2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;a.uniform3iv(this.addr,e),wn(t,e)}}function x2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;a.uniform4iv(this.addr,e),wn(t,e)}}function v2(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function _2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;a.uniform2uiv(this.addr,e),wn(t,e)}}function y2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;a.uniform3uiv(this.addr,e),wn(t,e)}}function S2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;a.uniform4uiv(this.addr,e),wn(t,e)}}function M2(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s);let o;this.type===a.SAMPLER_2D_SHADOW?(fd.compareFunction=t.isReversedDepthBuffer()?Ud:Fd,o=fd):o=Kx,t.setTexture2D(e||o,s)}function w2(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Qx,s)}function b2(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Jx,s)}function E2(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Zx,s)}function T2(a){switch(a){case 5126:return o2;case 35664:return l2;case 35665:return c2;case 35666:return u2;case 35674:return h2;case 35675:return f2;case 35676:return d2;case 5124:case 35670:return p2;case 35667:case 35671:return m2;case 35668:case 35672:return g2;case 35669:case 35673:return x2;case 5125:return v2;case 36294:return _2;case 36295:return y2;case 36296:return S2;case 35678:case 36198:case 36298:case 36306:case 35682:return M2;case 35679:case 36299:case 36307:return w2;case 35680:case 36300:case 36308:case 36293:return b2;case 36289:case 36303:case 36311:case 36292:return E2}}function C2(a,e){a.uniform1fv(this.addr,e)}function A2(a,e){const t=qa(e,this.size,2);a.uniform2fv(this.addr,t)}function R2(a,e){const t=qa(e,this.size,3);a.uniform3fv(this.addr,t)}function P2(a,e){const t=qa(e,this.size,4);a.uniform4fv(this.addr,t)}function L2(a,e){const t=qa(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function I2(a,e){const t=qa(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function N2(a,e){const t=qa(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function F2(a,e){a.uniform1iv(this.addr,e)}function U2(a,e){a.uniform2iv(this.addr,e)}function D2(a,e){a.uniform3iv(this.addr,e)}function k2(a,e){a.uniform4iv(this.addr,e)}function O2(a,e){a.uniform1uiv(this.addr,e)}function z2(a,e){a.uniform2uiv(this.addr,e)}function B2(a,e){a.uniform3uiv(this.addr,e)}function H2(a,e){a.uniform4uiv(this.addr,e)}function G2(a,e,t){const i=this.cache,s=e.length,o=Kc(t,s);Mn(i,o)||(a.uniform1iv(this.addr,o),wn(i,o));let c;this.type===a.SAMPLER_2D_SHADOW?c=fd:c=Kx;for(let u=0;u!==s;++u)t.setTexture2D(e[u]||c,o[u])}function V2(a,e,t){const i=this.cache,s=e.length,o=Kc(t,s);Mn(i,o)||(a.uniform1iv(this.addr,o),wn(i,o));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||Qx,o[c])}function W2(a,e,t){const i=this.cache,s=e.length,o=Kc(t,s);Mn(i,o)||(a.uniform1iv(this.addr,o),wn(i,o));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||Jx,o[c])}function X2(a,e,t){const i=this.cache,s=e.length,o=Kc(t,s);Mn(i,o)||(a.uniform1iv(this.addr,o),wn(i,o));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||Zx,o[c])}function j2(a){switch(a){case 5126:return C2;case 35664:return A2;case 35665:return R2;case 35666:return P2;case 35674:return L2;case 35675:return I2;case 35676:return N2;case 5124:case 35670:return F2;case 35667:case 35671:return U2;case 35668:case 35672:return D2;case 35669:case 35673:return k2;case 5125:return O2;case 36294:return z2;case 36295:return B2;case 36296:return H2;case 35678:case 36198:case 36298:case 36306:case 35682:return G2;case 35679:case 36299:case 36307:return V2;case 35680:case 36300:case 36308:case 36293:return W2;case 36289:case 36303:case 36311:case 36292:return X2}}class q2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=T2(t.type)}}class Y2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=j2(t.type)}}class $2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let o=0,c=s.length;o!==c;++o){const u=s[o];u.setValue(e,t[u.id],i)}}}const ff=/(\w+)(\])?(\[|\.)?/g;function Ig(a,e){a.seq.push(e),a.map[e.id]=e}function K2(a,e,t){const i=a.name,s=i.length;for(ff.lastIndex=0;;){const o=ff.exec(i),c=ff.lastIndex;let u=o[1];const h=o[2]==="]",f=o[3];if(h&&(u=u|0),f===void 0||f==="["&&c+2===s){Ig(t,f===void 0?new q2(u,a,e):new Y2(u,a,e));break}else{let g=t.map[u];g===void 0&&(g=new $2(u),Ig(t,g)),t=g}}}class Ic{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const u=e.getActiveUniform(t,c),h=e.getUniformLocation(t,u.name);K2(u,h,this)}const s=[],o=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(c):o.push(c);s.length>0&&(this.seq=s.concat(o))}setValue(e,t,i,s){const o=this.map[t];o!==void 0&&o.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let o=0,c=t.length;o!==c;++o){const u=t[o],h=i[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,o=e.length;s!==o;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function Ng(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}const Z2=37297;let Q2=0;function J2(a,e){const t=a.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=s;c<o;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const Fg=new Mt;function eE(a){Pt._getMatrix(Fg,Pt.workingColorSpace,a);const e=`mat3( ${Fg.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(a)){case Oc:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Ug(a,e,t){const i=a.getShaderParameter(e,a.COMPILE_STATUS),o=(a.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+o+`

`+J2(a.getShaderSource(e),u)}else return o}function tE(a,e){const t=eE(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const nE={[_x]:"Linear",[yx]:"Reinhard",[Sx]:"Cineon",[Mx]:"ACESFilmic",[bx]:"AgX",[Ex]:"Neutral",[wx]:"Custom"};function iE(a,e){const t=nE[e];return t===void 0?(ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ec=new Q;function rE(){Pt.getLuminanceCoefficients(Ec);const a=Ec.x.toFixed(4),e=Ec.y.toFixed(4),t=Ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sE(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function aE(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function oE(a,e){const t={},i=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=a.getActiveAttrib(e,s),c=o.name;let u=1;o.type===a.FLOAT_MAT2&&(u=2),o.type===a.FLOAT_MAT3&&(u=3),o.type===a.FLOAT_MAT4&&(u=4),t[c]={type:o.type,location:a.getAttribLocation(e,c),locationSize:u}}return t}function zo(a){return a!==""}function Dg(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kg(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lE=/^[ \t]*#include +<([\w\d./]+)>/gm;function dd(a){return a.replace(lE,uE)}const cE=new Map;function uE(a,e){let t=Et[e];if(t===void 0){const i=cE.get(e);if(i!==void 0)t=Et[i],ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return dd(t)}const hE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Og(a){return a.replace(hE,fE)}function fE(a,e,t,i){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function zg(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const dE={[Cc]:"SHADOWMAP_TYPE_PCF",[Oo]:"SHADOWMAP_TYPE_VSM"};function pE(a){return dE[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mE={[Vs]:"ENVMAP_TYPE_CUBE",[Ba]:"ENVMAP_TYPE_CUBE",[qc]:"ENVMAP_TYPE_CUBE_UV"};function gE(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":mE[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const xE={[Ba]:"ENVMAP_MODE_REFRACTION"};function vE(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":xE[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const _E={[Td]:"ENVMAP_BLENDING_MULTIPLY",[By]:"ENVMAP_BLENDING_MIX",[Hy]:"ENVMAP_BLENDING_ADD"};function yE(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":_E[a.combine]||"ENVMAP_BLENDING_NONE"}function SE(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function ME(a,e,t,i){const s=a.getContext(),o=t.defines;let c=t.vertexShader,u=t.fragmentShader;const h=pE(t),f=gE(t),p=vE(t),g=yE(t),m=SE(t),y=sE(t),v=aE(o),b=s.createProgram();let _,S,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(zo).join(`
`),_.length>0&&(_+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(zo).join(`
`),S.length>0&&(S+=`
`)):(_=[zg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),S=[zg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==rr?"#define TONE_MAPPING":"",t.toneMapping!==rr?Et.tonemapping_pars_fragment:"",t.toneMapping!==rr?iE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,tE("linearToOutputTexel",t.outputColorSpace),rE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zo).join(`
`)),c=dd(c),c=Dg(c,t),c=kg(c,t),u=dd(u),u=Dg(u,t),u=kg(u,t),c=Og(c),u=Og(u),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,_=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,S=["#define varying in",t.glslVersion===z0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===z0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const E=w+_+c,T=w+S+u,L=Ng(s,s.VERTEX_SHADER,E),A=Ng(s,s.FRAGMENT_SHADER,T);s.attachShader(b,L),s.attachShader(b,A),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function I(D){if(a.debug.checkShaderErrors){const H=s.getProgramInfoLog(b)||"",ie=s.getShaderInfoLog(L)||"",J=s.getShaderInfoLog(A)||"",G=H.trim(),$=ie.trim(),K=J.trim();let W=!0,re=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(W=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(s,b,L,A);else{const ne=Ug(s,L,"vertex"),O=Ug(s,A,"fragment");Ft("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+ne+`
`+O)}else G!==""?ft("WebGLProgram: Program Info Log:",G):($===""||K==="")&&(re=!1);re&&(D.diagnostics={runnable:W,programLog:G,vertexShader:{log:$,prefix:_},fragmentShader:{log:K,prefix:S}})}s.deleteShader(L),s.deleteShader(A),C=new Ic(s,b),F=oE(s,b)}let C;this.getUniforms=function(){return C===void 0&&I(this),C};let F;this.getAttributes=function(){return F===void 0&&I(this),F};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(b,Z2)),z},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Q2++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=L,this.fragmentShader=A,this}let wE=0;class bE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new EE(e),t.set(e,i)),i}}class EE{constructor(e){this.id=wE++,this.code=e,this.usedTimes=0}}function TE(a){return a===Ws||a===Fc||a===Uc}function CE(a,e,t,i,s,o){const c=new Ux,u=new bE,h=new Set,f=[],p=new Map,g=i.logarithmicDepthBuffer;let m=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(C){return h.add(C),C===0?"uv":`uv${C}`}function b(C,F,z,D,H,ie){const J=D.fog,G=H.geometry,$=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?D.environment:null,K=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap,W=e.get(C.envMap||$,K),re=W&&W.mapping===qc?W.image.height:null,ne=y[C.type];C.precision!==null&&(m=i.getMaxPrecision(C.precision),m!==C.precision&&ft("WebGLProgram.getParameters:",C.precision,"not supported, using",m,"instead."));const O=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,q=O!==void 0?O.length:0;let ve=0;G.morphAttributes.position!==void 0&&(ve=1),G.morphAttributes.normal!==void 0&&(ve=2),G.morphAttributes.color!==void 0&&(ve=3);let be,de,Y,me;if(ne){const dt=er[ne];be=dt.vertexShader,de=dt.fragmentShader}else be=C.vertexShader,de=C.fragmentShader,u.update(C),Y=u.getVertexShaderID(C),me=u.getFragmentShaderID(C);const pe=a.getRenderTarget(),Ie=a.state.buffers.depth.getReversed(),Xe=H.isInstancedMesh===!0,Oe=H.isBatchedMesh===!0,gt=!!C.map,rt=!!C.matcap,bt=!!W,Lt=!!C.aoMap,vt=!!C.lightMap,Xt=!!C.bumpMap,kt=!!C.normalMap,hn=!!C.displacementMap,Z=!!C.emissiveMap,Ot=!!C.metalnessMap,_t=!!C.roughnessMap,Ut=C.anisotropy>0,He=C.clearcoat>0,Wt=C.dispersion>0,k=C.iridescence>0,R=C.sheen>0,se=C.transmission>0,ye=Ut&&!!C.anisotropyMap,we=He&&!!C.clearcoatMap,Ae=He&&!!C.clearcoatNormalMap,Be=He&&!!C.clearcoatRoughnessMap,xe=k&&!!C.iridescenceMap,Se=k&&!!C.iridescenceThicknessMap,Re=R&&!!C.sheenColorMap,je=R&&!!C.sheenRoughnessMap,Ne=!!C.specularMap,Pe=!!C.specularColorMap,at=!!C.specularIntensityMap,pt=se&&!!C.transmissionMap,xt=se&&!!C.thicknessMap,j=!!C.gradientMap,Le=!!C.alphaMap,_e=C.alphaTest>0,Ve=!!C.alphaHash,ke=!!C.extensions;let ge=rr;C.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ge=a.toneMapping);const Qe={shaderID:ne,shaderType:C.type,shaderName:C.name,vertexShader:be,fragmentShader:de,defines:C.defines,customVertexShaderID:Y,customFragmentShaderID:me,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:m,batching:Oe,batchingColor:Oe&&H._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&H.instanceColor!==null,instancingMorph:Xe&&H.morphTexture!==null,outputColorSpace:pe===null?a.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!C.alphaToCoverage,map:gt,matcap:rt,envMap:bt,envMapMode:bt&&W.mapping,envMapCubeUVHeight:re,aoMap:Lt,lightMap:vt,bumpMap:Xt,normalMap:kt,displacementMap:hn,emissiveMap:Z,normalMapObjectSpace:kt&&C.normalMapType===Wy,normalMapTangentSpace:kt&&C.normalMapType===Dc,packedNormalMap:kt&&C.normalMapType===Dc&&TE(C.normalMap.format),metalnessMap:Ot,roughnessMap:_t,anisotropy:Ut,anisotropyMap:ye,clearcoat:He,clearcoatMap:we,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Be,dispersion:Wt,iridescence:k,iridescenceMap:xe,iridescenceThicknessMap:Se,sheen:R,sheenColorMap:Re,sheenRoughnessMap:je,specularMap:Ne,specularColorMap:Pe,specularIntensityMap:at,transmission:se,transmissionMap:pt,thicknessMap:xt,gradientMap:j,opaque:C.transparent===!1&&C.blending===Ua&&C.alphaToCoverage===!1,alphaMap:Le,alphaTest:_e,alphaHash:Ve,combine:C.combine,mapUv:gt&&v(C.map.channel),aoMapUv:Lt&&v(C.aoMap.channel),lightMapUv:vt&&v(C.lightMap.channel),bumpMapUv:Xt&&v(C.bumpMap.channel),normalMapUv:kt&&v(C.normalMap.channel),displacementMapUv:hn&&v(C.displacementMap.channel),emissiveMapUv:Z&&v(C.emissiveMap.channel),metalnessMapUv:Ot&&v(C.metalnessMap.channel),roughnessMapUv:_t&&v(C.roughnessMap.channel),anisotropyMapUv:ye&&v(C.anisotropyMap.channel),clearcoatMapUv:we&&v(C.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&v(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&v(C.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&v(C.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&v(C.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&v(C.sheenColorMap.channel),sheenRoughnessMapUv:je&&v(C.sheenRoughnessMap.channel),specularMapUv:Ne&&v(C.specularMap.channel),specularColorMapUv:Pe&&v(C.specularColorMap.channel),specularIntensityMapUv:at&&v(C.specularIntensityMap.channel),transmissionMapUv:pt&&v(C.transmissionMap.channel),thicknessMapUv:xt&&v(C.thicknessMap.channel),alphaMapUv:Le&&v(C.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(kt||Ut),vertexNormals:!!G.attributes.normal,vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!G.attributes.uv&&(gt||Le),fog:!!J,useFog:C.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:C.wireframe===!1&&(C.flatShading===!0||G.attributes.normal===void 0&&kt===!1&&(C.isMeshLambertMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isMeshPhysicalMaterial)),sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ie,skinning:H.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:ve,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numLightProbeGrids:ie.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:C.dithering,shadowMapEnabled:a.shadowMap.enabled&&z.length>0,shadowMapType:a.shadowMap.type,toneMapping:ge,decodeVideoTexture:gt&&C.map.isVideoTexture===!0&&Pt.getTransfer(C.map.colorSpace)===Vt,decodeVideoTextureEmissive:Z&&C.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(C.emissiveMap.colorSpace)===Vt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===Gi,flipSided:C.side===ri,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:ke&&C.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&C.extensions.multiDraw===!0||Oe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Qe.vertexUv1s=h.has(1),Qe.vertexUv2s=h.has(2),Qe.vertexUv3s=h.has(3),h.clear(),Qe}function _(C){const F=[];if(C.shaderID?F.push(C.shaderID):(F.push(C.customVertexShaderID),F.push(C.customFragmentShaderID)),C.defines!==void 0)for(const z in C.defines)F.push(z),F.push(C.defines[z]);return C.isRawShaderMaterial===!1&&(S(F,C),w(F,C),F.push(a.outputColorSpace)),F.push(C.customProgramCacheKey),F.join()}function S(C,F){C.push(F.precision),C.push(F.outputColorSpace),C.push(F.envMapMode),C.push(F.envMapCubeUVHeight),C.push(F.mapUv),C.push(F.alphaMapUv),C.push(F.lightMapUv),C.push(F.aoMapUv),C.push(F.bumpMapUv),C.push(F.normalMapUv),C.push(F.displacementMapUv),C.push(F.emissiveMapUv),C.push(F.metalnessMapUv),C.push(F.roughnessMapUv),C.push(F.anisotropyMapUv),C.push(F.clearcoatMapUv),C.push(F.clearcoatNormalMapUv),C.push(F.clearcoatRoughnessMapUv),C.push(F.iridescenceMapUv),C.push(F.iridescenceThicknessMapUv),C.push(F.sheenColorMapUv),C.push(F.sheenRoughnessMapUv),C.push(F.specularMapUv),C.push(F.specularColorMapUv),C.push(F.specularIntensityMapUv),C.push(F.transmissionMapUv),C.push(F.thicknessMapUv),C.push(F.combine),C.push(F.fogExp2),C.push(F.sizeAttenuation),C.push(F.morphTargetsCount),C.push(F.morphAttributeCount),C.push(F.numDirLights),C.push(F.numPointLights),C.push(F.numSpotLights),C.push(F.numSpotLightMaps),C.push(F.numHemiLights),C.push(F.numRectAreaLights),C.push(F.numDirLightShadows),C.push(F.numPointLightShadows),C.push(F.numSpotLightShadows),C.push(F.numSpotLightShadowsWithMaps),C.push(F.numLightProbes),C.push(F.shadowMapType),C.push(F.toneMapping),C.push(F.numClippingPlanes),C.push(F.numClipIntersection),C.push(F.depthPacking)}function w(C,F){c.disableAll(),F.instancing&&c.enable(0),F.instancingColor&&c.enable(1),F.instancingMorph&&c.enable(2),F.matcap&&c.enable(3),F.envMap&&c.enable(4),F.normalMapObjectSpace&&c.enable(5),F.normalMapTangentSpace&&c.enable(6),F.clearcoat&&c.enable(7),F.iridescence&&c.enable(8),F.alphaTest&&c.enable(9),F.vertexColors&&c.enable(10),F.vertexAlphas&&c.enable(11),F.vertexUv1s&&c.enable(12),F.vertexUv2s&&c.enable(13),F.vertexUv3s&&c.enable(14),F.vertexTangents&&c.enable(15),F.anisotropy&&c.enable(16),F.alphaHash&&c.enable(17),F.batching&&c.enable(18),F.dispersion&&c.enable(19),F.batchingColor&&c.enable(20),F.gradientMap&&c.enable(21),F.packedNormalMap&&c.enable(22),F.vertexNormals&&c.enable(23),C.push(c.mask),c.disableAll(),F.fog&&c.enable(0),F.useFog&&c.enable(1),F.flatShading&&c.enable(2),F.logarithmicDepthBuffer&&c.enable(3),F.reversedDepthBuffer&&c.enable(4),F.skinning&&c.enable(5),F.morphTargets&&c.enable(6),F.morphNormals&&c.enable(7),F.morphColors&&c.enable(8),F.premultipliedAlpha&&c.enable(9),F.shadowMapEnabled&&c.enable(10),F.doubleSided&&c.enable(11),F.flipSided&&c.enable(12),F.useDepthPacking&&c.enable(13),F.dithering&&c.enable(14),F.transmission&&c.enable(15),F.sheen&&c.enable(16),F.opaque&&c.enable(17),F.pointsUvs&&c.enable(18),F.decodeVideoTexture&&c.enable(19),F.decodeVideoTextureEmissive&&c.enable(20),F.alphaToCoverage&&c.enable(21),F.numLightProbeGrids>0&&c.enable(22),C.push(c.mask)}function E(C){const F=y[C.type];let z;if(F){const D=er[F];z=Gc.clone(D.uniforms)}else z=C.uniforms;return z}function T(C,F){let z=p.get(F);return z!==void 0?++z.usedTimes:(z=new ME(a,F,C,s),f.push(z),p.set(F,z)),z}function L(C){if(--C.usedTimes===0){const F=f.indexOf(C);f[F]=f[f.length-1],f.pop(),p.delete(C.cacheKey),C.destroy()}}function A(C){u.remove(C)}function I(){u.dispose()}return{getParameters:b,getProgramCacheKey:_,getUniforms:E,acquireProgram:T,releaseProgram:L,releaseShaderCache:A,programs:f,dispose:I}}function AE(){let a=new WeakMap;function e(c){return a.has(c)}function t(c){let u=a.get(c);return u===void 0&&(u={},a.set(c,u)),u}function i(c){a.delete(c)}function s(c,u,h){a.get(c)[u]=h}function o(){a=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:o}}function RE(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function Bg(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Hg(){const a=[];let e=0;const t=[],i=[],s=[];function o(){e=0,t.length=0,i.length=0,s.length=0}function c(m){let y=0;return m.isInstancedMesh&&(y+=2),m.isSkinnedMesh&&(y+=1),y}function u(m,y,v,b,_,S){let w=a[e];return w===void 0?(w={id:m.id,object:m,geometry:y,material:v,materialVariant:c(m),groupOrder:b,renderOrder:m.renderOrder,z:_,group:S},a[e]=w):(w.id=m.id,w.object=m,w.geometry=y,w.material=v,w.materialVariant=c(m),w.groupOrder=b,w.renderOrder=m.renderOrder,w.z=_,w.group=S),e++,w}function h(m,y,v,b,_,S){const w=u(m,y,v,b,_,S);v.transmission>0?i.push(w):v.transparent===!0?s.push(w):t.push(w)}function f(m,y,v,b,_,S){const w=u(m,y,v,b,_,S);v.transmission>0?i.unshift(w):v.transparent===!0?s.unshift(w):t.unshift(w)}function p(m,y){t.length>1&&t.sort(m||RE),i.length>1&&i.sort(y||Bg),s.length>1&&s.sort(y||Bg)}function g(){for(let m=e,y=a.length;m<y;m++){const v=a[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:s,init:o,push:h,unshift:f,finish:g,sort:p}}function PE(){let a=new WeakMap;function e(i,s){const o=a.get(i);let c;return o===void 0?(c=new Hg,a.set(i,[c])):s>=o.length?(c=new Hg,o.push(c)):c=o[s],c}function t(){a=new WeakMap}return{get:e,dispose:t}}function LE(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new $e};break;case"SpotLight":t={position:new Q,direction:new Q,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return a[e.id]=t,t}}}function IE(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let NE=0;function FE(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function UE(a){const e=new LE,t=IE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new Q);const s=new Q,o=new Yt,c=new Yt;function u(f){let p=0,g=0,m=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let y=0,v=0,b=0,_=0,S=0,w=0,E=0,T=0,L=0,A=0,I=0;f.sort(FE);for(let F=0,z=f.length;F<z;F++){const D=f[F],H=D.color,ie=D.intensity,J=D.distance;let G=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ws?G=D.shadow.map.texture:G=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)p+=H.r*ie,g+=H.g*ie,m+=H.b*ie;else if(D.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(D.sh.coefficients[$],ie);I++}else if(D.isDirectionalLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const K=D.shadow,W=t.get(D);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,i.directionalShadow[y]=W,i.directionalShadowMap[y]=G,i.directionalShadowMatrix[y]=D.shadow.matrix,w++}i.directional[y]=$,y++}else if(D.isSpotLight){const $=e.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(H).multiplyScalar(ie),$.distance=J,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,i.spot[b]=$;const K=D.shadow;if(D.map&&(i.spotLightMap[L]=D.map,L++,K.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[b]=K.matrix,D.castShadow){const W=t.get(D);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,i.spotShadow[b]=W,i.spotShadowMap[b]=G,T++}b++}else if(D.isRectAreaLight){const $=e.get(D);$.color.copy(H).multiplyScalar(ie),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),i.rectArea[_]=$,_++}else if(D.isPointLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){const K=D.shadow,W=t.get(D);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,i.pointShadow[v]=W,i.pointShadowMap[v]=G,i.pointShadowMatrix[v]=D.shadow.matrix,E++}i.point[v]=$,v++}else if(D.isHemisphereLight){const $=e.get(D);$.skyColor.copy(D.color).multiplyScalar(ie),$.groundColor.copy(D.groundColor).multiplyScalar(ie),i.hemi[S]=$,S++}}_>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=We.LTC_FLOAT_1,i.rectAreaLTC2=We.LTC_FLOAT_2):(i.rectAreaLTC1=We.LTC_HALF_1,i.rectAreaLTC2=We.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=g,i.ambient[2]=m;const C=i.hash;(C.directionalLength!==y||C.pointLength!==v||C.spotLength!==b||C.rectAreaLength!==_||C.hemiLength!==S||C.numDirectionalShadows!==w||C.numPointShadows!==E||C.numSpotShadows!==T||C.numSpotMaps!==L||C.numLightProbes!==I)&&(i.directional.length=y,i.spot.length=b,i.rectArea.length=_,i.point.length=v,i.hemi.length=S,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=T+L-A,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=I,C.directionalLength=y,C.pointLength=v,C.spotLength=b,C.rectAreaLength=_,C.hemiLength=S,C.numDirectionalShadows=w,C.numPointShadows=E,C.numSpotShadows=T,C.numSpotMaps=L,C.numLightProbes=I,i.version=NE++)}function h(f,p){let g=0,m=0,y=0,v=0,b=0;const _=p.matrixWorldInverse;for(let S=0,w=f.length;S<w;S++){const E=f[S];if(E.isDirectionalLight){const T=i.directional[g];T.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(_),g++}else if(E.isSpotLight){const T=i.spot[y];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(_),T.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(_),y++}else if(E.isRectAreaLight){const T=i.rectArea[v];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(_),c.identity(),o.copy(E.matrixWorld),o.premultiply(_),c.extractRotation(o),T.halfWidth.set(E.width*.5,0,0),T.halfHeight.set(0,E.height*.5,0),T.halfWidth.applyMatrix4(c),T.halfHeight.applyMatrix4(c),v++}else if(E.isPointLight){const T=i.point[m];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(_),m++}else if(E.isHemisphereLight){const T=i.hemi[b];T.direction.setFromMatrixPosition(E.matrixWorld),T.direction.transformDirection(_),b++}}}return{setup:u,setupView:h,state:i}}function Gg(a){const e=new UE(a),t=[],i=[],s=[];function o(m){g.camera=m,t.length=0,i.length=0,s.length=0}function c(m){t.push(m)}function u(m){i.push(m)}function h(m){s.push(m)}function f(){e.setup(t)}function p(m){e.setupView(t,m)}const g={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:g,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:u,pushLightProbeGrid:h}}function DE(a){let e=new WeakMap;function t(s,o=0){const c=e.get(s);let u;return c===void 0?(u=new Gg(a),e.set(s,[u])):o>=c.length?(u=new Gg(a),c.push(u)):u=c[o],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const kE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OE=`uniform sampler2D shadow_pass;
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
}`,zE=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],BE=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],Vg=new Yt,Uo=new Q,df=new Q;function HE(a,e,t){let i=new Bd;const s=new ct,o=new ct,c=new sn,u=new qS,h=new YS,f={},p=t.maxTextureSize,g={[ds]:ri,[ri]:ds,[Gi]:Gi},m=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:kE,fragmentShader:OE}),y=m.clone();y.defines.HORIZONTAL_PASS=1;const v=new cn;v.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new un(v,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cc;let S=this.type;this.render=function(A,I,C){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||A.length===0)return;this.type===Sy&&(ft("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Cc);const F=a.getRenderTarget(),z=a.getActiveCubeFace(),D=a.getActiveMipmapLevel(),H=a.state;H.setBlending(ir),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const ie=S!==this.type;ie&&I.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(G=>G.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,G=A.length;J<G;J++){const $=A[J],K=$.shadow;if(K===void 0){ft("WebGLShadowMap:",$,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const W=K.getFrameExtents();s.multiply(W),o.copy(K.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(o.x=Math.floor(p/W.x),s.x=o.x*W.x,K.mapSize.x=o.x),s.y>p&&(o.y=Math.floor(p/W.y),s.y=o.y*W.y,K.mapSize.y=o.y));const re=a.state.buffers.depth.getReversed();if(K.camera._reversedDepth=re,K.map===null||ie===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Oo){if($.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new si(s.x,s.y,{format:Ws,type:gi,minFilter:gn,magFilter:gn,generateMipmaps:!1}),K.map.texture.name=$.name+".shadowMap",K.map.depthTexture=new Ha(s.x,s.y,Wi),K.map.depthTexture.name=$.name+".shadowMapDepth",K.map.depthTexture.format=Er,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Un,K.map.depthTexture.magFilter=Un}else $.isPointLight?(K.map=new $x(s.x),K.map.depthTexture=new HS(s.x,sr)):(K.map=new si(s.x,s.y),K.map.depthTexture=new Ha(s.x,s.y,sr)),K.map.depthTexture.name=$.name+".shadowMap",K.map.depthTexture.format=Er,this.type===Cc?(K.map.depthTexture.compareFunction=re?Ud:Fd,K.map.depthTexture.minFilter=gn,K.map.depthTexture.magFilter=gn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Un,K.map.depthTexture.magFilter=Un);K.camera.updateProjectionMatrix()}const ne=K.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<ne;O++){if(K.map.isWebGLCubeRenderTarget)a.setRenderTarget(K.map,O),a.clear();else{O===0&&(a.setRenderTarget(K.map),a.clear());const q=K.getViewport(O);c.set(o.x*q.x,o.y*q.y,o.x*q.z,o.y*q.w),H.viewport(c)}if($.isPointLight){const q=K.camera,ve=K.matrix,be=$.distance||q.far;be!==q.far&&(q.far=be,q.updateProjectionMatrix()),Uo.setFromMatrixPosition($.matrixWorld),q.position.copy(Uo),df.copy(q.position),df.add(zE[O]),q.up.copy(BE[O]),q.lookAt(df),q.updateMatrixWorld(),ve.makeTranslation(-Uo.x,-Uo.y,-Uo.z),Vg.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Vg,q.coordinateSystem,q.reversedDepth)}else K.updateMatrices($);i=K.getFrustum(),T(I,C,K.camera,$,this.type)}K.isPointLightShadow!==!0&&this.type===Oo&&w(K,C),K.needsUpdate=!1}S=this.type,_.needsUpdate=!1,a.setRenderTarget(F,z,D)};function w(A,I){const C=e.update(b);m.defines.VSM_SAMPLES!==A.blurSamples&&(m.defines.VSM_SAMPLES=A.blurSamples,y.defines.VSM_SAMPLES=A.blurSamples,m.needsUpdate=!0,y.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new si(s.x,s.y,{format:Ws,type:gi})),m.uniforms.shadow_pass.value=A.map.depthTexture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,a.setRenderTarget(A.mapPass),a.clear(),a.renderBufferDirect(I,null,C,m,b,null),y.uniforms.shadow_pass.value=A.mapPass.texture,y.uniforms.resolution.value=A.mapSize,y.uniforms.radius.value=A.radius,a.setRenderTarget(A.map),a.clear(),a.renderBufferDirect(I,null,C,y,b,null)}function E(A,I,C,F){let z=null;const D=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)z=D;else if(z=C.isPointLight===!0?h:u,a.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const H=z.uuid,ie=I.uuid;let J=f[H];J===void 0&&(J={},f[H]=J);let G=J[ie];G===void 0&&(G=z.clone(),J[ie]=G,I.addEventListener("dispose",L)),z=G}if(z.visible=I.visible,z.wireframe=I.wireframe,F===Oo?z.side=I.shadowSide!==null?I.shadowSide:I.side:z.side=I.shadowSide!==null?I.shadowSide:g[I.side],z.alphaMap=I.alphaMap,z.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,z.map=I.map,z.clipShadows=I.clipShadows,z.clippingPlanes=I.clippingPlanes,z.clipIntersection=I.clipIntersection,z.displacementMap=I.displacementMap,z.displacementScale=I.displacementScale,z.displacementBias=I.displacementBias,z.wireframeLinewidth=I.wireframeLinewidth,z.linewidth=I.linewidth,C.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const H=a.properties.get(z);H.light=C}return z}function T(A,I,C,F,z){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&z===Oo)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const ie=e.update(A),J=A.material;if(Array.isArray(J)){const G=ie.groups;for(let $=0,K=G.length;$<K;$++){const W=G[$],re=J[W.materialIndex];if(re&&re.visible){const ne=E(A,re,F,z);A.onBeforeShadow(a,A,I,C,ie,ne,W),a.renderBufferDirect(C,null,ie,ne,A,W),A.onAfterShadow(a,A,I,C,ie,ne,W)}}}else if(J.visible){const G=E(A,J,F,z);A.onBeforeShadow(a,A,I,C,ie,G,null),a.renderBufferDirect(C,null,ie,G,A,null),A.onAfterShadow(a,A,I,C,ie,G,null)}}const H=A.children;for(let ie=0,J=H.length;ie<J;ie++)T(H[ie],I,C,F,z)}function L(A){A.target.removeEventListener("dispose",L);for(const C in f){const F=f[C],z=A.target.uuid;z in F&&(F[z].dispose(),delete F[z])}}}function GE(a,e){function t(){let j=!1;const Le=new sn;let _e=null;const Ve=new sn(0,0,0,0);return{setMask:function(ke){_e!==ke&&!j&&(a.colorMask(ke,ke,ke,ke),_e=ke)},setLocked:function(ke){j=ke},setClear:function(ke,ge,Qe,dt,Bt){Bt===!0&&(ke*=dt,ge*=dt,Qe*=dt),Le.set(ke,ge,Qe,dt),Ve.equals(Le)===!1&&(a.clearColor(ke,ge,Qe,dt),Ve.copy(Le))},reset:function(){j=!1,_e=null,Ve.set(-1,0,0,0)}}}function i(){let j=!1,Le=!1,_e=null,Ve=null,ke=null;return{setReversed:function(ge){if(Le!==ge){const Qe=e.get("EXT_clip_control");ge?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),Le=ge;const dt=ke;ke=null,this.setClear(dt)}},getReversed:function(){return Le},setTest:function(ge){ge?pe(a.DEPTH_TEST):Ie(a.DEPTH_TEST)},setMask:function(ge){_e!==ge&&!j&&(a.depthMask(ge),_e=ge)},setFunc:function(ge){if(Le&&(ge=eS[ge]),Ve!==ge){switch(ge){case bf:a.depthFunc(a.NEVER);break;case Ef:a.depthFunc(a.ALWAYS);break;case Tf:a.depthFunc(a.LESS);break;case za:a.depthFunc(a.LEQUAL);break;case Cf:a.depthFunc(a.EQUAL);break;case Af:a.depthFunc(a.GEQUAL);break;case Rf:a.depthFunc(a.GREATER);break;case Pf:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ve=ge}},setLocked:function(ge){j=ge},setClear:function(ge){ke!==ge&&(ke=ge,Le&&(ge=1-ge),a.clearDepth(ge))},reset:function(){j=!1,_e=null,Ve=null,ke=null,Le=!1}}}function s(){let j=!1,Le=null,_e=null,Ve=null,ke=null,ge=null,Qe=null,dt=null,Bt=null;return{setTest:function(wt){j||(wt?pe(a.STENCIL_TEST):Ie(a.STENCIL_TEST))},setMask:function(wt){Le!==wt&&!j&&(a.stencilMask(wt),Le=wt)},setFunc:function(wt,Pn,Yn){(_e!==wt||Ve!==Pn||ke!==Yn)&&(a.stencilFunc(wt,Pn,Yn),_e=wt,Ve=Pn,ke=Yn)},setOp:function(wt,Pn,Yn){(ge!==wt||Qe!==Pn||dt!==Yn)&&(a.stencilOp(wt,Pn,Yn),ge=wt,Qe=Pn,dt=Yn)},setLocked:function(wt){j=wt},setClear:function(wt){Bt!==wt&&(a.clearStencil(wt),Bt=wt)},reset:function(){j=!1,Le=null,_e=null,Ve=null,ke=null,ge=null,Qe=null,dt=null,Bt=null}}}const o=new t,c=new i,u=new s,h=new WeakMap,f=new WeakMap;let p={},g={},m={},y=new WeakMap,v=[],b=null,_=!1,S=null,w=null,E=null,T=null,L=null,A=null,I=null,C=new $e(0,0,0),F=0,z=!1,D=null,H=null,ie=null,J=null,G=null;const $=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,W=0;const re=a.getParameter(a.VERSION);re.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(re)[1]),K=W>=1):re.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),K=W>=2);let ne=null,O={};const q=a.getParameter(a.SCISSOR_BOX),ve=a.getParameter(a.VIEWPORT),be=new sn().fromArray(q),de=new sn().fromArray(ve);function Y(j,Le,_e,Ve){const ke=new Uint8Array(4),ge=a.createTexture();a.bindTexture(j,ge),a.texParameteri(j,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(j,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Qe=0;Qe<_e;Qe++)j===a.TEXTURE_3D||j===a.TEXTURE_2D_ARRAY?a.texImage3D(Le,0,a.RGBA,1,1,Ve,0,a.RGBA,a.UNSIGNED_BYTE,ke):a.texImage2D(Le+Qe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ke);return ge}const me={};me[a.TEXTURE_2D]=Y(a.TEXTURE_2D,a.TEXTURE_2D,1),me[a.TEXTURE_CUBE_MAP]=Y(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[a.TEXTURE_2D_ARRAY]=Y(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),me[a.TEXTURE_3D]=Y(a.TEXTURE_3D,a.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),pe(a.DEPTH_TEST),c.setFunc(za),Xt(!1),kt(F0),pe(a.CULL_FACE),Lt(ir);function pe(j){p[j]!==!0&&(a.enable(j),p[j]=!0)}function Ie(j){p[j]!==!1&&(a.disable(j),p[j]=!1)}function Xe(j,Le){return m[j]!==Le?(a.bindFramebuffer(j,Le),m[j]=Le,j===a.DRAW_FRAMEBUFFER&&(m[a.FRAMEBUFFER]=Le),j===a.FRAMEBUFFER&&(m[a.DRAW_FRAMEBUFFER]=Le),!0):!1}function Oe(j,Le){let _e=v,Ve=!1;if(j){_e=y.get(Le),_e===void 0&&(_e=[],y.set(Le,_e));const ke=j.textures;if(_e.length!==ke.length||_e[0]!==a.COLOR_ATTACHMENT0){for(let ge=0,Qe=ke.length;ge<Qe;ge++)_e[ge]=a.COLOR_ATTACHMENT0+ge;_e.length=ke.length,Ve=!0}}else _e[0]!==a.BACK&&(_e[0]=a.BACK,Ve=!0);Ve&&a.drawBuffers(_e)}function gt(j){return b!==j?(a.useProgram(j),b=j,!0):!1}const rt={[zs]:a.FUNC_ADD,[wy]:a.FUNC_SUBTRACT,[by]:a.FUNC_REVERSE_SUBTRACT};rt[Ey]=a.MIN,rt[Ty]=a.MAX;const bt={[Cy]:a.ZERO,[Ay]:a.ONE,[Ry]:a.SRC_COLOR,[Mf]:a.SRC_ALPHA,[Uy]:a.SRC_ALPHA_SATURATE,[Ny]:a.DST_COLOR,[Ly]:a.DST_ALPHA,[Py]:a.ONE_MINUS_SRC_COLOR,[wf]:a.ONE_MINUS_SRC_ALPHA,[Fy]:a.ONE_MINUS_DST_COLOR,[Iy]:a.ONE_MINUS_DST_ALPHA,[Dy]:a.CONSTANT_COLOR,[ky]:a.ONE_MINUS_CONSTANT_COLOR,[Oy]:a.CONSTANT_ALPHA,[zy]:a.ONE_MINUS_CONSTANT_ALPHA};function Lt(j,Le,_e,Ve,ke,ge,Qe,dt,Bt,wt){if(j===ir){_===!0&&(Ie(a.BLEND),_=!1);return}if(_===!1&&(pe(a.BLEND),_=!0),j!==My){if(j!==S||wt!==z){if((w!==zs||L!==zs)&&(a.blendEquation(a.FUNC_ADD),w=zs,L=zs),wt)switch(j){case Ua:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Oa:a.blendFunc(a.ONE,a.ONE);break;case U0:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case D0:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Ft("WebGLState: Invalid blending: ",j);break}else switch(j){case Ua:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Oa:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case U0:Ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case D0:Ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ft("WebGLState: Invalid blending: ",j);break}E=null,T=null,A=null,I=null,C.set(0,0,0),F=0,S=j,z=wt}return}ke=ke||Le,ge=ge||_e,Qe=Qe||Ve,(Le!==w||ke!==L)&&(a.blendEquationSeparate(rt[Le],rt[ke]),w=Le,L=ke),(_e!==E||Ve!==T||ge!==A||Qe!==I)&&(a.blendFuncSeparate(bt[_e],bt[Ve],bt[ge],bt[Qe]),E=_e,T=Ve,A=ge,I=Qe),(dt.equals(C)===!1||Bt!==F)&&(a.blendColor(dt.r,dt.g,dt.b,Bt),C.copy(dt),F=Bt),S=j,z=!1}function vt(j,Le){j.side===Gi?Ie(a.CULL_FACE):pe(a.CULL_FACE);let _e=j.side===ri;Le&&(_e=!_e),Xt(_e),j.blending===Ua&&j.transparent===!1?Lt(ir):Lt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),c.setFunc(j.depthFunc),c.setTest(j.depthTest),c.setMask(j.depthWrite),o.setMask(j.colorWrite);const Ve=j.stencilWrite;u.setTest(Ve),Ve&&(u.setMask(j.stencilWriteMask),u.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),u.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Z(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?pe(a.SAMPLE_ALPHA_TO_COVERAGE):Ie(a.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(j){D!==j&&(j?a.frontFace(a.CW):a.frontFace(a.CCW),D=j)}function kt(j){j!==_y?(pe(a.CULL_FACE),j!==H&&(j===F0?a.cullFace(a.BACK):j===yy?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ie(a.CULL_FACE),H=j}function hn(j){j!==ie&&(K&&a.lineWidth(j),ie=j)}function Z(j,Le,_e){j?(pe(a.POLYGON_OFFSET_FILL),(J!==Le||G!==_e)&&(J=Le,G=_e,c.getReversed()&&(Le=-Le),a.polygonOffset(Le,_e))):Ie(a.POLYGON_OFFSET_FILL)}function Ot(j){j?pe(a.SCISSOR_TEST):Ie(a.SCISSOR_TEST)}function _t(j){j===void 0&&(j=a.TEXTURE0+$-1),ne!==j&&(a.activeTexture(j),ne=j)}function Ut(j,Le,_e){_e===void 0&&(ne===null?_e=a.TEXTURE0+$-1:_e=ne);let Ve=O[_e];Ve===void 0&&(Ve={type:void 0,texture:void 0},O[_e]=Ve),(Ve.type!==j||Ve.texture!==Le)&&(ne!==_e&&(a.activeTexture(_e),ne=_e),a.bindTexture(j,Le||me[j]),Ve.type=j,Ve.texture=Le)}function He(){const j=O[ne];j!==void 0&&j.type!==void 0&&(a.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function Wt(){try{a.compressedTexImage2D(...arguments)}catch(j){Ft("WebGLState:",j)}}function k(){try{a.compressedTexImage3D(...arguments)}catch(j){Ft("WebGLState:",j)}}function R(){try{a.texSubImage2D(...arguments)}catch(j){Ft("WebGLState:",j)}}function se(){try{a.texSubImage3D(...arguments)}catch(j){Ft("WebGLState:",j)}}function ye(){try{a.compressedTexSubImage2D(...arguments)}catch(j){Ft("WebGLState:",j)}}function we(){try{a.compressedTexSubImage3D(...arguments)}catch(j){Ft("WebGLState:",j)}}function Ae(){try{a.texStorage2D(...arguments)}catch(j){Ft("WebGLState:",j)}}function Be(){try{a.texStorage3D(...arguments)}catch(j){Ft("WebGLState:",j)}}function xe(){try{a.texImage2D(...arguments)}catch(j){Ft("WebGLState:",j)}}function Se(){try{a.texImage3D(...arguments)}catch(j){Ft("WebGLState:",j)}}function Re(j){return g[j]!==void 0?g[j]:a.getParameter(j)}function je(j,Le){g[j]!==Le&&(a.pixelStorei(j,Le),g[j]=Le)}function Ne(j){be.equals(j)===!1&&(a.scissor(j.x,j.y,j.z,j.w),be.copy(j))}function Pe(j){de.equals(j)===!1&&(a.viewport(j.x,j.y,j.z,j.w),de.copy(j))}function at(j,Le){let _e=f.get(Le);_e===void 0&&(_e=new WeakMap,f.set(Le,_e));let Ve=_e.get(j);Ve===void 0&&(Ve=a.getUniformBlockIndex(Le,j.name),_e.set(j,Ve))}function pt(j,Le){const Ve=f.get(Le).get(j);h.get(Le)!==Ve&&(a.uniformBlockBinding(Le,Ve,j.__bindingPointIndex),h.set(Le,Ve))}function xt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),c.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),p={},g={},ne=null,O={},m={},y=new WeakMap,v=[],b=null,_=!1,S=null,w=null,E=null,T=null,L=null,A=null,I=null,C=new $e(0,0,0),F=0,z=!1,D=null,H=null,ie=null,J=null,G=null,be.set(0,0,a.canvas.width,a.canvas.height),de.set(0,0,a.canvas.width,a.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:pe,disable:Ie,bindFramebuffer:Xe,drawBuffers:Oe,useProgram:gt,setBlending:Lt,setMaterial:vt,setFlipSided:Xt,setCullFace:kt,setLineWidth:hn,setPolygonOffset:Z,setScissorTest:Ot,activeTexture:_t,bindTexture:Ut,unbindTexture:He,compressedTexImage2D:Wt,compressedTexImage3D:k,texImage2D:xe,texImage3D:Se,pixelStorei:je,getParameter:Re,updateUBOMapping:at,uniformBlockBinding:pt,texStorage2D:Ae,texStorage3D:Be,texSubImage2D:R,texSubImage3D:se,compressedTexSubImage2D:ye,compressedTexSubImage3D:we,scissor:Ne,viewport:Pe,reset:xt}}function VE(a,e,t,i,s,o,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new ct,p=new WeakMap,g=new Set;let m;const y=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(k,R){return v?new OffscreenCanvas(k,R):zc("canvas")}function _(k,R,se){let ye=1;const we=Wt(k);if((we.width>se||we.height>se)&&(ye=se/Math.max(we.width,we.height)),ye<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const Ae=Math.floor(ye*we.width),Be=Math.floor(ye*we.height);m===void 0&&(m=b(Ae,Be));const xe=R?b(Ae,Be):m;return xe.width=Ae,xe.height=Be,xe.getContext("2d").drawImage(k,0,0,Ae,Be),ft("WebGLRenderer: Texture has been resized from ("+we.width+"x"+we.height+") to ("+Ae+"x"+Be+")."),xe}else return"data"in k&&ft("WebGLRenderer: Image in DataTexture is too big ("+we.width+"x"+we.height+")."),k;return k}function S(k){return k.generateMipmaps}function w(k){a.generateMipmap(k)}function E(k){return k.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?a.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function T(k,R,se,ye,we,Ae=!1){if(k!==null){if(a[k]!==void 0)return a[k];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let Be;ye&&(Be=e.get("EXT_texture_norm16"),Be||ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xe=R;if(R===a.RED&&(se===a.FLOAT&&(xe=a.R32F),se===a.HALF_FLOAT&&(xe=a.R16F),se===a.UNSIGNED_BYTE&&(xe=a.R8),se===a.UNSIGNED_SHORT&&Be&&(xe=Be.R16_EXT),se===a.SHORT&&Be&&(xe=Be.R16_SNORM_EXT)),R===a.RED_INTEGER&&(se===a.UNSIGNED_BYTE&&(xe=a.R8UI),se===a.UNSIGNED_SHORT&&(xe=a.R16UI),se===a.UNSIGNED_INT&&(xe=a.R32UI),se===a.BYTE&&(xe=a.R8I),se===a.SHORT&&(xe=a.R16I),se===a.INT&&(xe=a.R32I)),R===a.RG&&(se===a.FLOAT&&(xe=a.RG32F),se===a.HALF_FLOAT&&(xe=a.RG16F),se===a.UNSIGNED_BYTE&&(xe=a.RG8),se===a.UNSIGNED_SHORT&&Be&&(xe=Be.RG16_EXT),se===a.SHORT&&Be&&(xe=Be.RG16_SNORM_EXT)),R===a.RG_INTEGER&&(se===a.UNSIGNED_BYTE&&(xe=a.RG8UI),se===a.UNSIGNED_SHORT&&(xe=a.RG16UI),se===a.UNSIGNED_INT&&(xe=a.RG32UI),se===a.BYTE&&(xe=a.RG8I),se===a.SHORT&&(xe=a.RG16I),se===a.INT&&(xe=a.RG32I)),R===a.RGB_INTEGER&&(se===a.UNSIGNED_BYTE&&(xe=a.RGB8UI),se===a.UNSIGNED_SHORT&&(xe=a.RGB16UI),se===a.UNSIGNED_INT&&(xe=a.RGB32UI),se===a.BYTE&&(xe=a.RGB8I),se===a.SHORT&&(xe=a.RGB16I),se===a.INT&&(xe=a.RGB32I)),R===a.RGBA_INTEGER&&(se===a.UNSIGNED_BYTE&&(xe=a.RGBA8UI),se===a.UNSIGNED_SHORT&&(xe=a.RGBA16UI),se===a.UNSIGNED_INT&&(xe=a.RGBA32UI),se===a.BYTE&&(xe=a.RGBA8I),se===a.SHORT&&(xe=a.RGBA16I),se===a.INT&&(xe=a.RGBA32I)),R===a.RGB&&(se===a.UNSIGNED_SHORT&&Be&&(xe=Be.RGB16_EXT),se===a.SHORT&&Be&&(xe=Be.RGB16_SNORM_EXT),se===a.UNSIGNED_INT_5_9_9_9_REV&&(xe=a.RGB9_E5),se===a.UNSIGNED_INT_10F_11F_11F_REV&&(xe=a.R11F_G11F_B10F)),R===a.RGBA){const Se=Ae?Oc:Pt.getTransfer(we);se===a.FLOAT&&(xe=a.RGBA32F),se===a.HALF_FLOAT&&(xe=a.RGBA16F),se===a.UNSIGNED_BYTE&&(xe=Se===Vt?a.SRGB8_ALPHA8:a.RGBA8),se===a.UNSIGNED_SHORT&&Be&&(xe=Be.RGBA16_EXT),se===a.SHORT&&Be&&(xe=Be.RGBA16_SNORM_EXT),se===a.UNSIGNED_SHORT_4_4_4_4&&(xe=a.RGBA4),se===a.UNSIGNED_SHORT_5_5_5_1&&(xe=a.RGB5_A1)}return(xe===a.R16F||xe===a.R32F||xe===a.RG16F||xe===a.RG32F||xe===a.RGBA16F||xe===a.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function L(k,R){let se;return k?R===null||R===sr||R===jo?se=a.DEPTH24_STENCIL8:R===Wi?se=a.DEPTH32F_STENCIL8:R===Xo&&(se=a.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===sr||R===jo?se=a.DEPTH_COMPONENT24:R===Wi?se=a.DEPTH_COMPONENT32F:R===Xo&&(se=a.DEPTH_COMPONENT16),se}function A(k,R){return S(k)===!0||k.isFramebufferTexture&&k.minFilter!==Un&&k.minFilter!==gn?Math.log2(Math.max(R.width,R.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?R.mipmaps.length:1}function I(k){const R=k.target;R.removeEventListener("dispose",I),F(R),R.isVideoTexture&&p.delete(R),R.isHTMLTexture&&g.delete(R)}function C(k){const R=k.target;R.removeEventListener("dispose",C),D(R)}function F(k){const R=i.get(k);if(R.__webglInit===void 0)return;const se=k.source,ye=y.get(se);if(ye){const we=ye[R.__cacheKey];we.usedTimes--,we.usedTimes===0&&z(k),Object.keys(ye).length===0&&y.delete(se)}i.remove(k)}function z(k){const R=i.get(k);a.deleteTexture(R.__webglTexture);const se=k.source,ye=y.get(se);delete ye[R.__cacheKey],c.memory.textures--}function D(k){const R=i.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),i.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(R.__webglFramebuffer[ye]))for(let we=0;we<R.__webglFramebuffer[ye].length;we++)a.deleteFramebuffer(R.__webglFramebuffer[ye][we]);else a.deleteFramebuffer(R.__webglFramebuffer[ye]);R.__webglDepthbuffer&&a.deleteRenderbuffer(R.__webglDepthbuffer[ye])}else{if(Array.isArray(R.__webglFramebuffer))for(let ye=0;ye<R.__webglFramebuffer.length;ye++)a.deleteFramebuffer(R.__webglFramebuffer[ye]);else a.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&a.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&a.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ye=0;ye<R.__webglColorRenderbuffer.length;ye++)R.__webglColorRenderbuffer[ye]&&a.deleteRenderbuffer(R.__webglColorRenderbuffer[ye]);R.__webglDepthRenderbuffer&&a.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const se=k.textures;for(let ye=0,we=se.length;ye<we;ye++){const Ae=i.get(se[ye]);Ae.__webglTexture&&(a.deleteTexture(Ae.__webglTexture),c.memory.textures--),i.remove(se[ye])}i.remove(k)}let H=0;function ie(){H=0}function J(){return H}function G(k){H=k}function $(){const k=H;return k>=s.maxTextures&&ft("WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+s.maxTextures),H+=1,k}function K(k){const R=[];return R.push(k.wrapS),R.push(k.wrapT),R.push(k.wrapR||0),R.push(k.magFilter),R.push(k.minFilter),R.push(k.anisotropy),R.push(k.internalFormat),R.push(k.format),R.push(k.type),R.push(k.generateMipmaps),R.push(k.premultiplyAlpha),R.push(k.flipY),R.push(k.unpackAlignment),R.push(k.colorSpace),R.join()}function W(k,R){const se=i.get(k);if(k.isVideoTexture&&Ut(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&se.__version!==k.version){const ye=k.image;if(ye===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(se,k,R);return}}else k.isExternalTexture&&(se.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,se.__webglTexture,a.TEXTURE0+R)}function re(k,R){const se=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&se.__version!==k.version){Ie(se,k,R);return}else k.isExternalTexture&&(se.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,se.__webglTexture,a.TEXTURE0+R)}function ne(k,R){const se=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&se.__version!==k.version){Ie(se,k,R);return}t.bindTexture(a.TEXTURE_3D,se.__webglTexture,a.TEXTURE0+R)}function O(k,R){const se=i.get(k);if(k.isCubeDepthTexture!==!0&&k.version>0&&se.__version!==k.version){Xe(se,k,R);return}t.bindTexture(a.TEXTURE_CUBE_MAP,se.__webglTexture,a.TEXTURE0+R)}const q={[Lf]:a.REPEAT,[Mr]:a.CLAMP_TO_EDGE,[If]:a.MIRRORED_REPEAT},ve={[Un]:a.NEAREST,[Gy]:a.NEAREST_MIPMAP_NEAREST,[Jl]:a.NEAREST_MIPMAP_LINEAR,[gn]:a.LINEAR,[Uh]:a.LINEAR_MIPMAP_NEAREST,[Hs]:a.LINEAR_MIPMAP_LINEAR},be={[Xy]:a.NEVER,[Ky]:a.ALWAYS,[jy]:a.LESS,[Fd]:a.LEQUAL,[qy]:a.EQUAL,[Ud]:a.GEQUAL,[Yy]:a.GREATER,[$y]:a.NOTEQUAL};function de(k,R){if(R.type===Wi&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===gn||R.magFilter===Uh||R.magFilter===Jl||R.magFilter===Hs||R.minFilter===gn||R.minFilter===Uh||R.minFilter===Jl||R.minFilter===Hs)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(k,a.TEXTURE_WRAP_S,q[R.wrapS]),a.texParameteri(k,a.TEXTURE_WRAP_T,q[R.wrapT]),(k===a.TEXTURE_3D||k===a.TEXTURE_2D_ARRAY)&&a.texParameteri(k,a.TEXTURE_WRAP_R,q[R.wrapR]),a.texParameteri(k,a.TEXTURE_MAG_FILTER,ve[R.magFilter]),a.texParameteri(k,a.TEXTURE_MIN_FILTER,ve[R.minFilter]),R.compareFunction&&(a.texParameteri(k,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(k,a.TEXTURE_COMPARE_FUNC,be[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Un||R.minFilter!==Jl&&R.minFilter!==Hs||R.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){const se=e.get("EXT_texture_filter_anisotropic");a.texParameterf(k,se.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function Y(k,R){let se=!1;k.__webglInit===void 0&&(k.__webglInit=!0,R.addEventListener("dispose",I));const ye=R.source;let we=y.get(ye);we===void 0&&(we={},y.set(ye,we));const Ae=K(R);if(Ae!==k.__cacheKey){we[Ae]===void 0&&(we[Ae]={texture:a.createTexture(),usedTimes:0},c.memory.textures++,se=!0),we[Ae].usedTimes++;const Be=we[k.__cacheKey];Be!==void 0&&(we[k.__cacheKey].usedTimes--,Be.usedTimes===0&&z(R)),k.__cacheKey=Ae,k.__webglTexture=we[Ae].texture}return se}function me(k,R,se){return Math.floor(Math.floor(k/se)/R)}function pe(k,R,se,ye){const Ae=k.updateRanges;if(Ae.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,R.width,R.height,se,ye,R.data);else{Ae.sort((je,Ne)=>je.start-Ne.start);let Be=0;for(let je=1;je<Ae.length;je++){const Ne=Ae[Be],Pe=Ae[je],at=Ne.start+Ne.count,pt=me(Pe.start,R.width,4),xt=me(Ne.start,R.width,4);Pe.start<=at+1&&pt===xt&&me(Pe.start+Pe.count-1,R.width,4)===pt?Ne.count=Math.max(Ne.count,Pe.start+Pe.count-Ne.start):(++Be,Ae[Be]=Pe)}Ae.length=Be+1;const xe=t.getParameter(a.UNPACK_ROW_LENGTH),Se=t.getParameter(a.UNPACK_SKIP_PIXELS),Re=t.getParameter(a.UNPACK_SKIP_ROWS);t.pixelStorei(a.UNPACK_ROW_LENGTH,R.width);for(let je=0,Ne=Ae.length;je<Ne;je++){const Pe=Ae[je],at=Math.floor(Pe.start/4),pt=Math.ceil(Pe.count/4),xt=at%R.width,j=Math.floor(at/R.width),Le=pt,_e=1;t.pixelStorei(a.UNPACK_SKIP_PIXELS,xt),t.pixelStorei(a.UNPACK_SKIP_ROWS,j),t.texSubImage2D(a.TEXTURE_2D,0,xt,j,Le,_e,se,ye,R.data)}k.clearUpdateRanges(),t.pixelStorei(a.UNPACK_ROW_LENGTH,xe),t.pixelStorei(a.UNPACK_SKIP_PIXELS,Se),t.pixelStorei(a.UNPACK_SKIP_ROWS,Re)}}function Ie(k,R,se){let ye=a.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ye=a.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ye=a.TEXTURE_3D);const we=Y(k,R),Ae=R.source;t.bindTexture(ye,k.__webglTexture,a.TEXTURE0+se);const Be=i.get(Ae);if(Ae.version!==Be.__version||we===!0){if(t.activeTexture(a.TEXTURE0+se),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){const _e=Pt.getPrimaries(Pt.workingColorSpace),Ve=R.colorSpace===cs?null:Pt.getPrimaries(R.colorSpace),ke=R.colorSpace===cs||_e===Ve?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(a.UNPACK_ALIGNMENT,R.unpackAlignment);let Se=_(R.image,!1,s.maxTextureSize);Se=He(R,Se);const Re=o.convert(R.format,R.colorSpace),je=o.convert(R.type);let Ne=T(R.internalFormat,Re,je,R.normalized,R.colorSpace,R.isVideoTexture);de(ye,R);let Pe;const at=R.mipmaps,pt=R.isVideoTexture!==!0,xt=Be.__version===void 0||we===!0,j=Ae.dataReady,Le=A(R,Se);if(R.isDepthTexture)Ne=L(R.format===Gs,R.type),xt&&(pt?t.texStorage2D(a.TEXTURE_2D,1,Ne,Se.width,Se.height):t.texImage2D(a.TEXTURE_2D,0,Ne,Se.width,Se.height,0,Re,je,null));else if(R.isDataTexture)if(at.length>0){pt&&xt&&t.texStorage2D(a.TEXTURE_2D,Le,Ne,at[0].width,at[0].height);for(let _e=0,Ve=at.length;_e<Ve;_e++)Pe=at[_e],pt?j&&t.texSubImage2D(a.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,Re,je,Pe.data):t.texImage2D(a.TEXTURE_2D,_e,Ne,Pe.width,Pe.height,0,Re,je,Pe.data);R.generateMipmaps=!1}else pt?(xt&&t.texStorage2D(a.TEXTURE_2D,Le,Ne,Se.width,Se.height),j&&pe(R,Se,Re,je)):t.texImage2D(a.TEXTURE_2D,0,Ne,Se.width,Se.height,0,Re,je,Se.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){pt&&xt&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Le,Ne,at[0].width,at[0].height,Se.depth);for(let _e=0,Ve=at.length;_e<Ve;_e++)if(Pe=at[_e],R.format!==mi)if(Re!==null)if(pt){if(j)if(R.layerUpdates.size>0){const ke=yg(Pe.width,Pe.height,R.format,R.type);for(const ge of R.layerUpdates){const Qe=Pe.data.subarray(ge*ke/Pe.data.BYTES_PER_ELEMENT,(ge+1)*ke/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,_e,0,0,ge,Pe.width,Pe.height,1,Re,Qe)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,_e,0,0,0,Pe.width,Pe.height,Se.depth,Re,Pe.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,_e,Ne,Pe.width,Pe.height,Se.depth,0,Pe.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pt?j&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,_e,0,0,0,Pe.width,Pe.height,Se.depth,Re,je,Pe.data):t.texImage3D(a.TEXTURE_2D_ARRAY,_e,Ne,Pe.width,Pe.height,Se.depth,0,Re,je,Pe.data)}else{pt&&xt&&t.texStorage2D(a.TEXTURE_2D,Le,Ne,at[0].width,at[0].height);for(let _e=0,Ve=at.length;_e<Ve;_e++)Pe=at[_e],R.format!==mi?Re!==null?pt?j&&t.compressedTexSubImage2D(a.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,Re,Pe.data):t.compressedTexImage2D(a.TEXTURE_2D,_e,Ne,Pe.width,Pe.height,0,Pe.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?j&&t.texSubImage2D(a.TEXTURE_2D,_e,0,0,Pe.width,Pe.height,Re,je,Pe.data):t.texImage2D(a.TEXTURE_2D,_e,Ne,Pe.width,Pe.height,0,Re,je,Pe.data)}else if(R.isDataArrayTexture)if(pt){if(xt&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Le,Ne,Se.width,Se.height,Se.depth),j)if(R.layerUpdates.size>0){const _e=yg(Se.width,Se.height,R.format,R.type);for(const Ve of R.layerUpdates){const ke=Se.data.subarray(Ve*_e/Se.data.BYTES_PER_ELEMENT,(Ve+1)*_e/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Ve,Se.width,Se.height,1,Re,je,ke)}R.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Re,je,Se.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Ne,Se.width,Se.height,Se.depth,0,Re,je,Se.data);else if(R.isData3DTexture)pt?(xt&&t.texStorage3D(a.TEXTURE_3D,Le,Ne,Se.width,Se.height,Se.depth),j&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Re,je,Se.data)):t.texImage3D(a.TEXTURE_3D,0,Ne,Se.width,Se.height,Se.depth,0,Re,je,Se.data);else if(R.isFramebufferTexture){if(xt)if(pt)t.texStorage2D(a.TEXTURE_2D,Le,Ne,Se.width,Se.height);else{let _e=Se.width,Ve=Se.height;for(let ke=0;ke<Le;ke++)t.texImage2D(a.TEXTURE_2D,ke,Ne,_e,Ve,0,Re,je,null),_e>>=1,Ve>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in a){const _e=a.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),Se.parentNode!==_e){_e.appendChild(Se),g.add(R),_e.onpaint=dt=>{const Bt=dt.changedElements;for(const wt of g)Bt.includes(wt.image)&&(wt.needsUpdate=!0)},_e.requestPaint();return}const Ve=0,ke=a.RGBA,ge=a.RGBA,Qe=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,Ve,ke,ge,Qe,Se),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(at.length>0){if(pt&&xt){const _e=Wt(at[0]);t.texStorage2D(a.TEXTURE_2D,Le,Ne,_e.width,_e.height)}for(let _e=0,Ve=at.length;_e<Ve;_e++)Pe=at[_e],pt?j&&t.texSubImage2D(a.TEXTURE_2D,_e,0,0,Re,je,Pe):t.texImage2D(a.TEXTURE_2D,_e,Ne,Re,je,Pe);R.generateMipmaps=!1}else if(pt){if(xt){const _e=Wt(Se);t.texStorage2D(a.TEXTURE_2D,Le,Ne,_e.width,_e.height)}j&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,Re,je,Se)}else t.texImage2D(a.TEXTURE_2D,0,Ne,Re,je,Se);S(R)&&w(ye),Be.__version=Ae.version,R.onUpdate&&R.onUpdate(R)}k.__version=R.version}function Xe(k,R,se){if(R.image.length!==6)return;const ye=Y(k,R),we=R.source;t.bindTexture(a.TEXTURE_CUBE_MAP,k.__webglTexture,a.TEXTURE0+se);const Ae=i.get(we);if(we.version!==Ae.__version||ye===!0){t.activeTexture(a.TEXTURE0+se);const Be=Pt.getPrimaries(Pt.workingColorSpace),xe=R.colorSpace===cs?null:Pt.getPrimaries(R.colorSpace),Se=R.colorSpace===cs||Be===xe?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(a.UNPACK_ALIGNMENT,R.unpackAlignment),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Re=R.isCompressedTexture||R.image[0].isCompressedTexture,je=R.image[0]&&R.image[0].isDataTexture,Ne=[];for(let ge=0;ge<6;ge++)!Re&&!je?Ne[ge]=_(R.image[ge],!0,s.maxCubemapSize):Ne[ge]=je?R.image[ge].image:R.image[ge],Ne[ge]=He(R,Ne[ge]);const Pe=Ne[0],at=o.convert(R.format,R.colorSpace),pt=o.convert(R.type),xt=T(R.internalFormat,at,pt,R.normalized,R.colorSpace),j=R.isVideoTexture!==!0,Le=Ae.__version===void 0||ye===!0,_e=we.dataReady;let Ve=A(R,Pe);de(a.TEXTURE_CUBE_MAP,R);let ke;if(Re){j&&Le&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Ve,xt,Pe.width,Pe.height);for(let ge=0;ge<6;ge++){ke=Ne[ge].mipmaps;for(let Qe=0;Qe<ke.length;Qe++){const dt=ke[Qe];R.format!==mi?at!==null?j?_e&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Qe,0,0,dt.width,dt.height,at,dt.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Qe,xt,dt.width,dt.height,0,dt.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?_e&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Qe,0,0,dt.width,dt.height,at,pt,dt.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Qe,xt,dt.width,dt.height,0,at,pt,dt.data)}}}else{if(ke=R.mipmaps,j&&Le){ke.length>0&&Ve++;const ge=Wt(Ne[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,Ve,xt,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(je){j?_e&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,Ne[ge].width,Ne[ge].height,at,pt,Ne[ge].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,xt,Ne[ge].width,Ne[ge].height,0,at,pt,Ne[ge].data);for(let Qe=0;Qe<ke.length;Qe++){const Bt=ke[Qe].image[ge].image;j?_e&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Qe+1,0,0,Bt.width,Bt.height,at,pt,Bt.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Qe+1,xt,Bt.width,Bt.height,0,at,pt,Bt.data)}}else{j?_e&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,at,pt,Ne[ge]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,xt,at,pt,Ne[ge]);for(let Qe=0;Qe<ke.length;Qe++){const dt=ke[Qe];j?_e&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Qe+1,0,0,at,pt,dt.image[ge]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Qe+1,xt,at,pt,dt.image[ge])}}}S(R)&&w(a.TEXTURE_CUBE_MAP),Ae.__version=we.version,R.onUpdate&&R.onUpdate(R)}k.__version=R.version}function Oe(k,R,se,ye,we,Ae){const Be=o.convert(se.format,se.colorSpace),xe=o.convert(se.type),Se=T(se.internalFormat,Be,xe,se.normalized,se.colorSpace),Re=i.get(R),je=i.get(se);if(je.__renderTarget=R,!Re.__hasExternalTextures){const Ne=Math.max(1,R.width>>Ae),Pe=Math.max(1,R.height>>Ae);we===a.TEXTURE_3D||we===a.TEXTURE_2D_ARRAY?t.texImage3D(we,Ae,Se,Ne,Pe,R.depth,0,Be,xe,null):t.texImage2D(we,Ae,Se,Ne,Pe,0,Be,xe,null)}t.bindFramebuffer(a.FRAMEBUFFER,k),_t(R)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ye,we,je.__webglTexture,0,Ot(R)):(we===a.TEXTURE_2D||we>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&we<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ye,we,je.__webglTexture,Ae),t.bindFramebuffer(a.FRAMEBUFFER,null)}function gt(k,R,se){if(a.bindRenderbuffer(a.RENDERBUFFER,k),R.depthBuffer){const ye=R.depthTexture,we=ye&&ye.isDepthTexture?ye.type:null,Ae=L(R.stencilBuffer,we),Be=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;_t(R)?u.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ot(R),Ae,R.width,R.height):se?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ot(R),Ae,R.width,R.height):a.renderbufferStorage(a.RENDERBUFFER,Ae,R.width,R.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Be,a.RENDERBUFFER,k)}else{const ye=R.textures;for(let we=0;we<ye.length;we++){const Ae=ye[we],Be=o.convert(Ae.format,Ae.colorSpace),xe=o.convert(Ae.type),Se=T(Ae.internalFormat,Be,xe,Ae.normalized,Ae.colorSpace);_t(R)?u.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ot(R),Se,R.width,R.height):se?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ot(R),Se,R.width,R.height):a.renderbufferStorage(a.RENDERBUFFER,Se,R.width,R.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function rt(k,R,se){const ye=R.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,k),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const we=i.get(R.depthTexture);if(we.__renderTarget=R,(!we.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ye){if(we.__webglInit===void 0&&(we.__webglInit=!0,R.depthTexture.addEventListener("dispose",I)),we.__webglTexture===void 0){we.__webglTexture=a.createTexture(),t.bindTexture(a.TEXTURE_CUBE_MAP,we.__webglTexture),de(a.TEXTURE_CUBE_MAP,R.depthTexture);const Re=o.convert(R.depthTexture.format),je=o.convert(R.depthTexture.type);let Ne;R.depthTexture.format===Er?Ne=a.DEPTH_COMPONENT24:R.depthTexture.format===Gs&&(Ne=a.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ne,R.width,R.height,0,Re,je,null)}}else W(R.depthTexture,0);const Ae=we.__webglTexture,Be=Ot(R),xe=ye?a.TEXTURE_CUBE_MAP_POSITIVE_X+se:a.TEXTURE_2D,Se=R.depthTexture.format===Gs?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(R.depthTexture.format===Er)_t(R)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Se,xe,Ae,0,Be):a.framebufferTexture2D(a.FRAMEBUFFER,Se,xe,Ae,0);else if(R.depthTexture.format===Gs)_t(R)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,Se,xe,Ae,0,Be):a.framebufferTexture2D(a.FRAMEBUFFER,Se,xe,Ae,0);else throw new Error("Unknown depthTexture format")}function bt(k){const R=i.get(k),se=k.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==k.depthTexture){const ye=k.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ye){const we=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ye.removeEventListener("dispose",we)};ye.addEventListener("dispose",we),R.__depthDisposeCallback=we}R.__boundDepthTexture=ye}if(k.depthTexture&&!R.__autoAllocateDepthBuffer)if(se)for(let ye=0;ye<6;ye++)rt(R.__webglFramebuffer[ye],k,ye);else{const ye=k.texture.mipmaps;ye&&ye.length>0?rt(R.__webglFramebuffer[0],k,0):rt(R.__webglFramebuffer,k,0)}else if(se){R.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(t.bindFramebuffer(a.FRAMEBUFFER,R.__webglFramebuffer[ye]),R.__webglDepthbuffer[ye]===void 0)R.__webglDepthbuffer[ye]=a.createRenderbuffer(),gt(R.__webglDepthbuffer[ye],k,!1);else{const we=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ae=R.__webglDepthbuffer[ye];a.bindRenderbuffer(a.RENDERBUFFER,Ae),a.framebufferRenderbuffer(a.FRAMEBUFFER,we,a.RENDERBUFFER,Ae)}}else{const ye=k.texture.mipmaps;if(ye&&ye.length>0?t.bindFramebuffer(a.FRAMEBUFFER,R.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=a.createRenderbuffer(),gt(R.__webglDepthbuffer,k,!1);else{const we=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ae=R.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Ae),a.framebufferRenderbuffer(a.FRAMEBUFFER,we,a.RENDERBUFFER,Ae)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function Lt(k,R,se){const ye=i.get(k);R!==void 0&&Oe(ye.__webglFramebuffer,k,k.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),se!==void 0&&bt(k)}function vt(k){const R=k.texture,se=i.get(k),ye=i.get(R);k.addEventListener("dispose",C);const we=k.textures,Ae=k.isWebGLCubeRenderTarget===!0,Be=we.length>1;if(Be||(ye.__webglTexture===void 0&&(ye.__webglTexture=a.createTexture()),ye.__version=R.version,c.memory.textures++),Ae){se.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(R.mipmaps&&R.mipmaps.length>0){se.__webglFramebuffer[xe]=[];for(let Se=0;Se<R.mipmaps.length;Se++)se.__webglFramebuffer[xe][Se]=a.createFramebuffer()}else se.__webglFramebuffer[xe]=a.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){se.__webglFramebuffer=[];for(let xe=0;xe<R.mipmaps.length;xe++)se.__webglFramebuffer[xe]=a.createFramebuffer()}else se.__webglFramebuffer=a.createFramebuffer();if(Be)for(let xe=0,Se=we.length;xe<Se;xe++){const Re=i.get(we[xe]);Re.__webglTexture===void 0&&(Re.__webglTexture=a.createTexture(),c.memory.textures++)}if(k.samples>0&&_t(k)===!1){se.__webglMultisampledFramebuffer=a.createFramebuffer(),se.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,se.__webglMultisampledFramebuffer);for(let xe=0;xe<we.length;xe++){const Se=we[xe];se.__webglColorRenderbuffer[xe]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,se.__webglColorRenderbuffer[xe]);const Re=o.convert(Se.format,Se.colorSpace),je=o.convert(Se.type),Ne=T(Se.internalFormat,Re,je,Se.normalized,Se.colorSpace,k.isXRRenderTarget===!0),Pe=Ot(k);a.renderbufferStorageMultisample(a.RENDERBUFFER,Pe,Ne,k.width,k.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+xe,a.RENDERBUFFER,se.__webglColorRenderbuffer[xe])}a.bindRenderbuffer(a.RENDERBUFFER,null),k.depthBuffer&&(se.__webglDepthRenderbuffer=a.createRenderbuffer(),gt(se.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Ae){t.bindTexture(a.TEXTURE_CUBE_MAP,ye.__webglTexture),de(a.TEXTURE_CUBE_MAP,R);for(let xe=0;xe<6;xe++)if(R.mipmaps&&R.mipmaps.length>0)for(let Se=0;Se<R.mipmaps.length;Se++)Oe(se.__webglFramebuffer[xe][Se],k,R,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Se);else Oe(se.__webglFramebuffer[xe],k,R,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);S(R)&&w(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let xe=0,Se=we.length;xe<Se;xe++){const Re=we[xe],je=i.get(Re);let Ne=a.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Ne=k.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(Ne,je.__webglTexture),de(Ne,Re),Oe(se.__webglFramebuffer,k,Re,a.COLOR_ATTACHMENT0+xe,Ne,0),S(Re)&&w(Ne)}t.unbindTexture()}else{let xe=a.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(xe=k.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(xe,ye.__webglTexture),de(xe,R),R.mipmaps&&R.mipmaps.length>0)for(let Se=0;Se<R.mipmaps.length;Se++)Oe(se.__webglFramebuffer[Se],k,R,a.COLOR_ATTACHMENT0,xe,Se);else Oe(se.__webglFramebuffer,k,R,a.COLOR_ATTACHMENT0,xe,0);S(R)&&w(xe),t.unbindTexture()}k.depthBuffer&&bt(k)}function Xt(k){const R=k.textures;for(let se=0,ye=R.length;se<ye;se++){const we=R[se];if(S(we)){const Ae=E(k),Be=i.get(we).__webglTexture;t.bindTexture(Ae,Be),w(Ae),t.unbindTexture()}}}const kt=[],hn=[];function Z(k){if(k.samples>0){if(_t(k)===!1){const R=k.textures,se=k.width,ye=k.height;let we=a.COLOR_BUFFER_BIT;const Ae=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Be=i.get(k),xe=R.length>1;if(xe)for(let Re=0;Re<R.length;Re++)t.bindFramebuffer(a.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Re,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,Be.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Re,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);const Se=k.texture.mipmaps;Se&&Se.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Re=0;Re<R.length;Re++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(we|=a.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(we|=a.STENCIL_BUFFER_BIT)),xe){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Be.__webglColorRenderbuffer[Re]);const je=i.get(R[Re]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,je,0)}a.blitFramebuffer(0,0,se,ye,0,0,se,ye,we,a.NEAREST),h===!0&&(kt.length=0,hn.length=0,kt.push(a.COLOR_ATTACHMENT0+Re),k.depthBuffer&&k.resolveDepthBuffer===!1&&(kt.push(Ae),hn.push(Ae),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,hn)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,kt))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),xe)for(let Re=0;Re<R.length;Re++){t.bindFramebuffer(a.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Re,a.RENDERBUFFER,Be.__webglColorRenderbuffer[Re]);const je=i.get(R[Re]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,Be.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Re,a.TEXTURE_2D,je,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&h){const R=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[R])}}}function Ot(k){return Math.min(s.maxSamples,k.samples)}function _t(k){const R=i.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ut(k){const R=c.render.frame;p.get(k)!==R&&(p.set(k,R),k.update())}function He(k,R){const se=k.colorSpace,ye=k.format,we=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||se!==kc&&se!==cs&&(Pt.getTransfer(se)===Vt?(ye!==mi||we!==pi)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ft("WebGLTextures: Unsupported texture color space:",se)),R}function Wt(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(f.width=k.naturalWidth||k.width,f.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(f.width=k.displayWidth,f.height=k.displayHeight):(f.width=k.width,f.height=k.height),f}this.allocateTextureUnit=$,this.resetTextureUnits=ie,this.getTextureUnits=J,this.setTextureUnits=G,this.setTexture2D=W,this.setTexture2DArray=re,this.setTexture3D=ne,this.setTextureCube=O,this.rebindTextures=Lt,this.setupRenderTarget=vt,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=Oe,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function WE(a,e){function t(i,s=cs){let o;const c=Pt.getTransfer(s);if(i===pi)return a.UNSIGNED_BYTE;if(i===Ad)return a.UNSIGNED_SHORT_4_4_4_4;if(i===Rd)return a.UNSIGNED_SHORT_5_5_5_1;if(i===Rx)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===Px)return a.UNSIGNED_INT_10F_11F_11F_REV;if(i===Cx)return a.BYTE;if(i===Ax)return a.SHORT;if(i===Xo)return a.UNSIGNED_SHORT;if(i===Cd)return a.INT;if(i===sr)return a.UNSIGNED_INT;if(i===Wi)return a.FLOAT;if(i===gi)return a.HALF_FLOAT;if(i===Lx)return a.ALPHA;if(i===Ix)return a.RGB;if(i===mi)return a.RGBA;if(i===Er)return a.DEPTH_COMPONENT;if(i===Gs)return a.DEPTH_STENCIL;if(i===Pd)return a.RED;if(i===Ld)return a.RED_INTEGER;if(i===Ws)return a.RG;if(i===Id)return a.RG_INTEGER;if(i===Nd)return a.RGBA_INTEGER;if(i===Ac||i===Rc||i===Pc||i===Lc)if(c===Vt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Ac)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Rc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Ac)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Rc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nf||i===Ff||i===Uf||i===Df)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Nf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ff)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Uf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Df)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kf||i===Of||i===zf||i===Bf||i===Hf||i===Fc||i===Gf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===kf||i===Of)return c===Vt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===zf)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===Bf)return o.COMPRESSED_R11_EAC;if(i===Hf)return o.COMPRESSED_SIGNED_R11_EAC;if(i===Fc)return o.COMPRESSED_RG11_EAC;if(i===Gf)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Vf||i===Wf||i===Xf||i===jf||i===qf||i===Yf||i===$f||i===Kf||i===Zf||i===Qf||i===Jf||i===ed||i===td||i===nd)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Vf)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wf)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xf)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jf)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qf)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yf)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$f)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Kf)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zf)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qf)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jf)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ed)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===td)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nd)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===id||i===rd||i===sd)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===id)return c===Vt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rd)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sd)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ad||i===od||i===Uc||i===ld)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===ad)return o.COMPRESSED_RED_RGTC1_EXT;if(i===od)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Uc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ld)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===jo?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:t}}const XE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jE=`
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

}`;class qE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Hx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ln({vertexShader:XE,fragmentShader:jE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new un(new Cr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class YE extends js{constructor(e,t){super();const i=this;let s=null,o=1,c=null,u="local-floor",h=1,f=null,p=null,g=null,m=null,y=null,v=null;const b=typeof XRWebGLBinding<"u",_=new qE,S={},w=t.getContextAttributes();let E=null,T=null;const L=[],A=[],I=new ct;let C=null;const F=new An;F.viewport=new sn;const z=new An;z.viewport=new sn;const D=[F,z],H=new nM;let ie=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let me=L[Y];return me===void 0&&(me=new Hh,L[Y]=me),me.getTargetRaySpace()},this.getControllerGrip=function(Y){let me=L[Y];return me===void 0&&(me=new Hh,L[Y]=me),me.getGripSpace()},this.getHand=function(Y){let me=L[Y];return me===void 0&&(me=new Hh,L[Y]=me),me.getHandSpace()};function G(Y){const me=A.indexOf(Y.inputSource);if(me===-1)return;const pe=L[me];pe!==void 0&&(pe.update(Y.inputSource,Y.frame,f||c),pe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function $(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",K);for(let Y=0;Y<L.length;Y++){const me=A[Y];me!==null&&(A[Y]=null,L[Y].disconnect(me))}ie=null,J=null,_.reset();for(const Y in S)delete S[Y];e.setRenderTarget(E),y=null,m=null,g=null,s=null,T=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){o=Y,i.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){u=Y,i.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(Y){f=Y},this.getBaseLayer=function(){return m!==null?m:y},this.getBinding=function(){return g===null&&b&&(g=new XRWebGLBinding(s,t)),g},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",$),s.addEventListener("inputsourceschange",K),w.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(I),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ie=null,Xe=null;w.depth&&(Xe=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=w.stencil?Gs:Er,Ie=w.stencil?jo:sr);const Oe={colorFormat:t.RGBA8,depthFormat:Xe,scaleFactor:o};g=this.getBinding(),m=g.createProjectionLayer(Oe),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),T=new si(m.textureWidth,m.textureHeight,{format:mi,type:pi,depthTexture:new Ha(m.textureWidth,m.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const pe={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(s,t,pe),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),T=new si(y.framebufferWidth,y.framebufferHeight,{format:mi,type:pi,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(h),f=null,c=await s.requestReferenceSpace(u),de.setContext(s),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(Y){for(let me=0;me<Y.removed.length;me++){const pe=Y.removed[me],Ie=A.indexOf(pe);Ie>=0&&(A[Ie]=null,L[Ie].disconnect(pe))}for(let me=0;me<Y.added.length;me++){const pe=Y.added[me];let Ie=A.indexOf(pe);if(Ie===-1){for(let Oe=0;Oe<L.length;Oe++)if(Oe>=A.length){A.push(pe),Ie=Oe;break}else if(A[Oe]===null){A[Oe]=pe,Ie=Oe;break}if(Ie===-1)break}const Xe=L[Ie];Xe&&Xe.connect(pe)}}const W=new Q,re=new Q;function ne(Y,me,pe){W.setFromMatrixPosition(me.matrixWorld),re.setFromMatrixPosition(pe.matrixWorld);const Ie=W.distanceTo(re),Xe=me.projectionMatrix.elements,Oe=pe.projectionMatrix.elements,gt=Xe[14]/(Xe[10]-1),rt=Xe[14]/(Xe[10]+1),bt=(Xe[9]+1)/Xe[5],Lt=(Xe[9]-1)/Xe[5],vt=(Xe[8]-1)/Xe[0],Xt=(Oe[8]+1)/Oe[0],kt=gt*vt,hn=gt*Xt,Z=Ie/(-vt+Xt),Ot=Z*-vt;if(me.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ot),Y.translateZ(Z),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Xe[10]===-1)Y.projectionMatrix.copy(me.projectionMatrix),Y.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const _t=gt+Z,Ut=rt+Z,He=kt-Ot,Wt=hn+(Ie-Ot),k=bt*rt/Ut*_t,R=Lt*rt/Ut*_t;Y.projectionMatrix.makePerspective(He,Wt,k,R,_t,Ut),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function O(Y,me){me===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(me.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let me=Y.near,pe=Y.far;_.texture!==null&&(_.depthNear>0&&(me=_.depthNear),_.depthFar>0&&(pe=_.depthFar)),H.near=z.near=F.near=me,H.far=z.far=F.far=pe,(ie!==H.near||J!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),ie=H.near,J=H.far),H.layers.mask=Y.layers.mask|6,F.layers.mask=H.layers.mask&-5,z.layers.mask=H.layers.mask&-3;const Ie=Y.parent,Xe=H.cameras;O(H,Ie);for(let Oe=0;Oe<Xe.length;Oe++)O(Xe[Oe],Ie);Xe.length===2?ne(H,F,z):H.projectionMatrix.copy(F.projectionMatrix),q(Y,H,Ie)};function q(Y,me,pe){pe===null?Y.matrix.copy(me.matrixWorld):(Y.matrix.copy(pe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(me.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(me.projectionMatrix),Y.projectionMatrixInverse.copy(me.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Yo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(m===null&&y===null))return h},this.setFoveation=function(Y){h=Y,m!==null&&(m.fixedFoveation=Y),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(H)},this.getCameraTexture=function(Y){return S[Y]};let ve=null;function be(Y,me){if(p=me.getViewerPose(f||c),v=me,p!==null){const pe=p.views;y!==null&&(e.setRenderTargetFramebuffer(T,y.framebuffer),e.setRenderTarget(T));let Ie=!1;pe.length!==H.cameras.length&&(H.cameras.length=0,Ie=!0);for(let rt=0;rt<pe.length;rt++){const bt=pe[rt];let Lt=null;if(y!==null)Lt=y.getViewport(bt);else{const Xt=g.getViewSubImage(m,bt);Lt=Xt.viewport,rt===0&&(e.setRenderTargetTextures(T,Xt.colorTexture,Xt.depthStencilTexture),e.setRenderTarget(T))}let vt=D[rt];vt===void 0&&(vt=new An,vt.layers.enable(rt),vt.viewport=new sn,D[rt]=vt),vt.matrix.fromArray(bt.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(bt.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),rt===0&&(H.matrix.copy(vt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ie===!0&&H.cameras.push(vt)}const Xe=s.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){g=i.getBinding();const rt=g.getDepthInformation(pe[0]);rt&&rt.isValid&&rt.texture&&_.init(rt,s.renderState)}if(Xe&&Xe.includes("camera-access")&&b){e.state.unbindTexture(),g=i.getBinding();for(let rt=0;rt<pe.length;rt++){const bt=pe[rt].camera;if(bt){let Lt=S[bt];Lt||(Lt=new Hx,S[bt]=Lt);const vt=g.getCameraImage(bt);Lt.sourceTexture=vt}}}}for(let pe=0;pe<L.length;pe++){const Ie=A[pe],Xe=L[pe];Ie!==null&&Xe!==void 0&&Xe.update(Ie,me,f||c)}ve&&ve(Y,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),v=null}const de=new qx;de.setAnimationLoop(be),this.setAnimationLoop=function(Y){ve=Y},this.dispose=function(){}}}const $E=new Yt,ev=new Mt;ev.set(-1,0,0,0,1,0,0,0,1);function KE(a,e){function t(_,S){_.matrixAutoUpdate===!0&&_.updateMatrix(),S.value.copy(_.matrix)}function i(_,S){S.color.getRGB(_.fogColor.value,Gx(a)),S.isFog?(_.fogNear.value=S.near,_.fogFar.value=S.far):S.isFogExp2&&(_.fogDensity.value=S.density)}function s(_,S,w,E,T){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?o(_,S):S.isMeshLambertMaterial?(o(_,S),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(o(_,S),g(_,S)):S.isMeshPhongMaterial?(o(_,S),p(_,S),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(o(_,S),m(_,S),S.isMeshPhysicalMaterial&&y(_,S,T)):S.isMeshMatcapMaterial?(o(_,S),v(_,S)):S.isMeshDepthMaterial?o(_,S):S.isMeshDistanceMaterial?(o(_,S),b(_,S)):S.isMeshNormalMaterial?o(_,S):S.isLineBasicMaterial?(c(_,S),S.isLineDashedMaterial&&u(_,S)):S.isPointsMaterial?h(_,S,w,E):S.isSpriteMaterial?f(_,S):S.isShadowMaterial?(_.color.value.copy(S.color),_.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function o(_,S){_.opacity.value=S.opacity,S.color&&_.diffuse.value.copy(S.color),S.emissive&&_.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(_.map.value=S.map,t(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.bumpMap&&(_.bumpMap.value=S.bumpMap,t(S.bumpMap,_.bumpMapTransform),_.bumpScale.value=S.bumpScale,S.side===ri&&(_.bumpScale.value*=-1)),S.normalMap&&(_.normalMap.value=S.normalMap,t(S.normalMap,_.normalMapTransform),_.normalScale.value.copy(S.normalScale),S.side===ri&&_.normalScale.value.negate()),S.displacementMap&&(_.displacementMap.value=S.displacementMap,t(S.displacementMap,_.displacementMapTransform),_.displacementScale.value=S.displacementScale,_.displacementBias.value=S.displacementBias),S.emissiveMap&&(_.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,_.emissiveMapTransform)),S.specularMap&&(_.specularMap.value=S.specularMap,t(S.specularMap,_.specularMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest);const w=e.get(S),E=w.envMap,T=w.envMapRotation;E&&(_.envMap.value=E,_.envMapRotation.value.setFromMatrix4($E.makeRotationFromEuler(T)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(ev),_.reflectivity.value=S.reflectivity,_.ior.value=S.ior,_.refractionRatio.value=S.refractionRatio),S.lightMap&&(_.lightMap.value=S.lightMap,_.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,_.lightMapTransform)),S.aoMap&&(_.aoMap.value=S.aoMap,_.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,_.aoMapTransform))}function c(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,S.map&&(_.map.value=S.map,t(S.map,_.mapTransform))}function u(_,S){_.dashSize.value=S.dashSize,_.totalSize.value=S.dashSize+S.gapSize,_.scale.value=S.scale}function h(_,S,w,E){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.size.value=S.size*w,_.scale.value=E*.5,S.map&&(_.map.value=S.map,t(S.map,_.uvTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function f(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.rotation.value=S.rotation,S.map&&(_.map.value=S.map,t(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function p(_,S){_.specular.value.copy(S.specular),_.shininess.value=Math.max(S.shininess,1e-4)}function g(_,S){S.gradientMap&&(_.gradientMap.value=S.gradientMap)}function m(_,S){_.metalness.value=S.metalness,S.metalnessMap&&(_.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,_.metalnessMapTransform)),_.roughness.value=S.roughness,S.roughnessMap&&(_.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,_.roughnessMapTransform)),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)}function y(_,S,w){_.ior.value=S.ior,S.sheen>0&&(_.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),_.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(_.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,_.sheenColorMapTransform)),S.sheenRoughnessMap&&(_.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,_.sheenRoughnessMapTransform))),S.clearcoat>0&&(_.clearcoat.value=S.clearcoat,_.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(_.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,_.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(_.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ri&&_.clearcoatNormalScale.value.negate())),S.dispersion>0&&(_.dispersion.value=S.dispersion),S.iridescence>0&&(_.iridescence.value=S.iridescence,_.iridescenceIOR.value=S.iridescenceIOR,_.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(_.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,_.iridescenceMapTransform)),S.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),S.transmission>0&&(_.transmission.value=S.transmission,_.transmissionSamplerMap.value=w.texture,_.transmissionSamplerSize.value.set(w.width,w.height),S.transmissionMap&&(_.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,_.transmissionMapTransform)),_.thickness.value=S.thickness,S.thicknessMap&&(_.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=S.attenuationDistance,_.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(_.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(_.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=S.specularIntensity,_.specularColor.value.copy(S.specularColor),S.specularColorMap&&(_.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,_.specularColorMapTransform)),S.specularIntensityMap&&(_.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,S){S.matcap&&(_.matcap.value=S.matcap)}function b(_,S){const w=e.get(S).light;_.referencePosition.value.setFromMatrixPosition(w.matrixWorld),_.nearDistance.value=w.shadow.camera.near,_.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ZE(a,e,t,i){let s={},o={},c=[];const u=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function h(w,E){const T=E.program;i.uniformBlockBinding(w,T)}function f(w,E){let T=s[w.id];T===void 0&&(v(w),T=p(w),s[w.id]=T,w.addEventListener("dispose",_));const L=E.program;i.updateUBOMapping(w,L);const A=e.render.frame;o[w.id]!==A&&(m(w),o[w.id]=A)}function p(w){const E=g();w.__bindingPointIndex=E;const T=a.createBuffer(),L=w.__size,A=w.usage;return a.bindBuffer(a.UNIFORM_BUFFER,T),a.bufferData(a.UNIFORM_BUFFER,L,A),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,E,T),T}function g(){for(let w=0;w<u;w++)if(c.indexOf(w)===-1)return c.push(w),w;return Ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(w){const E=s[w.id],T=w.uniforms,L=w.__cache;a.bindBuffer(a.UNIFORM_BUFFER,E);for(let A=0,I=T.length;A<I;A++){const C=Array.isArray(T[A])?T[A]:[T[A]];for(let F=0,z=C.length;F<z;F++){const D=C[F];if(y(D,A,F,L)===!0){const H=D.__offset,ie=Array.isArray(D.value)?D.value:[D.value];let J=0;for(let G=0;G<ie.length;G++){const $=ie[G],K=b($);typeof $=="number"||typeof $=="boolean"?(D.__data[0]=$,a.bufferSubData(a.UNIFORM_BUFFER,H+J,D.__data)):$.isMatrix3?(D.__data[0]=$.elements[0],D.__data[1]=$.elements[1],D.__data[2]=$.elements[2],D.__data[3]=0,D.__data[4]=$.elements[3],D.__data[5]=$.elements[4],D.__data[6]=$.elements[5],D.__data[7]=0,D.__data[8]=$.elements[6],D.__data[9]=$.elements[7],D.__data[10]=$.elements[8],D.__data[11]=0):ArrayBuffer.isView($)?D.__data.set(new $.constructor($.buffer,$.byteOffset,D.__data.length)):($.toArray(D.__data,J),J+=K.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,H,D.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function y(w,E,T,L){const A=w.value,I=E+"_"+T;if(L[I]===void 0)return typeof A=="number"||typeof A=="boolean"?L[I]=A:ArrayBuffer.isView(A)?L[I]=A.slice():L[I]=A.clone(),!0;{const C=L[I];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return L[I]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(C.equals(A)===!1)return C.copy(A),!0}}return!1}function v(w){const E=w.uniforms;let T=0;const L=16;for(let I=0,C=E.length;I<C;I++){const F=Array.isArray(E[I])?E[I]:[E[I]];for(let z=0,D=F.length;z<D;z++){const H=F[z],ie=Array.isArray(H.value)?H.value:[H.value];for(let J=0,G=ie.length;J<G;J++){const $=ie[J],K=b($),W=T%L,re=W%K.boundary,ne=W+re;T+=re,ne!==0&&L-ne<K.storage&&(T+=L-ne),H.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=T,T+=K.storage}}}const A=T%L;return A>0&&(T+=L-A),w.__size=T,w.__cache={},this}function b(w){const E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(E.boundary=16,E.storage=w.byteLength):ft("WebGLRenderer: Unsupported uniform value type.",w),E}function _(w){const E=w.target;E.removeEventListener("dispose",_);const T=c.indexOf(E.__bindingPointIndex);c.splice(T,1),a.deleteBuffer(s[E.id]),delete s[E.id],delete o[E.id]}function S(){for(const w in s)a.deleteBuffer(s[w]);c=[],s={},o={}}return{bind:h,update:f,dispose:S}}const QE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ji=null;function JE(){return Ji===null&&(Ji=new zd(QE,16,16,Ws,gi),Ji.name="DFG_LUT",Ji.minFilter=gn,Ji.magFilter=gn,Ji.wrapS=Mr,Ji.wrapT=Mr,Ji.generateMipmaps=!1,Ji.needsUpdate=!0),Ji}class ms{constructor(e={}){const{canvas:t=Qy(),context:i=null,depth:s=!0,stencil:o=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:m=!1,outputBufferType:y=pi}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=c;const b=y,_=new Set([Nd,Id,Ld]),S=new Set([pi,sr,Xo,jo,Ad,Rd]),w=new Uint32Array(4),E=new Int32Array(4),T=new Q;let L=null,A=null;const I=[],C=[];let F=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let D=!1,H=null;this._outputColorSpace=di;let ie=0,J=0,G=null,$=-1,K=null;const W=new sn,re=new sn;let ne=null;const O=new $e(0);let q=0,ve=t.width,be=t.height,de=1,Y=null,me=null;const pe=new sn(0,0,ve,be),Ie=new sn(0,0,ve,be);let Xe=!1;const Oe=new Bd;let gt=!1,rt=!1;const bt=new Yt,Lt=new Q,vt=new sn,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function hn(){return G===null?de:1}let Z=i;function Ot(N,te){return t.getContext(N,te)}try{const N={alpha:!0,depth:s,stencil:o,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ed}`),t.addEventListener("webglcontextlost",ge,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",dt,!1),Z===null){const te="webgl2";if(Z=Ot(te,N),Z===null)throw Ot(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw Ft("WebGLRenderer: "+N.message),N}let _t,Ut,He,Wt,k,R,se,ye,we,Ae,Be,xe,Se,Re,je,Ne,Pe,at,pt,xt,j,Le,_e;function Ve(){_t=new Jb(Z),_t.init(),j=new WE(Z,_t),Ut=new Xb(Z,_t,e,j),He=new GE(Z,_t),Ut.reversedDepthBuffer&&m&&He.buffers.depth.setReversed(!0),Wt=new n2(Z),k=new AE,R=new VE(Z,_t,He,k,Ut,j,Wt),se=new Qb(z),ye=new aM(Z),Le=new Vb(Z,ye),we=new e2(Z,ye,Wt,Le),Ae=new r2(Z,we,ye,Le,Wt),at=new i2(Z,Ut,R),je=new jb(k),Be=new CE(z,se,_t,Ut,Le,je),xe=new KE(z,k),Se=new PE,Re=new DE(_t),Pe=new Gb(z,se,He,Ae,v,h),Ne=new HE(z,Ae,Ut),_e=new ZE(Z,Wt,Ut,He),pt=new Wb(Z,_t,Wt),xt=new t2(Z,_t,Wt),Wt.programs=Be.programs,z.capabilities=Ut,z.extensions=_t,z.properties=k,z.renderLists=Se,z.shadowMap=Ne,z.state=He,z.info=Wt}Ve(),b!==pi&&(F=new a2(b,t.width,t.height,s,o));const ke=new YE(z,Z);this.xr=ke,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const N=_t.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=_t.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(N){N!==void 0&&(de=N,this.setSize(ve,be,!1))},this.getSize=function(N){return N.set(ve,be)},this.setSize=function(N,te,he=!0){if(ke.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=N,be=te,t.width=Math.floor(N*de),t.height=Math.floor(te*de),he===!0&&(t.style.width=N+"px",t.style.height=te+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,N,te)},this.getDrawingBufferSize=function(N){return N.set(ve*de,be*de).floor()},this.setDrawingBufferSize=function(N,te,he){ve=N,be=te,de=he,t.width=Math.floor(N*he),t.height=Math.floor(te*he),this.setViewport(0,0,N,te)},this.setEffects=function(N){if(b===pi){Ft("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let te=0;te<N.length;te++)if(N[te].isOutputPass===!0){ft("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(W)},this.getViewport=function(N){return N.copy(pe)},this.setViewport=function(N,te,he,le){N.isVector4?pe.set(N.x,N.y,N.z,N.w):pe.set(N,te,he,le),He.viewport(W.copy(pe).multiplyScalar(de).round())},this.getScissor=function(N){return N.copy(Ie)},this.setScissor=function(N,te,he,le){N.isVector4?Ie.set(N.x,N.y,N.z,N.w):Ie.set(N,te,he,le),He.scissor(re.copy(Ie).multiplyScalar(de).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(N){He.setScissorTest(Xe=N)},this.setOpaqueSort=function(N){Y=N},this.setTransparentSort=function(N){me=N},this.getClearColor=function(N){return N.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(N=!0,te=!0,he=!0){let le=0;if(N){let oe=!1;if(G!==null){const Ge=G.texture.format;oe=_.has(Ge)}if(oe){const Ge=G.texture.type,Ke=S.has(Ge),ze=Pe.getClearColor(),et=Pe.getClearAlpha(),st=ze.r,yt=ze.g,St=ze.b;Ke?(w[0]=st,w[1]=yt,w[2]=St,w[3]=et,Z.clearBufferuiv(Z.COLOR,0,w)):(E[0]=st,E[1]=yt,E[2]=St,E[3]=et,Z.clearBufferiv(Z.COLOR,0,E))}else le|=Z.COLOR_BUFFER_BIT}te&&(le|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),he&&(le|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&Z.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),H=N},this.dispose=function(){t.removeEventListener("webglcontextlost",ge,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",dt,!1),Pe.dispose(),Se.dispose(),Re.dispose(),k.dispose(),se.dispose(),Ae.dispose(),Le.dispose(),_e.dispose(),Be.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",ji),ke.removeEventListener("sessionend",ar),Ai.stop()};function ge(N){N.preventDefault(),H0("WebGLRenderer: Context Lost."),D=!0}function Qe(){H0("WebGLRenderer: Context Restored."),D=!1;const N=Wt.autoReset,te=Ne.enabled,he=Ne.autoUpdate,le=Ne.needsUpdate,oe=Ne.type;Ve(),Wt.autoReset=N,Ne.enabled=te,Ne.autoUpdate=he,Ne.needsUpdate=le,Ne.type=oe}function dt(N){Ft("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Bt(N){const te=N.target;te.removeEventListener("dispose",Bt),wt(te)}function wt(N){Pn(N),k.remove(N)}function Pn(N){const te=k.get(N).programs;te!==void 0&&(te.forEach(function(he){Be.releaseProgram(he)}),N.isShaderMaterial&&Be.releaseShaderCache(N))}this.renderBufferDirect=function(N,te,he,le,oe,Ge){te===null&&(te=Xt);const Ke=oe.isMesh&&oe.matrixWorld.determinant()<0,ze=Fe(N,te,he,le,oe);He.setMaterial(le,Ke);let et=he.index,st=1;if(le.wireframe===!0){if(et=we.getWireframeAttribute(he),et===void 0)return;st=2}const yt=he.drawRange,St=he.attributes.position;let nt=yt.start*st,It=(yt.start+yt.count)*st;Ge!==null&&(nt=Math.max(nt,Ge.start*st),It=Math.min(It,(Ge.start+Ge.count)*st)),et!==null?(nt=Math.max(nt,0),It=Math.min(It,et.count)):St!=null&&(nt=Math.max(nt,0),It=Math.min(It,St.count));const jt=It-nt;if(jt<0||jt===1/0)return;Le.setup(oe,le,ze,he,et);let Jt,Ht=pt;if(et!==null&&(Jt=ye.get(et),Ht=xt,Ht.setIndex(Jt)),oe.isMesh)le.wireframe===!0?(He.setLineWidth(le.wireframeLinewidth*hn()),Ht.setMode(Z.LINES)):Ht.setMode(Z.TRIANGLES);else if(oe.isLine){let fn=le.linewidth;fn===void 0&&(fn=1),He.setLineWidth(fn*hn()),oe.isLineSegments?Ht.setMode(Z.LINES):oe.isLineLoop?Ht.setMode(Z.LINE_LOOP):Ht.setMode(Z.LINE_STRIP)}else oe.isPoints?Ht.setMode(Z.POINTS):oe.isSprite&&Ht.setMode(Z.TRIANGLES);if(oe.isBatchedMesh)if(_t.get("WEBGL_multi_draw"))Ht.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{const fn=oe._multiDrawStarts,qe=oe._multiDrawCounts,In=oe._multiDrawCount,Tt=et?ye.get(et).bytesPerElement:1,$n=k.get(le).currentProgram.getUniforms();for(let Kn=0;Kn<In;Kn++)$n.setValue(Z,"_gl_DrawID",Kn),Ht.render(fn[Kn]/Tt,qe[Kn])}else if(oe.isInstancedMesh)Ht.renderInstances(nt,jt,oe.count);else if(he.isInstancedBufferGeometry){const fn=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,qe=Math.min(he.instanceCount,fn);Ht.renderInstances(nt,jt,qe)}else Ht.render(nt,jt)};function Yn(N,te,he){N.transparent===!0&&N.side===Gi&&N.forceSinglePass===!1?(N.side=ri,N.needsUpdate=!0,Pr(N,te,he),N.side=ds,N.needsUpdate=!0,Pr(N,te,he),N.side=Gi):Pr(N,te,he)}this.compile=function(N,te,he=null){he===null&&(he=N),A=Re.get(he),A.init(te),C.push(A),he.traverseVisible(function(oe){oe.isLight&&oe.layers.test(te.layers)&&(A.pushLight(oe),oe.castShadow&&A.pushShadow(oe))}),N!==he&&N.traverseVisible(function(oe){oe.isLight&&oe.layers.test(te.layers)&&(A.pushLight(oe),oe.castShadow&&A.pushShadow(oe))}),A.setupLights();const le=new Set;return N.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;const Ge=oe.material;if(Ge)if(Array.isArray(Ge))for(let Ke=0;Ke<Ge.length;Ke++){const ze=Ge[Ke];Yn(ze,he,oe),le.add(ze)}else Yn(Ge,he,oe),le.add(Ge)}),A=C.pop(),le},this.compileAsync=function(N,te,he=null){const le=this.compile(N,te,he);return new Promise(oe=>{function Ge(){if(le.forEach(function(Ke){k.get(Ke).currentProgram.isReady()&&le.delete(Ke)}),le.size===0){oe(N);return}setTimeout(Ge,10)}_t.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let Ln=null;function Ar(N){Ln&&Ln(N)}function ji(){Ai.stop()}function ar(){Ai.start()}const Ai=new qx;Ai.setAnimationLoop(Ar),typeof self<"u"&&Ai.setContext(self),this.setAnimationLoop=function(N){Ln=N,ke.setAnimationLoop(N),N===null?Ai.stop():Ai.start()},ke.addEventListener("sessionstart",ji),ke.addEventListener("sessionend",ar),this.render=function(N,te){if(te!==void 0&&te.isCamera!==!0){Ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;H!==null&&H.renderStart(N,te);const he=ke.enabled===!0&&ke.isPresenting===!0,le=F!==null&&(G===null||he)&&F.begin(z,G);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(te),te=ke.getCamera()),N.isScene===!0&&N.onBeforeRender(z,N,te,G),A=Re.get(N,C.length),A.init(te),A.state.textureUnits=R.getTextureUnits(),C.push(A),bt.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),Oe.setFromProjectionMatrix(bt,tr,te.reversedDepth),rt=this.localClippingEnabled,gt=je.init(this.clippingPlanes,rt),L=Se.get(N,I.length),L.init(),I.push(L),ke.enabled===!0&&ke.isPresenting===!0){const Ke=z.xr.getDepthSensingMesh();Ke!==null&&Rr(Ke,te,-1/0,z.sortObjects)}Rr(N,te,0,z.sortObjects),L.finish(),z.sortObjects===!0&&L.sort(Y,me),kt=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,kt&&Pe.addToRenderList(L,N),this.info.render.frame++,gt===!0&&je.beginShadows();const oe=A.state.shadowsArray;if(Ne.render(oe,N,te),gt===!0&&je.endShadows(),this.info.autoReset===!0&&this.info.reset(),(le&&F.hasRenderPass())===!1){const Ke=L.opaque,ze=L.transmissive;if(A.setupLights(),te.isArrayCamera){const et=te.cameras;if(ze.length>0)for(let st=0,yt=et.length;st<yt;st++){const St=et[st];xi(Ke,ze,N,St)}kt&&Pe.render(N);for(let st=0,yt=et.length;st<yt;st++){const St=et[st];gs(L,N,St,St.viewport)}}else ze.length>0&&xi(Ke,ze,N,te),kt&&Pe.render(N),gs(L,N,te)}G!==null&&J===0&&(R.updateMultisampleRenderTarget(G),R.updateRenderTargetMipmap(G)),le&&F.end(z),N.isScene===!0&&N.onAfterRender(z,N,te),Le.resetDefaultState(),$=-1,K=null,C.pop(),C.length>0?(A=C[C.length-1],R.setTextureUnits(A.state.textureUnits),gt===!0&&je.setGlobalState(z.clippingPlanes,A.state.camera)):A=null,I.pop(),I.length>0?L=I[I.length-1]:L=null,H!==null&&H.renderEnd()};function Rr(N,te,he,le){if(N.visible===!1)return;if(N.layers.test(te.layers)){if(N.isGroup)he=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(te);else if(N.isLightProbeGrid)A.pushLightProbeGrid(N);else if(N.isLight)A.pushLight(N),N.castShadow&&A.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Oe.intersectsSprite(N)){le&&vt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(bt);const Ke=Ae.update(N),ze=N.material;ze.visible&&L.push(N,Ke,ze,he,vt.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Oe.intersectsObject(N))){const Ke=Ae.update(N),ze=N.material;if(le&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),vt.copy(N.boundingSphere.center)):(Ke.boundingSphere===null&&Ke.computeBoundingSphere(),vt.copy(Ke.boundingSphere.center)),vt.applyMatrix4(N.matrixWorld).applyMatrix4(bt)),Array.isArray(ze)){const et=Ke.groups;for(let st=0,yt=et.length;st<yt;st++){const St=et[st],nt=ze[St.materialIndex];nt&&nt.visible&&L.push(N,Ke,nt,he,vt.z,St)}}else ze.visible&&L.push(N,Ke,ze,he,vt.z,null)}}const Ge=N.children;for(let Ke=0,ze=Ge.length;Ke<ze;Ke++)Rr(Ge[Ke],te,he,le)}function gs(N,te,he,le){const{opaque:oe,transmissive:Ge,transparent:Ke}=N;A.setupLightsView(he),gt===!0&&je.setGlobalState(z.clippingPlanes,he),le&&He.viewport(W.copy(le)),oe.length>0&&Ri(oe,te,he),Ge.length>0&&Ri(Ge,te,he),Ke.length>0&&Ri(Ke,te,he),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function xi(N,te,he,le){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[le.id]===void 0){const nt=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[le.id]=new si(1,1,{generateMipmaps:!0,type:nt?gi:pi,minFilter:Hs,samples:Math.max(4,Ut.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}const Ge=A.state.transmissionRenderTarget[le.id],Ke=le.viewport||W;Ge.setSize(Ke.z*z.transmissionResolutionScale,Ke.w*z.transmissionResolutionScale);const ze=z.getRenderTarget(),et=z.getActiveCubeFace(),st=z.getActiveMipmapLevel();z.setRenderTarget(Ge),z.getClearColor(O),q=z.getClearAlpha(),q<1&&z.setClearColor(16777215,.5),z.clear(),kt&&Pe.render(he);const yt=z.toneMapping;z.toneMapping=rr;const St=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),A.setupLightsView(le),gt===!0&&je.setGlobalState(z.clippingPlanes,le),Ri(N,he,le),R.updateMultisampleRenderTarget(Ge),R.updateRenderTargetMipmap(Ge),_t.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let It=0,jt=te.length;It<jt;It++){const Jt=te[It],{object:Ht,geometry:fn,material:qe,group:In}=Jt;if(qe.side===Gi&&Ht.layers.test(le.layers)){const Tt=qe.side;qe.side=ri,qe.needsUpdate=!0,vi(Ht,he,le,fn,qe,In),qe.side=Tt,qe.needsUpdate=!0,nt=!0}}nt===!0&&(R.updateMultisampleRenderTarget(Ge),R.updateRenderTargetMipmap(Ge))}z.setRenderTarget(ze,et,st),z.setClearColor(O,q),St!==void 0&&(le.viewport=St),z.toneMapping=yt}function Ri(N,te,he){const le=te.isScene===!0?te.overrideMaterial:null;for(let oe=0,Ge=N.length;oe<Ge;oe++){const Ke=N[oe],{object:ze,geometry:et,group:st}=Ke;let yt=Ke.material;yt.allowOverride===!0&&le!==null&&(yt=le),ze.layers.test(he.layers)&&vi(ze,te,he,et,yt,st)}}function vi(N,te,he,le,oe,Ge){N.onBeforeRender(z,te,he,le,oe,Ge),N.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),oe.onBeforeRender(z,te,he,le,N,Ge),oe.transparent===!0&&oe.side===Gi&&oe.forceSinglePass===!1?(oe.side=ri,oe.needsUpdate=!0,z.renderBufferDirect(he,te,le,oe,N,Ge),oe.side=ds,oe.needsUpdate=!0,z.renderBufferDirect(he,te,le,oe,N,Ge),oe.side=Gi):z.renderBufferDirect(he,te,le,oe,N,Ge),N.onAfterRender(z,te,he,le,oe,Ge)}function Pr(N,te,he){te.isScene!==!0&&(te=Xt);const le=k.get(N),oe=A.state.lights,Ge=A.state.shadowsArray,Ke=oe.state.version,ze=Be.getParameters(N,oe.state,Ge,te,he,A.state.lightProbeGridArray),et=Be.getProgramCacheKey(ze);let st=le.programs;le.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?te.environment:null,le.fog=te.fog;const yt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;le.envMap=se.get(N.envMap||le.environment,yt),le.envMapRotation=le.environment!==null&&N.envMap===null?te.environmentRotation:N.envMapRotation,st===void 0&&(N.addEventListener("dispose",Bt),st=new Map,le.programs=st);let St=st.get(et);if(St!==void 0){if(le.currentProgram===St&&le.lightsStateVersion===Ke)return Lr(N,ze),St}else ze.uniforms=Be.getUniforms(N),H!==null&&N.isNodeMaterial&&H.build(N,he,ze),N.onBeforeCompile(ze,z),St=Be.acquireProgram(ze,et),st.set(et,St),le.uniforms=ze.uniforms;const nt=le.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(nt.clippingPlanes=je.uniform),Lr(N,ze),le.needsLights=ut(N),le.lightsStateVersion=Ke,le.needsLights&&(nt.ambientLightColor.value=oe.state.ambient,nt.lightProbe.value=oe.state.probe,nt.directionalLights.value=oe.state.directional,nt.directionalLightShadows.value=oe.state.directionalShadow,nt.spotLights.value=oe.state.spot,nt.spotLightShadows.value=oe.state.spotShadow,nt.rectAreaLights.value=oe.state.rectArea,nt.ltc_1.value=oe.state.rectAreaLTC1,nt.ltc_2.value=oe.state.rectAreaLTC2,nt.pointLights.value=oe.state.point,nt.pointLightShadows.value=oe.state.pointShadow,nt.hemisphereLights.value=oe.state.hemi,nt.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,nt.spotLightMatrix.value=oe.state.spotLightMatrix,nt.spotLightMap.value=oe.state.spotLightMap,nt.pointShadowMatrix.value=oe.state.pointShadowMatrix),le.lightProbeGrid=A.state.lightProbeGridArray.length>0,le.currentProgram=St,le.uniformsList=null,St}function xs(N){if(N.uniformsList===null){const te=N.currentProgram.getUniforms();N.uniformsList=Ic.seqWithValue(te.seq,N.uniforms)}return N.uniformsList}function Lr(N,te){const he=k.get(N);he.outputColorSpace=te.outputColorSpace,he.batching=te.batching,he.batchingColor=te.batchingColor,he.instancing=te.instancing,he.instancingColor=te.instancingColor,he.instancingMorph=te.instancingMorph,he.skinning=te.skinning,he.morphTargets=te.morphTargets,he.morphNormals=te.morphNormals,he.morphColors=te.morphColors,he.morphTargetsCount=te.morphTargetsCount,he.numClippingPlanes=te.numClippingPlanes,he.numIntersection=te.numClipIntersection,he.vertexAlphas=te.vertexAlphas,he.vertexTangents=te.vertexTangents,he.toneMapping=te.toneMapping}function Me(N,te){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;T.setFromMatrixPosition(te.matrixWorld);for(let he=0,le=N.length;he<le;he++){const oe=N[he];if(oe.texture!==null&&oe.boundingBox.containsPoint(T))return oe}return null}function Fe(N,te,he,le,oe){te.isScene!==!0&&(te=Xt),R.resetTextureUnits();const Ge=te.fog,Ke=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?te.environment:null,ze=G===null?z.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Pt.workingColorSpace,et=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,st=se.get(le.envMap||Ke,et),yt=le.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,St=!!he.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),nt=!!he.morphAttributes.position,It=!!he.morphAttributes.normal,jt=!!he.morphAttributes.color;let Jt=rr;le.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Jt=z.toneMapping);const Ht=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,fn=Ht!==void 0?Ht.length:0,qe=k.get(le),In=A.state.lights;if(gt===!0&&(rt===!0||N!==K)){const Gt=N===K&&le.id===$;je.setState(le,N,Gt)}let Tt=!1;le.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==In.state.version||qe.outputColorSpace!==ze||oe.isBatchedMesh&&qe.batching===!1||!oe.isBatchedMesh&&qe.batching===!0||oe.isBatchedMesh&&qe.batchingColor===!0&&oe.colorTexture===null||oe.isBatchedMesh&&qe.batchingColor===!1&&oe.colorTexture!==null||oe.isInstancedMesh&&qe.instancing===!1||!oe.isInstancedMesh&&qe.instancing===!0||oe.isSkinnedMesh&&qe.skinning===!1||!oe.isSkinnedMesh&&qe.skinning===!0||oe.isInstancedMesh&&qe.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&qe.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&qe.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&qe.instancingMorph===!1&&oe.morphTexture!==null||qe.envMap!==st||le.fog===!0&&qe.fog!==Ge||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==je.numPlanes||qe.numIntersection!==je.numIntersection)||qe.vertexAlphas!==yt||qe.vertexTangents!==St||qe.morphTargets!==nt||qe.morphNormals!==It||qe.morphColors!==jt||qe.toneMapping!==Jt||qe.morphTargetsCount!==fn||!!qe.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(Tt=!0):(Tt=!0,qe.__version=le.version);let $n=qe.currentProgram;Tt===!0&&($n=Pr(le,te,oe),H&&le.isNodeMaterial&&H.onUpdateProgram(le,$n,qe));let Kn=!1,Ct=!1,or=!1;const zt=$n.getUniforms(),$t=qe.uniforms;if(He.useProgram($n.program)&&(Kn=!0,Ct=!0,or=!0),le.id!==$&&($=le.id,Ct=!0),qe.needsLights){const Gt=Me(A.state.lightProbeGridArray,oe);qe.lightProbeGrid!==Gt&&(qe.lightProbeGrid=Gt,Ct=!0)}if(Kn||K!==N){He.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),zt.setValue(Z,"projectionMatrix",N.projectionMatrix),zt.setValue(Z,"viewMatrix",N.matrixWorldInverse);const Li=zt.map.cameraPosition;Li!==void 0&&Li.setValue(Z,Lt.setFromMatrixPosition(N.matrixWorld)),Ut.logarithmicDepthBuffer&&zt.setValue(Z,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&zt.setValue(Z,"isOrthographic",N.isOrthographicCamera===!0),K!==N&&(K=N,Ct=!0,or=!0)}if(qe.needsLights&&(In.state.directionalShadowMap.length>0&&zt.setValue(Z,"directionalShadowMap",In.state.directionalShadowMap,R),In.state.spotShadowMap.length>0&&zt.setValue(Z,"spotShadowMap",In.state.spotShadowMap,R),In.state.pointShadowMap.length>0&&zt.setValue(Z,"pointShadowMap",In.state.pointShadowMap,R)),oe.isSkinnedMesh){zt.setOptional(Z,oe,"bindMatrix"),zt.setOptional(Z,oe,"bindMatrixInverse");const Gt=oe.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),zt.setValue(Z,"boneTexture",Gt.boneTexture,R))}oe.isBatchedMesh&&(zt.setOptional(Z,oe,"batchingTexture"),zt.setValue(Z,"batchingTexture",oe._matricesTexture,R),zt.setOptional(Z,oe,"batchingIdTexture"),zt.setValue(Z,"batchingIdTexture",oe._indirectTexture,R),zt.setOptional(Z,oe,"batchingColorTexture"),oe._colorsTexture!==null&&zt.setValue(Z,"batchingColorTexture",oe._colorsTexture,R));const Pi=he.morphAttributes;if((Pi.position!==void 0||Pi.normal!==void 0||Pi.color!==void 0)&&at.update(oe,he,$n),(Ct||qe.receiveShadow!==oe.receiveShadow)&&(qe.receiveShadow=oe.receiveShadow,zt.setValue(Z,"receiveShadow",oe.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&te.environment!==null&&($t.envMapIntensity.value=te.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=JE()),Ct){if(zt.setValue(Z,"toneMappingExposure",z.toneMappingExposure),qe.needsLights&&Ue($t,or),Ge&&le.fog===!0&&xe.refreshFogUniforms($t,Ge),xe.refreshMaterialUniforms($t,le,de,be,A.state.transmissionRenderTarget[N.id]),qe.needsLights&&qe.lightProbeGrid){const Gt=qe.lightProbeGrid;$t.probesSH.value=Gt.texture,$t.probesMin.value.copy(Gt.boundingBox.min),$t.probesMax.value.copy(Gt.boundingBox.max),$t.probesResolution.value.copy(Gt.resolution)}Ic.upload(Z,xs(qe),$t,R)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Ic.upload(Z,xs(qe),$t,R),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&zt.setValue(Z,"center",oe.center),zt.setValue(Z,"modelViewMatrix",oe.modelViewMatrix),zt.setValue(Z,"normalMatrix",oe.normalMatrix),zt.setValue(Z,"modelMatrix",oe.matrixWorld),le.uniformsGroups!==void 0){const Gt=le.uniformsGroups;for(let Li=0,qi=Gt.length;Li<qi;Li++){const _s=Gt[Li];_e.update(_s,$n),_e.bind(_s,$n)}}return $n}function Ue(N,te){N.ambientLightColor.needsUpdate=te,N.lightProbe.needsUpdate=te,N.directionalLights.needsUpdate=te,N.directionalLightShadows.needsUpdate=te,N.pointLights.needsUpdate=te,N.pointLightShadows.needsUpdate=te,N.spotLights.needsUpdate=te,N.spotLightShadows.needsUpdate=te,N.rectAreaLights.needsUpdate=te,N.hemisphereLights.needsUpdate=te}function ut(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(N,te,he){const le=k.get(N);le.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),k.get(N.texture).__webglTexture=te,k.get(N.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:he,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,te){const he=k.get(N);he.__webglFramebuffer=te,he.__useDefaultFramebuffer=te===void 0};const ht=Z.createFramebuffer();this.setRenderTarget=function(N,te=0,he=0){G=N,ie=te,J=he;let le=null,oe=!1,Ge=!1;if(N){const ze=k.get(N);if(ze.__useDefaultFramebuffer!==void 0){He.bindFramebuffer(Z.FRAMEBUFFER,ze.__webglFramebuffer),W.copy(N.viewport),re.copy(N.scissor),ne=N.scissorTest,He.viewport(W),He.scissor(re),He.setScissorTest(ne),$=-1;return}else if(ze.__webglFramebuffer===void 0)R.setupRenderTarget(N);else if(ze.__hasExternalTextures)R.rebindTextures(N,k.get(N.texture).__webglTexture,k.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const yt=N.depthTexture;if(ze.__boundDepthTexture!==yt){if(yt!==null&&k.has(yt)&&(N.width!==yt.image.width||N.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(N)}}const et=N.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(Ge=!0);const st=k.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(st[te])?le=st[te][he]:le=st[te],oe=!0):N.samples>0&&R.useMultisampledRTT(N)===!1?le=k.get(N).__webglMultisampledFramebuffer:Array.isArray(st)?le=st[he]:le=st,W.copy(N.viewport),re.copy(N.scissor),ne=N.scissorTest}else W.copy(pe).multiplyScalar(de).floor(),re.copy(Ie).multiplyScalar(de).floor(),ne=Xe;if(he!==0&&(le=ht),He.bindFramebuffer(Z.FRAMEBUFFER,le)&&He.drawBuffers(N,le),He.viewport(W),He.scissor(re),He.setScissorTest(ne),oe){const ze=k.get(N.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+te,ze.__webglTexture,he)}else if(Ge){const ze=te;for(let et=0;et<N.textures.length;et++){const st=k.get(N.textures[et]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+et,st.__webglTexture,he,ze)}}else if(N!==null&&he!==0){const ze=k.get(N.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,ze.__webglTexture,he)}$=-1},this.readRenderTargetPixels=function(N,te,he,le,oe,Ge,Ke,ze=0){if(!(N&&N.isWebGLRenderTarget)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let et=k.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ke!==void 0&&(et=et[Ke]),et){He.bindFramebuffer(Z.FRAMEBUFFER,et);try{const st=N.textures[ze],yt=st.format,St=st.type;if(N.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+ze),!Ut.textureFormatReadable(yt)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(St)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=N.width-le&&he>=0&&he<=N.height-oe&&Z.readPixels(te,he,le,oe,j.convert(yt),j.convert(St),Ge)}finally{const st=G!==null?k.get(G).__webglFramebuffer:null;He.bindFramebuffer(Z.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(N,te,he,le,oe,Ge,Ke,ze=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let et=k.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ke!==void 0&&(et=et[Ke]),et)if(te>=0&&te<=N.width-le&&he>=0&&he<=N.height-oe){He.bindFramebuffer(Z.FRAMEBUFFER,et);const st=N.textures[ze],yt=st.format,St=st.type;if(N.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+ze),!Ut.textureFormatReadable(yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,nt),Z.bufferData(Z.PIXEL_PACK_BUFFER,Ge.byteLength,Z.STREAM_READ),Z.readPixels(te,he,le,oe,j.convert(yt),j.convert(St),0);const It=G!==null?k.get(G).__webglFramebuffer:null;He.bindFramebuffer(Z.FRAMEBUFFER,It);const jt=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await Jy(Z,jt,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,nt),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Ge),Z.deleteBuffer(nt),Z.deleteSync(jt),Ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,te=null,he=0){const le=Math.pow(2,-he),oe=Math.floor(N.image.width*le),Ge=Math.floor(N.image.height*le),Ke=te!==null?te.x:0,ze=te!==null?te.y:0;R.setTexture2D(N,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,he,0,0,Ke,ze,oe,Ge),He.unbindTexture()};const Ir=Z.createFramebuffer(),vs=Z.createFramebuffer();this.copyTextureToTexture=function(N,te,he=null,le=null,oe=0,Ge=0){let Ke,ze,et,st,yt,St,nt,It,jt;const Jt=N.isCompressedTexture?N.mipmaps[Ge]:N.image;if(he!==null)Ke=he.max.x-he.min.x,ze=he.max.y-he.min.y,et=he.isBox3?he.max.z-he.min.z:1,st=he.min.x,yt=he.min.y,St=he.isBox3?he.min.z:0;else{const $t=Math.pow(2,-oe);Ke=Math.floor(Jt.width*$t),ze=Math.floor(Jt.height*$t),N.isDataArrayTexture?et=Jt.depth:N.isData3DTexture?et=Math.floor(Jt.depth*$t):et=1,st=0,yt=0,St=0}le!==null?(nt=le.x,It=le.y,jt=le.z):(nt=0,It=0,jt=0);const Ht=j.convert(te.format),fn=j.convert(te.type);let qe;te.isData3DTexture?(R.setTexture3D(te,0),qe=Z.TEXTURE_3D):te.isDataArrayTexture||te.isCompressedArrayTexture?(R.setTexture2DArray(te,0),qe=Z.TEXTURE_2D_ARRAY):(R.setTexture2D(te,0),qe=Z.TEXTURE_2D),He.activeTexture(Z.TEXTURE0),He.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,te.flipY),He.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),He.pixelStorei(Z.UNPACK_ALIGNMENT,te.unpackAlignment);const In=He.getParameter(Z.UNPACK_ROW_LENGTH),Tt=He.getParameter(Z.UNPACK_IMAGE_HEIGHT),$n=He.getParameter(Z.UNPACK_SKIP_PIXELS),Kn=He.getParameter(Z.UNPACK_SKIP_ROWS),Ct=He.getParameter(Z.UNPACK_SKIP_IMAGES);He.pixelStorei(Z.UNPACK_ROW_LENGTH,Jt.width),He.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Jt.height),He.pixelStorei(Z.UNPACK_SKIP_PIXELS,st),He.pixelStorei(Z.UNPACK_SKIP_ROWS,yt),He.pixelStorei(Z.UNPACK_SKIP_IMAGES,St);const or=N.isDataArrayTexture||N.isData3DTexture,zt=te.isDataArrayTexture||te.isData3DTexture;if(N.isDepthTexture){const $t=k.get(N),Pi=k.get(te),Gt=k.get($t.__renderTarget),Li=k.get(Pi.__renderTarget);He.bindFramebuffer(Z.READ_FRAMEBUFFER,Gt.__webglFramebuffer),He.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let qi=0;qi<et;qi++)or&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,k.get(N).__webglTexture,oe,St+qi),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,k.get(te).__webglTexture,Ge,jt+qi)),Z.blitFramebuffer(st,yt,Ke,ze,nt,It,Ke,ze,Z.DEPTH_BUFFER_BIT,Z.NEAREST);He.bindFramebuffer(Z.READ_FRAMEBUFFER,null),He.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(oe!==0||N.isRenderTargetTexture||k.has(N)){const $t=k.get(N),Pi=k.get(te);He.bindFramebuffer(Z.READ_FRAMEBUFFER,Ir),He.bindFramebuffer(Z.DRAW_FRAMEBUFFER,vs);for(let Gt=0;Gt<et;Gt++)or?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,$t.__webglTexture,oe,St+Gt):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,$t.__webglTexture,oe),zt?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Pi.__webglTexture,Ge,jt+Gt):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Pi.__webglTexture,Ge),oe!==0?Z.blitFramebuffer(st,yt,Ke,ze,nt,It,Ke,ze,Z.COLOR_BUFFER_BIT,Z.NEAREST):zt?Z.copyTexSubImage3D(qe,Ge,nt,It,jt+Gt,st,yt,Ke,ze):Z.copyTexSubImage2D(qe,Ge,nt,It,st,yt,Ke,ze);He.bindFramebuffer(Z.READ_FRAMEBUFFER,null),He.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else zt?N.isDataTexture||N.isData3DTexture?Z.texSubImage3D(qe,Ge,nt,It,jt,Ke,ze,et,Ht,fn,Jt.data):te.isCompressedArrayTexture?Z.compressedTexSubImage3D(qe,Ge,nt,It,jt,Ke,ze,et,Ht,Jt.data):Z.texSubImage3D(qe,Ge,nt,It,jt,Ke,ze,et,Ht,fn,Jt):N.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Ge,nt,It,Ke,ze,Ht,fn,Jt.data):N.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Ge,nt,It,Jt.width,Jt.height,Ht,Jt.data):Z.texSubImage2D(Z.TEXTURE_2D,Ge,nt,It,Ke,ze,Ht,fn,Jt);He.pixelStorei(Z.UNPACK_ROW_LENGTH,In),He.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Tt),He.pixelStorei(Z.UNPACK_SKIP_PIXELS,$n),He.pixelStorei(Z.UNPACK_SKIP_ROWS,Kn),He.pixelStorei(Z.UNPACK_SKIP_IMAGES,Ct),Ge===0&&te.generateMipmaps&&Z.generateMipmap(qe),He.unbindTexture()},this.initRenderTarget=function(N){k.get(N).__webglFramebuffer===void 0&&R.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?R.setTextureCube(N,0):N.isData3DTexture?R.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?R.setTexture2DArray(N,0):R.setTexture2D(N,0),He.unbindTexture()},this.resetState=function(){ie=0,J=0,G=null,He.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}}class eT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"threeCanvas");U(this,"scene");U(this,"camera");U(this,"renderer");U(this,"videoTexture",null);U(this,"videoElement",null);U(this,"plane",null);U(this,"time",0);U(this,"uniforms");U(this,"targetAmplitude",.3);U(this,"targetFrequency",100);U(this,"currentAmplitude",.3);U(this,"currentFrequency",100);U(this,"clapVibration",0);this.canvas=e,this.ctx=t,this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.scene=new ps,this.camera=new ja(-1,1,1,-1,0,1),this.renderer=new ms({canvas:this.threeCanvas,alpha:!1,antialias:!1}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const i=new zd(new Uint8Array([0,0,0,255]),1,1,mi);i.needsUpdate=!0,this.uniforms={uTime:{value:0},uTexture:{value:i},uAmplitude:{value:.3},uFrequency:{value:100},uColorIntensity:{value:.8},uColor1:{value:new $e("#6366f1")},uColor2:{value:new $e("#8b5cf6")},uColor3:{value:new $e("#d946ef")},uColor4:{value:new $e("#ec4899")},uColor5:{value:new $e("#f43f5e")}};const s=new ln({uniforms:this.uniforms,vertexShader:this.getVertexShader(),fragmentShader:this.getFragmentShader()}),o=new Cr(2,2);this.plane=new un(o,s),this.scene.add(this.plane),console.log("🎥 DistortedCameraRenderer initialized")}setVideoElement(e){if(!e){console.warn("DistortedCameraRenderer: No video element provided");return}this.videoElement===e&&this.videoTexture||(this.videoElement=e,this.videoTexture&&this.videoTexture.dispose(),this.videoTexture=new BS(e),this.videoTexture.minFilter=gn,this.videoTexture.magFilter=gn,this.videoTexture.format=mi,this.uniforms.uTexture.value=this.videoTexture,console.log("✅ DistortedCameraRenderer: Video texture created"))}getVertexShader(){return`
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
    `}render(e,t,i){if(!this.plane)return;(this.canvas.width!==this.threeCanvas.width||this.canvas.height!==this.threeCanvas.height)&&(this.threeCanvas.width=this.canvas.width,this.threeCanvas.height=this.canvas.height,this.renderer.setSize(this.canvas.width,this.canvas.height)),this.time+=.016*Sn(),this.uniforms.uTime.value=this.time,t&&t.length>0&&(this.uniforms.uColor1.value.set(t[0]),this.uniforms.uColor2.value.set(t[1]||t[0]),this.uniforms.uColor3.value.set(t[2]||t[0]),this.uniforms.uColor4.value.set(t[3]||t[0]),this.uniforms.uColor5.value.set(t[4]||t[0]));const s=e.left,o=e.right;if(s||o)if(e.clapping)this.targetAmplitude=2,this.targetFrequency=300,this.clapVibration=1;else{const u=s||o;if(u){const f=50+Math.max(0,Math.min(1,u.position.x))*350,g=Math.max(0,Math.min(1,1-u.position.y))*1.5,m=u.fingerCount||0;u.gesture==="pinch"||m<=1?(this.targetAmplitude=g*.2,this.targetFrequency=f*.5):(this.targetAmplitude=g,this.targetFrequency=f)}}else this.targetAmplitude=.5,this.targetFrequency=150;this.currentAmplitude+=(this.targetAmplitude-this.currentAmplitude)*.1,this.currentFrequency+=(this.targetFrequency-this.currentFrequency)*.1,this.clapVibration*=.95;const c=this.currentAmplitude+this.clapVibration*Math.sin(this.time*50)*.5;this.uniforms.uAmplitude.value=c,this.uniforms.uFrequency.value=this.currentFrequency,this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){this.videoTexture&&this.videoTexture.dispose(),this.plane&&(this.plane.geometry.dispose(),this.plane.material instanceof Xi&&this.plane.material.dispose()),this.renderer.dispose(),this.renderer.forceContextLoss(),console.log("🎥 DistortedCameraRenderer destroyed")}}class tT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"streams",[]);U(this,"vanishingPoint",{x:0,y:0});U(this,"targetVanishingPoint",{x:0,y:0});U(this,"vanishingPointRight",{x:0,y:0});U(this,"targetVanishingPointRight",{x:0,y:0});U(this,"scanLineOffset",0);U(this,"clapAccumulation",0);U(this,"shakeIntensity",0);U(this,"time",0);U(this,"lastFingerCount",5);this.canvas=e,this.ctx=t,this.vanishingPoint.x=e.width*.3,this.vanishingPoint.y=e.height/2,this.targetVanishingPoint.x=this.vanishingPoint.x,this.targetVanishingPoint.y=this.vanishingPoint.y,this.vanishingPointRight.x=e.width*.7,this.vanishingPointRight.y=e.height/2,this.targetVanishingPointRight.x=this.vanishingPointRight.x,this.targetVanishingPointRight.y=this.vanishingPointRight.y;for(let i=0;i<6;i++)this.streams.push({angle:i/6*Math.PI*2,speed:1,packets:[],branchLevel:0})}render(e,t){const{width:i,height:s}=this.canvas;this.time+=.016*Sn();const o=e.left,c=e.right,u=e.clapping||!1,h=e.clapIntensity||0;let f=1,p=1,g=5;o&&c?g=Math.floor(((o.fingerCount||5)+(c.fingerCount||5))/2):(o||c)&&(g=(o||c).fingerCount||5),this.lastFingerCount=g,g===1?(f=.003,p=.3):g===2?(f=.5,p=.7):(f=2,p=2.5),u?(this.clapAccumulation=Math.min(10,this.clapAccumulation+h*2),this.shakeIntensity=this.clapAccumulation*3,this.clapAccumulation>2&&Math.random()<.3&&this.spawnFractalBranch()):(this.clapAccumulation*=.98,this.shakeIntensity*=.9),o?(this.targetVanishingPoint.x=o.position.x*i,this.targetVanishingPoint.y=o.position.y*s):(this.targetVanishingPoint.x=i*.3,this.targetVanishingPoint.y=s/2),c?(this.targetVanishingPointRight.x=c.position.x*i,this.targetVanishingPointRight.y=c.position.y*s):(this.targetVanishingPointRight.x=i*.7,this.targetVanishingPointRight.y=s/2),this.vanishingPoint.x+=(this.targetVanishingPoint.x-this.vanishingPoint.x)*.05,this.vanishingPoint.y+=(this.targetVanishingPoint.y-this.vanishingPoint.y)*.05,this.vanishingPointRight.x+=(this.targetVanishingPointRight.x-this.vanishingPointRight.x)*.05,this.vanishingPointRight.y+=(this.targetVanishingPointRight.y-this.vanishingPointRight.y)*.05;let m=0,y=0;this.shakeIntensity>.5&&(m=(Math.random()-.5)*this.shakeIntensity,y=(Math.random()-.5)*this.shakeIntensity),this.ctx.fillStyle="rgba(0, 0, 0, 0.15)",this.ctx.fillRect(0,0,i,s),this.ctx.save(),this.ctx.translate(m,y),this.streams.forEach((_,S)=>{const w=.05*p*(_.branchLevel===0?1:.5);if(Math.random()<w){const E=["rect","hex","diamond"];_.packets.push({x:this.vanishingPoint.x,y:this.vanishingPoint.y,z:0,width:4+Math.random()*8,height:20+Math.random()*40,rotation:_.angle+(Math.random()-.5)*.3,rotationSpeed:(Math.random()-.5)*.02*f,streamIndex:S,age:0,hue:Math.random()*360,shimmerPhase:Math.random()*Math.PI*2,panelType:E[Math.floor(Math.random()*3)],waveAmplitude:Math.random()*10,waveFrequency:Math.random()*2+1,quantumPhase:Math.random()*Math.PI*2,particleCloud:[]})}_.packets=_.packets.filter(E=>{E.age+=.016*f,E.z+=.01*f*(1+_.branchLevel*.2),E.rotation+=E.rotationSpeed;const T=200*E.z,L=Math.sin(E.age*2+S)*30*E.z;return E.x=this.vanishingPoint.x+Math.cos(_.angle)*T+Math.sin(E.age*3)*L,E.y=this.vanishingPoint.y+Math.sin(_.angle)*T+Math.cos(E.age*2.5)*L,E.z<1&&E.x>-100&&E.x<i+100&&E.y>-100&&E.y<s+100})});const v=this.streams.flatMap(_=>_.packets);v.sort((_,S)=>_.z-S.z),v.forEach(_=>{const S=.2+_.z*.8,w=.3+_.z*.7,E=Math.sin(this.time*10+_.quantumPhase)*3*(1-_.z),T=Math.cos(_.age*_.waveFrequency)*E,L=Math.sin(_.age*_.waveFrequency)*E;this.ctx.save(),this.ctx.translate(_.x+T,_.y+L);const A=Math.floor(_.streamIndex%t.length),I=t[A],C=_.width*S,F=_.height*S;_.particleCloud.length<20&&Math.random()<.3&&_.particleCloud.push({dx:(Math.random()-.5)*C*2,dy:(Math.random()-.5)*F*2,life:1}),_.particleCloud=_.particleCloud.filter(D=>{if(D.life-=.02,D.life>0){const H=Math.sin(this.time*5+D.dx+D.dy)*.5+.5;return this.ctx.globalAlpha=w*D.life*.4*H,this.ctx.fillStyle=I,this.ctx.beginPath(),this.ctx.arc(D.dx,D.dy,1.5*S,0,Math.PI*2),this.ctx.fill(),!0}return!1}),this.ctx.globalAlpha=w*.8;const z=this.ctx.createRadialGradient(0,0,0,0,0,Math.max(C,F));z.addColorStop(0,this.addAlpha(I,.8)),z.addColorStop(.3,this.addAlpha(I,.4)),z.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.fillStyle=z,this.ctx.beginPath(),this.ctx.arc(0,0,Math.max(C,F),0,Math.PI*2),this.ctx.fill(),this.ctx.globalAlpha=w*.6,this.ctx.strokeStyle=I,this.ctx.lineWidth=1.5*S;for(let D=0;D<3;D++){this.ctx.beginPath();const H=D*Math.PI*.66,ie=(this.time*50+_.age*30+H*20)%(Math.max(C,F)*2);ie>0&&(this.ctx.globalAlpha=w*(1-ie/(Math.max(C,F)*2))*.5,this.ctx.arc(0,0,ie,0,Math.PI*2),this.ctx.stroke())}this.ctx.globalAlpha=w*.4,this.ctx.strokeStyle=I,this.ctx.lineWidth=.8*S;for(let D=0;D<6;D++){const H=D/6*Math.PI*2+this.time*.5,ie=(Math.sin(this.time*2+D)*.5+1)*F*.8;this.ctx.beginPath(),this.ctx.moveTo(0,0);const J=Math.cos(H+.3)*ie*.6,G=Math.sin(H+.3)*ie*.6,$=Math.cos(H)*ie,K=Math.sin(H)*ie;this.ctx.quadraticCurveTo(J,G,$,K),this.ctx.stroke(),this.ctx.globalAlpha=w*.8,this.ctx.fillStyle=I,this.ctx.beginPath(),this.ctx.arc($,K,2*S,0,Math.PI*2),this.ctx.fill()}if(this.ctx.shadowBlur=20*S,this.ctx.shadowColor=I,this.ctx.globalAlpha=w,this.ctx.fillStyle=I,this.ctx.beginPath(),this.ctx.arc(0,0,3*S,0,Math.PI*2),this.ctx.fill(),this.ctx.shadowBlur=0,this.ctx.globalAlpha=w*.9,this.ctx.fillStyle="white",this.ctx.beginPath(),this.ctx.arc(0,0,1.5*S,0,Math.PI*2),this.ctx.fill(),Math.random()<.05){const D=Math.random()*Math.PI*2,H=Math.random()*Math.max(C,F)*1.5;this.ctx.globalAlpha=w*.6,this.ctx.strokeStyle=I,this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(Math.cos(D)*H,Math.sin(D)*H),this.ctx.stroke()}this.ctx.restore()}),this.ctx.globalAlpha=.05;for(let _=0;_<8;_++){const S=_/8*Math.PI*2,w=Math.max(i,s);this.ctx.strokeStyle=t[_%t.length]||"#00ffff",this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(this.vanishingPoint.x,this.vanishingPoint.y);const E=50;for(let T=0;T<=E;T++){const L=T/E,A=w*L,I=Math.sin(L*10+this.time*2)*20,C=this.vanishingPoint.x+Math.cos(S)*A+Math.cos(S+Math.PI/2)*I,F=this.vanishingPoint.y+Math.sin(S)*A+Math.sin(S+Math.PI/2)*I;T===0?this.ctx.moveTo(C,F):this.ctx.lineTo(C,F)}this.ctx.stroke()}for(let _=50;_<Math.max(i,s);_+=80){const S=_/100,w=Math.sin(this.time*2+S)*5;this.ctx.globalAlpha=.04,this.ctx.strokeStyle=t[Math.floor(S)%t.length]||"#00ffff",this.ctx.lineWidth=1,this.ctx.beginPath();const E=60;for(let T=0;T<=E;T++){const L=T/E*Math.PI*2,A=_+Math.sin(L*6+this.time*3)*w,I=this.vanishingPoint.x+Math.cos(L)*A,C=this.vanishingPoint.y+Math.sin(L)*A;T===0?this.ctx.moveTo(I,C):this.ctx.lineTo(I,C)}this.ctx.closePath(),this.ctx.stroke()}this.ctx.restore(),this.ctx.globalAlpha=.02;for(let _=0;_<100;_++){const S=Math.random()*i,w=Math.random()*s;Math.sin(this.time*20+_)*.5+.5>.7&&(this.ctx.fillStyle=t[_%t.length]||"#00ffff",this.ctx.beginPath(),this.ctx.arc(S,w,1,0,Math.PI*2),this.ctx.fill())}if(this.shakeIntensity>5){this.ctx.globalCompositeOperation="screen";for(let _=0;_<3;_++){this.ctx.globalAlpha=.05;const S=this.ctx.createRadialGradient(this.vanishingPoint.x,this.vanishingPoint.y,0,this.vanishingPoint.x,this.vanishingPoint.y,Math.max(i,s)*(.3+_*.2)),w=(this.time*100+_*120)%360;S.addColorStop(0,`hsla(${w}, 100%, 50%, 0.3)`),S.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.fillStyle=S,this.ctx.fillRect(0,0,i,s)}this.ctx.globalCompositeOperation="source-over"}const b=(_,S,w,E,T)=>{const L=5+Math.sin(this.time*4)*3,A=t[w]||"#00ffff";for(let C=0;C<3;C++){const F=L*(2+C),z=.3-C*.1;this.ctx.globalAlpha=z,this.ctx.strokeStyle=A,this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.arc(_,S,F,this.time*(1+C*.5),this.time*(1+C*.5)+Math.PI*1.5),this.ctx.stroke()}const I=this.ctx.createRadialGradient(_,S,0,_,S,L*4);if(I.addColorStop(0,this.addAlpha(A,.9)),I.addColorStop(.5,this.addAlpha(A,.5)),I.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.globalAlpha=.9,this.ctx.fillStyle=I,this.ctx.beginPath(),this.ctx.arc(_,S,L*4,0,Math.PI*2),this.ctx.fill(),this.ctx.globalAlpha=1,this.ctx.fillStyle="white",this.ctx.shadowBlur=15,this.ctx.shadowColor=A,this.ctx.beginPath(),this.ctx.arc(_,S,L,0,Math.PI*2),this.ctx.fill(),this.ctx.shadowBlur=0,this.clapAccumulation>.5){const C=this.clapAccumulation/10;for(let F=0;F<5;F++){const z=(this.time*3+F*.5)%2,D=20+z*100+this.clapAccumulation*20,H=(1-z/2)*C;this.ctx.globalAlpha=H*.5,this.ctx.strokeStyle=t[F%t.length]||"#00ffff",this.ctx.lineWidth=3,this.ctx.beginPath(),this.ctx.arc(_,S,D,0,Math.PI*2),this.ctx.stroke()}for(let F=0;F<Math.floor(this.clapAccumulation*5);F++){const z=F/(this.clapAccumulation*5)*Math.PI*2,D=30+Math.sin(this.time*5+F)*20,H=_+Math.cos(z+this.time*2)*D,ie=S+Math.sin(z+this.time*2)*D;this.ctx.globalAlpha=C*.7,this.ctx.fillStyle=t[F%t.length]||"#00ffff",this.ctx.beginPath(),this.ctx.arc(H,ie,2,0,Math.PI*2),this.ctx.fill()}}if(E){this.ctx.globalAlpha=1,this.ctx.fillStyle="white",this.ctx.font="12px monospace",this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.shadowBlur=8,this.ctx.shadowColor="rgba(0, 0, 0, 0.8)";const C=`X:${Math.floor(_)} Y:${Math.floor(S)}`;this.ctx.fillText(C,_,S-8);const F=new Date,z=F.toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric"}),D=F.toLocaleTimeString("en-US",{hour12:!1}),H=`${z} - ${D}`;this.ctx.fillText(H,_,S+8),this.ctx.shadowBlur=0}};b(this.vanishingPoint.x,this.vanishingPoint.y,0,!!o),c&&b(this.vanishingPointRight.x,this.vanishingPointRight.y,1,!0)}spawnFractalBranch(){if(this.streams.length>30)return;const e=this.streams[Math.floor(Math.random()*Math.min(6,this.streams.length))],t=e.angle+(Math.random()-.5)*.8;this.streams.push({angle:t,speed:1.2,packets:[],branchLevel:(e.branchLevel||0)+1,parentAngle:e.angle})}drawHexagon(e,t,i){this.ctx.beginPath();for(let s=0;s<6;s++){const o=Math.PI/3*s,c=e+i*Math.cos(o),u=t+i*Math.sin(o);s===0?this.ctx.moveTo(c,u):this.ctx.lineTo(c,u)}this.ctx.closePath()}addAlpha(e,t){if(e.startsWith("#")){const i=parseInt(e.slice(1,3),16),s=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16);return`rgba(${i}, ${s}, ${o}, ${t})`}return e}}class nT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"particles",[]);U(this,"config",{baseSize:1.5,gridSpacing:8,distortionRadius:200,distortionStrength:0,friction:.9,ease:.1});U(this,"faceData",[[60,100,1],[70,100,1],[50,110,1],[60,110,1],[70,110,1],[80,110,1],[40,120,1],[50,120,2],[60,120,1],[70,120,1],[80,120,2],[90,120,1],[40,130,2],[50,130,3],[60,130,1],[70,130,1],[80,130,3],[90,130,2],[30,140,2],[40,140,3],[50,140,4],[60,140,1],[70,140,1],[80,140,4],[90,140,3],[100,140,2],[20,150,2],[30,150,3],[40,150,3],[50,150,3],[60,150,1],[70,150,1],[80,150,3],[90,150,3],[100,150,3],[110,150,2],[30,160,2],[40,160,3],[50,160,2],[80,160,2],[90,160,3],[100,160,2],[40,170,2],[50,170,2],[80,170,2],[90,170,2],[40,180,1],[50,180,1],[80,180,1],[90,180,1],[40,190,1],[50,190,2],[80,190,2],[90,190,1],[50,200,2],[80,200,2],[50,210,1],[60,210,1],[70,210,1],[80,210,1],[50,220,1],[60,220,2],[70,220,2],[80,220,1],[60,230,3],[70,230,3],[60,240,4],[70,240,4],[60,250,3],[70,250,3],[60,260,2],[70,260,2]]);this.canvas=e,this.ctx=t,this.createParticles()}createParticles(){this.particles=[];const e=this.canvas.width/2,t=this.canvas.height/2,i=275,s=14,o=1.2,c=this.config.baseSize*o;for(let u=t-i;u<t+i;u+=s)for(let h=e-i;h<e+i;h+=s)Math.sqrt((h-e)**2+(u-t)**2)<i&&this.particles.push({originX:h,originY:u,x:h,y:u,vx:0,vy:0,intensity:o,size:c,currentSize:c})}render(e,t){var c,u;t[1]&&(t[1].toLowerCase()==="#ffffff"||t[1].toLowerCase()==="#fff")?this.ctx.fillStyle="#000000":this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);const s=e.left||e.right;if(s){const h=(((c=s.position)==null?void 0:c.x)||.5)*this.canvas.width,f=(((u=s.position)==null?void 0:u.y)||.5)*this.canvas.height;let p=0;const g=s.fingerCount||2;s.gesture==="pinch"||g===1?p=5:g===2?p=20:g>=5?p=50:p=15+(g-2)*10,this.config.distortionStrength+=(p-this.config.distortionStrength)*.1,this.particles.forEach(m=>{const y=h-m.x,v=f-m.y,b=Math.sqrt(y*y+v*v);if(b<this.config.distortionRadius){const w=(this.config.distortionRadius-b)/this.config.distortionRadius,E=Math.atan2(v,y),T=Math.cos(E)*w*this.config.distortionStrength,L=Math.sin(E)*w*this.config.distortionStrength;m.vx-=T,m.vy-=L,m.currentSize=m.size+w*4*Math.abs(this.config.distortionStrength/10)}else m.currentSize=m.size;const _=m.originX-m.x,S=m.originY-m.y;m.vx+=_*this.config.ease,m.vy+=S*this.config.ease,m.vx*=this.config.friction,m.vy*=this.config.friction,m.x+=m.vx,m.y+=m.vy})}else this.config.distortionStrength*=.9,this.particles.forEach(h=>{const f=h.originX-h.x,p=h.originY-h.y;h.vx+=f*this.config.ease,h.vy+=p*this.config.ease,h.vx*=this.config.friction,h.vy*=this.config.friction,h.x+=h.vx,h.y+=h.vy,h.currentSize=h.size});if(e.clapping){const h=this.canvas.width/2,f=this.canvas.height/2;this.particles.forEach(p=>{const g=p.x-h,m=p.y-f,y=Math.sqrt(g*g+m*m),v=30;p.vx+=g/(y+1)*v,p.vy+=m/(y+1)*v})}const o=t[0]||"#FFFFFF";this.particles.forEach(h=>{this.ctx.fillStyle=o,this.ctx.globalAlpha=.85;const f=Math.max(.5,h.currentSize);this.ctx.fillRect(h.x-f/2,h.y-f/2,f,f)}),this.ctx.globalAlpha=1}}const on=class on{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"faceLandmarker",null);U(this,"isLoading",!0);U(this,"lastVideoTime",-1);U(this,"results");U(this,"video",null);U(this,"hasFailed",!1);U(this,"isLocalInitializing",!1);U(this,"drawingUtils",null);U(this,"initAttempts",0);U(this,"maxInitAttempts",60);U(this,"FACE_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,129],[129,49],[49,209],[131,29],[29,52],[52,131],[43,106],[106,204],[204,43],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[33,168],[168,8],[8,33],[228,117],[117,31],[31,228],[107,189],[189,55],[55,107],[126,217],[217,1],[1,126],[233,79],[79,218],[218,233],[35,154],[154,26],[26,35],[125,129],[129,49],[49,125],[52,131],[131,29],[29,52],[169,106],[106,43],[43,169],[6,74],[74,184],[184,6],[191,80],[80,183],[183,191],[43,106],[106,204],[204,43]]);this.canvas=e,this.ctx=t,console.log("👤 FaceRenderer initialized"),this.initializeMediaPipe()}async initializeMediaPipe(){if(!(this.isLocalInitializing||this.hasFailed)){this.isLocalInitializing=!0;try{if(this.initAttempts++,this.video=document.querySelector("video"),!this.video||!this.video.srcObject){this.isLocalInitializing=!1,this.initAttempts<this.maxInitAttempts?setTimeout(()=>this.initializeMediaPipe(),1e3):(console.error("❌ Max retry attempts reached."),this.hasFailed=!0,this.isLoading=!1);return}if(on.isGlobalInitializing){console.log("⏳ Waiting for global init..."),this.isLocalInitializing=!1,setTimeout(()=>this.initializeMediaPipe(),500);return}if(!on.filesetResolver){on.isGlobalInitializing=!0,console.log("📦 Loading MediaPipe modules...");const t=await gx(()=>import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14"),[],import.meta.url);on.faceLandmarkerClass=t.FaceLandmarker,on.drawingUtilsClass=t.DrawingUtils,on.filesetResolver=await t.FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm"),console.log("🔧 WASM initialized"),on.isGlobalInitializing=!1}const e="https://raw.githubusercontent.com/NPC-88/3dfiles/9d9b1c903c6397d41d71ad993f114bbce9fe5db6/face_landmarker.task";if(!this.faceLandmarker)try{this.faceLandmarker=await on.faceLandmarkerClass.createFromOptions(on.filesetResolver,{baseOptions:{modelAssetPath:e,delegate:"GPU"},outputFaceBlendshapes:!1,outputFacialTransformationMatrixes:!1,runningMode:"VIDEO",numFaces:1}),console.log("✅ Face tracking initialized (GPU)")}catch{console.warn("GPU failed, trying CPU..."),this.faceLandmarker=await on.faceLandmarkerClass.createFromOptions(on.filesetResolver,{baseOptions:{modelAssetPath:e,delegate:"CPU"},outputFaceBlendshapes:!1,outputFacialTransformationMatrixes:!1,runningMode:"VIDEO",numFaces:1}),console.log("✅ Face tracking initialized (CPU)")}on.drawingUtilsClass&&(this.drawingUtils=new on.drawingUtilsClass(this.ctx)),this.isLoading=!1,this.isLocalInitializing=!1}catch(e){console.error("❌ Failed to initialize MediaPipe:",e),this.hasFailed=!0,this.isLoading=!1,this.isLocalInitializing=!1,on.isGlobalInitializing=!1}}}render(e,t,i){if(this.hasFailed){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#ff4444",this.ctx.font="18px monospace",this.ctx.textAlign="center",this.ctx.fillText("Initialization Failed",this.canvas.width/2,this.canvas.height/2),this.ctx.font="14px monospace",this.ctx.fillStyle="#ff8888",this.ctx.fillText("Refresh the page to try again",this.canvas.width/2,this.canvas.height/2+30);return}if(this.isLoading){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#666666",this.ctx.font="20px monospace",this.ctx.textAlign="center",this.ctx.fillText("Initializing Face Model...",this.canvas.width/2,this.canvas.height/2),this.ctx.font="14px monospace",this.ctx.fillStyle="#888888",this.ctx.fillText("Press Q to enable camera if needed",this.canvas.width/2,this.canvas.height/2+30);return}if(!this.faceLandmarker||!this.video||!this.drawingUtils){if(!this.isLocalInitializing&&!this.hasFailed){const p=document.querySelector("video");p&&p.srcObject&&(console.log("📹 Video found during render, triggering init once..."),this.initializeMediaPipe())}this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#666666",this.ctx.font="18px monospace",this.ctx.textAlign="center",this.ctx.fillText("Waiting for camera...",this.canvas.width/2,this.canvas.height/2),this.ctx.font="14px monospace",this.ctx.fillStyle="#888888",this.ctx.fillText("Press Q to enable camera",this.canvas.width/2,this.canvas.height/2+30);return}const s=performance.now();if(this.lastVideoTime!==this.video.currentTime){this.lastVideoTime=this.video.currentTime;try{this.results=this.faceLandmarker.detectForVideo(this.video,s)}catch(p){console.error("Face detection error:",p)}}this.ctx.save(),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);const o=performance.now(),c=Math.abs(Math.sin(o*.002)),u=.1+.6*c,h=15*c,f=t[0]||"#00d2ff";if(this.results&&this.results.faceLandmarks&&this.results.faceLandmarks.length>0)for(const p of this.results.faceLandmarks)this.ctx.shadowColor=f,this.ctx.shadowBlur=h,this.drawingUtils.drawConnectors(p,on.faceLandmarkerClass.FACE_LANDMARKS_TESSELATION,{color:`rgba(255, 255, 255, ${u})`,lineWidth:1}),this.ctx.shadowBlur=0;else this.ctx.fillStyle="#666666",this.ctx.font="16px monospace",this.ctx.textAlign="center",this.ctx.fillText("No Face Detected",this.canvas.width/2,this.canvas.height/2),this.ctx.font="12px monospace",this.ctx.fillStyle="#888888",this.ctx.fillText("Position your face in front of the camera",this.canvas.width/2,this.canvas.height/2+25);this.ctx.restore()}resize(e,t){}destroy(){this.faceLandmarker&&(this.faceLandmarker.close(),this.faceLandmarker=null),console.log("👤 FaceRenderer destroyed")}};U(on,"filesetResolver",null),U(on,"faceLandmarkerClass",null),U(on,"drawingUtilsClass",null),U(on,"isGlobalInitializing",!1);let pd=on;function Zc(a,e){a.traverse(t=>{if(t instanceof un||t instanceof br||t instanceof zx){t.geometry.dispose();const i=t.material;Array.isArray(i)?i.forEach(s=>s.dispose()):i.dispose()}}),a.clear(),e.dispose(),e.forceContextLoss()}class iT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"threeCanvas");U(this,"scene");U(this,"camera");U(this,"renderer");U(this,"sphere");U(this,"particleMesh");U(this,"pointLight");U(this,"pointLight2");U(this,"originalPositions",[]);U(this,"time",0);U(this,"handX",.5);U(this,"handY",.5);U(this,"pinchDistance",1);U(this,"SPHERE_RADIUS",1.5);U(this,"DETAIL",4);U(this,"CHAOS_MULTIPLIER",1.5);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances of Three")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.initThreeJS(),console.log("🌐 MorphingSphereRenderer initialized with Three.js"),console.warn=i}initThreeJS(){this.scene=new ps,this.scene.fog=new Zo(0,.05),this.camera=new An(75,this.canvas.width/this.canvas.height,.1,1e3),this.camera.position.set(0,0,5),this.camera.lookAt(0,0,0),this.renderer=new ms({canvas:this.threeCanvas,antialias:!0,alpha:!0}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=new jx(4210752);this.scene.add(e),this.pointLight=new Vc(65484,2,50),this.pointLight.position.set(5,5,5),this.scene.add(this.pointLight),this.pointLight2=new Vc(3342591,2,50),this.pointLight2.position.set(-5,-5,5),this.scene.add(this.pointLight2);const t=new Gd(this.SPHERE_RADIUS,this.DETAIL),i=t.attributes.position;for(let f=0;f<i.count;f++)this.originalPositions.push(new Q(i.getX(f),i.getY(f),i.getZ(f)));const s=new Vx({color:1118481,wireframe:!0,emissive:3342591,emissiveIntensity:.5,roughness:.4,metalness:.8});this.sphere=new un(t,s),this.scene.add(this.sphere);const o=new cn,c=1e3,u=new Float32Array(c*3);for(let f=0;f<c*3;f++)u[f]=(Math.random()-.5)*20;o.setAttribute("position",new yn(u,3));const h=new us({size:.02,color:16777215,transparent:!0,opacity:.5});this.particleMesh=new br(o,h),this.scene.add(this.particleMesh)}noise(e,t,i){return Math.sin(e)*Math.cos(t)*Math.sin(i)}calculatePinch(e){if(!e||!e.landmarks)return 1;const t=e.landmarks[4],i=e.landmarks[8],s=Math.sqrt(Math.pow(t.x-i.x,2)+Math.pow(t.y-i.y,2));return Math.min(Math.max((s-.02)*5,0),1)}updateState(e){const t=e.left,i=e.right,s=this.calculatePinch(t),o=this.calculatePinch(i),u=Math.min(s,o);this.pinchDistance+=(u-this.pinchDistance)*.1;let h=.5,f=.5;t&&t.position?(h=t.position.x,f=t.position.y):i&&i.position&&(h=i.position.x,f=i.position.y),this.handX+=(h-this.handX)*.1,this.handY+=(f-this.handY)*.1,!t&&!i&&(this.handX+=(.5-this.handX)*.05,this.handY+=(.5-this.handY)*.05,this.pinchDistance+=(1-this.pinchDistance)*.05)}render(e,t){this.time+=.02*Sn(),this.updateState(e);const i=this.renderer.getPixelRatio(),s=Math.floor(this.canvas.width*i),o=Math.floor(this.canvas.height*i);(this.threeCanvas.width!==s||this.threeCanvas.height!==o)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=s,this.threeCanvas.height=o,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix()),this.renderer.clear();const c=(this.handX-.5)*4,u=(.5-this.handY)*3;this.sphere.position.x+=(c-this.sphere.position.x)*.15,this.sphere.position.y+=(u-this.sphere.position.y)*.15;const h=(this.handY-.5)*2,f=(this.handX-.5)*2;this.sphere.rotation.x+=(h-this.sphere.rotation.x)*.05,this.sphere.rotation.y+=(f-this.sphere.rotation.y)*.05,this.sphere.rotation.z+=.005;const p=this.sphere.geometry.attributes.position,g=(1-this.pinchDistance)*this.CHAOS_MULTIPLIER,m=Math.sin(this.time)*.1;for(let v=0;v<p.count;v++){const b=this.originalPositions[v],_=this.noise(b.x*2+this.time,b.y*2+this.time,b.z*2),S=1+m+_*g;p.setXYZ(v,b.x*S,b.y*S,b.z*S)}p.needsUpdate=!0;const y=this.sphere.material;if(t&&t.length>0)try{const v=new $e(t[0]),b=new $e(t[0]);y.color=v,y.emissive=b.multiplyScalar(.3+g*.4);const _=new $e(t[0]),S=t.length>1?new $e(t[1]):new $e(t[0]);this.pointLight.color=_,this.pointLight2.color=S}catch{y.color.setHex(65484),y.emissive.setHex(13107),this.pointLight.color.setHex(65484),this.pointLight2.color.setHex(3342591)}else y.color.setHex(65484),y.emissive.setHex(13107),this.pointLight.color.setHex(65484),this.pointLight2.color.setHex(3342591);this.pointLight.position.x=(this.handX-.5)*10,this.pointLight.position.y=(.5-this.handY)*10,this.particleMesh.rotation.y=-this.time*.1,this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){Zc(this.scene,this.renderer)}}class rT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"threeCanvas");U(this,"scene");U(this,"camera");U(this,"renderer");U(this,"instancedMesh");U(this,"gridWidth");U(this,"gridHeight");U(this,"cubePositions",[]);U(this,"time",0);U(this,"hands",[]);U(this,"speedMultiplier",1);U(this,"handsTogetherBoost",1);U(this,"currentFingerMode","slow");U(this,"GRID_WIDTH",120);U(this,"GRID_HEIGHT",90);U(this,"SPACING",.12);U(this,"WAVE_AMPLITUDE",2.5);U(this,"CUBE_SIZE",.03);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances of Three")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.gridWidth=this.GRID_WIDTH,this.gridHeight=this.GRID_HEIGHT,this.initThreeJS(),console.log("🧊 CubeWallRenderer initialized with Three.js"),console.warn=i}initThreeJS(){this.scene=new ps,this.scene.background=new $e(0),this.camera=new An(60,this.canvas.width/this.canvas.height,.1,100),this.camera.position.set(0,0,4.5),this.camera.lookAt(0,0,0),this.renderer=new ms({canvas:this.threeCanvas,antialias:!0,alpha:!1}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=new jx(2105376,.3);this.scene.add(e);const t=new of(16777215,.8);t.position.set(3,5,8),this.scene.add(t);const i=new of(4474111,.4);i.position.set(-5,-3,5),this.scene.add(i);const s=new Vc(65484,.6,50);s.position.set(5,5,5),this.scene.add(s);const o=new Xa(this.CUBE_SIZE,this.CUBE_SIZE,this.CUBE_SIZE),c=new Vx({color:65535,emissive:8738,emissiveIntensity:.2,metalness:.6,roughness:.4,flatShading:!0}),u=this.gridWidth*this.gridHeight;this.instancedMesh=new DS(o,c,u),this.scene.add(this.instancedMesh);const h=new xn;let f=0;for(let p=0;p<this.gridHeight;p++)for(let g=0;g<this.gridWidth;g++){const m=(g-this.gridWidth/2)*this.SPACING,y=(p-this.gridHeight/2)*this.SPACING,v=0;this.cubePositions.push(new Q(m,y,v)),h.position.set(m,y,v),h.updateMatrix(),this.instancedMesh.setMatrixAt(f,h.matrix),f++}this.instancedMesh.instanceMatrix.needsUpdate=!0}getFingerSpeedMultiplier(e){if(!e||!e.fingerCount)return 0;const t=e.fingerCount;return t<=1?.05:t===2?.3:t>=5?1.5:.3+(t-2)/3*1.2}updateHandData(e){this.hands=[];let t=1;if(e.left){const s=this.getFingerSpeedMultiplier(e.left);t=Math.max(t,s),this.hands.push({x:e.left.position.x,y:1-e.left.position.y,intensity:1,fingerCount:e.left.fingerCount||0})}if(e.right){const s=this.getFingerSpeedMultiplier(e.right);t=Math.max(t,s),this.hands.push({x:e.right.position.x,y:1-e.right.position.y,intensity:1,fingerCount:e.right.fingerCount||0})}this.speedMultiplier+=(t-this.speedMultiplier)*.1;const i=e.clapping||e.distanceBetweenHands&&e.distanceBetweenHands<.15?3:1;if(this.handsTogetherBoost+=(i-this.handsTogetherBoost)*.15,this.hands.length>0){const s=this.hands.reduce((o,c)=>o+c.fingerCount,0);s<=1?this.currentFingerMode="pinch":s>=5?this.currentFingerMode="fast":this.currentFingerMode="slow"}}calculateDisplacement(e,t){let i=0;const s=Math.sin(e*8+this.time)*Math.cos(t*8+this.time)*.05;i+=s;for(const o of this.hands){const c=(o.x-.5)*this.gridWidth*this.SPACING*.8,u=(o.y-.5)*this.gridHeight*this.SPACING*.8,h=e-c,f=t-u,p=Math.sqrt(h*h+f*f),g=Math.sin(p*6-this.time*4)/(p*.5+.5);i+=g*o.intensity*this.WAVE_AMPLITUDE}return i*=this.speedMultiplier*this.handsTogetherBoost,i}render(e,t){this.time+=.016*this.speedMultiplier*Sn(),this.updateHandData(e);const i=this.renderer.getPixelRatio(),s=Math.floor(this.canvas.width*i),o=Math.floor(this.canvas.height*i);(this.threeCanvas.width!==s||this.threeCanvas.height!==o)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=s,this.threeCanvas.height=o,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix());const c=new xn;let u=0,h=.5,f=.2;this.currentFingerMode==="pinch"?(h=.02,f=.01):this.currentFingerMode==="slow"?(h=.5,f=.25):this.currentFingerMode==="fast"&&(h=.9,f=.4);for(let p=0;p<this.gridHeight;p++)for(let g=0;g<this.gridWidth;g++){const m=this.cubePositions[u],y=this.calculateDisplacement(m.x,m.y);c.position.set(m.x,m.y,m.z+y),c.rotation.x=y*h,c.rotation.y=y*h*.7,c.rotation.z=y*h*.4;const v=1+Math.abs(y)*f;c.scale.set(v,v,v),c.updateMatrix(),this.instancedMesh.setMatrixAt(u,c.matrix),u++}if(this.instancedMesh.instanceMatrix.needsUpdate=!0,t&&t.length>0)try{const p=this.instancedMesh.material,g=new $e(t[0]);if(p.color=g,p.emissive=new $e(t[0]).multiplyScalar(.3),t.length>1){const m=this.scene.children.find(v=>v instanceof of&&v.position.x<0),y=this.scene.children.find(v=>v instanceof Vc);m&&(m.color=new $e(t[1])),y&&(y.color=new $e(t.length>2?t[2]:t[1]))}}catch{const g=this.instancedMesh.material;g.color.setHex(65535),g.emissive.setHex(13107)}this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){Zc(this.scene,this.renderer)}}const Nc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Qo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const sT=new ja(-1,1,1,-1,0,1);class aT extends cn{constructor(){super(),this.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qt([0,2,0,0,2,0],2))}}const oT=new aT;class tv{constructor(e){this._mesh=new un(oT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,sT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class lT extends Qo{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ln?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Gc.clone(e.uniforms),this.material=new ln({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new tv(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Wg extends Qo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let c,u;this.inverse?(c=0,u=1):(c=1,u=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,c,4294967295),o.buffers.stencil.setClear(u),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class cT extends Qo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class nv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ct);this._width=i.width,this._height=i.height,t=new si(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:gi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new lT(Nc),this.copyPass.material.blending=ir,this.timer=new iM}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,o=this.passes.length;s<o;s++){const c=this.passes[s];if(c.enabled!==!1){if(c.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),c.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),c.needsSwap){if(i){const u=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(u.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(u.EQUAL,1,4294967295)}this.swapBuffers()}Wg!==void 0&&(c instanceof Wg?i=!0:c instanceof cT&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ct);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class iv extends Qo{constructor(e,t,i=null,s=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new $e}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let o,c;this.overrideMaterial!==null&&(c=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=c),e.autoClear=s}}const uT={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new $e(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Xs extends Qo{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ct(e.x,e.y):new ct(256,256),this.clearColor=new $e(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);this.renderTargetBright=new si(o,c,{type:gi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let p=0;p<this.nMips;p++){const g=new si(o,c,{type:gi});g.texture.name="UnrealBloomPass.h"+p,g.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(g);const m=new si(o,c,{type:gi});m.texture.name="UnrealBloomPass.v"+p,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),o=Math.round(o/2),c=Math.round(c/2)}const u=uT;this.highPassUniforms=Gc.clone(u.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ln({uniforms:this.highPassUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader}),this.separableBlurMaterials=[];const h=[6,10,14,18,22];o=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);for(let p=0;p<this.nMips;p++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(h[p])),this.separableBlurMaterials[p].uniforms.invSize.value=new ct(1/o,1/c),o=Math.round(o/2),c=Math.round(c/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const f=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=f,this.bloomTintColors=[new Q(1,1,1),new Q(1,1,1),new Q(1,1,1),new Q(1,1,1),new Q(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Gc.clone(Nc.uniforms),this.blendMaterial=new ln({uniforms:this.copyUniforms,vertexShader:Nc.vertexShader,fragmentShader:Nc.fragmentShader,premultipliedAlpha:!0,blending:Oa,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new $e,this._oldClearAlpha=1,this._basic=new Yc,this._fsQuad=new tv(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,s),this.renderTargetsVertical[o].setSize(i,s),this.separableBlurMaterials[o].uniforms.invSize.value=new ct(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,o){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const c=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let u=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this._fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=u.texture,this.separableBlurMaterials[h].uniforms.direction.value=Xs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[h]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=Xs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[h]),e.clear(),this._fsQuad.render(e),u=this.renderTargetsVertical[h];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=c}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new ln({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ct(.5,.5)},direction:{value:new ct(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}}Xs.BlurDirectionX=new ct(1,0);Xs.BlurDirectionY=new ct(0,1);const hT=/^[og]\s*(.+)?/,fT=/^mtllib /,dT=/^usemtl /,pT=/^usemap /,Xg=/\s+/,jg=new Q,pf=new Q,qg=new Q,Yg=new Q,Ti=new Q,Tc=new $e;function mT(){const a={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,o){const c=this._finalize(!1);c&&(c.inherited||c.groupCount<=0)&&this.materials.splice(c.index,1);const u={index:this.materials.length,name:s||"",mtllib:Array.isArray(o)&&o.length>0?o[o.length-1]:"",smooth:c!==void 0?c.smooth:this.smooth,groupStart:c!==void 0?c.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(h){const f={index:typeof h=="number"?h:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return f.clone=this.clone.bind(f),f}};return this.materials.push(u),u},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const o=this.currentMaterial();if(o&&o.groupEnd===-1&&(o.groupEnd=this.geometry.vertices.length/3,o.groupCount=o.groupEnd-o.groupStart,o.inherited=!1),s&&this.materials.length>1)for(let c=this.materials.length-1;c>=0;c--)this.materials[c].groupCount<=0&&this.materials.splice(c,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),o}},i&&i.name&&typeof i.clone=="function"){const s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const s=this.vertices,o=this.object.geometry.vertices;o.push(s[e+0],s[e+1],s[e+2]),o.push(s[t+0],s[t+1],s[t+2]),o.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const s=this.normals,o=this.object.geometry.normals;o.push(s[e+0],s[e+1],s[e+2]),o.push(s[t+0],s[t+1],s[t+2]),o.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(e,t,i){const s=this.vertices,o=this.object.geometry.normals;jg.fromArray(s,e),pf.fromArray(s,t),qg.fromArray(s,i),Ti.subVectors(qg,pf),Yg.subVectors(jg,pf),Ti.cross(Yg),Ti.normalize(),o.push(Ti.x,Ti.y,Ti.z),o.push(Ti.x,Ti.y,Ti.z),o.push(Ti.x,Ti.y,Ti.z)},addColor:function(e,t,i){const s=this.colors,o=this.object.geometry.colors;s[e]!==void 0&&o.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&o.push(s[t+0],s[t+1],s[t+2]),s[i]!==void 0&&o.push(s[i+0],s[i+1],s[i+2])},addUV:function(e,t,i){const s=this.uvs,o=this.object.geometry.uvs;o.push(s[e+0],s[e+1]),o.push(s[t+0],s[t+1]),o.push(s[i+0],s[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,s,o,c,u,h,f){const p=this.vertices.length;let g=this.parseVertexIndex(e,p),m=this.parseVertexIndex(t,p),y=this.parseVertexIndex(i,p);if(this.addVertex(g,m,y),this.addColor(g,m,y),u!==void 0&&u!==""){const v=this.normals.length;g=this.parseNormalIndex(u,v),m=this.parseNormalIndex(h,v),y=this.parseNormalIndex(f,v),this.addNormal(g,m,y)}else this.addFaceNormal(g,m,y);if(s!==void 0&&s!==""){const v=this.uvs.length;g=this.parseUVIndex(s,v),m=this.parseUVIndex(o,v),y=this.parseUVIndex(c,v),this.addUV(g,m,y),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,s=e.length;i<s;i++){const o=this.parseVertexIndex(e[i],t);this.addVertexPoint(o),this.addColor(o)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,s=this.uvs.length;for(let o=0,c=e.length;o<c;o++)this.addVertexLine(this.parseVertexIndex(e[o],i));for(let o=0,c=t.length;o<c;o++)this.addUVLine(this.parseUVIndex(t[o],s))}};return a.startObject("",!1),a}class gT extends Wd{constructor(e){super(e),this.materials=null}load(e,t,i,s){const o=this,c=new QS(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{t(o.parse(u))}catch(h){s?s(h):console.error(h),o.manager.itemError(e)}},i,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new mT;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let s=[];for(let u=0,h=i.length;u<h;u++){const f=i[u].trimStart();if(f.length===0)continue;const p=f.charAt(0);if(p!=="#")if(p==="v"){const g=f.split(Xg);switch(g[0]){case"v":t.vertices.push(parseFloat(g[1]),parseFloat(g[2]),parseFloat(g[3])),g.length>=7?(Tc.setRGB(parseFloat(g[4]),parseFloat(g[5]),parseFloat(g[6]),di),t.colors.push(Tc.r,Tc.g,Tc.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(g[1]),parseFloat(g[2]),parseFloat(g[3]));break;case"vt":t.uvs.push(parseFloat(g[1]),parseFloat(g[2]));break}}else if(p==="f"){const m=f.slice(1).trim().split(Xg),y=[];for(let b=0,_=m.length;b<_;b++){const S=m[b];if(S.length>0){const w=S.split("/");y.push(w)}}const v=y[0];for(let b=1,_=y.length-1;b<_;b++){const S=y[b],w=y[b+1];t.addFace(v[0],S[0],w[0],v[1],S[1],w[1],v[2],S[2],w[2])}}else if(p==="l"){const g=f.substring(1).trim().split(" ");let m=[];const y=[];if(f.indexOf("/")===-1)m=g;else for(let v=0,b=g.length;v<b;v++){const _=g[v].split("/");_[0]!==""&&m.push(_[0]),_[1]!==""&&y.push(_[1])}t.addLineGeometry(m,y)}else if(p==="p"){const m=f.slice(1).trim().split(" ");t.addPointGeometry(m)}else if((s=hT.exec(f))!==null){const g=(" "+s[0].slice(1).trim()).slice(1);t.startObject(g)}else if(dT.test(f))t.object.startMaterial(f.substring(7).trim(),t.materialLibraries);else if(fT.test(f))t.materialLibraries.push(f.substring(7).trim());else if(pT.test(f))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(p==="s"){if(s=f.split(" "),s.length>1){const m=s[1].trim().toLowerCase();t.object.smooth=m!=="0"&&m!=="off"}else t.object.smooth=!0;const g=t.object.currentMaterial();g&&(g.smooth=t.object.smooth)}else{if(f==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+f+'"')}}t.finalize();const o=new Fa;if(o.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let u=0,h=t.objects.length;u<h;u++){const f=t.objects[u],p=f.geometry,g=f.materials,m=p.type==="Line",y=p.type==="Points";let v=!1;if(p.vertices.length===0)continue;const b=new cn;b.setAttribute("position",new Qt(p.vertices,3)),p.normals.length>0&&b.setAttribute("normal",new Qt(p.normals,3)),p.colors.length>0&&(v=!0,b.setAttribute("color",new Qt(p.colors,3))),p.hasUVIndices===!0&&b.setAttribute("uv",new Qt(p.uvs,2));const _=[];for(let w=0,E=g.length;w<E;w++){const T=g[w],L=T.name+"_"+T.smooth+"_"+v;let A=t.materials[L];if(this.materials!==null){if(A=this.materials.create(T.name),m&&A&&!(A instanceof Go)){const I=new Go;Xi.prototype.copy.call(I,A),I.color.copy(A.color),A=I}else if(y&&A&&!(A instanceof us)){const I=new us({size:10,sizeAttenuation:!1});Xi.prototype.copy.call(I,A),I.color.copy(A.color),I.map=A.map,A=I}}A===void 0&&(m?A=new Go:y?A=new us({size:1,sizeAttenuation:!1}):A=new jS,A.name=T.name,A.flatShading=!T.smooth,A.vertexColors=v,t.materials[L]=A),_.push(A)}let S;if(_.length>1){for(let w=0,E=g.length;w<E;w++){const T=g[w];b.addGroup(T.groupStart,T.groupCount,w)}m?S=new ud(b,_):y?S=new br(b,_):S=new un(b,_)}else m?S=new ud(b,_[0]):y?S=new br(b,_[0]):S=new un(b,_[0]);S.name=f.name,o.add(S)}else if(t.vertices.length>0){const u=new us({size:1,sizeAttenuation:!1}),h=new cn;h.setAttribute("position",new Qt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(h.setAttribute("color",new Qt(t.colors,3)),u.vertexColors=!0);const f=new br(h,u);o.add(f)}return o}}const Hi=class Hi{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"threeCanvas");U(this,"scene");U(this,"camera");U(this,"renderer");U(this,"composer");U(this,"handGroup",null);U(this,"backgroundParticles",null);U(this,"pinchStrength",0);U(this,"baseScale",1);U(this,"currentModel","torus");U(this,"disposed",!1);U(this,"uniforms",{uTime:{value:0},uPinch:{value:0},uColor:{value:new Q(0,.53,1)}});U(this,"bgUniforms",{uTime:{value:0},uColor:{value:new Q(.5,.7,1)}});this.canvas=e,this.ctx=t,this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.scene=new ps;const i=this.threeCanvas.width/this.threeCanvas.height;this.camera=new An(50,i,.1,100),this.camera.position.z=10,this.renderer=new ms({canvas:this.threeCanvas,alpha:!0,antialias:!0}),this.renderer.setSize(this.threeCanvas.width,this.threeCanvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const s=new iv(this.scene,this.camera),o=new Xs(new ct(this.threeCanvas.width,this.threeCanvas.height),3,1,0);this.composer=new nv(this.renderer),this.composer.addPass(s),this.composer.addPass(o),this.createBackgroundDust(),this.createTorusGeometry(),console.log("💨 SmokeHandRenderer initialized")}static loadHandGeometry(){return Hi.handGeometry||(Hi.handGeometry=new Promise((e,t)=>{new gT().load(Hi.HAND_MODEL_URL,i=>{const s=[];i.traverse(c=>{c instanceof un&&s.push(c)});const o=s[s.length-1];o!=null&&o.geometry?e(o.geometry):t(new Error("No mesh in the hand model"))},void 0,t)}),Hi.handGeometry.catch(()=>{Hi.handGeometry=null})),Hi.handGeometry}createBackgroundDust(){const t=new Float32Array(6e3),i=new Float32Array(2e3*3);for(let c=0;c<2e3;c++)t[c*3]=(Math.random()-.5)*40,t[c*3+1]=(Math.random()-.5)*30,t[c*3+2]=-5-Math.random()*20,i[c*3]=Math.random(),i[c*3+1]=Math.random(),i[c*3+2]=Math.random();const s=new cn;s.setAttribute("position",new yn(t,3)),s.setAttribute("aRandom",new yn(i,3));const o=new ln({uniforms:this.bgUniforms,transparent:!0,depthWrite:!1,blending:Oa,vertexShader:`
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
      `});this.backgroundParticles=new br(s,o),this.scene.add(this.backgroundParticles)}createTorusGeometry(){const e=new Vd(1.5,.45,900,150);this.createParticleSystem(e)}createParticleSystem(e){this.handGroup&&this.scene.remove(this.handGroup),this.handGroup=new Fa;const t=e.getAttribute("position").count,i=e.getAttribute("position").array,s=new Float32Array(t*3),o=new Float32Array(t*3);for(let f=0;f<t;f++)s[f*3]=i[f*3],s[f*3+1]=i[f*3+1],s[f*3+2]=i[f*3+2],o[f*3]=Math.random(),o[f*3+1]=Math.random(),o[f*3+2]=Math.random();const c=new cn;c.setAttribute("position",new yn(s,3)),c.setAttribute("aRandom",new yn(o,3)),c.setAttribute("aOriginalPos",new yn(i,3));const u=new ln({uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:Oa,vertexShader:`
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
      `}),h=new br(c,u);if(h.geometry.computeBoundingSphere(),h.geometry.boundingSphere){const f=h.geometry.boundingSphere.center;h.position.sub(f);const p=h.geometry.boundingSphere.radius;this.baseScale=2.5/p,this.handGroup.scale.set(this.baseScale,this.baseScale,this.baseScale)}this.handGroup.add(h),this.scene.add(this.handGroup)}render(e,t,i){const s=performance.now()*.001;this.uniforms.uTime.value=s,this.bgUniforms.uTime.value=s;const o=new $e(t[0]||"#0088ff");this.uniforms.uColor.value.set(o.r,o.g,o.b);const c=new $e(t[1]||t[0]||"#5588ff");this.bgUniforms.uColor.value.set(c.r*.5,c.g*.7,c.b);let u=0;if(e.right&&e.right.gesture==="open"&&e.right.landmarks){const h=e.right.landmarks,f=h[8],p=h[4],g=f.x*2-1,m=-(f.y*2-1),y=new Q(g,m,.5);y.unproject(this.camera);const v=y.sub(this.camera.position).normalize(),b=(0-this.camera.position.z)/v.z,_=this.camera.position.clone().add(v.multiplyScalar(b));this.handGroup&&(this.handGroup.position.lerp(_,.15),this.handGroup.rotation.y=g*.8,this.handGroup.rotation.x=-m*.8);const S=f.x-p.x,w=f.y-p.y,E=Math.sqrt(S*S+w*w);u=ss.mapLinear(E,.02,.15,0,1),u=ss.clamp(u,0,1)}else if(e.left&&e.left.gesture==="open"&&e.left.landmarks){const h=e.left.landmarks,f=h[8],p=h[4],g=f.x*2-1,m=-(f.y*2-1),y=new Q(g,m,.5);y.unproject(this.camera);const v=y.sub(this.camera.position).normalize(),b=(0-this.camera.position.z)/v.z,_=this.camera.position.clone().add(v.multiplyScalar(b));this.handGroup&&(this.handGroup.position.lerp(_,.15),this.handGroup.rotation.y=g*.8,this.handGroup.rotation.x=-m*.8);const S=f.x-p.x,w=f.y-p.y,E=Math.sqrt(S*S+w*w);u=ss.mapLinear(E,.02,.15,0,1),u=ss.clamp(u,0,1)}else this.handGroup&&(this.handGroup.rotation.y+=.005,this.handGroup.rotation.z=Math.sin(s*.5)*.1,this.handGroup.position.lerp(new Q(0,0,0),.05));if(this.pinchStrength=ss.lerp(this.pinchStrength,u,.1),this.uniforms.uPinch.value=this.pinchStrength,this.handGroup){const h=this.baseScale*(1+this.pinchStrength*.5),f=this.handGroup.scale.x,p=ss.lerp(f,h,.1);this.handGroup.scale.set(p,p,p)}this.composer.render(),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}resize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer.setSize(e,t),this.threeCanvas.width=e,this.threeCanvas.height=t}setSmokeHandModel(e){if(this.currentModel!==e){if(this.currentModel=e,e==="torus"){this.createTorusGeometry();return}this.createTorusGeometry(),Hi.loadHandGeometry().then(t=>{this.currentModel==="hand"&&!this.disposed&&this.createParticleSystem(t)},t=>{console.error("Hand model unavailable, staying on the torus:",t)})}}destroy(){this.disposed=!0,this.handGroup&&this.scene.remove(this.handGroup),this.backgroundParticles&&this.scene.remove(this.backgroundParticles),this.composer.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),console.log("💨 SmokeHandRenderer destroyed")}};U(Hi,"handGeometry",null),U(Hi,"HAND_MODEL_URL","https://raw.githubusercontent.com/NPC-88/3dfiles/195a81cd4607a3176f231766b5bd2dd4b4d216fb/16834_hand_v1_NEW.obj");let Wc=Hi;class xT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"lines",[]);U(this,"gridSpacing",30);U(this,"lineLength",22);U(this,"isClapping",!1);U(this,"clappingIntensity",0);this.canvas=e,this.ctx=t,this.initializeGrid(),console.log("✅ ThickLineRenderer initialized")}initializeGrid(){this.lines=[];const e=Math.ceil(this.canvas.width/this.gridSpacing)+1,t=Math.ceil(this.canvas.height/this.gridSpacing)+1;for(let i=0;i<t;i++)for(let s=0;s<e;s++)this.lines.push({x:s*this.gridSpacing,y:i*this.gridSpacing,length:this.lineLength,currentAngle:0,targetAngle:0,spinVelocity:0})}render(e,t){t[1]&&(t[1].toLowerCase()==="#ffffff"||t[1].toLowerCase()==="#fff")?this.ctx.fillStyle="#000000":this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),(this.lines.length===0||this.lines[0].x>this.canvas.width||this.lines[0].y>this.canvas.height)&&this.initializeGrid();let s=.12,o=0;const c=[];e.left&&c.push(e.left),e.right&&c.push(e.right),c.forEach(h=>{let f=h.fingerCount||2;h.gesture==="pinch"&&(f=1),o=Math.max(o,f)}),o===1?s=.03:o>=4&&(s=.25),e.clapping?this.isClapping||(this.isClapping=!0,this.clappingIntensity=1):this.isClapping=!1,this.clappingIntensity>0&&(this.clappingIntensity*=.95,this.clappingIntensity<.01&&(this.clappingIntensity=0));const u=t[0]||"#ffffff";this.lines.forEach(h=>{if(c.length>0){let p=0,g=0,m=0;c.forEach(y=>{var L,A;const v=(((L=y.position)==null?void 0:L.x)||.5)*this.canvas.width,b=(((A=y.position)==null?void 0:A.y)||.5)*this.canvas.height,_=v-h.x,S=b-h.y,E=1/(1+Math.sqrt(_*_+S*S)*.005),T=Math.atan2(S,_);g+=Math.cos(T)*E,m+=Math.sin(T)*E,p+=E}),p>0&&(h.targetAngle=Math.atan2(m,g))}else h.targetAngle=0;if(this.clappingIntensity>0)h.spinVelocity+=this.clappingIntensity*.8,h.currentAngle+=h.spinVelocity,h.spinVelocity*=.9;else{let p=h.targetAngle-h.currentAngle;for(;p>Math.PI;)p-=Math.PI*2;for(;p<-Math.PI;)p+=Math.PI*2;h.currentAngle+=p*s,h.spinVelocity=0}let f=2;if(c.length>0){let p=1/0;c.forEach(v=>{var w,E;const b=(((w=v.position)==null?void 0:w.x)||.5)*this.canvas.width,_=(((E=v.position)==null?void 0:E.y)||.5)*this.canvas.height,S=Math.hypot(b-h.x,_-h.y);S<p&&(p=S)});const g=35,m=2,y=600;if(p<y){const v=Math.pow(1-p/y,3);f=m+(g-m)*v}}this.ctx.save(),this.ctx.translate(h.x,h.y),this.ctx.rotate(h.currentAngle),this.ctx.fillStyle=u,this.ctx.fillRect(-h.length/2,-f/2,h.length,f),this.ctx.restore()})}}class vT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"elements",[]);U(this,"gridSpacing",20);U(this,"elementLength",12);U(this,"elementWidth",3);U(this,"time",0);U(this,"isClapping",!1);this.canvas=e,this.ctx=t,this.initializeField(),console.log("✅ FlowFieldRenderer initialized")}initializeField(){this.elements=[];const e=Math.ceil(this.canvas.width/this.gridSpacing)+1,t=Math.ceil(this.canvas.height/this.gridSpacing)+1;for(let i=0;i<t;i++)for(let s=0;s<e;s++)this.elements.push({x:s*this.gridSpacing,y:i*this.gridSpacing,angle:Math.random()*Math.PI*2,velocity:0,targetAngle:0})}noise(e,t,i){return Math.sin(e*.01+i)+Math.sin(t*.01+i)+Math.sin((e+t)*.01+i)}render(e,t,i){const s=.01+(i?i.mid*.05:0);this.time+=s*Sn(),t[4]&&t[4]+"",e.clapping?this.ctx.fillStyle="#222222":this.ctx.fillStyle="#000510",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),(this.elements.length===0||this.elements[0].x>this.canvas.width)&&this.initializeField();const o=[];e.left&&o.push(e.left),e.right&&o.push(e.right);const c=i?i.bass:0,u=i?i.high:0,h=i?i.beat:!1,f=this.elementLength*(1+c*1.5),p=this.elementWidth*(1+c*.5);this.ctx.save(),this.elements.forEach((g,m)=>{let v=this.noise(g.x,g.y,this.time)*Math.PI,b=null;if(u>.2&&(v+=(Math.random()-.5)*u),o.length>0){let S=0,w=0,E="none";if(o.forEach(T=>{var ie,J;const L=(((ie=T.position)==null?void 0:ie.x)||.5)*this.canvas.width,A=(((J=T.position)==null?void 0:J.y)||.5)*this.canvas.height,I=L-g.x,C=A-g.y,F=Math.sqrt(I*I+C*C),z=Math.atan2(C,I),H=Math.max(0,1-F/800);if(H>w){w=H;const G=T.fingerCount??5;T.gesture==="pinch"?(S=z,E="pinch"):G<=2?(S=z+Math.PI/2,E="2fingers"):(S=z+Math.PI,E="5fingers")}}),w>.1){let T=S-v;for(;T>Math.PI;)T-=Math.PI*2;for(;T<-Math.PI;)T+=Math.PI*2;v+=T*(w*.95),w>.3&&(E==="pinch"?b=t[1]||"#ff00ff":E==="5fingers"?b=t[2]||"#00ffff":E==="2fingers"&&(b=t[0]||"#ffffff"))}}if(e.clapping||h){const S=this.canvas.width/2,w=this.canvas.height/2,E=g.x-S,T=g.y-w,L=Math.atan2(T,E),A=(e.clapping?.9:0)+(h?.4:0);if(A>0){let I=L-v;for(;I>Math.PI;)I-=Math.PI*2;for(;I<-Math.PI;)I+=Math.PI*2;v+=I*A,e.clapping&&(b="#ffffff")}}let _=v-g.angle;for(;_>Math.PI;)_-=Math.PI*2;for(;_<-Math.PI;)_+=Math.PI*2;g.angle+=_*.25,this.ctx.translate(g.x,g.y),this.ctx.rotate(g.angle),b?this.ctx.fillStyle=b:this.ctx.fillStyle=h&&Math.random()>.7?"#ffffff":t[0]||"#ffffff",this.ctx.fillRect(-f/2,-p/2,f,p),this.ctx.rotate(-g.angle),this.ctx.translate(-g.x,-g.y)}),this.ctx.restore()}}class _T{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"threeCanvas");U(this,"scene");U(this,"camera");U(this,"renderer");U(this,"material");U(this,"time",0);U(this,"hand1",new ct(.5,.5));U(this,"hand2",new ct(.5,.5));U(this,"h1Radius",.3);U(this,"h1Strength",0);U(this,"h2Radius",.3);U(this,"h2Strength",0);U(this,"vertexShader",`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `);U(this,"fragmentShader",`
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
  `);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.initThreeJS(),console.log("💧 LiquidChromeRenderer initialized"),console.warn=i}initThreeJS(){this.scene=new ps,this.camera=new ja(-1,1,1,-1,0,1),this.renderer=new ms({canvas:this.threeCanvas,antialias:!1,alpha:!0}),this.renderer.setSize(this.canvas.width,this.canvas.height);const e=new Cr(2,2);this.material=new ln({vertexShader:this.vertexShader,fragmentShader:this.fragmentShader,uniforms:{uTime:{value:0},uResolution:{value:new ct(this.canvas.width,this.canvas.height)},uHand1Pos:{value:new ct(.5,.5)},uHand1Radius:{value:.3},uHand1Strength:{value:0},uHand2Pos:{value:new ct(.5,.5)},uHand2Radius:{value:.3},uHand2Strength:{value:0},uColor1:{value:new $e(6514417)},uColor2:{value:new $e(9133302)},uColor3:{value:new $e(14239471)}}});const t=new un(e,this.material);this.scene.add(t)}getHandParams(e){return e?e.gesture==="pinch"?{radius:.15,strength:2.5}:(e.fingerCount!==void 0?e.fingerCount:5)<=2?{radius:.3,strength:1.5}:{radius:.6,strength:1}:{radius:.3,strength:0}}render(e,t){this.time+=.01*Sn(),(this.threeCanvas.width!==this.canvas.width||this.threeCanvas.height!==this.canvas.height)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=this.canvas.width,this.threeCanvas.height=this.canvas.height,this.material.uniforms.uResolution.value.set(this.canvas.width,this.canvas.height)),this.material.uniforms.uTime.value=this.time;const i=this.canvas.width/this.canvas.height;if(e.clapping){const o=3+Math.sin(this.time*20)*.5;this.h1Radius+=(1.5-this.h1Radius)*.1,this.h1Strength+=(o-this.h1Strength)*.1,this.h2Radius+=(1.5-this.h2Radius)*.1,this.h2Strength+=(o-this.h2Strength)*.1}else{if(e.left){const s=this.getHandParams(e.left);this.h1Radius+=(s.radius-this.h1Radius)*.1,this.h1Strength+=(s.strength-this.h1Strength)*.1;const o=e.left.position.x*i*.8,c=(1-e.left.position.y)*.8;this.material.uniforms.uHand1Pos.value.set(o,c)}else this.h1Strength*=.9;if(e.right){const s=this.getHandParams(e.right);this.h2Radius+=(s.radius-this.h2Radius)*.1,this.h2Strength+=(s.strength-this.h2Strength)*.1;const o=e.right.position.x*i*.8,c=(1-e.right.position.y)*.8;this.material.uniforms.uHand2Pos.value.set(o,c)}else this.h2Strength*=.9}this.material.uniforms.uHand1Radius.value=this.h1Radius,this.material.uniforms.uHand1Strength.value=this.h1Strength,this.material.uniforms.uHand2Radius.value=this.h2Radius,this.material.uniforms.uHand2Strength.value=this.h2Strength,t&&t.length>=3&&(this.material.uniforms.uColor1.value.set(t[0]),this.material.uniforms.uColor2.value.set(t[1]),this.material.uniforms.uColor3.value.set(t[2])),this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0)}destroy(){this.renderer.dispose(),this.renderer.forceContextLoss(),this.material.dispose()}}class yT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"rectangles",[]);U(this,"baseWidth",1920);U(this,"baseHeight",1080);U(this,"gridStructure",[]);this.canvas=e,this.ctx=t,this.createVariedLayout()}createVariedLayout(){[{x:0,y:0,w:480,h:360},{x:480,y:0,w:320,h:180},{x:800,y:0,w:320,h:180},{x:1120,y:0,w:400,h:180},{x:1520,y:0,w:400,h:180},{x:480,y:180,w:240,h:180},{x:720,y:180,w:240,h:180},{x:960,y:180,w:160,h:180},{x:1120,y:180,w:240,h:180},{x:1360,y:180,w:280,h:180},{x:1640,y:180,w:280,h:180},{x:0,y:360,w:120,h:360},{x:120,y:360,w:120,h:360},{x:240,y:360,w:120,h:360},{x:360,y:360,w:120,h:360},{x:480,y:360,w:320,h:360},{x:800,y:360,w:320,h:360},{x:1120,y:360,w:200,h:180},{x:1320,y:360,w:200,h:180},{x:1520,y:360,w:200,h:180},{x:1720,y:360,w:200,h:180},{x:1120,y:540,w:160,h:180},{x:1280,y:540,w:160,h:180},{x:1440,y:540,w:240,h:180},{x:1680,y:540,w:240,h:180},{x:0,y:720,w:160,h:360},{x:160,y:720,w:160,h:360},{x:320,y:720,w:160,h:360},{x:480,y:720,w:240,h:360},{x:720,y:720,w:240,h:360},{x:960,y:720,w:160,h:360},{x:1120,y:720,w:400,h:360},{x:1520,y:720,w:400,h:360}].forEach((t,i)=>{let s;const o=i%3;o===0?s="vertical":o===1?s="horizontal":s="vertical-reverse",this.rectangles.push({id:i,baseX:t.x,baseY:t.y,baseW:t.w,baseH:t.h,currentX:t.x,currentY:t.y,currentW:t.w,currentH:t.h,gradientDirection:s}),this.gridStructure.push({x:t.x,y:t.y,w:t.w,h:t.h,targetW:t.w,targetH:t.h})})}render(e,t){const i=this.ctx.createLinearGradient(0,0,0,this.canvas.height);i.addColorStop(0,t[2]||"#d9d9d9"),i.addColorStop(1,t[0]||"#1a00ff"),this.ctx.fillStyle=i,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let s=.15;if(e.left||e.right){const h=[];e.left&&h.push(e.left),e.right&&h.push(e.right);let f=0;h.forEach(p=>{let g=p.fingerCount||2;p.gesture==="pinch"&&(g=1),f=Math.max(f,g)}),f===1?s=.02:f===2?s=.15:f===3?s=.25:f===4?s=.35:f>=5&&(s=.5),this.rectangles.forEach((p,g)=>{this.gridStructure[g].targetW=p.baseW,this.gridStructure[g].targetH=p.baseH}),h.forEach(p=>{var v,b;const g=(((v=p.position)==null?void 0:v.x)||.5)*this.baseWidth,m=(((b=p.position)==null?void 0:b.y)||.5)*this.baseHeight,y=p.velocity||0;this.rectangles.forEach((_,S)=>{const w=_.baseX+_.baseW/2,E=_.baseY+_.baseH/2,T=g-w,L=m-E,A=Math.sqrt(T*T+L*L),C=Math.max(0,1-A/700);if(C>.1){const F=Math.atan2(L,T),z=1+C*.6,D=Math.min(y*.5,.4),H=z+Math.abs(Math.cos(F))*D,ie=z+Math.abs(Math.sin(F))*D;this.gridStructure[S].targetW=_.baseW*H,this.gridStructure[S].targetH=_.baseH*ie}})})}else this.rectangles.forEach((h,f)=>{this.gridStructure[f].targetW=h.baseW,this.gridStructure[f].targetH=h.baseH});const o=Math.min(.95,s*Sn());this.gridStructure.forEach(h=>{h.w+=(h.targetW-h.w)*o,h.h+=(h.targetH-h.h)*o}),this.normalizeGridPerfectly(),this.rectangles.forEach((h,f)=>{h.currentX=this.gridStructure[f].x,h.currentY=this.gridStructure[f].y,h.currentW=this.gridStructure[f].w,h.currentH=this.gridStructure[f].h});const c=this.canvas.width/this.baseWidth,u=this.canvas.height/this.baseHeight;this.rectangles.forEach(h=>{this.drawRectangle(h,c,u,t)})}normalizeGridPerfectly(){const e=new Map;this.rectangles.forEach((c,u)=>{const h=Math.round(c.baseY/10)*10;e.has(h)||e.set(h,[]),e.get(h).push(u)});const t=Array.from(e.entries()).sort((c,u)=>c[0]-u[0]).map(c=>c[1]);t.forEach(c=>{c.sort((p,g)=>this.rectangles[p].baseX-this.rectangles[g].baseX);const u=c.reduce((p,g)=>p+this.gridStructure[g].w,0),h=this.baseWidth/u;c.forEach(p=>{this.gridStructure[p].w*=h});let f=0;c.forEach(p=>{this.gridStructure[p].x=f,f+=this.gridStructure[p].w})});let i=0;t.forEach(c=>{const u=Math.max(...c.map(h=>this.gridStructure[h].h));c.forEach(h=>{this.gridStructure[h].y=i,this.gridStructure[h].h=u}),i+=u});const s=i,o=this.baseHeight/s;i=0,t.forEach(c=>{const u=this.gridStructure[c[0]].h*o;c.forEach(h=>{this.gridStructure[h].y=i,this.gridStructure[h].h=u}),i+=u})}drawRectangle(e,t,i,s){this.ctx.save();const o=e.currentX*t,c=e.currentY*i,u=e.currentW*t,h=e.currentH*i;let f;e.gradientDirection==="vertical"?(f=this.ctx.createLinearGradient(o,c,o,c+h),f.addColorStop(0,s[2]||"#d9d9d9"),f.addColorStop(1,s[0]||"#1a00ff")):e.gradientDirection==="vertical-reverse"?(f=this.ctx.createLinearGradient(o,c,o,c+h),f.addColorStop(0,s[0]||"#1a00ff"),f.addColorStop(1,s[2]||"#d9d9d9")):(f=this.ctx.createLinearGradient(o,c,o+u,c),f.addColorStop(0,s[2]||"#d9d9d9"),f.addColorStop(1,s[0]||"#1a00ff")),this.ctx.fillStyle=f,this.ctx.fillRect(o,c,u,h),this.ctx.restore()}}class ST{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"threeCanvas");U(this,"scene");U(this,"camera");U(this,"renderer");U(this,"linesMesh");U(this,"pointsMesh");U(this,"gridPoints");U(this,"edges");U(this,"originalToSortedMap");U(this,"time",0);U(this,"interactionLevel",.5);U(this,"handX",.5);U(this,"handY",.5);U(this,"GRID_SIZE",10);U(this,"SPACING",1.5);U(this,"TOTAL_POINTS",1e3);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.initThreeJS(),console.log("🕸️ NetworkCubeRenderer initialized"),console.warn=i}initThreeJS(){this.scene=new ps,this.scene.fog=new Zo(0,.06),this.camera=new An(75,this.canvas.width/this.canvas.height,.1,1e3),this.camera.position.z=20,this.renderer=new ms({canvas:this.threeCanvas,antialias:!0,alpha:!0}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=this.GRID_SIZE*this.GRID_SIZE*this.GRID_SIZE;this.gridPoints=new Float32Array(e*3);const t=[],i=(this.GRID_SIZE-1)*this.SPACING*.5,s=(v,b,_)=>v+b*this.GRID_SIZE+_*this.GRID_SIZE*this.GRID_SIZE;let o=0;for(let v=0;v<this.GRID_SIZE;v++)for(let b=0;b<this.GRID_SIZE;b++)for(let _=0;_<this.GRID_SIZE;_++){this.gridPoints[o++]=_*this.SPACING-i+(Math.random()-.5)*.3,this.gridPoints[o++]=b*this.SPACING-i+(Math.random()-.5)*.3,this.gridPoints[o++]=v*this.SPACING-i+(Math.random()-.5)*.3;const w=s(_,b,v);_<this.GRID_SIZE-1&&t.push(w,s(_+1,b,v)),b<this.GRID_SIZE-1&&t.push(w,s(_,b+1,v)),v<this.GRID_SIZE-1&&t.push(w,s(_,b,v+1)),Math.random()>.8&&_<this.GRID_SIZE-1&&b<this.GRID_SIZE-1&&t.push(w,s(_+1,b+1,v))}this.edges=new Int32Array(t);const c=new Int32Array(e);for(let v=0;v<e;v++)c[v]=v;for(let v=e-1;v>0;v--){const b=Math.floor(Math.random()*(v+1));[c[v],c[b]]=[c[b],c[v]]}const u=new Float32Array(e*3);this.originalToSortedMap=new Int32Array(e);for(let v=0;v<e;v++){const b=c[v];this.originalToSortedMap[b]=v,u[v*3]=this.gridPoints[b*3],u[v*3+1]=this.gridPoints[b*3+1],u[v*3+2]=this.gridPoints[b*3+2]}const h=new cn;h.setAttribute("position",new yn(u,3));const f=new us({color:16777215,size:.15,transparent:!0,opacity:.9,sizeAttenuation:!0});this.pointsMesh=new br(h,f),this.scene.add(this.pointsMesh);const p=new cn,g=this.edges.length*3,m=new Float32Array(g);p.setAttribute("position",new yn(m,3));const y=new Go({color:65535,transparent:!0,opacity:.2,blending:Oa});this.linesMesh=new ud(p,y),this.linesMesh.frustumCulled=!1,this.scene.add(this.linesMesh)}updateLogic(e,t){let i=0;const s=e.left||e.right;s?(this.handX+=(s.position.x-this.handX)*.1,this.handY+=(s.position.y-this.handY)*.1,e.clapping?i=1.2:s.gesture==="pinch"?i=.05:i=.2+(s.fingerCount||0)/5*.8):(this.handX+=(.5-this.handX)*.05,this.handY+=(.5-this.handY)*.05,i=.3+Math.sin(this.time*.5)*.1),this.interactionLevel+=(i-this.interactionLevel)*.08;const o=t?t.bass:0,c=t?t.high:0,u=Math.max(0,Math.min(1.5,this.interactionLevel+o*.3)),h=this.pointsMesh.geometry.attributes.position.count,f=50,p=Math.floor(f+u*(h-f));this.pointsMesh.geometry.setDrawRange(0,p);const g=this.linesMesh.geometry.attributes.position.array;let m=0;for(let S=0;S<this.edges.length;S+=2){const w=this.edges[S],E=this.edges[S+1],T=this.originalToSortedMap[w],L=this.originalToSortedMap[E];if(T<p&&L<p){const A=w*3,I=E*3;g[m++]=this.gridPoints[A],g[m++]=this.gridPoints[A+1],g[m++]=this.gridPoints[A+2],g[m++]=this.gridPoints[I],g[m++]=this.gridPoints[I+1],g[m++]=this.gridPoints[I+2]}}this.linesMesh.geometry.setDrawRange(0,m/3),this.linesMesh.geometry.attributes.position.needsUpdate=!0;const y=.6+u*.8;this.scene.rotation.y+=.002+u*.005;const v=(this.handY-.5)*1.5,b=(this.handX-.5)*1.5;this.scene.rotation.x+=(v-this.scene.rotation.x)*.1,this.scene.rotation.z+=(b-this.scene.rotation.z)*.1,this.pointsMesh.scale.setScalar(y),this.linesMesh.scale.setScalar(y);const _=this.pointsMesh.material;_.size=.15+c*.1}render(e,t,i){this.time+=.02*Sn();const s=this.renderer.getPixelRatio(),o=Math.floor(this.canvas.width*s),c=Math.floor(this.canvas.height*s);(this.threeCanvas.width!==o||this.threeCanvas.height!==c)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=o,this.threeCanvas.height=c,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix()),this.updateLogic(e,i);const u=new $e(t[0]||"#ffffff"),h=new $e(t[1]||"#888888");this.pointsMesh.material.color.lerp(u,.1),this.linesMesh.material.color.lerp(h,.1),this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){Zc(this.scene,this.renderer)}}class MT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"threeCanvas");U(this,"scene");U(this,"camera");U(this,"renderer");U(this,"mesh");U(this,"points");U(this,"originalPositions");U(this,"currentPositions");U(this,"velocities");U(this,"time",0);U(this,"handX",.5);U(this,"handY",.5);U(this,"isHandPresent",!1);U(this,"pinchStrength",0);U(this,"ROWS",30);U(this,"COLS",30);U(this,"SIZE",12);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.initThreeJS(),console.log("🕸️ ElasticNetRenderer initialized"),console.warn=i}initThreeJS(){this.scene=new ps,this.scene.fog=new Zo(0,.08),this.camera=new An(75,this.canvas.width/this.canvas.height,.1,1e3),this.camera.position.z=8,this.renderer=new ms({canvas:this.threeCanvas,antialias:!0,alpha:!0}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=new Cr(this.SIZE,this.SIZE,this.COLS,this.ROWS),t=e.attributes.position,i=t.count;this.originalPositions=new Float32Array(i*3),this.currentPositions=new Float32Array(i*3),this.velocities=new Float32Array(i*3);for(let c=0;c<i*3;c++)this.originalPositions[c]=t.array[c],this.currentPositions[c]=t.array[c],this.velocities[c]=0;const s=new Yc({color:65535,wireframe:!0,transparent:!0,opacity:.3,side:Gi});this.mesh=new un(e,s),this.scene.add(this.mesh);const o=new us({color:16777215,size:.15,transparent:!0,opacity:.8});this.points=new br(e,o),this.scene.add(this.points)}updatePhysics(e,t){const i=this.mesh.geometry.attributes.position,s=i.count,o=t?t.bass:0,c=t?t.high:0,u=t?t.mid:0;let h=0,f=0,p=0;const g=e.left||e.right;g?(this.isHandPresent=!0,h=(g.position.x-.5)*12,f=-(g.position.y-.5)*10,g.gesture==="pinch"?(this.pinchStrength+=(1-this.pinchStrength)*.1,p=-25):(g.fingerCount||5)>=5?(this.pinchStrength+=(0-this.pinchStrength)*.1,p=15):(this.pinchStrength+=(0-this.pinchStrength)*.1,p=5)):(this.isHandPresent=!1,this.pinchStrength+=(0-this.pinchStrength)*.1);const m=c*.05;for(let y=0;y<s;y++){const v=y*3,b=y*3+1,_=y*3+2,S=this.originalPositions[v],w=this.originalPositions[b],E=this.originalPositions[_];let T=this.currentPositions[v],L=this.currentPositions[b],A=this.currentPositions[_];const I=.05+this.pinchStrength*.2,C=(S-T)*I,F=(w-L)*I,z=(E-A)*I;if(this.velocities[v]+=C,this.velocities[b]+=F,this.velocities[_]+=z,this.isHandPresent){const $=T-h,K=L-f,W=A,re=$*$+K*K+W*W,ne=Math.sqrt(re),O=4+o*2;if(ne<O){const q=1-ne/O,ve=$/ne,be=K/ne,de=W/ne,Y=p*q*.2;this.velocities[v]+=ve*Y,this.velocities[b]+=be*Y,this.velocities[_]+=de*Y}}const D=this.time*(1+u),H=Math.sin(b*.1+D)*.02,ie=Math.cos(v*.1+D)*.02,J=Math.sin(v*.1+b*.1+D)*.02;this.velocities[v]+=H,this.velocities[b]+=ie,this.velocities[_]+=J,c>.1&&(this.velocities[v]+=(Math.random()-.5)*m,this.velocities[b]+=(Math.random()-.5)*m,this.velocities[_]+=(Math.random()-.5)*m);const G=.9-this.pinchStrength*.05;this.velocities[v]*=G,this.velocities[b]*=G,this.velocities[_]*=G,this.currentPositions[v]+=this.velocities[v],this.currentPositions[b]+=this.velocities[b],this.currentPositions[_]+=this.velocities[_],i.setXYZ(y,this.currentPositions[v],this.currentPositions[b],this.currentPositions[_])}i.needsUpdate=!0}render(e,t,i){this.time+=.01*Sn();const s=this.renderer.getPixelRatio(),o=Math.floor(this.canvas.width*s),c=Math.floor(this.canvas.height*s);(this.threeCanvas.width!==o||this.threeCanvas.height!==c)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=o,this.threeCanvas.height=c,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix()),this.updatePhysics(e,i);const u=new $e(t[0]||"#00ffff"),h=new $e(t[1]||"#ff00ff"),f=this.mesh.material;f.color.lerp(u,.1),f.opacity=.2+((i==null?void 0:i.bass)||0)*.3;const p=this.points.material;p.color.lerp(h,.1),p.size=.1+((i==null?void 0:i.high)||0)*.2,this.camera.position.x=Math.sin(this.time*.2)*.5,this.camera.position.y=Math.cos(this.time*.2)*.5,this.camera.lookAt(0,0,0),this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){Zc(this.scene,this.renderer)}}const md={chaos:{idle:.06,range:.45,openness:.6,velocity:.4,clap:.5,audio:.3,ease:.03},strips:{base:10,chaos:20,blocks:5,blocksChaos:15},speed:{base:.05,variation:.1,chaos:.35}};class wT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"threeCanvas");U(this,"scene");U(this,"camera");U(this,"renderer");U(this,"composer");U(this,"material");U(this,"plane");U(this,"chaosLevel",0);U(this,"cfg",md);U(this,"uniforms",{uTime:{value:0},uColor1:{value:new Q(.5,0,1)},uColor2:{value:new Q(0,0,0)},uColor3:{value:new Q(.8,.9,1)},uChaos:{value:0},uStrips:{value:10},uStripsChaos:{value:20},uBlocks:{value:5},uBlocksChaos:{value:15},uSpeedBase:{value:.05},uSpeedVar:{value:.1},uSpeedChaos:{value:.35},uAudioLow:{value:0},uAudioMid:{value:0},uAudioHigh:{value:0}});U(this,"geometry",new Cr(20,12));this.canvas=e,this.ctx=t,this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.scene=new ps,this.camera=new An(75,e.width/e.height,.1,100),this.camera.position.z=2,this.renderer=new ms({canvas:this.threeCanvas,alpha:!0,antialias:!0}),this.renderer.setSize(e.width,e.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.material=new ln({uniforms:this.uniforms,vertexShader:`
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
      `,side:Gi});const i=new Cr(20,12);this.plane=new un(i,this.material),this.scene.add(this.plane);const s=new iv(this.scene,this.camera),o=new Xs(new ct(e.width,e.height),1.5,.4,.85);this.composer=new nv(this.renderer),this.composer.addPass(s),this.composer.addPass(o),console.log("📼 DigitalBlockRenderer initialized")}setParams(e){this.cfg=Ci(md,e)}render(e,t,i){(this.threeCanvas.width!==this.canvas.width||this.threeCanvas.height!==this.canvas.height)&&(this.threeCanvas.width=this.canvas.width,this.threeCanvas.height=this.canvas.height,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.canvas.width,this.canvas.height,!1),this.composer.setSize(this.canvas.width,this.canvas.height));const s=performance.now()*.001;this.uniforms.uTime.value=s;const o=i?i.bass:0,c=i?i.mid:0,u=i?i.high:0;this.uniforms.uAudioLow.value=ss.lerp(this.uniforms.uAudioLow.value,o,.2),this.uniforms.uAudioMid.value=c,this.uniforms.uAudioHigh.value=u;const h=this.cfg.chaos,f=e.right??e.left;let p=h.idle;if(f){const y=f.fingerCount??(f.gesture==="open"?5:0),v=Math.min(1,Math.max(0,y/5)),b=Math.min(1,Math.max(0,f.velocity??0));p=h.idle+(v*h.openness+b*h.velocity)*h.range}else o>.6&&(p=h.idle+o*h.audio);e.clapping&&(p+=h.clap*(e.clapIntensity??1)),p=Math.min(h.range,p),this.chaosLevel=ss.lerp(this.chaosLevel,p,h.ease),this.uniforms.uChaos.value=this.chaosLevel;const g=this.cfg.strips,m=this.cfg.speed;if(this.uniforms.uStrips.value=g.base,this.uniforms.uStripsChaos.value=g.chaos,this.uniforms.uBlocks.value=g.blocks,this.uniforms.uBlocksChaos.value=g.blocksChaos,this.uniforms.uSpeedBase.value=m.base,this.uniforms.uSpeedVar.value=m.variation,this.uniforms.uSpeedChaos.value=m.chaos,t&&t.length>=3){const y=new $e(t[0]),v=new $e(t[3]||"#000000"),b=new $e(t[1]);this.uniforms.uColor1.value.lerp(new Q(y.r,y.g,y.b),.1),this.uniforms.uColor2.value.lerp(new Q(v.r,v.g,v.b),.1),this.uniforms.uColor3.value.lerp(new Q(b.r,b.g,b.b),.1)}this.composer.render(),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){var e;this.composer.dispose(),(e=this.geometry)==null||e.dispose(),this.material.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),console.log("📼 DigitalBlockRenderer destroyed")}}const gd={stamp:{radius:.075,strength:.55,fingerScale:.45,audioSwell:.5},field:{decay:.965,spread:1.6},refraction:{amount:.09,dispersion:.35},highlight:{amount:.9,sharpness:3.5,tint:.35},fallback:{fieldBrightness:.85}},bT=`#version 300 es
out vec2 vUv;
void main() {
  // 0,0 / 2,0 / 0,2 — one oversized triangle, clipped to the viewport.
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,ET=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTex;
uniform vec2 uResolution;
uniform float uTime;
`;function $g(a,e,t){const i=a.createShader(e);if(!i)throw new Error("Could not create shader");if(a.shaderSource(i,t),a.compileShader(i),!a.getShaderParameter(i,a.COMPILE_STATUS)){const s=a.getShaderInfoLog(i);a.deleteShader(i);const o=t.split(`
`).map((c,u)=>`${String(u+1).padStart(3)} | ${c}`).join(`
`);throw new Error(`Shader failed to compile: ${s}
${o}`)}return i}function fi(a,e){const t=$g(a,a.VERTEX_SHADER,bT),i=$g(a,a.FRAGMENT_SHADER,ET+e),s=a.createProgram();if(!s)throw new Error("Could not create program");if(a.attachShader(s,t),a.attachShader(s,i),a.linkProgram(s),a.deleteShader(t),a.deleteShader(i),!a.getProgramParameter(s,a.LINK_STATUS)){const o=a.getProgramInfoLog(s);throw a.deleteProgram(s),new Error(`Program failed to link: ${o}`)}return s}function as(a,e,t){const i=a.createTexture();a.bindTexture(a.TEXTURE_2D,i),a.texImage2D(a.TEXTURE_2D,0,a.RGBA8,e,t,0,a.RGBA,a.UNSIGNED_BYTE,null),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);const s=a.createFramebuffer();return a.bindFramebuffer(a.FRAMEBUFFER,s),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,i,0),a.bindFramebuffer(a.FRAMEBUFFER,null),{framebuffer:s,texture:i,width:e,height:t}}function os(a,e,t,i){e.width===t&&e.height===i||(a.bindTexture(a.TEXTURE_2D,e.texture),a.texImage2D(a.TEXTURE_2D,0,a.RGBA8,t,i,0,a.RGBA,a.UNSIGNED_BYTE,null),e.width=t,e.height=i)}function ls(a,e){a.deleteFramebuffer(e.framebuffer),a.deleteTexture(e.texture)}function Gn(a,e,t,i){a.bindFramebuffer(a.FRAMEBUFFER,e?e.framebuffer:null),a.viewport(0,0,e?e.width:t,e?e.height:i),a.drawArrays(a.TRIANGLES,0,3)}function mn(a,e,t,i,s){a.activeTexture(a.TEXTURE0+s),a.bindTexture(a.TEXTURE_2D,i),a.uniform1i(a.getUniformLocation(e,t),s)}const Xc=10,TT=`
uniform sampler2D uField;
uniform vec3 uStamps[${Xc}];   // x, y, radius
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
  for (int i = 0; i < ${Xc}; i++) {
    if (i >= uStampCount) break;
    vec3 stamp = uStamps[i];
    vec2 d = vUv - stamp.xy;
    d.x *= aspect;
    float falloff = 1.0 - smoothstep(0.0, stamp.z, length(d));
    h += falloff * falloff * uStrength;
  }

  fragColor = vec4(clamp(h, 0.0, 1.0), 0.0, 0.0, 1.0);
}`,CT=`
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
}`;class AT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"glCanvas");U(this,"gl");U(this,"cfg",gd);U(this,"fieldProgram");U(this,"refractProgram");U(this,"fields");U(this,"ping",0);U(this,"videoTexture");U(this,"video",null);this.canvas=e,this.ctx=t,this.glCanvas=document.createElement("canvas"),this.glCanvas.width=e.width,this.glCanvas.height=e.height;const i=this.glCanvas.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1});if(!i)throw new Error("WebGL2 is not available");this.gl=i,this.fieldProgram=fi(i,TT),this.refractProgram=fi(i,CT),this.fields=[as(i,e.width,e.height),as(i,e.width,e.height)],this.videoTexture=i.createTexture(),i.bindTexture(i.TEXTURE_2D,this.videoTexture),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}setParams(e){this.cfg=Ci(gd,e)}setVideoElement(e){this.video=e}collectStamps(e,t){const i=1+((t==null?void 0:t.bass)??0)*this.cfg.stamp.audioSwell,s=this.cfg.stamp.radius*i,o=[];for(const c of[e.left,e.right]){if(!c||o.length/3>=Xc)continue;o.push(c.position.x,1-c.position.y,s);const u=c.landmarks;if(u&&this.cfg.stamp.fingerScale>0)for(const h of[8,12,16,20]){if(o.length/3>=Xc)break;const f=u[h];f&&o.push(f.x,1-f.y,s*this.cfg.stamp.fingerScale)}}return o}render(e,t,i){const s=this.gl,o=this.canvas.width,c=this.canvas.height;if(o===0||c===0)return;(this.glCanvas.width!==o||this.glCanvas.height!==c)&&(this.glCanvas.width=o,this.glCanvas.height=c,os(s,this.fields[0],o,c),os(s,this.fields[1],o,c));const u=this.fields[this.ping];this.ping^=1;const h=this.fields[this.ping],f=this.collectStamps(e,i),p=i!=null&&i.beat?1+(i.beatIntensity??0):1;s.useProgram(this.fieldProgram),s.uniform2f(s.getUniformLocation(this.fieldProgram,"uResolution"),o,c),mn(s,this.fieldProgram,"uField",u.texture,0),s.uniform1i(s.getUniformLocation(this.fieldProgram,"uStampCount"),f.length/3),f.length>0&&s.uniform3fv(s.getUniformLocation(this.fieldProgram,"uStamps"),f),s.uniform1f(s.getUniformLocation(this.fieldProgram,"uDecay"),this.cfg.field.decay),s.uniform1f(s.getUniformLocation(this.fieldProgram,"uSpread"),this.cfg.field.spread),s.uniform1f(s.getUniformLocation(this.fieldProgram,"uStrength"),this.cfg.stamp.strength*p),Gn(s,h,o,c);const g=this.video&&this.video.readyState>=2&&this.video.videoWidth>0;g&&(s.bindTexture(s.TEXTURE_2D,this.videoTexture),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!0),s.texImage2D(s.TEXTURE_2D,0,s.RGBA,s.RGBA,s.UNSIGNED_BYTE,this.video));const m=RT(t[0]??"#ffffff");s.useProgram(this.refractProgram),s.uniform2f(s.getUniformLocation(this.refractProgram,"uResolution"),o,c),mn(s,this.refractProgram,"uField",h.texture,0),mn(s,this.refractProgram,"uVideo",this.videoTexture,1),s.uniform1f(s.getUniformLocation(this.refractProgram,"uHasVideo"),g?1:0),s.uniform3f(s.getUniformLocation(this.refractProgram,"uColor"),m[0],m[1],m[2]),s.uniform1f(s.getUniformLocation(this.refractProgram,"uRefract"),this.cfg.refraction.amount),s.uniform1f(s.getUniformLocation(this.refractProgram,"uDispersion"),this.cfg.refraction.dispersion),s.uniform1f(s.getUniformLocation(this.refractProgram,"uGloss"),this.cfg.highlight.amount),s.uniform1f(s.getUniformLocation(this.refractProgram,"uSharpness"),this.cfg.highlight.sharpness),s.uniform1f(s.getUniformLocation(this.refractProgram,"uTint"),this.cfg.highlight.tint),s.uniform1f(s.getUniformLocation(this.refractProgram,"uFieldBrightness"),this.cfg.fallback.fieldBrightness),Gn(s,null,o,c),this.ctx.clearRect(0,0,o,c),this.ctx.drawImage(this.glCanvas,0,0,o,c)}destroy(){var t;const e=this.gl;e.deleteProgram(this.fieldProgram),e.deleteProgram(this.refractProgram),e.deleteTexture(this.videoTexture),ls(e,this.fields[0]),ls(e,this.fields[1]),(t=e.getExtension("WEBGL_lose_context"))==null||t.loseContext()}}function RT(a){const e=a.replace("#","");return e.length<6?[1,1,1]:[parseInt(e.slice(0,2),16)/255,parseInt(e.slice(2,4),16)/255,parseInt(e.slice(4,6),16)/255]}const xd={mode:0,type:{fit:.82,weight:700,tracking:.08,outline:0,strokeWidth:1.5},grid:{columns:14,rows:26,spread:1,breathe:0,breatheSpeed:.4},mask:{reach:.18,threshold:.5,softness:.25,invert:0},radial:{strength:.6,power:2,pulse:.5,pulseSpeed:.5},wave:{amplitude:.12,frequency:1.5,speed:1,scaleWave:0},depth:{speed:.35,spread:1.4,curve:1.6,size:.1,horizon:.12,steps:18},scatter:{amount:.6,spiral:0,stagger:.35,drift:.5,size:.12},color:{rainbow:0,step:37,cycleSpeed:.3},motion:{handInfluence:1},audio:{bassScale:.3,beatKick:.5},trail:{fadeAlpha:1}},Kg="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",PT=1400;class Vo{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"cfg",xd);U(this,"text","N4TH");U(this,"aim",{x:.5,y:.5});U(this,"targets",[]);this.canvas=e,this.ctx=t}setParams(e){this.cfg=Ci(xd,e)}setText(e){const t=e.trim()||"N4TH";t!==this.text&&(this.text=t,this.targets=[])}static noise(e){const t=Math.sin(e*12.9898)*43758.5453;return t-Math.floor(t)}colorFor(e,t,i){const{color:s}=this.cfg;return s.rainbow>=.5?`hsl(${(e*s.step+t*s.cycleSpeed*60)%360}, 100%, 62%)`:i[e%Math.max(1,i.length)]??"#ffffff"}stamp(e,t,i,s,o=1,c=this.text,u=this.cfg.type.tracking){const{ctx:h,cfg:f}=this;h.globalAlpha=Math.min(1,Math.max(0,o)),h.font=`${Math.round(f.type.weight)} ${Math.max(1,i)}px ${Kg}`;try{h.letterSpacing=`${u}em`}catch{}f.type.outline>=.5?(h.strokeStyle=s,h.lineWidth=Math.max(.5,f.type.strokeWidth),h.strokeText(c,e,t)):(h.fillStyle=s,h.fillText(c,e,t)),h.globalAlpha=1}fitSize(e,t){const{ctx:i,cfg:s}=this;i.font=`${Math.round(s.type.weight)} 100px ${Kg}`;try{i.letterSpacing=`${s.type.tracking}em`}catch{}const o=i.measureText(e).width;return o>0?t/o*100:10}handPoints(e){const t=[];for(const i of[e.left,e.right]){if(!i)continue;t.push(i.position);const s=i.landmarks;if(s)for(const o of[4,8,12,16,20]){const c=s[o];c&&t.push({x:c.x,y:c.y})}}return t}render(e,t,i){const{ctx:s,cfg:o}=this,c=this.canvas.width,u=this.canvas.height;if(c===0||u===0)return;s.globalCompositeOperation="source-over",s.fillStyle=o.trail.fadeAlpha>=1?"#000":`#000000${ii(o.trail.fadeAlpha*255)}`,s.fillRect(0,0,c,u);const h=Ko(),f=(i==null?void 0:i.bass)??0,p=i!=null&&i.beat?o.audio.beatKick:0,g=this.handPoints(e);if(g.length>0){const y=g.reduce((b,_)=>b+_.x,0)/g.length,v=g.reduce((b,_)=>b+_.y,0)/g.length;this.aim.x+=(y-this.aim.x)*.08,this.aim.y+=(v-this.aim.y)*.08}const m=1+f*o.audio.bassScale;switch(s.textAlign="center",s.textBaseline="middle",s.lineJoin="round",Math.round(o.mode)){case 1:this.radial(c,u,m,h,p,t);break;case 2:this.wave(c,u,m,h,p,t);break;case 3:this.depth(c,u,m,h,p,t);break;case 4:this.scatter(c,u,m,h,p,t);break;default:this.mask(c,u,m,h,g,t);break}}spacing(e,t,i){const{cfg:s}=this,o=1+Math.sin(i*s.grid.breatheSpeed)*s.grid.breathe,c=Math.max(1,Math.round(s.grid.columns)),u=Math.max(1,Math.round(s.grid.rows)),h=s.grid.spread*o;return{cols:c,rows:Math.min(u,Math.max(1,Math.floor(PT/c))),dx:e/c*h,dy:t/u*h}}mask(e,t,i,s,o,c){const{cfg:u}=this,{cols:h,rows:f,dx:p,dy:g}=this.spacing(e,t,s),m=this.fitSize(this.text,p*u.type.fit)*i,y=Math.max(.01,u.mask.reach),v=e/t;let b=0;for(let _=0;_<f;_++)for(let S=0;S<h;S++,b++){const w=(S+.5)/h,E=(_+.5)/f;let T=0;for(const z of o){const D=(w-z.x)*v,H=E-z.y;T+=Math.exp(-((D*D+H*H)/(y*y)))}const L=u.mask.softness*.5,A=L<=0?T>u.mask.threshold?1:0:Math.min(1,Math.max(0,(T-(u.mask.threshold-L))/(L*2))),I=u.mask.invert>=.5?1-A:A;if(I<=.02)continue;const C=(S+.5)*p+(e-h*p)/2,F=(_+.5)*g+(t-f*g)/2;this.stamp(C,F,m,this.colorFor(b,s,c),I)}}radial(e,t,i,s,o,c){const{cfg:u}=this,{cols:h,rows:f,dx:p,dy:g}=this.spacing(e,t,s),m=this.fitSize(this.text,p*u.type.fit)*i,y=(u.radial.strength+o)*(1+Math.sin(s*u.radial.pulseSpeed)*u.radial.pulse),v=.5+(this.aim.x-.5)*u.motion.handInfluence,b=.5+(this.aim.y-.5)*u.motion.handInfluence;let _=0;for(let S=0;S<f;S++)for(let w=0;w<h;w++,_++){const E=(w+.5)/h,T=(S+.5)/f,L=E-v,A=T-b,I=Math.min(1,Math.hypot(L,A)*1.42),C=1+Math.pow(I,u.radial.power)*y,F=(v+L*C)*e,z=(b+A*C)*t;F<-p||F>e+p||z<-g||z>t+g||this.stamp(F,z,m,this.colorFor(_,s,c))}}wave(e,t,i,s,o,c){const{cfg:u}=this,{cols:h,rows:f,dx:p,dy:g}=this.spacing(e,t,s),m=this.fitSize(this.text,p*u.type.fit)*i,y=e*u.wave.amplitude*(1+o),v=(this.aim.y-.5)*2*u.motion.handInfluence;let b=0;for(let _=0;_<f;_++){const S=_/Math.max(1,f)*u.wave.frequency*Math.PI*2,w=Math.sin(S+s*u.wave.speed+v)*y,E=1+Math.sin(S+s*u.wave.speed)*u.wave.scaleWave;for(let T=0;T<h;T++,b++){const L=(T+.5)*p+(e-h*p)/2+w,A=(_+.5)*g+(t-f*g)/2,I=(L%e+e)%e;this.stamp(I,A,m*E,this.colorFor(b,s,c))}}}depth(e,t,i,s,o,c){const{cfg:u}=this,h=t*u.depth.size*i,f=Math.max(2,Math.round(u.depth.steps)),p=s*u.depth.speed,g=t*(u.depth.horizon+(this.aim.y-.5)*u.motion.handInfluence*.3);for(let m=0;m<f;m++){const y=((m/f+p)%1+1)%1,v=Math.pow(y,u.depth.curve),b=v*(1+o),_=g+v*(t-g)*1.1;_>t+h||b<=.001||this.stamp(e/2,_,Math.max(1,h*b),this.colorFor(m,s,c),Math.min(1,.25+v),this.text,u.type.tracking+v*u.depth.spread)}}scatter(e,t,i,s,o,c){const{cfg:u}=this,h=[...this.text];if(h.length===0)return;this.targets.length!==h.length&&(this.targets=h.map((y,v)=>({x:Vo.noise(v*3.7+1),y:Vo.noise(v*7.1+2),seed:Vo.noise(v*11.3+3)})));const f=Math.max(2,t*u.scatter.size*i),p=Math.min(1,Math.max(0,u.scatter.amount+o+(this.aim.x-.5)*u.motion.handInfluence)),g=f*(.62+u.type.tracking),m=g*h.length;h.forEach((y,v)=>{const b=this.targets[v],_=v*u.scatter.stagger*.1,S=Math.min(1,Math.max(0,p-_)),w=e/2-m/2+g*(v+.5),E=t/2;let T,L;if(u.scatter.spiral>=.5){const A=v/h.length*Math.PI*6+s*u.scatter.drift,I=(.1+v/h.length*.4)*Math.min(e,t);T=e/2+Math.cos(A)*I,L=t/2+Math.sin(A)*I}else{const A=s*u.scatter.drift+b.seed*Math.PI*2;T=(.08+b.x*.84)*e+Math.cos(A)*e*.05,L=(.08+b.y*.84)*t+Math.sin(A)*t*.05}this.stamp(w+(T-w)*S,E+(L-E)*S,f,this.colorFor(v,s,c),1,y)})}}const vd={frame:{zoom:1,spreadZoom:.5,handDrift:.12,mirror:0},slice:{count:12,offset:.06,speed:.8,beatKick:1.5},look:{tint:0,gain:1},trail:{fadeAlpha:1}};class LT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"cfg",vd);U(this,"video",null);U(this,"url",null);U(this,"drift",{x:0,y:0});this.canvas=e,this.ctx=t}setParams(e){this.cfg=Ci(vd,e)}setClipUrl(e){var i;if(e===this.url||(this.url=e,(i=this.video)==null||i.pause(),this.video=null,!e))return;const t=document.createElement("video");t.src=e,t.loop=!0,t.muted=!0,t.playsInline=!0,t.play().catch(()=>{}),this.video=t}followTempo(e){const t=Math.min(4,Math.max(.25,Sn()));if(Math.abs(e.playbackRate-t)>.02)try{e.playbackRate=t}catch{}}destroy(){var e;(e=this.video)==null||e.pause(),this.video=null}render(e,t,i){const{ctx:s,cfg:o}=this,c=this.canvas.width,u=this.canvas.height;if(c===0||u===0)return;o.trail.fadeAlpha>=1?(s.globalCompositeOperation="source-over",s.fillStyle="#000",s.fillRect(0,0,c,u)):(s.fillStyle=`#000000${ii(o.trail.fadeAlpha*255)}`,s.fillRect(0,0,c,u));const h=this.video,f=h&&h.readyState>=2&&h.videoWidth>0;if(h&&this.followTempo(h),!f){s.fillStyle=`${t[0]??"#ffffff"}66`,s.font="500 14px ui-monospace, monospace",s.textAlign="center",s.fillText(this.url?"LOADING CLIP…":"NO CLIP — UPLOAD ONE IN THE LIBRARY",c/2,u/2);return}const p=[e.left,e.right].filter(Boolean);let g=0,m=0;if(p.length>0){const C=p.reduce((z,D)=>z+D.position.x,0)/p.length,F=p.reduce((z,D)=>z+D.position.y,0)/p.length;g=(C-.5)*2,m=(F-.5)*2}this.drift.x+=(g-this.drift.x)*.1,this.drift.y+=(m-this.drift.y)*.1;const y=e.distanceBetweenHands??.4,v=Math.max(.05,o.frame.zoom*(1+(y-.4)*o.frame.spreadZoom)),b=Math.max(c/h.videoWidth,u/h.videoHeight),_=h.videoWidth*b*v,S=h.videoHeight*b*v,w=(c-_)/2+this.drift.x*c*o.frame.handDrift,E=(u-S)/2+this.drift.y*u*o.frame.handDrift,T=Ko(),L=i!=null&&i.beat?o.slice.beatKick:1,A=Math.max(1,Math.round(o.slice.count)),I=u/A;s.save(),o.frame.mirror>=.5&&(s.translate(c,0),s.scale(-1,1));for(let C=0;C<A;C++){const F=C/A*Math.PI*2,z=A<2?0:Math.sin(T*o.slice.speed+F)*c*o.slice.offset*L*(1+Math.abs(this.drift.x)),D=C*I;s.save(),s.beginPath(),s.rect(0,D,c,I+1),s.clip(),s.drawImage(h,w+z,E,_,S),s.restore()}s.restore(),o.look.tint>0&&(s.globalCompositeOperation="overlay",s.fillStyle=`${t[0]??"#ffffff"}${ii(o.look.tint*255)}`,s.fillRect(0,0,c,u),s.globalCompositeOperation="source-over"),o.look.gain>1&&(s.globalCompositeOperation="lighter",s.globalAlpha=Math.min(1,o.look.gain-1),s.drawImage(this.canvas,0,0),s.globalAlpha=1,s.globalCompositeOperation="source-over")}}const _d={mode:0,grid:{columns:48,cellAspect:1.15,fill:.95,spreadDensity:.35},tone:{brightness:0,contrast:1.3,floor:.08,invert:0},letters:{ramp:0,weight:600,outline:0},shape:{rotate:0,anchor:0,minimum:.05},warp:{handPush:.04,ripple:0,rippleSpeed:.6},colour:{fromSource:0,spread:1},audio:{bassScale:.35,beatKick:.25},trail:{fadeAlpha:1}},Zg="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",mf=" .:-=+*#%@",gf=6e3;class IT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"cfg",_d);U(this,"url",null);U(this,"kind","video");U(this,"video",null);U(this,"image",null);U(this,"failed",!1);U(this,"sampler");U(this,"samplerCtx");U(this,"text","N4TH");U(this,"aim",{x:.5,y:.5});this.canvas=e,this.ctx=t,this.sampler=document.createElement("canvas"),this.samplerCtx=this.sampler.getContext("2d",{willReadFrequently:!0})}setParams(e){this.cfg=Ci(_d,e)}setText(e){this.text=e.trim()||"N4TH"}setClipUrl(e,t="video"){var s;if(e===this.url&&t===this.kind||(this.url=e,this.kind=t,this.failed=!1,(s=this.video)==null||s.pause(),this.video=null,this.image=null,!e))return;if(t==="image"){const o=new Image;o.onerror=()=>{this.failed=!0},o.src=e,this.image=o;return}const i=document.createElement("video");i.src=e,i.loop=!0,i.muted=!0,i.playsInline=!0,i.onerror=()=>{this.failed=!0},i.play().catch(()=>{}),this.video=i}followTempo(e){const t=Math.min(4,Math.max(.25,Sn()));if(Math.abs(e.playbackRate-t)>.02)try{e.playbackRate=t}catch{}}destroy(){var e;(e=this.video)==null||e.pause(),this.video=null,this.image=null}source(){const{video:e,image:t}=this;return e&&this.followTempo(e),e&&e.readyState>=2&&e.videoWidth>0?{el:e,w:e.videoWidth,h:e.videoHeight}:t&&t.complete&&t.naturalWidth>0?{el:t,w:t.naturalWidth,h:t.naturalHeight}:null}notice(e,t,i){const{ctx:s}=this;s.fillStyle=`${i[0]??"#ffffff"}66`,s.font="500 14px ui-monospace, monospace",s.textAlign="center",s.textBaseline="middle",s.fillText(this.failed?"THAT FILE WOULD NOT OPEN":this.url?"LOADING…":"NO FILE — UPLOAD ONE IN THE LIBRARY",e/2,t/2)}colorFor(e,t,i,s,o){const{colour:c}=this.cfg,u=Math.max(1,Math.round(c.spread)),h=o[Math.floor(e/u)%Math.max(1,o.length)]??"#ffffff";if(c.fromSource<=0)return h;if(c.fromSource>=1)return`rgb(${t}, ${i}, ${s})`;const f=h.replace("#",""),p=f.length===3?f.split("").map(_=>_+_).join(""):f,g=parseInt(p.slice(0,2),16)||0,m=parseInt(p.slice(2,4),16)||0,y=parseInt(p.slice(4,6),16)||0,v=c.fromSource,b=(_,S)=>Math.round(_+(S-_)*v);return`rgb(${b(g,t)}, ${b(m,i)}, ${b(y,s)})`}render(e,t,i){const{ctx:s,cfg:o}=this,c=this.canvas.width,u=this.canvas.height;if(c===0||u===0)return;s.globalCompositeOperation="source-over",s.fillStyle=o.trail.fadeAlpha>=1?"#000":`#000000${ii(o.trail.fadeAlpha*255)}`,s.fillRect(0,0,c,u);const h=this.source();if(!h){this.notice(c,u,t);return}const f=[e.left,e.right].filter(Boolean);if(f.length>0){const J=f.reduce(($,K)=>$+K.position.x,0)/f.length,G=f.reduce(($,K)=>$+K.position.y,0)/f.length;this.aim.x+=(J-this.aim.x)*.08,this.aim.y+=(G-this.aim.y)*.08}const g=1-((e.distanceBetweenHands??.4)-.4)*o.grid.spreadDensity;let m=Math.max(2,Math.round(o.grid.columns*Math.max(.25,g)));const v=c/m*Math.max(.2,o.grid.cellAspect);let b=Math.max(2,Math.round(u/v));m*b>gf&&(b=Math.max(2,Math.floor(gf/m)),m=Math.max(2,Math.min(m,Math.floor(gf/b))));const _=this.samplerCtx;if(!_)return;(this.sampler.width!==m||this.sampler.height!==b)&&(this.sampler.width=m,this.sampler.height=b);const S=Math.max(m/h.w,b/h.h),w=h.w*S,E=h.h*S;_.drawImage(h.el,(m-w)/2,(b-E)/2,w,E);let T;try{T=_.getImageData(0,0,m,b).data}catch{this.notice(c,u,t);return}const L=Ko(),A=(i==null?void 0:i.bass)??0,I=i!=null&&i.beat?o.audio.beatKick:0,C=1+A*o.audio.bassScale+I,F=Math.round(o.mode),z=this.text,D=c/m,H=u/b,ie=Math.min(D,H)*o.grid.fill*C;if(s.textAlign="center",s.textBaseline="middle",s.lineJoin="round",F===0){s.font=`${Math.round(o.letters.weight)} 100px ${Zg}`;const J=s.measureText("M").width||60,G=Math.max(1,D*o.grid.fill*C/(J/100));s.font=`${Math.round(o.letters.weight)} ${G}px ${Zg}`,s.lineWidth=Math.max(.5,G*.06)}for(let J=0;J<b;J++)for(let G=0;G<m;G++){const $=(J*m+G)*4,K=T[$],W=T[$+1],re=T[$+2];let ne=(.2126*K+.7152*W+.0722*re)/255;if(ne=(ne-.5)*o.tone.contrast+.5+o.tone.brightness,o.tone.invert>=.5&&(ne=1-ne),ne=Math.min(1,Math.max(0,ne)),ne<=o.tone.floor)continue;const O=(ne-o.tone.floor)/(1-o.tone.floor);let q=(G+.5)*D,ve=(J+.5)*H;if(o.warp.handPush!==0&&f.length>0){const Y=q/c-this.aim.x,me=ve/u-this.aim.y,pe=Math.exp(-(Y*Y+me*me)*8);q+=Y*pe*c*o.warp.handPush,ve+=me*pe*u*o.warp.handPush}o.warp.ripple!==0&&(ve+=Math.sin(G*.35+L*o.warp.rippleSpeed)*H*o.warp.ripple);const be=J*m+G,de=this.colorFor(be,K,W,re,t);switch(F){case 1:{const Y=ie/2*Math.max(o.shape.minimum,O);s.fillStyle=de,s.beginPath(),s.arc(q,ve,Y,0,Math.PI*2),s.fill();break}case 2:{const Y=ie*Math.max(o.shape.minimum,O);s.fillStyle=de,o.shape.rotate!==0?(s.save(),s.translate(q,ve),s.rotate(o.shape.rotate*Math.PI*.25),s.fillRect(-Y/2,-Y/2,Y,Y),s.restore()):s.fillRect(q-Y/2,ve-Y/2,Y,Y);break}case 3:{const Y=Math.max(1,D*o.grid.fill*.6),me=H*o.grid.fill*C*Math.max(o.shape.minimum,O),pe=o.shape.anchor>=.5?(J+1)*H-me+(ve-(J+.5)*H):ve-me/2;s.fillStyle=de,s.fillRect(q-Y/2,pe,Y,me);break}default:{const Y=o.letters.ramp>=.5?z[be%z.length]:mf[Math.min(mf.length-1,Math.round(O*(mf.length-1)))];if(!Y||Y===" ")break;o.letters.outline>=.5?(s.strokeStyle=de,s.strokeText(Y,q,ve)):(s.globalAlpha=o.letters.ramp>=.5?O:1,s.fillStyle=de,s.fillText(Y,q,ve),s.globalAlpha=1);break}}}}}const yd={form:{lobes:7,spread:1.3,size:.72,blend:.82,ripple:.2,rippleScale:1.5},motion:{drift:.24,churn:.35,spin:.08},material:{dispersion:.85,rimTightness:2,split:.1,silver:.92,facing:.05,polish:52},light:{keyX:-.55,keyY:.72,key:2.1,fill:.3,ambient:.03},hands:{push:.55,spread:.45,kick:.55},look:{grain:.055,gain:1}},NT=`#version 300 es
in vec2 p;
void main() { gl_Position = vec4(p, 0.0, 1.0); }`,FT=`#version 300 es
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
}`;class UT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"cfg",yd);U(this,"gl",null);U(this,"surface");U(this,"program",null);U(this,"uniforms",{});U(this,"aim",{x:0,y:0});U(this,"kick",0);U(this,"failed",!1);this.canvas=e,this.ctx=t,this.surface=document.createElement("canvas"),this.init()}setParams(e){this.cfg=Ci(yd,e)}init(){const e=this.surface.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"high-performance"});if(!e){this.failed=!0;return}this.gl=e;const t=(h,f)=>{const p=e.createShader(h);return e.shaderSource(p,f),e.compileShader(p),e.getShaderParameter(p,e.COMPILE_STATUS)?p:(console.error("Chrome shader:",e.getShaderInfoLog(p)),null)},i=t(e.VERTEX_SHADER,NT),s=t(e.FRAGMENT_SHADER,FT);if(!i||!s){this.failed=!0;return}const o=e.createProgram();if(e.attachShader(o,i),e.attachShader(o,s),e.linkProgram(o),!e.getProgramParameter(o,e.LINK_STATUS)){console.error("Chrome link:",e.getProgramInfoLog(o)),this.failed=!0;return}this.program=o,e.useProgram(o);const c=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,c),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW);const u=e.getAttribLocation(o,"p");e.enableVertexAttribArray(u),e.vertexAttribPointer(u,2,e.FLOAT,!1,0,0);for(const h of["uSize","uTime","uLobes","uSpread","uSize2","uBlend","uRipple","uRippleScale","uDrift","uChurn","uSpin","uDispersion","uRimTight","uSplit","uSilver","uFacing","uPolish","uKey","uKeyGain","uFill","uAmbient","uPush","uKick","uGrain","uGain","uHue"])this.uniforms[h]=e.getUniformLocation(o,h)}destroy(){var t;const e=this.gl;e&&(this.program&&e.deleteProgram(this.program),(t=e.getExtension("WEBGL_lose_context"))==null||t.loseContext(),this.gl=null,this.program=null)}hueFrom(e){const t=(e[0]??"#8888ff").replace("#",""),i=t.length===3?t.split("").map(u=>u+u).join(""):t,s=(parseInt(i.slice(0,2),16)||0)/255,o=(parseInt(i.slice(2,4),16)||0)/255,c=(parseInt(i.slice(4,6),16)||0)/255;return Math.atan2(Math.sqrt(3)*(o-c),2*s-o-c)-2.2}render(e,t,i){const{ctx:s,cfg:o}=this,c=this.canvas.width,u=this.canvas.height;if(c===0||u===0)return;const h=this.gl;if(this.failed||!h||!this.program){s.fillStyle="#000",s.fillRect(0,0,c,u),s.fillStyle="rgba(255,255,255,0.4)",s.font="500 14px ui-monospace, monospace",s.textAlign="center",s.fillText("CHROME NEEDS WEBGL2",c/2,u/2);return}const f=.6,p=Math.max(2,Math.round(c*f)),g=Math.max(2,Math.round(u*f));(this.surface.width!==p||this.surface.height!==g)&&(this.surface.width=p,this.surface.height=g),h.viewport(0,0,p,g),h.useProgram(this.program);const m=[e.left,e.right].filter(Boolean);let y=0,v=0;if(m.length>0){const T=m.reduce((A,I)=>A+I.position.x,0)/m.length,L=m.reduce((A,I)=>A+I.position.y,0)/m.length;y=(T-.5)*2,v=(.5-L)*2}this.aim.x+=(y-this.aim.x)*.06,this.aim.y+=(v-this.aim.y)*.06;const b=(e.clapping?e.clapIntensity??1:0)+(i!=null&&i.beat?i.beatIntensity:0)+((i==null?void 0:i.onset)??0)*.5;this.kick=Math.max(this.kick*.92,Math.min(1.6,b));const _=e.distanceBetweenHands??.4,S=(i==null?void 0:i.bass)??0,w=this.uniforms,E=(T,L)=>h.uniform1f(w[T],L);h.uniform2f(w.uSize,p,g),E("uTime",Ko()),E("uLobes",Math.max(1,Math.min(7,Math.round(o.form.lobes)))),E("uSpread",o.form.spread*(1+(_-.4)*o.hands.spread)+this.kick*o.hands.kick*.35),E("uSize2",o.form.size*(1+S*.22)),E("uBlend",Math.max(.05,o.form.blend)),E("uRipple",o.form.ripple*(1+this.kick*o.hands.kick*1.6)),E("uRippleScale",o.form.rippleScale),E("uDrift",o.motion.drift),E("uChurn",o.motion.churn),E("uSpin",o.motion.spin),E("uDispersion",o.material.dispersion*(1+this.kick*.35)),E("uRimTight",Math.max(.5,o.material.rimTightness)),E("uSplit",o.material.split),E("uSilver",o.material.silver),E("uFacing",o.material.facing),E("uPolish",Math.max(2,o.material.polish)),h.uniform2f(w.uKey,o.light.keyX,o.light.keyY),E("uKeyGain",o.light.key),E("uFill",o.light.fill),E("uAmbient",o.light.ambient),h.uniform2f(w.uPush,this.aim.x*o.hands.push,this.aim.y*o.hands.push),E("uKick",this.kick),E("uGrain",o.look.grain),E("uGain",o.look.gain),E("uHue",this.hueFrom(t)),h.drawArrays(h.TRIANGLES,0,3),s.globalCompositeOperation="source-over",s.fillStyle="#000",s.fillRect(0,0,c,u),s.imageSmoothingEnabled=!0,s.drawImage(this.surface,0,0,c,u)}}function rv(a,e,t,i){var o,c;let s;switch(a){case"geometric":s=new N0(e,t);break;case"particles":s=new uy(e,t);break;case"waves":s=new hy(e,t);break;case"glitch":s=new fy(e,t);break;case"technical":s=new dy(e,t);break;case"lottie":s=new py(e,t);break;case"lottie-classic":s=new yT(e,t);break;case"linefield":s=new vy(e,t);break;case"thicklines":s=new xT(e,t);break;case"flowfield":s=new vT(e,t);break;case"liquidchrome":s=new _T(e,t);break;case"chromatic":s=new my(e,t);break;case"halftone":s=new gy(e,t);break;case"matrix":s=new xy(e,t);break;case"distortedcamera":s=new eT(e,t),i&&((o=s.setVideoElement)==null||o.call(s,i));break;case"cyberstream":s=new tT(e,t);break;case"facecloud":s=new nT(e,t);break;case"face":s=new pd(e,t);break;case"morphing":s=new iT(e,t);break;case"cubewall":s=new rT(e,t);break;case"smokehand-torus":s=new Wc(e,t);break;case"smokehand-hand":s=new Wc(e,t),(c=s.setSmokeHandModel)==null||c.call(s,"hand");break;case"network-cube":s=new ST(e,t);break;case"elastic-net":s=new MT(e,t);break;case"text":s=new Vo(e,t);break;case"video":s=new LT(e,t);break;case"mosaic":s=new IT(e,t);break;case"chrome":s=new UT(e,t);break;case"ripple":s=new AT(e,t);break;case"digitalblocks":s=new wT(e,t);break;default:s=new N0(e,t);break}return s}const Qg=[.35,.45,.8,1.15,1.5,1.9],DT=3.6,kT=2.2,OT=6;function zT(){return{rate:1,clap:0}}function Jg(a){if(!a)return null;if(a.gesture==="fist")return Qg[0];const e=a.fingerCount;return e===void 0?null:Qg[Math.min(5,Math.max(1,Math.round(e)))]}function BT(a,e,t){const i=[Jg(a.left),Jg(a.right)].filter(c=>c!==null),s=i.length?Math.max(...i):1,o=Math.min(1,t*OT);return e.rate+=(s-e.rate)*o,a.clapping&&(e.clap=Math.max(e.clap,DT*Math.max(.5,a.clapIntensity??1))),e.clap=Math.max(0,e.clap-e.clap*kT*t),e.rate+e.clap}const $o={master:{enabled:1},transition:{enabled:1,duration:.6},feedback:{enabled:1,mix:1,amount:0,zoom:1,rotate:0,offsetX:0,offsetY:0,hueShift:0},colour:{enabled:1,mix:1,hue:0,saturation:1},displace:{enabled:1,mix:1,amount:0,scale:3,speed:.2},rgbSplit:{enabled:1,mix:1,amount:0},kaleido:{enabled:1,mix:1,segments:0,spin:0},quantize:{enabled:1,mix:1,pixel:0,levels:0},bloom:{enabled:1,mix:1,amount:0,threshold:.6}},jd=`
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
`,HT=`${jd}
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
}`,GT=`${jd}
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
}`,VT=`
uniform float uAmount;
uniform float uMix;

void main() {
  vec2 dir = (vUv - 0.5) * uAmount;
  vec3 wet = vec3(
    texture(uTex, clamp(vUv + dir, 0.0, 1.0)).r,
    texture(uTex, vUv).g,
    texture(uTex, clamp(vUv - dir, 0.0, 1.0)).b);
  fragColor = vec4(mix(texture(uTex, vUv).rgb, wet, uMix), 1.0);
}`,WT=`
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
}`,XT=`
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
}`,jT=`
uniform float uThreshold;

void main() {
  vec3 c = texture(uTex, vUv).rgb;
  float luma = dot(c, vec3(0.2126, 0.7152, 0.0722));
  float keep = smoothstep(uThreshold, uThreshold + 0.25, luma);
  fragColor = vec4(c * keep, 1.0);
}`,qT=`
uniform vec2 uDirection;

void main() {
  vec2 texel = uDirection / uResolution;
  vec3 sum = texture(uTex, vUv).rgb * 0.2270270270;
  sum += texture(uTex, clamp(vUv + texel * 1.3846153846, 0.0, 1.0)).rgb * 0.3162162162;
  sum += texture(uTex, clamp(vUv - texel * 1.3846153846, 0.0, 1.0)).rgb * 0.3162162162;
  sum += texture(uTex, clamp(vUv + texel * 3.2307692308, 0.0, 1.0)).rgb * 0.0702702703;
  sum += texture(uTex, clamp(vUv - texel * 3.2307692308, 0.0, 1.0)).rgb * 0.0702702703;
  fragColor = vec4(sum, 1.0);
}`,YT=`
uniform sampler2D uBloom;
uniform float uAmount;
uniform float uMix;

void main() {
  vec3 base = texture(uTex, vUv).rgb;
  vec3 glow = texture(uBloom, vUv).rgb * uAmount;
  fragColor = vec4(mix(base, base + glow, uMix), 1.0);
}`,$T=`
uniform sampler2D uNext;
uniform float uMix;

void main() {
  fragColor = vec4(mix(texture(uTex, vUv).rgb, texture(uNext, vUv).rgb, uMix), 1.0);
}`,KT=`
void main() {
  fragColor = vec4(texture(uTex, vUv).rgb, 1.0);
}`,ZT=`${jd}
uniform float uHue;
uniform float uSaturation;
uniform float uMix;

void main() {
  vec3 src = texture(uTex, vUv).rgb;
  vec3 wet = hueRotate(src, uHue);
  float grey = dot(wet, vec3(0.299, 0.587, 0.114));
  wet = mix(vec3(grey), wet, uSaturation);
  fragColor = vec4(mix(src, clamp(wet, 0.0, 1.0), uMix), 1.0);
}`;function rs(a,e){return a.enabled>=.5&&a.mix>0&&e}function QT(a){const e=Ci($o,a);return e.master.enabled<.5?!1:rs(e.colour,e.colour.hue!==0||e.colour.saturation!==1)||rs(e.feedback,e.feedback.amount>0)||rs(e.displace,e.displace.amount>0)||rs(e.rgbSplit,e.rgbSplit.amount>0)||rs(e.kaleido,e.kaleido.segments>=2)||rs(e.quantize,e.quantize.pixel>1||e.quantize.levels>=2)||rs(e.bloom,e.bloom.amount>0)}class JT{constructor(e){U(this,"gl");U(this,"cfg",$o);U(this,"programs",{});U(this,"sourceTexture");U(this,"previousTexture");U(this,"blendTarget");U(this,"targets");U(this,"feedback");U(this,"bloomTargets");U(this,"width",1);U(this,"height",1);U(this,"ping",0);U(this,"feedbackPrimed",!1);const t=e.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,powerPreference:"high-performance"});if(!t)throw new Error("WebGL2 is not available");this.gl=t,this.programs={colour:fi(t,ZT),copy:fi(t,KT),feedback:fi(t,HT),displace:fi(t,GT),rgbSplit:fi(t,VT),kaleido:fi(t,WT),quantize:fi(t,XT),blend:fi(t,$T),bloomBright:fi(t,jT),bloomBlur:fi(t,qT),bloomComposite:fi(t,YT)},t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),this.sourceTexture=t.createTexture(),this.previousTexture=t.createTexture();for(const i of[this.sourceTexture,this.previousTexture])t.bindTexture(t.TEXTURE_2D,i),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE);this.blendTarget=as(t,1,1),this.targets=[as(t,1,1),as(t,1,1)],this.feedback=as(t,1,1),this.bloomTargets=[as(t,1,1),as(t,1,1)]}setParams(e){this.cfg=Ci($o,e)}live(e,t){return this.cfg.master.enabled>=.5&&rs(e,t)}get active(){const e=this.cfg;return e.master.enabled<.5?!1:this.live(e.colour,e.colour.hue!==0||e.colour.saturation!==1)||this.live(e.feedback,e.feedback.amount>0)||this.live(e.displace,e.displace.amount>0)||this.live(e.rgbSplit,e.rgbSplit.amount>0)||this.live(e.kaleido,e.kaleido.segments>=2)||this.live(e.quantize,e.quantize.pixel>1||e.quantize.levels>=2)||this.live(e.bloom,e.bloom.amount>0)}resize(e,t){if(this.width===e&&this.height===t)return;const i=this.gl;this.width=e,this.height=t,os(i,this.targets[0],e,t),os(i,this.targets[1],e,t),os(i,this.feedback,e,t),os(i,this.blendTarget,e,t),os(i,this.bloomTargets[0],Math.max(1,e>>1),Math.max(1,t>>1)),os(i,this.bloomTargets[1],Math.max(1,e>>1),Math.max(1,t>>1)),this.feedbackPrimed=!1}use(e,t=this.width,i=this.height,s=0){const o=this.gl,c=this.programs[e];return o.useProgram(c),o.uniform2f(o.getUniformLocation(c,"uResolution"),t,i),o.uniform1f(o.getUniformLocation(c,"uTime"),s),c}next(){return this.ping^=1,this.targets[this.ping]}render(e,t,i,s=1){const o=this.gl,c=e.width,u=e.height;if(c===0||u===0)return;const h=o.canvas;(h.width!==c||h.height!==u)&&(h.width=c,h.height=u),this.resize(c,u),o.bindTexture(o.TEXTURE_2D,this.sourceTexture),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,o.RGBA,o.UNSIGNED_BYTE,e);let f=this.sourceTexture;if(i&&s<1&&i.width===c&&i.height===u){o.bindTexture(o.TEXTURE_2D,this.previousTexture),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,o.RGBA,o.UNSIGNED_BYTE,i);const v=this.use("blend");mn(o,v,"uTex",this.previousTexture,0),mn(o,v,"uNext",this.sourceTexture,1),o.uniform1f(o.getUniformLocation(v,"uMix"),s),Gn(o,this.blendTarget,c,u),f=this.blendTarget.texture}if(!this.active){this.feedbackPrimed&&(this.feedbackPrimed=!1);const v=this.use("copy");mn(o,v,"uTex",f,0),Gn(o,null,c,u);return}const p=this.cfg;let g=f,m;if(this.live(p.colour,p.colour.hue!==0||p.colour.saturation!==1)){const v=this.use("colour");mn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uHue"),p.colour.hue),o.uniform1f(o.getUniformLocation(v,"uSaturation"),p.colour.saturation),o.uniform1f(o.getUniformLocation(v,"uMix"),p.colour.mix),m=this.next(),Gn(o,m,c,u),g=m.texture}if(this.live(p.feedback,p.feedback.amount>0)){const v=this.use("feedback");mn(o,v,"uTex",g,0),mn(o,v,"uFeedback",this.feedback.texture,1),o.uniform1f(o.getUniformLocation(v,"uAmount"),this.feedbackPrimed?p.feedback.amount:0),o.uniform1f(o.getUniformLocation(v,"uZoom"),p.feedback.zoom),o.uniform1f(o.getUniformLocation(v,"uRotate"),p.feedback.rotate),o.uniform2f(o.getUniformLocation(v,"uOffset"),p.feedback.offsetX,p.feedback.offsetY),o.uniform1f(o.getUniformLocation(v,"uHueShift"),p.feedback.hueShift),o.uniform1f(o.getUniformLocation(v,"uMix"),p.feedback.mix),m=this.next(),Gn(o,m,c,u),g=m.texture}if(this.live(p.displace,p.displace.amount>0)){const v=this.use("displace",c,u,t);mn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uAmount"),p.displace.amount),o.uniform1f(o.getUniformLocation(v,"uScale"),p.displace.scale),o.uniform1f(o.getUniformLocation(v,"uSpeed"),p.displace.speed),o.uniform1f(o.getUniformLocation(v,"uMix"),p.displace.mix),m=this.next(),Gn(o,m,c,u),g=m.texture}if(this.live(p.rgbSplit,p.rgbSplit.amount>0)){const v=this.use("rgbSplit");mn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uAmount"),p.rgbSplit.amount),o.uniform1f(o.getUniformLocation(v,"uMix"),p.rgbSplit.mix),m=this.next(),Gn(o,m,c,u),g=m.texture}if(this.live(p.kaleido,p.kaleido.segments>=2)){const v=this.use("kaleido");mn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uSegments"),Math.round(p.kaleido.segments)),o.uniform1f(o.getUniformLocation(v,"uSpin"),p.kaleido.spin),o.uniform1f(o.getUniformLocation(v,"uMix"),p.kaleido.mix),m=this.next(),Gn(o,m,c,u),g=m.texture}if(this.live(p.quantize,p.quantize.pixel>1||p.quantize.levels>=2)){const v=this.use("quantize");mn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uPixel"),p.quantize.pixel),o.uniform1f(o.getUniformLocation(v,"uLevels"),p.quantize.levels),o.uniform1f(o.getUniformLocation(v,"uMix"),p.quantize.mix),m=this.next(),Gn(o,m,c,u),g=m.texture}this.live(p.bloom,p.bloom.amount>0)&&(g=this.renderBloom(g,c,u));const y=this.use("copy");mn(o,y,"uTex",g,0),Gn(o,this.feedback,c,u),this.feedbackPrimed=!0,mn(o,y,"uTex",g,0),Gn(o,null,c,u)}renderBloom(e,t,i){const s=this.gl,o=this.bloomTargets,c=o[0].width,u=o[0].height;let h=this.use("bloomBright",c,u);mn(s,h,"uTex",e,0),s.uniform1f(s.getUniformLocation(h,"uThreshold"),this.cfg.bloom.threshold),Gn(s,o[0],c,u),h=this.use("bloomBlur",c,u),mn(s,h,"uTex",o[0].texture,0),s.uniform2f(s.getUniformLocation(h,"uDirection"),1,0),Gn(s,o[1],c,u),h=this.use("bloomBlur",c,u),mn(s,h,"uTex",o[1].texture,0),s.uniform2f(s.getUniformLocation(h,"uDirection"),0,1),Gn(s,o[0],c,u),h=this.use("bloomComposite"),mn(s,h,"uTex",e,0),mn(s,h,"uBloom",o[0].texture,1),s.uniform1f(s.getUniformLocation(h,"uAmount"),this.cfg.bloom.amount),s.uniform1f(s.getUniformLocation(h,"uMix"),this.cfg.bloom.mix);const f=this.next();return Gn(s,f,t,i),f.texture}destroy(){var t;const e=this.gl;for(const i of Object.values(this.programs))e.deleteProgram(i);e.deleteTexture(this.sourceTexture),e.deleteTexture(this.previousTexture),ls(e,this.blendTarget),ls(e,this.targets[0]),ls(e,this.targets[1]),ls(e,this.feedback),ls(e,this.bloomTargets[0]),ls(e,this.bloomTargets[1]),(t=e.getExtension("WEBGL_lose_context"))==null||t.loseContext()}}const eC="screen";function ex(a,e){return a.duration<=0?1:Math.min(1,(e-a.fadeStart)/1e3/a.duration)}function tC({handData:a,layerColors:e,layers:t,videoElement:i,audioData:s,layerParams:o,fxParams:c,content:u,motion:h,onCanvasReady:f}){const p=ue.useRef(null),g=ue.useRef(null),m=ue.useRef(f);m.current=f;const y=ue.useCallback(J=>{var G;p.current=J,(G=m.current)==null||G.call(m,J)},[]),v=ue.useRef(null),b=ue.useRef(null),[_,S]=ue.useState(!1),w=ue.useRef([]),E=ue.useRef(t),T=ue.useRef(null),L=ue.useRef(a),A=ue.useRef(e),I=ue.useRef(i??null),C=ue.useRef(s),F=ue.useRef(o),z=ue.useRef(c),D=ue.useRef(u),H=ue.useRef(h),ie=ue.useRef(zT());return ue.useEffect(()=>{L.current=a,A.current=e,I.current=i??null,C.current=s,F.current=o,E.current=t,z.current=c,D.current=u,H.current=h},[a,e,i,s,o,t,c,u,h]),ue.useEffect(()=>{var J,G,$,K;for(const W of w.current){if(!W)continue;const re=u.clips[W.current.pattern];(G=(J=W.current.renderer).setText)==null||G.call(J,u.text),(K=($=W.current.renderer).setClipUrl)==null||K.call($,(re==null?void 0:re.url)??null,re==null?void 0:re.kind)}},[u]),ue.useEffect(()=>{w.current.forEach((J,G)=>{var $,K;(K=J==null?void 0:($=J.current.renderer).setParams)==null||K.call($,(o==null?void 0:o[G])??{})})},[o]),ue.useEffect(()=>{var J;(J=v.current)==null||J.setParams(c??{})},[c]),ue.useEffect(()=>{const J=p.current;if(!J)return;if(_){b.current=J.getContext("2d");return}let G=null;try{G=new JT(J),G.setParams(z.current??{}),v.current=G}catch($){console.error("Post pipeline unavailable, falling back to direct output:",$),v.current=null,S(!0)}return()=>{G==null||G.destroy(),v.current=null}},[_]),ue.useEffect(()=>{const J=document.createElement("canvas");T.current=J.getContext("2d");const G=()=>{const O=window.innerWidth,q=window.innerHeight;J.width=O,J.height=q;for(const be of w.current)for(const de of[be==null?void 0:be.current,be==null?void 0:be.outgoing])de&&(de.canvas.width=O,de.canvas.height=q);const ve=p.current;ve&&!v.current&&(ve.width=O,ve.height=q)};G(),window.addEventListener("resize",G);const $=(O,q)=>{var ve,be;try{I.current&&((be=(ve=O.renderer).setVideoElement)==null||be.call(ve,I.current));const de=E.current[q];O.renderer.render(L.current,A.current[q]??A.current[0]??[],C.current,de==null?void 0:de.colorMode)}catch(de){O.reportedError||(O.reportedError=!0,console.error(`Renderer "${O.pattern}" threw while drawing:`,de))}};let K=!1;const W=(O,q)=>{O.globalCompositeOperation="source-over",O.globalAlpha=1,O.fillStyle="#000",O.fillRect(0,0,O.canvas.width,O.canvas.height),w.current.forEach((ve,be)=>{var pe;if(!ve)return;const de=be===0,Y=((pe=E.current[be])==null?void 0:pe.opacity)??1;if(Y<=0)return;O.globalCompositeOperation=de?"source-over":eC;const me=ve.outgoing?ex(ve.outgoing,q):1;ve.outgoing&&(O.globalAlpha=Y*(de?1:1-me),O.drawImage(ve.outgoing.canvas,0,0)),O.globalAlpha=Y*me,O.drawImage(ve.current.canvas,0,0)}),O.globalAlpha=1,O.globalCompositeOperation="source-over"};let re=performance.now();const ne=()=>{const O=performance.now(),q=T.current,ve=Math.min(.1,(O-re)/1e3);re=O;const be=BT(L.current,ie.current,ve);if(cy(ve,H.current*be),w.current.forEach((de,Y)=>{var me,pe;de&&($(de.current,Y),de.outgoing&&(ex(de.outgoing,O)>=1?((pe=(me=de.outgoing.renderer).destroy)==null||pe.call(me),de.outgoing=null):$(de.outgoing,Y)))}),q&&w.current.length>0){W(q,O);const de=v.current;if(de)try{de.render(q.canvas,O/1e3)}catch(Y){K||(K=!0,console.error("Post pipeline threw while presenting:",Y))}else b.current&&b.current.drawImage(q.canvas,0,0)}g.current=requestAnimationFrame(ne)};return ne(),()=>{var O,q,ve,be,de;window.removeEventListener("resize",G),g.current&&cancelAnimationFrame(g.current);for(const Y of w.current)(ve=(O=Y==null?void 0:Y.outgoing)==null?void 0:(q=O.renderer).destroy)==null||ve.call(q),(de=Y==null?void 0:(be=Y.current.renderer).destroy)==null||de.call(be);w.current=[],T.current=null}},[]),ue.useEffect(()=>{var W,re,ne,O,q;const J=w.current,G=Ci($o,z.current??{}).transition,$=G.enabled>=.5?G.duration:0,K=(ve,be)=>{var Ie,Xe,Oe,gt;const de=document.createElement("canvas");de.width=window.innerWidth,de.height=window.innerHeight;const Y=de.getContext("2d");if(!Y)return null;let me;try{me=rv(ve,de,Y,I.current)}catch(rt){return console.error("Failed to create renderer for pattern:",ve,rt),null}(Xe=me.setParams)==null||Xe.call(me,((Ie=F.current)==null?void 0:Ie[be])??{}),(Oe=me.setText)==null||Oe.call(me,D.current.text);const pe=D.current.clips[ve];return(gt=me.setClipUrl)==null||gt.call(me,(pe==null?void 0:pe.url)??null,pe==null?void 0:pe.kind),{renderer:me,canvas:de,pattern:ve}};t.forEach(({pattern:ve},be)=>{var me,pe,Ie,Xe,Oe;const de=J[be];if((de==null?void 0:de.current.pattern)===ve)return;const Y=K(ve,be);if(Y){if(!de){J[be]={current:Y,outgoing:null};return}(Ie=(me=de.outgoing)==null?void 0:(pe=me.renderer).destroy)==null||Ie.call(pe),$>0?de.outgoing={...de.current,fadeStart:performance.now(),duration:$}:((Oe=(Xe=de.current.renderer).destroy)==null||Oe.call(Xe),de.outgoing=null),de.current=Y}});for(const ve of J.splice(t.length))(ne=(W=ve==null?void 0:ve.outgoing)==null?void 0:(re=W.renderer).destroy)==null||ne.call(re),(q=ve==null?void 0:(O=ve.current.renderer).destroy)==null||q.call(O)},[t.map(J=>J.pattern).join("|")]),V.jsx("canvas",{ref:y,className:"absolute inset-0 w-full h-full z-0"},_?"fallback-2d":"pipeline-gl")}const sv={bass:[20,160],lowMid:[160,800],mid:[800,4e3],high:[4e3,12e3]},nC=Object.keys(sv),iC=.002,rC=.04,sC=.25,aC=.0016,oC=6,lC=90,cC=170,uC=1.9;function hC(){const a=()=>({floor:255,ceiling:0});return{envelopes:{bass:a(),lowMid:a(),mid:a(),high:a()},overall:a(),previous:null,flux:[],lastBeat:0,onset:0}}function tx(a,e){a.floor+=(e-a.floor)*(e>a.floor?iC:rC),a.ceiling+=(e-a.ceiling)*(e>a.ceiling?sC:aC);const t=a.ceiling-a.floor;return t<oC?Math.min(1,e/190):Math.min(1,Math.max(0,(e-a.floor)/t))}function nx(a,e,t){const i=Math.max(0,Math.min(a.length-1,e)),s=Math.max(i+1,Math.min(a.length,t));let o=0;for(let c=i;c<s;c++)o+=a[c];return o/(s-i)}function fC(a,e,t,i,s){const o=e/2/a.length,c=A=>Math.round(A/o),u={};for(const A of nC){const[I,C]=sv[A];u[A]=tx(t.envelopes[A],nx(a,c(I),c(C)))}const h=tx(t.overall,nx(a,c(20),c(12e3))),f=c(1e4),p=new Float32Array(f);for(let A=0;A<f&&A<a.length;A++)p[A]=a[A];let g=0;if(t.previous){for(let A=0;A<p.length;A++){const I=p[A]-(t.previous[A]??0);I>0&&(g+=I)}g/=p.length}t.previous=p,t.flux.push(g),t.flux.length>lC&&t.flux.shift();const m=t.flux.reduce((A,I)=>A+I,0)/Math.max(1,t.flux.length);let y=0;for(const A of t.flux)y+=(A-m)**2;const v=Math.sqrt(y/Math.max(1,t.flux.length)),b=uC*(1.4-i*.8),_=m+v*b,w=t.flux.length>=20&&g>_&&g>.35&&s-t.lastBeat>cC;w&&(t.lastBeat=s);const E=_>0?Math.min(1,(g-_)/(_+.6)):0;t.onset=Math.max(t.onset*.9,w?Math.max(.35,E):0);const T=.55+i*.9,L=A=>Math.min(1,A*T);return{bass:L(u.bass),lowMid:L(u.lowMid),mid:L(u.mid),high:L(u.high),overall:L(h),beat:w,beatIntensity:w?Math.min(1,Math.max(.3,E)):0,onset:t.onset}}function dC({onAudioData:a,onStream:e,enabled:t,sensitivity:i}){const s=ue.useRef(null),o=ue.useRef(null),c=ue.useRef(null),u=ue.useRef(null),h=ue.useRef(null),f=ue.useRef(hC()),[p,g]=ue.useState(null),m=ue.useRef(e);m.current=e;const y=ue.useRef(i);return y.current=i,ue.useEffect(()=>{let v=!1;const b=()=>{var E;v=!0,h.current!==null&&(cancelAnimationFrame(h.current),h.current=null),u.current&&(u.current.getTracks().forEach(T=>T.stop()),u.current=null,(E=m.current)==null||E.call(m,null));const w=s.current;s.current=null,w&&w.state!=="closed"&&w.close(),o.current=null,c.current=null};if(!t){b(),a({bass:0,lowMid:0,mid:0,high:0,overall:0,beat:!1,beatIntensity:0,onset:0});return}const _=async()=>{var w;try{const E=await navigator.mediaDevices.getUserMedia({audio:!0});if(v){E.getTracks().forEach(F=>F.stop());return}u.current=E,(w=m.current)==null||w.call(m,E);const T=new AudioContext;s.current=T;const L=T.createAnalyser();L.fftSize=2048,L.smoothingTimeConstant=.55,o.current=L,T.createMediaStreamSource(E).connect(L);const I=L.frequencyBinCount,C=new Uint8Array(I);c.current=C,g(null),S()}catch(E){if(v)return;g("Microphone access denied"),console.error("Audio initialization error:",E)}},S=()=>{const w=o.current,E=c.current,T=s.current;!w||!E||!T||(w.getByteFrequencyData(E),a(fC(E,T.sampleRate,f.current,y.current,Date.now())),h.current=requestAnimationFrame(S))};return _(),b},[t,a]),p?V.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500/20 border border-red-500 px-4 py-2 rounded",children:V.jsx("p",{className:"text-red-500 font-mono",children:p})}):null}function Sd(a,e,t,i){const o={x:a,y:e+.08800000000000001},c=[{...o,z:0}];return[{angle:-1.05,length:.62},{angle:-.34,length:.95},{angle:-.1,length:1},{angle:.14,length:.92},{angle:.38,length:.76}].forEach((h,f)=>{const p=.25+Math.sin(t*.6+i+f)*.2;for(let g=1;g<=4;g++){const m=g/4,y=h.angle+p*m*.5,v=.16*h.length*m;c.push({x:o.x+Math.sin(y)*v,y:o.y-Math.cos(y)*v,z:0})}}),c}function av(a){const e=(t,i)=>{const s={x:i+Math.sin(a*.23+t)*.18,y:.5+Math.sin(a*.31+t*1.7)*.22};return{position:s,gesture:"open",fingerCount:3+Math.round(1.5+Math.sin(a*.11+t)*1.5),velocity:.25+Math.sin(a*.37+t)*.15,holdDuration:1,landmarks:Sd(s.x,s.y,a,t)}};return{left:e(0,.32),right:e(Math.PI,.68),distanceBetweenHands:.36}}const ov="vj-text",pC="n4thvj",nr="clips",xf="clip",mC=["video","mosaic"],Md="N4TH";function gC(){try{return localStorage.getItem(ov)??Md}catch{return Md}}function xC(a){try{localStorage.setItem(ov,a)}catch{}}function qd(){return new Promise((a,e)=>{const t=indexedDB.open(pC,1);t.onupgradeneeded=()=>{t.result.objectStoreNames.contains(nr)||t.result.createObjectStore(nr)},t.onsuccess=()=>a(t.result),t.onerror=()=>e(t.error)})}function ix(a){return a.type.startsWith("image/")?"image":"video"}async function lv(a,e,t){const i=await qd();await new Promise((s,o)=>{const c=i.transaction(nr,"readwrite");c.objectStore(nr).put({file:e,name:t},a),c.oncomplete=()=>s(),c.onerror=()=>o(c.error)}),i.close()}function vC(a,e){return new Promise(t=>{const i=a.get(e);i.onsuccess=()=>{const s=i.result;if(!s||typeof s!="object")return t(null);const{file:o,name:c}=s;if(!(o instanceof Blob))return t(null);t({file:o,name:typeof c=="string"?c:"clip"})},i.onerror=()=>t(null)})}async function _C(){try{const a=await qd(),e=await new Promise((c,u)=>{const h=a.transaction(nr,"readonly").objectStore(nr).getAllKeys();h.onsuccess=()=>c(h.result),h.onerror=()=>u(h.error)}),t={},s=a.transaction(nr,"readonly").objectStore(nr);for(const c of e){if(typeof c!="string")continue;const u=await vC(s,c);u&&(t[c]=u)}a.close();const o=t[xf];if(o){delete t[xf];for(const c of mC)t[c]||(t[c]=o,lv(c,o.file,o.name).catch(()=>{}));cv(xf).catch(()=>{})}return t}catch{return{}}}async function cv(a){try{const e=await qd();await new Promise(t=>{const i=e.transaction(nr,"readwrite");i.objectStore(nr).delete(a),i.oncomplete=()=>t(),i.onerror=()=>t()}),e.close()}catch{}}const yC=4,SC=14,rx=45,MC=480,wC=300,bC=["#ffffff","#d4d4d4","#ffffff","#a3a3a3"],EC={"2D":"text-cyan-300 border-cyan-400/30 bg-cyan-400/10","3D":"text-violet-300 border-violet-400/30 bg-violet-400/10",TD:"text-emerald-300 border-emerald-400/30 bg-emerald-400/10"},sx=Object.values(fs),TC=["2D","3D","TD"];function CC({set:a,onSetChange:e,onStart:t,text:i,onTextChange:s,clips:o,onClipChange:c}){const[u,h]=ue.useState("ALL"),[f,p]=ue.useState(null),g=ue.useRef(new Map),m=ue.useRef(new Set),y=ue.useRef(null),v=ue.useRef(a);v.current=a;const b=ue.useRef({text:i,clips:o});b.current={text:i,clips:o};const _=u==="ALL"?sx:sx.filter(A=>A.category===u),S=ue.useCallback(A=>{const I=v.current;if(I.indexOf(A)!==-1){e(I.filter(F=>F!==A));return}I.length>=ks||e([...I,A])},[e]),w=ue.useCallback((A,I)=>{const C=v.current.filter(D=>D!==A),F=Math.min(I,C.length);if(F>=ks)return;const z=[...C];z.splice(F,0,A),e(z.slice(0,ks))},[e]);ue.useEffect(()=>{const A=I=>{if(I.ctrlKey||I.metaKey||I.altKey)return;if(I.key==="Enter"&&v.current.length>0){t();return}if(!f)return;const C=vf(I.key);C!==-1&&(I.preventDefault(),w(f,C))};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[f,w,t]),ue.useEffect(()=>{y.current=new IntersectionObserver(C=>{for(const F of C){const z=F.target.getAttribute("data-pattern");z&&(F.isIntersecting?m.current.add(z):m.current.delete(z))}},{rootMargin:"250px 0px"});for(const C of g.current.values())y.current.observe(C.canvas);let A=0;const I=()=>{var H,ie,J,G,$,K,W,re;if(A=requestAnimationFrame(I),document.hidden)return;const C=av(Date.now()/1e3);let F=0,z=0;const D=[...g.current].sort(([,ne],[,O])=>{const q=ne.frames<rx?0:1,ve=O.frames<rx?0:1;return q-ve});for(const[ne,O]of D){const q=fs[ne].category!=="2D",ve=q?F<yC:z<SC;if(m.current.has(ne)&&ve&&!O.failed){if(!O.renderer)try{O.renderer=rv(ne,O.canvas,O.ctx,null)}catch{O.failed=!0;continue}try{(ie=(H=O.renderer).setText)==null||ie.call(H,b.current.text);const de=b.current.clips[ne];(G=(J=O.renderer).setClipUrl)==null||G.call(J,(de==null?void 0:de.url)??null,de==null?void 0:de.kind),O.renderer.render(C,bC,void 0,"contrast")}catch{O.failed=!0,(K=($=O.renderer).destroy)==null||K.call($),O.renderer=null;continue}O.frames++,q?F++:z++}else O.renderer&&((re=(W=O.renderer).destroy)==null||re.call(W),O.renderer=null)}};return A=requestAnimationFrame(I),()=>{var C,F,z;cancelAnimationFrame(A),(C=y.current)==null||C.disconnect();for(const D of g.current.values())(z=(F=D.renderer)==null?void 0:F.destroy)==null||z.call(F);g.current.clear()}},[]);const E=ue.useRef(new Map),T=A=>{let I=E.current.get(A);return I||(I=C=>L(A,C),E.current.set(A,I)),I},L=ue.useCallback((A,I)=>{var F,z,D;if(!I){const H=g.current.get(A);(z=(F=H==null?void 0:H.renderer)==null?void 0:F.destroy)==null||z.call(F),g.current.delete(A),m.current.delete(A);return}if(g.current.has(A))return;I.width=MC,I.height=wC;const C=I.getContext("2d");C&&(g.current.set(A,{canvas:I,ctx:C,renderer:null,frames:0}),(D=y.current)==null||D.observe(I))},[]);return V.jsxs("div",{className:"min-h-screen w-full bg-[#07070a] text-white font-mono",children:[V.jsx("div",{"aria-hidden":!0,className:"pointer-events-none fixed inset-0 opacity-70",style:{background:"radial-gradient(60rem 40rem at 50% -10%, rgba(99,102,241,0.18), transparent 70%),radial-gradient(40rem 30rem at 85% 15%, rgba(217,70,239,0.10), transparent 70%)"}}),V.jsxs("div",{className:"relative mx-auto max-w-[1500px] px-6 pb-40 pt-14",children:[V.jsx("header",{className:"mb-10",children:V.jsxs("div",{className:"flex flex-wrap items-end justify-between gap-6",children:[V.jsxs("div",{children:[V.jsx("h1",{className:"text-2xl font-semibold tracking-[-0.02em] sm:text-3xl",children:"<N4TH>"}),V.jsxs("p",{className:"mt-3 max-w-xl text-sm leading-relaxed text-white/45",children:["Every visual, running. Pick up to ",ks," and they become your keyboard — click to add, or hover one and press the number you want it on."]})]}),V.jsx("nav",{className:"flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] p-1.5",children:["ALL",...TC].map(A=>V.jsx("button",{onClick:()=>h(A),className:`rounded-full px-4 py-1.5 text-[11px] tracking-wider transition-all ${u===A?"bg-white text-black":"text-white/45 hover:bg-white/5 hover:text-white/80"}`,children:A},A))})]})}),V.jsx("div",{className:"grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:_.map(A=>{var D;const I=a.indexOf(A.pattern),C=I!==-1,F=a.length>=ks&&!C,z=A.pattern==="text"?"text":A.pattern==="video"||A.pattern==="mosaic"?"file":null;return V.jsxs("div",{onMouseEnter:()=>p(A.pattern),onMouseLeave:()=>p(H=>H===A.pattern?null:H),className:`group relative overflow-hidden rounded-2xl border text-left transition-all duration-200 ${C?"border-white/70 bg-white/[0.06] shadow-[0_0_0_1px_rgba(255,255,255,0.35),0_18px_50px_-20px_rgba(255,255,255,0.35)]":F?"border-white/5 opacity-35":"border-white/10 bg-white/[0.02] hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.05]"}`,children:[V.jsxs("button",{onClick:()=>S(A.pattern),disabled:F,title:F?"The set is full — take one off first":`${A.description}${C?"":" · click to add"}`,className:`block w-full text-left ${F?"cursor-not-allowed":""}`,children:[V.jsxs("div",{className:"relative aspect-[16/10] w-full overflow-hidden bg-black",children:[V.jsx("canvas",{"data-pattern":A.pattern,ref:T(A.pattern),className:"h-full w-full object-cover"}),V.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/85 to-transparent"}),C&&V.jsx("div",{className:"absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-base font-semibold text-black shadow-lg",children:Wo(I)})]}),V.jsxs("div",{className:"flex items-center justify-between gap-3 px-4 pb-3 pt-3",children:[V.jsxs("div",{className:"min-w-0",children:[V.jsx("div",{className:"truncate text-[13px] tracking-wide text-white/90",children:A.name}),V.jsx("div",{className:"mt-0.5 truncate text-[10px] text-white/35",children:A.description})]}),V.jsx("span",{className:`shrink-0 rounded border px-1.5 py-0.5 text-[9px] tracking-widest ${EC[A.category]}`,children:A.category})]})]}),z==="text"&&V.jsx("div",{className:"px-4 pb-4",children:V.jsx("input",{value:i,onChange:H=>s(H.target.value),onKeyDown:H=>H.stopPropagation(),placeholder:Md,maxLength:48,"aria-label":"Words for Kinetic Type",className:"w-full rounded-lg border border-white/15 bg-black/60 px-3 py-2 text-[12px] tracking-wide text-white placeholder:text-white/25 focus:border-white/45 focus:outline-none"})}),z==="file"&&V.jsxs("div",{className:"flex items-center gap-2 px-4 pb-4",children:[V.jsxs("label",{className:"cursor-pointer rounded-lg border border-white/15 bg-black/60 px-3 py-2 text-[11px] tracking-wider text-white/75 transition-colors hover:border-white/45 hover:text-white",children:[o[A.pattern]?"REPLACE":"UPLOAD",V.jsx("input",{type:"file",accept:"video/*,image/*",className:"hidden",onChange:H=>{var J;const ie=(J=H.target.files)==null?void 0:J[0];ie&&c(A.pattern,ie),H.target.value=""}})]}),V.jsx("span",{className:"min-w-0 flex-1 truncate text-[10px] text-white/35",children:((D=o[A.pattern])==null?void 0:D.name)??"no file yet"}),o[A.pattern]&&V.jsx("button",{onClick:()=>c(A.pattern,null),title:"Remove this visual's file",className:"shrink-0 px-1 text-white/25 transition-colors hover:text-white/80",children:"×"})]})]},A.pattern)})})]}),V.jsx("footer",{className:"fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/80 backdrop-blur-xl",children:V.jsxs("div",{className:"mx-auto flex max-w-[1500px] flex-wrap items-center gap-4 px-6 py-4",children:[V.jsxs("div",{className:"flex min-w-0 flex-1 flex-wrap items-center gap-2",children:[V.jsxs("span",{className:"mr-1 text-[10px] tracking-widest text-white/35",children:["SET ",a.length,"/",ks]}),a.length===0&&V.jsx("span",{className:"text-[11px] text-white/30",children:"Nothing chosen yet — pick a visual to start building the row."}),a.map((A,I)=>V.jsxs("button",{onClick:()=>S(A),title:"Take off the set",className:"group flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] py-1 pl-1 pr-3 transition-all hover:border-white/40 hover:bg-white/10",children:[V.jsx("span",{className:"flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-black",children:Wo(I)}),V.jsx("span",{className:"text-[11px] text-white/80",children:fs[A].name}),V.jsx("span",{className:"text-white/25 transition-colors group-hover:text-white/70",children:"×"})]},A))]}),V.jsxs("div",{className:"flex shrink-0 items-center gap-3",children:[a.length>0&&V.jsx("button",{onClick:()=>e([]),className:"rounded-full px-3 py-2 text-[11px] tracking-wider text-white/40 transition-colors hover:text-white/80",children:"CLEAR"}),V.jsx("button",{onClick:t,disabled:a.length===0,className:`rounded-full px-7 py-3 text-[12px] font-semibold tracking-[0.18em] transition-all ${a.length===0?"cursor-not-allowed bg-white/10 text-white/25":"bg-white text-black hover:scale-[1.03] hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.6)]"}`,children:"START SET →"})]})]})})]})}function AC(a,e){const t=Math.max(0,Math.ceil(-Math.log10(e)));return a.toFixed(Math.min(t,4))}function RC({spec:a,value:e,isDefault:t,inert:i,onChange:s,onReset:o}){var u;const c=(e-a.min)/(a.max-a.min)*100;return V.jsxs("div",{className:`group ${i?"opacity-40":""}`,title:i?`Does nothing until ${a.needs} is above zero`:void 0,children:[V.jsxs("div",{className:"flex justify-between items-baseline text-[9px] leading-tight",children:[V.jsxs("button",{onClick:o,title:t?a.hint??a.path:`${a.path} — click to reset`,className:`text-left transition-colors ${t?"text-white/50 hover:text-white/70":"text-cyan-300 hover:text-cyan-200"}`,children:[a.label,!t&&V.jsx("span",{className:"ml-1 opacity-60",children:"•"})]}),V.jsx("span",{className:`text-white ${a.labels?"":"tabular-nums"}`,children:((u=a.labels)==null?void 0:u[Math.round(e)])??AC(e,a.step)})]}),V.jsx("input",{type:"range",className:"vj-slider w-full h-1 mt-1 mb-2 rounded-full appearance-none cursor-pointer focus:outline-none",min:a.min,max:a.max,step:a.step,value:e,onChange:h=>s(parseFloat(h.target.value)),style:{backgroundImage:`linear-gradient(to right, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.85) ${c}%, rgba(255,255,255,0.2) ${c}%)`}})]})}function PC({sections:a,header:e}){var f;const[t,i]=ue.useState(!1),[s,o]=ue.useState((f=a[0])==null?void 0:f.key),c=a.filter(p=>p.entry.groups.length>0);if(c.length===0)return null;const u=c.find(p=>p.key===s)??c[0],h=u.entry.groups.some(p=>p.params.some(g=>u.values[g.path]!==void 0));return V.jsx("div",{className:"absolute left-6 top-24 bottom-32 z-50 w-[168px] flex flex-col font-mono pointer-events-auto",children:V.jsxs("div",{className:"bg-black/70 backdrop-blur-sm rounded-xl border border-white/20 flex flex-col min-h-0",children:[e&&V.jsx("div",{className:"border-b border-white/10",children:e}),V.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-2 border-b border-white/10",children:[V.jsx("button",{onClick:()=>i(p=>!p),className:"text-white/60 hover:text-white transition-colors shrink-0",title:t?"Show parameters":"Hide parameters",children:V.jsx(A_,{className:"w-3.5 h-3.5"})}),V.jsx("div",{className:"flex gap-1 flex-1 min-w-0",children:c.map(p=>{const g=p.entry.groups.some(m=>m.params.some(y=>p.values[y.path]!==void 0));return V.jsxs("button",{onClick:()=>{o(p.key),i(!1)},className:`px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider transition-all ${p.key===u.key?"bg-white/20 text-white":"text-white/40 hover:text-white/70"}`,children:[p.label,g&&V.jsx("span",{className:"ml-1 text-cyan-300",children:"•"})]},p.key)})}),h&&V.jsx("button",{onClick:()=>u.onReset(),title:`Reset every ${u.label} parameter`,className:"text-white/40 hover:text-white transition-colors shrink-0",children:V.jsx(T_,{className:"w-3 h-3"})})]}),!t&&V.jsx("div",{className:"overflow-y-auto px-3 py-2 min-h-0",children:u.entry.groups.map(p=>{if(p.visibleWhen){const y=u.values[p.visibleWhen.path]??ko(u.entry.config,p.visibleWhen.path)??0;if(!p.visibleWhen.equals.includes(Math.round(y)))return null}const m=(p.togglePath?u.values[p.togglePath]??ko(u.entry.config,p.togglePath)??1:1)>=.5;return V.jsxs("div",{className:"mb-3 last:mb-1",children:[p.togglePath?V.jsxs("button",{onClick:()=>u.onChange(p.togglePath,m?0:1),title:m?`Bypass ${p.name}`:`Enable ${p.name}`,className:"flex items-center gap-1.5 w-full mb-1.5 group/head",children:[V.jsx("span",{className:`w-1.5 h-1.5 rounded-full transition-colors ${m?"bg-cyan-300":"bg-white/20"}`}),V.jsx("span",{className:`text-[8px] tracking-widest uppercase transition-colors ${m?"text-white/55 group-hover/head:text-white/80":"text-white/25"}`,children:p.name})]}):V.jsx("div",{className:"text-[8px] text-white/35 tracking-widest uppercase mb-1.5",children:p.name}),V.jsx("div",{className:m?"":"opacity-35 pointer-events-none",children:p.params.map(y=>{const v=ko(u.entry.config,y.path);if(v===void 0)return null;const b=u.values[y.path]??v,_=y.needs?u.values[y.needs]??ko(u.entry.config,y.needs)??0:1;return V.jsx(RC,{spec:y,inert:!(_>0),value:b,isDefault:u.values[y.path]===void 0,onChange:S=>u.onChange(y.path,S),onReset:()=>u.onReset(y.path)},y.path)})})]},p.name)})})]})})}function LC({layers:a,selectedLayer:e,set:t,onSelect:i,onOpacityChange:s,onRemove:o}){return V.jsxs("div",{className:"px-3 pt-2 pb-1",children:[V.jsxs("div",{className:"mb-1.5 flex items-baseline justify-between",children:[V.jsx("span",{className:"text-[8px] uppercase tracking-widest text-white/35",children:"Layers"}),V.jsx("span",{className:"text-[8px] text-white/25",children:"L cycles · [ ] fade"})]}),a.map((c,u)=>{const h=u===e,f=t.indexOf(c.pattern);return V.jsxs("div",{className:`mb-1 rounded px-1.5 py-1 transition-colors ${h?"bg-white/[0.11]":"hover:bg-white/[0.05]"}`,children:[V.jsxs("div",{className:"flex items-center gap-1.5",children:[V.jsxs("button",{onClick:()=>i(u),title:h?"Editing this layer":"Edit this layer",className:"flex min-w-0 flex-1 items-center gap-1.5 text-left",children:[V.jsx("span",{className:`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[8px] ${h?"bg-white text-black":"bg-white/15 text-white/60"}`,children:f===-1?"·":Wo(f)}),V.jsx("span",{className:`truncate text-[9px] ${h?"text-white":"text-white/55"}`,children:fs[c.pattern].short})]}),V.jsxs("span",{className:"shrink-0 text-[8px] tabular-nums text-white/45",children:[Math.round(c.opacity*100),"%"]}),a.length>1&&V.jsx("button",{onClick:()=>o(u),title:"Take this layer off",className:"shrink-0 px-0.5 text-[10px] leading-none text-white/25 transition-colors hover:text-white/80",children:"×"})]}),V.jsx("input",{type:"range","aria-label":`${fs[c.pattern].name} opacity`,className:"vj-slider mt-1 h-1 w-full cursor-pointer appearance-none rounded-full focus:outline-none",min:0,max:1,step:.01,value:c.opacity,onChange:p=>s(u,parseFloat(p.target.value)),onPointerDown:()=>i(u),style:{background:`linear-gradient(to right, rgba(255,255,255,${h?.85:.4}) ${c.opacity*100}%, rgba(255,255,255,0.12) ${c.opacity*100}%)`}})]},`${c.pattern}-${u}`)})]})}const ax={geometric:{config:yf,groups:[{name:"Shape",params:[{path:"polygon.baseSize",label:"Size",min:20,max:400,step:5},{path:"polygon.strokeWidth",label:"Stroke",min:.5,max:20,step:.5},{path:"complexity.baseSides",label:"Sides",min:3,max:12,step:1,hint:"with no hands"},{path:"complexity.maxSides",label:"Max sides",min:3,max:24,step:1}]},{name:"Layers",params:[{path:"layers.count",label:"Count",min:1,max:20,step:1},{path:"layers.sizeGrowth",label:"Growth",min:0,max:1.5,step:.01},{path:"layers.rotationOffset",label:"Twist",min:0,max:2,step:.01},{path:"layers.baseOpacity",label:"Opacity",min:0,max:1,step:.01},{path:"layers.opacityFade",label:"Fade",min:0,max:.3,step:.005}]},{name:"Motion",params:[{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"},{path:"animation.baseRotationMultiplier",label:"Spin",min:0,max:.1,step:.001}]},{name:"Bridge & clap",params:[{path:"bridge.thickness",label:"Bridge",min:0,max:30,step:.5},{path:"bridge.waveAmplitude",label:"Bridge wave",min:0,max:150,step:1},{path:"vibration.shakeAmountX",label:"Shake X",min:0,max:200,step:1},{path:"vibration.shakeAmountY",label:"Shake Y",min:0,max:200,step:1},{path:"vibration.flashDuration",label:"Flash",min:0,max:3,step:.05}]}]},particles:{config:_f,groups:[{name:"Emission",params:[{path:"limits.maxParticles",label:"Max",min:5,max:500,step:5},{path:"emission.openHandRate",label:"Open hand",min:0,max:1,step:.01},{path:"emission.closedHandRate",label:"Closed hand",min:0,max:1,step:.01},{path:"controls.fadeOutRate",label:"Fade out",min:.005,max:.5,step:.005}]},{name:"Motion",params:[{path:"physics.initialVelocity",label:"Velocity",min:.5,max:20,step:.5},{path:"physics.damping",label:"Damping",min:.8,max:1,step:.005,hint:"1 = never slows"},{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"}]},{name:"Size",params:[{path:"size.baseRange.0",label:"Radius min",min:2,max:300,step:2},{path:"size.baseRange.1",label:"Radius max",min:2,max:400,step:2},{path:"size.growthMultiplier",label:"Grow",min:.2,max:6,step:.1},{path:"size.shrinkMultiplier",label:"Shrink",min:.05,max:2,step:.05},{path:"size.transitionSpeed",label:"Ease",min:.02,max:1,step:.01}]},{name:"Glow",params:[{path:"glow.layers",label:"Layers",min:0,max:8,step:1},{path:"glow.expansion",label:"Spread",min:0,max:2,step:.05},{path:"glow.layerFade",label:"Fade",min:0,max:1,step:.01}]},{name:"Clap",params:[{path:"explosion.particleCount",label:"Burst",min:0,max:300,step:5},{path:"explosion.forceMultiplier",label:"Force",min:0,max:50,step:1},{path:"explosion.sizeMultiplier",label:"Size",min:.2,max:6,step:.1}]}]},ripple:{config:gd,groups:[{name:"Hand",params:[{path:"stamp.radius",label:"Size",min:.01,max:.3,step:.005},{path:"stamp.strength",label:"Weight",min:.05,max:1,step:.01},{path:"stamp.fingerScale",label:"Fingers",min:0,max:1,step:.05,hint:"0 = palm only"},{path:"stamp.audioSwell",label:"Bass swell",min:0,max:3,step:.05}]},{name:"Trail",params:[{path:"field.decay",label:"Length",min:.8,max:.998,step:.002,hint:"higher = lingers"},{path:"field.spread",label:"Spread",min:.2,max:8,step:.1}]},{name:"Water",params:[{path:"refraction.amount",label:"Refraction",min:0,max:.4,step:.005},{path:"refraction.dispersion",label:"Dispersion",min:0,max:1.5,step:.05}]},{name:"Gloss",params:[{path:"highlight.amount",label:"Amount",min:0,max:3,step:.05},{path:"highlight.sharpness",label:"Sharpness",min:.5,max:20,step:.5},{path:"highlight.tint",label:"Tint",min:0,max:1,step:.05,hint:"palette into the gloss"}]}]},text:{config:xd,groups:[{name:"Movement",params:[{path:"mode",label:"Mode",min:0,max:4,step:1,labels:["Mask","Radial","Wave","Depth","Scatter"],hint:"each mode brings its own controls"},{path:"motion.handInfluence",label:"Hands",min:0,max:3,step:.05},{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"}]},{name:"Type",params:[{path:"type.fit",label:"Fit",min:.2,max:1.6,step:.02,hint:"word width in its cell"},{path:"type.weight",label:"Weight",min:100,max:900,step:100},{path:"type.tracking",label:"Tracking",min:-.1,max:1.2,step:.01},{path:"type.outline",label:"Outline",min:0,max:1,step:1,hint:"filled or hollow"},{path:"type.strokeWidth",label:"Stroke",min:.5,max:8,step:.5}]},{name:"Grid",visibleWhen:{path:"mode",equals:[0,1,2]},params:[{path:"grid.columns",label:"Columns",min:1,max:40,step:1},{path:"grid.rows",label:"Rows",min:1,max:60,step:1},{path:"grid.spread",label:"Spread",min:.2,max:3,step:.02},{path:"grid.breathe",label:"Breathe",min:0,max:1,step:.02},{path:"grid.breatheSpeed",label:"Breath speed",min:0,max:3,step:.05}]},{name:"Mask",visibleWhen:{path:"mode",equals:[0]},params:[{path:"mask.reach",label:"Reach",min:.02,max:.8,step:.01,hint:"hand size"},{path:"mask.threshold",label:"Threshold",min:.02,max:2,step:.02,hint:"lower fills more"},{path:"mask.softness",label:"Softness",min:0,max:1,step:.02,hint:"0 = hard cut"},{path:"mask.invert",label:"Invert",min:0,max:1,step:1}]},{name:"Radial",visibleWhen:{path:"mode",equals:[1]},params:[{path:"radial.strength",label:"Warp",min:-2,max:3,step:.05,hint:"negative pinches"},{path:"radial.power",label:"Bite",min:.4,max:5,step:.1},{path:"radial.pulse",label:"Pulse",min:0,max:2,step:.05},{path:"radial.pulseSpeed",label:"Pulse speed",min:0,max:3,step:.05}]},{name:"Wave",visibleWhen:{path:"mode",equals:[2]},params:[{path:"wave.amplitude",label:"Amount",min:0,max:.6,step:.01},{path:"wave.frequency",label:"Waves",min:.2,max:8,step:.1},{path:"wave.speed",label:"Speed",min:-4,max:4,step:.05},{path:"wave.scaleWave",label:"Swell",min:0,max:1,step:.02}]},{name:"Depth",visibleWhen:{path:"mode",equals:[3]},params:[{path:"depth.speed",label:"Fly",min:-2,max:2,step:.02},{path:"depth.spread",label:"Open",min:0,max:4,step:.05,hint:"tracking with distance"},{path:"depth.curve",label:"Curve",min:.5,max:4,step:.05},{path:"depth.steps",label:"Rows",min:2,max:40,step:1},{path:"depth.size",label:"Size",min:.02,max:.5,step:.005},{path:"depth.horizon",label:"Horizon",min:-.2,max:.8,step:.01}]},{name:"Scatter",visibleWhen:{path:"mode",equals:[4]},params:[{path:"scatter.amount",label:"Spread",min:0,max:1.5,step:.02,hint:"0 = readable"},{path:"scatter.spiral",label:"Spiral",min:0,max:1,step:1},{path:"scatter.stagger",label:"Stagger",min:0,max:2,step:.05},{path:"scatter.drift",label:"Drift",min:0,max:3,step:.05},{path:"scatter.size",label:"Letter size",min:.02,max:.5,step:.005}]},{name:"Colour",params:[{path:"color.rainbow",label:"Rainbow",min:0,max:1,step:1,hint:"ignores the palette"},{path:"color.step",label:"Hue step",min:0,max:120,step:1},{path:"color.cycleSpeed",label:"Cycle",min:0,max:3,step:.05}]},{name:"Audio",params:[{path:"audio.bassScale",label:"Bass swell",min:0,max:2,step:.05},{path:"audio.beatKick",label:"Beat kick",min:0,max:3,step:.05}]}]},video:{config:vd,groups:[{name:"Frame",params:[{path:"frame.zoom",label:"Zoom",min:.2,max:4,step:.05},{path:"frame.spreadZoom",label:"Spread zoom",min:0,max:3,step:.05},{path:"frame.handDrift",label:"Hand drift",min:0,max:.6,step:.01},{path:"frame.mirror",label:"Mirror",min:0,max:1,step:1}]},{name:"Slice",params:[{path:"slice.count",label:"Bands",min:1,max:60,step:1,hint:"1 = whole frame"},{path:"slice.offset",label:"Shear",min:0,max:.4,step:.005},{path:"slice.speed",label:"Speed",min:0,max:5,step:.05},{path:"slice.beatKick",label:"Beat kick",min:1,max:6,step:.1}]},{name:"Look",params:[{path:"look.tint",label:"Tint",min:0,max:1,step:.02,hint:"palette over the clip"},{path:"look.gain",label:"Gain",min:1,max:3,step:.05},{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"}]}]},chrome:{config:yd,groups:[{name:"Form",params:[{path:"form.lobes",label:"Lobes",min:1,max:7,step:1},{path:"form.spread",label:"Spread",min:.2,max:2.4,step:.05,hint:"wider pulls tendrils out"},{path:"form.size",label:"Mass",min:.2,max:1.2,step:.02},{path:"form.blend",label:"Melt",min:.05,max:1.4,step:.05,hint:"higher closes the holes"},{path:"form.ripple",label:"Ripple",min:0,max:.4,step:.005},{path:"form.rippleScale",label:"Ripple scale",min:.5,max:9,step:.1}]},{name:"Motion",params:[{path:"motion.drift",label:"Drift",min:0,max:1.2,step:.01},{path:"motion.churn",label:"Churn",min:0,max:2,step:.02},{path:"motion.spin",label:"Spin",min:-.6,max:.6,step:.01}]},{name:"Chrome",params:[{path:"material.dispersion",label:"Rainbow",min:0,max:2.5,step:.05},{path:"material.split",label:"Spread",min:0,max:.3,step:.005,hint:"width of the rainbow"},{path:"material.rimTightness",label:"Rim",min:.5,max:8,step:.1,hint:"higher = thinner band"},{path:"material.silver",label:"Silver",min:0,max:1.5,step:.02},{path:"material.facing",label:"Face-on",min:0,max:.6,step:.01,hint:"low keeps the middles dark"},{path:"material.polish",label:"Polish",min:4,max:260,step:2}]},{name:"Light",params:[{path:"light.keyX",label:"Key X",min:-1,max:1,step:.02},{path:"light.keyY",label:"Key Y",min:-1,max:1,step:.02},{path:"light.key",label:"Key",min:0,max:3,step:.05},{path:"light.fill",label:"Fill",min:0,max:1.5,step:.02},{path:"light.ambient",label:"Ambient",min:0,max:.3,step:.005}]},{name:"Hands and sound",params:[{path:"hands.push",label:"Hand push",min:0,max:2,step:.05},{path:"hands.spread",label:"Hand spread",min:0,max:1.5,step:.05},{path:"hands.kick",label:"Beat throw",min:0,max:2,step:.05},{path:"look.gain",label:"Exposure",min:.2,max:2.5,step:.05},{path:"look.grain",label:"Grain",min:0,max:.2,step:.005}]}]},mosaic:{config:_d,groups:[{name:"Mark",params:[{path:"mode",label:"Mode",min:0,max:3,step:1,labels:["Letters","Dots","Blocks","Bars"]},{path:"grid.columns",label:"Detail",min:8,max:140,step:1,hint:"cells across"},{path:"grid.fill",label:"Weight",min:.2,max:1.8,step:.05},{path:"grid.cellAspect",label:"Cell shape",min:.4,max:2.5,step:.05,hint:"above 1 = taller"},{path:"grid.spreadDensity",label:"Spread coarsens",min:0,max:1.5,step:.05}]},{name:"Image",params:[{path:"tone.contrast",label:"Contrast",min:.2,max:4,step:.05},{path:"tone.brightness",label:"Brightness",min:-.5,max:.5,step:.02},{path:"tone.floor",label:"Cut",min:0,max:.9,step:.01,hint:"darker cells draw nothing"},{path:"tone.invert",label:"Invert",min:0,max:1,step:1}]},{name:"Letters",visibleWhen:{path:"mode",equals:[0]},params:[{path:"letters.ramp",label:"Glyphs",min:0,max:1,step:1,labels:["Density ramp","Your word"]},{path:"letters.weight",label:"Weight",min:100,max:900,step:100},{path:"letters.outline",label:"Hollow",min:0,max:1,step:1}]},{name:"Shape",visibleWhen:{path:"mode",equals:[1,2,3]},params:[{path:"shape.minimum",label:"Floor",min:0,max:.6,step:.01,hint:"size of the faintest mark"},{path:"shape.rotate",label:"Turn",min:0,max:1,step:.02,hint:"blocks towards diamonds"},{path:"shape.anchor",label:"From the floor",min:0,max:1,step:1,hint:"bars only"}]},{name:"Warp",params:[{path:"warp.handPush",label:"Hand push",min:0,max:.3,step:.005},{path:"warp.ripple",label:"Ripple",min:0,max:2,step:.05},{path:"warp.rippleSpeed",label:"Ripple speed",min:0,max:4,step:.05}]},{name:"Colour",params:[{path:"colour.fromSource",label:"Own colour",min:0,max:1,step:.02,hint:"0 = your palette"},{path:"colour.spread",label:"Palette run",min:1,max:40,step:1},{path:"audio.bassScale",label:"Bass swell",min:0,max:2,step:.05},{path:"audio.beatKick",label:"Beat kick",min:0,max:1.5,step:.05},{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"}]}]},digitalblocks:{config:md,groups:[{name:"Hands",params:[{path:"chaos.range",label:"Ceiling",min:.05,max:1,step:.01,hint:"how wild it can get"},{path:"chaos.openness",label:"Open hand",min:0,max:1,step:.02},{path:"chaos.velocity",label:"Hand speed",min:0,max:1,step:.02},{path:"chaos.clap",label:"Clap",min:0,max:1,step:.02},{path:"chaos.ease",label:"Ease",min:.005,max:.3,step:.005,hint:"lower = calmer"},{path:"chaos.idle",label:"Idle",min:0,max:.5,step:.01}]},{name:"Motion",params:[{path:"speed.base",label:"Drift",min:0,max:.4,step:.005},{path:"speed.variation",label:"Spread",min:0,max:.5,step:.005},{path:"speed.chaos",label:"Chaos speed",min:0,max:1.5,step:.02}]},{name:"Grid",params:[{path:"strips.base",label:"Columns",min:2,max:60,step:1},{path:"strips.chaos",label:"Columns +",min:0,max:60,step:1},{path:"strips.blocks",label:"Blocks",min:1,max:40,step:1},{path:"strips.blocksChaos",label:"Blocks +",min:0,max:40,step:1}]}]},waves:{config:Sf,groups:[{name:"Wave",params:[{path:"waveCount.active",label:"Count",min:1,max:24,step:1,hint:"hands present"},{path:"waveCount.idle",label:"Count idle",min:1,max:24,step:1},{path:"wave.baseAmplitude",label:"Amplitude",min:0,max:400,step:5},{path:"wave.maxAmplitude",label:"Max amp",min:10,max:800,step:10},{path:"wave.baseFrequency",label:"Frequency",min:.001,max:.1,step:.001},{path:"wave.maxFrequency",label:"Max freq",min:.001,max:.2,step:.001}]},{name:"Line",params:[{path:"wave.segments",label:"Segments",min:20,max:600,step:10,hint:"lower = angular"},{path:"wave.lineThickness",label:"Thickness",min:.5,max:20,step:.5},{path:"visual.fillOpacity",label:"Fill",min:0,max:255,step:1}]},{name:"Layers",params:[{path:"layers.primarySpeed",label:"Speed 1",min:0,max:10,step:.1},{path:"layers.secondarySpeed",label:"Speed 2",min:0,max:10,step:.1},{path:"layers.tertiarySpeed",label:"Speed 3",min:0,max:10,step:.1},{path:"layers.secondaryAmplitude",label:"Amp 2",min:0,max:2,step:.01},{path:"layers.tertiaryAmplitude",label:"Amp 3",min:0,max:2,step:.01},{path:"fingerCountSpeed.maxSpeed",label:"Speed cap",min:.1,max:10,step:.1}]},{name:"Hands & focus",params:[{path:"handInfluence.strength",label:"Pull",min:0,max:3,step:.05},{path:"handInfluence.radius",label:"Reach",min:20,max:800,step:10},{path:"focalPoint.baseSize",label:"Dot size",min:0,max:100,step:1},{path:"focalPoint.pulseSpeed",label:"Pulse",min:0,max:20,step:.5},{path:"focalPoint.pulseAmount",label:"Pulse depth",min:0,max:1,step:.01},{path:"focalPoint.glowLayers",label:"Dot glow",min:0,max:10,step:1}]}]}},IC={config:$o,groups:[{name:"Transition",togglePath:"transition.enabled",params:[{path:"transition.duration",label:"Crossfade",min:.05,max:5,step:.05,hint:"seconds between visuals"}]},{name:"Colour",togglePath:"colour.enabled",params:[{path:"colour.mix",label:"Mix",min:0,max:1,step:.01,hint:"stage opacity"},{path:"colour.hue",label:"Hue",min:-3.14,max:3.14,step:.01,hint:"turns the whole frame"},{path:"colour.saturation",label:"Saturation",min:0,max:2,step:.01,hint:"1 = untouched"}]},{name:"Feedback",togglePath:"feedback.enabled",params:[{path:"feedback.mix",label:"Mix",min:0,max:1,step:.01,hint:"stage opacity"},{path:"feedback.amount",label:"Amount",min:0,max:.99,step:.01,hint:"0 = off"},{needs:"feedback.amount",path:"feedback.zoom",label:"Zoom",min:.9,max:1.1,step:.001,hint:">1 tunnels out"},{needs:"feedback.amount",path:"feedback.rotate",label:"Rotate",min:-.05,max:.05,step:5e-4},{needs:"feedback.amount",path:"feedback.offsetX",label:"Drift X",min:-.02,max:.02,step:5e-4},{needs:"feedback.amount",path:"feedback.offsetY",label:"Drift Y",min:-.02,max:.02,step:5e-4},{path:"feedback.hueShift",label:"Trail hue",min:-.2,max:.2,step:.002,hint:"ages the trail — needs Amount"}]},{name:"Displace",togglePath:"displace.enabled",params:[{path:"displace.mix",label:"Mix",min:0,max:1,step:.01,hint:"stage opacity"},{path:"displace.amount",label:"Amount",min:0,max:.3,step:.002},{path:"displace.scale",label:"Scale",min:.5,max:40,step:.5},{path:"displace.speed",label:"Speed",min:0,max:3,step:.02}]},{name:"Chromatic",togglePath:"rgbSplit.enabled",params:[{path:"rgbSplit.mix",label:"Mix",min:0,max:1,step:.01,hint:"stage opacity"},{path:"rgbSplit.amount",label:"RGB split",min:0,max:.1,step:.001}]},{name:"Kaleidoscope",togglePath:"kaleido.enabled",params:[{path:"kaleido.mix",label:"Mix",min:0,max:1,step:.01,hint:"stage opacity"},{path:"kaleido.segments",label:"Segments",min:0,max:24,step:1,hint:"<2 = off"},{path:"kaleido.spin",label:"Spin",min:-3.14,max:3.14,step:.01}]},{name:"Quantize",togglePath:"quantize.enabled",params:[{path:"quantize.mix",label:"Mix",min:0,max:1,step:.01,hint:"stage opacity"},{path:"quantize.pixel",label:"Pixel size",min:0,max:64,step:1,hint:"<=1 = off"},{path:"quantize.levels",label:"Colour steps",min:0,max:16,step:1,hint:"<2 = off"}]},{name:"Bloom",togglePath:"bloom.enabled",params:[{path:"bloom.mix",label:"Mix",min:0,max:1,step:.01,hint:"stage opacity"},{path:"bloom.amount",label:"Amount",min:0,max:3,step:.05},{path:"bloom.threshold",label:"Threshold",min:0,max:1,step:.01}]}]},uv=1,ox=0,lx=2;function NC(a){return Math.min(1,.06+a*.94)}function hv(a){return .55+a*.45}function cx(a,e,t){var h;const i=NC(t),s=hv(t),o=e?{x:.5+(e.position.x-.5)/s,y:.5+(e.position.y-.5)/s}:a.position,c=o.x+(a.position.x-o.x)*i,u=o.y+(a.position.y-o.y)*i;return{...a,position:{x:.5+(c-.5)*s,y:.5+(u-.5)*s},velocity:a.velocity===void 0?void 0:a.velocity*t,landmarks:(h=a.landmarks)==null?void 0:h.map(f=>({...f,x:.5+(f.x-.5)*s,y:.5+(f.y-.5)*s}))}}function FC(a,e,t){return t===uv?a:{...a,left:a.left?cx(a.left,(e==null?void 0:e.left)??null,t):null,right:a.right?cx(a.right,(e==null?void 0:e.right)??null,t):null,clapIntensity:a.clapIntensity===void 0?void 0:a.clapIntensity*t,distanceBetweenHands:a.distanceBetweenHands===void 0?void 0:.4+(a.distanceBetweenHands-.4)*hv(t)}}function Do(a,e,t){const i=e/100,s=t/100,o=(1-Math.abs(2*s-1))*i,c=o*(1-Math.abs(a/60%2-1)),u=s-o/2;let h=0,f=0,p=0;a<60?[h,f,p]=[o,c,0]:a<120?[h,f,p]=[c,o,0]:a<180?[h,f,p]=[0,o,c]:a<240?[h,f,p]=[0,c,o]:a<300?[h,f,p]=[c,0,o]:[h,f,p]=[o,0,c];const g=m=>Math.round((m+u)*255).toString(16).padStart(2,"0");return`#${g(h)}${g(f)}${g(p)}`}function UC(a,e,t){if(t==="grayscale")return["#FFFFFF","#000000","#FFFFFF","#000000"];if(t==="black")return[Do(a,e,50),"#FFFFFF",Do(a,e*.6,70),Do(a,e*.8,35)];const i=Do(a,e,50),s=Do((a+180)%360,e,50);return[i,s,i,s]}const DC=["video/mp4;codecs=avc1.42E01E,mp4a.40.2","video/mp4","video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"],kC=30,OC=12e6;function fv(){if(!(typeof MediaRecorder>"u")){for(const a of DC)if(MediaRecorder.isTypeSupported(a))return a}}function zC(){return typeof MediaRecorder<"u"&&typeof HTMLCanvasElement.prototype.captureStream=="function"&&fv()!==void 0}class BC{constructor(e){U(this,"sources");U(this,"frame",null);U(this,"ctx",null);U(this,"recorder",null);U(this,"chunks",[]);U(this,"raf",0);U(this,"startedAt",0);U(this,"format","");U(this,"draw",()=>{this.raf=requestAnimationFrame(this.draw);const{ctx:e,frame:t}=this;if(!e||!t)return;const i=this.sources.canvas();if(!i)return;e.fillStyle="#000",e.fillRect(0,0,t.width,t.height);const s=Math.min(t.width/i.width,t.height/i.height),o=i.width*s,c=i.height*s;try{e.drawImage(i,(t.width-o)/2,(t.height-c)/2,o,c)}catch{return}const u=this.sources.camera();u&&u.readyState>=2&&u.videoWidth>0&&this.drawCamera(e,t,u)});this.sources=e}get recording(){return this.recorder!==null&&this.recorder.state==="recording"}get elapsed(){return this.startedAt?(performance.now()-this.startedAt)/1e3:0}start(e){if(this.recording)return;const t=this.sources.canvas(),i=fv();if(!t||!i)return;this.format=i;const s=document.createElement("canvas");s.width=Math.max(2,t.width-t.width%2),s.height=Math.max(2,t.height-t.height%2);const o=s.getContext("2d",{alpha:!1});if(!o)return;this.frame=s,this.ctx=o;const c=s.captureStream(kC);if(e)for(const h of e.getAudioTracks())c.addTrack(h);const u=new MediaRecorder(c,{mimeType:i,videoBitsPerSecond:OC});this.chunks=[],u.ondataavailable=h=>{h.data.size>0&&this.chunks.push(h.data)},u.start(1e3),this.recorder=u,this.startedAt=performance.now(),this.draw()}stop(){const e=this.recorder;if(!e||e.state==="inactive")return Promise.resolve(null);const t=this.elapsed;return new Promise(i=>{e.onstop=()=>{cancelAnimationFrame(this.raf),this.raf=0,this.recorder=null,this.startedAt=0,this.frame=null,this.ctx=null;const s=new Blob(this.chunks,{type:this.format});this.chunks=[],i(s.size>0?{blob:s,extension:this.format.startsWith("video/mp4")?"mp4":"webm",seconds:t}:null)},e.stop()})}drawCamera(e,t,i){const s=Math.round(t.width*.014),o=Math.round(t.width*.17),c=Math.round(o*i.videoHeight/i.videoWidth),u=t.width-o-s,h=s,f=Math.round(o*.06);e.save(),e.beginPath(),typeof e.roundRect=="function"?e.roundRect(u,h,o,c,f):e.rect(u,h,o,c),e.clip(),e.translate(u+o,h),e.scale(-1,1),e.drawImage(i,0,0,o,c),e.restore(),e.save(),e.strokeStyle="rgba(255, 255, 255, 0.35)",e.lineWidth=Math.max(1,t.width*.001),e.beginPath(),typeof e.roundRect=="function"?e.roundRect(u,h,o,c,f):e.rect(u,h,o,c),e.stroke(),e.restore()}}function ux(a){const e=new Date().toISOString().slice(0,19).replace("T","-").replace(/:/g,""),t=URL.createObjectURL(a.blob),i=document.createElement("a");i.href=t,i.download=`n4thvj-${e}.${a.extension}`,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),6e4)}const HC=60,GC=`<!doctype html>
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
</html>`;class VC{constructor(e){U(this,"win",null);U(this,"stream",null);U(this,"onClose");U(this,"poll",0);this.onClose=e}get open(){return this.win!==null&&!this.win.closed}show(e){var i;if(this.open)return(i=this.win)==null||i.focus(),null;if(!e)return"The visuals are not running yet.";if(typeof e.captureStream!="function")return"This browser cannot send a canvas to a second window.";const t=window.open("","n4thvj-output","width=1280,height=720");return t?(t.document.open(),t.document.write(GC),t.document.close(),this.win=t,this.attach(e),this.poll=window.setInterval(()=>{this.win&&this.win.closed&&this.close()},500),null):"The browser blocked the window. Allow pop-ups for this page and try again."}attach(e){var s;const t=this.win;if(!t||t.closed||!e||typeof e.captureStream!="function")return;const i=t.document.getElementById("out");if(i){for(const o of((s=this.stream)==null?void 0:s.getTracks())??[])o.stop();this.stream=e.captureStream(HC),i.srcObject=this.stream,i.play().catch(()=>{})}}close(){var t;clearInterval(this.poll),this.poll=0;for(const i of((t=this.stream)==null?void 0:t.getTracks())??[])i.stop();this.stream=null;const e=this.win;this.win=null,e&&!e.closed&&e.close(),this.onClose()}}function ka(a,e,t){try{const i=localStorage.getItem(a);if(i===null)return e;const s=JSON.parse(i);return t(s)?s:e}catch{return e}}function Ia(a,e){try{localStorage.setItem(a,JSON.stringify(e))}catch{}}const wd=(a,e)=>t=>typeof t=="number"&&Number.isFinite(t)&&t>=a&&t<=e;function hx(){return{hue:ka("vj-hue",245,wd(0,360)),saturation:ka("vj-saturation",100,wd(0,100)),colorMode:ka("vj-color-mode","contrast",a=>a==="black"||a==="contrast"||a==="grayscale")}}function WC(){const[a,e]=ue.useState(()=>[{pattern:"geometric",opacity:1,...hx()}]),[t,i]=ue.useState(0),s=(a[t]??a[0]).pattern,o=ue.useCallback(Me=>{const Fe=a.findIndex(Ue=>Ue.pattern===Me);if(Fe!==-1){i(Fe);return}e(Ue=>Ue.map((ut,ht)=>ht===t?{...ut,pattern:Me}:ut))},[a,t]),c=ue.useCallback(Me=>{const Fe=a.findIndex(ut=>ut.pattern===Me);if(Fe!==-1){if(a.length===1)return;e(a.filter((ut,ht)=>ht!==Fe)),i(ut=>ut>Fe?ut-1:Math.min(ut,a.length-2));return}if(a.length>=G_)return;const Ue=a[t]??a[0];e([...a,{pattern:Me,opacity:V_,hue:Ue.hue,saturation:Ue.saturation,colorMode:Ue.colorMode}])},[a,t]),u=ue.useCallback(()=>{i(Me=>(Me+1)%a.length)},[a.length]),h=ue.useCallback((Me,Fe)=>{e(Ue=>Ue.map((ut,ht)=>ht===Me?{...ut,opacity:Fe}:ut))},[]),f=ue.useCallback(Me=>{e(Fe=>Fe.length===1?Fe:Fe.filter((Ue,ut)=>ut!==Me)),i(Fe=>Fe>Me?Fe-1:Math.min(Fe,a.length-2))},[a.length]),p=ue.useCallback(Me=>{e(Fe=>Fe.map((Ue,ut)=>ut===t?{...Ue,opacity:Math.min(1,Math.max(0,Math.round((Ue.opacity+Me)*100)/100))}:Ue))},[t]),[g,m]=ue.useState(!1),[y,v]=ue.useState(!0),b=a[t]??a[0],{hue:_,saturation:S,colorMode:w}=b;ue.useCallback(Me=>{e(Fe=>Fe.map((Ue,ut)=>ut===t?{...Ue,...Me}:Ue))},[t]);const E=(Me,Fe)=>typeof Me=="function"?Me(Fe):Me,T=ue.useCallback(Me=>{e(Fe=>Fe.map((Ue,ut)=>ut===t?{...Ue,hue:E(Me,Ue.hue)}:Ue))},[t]),L=ue.useCallback(Me=>{e(Fe=>Fe.map((Ue,ut)=>ut===t?{...Ue,saturation:E(Me,Ue.saturation)}:Ue))},[t]),A=ue.useCallback(Me=>{e(Fe=>Fe.map((Ue,ut)=>ut===t?{...Ue,colorMode:E(Me,Ue.colorMode)}:Ue))},[t]),I=ue.useMemo(()=>a.map(Me=>UC(Me.hue,Me.saturation,Me.colorMode)),[a]),C=I[t]??I[0],[F,z]=ue.useState(!1),[D,H]=ue.useState(()=>ka("vj-motion",uv,wd(ox,lx)));ue.useEffect(()=>{Ia("vj-motion",D)},[D]);const ie=ue.useCallback(Me=>{H(Fe=>Math.min(lx,Math.max(ox,Math.round((Fe+Me)*100)/100)))},[]),[J,G]=ue.useState(gC),[$,K]=ue.useState({});ue.useEffect(()=>{xC(J)},[J]),ue.useEffect(()=>{const Me=[];let Fe=!1;return _C().then(Ue=>{if(Fe)return;const ut={};for(const[ht,{file:Ir,name:vs}]of Object.entries(Ue)){const N=URL.createObjectURL(Ir);Me.push(N),ut[ht]={url:N,name:vs,kind:ix(Ir)}}K(ut)}),()=>{Fe=!0,Me.forEach(Ue=>URL.revokeObjectURL(Ue))}},[]);const W=ue.useCallback((Me,Fe)=>{K(Ue=>{const ut=Ue[Me];ut&&URL.revokeObjectURL(ut.url);const ht={...Ue};return Fe?ht[Me]={url:URL.createObjectURL(Fe),name:Fe.name,kind:ix(Fe)}:delete ht[Me],ht}),Fe?lv(Me,Fe,Fe.name).catch(()=>{}):cv(Me).catch(()=>{})},[]),re=ue.useMemo(()=>({text:J,clips:$}),[J,$]),ne=ue.useRef(null),O=ue.useRef(null),q=ue.useRef(null),ve=ue.useRef(!1),[be,de]=ue.useState(!1),[Y,me]=ue.useState(0),pe=ue.useMemo(()=>zC(),[]),Ie=ue.useRef(null);!Ie.current&&pe&&(Ie.current=new BC({canvas:()=>ne.current,camera:()=>ve.current?q.current:null}));const[Xe,Oe]=ue.useState(()=>{try{const Me=localStorage.getItem("vj-sound");return Me==="music"||Me==="off"||Me==="mic"?Me:"mic"}catch{return"mic"}});ue.useEffect(()=>{try{localStorage.setItem("vj-sound",Xe)}catch{}},[Xe]);const gt=ue.useRef(null),[rt,bt]=ue.useState(null),Lt=ue.useCallback(async()=>{var Ue;const Me=Ie.current;if(!Me)return;if(Me.recording){de(!1);const ut=await Me.stop();for(const ht of((Ue=gt.current)==null?void 0:Ue.getTracks())??[])ht.stop();gt.current=null,ut&&ux(ut);return}bt(null);const Fe=await j_(Xe,O.current);Fe.problem&&bt(Fe.problem),gt.current=Fe.owned?Fe.stream:null,Me.start(Fe.stream),de(Me.recording)},[Xe]);ue.useEffect(()=>{if(!rt)return;const Me=setTimeout(()=>bt(null),9e3);return()=>clearTimeout(Me)},[rt]);const[vt,Xt]=ue.useState(!1),[kt,hn]=ue.useState(null),Z=ue.useRef(null);Z.current||(Z.current=new VC(()=>Xt(!1)));const Ot=ue.useCallback(()=>{const Me=Z.current;if(!Me)return;if(Me.open){Me.close();return}const Fe=Me.show(ne.current);hn(Fe),Xt(Me.open)},[]);ue.useEffect(()=>{if(!kt)return;const Me=setTimeout(()=>hn(null),9e3);return()=>clearTimeout(Me)},[kt]),ue.useEffect(()=>()=>{var Me;return(Me=Z.current)==null?void 0:Me.close()},[]),ue.useEffect(()=>{if(!be){me(0);return}const Me=setInterval(()=>{var Fe;me(((Fe=Ie.current)==null?void 0:Fe.elapsed)??0)},500);return()=>clearInterval(Me)},[be]),ue.useEffect(()=>{const Me=()=>{var Fe;(Fe=Ie.current)!=null&&Fe.recording&&Ie.current.stop().then(Ue=>Ue&&ux(Ue))};return window.addEventListener("pagehide",Me),()=>window.removeEventListener("pagehide",Me)},[]);const[_t,Ut]=ue.useState(!0),[He,Wt]=ue.useState(()=>I0(ka("vj-params",{},()=>!0))),[k,R]=ue.useState(()=>I0(ka("vj-fx",{},()=>!0)).fx??{}),se=ue.useCallback((Me,Fe)=>{R(Ue=>({...Ue,[Me]:Fe}))},[]),ye=(k["master.enabled"]??1)>=.5,we=ue.useCallback(()=>{R(Me=>({...Me,"master.enabled":(Me["master.enabled"]??1)>=.5?0:1}))},[]),Ae=ue.useCallback(Me=>{R(Fe=>{if(Me===void 0)return{};const{[Me]:Ue,...ut}=Fe;return ut})},[]),Be=ue.useCallback((Me,Fe)=>{Wt(Ue=>({...Ue,[s]:{...Ue[s],[Me]:Fe}}))},[s]),xe=ue.useCallback(Me=>{Wt(Fe=>{if(Me===void 0){const{[s]:ht,...Ir}=Fe;return Ir}const{[Me]:Ue,...ut}=Fe[s]??{};return{...Fe,[s]:ut}})},[s]),Se=ue.useMemo(()=>a.map(Me=>He[Me.pattern]),[a,He]),[Re,je]=ue.useState($_),[Ne,Pe]=ue.useState("library"),[at,pt]=ue.useState({left:null,right:null}),[xt,j]=ue.useState(null);ue.useEffect(()=>{q.current=xt,ve.current=g},[xt,g]);const[Le,_e]=ue.useState(!1),[Ve,ke]=ue.useState(!1),[ge,Qe]=ue.useState({bass:0,lowMid:0,mid:0,high:0,overall:0,beat:!1,beatIntensity:0,onset:0}),[dt,Bt]=ue.useState(.5),[wt,Pn]=ue.useState({bass:!0,mid:!0,high:!0,beat:!0}),Yn=ue.useCallback(Me=>{Pn(Fe=>({...Fe,[Me]:!Fe[Me]}))},[]),[Ln,Ar]=ue.useState(0),ji=at.left!==null||at.right!==null,ar=Ne==="vj"&&(Ve||_t&&!ji);ue.useEffect(()=>{if(!ar)return;let Me;const Fe=()=>{Ar(Date.now()/1e3),Me=requestAnimationFrame(Fe)};return Fe(),()=>cancelAnimationFrame(Me)},[ar]),ue.useEffect(()=>{if(!F)return;const Me=setInterval(()=>{T(Fe=>(Fe+1)%360)},50);return()=>clearInterval(Me)},[F]);const Ai=Ve?{left:{position:{x:.3+Math.sin(Ln)*.2*ge.mid,y:.5+ge.bass*.3},gesture:ge.overall>.25?"open":"fist",fingerCount:1+Math.round(Math.min(1,ge.mid+ge.high*.6)*4),velocity:Math.min(1,ge.mid*.7+ge.onset*.6),landmarks:Sd(.3+Math.sin(Ln)*.2*ge.mid,.5+ge.bass*.3,Ln,0)},right:{position:{x:.7-Math.sin(Ln)*.2*ge.mid,y:.5+ge.bass*.3},gesture:ge.overall>.25?"open":"fist",fingerCount:1+Math.round(Math.min(1,ge.mid+ge.high*.6)*4),velocity:Math.min(1,ge.mid*.7+ge.onset*.6),landmarks:Sd(.7-Math.sin(Ln)*.2*ge.mid,.5+ge.bass*.3,Ln,Math.PI)},clapping:ge.beat,clapIntensity:ge.beatIntensity,distanceBetweenHands:.45-ge.bass*.3}:ji||!_t?at:av(Ln),Rr=ue.useRef(null),gs=FC(Ai,Rr.current,D);Rr.current=gs,ue.useEffect(()=>{Ia("vj-hue",_),Ia("vj-saturation",S),Ia("vj-color-mode",w)},[_,S,w]),ue.useEffect(()=>{Ia("vj-params",He)},[He]),ue.useEffect(()=>{Ia("vj-fx",{fx:k})},[k]),ue.useEffect(()=>{K_(Re)},[Re]);const xi=ue.useCallback(()=>{Re.length!==0&&(e([{pattern:Re[0],opacity:1,...hx()}]),i(0),Pe("vj"))},[Re]),Ri=ue.useCallback(Me=>{if(Re.length===0)return;const Fe=Re.indexOf(s),ut=Fe===-1?Me==="next"?0:Re.length-1:(Fe+(Me==="next"?1:-1)+Re.length)%Re.length;o(Re[ut])},[s,Re,o]),vi=ue.useRef(null);ue.useEffect(()=>{const Me=Ue=>{if(Ue.key==="Control"){A("contrast");return}if(Ue.key==="Alt"){A("grayscale");return}if(Ue.key==="Meta"){A("black");return}if(Ue.ctrlKey||Ue.metaKey||Ue.altKey)return;if(Ue.key.toLowerCase()==="c"){m(ht=>!ht);return}if(Ue.key.toLowerCase()==="a"){ke(ht=>!ht);return}if(Ue.key.toLowerCase()==="r"){Lt();return}if(Ue.key.toLowerCase()==="s"){Oe(C0);return}if(Ue.key.toLowerCase()==="o"){Ot();return}if(Ue.key.toLowerCase()==="x"){we();return}if(Ue.key.toLowerCase()==="i"){Ut(ht=>!ht);return}if(Ue.key.toLowerCase()==="d"){o("flowfield");return}if(Ue.key==="Escape"){Pe("library");return}if(Ue.key.toLowerCase()==="l"){u();return}if(Ue.key==="-"){ie(-.1);return}if(Ue.key==="="||Ue.key==="+"){ie(.1);return}if(Ue.key==="["){p(-.1);return}if(Ue.key==="]"){p(.1);return}const ut=Re[vf(Ue.key)];if(ut){if(Ue.repeat||vi.current)return;vi.current={key:Ue.key.toLowerCase(),fired:!1,timer:window.setTimeout(()=>{vi.current&&(vi.current.fired=!0),c(ut)},px)};return}switch(Ue.key){case"ArrowLeft":Ue.preventDefault(),Ri("prev");break;case"ArrowRight":Ue.preventDefault(),Ri("next");break;case"ArrowUp":Ue.preventDefault(),L(ht=>Math.min(100,ht+5));break;case"ArrowDown":Ue.preventDefault(),L(ht=>Math.max(0,ht-5));break}},Fe=Ue=>{const ut=vi.current;if(!ut||ut.key!==Ue.key.toLowerCase()||(clearTimeout(ut.timer),vi.current=null,ut.fired))return;const ht=Re[vf(Ue.key)];ht&&o(ht)};return window.addEventListener("keydown",Me),window.addEventListener("keyup",Fe),()=>{window.removeEventListener("keydown",Me),window.removeEventListener("keyup",Fe)}},[Re,Ri,we,o,c,u,p,ie,Lt,Ot]),ue.useEffect(()=>{const Me=Fe=>{Fe.preventDefault(),v(Ue=>!Ue)};return window.addEventListener("contextmenu",Me),()=>window.removeEventListener("contextmenu",Me)},[]),ue.useEffect(()=>{(s==="face"||s.startsWith("smokehand"))&&m(!0)},[s]);const Pr=()=>{_e(!1)},xs=()=>{_e(!1)},Lr={...ge,bass:wt.bass?ge.bass:0,lowMid:wt.bass?ge.lowMid:0,mid:wt.mid?ge.mid:0,high:wt.high?ge.high:0,beat:wt.beat?ge.beat:!1,beatIntensity:wt.beat?ge.beatIntensity:0,onset:wt.beat?ge.onset:0};return Ne==="library"?V.jsx(CC,{set:Re,onSetChange:je,onStart:xi,text:J,onTextChange:G,clips:$,onClipChange:W}):V.jsxs("div",{className:"relative w-screen h-screen overflow-hidden bg-black",children:[Le&&V.jsx(ly,{onGrant:Pr,onSkip:xs}),V.jsx(tC,{handData:gs,layerColors:I,layers:a,videoElement:xt,audioData:Lr,layerParams:Se,content:re,motion:D,fxParams:k,onCanvasReady:Me=>{var Fe;ne.current=Me,(Fe=Z.current)==null||Fe.attach(Me)}}),V.jsx("div",{className:`absolute top-4 right-4 ${g?"opacity-100":"opacity-0 pointer-events-none"}`,children:V.jsx(H_,{onVideoReady:j})}),xt&&s!=="face"&&V.jsx(ry,{videoElement:xt,onHandData:pt}),V.jsx(dC,{enabled:Ve,sensitivity:dt,onAudioData:Qe,onStream:Me=>{O.current=Me}}),y&&V.jsx(PC,{header:V.jsx(LC,{layers:a,selectedLayer:t,set:Re,onSelect:i,onOpacityChange:h,onRemove:f}),sections:[...ax[s]?[{key:"shape",label:"SHAPE",entry:ax[s],values:He[s]??{},onChange:Be,onReset:xe}]:[],{key:"fx",label:"FX",entry:IC,values:k,onChange:se,onReset:Ae}]}),y&&V.jsx(ty,{currentPattern:s,onPatternChange:o,layers:a,selectedLayer:t,onPatternHold:c,onLayerCycle:u,showCamera:g,onCameraToggle:()=>m(!g),handData:at,selectedColors:C,colorMode:w,hue:_,saturation:S,onHueChange:T,onSaturationChange:L,onColorModeChange:A,autoHueEnabled:F,onAutoHueToggle:()=>z(Me=>!Me),set:Re,onOpenLibrary:()=>Pe("library"),audioEnabled:Ve,onAudioToggle:()=>ke(!Ve),audioSensitivity:dt,onAudioSensitivityChange:Bt,audioUse:wt,onAudioUseToggle:Yn,audioLevels:Lr,motion:D,onMotionChange:H,idleDrive:_t,onIdleDriveToggle:()=>Ut(Me=>!Me),fxEnabled:ye,fxActive:QT(k),onFxToggle:we,canRecord:pe,recording:be,recordSeconds:Y,onRecordToggle:()=>void Lt(),sound:Xe,onSoundCycle:()=>Oe(C0),output:vt,onOutputToggle:Ot}),(rt||kt)&&V.jsx("div",{className:"pointer-events-none absolute bottom-28 left-1/2 z-[60] w-[min(34rem,90vw)] -translate-x-1/2",children:V.jsx("div",{className:"rounded-xl border border-amber-300/30 bg-black/85 px-4 py-3 text-center font-mono text-[11px] leading-relaxed text-amber-200/90 backdrop-blur-sm",children:rt??kt})})]})}const dv=document.getElementById("root");if(!dv)throw new Error("Root element #root not found");n_.createRoot(dv).render(V.jsx(WC,{}));try{sessionStorage.removeItem("vj-stale-bundle-reload")}catch{}
