var O_=Object.defineProperty;var z_=(a,e,t)=>e in a?O_(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var F=(a,e,t)=>z_(a,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();var Th={exports:{}},yo={},Ch={exports:{}},Et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0;function B_(){if(p0)return Et;p0=1;var a=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function m(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,w={};function _(O,G,pe){this.props=O,this.context=G,this.refs=w,this.updater=pe||y}_.prototype.isReactComponent={},_.prototype.setState=function(O,G){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,G,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function S(){}S.prototype=_.prototype;function b(O,G,pe){this.props=O,this.context=G,this.refs=w,this.updater=pe||y}var C=b.prototype=new S;C.constructor=b,v(C,_.prototype),C.isPureReactComponent=!0;var E=Array.isArray,L=Object.prototype.hasOwnProperty,A={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function T(O,G,pe){var Se,_e={},ee=null,xe=null;if(G!=null)for(Se in G.ref!==void 0&&(xe=G.ref),G.key!==void 0&&(ee=""+G.key),G)L.call(G,Se)&&!I.hasOwnProperty(Se)&&(_e[Se]=G[Se]);var me=arguments.length-2;if(me===1)_e.children=pe;else if(1<me){for(var Ie=Array(me),Be=0;Be<me;Be++)Ie[Be]=arguments[Be+2];_e.children=Ie}if(O&&O.defaultProps)for(Se in me=O.defaultProps,me)_e[Se]===void 0&&(_e[Se]=me[Se]);return{$$typeof:a,type:O,key:ee,ref:xe,props:_e,_owner:A.current}}function U(O,G){return{$$typeof:a,type:O.type,key:G,ref:O.ref,props:O.props,_owner:O._owner}}function z(O){return typeof O=="object"&&O!==null&&O.$$typeof===a}function D(O){var G={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(pe){return G[pe]})}var B=/\/+/g;function $(O,G){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):G.toString(36)}function J(O,G,pe,Se,_e){var ee=typeof O;(ee==="undefined"||ee==="boolean")&&(O=null);var xe=!1;if(O===null)xe=!0;else switch(ee){case"string":case"number":xe=!0;break;case"object":switch(O.$$typeof){case a:case e:xe=!0}}if(xe)return xe=O,_e=_e(xe),O=Se===""?"."+$(xe,0):Se,E(_e)?(pe="",O!=null&&(pe=O.replace(B,"$&/")+"/"),J(_e,G,pe,"",function(Be){return Be})):_e!=null&&(z(_e)&&(_e=U(_e,pe+(!_e.key||xe&&xe.key===_e.key?"":(""+_e.key).replace(B,"$&/")+"/")+O)),G.push(_e)),1;if(xe=0,Se=Se===""?".":Se+":",E(O))for(var me=0;me<O.length;me++){ee=O[me];var Ie=Se+$(ee,me);xe+=J(ee,G,pe,Ie,_e)}else if(Ie=m(O),typeof Ie=="function")for(O=Ie.call(O),me=0;!(ee=O.next()).done;)ee=ee.value,Ie=Se+$(ee,me++),xe+=J(ee,G,pe,Ie,_e);else if(ee==="object")throw G=String(O),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.");return xe}function V(O,G,pe){if(O==null)return O;var Se=[],_e=0;return J(O,Se,"","",function(ee){return G.call(pe,ee,_e++)}),Se}function Z(O){if(O._status===-1){var G=O._result;G=G(),G.then(function(pe){(O._status===0||O._status===-1)&&(O._status=1,O._result=pe)},function(pe){(O._status===0||O._status===-1)&&(O._status=2,O._result=pe)}),O._status===-1&&(O._status=0,O._result=G)}if(O._status===1)return O._result.default;throw O._result}var K={current:null},W={transition:null},se={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:W,ReactCurrentOwner:A};function j(){throw Error("act(...) is not supported in production builds of React.")}return Et.Children={map:V,forEach:function(O,G,pe){V(O,function(){G.apply(this,arguments)},pe)},count:function(O){var G=0;return V(O,function(){G++}),G},toArray:function(O){return V(O,function(G){return G})||[]},only:function(O){if(!z(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Et.Component=_,Et.Fragment=t,Et.Profiler=s,Et.PureComponent=b,Et.StrictMode=i,Et.Suspense=h,Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,Et.act=j,Et.cloneElement=function(O,G,pe){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Se=v({},O.props),_e=O.key,ee=O.ref,xe=O._owner;if(G!=null){if(G.ref!==void 0&&(ee=G.ref,xe=A.current),G.key!==void 0&&(_e=""+G.key),O.type&&O.type.defaultProps)var me=O.type.defaultProps;for(Ie in G)L.call(G,Ie)&&!I.hasOwnProperty(Ie)&&(Se[Ie]=G[Ie]===void 0&&me!==void 0?me[Ie]:G[Ie])}var Ie=arguments.length-2;if(Ie===1)Se.children=pe;else if(1<Ie){me=Array(Ie);for(var Be=0;Be<Ie;Be++)me[Be]=arguments[Be+2];Se.children=me}return{$$typeof:a,type:O.type,key:_e,ref:ee,props:Se,_owner:xe}},Et.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:o,_context:O},O.Consumer=O},Et.createElement=T,Et.createFactory=function(O){var G=T.bind(null,O);return G.type=O,G},Et.createRef=function(){return{current:null}},Et.forwardRef=function(O){return{$$typeof:u,render:O}},Et.isValidElement=z,Et.lazy=function(O){return{$$typeof:p,_payload:{_status:-1,_result:O},_init:Z}},Et.memo=function(O,G){return{$$typeof:d,type:O,compare:G===void 0?null:G}},Et.startTransition=function(O){var G=W.transition;W.transition={};try{O()}finally{W.transition=G}},Et.unstable_act=j,Et.useCallback=function(O,G){return K.current.useCallback(O,G)},Et.useContext=function(O){return K.current.useContext(O)},Et.useDebugValue=function(){},Et.useDeferredValue=function(O){return K.current.useDeferredValue(O)},Et.useEffect=function(O,G){return K.current.useEffect(O,G)},Et.useId=function(){return K.current.useId()},Et.useImperativeHandle=function(O,G,pe){return K.current.useImperativeHandle(O,G,pe)},Et.useInsertionEffect=function(O,G){return K.current.useInsertionEffect(O,G)},Et.useLayoutEffect=function(O,G){return K.current.useLayoutEffect(O,G)},Et.useMemo=function(O,G){return K.current.useMemo(O,G)},Et.useReducer=function(O,G,pe){return K.current.useReducer(O,G,pe)},Et.useRef=function(O){return K.current.useRef(O)},Et.useState=function(O){return K.current.useState(O)},Et.useSyncExternalStore=function(O,G,pe){return K.current.useSyncExternalStore(O,G,pe)},Et.useTransition=function(){return K.current.useTransition()},Et.version="18.3.1",Et}var m0;function Md(){return m0||(m0=1,Ch.exports=B_()),Ch.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0;function H_(){if(g0)return yo;g0=1;var a=Md(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(u,h,d){var p,g={},m=null,y=null;d!==void 0&&(m=""+d),h.key!==void 0&&(m=""+h.key),h.ref!==void 0&&(y=h.ref);for(p in h)i.call(h,p)&&!o.hasOwnProperty(p)&&(g[p]=h[p]);if(u&&u.defaultProps)for(p in h=u.defaultProps,h)g[p]===void 0&&(g[p]=h[p]);return{$$typeof:e,type:u,key:m,ref:y,props:g,_owner:s.current}}return yo.Fragment=t,yo.jsx=c,yo.jsxs=c,yo}var x0;function V_(){return x0||(x0=1,Th.exports=H_()),Th.exports}var X=V_(),Yl={},Ah={exports:{}},ei={},Rh={exports:{}},Ph={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v0;function G_(){return v0||(v0=1,(function(a){function e(W,se){var j=W.length;W.push(se);e:for(;0<j;){var O=j-1>>>1,G=W[O];if(0<s(G,se))W[O]=se,W[j]=G,j=O;else break e}}function t(W){return W.length===0?null:W[0]}function i(W){if(W.length===0)return null;var se=W[0],j=W.pop();if(j!==se){W[0]=j;e:for(var O=0,G=W.length,pe=G>>>1;O<pe;){var Se=2*(O+1)-1,_e=W[Se],ee=Se+1,xe=W[ee];if(0>s(_e,j))ee<G&&0>s(xe,_e)?(W[O]=xe,W[ee]=j,O=ee):(W[O]=_e,W[Se]=j,O=Se);else if(ee<G&&0>s(xe,j))W[O]=xe,W[ee]=j,O=ee;else break e}}return se}function s(W,se){var j=W.sortIndex-se.sortIndex;return j!==0?j:W.id-se.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;a.unstable_now=function(){return o.now()}}else{var c=Date,u=c.now();a.unstable_now=function(){return c.now()-u}}var h=[],d=[],p=1,g=null,m=3,y=!1,v=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(W){for(var se=t(d);se!==null;){if(se.callback===null)i(d);else if(se.startTime<=W)i(d),se.sortIndex=se.expirationTime,e(h,se);else break;se=t(d)}}function E(W){if(w=!1,C(W),!v)if(t(h)!==null)v=!0,Z(L);else{var se=t(d);se!==null&&K(E,se.startTime-W)}}function L(W,se){v=!1,w&&(w=!1,S(T),T=-1),y=!0;var j=m;try{for(C(se),g=t(h);g!==null&&(!(g.expirationTime>se)||W&&!D());){var O=g.callback;if(typeof O=="function"){g.callback=null,m=g.priorityLevel;var G=O(g.expirationTime<=se);se=a.unstable_now(),typeof G=="function"?g.callback=G:g===t(h)&&i(h),C(se)}else i(h);g=t(h)}if(g!==null)var pe=!0;else{var Se=t(d);Se!==null&&K(E,Se.startTime-se),pe=!1}return pe}finally{g=null,m=j,y=!1}}var A=!1,I=null,T=-1,U=5,z=-1;function D(){return!(a.unstable_now()-z<U)}function B(){if(I!==null){var W=a.unstable_now();z=W;var se=!0;try{se=I(!0,W)}finally{se?$():(A=!1,I=null)}}else A=!1}var $;if(typeof b=="function")$=function(){b(B)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,V=J.port2;J.port1.onmessage=B,$=function(){V.postMessage(null)}}else $=function(){_(B,0)};function Z(W){I=W,A||(A=!0,$())}function K(W,se){T=_(function(){W(a.unstable_now())},se)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(W){W.callback=null},a.unstable_continueExecution=function(){v||y||(v=!0,Z(L))},a.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<W?Math.floor(1e3/W):5},a.unstable_getCurrentPriorityLevel=function(){return m},a.unstable_getFirstCallbackNode=function(){return t(h)},a.unstable_next=function(W){switch(m){case 1:case 2:case 3:var se=3;break;default:se=m}var j=m;m=se;try{return W()}finally{m=j}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(W,se){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var j=m;m=W;try{return se()}finally{m=j}},a.unstable_scheduleCallback=function(W,se,j){var O=a.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?O+j:O):j=O,W){case 1:var G=-1;break;case 2:G=250;break;case 5:G=1073741823;break;case 4:G=1e4;break;default:G=5e3}return G=j+G,W={id:p++,callback:se,priorityLevel:W,startTime:j,expirationTime:G,sortIndex:-1},j>O?(W.sortIndex=j,e(d,W),t(h)===null&&W===t(d)&&(w?(S(T),T=-1):w=!0,K(E,j-O))):(W.sortIndex=G,e(h,W),v||y||(v=!0,Z(L))),W},a.unstable_shouldYield=D,a.unstable_wrapCallback=function(W){var se=m;return function(){var j=m;m=se;try{return W.apply(this,arguments)}finally{m=j}}}})(Ph)),Ph}var _0;function W_(){return _0||(_0=1,Rh.exports=G_()),Rh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0;function X_(){if(y0)return ei;y0=1;var a=Md(),e=W_();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function o(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function m(n){return h.call(g,n)?!0:h.call(p,n)?!1:d.test(n)?g[n]=!0:(p[n]=!0,!1)}function y(n,r,l,f){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function v(n,r,l,f){if(r===null||typeof r>"u"||y(n,r,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function w(n,r,l,f,x,M,P){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=f,this.attributeNamespace=x,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=M,this.removeEmptyString=P}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];_[r]=new w(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(S,b);_[r]=new w(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(S,b);_[r]=new w(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(S,b);_[r]=new w(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function C(n,r,l,f){var x=_.hasOwnProperty(r)?_[r]:null;(x!==null?x.type!==0:f||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(v(r,l,x,f)&&(l=null),f||x===null?m(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):x.mustUseProperty?n[x.propertyName]=l===null?x.type===3?!1:"":l:(r=x.attributeName,f=x.attributeNamespace,l===null?n.removeAttribute(r):(x=x.type,l=x===3||x===4&&l===!0?"":""+l,f?n.setAttributeNS(f,r,l):n.setAttribute(r,l))))}var E=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),A=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),D=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),W=Symbol.iterator;function se(n){return n===null||typeof n!="object"?null:(n=W&&n[W]||n["@@iterator"],typeof n=="function"?n:null)}var j=Object.assign,O;function G(n){if(O===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var pe=!1;function Se(n,r){if(!n||pe)return"";pe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(he){var f=he}Reflect.construct(n,[],r)}else{try{r.call()}catch(he){f=he}n.call(r.prototype)}else{try{throw Error()}catch(he){f=he}n()}}catch(he){if(he&&f&&typeof he.stack=="string"){for(var x=he.stack.split(`
`),M=f.stack.split(`
`),P=x.length-1,H=M.length-1;1<=P&&0<=H&&x[P]!==M[H];)H--;for(;1<=P&&0<=H;P--,H--)if(x[P]!==M[H]){if(P!==1||H!==1)do if(P--,H--,0>H||x[P]!==M[H]){var Y=`
`+x[P].replace(" at new "," at ");return n.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",n.displayName)),Y}while(1<=P&&0<=H);break}}}finally{pe=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?G(n):""}function _e(n){switch(n.tag){case 5:return G(n.type);case 16:return G("Lazy");case 13:return G("Suspense");case 19:return G("SuspenseList");case 0:case 2:case 15:return n=Se(n.type,!1),n;case 11:return n=Se(n.type.render,!1),n;case 1:return n=Se(n.type,!0),n;default:return""}}function ee(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case A:return"Portal";case U:return"Profiler";case T:return"StrictMode";case $:return"Suspense";case J:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case z:return(n._context.displayName||"Context")+".Provider";case B:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case V:return r=n.displayName||null,r!==null?r:ee(n.type)||"Memo";case Z:r=n._payload,n=n._init;try{return ee(n(r))}catch{}}return null}function xe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ee(r);case 8:return r===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ie(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Be(n){var r=Ie(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),f=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var x=l.get,M=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return x.call(this)},set:function(P){f=""+P,M.call(this,P)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(P){f=""+P},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function $e(n){n._valueTracker||(n._valueTracker=Be(n))}function wt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),f="";return n&&(f=Ie(n)?n.checked?"true":"false":n.value),n=f,n!==l?(r.setValue(n),!0):!1}function ut(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Tt(n,r){var l=r.checked;return j({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Ct(n,r){var l=r.defaultValue==null?"":r.defaultValue,f=r.checked!=null?r.checked:r.defaultChecked;l=me(r.value!=null?r.value:l),n._wrapperState={initialChecked:f,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function mt(n,r){r=r.checked,r!=null&&C(n,"checked",r,!1)}function Yt(n,r){mt(n,r);var l=me(r.value),f=r.type;if(l!=null)f==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(f==="submit"||f==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?on(n,r.type,l):r.hasOwnProperty("defaultValue")&&on(n,r.type,me(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Vt(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var f=r.type;if(!(f!=="submit"&&f!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function on(n,r,l){(r!=="number"||ut(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var te=Array.isArray;function Gt(n,r,l,f){if(n=n.options,r){r={};for(var x=0;x<l.length;x++)r["$"+l[x]]=!0;for(l=0;l<n.length;l++)x=r.hasOwnProperty("$"+n[l].value),n[l].selected!==x&&(n[l].selected=x),x&&f&&(n[l].defaultSelected=!0)}else{for(l=""+me(l),r=null,x=0;x<n.length;x++){if(n[x].value===l){n[x].selected=!0,f&&(n[x].defaultSelected=!0);return}r!==null||n[x].disabled||(r=n[x])}r!==null&&(r.selected=!0)}}function _t(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return j({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ft(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(te(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:me(l)}}function Te(n,r){var l=me(r.value),f=me(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),f!=null&&(n.defaultValue=""+f)}function Wt(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function k(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function R(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?k(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var re,ye=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,f,x){MSApp.execUnsafeLocalFunction(function(){return n(r,l,f,x)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(re=re||document.createElement("div"),re.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=re.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Me(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Re={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=["Webkit","ms","Moz","O"];Object.keys(Re).forEach(function(n){ze.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Re[r]=Re[n]})});function de(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Re.hasOwnProperty(n)&&Re[n]?(""+r).trim():r+"px"}function ve(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var f=l.indexOf("--")===0,x=de(l,r[l],f);l==="float"&&(l="cssFloat"),f?n.setProperty(l,x):n[l]=x}}var Ge=j({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ue(n,r){if(r){if(Ge[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function ke(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pe=null;function ft(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var st=null,yt=null,q=null;function Ne(n){if(n=ro(n)){if(typeof st!="function")throw Error(t(280));var r=n.stateNode;r&&(r=cl(r),st(n.stateNode,n.type,r))}}function ge(n){yt?q?q.push(n):q=[n]:yt=n}function Xe(){if(yt){var n=yt,r=q;if(q=yt=null,Ne(n),r)for(n=0;n<r.length;n++)Ne(r[n])}}function Fe(n,r){return n(r)}function we(){}var Qe=!1;function dt(n,r,l){if(Qe)return n(r,l);Qe=!0;try{return Fe(n,r,l)}finally{Qe=!1,(yt!==null||q!==null)&&(we(),Xe())}}function Ot(n,r){var l=n.stateNode;if(l===null)return null;var f=cl(l);if(f===null)return null;l=f[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(n=n.type,f=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!f;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Rt=!1;if(u)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){Rt=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{Rt=!1}function jn(n,r,l,f,x,M,P,H,Y){var he=Array.prototype.slice.call(arguments,3);try{r.apply(l,he)}catch(Ee){this.onError(Ee)}}var ai=!1,oi=null,sr=!1,Cr=null,Ci={onError:function(n){ai=!0,oi=n}};function Ce(n,r,l,f,x,M,P,H,Y){ai=!1,oi=null,jn.apply(Ci,arguments)}function Ve(n,r,l,f,x,M,P,H,Y){if(Ce.apply(this,arguments),ai){if(ai){var he=oi;ai=!1,oi=null}else throw Error(t(198));sr||(sr=!0,Cr=he)}}function Le(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function at(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Dt(n){if(Le(n)!==n)throw Error(t(188))}function Ai(n){var r=n.alternate;if(!r){if(r=Le(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,f=r;;){var x=l.return;if(x===null)break;var M=x.alternate;if(M===null){if(f=x.return,f!==null){l=f;continue}break}if(x.child===M.child){for(M=x.child;M;){if(M===l)return Dt(x),n;if(M===f)return Dt(x),r;M=M.sibling}throw Error(t(188))}if(l.return!==f.return)l=x,f=M;else{for(var P=!1,H=x.child;H;){if(H===l){P=!0,l=x,f=M;break}if(H===f){P=!0,f=x,l=M;break}H=H.sibling}if(!P){for(H=M.child;H;){if(H===l){P=!0,l=M,f=x;break}if(H===f){P=!0,f=M,l=x;break}H=H.sibling}if(!P)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function fs(n){return n=Ai(n),n!==null?Ar(n):null}function Ar(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Ar(n);if(r!==null)return r;n=n.sibling}return null}var qo=e.unstable_scheduleCallback,Yo=e.unstable_cancelCallback,$c=e.unstable_shouldYield,Kc=e.unstable_requestPaint,tn=e.unstable_now,Zc=e.unstable_getCurrentPriorityLevel,Ha=e.unstable_ImmediatePriority,N=e.unstable_UserBlockingPriority,ie=e.unstable_NormalPriority,ue=e.unstable_LowPriority,le=e.unstable_IdlePriority,oe=null,He=null;function Ke(n){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(oe,n,void 0,(n.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:gt,et=Math.log,rt=Math.LN2;function gt(n){return n>>>=0,n===0?32:31-(et(n)/rt|0)|0}var xt=64,nt=4194304;function Lt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Xt(n,r){var l=n.pendingLanes;if(l===0)return 0;var f=0,x=n.suspendedLanes,M=n.pingedLanes,P=l&268435455;if(P!==0){var H=P&~x;H!==0?f=Lt(H):(M&=P,M!==0&&(f=Lt(M)))}else P=l&~x,P!==0?f=Lt(P):M!==0&&(f=Lt(M));if(f===0)return 0;if(r!==0&&r!==f&&(r&x)===0&&(x=f&-f,M=r&-r,x>=M||x===16&&(M&4194240)!==0))return r;if((f&4)!==0&&(f|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=f;0<r;)l=31-Oe(r),x=1<<l,f|=n[l],r&=~x;return f}function Jt(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zt(n,r){for(var l=n.suspendedLanes,f=n.pingedLanes,x=n.expirationTimes,M=n.pendingLanes;0<M;){var P=31-Oe(M),H=1<<P,Y=x[P];Y===-1?((H&l)===0||(H&f)!==0)&&(x[P]=Jt(H,r)):Y<=r&&(n.expiredLanes|=H),M&=~H}}function dn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function je(){var n=xt;return xt<<=1,(xt&4194240)===0&&(xt=64),n}function Pn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function Mt(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Oe(r),n[r]=l}function qn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var f=n.eventTimes;for(n=n.expirationTimes;0<l;){var x=31-Oe(l),M=1<<x;r[x]=0,f[x]=-1,n[x]=-1,l&=~M}}function Yn(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var f=31-Oe(l),x=1<<f;x&r|n[f]&r&&(n[f]|=r),l&=~x}}var bt=0;function ar(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var kt,$t,Ri,Bt,Pi,ji=!1,ds=[],Rr=null,Pr=null,Lr=null,Va=new Map,Ga=new Map,Ir=[],av="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zd(n,r){switch(n){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":Pr=null;break;case"mouseover":case"mouseout":Lr=null;break;case"pointerover":case"pointerout":Va.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ga.delete(r.pointerId)}}function Wa(n,r,l,f,x,M){return n===null||n.nativeEvent!==M?(n={blockedOn:r,domEventName:l,eventSystemFlags:f,nativeEvent:M,targetContainers:[x]},r!==null&&(r=ro(r),r!==null&&$t(r)),n):(n.eventSystemFlags|=f,r=n.targetContainers,x!==null&&r.indexOf(x)===-1&&r.push(x),n)}function ov(n,r,l,f,x){switch(r){case"focusin":return Rr=Wa(Rr,n,r,l,f,x),!0;case"dragenter":return Pr=Wa(Pr,n,r,l,f,x),!0;case"mouseover":return Lr=Wa(Lr,n,r,l,f,x),!0;case"pointerover":var M=x.pointerId;return Va.set(M,Wa(Va.get(M)||null,n,r,l,f,x)),!0;case"gotpointercapture":return M=x.pointerId,Ga.set(M,Wa(Ga.get(M)||null,n,r,l,f,x)),!0}return!1}function Qd(n){var r=ps(n.target);if(r!==null){var l=Le(r);if(l!==null){if(r=l.tag,r===13){if(r=at(l),r!==null){n.blockedOn=r,Pi(n.priority,function(){Ri(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function $o(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Jc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var f=new l.constructor(l.type,l);Pe=f,l.target.dispatchEvent(f),Pe=null}else return r=ro(l),r!==null&&$t(r),n.blockedOn=l,!1;r.shift()}return!0}function Jd(n,r,l){$o(n)&&l.delete(r)}function lv(){ji=!1,Rr!==null&&$o(Rr)&&(Rr=null),Pr!==null&&$o(Pr)&&(Pr=null),Lr!==null&&$o(Lr)&&(Lr=null),Va.forEach(Jd),Ga.forEach(Jd)}function Xa(n,r){n.blockedOn===r&&(n.blockedOn=null,ji||(ji=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,lv)))}function ja(n){function r(x){return Xa(x,n)}if(0<ds.length){Xa(ds[0],n);for(var l=1;l<ds.length;l++){var f=ds[l];f.blockedOn===n&&(f.blockedOn=null)}}for(Rr!==null&&Xa(Rr,n),Pr!==null&&Xa(Pr,n),Lr!==null&&Xa(Lr,n),Va.forEach(r),Ga.forEach(r),l=0;l<Ir.length;l++)f=Ir[l],f.blockedOn===n&&(f.blockedOn=null);for(;0<Ir.length&&(l=Ir[0],l.blockedOn===null);)Qd(l),l.blockedOn===null&&Ir.shift()}var Vs=E.ReactCurrentBatchConfig,Ko=!0;function cv(n,r,l,f){var x=bt,M=Vs.transition;Vs.transition=null;try{bt=1,Qc(n,r,l,f)}finally{bt=x,Vs.transition=M}}function uv(n,r,l,f){var x=bt,M=Vs.transition;Vs.transition=null;try{bt=4,Qc(n,r,l,f)}finally{bt=x,Vs.transition=M}}function Qc(n,r,l,f){if(Ko){var x=Jc(n,r,l,f);if(x===null)gu(n,r,f,Zo,l),Zd(n,f);else if(ov(x,n,r,l,f))f.stopPropagation();else if(Zd(n,f),r&4&&-1<av.indexOf(n)){for(;x!==null;){var M=ro(x);if(M!==null&&kt(M),M=Jc(n,r,l,f),M===null&&gu(n,r,f,Zo,l),M===x)break;x=M}x!==null&&f.stopPropagation()}else gu(n,r,f,null,l)}}var Zo=null;function Jc(n,r,l,f){if(Zo=null,n=ft(f),n=ps(n),n!==null)if(r=Le(n),r===null)n=null;else if(l=r.tag,l===13){if(n=at(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Zo=n,null}function ep(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Zc()){case Ha:return 1;case N:return 4;case ie:case ue:return 16;case le:return 536870912;default:return 16}default:return 16}}var Nr=null,eu=null,Qo=null;function tp(){if(Qo)return Qo;var n,r=eu,l=r.length,f,x="value"in Nr?Nr.value:Nr.textContent,M=x.length;for(n=0;n<l&&r[n]===x[n];n++);var P=l-n;for(f=1;f<=P&&r[l-f]===x[M-f];f++);return Qo=x.slice(n,1<f?1-f:void 0)}function Jo(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function el(){return!0}function np(){return!1}function li(n){function r(l,f,x,M,P){this._reactName=l,this._targetInst=x,this.type=f,this.nativeEvent=M,this.target=P,this.currentTarget=null;for(var H in n)n.hasOwnProperty(H)&&(l=n[H],this[H]=l?l(M):M[H]);return this.isDefaultPrevented=(M.defaultPrevented!=null?M.defaultPrevented:M.returnValue===!1)?el:np,this.isPropagationStopped=np,this}return j(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),r}var Gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tu=li(Gs),qa=j({},Gs,{view:0,detail:0}),hv=li(qa),nu,iu,Ya,tl=j({},qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ya&&(Ya&&n.type==="mousemove"?(nu=n.screenX-Ya.screenX,iu=n.screenY-Ya.screenY):iu=nu=0,Ya=n),nu)},movementY:function(n){return"movementY"in n?n.movementY:iu}}),ip=li(tl),fv=j({},tl,{dataTransfer:0}),dv=li(fv),pv=j({},qa,{relatedTarget:0}),ru=li(pv),mv=j({},Gs,{animationName:0,elapsedTime:0,pseudoElement:0}),gv=li(mv),xv=j({},Gs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),vv=li(xv),_v=j({},Gs,{data:0}),rp=li(_v),yv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Mv[n])?!!r[n]:!1}function su(){return wv}var bv=j({},qa,{key:function(n){if(n.key){var r=yv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Jo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Sv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(n){return n.type==="keypress"?Jo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Jo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ev=li(bv),Tv=j({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sp=li(Tv),Cv=j({},qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),Av=li(Cv),Rv=j({},Gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Pv=li(Rv),Lv=j({},tl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Iv=li(Lv),Nv=[9,13,27,32],au=u&&"CompositionEvent"in window,$a=null;u&&"documentMode"in document&&($a=document.documentMode);var Uv=u&&"TextEvent"in window&&!$a,ap=u&&(!au||$a&&8<$a&&11>=$a),op=" ",lp=!1;function cp(n,r){switch(n){case"keyup":return Nv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function up(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ws=!1;function Fv(n,r){switch(n){case"compositionend":return up(r);case"keypress":return r.which!==32?null:(lp=!0,op);case"textInput":return n=r.data,n===op&&lp?null:n;default:return null}}function Dv(n,r){if(Ws)return n==="compositionend"||!au&&cp(n,r)?(n=tp(),Qo=eu=Nr=null,Ws=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return ap&&r.locale!=="ko"?null:r.data;default:return null}}var kv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hp(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!kv[n.type]:r==="textarea"}function fp(n,r,l,f){ge(f),r=al(r,"onChange"),0<r.length&&(l=new tu("onChange","change",null,l,f),n.push({event:l,listeners:r}))}var Ka=null,Za=null;function Ov(n){Pp(n,0)}function nl(n){var r=$s(n);if(wt(r))return n}function zv(n,r){if(n==="change")return r}var dp=!1;if(u){var ou;if(u){var lu="oninput"in document;if(!lu){var pp=document.createElement("div");pp.setAttribute("oninput","return;"),lu=typeof pp.oninput=="function"}ou=lu}else ou=!1;dp=ou&&(!document.documentMode||9<document.documentMode)}function mp(){Ka&&(Ka.detachEvent("onpropertychange",gp),Za=Ka=null)}function gp(n){if(n.propertyName==="value"&&nl(Za)){var r=[];fp(r,Za,n,ft(n)),dt(Ov,r)}}function Bv(n,r,l){n==="focusin"?(mp(),Ka=r,Za=l,Ka.attachEvent("onpropertychange",gp)):n==="focusout"&&mp()}function Hv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return nl(Za)}function Vv(n,r){if(n==="click")return nl(r)}function Gv(n,r){if(n==="input"||n==="change")return nl(r)}function Wv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Li=typeof Object.is=="function"?Object.is:Wv;function Qa(n,r){if(Li(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),f=Object.keys(r);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var x=l[f];if(!h.call(r,x)||!Li(n[x],r[x]))return!1}return!0}function xp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function vp(n,r){var l=xp(n);n=0;for(var f;l;){if(l.nodeType===3){if(f=n+l.textContent.length,n<=r&&f>=r)return{node:l,offset:r-n};n=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=xp(l)}}function _p(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?_p(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function yp(){for(var n=window,r=ut();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=ut(n.document)}return r}function cu(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Xv(n){var r=yp(),l=n.focusedElem,f=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&_p(l.ownerDocument.documentElement,l)){if(f!==null&&cu(l)){if(r=f.start,n=f.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var x=l.textContent.length,M=Math.min(f.start,x);f=f.end===void 0?M:Math.min(f.end,x),!n.extend&&M>f&&(x=f,f=M,M=x),x=vp(l,M);var P=vp(l,f);x&&P&&(n.rangeCount!==1||n.anchorNode!==x.node||n.anchorOffset!==x.offset||n.focusNode!==P.node||n.focusOffset!==P.offset)&&(r=r.createRange(),r.setStart(x.node,x.offset),n.removeAllRanges(),M>f?(n.addRange(r),n.extend(P.node,P.offset)):(r.setEnd(P.node,P.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var jv=u&&"documentMode"in document&&11>=document.documentMode,Xs=null,uu=null,Ja=null,hu=!1;function Sp(n,r,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;hu||Xs==null||Xs!==ut(f)||(f=Xs,"selectionStart"in f&&cu(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Ja&&Qa(Ja,f)||(Ja=f,f=al(uu,"onSelect"),0<f.length&&(r=new tu("onSelect","select",null,r,l),n.push({event:r,listeners:f}),r.target=Xs)))}function il(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var js={animationend:il("Animation","AnimationEnd"),animationiteration:il("Animation","AnimationIteration"),animationstart:il("Animation","AnimationStart"),transitionend:il("Transition","TransitionEnd")},fu={},Mp={};u&&(Mp=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function rl(n){if(fu[n])return fu[n];if(!js[n])return n;var r=js[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in Mp)return fu[n]=r[l];return n}var wp=rl("animationend"),bp=rl("animationiteration"),Ep=rl("animationstart"),Tp=rl("transitionend"),Cp=new Map,Ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ur(n,r){Cp.set(n,r),o(r,[n])}for(var du=0;du<Ap.length;du++){var pu=Ap[du],qv=pu.toLowerCase(),Yv=pu[0].toUpperCase()+pu.slice(1);Ur(qv,"on"+Yv)}Ur(wp,"onAnimationEnd"),Ur(bp,"onAnimationIteration"),Ur(Ep,"onAnimationStart"),Ur("dblclick","onDoubleClick"),Ur("focusin","onFocus"),Ur("focusout","onBlur"),Ur(Tp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var eo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$v=new Set("cancel close invalid load scroll toggle".split(" ").concat(eo));function Rp(n,r,l){var f=n.type||"unknown-event";n.currentTarget=l,Ve(f,r,void 0,n),n.currentTarget=null}function Pp(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var f=n[l],x=f.event;f=f.listeners;e:{var M=void 0;if(r)for(var P=f.length-1;0<=P;P--){var H=f[P],Y=H.instance,he=H.currentTarget;if(H=H.listener,Y!==M&&x.isPropagationStopped())break e;Rp(x,H,he),M=Y}else for(P=0;P<f.length;P++){if(H=f[P],Y=H.instance,he=H.currentTarget,H=H.listener,Y!==M&&x.isPropagationStopped())break e;Rp(x,H,he),M=Y}}}if(sr)throw n=Cr,sr=!1,Cr=null,n}function Kt(n,r){var l=r[Mu];l===void 0&&(l=r[Mu]=new Set);var f=n+"__bubble";l.has(f)||(Lp(r,n,2,!1),l.add(f))}function mu(n,r,l){var f=0;r&&(f|=4),Lp(l,n,f,r)}var sl="_reactListening"+Math.random().toString(36).slice(2);function to(n){if(!n[sl]){n[sl]=!0,i.forEach(function(l){l!=="selectionchange"&&($v.has(l)||mu(l,!1,n),mu(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[sl]||(r[sl]=!0,mu("selectionchange",!1,r))}}function Lp(n,r,l,f){switch(ep(r)){case 1:var x=cv;break;case 4:x=uv;break;default:x=Qc}l=x.bind(null,r,l,n),x=void 0,!Rt||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(x=!0),f?x!==void 0?n.addEventListener(r,l,{capture:!0,passive:x}):n.addEventListener(r,l,!0):x!==void 0?n.addEventListener(r,l,{passive:x}):n.addEventListener(r,l,!1)}function gu(n,r,l,f,x){var M=f;if((r&1)===0&&(r&2)===0&&f!==null)e:for(;;){if(f===null)return;var P=f.tag;if(P===3||P===4){var H=f.stateNode.containerInfo;if(H===x||H.nodeType===8&&H.parentNode===x)break;if(P===4)for(P=f.return;P!==null;){var Y=P.tag;if((Y===3||Y===4)&&(Y=P.stateNode.containerInfo,Y===x||Y.nodeType===8&&Y.parentNode===x))return;P=P.return}for(;H!==null;){if(P=ps(H),P===null)return;if(Y=P.tag,Y===5||Y===6){f=M=P;continue e}H=H.parentNode}}f=f.return}dt(function(){var he=M,Ee=ft(l),Ae=[];e:{var be=Cp.get(n);if(be!==void 0){var qe=tu,Je=n;switch(n){case"keypress":if(Jo(l)===0)break e;case"keydown":case"keyup":qe=Ev;break;case"focusin":Je="focus",qe=ru;break;case"focusout":Je="blur",qe=ru;break;case"beforeblur":case"afterblur":qe=ru;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":qe=ip;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":qe=dv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":qe=Av;break;case wp:case bp:case Ep:qe=gv;break;case Tp:qe=Pv;break;case"scroll":qe=hv;break;case"wheel":qe=Iv;break;case"copy":case"cut":case"paste":qe=vv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":qe=sp}var tt=(r&4)!==0,ln=!tt&&n==="scroll",ae=tt?be!==null?be+"Capture":null:be;tt=[];for(var ne=he,ce;ne!==null;){ce=ne;var De=ce.stateNode;if(ce.tag===5&&De!==null&&(ce=De,ae!==null&&(De=Ot(ne,ae),De!=null&&tt.push(no(ne,De,ce)))),ln)break;ne=ne.return}0<tt.length&&(be=new qe(be,Je,null,l,Ee),Ae.push({event:be,listeners:tt}))}}if((r&7)===0){e:{if(be=n==="mouseover"||n==="pointerover",qe=n==="mouseout"||n==="pointerout",be&&l!==Pe&&(Je=l.relatedTarget||l.fromElement)&&(ps(Je)||Je[or]))break e;if((qe||be)&&(be=Ee.window===Ee?Ee:(be=Ee.ownerDocument)?be.defaultView||be.parentWindow:window,qe?(Je=l.relatedTarget||l.toElement,qe=he,Je=Je?ps(Je):null,Je!==null&&(ln=Le(Je),Je!==ln||Je.tag!==5&&Je.tag!==6)&&(Je=null)):(qe=null,Je=he),qe!==Je)){if(tt=ip,De="onMouseLeave",ae="onMouseEnter",ne="mouse",(n==="pointerout"||n==="pointerover")&&(tt=sp,De="onPointerLeave",ae="onPointerEnter",ne="pointer"),ln=qe==null?be:$s(qe),ce=Je==null?be:$s(Je),be=new tt(De,ne+"leave",qe,l,Ee),be.target=ln,be.relatedTarget=ce,De=null,ps(Ee)===he&&(tt=new tt(ae,ne+"enter",Je,l,Ee),tt.target=ce,tt.relatedTarget=ln,De=tt),ln=De,qe&&Je)t:{for(tt=qe,ae=Je,ne=0,ce=tt;ce;ce=qs(ce))ne++;for(ce=0,De=ae;De;De=qs(De))ce++;for(;0<ne-ce;)tt=qs(tt),ne--;for(;0<ce-ne;)ae=qs(ae),ce--;for(;ne--;){if(tt===ae||ae!==null&&tt===ae.alternate)break t;tt=qs(tt),ae=qs(ae)}tt=null}else tt=null;qe!==null&&Ip(Ae,be,qe,tt,!1),Je!==null&&ln!==null&&Ip(Ae,ln,Je,tt,!0)}}e:{if(be=he?$s(he):window,qe=be.nodeName&&be.nodeName.toLowerCase(),qe==="select"||qe==="input"&&be.type==="file")var it=zv;else if(hp(be))if(dp)it=Gv;else{it=Hv;var ot=Bv}else(qe=be.nodeName)&&qe.toLowerCase()==="input"&&(be.type==="checkbox"||be.type==="radio")&&(it=Vv);if(it&&(it=it(n,he))){fp(Ae,it,l,Ee);break e}ot&&ot(n,be,he),n==="focusout"&&(ot=be._wrapperState)&&ot.controlled&&be.type==="number"&&on(be,"number",be.value)}switch(ot=he?$s(he):window,n){case"focusin":(hp(ot)||ot.contentEditable==="true")&&(Xs=ot,uu=he,Ja=null);break;case"focusout":Ja=uu=Xs=null;break;case"mousedown":hu=!0;break;case"contextmenu":case"mouseup":case"dragend":hu=!1,Sp(Ae,l,Ee);break;case"selectionchange":if(jv)break;case"keydown":case"keyup":Sp(Ae,l,Ee)}var lt;if(au)e:{switch(n){case"compositionstart":var pt="onCompositionStart";break e;case"compositionend":pt="onCompositionEnd";break e;case"compositionupdate":pt="onCompositionUpdate";break e}pt=void 0}else Ws?cp(n,l)&&(pt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(pt="onCompositionStart");pt&&(ap&&l.locale!=="ko"&&(Ws||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&Ws&&(lt=tp()):(Nr=Ee,eu="value"in Nr?Nr.value:Nr.textContent,Ws=!0)),ot=al(he,pt),0<ot.length&&(pt=new rp(pt,n,null,l,Ee),Ae.push({event:pt,listeners:ot}),lt?pt.data=lt:(lt=up(l),lt!==null&&(pt.data=lt)))),(lt=Uv?Fv(n,l):Dv(n,l))&&(he=al(he,"onBeforeInput"),0<he.length&&(Ee=new rp("onBeforeInput","beforeinput",null,l,Ee),Ae.push({event:Ee,listeners:he}),Ee.data=lt))}Pp(Ae,r)})}function no(n,r,l){return{instance:n,listener:r,currentTarget:l}}function al(n,r){for(var l=r+"Capture",f=[];n!==null;){var x=n,M=x.stateNode;x.tag===5&&M!==null&&(x=M,M=Ot(n,l),M!=null&&f.unshift(no(n,M,x)),M=Ot(n,r),M!=null&&f.push(no(n,M,x))),n=n.return}return f}function qs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ip(n,r,l,f,x){for(var M=r._reactName,P=[];l!==null&&l!==f;){var H=l,Y=H.alternate,he=H.stateNode;if(Y!==null&&Y===f)break;H.tag===5&&he!==null&&(H=he,x?(Y=Ot(l,M),Y!=null&&P.unshift(no(l,Y,H))):x||(Y=Ot(l,M),Y!=null&&P.push(no(l,Y,H)))),l=l.return}P.length!==0&&n.push({event:r,listeners:P})}var Kv=/\r\n?/g,Zv=/\u0000|\uFFFD/g;function Np(n){return(typeof n=="string"?n:""+n).replace(Kv,`
`).replace(Zv,"")}function ol(n,r,l){if(r=Np(r),Np(n)!==r&&l)throw Error(t(425))}function ll(){}var xu=null,vu=null;function _u(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var yu=typeof setTimeout=="function"?setTimeout:void 0,Qv=typeof clearTimeout=="function"?clearTimeout:void 0,Up=typeof Promise=="function"?Promise:void 0,Jv=typeof queueMicrotask=="function"?queueMicrotask:typeof Up<"u"?function(n){return Up.resolve(null).then(n).catch(e_)}:yu;function e_(n){setTimeout(function(){throw n})}function Su(n,r){var l=r,f=0;do{var x=l.nextSibling;if(n.removeChild(l),x&&x.nodeType===8)if(l=x.data,l==="/$"){if(f===0){n.removeChild(x),ja(r);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=x}while(l);ja(r)}function Fr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Fp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Ys=Math.random().toString(36).slice(2),qi="__reactFiber$"+Ys,io="__reactProps$"+Ys,or="__reactContainer$"+Ys,Mu="__reactEvents$"+Ys,t_="__reactListeners$"+Ys,n_="__reactHandles$"+Ys;function ps(n){var r=n[qi];if(r)return r;for(var l=n.parentNode;l;){if(r=l[or]||l[qi]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=Fp(n);n!==null;){if(l=n[qi])return l;n=Fp(n)}return r}n=l,l=n.parentNode}return null}function ro(n){return n=n[qi]||n[or],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function $s(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function cl(n){return n[io]||null}var wu=[],Ks=-1;function Dr(n){return{current:n}}function Zt(n){0>Ks||(n.current=wu[Ks],wu[Ks]=null,Ks--)}function jt(n,r){Ks++,wu[Ks]=n.current,n.current=r}var kr={},Un=Dr(kr),$n=Dr(!1),ms=kr;function Zs(n,r){var l=n.type.contextTypes;if(!l)return kr;var f=n.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===r)return f.__reactInternalMemoizedMaskedChildContext;var x={},M;for(M in l)x[M]=r[M];return f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=x),x}function Kn(n){return n=n.childContextTypes,n!=null}function ul(){Zt($n),Zt(Un)}function Dp(n,r,l){if(Un.current!==kr)throw Error(t(168));jt(Un,r),jt($n,l)}function kp(n,r,l){var f=n.stateNode;if(r=r.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var x in f)if(!(x in r))throw Error(t(108,xe(n)||"Unknown",x));return j({},l,f)}function hl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||kr,ms=Un.current,jt(Un,n),jt($n,$n.current),!0}function Op(n,r,l){var f=n.stateNode;if(!f)throw Error(t(169));l?(n=kp(n,r,ms),f.__reactInternalMemoizedMergedChildContext=n,Zt($n),Zt(Un),jt(Un,n)):Zt($n),jt($n,l)}var lr=null,fl=!1,bu=!1;function zp(n){lr===null?lr=[n]:lr.push(n)}function i_(n){fl=!0,zp(n)}function Or(){if(!bu&&lr!==null){bu=!0;var n=0,r=bt;try{var l=lr;for(bt=1;n<l.length;n++){var f=l[n];do f=f(!0);while(f!==null)}lr=null,fl=!1}catch(x){throw lr!==null&&(lr=lr.slice(n+1)),qo(Ha,Or),x}finally{bt=r,bu=!1}}return null}var Qs=[],Js=0,dl=null,pl=0,_i=[],yi=0,gs=null,cr=1,ur="";function xs(n,r){Qs[Js++]=pl,Qs[Js++]=dl,dl=n,pl=r}function Bp(n,r,l){_i[yi++]=cr,_i[yi++]=ur,_i[yi++]=gs,gs=n;var f=cr;n=ur;var x=32-Oe(f)-1;f&=~(1<<x),l+=1;var M=32-Oe(r)+x;if(30<M){var P=x-x%5;M=(f&(1<<P)-1).toString(32),f>>=P,x-=P,cr=1<<32-Oe(r)+x|l<<x|f,ur=M+n}else cr=1<<M|l<<x|f,ur=n}function Eu(n){n.return!==null&&(xs(n,1),Bp(n,1,0))}function Tu(n){for(;n===dl;)dl=Qs[--Js],Qs[Js]=null,pl=Qs[--Js],Qs[Js]=null;for(;n===gs;)gs=_i[--yi],_i[yi]=null,ur=_i[--yi],_i[yi]=null,cr=_i[--yi],_i[yi]=null}var ci=null,ui=null,en=!1,Ii=null;function Hp(n,r){var l=bi(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Vp(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,ci=n,ui=Fr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,ci=n,ui=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=gs!==null?{id:cr,overflow:ur}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=bi(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,ci=n,ui=null,!0):!1;default:return!1}}function Cu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Au(n){if(en){var r=ui;if(r){var l=r;if(!Vp(n,r)){if(Cu(n))throw Error(t(418));r=Fr(l.nextSibling);var f=ci;r&&Vp(n,r)?Hp(f,l):(n.flags=n.flags&-4097|2,en=!1,ci=n)}}else{if(Cu(n))throw Error(t(418));n.flags=n.flags&-4097|2,en=!1,ci=n}}}function Gp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ci=n}function ml(n){if(n!==ci)return!1;if(!en)return Gp(n),en=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!_u(n.type,n.memoizedProps)),r&&(r=ui)){if(Cu(n))throw Wp(),Error(t(418));for(;r;)Hp(n,r),r=Fr(r.nextSibling)}if(Gp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){ui=Fr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}ui=null}}else ui=ci?Fr(n.stateNode.nextSibling):null;return!0}function Wp(){for(var n=ui;n;)n=Fr(n.nextSibling)}function ea(){ui=ci=null,en=!1}function Ru(n){Ii===null?Ii=[n]:Ii.push(n)}var r_=E.ReactCurrentBatchConfig;function so(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,n));var x=f,M=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===M?r.ref:(r=function(P){var H=x.refs;P===null?delete H[M]:H[M]=P},r._stringRef=M,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function gl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Xp(n){var r=n._init;return r(n._payload)}function jp(n){function r(ae,ne){if(n){var ce=ae.deletions;ce===null?(ae.deletions=[ne],ae.flags|=16):ce.push(ne)}}function l(ae,ne){if(!n)return null;for(;ne!==null;)r(ae,ne),ne=ne.sibling;return null}function f(ae,ne){for(ae=new Map;ne!==null;)ne.key!==null?ae.set(ne.key,ne):ae.set(ne.index,ne),ne=ne.sibling;return ae}function x(ae,ne){return ae=jr(ae,ne),ae.index=0,ae.sibling=null,ae}function M(ae,ne,ce){return ae.index=ce,n?(ce=ae.alternate,ce!==null?(ce=ce.index,ce<ne?(ae.flags|=2,ne):ce):(ae.flags|=2,ne)):(ae.flags|=1048576,ne)}function P(ae){return n&&ae.alternate===null&&(ae.flags|=2),ae}function H(ae,ne,ce,De){return ne===null||ne.tag!==6?(ne=yh(ce,ae.mode,De),ne.return=ae,ne):(ne=x(ne,ce),ne.return=ae,ne)}function Y(ae,ne,ce,De){var it=ce.type;return it===I?Ee(ae,ne,ce.props.children,De,ce.key):ne!==null&&(ne.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===Z&&Xp(it)===ne.type)?(De=x(ne,ce.props),De.ref=so(ae,ne,ce),De.return=ae,De):(De=Bl(ce.type,ce.key,ce.props,null,ae.mode,De),De.ref=so(ae,ne,ce),De.return=ae,De)}function he(ae,ne,ce,De){return ne===null||ne.tag!==4||ne.stateNode.containerInfo!==ce.containerInfo||ne.stateNode.implementation!==ce.implementation?(ne=Sh(ce,ae.mode,De),ne.return=ae,ne):(ne=x(ne,ce.children||[]),ne.return=ae,ne)}function Ee(ae,ne,ce,De,it){return ne===null||ne.tag!==7?(ne=Es(ce,ae.mode,De,it),ne.return=ae,ne):(ne=x(ne,ce),ne.return=ae,ne)}function Ae(ae,ne,ce){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return ne=yh(""+ne,ae.mode,ce),ne.return=ae,ne;if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case L:return ce=Bl(ne.type,ne.key,ne.props,null,ae.mode,ce),ce.ref=so(ae,null,ne),ce.return=ae,ce;case A:return ne=Sh(ne,ae.mode,ce),ne.return=ae,ne;case Z:var De=ne._init;return Ae(ae,De(ne._payload),ce)}if(te(ne)||se(ne))return ne=Es(ne,ae.mode,ce,null),ne.return=ae,ne;gl(ae,ne)}return null}function be(ae,ne,ce,De){var it=ne!==null?ne.key:null;if(typeof ce=="string"&&ce!==""||typeof ce=="number")return it!==null?null:H(ae,ne,""+ce,De);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case L:return ce.key===it?Y(ae,ne,ce,De):null;case A:return ce.key===it?he(ae,ne,ce,De):null;case Z:return it=ce._init,be(ae,ne,it(ce._payload),De)}if(te(ce)||se(ce))return it!==null?null:Ee(ae,ne,ce,De,null);gl(ae,ce)}return null}function qe(ae,ne,ce,De,it){if(typeof De=="string"&&De!==""||typeof De=="number")return ae=ae.get(ce)||null,H(ne,ae,""+De,it);if(typeof De=="object"&&De!==null){switch(De.$$typeof){case L:return ae=ae.get(De.key===null?ce:De.key)||null,Y(ne,ae,De,it);case A:return ae=ae.get(De.key===null?ce:De.key)||null,he(ne,ae,De,it);case Z:var ot=De._init;return qe(ae,ne,ce,ot(De._payload),it)}if(te(De)||se(De))return ae=ae.get(ce)||null,Ee(ne,ae,De,it,null);gl(ne,De)}return null}function Je(ae,ne,ce,De){for(var it=null,ot=null,lt=ne,pt=ne=0,Cn=null;lt!==null&&pt<ce.length;pt++){lt.index>pt?(Cn=lt,lt=null):Cn=lt.sibling;var Ut=be(ae,lt,ce[pt],De);if(Ut===null){lt===null&&(lt=Cn);break}n&&lt&&Ut.alternate===null&&r(ae,lt),ne=M(Ut,ne,pt),ot===null?it=Ut:ot.sibling=Ut,ot=Ut,lt=Cn}if(pt===ce.length)return l(ae,lt),en&&xs(ae,pt),it;if(lt===null){for(;pt<ce.length;pt++)lt=Ae(ae,ce[pt],De),lt!==null&&(ne=M(lt,ne,pt),ot===null?it=lt:ot.sibling=lt,ot=lt);return en&&xs(ae,pt),it}for(lt=f(ae,lt);pt<ce.length;pt++)Cn=qe(lt,ae,pt,ce[pt],De),Cn!==null&&(n&&Cn.alternate!==null&&lt.delete(Cn.key===null?pt:Cn.key),ne=M(Cn,ne,pt),ot===null?it=Cn:ot.sibling=Cn,ot=Cn);return n&&lt.forEach(function(qr){return r(ae,qr)}),en&&xs(ae,pt),it}function tt(ae,ne,ce,De){var it=se(ce);if(typeof it!="function")throw Error(t(150));if(ce=it.call(ce),ce==null)throw Error(t(151));for(var ot=it=null,lt=ne,pt=ne=0,Cn=null,Ut=ce.next();lt!==null&&!Ut.done;pt++,Ut=ce.next()){lt.index>pt?(Cn=lt,lt=null):Cn=lt.sibling;var qr=be(ae,lt,Ut.value,De);if(qr===null){lt===null&&(lt=Cn);break}n&&lt&&qr.alternate===null&&r(ae,lt),ne=M(qr,ne,pt),ot===null?it=qr:ot.sibling=qr,ot=qr,lt=Cn}if(Ut.done)return l(ae,lt),en&&xs(ae,pt),it;if(lt===null){for(;!Ut.done;pt++,Ut=ce.next())Ut=Ae(ae,Ut.value,De),Ut!==null&&(ne=M(Ut,ne,pt),ot===null?it=Ut:ot.sibling=Ut,ot=Ut);return en&&xs(ae,pt),it}for(lt=f(ae,lt);!Ut.done;pt++,Ut=ce.next())Ut=qe(lt,ae,pt,Ut.value,De),Ut!==null&&(n&&Ut.alternate!==null&&lt.delete(Ut.key===null?pt:Ut.key),ne=M(Ut,ne,pt),ot===null?it=Ut:ot.sibling=Ut,ot=Ut);return n&&lt.forEach(function(k_){return r(ae,k_)}),en&&xs(ae,pt),it}function ln(ae,ne,ce,De){if(typeof ce=="object"&&ce!==null&&ce.type===I&&ce.key===null&&(ce=ce.props.children),typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case L:e:{for(var it=ce.key,ot=ne;ot!==null;){if(ot.key===it){if(it=ce.type,it===I){if(ot.tag===7){l(ae,ot.sibling),ne=x(ot,ce.props.children),ne.return=ae,ae=ne;break e}}else if(ot.elementType===it||typeof it=="object"&&it!==null&&it.$$typeof===Z&&Xp(it)===ot.type){l(ae,ot.sibling),ne=x(ot,ce.props),ne.ref=so(ae,ot,ce),ne.return=ae,ae=ne;break e}l(ae,ot);break}else r(ae,ot);ot=ot.sibling}ce.type===I?(ne=Es(ce.props.children,ae.mode,De,ce.key),ne.return=ae,ae=ne):(De=Bl(ce.type,ce.key,ce.props,null,ae.mode,De),De.ref=so(ae,ne,ce),De.return=ae,ae=De)}return P(ae);case A:e:{for(ot=ce.key;ne!==null;){if(ne.key===ot)if(ne.tag===4&&ne.stateNode.containerInfo===ce.containerInfo&&ne.stateNode.implementation===ce.implementation){l(ae,ne.sibling),ne=x(ne,ce.children||[]),ne.return=ae,ae=ne;break e}else{l(ae,ne);break}else r(ae,ne);ne=ne.sibling}ne=Sh(ce,ae.mode,De),ne.return=ae,ae=ne}return P(ae);case Z:return ot=ce._init,ln(ae,ne,ot(ce._payload),De)}if(te(ce))return Je(ae,ne,ce,De);if(se(ce))return tt(ae,ne,ce,De);gl(ae,ce)}return typeof ce=="string"&&ce!==""||typeof ce=="number"?(ce=""+ce,ne!==null&&ne.tag===6?(l(ae,ne.sibling),ne=x(ne,ce),ne.return=ae,ae=ne):(l(ae,ne),ne=yh(ce,ae.mode,De),ne.return=ae,ae=ne),P(ae)):l(ae,ne)}return ln}var ta=jp(!0),qp=jp(!1),xl=Dr(null),vl=null,na=null,Pu=null;function Lu(){Pu=na=vl=null}function Iu(n){var r=xl.current;Zt(xl),n._currentValue=r}function Nu(n,r,l){for(;n!==null;){var f=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,f!==null&&(f.childLanes|=r)):f!==null&&(f.childLanes&r)!==r&&(f.childLanes|=r),n===l)break;n=n.return}}function ia(n,r){vl=n,Pu=na=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Zn=!0),n.firstContext=null)}function Si(n){var r=n._currentValue;if(Pu!==n)if(n={context:n,memoizedValue:r,next:null},na===null){if(vl===null)throw Error(t(308));na=n,vl.dependencies={lanes:0,firstContext:n}}else na=na.next=n;return r}var vs=null;function Uu(n){vs===null?vs=[n]:vs.push(n)}function Yp(n,r,l,f){var x=r.interleaved;return x===null?(l.next=l,Uu(r)):(l.next=x.next,x.next=l),r.interleaved=l,hr(n,f)}function hr(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var zr=!1;function Fu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $p(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function fr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Br(n,r,l){var f=n.updateQueue;if(f===null)return null;if(f=f.shared,(It&2)!==0){var x=f.pending;return x===null?r.next=r:(r.next=x.next,x.next=r),f.pending=r,hr(n,l)}return x=f.interleaved,x===null?(r.next=r,Uu(f)):(r.next=x.next,x.next=r),f.interleaved=r,hr(n,l)}function _l(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,Yn(n,l)}}function Kp(n,r){var l=n.updateQueue,f=n.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var x=null,M=null;if(l=l.firstBaseUpdate,l!==null){do{var P={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};M===null?x=M=P:M=M.next=P,l=l.next}while(l!==null);M===null?x=M=r:M=M.next=r}else x=M=r;l={baseState:f.baseState,firstBaseUpdate:x,lastBaseUpdate:M,shared:f.shared,effects:f.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function yl(n,r,l,f){var x=n.updateQueue;zr=!1;var M=x.firstBaseUpdate,P=x.lastBaseUpdate,H=x.shared.pending;if(H!==null){x.shared.pending=null;var Y=H,he=Y.next;Y.next=null,P===null?M=he:P.next=he,P=Y;var Ee=n.alternate;Ee!==null&&(Ee=Ee.updateQueue,H=Ee.lastBaseUpdate,H!==P&&(H===null?Ee.firstBaseUpdate=he:H.next=he,Ee.lastBaseUpdate=Y))}if(M!==null){var Ae=x.baseState;P=0,Ee=he=Y=null,H=M;do{var be=H.lane,qe=H.eventTime;if((f&be)===be){Ee!==null&&(Ee=Ee.next={eventTime:qe,lane:0,tag:H.tag,payload:H.payload,callback:H.callback,next:null});e:{var Je=n,tt=H;switch(be=r,qe=l,tt.tag){case 1:if(Je=tt.payload,typeof Je=="function"){Ae=Je.call(qe,Ae,be);break e}Ae=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=tt.payload,be=typeof Je=="function"?Je.call(qe,Ae,be):Je,be==null)break e;Ae=j({},Ae,be);break e;case 2:zr=!0}}H.callback!==null&&H.lane!==0&&(n.flags|=64,be=x.effects,be===null?x.effects=[H]:be.push(H))}else qe={eventTime:qe,lane:be,tag:H.tag,payload:H.payload,callback:H.callback,next:null},Ee===null?(he=Ee=qe,Y=Ae):Ee=Ee.next=qe,P|=be;if(H=H.next,H===null){if(H=x.shared.pending,H===null)break;be=H,H=be.next,be.next=null,x.lastBaseUpdate=be,x.shared.pending=null}}while(!0);if(Ee===null&&(Y=Ae),x.baseState=Y,x.firstBaseUpdate=he,x.lastBaseUpdate=Ee,r=x.shared.interleaved,r!==null){x=r;do P|=x.lane,x=x.next;while(x!==r)}else M===null&&(x.shared.lanes=0);Ss|=P,n.lanes=P,n.memoizedState=Ae}}function Zp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var f=n[r],x=f.callback;if(x!==null){if(f.callback=null,f=l,typeof x!="function")throw Error(t(191,x));x.call(f)}}}var ao={},Yi=Dr(ao),oo=Dr(ao),lo=Dr(ao);function _s(n){if(n===ao)throw Error(t(174));return n}function Du(n,r){switch(jt(lo,r),jt(oo,n),jt(Yi,ao),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:R(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=R(r,n)}Zt(Yi),jt(Yi,r)}function ra(){Zt(Yi),Zt(oo),Zt(lo)}function Qp(n){_s(lo.current);var r=_s(Yi.current),l=R(r,n.type);r!==l&&(jt(oo,n),jt(Yi,l))}function ku(n){oo.current===n&&(Zt(Yi),Zt(oo))}var nn=Dr(0);function Sl(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Ou=[];function zu(){for(var n=0;n<Ou.length;n++)Ou[n]._workInProgressVersionPrimary=null;Ou.length=0}var Ml=E.ReactCurrentDispatcher,Bu=E.ReactCurrentBatchConfig,ys=0,rn=null,_n=null,En=null,wl=!1,co=!1,uo=0,s_=0;function Fn(){throw Error(t(321))}function Hu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!Li(n[l],r[l]))return!1;return!0}function Vu(n,r,l,f,x,M){if(ys=M,rn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Ml.current=n===null||n.memoizedState===null?c_:u_,n=l(f,x),co){M=0;do{if(co=!1,uo=0,25<=M)throw Error(t(301));M+=1,En=_n=null,r.updateQueue=null,Ml.current=h_,n=l(f,x)}while(co)}if(Ml.current=Tl,r=_n!==null&&_n.next!==null,ys=0,En=_n=rn=null,wl=!1,r)throw Error(t(300));return n}function Gu(){var n=uo!==0;return uo=0,n}function $i(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?rn.memoizedState=En=n:En=En.next=n,En}function Mi(){if(_n===null){var n=rn.alternate;n=n!==null?n.memoizedState:null}else n=_n.next;var r=En===null?rn.memoizedState:En.next;if(r!==null)En=r,_n=n;else{if(n===null)throw Error(t(310));_n=n,n={memoizedState:_n.memoizedState,baseState:_n.baseState,baseQueue:_n.baseQueue,queue:_n.queue,next:null},En===null?rn.memoizedState=En=n:En=En.next=n}return En}function ho(n,r){return typeof r=="function"?r(n):r}function Wu(n){var r=Mi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=_n,x=f.baseQueue,M=l.pending;if(M!==null){if(x!==null){var P=x.next;x.next=M.next,M.next=P}f.baseQueue=x=M,l.pending=null}if(x!==null){M=x.next,f=f.baseState;var H=P=null,Y=null,he=M;do{var Ee=he.lane;if((ys&Ee)===Ee)Y!==null&&(Y=Y.next={lane:0,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),f=he.hasEagerState?he.eagerState:n(f,he.action);else{var Ae={lane:Ee,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null};Y===null?(H=Y=Ae,P=f):Y=Y.next=Ae,rn.lanes|=Ee,Ss|=Ee}he=he.next}while(he!==null&&he!==M);Y===null?P=f:Y.next=H,Li(f,r.memoizedState)||(Zn=!0),r.memoizedState=f,r.baseState=P,r.baseQueue=Y,l.lastRenderedState=f}if(n=l.interleaved,n!==null){x=n;do M=x.lane,rn.lanes|=M,Ss|=M,x=x.next;while(x!==n)}else x===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function Xu(n){var r=Mi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=l.dispatch,x=l.pending,M=r.memoizedState;if(x!==null){l.pending=null;var P=x=x.next;do M=n(M,P.action),P=P.next;while(P!==x);Li(M,r.memoizedState)||(Zn=!0),r.memoizedState=M,r.baseQueue===null&&(r.baseState=M),l.lastRenderedState=M}return[M,f]}function Jp(){}function em(n,r){var l=rn,f=Mi(),x=r(),M=!Li(f.memoizedState,x);if(M&&(f.memoizedState=x,Zn=!0),f=f.queue,ju(im.bind(null,l,f,n),[n]),f.getSnapshot!==r||M||En!==null&&En.memoizedState.tag&1){if(l.flags|=2048,fo(9,nm.bind(null,l,f,x,r),void 0,null),Tn===null)throw Error(t(349));(ys&30)!==0||tm(l,r,x)}return x}function tm(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=rn.updateQueue,r===null?(r={lastEffect:null,stores:null},rn.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function nm(n,r,l,f){r.value=l,r.getSnapshot=f,rm(r)&&sm(n)}function im(n,r,l){return l(function(){rm(r)&&sm(n)})}function rm(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!Li(n,l)}catch{return!0}}function sm(n){var r=hr(n,1);r!==null&&Di(r,n,1,-1)}function am(n){var r=$i();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:n},r.queue=n,n=n.dispatch=l_.bind(null,rn,n),[r.memoizedState,n]}function fo(n,r,l,f){return n={tag:n,create:r,destroy:l,deps:f,next:null},r=rn.updateQueue,r===null?(r={lastEffect:null,stores:null},rn.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(f=l.next,l.next=n,n.next=f,r.lastEffect=n)),n}function om(){return Mi().memoizedState}function bl(n,r,l,f){var x=$i();rn.flags|=n,x.memoizedState=fo(1|r,l,void 0,f===void 0?null:f)}function El(n,r,l,f){var x=Mi();f=f===void 0?null:f;var M=void 0;if(_n!==null){var P=_n.memoizedState;if(M=P.destroy,f!==null&&Hu(f,P.deps)){x.memoizedState=fo(r,l,M,f);return}}rn.flags|=n,x.memoizedState=fo(1|r,l,M,f)}function lm(n,r){return bl(8390656,8,n,r)}function ju(n,r){return El(2048,8,n,r)}function cm(n,r){return El(4,2,n,r)}function um(n,r){return El(4,4,n,r)}function hm(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function fm(n,r,l){return l=l!=null?l.concat([n]):null,El(4,4,hm.bind(null,r,n),l)}function qu(){}function dm(n,r){var l=Mi();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&Hu(r,f[1])?f[0]:(l.memoizedState=[n,r],n)}function pm(n,r){var l=Mi();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&Hu(r,f[1])?f[0]:(n=n(),l.memoizedState=[n,r],n)}function mm(n,r,l){return(ys&21)===0?(n.baseState&&(n.baseState=!1,Zn=!0),n.memoizedState=l):(Li(l,r)||(l=je(),rn.lanes|=l,Ss|=l,n.baseState=!0),r)}function a_(n,r){var l=bt;bt=l!==0&&4>l?l:4,n(!0);var f=Bu.transition;Bu.transition={};try{n(!1),r()}finally{bt=l,Bu.transition=f}}function gm(){return Mi().memoizedState}function o_(n,r,l){var f=Wr(n);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},xm(n))vm(r,l);else if(l=Yp(n,r,l,f),l!==null){var x=Gn();Di(l,n,f,x),_m(l,r,f)}}function l_(n,r,l){var f=Wr(n),x={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(xm(n))vm(r,x);else{var M=n.alternate;if(n.lanes===0&&(M===null||M.lanes===0)&&(M=r.lastRenderedReducer,M!==null))try{var P=r.lastRenderedState,H=M(P,l);if(x.hasEagerState=!0,x.eagerState=H,Li(H,P)){var Y=r.interleaved;Y===null?(x.next=x,Uu(r)):(x.next=Y.next,Y.next=x),r.interleaved=x;return}}catch{}finally{}l=Yp(n,r,x,f),l!==null&&(x=Gn(),Di(l,n,f,x),_m(l,r,f))}}function xm(n){var r=n.alternate;return n===rn||r!==null&&r===rn}function vm(n,r){co=wl=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function _m(n,r,l){if((l&4194240)!==0){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,Yn(n,l)}}var Tl={readContext:Si,useCallback:Fn,useContext:Fn,useEffect:Fn,useImperativeHandle:Fn,useInsertionEffect:Fn,useLayoutEffect:Fn,useMemo:Fn,useReducer:Fn,useRef:Fn,useState:Fn,useDebugValue:Fn,useDeferredValue:Fn,useTransition:Fn,useMutableSource:Fn,useSyncExternalStore:Fn,useId:Fn,unstable_isNewReconciler:!1},c_={readContext:Si,useCallback:function(n,r){return $i().memoizedState=[n,r===void 0?null:r],n},useContext:Si,useEffect:lm,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,bl(4194308,4,hm.bind(null,r,n),l)},useLayoutEffect:function(n,r){return bl(4194308,4,n,r)},useInsertionEffect:function(n,r){return bl(4,2,n,r)},useMemo:function(n,r){var l=$i();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var f=$i();return r=l!==void 0?l(r):r,f.memoizedState=f.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},f.queue=n,n=n.dispatch=o_.bind(null,rn,n),[f.memoizedState,n]},useRef:function(n){var r=$i();return n={current:n},r.memoizedState=n},useState:am,useDebugValue:qu,useDeferredValue:function(n){return $i().memoizedState=n},useTransition:function(){var n=am(!1),r=n[0];return n=a_.bind(null,n[1]),$i().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var f=rn,x=$i();if(en){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),Tn===null)throw Error(t(349));(ys&30)!==0||tm(f,r,l)}x.memoizedState=l;var M={value:l,getSnapshot:r};return x.queue=M,lm(im.bind(null,f,M,n),[n]),f.flags|=2048,fo(9,nm.bind(null,f,M,l,r),void 0,null),l},useId:function(){var n=$i(),r=Tn.identifierPrefix;if(en){var l=ur,f=cr;l=(f&~(1<<32-Oe(f)-1)).toString(32)+l,r=":"+r+"R"+l,l=uo++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=s_++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},u_={readContext:Si,useCallback:dm,useContext:Si,useEffect:ju,useImperativeHandle:fm,useInsertionEffect:cm,useLayoutEffect:um,useMemo:pm,useReducer:Wu,useRef:om,useState:function(){return Wu(ho)},useDebugValue:qu,useDeferredValue:function(n){var r=Mi();return mm(r,_n.memoizedState,n)},useTransition:function(){var n=Wu(ho)[0],r=Mi().memoizedState;return[n,r]},useMutableSource:Jp,useSyncExternalStore:em,useId:gm,unstable_isNewReconciler:!1},h_={readContext:Si,useCallback:dm,useContext:Si,useEffect:ju,useImperativeHandle:fm,useInsertionEffect:cm,useLayoutEffect:um,useMemo:pm,useReducer:Xu,useRef:om,useState:function(){return Xu(ho)},useDebugValue:qu,useDeferredValue:function(n){var r=Mi();return _n===null?r.memoizedState=n:mm(r,_n.memoizedState,n)},useTransition:function(){var n=Xu(ho)[0],r=Mi().memoizedState;return[n,r]},useMutableSource:Jp,useSyncExternalStore:em,useId:gm,unstable_isNewReconciler:!1};function Ni(n,r){if(n&&n.defaultProps){r=j({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Yu(n,r,l,f){r=n.memoizedState,l=l(f,r),l=l==null?r:j({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Cl={isMounted:function(n){return(n=n._reactInternals)?Le(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var f=Gn(),x=Wr(n),M=fr(f,x);M.payload=r,l!=null&&(M.callback=l),r=Br(n,M,x),r!==null&&(Di(r,n,x,f),_l(r,n,x))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var f=Gn(),x=Wr(n),M=fr(f,x);M.tag=1,M.payload=r,l!=null&&(M.callback=l),r=Br(n,M,x),r!==null&&(Di(r,n,x,f),_l(r,n,x))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Gn(),f=Wr(n),x=fr(l,f);x.tag=2,r!=null&&(x.callback=r),r=Br(n,x,f),r!==null&&(Di(r,n,f,l),_l(r,n,f))}};function ym(n,r,l,f,x,M,P){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(f,M,P):r.prototype&&r.prototype.isPureReactComponent?!Qa(l,f)||!Qa(x,M):!0}function Sm(n,r,l){var f=!1,x=kr,M=r.contextType;return typeof M=="object"&&M!==null?M=Si(M):(x=Kn(r)?ms:Un.current,f=r.contextTypes,M=(f=f!=null)?Zs(n,x):kr),r=new r(l,M),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Cl,n.stateNode=r,r._reactInternals=n,f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=x,n.__reactInternalMemoizedMaskedChildContext=M),r}function Mm(n,r,l,f){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,f),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,f),r.state!==n&&Cl.enqueueReplaceState(r,r.state,null)}function $u(n,r,l,f){var x=n.stateNode;x.props=l,x.state=n.memoizedState,x.refs={},Fu(n);var M=r.contextType;typeof M=="object"&&M!==null?x.context=Si(M):(M=Kn(r)?ms:Un.current,x.context=Zs(n,M)),x.state=n.memoizedState,M=r.getDerivedStateFromProps,typeof M=="function"&&(Yu(n,r,M,l),x.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof x.getSnapshotBeforeUpdate=="function"||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(r=x.state,typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount(),r!==x.state&&Cl.enqueueReplaceState(x,x.state,null),yl(n,l,x,f),x.state=n.memoizedState),typeof x.componentDidMount=="function"&&(n.flags|=4194308)}function sa(n,r){try{var l="",f=r;do l+=_e(f),f=f.return;while(f);var x=l}catch(M){x=`
Error generating stack: `+M.message+`
`+M.stack}return{value:n,source:r,stack:x,digest:null}}function Ku(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Zu(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var f_=typeof WeakMap=="function"?WeakMap:Map;function wm(n,r,l){l=fr(-1,l),l.tag=3,l.payload={element:null};var f=r.value;return l.callback=function(){Ul||(Ul=!0,fh=f),Zu(n,r)},l}function bm(n,r,l){l=fr(-1,l),l.tag=3;var f=n.type.getDerivedStateFromError;if(typeof f=="function"){var x=r.value;l.payload=function(){return f(x)},l.callback=function(){Zu(n,r)}}var M=n.stateNode;return M!==null&&typeof M.componentDidCatch=="function"&&(l.callback=function(){Zu(n,r),typeof f!="function"&&(Vr===null?Vr=new Set([this]):Vr.add(this));var P=r.stack;this.componentDidCatch(r.value,{componentStack:P!==null?P:""})}),l}function Em(n,r,l){var f=n.pingCache;if(f===null){f=n.pingCache=new f_;var x=new Set;f.set(r,x)}else x=f.get(r),x===void 0&&(x=new Set,f.set(r,x));x.has(l)||(x.add(l),n=T_.bind(null,n,r,l),r.then(n,n))}function Tm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Cm(n,r,l,f,x){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=fr(-1,1),r.tag=2,Br(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=x,n)}var d_=E.ReactCurrentOwner,Zn=!1;function Vn(n,r,l,f){r.child=n===null?qp(r,null,l,f):ta(r,n.child,l,f)}function Am(n,r,l,f,x){l=l.render;var M=r.ref;return ia(r,x),f=Vu(n,r,l,f,M,x),l=Gu(),n!==null&&!Zn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~x,dr(n,r,x)):(en&&l&&Eu(r),r.flags|=1,Vn(n,r,f,x),r.child)}function Rm(n,r,l,f,x){if(n===null){var M=l.type;return typeof M=="function"&&!_h(M)&&M.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=M,Pm(n,r,M,f,x)):(n=Bl(l.type,null,f,r,r.mode,x),n.ref=r.ref,n.return=r,r.child=n)}if(M=n.child,(n.lanes&x)===0){var P=M.memoizedProps;if(l=l.compare,l=l!==null?l:Qa,l(P,f)&&n.ref===r.ref)return dr(n,r,x)}return r.flags|=1,n=jr(M,f),n.ref=r.ref,n.return=r,r.child=n}function Pm(n,r,l,f,x){if(n!==null){var M=n.memoizedProps;if(Qa(M,f)&&n.ref===r.ref)if(Zn=!1,r.pendingProps=f=M,(n.lanes&x)!==0)(n.flags&131072)!==0&&(Zn=!0);else return r.lanes=n.lanes,dr(n,r,x)}return Qu(n,r,l,f,x)}function Lm(n,r,l){var f=r.pendingProps,x=f.children,M=n!==null?n.memoizedState:null;if(f.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},jt(oa,hi),hi|=l;else{if((l&1073741824)===0)return n=M!==null?M.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,jt(oa,hi),hi|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=M!==null?M.baseLanes:l,jt(oa,hi),hi|=f}else M!==null?(f=M.baseLanes|l,r.memoizedState=null):f=l,jt(oa,hi),hi|=f;return Vn(n,r,x,l),r.child}function Im(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Qu(n,r,l,f,x){var M=Kn(l)?ms:Un.current;return M=Zs(r,M),ia(r,x),l=Vu(n,r,l,f,M,x),f=Gu(),n!==null&&!Zn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~x,dr(n,r,x)):(en&&f&&Eu(r),r.flags|=1,Vn(n,r,l,x),r.child)}function Nm(n,r,l,f,x){if(Kn(l)){var M=!0;hl(r)}else M=!1;if(ia(r,x),r.stateNode===null)Rl(n,r),Sm(r,l,f),$u(r,l,f,x),f=!0;else if(n===null){var P=r.stateNode,H=r.memoizedProps;P.props=H;var Y=P.context,he=l.contextType;typeof he=="object"&&he!==null?he=Si(he):(he=Kn(l)?ms:Un.current,he=Zs(r,he));var Ee=l.getDerivedStateFromProps,Ae=typeof Ee=="function"||typeof P.getSnapshotBeforeUpdate=="function";Ae||typeof P.UNSAFE_componentWillReceiveProps!="function"&&typeof P.componentWillReceiveProps!="function"||(H!==f||Y!==he)&&Mm(r,P,f,he),zr=!1;var be=r.memoizedState;P.state=be,yl(r,f,P,x),Y=r.memoizedState,H!==f||be!==Y||$n.current||zr?(typeof Ee=="function"&&(Yu(r,l,Ee,f),Y=r.memoizedState),(H=zr||ym(r,l,H,f,be,Y,he))?(Ae||typeof P.UNSAFE_componentWillMount!="function"&&typeof P.componentWillMount!="function"||(typeof P.componentWillMount=="function"&&P.componentWillMount(),typeof P.UNSAFE_componentWillMount=="function"&&P.UNSAFE_componentWillMount()),typeof P.componentDidMount=="function"&&(r.flags|=4194308)):(typeof P.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=f,r.memoizedState=Y),P.props=f,P.state=Y,P.context=he,f=H):(typeof P.componentDidMount=="function"&&(r.flags|=4194308),f=!1)}else{P=r.stateNode,$p(n,r),H=r.memoizedProps,he=r.type===r.elementType?H:Ni(r.type,H),P.props=he,Ae=r.pendingProps,be=P.context,Y=l.contextType,typeof Y=="object"&&Y!==null?Y=Si(Y):(Y=Kn(l)?ms:Un.current,Y=Zs(r,Y));var qe=l.getDerivedStateFromProps;(Ee=typeof qe=="function"||typeof P.getSnapshotBeforeUpdate=="function")||typeof P.UNSAFE_componentWillReceiveProps!="function"&&typeof P.componentWillReceiveProps!="function"||(H!==Ae||be!==Y)&&Mm(r,P,f,Y),zr=!1,be=r.memoizedState,P.state=be,yl(r,f,P,x);var Je=r.memoizedState;H!==Ae||be!==Je||$n.current||zr?(typeof qe=="function"&&(Yu(r,l,qe,f),Je=r.memoizedState),(he=zr||ym(r,l,he,f,be,Je,Y)||!1)?(Ee||typeof P.UNSAFE_componentWillUpdate!="function"&&typeof P.componentWillUpdate!="function"||(typeof P.componentWillUpdate=="function"&&P.componentWillUpdate(f,Je,Y),typeof P.UNSAFE_componentWillUpdate=="function"&&P.UNSAFE_componentWillUpdate(f,Je,Y)),typeof P.componentDidUpdate=="function"&&(r.flags|=4),typeof P.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof P.componentDidUpdate!="function"||H===n.memoizedProps&&be===n.memoizedState||(r.flags|=4),typeof P.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&be===n.memoizedState||(r.flags|=1024),r.memoizedProps=f,r.memoizedState=Je),P.props=f,P.state=Je,P.context=Y,f=he):(typeof P.componentDidUpdate!="function"||H===n.memoizedProps&&be===n.memoizedState||(r.flags|=4),typeof P.getSnapshotBeforeUpdate!="function"||H===n.memoizedProps&&be===n.memoizedState||(r.flags|=1024),f=!1)}return Ju(n,r,l,f,M,x)}function Ju(n,r,l,f,x,M){Im(n,r);var P=(r.flags&128)!==0;if(!f&&!P)return x&&Op(r,l,!1),dr(n,r,M);f=r.stateNode,d_.current=r;var H=P&&typeof l.getDerivedStateFromError!="function"?null:f.render();return r.flags|=1,n!==null&&P?(r.child=ta(r,n.child,null,M),r.child=ta(r,null,H,M)):Vn(n,r,H,M),r.memoizedState=f.state,x&&Op(r,l,!0),r.child}function Um(n){var r=n.stateNode;r.pendingContext?Dp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Dp(n,r.context,!1),Du(n,r.containerInfo)}function Fm(n,r,l,f,x){return ea(),Ru(x),r.flags|=256,Vn(n,r,l,f),r.child}var eh={dehydrated:null,treeContext:null,retryLane:0};function th(n){return{baseLanes:n,cachePool:null,transitions:null}}function Dm(n,r,l){var f=r.pendingProps,x=nn.current,M=!1,P=(r.flags&128)!==0,H;if((H=P)||(H=n!==null&&n.memoizedState===null?!1:(x&2)!==0),H?(M=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(x|=1),jt(nn,x&1),n===null)return Au(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(P=f.children,n=f.fallback,M?(f=r.mode,M=r.child,P={mode:"hidden",children:P},(f&1)===0&&M!==null?(M.childLanes=0,M.pendingProps=P):M=Hl(P,f,0,null),n=Es(n,f,l,null),M.return=r,n.return=r,M.sibling=n,r.child=M,r.child.memoizedState=th(l),r.memoizedState=eh,n):nh(r,P));if(x=n.memoizedState,x!==null&&(H=x.dehydrated,H!==null))return p_(n,r,P,f,H,x,l);if(M){M=f.fallback,P=r.mode,x=n.child,H=x.sibling;var Y={mode:"hidden",children:f.children};return(P&1)===0&&r.child!==x?(f=r.child,f.childLanes=0,f.pendingProps=Y,r.deletions=null):(f=jr(x,Y),f.subtreeFlags=x.subtreeFlags&14680064),H!==null?M=jr(H,M):(M=Es(M,P,l,null),M.flags|=2),M.return=r,f.return=r,f.sibling=M,r.child=f,f=M,M=r.child,P=n.child.memoizedState,P=P===null?th(l):{baseLanes:P.baseLanes|l,cachePool:null,transitions:P.transitions},M.memoizedState=P,M.childLanes=n.childLanes&~l,r.memoizedState=eh,f}return M=n.child,n=M.sibling,f=jr(M,{mode:"visible",children:f.children}),(r.mode&1)===0&&(f.lanes=l),f.return=r,f.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=f,r.memoizedState=null,f}function nh(n,r){return r=Hl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Al(n,r,l,f){return f!==null&&Ru(f),ta(r,n.child,null,l),n=nh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function p_(n,r,l,f,x,M,P){if(l)return r.flags&256?(r.flags&=-257,f=Ku(Error(t(422))),Al(n,r,P,f)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(M=f.fallback,x=r.mode,f=Hl({mode:"visible",children:f.children},x,0,null),M=Es(M,x,P,null),M.flags|=2,f.return=r,M.return=r,f.sibling=M,r.child=f,(r.mode&1)!==0&&ta(r,n.child,null,P),r.child.memoizedState=th(P),r.memoizedState=eh,M);if((r.mode&1)===0)return Al(n,r,P,null);if(x.data==="$!"){if(f=x.nextSibling&&x.nextSibling.dataset,f)var H=f.dgst;return f=H,M=Error(t(419)),f=Ku(M,f,void 0),Al(n,r,P,f)}if(H=(P&n.childLanes)!==0,Zn||H){if(f=Tn,f!==null){switch(P&-P){case 4:x=2;break;case 16:x=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:x=32;break;case 536870912:x=268435456;break;default:x=0}x=(x&(f.suspendedLanes|P))!==0?0:x,x!==0&&x!==M.retryLane&&(M.retryLane=x,hr(n,x),Di(f,n,x,-1))}return vh(),f=Ku(Error(t(421))),Al(n,r,P,f)}return x.data==="$?"?(r.flags|=128,r.child=n.child,r=C_.bind(null,n),x._reactRetry=r,null):(n=M.treeContext,ui=Fr(x.nextSibling),ci=r,en=!0,Ii=null,n!==null&&(_i[yi++]=cr,_i[yi++]=ur,_i[yi++]=gs,cr=n.id,ur=n.overflow,gs=r),r=nh(r,f.children),r.flags|=4096,r)}function km(n,r,l){n.lanes|=r;var f=n.alternate;f!==null&&(f.lanes|=r),Nu(n.return,r,l)}function ih(n,r,l,f,x){var M=n.memoizedState;M===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:x}:(M.isBackwards=r,M.rendering=null,M.renderingStartTime=0,M.last=f,M.tail=l,M.tailMode=x)}function Om(n,r,l){var f=r.pendingProps,x=f.revealOrder,M=f.tail;if(Vn(n,r,f.children,l),f=nn.current,(f&2)!==0)f=f&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&km(n,l,r);else if(n.tag===19)km(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}f&=1}if(jt(nn,f),(r.mode&1)===0)r.memoizedState=null;else switch(x){case"forwards":for(l=r.child,x=null;l!==null;)n=l.alternate,n!==null&&Sl(n)===null&&(x=l),l=l.sibling;l=x,l===null?(x=r.child,r.child=null):(x=l.sibling,l.sibling=null),ih(r,!1,x,l,M);break;case"backwards":for(l=null,x=r.child,r.child=null;x!==null;){if(n=x.alternate,n!==null&&Sl(n)===null){r.child=x;break}n=x.sibling,x.sibling=l,l=x,x=n}ih(r,!0,l,null,M);break;case"together":ih(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Rl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function dr(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),Ss|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=jr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=jr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function m_(n,r,l){switch(r.tag){case 3:Um(r),ea();break;case 5:Qp(r);break;case 1:Kn(r.type)&&hl(r);break;case 4:Du(r,r.stateNode.containerInfo);break;case 10:var f=r.type._context,x=r.memoizedProps.value;jt(xl,f._currentValue),f._currentValue=x;break;case 13:if(f=r.memoizedState,f!==null)return f.dehydrated!==null?(jt(nn,nn.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?Dm(n,r,l):(jt(nn,nn.current&1),n=dr(n,r,l),n!==null?n.sibling:null);jt(nn,nn.current&1);break;case 19:if(f=(l&r.childLanes)!==0,(n.flags&128)!==0){if(f)return Om(n,r,l);r.flags|=128}if(x=r.memoizedState,x!==null&&(x.rendering=null,x.tail=null,x.lastEffect=null),jt(nn,nn.current),f)break;return null;case 22:case 23:return r.lanes=0,Lm(n,r,l)}return dr(n,r,l)}var zm,rh,Bm,Hm;zm=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},rh=function(){},Bm=function(n,r,l,f){var x=n.memoizedProps;if(x!==f){n=r.stateNode,_s(Yi.current);var M=null;switch(l){case"input":x=Tt(n,x),f=Tt(n,f),M=[];break;case"select":x=j({},x,{value:void 0}),f=j({},f,{value:void 0}),M=[];break;case"textarea":x=_t(n,x),f=_t(n,f),M=[];break;default:typeof x.onClick!="function"&&typeof f.onClick=="function"&&(n.onclick=ll)}Ue(l,f);var P;l=null;for(he in x)if(!f.hasOwnProperty(he)&&x.hasOwnProperty(he)&&x[he]!=null)if(he==="style"){var H=x[he];for(P in H)H.hasOwnProperty(P)&&(l||(l={}),l[P]="")}else he!=="dangerouslySetInnerHTML"&&he!=="children"&&he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&he!=="autoFocus"&&(s.hasOwnProperty(he)?M||(M=[]):(M=M||[]).push(he,null));for(he in f){var Y=f[he];if(H=x!=null?x[he]:void 0,f.hasOwnProperty(he)&&Y!==H&&(Y!=null||H!=null))if(he==="style")if(H){for(P in H)!H.hasOwnProperty(P)||Y&&Y.hasOwnProperty(P)||(l||(l={}),l[P]="");for(P in Y)Y.hasOwnProperty(P)&&H[P]!==Y[P]&&(l||(l={}),l[P]=Y[P])}else l||(M||(M=[]),M.push(he,l)),l=Y;else he==="dangerouslySetInnerHTML"?(Y=Y?Y.__html:void 0,H=H?H.__html:void 0,Y!=null&&H!==Y&&(M=M||[]).push(he,Y)):he==="children"?typeof Y!="string"&&typeof Y!="number"||(M=M||[]).push(he,""+Y):he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&(s.hasOwnProperty(he)?(Y!=null&&he==="onScroll"&&Kt("scroll",n),M||H===Y||(M=[])):(M=M||[]).push(he,Y))}l&&(M=M||[]).push("style",l);var he=M;(r.updateQueue=he)&&(r.flags|=4)}},Hm=function(n,r,l,f){l!==f&&(r.flags|=4)};function po(n,r){if(!en)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:f.sibling=null}}function Dn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,f=0;if(r)for(var x=n.child;x!==null;)l|=x.lanes|x.childLanes,f|=x.subtreeFlags&14680064,f|=x.flags&14680064,x.return=n,x=x.sibling;else for(x=n.child;x!==null;)l|=x.lanes|x.childLanes,f|=x.subtreeFlags,f|=x.flags,x.return=n,x=x.sibling;return n.subtreeFlags|=f,n.childLanes=l,r}function g_(n,r,l){var f=r.pendingProps;switch(Tu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dn(r),null;case 1:return Kn(r.type)&&ul(),Dn(r),null;case 3:return f=r.stateNode,ra(),Zt($n),Zt(Un),zu(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(n===null||n.child===null)&&(ml(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Ii!==null&&(mh(Ii),Ii=null))),rh(n,r),Dn(r),null;case 5:ku(r);var x=_s(lo.current);if(l=r.type,n!==null&&r.stateNode!=null)Bm(n,r,l,f,x),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!f){if(r.stateNode===null)throw Error(t(166));return Dn(r),null}if(n=_s(Yi.current),ml(r)){f=r.stateNode,l=r.type;var M=r.memoizedProps;switch(f[qi]=r,f[io]=M,n=(r.mode&1)!==0,l){case"dialog":Kt("cancel",f),Kt("close",f);break;case"iframe":case"object":case"embed":Kt("load",f);break;case"video":case"audio":for(x=0;x<eo.length;x++)Kt(eo[x],f);break;case"source":Kt("error",f);break;case"img":case"image":case"link":Kt("error",f),Kt("load",f);break;case"details":Kt("toggle",f);break;case"input":Ct(f,M),Kt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!M.multiple},Kt("invalid",f);break;case"textarea":Ft(f,M),Kt("invalid",f)}Ue(l,M),x=null;for(var P in M)if(M.hasOwnProperty(P)){var H=M[P];P==="children"?typeof H=="string"?f.textContent!==H&&(M.suppressHydrationWarning!==!0&&ol(f.textContent,H,n),x=["children",H]):typeof H=="number"&&f.textContent!==""+H&&(M.suppressHydrationWarning!==!0&&ol(f.textContent,H,n),x=["children",""+H]):s.hasOwnProperty(P)&&H!=null&&P==="onScroll"&&Kt("scroll",f)}switch(l){case"input":$e(f),Vt(f,M,!0);break;case"textarea":$e(f),Wt(f);break;case"select":case"option":break;default:typeof M.onClick=="function"&&(f.onclick=ll)}f=x,r.updateQueue=f,f!==null&&(r.flags|=4)}else{P=x.nodeType===9?x:x.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=k(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=P.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof f.is=="string"?n=P.createElement(l,{is:f.is}):(n=P.createElement(l),l==="select"&&(P=n,f.multiple?P.multiple=!0:f.size&&(P.size=f.size))):n=P.createElementNS(n,l),n[qi]=r,n[io]=f,zm(n,r,!1,!1),r.stateNode=n;e:{switch(P=ke(l,f),l){case"dialog":Kt("cancel",n),Kt("close",n),x=f;break;case"iframe":case"object":case"embed":Kt("load",n),x=f;break;case"video":case"audio":for(x=0;x<eo.length;x++)Kt(eo[x],n);x=f;break;case"source":Kt("error",n),x=f;break;case"img":case"image":case"link":Kt("error",n),Kt("load",n),x=f;break;case"details":Kt("toggle",n),x=f;break;case"input":Ct(n,f),x=Tt(n,f),Kt("invalid",n);break;case"option":x=f;break;case"select":n._wrapperState={wasMultiple:!!f.multiple},x=j({},f,{value:void 0}),Kt("invalid",n);break;case"textarea":Ft(n,f),x=_t(n,f),Kt("invalid",n);break;default:x=f}Ue(l,x),H=x;for(M in H)if(H.hasOwnProperty(M)){var Y=H[M];M==="style"?ve(n,Y):M==="dangerouslySetInnerHTML"?(Y=Y?Y.__html:void 0,Y!=null&&ye(n,Y)):M==="children"?typeof Y=="string"?(l!=="textarea"||Y!=="")&&Me(n,Y):typeof Y=="number"&&Me(n,""+Y):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(s.hasOwnProperty(M)?Y!=null&&M==="onScroll"&&Kt("scroll",n):Y!=null&&C(n,M,Y,P))}switch(l){case"input":$e(n),Vt(n,f,!1);break;case"textarea":$e(n),Wt(n);break;case"option":f.value!=null&&n.setAttribute("value",""+me(f.value));break;case"select":n.multiple=!!f.multiple,M=f.value,M!=null?Gt(n,!!f.multiple,M,!1):f.defaultValue!=null&&Gt(n,!!f.multiple,f.defaultValue,!0);break;default:typeof x.onClick=="function"&&(n.onclick=ll)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Dn(r),null;case 6:if(n&&r.stateNode!=null)Hm(n,r,n.memoizedProps,f);else{if(typeof f!="string"&&r.stateNode===null)throw Error(t(166));if(l=_s(lo.current),_s(Yi.current),ml(r)){if(f=r.stateNode,l=r.memoizedProps,f[qi]=r,(M=f.nodeValue!==l)&&(n=ci,n!==null))switch(n.tag){case 3:ol(f.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ol(f.nodeValue,l,(n.mode&1)!==0)}M&&(r.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[qi]=r,r.stateNode=f}return Dn(r),null;case 13:if(Zt(nn),f=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(en&&ui!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Wp(),ea(),r.flags|=98560,M=!1;else if(M=ml(r),f!==null&&f.dehydrated!==null){if(n===null){if(!M)throw Error(t(318));if(M=r.memoizedState,M=M!==null?M.dehydrated:null,!M)throw Error(t(317));M[qi]=r}else ea(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Dn(r),M=!1}else Ii!==null&&(mh(Ii),Ii=null),M=!0;if(!M)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(f=f!==null,f!==(n!==null&&n.memoizedState!==null)&&f&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(nn.current&1)!==0?yn===0&&(yn=3):vh())),r.updateQueue!==null&&(r.flags|=4),Dn(r),null);case 4:return ra(),rh(n,r),n===null&&to(r.stateNode.containerInfo),Dn(r),null;case 10:return Iu(r.type._context),Dn(r),null;case 17:return Kn(r.type)&&ul(),Dn(r),null;case 19:if(Zt(nn),M=r.memoizedState,M===null)return Dn(r),null;if(f=(r.flags&128)!==0,P=M.rendering,P===null)if(f)po(M,!1);else{if(yn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(P=Sl(n),P!==null){for(r.flags|=128,po(M,!1),f=P.updateQueue,f!==null&&(r.updateQueue=f,r.flags|=4),r.subtreeFlags=0,f=l,l=r.child;l!==null;)M=l,n=f,M.flags&=14680066,P=M.alternate,P===null?(M.childLanes=0,M.lanes=n,M.child=null,M.subtreeFlags=0,M.memoizedProps=null,M.memoizedState=null,M.updateQueue=null,M.dependencies=null,M.stateNode=null):(M.childLanes=P.childLanes,M.lanes=P.lanes,M.child=P.child,M.subtreeFlags=0,M.deletions=null,M.memoizedProps=P.memoizedProps,M.memoizedState=P.memoizedState,M.updateQueue=P.updateQueue,M.type=P.type,n=P.dependencies,M.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return jt(nn,nn.current&1|2),r.child}n=n.sibling}M.tail!==null&&tn()>la&&(r.flags|=128,f=!0,po(M,!1),r.lanes=4194304)}else{if(!f)if(n=Sl(P),n!==null){if(r.flags|=128,f=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),po(M,!0),M.tail===null&&M.tailMode==="hidden"&&!P.alternate&&!en)return Dn(r),null}else 2*tn()-M.renderingStartTime>la&&l!==1073741824&&(r.flags|=128,f=!0,po(M,!1),r.lanes=4194304);M.isBackwards?(P.sibling=r.child,r.child=P):(l=M.last,l!==null?l.sibling=P:r.child=P,M.last=P)}return M.tail!==null?(r=M.tail,M.rendering=r,M.tail=r.sibling,M.renderingStartTime=tn(),r.sibling=null,l=nn.current,jt(nn,f?l&1|2:l&1),r):(Dn(r),null);case 22:case 23:return xh(),f=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==f&&(r.flags|=8192),f&&(r.mode&1)!==0?(hi&1073741824)!==0&&(Dn(r),r.subtreeFlags&6&&(r.flags|=8192)):Dn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function x_(n,r){switch(Tu(r),r.tag){case 1:return Kn(r.type)&&ul(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return ra(),Zt($n),Zt(Un),zu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return ku(r),null;case 13:if(Zt(nn),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));ea()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Zt(nn),null;case 4:return ra(),null;case 10:return Iu(r.type._context),null;case 22:case 23:return xh(),null;case 24:return null;default:return null}}var Pl=!1,kn=!1,v_=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function aa(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){sn(n,r,f)}else l.current=null}function sh(n,r,l){try{l()}catch(f){sn(n,r,f)}}var Vm=!1;function __(n,r){if(xu=Ko,n=yp(),cu(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var x=f.anchorOffset,M=f.focusNode;f=f.focusOffset;try{l.nodeType,M.nodeType}catch{l=null;break e}var P=0,H=-1,Y=-1,he=0,Ee=0,Ae=n,be=null;t:for(;;){for(var qe;Ae!==l||x!==0&&Ae.nodeType!==3||(H=P+x),Ae!==M||f!==0&&Ae.nodeType!==3||(Y=P+f),Ae.nodeType===3&&(P+=Ae.nodeValue.length),(qe=Ae.firstChild)!==null;)be=Ae,Ae=qe;for(;;){if(Ae===n)break t;if(be===l&&++he===x&&(H=P),be===M&&++Ee===f&&(Y=P),(qe=Ae.nextSibling)!==null)break;Ae=be,be=Ae.parentNode}Ae=qe}l=H===-1||Y===-1?null:{start:H,end:Y}}else l=null}l=l||{start:0,end:0}}else l=null;for(vu={focusedElem:n,selectionRange:l},Ko=!1,Ze=r;Ze!==null;)if(r=Ze,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Ze=n;else for(;Ze!==null;){r=Ze;try{var Je=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Je!==null){var tt=Je.memoizedProps,ln=Je.memoizedState,ae=r.stateNode,ne=ae.getSnapshotBeforeUpdate(r.elementType===r.type?tt:Ni(r.type,tt),ln);ae.__reactInternalSnapshotBeforeUpdate=ne}break;case 3:var ce=r.stateNode.containerInfo;ce.nodeType===1?ce.textContent="":ce.nodeType===9&&ce.documentElement&&ce.removeChild(ce.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(De){sn(r,r.return,De)}if(n=r.sibling,n!==null){n.return=r.return,Ze=n;break}Ze=r.return}return Je=Vm,Vm=!1,Je}function mo(n,r,l){var f=r.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var x=f=f.next;do{if((x.tag&n)===n){var M=x.destroy;x.destroy=void 0,M!==void 0&&sh(r,l,M)}x=x.next}while(x!==f)}}function Ll(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var f=l.create;l.destroy=f()}l=l.next}while(l!==r)}}function ah(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function Gm(n){var r=n.alternate;r!==null&&(n.alternate=null,Gm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[qi],delete r[io],delete r[Mu],delete r[t_],delete r[n_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Wm(n){return n.tag===5||n.tag===3||n.tag===4}function Xm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Wm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function oh(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=ll));else if(f!==4&&(n=n.child,n!==null))for(oh(n,r,l),n=n.sibling;n!==null;)oh(n,r,l),n=n.sibling}function lh(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(f!==4&&(n=n.child,n!==null))for(lh(n,r,l),n=n.sibling;n!==null;)lh(n,r,l),n=n.sibling}var Ln=null,Ui=!1;function Hr(n,r,l){for(l=l.child;l!==null;)jm(n,r,l),l=l.sibling}function jm(n,r,l){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(oe,l)}catch{}switch(l.tag){case 5:kn||aa(l,r);case 6:var f=Ln,x=Ui;Ln=null,Hr(n,r,l),Ln=f,Ui=x,Ln!==null&&(Ui?(n=Ln,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):Ln.removeChild(l.stateNode));break;case 18:Ln!==null&&(Ui?(n=Ln,l=l.stateNode,n.nodeType===8?Su(n.parentNode,l):n.nodeType===1&&Su(n,l),ja(n)):Su(Ln,l.stateNode));break;case 4:f=Ln,x=Ui,Ln=l.stateNode.containerInfo,Ui=!0,Hr(n,r,l),Ln=f,Ui=x;break;case 0:case 11:case 14:case 15:if(!kn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){x=f=f.next;do{var M=x,P=M.destroy;M=M.tag,P!==void 0&&((M&2)!==0||(M&4)!==0)&&sh(l,r,P),x=x.next}while(x!==f)}Hr(n,r,l);break;case 1:if(!kn&&(aa(l,r),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(H){sn(l,r,H)}Hr(n,r,l);break;case 21:Hr(n,r,l);break;case 22:l.mode&1?(kn=(f=kn)||l.memoizedState!==null,Hr(n,r,l),kn=f):Hr(n,r,l);break;default:Hr(n,r,l)}}function qm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new v_),r.forEach(function(f){var x=A_.bind(null,n,f);l.has(f)||(l.add(f),f.then(x,x))})}}function Fi(n,r){var l=r.deletions;if(l!==null)for(var f=0;f<l.length;f++){var x=l[f];try{var M=n,P=r,H=P;e:for(;H!==null;){switch(H.tag){case 5:Ln=H.stateNode,Ui=!1;break e;case 3:Ln=H.stateNode.containerInfo,Ui=!0;break e;case 4:Ln=H.stateNode.containerInfo,Ui=!0;break e}H=H.return}if(Ln===null)throw Error(t(160));jm(M,P,x),Ln=null,Ui=!1;var Y=x.alternate;Y!==null&&(Y.return=null),x.return=null}catch(he){sn(x,r,he)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Ym(r,n),r=r.sibling}function Ym(n,r){var l=n.alternate,f=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Fi(r,n),Ki(n),f&4){try{mo(3,n,n.return),Ll(3,n)}catch(tt){sn(n,n.return,tt)}try{mo(5,n,n.return)}catch(tt){sn(n,n.return,tt)}}break;case 1:Fi(r,n),Ki(n),f&512&&l!==null&&aa(l,l.return);break;case 5:if(Fi(r,n),Ki(n),f&512&&l!==null&&aa(l,l.return),n.flags&32){var x=n.stateNode;try{Me(x,"")}catch(tt){sn(n,n.return,tt)}}if(f&4&&(x=n.stateNode,x!=null)){var M=n.memoizedProps,P=l!==null?l.memoizedProps:M,H=n.type,Y=n.updateQueue;if(n.updateQueue=null,Y!==null)try{H==="input"&&M.type==="radio"&&M.name!=null&&mt(x,M),ke(H,P);var he=ke(H,M);for(P=0;P<Y.length;P+=2){var Ee=Y[P],Ae=Y[P+1];Ee==="style"?ve(x,Ae):Ee==="dangerouslySetInnerHTML"?ye(x,Ae):Ee==="children"?Me(x,Ae):C(x,Ee,Ae,he)}switch(H){case"input":Yt(x,M);break;case"textarea":Te(x,M);break;case"select":var be=x._wrapperState.wasMultiple;x._wrapperState.wasMultiple=!!M.multiple;var qe=M.value;qe!=null?Gt(x,!!M.multiple,qe,!1):be!==!!M.multiple&&(M.defaultValue!=null?Gt(x,!!M.multiple,M.defaultValue,!0):Gt(x,!!M.multiple,M.multiple?[]:"",!1))}x[io]=M}catch(tt){sn(n,n.return,tt)}}break;case 6:if(Fi(r,n),Ki(n),f&4){if(n.stateNode===null)throw Error(t(162));x=n.stateNode,M=n.memoizedProps;try{x.nodeValue=M}catch(tt){sn(n,n.return,tt)}}break;case 3:if(Fi(r,n),Ki(n),f&4&&l!==null&&l.memoizedState.isDehydrated)try{ja(r.containerInfo)}catch(tt){sn(n,n.return,tt)}break;case 4:Fi(r,n),Ki(n);break;case 13:Fi(r,n),Ki(n),x=n.child,x.flags&8192&&(M=x.memoizedState!==null,x.stateNode.isHidden=M,!M||x.alternate!==null&&x.alternate.memoizedState!==null||(hh=tn())),f&4&&qm(n);break;case 22:if(Ee=l!==null&&l.memoizedState!==null,n.mode&1?(kn=(he=kn)||Ee,Fi(r,n),kn=he):Fi(r,n),Ki(n),f&8192){if(he=n.memoizedState!==null,(n.stateNode.isHidden=he)&&!Ee&&(n.mode&1)!==0)for(Ze=n,Ee=n.child;Ee!==null;){for(Ae=Ze=Ee;Ze!==null;){switch(be=Ze,qe=be.child,be.tag){case 0:case 11:case 14:case 15:mo(4,be,be.return);break;case 1:aa(be,be.return);var Je=be.stateNode;if(typeof Je.componentWillUnmount=="function"){f=be,l=be.return;try{r=f,Je.props=r.memoizedProps,Je.state=r.memoizedState,Je.componentWillUnmount()}catch(tt){sn(f,l,tt)}}break;case 5:aa(be,be.return);break;case 22:if(be.memoizedState!==null){Zm(Ae);continue}}qe!==null?(qe.return=be,Ze=qe):Zm(Ae)}Ee=Ee.sibling}e:for(Ee=null,Ae=n;;){if(Ae.tag===5){if(Ee===null){Ee=Ae;try{x=Ae.stateNode,he?(M=x.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none"):(H=Ae.stateNode,Y=Ae.memoizedProps.style,P=Y!=null&&Y.hasOwnProperty("display")?Y.display:null,H.style.display=de("display",P))}catch(tt){sn(n,n.return,tt)}}}else if(Ae.tag===6){if(Ee===null)try{Ae.stateNode.nodeValue=he?"":Ae.memoizedProps}catch(tt){sn(n,n.return,tt)}}else if((Ae.tag!==22&&Ae.tag!==23||Ae.memoizedState===null||Ae===n)&&Ae.child!==null){Ae.child.return=Ae,Ae=Ae.child;continue}if(Ae===n)break e;for(;Ae.sibling===null;){if(Ae.return===null||Ae.return===n)break e;Ee===Ae&&(Ee=null),Ae=Ae.return}Ee===Ae&&(Ee=null),Ae.sibling.return=Ae.return,Ae=Ae.sibling}}break;case 19:Fi(r,n),Ki(n),f&4&&qm(n);break;case 21:break;default:Fi(r,n),Ki(n)}}function Ki(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(Wm(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var x=f.stateNode;f.flags&32&&(Me(x,""),f.flags&=-33);var M=Xm(n);lh(n,M,x);break;case 3:case 4:var P=f.stateNode.containerInfo,H=Xm(n);oh(n,H,P);break;default:throw Error(t(161))}}catch(Y){sn(n,n.return,Y)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function y_(n,r,l){Ze=n,$m(n)}function $m(n,r,l){for(var f=(n.mode&1)!==0;Ze!==null;){var x=Ze,M=x.child;if(x.tag===22&&f){var P=x.memoizedState!==null||Pl;if(!P){var H=x.alternate,Y=H!==null&&H.memoizedState!==null||kn;H=Pl;var he=kn;if(Pl=P,(kn=Y)&&!he)for(Ze=x;Ze!==null;)P=Ze,Y=P.child,P.tag===22&&P.memoizedState!==null?Qm(x):Y!==null?(Y.return=P,Ze=Y):Qm(x);for(;M!==null;)Ze=M,$m(M),M=M.sibling;Ze=x,Pl=H,kn=he}Km(n)}else(x.subtreeFlags&8772)!==0&&M!==null?(M.return=x,Ze=M):Km(n)}}function Km(n){for(;Ze!==null;){var r=Ze;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:kn||Ll(5,r);break;case 1:var f=r.stateNode;if(r.flags&4&&!kn)if(l===null)f.componentDidMount();else{var x=r.elementType===r.type?l.memoizedProps:Ni(r.type,l.memoizedProps);f.componentDidUpdate(x,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var M=r.updateQueue;M!==null&&Zp(r,M,f);break;case 3:var P=r.updateQueue;if(P!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Zp(r,P,l)}break;case 5:var H=r.stateNode;if(l===null&&r.flags&4){l=H;var Y=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":Y.autoFocus&&l.focus();break;case"img":Y.src&&(l.src=Y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var he=r.alternate;if(he!==null){var Ee=he.memoizedState;if(Ee!==null){var Ae=Ee.dehydrated;Ae!==null&&ja(Ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}kn||r.flags&512&&ah(r)}catch(be){sn(r,r.return,be)}}if(r===n){Ze=null;break}if(l=r.sibling,l!==null){l.return=r.return,Ze=l;break}Ze=r.return}}function Zm(n){for(;Ze!==null;){var r=Ze;if(r===n){Ze=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Ze=l;break}Ze=r.return}}function Qm(n){for(;Ze!==null;){var r=Ze;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Ll(4,r)}catch(Y){sn(r,l,Y)}break;case 1:var f=r.stateNode;if(typeof f.componentDidMount=="function"){var x=r.return;try{f.componentDidMount()}catch(Y){sn(r,x,Y)}}var M=r.return;try{ah(r)}catch(Y){sn(r,M,Y)}break;case 5:var P=r.return;try{ah(r)}catch(Y){sn(r,P,Y)}}}catch(Y){sn(r,r.return,Y)}if(r===n){Ze=null;break}var H=r.sibling;if(H!==null){H.return=r.return,Ze=H;break}Ze=r.return}}var S_=Math.ceil,Il=E.ReactCurrentDispatcher,ch=E.ReactCurrentOwner,wi=E.ReactCurrentBatchConfig,It=0,Tn=null,pn=null,In=0,hi=0,oa=Dr(0),yn=0,go=null,Ss=0,Nl=0,uh=0,xo=null,Qn=null,hh=0,la=1/0,pr=null,Ul=!1,fh=null,Vr=null,Fl=!1,Gr=null,Dl=0,vo=0,dh=null,kl=-1,Ol=0;function Gn(){return(It&6)!==0?tn():kl!==-1?kl:kl=tn()}function Wr(n){return(n.mode&1)===0?1:(It&2)!==0&&In!==0?In&-In:r_.transition!==null?(Ol===0&&(Ol=je()),Ol):(n=bt,n!==0||(n=window.event,n=n===void 0?16:ep(n.type)),n)}function Di(n,r,l,f){if(50<vo)throw vo=0,dh=null,Error(t(185));Mt(n,l,f),((It&2)===0||n!==Tn)&&(n===Tn&&((It&2)===0&&(Nl|=l),yn===4&&Xr(n,In)),Jn(n,f),l===1&&It===0&&(r.mode&1)===0&&(la=tn()+500,fl&&Or()))}function Jn(n,r){var l=n.callbackNode;zt(n,r);var f=Xt(n,n===Tn?In:0);if(f===0)l!==null&&Yo(l),n.callbackNode=null,n.callbackPriority=0;else if(r=f&-f,n.callbackPriority!==r){if(l!=null&&Yo(l),r===1)n.tag===0?i_(e0.bind(null,n)):zp(e0.bind(null,n)),Jv(function(){(It&6)===0&&Or()}),l=null;else{switch(ar(f)){case 1:l=Ha;break;case 4:l=N;break;case 16:l=ie;break;case 536870912:l=le;break;default:l=ie}l=l0(l,Jm.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Jm(n,r){if(kl=-1,Ol=0,(It&6)!==0)throw Error(t(327));var l=n.callbackNode;if(ca()&&n.callbackNode!==l)return null;var f=Xt(n,n===Tn?In:0);if(f===0)return null;if((f&30)!==0||(f&n.expiredLanes)!==0||r)r=zl(n,f);else{r=f;var x=It;It|=2;var M=n0();(Tn!==n||In!==r)&&(pr=null,la=tn()+500,ws(n,r));do try{b_();break}catch(H){t0(n,H)}while(!0);Lu(),Il.current=M,It=x,pn!==null?r=0:(Tn=null,In=0,r=yn)}if(r!==0){if(r===2&&(x=dn(n),x!==0&&(f=x,r=ph(n,x))),r===1)throw l=go,ws(n,0),Xr(n,f),Jn(n,tn()),l;if(r===6)Xr(n,f);else{if(x=n.current.alternate,(f&30)===0&&!M_(x)&&(r=zl(n,f),r===2&&(M=dn(n),M!==0&&(f=M,r=ph(n,M))),r===1))throw l=go,ws(n,0),Xr(n,f),Jn(n,tn()),l;switch(n.finishedWork=x,n.finishedLanes=f,r){case 0:case 1:throw Error(t(345));case 2:bs(n,Qn,pr);break;case 3:if(Xr(n,f),(f&130023424)===f&&(r=hh+500-tn(),10<r)){if(Xt(n,0)!==0)break;if(x=n.suspendedLanes,(x&f)!==f){Gn(),n.pingedLanes|=n.suspendedLanes&x;break}n.timeoutHandle=yu(bs.bind(null,n,Qn,pr),r);break}bs(n,Qn,pr);break;case 4:if(Xr(n,f),(f&4194240)===f)break;for(r=n.eventTimes,x=-1;0<f;){var P=31-Oe(f);M=1<<P,P=r[P],P>x&&(x=P),f&=~M}if(f=x,f=tn()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*S_(f/1960))-f,10<f){n.timeoutHandle=yu(bs.bind(null,n,Qn,pr),f);break}bs(n,Qn,pr);break;case 5:bs(n,Qn,pr);break;default:throw Error(t(329))}}}return Jn(n,tn()),n.callbackNode===l?Jm.bind(null,n):null}function ph(n,r){var l=xo;return n.current.memoizedState.isDehydrated&&(ws(n,r).flags|=256),n=zl(n,r),n!==2&&(r=Qn,Qn=l,r!==null&&mh(r)),n}function mh(n){Qn===null?Qn=n:Qn.push.apply(Qn,n)}function M_(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var x=l[f],M=x.getSnapshot;x=x.value;try{if(!Li(M(),x))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Xr(n,r){for(r&=~uh,r&=~Nl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-Oe(r),f=1<<l;n[l]=-1,r&=~f}}function e0(n){if((It&6)!==0)throw Error(t(327));ca();var r=Xt(n,0);if((r&1)===0)return Jn(n,tn()),null;var l=zl(n,r);if(n.tag!==0&&l===2){var f=dn(n);f!==0&&(r=f,l=ph(n,f))}if(l===1)throw l=go,ws(n,0),Xr(n,r),Jn(n,tn()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,bs(n,Qn,pr),Jn(n,tn()),null}function gh(n,r){var l=It;It|=1;try{return n(r)}finally{It=l,It===0&&(la=tn()+500,fl&&Or())}}function Ms(n){Gr!==null&&Gr.tag===0&&(It&6)===0&&ca();var r=It;It|=1;var l=wi.transition,f=bt;try{if(wi.transition=null,bt=1,n)return n()}finally{bt=f,wi.transition=l,It=r,(It&6)===0&&Or()}}function xh(){hi=oa.current,Zt(oa)}function ws(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,Qv(l)),pn!==null)for(l=pn.return;l!==null;){var f=l;switch(Tu(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&ul();break;case 3:ra(),Zt($n),Zt(Un),zu();break;case 5:ku(f);break;case 4:ra();break;case 13:Zt(nn);break;case 19:Zt(nn);break;case 10:Iu(f.type._context);break;case 22:case 23:xh()}l=l.return}if(Tn=n,pn=n=jr(n.current,null),In=hi=r,yn=0,go=null,uh=Nl=Ss=0,Qn=xo=null,vs!==null){for(r=0;r<vs.length;r++)if(l=vs[r],f=l.interleaved,f!==null){l.interleaved=null;var x=f.next,M=l.pending;if(M!==null){var P=M.next;M.next=x,f.next=P}l.pending=f}vs=null}return n}function t0(n,r){do{var l=pn;try{if(Lu(),Ml.current=Tl,wl){for(var f=rn.memoizedState;f!==null;){var x=f.queue;x!==null&&(x.pending=null),f=f.next}wl=!1}if(ys=0,En=_n=rn=null,co=!1,uo=0,ch.current=null,l===null||l.return===null){yn=1,go=r,pn=null;break}e:{var M=n,P=l.return,H=l,Y=r;if(r=In,H.flags|=32768,Y!==null&&typeof Y=="object"&&typeof Y.then=="function"){var he=Y,Ee=H,Ae=Ee.tag;if((Ee.mode&1)===0&&(Ae===0||Ae===11||Ae===15)){var be=Ee.alternate;be?(Ee.updateQueue=be.updateQueue,Ee.memoizedState=be.memoizedState,Ee.lanes=be.lanes):(Ee.updateQueue=null,Ee.memoizedState=null)}var qe=Tm(P);if(qe!==null){qe.flags&=-257,Cm(qe,P,H,M,r),qe.mode&1&&Em(M,he,r),r=qe,Y=he;var Je=r.updateQueue;if(Je===null){var tt=new Set;tt.add(Y),r.updateQueue=tt}else Je.add(Y);break e}else{if((r&1)===0){Em(M,he,r),vh();break e}Y=Error(t(426))}}else if(en&&H.mode&1){var ln=Tm(P);if(ln!==null){(ln.flags&65536)===0&&(ln.flags|=256),Cm(ln,P,H,M,r),Ru(sa(Y,H));break e}}M=Y=sa(Y,H),yn!==4&&(yn=2),xo===null?xo=[M]:xo.push(M),M=P;do{switch(M.tag){case 3:M.flags|=65536,r&=-r,M.lanes|=r;var ae=wm(M,Y,r);Kp(M,ae);break e;case 1:H=Y;var ne=M.type,ce=M.stateNode;if((M.flags&128)===0&&(typeof ne.getDerivedStateFromError=="function"||ce!==null&&typeof ce.componentDidCatch=="function"&&(Vr===null||!Vr.has(ce)))){M.flags|=65536,r&=-r,M.lanes|=r;var De=bm(M,H,r);Kp(M,De);break e}}M=M.return}while(M!==null)}r0(l)}catch(it){r=it,pn===l&&l!==null&&(pn=l=l.return);continue}break}while(!0)}function n0(){var n=Il.current;return Il.current=Tl,n===null?Tl:n}function vh(){(yn===0||yn===3||yn===2)&&(yn=4),Tn===null||(Ss&268435455)===0&&(Nl&268435455)===0||Xr(Tn,In)}function zl(n,r){var l=It;It|=2;var f=n0();(Tn!==n||In!==r)&&(pr=null,ws(n,r));do try{w_();break}catch(x){t0(n,x)}while(!0);if(Lu(),It=l,Il.current=f,pn!==null)throw Error(t(261));return Tn=null,In=0,yn}function w_(){for(;pn!==null;)i0(pn)}function b_(){for(;pn!==null&&!$c();)i0(pn)}function i0(n){var r=o0(n.alternate,n,hi);n.memoizedProps=n.pendingProps,r===null?r0(n):pn=r,ch.current=null}function r0(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=g_(l,r,hi),l!==null){pn=l;return}}else{if(l=x_(l,r),l!==null){l.flags&=32767,pn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{yn=6,pn=null;return}}if(r=r.sibling,r!==null){pn=r;return}pn=r=n}while(r!==null);yn===0&&(yn=5)}function bs(n,r,l){var f=bt,x=wi.transition;try{wi.transition=null,bt=1,E_(n,r,l,f)}finally{wi.transition=x,bt=f}return null}function E_(n,r,l,f){do ca();while(Gr!==null);if((It&6)!==0)throw Error(t(327));l=n.finishedWork;var x=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var M=l.lanes|l.childLanes;if(qn(n,M),n===Tn&&(pn=Tn=null,In=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Fl||(Fl=!0,l0(ie,function(){return ca(),null})),M=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||M){M=wi.transition,wi.transition=null;var P=bt;bt=1;var H=It;It|=4,ch.current=null,__(n,l),Ym(l,n),Xv(vu),Ko=!!xu,vu=xu=null,n.current=l,y_(l),Kc(),It=H,bt=P,wi.transition=M}else n.current=l;if(Fl&&(Fl=!1,Gr=n,Dl=x),M=n.pendingLanes,M===0&&(Vr=null),Ke(l.stateNode),Jn(n,tn()),r!==null)for(f=n.onRecoverableError,l=0;l<r.length;l++)x=r[l],f(x.value,{componentStack:x.stack,digest:x.digest});if(Ul)throw Ul=!1,n=fh,fh=null,n;return(Dl&1)!==0&&n.tag!==0&&ca(),M=n.pendingLanes,(M&1)!==0?n===dh?vo++:(vo=0,dh=n):vo=0,Or(),null}function ca(){if(Gr!==null){var n=ar(Dl),r=wi.transition,l=bt;try{if(wi.transition=null,bt=16>n?16:n,Gr===null)var f=!1;else{if(n=Gr,Gr=null,Dl=0,(It&6)!==0)throw Error(t(331));var x=It;for(It|=4,Ze=n.current;Ze!==null;){var M=Ze,P=M.child;if((Ze.flags&16)!==0){var H=M.deletions;if(H!==null){for(var Y=0;Y<H.length;Y++){var he=H[Y];for(Ze=he;Ze!==null;){var Ee=Ze;switch(Ee.tag){case 0:case 11:case 15:mo(8,Ee,M)}var Ae=Ee.child;if(Ae!==null)Ae.return=Ee,Ze=Ae;else for(;Ze!==null;){Ee=Ze;var be=Ee.sibling,qe=Ee.return;if(Gm(Ee),Ee===he){Ze=null;break}if(be!==null){be.return=qe,Ze=be;break}Ze=qe}}}var Je=M.alternate;if(Je!==null){var tt=Je.child;if(tt!==null){Je.child=null;do{var ln=tt.sibling;tt.sibling=null,tt=ln}while(tt!==null)}}Ze=M}}if((M.subtreeFlags&2064)!==0&&P!==null)P.return=M,Ze=P;else e:for(;Ze!==null;){if(M=Ze,(M.flags&2048)!==0)switch(M.tag){case 0:case 11:case 15:mo(9,M,M.return)}var ae=M.sibling;if(ae!==null){ae.return=M.return,Ze=ae;break e}Ze=M.return}}var ne=n.current;for(Ze=ne;Ze!==null;){P=Ze;var ce=P.child;if((P.subtreeFlags&2064)!==0&&ce!==null)ce.return=P,Ze=ce;else e:for(P=ne;Ze!==null;){if(H=Ze,(H.flags&2048)!==0)try{switch(H.tag){case 0:case 11:case 15:Ll(9,H)}}catch(it){sn(H,H.return,it)}if(H===P){Ze=null;break e}var De=H.sibling;if(De!==null){De.return=H.return,Ze=De;break e}Ze=H.return}}if(It=x,Or(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(oe,n)}catch{}f=!0}return f}finally{bt=l,wi.transition=r}}return!1}function s0(n,r,l){r=sa(l,r),r=wm(n,r,1),n=Br(n,r,1),r=Gn(),n!==null&&(Mt(n,1,r),Jn(n,r))}function sn(n,r,l){if(n.tag===3)s0(n,n,l);else for(;r!==null;){if(r.tag===3){s0(r,n,l);break}else if(r.tag===1){var f=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Vr===null||!Vr.has(f))){n=sa(l,n),n=bm(r,n,1),r=Br(r,n,1),n=Gn(),r!==null&&(Mt(r,1,n),Jn(r,n));break}}r=r.return}}function T_(n,r,l){var f=n.pingCache;f!==null&&f.delete(r),r=Gn(),n.pingedLanes|=n.suspendedLanes&l,Tn===n&&(In&l)===l&&(yn===4||yn===3&&(In&130023424)===In&&500>tn()-hh?ws(n,0):uh|=l),Jn(n,r)}function a0(n,r){r===0&&((n.mode&1)===0?r=1:(r=nt,nt<<=1,(nt&130023424)===0&&(nt=4194304)));var l=Gn();n=hr(n,r),n!==null&&(Mt(n,r,l),Jn(n,l))}function C_(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),a0(n,l)}function A_(n,r){var l=0;switch(n.tag){case 13:var f=n.stateNode,x=n.memoizedState;x!==null&&(l=x.retryLane);break;case 19:f=n.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(r),a0(n,l)}var o0;o0=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||$n.current)Zn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return Zn=!1,m_(n,r,l);Zn=(n.flags&131072)!==0}else Zn=!1,en&&(r.flags&1048576)!==0&&Bp(r,pl,r.index);switch(r.lanes=0,r.tag){case 2:var f=r.type;Rl(n,r),n=r.pendingProps;var x=Zs(r,Un.current);ia(r,l),x=Vu(null,r,f,n,x,l);var M=Gu();return r.flags|=1,typeof x=="object"&&x!==null&&typeof x.render=="function"&&x.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Kn(f)?(M=!0,hl(r)):M=!1,r.memoizedState=x.state!==null&&x.state!==void 0?x.state:null,Fu(r),x.updater=Cl,r.stateNode=x,x._reactInternals=r,$u(r,f,n,l),r=Ju(null,r,f,!0,M,l)):(r.tag=0,en&&M&&Eu(r),Vn(null,r,x,l),r=r.child),r;case 16:f=r.elementType;e:{switch(Rl(n,r),n=r.pendingProps,x=f._init,f=x(f._payload),r.type=f,x=r.tag=P_(f),n=Ni(f,n),x){case 0:r=Qu(null,r,f,n,l);break e;case 1:r=Nm(null,r,f,n,l);break e;case 11:r=Am(null,r,f,n,l);break e;case 14:r=Rm(null,r,f,Ni(f.type,n),l);break e}throw Error(t(306,f,""))}return r;case 0:return f=r.type,x=r.pendingProps,x=r.elementType===f?x:Ni(f,x),Qu(n,r,f,x,l);case 1:return f=r.type,x=r.pendingProps,x=r.elementType===f?x:Ni(f,x),Nm(n,r,f,x,l);case 3:e:{if(Um(r),n===null)throw Error(t(387));f=r.pendingProps,M=r.memoizedState,x=M.element,$p(n,r),yl(r,f,null,l);var P=r.memoizedState;if(f=P.element,M.isDehydrated)if(M={element:f,isDehydrated:!1,cache:P.cache,pendingSuspenseBoundaries:P.pendingSuspenseBoundaries,transitions:P.transitions},r.updateQueue.baseState=M,r.memoizedState=M,r.flags&256){x=sa(Error(t(423)),r),r=Fm(n,r,f,l,x);break e}else if(f!==x){x=sa(Error(t(424)),r),r=Fm(n,r,f,l,x);break e}else for(ui=Fr(r.stateNode.containerInfo.firstChild),ci=r,en=!0,Ii=null,l=qp(r,null,f,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ea(),f===x){r=dr(n,r,l);break e}Vn(n,r,f,l)}r=r.child}return r;case 5:return Qp(r),n===null&&Au(r),f=r.type,x=r.pendingProps,M=n!==null?n.memoizedProps:null,P=x.children,_u(f,x)?P=null:M!==null&&_u(f,M)&&(r.flags|=32),Im(n,r),Vn(n,r,P,l),r.child;case 6:return n===null&&Au(r),null;case 13:return Dm(n,r,l);case 4:return Du(r,r.stateNode.containerInfo),f=r.pendingProps,n===null?r.child=ta(r,null,f,l):Vn(n,r,f,l),r.child;case 11:return f=r.type,x=r.pendingProps,x=r.elementType===f?x:Ni(f,x),Am(n,r,f,x,l);case 7:return Vn(n,r,r.pendingProps,l),r.child;case 8:return Vn(n,r,r.pendingProps.children,l),r.child;case 12:return Vn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(f=r.type._context,x=r.pendingProps,M=r.memoizedProps,P=x.value,jt(xl,f._currentValue),f._currentValue=P,M!==null)if(Li(M.value,P)){if(M.children===x.children&&!$n.current){r=dr(n,r,l);break e}}else for(M=r.child,M!==null&&(M.return=r);M!==null;){var H=M.dependencies;if(H!==null){P=M.child;for(var Y=H.firstContext;Y!==null;){if(Y.context===f){if(M.tag===1){Y=fr(-1,l&-l),Y.tag=2;var he=M.updateQueue;if(he!==null){he=he.shared;var Ee=he.pending;Ee===null?Y.next=Y:(Y.next=Ee.next,Ee.next=Y),he.pending=Y}}M.lanes|=l,Y=M.alternate,Y!==null&&(Y.lanes|=l),Nu(M.return,l,r),H.lanes|=l;break}Y=Y.next}}else if(M.tag===10)P=M.type===r.type?null:M.child;else if(M.tag===18){if(P=M.return,P===null)throw Error(t(341));P.lanes|=l,H=P.alternate,H!==null&&(H.lanes|=l),Nu(P,l,r),P=M.sibling}else P=M.child;if(P!==null)P.return=M;else for(P=M;P!==null;){if(P===r){P=null;break}if(M=P.sibling,M!==null){M.return=P.return,P=M;break}P=P.return}M=P}Vn(n,r,x.children,l),r=r.child}return r;case 9:return x=r.type,f=r.pendingProps.children,ia(r,l),x=Si(x),f=f(x),r.flags|=1,Vn(n,r,f,l),r.child;case 14:return f=r.type,x=Ni(f,r.pendingProps),x=Ni(f.type,x),Rm(n,r,f,x,l);case 15:return Pm(n,r,r.type,r.pendingProps,l);case 17:return f=r.type,x=r.pendingProps,x=r.elementType===f?x:Ni(f,x),Rl(n,r),r.tag=1,Kn(f)?(n=!0,hl(r)):n=!1,ia(r,l),Sm(r,f,x),$u(r,f,x,l),Ju(null,r,f,!0,n,l);case 19:return Om(n,r,l);case 22:return Lm(n,r,l)}throw Error(t(156,r.tag))};function l0(n,r){return qo(n,r)}function R_(n,r,l,f){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bi(n,r,l,f){return new R_(n,r,l,f)}function _h(n){return n=n.prototype,!(!n||!n.isReactComponent)}function P_(n){if(typeof n=="function")return _h(n)?1:0;if(n!=null){if(n=n.$$typeof,n===B)return 11;if(n===V)return 14}return 2}function jr(n,r){var l=n.alternate;return l===null?(l=bi(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Bl(n,r,l,f,x,M){var P=2;if(f=n,typeof n=="function")_h(n)&&(P=1);else if(typeof n=="string")P=5;else e:switch(n){case I:return Es(l.children,x,M,r);case T:P=8,x|=8;break;case U:return n=bi(12,l,r,x|2),n.elementType=U,n.lanes=M,n;case $:return n=bi(13,l,r,x),n.elementType=$,n.lanes=M,n;case J:return n=bi(19,l,r,x),n.elementType=J,n.lanes=M,n;case K:return Hl(l,x,M,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case z:P=10;break e;case D:P=9;break e;case B:P=11;break e;case V:P=14;break e;case Z:P=16,f=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=bi(P,l,r,x),r.elementType=n,r.type=f,r.lanes=M,r}function Es(n,r,l,f){return n=bi(7,n,f,r),n.lanes=l,n}function Hl(n,r,l,f){return n=bi(22,n,f,r),n.elementType=K,n.lanes=l,n.stateNode={isHidden:!1},n}function yh(n,r,l){return n=bi(6,n,null,r),n.lanes=l,n}function Sh(n,r,l){return r=bi(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function L_(n,r,l,f,x){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pn(0),this.expirationTimes=Pn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pn(0),this.identifierPrefix=f,this.onRecoverableError=x,this.mutableSourceEagerHydrationData=null}function Mh(n,r,l,f,x,M,P,H,Y){return n=new L_(n,r,l,H,Y),r===1?(r=1,M===!0&&(r|=8)):r=0,M=bi(3,null,null,r),n.current=M,M.stateNode=n,M.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fu(M),n}function I_(n,r,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A,key:f==null?null:""+f,children:n,containerInfo:r,implementation:l}}function c0(n){if(!n)return kr;n=n._reactInternals;e:{if(Le(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Kn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Kn(l))return kp(n,l,r)}return r}function u0(n,r,l,f,x,M,P,H,Y){return n=Mh(l,f,!0,n,x,M,P,H,Y),n.context=c0(null),l=n.current,f=Gn(),x=Wr(l),M=fr(f,x),M.callback=r??null,Br(l,M,x),n.current.lanes=x,Mt(n,x,f),Jn(n,f),n}function Vl(n,r,l,f){var x=r.current,M=Gn(),P=Wr(x);return l=c0(l),r.context===null?r.context=l:r.pendingContext=l,r=fr(M,P),r.payload={element:n},f=f===void 0?null:f,f!==null&&(r.callback=f),n=Br(x,r,P),n!==null&&(Di(n,x,P,M),_l(n,x,P)),P}function Gl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function h0(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function wh(n,r){h0(n,r),(n=n.alternate)&&h0(n,r)}function N_(){return null}var f0=typeof reportError=="function"?reportError:function(n){console.error(n)};function bh(n){this._internalRoot=n}Wl.prototype.render=bh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Vl(n,r,null,null)},Wl.prototype.unmount=bh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Ms(function(){Vl(null,n,null,null)}),r[or]=null}};function Wl(n){this._internalRoot=n}Wl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Bt();n={blockedOn:null,target:n,priority:r};for(var l=0;l<Ir.length&&r!==0&&r<Ir[l].priority;l++);Ir.splice(l,0,n),l===0&&Qd(n)}};function Eh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Xl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function d0(){}function U_(n,r,l,f,x){if(x){if(typeof f=="function"){var M=f;f=function(){var he=Gl(P);M.call(he)}}var P=u0(r,f,n,0,null,!1,!1,"",d0);return n._reactRootContainer=P,n[or]=P.current,to(n.nodeType===8?n.parentNode:n),Ms(),P}for(;x=n.lastChild;)n.removeChild(x);if(typeof f=="function"){var H=f;f=function(){var he=Gl(Y);H.call(he)}}var Y=Mh(n,0,!1,null,null,!1,!1,"",d0);return n._reactRootContainer=Y,n[or]=Y.current,to(n.nodeType===8?n.parentNode:n),Ms(function(){Vl(r,Y,l,f)}),Y}function jl(n,r,l,f,x){var M=l._reactRootContainer;if(M){var P=M;if(typeof x=="function"){var H=x;x=function(){var Y=Gl(P);H.call(Y)}}Vl(r,P,n,x)}else P=U_(l,r,n,x,f);return Gl(P)}kt=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=Lt(r.pendingLanes);l!==0&&(Yn(r,l|1),Jn(r,tn()),(It&6)===0&&(la=tn()+500,Or()))}break;case 13:Ms(function(){var f=hr(n,1);if(f!==null){var x=Gn();Di(f,n,1,x)}}),wh(n,1)}},$t=function(n){if(n.tag===13){var r=hr(n,134217728);if(r!==null){var l=Gn();Di(r,n,134217728,l)}wh(n,134217728)}},Ri=function(n){if(n.tag===13){var r=Wr(n),l=hr(n,r);if(l!==null){var f=Gn();Di(l,n,r,f)}wh(n,r)}},Bt=function(){return bt},Pi=function(n,r){var l=bt;try{return bt=n,r()}finally{bt=l}},st=function(n,r,l){switch(r){case"input":if(Yt(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var f=l[r];if(f!==n&&f.form===n.form){var x=cl(f);if(!x)throw Error(t(90));wt(f),Yt(f,x)}}}break;case"textarea":Te(n,l);break;case"select":r=l.value,r!=null&&Gt(n,!!l.multiple,r,!1)}},Fe=gh,we=Ms;var F_={usingClientEntryPoint:!1,Events:[ro,$s,cl,ge,Xe,gh]},_o={findFiberByHostInstance:ps,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},D_={bundleType:_o.bundleType,version:_o.version,rendererPackageName:_o.rendererPackageName,rendererConfig:_o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:E.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=fs(n),n===null?null:n.stateNode},findFiberByHostInstance:_o.findFiberByHostInstance||N_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ql.isDisabled&&ql.supportsFiber)try{oe=ql.inject(D_),He=ql}catch{}}return ei.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F_,ei.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eh(r))throw Error(t(200));return I_(n,r,null,l)},ei.createRoot=function(n,r){if(!Eh(n))throw Error(t(299));var l=!1,f="",x=f0;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onRecoverableError!==void 0&&(x=r.onRecoverableError)),r=Mh(n,1,!1,null,null,l,!1,f,x),n[or]=r.current,to(n.nodeType===8?n.parentNode:n),new bh(r)},ei.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=fs(r),n=n===null?null:n.stateNode,n},ei.flushSync=function(n){return Ms(n)},ei.hydrate=function(n,r,l){if(!Xl(r))throw Error(t(200));return jl(null,n,r,!0,l)},ei.hydrateRoot=function(n,r,l){if(!Eh(n))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,x=!1,M="",P=f0;if(l!=null&&(l.unstable_strictMode===!0&&(x=!0),l.identifierPrefix!==void 0&&(M=l.identifierPrefix),l.onRecoverableError!==void 0&&(P=l.onRecoverableError)),r=u0(r,null,n,1,l??null,x,!1,M,P),n[or]=r.current,to(n),f)for(n=0;n<f.length;n++)l=f[n],x=l._getVersion,x=x(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,x]:r.mutableSourceEagerHydrationData.push(l,x);return new Wl(r)},ei.render=function(n,r,l){if(!Xl(r))throw Error(t(200));return jl(null,n,r,!1,l)},ei.unmountComponentAtNode=function(n){if(!Xl(n))throw Error(t(40));return n._reactRootContainer?(Ms(function(){jl(null,null,n,!1,function(){n._reactRootContainer=null,n[or]=null})}),!0):!1},ei.unstable_batchedUpdates=gh,ei.unstable_renderSubtreeIntoContainer=function(n,r,l,f){if(!Xl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return jl(n,r,l,!1,f)},ei.version="18.3.1-next-f1338f8080-20240426",ei}var S0;function j_(){if(S0)return Ah.exports;S0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Ah.exports=X_(),Ah.exports}var M0;function q_(){if(M0)return Yl;M0=1;var a=j_();return Yl.createRoot=a.createRoot,Yl.hydrateRoot=a.hydrateRoot,Yl}var Y_=q_(),fe=Md();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),K_=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase()),w0=a=>{const e=K_(a);return e.charAt(0).toUpperCase()+e.slice(1)},sx=(...a)=>a.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Z_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=fe.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:s="",children:o,iconNode:c,...u},h)=>fe.createElement("svg",{ref:h,...Z_,width:e,height:e,stroke:a,strokeWidth:i?Number(t)*24/Number(e):t,className:sx("lucide",s),...u},[...c.map(([d,p])=>fe.createElement(d,p)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=(a,e)=>{const t=fe.forwardRef(({className:i,...s},o)=>fe.createElement(Q_,{ref:o,iconNode:e,className:sx(`lucide-${$_(w0(a))}`,`lucide-${a}`,i),...s}));return t.displayName=w0(a),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],ax=ri("camera",J_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],t1=ri("circle-alert",e1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],i1=ri("circle",n1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],s1=ri("hand",r1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],o1=ri("mic-off",a1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],b0=ri("mic",l1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]],u1=ri("orbit",c1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],f1=ri("refresh-cw",h1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],p1=ri("rotate-ccw",d1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]],g1=ri("sliders-horizontal",m1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],v1=ri("sparkles",x1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],y1=ri("square",_1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196",key:"w8jjjt"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2",key:"1xawa7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],M1=ri("video-off",S1);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],b1=ri("video",w1);function E1({onVideoReady:a}){const e=fe.useRef(null),[t,i]=fe.useState(""),[s,o]=fe.useState(!0),[c,u]=fe.useState(0),h=async()=>{try{if(o(!0),i(""),!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error("Camera API not supported in this browser. Please use a modern browser like Chrome, Firefox, or Edge.");const g=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480,facingMode:"user"},audio:!1});e.current&&(e.current.srcObject=g,e.current.onloadedmetadata=()=>{var m;(m=e.current)==null||m.play(),a(e.current),o(!1)})}catch(g){o(!1),g instanceof Error&&(g.name==="NotAllowedError"||g.name==="PermissionDeniedError"?i("Camera permission denied. Please click the camera icon in your browser's address bar and allow camera access, then click Retry below."):g.name==="NotFoundError"?i("No camera found. Please connect a camera to your device."):g.name==="NotReadableError"?i("Camera is already in use by another application. Please close other apps using the camera and try again."):g.name==="OverconstrainedError"?(i("Camera does not meet requirements. Trying with default settings..."),setTimeout(()=>{d()},1e3)):i("Error: "+g.message))}},d=async()=>{try{o(!0),i("");const g=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1});e.current&&(e.current.srcObject=g,e.current.onloadedmetadata=()=>{var m;(m=e.current)==null||m.play(),a(e.current),o(!1)})}catch{o(!1),i("Unable to access camera with default settings.")}},p=()=>{u(g=>g+1),h()};return fe.useEffect(()=>(h(),()=>{var g;(g=e.current)!=null&&g.srcObject&&e.current.srcObject.getTracks().forEach(y=>y.stop())}),[a]),X.jsxs("div",{className:"relative",children:[X.jsx("video",{ref:e,className:"w-48 h-36 rounded-lg border-2 border-white/20 shadow-lg bg-black",style:{transform:"scaleX(-1)"},playsInline:!0,muted:!0}),t&&X.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center bg-black/95 rounded-lg p-3 gap-2",children:[X.jsx(t1,{className:"w-6 h-6 text-red-400"}),X.jsx("p",{className:"text-[10px] text-red-400 text-center leading-tight",children:t}),X.jsxs("button",{onClick:p,className:"mt-1 px-3 py-1 bg-white/10 hover:bg-white/20 rounded text-[10px] text-white flex items-center gap-1 transition-colors",children:[X.jsx(f1,{className:"w-3 h-3"}),"Retry"]}),X.jsx("a",{href:"https://support.google.com/chrome/answer/2693767",target:"_blank",rel:"noopener noreferrer",className:"text-[9px] text-blue-400 hover:text-blue-300 underline",children:"How to enable camera"})]}),s&&!t&&X.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center bg-black/80 rounded-lg gap-2",children:[X.jsx(ax,{className:"w-6 h-6 text-white/60 animate-pulse"}),X.jsx("p",{className:"text-xs text-white/60",children:"Loading camera..."})]})]})}const T1=3,ox=400,C1=.75;function A1({selectedColors:a,hue:e,saturation:t,mode:i,onHueChange:s,onModeChange:o,autoHueEnabled:c,onAutoHueToggle:u}){const h=(d,p,g)=>{d=d/360,p=p/100,g=g/100;let m,y,v;if(p===0)m=y=v=g;else{const _=(C,E,L)=>(L<0&&(L+=1),L>1&&(L-=1),L<.16666666666666666?C+(E-C)*6*L:L<.5?E:L<.6666666666666666?C+(E-C)*(.6666666666666666-L)*6:C),S=g<.5?g*(1+p):g+p-g*p,b=2*g-S;m=_(b,S,d+.3333333333333333),y=_(b,S,d),v=_(b,S,d-.3333333333333333)}const w=_=>{const S=Math.round(_*255).toString(16);return S.length===1?"0"+S:S};return`#${w(m)}${w(y)}${w(v)}`};return X.jsxs("div",{className:"w-full flex items-center gap-4 px-6 font-mono",children:[X.jsxs("div",{className:"flex gap-1",children:[X.jsx("button",{onClick:()=>o("black"),className:`px-2 py-1 text-[10px] rounded transition-all ${i==="black"?"bg-white/20 text-white":"bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60"}`,title:"1 Color (Fn key)",children:"1C"}),X.jsx("button",{onClick:()=>o("contrast"),className:`px-2 py-1 text-[10px] rounded transition-all ${i==="contrast"?"bg-white/20 text-white":"bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60"}`,title:"2 Colors (Ctrl key)",children:"2C"}),X.jsx("button",{onClick:()=>o("grayscale"),className:`px-2 py-1 text-[10px] rounded transition-all ${i==="grayscale"?"bg-white/20 text-white":"bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60"}`,title:"Black & White (Option/Alt key)",children:"B/W"})]}),i!=="grayscale"&&X.jsxs("div",{className:"flex-1 relative h-6",children:[X.jsx("div",{className:"absolute inset-0 rounded-full",style:{background:"linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)"}}),X.jsx("input",{type:"range",min:"0",max:"360",value:e,onChange:d=>s(Number(d.target.value)),className:"vj-slider-bare absolute inset-0 w-full appearance-none bg-transparent cursor-pointer"}),X.jsx("div",{className:"absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-white shadow-lg pointer-events-none",style:{left:`calc(${e/360*100}% - 10px)`,backgroundColor:h(e,t,50)}})]}),i!=="grayscale"&&X.jsx("button",{onClick:u,className:`px-3 py-1 text-[10px] rounded transition-all whitespace-nowrap ${c?"bg-cyan-500/30 text-cyan-300 border border-cyan-400/50":"bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60"}`,title:"Auto-rotate hue palette",children:c?"⟳ AUTO":"AUTO"})]})}const ls={geometric:{pattern:"geometric",name:"Geometric",short:"Geometric",category:"2D",key:"1",description:"Rotating polygons with trails"},particles:{pattern:"particles",name:"Particles",short:"Particles",category:"2D",key:"2",description:"Dynamic particle system"},waves:{pattern:"waves",name:"Waves",short:"Waves",category:"2D",key:"3",description:"Flowing wave patterns"},technical:{pattern:"technical",name:"Technical Hand Tracker",short:"Tracker",category:"2D",key:"4",description:"Hand tracking visualization"},lottie:{pattern:"lottie",name:"Lottie Inspired",short:"Lottie",category:"2D",key:"5",description:"Animated circular patterns"},"lottie-classic":{pattern:"lottie-classic",name:"Classic Lottie",short:"Lottie 2",category:"2D",key:"Q",description:"Classic Lottie animation"},linefield:{pattern:"linefield",name:"Line Field",short:"Lines",category:"2D",key:"6",description:"Dynamic line fields"},chromatic:{pattern:"chromatic",name:"Chromatic Glow",short:"Chroma",category:"2D",key:"7",description:"RGB chromatic aberration"},halftone:{pattern:"halftone",name:"Halftone Matrix",short:"Halftone",category:"2D",key:"8",description:"Halftone dot patterns"},matrix:{pattern:"matrix",name:"Digital Grid",short:"Grid",category:"2D",key:"9",description:"Matrix-style grid"},distortedcamera:{pattern:"distortedcamera",name:"Distorted Camera",short:"Camera",category:"2D",key:"W",description:"Gesture-controlled camera distortion with chromatic effects"},thicklines:{pattern:"thicklines",name:"Thick Lines",short:"Blocks",category:"2D",key:"=",description:"Rotating blocks with thickness response"},flowfield:{pattern:"flowfield",name:"Flow Field",short:"Flow",category:"2D",key:"D",description:"Flowing vector field"},liquidchrome:{pattern:"liquidchrome",name:"Liquid Chrome",short:"Chrome",category:"2D",key:"-",description:"Iridescent liquid metal simulation"},glitch:{pattern:"glitch",name:"Glitch Network",short:"Glitch",category:"3D",key:"1",description:"Network glitch with perspective effects"},cyberstream:{pattern:"cyberstream",name:"Cyber Stream",short:"Cyber",category:"3D",key:"2",description:"Cyberpunk stream with depth perspective"},morphing:{pattern:"morphing",name:"Morphing Sphere",short:"Sphere",category:"3D",key:"=",description:"Three.js morphing icosphere"},cubewall:{pattern:"cubewall",name:"Cube Wall",short:"Cubes",category:"3D",key:"4",description:"Three.js cube grid waves"},facecloud:{pattern:"facecloud",name:"Op-Art Grid",short:"Op-Art",category:"3D",key:"5",description:"Op-art grid with perspective"},face:{pattern:"face",name:"Face Mesh",short:"Face",category:"3D",key:"-",description:"MediaPipe face tracking with glowing mesh"},"smokehand-torus":{pattern:"smokehand-torus",name:"Smoke Torus",short:"Torus",category:"3D",key:"8",description:"Particle smoke shaped around a torus"},"smokehand-hand":{pattern:"smokehand-hand",name:"Smoke Hand",short:"Hand",category:"3D",key:"7",description:"Particle smoke shaped around a hand model"},"network-cube":{pattern:"network-cube",name:"Network Cube",short:"Network",category:"3D",key:"9",description:"Sparse cubic constellation"},"elastic-net":{pattern:"elastic-net",name:"Elastic Net",short:"Elastic",category:"3D",key:"0",description:"Elastic neural network simulation"},ripple:{pattern:"ripple",name:"Water Ripple",short:"Ripple",category:"TD",key:"1",description:"Camera refracted through a height field your hands leave behind"},text:{pattern:"text",name:"Kinetic Type",short:"Type",category:"TD",key:"2",description:"Your words, extruded and pushed around by your hands"},video:{pattern:"video",name:"Clip",short:"Clip",category:"TD",key:"3",description:"Your own footage, sheared into sliding bands"},mosaic:{pattern:"mosaic",name:"Mosaic",short:"Mosaic",category:"TD",key:"4",description:"Your video or photo rebuilt out of letters, dots, blocks or bars"},digitalblocks:{pattern:"digitalblocks",name:"Digital Horizon",short:"Horizon",category:"2D",key:"0",description:"Glitchy digital data sorting"}},Ps=10,lx="vj-setlist";function zo(a){return a===9?"0":String(a+1)}function vf(a){return a==="0"?9:a>="1"&&a<="9"?Number(a)-1:-1}const Lh=["geometric","waves","particles","halftone","ripple","flowfield"];function R1(a){return typeof a=="string"&&a in ls}function P1(){try{const a=localStorage.getItem(lx);if(a===null)return Lh;const e=JSON.parse(a);return Array.isArray(e)?e.filter(R1).filter((i,s,o)=>o.indexOf(i)===s).slice(0,Ps):Lh}catch{return Lh}}function L1(a){try{localStorage.setItem(lx,JSON.stringify(a))}catch{}}function I1(a){return a.gesture==="pinch"?"PINCH":a.fingerCount===void 0?null:a.fingerCount===2?"MED":a.fingerCount>=5?"FAST":`${a.fingerCount}F`}function E0({label:a,hand:e}){const t=I1(e);return X.jsxs("div",{children:[X.jsx("div",{className:"text-white/90",children:a}),t&&X.jsx("div",{className:"text-cyan-400",children:t})]})}function N1(a){const e=Math.floor(a);return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function So({label:a,active:e,warn:t,onClick:i,title:s,children:o}){return X.jsxs("button",{onClick:i,title:s,className:"flex flex-col items-center gap-1 group/btn",children:[X.jsx("span",{className:`w-8 h-8 rounded-full transition-all flex items-center justify-center group-hover/btn:scale-105 group-active/btn:scale-95 ${e?t?"bg-cyan-400 text-black shadow-lg shadow-cyan-400/40":"bg-white text-black shadow-lg shadow-white/40":"bg-white/10 text-white/60 group-hover/btn:bg-white/20 group-hover/btn:text-white"}`,children:o}),X.jsx("span",{className:`text-[8px] tracking-widest transition-colors ${e?"text-white/80":"text-white/35"}`,children:a})]})}function U1({currentPattern:a,onPatternChange:e,layers:t,selectedLayer:i,onPatternHold:s,onLayerCycle:o,showCamera:c,onCameraToggle:u,handData:h,selectedColors:d,hue:p,saturation:g,colorMode:m,onHueChange:y,onSaturationChange:v,onColorModeChange:w,autoHueEnabled:_,onAutoHueToggle:S,set:b,onOpenLibrary:C,audioEnabled:E,onAudioToggle:L,audioSensitivity:A,onAudioSensitivityChange:I,audioControlSpeed:T,onAudioControlSpeedChange:U,audioControlDensity:z,onAudioControlDensityChange:D,audioTriggerBeats:B,onAudioTriggerBeatsChange:$,motion:J,onMotionChange:V,idleDrive:Z,onIdleDriveToggle:K,fxEnabled:W,fxActive:se,onFxToggle:j,canRecord:O,recording:G,recordSeconds:pe,onRecordToggle:Se}){var Ie;const _e=fe.useRef(null),ee=()=>{_e.current&&(clearTimeout(_e.current.timer),_e.current=null)},xe=Be=>{ee(),_e.current={pattern:Be,fired:!1,timer:window.setTimeout(()=>{_e.current&&(_e.current.fired=!0),s(Be)},ox)}},me=Be=>{const $e=_e.current;!$e||$e.pattern!==Be||(clearTimeout($e.timer),_e.current=null,$e.fired||e(Be))};return X.jsxs(X.Fragment,{children:[X.jsx("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 z-50",children:X.jsx("div",{className:"bg-black/70 backdrop-blur-sm rounded-full py-2 px-6 border border-white/20 font-mono",children:X.jsxs("div",{className:"flex items-center gap-4",children:[X.jsx("button",{onClick:C,title:"Back to the library to change the set (Esc)",className:"px-3 py-1 rounded text-[10px] tracking-wider text-white/40 transition-all hover:bg-white/10 hover:text-white/80",children:"SET"}),X.jsx("div",{className:"w-px h-6 bg-white/20"}),X.jsx("div",{className:"flex items-center gap-1.5",children:b.map((Be,$e)=>{const wt=t.findIndex(Ct=>Ct.pattern===Be),ut=wt===i,Tt=wt!==-1&&!ut;return X.jsxs("button",{onPointerDown:()=>xe(Be),onPointerUp:()=>me(Be),onPointerLeave:ee,className:"relative flex w-[46px] shrink-0 flex-col items-center gap-0.5 group/set",title:`${ls[Be].name} (${zo($e)})${wt!==-1?` — layer ${wt+1}`:""} · hold to stack`,children:[X.jsxs("span",{className:`relative flex h-7 w-7 items-center justify-center rounded-full text-xs transition-all ${ut?"bg-white text-black shadow-lg shadow-white/50":Tt?"bg-white/25 text-white ring-1 ring-emerald-400/70":"bg-white/10 text-white/60 group-hover/set:bg-white/20 group-hover/set:text-white/90"}`,children:[zo($e),wt!==-1&&t.length>1&&X.jsx("span",{className:"absolute -right-1 -top-1 h-3 w-3 rounded-full bg-emerald-400 text-center text-[7px] leading-3 text-black",children:wt+1})]}),X.jsx("span",{className:`w-full truncate text-center text-[8px] leading-none transition-colors ${ut?"text-white/85":"text-white/35 group-hover/set:text-white/65"}`,children:ls[Be].short})]},Be)})}),X.jsx("div",{className:"w-px h-6 bg-white/20"}),X.jsxs("div",{className:"flex items-center gap-1.5",title:"How hard the hands drive every visual (- and =)",children:[X.jsx("span",{className:"text-[8px] tracking-widest text-white/35",children:"HANDS"}),X.jsx("input",{type:"range","aria-label":"Hand motion",min:0,max:2,step:.05,value:J,onChange:Be=>V(parseFloat(Be.target.value)),className:"vj-slider h-1 w-16 cursor-pointer appearance-none rounded-full focus:outline-none",style:{background:`linear-gradient(to right, rgba(255,255,255,0.85) ${J/2*100}%, rgba(255,255,255,0.15) ${J/2*100}%)`}}),X.jsxs("span",{className:`w-7 text-[9px] tabular-nums ${J>1.35?"text-amber-300":J<.65?"text-cyan-300":"text-white/55"}`,children:[Math.round(J*100),"%"]})]}),t.length>1&&X.jsxs(X.Fragment,{children:[X.jsx("div",{className:"w-px h-6 bg-white/20"}),X.jsxs("button",{onClick:o,title:"The layer the sliders and colours act on (L) — fade it with [ and ]",className:"px-2 py-1 rounded text-[10px] whitespace-nowrap bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 transition-all",children:["L",i+1,"/",t.length,X.jsxs("span",{className:"text-emerald-300/60",children:[" ",Math.round((((Ie=t[i])==null?void 0:Ie.opacity)??1)*100),"%"]})]})]})]})})}),X.jsxs("div",{className:"absolute bottom-[25px] left-6 right-6 z-50 flex items-end gap-4 font-mono pointer-events-none",children:[X.jsx("div",{className:"shrink-0 pointer-events-auto",children:X.jsxs("div",{className:"bg-black/70 backdrop-blur-sm rounded-2xl py-2 px-3 border border-white/20 flex items-end gap-2.5 w-fit",children:[X.jsx(So,{label:"CAM",active:c,onClick:u,title:"Show the camera preview (C)",children:c?X.jsx(b1,{className:"w-3.5 h-3.5"}):X.jsx(M1,{className:"w-3.5 h-3.5"})}),X.jsx(So,{label:"MIC",active:E,onClick:L,title:"Audio-reactive mode: drive the visuals from the microphone (A)",children:E?X.jsx(b0,{className:"w-3.5 h-3.5"}):X.jsx(o1,{className:"w-3.5 h-3.5"})}),X.jsx(So,{label:"AUTO",active:Z,onClick:K,title:"Auto-motion: keep hand-driven visuals moving when no hands are tracked (I)",children:X.jsx(u1,{className:"w-3.5 h-3.5"})}),X.jsx("div",{className:"w-px h-8 bg-white/15 self-center"}),X.jsx(So,{label:"FX",active:W&&se,warn:W&&se,onClick:j,title:W?"Post effects are on. Click to bypass the whole chain, keeping every setting (X)":"Post effects bypassed. Click to bring them back (X)",children:X.jsx(v1,{className:"w-3.5 h-3.5"})}),O&&X.jsxs(X.Fragment,{children:[X.jsx("div",{className:"w-px h-8 bg-white/15 self-center"}),X.jsx(So,{label:G?N1(pe):"REC",active:G,warn:G,onClick:Se,title:G?"Stop and save the take (R)":"Record the visuals — and the camera if its preview is up — with none of these controls in it (R)",children:G?X.jsx(y1,{className:"w-3 h-3 fill-current"}):X.jsx(i1,{className:"w-3.5 h-3.5 fill-current text-red-500 group-hover/btn:text-red-400"})})]})]})}),X.jsx("div",{className:"flex-1 min-w-0 flex justify-center pointer-events-none",children:X.jsx("div",{className:"bg-black/70 backdrop-blur-sm rounded-full py-2 px-6 border border-white/20 max-w-4xl w-full pointer-events-auto",children:X.jsx(A1,{selectedColors:d,hue:p,saturation:g,mode:m,onHueChange:y,onModeChange:w,autoHueEnabled:_,onAutoHueToggle:S})})}),!E&&X.jsxs("div",{className:"shrink-0 bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-white/20 space-y-2 text-xs min-w-[200px] font-mono animate-in fade-in duration-300 pointer-events-auto",children:[X.jsx("div",{className:"text-white/80 mb-2",children:"HAND"}),X.jsxs("div",{className:"space-y-1",children:[h.left&&X.jsx(E0,{label:"L HAND",hand:h.left}),h.right&&X.jsx(E0,{label:"R HAND",hand:h.right}),h.clapping&&X.jsx("div",{className:"text-red-500 text-base animate-bounce",children:"CLAP!"}),!h.left&&!h.right&&X.jsx("div",{className:"text-white/50",children:"NO HANDS"})]}),X.jsxs("div",{className:"text-white/50 text-[10px] mt-2 pt-2 border-t border-white/20",children:["OPEN=FOLLOW",X.jsx("br",{}),"PINCH=SLOW 2F=MED 5F=FAST",X.jsx("br",{}),"CLAP=EXPLODE"]})]}),E&&X.jsx("div",{className:"shrink-0 animate-in slide-in-from-right-5 fade-in duration-300 pointer-events-auto",children:X.jsxs("div",{className:"bg-black/70 backdrop-blur-sm rounded-xl p-4 border border-white/20 font-mono flex flex-col gap-4 w-[160px]",children:[X.jsxs("div",{className:"flex items-center gap-2 border-b border-white/10 pb-2",children:[X.jsx(b0,{className:"w-3.5 h-3.5 text-white/90 animate-pulse"}),X.jsx("span",{className:"text-[10px] font-bold text-white/80 tracking-wider",children:"AUDIO"})]}),X.jsxs("div",{className:"space-y-1 group",children:[X.jsxs("div",{className:"flex justify-between text-[9px] text-white/50 font-medium",children:[X.jsx("span",{className:"group-hover:text-white/80 transition-colors",children:"GAIN"}),X.jsxs("span",{className:"text-white",children:[Math.round(A*100),"%"]})]}),X.jsx("div",{className:"relative h-4 flex items-center",children:X.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:A,onChange:Be=>I(parseFloat(Be.target.value)),className:"vj-slider w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer focus:outline-none",style:{backgroundImage:`linear-gradient(to right, white 0%, white ${A*100}%, rgba(255,255,255,0.2) ${A*100}%)`}})})]}),X.jsxs("div",{className:"flex flex-col gap-1.5",children:[X.jsxs("button",{onClick:()=>U(!T),className:`flex justify-between items-center px-2 py-1.5 rounded-md text-[9px] font-bold transition-all border ${T?"bg-white text-black border-white shadow-[0_0_10px_rgba(255,255,255,0.3)]":"bg-transparent text-white/50 border-white/10 hover:bg-white/10 hover:text-white"}`,children:[X.jsx("span",{children:"SPEED"}),X.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${T?"bg-black":"bg-white/30"}`})]}),X.jsxs("button",{onClick:()=>D(!z),className:`flex justify-between items-center px-2 py-1.5 rounded-md text-[9px] font-bold transition-all border ${z?"bg-white text-black border-white shadow-[0_0_10px_rgba(255,255,255,0.3)]":"bg-transparent text-white/50 border-white/10 hover:bg-white/10 hover:text-white"}`,children:[X.jsx("span",{children:"DENSITY"}),X.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${z?"bg-black":"bg-white/30"}`})]}),X.jsxs("button",{onClick:()=>$(!B),className:`flex justify-between items-center px-2 py-1.5 rounded-md text-[9px] font-bold transition-all border ${B?"bg-white text-black border-white shadow-[0_0_10px_rgba(255,255,255,0.3)]":"bg-transparent text-white/50 border-white/10 hover:bg-white/10 hover:text-white"}`,children:[X.jsx("span",{children:"BEATS"}),X.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${B?"bg-black":"bg-white/30"}`})]})]})]})})]})]})}const F1="modulepreload",D1=function(a,e){return new URL(a,e).href},T0={},cx=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let c=function(p){return Promise.all(p.map(g=>Promise.resolve(g).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};const u=document.getElementsByTagName("link"),h=document.querySelector("meta[property=csp-nonce]"),d=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));s=c(t.map(p=>{if(p=D1(p,i),p in T0)return;T0[p]=!0;const g=p.endsWith(".css"),m=g?'[rel="stylesheet"]':"";if(!!i)for(let w=u.length-1;w>=0;w--){const _=u[w];if(_.href===p&&(!g||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${m}`))return;const v=document.createElement("link");if(v.rel=g?"stylesheet":F1,g||(v.as="script"),v.crossOrigin="",v.href=p,d&&v.setAttribute("nonce",d),document.head.appendChild(v),g)return new Promise((w,_)=>{v.addEventListener("load",w),v.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${p}`)))})}))}function o(c){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=c,window.dispatchEvent(u),!u.defaultPrevented)throw c}return s.then(c=>{for(const u of c||[])u.status==="rejected"&&o(u.reason);return e().catch(o)})},C0=30,A0=.15;function k1({videoElement:a,onHandData:e}){const t=fe.useRef(null),i=fe.useRef(!1),s=fe.useRef(-1),o=fe.useRef(null),c=fe.useRef([]),u=fe.useRef([]),h=fe.useRef({}),d=fe.useRef([]),p=fe.useRef(null);return fe.useEffect(()=>{let g=!0;const m=async()=>{if(!i.current)try{console.log("✋ Initializing MediaPipe Hand Landmarker (Tasks Vision API)...");const _=await cx(()=>import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14"),[],import.meta.url),{HandLandmarker:S,FilesetResolver:b}=_,C=await b.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm");t.current=await S.createFromOptions(C,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",delegate:"GPU"},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.7,minHandPresenceConfidence:.5,minTrackingConfidence:.5}),console.log("✅ Hand tracking initialized (Tasks Vision API)"),i.current=!0,g&&y()}catch(_){console.error("❌ Error initializing hand tracking:",_)}},y=()=>{const _=()=>{if(!g||!t.current||!a)return;const S=performance.now();if(a.currentTime!==s.current){s.current=a.currentTime;try{const b=t.current.detectForVideo(a,S);v(b)}catch(b){console.error("Hand detection error:",b)}}o.current=requestAnimationFrame(_)};_()},v=_=>{const S=Date.now(),b={left:null,right:null};if(_.landmarks&&_.handedness&&_.landmarks.length>0)if(_.handedness.forEach((C,E)=>{const L=_.landmarks[E],A=C[0].categoryName.toLowerCase(),I=L[9],T={x:1-I.x,y:I.y},U=z1(L),z=O1(L),D=A==="left"?u.current:c.current;let B=0;if(D.length>0){const W=D[D.length-1],se=T.x-W.position.x,j=T.y-W.position.y,O=Math.sqrt(se*se+j*j),G=(S-W.timestamp)/1e3;B=G>0?O/G:0,B=Math.min(B*2,3)}const $=A==="left"?"right":"left";(D.length>0?D[D.length-1].gesture:null)!==U&&(h.current[$]=S);const V=h.current[$]||S,Z=(S-V)/1e3;D.push({position:T,gesture:U,timestamp:S}),D.length>10&&D.shift(),d.current.push({x:T.x,y:T.y,hand:$});const K={position:T,gesture:U,pinchDistance:U==="pinch"?B1(L):void 0,velocity:B,holdDuration:Z,fingerCount:z,landmarks:L.map(W=>({x:1-W.x,y:W.y,z:W.z}))};A==="left"?b.right=K:b.left=K}),b.left&&b.right){const C=b.left.position.x-b.right.position.x,E=b.left.position.y-b.right.position.y,L=Math.sqrt(C*C+E*E);b.distanceBetweenHands=L,L<A0&&(b.clapping=!0,b.clapIntensity=1-L/A0)}else p.current=null;d.current.length>C0&&(d.current=d.current.slice(-C0)),b.gestureTrail=[...d.current],e(b)},w=()=>{a&&a.readyState>=2?m():setTimeout(w,100)};return w(),()=>{if(g=!1,o.current!==null&&cancelAnimationFrame(o.current),t.current)try{t.current.close(),t.current=null}catch(_){console.warn("Error closing hand landmarker:",_)}i.current=!1}},[a,e]),null}function O1(a){if(!a||a.length<21)return 0;const e=a[0];a[9];let t=0;const i=a[4];a[3];const s=a[2],o=a[1],c=Math.sqrt(Math.pow(i.x-o.x,2)+Math.pow(i.y-o.y,2)),u=Math.sqrt(Math.pow(s.x-o.x,2)+Math.pow(s.y-o.y,2));c>u*1.2&&t++;const h=[{tip:8,pip:6,mcp:5},{tip:12,pip:10,mcp:9},{tip:16,pip:14,mcp:13},{tip:20,pip:18,mcp:17}],d=a[9];d.y-e.y,d.z-e.z;for(const p of h){const g=a[p.tip],m=a[p.pip],y=a[p.mcp],v=g.y<y.y-.02,w=Math.sqrt(Math.pow(g.x-e.x,2)+Math.pow(g.y-e.y,2)+Math.pow(g.z-e.z,2)),_=Math.sqrt(Math.pow(m.x-e.x,2)+Math.pow(m.y-e.y,2)+Math.pow(m.z-e.z,2)),S=w>_*1.05,b={x:y.x-m.x,y:y.y-m.y,z:y.z-m.z},C={x:g.x-m.x,y:g.y-m.y,z:g.z-m.z},E=Math.sqrt(b.x**2+b.y**2+b.z**2),L=Math.sqrt(C.x**2+C.y**2+C.z**2);if(E>0&&L>0){const I=b.x/E*(C.x/L)+b.y/E*(C.y/L)+b.z/E*(C.z/L)<-.3;(v||S||I)&&t++}else(v||S)&&t++}return t}function z1(a){if(!a||a.length<21)return"none";const e=a[9],t=a[4],i=a[8],s=a[12],o=a[16],c=a[20],u=a[6],h=a[10],d=a[14],p=a[18];if(Math.sqrt(Math.pow(t.x-i.x,2)+Math.pow(t.y-i.y,2)+Math.pow(t.z-i.z,2))<.06)return"pinch";const m=Math.sqrt(Math.pow(i.x-e.x,2)+Math.pow(i.y-e.y,2)+Math.pow(i.z-e.z,2)),y=Math.sqrt(Math.pow(u.x-e.x,2)+Math.pow(u.y-e.y,2)+Math.pow(u.z-e.z,2)),v=m>y*1.1,w=Math.sqrt(Math.pow(s.x-e.x,2)+Math.pow(s.y-e.y,2)+Math.pow(s.z-e.z,2)),_=Math.sqrt(Math.pow(h.x-e.x,2)+Math.pow(h.y-e.y,2)+Math.pow(h.z-e.z,2)),S=w>_*1.1,b=Math.sqrt(Math.pow(o.x-e.x,2)+Math.pow(o.y-e.y,2)+Math.pow(o.z-e.z,2)),C=Math.sqrt(Math.pow(d.x-e.x,2)+Math.pow(d.y-e.y,2)+Math.pow(d.z-e.z,2)),E=b>C*1.1,L=Math.sqrt(Math.pow(c.x-e.x,2)+Math.pow(c.y-e.y,2)+Math.pow(c.z-e.z,2)),A=Math.sqrt(Math.pow(p.x-e.x,2)+Math.pow(p.y-e.y,2)+Math.pow(p.z-e.z,2)),I=L>A*1.1,T=[v,S,E,I].filter(Boolean).length;return T>=3?"open":T<=1?"fist":"none"}function B1(a){const e=a[4],t=a[8];return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)+Math.pow(e.z-t.z,2))}function H1({onGrant:a,onSkip:e}){return X.jsx("div",{className:"fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center",children:X.jsx("div",{className:"bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-xl rounded-2xl p-8 max-w-md border border-white/20 shadow-2xl",children:X.jsxs("div",{className:"text-center space-y-6",children:[X.jsx("div",{className:"flex justify-center",children:X.jsx("div",{className:"w-20 h-20 bg-purple-600/30 rounded-full flex items-center justify-center",children:X.jsx(ax,{className:"w-10 h-10 text-purple-300"})})}),X.jsxs("div",{children:[X.jsx("h2",{className:"text-2xl text-white mb-2",children:"Camera Access Required"}),X.jsx("p",{className:"text-white/70 text-sm",children:"This VJ app needs camera access to track your hand movements and gestures for interactive visual control."})]}),X.jsx("div",{className:"bg-black/30 rounded-lg p-4 space-y-2 text-left",children:X.jsxs("div",{className:"flex items-start gap-3",children:[X.jsx(s1,{className:"w-5 h-5 text-green-400 mt-0.5 flex-shrink-0"}),X.jsxs("div",{className:"text-sm",children:[X.jsx("div",{className:"text-white/90",children:"Hand Tracking"}),X.jsx("div",{className:"text-white/60 text-xs",children:"Real-time gesture recognition"})]})]})}),X.jsxs("div",{className:"flex gap-3",children:[X.jsx("button",{onClick:e,className:"flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all",children:"Skip"}),X.jsx("button",{onClick:a,className:"flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg transition-all font-medium",children:"Allow Access"})]}),X.jsx("p",{className:"text-white/50 text-xs",children:"Your camera feed is processed locally on your device. No data is sent to external servers."})]})})})}function ti(a){return Number.isFinite(a)?Math.round(Math.min(255,Math.max(0,a))).toString(16).padStart(2,"0"):"00"}const _f={physics:{initialVelocity:4,damping:.98},size:{baseRange:[100,200],growthMultiplier:1.5,shrinkMultiplier:.2,transitionSpeed:.3},glow:{layers:2,expansion:.4,layerFade:.3},emission:{openHandRate:.5,closedHandRate:.05},trail:{fadeAlpha:.3},limits:{maxParticles:50},explosion:{particleCount:50,speedRange:[5,20],sizeMultiplier:1.5,forceMultiplier:10,growthFactor:.8,vibrationDuration:.25,cooldown:1e3,flashDelay:20},controls:{fingerCountSpeed:{oneFinger:.01,twoFingers:1,threeFingers:1.4,fourFingers:1.7,fiveFingers:2},openOpacity:1,closedOpacity:1,fadeOutRate:.08}};function Io(a,e){let t=a;for(const i of e.split(".")){if(typeof t!="object"||t===null)return;t=t[i]}return typeof t=="number"?t:void 0}function Xi(a,e){const t=structuredClone(a);for(const[i,s]of Object.entries(e)){if(!Number.isFinite(s)||Io(a,i)===void 0)continue;const o=i.split("."),c=o.pop();let u=t;for(const h of o)u=u[h];u[c]=s}return t}function R0(a){if(typeof a!="object"||a===null||Array.isArray(a))return{};const e={};for(const[t,i]of Object.entries(a)){if(typeof i!="object"||i===null||Array.isArray(i))continue;const s={};for(const[o,c]of Object.entries(i))typeof c=="number"&&Number.isFinite(c)&&(s[o]=c);Object.keys(s).length>0&&(e[t]=s)}return e}let ux=1,hx=0;function V1(a,e){ux=e,hx+=a*e}function si(){return ux}function Gc(){return hx}class Ih{constructor(e,t,i,s,o){F(this,"x");F(this,"y");F(this,"vx");F(this,"vy");F(this,"size");F(this,"color");F(this,"baseSize");F(this,"targetSize");F(this,"alpha",1);this.x=e,this.y=t;const c=o.physics.initialVelocity;this.vx=(Math.random()-.5)*c,this.vy=(Math.random()-.5)*c;const[u,h]=o.size.baseRange;this.baseSize=(u+Math.random()*(h-u))*s,this.size=this.baseSize,this.targetSize=this.baseSize,this.color=i}update(e,t,i,s){e?(this.targetSize=this.baseSize*s.size.growthMultiplier,this.alpha=s.controls.openOpacity,t>0&&(this.vx+=(Math.random()-.5)*t*s.explosion.forceMultiplier*i,this.vy+=(Math.random()-.5)*t*s.explosion.forceMultiplier*i,this.targetSize=this.baseSize*(1.2+t*s.explosion.growthFactor))):(this.targetSize=this.baseSize*s.size.shrinkMultiplier,this.alpha=Math.max(0,this.alpha-s.controls.fadeOutRate)),this.size+=(this.targetSize-this.size)*s.size.transitionSpeed,this.x+=this.vx*i,this.y+=this.vy*i,this.vx*=s.physics.damping,this.vy*=s.physics.damping}}class G1{constructor(e,t){F(this,"cfg",_f);F(this,"canvas");F(this,"ctx");F(this,"particles",[]);F(this,"time",0);F(this,"vibrationTimer",0);F(this,"isExploding",!1);this.canvas=e,this.ctx=t}setParams(e){this.cfg=Xi(_f,e)}render(e,t){this.time+=.016*si(),this.ctx.fillStyle=`rgba(0, 0, 0, ${this.cfg.trail.fadeAlpha})`,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&!this.isExploding&&(this.createExplosionParticles(t),this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.004,i=Math.max(0,this.vibrationTimer));let s=this.cfg.controls.fingerCountSpeed.twoFingers,o=!1,c=!1,u=0,h=0;e.left&&(o=e.left.gesture==="open",u=e.left.fingerCount||0,e.left.gesture==="pinch"&&(u=1)),e.right&&(c=e.right.gesture==="open",h=e.right.fingerCount||0,e.right.gesture==="pinch"&&(h=1));const d=o||c,p=Math.max(u,h);if(p===1?s=this.cfg.controls.fingerCountSpeed.oneFinger:p===2?s=this.cfg.controls.fingerCountSpeed.twoFingers:p===3?s=this.cfg.controls.fingerCountSpeed.threeFingers:p===4?s=this.cfg.controls.fingerCountSpeed.fourFingers:p>=5&&(s=this.cfg.controls.fingerCountSpeed.fiveFingers),e.left){const m=e.left.gesture==="open"?this.cfg.emission.openHandRate:this.cfg.emission.closedHandRate;Math.random()<m&&this.particles.push(new Ih(e.left.position.x*this.canvas.width,e.left.position.y*this.canvas.height,t[Math.floor(Math.random()*t.length)],1,this.cfg))}if(e.right){const m=e.right.gesture==="open"?this.cfg.emission.openHandRate:this.cfg.emission.closedHandRate;Math.random()<m&&this.particles.push(new Ih(e.right.position.x*this.canvas.width,e.right.position.y*this.canvas.height,t[Math.floor(Math.random()*t.length)],1,this.cfg))}this.particles=this.particles.filter(g=>{if(g.update(d,i,s,this.cfg),g.alpha<.01)return!1;this.ctx.save(),this.ctx.globalAlpha=g.alpha;for(let m=0;m<this.cfg.glow.layers;m++){const y=g.size*(1+m*this.cfg.glow.expansion),v=this.ctx.createRadialGradient(g.x,g.y,0,g.x,g.y,y),w=(1-m*this.cfg.glow.layerFade)*g.alpha;v.addColorStop(0,g.color+ti(w*255)),v.addColorStop(.5,g.color+ti(w*150)),v.addColorStop(1,g.color+"00"),this.ctx.fillStyle=v,this.ctx.beginPath(),this.ctx.arc(g.x,g.y,y,0,Math.PI*2),this.ctx.fill()}return this.ctx.restore(),!0}),this.particles.length>this.cfg.limits.maxParticles&&(this.particles=this.particles.slice(-this.cfg.limits.maxParticles))}createExplosionParticles(e){const t=this.canvas.width/2,i=this.canvas.height/2;for(let s=0;s<this.cfg.explosion.particleCount;s++){const o=Math.random()*Math.PI*2,[c,u]=this.cfg.explosion.speedRange,h=c+Math.random()*(u-c),d=new Ih(t,i,e[Math.floor(Math.random()*e.length)],this.cfg.explosion.sizeMultiplier,this.cfg);d.vx=Math.cos(o)*h,d.vy=Math.sin(o)*h,this.particles.push(d)}this.ctx.fillStyle="#FFFFFFDD",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),setTimeout(()=>{this.ctx.fillStyle=e[0]+"80",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)},this.cfg.explosion.flashDelay),this.vibrationTimer=this.cfg.explosion.vibrationDuration,this.isExploding=!0,setTimeout(()=>{this.isExploding=!1},this.cfg.explosion.cooldown)}}const yf={trail:{fadeAlpha:.1,lineThickness:2},fingerCountSpeed:{oneFinger:.003,normalFingers:1,fiveFingers:2},fingerCountStrokeWidth:{oneFinger:1,twoFingers:4.5,normalFingers:1.5,fiveFingers:6},complexity:{baseSides:3,leftHandMultiplier:1,rightHandMultiplier:.5,maxSides:12,minSides:3},vibration:{flashDuration:.8,shakeAmountX:40,shakeAmountY:40},polygon:{baseSize:100,strokeWidth:2},layers:{count:5,sizeGrowth:.3,rotationOffset:.5,baseOpacity:.3,opacityFade:.05},bridge:{thickness:5,waveAmplitude:30},animation:{baseRotationMultiplier:.01}};class P0{constructor(e,t){F(this,"cfg",yf);F(this,"canvas");F(this,"ctx");F(this,"time",0);F(this,"vibrationTimer",0);this.canvas=e,this.ctx=t}setParams(e){this.cfg=Xi(yf,e)}render(e,t){var w,_,S,b;this.time+=.016*si(),this.ctx.fillStyle=`rgba(0, 0, 0, ${this.cfg.trail.fadeAlpha})`,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&(this.ctx.fillStyle="#FFFFFFCC",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.vibrationTimer=this.cfg.vibration.flashDuration),this.vibrationTimer>0&&(this.vibrationTimer-=.016,i=Math.max(0,this.vibrationTimer));let s=1,o=this.cfg.complexity.baseSides,c=1;if(e.left&&e.left.gesture==="open"){const C=e.left.fingerCount||2;C===1?(s=this.cfg.fingerCountSpeed.oneFinger,c=this.cfg.fingerCountStrokeWidth.oneFinger):C===2?(s=this.cfg.fingerCountSpeed.normalFingers,c=this.cfg.fingerCountStrokeWidth.twoFingers):C===5?(s=this.cfg.fingerCountSpeed.fiveFingers,c=this.cfg.fingerCountStrokeWidth.fiveFingers):(s=this.cfg.fingerCountSpeed.normalFingers,c=this.cfg.fingerCountStrokeWidth.normalFingers),o=Math.floor(this.cfg.complexity.baseSides+C*this.cfg.complexity.leftHandMultiplier)}if(e.left&&e.left.gesture==="pinch"&&(s=this.cfg.fingerCountSpeed.oneFinger,c=this.cfg.fingerCountStrokeWidth.oneFinger,o=Math.floor(this.cfg.complexity.baseSides+1*this.cfg.complexity.leftHandMultiplier)),e.right&&e.right.gesture==="open"){const C=e.right.fingerCount||2;let E,L;C===1?(E=this.cfg.fingerCountSpeed.oneFinger,L=this.cfg.fingerCountStrokeWidth.oneFinger):C===2?(E=this.cfg.fingerCountSpeed.normalFingers,L=this.cfg.fingerCountStrokeWidth.twoFingers):C===5?(E=this.cfg.fingerCountSpeed.fiveFingers,L=this.cfg.fingerCountStrokeWidth.fiveFingers):(E=this.cfg.fingerCountSpeed.normalFingers,L=this.cfg.fingerCountStrokeWidth.normalFingers),s*=E,c=Math.max(c,L),o+=Math.floor(C*this.cfg.complexity.rightHandMultiplier)}e.right&&e.right.gesture==="pinch"&&(s*=this.cfg.fingerCountSpeed.oneFinger,c=Math.max(c,this.cfg.fingerCountStrokeWidth.oneFinger),o+=Math.floor(1*this.cfg.complexity.rightHandMultiplier));const u=this.time*s*this.cfg.animation.baseRotationMultiplier,h=i>0?(Math.random()-.5)*this.cfg.vibration.shakeAmountX*i:0,d=i>0?(Math.random()-.5)*this.cfg.vibration.shakeAmountY*i:0;this.drawGestureTrails(e,t);const p=(w=e.left)!=null&&w.position.x?e.left.position.x*this.canvas.width+h:this.canvas.width/2,g=(_=e.left)!=null&&_.position.y?e.left.position.y*this.canvas.height+d:this.canvas.height/2,m=(S=e.right)!=null&&S.position.x?e.right.position.x*this.canvas.width+h:this.canvas.width/2+100,y=(b=e.right)!=null&&b.position.y?e.right.position.y*this.canvas.height+d:this.canvas.height/2,v=this.cfg.polygon.baseSize*(1+i);for(let C=0;C<this.cfg.layers.count;C++){const E=v*(1+C*this.cfg.layers.sizeGrowth),L=u+C*this.cfg.layers.rotationOffset;e.left&&e.left.gesture==="open"&&this.drawPolygon(p,g,Math.max(this.cfg.complexity.minSides,Math.min(this.cfg.complexity.maxSides,o+C)),E+C*30,L,t[C%t.length],this.cfg.layers.baseOpacity-C*this.cfg.layers.opacityFade,c),e.right&&e.right.gesture==="open"&&this.drawPolygon(m,y,Math.max(this.cfg.complexity.minSides,Math.min(this.cfg.complexity.maxSides,o+C)),E+C*30,-L,t[(C+2)%t.length],this.cfg.layers.baseOpacity-C*this.cfg.layers.opacityFade,c)}e.left&&e.right&&e.left.gesture==="open"&&e.right.gesture==="open"&&this.drawBridge(p,g,m,y,t,v,o)}drawGestureTrails(e,t){if(!e.gestureTrail||e.gestureTrail.length<2)return;const i=e.gestureTrail;for(let s=1;s<i.length;s++){const o=i[s-1],c=i[s],u=s/i.length,h=c.hand==="left"?t[0]:t[2];this.ctx.strokeStyle=h+ti(u*100),this.ctx.lineWidth=this.cfg.trail.lineThickness*u,this.ctx.lineCap="round",this.ctx.beginPath(),this.ctx.moveTo(o.x*this.canvas.width,o.y*this.canvas.height),this.ctx.lineTo(c.x*this.canvas.width,c.y*this.canvas.height),this.ctx.stroke()}}drawPolygon(e,t,i,s,o,c,u,h){this.ctx.save(),this.ctx.translate(e,t),this.ctx.rotate(o),this.ctx.beginPath();for(let p=0;p<=i;p++){const g=p/i*Math.PI*2,m=Math.cos(g)*s,y=Math.sin(g)*s;p===0?this.ctx.moveTo(m,y):this.ctx.lineTo(m,y)}this.ctx.closePath();const d=this.ctx.createRadialGradient(0,0,0,0,0,s);d.addColorStop(0,c+ti(u*255)),d.addColorStop(1,c+"00"),this.ctx.fillStyle=d,this.ctx.fill(),this.ctx.strokeStyle=c+ti(u*200),this.ctx.lineWidth=this.cfg.polygon.strokeWidth*h,this.ctx.stroke(),this.ctx.restore()}drawBridge(e,t,i,s,o,c,u){const h=this.ctx.createLinearGradient(e,t,i,s);o.forEach((d,p)=>{h.addColorStop(p/(o.length-1),d+"80")}),this.ctx.strokeStyle=h,this.ctx.lineWidth=this.cfg.bridge.thickness,this.ctx.lineCap="round",this.ctx.beginPath();for(let d=0;d<=u;d++){const p=d/u,g=e+(i-e)*p,m=t+(s-t)*p,y=Math.sin(p*Math.PI*4+this.time*2)*this.cfg.bridge.waveAmplitude,v=-(s-t)/Math.hypot(i-e,s-t),w=(i-e)/Math.hypot(i-e,s-t);d===0?this.ctx.moveTo(g+v*y,m+w*y):this.ctx.lineTo(g+v*y,m+w*y)}this.ctx.stroke()}}const Sf={fingerCountSpeed:{oneFinger:.05,normalFingers:1,fiveFingers:1.5,maxSpeed:2},wave:{baseAmplitude:50,maxAmplitude:250,baseFrequency:.01,maxFrequency:.05,segments:200,lineThickness:3},fingerAmplitude:{oneFingerMultiplier:.1,twoFingersMultiplier:.6,threeFingersMultiplier:1.2,fourFingersMultiplier:2.5,fiveFingersMultiplier:4,normalFingersMultiplier:.3},gesture:{leftOpenHandBoost:3,rightOpenHandBoost:1.5,leftFistAmplitude:20,rightFistReduction:.5,pinchBaseFrequency:.005,pinchLeftMultiplier:.1,pinchRightMultiplier:.05,pinchLeftYOffsetMultiplier:-150,pinchRightYOffsetMultiplier:-150},velocity:{intensityMultiplier:2},hold:{durationThreshold:2,amplitudeBoost:2},distance:{scaleMultiplier:2},waveCount:{active:7,idle:3},layers:{primarySpeed:2,secondarySpeed:3,tertiarySpeed:1,secondaryAmplitude:.5,tertiaryAmplitude:.3},handInfluence:{strength:.5,radius:200},focalPoint:{baseSize:20,pulseSpeed:5,pulseAmount:.1,glowLayers:3},visual:{backgroundTint:"20",clapFlashOpacity:"30",fillOpacity:50}};class W1{constructor(e,t){F(this,"cfg",Sf);F(this,"canvas");F(this,"ctx");F(this,"time",0);F(this,"bgGradient",null);F(this,"needsGradientUpdate",!0);this.canvas=e,this.ctx=t}setParams(e){this.cfg=Xi(Sf,e)}render(e,t){var v,w,_,S;this.time+=.016*si(),this.time>1e3&&(this.time=this.time%1e3),this.needsGradientUpdate&&(this.bgGradient=this.ctx.createLinearGradient(0,0,0,this.canvas.height),this.bgGradient.addColorStop(0,"#000000"),this.bgGradient.addColorStop(1,t[0]+this.cfg.visual.backgroundTint),this.needsGradientUpdate=!1),this.ctx.fillStyle=this.bgGradient,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=this.cfg.wave.baseAmplitude,s=this.cfg.wave.baseFrequency,o=1,c=1,u=1,h=0;if(e.left){Math.max(0,Math.min(1,e.left.position.x||.5)),Math.max(0,Math.min(1,e.left.position.y||.5));const b=e.left.velocity||0,C=Math.max(0,Math.min(b,1));c*=1+C*this.cfg.velocity.intensityMultiplier;let E=e.left.fingerCount||0;e.left.gesture==="pinch"&&(E=1),E===1?(u=this.cfg.fingerCountSpeed.oneFinger,i*=this.cfg.fingerAmplitude.oneFingerMultiplier):E===2?(u=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.twoFingersMultiplier):E===3?(u=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.threeFingersMultiplier):E===4?(u=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.fourFingersMultiplier):E>=5&&(u=this.cfg.fingerCountSpeed.fiveFingers,i*=this.cfg.fingerAmplitude.fiveFingersMultiplier),(e.left.holdDuration||0)>this.cfg.hold.durationThreshold&&(i*=this.cfg.hold.amplitudeBoost),e.left.gesture==="open"?i*=this.cfg.gesture.leftOpenHandBoost*c:e.left.gesture==="fist"?i=this.cfg.gesture.leftFistAmplitude:e.left.gesture==="pinch"&&(s=this.cfg.gesture.pinchBaseFrequency+(e.left.pinchDistance||0)*this.cfg.gesture.pinchLeftMultiplier,h=(e.left.pinchDistance||0)*this.cfg.gesture.pinchLeftYOffsetMultiplier)}if(e.right){Math.max(0,Math.min(1,e.right.position.x||.5)),Math.max(0,Math.min(1,e.right.position.y||.5));const b=e.right.velocity||0,C=Math.max(0,Math.min(b,1));c*=1+C*this.cfg.velocity.intensityMultiplier;let E=e.right.fingerCount||0;e.right.gesture==="pinch"&&(E=1);let L=1;E===1?(L=this.cfg.fingerCountSpeed.oneFinger,i*=this.cfg.fingerAmplitude.oneFingerMultiplier):E===2?(L=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.twoFingersMultiplier):E===3?(L=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.threeFingersMultiplier):E===4?(L=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.fourFingersMultiplier):E>=5&&(L=this.cfg.fingerCountSpeed.fiveFingers,i*=this.cfg.fingerAmplitude.fiveFingersMultiplier),u*=L,(e.right.holdDuration||0)>this.cfg.hold.durationThreshold&&(i*=this.cfg.hold.amplitudeBoost),e.right.gesture==="open"?i*=this.cfg.gesture.rightOpenHandBoost*c:e.right.gesture==="fist"?i*=this.cfg.gesture.rightFistReduction:e.right.gesture==="pinch"&&(s+=(e.right.pinchDistance||0)*this.cfg.gesture.pinchRightMultiplier,h=(e.right.pinchDistance||0)*this.cfg.gesture.pinchRightYOffsetMultiplier)}c=Math.min(c,3),u=Math.min(u,this.cfg.fingerCountSpeed.maxSpeed),i=Math.min(i,this.cfg.wave.maxAmplitude),s=Math.min(s,this.cfg.wave.maxFrequency),isFinite(i)||(i=this.cfg.wave.baseAmplitude),isFinite(s)||(s=this.cfg.wave.baseFrequency),isFinite(u)||(u=1),e.distanceBetweenHands&&(o=.5+e.distanceBetweenHands*this.cfg.distance.scaleMultiplier);const d=e.left||e.right?this.cfg.waveCount.active:this.cfg.waveCount.idle,p=((v=e.left)==null?void 0:v.fingerCount)||0,g=((w=e.right)==null?void 0:w.fingerCount)||0,m=Math.max(p,g);let y=1;m>=4&&(y=.6);for(let b=0;b<d;b++){const C=this.canvas.height/(d+1)*(b+1)+h,E=b/d*Math.PI*2,L=((_=e.left)==null?void 0:_.position.x)??0,A=((S=e.right)==null?void 0:S.position.x)??1,I=Math.max(0,Math.min(1,L))*this.canvas.width,T=Math.max(0,Math.min(1,A))*this.canvas.width;this.drawWave(C,i*o,s,this.time*u+E,t[b%t.length],I,T,b/d,y)}if(e.left){const b=Math.max(0,Math.min(1,e.left.position.x||.5)),C=Math.max(0,Math.min(1,e.left.position.y||.5));this.drawFocalPoint(b*this.canvas.width,C*this.canvas.height,t[0],o,i)}if(e.right){const b=Math.max(0,Math.min(1,e.right.position.x||.5)),C=Math.max(0,Math.min(1,e.right.position.y||.5));this.drawFocalPoint(b*this.canvas.width,C*this.canvas.height,t[2%t.length],o,i)}}drawWave(e,t,i,s,o,c,u,h,d){this.ctx.beginPath();const p=Math.floor(this.cfg.wave.segments*d);t=Math.min(t,150);for(let v=0;v<=p;v++){const w=v/p*this.canvas.width,_=Math.sin(w*i+s*this.cfg.layers.primarySpeed)*t,S=Math.sin(w*i*2+s*this.cfg.layers.secondarySpeed)*(t*this.cfg.layers.secondaryAmplitude),b=Math.sin(w*i*.5+s*this.cfg.layers.tertiarySpeed)*(t*this.cfg.layers.tertiaryAmplitude);let C=0;const E=Math.abs(w-c),L=Math.abs(w-u),A=-E/this.cfg.handInfluence.radius,I=-L/this.cfg.handInfluence.radius;A>-10&&(C+=t*this.cfg.handInfluence.strength*Math.exp(A)),I>-10&&(C+=t*this.cfg.handInfluence.strength*Math.exp(I)),C=Math.min(C,80);let T=e+_+S+b+C;T=Math.max(-50,Math.min(this.canvas.height+50,T)),isFinite(T)&&(v===0?this.ctx.moveTo(w,T):this.ctx.lineTo(w,T))}const g=Math.max(0,Math.min(1,h)),m=this.ctx.createLinearGradient(0,0,this.canvas.width,0);m.addColorStop(0,o+ti(g*100)),m.addColorStop(.5,o+ti(g*255)),m.addColorStop(1,o+ti(g*100)),this.ctx.strokeStyle=m,this.ctx.lineWidth=this.cfg.wave.lineThickness,this.ctx.stroke(),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.closePath();const y=this.ctx.createLinearGradient(0,e,0,this.canvas.height);y.addColorStop(0,o+ti(g*this.cfg.visual.fillOpacity)),y.addColorStop(1,o+"00"),this.ctx.fillStyle=y,this.ctx.fill()}drawFocalPoint(e,t,i,s,o){const c=this.cfg.focalPoint.baseSize*s+Math.sin(this.time*this.cfg.focalPoint.pulseSpeed)*o*this.cfg.focalPoint.pulseAmount,u=Math.max(.1,c);for(let h=0;h<this.cfg.focalPoint.glowLayers;h++){const d=this.ctx.createRadialGradient(e,t,0,e,t,u*(h+1));d.addColorStop(0,i+"AA"),d.addColorStop(1,i+"00"),this.ctx.fillStyle=d,this.ctx.beginPath(),this.ctx.arc(e,t,u*(h+1),0,Math.PI*2),this.ctx.fill()}}}class X1{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"time",0);F(this,"nodes",[]);F(this,"glitchBlocks",[]);F(this,"pixelSize",20);F(this,"vibrationTimer",0);F(this,"glitchIntensity",0);F(this,"isExploding",!1);this.canvas=e,this.ctx=t;const i=40;for(let s=0;s<i;s++){const o=Math.random()*e.width,c=Math.random()*e.height,u={x:o,y:c,targetX:o,targetY:c,vx:0,vy:0,size:4+Math.random()*8,connections:[],waveform:Array.from({length:50},()=>Math.random()*2-1),attractedToHand:null};this.nodes.push(u)}this.updateConnections()}updateConnections(){this.nodes.forEach(e=>e.connections=[]),this.nodes.forEach((e,t)=>{this.nodes.forEach((i,s)=>{t!==s&&Math.hypot(e.x-i.x,e.y-i.y)<200&&e.connections.length<4&&e.connections.push(s)})})}render(e,t){this.time+=.016*si(),this.ctx.fillStyle="rgba(0, 0, 0, 0.1)",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&!this.isExploding&&(this.vibrationTimer=1,this.glitchIntensity=1,this.createGlitchExplosion(t),this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.016,i=Math.max(0,this.vibrationTimer)),this.glitchIntensity>0&&(this.glitchIntensity-=.01);let s=1,o=!1,c=0,u=0,h=0,d=0,p=!1,g=!1,m=2,y=2;if(e.left&&e.left.gesture==="open"){o=!0,p=!0;const v=e.left.fingerCount||2;m=v,v===1?s=.01:v===5?s=2:s=1,c=e.left.position.x*this.canvas.width,u=e.left.position.y*this.canvas.height}if(e.left&&e.left.gesture==="pinch"&&(o=!0,p=!0,m=1,s=.01,c=e.left.position.x*this.canvas.width,u=e.left.position.y*this.canvas.height),e.right&&e.right.gesture==="open"){o=!0,g=!0;const v=e.right.fingerCount||2;y=v;let w;v===1?w=.01:v===5?w=2:w=1,s*=w,h=e.right.position.x*this.canvas.width,d=e.right.position.y*this.canvas.height}e.right&&e.right.gesture==="pinch"&&(o=!0,g=!0,y=1,s*=.01,h=e.right.position.x*this.canvas.width,d=e.right.position.y*this.canvas.height),this.nodes.forEach((v,w)=>{if(o){if(p&&g){const b=Math.hypot(v.x-c,v.y-u),C=Math.hypot(v.x-h,v.y-d);b<C?(v.attractedToHand="left",v.targetX=c+Math.cos(w*.5+this.time*s)*100,v.targetY=u+Math.sin(w*.5+this.time*s)*100):(v.attractedToHand="right",v.targetX=h+Math.cos(w*.5+this.time*s)*100,v.targetY=d+Math.sin(w*.5+this.time*s)*100)}else if(p){v.attractedToHand="left";const b=w/this.nodes.length*Math.PI*2+this.time*s,C=50+w%3*60;v.targetX=c+Math.cos(b)*C,v.targetY=u+Math.sin(b)*C}else if(g){v.attractedToHand="right";const b=w/this.nodes.length*Math.PI*2+this.time*s,C=50+w%3*60;v.targetX=h+Math.cos(b)*C,v.targetY=d+Math.sin(b)*C}const _=v.targetX-v.x,S=v.targetY-v.y;v.vx+=_*.05*s,v.vy+=S*.05*s}else{v.targetX+=(Math.random()-.5)*2,v.targetY+=(Math.random()-.5)*2;const _=v.targetX-v.x,S=v.targetY-v.y;v.vx+=_*.01,v.vy+=S*.01}i>0&&(v.vx+=(Math.random()-.5)*i*40,v.vy+=(Math.random()-.5)*i*40),v.vx*=.85,v.vy*=.85,v.x+=v.vx,v.y+=v.vy,v.x<0&&(v.x=this.canvas.width),v.x>this.canvas.width&&(v.x=0),v.y<0&&(v.y=this.canvas.height),v.y>this.canvas.height&&(v.y=0),v.waveform.shift(),v.waveform.push(Math.sin(this.time*s*2+v.x*.01)*(o?2:.5))}),this.time%.5<.016&&this.updateConnections(),this.drawNodeConnections(t,i,p,g,c,u,h,d),this.drawNodes(t,i),this.drawWaveforms(t,s),this.drawHandIndicators(e,t,m,y),this.drawGlitchBlocks(t),this.glitchIntensity>.3&&this.drawScreenGlitch(),o&&Math.random()<.03*s&&this.spawnGlitchBlock(t)}drawNodeConnections(e,t,i,s,o,c,u,h){this.nodes.forEach((d,p)=>{if(d.attractedToHand==="left"&&i){this.ctx.beginPath(),this.ctx.moveTo(d.x,d.y),this.ctx.lineTo(o,c);const g=this.ctx.createLinearGradient(d.x,d.y,o,c);g.addColorStop(0,e[0]+"80"),g.addColorStop(1,e[1]+"FF"),this.ctx.strokeStyle=g,this.ctx.lineWidth=2+t*3,this.ctx.stroke()}if(d.attractedToHand==="right"&&s){this.ctx.beginPath(),this.ctx.moveTo(d.x,d.y),this.ctx.lineTo(u,h);const g=this.ctx.createLinearGradient(d.x,d.y,u,h);g.addColorStop(0,e[2]+"80"),g.addColorStop(1,e[3]+"FF"),this.ctx.strokeStyle=g,this.ctx.lineWidth=2+t*3,this.ctx.stroke()}d.connections.forEach(g=>{const m=this.nodes[g];if(!m)return;this.ctx.beginPath(),this.ctx.moveTo(d.x,d.y),this.ctx.lineTo(m.x,m.y);const y=Math.floor(p/this.nodes.length*e.length);this.ctx.strokeStyle=e[y]+"40",this.ctx.lineWidth=1+t*2,this.ctx.stroke()})})}drawNodes(e,t){this.nodes.forEach((i,s)=>{const o=Math.floor(s/this.nodes.length*e.length),c=i.size*(1+t*.5),u=this.ctx.createRadialGradient(i.x,i.y,0,i.x,i.y,c);u.addColorStop(0,e[o]+"FF"),u.addColorStop(.5,e[(o+1)%e.length]+"AA"),u.addColorStop(1,e[o]+"00"),this.ctx.fillStyle=u,this.ctx.beginPath(),this.ctx.arc(i.x,i.y,c,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="#FFFFFF80",this.ctx.beginPath(),this.ctx.arc(i.x,i.y,c*.3,0,Math.PI*2),this.ctx.fill()})}drawWaveforms(e,t){this.nodes.forEach((i,s)=>{const o=Math.floor(s/this.nodes.length*e.length);this.ctx.beginPath(),this.ctx.strokeStyle=e[o]+"60",this.ctx.lineWidth=2;for(let c=0;c<i.waveform.length-1;c++){const u=i.x+c-i.waveform.length/2,h=i.y+i.waveform[c]*20;c===0?this.ctx.moveTo(u,h):this.ctx.lineTo(u,h)}this.ctx.stroke()})}drawHandIndicators(e,t,i,s){if(e.left&&e.left.gesture==="open"){const o=e.left.position.x*this.canvas.width,c=e.left.position.y*this.canvas.height,u=30+Math.sin(this.time*3)*10;this.ctx.strokeStyle=t[0]+"AA",this.ctx.lineWidth=3,this.ctx.beginPath(),this.ctx.arc(o,c,u,0,Math.PI*2),this.ctx.stroke(),this.ctx.fillStyle=t[0],this.ctx.font="20px monospace",this.ctx.fillText(`${i}`,o-10,c+5)}if(e.right&&e.right.gesture==="open"){const o=e.right.position.x*this.canvas.width,c=e.right.position.y*this.canvas.height,u=30+Math.sin(this.time*3)*10;this.ctx.strokeStyle=t[2]+"AA",this.ctx.lineWidth=3,this.ctx.beginPath(),this.ctx.arc(o,c,u,0,Math.PI*2),this.ctx.stroke(),this.ctx.fillStyle=t[2],this.ctx.font="20px monospace",this.ctx.fillText(`${s}`,o-10,c+5)}}drawGlitchBlocks(e){this.glitchBlocks=this.glitchBlocks.filter(t=>(t.life-=.016,t.life>0?(this.ctx.fillStyle=t.color+ti(t.life*255),this.ctx.fillRect(t.x,t.y,t.width,t.height),!0):!1))}spawnGlitchBlock(e){this.glitchBlocks.push({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height,width:20+Math.random()*100,height:10+Math.random()*50,color:e[Math.floor(Math.random()*e.length)],life:.5+Math.random()*.5})}createGlitchExplosion(e){for(let t=0;t<50;t++)this.spawnGlitchBlock(e);this.ctx.fillStyle="#FFFFFF60",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.nodes.forEach(t=>{t.vx=(Math.random()-.5)*50,t.vy=(Math.random()-.5)*50})}drawScreenGlitch(){const e=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height),t=Math.floor(Math.random()*20)-10;this.ctx.putImageData(e,t,0);for(let i=0;i<5;i++){const s=Math.random()*this.canvas.height,o=5+Math.random()*20,c=this.ctx.getImageData(0,s,this.canvas.width,o),u=(Math.random()-.5)*100;this.ctx.putImageData(c,u,s)}}}class j1{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"fragments",[]);F(this,"hearts",[]);F(this,"glitchIntensity",0);F(this,"lastHandsTouching",!1);F(this,"handsTouchingTime",0);F(this,"gracePeriod",0);this.canvas=e,this.ctx=t}render(e,t){this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);const i=this.checkHandsTouching(e);i?(this.handsTouchingTime+=1,this.gracePeriod=30,this.spawnHearts(e)):this.gracePeriod>0?(this.gracePeriod-=1,this.handsTouchingTime+=1):this.handsTouchingTime=0,this.lastHandsTouching=i,this.updateHearts(),this.renderHearts(),this.glitchIntensity*=.95,e.left&&e.left.landmarks&&this.renderHandFromLandmarks(e.left.landmarks,"left"),e.right&&e.right.landmarks&&this.renderHandFromLandmarks(e.right.landmarks,"right"),this.applyNoiseOverlay(),(this.glitchIntensity>.1||Math.random()<.05)&&this.applyGlitchEffect()}renderHandFromLandmarks(e,t){const s=this.canvas.width/2,o=this.canvas.height/2,c=e.map(p=>({x:s+(p.x*this.canvas.width-s)*1.8,y:o+(p.y*this.canvas.height-o)*1.8,z:p.z})),u=c[0],h=180*1.8,d={x:u.x,y:u.y+h,z:u.z};this.fillHandWithDots(c,u,d),this.drawHandSkeleton(c),this.drawTechnicalMarkers(u.x,u.y)}fillHandWithDots(e,t,i){const c=e.map(m=>m.x),u=e.map(m=>m.y),h=Math.min(...c,i.x)-50,d=Math.max(...c,i.x)+50,p=Math.min(...u)-50,g=Math.max(...u,i.y)+50;for(let m=p;m<g;m+=7)for(let y=h;y<d;y+=7){const v=this.getDistanceToHandSkeleton(y,m,e,t,i);if(v.inside){const S=1-v.distance/45,b=Math.pow(S,1.5),C=v.zDepth,E=b*(.7+C*.3);if(E<.15)continue;const L=Math.floor(E*255),A=Math.max(.3,Math.min(1,E*1.2)),I=(Math.random()-.5)*8*this.glitchIntensity,T=(Math.random()-.5)*8*this.glitchIntensity,U=.8+Math.random()*.2;this.ctx.fillStyle=`rgba(${L}, ${L}, ${L}, ${A*U})`,this.ctx.beginPath(),this.ctx.arc(y+I,m+T,1.5,0,Math.PI*2),this.ctx.fill(),E>.8&&Math.random()<.15&&(this.ctx.fillStyle=`rgba(255, 255, 255, ${A*1.3})`,this.ctx.beginPath(),this.ctx.arc(y+I,m+T,1.5*1.2,0,Math.PI*2),this.ctx.fill())}}}getDistanceToHandSkeleton(e,t,i,s,o){const c=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[0,9],[9,10],[10,11],[11,12],[0,13],[13,14],[14,15],[15,16],[0,17],[17,18],[18,19],[19,20],[5,9],[9,13],[13,17]];let u=1/0,h=0;for(const[m,y]of c){const v=i[m],w=i[y],_=this.distanceToSegment(e,t,v.x,v.y,w.x,w.y);u=Math.min(u,_),h=(v.z+w.z)/2}const d=this.distanceToSegment(e,t,s.x,s.y,o.x,o.y);return u=Math.min(u,d),h=(s.z+o.z)/2,{inside:u<45,distance:u,zDepth:h}}distanceToSegment(e,t,i,s,o,c){const u=o-i,h=c-s,d=u*u+h*h;if(d===0)return Math.sqrt((e-i)*(e-i)+(t-s)*(t-s));let p=((e-i)*u+(t-s)*h)/d;p=Math.max(0,Math.min(1,p));const g=i+p*u,m=s+p*h;return Math.sqrt((e-g)*(e-g)+(t-m)*(t-m))}drawHandSkeleton(e){this.ctx.strokeStyle="rgba(255, 255, 255, 0.3)",this.ctx.lineWidth=1,this.ctx.setLineDash([4,4]);const t=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[0,9],[9,10],[10,11],[11,12],[0,13],[13,14],[14,15],[15,16],[0,17],[17,18],[18,19],[19,20],[5,9],[9,13],[13,17],[17,5]];this.ctx.beginPath();for(const[i,s]of t){const o=e[i],c=e[s],u=(Math.random()-.5)*5*this.glitchIntensity,h=(Math.random()-.5)*5*this.glitchIntensity,d=(Math.random()-.5)*5*this.glitchIntensity,p=(Math.random()-.5)*5*this.glitchIntensity;this.ctx.moveTo(o.x+u,o.y+h),this.ctx.lineTo(c.x+d,c.y+p)}this.ctx.stroke(),this.ctx.setLineDash([]),this.ctx.fillStyle="rgba(255, 255, 255, 0.7)",e.forEach(i=>{this.ctx.beginPath(),this.ctx.arc(i.x,i.y,2,0,Math.PI*2),this.ctx.fill()})}drawTechnicalMarkers(e,t){this.ctx.strokeStyle="rgba(255, 255, 255, 0.5)",this.ctx.lineWidth=1;const i=15,s=80;[[e-s,t-s],[e+s,t-s],[e-s,t+s],[e+s,t+s]].forEach(([u,h])=>{this.ctx.beginPath(),this.ctx.moveTo(u,h),this.ctx.lineTo(u+(u<e?i:-i),h),this.ctx.moveTo(u,h),this.ctx.lineTo(u,h+(h<t?i:-i)),this.ctx.stroke()}),this.ctx.strokeStyle="rgba(255, 255, 255, 0.7)",this.ctx.lineWidth=1.5,this.ctx.beginPath(),this.ctx.moveTo(e-12,t),this.ctx.lineTo(e+12,t),this.ctx.moveTo(e,t-12),this.ctx.lineTo(e,t+12),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.arc(e,t,3,0,Math.PI*2),this.ctx.stroke(),this.ctx.fillStyle="rgba(255, 255, 255, 0.8)",this.ctx.font="11px monospace";const c=`[${Math.floor(e)},${Math.floor(t)}]`;this.ctx.fillText(c,e+s+15,t),this.ctx.fillStyle="rgba(255, 255, 255, 0.6)",this.ctx.font="9px monospace",this.ctx.fillText("TRACKING",e+s+15,t+15)}applyNoiseOverlay(){const e=.03+this.glitchIntensity*.04,t=2,i=.15;for(let s=0;s<this.canvas.width;s+=t*2)for(let o=0;o<this.canvas.height;o+=t*2)if(Math.random()<i){const c=Math.floor(Math.random()*255),u=Math.random()*e;this.ctx.fillStyle=`rgba(${c}, ${c}, ${c}, ${u})`,this.ctx.fillRect(s,o,t,t)}}applyGlitchEffect(){const e=Math.max(this.glitchIntensity,Math.random()*.3),t=15+Math.random()*15,i=Math.floor(this.canvas.height/t);for(let s=0;s<i;s++)if(Math.random()<e*.3){const o=s*t,c=(Math.random()-.5)*60*e;try{const u=this.ctx.getImageData(0,o,this.canvas.width,Math.min(t,this.canvas.height-o));this.ctx.putImageData(u,c,o)}catch{}}if(Math.random()<e*.5)for(let s=0;s<8;s++){const o=Math.random()*this.canvas.width,c=Math.random()*this.canvas.height,u=Math.random()*40+10,h=Math.random()*15+5;this.ctx.fillStyle="rgba(255, 255, 255, 0.3)",this.ctx.fillRect(o,c,u,h)}}checkHandsTouching(e){if(!e.left||!e.right||!e.left.landmarks||!e.right.landmarks)return!1;const t=[e.left.landmarks[0],e.left.landmarks[8],e.left.landmarks[12],e.left.landmarks[4]],i=[e.right.landmarks[0],e.right.landmarks[8],e.right.landmarks[12],e.right.landmarks[4]];for(const s of t)for(const o of i){const c=Math.sqrt(Math.pow(s.x-o.x,2)+Math.pow(s.y-o.y,2));if(c<.08)return console.log("✋ Hands touching! Distance:",c.toFixed(3)),!0}return!1}spawnHearts(e){if(!(Math.random()>.8)){console.log("Spawning hearts! Current count:",this.hearts.length);for(let t=0;t<3;t++){let s=!1;for(let o=0;o<20&&!s;o++){const c=Math.random()*this.canvas.width,u=Math.random()*this.canvas.height,h=20+Math.random()*30,d=h*1.5;let p=!1;for(const g of this.hearts){const m=c-g.x,y=u-g.y;if(Math.sqrt(m*m+y*y)<d+g.size*.75){p=!0;break}}p||(this.hearts.push({x:c,y:u,vx:0,vy:0,size:h,life:1,rotation:0,rotationSpeed:0}),s=!0,console.log("Heart placed at:",c,u,"size:",h))}}}}updateHearts(){this.hearts=this.hearts.filter(e=>(e.life-=.008,e.life>0))}renderHearts(){const e=Gc();this.hearts.forEach(t=>{this.ctx.save(),this.ctx.translate(t.x,t.y);const s=e*2.5%1;let o=1;s<.15?o=1+Math.sin(s/.15*Math.PI)*.2:s>=.2&&s<.3?o=1+Math.sin((s-.2)/.1*Math.PI)*.15:o=1,this.ctx.scale(o,o);const c=Math.max(2,t.size/8),u=t.life*.9,h=[[0,1,1,0,0,1,1,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,0],[0,0,1,1,1,1,0,0],[0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0]],d=-4*c,p=-4*c;for(let g=0;g<8;g++)for(let m=0;m<8;m++)h[g][m]===1&&(this.ctx.fillStyle=`rgba(255, 255, 255, ${u})`,this.ctx.fillRect(d+m*c,p+g*c,c,c),this.ctx.strokeStyle=`rgba(255, 255, 255, ${u*.3})`,this.ctx.lineWidth=.5,this.ctx.strokeRect(d+m*c,p+g*c,c,c));this.ctx.restore()})}}class q1{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"rectangles",[]);F(this,"baseWidth",1920);F(this,"baseHeight",1080);F(this,"time",0);F(this,"gridStructure",[]);this.canvas=e,this.ctx=t,this.createVariedLayout()}createVariedLayout(){[{x:0,y:0,w:480,h:360},{x:480,y:0,w:320,h:180},{x:800,y:0,w:320,h:180},{x:1120,y:0,w:400,h:180},{x:1520,y:0,w:400,h:180},{x:480,y:180,w:240,h:180},{x:720,y:180,w:240,h:180},{x:960,y:180,w:160,h:180},{x:1120,y:180,w:240,h:180},{x:1360,y:180,w:280,h:180},{x:1640,y:180,w:280,h:180},{x:0,y:360,w:120,h:360},{x:120,y:360,w:120,h:360},{x:240,y:360,w:120,h:360},{x:360,y:360,w:120,h:360},{x:480,y:360,w:320,h:360},{x:800,y:360,w:320,h:360},{x:1120,y:360,w:200,h:180},{x:1320,y:360,w:200,h:180},{x:1520,y:360,w:200,h:180},{x:1720,y:360,w:200,h:180},{x:1120,y:540,w:160,h:180},{x:1280,y:540,w:160,h:180},{x:1440,y:540,w:240,h:180},{x:1680,y:540,w:240,h:180},{x:0,y:720,w:160,h:360},{x:160,y:720,w:160,h:360},{x:320,y:720,w:160,h:360},{x:480,y:720,w:240,h:360},{x:720,y:720,w:240,h:360},{x:960,y:720,w:160,h:360},{x:1120,y:720,w:400,h:360},{x:1520,y:720,w:400,h:360}].forEach((t,i)=>{let s;const o=i%3;o===0?s="vertical":o===1?s="horizontal":s="vertical-reverse",this.rectangles.push({id:i,baseX:t.x,baseY:t.y,baseW:t.w,baseH:t.h,currentX:t.x,currentY:t.y,currentW:t.w,currentH:t.h,gradientDirection:s,rotation:0,borderRadius:0,opacity:1}),this.gridStructure.push({x:t.x,y:t.y,w:t.w,h:t.h,targetW:t.w,targetH:t.h})})}render(e,t,i,s){this.time+=.016*si();const o=s==="contrast",c=s==="grayscale";let u=t[0]||"#1a00ff",h=t[1]||"#8b5cf6",d=t[2]||"#d9d9d9";if(c&&(u="#333333",h="#888888",d="#ffffff"),o)this.ctx.fillStyle="#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);else{const E=this.ctx.createLinearGradient(0,0,0,this.canvas.height);c?(E.addColorStop(0,"#ffffff"),E.addColorStop(1,"#cccccc")):(E.addColorStop(0,d),E.addColorStop(1,u)),this.ctx.fillStyle=E,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}let p=.1,g="idle",m=0,y=1;const v=i?i.bass:0;i&&i.mid;const w=i?i.high:0,_=i?i.beat:!1;if(e.left||e.right){const E=[];e.left&&E.push(e.left),e.right&&E.push(e.right);let L=0,A=!1;E.forEach(I=>{I.gesture==="pinch"&&(A=!0);const T=I.fingerCount!==void 0?I.fingerCount:5;L=Math.max(L,T)}),A&&(L=0),A?(g="pinch",p=.05,m=20):L<=2?(g="2fingers",p=.2,m=20):L<=4?(g="morph",p=.1,m=100):(g="chaos",p=.4,m=0),this.rectangles.forEach((I,T)=>{this.gridStructure[T].targetW=I.baseW,this.gridStructure[T].targetH=I.baseH}),E.forEach(I=>{var z,D;const T=(((z=I.position)==null?void 0:z.x)||.5)*this.baseWidth,U=(((D=I.position)==null?void 0:D.y)||.5)*this.baseHeight;this.rectangles.forEach((B,$)=>{const J=B.baseX+B.baseW/2,V=B.baseY+B.baseH/2,Z=T-J,K=U-V,W=Math.sqrt(Z*Z+K*K);if(g==="pinch"){const j=1+Math.sin(W*.05-this.time*5)*.2*(1-Math.min(W/800,1));this.gridStructure[$].targetW=B.baseW*j,this.gridStructure[$].targetH=B.baseH*j}else if(g==="2fingers"){const j=1+Math.sin(W*.05-this.time*5)*.2*(1-Math.min(W/800,1));this.gridStructure[$].targetW=B.baseW*j,this.gridStructure[$].targetH=B.baseH*j}else if(g==="morph"){if(W<500){const se=(1-W/500)*.5;this.gridStructure[$].targetW=B.baseW*(1+se),this.gridStructure[$].targetH=B.baseH*(1+se)}}else if(g==="chaos"&&W<600){const se=Math.random()*.5;this.gridStructure[$].targetW=B.baseW*(.8+se),this.gridStructure[$].targetH=B.baseH*(.8+se)}})})}else this.rectangles.forEach((E,L)=>{this.gridStructure[L].targetW=E.baseW,this.gridStructure[L].targetH=E.baseH}),i&&_&&(m=10);i&&(this.gridStructure.forEach(E=>{E.targetW*=1+v*.2,E.targetH*=1+v*.2}),g==="chaos"&&(y=.5+w*.5)),this.gridStructure.forEach((E,L)=>{E.w+=(E.targetW-E.w)*p,E.h+=(E.targetH-E.h)*p}),this.normalizeGridPerfectly(),this.rectangles.forEach((E,L)=>{E.currentX=this.gridStructure[L].x,E.currentY=this.gridStructure[L].y,E.currentW=this.gridStructure[L].w,E.currentH=this.gridStructure[L].h,E.borderRadius+=(m-E.borderRadius)*.1,g==="chaos"?E.rotation+=Math.random()*.2-.1:E.rotation+=(0-E.rotation)*.1,E.opacity+=(y-E.opacity)*.1});const S=this.canvas.width/this.baseWidth,b=this.canvas.height/this.baseHeight,C=[u,h,d];this.rectangles.forEach((E,L)=>{this.drawRectangle(E,S,b,C,o,L,i)})}normalizeGridPerfectly(){const e=new Map;this.rectangles.forEach((c,u)=>{const h=Math.round(c.baseY/10)*10;e.has(h)||e.set(h,[]),e.get(h).push(u)});const t=Array.from(e.entries()).sort((c,u)=>c[0]-u[0]).map(c=>c[1]);t.forEach(c=>{c.sort((p,g)=>this.rectangles[p].baseX-this.rectangles[g].baseX);const u=c.reduce((p,g)=>p+this.gridStructure[g].w,0),h=this.baseWidth/u;let d=0;c.forEach(p=>{this.gridStructure[p].w*=h,this.gridStructure[p].x=d,d+=this.gridStructure[p].w})});let i=0;t.forEach(c=>{const u=Math.max(...c.map(h=>this.gridStructure[h].h));c.forEach(h=>{this.gridStructure[h].y=i,this.gridStructure[h].h=u}),i+=u});const s=i,o=this.baseHeight/s;i=0,t.forEach(c=>{const u=this.gridStructure[c[0]].h*o;c.forEach(h=>{this.gridStructure[h].y=i,this.gridStructure[h].h=u}),i+=u})}drawRectangle(e,t,i,s,o,c,u){this.ctx.save();const h=e.currentX*t,d=e.currentY*i,p=e.currentW*t,g=e.currentH*i;if(Math.abs(e.rotation)>.01){const C=h+p/2,E=d+g/2;this.ctx.translate(C,E),this.ctx.rotate(e.rotation),this.ctx.translate(-C,-E)}this.ctx.globalAlpha=e.opacity;let m;const y=s[0],v=s[1],w=s[2],_=o||c%2===0?y:v,S=o?"#000000":w,b=u!=null&&u.beat&&Math.random()>.7?"#FFFFFF":null;e.gradientDirection==="vertical"?(m=this.ctx.createLinearGradient(h,d,h,d+g),m.addColorStop(0,b||S),m.addColorStop(1,_)):e.gradientDirection==="vertical-reverse"?(m=this.ctx.createLinearGradient(h,d,h,d+g),m.addColorStop(0,_),m.addColorStop(1,b||S)):(m=this.ctx.createLinearGradient(h,d,h+p,d),m.addColorStop(0,b||S),m.addColorStop(1,_)),this.ctx.fillStyle=m,e.borderRadius>0?(this.ctx.beginPath(),this.ctx.roundRect(h,d,p,g,e.borderRadius),this.ctx.fill()):this.ctx.fillRect(h,d,p,g),this.ctx.restore()}}class Y1{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"glowObjects",[]);F(this,"time",0);F(this,"vibrationTimer",0);F(this,"glitchIntensity",0);F(this,"isExploding",!1);this.canvas=e,this.ctx=t}render(e,t){if(this.canvas.width===0||this.canvas.height===0)return;this.ctx.fillStyle="rgba(0, 0, 0, 0.02)",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&!this.isExploding&&(this.createExplosion(),this.vibrationTimer=1,this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.016,i=Math.max(0,this.vibrationTimer));let s=null,o=null,c=2,u=!1;if(e.left&&e.left.landmarks){let h=this.countFingers(e.left.landmarks,"left");e.left.gesture==="pinch"&&(h=1),h>=1&&(u=!0,s=e.left.position.x*this.canvas.width,o=e.left.position.y*this.canvas.height,c=h)}if(e.right&&e.right.landmarks){let h=this.countFingers(e.right.landmarks,"right");if(e.right.gesture==="pinch"&&(h=1),h>=1){u=!0;const d=e.right.position.x*this.canvas.width,p=e.right.position.y*this.canvas.height;s!==null?(s=(s+d)/2,o=((o||0)+p)/2,c=Math.max(c,h)):(s=d,o=p,c=h)}}if(u&&s!==null&&o!==null){this.time+=1*si();let h=4,d=100,p=2,g=60;if(c===1?(h=8,d=60,p=1,g=30):c===2?(h=5,d=100,p=2,g=60):c===3||c===4?(h=4,d=130,p=2,g=80):c>=5&&(h=2,d=180,p=3,g=120),this.time>=h){this.time=0;for(let m=0;m<p;m++)this.glowObjects.push({x:s+(Math.random()-.5)*g,y:o+(Math.random()-.5)*g,size:d+Math.random()*(d*.4),vx:(Math.random()-.5)*1.5,vy:(Math.random()-.5)*1.5-.5,life:1,hue:Math.random()*360,decay:.002+c/10*.002})}}this.glowObjects=this.glowObjects.filter(h=>(h.x+=h.vx,h.y+=h.vy,h.vx*=.99,h.vy*=.99,h.life-=h.decay,i>0&&(h.x+=(Math.random()-.5)*i*10,h.y+=(Math.random()-.5)*i*10),h.life>0)),this.glowObjects.length>120&&(this.glowObjects=this.glowObjects.slice(-120)),this.glowObjects.forEach(h=>{this.renderChromaticShape(h,i,t)}),this.applyNoiseOverlay(),this.glitchIntensity>.1&&this.applyGlitchEffect()}renderChromaticShape(e,t,i){const s=8+t*20;e.life*.4,this.ctx.globalCompositeOperation="screen";const o=this.ctx.createRadialGradient(e.x-s,e.y,0,e.x-s,e.y,e.size*1.2);o.addColorStop(0,i[0]+"FF"),o.addColorStop(.3,i[0]+"99"),o.addColorStop(.6,i[0]+"44"),o.addColorStop(1,"transparent"),this.ctx.fillStyle=o,this.ctx.beginPath(),this.ctx.arc(e.x-s,e.y,e.size*1.2,0,Math.PI*2),this.ctx.fill();const c=this.ctx.createRadialGradient(e.x,e.y,0,e.x,e.y,e.size*1.2);c.addColorStop(0,i[1]+"FF"),c.addColorStop(.3,i[1]+"BB"),c.addColorStop(.6,i[1]+"66"),c.addColorStop(1,"transparent"),this.ctx.fillStyle=c,this.ctx.beginPath(),this.ctx.arc(e.x,e.y,e.size*1.2,0,Math.PI*2),this.ctx.fill();const u=this.ctx.createRadialGradient(e.x+s,e.y,0,e.x+s,e.y,e.size*1.2);u.addColorStop(0,i[2]+"FF"),u.addColorStop(.3,i[2]+"99"),u.addColorStop(.6,i[2]+"44"),u.addColorStop(1,"transparent"),this.ctx.fillStyle=u,this.ctx.beginPath(),this.ctx.arc(e.x+s,e.y,e.size*1.2,0,Math.PI*2),this.ctx.fill(),this.ctx.globalCompositeOperation="source-over"}countFingers(e,t){if(!e||e.length<21)return 0;const i=e[9],s=e[4],o=e[3],c=Math.sqrt(Math.pow(s.x-i.x,2)+Math.pow(s.y-i.y,2)+Math.pow(s.z-i.z,2)),u=Math.sqrt(Math.pow(o.x-i.x,2)+Math.pow(o.y-i.y,2)+Math.pow(o.z-i.z,2));let h=c>u?1:0;const d=[8,12,16,20],p=[6,10,14,18];for(let g=0;g<4;g++){const m=Math.sqrt(Math.pow(e[d[g]].x-i.x,2)+Math.pow(e[d[g]].y-i.y,2)+Math.pow(e[d[g]].z-i.z,2)),y=Math.sqrt(Math.pow(e[p[g]].x-i.x,2)+Math.pow(e[p[g]].y-i.y,2)+Math.pow(e[p[g]].z-i.z,2));m>y*1.1&&h++}return h}createExplosion(){const e=this.canvas.width/2,t=this.canvas.height/2;for(let i=0;i<40;i++){const s=Math.PI*2*i/40,o=10+Math.random()*20;this.glowObjects.push({x:e,y:t,size:80+Math.random()*100,vx:Math.cos(s)*o,vy:Math.sin(s)*o,life:1,hue:Math.random()*360,decay:.003})}}applyNoiseOverlay(){this.ctx.save(),this.ctx.globalAlpha=.05,this.ctx.fillStyle="white";for(let e=0;e<1e3;e++){const t=Math.random()*this.canvas.width,i=Math.random()*this.canvas.height,s=Math.random()*2;this.ctx.fillRect(t,i,s,s)}this.ctx.restore()}applyGlitchEffect(){this.ctx.save(),this.ctx.globalAlpha=this.glitchIntensity*.5,this.ctx.fillStyle="white";for(let e=0;e<5;e++){const t=Math.random()*this.canvas.width,i=Math.random()*this.canvas.height,s=Math.random()*10;this.ctx.fillRect(t,i,s,this.canvas.height)}for(let e=0;e<5;e++){const t=Math.random()*this.canvas.width,i=Math.random()*this.canvas.height,s=Math.random()*10;this.ctx.fillRect(t,i,this.canvas.width,s)}this.ctx.restore()}}class $1{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"dots",[]);F(this,"gridSpacing",8);F(this,"vibrationTimer",0);F(this,"isExploding",!1);this.canvas=e,this.ctx=t,this.initializeDots()}initializeDots(){this.dots=[];const e=Math.ceil(this.canvas.width/this.gridSpacing),t=Math.ceil(this.canvas.height/this.gridSpacing);for(let i=0;i<t;i++)for(let s=0;s<e;s++)this.dots.push({x:s*this.gridSpacing,y:i*this.gridSpacing,baseSize:1,currentSize:1,targetSize:1})}render(e,t){if(this.canvas.width===0||this.canvas.height===0)return;this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&!this.isExploding&&(this.createExplosion(),this.vibrationTimer=1,this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.016,i=Math.max(0,this.vibrationTimer));let s=null,o=null,c=2,u=!1;if(e.left&&e.left.landmarks){let p=this.countFingers(e.left.landmarks,"left");e.left.gesture==="pinch"&&(p=1),p>=1&&(u=!0,s=e.left.position.x*this.canvas.width,o=e.left.position.y*this.canvas.height,c=p)}if(e.right&&e.right.landmarks){let p=this.countFingers(e.right.landmarks,"right");if(e.right.gesture==="pinch"&&(p=1),p>=1){u=!0;const g=e.right.position.x*this.canvas.width,m=e.right.position.y*this.canvas.height;s!==null?(s=(s+g)/2,o=((o||0)+m)/2,c=Math.max(c,p)):(s=g,o=m,c=p)}}let h=200,d=4;c===1?(h=100,d=2):c>=5&&(h=350,d=6),this.dots.forEach(p=>{if(p.targetSize=p.baseSize,u&&s!==null&&o!==null){const g=p.x-s,m=p.y-o,y=Math.sqrt(g*g+m*m);if(y<h){const v=1-y/h;p.targetSize=p.baseSize+v*d}}p.currentSize+=(p.targetSize-p.currentSize)*.2,i>0&&(p.currentSize+=Math.random()*i*3)}),this.ctx.fillStyle="#FFFFFF",this.dots.forEach(p=>{p.currentSize>.5&&(this.ctx.beginPath(),this.ctx.arc(p.x,p.y,p.currentSize,0,Math.PI*2),this.ctx.fill())})}countFingers(e,t){if(!e||e.length<21)return 0;const i=e[9],s=e[4],o=e[3],c=Math.sqrt(Math.pow(s.x-i.x,2)+Math.pow(s.y-i.y,2)+Math.pow(s.z-i.z,2)),u=Math.sqrt(Math.pow(o.x-i.x,2)+Math.pow(o.y-i.y,2)+Math.pow(o.z-i.z,2));let h=c>u?1:0;const d=[8,12,16,20],p=[6,10,14,18];for(let g=0;g<4;g++){const m=Math.sqrt(Math.pow(e[d[g]].x-i.x,2)+Math.pow(e[d[g]].y-i.y,2)+Math.pow(e[d[g]].z-i.z,2)),y=Math.sqrt(Math.pow(e[p[g]].x-i.x,2)+Math.pow(e[p[g]].y-i.y,2)+Math.pow(e[p[g]].z-i.z,2));m>y*1.1&&h++}return h}createExplosion(){if(this.isExploding)return;this.isExploding=!0;const e=this.canvas.width/2,t=this.canvas.height/2;this.dots.forEach(i=>{const s=i.x-e,o=i.y-t,u=Math.sqrt(s*s+o*o)/10;setTimeout(()=>{i.targetSize=8},u)}),setTimeout(()=>{this.isExploding=!1},1e3)}}class K1{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"blocks",[]);F(this,"baseBlockSize",40);F(this,"vibrationTimer",0);F(this,"currentBlockSize",40);F(this,"isExploding",!1);this.canvas=e,this.ctx=t,this.initializeGrid()}initializeGrid(){this.blocks=[];const e=Math.ceil(this.canvas.width/this.baseBlockSize),t=Math.ceil(this.canvas.height/this.baseBlockSize);for(let i=0;i<t;i++)for(let s=0;s<e;s++){const o=Math.floor(Math.random()*3);this.blocks.push({x:s*this.baseBlockSize,y:i*this.baseBlockSize,targetX:s*this.baseBlockSize,targetY:i*this.baseBlockSize,size:this.baseBlockSize,colorIndex:o,targetColorIndex:o,hasGrid:Math.random()>.7,gridSize:Math.floor(Math.random()*3)+2,glitchTimer:0,colorChangeTimer:Math.random()*5})}}render(e,t){if(this.canvas.width===0||this.canvas.height===0)return;const i=t[1]&&(t[1].toLowerCase()==="#ffffff"||t[1].toLowerCase()==="#fff");i?this.ctx.fillStyle="#000000":this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let s=0;e.clapping&&!this.isExploding&&(this.createExplosion(),this.vibrationTimer=1,this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.016,s=Math.max(0,this.vibrationTimer));let o=0,c=!1;if(e.left){let m=e.left.fingerCount||0;e.left.gesture==="pinch"&&(m=1),c=!0,o=m}if(e.right){let m=e.right.fingerCount||0;e.right.gesture==="pinch"&&(m=1),c=!0,o=Math.max(o,m)}let u=this.currentBlockSize,h=1;c&&(o===1?(u=100,h=.4):o===2?(u=60,h=.5):o===3?(u=45,h=1):o===4?(u=35,h=1.5):o>=5&&(u=25,h=3)),Math.abs(this.currentBlockSize-u)>1&&(this.currentBlockSize=u,this.baseBlockSize=u,this.initializeGrid()),this.blocks.forEach(m=>{m.size=this.currentBlockSize});const d=s>0?10:1;this.blocks.forEach(m=>{if(m.colorChangeTimer>0)m.colorChangeTimer-=.016*h*d;else{const y=Math.floor(Math.random()*3);y!==m.colorIndex&&(m.targetColorIndex=y,m.glitchTimer=.3),m.colorChangeTimer=2+Math.random()*3}m.colorIndex!==m.targetColorIndex&&(m.colorIndex=m.targetColorIndex),m.glitchTimer>0&&(m.glitchTimer-=.016)}),this.blocks.forEach(m=>{const y=m.x,v=m.y,w=s>0?.3+(1-s)*.7:1,_=m.size*w,S=(m.size-_)/2,b=(m.size-_)/2;let C;if(i?C=m.colorIndex%2===0?t[0]:"#000000":C=t[m.colorIndex]||"#FFFFFF",this.ctx.fillStyle=C,this.ctx.fillRect(y+S,v+b,_,_),m.hasGrid&&_>15){this.ctx.strokeStyle=t[3]||"#000000",this.ctx.lineWidth=1;const E=_/m.gridSize;for(let L=0;L<=m.gridSize;L++)this.ctx.beginPath(),this.ctx.moveTo(y+S+L*E,v+b),this.ctx.lineTo(y+S+L*E,v+b+_),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(y+S,v+b+L*E),this.ctx.lineTo(y+S+_,v+b+L*E),this.ctx.stroke()}if(m.glitchTimer>0||s>.5){let E;i?E=m.colorIndex%2===0?"#000000":t[0]:E=t[(m.colorIndex+1)%3]||"#FFFFFF",this.ctx.strokeStyle=E,this.ctx.lineWidth=s>0?4:3,this.ctx.strokeRect(y+S,v+b,_,_)}}),this.ctx.strokeStyle="rgba(255, 255, 255, 0.1)",this.ctx.lineWidth=1;const p=Math.ceil(this.canvas.width/this.baseBlockSize),g=Math.ceil(this.canvas.height/this.baseBlockSize);for(let m=0;m<=p;m++)this.ctx.beginPath(),this.ctx.moveTo(m*this.baseBlockSize,0),this.ctx.lineTo(m*this.baseBlockSize,this.canvas.height),this.ctx.stroke();for(let m=0;m<=g;m++)this.ctx.beginPath(),this.ctx.moveTo(0,m*this.baseBlockSize),this.ctx.lineTo(this.canvas.width,m*this.baseBlockSize),this.ctx.stroke()}createExplosion(){this.isExploding||(this.isExploding=!0,this.blocks.forEach(e=>{e.targetColorIndex=Math.floor(Math.random()*3),e.colorIndex=e.targetColorIndex,e.glitchTimer=1}),setTimeout(()=>this.isExploding=!1,1e3))}}class Z1{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"lines",[]);F(this,"gridSpacing",40);F(this,"lineLength",30);F(this,"isClapping",!1);F(this,"clappingIntensity",0);this.canvas=e,this.ctx=t,this.initializeGrid()}initializeGrid(){this.lines=[];const e=Math.ceil(this.canvas.width/this.gridSpacing)+1,t=Math.ceil(this.canvas.height/this.gridSpacing)+1;for(let i=0;i<t;i++)for(let s=0;s<e;s++)this.lines.push({x:s*this.gridSpacing,y:i*this.gridSpacing,length:this.lineLength,currentAngle:0,targetAngle:0,spinVelocity:0})}render(e,t){t[1]&&(t[1].toLowerCase()==="#ffffff"||t[1].toLowerCase()==="#fff")?this.ctx.fillStyle="#000000":this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),(this.lines.length===0||this.lines[0].x>this.canvas.width||this.lines[0].y>this.canvas.height)&&this.initializeGrid();let s=.1,o=0;const c=[];e.left&&c.push(e.left),e.right&&c.push(e.right),c.forEach(u=>{let h=u.fingerCount||2;u.gesture==="pinch"&&(h=1),o=Math.max(o,h)}),o===1?s=.02:o===2?s=.1:o===3?s=.15:o===4?s=.2:o>=5&&(s=.3),e.clapping?this.isClapping||(this.isClapping=!0,this.clappingIntensity=1):this.isClapping=!1,this.clappingIntensity>0&&(this.clappingIntensity*=.95,this.clappingIntensity<.01&&(this.clappingIntensity=0)),this.lines.forEach(u=>{if(c.length>0){let h=0,d=0,p=0;c.forEach(g=>{var C,E;const m=(((C=g.position)==null?void 0:C.x)||.5)*this.canvas.width,y=(((E=g.position)==null?void 0:E.y)||.5)*this.canvas.height,v=m-u.x,w=y-u.y,S=1/(1+Math.sqrt(v*v+w*w)*.001),b=Math.atan2(w,v);d+=Math.cos(b)*S,p+=Math.sin(b)*S,h+=S}),h>0&&(u.targetAngle=Math.atan2(p,d))}else u.targetAngle=0;if(this.clappingIntensity>0)u.spinVelocity+=this.clappingIntensity*.5,u.currentAngle+=u.spinVelocity,u.spinVelocity*=.9;else{let h=u.targetAngle-u.currentAngle;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;u.currentAngle+=h*s,u.spinVelocity=0}}),this.ctx.strokeStyle=t[0]||"#00ff00",this.ctx.lineWidth=2,this.ctx.lineCap="round",this.lines.forEach(u=>{const h=u.length/2,d=u.x-Math.cos(u.currentAngle)*h,p=u.y-Math.sin(u.currentAngle)*h,g=u.x+Math.cos(u.currentAngle)*h,m=u.y+Math.sin(u.currentAngle)*h;this.ctx.beginPath(),this.ctx.moveTo(d,p),this.ctx.lineTo(g,m),this.ctx.stroke()})}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wd="184",Q1=0,L0=1,J1=2,wc=1,ey=2,No=3,cs=0,ni=1,Hi=2,nr=0,Aa=1,La=2,I0=3,N0=4,ty=5,Is=100,ny=101,iy=102,ry=103,sy=104,ay=200,oy=201,ly=202,cy=203,Mf=204,wf=205,uy=206,hy=207,fy=208,dy=209,py=210,my=211,gy=212,xy=213,vy=214,bf=0,Ef=1,Tf=2,Ia=3,Cf=4,Af=5,Rf=6,Pf=7,bd=0,_y=1,yy=2,ir=0,fx=1,dx=2,px=3,mx=4,gx=5,xx=6,vx=7,_x=300,Ds=301,Na=302,Nh=303,Uh=304,Wc=306,Lf=1e3,Sr=1001,If=1002,Nn=1003,Sy=1004,$l=1005,xn=1006,Fh=1007,Us=1008,gi=1009,yx=1010,Sx=1011,Bo=1012,Ed=1013,rr=1014,Gi=1015,vi=1016,Td=1017,Cd=1018,Ho=1020,Mx=35902,wx=35899,bx=1021,Ex=1022,xi=1023,br=1026,Fs=1027,Ad=1028,Rd=1029,ks=1030,Pd=1031,Ld=1033,bc=33776,Ec=33777,Tc=33778,Cc=33779,Nf=35840,Uf=35841,Ff=35842,Df=35843,kf=36196,Of=37492,zf=37496,Bf=37488,Hf=37489,Pc=37490,Vf=37491,Gf=37808,Wf=37809,Xf=37810,jf=37811,qf=37812,Yf=37813,$f=37814,Kf=37815,Zf=37816,Qf=37817,Jf=37818,ed=37819,td=37820,nd=37821,id=36492,rd=36494,sd=36495,ad=36283,od=36284,Lc=36285,ld=36286,My=3200,Ic=0,wy=1,ss="",mi="srgb",Nc="srgb-linear",Uc="linear",Ht="srgb",ua=7680,U0=519,by=512,Ey=513,Ty=514,Id=515,Cy=516,Ay=517,Nd=518,Ry=519,F0=35044,D0="300 es",er=2e3,Vo=2001;function Py(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Fc(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Ly(){const a=Fc("canvas");return a.style.display="block",a}const k0={};function O0(...a){const e="THREE."+a.shift();console.log(e,...a)}function Tx(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function ht(...a){a=Tx(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function Nt(...a){a=Tx(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function cd(...a){const e=a.join(" ");e in k0||(k0[e]=!0,ht(...a))}function Iy(a,e,t){return new Promise(function(i,s){function o(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:s();break;case a.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}const Ny={[bf]:Ef,[Tf]:Rf,[Cf]:Pf,[Ia]:Af,[Ef]:bf,[Rf]:Tf,[Pf]:Cf,[Af]:Ia};class zs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,c=s.length;o<c;o++)s[o].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let z0=1234567;const Fo=Math.PI/180,Go=180/Math.PI;function Da(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(On[a&255]+On[a>>8&255]+On[a>>16&255]+On[a>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[t&63|128]+On[t>>8&255]+"-"+On[t>>16&255]+On[t>>24&255]+On[i&255]+On[i>>8&255]+On[i>>16&255]+On[i>>24&255]).toLowerCase()}function At(a,e,t){return Math.max(e,Math.min(t,a))}function Ud(a,e){return(a%e+e)%e}function Uy(a,e,t,i,s){return i+(a-e)*(s-i)/(t-e)}function Fy(a,e,t){return a!==e?(t-a)/(e-a):0}function Do(a,e,t){return(1-t)*a+t*e}function Dy(a,e,t,i){return Do(a,e,1-Math.exp(-t*i))}function ky(a,e=1){return e-Math.abs(Ud(a,e*2)-e)}function Oy(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function zy(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function By(a,e){return a+Math.floor(Math.random()*(e-a+1))}function Hy(a,e){return a+Math.random()*(e-a)}function Vy(a){return a*(.5-Math.random())}function Gy(a){a!==void 0&&(z0=a);let e=z0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wy(a){return a*Fo}function Xy(a){return a*Go}function jy(a){return(a&a-1)===0&&a!==0}function qy(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Yy(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function $y(a,e,t,i,s){const o=Math.cos,c=Math.sin,u=o(t/2),h=c(t/2),d=o((e+i)/2),p=c((e+i)/2),g=o((e-i)/2),m=c((e-i)/2),y=o((i-e)/2),v=c((i-e)/2);switch(s){case"XYX":a.set(u*p,h*g,h*m,u*d);break;case"YZY":a.set(h*m,u*p,h*g,u*d);break;case"ZXZ":a.set(h*g,h*m,u*p,u*d);break;case"XZX":a.set(u*p,h*v,h*y,u*d);break;case"YXY":a.set(h*y,u*p,h*v,u*d);break;case"ZYZ":a.set(h*v,h*y,u*p,u*d);break;default:ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ta(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function Wn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const ts={DEG2RAD:Fo,RAD2DEG:Go,generateUUID:Da,clamp:At,euclideanModulo:Ud,mapLinear:Uy,inverseLerp:Fy,lerp:Do,damp:Dy,pingpong:ky,smoothstep:Oy,smootherstep:zy,randInt:By,randFloat:Hy,randFloatSpread:Vy,seededRandom:Gy,degToRad:Wy,radToDeg:Xy,isPowerOfTwo:jy,ceilPowerOfTwo:qy,floorPowerOfTwo:Yy,setQuaternionFromProperEuler:$y,normalize:Wn,denormalize:Ta},jd=class jd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*i-c*s+e.x,this.y=o*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};jd.prototype.isVector2=!0;let ct=jd;class ka{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,o,c,u){let h=i[s+0],d=i[s+1],p=i[s+2],g=i[s+3],m=o[c+0],y=o[c+1],v=o[c+2],w=o[c+3];if(g!==w||h!==m||d!==y||p!==v){let _=h*m+d*y+p*v+g*w;_<0&&(m=-m,y=-y,v=-v,w=-w,_=-_);let S=1-u;if(_<.9995){const b=Math.acos(_),C=Math.sin(b);S=Math.sin(S*b)/C,u=Math.sin(u*b)/C,h=h*S+m*u,d=d*S+y*u,p=p*S+v*u,g=g*S+w*u}else{h=h*S+m*u,d=d*S+y*u,p=p*S+v*u,g=g*S+w*u;const b=1/Math.sqrt(h*h+d*d+p*p+g*g);h*=b,d*=b,p*=b,g*=b}}e[t]=h,e[t+1]=d,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,s,o,c){const u=i[s],h=i[s+1],d=i[s+2],p=i[s+3],g=o[c],m=o[c+1],y=o[c+2],v=o[c+3];return e[t]=u*v+p*g+h*y-d*m,e[t+1]=h*v+p*m+d*g-u*y,e[t+2]=d*v+p*y+u*m-h*g,e[t+3]=p*v-u*g-h*m-d*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,o=e._z,c=e._order,u=Math.cos,h=Math.sin,d=u(i/2),p=u(s/2),g=u(o/2),m=h(i/2),y=h(s/2),v=h(o/2);switch(c){case"XYZ":this._x=m*p*g+d*y*v,this._y=d*y*g-m*p*v,this._z=d*p*v+m*y*g,this._w=d*p*g-m*y*v;break;case"YXZ":this._x=m*p*g+d*y*v,this._y=d*y*g-m*p*v,this._z=d*p*v-m*y*g,this._w=d*p*g+m*y*v;break;case"ZXY":this._x=m*p*g-d*y*v,this._y=d*y*g+m*p*v,this._z=d*p*v+m*y*g,this._w=d*p*g-m*y*v;break;case"ZYX":this._x=m*p*g-d*y*v,this._y=d*y*g+m*p*v,this._z=d*p*v-m*y*g,this._w=d*p*g+m*y*v;break;case"YZX":this._x=m*p*g+d*y*v,this._y=d*y*g+m*p*v,this._z=d*p*v-m*y*g,this._w=d*p*g-m*y*v;break;case"XZY":this._x=m*p*g-d*y*v,this._y=d*y*g-m*p*v,this._z=d*p*v+m*y*g,this._w=d*p*g+m*y*v;break;default:ht("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],o=t[8],c=t[1],u=t[5],h=t[9],d=t[2],p=t[6],g=t[10],m=i+u+g;if(m>0){const y=.5/Math.sqrt(m+1);this._w=.25/y,this._x=(p-h)*y,this._y=(o-d)*y,this._z=(c-s)*y}else if(i>u&&i>g){const y=2*Math.sqrt(1+i-u-g);this._w=(p-h)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(o+d)/y}else if(u>g){const y=2*Math.sqrt(1+u-i-g);this._w=(o-d)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(h+p)/y}else{const y=2*Math.sqrt(1+g-i-u);this._w=(c-s)/y,this._x=(o+d)/y,this._y=(h+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,o=e._z,c=e._w,u=t._x,h=t._y,d=t._z,p=t._w;return this._x=i*p+c*u+s*d-o*h,this._y=s*p+c*h+o*u-i*d,this._z=o*p+c*d+i*h-s*u,this._w=c*p-i*u-s*h-o*d,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,o=e._z,c=e._w,u=this.dot(e);u<0&&(i=-i,s=-s,o=-o,c=-c,u=-u);let h=1-t;if(u<.9995){const d=Math.acos(u),p=Math.sin(d);h=Math.sin(h*d)/p,t=Math.sin(t*d)/p,this._x=this._x*h+i*t,this._y=this._y*h+s*t,this._z=this._z*h+o*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+i*t,this._y=this._y*h+s*t,this._z=this._z*h+o*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const qd=class qd{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(B0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(B0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*s,this.y=o[1]*t+o[4]*i+o[7]*s,this.z=o[2]*t+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=e.elements,c=1/(o[3]*t+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*s+o[12])*c,this.y=(o[1]*t+o[5]*i+o[9]*s+o[13])*c,this.z=(o[2]*t+o[6]*i+o[10]*s+o[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,o=e.x,c=e.y,u=e.z,h=e.w,d=2*(c*s-u*i),p=2*(u*t-o*s),g=2*(o*i-c*t);return this.x=t+h*d+c*g-u*p,this.y=i+h*p+u*d-o*g,this.z=s+h*g+o*p-c*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s,this.y=o[1]*t+o[5]*i+o[9]*s,this.z=o[2]*t+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,o=e.z,c=t.x,u=t.y,h=t.z;return this.x=s*h-o*u,this.y=o*c-i*h,this.z=i*u-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dh.copy(this).projectOnVector(e),this.sub(Dh)}reflect(e){return this.sub(Dh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qd.prototype.isVector3=!0;let Q=qd;const Dh=new Q,B0=new ka,Yd=class Yd{constructor(e,t,i,s,o,c,u,h,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,c,u,h,d)}set(e,t,i,s,o,c,u,h,d){const p=this.elements;return p[0]=e,p[1]=s,p[2]=u,p[3]=t,p[4]=o,p[5]=h,p[6]=i,p[7]=c,p[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,c=i[0],u=i[3],h=i[6],d=i[1],p=i[4],g=i[7],m=i[2],y=i[5],v=i[8],w=s[0],_=s[3],S=s[6],b=s[1],C=s[4],E=s[7],L=s[2],A=s[5],I=s[8];return o[0]=c*w+u*b+h*L,o[3]=c*_+u*C+h*A,o[6]=c*S+u*E+h*I,o[1]=d*w+p*b+g*L,o[4]=d*_+p*C+g*A,o[7]=d*S+p*E+g*I,o[2]=m*w+y*b+v*L,o[5]=m*_+y*C+v*A,o[8]=m*S+y*E+v*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],c=e[4],u=e[5],h=e[6],d=e[7],p=e[8];return t*c*p-t*u*d-i*o*p+i*u*h+s*o*d-s*c*h}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],c=e[4],u=e[5],h=e[6],d=e[7],p=e[8],g=p*c-u*d,m=u*h-p*o,y=d*o-c*h,v=t*g+i*m+s*y;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/v;return e[0]=g*w,e[1]=(s*d-p*i)*w,e[2]=(u*i-s*c)*w,e[3]=m*w,e[4]=(p*t-s*h)*w,e[5]=(s*o-u*t)*w,e[6]=y*w,e[7]=(i*h-d*t)*w,e[8]=(c*t-i*o)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,o,c,u){const h=Math.cos(o),d=Math.sin(o);return this.set(i*h,i*d,-i*(h*c+d*u)+c+e,-s*d,s*h,-s*(-d*c+h*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(kh.makeScale(e,t)),this}rotate(e){return this.premultiply(kh.makeRotation(-e)),this}translate(e,t){return this.premultiply(kh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Yd.prototype.isMatrix3=!0;let vt=Yd;const kh=new vt,H0=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),V0=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ky(){const a={enabled:!0,workingColorSpace:Nc,spaces:{},convert:function(s,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===Ht&&(s.r=Mr(s.r),s.g=Mr(s.g),s.b=Mr(s.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ht&&(s.r=Ra(s.r),s.g=Ra(s.g),s.b=Ra(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ss?Uc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,c){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return cd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return cd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(s,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return a.define({[Nc]:{primaries:e,whitePoint:i,transfer:Uc,toXYZ:H0,fromXYZ:V0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:i,transfer:Ht,toXYZ:H0,fromXYZ:V0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),a}const Pt=Ky();function Mr(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Ra(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let ha;class Zy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ha===void 0&&(ha=Fc("canvas")),ha.width=e.width,ha.height=e.height;const s=ha.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ha}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let c=0;c<o.length;c++)o[c]=Mr(o[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mr(t[i]/255)*255):t[i]=Mr(t[i]);return{data:t,width:e.width,height:e.height}}else return ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Qy=0;class Fd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=Da(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?o.push(Oh(s[c].image)):o.push(Oh(s[c]))}else o=Oh(s);i.url=o}return t||(e.images[this.uuid]=i),i}}function Oh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Zy.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(ht("Texture: Unable to serialize Texture."),{})}let Jy=0;const zh=new Q;class Hn extends zs{constructor(e=Hn.DEFAULT_IMAGE,t=Hn.DEFAULT_MAPPING,i=Sr,s=Sr,o=xn,c=Us,u=xi,h=gi,d=Hn.DEFAULT_ANISOTROPY,p=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=Da(),this.name="",this.source=new Fd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=c,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=h,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zh).x}get height(){return this.source.getSize(zh).y}get depth(){return this.source.getSize(zh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){ht(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ht(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_x)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lf:e.x=e.x-Math.floor(e.x);break;case Sr:e.x=e.x<0?0:1;break;case If:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lf:e.y=e.y-Math.floor(e.y);break;case Sr:e.y=e.y<0?0:1;break;case If:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=_x;Hn.DEFAULT_ANISOTROPY=1;const $d=class $d{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*o,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*o,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*o,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,o;const h=e.elements,d=h[0],p=h[4],g=h[8],m=h[1],y=h[5],v=h[9],w=h[2],_=h[6],S=h[10];if(Math.abs(p-m)<.01&&Math.abs(g-w)<.01&&Math.abs(v-_)<.01){if(Math.abs(p+m)<.1&&Math.abs(g+w)<.1&&Math.abs(v+_)<.1&&Math.abs(d+y+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(d+1)/2,E=(y+1)/2,L=(S+1)/2,A=(p+m)/4,I=(g+w)/4,T=(v+_)/4;return C>E&&C>L?C<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(C),s=A/i,o=I/i):E>L?E<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(E),i=A/s,o=T/s):L<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(L),i=I/o,s=T/o),this.set(i,s,o,t),this}let b=Math.sqrt((_-v)*(_-v)+(g-w)*(g-w)+(m-p)*(m-p));return Math.abs(b)<.001&&(b=1),this.x=(_-v)/b,this.y=(g-w)/b,this.z=(m-p)/b,this.w=Math.acos((d+y+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this.w=At(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this.w=At(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$d.prototype.isVector4=!0;let an=$d;class eS extends zs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new an(0,0,e,t),this.scissorTest=!1,this.viewport=new an(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},o=new Hn(s),c=i.count;for(let u=0;u<c;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Fd(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ii extends eS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Cx extends Hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tS extends Hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vc=class Vc{constructor(e,t,i,s,o,c,u,h,d,p,g,m,y,v,w,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,c,u,h,d,p,g,m,y,v,w,_)}set(e,t,i,s,o,c,u,h,d,p,g,m,y,v,w,_){const S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=s,S[1]=o,S[5]=c,S[9]=u,S[13]=h,S[2]=d,S[6]=p,S[10]=g,S[14]=m,S[3]=y,S[7]=v,S[11]=w,S[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Vc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/fa.setFromMatrixColumn(e,0).length(),o=1/fa.setFromMatrixColumn(e,1).length(),c=1/fa.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,o=e.z,c=Math.cos(i),u=Math.sin(i),h=Math.cos(s),d=Math.sin(s),p=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const m=c*p,y=c*g,v=u*p,w=u*g;t[0]=h*p,t[4]=-h*g,t[8]=d,t[1]=y+v*d,t[5]=m-w*d,t[9]=-u*h,t[2]=w-m*d,t[6]=v+y*d,t[10]=c*h}else if(e.order==="YXZ"){const m=h*p,y=h*g,v=d*p,w=d*g;t[0]=m+w*u,t[4]=v*u-y,t[8]=c*d,t[1]=c*g,t[5]=c*p,t[9]=-u,t[2]=y*u-v,t[6]=w+m*u,t[10]=c*h}else if(e.order==="ZXY"){const m=h*p,y=h*g,v=d*p,w=d*g;t[0]=m-w*u,t[4]=-c*g,t[8]=v+y*u,t[1]=y+v*u,t[5]=c*p,t[9]=w-m*u,t[2]=-c*d,t[6]=u,t[10]=c*h}else if(e.order==="ZYX"){const m=c*p,y=c*g,v=u*p,w=u*g;t[0]=h*p,t[4]=v*d-y,t[8]=m*d+w,t[1]=h*g,t[5]=w*d+m,t[9]=y*d-v,t[2]=-d,t[6]=u*h,t[10]=c*h}else if(e.order==="YZX"){const m=c*h,y=c*d,v=u*h,w=u*d;t[0]=h*p,t[4]=w-m*g,t[8]=v*g+y,t[1]=g,t[5]=c*p,t[9]=-u*p,t[2]=-d*p,t[6]=y*g+v,t[10]=m-w*g}else if(e.order==="XZY"){const m=c*h,y=c*d,v=u*h,w=u*d;t[0]=h*p,t[4]=-g,t[8]=d*p,t[1]=m*g+w,t[5]=c*p,t[9]=y*g-v,t[2]=v*g-y,t[6]=u*p,t[10]=w*g+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nS,e,iS)}lookAt(e,t,i){const s=this.elements;return fi.subVectors(e,t),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),Yr.crossVectors(i,fi),Yr.lengthSq()===0&&(Math.abs(i.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),Yr.crossVectors(i,fi)),Yr.normalize(),Kl.crossVectors(fi,Yr),s[0]=Yr.x,s[4]=Kl.x,s[8]=fi.x,s[1]=Yr.y,s[5]=Kl.y,s[9]=fi.y,s[2]=Yr.z,s[6]=Kl.z,s[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,c=i[0],u=i[4],h=i[8],d=i[12],p=i[1],g=i[5],m=i[9],y=i[13],v=i[2],w=i[6],_=i[10],S=i[14],b=i[3],C=i[7],E=i[11],L=i[15],A=s[0],I=s[4],T=s[8],U=s[12],z=s[1],D=s[5],B=s[9],$=s[13],J=s[2],V=s[6],Z=s[10],K=s[14],W=s[3],se=s[7],j=s[11],O=s[15];return o[0]=c*A+u*z+h*J+d*W,o[4]=c*I+u*D+h*V+d*se,o[8]=c*T+u*B+h*Z+d*j,o[12]=c*U+u*$+h*K+d*O,o[1]=p*A+g*z+m*J+y*W,o[5]=p*I+g*D+m*V+y*se,o[9]=p*T+g*B+m*Z+y*j,o[13]=p*U+g*$+m*K+y*O,o[2]=v*A+w*z+_*J+S*W,o[6]=v*I+w*D+_*V+S*se,o[10]=v*T+w*B+_*Z+S*j,o[14]=v*U+w*$+_*K+S*O,o[3]=b*A+C*z+E*J+L*W,o[7]=b*I+C*D+E*V+L*se,o[11]=b*T+C*B+E*Z+L*j,o[15]=b*U+C*$+E*K+L*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],o=e[12],c=e[1],u=e[5],h=e[9],d=e[13],p=e[2],g=e[6],m=e[10],y=e[14],v=e[3],w=e[7],_=e[11],S=e[15],b=h*y-d*m,C=u*y-d*g,E=u*m-h*g,L=c*y-d*p,A=c*m-h*p,I=c*g-u*p;return t*(w*b-_*C+S*E)-i*(v*b-_*L+S*A)+s*(v*C-w*L+S*I)-o*(v*E-w*A+_*I)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],c=e[4],u=e[5],h=e[6],d=e[7],p=e[8],g=e[9],m=e[10],y=e[11],v=e[12],w=e[13],_=e[14],S=e[15],b=t*u-i*c,C=t*h-s*c,E=t*d-o*c,L=i*h-s*u,A=i*d-o*u,I=s*d-o*h,T=p*w-g*v,U=p*_-m*v,z=p*S-y*v,D=g*_-m*w,B=g*S-y*w,$=m*S-y*_,J=b*$-C*B+E*D+L*z-A*U+I*T;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/J;return e[0]=(u*$-h*B+d*D)*V,e[1]=(s*B-i*$-o*D)*V,e[2]=(w*I-_*A+S*L)*V,e[3]=(m*A-g*I-y*L)*V,e[4]=(h*z-c*$-d*U)*V,e[5]=(t*$-s*z+o*U)*V,e[6]=(_*E-v*I-S*C)*V,e[7]=(p*I-m*E+y*C)*V,e[8]=(c*B-u*z+d*T)*V,e[9]=(i*z-t*B-o*T)*V,e[10]=(v*A-w*E+S*b)*V,e[11]=(g*E-p*A-y*b)*V,e[12]=(u*U-c*D-h*T)*V,e[13]=(t*D-i*U+s*T)*V,e[14]=(w*C-v*L-_*b)*V,e[15]=(p*L-g*C+m*b)*V,this}scale(e){const t=this.elements,i=e.x,s=e.y,o=e.z;return t[0]*=i,t[4]*=s,t[8]*=o,t[1]*=i,t[5]*=s,t[9]*=o,t[2]*=i,t[6]*=s,t[10]*=o,t[3]*=i,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),o=1-i,c=e.x,u=e.y,h=e.z,d=o*c,p=o*u;return this.set(d*c+i,d*u-s*h,d*h+s*u,0,d*u+s*h,p*u+i,p*h-s*c,0,d*h-s*u,p*h+s*c,o*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,o,c){return this.set(1,i,o,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,o=t._x,c=t._y,u=t._z,h=t._w,d=o+o,p=c+c,g=u+u,m=o*d,y=o*p,v=o*g,w=c*p,_=c*g,S=u*g,b=h*d,C=h*p,E=h*g,L=i.x,A=i.y,I=i.z;return s[0]=(1-(w+S))*L,s[1]=(y+E)*L,s[2]=(v-C)*L,s[3]=0,s[4]=(y-E)*A,s[5]=(1-(m+S))*A,s[6]=(_+b)*A,s[7]=0,s[8]=(v+C)*I,s[9]=(_-b)*I,s[10]=(1-(m+w))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const o=this.determinant();if(o===0)return i.set(1,1,1),t.identity(),this;let c=fa.set(s[0],s[1],s[2]).length();const u=fa.set(s[4],s[5],s[6]).length(),h=fa.set(s[8],s[9],s[10]).length();o<0&&(c=-c),ki.copy(this);const d=1/c,p=1/u,g=1/h;return ki.elements[0]*=d,ki.elements[1]*=d,ki.elements[2]*=d,ki.elements[4]*=p,ki.elements[5]*=p,ki.elements[6]*=p,ki.elements[8]*=g,ki.elements[9]*=g,ki.elements[10]*=g,t.setFromRotationMatrix(ki),i.x=c,i.y=u,i.z=h,this}makePerspective(e,t,i,s,o,c,u=er,h=!1){const d=this.elements,p=2*o/(t-e),g=2*o/(i-s),m=(t+e)/(t-e),y=(i+s)/(i-s);let v,w;if(h)v=o/(c-o),w=c*o/(c-o);else if(u===er)v=-(c+o)/(c-o),w=-2*c*o/(c-o);else if(u===Vo)v=-c/(c-o),w=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=p,d[4]=0,d[8]=m,d[12]=0,d[1]=0,d[5]=g,d[9]=y,d[13]=0,d[2]=0,d[6]=0,d[10]=v,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,i,s,o,c,u=er,h=!1){const d=this.elements,p=2/(t-e),g=2/(i-s),m=-(t+e)/(t-e),y=-(i+s)/(i-s);let v,w;if(h)v=1/(c-o),w=c/(c-o);else if(u===er)v=-2/(c-o),w=-(c+o)/(c-o);else if(u===Vo)v=-1/(c-o),w=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=p,d[4]=0,d[8]=0,d[12]=m,d[1]=0,d[5]=g,d[9]=0,d[13]=y,d[2]=0,d[6]=0,d[10]=v,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Vc.prototype.isMatrix4=!0;let qt=Vc;const fa=new Q,ki=new qt,nS=new Q(0,0,0),iS=new Q(1,1,1),Yr=new Q,Kl=new Q,fi=new Q,G0=new qt,W0=new ka;class Er{constructor(e=0,t=0,i=0,s=Er.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,o=s[0],c=s[4],u=s[8],h=s[1],d=s[5],p=s[9],g=s[2],m=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(At(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(m,d),this._z=0);break;case"YXZ":this._x=Math.asin(-At(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(At(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-At(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(m,y),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,d),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,d),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,y),this._y=0);break;default:ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return G0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(G0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return W0.setFromEuler(this),this.setFromQuaternion(W0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Er.DEFAULT_ORDER="XYZ";class Ax{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rS=0;const X0=new Q,da=new ka,mr=new qt,Zl=new Q,Mo=new Q,sS=new Q,aS=new ka,j0=new Q(1,0,0),q0=new Q(0,1,0),Y0=new Q(0,0,1),$0={type:"added"},oS={type:"removed"},pa={type:"childadded",child:null},Bh={type:"childremoved",child:null};class vn extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rS++}),this.uuid=Da(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const e=new Q,t=new Er,i=new ka,s=new Q(1,1,1);function o(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qt},normalMatrix:{value:new vt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ax,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return da.setFromAxisAngle(e,t),this.quaternion.multiply(da),this}rotateOnWorldAxis(e,t){return da.setFromAxisAngle(e,t),this.quaternion.premultiply(da),this}rotateX(e){return this.rotateOnAxis(j0,e)}rotateY(e){return this.rotateOnAxis(q0,e)}rotateZ(e){return this.rotateOnAxis(Y0,e)}translateOnAxis(e,t){return X0.copy(e).applyQuaternion(this.quaternion),this.position.add(X0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(j0,e)}translateY(e){return this.translateOnAxis(q0,e)}translateZ(e){return this.translateOnAxis(Y0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Zl.copy(e):Zl.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mr.lookAt(Mo,Zl,this.up):mr.lookAt(Zl,Mo,this.up),this.quaternion.setFromRotationMatrix(mr),s&&(mr.extractRotation(s.matrixWorld),da.setFromRotationMatrix(mr),this.quaternion.premultiply(da.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($0),pa.child=e,this.dispatchEvent(pa),pa.child=null):Nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(oS),Bh.child=e,this.dispatchEvent(Bh),Bh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($0),pa.child=e,this.dispatchEvent(pa),pa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let o=0,c=s.length;o<c;o++)s[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,e,sS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mo,aS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*i-o[8]*s,o[13]+=i-o[1]*t-o[5]*i-o[9]*s,o[14]+=s-o[2]*t-o[6]*i-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let o=0,c=s.length;o<c;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(u=>({...u})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let d=0,p=h.length;d<p;d++){const g=h[d];o(e.shapes,g)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,d=this.material.length;h<d;h++)u.push(o(e.materials,this.material[h]));s.material=u}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];s.animations.push(o(e.animations,h))}}if(t){const u=c(e.geometries),h=c(e.materials),d=c(e.textures),p=c(e.images),g=c(e.shapes),m=c(e.skeletons),y=c(e.animations),v=c(e.nodes);u.length>0&&(i.geometries=u),h.length>0&&(i.materials=h),d.length>0&&(i.textures=d),p.length>0&&(i.images=p),g.length>0&&(i.shapes=g),m.length>0&&(i.skeletons=m),y.length>0&&(i.animations=y),v.length>0&&(i.nodes=v)}return i.object=s,i;function c(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}vn.DEFAULT_UP=new Q(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ca extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lS={type:"move"};class Hh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ca,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ca,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ca,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,o=null,c=null;const u=this._targetRay,h=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){c=!0;for(const w of e.hand.values()){const _=t.getJointPose(w,i),S=this._getHandJoint(d,w);_!==null&&(S.matrix.fromArray(_.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=_.radius),S.visible=_!==null}const p=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],m=p.position.distanceTo(g.position),y=.02,v=.005;d.inputState.pinching&&m>y+v?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&m<=y-v&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));u!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(lS)))}return u!==null&&(u.visible=s!==null),h!==null&&(h.visible=o!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ca;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Rx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$r={h:0,s:0,l:0},Ql={h:0,s:0,l:0};function Vh(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Pt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Pt.workingColorSpace){if(e=Ud(e,1),t=At(t,0,1),i=At(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,c=2*i-o;this.r=Vh(c,o,e+1/3),this.g=Vh(c,o,e),this.b=Vh(c,o,e-1/3)}return Pt.colorSpaceToWorking(this,s),this}setStyle(e,t=mi){function i(o){o!==void 0&&parseFloat(o)<1&&ht("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:ht("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);ht("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mi){const i=Rx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):ht("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mr(e.r),this.g=Mr(e.g),this.b=Mr(e.b),this}copyLinearToSRGB(e){return this.r=Ra(e.r),this.g=Ra(e.g),this.b=Ra(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Pt.workingToColorSpace(zn.copy(this),e),Math.round(At(zn.r*255,0,255))*65536+Math.round(At(zn.g*255,0,255))*256+Math.round(At(zn.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.workingToColorSpace(zn.copy(this),t);const i=zn.r,s=zn.g,o=zn.b,c=Math.max(i,s,o),u=Math.min(i,s,o);let h,d;const p=(u+c)/2;if(u===c)h=0,d=0;else{const g=c-u;switch(d=p<=.5?g/(c+u):g/(2-c-u),c){case i:h=(s-o)/g+(s<o?6:0);break;case s:h=(o-i)/g+2;break;case o:h=(i-s)/g+4;break}h/=6}return e.h=h,e.s=d,e.l=p,e}getRGB(e,t=Pt.workingColorSpace){return Pt.workingToColorSpace(zn.copy(this),t),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=mi){Pt.workingToColorSpace(zn.copy(this),e);const t=zn.r,i=zn.g,s=zn.b;return e!==mi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL($r),this.setHSL($r.h+e,$r.s+t,$r.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($r),e.getHSL(Ql);const i=Do($r.h,Ql.h,t),s=Do($r.s,Ql.s,t),o=Do($r.l,Ql.l,t);return this.setHSL(i,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*s,this.g=o[1]*t+o[4]*i+o[7]*s,this.b=o[2]*t+o[5]*i+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new Ye;Ye.NAMES=Rx;class Xo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ye(e),this.density=t}clone(){return new Xo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class us extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Er,this.environmentIntensity=1,this.environmentRotation=new Er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Oi=new Q,gr=new Q,Gh=new Q,xr=new Q,ma=new Q,ga=new Q,K0=new Q,Wh=new Q,Xh=new Q,jh=new Q,qh=new an,Yh=new an,$h=new an;class Vi{constructor(e=new Q,t=new Q,i=new Q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Oi.subVectors(e,t),s.cross(Oi);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,i,s,o){Oi.subVectors(s,t),gr.subVectors(i,t),Gh.subVectors(e,t);const c=Oi.dot(Oi),u=Oi.dot(gr),h=Oi.dot(Gh),d=gr.dot(gr),p=gr.dot(Gh),g=c*d-u*u;if(g===0)return o.set(0,0,0),null;const m=1/g,y=(d*h-u*p)*m,v=(c*p-u*h)*m;return o.set(1-y-v,v,y)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,xr)===null?!1:xr.x>=0&&xr.y>=0&&xr.x+xr.y<=1}static getInterpolation(e,t,i,s,o,c,u,h){return this.getBarycoord(e,t,i,s,xr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,xr.x),h.addScaledVector(c,xr.y),h.addScaledVector(u,xr.z),h)}static getInterpolatedAttribute(e,t,i,s,o,c){return qh.setScalar(0),Yh.setScalar(0),$h.setScalar(0),qh.fromBufferAttribute(e,t),Yh.fromBufferAttribute(e,i),$h.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(qh,o.x),c.addScaledVector(Yh,o.y),c.addScaledVector($h,o.z),c}static isFrontFacing(e,t,i,s){return Oi.subVectors(i,t),gr.subVectors(e,t),Oi.cross(gr).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),gr.subVectors(this.a,this.b),Oi.cross(gr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,o){return Vi.getInterpolation(e,this.a,this.b,this.c,t,i,s,o)}containsPoint(e){return Vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,o=this.c;let c,u;ma.subVectors(s,i),ga.subVectors(o,i),Wh.subVectors(e,i);const h=ma.dot(Wh),d=ga.dot(Wh);if(h<=0&&d<=0)return t.copy(i);Xh.subVectors(e,s);const p=ma.dot(Xh),g=ga.dot(Xh);if(p>=0&&g<=p)return t.copy(s);const m=h*g-p*d;if(m<=0&&h>=0&&p<=0)return c=h/(h-p),t.copy(i).addScaledVector(ma,c);jh.subVectors(e,o);const y=ma.dot(jh),v=ga.dot(jh);if(v>=0&&y<=v)return t.copy(o);const w=y*d-h*v;if(w<=0&&d>=0&&v<=0)return u=d/(d-v),t.copy(i).addScaledVector(ga,u);const _=p*v-y*g;if(_<=0&&g-p>=0&&y-v>=0)return K0.subVectors(o,s),u=(g-p)/(g-p+(y-v)),t.copy(s).addScaledVector(K0,u);const S=1/(_+w+m);return c=w*S,u=m*S,t.copy(i).addScaledVector(ma,c).addScaledVector(ga,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Bs{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=o.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,zi):zi.fromBufferAttribute(o,c),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Jl.copy(i.boundingBox)),Jl.applyMatrix4(e.matrixWorld),this.union(Jl)}const s=e.children;for(let o=0,c=s.length;o<c;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wo),ec.subVectors(this.max,wo),xa.subVectors(e.a,wo),va.subVectors(e.b,wo),_a.subVectors(e.c,wo),Kr.subVectors(va,xa),Zr.subVectors(_a,va),Ts.subVectors(xa,_a);let t=[0,-Kr.z,Kr.y,0,-Zr.z,Zr.y,0,-Ts.z,Ts.y,Kr.z,0,-Kr.x,Zr.z,0,-Zr.x,Ts.z,0,-Ts.x,-Kr.y,Kr.x,0,-Zr.y,Zr.x,0,-Ts.y,Ts.x,0];return!Kh(t,xa,va,_a,ec)||(t=[1,0,0,0,1,0,0,0,1],!Kh(t,xa,va,_a,ec))?!1:(tc.crossVectors(Kr,Zr),t=[tc.x,tc.y,tc.z],Kh(t,xa,va,_a,ec))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const vr=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],zi=new Q,Jl=new Bs,xa=new Q,va=new Q,_a=new Q,Kr=new Q,Zr=new Q,Ts=new Q,wo=new Q,ec=new Q,tc=new Q,Cs=new Q;function Kh(a,e,t,i,s){for(let o=0,c=a.length-3;o<=c;o+=3){Cs.fromArray(a,o);const u=s.x*Math.abs(Cs.x)+s.y*Math.abs(Cs.y)+s.z*Math.abs(Cs.z),h=e.dot(Cs),d=t.dot(Cs),p=i.dot(Cs);if(Math.max(-Math.max(h,d,p),Math.min(h,d,p))>u)return!1}return!0}const mn=new Q,nc=new ct;let cS=0;class Sn extends zs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=F0,this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)nc.fromBufferAttribute(this,t),nc.applyMatrix3(e),this.setXY(t,nc.x,nc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix3(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ta(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ta(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ta(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ta(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ta(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),i=Wn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),i=Wn(i,this.array),s=Wn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e*=this.itemSize,this.normalized&&(t=Wn(t,this.array),i=Wn(i,this.array),s=Wn(s,this.array),o=Wn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==F0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Px extends Sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Lx extends Sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Qt extends Sn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const uS=new Bs,bo=new Q,Zh=new Q;class Hs{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):uS.setFromPoints(e).getCenter(i);let s=0;for(let o=0,c=e.length;o<c;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);const t=bo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(bo,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(Zh)),this.expandByPoint(bo.copy(e.center).sub(Zh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let hS=0;const Ei=new qt,Qh=new vn,ya=new Q,di=new Bs,Eo=new Bs,An=new Q;class hn extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=Da(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Py(e)?Lx:Px)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new vt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,t,i){return Ei.makeTranslation(e,t,i),this.applyMatrix4(Ei),this}scale(e,t,i){return Ei.makeScale(e,t,i),this.applyMatrix4(Ei),this}lookAt(e){return Qh.lookAt(e),Qh.updateMatrix(),this.applyMatrix4(Qh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ya).negate(),this.translate(ya.x,ya.y,ya.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,o=e.length;s<o;s++){const c=e[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Qt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];di.setFromBufferAttribute(o),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const i=this.boundingSphere.center;if(di.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const u=t[o];Eo.setFromBufferAttribute(u),this.morphTargetsRelative?(An.addVectors(di.min,Eo.min),di.expandByPoint(An),An.addVectors(di.max,Eo.max),di.expandByPoint(An)):(di.expandByPoint(Eo.min),di.expandByPoint(Eo.max))}di.getCenter(i);let s=0;for(let o=0,c=e.count;o<c;o++)An.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(An));if(t)for(let o=0,c=t.length;o<c;o++){const u=t[o],h=this.morphTargetsRelative;for(let d=0,p=u.count;d<p;d++)An.fromBufferAttribute(u,d),h&&(ya.fromBufferAttribute(e,d),An.add(ya)),s=Math.max(s,i.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],h=[];for(let T=0;T<i.count;T++)u[T]=new Q,h[T]=new Q;const d=new Q,p=new Q,g=new Q,m=new ct,y=new ct,v=new ct,w=new Q,_=new Q;function S(T,U,z){d.fromBufferAttribute(i,T),p.fromBufferAttribute(i,U),g.fromBufferAttribute(i,z),m.fromBufferAttribute(o,T),y.fromBufferAttribute(o,U),v.fromBufferAttribute(o,z),p.sub(d),g.sub(d),y.sub(m),v.sub(m);const D=1/(y.x*v.y-v.x*y.y);isFinite(D)&&(w.copy(p).multiplyScalar(v.y).addScaledVector(g,-y.y).multiplyScalar(D),_.copy(g).multiplyScalar(y.x).addScaledVector(p,-v.x).multiplyScalar(D),u[T].add(w),u[U].add(w),u[z].add(w),h[T].add(_),h[U].add(_),h[z].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let T=0,U=b.length;T<U;++T){const z=b[T],D=z.start,B=z.count;for(let $=D,J=D+B;$<J;$+=3)S(e.getX($+0),e.getX($+1),e.getX($+2))}const C=new Q,E=new Q,L=new Q,A=new Q;function I(T){L.fromBufferAttribute(s,T),A.copy(L);const U=u[T];C.copy(U),C.sub(L.multiplyScalar(L.dot(U))).normalize(),E.crossVectors(A,U);const D=E.dot(h[T])<0?-1:1;c.setXYZW(T,C.x,C.y,C.z,D)}for(let T=0,U=b.length;T<U;++T){const z=b[T],D=z.start,B=z.count;for(let $=D,J=D+B;$<J;$+=3)I(e.getX($+0)),I(e.getX($+1)),I(e.getX($+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,y=i.count;m<y;m++)i.setXYZ(m,0,0,0);const s=new Q,o=new Q,c=new Q,u=new Q,h=new Q,d=new Q,p=new Q,g=new Q;if(e)for(let m=0,y=e.count;m<y;m+=3){const v=e.getX(m+0),w=e.getX(m+1),_=e.getX(m+2);s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,w),c.fromBufferAttribute(t,_),p.subVectors(c,o),g.subVectors(s,o),p.cross(g),u.fromBufferAttribute(i,v),h.fromBufferAttribute(i,w),d.fromBufferAttribute(i,_),u.add(p),h.add(p),d.add(p),i.setXYZ(v,u.x,u.y,u.z),i.setXYZ(w,h.x,h.y,h.z),i.setXYZ(_,d.x,d.y,d.z)}else for(let m=0,y=t.count;m<y;m+=3)s.fromBufferAttribute(t,m+0),o.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),p.subVectors(c,o),g.subVectors(s,o),p.cross(g),i.setXYZ(m+0,p.x,p.y,p.z),i.setXYZ(m+1,p.x,p.y,p.z),i.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)An.fromBufferAttribute(e,t),An.normalize(),e.setXYZ(t,An.x,An.y,An.z)}toNonIndexed(){function e(u,h){const d=u.array,p=u.itemSize,g=u.normalized,m=new d.constructor(h.length*p);let y=0,v=0;for(let w=0,_=h.length;w<_;w++){u.isInterleavedBufferAttribute?y=h[w]*u.data.stride+u.offset:y=h[w]*p;for(let S=0;S<p;S++)m[v++]=d[y++]}return new Sn(m,p,g)}if(this.index===null)return ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new hn,i=this.index.array,s=this.attributes;for(const u in s){const h=s[u],d=e(h,i);t.setAttribute(u,d)}const o=this.morphAttributes;for(const u in o){const h=[],d=o[u];for(let p=0,g=d.length;p<g;p++){const m=d[p],y=e(m,i);h.push(y)}t.morphAttributes[u]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,h=c.length;u<h;u++){const d=c[u];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const d=i[h];e.data.attributes[h]=d.toJSON(e.data)}const s={};let o=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],p=[];for(let g=0,m=d.length;g<m;g++){const y=d[g];p.push(y.toJSON(e.data))}p.length>0&&(s[h]=p,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const d in s){const p=s[d];this.setAttribute(d,p.clone(t))}const o=e.morphAttributes;for(const d in o){const p=[],g=o[d];for(let m=0,y=g.length;m<y;m++)p.push(g[m].clone(t));this.morphAttributes[d]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let d=0,p=c.length;d<p;d++){const g=c[d];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let fS=0;class Wi extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=Da(),this.name="",this.type="Material",this.blending=Aa,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mf,this.blendDst=wf,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=U0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ua,this.stencilZFail=ua,this.stencilZPass=ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){ht(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ht(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Aa&&(i.blending=this.blending),this.side!==cs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Mf&&(i.blendSrc=this.blendSrc),this.blendDst!==wf&&(i.blendDst=this.blendDst),this.blendEquation!==Is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ia&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==U0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ua&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ua&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ua&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}if(t){const o=s(e.textures),c=s(e.images);o.length>0&&(i.textures=o),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _r=new Q,Jh=new Q,ic=new Q,Qr=new Q,ef=new Q,rc=new Q,tf=new Q;class Dd{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_r)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_r.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_r.copy(this.origin).addScaledVector(this.direction,t),_r.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Jh.copy(e).add(t).multiplyScalar(.5),ic.copy(t).sub(e).normalize(),Qr.copy(this.origin).sub(Jh);const o=e.distanceTo(t)*.5,c=-this.direction.dot(ic),u=Qr.dot(this.direction),h=-Qr.dot(ic),d=Qr.lengthSq(),p=Math.abs(1-c*c);let g,m,y,v;if(p>0)if(g=c*h-u,m=c*u-h,v=o*p,g>=0)if(m>=-v)if(m<=v){const w=1/p;g*=w,m*=w,y=g*(g+c*m+2*u)+m*(c*g+m+2*h)+d}else m=o,g=Math.max(0,-(c*m+u)),y=-g*g+m*(m+2*h)+d;else m=-o,g=Math.max(0,-(c*m+u)),y=-g*g+m*(m+2*h)+d;else m<=-v?(g=Math.max(0,-(-c*o+u)),m=g>0?-o:Math.min(Math.max(-o,-h),o),y=-g*g+m*(m+2*h)+d):m<=v?(g=0,m=Math.min(Math.max(-o,-h),o),y=m*(m+2*h)+d):(g=Math.max(0,-(c*o+u)),m=g>0?o:Math.min(Math.max(-o,-h),o),y=-g*g+m*(m+2*h)+d);else m=c>0?-o:o,g=Math.max(0,-(c*m+u)),y=-g*g+m*(m+2*h)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Jh).addScaledVector(ic,m),y}intersectSphere(e,t){_r.subVectors(e.center,this.origin);const i=_r.dot(this.direction),s=_r.dot(_r)-i*i,o=e.radius*e.radius;if(s>o)return null;const c=Math.sqrt(o-s),u=i-c,h=i+c;return h<0?null:u<0?this.at(h,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,o,c,u,h;const d=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,m=this.origin;return d>=0?(i=(e.min.x-m.x)*d,s=(e.max.x-m.x)*d):(i=(e.max.x-m.x)*d,s=(e.min.x-m.x)*d),p>=0?(o=(e.min.y-m.y)*p,c=(e.max.y-m.y)*p):(o=(e.max.y-m.y)*p,c=(e.min.y-m.y)*p),i>c||o>s||((o>i||isNaN(i))&&(i=o),(c<s||isNaN(s))&&(s=c),g>=0?(u=(e.min.z-m.z)*g,h=(e.max.z-m.z)*g):(u=(e.max.z-m.z)*g,h=(e.min.z-m.z)*g),i>h||u>s)||((u>i||i!==i)&&(i=u),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,_r)!==null}intersectTriangle(e,t,i,s,o){ef.subVectors(t,e),rc.subVectors(i,e),tf.crossVectors(ef,rc);let c=this.direction.dot(tf),u;if(c>0){if(s)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Qr.subVectors(this.origin,e);const h=u*this.direction.dot(rc.crossVectors(Qr,rc));if(h<0)return null;const d=u*this.direction.dot(ef.cross(Qr));if(d<0||h+d>c)return null;const p=-u*Qr.dot(tf);return p<0?null:this.at(p/c,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xc extends Wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Er,this.combine=bd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Z0=new qt,As=new Dd,sc=new Hs,Q0=new Q,ac=new Q,oc=new Q,lc=new Q,nf=new Q,cc=new Q,J0=new Q,uc=new Q;class fn extends vn{constructor(e=new hn,t=new Xc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(o&&u){cc.set(0,0,0);for(let h=0,d=o.length;h<d;h++){const p=u[h],g=o[h];p!==0&&(nf.fromBufferAttribute(g,e),c?cc.addScaledVector(nf,p):cc.addScaledVector(nf.sub(t),p))}t.add(cc)}return t}raycast(e,t){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),sc.copy(i.boundingSphere),sc.applyMatrix4(o),As.copy(e.ray).recast(e.near),!(sc.containsPoint(As.origin)===!1&&(As.intersectSphere(sc,Q0)===null||As.origin.distanceToSquared(Q0)>(e.far-e.near)**2))&&(Z0.copy(o).invert(),As.copy(e.ray).applyMatrix4(Z0),!(i.boundingBox!==null&&As.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,i){let s;const o=this.geometry,c=this.material,u=o.index,h=o.attributes.position,d=o.attributes.uv,p=o.attributes.uv1,g=o.attributes.normal,m=o.groups,y=o.drawRange;if(u!==null)if(Array.isArray(c))for(let v=0,w=m.length;v<w;v++){const _=m[v],S=c[_.materialIndex],b=Math.max(_.start,y.start),C=Math.min(u.count,Math.min(_.start+_.count,y.start+y.count));for(let E=b,L=C;E<L;E+=3){const A=u.getX(E),I=u.getX(E+1),T=u.getX(E+2);s=hc(this,S,e,i,d,p,g,A,I,T),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const v=Math.max(0,y.start),w=Math.min(u.count,y.start+y.count);for(let _=v,S=w;_<S;_+=3){const b=u.getX(_),C=u.getX(_+1),E=u.getX(_+2);s=hc(this,c,e,i,d,p,g,b,C,E),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(c))for(let v=0,w=m.length;v<w;v++){const _=m[v],S=c[_.materialIndex],b=Math.max(_.start,y.start),C=Math.min(h.count,Math.min(_.start+_.count,y.start+y.count));for(let E=b,L=C;E<L;E+=3){const A=E,I=E+1,T=E+2;s=hc(this,S,e,i,d,p,g,A,I,T),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const v=Math.max(0,y.start),w=Math.min(h.count,y.start+y.count);for(let _=v,S=w;_<S;_+=3){const b=_,C=_+1,E=_+2;s=hc(this,c,e,i,d,p,g,b,C,E),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function dS(a,e,t,i,s,o,c,u){let h;if(e.side===ni?h=i.intersectTriangle(c,o,s,!0,u):h=i.intersectTriangle(s,o,c,e.side===cs,u),h===null)return null;uc.copy(u),uc.applyMatrix4(a.matrixWorld);const d=t.ray.origin.distanceTo(uc);return d<t.near||d>t.far?null:{distance:d,point:uc.clone(),object:a}}function hc(a,e,t,i,s,o,c,u,h,d){a.getVertexPosition(u,ac),a.getVertexPosition(h,oc),a.getVertexPosition(d,lc);const p=dS(a,e,t,i,ac,oc,lc,J0);if(p){const g=new Q;Vi.getBarycoord(J0,ac,oc,lc,g),s&&(p.uv=Vi.getInterpolatedAttribute(s,u,h,d,g,new ct)),o&&(p.uv1=Vi.getInterpolatedAttribute(o,u,h,d,g,new ct)),c&&(p.normal=Vi.getInterpolatedAttribute(c,u,h,d,g,new Q),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const m={a:u,b:h,c:d,normal:new Q,materialIndex:0};Vi.getNormal(ac,oc,lc,m.normal),p.face=m,p.barycoord=g}return p}class kd extends Hn{constructor(e=null,t=1,i=1,s,o,c,u,h,d=Nn,p=Nn,g,m){super(null,c,u,h,d,p,s,o,g,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eg extends Sn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Sa=new qt,tg=new qt,fc=[],ng=new Bs,pS=new qt,To=new fn,Co=new Hs;class mS extends fn{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new eg(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,pS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Sa),ng.copy(e.boundingBox).applyMatrix4(Sa),this.boundingBox.union(ng)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Sa),Co.copy(e.boundingSphere).applyMatrix4(Sa),this.boundingSphere.union(Co)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,o=i.length+1,c=e*o+1;for(let u=0;u<i.length;u++)i[u]=s[c+u]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(To.geometry=this.geometry,To.material=this.material,To.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Co.copy(this.boundingSphere),Co.applyMatrix4(i),e.ray.intersectsSphere(Co)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Sa),tg.multiplyMatrices(i,Sa),To.matrixWorld=tg,To.raycast(e,fc);for(let c=0,u=fc.length;c<u;c++){const h=fc[c];h.instanceId=o,h.object=this,t.push(h)}fc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new eg(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new kd(new Float32Array(s*this.count),s,this.count,Ad,Gi));const o=this.morphTexture.source.data.data;let c=0;for(let d=0;d<i.length;d++)c+=i[d];const u=this.geometry.morphTargetsRelative?1:1-c,h=s*e;return o[h]=u,o.set(i,h+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const rf=new Q,gS=new Q,xS=new vt;class Ls{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=rf.subVectors(i,t).cross(gS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(rf),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return i===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||xS.getNormalMatrix(e),s=this.coplanarPoint(rf).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rs=new Hs,vS=new ct(.5,.5),dc=new Q;class Od{constructor(e=new Ls,t=new Ls,i=new Ls,s=new Ls,o=new Ls,c=new Ls){this.planes=[e,t,i,s,o,c]}set(e,t,i,s,o,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(s),u[4].copy(o),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=er,i=!1){const s=this.planes,o=e.elements,c=o[0],u=o[1],h=o[2],d=o[3],p=o[4],g=o[5],m=o[6],y=o[7],v=o[8],w=o[9],_=o[10],S=o[11],b=o[12],C=o[13],E=o[14],L=o[15];if(s[0].setComponents(d-c,y-p,S-v,L-b).normalize(),s[1].setComponents(d+c,y+p,S+v,L+b).normalize(),s[2].setComponents(d+u,y+g,S+w,L+C).normalize(),s[3].setComponents(d-u,y-g,S-w,L-C).normalize(),i)s[4].setComponents(h,m,_,E).normalize(),s[5].setComponents(d-h,y-m,S-_,L-E).normalize();else if(s[4].setComponents(d-h,y-m,S-_,L-E).normalize(),t===er)s[5].setComponents(d+h,y+m,S+_,L+E).normalize();else if(t===Vo)s[5].setComponents(h,m,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){Rs.center.set(0,0,0);const t=vS.distanceTo(e.center);return Rs.radius=.7071067811865476+t,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(dc.x=s.normal.x>0?e.max.x:e.min.x,dc.y=s.normal.y>0?e.max.y:e.min.y,dc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(dc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ko extends Wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Dc=new Q,kc=new Q,ig=new qt,Ao=new Dd,pc=new Hs,sf=new Q,rg=new Q;class Ix extends vn{constructor(e=new hn,t=new ko){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,o=t.count;s<o;s++)Dc.fromBufferAttribute(t,s-1),kc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Dc.distanceTo(kc);e.setAttribute("lineDistance",new Qt(i,1))}else ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pc.copy(i.boundingSphere),pc.applyMatrix4(s),pc.radius+=o,e.ray.intersectsSphere(pc)===!1)return;ig.copy(s).invert(),Ao.copy(e.ray).applyMatrix4(ig);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,d=this.isLineSegments?2:1,p=i.index,m=i.attributes.position;if(p!==null){const y=Math.max(0,c.start),v=Math.min(p.count,c.start+c.count);for(let w=y,_=v-1;w<_;w+=d){const S=p.getX(w),b=p.getX(w+1),C=mc(this,e,Ao,h,S,b,w);C&&t.push(C)}if(this.isLineLoop){const w=p.getX(v-1),_=p.getX(y),S=mc(this,e,Ao,h,w,_,v-1);S&&t.push(S)}}else{const y=Math.max(0,c.start),v=Math.min(m.count,c.start+c.count);for(let w=y,_=v-1;w<_;w+=d){const S=mc(this,e,Ao,h,w,w+1,w);S&&t.push(S)}if(this.isLineLoop){const w=mc(this,e,Ao,h,v-1,y,v-1);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function mc(a,e,t,i,s,o,c){const u=a.geometry.attributes.position;if(Dc.fromBufferAttribute(u,s),kc.fromBufferAttribute(u,o),t.distanceSqToSegment(Dc,kc,sf,rg)>i)return;sf.applyMatrix4(a.matrixWorld);const d=e.ray.origin.distanceTo(sf);if(!(d<e.near||d>e.far))return{distance:d,point:rg.clone().applyMatrix4(a.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:a}}const sg=new Q,ag=new Q;class ud extends Ix{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,o=t.count;s<o;s+=2)sg.fromBufferAttribute(t,s),ag.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+sg.distanceTo(ag);e.setAttribute("lineDistance",new Qt(i,1))}else ht("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class as extends Wi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const og=new qt,hd=new Dd,gc=new Hs,xc=new Q;class wr extends vn{constructor(e=new hn,t=new as){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),gc.copy(i.boundingSphere),gc.applyMatrix4(s),gc.radius+=o,e.ray.intersectsSphere(gc)===!1)return;og.copy(s).invert(),hd.copy(e.ray).applyMatrix4(og);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,d=i.index,g=i.attributes.position;if(d!==null){const m=Math.max(0,c.start),y=Math.min(d.count,c.start+c.count);for(let v=m,w=y;v<w;v++){const _=d.getX(v);xc.fromBufferAttribute(g,_),lg(xc,_,h,s,e,t,this)}}else{const m=Math.max(0,c.start),y=Math.min(g.count,c.start+c.count);for(let v=m,w=y;v<w;v++)xc.fromBufferAttribute(g,v),lg(xc,v,h,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function lg(a,e,t,i,s,o,c){const u=hd.distanceSqToPoint(a);if(u<t){const h=new Q;hd.closestPointToPoint(a,h),h.applyMatrix4(i);const d=s.ray.origin.distanceTo(h);if(d<s.near||d>s.far)return;o.push({distance:d,distanceToRay:Math.sqrt(u),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class _S extends Hn{constructor(e,t,i,s,o=xn,c=xn,u,h,d){super(e,t,i,s,o,c,u,h,d),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const p=this;function g(){p.needsUpdate=!0,p._requestVideoFrameCallbackId=e.requestVideoFrameCallback(g)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(g))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class Nx extends Hn{constructor(e=[],t=Ds,i,s,o,c,u,h,d,p){super(e,t,i,s,o,c,u,h,d,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ua extends Hn{constructor(e,t,i=rr,s,o,c,u=Nn,h=Nn,d,p=br,g=1){if(p!==br&&p!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:g};super(m,s,o,c,u,h,p,i,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class yS extends Ua{constructor(e,t=rr,i=Ds,s,o,c=Nn,u=Nn,h,d=br){const p={width:e,height:e,depth:1},g=[p,p,p,p,p,p];super(e,e,t,i,s,o,c,u,h,d),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Ux extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Oa extends hn{constructor(e=1,t=1,i=1,s=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:o,depthSegments:c};const u=this;s=Math.floor(s),o=Math.floor(o),c=Math.floor(c);const h=[],d=[],p=[],g=[];let m=0,y=0;v("z","y","x",-1,-1,i,t,e,c,o,0),v("z","y","x",1,-1,i,t,-e,c,o,1),v("x","z","y",1,1,e,i,t,s,c,2),v("x","z","y",1,-1,e,i,-t,s,c,3),v("x","y","z",1,-1,e,t,i,s,o,4),v("x","y","z",-1,-1,e,t,-i,s,o,5),this.setIndex(h),this.setAttribute("position",new Qt(d,3)),this.setAttribute("normal",new Qt(p,3)),this.setAttribute("uv",new Qt(g,2));function v(w,_,S,b,C,E,L,A,I,T,U){const z=E/I,D=L/T,B=E/2,$=L/2,J=A/2,V=I+1,Z=T+1;let K=0,W=0;const se=new Q;for(let j=0;j<Z;j++){const O=j*D-$;for(let G=0;G<V;G++){const pe=G*z-B;se[w]=pe*b,se[_]=O*C,se[S]=J,d.push(se.x,se.y,se.z),se[w]=0,se[_]=0,se[S]=A>0?1:-1,p.push(se.x,se.y,se.z),g.push(G/I),g.push(1-j/T),K+=1}}for(let j=0;j<T;j++)for(let O=0;O<I;O++){const G=m+O+V*j,pe=m+O+V*(j+1),Se=m+(O+1)+V*(j+1),_e=m+(O+1)+V*j;h.push(G,pe,_e),h.push(pe,Se,_e),W+=6}u.addGroup(y,W,U),y+=W,m+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class zd extends hn{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const o=[],c=[];u(s),d(i),p(),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(o.slice(),3)),this.setAttribute("uv",new Qt(c,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function u(b){const C=new Q,E=new Q,L=new Q;for(let A=0;A<t.length;A+=3)y(t[A+0],C),y(t[A+1],E),y(t[A+2],L),h(C,E,L,b)}function h(b,C,E,L){const A=L+1,I=[];for(let T=0;T<=A;T++){I[T]=[];const U=b.clone().lerp(E,T/A),z=C.clone().lerp(E,T/A),D=A-T;for(let B=0;B<=D;B++)B===0&&T===A?I[T][B]=U:I[T][B]=U.clone().lerp(z,B/D)}for(let T=0;T<A;T++)for(let U=0;U<2*(A-T)-1;U++){const z=Math.floor(U/2);U%2===0?(m(I[T][z+1]),m(I[T+1][z]),m(I[T][z])):(m(I[T][z+1]),m(I[T+1][z+1]),m(I[T+1][z]))}}function d(b){const C=new Q;for(let E=0;E<o.length;E+=3)C.x=o[E+0],C.y=o[E+1],C.z=o[E+2],C.normalize().multiplyScalar(b),o[E+0]=C.x,o[E+1]=C.y,o[E+2]=C.z}function p(){const b=new Q;for(let C=0;C<o.length;C+=3){b.x=o[C+0],b.y=o[C+1],b.z=o[C+2];const E=_(b)/2/Math.PI+.5,L=S(b)/Math.PI+.5;c.push(E,1-L)}v(),g()}function g(){for(let b=0;b<c.length;b+=6){const C=c[b+0],E=c[b+2],L=c[b+4],A=Math.max(C,E,L),I=Math.min(C,E,L);A>.9&&I<.1&&(C<.2&&(c[b+0]+=1),E<.2&&(c[b+2]+=1),L<.2&&(c[b+4]+=1))}}function m(b){o.push(b.x,b.y,b.z)}function y(b,C){const E=b*3;C.x=e[E+0],C.y=e[E+1],C.z=e[E+2]}function v(){const b=new Q,C=new Q,E=new Q,L=new Q,A=new ct,I=new ct,T=new ct;for(let U=0,z=0;U<o.length;U+=9,z+=6){b.set(o[U+0],o[U+1],o[U+2]),C.set(o[U+3],o[U+4],o[U+5]),E.set(o[U+6],o[U+7],o[U+8]),A.set(c[z+0],c[z+1]),I.set(c[z+2],c[z+3]),T.set(c[z+4],c[z+5]),L.copy(b).add(C).add(E).divideScalar(3);const D=_(L);w(A,z+0,b,D),w(I,z+2,C,D),w(T,z+4,E,D)}}function w(b,C,E,L){L<0&&b.x===1&&(c[C]=b.x-1),E.x===0&&E.z===0&&(c[C]=L/2/Math.PI+.5)}function _(b){return Math.atan2(b.z,-b.x)}function S(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zd(e.vertices,e.indices,e.radius,e.detail)}}class Bd extends zd{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Bd(e.radius,e.detail)}}class Tr extends hn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const o=e/2,c=t/2,u=Math.floor(i),h=Math.floor(s),d=u+1,p=h+1,g=e/u,m=t/h,y=[],v=[],w=[],_=[];for(let S=0;S<p;S++){const b=S*m-c;for(let C=0;C<d;C++){const E=C*g-o;v.push(E,-b,0),w.push(0,0,1),_.push(C/u),_.push(1-S/h)}}for(let S=0;S<h;S++)for(let b=0;b<u;b++){const C=b+d*S,E=b+d*(S+1),L=b+1+d*(S+1),A=b+1+d*S;y.push(C,E,A),y.push(E,L,A)}this.setIndex(y),this.setAttribute("position",new Qt(v,3)),this.setAttribute("normal",new Qt(w,3)),this.setAttribute("uv",new Qt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hd extends hn{constructor(e=1,t=.4,i=64,s=8,o=2,c=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:s,p:o,q:c},i=Math.floor(i),s=Math.floor(s);const u=[],h=[],d=[],p=[],g=new Q,m=new Q,y=new Q,v=new Q,w=new Q,_=new Q,S=new Q;for(let C=0;C<=i;++C){const E=C/i*o*Math.PI*2;b(E,o,c,e,y),b(E+.01,o,c,e,v),_.subVectors(v,y),S.addVectors(v,y),w.crossVectors(_,S),S.crossVectors(w,_),w.normalize(),S.normalize();for(let L=0;L<=s;++L){const A=L/s*Math.PI*2,I=-t*Math.cos(A),T=t*Math.sin(A);g.x=y.x+(I*S.x+T*w.x),g.y=y.y+(I*S.y+T*w.y),g.z=y.z+(I*S.z+T*w.z),h.push(g.x,g.y,g.z),m.subVectors(g,y).normalize(),d.push(m.x,m.y,m.z),p.push(C/i),p.push(L/s)}}for(let C=1;C<=i;C++)for(let E=1;E<=s;E++){const L=(s+1)*(C-1)+(E-1),A=(s+1)*C+(E-1),I=(s+1)*C+E,T=(s+1)*(C-1)+E;u.push(L,A,T),u.push(A,I,T)}this.setIndex(u),this.setAttribute("position",new Qt(h,3)),this.setAttribute("normal",new Qt(d,3)),this.setAttribute("uv",new Qt(p,2));function b(C,E,L,A,I){const T=Math.cos(C),U=Math.sin(C),z=L/E*C,D=Math.cos(z);I.x=A*(2+D)*.5*T,I.y=A*(2+D)*U*.5,I.z=A*Math.sin(z)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hd(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}function Fa(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const s=a[t][i];if(cg(s))s.isRenderTargetTexture?(ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(cg(s[0])){const o=[];for(let c=0,u=s.length;c<u;c++)o[c]=s[c].clone();e[t][i]=o}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Xn(a){const e={};for(let t=0;t<a.length;t++){const i=Fa(a[t]);for(const s in i)e[s]=i[s]}return e}function cg(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function SS(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Fx(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const Oc={clone:Fa,merge:Xn};var MS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends Wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=MS,this.fragmentShader=wS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fa(e.uniforms),this.uniformsGroups=SS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class bS extends un{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Dx extends Wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ic,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Er,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ES extends Wi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ye(16777215),this.specular=new Ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ic,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Er,this.combine=bd,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class TS extends Wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=My,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class CS extends Wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ug={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(hg(a)||(this.files[a]=e))},get:function(a){if(this.enabled!==!1&&!hg(a))return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};function hg(a){try{const e=a.slice(a.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class AS{constructor(e,t,i){const s=this;let o=!1,c=0,u=0,h;const d=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(p){u++,o===!1&&s.onStart!==void 0&&s.onStart(p,c,u),o=!0},this.itemEnd=function(p){c++,s.onProgress!==void 0&&s.onProgress(p,c,u),c===u&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,g){return d.push(p,g),this},this.removeHandler=function(p){const g=d.indexOf(p);return g!==-1&&d.splice(g,2),this},this.getHandler=function(p){for(let g=0,m=d.length;g<m;g+=2){const y=d[g],v=d[g+1];if(y.global&&(y.lastIndex=0),y.test(p))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const RS=new AS;class Vd{constructor(e){this.manager=e!==void 0?e:RS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,o){i.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Vd.DEFAULT_MATERIAL_NAME="__DEFAULT";const yr={};class PS extends Error{constructor(e,t){super(e),this.response=t}}class LS extends Vd{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=ug.get(`file:${e}`);if(o!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0);return}if(yr[e]!==void 0){yr[e].push({onLoad:t,onProgress:i,onError:s});return}yr[e]=[],yr[e].push({onLoad:t,onProgress:i,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),u=this.mimeType,h=this.responseType;fetch(c).then(d=>{if(d.status===200||d.status===0){if(d.status===0&&ht("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||d.body===void 0||d.body.getReader===void 0)return d;const p=yr[e],g=d.body.getReader(),m=d.headers.get("X-File-Size")||d.headers.get("Content-Length"),y=m?parseInt(m):0,v=y!==0;let w=0;const _=new ReadableStream({start(S){b();function b(){g.read().then(({done:C,value:E})=>{if(C)S.close();else{w+=E.byteLength;const L=new ProgressEvent("progress",{lengthComputable:v,loaded:w,total:y});for(let A=0,I=p.length;A<I;A++){const T=p[A];T.onProgress&&T.onProgress(L)}S.enqueue(E),b()}},C=>{S.error(C)})}}});return new Response(_)}else throw new PS(`fetch for "${d.url}" responded with ${d.status}: ${d.statusText}`,d)}).then(d=>{switch(h){case"arraybuffer":return d.arrayBuffer();case"blob":return d.blob();case"document":return d.text().then(p=>new DOMParser().parseFromString(p,u));case"json":return d.json();default:if(u==="")return d.text();{const g=/charset="?([^;"\s]*)"?/i.exec(u),m=g&&g[1]?g[1].toLowerCase():void 0,y=new TextDecoder(m);return d.arrayBuffer().then(v=>y.decode(v))}}}).then(d=>{ug.add(`file:${e}`,d);const p=yr[e];delete yr[e];for(let g=0,m=p.length;g<m;g++){const y=p[g];y.onLoad&&y.onLoad(d)}}).catch(d=>{const p=yr[e];if(p===void 0)throw this.manager.itemError(e),d;delete yr[e];for(let g=0,m=p.length;g<m;g++){const y=p[g];y.onError&&y.onError(d)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Gd extends vn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const af=new qt,fg=new Q,dg=new Q;class kx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=gi,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Od,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;fg.setFromMatrixPosition(e.matrixWorld),t.position.copy(fg),dg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dg),t.updateMatrixWorld(),af.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(af,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Vo||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(af)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const vc=new Q,_c=new ka,Zi=new Q;class Ox extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=er,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vc,_c,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vc,_c,Zi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(vc,_c,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vc,_c,Zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Jr=new Q,pg=new ct,mg=new ct;class Rn extends Ox{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Go*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Go*2*Math.atan(Math.tan(Fo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jr.x,Jr.y).multiplyScalar(-e/Jr.z),Jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Jr.x,Jr.y).multiplyScalar(-e/Jr.z)}getViewSize(e,t){return this.getViewBounds(e,pg,mg),t.subVectors(mg,pg)}setViewOffset(e,t,i,s,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Fo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,o=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,d=c.fullHeight;o+=c.offsetX*s/h,t-=c.offsetY*i/d,s*=c.width/h,i*=c.height/d}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class IS extends kx{constructor(){super(new Rn(90,1,.5,500)),this.isPointLightShadow=!0}}class zc extends Gd{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new IS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class za extends Ox{constructor(e=-1,t=1,i=1,s=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,c=i+e,u=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,c=o+d*this.view.width,u-=p*this.view.offsetY,h=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,c,u,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class NS extends kx{constructor(){super(new za(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class of extends Gd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new NS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class zx extends Gd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ma=-90,wa=1;class US extends vn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Rn(Ma,wa,e,t);s.layers=this.layers,this.add(s);const o=new Rn(Ma,wa,e,t);o.layers=this.layers,this.add(o);const c=new Rn(Ma,wa,e,t);c.layers=this.layers,this.add(c);const u=new Rn(Ma,wa,e,t);u.layers=this.layers,this.add(u);const h=new Rn(Ma,wa,e,t);h.layers=this.layers,this.add(h);const d=new Rn(Ma,wa,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,o,c,u,h]=t;for(const d of t)this.remove(d);if(e===er)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Vo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,c,u,h,d,p]=this.children,g=e.getRenderTarget(),m=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,1,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(i,3,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(i,4,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(g,m,y),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class FS extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class DS{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=kS.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function kS(){this._document.hidden===!1&&this.reset()}const Kd=class Kd{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const o=this.elements;return o[0]=e,o[2]=t,o[1]=i,o[3]=s,this}};Kd.prototype.isMatrix2=!0;let gg=Kd;function xg(a,e,t,i){const s=OS(i);switch(t){case bx:return a*e;case Ad:return a*e/s.components*s.byteLength;case Rd:return a*e/s.components*s.byteLength;case ks:return a*e*2/s.components*s.byteLength;case Pd:return a*e*2/s.components*s.byteLength;case Ex:return a*e*3/s.components*s.byteLength;case xi:return a*e*4/s.components*s.byteLength;case Ld:return a*e*4/s.components*s.byteLength;case bc:case Ec:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Tc:case Cc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Uf:case Df:return Math.max(a,16)*Math.max(e,8)/4;case Nf:case Ff:return Math.max(a,8)*Math.max(e,8)/2;case kf:case Of:case Bf:case Hf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case zf:case Pc:case Vf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Gf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Wf:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case Xf:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case jf:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case qf:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Yf:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case $f:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Kf:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Zf:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Qf:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Jf:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case ed:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case td:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case nd:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case id:case rd:case sd:return Math.ceil(a/4)*Math.ceil(e/4)*16;case ad:case od:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Lc:case ld:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function OS(a){switch(a){case gi:case yx:return{byteLength:1,components:1};case Bo:case Sx:case vi:return{byteLength:2,components:1};case Td:case Cd:return{byteLength:2,components:4};case rr:case Ed:case Gi:return{byteLength:4,components:1};case Mx:case wx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wd}}));typeof window<"u"&&(window.__THREE__?ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bx(){let a=null,e=!1,t=null,i=null;function s(o,c){t(o,c),i=a.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&a!==null&&(i=a.requestAnimationFrame(s),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){a=o}}}function zS(a){const e=new WeakMap;function t(u,h){const d=u.array,p=u.usage,g=d.byteLength,m=a.createBuffer();a.bindBuffer(h,m),a.bufferData(h,d,p),u.onUploadCallback();let y;if(d instanceof Float32Array)y=a.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)y=a.HALF_FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?y=a.HALF_FLOAT:y=a.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=a.SHORT;else if(d instanceof Uint32Array)y=a.UNSIGNED_INT;else if(d instanceof Int32Array)y=a.INT;else if(d instanceof Int8Array)y=a.BYTE;else if(d instanceof Uint8Array)y=a.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:g}}function i(u,h,d){const p=h.array,g=h.updateRanges;if(a.bindBuffer(d,u),g.length===0)a.bufferSubData(d,0,p);else{g.sort((y,v)=>y.start-v.start);let m=0;for(let y=1;y<g.length;y++){const v=g[m],w=g[y];w.start<=v.start+v.count+1?v.count=Math.max(v.count,w.start+w.count-v.start):(++m,g[m]=w)}g.length=m+1;for(let y=0,v=g.length;y<v;y++){const w=g[y];a.bufferSubData(d,w.start*p.BYTES_PER_ELEMENT,p,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=e.get(u);h&&(a.deleteBuffer(h.buffer),e.delete(u))}function c(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const d=e.get(u);if(d===void 0)e.set(u,t(u,h));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,u,h),d.version=u.version}}return{get:s,remove:o,update:c}}var BS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HS=`#ifdef USE_ALPHAHASH
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
#endif`,VS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,GS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jS=`#ifdef USE_AOMAP
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
#endif`,qS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YS=`#ifdef USE_BATCHING
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
#endif`,$S=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,KS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,JS=`#ifdef USE_IRIDESCENCE
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
#endif`,eM=`#ifdef USE_BUMPMAP
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
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,aM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,oM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,cM=`#define PI 3.141592653589793
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
} // validated`,uM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hM=`vec3 transformedNormal = objectNormal;
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
#endif`,fM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gM="gl_FragColor = linearToOutputTexel( gl_FragColor );",xM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vM=`#ifdef USE_ENVMAP
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
#endif`,_M=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yM=`#ifdef USE_ENVMAP
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
#endif`,SM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MM=`#ifdef USE_ENVMAP
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
#endif`,wM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,EM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CM=`#ifdef USE_GRADIENTMAP
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
}`,AM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,IM=`#ifdef USE_ENVMAP
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
#endif`,NM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,FM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kM=`PhysicalMaterial material;
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
#endif`,OM=`uniform sampler2D dfgLUT;
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
}`,zM=`
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
#endif`,BM=`#if defined( RE_IndirectDiffuse )
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
#endif`,HM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VM=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,GM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$M=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,KM=`#if defined( USE_POINTS_UV )
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
#endif`,ZM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ew=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nw=`#ifdef USE_MORPHTARGETS
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
#endif`,iw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,aw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ow=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cw=`#ifdef USE_NORMALMAP
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
#endif`,uw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_w=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ww=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ew=`float getShadowMask() {
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
}`,Tw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cw=`#ifdef USE_SKINNING
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
#endif`,Aw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rw=`#ifdef USE_SKINNING
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
#endif`,Pw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Iw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uw=`#ifdef USE_TRANSMISSION
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
#endif`,Fw=`#ifdef USE_TRANSMISSION
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
#endif`,Dw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ow=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hw=`uniform sampler2D t2D;
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
}`,Vw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ww=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jw=`#include <common>
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
}`,qw=`#if DEPTH_PACKING == 3200
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
}`,Yw=`#define DISTANCE
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
}`,$w=`#define DISTANCE
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
}`,Kw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qw=`uniform float scale;
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
}`,Jw=`uniform vec3 diffuse;
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
}`,e2=`#include <common>
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
}`,t2=`uniform vec3 diffuse;
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
}`,n2=`#define LAMBERT
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
}`,i2=`#define LAMBERT
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
}`,r2=`#define MATCAP
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
}`,s2=`#define MATCAP
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
}`,a2=`#define NORMAL
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
}`,o2=`#define NORMAL
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
}`,l2=`#define PHONG
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
}`,c2=`#define PHONG
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
}`,u2=`#define STANDARD
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
}`,h2=`#define STANDARD
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
}`,f2=`#define TOON
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
}`,d2=`#define TOON
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
}`,p2=`uniform float size;
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
}`,m2=`uniform vec3 diffuse;
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
}`,g2=`#include <common>
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
}`,x2=`uniform vec3 color;
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
}`,v2=`uniform float rotation;
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
}`,_2=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:BS,alphahash_pars_fragment:HS,alphamap_fragment:VS,alphamap_pars_fragment:GS,alphatest_fragment:WS,alphatest_pars_fragment:XS,aomap_fragment:jS,aomap_pars_fragment:qS,batching_pars_vertex:YS,batching_vertex:$S,begin_vertex:KS,beginnormal_vertex:ZS,bsdfs:QS,iridescence_fragment:JS,bumpmap_pars_fragment:eM,clipping_planes_fragment:tM,clipping_planes_pars_fragment:nM,clipping_planes_pars_vertex:iM,clipping_planes_vertex:rM,color_fragment:sM,color_pars_fragment:aM,color_pars_vertex:oM,color_vertex:lM,common:cM,cube_uv_reflection_fragment:uM,defaultnormal_vertex:hM,displacementmap_pars_vertex:fM,displacementmap_vertex:dM,emissivemap_fragment:pM,emissivemap_pars_fragment:mM,colorspace_fragment:gM,colorspace_pars_fragment:xM,envmap_fragment:vM,envmap_common_pars_fragment:_M,envmap_pars_fragment:yM,envmap_pars_vertex:SM,envmap_physical_pars_fragment:IM,envmap_vertex:MM,fog_vertex:wM,fog_pars_vertex:bM,fog_fragment:EM,fog_pars_fragment:TM,gradientmap_pars_fragment:CM,lightmap_pars_fragment:AM,lights_lambert_fragment:RM,lights_lambert_pars_fragment:PM,lights_pars_begin:LM,lights_toon_fragment:NM,lights_toon_pars_fragment:UM,lights_phong_fragment:FM,lights_phong_pars_fragment:DM,lights_physical_fragment:kM,lights_physical_pars_fragment:OM,lights_fragment_begin:zM,lights_fragment_maps:BM,lights_fragment_end:HM,lightprobes_pars_fragment:VM,logdepthbuf_fragment:GM,logdepthbuf_pars_fragment:WM,logdepthbuf_pars_vertex:XM,logdepthbuf_vertex:jM,map_fragment:qM,map_pars_fragment:YM,map_particle_fragment:$M,map_particle_pars_fragment:KM,metalnessmap_fragment:ZM,metalnessmap_pars_fragment:QM,morphinstance_vertex:JM,morphcolor_vertex:ew,morphnormal_vertex:tw,morphtarget_pars_vertex:nw,morphtarget_vertex:iw,normal_fragment_begin:rw,normal_fragment_maps:sw,normal_pars_fragment:aw,normal_pars_vertex:ow,normal_vertex:lw,normalmap_pars_fragment:cw,clearcoat_normal_fragment_begin:uw,clearcoat_normal_fragment_maps:hw,clearcoat_pars_fragment:fw,iridescence_pars_fragment:dw,opaque_fragment:pw,packing:mw,premultiplied_alpha_fragment:gw,project_vertex:xw,dithering_fragment:vw,dithering_pars_fragment:_w,roughnessmap_fragment:yw,roughnessmap_pars_fragment:Sw,shadowmap_pars_fragment:Mw,shadowmap_pars_vertex:ww,shadowmap_vertex:bw,shadowmask_pars_fragment:Ew,skinbase_vertex:Tw,skinning_pars_vertex:Cw,skinning_vertex:Aw,skinnormal_vertex:Rw,specularmap_fragment:Pw,specularmap_pars_fragment:Lw,tonemapping_fragment:Iw,tonemapping_pars_fragment:Nw,transmission_fragment:Uw,transmission_pars_fragment:Fw,uv_pars_fragment:Dw,uv_pars_vertex:kw,uv_vertex:Ow,worldpos_vertex:zw,background_vert:Bw,background_frag:Hw,backgroundCube_vert:Vw,backgroundCube_frag:Gw,cube_vert:Ww,cube_frag:Xw,depth_vert:jw,depth_frag:qw,distance_vert:Yw,distance_frag:$w,equirect_vert:Kw,equirect_frag:Zw,linedashed_vert:Qw,linedashed_frag:Jw,meshbasic_vert:e2,meshbasic_frag:t2,meshlambert_vert:n2,meshlambert_frag:i2,meshmatcap_vert:r2,meshmatcap_frag:s2,meshnormal_vert:a2,meshnormal_frag:o2,meshphong_vert:l2,meshphong_frag:c2,meshphysical_vert:u2,meshphysical_frag:h2,meshtoon_vert:f2,meshtoon_frag:d2,points_vert:p2,points_frag:m2,shadow_vert:g2,shadow_frag:x2,sprite_vert:v2,sprite_frag:_2},We={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Ji={basic:{uniforms:Xn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:Xn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:Xn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:Xn([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:Xn([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new Ye(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:Xn([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:Xn([We.points,We.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:Xn([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:Xn([We.common,We.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:Xn([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:Xn([We.sprite,We.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distance:{uniforms:Xn([We.common,We.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distance_vert,fragmentShader:St.distance_frag},shadow:{uniforms:Xn([We.lights,We.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};Ji.physical={uniforms:Xn([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const yc={r:0,b:0,g:0},y2=new qt,Hx=new vt;Hx.set(-1,0,0,0,1,0,0,0,1);function S2(a,e,t,i,s,o){const c=new Ye(0);let u=s===!0?0:1,h,d,p=null,g=0,m=null;function y(b){let C=b.isScene===!0?b.background:null;if(C&&C.isTexture){const E=b.backgroundBlurriness>0;C=e.get(C,E)}return C}function v(b){let C=!1;const E=y(b);E===null?_(c,u):E&&E.isColor&&(_(E,1),C=!0);const L=a.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(a.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function w(b,C){const E=y(C);E&&(E.isCubeTexture||E.mapping===Wc)?(d===void 0&&(d=new fn(new Oa(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Fa(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),d.material.uniforms.envMap.value=E,d.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(y2.makeRotationFromEuler(C.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Hx),d.material.toneMapped=Pt.getTransfer(E.colorSpace)!==Ht,(p!==E||g!==E.version||m!==a.toneMapping)&&(d.material.needsUpdate=!0,p=E,g=E.version,m=a.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):E&&E.isTexture&&(h===void 0&&(h=new fn(new Tr(2,2),new un({name:"BackgroundMaterial",uniforms:Fa(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=E,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=Pt.getTransfer(E.colorSpace)!==Ht,E.matrixAutoUpdate===!0&&E.updateMatrix(),h.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||g!==E.version||m!==a.toneMapping)&&(h.material.needsUpdate=!0,p=E,g=E.version,m=a.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function _(b,C){b.getRGB(yc,Fx(a)),t.buffers.color.setClear(yc.r,yc.g,yc.b,C,o)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(b,C=1){c.set(b),u=C,_(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(b){u=b,_(c,u)},render:v,addToRenderList:w,dispose:S}}function M2(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},s=m(null);let o=s,c=!1;function u(D,B,$,J,V){let Z=!1;const K=g(D,J,$,B);o!==K&&(o=K,d(o.object)),Z=y(D,J,$,V),Z&&v(D,J,$,V),V!==null&&e.update(V,a.ELEMENT_ARRAY_BUFFER),(Z||c)&&(c=!1,E(D,B,$,J),V!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function h(){return a.createVertexArray()}function d(D){return a.bindVertexArray(D)}function p(D){return a.deleteVertexArray(D)}function g(D,B,$,J){const V=J.wireframe===!0;let Z=i[B.id];Z===void 0&&(Z={},i[B.id]=Z);const K=D.isInstancedMesh===!0?D.id:0;let W=Z[K];W===void 0&&(W={},Z[K]=W);let se=W[$.id];se===void 0&&(se={},W[$.id]=se);let j=se[V];return j===void 0&&(j=m(h()),se[V]=j),j}function m(D){const B=[],$=[],J=[];for(let V=0;V<t;V++)B[V]=0,$[V]=0,J[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:$,attributeDivisors:J,object:D,attributes:{},index:null}}function y(D,B,$,J){const V=o.attributes,Z=B.attributes;let K=0;const W=$.getAttributes();for(const se in W)if(W[se].location>=0){const O=V[se];let G=Z[se];if(G===void 0&&(se==="instanceMatrix"&&D.instanceMatrix&&(G=D.instanceMatrix),se==="instanceColor"&&D.instanceColor&&(G=D.instanceColor)),O===void 0||O.attribute!==G||G&&O.data!==G.data)return!0;K++}return o.attributesNum!==K||o.index!==J}function v(D,B,$,J){const V={},Z=B.attributes;let K=0;const W=$.getAttributes();for(const se in W)if(W[se].location>=0){let O=Z[se];O===void 0&&(se==="instanceMatrix"&&D.instanceMatrix&&(O=D.instanceMatrix),se==="instanceColor"&&D.instanceColor&&(O=D.instanceColor));const G={};G.attribute=O,O&&O.data&&(G.data=O.data),V[se]=G,K++}o.attributes=V,o.attributesNum=K,o.index=J}function w(){const D=o.newAttributes;for(let B=0,$=D.length;B<$;B++)D[B]=0}function _(D){S(D,0)}function S(D,B){const $=o.newAttributes,J=o.enabledAttributes,V=o.attributeDivisors;$[D]=1,J[D]===0&&(a.enableVertexAttribArray(D),J[D]=1),V[D]!==B&&(a.vertexAttribDivisor(D,B),V[D]=B)}function b(){const D=o.newAttributes,B=o.enabledAttributes;for(let $=0,J=B.length;$<J;$++)B[$]!==D[$]&&(a.disableVertexAttribArray($),B[$]=0)}function C(D,B,$,J,V,Z,K){K===!0?a.vertexAttribIPointer(D,B,$,V,Z):a.vertexAttribPointer(D,B,$,J,V,Z)}function E(D,B,$,J){w();const V=J.attributes,Z=$.getAttributes(),K=B.defaultAttributeValues;for(const W in Z){const se=Z[W];if(se.location>=0){let j=V[W];if(j===void 0&&(W==="instanceMatrix"&&D.instanceMatrix&&(j=D.instanceMatrix),W==="instanceColor"&&D.instanceColor&&(j=D.instanceColor)),j!==void 0){const O=j.normalized,G=j.itemSize,pe=e.get(j);if(pe===void 0)continue;const Se=pe.buffer,_e=pe.type,ee=pe.bytesPerElement,xe=_e===a.INT||_e===a.UNSIGNED_INT||j.gpuType===Ed;if(j.isInterleavedBufferAttribute){const me=j.data,Ie=me.stride,Be=j.offset;if(me.isInstancedInterleavedBuffer){for(let $e=0;$e<se.locationSize;$e++)S(se.location+$e,me.meshPerAttribute);D.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let $e=0;$e<se.locationSize;$e++)_(se.location+$e);a.bindBuffer(a.ARRAY_BUFFER,Se);for(let $e=0;$e<se.locationSize;$e++)C(se.location+$e,G/se.locationSize,_e,O,Ie*ee,(Be+G/se.locationSize*$e)*ee,xe)}else{if(j.isInstancedBufferAttribute){for(let me=0;me<se.locationSize;me++)S(se.location+me,j.meshPerAttribute);D.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let me=0;me<se.locationSize;me++)_(se.location+me);a.bindBuffer(a.ARRAY_BUFFER,Se);for(let me=0;me<se.locationSize;me++)C(se.location+me,G/se.locationSize,_e,O,G*ee,G/se.locationSize*me*ee,xe)}}else if(K!==void 0){const O=K[W];if(O!==void 0)switch(O.length){case 2:a.vertexAttrib2fv(se.location,O);break;case 3:a.vertexAttrib3fv(se.location,O);break;case 4:a.vertexAttrib4fv(se.location,O);break;default:a.vertexAttrib1fv(se.location,O)}}}}b()}function L(){U();for(const D in i){const B=i[D];for(const $ in B){const J=B[$];for(const V in J){const Z=J[V];for(const K in Z)p(Z[K].object),delete Z[K];delete J[V]}}delete i[D]}}function A(D){if(i[D.id]===void 0)return;const B=i[D.id];for(const $ in B){const J=B[$];for(const V in J){const Z=J[V];for(const K in Z)p(Z[K].object),delete Z[K];delete J[V]}}delete i[D.id]}function I(D){for(const B in i){const $=i[B];for(const J in $){const V=$[J];if(V[D.id]===void 0)continue;const Z=V[D.id];for(const K in Z)p(Z[K].object),delete Z[K];delete V[D.id]}}}function T(D){for(const B in i){const $=i[B],J=D.isInstancedMesh===!0?D.id:0,V=$[J];if(V!==void 0){for(const Z in V){const K=V[Z];for(const W in K)p(K[W].object),delete K[W];delete V[Z]}delete $[J],Object.keys($).length===0&&delete i[B]}}}function U(){z(),c=!0,o!==s&&(o=s,d(o.object))}function z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:U,resetDefaultState:z,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfObject:T,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:_,disableUnusedAttributes:b}}function w2(a,e,t){let i;function s(h){i=h}function o(h,d){a.drawArrays(i,h,d),t.update(d,i,1)}function c(h,d,p){p!==0&&(a.drawArraysInstanced(i,h,d,p),t.update(d,i,p))}function u(h,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,d,0,p);let m=0;for(let y=0;y<p;y++)m+=d[y];t.update(m,i,1)}this.setMode=s,this.render=o,this.renderInstances=c,this.renderMultiDraw=u}function b2(a,e,t,i){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=a.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(I){return!(I!==xi&&i.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(I){const T=I===vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==gi&&i.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Gi&&!T)}function h(I){if(I==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const p=h(d);p!==d&&(ht("WebGLRenderer:",d,"not supported, using",p,"instead."),d=p);const g=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&ht("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),v=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=a.getParameter(a.MAX_TEXTURE_SIZE),_=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),S=a.getParameter(a.MAX_VERTEX_ATTRIBS),b=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),C=a.getParameter(a.MAX_VARYING_VECTORS),E=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),L=a.getParameter(a.MAX_SAMPLES),A=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:g,reversedDepthBuffer:m,maxTextures:y,maxVertexTextures:v,maxTextureSize:w,maxCubemapSize:_,maxAttributes:S,maxVertexUniforms:b,maxVaryings:C,maxFragmentUniforms:E,maxSamples:L,samples:A}}function E2(a){const e=this;let t=null,i=0,s=!1,o=!1;const c=new Ls,u=new vt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,m){const y=g.length!==0||m||i!==0||s;return s=m,i=g.length,y},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,m){t=p(g,m,0)},this.setState=function(g,m,y){const v=g.clippingPlanes,w=g.clipIntersection,_=g.clipShadows,S=a.get(g);if(!s||v===null||v.length===0||o&&!_)o?p(null):d();else{const b=o?0:i,C=b*4;let E=S.clippingState||null;h.value=E,E=p(v,m,C,y);for(let L=0;L!==C;++L)E[L]=t[L];S.clippingState=E,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=b}};function d(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(g,m,y,v){const w=g!==null?g.length:0;let _=null;if(w!==0){if(_=h.value,v!==!0||_===null){const S=y+w*4,b=m.matrixWorldInverse;u.getNormalMatrix(b),(_===null||_.length<S)&&(_=new Float32Array(S));for(let C=0,E=y;C!==w;++C,E+=4)c.copy(g[C]).applyMatrix4(b,u),c.normal.toArray(_,E),_[E+3]=c.constant}h.value=_,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,_}}const os=4,vg=[.125,.215,.35,.446,.526,.582],Ns=20,T2=256,Ro=new za,_g=new Ye;let lf=null,cf=0,uf=0,hf=!1;const C2=new Q;class yg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,o={}){const{size:c=256,position:u=C2}=o;lf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),uf=this._renderer.getActiveMipmapLevel(),hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,i,s,h,u),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lf,cf,uf),this._renderer.xr.enabled=hf,e.scissorTest=!1,ba(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ds||e.mapping===Na?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),uf=this._renderer.getActiveMipmapLevel(),hf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:vi,format:xi,colorSpace:Nc,depthBuffer:!1},s=Sg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sg(e,t,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=A2(o)),this._blurMaterial=P2(o,e,t),this._ggxMaterial=R2(o,e,t)}return s}_compileMaterial(e){const t=new fn(new hn,e);this._renderer.compile(t,Ro)}_sceneToCubeUV(e,t,i,s,o){const h=new Rn(90,1,t,i),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,m=g.autoClear,y=g.toneMapping;g.getClearColor(_g),g.toneMapping=ir,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fn(new Oa,new Xc({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,_=w.material;let S=!1;const b=e.background;b?b.isColor&&(_.color.copy(b),e.background=null,S=!0):(_.color.copy(_g),S=!0);for(let C=0;C<6;C++){const E=C%3;E===0?(h.up.set(0,d[C],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x+p[C],o.y,o.z)):E===1?(h.up.set(0,0,d[C]),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y+p[C],o.z)):(h.up.set(0,d[C],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y,o.z+p[C]));const L=this._cubeSize;ba(s,E*L,C>2?L:0,L,L),g.setRenderTarget(s),S&&g.render(w,h),g.render(e,h)}g.toneMapping=y,g.autoClear=m,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Ds||e.mapping===Na;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mg());const o=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=o;const u=o.uniforms;u.envMap.value=e;const h=this._cubeSize;ba(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(c,Ro)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,o=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[i];u.material=c;const h=c.uniforms,d=i/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),g=Math.sqrt(d*d-p*p),m=0+d*1.25,y=g*m,{_lodMax:v}=this,w=this._sizeLods[i],_=3*w*(i>v-os?i-v+os:0),S=4*(this._cubeSize-w);h.envMap.value=e.texture,h.roughness.value=y,h.mipInt.value=v-t,ba(o,_,S,3*w,2*w),s.setRenderTarget(o),s.render(u,Ro),h.envMap.value=o.texture,h.roughness.value=0,h.mipInt.value=v-i,ba(e,_,S,3*w,2*w),s.setRenderTarget(e),s.render(u,Ro)}_blur(e,t,i,s,o){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",o),this._halfBlur(c,e,i,i,s,"longitudinal",o)}_halfBlur(e,t,i,s,o,c,u){const h=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Nt("blur direction must be either latitudinal or longitudinal!");const p=3,g=this._lodMeshes[s];g.material=d;const m=d.uniforms,y=this._sizeLods[i]-1,v=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*Ns-1),w=o/v,_=isFinite(o)?1+Math.floor(p*w):Ns;_>Ns&&ht(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Ns}`);const S=[];let b=0;for(let I=0;I<Ns;++I){const T=I/w,U=Math.exp(-T*T/2);S.push(U),I===0?b+=U:I<_&&(b+=2*U)}for(let I=0;I<S.length;I++)S[I]=S[I]/b;m.envMap.value=e.texture,m.samples.value=_,m.weights.value=S,m.latitudinal.value=c==="latitudinal",u&&(m.poleAxis.value=u);const{_lodMax:C}=this;m.dTheta.value=v,m.mipInt.value=C-i;const E=this._sizeLods[s],L=3*E*(s>C-os?s-C+os:0),A=4*(this._cubeSize-E);ba(t,L,A,3*E,2*E),h.setRenderTarget(t),h.render(g,Ro)}}function A2(a){const e=[],t=[],i=[];let s=a;const o=a-os+1+vg.length;for(let c=0;c<o;c++){const u=Math.pow(2,s);e.push(u);let h=1/u;c>a-os?h=vg[c-a+os-1]:c===0&&(h=0),t.push(h);const d=1/(u-2),p=-d,g=1+d,m=[p,p,g,p,g,g,p,p,g,g,p,g],y=6,v=6,w=3,_=2,S=1,b=new Float32Array(w*v*y),C=new Float32Array(_*v*y),E=new Float32Array(S*v*y);for(let A=0;A<y;A++){const I=A%3*2/3-1,T=A>2?0:-1,U=[I,T,0,I+2/3,T,0,I+2/3,T+1,0,I,T,0,I+2/3,T+1,0,I,T+1,0];b.set(U,w*v*A),C.set(m,_*v*A);const z=[A,A,A,A,A,A];E.set(z,S*v*A)}const L=new hn;L.setAttribute("position",new Sn(b,w)),L.setAttribute("uv",new Sn(C,_)),L.setAttribute("faceIndex",new Sn(E,S)),i.push(new fn(L,null)),s>os&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Sg(a,e,t){const i=new ii(a,e,t);return i.texture.mapping=Wc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ba(a,e,t,i,s){a.viewport.set(e,t,i,s),a.scissor.set(e,t,i,s)}function R2(a,e,t){return new un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:T2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jc(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function P2(a,e,t){const i=new Float32Array(Ns),s=new Q(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:Ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jc(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Mg(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function wg(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function jc(){return`

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
	`}class Vx extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Nx(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Oa(5,5,5),o=new un({name:"CubemapFromEquirect",uniforms:Fa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ni,blending:nr});o.uniforms.tEquirect.value=t;const c=new fn(s,o),u=t.minFilter;return t.minFilter===Us&&(t.minFilter=xn),new US(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(o)}}function L2(a){let e=new WeakMap,t=new WeakMap,i=null;function s(m,y=!1){return m==null?null:y?c(m):o(m)}function o(m){if(m&&m.isTexture){const y=m.mapping;if(y===Nh||y===Uh)if(e.has(m)){const v=e.get(m).texture;return u(v,m.mapping)}else{const v=m.image;if(v&&v.height>0){const w=new Vx(v.height);return w.fromEquirectangularTexture(a,m),e.set(m,w),m.addEventListener("dispose",d),u(w.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const y=m.mapping,v=y===Nh||y===Uh,w=y===Ds||y===Na;if(v||w){let _=t.get(m);const S=_!==void 0?_.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==S)return i===null&&(i=new yg(a)),_=v?i.fromEquirectangular(m,_):i.fromCubemap(m,_),_.texture.pmremVersion=m.pmremVersion,t.set(m,_),_.texture;if(_!==void 0)return _.texture;{const b=m.image;return v&&b&&b.height>0||w&&b&&h(b)?(i===null&&(i=new yg(a)),_=v?i.fromEquirectangular(m):i.fromCubemap(m),_.texture.pmremVersion=m.pmremVersion,t.set(m,_),m.addEventListener("dispose",p),_.texture):null}}}return m}function u(m,y){return y===Nh?m.mapping=Ds:y===Uh&&(m.mapping=Na),m}function h(m){let y=0;const v=6;for(let w=0;w<v;w++)m[w]!==void 0&&y++;return y===v}function d(m){const y=m.target;y.removeEventListener("dispose",d);const v=e.get(y);v!==void 0&&(e.delete(y),v.dispose())}function p(m){const y=m.target;y.removeEventListener("dispose",p);const v=t.get(y);v!==void 0&&(t.delete(y),v.dispose())}function g(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:g}}function I2(a){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=a.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&cd("WebGLRenderer: "+i+" extension not supported."),s}}}function N2(a,e,t,i){const s={},o=new WeakMap;function c(g){const m=g.target;m.index!==null&&e.remove(m.index);for(const v in m.attributes)e.remove(m.attributes[v]);m.removeEventListener("dispose",c),delete s[m.id];const y=o.get(m);y&&(e.remove(y),o.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function u(g,m){return s[m.id]===!0||(m.addEventListener("dispose",c),s[m.id]=!0,t.memory.geometries++),m}function h(g){const m=g.attributes;for(const y in m)e.update(m[y],a.ARRAY_BUFFER)}function d(g){const m=[],y=g.index,v=g.attributes.position;let w=0;if(v===void 0)return;if(y!==null){const b=y.array;w=y.version;for(let C=0,E=b.length;C<E;C+=3){const L=b[C+0],A=b[C+1],I=b[C+2];m.push(L,A,A,I,I,L)}}else{const b=v.array;w=v.version;for(let C=0,E=b.length/3-1;C<E;C+=3){const L=C+0,A=C+1,I=C+2;m.push(L,A,A,I,I,L)}}const _=new(v.count>=65535?Lx:Px)(m,1);_.version=w;const S=o.get(g);S&&e.remove(S),o.set(g,_)}function p(g){const m=o.get(g);if(m){const y=g.index;y!==null&&m.version<y.version&&d(g)}else d(g);return o.get(g)}return{get:u,update:h,getWireframeAttribute:p}}function U2(a,e,t){let i;function s(g){i=g}let o,c;function u(g){o=g.type,c=g.bytesPerElement}function h(g,m){a.drawElements(i,m,o,g*c),t.update(m,i,1)}function d(g,m,y){y!==0&&(a.drawElementsInstanced(i,m,o,g*c,y),t.update(m,i,y))}function p(g,m,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,o,g,0,y);let w=0;for(let _=0;_<y;_++)w+=m[_];t.update(w,i,1)}this.setMode=s,this.setIndex=u,this.render=h,this.renderInstances=d,this.renderMultiDraw=p}function F2(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,c,u){switch(t.calls++,c){case a.TRIANGLES:t.triangles+=u*(o/3);break;case a.LINES:t.lines+=u*(o/2);break;case a.LINE_STRIP:t.lines+=u*(o-1);break;case a.LINE_LOOP:t.lines+=u*o;break;case a.POINTS:t.points+=u*o;break;default:Nt("WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function D2(a,e,t){const i=new WeakMap,s=new an;function o(c,u,h){const d=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let m=i.get(u);if(m===void 0||m.count!==g){let U=function(){I.dispose(),i.delete(u),u.removeEventListener("dispose",U)};m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,_=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let C=0;y===!0&&(C=1),v===!0&&(C=2),w===!0&&(C=3);let E=u.attributes.position.count*C,L=1;E>e.maxTextureSize&&(L=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const A=new Float32Array(E*L*4*g),I=new Cx(A,E,L,g);I.type=Gi,I.needsUpdate=!0;const T=C*4;for(let z=0;z<g;z++){const D=_[z],B=S[z],$=b[z],J=E*L*4*z;for(let V=0;V<D.count;V++){const Z=V*T;y===!0&&(s.fromBufferAttribute(D,V),A[J+Z+0]=s.x,A[J+Z+1]=s.y,A[J+Z+2]=s.z,A[J+Z+3]=0),v===!0&&(s.fromBufferAttribute(B,V),A[J+Z+4]=s.x,A[J+Z+5]=s.y,A[J+Z+6]=s.z,A[J+Z+7]=0),w===!0&&(s.fromBufferAttribute($,V),A[J+Z+8]=s.x,A[J+Z+9]=s.y,A[J+Z+10]=s.z,A[J+Z+11]=$.itemSize===4?s.w:1)}}m={count:g,texture:I,size:new ct(E,L)},i.set(u,m),u.addEventListener("dispose",U)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(a,"morphTexture",c.morphTexture,t);else{let y=0;for(let w=0;w<d.length;w++)y+=d[w];const v=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(a,"morphTargetBaseInfluence",v),h.getUniforms().setValue(a,"morphTargetInfluences",d)}h.getUniforms().setValue(a,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(a,"morphTargetsTextureSize",m.size)}return{update:o}}function k2(a,e,t,i,s){let o=new WeakMap;function c(d){const p=s.render.frame,g=d.geometry,m=e.get(d,g);if(o.get(m)!==p&&(e.update(m),o.set(m,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),o.get(d)!==p&&(t.update(d.instanceMatrix,a.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,a.ARRAY_BUFFER),o.set(d,p))),d.isSkinnedMesh){const y=d.skeleton;o.get(y)!==p&&(y.update(),o.set(y,p))}return m}function u(){o=new WeakMap}function h(d){const p=d.target;p.removeEventListener("dispose",h),i.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:c,dispose:u}}const O2={[fx]:"LINEAR_TONE_MAPPING",[dx]:"REINHARD_TONE_MAPPING",[px]:"CINEON_TONE_MAPPING",[mx]:"ACES_FILMIC_TONE_MAPPING",[xx]:"AGX_TONE_MAPPING",[vx]:"NEUTRAL_TONE_MAPPING",[gx]:"CUSTOM_TONE_MAPPING"};function z2(a,e,t,i,s){const o=new ii(e,t,{type:a,depthBuffer:i,stencilBuffer:s,depthTexture:i?new Ua(e,t):void 0}),c=new ii(e,t,{type:vi,depthBuffer:!1,stencilBuffer:!1}),u=new hn;u.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Qt([0,2,0,0,2,0],2));const h=new bS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new fn(u,h),p=new za(-1,1,1,-1,0,1);let g=null,m=null,y=!1,v,w=null,_=[],S=!1;this.setSize=function(b,C){o.setSize(b,C),c.setSize(b,C);for(let E=0;E<_.length;E++){const L=_[E];L.setSize&&L.setSize(b,C)}},this.setEffects=function(b){_=b,S=_.length>0&&_[0].isRenderPass===!0;const C=o.width,E=o.height;for(let L=0;L<_.length;L++){const A=_[L];A.setSize&&A.setSize(C,E)}},this.begin=function(b,C){if(y||b.toneMapping===ir&&_.length===0)return!1;if(w=C,C!==null){const E=C.width,L=C.height;(o.width!==E||o.height!==L)&&this.setSize(E,L)}return S===!1&&b.setRenderTarget(o),v=b.toneMapping,b.toneMapping=ir,!0},this.hasRenderPass=function(){return S},this.end=function(b,C){b.toneMapping=v,y=!0;let E=o,L=c;for(let A=0;A<_.length;A++){const I=_[A];if(I.enabled!==!1&&(I.render(b,L,E,C),I.needsSwap!==!1)){const T=E;E=L,L=T}}if(g!==b.outputColorSpace||m!==b.toneMapping){g=b.outputColorSpace,m=b.toneMapping,h.defines={},Pt.getTransfer(g)===Ht&&(h.defines.SRGB_TRANSFER="");const A=O2[m];A&&(h.defines[A]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,b.setRenderTarget(w),b.render(d,p),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),c.dispose(),u.dispose(),h.dispose()}}const Gx=new Hn,fd=new Ua(1,1),Wx=new Cx,Xx=new tS,jx=new Nx,bg=[],Eg=[],Tg=new Float32Array(16),Cg=new Float32Array(9),Ag=new Float32Array(4);function Ba(a,e,t){const i=a[0];if(i<=0||i>0)return a;const s=e*t;let o=bg[s];if(o===void 0&&(o=new Float32Array(s),bg[s]=o),e!==0){i.toArray(o,0);for(let c=1,u=0;c!==e;++c)u+=t,a[c].toArray(o,u)}return o}function Mn(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function wn(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function qc(a,e){let t=Eg[e];t===void 0&&(t=new Int32Array(e),Eg[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function B2(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function H2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;a.uniform2fv(this.addr,e),wn(t,e)}}function V2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mn(t,e))return;a.uniform3fv(this.addr,e),wn(t,e)}}function G2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;a.uniform4fv(this.addr,e),wn(t,e)}}function W2(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mn(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),wn(t,e)}else{if(Mn(t,i))return;Ag.set(i),a.uniformMatrix2fv(this.addr,!1,Ag),wn(t,i)}}function X2(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mn(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),wn(t,e)}else{if(Mn(t,i))return;Cg.set(i),a.uniformMatrix3fv(this.addr,!1,Cg),wn(t,i)}}function j2(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mn(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),wn(t,e)}else{if(Mn(t,i))return;Tg.set(i),a.uniformMatrix4fv(this.addr,!1,Tg),wn(t,i)}}function q2(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Y2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;a.uniform2iv(this.addr,e),wn(t,e)}}function $2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;a.uniform3iv(this.addr,e),wn(t,e)}}function K2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;a.uniform4iv(this.addr,e),wn(t,e)}}function Z2(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Q2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;a.uniform2uiv(this.addr,e),wn(t,e)}}function J2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;a.uniform3uiv(this.addr,e),wn(t,e)}}function eb(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;a.uniform4uiv(this.addr,e),wn(t,e)}}function tb(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s);let o;this.type===a.SAMPLER_2D_SHADOW?(fd.compareFunction=t.isReversedDepthBuffer()?Nd:Id,o=fd):o=Gx,t.setTexture2D(e||o,s)}function nb(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Xx,s)}function ib(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||jx,s)}function rb(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Wx,s)}function sb(a){switch(a){case 5126:return B2;case 35664:return H2;case 35665:return V2;case 35666:return G2;case 35674:return W2;case 35675:return X2;case 35676:return j2;case 5124:case 35670:return q2;case 35667:case 35671:return Y2;case 35668:case 35672:return $2;case 35669:case 35673:return K2;case 5125:return Z2;case 36294:return Q2;case 36295:return J2;case 36296:return eb;case 35678:case 36198:case 36298:case 36306:case 35682:return tb;case 35679:case 36299:case 36307:return nb;case 35680:case 36300:case 36308:case 36293:return ib;case 36289:case 36303:case 36311:case 36292:return rb}}function ab(a,e){a.uniform1fv(this.addr,e)}function ob(a,e){const t=Ba(e,this.size,2);a.uniform2fv(this.addr,t)}function lb(a,e){const t=Ba(e,this.size,3);a.uniform3fv(this.addr,t)}function cb(a,e){const t=Ba(e,this.size,4);a.uniform4fv(this.addr,t)}function ub(a,e){const t=Ba(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function hb(a,e){const t=Ba(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function fb(a,e){const t=Ba(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function db(a,e){a.uniform1iv(this.addr,e)}function pb(a,e){a.uniform2iv(this.addr,e)}function mb(a,e){a.uniform3iv(this.addr,e)}function gb(a,e){a.uniform4iv(this.addr,e)}function xb(a,e){a.uniform1uiv(this.addr,e)}function vb(a,e){a.uniform2uiv(this.addr,e)}function _b(a,e){a.uniform3uiv(this.addr,e)}function yb(a,e){a.uniform4uiv(this.addr,e)}function Sb(a,e,t){const i=this.cache,s=e.length,o=qc(t,s);Mn(i,o)||(a.uniform1iv(this.addr,o),wn(i,o));let c;this.type===a.SAMPLER_2D_SHADOW?c=fd:c=Gx;for(let u=0;u!==s;++u)t.setTexture2D(e[u]||c,o[u])}function Mb(a,e,t){const i=this.cache,s=e.length,o=qc(t,s);Mn(i,o)||(a.uniform1iv(this.addr,o),wn(i,o));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||Xx,o[c])}function wb(a,e,t){const i=this.cache,s=e.length,o=qc(t,s);Mn(i,o)||(a.uniform1iv(this.addr,o),wn(i,o));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||jx,o[c])}function bb(a,e,t){const i=this.cache,s=e.length,o=qc(t,s);Mn(i,o)||(a.uniform1iv(this.addr,o),wn(i,o));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||Wx,o[c])}function Eb(a){switch(a){case 5126:return ab;case 35664:return ob;case 35665:return lb;case 35666:return cb;case 35674:return ub;case 35675:return hb;case 35676:return fb;case 5124:case 35670:return db;case 35667:case 35671:return pb;case 35668:case 35672:return mb;case 35669:case 35673:return gb;case 5125:return xb;case 36294:return vb;case 36295:return _b;case 36296:return yb;case 35678:case 36198:case 36298:case 36306:case 35682:return Sb;case 35679:case 36299:case 36307:return Mb;case 35680:case 36300:case 36308:case 36293:return wb;case 36289:case 36303:case 36311:case 36292:return bb}}class Tb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=sb(t.type)}}class Cb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Eb(t.type)}}class Ab{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let o=0,c=s.length;o!==c;++o){const u=s[o];u.setValue(e,t[u.id],i)}}}const ff=/(\w+)(\])?(\[|\.)?/g;function Rg(a,e){a.seq.push(e),a.map[e.id]=e}function Rb(a,e,t){const i=a.name,s=i.length;for(ff.lastIndex=0;;){const o=ff.exec(i),c=ff.lastIndex;let u=o[1];const h=o[2]==="]",d=o[3];if(h&&(u=u|0),d===void 0||d==="["&&c+2===s){Rg(t,d===void 0?new Tb(u,a,e):new Cb(u,a,e));break}else{let g=t.map[u];g===void 0&&(g=new Ab(u),Rg(t,g)),t=g}}}class Ac{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const u=e.getActiveUniform(t,c),h=e.getUniformLocation(t,u.name);Rb(u,h,this)}const s=[],o=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(c):o.push(c);s.length>0&&(this.seq=s.concat(o))}setValue(e,t,i,s){const o=this.map[t];o!==void 0&&o.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let o=0,c=t.length;o!==c;++o){const u=t[o],h=i[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,o=e.length;s!==o;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function Pg(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}const Pb=37297;let Lb=0;function Ib(a,e){const t=a.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=s;c<o;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const Lg=new vt;function Nb(a){Pt._getMatrix(Lg,Pt.workingColorSpace,a);const e=`mat3( ${Lg.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(a)){case Uc:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return ht("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Ig(a,e,t){const i=a.getShaderParameter(e,a.COMPILE_STATUS),o=(a.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+o+`

`+Ib(a.getShaderSource(e),u)}else return o}function Ub(a,e){const t=Nb(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Fb={[fx]:"Linear",[dx]:"Reinhard",[px]:"Cineon",[mx]:"ACESFilmic",[xx]:"AgX",[vx]:"Neutral",[gx]:"Custom"};function Db(a,e){const t=Fb[e];return t===void 0?(ht("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sc=new Q;function kb(){Pt.getLuminanceCoefficients(Sc);const a=Sc.x.toFixed(4),e=Sc.y.toFixed(4),t=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ob(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function zb(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Bb(a,e){const t={},i=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=a.getActiveAttrib(e,s),c=o.name;let u=1;o.type===a.FLOAT_MAT2&&(u=2),o.type===a.FLOAT_MAT3&&(u=3),o.type===a.FLOAT_MAT4&&(u=4),t[c]={type:o.type,location:a.getAttribLocation(e,c),locationSize:u}}return t}function Uo(a){return a!==""}function Ng(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ug(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hb=/^[ \t]*#include +<([\w\d./]+)>/gm;function dd(a){return a.replace(Hb,Gb)}const Vb=new Map;function Gb(a,e){let t=St[e];if(t===void 0){const i=Vb.get(e);if(i!==void 0)t=St[i],ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return dd(t)}const Wb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fg(a){return a.replace(Wb,Xb)}function Xb(a,e,t,i){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Dg(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const jb={[wc]:"SHADOWMAP_TYPE_PCF",[No]:"SHADOWMAP_TYPE_VSM"};function qb(a){return jb[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Yb={[Ds]:"ENVMAP_TYPE_CUBE",[Na]:"ENVMAP_TYPE_CUBE",[Wc]:"ENVMAP_TYPE_CUBE_UV"};function $b(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":Yb[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const Kb={[Na]:"ENVMAP_MODE_REFRACTION"};function Zb(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":Kb[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Qb={[bd]:"ENVMAP_BLENDING_MULTIPLY",[_y]:"ENVMAP_BLENDING_MIX",[yy]:"ENVMAP_BLENDING_ADD"};function Jb(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":Qb[a.combine]||"ENVMAP_BLENDING_NONE"}function eE(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function tE(a,e,t,i){const s=a.getContext(),o=t.defines;let c=t.vertexShader,u=t.fragmentShader;const h=qb(t),d=$b(t),p=Zb(t),g=Jb(t),m=eE(t),y=Ob(t),v=zb(o),w=s.createProgram();let _,S,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Uo).join(`
`),_.length>0&&(_+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Uo).join(`
`),S.length>0&&(S+=`
`)):(_=[Dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),S=[Dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ir?"#define TONE_MAPPING":"",t.toneMapping!==ir?St.tonemapping_pars_fragment:"",t.toneMapping!==ir?Db("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,Ub("linearToOutputTexel",t.outputColorSpace),kb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Uo).join(`
`)),c=dd(c),c=Ng(c,t),c=Ug(c,t),u=dd(u),u=Ng(u,t),u=Ug(u,t),c=Fg(c),u=Fg(u),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,S=["#define varying in",t.glslVersion===D0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===D0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const C=b+_+c,E=b+S+u,L=Pg(s,s.VERTEX_SHADER,C),A=Pg(s,s.FRAGMENT_SHADER,E);s.attachShader(w,L),s.attachShader(w,A),t.index0AttributeName!==void 0?s.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(w,0,"position"),s.linkProgram(w);function I(D){if(a.debug.checkShaderErrors){const B=s.getProgramInfoLog(w)||"",$=s.getShaderInfoLog(L)||"",J=s.getShaderInfoLog(A)||"",V=B.trim(),Z=$.trim(),K=J.trim();let W=!0,se=!0;if(s.getProgramParameter(w,s.LINK_STATUS)===!1)if(W=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(s,w,L,A);else{const j=Ig(s,L,"vertex"),O=Ig(s,A,"fragment");Nt("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(w,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+V+`
`+j+`
`+O)}else V!==""?ht("WebGLProgram: Program Info Log:",V):(Z===""||K==="")&&(se=!1);se&&(D.diagnostics={runnable:W,programLog:V,vertexShader:{log:Z,prefix:_},fragmentShader:{log:K,prefix:S}})}s.deleteShader(L),s.deleteShader(A),T=new Ac(s,w),U=Bb(s,w)}let T;this.getUniforms=function(){return T===void 0&&I(this),T};let U;this.getAttributes=function(){return U===void 0&&I(this),U};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(w,Pb)),z},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Lb++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=L,this.fragmentShader=A,this}let nE=0;class iE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new rE(e),t.set(e,i)),i}}class rE{constructor(e){this.id=nE++,this.code=e,this.usedTimes=0}}function sE(a){return a===ks||a===Pc||a===Lc}function aE(a,e,t,i,s,o){const c=new Ax,u=new iE,h=new Set,d=[],p=new Map,g=i.logarithmicDepthBuffer;let m=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return h.add(T),T===0?"uv":`uv${T}`}function w(T,U,z,D,B,$){const J=D.fog,V=B.geometry,Z=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?D.environment:null,K=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,W=e.get(T.envMap||Z,K),se=W&&W.mapping===Wc?W.image.height:null,j=y[T.type];T.precision!==null&&(m=i.getMaxPrecision(T.precision),m!==T.precision&&ht("WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const O=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,G=O!==void 0?O.length:0;let pe=0;V.morphAttributes.position!==void 0&&(pe=1),V.morphAttributes.normal!==void 0&&(pe=2),V.morphAttributes.color!==void 0&&(pe=3);let Se,_e,ee,xe;if(j){const dt=Ji[j];Se=dt.vertexShader,_e=dt.fragmentShader}else Se=T.vertexShader,_e=T.fragmentShader,u.update(T),ee=u.getVertexShaderID(T),xe=u.getFragmentShaderID(T);const me=a.getRenderTarget(),Ie=a.state.buffers.depth.getReversed(),Be=B.isInstancedMesh===!0,$e=B.isBatchedMesh===!0,wt=!!T.map,ut=!!T.matcap,Tt=!!W,Ct=!!T.aoMap,mt=!!T.lightMap,Yt=!!T.bumpMap,Vt=!!T.normalMap,on=!!T.displacementMap,te=!!T.emissiveMap,Gt=!!T.metalnessMap,_t=!!T.roughnessMap,Ft=T.anisotropy>0,Te=T.clearcoat>0,Wt=T.dispersion>0,k=T.iridescence>0,R=T.sheen>0,re=T.transmission>0,ye=Ft&&!!T.anisotropyMap,Me=Te&&!!T.clearcoatMap,Re=Te&&!!T.clearcoatNormalMap,ze=Te&&!!T.clearcoatRoughnessMap,de=k&&!!T.iridescenceMap,ve=k&&!!T.iridescenceThicknessMap,Ge=R&&!!T.sheenColorMap,Ue=R&&!!T.sheenRoughnessMap,ke=!!T.specularMap,Pe=!!T.specularColorMap,ft=!!T.specularIntensityMap,st=re&&!!T.transmissionMap,yt=re&&!!T.thicknessMap,q=!!T.gradientMap,Ne=!!T.alphaMap,ge=T.alphaTest>0,Xe=!!T.alphaHash,Fe=!!T.extensions;let we=ir;T.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(we=a.toneMapping);const Qe={shaderID:j,shaderType:T.type,shaderName:T.name,vertexShader:Se,fragmentShader:_e,defines:T.defines,customVertexShaderID:ee,customFragmentShaderID:xe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:$e,batchingColor:$e&&B._colorsTexture!==null,instancing:Be,instancingColor:Be&&B.instanceColor!==null,instancingMorph:Be&&B.morphTexture!==null,outputColorSpace:me===null?a.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:wt,matcap:ut,envMap:Tt,envMapMode:Tt&&W.mapping,envMapCubeUVHeight:se,aoMap:Ct,lightMap:mt,bumpMap:Yt,normalMap:Vt,displacementMap:on,emissiveMap:te,normalMapObjectSpace:Vt&&T.normalMapType===wy,normalMapTangentSpace:Vt&&T.normalMapType===Ic,packedNormalMap:Vt&&T.normalMapType===Ic&&sE(T.normalMap.format),metalnessMap:Gt,roughnessMap:_t,anisotropy:Ft,anisotropyMap:ye,clearcoat:Te,clearcoatMap:Me,clearcoatNormalMap:Re,clearcoatRoughnessMap:ze,dispersion:Wt,iridescence:k,iridescenceMap:de,iridescenceThicknessMap:ve,sheen:R,sheenColorMap:Ge,sheenRoughnessMap:Ue,specularMap:ke,specularColorMap:Pe,specularIntensityMap:ft,transmission:re,transmissionMap:st,thicknessMap:yt,gradientMap:q,opaque:T.transparent===!1&&T.blending===Aa&&T.alphaToCoverage===!1,alphaMap:Ne,alphaTest:ge,alphaHash:Xe,combine:T.combine,mapUv:wt&&v(T.map.channel),aoMapUv:Ct&&v(T.aoMap.channel),lightMapUv:mt&&v(T.lightMap.channel),bumpMapUv:Yt&&v(T.bumpMap.channel),normalMapUv:Vt&&v(T.normalMap.channel),displacementMapUv:on&&v(T.displacementMap.channel),emissiveMapUv:te&&v(T.emissiveMap.channel),metalnessMapUv:Gt&&v(T.metalnessMap.channel),roughnessMapUv:_t&&v(T.roughnessMap.channel),anisotropyMapUv:ye&&v(T.anisotropyMap.channel),clearcoatMapUv:Me&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Re&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:ve&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&v(T.sheenRoughnessMap.channel),specularMapUv:ke&&v(T.specularMap.channel),specularColorMapUv:Pe&&v(T.specularColorMap.channel),specularIntensityMapUv:ft&&v(T.specularIntensityMap.channel),transmissionMapUv:st&&v(T.transmissionMap.channel),thicknessMapUv:yt&&v(T.thicknessMap.channel),alphaMapUv:Ne&&v(T.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Vt||Ft),vertexNormals:!!V.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!V.attributes.uv&&(wt||Ne),fog:!!J,useFog:T.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||V.attributes.normal===void 0&&Vt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Ie,skinning:B.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:pe,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&z.length>0,shadowMapType:a.shadowMap.type,toneMapping:we,decodeVideoTexture:wt&&T.map.isVideoTexture===!0&&Pt.getTransfer(T.map.colorSpace)===Ht,decodeVideoTextureEmissive:te&&T.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(T.emissiveMap.colorSpace)===Ht,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Hi,flipSided:T.side===ni,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Fe&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&T.extensions.multiDraw===!0||$e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Qe.vertexUv1s=h.has(1),Qe.vertexUv2s=h.has(2),Qe.vertexUv3s=h.has(3),h.clear(),Qe}function _(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const z in T.defines)U.push(z),U.push(T.defines[z]);return T.isRawShaderMaterial===!1&&(S(U,T),b(U,T),U.push(a.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function S(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function b(T,U){c.disableAll(),U.instancing&&c.enable(0),U.instancingColor&&c.enable(1),U.instancingMorph&&c.enable(2),U.matcap&&c.enable(3),U.envMap&&c.enable(4),U.normalMapObjectSpace&&c.enable(5),U.normalMapTangentSpace&&c.enable(6),U.clearcoat&&c.enable(7),U.iridescence&&c.enable(8),U.alphaTest&&c.enable(9),U.vertexColors&&c.enable(10),U.vertexAlphas&&c.enable(11),U.vertexUv1s&&c.enable(12),U.vertexUv2s&&c.enable(13),U.vertexUv3s&&c.enable(14),U.vertexTangents&&c.enable(15),U.anisotropy&&c.enable(16),U.alphaHash&&c.enable(17),U.batching&&c.enable(18),U.dispersion&&c.enable(19),U.batchingColor&&c.enable(20),U.gradientMap&&c.enable(21),U.packedNormalMap&&c.enable(22),U.vertexNormals&&c.enable(23),T.push(c.mask),c.disableAll(),U.fog&&c.enable(0),U.useFog&&c.enable(1),U.flatShading&&c.enable(2),U.logarithmicDepthBuffer&&c.enable(3),U.reversedDepthBuffer&&c.enable(4),U.skinning&&c.enable(5),U.morphTargets&&c.enable(6),U.morphNormals&&c.enable(7),U.morphColors&&c.enable(8),U.premultipliedAlpha&&c.enable(9),U.shadowMapEnabled&&c.enable(10),U.doubleSided&&c.enable(11),U.flipSided&&c.enable(12),U.useDepthPacking&&c.enable(13),U.dithering&&c.enable(14),U.transmission&&c.enable(15),U.sheen&&c.enable(16),U.opaque&&c.enable(17),U.pointsUvs&&c.enable(18),U.decodeVideoTexture&&c.enable(19),U.decodeVideoTextureEmissive&&c.enable(20),U.alphaToCoverage&&c.enable(21),U.numLightProbeGrids>0&&c.enable(22),T.push(c.mask)}function C(T){const U=y[T.type];let z;if(U){const D=Ji[U];z=Oc.clone(D.uniforms)}else z=T.uniforms;return z}function E(T,U){let z=p.get(U);return z!==void 0?++z.usedTimes:(z=new tE(a,U,T,s),d.push(z),p.set(U,z)),z}function L(T){if(--T.usedTimes===0){const U=d.indexOf(T);d[U]=d[d.length-1],d.pop(),p.delete(T.cacheKey),T.destroy()}}function A(T){u.remove(T)}function I(){u.dispose()}return{getParameters:w,getProgramCacheKey:_,getUniforms:C,acquireProgram:E,releaseProgram:L,releaseShaderCache:A,programs:d,dispose:I}}function oE(){let a=new WeakMap;function e(c){return a.has(c)}function t(c){let u=a.get(c);return u===void 0&&(u={},a.set(c,u)),u}function i(c){a.delete(c)}function s(c,u,h){a.get(c)[u]=h}function o(){a=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:o}}function lE(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function kg(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Og(){const a=[];let e=0;const t=[],i=[],s=[];function o(){e=0,t.length=0,i.length=0,s.length=0}function c(m){let y=0;return m.isInstancedMesh&&(y+=2),m.isSkinnedMesh&&(y+=1),y}function u(m,y,v,w,_,S){let b=a[e];return b===void 0?(b={id:m.id,object:m,geometry:y,material:v,materialVariant:c(m),groupOrder:w,renderOrder:m.renderOrder,z:_,group:S},a[e]=b):(b.id=m.id,b.object=m,b.geometry=y,b.material=v,b.materialVariant=c(m),b.groupOrder=w,b.renderOrder=m.renderOrder,b.z=_,b.group=S),e++,b}function h(m,y,v,w,_,S){const b=u(m,y,v,w,_,S);v.transmission>0?i.push(b):v.transparent===!0?s.push(b):t.push(b)}function d(m,y,v,w,_,S){const b=u(m,y,v,w,_,S);v.transmission>0?i.unshift(b):v.transparent===!0?s.unshift(b):t.unshift(b)}function p(m,y){t.length>1&&t.sort(m||lE),i.length>1&&i.sort(y||kg),s.length>1&&s.sort(y||kg)}function g(){for(let m=e,y=a.length;m<y;m++){const v=a[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:s,init:o,push:h,unshift:d,finish:g,sort:p}}function cE(){let a=new WeakMap;function e(i,s){const o=a.get(i);let c;return o===void 0?(c=new Og,a.set(i,[c])):s>=o.length?(c=new Og,o.push(c)):c=o[s],c}function t(){a=new WeakMap}return{get:e,dispose:t}}function uE(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new Ye};break;case"SpotLight":t={position:new Q,direction:new Q,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return a[e.id]=t,t}}}function hE(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let fE=0;function dE(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function pE(a){const e=new uE,t=hE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new Q);const s=new Q,o=new qt,c=new qt;function u(d){let p=0,g=0,m=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let y=0,v=0,w=0,_=0,S=0,b=0,C=0,E=0,L=0,A=0,I=0;d.sort(dE);for(let U=0,z=d.length;U<z;U++){const D=d[U],B=D.color,$=D.intensity,J=D.distance;let V=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ks?V=D.shadow.map.texture:V=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)p+=B.r*$,g+=B.g*$,m+=B.b*$;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(D.sh.coefficients[Z],$);I++}else if(D.isDirectionalLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const K=D.shadow,W=t.get(D);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,i.directionalShadow[y]=W,i.directionalShadowMap[y]=V,i.directionalShadowMatrix[y]=D.shadow.matrix,b++}i.directional[y]=Z,y++}else if(D.isSpotLight){const Z=e.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(B).multiplyScalar($),Z.distance=J,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,i.spot[w]=Z;const K=D.shadow;if(D.map&&(i.spotLightMap[L]=D.map,L++,K.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[w]=K.matrix,D.castShadow){const W=t.get(D);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,i.spotShadow[w]=W,i.spotShadowMap[w]=V,E++}w++}else if(D.isRectAreaLight){const Z=e.get(D);Z.color.copy(B).multiplyScalar($),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),i.rectArea[_]=Z,_++}else if(D.isPointLight){const Z=e.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const K=D.shadow,W=t.get(D);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,i.pointShadow[v]=W,i.pointShadowMap[v]=V,i.pointShadowMatrix[v]=D.shadow.matrix,C++}i.point[v]=Z,v++}else if(D.isHemisphereLight){const Z=e.get(D);Z.skyColor.copy(D.color).multiplyScalar($),Z.groundColor.copy(D.groundColor).multiplyScalar($),i.hemi[S]=Z,S++}}_>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=We.LTC_FLOAT_1,i.rectAreaLTC2=We.LTC_FLOAT_2):(i.rectAreaLTC1=We.LTC_HALF_1,i.rectAreaLTC2=We.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=g,i.ambient[2]=m;const T=i.hash;(T.directionalLength!==y||T.pointLength!==v||T.spotLength!==w||T.rectAreaLength!==_||T.hemiLength!==S||T.numDirectionalShadows!==b||T.numPointShadows!==C||T.numSpotShadows!==E||T.numSpotMaps!==L||T.numLightProbes!==I)&&(i.directional.length=y,i.spot.length=w,i.rectArea.length=_,i.point.length=v,i.hemi.length=S,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=E+L-A,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=I,T.directionalLength=y,T.pointLength=v,T.spotLength=w,T.rectAreaLength=_,T.hemiLength=S,T.numDirectionalShadows=b,T.numPointShadows=C,T.numSpotShadows=E,T.numSpotMaps=L,T.numLightProbes=I,i.version=fE++)}function h(d,p){let g=0,m=0,y=0,v=0,w=0;const _=p.matrixWorldInverse;for(let S=0,b=d.length;S<b;S++){const C=d[S];if(C.isDirectionalLight){const E=i.directional[g];E.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(_),g++}else if(C.isSpotLight){const E=i.spot[y];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(_),E.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(_),y++}else if(C.isRectAreaLight){const E=i.rectArea[v];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(_),c.identity(),o.copy(C.matrixWorld),o.premultiply(_),c.extractRotation(o),E.halfWidth.set(C.width*.5,0,0),E.halfHeight.set(0,C.height*.5,0),E.halfWidth.applyMatrix4(c),E.halfHeight.applyMatrix4(c),v++}else if(C.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(_),m++}else if(C.isHemisphereLight){const E=i.hemi[w];E.direction.setFromMatrixPosition(C.matrixWorld),E.direction.transformDirection(_),w++}}}return{setup:u,setupView:h,state:i}}function zg(a){const e=new pE(a),t=[],i=[],s=[];function o(m){g.camera=m,t.length=0,i.length=0,s.length=0}function c(m){t.push(m)}function u(m){i.push(m)}function h(m){s.push(m)}function d(){e.setup(t)}function p(m){e.setupView(t,m)}const g={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:g,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:u,pushLightProbeGrid:h}}function mE(a){let e=new WeakMap;function t(s,o=0){const c=e.get(s);let u;return c===void 0?(u=new zg(a),e.set(s,[u])):o>=c.length?(u=new zg(a),c.push(u)):u=c[o],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const gE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xE=`uniform sampler2D shadow_pass;
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
}`,vE=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],_E=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],Bg=new qt,Po=new Q,df=new Q;function yE(a,e,t){let i=new Od;const s=new ct,o=new ct,c=new an,u=new TS,h=new CS,d={},p=t.maxTextureSize,g={[cs]:ni,[ni]:cs,[Hi]:Hi},m=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:gE,fragmentShader:xE}),y=m.clone();y.defines.HORIZONTAL_PASS=1;const v=new hn;v.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new fn(v,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc;let S=this.type;this.render=function(A,I,T){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||A.length===0)return;this.type===ey&&(ht("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=wc);const U=a.getRenderTarget(),z=a.getActiveCubeFace(),D=a.getActiveMipmapLevel(),B=a.state;B.setBlending(nr),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const $=S!==this.type;$&&I.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(V=>V.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,V=A.length;J<V;J++){const Z=A[J],K=Z.shadow;if(K===void 0){ht("WebGLShadowMap:",Z,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const W=K.getFrameExtents();s.multiply(W),o.copy(K.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(o.x=Math.floor(p/W.x),s.x=o.x*W.x,K.mapSize.x=o.x),s.y>p&&(o.y=Math.floor(p/W.y),s.y=o.y*W.y,K.mapSize.y=o.y));const se=a.state.buffers.depth.getReversed();if(K.camera._reversedDepth=se,K.map===null||$===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===No){if(Z.isPointLight){ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new ii(s.x,s.y,{format:ks,type:vi,minFilter:xn,magFilter:xn,generateMipmaps:!1}),K.map.texture.name=Z.name+".shadowMap",K.map.depthTexture=new Ua(s.x,s.y,Gi),K.map.depthTexture.name=Z.name+".shadowMapDepth",K.map.depthTexture.format=br,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Nn,K.map.depthTexture.magFilter=Nn}else Z.isPointLight?(K.map=new Vx(s.x),K.map.depthTexture=new yS(s.x,rr)):(K.map=new ii(s.x,s.y),K.map.depthTexture=new Ua(s.x,s.y,rr)),K.map.depthTexture.name=Z.name+".shadowMap",K.map.depthTexture.format=br,this.type===wc?(K.map.depthTexture.compareFunction=se?Nd:Id,K.map.depthTexture.minFilter=xn,K.map.depthTexture.magFilter=xn):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Nn,K.map.depthTexture.magFilter=Nn);K.camera.updateProjectionMatrix()}const j=K.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<j;O++){if(K.map.isWebGLCubeRenderTarget)a.setRenderTarget(K.map,O),a.clear();else{O===0&&(a.setRenderTarget(K.map),a.clear());const G=K.getViewport(O);c.set(o.x*G.x,o.y*G.y,o.x*G.z,o.y*G.w),B.viewport(c)}if(Z.isPointLight){const G=K.camera,pe=K.matrix,Se=Z.distance||G.far;Se!==G.far&&(G.far=Se,G.updateProjectionMatrix()),Po.setFromMatrixPosition(Z.matrixWorld),G.position.copy(Po),df.copy(G.position),df.add(vE[O]),G.up.copy(_E[O]),G.lookAt(df),G.updateMatrixWorld(),pe.makeTranslation(-Po.x,-Po.y,-Po.z),Bg.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Bg,G.coordinateSystem,G.reversedDepth)}else K.updateMatrices(Z);i=K.getFrustum(),E(I,T,K.camera,Z,this.type)}K.isPointLightShadow!==!0&&this.type===No&&b(K,T),K.needsUpdate=!1}S=this.type,_.needsUpdate=!1,a.setRenderTarget(U,z,D)};function b(A,I){const T=e.update(w);m.defines.VSM_SAMPLES!==A.blurSamples&&(m.defines.VSM_SAMPLES=A.blurSamples,y.defines.VSM_SAMPLES=A.blurSamples,m.needsUpdate=!0,y.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ii(s.x,s.y,{format:ks,type:vi})),m.uniforms.shadow_pass.value=A.map.depthTexture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,a.setRenderTarget(A.mapPass),a.clear(),a.renderBufferDirect(I,null,T,m,w,null),y.uniforms.shadow_pass.value=A.mapPass.texture,y.uniforms.resolution.value=A.mapSize,y.uniforms.radius.value=A.radius,a.setRenderTarget(A.map),a.clear(),a.renderBufferDirect(I,null,T,y,w,null)}function C(A,I,T,U){let z=null;const D=T.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)z=D;else if(z=T.isPointLight===!0?h:u,a.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const B=z.uuid,$=I.uuid;let J=d[B];J===void 0&&(J={},d[B]=J);let V=J[$];V===void 0&&(V=z.clone(),J[$]=V,I.addEventListener("dispose",L)),z=V}if(z.visible=I.visible,z.wireframe=I.wireframe,U===No?z.side=I.shadowSide!==null?I.shadowSide:I.side:z.side=I.shadowSide!==null?I.shadowSide:g[I.side],z.alphaMap=I.alphaMap,z.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,z.map=I.map,z.clipShadows=I.clipShadows,z.clippingPlanes=I.clippingPlanes,z.clipIntersection=I.clipIntersection,z.displacementMap=I.displacementMap,z.displacementScale=I.displacementScale,z.displacementBias=I.displacementBias,z.wireframeLinewidth=I.wireframeLinewidth,z.linewidth=I.linewidth,T.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const B=a.properties.get(z);B.light=T}return z}function E(A,I,T,U,z){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&z===No)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,A.matrixWorld);const $=e.update(A),J=A.material;if(Array.isArray(J)){const V=$.groups;for(let Z=0,K=V.length;Z<K;Z++){const W=V[Z],se=J[W.materialIndex];if(se&&se.visible){const j=C(A,se,U,z);A.onBeforeShadow(a,A,I,T,$,j,W),a.renderBufferDirect(T,null,$,j,A,W),A.onAfterShadow(a,A,I,T,$,j,W)}}}else if(J.visible){const V=C(A,J,U,z);A.onBeforeShadow(a,A,I,T,$,V,null),a.renderBufferDirect(T,null,$,V,A,null),A.onAfterShadow(a,A,I,T,$,V,null)}}const B=A.children;for(let $=0,J=B.length;$<J;$++)E(B[$],I,T,U,z)}function L(A){A.target.removeEventListener("dispose",L);for(const T in d){const U=d[T],z=A.target.uuid;z in U&&(U[z].dispose(),delete U[z])}}}function SE(a,e){function t(){let q=!1;const Ne=new an;let ge=null;const Xe=new an(0,0,0,0);return{setMask:function(Fe){ge!==Fe&&!q&&(a.colorMask(Fe,Fe,Fe,Fe),ge=Fe)},setLocked:function(Fe){q=Fe},setClear:function(Fe,we,Qe,dt,Ot){Ot===!0&&(Fe*=dt,we*=dt,Qe*=dt),Ne.set(Fe,we,Qe,dt),Xe.equals(Ne)===!1&&(a.clearColor(Fe,we,Qe,dt),Xe.copy(Ne))},reset:function(){q=!1,ge=null,Xe.set(-1,0,0,0)}}}function i(){let q=!1,Ne=!1,ge=null,Xe=null,Fe=null;return{setReversed:function(we){if(Ne!==we){const Qe=e.get("EXT_clip_control");we?Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.ZERO_TO_ONE_EXT):Qe.clipControlEXT(Qe.LOWER_LEFT_EXT,Qe.NEGATIVE_ONE_TO_ONE_EXT),Ne=we;const dt=Fe;Fe=null,this.setClear(dt)}},getReversed:function(){return Ne},setTest:function(we){we?me(a.DEPTH_TEST):Ie(a.DEPTH_TEST)},setMask:function(we){ge!==we&&!q&&(a.depthMask(we),ge=we)},setFunc:function(we){if(Ne&&(we=Ny[we]),Xe!==we){switch(we){case bf:a.depthFunc(a.NEVER);break;case Ef:a.depthFunc(a.ALWAYS);break;case Tf:a.depthFunc(a.LESS);break;case Ia:a.depthFunc(a.LEQUAL);break;case Cf:a.depthFunc(a.EQUAL);break;case Af:a.depthFunc(a.GEQUAL);break;case Rf:a.depthFunc(a.GREATER);break;case Pf:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Xe=we}},setLocked:function(we){q=we},setClear:function(we){Fe!==we&&(Fe=we,Ne&&(we=1-we),a.clearDepth(we))},reset:function(){q=!1,ge=null,Xe=null,Fe=null,Ne=!1}}}function s(){let q=!1,Ne=null,ge=null,Xe=null,Fe=null,we=null,Qe=null,dt=null,Ot=null;return{setTest:function(Rt){q||(Rt?me(a.STENCIL_TEST):Ie(a.STENCIL_TEST))},setMask:function(Rt){Ne!==Rt&&!q&&(a.stencilMask(Rt),Ne=Rt)},setFunc:function(Rt,bn,jn){(ge!==Rt||Xe!==bn||Fe!==jn)&&(a.stencilFunc(Rt,bn,jn),ge=Rt,Xe=bn,Fe=jn)},setOp:function(Rt,bn,jn){(we!==Rt||Qe!==bn||dt!==jn)&&(a.stencilOp(Rt,bn,jn),we=Rt,Qe=bn,dt=jn)},setLocked:function(Rt){q=Rt},setClear:function(Rt){Ot!==Rt&&(a.clearStencil(Rt),Ot=Rt)},reset:function(){q=!1,Ne=null,ge=null,Xe=null,Fe=null,we=null,Qe=null,dt=null,Ot=null}}}const o=new t,c=new i,u=new s,h=new WeakMap,d=new WeakMap;let p={},g={},m={},y=new WeakMap,v=[],w=null,_=!1,S=null,b=null,C=null,E=null,L=null,A=null,I=null,T=new Ye(0,0,0),U=0,z=!1,D=null,B=null,$=null,J=null,V=null;const Z=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,W=0;const se=a.getParameter(a.VERSION);se.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(se)[1]),K=W>=1):se.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),K=W>=2);let j=null,O={};const G=a.getParameter(a.SCISSOR_BOX),pe=a.getParameter(a.VIEWPORT),Se=new an().fromArray(G),_e=new an().fromArray(pe);function ee(q,Ne,ge,Xe){const Fe=new Uint8Array(4),we=a.createTexture();a.bindTexture(q,we),a.texParameteri(q,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(q,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let Qe=0;Qe<ge;Qe++)q===a.TEXTURE_3D||q===a.TEXTURE_2D_ARRAY?a.texImage3D(Ne,0,a.RGBA,1,1,Xe,0,a.RGBA,a.UNSIGNED_BYTE,Fe):a.texImage2D(Ne+Qe,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Fe);return we}const xe={};xe[a.TEXTURE_2D]=ee(a.TEXTURE_2D,a.TEXTURE_2D,1),xe[a.TEXTURE_CUBE_MAP]=ee(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[a.TEXTURE_2D_ARRAY]=ee(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),xe[a.TEXTURE_3D]=ee(a.TEXTURE_3D,a.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),me(a.DEPTH_TEST),c.setFunc(Ia),Yt(!1),Vt(L0),me(a.CULL_FACE),Ct(nr);function me(q){p[q]!==!0&&(a.enable(q),p[q]=!0)}function Ie(q){p[q]!==!1&&(a.disable(q),p[q]=!1)}function Be(q,Ne){return m[q]!==Ne?(a.bindFramebuffer(q,Ne),m[q]=Ne,q===a.DRAW_FRAMEBUFFER&&(m[a.FRAMEBUFFER]=Ne),q===a.FRAMEBUFFER&&(m[a.DRAW_FRAMEBUFFER]=Ne),!0):!1}function $e(q,Ne){let ge=v,Xe=!1;if(q){ge=y.get(Ne),ge===void 0&&(ge=[],y.set(Ne,ge));const Fe=q.textures;if(ge.length!==Fe.length||ge[0]!==a.COLOR_ATTACHMENT0){for(let we=0,Qe=Fe.length;we<Qe;we++)ge[we]=a.COLOR_ATTACHMENT0+we;ge.length=Fe.length,Xe=!0}}else ge[0]!==a.BACK&&(ge[0]=a.BACK,Xe=!0);Xe&&a.drawBuffers(ge)}function wt(q){return w!==q?(a.useProgram(q),w=q,!0):!1}const ut={[Is]:a.FUNC_ADD,[ny]:a.FUNC_SUBTRACT,[iy]:a.FUNC_REVERSE_SUBTRACT};ut[ry]=a.MIN,ut[sy]=a.MAX;const Tt={[ay]:a.ZERO,[oy]:a.ONE,[ly]:a.SRC_COLOR,[Mf]:a.SRC_ALPHA,[py]:a.SRC_ALPHA_SATURATE,[fy]:a.DST_COLOR,[uy]:a.DST_ALPHA,[cy]:a.ONE_MINUS_SRC_COLOR,[wf]:a.ONE_MINUS_SRC_ALPHA,[dy]:a.ONE_MINUS_DST_COLOR,[hy]:a.ONE_MINUS_DST_ALPHA,[my]:a.CONSTANT_COLOR,[gy]:a.ONE_MINUS_CONSTANT_COLOR,[xy]:a.CONSTANT_ALPHA,[vy]:a.ONE_MINUS_CONSTANT_ALPHA};function Ct(q,Ne,ge,Xe,Fe,we,Qe,dt,Ot,Rt){if(q===nr){_===!0&&(Ie(a.BLEND),_=!1);return}if(_===!1&&(me(a.BLEND),_=!0),q!==ty){if(q!==S||Rt!==z){if((b!==Is||L!==Is)&&(a.blendEquation(a.FUNC_ADD),b=Is,L=Is),Rt)switch(q){case Aa:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case La:a.blendFunc(a.ONE,a.ONE);break;case I0:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case N0:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Nt("WebGLState: Invalid blending: ",q);break}else switch(q){case Aa:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case La:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case I0:Nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case N0:Nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Nt("WebGLState: Invalid blending: ",q);break}C=null,E=null,A=null,I=null,T.set(0,0,0),U=0,S=q,z=Rt}return}Fe=Fe||Ne,we=we||ge,Qe=Qe||Xe,(Ne!==b||Fe!==L)&&(a.blendEquationSeparate(ut[Ne],ut[Fe]),b=Ne,L=Fe),(ge!==C||Xe!==E||we!==A||Qe!==I)&&(a.blendFuncSeparate(Tt[ge],Tt[Xe],Tt[we],Tt[Qe]),C=ge,E=Xe,A=we,I=Qe),(dt.equals(T)===!1||Ot!==U)&&(a.blendColor(dt.r,dt.g,dt.b,Ot),T.copy(dt),U=Ot),S=q,z=!1}function mt(q,Ne){q.side===Hi?Ie(a.CULL_FACE):me(a.CULL_FACE);let ge=q.side===ni;Ne&&(ge=!ge),Yt(ge),q.blending===Aa&&q.transparent===!1?Ct(nr):Ct(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),c.setFunc(q.depthFunc),c.setTest(q.depthTest),c.setMask(q.depthWrite),o.setMask(q.colorWrite);const Xe=q.stencilWrite;u.setTest(Xe),Xe&&(u.setMask(q.stencilWriteMask),u.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),u.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),te(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?me(a.SAMPLE_ALPHA_TO_COVERAGE):Ie(a.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(q){D!==q&&(q?a.frontFace(a.CW):a.frontFace(a.CCW),D=q)}function Vt(q){q!==Q1?(me(a.CULL_FACE),q!==B&&(q===L0?a.cullFace(a.BACK):q===J1?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Ie(a.CULL_FACE),B=q}function on(q){q!==$&&(K&&a.lineWidth(q),$=q)}function te(q,Ne,ge){q?(me(a.POLYGON_OFFSET_FILL),(J!==Ne||V!==ge)&&(J=Ne,V=ge,c.getReversed()&&(Ne=-Ne),a.polygonOffset(Ne,ge))):Ie(a.POLYGON_OFFSET_FILL)}function Gt(q){q?me(a.SCISSOR_TEST):Ie(a.SCISSOR_TEST)}function _t(q){q===void 0&&(q=a.TEXTURE0+Z-1),j!==q&&(a.activeTexture(q),j=q)}function Ft(q,Ne,ge){ge===void 0&&(j===null?ge=a.TEXTURE0+Z-1:ge=j);let Xe=O[ge];Xe===void 0&&(Xe={type:void 0,texture:void 0},O[ge]=Xe),(Xe.type!==q||Xe.texture!==Ne)&&(j!==ge&&(a.activeTexture(ge),j=ge),a.bindTexture(q,Ne||xe[q]),Xe.type=q,Xe.texture=Ne)}function Te(){const q=O[j];q!==void 0&&q.type!==void 0&&(a.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function Wt(){try{a.compressedTexImage2D(...arguments)}catch(q){Nt("WebGLState:",q)}}function k(){try{a.compressedTexImage3D(...arguments)}catch(q){Nt("WebGLState:",q)}}function R(){try{a.texSubImage2D(...arguments)}catch(q){Nt("WebGLState:",q)}}function re(){try{a.texSubImage3D(...arguments)}catch(q){Nt("WebGLState:",q)}}function ye(){try{a.compressedTexSubImage2D(...arguments)}catch(q){Nt("WebGLState:",q)}}function Me(){try{a.compressedTexSubImage3D(...arguments)}catch(q){Nt("WebGLState:",q)}}function Re(){try{a.texStorage2D(...arguments)}catch(q){Nt("WebGLState:",q)}}function ze(){try{a.texStorage3D(...arguments)}catch(q){Nt("WebGLState:",q)}}function de(){try{a.texImage2D(...arguments)}catch(q){Nt("WebGLState:",q)}}function ve(){try{a.texImage3D(...arguments)}catch(q){Nt("WebGLState:",q)}}function Ge(q){return g[q]!==void 0?g[q]:a.getParameter(q)}function Ue(q,Ne){g[q]!==Ne&&(a.pixelStorei(q,Ne),g[q]=Ne)}function ke(q){Se.equals(q)===!1&&(a.scissor(q.x,q.y,q.z,q.w),Se.copy(q))}function Pe(q){_e.equals(q)===!1&&(a.viewport(q.x,q.y,q.z,q.w),_e.copy(q))}function ft(q,Ne){let ge=d.get(Ne);ge===void 0&&(ge=new WeakMap,d.set(Ne,ge));let Xe=ge.get(q);Xe===void 0&&(Xe=a.getUniformBlockIndex(Ne,q.name),ge.set(q,Xe))}function st(q,Ne){const Xe=d.get(Ne).get(q);h.get(Ne)!==Xe&&(a.uniformBlockBinding(Ne,Xe,q.__bindingPointIndex),h.set(Ne,Xe))}function yt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),c.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),p={},g={},j=null,O={},m={},y=new WeakMap,v=[],w=null,_=!1,S=null,b=null,C=null,E=null,L=null,A=null,I=null,T=new Ye(0,0,0),U=0,z=!1,D=null,B=null,$=null,J=null,V=null,Se.set(0,0,a.canvas.width,a.canvas.height),_e.set(0,0,a.canvas.width,a.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:me,disable:Ie,bindFramebuffer:Be,drawBuffers:$e,useProgram:wt,setBlending:Ct,setMaterial:mt,setFlipSided:Yt,setCullFace:Vt,setLineWidth:on,setPolygonOffset:te,setScissorTest:Gt,activeTexture:_t,bindTexture:Ft,unbindTexture:Te,compressedTexImage2D:Wt,compressedTexImage3D:k,texImage2D:de,texImage3D:ve,pixelStorei:Ue,getParameter:Ge,updateUBOMapping:ft,uniformBlockBinding:st,texStorage2D:Re,texStorage3D:ze,texSubImage2D:R,texSubImage3D:re,compressedTexSubImage2D:ye,compressedTexSubImage3D:Me,scissor:ke,viewport:Pe,reset:yt}}function ME(a,e,t,i,s,o,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new ct,p=new WeakMap,g=new Set;let m;const y=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(k,R){return v?new OffscreenCanvas(k,R):Fc("canvas")}function _(k,R,re){let ye=1;const Me=Wt(k);if((Me.width>re||Me.height>re)&&(ye=re/Math.max(Me.width,Me.height)),ye<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const Re=Math.floor(ye*Me.width),ze=Math.floor(ye*Me.height);m===void 0&&(m=w(Re,ze));const de=R?w(Re,ze):m;return de.width=Re,de.height=ze,de.getContext("2d").drawImage(k,0,0,Re,ze),ht("WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+Re+"x"+ze+")."),de}else return"data"in k&&ht("WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),k;return k}function S(k){return k.generateMipmaps}function b(k){a.generateMipmap(k)}function C(k){return k.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?a.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function E(k,R,re,ye,Me,Re=!1){if(k!==null){if(a[k]!==void 0)return a[k];ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let ze;ye&&(ze=e.get("EXT_texture_norm16"),ze||ht("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=R;if(R===a.RED&&(re===a.FLOAT&&(de=a.R32F),re===a.HALF_FLOAT&&(de=a.R16F),re===a.UNSIGNED_BYTE&&(de=a.R8),re===a.UNSIGNED_SHORT&&ze&&(de=ze.R16_EXT),re===a.SHORT&&ze&&(de=ze.R16_SNORM_EXT)),R===a.RED_INTEGER&&(re===a.UNSIGNED_BYTE&&(de=a.R8UI),re===a.UNSIGNED_SHORT&&(de=a.R16UI),re===a.UNSIGNED_INT&&(de=a.R32UI),re===a.BYTE&&(de=a.R8I),re===a.SHORT&&(de=a.R16I),re===a.INT&&(de=a.R32I)),R===a.RG&&(re===a.FLOAT&&(de=a.RG32F),re===a.HALF_FLOAT&&(de=a.RG16F),re===a.UNSIGNED_BYTE&&(de=a.RG8),re===a.UNSIGNED_SHORT&&ze&&(de=ze.RG16_EXT),re===a.SHORT&&ze&&(de=ze.RG16_SNORM_EXT)),R===a.RG_INTEGER&&(re===a.UNSIGNED_BYTE&&(de=a.RG8UI),re===a.UNSIGNED_SHORT&&(de=a.RG16UI),re===a.UNSIGNED_INT&&(de=a.RG32UI),re===a.BYTE&&(de=a.RG8I),re===a.SHORT&&(de=a.RG16I),re===a.INT&&(de=a.RG32I)),R===a.RGB_INTEGER&&(re===a.UNSIGNED_BYTE&&(de=a.RGB8UI),re===a.UNSIGNED_SHORT&&(de=a.RGB16UI),re===a.UNSIGNED_INT&&(de=a.RGB32UI),re===a.BYTE&&(de=a.RGB8I),re===a.SHORT&&(de=a.RGB16I),re===a.INT&&(de=a.RGB32I)),R===a.RGBA_INTEGER&&(re===a.UNSIGNED_BYTE&&(de=a.RGBA8UI),re===a.UNSIGNED_SHORT&&(de=a.RGBA16UI),re===a.UNSIGNED_INT&&(de=a.RGBA32UI),re===a.BYTE&&(de=a.RGBA8I),re===a.SHORT&&(de=a.RGBA16I),re===a.INT&&(de=a.RGBA32I)),R===a.RGB&&(re===a.UNSIGNED_SHORT&&ze&&(de=ze.RGB16_EXT),re===a.SHORT&&ze&&(de=ze.RGB16_SNORM_EXT),re===a.UNSIGNED_INT_5_9_9_9_REV&&(de=a.RGB9_E5),re===a.UNSIGNED_INT_10F_11F_11F_REV&&(de=a.R11F_G11F_B10F)),R===a.RGBA){const ve=Re?Uc:Pt.getTransfer(Me);re===a.FLOAT&&(de=a.RGBA32F),re===a.HALF_FLOAT&&(de=a.RGBA16F),re===a.UNSIGNED_BYTE&&(de=ve===Ht?a.SRGB8_ALPHA8:a.RGBA8),re===a.UNSIGNED_SHORT&&ze&&(de=ze.RGBA16_EXT),re===a.SHORT&&ze&&(de=ze.RGBA16_SNORM_EXT),re===a.UNSIGNED_SHORT_4_4_4_4&&(de=a.RGBA4),re===a.UNSIGNED_SHORT_5_5_5_1&&(de=a.RGB5_A1)}return(de===a.R16F||de===a.R32F||de===a.RG16F||de===a.RG32F||de===a.RGBA16F||de===a.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function L(k,R){let re;return k?R===null||R===rr||R===Ho?re=a.DEPTH24_STENCIL8:R===Gi?re=a.DEPTH32F_STENCIL8:R===Bo&&(re=a.DEPTH24_STENCIL8,ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===rr||R===Ho?re=a.DEPTH_COMPONENT24:R===Gi?re=a.DEPTH_COMPONENT32F:R===Bo&&(re=a.DEPTH_COMPONENT16),re}function A(k,R){return S(k)===!0||k.isFramebufferTexture&&k.minFilter!==Nn&&k.minFilter!==xn?Math.log2(Math.max(R.width,R.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?R.mipmaps.length:1}function I(k){const R=k.target;R.removeEventListener("dispose",I),U(R),R.isVideoTexture&&p.delete(R),R.isHTMLTexture&&g.delete(R)}function T(k){const R=k.target;R.removeEventListener("dispose",T),D(R)}function U(k){const R=i.get(k);if(R.__webglInit===void 0)return;const re=k.source,ye=y.get(re);if(ye){const Me=ye[R.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&z(k),Object.keys(ye).length===0&&y.delete(re)}i.remove(k)}function z(k){const R=i.get(k);a.deleteTexture(R.__webglTexture);const re=k.source,ye=y.get(re);delete ye[R.__cacheKey],c.memory.textures--}function D(k){const R=i.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),i.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(R.__webglFramebuffer[ye]))for(let Me=0;Me<R.__webglFramebuffer[ye].length;Me++)a.deleteFramebuffer(R.__webglFramebuffer[ye][Me]);else a.deleteFramebuffer(R.__webglFramebuffer[ye]);R.__webglDepthbuffer&&a.deleteRenderbuffer(R.__webglDepthbuffer[ye])}else{if(Array.isArray(R.__webglFramebuffer))for(let ye=0;ye<R.__webglFramebuffer.length;ye++)a.deleteFramebuffer(R.__webglFramebuffer[ye]);else a.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&a.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&a.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ye=0;ye<R.__webglColorRenderbuffer.length;ye++)R.__webglColorRenderbuffer[ye]&&a.deleteRenderbuffer(R.__webglColorRenderbuffer[ye]);R.__webglDepthRenderbuffer&&a.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const re=k.textures;for(let ye=0,Me=re.length;ye<Me;ye++){const Re=i.get(re[ye]);Re.__webglTexture&&(a.deleteTexture(Re.__webglTexture),c.memory.textures--),i.remove(re[ye])}i.remove(k)}let B=0;function $(){B=0}function J(){return B}function V(k){B=k}function Z(){const k=B;return k>=s.maxTextures&&ht("WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+s.maxTextures),B+=1,k}function K(k){const R=[];return R.push(k.wrapS),R.push(k.wrapT),R.push(k.wrapR||0),R.push(k.magFilter),R.push(k.minFilter),R.push(k.anisotropy),R.push(k.internalFormat),R.push(k.format),R.push(k.type),R.push(k.generateMipmaps),R.push(k.premultiplyAlpha),R.push(k.flipY),R.push(k.unpackAlignment),R.push(k.colorSpace),R.join()}function W(k,R){const re=i.get(k);if(k.isVideoTexture&&Ft(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&re.__version!==k.version){const ye=k.image;if(ye===null)ht("WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)ht("WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(re,k,R);return}}else k.isExternalTexture&&(re.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,re.__webglTexture,a.TEXTURE0+R)}function se(k,R){const re=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&re.__version!==k.version){Ie(re,k,R);return}else k.isExternalTexture&&(re.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,re.__webglTexture,a.TEXTURE0+R)}function j(k,R){const re=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&re.__version!==k.version){Ie(re,k,R);return}t.bindTexture(a.TEXTURE_3D,re.__webglTexture,a.TEXTURE0+R)}function O(k,R){const re=i.get(k);if(k.isCubeDepthTexture!==!0&&k.version>0&&re.__version!==k.version){Be(re,k,R);return}t.bindTexture(a.TEXTURE_CUBE_MAP,re.__webglTexture,a.TEXTURE0+R)}const G={[Lf]:a.REPEAT,[Sr]:a.CLAMP_TO_EDGE,[If]:a.MIRRORED_REPEAT},pe={[Nn]:a.NEAREST,[Sy]:a.NEAREST_MIPMAP_NEAREST,[$l]:a.NEAREST_MIPMAP_LINEAR,[xn]:a.LINEAR,[Fh]:a.LINEAR_MIPMAP_NEAREST,[Us]:a.LINEAR_MIPMAP_LINEAR},Se={[by]:a.NEVER,[Ry]:a.ALWAYS,[Ey]:a.LESS,[Id]:a.LEQUAL,[Ty]:a.EQUAL,[Nd]:a.GEQUAL,[Cy]:a.GREATER,[Ay]:a.NOTEQUAL};function _e(k,R){if(R.type===Gi&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===xn||R.magFilter===Fh||R.magFilter===$l||R.magFilter===Us||R.minFilter===xn||R.minFilter===Fh||R.minFilter===$l||R.minFilter===Us)&&ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(k,a.TEXTURE_WRAP_S,G[R.wrapS]),a.texParameteri(k,a.TEXTURE_WRAP_T,G[R.wrapT]),(k===a.TEXTURE_3D||k===a.TEXTURE_2D_ARRAY)&&a.texParameteri(k,a.TEXTURE_WRAP_R,G[R.wrapR]),a.texParameteri(k,a.TEXTURE_MAG_FILTER,pe[R.magFilter]),a.texParameteri(k,a.TEXTURE_MIN_FILTER,pe[R.minFilter]),R.compareFunction&&(a.texParameteri(k,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(k,a.TEXTURE_COMPARE_FUNC,Se[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Nn||R.minFilter!==$l&&R.minFilter!==Us||R.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");a.texParameterf(k,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function ee(k,R){let re=!1;k.__webglInit===void 0&&(k.__webglInit=!0,R.addEventListener("dispose",I));const ye=R.source;let Me=y.get(ye);Me===void 0&&(Me={},y.set(ye,Me));const Re=K(R);if(Re!==k.__cacheKey){Me[Re]===void 0&&(Me[Re]={texture:a.createTexture(),usedTimes:0},c.memory.textures++,re=!0),Me[Re].usedTimes++;const ze=Me[k.__cacheKey];ze!==void 0&&(Me[k.__cacheKey].usedTimes--,ze.usedTimes===0&&z(R)),k.__cacheKey=Re,k.__webglTexture=Me[Re].texture}return re}function xe(k,R,re){return Math.floor(Math.floor(k/re)/R)}function me(k,R,re,ye){const Re=k.updateRanges;if(Re.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,R.width,R.height,re,ye,R.data);else{Re.sort((Ue,ke)=>Ue.start-ke.start);let ze=0;for(let Ue=1;Ue<Re.length;Ue++){const ke=Re[ze],Pe=Re[Ue],ft=ke.start+ke.count,st=xe(Pe.start,R.width,4),yt=xe(ke.start,R.width,4);Pe.start<=ft+1&&st===yt&&xe(Pe.start+Pe.count-1,R.width,4)===st?ke.count=Math.max(ke.count,Pe.start+Pe.count-ke.start):(++ze,Re[ze]=Pe)}Re.length=ze+1;const de=t.getParameter(a.UNPACK_ROW_LENGTH),ve=t.getParameter(a.UNPACK_SKIP_PIXELS),Ge=t.getParameter(a.UNPACK_SKIP_ROWS);t.pixelStorei(a.UNPACK_ROW_LENGTH,R.width);for(let Ue=0,ke=Re.length;Ue<ke;Ue++){const Pe=Re[Ue],ft=Math.floor(Pe.start/4),st=Math.ceil(Pe.count/4),yt=ft%R.width,q=Math.floor(ft/R.width),Ne=st,ge=1;t.pixelStorei(a.UNPACK_SKIP_PIXELS,yt),t.pixelStorei(a.UNPACK_SKIP_ROWS,q),t.texSubImage2D(a.TEXTURE_2D,0,yt,q,Ne,ge,re,ye,R.data)}k.clearUpdateRanges(),t.pixelStorei(a.UNPACK_ROW_LENGTH,de),t.pixelStorei(a.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(a.UNPACK_SKIP_ROWS,Ge)}}function Ie(k,R,re){let ye=a.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ye=a.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ye=a.TEXTURE_3D);const Me=ee(k,R),Re=R.source;t.bindTexture(ye,k.__webglTexture,a.TEXTURE0+re);const ze=i.get(Re);if(Re.version!==ze.__version||Me===!0){if(t.activeTexture(a.TEXTURE0+re),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){const ge=Pt.getPrimaries(Pt.workingColorSpace),Xe=R.colorSpace===ss?null:Pt.getPrimaries(R.colorSpace),Fe=R.colorSpace===ss||ge===Xe?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}t.pixelStorei(a.UNPACK_ALIGNMENT,R.unpackAlignment);let ve=_(R.image,!1,s.maxTextureSize);ve=Te(R,ve);const Ge=o.convert(R.format,R.colorSpace),Ue=o.convert(R.type);let ke=E(R.internalFormat,Ge,Ue,R.normalized,R.colorSpace,R.isVideoTexture);_e(ye,R);let Pe;const ft=R.mipmaps,st=R.isVideoTexture!==!0,yt=ze.__version===void 0||Me===!0,q=Re.dataReady,Ne=A(R,ve);if(R.isDepthTexture)ke=L(R.format===Fs,R.type),yt&&(st?t.texStorage2D(a.TEXTURE_2D,1,ke,ve.width,ve.height):t.texImage2D(a.TEXTURE_2D,0,ke,ve.width,ve.height,0,Ge,Ue,null));else if(R.isDataTexture)if(ft.length>0){st&&yt&&t.texStorage2D(a.TEXTURE_2D,Ne,ke,ft[0].width,ft[0].height);for(let ge=0,Xe=ft.length;ge<Xe;ge++)Pe=ft[ge],st?q&&t.texSubImage2D(a.TEXTURE_2D,ge,0,0,Pe.width,Pe.height,Ge,Ue,Pe.data):t.texImage2D(a.TEXTURE_2D,ge,ke,Pe.width,Pe.height,0,Ge,Ue,Pe.data);R.generateMipmaps=!1}else st?(yt&&t.texStorage2D(a.TEXTURE_2D,Ne,ke,ve.width,ve.height),q&&me(R,ve,Ge,Ue)):t.texImage2D(a.TEXTURE_2D,0,ke,ve.width,ve.height,0,Ge,Ue,ve.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){st&&yt&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Ne,ke,ft[0].width,ft[0].height,ve.depth);for(let ge=0,Xe=ft.length;ge<Xe;ge++)if(Pe=ft[ge],R.format!==xi)if(Ge!==null)if(st){if(q)if(R.layerUpdates.size>0){const Fe=xg(Pe.width,Pe.height,R.format,R.type);for(const we of R.layerUpdates){const Qe=Pe.data.subarray(we*Fe/Pe.data.BYTES_PER_ELEMENT,(we+1)*Fe/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ge,0,0,we,Pe.width,Pe.height,1,Ge,Qe)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ge,0,0,0,Pe.width,Pe.height,ve.depth,Ge,Pe.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ge,ke,Pe.width,Pe.height,ve.depth,0,Pe.data,0,0);else ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?q&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,ge,0,0,0,Pe.width,Pe.height,ve.depth,Ge,Ue,Pe.data):t.texImage3D(a.TEXTURE_2D_ARRAY,ge,ke,Pe.width,Pe.height,ve.depth,0,Ge,Ue,Pe.data)}else{st&&yt&&t.texStorage2D(a.TEXTURE_2D,Ne,ke,ft[0].width,ft[0].height);for(let ge=0,Xe=ft.length;ge<Xe;ge++)Pe=ft[ge],R.format!==xi?Ge!==null?st?q&&t.compressedTexSubImage2D(a.TEXTURE_2D,ge,0,0,Pe.width,Pe.height,Ge,Pe.data):t.compressedTexImage2D(a.TEXTURE_2D,ge,ke,Pe.width,Pe.height,0,Pe.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?q&&t.texSubImage2D(a.TEXTURE_2D,ge,0,0,Pe.width,Pe.height,Ge,Ue,Pe.data):t.texImage2D(a.TEXTURE_2D,ge,ke,Pe.width,Pe.height,0,Ge,Ue,Pe.data)}else if(R.isDataArrayTexture)if(st){if(yt&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Ne,ke,ve.width,ve.height,ve.depth),q)if(R.layerUpdates.size>0){const ge=xg(ve.width,ve.height,R.format,R.type);for(const Xe of R.layerUpdates){const Fe=ve.data.subarray(Xe*ge/ve.data.BYTES_PER_ELEMENT,(Xe+1)*ge/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Xe,ve.width,ve.height,1,Ge,Ue,Fe)}R.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ge,Ue,ve.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,ke,ve.width,ve.height,ve.depth,0,Ge,Ue,ve.data);else if(R.isData3DTexture)st?(yt&&t.texStorage3D(a.TEXTURE_3D,Ne,ke,ve.width,ve.height,ve.depth),q&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ge,Ue,ve.data)):t.texImage3D(a.TEXTURE_3D,0,ke,ve.width,ve.height,ve.depth,0,Ge,Ue,ve.data);else if(R.isFramebufferTexture){if(yt)if(st)t.texStorage2D(a.TEXTURE_2D,Ne,ke,ve.width,ve.height);else{let ge=ve.width,Xe=ve.height;for(let Fe=0;Fe<Ne;Fe++)t.texImage2D(a.TEXTURE_2D,Fe,ke,ge,Xe,0,Ge,Ue,null),ge>>=1,Xe>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in a){const ge=a.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),ve.parentNode!==ge){ge.appendChild(ve),g.add(R),ge.onpaint=dt=>{const Ot=dt.changedElements;for(const Rt of g)Ot.includes(Rt.image)&&(Rt.needsUpdate=!0)},ge.requestPaint();return}const Xe=0,Fe=a.RGBA,we=a.RGBA,Qe=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,Xe,Fe,we,Qe,ve),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(ft.length>0){if(st&&yt){const ge=Wt(ft[0]);t.texStorage2D(a.TEXTURE_2D,Ne,ke,ge.width,ge.height)}for(let ge=0,Xe=ft.length;ge<Xe;ge++)Pe=ft[ge],st?q&&t.texSubImage2D(a.TEXTURE_2D,ge,0,0,Ge,Ue,Pe):t.texImage2D(a.TEXTURE_2D,ge,ke,Ge,Ue,Pe);R.generateMipmaps=!1}else if(st){if(yt){const ge=Wt(ve);t.texStorage2D(a.TEXTURE_2D,Ne,ke,ge.width,ge.height)}q&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,Ge,Ue,ve)}else t.texImage2D(a.TEXTURE_2D,0,ke,Ge,Ue,ve);S(R)&&b(ye),ze.__version=Re.version,R.onUpdate&&R.onUpdate(R)}k.__version=R.version}function Be(k,R,re){if(R.image.length!==6)return;const ye=ee(k,R),Me=R.source;t.bindTexture(a.TEXTURE_CUBE_MAP,k.__webglTexture,a.TEXTURE0+re);const Re=i.get(Me);if(Me.version!==Re.__version||ye===!0){t.activeTexture(a.TEXTURE0+re);const ze=Pt.getPrimaries(Pt.workingColorSpace),de=R.colorSpace===ss?null:Pt.getPrimaries(R.colorSpace),ve=R.colorSpace===ss||ze===de?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(a.UNPACK_ALIGNMENT,R.unpackAlignment),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ge=R.isCompressedTexture||R.image[0].isCompressedTexture,Ue=R.image[0]&&R.image[0].isDataTexture,ke=[];for(let we=0;we<6;we++)!Ge&&!Ue?ke[we]=_(R.image[we],!0,s.maxCubemapSize):ke[we]=Ue?R.image[we].image:R.image[we],ke[we]=Te(R,ke[we]);const Pe=ke[0],ft=o.convert(R.format,R.colorSpace),st=o.convert(R.type),yt=E(R.internalFormat,ft,st,R.normalized,R.colorSpace),q=R.isVideoTexture!==!0,Ne=Re.__version===void 0||ye===!0,ge=Me.dataReady;let Xe=A(R,Pe);_e(a.TEXTURE_CUBE_MAP,R);let Fe;if(Ge){q&&Ne&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Xe,yt,Pe.width,Pe.height);for(let we=0;we<6;we++){Fe=ke[we].mipmaps;for(let Qe=0;Qe<Fe.length;Qe++){const dt=Fe[Qe];R.format!==xi?ft!==null?q?ge&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,Qe,0,0,dt.width,dt.height,ft,dt.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,Qe,yt,dt.width,dt.height,0,dt.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?ge&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,Qe,0,0,dt.width,dt.height,ft,st,dt.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,Qe,yt,dt.width,dt.height,0,ft,st,dt.data)}}}else{if(Fe=R.mipmaps,q&&Ne){Fe.length>0&&Xe++;const we=Wt(ke[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,Xe,yt,we.width,we.height)}for(let we=0;we<6;we++)if(Ue){q?ge&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,ke[we].width,ke[we].height,ft,st,ke[we].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,yt,ke[we].width,ke[we].height,0,ft,st,ke[we].data);for(let Qe=0;Qe<Fe.length;Qe++){const Ot=Fe[Qe].image[we].image;q?ge&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,Qe+1,0,0,Ot.width,Ot.height,ft,st,Ot.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,Qe+1,yt,Ot.width,Ot.height,0,ft,st,Ot.data)}}else{q?ge&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,ft,st,ke[we]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,yt,ft,st,ke[we]);for(let Qe=0;Qe<Fe.length;Qe++){const dt=Fe[Qe];q?ge&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,Qe+1,0,0,ft,st,dt.image[we]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,Qe+1,yt,ft,st,dt.image[we])}}}S(R)&&b(a.TEXTURE_CUBE_MAP),Re.__version=Me.version,R.onUpdate&&R.onUpdate(R)}k.__version=R.version}function $e(k,R,re,ye,Me,Re){const ze=o.convert(re.format,re.colorSpace),de=o.convert(re.type),ve=E(re.internalFormat,ze,de,re.normalized,re.colorSpace),Ge=i.get(R),Ue=i.get(re);if(Ue.__renderTarget=R,!Ge.__hasExternalTextures){const ke=Math.max(1,R.width>>Re),Pe=Math.max(1,R.height>>Re);Me===a.TEXTURE_3D||Me===a.TEXTURE_2D_ARRAY?t.texImage3D(Me,Re,ve,ke,Pe,R.depth,0,ze,de,null):t.texImage2D(Me,Re,ve,ke,Pe,0,ze,de,null)}t.bindFramebuffer(a.FRAMEBUFFER,k),_t(R)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ye,Me,Ue.__webglTexture,0,Gt(R)):(Me===a.TEXTURE_2D||Me>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ye,Me,Ue.__webglTexture,Re),t.bindFramebuffer(a.FRAMEBUFFER,null)}function wt(k,R,re){if(a.bindRenderbuffer(a.RENDERBUFFER,k),R.depthBuffer){const ye=R.depthTexture,Me=ye&&ye.isDepthTexture?ye.type:null,Re=L(R.stencilBuffer,Me),ze=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;_t(R)?u.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Gt(R),Re,R.width,R.height):re?a.renderbufferStorageMultisample(a.RENDERBUFFER,Gt(R),Re,R.width,R.height):a.renderbufferStorage(a.RENDERBUFFER,Re,R.width,R.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,ze,a.RENDERBUFFER,k)}else{const ye=R.textures;for(let Me=0;Me<ye.length;Me++){const Re=ye[Me],ze=o.convert(Re.format,Re.colorSpace),de=o.convert(Re.type),ve=E(Re.internalFormat,ze,de,Re.normalized,Re.colorSpace);_t(R)?u.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Gt(R),ve,R.width,R.height):re?a.renderbufferStorageMultisample(a.RENDERBUFFER,Gt(R),ve,R.width,R.height):a.renderbufferStorage(a.RENDERBUFFER,ve,R.width,R.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ut(k,R,re){const ye=R.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,k),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Me=i.get(R.depthTexture);if(Me.__renderTarget=R,(!Me.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ye){if(Me.__webglInit===void 0&&(Me.__webglInit=!0,R.depthTexture.addEventListener("dispose",I)),Me.__webglTexture===void 0){Me.__webglTexture=a.createTexture(),t.bindTexture(a.TEXTURE_CUBE_MAP,Me.__webglTexture),_e(a.TEXTURE_CUBE_MAP,R.depthTexture);const Ge=o.convert(R.depthTexture.format),Ue=o.convert(R.depthTexture.type);let ke;R.depthTexture.format===br?ke=a.DEPTH_COMPONENT24:R.depthTexture.format===Fs&&(ke=a.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,ke,R.width,R.height,0,Ge,Ue,null)}}else W(R.depthTexture,0);const Re=Me.__webglTexture,ze=Gt(R),de=ye?a.TEXTURE_CUBE_MAP_POSITIVE_X+re:a.TEXTURE_2D,ve=R.depthTexture.format===Fs?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(R.depthTexture.format===br)_t(R)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ve,de,Re,0,ze):a.framebufferTexture2D(a.FRAMEBUFFER,ve,de,Re,0);else if(R.depthTexture.format===Fs)_t(R)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ve,de,Re,0,ze):a.framebufferTexture2D(a.FRAMEBUFFER,ve,de,Re,0);else throw new Error("Unknown depthTexture format")}function Tt(k){const R=i.get(k),re=k.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==k.depthTexture){const ye=k.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ye){const Me=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ye.removeEventListener("dispose",Me)};ye.addEventListener("dispose",Me),R.__depthDisposeCallback=Me}R.__boundDepthTexture=ye}if(k.depthTexture&&!R.__autoAllocateDepthBuffer)if(re)for(let ye=0;ye<6;ye++)ut(R.__webglFramebuffer[ye],k,ye);else{const ye=k.texture.mipmaps;ye&&ye.length>0?ut(R.__webglFramebuffer[0],k,0):ut(R.__webglFramebuffer,k,0)}else if(re){R.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(t.bindFramebuffer(a.FRAMEBUFFER,R.__webglFramebuffer[ye]),R.__webglDepthbuffer[ye]===void 0)R.__webglDepthbuffer[ye]=a.createRenderbuffer(),wt(R.__webglDepthbuffer[ye],k,!1);else{const Me=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Re=R.__webglDepthbuffer[ye];a.bindRenderbuffer(a.RENDERBUFFER,Re),a.framebufferRenderbuffer(a.FRAMEBUFFER,Me,a.RENDERBUFFER,Re)}}else{const ye=k.texture.mipmaps;if(ye&&ye.length>0?t.bindFramebuffer(a.FRAMEBUFFER,R.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=a.createRenderbuffer(),wt(R.__webglDepthbuffer,k,!1);else{const Me=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Re=R.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Re),a.framebufferRenderbuffer(a.FRAMEBUFFER,Me,a.RENDERBUFFER,Re)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function Ct(k,R,re){const ye=i.get(k);R!==void 0&&$e(ye.__webglFramebuffer,k,k.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),re!==void 0&&Tt(k)}function mt(k){const R=k.texture,re=i.get(k),ye=i.get(R);k.addEventListener("dispose",T);const Me=k.textures,Re=k.isWebGLCubeRenderTarget===!0,ze=Me.length>1;if(ze||(ye.__webglTexture===void 0&&(ye.__webglTexture=a.createTexture()),ye.__version=R.version,c.memory.textures++),Re){re.__webglFramebuffer=[];for(let de=0;de<6;de++)if(R.mipmaps&&R.mipmaps.length>0){re.__webglFramebuffer[de]=[];for(let ve=0;ve<R.mipmaps.length;ve++)re.__webglFramebuffer[de][ve]=a.createFramebuffer()}else re.__webglFramebuffer[de]=a.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){re.__webglFramebuffer=[];for(let de=0;de<R.mipmaps.length;de++)re.__webglFramebuffer[de]=a.createFramebuffer()}else re.__webglFramebuffer=a.createFramebuffer();if(ze)for(let de=0,ve=Me.length;de<ve;de++){const Ge=i.get(Me[de]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=a.createTexture(),c.memory.textures++)}if(k.samples>0&&_t(k)===!1){re.__webglMultisampledFramebuffer=a.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let de=0;de<Me.length;de++){const ve=Me[de];re.__webglColorRenderbuffer[de]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,re.__webglColorRenderbuffer[de]);const Ge=o.convert(ve.format,ve.colorSpace),Ue=o.convert(ve.type),ke=E(ve.internalFormat,Ge,Ue,ve.normalized,ve.colorSpace,k.isXRRenderTarget===!0),Pe=Gt(k);a.renderbufferStorageMultisample(a.RENDERBUFFER,Pe,ke,k.width,k.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+de,a.RENDERBUFFER,re.__webglColorRenderbuffer[de])}a.bindRenderbuffer(a.RENDERBUFFER,null),k.depthBuffer&&(re.__webglDepthRenderbuffer=a.createRenderbuffer(),wt(re.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Re){t.bindTexture(a.TEXTURE_CUBE_MAP,ye.__webglTexture),_e(a.TEXTURE_CUBE_MAP,R);for(let de=0;de<6;de++)if(R.mipmaps&&R.mipmaps.length>0)for(let ve=0;ve<R.mipmaps.length;ve++)$e(re.__webglFramebuffer[de][ve],k,R,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+de,ve);else $e(re.__webglFramebuffer[de],k,R,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);S(R)&&b(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ze){for(let de=0,ve=Me.length;de<ve;de++){const Ge=Me[de],Ue=i.get(Ge);let ke=a.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(ke=k.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(ke,Ue.__webglTexture),_e(ke,Ge),$e(re.__webglFramebuffer,k,Ge,a.COLOR_ATTACHMENT0+de,ke,0),S(Ge)&&b(ke)}t.unbindTexture()}else{let de=a.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(de=k.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(de,ye.__webglTexture),_e(de,R),R.mipmaps&&R.mipmaps.length>0)for(let ve=0;ve<R.mipmaps.length;ve++)$e(re.__webglFramebuffer[ve],k,R,a.COLOR_ATTACHMENT0,de,ve);else $e(re.__webglFramebuffer,k,R,a.COLOR_ATTACHMENT0,de,0);S(R)&&b(de),t.unbindTexture()}k.depthBuffer&&Tt(k)}function Yt(k){const R=k.textures;for(let re=0,ye=R.length;re<ye;re++){const Me=R[re];if(S(Me)){const Re=C(k),ze=i.get(Me).__webglTexture;t.bindTexture(Re,ze),b(Re),t.unbindTexture()}}}const Vt=[],on=[];function te(k){if(k.samples>0){if(_t(k)===!1){const R=k.textures,re=k.width,ye=k.height;let Me=a.COLOR_BUFFER_BIT;const Re=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,ze=i.get(k),de=R.length>1;if(de)for(let Ge=0;Ge<R.length;Ge++)t.bindFramebuffer(a.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ge,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,ze.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ge,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer);const ve=k.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ze.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Ge=0;Ge<R.length;Ge++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(Me|=a.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(Me|=a.STENCIL_BUFFER_BIT)),de){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,ze.__webglColorRenderbuffer[Ge]);const Ue=i.get(R[Ge]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,Ue,0)}a.blitFramebuffer(0,0,re,ye,0,0,re,ye,Me,a.NEAREST),h===!0&&(Vt.length=0,on.length=0,Vt.push(a.COLOR_ATTACHMENT0+Ge),k.depthBuffer&&k.resolveDepthBuffer===!1&&(Vt.push(Re),on.push(Re),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,on)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Vt))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),de)for(let Ge=0;Ge<R.length;Ge++){t.bindFramebuffer(a.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ge,a.RENDERBUFFER,ze.__webglColorRenderbuffer[Ge]);const Ue=i.get(R[Ge]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,ze.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Ge,a.TEXTURE_2D,Ue,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&h){const R=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[R])}}}function Gt(k){return Math.min(s.maxSamples,k.samples)}function _t(k){const R=i.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ft(k){const R=c.render.frame;p.get(k)!==R&&(p.set(k,R),k.update())}function Te(k,R){const re=k.colorSpace,ye=k.format,Me=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||re!==Nc&&re!==ss&&(Pt.getTransfer(re)===Ht?(ye!==xi||Me!==gi)&&ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Nt("WebGLTextures: Unsupported texture color space:",re)),R}function Wt(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(d.width=k.naturalWidth||k.width,d.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(d.width=k.displayWidth,d.height=k.displayHeight):(d.width=k.width,d.height=k.height),d}this.allocateTextureUnit=Z,this.resetTextureUnits=$,this.getTextureUnits=J,this.setTextureUnits=V,this.setTexture2D=W,this.setTexture2DArray=se,this.setTexture3D=j,this.setTextureCube=O,this.rebindTextures=Ct,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=te,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=$e,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function wE(a,e){function t(i,s=ss){let o;const c=Pt.getTransfer(s);if(i===gi)return a.UNSIGNED_BYTE;if(i===Td)return a.UNSIGNED_SHORT_4_4_4_4;if(i===Cd)return a.UNSIGNED_SHORT_5_5_5_1;if(i===Mx)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===wx)return a.UNSIGNED_INT_10F_11F_11F_REV;if(i===yx)return a.BYTE;if(i===Sx)return a.SHORT;if(i===Bo)return a.UNSIGNED_SHORT;if(i===Ed)return a.INT;if(i===rr)return a.UNSIGNED_INT;if(i===Gi)return a.FLOAT;if(i===vi)return a.HALF_FLOAT;if(i===bx)return a.ALPHA;if(i===Ex)return a.RGB;if(i===xi)return a.RGBA;if(i===br)return a.DEPTH_COMPONENT;if(i===Fs)return a.DEPTH_STENCIL;if(i===Ad)return a.RED;if(i===Rd)return a.RED_INTEGER;if(i===ks)return a.RG;if(i===Pd)return a.RG_INTEGER;if(i===Ld)return a.RGBA_INTEGER;if(i===bc||i===Ec||i===Tc||i===Cc)if(c===Ht)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===bc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ec)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Tc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Cc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===bc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ec)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Tc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Cc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nf||i===Uf||i===Ff||i===Df)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Nf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Uf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ff)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Df)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===kf||i===Of||i===zf||i===Bf||i===Hf||i===Pc||i===Vf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===kf||i===Of)return c===Ht?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===zf)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===Bf)return o.COMPRESSED_R11_EAC;if(i===Hf)return o.COMPRESSED_SIGNED_R11_EAC;if(i===Pc)return o.COMPRESSED_RG11_EAC;if(i===Vf)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Gf||i===Wf||i===Xf||i===jf||i===qf||i===Yf||i===$f||i===Kf||i===Zf||i===Qf||i===Jf||i===ed||i===td||i===nd)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Gf)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wf)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xf)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jf)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===qf)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Yf)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$f)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Kf)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Zf)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Qf)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Jf)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ed)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===td)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nd)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===id||i===rd||i===sd)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===id)return c===Ht?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===rd)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===sd)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ad||i===od||i===Lc||i===ld)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===ad)return o.COMPRESSED_RED_RGTC1_EXT;if(i===od)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ld)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ho?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:t}}const bE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EE=`
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

}`;class TE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Ux(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new un({vertexShader:bE,fragmentShader:EE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fn(new Tr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CE extends zs{constructor(e,t){super();const i=this;let s=null,o=1,c=null,u="local-floor",h=1,d=null,p=null,g=null,m=null,y=null,v=null;const w=typeof XRWebGLBinding<"u",_=new TE,S={},b=t.getContextAttributes();let C=null,E=null;const L=[],A=[],I=new ct;let T=null;const U=new Rn;U.viewport=new an;const z=new Rn;z.viewport=new an;const D=[U,z],B=new FS;let $=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let xe=L[ee];return xe===void 0&&(xe=new Hh,L[ee]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(ee){let xe=L[ee];return xe===void 0&&(xe=new Hh,L[ee]=xe),xe.getGripSpace()},this.getHand=function(ee){let xe=L[ee];return xe===void 0&&(xe=new Hh,L[ee]=xe),xe.getHandSpace()};function V(ee){const xe=A.indexOf(ee.inputSource);if(xe===-1)return;const me=L[xe];me!==void 0&&(me.update(ee.inputSource,ee.frame,d||c),me.dispatchEvent({type:ee.type,data:ee.inputSource}))}function Z(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",K);for(let ee=0;ee<L.length;ee++){const xe=A[ee];xe!==null&&(A[ee]=null,L[ee].disconnect(xe))}$=null,J=null,_.reset();for(const ee in S)delete S[ee];e.setRenderTarget(C),y=null,m=null,g=null,s=null,E=null,_e.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){o=ee,i.isPresenting===!0&&ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){u=ee,i.isPresenting===!0&&ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(ee){d=ee},this.getBaseLayer=function(){return m!==null?m:y},this.getBinding=function(){return g===null&&w&&(g=new XRWebGLBinding(s,t)),g},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(ee){if(s=ee,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",K),b.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(I),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ie=null,Be=null;b.depth&&(Be=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=b.stencil?Fs:br,Ie=b.stencil?Ho:rr);const $e={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:o};g=this.getBinding(),m=g.createProjectionLayer($e),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),E=new ii(m.textureWidth,m.textureHeight,{format:xi,type:gi,depthTexture:new Ua(m.textureWidth,m.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const me={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),E=new ii(y.framebufferWidth,y.framebufferHeight,{format:xi,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(h),d=null,c=await s.requestReferenceSpace(u),_e.setContext(s),_e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(ee){for(let xe=0;xe<ee.removed.length;xe++){const me=ee.removed[xe],Ie=A.indexOf(me);Ie>=0&&(A[Ie]=null,L[Ie].disconnect(me))}for(let xe=0;xe<ee.added.length;xe++){const me=ee.added[xe];let Ie=A.indexOf(me);if(Ie===-1){for(let $e=0;$e<L.length;$e++)if($e>=A.length){A.push(me),Ie=$e;break}else if(A[$e]===null){A[$e]=me,Ie=$e;break}if(Ie===-1)break}const Be=L[Ie];Be&&Be.connect(me)}}const W=new Q,se=new Q;function j(ee,xe,me){W.setFromMatrixPosition(xe.matrixWorld),se.setFromMatrixPosition(me.matrixWorld);const Ie=W.distanceTo(se),Be=xe.projectionMatrix.elements,$e=me.projectionMatrix.elements,wt=Be[14]/(Be[10]-1),ut=Be[14]/(Be[10]+1),Tt=(Be[9]+1)/Be[5],Ct=(Be[9]-1)/Be[5],mt=(Be[8]-1)/Be[0],Yt=($e[8]+1)/$e[0],Vt=wt*mt,on=wt*Yt,te=Ie/(-mt+Yt),Gt=te*-mt;if(xe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Gt),ee.translateZ(te),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Be[10]===-1)ee.projectionMatrix.copy(xe.projectionMatrix),ee.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const _t=wt+te,Ft=ut+te,Te=Vt-Gt,Wt=on+(Ie-Gt),k=Tt*ut/Ft*_t,R=Ct*ut/Ft*_t;ee.projectionMatrix.makePerspective(Te,Wt,k,R,_t,Ft),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function O(ee,xe){xe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(xe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(s===null)return;let xe=ee.near,me=ee.far;_.texture!==null&&(_.depthNear>0&&(xe=_.depthNear),_.depthFar>0&&(me=_.depthFar)),B.near=z.near=U.near=xe,B.far=z.far=U.far=me,($!==B.near||J!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),$=B.near,J=B.far),B.layers.mask=ee.layers.mask|6,U.layers.mask=B.layers.mask&-5,z.layers.mask=B.layers.mask&-3;const Ie=ee.parent,Be=B.cameras;O(B,Ie);for(let $e=0;$e<Be.length;$e++)O(Be[$e],Ie);Be.length===2?j(B,U,z):B.projectionMatrix.copy(U.projectionMatrix),G(ee,B,Ie)};function G(ee,xe,me){me===null?ee.matrix.copy(xe.matrixWorld):(ee.matrix.copy(me.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(xe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(xe.projectionMatrix),ee.projectionMatrixInverse.copy(xe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Go*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(m===null&&y===null))return h},this.setFoveation=function(ee){h=ee,m!==null&&(m.fixedFoveation=ee),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ee)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(B)},this.getCameraTexture=function(ee){return S[ee]};let pe=null;function Se(ee,xe){if(p=xe.getViewerPose(d||c),v=xe,p!==null){const me=p.views;y!==null&&(e.setRenderTargetFramebuffer(E,y.framebuffer),e.setRenderTarget(E));let Ie=!1;me.length!==B.cameras.length&&(B.cameras.length=0,Ie=!0);for(let ut=0;ut<me.length;ut++){const Tt=me[ut];let Ct=null;if(y!==null)Ct=y.getViewport(Tt);else{const Yt=g.getViewSubImage(m,Tt);Ct=Yt.viewport,ut===0&&(e.setRenderTargetTextures(E,Yt.colorTexture,Yt.depthStencilTexture),e.setRenderTarget(E))}let mt=D[ut];mt===void 0&&(mt=new Rn,mt.layers.enable(ut),mt.viewport=new an,D[ut]=mt),mt.matrix.fromArray(Tt.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(Tt.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),ut===0&&(B.matrix.copy(mt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ie===!0&&B.cameras.push(mt)}const Be=s.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){g=i.getBinding();const ut=g.getDepthInformation(me[0]);ut&&ut.isValid&&ut.texture&&_.init(ut,s.renderState)}if(Be&&Be.includes("camera-access")&&w){e.state.unbindTexture(),g=i.getBinding();for(let ut=0;ut<me.length;ut++){const Tt=me[ut].camera;if(Tt){let Ct=S[Tt];Ct||(Ct=new Ux,S[Tt]=Ct);const mt=g.getCameraImage(Tt);Ct.sourceTexture=mt}}}}for(let me=0;me<L.length;me++){const Ie=A[me],Be=L[me];Ie!==null&&Be!==void 0&&Be.update(Ie,xe,d||c)}pe&&pe(ee,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),v=null}const _e=new Bx;_e.setAnimationLoop(Se),this.setAnimationLoop=function(ee){pe=ee},this.dispose=function(){}}}const AE=new qt,qx=new vt;qx.set(-1,0,0,0,1,0,0,0,1);function RE(a,e){function t(_,S){_.matrixAutoUpdate===!0&&_.updateMatrix(),S.value.copy(_.matrix)}function i(_,S){S.color.getRGB(_.fogColor.value,Fx(a)),S.isFog?(_.fogNear.value=S.near,_.fogFar.value=S.far):S.isFogExp2&&(_.fogDensity.value=S.density)}function s(_,S,b,C,E){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?o(_,S):S.isMeshLambertMaterial?(o(_,S),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(o(_,S),g(_,S)):S.isMeshPhongMaterial?(o(_,S),p(_,S),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(o(_,S),m(_,S),S.isMeshPhysicalMaterial&&y(_,S,E)):S.isMeshMatcapMaterial?(o(_,S),v(_,S)):S.isMeshDepthMaterial?o(_,S):S.isMeshDistanceMaterial?(o(_,S),w(_,S)):S.isMeshNormalMaterial?o(_,S):S.isLineBasicMaterial?(c(_,S),S.isLineDashedMaterial&&u(_,S)):S.isPointsMaterial?h(_,S,b,C):S.isSpriteMaterial?d(_,S):S.isShadowMaterial?(_.color.value.copy(S.color),_.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function o(_,S){_.opacity.value=S.opacity,S.color&&_.diffuse.value.copy(S.color),S.emissive&&_.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(_.map.value=S.map,t(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.bumpMap&&(_.bumpMap.value=S.bumpMap,t(S.bumpMap,_.bumpMapTransform),_.bumpScale.value=S.bumpScale,S.side===ni&&(_.bumpScale.value*=-1)),S.normalMap&&(_.normalMap.value=S.normalMap,t(S.normalMap,_.normalMapTransform),_.normalScale.value.copy(S.normalScale),S.side===ni&&_.normalScale.value.negate()),S.displacementMap&&(_.displacementMap.value=S.displacementMap,t(S.displacementMap,_.displacementMapTransform),_.displacementScale.value=S.displacementScale,_.displacementBias.value=S.displacementBias),S.emissiveMap&&(_.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,_.emissiveMapTransform)),S.specularMap&&(_.specularMap.value=S.specularMap,t(S.specularMap,_.specularMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest);const b=e.get(S),C=b.envMap,E=b.envMapRotation;C&&(_.envMap.value=C,_.envMapRotation.value.setFromMatrix4(AE.makeRotationFromEuler(E)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(qx),_.reflectivity.value=S.reflectivity,_.ior.value=S.ior,_.refractionRatio.value=S.refractionRatio),S.lightMap&&(_.lightMap.value=S.lightMap,_.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,_.lightMapTransform)),S.aoMap&&(_.aoMap.value=S.aoMap,_.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,_.aoMapTransform))}function c(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,S.map&&(_.map.value=S.map,t(S.map,_.mapTransform))}function u(_,S){_.dashSize.value=S.dashSize,_.totalSize.value=S.dashSize+S.gapSize,_.scale.value=S.scale}function h(_,S,b,C){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.size.value=S.size*b,_.scale.value=C*.5,S.map&&(_.map.value=S.map,t(S.map,_.uvTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function d(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.rotation.value=S.rotation,S.map&&(_.map.value=S.map,t(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function p(_,S){_.specular.value.copy(S.specular),_.shininess.value=Math.max(S.shininess,1e-4)}function g(_,S){S.gradientMap&&(_.gradientMap.value=S.gradientMap)}function m(_,S){_.metalness.value=S.metalness,S.metalnessMap&&(_.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,_.metalnessMapTransform)),_.roughness.value=S.roughness,S.roughnessMap&&(_.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,_.roughnessMapTransform)),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)}function y(_,S,b){_.ior.value=S.ior,S.sheen>0&&(_.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),_.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(_.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,_.sheenColorMapTransform)),S.sheenRoughnessMap&&(_.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,_.sheenRoughnessMapTransform))),S.clearcoat>0&&(_.clearcoat.value=S.clearcoat,_.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(_.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,_.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(_.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ni&&_.clearcoatNormalScale.value.negate())),S.dispersion>0&&(_.dispersion.value=S.dispersion),S.iridescence>0&&(_.iridescence.value=S.iridescence,_.iridescenceIOR.value=S.iridescenceIOR,_.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(_.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,_.iridescenceMapTransform)),S.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),S.transmission>0&&(_.transmission.value=S.transmission,_.transmissionSamplerMap.value=b.texture,_.transmissionSamplerSize.value.set(b.width,b.height),S.transmissionMap&&(_.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,_.transmissionMapTransform)),_.thickness.value=S.thickness,S.thicknessMap&&(_.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=S.attenuationDistance,_.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(_.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(_.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=S.specularIntensity,_.specularColor.value.copy(S.specularColor),S.specularColorMap&&(_.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,_.specularColorMapTransform)),S.specularIntensityMap&&(_.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,S){S.matcap&&(_.matcap.value=S.matcap)}function w(_,S){const b=e.get(S).light;_.referencePosition.value.setFromMatrixPosition(b.matrixWorld),_.nearDistance.value=b.shadow.camera.near,_.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function PE(a,e,t,i){let s={},o={},c=[];const u=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function h(b,C){const E=C.program;i.uniformBlockBinding(b,E)}function d(b,C){let E=s[b.id];E===void 0&&(v(b),E=p(b),s[b.id]=E,b.addEventListener("dispose",_));const L=C.program;i.updateUBOMapping(b,L);const A=e.render.frame;o[b.id]!==A&&(m(b),o[b.id]=A)}function p(b){const C=g();b.__bindingPointIndex=C;const E=a.createBuffer(),L=b.__size,A=b.usage;return a.bindBuffer(a.UNIFORM_BUFFER,E),a.bufferData(a.UNIFORM_BUFFER,L,A),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,C,E),E}function g(){for(let b=0;b<u;b++)if(c.indexOf(b)===-1)return c.push(b),b;return Nt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(b){const C=s[b.id],E=b.uniforms,L=b.__cache;a.bindBuffer(a.UNIFORM_BUFFER,C);for(let A=0,I=E.length;A<I;A++){const T=Array.isArray(E[A])?E[A]:[E[A]];for(let U=0,z=T.length;U<z;U++){const D=T[U];if(y(D,A,U,L)===!0){const B=D.__offset,$=Array.isArray(D.value)?D.value:[D.value];let J=0;for(let V=0;V<$.length;V++){const Z=$[V],K=w(Z);typeof Z=="number"||typeof Z=="boolean"?(D.__data[0]=Z,a.bufferSubData(a.UNIFORM_BUFFER,B+J,D.__data)):Z.isMatrix3?(D.__data[0]=Z.elements[0],D.__data[1]=Z.elements[1],D.__data[2]=Z.elements[2],D.__data[3]=0,D.__data[4]=Z.elements[3],D.__data[5]=Z.elements[4],D.__data[6]=Z.elements[5],D.__data[7]=0,D.__data[8]=Z.elements[6],D.__data[9]=Z.elements[7],D.__data[10]=Z.elements[8],D.__data[11]=0):ArrayBuffer.isView(Z)?D.__data.set(new Z.constructor(Z.buffer,Z.byteOffset,D.__data.length)):(Z.toArray(D.__data,J),J+=K.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,B,D.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function y(b,C,E,L){const A=b.value,I=C+"_"+E;if(L[I]===void 0)return typeof A=="number"||typeof A=="boolean"?L[I]=A:ArrayBuffer.isView(A)?L[I]=A.slice():L[I]=A.clone(),!0;{const T=L[I];if(typeof A=="number"||typeof A=="boolean"){if(T!==A)return L[I]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(T.equals(A)===!1)return T.copy(A),!0}}return!1}function v(b){const C=b.uniforms;let E=0;const L=16;for(let I=0,T=C.length;I<T;I++){const U=Array.isArray(C[I])?C[I]:[C[I]];for(let z=0,D=U.length;z<D;z++){const B=U[z],$=Array.isArray(B.value)?B.value:[B.value];for(let J=0,V=$.length;J<V;J++){const Z=$[J],K=w(Z),W=E%L,se=W%K.boundary,j=W+se;E+=se,j!==0&&L-j<K.storage&&(E+=L-j),B.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=E,E+=K.storage}}}const A=E%L;return A>0&&(E+=L-A),b.__size=E,b.__cache={},this}function w(b){const C={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(C.boundary=4,C.storage=4):b.isVector2?(C.boundary=8,C.storage=8):b.isVector3||b.isColor?(C.boundary=16,C.storage=12):b.isVector4?(C.boundary=16,C.storage=16):b.isMatrix3?(C.boundary=48,C.storage=48):b.isMatrix4?(C.boundary=64,C.storage=64):b.isTexture?ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(C.boundary=16,C.storage=b.byteLength):ht("WebGLRenderer: Unsupported uniform value type.",b),C}function _(b){const C=b.target;C.removeEventListener("dispose",_);const E=c.indexOf(C.__bindingPointIndex);c.splice(E,1),a.deleteBuffer(s[C.id]),delete s[C.id],delete o[C.id]}function S(){for(const b in s)a.deleteBuffer(s[b]);c=[],s={},o={}}return{bind:h,update:d,dispose:S}}const LE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Qi=null;function IE(){return Qi===null&&(Qi=new kd(LE,16,16,ks,vi),Qi.name="DFG_LUT",Qi.minFilter=xn,Qi.magFilter=xn,Qi.wrapS=Sr,Qi.wrapT=Sr,Qi.generateMipmaps=!1,Qi.needsUpdate=!0),Qi}class hs{constructor(e={}){const{canvas:t=Ly(),context:i=null,depth:s=!0,stencil:o=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:m=!1,outputBufferType:y=gi}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=c;const w=y,_=new Set([Ld,Pd,Rd]),S=new Set([gi,rr,Bo,Ho,Td,Cd]),b=new Uint32Array(4),C=new Int32Array(4),E=new Q;let L=null,A=null;const I=[],T=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ir,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let D=!1,B=null;this._outputColorSpace=mi;let $=0,J=0,V=null,Z=-1,K=null;const W=new an,se=new an;let j=null;const O=new Ye(0);let G=0,pe=t.width,Se=t.height,_e=1,ee=null,xe=null;const me=new an(0,0,pe,Se),Ie=new an(0,0,pe,Se);let Be=!1;const $e=new Od;let wt=!1,ut=!1;const Tt=new qt,Ct=new Q,mt=new an,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function on(){return V===null?_e:1}let te=i;function Gt(N,ie){return t.getContext(N,ie)}try{const N={alpha:!0,depth:s,stencil:o,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wd}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",dt,!1),te===null){const ie="webgl2";if(te=Gt(ie,N),te===null)throw Gt(ie)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw Nt("WebGLRenderer: "+N.message),N}let _t,Ft,Te,Wt,k,R,re,ye,Me,Re,ze,de,ve,Ge,Ue,ke,Pe,ft,st,yt,q,Ne,ge;function Xe(){_t=new I2(te),_t.init(),q=new wE(te,_t),Ft=new b2(te,_t,e,q),Te=new SE(te,_t),Ft.reversedDepthBuffer&&m&&Te.buffers.depth.setReversed(!0),Wt=new F2(te),k=new oE,R=new ME(te,_t,Te,k,Ft,q,Wt),re=new L2(z),ye=new zS(te),Ne=new M2(te,ye),Me=new N2(te,ye,Wt,Ne),Re=new k2(te,Me,ye,Ne,Wt),ft=new D2(te,Ft,R),Ue=new E2(k),ze=new aE(z,re,_t,Ft,Ne,Ue),de=new RE(z,k),ve=new cE,Ge=new mE(_t),Pe=new S2(z,re,Te,Re,v,h),ke=new yE(z,Re,Ft),ge=new PE(te,Wt,Ft,Te),st=new w2(te,_t,Wt),yt=new U2(te,_t,Wt),Wt.programs=ze.programs,z.capabilities=Ft,z.extensions=_t,z.properties=k,z.renderLists=ve,z.shadowMap=ke,z.state=Te,z.info=Wt}Xe(),w!==gi&&(U=new z2(w,t.width,t.height,s,o));const Fe=new CE(z,te);this.xr=Fe,this.getContext=function(){return te},this.getContextAttributes=function(){return te.getContextAttributes()},this.forceContextLoss=function(){const N=_t.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=_t.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(N){N!==void 0&&(_e=N,this.setSize(pe,Se,!1))},this.getSize=function(N){return N.set(pe,Se)},this.setSize=function(N,ie,ue=!0){if(Fe.isPresenting){ht("WebGLRenderer: Can't change size while VR device is presenting.");return}pe=N,Se=ie,t.width=Math.floor(N*_e),t.height=Math.floor(ie*_e),ue===!0&&(t.style.width=N+"px",t.style.height=ie+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,N,ie)},this.getDrawingBufferSize=function(N){return N.set(pe*_e,Se*_e).floor()},this.setDrawingBufferSize=function(N,ie,ue){pe=N,Se=ie,_e=ue,t.width=Math.floor(N*ue),t.height=Math.floor(ie*ue),this.setViewport(0,0,N,ie)},this.setEffects=function(N){if(w===gi){Nt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let ie=0;ie<N.length;ie++)if(N[ie].isOutputPass===!0){ht("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(W)},this.getViewport=function(N){return N.copy(me)},this.setViewport=function(N,ie,ue,le){N.isVector4?me.set(N.x,N.y,N.z,N.w):me.set(N,ie,ue,le),Te.viewport(W.copy(me).multiplyScalar(_e).round())},this.getScissor=function(N){return N.copy(Ie)},this.setScissor=function(N,ie,ue,le){N.isVector4?Ie.set(N.x,N.y,N.z,N.w):Ie.set(N,ie,ue,le),Te.scissor(se.copy(Ie).multiplyScalar(_e).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(N){Te.setScissorTest(Be=N)},this.setOpaqueSort=function(N){ee=N},this.setTransparentSort=function(N){xe=N},this.getClearColor=function(N){return N.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor(...arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha(...arguments)},this.clear=function(N=!0,ie=!0,ue=!0){let le=0;if(N){let oe=!1;if(V!==null){const He=V.texture.format;oe=_.has(He)}if(oe){const He=V.texture.type,Ke=S.has(He),Oe=Pe.getClearColor(),et=Pe.getClearAlpha(),rt=Oe.r,gt=Oe.g,xt=Oe.b;Ke?(b[0]=rt,b[1]=gt,b[2]=xt,b[3]=et,te.clearBufferuiv(te.COLOR,0,b)):(C[0]=rt,C[1]=gt,C[2]=xt,C[3]=et,te.clearBufferiv(te.COLOR,0,C))}else le|=te.COLOR_BUFFER_BIT}ie&&(le|=te.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(le|=te.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),le!==0&&te.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),B=N},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",dt,!1),Pe.dispose(),ve.dispose(),Ge.dispose(),k.dispose(),re.dispose(),Re.dispose(),Ne.dispose(),ge.dispose(),ze.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",sr),Fe.removeEventListener("sessionend",Cr),Ci.stop()};function we(N){N.preventDefault(),O0("WebGLRenderer: Context Lost."),D=!0}function Qe(){O0("WebGLRenderer: Context Restored."),D=!1;const N=Wt.autoReset,ie=ke.enabled,ue=ke.autoUpdate,le=ke.needsUpdate,oe=ke.type;Xe(),Wt.autoReset=N,ke.enabled=ie,ke.autoUpdate=ue,ke.needsUpdate=le,ke.type=oe}function dt(N){Nt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Ot(N){const ie=N.target;ie.removeEventListener("dispose",Ot),Rt(ie)}function Rt(N){bn(N),k.remove(N)}function bn(N){const ie=k.get(N).programs;ie!==void 0&&(ie.forEach(function(ue){ze.releaseProgram(ue)}),N.isShaderMaterial&&ze.releaseShaderCache(N))}this.renderBufferDirect=function(N,ie,ue,le,oe,He){ie===null&&(ie=Yt);const Ke=oe.isMesh&&oe.matrixWorld.determinant()<0,Oe=Yo(N,ie,ue,le,oe);Te.setMaterial(le,Ke);let et=ue.index,rt=1;if(le.wireframe===!0){if(et=Me.getWireframeAttribute(ue),et===void 0)return;rt=2}const gt=ue.drawRange,xt=ue.attributes.position;let nt=gt.start*rt,Lt=(gt.start+gt.count)*rt;He!==null&&(nt=Math.max(nt,He.start*rt),Lt=Math.min(Lt,(He.start+He.count)*rt)),et!==null?(nt=Math.max(nt,0),Lt=Math.min(Lt,et.count)):xt!=null&&(nt=Math.max(nt,0),Lt=Math.min(Lt,xt.count));const Xt=Lt-nt;if(Xt<0||Xt===1/0)return;Ne.setup(oe,le,Oe,ue,et);let Jt,zt=st;if(et!==null&&(Jt=ye.get(et),zt=yt,zt.setIndex(Jt)),oe.isMesh)le.wireframe===!0?(Te.setLineWidth(le.wireframeLinewidth*on()),zt.setMode(te.LINES)):zt.setMode(te.TRIANGLES);else if(oe.isLine){let dn=le.linewidth;dn===void 0&&(dn=1),Te.setLineWidth(dn*on()),oe.isLineSegments?zt.setMode(te.LINES):oe.isLineLoop?zt.setMode(te.LINE_LOOP):zt.setMode(te.LINE_STRIP)}else oe.isPoints?zt.setMode(te.POINTS):oe.isSprite&&zt.setMode(te.TRIANGLES);if(oe.isBatchedMesh)if(_t.get("WEBGL_multi_draw"))zt.renderMultiDraw(oe._multiDrawStarts,oe._multiDrawCounts,oe._multiDrawCount);else{const dn=oe._multiDrawStarts,je=oe._multiDrawCounts,Pn=oe._multiDrawCount,Mt=et?ye.get(et).bytesPerElement:1,qn=k.get(le).currentProgram.getUniforms();for(let Yn=0;Yn<Pn;Yn++)qn.setValue(te,"_gl_DrawID",Yn),zt.render(dn[Yn]/Mt,je[Yn])}else if(oe.isInstancedMesh)zt.renderInstances(nt,Xt,oe.count);else if(ue.isInstancedBufferGeometry){const dn=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,je=Math.min(ue.instanceCount,dn);zt.renderInstances(nt,Xt,je)}else zt.render(nt,Xt)};function jn(N,ie,ue){N.transparent===!0&&N.side===Hi&&N.forceSinglePass===!1?(N.side=ni,N.needsUpdate=!0,Ai(N,ie,ue),N.side=cs,N.needsUpdate=!0,Ai(N,ie,ue),N.side=Hi):Ai(N,ie,ue)}this.compile=function(N,ie,ue=null){ue===null&&(ue=N),A=Ge.get(ue),A.init(ie),T.push(A),ue.traverseVisible(function(oe){oe.isLight&&oe.layers.test(ie.layers)&&(A.pushLight(oe),oe.castShadow&&A.pushShadow(oe))}),N!==ue&&N.traverseVisible(function(oe){oe.isLight&&oe.layers.test(ie.layers)&&(A.pushLight(oe),oe.castShadow&&A.pushShadow(oe))}),A.setupLights();const le=new Set;return N.traverse(function(oe){if(!(oe.isMesh||oe.isPoints||oe.isLine||oe.isSprite))return;const He=oe.material;if(He)if(Array.isArray(He))for(let Ke=0;Ke<He.length;Ke++){const Oe=He[Ke];jn(Oe,ue,oe),le.add(Oe)}else jn(He,ue,oe),le.add(He)}),A=T.pop(),le},this.compileAsync=function(N,ie,ue=null){const le=this.compile(N,ie,ue);return new Promise(oe=>{function He(){if(le.forEach(function(Ke){k.get(Ke).currentProgram.isReady()&&le.delete(Ke)}),le.size===0){oe(N);return}setTimeout(He,10)}_t.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let ai=null;function oi(N){ai&&ai(N)}function sr(){Ci.stop()}function Cr(){Ci.start()}const Ci=new Bx;Ci.setAnimationLoop(oi),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(N){ai=N,Fe.setAnimationLoop(N),N===null?Ci.stop():Ci.start()},Fe.addEventListener("sessionstart",sr),Fe.addEventListener("sessionend",Cr),this.render=function(N,ie){if(ie!==void 0&&ie.isCamera!==!0){Nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;B!==null&&B.renderStart(N,ie);const ue=Fe.enabled===!0&&Fe.isPresenting===!0,le=U!==null&&(V===null||ue)&&U.begin(z,V);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ie.parent===null&&ie.matrixWorldAutoUpdate===!0&&ie.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(ie),ie=Fe.getCamera()),N.isScene===!0&&N.onBeforeRender(z,N,ie,V),A=Ge.get(N,T.length),A.init(ie),A.state.textureUnits=R.getTextureUnits(),T.push(A),Tt.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),$e.setFromProjectionMatrix(Tt,er,ie.reversedDepth),ut=this.localClippingEnabled,wt=Ue.init(this.clippingPlanes,ut),L=ve.get(N,I.length),L.init(),I.push(L),Fe.enabled===!0&&Fe.isPresenting===!0){const Ke=z.xr.getDepthSensingMesh();Ke!==null&&Ce(Ke,ie,-1/0,z.sortObjects)}Ce(N,ie,0,z.sortObjects),L.finish(),z.sortObjects===!0&&L.sort(ee,xe),Vt=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,Vt&&Pe.addToRenderList(L,N),this.info.render.frame++,wt===!0&&Ue.beginShadows();const oe=A.state.shadowsArray;if(ke.render(oe,N,ie),wt===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),(le&&U.hasRenderPass())===!1){const Ke=L.opaque,Oe=L.transmissive;if(A.setupLights(),ie.isArrayCamera){const et=ie.cameras;if(Oe.length>0)for(let rt=0,gt=et.length;rt<gt;rt++){const xt=et[rt];Le(Ke,Oe,N,xt)}Vt&&Pe.render(N);for(let rt=0,gt=et.length;rt<gt;rt++){const xt=et[rt];Ve(L,N,xt,xt.viewport)}}else Oe.length>0&&Le(Ke,Oe,N,ie),Vt&&Pe.render(N),Ve(L,N,ie)}V!==null&&J===0&&(R.updateMultisampleRenderTarget(V),R.updateRenderTargetMipmap(V)),le&&U.end(z),N.isScene===!0&&N.onAfterRender(z,N,ie),Ne.resetDefaultState(),Z=-1,K=null,T.pop(),T.length>0?(A=T[T.length-1],R.setTextureUnits(A.state.textureUnits),wt===!0&&Ue.setGlobalState(z.clippingPlanes,A.state.camera)):A=null,I.pop(),I.length>0?L=I[I.length-1]:L=null,B!==null&&B.renderEnd()};function Ce(N,ie,ue,le){if(N.visible===!1)return;if(N.layers.test(ie.layers)){if(N.isGroup)ue=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(ie);else if(N.isLightProbeGrid)A.pushLightProbeGrid(N);else if(N.isLight)A.pushLight(N),N.castShadow&&A.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||$e.intersectsSprite(N)){le&&mt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Tt);const Ke=Re.update(N),Oe=N.material;Oe.visible&&L.push(N,Ke,Oe,ue,mt.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||$e.intersectsObject(N))){const Ke=Re.update(N),Oe=N.material;if(le&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),mt.copy(N.boundingSphere.center)):(Ke.boundingSphere===null&&Ke.computeBoundingSphere(),mt.copy(Ke.boundingSphere.center)),mt.applyMatrix4(N.matrixWorld).applyMatrix4(Tt)),Array.isArray(Oe)){const et=Ke.groups;for(let rt=0,gt=et.length;rt<gt;rt++){const xt=et[rt],nt=Oe[xt.materialIndex];nt&&nt.visible&&L.push(N,Ke,nt,ue,mt.z,xt)}}else Oe.visible&&L.push(N,Ke,Oe,ue,mt.z,null)}}const He=N.children;for(let Ke=0,Oe=He.length;Ke<Oe;Ke++)Ce(He[Ke],ie,ue,le)}function Ve(N,ie,ue,le){const{opaque:oe,transmissive:He,transparent:Ke}=N;A.setupLightsView(ue),wt===!0&&Ue.setGlobalState(z.clippingPlanes,ue),le&&Te.viewport(W.copy(le)),oe.length>0&&at(oe,ie,ue),He.length>0&&at(He,ie,ue),Ke.length>0&&at(Ke,ie,ue),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Le(N,ie,ue,le){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[le.id]===void 0){const nt=_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[le.id]=new ii(1,1,{generateMipmaps:!0,type:nt?vi:gi,minFilter:Us,samples:Math.max(4,Ft.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}const He=A.state.transmissionRenderTarget[le.id],Ke=le.viewport||W;He.setSize(Ke.z*z.transmissionResolutionScale,Ke.w*z.transmissionResolutionScale);const Oe=z.getRenderTarget(),et=z.getActiveCubeFace(),rt=z.getActiveMipmapLevel();z.setRenderTarget(He),z.getClearColor(O),G=z.getClearAlpha(),G<1&&z.setClearColor(16777215,.5),z.clear(),Vt&&Pe.render(ue);const gt=z.toneMapping;z.toneMapping=ir;const xt=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),A.setupLightsView(le),wt===!0&&Ue.setGlobalState(z.clippingPlanes,le),at(N,ue,le),R.updateMultisampleRenderTarget(He),R.updateRenderTargetMipmap(He),_t.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Lt=0,Xt=ie.length;Lt<Xt;Lt++){const Jt=ie[Lt],{object:zt,geometry:dn,material:je,group:Pn}=Jt;if(je.side===Hi&&zt.layers.test(le.layers)){const Mt=je.side;je.side=ni,je.needsUpdate=!0,Dt(zt,ue,le,dn,je,Pn),je.side=Mt,je.needsUpdate=!0,nt=!0}}nt===!0&&(R.updateMultisampleRenderTarget(He),R.updateRenderTargetMipmap(He))}z.setRenderTarget(Oe,et,rt),z.setClearColor(O,G),xt!==void 0&&(le.viewport=xt),z.toneMapping=gt}function at(N,ie,ue){const le=ie.isScene===!0?ie.overrideMaterial:null;for(let oe=0,He=N.length;oe<He;oe++){const Ke=N[oe],{object:Oe,geometry:et,group:rt}=Ke;let gt=Ke.material;gt.allowOverride===!0&&le!==null&&(gt=le),Oe.layers.test(ue.layers)&&Dt(Oe,ie,ue,et,gt,rt)}}function Dt(N,ie,ue,le,oe,He){N.onBeforeRender(z,ie,ue,le,oe,He),N.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),oe.onBeforeRender(z,ie,ue,le,N,He),oe.transparent===!0&&oe.side===Hi&&oe.forceSinglePass===!1?(oe.side=ni,oe.needsUpdate=!0,z.renderBufferDirect(ue,ie,le,oe,N,He),oe.side=cs,oe.needsUpdate=!0,z.renderBufferDirect(ue,ie,le,oe,N,He),oe.side=Hi):z.renderBufferDirect(ue,ie,le,oe,N,He),N.onAfterRender(z,ie,ue,le,oe,He)}function Ai(N,ie,ue){ie.isScene!==!0&&(ie=Yt);const le=k.get(N),oe=A.state.lights,He=A.state.shadowsArray,Ke=oe.state.version,Oe=ze.getParameters(N,oe.state,He,ie,ue,A.state.lightProbeGridArray),et=ze.getProgramCacheKey(Oe);let rt=le.programs;le.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?ie.environment:null,le.fog=ie.fog;const gt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;le.envMap=re.get(N.envMap||le.environment,gt),le.envMapRotation=le.environment!==null&&N.envMap===null?ie.environmentRotation:N.envMapRotation,rt===void 0&&(N.addEventListener("dispose",Ot),rt=new Map,le.programs=rt);let xt=rt.get(et);if(xt!==void 0){if(le.currentProgram===xt&&le.lightsStateVersion===Ke)return Ar(N,Oe),xt}else Oe.uniforms=ze.getUniforms(N),B!==null&&N.isNodeMaterial&&B.build(N,ue,Oe),N.onBeforeCompile(Oe,z),xt=ze.acquireProgram(Oe,et),rt.set(et,xt),le.uniforms=Oe.uniforms;const nt=le.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(nt.clippingPlanes=Ue.uniform),Ar(N,Oe),le.needsLights=Kc(N),le.lightsStateVersion=Ke,le.needsLights&&(nt.ambientLightColor.value=oe.state.ambient,nt.lightProbe.value=oe.state.probe,nt.directionalLights.value=oe.state.directional,nt.directionalLightShadows.value=oe.state.directionalShadow,nt.spotLights.value=oe.state.spot,nt.spotLightShadows.value=oe.state.spotShadow,nt.rectAreaLights.value=oe.state.rectArea,nt.ltc_1.value=oe.state.rectAreaLTC1,nt.ltc_2.value=oe.state.rectAreaLTC2,nt.pointLights.value=oe.state.point,nt.pointLightShadows.value=oe.state.pointShadow,nt.hemisphereLights.value=oe.state.hemi,nt.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,nt.spotLightMatrix.value=oe.state.spotLightMatrix,nt.spotLightMap.value=oe.state.spotLightMap,nt.pointShadowMatrix.value=oe.state.pointShadowMatrix),le.lightProbeGrid=A.state.lightProbeGridArray.length>0,le.currentProgram=xt,le.uniformsList=null,xt}function fs(N){if(N.uniformsList===null){const ie=N.currentProgram.getUniforms();N.uniformsList=Ac.seqWithValue(ie.seq,N.uniforms)}return N.uniformsList}function Ar(N,ie){const ue=k.get(N);ue.outputColorSpace=ie.outputColorSpace,ue.batching=ie.batching,ue.batchingColor=ie.batchingColor,ue.instancing=ie.instancing,ue.instancingColor=ie.instancingColor,ue.instancingMorph=ie.instancingMorph,ue.skinning=ie.skinning,ue.morphTargets=ie.morphTargets,ue.morphNormals=ie.morphNormals,ue.morphColors=ie.morphColors,ue.morphTargetsCount=ie.morphTargetsCount,ue.numClippingPlanes=ie.numClippingPlanes,ue.numIntersection=ie.numClipIntersection,ue.vertexAlphas=ie.vertexAlphas,ue.vertexTangents=ie.vertexTangents,ue.toneMapping=ie.toneMapping}function qo(N,ie){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;E.setFromMatrixPosition(ie.matrixWorld);for(let ue=0,le=N.length;ue<le;ue++){const oe=N[ue];if(oe.texture!==null&&oe.boundingBox.containsPoint(E))return oe}return null}function Yo(N,ie,ue,le,oe){ie.isScene!==!0&&(ie=Yt),R.resetTextureUnits();const He=ie.fog,Ke=le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial?ie.environment:null,Oe=V===null?z.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:Pt.workingColorSpace,et=le.isMeshStandardMaterial||le.isMeshLambertMaterial&&!le.envMap||le.isMeshPhongMaterial&&!le.envMap,rt=re.get(le.envMap||Ke,et),gt=le.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,xt=!!ue.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),nt=!!ue.morphAttributes.position,Lt=!!ue.morphAttributes.normal,Xt=!!ue.morphAttributes.color;let Jt=ir;le.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Jt=z.toneMapping);const zt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,dn=zt!==void 0?zt.length:0,je=k.get(le),Pn=A.state.lights;if(wt===!0&&(ut===!0||N!==K)){const Bt=N===K&&le.id===Z;Ue.setState(le,N,Bt)}let Mt=!1;le.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Pn.state.version||je.outputColorSpace!==Oe||oe.isBatchedMesh&&je.batching===!1||!oe.isBatchedMesh&&je.batching===!0||oe.isBatchedMesh&&je.batchingColor===!0&&oe.colorTexture===null||oe.isBatchedMesh&&je.batchingColor===!1&&oe.colorTexture!==null||oe.isInstancedMesh&&je.instancing===!1||!oe.isInstancedMesh&&je.instancing===!0||oe.isSkinnedMesh&&je.skinning===!1||!oe.isSkinnedMesh&&je.skinning===!0||oe.isInstancedMesh&&je.instancingColor===!0&&oe.instanceColor===null||oe.isInstancedMesh&&je.instancingColor===!1&&oe.instanceColor!==null||oe.isInstancedMesh&&je.instancingMorph===!0&&oe.morphTexture===null||oe.isInstancedMesh&&je.instancingMorph===!1&&oe.morphTexture!==null||je.envMap!==rt||le.fog===!0&&je.fog!==He||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Ue.numPlanes||je.numIntersection!==Ue.numIntersection)||je.vertexAlphas!==gt||je.vertexTangents!==xt||je.morphTargets!==nt||je.morphNormals!==Lt||je.morphColors!==Xt||je.toneMapping!==Jt||je.morphTargetsCount!==dn||!!je.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(Mt=!0):(Mt=!0,je.__version=le.version);let qn=je.currentProgram;Mt===!0&&(qn=Ai(le,ie,oe),B&&le.isNodeMaterial&&B.onUpdateProgram(le,qn,je));let Yn=!1,bt=!1,ar=!1;const kt=qn.getUniforms(),$t=je.uniforms;if(Te.useProgram(qn.program)&&(Yn=!0,bt=!0,ar=!0),le.id!==Z&&(Z=le.id,bt=!0),je.needsLights){const Bt=qo(A.state.lightProbeGridArray,oe);je.lightProbeGrid!==Bt&&(je.lightProbeGrid=Bt,bt=!0)}if(Yn||K!==N){Te.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),kt.setValue(te,"projectionMatrix",N.projectionMatrix),kt.setValue(te,"viewMatrix",N.matrixWorldInverse);const Pi=kt.map.cameraPosition;Pi!==void 0&&Pi.setValue(te,Ct.setFromMatrixPosition(N.matrixWorld)),Ft.logarithmicDepthBuffer&&kt.setValue(te,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&kt.setValue(te,"isOrthographic",N.isOrthographicCamera===!0),K!==N&&(K=N,bt=!0,ar=!0)}if(je.needsLights&&(Pn.state.directionalShadowMap.length>0&&kt.setValue(te,"directionalShadowMap",Pn.state.directionalShadowMap,R),Pn.state.spotShadowMap.length>0&&kt.setValue(te,"spotShadowMap",Pn.state.spotShadowMap,R),Pn.state.pointShadowMap.length>0&&kt.setValue(te,"pointShadowMap",Pn.state.pointShadowMap,R)),oe.isSkinnedMesh){kt.setOptional(te,oe,"bindMatrix"),kt.setOptional(te,oe,"bindMatrixInverse");const Bt=oe.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),kt.setValue(te,"boneTexture",Bt.boneTexture,R))}oe.isBatchedMesh&&(kt.setOptional(te,oe,"batchingTexture"),kt.setValue(te,"batchingTexture",oe._matricesTexture,R),kt.setOptional(te,oe,"batchingIdTexture"),kt.setValue(te,"batchingIdTexture",oe._indirectTexture,R),kt.setOptional(te,oe,"batchingColorTexture"),oe._colorsTexture!==null&&kt.setValue(te,"batchingColorTexture",oe._colorsTexture,R));const Ri=ue.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&ft.update(oe,ue,qn),(bt||je.receiveShadow!==oe.receiveShadow)&&(je.receiveShadow=oe.receiveShadow,kt.setValue(te,"receiveShadow",oe.receiveShadow)),(le.isMeshStandardMaterial||le.isMeshLambertMaterial||le.isMeshPhongMaterial)&&le.envMap===null&&ie.environment!==null&&($t.envMapIntensity.value=ie.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=IE()),bt){if(kt.setValue(te,"toneMappingExposure",z.toneMappingExposure),je.needsLights&&$c($t,ar),He&&le.fog===!0&&de.refreshFogUniforms($t,He),de.refreshMaterialUniforms($t,le,_e,Se,A.state.transmissionRenderTarget[N.id]),je.needsLights&&je.lightProbeGrid){const Bt=je.lightProbeGrid;$t.probesSH.value=Bt.texture,$t.probesMin.value.copy(Bt.boundingBox.min),$t.probesMax.value.copy(Bt.boundingBox.max),$t.probesResolution.value.copy(Bt.resolution)}Ac.upload(te,fs(je),$t,R)}if(le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Ac.upload(te,fs(je),$t,R),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&kt.setValue(te,"center",oe.center),kt.setValue(te,"modelViewMatrix",oe.modelViewMatrix),kt.setValue(te,"normalMatrix",oe.normalMatrix),kt.setValue(te,"modelMatrix",oe.matrixWorld),le.uniformsGroups!==void 0){const Bt=le.uniformsGroups;for(let Pi=0,ji=Bt.length;Pi<ji;Pi++){const ds=Bt[Pi];ge.update(ds,qn),ge.bind(ds,qn)}}return qn}function $c(N,ie){N.ambientLightColor.needsUpdate=ie,N.lightProbe.needsUpdate=ie,N.directionalLights.needsUpdate=ie,N.directionalLightShadows.needsUpdate=ie,N.pointLights.needsUpdate=ie,N.pointLightShadows.needsUpdate=ie,N.spotLights.needsUpdate=ie,N.spotLightShadows.needsUpdate=ie,N.rectAreaLights.needsUpdate=ie,N.hemisphereLights.needsUpdate=ie}function Kc(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(N,ie,ue){const le=k.get(N);le.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),k.get(N.texture).__webglTexture=ie,k.get(N.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:ue,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,ie){const ue=k.get(N);ue.__webglFramebuffer=ie,ue.__useDefaultFramebuffer=ie===void 0};const tn=te.createFramebuffer();this.setRenderTarget=function(N,ie=0,ue=0){V=N,$=ie,J=ue;let le=null,oe=!1,He=!1;if(N){const Oe=k.get(N);if(Oe.__useDefaultFramebuffer!==void 0){Te.bindFramebuffer(te.FRAMEBUFFER,Oe.__webglFramebuffer),W.copy(N.viewport),se.copy(N.scissor),j=N.scissorTest,Te.viewport(W),Te.scissor(se),Te.setScissorTest(j),Z=-1;return}else if(Oe.__webglFramebuffer===void 0)R.setupRenderTarget(N);else if(Oe.__hasExternalTextures)R.rebindTextures(N,k.get(N.texture).__webglTexture,k.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const gt=N.depthTexture;if(Oe.__boundDepthTexture!==gt){if(gt!==null&&k.has(gt)&&(N.width!==gt.image.width||N.height!==gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(N)}}const et=N.texture;(et.isData3DTexture||et.isDataArrayTexture||et.isCompressedArrayTexture)&&(He=!0);const rt=k.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(rt[ie])?le=rt[ie][ue]:le=rt[ie],oe=!0):N.samples>0&&R.useMultisampledRTT(N)===!1?le=k.get(N).__webglMultisampledFramebuffer:Array.isArray(rt)?le=rt[ue]:le=rt,W.copy(N.viewport),se.copy(N.scissor),j=N.scissorTest}else W.copy(me).multiplyScalar(_e).floor(),se.copy(Ie).multiplyScalar(_e).floor(),j=Be;if(ue!==0&&(le=tn),Te.bindFramebuffer(te.FRAMEBUFFER,le)&&Te.drawBuffers(N,le),Te.viewport(W),Te.scissor(se),Te.setScissorTest(j),oe){const Oe=k.get(N.texture);te.framebufferTexture2D(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0,te.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Oe.__webglTexture,ue)}else if(He){const Oe=ie;for(let et=0;et<N.textures.length;et++){const rt=k.get(N.textures[et]);te.framebufferTextureLayer(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0+et,rt.__webglTexture,ue,Oe)}}else if(N!==null&&ue!==0){const Oe=k.get(N.texture);te.framebufferTexture2D(te.FRAMEBUFFER,te.COLOR_ATTACHMENT0,te.TEXTURE_2D,Oe.__webglTexture,ue)}Z=-1},this.readRenderTargetPixels=function(N,ie,ue,le,oe,He,Ke,Oe=0){if(!(N&&N.isWebGLRenderTarget)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let et=k.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ke!==void 0&&(et=et[Ke]),et){Te.bindFramebuffer(te.FRAMEBUFFER,et);try{const rt=N.textures[Oe],gt=rt.format,xt=rt.type;if(N.textures.length>1&&te.readBuffer(te.COLOR_ATTACHMENT0+Oe),!Ft.textureFormatReadable(gt)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ft.textureTypeReadable(xt)){Nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ie>=0&&ie<=N.width-le&&ue>=0&&ue<=N.height-oe&&te.readPixels(ie,ue,le,oe,q.convert(gt),q.convert(xt),He)}finally{const rt=V!==null?k.get(V).__webglFramebuffer:null;Te.bindFramebuffer(te.FRAMEBUFFER,rt)}}},this.readRenderTargetPixelsAsync=async function(N,ie,ue,le,oe,He,Ke,Oe=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let et=k.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ke!==void 0&&(et=et[Ke]),et)if(ie>=0&&ie<=N.width-le&&ue>=0&&ue<=N.height-oe){Te.bindFramebuffer(te.FRAMEBUFFER,et);const rt=N.textures[Oe],gt=rt.format,xt=rt.type;if(N.textures.length>1&&te.readBuffer(te.COLOR_ATTACHMENT0+Oe),!Ft.textureFormatReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ft.textureTypeReadable(xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=te.createBuffer();te.bindBuffer(te.PIXEL_PACK_BUFFER,nt),te.bufferData(te.PIXEL_PACK_BUFFER,He.byteLength,te.STREAM_READ),te.readPixels(ie,ue,le,oe,q.convert(gt),q.convert(xt),0);const Lt=V!==null?k.get(V).__webglFramebuffer:null;Te.bindFramebuffer(te.FRAMEBUFFER,Lt);const Xt=te.fenceSync(te.SYNC_GPU_COMMANDS_COMPLETE,0);return te.flush(),await Iy(te,Xt,4),te.bindBuffer(te.PIXEL_PACK_BUFFER,nt),te.getBufferSubData(te.PIXEL_PACK_BUFFER,0,He),te.deleteBuffer(nt),te.deleteSync(Xt),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,ie=null,ue=0){const le=Math.pow(2,-ue),oe=Math.floor(N.image.width*le),He=Math.floor(N.image.height*le),Ke=ie!==null?ie.x:0,Oe=ie!==null?ie.y:0;R.setTexture2D(N,0),te.copyTexSubImage2D(te.TEXTURE_2D,ue,0,0,Ke,Oe,oe,He),Te.unbindTexture()};const Zc=te.createFramebuffer(),Ha=te.createFramebuffer();this.copyTextureToTexture=function(N,ie,ue=null,le=null,oe=0,He=0){let Ke,Oe,et,rt,gt,xt,nt,Lt,Xt;const Jt=N.isCompressedTexture?N.mipmaps[He]:N.image;if(ue!==null)Ke=ue.max.x-ue.min.x,Oe=ue.max.y-ue.min.y,et=ue.isBox3?ue.max.z-ue.min.z:1,rt=ue.min.x,gt=ue.min.y,xt=ue.isBox3?ue.min.z:0;else{const $t=Math.pow(2,-oe);Ke=Math.floor(Jt.width*$t),Oe=Math.floor(Jt.height*$t),N.isDataArrayTexture?et=Jt.depth:N.isData3DTexture?et=Math.floor(Jt.depth*$t):et=1,rt=0,gt=0,xt=0}le!==null?(nt=le.x,Lt=le.y,Xt=le.z):(nt=0,Lt=0,Xt=0);const zt=q.convert(ie.format),dn=q.convert(ie.type);let je;ie.isData3DTexture?(R.setTexture3D(ie,0),je=te.TEXTURE_3D):ie.isDataArrayTexture||ie.isCompressedArrayTexture?(R.setTexture2DArray(ie,0),je=te.TEXTURE_2D_ARRAY):(R.setTexture2D(ie,0),je=te.TEXTURE_2D),Te.activeTexture(te.TEXTURE0),Te.pixelStorei(te.UNPACK_FLIP_Y_WEBGL,ie.flipY),Te.pixelStorei(te.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),Te.pixelStorei(te.UNPACK_ALIGNMENT,ie.unpackAlignment);const Pn=Te.getParameter(te.UNPACK_ROW_LENGTH),Mt=Te.getParameter(te.UNPACK_IMAGE_HEIGHT),qn=Te.getParameter(te.UNPACK_SKIP_PIXELS),Yn=Te.getParameter(te.UNPACK_SKIP_ROWS),bt=Te.getParameter(te.UNPACK_SKIP_IMAGES);Te.pixelStorei(te.UNPACK_ROW_LENGTH,Jt.width),Te.pixelStorei(te.UNPACK_IMAGE_HEIGHT,Jt.height),Te.pixelStorei(te.UNPACK_SKIP_PIXELS,rt),Te.pixelStorei(te.UNPACK_SKIP_ROWS,gt),Te.pixelStorei(te.UNPACK_SKIP_IMAGES,xt);const ar=N.isDataArrayTexture||N.isData3DTexture,kt=ie.isDataArrayTexture||ie.isData3DTexture;if(N.isDepthTexture){const $t=k.get(N),Ri=k.get(ie),Bt=k.get($t.__renderTarget),Pi=k.get(Ri.__renderTarget);Te.bindFramebuffer(te.READ_FRAMEBUFFER,Bt.__webglFramebuffer),Te.bindFramebuffer(te.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let ji=0;ji<et;ji++)ar&&(te.framebufferTextureLayer(te.READ_FRAMEBUFFER,te.COLOR_ATTACHMENT0,k.get(N).__webglTexture,oe,xt+ji),te.framebufferTextureLayer(te.DRAW_FRAMEBUFFER,te.COLOR_ATTACHMENT0,k.get(ie).__webglTexture,He,Xt+ji)),te.blitFramebuffer(rt,gt,Ke,Oe,nt,Lt,Ke,Oe,te.DEPTH_BUFFER_BIT,te.NEAREST);Te.bindFramebuffer(te.READ_FRAMEBUFFER,null),Te.bindFramebuffer(te.DRAW_FRAMEBUFFER,null)}else if(oe!==0||N.isRenderTargetTexture||k.has(N)){const $t=k.get(N),Ri=k.get(ie);Te.bindFramebuffer(te.READ_FRAMEBUFFER,Zc),Te.bindFramebuffer(te.DRAW_FRAMEBUFFER,Ha);for(let Bt=0;Bt<et;Bt++)ar?te.framebufferTextureLayer(te.READ_FRAMEBUFFER,te.COLOR_ATTACHMENT0,$t.__webglTexture,oe,xt+Bt):te.framebufferTexture2D(te.READ_FRAMEBUFFER,te.COLOR_ATTACHMENT0,te.TEXTURE_2D,$t.__webglTexture,oe),kt?te.framebufferTextureLayer(te.DRAW_FRAMEBUFFER,te.COLOR_ATTACHMENT0,Ri.__webglTexture,He,Xt+Bt):te.framebufferTexture2D(te.DRAW_FRAMEBUFFER,te.COLOR_ATTACHMENT0,te.TEXTURE_2D,Ri.__webglTexture,He),oe!==0?te.blitFramebuffer(rt,gt,Ke,Oe,nt,Lt,Ke,Oe,te.COLOR_BUFFER_BIT,te.NEAREST):kt?te.copyTexSubImage3D(je,He,nt,Lt,Xt+Bt,rt,gt,Ke,Oe):te.copyTexSubImage2D(je,He,nt,Lt,rt,gt,Ke,Oe);Te.bindFramebuffer(te.READ_FRAMEBUFFER,null),Te.bindFramebuffer(te.DRAW_FRAMEBUFFER,null)}else kt?N.isDataTexture||N.isData3DTexture?te.texSubImage3D(je,He,nt,Lt,Xt,Ke,Oe,et,zt,dn,Jt.data):ie.isCompressedArrayTexture?te.compressedTexSubImage3D(je,He,nt,Lt,Xt,Ke,Oe,et,zt,Jt.data):te.texSubImage3D(je,He,nt,Lt,Xt,Ke,Oe,et,zt,dn,Jt):N.isDataTexture?te.texSubImage2D(te.TEXTURE_2D,He,nt,Lt,Ke,Oe,zt,dn,Jt.data):N.isCompressedTexture?te.compressedTexSubImage2D(te.TEXTURE_2D,He,nt,Lt,Jt.width,Jt.height,zt,Jt.data):te.texSubImage2D(te.TEXTURE_2D,He,nt,Lt,Ke,Oe,zt,dn,Jt);Te.pixelStorei(te.UNPACK_ROW_LENGTH,Pn),Te.pixelStorei(te.UNPACK_IMAGE_HEIGHT,Mt),Te.pixelStorei(te.UNPACK_SKIP_PIXELS,qn),Te.pixelStorei(te.UNPACK_SKIP_ROWS,Yn),Te.pixelStorei(te.UNPACK_SKIP_IMAGES,bt),He===0&&ie.generateMipmaps&&te.generateMipmap(je),Te.unbindTexture()},this.initRenderTarget=function(N){k.get(N).__webglFramebuffer===void 0&&R.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?R.setTextureCube(N,0):N.isData3DTexture?R.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?R.setTexture2DArray(N,0):R.setTexture2D(N,0),Te.unbindTexture()},this.resetState=function(){$=0,J=0,V=null,Te.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return er}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}}class NE{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"threeCanvas");F(this,"scene");F(this,"camera");F(this,"renderer");F(this,"videoTexture",null);F(this,"videoElement",null);F(this,"plane",null);F(this,"time",0);F(this,"uniforms");F(this,"targetAmplitude",.3);F(this,"targetFrequency",100);F(this,"currentAmplitude",.3);F(this,"currentFrequency",100);F(this,"clapVibration",0);this.canvas=e,this.ctx=t,this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.scene=new us,this.camera=new za(-1,1,1,-1,0,1),this.renderer=new hs({canvas:this.threeCanvas,alpha:!1,antialias:!1}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const i=new kd(new Uint8Array([0,0,0,255]),1,1,xi);i.needsUpdate=!0,this.uniforms={uTime:{value:0},uTexture:{value:i},uAmplitude:{value:.3},uFrequency:{value:100},uColorIntensity:{value:.8},uColor1:{value:new Ye("#6366f1")},uColor2:{value:new Ye("#8b5cf6")},uColor3:{value:new Ye("#d946ef")},uColor4:{value:new Ye("#ec4899")},uColor5:{value:new Ye("#f43f5e")}};const s=new un({uniforms:this.uniforms,vertexShader:this.getVertexShader(),fragmentShader:this.getFragmentShader()}),o=new Tr(2,2);this.plane=new fn(o,s),this.scene.add(this.plane),console.log("🎥 DistortedCameraRenderer initialized")}setVideoElement(e){if(!e){console.warn("DistortedCameraRenderer: No video element provided");return}this.videoElement===e&&this.videoTexture||(this.videoElement=e,this.videoTexture&&this.videoTexture.dispose(),this.videoTexture=new _S(e),this.videoTexture.minFilter=xn,this.videoTexture.magFilter=xn,this.videoTexture.format=xi,this.uniforms.uTexture.value=this.videoTexture,console.log("✅ DistortedCameraRenderer: Video texture created"))}getVertexShader(){return`
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
    `}render(e,t,i){if(!this.plane)return;(this.canvas.width!==this.threeCanvas.width||this.canvas.height!==this.threeCanvas.height)&&(this.threeCanvas.width=this.canvas.width,this.threeCanvas.height=this.canvas.height,this.renderer.setSize(this.canvas.width,this.canvas.height)),this.time+=.016*si(),this.uniforms.uTime.value=this.time,t&&t.length>0&&(this.uniforms.uColor1.value.set(t[0]),this.uniforms.uColor2.value.set(t[1]||t[0]),this.uniforms.uColor3.value.set(t[2]||t[0]),this.uniforms.uColor4.value.set(t[3]||t[0]),this.uniforms.uColor5.value.set(t[4]||t[0]));const s=e.left,o=e.right;if(s||o)if(e.clapping)this.targetAmplitude=2,this.targetFrequency=300,this.clapVibration=1;else{const u=s||o;if(u){const d=50+Math.max(0,Math.min(1,u.position.x))*350,g=Math.max(0,Math.min(1,1-u.position.y))*1.5,m=u.fingerCount||0;u.gesture==="pinch"||m<=1?(this.targetAmplitude=g*.2,this.targetFrequency=d*.5):(this.targetAmplitude=g,this.targetFrequency=d)}}else this.targetAmplitude=.5,this.targetFrequency=150;this.currentAmplitude+=(this.targetAmplitude-this.currentAmplitude)*.1,this.currentFrequency+=(this.targetFrequency-this.currentFrequency)*.1,this.clapVibration*=.95;const c=this.currentAmplitude+this.clapVibration*Math.sin(this.time*50)*.5;this.uniforms.uAmplitude.value=c,this.uniforms.uFrequency.value=this.currentFrequency,this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){this.videoTexture&&this.videoTexture.dispose(),this.plane&&(this.plane.geometry.dispose(),this.plane.material instanceof Wi&&this.plane.material.dispose()),this.renderer.dispose(),this.renderer.forceContextLoss(),console.log("🎥 DistortedCameraRenderer destroyed")}}class UE{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"streams",[]);F(this,"vanishingPoint",{x:0,y:0});F(this,"targetVanishingPoint",{x:0,y:0});F(this,"vanishingPointRight",{x:0,y:0});F(this,"targetVanishingPointRight",{x:0,y:0});F(this,"scanLineOffset",0);F(this,"clapAccumulation",0);F(this,"shakeIntensity",0);F(this,"time",0);F(this,"lastFingerCount",5);this.canvas=e,this.ctx=t,this.vanishingPoint.x=e.width*.3,this.vanishingPoint.y=e.height/2,this.targetVanishingPoint.x=this.vanishingPoint.x,this.targetVanishingPoint.y=this.vanishingPoint.y,this.vanishingPointRight.x=e.width*.7,this.vanishingPointRight.y=e.height/2,this.targetVanishingPointRight.x=this.vanishingPointRight.x,this.targetVanishingPointRight.y=this.vanishingPointRight.y;for(let i=0;i<6;i++)this.streams.push({angle:i/6*Math.PI*2,speed:1,packets:[],branchLevel:0})}render(e,t){const{width:i,height:s}=this.canvas;this.time+=.016*si();const o=e.left,c=e.right,u=e.clapping||!1,h=e.clapIntensity||0;let d=1,p=1,g=5;o&&c?g=Math.floor(((o.fingerCount||5)+(c.fingerCount||5))/2):(o||c)&&(g=(o||c).fingerCount||5),this.lastFingerCount=g,g===1?(d=.003,p=.3):g===2?(d=.5,p=.7):(d=2,p=2.5),u?(this.clapAccumulation=Math.min(10,this.clapAccumulation+h*2),this.shakeIntensity=this.clapAccumulation*3,this.clapAccumulation>2&&Math.random()<.3&&this.spawnFractalBranch()):(this.clapAccumulation*=.98,this.shakeIntensity*=.9),o?(this.targetVanishingPoint.x=o.position.x*i,this.targetVanishingPoint.y=o.position.y*s):(this.targetVanishingPoint.x=i*.3,this.targetVanishingPoint.y=s/2),c?(this.targetVanishingPointRight.x=c.position.x*i,this.targetVanishingPointRight.y=c.position.y*s):(this.targetVanishingPointRight.x=i*.7,this.targetVanishingPointRight.y=s/2),this.vanishingPoint.x+=(this.targetVanishingPoint.x-this.vanishingPoint.x)*.05,this.vanishingPoint.y+=(this.targetVanishingPoint.y-this.vanishingPoint.y)*.05,this.vanishingPointRight.x+=(this.targetVanishingPointRight.x-this.vanishingPointRight.x)*.05,this.vanishingPointRight.y+=(this.targetVanishingPointRight.y-this.vanishingPointRight.y)*.05;let m=0,y=0;this.shakeIntensity>.5&&(m=(Math.random()-.5)*this.shakeIntensity,y=(Math.random()-.5)*this.shakeIntensity),this.ctx.fillStyle="rgba(0, 0, 0, 0.15)",this.ctx.fillRect(0,0,i,s),this.ctx.save(),this.ctx.translate(m,y),this.streams.forEach((_,S)=>{const b=.05*p*(_.branchLevel===0?1:.5);if(Math.random()<b){const C=["rect","hex","diamond"];_.packets.push({x:this.vanishingPoint.x,y:this.vanishingPoint.y,z:0,width:4+Math.random()*8,height:20+Math.random()*40,rotation:_.angle+(Math.random()-.5)*.3,rotationSpeed:(Math.random()-.5)*.02*d,streamIndex:S,age:0,hue:Math.random()*360,shimmerPhase:Math.random()*Math.PI*2,panelType:C[Math.floor(Math.random()*3)],waveAmplitude:Math.random()*10,waveFrequency:Math.random()*2+1,quantumPhase:Math.random()*Math.PI*2,particleCloud:[]})}_.packets=_.packets.filter(C=>{C.age+=.016*d,C.z+=.01*d*(1+_.branchLevel*.2),C.rotation+=C.rotationSpeed;const E=200*C.z,L=Math.sin(C.age*2+S)*30*C.z;return C.x=this.vanishingPoint.x+Math.cos(_.angle)*E+Math.sin(C.age*3)*L,C.y=this.vanishingPoint.y+Math.sin(_.angle)*E+Math.cos(C.age*2.5)*L,C.z<1&&C.x>-100&&C.x<i+100&&C.y>-100&&C.y<s+100})});const v=this.streams.flatMap(_=>_.packets);v.sort((_,S)=>_.z-S.z),v.forEach(_=>{const S=.2+_.z*.8,b=.3+_.z*.7,C=Math.sin(this.time*10+_.quantumPhase)*3*(1-_.z),E=Math.cos(_.age*_.waveFrequency)*C,L=Math.sin(_.age*_.waveFrequency)*C;this.ctx.save(),this.ctx.translate(_.x+E,_.y+L);const A=Math.floor(_.streamIndex%t.length),I=t[A],T=_.width*S,U=_.height*S;_.particleCloud.length<20&&Math.random()<.3&&_.particleCloud.push({dx:(Math.random()-.5)*T*2,dy:(Math.random()-.5)*U*2,life:1}),_.particleCloud=_.particleCloud.filter(D=>{if(D.life-=.02,D.life>0){const B=Math.sin(this.time*5+D.dx+D.dy)*.5+.5;return this.ctx.globalAlpha=b*D.life*.4*B,this.ctx.fillStyle=I,this.ctx.beginPath(),this.ctx.arc(D.dx,D.dy,1.5*S,0,Math.PI*2),this.ctx.fill(),!0}return!1}),this.ctx.globalAlpha=b*.8;const z=this.ctx.createRadialGradient(0,0,0,0,0,Math.max(T,U));z.addColorStop(0,this.addAlpha(I,.8)),z.addColorStop(.3,this.addAlpha(I,.4)),z.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.fillStyle=z,this.ctx.beginPath(),this.ctx.arc(0,0,Math.max(T,U),0,Math.PI*2),this.ctx.fill(),this.ctx.globalAlpha=b*.6,this.ctx.strokeStyle=I,this.ctx.lineWidth=1.5*S;for(let D=0;D<3;D++){this.ctx.beginPath();const B=D*Math.PI*.66,$=(this.time*50+_.age*30+B*20)%(Math.max(T,U)*2);$>0&&(this.ctx.globalAlpha=b*(1-$/(Math.max(T,U)*2))*.5,this.ctx.arc(0,0,$,0,Math.PI*2),this.ctx.stroke())}this.ctx.globalAlpha=b*.4,this.ctx.strokeStyle=I,this.ctx.lineWidth=.8*S;for(let D=0;D<6;D++){const B=D/6*Math.PI*2+this.time*.5,$=(Math.sin(this.time*2+D)*.5+1)*U*.8;this.ctx.beginPath(),this.ctx.moveTo(0,0);const J=Math.cos(B+.3)*$*.6,V=Math.sin(B+.3)*$*.6,Z=Math.cos(B)*$,K=Math.sin(B)*$;this.ctx.quadraticCurveTo(J,V,Z,K),this.ctx.stroke(),this.ctx.globalAlpha=b*.8,this.ctx.fillStyle=I,this.ctx.beginPath(),this.ctx.arc(Z,K,2*S,0,Math.PI*2),this.ctx.fill()}if(this.ctx.shadowBlur=20*S,this.ctx.shadowColor=I,this.ctx.globalAlpha=b,this.ctx.fillStyle=I,this.ctx.beginPath(),this.ctx.arc(0,0,3*S,0,Math.PI*2),this.ctx.fill(),this.ctx.shadowBlur=0,this.ctx.globalAlpha=b*.9,this.ctx.fillStyle="white",this.ctx.beginPath(),this.ctx.arc(0,0,1.5*S,0,Math.PI*2),this.ctx.fill(),Math.random()<.05){const D=Math.random()*Math.PI*2,B=Math.random()*Math.max(T,U)*1.5;this.ctx.globalAlpha=b*.6,this.ctx.strokeStyle=I,this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(Math.cos(D)*B,Math.sin(D)*B),this.ctx.stroke()}this.ctx.restore()}),this.ctx.globalAlpha=.05;for(let _=0;_<8;_++){const S=_/8*Math.PI*2,b=Math.max(i,s);this.ctx.strokeStyle=t[_%t.length]||"#00ffff",this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(this.vanishingPoint.x,this.vanishingPoint.y);const C=50;for(let E=0;E<=C;E++){const L=E/C,A=b*L,I=Math.sin(L*10+this.time*2)*20,T=this.vanishingPoint.x+Math.cos(S)*A+Math.cos(S+Math.PI/2)*I,U=this.vanishingPoint.y+Math.sin(S)*A+Math.sin(S+Math.PI/2)*I;E===0?this.ctx.moveTo(T,U):this.ctx.lineTo(T,U)}this.ctx.stroke()}for(let _=50;_<Math.max(i,s);_+=80){const S=_/100,b=Math.sin(this.time*2+S)*5;this.ctx.globalAlpha=.04,this.ctx.strokeStyle=t[Math.floor(S)%t.length]||"#00ffff",this.ctx.lineWidth=1,this.ctx.beginPath();const C=60;for(let E=0;E<=C;E++){const L=E/C*Math.PI*2,A=_+Math.sin(L*6+this.time*3)*b,I=this.vanishingPoint.x+Math.cos(L)*A,T=this.vanishingPoint.y+Math.sin(L)*A;E===0?this.ctx.moveTo(I,T):this.ctx.lineTo(I,T)}this.ctx.closePath(),this.ctx.stroke()}this.ctx.restore(),this.ctx.globalAlpha=.02;for(let _=0;_<100;_++){const S=Math.random()*i,b=Math.random()*s;Math.sin(this.time*20+_)*.5+.5>.7&&(this.ctx.fillStyle=t[_%t.length]||"#00ffff",this.ctx.beginPath(),this.ctx.arc(S,b,1,0,Math.PI*2),this.ctx.fill())}if(this.shakeIntensity>5){this.ctx.globalCompositeOperation="screen";for(let _=0;_<3;_++){this.ctx.globalAlpha=.05;const S=this.ctx.createRadialGradient(this.vanishingPoint.x,this.vanishingPoint.y,0,this.vanishingPoint.x,this.vanishingPoint.y,Math.max(i,s)*(.3+_*.2)),b=(this.time*100+_*120)%360;S.addColorStop(0,`hsla(${b}, 100%, 50%, 0.3)`),S.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.fillStyle=S,this.ctx.fillRect(0,0,i,s)}this.ctx.globalCompositeOperation="source-over"}const w=(_,S,b,C,E)=>{const L=5+Math.sin(this.time*4)*3,A=t[b]||"#00ffff";for(let T=0;T<3;T++){const U=L*(2+T),z=.3-T*.1;this.ctx.globalAlpha=z,this.ctx.strokeStyle=A,this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.arc(_,S,U,this.time*(1+T*.5),this.time*(1+T*.5)+Math.PI*1.5),this.ctx.stroke()}const I=this.ctx.createRadialGradient(_,S,0,_,S,L*4);if(I.addColorStop(0,this.addAlpha(A,.9)),I.addColorStop(.5,this.addAlpha(A,.5)),I.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.globalAlpha=.9,this.ctx.fillStyle=I,this.ctx.beginPath(),this.ctx.arc(_,S,L*4,0,Math.PI*2),this.ctx.fill(),this.ctx.globalAlpha=1,this.ctx.fillStyle="white",this.ctx.shadowBlur=15,this.ctx.shadowColor=A,this.ctx.beginPath(),this.ctx.arc(_,S,L,0,Math.PI*2),this.ctx.fill(),this.ctx.shadowBlur=0,this.clapAccumulation>.5){const T=this.clapAccumulation/10;for(let U=0;U<5;U++){const z=(this.time*3+U*.5)%2,D=20+z*100+this.clapAccumulation*20,B=(1-z/2)*T;this.ctx.globalAlpha=B*.5,this.ctx.strokeStyle=t[U%t.length]||"#00ffff",this.ctx.lineWidth=3,this.ctx.beginPath(),this.ctx.arc(_,S,D,0,Math.PI*2),this.ctx.stroke()}for(let U=0;U<Math.floor(this.clapAccumulation*5);U++){const z=U/(this.clapAccumulation*5)*Math.PI*2,D=30+Math.sin(this.time*5+U)*20,B=_+Math.cos(z+this.time*2)*D,$=S+Math.sin(z+this.time*2)*D;this.ctx.globalAlpha=T*.7,this.ctx.fillStyle=t[U%t.length]||"#00ffff",this.ctx.beginPath(),this.ctx.arc(B,$,2,0,Math.PI*2),this.ctx.fill()}}if(C){this.ctx.globalAlpha=1,this.ctx.fillStyle="white",this.ctx.font="12px monospace",this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.shadowBlur=8,this.ctx.shadowColor="rgba(0, 0, 0, 0.8)";const T=`X:${Math.floor(_)} Y:${Math.floor(S)}`;this.ctx.fillText(T,_,S-8);const U=new Date,z=U.toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric"}),D=U.toLocaleTimeString("en-US",{hour12:!1}),B=`${z} - ${D}`;this.ctx.fillText(B,_,S+8),this.ctx.shadowBlur=0}};w(this.vanishingPoint.x,this.vanishingPoint.y,0,!!o),c&&w(this.vanishingPointRight.x,this.vanishingPointRight.y,1,!0)}spawnFractalBranch(){if(this.streams.length>30)return;const e=this.streams[Math.floor(Math.random()*Math.min(6,this.streams.length))],t=e.angle+(Math.random()-.5)*.8;this.streams.push({angle:t,speed:1.2,packets:[],branchLevel:(e.branchLevel||0)+1,parentAngle:e.angle})}drawHexagon(e,t,i){this.ctx.beginPath();for(let s=0;s<6;s++){const o=Math.PI/3*s,c=e+i*Math.cos(o),u=t+i*Math.sin(o);s===0?this.ctx.moveTo(c,u):this.ctx.lineTo(c,u)}this.ctx.closePath()}addAlpha(e,t){if(e.startsWith("#")){const i=parseInt(e.slice(1,3),16),s=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16);return`rgba(${i}, ${s}, ${o}, ${t})`}return e}}class FE{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"particles",[]);F(this,"config",{baseSize:1.5,gridSpacing:8,distortionRadius:200,distortionStrength:0,friction:.9,ease:.1});F(this,"faceData",[[60,100,1],[70,100,1],[50,110,1],[60,110,1],[70,110,1],[80,110,1],[40,120,1],[50,120,2],[60,120,1],[70,120,1],[80,120,2],[90,120,1],[40,130,2],[50,130,3],[60,130,1],[70,130,1],[80,130,3],[90,130,2],[30,140,2],[40,140,3],[50,140,4],[60,140,1],[70,140,1],[80,140,4],[90,140,3],[100,140,2],[20,150,2],[30,150,3],[40,150,3],[50,150,3],[60,150,1],[70,150,1],[80,150,3],[90,150,3],[100,150,3],[110,150,2],[30,160,2],[40,160,3],[50,160,2],[80,160,2],[90,160,3],[100,160,2],[40,170,2],[50,170,2],[80,170,2],[90,170,2],[40,180,1],[50,180,1],[80,180,1],[90,180,1],[40,190,1],[50,190,2],[80,190,2],[90,190,1],[50,200,2],[80,200,2],[50,210,1],[60,210,1],[70,210,1],[80,210,1],[50,220,1],[60,220,2],[70,220,2],[80,220,1],[60,230,3],[70,230,3],[60,240,4],[70,240,4],[60,250,3],[70,250,3],[60,260,2],[70,260,2]]);this.canvas=e,this.ctx=t,this.createParticles()}createParticles(){this.particles=[];const e=this.canvas.width/2,t=this.canvas.height/2,i=275,s=14,o=1.2,c=this.config.baseSize*o;for(let u=t-i;u<t+i;u+=s)for(let h=e-i;h<e+i;h+=s)Math.sqrt((h-e)**2+(u-t)**2)<i&&this.particles.push({originX:h,originY:u,x:h,y:u,vx:0,vy:0,intensity:o,size:c,currentSize:c})}render(e,t){var c,u;t[1]&&(t[1].toLowerCase()==="#ffffff"||t[1].toLowerCase()==="#fff")?this.ctx.fillStyle="#000000":this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);const s=e.left||e.right;if(s){const h=(((c=s.position)==null?void 0:c.x)||.5)*this.canvas.width,d=(((u=s.position)==null?void 0:u.y)||.5)*this.canvas.height;let p=0;const g=s.fingerCount||2;s.gesture==="pinch"||g===1?p=5:g===2?p=20:g>=5?p=50:p=15+(g-2)*10,this.config.distortionStrength+=(p-this.config.distortionStrength)*.1,this.particles.forEach(m=>{const y=h-m.x,v=d-m.y,w=Math.sqrt(y*y+v*v);if(w<this.config.distortionRadius){const b=(this.config.distortionRadius-w)/this.config.distortionRadius,C=Math.atan2(v,y),E=Math.cos(C)*b*this.config.distortionStrength,L=Math.sin(C)*b*this.config.distortionStrength;m.vx-=E,m.vy-=L,m.currentSize=m.size+b*4*Math.abs(this.config.distortionStrength/10)}else m.currentSize=m.size;const _=m.originX-m.x,S=m.originY-m.y;m.vx+=_*this.config.ease,m.vy+=S*this.config.ease,m.vx*=this.config.friction,m.vy*=this.config.friction,m.x+=m.vx,m.y+=m.vy})}else this.config.distortionStrength*=.9,this.particles.forEach(h=>{const d=h.originX-h.x,p=h.originY-h.y;h.vx+=d*this.config.ease,h.vy+=p*this.config.ease,h.vx*=this.config.friction,h.vy*=this.config.friction,h.x+=h.vx,h.y+=h.vy,h.currentSize=h.size});if(e.clapping){const h=this.canvas.width/2,d=this.canvas.height/2;this.particles.forEach(p=>{const g=p.x-h,m=p.y-d,y=Math.sqrt(g*g+m*m),v=30;p.vx+=g/(y+1)*v,p.vy+=m/(y+1)*v})}const o=t[0]||"#FFFFFF";this.particles.forEach(h=>{this.ctx.fillStyle=o,this.ctx.globalAlpha=.85;const d=Math.max(.5,h.currentSize);this.ctx.fillRect(h.x-d/2,h.y-d/2,d,d)}),this.ctx.globalAlpha=1}}const cn=class cn{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"faceLandmarker",null);F(this,"isLoading",!0);F(this,"lastVideoTime",-1);F(this,"results");F(this,"video",null);F(this,"hasFailed",!1);F(this,"isLocalInitializing",!1);F(this,"drawingUtils",null);F(this,"initAttempts",0);F(this,"maxInitAttempts",60);F(this,"FACE_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,129],[129,49],[49,209],[131,29],[29,52],[52,131],[43,106],[106,204],[204,43],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[33,168],[168,8],[8,33],[228,117],[117,31],[31,228],[107,189],[189,55],[55,107],[126,217],[217,1],[1,126],[233,79],[79,218],[218,233],[35,154],[154,26],[26,35],[125,129],[129,49],[49,125],[52,131],[131,29],[29,52],[169,106],[106,43],[43,169],[6,74],[74,184],[184,6],[191,80],[80,183],[183,191],[43,106],[106,204],[204,43]]);this.canvas=e,this.ctx=t,console.log("👤 FaceRenderer initialized"),this.initializeMediaPipe()}async initializeMediaPipe(){if(!(this.isLocalInitializing||this.hasFailed)){this.isLocalInitializing=!0;try{if(this.initAttempts++,this.video=document.querySelector("video"),!this.video||!this.video.srcObject){this.isLocalInitializing=!1,this.initAttempts<this.maxInitAttempts?setTimeout(()=>this.initializeMediaPipe(),1e3):(console.error("❌ Max retry attempts reached."),this.hasFailed=!0,this.isLoading=!1);return}if(cn.isGlobalInitializing){console.log("⏳ Waiting for global init..."),this.isLocalInitializing=!1,setTimeout(()=>this.initializeMediaPipe(),500);return}if(!cn.filesetResolver){cn.isGlobalInitializing=!0,console.log("📦 Loading MediaPipe modules...");const t=await cx(()=>import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14"),[],import.meta.url);cn.faceLandmarkerClass=t.FaceLandmarker,cn.drawingUtilsClass=t.DrawingUtils,cn.filesetResolver=await t.FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm"),console.log("🔧 WASM initialized"),cn.isGlobalInitializing=!1}const e="https://raw.githubusercontent.com/NPC-88/3dfiles/9d9b1c903c6397d41d71ad993f114bbce9fe5db6/face_landmarker.task";if(!this.faceLandmarker)try{this.faceLandmarker=await cn.faceLandmarkerClass.createFromOptions(cn.filesetResolver,{baseOptions:{modelAssetPath:e,delegate:"GPU"},outputFaceBlendshapes:!1,outputFacialTransformationMatrixes:!1,runningMode:"VIDEO",numFaces:1}),console.log("✅ Face tracking initialized (GPU)")}catch{console.warn("GPU failed, trying CPU..."),this.faceLandmarker=await cn.faceLandmarkerClass.createFromOptions(cn.filesetResolver,{baseOptions:{modelAssetPath:e,delegate:"CPU"},outputFaceBlendshapes:!1,outputFacialTransformationMatrixes:!1,runningMode:"VIDEO",numFaces:1}),console.log("✅ Face tracking initialized (CPU)")}cn.drawingUtilsClass&&(this.drawingUtils=new cn.drawingUtilsClass(this.ctx)),this.isLoading=!1,this.isLocalInitializing=!1}catch(e){console.error("❌ Failed to initialize MediaPipe:",e),this.hasFailed=!0,this.isLoading=!1,this.isLocalInitializing=!1,cn.isGlobalInitializing=!1}}}render(e,t,i){if(this.hasFailed){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#ff4444",this.ctx.font="18px monospace",this.ctx.textAlign="center",this.ctx.fillText("Initialization Failed",this.canvas.width/2,this.canvas.height/2),this.ctx.font="14px monospace",this.ctx.fillStyle="#ff8888",this.ctx.fillText("Refresh the page to try again",this.canvas.width/2,this.canvas.height/2+30);return}if(this.isLoading){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#666666",this.ctx.font="20px monospace",this.ctx.textAlign="center",this.ctx.fillText("Initializing Face Model...",this.canvas.width/2,this.canvas.height/2),this.ctx.font="14px monospace",this.ctx.fillStyle="#888888",this.ctx.fillText("Press Q to enable camera if needed",this.canvas.width/2,this.canvas.height/2+30);return}if(!this.faceLandmarker||!this.video||!this.drawingUtils){if(!this.isLocalInitializing&&!this.hasFailed){const p=document.querySelector("video");p&&p.srcObject&&(console.log("📹 Video found during render, triggering init once..."),this.initializeMediaPipe())}this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#666666",this.ctx.font="18px monospace",this.ctx.textAlign="center",this.ctx.fillText("Waiting for camera...",this.canvas.width/2,this.canvas.height/2),this.ctx.font="14px monospace",this.ctx.fillStyle="#888888",this.ctx.fillText("Press Q to enable camera",this.canvas.width/2,this.canvas.height/2+30);return}const s=performance.now();if(this.lastVideoTime!==this.video.currentTime){this.lastVideoTime=this.video.currentTime;try{this.results=this.faceLandmarker.detectForVideo(this.video,s)}catch(p){console.error("Face detection error:",p)}}this.ctx.save(),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);const o=performance.now(),c=Math.abs(Math.sin(o*.002)),u=.1+.6*c,h=15*c,d=t[0]||"#00d2ff";if(this.results&&this.results.faceLandmarks&&this.results.faceLandmarks.length>0)for(const p of this.results.faceLandmarks)this.ctx.shadowColor=d,this.ctx.shadowBlur=h,this.drawingUtils.drawConnectors(p,cn.faceLandmarkerClass.FACE_LANDMARKS_TESSELATION,{color:`rgba(255, 255, 255, ${u})`,lineWidth:1}),this.ctx.shadowBlur=0;else this.ctx.fillStyle="#666666",this.ctx.font="16px monospace",this.ctx.textAlign="center",this.ctx.fillText("No Face Detected",this.canvas.width/2,this.canvas.height/2),this.ctx.font="12px monospace",this.ctx.fillStyle="#888888",this.ctx.fillText("Position your face in front of the camera",this.canvas.width/2,this.canvas.height/2+25);this.ctx.restore()}resize(e,t){}destroy(){this.faceLandmarker&&(this.faceLandmarker.close(),this.faceLandmarker=null),console.log("👤 FaceRenderer destroyed")}};F(cn,"filesetResolver",null),F(cn,"faceLandmarkerClass",null),F(cn,"drawingUtilsClass",null),F(cn,"isGlobalInitializing",!1);let pd=cn;function Yc(a,e){a.traverse(t=>{if(t instanceof fn||t instanceof wr||t instanceof Ix){t.geometry.dispose();const i=t.material;Array.isArray(i)?i.forEach(s=>s.dispose()):i.dispose()}}),a.clear(),e.dispose(),e.forceContextLoss()}class DE{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"threeCanvas");F(this,"scene");F(this,"camera");F(this,"renderer");F(this,"sphere");F(this,"particleMesh");F(this,"pointLight");F(this,"pointLight2");F(this,"originalPositions",[]);F(this,"time",0);F(this,"handX",.5);F(this,"handY",.5);F(this,"pinchDistance",1);F(this,"SPHERE_RADIUS",1.5);F(this,"DETAIL",4);F(this,"CHAOS_MULTIPLIER",1.5);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances of Three")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.initThreeJS(),console.log("🌐 MorphingSphereRenderer initialized with Three.js"),console.warn=i}initThreeJS(){this.scene=new us,this.scene.fog=new Xo(0,.05),this.camera=new Rn(75,this.canvas.width/this.canvas.height,.1,1e3),this.camera.position.set(0,0,5),this.camera.lookAt(0,0,0),this.renderer=new hs({canvas:this.threeCanvas,antialias:!0,alpha:!0}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=new zx(4210752);this.scene.add(e),this.pointLight=new zc(65484,2,50),this.pointLight.position.set(5,5,5),this.scene.add(this.pointLight),this.pointLight2=new zc(3342591,2,50),this.pointLight2.position.set(-5,-5,5),this.scene.add(this.pointLight2);const t=new Bd(this.SPHERE_RADIUS,this.DETAIL),i=t.attributes.position;for(let d=0;d<i.count;d++)this.originalPositions.push(new Q(i.getX(d),i.getY(d),i.getZ(d)));const s=new Dx({color:1118481,wireframe:!0,emissive:3342591,emissiveIntensity:.5,roughness:.4,metalness:.8});this.sphere=new fn(t,s),this.scene.add(this.sphere);const o=new hn,c=1e3,u=new Float32Array(c*3);for(let d=0;d<c*3;d++)u[d]=(Math.random()-.5)*20;o.setAttribute("position",new Sn(u,3));const h=new as({size:.02,color:16777215,transparent:!0,opacity:.5});this.particleMesh=new wr(o,h),this.scene.add(this.particleMesh)}noise(e,t,i){return Math.sin(e)*Math.cos(t)*Math.sin(i)}calculatePinch(e){if(!e||!e.landmarks)return 1;const t=e.landmarks[4],i=e.landmarks[8],s=Math.sqrt(Math.pow(t.x-i.x,2)+Math.pow(t.y-i.y,2));return Math.min(Math.max((s-.02)*5,0),1)}updateState(e){const t=e.left,i=e.right,s=this.calculatePinch(t),o=this.calculatePinch(i),u=Math.min(s,o);this.pinchDistance+=(u-this.pinchDistance)*.1;let h=.5,d=.5;t&&t.position?(h=t.position.x,d=t.position.y):i&&i.position&&(h=i.position.x,d=i.position.y),this.handX+=(h-this.handX)*.1,this.handY+=(d-this.handY)*.1,!t&&!i&&(this.handX+=(.5-this.handX)*.05,this.handY+=(.5-this.handY)*.05,this.pinchDistance+=(1-this.pinchDistance)*.05)}render(e,t){this.time+=.02*si(),this.updateState(e);const i=this.renderer.getPixelRatio(),s=Math.floor(this.canvas.width*i),o=Math.floor(this.canvas.height*i);(this.threeCanvas.width!==s||this.threeCanvas.height!==o)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=s,this.threeCanvas.height=o,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix()),this.renderer.clear();const c=(this.handX-.5)*4,u=(.5-this.handY)*3;this.sphere.position.x+=(c-this.sphere.position.x)*.15,this.sphere.position.y+=(u-this.sphere.position.y)*.15;const h=(this.handY-.5)*2,d=(this.handX-.5)*2;this.sphere.rotation.x+=(h-this.sphere.rotation.x)*.05,this.sphere.rotation.y+=(d-this.sphere.rotation.y)*.05,this.sphere.rotation.z+=.005;const p=this.sphere.geometry.attributes.position,g=(1-this.pinchDistance)*this.CHAOS_MULTIPLIER,m=Math.sin(this.time)*.1;for(let v=0;v<p.count;v++){const w=this.originalPositions[v],_=this.noise(w.x*2+this.time,w.y*2+this.time,w.z*2),S=1+m+_*g;p.setXYZ(v,w.x*S,w.y*S,w.z*S)}p.needsUpdate=!0;const y=this.sphere.material;if(t&&t.length>0)try{const v=new Ye(t[0]),w=new Ye(t[0]);y.color=v,y.emissive=w.multiplyScalar(.3+g*.4);const _=new Ye(t[0]),S=t.length>1?new Ye(t[1]):new Ye(t[0]);this.pointLight.color=_,this.pointLight2.color=S}catch{y.color.setHex(65484),y.emissive.setHex(13107),this.pointLight.color.setHex(65484),this.pointLight2.color.setHex(3342591)}else y.color.setHex(65484),y.emissive.setHex(13107),this.pointLight.color.setHex(65484),this.pointLight2.color.setHex(3342591);this.pointLight.position.x=(this.handX-.5)*10,this.pointLight.position.y=(.5-this.handY)*10,this.particleMesh.rotation.y=-this.time*.1,this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){Yc(this.scene,this.renderer)}}class kE{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"threeCanvas");F(this,"scene");F(this,"camera");F(this,"renderer");F(this,"instancedMesh");F(this,"gridWidth");F(this,"gridHeight");F(this,"cubePositions",[]);F(this,"time",0);F(this,"hands",[]);F(this,"speedMultiplier",1);F(this,"handsTogetherBoost",1);F(this,"currentFingerMode","slow");F(this,"GRID_WIDTH",120);F(this,"GRID_HEIGHT",90);F(this,"SPACING",.12);F(this,"WAVE_AMPLITUDE",2.5);F(this,"CUBE_SIZE",.03);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances of Three")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.gridWidth=this.GRID_WIDTH,this.gridHeight=this.GRID_HEIGHT,this.initThreeJS(),console.log("🧊 CubeWallRenderer initialized with Three.js"),console.warn=i}initThreeJS(){this.scene=new us,this.scene.background=new Ye(0),this.camera=new Rn(60,this.canvas.width/this.canvas.height,.1,100),this.camera.position.set(0,0,4.5),this.camera.lookAt(0,0,0),this.renderer=new hs({canvas:this.threeCanvas,antialias:!0,alpha:!1}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=new zx(2105376,.3);this.scene.add(e);const t=new of(16777215,.8);t.position.set(3,5,8),this.scene.add(t);const i=new of(4474111,.4);i.position.set(-5,-3,5),this.scene.add(i);const s=new zc(65484,.6,50);s.position.set(5,5,5),this.scene.add(s);const o=new Oa(this.CUBE_SIZE,this.CUBE_SIZE,this.CUBE_SIZE),c=new Dx({color:65535,emissive:8738,emissiveIntensity:.2,metalness:.6,roughness:.4,flatShading:!0}),u=this.gridWidth*this.gridHeight;this.instancedMesh=new mS(o,c,u),this.scene.add(this.instancedMesh);const h=new vn;let d=0;for(let p=0;p<this.gridHeight;p++)for(let g=0;g<this.gridWidth;g++){const m=(g-this.gridWidth/2)*this.SPACING,y=(p-this.gridHeight/2)*this.SPACING,v=0;this.cubePositions.push(new Q(m,y,v)),h.position.set(m,y,v),h.updateMatrix(),this.instancedMesh.setMatrixAt(d,h.matrix),d++}this.instancedMesh.instanceMatrix.needsUpdate=!0}getFingerSpeedMultiplier(e){if(!e||!e.fingerCount)return 0;const t=e.fingerCount;return t<=1?.05:t===2?.3:t>=5?1.5:.3+(t-2)/3*1.2}updateHandData(e){this.hands=[];let t=1;if(e.left){const s=this.getFingerSpeedMultiplier(e.left);t=Math.max(t,s),this.hands.push({x:e.left.position.x,y:1-e.left.position.y,intensity:1,fingerCount:e.left.fingerCount||0})}if(e.right){const s=this.getFingerSpeedMultiplier(e.right);t=Math.max(t,s),this.hands.push({x:e.right.position.x,y:1-e.right.position.y,intensity:1,fingerCount:e.right.fingerCount||0})}this.speedMultiplier+=(t-this.speedMultiplier)*.1;const i=e.clapping||e.distanceBetweenHands&&e.distanceBetweenHands<.15?3:1;if(this.handsTogetherBoost+=(i-this.handsTogetherBoost)*.15,this.hands.length>0){const s=this.hands.reduce((o,c)=>o+c.fingerCount,0);s<=1?this.currentFingerMode="pinch":s>=5?this.currentFingerMode="fast":this.currentFingerMode="slow"}}calculateDisplacement(e,t){let i=0;const s=Math.sin(e*8+this.time)*Math.cos(t*8+this.time)*.05;i+=s;for(const o of this.hands){const c=(o.x-.5)*this.gridWidth*this.SPACING*.8,u=(o.y-.5)*this.gridHeight*this.SPACING*.8,h=e-c,d=t-u,p=Math.sqrt(h*h+d*d),g=Math.sin(p*6-this.time*4)/(p*.5+.5);i+=g*o.intensity*this.WAVE_AMPLITUDE}return i*=this.speedMultiplier*this.handsTogetherBoost,i}render(e,t){this.time+=.016*this.speedMultiplier*si(),this.updateHandData(e);const i=this.renderer.getPixelRatio(),s=Math.floor(this.canvas.width*i),o=Math.floor(this.canvas.height*i);(this.threeCanvas.width!==s||this.threeCanvas.height!==o)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=s,this.threeCanvas.height=o,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix());const c=new vn;let u=0,h=.5,d=.2;this.currentFingerMode==="pinch"?(h=.02,d=.01):this.currentFingerMode==="slow"?(h=.5,d=.25):this.currentFingerMode==="fast"&&(h=.9,d=.4);for(let p=0;p<this.gridHeight;p++)for(let g=0;g<this.gridWidth;g++){const m=this.cubePositions[u],y=this.calculateDisplacement(m.x,m.y);c.position.set(m.x,m.y,m.z+y),c.rotation.x=y*h,c.rotation.y=y*h*.7,c.rotation.z=y*h*.4;const v=1+Math.abs(y)*d;c.scale.set(v,v,v),c.updateMatrix(),this.instancedMesh.setMatrixAt(u,c.matrix),u++}if(this.instancedMesh.instanceMatrix.needsUpdate=!0,t&&t.length>0)try{const p=this.instancedMesh.material,g=new Ye(t[0]);if(p.color=g,p.emissive=new Ye(t[0]).multiplyScalar(.3),t.length>1){const m=this.scene.children.find(v=>v instanceof of&&v.position.x<0),y=this.scene.children.find(v=>v instanceof zc);m&&(m.color=new Ye(t[1])),y&&(y.color=new Ye(t.length>2?t[2]:t[1]))}}catch{const g=this.instancedMesh.material;g.color.setHex(65535),g.emissive.setHex(13107)}this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){Yc(this.scene,this.renderer)}}const Rc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class jo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const OE=new za(-1,1,1,-1,0,1);class zE extends hn{constructor(){super(),this.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qt([0,2,0,0,2,0],2))}}const BE=new zE;class Yx{constructor(e){this._mesh=new fn(BE,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,OE)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class HE extends jo{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof un?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Oc.clone(e.uniforms),this.material=new un({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Yx(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Hg extends jo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let c,u;this.inverse?(c=0,u=1):(c=1,u=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,c,4294967295),o.buffers.stencil.setClear(u),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class VE extends jo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class $x{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ct);this._width=i.width,this._height=i.height,t=new ii(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new HE(Rc),this.copyPass.material.blending=nr,this.timer=new DS}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,o=this.passes.length;s<o;s++){const c=this.passes[s];if(c.enabled!==!1){if(c.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),c.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),c.needsSwap){if(i){const u=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(u.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(u.EQUAL,1,4294967295)}this.swapBuffers()}Hg!==void 0&&(c instanceof Hg?i=!0:c instanceof VE&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ct);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Kx extends jo{constructor(e,t,i=null,s=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ye}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let o,c;this.overrideMaterial!==null&&(c=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=c),e.autoClear=s}}const GE={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ye(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Os extends jo{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ct(e.x,e.y):new ct(256,256),this.clearColor=new Ye(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);this.renderTargetBright=new ii(o,c,{type:vi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let p=0;p<this.nMips;p++){const g=new ii(o,c,{type:vi});g.texture.name="UnrealBloomPass.h"+p,g.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(g);const m=new ii(o,c,{type:vi});m.texture.name="UnrealBloomPass.v"+p,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),o=Math.round(o/2),c=Math.round(c/2)}const u=GE;this.highPassUniforms=Oc.clone(u.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new un({uniforms:this.highPassUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader}),this.separableBlurMaterials=[];const h=[6,10,14,18,22];o=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);for(let p=0;p<this.nMips;p++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(h[p])),this.separableBlurMaterials[p].uniforms.invSize.value=new ct(1/o,1/c),o=Math.round(o/2),c=Math.round(c/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const d=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=d,this.bloomTintColors=[new Q(1,1,1),new Q(1,1,1),new Q(1,1,1),new Q(1,1,1),new Q(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Oc.clone(Rc.uniforms),this.blendMaterial=new un({uniforms:this.copyUniforms,vertexShader:Rc.vertexShader,fragmentShader:Rc.fragmentShader,premultipliedAlpha:!0,blending:La,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ye,this._oldClearAlpha=1,this._basic=new Xc,this._fsQuad=new Yx(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,s),this.renderTargetsVertical[o].setSize(i,s),this.separableBlurMaterials[o].uniforms.invSize.value=new ct(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,o){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const c=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let u=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this._fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=u.texture,this.separableBlurMaterials[h].uniforms.direction.value=Os.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[h]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=Os.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[h]),e.clear(),this._fsQuad.render(e),u=this.renderTargetsVertical[h];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=c}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new un({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ct(.5,.5)},direction:{value:new ct(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new un({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Os.BlurDirectionX=new ct(1,0);Os.BlurDirectionY=new ct(0,1);const WE=/^[og]\s*(.+)?/,XE=/^mtllib /,jE=/^usemtl /,qE=/^usemap /,Vg=/\s+/,Gg=new Q,pf=new Q,Wg=new Q,Xg=new Q,Ti=new Q,Mc=new Ye;function YE(){const a={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,o){const c=this._finalize(!1);c&&(c.inherited||c.groupCount<=0)&&this.materials.splice(c.index,1);const u={index:this.materials.length,name:s||"",mtllib:Array.isArray(o)&&o.length>0?o[o.length-1]:"",smooth:c!==void 0?c.smooth:this.smooth,groupStart:c!==void 0?c.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(h){const d={index:typeof h=="number"?h:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return d.clone=this.clone.bind(d),d}};return this.materials.push(u),u},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const o=this.currentMaterial();if(o&&o.groupEnd===-1&&(o.groupEnd=this.geometry.vertices.length/3,o.groupCount=o.groupEnd-o.groupStart,o.inherited=!1),s&&this.materials.length>1)for(let c=this.materials.length-1;c>=0;c--)this.materials[c].groupCount<=0&&this.materials.splice(c,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),o}},i&&i.name&&typeof i.clone=="function"){const s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const s=this.vertices,o=this.object.geometry.vertices;o.push(s[e+0],s[e+1],s[e+2]),o.push(s[t+0],s[t+1],s[t+2]),o.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const s=this.normals,o=this.object.geometry.normals;o.push(s[e+0],s[e+1],s[e+2]),o.push(s[t+0],s[t+1],s[t+2]),o.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(e,t,i){const s=this.vertices,o=this.object.geometry.normals;Gg.fromArray(s,e),pf.fromArray(s,t),Wg.fromArray(s,i),Ti.subVectors(Wg,pf),Xg.subVectors(Gg,pf),Ti.cross(Xg),Ti.normalize(),o.push(Ti.x,Ti.y,Ti.z),o.push(Ti.x,Ti.y,Ti.z),o.push(Ti.x,Ti.y,Ti.z)},addColor:function(e,t,i){const s=this.colors,o=this.object.geometry.colors;s[e]!==void 0&&o.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&o.push(s[t+0],s[t+1],s[t+2]),s[i]!==void 0&&o.push(s[i+0],s[i+1],s[i+2])},addUV:function(e,t,i){const s=this.uvs,o=this.object.geometry.uvs;o.push(s[e+0],s[e+1]),o.push(s[t+0],s[t+1]),o.push(s[i+0],s[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,s,o,c,u,h,d){const p=this.vertices.length;let g=this.parseVertexIndex(e,p),m=this.parseVertexIndex(t,p),y=this.parseVertexIndex(i,p);if(this.addVertex(g,m,y),this.addColor(g,m,y),u!==void 0&&u!==""){const v=this.normals.length;g=this.parseNormalIndex(u,v),m=this.parseNormalIndex(h,v),y=this.parseNormalIndex(d,v),this.addNormal(g,m,y)}else this.addFaceNormal(g,m,y);if(s!==void 0&&s!==""){const v=this.uvs.length;g=this.parseUVIndex(s,v),m=this.parseUVIndex(o,v),y=this.parseUVIndex(c,v),this.addUV(g,m,y),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,s=e.length;i<s;i++){const o=this.parseVertexIndex(e[i],t);this.addVertexPoint(o),this.addColor(o)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,s=this.uvs.length;for(let o=0,c=e.length;o<c;o++)this.addVertexLine(this.parseVertexIndex(e[o],i));for(let o=0,c=t.length;o<c;o++)this.addUVLine(this.parseUVIndex(t[o],s))}};return a.startObject("",!1),a}class $E extends Vd{constructor(e){super(e),this.materials=null}load(e,t,i,s){const o=this,c=new LS(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{t(o.parse(u))}catch(h){s?s(h):console.error(h),o.manager.itemError(e)}},i,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new YE;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let s=[];for(let u=0,h=i.length;u<h;u++){const d=i[u].trimStart();if(d.length===0)continue;const p=d.charAt(0);if(p!=="#")if(p==="v"){const g=d.split(Vg);switch(g[0]){case"v":t.vertices.push(parseFloat(g[1]),parseFloat(g[2]),parseFloat(g[3])),g.length>=7?(Mc.setRGB(parseFloat(g[4]),parseFloat(g[5]),parseFloat(g[6]),mi),t.colors.push(Mc.r,Mc.g,Mc.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(g[1]),parseFloat(g[2]),parseFloat(g[3]));break;case"vt":t.uvs.push(parseFloat(g[1]),parseFloat(g[2]));break}}else if(p==="f"){const m=d.slice(1).trim().split(Vg),y=[];for(let w=0,_=m.length;w<_;w++){const S=m[w];if(S.length>0){const b=S.split("/");y.push(b)}}const v=y[0];for(let w=1,_=y.length-1;w<_;w++){const S=y[w],b=y[w+1];t.addFace(v[0],S[0],b[0],v[1],S[1],b[1],v[2],S[2],b[2])}}else if(p==="l"){const g=d.substring(1).trim().split(" ");let m=[];const y=[];if(d.indexOf("/")===-1)m=g;else for(let v=0,w=g.length;v<w;v++){const _=g[v].split("/");_[0]!==""&&m.push(_[0]),_[1]!==""&&y.push(_[1])}t.addLineGeometry(m,y)}else if(p==="p"){const m=d.slice(1).trim().split(" ");t.addPointGeometry(m)}else if((s=WE.exec(d))!==null){const g=(" "+s[0].slice(1).trim()).slice(1);t.startObject(g)}else if(jE.test(d))t.object.startMaterial(d.substring(7).trim(),t.materialLibraries);else if(XE.test(d))t.materialLibraries.push(d.substring(7).trim());else if(qE.test(d))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(p==="s"){if(s=d.split(" "),s.length>1){const m=s[1].trim().toLowerCase();t.object.smooth=m!=="0"&&m!=="off"}else t.object.smooth=!0;const g=t.object.currentMaterial();g&&(g.smooth=t.object.smooth)}else{if(d==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+d+'"')}}t.finalize();const o=new Ca;if(o.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let u=0,h=t.objects.length;u<h;u++){const d=t.objects[u],p=d.geometry,g=d.materials,m=p.type==="Line",y=p.type==="Points";let v=!1;if(p.vertices.length===0)continue;const w=new hn;w.setAttribute("position",new Qt(p.vertices,3)),p.normals.length>0&&w.setAttribute("normal",new Qt(p.normals,3)),p.colors.length>0&&(v=!0,w.setAttribute("color",new Qt(p.colors,3))),p.hasUVIndices===!0&&w.setAttribute("uv",new Qt(p.uvs,2));const _=[];for(let b=0,C=g.length;b<C;b++){const E=g[b],L=E.name+"_"+E.smooth+"_"+v;let A=t.materials[L];if(this.materials!==null){if(A=this.materials.create(E.name),m&&A&&!(A instanceof ko)){const I=new ko;Wi.prototype.copy.call(I,A),I.color.copy(A.color),A=I}else if(y&&A&&!(A instanceof as)){const I=new as({size:10,sizeAttenuation:!1});Wi.prototype.copy.call(I,A),I.color.copy(A.color),I.map=A.map,A=I}}A===void 0&&(m?A=new ko:y?A=new as({size:1,sizeAttenuation:!1}):A=new ES,A.name=E.name,A.flatShading=!E.smooth,A.vertexColors=v,t.materials[L]=A),_.push(A)}let S;if(_.length>1){for(let b=0,C=g.length;b<C;b++){const E=g[b];w.addGroup(E.groupStart,E.groupCount,b)}m?S=new ud(w,_):y?S=new wr(w,_):S=new fn(w,_)}else m?S=new ud(w,_[0]):y?S=new wr(w,_[0]):S=new fn(w,_[0]);S.name=d.name,o.add(S)}else if(t.vertices.length>0){const u=new as({size:1,sizeAttenuation:!1}),h=new hn;h.setAttribute("position",new Qt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(h.setAttribute("color",new Qt(t.colors,3)),u.vertexColors=!0);const d=new wr(h,u);o.add(d)}return o}}const Bi=class Bi{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"threeCanvas");F(this,"scene");F(this,"camera");F(this,"renderer");F(this,"composer");F(this,"handGroup",null);F(this,"backgroundParticles",null);F(this,"pinchStrength",0);F(this,"baseScale",1);F(this,"currentModel","torus");F(this,"disposed",!1);F(this,"uniforms",{uTime:{value:0},uPinch:{value:0},uColor:{value:new Q(0,.53,1)}});F(this,"bgUniforms",{uTime:{value:0},uColor:{value:new Q(.5,.7,1)}});this.canvas=e,this.ctx=t,this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.scene=new us;const i=this.threeCanvas.width/this.threeCanvas.height;this.camera=new Rn(50,i,.1,100),this.camera.position.z=10,this.renderer=new hs({canvas:this.threeCanvas,alpha:!0,antialias:!0}),this.renderer.setSize(this.threeCanvas.width,this.threeCanvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const s=new Kx(this.scene,this.camera),o=new Os(new ct(this.threeCanvas.width,this.threeCanvas.height),3,1,0);this.composer=new $x(this.renderer),this.composer.addPass(s),this.composer.addPass(o),this.createBackgroundDust(),this.createTorusGeometry(),console.log("💨 SmokeHandRenderer initialized")}static loadHandGeometry(){return Bi.handGeometry||(Bi.handGeometry=new Promise((e,t)=>{new $E().load(Bi.HAND_MODEL_URL,i=>{const s=[];i.traverse(c=>{c instanceof fn&&s.push(c)});const o=s[s.length-1];o!=null&&o.geometry?e(o.geometry):t(new Error("No mesh in the hand model"))},void 0,t)}),Bi.handGeometry.catch(()=>{Bi.handGeometry=null})),Bi.handGeometry}createBackgroundDust(){const t=new Float32Array(6e3),i=new Float32Array(2e3*3);for(let c=0;c<2e3;c++)t[c*3]=(Math.random()-.5)*40,t[c*3+1]=(Math.random()-.5)*30,t[c*3+2]=-5-Math.random()*20,i[c*3]=Math.random(),i[c*3+1]=Math.random(),i[c*3+2]=Math.random();const s=new hn;s.setAttribute("position",new Sn(t,3)),s.setAttribute("aRandom",new Sn(i,3));const o=new un({uniforms:this.bgUniforms,transparent:!0,depthWrite:!1,blending:La,vertexShader:`
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
      `});this.backgroundParticles=new wr(s,o),this.scene.add(this.backgroundParticles)}createTorusGeometry(){const e=new Hd(1.5,.45,900,150);this.createParticleSystem(e)}createParticleSystem(e){this.handGroup&&this.scene.remove(this.handGroup),this.handGroup=new Ca;const t=e.getAttribute("position").count,i=e.getAttribute("position").array,s=new Float32Array(t*3),o=new Float32Array(t*3);for(let d=0;d<t;d++)s[d*3]=i[d*3],s[d*3+1]=i[d*3+1],s[d*3+2]=i[d*3+2],o[d*3]=Math.random(),o[d*3+1]=Math.random(),o[d*3+2]=Math.random();const c=new hn;c.setAttribute("position",new Sn(s,3)),c.setAttribute("aRandom",new Sn(o,3)),c.setAttribute("aOriginalPos",new Sn(i,3));const u=new un({uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:La,vertexShader:`
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
      `}),h=new wr(c,u);if(h.geometry.computeBoundingSphere(),h.geometry.boundingSphere){const d=h.geometry.boundingSphere.center;h.position.sub(d);const p=h.geometry.boundingSphere.radius;this.baseScale=2.5/p,this.handGroup.scale.set(this.baseScale,this.baseScale,this.baseScale)}this.handGroup.add(h),this.scene.add(this.handGroup)}render(e,t,i){const s=performance.now()*.001;this.uniforms.uTime.value=s,this.bgUniforms.uTime.value=s;const o=new Ye(t[0]||"#0088ff");this.uniforms.uColor.value.set(o.r,o.g,o.b);const c=new Ye(t[1]||t[0]||"#5588ff");this.bgUniforms.uColor.value.set(c.r*.5,c.g*.7,c.b);let u=0;if(e.right&&e.right.gesture==="open"&&e.right.landmarks){const h=e.right.landmarks,d=h[8],p=h[4],g=d.x*2-1,m=-(d.y*2-1),y=new Q(g,m,.5);y.unproject(this.camera);const v=y.sub(this.camera.position).normalize(),w=(0-this.camera.position.z)/v.z,_=this.camera.position.clone().add(v.multiplyScalar(w));this.handGroup&&(this.handGroup.position.lerp(_,.15),this.handGroup.rotation.y=g*.8,this.handGroup.rotation.x=-m*.8);const S=d.x-p.x,b=d.y-p.y,C=Math.sqrt(S*S+b*b);u=ts.mapLinear(C,.02,.15,0,1),u=ts.clamp(u,0,1)}else if(e.left&&e.left.gesture==="open"&&e.left.landmarks){const h=e.left.landmarks,d=h[8],p=h[4],g=d.x*2-1,m=-(d.y*2-1),y=new Q(g,m,.5);y.unproject(this.camera);const v=y.sub(this.camera.position).normalize(),w=(0-this.camera.position.z)/v.z,_=this.camera.position.clone().add(v.multiplyScalar(w));this.handGroup&&(this.handGroup.position.lerp(_,.15),this.handGroup.rotation.y=g*.8,this.handGroup.rotation.x=-m*.8);const S=d.x-p.x,b=d.y-p.y,C=Math.sqrt(S*S+b*b);u=ts.mapLinear(C,.02,.15,0,1),u=ts.clamp(u,0,1)}else this.handGroup&&(this.handGroup.rotation.y+=.005,this.handGroup.rotation.z=Math.sin(s*.5)*.1,this.handGroup.position.lerp(new Q(0,0,0),.05));if(this.pinchStrength=ts.lerp(this.pinchStrength,u,.1),this.uniforms.uPinch.value=this.pinchStrength,this.handGroup){const h=this.baseScale*(1+this.pinchStrength*.5),d=this.handGroup.scale.x,p=ts.lerp(d,h,.1);this.handGroup.scale.set(p,p,p)}this.composer.render(),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}resize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer.setSize(e,t),this.threeCanvas.width=e,this.threeCanvas.height=t}setSmokeHandModel(e){if(this.currentModel!==e){if(this.currentModel=e,e==="torus"){this.createTorusGeometry();return}this.createTorusGeometry(),Bi.loadHandGeometry().then(t=>{this.currentModel==="hand"&&!this.disposed&&this.createParticleSystem(t)},t=>{console.error("Hand model unavailable, staying on the torus:",t)})}}destroy(){this.disposed=!0,this.handGroup&&this.scene.remove(this.handGroup),this.backgroundParticles&&this.scene.remove(this.backgroundParticles),this.composer.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),console.log("💨 SmokeHandRenderer destroyed")}};F(Bi,"handGeometry",null),F(Bi,"HAND_MODEL_URL","https://raw.githubusercontent.com/NPC-88/3dfiles/195a81cd4607a3176f231766b5bd2dd4b4d216fb/16834_hand_v1_NEW.obj");let Bc=Bi;class KE{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"lines",[]);F(this,"gridSpacing",30);F(this,"lineLength",22);F(this,"isClapping",!1);F(this,"clappingIntensity",0);this.canvas=e,this.ctx=t,this.initializeGrid(),console.log("✅ ThickLineRenderer initialized")}initializeGrid(){this.lines=[];const e=Math.ceil(this.canvas.width/this.gridSpacing)+1,t=Math.ceil(this.canvas.height/this.gridSpacing)+1;for(let i=0;i<t;i++)for(let s=0;s<e;s++)this.lines.push({x:s*this.gridSpacing,y:i*this.gridSpacing,length:this.lineLength,currentAngle:0,targetAngle:0,spinVelocity:0})}render(e,t){t[1]&&(t[1].toLowerCase()==="#ffffff"||t[1].toLowerCase()==="#fff")?this.ctx.fillStyle="#000000":this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),(this.lines.length===0||this.lines[0].x>this.canvas.width||this.lines[0].y>this.canvas.height)&&this.initializeGrid();let s=.12,o=0;const c=[];e.left&&c.push(e.left),e.right&&c.push(e.right),c.forEach(h=>{let d=h.fingerCount||2;h.gesture==="pinch"&&(d=1),o=Math.max(o,d)}),o===1?s=.03:o>=4&&(s=.25),e.clapping?this.isClapping||(this.isClapping=!0,this.clappingIntensity=1):this.isClapping=!1,this.clappingIntensity>0&&(this.clappingIntensity*=.95,this.clappingIntensity<.01&&(this.clappingIntensity=0));const u=t[0]||"#ffffff";this.lines.forEach(h=>{if(c.length>0){let p=0,g=0,m=0;c.forEach(y=>{var L,A;const v=(((L=y.position)==null?void 0:L.x)||.5)*this.canvas.width,w=(((A=y.position)==null?void 0:A.y)||.5)*this.canvas.height,_=v-h.x,S=w-h.y,C=1/(1+Math.sqrt(_*_+S*S)*.005),E=Math.atan2(S,_);g+=Math.cos(E)*C,m+=Math.sin(E)*C,p+=C}),p>0&&(h.targetAngle=Math.atan2(m,g))}else h.targetAngle=0;if(this.clappingIntensity>0)h.spinVelocity+=this.clappingIntensity*.8,h.currentAngle+=h.spinVelocity,h.spinVelocity*=.9;else{let p=h.targetAngle-h.currentAngle;for(;p>Math.PI;)p-=Math.PI*2;for(;p<-Math.PI;)p+=Math.PI*2;h.currentAngle+=p*s,h.spinVelocity=0}let d=2;if(c.length>0){let p=1/0;c.forEach(v=>{var b,C;const w=(((b=v.position)==null?void 0:b.x)||.5)*this.canvas.width,_=(((C=v.position)==null?void 0:C.y)||.5)*this.canvas.height,S=Math.hypot(w-h.x,_-h.y);S<p&&(p=S)});const g=35,m=2,y=600;if(p<y){const v=Math.pow(1-p/y,3);d=m+(g-m)*v}}this.ctx.save(),this.ctx.translate(h.x,h.y),this.ctx.rotate(h.currentAngle),this.ctx.fillStyle=u,this.ctx.fillRect(-h.length/2,-d/2,h.length,d),this.ctx.restore()})}}class ZE{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"elements",[]);F(this,"gridSpacing",20);F(this,"elementLength",12);F(this,"elementWidth",3);F(this,"time",0);F(this,"isClapping",!1);this.canvas=e,this.ctx=t,this.initializeField(),console.log("✅ FlowFieldRenderer initialized")}initializeField(){this.elements=[];const e=Math.ceil(this.canvas.width/this.gridSpacing)+1,t=Math.ceil(this.canvas.height/this.gridSpacing)+1;for(let i=0;i<t;i++)for(let s=0;s<e;s++)this.elements.push({x:s*this.gridSpacing,y:i*this.gridSpacing,angle:Math.random()*Math.PI*2,velocity:0,targetAngle:0})}noise(e,t,i){return Math.sin(e*.01+i)+Math.sin(t*.01+i)+Math.sin((e+t)*.01+i)}render(e,t,i){const s=.01+(i?i.mid*.05:0);this.time+=s*si(),t[4]&&t[4]+"",e.clapping?this.ctx.fillStyle="#222222":this.ctx.fillStyle="#000510",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),(this.elements.length===0||this.elements[0].x>this.canvas.width)&&this.initializeField();const o=[];e.left&&o.push(e.left),e.right&&o.push(e.right);const c=i?i.bass:0,u=i?i.high:0,h=i?i.beat:!1,d=this.elementLength*(1+c*1.5),p=this.elementWidth*(1+c*.5);this.ctx.save(),this.elements.forEach((g,m)=>{let v=this.noise(g.x,g.y,this.time)*Math.PI,w=null;if(u>.2&&(v+=(Math.random()-.5)*u),o.length>0){let S=0,b=0,C="none";if(o.forEach(E=>{var $,J;const L=((($=E.position)==null?void 0:$.x)||.5)*this.canvas.width,A=(((J=E.position)==null?void 0:J.y)||.5)*this.canvas.height,I=L-g.x,T=A-g.y,U=Math.sqrt(I*I+T*T),z=Math.atan2(T,I),B=Math.max(0,1-U/800);if(B>b){b=B;const V=E.fingerCount??5;E.gesture==="pinch"?(S=z,C="pinch"):V<=2?(S=z+Math.PI/2,C="2fingers"):(S=z+Math.PI,C="5fingers")}}),b>.1){let E=S-v;for(;E>Math.PI;)E-=Math.PI*2;for(;E<-Math.PI;)E+=Math.PI*2;v+=E*(b*.95),b>.3&&(C==="pinch"?w=t[1]||"#ff00ff":C==="5fingers"?w=t[2]||"#00ffff":C==="2fingers"&&(w=t[0]||"#ffffff"))}}if(e.clapping||h){const S=this.canvas.width/2,b=this.canvas.height/2,C=g.x-S,E=g.y-b,L=Math.atan2(E,C),A=(e.clapping?.9:0)+(h?.4:0);if(A>0){let I=L-v;for(;I>Math.PI;)I-=Math.PI*2;for(;I<-Math.PI;)I+=Math.PI*2;v+=I*A,e.clapping&&(w="#ffffff")}}let _=v-g.angle;for(;_>Math.PI;)_-=Math.PI*2;for(;_<-Math.PI;)_+=Math.PI*2;g.angle+=_*.25,this.ctx.translate(g.x,g.y),this.ctx.rotate(g.angle),w?this.ctx.fillStyle=w:this.ctx.fillStyle=h&&Math.random()>.7?"#ffffff":t[0]||"#ffffff",this.ctx.fillRect(-d/2,-p/2,d,p),this.ctx.rotate(-g.angle),this.ctx.translate(-g.x,-g.y)}),this.ctx.restore()}}class QE{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"threeCanvas");F(this,"scene");F(this,"camera");F(this,"renderer");F(this,"material");F(this,"time",0);F(this,"hand1",new ct(.5,.5));F(this,"hand2",new ct(.5,.5));F(this,"h1Radius",.3);F(this,"h1Strength",0);F(this,"h2Radius",.3);F(this,"h2Strength",0);F(this,"vertexShader",`
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
  `);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.initThreeJS(),console.log("💧 LiquidChromeRenderer initialized"),console.warn=i}initThreeJS(){this.scene=new us,this.camera=new za(-1,1,1,-1,0,1),this.renderer=new hs({canvas:this.threeCanvas,antialias:!1,alpha:!0}),this.renderer.setSize(this.canvas.width,this.canvas.height);const e=new Tr(2,2);this.material=new un({vertexShader:this.vertexShader,fragmentShader:this.fragmentShader,uniforms:{uTime:{value:0},uResolution:{value:new ct(this.canvas.width,this.canvas.height)},uHand1Pos:{value:new ct(.5,.5)},uHand1Radius:{value:.3},uHand1Strength:{value:0},uHand2Pos:{value:new ct(.5,.5)},uHand2Radius:{value:.3},uHand2Strength:{value:0},uColor1:{value:new Ye(6514417)},uColor2:{value:new Ye(9133302)},uColor3:{value:new Ye(14239471)}}});const t=new fn(e,this.material);this.scene.add(t)}getHandParams(e){return e?e.gesture==="pinch"?{radius:.15,strength:2.5}:(e.fingerCount!==void 0?e.fingerCount:5)<=2?{radius:.3,strength:1.5}:{radius:.6,strength:1}:{radius:.3,strength:0}}render(e,t){this.time+=.01*si(),(this.threeCanvas.width!==this.canvas.width||this.threeCanvas.height!==this.canvas.height)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=this.canvas.width,this.threeCanvas.height=this.canvas.height,this.material.uniforms.uResolution.value.set(this.canvas.width,this.canvas.height)),this.material.uniforms.uTime.value=this.time;const i=this.canvas.width/this.canvas.height;if(e.clapping){const o=3+Math.sin(this.time*20)*.5;this.h1Radius+=(1.5-this.h1Radius)*.1,this.h1Strength+=(o-this.h1Strength)*.1,this.h2Radius+=(1.5-this.h2Radius)*.1,this.h2Strength+=(o-this.h2Strength)*.1}else{if(e.left){const s=this.getHandParams(e.left);this.h1Radius+=(s.radius-this.h1Radius)*.1,this.h1Strength+=(s.strength-this.h1Strength)*.1;const o=e.left.position.x*i*.8,c=(1-e.left.position.y)*.8;this.material.uniforms.uHand1Pos.value.set(o,c)}else this.h1Strength*=.9;if(e.right){const s=this.getHandParams(e.right);this.h2Radius+=(s.radius-this.h2Radius)*.1,this.h2Strength+=(s.strength-this.h2Strength)*.1;const o=e.right.position.x*i*.8,c=(1-e.right.position.y)*.8;this.material.uniforms.uHand2Pos.value.set(o,c)}else this.h2Strength*=.9}this.material.uniforms.uHand1Radius.value=this.h1Radius,this.material.uniforms.uHand1Strength.value=this.h1Strength,this.material.uniforms.uHand2Radius.value=this.h2Radius,this.material.uniforms.uHand2Strength.value=this.h2Strength,t&&t.length>=3&&(this.material.uniforms.uColor1.value.set(t[0]),this.material.uniforms.uColor2.value.set(t[1]),this.material.uniforms.uColor3.value.set(t[2])),this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0)}destroy(){this.renderer.dispose(),this.renderer.forceContextLoss(),this.material.dispose()}}class JE{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"rectangles",[]);F(this,"baseWidth",1920);F(this,"baseHeight",1080);F(this,"gridStructure",[]);this.canvas=e,this.ctx=t,this.createVariedLayout()}createVariedLayout(){[{x:0,y:0,w:480,h:360},{x:480,y:0,w:320,h:180},{x:800,y:0,w:320,h:180},{x:1120,y:0,w:400,h:180},{x:1520,y:0,w:400,h:180},{x:480,y:180,w:240,h:180},{x:720,y:180,w:240,h:180},{x:960,y:180,w:160,h:180},{x:1120,y:180,w:240,h:180},{x:1360,y:180,w:280,h:180},{x:1640,y:180,w:280,h:180},{x:0,y:360,w:120,h:360},{x:120,y:360,w:120,h:360},{x:240,y:360,w:120,h:360},{x:360,y:360,w:120,h:360},{x:480,y:360,w:320,h:360},{x:800,y:360,w:320,h:360},{x:1120,y:360,w:200,h:180},{x:1320,y:360,w:200,h:180},{x:1520,y:360,w:200,h:180},{x:1720,y:360,w:200,h:180},{x:1120,y:540,w:160,h:180},{x:1280,y:540,w:160,h:180},{x:1440,y:540,w:240,h:180},{x:1680,y:540,w:240,h:180},{x:0,y:720,w:160,h:360},{x:160,y:720,w:160,h:360},{x:320,y:720,w:160,h:360},{x:480,y:720,w:240,h:360},{x:720,y:720,w:240,h:360},{x:960,y:720,w:160,h:360},{x:1120,y:720,w:400,h:360},{x:1520,y:720,w:400,h:360}].forEach((t,i)=>{let s;const o=i%3;o===0?s="vertical":o===1?s="horizontal":s="vertical-reverse",this.rectangles.push({id:i,baseX:t.x,baseY:t.y,baseW:t.w,baseH:t.h,currentX:t.x,currentY:t.y,currentW:t.w,currentH:t.h,gradientDirection:s}),this.gridStructure.push({x:t.x,y:t.y,w:t.w,h:t.h,targetW:t.w,targetH:t.h})})}render(e,t){const i=this.ctx.createLinearGradient(0,0,0,this.canvas.height);i.addColorStop(0,t[2]||"#d9d9d9"),i.addColorStop(1,t[0]||"#1a00ff"),this.ctx.fillStyle=i,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let s=.15;if(e.left||e.right){const u=[];e.left&&u.push(e.left),e.right&&u.push(e.right);let h=0;u.forEach(d=>{let p=d.fingerCount||2;d.gesture==="pinch"&&(p=1),h=Math.max(h,p)}),h===1?s=.02:h===2?s=.15:h===3?s=.25:h===4?s=.35:h>=5&&(s=.5),this.rectangles.forEach((d,p)=>{this.gridStructure[p].targetW=d.baseW,this.gridStructure[p].targetH=d.baseH}),u.forEach(d=>{var y,v;const p=(((y=d.position)==null?void 0:y.x)||.5)*this.baseWidth,g=(((v=d.position)==null?void 0:v.y)||.5)*this.baseHeight,m=d.velocity||0;this.rectangles.forEach((w,_)=>{const S=w.baseX+w.baseW/2,b=w.baseY+w.baseH/2,C=p-S,E=g-b,L=Math.sqrt(C*C+E*E),I=Math.max(0,1-L/700);if(I>.1){const T=Math.atan2(E,C),U=1+I*.6,z=Math.min(m*.5,.4),D=U+Math.abs(Math.cos(T))*z,B=U+Math.abs(Math.sin(T))*z;this.gridStructure[_].targetW=w.baseW*D,this.gridStructure[_].targetH=w.baseH*B}})})}else this.rectangles.forEach((u,h)=>{this.gridStructure[h].targetW=u.baseW,this.gridStructure[h].targetH=u.baseH});this.gridStructure.forEach((u,h)=>{u.w+=(u.targetW-u.w)*s,u.h+=(u.targetH-u.h)*s}),this.normalizeGridPerfectly(),this.rectangles.forEach((u,h)=>{u.currentX=this.gridStructure[h].x,u.currentY=this.gridStructure[h].y,u.currentW=this.gridStructure[h].w,u.currentH=this.gridStructure[h].h});const o=this.canvas.width/this.baseWidth,c=this.canvas.height/this.baseHeight;this.rectangles.forEach(u=>{this.drawRectangle(u,o,c,t)})}normalizeGridPerfectly(){const e=new Map;this.rectangles.forEach((c,u)=>{const h=Math.round(c.baseY/10)*10;e.has(h)||e.set(h,[]),e.get(h).push(u)});const t=Array.from(e.entries()).sort((c,u)=>c[0]-u[0]).map(c=>c[1]);t.forEach(c=>{c.sort((p,g)=>this.rectangles[p].baseX-this.rectangles[g].baseX);const u=c.reduce((p,g)=>p+this.gridStructure[g].w,0),h=this.baseWidth/u;c.forEach(p=>{this.gridStructure[p].w*=h});let d=0;c.forEach(p=>{this.gridStructure[p].x=d,d+=this.gridStructure[p].w})});let i=0;t.forEach(c=>{const u=Math.max(...c.map(h=>this.gridStructure[h].h));c.forEach(h=>{this.gridStructure[h].y=i,this.gridStructure[h].h=u}),i+=u});const s=i,o=this.baseHeight/s;i=0,t.forEach(c=>{const u=this.gridStructure[c[0]].h*o;c.forEach(h=>{this.gridStructure[h].y=i,this.gridStructure[h].h=u}),i+=u})}drawRectangle(e,t,i,s){this.ctx.save();const o=e.currentX*t,c=e.currentY*i,u=e.currentW*t,h=e.currentH*i;let d;e.gradientDirection==="vertical"?(d=this.ctx.createLinearGradient(o,c,o,c+h),d.addColorStop(0,s[2]||"#d9d9d9"),d.addColorStop(1,s[0]||"#1a00ff")):e.gradientDirection==="vertical-reverse"?(d=this.ctx.createLinearGradient(o,c,o,c+h),d.addColorStop(0,s[0]||"#1a00ff"),d.addColorStop(1,s[2]||"#d9d9d9")):(d=this.ctx.createLinearGradient(o,c,o+u,c),d.addColorStop(0,s[2]||"#d9d9d9"),d.addColorStop(1,s[0]||"#1a00ff")),this.ctx.fillStyle=d,this.ctx.fillRect(o,c,u,h),this.ctx.restore()}}class eT{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"threeCanvas");F(this,"scene");F(this,"camera");F(this,"renderer");F(this,"linesMesh");F(this,"pointsMesh");F(this,"gridPoints");F(this,"edges");F(this,"originalToSortedMap");F(this,"time",0);F(this,"interactionLevel",.5);F(this,"handX",.5);F(this,"handY",.5);F(this,"GRID_SIZE",10);F(this,"SPACING",1.5);F(this,"TOTAL_POINTS",1e3);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.initThreeJS(),console.log("🕸️ NetworkCubeRenderer initialized"),console.warn=i}initThreeJS(){this.scene=new us,this.scene.fog=new Xo(0,.06),this.camera=new Rn(75,this.canvas.width/this.canvas.height,.1,1e3),this.camera.position.z=20,this.renderer=new hs({canvas:this.threeCanvas,antialias:!0,alpha:!0}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=this.GRID_SIZE*this.GRID_SIZE*this.GRID_SIZE;this.gridPoints=new Float32Array(e*3);const t=[],i=(this.GRID_SIZE-1)*this.SPACING*.5,s=(v,w,_)=>v+w*this.GRID_SIZE+_*this.GRID_SIZE*this.GRID_SIZE;let o=0;for(let v=0;v<this.GRID_SIZE;v++)for(let w=0;w<this.GRID_SIZE;w++)for(let _=0;_<this.GRID_SIZE;_++){this.gridPoints[o++]=_*this.SPACING-i+(Math.random()-.5)*.3,this.gridPoints[o++]=w*this.SPACING-i+(Math.random()-.5)*.3,this.gridPoints[o++]=v*this.SPACING-i+(Math.random()-.5)*.3;const b=s(_,w,v);_<this.GRID_SIZE-1&&t.push(b,s(_+1,w,v)),w<this.GRID_SIZE-1&&t.push(b,s(_,w+1,v)),v<this.GRID_SIZE-1&&t.push(b,s(_,w,v+1)),Math.random()>.8&&_<this.GRID_SIZE-1&&w<this.GRID_SIZE-1&&t.push(b,s(_+1,w+1,v))}this.edges=new Int32Array(t);const c=new Int32Array(e);for(let v=0;v<e;v++)c[v]=v;for(let v=e-1;v>0;v--){const w=Math.floor(Math.random()*(v+1));[c[v],c[w]]=[c[w],c[v]]}const u=new Float32Array(e*3);this.originalToSortedMap=new Int32Array(e);for(let v=0;v<e;v++){const w=c[v];this.originalToSortedMap[w]=v,u[v*3]=this.gridPoints[w*3],u[v*3+1]=this.gridPoints[w*3+1],u[v*3+2]=this.gridPoints[w*3+2]}const h=new hn;h.setAttribute("position",new Sn(u,3));const d=new as({color:16777215,size:.15,transparent:!0,opacity:.9,sizeAttenuation:!0});this.pointsMesh=new wr(h,d),this.scene.add(this.pointsMesh);const p=new hn,g=this.edges.length*3,m=new Float32Array(g);p.setAttribute("position",new Sn(m,3));const y=new ko({color:65535,transparent:!0,opacity:.2,blending:La});this.linesMesh=new ud(p,y),this.linesMesh.frustumCulled=!1,this.scene.add(this.linesMesh)}updateLogic(e,t){let i=0;const s=e.left||e.right;s?(this.handX+=(s.position.x-this.handX)*.1,this.handY+=(s.position.y-this.handY)*.1,e.clapping?i=1.2:s.gesture==="pinch"?i=.05:i=.2+(s.fingerCount||0)/5*.8):(this.handX+=(.5-this.handX)*.05,this.handY+=(.5-this.handY)*.05,i=.3+Math.sin(this.time*.5)*.1),this.interactionLevel+=(i-this.interactionLevel)*.08;const o=t?t.bass:0,c=t?t.high:0,u=Math.max(0,Math.min(1.5,this.interactionLevel+o*.3)),h=this.pointsMesh.geometry.attributes.position.count,d=50,p=Math.floor(d+u*(h-d));this.pointsMesh.geometry.setDrawRange(0,p);const g=this.linesMesh.geometry.attributes.position.array;let m=0;for(let S=0;S<this.edges.length;S+=2){const b=this.edges[S],C=this.edges[S+1],E=this.originalToSortedMap[b],L=this.originalToSortedMap[C];if(E<p&&L<p){const A=b*3,I=C*3;g[m++]=this.gridPoints[A],g[m++]=this.gridPoints[A+1],g[m++]=this.gridPoints[A+2],g[m++]=this.gridPoints[I],g[m++]=this.gridPoints[I+1],g[m++]=this.gridPoints[I+2]}}this.linesMesh.geometry.setDrawRange(0,m/3),this.linesMesh.geometry.attributes.position.needsUpdate=!0;const y=.6+u*.8;this.scene.rotation.y+=.002+u*.005;const v=(this.handY-.5)*1.5,w=(this.handX-.5)*1.5;this.scene.rotation.x+=(v-this.scene.rotation.x)*.1,this.scene.rotation.z+=(w-this.scene.rotation.z)*.1,this.pointsMesh.scale.setScalar(y),this.linesMesh.scale.setScalar(y);const _=this.pointsMesh.material;_.size=.15+c*.1}render(e,t,i){this.time+=.02*si();const s=this.renderer.getPixelRatio(),o=Math.floor(this.canvas.width*s),c=Math.floor(this.canvas.height*s);(this.threeCanvas.width!==o||this.threeCanvas.height!==c)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=o,this.threeCanvas.height=c,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix()),this.updateLogic(e,i);const u=new Ye(t[0]||"#ffffff"),h=new Ye(t[1]||"#888888");this.pointsMesh.material.color.lerp(u,.1),this.linesMesh.material.color.lerp(h,.1),this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){Yc(this.scene,this.renderer)}}class tT{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"threeCanvas");F(this,"scene");F(this,"camera");F(this,"renderer");F(this,"mesh");F(this,"points");F(this,"originalPositions");F(this,"currentPositions");F(this,"velocities");F(this,"time",0);F(this,"handX",.5);F(this,"handY",.5);F(this,"isHandPresent",!1);F(this,"pinchStrength",0);F(this,"ROWS",30);F(this,"COLS",30);F(this,"SIZE",12);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.initThreeJS(),console.log("🕸️ ElasticNetRenderer initialized"),console.warn=i}initThreeJS(){this.scene=new us,this.scene.fog=new Xo(0,.08),this.camera=new Rn(75,this.canvas.width/this.canvas.height,.1,1e3),this.camera.position.z=8,this.renderer=new hs({canvas:this.threeCanvas,antialias:!0,alpha:!0}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=new Tr(this.SIZE,this.SIZE,this.COLS,this.ROWS),t=e.attributes.position,i=t.count;this.originalPositions=new Float32Array(i*3),this.currentPositions=new Float32Array(i*3),this.velocities=new Float32Array(i*3);for(let c=0;c<i*3;c++)this.originalPositions[c]=t.array[c],this.currentPositions[c]=t.array[c],this.velocities[c]=0;const s=new Xc({color:65535,wireframe:!0,transparent:!0,opacity:.3,side:Hi});this.mesh=new fn(e,s),this.scene.add(this.mesh);const o=new as({color:16777215,size:.15,transparent:!0,opacity:.8});this.points=new wr(e,o),this.scene.add(this.points)}updatePhysics(e,t){const i=this.mesh.geometry.attributes.position,s=i.count,o=t?t.bass:0,c=t?t.high:0,u=t?t.mid:0;let h=0,d=0,p=0;const g=e.left||e.right;g?(this.isHandPresent=!0,h=(g.position.x-.5)*12,d=-(g.position.y-.5)*10,g.gesture==="pinch"?(this.pinchStrength+=(1-this.pinchStrength)*.1,p=-25):(g.fingerCount||5)>=5?(this.pinchStrength+=(0-this.pinchStrength)*.1,p=15):(this.pinchStrength+=(0-this.pinchStrength)*.1,p=5)):(this.isHandPresent=!1,this.pinchStrength+=(0-this.pinchStrength)*.1);const m=c*.05;for(let y=0;y<s;y++){const v=y*3,w=y*3+1,_=y*3+2,S=this.originalPositions[v],b=this.originalPositions[w],C=this.originalPositions[_];let E=this.currentPositions[v],L=this.currentPositions[w],A=this.currentPositions[_];const I=.05+this.pinchStrength*.2,T=(S-E)*I,U=(b-L)*I,z=(C-A)*I;if(this.velocities[v]+=T,this.velocities[w]+=U,this.velocities[_]+=z,this.isHandPresent){const Z=E-h,K=L-d,W=A,se=Z*Z+K*K+W*W,j=Math.sqrt(se),O=4+o*2;if(j<O){const G=1-j/O,pe=Z/j,Se=K/j,_e=W/j,ee=p*G*.2;this.velocities[v]+=pe*ee,this.velocities[w]+=Se*ee,this.velocities[_]+=_e*ee}}const D=this.time*(1+u),B=Math.sin(w*.1+D)*.02,$=Math.cos(v*.1+D)*.02,J=Math.sin(v*.1+w*.1+D)*.02;this.velocities[v]+=B,this.velocities[w]+=$,this.velocities[_]+=J,c>.1&&(this.velocities[v]+=(Math.random()-.5)*m,this.velocities[w]+=(Math.random()-.5)*m,this.velocities[_]+=(Math.random()-.5)*m);const V=.9-this.pinchStrength*.05;this.velocities[v]*=V,this.velocities[w]*=V,this.velocities[_]*=V,this.currentPositions[v]+=this.velocities[v],this.currentPositions[w]+=this.velocities[w],this.currentPositions[_]+=this.velocities[_],i.setXYZ(y,this.currentPositions[v],this.currentPositions[w],this.currentPositions[_])}i.needsUpdate=!0}render(e,t,i){this.time+=.01*si();const s=this.renderer.getPixelRatio(),o=Math.floor(this.canvas.width*s),c=Math.floor(this.canvas.height*s);(this.threeCanvas.width!==o||this.threeCanvas.height!==c)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=o,this.threeCanvas.height=c,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix()),this.updatePhysics(e,i);const u=new Ye(t[0]||"#00ffff"),h=new Ye(t[1]||"#ff00ff"),d=this.mesh.material;d.color.lerp(u,.1),d.opacity=.2+((i==null?void 0:i.bass)||0)*.3;const p=this.points.material;p.color.lerp(h,.1),p.size=.1+((i==null?void 0:i.high)||0)*.2,this.camera.position.x=Math.sin(this.time*.2)*.5,this.camera.position.y=Math.cos(this.time*.2)*.5,this.camera.lookAt(0,0,0),this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){Yc(this.scene,this.renderer)}}const md={chaos:{idle:.06,range:.45,openness:.6,velocity:.4,clap:.5,audio:.3,ease:.03},strips:{base:10,chaos:20,blocks:5,blocksChaos:15},speed:{base:.05,variation:.1,chaos:.35}};class nT{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"threeCanvas");F(this,"scene");F(this,"camera");F(this,"renderer");F(this,"composer");F(this,"material");F(this,"plane");F(this,"chaosLevel",0);F(this,"cfg",md);F(this,"uniforms",{uTime:{value:0},uColor1:{value:new Q(.5,0,1)},uColor2:{value:new Q(0,0,0)},uColor3:{value:new Q(.8,.9,1)},uChaos:{value:0},uStrips:{value:10},uStripsChaos:{value:20},uBlocks:{value:5},uBlocksChaos:{value:15},uSpeedBase:{value:.05},uSpeedVar:{value:.1},uSpeedChaos:{value:.35},uAudioLow:{value:0},uAudioMid:{value:0},uAudioHigh:{value:0}});F(this,"geometry",new Tr(20,12));this.canvas=e,this.ctx=t,this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.scene=new us,this.camera=new Rn(75,e.width/e.height,.1,100),this.camera.position.z=2,this.renderer=new hs({canvas:this.threeCanvas,alpha:!0,antialias:!0}),this.renderer.setSize(e.width,e.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.material=new un({uniforms:this.uniforms,vertexShader:`
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
      `,side:Hi});const i=new Tr(20,12);this.plane=new fn(i,this.material),this.scene.add(this.plane);const s=new Kx(this.scene,this.camera),o=new Os(new ct(e.width,e.height),1.5,.4,.85);this.composer=new $x(this.renderer),this.composer.addPass(s),this.composer.addPass(o),console.log("📼 DigitalBlockRenderer initialized")}setParams(e){this.cfg=Xi(md,e)}render(e,t,i){(this.threeCanvas.width!==this.canvas.width||this.threeCanvas.height!==this.canvas.height)&&(this.threeCanvas.width=this.canvas.width,this.threeCanvas.height=this.canvas.height,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.canvas.width,this.canvas.height,!1),this.composer.setSize(this.canvas.width,this.canvas.height));const s=performance.now()*.001;this.uniforms.uTime.value=s;const o=i?i.bass:0,c=i?i.mid:0,u=i?i.high:0;this.uniforms.uAudioLow.value=ts.lerp(this.uniforms.uAudioLow.value,o,.2),this.uniforms.uAudioMid.value=c,this.uniforms.uAudioHigh.value=u;const h=this.cfg.chaos,d=e.right??e.left;let p=h.idle;if(d){const y=d.fingerCount??(d.gesture==="open"?5:0),v=Math.min(1,Math.max(0,y/5)),w=Math.min(1,Math.max(0,d.velocity??0));p=h.idle+(v*h.openness+w*h.velocity)*h.range}else o>.6&&(p=h.idle+o*h.audio);e.clapping&&(p+=h.clap*(e.clapIntensity??1)),p=Math.min(h.range,p),this.chaosLevel=ts.lerp(this.chaosLevel,p,h.ease),this.uniforms.uChaos.value=this.chaosLevel;const g=this.cfg.strips,m=this.cfg.speed;if(this.uniforms.uStrips.value=g.base,this.uniforms.uStripsChaos.value=g.chaos,this.uniforms.uBlocks.value=g.blocks,this.uniforms.uBlocksChaos.value=g.blocksChaos,this.uniforms.uSpeedBase.value=m.base,this.uniforms.uSpeedVar.value=m.variation,this.uniforms.uSpeedChaos.value=m.chaos,t&&t.length>=3){const y=new Ye(t[0]),v=new Ye(t[3]||"#000000"),w=new Ye(t[1]);this.uniforms.uColor1.value.lerp(new Q(y.r,y.g,y.b),.1),this.uniforms.uColor2.value.lerp(new Q(v.r,v.g,v.b),.1),this.uniforms.uColor3.value.lerp(new Q(w.r,w.g,w.b),.1)}this.composer.render(),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){var e;this.composer.dispose(),(e=this.geometry)==null||e.dispose(),this.material.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),console.log("📼 DigitalBlockRenderer destroyed")}}const gd={stamp:{radius:.075,strength:.55,fingerScale:.45,audioSwell:.5},field:{decay:.965,spread:1.6},refraction:{amount:.09,dispersion:.35},highlight:{amount:.9,sharpness:3.5,tint:.35},fallback:{fieldBrightness:.85}},iT=`#version 300 es
out vec2 vUv;
void main() {
  // 0,0 / 2,0 / 0,2 — one oversized triangle, clipped to the viewport.
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,rT=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTex;
uniform vec2 uResolution;
uniform float uTime;
`;function jg(a,e,t){const i=a.createShader(e);if(!i)throw new Error("Could not create shader");if(a.shaderSource(i,t),a.compileShader(i),!a.getShaderParameter(i,a.COMPILE_STATUS)){const s=a.getShaderInfoLog(i);a.deleteShader(i);const o=t.split(`
`).map((c,u)=>`${String(u+1).padStart(3)} | ${c}`).join(`
`);throw new Error(`Shader failed to compile: ${s}
${o}`)}return i}function pi(a,e){const t=jg(a,a.VERTEX_SHADER,iT),i=jg(a,a.FRAGMENT_SHADER,rT+e),s=a.createProgram();if(!s)throw new Error("Could not create program");if(a.attachShader(s,t),a.attachShader(s,i),a.linkProgram(s),a.deleteShader(t),a.deleteShader(i),!a.getProgramParameter(s,a.LINK_STATUS)){const o=a.getProgramInfoLog(s);throw a.deleteProgram(s),new Error(`Program failed to link: ${o}`)}return s}function ns(a,e,t){const i=a.createTexture();a.bindTexture(a.TEXTURE_2D,i),a.texImage2D(a.TEXTURE_2D,0,a.RGBA8,e,t,0,a.RGBA,a.UNSIGNED_BYTE,null),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);const s=a.createFramebuffer();return a.bindFramebuffer(a.FRAMEBUFFER,s),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,i,0),a.bindFramebuffer(a.FRAMEBUFFER,null),{framebuffer:s,texture:i,width:e,height:t}}function is(a,e,t,i){e.width===t&&e.height===i||(a.bindTexture(a.TEXTURE_2D,e.texture),a.texImage2D(a.TEXTURE_2D,0,a.RGBA8,t,i,0,a.RGBA,a.UNSIGNED_BYTE,null),e.width=t,e.height=i)}function rs(a,e){a.deleteFramebuffer(e.framebuffer),a.deleteTexture(e.texture)}function Bn(a,e,t,i){a.bindFramebuffer(a.FRAMEBUFFER,e?e.framebuffer:null),a.viewport(0,0,e?e.width:t,e?e.height:i),a.drawArrays(a.TRIANGLES,0,3)}function gn(a,e,t,i,s){a.activeTexture(a.TEXTURE0+s),a.bindTexture(a.TEXTURE_2D,i),a.uniform1i(a.getUniformLocation(e,t),s)}const Hc=10,sT=`
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
}`,aT=`
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
}`;class oT{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"glCanvas");F(this,"gl");F(this,"cfg",gd);F(this,"fieldProgram");F(this,"refractProgram");F(this,"fields");F(this,"ping",0);F(this,"videoTexture");F(this,"video",null);this.canvas=e,this.ctx=t,this.glCanvas=document.createElement("canvas"),this.glCanvas.width=e.width,this.glCanvas.height=e.height;const i=this.glCanvas.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1});if(!i)throw new Error("WebGL2 is not available");this.gl=i,this.fieldProgram=pi(i,sT),this.refractProgram=pi(i,aT),this.fields=[ns(i,e.width,e.height),ns(i,e.width,e.height)],this.videoTexture=i.createTexture(),i.bindTexture(i.TEXTURE_2D,this.videoTexture),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}setParams(e){this.cfg=Xi(gd,e)}setVideoElement(e){this.video=e}collectStamps(e,t){const i=1+((t==null?void 0:t.bass)??0)*this.cfg.stamp.audioSwell,s=this.cfg.stamp.radius*i,o=[];for(const c of[e.left,e.right]){if(!c||o.length/3>=Hc)continue;o.push(c.position.x,1-c.position.y,s);const u=c.landmarks;if(u&&this.cfg.stamp.fingerScale>0)for(const h of[8,12,16,20]){if(o.length/3>=Hc)break;const d=u[h];d&&o.push(d.x,1-d.y,s*this.cfg.stamp.fingerScale)}}return o}render(e,t,i){const s=this.gl,o=this.canvas.width,c=this.canvas.height;if(o===0||c===0)return;(this.glCanvas.width!==o||this.glCanvas.height!==c)&&(this.glCanvas.width=o,this.glCanvas.height=c,is(s,this.fields[0],o,c),is(s,this.fields[1],o,c));const u=this.fields[this.ping];this.ping^=1;const h=this.fields[this.ping],d=this.collectStamps(e,i),p=i!=null&&i.beat?1+(i.beatIntensity??0):1;s.useProgram(this.fieldProgram),s.uniform2f(s.getUniformLocation(this.fieldProgram,"uResolution"),o,c),gn(s,this.fieldProgram,"uField",u.texture,0),s.uniform1i(s.getUniformLocation(this.fieldProgram,"uStampCount"),d.length/3),d.length>0&&s.uniform3fv(s.getUniformLocation(this.fieldProgram,"uStamps"),d),s.uniform1f(s.getUniformLocation(this.fieldProgram,"uDecay"),this.cfg.field.decay),s.uniform1f(s.getUniformLocation(this.fieldProgram,"uSpread"),this.cfg.field.spread),s.uniform1f(s.getUniformLocation(this.fieldProgram,"uStrength"),this.cfg.stamp.strength*p),Bn(s,h,o,c);const g=this.video&&this.video.readyState>=2&&this.video.videoWidth>0;g&&(s.bindTexture(s.TEXTURE_2D,this.videoTexture),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!0),s.texImage2D(s.TEXTURE_2D,0,s.RGBA,s.RGBA,s.UNSIGNED_BYTE,this.video));const m=lT(t[0]??"#ffffff");s.useProgram(this.refractProgram),s.uniform2f(s.getUniformLocation(this.refractProgram,"uResolution"),o,c),gn(s,this.refractProgram,"uField",h.texture,0),gn(s,this.refractProgram,"uVideo",this.videoTexture,1),s.uniform1f(s.getUniformLocation(this.refractProgram,"uHasVideo"),g?1:0),s.uniform3f(s.getUniformLocation(this.refractProgram,"uColor"),m[0],m[1],m[2]),s.uniform1f(s.getUniformLocation(this.refractProgram,"uRefract"),this.cfg.refraction.amount),s.uniform1f(s.getUniformLocation(this.refractProgram,"uDispersion"),this.cfg.refraction.dispersion),s.uniform1f(s.getUniformLocation(this.refractProgram,"uGloss"),this.cfg.highlight.amount),s.uniform1f(s.getUniformLocation(this.refractProgram,"uSharpness"),this.cfg.highlight.sharpness),s.uniform1f(s.getUniformLocation(this.refractProgram,"uTint"),this.cfg.highlight.tint),s.uniform1f(s.getUniformLocation(this.refractProgram,"uFieldBrightness"),this.cfg.fallback.fieldBrightness),Bn(s,null,o,c),this.ctx.clearRect(0,0,o,c),this.ctx.drawImage(this.glCanvas,0,0,o,c)}destroy(){var t;const e=this.gl;e.deleteProgram(this.fieldProgram),e.deleteProgram(this.refractProgram),e.deleteTexture(this.videoTexture),rs(e,this.fields[0]),rs(e,this.fields[1]),(t=e.getExtension("WEBGL_lose_context"))==null||t.loseContext()}}function lT(a){const e=a.replace("#","");return e.length<6?[1,1,1]:[parseInt(e.slice(0,2),16)/255,parseInt(e.slice(2,4),16)/255,parseInt(e.slice(4,6),16)/255]}const xd={mode:0,type:{fit:.82,weight:700,tracking:.08,outline:0,strokeWidth:1.5},grid:{columns:14,rows:26,spread:1,breathe:0,breatheSpeed:.4},mask:{reach:.18,threshold:.5,softness:.25,invert:0},radial:{strength:.6,power:2,pulse:.5,pulseSpeed:.5},wave:{amplitude:.12,frequency:1.5,speed:1,scaleWave:0},depth:{speed:.35,spread:1.4,curve:1.6,size:.1,horizon:.12,steps:18},scatter:{amount:.6,spiral:0,stagger:.35,drift:.5,size:.12},color:{rainbow:0,step:37,cycleSpeed:.3},motion:{handInfluence:1},audio:{bassScale:.3,beatKick:.5},trail:{fadeAlpha:1}},qg="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",cT=1400;class Oo{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"cfg",xd);F(this,"text","N4TH");F(this,"aim",{x:.5,y:.5});F(this,"targets",[]);this.canvas=e,this.ctx=t}setParams(e){this.cfg=Xi(xd,e)}setText(e){const t=e.trim()||"N4TH";t!==this.text&&(this.text=t,this.targets=[])}static noise(e){const t=Math.sin(e*12.9898)*43758.5453;return t-Math.floor(t)}colorFor(e,t,i){const{color:s}=this.cfg;return s.rainbow>=.5?`hsl(${(e*s.step+t*s.cycleSpeed*60)%360}, 100%, 62%)`:i[e%Math.max(1,i.length)]??"#ffffff"}stamp(e,t,i,s,o=1,c=this.text,u=this.cfg.type.tracking){const{ctx:h,cfg:d}=this;h.globalAlpha=Math.min(1,Math.max(0,o)),h.font=`${Math.round(d.type.weight)} ${Math.max(1,i)}px ${qg}`;try{h.letterSpacing=`${u}em`}catch{}d.type.outline>=.5?(h.strokeStyle=s,h.lineWidth=Math.max(.5,d.type.strokeWidth),h.strokeText(c,e,t)):(h.fillStyle=s,h.fillText(c,e,t)),h.globalAlpha=1}fitSize(e,t){const{ctx:i,cfg:s}=this;i.font=`${Math.round(s.type.weight)} 100px ${qg}`;try{i.letterSpacing=`${s.type.tracking}em`}catch{}const o=i.measureText(e).width;return o>0?t/o*100:10}handPoints(e){const t=[];for(const i of[e.left,e.right]){if(!i)continue;t.push(i.position);const s=i.landmarks;if(s)for(const o of[4,8,12,16,20]){const c=s[o];c&&t.push({x:c.x,y:c.y})}}return t}render(e,t,i){const{ctx:s,cfg:o}=this,c=this.canvas.width,u=this.canvas.height;if(c===0||u===0)return;s.globalCompositeOperation="source-over",s.fillStyle=o.trail.fadeAlpha>=1?"#000":`#000000${ti(o.trail.fadeAlpha*255)}`,s.fillRect(0,0,c,u);const h=Gc(),d=(i==null?void 0:i.bass)??0,p=i!=null&&i.beat?o.audio.beatKick:0,g=this.handPoints(e);if(g.length>0){const y=g.reduce((w,_)=>w+_.x,0)/g.length,v=g.reduce((w,_)=>w+_.y,0)/g.length;this.aim.x+=(y-this.aim.x)*.08,this.aim.y+=(v-this.aim.y)*.08}const m=1+d*o.audio.bassScale;switch(s.textAlign="center",s.textBaseline="middle",s.lineJoin="round",Math.round(o.mode)){case 1:this.radial(c,u,m,h,p,t);break;case 2:this.wave(c,u,m,h,p,t);break;case 3:this.depth(c,u,m,h,p,t);break;case 4:this.scatter(c,u,m,h,p,t);break;default:this.mask(c,u,m,h,g,t);break}}spacing(e,t,i){const{cfg:s}=this,o=1+Math.sin(i*s.grid.breatheSpeed)*s.grid.breathe,c=Math.max(1,Math.round(s.grid.columns)),u=Math.max(1,Math.round(s.grid.rows)),h=s.grid.spread*o;return{cols:c,rows:Math.min(u,Math.max(1,Math.floor(cT/c))),dx:e/c*h,dy:t/u*h}}mask(e,t,i,s,o,c){const{cfg:u}=this,{cols:h,rows:d,dx:p,dy:g}=this.spacing(e,t,s),m=this.fitSize(this.text,p*u.type.fit)*i,y=Math.max(.01,u.mask.reach),v=e/t;let w=0;for(let _=0;_<d;_++)for(let S=0;S<h;S++,w++){const b=(S+.5)/h,C=(_+.5)/d;let E=0;for(const z of o){const D=(b-z.x)*v,B=C-z.y;E+=Math.exp(-((D*D+B*B)/(y*y)))}const L=u.mask.softness*.5,A=L<=0?E>u.mask.threshold?1:0:Math.min(1,Math.max(0,(E-(u.mask.threshold-L))/(L*2))),I=u.mask.invert>=.5?1-A:A;if(I<=.02)continue;const T=(S+.5)*p+(e-h*p)/2,U=(_+.5)*g+(t-d*g)/2;this.stamp(T,U,m,this.colorFor(w,s,c),I)}}radial(e,t,i,s,o,c){const{cfg:u}=this,{cols:h,rows:d,dx:p,dy:g}=this.spacing(e,t,s),m=this.fitSize(this.text,p*u.type.fit)*i,y=(u.radial.strength+o)*(1+Math.sin(s*u.radial.pulseSpeed)*u.radial.pulse),v=.5+(this.aim.x-.5)*u.motion.handInfluence,w=.5+(this.aim.y-.5)*u.motion.handInfluence;let _=0;for(let S=0;S<d;S++)for(let b=0;b<h;b++,_++){const C=(b+.5)/h,E=(S+.5)/d,L=C-v,A=E-w,I=Math.min(1,Math.hypot(L,A)*1.42),T=1+Math.pow(I,u.radial.power)*y,U=(v+L*T)*e,z=(w+A*T)*t;U<-p||U>e+p||z<-g||z>t+g||this.stamp(U,z,m,this.colorFor(_,s,c))}}wave(e,t,i,s,o,c){const{cfg:u}=this,{cols:h,rows:d,dx:p,dy:g}=this.spacing(e,t,s),m=this.fitSize(this.text,p*u.type.fit)*i,y=e*u.wave.amplitude*(1+o),v=(this.aim.y-.5)*2*u.motion.handInfluence;let w=0;for(let _=0;_<d;_++){const S=_/Math.max(1,d)*u.wave.frequency*Math.PI*2,b=Math.sin(S+s*u.wave.speed+v)*y,C=1+Math.sin(S+s*u.wave.speed)*u.wave.scaleWave;for(let E=0;E<h;E++,w++){const L=(E+.5)*p+(e-h*p)/2+b,A=(_+.5)*g+(t-d*g)/2,I=(L%e+e)%e;this.stamp(I,A,m*C,this.colorFor(w,s,c))}}}depth(e,t,i,s,o,c){const{cfg:u}=this,h=t*u.depth.size*i,d=Math.max(2,Math.round(u.depth.steps)),p=s*u.depth.speed,g=t*(u.depth.horizon+(this.aim.y-.5)*u.motion.handInfluence*.3);for(let m=0;m<d;m++){const y=((m/d+p)%1+1)%1,v=Math.pow(y,u.depth.curve),w=v*(1+o),_=g+v*(t-g)*1.1;_>t+h||w<=.001||this.stamp(e/2,_,Math.max(1,h*w),this.colorFor(m,s,c),Math.min(1,.25+v),this.text,u.type.tracking+v*u.depth.spread)}}scatter(e,t,i,s,o,c){const{cfg:u}=this,h=[...this.text];if(h.length===0)return;this.targets.length!==h.length&&(this.targets=h.map((y,v)=>({x:Oo.noise(v*3.7+1),y:Oo.noise(v*7.1+2),seed:Oo.noise(v*11.3+3)})));const d=Math.max(2,t*u.scatter.size*i),p=Math.min(1,Math.max(0,u.scatter.amount+o+(this.aim.x-.5)*u.motion.handInfluence)),g=d*(.62+u.type.tracking),m=g*h.length;h.forEach((y,v)=>{const w=this.targets[v],_=v*u.scatter.stagger*.1,S=Math.min(1,Math.max(0,p-_)),b=e/2-m/2+g*(v+.5),C=t/2;let E,L;if(u.scatter.spiral>=.5){const A=v/h.length*Math.PI*6+s*u.scatter.drift,I=(.1+v/h.length*.4)*Math.min(e,t);E=e/2+Math.cos(A)*I,L=t/2+Math.sin(A)*I}else{const A=s*u.scatter.drift+w.seed*Math.PI*2;E=(.08+w.x*.84)*e+Math.cos(A)*e*.05,L=(.08+w.y*.84)*t+Math.sin(A)*t*.05}this.stamp(b+(E-b)*S,C+(L-C)*S,d,this.colorFor(v,s,c),1,y)})}}const vd={frame:{zoom:1,spreadZoom:.5,handDrift:.12,mirror:0},slice:{count:12,offset:.06,speed:.8,beatKick:1.5},look:{tint:0,gain:1},trail:{fadeAlpha:1}};class uT{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"cfg",vd);F(this,"video",null);F(this,"url",null);F(this,"drift",{x:0,y:0});this.canvas=e,this.ctx=t}setParams(e){this.cfg=Xi(vd,e)}setClipUrl(e){var i;if(e===this.url||(this.url=e,(i=this.video)==null||i.pause(),this.video=null,!e))return;const t=document.createElement("video");t.src=e,t.loop=!0,t.muted=!0,t.playsInline=!0,t.play().catch(()=>{}),this.video=t}destroy(){var e;(e=this.video)==null||e.pause(),this.video=null}render(e,t,i){const{ctx:s,cfg:o}=this,c=this.canvas.width,u=this.canvas.height;if(c===0||u===0)return;o.trail.fadeAlpha>=1?(s.globalCompositeOperation="source-over",s.fillStyle="#000",s.fillRect(0,0,c,u)):(s.fillStyle=`#000000${ti(o.trail.fadeAlpha*255)}`,s.fillRect(0,0,c,u));const h=this.video;if(!(h&&h.readyState>=2&&h.videoWidth>0)){s.fillStyle=`${t[0]??"#ffffff"}66`,s.font="500 14px ui-monospace, monospace",s.textAlign="center",s.fillText(this.url?"LOADING CLIP…":"NO CLIP — UPLOAD ONE IN THE LIBRARY",c/2,u/2);return}const p=[e.left,e.right].filter(Boolean);let g=0,m=0;if(p.length>0){const T=p.reduce((z,D)=>z+D.position.x,0)/p.length,U=p.reduce((z,D)=>z+D.position.y,0)/p.length;g=(T-.5)*2,m=(U-.5)*2}this.drift.x+=(g-this.drift.x)*.1,this.drift.y+=(m-this.drift.y)*.1;const y=e.distanceBetweenHands??.4,v=Math.max(.05,o.frame.zoom*(1+(y-.4)*o.frame.spreadZoom)),w=Math.max(c/h.videoWidth,u/h.videoHeight),_=h.videoWidth*w*v,S=h.videoHeight*w*v,b=(c-_)/2+this.drift.x*c*o.frame.handDrift,C=(u-S)/2+this.drift.y*u*o.frame.handDrift,E=Gc(),L=i!=null&&i.beat?o.slice.beatKick:1,A=Math.max(1,Math.round(o.slice.count)),I=u/A;s.save(),o.frame.mirror>=.5&&(s.translate(c,0),s.scale(-1,1));for(let T=0;T<A;T++){const U=T/A*Math.PI*2,z=A<2?0:Math.sin(E*o.slice.speed+U)*c*o.slice.offset*L*(1+Math.abs(this.drift.x)),D=T*I;s.save(),s.beginPath(),s.rect(0,D,c,I+1),s.clip(),s.drawImage(h,b+z,C,_,S),s.restore()}s.restore(),o.look.tint>0&&(s.globalCompositeOperation="overlay",s.fillStyle=`${t[0]??"#ffffff"}${ti(o.look.tint*255)}`,s.fillRect(0,0,c,u),s.globalCompositeOperation="source-over"),o.look.gain>1&&(s.globalCompositeOperation="lighter",s.globalAlpha=Math.min(1,o.look.gain-1),s.drawImage(this.canvas,0,0),s.globalAlpha=1,s.globalCompositeOperation="source-over")}}const _d={mode:0,grid:{columns:48,cellAspect:1.15,fill:.95,spreadDensity:.35},tone:{brightness:0,contrast:1.3,floor:.08,invert:0},letters:{ramp:0,weight:600,outline:0},shape:{rotate:0,anchor:0,minimum:.05},warp:{handPush:.04,ripple:0,rippleSpeed:.6},colour:{fromSource:0,spread:1},audio:{bassScale:.35,beatKick:.25},trail:{fadeAlpha:1}},Yg="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",mf=" .:-=+*#%@",gf=6e3;class hT{constructor(e,t){F(this,"canvas");F(this,"ctx");F(this,"cfg",_d);F(this,"url",null);F(this,"kind","video");F(this,"video",null);F(this,"image",null);F(this,"failed",!1);F(this,"sampler");F(this,"samplerCtx");F(this,"text","N4TH");F(this,"aim",{x:.5,y:.5});this.canvas=e,this.ctx=t,this.sampler=document.createElement("canvas"),this.samplerCtx=this.sampler.getContext("2d",{willReadFrequently:!0})}setParams(e){this.cfg=Xi(_d,e)}setText(e){this.text=e.trim()||"N4TH"}setClipUrl(e,t="video"){var s;if(e===this.url&&t===this.kind||(this.url=e,this.kind=t,this.failed=!1,(s=this.video)==null||s.pause(),this.video=null,this.image=null,!e))return;if(t==="image"){const o=new Image;o.onerror=()=>{this.failed=!0},o.src=e,this.image=o;return}const i=document.createElement("video");i.src=e,i.loop=!0,i.muted=!0,i.playsInline=!0,i.onerror=()=>{this.failed=!0},i.play().catch(()=>{}),this.video=i}destroy(){var e;(e=this.video)==null||e.pause(),this.video=null,this.image=null}source(){const{video:e,image:t}=this;return e&&e.readyState>=2&&e.videoWidth>0?{el:e,w:e.videoWidth,h:e.videoHeight}:t&&t.complete&&t.naturalWidth>0?{el:t,w:t.naturalWidth,h:t.naturalHeight}:null}notice(e,t,i){const{ctx:s}=this;s.fillStyle=`${i[0]??"#ffffff"}66`,s.font="500 14px ui-monospace, monospace",s.textAlign="center",s.textBaseline="middle",s.fillText(this.failed?"THAT FILE WOULD NOT OPEN":this.url?"LOADING…":"NO FILE — UPLOAD ONE IN THE LIBRARY",e/2,t/2)}colorFor(e,t,i,s,o){const{colour:c}=this.cfg,u=Math.max(1,Math.round(c.spread)),h=o[Math.floor(e/u)%Math.max(1,o.length)]??"#ffffff";if(c.fromSource<=0)return h;if(c.fromSource>=1)return`rgb(${t}, ${i}, ${s})`;const d=h.replace("#",""),p=d.length===3?d.split("").map(_=>_+_).join(""):d,g=parseInt(p.slice(0,2),16)||0,m=parseInt(p.slice(2,4),16)||0,y=parseInt(p.slice(4,6),16)||0,v=c.fromSource,w=(_,S)=>Math.round(_+(S-_)*v);return`rgb(${w(g,t)}, ${w(m,i)}, ${w(y,s)})`}render(e,t,i){const{ctx:s,cfg:o}=this,c=this.canvas.width,u=this.canvas.height;if(c===0||u===0)return;s.globalCompositeOperation="source-over",s.fillStyle=o.trail.fadeAlpha>=1?"#000":`#000000${ti(o.trail.fadeAlpha*255)}`,s.fillRect(0,0,c,u);const h=this.source();if(!h){this.notice(c,u,t);return}const d=[e.left,e.right].filter(Boolean);if(d.length>0){const J=d.reduce((Z,K)=>Z+K.position.x,0)/d.length,V=d.reduce((Z,K)=>Z+K.position.y,0)/d.length;this.aim.x+=(J-this.aim.x)*.08,this.aim.y+=(V-this.aim.y)*.08}const g=1-((e.distanceBetweenHands??.4)-.4)*o.grid.spreadDensity;let m=Math.max(2,Math.round(o.grid.columns*Math.max(.25,g)));const v=c/m*Math.max(.2,o.grid.cellAspect);let w=Math.max(2,Math.round(u/v));m*w>gf&&(w=Math.max(2,Math.floor(gf/m)),m=Math.max(2,Math.min(m,Math.floor(gf/w))));const _=this.samplerCtx;if(!_)return;(this.sampler.width!==m||this.sampler.height!==w)&&(this.sampler.width=m,this.sampler.height=w);const S=Math.max(m/h.w,w/h.h),b=h.w*S,C=h.h*S;_.drawImage(h.el,(m-b)/2,(w-C)/2,b,C);let E;try{E=_.getImageData(0,0,m,w).data}catch{this.notice(c,u,t);return}const L=Gc(),A=(i==null?void 0:i.bass)??0,I=i!=null&&i.beat?o.audio.beatKick:0,T=1+A*o.audio.bassScale+I,U=Math.round(o.mode),z=this.text,D=c/m,B=u/w,$=Math.min(D,B)*o.grid.fill*T;if(s.textAlign="center",s.textBaseline="middle",s.lineJoin="round",U===0){s.font=`${Math.round(o.letters.weight)} 100px ${Yg}`;const J=s.measureText("M").width||60,V=Math.max(1,D*o.grid.fill*T/(J/100));s.font=`${Math.round(o.letters.weight)} ${V}px ${Yg}`,s.lineWidth=Math.max(.5,V*.06)}for(let J=0;J<w;J++)for(let V=0;V<m;V++){const Z=(J*m+V)*4,K=E[Z],W=E[Z+1],se=E[Z+2];let j=(.2126*K+.7152*W+.0722*se)/255;if(j=(j-.5)*o.tone.contrast+.5+o.tone.brightness,o.tone.invert>=.5&&(j=1-j),j=Math.min(1,Math.max(0,j)),j<=o.tone.floor)continue;const O=(j-o.tone.floor)/(1-o.tone.floor);let G=(V+.5)*D,pe=(J+.5)*B;if(o.warp.handPush!==0&&d.length>0){const ee=G/c-this.aim.x,xe=pe/u-this.aim.y,me=Math.exp(-(ee*ee+xe*xe)*8);G+=ee*me*c*o.warp.handPush,pe+=xe*me*u*o.warp.handPush}o.warp.ripple!==0&&(pe+=Math.sin(V*.35+L*o.warp.rippleSpeed)*B*o.warp.ripple);const Se=J*m+V,_e=this.colorFor(Se,K,W,se,t);switch(U){case 1:{const ee=$/2*Math.max(o.shape.minimum,O);s.fillStyle=_e,s.beginPath(),s.arc(G,pe,ee,0,Math.PI*2),s.fill();break}case 2:{const ee=$*Math.max(o.shape.minimum,O);s.fillStyle=_e,o.shape.rotate!==0?(s.save(),s.translate(G,pe),s.rotate(o.shape.rotate*Math.PI*.25),s.fillRect(-ee/2,-ee/2,ee,ee),s.restore()):s.fillRect(G-ee/2,pe-ee/2,ee,ee);break}case 3:{const ee=Math.max(1,D*o.grid.fill*.6),xe=B*o.grid.fill*T*Math.max(o.shape.minimum,O),me=o.shape.anchor>=.5?(J+1)*B-xe+(pe-(J+.5)*B):pe-xe/2;s.fillStyle=_e,s.fillRect(G-ee/2,me,ee,xe);break}default:{const ee=o.letters.ramp>=.5?z[Se%z.length]:mf[Math.min(mf.length-1,Math.round(O*(mf.length-1)))];if(!ee||ee===" ")break;o.letters.outline>=.5?(s.strokeStyle=_e,s.strokeText(ee,G,pe)):(s.globalAlpha=o.letters.ramp>=.5?O:1,s.fillStyle=_e,s.fillText(ee,G,pe),s.globalAlpha=1);break}}}}}function Zx(a,e,t,i){var o,c;let s;switch(a){case"geometric":s=new P0(e,t);break;case"particles":s=new G1(e,t);break;case"waves":s=new W1(e,t);break;case"glitch":s=new X1(e,t);break;case"technical":s=new j1(e,t);break;case"lottie":s=new q1(e,t);break;case"lottie-classic":s=new JE(e,t);break;case"linefield":s=new Z1(e,t);break;case"thicklines":s=new KE(e,t);break;case"flowfield":s=new ZE(e,t);break;case"liquidchrome":s=new QE(e,t);break;case"chromatic":s=new Y1(e,t);break;case"halftone":s=new $1(e,t);break;case"matrix":s=new K1(e,t);break;case"distortedcamera":s=new NE(e,t),i&&((o=s.setVideoElement)==null||o.call(s,i));break;case"cyberstream":s=new UE(e,t);break;case"facecloud":s=new FE(e,t);break;case"face":s=new pd(e,t);break;case"morphing":s=new DE(e,t);break;case"cubewall":s=new kE(e,t);break;case"smokehand-torus":s=new Bc(e,t);break;case"smokehand-hand":s=new Bc(e,t),(c=s.setSmokeHandModel)==null||c.call(s,"hand");break;case"network-cube":s=new eT(e,t);break;case"elastic-net":s=new tT(e,t);break;case"text":s=new Oo(e,t);break;case"video":s=new uT(e,t);break;case"mosaic":s=new hT(e,t);break;case"ripple":s=new oT(e,t);break;case"digitalblocks":s=new nT(e,t);break;default:s=new P0(e,t);break}return s}const Wo={master:{enabled:1},transition:{enabled:1,duration:.6},feedback:{enabled:1,mix:1,amount:0,zoom:1,rotate:0,offsetX:0,offsetY:0,hueShift:0},colour:{enabled:1,mix:1,hue:0,saturation:1},displace:{enabled:1,mix:1,amount:0,scale:3,speed:.2},rgbSplit:{enabled:1,mix:1,amount:0},kaleido:{enabled:1,mix:1,segments:0,spin:0},quantize:{enabled:1,mix:1,pixel:0,levels:0},bloom:{enabled:1,mix:1,amount:0,threshold:.6}},Wd=`
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
`,fT=`${Wd}
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
}`,dT=`${Wd}
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
}`,pT=`
uniform float uAmount;
uniform float uMix;

void main() {
  vec2 dir = (vUv - 0.5) * uAmount;
  vec3 wet = vec3(
    texture(uTex, clamp(vUv + dir, 0.0, 1.0)).r,
    texture(uTex, vUv).g,
    texture(uTex, clamp(vUv - dir, 0.0, 1.0)).b);
  fragColor = vec4(mix(texture(uTex, vUv).rgb, wet, uMix), 1.0);
}`,mT=`
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
}`,gT=`
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
}`,xT=`
uniform float uThreshold;

void main() {
  vec3 c = texture(uTex, vUv).rgb;
  float luma = dot(c, vec3(0.2126, 0.7152, 0.0722));
  float keep = smoothstep(uThreshold, uThreshold + 0.25, luma);
  fragColor = vec4(c * keep, 1.0);
}`,vT=`
uniform vec2 uDirection;

void main() {
  vec2 texel = uDirection / uResolution;
  vec3 sum = texture(uTex, vUv).rgb * 0.2270270270;
  sum += texture(uTex, clamp(vUv + texel * 1.3846153846, 0.0, 1.0)).rgb * 0.3162162162;
  sum += texture(uTex, clamp(vUv - texel * 1.3846153846, 0.0, 1.0)).rgb * 0.3162162162;
  sum += texture(uTex, clamp(vUv + texel * 3.2307692308, 0.0, 1.0)).rgb * 0.0702702703;
  sum += texture(uTex, clamp(vUv - texel * 3.2307692308, 0.0, 1.0)).rgb * 0.0702702703;
  fragColor = vec4(sum, 1.0);
}`,_T=`
uniform sampler2D uBloom;
uniform float uAmount;
uniform float uMix;

void main() {
  vec3 base = texture(uTex, vUv).rgb;
  vec3 glow = texture(uBloom, vUv).rgb * uAmount;
  fragColor = vec4(mix(base, base + glow, uMix), 1.0);
}`,yT=`
uniform sampler2D uNext;
uniform float uMix;

void main() {
  fragColor = vec4(mix(texture(uTex, vUv).rgb, texture(uNext, vUv).rgb, uMix), 1.0);
}`,ST=`
void main() {
  fragColor = vec4(texture(uTex, vUv).rgb, 1.0);
}`,MT=`${Wd}
uniform float uHue;
uniform float uSaturation;
uniform float uMix;

void main() {
  vec3 src = texture(uTex, vUv).rgb;
  vec3 wet = hueRotate(src, uHue);
  float grey = dot(wet, vec3(0.299, 0.587, 0.114));
  wet = mix(vec3(grey), wet, uSaturation);
  fragColor = vec4(mix(src, clamp(wet, 0.0, 1.0), uMix), 1.0);
}`;function es(a,e){return a.enabled>=.5&&a.mix>0&&e}function wT(a){const e=Xi(Wo,a);return e.master.enabled<.5?!1:es(e.colour,e.colour.hue!==0||e.colour.saturation!==1)||es(e.feedback,e.feedback.amount>0)||es(e.displace,e.displace.amount>0)||es(e.rgbSplit,e.rgbSplit.amount>0)||es(e.kaleido,e.kaleido.segments>=2)||es(e.quantize,e.quantize.pixel>1||e.quantize.levels>=2)||es(e.bloom,e.bloom.amount>0)}class bT{constructor(e){F(this,"gl");F(this,"cfg",Wo);F(this,"programs",{});F(this,"sourceTexture");F(this,"previousTexture");F(this,"blendTarget");F(this,"targets");F(this,"feedback");F(this,"bloomTargets");F(this,"width",1);F(this,"height",1);F(this,"ping",0);F(this,"feedbackPrimed",!1);const t=e.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,powerPreference:"high-performance"});if(!t)throw new Error("WebGL2 is not available");this.gl=t,this.programs={colour:pi(t,MT),copy:pi(t,ST),feedback:pi(t,fT),displace:pi(t,dT),rgbSplit:pi(t,pT),kaleido:pi(t,mT),quantize:pi(t,gT),blend:pi(t,yT),bloomBright:pi(t,xT),bloomBlur:pi(t,vT),bloomComposite:pi(t,_T)},t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),this.sourceTexture=t.createTexture(),this.previousTexture=t.createTexture();for(const i of[this.sourceTexture,this.previousTexture])t.bindTexture(t.TEXTURE_2D,i),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE);this.blendTarget=ns(t,1,1),this.targets=[ns(t,1,1),ns(t,1,1)],this.feedback=ns(t,1,1),this.bloomTargets=[ns(t,1,1),ns(t,1,1)]}setParams(e){this.cfg=Xi(Wo,e)}live(e,t){return this.cfg.master.enabled>=.5&&es(e,t)}get active(){const e=this.cfg;return e.master.enabled<.5?!1:this.live(e.colour,e.colour.hue!==0||e.colour.saturation!==1)||this.live(e.feedback,e.feedback.amount>0)||this.live(e.displace,e.displace.amount>0)||this.live(e.rgbSplit,e.rgbSplit.amount>0)||this.live(e.kaleido,e.kaleido.segments>=2)||this.live(e.quantize,e.quantize.pixel>1||e.quantize.levels>=2)||this.live(e.bloom,e.bloom.amount>0)}resize(e,t){if(this.width===e&&this.height===t)return;const i=this.gl;this.width=e,this.height=t,is(i,this.targets[0],e,t),is(i,this.targets[1],e,t),is(i,this.feedback,e,t),is(i,this.blendTarget,e,t),is(i,this.bloomTargets[0],Math.max(1,e>>1),Math.max(1,t>>1)),is(i,this.bloomTargets[1],Math.max(1,e>>1),Math.max(1,t>>1)),this.feedbackPrimed=!1}use(e,t=this.width,i=this.height,s=0){const o=this.gl,c=this.programs[e];return o.useProgram(c),o.uniform2f(o.getUniformLocation(c,"uResolution"),t,i),o.uniform1f(o.getUniformLocation(c,"uTime"),s),c}next(){return this.ping^=1,this.targets[this.ping]}render(e,t,i,s=1){const o=this.gl,c=e.width,u=e.height;if(c===0||u===0)return;const h=o.canvas;(h.width!==c||h.height!==u)&&(h.width=c,h.height=u),this.resize(c,u),o.bindTexture(o.TEXTURE_2D,this.sourceTexture),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,o.RGBA,o.UNSIGNED_BYTE,e);let d=this.sourceTexture;if(i&&s<1&&i.width===c&&i.height===u){o.bindTexture(o.TEXTURE_2D,this.previousTexture),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,o.RGBA,o.UNSIGNED_BYTE,i);const v=this.use("blend");gn(o,v,"uTex",this.previousTexture,0),gn(o,v,"uNext",this.sourceTexture,1),o.uniform1f(o.getUniformLocation(v,"uMix"),s),Bn(o,this.blendTarget,c,u),d=this.blendTarget.texture}if(!this.active){this.feedbackPrimed&&(this.feedbackPrimed=!1);const v=this.use("copy");gn(o,v,"uTex",d,0),Bn(o,null,c,u);return}const p=this.cfg;let g=d,m;if(this.live(p.colour,p.colour.hue!==0||p.colour.saturation!==1)){const v=this.use("colour");gn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uHue"),p.colour.hue),o.uniform1f(o.getUniformLocation(v,"uSaturation"),p.colour.saturation),o.uniform1f(o.getUniformLocation(v,"uMix"),p.colour.mix),m=this.next(),Bn(o,m,c,u),g=m.texture}if(this.live(p.feedback,p.feedback.amount>0)){const v=this.use("feedback");gn(o,v,"uTex",g,0),gn(o,v,"uFeedback",this.feedback.texture,1),o.uniform1f(o.getUniformLocation(v,"uAmount"),this.feedbackPrimed?p.feedback.amount:0),o.uniform1f(o.getUniformLocation(v,"uZoom"),p.feedback.zoom),o.uniform1f(o.getUniformLocation(v,"uRotate"),p.feedback.rotate),o.uniform2f(o.getUniformLocation(v,"uOffset"),p.feedback.offsetX,p.feedback.offsetY),o.uniform1f(o.getUniformLocation(v,"uHueShift"),p.feedback.hueShift),o.uniform1f(o.getUniformLocation(v,"uMix"),p.feedback.mix),m=this.next(),Bn(o,m,c,u),g=m.texture}if(this.live(p.displace,p.displace.amount>0)){const v=this.use("displace",c,u,t);gn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uAmount"),p.displace.amount),o.uniform1f(o.getUniformLocation(v,"uScale"),p.displace.scale),o.uniform1f(o.getUniformLocation(v,"uSpeed"),p.displace.speed),o.uniform1f(o.getUniformLocation(v,"uMix"),p.displace.mix),m=this.next(),Bn(o,m,c,u),g=m.texture}if(this.live(p.rgbSplit,p.rgbSplit.amount>0)){const v=this.use("rgbSplit");gn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uAmount"),p.rgbSplit.amount),o.uniform1f(o.getUniformLocation(v,"uMix"),p.rgbSplit.mix),m=this.next(),Bn(o,m,c,u),g=m.texture}if(this.live(p.kaleido,p.kaleido.segments>=2)){const v=this.use("kaleido");gn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uSegments"),Math.round(p.kaleido.segments)),o.uniform1f(o.getUniformLocation(v,"uSpin"),p.kaleido.spin),o.uniform1f(o.getUniformLocation(v,"uMix"),p.kaleido.mix),m=this.next(),Bn(o,m,c,u),g=m.texture}if(this.live(p.quantize,p.quantize.pixel>1||p.quantize.levels>=2)){const v=this.use("quantize");gn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uPixel"),p.quantize.pixel),o.uniform1f(o.getUniformLocation(v,"uLevels"),p.quantize.levels),o.uniform1f(o.getUniformLocation(v,"uMix"),p.quantize.mix),m=this.next(),Bn(o,m,c,u),g=m.texture}this.live(p.bloom,p.bloom.amount>0)&&(g=this.renderBloom(g,c,u));const y=this.use("copy");gn(o,y,"uTex",g,0),Bn(o,this.feedback,c,u),this.feedbackPrimed=!0,gn(o,y,"uTex",g,0),Bn(o,null,c,u)}renderBloom(e,t,i){const s=this.gl,o=this.bloomTargets,c=o[0].width,u=o[0].height;let h=this.use("bloomBright",c,u);gn(s,h,"uTex",e,0),s.uniform1f(s.getUniformLocation(h,"uThreshold"),this.cfg.bloom.threshold),Bn(s,o[0],c,u),h=this.use("bloomBlur",c,u),gn(s,h,"uTex",o[0].texture,0),s.uniform2f(s.getUniformLocation(h,"uDirection"),1,0),Bn(s,o[1],c,u),h=this.use("bloomBlur",c,u),gn(s,h,"uTex",o[1].texture,0),s.uniform2f(s.getUniformLocation(h,"uDirection"),0,1),Bn(s,o[0],c,u),h=this.use("bloomComposite"),gn(s,h,"uTex",e,0),gn(s,h,"uBloom",o[0].texture,1),s.uniform1f(s.getUniformLocation(h,"uAmount"),this.cfg.bloom.amount),s.uniform1f(s.getUniformLocation(h,"uMix"),this.cfg.bloom.mix);const d=this.next();return Bn(s,d,t,i),d.texture}destroy(){var t;const e=this.gl;for(const i of Object.values(this.programs))e.deleteProgram(i);e.deleteTexture(this.sourceTexture),e.deleteTexture(this.previousTexture),rs(e,this.blendTarget),rs(e,this.targets[0]),rs(e,this.targets[1]),rs(e,this.feedback),rs(e,this.bloomTargets[0]),rs(e,this.bloomTargets[1]),(t=e.getExtension("WEBGL_lose_context"))==null||t.loseContext()}}const ET="screen";function $g(a,e){return a.duration<=0?1:Math.min(1,(e-a.fadeStart)/1e3/a.duration)}function TT({handData:a,layerColors:e,layers:t,videoElement:i,audioData:s,layerParams:o,fxParams:c,content:u,motion:h,onCanvasReady:d}){const p=fe.useRef(null),g=fe.useRef(null),m=fe.useRef(d);m.current=d;const y=fe.useCallback($=>{var J;p.current=$,(J=m.current)==null||J.call(m,$)},[]),v=fe.useRef(null),w=fe.useRef(null),[_,S]=fe.useState(!1),b=fe.useRef([]),C=fe.useRef(t),E=fe.useRef(null),L=fe.useRef(a),A=fe.useRef(e),I=fe.useRef(i??null),T=fe.useRef(s),U=fe.useRef(o),z=fe.useRef(c),D=fe.useRef(u),B=fe.useRef(h);return fe.useEffect(()=>{L.current=a,A.current=e,I.current=i??null,T.current=s,U.current=o,C.current=t,z.current=c,D.current=u,B.current=h},[a,e,i,s,o,t,c,u,h]),fe.useEffect(()=>{var $,J,V,Z;for(const K of b.current){if(!K)continue;const W=u.clips[K.current.pattern];(J=($=K.current.renderer).setText)==null||J.call($,u.text),(Z=(V=K.current.renderer).setClipUrl)==null||Z.call(V,(W==null?void 0:W.url)??null,W==null?void 0:W.kind)}},[u]),fe.useEffect(()=>{b.current.forEach(($,J)=>{var V,Z;(Z=$==null?void 0:(V=$.current.renderer).setParams)==null||Z.call(V,(o==null?void 0:o[J])??{})})},[o]),fe.useEffect(()=>{var $;($=v.current)==null||$.setParams(c??{})},[c]),fe.useEffect(()=>{const $=p.current;if(!$)return;if(_){w.current=$.getContext("2d");return}let J=null;try{J=new bT($),J.setParams(z.current??{}),v.current=J}catch(V){console.error("Post pipeline unavailable, falling back to direct output:",V),v.current=null,S(!0)}return()=>{J==null||J.destroy(),v.current=null}},[_]),fe.useEffect(()=>{const $=document.createElement("canvas");E.current=$.getContext("2d");const J=()=>{const j=window.innerWidth,O=window.innerHeight;$.width=j,$.height=O;for(const pe of b.current)for(const Se of[pe==null?void 0:pe.current,pe==null?void 0:pe.outgoing])Se&&(Se.canvas.width=j,Se.canvas.height=O);const G=p.current;G&&!v.current&&(G.width=j,G.height=O)};J(),window.addEventListener("resize",J);const V=(j,O)=>{var G,pe;try{I.current&&((pe=(G=j.renderer).setVideoElement)==null||pe.call(G,I.current));const Se=C.current[O];j.renderer.render(L.current,A.current[O]??A.current[0]??[],T.current,Se==null?void 0:Se.colorMode)}catch(Se){j.reportedError||(j.reportedError=!0,console.error(`Renderer "${j.pattern}" threw while drawing:`,Se))}};let Z=!1;const K=(j,O)=>{j.globalCompositeOperation="source-over",j.globalAlpha=1,j.fillStyle="#000",j.fillRect(0,0,j.canvas.width,j.canvas.height),b.current.forEach((G,pe)=>{var xe;if(!G)return;const Se=pe===0,_e=((xe=C.current[pe])==null?void 0:xe.opacity)??1;if(_e<=0)return;j.globalCompositeOperation=Se?"source-over":ET;const ee=G.outgoing?$g(G.outgoing,O):1;G.outgoing&&(j.globalAlpha=_e*(Se?1:1-ee),j.drawImage(G.outgoing.canvas,0,0)),j.globalAlpha=_e*ee,j.drawImage(G.current.canvas,0,0)}),j.globalAlpha=1,j.globalCompositeOperation="source-over"};let W=performance.now();const se=()=>{const j=performance.now(),O=E.current,G=Math.min(.1,(j-W)/1e3);if(W=j,V1(G,B.current),b.current.forEach((pe,Se)=>{var _e,ee;pe&&(V(pe.current,Se),pe.outgoing&&($g(pe.outgoing,j)>=1?((ee=(_e=pe.outgoing.renderer).destroy)==null||ee.call(_e),pe.outgoing=null):V(pe.outgoing,Se)))}),O&&b.current.length>0){K(O,j);const pe=v.current;if(pe)try{pe.render(O.canvas,j/1e3)}catch(Se){Z||(Z=!0,console.error("Post pipeline threw while presenting:",Se))}else w.current&&w.current.drawImage(O.canvas,0,0)}g.current=requestAnimationFrame(se)};return se(),()=>{var j,O,G,pe,Se;window.removeEventListener("resize",J),g.current&&cancelAnimationFrame(g.current);for(const _e of b.current)(G=(j=_e==null?void 0:_e.outgoing)==null?void 0:(O=j.renderer).destroy)==null||G.call(O),(Se=_e==null?void 0:(pe=_e.current.renderer).destroy)==null||Se.call(pe);b.current=[],E.current=null}},[]),fe.useEffect(()=>{var K,W,se,j,O;const $=b.current,J=Xi(Wo,z.current??{}).transition,V=J.enabled>=.5?J.duration:0,Z=(G,pe)=>{var me,Ie,Be,$e;const Se=document.createElement("canvas");Se.width=window.innerWidth,Se.height=window.innerHeight;const _e=Se.getContext("2d");if(!_e)return null;let ee;try{ee=Zx(G,Se,_e,I.current)}catch(wt){return console.error("Failed to create renderer for pattern:",G,wt),null}(Ie=ee.setParams)==null||Ie.call(ee,((me=U.current)==null?void 0:me[pe])??{}),(Be=ee.setText)==null||Be.call(ee,D.current.text);const xe=D.current.clips[G];return($e=ee.setClipUrl)==null||$e.call(ee,(xe==null?void 0:xe.url)??null,xe==null?void 0:xe.kind),{renderer:ee,canvas:Se,pattern:G}};t.forEach(({pattern:G},pe)=>{var ee,xe,me,Ie,Be;const Se=$[pe];if((Se==null?void 0:Se.current.pattern)===G)return;const _e=Z(G,pe);if(_e){if(!Se){$[pe]={current:_e,outgoing:null};return}(me=(ee=Se.outgoing)==null?void 0:(xe=ee.renderer).destroy)==null||me.call(xe),V>0?Se.outgoing={...Se.current,fadeStart:performance.now(),duration:V}:((Be=(Ie=Se.current.renderer).destroy)==null||Be.call(Ie),Se.outgoing=null),Se.current=_e}});for(const G of $.splice(t.length))(se=(K=G==null?void 0:G.outgoing)==null?void 0:(W=K.renderer).destroy)==null||se.call(W),(O=G==null?void 0:(j=G.current.renderer).destroy)==null||O.call(j)},[t.map($=>$.pattern).join("|")]),X.jsx("canvas",{ref:y,className:"absolute inset-0 w-full h-full z-0"},_?"fallback-2d":"pipeline-gl")}function CT({onAudioData:a,onStream:e,enabled:t,sensitivity:i}){const s=fe.useRef(null),o=fe.useRef(null),c=fe.useRef(null),u=fe.useRef(null),h=fe.useRef(null),d=fe.useRef([]),p=fe.useRef(0),[g,m]=fe.useState(null),y=fe.useRef(e);y.current=e;const v=fe.useRef(i);return v.current=i,fe.useEffect(()=>{let w=!1;const _=()=>{var E;w=!0,h.current!==null&&(cancelAnimationFrame(h.current),h.current=null),u.current&&(u.current.getTracks().forEach(L=>L.stop()),u.current=null,(E=y.current)==null||E.call(y,null));const C=s.current;s.current=null,C&&C.state!=="closed"&&C.close(),o.current=null,c.current=null};if(!t){_(),a({bass:0,mid:0,high:0,overall:0,beat:!1,beatIntensity:0});return}const S=async()=>{var C;try{const E=await navigator.mediaDevices.getUserMedia({audio:!0});if(w){E.getTracks().forEach(z=>z.stop());return}u.current=E,(C=y.current)==null||C.call(y,E);const L=new AudioContext;s.current=L;const A=L.createAnalyser();A.fftSize=2048,A.smoothingTimeConstant=.8,o.current=A,L.createMediaStreamSource(E).connect(A);const T=A.frequencyBinCount,U=new Uint8Array(T);c.current=U,m(null),b()}catch(E){if(w)return;m("Microphone access denied"),console.error("Audio initialization error:",E)}},b=()=>{if(!o.current||!c.current)return;o.current.getByteFrequencyData(c.current);const C=c.current,E=C.length,L=Math.floor(E*.12),A=Math.floor(E*.4);let I=0,T=0,U=0,z=0;for(let O=0;O<E;O++){const G=C[O];z+=G,O<L?I+=G:O<A?T+=G:U+=G}const D=v.current,B=Math.min(1,I/(L*255)*(1+D)),$=Math.min(1,T/((A-L)*255)*(1+D)),J=Math.min(1,U/((E-A)*255)*(1+D)),V=Math.min(1,z/(E*255)*(1+D)),Z=Date.now(),K=.6*D;d.current.push(B),d.current.length>10&&d.current.shift();const W=d.current.reduce((O,G)=>O+G,0)/d.current.length,se=B>W*1.5&&B>K&&Z-p.current>300;se&&(p.current=Z);const j=se?Math.min(1,(B-W)/W):0;a({bass:B,mid:$,high:J,overall:V,beat:se,beatIntensity:j}),h.current=requestAnimationFrame(b)};return S(),_},[t,a]),g?X.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500/20 border border-red-500 px-4 py-2 rounded",children:X.jsx("p",{className:"text-red-500 font-mono",children:g})}):null}function AT(a,e,t,i){const o={x:a,y:e+.08800000000000001},c=[{...o,z:0}];return[{angle:-1.05,length:.62},{angle:-.34,length:.95},{angle:-.1,length:1},{angle:.14,length:.92},{angle:.38,length:.76}].forEach((h,d)=>{const p=.25+Math.sin(t*.6+i+d)*.2;for(let g=1;g<=4;g++){const m=g/4,y=h.angle+p*m*.5,v=.16*h.length*m;c.push({x:o.x+Math.sin(y)*v,y:o.y-Math.cos(y)*v,z:0})}}),c}function Qx(a){const e=(t,i)=>{const s={x:i+Math.sin(a*.23+t)*.18,y:.5+Math.sin(a*.31+t*1.7)*.22};return{position:s,gesture:"open",fingerCount:3+Math.round(1.5+Math.sin(a*.11+t)*1.5),velocity:.25+Math.sin(a*.37+t)*.15,holdDuration:1,landmarks:AT(s.x,s.y,a,t)}};return{left:e(0,.32),right:e(Math.PI,.68),distanceBetweenHands:.36}}const Jx="vj-text",RT="n4thvj",tr="clips",xf="clip",PT=["video","mosaic"],yd="N4TH";function LT(){try{return localStorage.getItem(Jx)??yd}catch{return yd}}function IT(a){try{localStorage.setItem(Jx,a)}catch{}}function Xd(){return new Promise((a,e)=>{const t=indexedDB.open(RT,1);t.onupgradeneeded=()=>{t.result.objectStoreNames.contains(tr)||t.result.createObjectStore(tr)},t.onsuccess=()=>a(t.result),t.onerror=()=>e(t.error)})}function Kg(a){return a.type.startsWith("image/")?"image":"video"}async function ev(a,e,t){const i=await Xd();await new Promise((s,o)=>{const c=i.transaction(tr,"readwrite");c.objectStore(tr).put({file:e,name:t},a),c.oncomplete=()=>s(),c.onerror=()=>o(c.error)}),i.close()}function NT(a,e){return new Promise(t=>{const i=a.get(e);i.onsuccess=()=>{const s=i.result;if(!s||typeof s!="object")return t(null);const{file:o,name:c}=s;if(!(o instanceof Blob))return t(null);t({file:o,name:typeof c=="string"?c:"clip"})},i.onerror=()=>t(null)})}async function UT(){try{const a=await Xd(),e=await new Promise((c,u)=>{const h=a.transaction(tr,"readonly").objectStore(tr).getAllKeys();h.onsuccess=()=>c(h.result),h.onerror=()=>u(h.error)}),t={},s=a.transaction(tr,"readonly").objectStore(tr);for(const c of e){if(typeof c!="string")continue;const u=await NT(s,c);u&&(t[c]=u)}a.close();const o=t[xf];if(o){delete t[xf];for(const c of PT)t[c]||(t[c]=o,ev(c,o.file,o.name).catch(()=>{}));tv(xf).catch(()=>{})}return t}catch{return{}}}async function tv(a){try{const e=await Xd();await new Promise(t=>{const i=e.transaction(tr,"readwrite");i.objectStore(tr).delete(a),i.oncomplete=()=>t(),i.onerror=()=>t()}),e.close()}catch{}}const FT=4,DT=14,Zg=45,kT=480,OT=300,zT=["#ffffff","#d4d4d4","#ffffff","#a3a3a3"],BT={"2D":"text-cyan-300 border-cyan-400/30 bg-cyan-400/10","3D":"text-violet-300 border-violet-400/30 bg-violet-400/10",TD:"text-emerald-300 border-emerald-400/30 bg-emerald-400/10"},Qg=Object.values(ls),HT=["2D","3D","TD"];function VT({set:a,onSetChange:e,onStart:t,text:i,onTextChange:s,clips:o,onClipChange:c}){const[u,h]=fe.useState("ALL"),[d,p]=fe.useState(null),g=fe.useRef(new Map),m=fe.useRef(new Set),y=fe.useRef(null),v=fe.useRef(a);v.current=a;const w=fe.useRef({text:i,clips:o});w.current={text:i,clips:o};const _=u==="ALL"?Qg:Qg.filter(A=>A.category===u),S=fe.useCallback(A=>{const I=v.current;if(I.indexOf(A)!==-1){e(I.filter(U=>U!==A));return}I.length>=Ps||e([...I,A])},[e]),b=fe.useCallback((A,I)=>{const T=v.current.filter(D=>D!==A),U=Math.min(I,T.length);if(U>=Ps)return;const z=[...T];z.splice(U,0,A),e(z.slice(0,Ps))},[e]);fe.useEffect(()=>{const A=I=>{if(I.ctrlKey||I.metaKey||I.altKey)return;if(I.key==="Enter"&&v.current.length>0){t();return}if(!d)return;const T=vf(I.key);T!==-1&&(I.preventDefault(),b(d,T))};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[d,b,t]),fe.useEffect(()=>{y.current=new IntersectionObserver(T=>{for(const U of T){const z=U.target.getAttribute("data-pattern");z&&(U.isIntersecting?m.current.add(z):m.current.delete(z))}},{rootMargin:"250px 0px"});for(const T of g.current.values())y.current.observe(T.canvas);let A=0;const I=()=>{var B,$,J,V,Z,K,W,se;if(A=requestAnimationFrame(I),document.hidden)return;const T=Qx(Date.now()/1e3);let U=0,z=0;const D=[...g.current].sort(([,j],[,O])=>{const G=j.frames<Zg?0:1,pe=O.frames<Zg?0:1;return G-pe});for(const[j,O]of D){const G=ls[j].category!=="2D",pe=G?U<FT:z<DT;if(m.current.has(j)&&pe&&!O.failed){if(!O.renderer)try{O.renderer=Zx(j,O.canvas,O.ctx,null)}catch{O.failed=!0;continue}try{($=(B=O.renderer).setText)==null||$.call(B,w.current.text);const _e=w.current.clips[j];(V=(J=O.renderer).setClipUrl)==null||V.call(J,(_e==null?void 0:_e.url)??null,_e==null?void 0:_e.kind),O.renderer.render(T,zT,void 0,"contrast")}catch{O.failed=!0,(K=(Z=O.renderer).destroy)==null||K.call(Z),O.renderer=null;continue}O.frames++,G?U++:z++}else O.renderer&&((se=(W=O.renderer).destroy)==null||se.call(W),O.renderer=null)}};return A=requestAnimationFrame(I),()=>{var T,U,z;cancelAnimationFrame(A),(T=y.current)==null||T.disconnect();for(const D of g.current.values())(z=(U=D.renderer)==null?void 0:U.destroy)==null||z.call(U);g.current.clear()}},[]);const C=fe.useRef(new Map),E=A=>{let I=C.current.get(A);return I||(I=T=>L(A,T),C.current.set(A,I)),I},L=fe.useCallback((A,I)=>{var U,z,D;if(!I){const B=g.current.get(A);(z=(U=B==null?void 0:B.renderer)==null?void 0:U.destroy)==null||z.call(U),g.current.delete(A),m.current.delete(A);return}if(g.current.has(A))return;I.width=kT,I.height=OT;const T=I.getContext("2d");T&&(g.current.set(A,{canvas:I,ctx:T,renderer:null,frames:0}),(D=y.current)==null||D.observe(I))},[]);return X.jsxs("div",{className:"min-h-screen w-full bg-[#07070a] text-white font-mono",children:[X.jsx("div",{"aria-hidden":!0,className:"pointer-events-none fixed inset-0 opacity-70",style:{background:"radial-gradient(60rem 40rem at 50% -10%, rgba(99,102,241,0.18), transparent 70%),radial-gradient(40rem 30rem at 85% 15%, rgba(217,70,239,0.10), transparent 70%)"}}),X.jsxs("div",{className:"relative mx-auto max-w-[1500px] px-6 pb-40 pt-14",children:[X.jsx("header",{className:"mb-10",children:X.jsxs("div",{className:"flex flex-wrap items-end justify-between gap-6",children:[X.jsxs("div",{children:[X.jsx("h1",{className:"text-2xl font-semibold tracking-[-0.02em] sm:text-3xl",children:"<N4TH>"}),X.jsxs("p",{className:"mt-3 max-w-xl text-sm leading-relaxed text-white/45",children:["Every visual, running. Pick up to ",Ps," and they become your keyboard — click to add, or hover one and press the number you want it on."]})]}),X.jsx("nav",{className:"flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] p-1.5",children:["ALL",...HT].map(A=>X.jsx("button",{onClick:()=>h(A),className:`rounded-full px-4 py-1.5 text-[11px] tracking-wider transition-all ${u===A?"bg-white text-black":"text-white/45 hover:bg-white/5 hover:text-white/80"}`,children:A},A))})]})}),X.jsx("div",{className:"grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:_.map(A=>{var D;const I=a.indexOf(A.pattern),T=I!==-1,U=a.length>=Ps&&!T,z=A.pattern==="text"?"text":A.pattern==="video"||A.pattern==="mosaic"?"file":null;return X.jsxs("div",{onMouseEnter:()=>p(A.pattern),onMouseLeave:()=>p(B=>B===A.pattern?null:B),className:`group relative overflow-hidden rounded-2xl border text-left transition-all duration-200 ${T?"border-white/70 bg-white/[0.06] shadow-[0_0_0_1px_rgba(255,255,255,0.35),0_18px_50px_-20px_rgba(255,255,255,0.35)]":U?"border-white/5 opacity-35":"border-white/10 bg-white/[0.02] hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.05]"}`,children:[X.jsxs("button",{onClick:()=>S(A.pattern),disabled:U,title:U?"The set is full — take one off first":`${A.description}${T?"":" · click to add"}`,className:`block w-full text-left ${U?"cursor-not-allowed":""}`,children:[X.jsxs("div",{className:"relative aspect-[16/10] w-full overflow-hidden bg-black",children:[X.jsx("canvas",{"data-pattern":A.pattern,ref:E(A.pattern),className:"h-full w-full object-cover"}),X.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/85 to-transparent"}),T&&X.jsx("div",{className:"absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-base font-semibold text-black shadow-lg",children:zo(I)})]}),X.jsxs("div",{className:"flex items-center justify-between gap-3 px-4 pb-3 pt-3",children:[X.jsxs("div",{className:"min-w-0",children:[X.jsx("div",{className:"truncate text-[13px] tracking-wide text-white/90",children:A.name}),X.jsx("div",{className:"mt-0.5 truncate text-[10px] text-white/35",children:A.description})]}),X.jsx("span",{className:`shrink-0 rounded border px-1.5 py-0.5 text-[9px] tracking-widest ${BT[A.category]}`,children:A.category})]})]}),z==="text"&&X.jsx("div",{className:"px-4 pb-4",children:X.jsx("input",{value:i,onChange:B=>s(B.target.value),onKeyDown:B=>B.stopPropagation(),placeholder:yd,maxLength:48,"aria-label":"Words for Kinetic Type",className:"w-full rounded-lg border border-white/15 bg-black/60 px-3 py-2 text-[12px] tracking-wide text-white placeholder:text-white/25 focus:border-white/45 focus:outline-none"})}),z==="file"&&X.jsxs("div",{className:"flex items-center gap-2 px-4 pb-4",children:[X.jsxs("label",{className:"cursor-pointer rounded-lg border border-white/15 bg-black/60 px-3 py-2 text-[11px] tracking-wider text-white/75 transition-colors hover:border-white/45 hover:text-white",children:[o[A.pattern]?"REPLACE":"UPLOAD",X.jsx("input",{type:"file",accept:"video/*,image/*",className:"hidden",onChange:B=>{var J;const $=(J=B.target.files)==null?void 0:J[0];$&&c(A.pattern,$),B.target.value=""}})]}),X.jsx("span",{className:"min-w-0 flex-1 truncate text-[10px] text-white/35",children:((D=o[A.pattern])==null?void 0:D.name)??"no file yet"}),o[A.pattern]&&X.jsx("button",{onClick:()=>c(A.pattern,null),title:"Remove this visual's file",className:"shrink-0 px-1 text-white/25 transition-colors hover:text-white/80",children:"×"})]})]},A.pattern)})})]}),X.jsx("footer",{className:"fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/80 backdrop-blur-xl",children:X.jsxs("div",{className:"mx-auto flex max-w-[1500px] flex-wrap items-center gap-4 px-6 py-4",children:[X.jsxs("div",{className:"flex min-w-0 flex-1 flex-wrap items-center gap-2",children:[X.jsxs("span",{className:"mr-1 text-[10px] tracking-widest text-white/35",children:["SET ",a.length,"/",Ps]}),a.length===0&&X.jsx("span",{className:"text-[11px] text-white/30",children:"Nothing chosen yet — pick a visual to start building the row."}),a.map((A,I)=>X.jsxs("button",{onClick:()=>S(A),title:"Take off the set",className:"group flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] py-1 pl-1 pr-3 transition-all hover:border-white/40 hover:bg-white/10",children:[X.jsx("span",{className:"flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-black",children:zo(I)}),X.jsx("span",{className:"text-[11px] text-white/80",children:ls[A].name}),X.jsx("span",{className:"text-white/25 transition-colors group-hover:text-white/70",children:"×"})]},A))]}),X.jsxs("div",{className:"flex shrink-0 items-center gap-3",children:[a.length>0&&X.jsx("button",{onClick:()=>e([]),className:"rounded-full px-3 py-2 text-[11px] tracking-wider text-white/40 transition-colors hover:text-white/80",children:"CLEAR"}),X.jsx("button",{onClick:t,disabled:a.length===0,className:`rounded-full px-7 py-3 text-[12px] font-semibold tracking-[0.18em] transition-all ${a.length===0?"cursor-not-allowed bg-white/10 text-white/25":"bg-white text-black hover:scale-[1.03] hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.6)]"}`,children:"START SET →"})]})]})})]})}function GT(a,e){const t=Math.max(0,Math.ceil(-Math.log10(e)));return a.toFixed(Math.min(t,4))}function WT({spec:a,value:e,isDefault:t,inert:i,onChange:s,onReset:o}){var u;const c=(e-a.min)/(a.max-a.min)*100;return X.jsxs("div",{className:`group ${i?"opacity-40":""}`,title:i?`Does nothing until ${a.needs} is above zero`:void 0,children:[X.jsxs("div",{className:"flex justify-between items-baseline text-[9px] leading-tight",children:[X.jsxs("button",{onClick:o,title:t?a.hint??a.path:`${a.path} — click to reset`,className:`text-left transition-colors ${t?"text-white/50 hover:text-white/70":"text-cyan-300 hover:text-cyan-200"}`,children:[a.label,!t&&X.jsx("span",{className:"ml-1 opacity-60",children:"•"})]}),X.jsx("span",{className:`text-white ${a.labels?"":"tabular-nums"}`,children:((u=a.labels)==null?void 0:u[Math.round(e)])??GT(e,a.step)})]}),X.jsx("input",{type:"range",className:"vj-slider w-full h-1 mt-1 mb-2 rounded-full appearance-none cursor-pointer focus:outline-none",min:a.min,max:a.max,step:a.step,value:e,onChange:h=>s(parseFloat(h.target.value)),style:{backgroundImage:`linear-gradient(to right, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.85) ${c}%, rgba(255,255,255,0.2) ${c}%)`}})]})}function XT({sections:a,header:e}){var d;const[t,i]=fe.useState(!1),[s,o]=fe.useState((d=a[0])==null?void 0:d.key),c=a.filter(p=>p.entry.groups.length>0);if(c.length===0)return null;const u=c.find(p=>p.key===s)??c[0],h=u.entry.groups.some(p=>p.params.some(g=>u.values[g.path]!==void 0));return X.jsx("div",{className:"absolute left-6 top-24 bottom-32 z-50 w-[168px] flex flex-col font-mono pointer-events-auto",children:X.jsxs("div",{className:"bg-black/70 backdrop-blur-sm rounded-xl border border-white/20 flex flex-col min-h-0",children:[e&&X.jsx("div",{className:"border-b border-white/10",children:e}),X.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-2 border-b border-white/10",children:[X.jsx("button",{onClick:()=>i(p=>!p),className:"text-white/60 hover:text-white transition-colors shrink-0",title:t?"Show parameters":"Hide parameters",children:X.jsx(g1,{className:"w-3.5 h-3.5"})}),X.jsx("div",{className:"flex gap-1 flex-1 min-w-0",children:c.map(p=>{const g=p.entry.groups.some(m=>m.params.some(y=>p.values[y.path]!==void 0));return X.jsxs("button",{onClick:()=>{o(p.key),i(!1)},className:`px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider transition-all ${p.key===u.key?"bg-white/20 text-white":"text-white/40 hover:text-white/70"}`,children:[p.label,g&&X.jsx("span",{className:"ml-1 text-cyan-300",children:"•"})]},p.key)})}),h&&X.jsx("button",{onClick:()=>u.onReset(),title:`Reset every ${u.label} parameter`,className:"text-white/40 hover:text-white transition-colors shrink-0",children:X.jsx(p1,{className:"w-3 h-3"})})]}),!t&&X.jsx("div",{className:"overflow-y-auto px-3 py-2 min-h-0",children:u.entry.groups.map(p=>{if(p.visibleWhen){const y=u.values[p.visibleWhen.path]??Io(u.entry.config,p.visibleWhen.path)??0;if(!p.visibleWhen.equals.includes(Math.round(y)))return null}const m=(p.togglePath?u.values[p.togglePath]??Io(u.entry.config,p.togglePath)??1:1)>=.5;return X.jsxs("div",{className:"mb-3 last:mb-1",children:[p.togglePath?X.jsxs("button",{onClick:()=>u.onChange(p.togglePath,m?0:1),title:m?`Bypass ${p.name}`:`Enable ${p.name}`,className:"flex items-center gap-1.5 w-full mb-1.5 group/head",children:[X.jsx("span",{className:`w-1.5 h-1.5 rounded-full transition-colors ${m?"bg-cyan-300":"bg-white/20"}`}),X.jsx("span",{className:`text-[8px] tracking-widest uppercase transition-colors ${m?"text-white/55 group-hover/head:text-white/80":"text-white/25"}`,children:p.name})]}):X.jsx("div",{className:"text-[8px] text-white/35 tracking-widest uppercase mb-1.5",children:p.name}),X.jsx("div",{className:m?"":"opacity-35 pointer-events-none",children:p.params.map(y=>{const v=Io(u.entry.config,y.path);if(v===void 0)return null;const w=u.values[y.path]??v,_=y.needs?u.values[y.needs]??Io(u.entry.config,y.needs)??0:1;return X.jsx(WT,{spec:y,inert:!(_>0),value:w,isDefault:u.values[y.path]===void 0,onChange:S=>u.onChange(y.path,S),onReset:()=>u.onReset(y.path)},y.path)})})]},p.name)})})]})})}function jT({layers:a,selectedLayer:e,set:t,onSelect:i,onOpacityChange:s,onRemove:o}){return X.jsxs("div",{className:"px-3 pt-2 pb-1",children:[X.jsxs("div",{className:"mb-1.5 flex items-baseline justify-between",children:[X.jsx("span",{className:"text-[8px] uppercase tracking-widest text-white/35",children:"Layers"}),X.jsx("span",{className:"text-[8px] text-white/25",children:"L cycles · [ ] fade"})]}),a.map((c,u)=>{const h=u===e,d=t.indexOf(c.pattern);return X.jsxs("div",{className:`mb-1 rounded px-1.5 py-1 transition-colors ${h?"bg-white/[0.11]":"hover:bg-white/[0.05]"}`,children:[X.jsxs("div",{className:"flex items-center gap-1.5",children:[X.jsxs("button",{onClick:()=>i(u),title:h?"Editing this layer":"Edit this layer",className:"flex min-w-0 flex-1 items-center gap-1.5 text-left",children:[X.jsx("span",{className:`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[8px] ${h?"bg-white text-black":"bg-white/15 text-white/60"}`,children:d===-1?"·":zo(d)}),X.jsx("span",{className:`truncate text-[9px] ${h?"text-white":"text-white/55"}`,children:ls[c.pattern].short})]}),X.jsxs("span",{className:"shrink-0 text-[8px] tabular-nums text-white/45",children:[Math.round(c.opacity*100),"%"]}),a.length>1&&X.jsx("button",{onClick:()=>o(u),title:"Take this layer off",className:"shrink-0 px-0.5 text-[10px] leading-none text-white/25 transition-colors hover:text-white/80",children:"×"})]}),X.jsx("input",{type:"range","aria-label":`${ls[c.pattern].name} opacity`,className:"vj-slider mt-1 h-1 w-full cursor-pointer appearance-none rounded-full focus:outline-none",min:0,max:1,step:.01,value:c.opacity,onChange:p=>s(u,parseFloat(p.target.value)),onPointerDown:()=>i(u),style:{background:`linear-gradient(to right, rgba(255,255,255,${h?.85:.4}) ${c.opacity*100}%, rgba(255,255,255,0.12) ${c.opacity*100}%)`}})]},`${c.pattern}-${u}`)})]})}const Jg={geometric:{config:yf,groups:[{name:"Shape",params:[{path:"polygon.baseSize",label:"Size",min:20,max:400,step:5},{path:"polygon.strokeWidth",label:"Stroke",min:.5,max:20,step:.5},{path:"complexity.baseSides",label:"Sides",min:3,max:12,step:1,hint:"with no hands"},{path:"complexity.maxSides",label:"Max sides",min:3,max:24,step:1}]},{name:"Layers",params:[{path:"layers.count",label:"Count",min:1,max:20,step:1},{path:"layers.sizeGrowth",label:"Growth",min:0,max:1.5,step:.01},{path:"layers.rotationOffset",label:"Twist",min:0,max:2,step:.01},{path:"layers.baseOpacity",label:"Opacity",min:0,max:1,step:.01},{path:"layers.opacityFade",label:"Fade",min:0,max:.3,step:.005}]},{name:"Motion",params:[{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"},{path:"animation.baseRotationMultiplier",label:"Spin",min:0,max:.1,step:.001}]},{name:"Bridge & clap",params:[{path:"bridge.thickness",label:"Bridge",min:0,max:30,step:.5},{path:"bridge.waveAmplitude",label:"Bridge wave",min:0,max:150,step:1},{path:"vibration.shakeAmountX",label:"Shake X",min:0,max:200,step:1},{path:"vibration.shakeAmountY",label:"Shake Y",min:0,max:200,step:1},{path:"vibration.flashDuration",label:"Flash",min:0,max:3,step:.05}]}]},particles:{config:_f,groups:[{name:"Emission",params:[{path:"limits.maxParticles",label:"Max",min:5,max:500,step:5},{path:"emission.openHandRate",label:"Open hand",min:0,max:1,step:.01},{path:"emission.closedHandRate",label:"Closed hand",min:0,max:1,step:.01},{path:"controls.fadeOutRate",label:"Fade out",min:.005,max:.5,step:.005}]},{name:"Motion",params:[{path:"physics.initialVelocity",label:"Velocity",min:.5,max:20,step:.5},{path:"physics.damping",label:"Damping",min:.8,max:1,step:.005,hint:"1 = never slows"},{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"}]},{name:"Size",params:[{path:"size.baseRange.0",label:"Radius min",min:2,max:300,step:2},{path:"size.baseRange.1",label:"Radius max",min:2,max:400,step:2},{path:"size.growthMultiplier",label:"Grow",min:.2,max:6,step:.1},{path:"size.shrinkMultiplier",label:"Shrink",min:.05,max:2,step:.05},{path:"size.transitionSpeed",label:"Ease",min:.02,max:1,step:.01}]},{name:"Glow",params:[{path:"glow.layers",label:"Layers",min:0,max:8,step:1},{path:"glow.expansion",label:"Spread",min:0,max:2,step:.05},{path:"glow.layerFade",label:"Fade",min:0,max:1,step:.01}]},{name:"Clap",params:[{path:"explosion.particleCount",label:"Burst",min:0,max:300,step:5},{path:"explosion.forceMultiplier",label:"Force",min:0,max:50,step:1},{path:"explosion.sizeMultiplier",label:"Size",min:.2,max:6,step:.1}]}]},ripple:{config:gd,groups:[{name:"Hand",params:[{path:"stamp.radius",label:"Size",min:.01,max:.3,step:.005},{path:"stamp.strength",label:"Weight",min:.05,max:1,step:.01},{path:"stamp.fingerScale",label:"Fingers",min:0,max:1,step:.05,hint:"0 = palm only"},{path:"stamp.audioSwell",label:"Bass swell",min:0,max:3,step:.05}]},{name:"Trail",params:[{path:"field.decay",label:"Length",min:.8,max:.998,step:.002,hint:"higher = lingers"},{path:"field.spread",label:"Spread",min:.2,max:8,step:.1}]},{name:"Water",params:[{path:"refraction.amount",label:"Refraction",min:0,max:.4,step:.005},{path:"refraction.dispersion",label:"Dispersion",min:0,max:1.5,step:.05}]},{name:"Gloss",params:[{path:"highlight.amount",label:"Amount",min:0,max:3,step:.05},{path:"highlight.sharpness",label:"Sharpness",min:.5,max:20,step:.5},{path:"highlight.tint",label:"Tint",min:0,max:1,step:.05,hint:"palette into the gloss"}]}]},text:{config:xd,groups:[{name:"Movement",params:[{path:"mode",label:"Mode",min:0,max:4,step:1,labels:["Mask","Radial","Wave","Depth","Scatter"],hint:"each mode brings its own controls"},{path:"motion.handInfluence",label:"Hands",min:0,max:3,step:.05},{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"}]},{name:"Type",params:[{path:"type.fit",label:"Fit",min:.2,max:1.6,step:.02,hint:"word width in its cell"},{path:"type.weight",label:"Weight",min:100,max:900,step:100},{path:"type.tracking",label:"Tracking",min:-.1,max:1.2,step:.01},{path:"type.outline",label:"Outline",min:0,max:1,step:1,hint:"filled or hollow"},{path:"type.strokeWidth",label:"Stroke",min:.5,max:8,step:.5}]},{name:"Grid",visibleWhen:{path:"mode",equals:[0,1,2]},params:[{path:"grid.columns",label:"Columns",min:1,max:40,step:1},{path:"grid.rows",label:"Rows",min:1,max:60,step:1},{path:"grid.spread",label:"Spread",min:.2,max:3,step:.02},{path:"grid.breathe",label:"Breathe",min:0,max:1,step:.02},{path:"grid.breatheSpeed",label:"Breath speed",min:0,max:3,step:.05}]},{name:"Mask",visibleWhen:{path:"mode",equals:[0]},params:[{path:"mask.reach",label:"Reach",min:.02,max:.8,step:.01,hint:"hand size"},{path:"mask.threshold",label:"Threshold",min:.02,max:2,step:.02,hint:"lower fills more"},{path:"mask.softness",label:"Softness",min:0,max:1,step:.02,hint:"0 = hard cut"},{path:"mask.invert",label:"Invert",min:0,max:1,step:1}]},{name:"Radial",visibleWhen:{path:"mode",equals:[1]},params:[{path:"radial.strength",label:"Warp",min:-2,max:3,step:.05,hint:"negative pinches"},{path:"radial.power",label:"Bite",min:.4,max:5,step:.1},{path:"radial.pulse",label:"Pulse",min:0,max:2,step:.05},{path:"radial.pulseSpeed",label:"Pulse speed",min:0,max:3,step:.05}]},{name:"Wave",visibleWhen:{path:"mode",equals:[2]},params:[{path:"wave.amplitude",label:"Amount",min:0,max:.6,step:.01},{path:"wave.frequency",label:"Waves",min:.2,max:8,step:.1},{path:"wave.speed",label:"Speed",min:-4,max:4,step:.05},{path:"wave.scaleWave",label:"Swell",min:0,max:1,step:.02}]},{name:"Depth",visibleWhen:{path:"mode",equals:[3]},params:[{path:"depth.speed",label:"Fly",min:-2,max:2,step:.02},{path:"depth.spread",label:"Open",min:0,max:4,step:.05,hint:"tracking with distance"},{path:"depth.curve",label:"Curve",min:.5,max:4,step:.05},{path:"depth.steps",label:"Rows",min:2,max:40,step:1},{path:"depth.size",label:"Size",min:.02,max:.5,step:.005},{path:"depth.horizon",label:"Horizon",min:-.2,max:.8,step:.01}]},{name:"Scatter",visibleWhen:{path:"mode",equals:[4]},params:[{path:"scatter.amount",label:"Spread",min:0,max:1.5,step:.02,hint:"0 = readable"},{path:"scatter.spiral",label:"Spiral",min:0,max:1,step:1},{path:"scatter.stagger",label:"Stagger",min:0,max:2,step:.05},{path:"scatter.drift",label:"Drift",min:0,max:3,step:.05},{path:"scatter.size",label:"Letter size",min:.02,max:.5,step:.005}]},{name:"Colour",params:[{path:"color.rainbow",label:"Rainbow",min:0,max:1,step:1,hint:"ignores the palette"},{path:"color.step",label:"Hue step",min:0,max:120,step:1},{path:"color.cycleSpeed",label:"Cycle",min:0,max:3,step:.05}]},{name:"Audio",params:[{path:"audio.bassScale",label:"Bass swell",min:0,max:2,step:.05},{path:"audio.beatKick",label:"Beat kick",min:0,max:3,step:.05}]}]},video:{config:vd,groups:[{name:"Frame",params:[{path:"frame.zoom",label:"Zoom",min:.2,max:4,step:.05},{path:"frame.spreadZoom",label:"Spread zoom",min:0,max:3,step:.05},{path:"frame.handDrift",label:"Hand drift",min:0,max:.6,step:.01},{path:"frame.mirror",label:"Mirror",min:0,max:1,step:1}]},{name:"Slice",params:[{path:"slice.count",label:"Bands",min:1,max:60,step:1,hint:"1 = whole frame"},{path:"slice.offset",label:"Shear",min:0,max:.4,step:.005},{path:"slice.speed",label:"Speed",min:0,max:5,step:.05},{path:"slice.beatKick",label:"Beat kick",min:1,max:6,step:.1}]},{name:"Look",params:[{path:"look.tint",label:"Tint",min:0,max:1,step:.02,hint:"palette over the clip"},{path:"look.gain",label:"Gain",min:1,max:3,step:.05},{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"}]}]},mosaic:{config:_d,groups:[{name:"Mark",params:[{path:"mode",label:"Mode",min:0,max:3,step:1,labels:["Letters","Dots","Blocks","Bars"]},{path:"grid.columns",label:"Detail",min:8,max:140,step:1,hint:"cells across"},{path:"grid.fill",label:"Weight",min:.2,max:1.8,step:.05},{path:"grid.cellAspect",label:"Cell shape",min:.4,max:2.5,step:.05,hint:"above 1 = taller"},{path:"grid.spreadDensity",label:"Spread coarsens",min:0,max:1.5,step:.05}]},{name:"Image",params:[{path:"tone.contrast",label:"Contrast",min:.2,max:4,step:.05},{path:"tone.brightness",label:"Brightness",min:-.5,max:.5,step:.02},{path:"tone.floor",label:"Cut",min:0,max:.9,step:.01,hint:"darker cells draw nothing"},{path:"tone.invert",label:"Invert",min:0,max:1,step:1}]},{name:"Letters",visibleWhen:{path:"mode",equals:[0]},params:[{path:"letters.ramp",label:"Glyphs",min:0,max:1,step:1,labels:["Density ramp","Your word"]},{path:"letters.weight",label:"Weight",min:100,max:900,step:100},{path:"letters.outline",label:"Hollow",min:0,max:1,step:1}]},{name:"Shape",visibleWhen:{path:"mode",equals:[1,2,3]},params:[{path:"shape.minimum",label:"Floor",min:0,max:.6,step:.01,hint:"size of the faintest mark"},{path:"shape.rotate",label:"Turn",min:0,max:1,step:.02,hint:"blocks towards diamonds"},{path:"shape.anchor",label:"From the floor",min:0,max:1,step:1,hint:"bars only"}]},{name:"Warp",params:[{path:"warp.handPush",label:"Hand push",min:0,max:.3,step:.005},{path:"warp.ripple",label:"Ripple",min:0,max:2,step:.05},{path:"warp.rippleSpeed",label:"Ripple speed",min:0,max:4,step:.05}]},{name:"Colour",params:[{path:"colour.fromSource",label:"Own colour",min:0,max:1,step:.02,hint:"0 = your palette"},{path:"colour.spread",label:"Palette run",min:1,max:40,step:1},{path:"audio.bassScale",label:"Bass swell",min:0,max:2,step:.05},{path:"audio.beatKick",label:"Beat kick",min:0,max:1.5,step:.05},{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"}]}]},digitalblocks:{config:md,groups:[{name:"Hands",params:[{path:"chaos.range",label:"Ceiling",min:.05,max:1,step:.01,hint:"how wild it can get"},{path:"chaos.openness",label:"Open hand",min:0,max:1,step:.02},{path:"chaos.velocity",label:"Hand speed",min:0,max:1,step:.02},{path:"chaos.clap",label:"Clap",min:0,max:1,step:.02},{path:"chaos.ease",label:"Ease",min:.005,max:.3,step:.005,hint:"lower = calmer"},{path:"chaos.idle",label:"Idle",min:0,max:.5,step:.01}]},{name:"Motion",params:[{path:"speed.base",label:"Drift",min:0,max:.4,step:.005},{path:"speed.variation",label:"Spread",min:0,max:.5,step:.005},{path:"speed.chaos",label:"Chaos speed",min:0,max:1.5,step:.02}]},{name:"Grid",params:[{path:"strips.base",label:"Columns",min:2,max:60,step:1},{path:"strips.chaos",label:"Columns +",min:0,max:60,step:1},{path:"strips.blocks",label:"Blocks",min:1,max:40,step:1},{path:"strips.blocksChaos",label:"Blocks +",min:0,max:40,step:1}]}]},waves:{config:Sf,groups:[{name:"Wave",params:[{path:"waveCount.active",label:"Count",min:1,max:24,step:1,hint:"hands present"},{path:"waveCount.idle",label:"Count idle",min:1,max:24,step:1},{path:"wave.baseAmplitude",label:"Amplitude",min:0,max:400,step:5},{path:"wave.maxAmplitude",label:"Max amp",min:10,max:800,step:10},{path:"wave.baseFrequency",label:"Frequency",min:.001,max:.1,step:.001},{path:"wave.maxFrequency",label:"Max freq",min:.001,max:.2,step:.001}]},{name:"Line",params:[{path:"wave.segments",label:"Segments",min:20,max:600,step:10,hint:"lower = angular"},{path:"wave.lineThickness",label:"Thickness",min:.5,max:20,step:.5},{path:"visual.fillOpacity",label:"Fill",min:0,max:255,step:1}]},{name:"Layers",params:[{path:"layers.primarySpeed",label:"Speed 1",min:0,max:10,step:.1},{path:"layers.secondarySpeed",label:"Speed 2",min:0,max:10,step:.1},{path:"layers.tertiarySpeed",label:"Speed 3",min:0,max:10,step:.1},{path:"layers.secondaryAmplitude",label:"Amp 2",min:0,max:2,step:.01},{path:"layers.tertiaryAmplitude",label:"Amp 3",min:0,max:2,step:.01},{path:"fingerCountSpeed.maxSpeed",label:"Speed cap",min:.1,max:10,step:.1}]},{name:"Hands & focus",params:[{path:"handInfluence.strength",label:"Pull",min:0,max:3,step:.05},{path:"handInfluence.radius",label:"Reach",min:20,max:800,step:10},{path:"focalPoint.baseSize",label:"Dot size",min:0,max:100,step:1},{path:"focalPoint.pulseSpeed",label:"Pulse",min:0,max:20,step:.5},{path:"focalPoint.pulseAmount",label:"Pulse depth",min:0,max:1,step:.01},{path:"focalPoint.glowLayers",label:"Dot glow",min:0,max:10,step:1}]}]}},qT={config:Wo,groups:[{name:"Transition",togglePath:"transition.enabled",params:[{path:"transition.duration",label:"Crossfade",min:.05,max:5,step:.05,hint:"seconds between visuals"}]},{name:"Colour",togglePath:"colour.enabled",params:[{path:"colour.mix",label:"Mix",min:0,max:1,step:.01,hint:"stage opacity"},{path:"colour.hue",label:"Hue",min:-3.14,max:3.14,step:.01,hint:"turns the whole frame"},{path:"colour.saturation",label:"Saturation",min:0,max:2,step:.01,hint:"1 = untouched"}]},{name:"Feedback",togglePath:"feedback.enabled",params:[{path:"feedback.mix",label:"Mix",min:0,max:1,step:.01,hint:"stage opacity"},{path:"feedback.amount",label:"Amount",min:0,max:.99,step:.01,hint:"0 = off"},{needs:"feedback.amount",path:"feedback.zoom",label:"Zoom",min:.9,max:1.1,step:.001,hint:">1 tunnels out"},{needs:"feedback.amount",path:"feedback.rotate",label:"Rotate",min:-.05,max:.05,step:5e-4},{needs:"feedback.amount",path:"feedback.offsetX",label:"Drift X",min:-.02,max:.02,step:5e-4},{needs:"feedback.amount",path:"feedback.offsetY",label:"Drift Y",min:-.02,max:.02,step:5e-4},{path:"feedback.hueShift",label:"Trail hue",min:-.2,max:.2,step:.002,hint:"ages the trail — needs Amount"}]},{name:"Displace",togglePath:"displace.enabled",params:[{path:"displace.mix",label:"Mix",min:0,max:1,step:.01,hint:"stage opacity"},{path:"displace.amount",label:"Amount",min:0,max:.3,step:.002},{path:"displace.scale",label:"Scale",min:.5,max:40,step:.5},{path:"displace.speed",label:"Speed",min:0,max:3,step:.02}]},{name:"Chromatic",togglePath:"rgbSplit.enabled",params:[{path:"rgbSplit.mix",label:"Mix",min:0,max:1,step:.01,hint:"stage opacity"},{path:"rgbSplit.amount",label:"RGB split",min:0,max:.1,step:.001}]},{name:"Kaleidoscope",togglePath:"kaleido.enabled",params:[{path:"kaleido.mix",label:"Mix",min:0,max:1,step:.01,hint:"stage opacity"},{path:"kaleido.segments",label:"Segments",min:0,max:24,step:1,hint:"<2 = off"},{path:"kaleido.spin",label:"Spin",min:-3.14,max:3.14,step:.01}]},{name:"Quantize",togglePath:"quantize.enabled",params:[{path:"quantize.mix",label:"Mix",min:0,max:1,step:.01,hint:"stage opacity"},{path:"quantize.pixel",label:"Pixel size",min:0,max:64,step:1,hint:"<=1 = off"},{path:"quantize.levels",label:"Colour steps",min:0,max:16,step:1,hint:"<2 = off"}]},{name:"Bloom",togglePath:"bloom.enabled",params:[{path:"bloom.mix",label:"Mix",min:0,max:1,step:.01,hint:"stage opacity"},{path:"bloom.amount",label:"Amount",min:0,max:3,step:.05},{path:"bloom.threshold",label:"Threshold",min:0,max:1,step:.01}]}]},nv=1,ex=0,tx=2;function YT(a){return Math.min(1,.06+a*.94)}function iv(a){return .55+a*.45}function nx(a,e,t){var h;const i=YT(t),s=iv(t),o=e?{x:.5+(e.position.x-.5)/s,y:.5+(e.position.y-.5)/s}:a.position,c=o.x+(a.position.x-o.x)*i,u=o.y+(a.position.y-o.y)*i;return{...a,position:{x:.5+(c-.5)*s,y:.5+(u-.5)*s},velocity:a.velocity===void 0?void 0:a.velocity*t,landmarks:(h=a.landmarks)==null?void 0:h.map(d=>({...d,x:.5+(d.x-.5)*s,y:.5+(d.y-.5)*s}))}}function $T(a,e,t){return t===nv?a:{...a,left:a.left?nx(a.left,(e==null?void 0:e.left)??null,t):null,right:a.right?nx(a.right,(e==null?void 0:e.right)??null,t):null,clapIntensity:a.clapIntensity===void 0?void 0:a.clapIntensity*t,distanceBetweenHands:a.distanceBetweenHands===void 0?void 0:.4+(a.distanceBetweenHands-.4)*iv(t)}}function Lo(a,e,t){const i=e/100,s=t/100,o=(1-Math.abs(2*s-1))*i,c=o*(1-Math.abs(a/60%2-1)),u=s-o/2;let h=0,d=0,p=0;a<60?[h,d,p]=[o,c,0]:a<120?[h,d,p]=[c,o,0]:a<180?[h,d,p]=[0,o,c]:a<240?[h,d,p]=[0,c,o]:a<300?[h,d,p]=[c,0,o]:[h,d,p]=[o,0,c];const g=m=>Math.round((m+u)*255).toString(16).padStart(2,"0");return`#${g(h)}${g(d)}${g(p)}`}function KT(a,e,t){if(t==="grayscale")return["#FFFFFF","#000000","#FFFFFF","#000000"];if(t==="black")return[Lo(a,e,50),"#FFFFFF",Lo(a,e*.6,70),Lo(a,e*.8,35)];const i=Lo(a,e,50),s=Lo((a+180)%360,e,50);return[i,s,i,s]}const ZT=["video/mp4;codecs=avc1.42E01E,mp4a.40.2","video/mp4","video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"],QT=30,JT=12e6;function rv(){if(!(typeof MediaRecorder>"u")){for(const a of ZT)if(MediaRecorder.isTypeSupported(a))return a}}function eC(){return typeof MediaRecorder<"u"&&typeof HTMLCanvasElement.prototype.captureStream=="function"&&rv()!==void 0}class tC{constructor(e){F(this,"sources");F(this,"frame",null);F(this,"ctx",null);F(this,"recorder",null);F(this,"chunks",[]);F(this,"raf",0);F(this,"startedAt",0);F(this,"format","");F(this,"draw",()=>{this.raf=requestAnimationFrame(this.draw);const{ctx:e,frame:t}=this;if(!e||!t)return;const i=this.sources.canvas();if(!i)return;e.fillStyle="#000",e.fillRect(0,0,t.width,t.height);const s=Math.min(t.width/i.width,t.height/i.height),o=i.width*s,c=i.height*s;try{e.drawImage(i,(t.width-o)/2,(t.height-c)/2,o,c)}catch{return}const u=this.sources.camera();u&&u.readyState>=2&&u.videoWidth>0&&this.drawCamera(e,t,u)});this.sources=e}get recording(){return this.recorder!==null&&this.recorder.state==="recording"}get elapsed(){return this.startedAt?(performance.now()-this.startedAt)/1e3:0}start(){if(this.recording)return;const e=this.sources.canvas(),t=rv();if(!e||!t)return;this.format=t;const i=document.createElement("canvas");i.width=Math.max(2,e.width-e.width%2),i.height=Math.max(2,e.height-e.height%2);const s=i.getContext("2d",{alpha:!1});if(!s)return;this.frame=i,this.ctx=s;const o=i.captureStream(QT),c=this.sources.audio();if(c)for(const h of c.getAudioTracks())o.addTrack(h);const u=new MediaRecorder(o,{mimeType:t,videoBitsPerSecond:JT});this.chunks=[],u.ondataavailable=h=>{h.data.size>0&&this.chunks.push(h.data)},u.start(1e3),this.recorder=u,this.startedAt=performance.now(),this.draw()}stop(){const e=this.recorder;if(!e||e.state==="inactive")return Promise.resolve(null);const t=this.elapsed;return new Promise(i=>{e.onstop=()=>{cancelAnimationFrame(this.raf),this.raf=0,this.recorder=null,this.startedAt=0,this.frame=null,this.ctx=null;const s=new Blob(this.chunks,{type:this.format});this.chunks=[],i(s.size>0?{blob:s,extension:this.format.startsWith("video/mp4")?"mp4":"webm",seconds:t}:null)},e.stop()})}drawCamera(e,t,i){const s=Math.round(t.width*.014),o=Math.round(t.width*.17),c=Math.round(o*i.videoHeight/i.videoWidth),u=t.width-o-s,h=s,d=Math.round(o*.06);e.save(),e.beginPath(),typeof e.roundRect=="function"?e.roundRect(u,h,o,c,d):e.rect(u,h,o,c),e.clip(),e.translate(u+o,h),e.scale(-1,1),e.drawImage(i,0,0,o,c),e.restore(),e.save(),e.strokeStyle="rgba(255, 255, 255, 0.35)",e.lineWidth=Math.max(1,t.width*.001),e.beginPath(),typeof e.roundRect=="function"?e.roundRect(u,h,o,c,d):e.rect(u,h,o,c),e.stroke(),e.restore()}}function ix(a){const e=new Date().toISOString().slice(0,19).replace("T","-").replace(/:/g,""),t=URL.createObjectURL(a.blob),i=document.createElement("a");i.href=t,i.download=`n4thvj-${e}.${a.extension}`,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),6e4)}function Pa(a,e,t){try{const i=localStorage.getItem(a);if(i===null)return e;const s=JSON.parse(i);return t(s)?s:e}catch{return e}}function Ea(a,e){try{localStorage.setItem(a,JSON.stringify(e))}catch{}}const Sd=(a,e)=>t=>typeof t=="number"&&Number.isFinite(t)&&t>=a&&t<=e;function rx(){return{hue:Pa("vj-hue",245,Sd(0,360)),saturation:Pa("vj-saturation",100,Sd(0,100)),colorMode:Pa("vj-color-mode","contrast",a=>a==="black"||a==="contrast"||a==="grayscale")}}function nC(){const[a,e]=fe.useState(()=>[{pattern:"geometric",opacity:1,...rx()}]),[t,i]=fe.useState(0),s=(a[t]??a[0]).pattern,o=fe.useCallback(Ce=>{const Ve=a.findIndex(Le=>Le.pattern===Ce);if(Ve!==-1){i(Ve);return}e(Le=>Le.map((at,Dt)=>Dt===t?{...at,pattern:Ce}:at))},[a,t]),c=fe.useCallback(Ce=>{const Ve=a.findIndex(at=>at.pattern===Ce);if(Ve!==-1){if(a.length===1)return;e(a.filter((at,Dt)=>Dt!==Ve)),i(at=>at>Ve?at-1:Math.min(at,a.length-2));return}if(a.length>=T1)return;const Le=a[t]??a[0];e([...a,{pattern:Ce,opacity:C1,hue:Le.hue,saturation:Le.saturation,colorMode:Le.colorMode}])},[a,t]),u=fe.useCallback(()=>{i(Ce=>(Ce+1)%a.length)},[a.length]),h=fe.useCallback((Ce,Ve)=>{e(Le=>Le.map((at,Dt)=>Dt===Ce?{...at,opacity:Ve}:at))},[]),d=fe.useCallback(Ce=>{e(Ve=>Ve.length===1?Ve:Ve.filter((Le,at)=>at!==Ce)),i(Ve=>Ve>Ce?Ve-1:Math.min(Ve,a.length-2))},[a.length]),p=fe.useCallback(Ce=>{e(Ve=>Ve.map((Le,at)=>at===t?{...Le,opacity:Math.min(1,Math.max(0,Math.round((Le.opacity+Ce)*100)/100))}:Le))},[t]),[g,m]=fe.useState(!1),[y,v]=fe.useState(!0),w=a[t]??a[0],{hue:_,saturation:S,colorMode:b}=w;fe.useCallback(Ce=>{e(Ve=>Ve.map((Le,at)=>at===t?{...Le,...Ce}:Le))},[t]);const C=(Ce,Ve)=>typeof Ce=="function"?Ce(Ve):Ce,E=fe.useCallback(Ce=>{e(Ve=>Ve.map((Le,at)=>at===t?{...Le,hue:C(Ce,Le.hue)}:Le))},[t]),L=fe.useCallback(Ce=>{e(Ve=>Ve.map((Le,at)=>at===t?{...Le,saturation:C(Ce,Le.saturation)}:Le))},[t]),A=fe.useCallback(Ce=>{e(Ve=>Ve.map((Le,at)=>at===t?{...Le,colorMode:C(Ce,Le.colorMode)}:Le))},[t]),I=fe.useMemo(()=>a.map(Ce=>KT(Ce.hue,Ce.saturation,Ce.colorMode)),[a]),T=I[t]??I[0],[U,z]=fe.useState(!1),[D,B]=fe.useState(()=>Pa("vj-motion",nv,Sd(ex,tx)));fe.useEffect(()=>{Ea("vj-motion",D)},[D]);const $=fe.useCallback(Ce=>{B(Ve=>Math.min(tx,Math.max(ex,Math.round((Ve+Ce)*100)/100)))},[]),[J,V]=fe.useState(LT),[Z,K]=fe.useState({});fe.useEffect(()=>{IT(J)},[J]),fe.useEffect(()=>{const Ce=[];let Ve=!1;return UT().then(Le=>{if(Ve)return;const at={};for(const[Dt,{file:Ai,name:fs}]of Object.entries(Le)){const Ar=URL.createObjectURL(Ai);Ce.push(Ar),at[Dt]={url:Ar,name:fs,kind:Kg(Ai)}}K(at)}),()=>{Ve=!0,Ce.forEach(Le=>URL.revokeObjectURL(Le))}},[]);const W=fe.useCallback((Ce,Ve)=>{K(Le=>{const at=Le[Ce];at&&URL.revokeObjectURL(at.url);const Dt={...Le};return Ve?Dt[Ce]={url:URL.createObjectURL(Ve),name:Ve.name,kind:Kg(Ve)}:delete Dt[Ce],Dt}),Ve?ev(Ce,Ve,Ve.name).catch(()=>{}):tv(Ce).catch(()=>{})},[]),se=fe.useMemo(()=>({text:J,clips:Z}),[J,Z]),j=fe.useRef(null),O=fe.useRef(null),G=fe.useRef(null),pe=fe.useRef(!1),[Se,_e]=fe.useState(!1),[ee,xe]=fe.useState(0),me=fe.useMemo(()=>eC(),[]),Ie=fe.useRef(null);!Ie.current&&me&&(Ie.current=new tC({canvas:()=>j.current,camera:()=>pe.current?G.current:null,audio:()=>O.current}));const Be=fe.useCallback(()=>{const Ce=Ie.current;if(Ce){if(Ce.recording){_e(!1),Ce.stop().then(Ve=>{Ve&&ix(Ve)});return}Ce.start(),_e(Ce.recording)}},[]);fe.useEffect(()=>{if(!Se){xe(0);return}const Ce=setInterval(()=>{var Ve;xe(((Ve=Ie.current)==null?void 0:Ve.elapsed)??0)},500);return()=>clearInterval(Ce)},[Se]),fe.useEffect(()=>{const Ce=()=>{var Ve;(Ve=Ie.current)!=null&&Ve.recording&&Ie.current.stop().then(Le=>Le&&ix(Le))};return window.addEventListener("pagehide",Ce),()=>window.removeEventListener("pagehide",Ce)},[]);const[$e,wt]=fe.useState(!0),[ut,Tt]=fe.useState(()=>R0(Pa("vj-params",{},()=>!0))),[Ct,mt]=fe.useState(()=>R0(Pa("vj-fx",{},()=>!0)).fx??{}),Yt=fe.useCallback((Ce,Ve)=>{mt(Le=>({...Le,[Ce]:Ve}))},[]),Vt=(Ct["master.enabled"]??1)>=.5,on=fe.useCallback(()=>{mt(Ce=>({...Ce,"master.enabled":(Ce["master.enabled"]??1)>=.5?0:1}))},[]),te=fe.useCallback(Ce=>{mt(Ve=>{if(Ce===void 0)return{};const{[Ce]:Le,...at}=Ve;return at})},[]),Gt=fe.useCallback((Ce,Ve)=>{Tt(Le=>({...Le,[s]:{...Le[s],[Ce]:Ve}}))},[s]),_t=fe.useCallback(Ce=>{Tt(Ve=>{if(Ce===void 0){const{[s]:Dt,...Ai}=Ve;return Ai}const{[Ce]:Le,...at}=Ve[s]??{};return{...Ve,[s]:at}})},[s]),Ft=fe.useMemo(()=>a.map(Ce=>ut[Ce.pattern]),[a,ut]),[Te,Wt]=fe.useState(P1),[k,R]=fe.useState("library"),[re,ye]=fe.useState({left:null,right:null}),[Me,Re]=fe.useState(null);fe.useEffect(()=>{G.current=Me,pe.current=g},[Me,g]);const[ze,de]=fe.useState(!1),[ve,Ge]=fe.useState(!1),[Ue,ke]=fe.useState({bass:0,mid:0,high:0,overall:0,beat:!1,beatIntensity:0}),[Pe,ft]=fe.useState(.5),[st,yt]=fe.useState(!0),[q,Ne]=fe.useState(!0),[ge,Xe]=fe.useState(!0),[Fe,we]=fe.useState(0),Qe=re.left!==null||re.right!==null,dt=k==="vj"&&(ve||$e&&!Qe);fe.useEffect(()=>{if(!dt)return;let Ce;const Ve=()=>{we(Date.now()/1e3),Ce=requestAnimationFrame(Ve)};return Ve(),()=>cancelAnimationFrame(Ce)},[dt]),fe.useEffect(()=>{if(!U)return;const Ce=setInterval(()=>{E(Ve=>(Ve+1)%360)},50);return()=>clearInterval(Ce)},[U]);const Ot=ve?{left:{position:{x:.3+Math.sin(Fe)*.2*Ue.mid,y:.5+Ue.bass*.3},gesture:Ue.overall>.3?"open":"fist",fingerCount:st?Math.max(1,Math.ceil(Ue.mid*5)):5,velocity:st?Ue.mid:.5},right:{position:{x:.7-Math.sin(Fe)*.2*Ue.mid,y:.5+Ue.bass*.3},gesture:Ue.overall>.3?"open":"fist",fingerCount:st?Math.max(1,Math.ceil(Ue.mid*5)):5,velocity:st?Ue.mid:.5},clapping:ge&&Ue.beat,clapIntensity:Ue.beatIntensity,distanceBetweenHands:.4-Ue.bass*.2}:Qe||!$e?re:Qx(Fe),Rt=fe.useRef(null),bn=$T(Ot,Rt.current,D);Rt.current=bn,fe.useEffect(()=>{Ea("vj-hue",_),Ea("vj-saturation",S),Ea("vj-color-mode",b)},[_,S,b]),fe.useEffect(()=>{Ea("vj-params",ut)},[ut]),fe.useEffect(()=>{Ea("vj-fx",{fx:Ct})},[Ct]),fe.useEffect(()=>{L1(Te)},[Te]);const jn=fe.useCallback(()=>{Te.length!==0&&(e([{pattern:Te[0],opacity:1,...rx()}]),i(0),R("vj"))},[Te]),ai=fe.useCallback(Ce=>{if(Te.length===0)return;const Ve=Te.indexOf(s),at=Ve===-1?Ce==="next"?0:Te.length-1:(Ve+(Ce==="next"?1:-1)+Te.length)%Te.length;o(Te[at])},[s,Te,o]),oi=fe.useRef(null);fe.useEffect(()=>{const Ce=Le=>{if(Le.key==="Control"){A("contrast");return}if(Le.key==="Alt"){A("grayscale");return}if(Le.key==="Meta"){A("black");return}if(Le.ctrlKey||Le.metaKey||Le.altKey)return;if(Le.key.toLowerCase()==="c"){m(Dt=>!Dt);return}if(Le.key.toLowerCase()==="a"){Ge(Dt=>!Dt);return}if(Le.key.toLowerCase()==="r"){Be();return}if(Le.key.toLowerCase()==="x"){on();return}if(Le.key.toLowerCase()==="i"){wt(Dt=>!Dt);return}if(Le.key.toLowerCase()==="d"){o("flowfield");return}if(Le.key==="Escape"){R("library");return}if(Le.key.toLowerCase()==="l"){u();return}if(Le.key==="-"){$(-.1);return}if(Le.key==="="||Le.key==="+"){$(.1);return}if(Le.key==="["){p(-.1);return}if(Le.key==="]"){p(.1);return}const at=Te[vf(Le.key)];if(at){if(Le.repeat||oi.current)return;oi.current={key:Le.key.toLowerCase(),fired:!1,timer:window.setTimeout(()=>{oi.current&&(oi.current.fired=!0),c(at)},ox)};return}switch(Le.key){case"ArrowLeft":Le.preventDefault(),ai("prev");break;case"ArrowRight":Le.preventDefault(),ai("next");break;case"ArrowUp":Le.preventDefault(),L(Dt=>Math.min(100,Dt+5));break;case"ArrowDown":Le.preventDefault(),L(Dt=>Math.max(0,Dt-5));break}},Ve=Le=>{const at=oi.current;if(!at||at.key!==Le.key.toLowerCase()||(clearTimeout(at.timer),oi.current=null,at.fired))return;const Dt=Te[vf(Le.key)];Dt&&o(Dt)};return window.addEventListener("keydown",Ce),window.addEventListener("keyup",Ve),()=>{window.removeEventListener("keydown",Ce),window.removeEventListener("keyup",Ve)}},[Te,ai,on,o,c,u,p,$,Be]),fe.useEffect(()=>{const Ce=Ve=>{Ve.preventDefault(),v(Le=>!Le)};return window.addEventListener("contextmenu",Ce),()=>window.removeEventListener("contextmenu",Ce)},[]),fe.useEffect(()=>{(s==="face"||s.startsWith("smokehand"))&&m(!0)},[s]);const sr=()=>{de(!1)},Cr=()=>{de(!1)},Ci={...Ue,mid:st?Ue.mid:0,high:q?Ue.high:0,beat:ge?Ue.beat:!1,beatIntensity:ge?Ue.beatIntensity:0};return k==="library"?X.jsx(VT,{set:Te,onSetChange:Wt,onStart:jn,text:J,onTextChange:V,clips:Z,onClipChange:W}):X.jsxs("div",{className:"relative w-screen h-screen overflow-hidden bg-black",children:[ze&&X.jsx(H1,{onGrant:sr,onSkip:Cr}),X.jsx(TT,{handData:bn,layerColors:I,layers:a,videoElement:Me,audioData:Ci,layerParams:Ft,content:se,motion:D,fxParams:Ct,onCanvasReady:Ce=>{j.current=Ce}}),X.jsx("div",{className:`absolute top-4 right-4 ${g?"opacity-100":"opacity-0 pointer-events-none"}`,children:X.jsx(E1,{onVideoReady:Re})}),Me&&s!=="face"&&X.jsx(k1,{videoElement:Me,onHandData:ye}),X.jsx(CT,{enabled:ve,sensitivity:Pe,onAudioData:ke,onStream:Ce=>{O.current=Ce}}),y&&X.jsx(XT,{header:X.jsx(jT,{layers:a,selectedLayer:t,set:Te,onSelect:i,onOpacityChange:h,onRemove:d}),sections:[...Jg[s]?[{key:"shape",label:"SHAPE",entry:Jg[s],values:ut[s]??{},onChange:Gt,onReset:_t}]:[],{key:"fx",label:"FX",entry:qT,values:Ct,onChange:Yt,onReset:te}]}),y&&X.jsx(U1,{currentPattern:s,onPatternChange:o,layers:a,selectedLayer:t,onPatternHold:c,onLayerCycle:u,showCamera:g,onCameraToggle:()=>m(!g),handData:re,selectedColors:T,colorMode:b,hue:_,saturation:S,onHueChange:E,onSaturationChange:L,onColorModeChange:A,autoHueEnabled:U,onAutoHueToggle:()=>z(Ce=>!Ce),set:Te,onOpenLibrary:()=>R("library"),audioEnabled:ve,onAudioToggle:()=>Ge(!ve),audioSensitivity:Pe,onAudioSensitivityChange:ft,audioControlSpeed:st,onAudioControlSpeedChange:yt,audioControlDensity:q,onAudioControlDensityChange:Ne,audioTriggerBeats:ge,onAudioTriggerBeatsChange:Xe,motion:D,onMotionChange:B,idleDrive:$e,onIdleDriveToggle:()=>wt(Ce=>!Ce),fxEnabled:Vt,fxActive:wT(Ct),onFxToggle:on,canRecord:me,recording:Se,recordSeconds:ee,onRecordToggle:Be})]})}const sv=document.getElementById("root");if(!sv)throw new Error("Root element #root not found");Y_.createRoot(sv).render(X.jsx(nC,{}));try{sessionStorage.removeItem("vj-stale-bundle-reload")}catch{}
