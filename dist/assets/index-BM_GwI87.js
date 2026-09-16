var $1=Object.defineProperty;var K1=(a,e,t)=>e in a?$1(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var U=(a,e,t)=>K1(a,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();var Ch={exports:{}},Ro={},Ah={exports:{}},Ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var g0;function Z1(){if(g0)return Ct;g0=1;var a=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function m(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,w={};function _(O,ee,me){this.props=O,this.context=ee,this.refs=w,this.updater=me||y}_.prototype.isReactComponent={},_.prototype.setState=function(O,ee){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ee,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function S(){}S.prototype=_.prototype;function b(O,ee,me){this.props=O,this.context=ee,this.refs=w,this.updater=me||y}var C=b.prototype=new S;C.constructor=b,v(C,_.prototype),C.isPureReactComponent=!0;var E=Array.isArray,L=Object.prototype.hasOwnProperty,A={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function T(O,ee,me){var we,ve={},q=null,pe=null;if(ee!=null)for(we in ee.ref!==void 0&&(pe=ee.ref),ee.key!==void 0&&(q=""+ee.key),ee)L.call(ee,we)&&!I.hasOwnProperty(we)&&(ve[we]=ee[we]);var oe=arguments.length-2;if(oe===1)ve.children=me;else if(1<oe){for(var Me=Array(oe),ze=0;ze<oe;ze++)Me[ze]=arguments[ze+2];ve.children=Me}if(O&&O.defaultProps)for(we in oe=O.defaultProps,oe)ve[we]===void 0&&(ve[we]=oe[we]);return{$$typeof:a,type:O,key:q,ref:pe,props:ve,_owner:A.current}}function F(O,ee){return{$$typeof:a,type:O.type,key:ee,ref:O.ref,props:O.props,_owner:O._owner}}function z(O){return typeof O=="object"&&O!==null&&O.$$typeof===a}function D(O){var ee={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(me){return ee[me]})}var H=/\/+/g;function te(O,ee){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):ee.toString(36)}function se(O,ee,me,we,ve){var q=typeof O;(q==="undefined"||q==="boolean")&&(O=null);var pe=!1;if(O===null)pe=!0;else switch(q){case"string":case"number":pe=!0;break;case"object":switch(O.$$typeof){case a:case e:pe=!0}}if(pe)return pe=O,ve=ve(pe),O=we===""?"."+te(pe,0):we,E(ve)?(me="",O!=null&&(me=O.replace(H,"$&/")+"/"),se(ve,ee,me,"",function(ze){return ze})):ve!=null&&(z(ve)&&(ve=F(ve,me+(!ve.key||pe&&pe.key===ve.key?"":(""+ve.key).replace(H,"$&/")+"/")+O)),ee.push(ve)),1;if(pe=0,we=we===""?".":we+":",E(O))for(var oe=0;oe<O.length;oe++){q=O[oe];var Me=we+te(q,oe);pe+=se(q,ee,me,Me,ve)}else if(Me=m(O),typeof Me=="function")for(O=Me.call(O),oe=0;!(q=O.next()).done;)q=q.value,Me=we+te(q,oe++),pe+=se(q,ee,me,Me,ve);else if(q==="object")throw ee=String(O),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return pe}function W(O,ee,me){if(O==null)return O;var we=[],ve=0;return se(O,we,"","",function(q){return ee.call(me,q,ve++)}),we}function V(O){if(O._status===-1){var ee=O._result;ee=ee(),ee.then(function(me){(O._status===0||O._status===-1)&&(O._status=1,O._result=me)},function(me){(O._status===0||O._status===-1)&&(O._status=2,O._result=me)}),O._status===-1&&(O._status=0,O._result=ee)}if(O._status===1)return O._result.default;throw O._result}var X={current:null},j={transition:null},ie={ReactCurrentDispatcher:X,ReactCurrentBatchConfig:j,ReactCurrentOwner:A};function Q(){throw Error("act(...) is not supported in production builds of React.")}return Ct.Children={map:W,forEach:function(O,ee,me){W(O,function(){ee.apply(this,arguments)},me)},count:function(O){var ee=0;return W(O,function(){ee++}),ee},toArray:function(O){return W(O,function(ee){return ee})||[]},only:function(O){if(!z(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ct.Component=_,Ct.Fragment=t,Ct.Profiler=s,Ct.PureComponent=b,Ct.StrictMode=i,Ct.Suspense=h,Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ie,Ct.act=Q,Ct.cloneElement=function(O,ee,me){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var we=v({},O.props),ve=O.key,q=O.ref,pe=O._owner;if(ee!=null){if(ee.ref!==void 0&&(q=ee.ref,pe=A.current),ee.key!==void 0&&(ve=""+ee.key),O.type&&O.type.defaultProps)var oe=O.type.defaultProps;for(Me in ee)L.call(ee,Me)&&!I.hasOwnProperty(Me)&&(we[Me]=ee[Me]===void 0&&oe!==void 0?oe[Me]:ee[Me])}var Me=arguments.length-2;if(Me===1)we.children=me;else if(1<Me){oe=Array(Me);for(var ze=0;ze<Me;ze++)oe[ze]=arguments[ze+2];we.children=oe}return{$$typeof:a,type:O.type,key:ve,ref:q,props:we,_owner:pe}},Ct.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:o,_context:O},O.Consumer=O},Ct.createElement=T,Ct.createFactory=function(O){var ee=T.bind(null,O);return ee.type=O,ee},Ct.createRef=function(){return{current:null}},Ct.forwardRef=function(O){return{$$typeof:u,render:O}},Ct.isValidElement=z,Ct.lazy=function(O){return{$$typeof:p,_payload:{_status:-1,_result:O},_init:V}},Ct.memo=function(O,ee){return{$$typeof:f,type:O,compare:ee===void 0?null:ee}},Ct.startTransition=function(O){var ee=j.transition;j.transition={};try{O()}finally{j.transition=ee}},Ct.unstable_act=Q,Ct.useCallback=function(O,ee){return X.current.useCallback(O,ee)},Ct.useContext=function(O){return X.current.useContext(O)},Ct.useDebugValue=function(){},Ct.useDeferredValue=function(O){return X.current.useDeferredValue(O)},Ct.useEffect=function(O,ee){return X.current.useEffect(O,ee)},Ct.useId=function(){return X.current.useId()},Ct.useImperativeHandle=function(O,ee,me){return X.current.useImperativeHandle(O,ee,me)},Ct.useInsertionEffect=function(O,ee){return X.current.useInsertionEffect(O,ee)},Ct.useLayoutEffect=function(O,ee){return X.current.useLayoutEffect(O,ee)},Ct.useMemo=function(O,ee){return X.current.useMemo(O,ee)},Ct.useReducer=function(O,ee,me){return X.current.useReducer(O,ee,me)},Ct.useRef=function(O){return X.current.useRef(O)},Ct.useState=function(O){return X.current.useState(O)},Ct.useSyncExternalStore=function(O,ee,me){return X.current.useSyncExternalStore(O,ee,me)},Ct.useTransition=function(){return X.current.useTransition()},Ct.version="18.3.1",Ct}var x0;function Ed(){return x0||(x0=1,Ah.exports=Z1()),Ah.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v0;function Q1(){if(v0)return Ro;v0=1;var a=Ed(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(u,h,f){var p,g={},m=null,y=null;f!==void 0&&(m=""+f),h.key!==void 0&&(m=""+h.key),h.ref!==void 0&&(y=h.ref);for(p in h)i.call(h,p)&&!o.hasOwnProperty(p)&&(g[p]=h[p]);if(u&&u.defaultProps)for(p in h=u.defaultProps,h)g[p]===void 0&&(g[p]=h[p]);return{$$typeof:e,type:u,key:m,ref:y,props:g,_owner:s.current}}return Ro.Fragment=t,Ro.jsx=c,Ro.jsxs=c,Ro}var _0;function J1(){return _0||(_0=1,Ch.exports=Q1()),Ch.exports}var G=J1(),Ql={},Rh={exports:{}},ii={},Ph={exports:{}},Lh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0;function e_(){return y0||(y0=1,(function(a){function e(j,ie){var Q=j.length;j.push(ie);e:for(;0<Q;){var O=Q-1>>>1,ee=j[O];if(0<s(ee,ie))j[O]=ie,j[Q]=ee,Q=O;else break e}}function t(j){return j.length===0?null:j[0]}function i(j){if(j.length===0)return null;var ie=j[0],Q=j.pop();if(Q!==ie){j[0]=Q;e:for(var O=0,ee=j.length,me=ee>>>1;O<me;){var we=2*(O+1)-1,ve=j[we],q=we+1,pe=j[q];if(0>s(ve,Q))q<ee&&0>s(pe,ve)?(j[O]=pe,j[q]=Q,O=q):(j[O]=ve,j[we]=Q,O=we);else if(q<ee&&0>s(pe,Q))j[O]=pe,j[q]=Q,O=q;else break e}}return ie}function s(j,ie){var Q=j.sortIndex-ie.sortIndex;return Q!==0?Q:j.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;a.unstable_now=function(){return o.now()}}else{var c=Date,u=c.now();a.unstable_now=function(){return c.now()-u}}var h=[],f=[],p=1,g=null,m=3,y=!1,v=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(j){for(var ie=t(f);ie!==null;){if(ie.callback===null)i(f);else if(ie.startTime<=j)i(f),ie.sortIndex=ie.expirationTime,e(h,ie);else break;ie=t(f)}}function E(j){if(w=!1,C(j),!v)if(t(h)!==null)v=!0,V(L);else{var ie=t(f);ie!==null&&X(E,ie.startTime-j)}}function L(j,ie){v=!1,w&&(w=!1,S(T),T=-1),y=!0;var Q=m;try{for(C(ie),g=t(h);g!==null&&(!(g.expirationTime>ie)||j&&!D());){var O=g.callback;if(typeof O=="function"){g.callback=null,m=g.priorityLevel;var ee=O(g.expirationTime<=ie);ie=a.unstable_now(),typeof ee=="function"?g.callback=ee:g===t(h)&&i(h),C(ie)}else i(h);g=t(h)}if(g!==null)var me=!0;else{var we=t(f);we!==null&&X(E,we.startTime-ie),me=!1}return me}finally{g=null,m=Q,y=!1}}var A=!1,I=null,T=-1,F=5,z=-1;function D(){return!(a.unstable_now()-z<F)}function H(){if(I!==null){var j=a.unstable_now();z=j;var ie=!0;try{ie=I(!0,j)}finally{ie?te():(A=!1,I=null)}}else A=!1}var te;if(typeof b=="function")te=function(){b(H)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,W=se.port2;se.port1.onmessage=H,te=function(){W.postMessage(null)}}else te=function(){_(H,0)};function V(j){I=j,A||(A=!0,te())}function X(j,ie){T=_(function(){j(a.unstable_now())},ie)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(j){j.callback=null},a.unstable_continueExecution=function(){v||y||(v=!0,V(L))},a.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<j?Math.floor(1e3/j):5},a.unstable_getCurrentPriorityLevel=function(){return m},a.unstable_getFirstCallbackNode=function(){return t(h)},a.unstable_next=function(j){switch(m){case 1:case 2:case 3:var ie=3;break;default:ie=m}var Q=m;m=ie;try{return j()}finally{m=Q}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(j,ie){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var Q=m;m=j;try{return ie()}finally{m=Q}},a.unstable_scheduleCallback=function(j,ie,Q){var O=a.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?O+Q:O):Q=O,j){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=Q+ee,j={id:p++,callback:ie,priorityLevel:j,startTime:Q,expirationTime:ee,sortIndex:-1},Q>O?(j.sortIndex=Q,e(f,j),t(h)===null&&j===t(f)&&(w?(S(T),T=-1):w=!0,X(E,Q-O))):(j.sortIndex=ee,e(h,j),v||y||(v=!0,V(L))),j},a.unstable_shouldYield=D,a.unstable_wrapCallback=function(j){var ie=m;return function(){var Q=m;m=ie;try{return j.apply(this,arguments)}finally{m=Q}}}})(Lh)),Lh}var S0;function t_(){return S0||(S0=1,Ph.exports=e_()),Ph.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M0;function n_(){if(M0)return ii;M0=1;var a=Ed(),e=t_();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function o(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function m(n){return h.call(g,n)?!0:h.call(p,n)?!1:f.test(n)?g[n]=!0:(p[n]=!0,!1)}function y(n,r,l,d){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function v(n,r,l,d){if(r===null||typeof r>"u"||y(n,r,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function w(n,r,l,d,x,M,P){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=d,this.attributeNamespace=x,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=M,this.removeEmptyString=P}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];_[r]=new w(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(S,b);_[r]=new w(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(S,b);_[r]=new w(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(S,b);_[r]=new w(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function C(n,r,l,d){var x=_.hasOwnProperty(r)?_[r]:null;(x!==null?x.type!==0:d||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(v(r,l,x,d)&&(l=null),d||x===null?m(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):x.mustUseProperty?n[x.propertyName]=l===null?x.type===3?!1:"":l:(r=x.attributeName,d=x.attributeNamespace,l===null?n.removeAttribute(r):(x=x.type,l=x===3||x===4&&l===!0?"":""+l,d?n.setAttributeNS(d,r,l):n.setAttribute(r,l))))}var E=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),A=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),D=Symbol.for("react.context"),H=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),X=Symbol.for("react.offscreen"),j=Symbol.iterator;function ie(n){return n===null||typeof n!="object"?null:(n=j&&n[j]||n["@@iterator"],typeof n=="function"?n:null)}var Q=Object.assign,O;function ee(n){if(O===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var me=!1;function we(n,r){if(!n||me)return"";me=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(de){var d=de}Reflect.construct(n,[],r)}else{try{r.call()}catch(de){d=de}n.call(r.prototype)}else{try{throw Error()}catch(de){d=de}n()}}catch(de){if(de&&d&&typeof de.stack=="string"){for(var x=de.stack.split(`
`),M=d.stack.split(`
`),P=x.length-1,B=M.length-1;1<=P&&0<=B&&x[P]!==M[B];)B--;for(;1<=P&&0<=B;P--,B--)if(x[P]!==M[B]){if(P!==1||B!==1)do if(P--,B--,0>B||x[P]!==M[B]){var $=`
`+x[P].replace(" at new "," at ");return n.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",n.displayName)),$}while(1<=P&&0<=B);break}}}finally{me=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?ee(n):""}function ve(n){switch(n.tag){case 5:return ee(n.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return n=we(n.type,!1),n;case 11:return n=we(n.type.render,!1),n;case 1:return n=we(n.type,!0),n;default:return""}}function q(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case A:return"Portal";case F:return"Profiler";case T:return"StrictMode";case te:return"Suspense";case se:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case z:return(n._context.displayName||"Context")+".Provider";case H:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case W:return r=n.displayName||null,r!==null?r:q(n.type)||"Memo";case V:r=n._payload,n=n._init;try{return q(n(r))}catch{}}return null}function pe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return q(r);case 8:return r===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function oe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Me(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function ze(n){var r=Me(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),d=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var x=l.get,M=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return x.call(this)},set:function(P){d=""+P,M.call(this,P)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(P){d=""+P},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Ve(n){n._valueTracker||(n._valueTracker=ze(n))}function yt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),d="";return n&&(d=Me(n)?n.checked?"true":"false":n.value),n=d,n!==l?(r.setValue(n),!0):!1}function lt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function St(n,r){var l=r.checked;return Q({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function Rt(n,r){var l=r.defaultValue==null?"":r.defaultValue,d=r.checked!=null?r.checked:r.defaultChecked;l=oe(r.value!=null?r.value:l),n._wrapperState={initialChecked:d,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function gt(n,r){r=r.checked,r!=null&&C(n,"checked",r,!1)}function Xt(n,r){gt(n,r);var l=oe(r.value),d=r.type;if(l!=null)d==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(d==="submit"||d==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?hn(n,r.type,l):r.hasOwnProperty("defaultValue")&&hn(n,r.type,oe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function kt(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var d=r.type;if(!(d!=="submit"&&d!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function hn(n,r,l){(r!=="number"||lt(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var K=Array.isArray;function Ot(n,r,l,d){if(n=n.options,r){r={};for(var x=0;x<l.length;x++)r["$"+l[x]]=!0;for(l=0;l<n.length;l++)x=r.hasOwnProperty("$"+n[l].value),n[l].selected!==x&&(n[l].selected=x),x&&d&&(n[l].defaultSelected=!0)}else{for(l=""+oe(l),r=null,x=0;x<n.length;x++){if(n[x].value===l){n[x].selected=!0,d&&(n[x].defaultSelected=!0);return}r!==null||n[x].disabled||(r=n[x])}r!==null&&(r.selected=!0)}}function xt(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return Q({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ut(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(K(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:oe(l)}}function Be(n,r){var l=oe(r.value),d=oe(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),d!=null&&(n.defaultValue=""+d)}function Wt(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function k(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function R(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?k(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var re,_e=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,d,x){MSApp.execUnsafeLocalFunction(function(){return n(r,l,d,x)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(re=re||document.createElement("div"),re.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=re.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function be(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Pe).forEach(function(n){Oe.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Pe[r]=Pe[n]})});function ge(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Pe.hasOwnProperty(n)&&Pe[n]?(""+r).trim():r+"px"}function ye(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var d=l.indexOf("--")===0,x=ge(l,r[l],d);l==="float"&&(l="cssFloat"),d?n.setProperty(l,x):n[l]=x}}var We=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qe(n,r){if(r){if(We[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Ue(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ne=null;function Qe(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var pt=null,wt=null,Y=null;function Le(n){if(n=po(n)){if(typeof pt!="function")throw Error(t(280));var r=n.stateNode;r&&(r=dl(r),pt(n.stateNode,n.type,r))}}function xe(n){wt?Y?Y.push(n):Y=[n]:wt=n}function Ge(){if(wt){var n=wt,r=Y;if(Y=wt=null,Le(n),r)for(n=0;n<r.length;n++)Le(r[n])}}function De(n,r){return n(r)}function Ee(){}var et=!1;function ft(n,r,l){if(et)return n(r,l);et=!0;try{return De(n,r,l)}finally{et=!1,(wt!==null||Y!==null)&&(Ee(),Ge())}}function zt(n,r){var l=n.stateNode;if(l===null)return null;var d=dl(l);if(d===null)return null;l=d[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(n=n.type,d=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!d;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var ot=!1;if(u)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){ot=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{ot=!1}function Vn(n,r,l,d,x,M,P,B,$){var de=Array.prototype.slice.call(arguments,3);try{r.apply(l,de)}catch(Ce){this.onError(Ce)}}var Pi=!1,$n=null,lr=!1,cr=null,yi={onError:function(n){Pi=!0,$n=n}};function fs(n,r,l,d,x,M,P,B,$){Pi=!1,$n=null,Vn.apply(yi,arguments)}function ds(n,r,l,d,x,M,P,B,$){if(fs.apply(this,arguments),Pi){if(Pi){var de=$n;Pi=!1,$n=null}else throw Error(t(198));lr||(lr=!0,cr=de)}}function oi(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function ur(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function hr(n){if(oi(n)!==n)throw Error(t(188))}function li(n){var r=n.alternate;if(!r){if(r=oi(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,d=r;;){var x=l.return;if(x===null)break;var M=x.alternate;if(M===null){if(d=x.return,d!==null){l=d;continue}break}if(x.child===M.child){for(M=x.child;M;){if(M===l)return hr(x),n;if(M===d)return hr(x),r;M=M.sibling}throw Error(t(188))}if(l.return!==d.return)l=x,d=M;else{for(var P=!1,B=x.child;B;){if(B===l){P=!0,l=x,d=M;break}if(B===d){P=!0,d=x,l=M;break}B=B.sibling}if(!P){for(B=M.child;B;){if(B===l){P=!0,l=M,d=x;break}if(B===d){P=!0,d=M,l=x;break}B=B.sibling}if(!P)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function ps(n){return n=li(n),n!==null?ms(n):null}function ms(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=ms(n);if(r!==null)return r;n=n.sibling}return null}var gs=e.unstable_scheduleCallback,Se=e.unstable_cancelCallback,Ie=e.unstable_shouldYield,Ae=e.unstable_requestPaint,je=e.unstable_now,It=e.unstable_getCurrentPriorityLevel,qi=e.unstable_ImmediatePriority,N=e.unstable_UserBlockingPriority,ne=e.unstable_NormalPriority,fe=e.unstable_LowPriority,ce=e.unstable_IdlePriority,le=null,He=null;function Ze(n){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(le,n,void 0,(n.current.flags&128)===128)}catch{}}var ke=Math.clz32?Math.clz32:vt,nt=Math.log,at=Math.LN2;function vt(n){return n>>>=0,n===0?32:31-(nt(n)/at|0)|0}var _t=64,rt=4194304;function Lt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function jt(n,r){var l=n.pendingLanes;if(l===0)return 0;var d=0,x=n.suspendedLanes,M=n.pingedLanes,P=l&268435455;if(P!==0){var B=P&~x;B!==0?d=Lt(B):(M&=P,M!==0&&(d=Lt(M)))}else P=l&~x,P!==0?d=Lt(P):M!==0&&(d=Lt(M));if(d===0)return 0;if(r!==0&&r!==d&&(r&x)===0&&(x=d&-d,M=r&-r,x>=M||x===16&&(M&4194240)!==0))return r;if((d&4)!==0&&(d|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=d;0<r;)l=31-ke(r),x=1<<l,d|=n[l],r&=~x;return d}function Jt(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ht(n,r){for(var l=n.suspendedLanes,d=n.pingedLanes,x=n.expirationTimes,M=n.pendingLanes;0<M;){var P=31-ke(M),B=1<<P,$=x[P];$===-1?((B&l)===0||(B&d)!==0)&&(x[P]=Jt(B,r)):$<=r&&(n.expiredLanes|=B),M&=~B}}function fn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ye(){var n=_t;return _t<<=1,(_t&4194240)===0&&(_t=64),n}function In(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function Et(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-ke(r),n[r]=l}function Kn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var d=n.eventTimes;for(n=n.expirationTimes;0<l;){var x=31-ke(l),M=1<<x;r[x]=0,d[x]=-1,n[x]=-1,l&=~M}}function Zn(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var d=31-ke(l),x=1<<d;x&r|n[d]&r&&(n[d]|=r),l&=~x}}var Tt=0;function fr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Bt,$t,Li,Gt,Ii,Yi=!1,xs=[],Fr=null,Ur=null,Dr=null,Za=new Map,Qa=new Map,kr=[],xv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jd(n,r){switch(n){case"focusin":case"focusout":Fr=null;break;case"dragenter":case"dragleave":Ur=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":Za.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qa.delete(r.pointerId)}}function Ja(n,r,l,d,x,M){return n===null||n.nativeEvent!==M?(n={blockedOn:r,domEventName:l,eventSystemFlags:d,nativeEvent:M,targetContainers:[x]},r!==null&&(r=po(r),r!==null&&$t(r)),n):(n.eventSystemFlags|=d,r=n.targetContainers,x!==null&&r.indexOf(x)===-1&&r.push(x),n)}function vv(n,r,l,d,x){switch(r){case"focusin":return Fr=Ja(Fr,n,r,l,d,x),!0;case"dragenter":return Ur=Ja(Ur,n,r,l,d,x),!0;case"mouseover":return Dr=Ja(Dr,n,r,l,d,x),!0;case"pointerover":var M=x.pointerId;return Za.set(M,Ja(Za.get(M)||null,n,r,l,d,x)),!0;case"gotpointercapture":return M=x.pointerId,Qa.set(M,Ja(Qa.get(M)||null,n,r,l,d,x)),!0}return!1}function ep(n){var r=vs(n.target);if(r!==null){var l=oi(r);if(l!==null){if(r=l.tag,r===13){if(r=ur(l),r!==null){n.blockedOn=r,Ii(n.priority,function(){Li(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Jo(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=eu(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var d=new l.constructor(l.type,l);Ne=d,l.target.dispatchEvent(d),Ne=null}else return r=po(l),r!==null&&$t(r),n.blockedOn=l,!1;r.shift()}return!0}function tp(n,r,l){Jo(n)&&l.delete(r)}function _v(){Yi=!1,Fr!==null&&Jo(Fr)&&(Fr=null),Ur!==null&&Jo(Ur)&&(Ur=null),Dr!==null&&Jo(Dr)&&(Dr=null),Za.forEach(tp),Qa.forEach(tp)}function eo(n,r){n.blockedOn===r&&(n.blockedOn=null,Yi||(Yi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,_v)))}function to(n){function r(x){return eo(x,n)}if(0<xs.length){eo(xs[0],n);for(var l=1;l<xs.length;l++){var d=xs[l];d.blockedOn===n&&(d.blockedOn=null)}}for(Fr!==null&&eo(Fr,n),Ur!==null&&eo(Ur,n),Dr!==null&&eo(Dr,n),Za.forEach(r),Qa.forEach(r),l=0;l<kr.length;l++)d=kr[l],d.blockedOn===n&&(d.blockedOn=null);for(;0<kr.length&&(l=kr[0],l.blockedOn===null);)ep(l),l.blockedOn===null&&kr.shift()}var qs=E.ReactCurrentBatchConfig,el=!0;function yv(n,r,l,d){var x=Tt,M=qs.transition;qs.transition=null;try{Tt=1,Jc(n,r,l,d)}finally{Tt=x,qs.transition=M}}function Sv(n,r,l,d){var x=Tt,M=qs.transition;qs.transition=null;try{Tt=4,Jc(n,r,l,d)}finally{Tt=x,qs.transition=M}}function Jc(n,r,l,d){if(el){var x=eu(n,r,l,d);if(x===null)xu(n,r,d,tl,l),Jd(n,d);else if(vv(x,n,r,l,d))d.stopPropagation();else if(Jd(n,d),r&4&&-1<xv.indexOf(n)){for(;x!==null;){var M=po(x);if(M!==null&&Bt(M),M=eu(n,r,l,d),M===null&&xu(n,r,d,tl,l),M===x)break;x=M}x!==null&&d.stopPropagation()}else xu(n,r,d,null,l)}}var tl=null;function eu(n,r,l,d){if(tl=null,n=Qe(d),n=vs(n),n!==null)if(r=oi(n),r===null)n=null;else if(l=r.tag,l===13){if(n=ur(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return tl=n,null}function np(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(It()){case qi:return 1;case N:return 4;case ne:case fe:return 16;case ce:return 536870912;default:return 16}default:return 16}}var Or=null,tu=null,nl=null;function ip(){if(nl)return nl;var n,r=tu,l=r.length,d,x="value"in Or?Or.value:Or.textContent,M=x.length;for(n=0;n<l&&r[n]===x[n];n++);var P=l-n;for(d=1;d<=P&&r[l-d]===x[M-d];d++);return nl=x.slice(n,1<d?1-d:void 0)}function il(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function rl(){return!0}function rp(){return!1}function ci(n){function r(l,d,x,M,P){this._reactName=l,this._targetInst=x,this.type=d,this.nativeEvent=M,this.target=P,this.currentTarget=null;for(var B in n)n.hasOwnProperty(B)&&(l=n[B],this[B]=l?l(M):M[B]);return this.isDefaultPrevented=(M.defaultPrevented!=null?M.defaultPrevented:M.returnValue===!1)?rl:rp,this.isPropagationStopped=rp,this}return Q(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),r}var Ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nu=ci(Ys),no=Q({},Ys,{view:0,detail:0}),Mv=ci(no),iu,ru,io,sl=Q({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:au,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==io&&(io&&n.type==="mousemove"?(iu=n.screenX-io.screenX,ru=n.screenY-io.screenY):ru=iu=0,io=n),iu)},movementY:function(n){return"movementY"in n?n.movementY:ru}}),sp=ci(sl),wv=Q({},sl,{dataTransfer:0}),bv=ci(wv),Ev=Q({},no,{relatedTarget:0}),su=ci(Ev),Tv=Q({},Ys,{animationName:0,elapsedTime:0,pseudoElement:0}),Cv=ci(Tv),Av=Q({},Ys,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Rv=ci(Av),Pv=Q({},Ys,{data:0}),ap=ci(Pv),Lv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Iv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Nv[n])?!!r[n]:!1}function au(){return Fv}var Uv=Q({},no,{key:function(n){if(n.key){var r=Lv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=il(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Iv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:au,charCode:function(n){return n.type==="keypress"?il(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?il(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Dv=ci(Uv),kv=Q({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),op=ci(kv),Ov=Q({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:au}),zv=ci(Ov),Bv=Q({},Ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hv=ci(Bv),Gv=Q({},sl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Vv=ci(Gv),Wv=[9,13,27,32],ou=u&&"CompositionEvent"in window,ro=null;u&&"documentMode"in document&&(ro=document.documentMode);var Xv=u&&"TextEvent"in window&&!ro,lp=u&&(!ou||ro&&8<ro&&11>=ro),cp=" ",up=!1;function hp(n,r){switch(n){case"keyup":return Wv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var $s=!1;function jv(n,r){switch(n){case"compositionend":return fp(r);case"keypress":return r.which!==32?null:(up=!0,cp);case"textInput":return n=r.data,n===cp&&up?null:n;default:return null}}function qv(n,r){if($s)return n==="compositionend"||!ou&&hp(n,r)?(n=ip(),nl=tu=Or=null,$s=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return lp&&r.locale!=="ko"?null:r.data;default:return null}}var Yv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dp(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Yv[n.type]:r==="textarea"}function pp(n,r,l,d){xe(d),r=ul(r,"onChange"),0<r.length&&(l=new nu("onChange","change",null,l,d),n.push({event:l,listeners:r}))}var so=null,ao=null;function $v(n){Ip(n,0)}function al(n){var r=ea(n);if(yt(r))return n}function Kv(n,r){if(n==="change")return r}var mp=!1;if(u){var lu;if(u){var cu="oninput"in document;if(!cu){var gp=document.createElement("div");gp.setAttribute("oninput","return;"),cu=typeof gp.oninput=="function"}lu=cu}else lu=!1;mp=lu&&(!document.documentMode||9<document.documentMode)}function xp(){so&&(so.detachEvent("onpropertychange",vp),ao=so=null)}function vp(n){if(n.propertyName==="value"&&al(ao)){var r=[];pp(r,ao,n,Qe(n)),ft($v,r)}}function Zv(n,r,l){n==="focusin"?(xp(),so=r,ao=l,so.attachEvent("onpropertychange",vp)):n==="focusout"&&xp()}function Qv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return al(ao)}function Jv(n,r){if(n==="click")return al(r)}function e1(n,r){if(n==="input"||n==="change")return al(r)}function t1(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Ni=typeof Object.is=="function"?Object.is:t1;function oo(n,r){if(Ni(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),d=Object.keys(r);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var x=l[d];if(!h.call(r,x)||!Ni(n[x],r[x]))return!1}return!0}function _p(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function yp(n,r){var l=_p(n);n=0;for(var d;l;){if(l.nodeType===3){if(d=n+l.textContent.length,n<=r&&d>=r)return{node:l,offset:r-n};n=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=_p(l)}}function Sp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Sp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Mp(){for(var n=window,r=lt();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=lt(n.document)}return r}function uu(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function n1(n){var r=Mp(),l=n.focusedElem,d=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&Sp(l.ownerDocument.documentElement,l)){if(d!==null&&uu(l)){if(r=d.start,n=d.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var x=l.textContent.length,M=Math.min(d.start,x);d=d.end===void 0?M:Math.min(d.end,x),!n.extend&&M>d&&(x=d,d=M,M=x),x=yp(l,M);var P=yp(l,d);x&&P&&(n.rangeCount!==1||n.anchorNode!==x.node||n.anchorOffset!==x.offset||n.focusNode!==P.node||n.focusOffset!==P.offset)&&(r=r.createRange(),r.setStart(x.node,x.offset),n.removeAllRanges(),M>d?(n.addRange(r),n.extend(P.node,P.offset)):(r.setEnd(P.node,P.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var i1=u&&"documentMode"in document&&11>=document.documentMode,Ks=null,hu=null,lo=null,fu=!1;function wp(n,r,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;fu||Ks==null||Ks!==lt(d)||(d=Ks,"selectionStart"in d&&uu(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),lo&&oo(lo,d)||(lo=d,d=ul(hu,"onSelect"),0<d.length&&(r=new nu("onSelect","select",null,r,l),n.push({event:r,listeners:d}),r.target=Ks)))}function ol(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Zs={animationend:ol("Animation","AnimationEnd"),animationiteration:ol("Animation","AnimationIteration"),animationstart:ol("Animation","AnimationStart"),transitionend:ol("Transition","TransitionEnd")},du={},bp={};u&&(bp=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function ll(n){if(du[n])return du[n];if(!Zs[n])return n;var r=Zs[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in bp)return du[n]=r[l];return n}var Ep=ll("animationend"),Tp=ll("animationiteration"),Cp=ll("animationstart"),Ap=ll("transitionend"),Rp=new Map,Pp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(n,r){Rp.set(n,r),o(r,[n])}for(var pu=0;pu<Pp.length;pu++){var mu=Pp[pu],r1=mu.toLowerCase(),s1=mu[0].toUpperCase()+mu.slice(1);zr(r1,"on"+s1)}zr(Ep,"onAnimationEnd"),zr(Tp,"onAnimationIteration"),zr(Cp,"onAnimationStart"),zr("dblclick","onDoubleClick"),zr("focusin","onFocus"),zr("focusout","onBlur"),zr(Ap,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),a1=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function Lp(n,r,l){var d=n.type||"unknown-event";n.currentTarget=l,ds(d,r,void 0,n),n.currentTarget=null}function Ip(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var d=n[l],x=d.event;d=d.listeners;e:{var M=void 0;if(r)for(var P=d.length-1;0<=P;P--){var B=d[P],$=B.instance,de=B.currentTarget;if(B=B.listener,$!==M&&x.isPropagationStopped())break e;Lp(x,B,de),M=$}else for(P=0;P<d.length;P++){if(B=d[P],$=B.instance,de=B.currentTarget,B=B.listener,$!==M&&x.isPropagationStopped())break e;Lp(x,B,de),M=$}}}if(lr)throw n=cr,lr=!1,cr=null,n}function Kt(n,r){var l=r[wu];l===void 0&&(l=r[wu]=new Set);var d=n+"__bubble";l.has(d)||(Np(r,n,2,!1),l.add(d))}function gu(n,r,l){var d=0;r&&(d|=4),Np(l,n,d,r)}var cl="_reactListening"+Math.random().toString(36).slice(2);function uo(n){if(!n[cl]){n[cl]=!0,i.forEach(function(l){l!=="selectionchange"&&(a1.has(l)||gu(l,!1,n),gu(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[cl]||(r[cl]=!0,gu("selectionchange",!1,r))}}function Np(n,r,l,d){switch(np(r)){case 1:var x=yv;break;case 4:x=Sv;break;default:x=Jc}l=x.bind(null,r,l,n),x=void 0,!ot||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(x=!0),d?x!==void 0?n.addEventListener(r,l,{capture:!0,passive:x}):n.addEventListener(r,l,!0):x!==void 0?n.addEventListener(r,l,{passive:x}):n.addEventListener(r,l,!1)}function xu(n,r,l,d,x){var M=d;if((r&1)===0&&(r&2)===0&&d!==null)e:for(;;){if(d===null)return;var P=d.tag;if(P===3||P===4){var B=d.stateNode.containerInfo;if(B===x||B.nodeType===8&&B.parentNode===x)break;if(P===4)for(P=d.return;P!==null;){var $=P.tag;if(($===3||$===4)&&($=P.stateNode.containerInfo,$===x||$.nodeType===8&&$.parentNode===x))return;P=P.return}for(;B!==null;){if(P=vs(B),P===null)return;if($=P.tag,$===5||$===6){d=M=P;continue e}B=B.parentNode}}d=d.return}ft(function(){var de=M,Ce=Qe(l),Re=[];e:{var Te=Rp.get(n);if(Te!==void 0){var $e=nu,tt=n;switch(n){case"keypress":if(il(l)===0)break e;case"keydown":case"keyup":$e=Dv;break;case"focusin":tt="focus",$e=su;break;case"focusout":tt="blur",$e=su;break;case"beforeblur":case"afterblur":$e=su;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$e=sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$e=bv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$e=zv;break;case Ep:case Tp:case Cp:$e=Cv;break;case Ap:$e=Hv;break;case"scroll":$e=Mv;break;case"wheel":$e=Vv;break;case"copy":case"cut":case"paste":$e=Rv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$e=op}var it=(r&4)!==0,an=!it&&n==="scroll",ae=it?Te!==null?Te+"Capture":null:Te;it=[];for(var J=de,ue;J!==null;){ue=J;var Fe=ue.stateNode;if(ue.tag===5&&Fe!==null&&(ue=Fe,ae!==null&&(Fe=zt(J,ae),Fe!=null&&it.push(ho(J,Fe,ue)))),an)break;J=J.return}0<it.length&&(Te=new $e(Te,tt,null,l,Ce),Re.push({event:Te,listeners:it}))}}if((r&7)===0){e:{if(Te=n==="mouseover"||n==="pointerover",$e=n==="mouseout"||n==="pointerout",Te&&l!==Ne&&(tt=l.relatedTarget||l.fromElement)&&(vs(tt)||tt[dr]))break e;if(($e||Te)&&(Te=Ce.window===Ce?Ce:(Te=Ce.ownerDocument)?Te.defaultView||Te.parentWindow:window,$e?(tt=l.relatedTarget||l.toElement,$e=de,tt=tt?vs(tt):null,tt!==null&&(an=oi(tt),tt!==an||tt.tag!==5&&tt.tag!==6)&&(tt=null)):($e=null,tt=de),$e!==tt)){if(it=sp,Fe="onMouseLeave",ae="onMouseEnter",J="mouse",(n==="pointerout"||n==="pointerover")&&(it=op,Fe="onPointerLeave",ae="onPointerEnter",J="pointer"),an=$e==null?Te:ea($e),ue=tt==null?Te:ea(tt),Te=new it(Fe,J+"leave",$e,l,Ce),Te.target=an,Te.relatedTarget=ue,Fe=null,vs(Ce)===de&&(it=new it(ae,J+"enter",tt,l,Ce),it.target=ue,it.relatedTarget=an,Fe=it),an=Fe,$e&&tt)t:{for(it=$e,ae=tt,J=0,ue=it;ue;ue=Qs(ue))J++;for(ue=0,Fe=ae;Fe;Fe=Qs(Fe))ue++;for(;0<J-ue;)it=Qs(it),J--;for(;0<ue-J;)ae=Qs(ae),ue--;for(;J--;){if(it===ae||ae!==null&&it===ae.alternate)break t;it=Qs(it),ae=Qs(ae)}it=null}else it=null;$e!==null&&Fp(Re,Te,$e,it,!1),tt!==null&&an!==null&&Fp(Re,an,tt,it,!0)}}e:{if(Te=de?ea(de):window,$e=Te.nodeName&&Te.nodeName.toLowerCase(),$e==="select"||$e==="input"&&Te.type==="file")var st=Kv;else if(dp(Te))if(mp)st=e1;else{st=Qv;var ct=Zv}else($e=Te.nodeName)&&$e.toLowerCase()==="input"&&(Te.type==="checkbox"||Te.type==="radio")&&(st=Jv);if(st&&(st=st(n,de))){pp(Re,st,l,Ce);break e}ct&&ct(n,Te,de),n==="focusout"&&(ct=Te._wrapperState)&&ct.controlled&&Te.type==="number"&&hn(Te,"number",Te.value)}switch(ct=de?ea(de):window,n){case"focusin":(dp(ct)||ct.contentEditable==="true")&&(Ks=ct,hu=de,lo=null);break;case"focusout":lo=hu=Ks=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,wp(Re,l,Ce);break;case"selectionchange":if(i1)break;case"keydown":case"keyup":wp(Re,l,Ce)}var ut;if(ou)e:{switch(n){case"compositionstart":var mt="onCompositionStart";break e;case"compositionend":mt="onCompositionEnd";break e;case"compositionupdate":mt="onCompositionUpdate";break e}mt=void 0}else $s?hp(n,l)&&(mt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(mt="onCompositionStart");mt&&(lp&&l.locale!=="ko"&&($s||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&$s&&(ut=ip()):(Or=Ce,tu="value"in Or?Or.value:Or.textContent,$s=!0)),ct=ul(de,mt),0<ct.length&&(mt=new ap(mt,n,null,l,Ce),Re.push({event:mt,listeners:ct}),ut?mt.data=ut:(ut=fp(l),ut!==null&&(mt.data=ut)))),(ut=Xv?jv(n,l):qv(n,l))&&(de=ul(de,"onBeforeInput"),0<de.length&&(Ce=new ap("onBeforeInput","beforeinput",null,l,Ce),Re.push({event:Ce,listeners:de}),Ce.data=ut))}Ip(Re,r)})}function ho(n,r,l){return{instance:n,listener:r,currentTarget:l}}function ul(n,r){for(var l=r+"Capture",d=[];n!==null;){var x=n,M=x.stateNode;x.tag===5&&M!==null&&(x=M,M=zt(n,l),M!=null&&d.unshift(ho(n,M,x)),M=zt(n,r),M!=null&&d.push(ho(n,M,x))),n=n.return}return d}function Qs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Fp(n,r,l,d,x){for(var M=r._reactName,P=[];l!==null&&l!==d;){var B=l,$=B.alternate,de=B.stateNode;if($!==null&&$===d)break;B.tag===5&&de!==null&&(B=de,x?($=zt(l,M),$!=null&&P.unshift(ho(l,$,B))):x||($=zt(l,M),$!=null&&P.push(ho(l,$,B)))),l=l.return}P.length!==0&&n.push({event:r,listeners:P})}var o1=/\r\n?/g,l1=/\u0000|\uFFFD/g;function Up(n){return(typeof n=="string"?n:""+n).replace(o1,`
`).replace(l1,"")}function hl(n,r,l){if(r=Up(r),Up(n)!==r&&l)throw Error(t(425))}function fl(){}var vu=null,_u=null;function yu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Su=typeof setTimeout=="function"?setTimeout:void 0,c1=typeof clearTimeout=="function"?clearTimeout:void 0,Dp=typeof Promise=="function"?Promise:void 0,u1=typeof queueMicrotask=="function"?queueMicrotask:typeof Dp<"u"?function(n){return Dp.resolve(null).then(n).catch(h1)}:Su;function h1(n){setTimeout(function(){throw n})}function Mu(n,r){var l=r,d=0;do{var x=l.nextSibling;if(n.removeChild(l),x&&x.nodeType===8)if(l=x.data,l==="/$"){if(d===0){n.removeChild(x),to(r);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=x}while(l);to(r)}function Br(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function kp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Js=Math.random().toString(36).slice(2),$i="__reactFiber$"+Js,fo="__reactProps$"+Js,dr="__reactContainer$"+Js,wu="__reactEvents$"+Js,f1="__reactListeners$"+Js,d1="__reactHandles$"+Js;function vs(n){var r=n[$i];if(r)return r;for(var l=n.parentNode;l;){if(r=l[dr]||l[$i]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=kp(n);n!==null;){if(l=n[$i])return l;n=kp(n)}return r}n=l,l=n.parentNode}return null}function po(n){return n=n[$i]||n[dr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ea(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function dl(n){return n[fo]||null}var bu=[],ta=-1;function Hr(n){return{current:n}}function Zt(n){0>ta||(n.current=bu[ta],bu[ta]=null,ta--)}function qt(n,r){ta++,bu[ta]=n.current,n.current=r}var Gr={},Dn=Hr(Gr),Qn=Hr(!1),_s=Gr;function na(n,r){var l=n.type.contextTypes;if(!l)return Gr;var d=n.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===r)return d.__reactInternalMemoizedMaskedChildContext;var x={},M;for(M in l)x[M]=r[M];return d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=x),x}function Jn(n){return n=n.childContextTypes,n!=null}function pl(){Zt(Qn),Zt(Dn)}function Op(n,r,l){if(Dn.current!==Gr)throw Error(t(168));qt(Dn,r),qt(Qn,l)}function zp(n,r,l){var d=n.stateNode;if(r=r.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var x in d)if(!(x in r))throw Error(t(108,pe(n)||"Unknown",x));return Q({},l,d)}function ml(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Gr,_s=Dn.current,qt(Dn,n),qt(Qn,Qn.current),!0}function Bp(n,r,l){var d=n.stateNode;if(!d)throw Error(t(169));l?(n=zp(n,r,_s),d.__reactInternalMemoizedMergedChildContext=n,Zt(Qn),Zt(Dn),qt(Dn,n)):Zt(Qn),qt(Qn,l)}var pr=null,gl=!1,Eu=!1;function Hp(n){pr===null?pr=[n]:pr.push(n)}function p1(n){gl=!0,Hp(n)}function Vr(){if(!Eu&&pr!==null){Eu=!0;var n=0,r=Tt;try{var l=pr;for(Tt=1;n<l.length;n++){var d=l[n];do d=d(!0);while(d!==null)}pr=null,gl=!1}catch(x){throw pr!==null&&(pr=pr.slice(n+1)),gs(qi,Vr),x}finally{Tt=r,Eu=!1}}return null}var ia=[],ra=0,xl=null,vl=0,Si=[],Mi=0,ys=null,mr=1,gr="";function Ss(n,r){ia[ra++]=vl,ia[ra++]=xl,xl=n,vl=r}function Gp(n,r,l){Si[Mi++]=mr,Si[Mi++]=gr,Si[Mi++]=ys,ys=n;var d=mr;n=gr;var x=32-ke(d)-1;d&=~(1<<x),l+=1;var M=32-ke(r)+x;if(30<M){var P=x-x%5;M=(d&(1<<P)-1).toString(32),d>>=P,x-=P,mr=1<<32-ke(r)+x|l<<x|d,gr=M+n}else mr=1<<M|l<<x|d,gr=n}function Tu(n){n.return!==null&&(Ss(n,1),Gp(n,1,0))}function Cu(n){for(;n===xl;)xl=ia[--ra],ia[ra]=null,vl=ia[--ra],ia[ra]=null;for(;n===ys;)ys=Si[--Mi],Si[Mi]=null,gr=Si[--Mi],Si[Mi]=null,mr=Si[--Mi],Si[Mi]=null}var ui=null,hi=null,en=!1,Fi=null;function Vp(n,r){var l=Ti(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Wp(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,ui=n,hi=Br(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,ui=n,hi=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=ys!==null?{id:mr,overflow:gr}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=Ti(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,ui=n,hi=null,!0):!1;default:return!1}}function Au(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ru(n){if(en){var r=hi;if(r){var l=r;if(!Wp(n,r)){if(Au(n))throw Error(t(418));r=Br(l.nextSibling);var d=ui;r&&Wp(n,r)?Vp(d,l):(n.flags=n.flags&-4097|2,en=!1,ui=n)}}else{if(Au(n))throw Error(t(418));n.flags=n.flags&-4097|2,en=!1,ui=n}}}function Xp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ui=n}function _l(n){if(n!==ui)return!1;if(!en)return Xp(n),en=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!yu(n.type,n.memoizedProps)),r&&(r=hi)){if(Au(n))throw jp(),Error(t(418));for(;r;)Vp(n,r),r=Br(r.nextSibling)}if(Xp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){hi=Br(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}hi=null}}else hi=ui?Br(n.stateNode.nextSibling):null;return!0}function jp(){for(var n=hi;n;)n=Br(n.nextSibling)}function sa(){hi=ui=null,en=!1}function Pu(n){Fi===null?Fi=[n]:Fi.push(n)}var m1=E.ReactCurrentBatchConfig;function mo(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,n));var x=d,M=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===M?r.ref:(r=function(P){var B=x.refs;P===null?delete B[M]:B[M]=P},r._stringRef=M,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function yl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function qp(n){var r=n._init;return r(n._payload)}function Yp(n){function r(ae,J){if(n){var ue=ae.deletions;ue===null?(ae.deletions=[J],ae.flags|=16):ue.push(J)}}function l(ae,J){if(!n)return null;for(;J!==null;)r(ae,J),J=J.sibling;return null}function d(ae,J){for(ae=new Map;J!==null;)J.key!==null?ae.set(J.key,J):ae.set(J.index,J),J=J.sibling;return ae}function x(ae,J){return ae=Zr(ae,J),ae.index=0,ae.sibling=null,ae}function M(ae,J,ue){return ae.index=ue,n?(ue=ae.alternate,ue!==null?(ue=ue.index,ue<J?(ae.flags|=2,J):ue):(ae.flags|=2,J)):(ae.flags|=1048576,J)}function P(ae){return n&&ae.alternate===null&&(ae.flags|=2),ae}function B(ae,J,ue,Fe){return J===null||J.tag!==6?(J=Sh(ue,ae.mode,Fe),J.return=ae,J):(J=x(J,ue),J.return=ae,J)}function $(ae,J,ue,Fe){var st=ue.type;return st===I?Ce(ae,J,ue.props.children,Fe,ue.key):J!==null&&(J.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===V&&qp(st)===J.type)?(Fe=x(J,ue.props),Fe.ref=mo(ae,J,ue),Fe.return=ae,Fe):(Fe=Wl(ue.type,ue.key,ue.props,null,ae.mode,Fe),Fe.ref=mo(ae,J,ue),Fe.return=ae,Fe)}function de(ae,J,ue,Fe){return J===null||J.tag!==4||J.stateNode.containerInfo!==ue.containerInfo||J.stateNode.implementation!==ue.implementation?(J=Mh(ue,ae.mode,Fe),J.return=ae,J):(J=x(J,ue.children||[]),J.return=ae,J)}function Ce(ae,J,ue,Fe,st){return J===null||J.tag!==7?(J=Rs(ue,ae.mode,Fe,st),J.return=ae,J):(J=x(J,ue),J.return=ae,J)}function Re(ae,J,ue){if(typeof J=="string"&&J!==""||typeof J=="number")return J=Sh(""+J,ae.mode,ue),J.return=ae,J;if(typeof J=="object"&&J!==null){switch(J.$$typeof){case L:return ue=Wl(J.type,J.key,J.props,null,ae.mode,ue),ue.ref=mo(ae,null,J),ue.return=ae,ue;case A:return J=Mh(J,ae.mode,ue),J.return=ae,J;case V:var Fe=J._init;return Re(ae,Fe(J._payload),ue)}if(K(J)||ie(J))return J=Rs(J,ae.mode,ue,null),J.return=ae,J;yl(ae,J)}return null}function Te(ae,J,ue,Fe){var st=J!==null?J.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number")return st!==null?null:B(ae,J,""+ue,Fe);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case L:return ue.key===st?$(ae,J,ue,Fe):null;case A:return ue.key===st?de(ae,J,ue,Fe):null;case V:return st=ue._init,Te(ae,J,st(ue._payload),Fe)}if(K(ue)||ie(ue))return st!==null?null:Ce(ae,J,ue,Fe,null);yl(ae,ue)}return null}function $e(ae,J,ue,Fe,st){if(typeof Fe=="string"&&Fe!==""||typeof Fe=="number")return ae=ae.get(ue)||null,B(J,ae,""+Fe,st);if(typeof Fe=="object"&&Fe!==null){switch(Fe.$$typeof){case L:return ae=ae.get(Fe.key===null?ue:Fe.key)||null,$(J,ae,Fe,st);case A:return ae=ae.get(Fe.key===null?ue:Fe.key)||null,de(J,ae,Fe,st);case V:var ct=Fe._init;return $e(ae,J,ue,ct(Fe._payload),st)}if(K(Fe)||ie(Fe))return ae=ae.get(ue)||null,Ce(J,ae,Fe,st,null);yl(J,Fe)}return null}function tt(ae,J,ue,Fe){for(var st=null,ct=null,ut=J,mt=J=0,Cn=null;ut!==null&&mt<ue.length;mt++){ut.index>mt?(Cn=ut,ut=null):Cn=ut.sibling;var Dt=Te(ae,ut,ue[mt],Fe);if(Dt===null){ut===null&&(ut=Cn);break}n&&ut&&Dt.alternate===null&&r(ae,ut),J=M(Dt,J,mt),ct===null?st=Dt:ct.sibling=Dt,ct=Dt,ut=Cn}if(mt===ue.length)return l(ae,ut),en&&Ss(ae,mt),st;if(ut===null){for(;mt<ue.length;mt++)ut=Re(ae,ue[mt],Fe),ut!==null&&(J=M(ut,J,mt),ct===null?st=ut:ct.sibling=ut,ct=ut);return en&&Ss(ae,mt),st}for(ut=d(ae,ut);mt<ue.length;mt++)Cn=$e(ut,ae,mt,ue[mt],Fe),Cn!==null&&(n&&Cn.alternate!==null&&ut.delete(Cn.key===null?mt:Cn.key),J=M(Cn,J,mt),ct===null?st=Cn:ct.sibling=Cn,ct=Cn);return n&&ut.forEach(function(Qr){return r(ae,Qr)}),en&&Ss(ae,mt),st}function it(ae,J,ue,Fe){var st=ie(ue);if(typeof st!="function")throw Error(t(150));if(ue=st.call(ue),ue==null)throw Error(t(151));for(var ct=st=null,ut=J,mt=J=0,Cn=null,Dt=ue.next();ut!==null&&!Dt.done;mt++,Dt=ue.next()){ut.index>mt?(Cn=ut,ut=null):Cn=ut.sibling;var Qr=Te(ae,ut,Dt.value,Fe);if(Qr===null){ut===null&&(ut=Cn);break}n&&ut&&Qr.alternate===null&&r(ae,ut),J=M(Qr,J,mt),ct===null?st=Qr:ct.sibling=Qr,ct=Qr,ut=Cn}if(Dt.done)return l(ae,ut),en&&Ss(ae,mt),st;if(ut===null){for(;!Dt.done;mt++,Dt=ue.next())Dt=Re(ae,Dt.value,Fe),Dt!==null&&(J=M(Dt,J,mt),ct===null?st=Dt:ct.sibling=Dt,ct=Dt);return en&&Ss(ae,mt),st}for(ut=d(ae,ut);!Dt.done;mt++,Dt=ue.next())Dt=$e(ut,ae,mt,Dt.value,Fe),Dt!==null&&(n&&Dt.alternate!==null&&ut.delete(Dt.key===null?mt:Dt.key),J=M(Dt,J,mt),ct===null?st=Dt:ct.sibling=Dt,ct=Dt);return n&&ut.forEach(function(Y1){return r(ae,Y1)}),en&&Ss(ae,mt),st}function an(ae,J,ue,Fe){if(typeof ue=="object"&&ue!==null&&ue.type===I&&ue.key===null&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case L:e:{for(var st=ue.key,ct=J;ct!==null;){if(ct.key===st){if(st=ue.type,st===I){if(ct.tag===7){l(ae,ct.sibling),J=x(ct,ue.props.children),J.return=ae,ae=J;break e}}else if(ct.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===V&&qp(st)===ct.type){l(ae,ct.sibling),J=x(ct,ue.props),J.ref=mo(ae,ct,ue),J.return=ae,ae=J;break e}l(ae,ct);break}else r(ae,ct);ct=ct.sibling}ue.type===I?(J=Rs(ue.props.children,ae.mode,Fe,ue.key),J.return=ae,ae=J):(Fe=Wl(ue.type,ue.key,ue.props,null,ae.mode,Fe),Fe.ref=mo(ae,J,ue),Fe.return=ae,ae=Fe)}return P(ae);case A:e:{for(ct=ue.key;J!==null;){if(J.key===ct)if(J.tag===4&&J.stateNode.containerInfo===ue.containerInfo&&J.stateNode.implementation===ue.implementation){l(ae,J.sibling),J=x(J,ue.children||[]),J.return=ae,ae=J;break e}else{l(ae,J);break}else r(ae,J);J=J.sibling}J=Mh(ue,ae.mode,Fe),J.return=ae,ae=J}return P(ae);case V:return ct=ue._init,an(ae,J,ct(ue._payload),Fe)}if(K(ue))return tt(ae,J,ue,Fe);if(ie(ue))return it(ae,J,ue,Fe);yl(ae,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"?(ue=""+ue,J!==null&&J.tag===6?(l(ae,J.sibling),J=x(J,ue),J.return=ae,ae=J):(l(ae,J),J=Sh(ue,ae.mode,Fe),J.return=ae,ae=J),P(ae)):l(ae,J)}return an}var aa=Yp(!0),$p=Yp(!1),Sl=Hr(null),Ml=null,oa=null,Lu=null;function Iu(){Lu=oa=Ml=null}function Nu(n){var r=Sl.current;Zt(Sl),n._currentValue=r}function Fu(n,r,l){for(;n!==null;){var d=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,d!==null&&(d.childLanes|=r)):d!==null&&(d.childLanes&r)!==r&&(d.childLanes|=r),n===l)break;n=n.return}}function la(n,r){Ml=n,Lu=oa=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(ei=!0),n.firstContext=null)}function wi(n){var r=n._currentValue;if(Lu!==n)if(n={context:n,memoizedValue:r,next:null},oa===null){if(Ml===null)throw Error(t(308));oa=n,Ml.dependencies={lanes:0,firstContext:n}}else oa=oa.next=n;return r}var Ms=null;function Uu(n){Ms===null?Ms=[n]:Ms.push(n)}function Kp(n,r,l,d){var x=r.interleaved;return x===null?(l.next=l,Uu(r)):(l.next=x.next,x.next=l),r.interleaved=l,xr(n,d)}function xr(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Wr=!1;function Du(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Zp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function vr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Xr(n,r,l){var d=n.updateQueue;if(d===null)return null;if(d=d.shared,(Nt&2)!==0){var x=d.pending;return x===null?r.next=r:(r.next=x.next,x.next=r),d.pending=r,xr(n,l)}return x=d.interleaved,x===null?(r.next=r,Uu(d)):(r.next=x.next,x.next=r),d.interleaved=r,xr(n,l)}function wl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,Zn(n,l)}}function Qp(n,r){var l=n.updateQueue,d=n.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var x=null,M=null;if(l=l.firstBaseUpdate,l!==null){do{var P={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};M===null?x=M=P:M=M.next=P,l=l.next}while(l!==null);M===null?x=M=r:M=M.next=r}else x=M=r;l={baseState:d.baseState,firstBaseUpdate:x,lastBaseUpdate:M,shared:d.shared,effects:d.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function bl(n,r,l,d){var x=n.updateQueue;Wr=!1;var M=x.firstBaseUpdate,P=x.lastBaseUpdate,B=x.shared.pending;if(B!==null){x.shared.pending=null;var $=B,de=$.next;$.next=null,P===null?M=de:P.next=de,P=$;var Ce=n.alternate;Ce!==null&&(Ce=Ce.updateQueue,B=Ce.lastBaseUpdate,B!==P&&(B===null?Ce.firstBaseUpdate=de:B.next=de,Ce.lastBaseUpdate=$))}if(M!==null){var Re=x.baseState;P=0,Ce=de=$=null,B=M;do{var Te=B.lane,$e=B.eventTime;if((d&Te)===Te){Ce!==null&&(Ce=Ce.next={eventTime:$e,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var tt=n,it=B;switch(Te=r,$e=l,it.tag){case 1:if(tt=it.payload,typeof tt=="function"){Re=tt.call($e,Re,Te);break e}Re=tt;break e;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=it.payload,Te=typeof tt=="function"?tt.call($e,Re,Te):tt,Te==null)break e;Re=Q({},Re,Te);break e;case 2:Wr=!0}}B.callback!==null&&B.lane!==0&&(n.flags|=64,Te=x.effects,Te===null?x.effects=[B]:Te.push(B))}else $e={eventTime:$e,lane:Te,tag:B.tag,payload:B.payload,callback:B.callback,next:null},Ce===null?(de=Ce=$e,$=Re):Ce=Ce.next=$e,P|=Te;if(B=B.next,B===null){if(B=x.shared.pending,B===null)break;Te=B,B=Te.next,Te.next=null,x.lastBaseUpdate=Te,x.shared.pending=null}}while(!0);if(Ce===null&&($=Re),x.baseState=$,x.firstBaseUpdate=de,x.lastBaseUpdate=Ce,r=x.shared.interleaved,r!==null){x=r;do P|=x.lane,x=x.next;while(x!==r)}else M===null&&(x.shared.lanes=0);Es|=P,n.lanes=P,n.memoizedState=Re}}function Jp(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var d=n[r],x=d.callback;if(x!==null){if(d.callback=null,d=l,typeof x!="function")throw Error(t(191,x));x.call(d)}}}var go={},Ki=Hr(go),xo=Hr(go),vo=Hr(go);function ws(n){if(n===go)throw Error(t(174));return n}function ku(n,r){switch(qt(vo,r),qt(xo,n),qt(Ki,go),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:R(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=R(r,n)}Zt(Ki),qt(Ki,r)}function ca(){Zt(Ki),Zt(xo),Zt(vo)}function em(n){ws(vo.current);var r=ws(Ki.current),l=R(r,n.type);r!==l&&(qt(xo,n),qt(Ki,l))}function Ou(n){xo.current===n&&(Zt(Ki),Zt(xo))}var tn=Hr(0);function El(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var zu=[];function Bu(){for(var n=0;n<zu.length;n++)zu[n]._workInProgressVersionPrimary=null;zu.length=0}var Tl=E.ReactCurrentDispatcher,Hu=E.ReactCurrentBatchConfig,bs=0,nn=null,vn=null,En=null,Cl=!1,_o=!1,yo=0,g1=0;function kn(){throw Error(t(321))}function Gu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!Ni(n[l],r[l]))return!1;return!0}function Vu(n,r,l,d,x,M){if(bs=M,nn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Tl.current=n===null||n.memoizedState===null?y1:S1,n=l(d,x),_o){M=0;do{if(_o=!1,yo=0,25<=M)throw Error(t(301));M+=1,En=vn=null,r.updateQueue=null,Tl.current=M1,n=l(d,x)}while(_o)}if(Tl.current=Pl,r=vn!==null&&vn.next!==null,bs=0,En=vn=nn=null,Cl=!1,r)throw Error(t(300));return n}function Wu(){var n=yo!==0;return yo=0,n}function Zi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return En===null?nn.memoizedState=En=n:En=En.next=n,En}function bi(){if(vn===null){var n=nn.alternate;n=n!==null?n.memoizedState:null}else n=vn.next;var r=En===null?nn.memoizedState:En.next;if(r!==null)En=r,vn=n;else{if(n===null)throw Error(t(310));vn=n,n={memoizedState:vn.memoizedState,baseState:vn.baseState,baseQueue:vn.baseQueue,queue:vn.queue,next:null},En===null?nn.memoizedState=En=n:En=En.next=n}return En}function So(n,r){return typeof r=="function"?r(n):r}function Xu(n){var r=bi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=vn,x=d.baseQueue,M=l.pending;if(M!==null){if(x!==null){var P=x.next;x.next=M.next,M.next=P}d.baseQueue=x=M,l.pending=null}if(x!==null){M=x.next,d=d.baseState;var B=P=null,$=null,de=M;do{var Ce=de.lane;if((bs&Ce)===Ce)$!==null&&($=$.next={lane:0,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),d=de.hasEagerState?de.eagerState:n(d,de.action);else{var Re={lane:Ce,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null};$===null?(B=$=Re,P=d):$=$.next=Re,nn.lanes|=Ce,Es|=Ce}de=de.next}while(de!==null&&de!==M);$===null?P=d:$.next=B,Ni(d,r.memoizedState)||(ei=!0),r.memoizedState=d,r.baseState=P,r.baseQueue=$,l.lastRenderedState=d}if(n=l.interleaved,n!==null){x=n;do M=x.lane,nn.lanes|=M,Es|=M,x=x.next;while(x!==n)}else x===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function ju(n){var r=bi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=l.dispatch,x=l.pending,M=r.memoizedState;if(x!==null){l.pending=null;var P=x=x.next;do M=n(M,P.action),P=P.next;while(P!==x);Ni(M,r.memoizedState)||(ei=!0),r.memoizedState=M,r.baseQueue===null&&(r.baseState=M),l.lastRenderedState=M}return[M,d]}function tm(){}function nm(n,r){var l=nn,d=bi(),x=r(),M=!Ni(d.memoizedState,x);if(M&&(d.memoizedState=x,ei=!0),d=d.queue,qu(sm.bind(null,l,d,n),[n]),d.getSnapshot!==r||M||En!==null&&En.memoizedState.tag&1){if(l.flags|=2048,Mo(9,rm.bind(null,l,d,x,r),void 0,null),Tn===null)throw Error(t(349));(bs&30)!==0||im(l,r,x)}return x}function im(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=nn.updateQueue,r===null?(r={lastEffect:null,stores:null},nn.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function rm(n,r,l,d){r.value=l,r.getSnapshot=d,am(r)&&om(n)}function sm(n,r,l){return l(function(){am(r)&&om(n)})}function am(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!Ni(n,l)}catch{return!0}}function om(n){var r=xr(n,1);r!==null&&Oi(r,n,1,-1)}function lm(n){var r=Zi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:n},r.queue=n,n=n.dispatch=_1.bind(null,nn,n),[r.memoizedState,n]}function Mo(n,r,l,d){return n={tag:n,create:r,destroy:l,deps:d,next:null},r=nn.updateQueue,r===null?(r={lastEffect:null,stores:null},nn.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(d=l.next,l.next=n,n.next=d,r.lastEffect=n)),n}function cm(){return bi().memoizedState}function Al(n,r,l,d){var x=Zi();nn.flags|=n,x.memoizedState=Mo(1|r,l,void 0,d===void 0?null:d)}function Rl(n,r,l,d){var x=bi();d=d===void 0?null:d;var M=void 0;if(vn!==null){var P=vn.memoizedState;if(M=P.destroy,d!==null&&Gu(d,P.deps)){x.memoizedState=Mo(r,l,M,d);return}}nn.flags|=n,x.memoizedState=Mo(1|r,l,M,d)}function um(n,r){return Al(8390656,8,n,r)}function qu(n,r){return Rl(2048,8,n,r)}function hm(n,r){return Rl(4,2,n,r)}function fm(n,r){return Rl(4,4,n,r)}function dm(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function pm(n,r,l){return l=l!=null?l.concat([n]):null,Rl(4,4,dm.bind(null,r,n),l)}function Yu(){}function mm(n,r){var l=bi();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&Gu(r,d[1])?d[0]:(l.memoizedState=[n,r],n)}function gm(n,r){var l=bi();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&Gu(r,d[1])?d[0]:(n=n(),l.memoizedState=[n,r],n)}function xm(n,r,l){return(bs&21)===0?(n.baseState&&(n.baseState=!1,ei=!0),n.memoizedState=l):(Ni(l,r)||(l=Ye(),nn.lanes|=l,Es|=l,n.baseState=!0),r)}function x1(n,r){var l=Tt;Tt=l!==0&&4>l?l:4,n(!0);var d=Hu.transition;Hu.transition={};try{n(!1),r()}finally{Tt=l,Hu.transition=d}}function vm(){return bi().memoizedState}function v1(n,r,l){var d=$r(n);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},_m(n))ym(r,l);else if(l=Kp(n,r,l,d),l!==null){var x=Xn();Oi(l,n,d,x),Sm(l,r,d)}}function _1(n,r,l){var d=$r(n),x={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(_m(n))ym(r,x);else{var M=n.alternate;if(n.lanes===0&&(M===null||M.lanes===0)&&(M=r.lastRenderedReducer,M!==null))try{var P=r.lastRenderedState,B=M(P,l);if(x.hasEagerState=!0,x.eagerState=B,Ni(B,P)){var $=r.interleaved;$===null?(x.next=x,Uu(r)):(x.next=$.next,$.next=x),r.interleaved=x;return}}catch{}finally{}l=Kp(n,r,x,d),l!==null&&(x=Xn(),Oi(l,n,d,x),Sm(l,r,d))}}function _m(n){var r=n.alternate;return n===nn||r!==null&&r===nn}function ym(n,r){_o=Cl=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function Sm(n,r,l){if((l&4194240)!==0){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,Zn(n,l)}}var Pl={readContext:wi,useCallback:kn,useContext:kn,useEffect:kn,useImperativeHandle:kn,useInsertionEffect:kn,useLayoutEffect:kn,useMemo:kn,useReducer:kn,useRef:kn,useState:kn,useDebugValue:kn,useDeferredValue:kn,useTransition:kn,useMutableSource:kn,useSyncExternalStore:kn,useId:kn,unstable_isNewReconciler:!1},y1={readContext:wi,useCallback:function(n,r){return Zi().memoizedState=[n,r===void 0?null:r],n},useContext:wi,useEffect:um,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,Al(4194308,4,dm.bind(null,r,n),l)},useLayoutEffect:function(n,r){return Al(4194308,4,n,r)},useInsertionEffect:function(n,r){return Al(4,2,n,r)},useMemo:function(n,r){var l=Zi();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var d=Zi();return r=l!==void 0?l(r):r,d.memoizedState=d.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},d.queue=n,n=n.dispatch=v1.bind(null,nn,n),[d.memoizedState,n]},useRef:function(n){var r=Zi();return n={current:n},r.memoizedState=n},useState:lm,useDebugValue:Yu,useDeferredValue:function(n){return Zi().memoizedState=n},useTransition:function(){var n=lm(!1),r=n[0];return n=x1.bind(null,n[1]),Zi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var d=nn,x=Zi();if(en){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),Tn===null)throw Error(t(349));(bs&30)!==0||im(d,r,l)}x.memoizedState=l;var M={value:l,getSnapshot:r};return x.queue=M,um(sm.bind(null,d,M,n),[n]),d.flags|=2048,Mo(9,rm.bind(null,d,M,l,r),void 0,null),l},useId:function(){var n=Zi(),r=Tn.identifierPrefix;if(en){var l=gr,d=mr;l=(d&~(1<<32-ke(d)-1)).toString(32)+l,r=":"+r+"R"+l,l=yo++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=g1++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},S1={readContext:wi,useCallback:mm,useContext:wi,useEffect:qu,useImperativeHandle:pm,useInsertionEffect:hm,useLayoutEffect:fm,useMemo:gm,useReducer:Xu,useRef:cm,useState:function(){return Xu(So)},useDebugValue:Yu,useDeferredValue:function(n){var r=bi();return xm(r,vn.memoizedState,n)},useTransition:function(){var n=Xu(So)[0],r=bi().memoizedState;return[n,r]},useMutableSource:tm,useSyncExternalStore:nm,useId:vm,unstable_isNewReconciler:!1},M1={readContext:wi,useCallback:mm,useContext:wi,useEffect:qu,useImperativeHandle:pm,useInsertionEffect:hm,useLayoutEffect:fm,useMemo:gm,useReducer:ju,useRef:cm,useState:function(){return ju(So)},useDebugValue:Yu,useDeferredValue:function(n){var r=bi();return vn===null?r.memoizedState=n:xm(r,vn.memoizedState,n)},useTransition:function(){var n=ju(So)[0],r=bi().memoizedState;return[n,r]},useMutableSource:tm,useSyncExternalStore:nm,useId:vm,unstable_isNewReconciler:!1};function Ui(n,r){if(n&&n.defaultProps){r=Q({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function $u(n,r,l,d){r=n.memoizedState,l=l(d,r),l=l==null?r:Q({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Ll={isMounted:function(n){return(n=n._reactInternals)?oi(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var d=Xn(),x=$r(n),M=vr(d,x);M.payload=r,l!=null&&(M.callback=l),r=Xr(n,M,x),r!==null&&(Oi(r,n,x,d),wl(r,n,x))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var d=Xn(),x=$r(n),M=vr(d,x);M.tag=1,M.payload=r,l!=null&&(M.callback=l),r=Xr(n,M,x),r!==null&&(Oi(r,n,x,d),wl(r,n,x))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Xn(),d=$r(n),x=vr(l,d);x.tag=2,r!=null&&(x.callback=r),r=Xr(n,x,d),r!==null&&(Oi(r,n,d,l),wl(r,n,d))}};function Mm(n,r,l,d,x,M,P){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(d,M,P):r.prototype&&r.prototype.isPureReactComponent?!oo(l,d)||!oo(x,M):!0}function wm(n,r,l){var d=!1,x=Gr,M=r.contextType;return typeof M=="object"&&M!==null?M=wi(M):(x=Jn(r)?_s:Dn.current,d=r.contextTypes,M=(d=d!=null)?na(n,x):Gr),r=new r(l,M),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Ll,n.stateNode=r,r._reactInternals=n,d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=x,n.__reactInternalMemoizedMaskedChildContext=M),r}function bm(n,r,l,d){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,d),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,d),r.state!==n&&Ll.enqueueReplaceState(r,r.state,null)}function Ku(n,r,l,d){var x=n.stateNode;x.props=l,x.state=n.memoizedState,x.refs={},Du(n);var M=r.contextType;typeof M=="object"&&M!==null?x.context=wi(M):(M=Jn(r)?_s:Dn.current,x.context=na(n,M)),x.state=n.memoizedState,M=r.getDerivedStateFromProps,typeof M=="function"&&($u(n,r,M,l),x.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof x.getSnapshotBeforeUpdate=="function"||typeof x.UNSAFE_componentWillMount!="function"&&typeof x.componentWillMount!="function"||(r=x.state,typeof x.componentWillMount=="function"&&x.componentWillMount(),typeof x.UNSAFE_componentWillMount=="function"&&x.UNSAFE_componentWillMount(),r!==x.state&&Ll.enqueueReplaceState(x,x.state,null),bl(n,l,x,d),x.state=n.memoizedState),typeof x.componentDidMount=="function"&&(n.flags|=4194308)}function ua(n,r){try{var l="",d=r;do l+=ve(d),d=d.return;while(d);var x=l}catch(M){x=`
Error generating stack: `+M.message+`
`+M.stack}return{value:n,source:r,stack:x,digest:null}}function Zu(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Qu(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var w1=typeof WeakMap=="function"?WeakMap:Map;function Em(n,r,l){l=vr(-1,l),l.tag=3,l.payload={element:null};var d=r.value;return l.callback=function(){Ol||(Ol=!0,dh=d),Qu(n,r)},l}function Tm(n,r,l){l=vr(-1,l),l.tag=3;var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var x=r.value;l.payload=function(){return d(x)},l.callback=function(){Qu(n,r)}}var M=n.stateNode;return M!==null&&typeof M.componentDidCatch=="function"&&(l.callback=function(){Qu(n,r),typeof d!="function"&&(qr===null?qr=new Set([this]):qr.add(this));var P=r.stack;this.componentDidCatch(r.value,{componentStack:P!==null?P:""})}),l}function Cm(n,r,l){var d=n.pingCache;if(d===null){d=n.pingCache=new w1;var x=new Set;d.set(r,x)}else x=d.get(r),x===void 0&&(x=new Set,d.set(r,x));x.has(l)||(x.add(l),n=k1.bind(null,n,r,l),r.then(n,n))}function Am(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Rm(n,r,l,d,x){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=vr(-1,1),r.tag=2,Xr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=x,n)}var b1=E.ReactCurrentOwner,ei=!1;function Wn(n,r,l,d){r.child=n===null?$p(r,null,l,d):aa(r,n.child,l,d)}function Pm(n,r,l,d,x){l=l.render;var M=r.ref;return la(r,x),d=Vu(n,r,l,d,M,x),l=Wu(),n!==null&&!ei?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~x,_r(n,r,x)):(en&&l&&Tu(r),r.flags|=1,Wn(n,r,d,x),r.child)}function Lm(n,r,l,d,x){if(n===null){var M=l.type;return typeof M=="function"&&!yh(M)&&M.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=M,Im(n,r,M,d,x)):(n=Wl(l.type,null,d,r,r.mode,x),n.ref=r.ref,n.return=r,r.child=n)}if(M=n.child,(n.lanes&x)===0){var P=M.memoizedProps;if(l=l.compare,l=l!==null?l:oo,l(P,d)&&n.ref===r.ref)return _r(n,r,x)}return r.flags|=1,n=Zr(M,d),n.ref=r.ref,n.return=r,r.child=n}function Im(n,r,l,d,x){if(n!==null){var M=n.memoizedProps;if(oo(M,d)&&n.ref===r.ref)if(ei=!1,r.pendingProps=d=M,(n.lanes&x)!==0)(n.flags&131072)!==0&&(ei=!0);else return r.lanes=n.lanes,_r(n,r,x)}return Ju(n,r,l,d,x)}function Nm(n,r,l){var d=r.pendingProps,x=d.children,M=n!==null?n.memoizedState:null;if(d.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},qt(fa,fi),fi|=l;else{if((l&1073741824)===0)return n=M!==null?M.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,qt(fa,fi),fi|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=M!==null?M.baseLanes:l,qt(fa,fi),fi|=d}else M!==null?(d=M.baseLanes|l,r.memoizedState=null):d=l,qt(fa,fi),fi|=d;return Wn(n,r,x,l),r.child}function Fm(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Ju(n,r,l,d,x){var M=Jn(l)?_s:Dn.current;return M=na(r,M),la(r,x),l=Vu(n,r,l,d,M,x),d=Wu(),n!==null&&!ei?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~x,_r(n,r,x)):(en&&d&&Tu(r),r.flags|=1,Wn(n,r,l,x),r.child)}function Um(n,r,l,d,x){if(Jn(l)){var M=!0;ml(r)}else M=!1;if(la(r,x),r.stateNode===null)Nl(n,r),wm(r,l,d),Ku(r,l,d,x),d=!0;else if(n===null){var P=r.stateNode,B=r.memoizedProps;P.props=B;var $=P.context,de=l.contextType;typeof de=="object"&&de!==null?de=wi(de):(de=Jn(l)?_s:Dn.current,de=na(r,de));var Ce=l.getDerivedStateFromProps,Re=typeof Ce=="function"||typeof P.getSnapshotBeforeUpdate=="function";Re||typeof P.UNSAFE_componentWillReceiveProps!="function"&&typeof P.componentWillReceiveProps!="function"||(B!==d||$!==de)&&bm(r,P,d,de),Wr=!1;var Te=r.memoizedState;P.state=Te,bl(r,d,P,x),$=r.memoizedState,B!==d||Te!==$||Qn.current||Wr?(typeof Ce=="function"&&($u(r,l,Ce,d),$=r.memoizedState),(B=Wr||Mm(r,l,B,d,Te,$,de))?(Re||typeof P.UNSAFE_componentWillMount!="function"&&typeof P.componentWillMount!="function"||(typeof P.componentWillMount=="function"&&P.componentWillMount(),typeof P.UNSAFE_componentWillMount=="function"&&P.UNSAFE_componentWillMount()),typeof P.componentDidMount=="function"&&(r.flags|=4194308)):(typeof P.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=d,r.memoizedState=$),P.props=d,P.state=$,P.context=de,d=B):(typeof P.componentDidMount=="function"&&(r.flags|=4194308),d=!1)}else{P=r.stateNode,Zp(n,r),B=r.memoizedProps,de=r.type===r.elementType?B:Ui(r.type,B),P.props=de,Re=r.pendingProps,Te=P.context,$=l.contextType,typeof $=="object"&&$!==null?$=wi($):($=Jn(l)?_s:Dn.current,$=na(r,$));var $e=l.getDerivedStateFromProps;(Ce=typeof $e=="function"||typeof P.getSnapshotBeforeUpdate=="function")||typeof P.UNSAFE_componentWillReceiveProps!="function"&&typeof P.componentWillReceiveProps!="function"||(B!==Re||Te!==$)&&bm(r,P,d,$),Wr=!1,Te=r.memoizedState,P.state=Te,bl(r,d,P,x);var tt=r.memoizedState;B!==Re||Te!==tt||Qn.current||Wr?(typeof $e=="function"&&($u(r,l,$e,d),tt=r.memoizedState),(de=Wr||Mm(r,l,de,d,Te,tt,$)||!1)?(Ce||typeof P.UNSAFE_componentWillUpdate!="function"&&typeof P.componentWillUpdate!="function"||(typeof P.componentWillUpdate=="function"&&P.componentWillUpdate(d,tt,$),typeof P.UNSAFE_componentWillUpdate=="function"&&P.UNSAFE_componentWillUpdate(d,tt,$)),typeof P.componentDidUpdate=="function"&&(r.flags|=4),typeof P.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof P.componentDidUpdate!="function"||B===n.memoizedProps&&Te===n.memoizedState||(r.flags|=4),typeof P.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Te===n.memoizedState||(r.flags|=1024),r.memoizedProps=d,r.memoizedState=tt),P.props=d,P.state=tt,P.context=$,d=de):(typeof P.componentDidUpdate!="function"||B===n.memoizedProps&&Te===n.memoizedState||(r.flags|=4),typeof P.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Te===n.memoizedState||(r.flags|=1024),d=!1)}return eh(n,r,l,d,M,x)}function eh(n,r,l,d,x,M){Fm(n,r);var P=(r.flags&128)!==0;if(!d&&!P)return x&&Bp(r,l,!1),_r(n,r,M);d=r.stateNode,b1.current=r;var B=P&&typeof l.getDerivedStateFromError!="function"?null:d.render();return r.flags|=1,n!==null&&P?(r.child=aa(r,n.child,null,M),r.child=aa(r,null,B,M)):Wn(n,r,B,M),r.memoizedState=d.state,x&&Bp(r,l,!0),r.child}function Dm(n){var r=n.stateNode;r.pendingContext?Op(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Op(n,r.context,!1),ku(n,r.containerInfo)}function km(n,r,l,d,x){return sa(),Pu(x),r.flags|=256,Wn(n,r,l,d),r.child}var th={dehydrated:null,treeContext:null,retryLane:0};function nh(n){return{baseLanes:n,cachePool:null,transitions:null}}function Om(n,r,l){var d=r.pendingProps,x=tn.current,M=!1,P=(r.flags&128)!==0,B;if((B=P)||(B=n!==null&&n.memoizedState===null?!1:(x&2)!==0),B?(M=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(x|=1),qt(tn,x&1),n===null)return Ru(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(P=d.children,n=d.fallback,M?(d=r.mode,M=r.child,P={mode:"hidden",children:P},(d&1)===0&&M!==null?(M.childLanes=0,M.pendingProps=P):M=Xl(P,d,0,null),n=Rs(n,d,l,null),M.return=r,n.return=r,M.sibling=n,r.child=M,r.child.memoizedState=nh(l),r.memoizedState=th,n):ih(r,P));if(x=n.memoizedState,x!==null&&(B=x.dehydrated,B!==null))return E1(n,r,P,d,B,x,l);if(M){M=d.fallback,P=r.mode,x=n.child,B=x.sibling;var $={mode:"hidden",children:d.children};return(P&1)===0&&r.child!==x?(d=r.child,d.childLanes=0,d.pendingProps=$,r.deletions=null):(d=Zr(x,$),d.subtreeFlags=x.subtreeFlags&14680064),B!==null?M=Zr(B,M):(M=Rs(M,P,l,null),M.flags|=2),M.return=r,d.return=r,d.sibling=M,r.child=d,d=M,M=r.child,P=n.child.memoizedState,P=P===null?nh(l):{baseLanes:P.baseLanes|l,cachePool:null,transitions:P.transitions},M.memoizedState=P,M.childLanes=n.childLanes&~l,r.memoizedState=th,d}return M=n.child,n=M.sibling,d=Zr(M,{mode:"visible",children:d.children}),(r.mode&1)===0&&(d.lanes=l),d.return=r,d.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=d,r.memoizedState=null,d}function ih(n,r){return r=Xl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Il(n,r,l,d){return d!==null&&Pu(d),aa(r,n.child,null,l),n=ih(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function E1(n,r,l,d,x,M,P){if(l)return r.flags&256?(r.flags&=-257,d=Zu(Error(t(422))),Il(n,r,P,d)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(M=d.fallback,x=r.mode,d=Xl({mode:"visible",children:d.children},x,0,null),M=Rs(M,x,P,null),M.flags|=2,d.return=r,M.return=r,d.sibling=M,r.child=d,(r.mode&1)!==0&&aa(r,n.child,null,P),r.child.memoizedState=nh(P),r.memoizedState=th,M);if((r.mode&1)===0)return Il(n,r,P,null);if(x.data==="$!"){if(d=x.nextSibling&&x.nextSibling.dataset,d)var B=d.dgst;return d=B,M=Error(t(419)),d=Zu(M,d,void 0),Il(n,r,P,d)}if(B=(P&n.childLanes)!==0,ei||B){if(d=Tn,d!==null){switch(P&-P){case 4:x=2;break;case 16:x=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:x=32;break;case 536870912:x=268435456;break;default:x=0}x=(x&(d.suspendedLanes|P))!==0?0:x,x!==0&&x!==M.retryLane&&(M.retryLane=x,xr(n,x),Oi(d,n,x,-1))}return _h(),d=Zu(Error(t(421))),Il(n,r,P,d)}return x.data==="$?"?(r.flags|=128,r.child=n.child,r=O1.bind(null,n),x._reactRetry=r,null):(n=M.treeContext,hi=Br(x.nextSibling),ui=r,en=!0,Fi=null,n!==null&&(Si[Mi++]=mr,Si[Mi++]=gr,Si[Mi++]=ys,mr=n.id,gr=n.overflow,ys=r),r=ih(r,d.children),r.flags|=4096,r)}function zm(n,r,l){n.lanes|=r;var d=n.alternate;d!==null&&(d.lanes|=r),Fu(n.return,r,l)}function rh(n,r,l,d,x){var M=n.memoizedState;M===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:x}:(M.isBackwards=r,M.rendering=null,M.renderingStartTime=0,M.last=d,M.tail=l,M.tailMode=x)}function Bm(n,r,l){var d=r.pendingProps,x=d.revealOrder,M=d.tail;if(Wn(n,r,d.children,l),d=tn.current,(d&2)!==0)d=d&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&zm(n,l,r);else if(n.tag===19)zm(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}d&=1}if(qt(tn,d),(r.mode&1)===0)r.memoizedState=null;else switch(x){case"forwards":for(l=r.child,x=null;l!==null;)n=l.alternate,n!==null&&El(n)===null&&(x=l),l=l.sibling;l=x,l===null?(x=r.child,r.child=null):(x=l.sibling,l.sibling=null),rh(r,!1,x,l,M);break;case"backwards":for(l=null,x=r.child,r.child=null;x!==null;){if(n=x.alternate,n!==null&&El(n)===null){r.child=x;break}n=x.sibling,x.sibling=l,l=x,x=n}rh(r,!0,l,null,M);break;case"together":rh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Nl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function _r(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),Es|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=Zr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=Zr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function T1(n,r,l){switch(r.tag){case 3:Dm(r),sa();break;case 5:em(r);break;case 1:Jn(r.type)&&ml(r);break;case 4:ku(r,r.stateNode.containerInfo);break;case 10:var d=r.type._context,x=r.memoizedProps.value;qt(Sl,d._currentValue),d._currentValue=x;break;case 13:if(d=r.memoizedState,d!==null)return d.dehydrated!==null?(qt(tn,tn.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?Om(n,r,l):(qt(tn,tn.current&1),n=_r(n,r,l),n!==null?n.sibling:null);qt(tn,tn.current&1);break;case 19:if(d=(l&r.childLanes)!==0,(n.flags&128)!==0){if(d)return Bm(n,r,l);r.flags|=128}if(x=r.memoizedState,x!==null&&(x.rendering=null,x.tail=null,x.lastEffect=null),qt(tn,tn.current),d)break;return null;case 22:case 23:return r.lanes=0,Nm(n,r,l)}return _r(n,r,l)}var Hm,sh,Gm,Vm;Hm=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},sh=function(){},Gm=function(n,r,l,d){var x=n.memoizedProps;if(x!==d){n=r.stateNode,ws(Ki.current);var M=null;switch(l){case"input":x=St(n,x),d=St(n,d),M=[];break;case"select":x=Q({},x,{value:void 0}),d=Q({},d,{value:void 0}),M=[];break;case"textarea":x=xt(n,x),d=xt(n,d),M=[];break;default:typeof x.onClick!="function"&&typeof d.onClick=="function"&&(n.onclick=fl)}qe(l,d);var P;l=null;for(de in x)if(!d.hasOwnProperty(de)&&x.hasOwnProperty(de)&&x[de]!=null)if(de==="style"){var B=x[de];for(P in B)B.hasOwnProperty(P)&&(l||(l={}),l[P]="")}else de!=="dangerouslySetInnerHTML"&&de!=="children"&&de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&de!=="autoFocus"&&(s.hasOwnProperty(de)?M||(M=[]):(M=M||[]).push(de,null));for(de in d){var $=d[de];if(B=x!=null?x[de]:void 0,d.hasOwnProperty(de)&&$!==B&&($!=null||B!=null))if(de==="style")if(B){for(P in B)!B.hasOwnProperty(P)||$&&$.hasOwnProperty(P)||(l||(l={}),l[P]="");for(P in $)$.hasOwnProperty(P)&&B[P]!==$[P]&&(l||(l={}),l[P]=$[P])}else l||(M||(M=[]),M.push(de,l)),l=$;else de==="dangerouslySetInnerHTML"?($=$?$.__html:void 0,B=B?B.__html:void 0,$!=null&&B!==$&&(M=M||[]).push(de,$)):de==="children"?typeof $!="string"&&typeof $!="number"||(M=M||[]).push(de,""+$):de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&(s.hasOwnProperty(de)?($!=null&&de==="onScroll"&&Kt("scroll",n),M||B===$||(M=[])):(M=M||[]).push(de,$))}l&&(M=M||[]).push("style",l);var de=M;(r.updateQueue=de)&&(r.flags|=4)}},Vm=function(n,r,l,d){l!==d&&(r.flags|=4)};function wo(n,r){if(!en)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:d.sibling=null}}function On(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,d=0;if(r)for(var x=n.child;x!==null;)l|=x.lanes|x.childLanes,d|=x.subtreeFlags&14680064,d|=x.flags&14680064,x.return=n,x=x.sibling;else for(x=n.child;x!==null;)l|=x.lanes|x.childLanes,d|=x.subtreeFlags,d|=x.flags,x.return=n,x=x.sibling;return n.subtreeFlags|=d,n.childLanes=l,r}function C1(n,r,l){var d=r.pendingProps;switch(Cu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return On(r),null;case 1:return Jn(r.type)&&pl(),On(r),null;case 3:return d=r.stateNode,ca(),Zt(Qn),Zt(Dn),Bu(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(n===null||n.child===null)&&(_l(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Fi!==null&&(gh(Fi),Fi=null))),sh(n,r),On(r),null;case 5:Ou(r);var x=ws(vo.current);if(l=r.type,n!==null&&r.stateNode!=null)Gm(n,r,l,d,x),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!d){if(r.stateNode===null)throw Error(t(166));return On(r),null}if(n=ws(Ki.current),_l(r)){d=r.stateNode,l=r.type;var M=r.memoizedProps;switch(d[$i]=r,d[fo]=M,n=(r.mode&1)!==0,l){case"dialog":Kt("cancel",d),Kt("close",d);break;case"iframe":case"object":case"embed":Kt("load",d);break;case"video":case"audio":for(x=0;x<co.length;x++)Kt(co[x],d);break;case"source":Kt("error",d);break;case"img":case"image":case"link":Kt("error",d),Kt("load",d);break;case"details":Kt("toggle",d);break;case"input":Rt(d,M),Kt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!M.multiple},Kt("invalid",d);break;case"textarea":Ut(d,M),Kt("invalid",d)}qe(l,M),x=null;for(var P in M)if(M.hasOwnProperty(P)){var B=M[P];P==="children"?typeof B=="string"?d.textContent!==B&&(M.suppressHydrationWarning!==!0&&hl(d.textContent,B,n),x=["children",B]):typeof B=="number"&&d.textContent!==""+B&&(M.suppressHydrationWarning!==!0&&hl(d.textContent,B,n),x=["children",""+B]):s.hasOwnProperty(P)&&B!=null&&P==="onScroll"&&Kt("scroll",d)}switch(l){case"input":Ve(d),kt(d,M,!0);break;case"textarea":Ve(d),Wt(d);break;case"select":case"option":break;default:typeof M.onClick=="function"&&(d.onclick=fl)}d=x,r.updateQueue=d,d!==null&&(r.flags|=4)}else{P=x.nodeType===9?x:x.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=k(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=P.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof d.is=="string"?n=P.createElement(l,{is:d.is}):(n=P.createElement(l),l==="select"&&(P=n,d.multiple?P.multiple=!0:d.size&&(P.size=d.size))):n=P.createElementNS(n,l),n[$i]=r,n[fo]=d,Hm(n,r,!1,!1),r.stateNode=n;e:{switch(P=Ue(l,d),l){case"dialog":Kt("cancel",n),Kt("close",n),x=d;break;case"iframe":case"object":case"embed":Kt("load",n),x=d;break;case"video":case"audio":for(x=0;x<co.length;x++)Kt(co[x],n);x=d;break;case"source":Kt("error",n),x=d;break;case"img":case"image":case"link":Kt("error",n),Kt("load",n),x=d;break;case"details":Kt("toggle",n),x=d;break;case"input":Rt(n,d),x=St(n,d),Kt("invalid",n);break;case"option":x=d;break;case"select":n._wrapperState={wasMultiple:!!d.multiple},x=Q({},d,{value:void 0}),Kt("invalid",n);break;case"textarea":Ut(n,d),x=xt(n,d),Kt("invalid",n);break;default:x=d}qe(l,x),B=x;for(M in B)if(B.hasOwnProperty(M)){var $=B[M];M==="style"?ye(n,$):M==="dangerouslySetInnerHTML"?($=$?$.__html:void 0,$!=null&&_e(n,$)):M==="children"?typeof $=="string"?(l!=="textarea"||$!=="")&&be(n,$):typeof $=="number"&&be(n,""+$):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(s.hasOwnProperty(M)?$!=null&&M==="onScroll"&&Kt("scroll",n):$!=null&&C(n,M,$,P))}switch(l){case"input":Ve(n),kt(n,d,!1);break;case"textarea":Ve(n),Wt(n);break;case"option":d.value!=null&&n.setAttribute("value",""+oe(d.value));break;case"select":n.multiple=!!d.multiple,M=d.value,M!=null?Ot(n,!!d.multiple,M,!1):d.defaultValue!=null&&Ot(n,!!d.multiple,d.defaultValue,!0);break;default:typeof x.onClick=="function"&&(n.onclick=fl)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return On(r),null;case 6:if(n&&r.stateNode!=null)Vm(n,r,n.memoizedProps,d);else{if(typeof d!="string"&&r.stateNode===null)throw Error(t(166));if(l=ws(vo.current),ws(Ki.current),_l(r)){if(d=r.stateNode,l=r.memoizedProps,d[$i]=r,(M=d.nodeValue!==l)&&(n=ui,n!==null))switch(n.tag){case 3:hl(d.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&hl(d.nodeValue,l,(n.mode&1)!==0)}M&&(r.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[$i]=r,r.stateNode=d}return On(r),null;case 13:if(Zt(tn),d=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(en&&hi!==null&&(r.mode&1)!==0&&(r.flags&128)===0)jp(),sa(),r.flags|=98560,M=!1;else if(M=_l(r),d!==null&&d.dehydrated!==null){if(n===null){if(!M)throw Error(t(318));if(M=r.memoizedState,M=M!==null?M.dehydrated:null,!M)throw Error(t(317));M[$i]=r}else sa(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;On(r),M=!1}else Fi!==null&&(gh(Fi),Fi=null),M=!0;if(!M)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(d=d!==null,d!==(n!==null&&n.memoizedState!==null)&&d&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(tn.current&1)!==0?_n===0&&(_n=3):_h())),r.updateQueue!==null&&(r.flags|=4),On(r),null);case 4:return ca(),sh(n,r),n===null&&uo(r.stateNode.containerInfo),On(r),null;case 10:return Nu(r.type._context),On(r),null;case 17:return Jn(r.type)&&pl(),On(r),null;case 19:if(Zt(tn),M=r.memoizedState,M===null)return On(r),null;if(d=(r.flags&128)!==0,P=M.rendering,P===null)if(d)wo(M,!1);else{if(_n!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(P=El(n),P!==null){for(r.flags|=128,wo(M,!1),d=P.updateQueue,d!==null&&(r.updateQueue=d,r.flags|=4),r.subtreeFlags=0,d=l,l=r.child;l!==null;)M=l,n=d,M.flags&=14680066,P=M.alternate,P===null?(M.childLanes=0,M.lanes=n,M.child=null,M.subtreeFlags=0,M.memoizedProps=null,M.memoizedState=null,M.updateQueue=null,M.dependencies=null,M.stateNode=null):(M.childLanes=P.childLanes,M.lanes=P.lanes,M.child=P.child,M.subtreeFlags=0,M.deletions=null,M.memoizedProps=P.memoizedProps,M.memoizedState=P.memoizedState,M.updateQueue=P.updateQueue,M.type=P.type,n=P.dependencies,M.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return qt(tn,tn.current&1|2),r.child}n=n.sibling}M.tail!==null&&je()>da&&(r.flags|=128,d=!0,wo(M,!1),r.lanes=4194304)}else{if(!d)if(n=El(P),n!==null){if(r.flags|=128,d=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),wo(M,!0),M.tail===null&&M.tailMode==="hidden"&&!P.alternate&&!en)return On(r),null}else 2*je()-M.renderingStartTime>da&&l!==1073741824&&(r.flags|=128,d=!0,wo(M,!1),r.lanes=4194304);M.isBackwards?(P.sibling=r.child,r.child=P):(l=M.last,l!==null?l.sibling=P:r.child=P,M.last=P)}return M.tail!==null?(r=M.tail,M.rendering=r,M.tail=r.sibling,M.renderingStartTime=je(),r.sibling=null,l=tn.current,qt(tn,d?l&1|2:l&1),r):(On(r),null);case 22:case 23:return vh(),d=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==d&&(r.flags|=8192),d&&(r.mode&1)!==0?(fi&1073741824)!==0&&(On(r),r.subtreeFlags&6&&(r.flags|=8192)):On(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function A1(n,r){switch(Cu(r),r.tag){case 1:return Jn(r.type)&&pl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return ca(),Zt(Qn),Zt(Dn),Bu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Ou(r),null;case 13:if(Zt(tn),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));sa()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Zt(tn),null;case 4:return ca(),null;case 10:return Nu(r.type._context),null;case 22:case 23:return vh(),null;case 24:return null;default:return null}}var Fl=!1,zn=!1,R1=typeof WeakSet=="function"?WeakSet:Set,Je=null;function ha(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){rn(n,r,d)}else l.current=null}function ah(n,r,l){try{l()}catch(d){rn(n,r,d)}}var Wm=!1;function P1(n,r){if(vu=el,n=Mp(),uu(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var x=d.anchorOffset,M=d.focusNode;d=d.focusOffset;try{l.nodeType,M.nodeType}catch{l=null;break e}var P=0,B=-1,$=-1,de=0,Ce=0,Re=n,Te=null;t:for(;;){for(var $e;Re!==l||x!==0&&Re.nodeType!==3||(B=P+x),Re!==M||d!==0&&Re.nodeType!==3||($=P+d),Re.nodeType===3&&(P+=Re.nodeValue.length),($e=Re.firstChild)!==null;)Te=Re,Re=$e;for(;;){if(Re===n)break t;if(Te===l&&++de===x&&(B=P),Te===M&&++Ce===d&&($=P),($e=Re.nextSibling)!==null)break;Re=Te,Te=Re.parentNode}Re=$e}l=B===-1||$===-1?null:{start:B,end:$}}else l=null}l=l||{start:0,end:0}}else l=null;for(_u={focusedElem:n,selectionRange:l},el=!1,Je=r;Je!==null;)if(r=Je,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Je=n;else for(;Je!==null;){r=Je;try{var tt=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(tt!==null){var it=tt.memoizedProps,an=tt.memoizedState,ae=r.stateNode,J=ae.getSnapshotBeforeUpdate(r.elementType===r.type?it:Ui(r.type,it),an);ae.__reactInternalSnapshotBeforeUpdate=J}break;case 3:var ue=r.stateNode.containerInfo;ue.nodeType===1?ue.textContent="":ue.nodeType===9&&ue.documentElement&&ue.removeChild(ue.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Fe){rn(r,r.return,Fe)}if(n=r.sibling,n!==null){n.return=r.return,Je=n;break}Je=r.return}return tt=Wm,Wm=!1,tt}function bo(n,r,l){var d=r.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var x=d=d.next;do{if((x.tag&n)===n){var M=x.destroy;x.destroy=void 0,M!==void 0&&ah(r,l,M)}x=x.next}while(x!==d)}}function Ul(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var d=l.create;l.destroy=d()}l=l.next}while(l!==r)}}function oh(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function Xm(n){var r=n.alternate;r!==null&&(n.alternate=null,Xm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[$i],delete r[fo],delete r[wu],delete r[f1],delete r[d1])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function jm(n){return n.tag===5||n.tag===3||n.tag===4}function qm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||jm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function lh(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=fl));else if(d!==4&&(n=n.child,n!==null))for(lh(n,r,l),n=n.sibling;n!==null;)lh(n,r,l),n=n.sibling}function ch(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(d!==4&&(n=n.child,n!==null))for(ch(n,r,l),n=n.sibling;n!==null;)ch(n,r,l),n=n.sibling}var Nn=null,Di=!1;function jr(n,r,l){for(l=l.child;l!==null;)Ym(n,r,l),l=l.sibling}function Ym(n,r,l){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(le,l)}catch{}switch(l.tag){case 5:zn||ha(l,r);case 6:var d=Nn,x=Di;Nn=null,jr(n,r,l),Nn=d,Di=x,Nn!==null&&(Di?(n=Nn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):Nn.removeChild(l.stateNode));break;case 18:Nn!==null&&(Di?(n=Nn,l=l.stateNode,n.nodeType===8?Mu(n.parentNode,l):n.nodeType===1&&Mu(n,l),to(n)):Mu(Nn,l.stateNode));break;case 4:d=Nn,x=Di,Nn=l.stateNode.containerInfo,Di=!0,jr(n,r,l),Nn=d,Di=x;break;case 0:case 11:case 14:case 15:if(!zn&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){x=d=d.next;do{var M=x,P=M.destroy;M=M.tag,P!==void 0&&((M&2)!==0||(M&4)!==0)&&ah(l,r,P),x=x.next}while(x!==d)}jr(n,r,l);break;case 1:if(!zn&&(ha(l,r),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(B){rn(l,r,B)}jr(n,r,l);break;case 21:jr(n,r,l);break;case 22:l.mode&1?(zn=(d=zn)||l.memoizedState!==null,jr(n,r,l),zn=d):jr(n,r,l);break;default:jr(n,r,l)}}function $m(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new R1),r.forEach(function(d){var x=z1.bind(null,n,d);l.has(d)||(l.add(d),d.then(x,x))})}}function ki(n,r){var l=r.deletions;if(l!==null)for(var d=0;d<l.length;d++){var x=l[d];try{var M=n,P=r,B=P;e:for(;B!==null;){switch(B.tag){case 5:Nn=B.stateNode,Di=!1;break e;case 3:Nn=B.stateNode.containerInfo,Di=!0;break e;case 4:Nn=B.stateNode.containerInfo,Di=!0;break e}B=B.return}if(Nn===null)throw Error(t(160));Ym(M,P,x),Nn=null,Di=!1;var $=x.alternate;$!==null&&($.return=null),x.return=null}catch(de){rn(x,r,de)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Km(r,n),r=r.sibling}function Km(n,r){var l=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ki(r,n),Qi(n),d&4){try{bo(3,n,n.return),Ul(3,n)}catch(it){rn(n,n.return,it)}try{bo(5,n,n.return)}catch(it){rn(n,n.return,it)}}break;case 1:ki(r,n),Qi(n),d&512&&l!==null&&ha(l,l.return);break;case 5:if(ki(r,n),Qi(n),d&512&&l!==null&&ha(l,l.return),n.flags&32){var x=n.stateNode;try{be(x,"")}catch(it){rn(n,n.return,it)}}if(d&4&&(x=n.stateNode,x!=null)){var M=n.memoizedProps,P=l!==null?l.memoizedProps:M,B=n.type,$=n.updateQueue;if(n.updateQueue=null,$!==null)try{B==="input"&&M.type==="radio"&&M.name!=null&&gt(x,M),Ue(B,P);var de=Ue(B,M);for(P=0;P<$.length;P+=2){var Ce=$[P],Re=$[P+1];Ce==="style"?ye(x,Re):Ce==="dangerouslySetInnerHTML"?_e(x,Re):Ce==="children"?be(x,Re):C(x,Ce,Re,de)}switch(B){case"input":Xt(x,M);break;case"textarea":Be(x,M);break;case"select":var Te=x._wrapperState.wasMultiple;x._wrapperState.wasMultiple=!!M.multiple;var $e=M.value;$e!=null?Ot(x,!!M.multiple,$e,!1):Te!==!!M.multiple&&(M.defaultValue!=null?Ot(x,!!M.multiple,M.defaultValue,!0):Ot(x,!!M.multiple,M.multiple?[]:"",!1))}x[fo]=M}catch(it){rn(n,n.return,it)}}break;case 6:if(ki(r,n),Qi(n),d&4){if(n.stateNode===null)throw Error(t(162));x=n.stateNode,M=n.memoizedProps;try{x.nodeValue=M}catch(it){rn(n,n.return,it)}}break;case 3:if(ki(r,n),Qi(n),d&4&&l!==null&&l.memoizedState.isDehydrated)try{to(r.containerInfo)}catch(it){rn(n,n.return,it)}break;case 4:ki(r,n),Qi(n);break;case 13:ki(r,n),Qi(n),x=n.child,x.flags&8192&&(M=x.memoizedState!==null,x.stateNode.isHidden=M,!M||x.alternate!==null&&x.alternate.memoizedState!==null||(fh=je())),d&4&&$m(n);break;case 22:if(Ce=l!==null&&l.memoizedState!==null,n.mode&1?(zn=(de=zn)||Ce,ki(r,n),zn=de):ki(r,n),Qi(n),d&8192){if(de=n.memoizedState!==null,(n.stateNode.isHidden=de)&&!Ce&&(n.mode&1)!==0)for(Je=n,Ce=n.child;Ce!==null;){for(Re=Je=Ce;Je!==null;){switch(Te=Je,$e=Te.child,Te.tag){case 0:case 11:case 14:case 15:bo(4,Te,Te.return);break;case 1:ha(Te,Te.return);var tt=Te.stateNode;if(typeof tt.componentWillUnmount=="function"){d=Te,l=Te.return;try{r=d,tt.props=r.memoizedProps,tt.state=r.memoizedState,tt.componentWillUnmount()}catch(it){rn(d,l,it)}}break;case 5:ha(Te,Te.return);break;case 22:if(Te.memoizedState!==null){Jm(Re);continue}}$e!==null?($e.return=Te,Je=$e):Jm(Re)}Ce=Ce.sibling}e:for(Ce=null,Re=n;;){if(Re.tag===5){if(Ce===null){Ce=Re;try{x=Re.stateNode,de?(M=x.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none"):(B=Re.stateNode,$=Re.memoizedProps.style,P=$!=null&&$.hasOwnProperty("display")?$.display:null,B.style.display=ge("display",P))}catch(it){rn(n,n.return,it)}}}else if(Re.tag===6){if(Ce===null)try{Re.stateNode.nodeValue=de?"":Re.memoizedProps}catch(it){rn(n,n.return,it)}}else if((Re.tag!==22&&Re.tag!==23||Re.memoizedState===null||Re===n)&&Re.child!==null){Re.child.return=Re,Re=Re.child;continue}if(Re===n)break e;for(;Re.sibling===null;){if(Re.return===null||Re.return===n)break e;Ce===Re&&(Ce=null),Re=Re.return}Ce===Re&&(Ce=null),Re.sibling.return=Re.return,Re=Re.sibling}}break;case 19:ki(r,n),Qi(n),d&4&&$m(n);break;case 21:break;default:ki(r,n),Qi(n)}}function Qi(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(jm(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var x=d.stateNode;d.flags&32&&(be(x,""),d.flags&=-33);var M=qm(n);ch(n,M,x);break;case 3:case 4:var P=d.stateNode.containerInfo,B=qm(n);lh(n,B,P);break;default:throw Error(t(161))}}catch($){rn(n,n.return,$)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function L1(n,r,l){Je=n,Zm(n)}function Zm(n,r,l){for(var d=(n.mode&1)!==0;Je!==null;){var x=Je,M=x.child;if(x.tag===22&&d){var P=x.memoizedState!==null||Fl;if(!P){var B=x.alternate,$=B!==null&&B.memoizedState!==null||zn;B=Fl;var de=zn;if(Fl=P,(zn=$)&&!de)for(Je=x;Je!==null;)P=Je,$=P.child,P.tag===22&&P.memoizedState!==null?e0(x):$!==null?($.return=P,Je=$):e0(x);for(;M!==null;)Je=M,Zm(M),M=M.sibling;Je=x,Fl=B,zn=de}Qm(n)}else(x.subtreeFlags&8772)!==0&&M!==null?(M.return=x,Je=M):Qm(n)}}function Qm(n){for(;Je!==null;){var r=Je;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:zn||Ul(5,r);break;case 1:var d=r.stateNode;if(r.flags&4&&!zn)if(l===null)d.componentDidMount();else{var x=r.elementType===r.type?l.memoizedProps:Ui(r.type,l.memoizedProps);d.componentDidUpdate(x,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var M=r.updateQueue;M!==null&&Jp(r,M,d);break;case 3:var P=r.updateQueue;if(P!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Jp(r,P,l)}break;case 5:var B=r.stateNode;if(l===null&&r.flags&4){l=B;var $=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":$.autoFocus&&l.focus();break;case"img":$.src&&(l.src=$.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var de=r.alternate;if(de!==null){var Ce=de.memoizedState;if(Ce!==null){var Re=Ce.dehydrated;Re!==null&&to(Re)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}zn||r.flags&512&&oh(r)}catch(Te){rn(r,r.return,Te)}}if(r===n){Je=null;break}if(l=r.sibling,l!==null){l.return=r.return,Je=l;break}Je=r.return}}function Jm(n){for(;Je!==null;){var r=Je;if(r===n){Je=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Je=l;break}Je=r.return}}function e0(n){for(;Je!==null;){var r=Je;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Ul(4,r)}catch($){rn(r,l,$)}break;case 1:var d=r.stateNode;if(typeof d.componentDidMount=="function"){var x=r.return;try{d.componentDidMount()}catch($){rn(r,x,$)}}var M=r.return;try{oh(r)}catch($){rn(r,M,$)}break;case 5:var P=r.return;try{oh(r)}catch($){rn(r,P,$)}}}catch($){rn(r,r.return,$)}if(r===n){Je=null;break}var B=r.sibling;if(B!==null){B.return=r.return,Je=B;break}Je=r.return}}var I1=Math.ceil,Dl=E.ReactCurrentDispatcher,uh=E.ReactCurrentOwner,Ei=E.ReactCurrentBatchConfig,Nt=0,Tn=null,dn=null,Fn=0,fi=0,fa=Hr(0),_n=0,Eo=null,Es=0,kl=0,hh=0,To=null,ti=null,fh=0,da=1/0,yr=null,Ol=!1,dh=null,qr=null,zl=!1,Yr=null,Bl=0,Co=0,ph=null,Hl=-1,Gl=0;function Xn(){return(Nt&6)!==0?je():Hl!==-1?Hl:Hl=je()}function $r(n){return(n.mode&1)===0?1:(Nt&2)!==0&&Fn!==0?Fn&-Fn:m1.transition!==null?(Gl===0&&(Gl=Ye()),Gl):(n=Tt,n!==0||(n=window.event,n=n===void 0?16:np(n.type)),n)}function Oi(n,r,l,d){if(50<Co)throw Co=0,ph=null,Error(t(185));Et(n,l,d),((Nt&2)===0||n!==Tn)&&(n===Tn&&((Nt&2)===0&&(kl|=l),_n===4&&Kr(n,Fn)),ni(n,d),l===1&&Nt===0&&(r.mode&1)===0&&(da=je()+500,gl&&Vr()))}function ni(n,r){var l=n.callbackNode;Ht(n,r);var d=jt(n,n===Tn?Fn:0);if(d===0)l!==null&&Se(l),n.callbackNode=null,n.callbackPriority=0;else if(r=d&-d,n.callbackPriority!==r){if(l!=null&&Se(l),r===1)n.tag===0?p1(n0.bind(null,n)):Hp(n0.bind(null,n)),u1(function(){(Nt&6)===0&&Vr()}),l=null;else{switch(fr(d)){case 1:l=qi;break;case 4:l=N;break;case 16:l=ne;break;case 536870912:l=ce;break;default:l=ne}l=u0(l,t0.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function t0(n,r){if(Hl=-1,Gl=0,(Nt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(pa()&&n.callbackNode!==l)return null;var d=jt(n,n===Tn?Fn:0);if(d===0)return null;if((d&30)!==0||(d&n.expiredLanes)!==0||r)r=Vl(n,d);else{r=d;var x=Nt;Nt|=2;var M=r0();(Tn!==n||Fn!==r)&&(yr=null,da=je()+500,Cs(n,r));do try{U1();break}catch(B){i0(n,B)}while(!0);Iu(),Dl.current=M,Nt=x,dn!==null?r=0:(Tn=null,Fn=0,r=_n)}if(r!==0){if(r===2&&(x=fn(n),x!==0&&(d=x,r=mh(n,x))),r===1)throw l=Eo,Cs(n,0),Kr(n,d),ni(n,je()),l;if(r===6)Kr(n,d);else{if(x=n.current.alternate,(d&30)===0&&!N1(x)&&(r=Vl(n,d),r===2&&(M=fn(n),M!==0&&(d=M,r=mh(n,M))),r===1))throw l=Eo,Cs(n,0),Kr(n,d),ni(n,je()),l;switch(n.finishedWork=x,n.finishedLanes=d,r){case 0:case 1:throw Error(t(345));case 2:As(n,ti,yr);break;case 3:if(Kr(n,d),(d&130023424)===d&&(r=fh+500-je(),10<r)){if(jt(n,0)!==0)break;if(x=n.suspendedLanes,(x&d)!==d){Xn(),n.pingedLanes|=n.suspendedLanes&x;break}n.timeoutHandle=Su(As.bind(null,n,ti,yr),r);break}As(n,ti,yr);break;case 4:if(Kr(n,d),(d&4194240)===d)break;for(r=n.eventTimes,x=-1;0<d;){var P=31-ke(d);M=1<<P,P=r[P],P>x&&(x=P),d&=~M}if(d=x,d=je()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*I1(d/1960))-d,10<d){n.timeoutHandle=Su(As.bind(null,n,ti,yr),d);break}As(n,ti,yr);break;case 5:As(n,ti,yr);break;default:throw Error(t(329))}}}return ni(n,je()),n.callbackNode===l?t0.bind(null,n):null}function mh(n,r){var l=To;return n.current.memoizedState.isDehydrated&&(Cs(n,r).flags|=256),n=Vl(n,r),n!==2&&(r=ti,ti=l,r!==null&&gh(r)),n}function gh(n){ti===null?ti=n:ti.push.apply(ti,n)}function N1(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var x=l[d],M=x.getSnapshot;x=x.value;try{if(!Ni(M(),x))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Kr(n,r){for(r&=~hh,r&=~kl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-ke(r),d=1<<l;n[l]=-1,r&=~d}}function n0(n){if((Nt&6)!==0)throw Error(t(327));pa();var r=jt(n,0);if((r&1)===0)return ni(n,je()),null;var l=Vl(n,r);if(n.tag!==0&&l===2){var d=fn(n);d!==0&&(r=d,l=mh(n,d))}if(l===1)throw l=Eo,Cs(n,0),Kr(n,r),ni(n,je()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,As(n,ti,yr),ni(n,je()),null}function xh(n,r){var l=Nt;Nt|=1;try{return n(r)}finally{Nt=l,Nt===0&&(da=je()+500,gl&&Vr())}}function Ts(n){Yr!==null&&Yr.tag===0&&(Nt&6)===0&&pa();var r=Nt;Nt|=1;var l=Ei.transition,d=Tt;try{if(Ei.transition=null,Tt=1,n)return n()}finally{Tt=d,Ei.transition=l,Nt=r,(Nt&6)===0&&Vr()}}function vh(){fi=fa.current,Zt(fa)}function Cs(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,c1(l)),dn!==null)for(l=dn.return;l!==null;){var d=l;switch(Cu(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&pl();break;case 3:ca(),Zt(Qn),Zt(Dn),Bu();break;case 5:Ou(d);break;case 4:ca();break;case 13:Zt(tn);break;case 19:Zt(tn);break;case 10:Nu(d.type._context);break;case 22:case 23:vh()}l=l.return}if(Tn=n,dn=n=Zr(n.current,null),Fn=fi=r,_n=0,Eo=null,hh=kl=Es=0,ti=To=null,Ms!==null){for(r=0;r<Ms.length;r++)if(l=Ms[r],d=l.interleaved,d!==null){l.interleaved=null;var x=d.next,M=l.pending;if(M!==null){var P=M.next;M.next=x,d.next=P}l.pending=d}Ms=null}return n}function i0(n,r){do{var l=dn;try{if(Iu(),Tl.current=Pl,Cl){for(var d=nn.memoizedState;d!==null;){var x=d.queue;x!==null&&(x.pending=null),d=d.next}Cl=!1}if(bs=0,En=vn=nn=null,_o=!1,yo=0,uh.current=null,l===null||l.return===null){_n=1,Eo=r,dn=null;break}e:{var M=n,P=l.return,B=l,$=r;if(r=Fn,B.flags|=32768,$!==null&&typeof $=="object"&&typeof $.then=="function"){var de=$,Ce=B,Re=Ce.tag;if((Ce.mode&1)===0&&(Re===0||Re===11||Re===15)){var Te=Ce.alternate;Te?(Ce.updateQueue=Te.updateQueue,Ce.memoizedState=Te.memoizedState,Ce.lanes=Te.lanes):(Ce.updateQueue=null,Ce.memoizedState=null)}var $e=Am(P);if($e!==null){$e.flags&=-257,Rm($e,P,B,M,r),$e.mode&1&&Cm(M,de,r),r=$e,$=de;var tt=r.updateQueue;if(tt===null){var it=new Set;it.add($),r.updateQueue=it}else tt.add($);break e}else{if((r&1)===0){Cm(M,de,r),_h();break e}$=Error(t(426))}}else if(en&&B.mode&1){var an=Am(P);if(an!==null){(an.flags&65536)===0&&(an.flags|=256),Rm(an,P,B,M,r),Pu(ua($,B));break e}}M=$=ua($,B),_n!==4&&(_n=2),To===null?To=[M]:To.push(M),M=P;do{switch(M.tag){case 3:M.flags|=65536,r&=-r,M.lanes|=r;var ae=Em(M,$,r);Qp(M,ae);break e;case 1:B=$;var J=M.type,ue=M.stateNode;if((M.flags&128)===0&&(typeof J.getDerivedStateFromError=="function"||ue!==null&&typeof ue.componentDidCatch=="function"&&(qr===null||!qr.has(ue)))){M.flags|=65536,r&=-r,M.lanes|=r;var Fe=Tm(M,B,r);Qp(M,Fe);break e}}M=M.return}while(M!==null)}a0(l)}catch(st){r=st,dn===l&&l!==null&&(dn=l=l.return);continue}break}while(!0)}function r0(){var n=Dl.current;return Dl.current=Pl,n===null?Pl:n}function _h(){(_n===0||_n===3||_n===2)&&(_n=4),Tn===null||(Es&268435455)===0&&(kl&268435455)===0||Kr(Tn,Fn)}function Vl(n,r){var l=Nt;Nt|=2;var d=r0();(Tn!==n||Fn!==r)&&(yr=null,Cs(n,r));do try{F1();break}catch(x){i0(n,x)}while(!0);if(Iu(),Nt=l,Dl.current=d,dn!==null)throw Error(t(261));return Tn=null,Fn=0,_n}function F1(){for(;dn!==null;)s0(dn)}function U1(){for(;dn!==null&&!Ie();)s0(dn)}function s0(n){var r=c0(n.alternate,n,fi);n.memoizedProps=n.pendingProps,r===null?a0(n):dn=r,uh.current=null}function a0(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=C1(l,r,fi),l!==null){dn=l;return}}else{if(l=A1(l,r),l!==null){l.flags&=32767,dn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{_n=6,dn=null;return}}if(r=r.sibling,r!==null){dn=r;return}dn=r=n}while(r!==null);_n===0&&(_n=5)}function As(n,r,l){var d=Tt,x=Ei.transition;try{Ei.transition=null,Tt=1,D1(n,r,l,d)}finally{Ei.transition=x,Tt=d}return null}function D1(n,r,l,d){do pa();while(Yr!==null);if((Nt&6)!==0)throw Error(t(327));l=n.finishedWork;var x=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var M=l.lanes|l.childLanes;if(Kn(n,M),n===Tn&&(dn=Tn=null,Fn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||zl||(zl=!0,u0(ne,function(){return pa(),null})),M=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||M){M=Ei.transition,Ei.transition=null;var P=Tt;Tt=1;var B=Nt;Nt|=4,uh.current=null,P1(n,l),Km(l,n),n1(_u),el=!!vu,_u=vu=null,n.current=l,L1(l),Ae(),Nt=B,Tt=P,Ei.transition=M}else n.current=l;if(zl&&(zl=!1,Yr=n,Bl=x),M=n.pendingLanes,M===0&&(qr=null),Ze(l.stateNode),ni(n,je()),r!==null)for(d=n.onRecoverableError,l=0;l<r.length;l++)x=r[l],d(x.value,{componentStack:x.stack,digest:x.digest});if(Ol)throw Ol=!1,n=dh,dh=null,n;return(Bl&1)!==0&&n.tag!==0&&pa(),M=n.pendingLanes,(M&1)!==0?n===ph?Co++:(Co=0,ph=n):Co=0,Vr(),null}function pa(){if(Yr!==null){var n=fr(Bl),r=Ei.transition,l=Tt;try{if(Ei.transition=null,Tt=16>n?16:n,Yr===null)var d=!1;else{if(n=Yr,Yr=null,Bl=0,(Nt&6)!==0)throw Error(t(331));var x=Nt;for(Nt|=4,Je=n.current;Je!==null;){var M=Je,P=M.child;if((Je.flags&16)!==0){var B=M.deletions;if(B!==null){for(var $=0;$<B.length;$++){var de=B[$];for(Je=de;Je!==null;){var Ce=Je;switch(Ce.tag){case 0:case 11:case 15:bo(8,Ce,M)}var Re=Ce.child;if(Re!==null)Re.return=Ce,Je=Re;else for(;Je!==null;){Ce=Je;var Te=Ce.sibling,$e=Ce.return;if(Xm(Ce),Ce===de){Je=null;break}if(Te!==null){Te.return=$e,Je=Te;break}Je=$e}}}var tt=M.alternate;if(tt!==null){var it=tt.child;if(it!==null){tt.child=null;do{var an=it.sibling;it.sibling=null,it=an}while(it!==null)}}Je=M}}if((M.subtreeFlags&2064)!==0&&P!==null)P.return=M,Je=P;else e:for(;Je!==null;){if(M=Je,(M.flags&2048)!==0)switch(M.tag){case 0:case 11:case 15:bo(9,M,M.return)}var ae=M.sibling;if(ae!==null){ae.return=M.return,Je=ae;break e}Je=M.return}}var J=n.current;for(Je=J;Je!==null;){P=Je;var ue=P.child;if((P.subtreeFlags&2064)!==0&&ue!==null)ue.return=P,Je=ue;else e:for(P=J;Je!==null;){if(B=Je,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:Ul(9,B)}}catch(st){rn(B,B.return,st)}if(B===P){Je=null;break e}var Fe=B.sibling;if(Fe!==null){Fe.return=B.return,Je=Fe;break e}Je=B.return}}if(Nt=x,Vr(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(le,n)}catch{}d=!0}return d}finally{Tt=l,Ei.transition=r}}return!1}function o0(n,r,l){r=ua(l,r),r=Em(n,r,1),n=Xr(n,r,1),r=Xn(),n!==null&&(Et(n,1,r),ni(n,r))}function rn(n,r,l){if(n.tag===3)o0(n,n,l);else for(;r!==null;){if(r.tag===3){o0(r,n,l);break}else if(r.tag===1){var d=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(qr===null||!qr.has(d))){n=ua(l,n),n=Tm(r,n,1),r=Xr(r,n,1),n=Xn(),r!==null&&(Et(r,1,n),ni(r,n));break}}r=r.return}}function k1(n,r,l){var d=n.pingCache;d!==null&&d.delete(r),r=Xn(),n.pingedLanes|=n.suspendedLanes&l,Tn===n&&(Fn&l)===l&&(_n===4||_n===3&&(Fn&130023424)===Fn&&500>je()-fh?Cs(n,0):hh|=l),ni(n,r)}function l0(n,r){r===0&&((n.mode&1)===0?r=1:(r=rt,rt<<=1,(rt&130023424)===0&&(rt=4194304)));var l=Xn();n=xr(n,r),n!==null&&(Et(n,r,l),ni(n,l))}function O1(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),l0(n,l)}function z1(n,r){var l=0;switch(n.tag){case 13:var d=n.stateNode,x=n.memoizedState;x!==null&&(l=x.retryLane);break;case 19:d=n.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(r),l0(n,l)}var c0;c0=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||Qn.current)ei=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return ei=!1,T1(n,r,l);ei=(n.flags&131072)!==0}else ei=!1,en&&(r.flags&1048576)!==0&&Gp(r,vl,r.index);switch(r.lanes=0,r.tag){case 2:var d=r.type;Nl(n,r),n=r.pendingProps;var x=na(r,Dn.current);la(r,l),x=Vu(null,r,d,n,x,l);var M=Wu();return r.flags|=1,typeof x=="object"&&x!==null&&typeof x.render=="function"&&x.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Jn(d)?(M=!0,ml(r)):M=!1,r.memoizedState=x.state!==null&&x.state!==void 0?x.state:null,Du(r),x.updater=Ll,r.stateNode=x,x._reactInternals=r,Ku(r,d,n,l),r=eh(null,r,d,!0,M,l)):(r.tag=0,en&&M&&Tu(r),Wn(null,r,x,l),r=r.child),r;case 16:d=r.elementType;e:{switch(Nl(n,r),n=r.pendingProps,x=d._init,d=x(d._payload),r.type=d,x=r.tag=H1(d),n=Ui(d,n),x){case 0:r=Ju(null,r,d,n,l);break e;case 1:r=Um(null,r,d,n,l);break e;case 11:r=Pm(null,r,d,n,l);break e;case 14:r=Lm(null,r,d,Ui(d.type,n),l);break e}throw Error(t(306,d,""))}return r;case 0:return d=r.type,x=r.pendingProps,x=r.elementType===d?x:Ui(d,x),Ju(n,r,d,x,l);case 1:return d=r.type,x=r.pendingProps,x=r.elementType===d?x:Ui(d,x),Um(n,r,d,x,l);case 3:e:{if(Dm(r),n===null)throw Error(t(387));d=r.pendingProps,M=r.memoizedState,x=M.element,Zp(n,r),bl(r,d,null,l);var P=r.memoizedState;if(d=P.element,M.isDehydrated)if(M={element:d,isDehydrated:!1,cache:P.cache,pendingSuspenseBoundaries:P.pendingSuspenseBoundaries,transitions:P.transitions},r.updateQueue.baseState=M,r.memoizedState=M,r.flags&256){x=ua(Error(t(423)),r),r=km(n,r,d,l,x);break e}else if(d!==x){x=ua(Error(t(424)),r),r=km(n,r,d,l,x);break e}else for(hi=Br(r.stateNode.containerInfo.firstChild),ui=r,en=!0,Fi=null,l=$p(r,null,d,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(sa(),d===x){r=_r(n,r,l);break e}Wn(n,r,d,l)}r=r.child}return r;case 5:return em(r),n===null&&Ru(r),d=r.type,x=r.pendingProps,M=n!==null?n.memoizedProps:null,P=x.children,yu(d,x)?P=null:M!==null&&yu(d,M)&&(r.flags|=32),Fm(n,r),Wn(n,r,P,l),r.child;case 6:return n===null&&Ru(r),null;case 13:return Om(n,r,l);case 4:return ku(r,r.stateNode.containerInfo),d=r.pendingProps,n===null?r.child=aa(r,null,d,l):Wn(n,r,d,l),r.child;case 11:return d=r.type,x=r.pendingProps,x=r.elementType===d?x:Ui(d,x),Pm(n,r,d,x,l);case 7:return Wn(n,r,r.pendingProps,l),r.child;case 8:return Wn(n,r,r.pendingProps.children,l),r.child;case 12:return Wn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(d=r.type._context,x=r.pendingProps,M=r.memoizedProps,P=x.value,qt(Sl,d._currentValue),d._currentValue=P,M!==null)if(Ni(M.value,P)){if(M.children===x.children&&!Qn.current){r=_r(n,r,l);break e}}else for(M=r.child,M!==null&&(M.return=r);M!==null;){var B=M.dependencies;if(B!==null){P=M.child;for(var $=B.firstContext;$!==null;){if($.context===d){if(M.tag===1){$=vr(-1,l&-l),$.tag=2;var de=M.updateQueue;if(de!==null){de=de.shared;var Ce=de.pending;Ce===null?$.next=$:($.next=Ce.next,Ce.next=$),de.pending=$}}M.lanes|=l,$=M.alternate,$!==null&&($.lanes|=l),Fu(M.return,l,r),B.lanes|=l;break}$=$.next}}else if(M.tag===10)P=M.type===r.type?null:M.child;else if(M.tag===18){if(P=M.return,P===null)throw Error(t(341));P.lanes|=l,B=P.alternate,B!==null&&(B.lanes|=l),Fu(P,l,r),P=M.sibling}else P=M.child;if(P!==null)P.return=M;else for(P=M;P!==null;){if(P===r){P=null;break}if(M=P.sibling,M!==null){M.return=P.return,P=M;break}P=P.return}M=P}Wn(n,r,x.children,l),r=r.child}return r;case 9:return x=r.type,d=r.pendingProps.children,la(r,l),x=wi(x),d=d(x),r.flags|=1,Wn(n,r,d,l),r.child;case 14:return d=r.type,x=Ui(d,r.pendingProps),x=Ui(d.type,x),Lm(n,r,d,x,l);case 15:return Im(n,r,r.type,r.pendingProps,l);case 17:return d=r.type,x=r.pendingProps,x=r.elementType===d?x:Ui(d,x),Nl(n,r),r.tag=1,Jn(d)?(n=!0,ml(r)):n=!1,la(r,l),wm(r,d,x),Ku(r,d,x,l),eh(null,r,d,!0,n,l);case 19:return Bm(n,r,l);case 22:return Nm(n,r,l)}throw Error(t(156,r.tag))};function u0(n,r){return gs(n,r)}function B1(n,r,l,d){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ti(n,r,l,d){return new B1(n,r,l,d)}function yh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function H1(n){if(typeof n=="function")return yh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===H)return 11;if(n===W)return 14}return 2}function Zr(n,r){var l=n.alternate;return l===null?(l=Ti(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Wl(n,r,l,d,x,M){var P=2;if(d=n,typeof n=="function")yh(n)&&(P=1);else if(typeof n=="string")P=5;else e:switch(n){case I:return Rs(l.children,x,M,r);case T:P=8,x|=8;break;case F:return n=Ti(12,l,r,x|2),n.elementType=F,n.lanes=M,n;case te:return n=Ti(13,l,r,x),n.elementType=te,n.lanes=M,n;case se:return n=Ti(19,l,r,x),n.elementType=se,n.lanes=M,n;case X:return Xl(l,x,M,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case z:P=10;break e;case D:P=9;break e;case H:P=11;break e;case W:P=14;break e;case V:P=16,d=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=Ti(P,l,r,x),r.elementType=n,r.type=d,r.lanes=M,r}function Rs(n,r,l,d){return n=Ti(7,n,d,r),n.lanes=l,n}function Xl(n,r,l,d){return n=Ti(22,n,d,r),n.elementType=X,n.lanes=l,n.stateNode={isHidden:!1},n}function Sh(n,r,l){return n=Ti(6,n,null,r),n.lanes=l,n}function Mh(n,r,l){return r=Ti(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function G1(n,r,l,d,x){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=In(0),this.expirationTimes=In(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=In(0),this.identifierPrefix=d,this.onRecoverableError=x,this.mutableSourceEagerHydrationData=null}function wh(n,r,l,d,x,M,P,B,$){return n=new G1(n,r,l,B,$),r===1?(r=1,M===!0&&(r|=8)):r=0,M=Ti(3,null,null,r),n.current=M,M.stateNode=n,M.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Du(M),n}function V1(n,r,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A,key:d==null?null:""+d,children:n,containerInfo:r,implementation:l}}function h0(n){if(!n)return Gr;n=n._reactInternals;e:{if(oi(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Jn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Jn(l))return zp(n,l,r)}return r}function f0(n,r,l,d,x,M,P,B,$){return n=wh(l,d,!0,n,x,M,P,B,$),n.context=h0(null),l=n.current,d=Xn(),x=$r(l),M=vr(d,x),M.callback=r??null,Xr(l,M,x),n.current.lanes=x,Et(n,x,d),ni(n,d),n}function jl(n,r,l,d){var x=r.current,M=Xn(),P=$r(x);return l=h0(l),r.context===null?r.context=l:r.pendingContext=l,r=vr(M,P),r.payload={element:n},d=d===void 0?null:d,d!==null&&(r.callback=d),n=Xr(x,r,P),n!==null&&(Oi(n,x,P,M),wl(n,x,P)),P}function ql(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function d0(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function bh(n,r){d0(n,r),(n=n.alternate)&&d0(n,r)}function W1(){return null}var p0=typeof reportError=="function"?reportError:function(n){console.error(n)};function Eh(n){this._internalRoot=n}Yl.prototype.render=Eh.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));jl(n,r,null,null)},Yl.prototype.unmount=Eh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Ts(function(){jl(null,n,null,null)}),r[dr]=null}};function Yl(n){this._internalRoot=n}Yl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Gt();n={blockedOn:null,target:n,priority:r};for(var l=0;l<kr.length&&r!==0&&r<kr[l].priority;l++);kr.splice(l,0,n),l===0&&ep(n)}};function Th(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function $l(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function m0(){}function X1(n,r,l,d,x){if(x){if(typeof d=="function"){var M=d;d=function(){var de=ql(P);M.call(de)}}var P=f0(r,d,n,0,null,!1,!1,"",m0);return n._reactRootContainer=P,n[dr]=P.current,uo(n.nodeType===8?n.parentNode:n),Ts(),P}for(;x=n.lastChild;)n.removeChild(x);if(typeof d=="function"){var B=d;d=function(){var de=ql($);B.call(de)}}var $=wh(n,0,!1,null,null,!1,!1,"",m0);return n._reactRootContainer=$,n[dr]=$.current,uo(n.nodeType===8?n.parentNode:n),Ts(function(){jl(r,$,l,d)}),$}function Kl(n,r,l,d,x){var M=l._reactRootContainer;if(M){var P=M;if(typeof x=="function"){var B=x;x=function(){var $=ql(P);B.call($)}}jl(r,P,n,x)}else P=X1(l,r,n,x,d);return ql(P)}Bt=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=Lt(r.pendingLanes);l!==0&&(Zn(r,l|1),ni(r,je()),(Nt&6)===0&&(da=je()+500,Vr()))}break;case 13:Ts(function(){var d=xr(n,1);if(d!==null){var x=Xn();Oi(d,n,1,x)}}),bh(n,1)}},$t=function(n){if(n.tag===13){var r=xr(n,134217728);if(r!==null){var l=Xn();Oi(r,n,134217728,l)}bh(n,134217728)}},Li=function(n){if(n.tag===13){var r=$r(n),l=xr(n,r);if(l!==null){var d=Xn();Oi(l,n,r,d)}bh(n,r)}},Gt=function(){return Tt},Ii=function(n,r){var l=Tt;try{return Tt=n,r()}finally{Tt=l}},pt=function(n,r,l){switch(r){case"input":if(Xt(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var d=l[r];if(d!==n&&d.form===n.form){var x=dl(d);if(!x)throw Error(t(90));yt(d),Xt(d,x)}}}break;case"textarea":Be(n,l);break;case"select":r=l.value,r!=null&&Ot(n,!!l.multiple,r,!1)}},De=xh,Ee=Ts;var j1={usingClientEntryPoint:!1,Events:[po,ea,dl,xe,Ge,xh]},Ao={findFiberByHostInstance:vs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},q1={bundleType:Ao.bundleType,version:Ao.version,rendererPackageName:Ao.rendererPackageName,rendererConfig:Ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:E.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ps(n),n===null?null:n.stateNode},findFiberByHostInstance:Ao.findFiberByHostInstance||W1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zl.isDisabled&&Zl.supportsFiber)try{le=Zl.inject(q1),He=Zl}catch{}}return ii.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j1,ii.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Th(r))throw Error(t(200));return V1(n,r,null,l)},ii.createRoot=function(n,r){if(!Th(n))throw Error(t(299));var l=!1,d="",x=p0;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(x=r.onRecoverableError)),r=wh(n,1,!1,null,null,l,!1,d,x),n[dr]=r.current,uo(n.nodeType===8?n.parentNode:n),new Eh(r)},ii.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ps(r),n=n===null?null:n.stateNode,n},ii.flushSync=function(n){return Ts(n)},ii.hydrate=function(n,r,l){if(!$l(r))throw Error(t(200));return Kl(null,n,r,!0,l)},ii.hydrateRoot=function(n,r,l){if(!Th(n))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,x=!1,M="",P=p0;if(l!=null&&(l.unstable_strictMode===!0&&(x=!0),l.identifierPrefix!==void 0&&(M=l.identifierPrefix),l.onRecoverableError!==void 0&&(P=l.onRecoverableError)),r=f0(r,null,n,1,l??null,x,!1,M,P),n[dr]=r.current,uo(n),d)for(n=0;n<d.length;n++)l=d[n],x=l._getVersion,x=x(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,x]:r.mutableSourceEagerHydrationData.push(l,x);return new Yl(r)},ii.render=function(n,r,l){if(!$l(r))throw Error(t(200));return Kl(null,n,r,!1,l)},ii.unmountComponentAtNode=function(n){if(!$l(n))throw Error(t(40));return n._reactRootContainer?(Ts(function(){Kl(null,null,n,!1,function(){n._reactRootContainer=null,n[dr]=null})}),!0):!1},ii.unstable_batchedUpdates=xh,ii.unstable_renderSubtreeIntoContainer=function(n,r,l,d){if(!$l(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Kl(n,r,l,!1,d)},ii.version="18.3.1-next-f1338f8080-20240426",ii}var w0;function i_(){if(w0)return Rh.exports;w0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Rh.exports=n_(),Rh.exports}var b0;function r_(){if(b0)return Ql;b0=1;var a=i_();return Ql.createRoot=a.createRoot,Ql.hydrateRoot=a.hydrateRoot,Ql}var s_=r_(),he=Ed();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o_=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase()),E0=a=>{const e=o_(a);return e.charAt(0).toUpperCase()+e.slice(1)},fx=(...a)=>a.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var l_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=he.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:s="",children:o,iconNode:c,...u},h)=>he.createElement("svg",{ref:h,...l_,width:e,height:e,stroke:a,strokeWidth:i?Number(t)*24/Number(e):t,className:fx("lucide",s),...u},[...c.map(([f,p])=>he.createElement(f,p)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=(a,e)=>{const t=he.forwardRef(({className:i,...s},o)=>he.createElement(c_,{ref:o,iconNode:e,className:fx(`lucide-${a_(E0(a))}`,`lucide-${a}`,i),...s}));return t.displayName=E0(a),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],dx=bn("camera",u_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],f_=bn("circle-alert",h_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],p_=bn("circle",d_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],g_=bn("hand",m_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],v_=bn("mic-off",x_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],T0=bn("mic",__);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z",key:"1pctta"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",key:"x3v2xh"}]],S_=bn("monitor-play",y_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],w_=bn("music",M_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]],E_=bn("orbit",b_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_=[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]],C_=bn("power",T_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],R_=bn("refresh-cw",A_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],px=bn("rotate-ccw",P_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]],I_=bn("sliders-horizontal",L_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],F_=bn("sparkles",N_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],D_=bn("square",U_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196",key:"w8jjjt"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2",key:"1xawa7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],O_=bn("video-off",k_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],B_=bn("video",z_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],G_=bn("volume-2",H_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],W_=bn("volume-x",V_);function X_({onVideoReady:a}){const e=he.useRef(null),[t,i]=he.useState(""),[s,o]=he.useState(!0),[c,u]=he.useState(0),h=async()=>{try{if(o(!0),i(""),!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error("Camera API not supported in this browser. Please use a modern browser like Chrome, Firefox, or Edge.");const g=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480,facingMode:"user"},audio:!1});e.current&&(e.current.srcObject=g,e.current.onloadedmetadata=()=>{var m;(m=e.current)==null||m.play(),a(e.current),o(!1)})}catch(g){o(!1),g instanceof Error&&(g.name==="NotAllowedError"||g.name==="PermissionDeniedError"?i("Camera permission denied. Please click the camera icon in your browser's address bar and allow camera access, then click Retry below."):g.name==="NotFoundError"?i("No camera found. Please connect a camera to your device."):g.name==="NotReadableError"?i("Camera is already in use by another application. Please close other apps using the camera and try again."):g.name==="OverconstrainedError"?(i("Camera does not meet requirements. Trying with default settings..."),setTimeout(()=>{f()},1e3)):i("Error: "+g.message))}},f=async()=>{try{o(!0),i("");const g=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1});e.current&&(e.current.srcObject=g,e.current.onloadedmetadata=()=>{var m;(m=e.current)==null||m.play(),a(e.current),o(!1)})}catch{o(!1),i("Unable to access camera with default settings.")}},p=()=>{u(g=>g+1),h()};return he.useEffect(()=>(h(),()=>{var g;(g=e.current)!=null&&g.srcObject&&e.current.srcObject.getTracks().forEach(y=>y.stop())}),[a]),G.jsxs("div",{className:"relative",children:[G.jsx("video",{ref:e,className:"w-48 h-36 rounded-lg border-2 border-white/20 shadow-lg bg-black",style:{transform:"scaleX(-1)"},playsInline:!0,muted:!0}),t&&G.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center bg-black/95 rounded-lg p-3 gap-2",children:[G.jsx(f_,{className:"w-6 h-6 text-red-400"}),G.jsx("p",{className:"text-[10px] text-red-400 text-center leading-tight",children:t}),G.jsxs("button",{onClick:p,className:"mt-1 px-3 py-1 bg-white/10 hover:bg-white/20 rounded text-[10px] text-white flex items-center gap-1 transition-colors",children:[G.jsx(R_,{className:"w-3 h-3"}),"Retry"]}),G.jsx("a",{href:"https://support.google.com/chrome/answer/2693767",target:"_blank",rel:"noopener noreferrer",className:"text-[9px] text-blue-400 hover:text-blue-300 underline",children:"How to enable camera"})]}),s&&!t&&G.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center bg-black/80 rounded-lg gap-2",children:[G.jsx(dx,{className:"w-6 h-6 text-white/60 animate-pulse"}),G.jsx("p",{className:"text-xs text-white/60",children:"Loading camera..."})]})]})}const j_=3,mx=400,q_=.75,Y_={mic:"ROOM",music:"TAB",off:"MUTE"},$_={mic:"Take sound: the room through the microphone, music and all, as it actually sounded (S)",music:"Take sound: straight off a tab or the machine, with no room in it. Asks which, each take (S)",off:"Take sound: none (S)"};function C0(a){return a==="mic"?"music":a==="music"?"off":"mic"}async function K_(a,e){if(a==="off")return{stream:null,owned:!1};if(a==="mic"){if(e&&e.getAudioTracks().some(t=>t.readyState==="live"))return{stream:e,owned:!1};try{return{stream:await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1}}),owned:!0}}catch{return{stream:null,owned:!1,problem:"The microphone was refused, so this take has no sound."}}}try{const t=await navigator.mediaDevices.getDisplayMedia({video:!0,audio:!0});for(const i of t.getVideoTracks())i.stop();return t.getAudioTracks().length===0?{stream:null,owned:!1,problem:'No sound came through. Chrome asks you to tick "share tab audio" in the picker; other browsers do not offer it at all, so MIC is the one that always works.'}:{stream:t,owned:!0}}catch{return{stream:null,owned:!1,problem:"No source was picked, so this take has no sound."}}}function Z_({selectedColors:a,hue:e,saturation:t,mode:i,onHueChange:s,onModeChange:o,autoHueEnabled:c,onAutoHueToggle:u}){const h=(f,p,g)=>{f=f/360,p=p/100,g=g/100;let m,y,v;if(p===0)m=y=v=g;else{const _=(C,E,L)=>(L<0&&(L+=1),L>1&&(L-=1),L<.16666666666666666?C+(E-C)*6*L:L<.5?E:L<.6666666666666666?C+(E-C)*(.6666666666666666-L)*6:C),S=g<.5?g*(1+p):g+p-g*p,b=2*g-S;m=_(b,S,f+.3333333333333333),y=_(b,S,f),v=_(b,S,f-.3333333333333333)}const w=_=>{const S=Math.round(_*255).toString(16);return S.length===1?"0"+S:S};return`#${w(m)}${w(y)}${w(v)}`};return G.jsxs("div",{className:"w-full flex items-center gap-4 px-6 font-mono",children:[G.jsxs("div",{className:"flex gap-1",children:[G.jsx("button",{onClick:()=>o("black"),className:`px-2 py-1 text-[10px] rounded transition-all ${i==="black"?"bg-white/20 text-white":"bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60"}`,title:"1 Color (Fn key)",children:"1C"}),G.jsx("button",{onClick:()=>o("contrast"),className:`px-2 py-1 text-[10px] rounded transition-all ${i==="contrast"?"bg-white/20 text-white":"bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60"}`,title:"2 Colors (Ctrl key)",children:"2C"}),G.jsx("button",{onClick:()=>o("grayscale"),className:`px-2 py-1 text-[10px] rounded transition-all ${i==="grayscale"?"bg-white/20 text-white":"bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60"}`,title:"Black & White (Option/Alt key)",children:"B/W"})]}),i!=="grayscale"&&G.jsxs("div",{className:"flex-1 relative h-6",children:[G.jsx("div",{className:"absolute inset-0 rounded-full",style:{background:"linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)"}}),G.jsx("input",{type:"range",min:"0",max:"360",value:e,onChange:f=>s(Number(f.target.value)),className:"vj-slider-bare absolute inset-0 w-full appearance-none bg-transparent cursor-pointer"}),G.jsx("div",{className:"absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-white shadow-lg pointer-events-none",style:{left:`calc(${e/360*100}% - 10px)`,backgroundColor:h(e,t,50)}})]}),i!=="grayscale"&&G.jsx("button",{onClick:u,className:`px-3 py-1 text-[10px] rounded transition-all whitespace-nowrap ${c?"bg-cyan-500/30 text-cyan-300 border border-cyan-400/50":"bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60"}`,title:"Auto-rotate hue palette",children:c?"⟳ AUTO":"AUTO"})]})}const ar={geometric:{pattern:"geometric",name:"Geometric",short:"Geometric",category:"2D",key:"1",description:"Rotating polygons with trails"},particles:{pattern:"particles",name:"Particles",short:"Particles",category:"2D",key:"2",description:"Dynamic particle system"},waves:{pattern:"waves",name:"Waves",short:"Waves",category:"2D",key:"3",description:"Flowing wave patterns"},technical:{pattern:"technical",name:"Technical Hand Tracker",short:"Tracker",category:"2D",key:"4",description:"Hand tracking visualization"},lottie:{pattern:"lottie",name:"Lottie Inspired",short:"Lottie",category:"2D",key:"5",description:"Animated circular patterns"},"lottie-classic":{pattern:"lottie-classic",name:"Classic Lottie",short:"Lottie 2",category:"2D",key:"Q",description:"Classic Lottie animation"},linefield:{pattern:"linefield",name:"Line Field",short:"Lines",category:"2D",key:"6",description:"Dynamic line fields"},chromatic:{pattern:"chromatic",name:"Chromatic Glow",short:"Chroma",category:"2D",key:"7",description:"RGB chromatic aberration"},halftone:{pattern:"halftone",name:"Halftone Matrix",short:"Halftone",category:"2D",key:"8",description:"Halftone dot patterns"},matrix:{pattern:"matrix",name:"Digital Grid",short:"Grid",category:"2D",key:"9",description:"Matrix-style grid"},distortedcamera:{pattern:"distortedcamera",name:"Distorted Camera",short:"Camera",category:"2D",key:"W",description:"Gesture-controlled camera distortion with chromatic effects"},thicklines:{pattern:"thicklines",name:"Thick Lines",short:"Blocks",category:"2D",key:"=",description:"Rotating blocks with thickness response"},flowfield:{pattern:"flowfield",name:"Flow Field",short:"Flow",category:"2D",key:"D",description:"Flowing vector field"},liquidchrome:{pattern:"liquidchrome",name:"Liquid Chrome",short:"Chrome",category:"2D",key:"-",description:"Iridescent liquid metal simulation"},glitch:{pattern:"glitch",name:"Glitch Network",short:"Glitch",category:"3D",key:"1",description:"Network glitch with perspective effects"},cyberstream:{pattern:"cyberstream",name:"Cyber Stream",short:"Cyber",category:"3D",key:"2",description:"Cyberpunk stream with depth perspective"},morphing:{pattern:"morphing",name:"Morphing Sphere",short:"Sphere",category:"3D",key:"=",description:"Three.js morphing icosphere"},cubewall:{pattern:"cubewall",name:"Cube Wall",short:"Cubes",category:"3D",key:"4",description:"Three.js cube grid waves"},facecloud:{pattern:"facecloud",name:"Op-Art Grid",short:"Op-Art",category:"3D",key:"5",description:"Op-art grid with perspective"},face:{pattern:"face",name:"Face Mesh",short:"Face",category:"3D",key:"-",description:"MediaPipe face tracking with glowing mesh"},"smokehand-torus":{pattern:"smokehand-torus",name:"Smoke Torus",short:"Torus",category:"3D",key:"8",description:"Particle smoke shaped around a torus"},"smokehand-hand":{pattern:"smokehand-hand",name:"Smoke Hand",short:"Hand",category:"3D",key:"7",description:"Particle smoke shaped around a hand model"},"network-cube":{pattern:"network-cube",name:"Network Cube",short:"Network",category:"3D",key:"9",description:"Sparse cubic constellation"},"elastic-net":{pattern:"elastic-net",name:"Elastic Net",short:"Elastic",category:"3D",key:"0",description:"Elastic neural network simulation"},ripple:{pattern:"ripple",name:"Water Ripple",short:"Ripple",category:"TD",key:"1",description:"Camera refracted through a height field your hands leave behind"},text:{pattern:"text",name:"Kinetic Type",short:"Type",category:"TD",key:"2",description:"Your words, extruded and pushed around by your hands"},video:{pattern:"video",name:"Clip",short:"Clip",category:"TD",key:"3",description:"Your own footage, sheared into sliding bands"},chrome:{pattern:"chrome",name:"Chrome",short:"Chrome",category:"TD",key:"5",description:"Liquid metal on black, splitting light into rainbow at its edges"},mosaic:{pattern:"mosaic",name:"Mosaic",short:"Mosaic",category:"TD",key:"4",description:"Your video or photo rebuilt out of letters, dots, blocks or bars"},digitalblocks:{pattern:"digitalblocks",name:"Digital Horizon",short:"Horizon",category:"2D",key:"0",description:"Glitchy digital data sorting"}},Us=10,gx="vj-setlist";function Xo(a){return a===9?"0":String(a+1)}function _f(a){return a==="0"?9:a>="1"&&a<="9"?Number(a)-1:-1}const Ih=["geometric","waves","particles","halftone","ripple","flowfield"];function Q_(a){return typeof a=="string"&&a in ar}function J_(){try{const a=localStorage.getItem(gx);if(a===null)return Ih;const e=JSON.parse(a);return Array.isArray(e)?e.filter(Q_).filter((i,s,o)=>o.indexOf(i)===s).slice(0,Us):Ih}catch{return Ih}}function ey(a){try{localStorage.setItem(gx,JSON.stringify(a))}catch{}}function ty(a){return a.gesture==="pinch"?"PINCH":a.fingerCount===void 0?null:a.fingerCount===2?"MED":a.fingerCount>=5?"FAST":`${a.fingerCount}F`}function A0({label:a,hand:e}){const t=ty(e);return G.jsxs("div",{children:[G.jsx("div",{className:"text-white/90",children:a}),t&&G.jsx("div",{className:"text-cyan-400",children:t})]})}const ny=[{key:"bass",label:"LOW"},{key:"lowMid",label:"L-MID"},{key:"mid",label:"MID"},{key:"high",label:"HIGH"}];function iy(a){const e=Math.floor(a);return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function Ps({label:a,active:e,warn:t,onClick:i,title:s,children:o}){return G.jsxs("button",{onClick:i,title:s,className:"flex flex-col items-center gap-1 group/btn",children:[G.jsx("span",{className:`w-8 h-8 rounded-full transition-all flex items-center justify-center group-hover/btn:scale-105 group-active/btn:scale-95 ${e?t?"bg-cyan-400 text-black shadow-lg shadow-cyan-400/40":"bg-white text-black shadow-lg shadow-white/40":"bg-white/10 text-white/60 group-hover/btn:bg-white/20 group-hover/btn:text-white"}`,children:o}),G.jsx("span",{className:`text-[8px] tracking-widest transition-colors ${e?"text-white/80":"text-white/35"}`,children:a})]})}function ry({currentPattern:a,onPatternChange:e,layers:t,selectedLayer:i,onPatternHold:s,onLayerCycle:o,showCamera:c,onCameraToggle:u,handData:h,selectedColors:f,hue:p,saturation:g,colorMode:m,onHueChange:y,onSaturationChange:v,onColorModeChange:w,autoHueEnabled:_,onAutoHueToggle:S,set:b,onOpenLibrary:C,audioEnabled:E,onAudioToggle:L,audioSensitivity:A,onAudioSensitivityChange:I,audioLevels:T,motion:F,onMotionChange:z,idleDrive:D,onIdleDriveToggle:H,fxEnabled:te,fxActive:se,onFxToggle:W,canRecord:V,recording:X,recordSeconds:j,onRecordToggle:ie,sound:Q,onSoundCycle:O,output:ee,onOutputToggle:me}){var oe;const we=he.useRef(null),ve=()=>{we.current&&(clearTimeout(we.current.timer),we.current=null)},q=Me=>{ve(),we.current={pattern:Me,fired:!1,timer:window.setTimeout(()=>{we.current&&(we.current.fired=!0),s(Me)},mx)}},pe=Me=>{const ze=we.current;!ze||ze.pattern!==Me||(clearTimeout(ze.timer),we.current=null,ze.fired||e(Me))};return G.jsxs(G.Fragment,{children:[G.jsx("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 z-50",children:G.jsx("div",{className:"bg-black/70 backdrop-blur-sm rounded-full py-2 px-6 border border-white/20 font-mono",children:G.jsxs("div",{className:"flex items-center gap-4",children:[G.jsx("button",{onClick:C,title:"Back to the library to change the set (Esc)",className:"px-3 py-1 rounded text-[10px] tracking-wider text-white/40 transition-all hover:bg-white/10 hover:text-white/80",children:"SET"}),G.jsx("div",{className:"w-px h-6 bg-white/20"}),G.jsx("div",{className:"flex items-center gap-1.5",children:b.map((Me,ze)=>{const Ve=t.findIndex(St=>St.pattern===Me),yt=Ve===i,lt=Ve!==-1&&!yt;return G.jsxs("button",{onPointerDown:()=>q(Me),onPointerUp:()=>pe(Me),onPointerLeave:ve,className:"relative flex w-[46px] shrink-0 flex-col items-center gap-0.5 group/set",title:`${ar[Me].name} (${Xo(ze)})${Ve!==-1?` — layer ${Ve+1}`:""} · hold to stack`,children:[G.jsxs("span",{className:`relative flex h-7 w-7 items-center justify-center rounded-full text-xs transition-all ${yt?"bg-white text-black shadow-lg shadow-white/50":lt?"bg-white/25 text-white ring-1 ring-emerald-400/70":"bg-white/10 text-white/60 group-hover/set:bg-white/20 group-hover/set:text-white/90"}`,children:[Xo(ze),Ve!==-1&&t.length>1&&G.jsx("span",{className:"absolute -right-1 -top-1 h-3 w-3 rounded-full bg-emerald-400 text-center text-[7px] leading-3 text-black",children:Ve+1})]}),G.jsx("span",{className:`w-full truncate text-center text-[8px] leading-none transition-colors ${yt?"text-white/85":"text-white/35 group-hover/set:text-white/65"}`,children:ar[Me].short})]},Me)})}),G.jsx("div",{className:"w-px h-6 bg-white/20"}),G.jsxs("div",{className:"flex items-center gap-1.5",title:"How hard the hands drive every visual (- and =)",children:[G.jsx("span",{className:"text-[8px] tracking-widest text-white/35",children:"HANDS"}),G.jsx("input",{type:"range","aria-label":"Hand motion",min:0,max:2,step:.05,value:F,onChange:Me=>z(parseFloat(Me.target.value)),className:"vj-slider h-1 w-16 cursor-pointer appearance-none rounded-full focus:outline-none",style:{background:`linear-gradient(to right, rgba(255,255,255,0.85) ${F/2*100}%, rgba(255,255,255,0.15) ${F/2*100}%)`}}),G.jsxs("span",{className:`w-7 text-[9px] tabular-nums ${F>1.35?"text-amber-300":F<.65?"text-cyan-300":"text-white/55"}`,children:[Math.round(F*100),"%"]})]}),t.length>1&&G.jsxs(G.Fragment,{children:[G.jsx("div",{className:"w-px h-6 bg-white/20"}),G.jsxs("button",{onClick:o,title:"The layer the sliders and colours act on (L) — fade it with [ and ]",className:"px-2 py-1 rounded text-[10px] whitespace-nowrap bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 transition-all",children:["L",i+1,"/",t.length,G.jsxs("span",{className:"text-emerald-300/60",children:[" ",Math.round((((oe=t[i])==null?void 0:oe.opacity)??1)*100),"%"]})]})]})]})})}),G.jsxs("div",{className:"absolute bottom-[25px] left-6 right-6 z-50 flex items-end gap-4 font-mono pointer-events-none",children:[G.jsx("div",{className:"shrink-0 pointer-events-auto",children:G.jsxs("div",{className:"bg-black/70 backdrop-blur-sm rounded-2xl py-2 px-3 border border-white/20 flex items-end gap-2.5 w-fit",children:[G.jsx(Ps,{label:"CAM",active:c,onClick:u,title:"Show the camera preview (C)",children:c?G.jsx(B_,{className:"w-3.5 h-3.5"}):G.jsx(O_,{className:"w-3.5 h-3.5"})}),G.jsx(Ps,{label:"MIC",active:E,onClick:L,title:"Audio-reactive mode: drive the visuals from the microphone (A)",children:E?G.jsx(T0,{className:"w-3.5 h-3.5"}):G.jsx(v_,{className:"w-3.5 h-3.5"})}),G.jsx(Ps,{label:"AUTO",active:D,onClick:H,title:"Auto-motion: keep hand-driven visuals moving when no hands are tracked (I)",children:G.jsx(E_,{className:"w-3.5 h-3.5"})}),G.jsx("div",{className:"w-px h-8 bg-white/15 self-center"}),G.jsx(Ps,{label:"FX",active:te&&se,warn:te&&se,onClick:W,title:te?"Post effects are on. Click to bypass the whole chain, keeping every setting (X)":"Post effects bypassed. Click to bring them back (X)",children:G.jsx(F_,{className:"w-3.5 h-3.5"})}),G.jsx("div",{className:"w-px h-8 bg-white/15 self-center"}),G.jsx(Ps,{label:"OUT",active:ee,onClick:me,title:ee?"Close the projector window (O)":"Open a second window with only the visuals in it — drag it onto the projector while these controls stay here (O)",children:G.jsx(S_,{className:"w-3.5 h-3.5"})}),V&&G.jsxs(G.Fragment,{children:[G.jsx(Ps,{label:Y_[Q],active:Q!=="off",onClick:O,title:$_[Q],children:Q==="off"?G.jsx(W_,{className:"w-3.5 h-3.5"}):Q==="music"?G.jsx(w_,{className:"w-3.5 h-3.5"}):G.jsx(G_,{className:"w-3.5 h-3.5"})}),G.jsx(Ps,{label:X?iy(j):"REC",active:X,warn:X,onClick:ie,title:X?"Stop and save the take (R)":"Record the visuals — and the camera if its preview is up — with none of these controls in it (R)",children:X?G.jsx(D_,{className:"w-3 h-3 fill-current"}):G.jsx(p_,{className:"w-3.5 h-3.5 fill-current text-red-500 group-hover/btn:text-red-400"})})]})]})}),G.jsx("div",{className:"flex-1 min-w-0 flex justify-center pointer-events-none",children:G.jsx("div",{className:"bg-black/70 backdrop-blur-sm rounded-full py-2 px-6 border border-white/20 max-w-4xl w-full pointer-events-auto",children:G.jsx(Z_,{selectedColors:f,hue:p,saturation:g,mode:m,onHueChange:y,onModeChange:w,autoHueEnabled:_,onAutoHueToggle:S})})}),!E&&G.jsxs("div",{className:"shrink-0 bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-white/20 space-y-2 text-xs min-w-[200px] font-mono animate-in fade-in duration-300 pointer-events-auto",children:[G.jsx("div",{className:"text-white/80 mb-2",children:"HAND"}),G.jsxs("div",{className:"space-y-1",children:[h.left&&G.jsx(A0,{label:"L HAND",hand:h.left}),h.right&&G.jsx(A0,{label:"R HAND",hand:h.right}),h.clapping&&G.jsx("div",{className:"text-red-500 text-base animate-bounce",children:"CLAP!"}),!h.left&&!h.right&&G.jsx("div",{className:"text-white/50",children:"NO HANDS"})]}),G.jsxs("div",{className:"text-white/50 text-[10px] mt-2 pt-2 border-t border-white/20",children:["OPEN=FOLLOW",G.jsx("br",{}),"PINCH=SLOW 2F=MED 5F=FAST",G.jsx("br",{}),"CLAP=EXPLODE"]})]}),E&&G.jsx("div",{className:"shrink-0 animate-in slide-in-from-right-5 fade-in duration-300 pointer-events-auto",children:G.jsxs("div",{className:"bg-black/70 backdrop-blur-sm rounded-xl p-4 border border-white/20 font-mono flex flex-col gap-4 w-[160px]",children:[G.jsxs("div",{className:"flex items-center gap-2 border-b border-white/10 pb-2",children:[G.jsx(T0,{className:"w-3.5 h-3.5 text-white/90 animate-pulse"}),G.jsx("span",{className:"text-[10px] font-bold text-white/80 tracking-wider",children:"AUDIO"})]}),G.jsxs("div",{className:"space-y-1 group",children:[G.jsxs("div",{className:"flex justify-between text-[9px] text-white/50 font-medium",children:[G.jsx("span",{className:"group-hover:text-white/80 transition-colors",children:"GAIN"}),G.jsxs("span",{className:"text-white",children:[Math.round(A*100),"%"]})]}),G.jsx("div",{className:"relative h-4 flex items-center",children:G.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:A,onChange:Me=>I(parseFloat(Me.target.value)),className:"vj-slider w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer focus:outline-none",style:{backgroundImage:`linear-gradient(to right, white 0%, white ${A*100}%, rgba(255,255,255,0.2) ${A*100}%)`}})})]}),G.jsxs("div",{className:"space-y-1",children:[G.jsxs("div",{className:"flex justify-between text-[9px] text-white/50 font-medium",children:[G.jsx("span",{children:"LEVELS"}),G.jsx("span",{className:`transition-colors ${T.onset>.05?"text-cyan-300":"text-white/20"}`,children:"●"})]}),G.jsx("div",{className:"flex items-end gap-1 h-10",children:ny.map(({key:Me,label:ze})=>G.jsxs("div",{className:"flex-1 flex flex-col items-center gap-1",children:[G.jsx("div",{className:"relative w-full h-8 rounded-sm bg-white/10 overflow-hidden",children:G.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-white transition-[height] duration-75",style:{height:`${Math.round(T[Me]*100)}%`}})}),G.jsx("span",{className:"text-[7px] tracking-wider text-white/50",children:ze})]},Me))})]})]})})]})]})}const sy="modulepreload",ay=function(a,e){return new URL(a,e).href},R0={},xx=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let c=function(p){return Promise.all(p.map(g=>Promise.resolve(g).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};const u=document.getElementsByTagName("link"),h=document.querySelector("meta[property=csp-nonce]"),f=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));s=c(t.map(p=>{if(p=ay(p,i),p in R0)return;R0[p]=!0;const g=p.endsWith(".css"),m=g?'[rel="stylesheet"]':"";if(!!i)for(let w=u.length-1;w>=0;w--){const _=u[w];if(_.href===p&&(!g||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${m}`))return;const v=document.createElement("link");if(v.rel=g?"stylesheet":sy,g||(v.as="script"),v.crossOrigin="",v.href=p,f&&v.setAttribute("nonce",f),document.head.appendChild(v),g)return new Promise((w,_)=>{v.addEventListener("load",w),v.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${p}`)))})}))}function o(c){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=c,window.dispatchEvent(u),!u.defaultPrevented)throw c}return s.then(c=>{for(const u of c||[])u.status==="rejected"&&o(u.reason);return e().catch(o)})},P0=30,L0=.15;function oy({videoElement:a,onHandData:e}){const t=he.useRef(null),i=he.useRef(!1),s=he.useRef(-1),o=he.useRef(null),c=he.useRef([]),u=he.useRef([]),h=he.useRef({}),f=he.useRef([]),p=he.useRef(null);return he.useEffect(()=>{let g=!0;const m=async()=>{if(!i.current)try{console.log("✋ Initializing MediaPipe Hand Landmarker (Tasks Vision API)...");const _=await xx(()=>import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14"),[],import.meta.url),{HandLandmarker:S,FilesetResolver:b}=_,C=await b.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm");t.current=await S.createFromOptions(C,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",delegate:"GPU"},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.7,minHandPresenceConfidence:.5,minTrackingConfidence:.5}),console.log("✅ Hand tracking initialized (Tasks Vision API)"),i.current=!0,g&&y()}catch(_){console.error("❌ Error initializing hand tracking:",_)}},y=()=>{const _=()=>{if(!g||!t.current||!a)return;const S=performance.now();if(a.currentTime!==s.current){s.current=a.currentTime;try{const b=t.current.detectForVideo(a,S);v(b)}catch(b){console.error("Hand detection error:",b)}}o.current=requestAnimationFrame(_)};_()},v=_=>{const S=Date.now(),b={left:null,right:null};if(_.landmarks&&_.handedness&&_.landmarks.length>0)if(_.handedness.forEach((C,E)=>{const L=_.landmarks[E],A=C[0].categoryName.toLowerCase(),I=L[9],T={x:1-I.x,y:I.y},F=cy(L),z=ly(L),D=A==="left"?u.current:c.current;let H=0;if(D.length>0){const j=D[D.length-1],ie=T.x-j.position.x,Q=T.y-j.position.y,O=Math.sqrt(ie*ie+Q*Q),ee=(S-j.timestamp)/1e3;H=ee>0?O/ee:0,H=Math.min(H*2,3)}const te=A==="left"?"right":"left";(D.length>0?D[D.length-1].gesture:null)!==F&&(h.current[te]=S);const W=h.current[te]||S,V=(S-W)/1e3;D.push({position:T,gesture:F,timestamp:S}),D.length>10&&D.shift(),f.current.push({x:T.x,y:T.y,hand:te});const X={position:T,gesture:F,pinchDistance:F==="pinch"?uy(L):void 0,velocity:H,holdDuration:V,fingerCount:z,landmarks:L.map(j=>({x:1-j.x,y:j.y,z:j.z}))};A==="left"?b.right=X:b.left=X}),b.left&&b.right){const C=b.left.position.x-b.right.position.x,E=b.left.position.y-b.right.position.y,L=Math.sqrt(C*C+E*E);b.distanceBetweenHands=L,L<L0&&(b.clapping=!0,b.clapIntensity=1-L/L0)}else p.current=null;f.current.length>P0&&(f.current=f.current.slice(-P0)),b.gestureTrail=[...f.current],e(b)},w=()=>{a&&a.readyState>=2?m():setTimeout(w,100)};return w(),()=>{if(g=!1,o.current!==null&&cancelAnimationFrame(o.current),t.current)try{t.current.close(),t.current=null}catch(_){console.warn("Error closing hand landmarker:",_)}i.current=!1}},[a,e]),null}function ly(a){if(!a||a.length<21)return 0;const e=a[0];a[9];let t=0;const i=a[4];a[3];const s=a[2],o=a[1],c=Math.sqrt(Math.pow(i.x-o.x,2)+Math.pow(i.y-o.y,2)),u=Math.sqrt(Math.pow(s.x-o.x,2)+Math.pow(s.y-o.y,2));c>u*1.2&&t++;const h=[{tip:8,pip:6,mcp:5},{tip:12,pip:10,mcp:9},{tip:16,pip:14,mcp:13},{tip:20,pip:18,mcp:17}],f=a[9];f.y-e.y,f.z-e.z;for(const p of h){const g=a[p.tip],m=a[p.pip],y=a[p.mcp],v=g.y<y.y-.02,w=Math.sqrt(Math.pow(g.x-e.x,2)+Math.pow(g.y-e.y,2)+Math.pow(g.z-e.z,2)),_=Math.sqrt(Math.pow(m.x-e.x,2)+Math.pow(m.y-e.y,2)+Math.pow(m.z-e.z,2)),S=w>_*1.05,b={x:y.x-m.x,y:y.y-m.y,z:y.z-m.z},C={x:g.x-m.x,y:g.y-m.y,z:g.z-m.z},E=Math.sqrt(b.x**2+b.y**2+b.z**2),L=Math.sqrt(C.x**2+C.y**2+C.z**2);if(E>0&&L>0){const I=b.x/E*(C.x/L)+b.y/E*(C.y/L)+b.z/E*(C.z/L)<-.3;(v||S||I)&&t++}else(v||S)&&t++}return t}function cy(a){if(!a||a.length<21)return"none";const e=a[9],t=a[4],i=a[8],s=a[12],o=a[16],c=a[20],u=a[6],h=a[10],f=a[14],p=a[18];if(Math.sqrt(Math.pow(t.x-i.x,2)+Math.pow(t.y-i.y,2)+Math.pow(t.z-i.z,2))<.06)return"pinch";const m=Math.sqrt(Math.pow(i.x-e.x,2)+Math.pow(i.y-e.y,2)+Math.pow(i.z-e.z,2)),y=Math.sqrt(Math.pow(u.x-e.x,2)+Math.pow(u.y-e.y,2)+Math.pow(u.z-e.z,2)),v=m>y*1.1,w=Math.sqrt(Math.pow(s.x-e.x,2)+Math.pow(s.y-e.y,2)+Math.pow(s.z-e.z,2)),_=Math.sqrt(Math.pow(h.x-e.x,2)+Math.pow(h.y-e.y,2)+Math.pow(h.z-e.z,2)),S=w>_*1.1,b=Math.sqrt(Math.pow(o.x-e.x,2)+Math.pow(o.y-e.y,2)+Math.pow(o.z-e.z,2)),C=Math.sqrt(Math.pow(f.x-e.x,2)+Math.pow(f.y-e.y,2)+Math.pow(f.z-e.z,2)),E=b>C*1.1,L=Math.sqrt(Math.pow(c.x-e.x,2)+Math.pow(c.y-e.y,2)+Math.pow(c.z-e.z,2)),A=Math.sqrt(Math.pow(p.x-e.x,2)+Math.pow(p.y-e.y,2)+Math.pow(p.z-e.z,2)),I=L>A*1.1,T=[v,S,E,I].filter(Boolean).length;return T>=3?"open":T<=1?"fist":"none"}function uy(a){const e=a[4],t=a[8];return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)+Math.pow(e.z-t.z,2))}function hy({onGrant:a,onSkip:e}){return G.jsx("div",{className:"fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center",children:G.jsx("div",{className:"bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-xl rounded-2xl p-8 max-w-md border border-white/20 shadow-2xl",children:G.jsxs("div",{className:"text-center space-y-6",children:[G.jsx("div",{className:"flex justify-center",children:G.jsx("div",{className:"w-20 h-20 bg-purple-600/30 rounded-full flex items-center justify-center",children:G.jsx(dx,{className:"w-10 h-10 text-purple-300"})})}),G.jsxs("div",{children:[G.jsx("h2",{className:"text-2xl text-white mb-2",children:"Camera Access Required"}),G.jsx("p",{className:"text-white/70 text-sm",children:"This VJ app needs camera access to track your hand movements and gestures for interactive visual control."})]}),G.jsx("div",{className:"bg-black/30 rounded-lg p-4 space-y-2 text-left",children:G.jsxs("div",{className:"flex items-start gap-3",children:[G.jsx(g_,{className:"w-5 h-5 text-green-400 mt-0.5 flex-shrink-0"}),G.jsxs("div",{className:"text-sm",children:[G.jsx("div",{className:"text-white/90",children:"Hand Tracking"}),G.jsx("div",{className:"text-white/60 text-xs",children:"Real-time gesture recognition"})]})]})}),G.jsxs("div",{className:"flex gap-3",children:[G.jsx("button",{onClick:e,className:"flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all",children:"Skip"}),G.jsx("button",{onClick:a,className:"flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg transition-all font-medium",children:"Allow Access"})]}),G.jsx("p",{className:"text-white/50 text-xs",children:"Your camera feed is processed locally on your device. No data is sent to external servers."})]})})})}function ri(a){return Number.isFinite(a)?Math.round(Math.min(255,Math.max(0,a))).toString(16).padStart(2,"0"):"00"}const yf={physics:{initialVelocity:4,damping:.98},size:{baseRange:[100,200],growthMultiplier:1.5,shrinkMultiplier:.2,transitionSpeed:.3},glow:{layers:2,expansion:.4,layerFade:.3},emission:{openHandRate:.5,closedHandRate:.05},trail:{fadeAlpha:.3},limits:{maxParticles:50},explosion:{particleCount:50,speedRange:[5,20],sizeMultiplier:1.5,forceMultiplier:10,growthFactor:.8,vibrationDuration:.25,cooldown:1e3,flashDelay:20},controls:{fingerCountSpeed:{oneFinger:.01,twoFingers:1,threeFingers:1.4,fourFingers:1.7,fiveFingers:2},openOpacity:1,closedOpacity:1,fadeOutRate:.08}};function Cr(a,e){let t=a;for(const i of e.split(".")){if(typeof t!="object"||t===null)return;t=t[i]}return typeof t=="number"?t:void 0}function Ri(a,e){const t=structuredClone(a);for(const[i,s]of Object.entries(e)){if(!Number.isFinite(s)||Cr(a,i)===void 0)continue;const o=i.split("."),c=o.pop();let u=t;for(const h of o)u=u[h];u[c]=s}return t}function I0(a){if(typeof a!="object"||a===null||Array.isArray(a))return{};const e={};for(const[t,i]of Object.entries(a)){if(typeof i!="object"||i===null||Array.isArray(i))continue;const s={};for(const[o,c]of Object.entries(i))typeof c=="number"&&Number.isFinite(c)&&(s[o]=c);Object.keys(s).length>0&&(e[t]=s)}return e}let vx=1,_x=0;function fy(a,e){vx=e,_x+=a*e}function xn(){return vx}function Ko(){return _x}class Nh{constructor(e,t,i,s,o){U(this,"x");U(this,"y");U(this,"vx");U(this,"vy");U(this,"size");U(this,"color");U(this,"baseSize");U(this,"targetSize");U(this,"alpha",1);this.x=e,this.y=t;const c=o.physics.initialVelocity;this.vx=(Math.random()-.5)*c,this.vy=(Math.random()-.5)*c;const[u,h]=o.size.baseRange;this.baseSize=(u+Math.random()*(h-u))*s,this.size=this.baseSize,this.targetSize=this.baseSize,this.color=i}update(e,t,i,s){e?(this.targetSize=this.baseSize*s.size.growthMultiplier,this.alpha=s.controls.openOpacity,t>0&&(this.vx+=(Math.random()-.5)*t*s.explosion.forceMultiplier*i,this.vy+=(Math.random()-.5)*t*s.explosion.forceMultiplier*i,this.targetSize=this.baseSize*(1.2+t*s.explosion.growthFactor))):(this.targetSize=this.baseSize*s.size.shrinkMultiplier,this.alpha=Math.max(0,this.alpha-s.controls.fadeOutRate)),this.size+=(this.targetSize-this.size)*s.size.transitionSpeed,this.x+=this.vx*i,this.y+=this.vy*i,this.vx*=s.physics.damping,this.vy*=s.physics.damping}}class dy{constructor(e,t){U(this,"cfg",yf);U(this,"canvas");U(this,"ctx");U(this,"particles",[]);U(this,"time",0);U(this,"vibrationTimer",0);U(this,"isExploding",!1);this.canvas=e,this.ctx=t}setParams(e){this.cfg=Ri(yf,e)}render(e,t){this.time+=.016*xn(),this.ctx.fillStyle=`rgba(0, 0, 0, ${this.cfg.trail.fadeAlpha})`,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&!this.isExploding&&(this.createExplosionParticles(t),this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.004,i=Math.max(0,this.vibrationTimer));let s=this.cfg.controls.fingerCountSpeed.twoFingers,o=!1,c=!1,u=0,h=0;e.left&&(o=e.left.gesture==="open",u=e.left.fingerCount||0,e.left.gesture==="pinch"&&(u=1)),e.right&&(c=e.right.gesture==="open",h=e.right.fingerCount||0,e.right.gesture==="pinch"&&(h=1));const f=o||c,p=Math.max(u,h);if(p===1?s=this.cfg.controls.fingerCountSpeed.oneFinger:p===2?s=this.cfg.controls.fingerCountSpeed.twoFingers:p===3?s=this.cfg.controls.fingerCountSpeed.threeFingers:p===4?s=this.cfg.controls.fingerCountSpeed.fourFingers:p>=5&&(s=this.cfg.controls.fingerCountSpeed.fiveFingers),e.left){const m=e.left.gesture==="open"?this.cfg.emission.openHandRate:this.cfg.emission.closedHandRate;Math.random()<m&&this.particles.push(new Nh(e.left.position.x*this.canvas.width,e.left.position.y*this.canvas.height,t[Math.floor(Math.random()*t.length)],1,this.cfg))}if(e.right){const m=e.right.gesture==="open"?this.cfg.emission.openHandRate:this.cfg.emission.closedHandRate;Math.random()<m&&this.particles.push(new Nh(e.right.position.x*this.canvas.width,e.right.position.y*this.canvas.height,t[Math.floor(Math.random()*t.length)],1,this.cfg))}this.particles=this.particles.filter(g=>{if(g.update(f,i,s,this.cfg),g.alpha<.01)return!1;this.ctx.save(),this.ctx.globalAlpha=g.alpha;for(let m=0;m<this.cfg.glow.layers;m++){const y=g.size*(1+m*this.cfg.glow.expansion),v=this.ctx.createRadialGradient(g.x,g.y,0,g.x,g.y,y),w=(1-m*this.cfg.glow.layerFade)*g.alpha;v.addColorStop(0,g.color+ri(w*255)),v.addColorStop(.5,g.color+ri(w*150)),v.addColorStop(1,g.color+"00"),this.ctx.fillStyle=v,this.ctx.beginPath(),this.ctx.arc(g.x,g.y,y,0,Math.PI*2),this.ctx.fill()}return this.ctx.restore(),!0}),this.particles.length>this.cfg.limits.maxParticles&&(this.particles=this.particles.slice(-this.cfg.limits.maxParticles))}createExplosionParticles(e){const t=this.canvas.width/2,i=this.canvas.height/2;for(let s=0;s<this.cfg.explosion.particleCount;s++){const o=Math.random()*Math.PI*2,[c,u]=this.cfg.explosion.speedRange,h=c+Math.random()*(u-c),f=new Nh(t,i,e[Math.floor(Math.random()*e.length)],this.cfg.explosion.sizeMultiplier,this.cfg);f.vx=Math.cos(o)*h,f.vy=Math.sin(o)*h,this.particles.push(f)}this.ctx.fillStyle="#FFFFFFDD",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),setTimeout(()=>{this.ctx.fillStyle=e[0]+"80",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)},this.cfg.explosion.flashDelay),this.vibrationTimer=this.cfg.explosion.vibrationDuration,this.isExploding=!0,setTimeout(()=>{this.isExploding=!1},this.cfg.explosion.cooldown)}}const Sf={trail:{fadeAlpha:.1,lineThickness:2},fingerCountSpeed:{oneFinger:.003,normalFingers:1,fiveFingers:2},fingerCountStrokeWidth:{oneFinger:1,twoFingers:4.5,normalFingers:1.5,fiveFingers:6},complexity:{baseSides:3,leftHandMultiplier:1,rightHandMultiplier:.5,maxSides:12,minSides:3},vibration:{flashDuration:.8,shakeAmountX:40,shakeAmountY:40},polygon:{baseSize:100,strokeWidth:2},layers:{count:5,sizeGrowth:.3,rotationOffset:.5,baseOpacity:.3,opacityFade:.05},bridge:{thickness:5,waveAmplitude:30},animation:{baseRotationMultiplier:.01}};class N0{constructor(e,t){U(this,"cfg",Sf);U(this,"canvas");U(this,"ctx");U(this,"time",0);U(this,"vibrationTimer",0);this.canvas=e,this.ctx=t}setParams(e){this.cfg=Ri(Sf,e)}render(e,t){var w,_,S,b;this.time+=.016*xn(),this.ctx.fillStyle=`rgba(0, 0, 0, ${this.cfg.trail.fadeAlpha})`,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&(this.ctx.fillStyle="#FFFFFFCC",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.vibrationTimer=this.cfg.vibration.flashDuration),this.vibrationTimer>0&&(this.vibrationTimer-=.016,i=Math.max(0,this.vibrationTimer));let s=1,o=this.cfg.complexity.baseSides,c=1;if(e.left&&e.left.gesture==="open"){const C=e.left.fingerCount||2;C===1?(s=this.cfg.fingerCountSpeed.oneFinger,c=this.cfg.fingerCountStrokeWidth.oneFinger):C===2?(s=this.cfg.fingerCountSpeed.normalFingers,c=this.cfg.fingerCountStrokeWidth.twoFingers):C===5?(s=this.cfg.fingerCountSpeed.fiveFingers,c=this.cfg.fingerCountStrokeWidth.fiveFingers):(s=this.cfg.fingerCountSpeed.normalFingers,c=this.cfg.fingerCountStrokeWidth.normalFingers),o=Math.floor(this.cfg.complexity.baseSides+C*this.cfg.complexity.leftHandMultiplier)}if(e.left&&e.left.gesture==="pinch"&&(s=this.cfg.fingerCountSpeed.oneFinger,c=this.cfg.fingerCountStrokeWidth.oneFinger,o=Math.floor(this.cfg.complexity.baseSides+1*this.cfg.complexity.leftHandMultiplier)),e.right&&e.right.gesture==="open"){const C=e.right.fingerCount||2;let E,L;C===1?(E=this.cfg.fingerCountSpeed.oneFinger,L=this.cfg.fingerCountStrokeWidth.oneFinger):C===2?(E=this.cfg.fingerCountSpeed.normalFingers,L=this.cfg.fingerCountStrokeWidth.twoFingers):C===5?(E=this.cfg.fingerCountSpeed.fiveFingers,L=this.cfg.fingerCountStrokeWidth.fiveFingers):(E=this.cfg.fingerCountSpeed.normalFingers,L=this.cfg.fingerCountStrokeWidth.normalFingers),s*=E,c=Math.max(c,L),o+=Math.floor(C*this.cfg.complexity.rightHandMultiplier)}e.right&&e.right.gesture==="pinch"&&(s*=this.cfg.fingerCountSpeed.oneFinger,c=Math.max(c,this.cfg.fingerCountStrokeWidth.oneFinger),o+=Math.floor(1*this.cfg.complexity.rightHandMultiplier));const u=this.time*s*this.cfg.animation.baseRotationMultiplier,h=i>0?(Math.random()-.5)*this.cfg.vibration.shakeAmountX*i:0,f=i>0?(Math.random()-.5)*this.cfg.vibration.shakeAmountY*i:0;this.drawGestureTrails(e,t);const p=(w=e.left)!=null&&w.position.x?e.left.position.x*this.canvas.width+h:this.canvas.width/2,g=(_=e.left)!=null&&_.position.y?e.left.position.y*this.canvas.height+f:this.canvas.height/2,m=(S=e.right)!=null&&S.position.x?e.right.position.x*this.canvas.width+h:this.canvas.width/2+100,y=(b=e.right)!=null&&b.position.y?e.right.position.y*this.canvas.height+f:this.canvas.height/2,v=this.cfg.polygon.baseSize*(1+i);for(let C=0;C<this.cfg.layers.count;C++){const E=v*(1+C*this.cfg.layers.sizeGrowth),L=u+C*this.cfg.layers.rotationOffset;e.left&&e.left.gesture==="open"&&this.drawPolygon(p,g,Math.max(this.cfg.complexity.minSides,Math.min(this.cfg.complexity.maxSides,o+C)),E+C*30,L,t[C%t.length],this.cfg.layers.baseOpacity-C*this.cfg.layers.opacityFade,c),e.right&&e.right.gesture==="open"&&this.drawPolygon(m,y,Math.max(this.cfg.complexity.minSides,Math.min(this.cfg.complexity.maxSides,o+C)),E+C*30,-L,t[(C+2)%t.length],this.cfg.layers.baseOpacity-C*this.cfg.layers.opacityFade,c)}e.left&&e.right&&e.left.gesture==="open"&&e.right.gesture==="open"&&this.drawBridge(p,g,m,y,t,v,o)}drawGestureTrails(e,t){if(!e.gestureTrail||e.gestureTrail.length<2)return;const i=e.gestureTrail;for(let s=1;s<i.length;s++){const o=i[s-1],c=i[s],u=s/i.length,h=c.hand==="left"?t[0]:t[2];this.ctx.strokeStyle=h+ri(u*100),this.ctx.lineWidth=this.cfg.trail.lineThickness*u,this.ctx.lineCap="round",this.ctx.beginPath(),this.ctx.moveTo(o.x*this.canvas.width,o.y*this.canvas.height),this.ctx.lineTo(c.x*this.canvas.width,c.y*this.canvas.height),this.ctx.stroke()}}drawPolygon(e,t,i,s,o,c,u,h){this.ctx.save(),this.ctx.translate(e,t),this.ctx.rotate(o),this.ctx.beginPath();for(let p=0;p<=i;p++){const g=p/i*Math.PI*2,m=Math.cos(g)*s,y=Math.sin(g)*s;p===0?this.ctx.moveTo(m,y):this.ctx.lineTo(m,y)}this.ctx.closePath();const f=this.ctx.createRadialGradient(0,0,0,0,0,s);f.addColorStop(0,c+ri(u*255)),f.addColorStop(1,c+"00"),this.ctx.fillStyle=f,this.ctx.fill(),this.ctx.strokeStyle=c+ri(u*200),this.ctx.lineWidth=this.cfg.polygon.strokeWidth*h,this.ctx.stroke(),this.ctx.restore()}drawBridge(e,t,i,s,o,c,u){const h=this.ctx.createLinearGradient(e,t,i,s);o.forEach((f,p)=>{h.addColorStop(p/(o.length-1),f+"80")}),this.ctx.strokeStyle=h,this.ctx.lineWidth=this.cfg.bridge.thickness,this.ctx.lineCap="round",this.ctx.beginPath();for(let f=0;f<=u;f++){const p=f/u,g=e+(i-e)*p,m=t+(s-t)*p,y=Math.sin(p*Math.PI*4+this.time*2)*this.cfg.bridge.waveAmplitude,v=-(s-t)/Math.hypot(i-e,s-t),w=(i-e)/Math.hypot(i-e,s-t);f===0?this.ctx.moveTo(g+v*y,m+w*y):this.ctx.lineTo(g+v*y,m+w*y)}this.ctx.stroke()}}const Mf={fingerCountSpeed:{oneFinger:.05,normalFingers:1,fiveFingers:1.5,maxSpeed:2},wave:{baseAmplitude:50,maxAmplitude:250,baseFrequency:.01,maxFrequency:.05,segments:200,lineThickness:3},fingerAmplitude:{oneFingerMultiplier:.1,twoFingersMultiplier:.6,threeFingersMultiplier:1.2,fourFingersMultiplier:2.5,fiveFingersMultiplier:4,normalFingersMultiplier:.3},gesture:{leftOpenHandBoost:3,rightOpenHandBoost:1.5,leftFistAmplitude:20,rightFistReduction:.5,pinchBaseFrequency:.005,pinchLeftMultiplier:.1,pinchRightMultiplier:.05,pinchLeftYOffsetMultiplier:-150,pinchRightYOffsetMultiplier:-150},velocity:{intensityMultiplier:2},hold:{durationThreshold:2,amplitudeBoost:2},distance:{scaleMultiplier:2},waveCount:{active:7,idle:3},layers:{primarySpeed:2,secondarySpeed:3,tertiarySpeed:1,secondaryAmplitude:.5,tertiaryAmplitude:.3},handInfluence:{strength:.5,radius:200},focalPoint:{baseSize:20,pulseSpeed:5,pulseAmount:.1,glowLayers:3},visual:{backgroundTint:"20",clapFlashOpacity:"30",fillOpacity:50}};class py{constructor(e,t){U(this,"cfg",Mf);U(this,"canvas");U(this,"ctx");U(this,"time",0);U(this,"bgGradient",null);U(this,"needsGradientUpdate",!0);this.canvas=e,this.ctx=t}setParams(e){this.cfg=Ri(Mf,e)}render(e,t){var v,w,_,S;this.time+=.016*xn(),this.time>1e3&&(this.time=this.time%1e3),this.needsGradientUpdate&&(this.bgGradient=this.ctx.createLinearGradient(0,0,0,this.canvas.height),this.bgGradient.addColorStop(0,"#000000"),this.bgGradient.addColorStop(1,t[0]+this.cfg.visual.backgroundTint),this.needsGradientUpdate=!1),this.ctx.fillStyle=this.bgGradient,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=this.cfg.wave.baseAmplitude,s=this.cfg.wave.baseFrequency,o=1,c=1,u=1,h=0;if(e.left){Math.max(0,Math.min(1,e.left.position.x||.5)),Math.max(0,Math.min(1,e.left.position.y||.5));const b=e.left.velocity||0,C=Math.max(0,Math.min(b,1));c*=1+C*this.cfg.velocity.intensityMultiplier;let E=e.left.fingerCount||0;e.left.gesture==="pinch"&&(E=1),E===1?(u=this.cfg.fingerCountSpeed.oneFinger,i*=this.cfg.fingerAmplitude.oneFingerMultiplier):E===2?(u=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.twoFingersMultiplier):E===3?(u=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.threeFingersMultiplier):E===4?(u=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.fourFingersMultiplier):E>=5&&(u=this.cfg.fingerCountSpeed.fiveFingers,i*=this.cfg.fingerAmplitude.fiveFingersMultiplier),(e.left.holdDuration||0)>this.cfg.hold.durationThreshold&&(i*=this.cfg.hold.amplitudeBoost),e.left.gesture==="open"?i*=this.cfg.gesture.leftOpenHandBoost*c:e.left.gesture==="fist"?i=this.cfg.gesture.leftFistAmplitude:e.left.gesture==="pinch"&&(s=this.cfg.gesture.pinchBaseFrequency+(e.left.pinchDistance||0)*this.cfg.gesture.pinchLeftMultiplier,h=(e.left.pinchDistance||0)*this.cfg.gesture.pinchLeftYOffsetMultiplier)}if(e.right){Math.max(0,Math.min(1,e.right.position.x||.5)),Math.max(0,Math.min(1,e.right.position.y||.5));const b=e.right.velocity||0,C=Math.max(0,Math.min(b,1));c*=1+C*this.cfg.velocity.intensityMultiplier;let E=e.right.fingerCount||0;e.right.gesture==="pinch"&&(E=1);let L=1;E===1?(L=this.cfg.fingerCountSpeed.oneFinger,i*=this.cfg.fingerAmplitude.oneFingerMultiplier):E===2?(L=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.twoFingersMultiplier):E===3?(L=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.threeFingersMultiplier):E===4?(L=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.fourFingersMultiplier):E>=5&&(L=this.cfg.fingerCountSpeed.fiveFingers,i*=this.cfg.fingerAmplitude.fiveFingersMultiplier),u*=L,(e.right.holdDuration||0)>this.cfg.hold.durationThreshold&&(i*=this.cfg.hold.amplitudeBoost),e.right.gesture==="open"?i*=this.cfg.gesture.rightOpenHandBoost*c:e.right.gesture==="fist"?i*=this.cfg.gesture.rightFistReduction:e.right.gesture==="pinch"&&(s+=(e.right.pinchDistance||0)*this.cfg.gesture.pinchRightMultiplier,h=(e.right.pinchDistance||0)*this.cfg.gesture.pinchRightYOffsetMultiplier)}c=Math.min(c,3),u=Math.min(u,this.cfg.fingerCountSpeed.maxSpeed),i=Math.min(i,this.cfg.wave.maxAmplitude),s=Math.min(s,this.cfg.wave.maxFrequency),isFinite(i)||(i=this.cfg.wave.baseAmplitude),isFinite(s)||(s=this.cfg.wave.baseFrequency),isFinite(u)||(u=1),e.distanceBetweenHands&&(o=.5+e.distanceBetweenHands*this.cfg.distance.scaleMultiplier);const f=e.left||e.right?this.cfg.waveCount.active:this.cfg.waveCount.idle,p=((v=e.left)==null?void 0:v.fingerCount)||0,g=((w=e.right)==null?void 0:w.fingerCount)||0,m=Math.max(p,g);let y=1;m>=4&&(y=.6);for(let b=0;b<f;b++){const C=this.canvas.height/(f+1)*(b+1)+h,E=b/f*Math.PI*2,L=((_=e.left)==null?void 0:_.position.x)??0,A=((S=e.right)==null?void 0:S.position.x)??1,I=Math.max(0,Math.min(1,L))*this.canvas.width,T=Math.max(0,Math.min(1,A))*this.canvas.width;this.drawWave(C,i*o,s,this.time*u+E,t[b%t.length],I,T,b/f,y)}if(e.left){const b=Math.max(0,Math.min(1,e.left.position.x||.5)),C=Math.max(0,Math.min(1,e.left.position.y||.5));this.drawFocalPoint(b*this.canvas.width,C*this.canvas.height,t[0],o,i)}if(e.right){const b=Math.max(0,Math.min(1,e.right.position.x||.5)),C=Math.max(0,Math.min(1,e.right.position.y||.5));this.drawFocalPoint(b*this.canvas.width,C*this.canvas.height,t[2%t.length],o,i)}}drawWave(e,t,i,s,o,c,u,h,f){this.ctx.beginPath();const p=Math.floor(this.cfg.wave.segments*f);t=Math.min(t,150);for(let v=0;v<=p;v++){const w=v/p*this.canvas.width,_=Math.sin(w*i+s*this.cfg.layers.primarySpeed)*t,S=Math.sin(w*i*2+s*this.cfg.layers.secondarySpeed)*(t*this.cfg.layers.secondaryAmplitude),b=Math.sin(w*i*.5+s*this.cfg.layers.tertiarySpeed)*(t*this.cfg.layers.tertiaryAmplitude);let C=0;const E=Math.abs(w-c),L=Math.abs(w-u),A=-E/this.cfg.handInfluence.radius,I=-L/this.cfg.handInfluence.radius;A>-10&&(C+=t*this.cfg.handInfluence.strength*Math.exp(A)),I>-10&&(C+=t*this.cfg.handInfluence.strength*Math.exp(I)),C=Math.min(C,80);let T=e+_+S+b+C;T=Math.max(-50,Math.min(this.canvas.height+50,T)),isFinite(T)&&(v===0?this.ctx.moveTo(w,T):this.ctx.lineTo(w,T))}const g=Math.max(0,Math.min(1,h)),m=this.ctx.createLinearGradient(0,0,this.canvas.width,0);m.addColorStop(0,o+ri(g*100)),m.addColorStop(.5,o+ri(g*255)),m.addColorStop(1,o+ri(g*100)),this.ctx.strokeStyle=m,this.ctx.lineWidth=this.cfg.wave.lineThickness,this.ctx.stroke(),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.closePath();const y=this.ctx.createLinearGradient(0,e,0,this.canvas.height);y.addColorStop(0,o+ri(g*this.cfg.visual.fillOpacity)),y.addColorStop(1,o+"00"),this.ctx.fillStyle=y,this.ctx.fill()}drawFocalPoint(e,t,i,s,o){const c=this.cfg.focalPoint.baseSize*s+Math.sin(this.time*this.cfg.focalPoint.pulseSpeed)*o*this.cfg.focalPoint.pulseAmount,u=Math.max(.1,c);for(let h=0;h<this.cfg.focalPoint.glowLayers;h++){const f=this.ctx.createRadialGradient(e,t,0,e,t,u*(h+1));f.addColorStop(0,i+"AA"),f.addColorStop(1,i+"00"),this.ctx.fillStyle=f,this.ctx.beginPath(),this.ctx.arc(e,t,u*(h+1),0,Math.PI*2),this.ctx.fill()}}}class my{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"time",0);U(this,"nodes",[]);U(this,"glitchBlocks",[]);U(this,"pixelSize",20);U(this,"vibrationTimer",0);U(this,"glitchIntensity",0);U(this,"isExploding",!1);this.canvas=e,this.ctx=t;const i=40;for(let s=0;s<i;s++){const o=Math.random()*e.width,c=Math.random()*e.height,u={x:o,y:c,targetX:o,targetY:c,vx:0,vy:0,size:4+Math.random()*8,connections:[],waveform:Array.from({length:50},()=>Math.random()*2-1),attractedToHand:null};this.nodes.push(u)}this.updateConnections()}updateConnections(){this.nodes.forEach(e=>e.connections=[]),this.nodes.forEach((e,t)=>{this.nodes.forEach((i,s)=>{t!==s&&Math.hypot(e.x-i.x,e.y-i.y)<200&&e.connections.length<4&&e.connections.push(s)})})}render(e,t){this.time+=.016*xn(),this.ctx.fillStyle="rgba(0, 0, 0, 0.1)",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&!this.isExploding&&(this.vibrationTimer=1,this.glitchIntensity=1,this.createGlitchExplosion(t),this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.016,i=Math.max(0,this.vibrationTimer)),this.glitchIntensity>0&&(this.glitchIntensity-=.01);let s=1,o=!1,c=0,u=0,h=0,f=0,p=!1,g=!1,m=2,y=2;if(e.left&&e.left.gesture==="open"){o=!0,p=!0;const v=e.left.fingerCount||2;m=v,v===1?s=.01:v===5?s=2:s=1,c=e.left.position.x*this.canvas.width,u=e.left.position.y*this.canvas.height}if(e.left&&e.left.gesture==="pinch"&&(o=!0,p=!0,m=1,s=.01,c=e.left.position.x*this.canvas.width,u=e.left.position.y*this.canvas.height),e.right&&e.right.gesture==="open"){o=!0,g=!0;const v=e.right.fingerCount||2;y=v;let w;v===1?w=.01:v===5?w=2:w=1,s*=w,h=e.right.position.x*this.canvas.width,f=e.right.position.y*this.canvas.height}e.right&&e.right.gesture==="pinch"&&(o=!0,g=!0,y=1,s*=.01,h=e.right.position.x*this.canvas.width,f=e.right.position.y*this.canvas.height),this.nodes.forEach((v,w)=>{if(o){if(p&&g){const b=Math.hypot(v.x-c,v.y-u),C=Math.hypot(v.x-h,v.y-f);b<C?(v.attractedToHand="left",v.targetX=c+Math.cos(w*.5+this.time*s)*100,v.targetY=u+Math.sin(w*.5+this.time*s)*100):(v.attractedToHand="right",v.targetX=h+Math.cos(w*.5+this.time*s)*100,v.targetY=f+Math.sin(w*.5+this.time*s)*100)}else if(p){v.attractedToHand="left";const b=w/this.nodes.length*Math.PI*2+this.time*s,C=50+w%3*60;v.targetX=c+Math.cos(b)*C,v.targetY=u+Math.sin(b)*C}else if(g){v.attractedToHand="right";const b=w/this.nodes.length*Math.PI*2+this.time*s,C=50+w%3*60;v.targetX=h+Math.cos(b)*C,v.targetY=f+Math.sin(b)*C}const _=v.targetX-v.x,S=v.targetY-v.y;v.vx+=_*.05*s,v.vy+=S*.05*s}else{v.targetX+=(Math.random()-.5)*2,v.targetY+=(Math.random()-.5)*2;const _=v.targetX-v.x,S=v.targetY-v.y;v.vx+=_*.01,v.vy+=S*.01}i>0&&(v.vx+=(Math.random()-.5)*i*40,v.vy+=(Math.random()-.5)*i*40),v.vx*=.85,v.vy*=.85,v.x+=v.vx,v.y+=v.vy,v.x<0&&(v.x=this.canvas.width),v.x>this.canvas.width&&(v.x=0),v.y<0&&(v.y=this.canvas.height),v.y>this.canvas.height&&(v.y=0),v.waveform.shift(),v.waveform.push(Math.sin(this.time*s*2+v.x*.01)*(o?2:.5))}),this.time%.5<.016&&this.updateConnections(),this.drawNodeConnections(t,i,p,g,c,u,h,f),this.drawNodes(t,i),this.drawWaveforms(t,s),this.drawHandIndicators(e,t,m,y),this.drawGlitchBlocks(t),this.glitchIntensity>.3&&this.drawScreenGlitch(),o&&Math.random()<.03*s&&this.spawnGlitchBlock(t)}drawNodeConnections(e,t,i,s,o,c,u,h){this.nodes.forEach((f,p)=>{if(f.attractedToHand==="left"&&i){this.ctx.beginPath(),this.ctx.moveTo(f.x,f.y),this.ctx.lineTo(o,c);const g=this.ctx.createLinearGradient(f.x,f.y,o,c);g.addColorStop(0,e[0]+"80"),g.addColorStop(1,e[1]+"FF"),this.ctx.strokeStyle=g,this.ctx.lineWidth=2+t*3,this.ctx.stroke()}if(f.attractedToHand==="right"&&s){this.ctx.beginPath(),this.ctx.moveTo(f.x,f.y),this.ctx.lineTo(u,h);const g=this.ctx.createLinearGradient(f.x,f.y,u,h);g.addColorStop(0,e[2]+"80"),g.addColorStop(1,e[3]+"FF"),this.ctx.strokeStyle=g,this.ctx.lineWidth=2+t*3,this.ctx.stroke()}f.connections.forEach(g=>{const m=this.nodes[g];if(!m)return;this.ctx.beginPath(),this.ctx.moveTo(f.x,f.y),this.ctx.lineTo(m.x,m.y);const y=Math.floor(p/this.nodes.length*e.length);this.ctx.strokeStyle=e[y]+"40",this.ctx.lineWidth=1+t*2,this.ctx.stroke()})})}drawNodes(e,t){this.nodes.forEach((i,s)=>{const o=Math.floor(s/this.nodes.length*e.length),c=i.size*(1+t*.5),u=this.ctx.createRadialGradient(i.x,i.y,0,i.x,i.y,c);u.addColorStop(0,e[o]+"FF"),u.addColorStop(.5,e[(o+1)%e.length]+"AA"),u.addColorStop(1,e[o]+"00"),this.ctx.fillStyle=u,this.ctx.beginPath(),this.ctx.arc(i.x,i.y,c,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="#FFFFFF80",this.ctx.beginPath(),this.ctx.arc(i.x,i.y,c*.3,0,Math.PI*2),this.ctx.fill()})}drawWaveforms(e,t){this.nodes.forEach((i,s)=>{const o=Math.floor(s/this.nodes.length*e.length);this.ctx.beginPath(),this.ctx.strokeStyle=e[o]+"60",this.ctx.lineWidth=2;for(let c=0;c<i.waveform.length-1;c++){const u=i.x+c-i.waveform.length/2,h=i.y+i.waveform[c]*20;c===0?this.ctx.moveTo(u,h):this.ctx.lineTo(u,h)}this.ctx.stroke()})}drawHandIndicators(e,t,i,s){if(e.left&&e.left.gesture==="open"){const o=e.left.position.x*this.canvas.width,c=e.left.position.y*this.canvas.height,u=30+Math.sin(this.time*3)*10;this.ctx.strokeStyle=t[0]+"AA",this.ctx.lineWidth=3,this.ctx.beginPath(),this.ctx.arc(o,c,u,0,Math.PI*2),this.ctx.stroke(),this.ctx.fillStyle=t[0],this.ctx.font="20px monospace",this.ctx.fillText(`${i}`,o-10,c+5)}if(e.right&&e.right.gesture==="open"){const o=e.right.position.x*this.canvas.width,c=e.right.position.y*this.canvas.height,u=30+Math.sin(this.time*3)*10;this.ctx.strokeStyle=t[2]+"AA",this.ctx.lineWidth=3,this.ctx.beginPath(),this.ctx.arc(o,c,u,0,Math.PI*2),this.ctx.stroke(),this.ctx.fillStyle=t[2],this.ctx.font="20px monospace",this.ctx.fillText(`${s}`,o-10,c+5)}}drawGlitchBlocks(e){this.glitchBlocks=this.glitchBlocks.filter(t=>(t.life-=.016,t.life>0?(this.ctx.fillStyle=t.color+ri(t.life*255),this.ctx.fillRect(t.x,t.y,t.width,t.height),!0):!1))}spawnGlitchBlock(e){this.glitchBlocks.push({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height,width:20+Math.random()*100,height:10+Math.random()*50,color:e[Math.floor(Math.random()*e.length)],life:.5+Math.random()*.5})}createGlitchExplosion(e){for(let t=0;t<50;t++)this.spawnGlitchBlock(e);this.ctx.fillStyle="#FFFFFF60",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.nodes.forEach(t=>{t.vx=(Math.random()-.5)*50,t.vy=(Math.random()-.5)*50})}drawScreenGlitch(){const e=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height),t=Math.floor(Math.random()*20)-10;this.ctx.putImageData(e,t,0);for(let i=0;i<5;i++){const s=Math.random()*this.canvas.height,o=5+Math.random()*20,c=this.ctx.getImageData(0,s,this.canvas.width,o),u=(Math.random()-.5)*100;this.ctx.putImageData(c,u,s)}}}class gy{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"fragments",[]);U(this,"hearts",[]);U(this,"glitchIntensity",0);U(this,"lastHandsTouching",!1);U(this,"handsTouchingTime",0);U(this,"gracePeriod",0);this.canvas=e,this.ctx=t}render(e,t){this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);const i=this.checkHandsTouching(e);i?(this.handsTouchingTime+=1,this.gracePeriod=30,this.spawnHearts(e)):this.gracePeriod>0?(this.gracePeriod-=1,this.handsTouchingTime+=1):this.handsTouchingTime=0,this.lastHandsTouching=i,this.updateHearts(),this.renderHearts(),this.glitchIntensity*=.95,e.left&&e.left.landmarks&&this.renderHandFromLandmarks(e.left.landmarks,"left"),e.right&&e.right.landmarks&&this.renderHandFromLandmarks(e.right.landmarks,"right"),this.applyNoiseOverlay(),(this.glitchIntensity>.1||Math.random()<.05)&&this.applyGlitchEffect()}renderHandFromLandmarks(e,t){const s=this.canvas.width/2,o=this.canvas.height/2,c=e.map(p=>({x:s+(p.x*this.canvas.width-s)*1.8,y:o+(p.y*this.canvas.height-o)*1.8,z:p.z})),u=c[0],h=180*1.8,f={x:u.x,y:u.y+h,z:u.z};this.fillHandWithDots(c,u,f),this.drawHandSkeleton(c),this.drawTechnicalMarkers(u.x,u.y)}fillHandWithDots(e,t,i){const c=e.map(m=>m.x),u=e.map(m=>m.y),h=Math.min(...c,i.x)-50,f=Math.max(...c,i.x)+50,p=Math.min(...u)-50,g=Math.max(...u,i.y)+50;for(let m=p;m<g;m+=7)for(let y=h;y<f;y+=7){const v=this.getDistanceToHandSkeleton(y,m,e,t,i);if(v.inside){const S=1-v.distance/45,b=Math.pow(S,1.5),C=v.zDepth,E=b*(.7+C*.3);if(E<.15)continue;const L=Math.floor(E*255),A=Math.max(.3,Math.min(1,E*1.2)),I=(Math.random()-.5)*8*this.glitchIntensity,T=(Math.random()-.5)*8*this.glitchIntensity,F=.8+Math.random()*.2;this.ctx.fillStyle=`rgba(${L}, ${L}, ${L}, ${A*F})`,this.ctx.beginPath(),this.ctx.arc(y+I,m+T,1.5,0,Math.PI*2),this.ctx.fill(),E>.8&&Math.random()<.15&&(this.ctx.fillStyle=`rgba(255, 255, 255, ${A*1.3})`,this.ctx.beginPath(),this.ctx.arc(y+I,m+T,1.5*1.2,0,Math.PI*2),this.ctx.fill())}}}getDistanceToHandSkeleton(e,t,i,s,o){const c=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[0,9],[9,10],[10,11],[11,12],[0,13],[13,14],[14,15],[15,16],[0,17],[17,18],[18,19],[19,20],[5,9],[9,13],[13,17]];let u=1/0,h=0;for(const[m,y]of c){const v=i[m],w=i[y],_=this.distanceToSegment(e,t,v.x,v.y,w.x,w.y);u=Math.min(u,_),h=(v.z+w.z)/2}const f=this.distanceToSegment(e,t,s.x,s.y,o.x,o.y);return u=Math.min(u,f),h=(s.z+o.z)/2,{inside:u<45,distance:u,zDepth:h}}distanceToSegment(e,t,i,s,o,c){const u=o-i,h=c-s,f=u*u+h*h;if(f===0)return Math.sqrt((e-i)*(e-i)+(t-s)*(t-s));let p=((e-i)*u+(t-s)*h)/f;p=Math.max(0,Math.min(1,p));const g=i+p*u,m=s+p*h;return Math.sqrt((e-g)*(e-g)+(t-m)*(t-m))}drawHandSkeleton(e){this.ctx.strokeStyle="rgba(255, 255, 255, 0.3)",this.ctx.lineWidth=1,this.ctx.setLineDash([4,4]);const t=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[0,9],[9,10],[10,11],[11,12],[0,13],[13,14],[14,15],[15,16],[0,17],[17,18],[18,19],[19,20],[5,9],[9,13],[13,17],[17,5]];this.ctx.beginPath();for(const[i,s]of t){const o=e[i],c=e[s],u=(Math.random()-.5)*5*this.glitchIntensity,h=(Math.random()-.5)*5*this.glitchIntensity,f=(Math.random()-.5)*5*this.glitchIntensity,p=(Math.random()-.5)*5*this.glitchIntensity;this.ctx.moveTo(o.x+u,o.y+h),this.ctx.lineTo(c.x+f,c.y+p)}this.ctx.stroke(),this.ctx.setLineDash([]),this.ctx.fillStyle="rgba(255, 255, 255, 0.7)",e.forEach(i=>{this.ctx.beginPath(),this.ctx.arc(i.x,i.y,2,0,Math.PI*2),this.ctx.fill()})}drawTechnicalMarkers(e,t){this.ctx.strokeStyle="rgba(255, 255, 255, 0.5)",this.ctx.lineWidth=1;const i=15,s=80;[[e-s,t-s],[e+s,t-s],[e-s,t+s],[e+s,t+s]].forEach(([u,h])=>{this.ctx.beginPath(),this.ctx.moveTo(u,h),this.ctx.lineTo(u+(u<e?i:-i),h),this.ctx.moveTo(u,h),this.ctx.lineTo(u,h+(h<t?i:-i)),this.ctx.stroke()}),this.ctx.strokeStyle="rgba(255, 255, 255, 0.7)",this.ctx.lineWidth=1.5,this.ctx.beginPath(),this.ctx.moveTo(e-12,t),this.ctx.lineTo(e+12,t),this.ctx.moveTo(e,t-12),this.ctx.lineTo(e,t+12),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.arc(e,t,3,0,Math.PI*2),this.ctx.stroke(),this.ctx.fillStyle="rgba(255, 255, 255, 0.8)",this.ctx.font="11px monospace";const c=`[${Math.floor(e)},${Math.floor(t)}]`;this.ctx.fillText(c,e+s+15,t),this.ctx.fillStyle="rgba(255, 255, 255, 0.6)",this.ctx.font="9px monospace",this.ctx.fillText("TRACKING",e+s+15,t+15)}applyNoiseOverlay(){const e=.03+this.glitchIntensity*.04,t=2,i=.15;for(let s=0;s<this.canvas.width;s+=t*2)for(let o=0;o<this.canvas.height;o+=t*2)if(Math.random()<i){const c=Math.floor(Math.random()*255),u=Math.random()*e;this.ctx.fillStyle=`rgba(${c}, ${c}, ${c}, ${u})`,this.ctx.fillRect(s,o,t,t)}}applyGlitchEffect(){const e=Math.max(this.glitchIntensity,Math.random()*.3),t=15+Math.random()*15,i=Math.floor(this.canvas.height/t);for(let s=0;s<i;s++)if(Math.random()<e*.3){const o=s*t,c=(Math.random()-.5)*60*e;try{const u=this.ctx.getImageData(0,o,this.canvas.width,Math.min(t,this.canvas.height-o));this.ctx.putImageData(u,c,o)}catch{}}if(Math.random()<e*.5)for(let s=0;s<8;s++){const o=Math.random()*this.canvas.width,c=Math.random()*this.canvas.height,u=Math.random()*40+10,h=Math.random()*15+5;this.ctx.fillStyle="rgba(255, 255, 255, 0.3)",this.ctx.fillRect(o,c,u,h)}}checkHandsTouching(e){if(!e.left||!e.right||!e.left.landmarks||!e.right.landmarks)return!1;const t=[e.left.landmarks[0],e.left.landmarks[8],e.left.landmarks[12],e.left.landmarks[4]],i=[e.right.landmarks[0],e.right.landmarks[8],e.right.landmarks[12],e.right.landmarks[4]];for(const s of t)for(const o of i){const c=Math.sqrt(Math.pow(s.x-o.x,2)+Math.pow(s.y-o.y,2));if(c<.08)return console.log("✋ Hands touching! Distance:",c.toFixed(3)),!0}return!1}spawnHearts(e){if(!(Math.random()>.8)){console.log("Spawning hearts! Current count:",this.hearts.length);for(let t=0;t<3;t++){let s=!1;for(let o=0;o<20&&!s;o++){const c=Math.random()*this.canvas.width,u=Math.random()*this.canvas.height,h=20+Math.random()*30,f=h*1.5;let p=!1;for(const g of this.hearts){const m=c-g.x,y=u-g.y;if(Math.sqrt(m*m+y*y)<f+g.size*.75){p=!0;break}}p||(this.hearts.push({x:c,y:u,vx:0,vy:0,size:h,life:1,rotation:0,rotationSpeed:0}),s=!0,console.log("Heart placed at:",c,u,"size:",h))}}}}updateHearts(){this.hearts=this.hearts.filter(e=>(e.life-=.008,e.life>0))}renderHearts(){const e=Ko();this.hearts.forEach(t=>{this.ctx.save(),this.ctx.translate(t.x,t.y);const s=e*2.5%1;let o=1;s<.15?o=1+Math.sin(s/.15*Math.PI)*.2:s>=.2&&s<.3?o=1+Math.sin((s-.2)/.1*Math.PI)*.15:o=1,this.ctx.scale(o,o);const c=Math.max(2,t.size/8),u=t.life*.9,h=[[0,1,1,0,0,1,1,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,0],[0,0,1,1,1,1,0,0],[0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0]],f=-4*c,p=-4*c;for(let g=0;g<8;g++)for(let m=0;m<8;m++)h[g][m]===1&&(this.ctx.fillStyle=`rgba(255, 255, 255, ${u})`,this.ctx.fillRect(f+m*c,p+g*c,c,c),this.ctx.strokeStyle=`rgba(255, 255, 255, ${u*.3})`,this.ctx.lineWidth=.5,this.ctx.strokeRect(f+m*c,p+g*c,c,c));this.ctx.restore()})}}class xy{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"rectangles",[]);U(this,"baseWidth",1920);U(this,"baseHeight",1080);U(this,"time",0);U(this,"gridStructure",[]);this.canvas=e,this.ctx=t,this.createVariedLayout()}createVariedLayout(){[{x:0,y:0,w:480,h:360},{x:480,y:0,w:320,h:180},{x:800,y:0,w:320,h:180},{x:1120,y:0,w:400,h:180},{x:1520,y:0,w:400,h:180},{x:480,y:180,w:240,h:180},{x:720,y:180,w:240,h:180},{x:960,y:180,w:160,h:180},{x:1120,y:180,w:240,h:180},{x:1360,y:180,w:280,h:180},{x:1640,y:180,w:280,h:180},{x:0,y:360,w:120,h:360},{x:120,y:360,w:120,h:360},{x:240,y:360,w:120,h:360},{x:360,y:360,w:120,h:360},{x:480,y:360,w:320,h:360},{x:800,y:360,w:320,h:360},{x:1120,y:360,w:200,h:180},{x:1320,y:360,w:200,h:180},{x:1520,y:360,w:200,h:180},{x:1720,y:360,w:200,h:180},{x:1120,y:540,w:160,h:180},{x:1280,y:540,w:160,h:180},{x:1440,y:540,w:240,h:180},{x:1680,y:540,w:240,h:180},{x:0,y:720,w:160,h:360},{x:160,y:720,w:160,h:360},{x:320,y:720,w:160,h:360},{x:480,y:720,w:240,h:360},{x:720,y:720,w:240,h:360},{x:960,y:720,w:160,h:360},{x:1120,y:720,w:400,h:360},{x:1520,y:720,w:400,h:360}].forEach((t,i)=>{let s;const o=i%3;o===0?s="vertical":o===1?s="horizontal":s="vertical-reverse",this.rectangles.push({id:i,baseX:t.x,baseY:t.y,baseW:t.w,baseH:t.h,currentX:t.x,currentY:t.y,currentW:t.w,currentH:t.h,gradientDirection:s,rotation:0,borderRadius:0,opacity:1}),this.gridStructure.push({x:t.x,y:t.y,w:t.w,h:t.h,targetW:t.w,targetH:t.h})})}render(e,t,i,s){this.time+=.016*xn();const o=s==="contrast",c=s==="grayscale";let u=t[0]||"#1a00ff",h=t[1]||"#8b5cf6",f=t[2]||"#d9d9d9";if(c&&(u="#333333",h="#888888",f="#ffffff"),o)this.ctx.fillStyle="#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);else{const E=this.ctx.createLinearGradient(0,0,0,this.canvas.height);c?(E.addColorStop(0,"#ffffff"),E.addColorStop(1,"#cccccc")):(E.addColorStop(0,f),E.addColorStop(1,u)),this.ctx.fillStyle=E,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}let p=.1,g="idle",m=0,y=1;const v=i?i.bass:0;i&&i.mid;const w=i?i.high:0,_=i?i.beat:!1;if(e.left||e.right){const E=[];e.left&&E.push(e.left),e.right&&E.push(e.right);let L=0,A=!1;E.forEach(I=>{I.gesture==="pinch"&&(A=!0);const T=I.fingerCount!==void 0?I.fingerCount:5;L=Math.max(L,T)}),A&&(L=0),A?(g="pinch",p=.05,m=20):L<=2?(g="2fingers",p=.2,m=20):L<=4?(g="morph",p=.1,m=100):(g="chaos",p=.4,m=0),this.rectangles.forEach((I,T)=>{this.gridStructure[T].targetW=I.baseW,this.gridStructure[T].targetH=I.baseH}),E.forEach(I=>{var z,D;const T=(((z=I.position)==null?void 0:z.x)||.5)*this.baseWidth,F=(((D=I.position)==null?void 0:D.y)||.5)*this.baseHeight;this.rectangles.forEach((H,te)=>{const se=H.baseX+H.baseW/2,W=H.baseY+H.baseH/2,V=T-se,X=F-W,j=Math.sqrt(V*V+X*X);if(g==="pinch"){const Q=1+Math.sin(j*.05-this.time*5)*.2*(1-Math.min(j/800,1));this.gridStructure[te].targetW=H.baseW*Q,this.gridStructure[te].targetH=H.baseH*Q}else if(g==="2fingers"){const Q=1+Math.sin(j*.05-this.time*5)*.2*(1-Math.min(j/800,1));this.gridStructure[te].targetW=H.baseW*Q,this.gridStructure[te].targetH=H.baseH*Q}else if(g==="morph"){if(j<500){const ie=(1-j/500)*.5;this.gridStructure[te].targetW=H.baseW*(1+ie),this.gridStructure[te].targetH=H.baseH*(1+ie)}}else if(g==="chaos"&&j<600){const ie=Math.random()*.5;this.gridStructure[te].targetW=H.baseW*(.8+ie),this.gridStructure[te].targetH=H.baseH*(.8+ie)}})})}else this.rectangles.forEach((E,L)=>{this.gridStructure[L].targetW=E.baseW,this.gridStructure[L].targetH=E.baseH}),i&&_&&(m=10);i&&(this.gridStructure.forEach(E=>{E.targetW*=1+v*.2,E.targetH*=1+v*.2}),g==="chaos"&&(y=.5+w*.5)),this.gridStructure.forEach((E,L)=>{E.w+=(E.targetW-E.w)*p,E.h+=(E.targetH-E.h)*p}),this.normalizeGridPerfectly(),this.rectangles.forEach((E,L)=>{E.currentX=this.gridStructure[L].x,E.currentY=this.gridStructure[L].y,E.currentW=this.gridStructure[L].w,E.currentH=this.gridStructure[L].h,E.borderRadius+=(m-E.borderRadius)*.1,g==="chaos"?E.rotation+=Math.random()*.2-.1:E.rotation+=(0-E.rotation)*.1,E.opacity+=(y-E.opacity)*.1});const S=this.canvas.width/this.baseWidth,b=this.canvas.height/this.baseHeight,C=[u,h,f];this.rectangles.forEach((E,L)=>{this.drawRectangle(E,S,b,C,o,L,i)})}normalizeGridPerfectly(){const e=new Map;this.rectangles.forEach((c,u)=>{const h=Math.round(c.baseY/10)*10;e.has(h)||e.set(h,[]),e.get(h).push(u)});const t=Array.from(e.entries()).sort((c,u)=>c[0]-u[0]).map(c=>c[1]);t.forEach(c=>{c.sort((p,g)=>this.rectangles[p].baseX-this.rectangles[g].baseX);const u=c.reduce((p,g)=>p+this.gridStructure[g].w,0),h=this.baseWidth/u;let f=0;c.forEach(p=>{this.gridStructure[p].w*=h,this.gridStructure[p].x=f,f+=this.gridStructure[p].w})});let i=0;t.forEach(c=>{const u=Math.max(...c.map(h=>this.gridStructure[h].h));c.forEach(h=>{this.gridStructure[h].y=i,this.gridStructure[h].h=u}),i+=u});const s=i,o=this.baseHeight/s;i=0,t.forEach(c=>{const u=this.gridStructure[c[0]].h*o;c.forEach(h=>{this.gridStructure[h].y=i,this.gridStructure[h].h=u}),i+=u})}drawRectangle(e,t,i,s,o,c,u){this.ctx.save();const h=e.currentX*t,f=e.currentY*i,p=e.currentW*t,g=e.currentH*i;if(Math.abs(e.rotation)>.01){const C=h+p/2,E=f+g/2;this.ctx.translate(C,E),this.ctx.rotate(e.rotation),this.ctx.translate(-C,-E)}this.ctx.globalAlpha=e.opacity;let m;const y=s[0],v=s[1],w=s[2],_=o||c%2===0?y:v,S=o?"#000000":w,b=u!=null&&u.beat&&Math.random()>.7?"#FFFFFF":null;e.gradientDirection==="vertical"?(m=this.ctx.createLinearGradient(h,f,h,f+g),m.addColorStop(0,b||S),m.addColorStop(1,_)):e.gradientDirection==="vertical-reverse"?(m=this.ctx.createLinearGradient(h,f,h,f+g),m.addColorStop(0,_),m.addColorStop(1,b||S)):(m=this.ctx.createLinearGradient(h,f,h+p,f),m.addColorStop(0,b||S),m.addColorStop(1,_)),this.ctx.fillStyle=m,e.borderRadius>0?(this.ctx.beginPath(),this.ctx.roundRect(h,f,p,g,e.borderRadius),this.ctx.fill()):this.ctx.fillRect(h,f,p,g),this.ctx.restore()}}class vy{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"glowObjects",[]);U(this,"time",0);U(this,"vibrationTimer",0);U(this,"glitchIntensity",0);U(this,"isExploding",!1);this.canvas=e,this.ctx=t}render(e,t){if(this.canvas.width===0||this.canvas.height===0)return;this.ctx.fillStyle="rgba(0, 0, 0, 0.02)",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&!this.isExploding&&(this.createExplosion(),this.vibrationTimer=1,this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.016,i=Math.max(0,this.vibrationTimer));let s=null,o=null,c=2,u=!1;if(e.left&&e.left.landmarks){let f=this.countFingers(e.left.landmarks,"left");e.left.gesture==="pinch"&&(f=1),f>=1&&(u=!0,s=e.left.position.x*this.canvas.width,o=e.left.position.y*this.canvas.height,c=f)}if(e.right&&e.right.landmarks){let f=this.countFingers(e.right.landmarks,"right");if(e.right.gesture==="pinch"&&(f=1),f>=1){u=!0;const p=e.right.position.x*this.canvas.width,g=e.right.position.y*this.canvas.height;s!==null?(s=(s+p)/2,o=((o||0)+g)/2,c=Math.max(c,f)):(s=p,o=g,c=f)}}if(u&&s!==null&&o!==null){this.time+=1*xn();let f=4,p=100,g=2,m=60;if(c===1?(f=8,p=60,g=1,m=30):c===2?(f=5,p=100,g=2,m=60):c===3||c===4?(f=4,p=130,g=2,m=80):c>=5&&(f=2,p=180,g=3,m=120),this.time>=f){this.time=0;for(let y=0;y<g;y++)this.glowObjects.push({x:s+(Math.random()-.5)*m,y:o+(Math.random()-.5)*m,size:p+Math.random()*(p*.4),vx:(Math.random()-.5)*1.5,vy:(Math.random()-.5)*1.5-.5,life:1,hue:Math.random()*360,decay:.002+c/10*.002})}}const h=xn();this.glowObjects=this.glowObjects.filter(f=>(f.x+=f.vx*h,f.y+=f.vy*h,f.vx*=Math.pow(.99,h),f.vy*=Math.pow(.99,h),f.life-=f.decay*h,i>0&&(f.x+=(Math.random()-.5)*i*10,f.y+=(Math.random()-.5)*i*10),f.life>0)),this.glowObjects.length>120&&(this.glowObjects=this.glowObjects.slice(-120)),this.glowObjects.forEach(f=>{this.renderChromaticShape(f,i,t)}),this.applyNoiseOverlay(),this.glitchIntensity>.1&&this.applyGlitchEffect()}renderChromaticShape(e,t,i){const s=8+t*20;e.life*.4,this.ctx.globalCompositeOperation="screen";const o=this.ctx.createRadialGradient(e.x-s,e.y,0,e.x-s,e.y,e.size*1.2);o.addColorStop(0,i[0]+"FF"),o.addColorStop(.3,i[0]+"99"),o.addColorStop(.6,i[0]+"44"),o.addColorStop(1,"transparent"),this.ctx.fillStyle=o,this.ctx.beginPath(),this.ctx.arc(e.x-s,e.y,e.size*1.2,0,Math.PI*2),this.ctx.fill();const c=this.ctx.createRadialGradient(e.x,e.y,0,e.x,e.y,e.size*1.2);c.addColorStop(0,i[1]+"FF"),c.addColorStop(.3,i[1]+"BB"),c.addColorStop(.6,i[1]+"66"),c.addColorStop(1,"transparent"),this.ctx.fillStyle=c,this.ctx.beginPath(),this.ctx.arc(e.x,e.y,e.size*1.2,0,Math.PI*2),this.ctx.fill();const u=this.ctx.createRadialGradient(e.x+s,e.y,0,e.x+s,e.y,e.size*1.2);u.addColorStop(0,i[2]+"FF"),u.addColorStop(.3,i[2]+"99"),u.addColorStop(.6,i[2]+"44"),u.addColorStop(1,"transparent"),this.ctx.fillStyle=u,this.ctx.beginPath(),this.ctx.arc(e.x+s,e.y,e.size*1.2,0,Math.PI*2),this.ctx.fill(),this.ctx.globalCompositeOperation="source-over"}countFingers(e,t){if(!e||e.length<21)return 0;const i=e[9],s=e[4],o=e[3],c=Math.sqrt(Math.pow(s.x-i.x,2)+Math.pow(s.y-i.y,2)+Math.pow(s.z-i.z,2)),u=Math.sqrt(Math.pow(o.x-i.x,2)+Math.pow(o.y-i.y,2)+Math.pow(o.z-i.z,2));let h=c>u?1:0;const f=[8,12,16,20],p=[6,10,14,18];for(let g=0;g<4;g++){const m=Math.sqrt(Math.pow(e[f[g]].x-i.x,2)+Math.pow(e[f[g]].y-i.y,2)+Math.pow(e[f[g]].z-i.z,2)),y=Math.sqrt(Math.pow(e[p[g]].x-i.x,2)+Math.pow(e[p[g]].y-i.y,2)+Math.pow(e[p[g]].z-i.z,2));m>y*1.1&&h++}return h}createExplosion(){const e=this.canvas.width/2,t=this.canvas.height/2;for(let i=0;i<40;i++){const s=Math.PI*2*i/40,o=10+Math.random()*20;this.glowObjects.push({x:e,y:t,size:80+Math.random()*100,vx:Math.cos(s)*o,vy:Math.sin(s)*o,life:1,hue:Math.random()*360,decay:.003})}}applyNoiseOverlay(){this.ctx.save(),this.ctx.globalAlpha=.05,this.ctx.fillStyle="white";for(let e=0;e<1e3;e++){const t=Math.random()*this.canvas.width,i=Math.random()*this.canvas.height,s=Math.random()*2;this.ctx.fillRect(t,i,s,s)}this.ctx.restore()}applyGlitchEffect(){this.ctx.save(),this.ctx.globalAlpha=this.glitchIntensity*.5,this.ctx.fillStyle="white";for(let e=0;e<5;e++){const t=Math.random()*this.canvas.width,i=Math.random()*this.canvas.height,s=Math.random()*10;this.ctx.fillRect(t,i,s,this.canvas.height)}for(let e=0;e<5;e++){const t=Math.random()*this.canvas.width,i=Math.random()*this.canvas.height,s=Math.random()*10;this.ctx.fillRect(t,i,this.canvas.width,s)}this.ctx.restore()}}class _y{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"dots",[]);U(this,"gridSpacing",8);U(this,"vibrationTimer",0);U(this,"isExploding",!1);this.canvas=e,this.ctx=t,this.initializeDots()}initializeDots(){this.dots=[];const e=Math.ceil(this.canvas.width/this.gridSpacing),t=Math.ceil(this.canvas.height/this.gridSpacing);for(let i=0;i<t;i++)for(let s=0;s<e;s++)this.dots.push({x:s*this.gridSpacing,y:i*this.gridSpacing,baseSize:1,currentSize:1,targetSize:1})}render(e,t){if(this.canvas.width===0||this.canvas.height===0)return;this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&!this.isExploding&&(this.createExplosion(),this.vibrationTimer=1,this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.016,i=Math.max(0,this.vibrationTimer));let s=null,o=null,c=2,u=!1;if(e.left&&e.left.landmarks){let p=this.countFingers(e.left.landmarks,"left");e.left.gesture==="pinch"&&(p=1),p>=1&&(u=!0,s=e.left.position.x*this.canvas.width,o=e.left.position.y*this.canvas.height,c=p)}if(e.right&&e.right.landmarks){let p=this.countFingers(e.right.landmarks,"right");if(e.right.gesture==="pinch"&&(p=1),p>=1){u=!0;const g=e.right.position.x*this.canvas.width,m=e.right.position.y*this.canvas.height;s!==null?(s=(s+g)/2,o=((o||0)+m)/2,c=Math.max(c,p)):(s=g,o=m,c=p)}}let h=200,f=4;c===1?(h=100,f=2):c>=5&&(h=350,f=6),this.dots.forEach(p=>{if(p.targetSize=p.baseSize,u&&s!==null&&o!==null){const g=p.x-s,m=p.y-o,y=Math.sqrt(g*g+m*m);if(y<h){const v=1-y/h;p.targetSize=p.baseSize+v*f}}p.currentSize+=(p.targetSize-p.currentSize)*Math.min(1,.2*xn()),i>0&&(p.currentSize+=Math.random()*i*3)}),this.ctx.fillStyle="#FFFFFF",this.dots.forEach(p=>{p.currentSize>.5&&(this.ctx.beginPath(),this.ctx.arc(p.x,p.y,p.currentSize,0,Math.PI*2),this.ctx.fill())})}countFingers(e,t){if(!e||e.length<21)return 0;const i=e[9],s=e[4],o=e[3],c=Math.sqrt(Math.pow(s.x-i.x,2)+Math.pow(s.y-i.y,2)+Math.pow(s.z-i.z,2)),u=Math.sqrt(Math.pow(o.x-i.x,2)+Math.pow(o.y-i.y,2)+Math.pow(o.z-i.z,2));let h=c>u?1:0;const f=[8,12,16,20],p=[6,10,14,18];for(let g=0;g<4;g++){const m=Math.sqrt(Math.pow(e[f[g]].x-i.x,2)+Math.pow(e[f[g]].y-i.y,2)+Math.pow(e[f[g]].z-i.z,2)),y=Math.sqrt(Math.pow(e[p[g]].x-i.x,2)+Math.pow(e[p[g]].y-i.y,2)+Math.pow(e[p[g]].z-i.z,2));m>y*1.1&&h++}return h}createExplosion(){if(this.isExploding)return;this.isExploding=!0;const e=this.canvas.width/2,t=this.canvas.height/2;this.dots.forEach(i=>{const s=i.x-e,o=i.y-t,u=Math.sqrt(s*s+o*o)/10;setTimeout(()=>{i.targetSize=8},u)}),setTimeout(()=>{this.isExploding=!1},1e3)}}class yy{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"blocks",[]);U(this,"baseBlockSize",40);U(this,"vibrationTimer",0);U(this,"currentBlockSize",40);U(this,"isExploding",!1);this.canvas=e,this.ctx=t,this.initializeGrid()}initializeGrid(){this.blocks=[];const e=Math.ceil(this.canvas.width/this.baseBlockSize),t=Math.ceil(this.canvas.height/this.baseBlockSize);for(let i=0;i<t;i++)for(let s=0;s<e;s++){const o=Math.floor(Math.random()*3);this.blocks.push({x:s*this.baseBlockSize,y:i*this.baseBlockSize,targetX:s*this.baseBlockSize,targetY:i*this.baseBlockSize,size:this.baseBlockSize,colorIndex:o,targetColorIndex:o,hasGrid:Math.random()>.7,gridSize:Math.floor(Math.random()*3)+2,glitchTimer:0,colorChangeTimer:Math.random()*5})}}render(e,t){if(this.canvas.width===0||this.canvas.height===0)return;const i=t[1]&&(t[1].toLowerCase()==="#ffffff"||t[1].toLowerCase()==="#fff");i?this.ctx.fillStyle="#000000":this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let s=0;e.clapping&&!this.isExploding&&(this.createExplosion(),this.vibrationTimer=1,this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.016,s=Math.max(0,this.vibrationTimer));let o=0,c=!1;if(e.left){let m=e.left.fingerCount||0;e.left.gesture==="pinch"&&(m=1),c=!0,o=m}if(e.right){let m=e.right.fingerCount||0;e.right.gesture==="pinch"&&(m=1),c=!0,o=Math.max(o,m)}let u=this.currentBlockSize,h=1;c&&(o===1?(u=100,h=.4):o===2?(u=60,h=.5):o===3?(u=45,h=1):o===4?(u=35,h=1.5):o>=5&&(u=25,h=3)),Math.abs(this.currentBlockSize-u)>1&&(this.currentBlockSize=u,this.baseBlockSize=u,this.initializeGrid()),this.blocks.forEach(m=>{m.size=this.currentBlockSize});const f=s>0?10:1;this.blocks.forEach(m=>{if(m.colorChangeTimer>0)m.colorChangeTimer-=.016*h*f;else{const y=Math.floor(Math.random()*3);y!==m.colorIndex&&(m.targetColorIndex=y,m.glitchTimer=.3),m.colorChangeTimer=2+Math.random()*3}m.colorIndex!==m.targetColorIndex&&(m.colorIndex=m.targetColorIndex),m.glitchTimer>0&&(m.glitchTimer-=.016)}),this.blocks.forEach(m=>{const y=m.x,v=m.y,w=s>0?.3+(1-s)*.7:1,_=m.size*w,S=(m.size-_)/2,b=(m.size-_)/2;let C;if(i?C=m.colorIndex%2===0?t[0]:"#000000":C=t[m.colorIndex]||"#FFFFFF",this.ctx.fillStyle=C,this.ctx.fillRect(y+S,v+b,_,_),m.hasGrid&&_>15){this.ctx.strokeStyle=t[3]||"#000000",this.ctx.lineWidth=1;const E=_/m.gridSize;for(let L=0;L<=m.gridSize;L++)this.ctx.beginPath(),this.ctx.moveTo(y+S+L*E,v+b),this.ctx.lineTo(y+S+L*E,v+b+_),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(y+S,v+b+L*E),this.ctx.lineTo(y+S+_,v+b+L*E),this.ctx.stroke()}if(m.glitchTimer>0||s>.5){let E;i?E=m.colorIndex%2===0?"#000000":t[0]:E=t[(m.colorIndex+1)%3]||"#FFFFFF",this.ctx.strokeStyle=E,this.ctx.lineWidth=s>0?4:3,this.ctx.strokeRect(y+S,v+b,_,_)}}),this.ctx.strokeStyle="rgba(255, 255, 255, 0.1)",this.ctx.lineWidth=1;const p=Math.ceil(this.canvas.width/this.baseBlockSize),g=Math.ceil(this.canvas.height/this.baseBlockSize);for(let m=0;m<=p;m++)this.ctx.beginPath(),this.ctx.moveTo(m*this.baseBlockSize,0),this.ctx.lineTo(m*this.baseBlockSize,this.canvas.height),this.ctx.stroke();for(let m=0;m<=g;m++)this.ctx.beginPath(),this.ctx.moveTo(0,m*this.baseBlockSize),this.ctx.lineTo(this.canvas.width,m*this.baseBlockSize),this.ctx.stroke()}createExplosion(){this.isExploding||(this.isExploding=!0,this.blocks.forEach(e=>{e.targetColorIndex=Math.floor(Math.random()*3),e.colorIndex=e.targetColorIndex,e.glitchTimer=1}),setTimeout(()=>this.isExploding=!1,1e3))}}class Sy{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"lines",[]);U(this,"gridSpacing",40);U(this,"lineLength",30);U(this,"isClapping",!1);U(this,"clappingIntensity",0);this.canvas=e,this.ctx=t,this.initializeGrid()}initializeGrid(){this.lines=[];const e=Math.ceil(this.canvas.width/this.gridSpacing)+1,t=Math.ceil(this.canvas.height/this.gridSpacing)+1;for(let i=0;i<t;i++)for(let s=0;s<e;s++)this.lines.push({x:s*this.gridSpacing,y:i*this.gridSpacing,length:this.lineLength,currentAngle:0,targetAngle:0,spinVelocity:0})}render(e,t){t[1]&&(t[1].toLowerCase()==="#ffffff"||t[1].toLowerCase()==="#fff")?this.ctx.fillStyle="#000000":this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),(this.lines.length===0||this.lines[0].x>this.canvas.width||this.lines[0].y>this.canvas.height)&&this.initializeGrid();let s=.1,o=0;const c=[];e.left&&c.push(e.left),e.right&&c.push(e.right),c.forEach(u=>{let h=u.fingerCount||2;u.gesture==="pinch"&&(h=1),o=Math.max(o,h)}),o===1?s=.02:o===2?s=.1:o===3?s=.15:o===4?s=.2:o>=5&&(s=.3),e.clapping?this.isClapping||(this.isClapping=!0,this.clappingIntensity=1):this.isClapping=!1,this.clappingIntensity>0&&(this.clappingIntensity*=.95,this.clappingIntensity<.01&&(this.clappingIntensity=0)),this.lines.forEach(u=>{if(c.length>0){let h=0,f=0,p=0;c.forEach(g=>{var C,E;const m=(((C=g.position)==null?void 0:C.x)||.5)*this.canvas.width,y=(((E=g.position)==null?void 0:E.y)||.5)*this.canvas.height,v=m-u.x,w=y-u.y,S=1/(1+Math.sqrt(v*v+w*w)*.001),b=Math.atan2(w,v);f+=Math.cos(b)*S,p+=Math.sin(b)*S,h+=S}),h>0&&(u.targetAngle=Math.atan2(p,f))}else u.targetAngle=0;if(this.clappingIntensity>0)u.spinVelocity+=this.clappingIntensity*.5,u.currentAngle+=u.spinVelocity,u.spinVelocity*=.9;else{let h=u.targetAngle-u.currentAngle;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;u.currentAngle+=h*s,u.spinVelocity=0}}),this.ctx.strokeStyle=t[0]||"#00ff00",this.ctx.lineWidth=2,this.ctx.lineCap="round",this.lines.forEach(u=>{const h=u.length/2,f=u.x-Math.cos(u.currentAngle)*h,p=u.y-Math.sin(u.currentAngle)*h,g=u.x+Math.cos(u.currentAngle)*h,m=u.y+Math.sin(u.currentAngle)*h;this.ctx.beginPath(),this.ctx.moveTo(f,p),this.ctx.lineTo(g,m),this.ctx.stroke()})}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Td="184",My=0,F0=1,wy=2,Cc=1,by=2,Bo=3,cs=0,si=1,Vi=2,rr=0,ka=1,Ba=2,U0=3,D0=4,Ey=5,ks=100,Ty=101,Cy=102,Ay=103,Ry=104,Py=200,Ly=201,Iy=202,Ny=203,wf=204,bf=205,Fy=206,Uy=207,Dy=208,ky=209,Oy=210,zy=211,By=212,Hy=213,Gy=214,Ef=0,Tf=1,Cf=2,Ha=3,Af=4,Rf=5,Pf=6,Lf=7,Cd=0,Vy=1,Wy=2,sr=0,yx=1,Sx=2,Mx=3,wx=4,bx=5,Ex=6,Tx=7,Cx=300,Hs=301,Ga=302,Fh=303,Uh=304,qc=306,If=1e3,Ar=1001,Nf=1002,Un=1003,Xy=1004,Jl=1005,mn=1006,Dh=1007,zs=1008,xi=1009,Ax=1010,Rx=1011,jo=1012,Ad=1013,or=1014,Xi=1015,_i=1016,Rd=1017,Pd=1018,qo=1020,Px=35902,Lx=35899,Ix=1021,Nx=1022,vi=1023,Lr=1026,Bs=1027,Ld=1028,Id=1029,Gs=1030,Nd=1031,Fd=1033,Ac=33776,Rc=33777,Pc=33778,Lc=33779,Ff=35840,Uf=35841,Df=35842,kf=35843,Of=36196,zf=37492,Bf=37496,Hf=37488,Gf=37489,Fc=37490,Vf=37491,Wf=37808,Xf=37809,jf=37810,qf=37811,Yf=37812,$f=37813,Kf=37814,Zf=37815,Qf=37816,Jf=37817,ed=37818,td=37819,nd=37820,id=37821,rd=36492,sd=36494,ad=36495,od=36283,ld=36284,Uc=36285,cd=36286,jy=3200,Dc=0,qy=1,as="",gi="srgb",kc="srgb-linear",Oc="linear",Vt="srgb",ma=7680,k0=519,Yy=512,$y=513,Ky=514,Ud=515,Zy=516,Qy=517,Dd=518,Jy=519,O0=35044,z0="300 es",nr=2e3,Yo=2001;function eS(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function zc(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function tS(){const a=zc("canvas");return a.style.display="block",a}const B0={};function H0(...a){const e="THREE."+a.shift();console.log(e,...a)}function Fx(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function dt(...a){a=Fx(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function Ft(...a){a=Fx(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function ud(...a){const e=a.join(" ");e in B0||(B0[e]=!0,dt(...a))}function nS(a,e,t){return new Promise(function(i,s){function o(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:s();break;case a.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}const iS={[Ef]:Tf,[Cf]:Pf,[Af]:Lf,[Ha]:Rf,[Tf]:Ef,[Pf]:Cf,[Lf]:Af,[Rf]:Ha};class Ws{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,c=s.length;o<c;o++)s[o].call(this,e);e.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let G0=1234567;const Go=Math.PI/180,$o=180/Math.PI;function ja(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bn[a&255]+Bn[a>>8&255]+Bn[a>>16&255]+Bn[a>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[t&63|128]+Bn[t>>8&255]+"-"+Bn[t>>16&255]+Bn[t>>24&255]+Bn[i&255]+Bn[i>>8&255]+Bn[i>>16&255]+Bn[i>>24&255]).toLowerCase()}function At(a,e,t){return Math.max(e,Math.min(t,a))}function kd(a,e){return(a%e+e)%e}function rS(a,e,t,i,s){return i+(a-e)*(s-i)/(t-e)}function sS(a,e,t){return a!==e?(t-a)/(e-a):0}function Vo(a,e,t){return(1-t)*a+t*e}function aS(a,e,t,i){return Vo(a,e,1-Math.exp(-t*i))}function oS(a,e=1){return e-Math.abs(kd(a,e*2)-e)}function lS(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function cS(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function uS(a,e){return a+Math.floor(Math.random()*(e-a+1))}function hS(a,e){return a+Math.random()*(e-a)}function fS(a){return a*(.5-Math.random())}function dS(a){a!==void 0&&(G0=a);let e=G0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pS(a){return a*Go}function mS(a){return a*$o}function gS(a){return(a&a-1)===0&&a!==0}function xS(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function vS(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function _S(a,e,t,i,s){const o=Math.cos,c=Math.sin,u=o(t/2),h=c(t/2),f=o((e+i)/2),p=c((e+i)/2),g=o((e-i)/2),m=c((e-i)/2),y=o((i-e)/2),v=c((i-e)/2);switch(s){case"XYX":a.set(u*p,h*g,h*m,u*f);break;case"YZY":a.set(h*m,u*p,h*g,u*f);break;case"ZXZ":a.set(h*g,h*m,u*p,u*f);break;case"XZX":a.set(u*p,h*v,h*y,u*f);break;case"YXY":a.set(h*y,u*p,h*v,u*f);break;case"ZYZ":a.set(h*v,h*y,u*p,u*f);break;default:dt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ia(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function jn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const ss={DEG2RAD:Go,RAD2DEG:$o,generateUUID:ja,clamp:At,euclideanModulo:kd,mapLinear:rS,inverseLerp:sS,lerp:Vo,damp:aS,pingpong:oS,smoothstep:lS,smootherstep:cS,randInt:uS,randFloat:hS,randFloatSpread:fS,seededRandom:dS,degToRad:pS,radToDeg:mS,isPowerOfTwo:gS,ceilPowerOfTwo:xS,floorPowerOfTwo:vS,setQuaternionFromProperEuler:_S,normalize:jn,denormalize:Ia},Yd=class Yd{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*i-c*s+e.x,this.y=o*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yd.prototype.isVector2=!0;let ht=Yd;class qa{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,o,c,u){let h=i[s+0],f=i[s+1],p=i[s+2],g=i[s+3],m=o[c+0],y=o[c+1],v=o[c+2],w=o[c+3];if(g!==w||h!==m||f!==y||p!==v){let _=h*m+f*y+p*v+g*w;_<0&&(m=-m,y=-y,v=-v,w=-w,_=-_);let S=1-u;if(_<.9995){const b=Math.acos(_),C=Math.sin(b);S=Math.sin(S*b)/C,u=Math.sin(u*b)/C,h=h*S+m*u,f=f*S+y*u,p=p*S+v*u,g=g*S+w*u}else{h=h*S+m*u,f=f*S+y*u,p=p*S+v*u,g=g*S+w*u;const b=1/Math.sqrt(h*h+f*f+p*p+g*g);h*=b,f*=b,p*=b,g*=b}}e[t]=h,e[t+1]=f,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,s,o,c){const u=i[s],h=i[s+1],f=i[s+2],p=i[s+3],g=o[c],m=o[c+1],y=o[c+2],v=o[c+3];return e[t]=u*v+p*g+h*y-f*m,e[t+1]=h*v+p*m+f*g-u*y,e[t+2]=f*v+p*y+u*m-h*g,e[t+3]=p*v-u*g-h*m-f*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,o=e._z,c=e._order,u=Math.cos,h=Math.sin,f=u(i/2),p=u(s/2),g=u(o/2),m=h(i/2),y=h(s/2),v=h(o/2);switch(c){case"XYZ":this._x=m*p*g+f*y*v,this._y=f*y*g-m*p*v,this._z=f*p*v+m*y*g,this._w=f*p*g-m*y*v;break;case"YXZ":this._x=m*p*g+f*y*v,this._y=f*y*g-m*p*v,this._z=f*p*v-m*y*g,this._w=f*p*g+m*y*v;break;case"ZXY":this._x=m*p*g-f*y*v,this._y=f*y*g+m*p*v,this._z=f*p*v+m*y*g,this._w=f*p*g-m*y*v;break;case"ZYX":this._x=m*p*g-f*y*v,this._y=f*y*g+m*p*v,this._z=f*p*v-m*y*g,this._w=f*p*g+m*y*v;break;case"YZX":this._x=m*p*g+f*y*v,this._y=f*y*g+m*p*v,this._z=f*p*v-m*y*g,this._w=f*p*g-m*y*v;break;case"XZY":this._x=m*p*g-f*y*v,this._y=f*y*g-m*p*v,this._z=f*p*v+m*y*g,this._w=f*p*g+m*y*v;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],o=t[8],c=t[1],u=t[5],h=t[9],f=t[2],p=t[6],g=t[10],m=i+u+g;if(m>0){const y=.5/Math.sqrt(m+1);this._w=.25/y,this._x=(p-h)*y,this._y=(o-f)*y,this._z=(c-s)*y}else if(i>u&&i>g){const y=2*Math.sqrt(1+i-u-g);this._w=(p-h)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(o+f)/y}else if(u>g){const y=2*Math.sqrt(1+u-i-g);this._w=(o-f)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(h+p)/y}else{const y=2*Math.sqrt(1+g-i-u);this._w=(c-s)/y,this._x=(o+f)/y,this._y=(h+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,o=e._z,c=e._w,u=t._x,h=t._y,f=t._z,p=t._w;return this._x=i*p+c*u+s*f-o*h,this._y=s*p+c*h+o*u-i*f,this._z=o*p+c*f+i*h-s*u,this._w=c*p-i*u-s*h-o*f,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,o=e._z,c=e._w,u=this.dot(e);u<0&&(i=-i,s=-s,o=-o,c=-c,u=-u);let h=1-t;if(u<.9995){const f=Math.acos(u),p=Math.sin(f);h=Math.sin(h*f)/p,t=Math.sin(t*f)/p,this._x=this._x*h+i*t,this._y=this._y*h+s*t,this._z=this._z*h+o*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+i*t,this._y=this._y*h+s*t,this._z=this._z*h+o*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const $d=class $d{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(V0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(V0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*s,this.y=o[1]*t+o[4]*i+o[7]*s,this.z=o[2]*t+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=e.elements,c=1/(o[3]*t+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*s+o[12])*c,this.y=(o[1]*t+o[5]*i+o[9]*s+o[13])*c,this.z=(o[2]*t+o[6]*i+o[10]*s+o[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,o=e.x,c=e.y,u=e.z,h=e.w,f=2*(c*s-u*i),p=2*(u*t-o*s),g=2*(o*i-c*t);return this.x=t+h*f+c*g-u*p,this.y=i+h*p+u*f-o*g,this.z=s+h*g+o*p-c*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s,this.y=o[1]*t+o[5]*i+o[9]*s,this.z=o[2]*t+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,o=e.z,c=t.x,u=t.y,h=t.z;return this.x=s*h-o*u,this.y=o*c-i*h,this.z=i*u-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return kh.copy(this).projectOnVector(e),this.sub(kh)}reflect(e){return this.sub(kh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};$d.prototype.isVector3=!0;let Z=$d;const kh=new Z,V0=new qa,Kd=class Kd{constructor(e,t,i,s,o,c,u,h,f){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,c,u,h,f)}set(e,t,i,s,o,c,u,h,f){const p=this.elements;return p[0]=e,p[1]=s,p[2]=u,p[3]=t,p[4]=o,p[5]=h,p[6]=i,p[7]=c,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,c=i[0],u=i[3],h=i[6],f=i[1],p=i[4],g=i[7],m=i[2],y=i[5],v=i[8],w=s[0],_=s[3],S=s[6],b=s[1],C=s[4],E=s[7],L=s[2],A=s[5],I=s[8];return o[0]=c*w+u*b+h*L,o[3]=c*_+u*C+h*A,o[6]=c*S+u*E+h*I,o[1]=f*w+p*b+g*L,o[4]=f*_+p*C+g*A,o[7]=f*S+p*E+g*I,o[2]=m*w+y*b+v*L,o[5]=m*_+y*C+v*A,o[8]=m*S+y*E+v*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],c=e[4],u=e[5],h=e[6],f=e[7],p=e[8];return t*c*p-t*u*f-i*o*p+i*u*h+s*o*f-s*c*h}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],c=e[4],u=e[5],h=e[6],f=e[7],p=e[8],g=p*c-u*f,m=u*h-p*o,y=f*o-c*h,v=t*g+i*m+s*y;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/v;return e[0]=g*w,e[1]=(s*f-p*i)*w,e[2]=(u*i-s*c)*w,e[3]=m*w,e[4]=(p*t-s*h)*w,e[5]=(s*o-u*t)*w,e[6]=y*w,e[7]=(i*h-f*t)*w,e[8]=(c*t-i*o)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,o,c,u){const h=Math.cos(o),f=Math.sin(o);return this.set(i*h,i*f,-i*(h*c+f*u)+c+e,-s*f,s*h,-s*(-f*c+h*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Oh.makeScale(e,t)),this}rotate(e){return this.premultiply(Oh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Oh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Kd.prototype.isMatrix3=!0;let Mt=Kd;const Oh=new Mt,W0=new Mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),X0=new Mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yS(){const a={enabled:!0,workingColorSpace:kc,spaces:{},convert:function(s,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===Vt&&(s.r=Rr(s.r),s.g=Rr(s.g),s.b=Rr(s.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Vt&&(s.r=Oa(s.r),s.g=Oa(s.g),s.b=Oa(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===as?Oc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,c){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return ud("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return ud("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(s,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return a.define({[kc]:{primaries:e,whitePoint:i,transfer:Oc,toXYZ:W0,fromXYZ:X0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:e,whitePoint:i,transfer:Vt,toXYZ:W0,fromXYZ:X0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),a}const Pt=yS();function Rr(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Oa(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let ga;class SS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ga===void 0&&(ga=zc("canvas")),ga.width=e.width,ga.height=e.height;const s=ga.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ga}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let c=0;c<o.length;c++)o[c]=Rr(o[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Rr(t[i]/255)*255):t[i]=Rr(t[i]);return{data:t,width:e.width,height:e.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let MS=0;class Od{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=ja(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?o.push(zh(s[c].image)):o.push(zh(s[c]))}else o=zh(s);i.url=o}return t||(e.images[this.uuid]=i),i}}function zh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?SS.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}let wS=0;const Bh=new Z;class Gn extends Ws{constructor(e=Gn.DEFAULT_IMAGE,t=Gn.DEFAULT_MAPPING,i=Ar,s=Ar,o=mn,c=zs,u=vi,h=xi,f=Gn.DEFAULT_ANISOTROPY,p=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=ja(),this.name="",this.source=new Od(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=c,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=h,this.offset=new ht(0,0),this.repeat=new ht(1,1),this.center=new ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bh).x}get height(){return this.source.getSize(Bh).y}get depth(){return this.source.getSize(Bh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){dt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){dt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case If:e.x=e.x-Math.floor(e.x);break;case Ar:e.x=e.x<0?0:1;break;case Nf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case If:e.y=e.y-Math.floor(e.y);break;case Ar:e.y=e.y<0?0:1;break;case Nf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=Cx;Gn.DEFAULT_ANISOTROPY=1;const Zd=class Zd{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*o,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*o,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*o,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,o;const h=e.elements,f=h[0],p=h[4],g=h[8],m=h[1],y=h[5],v=h[9],w=h[2],_=h[6],S=h[10];if(Math.abs(p-m)<.01&&Math.abs(g-w)<.01&&Math.abs(v-_)<.01){if(Math.abs(p+m)<.1&&Math.abs(g+w)<.1&&Math.abs(v+_)<.1&&Math.abs(f+y+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(f+1)/2,E=(y+1)/2,L=(S+1)/2,A=(p+m)/4,I=(g+w)/4,T=(v+_)/4;return C>E&&C>L?C<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(C),s=A/i,o=I/i):E>L?E<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(E),i=A/s,o=T/s):L<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(L),i=I/o,s=T/o),this.set(i,s,o,t),this}let b=Math.sqrt((_-v)*(_-v)+(g-w)*(g-w)+(m-p)*(m-p));return Math.abs(b)<.001&&(b=1),this.x=(_-v)/b,this.y=(g-w)/b,this.z=(m-p)/b,this.w=Math.acos((f+y+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this.w=At(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this.w=At(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Zd.prototype.isVector4=!0;let sn=Zd;class bS extends Ws{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new sn(0,0,e,t),this.scissorTest=!1,this.viewport=new sn(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},o=new Gn(s),c=i.count;for(let u=0;u<c;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Od(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends bS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ux extends Gn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ES extends Gn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Un,this.minFilter=Un,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jc=class jc{constructor(e,t,i,s,o,c,u,h,f,p,g,m,y,v,w,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,c,u,h,f,p,g,m,y,v,w,_)}set(e,t,i,s,o,c,u,h,f,p,g,m,y,v,w,_){const S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=s,S[1]=o,S[5]=c,S[9]=u,S[13]=h,S[2]=f,S[6]=p,S[10]=g,S[14]=m,S[3]=y,S[7]=v,S[11]=w,S[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/xa.setFromMatrixColumn(e,0).length(),o=1/xa.setFromMatrixColumn(e,1).length(),c=1/xa.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,o=e.z,c=Math.cos(i),u=Math.sin(i),h=Math.cos(s),f=Math.sin(s),p=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const m=c*p,y=c*g,v=u*p,w=u*g;t[0]=h*p,t[4]=-h*g,t[8]=f,t[1]=y+v*f,t[5]=m-w*f,t[9]=-u*h,t[2]=w-m*f,t[6]=v+y*f,t[10]=c*h}else if(e.order==="YXZ"){const m=h*p,y=h*g,v=f*p,w=f*g;t[0]=m+w*u,t[4]=v*u-y,t[8]=c*f,t[1]=c*g,t[5]=c*p,t[9]=-u,t[2]=y*u-v,t[6]=w+m*u,t[10]=c*h}else if(e.order==="ZXY"){const m=h*p,y=h*g,v=f*p,w=f*g;t[0]=m-w*u,t[4]=-c*g,t[8]=v+y*u,t[1]=y+v*u,t[5]=c*p,t[9]=w-m*u,t[2]=-c*f,t[6]=u,t[10]=c*h}else if(e.order==="ZYX"){const m=c*p,y=c*g,v=u*p,w=u*g;t[0]=h*p,t[4]=v*f-y,t[8]=m*f+w,t[1]=h*g,t[5]=w*f+m,t[9]=y*f-v,t[2]=-f,t[6]=u*h,t[10]=c*h}else if(e.order==="YZX"){const m=c*h,y=c*f,v=u*h,w=u*f;t[0]=h*p,t[4]=w-m*g,t[8]=v*g+y,t[1]=g,t[5]=c*p,t[9]=-u*p,t[2]=-f*p,t[6]=y*g+v,t[10]=m-w*g}else if(e.order==="XZY"){const m=c*h,y=c*f,v=u*h,w=u*f;t[0]=h*p,t[4]=-g,t[8]=f*p,t[1]=m*g+w,t[5]=c*p,t[9]=y*g-v,t[2]=v*g-y,t[6]=u*p,t[10]=w*g+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(TS,e,CS)}lookAt(e,t,i){const s=this.elements;return di.subVectors(e,t),di.lengthSq()===0&&(di.z=1),di.normalize(),Jr.crossVectors(i,di),Jr.lengthSq()===0&&(Math.abs(i.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),Jr.crossVectors(i,di)),Jr.normalize(),ec.crossVectors(di,Jr),s[0]=Jr.x,s[4]=ec.x,s[8]=di.x,s[1]=Jr.y,s[5]=ec.y,s[9]=di.y,s[2]=Jr.z,s[6]=ec.z,s[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,c=i[0],u=i[4],h=i[8],f=i[12],p=i[1],g=i[5],m=i[9],y=i[13],v=i[2],w=i[6],_=i[10],S=i[14],b=i[3],C=i[7],E=i[11],L=i[15],A=s[0],I=s[4],T=s[8],F=s[12],z=s[1],D=s[5],H=s[9],te=s[13],se=s[2],W=s[6],V=s[10],X=s[14],j=s[3],ie=s[7],Q=s[11],O=s[15];return o[0]=c*A+u*z+h*se+f*j,o[4]=c*I+u*D+h*W+f*ie,o[8]=c*T+u*H+h*V+f*Q,o[12]=c*F+u*te+h*X+f*O,o[1]=p*A+g*z+m*se+y*j,o[5]=p*I+g*D+m*W+y*ie,o[9]=p*T+g*H+m*V+y*Q,o[13]=p*F+g*te+m*X+y*O,o[2]=v*A+w*z+_*se+S*j,o[6]=v*I+w*D+_*W+S*ie,o[10]=v*T+w*H+_*V+S*Q,o[14]=v*F+w*te+_*X+S*O,o[3]=b*A+C*z+E*se+L*j,o[7]=b*I+C*D+E*W+L*ie,o[11]=b*T+C*H+E*V+L*Q,o[15]=b*F+C*te+E*X+L*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],o=e[12],c=e[1],u=e[5],h=e[9],f=e[13],p=e[2],g=e[6],m=e[10],y=e[14],v=e[3],w=e[7],_=e[11],S=e[15],b=h*y-f*m,C=u*y-f*g,E=u*m-h*g,L=c*y-f*p,A=c*m-h*p,I=c*g-u*p;return t*(w*b-_*C+S*E)-i*(v*b-_*L+S*A)+s*(v*C-w*L+S*I)-o*(v*E-w*A+_*I)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],c=e[4],u=e[5],h=e[6],f=e[7],p=e[8],g=e[9],m=e[10],y=e[11],v=e[12],w=e[13],_=e[14],S=e[15],b=t*u-i*c,C=t*h-s*c,E=t*f-o*c,L=i*h-s*u,A=i*f-o*u,I=s*f-o*h,T=p*w-g*v,F=p*_-m*v,z=p*S-y*v,D=g*_-m*w,H=g*S-y*w,te=m*S-y*_,se=b*te-C*H+E*D+L*z-A*F+I*T;if(se===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/se;return e[0]=(u*te-h*H+f*D)*W,e[1]=(s*H-i*te-o*D)*W,e[2]=(w*I-_*A+S*L)*W,e[3]=(m*A-g*I-y*L)*W,e[4]=(h*z-c*te-f*F)*W,e[5]=(t*te-s*z+o*F)*W,e[6]=(_*E-v*I-S*C)*W,e[7]=(p*I-m*E+y*C)*W,e[8]=(c*H-u*z+f*T)*W,e[9]=(i*z-t*H-o*T)*W,e[10]=(v*A-w*E+S*b)*W,e[11]=(g*E-p*A-y*b)*W,e[12]=(u*F-c*D-h*T)*W,e[13]=(t*D-i*F+s*T)*W,e[14]=(w*C-v*L-_*b)*W,e[15]=(p*L-g*C+m*b)*W,this}scale(e){const t=this.elements,i=e.x,s=e.y,o=e.z;return t[0]*=i,t[4]*=s,t[8]*=o,t[1]*=i,t[5]*=s,t[9]*=o,t[2]*=i,t[6]*=s,t[10]*=o,t[3]*=i,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),o=1-i,c=e.x,u=e.y,h=e.z,f=o*c,p=o*u;return this.set(f*c+i,f*u-s*h,f*h+s*u,0,f*u+s*h,p*u+i,p*h-s*c,0,f*h-s*u,p*h+s*c,o*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,o,c){return this.set(1,i,o,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,o=t._x,c=t._y,u=t._z,h=t._w,f=o+o,p=c+c,g=u+u,m=o*f,y=o*p,v=o*g,w=c*p,_=c*g,S=u*g,b=h*f,C=h*p,E=h*g,L=i.x,A=i.y,I=i.z;return s[0]=(1-(w+S))*L,s[1]=(y+E)*L,s[2]=(v-C)*L,s[3]=0,s[4]=(y-E)*A,s[5]=(1-(m+S))*A,s[6]=(_+b)*A,s[7]=0,s[8]=(v+C)*I,s[9]=(_-b)*I,s[10]=(1-(m+w))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const o=this.determinant();if(o===0)return i.set(1,1,1),t.identity(),this;let c=xa.set(s[0],s[1],s[2]).length();const u=xa.set(s[4],s[5],s[6]).length(),h=xa.set(s[8],s[9],s[10]).length();o<0&&(c=-c),zi.copy(this);const f=1/c,p=1/u,g=1/h;return zi.elements[0]*=f,zi.elements[1]*=f,zi.elements[2]*=f,zi.elements[4]*=p,zi.elements[5]*=p,zi.elements[6]*=p,zi.elements[8]*=g,zi.elements[9]*=g,zi.elements[10]*=g,t.setFromRotationMatrix(zi),i.x=c,i.y=u,i.z=h,this}makePerspective(e,t,i,s,o,c,u=nr,h=!1){const f=this.elements,p=2*o/(t-e),g=2*o/(i-s),m=(t+e)/(t-e),y=(i+s)/(i-s);let v,w;if(h)v=o/(c-o),w=c*o/(c-o);else if(u===nr)v=-(c+o)/(c-o),w=-2*c*o/(c-o);else if(u===Yo)v=-c/(c-o),w=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=p,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=g,f[9]=y,f[13]=0,f[2]=0,f[6]=0,f[10]=v,f[14]=w,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,s,o,c,u=nr,h=!1){const f=this.elements,p=2/(t-e),g=2/(i-s),m=-(t+e)/(t-e),y=-(i+s)/(i-s);let v,w;if(h)v=1/(c-o),w=c/(c-o);else if(u===nr)v=-2/(c-o),w=-(c+o)/(c-o);else if(u===Yo)v=-1/(c-o),w=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=p,f[4]=0,f[8]=0,f[12]=m,f[1]=0,f[5]=g,f[9]=0,f[13]=y,f[2]=0,f[6]=0,f[10]=v,f[14]=w,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};jc.prototype.isMatrix4=!0;let Yt=jc;const xa=new Z,zi=new Yt,TS=new Z(0,0,0),CS=new Z(1,1,1),Jr=new Z,ec=new Z,di=new Z,j0=new Yt,q0=new qa;class Ir{constructor(e=0,t=0,i=0,s=Ir.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,o=s[0],c=s[4],u=s[8],h=s[1],f=s[5],p=s[9],g=s[2],m=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(At(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-At(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(At(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-At(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(m,y),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,y),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return j0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(j0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return q0.setFromEuler(this),this.setFromQuaternion(q0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ir.DEFAULT_ORDER="XYZ";class Dx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let AS=0;const Y0=new Z,va=new qa,Sr=new Yt,tc=new Z,Po=new Z,RS=new Z,PS=new qa,$0=new Z(1,0,0),K0=new Z(0,1,0),Z0=new Z(0,0,1),Q0={type:"added"},LS={type:"removed"},_a={type:"childadded",child:null},Hh={type:"childremoved",child:null};class gn extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:AS++}),this.uuid=ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new Z,t=new Ir,i=new qa,s=new Z(1,1,1);function o(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Yt},normalMatrix:{value:new Mt}}),this.matrix=new Yt,this.matrixWorld=new Yt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return va.setFromAxisAngle(e,t),this.quaternion.multiply(va),this}rotateOnWorldAxis(e,t){return va.setFromAxisAngle(e,t),this.quaternion.premultiply(va),this}rotateX(e){return this.rotateOnAxis($0,e)}rotateY(e){return this.rotateOnAxis(K0,e)}rotateZ(e){return this.rotateOnAxis(Z0,e)}translateOnAxis(e,t){return Y0.copy(e).applyQuaternion(this.quaternion),this.position.add(Y0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($0,e)}translateY(e){return this.translateOnAxis(K0,e)}translateZ(e){return this.translateOnAxis(Z0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?tc.copy(e):tc.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sr.lookAt(Po,tc,this.up):Sr.lookAt(tc,Po,this.up),this.quaternion.setFromRotationMatrix(Sr),s&&(Sr.extractRotation(s.matrixWorld),va.setFromRotationMatrix(Sr),this.quaternion.premultiply(va.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Q0),_a.child=e,this.dispatchEvent(_a),_a.child=null):Ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(LS),Hh.child=e,this.dispatchEvent(Hh),Hh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Q0),_a.child=e,this.dispatchEvent(_a),_a.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let o=0,c=s.length;o<c;o++)s[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,e,RS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,PS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*i-o[8]*s,o[13]+=i-o[1]*t-o[5]*i-o[9]*s,o[14]+=s-o[2]*t-o[6]*i-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let o=0,c=s.length;o<c;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(u=>({...u})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let f=0,p=h.length;f<p;f++){const g=h[f];o(e.shapes,g)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,f=this.material.length;h<f;h++)u.push(o(e.materials,this.material[h]));s.material=u}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];s.animations.push(o(e.animations,h))}}if(t){const u=c(e.geometries),h=c(e.materials),f=c(e.textures),p=c(e.images),g=c(e.shapes),m=c(e.skeletons),y=c(e.animations),v=c(e.nodes);u.length>0&&(i.geometries=u),h.length>0&&(i.materials=h),f.length>0&&(i.textures=f),p.length>0&&(i.images=p),g.length>0&&(i.shapes=g),m.length>0&&(i.skeletons=m),y.length>0&&(i.animations=y),v.length>0&&(i.nodes=v)}return i.object=s,i;function c(u){const h=[];for(const f in u){const p=u[f];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}gn.DEFAULT_UP=new Z(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Na extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const IS={type:"move"};class Gh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Na,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Na,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Na,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,o=null,c=null;const u=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){c=!0;for(const w of e.hand.values()){const _=t.getJointPose(w,i),S=this._getHandJoint(f,w);_!==null&&(S.matrix.fromArray(_.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=_.radius),S.visible=_!==null}const p=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],m=p.position.distanceTo(g.position),y=.02,v=.005;f.inputState.pinching&&m>y+v?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&m<=y-v&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));u!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(IS)))}return u!==null&&(u.visible=s!==null),h!==null&&(h.visible=o!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Na;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const kx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},nc={h:0,s:0,l:0};function Vh(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Pt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Pt.workingColorSpace){if(e=kd(e,1),t=At(t,0,1),i=At(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,c=2*i-o;this.r=Vh(c,o,e+1/3),this.g=Vh(c,o,e),this.b=Vh(c,o,e-1/3)}return Pt.colorSpaceToWorking(this,s),this}setStyle(e,t=gi){function i(o){o!==void 0&&parseFloat(o)<1&&dt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:dt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);dt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gi){const i=kx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):dt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Rr(e.r),this.g=Rr(e.g),this.b=Rr(e.b),this}copyLinearToSRGB(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return Pt.workingToColorSpace(Hn.copy(this),e),Math.round(At(Hn.r*255,0,255))*65536+Math.round(At(Hn.g*255,0,255))*256+Math.round(At(Hn.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.workingToColorSpace(Hn.copy(this),t);const i=Hn.r,s=Hn.g,o=Hn.b,c=Math.max(i,s,o),u=Math.min(i,s,o);let h,f;const p=(u+c)/2;if(u===c)h=0,f=0;else{const g=c-u;switch(f=p<=.5?g/(c+u):g/(2-c-u),c){case i:h=(s-o)/g+(s<o?6:0);break;case s:h=(o-i)/g+2;break;case o:h=(i-s)/g+4;break}h/=6}return e.h=h,e.s=f,e.l=p,e}getRGB(e,t=Pt.workingColorSpace){return Pt.workingToColorSpace(Hn.copy(this),t),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=gi){Pt.workingToColorSpace(Hn.copy(this),e);const t=Hn.r,i=Hn.g,s=Hn.b;return e!==gi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(es),this.setHSL(es.h+e,es.s+t,es.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(es),e.getHSL(nc);const i=Vo(es.h,nc.h,t),s=Vo(es.s,nc.s,t),o=Vo(es.l,nc.l,t);return this.setHSL(i,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*s,this.g=o[1]*t+o[4]*i+o[7]*s,this.b=o[2]*t+o[5]*i+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new Ke;Ke.NAMES=kx;class Zo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ke(e),this.density=t}clone(){return new Zo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class us extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ir,this.environmentIntensity=1,this.environmentRotation=new Ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Bi=new Z,Mr=new Z,Wh=new Z,wr=new Z,ya=new Z,Sa=new Z,J0=new Z,Xh=new Z,jh=new Z,qh=new Z,Yh=new sn,$h=new sn,Kh=new sn;class Wi{constructor(e=new Z,t=new Z,i=new Z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Bi.subVectors(e,t),s.cross(Bi);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,i,s,o){Bi.subVectors(s,t),Mr.subVectors(i,t),Wh.subVectors(e,t);const c=Bi.dot(Bi),u=Bi.dot(Mr),h=Bi.dot(Wh),f=Mr.dot(Mr),p=Mr.dot(Wh),g=c*f-u*u;if(g===0)return o.set(0,0,0),null;const m=1/g,y=(f*h-u*p)*m,v=(c*p-u*h)*m;return o.set(1-y-v,v,y)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,wr)===null?!1:wr.x>=0&&wr.y>=0&&wr.x+wr.y<=1}static getInterpolation(e,t,i,s,o,c,u,h){return this.getBarycoord(e,t,i,s,wr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,wr.x),h.addScaledVector(c,wr.y),h.addScaledVector(u,wr.z),h)}static getInterpolatedAttribute(e,t,i,s,o,c){return Yh.setScalar(0),$h.setScalar(0),Kh.setScalar(0),Yh.fromBufferAttribute(e,t),$h.fromBufferAttribute(e,i),Kh.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector(Yh,o.x),c.addScaledVector($h,o.y),c.addScaledVector(Kh,o.z),c}static isFrontFacing(e,t,i,s){return Bi.subVectors(i,t),Mr.subVectors(e,t),Bi.cross(Mr).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),Mr.subVectors(this.a,this.b),Bi.cross(Mr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,o){return Wi.getInterpolation(e,this.a,this.b,this.c,t,i,s,o)}containsPoint(e){return Wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,o=this.c;let c,u;ya.subVectors(s,i),Sa.subVectors(o,i),Xh.subVectors(e,i);const h=ya.dot(Xh),f=Sa.dot(Xh);if(h<=0&&f<=0)return t.copy(i);jh.subVectors(e,s);const p=ya.dot(jh),g=Sa.dot(jh);if(p>=0&&g<=p)return t.copy(s);const m=h*g-p*f;if(m<=0&&h>=0&&p<=0)return c=h/(h-p),t.copy(i).addScaledVector(ya,c);qh.subVectors(e,o);const y=ya.dot(qh),v=Sa.dot(qh);if(v>=0&&y<=v)return t.copy(o);const w=y*f-h*v;if(w<=0&&f>=0&&v<=0)return u=f/(f-v),t.copy(i).addScaledVector(Sa,u);const _=p*v-y*g;if(_<=0&&g-p>=0&&y-v>=0)return J0.subVectors(o,s),u=(g-p)/(g-p+(y-v)),t.copy(s).addScaledVector(J0,u);const S=1/(_+w+m);return c=w*S,u=m*S,t.copy(i).addScaledVector(ya,c).addScaledVector(Sa,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Xs{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=o.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Hi):Hi.fromBufferAttribute(o,c),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ic.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ic.copy(i.boundingBox)),ic.applyMatrix4(e.matrixWorld),this.union(ic)}const s=e.children;for(let o=0,c=s.length;o<c;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),rc.subVectors(this.max,Lo),Ma.subVectors(e.a,Lo),wa.subVectors(e.b,Lo),ba.subVectors(e.c,Lo),ts.subVectors(wa,Ma),ns.subVectors(ba,wa),Ls.subVectors(Ma,ba);let t=[0,-ts.z,ts.y,0,-ns.z,ns.y,0,-Ls.z,Ls.y,ts.z,0,-ts.x,ns.z,0,-ns.x,Ls.z,0,-Ls.x,-ts.y,ts.x,0,-ns.y,ns.x,0,-Ls.y,Ls.x,0];return!Zh(t,Ma,wa,ba,rc)||(t=[1,0,0,0,1,0,0,0,1],!Zh(t,Ma,wa,ba,rc))?!1:(sc.crossVectors(ts,ns),t=[sc.x,sc.y,sc.z],Zh(t,Ma,wa,ba,rc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(br[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),br[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),br[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),br[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),br[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),br[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),br[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),br[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(br),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const br=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Hi=new Z,ic=new Xs,Ma=new Z,wa=new Z,ba=new Z,ts=new Z,ns=new Z,Ls=new Z,Lo=new Z,rc=new Z,sc=new Z,Is=new Z;function Zh(a,e,t,i,s){for(let o=0,c=a.length-3;o<=c;o+=3){Is.fromArray(a,o);const u=s.x*Math.abs(Is.x)+s.y*Math.abs(Is.y)+s.z*Math.abs(Is.z),h=e.dot(Is),f=t.dot(Is),p=i.dot(Is);if(Math.max(-Math.max(h,f,p),Math.min(h,f,p))>u)return!1}return!0}const pn=new Z,ac=new ht;let NS=0;class Sn extends Ws{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:NS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=O0,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ac.fromBufferAttribute(this,t),ac.applyMatrix3(e),this.setXY(t,ac.x,ac.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix3(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ia(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ia(t,this.array)),t}setX(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ia(t,this.array)),t}setY(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ia(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ia(t,this.array)),t}setW(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),i=jn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),i=jn(i,this.array),s=jn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),i=jn(i,this.array),s=jn(s,this.array),o=jn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==O0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Ox extends Sn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class zx extends Sn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Qt extends Sn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const FS=new Xs,Io=new Z,Qh=new Z;class js{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):FS.setFromPoints(e).getCenter(i);let s=0;for(let o=0,c=e.length;o<c;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const t=Io.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Io,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(Qh)),this.expandByPoint(Io.copy(e.center).sub(Qh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let US=0;const Ci=new Yt,Jh=new gn,Ea=new Z,pi=new Xs,No=new Xs,An=new Z;class cn extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eS(e)?zx:Ox)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Mt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,t,i){return Ci.makeTranslation(e,t,i),this.applyMatrix4(Ci),this}scale(e,t,i){return Ci.makeScale(e,t,i),this.applyMatrix4(Ci),this}lookAt(e){return Jh.lookAt(e),Jh.updateMatrix(),this.applyMatrix4(Jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ea).negate(),this.translate(Ea.x,Ea.y,Ea.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,o=e.length;s<o;s++){const c=e[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Qt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];pi.setFromBufferAttribute(o),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new js);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const u=t[o];No.setFromBufferAttribute(u),this.morphTargetsRelative?(An.addVectors(pi.min,No.min),pi.expandByPoint(An),An.addVectors(pi.max,No.max),pi.expandByPoint(An)):(pi.expandByPoint(No.min),pi.expandByPoint(No.max))}pi.getCenter(i);let s=0;for(let o=0,c=e.count;o<c;o++)An.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(An));if(t)for(let o=0,c=t.length;o<c;o++){const u=t[o],h=this.morphTargetsRelative;for(let f=0,p=u.count;f<p;f++)An.fromBufferAttribute(u,f),h&&(Ea.fromBufferAttribute(e,f),An.add(Ea)),s=Math.max(s,i.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],h=[];for(let T=0;T<i.count;T++)u[T]=new Z,h[T]=new Z;const f=new Z,p=new Z,g=new Z,m=new ht,y=new ht,v=new ht,w=new Z,_=new Z;function S(T,F,z){f.fromBufferAttribute(i,T),p.fromBufferAttribute(i,F),g.fromBufferAttribute(i,z),m.fromBufferAttribute(o,T),y.fromBufferAttribute(o,F),v.fromBufferAttribute(o,z),p.sub(f),g.sub(f),y.sub(m),v.sub(m);const D=1/(y.x*v.y-v.x*y.y);isFinite(D)&&(w.copy(p).multiplyScalar(v.y).addScaledVector(g,-y.y).multiplyScalar(D),_.copy(g).multiplyScalar(y.x).addScaledVector(p,-v.x).multiplyScalar(D),u[T].add(w),u[F].add(w),u[z].add(w),h[T].add(_),h[F].add(_),h[z].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let T=0,F=b.length;T<F;++T){const z=b[T],D=z.start,H=z.count;for(let te=D,se=D+H;te<se;te+=3)S(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const C=new Z,E=new Z,L=new Z,A=new Z;function I(T){L.fromBufferAttribute(s,T),A.copy(L);const F=u[T];C.copy(F),C.sub(L.multiplyScalar(L.dot(F))).normalize(),E.crossVectors(A,F);const D=E.dot(h[T])<0?-1:1;c.setXYZW(T,C.x,C.y,C.z,D)}for(let T=0,F=b.length;T<F;++T){const z=b[T],D=z.start,H=z.count;for(let te=D,se=D+H;te<se;te+=3)I(e.getX(te+0)),I(e.getX(te+1)),I(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,y=i.count;m<y;m++)i.setXYZ(m,0,0,0);const s=new Z,o=new Z,c=new Z,u=new Z,h=new Z,f=new Z,p=new Z,g=new Z;if(e)for(let m=0,y=e.count;m<y;m+=3){const v=e.getX(m+0),w=e.getX(m+1),_=e.getX(m+2);s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,w),c.fromBufferAttribute(t,_),p.subVectors(c,o),g.subVectors(s,o),p.cross(g),u.fromBufferAttribute(i,v),h.fromBufferAttribute(i,w),f.fromBufferAttribute(i,_),u.add(p),h.add(p),f.add(p),i.setXYZ(v,u.x,u.y,u.z),i.setXYZ(w,h.x,h.y,h.z),i.setXYZ(_,f.x,f.y,f.z)}else for(let m=0,y=t.count;m<y;m+=3)s.fromBufferAttribute(t,m+0),o.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),p.subVectors(c,o),g.subVectors(s,o),p.cross(g),i.setXYZ(m+0,p.x,p.y,p.z),i.setXYZ(m+1,p.x,p.y,p.z),i.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)An.fromBufferAttribute(e,t),An.normalize(),e.setXYZ(t,An.x,An.y,An.z)}toNonIndexed(){function e(u,h){const f=u.array,p=u.itemSize,g=u.normalized,m=new f.constructor(h.length*p);let y=0,v=0;for(let w=0,_=h.length;w<_;w++){u.isInterleavedBufferAttribute?y=h[w]*u.data.stride+u.offset:y=h[w]*p;for(let S=0;S<p;S++)m[v++]=f[y++]}return new Sn(m,p,g)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,i=this.index.array,s=this.attributes;for(const u in s){const h=s[u],f=e(h,i);t.setAttribute(u,f)}const o=this.morphAttributes;for(const u in o){const h=[],f=o[u];for(let p=0,g=f.length;p<g;p++){const m=f[p],y=e(m,i);h.push(y)}t.morphAttributes[u]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,h=c.length;u<h;u++){const f=c[u];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const f=i[h];e.data.attributes[h]=f.toJSON(e.data)}const s={};let o=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],p=[];for(let g=0,m=f.length;g<m;g++){const y=f[g];p.push(y.toJSON(e.data))}p.length>0&&(s[h]=p,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const f in s){const p=s[f];this.setAttribute(f,p.clone(t))}const o=e.morphAttributes;for(const f in o){const p=[],g=o[f];for(let m=0,y=g.length;m<y;m++)p.push(g[m].clone(t));this.morphAttributes[f]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let f=0,p=c.length;f<p;f++){const g=c[f];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let DS=0;class ji extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=ja(),this.name="",this.type="Material",this.blending=ka,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wf,this.blendDst=bf,this.blendEquation=ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=k0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ma,this.stencilZFail=ma,this.stencilZPass=ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){dt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){dt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ka&&(i.blending=this.blending),this.side!==cs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wf&&(i.blendSrc=this.blendSrc),this.blendDst!==bf&&(i.blendDst=this.blendDst),this.blendEquation!==ks&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ha&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==k0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ma&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ma&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ma&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}if(t){const o=s(e.textures),c=s(e.images);o.length>0&&(i.textures=o),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Er=new Z,ef=new Z,oc=new Z,is=new Z,tf=new Z,lc=new Z,nf=new Z;class zd{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Er)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Er.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Er.copy(this.origin).addScaledVector(this.direction,t),Er.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){ef.copy(e).add(t).multiplyScalar(.5),oc.copy(t).sub(e).normalize(),is.copy(this.origin).sub(ef);const o=e.distanceTo(t)*.5,c=-this.direction.dot(oc),u=is.dot(this.direction),h=-is.dot(oc),f=is.lengthSq(),p=Math.abs(1-c*c);let g,m,y,v;if(p>0)if(g=c*h-u,m=c*u-h,v=o*p,g>=0)if(m>=-v)if(m<=v){const w=1/p;g*=w,m*=w,y=g*(g+c*m+2*u)+m*(c*g+m+2*h)+f}else m=o,g=Math.max(0,-(c*m+u)),y=-g*g+m*(m+2*h)+f;else m=-o,g=Math.max(0,-(c*m+u)),y=-g*g+m*(m+2*h)+f;else m<=-v?(g=Math.max(0,-(-c*o+u)),m=g>0?-o:Math.min(Math.max(-o,-h),o),y=-g*g+m*(m+2*h)+f):m<=v?(g=0,m=Math.min(Math.max(-o,-h),o),y=m*(m+2*h)+f):(g=Math.max(0,-(c*o+u)),m=g>0?o:Math.min(Math.max(-o,-h),o),y=-g*g+m*(m+2*h)+f);else m=c>0?-o:o,g=Math.max(0,-(c*m+u)),y=-g*g+m*(m+2*h)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(ef).addScaledVector(oc,m),y}intersectSphere(e,t){Er.subVectors(e.center,this.origin);const i=Er.dot(this.direction),s=Er.dot(Er)-i*i,o=e.radius*e.radius;if(s>o)return null;const c=Math.sqrt(o-s),u=i-c,h=i+c;return h<0?null:u<0?this.at(h,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,o,c,u,h;const f=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,m=this.origin;return f>=0?(i=(e.min.x-m.x)*f,s=(e.max.x-m.x)*f):(i=(e.max.x-m.x)*f,s=(e.min.x-m.x)*f),p>=0?(o=(e.min.y-m.y)*p,c=(e.max.y-m.y)*p):(o=(e.max.y-m.y)*p,c=(e.min.y-m.y)*p),i>c||o>s||((o>i||isNaN(i))&&(i=o),(c<s||isNaN(s))&&(s=c),g>=0?(u=(e.min.z-m.z)*g,h=(e.max.z-m.z)*g):(u=(e.max.z-m.z)*g,h=(e.min.z-m.z)*g),i>h||u>s)||((u>i||i!==i)&&(i=u),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Er)!==null}intersectTriangle(e,t,i,s,o){tf.subVectors(t,e),lc.subVectors(i,e),nf.crossVectors(tf,lc);let c=this.direction.dot(nf),u;if(c>0){if(s)return null;u=1}else if(c<0)u=-1,c=-c;else return null;is.subVectors(this.origin,e);const h=u*this.direction.dot(lc.crossVectors(is,lc));if(h<0)return null;const f=u*this.direction.dot(tf.cross(is));if(f<0||h+f>c)return null;const p=-u*is.dot(nf);return p<0?null:this.at(p/c,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yc extends ji{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ir,this.combine=Cd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const eg=new Yt,Ns=new zd,cc=new js,tg=new Z,uc=new Z,hc=new Z,fc=new Z,rf=new Z,dc=new Z,ng=new Z,pc=new Z;class un extends gn{constructor(e=new cn,t=new Yc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(o&&u){dc.set(0,0,0);for(let h=0,f=o.length;h<f;h++){const p=u[h],g=o[h];p!==0&&(rf.fromBufferAttribute(g,e),c?dc.addScaledVector(rf,p):dc.addScaledVector(rf.sub(t),p))}t.add(dc)}return t}raycast(e,t){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),cc.copy(i.boundingSphere),cc.applyMatrix4(o),Ns.copy(e.ray).recast(e.near),!(cc.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(cc,tg)===null||Ns.origin.distanceToSquared(tg)>(e.far-e.near)**2))&&(eg.copy(o).invert(),Ns.copy(e.ray).applyMatrix4(eg),!(i.boundingBox!==null&&Ns.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ns)))}_computeIntersections(e,t,i){let s;const o=this.geometry,c=this.material,u=o.index,h=o.attributes.position,f=o.attributes.uv,p=o.attributes.uv1,g=o.attributes.normal,m=o.groups,y=o.drawRange;if(u!==null)if(Array.isArray(c))for(let v=0,w=m.length;v<w;v++){const _=m[v],S=c[_.materialIndex],b=Math.max(_.start,y.start),C=Math.min(u.count,Math.min(_.start+_.count,y.start+y.count));for(let E=b,L=C;E<L;E+=3){const A=u.getX(E),I=u.getX(E+1),T=u.getX(E+2);s=mc(this,S,e,i,f,p,g,A,I,T),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const v=Math.max(0,y.start),w=Math.min(u.count,y.start+y.count);for(let _=v,S=w;_<S;_+=3){const b=u.getX(_),C=u.getX(_+1),E=u.getX(_+2);s=mc(this,c,e,i,f,p,g,b,C,E),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(c))for(let v=0,w=m.length;v<w;v++){const _=m[v],S=c[_.materialIndex],b=Math.max(_.start,y.start),C=Math.min(h.count,Math.min(_.start+_.count,y.start+y.count));for(let E=b,L=C;E<L;E+=3){const A=E,I=E+1,T=E+2;s=mc(this,S,e,i,f,p,g,A,I,T),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const v=Math.max(0,y.start),w=Math.min(h.count,y.start+y.count);for(let _=v,S=w;_<S;_+=3){const b=_,C=_+1,E=_+2;s=mc(this,c,e,i,f,p,g,b,C,E),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function kS(a,e,t,i,s,o,c,u){let h;if(e.side===si?h=i.intersectTriangle(c,o,s,!0,u):h=i.intersectTriangle(s,o,c,e.side===cs,u),h===null)return null;pc.copy(u),pc.applyMatrix4(a.matrixWorld);const f=t.ray.origin.distanceTo(pc);return f<t.near||f>t.far?null:{distance:f,point:pc.clone(),object:a}}function mc(a,e,t,i,s,o,c,u,h,f){a.getVertexPosition(u,uc),a.getVertexPosition(h,hc),a.getVertexPosition(f,fc);const p=kS(a,e,t,i,uc,hc,fc,ng);if(p){const g=new Z;Wi.getBarycoord(ng,uc,hc,fc,g),s&&(p.uv=Wi.getInterpolatedAttribute(s,u,h,f,g,new ht)),o&&(p.uv1=Wi.getInterpolatedAttribute(o,u,h,f,g,new ht)),c&&(p.normal=Wi.getInterpolatedAttribute(c,u,h,f,g,new Z),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const m={a:u,b:h,c:f,normal:new Z,materialIndex:0};Wi.getNormal(uc,hc,fc,m.normal),p.face=m,p.barycoord=g}return p}class Bd extends Gn{constructor(e=null,t=1,i=1,s,o,c,u,h,f=Un,p=Un,g,m){super(null,c,u,h,f,p,s,o,g,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ig extends Sn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ta=new Yt,rg=new Yt,gc=[],sg=new Xs,OS=new Yt,Fo=new un,Uo=new js;class zS extends un{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ig(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,OS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ta),sg.copy(e.boundingBox).applyMatrix4(Ta),this.boundingBox.union(sg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new js),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ta),Uo.copy(e.boundingSphere).applyMatrix4(Ta),this.boundingSphere.union(Uo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,o=i.length+1,c=e*o+1;for(let u=0;u<i.length;u++)i[u]=s[c+u]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Fo.geometry=this.geometry,Fo.material=this.material,Fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uo.copy(this.boundingSphere),Uo.applyMatrix4(i),e.ray.intersectsSphere(Uo)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Ta),rg.multiplyMatrices(i,Ta),Fo.matrixWorld=rg,Fo.raycast(e,gc);for(let c=0,u=gc.length;c<u;c++){const h=gc[c];h.instanceId=o,h.object=this,t.push(h)}gc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ig(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Bd(new Float32Array(s*this.count),s,this.count,Ld,Xi));const o=this.morphTexture.source.data.data;let c=0;for(let f=0;f<i.length;f++)c+=i[f];const u=this.geometry.morphTargetsRelative?1:1-c,h=s*e;return o[h]=u,o.set(i,h+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const sf=new Z,BS=new Z,HS=new Mt;class Ds{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=sf.subVectors(i,t).cross(BS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(sf),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return i===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||HS.getNormalMatrix(e),s=this.coplanarPoint(sf).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fs=new js,GS=new ht(.5,.5),xc=new Z;class Hd{constructor(e=new Ds,t=new Ds,i=new Ds,s=new Ds,o=new Ds,c=new Ds){this.planes=[e,t,i,s,o,c]}set(e,t,i,s,o,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(s),u[4].copy(o),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=nr,i=!1){const s=this.planes,o=e.elements,c=o[0],u=o[1],h=o[2],f=o[3],p=o[4],g=o[5],m=o[6],y=o[7],v=o[8],w=o[9],_=o[10],S=o[11],b=o[12],C=o[13],E=o[14],L=o[15];if(s[0].setComponents(f-c,y-p,S-v,L-b).normalize(),s[1].setComponents(f+c,y+p,S+v,L+b).normalize(),s[2].setComponents(f+u,y+g,S+w,L+C).normalize(),s[3].setComponents(f-u,y-g,S-w,L-C).normalize(),i)s[4].setComponents(h,m,_,E).normalize(),s[5].setComponents(f-h,y-m,S-_,L-E).normalize();else if(s[4].setComponents(f-h,y-m,S-_,L-E).normalize(),t===nr)s[5].setComponents(f+h,y+m,S+_,L+E).normalize();else if(t===Yo)s[5].setComponents(h,m,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(e){Fs.center.set(0,0,0);const t=GS.distanceTo(e.center);return Fs.radius=.7071067811865476+t,Fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(xc.x=s.normal.x>0?e.max.x:e.min.x,xc.y=s.normal.y>0?e.max.y:e.min.y,xc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(xc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wo extends ji{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bc=new Z,Hc=new Z,ag=new Yt,Do=new zd,vc=new js,af=new Z,og=new Z;class Bx extends gn{constructor(e=new cn,t=new Wo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,o=t.count;s<o;s++)Bc.fromBufferAttribute(t,s-1),Hc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Bc.distanceTo(Hc);e.setAttribute("lineDistance",new Qt(i,1))}else dt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),vc.copy(i.boundingSphere),vc.applyMatrix4(s),vc.radius+=o,e.ray.intersectsSphere(vc)===!1)return;ag.copy(s).invert(),Do.copy(e.ray).applyMatrix4(ag);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,f=this.isLineSegments?2:1,p=i.index,m=i.attributes.position;if(p!==null){const y=Math.max(0,c.start),v=Math.min(p.count,c.start+c.count);for(let w=y,_=v-1;w<_;w+=f){const S=p.getX(w),b=p.getX(w+1),C=_c(this,e,Do,h,S,b,w);C&&t.push(C)}if(this.isLineLoop){const w=p.getX(v-1),_=p.getX(y),S=_c(this,e,Do,h,w,_,v-1);S&&t.push(S)}}else{const y=Math.max(0,c.start),v=Math.min(m.count,c.start+c.count);for(let w=y,_=v-1;w<_;w+=f){const S=_c(this,e,Do,h,w,w+1,w);S&&t.push(S)}if(this.isLineLoop){const w=_c(this,e,Do,h,v-1,y,v-1);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function _c(a,e,t,i,s,o,c){const u=a.geometry.attributes.position;if(Bc.fromBufferAttribute(u,s),Hc.fromBufferAttribute(u,o),t.distanceSqToSegment(Bc,Hc,af,og)>i)return;af.applyMatrix4(a.matrixWorld);const f=e.ray.origin.distanceTo(af);if(!(f<e.near||f>e.far))return{distance:f,point:og.clone().applyMatrix4(a.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:a}}const lg=new Z,cg=new Z;class hd extends Bx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,o=t.count;s<o;s+=2)lg.fromBufferAttribute(t,s),cg.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+lg.distanceTo(cg);e.setAttribute("lineDistance",new Qt(i,1))}else dt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class os extends ji{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ug=new Yt,fd=new zd,yc=new js,Sc=new Z;class Pr extends gn{constructor(e=new cn,t=new os){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),yc.copy(i.boundingSphere),yc.applyMatrix4(s),yc.radius+=o,e.ray.intersectsSphere(yc)===!1)return;ug.copy(s).invert(),fd.copy(e.ray).applyMatrix4(ug);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,f=i.index,g=i.attributes.position;if(f!==null){const m=Math.max(0,c.start),y=Math.min(f.count,c.start+c.count);for(let v=m,w=y;v<w;v++){const _=f.getX(v);Sc.fromBufferAttribute(g,_),hg(Sc,_,h,s,e,t,this)}}else{const m=Math.max(0,c.start),y=Math.min(g.count,c.start+c.count);for(let v=m,w=y;v<w;v++)Sc.fromBufferAttribute(g,v),hg(Sc,v,h,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function hg(a,e,t,i,s,o,c){const u=fd.distanceSqToPoint(a);if(u<t){const h=new Z;fd.closestPointToPoint(a,h),h.applyMatrix4(i);const f=s.ray.origin.distanceTo(h);if(f<s.near||f>s.far)return;o.push({distance:f,distanceToRay:Math.sqrt(u),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class VS extends Gn{constructor(e,t,i,s,o=mn,c=mn,u,h,f){super(e,t,i,s,o,c,u,h,f),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const p=this;function g(){p.needsUpdate=!0,p._requestVideoFrameCallbackId=e.requestVideoFrameCallback(g)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(g))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class Hx extends Gn{constructor(e=[],t=Hs,i,s,o,c,u,h,f,p){super(e,t,i,s,o,c,u,h,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Va extends Gn{constructor(e,t,i=or,s,o,c,u=Un,h=Un,f,p=Lr,g=1){if(p!==Lr&&p!==Bs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:g};super(m,s,o,c,u,h,p,i,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Od(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class WS extends Va{constructor(e,t=or,i=Hs,s,o,c=Un,u=Un,h,f=Lr){const p={width:e,height:e,depth:1},g=[p,p,p,p,p,p];super(e,e,t,i,s,o,c,u,h,f),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Gx extends Gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ya extends cn{constructor(e=1,t=1,i=1,s=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:o,depthSegments:c};const u=this;s=Math.floor(s),o=Math.floor(o),c=Math.floor(c);const h=[],f=[],p=[],g=[];let m=0,y=0;v("z","y","x",-1,-1,i,t,e,c,o,0),v("z","y","x",1,-1,i,t,-e,c,o,1),v("x","z","y",1,1,e,i,t,s,c,2),v("x","z","y",1,-1,e,i,-t,s,c,3),v("x","y","z",1,-1,e,t,i,s,o,4),v("x","y","z",-1,-1,e,t,-i,s,o,5),this.setIndex(h),this.setAttribute("position",new Qt(f,3)),this.setAttribute("normal",new Qt(p,3)),this.setAttribute("uv",new Qt(g,2));function v(w,_,S,b,C,E,L,A,I,T,F){const z=E/I,D=L/T,H=E/2,te=L/2,se=A/2,W=I+1,V=T+1;let X=0,j=0;const ie=new Z;for(let Q=0;Q<V;Q++){const O=Q*D-te;for(let ee=0;ee<W;ee++){const me=ee*z-H;ie[w]=me*b,ie[_]=O*C,ie[S]=se,f.push(ie.x,ie.y,ie.z),ie[w]=0,ie[_]=0,ie[S]=A>0?1:-1,p.push(ie.x,ie.y,ie.z),g.push(ee/I),g.push(1-Q/T),X+=1}}for(let Q=0;Q<T;Q++)for(let O=0;O<I;O++){const ee=m+O+W*Q,me=m+O+W*(Q+1),we=m+(O+1)+W*(Q+1),ve=m+(O+1)+W*Q;h.push(ee,me,ve),h.push(me,we,ve),j+=6}u.addGroup(y,j,F),y+=j,m+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Gd extends cn{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const o=[],c=[];u(s),f(i),p(),this.setAttribute("position",new Qt(o,3)),this.setAttribute("normal",new Qt(o.slice(),3)),this.setAttribute("uv",new Qt(c,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function u(b){const C=new Z,E=new Z,L=new Z;for(let A=0;A<t.length;A+=3)y(t[A+0],C),y(t[A+1],E),y(t[A+2],L),h(C,E,L,b)}function h(b,C,E,L){const A=L+1,I=[];for(let T=0;T<=A;T++){I[T]=[];const F=b.clone().lerp(E,T/A),z=C.clone().lerp(E,T/A),D=A-T;for(let H=0;H<=D;H++)H===0&&T===A?I[T][H]=F:I[T][H]=F.clone().lerp(z,H/D)}for(let T=0;T<A;T++)for(let F=0;F<2*(A-T)-1;F++){const z=Math.floor(F/2);F%2===0?(m(I[T][z+1]),m(I[T+1][z]),m(I[T][z])):(m(I[T][z+1]),m(I[T+1][z+1]),m(I[T+1][z]))}}function f(b){const C=new Z;for(let E=0;E<o.length;E+=3)C.x=o[E+0],C.y=o[E+1],C.z=o[E+2],C.normalize().multiplyScalar(b),o[E+0]=C.x,o[E+1]=C.y,o[E+2]=C.z}function p(){const b=new Z;for(let C=0;C<o.length;C+=3){b.x=o[C+0],b.y=o[C+1],b.z=o[C+2];const E=_(b)/2/Math.PI+.5,L=S(b)/Math.PI+.5;c.push(E,1-L)}v(),g()}function g(){for(let b=0;b<c.length;b+=6){const C=c[b+0],E=c[b+2],L=c[b+4],A=Math.max(C,E,L),I=Math.min(C,E,L);A>.9&&I<.1&&(C<.2&&(c[b+0]+=1),E<.2&&(c[b+2]+=1),L<.2&&(c[b+4]+=1))}}function m(b){o.push(b.x,b.y,b.z)}function y(b,C){const E=b*3;C.x=e[E+0],C.y=e[E+1],C.z=e[E+2]}function v(){const b=new Z,C=new Z,E=new Z,L=new Z,A=new ht,I=new ht,T=new ht;for(let F=0,z=0;F<o.length;F+=9,z+=6){b.set(o[F+0],o[F+1],o[F+2]),C.set(o[F+3],o[F+4],o[F+5]),E.set(o[F+6],o[F+7],o[F+8]),A.set(c[z+0],c[z+1]),I.set(c[z+2],c[z+3]),T.set(c[z+4],c[z+5]),L.copy(b).add(C).add(E).divideScalar(3);const D=_(L);w(A,z+0,b,D),w(I,z+2,C,D),w(T,z+4,E,D)}}function w(b,C,E,L){L<0&&b.x===1&&(c[C]=b.x-1),E.x===0&&E.z===0&&(c[C]=L/2/Math.PI+.5)}function _(b){return Math.atan2(b.z,-b.x)}function S(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gd(e.vertices,e.indices,e.radius,e.detail)}}class Vd extends Gd{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Vd(e.radius,e.detail)}}class Nr extends cn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const o=e/2,c=t/2,u=Math.floor(i),h=Math.floor(s),f=u+1,p=h+1,g=e/u,m=t/h,y=[],v=[],w=[],_=[];for(let S=0;S<p;S++){const b=S*m-c;for(let C=0;C<f;C++){const E=C*g-o;v.push(E,-b,0),w.push(0,0,1),_.push(C/u),_.push(1-S/h)}}for(let S=0;S<h;S++)for(let b=0;b<u;b++){const C=b+f*S,E=b+f*(S+1),L=b+1+f*(S+1),A=b+1+f*S;y.push(C,E,A),y.push(E,L,A)}this.setIndex(y),this.setAttribute("position",new Qt(v,3)),this.setAttribute("normal",new Qt(w,3)),this.setAttribute("uv",new Qt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wd extends cn{constructor(e=1,t=.4,i=64,s=8,o=2,c=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:s,p:o,q:c},i=Math.floor(i),s=Math.floor(s);const u=[],h=[],f=[],p=[],g=new Z,m=new Z,y=new Z,v=new Z,w=new Z,_=new Z,S=new Z;for(let C=0;C<=i;++C){const E=C/i*o*Math.PI*2;b(E,o,c,e,y),b(E+.01,o,c,e,v),_.subVectors(v,y),S.addVectors(v,y),w.crossVectors(_,S),S.crossVectors(w,_),w.normalize(),S.normalize();for(let L=0;L<=s;++L){const A=L/s*Math.PI*2,I=-t*Math.cos(A),T=t*Math.sin(A);g.x=y.x+(I*S.x+T*w.x),g.y=y.y+(I*S.y+T*w.y),g.z=y.z+(I*S.z+T*w.z),h.push(g.x,g.y,g.z),m.subVectors(g,y).normalize(),f.push(m.x,m.y,m.z),p.push(C/i),p.push(L/s)}}for(let C=1;C<=i;C++)for(let E=1;E<=s;E++){const L=(s+1)*(C-1)+(E-1),A=(s+1)*C+(E-1),I=(s+1)*C+E,T=(s+1)*(C-1)+E;u.push(L,A,T),u.push(A,I,T)}this.setIndex(u),this.setAttribute("position",new Qt(h,3)),this.setAttribute("normal",new Qt(f,3)),this.setAttribute("uv",new Qt(p,2));function b(C,E,L,A,I){const T=Math.cos(C),F=Math.sin(C),z=L/E*C,D=Math.cos(z);I.x=A*(2+D)*.5*T,I.y=A*(2+D)*F*.5,I.z=A*Math.sin(z)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wd(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}function Wa(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const s=a[t][i];if(fg(s))s.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(fg(s[0])){const o=[];for(let c=0,u=s.length;c<u;c++)o[c]=s[c].clone();e[t][i]=o}else e[t][i]=s.slice();else e[t][i]=s}}return e}function qn(a){const e={};for(let t=0;t<a.length;t++){const i=Wa(a[t]);for(const s in i)e[s]=i[s]}return e}function fg(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function XS(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Vx(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const Gc={clone:Wa,merge:qn};var jS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends ji{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jS,this.fragmentShader=qS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wa(e.uniforms),this.uniformsGroups=XS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class YS extends ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wx extends ji{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dc,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ir,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $S extends ji{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ke(16777215),this.specular=new Ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dc,this.normalScale=new ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ir,this.combine=Cd,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class KS extends ji{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ZS extends ji{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dg={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(pg(a)||(this.files[a]=e))},get:function(a){if(this.enabled!==!1&&!pg(a))return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};function pg(a){try{const e=a.slice(a.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class QS{constructor(e,t,i){const s=this;let o=!1,c=0,u=0,h;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(p){u++,o===!1&&s.onStart!==void 0&&s.onStart(p,c,u),o=!0},this.itemEnd=function(p){c++,s.onProgress!==void 0&&s.onProgress(p,c,u),c===u&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,g){return f.push(p,g),this},this.removeHandler=function(p){const g=f.indexOf(p);return g!==-1&&f.splice(g,2),this},this.getHandler=function(p){for(let g=0,m=f.length;g<m;g+=2){const y=f[g],v=f[g+1];if(y.global&&(y.lastIndex=0),y.test(p))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const JS=new QS;class Xd{constructor(e){this.manager=e!==void 0?e:JS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,o){i.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Xd.DEFAULT_MATERIAL_NAME="__DEFAULT";const Tr={};class eM extends Error{constructor(e,t){super(e),this.response=t}}class tM extends Xd{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=dg.get(`file:${e}`);if(o!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0);return}if(Tr[e]!==void 0){Tr[e].push({onLoad:t,onProgress:i,onError:s});return}Tr[e]=[],Tr[e].push({onLoad:t,onProgress:i,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),u=this.mimeType,h=this.responseType;fetch(c).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&dt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const p=Tr[e],g=f.body.getReader(),m=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),y=m?parseInt(m):0,v=y!==0;let w=0;const _=new ReadableStream({start(S){b();function b(){g.read().then(({done:C,value:E})=>{if(C)S.close();else{w+=E.byteLength;const L=new ProgressEvent("progress",{lengthComputable:v,loaded:w,total:y});for(let A=0,I=p.length;A<I;A++){const T=p[A];T.onProgress&&T.onProgress(L)}S.enqueue(E),b()}},C=>{S.error(C)})}}});return new Response(_)}else throw new eM(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(h){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(p=>new DOMParser().parseFromString(p,u));case"json":return f.json();default:if(u==="")return f.text();{const g=/charset="?([^;"\s]*)"?/i.exec(u),m=g&&g[1]?g[1].toLowerCase():void 0,y=new TextDecoder(m);return f.arrayBuffer().then(v=>y.decode(v))}}}).then(f=>{dg.add(`file:${e}`,f);const p=Tr[e];delete Tr[e];for(let g=0,m=p.length;g<m;g++){const y=p[g];y.onLoad&&y.onLoad(f)}}).catch(f=>{const p=Tr[e];if(p===void 0)throw this.manager.itemError(e),f;delete Tr[e];for(let g=0,m=p.length;g<m;g++){const y=p[g];y.onError&&y.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class jd extends gn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const of=new Yt,mg=new Z,gg=new Z;class Xx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ht(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new Yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hd,this._frameExtents=new ht(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;mg.setFromMatrixPosition(e.matrixWorld),t.position.copy(mg),gg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gg),t.updateMatrixWorld(),of.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(of,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Yo||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(of)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Mc=new Z,wc=new qa,Ji=new Z;class jx extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yt,this.projectionMatrix=new Yt,this.projectionMatrixInverse=new Yt,this.coordinateSystem=nr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Mc,wc,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mc,wc,Ji.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Mc,wc,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mc,wc,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rs=new Z,xg=new ht,vg=new ht;class Pn extends jx{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$o*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $o*2*Math.atan(Math.tan(Go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rs.x,rs.y).multiplyScalar(-e/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rs.x,rs.y).multiplyScalar(-e/rs.z)}getViewSize(e,t){return this.getViewBounds(e,xg,vg),t.subVectors(vg,xg)}setViewOffset(e,t,i,s,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Go*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,o=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,f=c.fullHeight;o+=c.offsetX*s/h,t-=c.offsetY*i/f,s*=c.width/h,i*=c.height/f}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class nM extends Xx{constructor(){super(new Pn(90,1,.5,500)),this.isPointLightShadow=!0}}class Vc extends jd{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new nM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class $a extends jx{constructor(e=-1,t=1,i=1,s=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,c=i+e,u=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,c=o+f*this.view.width,u-=p*this.view.offsetY,h=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,c,u,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class iM extends Xx{constructor(){super(new $a(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lf extends jd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gn.DEFAULT_UP),this.updateMatrix(),this.target=new gn,this.shadow=new iM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class qx extends jd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ca=-90,Aa=1;class rM extends gn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Pn(Ca,Aa,e,t);s.layers=this.layers,this.add(s);const o=new Pn(Ca,Aa,e,t);o.layers=this.layers,this.add(o);const c=new Pn(Ca,Aa,e,t);c.layers=this.layers,this.add(c);const u=new Pn(Ca,Aa,e,t);u.layers=this.layers,this.add(u);const h=new Pn(Ca,Aa,e,t);h.layers=this.layers,this.add(h);const f=new Pn(Ca,Aa,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,o,c,u,h]=t;for(const f of t)this.remove(f);if(e===nr)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Yo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,c,u,h,f,p]=this.children,g=e.getRenderTarget(),m=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,1,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(i,3,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(i,4,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(g,m,y),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class sM extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class aM{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=oM.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function oM(){this._document.hidden===!1&&this.reset()}const Qd=class Qd{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const o=this.elements;return o[0]=e,o[2]=t,o[1]=i,o[3]=s,this}};Qd.prototype.isMatrix2=!0;let _g=Qd;function yg(a,e,t,i){const s=lM(i);switch(t){case Ix:return a*e;case Ld:return a*e/s.components*s.byteLength;case Id:return a*e/s.components*s.byteLength;case Gs:return a*e*2/s.components*s.byteLength;case Nd:return a*e*2/s.components*s.byteLength;case Nx:return a*e*3/s.components*s.byteLength;case vi:return a*e*4/s.components*s.byteLength;case Fd:return a*e*4/s.components*s.byteLength;case Ac:case Rc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Pc:case Lc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Uf:case kf:return Math.max(a,16)*Math.max(e,8)/4;case Ff:case Df:return Math.max(a,8)*Math.max(e,8)/2;case Of:case zf:case Hf:case Gf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Bf:case Fc:case Vf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Wf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Xf:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case jf:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case qf:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Yf:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case $f:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Kf:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Zf:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Qf:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Jf:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case ed:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case td:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case nd:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case id:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case rd:case sd:case ad:return Math.ceil(a/4)*Math.ceil(e/4)*16;case od:case ld:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Uc:case cd:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lM(a){switch(a){case xi:case Ax:return{byteLength:1,components:1};case jo:case Rx:case _i:return{byteLength:2,components:1};case Rd:case Pd:return{byteLength:2,components:4};case or:case Ad:case Xi:return{byteLength:4,components:1};case Px:case Lx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Td}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Td);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yx(){let a=null,e=!1,t=null,i=null;function s(o,c){t(o,c),i=a.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&a!==null&&(i=a.requestAnimationFrame(s),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){a=o}}}function cM(a){const e=new WeakMap;function t(u,h){const f=u.array,p=u.usage,g=f.byteLength,m=a.createBuffer();a.bindBuffer(h,m),a.bufferData(h,f,p),u.onUploadCallback();let y;if(f instanceof Float32Array)y=a.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)y=a.HALF_FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?y=a.HALF_FLOAT:y=a.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=a.SHORT;else if(f instanceof Uint32Array)y=a.UNSIGNED_INT;else if(f instanceof Int32Array)y=a.INT;else if(f instanceof Int8Array)y=a.BYTE;else if(f instanceof Uint8Array)y=a.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:g}}function i(u,h,f){const p=h.array,g=h.updateRanges;if(a.bindBuffer(f,u),g.length===0)a.bufferSubData(f,0,p);else{g.sort((y,v)=>y.start-v.start);let m=0;for(let y=1;y<g.length;y++){const v=g[m],w=g[y];w.start<=v.start+v.count+1?v.count=Math.max(v.count,w.start+w.count-v.start):(++m,g[m]=w)}g.length=m+1;for(let y=0,v=g.length;y<v;y++){const w=g[y];a.bufferSubData(f,w.start*p.BYTES_PER_ELEMENT,p,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=e.get(u);h&&(a.deleteBuffer(h.buffer),e.delete(u))}function c(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const f=e.get(u);if(f===void 0)e.set(u,t(u,h));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,u,h),f.version=u.version}}return{get:s,remove:o,update:c}}var uM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hM=`#ifdef USE_ALPHAHASH
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
#endif`,fM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gM=`#ifdef USE_AOMAP
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
#endif`,xM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vM=`#ifdef USE_BATCHING
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
#endif`,_M=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,SM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,MM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wM=`#ifdef USE_IRIDESCENCE
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
#endif`,bM=`#ifdef USE_BUMPMAP
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
#endif`,EM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,TM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,AM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,PM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,LM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,IM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,NM=`#define PI 3.141592653589793
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
} // validated`,FM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,UM=`vec3 transformedNormal = objectNormal;
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
#endif`,DM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,BM="gl_FragColor = linearToOutputTexel( gl_FragColor );",HM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GM=`#ifdef USE_ENVMAP
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
#endif`,VM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,WM=`#ifdef USE_ENVMAP
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
#endif`,XM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jM=`#ifdef USE_ENVMAP
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
#endif`,qM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,YM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$M=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,KM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ZM=`#ifdef USE_GRADIENTMAP
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
}`,QM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ew=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tw=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,nw=`#ifdef USE_ENVMAP
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
#endif`,iw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,aw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ow=`PhysicalMaterial material;
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
#endif`,lw=`uniform sampler2D dfgLUT;
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
}`,cw=`
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
#endif`,uw=`#if defined( RE_IndirectDiffuse )
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
#endif`,hw=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fw=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,dw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_w=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yw=`#if defined( USE_POINTS_UV )
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
#endif`,Sw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ww=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ew=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tw=`#ifdef USE_MORPHTARGETS
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
#endif`,Cw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Aw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Rw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nw=`#ifdef USE_NORMALMAP
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
#endif`,Fw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Uw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ow=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Bw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ww=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$w=`float getShadowMask() {
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
}`,Kw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zw=`#ifdef USE_SKINNING
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
#endif`,Qw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jw=`#ifdef USE_SKINNING
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
#endif`,eb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ib=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rb=`#ifdef USE_TRANSMISSION
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
#endif`,sb=`#ifdef USE_TRANSMISSION
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
#endif`,ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ub=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hb=`uniform sampler2D t2D;
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
}`,fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,db=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gb=`#include <common>
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
}`,xb=`#if DEPTH_PACKING == 3200
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
}`,vb=`#define DISTANCE
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
}`,_b=`#define DISTANCE
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
}`,yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mb=`uniform float scale;
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
}`,wb=`uniform vec3 diffuse;
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
}`,bb=`#include <common>
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
}`,Eb=`uniform vec3 diffuse;
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
}`,Tb=`#define LAMBERT
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
}`,Cb=`#define LAMBERT
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
}`,Ab=`#define MATCAP
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
}`,Rb=`#define MATCAP
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
}`,Pb=`#define NORMAL
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
}`,Lb=`#define NORMAL
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
}`,Ib=`#define PHONG
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
}`,Nb=`#define PHONG
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
}`,Fb=`#define STANDARD
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
}`,Ub=`#define STANDARD
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
}`,Db=`#define TOON
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
}`,kb=`#define TOON
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
}`,Ob=`uniform float size;
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
}`,zb=`uniform vec3 diffuse;
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
}`,Bb=`#include <common>
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
}`,Hb=`uniform vec3 color;
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
}`,Gb=`uniform float rotation;
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
}`,Vb=`uniform vec3 diffuse;
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
}`,bt={alphahash_fragment:uM,alphahash_pars_fragment:hM,alphamap_fragment:fM,alphamap_pars_fragment:dM,alphatest_fragment:pM,alphatest_pars_fragment:mM,aomap_fragment:gM,aomap_pars_fragment:xM,batching_pars_vertex:vM,batching_vertex:_M,begin_vertex:yM,beginnormal_vertex:SM,bsdfs:MM,iridescence_fragment:wM,bumpmap_pars_fragment:bM,clipping_planes_fragment:EM,clipping_planes_pars_fragment:TM,clipping_planes_pars_vertex:CM,clipping_planes_vertex:AM,color_fragment:RM,color_pars_fragment:PM,color_pars_vertex:LM,color_vertex:IM,common:NM,cube_uv_reflection_fragment:FM,defaultnormal_vertex:UM,displacementmap_pars_vertex:DM,displacementmap_vertex:kM,emissivemap_fragment:OM,emissivemap_pars_fragment:zM,colorspace_fragment:BM,colorspace_pars_fragment:HM,envmap_fragment:GM,envmap_common_pars_fragment:VM,envmap_pars_fragment:WM,envmap_pars_vertex:XM,envmap_physical_pars_fragment:nw,envmap_vertex:jM,fog_vertex:qM,fog_pars_vertex:YM,fog_fragment:$M,fog_pars_fragment:KM,gradientmap_pars_fragment:ZM,lightmap_pars_fragment:QM,lights_lambert_fragment:JM,lights_lambert_pars_fragment:ew,lights_pars_begin:tw,lights_toon_fragment:iw,lights_toon_pars_fragment:rw,lights_phong_fragment:sw,lights_phong_pars_fragment:aw,lights_physical_fragment:ow,lights_physical_pars_fragment:lw,lights_fragment_begin:cw,lights_fragment_maps:uw,lights_fragment_end:hw,lightprobes_pars_fragment:fw,logdepthbuf_fragment:dw,logdepthbuf_pars_fragment:pw,logdepthbuf_pars_vertex:mw,logdepthbuf_vertex:gw,map_fragment:xw,map_pars_fragment:vw,map_particle_fragment:_w,map_particle_pars_fragment:yw,metalnessmap_fragment:Sw,metalnessmap_pars_fragment:Mw,morphinstance_vertex:ww,morphcolor_vertex:bw,morphnormal_vertex:Ew,morphtarget_pars_vertex:Tw,morphtarget_vertex:Cw,normal_fragment_begin:Aw,normal_fragment_maps:Rw,normal_pars_fragment:Pw,normal_pars_vertex:Lw,normal_vertex:Iw,normalmap_pars_fragment:Nw,clearcoat_normal_fragment_begin:Fw,clearcoat_normal_fragment_maps:Uw,clearcoat_pars_fragment:Dw,iridescence_pars_fragment:kw,opaque_fragment:Ow,packing:zw,premultiplied_alpha_fragment:Bw,project_vertex:Hw,dithering_fragment:Gw,dithering_pars_fragment:Vw,roughnessmap_fragment:Ww,roughnessmap_pars_fragment:Xw,shadowmap_pars_fragment:jw,shadowmap_pars_vertex:qw,shadowmap_vertex:Yw,shadowmask_pars_fragment:$w,skinbase_vertex:Kw,skinning_pars_vertex:Zw,skinning_vertex:Qw,skinnormal_vertex:Jw,specularmap_fragment:eb,specularmap_pars_fragment:tb,tonemapping_fragment:nb,tonemapping_pars_fragment:ib,transmission_fragment:rb,transmission_pars_fragment:sb,uv_pars_fragment:ab,uv_pars_vertex:ob,uv_vertex:lb,worldpos_vertex:cb,background_vert:ub,background_frag:hb,backgroundCube_vert:fb,backgroundCube_frag:db,cube_vert:pb,cube_frag:mb,depth_vert:gb,depth_frag:xb,distance_vert:vb,distance_frag:_b,equirect_vert:yb,equirect_frag:Sb,linedashed_vert:Mb,linedashed_frag:wb,meshbasic_vert:bb,meshbasic_frag:Eb,meshlambert_vert:Tb,meshlambert_frag:Cb,meshmatcap_vert:Ab,meshmatcap_frag:Rb,meshnormal_vert:Pb,meshnormal_frag:Lb,meshphong_vert:Ib,meshphong_frag:Nb,meshphysical_vert:Fb,meshphysical_frag:Ub,meshtoon_vert:Db,meshtoon_frag:kb,points_vert:Ob,points_frag:zb,shadow_vert:Bb,shadow_frag:Hb,sprite_vert:Gb,sprite_frag:Vb},Xe={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},envMapRotation:{value:new Mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},tr={basic:{uniforms:qn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:bt.meshbasic_vert,fragmentShader:bt.meshbasic_frag},lambert:{uniforms:qn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:bt.meshlambert_vert,fragmentShader:bt.meshlambert_frag},phong:{uniforms:qn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:bt.meshphong_vert,fragmentShader:bt.meshphong_frag},standard:{uniforms:qn([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag},toon:{uniforms:qn([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new Ke(0)}}]),vertexShader:bt.meshtoon_vert,fragmentShader:bt.meshtoon_frag},matcap:{uniforms:qn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:bt.meshmatcap_vert,fragmentShader:bt.meshmatcap_frag},points:{uniforms:qn([Xe.points,Xe.fog]),vertexShader:bt.points_vert,fragmentShader:bt.points_frag},dashed:{uniforms:qn([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bt.linedashed_vert,fragmentShader:bt.linedashed_frag},depth:{uniforms:qn([Xe.common,Xe.displacementmap]),vertexShader:bt.depth_vert,fragmentShader:bt.depth_frag},normal:{uniforms:qn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:bt.meshnormal_vert,fragmentShader:bt.meshnormal_frag},sprite:{uniforms:qn([Xe.sprite,Xe.fog]),vertexShader:bt.sprite_vert,fragmentShader:bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bt.background_vert,fragmentShader:bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Mt}},vertexShader:bt.backgroundCube_vert,fragmentShader:bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bt.cube_vert,fragmentShader:bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bt.equirect_vert,fragmentShader:bt.equirect_frag},distance:{uniforms:qn([Xe.common,Xe.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bt.distance_vert,fragmentShader:bt.distance_frag},shadow:{uniforms:qn([Xe.lights,Xe.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:bt.shadow_vert,fragmentShader:bt.shadow_frag}};tr.physical={uniforms:qn([tr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag};const bc={r:0,b:0,g:0},Wb=new Yt,$x=new Mt;$x.set(-1,0,0,0,1,0,0,0,1);function Xb(a,e,t,i,s,o){const c=new Ke(0);let u=s===!0?0:1,h,f,p=null,g=0,m=null;function y(b){let C=b.isScene===!0?b.background:null;if(C&&C.isTexture){const E=b.backgroundBlurriness>0;C=e.get(C,E)}return C}function v(b){let C=!1;const E=y(b);E===null?_(c,u):E&&E.isColor&&(_(E,1),C=!0);const L=a.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(a.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function w(b,C){const E=y(C);E&&(E.isCubeTexture||E.mapping===qc)?(f===void 0&&(f=new un(new Ya(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:Wa(tr.backgroundCube.uniforms),vertexShader:tr.backgroundCube.vertexShader,fragmentShader:tr.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(L,A,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=E,f.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Wb.makeRotationFromEuler(C.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply($x),f.material.toneMapped=Pt.getTransfer(E.colorSpace)!==Vt,(p!==E||g!==E.version||m!==a.toneMapping)&&(f.material.needsUpdate=!0,p=E,g=E.version,m=a.toneMapping),f.layers.enableAll(),b.unshift(f,f.geometry,f.material,0,0,null)):E&&E.isTexture&&(h===void 0&&(h=new un(new Nr(2,2),new ln({name:"BackgroundMaterial",uniforms:Wa(tr.background.uniforms),vertexShader:tr.background.vertexShader,fragmentShader:tr.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=E,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=Pt.getTransfer(E.colorSpace)!==Vt,E.matrixAutoUpdate===!0&&E.updateMatrix(),h.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||g!==E.version||m!==a.toneMapping)&&(h.material.needsUpdate=!0,p=E,g=E.version,m=a.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function _(b,C){b.getRGB(bc,Vx(a)),t.buffers.color.setClear(bc.r,bc.g,bc.b,C,o)}function S(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(b,C=1){c.set(b),u=C,_(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(b){u=b,_(c,u)},render:v,addToRenderList:w,dispose:S}}function jb(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},s=m(null);let o=s,c=!1;function u(D,H,te,se,W){let V=!1;const X=g(D,se,te,H);o!==X&&(o=X,f(o.object)),V=y(D,se,te,W),V&&v(D,se,te,W),W!==null&&e.update(W,a.ELEMENT_ARRAY_BUFFER),(V||c)&&(c=!1,E(D,H,te,se),W!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function h(){return a.createVertexArray()}function f(D){return a.bindVertexArray(D)}function p(D){return a.deleteVertexArray(D)}function g(D,H,te,se){const W=se.wireframe===!0;let V=i[H.id];V===void 0&&(V={},i[H.id]=V);const X=D.isInstancedMesh===!0?D.id:0;let j=V[X];j===void 0&&(j={},V[X]=j);let ie=j[te.id];ie===void 0&&(ie={},j[te.id]=ie);let Q=ie[W];return Q===void 0&&(Q=m(h()),ie[W]=Q),Q}function m(D){const H=[],te=[],se=[];for(let W=0;W<t;W++)H[W]=0,te[W]=0,se[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:te,attributeDivisors:se,object:D,attributes:{},index:null}}function y(D,H,te,se){const W=o.attributes,V=H.attributes;let X=0;const j=te.getAttributes();for(const ie in j)if(j[ie].location>=0){const O=W[ie];let ee=V[ie];if(ee===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor)),O===void 0||O.attribute!==ee||ee&&O.data!==ee.data)return!0;X++}return o.attributesNum!==X||o.index!==se}function v(D,H,te,se){const W={},V=H.attributes;let X=0;const j=te.getAttributes();for(const ie in j)if(j[ie].location>=0){let O=V[ie];O===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(O=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(O=D.instanceColor));const ee={};ee.attribute=O,O&&O.data&&(ee.data=O.data),W[ie]=ee,X++}o.attributes=W,o.attributesNum=X,o.index=se}function w(){const D=o.newAttributes;for(let H=0,te=D.length;H<te;H++)D[H]=0}function _(D){S(D,0)}function S(D,H){const te=o.newAttributes,se=o.enabledAttributes,W=o.attributeDivisors;te[D]=1,se[D]===0&&(a.enableVertexAttribArray(D),se[D]=1),W[D]!==H&&(a.vertexAttribDivisor(D,H),W[D]=H)}function b(){const D=o.newAttributes,H=o.enabledAttributes;for(let te=0,se=H.length;te<se;te++)H[te]!==D[te]&&(a.disableVertexAttribArray(te),H[te]=0)}function C(D,H,te,se,W,V,X){X===!0?a.vertexAttribIPointer(D,H,te,W,V):a.vertexAttribPointer(D,H,te,se,W,V)}function E(D,H,te,se){w();const W=se.attributes,V=te.getAttributes(),X=H.defaultAttributeValues;for(const j in V){const ie=V[j];if(ie.location>=0){let Q=W[j];if(Q===void 0&&(j==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),j==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){const O=Q.normalized,ee=Q.itemSize,me=e.get(Q);if(me===void 0)continue;const we=me.buffer,ve=me.type,q=me.bytesPerElement,pe=ve===a.INT||ve===a.UNSIGNED_INT||Q.gpuType===Ad;if(Q.isInterleavedBufferAttribute){const oe=Q.data,Me=oe.stride,ze=Q.offset;if(oe.isInstancedInterleavedBuffer){for(let Ve=0;Ve<ie.locationSize;Ve++)S(ie.location+Ve,oe.meshPerAttribute);D.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ve=0;Ve<ie.locationSize;Ve++)_(ie.location+Ve);a.bindBuffer(a.ARRAY_BUFFER,we);for(let Ve=0;Ve<ie.locationSize;Ve++)C(ie.location+Ve,ee/ie.locationSize,ve,O,Me*q,(ze+ee/ie.locationSize*Ve)*q,pe)}else{if(Q.isInstancedBufferAttribute){for(let oe=0;oe<ie.locationSize;oe++)S(ie.location+oe,Q.meshPerAttribute);D.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let oe=0;oe<ie.locationSize;oe++)_(ie.location+oe);a.bindBuffer(a.ARRAY_BUFFER,we);for(let oe=0;oe<ie.locationSize;oe++)C(ie.location+oe,ee/ie.locationSize,ve,O,ee*q,ee/ie.locationSize*oe*q,pe)}}else if(X!==void 0){const O=X[j];if(O!==void 0)switch(O.length){case 2:a.vertexAttrib2fv(ie.location,O);break;case 3:a.vertexAttrib3fv(ie.location,O);break;case 4:a.vertexAttrib4fv(ie.location,O);break;default:a.vertexAttrib1fv(ie.location,O)}}}}b()}function L(){F();for(const D in i){const H=i[D];for(const te in H){const se=H[te];for(const W in se){const V=se[W];for(const X in V)p(V[X].object),delete V[X];delete se[W]}}delete i[D]}}function A(D){if(i[D.id]===void 0)return;const H=i[D.id];for(const te in H){const se=H[te];for(const W in se){const V=se[W];for(const X in V)p(V[X].object),delete V[X];delete se[W]}}delete i[D.id]}function I(D){for(const H in i){const te=i[H];for(const se in te){const W=te[se];if(W[D.id]===void 0)continue;const V=W[D.id];for(const X in V)p(V[X].object),delete V[X];delete W[D.id]}}}function T(D){for(const H in i){const te=i[H],se=D.isInstancedMesh===!0?D.id:0,W=te[se];if(W!==void 0){for(const V in W){const X=W[V];for(const j in X)p(X[j].object),delete X[j];delete W[V]}delete te[se],Object.keys(te).length===0&&delete i[H]}}}function F(){z(),c=!0,o!==s&&(o=s,f(o.object))}function z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:F,resetDefaultState:z,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfObject:T,releaseStatesOfProgram:I,initAttributes:w,enableAttribute:_,disableUnusedAttributes:b}}function qb(a,e,t){let i;function s(h){i=h}function o(h,f){a.drawArrays(i,h,f),t.update(f,i,1)}function c(h,f,p){p!==0&&(a.drawArraysInstanced(i,h,f,p),t.update(f,i,p))}function u(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,f,0,p);let m=0;for(let y=0;y<p;y++)m+=f[y];t.update(m,i,1)}this.setMode=s,this.render=o,this.renderInstances=c,this.renderMultiDraw=u}function Yb(a,e,t,i){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=a.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(I){return!(I!==vi&&i.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(I){const T=I===_i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==xi&&i.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Xi&&!T)}function h(I){if(I==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const p=h(f);p!==f&&(dt("WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const g=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),v=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=a.getParameter(a.MAX_TEXTURE_SIZE),_=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),S=a.getParameter(a.MAX_VERTEX_ATTRIBS),b=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),C=a.getParameter(a.MAX_VARYING_VECTORS),E=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),L=a.getParameter(a.MAX_SAMPLES),A=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:g,reversedDepthBuffer:m,maxTextures:y,maxVertexTextures:v,maxTextureSize:w,maxCubemapSize:_,maxAttributes:S,maxVertexUniforms:b,maxVaryings:C,maxFragmentUniforms:E,maxSamples:L,samples:A}}function $b(a){const e=this;let t=null,i=0,s=!1,o=!1;const c=new Ds,u=new Mt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,m){const y=g.length!==0||m||i!==0||s;return s=m,i=g.length,y},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,m){t=p(g,m,0)},this.setState=function(g,m,y){const v=g.clippingPlanes,w=g.clipIntersection,_=g.clipShadows,S=a.get(g);if(!s||v===null||v.length===0||o&&!_)o?p(null):f();else{const b=o?0:i,C=b*4;let E=S.clippingState||null;h.value=E,E=p(v,m,C,y);for(let L=0;L!==C;++L)E[L]=t[L];S.clippingState=E,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=b}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(g,m,y,v){const w=g!==null?g.length:0;let _=null;if(w!==0){if(_=h.value,v!==!0||_===null){const S=y+w*4,b=m.matrixWorldInverse;u.getNormalMatrix(b),(_===null||_.length<S)&&(_=new Float32Array(S));for(let C=0,E=y;C!==w;++C,E+=4)c.copy(g[C]).applyMatrix4(b,u),c.normal.toArray(_,E),_[E+3]=c.constant}h.value=_,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,_}}const ls=4,Sg=[.125,.215,.35,.446,.526,.582],Os=20,Kb=256,ko=new $a,Mg=new Ke;let cf=null,uf=0,hf=0,ff=!1;const Zb=new Z;class wg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,o={}){const{size:c=256,position:u=Zb}=o;cf=this._renderer.getRenderTarget(),uf=this._renderer.getActiveCubeFace(),hf=this._renderer.getActiveMipmapLevel(),ff=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,i,s,h,u),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(cf,uf,hf),this._renderer.xr.enabled=ff,e.scissorTest=!1,Ra(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hs||e.mapping===Ga?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cf=this._renderer.getRenderTarget(),uf=this._renderer.getActiveCubeFace(),hf=this._renderer.getActiveMipmapLevel(),ff=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:_i,format:vi,colorSpace:kc,depthBuffer:!1},s=bg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=bg(e,t,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Qb(o)),this._blurMaterial=e2(o,e,t),this._ggxMaterial=Jb(o,e,t)}return s}_compileMaterial(e){const t=new un(new cn,e);this._renderer.compile(t,ko)}_sceneToCubeUV(e,t,i,s,o){const h=new Pn(90,1,t,i),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,m=g.autoClear,y=g.toneMapping;g.getClearColor(Mg),g.toneMapping=sr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new un(new Ya,new Yc({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,_=w.material;let S=!1;const b=e.background;b?b.isColor&&(_.color.copy(b),e.background=null,S=!0):(_.color.copy(Mg),S=!0);for(let C=0;C<6;C++){const E=C%3;E===0?(h.up.set(0,f[C],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x+p[C],o.y,o.z)):E===1?(h.up.set(0,0,f[C]),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y+p[C],o.z)):(h.up.set(0,f[C],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y,o.z+p[C]));const L=this._cubeSize;Ra(s,E*L,C>2?L:0,L,L),g.setRenderTarget(s),S&&g.render(w,h),g.render(e,h)}g.toneMapping=y,g.autoClear=m,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Hs||e.mapping===Ga;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eg());const o=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=o;const u=o.uniforms;u.envMap.value=e;const h=this._cubeSize;Ra(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(c,ko)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,o=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[i];u.material=c;const h=c.uniforms,f=i/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),g=Math.sqrt(f*f-p*p),m=0+f*1.25,y=g*m,{_lodMax:v}=this,w=this._sizeLods[i],_=3*w*(i>v-ls?i-v+ls:0),S=4*(this._cubeSize-w);h.envMap.value=e.texture,h.roughness.value=y,h.mipInt.value=v-t,Ra(o,_,S,3*w,2*w),s.setRenderTarget(o),s.render(u,ko),h.envMap.value=o.texture,h.roughness.value=0,h.mipInt.value=v-i,Ra(e,_,S,3*w,2*w),s.setRenderTarget(e),s.render(u,ko)}_blur(e,t,i,s,o){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",o),this._halfBlur(c,e,i,i,s,"longitudinal",o)}_halfBlur(e,t,i,s,o,c,u){const h=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Ft("blur direction must be either latitudinal or longitudinal!");const p=3,g=this._lodMeshes[s];g.material=f;const m=f.uniforms,y=this._sizeLods[i]-1,v=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*Os-1),w=o/v,_=isFinite(o)?1+Math.floor(p*w):Os;_>Os&&dt(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Os}`);const S=[];let b=0;for(let I=0;I<Os;++I){const T=I/w,F=Math.exp(-T*T/2);S.push(F),I===0?b+=F:I<_&&(b+=2*F)}for(let I=0;I<S.length;I++)S[I]=S[I]/b;m.envMap.value=e.texture,m.samples.value=_,m.weights.value=S,m.latitudinal.value=c==="latitudinal",u&&(m.poleAxis.value=u);const{_lodMax:C}=this;m.dTheta.value=v,m.mipInt.value=C-i;const E=this._sizeLods[s],L=3*E*(s>C-ls?s-C+ls:0),A=4*(this._cubeSize-E);Ra(t,L,A,3*E,2*E),h.setRenderTarget(t),h.render(g,ko)}}function Qb(a){const e=[],t=[],i=[];let s=a;const o=a-ls+1+Sg.length;for(let c=0;c<o;c++){const u=Math.pow(2,s);e.push(u);let h=1/u;c>a-ls?h=Sg[c-a+ls-1]:c===0&&(h=0),t.push(h);const f=1/(u-2),p=-f,g=1+f,m=[p,p,g,p,g,g,p,p,g,g,p,g],y=6,v=6,w=3,_=2,S=1,b=new Float32Array(w*v*y),C=new Float32Array(_*v*y),E=new Float32Array(S*v*y);for(let A=0;A<y;A++){const I=A%3*2/3-1,T=A>2?0:-1,F=[I,T,0,I+2/3,T,0,I+2/3,T+1,0,I,T,0,I+2/3,T+1,0,I,T+1,0];b.set(F,w*v*A),C.set(m,_*v*A);const z=[A,A,A,A,A,A];E.set(z,S*v*A)}const L=new cn;L.setAttribute("position",new Sn(b,w)),L.setAttribute("uv",new Sn(C,_)),L.setAttribute("faceIndex",new Sn(E,S)),i.push(new un(L,null)),s>ls&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function bg(a,e,t){const i=new ai(a,e,t);return i.texture.mapping=qc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ra(a,e,t,i,s){a.viewport.set(e,t,i,s),a.scissor.set(e,t,i,s)}function Jb(a,e,t){return new ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Kb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$c(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function e2(a,e,t){const i=new Float32Array(Os),s=new Z(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$c(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Eg(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$c(),fragmentShader:`

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
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Tg(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function $c(){return`

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
	`}class Kx extends ai{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Hx(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ya(5,5,5),o=new ln({name:"CubemapFromEquirect",uniforms:Wa(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:si,blending:rr});o.uniforms.tEquirect.value=t;const c=new un(s,o),u=t.minFilter;return t.minFilter===zs&&(t.minFilter=mn),new rM(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(o)}}function t2(a){let e=new WeakMap,t=new WeakMap,i=null;function s(m,y=!1){return m==null?null:y?c(m):o(m)}function o(m){if(m&&m.isTexture){const y=m.mapping;if(y===Fh||y===Uh)if(e.has(m)){const v=e.get(m).texture;return u(v,m.mapping)}else{const v=m.image;if(v&&v.height>0){const w=new Kx(v.height);return w.fromEquirectangularTexture(a,m),e.set(m,w),m.addEventListener("dispose",f),u(w.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const y=m.mapping,v=y===Fh||y===Uh,w=y===Hs||y===Ga;if(v||w){let _=t.get(m);const S=_!==void 0?_.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==S)return i===null&&(i=new wg(a)),_=v?i.fromEquirectangular(m,_):i.fromCubemap(m,_),_.texture.pmremVersion=m.pmremVersion,t.set(m,_),_.texture;if(_!==void 0)return _.texture;{const b=m.image;return v&&b&&b.height>0||w&&b&&h(b)?(i===null&&(i=new wg(a)),_=v?i.fromEquirectangular(m):i.fromCubemap(m),_.texture.pmremVersion=m.pmremVersion,t.set(m,_),m.addEventListener("dispose",p),_.texture):null}}}return m}function u(m,y){return y===Fh?m.mapping=Hs:y===Uh&&(m.mapping=Ga),m}function h(m){let y=0;const v=6;for(let w=0;w<v;w++)m[w]!==void 0&&y++;return y===v}function f(m){const y=m.target;y.removeEventListener("dispose",f);const v=e.get(y);v!==void 0&&(e.delete(y),v.dispose())}function p(m){const y=m.target;y.removeEventListener("dispose",p);const v=t.get(y);v!==void 0&&(t.delete(y),v.dispose())}function g(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:g}}function n2(a){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=a.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ud("WebGLRenderer: "+i+" extension not supported."),s}}}function i2(a,e,t,i){const s={},o=new WeakMap;function c(g){const m=g.target;m.index!==null&&e.remove(m.index);for(const v in m.attributes)e.remove(m.attributes[v]);m.removeEventListener("dispose",c),delete s[m.id];const y=o.get(m);y&&(e.remove(y),o.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function u(g,m){return s[m.id]===!0||(m.addEventListener("dispose",c),s[m.id]=!0,t.memory.geometries++),m}function h(g){const m=g.attributes;for(const y in m)e.update(m[y],a.ARRAY_BUFFER)}function f(g){const m=[],y=g.index,v=g.attributes.position;let w=0;if(v===void 0)return;if(y!==null){const b=y.array;w=y.version;for(let C=0,E=b.length;C<E;C+=3){const L=b[C+0],A=b[C+1],I=b[C+2];m.push(L,A,A,I,I,L)}}else{const b=v.array;w=v.version;for(let C=0,E=b.length/3-1;C<E;C+=3){const L=C+0,A=C+1,I=C+2;m.push(L,A,A,I,I,L)}}const _=new(v.count>=65535?zx:Ox)(m,1);_.version=w;const S=o.get(g);S&&e.remove(S),o.set(g,_)}function p(g){const m=o.get(g);if(m){const y=g.index;y!==null&&m.version<y.version&&f(g)}else f(g);return o.get(g)}return{get:u,update:h,getWireframeAttribute:p}}function r2(a,e,t){let i;function s(g){i=g}let o,c;function u(g){o=g.type,c=g.bytesPerElement}function h(g,m){a.drawElements(i,m,o,g*c),t.update(m,i,1)}function f(g,m,y){y!==0&&(a.drawElementsInstanced(i,m,o,g*c,y),t.update(m,i,y))}function p(g,m,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,o,g,0,y);let w=0;for(let _=0;_<y;_++)w+=m[_];t.update(w,i,1)}this.setMode=s,this.setIndex=u,this.render=h,this.renderInstances=f,this.renderMultiDraw=p}function s2(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,c,u){switch(t.calls++,c){case a.TRIANGLES:t.triangles+=u*(o/3);break;case a.LINES:t.lines+=u*(o/2);break;case a.LINE_STRIP:t.lines+=u*(o-1);break;case a.LINE_LOOP:t.lines+=u*o;break;case a.POINTS:t.points+=u*o;break;default:Ft("WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function a2(a,e,t){const i=new WeakMap,s=new sn;function o(c,u,h){const f=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let m=i.get(u);if(m===void 0||m.count!==g){let F=function(){I.dispose(),i.delete(u),u.removeEventListener("dispose",F)};m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,_=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let C=0;y===!0&&(C=1),v===!0&&(C=2),w===!0&&(C=3);let E=u.attributes.position.count*C,L=1;E>e.maxTextureSize&&(L=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const A=new Float32Array(E*L*4*g),I=new Ux(A,E,L,g);I.type=Xi,I.needsUpdate=!0;const T=C*4;for(let z=0;z<g;z++){const D=_[z],H=S[z],te=b[z],se=E*L*4*z;for(let W=0;W<D.count;W++){const V=W*T;y===!0&&(s.fromBufferAttribute(D,W),A[se+V+0]=s.x,A[se+V+1]=s.y,A[se+V+2]=s.z,A[se+V+3]=0),v===!0&&(s.fromBufferAttribute(H,W),A[se+V+4]=s.x,A[se+V+5]=s.y,A[se+V+6]=s.z,A[se+V+7]=0),w===!0&&(s.fromBufferAttribute(te,W),A[se+V+8]=s.x,A[se+V+9]=s.y,A[se+V+10]=s.z,A[se+V+11]=te.itemSize===4?s.w:1)}}m={count:g,texture:I,size:new ht(E,L)},i.set(u,m),u.addEventListener("dispose",F)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(a,"morphTexture",c.morphTexture,t);else{let y=0;for(let w=0;w<f.length;w++)y+=f[w];const v=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(a,"morphTargetBaseInfluence",v),h.getUniforms().setValue(a,"morphTargetInfluences",f)}h.getUniforms().setValue(a,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(a,"morphTargetsTextureSize",m.size)}return{update:o}}function o2(a,e,t,i,s){let o=new WeakMap;function c(f){const p=s.render.frame,g=f.geometry,m=e.get(f,g);if(o.get(m)!==p&&(e.update(m),o.set(m,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),o.get(f)!==p&&(t.update(f.instanceMatrix,a.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,a.ARRAY_BUFFER),o.set(f,p))),f.isSkinnedMesh){const y=f.skeleton;o.get(y)!==p&&(y.update(),o.set(y,p))}return m}function u(){o=new WeakMap}function h(f){const p=f.target;p.removeEventListener("dispose",h),i.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:c,dispose:u}}const l2={[yx]:"LINEAR_TONE_MAPPING",[Sx]:"REINHARD_TONE_MAPPING",[Mx]:"CINEON_TONE_MAPPING",[wx]:"ACES_FILMIC_TONE_MAPPING",[Ex]:"AGX_TONE_MAPPING",[Tx]:"NEUTRAL_TONE_MAPPING",[bx]:"CUSTOM_TONE_MAPPING"};function c2(a,e,t,i,s){const o=new ai(e,t,{type:a,depthBuffer:i,stencilBuffer:s,depthTexture:i?new Va(e,t):void 0}),c=new ai(e,t,{type:_i,depthBuffer:!1,stencilBuffer:!1}),u=new cn;u.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Qt([0,2,0,0,2,0],2));const h=new YS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new un(u,h),p=new $a(-1,1,1,-1,0,1);let g=null,m=null,y=!1,v,w=null,_=[],S=!1;this.setSize=function(b,C){o.setSize(b,C),c.setSize(b,C);for(let E=0;E<_.length;E++){const L=_[E];L.setSize&&L.setSize(b,C)}},this.setEffects=function(b){_=b,S=_.length>0&&_[0].isRenderPass===!0;const C=o.width,E=o.height;for(let L=0;L<_.length;L++){const A=_[L];A.setSize&&A.setSize(C,E)}},this.begin=function(b,C){if(y||b.toneMapping===sr&&_.length===0)return!1;if(w=C,C!==null){const E=C.width,L=C.height;(o.width!==E||o.height!==L)&&this.setSize(E,L)}return S===!1&&b.setRenderTarget(o),v=b.toneMapping,b.toneMapping=sr,!0},this.hasRenderPass=function(){return S},this.end=function(b,C){b.toneMapping=v,y=!0;let E=o,L=c;for(let A=0;A<_.length;A++){const I=_[A];if(I.enabled!==!1&&(I.render(b,L,E,C),I.needsSwap!==!1)){const T=E;E=L,L=T}}if(g!==b.outputColorSpace||m!==b.toneMapping){g=b.outputColorSpace,m=b.toneMapping,h.defines={},Pt.getTransfer(g)===Vt&&(h.defines.SRGB_TRANSFER="");const A=l2[m];A&&(h.defines[A]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,b.setRenderTarget(w),b.render(f,p),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),c.dispose(),u.dispose(),h.dispose()}}const Zx=new Gn,dd=new Va(1,1),Qx=new Ux,Jx=new ES,ev=new Hx,Cg=[],Ag=[],Rg=new Float32Array(16),Pg=new Float32Array(9),Lg=new Float32Array(4);function Ka(a,e,t){const i=a[0];if(i<=0||i>0)return a;const s=e*t;let o=Cg[s];if(o===void 0&&(o=new Float32Array(s),Cg[s]=o),e!==0){i.toArray(o,0);for(let c=1,u=0;c!==e;++c)u+=t,a[c].toArray(o,u)}return o}function Mn(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function wn(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function Kc(a,e){let t=Ag[e];t===void 0&&(t=new Int32Array(e),Ag[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function u2(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function h2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;a.uniform2fv(this.addr,e),wn(t,e)}}function f2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mn(t,e))return;a.uniform3fv(this.addr,e),wn(t,e)}}function d2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;a.uniform4fv(this.addr,e),wn(t,e)}}function p2(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mn(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),wn(t,e)}else{if(Mn(t,i))return;Lg.set(i),a.uniformMatrix2fv(this.addr,!1,Lg),wn(t,i)}}function m2(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mn(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),wn(t,e)}else{if(Mn(t,i))return;Pg.set(i),a.uniformMatrix3fv(this.addr,!1,Pg),wn(t,i)}}function g2(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mn(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),wn(t,e)}else{if(Mn(t,i))return;Rg.set(i),a.uniformMatrix4fv(this.addr,!1,Rg),wn(t,i)}}function x2(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function v2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;a.uniform2iv(this.addr,e),wn(t,e)}}function _2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;a.uniform3iv(this.addr,e),wn(t,e)}}function y2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;a.uniform4iv(this.addr,e),wn(t,e)}}function S2(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function M2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mn(t,e))return;a.uniform2uiv(this.addr,e),wn(t,e)}}function w2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mn(t,e))return;a.uniform3uiv(this.addr,e),wn(t,e)}}function b2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mn(t,e))return;a.uniform4uiv(this.addr,e),wn(t,e)}}function E2(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s);let o;this.type===a.SAMPLER_2D_SHADOW?(dd.compareFunction=t.isReversedDepthBuffer()?Dd:Ud,o=dd):o=Zx,t.setTexture2D(e||o,s)}function T2(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Jx,s)}function C2(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||ev,s)}function A2(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Qx,s)}function R2(a){switch(a){case 5126:return u2;case 35664:return h2;case 35665:return f2;case 35666:return d2;case 35674:return p2;case 35675:return m2;case 35676:return g2;case 5124:case 35670:return x2;case 35667:case 35671:return v2;case 35668:case 35672:return _2;case 35669:case 35673:return y2;case 5125:return S2;case 36294:return M2;case 36295:return w2;case 36296:return b2;case 35678:case 36198:case 36298:case 36306:case 35682:return E2;case 35679:case 36299:case 36307:return T2;case 35680:case 36300:case 36308:case 36293:return C2;case 36289:case 36303:case 36311:case 36292:return A2}}function P2(a,e){a.uniform1fv(this.addr,e)}function L2(a,e){const t=Ka(e,this.size,2);a.uniform2fv(this.addr,t)}function I2(a,e){const t=Ka(e,this.size,3);a.uniform3fv(this.addr,t)}function N2(a,e){const t=Ka(e,this.size,4);a.uniform4fv(this.addr,t)}function F2(a,e){const t=Ka(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function U2(a,e){const t=Ka(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function D2(a,e){const t=Ka(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function k2(a,e){a.uniform1iv(this.addr,e)}function O2(a,e){a.uniform2iv(this.addr,e)}function z2(a,e){a.uniform3iv(this.addr,e)}function B2(a,e){a.uniform4iv(this.addr,e)}function H2(a,e){a.uniform1uiv(this.addr,e)}function G2(a,e){a.uniform2uiv(this.addr,e)}function V2(a,e){a.uniform3uiv(this.addr,e)}function W2(a,e){a.uniform4uiv(this.addr,e)}function X2(a,e,t){const i=this.cache,s=e.length,o=Kc(t,s);Mn(i,o)||(a.uniform1iv(this.addr,o),wn(i,o));let c;this.type===a.SAMPLER_2D_SHADOW?c=dd:c=Zx;for(let u=0;u!==s;++u)t.setTexture2D(e[u]||c,o[u])}function j2(a,e,t){const i=this.cache,s=e.length,o=Kc(t,s);Mn(i,o)||(a.uniform1iv(this.addr,o),wn(i,o));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||Jx,o[c])}function q2(a,e,t){const i=this.cache,s=e.length,o=Kc(t,s);Mn(i,o)||(a.uniform1iv(this.addr,o),wn(i,o));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||ev,o[c])}function Y2(a,e,t){const i=this.cache,s=e.length,o=Kc(t,s);Mn(i,o)||(a.uniform1iv(this.addr,o),wn(i,o));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||Qx,o[c])}function $2(a){switch(a){case 5126:return P2;case 35664:return L2;case 35665:return I2;case 35666:return N2;case 35674:return F2;case 35675:return U2;case 35676:return D2;case 5124:case 35670:return k2;case 35667:case 35671:return O2;case 35668:case 35672:return z2;case 35669:case 35673:return B2;case 5125:return H2;case 36294:return G2;case 36295:return V2;case 36296:return W2;case 35678:case 36198:case 36298:case 36306:case 35682:return X2;case 35679:case 36299:case 36307:return j2;case 35680:case 36300:case 36308:case 36293:return q2;case 36289:case 36303:case 36311:case 36292:return Y2}}class K2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=R2(t.type)}}class Z2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=$2(t.type)}}class Q2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let o=0,c=s.length;o!==c;++o){const u=s[o];u.setValue(e,t[u.id],i)}}}const df=/(\w+)(\])?(\[|\.)?/g;function Ig(a,e){a.seq.push(e),a.map[e.id]=e}function J2(a,e,t){const i=a.name,s=i.length;for(df.lastIndex=0;;){const o=df.exec(i),c=df.lastIndex;let u=o[1];const h=o[2]==="]",f=o[3];if(h&&(u=u|0),f===void 0||f==="["&&c+2===s){Ig(t,f===void 0?new K2(u,a,e):new Z2(u,a,e));break}else{let g=t.map[u];g===void 0&&(g=new Q2(u),Ig(t,g)),t=g}}}class Ic{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const u=e.getActiveUniform(t,c),h=e.getUniformLocation(t,u.name);J2(u,h,this)}const s=[],o=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(c):o.push(c);s.length>0&&(this.seq=s.concat(o))}setValue(e,t,i,s){const o=this.map[t];o!==void 0&&o.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let o=0,c=t.length;o!==c;++o){const u=t[o],h=i[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,o=e.length;s!==o;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function Ng(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}const eE=37297;let tE=0;function nE(a,e){const t=a.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=s;c<o;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const Fg=new Mt;function iE(a){Pt._getMatrix(Fg,Pt.workingColorSpace,a);const e=`mat3( ${Fg.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(a)){case Oc:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Ug(a,e,t){const i=a.getShaderParameter(e,a.COMPILE_STATUS),o=(a.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+o+`

`+nE(a.getShaderSource(e),u)}else return o}function rE(a,e){const t=iE(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const sE={[yx]:"Linear",[Sx]:"Reinhard",[Mx]:"Cineon",[wx]:"ACESFilmic",[Ex]:"AgX",[Tx]:"Neutral",[bx]:"Custom"};function aE(a,e){const t=sE[e];return t===void 0?(dt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ec=new Z;function oE(){Pt.getLuminanceCoefficients(Ec);const a=Ec.x.toFixed(4),e=Ec.y.toFixed(4),t=Ec.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lE(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function cE(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function uE(a,e){const t={},i=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=a.getActiveAttrib(e,s),c=o.name;let u=1;o.type===a.FLOAT_MAT2&&(u=2),o.type===a.FLOAT_MAT3&&(u=3),o.type===a.FLOAT_MAT4&&(u=4),t[c]={type:o.type,location:a.getAttribLocation(e,c),locationSize:u}}return t}function Ho(a){return a!==""}function Dg(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kg(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const hE=/^[ \t]*#include +<([\w\d./]+)>/gm;function pd(a){return a.replace(hE,dE)}const fE=new Map;function dE(a,e){let t=bt[e];if(t===void 0){const i=fE.get(e);if(i!==void 0)t=bt[i],dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return pd(t)}const pE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Og(a){return a.replace(pE,mE)}function mE(a,e,t,i){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function zg(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const gE={[Cc]:"SHADOWMAP_TYPE_PCF",[Bo]:"SHADOWMAP_TYPE_VSM"};function xE(a){return gE[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vE={[Hs]:"ENVMAP_TYPE_CUBE",[Ga]:"ENVMAP_TYPE_CUBE",[qc]:"ENVMAP_TYPE_CUBE_UV"};function _E(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":vE[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const yE={[Ga]:"ENVMAP_MODE_REFRACTION"};function SE(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":yE[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const ME={[Cd]:"ENVMAP_BLENDING_MULTIPLY",[Vy]:"ENVMAP_BLENDING_MIX",[Wy]:"ENVMAP_BLENDING_ADD"};function wE(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":ME[a.combine]||"ENVMAP_BLENDING_NONE"}function bE(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function EE(a,e,t,i){const s=a.getContext(),o=t.defines;let c=t.vertexShader,u=t.fragmentShader;const h=xE(t),f=_E(t),p=SE(t),g=wE(t),m=bE(t),y=lE(t),v=cE(o),w=s.createProgram();let _,S,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ho).join(`
`),_.length>0&&(_+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ho).join(`
`),S.length>0&&(S+=`
`)):(_=[zg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),S=[zg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==sr?"#define TONE_MAPPING":"",t.toneMapping!==sr?bt.tonemapping_pars_fragment:"",t.toneMapping!==sr?aE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",bt.colorspace_pars_fragment,rE("linearToOutputTexel",t.outputColorSpace),oE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ho).join(`
`)),c=pd(c),c=Dg(c,t),c=kg(c,t),u=pd(u),u=Dg(u,t),u=kg(u,t),c=Og(c),u=Og(u),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,S=["#define varying in",t.glslVersion===z0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===z0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const C=b+_+c,E=b+S+u,L=Ng(s,s.VERTEX_SHADER,C),A=Ng(s,s.FRAGMENT_SHADER,E);s.attachShader(w,L),s.attachShader(w,A),t.index0AttributeName!==void 0?s.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(w,0,"position"),s.linkProgram(w);function I(D){if(a.debug.checkShaderErrors){const H=s.getProgramInfoLog(w)||"",te=s.getShaderInfoLog(L)||"",se=s.getShaderInfoLog(A)||"",W=H.trim(),V=te.trim(),X=se.trim();let j=!0,ie=!0;if(s.getProgramParameter(w,s.LINK_STATUS)===!1)if(j=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(s,w,L,A);else{const Q=Ug(s,L,"vertex"),O=Ug(s,A,"fragment");Ft("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(w,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+W+`
`+Q+`
`+O)}else W!==""?dt("WebGLProgram: Program Info Log:",W):(V===""||X==="")&&(ie=!1);ie&&(D.diagnostics={runnable:j,programLog:W,vertexShader:{log:V,prefix:_},fragmentShader:{log:X,prefix:S}})}s.deleteShader(L),s.deleteShader(A),T=new Ic(s,w),F=uE(s,w)}let T;this.getUniforms=function(){return T===void 0&&I(this),T};let F;this.getAttributes=function(){return F===void 0&&I(this),F};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(w,eE)),z},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tE++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=L,this.fragmentShader=A,this}let TE=0;class CE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new AE(e),t.set(e,i)),i}}class AE{constructor(e){this.id=TE++,this.code=e,this.usedTimes=0}}function RE(a){return a===Gs||a===Fc||a===Uc}function PE(a,e,t,i,s,o){const c=new Dx,u=new CE,h=new Set,f=[],p=new Map,g=i.logarithmicDepthBuffer;let m=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return h.add(T),T===0?"uv":`uv${T}`}function w(T,F,z,D,H,te){const se=D.fog,W=H.geometry,V=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?D.environment:null,X=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,j=e.get(T.envMap||V,X),ie=j&&j.mapping===qc?j.image.height:null,Q=y[T.type];T.precision!==null&&(m=i.getMaxPrecision(T.precision),m!==T.precision&&dt("WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const O=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ee=O!==void 0?O.length:0;let me=0;W.morphAttributes.position!==void 0&&(me=1),W.morphAttributes.normal!==void 0&&(me=2),W.morphAttributes.color!==void 0&&(me=3);let we,ve,q,pe;if(Q){const ft=tr[Q];we=ft.vertexShader,ve=ft.fragmentShader}else we=T.vertexShader,ve=T.fragmentShader,u.update(T),q=u.getVertexShaderID(T),pe=u.getFragmentShaderID(T);const oe=a.getRenderTarget(),Me=a.state.buffers.depth.getReversed(),ze=H.isInstancedMesh===!0,Ve=H.isBatchedMesh===!0,yt=!!T.map,lt=!!T.matcap,St=!!j,Rt=!!T.aoMap,gt=!!T.lightMap,Xt=!!T.bumpMap,kt=!!T.normalMap,hn=!!T.displacementMap,K=!!T.emissiveMap,Ot=!!T.metalnessMap,xt=!!T.roughnessMap,Ut=T.anisotropy>0,Be=T.clearcoat>0,Wt=T.dispersion>0,k=T.iridescence>0,R=T.sheen>0,re=T.transmission>0,_e=Ut&&!!T.anisotropyMap,be=Be&&!!T.clearcoatMap,Pe=Be&&!!T.clearcoatNormalMap,Oe=Be&&!!T.clearcoatRoughnessMap,ge=k&&!!T.iridescenceMap,ye=k&&!!T.iridescenceThicknessMap,We=R&&!!T.sheenColorMap,qe=R&&!!T.sheenRoughnessMap,Ue=!!T.specularMap,Ne=!!T.specularColorMap,Qe=!!T.specularIntensityMap,pt=re&&!!T.transmissionMap,wt=re&&!!T.thicknessMap,Y=!!T.gradientMap,Le=!!T.alphaMap,xe=T.alphaTest>0,Ge=!!T.alphaHash,De=!!T.extensions;let Ee=sr;T.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ee=a.toneMapping);const et={shaderID:Q,shaderType:T.type,shaderName:T.name,vertexShader:we,fragmentShader:ve,defines:T.defines,customVertexShaderID:q,customFragmentShaderID:pe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Ve,batchingColor:Ve&&H._colorsTexture!==null,instancing:ze,instancingColor:ze&&H.instanceColor!==null,instancingMorph:ze&&H.morphTexture!==null,outputColorSpace:oe===null?a.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:yt,matcap:lt,envMap:St,envMapMode:St&&j.mapping,envMapCubeUVHeight:ie,aoMap:Rt,lightMap:gt,bumpMap:Xt,normalMap:kt,displacementMap:hn,emissiveMap:K,normalMapObjectSpace:kt&&T.normalMapType===qy,normalMapTangentSpace:kt&&T.normalMapType===Dc,packedNormalMap:kt&&T.normalMapType===Dc&&RE(T.normalMap.format),metalnessMap:Ot,roughnessMap:xt,anisotropy:Ut,anisotropyMap:_e,clearcoat:Be,clearcoatMap:be,clearcoatNormalMap:Pe,clearcoatRoughnessMap:Oe,dispersion:Wt,iridescence:k,iridescenceMap:ge,iridescenceThicknessMap:ye,sheen:R,sheenColorMap:We,sheenRoughnessMap:qe,specularMap:Ue,specularColorMap:Ne,specularIntensityMap:Qe,transmission:re,transmissionMap:pt,thicknessMap:wt,gradientMap:Y,opaque:T.transparent===!1&&T.blending===ka&&T.alphaToCoverage===!1,alphaMap:Le,alphaTest:xe,alphaHash:Ge,combine:T.combine,mapUv:yt&&v(T.map.channel),aoMapUv:Rt&&v(T.aoMap.channel),lightMapUv:gt&&v(T.lightMap.channel),bumpMapUv:Xt&&v(T.bumpMap.channel),normalMapUv:kt&&v(T.normalMap.channel),displacementMapUv:hn&&v(T.displacementMap.channel),emissiveMapUv:K&&v(T.emissiveMap.channel),metalnessMapUv:Ot&&v(T.metalnessMap.channel),roughnessMapUv:xt&&v(T.roughnessMap.channel),anisotropyMapUv:_e&&v(T.anisotropyMap.channel),clearcoatMapUv:be&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:We&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:qe&&v(T.sheenRoughnessMap.channel),specularMapUv:Ue&&v(T.specularMap.channel),specularColorMapUv:Ne&&v(T.specularColorMap.channel),specularIntensityMapUv:Qe&&v(T.specularIntensityMap.channel),transmissionMapUv:pt&&v(T.transmissionMap.channel),thicknessMapUv:wt&&v(T.thicknessMap.channel),alphaMapUv:Le&&v(T.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(kt||Ut),vertexNormals:!!W.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!W.attributes.uv&&(yt||Le),fog:!!se,useFog:T.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||W.attributes.normal===void 0&&kt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Me,skinning:H.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:me,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numLightProbeGrids:te.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&z.length>0,shadowMapType:a.shadowMap.type,toneMapping:Ee,decodeVideoTexture:yt&&T.map.isVideoTexture===!0&&Pt.getTransfer(T.map.colorSpace)===Vt,decodeVideoTextureEmissive:K&&T.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(T.emissiveMap.colorSpace)===Vt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Vi,flipSided:T.side===si,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:De&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&T.extensions.multiDraw===!0||Ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return et.vertexUv1s=h.has(1),et.vertexUv2s=h.has(2),et.vertexUv3s=h.has(3),h.clear(),et}function _(T){const F=[];if(T.shaderID?F.push(T.shaderID):(F.push(T.customVertexShaderID),F.push(T.customFragmentShaderID)),T.defines!==void 0)for(const z in T.defines)F.push(z),F.push(T.defines[z]);return T.isRawShaderMaterial===!1&&(S(F,T),b(F,T),F.push(a.outputColorSpace)),F.push(T.customProgramCacheKey),F.join()}function S(T,F){T.push(F.precision),T.push(F.outputColorSpace),T.push(F.envMapMode),T.push(F.envMapCubeUVHeight),T.push(F.mapUv),T.push(F.alphaMapUv),T.push(F.lightMapUv),T.push(F.aoMapUv),T.push(F.bumpMapUv),T.push(F.normalMapUv),T.push(F.displacementMapUv),T.push(F.emissiveMapUv),T.push(F.metalnessMapUv),T.push(F.roughnessMapUv),T.push(F.anisotropyMapUv),T.push(F.clearcoatMapUv),T.push(F.clearcoatNormalMapUv),T.push(F.clearcoatRoughnessMapUv),T.push(F.iridescenceMapUv),T.push(F.iridescenceThicknessMapUv),T.push(F.sheenColorMapUv),T.push(F.sheenRoughnessMapUv),T.push(F.specularMapUv),T.push(F.specularColorMapUv),T.push(F.specularIntensityMapUv),T.push(F.transmissionMapUv),T.push(F.thicknessMapUv),T.push(F.combine),T.push(F.fogExp2),T.push(F.sizeAttenuation),T.push(F.morphTargetsCount),T.push(F.morphAttributeCount),T.push(F.numDirLights),T.push(F.numPointLights),T.push(F.numSpotLights),T.push(F.numSpotLightMaps),T.push(F.numHemiLights),T.push(F.numRectAreaLights),T.push(F.numDirLightShadows),T.push(F.numPointLightShadows),T.push(F.numSpotLightShadows),T.push(F.numSpotLightShadowsWithMaps),T.push(F.numLightProbes),T.push(F.shadowMapType),T.push(F.toneMapping),T.push(F.numClippingPlanes),T.push(F.numClipIntersection),T.push(F.depthPacking)}function b(T,F){c.disableAll(),F.instancing&&c.enable(0),F.instancingColor&&c.enable(1),F.instancingMorph&&c.enable(2),F.matcap&&c.enable(3),F.envMap&&c.enable(4),F.normalMapObjectSpace&&c.enable(5),F.normalMapTangentSpace&&c.enable(6),F.clearcoat&&c.enable(7),F.iridescence&&c.enable(8),F.alphaTest&&c.enable(9),F.vertexColors&&c.enable(10),F.vertexAlphas&&c.enable(11),F.vertexUv1s&&c.enable(12),F.vertexUv2s&&c.enable(13),F.vertexUv3s&&c.enable(14),F.vertexTangents&&c.enable(15),F.anisotropy&&c.enable(16),F.alphaHash&&c.enable(17),F.batching&&c.enable(18),F.dispersion&&c.enable(19),F.batchingColor&&c.enable(20),F.gradientMap&&c.enable(21),F.packedNormalMap&&c.enable(22),F.vertexNormals&&c.enable(23),T.push(c.mask),c.disableAll(),F.fog&&c.enable(0),F.useFog&&c.enable(1),F.flatShading&&c.enable(2),F.logarithmicDepthBuffer&&c.enable(3),F.reversedDepthBuffer&&c.enable(4),F.skinning&&c.enable(5),F.morphTargets&&c.enable(6),F.morphNormals&&c.enable(7),F.morphColors&&c.enable(8),F.premultipliedAlpha&&c.enable(9),F.shadowMapEnabled&&c.enable(10),F.doubleSided&&c.enable(11),F.flipSided&&c.enable(12),F.useDepthPacking&&c.enable(13),F.dithering&&c.enable(14),F.transmission&&c.enable(15),F.sheen&&c.enable(16),F.opaque&&c.enable(17),F.pointsUvs&&c.enable(18),F.decodeVideoTexture&&c.enable(19),F.decodeVideoTextureEmissive&&c.enable(20),F.alphaToCoverage&&c.enable(21),F.numLightProbeGrids>0&&c.enable(22),T.push(c.mask)}function C(T){const F=y[T.type];let z;if(F){const D=tr[F];z=Gc.clone(D.uniforms)}else z=T.uniforms;return z}function E(T,F){let z=p.get(F);return z!==void 0?++z.usedTimes:(z=new EE(a,F,T,s),f.push(z),p.set(F,z)),z}function L(T){if(--T.usedTimes===0){const F=f.indexOf(T);f[F]=f[f.length-1],f.pop(),p.delete(T.cacheKey),T.destroy()}}function A(T){u.remove(T)}function I(){u.dispose()}return{getParameters:w,getProgramCacheKey:_,getUniforms:C,acquireProgram:E,releaseProgram:L,releaseShaderCache:A,programs:f,dispose:I}}function LE(){let a=new WeakMap;function e(c){return a.has(c)}function t(c){let u=a.get(c);return u===void 0&&(u={},a.set(c,u)),u}function i(c){a.delete(c)}function s(c,u,h){a.get(c)[u]=h}function o(){a=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:o}}function IE(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function Bg(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Hg(){const a=[];let e=0;const t=[],i=[],s=[];function o(){e=0,t.length=0,i.length=0,s.length=0}function c(m){let y=0;return m.isInstancedMesh&&(y+=2),m.isSkinnedMesh&&(y+=1),y}function u(m,y,v,w,_,S){let b=a[e];return b===void 0?(b={id:m.id,object:m,geometry:y,material:v,materialVariant:c(m),groupOrder:w,renderOrder:m.renderOrder,z:_,group:S},a[e]=b):(b.id=m.id,b.object=m,b.geometry=y,b.material=v,b.materialVariant=c(m),b.groupOrder=w,b.renderOrder=m.renderOrder,b.z=_,b.group=S),e++,b}function h(m,y,v,w,_,S){const b=u(m,y,v,w,_,S);v.transmission>0?i.push(b):v.transparent===!0?s.push(b):t.push(b)}function f(m,y,v,w,_,S){const b=u(m,y,v,w,_,S);v.transmission>0?i.unshift(b):v.transparent===!0?s.unshift(b):t.unshift(b)}function p(m,y){t.length>1&&t.sort(m||IE),i.length>1&&i.sort(y||Bg),s.length>1&&s.sort(y||Bg)}function g(){for(let m=e,y=a.length;m<y;m++){const v=a[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:s,init:o,push:h,unshift:f,finish:g,sort:p}}function NE(){let a=new WeakMap;function e(i,s){const o=a.get(i);let c;return o===void 0?(c=new Hg,a.set(i,[c])):s>=o.length?(c=new Hg,o.push(c)):c=o[s],c}function t(){a=new WeakMap}return{get:e,dispose:t}}function FE(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Z,color:new Ke};break;case"SpotLight":t={position:new Z,direction:new Z,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":t={color:new Ke,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return a[e.id]=t,t}}}function UE(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let DE=0;function kE(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function OE(a){const e=new FE,t=UE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new Z);const s=new Z,o=new Yt,c=new Yt;function u(f){let p=0,g=0,m=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let y=0,v=0,w=0,_=0,S=0,b=0,C=0,E=0,L=0,A=0,I=0;f.sort(kE);for(let F=0,z=f.length;F<z;F++){const D=f[F],H=D.color,te=D.intensity,se=D.distance;let W=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Gs?W=D.shadow.map.texture:W=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)p+=H.r*te,g+=H.g*te,m+=H.b*te;else if(D.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(D.sh.coefficients[V],te);I++}else if(D.isDirectionalLight){const V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const X=D.shadow,j=t.get(D);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,i.directionalShadow[y]=j,i.directionalShadowMap[y]=W,i.directionalShadowMatrix[y]=D.shadow.matrix,b++}i.directional[y]=V,y++}else if(D.isSpotLight){const V=e.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(H).multiplyScalar(te),V.distance=se,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,i.spot[w]=V;const X=D.shadow;if(D.map&&(i.spotLightMap[L]=D.map,L++,X.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[w]=X.matrix,D.castShadow){const j=t.get(D);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,i.spotShadow[w]=j,i.spotShadowMap[w]=W,E++}w++}else if(D.isRectAreaLight){const V=e.get(D);V.color.copy(H).multiplyScalar(te),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),i.rectArea[_]=V,_++}else if(D.isPointLight){const V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),V.distance=D.distance,V.decay=D.decay,D.castShadow){const X=D.shadow,j=t.get(D);j.shadowIntensity=X.intensity,j.shadowBias=X.bias,j.shadowNormalBias=X.normalBias,j.shadowRadius=X.radius,j.shadowMapSize=X.mapSize,j.shadowCameraNear=X.camera.near,j.shadowCameraFar=X.camera.far,i.pointShadow[v]=j,i.pointShadowMap[v]=W,i.pointShadowMatrix[v]=D.shadow.matrix,C++}i.point[v]=V,v++}else if(D.isHemisphereLight){const V=e.get(D);V.skyColor.copy(D.color).multiplyScalar(te),V.groundColor.copy(D.groundColor).multiplyScalar(te),i.hemi[S]=V,S++}}_>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Xe.LTC_FLOAT_1,i.rectAreaLTC2=Xe.LTC_FLOAT_2):(i.rectAreaLTC1=Xe.LTC_HALF_1,i.rectAreaLTC2=Xe.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=g,i.ambient[2]=m;const T=i.hash;(T.directionalLength!==y||T.pointLength!==v||T.spotLength!==w||T.rectAreaLength!==_||T.hemiLength!==S||T.numDirectionalShadows!==b||T.numPointShadows!==C||T.numSpotShadows!==E||T.numSpotMaps!==L||T.numLightProbes!==I)&&(i.directional.length=y,i.spot.length=w,i.rectArea.length=_,i.point.length=v,i.hemi.length=S,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=E+L-A,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=I,T.directionalLength=y,T.pointLength=v,T.spotLength=w,T.rectAreaLength=_,T.hemiLength=S,T.numDirectionalShadows=b,T.numPointShadows=C,T.numSpotShadows=E,T.numSpotMaps=L,T.numLightProbes=I,i.version=DE++)}function h(f,p){let g=0,m=0,y=0,v=0,w=0;const _=p.matrixWorldInverse;for(let S=0,b=f.length;S<b;S++){const C=f[S];if(C.isDirectionalLight){const E=i.directional[g];E.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(_),g++}else if(C.isSpotLight){const E=i.spot[y];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(_),E.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(_),y++}else if(C.isRectAreaLight){const E=i.rectArea[v];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(_),c.identity(),o.copy(C.matrixWorld),o.premultiply(_),c.extractRotation(o),E.halfWidth.set(C.width*.5,0,0),E.halfHeight.set(0,C.height*.5,0),E.halfWidth.applyMatrix4(c),E.halfHeight.applyMatrix4(c),v++}else if(C.isPointLight){const E=i.point[m];E.position.setFromMatrixPosition(C.matrixWorld),E.position.applyMatrix4(_),m++}else if(C.isHemisphereLight){const E=i.hemi[w];E.direction.setFromMatrixPosition(C.matrixWorld),E.direction.transformDirection(_),w++}}}return{setup:u,setupView:h,state:i}}function Gg(a){const e=new OE(a),t=[],i=[],s=[];function o(m){g.camera=m,t.length=0,i.length=0,s.length=0}function c(m){t.push(m)}function u(m){i.push(m)}function h(m){s.push(m)}function f(){e.setup(t)}function p(m){e.setupView(t,m)}const g={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:g,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:u,pushLightProbeGrid:h}}function zE(a){let e=new WeakMap;function t(s,o=0){const c=e.get(s);let u;return c===void 0?(u=new Gg(a),e.set(s,[u])):o>=c.length?(u=new Gg(a),c.push(u)):u=c[o],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const BE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HE=`uniform sampler2D shadow_pass;
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
}`,GE=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],VE=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Vg=new Yt,Oo=new Z,pf=new Z;function WE(a,e,t){let i=new Hd;const s=new ht,o=new ht,c=new sn,u=new KS,h=new ZS,f={},p=t.maxTextureSize,g={[cs]:si,[si]:cs,[Vi]:Vi},m=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ht},radius:{value:4}},vertexShader:BE,fragmentShader:HE}),y=m.clone();y.defines.HORIZONTAL_PASS=1;const v=new cn;v.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new un(v,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cc;let S=this.type;this.render=function(A,I,T){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||A.length===0)return;this.type===by&&(dt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Cc);const F=a.getRenderTarget(),z=a.getActiveCubeFace(),D=a.getActiveMipmapLevel(),H=a.state;H.setBlending(rr),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const te=S!==this.type;te&&I.traverse(function(se){se.material&&(Array.isArray(se.material)?se.material.forEach(W=>W.needsUpdate=!0):se.material.needsUpdate=!0)});for(let se=0,W=A.length;se<W;se++){const V=A[se],X=V.shadow;if(X===void 0){dt("WebGLShadowMap:",V,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const j=X.getFrameExtents();s.multiply(j),o.copy(X.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(o.x=Math.floor(p/j.x),s.x=o.x*j.x,X.mapSize.x=o.x),s.y>p&&(o.y=Math.floor(p/j.y),s.y=o.y*j.y,X.mapSize.y=o.y));const ie=a.state.buffers.depth.getReversed();if(X.camera._reversedDepth=ie,X.map===null||te===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Bo){if(V.isPointLight){dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new ai(s.x,s.y,{format:Gs,type:_i,minFilter:mn,magFilter:mn,generateMipmaps:!1}),X.map.texture.name=V.name+".shadowMap",X.map.depthTexture=new Va(s.x,s.y,Xi),X.map.depthTexture.name=V.name+".shadowMapDepth",X.map.depthTexture.format=Lr,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Un,X.map.depthTexture.magFilter=Un}else V.isPointLight?(X.map=new Kx(s.x),X.map.depthTexture=new WS(s.x,or)):(X.map=new ai(s.x,s.y),X.map.depthTexture=new Va(s.x,s.y,or)),X.map.depthTexture.name=V.name+".shadowMap",X.map.depthTexture.format=Lr,this.type===Cc?(X.map.depthTexture.compareFunction=ie?Dd:Ud,X.map.depthTexture.minFilter=mn,X.map.depthTexture.magFilter=mn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Un,X.map.depthTexture.magFilter=Un);X.camera.updateProjectionMatrix()}const Q=X.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<Q;O++){if(X.map.isWebGLCubeRenderTarget)a.setRenderTarget(X.map,O),a.clear();else{O===0&&(a.setRenderTarget(X.map),a.clear());const ee=X.getViewport(O);c.set(o.x*ee.x,o.y*ee.y,o.x*ee.z,o.y*ee.w),H.viewport(c)}if(V.isPointLight){const ee=X.camera,me=X.matrix,we=V.distance||ee.far;we!==ee.far&&(ee.far=we,ee.updateProjectionMatrix()),Oo.setFromMatrixPosition(V.matrixWorld),ee.position.copy(Oo),pf.copy(ee.position),pf.add(GE[O]),ee.up.copy(VE[O]),ee.lookAt(pf),ee.updateMatrixWorld(),me.makeTranslation(-Oo.x,-Oo.y,-Oo.z),Vg.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Vg,ee.coordinateSystem,ee.reversedDepth)}else X.updateMatrices(V);i=X.getFrustum(),E(I,T,X.camera,V,this.type)}X.isPointLightShadow!==!0&&this.type===Bo&&b(X,T),X.needsUpdate=!1}S=this.type,_.needsUpdate=!1,a.setRenderTarget(F,z,D)};function b(A,I){const T=e.update(w);m.defines.VSM_SAMPLES!==A.blurSamples&&(m.defines.VSM_SAMPLES=A.blurSamples,y.defines.VSM_SAMPLES=A.blurSamples,m.needsUpdate=!0,y.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ai(s.x,s.y,{format:Gs,type:_i})),m.uniforms.shadow_pass.value=A.map.depthTexture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,a.setRenderTarget(A.mapPass),a.clear(),a.renderBufferDirect(I,null,T,m,w,null),y.uniforms.shadow_pass.value=A.mapPass.texture,y.uniforms.resolution.value=A.mapSize,y.uniforms.radius.value=A.radius,a.setRenderTarget(A.map),a.clear(),a.renderBufferDirect(I,null,T,y,w,null)}function C(A,I,T,F){let z=null;const D=T.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)z=D;else if(z=T.isPointLight===!0?h:u,a.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const H=z.uuid,te=I.uuid;let se=f[H];se===void 0&&(se={},f[H]=se);let W=se[te];W===void 0&&(W=z.clone(),se[te]=W,I.addEventListener("dispose",L)),z=W}if(z.visible=I.visible,z.wireframe=I.wireframe,F===Bo?z.side=I.shadowSide!==null?I.shadowSide:I.side:z.side=I.shadowSide!==null?I.shadowSide:g[I.side],z.alphaMap=I.alphaMap,z.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,z.map=I.map,z.clipShadows=I.clipShadows,z.clippingPlanes=I.clippingPlanes,z.clipIntersection=I.clipIntersection,z.displacementMap=I.displacementMap,z.displacementScale=I.displacementScale,z.displacementBias=I.displacementBias,z.wireframeLinewidth=I.wireframeLinewidth,z.linewidth=I.linewidth,T.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const H=a.properties.get(z);H.light=T}return z}function E(A,I,T,F,z){if(A.visible===!1)return;if(A.layers.test(I.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&z===Bo)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,A.matrixWorld);const te=e.update(A),se=A.material;if(Array.isArray(se)){const W=te.groups;for(let V=0,X=W.length;V<X;V++){const j=W[V],ie=se[j.materialIndex];if(ie&&ie.visible){const Q=C(A,ie,F,z);A.onBeforeShadow(a,A,I,T,te,Q,j),a.renderBufferDirect(T,null,te,Q,A,j),A.onAfterShadow(a,A,I,T,te,Q,j)}}}else if(se.visible){const W=C(A,se,F,z);A.onBeforeShadow(a,A,I,T,te,W,null),a.renderBufferDirect(T,null,te,W,A,null),A.onAfterShadow(a,A,I,T,te,W,null)}}const H=A.children;for(let te=0,se=H.length;te<se;te++)E(H[te],I,T,F,z)}function L(A){A.target.removeEventListener("dispose",L);for(const T in f){const F=f[T],z=A.target.uuid;z in F&&(F[z].dispose(),delete F[z])}}}function XE(a,e){function t(){let Y=!1;const Le=new sn;let xe=null;const Ge=new sn(0,0,0,0);return{setMask:function(De){xe!==De&&!Y&&(a.colorMask(De,De,De,De),xe=De)},setLocked:function(De){Y=De},setClear:function(De,Ee,et,ft,zt){zt===!0&&(De*=ft,Ee*=ft,et*=ft),Le.set(De,Ee,et,ft),Ge.equals(Le)===!1&&(a.clearColor(De,Ee,et,ft),Ge.copy(Le))},reset:function(){Y=!1,xe=null,Ge.set(-1,0,0,0)}}}function i(){let Y=!1,Le=!1,xe=null,Ge=null,De=null;return{setReversed:function(Ee){if(Le!==Ee){const et=e.get("EXT_clip_control");Ee?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),Le=Ee;const ft=De;De=null,this.setClear(ft)}},getReversed:function(){return Le},setTest:function(Ee){Ee?oe(a.DEPTH_TEST):Me(a.DEPTH_TEST)},setMask:function(Ee){xe!==Ee&&!Y&&(a.depthMask(Ee),xe=Ee)},setFunc:function(Ee){if(Le&&(Ee=iS[Ee]),Ge!==Ee){switch(Ee){case Ef:a.depthFunc(a.NEVER);break;case Tf:a.depthFunc(a.ALWAYS);break;case Cf:a.depthFunc(a.LESS);break;case Ha:a.depthFunc(a.LEQUAL);break;case Af:a.depthFunc(a.EQUAL);break;case Rf:a.depthFunc(a.GEQUAL);break;case Pf:a.depthFunc(a.GREATER);break;case Lf:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ge=Ee}},setLocked:function(Ee){Y=Ee},setClear:function(Ee){De!==Ee&&(De=Ee,Le&&(Ee=1-Ee),a.clearDepth(Ee))},reset:function(){Y=!1,xe=null,Ge=null,De=null,Le=!1}}}function s(){let Y=!1,Le=null,xe=null,Ge=null,De=null,Ee=null,et=null,ft=null,zt=null;return{setTest:function(ot){Y||(ot?oe(a.STENCIL_TEST):Me(a.STENCIL_TEST))},setMask:function(ot){Le!==ot&&!Y&&(a.stencilMask(ot),Le=ot)},setFunc:function(ot,Ln,Vn){(xe!==ot||Ge!==Ln||De!==Vn)&&(a.stencilFunc(ot,Ln,Vn),xe=ot,Ge=Ln,De=Vn)},setOp:function(ot,Ln,Vn){(Ee!==ot||et!==Ln||ft!==Vn)&&(a.stencilOp(ot,Ln,Vn),Ee=ot,et=Ln,ft=Vn)},setLocked:function(ot){Y=ot},setClear:function(ot){zt!==ot&&(a.clearStencil(ot),zt=ot)},reset:function(){Y=!1,Le=null,xe=null,Ge=null,De=null,Ee=null,et=null,ft=null,zt=null}}}const o=new t,c=new i,u=new s,h=new WeakMap,f=new WeakMap;let p={},g={},m={},y=new WeakMap,v=[],w=null,_=!1,S=null,b=null,C=null,E=null,L=null,A=null,I=null,T=new Ke(0,0,0),F=0,z=!1,D=null,H=null,te=null,se=null,W=null;const V=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,j=0;const ie=a.getParameter(a.VERSION);ie.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(ie)[1]),X=j>=1):ie.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),X=j>=2);let Q=null,O={};const ee=a.getParameter(a.SCISSOR_BOX),me=a.getParameter(a.VIEWPORT),we=new sn().fromArray(ee),ve=new sn().fromArray(me);function q(Y,Le,xe,Ge){const De=new Uint8Array(4),Ee=a.createTexture();a.bindTexture(Y,Ee),a.texParameteri(Y,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(Y,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let et=0;et<xe;et++)Y===a.TEXTURE_3D||Y===a.TEXTURE_2D_ARRAY?a.texImage3D(Le,0,a.RGBA,1,1,Ge,0,a.RGBA,a.UNSIGNED_BYTE,De):a.texImage2D(Le+et,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,De);return Ee}const pe={};pe[a.TEXTURE_2D]=q(a.TEXTURE_2D,a.TEXTURE_2D,1),pe[a.TEXTURE_CUBE_MAP]=q(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[a.TEXTURE_2D_ARRAY]=q(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),pe[a.TEXTURE_3D]=q(a.TEXTURE_3D,a.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),oe(a.DEPTH_TEST),c.setFunc(Ha),Xt(!1),kt(F0),oe(a.CULL_FACE),Rt(rr);function oe(Y){p[Y]!==!0&&(a.enable(Y),p[Y]=!0)}function Me(Y){p[Y]!==!1&&(a.disable(Y),p[Y]=!1)}function ze(Y,Le){return m[Y]!==Le?(a.bindFramebuffer(Y,Le),m[Y]=Le,Y===a.DRAW_FRAMEBUFFER&&(m[a.FRAMEBUFFER]=Le),Y===a.FRAMEBUFFER&&(m[a.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ve(Y,Le){let xe=v,Ge=!1;if(Y){xe=y.get(Le),xe===void 0&&(xe=[],y.set(Le,xe));const De=Y.textures;if(xe.length!==De.length||xe[0]!==a.COLOR_ATTACHMENT0){for(let Ee=0,et=De.length;Ee<et;Ee++)xe[Ee]=a.COLOR_ATTACHMENT0+Ee;xe.length=De.length,Ge=!0}}else xe[0]!==a.BACK&&(xe[0]=a.BACK,Ge=!0);Ge&&a.drawBuffers(xe)}function yt(Y){return w!==Y?(a.useProgram(Y),w=Y,!0):!1}const lt={[ks]:a.FUNC_ADD,[Ty]:a.FUNC_SUBTRACT,[Cy]:a.FUNC_REVERSE_SUBTRACT};lt[Ay]=a.MIN,lt[Ry]=a.MAX;const St={[Py]:a.ZERO,[Ly]:a.ONE,[Iy]:a.SRC_COLOR,[wf]:a.SRC_ALPHA,[Oy]:a.SRC_ALPHA_SATURATE,[Dy]:a.DST_COLOR,[Fy]:a.DST_ALPHA,[Ny]:a.ONE_MINUS_SRC_COLOR,[bf]:a.ONE_MINUS_SRC_ALPHA,[ky]:a.ONE_MINUS_DST_COLOR,[Uy]:a.ONE_MINUS_DST_ALPHA,[zy]:a.CONSTANT_COLOR,[By]:a.ONE_MINUS_CONSTANT_COLOR,[Hy]:a.CONSTANT_ALPHA,[Gy]:a.ONE_MINUS_CONSTANT_ALPHA};function Rt(Y,Le,xe,Ge,De,Ee,et,ft,zt,ot){if(Y===rr){_===!0&&(Me(a.BLEND),_=!1);return}if(_===!1&&(oe(a.BLEND),_=!0),Y!==Ey){if(Y!==S||ot!==z){if((b!==ks||L!==ks)&&(a.blendEquation(a.FUNC_ADD),b=ks,L=ks),ot)switch(Y){case ka:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ba:a.blendFunc(a.ONE,a.ONE);break;case U0:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case D0:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Ft("WebGLState: Invalid blending: ",Y);break}else switch(Y){case ka:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case Ba:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case U0:Ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case D0:Ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ft("WebGLState: Invalid blending: ",Y);break}C=null,E=null,A=null,I=null,T.set(0,0,0),F=0,S=Y,z=ot}return}De=De||Le,Ee=Ee||xe,et=et||Ge,(Le!==b||De!==L)&&(a.blendEquationSeparate(lt[Le],lt[De]),b=Le,L=De),(xe!==C||Ge!==E||Ee!==A||et!==I)&&(a.blendFuncSeparate(St[xe],St[Ge],St[Ee],St[et]),C=xe,E=Ge,A=Ee,I=et),(ft.equals(T)===!1||zt!==F)&&(a.blendColor(ft.r,ft.g,ft.b,zt),T.copy(ft),F=zt),S=Y,z=!1}function gt(Y,Le){Y.side===Vi?Me(a.CULL_FACE):oe(a.CULL_FACE);let xe=Y.side===si;Le&&(xe=!xe),Xt(xe),Y.blending===ka&&Y.transparent===!1?Rt(rr):Rt(Y.blending,Y.blendEquation,Y.blendSrc,Y.blendDst,Y.blendEquationAlpha,Y.blendSrcAlpha,Y.blendDstAlpha,Y.blendColor,Y.blendAlpha,Y.premultipliedAlpha),c.setFunc(Y.depthFunc),c.setTest(Y.depthTest),c.setMask(Y.depthWrite),o.setMask(Y.colorWrite);const Ge=Y.stencilWrite;u.setTest(Ge),Ge&&(u.setMask(Y.stencilWriteMask),u.setFunc(Y.stencilFunc,Y.stencilRef,Y.stencilFuncMask),u.setOp(Y.stencilFail,Y.stencilZFail,Y.stencilZPass)),K(Y.polygonOffset,Y.polygonOffsetFactor,Y.polygonOffsetUnits),Y.alphaToCoverage===!0?oe(a.SAMPLE_ALPHA_TO_COVERAGE):Me(a.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(Y){D!==Y&&(Y?a.frontFace(a.CW):a.frontFace(a.CCW),D=Y)}function kt(Y){Y!==My?(oe(a.CULL_FACE),Y!==H&&(Y===F0?a.cullFace(a.BACK):Y===wy?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Me(a.CULL_FACE),H=Y}function hn(Y){Y!==te&&(X&&a.lineWidth(Y),te=Y)}function K(Y,Le,xe){Y?(oe(a.POLYGON_OFFSET_FILL),(se!==Le||W!==xe)&&(se=Le,W=xe,c.getReversed()&&(Le=-Le),a.polygonOffset(Le,xe))):Me(a.POLYGON_OFFSET_FILL)}function Ot(Y){Y?oe(a.SCISSOR_TEST):Me(a.SCISSOR_TEST)}function xt(Y){Y===void 0&&(Y=a.TEXTURE0+V-1),Q!==Y&&(a.activeTexture(Y),Q=Y)}function Ut(Y,Le,xe){xe===void 0&&(Q===null?xe=a.TEXTURE0+V-1:xe=Q);let Ge=O[xe];Ge===void 0&&(Ge={type:void 0,texture:void 0},O[xe]=Ge),(Ge.type!==Y||Ge.texture!==Le)&&(Q!==xe&&(a.activeTexture(xe),Q=xe),a.bindTexture(Y,Le||pe[Y]),Ge.type=Y,Ge.texture=Le)}function Be(){const Y=O[Q];Y!==void 0&&Y.type!==void 0&&(a.bindTexture(Y.type,null),Y.type=void 0,Y.texture=void 0)}function Wt(){try{a.compressedTexImage2D(...arguments)}catch(Y){Ft("WebGLState:",Y)}}function k(){try{a.compressedTexImage3D(...arguments)}catch(Y){Ft("WebGLState:",Y)}}function R(){try{a.texSubImage2D(...arguments)}catch(Y){Ft("WebGLState:",Y)}}function re(){try{a.texSubImage3D(...arguments)}catch(Y){Ft("WebGLState:",Y)}}function _e(){try{a.compressedTexSubImage2D(...arguments)}catch(Y){Ft("WebGLState:",Y)}}function be(){try{a.compressedTexSubImage3D(...arguments)}catch(Y){Ft("WebGLState:",Y)}}function Pe(){try{a.texStorage2D(...arguments)}catch(Y){Ft("WebGLState:",Y)}}function Oe(){try{a.texStorage3D(...arguments)}catch(Y){Ft("WebGLState:",Y)}}function ge(){try{a.texImage2D(...arguments)}catch(Y){Ft("WebGLState:",Y)}}function ye(){try{a.texImage3D(...arguments)}catch(Y){Ft("WebGLState:",Y)}}function We(Y){return g[Y]!==void 0?g[Y]:a.getParameter(Y)}function qe(Y,Le){g[Y]!==Le&&(a.pixelStorei(Y,Le),g[Y]=Le)}function Ue(Y){we.equals(Y)===!1&&(a.scissor(Y.x,Y.y,Y.z,Y.w),we.copy(Y))}function Ne(Y){ve.equals(Y)===!1&&(a.viewport(Y.x,Y.y,Y.z,Y.w),ve.copy(Y))}function Qe(Y,Le){let xe=f.get(Le);xe===void 0&&(xe=new WeakMap,f.set(Le,xe));let Ge=xe.get(Y);Ge===void 0&&(Ge=a.getUniformBlockIndex(Le,Y.name),xe.set(Y,Ge))}function pt(Y,Le){const Ge=f.get(Le).get(Y);h.get(Le)!==Ge&&(a.uniformBlockBinding(Le,Ge,Y.__bindingPointIndex),h.set(Le,Ge))}function wt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),c.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),p={},g={},Q=null,O={},m={},y=new WeakMap,v=[],w=null,_=!1,S=null,b=null,C=null,E=null,L=null,A=null,I=null,T=new Ke(0,0,0),F=0,z=!1,D=null,H=null,te=null,se=null,W=null,we.set(0,0,a.canvas.width,a.canvas.height),ve.set(0,0,a.canvas.width,a.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:oe,disable:Me,bindFramebuffer:ze,drawBuffers:Ve,useProgram:yt,setBlending:Rt,setMaterial:gt,setFlipSided:Xt,setCullFace:kt,setLineWidth:hn,setPolygonOffset:K,setScissorTest:Ot,activeTexture:xt,bindTexture:Ut,unbindTexture:Be,compressedTexImage2D:Wt,compressedTexImage3D:k,texImage2D:ge,texImage3D:ye,pixelStorei:qe,getParameter:We,updateUBOMapping:Qe,uniformBlockBinding:pt,texStorage2D:Pe,texStorage3D:Oe,texSubImage2D:R,texSubImage3D:re,compressedTexSubImage2D:_e,compressedTexSubImage3D:be,scissor:Ue,viewport:Ne,reset:wt}}function jE(a,e,t,i,s,o,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new ht,p=new WeakMap,g=new Set;let m;const y=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(k,R){return v?new OffscreenCanvas(k,R):zc("canvas")}function _(k,R,re){let _e=1;const be=Wt(k);if((be.width>re||be.height>re)&&(_e=re/Math.max(be.width,be.height)),_e<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const Pe=Math.floor(_e*be.width),Oe=Math.floor(_e*be.height);m===void 0&&(m=w(Pe,Oe));const ge=R?w(Pe,Oe):m;return ge.width=Pe,ge.height=Oe,ge.getContext("2d").drawImage(k,0,0,Pe,Oe),dt("WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+Pe+"x"+Oe+")."),ge}else return"data"in k&&dt("WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),k;return k}function S(k){return k.generateMipmaps}function b(k){a.generateMipmap(k)}function C(k){return k.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?a.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function E(k,R,re,_e,be,Pe=!1){if(k!==null){if(a[k]!==void 0)return a[k];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let Oe;_e&&(Oe=e.get("EXT_texture_norm16"),Oe||dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=R;if(R===a.RED&&(re===a.FLOAT&&(ge=a.R32F),re===a.HALF_FLOAT&&(ge=a.R16F),re===a.UNSIGNED_BYTE&&(ge=a.R8),re===a.UNSIGNED_SHORT&&Oe&&(ge=Oe.R16_EXT),re===a.SHORT&&Oe&&(ge=Oe.R16_SNORM_EXT)),R===a.RED_INTEGER&&(re===a.UNSIGNED_BYTE&&(ge=a.R8UI),re===a.UNSIGNED_SHORT&&(ge=a.R16UI),re===a.UNSIGNED_INT&&(ge=a.R32UI),re===a.BYTE&&(ge=a.R8I),re===a.SHORT&&(ge=a.R16I),re===a.INT&&(ge=a.R32I)),R===a.RG&&(re===a.FLOAT&&(ge=a.RG32F),re===a.HALF_FLOAT&&(ge=a.RG16F),re===a.UNSIGNED_BYTE&&(ge=a.RG8),re===a.UNSIGNED_SHORT&&Oe&&(ge=Oe.RG16_EXT),re===a.SHORT&&Oe&&(ge=Oe.RG16_SNORM_EXT)),R===a.RG_INTEGER&&(re===a.UNSIGNED_BYTE&&(ge=a.RG8UI),re===a.UNSIGNED_SHORT&&(ge=a.RG16UI),re===a.UNSIGNED_INT&&(ge=a.RG32UI),re===a.BYTE&&(ge=a.RG8I),re===a.SHORT&&(ge=a.RG16I),re===a.INT&&(ge=a.RG32I)),R===a.RGB_INTEGER&&(re===a.UNSIGNED_BYTE&&(ge=a.RGB8UI),re===a.UNSIGNED_SHORT&&(ge=a.RGB16UI),re===a.UNSIGNED_INT&&(ge=a.RGB32UI),re===a.BYTE&&(ge=a.RGB8I),re===a.SHORT&&(ge=a.RGB16I),re===a.INT&&(ge=a.RGB32I)),R===a.RGBA_INTEGER&&(re===a.UNSIGNED_BYTE&&(ge=a.RGBA8UI),re===a.UNSIGNED_SHORT&&(ge=a.RGBA16UI),re===a.UNSIGNED_INT&&(ge=a.RGBA32UI),re===a.BYTE&&(ge=a.RGBA8I),re===a.SHORT&&(ge=a.RGBA16I),re===a.INT&&(ge=a.RGBA32I)),R===a.RGB&&(re===a.UNSIGNED_SHORT&&Oe&&(ge=Oe.RGB16_EXT),re===a.SHORT&&Oe&&(ge=Oe.RGB16_SNORM_EXT),re===a.UNSIGNED_INT_5_9_9_9_REV&&(ge=a.RGB9_E5),re===a.UNSIGNED_INT_10F_11F_11F_REV&&(ge=a.R11F_G11F_B10F)),R===a.RGBA){const ye=Pe?Oc:Pt.getTransfer(be);re===a.FLOAT&&(ge=a.RGBA32F),re===a.HALF_FLOAT&&(ge=a.RGBA16F),re===a.UNSIGNED_BYTE&&(ge=ye===Vt?a.SRGB8_ALPHA8:a.RGBA8),re===a.UNSIGNED_SHORT&&Oe&&(ge=Oe.RGBA16_EXT),re===a.SHORT&&Oe&&(ge=Oe.RGBA16_SNORM_EXT),re===a.UNSIGNED_SHORT_4_4_4_4&&(ge=a.RGBA4),re===a.UNSIGNED_SHORT_5_5_5_1&&(ge=a.RGB5_A1)}return(ge===a.R16F||ge===a.R32F||ge===a.RG16F||ge===a.RG32F||ge===a.RGBA16F||ge===a.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function L(k,R){let re;return k?R===null||R===or||R===qo?re=a.DEPTH24_STENCIL8:R===Xi?re=a.DEPTH32F_STENCIL8:R===jo&&(re=a.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===or||R===qo?re=a.DEPTH_COMPONENT24:R===Xi?re=a.DEPTH_COMPONENT32F:R===jo&&(re=a.DEPTH_COMPONENT16),re}function A(k,R){return S(k)===!0||k.isFramebufferTexture&&k.minFilter!==Un&&k.minFilter!==mn?Math.log2(Math.max(R.width,R.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?R.mipmaps.length:1}function I(k){const R=k.target;R.removeEventListener("dispose",I),F(R),R.isVideoTexture&&p.delete(R),R.isHTMLTexture&&g.delete(R)}function T(k){const R=k.target;R.removeEventListener("dispose",T),D(R)}function F(k){const R=i.get(k);if(R.__webglInit===void 0)return;const re=k.source,_e=y.get(re);if(_e){const be=_e[R.__cacheKey];be.usedTimes--,be.usedTimes===0&&z(k),Object.keys(_e).length===0&&y.delete(re)}i.remove(k)}function z(k){const R=i.get(k);a.deleteTexture(R.__webglTexture);const re=k.source,_e=y.get(re);delete _e[R.__cacheKey],c.memory.textures--}function D(k){const R=i.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),i.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(R.__webglFramebuffer[_e]))for(let be=0;be<R.__webglFramebuffer[_e].length;be++)a.deleteFramebuffer(R.__webglFramebuffer[_e][be]);else a.deleteFramebuffer(R.__webglFramebuffer[_e]);R.__webglDepthbuffer&&a.deleteRenderbuffer(R.__webglDepthbuffer[_e])}else{if(Array.isArray(R.__webglFramebuffer))for(let _e=0;_e<R.__webglFramebuffer.length;_e++)a.deleteFramebuffer(R.__webglFramebuffer[_e]);else a.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&a.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&a.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let _e=0;_e<R.__webglColorRenderbuffer.length;_e++)R.__webglColorRenderbuffer[_e]&&a.deleteRenderbuffer(R.__webglColorRenderbuffer[_e]);R.__webglDepthRenderbuffer&&a.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const re=k.textures;for(let _e=0,be=re.length;_e<be;_e++){const Pe=i.get(re[_e]);Pe.__webglTexture&&(a.deleteTexture(Pe.__webglTexture),c.memory.textures--),i.remove(re[_e])}i.remove(k)}let H=0;function te(){H=0}function se(){return H}function W(k){H=k}function V(){const k=H;return k>=s.maxTextures&&dt("WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+s.maxTextures),H+=1,k}function X(k){const R=[];return R.push(k.wrapS),R.push(k.wrapT),R.push(k.wrapR||0),R.push(k.magFilter),R.push(k.minFilter),R.push(k.anisotropy),R.push(k.internalFormat),R.push(k.format),R.push(k.type),R.push(k.generateMipmaps),R.push(k.premultiplyAlpha),R.push(k.flipY),R.push(k.unpackAlignment),R.push(k.colorSpace),R.join()}function j(k,R){const re=i.get(k);if(k.isVideoTexture&&Ut(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&re.__version!==k.version){const _e=k.image;if(_e===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{Me(re,k,R);return}}else k.isExternalTexture&&(re.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,re.__webglTexture,a.TEXTURE0+R)}function ie(k,R){const re=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&re.__version!==k.version){Me(re,k,R);return}else k.isExternalTexture&&(re.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,re.__webglTexture,a.TEXTURE0+R)}function Q(k,R){const re=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&re.__version!==k.version){Me(re,k,R);return}t.bindTexture(a.TEXTURE_3D,re.__webglTexture,a.TEXTURE0+R)}function O(k,R){const re=i.get(k);if(k.isCubeDepthTexture!==!0&&k.version>0&&re.__version!==k.version){ze(re,k,R);return}t.bindTexture(a.TEXTURE_CUBE_MAP,re.__webglTexture,a.TEXTURE0+R)}const ee={[If]:a.REPEAT,[Ar]:a.CLAMP_TO_EDGE,[Nf]:a.MIRRORED_REPEAT},me={[Un]:a.NEAREST,[Xy]:a.NEAREST_MIPMAP_NEAREST,[Jl]:a.NEAREST_MIPMAP_LINEAR,[mn]:a.LINEAR,[Dh]:a.LINEAR_MIPMAP_NEAREST,[zs]:a.LINEAR_MIPMAP_LINEAR},we={[Yy]:a.NEVER,[Jy]:a.ALWAYS,[$y]:a.LESS,[Ud]:a.LEQUAL,[Ky]:a.EQUAL,[Dd]:a.GEQUAL,[Zy]:a.GREATER,[Qy]:a.NOTEQUAL};function ve(k,R){if(R.type===Xi&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===mn||R.magFilter===Dh||R.magFilter===Jl||R.magFilter===zs||R.minFilter===mn||R.minFilter===Dh||R.minFilter===Jl||R.minFilter===zs)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(k,a.TEXTURE_WRAP_S,ee[R.wrapS]),a.texParameteri(k,a.TEXTURE_WRAP_T,ee[R.wrapT]),(k===a.TEXTURE_3D||k===a.TEXTURE_2D_ARRAY)&&a.texParameteri(k,a.TEXTURE_WRAP_R,ee[R.wrapR]),a.texParameteri(k,a.TEXTURE_MAG_FILTER,me[R.magFilter]),a.texParameteri(k,a.TEXTURE_MIN_FILTER,me[R.minFilter]),R.compareFunction&&(a.texParameteri(k,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(k,a.TEXTURE_COMPARE_FUNC,we[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Un||R.minFilter!==Jl&&R.minFilter!==zs||R.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");a.texParameterf(k,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function q(k,R){let re=!1;k.__webglInit===void 0&&(k.__webglInit=!0,R.addEventListener("dispose",I));const _e=R.source;let be=y.get(_e);be===void 0&&(be={},y.set(_e,be));const Pe=X(R);if(Pe!==k.__cacheKey){be[Pe]===void 0&&(be[Pe]={texture:a.createTexture(),usedTimes:0},c.memory.textures++,re=!0),be[Pe].usedTimes++;const Oe=be[k.__cacheKey];Oe!==void 0&&(be[k.__cacheKey].usedTimes--,Oe.usedTimes===0&&z(R)),k.__cacheKey=Pe,k.__webglTexture=be[Pe].texture}return re}function pe(k,R,re){return Math.floor(Math.floor(k/re)/R)}function oe(k,R,re,_e){const Pe=k.updateRanges;if(Pe.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,R.width,R.height,re,_e,R.data);else{Pe.sort((qe,Ue)=>qe.start-Ue.start);let Oe=0;for(let qe=1;qe<Pe.length;qe++){const Ue=Pe[Oe],Ne=Pe[qe],Qe=Ue.start+Ue.count,pt=pe(Ne.start,R.width,4),wt=pe(Ue.start,R.width,4);Ne.start<=Qe+1&&pt===wt&&pe(Ne.start+Ne.count-1,R.width,4)===pt?Ue.count=Math.max(Ue.count,Ne.start+Ne.count-Ue.start):(++Oe,Pe[Oe]=Ne)}Pe.length=Oe+1;const ge=t.getParameter(a.UNPACK_ROW_LENGTH),ye=t.getParameter(a.UNPACK_SKIP_PIXELS),We=t.getParameter(a.UNPACK_SKIP_ROWS);t.pixelStorei(a.UNPACK_ROW_LENGTH,R.width);for(let qe=0,Ue=Pe.length;qe<Ue;qe++){const Ne=Pe[qe],Qe=Math.floor(Ne.start/4),pt=Math.ceil(Ne.count/4),wt=Qe%R.width,Y=Math.floor(Qe/R.width),Le=pt,xe=1;t.pixelStorei(a.UNPACK_SKIP_PIXELS,wt),t.pixelStorei(a.UNPACK_SKIP_ROWS,Y),t.texSubImage2D(a.TEXTURE_2D,0,wt,Y,Le,xe,re,_e,R.data)}k.clearUpdateRanges(),t.pixelStorei(a.UNPACK_ROW_LENGTH,ge),t.pixelStorei(a.UNPACK_SKIP_PIXELS,ye),t.pixelStorei(a.UNPACK_SKIP_ROWS,We)}}function Me(k,R,re){let _e=a.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(_e=a.TEXTURE_2D_ARRAY),R.isData3DTexture&&(_e=a.TEXTURE_3D);const be=q(k,R),Pe=R.source;t.bindTexture(_e,k.__webglTexture,a.TEXTURE0+re);const Oe=i.get(Pe);if(Pe.version!==Oe.__version||be===!0){if(t.activeTexture(a.TEXTURE0+re),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){const xe=Pt.getPrimaries(Pt.workingColorSpace),Ge=R.colorSpace===as?null:Pt.getPrimaries(R.colorSpace),De=R.colorSpace===as||xe===Ge?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,De)}t.pixelStorei(a.UNPACK_ALIGNMENT,R.unpackAlignment);let ye=_(R.image,!1,s.maxTextureSize);ye=Be(R,ye);const We=o.convert(R.format,R.colorSpace),qe=o.convert(R.type);let Ue=E(R.internalFormat,We,qe,R.normalized,R.colorSpace,R.isVideoTexture);ve(_e,R);let Ne;const Qe=R.mipmaps,pt=R.isVideoTexture!==!0,wt=Oe.__version===void 0||be===!0,Y=Pe.dataReady,Le=A(R,ye);if(R.isDepthTexture)Ue=L(R.format===Bs,R.type),wt&&(pt?t.texStorage2D(a.TEXTURE_2D,1,Ue,ye.width,ye.height):t.texImage2D(a.TEXTURE_2D,0,Ue,ye.width,ye.height,0,We,qe,null));else if(R.isDataTexture)if(Qe.length>0){pt&&wt&&t.texStorage2D(a.TEXTURE_2D,Le,Ue,Qe[0].width,Qe[0].height);for(let xe=0,Ge=Qe.length;xe<Ge;xe++)Ne=Qe[xe],pt?Y&&t.texSubImage2D(a.TEXTURE_2D,xe,0,0,Ne.width,Ne.height,We,qe,Ne.data):t.texImage2D(a.TEXTURE_2D,xe,Ue,Ne.width,Ne.height,0,We,qe,Ne.data);R.generateMipmaps=!1}else pt?(wt&&t.texStorage2D(a.TEXTURE_2D,Le,Ue,ye.width,ye.height),Y&&oe(R,ye,We,qe)):t.texImage2D(a.TEXTURE_2D,0,Ue,ye.width,ye.height,0,We,qe,ye.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){pt&&wt&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Le,Ue,Qe[0].width,Qe[0].height,ye.depth);for(let xe=0,Ge=Qe.length;xe<Ge;xe++)if(Ne=Qe[xe],R.format!==vi)if(We!==null)if(pt){if(Y)if(R.layerUpdates.size>0){const De=yg(Ne.width,Ne.height,R.format,R.type);for(const Ee of R.layerUpdates){const et=Ne.data.subarray(Ee*De/Ne.data.BYTES_PER_ELEMENT,(Ee+1)*De/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,Ee,Ne.width,Ne.height,1,We,et)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,0,Ne.width,Ne.height,ye.depth,We,Ne.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,xe,Ue,Ne.width,Ne.height,ye.depth,0,Ne.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pt?Y&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,xe,0,0,0,Ne.width,Ne.height,ye.depth,We,qe,Ne.data):t.texImage3D(a.TEXTURE_2D_ARRAY,xe,Ue,Ne.width,Ne.height,ye.depth,0,We,qe,Ne.data)}else{pt&&wt&&t.texStorage2D(a.TEXTURE_2D,Le,Ue,Qe[0].width,Qe[0].height);for(let xe=0,Ge=Qe.length;xe<Ge;xe++)Ne=Qe[xe],R.format!==vi?We!==null?pt?Y&&t.compressedTexSubImage2D(a.TEXTURE_2D,xe,0,0,Ne.width,Ne.height,We,Ne.data):t.compressedTexImage2D(a.TEXTURE_2D,xe,Ue,Ne.width,Ne.height,0,Ne.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?Y&&t.texSubImage2D(a.TEXTURE_2D,xe,0,0,Ne.width,Ne.height,We,qe,Ne.data):t.texImage2D(a.TEXTURE_2D,xe,Ue,Ne.width,Ne.height,0,We,qe,Ne.data)}else if(R.isDataArrayTexture)if(pt){if(wt&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Le,Ue,ye.width,ye.height,ye.depth),Y)if(R.layerUpdates.size>0){const xe=yg(ye.width,ye.height,R.format,R.type);for(const Ge of R.layerUpdates){const De=ye.data.subarray(Ge*xe/ye.data.BYTES_PER_ELEMENT,(Ge+1)*xe/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Ge,ye.width,ye.height,1,We,qe,De)}R.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,We,qe,ye.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,Ue,ye.width,ye.height,ye.depth,0,We,qe,ye.data);else if(R.isData3DTexture)pt?(wt&&t.texStorage3D(a.TEXTURE_3D,Le,Ue,ye.width,ye.height,ye.depth),Y&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,We,qe,ye.data)):t.texImage3D(a.TEXTURE_3D,0,Ue,ye.width,ye.height,ye.depth,0,We,qe,ye.data);else if(R.isFramebufferTexture){if(wt)if(pt)t.texStorage2D(a.TEXTURE_2D,Le,Ue,ye.width,ye.height);else{let xe=ye.width,Ge=ye.height;for(let De=0;De<Le;De++)t.texImage2D(a.TEXTURE_2D,De,Ue,xe,Ge,0,We,qe,null),xe>>=1,Ge>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in a){const xe=a.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),ye.parentNode!==xe){xe.appendChild(ye),g.add(R),xe.onpaint=ft=>{const zt=ft.changedElements;for(const ot of g)zt.includes(ot.image)&&(ot.needsUpdate=!0)},xe.requestPaint();return}const Ge=0,De=a.RGBA,Ee=a.RGBA,et=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,Ge,De,Ee,et,ye),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(Qe.length>0){if(pt&&wt){const xe=Wt(Qe[0]);t.texStorage2D(a.TEXTURE_2D,Le,Ue,xe.width,xe.height)}for(let xe=0,Ge=Qe.length;xe<Ge;xe++)Ne=Qe[xe],pt?Y&&t.texSubImage2D(a.TEXTURE_2D,xe,0,0,We,qe,Ne):t.texImage2D(a.TEXTURE_2D,xe,Ue,We,qe,Ne);R.generateMipmaps=!1}else if(pt){if(wt){const xe=Wt(ye);t.texStorage2D(a.TEXTURE_2D,Le,Ue,xe.width,xe.height)}Y&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,We,qe,ye)}else t.texImage2D(a.TEXTURE_2D,0,Ue,We,qe,ye);S(R)&&b(_e),Oe.__version=Pe.version,R.onUpdate&&R.onUpdate(R)}k.__version=R.version}function ze(k,R,re){if(R.image.length!==6)return;const _e=q(k,R),be=R.source;t.bindTexture(a.TEXTURE_CUBE_MAP,k.__webglTexture,a.TEXTURE0+re);const Pe=i.get(be);if(be.version!==Pe.__version||_e===!0){t.activeTexture(a.TEXTURE0+re);const Oe=Pt.getPrimaries(Pt.workingColorSpace),ge=R.colorSpace===as?null:Pt.getPrimaries(R.colorSpace),ye=R.colorSpace===as||Oe===ge?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(a.UNPACK_ALIGNMENT,R.unpackAlignment),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const We=R.isCompressedTexture||R.image[0].isCompressedTexture,qe=R.image[0]&&R.image[0].isDataTexture,Ue=[];for(let Ee=0;Ee<6;Ee++)!We&&!qe?Ue[Ee]=_(R.image[Ee],!0,s.maxCubemapSize):Ue[Ee]=qe?R.image[Ee].image:R.image[Ee],Ue[Ee]=Be(R,Ue[Ee]);const Ne=Ue[0],Qe=o.convert(R.format,R.colorSpace),pt=o.convert(R.type),wt=E(R.internalFormat,Qe,pt,R.normalized,R.colorSpace),Y=R.isVideoTexture!==!0,Le=Pe.__version===void 0||_e===!0,xe=be.dataReady;let Ge=A(R,Ne);ve(a.TEXTURE_CUBE_MAP,R);let De;if(We){Y&&Le&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Ge,wt,Ne.width,Ne.height);for(let Ee=0;Ee<6;Ee++){De=Ue[Ee].mipmaps;for(let et=0;et<De.length;et++){const ft=De[et];R.format!==vi?Qe!==null?Y?xe&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,et,0,0,ft.width,ft.height,Qe,ft.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,et,wt,ft.width,ft.height,0,ft.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Y?xe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,et,0,0,ft.width,ft.height,Qe,pt,ft.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,et,wt,ft.width,ft.height,0,Qe,pt,ft.data)}}}else{if(De=R.mipmaps,Y&&Le){De.length>0&&Ge++;const Ee=Wt(Ue[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,Ge,wt,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(qe){Y?xe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Ue[Ee].width,Ue[Ee].height,Qe,pt,Ue[Ee].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,wt,Ue[Ee].width,Ue[Ee].height,0,Qe,pt,Ue[Ee].data);for(let et=0;et<De.length;et++){const zt=De[et].image[Ee].image;Y?xe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,et+1,0,0,zt.width,zt.height,Qe,pt,zt.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,et+1,wt,zt.width,zt.height,0,Qe,pt,zt.data)}}else{Y?xe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Qe,pt,Ue[Ee]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,wt,Qe,pt,Ue[Ee]);for(let et=0;et<De.length;et++){const ft=De[et];Y?xe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,et+1,0,0,Qe,pt,ft.image[Ee]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,et+1,wt,Qe,pt,ft.image[Ee])}}}S(R)&&b(a.TEXTURE_CUBE_MAP),Pe.__version=be.version,R.onUpdate&&R.onUpdate(R)}k.__version=R.version}function Ve(k,R,re,_e,be,Pe){const Oe=o.convert(re.format,re.colorSpace),ge=o.convert(re.type),ye=E(re.internalFormat,Oe,ge,re.normalized,re.colorSpace),We=i.get(R),qe=i.get(re);if(qe.__renderTarget=R,!We.__hasExternalTextures){const Ue=Math.max(1,R.width>>Pe),Ne=Math.max(1,R.height>>Pe);be===a.TEXTURE_3D||be===a.TEXTURE_2D_ARRAY?t.texImage3D(be,Pe,ye,Ue,Ne,R.depth,0,Oe,ge,null):t.texImage2D(be,Pe,ye,Ue,Ne,0,Oe,ge,null)}t.bindFramebuffer(a.FRAMEBUFFER,k),xt(R)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,_e,be,qe.__webglTexture,0,Ot(R)):(be===a.TEXTURE_2D||be>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,_e,be,qe.__webglTexture,Pe),t.bindFramebuffer(a.FRAMEBUFFER,null)}function yt(k,R,re){if(a.bindRenderbuffer(a.RENDERBUFFER,k),R.depthBuffer){const _e=R.depthTexture,be=_e&&_e.isDepthTexture?_e.type:null,Pe=L(R.stencilBuffer,be),Oe=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;xt(R)?u.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ot(R),Pe,R.width,R.height):re?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ot(R),Pe,R.width,R.height):a.renderbufferStorage(a.RENDERBUFFER,Pe,R.width,R.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Oe,a.RENDERBUFFER,k)}else{const _e=R.textures;for(let be=0;be<_e.length;be++){const Pe=_e[be],Oe=o.convert(Pe.format,Pe.colorSpace),ge=o.convert(Pe.type),ye=E(Pe.internalFormat,Oe,ge,Pe.normalized,Pe.colorSpace);xt(R)?u.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Ot(R),ye,R.width,R.height):re?a.renderbufferStorageMultisample(a.RENDERBUFFER,Ot(R),ye,R.width,R.height):a.renderbufferStorage(a.RENDERBUFFER,ye,R.width,R.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function lt(k,R,re){const _e=R.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,k),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const be=i.get(R.depthTexture);if(be.__renderTarget=R,(!be.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),_e){if(be.__webglInit===void 0&&(be.__webglInit=!0,R.depthTexture.addEventListener("dispose",I)),be.__webglTexture===void 0){be.__webglTexture=a.createTexture(),t.bindTexture(a.TEXTURE_CUBE_MAP,be.__webglTexture),ve(a.TEXTURE_CUBE_MAP,R.depthTexture);const We=o.convert(R.depthTexture.format),qe=o.convert(R.depthTexture.type);let Ue;R.depthTexture.format===Lr?Ue=a.DEPTH_COMPONENT24:R.depthTexture.format===Bs&&(Ue=a.DEPTH24_STENCIL8);for(let Ne=0;Ne<6;Ne++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0,Ue,R.width,R.height,0,We,qe,null)}}else j(R.depthTexture,0);const Pe=be.__webglTexture,Oe=Ot(R),ge=_e?a.TEXTURE_CUBE_MAP_POSITIVE_X+re:a.TEXTURE_2D,ye=R.depthTexture.format===Bs?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(R.depthTexture.format===Lr)xt(R)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ye,ge,Pe,0,Oe):a.framebufferTexture2D(a.FRAMEBUFFER,ye,ge,Pe,0);else if(R.depthTexture.format===Bs)xt(R)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ye,ge,Pe,0,Oe):a.framebufferTexture2D(a.FRAMEBUFFER,ye,ge,Pe,0);else throw new Error("Unknown depthTexture format")}function St(k){const R=i.get(k),re=k.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==k.depthTexture){const _e=k.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),_e){const be=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,_e.removeEventListener("dispose",be)};_e.addEventListener("dispose",be),R.__depthDisposeCallback=be}R.__boundDepthTexture=_e}if(k.depthTexture&&!R.__autoAllocateDepthBuffer)if(re)for(let _e=0;_e<6;_e++)lt(R.__webglFramebuffer[_e],k,_e);else{const _e=k.texture.mipmaps;_e&&_e.length>0?lt(R.__webglFramebuffer[0],k,0):lt(R.__webglFramebuffer,k,0)}else if(re){R.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(a.FRAMEBUFFER,R.__webglFramebuffer[_e]),R.__webglDepthbuffer[_e]===void 0)R.__webglDepthbuffer[_e]=a.createRenderbuffer(),yt(R.__webglDepthbuffer[_e],k,!1);else{const be=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Pe=R.__webglDepthbuffer[_e];a.bindRenderbuffer(a.RENDERBUFFER,Pe),a.framebufferRenderbuffer(a.FRAMEBUFFER,be,a.RENDERBUFFER,Pe)}}else{const _e=k.texture.mipmaps;if(_e&&_e.length>0?t.bindFramebuffer(a.FRAMEBUFFER,R.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=a.createRenderbuffer(),yt(R.__webglDepthbuffer,k,!1);else{const be=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Pe=R.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Pe),a.framebufferRenderbuffer(a.FRAMEBUFFER,be,a.RENDERBUFFER,Pe)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function Rt(k,R,re){const _e=i.get(k);R!==void 0&&Ve(_e.__webglFramebuffer,k,k.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),re!==void 0&&St(k)}function gt(k){const R=k.texture,re=i.get(k),_e=i.get(R);k.addEventListener("dispose",T);const be=k.textures,Pe=k.isWebGLCubeRenderTarget===!0,Oe=be.length>1;if(Oe||(_e.__webglTexture===void 0&&(_e.__webglTexture=a.createTexture()),_e.__version=R.version,c.memory.textures++),Pe){re.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(R.mipmaps&&R.mipmaps.length>0){re.__webglFramebuffer[ge]=[];for(let ye=0;ye<R.mipmaps.length;ye++)re.__webglFramebuffer[ge][ye]=a.createFramebuffer()}else re.__webglFramebuffer[ge]=a.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){re.__webglFramebuffer=[];for(let ge=0;ge<R.mipmaps.length;ge++)re.__webglFramebuffer[ge]=a.createFramebuffer()}else re.__webglFramebuffer=a.createFramebuffer();if(Oe)for(let ge=0,ye=be.length;ge<ye;ge++){const We=i.get(be[ge]);We.__webglTexture===void 0&&(We.__webglTexture=a.createTexture(),c.memory.textures++)}if(k.samples>0&&xt(k)===!1){re.__webglMultisampledFramebuffer=a.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let ge=0;ge<be.length;ge++){const ye=be[ge];re.__webglColorRenderbuffer[ge]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,re.__webglColorRenderbuffer[ge]);const We=o.convert(ye.format,ye.colorSpace),qe=o.convert(ye.type),Ue=E(ye.internalFormat,We,qe,ye.normalized,ye.colorSpace,k.isXRRenderTarget===!0),Ne=Ot(k);a.renderbufferStorageMultisample(a.RENDERBUFFER,Ne,Ue,k.width,k.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+ge,a.RENDERBUFFER,re.__webglColorRenderbuffer[ge])}a.bindRenderbuffer(a.RENDERBUFFER,null),k.depthBuffer&&(re.__webglDepthRenderbuffer=a.createRenderbuffer(),yt(re.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Pe){t.bindTexture(a.TEXTURE_CUBE_MAP,_e.__webglTexture),ve(a.TEXTURE_CUBE_MAP,R);for(let ge=0;ge<6;ge++)if(R.mipmaps&&R.mipmaps.length>0)for(let ye=0;ye<R.mipmaps.length;ye++)Ve(re.__webglFramebuffer[ge][ye],k,R,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,ye);else Ve(re.__webglFramebuffer[ge],k,R,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);S(R)&&b(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let ge=0,ye=be.length;ge<ye;ge++){const We=be[ge],qe=i.get(We);let Ue=a.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(Ue=k.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(Ue,qe.__webglTexture),ve(Ue,We),Ve(re.__webglFramebuffer,k,We,a.COLOR_ATTACHMENT0+ge,Ue,0),S(We)&&b(Ue)}t.unbindTexture()}else{let ge=a.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(ge=k.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(ge,_e.__webglTexture),ve(ge,R),R.mipmaps&&R.mipmaps.length>0)for(let ye=0;ye<R.mipmaps.length;ye++)Ve(re.__webglFramebuffer[ye],k,R,a.COLOR_ATTACHMENT0,ge,ye);else Ve(re.__webglFramebuffer,k,R,a.COLOR_ATTACHMENT0,ge,0);S(R)&&b(ge),t.unbindTexture()}k.depthBuffer&&St(k)}function Xt(k){const R=k.textures;for(let re=0,_e=R.length;re<_e;re++){const be=R[re];if(S(be)){const Pe=C(k),Oe=i.get(be).__webglTexture;t.bindTexture(Pe,Oe),b(Pe),t.unbindTexture()}}}const kt=[],hn=[];function K(k){if(k.samples>0){if(xt(k)===!1){const R=k.textures,re=k.width,_e=k.height;let be=a.COLOR_BUFFER_BIT;const Pe=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Oe=i.get(k),ge=R.length>1;if(ge)for(let We=0;We<R.length;We++)t.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+We,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+We,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const ye=k.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let We=0;We<R.length;We++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(be|=a.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(be|=a.STENCIL_BUFFER_BIT)),ge){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Oe.__webglColorRenderbuffer[We]);const qe=i.get(R[We]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,qe,0)}a.blitFramebuffer(0,0,re,_e,0,0,re,_e,be,a.NEAREST),h===!0&&(kt.length=0,hn.length=0,kt.push(a.COLOR_ATTACHMENT0+We),k.depthBuffer&&k.resolveDepthBuffer===!1&&(kt.push(Pe),hn.push(Pe),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,hn)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,kt))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),ge)for(let We=0;We<R.length;We++){t.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+We,a.RENDERBUFFER,Oe.__webglColorRenderbuffer[We]);const qe=i.get(R[We]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,Oe.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+We,a.TEXTURE_2D,qe,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&h){const R=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[R])}}}function Ot(k){return Math.min(s.maxSamples,k.samples)}function xt(k){const R=i.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ut(k){const R=c.render.frame;p.get(k)!==R&&(p.set(k,R),k.update())}function Be(k,R){const re=k.colorSpace,_e=k.format,be=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||re!==kc&&re!==as&&(Pt.getTransfer(re)===Vt?(_e!==vi||be!==xi)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ft("WebGLTextures: Unsupported texture color space:",re)),R}function Wt(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(f.width=k.naturalWidth||k.width,f.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(f.width=k.displayWidth,f.height=k.displayHeight):(f.width=k.width,f.height=k.height),f}this.allocateTextureUnit=V,this.resetTextureUnits=te,this.getTextureUnits=se,this.setTextureUnits=W,this.setTexture2D=j,this.setTexture2DArray=ie,this.setTexture3D=Q,this.setTextureCube=O,this.rebindTextures=Rt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=K,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=Ve,this.useMultisampledRTT=xt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function qE(a,e){function t(i,s=as){let o;const c=Pt.getTransfer(s);if(i===xi)return a.UNSIGNED_BYTE;if(i===Rd)return a.UNSIGNED_SHORT_4_4_4_4;if(i===Pd)return a.UNSIGNED_SHORT_5_5_5_1;if(i===Px)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===Lx)return a.UNSIGNED_INT_10F_11F_11F_REV;if(i===Ax)return a.BYTE;if(i===Rx)return a.SHORT;if(i===jo)return a.UNSIGNED_SHORT;if(i===Ad)return a.INT;if(i===or)return a.UNSIGNED_INT;if(i===Xi)return a.FLOAT;if(i===_i)return a.HALF_FLOAT;if(i===Ix)return a.ALPHA;if(i===Nx)return a.RGB;if(i===vi)return a.RGBA;if(i===Lr)return a.DEPTH_COMPONENT;if(i===Bs)return a.DEPTH_STENCIL;if(i===Ld)return a.RED;if(i===Id)return a.RED_INTEGER;if(i===Gs)return a.RG;if(i===Nd)return a.RG_INTEGER;if(i===Fd)return a.RGBA_INTEGER;if(i===Ac||i===Rc||i===Pc||i===Lc)if(c===Vt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Ac)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Rc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Ac)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Rc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ff||i===Uf||i===Df||i===kf)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Ff)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Uf)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Df)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kf)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Of||i===zf||i===Bf||i===Hf||i===Gf||i===Fc||i===Vf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Of||i===zf)return c===Vt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Bf)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===Hf)return o.COMPRESSED_R11_EAC;if(i===Gf)return o.COMPRESSED_SIGNED_R11_EAC;if(i===Fc)return o.COMPRESSED_RG11_EAC;if(i===Vf)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Wf||i===Xf||i===jf||i===qf||i===Yf||i===$f||i===Kf||i===Zf||i===Qf||i===Jf||i===ed||i===td||i===nd||i===id)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Wf)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Xf)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===jf)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===qf)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yf)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$f)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kf)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Zf)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qf)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jf)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ed)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===td)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===nd)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===id)return c===Vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===rd||i===sd||i===ad)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===rd)return c===Vt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sd)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ad)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===od||i===ld||i===Uc||i===cd)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===od)return o.COMPRESSED_RED_RGTC1_EXT;if(i===ld)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Uc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===cd)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qo?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:t}}const YE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$E=`
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

}`;class KE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Gx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new ln({vertexShader:YE,fragmentShader:$E,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new un(new Nr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZE extends Ws{constructor(e,t){super();const i=this;let s=null,o=1,c=null,u="local-floor",h=1,f=null,p=null,g=null,m=null,y=null,v=null;const w=typeof XRWebGLBinding<"u",_=new KE,S={},b=t.getContextAttributes();let C=null,E=null;const L=[],A=[],I=new ht;let T=null;const F=new Pn;F.viewport=new sn;const z=new Pn;z.viewport=new sn;const D=[F,z],H=new sM;let te=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let pe=L[q];return pe===void 0&&(pe=new Gh,L[q]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(q){let pe=L[q];return pe===void 0&&(pe=new Gh,L[q]=pe),pe.getGripSpace()},this.getHand=function(q){let pe=L[q];return pe===void 0&&(pe=new Gh,L[q]=pe),pe.getHandSpace()};function W(q){const pe=A.indexOf(q.inputSource);if(pe===-1)return;const oe=L[pe];oe!==void 0&&(oe.update(q.inputSource,q.frame,f||c),oe.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",X);for(let q=0;q<L.length;q++){const pe=A[q];pe!==null&&(A[q]=null,L[q].disconnect(pe))}te=null,se=null,_.reset();for(const q in S)delete S[q];e.setRenderTarget(C),y=null,m=null,g=null,s=null,E=null,ve.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){o=q,i.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){u=q,i.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(q){f=q},this.getBaseLayer=function(){return m!==null?m:y},this.getBinding=function(){return g===null&&w&&(g=new XRWebGLBinding(s,t)),g},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(C=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",V),s.addEventListener("inputsourceschange",X),b.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(I),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Me=null,ze=null;b.depth&&(ze=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=b.stencil?Bs:Lr,Me=b.stencil?qo:or);const Ve={colorFormat:t.RGBA8,depthFormat:ze,scaleFactor:o};g=this.getBinding(),m=g.createProjectionLayer(Ve),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),E=new ai(m.textureWidth,m.textureHeight,{format:vi,type:xi,depthTexture:new Va(m.textureWidth,m.textureHeight,Me,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const oe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),E=new ai(y.framebufferWidth,y.framebufferHeight,{format:vi,type:xi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(h),f=null,c=await s.requestReferenceSpace(u),ve.setContext(s),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(q){for(let pe=0;pe<q.removed.length;pe++){const oe=q.removed[pe],Me=A.indexOf(oe);Me>=0&&(A[Me]=null,L[Me].disconnect(oe))}for(let pe=0;pe<q.added.length;pe++){const oe=q.added[pe];let Me=A.indexOf(oe);if(Me===-1){for(let Ve=0;Ve<L.length;Ve++)if(Ve>=A.length){A.push(oe),Me=Ve;break}else if(A[Ve]===null){A[Ve]=oe,Me=Ve;break}if(Me===-1)break}const ze=L[Me];ze&&ze.connect(oe)}}const j=new Z,ie=new Z;function Q(q,pe,oe){j.setFromMatrixPosition(pe.matrixWorld),ie.setFromMatrixPosition(oe.matrixWorld);const Me=j.distanceTo(ie),ze=pe.projectionMatrix.elements,Ve=oe.projectionMatrix.elements,yt=ze[14]/(ze[10]-1),lt=ze[14]/(ze[10]+1),St=(ze[9]+1)/ze[5],Rt=(ze[9]-1)/ze[5],gt=(ze[8]-1)/ze[0],Xt=(Ve[8]+1)/Ve[0],kt=yt*gt,hn=yt*Xt,K=Me/(-gt+Xt),Ot=K*-gt;if(pe.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ot),q.translateZ(K),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ze[10]===-1)q.projectionMatrix.copy(pe.projectionMatrix),q.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const xt=yt+K,Ut=lt+K,Be=kt-Ot,Wt=hn+(Me-Ot),k=St*lt/Ut*xt,R=Rt*lt/Ut*xt;q.projectionMatrix.makePerspective(Be,Wt,k,R,xt,Ut),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function O(q,pe){pe===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(pe.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let pe=q.near,oe=q.far;_.texture!==null&&(_.depthNear>0&&(pe=_.depthNear),_.depthFar>0&&(oe=_.depthFar)),H.near=z.near=F.near=pe,H.far=z.far=F.far=oe,(te!==H.near||se!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),te=H.near,se=H.far),H.layers.mask=q.layers.mask|6,F.layers.mask=H.layers.mask&-5,z.layers.mask=H.layers.mask&-3;const Me=q.parent,ze=H.cameras;O(H,Me);for(let Ve=0;Ve<ze.length;Ve++)O(ze[Ve],Me);ze.length===2?Q(H,F,z):H.projectionMatrix.copy(F.projectionMatrix),ee(q,H,Me)};function ee(q,pe,oe){oe===null?q.matrix.copy(pe.matrixWorld):(q.matrix.copy(oe.matrixWorld),q.matrix.invert(),q.matrix.multiply(pe.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(pe.projectionMatrix),q.projectionMatrixInverse.copy(pe.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=$o*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(m===null&&y===null))return h},this.setFoveation=function(q){h=q,m!==null&&(m.fixedFoveation=q),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(H)},this.getCameraTexture=function(q){return S[q]};let me=null;function we(q,pe){if(p=pe.getViewerPose(f||c),v=pe,p!==null){const oe=p.views;y!==null&&(e.setRenderTargetFramebuffer(E,y.framebuffer),e.setRenderTarget(E));let Me=!1;oe.length!==H.cameras.length&&(H.cameras.length=0,Me=!0);for(let lt=0;lt<oe.length;lt++){const St=oe[lt];let Rt=null;if(y!==null)Rt=y.getViewport(St);else{const Xt=g.getViewSubImage(m,St);Rt=Xt.viewport,lt===0&&(e.setRenderTargetTextures(E,Xt.colorTexture,Xt.depthStencilTexture),e.setRenderTarget(E))}let gt=D[lt];gt===void 0&&(gt=new Pn,gt.layers.enable(lt),gt.viewport=new sn,D[lt]=gt),gt.matrix.fromArray(St.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(St.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),lt===0&&(H.matrix.copy(gt.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Me===!0&&H.cameras.push(gt)}const ze=s.enabledFeatures;if(ze&&ze.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){g=i.getBinding();const lt=g.getDepthInformation(oe[0]);lt&&lt.isValid&&lt.texture&&_.init(lt,s.renderState)}if(ze&&ze.includes("camera-access")&&w){e.state.unbindTexture(),g=i.getBinding();for(let lt=0;lt<oe.length;lt++){const St=oe[lt].camera;if(St){let Rt=S[St];Rt||(Rt=new Gx,S[St]=Rt);const gt=g.getCameraImage(St);Rt.sourceTexture=gt}}}}for(let oe=0;oe<L.length;oe++){const Me=A[oe],ze=L[oe];Me!==null&&ze!==void 0&&ze.update(Me,pe,f||c)}me&&me(q,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),v=null}const ve=new Yx;ve.setAnimationLoop(we),this.setAnimationLoop=function(q){me=q},this.dispose=function(){}}}const QE=new Yt,tv=new Mt;tv.set(-1,0,0,0,1,0,0,0,1);function JE(a,e){function t(_,S){_.matrixAutoUpdate===!0&&_.updateMatrix(),S.value.copy(_.matrix)}function i(_,S){S.color.getRGB(_.fogColor.value,Vx(a)),S.isFog?(_.fogNear.value=S.near,_.fogFar.value=S.far):S.isFogExp2&&(_.fogDensity.value=S.density)}function s(_,S,b,C,E){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?o(_,S):S.isMeshLambertMaterial?(o(_,S),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(o(_,S),g(_,S)):S.isMeshPhongMaterial?(o(_,S),p(_,S),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(o(_,S),m(_,S),S.isMeshPhysicalMaterial&&y(_,S,E)):S.isMeshMatcapMaterial?(o(_,S),v(_,S)):S.isMeshDepthMaterial?o(_,S):S.isMeshDistanceMaterial?(o(_,S),w(_,S)):S.isMeshNormalMaterial?o(_,S):S.isLineBasicMaterial?(c(_,S),S.isLineDashedMaterial&&u(_,S)):S.isPointsMaterial?h(_,S,b,C):S.isSpriteMaterial?f(_,S):S.isShadowMaterial?(_.color.value.copy(S.color),_.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function o(_,S){_.opacity.value=S.opacity,S.color&&_.diffuse.value.copy(S.color),S.emissive&&_.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(_.map.value=S.map,t(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.bumpMap&&(_.bumpMap.value=S.bumpMap,t(S.bumpMap,_.bumpMapTransform),_.bumpScale.value=S.bumpScale,S.side===si&&(_.bumpScale.value*=-1)),S.normalMap&&(_.normalMap.value=S.normalMap,t(S.normalMap,_.normalMapTransform),_.normalScale.value.copy(S.normalScale),S.side===si&&_.normalScale.value.negate()),S.displacementMap&&(_.displacementMap.value=S.displacementMap,t(S.displacementMap,_.displacementMapTransform),_.displacementScale.value=S.displacementScale,_.displacementBias.value=S.displacementBias),S.emissiveMap&&(_.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,_.emissiveMapTransform)),S.specularMap&&(_.specularMap.value=S.specularMap,t(S.specularMap,_.specularMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest);const b=e.get(S),C=b.envMap,E=b.envMapRotation;C&&(_.envMap.value=C,_.envMapRotation.value.setFromMatrix4(QE.makeRotationFromEuler(E)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(tv),_.reflectivity.value=S.reflectivity,_.ior.value=S.ior,_.refractionRatio.value=S.refractionRatio),S.lightMap&&(_.lightMap.value=S.lightMap,_.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,_.lightMapTransform)),S.aoMap&&(_.aoMap.value=S.aoMap,_.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,_.aoMapTransform))}function c(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,S.map&&(_.map.value=S.map,t(S.map,_.mapTransform))}function u(_,S){_.dashSize.value=S.dashSize,_.totalSize.value=S.dashSize+S.gapSize,_.scale.value=S.scale}function h(_,S,b,C){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.size.value=S.size*b,_.scale.value=C*.5,S.map&&(_.map.value=S.map,t(S.map,_.uvTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function f(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.rotation.value=S.rotation,S.map&&(_.map.value=S.map,t(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function p(_,S){_.specular.value.copy(S.specular),_.shininess.value=Math.max(S.shininess,1e-4)}function g(_,S){S.gradientMap&&(_.gradientMap.value=S.gradientMap)}function m(_,S){_.metalness.value=S.metalness,S.metalnessMap&&(_.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,_.metalnessMapTransform)),_.roughness.value=S.roughness,S.roughnessMap&&(_.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,_.roughnessMapTransform)),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)}function y(_,S,b){_.ior.value=S.ior,S.sheen>0&&(_.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),_.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(_.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,_.sheenColorMapTransform)),S.sheenRoughnessMap&&(_.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,_.sheenRoughnessMapTransform))),S.clearcoat>0&&(_.clearcoat.value=S.clearcoat,_.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(_.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,_.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(_.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===si&&_.clearcoatNormalScale.value.negate())),S.dispersion>0&&(_.dispersion.value=S.dispersion),S.iridescence>0&&(_.iridescence.value=S.iridescence,_.iridescenceIOR.value=S.iridescenceIOR,_.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(_.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,_.iridescenceMapTransform)),S.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),S.transmission>0&&(_.transmission.value=S.transmission,_.transmissionSamplerMap.value=b.texture,_.transmissionSamplerSize.value.set(b.width,b.height),S.transmissionMap&&(_.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,_.transmissionMapTransform)),_.thickness.value=S.thickness,S.thicknessMap&&(_.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=S.attenuationDistance,_.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(_.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(_.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=S.specularIntensity,_.specularColor.value.copy(S.specularColor),S.specularColorMap&&(_.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,_.specularColorMapTransform)),S.specularIntensityMap&&(_.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,_.specularIntensityMapTransform))}function v(_,S){S.matcap&&(_.matcap.value=S.matcap)}function w(_,S){const b=e.get(S).light;_.referencePosition.value.setFromMatrixPosition(b.matrixWorld),_.nearDistance.value=b.shadow.camera.near,_.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function eT(a,e,t,i){let s={},o={},c=[];const u=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function h(b,C){const E=C.program;i.uniformBlockBinding(b,E)}function f(b,C){let E=s[b.id];E===void 0&&(v(b),E=p(b),s[b.id]=E,b.addEventListener("dispose",_));const L=C.program;i.updateUBOMapping(b,L);const A=e.render.frame;o[b.id]!==A&&(m(b),o[b.id]=A)}function p(b){const C=g();b.__bindingPointIndex=C;const E=a.createBuffer(),L=b.__size,A=b.usage;return a.bindBuffer(a.UNIFORM_BUFFER,E),a.bufferData(a.UNIFORM_BUFFER,L,A),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,C,E),E}function g(){for(let b=0;b<u;b++)if(c.indexOf(b)===-1)return c.push(b),b;return Ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(b){const C=s[b.id],E=b.uniforms,L=b.__cache;a.bindBuffer(a.UNIFORM_BUFFER,C);for(let A=0,I=E.length;A<I;A++){const T=Array.isArray(E[A])?E[A]:[E[A]];for(let F=0,z=T.length;F<z;F++){const D=T[F];if(y(D,A,F,L)===!0){const H=D.__offset,te=Array.isArray(D.value)?D.value:[D.value];let se=0;for(let W=0;W<te.length;W++){const V=te[W],X=w(V);typeof V=="number"||typeof V=="boolean"?(D.__data[0]=V,a.bufferSubData(a.UNIFORM_BUFFER,H+se,D.__data)):V.isMatrix3?(D.__data[0]=V.elements[0],D.__data[1]=V.elements[1],D.__data[2]=V.elements[2],D.__data[3]=0,D.__data[4]=V.elements[3],D.__data[5]=V.elements[4],D.__data[6]=V.elements[5],D.__data[7]=0,D.__data[8]=V.elements[6],D.__data[9]=V.elements[7],D.__data[10]=V.elements[8],D.__data[11]=0):ArrayBuffer.isView(V)?D.__data.set(new V.constructor(V.buffer,V.byteOffset,D.__data.length)):(V.toArray(D.__data,se),se+=X.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,H,D.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function y(b,C,E,L){const A=b.value,I=C+"_"+E;if(L[I]===void 0)return typeof A=="number"||typeof A=="boolean"?L[I]=A:ArrayBuffer.isView(A)?L[I]=A.slice():L[I]=A.clone(),!0;{const T=L[I];if(typeof A=="number"||typeof A=="boolean"){if(T!==A)return L[I]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(T.equals(A)===!1)return T.copy(A),!0}}return!1}function v(b){const C=b.uniforms;let E=0;const L=16;for(let I=0,T=C.length;I<T;I++){const F=Array.isArray(C[I])?C[I]:[C[I]];for(let z=0,D=F.length;z<D;z++){const H=F[z],te=Array.isArray(H.value)?H.value:[H.value];for(let se=0,W=te.length;se<W;se++){const V=te[se],X=w(V),j=E%L,ie=j%X.boundary,Q=j+ie;E+=ie,Q!==0&&L-Q<X.storage&&(E+=L-Q),H.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=E,E+=X.storage}}}const A=E%L;return A>0&&(E+=L-A),b.__size=E,b.__cache={},this}function w(b){const C={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(C.boundary=4,C.storage=4):b.isVector2?(C.boundary=8,C.storage=8):b.isVector3||b.isColor?(C.boundary=16,C.storage=12):b.isVector4?(C.boundary=16,C.storage=16):b.isMatrix3?(C.boundary=48,C.storage=48):b.isMatrix4?(C.boundary=64,C.storage=64):b.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(C.boundary=16,C.storage=b.byteLength):dt("WebGLRenderer: Unsupported uniform value type.",b),C}function _(b){const C=b.target;C.removeEventListener("dispose",_);const E=c.indexOf(C.__bindingPointIndex);c.splice(E,1),a.deleteBuffer(s[C.id]),delete s[C.id],delete o[C.id]}function S(){for(const b in s)a.deleteBuffer(s[b]);c=[],s={},o={}}return{bind:h,update:f,dispose:S}}const tT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let er=null;function nT(){return er===null&&(er=new Bd(tT,16,16,Gs,_i),er.name="DFG_LUT",er.minFilter=mn,er.magFilter=mn,er.wrapS=Ar,er.wrapT=Ar,er.generateMipmaps=!1,er.needsUpdate=!0),er}class hs{constructor(e={}){const{canvas:t=tS(),context:i=null,depth:s=!0,stencil:o=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:m=!1,outputBufferType:y=xi}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=c;const w=y,_=new Set([Fd,Nd,Id]),S=new Set([xi,or,jo,qo,Rd,Pd]),b=new Uint32Array(4),C=new Int32Array(4),E=new Z;let L=null,A=null;const I=[],T=[];let F=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=sr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let D=!1,H=null;this._outputColorSpace=gi;let te=0,se=0,W=null,V=-1,X=null;const j=new sn,ie=new sn;let Q=null;const O=new Ke(0);let ee=0,me=t.width,we=t.height,ve=1,q=null,pe=null;const oe=new sn(0,0,me,we),Me=new sn(0,0,me,we);let ze=!1;const Ve=new Hd;let yt=!1,lt=!1;const St=new Yt,Rt=new Z,gt=new sn,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let kt=!1;function hn(){return W===null?ve:1}let K=i;function Ot(N,ne){return t.getContext(N,ne)}try{const N={alpha:!0,depth:s,stencil:o,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Td}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",et,!1),t.addEventListener("webglcontextcreationerror",ft,!1),K===null){const ne="webgl2";if(K=Ot(ne,N),K===null)throw Ot(ne)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw Ft("WebGLRenderer: "+N.message),N}let xt,Ut,Be,Wt,k,R,re,_e,be,Pe,Oe,ge,ye,We,qe,Ue,Ne,Qe,pt,wt,Y,Le,xe;function Ge(){xt=new n2(K),xt.init(),Y=new qE(K,xt),Ut=new Yb(K,xt,e,Y),Be=new XE(K,xt),Ut.reversedDepthBuffer&&m&&Be.buffers.depth.setReversed(!0),Wt=new s2(K),k=new LE,R=new jE(K,xt,Be,k,Ut,Y,Wt),re=new t2(z),_e=new cM(K),Le=new jb(K,_e),be=new i2(K,_e,Wt,Le),Pe=new o2(K,be,_e,Le,Wt),Qe=new a2(K,Ut,R),qe=new $b(k),Oe=new PE(z,re,xt,Ut,Le,qe),ge=new JE(z,k),ye=new NE,We=new zE(xt),Ne=new Xb(z,re,Be,Pe,v,h),Ue=new WE(z,Pe,Ut),xe=new eT(K,Wt,Ut,Be),pt=new qb(K,xt,Wt),wt=new r2(K,xt,Wt),Wt.programs=Oe.programs,z.capabilities=Ut,z.extensions=xt,z.properties=k,z.renderLists=ye,z.shadowMap=Ue,z.state=Be,z.info=Wt}Ge(),w!==xi&&(F=new c2(w,t.width,t.height,s,o));const De=new ZE(z,K);this.xr=De,this.getContext=function(){return K},this.getContextAttributes=function(){return K.getContextAttributes()},this.forceContextLoss=function(){const N=xt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=xt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(N){N!==void 0&&(ve=N,this.setSize(me,we,!1))},this.getSize=function(N){return N.set(me,we)},this.setSize=function(N,ne,fe=!0){if(De.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}me=N,we=ne,t.width=Math.floor(N*ve),t.height=Math.floor(ne*ve),fe===!0&&(t.style.width=N+"px",t.style.height=ne+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,N,ne)},this.getDrawingBufferSize=function(N){return N.set(me*ve,we*ve).floor()},this.setDrawingBufferSize=function(N,ne,fe){me=N,we=ne,ve=fe,t.width=Math.floor(N*fe),t.height=Math.floor(ne*fe),this.setViewport(0,0,N,ne)},this.setEffects=function(N){if(w===xi){Ft("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let ne=0;ne<N.length;ne++)if(N[ne].isOutputPass===!0){dt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(j)},this.getViewport=function(N){return N.copy(oe)},this.setViewport=function(N,ne,fe,ce){N.isVector4?oe.set(N.x,N.y,N.z,N.w):oe.set(N,ne,fe,ce),Be.viewport(j.copy(oe).multiplyScalar(ve).round())},this.getScissor=function(N){return N.copy(Me)},this.setScissor=function(N,ne,fe,ce){N.isVector4?Me.set(N.x,N.y,N.z,N.w):Me.set(N,ne,fe,ce),Be.scissor(ie.copy(Me).multiplyScalar(ve).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(N){Be.setScissorTest(ze=N)},this.setOpaqueSort=function(N){q=N},this.setTransparentSort=function(N){pe=N},this.getClearColor=function(N){return N.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(N=!0,ne=!0,fe=!0){let ce=0;if(N){let le=!1;if(W!==null){const He=W.texture.format;le=_.has(He)}if(le){const He=W.texture.type,Ze=S.has(He),ke=Ne.getClearColor(),nt=Ne.getClearAlpha(),at=ke.r,vt=ke.g,_t=ke.b;Ze?(b[0]=at,b[1]=vt,b[2]=_t,b[3]=nt,K.clearBufferuiv(K.COLOR,0,b)):(C[0]=at,C[1]=vt,C[2]=_t,C[3]=nt,K.clearBufferiv(K.COLOR,0,C))}else ce|=K.COLOR_BUFFER_BIT}ne&&(ce|=K.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(ce|=K.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&K.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),H=N},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",ft,!1),Ne.dispose(),ye.dispose(),We.dispose(),k.dispose(),re.dispose(),Pe.dispose(),Le.dispose(),xe.dispose(),Oe.dispose(),De.dispose(),De.removeEventListener("sessionstart",lr),De.removeEventListener("sessionend",cr),yi.stop()};function Ee(N){N.preventDefault(),H0("WebGLRenderer: Context Lost."),D=!0}function et(){H0("WebGLRenderer: Context Restored."),D=!1;const N=Wt.autoReset,ne=Ue.enabled,fe=Ue.autoUpdate,ce=Ue.needsUpdate,le=Ue.type;Ge(),Wt.autoReset=N,Ue.enabled=ne,Ue.autoUpdate=fe,Ue.needsUpdate=ce,Ue.type=le}function ft(N){Ft("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function zt(N){const ne=N.target;ne.removeEventListener("dispose",zt),ot(ne)}function ot(N){Ln(N),k.remove(N)}function Ln(N){const ne=k.get(N).programs;ne!==void 0&&(ne.forEach(function(fe){Oe.releaseProgram(fe)}),N.isShaderMaterial&&Oe.releaseShaderCache(N))}this.renderBufferDirect=function(N,ne,fe,ce,le,He){ne===null&&(ne=Xt);const Ze=le.isMesh&&le.matrixWorld.determinant()<0,ke=Se(N,ne,fe,ce,le);Be.setMaterial(ce,Ze);let nt=fe.index,at=1;if(ce.wireframe===!0){if(nt=be.getWireframeAttribute(fe),nt===void 0)return;at=2}const vt=fe.drawRange,_t=fe.attributes.position;let rt=vt.start*at,Lt=(vt.start+vt.count)*at;He!==null&&(rt=Math.max(rt,He.start*at),Lt=Math.min(Lt,(He.start+He.count)*at)),nt!==null?(rt=Math.max(rt,0),Lt=Math.min(Lt,nt.count)):_t!=null&&(rt=Math.max(rt,0),Lt=Math.min(Lt,_t.count));const jt=Lt-rt;if(jt<0||jt===1/0)return;Le.setup(le,ce,ke,fe,nt);let Jt,Ht=pt;if(nt!==null&&(Jt=_e.get(nt),Ht=wt,Ht.setIndex(Jt)),le.isMesh)ce.wireframe===!0?(Be.setLineWidth(ce.wireframeLinewidth*hn()),Ht.setMode(K.LINES)):Ht.setMode(K.TRIANGLES);else if(le.isLine){let fn=ce.linewidth;fn===void 0&&(fn=1),Be.setLineWidth(fn*hn()),le.isLineSegments?Ht.setMode(K.LINES):le.isLineLoop?Ht.setMode(K.LINE_LOOP):Ht.setMode(K.LINE_STRIP)}else le.isPoints?Ht.setMode(K.POINTS):le.isSprite&&Ht.setMode(K.TRIANGLES);if(le.isBatchedMesh)if(xt.get("WEBGL_multi_draw"))Ht.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{const fn=le._multiDrawStarts,Ye=le._multiDrawCounts,In=le._multiDrawCount,Et=nt?_e.get(nt).bytesPerElement:1,Kn=k.get(ce).currentProgram.getUniforms();for(let Zn=0;Zn<In;Zn++)Kn.setValue(K,"_gl_DrawID",Zn),Ht.render(fn[Zn]/Et,Ye[Zn])}else if(le.isInstancedMesh)Ht.renderInstances(rt,jt,le.count);else if(fe.isInstancedBufferGeometry){const fn=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Ye=Math.min(fe.instanceCount,fn);Ht.renderInstances(rt,jt,Ye)}else Ht.render(rt,jt)};function Vn(N,ne,fe){N.transparent===!0&&N.side===Vi&&N.forceSinglePass===!1?(N.side=si,N.needsUpdate=!0,li(N,ne,fe),N.side=cs,N.needsUpdate=!0,li(N,ne,fe),N.side=Vi):li(N,ne,fe)}this.compile=function(N,ne,fe=null){fe===null&&(fe=N),A=We.get(fe),A.init(ne),T.push(A),fe.traverseVisible(function(le){le.isLight&&le.layers.test(ne.layers)&&(A.pushLight(le),le.castShadow&&A.pushShadow(le))}),N!==fe&&N.traverseVisible(function(le){le.isLight&&le.layers.test(ne.layers)&&(A.pushLight(le),le.castShadow&&A.pushShadow(le))}),A.setupLights();const ce=new Set;return N.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;const He=le.material;if(He)if(Array.isArray(He))for(let Ze=0;Ze<He.length;Ze++){const ke=He[Ze];Vn(ke,fe,le),ce.add(ke)}else Vn(He,fe,le),ce.add(He)}),A=T.pop(),ce},this.compileAsync=function(N,ne,fe=null){const ce=this.compile(N,ne,fe);return new Promise(le=>{function He(){if(ce.forEach(function(Ze){k.get(Ze).currentProgram.isReady()&&ce.delete(Ze)}),ce.size===0){le(N);return}setTimeout(He,10)}xt.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let Pi=null;function $n(N){Pi&&Pi(N)}function lr(){yi.stop()}function cr(){yi.start()}const yi=new Yx;yi.setAnimationLoop($n),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(N){Pi=N,De.setAnimationLoop(N),N===null?yi.stop():yi.start()},De.addEventListener("sessionstart",lr),De.addEventListener("sessionend",cr),this.render=function(N,ne){if(ne!==void 0&&ne.isCamera!==!0){Ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;H!==null&&H.renderStart(N,ne);const fe=De.enabled===!0&&De.isPresenting===!0,ce=F!==null&&(W===null||fe)&&F.begin(z,W);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ne.parent===null&&ne.matrixWorldAutoUpdate===!0&&ne.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(ne),ne=De.getCamera()),N.isScene===!0&&N.onBeforeRender(z,N,ne,W),A=We.get(N,T.length),A.init(ne),A.state.textureUnits=R.getTextureUnits(),T.push(A),St.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),Ve.setFromProjectionMatrix(St,nr,ne.reversedDepth),lt=this.localClippingEnabled,yt=qe.init(this.clippingPlanes,lt),L=ye.get(N,I.length),L.init(),I.push(L),De.enabled===!0&&De.isPresenting===!0){const Ze=z.xr.getDepthSensingMesh();Ze!==null&&fs(Ze,ne,-1/0,z.sortObjects)}fs(N,ne,0,z.sortObjects),L.finish(),z.sortObjects===!0&&L.sort(q,pe),kt=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,kt&&Ne.addToRenderList(L,N),this.info.render.frame++,yt===!0&&qe.beginShadows();const le=A.state.shadowsArray;if(Ue.render(le,N,ne),yt===!0&&qe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ce&&F.hasRenderPass())===!1){const Ze=L.opaque,ke=L.transmissive;if(A.setupLights(),ne.isArrayCamera){const nt=ne.cameras;if(ke.length>0)for(let at=0,vt=nt.length;at<vt;at++){const _t=nt[at];oi(Ze,ke,N,_t)}kt&&Ne.render(N);for(let at=0,vt=nt.length;at<vt;at++){const _t=nt[at];ds(L,N,_t,_t.viewport)}}else ke.length>0&&oi(Ze,ke,N,ne),kt&&Ne.render(N),ds(L,N,ne)}W!==null&&se===0&&(R.updateMultisampleRenderTarget(W),R.updateRenderTargetMipmap(W)),ce&&F.end(z),N.isScene===!0&&N.onAfterRender(z,N,ne),Le.resetDefaultState(),V=-1,X=null,T.pop(),T.length>0?(A=T[T.length-1],R.setTextureUnits(A.state.textureUnits),yt===!0&&qe.setGlobalState(z.clippingPlanes,A.state.camera)):A=null,I.pop(),I.length>0?L=I[I.length-1]:L=null,H!==null&&H.renderEnd()};function fs(N,ne,fe,ce){if(N.visible===!1)return;if(N.layers.test(ne.layers)){if(N.isGroup)fe=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(ne);else if(N.isLightProbeGrid)A.pushLightProbeGrid(N);else if(N.isLight)A.pushLight(N),N.castShadow&&A.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||Ve.intersectsSprite(N)){ce&&gt.setFromMatrixPosition(N.matrixWorld).applyMatrix4(St);const Ze=Pe.update(N),ke=N.material;ke.visible&&L.push(N,Ze,ke,fe,gt.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||Ve.intersectsObject(N))){const Ze=Pe.update(N),ke=N.material;if(ce&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),gt.copy(N.boundingSphere.center)):(Ze.boundingSphere===null&&Ze.computeBoundingSphere(),gt.copy(Ze.boundingSphere.center)),gt.applyMatrix4(N.matrixWorld).applyMatrix4(St)),Array.isArray(ke)){const nt=Ze.groups;for(let at=0,vt=nt.length;at<vt;at++){const _t=nt[at],rt=ke[_t.materialIndex];rt&&rt.visible&&L.push(N,Ze,rt,fe,gt.z,_t)}}else ke.visible&&L.push(N,Ze,ke,fe,gt.z,null)}}const He=N.children;for(let Ze=0,ke=He.length;Ze<ke;Ze++)fs(He[Ze],ne,fe,ce)}function ds(N,ne,fe,ce){const{opaque:le,transmissive:He,transparent:Ze}=N;A.setupLightsView(fe),yt===!0&&qe.setGlobalState(z.clippingPlanes,fe),ce&&Be.viewport(j.copy(ce)),le.length>0&&ur(le,ne,fe),He.length>0&&ur(He,ne,fe),Ze.length>0&&ur(Ze,ne,fe),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function oi(N,ne,fe,ce){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[ce.id]===void 0){const rt=xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[ce.id]=new ai(1,1,{generateMipmaps:!0,type:rt?_i:xi,minFilter:zs,samples:Math.max(4,Ut.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}const He=A.state.transmissionRenderTarget[ce.id],Ze=ce.viewport||j;He.setSize(Ze.z*z.transmissionResolutionScale,Ze.w*z.transmissionResolutionScale);const ke=z.getRenderTarget(),nt=z.getActiveCubeFace(),at=z.getActiveMipmapLevel();z.setRenderTarget(He),z.getClearColor(O),ee=z.getClearAlpha(),ee<1&&z.setClearColor(16777215,.5),z.clear(),kt&&Ne.render(fe);const vt=z.toneMapping;z.toneMapping=sr;const _t=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),A.setupLightsView(ce),yt===!0&&qe.setGlobalState(z.clippingPlanes,ce),ur(N,fe,ce),R.updateMultisampleRenderTarget(He),R.updateRenderTargetMipmap(He),xt.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let Lt=0,jt=ne.length;Lt<jt;Lt++){const Jt=ne[Lt],{object:Ht,geometry:fn,material:Ye,group:In}=Jt;if(Ye.side===Vi&&Ht.layers.test(ce.layers)){const Et=Ye.side;Ye.side=si,Ye.needsUpdate=!0,hr(Ht,fe,ce,fn,Ye,In),Ye.side=Et,Ye.needsUpdate=!0,rt=!0}}rt===!0&&(R.updateMultisampleRenderTarget(He),R.updateRenderTargetMipmap(He))}z.setRenderTarget(ke,nt,at),z.setClearColor(O,ee),_t!==void 0&&(ce.viewport=_t),z.toneMapping=vt}function ur(N,ne,fe){const ce=ne.isScene===!0?ne.overrideMaterial:null;for(let le=0,He=N.length;le<He;le++){const Ze=N[le],{object:ke,geometry:nt,group:at}=Ze;let vt=Ze.material;vt.allowOverride===!0&&ce!==null&&(vt=ce),ke.layers.test(fe.layers)&&hr(ke,ne,fe,nt,vt,at)}}function hr(N,ne,fe,ce,le,He){N.onBeforeRender(z,ne,fe,ce,le,He),N.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),le.onBeforeRender(z,ne,fe,ce,N,He),le.transparent===!0&&le.side===Vi&&le.forceSinglePass===!1?(le.side=si,le.needsUpdate=!0,z.renderBufferDirect(fe,ne,ce,le,N,He),le.side=cs,le.needsUpdate=!0,z.renderBufferDirect(fe,ne,ce,le,N,He),le.side=Vi):z.renderBufferDirect(fe,ne,ce,le,N,He),N.onAfterRender(z,ne,fe,ce,le,He)}function li(N,ne,fe){ne.isScene!==!0&&(ne=Xt);const ce=k.get(N),le=A.state.lights,He=A.state.shadowsArray,Ze=le.state.version,ke=Oe.getParameters(N,le.state,He,ne,fe,A.state.lightProbeGridArray),nt=Oe.getProgramCacheKey(ke);let at=ce.programs;ce.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?ne.environment:null,ce.fog=ne.fog;const vt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;ce.envMap=re.get(N.envMap||ce.environment,vt),ce.envMapRotation=ce.environment!==null&&N.envMap===null?ne.environmentRotation:N.envMapRotation,at===void 0&&(N.addEventListener("dispose",zt),at=new Map,ce.programs=at);let _t=at.get(nt);if(_t!==void 0){if(ce.currentProgram===_t&&ce.lightsStateVersion===Ze)return ms(N,ke),_t}else ke.uniforms=Oe.getUniforms(N),H!==null&&N.isNodeMaterial&&H.build(N,fe,ke),N.onBeforeCompile(ke,z),_t=Oe.acquireProgram(ke,nt),at.set(nt,_t),ce.uniforms=ke.uniforms;const rt=ce.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(rt.clippingPlanes=qe.uniform),ms(N,ke),ce.needsLights=Ae(N),ce.lightsStateVersion=Ze,ce.needsLights&&(rt.ambientLightColor.value=le.state.ambient,rt.lightProbe.value=le.state.probe,rt.directionalLights.value=le.state.directional,rt.directionalLightShadows.value=le.state.directionalShadow,rt.spotLights.value=le.state.spot,rt.spotLightShadows.value=le.state.spotShadow,rt.rectAreaLights.value=le.state.rectArea,rt.ltc_1.value=le.state.rectAreaLTC1,rt.ltc_2.value=le.state.rectAreaLTC2,rt.pointLights.value=le.state.point,rt.pointLightShadows.value=le.state.pointShadow,rt.hemisphereLights.value=le.state.hemi,rt.directionalShadowMatrix.value=le.state.directionalShadowMatrix,rt.spotLightMatrix.value=le.state.spotLightMatrix,rt.spotLightMap.value=le.state.spotLightMap,rt.pointShadowMatrix.value=le.state.pointShadowMatrix),ce.lightProbeGrid=A.state.lightProbeGridArray.length>0,ce.currentProgram=_t,ce.uniformsList=null,_t}function ps(N){if(N.uniformsList===null){const ne=N.currentProgram.getUniforms();N.uniformsList=Ic.seqWithValue(ne.seq,N.uniforms)}return N.uniformsList}function ms(N,ne){const fe=k.get(N);fe.outputColorSpace=ne.outputColorSpace,fe.batching=ne.batching,fe.batchingColor=ne.batchingColor,fe.instancing=ne.instancing,fe.instancingColor=ne.instancingColor,fe.instancingMorph=ne.instancingMorph,fe.skinning=ne.skinning,fe.morphTargets=ne.morphTargets,fe.morphNormals=ne.morphNormals,fe.morphColors=ne.morphColors,fe.morphTargetsCount=ne.morphTargetsCount,fe.numClippingPlanes=ne.numClippingPlanes,fe.numIntersection=ne.numClipIntersection,fe.vertexAlphas=ne.vertexAlphas,fe.vertexTangents=ne.vertexTangents,fe.toneMapping=ne.toneMapping}function gs(N,ne){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;E.setFromMatrixPosition(ne.matrixWorld);for(let fe=0,ce=N.length;fe<ce;fe++){const le=N[fe];if(le.texture!==null&&le.boundingBox.containsPoint(E))return le}return null}function Se(N,ne,fe,ce,le){ne.isScene!==!0&&(ne=Xt),R.resetTextureUnits();const He=ne.fog,Ze=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?ne.environment:null,ke=W===null?z.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Pt.workingColorSpace,nt=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,at=re.get(ce.envMap||Ze,nt),vt=ce.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,_t=!!fe.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),rt=!!fe.morphAttributes.position,Lt=!!fe.morphAttributes.normal,jt=!!fe.morphAttributes.color;let Jt=sr;ce.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Jt=z.toneMapping);const Ht=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,fn=Ht!==void 0?Ht.length:0,Ye=k.get(ce),In=A.state.lights;if(yt===!0&&(lt===!0||N!==X)){const Gt=N===X&&ce.id===V;qe.setState(ce,N,Gt)}let Et=!1;ce.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==In.state.version||Ye.outputColorSpace!==ke||le.isBatchedMesh&&Ye.batching===!1||!le.isBatchedMesh&&Ye.batching===!0||le.isBatchedMesh&&Ye.batchingColor===!0&&le.colorTexture===null||le.isBatchedMesh&&Ye.batchingColor===!1&&le.colorTexture!==null||le.isInstancedMesh&&Ye.instancing===!1||!le.isInstancedMesh&&Ye.instancing===!0||le.isSkinnedMesh&&Ye.skinning===!1||!le.isSkinnedMesh&&Ye.skinning===!0||le.isInstancedMesh&&Ye.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&Ye.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&Ye.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&Ye.instancingMorph===!1&&le.morphTexture!==null||Ye.envMap!==at||ce.fog===!0&&Ye.fog!==He||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==qe.numPlanes||Ye.numIntersection!==qe.numIntersection)||Ye.vertexAlphas!==vt||Ye.vertexTangents!==_t||Ye.morphTargets!==rt||Ye.morphNormals!==Lt||Ye.morphColors!==jt||Ye.toneMapping!==Jt||Ye.morphTargetsCount!==fn||!!Ye.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(Et=!0):(Et=!0,Ye.__version=ce.version);let Kn=Ye.currentProgram;Et===!0&&(Kn=li(ce,ne,le),H&&ce.isNodeMaterial&&H.onUpdateProgram(ce,Kn,Ye));let Zn=!1,Tt=!1,fr=!1;const Bt=Kn.getUniforms(),$t=Ye.uniforms;if(Be.useProgram(Kn.program)&&(Zn=!0,Tt=!0,fr=!0),ce.id!==V&&(V=ce.id,Tt=!0),Ye.needsLights){const Gt=gs(A.state.lightProbeGridArray,le);Ye.lightProbeGrid!==Gt&&(Ye.lightProbeGrid=Gt,Tt=!0)}if(Zn||X!==N){Be.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Bt.setValue(K,"projectionMatrix",N.projectionMatrix),Bt.setValue(K,"viewMatrix",N.matrixWorldInverse);const Ii=Bt.map.cameraPosition;Ii!==void 0&&Ii.setValue(K,Rt.setFromMatrixPosition(N.matrixWorld)),Ut.logarithmicDepthBuffer&&Bt.setValue(K,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Bt.setValue(K,"isOrthographic",N.isOrthographicCamera===!0),X!==N&&(X=N,Tt=!0,fr=!0)}if(Ye.needsLights&&(In.state.directionalShadowMap.length>0&&Bt.setValue(K,"directionalShadowMap",In.state.directionalShadowMap,R),In.state.spotShadowMap.length>0&&Bt.setValue(K,"spotShadowMap",In.state.spotShadowMap,R),In.state.pointShadowMap.length>0&&Bt.setValue(K,"pointShadowMap",In.state.pointShadowMap,R)),le.isSkinnedMesh){Bt.setOptional(K,le,"bindMatrix"),Bt.setOptional(K,le,"bindMatrixInverse");const Gt=le.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),Bt.setValue(K,"boneTexture",Gt.boneTexture,R))}le.isBatchedMesh&&(Bt.setOptional(K,le,"batchingTexture"),Bt.setValue(K,"batchingTexture",le._matricesTexture,R),Bt.setOptional(K,le,"batchingIdTexture"),Bt.setValue(K,"batchingIdTexture",le._indirectTexture,R),Bt.setOptional(K,le,"batchingColorTexture"),le._colorsTexture!==null&&Bt.setValue(K,"batchingColorTexture",le._colorsTexture,R));const Li=fe.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&Qe.update(le,fe,Kn),(Tt||Ye.receiveShadow!==le.receiveShadow)&&(Ye.receiveShadow=le.receiveShadow,Bt.setValue(K,"receiveShadow",le.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&ne.environment!==null&&($t.envMapIntensity.value=ne.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=nT()),Tt){if(Bt.setValue(K,"toneMappingExposure",z.toneMappingExposure),Ye.needsLights&&Ie($t,fr),He&&ce.fog===!0&&ge.refreshFogUniforms($t,He),ge.refreshMaterialUniforms($t,ce,ve,we,A.state.transmissionRenderTarget[N.id]),Ye.needsLights&&Ye.lightProbeGrid){const Gt=Ye.lightProbeGrid;$t.probesSH.value=Gt.texture,$t.probesMin.value.copy(Gt.boundingBox.min),$t.probesMax.value.copy(Gt.boundingBox.max),$t.probesResolution.value.copy(Gt.resolution)}Ic.upload(K,ps(Ye),$t,R)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Ic.upload(K,ps(Ye),$t,R),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Bt.setValue(K,"center",le.center),Bt.setValue(K,"modelViewMatrix",le.modelViewMatrix),Bt.setValue(K,"normalMatrix",le.normalMatrix),Bt.setValue(K,"modelMatrix",le.matrixWorld),ce.uniformsGroups!==void 0){const Gt=ce.uniformsGroups;for(let Ii=0,Yi=Gt.length;Ii<Yi;Ii++){const xs=Gt[Ii];xe.update(xs,Kn),xe.bind(xs,Kn)}}return Kn}function Ie(N,ne){N.ambientLightColor.needsUpdate=ne,N.lightProbe.needsUpdate=ne,N.directionalLights.needsUpdate=ne,N.directionalLightShadows.needsUpdate=ne,N.pointLights.needsUpdate=ne,N.pointLightShadows.needsUpdate=ne,N.spotLights.needsUpdate=ne,N.spotLightShadows.needsUpdate=ne,N.rectAreaLights.needsUpdate=ne,N.hemisphereLights.needsUpdate=ne}function Ae(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(N,ne,fe){const ce=k.get(N);ce.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),k.get(N.texture).__webglTexture=ne,k.get(N.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:fe,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,ne){const fe=k.get(N);fe.__webglFramebuffer=ne,fe.__useDefaultFramebuffer=ne===void 0};const je=K.createFramebuffer();this.setRenderTarget=function(N,ne=0,fe=0){W=N,te=ne,se=fe;let ce=null,le=!1,He=!1;if(N){const ke=k.get(N);if(ke.__useDefaultFramebuffer!==void 0){Be.bindFramebuffer(K.FRAMEBUFFER,ke.__webglFramebuffer),j.copy(N.viewport),ie.copy(N.scissor),Q=N.scissorTest,Be.viewport(j),Be.scissor(ie),Be.setScissorTest(Q),V=-1;return}else if(ke.__webglFramebuffer===void 0)R.setupRenderTarget(N);else if(ke.__hasExternalTextures)R.rebindTextures(N,k.get(N.texture).__webglTexture,k.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const vt=N.depthTexture;if(ke.__boundDepthTexture!==vt){if(vt!==null&&k.has(vt)&&(N.width!==vt.image.width||N.height!==vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(N)}}const nt=N.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(He=!0);const at=k.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(at[ne])?ce=at[ne][fe]:ce=at[ne],le=!0):N.samples>0&&R.useMultisampledRTT(N)===!1?ce=k.get(N).__webglMultisampledFramebuffer:Array.isArray(at)?ce=at[fe]:ce=at,j.copy(N.viewport),ie.copy(N.scissor),Q=N.scissorTest}else j.copy(oe).multiplyScalar(ve).floor(),ie.copy(Me).multiplyScalar(ve).floor(),Q=ze;if(fe!==0&&(ce=je),Be.bindFramebuffer(K.FRAMEBUFFER,ce)&&Be.drawBuffers(N,ce),Be.viewport(j),Be.scissor(ie),Be.setScissorTest(Q),le){const ke=k.get(N.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ke.__webglTexture,fe)}else if(He){const ke=ne;for(let nt=0;nt<N.textures.length;nt++){const at=k.get(N.textures[nt]);K.framebufferTextureLayer(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0+nt,at.__webglTexture,fe,ke)}}else if(N!==null&&fe!==0){const ke=k.get(N.texture);K.framebufferTexture2D(K.FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,ke.__webglTexture,fe)}V=-1},this.readRenderTargetPixels=function(N,ne,fe,ce,le,He,Ze,ke=0){if(!(N&&N.isWebGLRenderTarget)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let nt=k.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ze!==void 0&&(nt=nt[Ze]),nt){Be.bindFramebuffer(K.FRAMEBUFFER,nt);try{const at=N.textures[ke],vt=at.format,_t=at.type;if(N.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+ke),!Ut.textureFormatReadable(vt)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ut.textureTypeReadable(_t)){Ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ne>=0&&ne<=N.width-ce&&fe>=0&&fe<=N.height-le&&K.readPixels(ne,fe,ce,le,Y.convert(vt),Y.convert(_t),He)}finally{const at=W!==null?k.get(W).__webglFramebuffer:null;Be.bindFramebuffer(K.FRAMEBUFFER,at)}}},this.readRenderTargetPixelsAsync=async function(N,ne,fe,ce,le,He,Ze,ke=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let nt=k.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ze!==void 0&&(nt=nt[Ze]),nt)if(ne>=0&&ne<=N.width-ce&&fe>=0&&fe<=N.height-le){Be.bindFramebuffer(K.FRAMEBUFFER,nt);const at=N.textures[ke],vt=at.format,_t=at.type;if(N.textures.length>1&&K.readBuffer(K.COLOR_ATTACHMENT0+ke),!Ut.textureFormatReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ut.textureTypeReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=K.createBuffer();K.bindBuffer(K.PIXEL_PACK_BUFFER,rt),K.bufferData(K.PIXEL_PACK_BUFFER,He.byteLength,K.STREAM_READ),K.readPixels(ne,fe,ce,le,Y.convert(vt),Y.convert(_t),0);const Lt=W!==null?k.get(W).__webglFramebuffer:null;Be.bindFramebuffer(K.FRAMEBUFFER,Lt);const jt=K.fenceSync(K.SYNC_GPU_COMMANDS_COMPLETE,0);return K.flush(),await nS(K,jt,4),K.bindBuffer(K.PIXEL_PACK_BUFFER,rt),K.getBufferSubData(K.PIXEL_PACK_BUFFER,0,He),K.deleteBuffer(rt),K.deleteSync(jt),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,ne=null,fe=0){const ce=Math.pow(2,-fe),le=Math.floor(N.image.width*ce),He=Math.floor(N.image.height*ce),Ze=ne!==null?ne.x:0,ke=ne!==null?ne.y:0;R.setTexture2D(N,0),K.copyTexSubImage2D(K.TEXTURE_2D,fe,0,0,Ze,ke,le,He),Be.unbindTexture()};const It=K.createFramebuffer(),qi=K.createFramebuffer();this.copyTextureToTexture=function(N,ne,fe=null,ce=null,le=0,He=0){let Ze,ke,nt,at,vt,_t,rt,Lt,jt;const Jt=N.isCompressedTexture?N.mipmaps[He]:N.image;if(fe!==null)Ze=fe.max.x-fe.min.x,ke=fe.max.y-fe.min.y,nt=fe.isBox3?fe.max.z-fe.min.z:1,at=fe.min.x,vt=fe.min.y,_t=fe.isBox3?fe.min.z:0;else{const $t=Math.pow(2,-le);Ze=Math.floor(Jt.width*$t),ke=Math.floor(Jt.height*$t),N.isDataArrayTexture?nt=Jt.depth:N.isData3DTexture?nt=Math.floor(Jt.depth*$t):nt=1,at=0,vt=0,_t=0}ce!==null?(rt=ce.x,Lt=ce.y,jt=ce.z):(rt=0,Lt=0,jt=0);const Ht=Y.convert(ne.format),fn=Y.convert(ne.type);let Ye;ne.isData3DTexture?(R.setTexture3D(ne,0),Ye=K.TEXTURE_3D):ne.isDataArrayTexture||ne.isCompressedArrayTexture?(R.setTexture2DArray(ne,0),Ye=K.TEXTURE_2D_ARRAY):(R.setTexture2D(ne,0),Ye=K.TEXTURE_2D),Be.activeTexture(K.TEXTURE0),Be.pixelStorei(K.UNPACK_FLIP_Y_WEBGL,ne.flipY),Be.pixelStorei(K.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),Be.pixelStorei(K.UNPACK_ALIGNMENT,ne.unpackAlignment);const In=Be.getParameter(K.UNPACK_ROW_LENGTH),Et=Be.getParameter(K.UNPACK_IMAGE_HEIGHT),Kn=Be.getParameter(K.UNPACK_SKIP_PIXELS),Zn=Be.getParameter(K.UNPACK_SKIP_ROWS),Tt=Be.getParameter(K.UNPACK_SKIP_IMAGES);Be.pixelStorei(K.UNPACK_ROW_LENGTH,Jt.width),Be.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Jt.height),Be.pixelStorei(K.UNPACK_SKIP_PIXELS,at),Be.pixelStorei(K.UNPACK_SKIP_ROWS,vt),Be.pixelStorei(K.UNPACK_SKIP_IMAGES,_t);const fr=N.isDataArrayTexture||N.isData3DTexture,Bt=ne.isDataArrayTexture||ne.isData3DTexture;if(N.isDepthTexture){const $t=k.get(N),Li=k.get(ne),Gt=k.get($t.__renderTarget),Ii=k.get(Li.__renderTarget);Be.bindFramebuffer(K.READ_FRAMEBUFFER,Gt.__webglFramebuffer),Be.bindFramebuffer(K.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let Yi=0;Yi<nt;Yi++)fr&&(K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,k.get(N).__webglTexture,le,_t+Yi),K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,k.get(ne).__webglTexture,He,jt+Yi)),K.blitFramebuffer(at,vt,Ze,ke,rt,Lt,Ze,ke,K.DEPTH_BUFFER_BIT,K.NEAREST);Be.bindFramebuffer(K.READ_FRAMEBUFFER,null),Be.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else if(le!==0||N.isRenderTargetTexture||k.has(N)){const $t=k.get(N),Li=k.get(ne);Be.bindFramebuffer(K.READ_FRAMEBUFFER,It),Be.bindFramebuffer(K.DRAW_FRAMEBUFFER,qi);for(let Gt=0;Gt<nt;Gt++)fr?K.framebufferTextureLayer(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,$t.__webglTexture,le,_t+Gt):K.framebufferTexture2D(K.READ_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,$t.__webglTexture,le),Bt?K.framebufferTextureLayer(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,Li.__webglTexture,He,jt+Gt):K.framebufferTexture2D(K.DRAW_FRAMEBUFFER,K.COLOR_ATTACHMENT0,K.TEXTURE_2D,Li.__webglTexture,He),le!==0?K.blitFramebuffer(at,vt,Ze,ke,rt,Lt,Ze,ke,K.COLOR_BUFFER_BIT,K.NEAREST):Bt?K.copyTexSubImage3D(Ye,He,rt,Lt,jt+Gt,at,vt,Ze,ke):K.copyTexSubImage2D(Ye,He,rt,Lt,at,vt,Ze,ke);Be.bindFramebuffer(K.READ_FRAMEBUFFER,null),Be.bindFramebuffer(K.DRAW_FRAMEBUFFER,null)}else Bt?N.isDataTexture||N.isData3DTexture?K.texSubImage3D(Ye,He,rt,Lt,jt,Ze,ke,nt,Ht,fn,Jt.data):ne.isCompressedArrayTexture?K.compressedTexSubImage3D(Ye,He,rt,Lt,jt,Ze,ke,nt,Ht,Jt.data):K.texSubImage3D(Ye,He,rt,Lt,jt,Ze,ke,nt,Ht,fn,Jt):N.isDataTexture?K.texSubImage2D(K.TEXTURE_2D,He,rt,Lt,Ze,ke,Ht,fn,Jt.data):N.isCompressedTexture?K.compressedTexSubImage2D(K.TEXTURE_2D,He,rt,Lt,Jt.width,Jt.height,Ht,Jt.data):K.texSubImage2D(K.TEXTURE_2D,He,rt,Lt,Ze,ke,Ht,fn,Jt);Be.pixelStorei(K.UNPACK_ROW_LENGTH,In),Be.pixelStorei(K.UNPACK_IMAGE_HEIGHT,Et),Be.pixelStorei(K.UNPACK_SKIP_PIXELS,Kn),Be.pixelStorei(K.UNPACK_SKIP_ROWS,Zn),Be.pixelStorei(K.UNPACK_SKIP_IMAGES,Tt),He===0&&ne.generateMipmaps&&K.generateMipmap(Ye),Be.unbindTexture()},this.initRenderTarget=function(N){k.get(N).__webglFramebuffer===void 0&&R.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?R.setTextureCube(N,0):N.isData3DTexture?R.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?R.setTexture2DArray(N,0):R.setTexture2D(N,0),Be.unbindTexture()},this.resetState=function(){te=0,se=0,W=null,Be.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}}class iT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"threeCanvas");U(this,"scene");U(this,"camera");U(this,"renderer");U(this,"videoTexture",null);U(this,"videoElement",null);U(this,"plane",null);U(this,"time",0);U(this,"uniforms");U(this,"targetAmplitude",.3);U(this,"targetFrequency",100);U(this,"currentAmplitude",.3);U(this,"currentFrequency",100);U(this,"clapVibration",0);this.canvas=e,this.ctx=t,this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.scene=new us,this.camera=new $a(-1,1,1,-1,0,1),this.renderer=new hs({canvas:this.threeCanvas,alpha:!1,antialias:!1}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const i=new Bd(new Uint8Array([0,0,0,255]),1,1,vi);i.needsUpdate=!0,this.uniforms={uTime:{value:0},uTexture:{value:i},uAmplitude:{value:.3},uFrequency:{value:100},uColorIntensity:{value:.8},uColor1:{value:new Ke("#6366f1")},uColor2:{value:new Ke("#8b5cf6")},uColor3:{value:new Ke("#d946ef")},uColor4:{value:new Ke("#ec4899")},uColor5:{value:new Ke("#f43f5e")}};const s=new ln({uniforms:this.uniforms,vertexShader:this.getVertexShader(),fragmentShader:this.getFragmentShader()}),o=new Nr(2,2);this.plane=new un(o,s),this.scene.add(this.plane),console.log("🎥 DistortedCameraRenderer initialized")}setVideoElement(e){if(!e){console.warn("DistortedCameraRenderer: No video element provided");return}this.videoElement===e&&this.videoTexture||(this.videoElement=e,this.videoTexture&&this.videoTexture.dispose(),this.videoTexture=new VS(e),this.videoTexture.minFilter=mn,this.videoTexture.magFilter=mn,this.videoTexture.format=vi,this.uniforms.uTexture.value=this.videoTexture,console.log("✅ DistortedCameraRenderer: Video texture created"))}getVertexShader(){return`
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
    `}render(e,t,i){if(!this.plane)return;(this.canvas.width!==this.threeCanvas.width||this.canvas.height!==this.threeCanvas.height)&&(this.threeCanvas.width=this.canvas.width,this.threeCanvas.height=this.canvas.height,this.renderer.setSize(this.canvas.width,this.canvas.height)),this.time+=.016*xn(),this.uniforms.uTime.value=this.time,t&&t.length>0&&(this.uniforms.uColor1.value.set(t[0]),this.uniforms.uColor2.value.set(t[1]||t[0]),this.uniforms.uColor3.value.set(t[2]||t[0]),this.uniforms.uColor4.value.set(t[3]||t[0]),this.uniforms.uColor5.value.set(t[4]||t[0]));const s=e.left,o=e.right;if(s||o)if(e.clapping)this.targetAmplitude=2,this.targetFrequency=300,this.clapVibration=1;else{const u=s||o;if(u){const f=50+Math.max(0,Math.min(1,u.position.x))*350,g=Math.max(0,Math.min(1,1-u.position.y))*1.5,m=u.fingerCount||0;u.gesture==="pinch"||m<=1?(this.targetAmplitude=g*.2,this.targetFrequency=f*.5):(this.targetAmplitude=g,this.targetFrequency=f)}}else this.targetAmplitude=.5,this.targetFrequency=150;this.currentAmplitude+=(this.targetAmplitude-this.currentAmplitude)*.1,this.currentFrequency+=(this.targetFrequency-this.currentFrequency)*.1,this.clapVibration*=.95;const c=this.currentAmplitude+this.clapVibration*Math.sin(this.time*50)*.5;this.uniforms.uAmplitude.value=c,this.uniforms.uFrequency.value=this.currentFrequency,this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){this.videoTexture&&this.videoTexture.dispose(),this.plane&&(this.plane.geometry.dispose(),this.plane.material instanceof ji&&this.plane.material.dispose()),this.renderer.dispose(),this.renderer.forceContextLoss(),console.log("🎥 DistortedCameraRenderer destroyed")}}class rT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"streams",[]);U(this,"vanishingPoint",{x:0,y:0});U(this,"targetVanishingPoint",{x:0,y:0});U(this,"vanishingPointRight",{x:0,y:0});U(this,"targetVanishingPointRight",{x:0,y:0});U(this,"scanLineOffset",0);U(this,"clapAccumulation",0);U(this,"shakeIntensity",0);U(this,"time",0);U(this,"lastFingerCount",5);this.canvas=e,this.ctx=t,this.vanishingPoint.x=e.width*.3,this.vanishingPoint.y=e.height/2,this.targetVanishingPoint.x=this.vanishingPoint.x,this.targetVanishingPoint.y=this.vanishingPoint.y,this.vanishingPointRight.x=e.width*.7,this.vanishingPointRight.y=e.height/2,this.targetVanishingPointRight.x=this.vanishingPointRight.x,this.targetVanishingPointRight.y=this.vanishingPointRight.y;for(let i=0;i<6;i++)this.streams.push({angle:i/6*Math.PI*2,speed:1,packets:[],branchLevel:0})}render(e,t){const{width:i,height:s}=this.canvas;this.time+=.016*xn();const o=e.left,c=e.right,u=e.clapping||!1,h=e.clapIntensity||0;let f=1,p=1,g=5;o&&c?g=Math.floor(((o.fingerCount||5)+(c.fingerCount||5))/2):(o||c)&&(g=(o||c).fingerCount||5),this.lastFingerCount=g,g===1?(f=.003,p=.3):g===2?(f=.5,p=.7):(f=2,p=2.5),u?(this.clapAccumulation=Math.min(10,this.clapAccumulation+h*2),this.shakeIntensity=this.clapAccumulation*3,this.clapAccumulation>2&&Math.random()<.3&&this.spawnFractalBranch()):(this.clapAccumulation*=.98,this.shakeIntensity*=.9),o?(this.targetVanishingPoint.x=o.position.x*i,this.targetVanishingPoint.y=o.position.y*s):(this.targetVanishingPoint.x=i*.3,this.targetVanishingPoint.y=s/2),c?(this.targetVanishingPointRight.x=c.position.x*i,this.targetVanishingPointRight.y=c.position.y*s):(this.targetVanishingPointRight.x=i*.7,this.targetVanishingPointRight.y=s/2),this.vanishingPoint.x+=(this.targetVanishingPoint.x-this.vanishingPoint.x)*.05,this.vanishingPoint.y+=(this.targetVanishingPoint.y-this.vanishingPoint.y)*.05,this.vanishingPointRight.x+=(this.targetVanishingPointRight.x-this.vanishingPointRight.x)*.05,this.vanishingPointRight.y+=(this.targetVanishingPointRight.y-this.vanishingPointRight.y)*.05;let m=0,y=0;this.shakeIntensity>.5&&(m=(Math.random()-.5)*this.shakeIntensity,y=(Math.random()-.5)*this.shakeIntensity),this.ctx.fillStyle="rgba(0, 0, 0, 0.15)",this.ctx.fillRect(0,0,i,s),this.ctx.save(),this.ctx.translate(m,y),this.streams.forEach((_,S)=>{const b=.05*p*(_.branchLevel===0?1:.5);if(Math.random()<b){const C=["rect","hex","diamond"];_.packets.push({x:this.vanishingPoint.x,y:this.vanishingPoint.y,z:0,width:4+Math.random()*8,height:20+Math.random()*40,rotation:_.angle+(Math.random()-.5)*.3,rotationSpeed:(Math.random()-.5)*.02*f,streamIndex:S,age:0,hue:Math.random()*360,shimmerPhase:Math.random()*Math.PI*2,panelType:C[Math.floor(Math.random()*3)],waveAmplitude:Math.random()*10,waveFrequency:Math.random()*2+1,quantumPhase:Math.random()*Math.PI*2,particleCloud:[]})}_.packets=_.packets.filter(C=>{C.age+=.016*f,C.z+=.01*f*(1+_.branchLevel*.2),C.rotation+=C.rotationSpeed;const E=200*C.z,L=Math.sin(C.age*2+S)*30*C.z;return C.x=this.vanishingPoint.x+Math.cos(_.angle)*E+Math.sin(C.age*3)*L,C.y=this.vanishingPoint.y+Math.sin(_.angle)*E+Math.cos(C.age*2.5)*L,C.z<1&&C.x>-100&&C.x<i+100&&C.y>-100&&C.y<s+100})});const v=this.streams.flatMap(_=>_.packets);v.sort((_,S)=>_.z-S.z),v.forEach(_=>{const S=.2+_.z*.8,b=.3+_.z*.7,C=Math.sin(this.time*10+_.quantumPhase)*3*(1-_.z),E=Math.cos(_.age*_.waveFrequency)*C,L=Math.sin(_.age*_.waveFrequency)*C;this.ctx.save(),this.ctx.translate(_.x+E,_.y+L);const A=Math.floor(_.streamIndex%t.length),I=t[A],T=_.width*S,F=_.height*S;_.particleCloud.length<20&&Math.random()<.3&&_.particleCloud.push({dx:(Math.random()-.5)*T*2,dy:(Math.random()-.5)*F*2,life:1}),_.particleCloud=_.particleCloud.filter(D=>{if(D.life-=.02,D.life>0){const H=Math.sin(this.time*5+D.dx+D.dy)*.5+.5;return this.ctx.globalAlpha=b*D.life*.4*H,this.ctx.fillStyle=I,this.ctx.beginPath(),this.ctx.arc(D.dx,D.dy,1.5*S,0,Math.PI*2),this.ctx.fill(),!0}return!1}),this.ctx.globalAlpha=b*.8;const z=this.ctx.createRadialGradient(0,0,0,0,0,Math.max(T,F));z.addColorStop(0,this.addAlpha(I,.8)),z.addColorStop(.3,this.addAlpha(I,.4)),z.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.fillStyle=z,this.ctx.beginPath(),this.ctx.arc(0,0,Math.max(T,F),0,Math.PI*2),this.ctx.fill(),this.ctx.globalAlpha=b*.6,this.ctx.strokeStyle=I,this.ctx.lineWidth=1.5*S;for(let D=0;D<3;D++){this.ctx.beginPath();const H=D*Math.PI*.66,te=(this.time*50+_.age*30+H*20)%(Math.max(T,F)*2);te>0&&(this.ctx.globalAlpha=b*(1-te/(Math.max(T,F)*2))*.5,this.ctx.arc(0,0,te,0,Math.PI*2),this.ctx.stroke())}this.ctx.globalAlpha=b*.4,this.ctx.strokeStyle=I,this.ctx.lineWidth=.8*S;for(let D=0;D<6;D++){const H=D/6*Math.PI*2+this.time*.5,te=(Math.sin(this.time*2+D)*.5+1)*F*.8;this.ctx.beginPath(),this.ctx.moveTo(0,0);const se=Math.cos(H+.3)*te*.6,W=Math.sin(H+.3)*te*.6,V=Math.cos(H)*te,X=Math.sin(H)*te;this.ctx.quadraticCurveTo(se,W,V,X),this.ctx.stroke(),this.ctx.globalAlpha=b*.8,this.ctx.fillStyle=I,this.ctx.beginPath(),this.ctx.arc(V,X,2*S,0,Math.PI*2),this.ctx.fill()}if(this.ctx.shadowBlur=20*S,this.ctx.shadowColor=I,this.ctx.globalAlpha=b,this.ctx.fillStyle=I,this.ctx.beginPath(),this.ctx.arc(0,0,3*S,0,Math.PI*2),this.ctx.fill(),this.ctx.shadowBlur=0,this.ctx.globalAlpha=b*.9,this.ctx.fillStyle="white",this.ctx.beginPath(),this.ctx.arc(0,0,1.5*S,0,Math.PI*2),this.ctx.fill(),Math.random()<.05){const D=Math.random()*Math.PI*2,H=Math.random()*Math.max(T,F)*1.5;this.ctx.globalAlpha=b*.6,this.ctx.strokeStyle=I,this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(Math.cos(D)*H,Math.sin(D)*H),this.ctx.stroke()}this.ctx.restore()}),this.ctx.globalAlpha=.05;for(let _=0;_<8;_++){const S=_/8*Math.PI*2,b=Math.max(i,s);this.ctx.strokeStyle=t[_%t.length]||"#00ffff",this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(this.vanishingPoint.x,this.vanishingPoint.y);const C=50;for(let E=0;E<=C;E++){const L=E/C,A=b*L,I=Math.sin(L*10+this.time*2)*20,T=this.vanishingPoint.x+Math.cos(S)*A+Math.cos(S+Math.PI/2)*I,F=this.vanishingPoint.y+Math.sin(S)*A+Math.sin(S+Math.PI/2)*I;E===0?this.ctx.moveTo(T,F):this.ctx.lineTo(T,F)}this.ctx.stroke()}for(let _=50;_<Math.max(i,s);_+=80){const S=_/100,b=Math.sin(this.time*2+S)*5;this.ctx.globalAlpha=.04,this.ctx.strokeStyle=t[Math.floor(S)%t.length]||"#00ffff",this.ctx.lineWidth=1,this.ctx.beginPath();const C=60;for(let E=0;E<=C;E++){const L=E/C*Math.PI*2,A=_+Math.sin(L*6+this.time*3)*b,I=this.vanishingPoint.x+Math.cos(L)*A,T=this.vanishingPoint.y+Math.sin(L)*A;E===0?this.ctx.moveTo(I,T):this.ctx.lineTo(I,T)}this.ctx.closePath(),this.ctx.stroke()}this.ctx.restore(),this.ctx.globalAlpha=.02;for(let _=0;_<100;_++){const S=Math.random()*i,b=Math.random()*s;Math.sin(this.time*20+_)*.5+.5>.7&&(this.ctx.fillStyle=t[_%t.length]||"#00ffff",this.ctx.beginPath(),this.ctx.arc(S,b,1,0,Math.PI*2),this.ctx.fill())}if(this.shakeIntensity>5){this.ctx.globalCompositeOperation="screen";for(let _=0;_<3;_++){this.ctx.globalAlpha=.05;const S=this.ctx.createRadialGradient(this.vanishingPoint.x,this.vanishingPoint.y,0,this.vanishingPoint.x,this.vanishingPoint.y,Math.max(i,s)*(.3+_*.2)),b=(this.time*100+_*120)%360;S.addColorStop(0,`hsla(${b}, 100%, 50%, 0.3)`),S.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.fillStyle=S,this.ctx.fillRect(0,0,i,s)}this.ctx.globalCompositeOperation="source-over"}const w=(_,S,b,C,E)=>{const L=5+Math.sin(this.time*4)*3,A=t[b]||"#00ffff";for(let T=0;T<3;T++){const F=L*(2+T),z=.3-T*.1;this.ctx.globalAlpha=z,this.ctx.strokeStyle=A,this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.arc(_,S,F,this.time*(1+T*.5),this.time*(1+T*.5)+Math.PI*1.5),this.ctx.stroke()}const I=this.ctx.createRadialGradient(_,S,0,_,S,L*4);if(I.addColorStop(0,this.addAlpha(A,.9)),I.addColorStop(.5,this.addAlpha(A,.5)),I.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.globalAlpha=.9,this.ctx.fillStyle=I,this.ctx.beginPath(),this.ctx.arc(_,S,L*4,0,Math.PI*2),this.ctx.fill(),this.ctx.globalAlpha=1,this.ctx.fillStyle="white",this.ctx.shadowBlur=15,this.ctx.shadowColor=A,this.ctx.beginPath(),this.ctx.arc(_,S,L,0,Math.PI*2),this.ctx.fill(),this.ctx.shadowBlur=0,this.clapAccumulation>.5){const T=this.clapAccumulation/10;for(let F=0;F<5;F++){const z=(this.time*3+F*.5)%2,D=20+z*100+this.clapAccumulation*20,H=(1-z/2)*T;this.ctx.globalAlpha=H*.5,this.ctx.strokeStyle=t[F%t.length]||"#00ffff",this.ctx.lineWidth=3,this.ctx.beginPath(),this.ctx.arc(_,S,D,0,Math.PI*2),this.ctx.stroke()}for(let F=0;F<Math.floor(this.clapAccumulation*5);F++){const z=F/(this.clapAccumulation*5)*Math.PI*2,D=30+Math.sin(this.time*5+F)*20,H=_+Math.cos(z+this.time*2)*D,te=S+Math.sin(z+this.time*2)*D;this.ctx.globalAlpha=T*.7,this.ctx.fillStyle=t[F%t.length]||"#00ffff",this.ctx.beginPath(),this.ctx.arc(H,te,2,0,Math.PI*2),this.ctx.fill()}}if(C){this.ctx.globalAlpha=1,this.ctx.fillStyle="white",this.ctx.font="12px monospace",this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.shadowBlur=8,this.ctx.shadowColor="rgba(0, 0, 0, 0.8)";const T=`X:${Math.floor(_)} Y:${Math.floor(S)}`;this.ctx.fillText(T,_,S-8);const F=new Date,z=F.toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric"}),D=F.toLocaleTimeString("en-US",{hour12:!1}),H=`${z} - ${D}`;this.ctx.fillText(H,_,S+8),this.ctx.shadowBlur=0}};w(this.vanishingPoint.x,this.vanishingPoint.y,0,!!o),c&&w(this.vanishingPointRight.x,this.vanishingPointRight.y,1,!0)}spawnFractalBranch(){if(this.streams.length>30)return;const e=this.streams[Math.floor(Math.random()*Math.min(6,this.streams.length))],t=e.angle+(Math.random()-.5)*.8;this.streams.push({angle:t,speed:1.2,packets:[],branchLevel:(e.branchLevel||0)+1,parentAngle:e.angle})}drawHexagon(e,t,i){this.ctx.beginPath();for(let s=0;s<6;s++){const o=Math.PI/3*s,c=e+i*Math.cos(o),u=t+i*Math.sin(o);s===0?this.ctx.moveTo(c,u):this.ctx.lineTo(c,u)}this.ctx.closePath()}addAlpha(e,t){if(e.startsWith("#")){const i=parseInt(e.slice(1,3),16),s=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16);return`rgba(${i}, ${s}, ${o}, ${t})`}return e}}class sT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"particles",[]);U(this,"config",{baseSize:1.5,gridSpacing:8,distortionRadius:200,distortionStrength:0,friction:.9,ease:.1});U(this,"faceData",[[60,100,1],[70,100,1],[50,110,1],[60,110,1],[70,110,1],[80,110,1],[40,120,1],[50,120,2],[60,120,1],[70,120,1],[80,120,2],[90,120,1],[40,130,2],[50,130,3],[60,130,1],[70,130,1],[80,130,3],[90,130,2],[30,140,2],[40,140,3],[50,140,4],[60,140,1],[70,140,1],[80,140,4],[90,140,3],[100,140,2],[20,150,2],[30,150,3],[40,150,3],[50,150,3],[60,150,1],[70,150,1],[80,150,3],[90,150,3],[100,150,3],[110,150,2],[30,160,2],[40,160,3],[50,160,2],[80,160,2],[90,160,3],[100,160,2],[40,170,2],[50,170,2],[80,170,2],[90,170,2],[40,180,1],[50,180,1],[80,180,1],[90,180,1],[40,190,1],[50,190,2],[80,190,2],[90,190,1],[50,200,2],[80,200,2],[50,210,1],[60,210,1],[70,210,1],[80,210,1],[50,220,1],[60,220,2],[70,220,2],[80,220,1],[60,230,3],[70,230,3],[60,240,4],[70,240,4],[60,250,3],[70,250,3],[60,260,2],[70,260,2]]);this.canvas=e,this.ctx=t,this.createParticles()}createParticles(){this.particles=[];const e=this.canvas.width/2,t=this.canvas.height/2,i=275,s=14,o=1.2,c=this.config.baseSize*o;for(let u=t-i;u<t+i;u+=s)for(let h=e-i;h<e+i;h+=s)Math.sqrt((h-e)**2+(u-t)**2)<i&&this.particles.push({originX:h,originY:u,x:h,y:u,vx:0,vy:0,intensity:o,size:c,currentSize:c})}render(e,t){var c,u;t[1]&&(t[1].toLowerCase()==="#ffffff"||t[1].toLowerCase()==="#fff")?this.ctx.fillStyle="#000000":this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);const s=e.left||e.right;if(s){const h=(((c=s.position)==null?void 0:c.x)||.5)*this.canvas.width,f=(((u=s.position)==null?void 0:u.y)||.5)*this.canvas.height;let p=0;const g=s.fingerCount||2;s.gesture==="pinch"||g===1?p=5:g===2?p=20:g>=5?p=50:p=15+(g-2)*10,this.config.distortionStrength+=(p-this.config.distortionStrength)*.1,this.particles.forEach(m=>{const y=h-m.x,v=f-m.y,w=Math.sqrt(y*y+v*v);if(w<this.config.distortionRadius){const b=(this.config.distortionRadius-w)/this.config.distortionRadius,C=Math.atan2(v,y),E=Math.cos(C)*b*this.config.distortionStrength,L=Math.sin(C)*b*this.config.distortionStrength;m.vx-=E,m.vy-=L,m.currentSize=m.size+b*4*Math.abs(this.config.distortionStrength/10)}else m.currentSize=m.size;const _=m.originX-m.x,S=m.originY-m.y;m.vx+=_*this.config.ease,m.vy+=S*this.config.ease,m.vx*=this.config.friction,m.vy*=this.config.friction,m.x+=m.vx,m.y+=m.vy})}else this.config.distortionStrength*=.9,this.particles.forEach(h=>{const f=h.originX-h.x,p=h.originY-h.y;h.vx+=f*this.config.ease,h.vy+=p*this.config.ease,h.vx*=this.config.friction,h.vy*=this.config.friction,h.x+=h.vx,h.y+=h.vy,h.currentSize=h.size});if(e.clapping){const h=this.canvas.width/2,f=this.canvas.height/2;this.particles.forEach(p=>{const g=p.x-h,m=p.y-f,y=Math.sqrt(g*g+m*m),v=30;p.vx+=g/(y+1)*v,p.vy+=m/(y+1)*v})}const o=t[0]||"#FFFFFF";this.particles.forEach(h=>{this.ctx.fillStyle=o,this.ctx.globalAlpha=.85;const f=Math.max(.5,h.currentSize);this.ctx.fillRect(h.x-f/2,h.y-f/2,f,f)}),this.ctx.globalAlpha=1}}const on=class on{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"faceLandmarker",null);U(this,"isLoading",!0);U(this,"lastVideoTime",-1);U(this,"results");U(this,"video",null);U(this,"hasFailed",!1);U(this,"isLocalInitializing",!1);U(this,"drawingUtils",null);U(this,"initAttempts",0);U(this,"maxInitAttempts",60);U(this,"FACE_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,129],[129,49],[49,209],[131,29],[29,52],[52,131],[43,106],[106,204],[204,43],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[33,168],[168,8],[8,33],[228,117],[117,31],[31,228],[107,189],[189,55],[55,107],[126,217],[217,1],[1,126],[233,79],[79,218],[218,233],[35,154],[154,26],[26,35],[125,129],[129,49],[49,125],[52,131],[131,29],[29,52],[169,106],[106,43],[43,169],[6,74],[74,184],[184,6],[191,80],[80,183],[183,191],[43,106],[106,204],[204,43]]);this.canvas=e,this.ctx=t,console.log("👤 FaceRenderer initialized"),this.initializeMediaPipe()}async initializeMediaPipe(){if(!(this.isLocalInitializing||this.hasFailed)){this.isLocalInitializing=!0;try{if(this.initAttempts++,this.video=document.querySelector("video"),!this.video||!this.video.srcObject){this.isLocalInitializing=!1,this.initAttempts<this.maxInitAttempts?setTimeout(()=>this.initializeMediaPipe(),1e3):(console.error("❌ Max retry attempts reached."),this.hasFailed=!0,this.isLoading=!1);return}if(on.isGlobalInitializing){console.log("⏳ Waiting for global init..."),this.isLocalInitializing=!1,setTimeout(()=>this.initializeMediaPipe(),500);return}if(!on.filesetResolver){on.isGlobalInitializing=!0,console.log("📦 Loading MediaPipe modules...");const t=await xx(()=>import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14"),[],import.meta.url);on.faceLandmarkerClass=t.FaceLandmarker,on.drawingUtilsClass=t.DrawingUtils,on.filesetResolver=await t.FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm"),console.log("🔧 WASM initialized"),on.isGlobalInitializing=!1}const e="https://raw.githubusercontent.com/NPC-88/3dfiles/9d9b1c903c6397d41d71ad993f114bbce9fe5db6/face_landmarker.task";if(!this.faceLandmarker)try{this.faceLandmarker=await on.faceLandmarkerClass.createFromOptions(on.filesetResolver,{baseOptions:{modelAssetPath:e,delegate:"GPU"},outputFaceBlendshapes:!1,outputFacialTransformationMatrixes:!1,runningMode:"VIDEO",numFaces:1}),console.log("✅ Face tracking initialized (GPU)")}catch{console.warn("GPU failed, trying CPU..."),this.faceLandmarker=await on.faceLandmarkerClass.createFromOptions(on.filesetResolver,{baseOptions:{modelAssetPath:e,delegate:"CPU"},outputFaceBlendshapes:!1,outputFacialTransformationMatrixes:!1,runningMode:"VIDEO",numFaces:1}),console.log("✅ Face tracking initialized (CPU)")}on.drawingUtilsClass&&(this.drawingUtils=new on.drawingUtilsClass(this.ctx)),this.isLoading=!1,this.isLocalInitializing=!1}catch(e){console.error("❌ Failed to initialize MediaPipe:",e),this.hasFailed=!0,this.isLoading=!1,this.isLocalInitializing=!1,on.isGlobalInitializing=!1}}}render(e,t,i){if(this.hasFailed){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#ff4444",this.ctx.font="18px monospace",this.ctx.textAlign="center",this.ctx.fillText("Initialization Failed",this.canvas.width/2,this.canvas.height/2),this.ctx.font="14px monospace",this.ctx.fillStyle="#ff8888",this.ctx.fillText("Refresh the page to try again",this.canvas.width/2,this.canvas.height/2+30);return}if(this.isLoading){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#666666",this.ctx.font="20px monospace",this.ctx.textAlign="center",this.ctx.fillText("Initializing Face Model...",this.canvas.width/2,this.canvas.height/2),this.ctx.font="14px monospace",this.ctx.fillStyle="#888888",this.ctx.fillText("Press Q to enable camera if needed",this.canvas.width/2,this.canvas.height/2+30);return}if(!this.faceLandmarker||!this.video||!this.drawingUtils){if(!this.isLocalInitializing&&!this.hasFailed){const p=document.querySelector("video");p&&p.srcObject&&(console.log("📹 Video found during render, triggering init once..."),this.initializeMediaPipe())}this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#666666",this.ctx.font="18px monospace",this.ctx.textAlign="center",this.ctx.fillText("Waiting for camera...",this.canvas.width/2,this.canvas.height/2),this.ctx.font="14px monospace",this.ctx.fillStyle="#888888",this.ctx.fillText("Press Q to enable camera",this.canvas.width/2,this.canvas.height/2+30);return}const s=performance.now();if(this.lastVideoTime!==this.video.currentTime){this.lastVideoTime=this.video.currentTime;try{this.results=this.faceLandmarker.detectForVideo(this.video,s)}catch(p){console.error("Face detection error:",p)}}this.ctx.save(),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);const o=performance.now(),c=Math.abs(Math.sin(o*.002)),u=.1+.6*c,h=15*c,f=t[0]||"#00d2ff";if(this.results&&this.results.faceLandmarks&&this.results.faceLandmarks.length>0)for(const p of this.results.faceLandmarks)this.ctx.shadowColor=f,this.ctx.shadowBlur=h,this.drawingUtils.drawConnectors(p,on.faceLandmarkerClass.FACE_LANDMARKS_TESSELATION,{color:`rgba(255, 255, 255, ${u})`,lineWidth:1}),this.ctx.shadowBlur=0;else this.ctx.fillStyle="#666666",this.ctx.font="16px monospace",this.ctx.textAlign="center",this.ctx.fillText("No Face Detected",this.canvas.width/2,this.canvas.height/2),this.ctx.font="12px monospace",this.ctx.fillStyle="#888888",this.ctx.fillText("Position your face in front of the camera",this.canvas.width/2,this.canvas.height/2+25);this.ctx.restore()}resize(e,t){}destroy(){this.faceLandmarker&&(this.faceLandmarker.close(),this.faceLandmarker=null),console.log("👤 FaceRenderer destroyed")}};U(on,"filesetResolver",null),U(on,"faceLandmarkerClass",null),U(on,"drawingUtilsClass",null),U(on,"isGlobalInitializing",!1);let md=on;function Zc(a,e){a.traverse(t=>{if(t instanceof un||t instanceof Pr||t instanceof Bx){t.geometry.dispose();const i=t.material;Array.isArray(i)?i.forEach(s=>s.dispose()):i.dispose()}}),a.clear(),e.dispose(),e.forceContextLoss()}class aT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"threeCanvas");U(this,"scene");U(this,"camera");U(this,"renderer");U(this,"sphere");U(this,"particleMesh");U(this,"pointLight");U(this,"pointLight2");U(this,"originalPositions",[]);U(this,"time",0);U(this,"handX",.5);U(this,"handY",.5);U(this,"pinchDistance",1);U(this,"SPHERE_RADIUS",1.5);U(this,"DETAIL",4);U(this,"CHAOS_MULTIPLIER",1.5);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances of Three")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.initThreeJS(),console.log("🌐 MorphingSphereRenderer initialized with Three.js"),console.warn=i}initThreeJS(){this.scene=new us,this.scene.fog=new Zo(0,.05),this.camera=new Pn(75,this.canvas.width/this.canvas.height,.1,1e3),this.camera.position.set(0,0,5),this.camera.lookAt(0,0,0),this.renderer=new hs({canvas:this.threeCanvas,antialias:!0,alpha:!0}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=new qx(4210752);this.scene.add(e),this.pointLight=new Vc(65484,2,50),this.pointLight.position.set(5,5,5),this.scene.add(this.pointLight),this.pointLight2=new Vc(3342591,2,50),this.pointLight2.position.set(-5,-5,5),this.scene.add(this.pointLight2);const t=new Vd(this.SPHERE_RADIUS,this.DETAIL),i=t.attributes.position;for(let f=0;f<i.count;f++)this.originalPositions.push(new Z(i.getX(f),i.getY(f),i.getZ(f)));const s=new Wx({color:1118481,wireframe:!0,emissive:3342591,emissiveIntensity:.5,roughness:.4,metalness:.8});this.sphere=new un(t,s),this.scene.add(this.sphere);const o=new cn,c=1e3,u=new Float32Array(c*3);for(let f=0;f<c*3;f++)u[f]=(Math.random()-.5)*20;o.setAttribute("position",new Sn(u,3));const h=new os({size:.02,color:16777215,transparent:!0,opacity:.5});this.particleMesh=new Pr(o,h),this.scene.add(this.particleMesh)}noise(e,t,i){return Math.sin(e)*Math.cos(t)*Math.sin(i)}calculatePinch(e){if(!e||!e.landmarks)return 1;const t=e.landmarks[4],i=e.landmarks[8],s=Math.sqrt(Math.pow(t.x-i.x,2)+Math.pow(t.y-i.y,2));return Math.min(Math.max((s-.02)*5,0),1)}updateState(e){const t=e.left,i=e.right,s=this.calculatePinch(t),o=this.calculatePinch(i),u=Math.min(s,o);this.pinchDistance+=(u-this.pinchDistance)*.1;let h=.5,f=.5;t&&t.position?(h=t.position.x,f=t.position.y):i&&i.position&&(h=i.position.x,f=i.position.y),this.handX+=(h-this.handX)*.1,this.handY+=(f-this.handY)*.1,!t&&!i&&(this.handX+=(.5-this.handX)*.05,this.handY+=(.5-this.handY)*.05,this.pinchDistance+=(1-this.pinchDistance)*.05)}render(e,t){this.time+=.02*xn(),this.updateState(e);const i=this.renderer.getPixelRatio(),s=Math.floor(this.canvas.width*i),o=Math.floor(this.canvas.height*i);(this.threeCanvas.width!==s||this.threeCanvas.height!==o)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=s,this.threeCanvas.height=o,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix()),this.renderer.clear();const c=(this.handX-.5)*4,u=(.5-this.handY)*3;this.sphere.position.x+=(c-this.sphere.position.x)*.15,this.sphere.position.y+=(u-this.sphere.position.y)*.15;const h=(this.handY-.5)*2,f=(this.handX-.5)*2;this.sphere.rotation.x+=(h-this.sphere.rotation.x)*.05,this.sphere.rotation.y+=(f-this.sphere.rotation.y)*.05,this.sphere.rotation.z+=.005;const p=this.sphere.geometry.attributes.position,g=(1-this.pinchDistance)*this.CHAOS_MULTIPLIER,m=Math.sin(this.time)*.1;for(let v=0;v<p.count;v++){const w=this.originalPositions[v],_=this.noise(w.x*2+this.time,w.y*2+this.time,w.z*2),S=1+m+_*g;p.setXYZ(v,w.x*S,w.y*S,w.z*S)}p.needsUpdate=!0;const y=this.sphere.material;if(t&&t.length>0)try{const v=new Ke(t[0]),w=new Ke(t[0]);y.color=v,y.emissive=w.multiplyScalar(.3+g*.4);const _=new Ke(t[0]),S=t.length>1?new Ke(t[1]):new Ke(t[0]);this.pointLight.color=_,this.pointLight2.color=S}catch{y.color.setHex(65484),y.emissive.setHex(13107),this.pointLight.color.setHex(65484),this.pointLight2.color.setHex(3342591)}else y.color.setHex(65484),y.emissive.setHex(13107),this.pointLight.color.setHex(65484),this.pointLight2.color.setHex(3342591);this.pointLight.position.x=(this.handX-.5)*10,this.pointLight.position.y=(.5-this.handY)*10,this.particleMesh.rotation.y=-this.time*.1,this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){Zc(this.scene,this.renderer)}}class oT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"threeCanvas");U(this,"scene");U(this,"camera");U(this,"renderer");U(this,"instancedMesh");U(this,"gridWidth");U(this,"gridHeight");U(this,"cubePositions",[]);U(this,"time",0);U(this,"hands",[]);U(this,"speedMultiplier",1);U(this,"handsTogetherBoost",1);U(this,"currentFingerMode","slow");U(this,"GRID_WIDTH",120);U(this,"GRID_HEIGHT",90);U(this,"SPACING",.12);U(this,"WAVE_AMPLITUDE",2.5);U(this,"CUBE_SIZE",.03);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances of Three")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.gridWidth=this.GRID_WIDTH,this.gridHeight=this.GRID_HEIGHT,this.initThreeJS(),console.log("🧊 CubeWallRenderer initialized with Three.js"),console.warn=i}initThreeJS(){this.scene=new us,this.scene.background=new Ke(0),this.camera=new Pn(60,this.canvas.width/this.canvas.height,.1,100),this.camera.position.set(0,0,4.5),this.camera.lookAt(0,0,0),this.renderer=new hs({canvas:this.threeCanvas,antialias:!0,alpha:!1}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=new qx(2105376,.3);this.scene.add(e);const t=new lf(16777215,.8);t.position.set(3,5,8),this.scene.add(t);const i=new lf(4474111,.4);i.position.set(-5,-3,5),this.scene.add(i);const s=new Vc(65484,.6,50);s.position.set(5,5,5),this.scene.add(s);const o=new Ya(this.CUBE_SIZE,this.CUBE_SIZE,this.CUBE_SIZE),c=new Wx({color:65535,emissive:8738,emissiveIntensity:.2,metalness:.6,roughness:.4,flatShading:!0}),u=this.gridWidth*this.gridHeight;this.instancedMesh=new zS(o,c,u),this.scene.add(this.instancedMesh);const h=new gn;let f=0;for(let p=0;p<this.gridHeight;p++)for(let g=0;g<this.gridWidth;g++){const m=(g-this.gridWidth/2)*this.SPACING,y=(p-this.gridHeight/2)*this.SPACING,v=0;this.cubePositions.push(new Z(m,y,v)),h.position.set(m,y,v),h.updateMatrix(),this.instancedMesh.setMatrixAt(f,h.matrix),f++}this.instancedMesh.instanceMatrix.needsUpdate=!0}getFingerSpeedMultiplier(e){if(!e||!e.fingerCount)return 0;const t=e.fingerCount;return t<=1?.05:t===2?.3:t>=5?1.5:.3+(t-2)/3*1.2}updateHandData(e){this.hands=[];let t=1;if(e.left){const s=this.getFingerSpeedMultiplier(e.left);t=Math.max(t,s),this.hands.push({x:e.left.position.x,y:1-e.left.position.y,intensity:1,fingerCount:e.left.fingerCount||0})}if(e.right){const s=this.getFingerSpeedMultiplier(e.right);t=Math.max(t,s),this.hands.push({x:e.right.position.x,y:1-e.right.position.y,intensity:1,fingerCount:e.right.fingerCount||0})}this.speedMultiplier+=(t-this.speedMultiplier)*.1;const i=e.clapping||e.distanceBetweenHands&&e.distanceBetweenHands<.15?3:1;if(this.handsTogetherBoost+=(i-this.handsTogetherBoost)*.15,this.hands.length>0){const s=this.hands.reduce((o,c)=>o+c.fingerCount,0);s<=1?this.currentFingerMode="pinch":s>=5?this.currentFingerMode="fast":this.currentFingerMode="slow"}}calculateDisplacement(e,t){let i=0;const s=Math.sin(e*8+this.time)*Math.cos(t*8+this.time)*.05;i+=s;for(const o of this.hands){const c=(o.x-.5)*this.gridWidth*this.SPACING*.8,u=(o.y-.5)*this.gridHeight*this.SPACING*.8,h=e-c,f=t-u,p=Math.sqrt(h*h+f*f),g=Math.sin(p*6-this.time*4)/(p*.5+.5);i+=g*o.intensity*this.WAVE_AMPLITUDE}return i*=this.speedMultiplier*this.handsTogetherBoost,i}render(e,t){this.time+=.016*this.speedMultiplier*xn(),this.updateHandData(e);const i=this.renderer.getPixelRatio(),s=Math.floor(this.canvas.width*i),o=Math.floor(this.canvas.height*i);(this.threeCanvas.width!==s||this.threeCanvas.height!==o)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=s,this.threeCanvas.height=o,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix());const c=new gn;let u=0,h=.5,f=.2;this.currentFingerMode==="pinch"?(h=.02,f=.01):this.currentFingerMode==="slow"?(h=.5,f=.25):this.currentFingerMode==="fast"&&(h=.9,f=.4);for(let p=0;p<this.gridHeight;p++)for(let g=0;g<this.gridWidth;g++){const m=this.cubePositions[u],y=this.calculateDisplacement(m.x,m.y);c.position.set(m.x,m.y,m.z+y),c.rotation.x=y*h,c.rotation.y=y*h*.7,c.rotation.z=y*h*.4;const v=1+Math.abs(y)*f;c.scale.set(v,v,v),c.updateMatrix(),this.instancedMesh.setMatrixAt(u,c.matrix),u++}if(this.instancedMesh.instanceMatrix.needsUpdate=!0,t&&t.length>0)try{const p=this.instancedMesh.material,g=new Ke(t[0]);if(p.color=g,p.emissive=new Ke(t[0]).multiplyScalar(.3),t.length>1){const m=this.scene.children.find(v=>v instanceof lf&&v.position.x<0),y=this.scene.children.find(v=>v instanceof Vc);m&&(m.color=new Ke(t[1])),y&&(y.color=new Ke(t.length>2?t[2]:t[1]))}}catch{const g=this.instancedMesh.material;g.color.setHex(65535),g.emissive.setHex(13107)}this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){Zc(this.scene,this.renderer)}}const Nc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Qo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const lT=new $a(-1,1,1,-1,0,1);class cT extends cn{constructor(){super(),this.setAttribute("position",new Qt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qt([0,2,0,0,2,0],2))}}const uT=new cT;class nv{constructor(e){this._mesh=new un(uT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,lT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class hT extends Qo{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ln?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Gc.clone(e.uniforms),this.material=new ln({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new nv(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Wg extends Qo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let c,u;this.inverse?(c=0,u=1):(c=1,u=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,c,4294967295),o.buffers.stencil.setClear(u),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class fT extends Qo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class iv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ht);this._width=i.width,this._height=i.height,t=new ai(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_i}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new hT(Nc),this.copyPass.material.blending=rr,this.timer=new aM}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,o=this.passes.length;s<o;s++){const c=this.passes[s];if(c.enabled!==!1){if(c.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),c.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),c.needsSwap){if(i){const u=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(u.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(u.EQUAL,1,4294967295)}this.swapBuffers()}Wg!==void 0&&(c instanceof Wg?i=!0:c instanceof fT&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ht);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class rv extends Qo{constructor(e,t,i=null,s=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ke}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let o,c;this.overrideMaterial!==null&&(c=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=c),e.autoClear=s}}const dT={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ke(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Vs extends Qo{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ht(e.x,e.y):new ht(256,256),this.clearColor=new Ke(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);this.renderTargetBright=new ai(o,c,{type:_i}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let p=0;p<this.nMips;p++){const g=new ai(o,c,{type:_i});g.texture.name="UnrealBloomPass.h"+p,g.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(g);const m=new ai(o,c,{type:_i});m.texture.name="UnrealBloomPass.v"+p,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),o=Math.round(o/2),c=Math.round(c/2)}const u=dT;this.highPassUniforms=Gc.clone(u.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ln({uniforms:this.highPassUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader}),this.separableBlurMaterials=[];const h=[6,10,14,18,22];o=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);for(let p=0;p<this.nMips;p++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(h[p])),this.separableBlurMaterials[p].uniforms.invSize.value=new ht(1/o,1/c),o=Math.round(o/2),c=Math.round(c/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const f=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=f,this.bloomTintColors=[new Z(1,1,1),new Z(1,1,1),new Z(1,1,1),new Z(1,1,1),new Z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Gc.clone(Nc.uniforms),this.blendMaterial=new ln({uniforms:this.copyUniforms,vertexShader:Nc.vertexShader,fragmentShader:Nc.fragmentShader,premultipliedAlpha:!0,blending:Ba,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ke,this._oldClearAlpha=1,this._basic=new Yc,this._fsQuad=new nv(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,s),this.renderTargetsVertical[o].setSize(i,s),this.separableBlurMaterials[o].uniforms.invSize.value=new ht(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,o){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const c=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let u=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this._fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=u.texture,this.separableBlurMaterials[h].uniforms.direction.value=Vs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[h]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=Vs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[h]),e.clear(),this._fsQuad.render(e),u=this.renderTargetsVertical[h];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=c}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new ln({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ht(.5,.5)},direction:{value:new ht(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}}Vs.BlurDirectionX=new ht(1,0);Vs.BlurDirectionY=new ht(0,1);const pT=/^[og]\s*(.+)?/,mT=/^mtllib /,gT=/^usemtl /,xT=/^usemap /,Xg=/\s+/,jg=new Z,mf=new Z,qg=new Z,Yg=new Z,Ai=new Z,Tc=new Ke;function vT(){const a={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,o){const c=this._finalize(!1);c&&(c.inherited||c.groupCount<=0)&&this.materials.splice(c.index,1);const u={index:this.materials.length,name:s||"",mtllib:Array.isArray(o)&&o.length>0?o[o.length-1]:"",smooth:c!==void 0?c.smooth:this.smooth,groupStart:c!==void 0?c.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(h){const f={index:typeof h=="number"?h:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return f.clone=this.clone.bind(f),f}};return this.materials.push(u),u},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const o=this.currentMaterial();if(o&&o.groupEnd===-1&&(o.groupEnd=this.geometry.vertices.length/3,o.groupCount=o.groupEnd-o.groupStart,o.inherited=!1),s&&this.materials.length>1)for(let c=this.materials.length-1;c>=0;c--)this.materials[c].groupCount<=0&&this.materials.splice(c,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),o}},i&&i.name&&typeof i.clone=="function"){const s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const s=this.vertices,o=this.object.geometry.vertices;o.push(s[e+0],s[e+1],s[e+2]),o.push(s[t+0],s[t+1],s[t+2]),o.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const s=this.normals,o=this.object.geometry.normals;o.push(s[e+0],s[e+1],s[e+2]),o.push(s[t+0],s[t+1],s[t+2]),o.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(e,t,i){const s=this.vertices,o=this.object.geometry.normals;jg.fromArray(s,e),mf.fromArray(s,t),qg.fromArray(s,i),Ai.subVectors(qg,mf),Yg.subVectors(jg,mf),Ai.cross(Yg),Ai.normalize(),o.push(Ai.x,Ai.y,Ai.z),o.push(Ai.x,Ai.y,Ai.z),o.push(Ai.x,Ai.y,Ai.z)},addColor:function(e,t,i){const s=this.colors,o=this.object.geometry.colors;s[e]!==void 0&&o.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&o.push(s[t+0],s[t+1],s[t+2]),s[i]!==void 0&&o.push(s[i+0],s[i+1],s[i+2])},addUV:function(e,t,i){const s=this.uvs,o=this.object.geometry.uvs;o.push(s[e+0],s[e+1]),o.push(s[t+0],s[t+1]),o.push(s[i+0],s[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,s,o,c,u,h,f){const p=this.vertices.length;let g=this.parseVertexIndex(e,p),m=this.parseVertexIndex(t,p),y=this.parseVertexIndex(i,p);if(this.addVertex(g,m,y),this.addColor(g,m,y),u!==void 0&&u!==""){const v=this.normals.length;g=this.parseNormalIndex(u,v),m=this.parseNormalIndex(h,v),y=this.parseNormalIndex(f,v),this.addNormal(g,m,y)}else this.addFaceNormal(g,m,y);if(s!==void 0&&s!==""){const v=this.uvs.length;g=this.parseUVIndex(s,v),m=this.parseUVIndex(o,v),y=this.parseUVIndex(c,v),this.addUV(g,m,y),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,s=e.length;i<s;i++){const o=this.parseVertexIndex(e[i],t);this.addVertexPoint(o),this.addColor(o)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,s=this.uvs.length;for(let o=0,c=e.length;o<c;o++)this.addVertexLine(this.parseVertexIndex(e[o],i));for(let o=0,c=t.length;o<c;o++)this.addUVLine(this.parseUVIndex(t[o],s))}};return a.startObject("",!1),a}class _T extends Xd{constructor(e){super(e),this.materials=null}load(e,t,i,s){const o=this,c=new tM(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{t(o.parse(u))}catch(h){s?s(h):console.error(h),o.manager.itemError(e)}},i,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new vT;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let s=[];for(let u=0,h=i.length;u<h;u++){const f=i[u].trimStart();if(f.length===0)continue;const p=f.charAt(0);if(p!=="#")if(p==="v"){const g=f.split(Xg);switch(g[0]){case"v":t.vertices.push(parseFloat(g[1]),parseFloat(g[2]),parseFloat(g[3])),g.length>=7?(Tc.setRGB(parseFloat(g[4]),parseFloat(g[5]),parseFloat(g[6]),gi),t.colors.push(Tc.r,Tc.g,Tc.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(g[1]),parseFloat(g[2]),parseFloat(g[3]));break;case"vt":t.uvs.push(parseFloat(g[1]),parseFloat(g[2]));break}}else if(p==="f"){const m=f.slice(1).trim().split(Xg),y=[];for(let w=0,_=m.length;w<_;w++){const S=m[w];if(S.length>0){const b=S.split("/");y.push(b)}}const v=y[0];for(let w=1,_=y.length-1;w<_;w++){const S=y[w],b=y[w+1];t.addFace(v[0],S[0],b[0],v[1],S[1],b[1],v[2],S[2],b[2])}}else if(p==="l"){const g=f.substring(1).trim().split(" ");let m=[];const y=[];if(f.indexOf("/")===-1)m=g;else for(let v=0,w=g.length;v<w;v++){const _=g[v].split("/");_[0]!==""&&m.push(_[0]),_[1]!==""&&y.push(_[1])}t.addLineGeometry(m,y)}else if(p==="p"){const m=f.slice(1).trim().split(" ");t.addPointGeometry(m)}else if((s=pT.exec(f))!==null){const g=(" "+s[0].slice(1).trim()).slice(1);t.startObject(g)}else if(gT.test(f))t.object.startMaterial(f.substring(7).trim(),t.materialLibraries);else if(mT.test(f))t.materialLibraries.push(f.substring(7).trim());else if(xT.test(f))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(p==="s"){if(s=f.split(" "),s.length>1){const m=s[1].trim().toLowerCase();t.object.smooth=m!=="0"&&m!=="off"}else t.object.smooth=!0;const g=t.object.currentMaterial();g&&(g.smooth=t.object.smooth)}else{if(f==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+f+'"')}}t.finalize();const o=new Na;if(o.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let u=0,h=t.objects.length;u<h;u++){const f=t.objects[u],p=f.geometry,g=f.materials,m=p.type==="Line",y=p.type==="Points";let v=!1;if(p.vertices.length===0)continue;const w=new cn;w.setAttribute("position",new Qt(p.vertices,3)),p.normals.length>0&&w.setAttribute("normal",new Qt(p.normals,3)),p.colors.length>0&&(v=!0,w.setAttribute("color",new Qt(p.colors,3))),p.hasUVIndices===!0&&w.setAttribute("uv",new Qt(p.uvs,2));const _=[];for(let b=0,C=g.length;b<C;b++){const E=g[b],L=E.name+"_"+E.smooth+"_"+v;let A=t.materials[L];if(this.materials!==null){if(A=this.materials.create(E.name),m&&A&&!(A instanceof Wo)){const I=new Wo;ji.prototype.copy.call(I,A),I.color.copy(A.color),A=I}else if(y&&A&&!(A instanceof os)){const I=new os({size:10,sizeAttenuation:!1});ji.prototype.copy.call(I,A),I.color.copy(A.color),I.map=A.map,A=I}}A===void 0&&(m?A=new Wo:y?A=new os({size:1,sizeAttenuation:!1}):A=new $S,A.name=E.name,A.flatShading=!E.smooth,A.vertexColors=v,t.materials[L]=A),_.push(A)}let S;if(_.length>1){for(let b=0,C=g.length;b<C;b++){const E=g[b];w.addGroup(E.groupStart,E.groupCount,b)}m?S=new hd(w,_):y?S=new Pr(w,_):S=new un(w,_)}else m?S=new hd(w,_[0]):y?S=new Pr(w,_[0]):S=new un(w,_[0]);S.name=f.name,o.add(S)}else if(t.vertices.length>0){const u=new os({size:1,sizeAttenuation:!1}),h=new cn;h.setAttribute("position",new Qt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(h.setAttribute("color",new Qt(t.colors,3)),u.vertexColors=!0);const f=new Pr(h,u);o.add(f)}return o}}const Gi=class Gi{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"threeCanvas");U(this,"scene");U(this,"camera");U(this,"renderer");U(this,"composer");U(this,"handGroup",null);U(this,"backgroundParticles",null);U(this,"pinchStrength",0);U(this,"baseScale",1);U(this,"currentModel","torus");U(this,"disposed",!1);U(this,"uniforms",{uTime:{value:0},uPinch:{value:0},uColor:{value:new Z(0,.53,1)}});U(this,"bgUniforms",{uTime:{value:0},uColor:{value:new Z(.5,.7,1)}});this.canvas=e,this.ctx=t,this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.scene=new us;const i=this.threeCanvas.width/this.threeCanvas.height;this.camera=new Pn(50,i,.1,100),this.camera.position.z=10,this.renderer=new hs({canvas:this.threeCanvas,alpha:!0,antialias:!0}),this.renderer.setSize(this.threeCanvas.width,this.threeCanvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const s=new rv(this.scene,this.camera),o=new Vs(new ht(this.threeCanvas.width,this.threeCanvas.height),3,1,0);this.composer=new iv(this.renderer),this.composer.addPass(s),this.composer.addPass(o),this.createBackgroundDust(),this.createTorusGeometry(),console.log("💨 SmokeHandRenderer initialized")}static loadHandGeometry(){return Gi.handGeometry||(Gi.handGeometry=new Promise((e,t)=>{new _T().load(Gi.HAND_MODEL_URL,i=>{const s=[];i.traverse(c=>{c instanceof un&&s.push(c)});const o=s[s.length-1];o!=null&&o.geometry?e(o.geometry):t(new Error("No mesh in the hand model"))},void 0,t)}),Gi.handGeometry.catch(()=>{Gi.handGeometry=null})),Gi.handGeometry}createBackgroundDust(){const t=new Float32Array(6e3),i=new Float32Array(2e3*3);for(let c=0;c<2e3;c++)t[c*3]=(Math.random()-.5)*40,t[c*3+1]=(Math.random()-.5)*30,t[c*3+2]=-5-Math.random()*20,i[c*3]=Math.random(),i[c*3+1]=Math.random(),i[c*3+2]=Math.random();const s=new cn;s.setAttribute("position",new Sn(t,3)),s.setAttribute("aRandom",new Sn(i,3));const o=new ln({uniforms:this.bgUniforms,transparent:!0,depthWrite:!1,blending:Ba,vertexShader:`
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
      `});this.backgroundParticles=new Pr(s,o),this.scene.add(this.backgroundParticles)}createTorusGeometry(){const e=new Wd(1.5,.45,900,150);this.createParticleSystem(e)}createParticleSystem(e){this.handGroup&&this.scene.remove(this.handGroup),this.handGroup=new Na;const t=e.getAttribute("position").count,i=e.getAttribute("position").array,s=new Float32Array(t*3),o=new Float32Array(t*3);for(let f=0;f<t;f++)s[f*3]=i[f*3],s[f*3+1]=i[f*3+1],s[f*3+2]=i[f*3+2],o[f*3]=Math.random(),o[f*3+1]=Math.random(),o[f*3+2]=Math.random();const c=new cn;c.setAttribute("position",new Sn(s,3)),c.setAttribute("aRandom",new Sn(o,3)),c.setAttribute("aOriginalPos",new Sn(i,3));const u=new ln({uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:Ba,vertexShader:`
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
      `}),h=new Pr(c,u);if(h.geometry.computeBoundingSphere(),h.geometry.boundingSphere){const f=h.geometry.boundingSphere.center;h.position.sub(f);const p=h.geometry.boundingSphere.radius;this.baseScale=2.5/p,this.handGroup.scale.set(this.baseScale,this.baseScale,this.baseScale)}this.handGroup.add(h),this.scene.add(this.handGroup)}render(e,t,i){const s=performance.now()*.001;this.uniforms.uTime.value=s,this.bgUniforms.uTime.value=s;const o=new Ke(t[0]||"#0088ff");this.uniforms.uColor.value.set(o.r,o.g,o.b);const c=new Ke(t[1]||t[0]||"#5588ff");this.bgUniforms.uColor.value.set(c.r*.5,c.g*.7,c.b);let u=0;if(e.right&&e.right.gesture==="open"&&e.right.landmarks){const h=e.right.landmarks,f=h[8],p=h[4],g=f.x*2-1,m=-(f.y*2-1),y=new Z(g,m,.5);y.unproject(this.camera);const v=y.sub(this.camera.position).normalize(),w=(0-this.camera.position.z)/v.z,_=this.camera.position.clone().add(v.multiplyScalar(w));this.handGroup&&(this.handGroup.position.lerp(_,.15),this.handGroup.rotation.y=g*.8,this.handGroup.rotation.x=-m*.8);const S=f.x-p.x,b=f.y-p.y,C=Math.sqrt(S*S+b*b);u=ss.mapLinear(C,.02,.15,0,1),u=ss.clamp(u,0,1)}else if(e.left&&e.left.gesture==="open"&&e.left.landmarks){const h=e.left.landmarks,f=h[8],p=h[4],g=f.x*2-1,m=-(f.y*2-1),y=new Z(g,m,.5);y.unproject(this.camera);const v=y.sub(this.camera.position).normalize(),w=(0-this.camera.position.z)/v.z,_=this.camera.position.clone().add(v.multiplyScalar(w));this.handGroup&&(this.handGroup.position.lerp(_,.15),this.handGroup.rotation.y=g*.8,this.handGroup.rotation.x=-m*.8);const S=f.x-p.x,b=f.y-p.y,C=Math.sqrt(S*S+b*b);u=ss.mapLinear(C,.02,.15,0,1),u=ss.clamp(u,0,1)}else this.handGroup&&(this.handGroup.rotation.y+=.005,this.handGroup.rotation.z=Math.sin(s*.5)*.1,this.handGroup.position.lerp(new Z(0,0,0),.05));if(this.pinchStrength=ss.lerp(this.pinchStrength,u,.1),this.uniforms.uPinch.value=this.pinchStrength,this.handGroup){const h=this.baseScale*(1+this.pinchStrength*.5),f=this.handGroup.scale.x,p=ss.lerp(f,h,.1);this.handGroup.scale.set(p,p,p)}this.composer.render(),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}resize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer.setSize(e,t),this.threeCanvas.width=e,this.threeCanvas.height=t}setSmokeHandModel(e){if(this.currentModel!==e){if(this.currentModel=e,e==="torus"){this.createTorusGeometry();return}this.createTorusGeometry(),Gi.loadHandGeometry().then(t=>{this.currentModel==="hand"&&!this.disposed&&this.createParticleSystem(t)},t=>{console.error("Hand model unavailable, staying on the torus:",t)})}}destroy(){this.disposed=!0,this.handGroup&&this.scene.remove(this.handGroup),this.backgroundParticles&&this.scene.remove(this.backgroundParticles),this.composer.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),console.log("💨 SmokeHandRenderer destroyed")}};U(Gi,"handGeometry",null),U(Gi,"HAND_MODEL_URL","https://raw.githubusercontent.com/NPC-88/3dfiles/195a81cd4607a3176f231766b5bd2dd4b4d216fb/16834_hand_v1_NEW.obj");let Wc=Gi;class yT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"lines",[]);U(this,"gridSpacing",30);U(this,"lineLength",22);U(this,"isClapping",!1);U(this,"clappingIntensity",0);this.canvas=e,this.ctx=t,this.initializeGrid(),console.log("✅ ThickLineRenderer initialized")}initializeGrid(){this.lines=[];const e=Math.ceil(this.canvas.width/this.gridSpacing)+1,t=Math.ceil(this.canvas.height/this.gridSpacing)+1;for(let i=0;i<t;i++)for(let s=0;s<e;s++)this.lines.push({x:s*this.gridSpacing,y:i*this.gridSpacing,length:this.lineLength,currentAngle:0,targetAngle:0,spinVelocity:0})}render(e,t){t[1]&&(t[1].toLowerCase()==="#ffffff"||t[1].toLowerCase()==="#fff")?this.ctx.fillStyle="#000000":this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),(this.lines.length===0||this.lines[0].x>this.canvas.width||this.lines[0].y>this.canvas.height)&&this.initializeGrid();let s=.12,o=0;const c=[];e.left&&c.push(e.left),e.right&&c.push(e.right),c.forEach(h=>{let f=h.fingerCount||2;h.gesture==="pinch"&&(f=1),o=Math.max(o,f)}),o===1?s=.03:o>=4&&(s=.25),e.clapping?this.isClapping||(this.isClapping=!0,this.clappingIntensity=1):this.isClapping=!1,this.clappingIntensity>0&&(this.clappingIntensity*=.95,this.clappingIntensity<.01&&(this.clappingIntensity=0));const u=t[0]||"#ffffff";this.lines.forEach(h=>{if(c.length>0){let p=0,g=0,m=0;c.forEach(y=>{var L,A;const v=(((L=y.position)==null?void 0:L.x)||.5)*this.canvas.width,w=(((A=y.position)==null?void 0:A.y)||.5)*this.canvas.height,_=v-h.x,S=w-h.y,C=1/(1+Math.sqrt(_*_+S*S)*.005),E=Math.atan2(S,_);g+=Math.cos(E)*C,m+=Math.sin(E)*C,p+=C}),p>0&&(h.targetAngle=Math.atan2(m,g))}else h.targetAngle=0;if(this.clappingIntensity>0)h.spinVelocity+=this.clappingIntensity*.8,h.currentAngle+=h.spinVelocity,h.spinVelocity*=.9;else{let p=h.targetAngle-h.currentAngle;for(;p>Math.PI;)p-=Math.PI*2;for(;p<-Math.PI;)p+=Math.PI*2;h.currentAngle+=p*s,h.spinVelocity=0}let f=2;if(c.length>0){let p=1/0;c.forEach(v=>{var b,C;const w=(((b=v.position)==null?void 0:b.x)||.5)*this.canvas.width,_=(((C=v.position)==null?void 0:C.y)||.5)*this.canvas.height,S=Math.hypot(w-h.x,_-h.y);S<p&&(p=S)});const g=35,m=2,y=600;if(p<y){const v=Math.pow(1-p/y,3);f=m+(g-m)*v}}this.ctx.save(),this.ctx.translate(h.x,h.y),this.ctx.rotate(h.currentAngle),this.ctx.fillStyle=u,this.ctx.fillRect(-h.length/2,-f/2,h.length,f),this.ctx.restore()})}}class ST{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"elements",[]);U(this,"gridSpacing",20);U(this,"elementLength",12);U(this,"elementWidth",3);U(this,"time",0);U(this,"isClapping",!1);this.canvas=e,this.ctx=t,this.initializeField(),console.log("✅ FlowFieldRenderer initialized")}initializeField(){this.elements=[];const e=Math.ceil(this.canvas.width/this.gridSpacing)+1,t=Math.ceil(this.canvas.height/this.gridSpacing)+1;for(let i=0;i<t;i++)for(let s=0;s<e;s++)this.elements.push({x:s*this.gridSpacing,y:i*this.gridSpacing,angle:Math.random()*Math.PI*2,velocity:0,targetAngle:0})}noise(e,t,i){return Math.sin(e*.01+i)+Math.sin(t*.01+i)+Math.sin((e+t)*.01+i)}render(e,t,i){const s=.01+(i?i.mid*.05:0);this.time+=s*xn(),t[4]&&t[4]+"",e.clapping?this.ctx.fillStyle="#222222":this.ctx.fillStyle="#000510",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),(this.elements.length===0||this.elements[0].x>this.canvas.width)&&this.initializeField();const o=[];e.left&&o.push(e.left),e.right&&o.push(e.right);const c=i?i.bass:0,u=i?i.high:0,h=i?i.beat:!1,f=this.elementLength*(1+c*1.5),p=this.elementWidth*(1+c*.5);this.ctx.save(),this.elements.forEach((g,m)=>{let v=this.noise(g.x,g.y,this.time)*Math.PI,w=null;if(u>.2&&(v+=(Math.random()-.5)*u),o.length>0){let S=0,b=0,C="none";if(o.forEach(E=>{var te,se;const L=(((te=E.position)==null?void 0:te.x)||.5)*this.canvas.width,A=(((se=E.position)==null?void 0:se.y)||.5)*this.canvas.height,I=L-g.x,T=A-g.y,F=Math.sqrt(I*I+T*T),z=Math.atan2(T,I),H=Math.max(0,1-F/800);if(H>b){b=H;const W=E.fingerCount??5;E.gesture==="pinch"?(S=z,C="pinch"):W<=2?(S=z+Math.PI/2,C="2fingers"):(S=z+Math.PI,C="5fingers")}}),b>.1){let E=S-v;for(;E>Math.PI;)E-=Math.PI*2;for(;E<-Math.PI;)E+=Math.PI*2;v+=E*(b*.95),b>.3&&(C==="pinch"?w=t[1]||"#ff00ff":C==="5fingers"?w=t[2]||"#00ffff":C==="2fingers"&&(w=t[0]||"#ffffff"))}}if(e.clapping||h){const S=this.canvas.width/2,b=this.canvas.height/2,C=g.x-S,E=g.y-b,L=Math.atan2(E,C),A=(e.clapping?.9:0)+(h?.4:0);if(A>0){let I=L-v;for(;I>Math.PI;)I-=Math.PI*2;for(;I<-Math.PI;)I+=Math.PI*2;v+=I*A,e.clapping&&(w="#ffffff")}}let _=v-g.angle;for(;_>Math.PI;)_-=Math.PI*2;for(;_<-Math.PI;)_+=Math.PI*2;g.angle+=_*.25,this.ctx.translate(g.x,g.y),this.ctx.rotate(g.angle),w?this.ctx.fillStyle=w:this.ctx.fillStyle=h&&Math.random()>.7?"#ffffff":t[0]||"#ffffff",this.ctx.fillRect(-f/2,-p/2,f,p),this.ctx.rotate(-g.angle),this.ctx.translate(-g.x,-g.y)}),this.ctx.restore()}}class MT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"threeCanvas");U(this,"scene");U(this,"camera");U(this,"renderer");U(this,"material");U(this,"time",0);U(this,"hand1",new ht(.5,.5));U(this,"hand2",new ht(.5,.5));U(this,"h1Radius",.3);U(this,"h1Strength",0);U(this,"h2Radius",.3);U(this,"h2Strength",0);U(this,"vertexShader",`
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
  `);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.initThreeJS(),console.log("💧 LiquidChromeRenderer initialized"),console.warn=i}initThreeJS(){this.scene=new us,this.camera=new $a(-1,1,1,-1,0,1),this.renderer=new hs({canvas:this.threeCanvas,antialias:!1,alpha:!0}),this.renderer.setSize(this.canvas.width,this.canvas.height);const e=new Nr(2,2);this.material=new ln({vertexShader:this.vertexShader,fragmentShader:this.fragmentShader,uniforms:{uTime:{value:0},uResolution:{value:new ht(this.canvas.width,this.canvas.height)},uHand1Pos:{value:new ht(.5,.5)},uHand1Radius:{value:.3},uHand1Strength:{value:0},uHand2Pos:{value:new ht(.5,.5)},uHand2Radius:{value:.3},uHand2Strength:{value:0},uColor1:{value:new Ke(6514417)},uColor2:{value:new Ke(9133302)},uColor3:{value:new Ke(14239471)}}});const t=new un(e,this.material);this.scene.add(t)}getHandParams(e){return e?e.gesture==="pinch"?{radius:.15,strength:2.5}:(e.fingerCount!==void 0?e.fingerCount:5)<=2?{radius:.3,strength:1.5}:{radius:.6,strength:1}:{radius:.3,strength:0}}render(e,t){this.time+=.01*xn(),(this.threeCanvas.width!==this.canvas.width||this.threeCanvas.height!==this.canvas.height)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=this.canvas.width,this.threeCanvas.height=this.canvas.height,this.material.uniforms.uResolution.value.set(this.canvas.width,this.canvas.height)),this.material.uniforms.uTime.value=this.time;const i=this.canvas.width/this.canvas.height;if(e.clapping){const o=3+Math.sin(this.time*20)*.5;this.h1Radius+=(1.5-this.h1Radius)*.1,this.h1Strength+=(o-this.h1Strength)*.1,this.h2Radius+=(1.5-this.h2Radius)*.1,this.h2Strength+=(o-this.h2Strength)*.1}else{if(e.left){const s=this.getHandParams(e.left);this.h1Radius+=(s.radius-this.h1Radius)*.1,this.h1Strength+=(s.strength-this.h1Strength)*.1;const o=e.left.position.x*i*.8,c=(1-e.left.position.y)*.8;this.material.uniforms.uHand1Pos.value.set(o,c)}else this.h1Strength*=.9;if(e.right){const s=this.getHandParams(e.right);this.h2Radius+=(s.radius-this.h2Radius)*.1,this.h2Strength+=(s.strength-this.h2Strength)*.1;const o=e.right.position.x*i*.8,c=(1-e.right.position.y)*.8;this.material.uniforms.uHand2Pos.value.set(o,c)}else this.h2Strength*=.9}this.material.uniforms.uHand1Radius.value=this.h1Radius,this.material.uniforms.uHand1Strength.value=this.h1Strength,this.material.uniforms.uHand2Radius.value=this.h2Radius,this.material.uniforms.uHand2Strength.value=this.h2Strength,t&&t.length>=3&&(this.material.uniforms.uColor1.value.set(t[0]),this.material.uniforms.uColor2.value.set(t[1]),this.material.uniforms.uColor3.value.set(t[2])),this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0)}destroy(){this.renderer.dispose(),this.renderer.forceContextLoss(),this.material.dispose()}}class wT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"rectangles",[]);U(this,"baseWidth",1920);U(this,"baseHeight",1080);U(this,"gridStructure",[]);this.canvas=e,this.ctx=t,this.createVariedLayout()}createVariedLayout(){[{x:0,y:0,w:480,h:360},{x:480,y:0,w:320,h:180},{x:800,y:0,w:320,h:180},{x:1120,y:0,w:400,h:180},{x:1520,y:0,w:400,h:180},{x:480,y:180,w:240,h:180},{x:720,y:180,w:240,h:180},{x:960,y:180,w:160,h:180},{x:1120,y:180,w:240,h:180},{x:1360,y:180,w:280,h:180},{x:1640,y:180,w:280,h:180},{x:0,y:360,w:120,h:360},{x:120,y:360,w:120,h:360},{x:240,y:360,w:120,h:360},{x:360,y:360,w:120,h:360},{x:480,y:360,w:320,h:360},{x:800,y:360,w:320,h:360},{x:1120,y:360,w:200,h:180},{x:1320,y:360,w:200,h:180},{x:1520,y:360,w:200,h:180},{x:1720,y:360,w:200,h:180},{x:1120,y:540,w:160,h:180},{x:1280,y:540,w:160,h:180},{x:1440,y:540,w:240,h:180},{x:1680,y:540,w:240,h:180},{x:0,y:720,w:160,h:360},{x:160,y:720,w:160,h:360},{x:320,y:720,w:160,h:360},{x:480,y:720,w:240,h:360},{x:720,y:720,w:240,h:360},{x:960,y:720,w:160,h:360},{x:1120,y:720,w:400,h:360},{x:1520,y:720,w:400,h:360}].forEach((t,i)=>{let s;const o=i%3;o===0?s="vertical":o===1?s="horizontal":s="vertical-reverse",this.rectangles.push({id:i,baseX:t.x,baseY:t.y,baseW:t.w,baseH:t.h,currentX:t.x,currentY:t.y,currentW:t.w,currentH:t.h,gradientDirection:s}),this.gridStructure.push({x:t.x,y:t.y,w:t.w,h:t.h,targetW:t.w,targetH:t.h})})}render(e,t){const i=this.ctx.createLinearGradient(0,0,0,this.canvas.height);i.addColorStop(0,t[2]||"#d9d9d9"),i.addColorStop(1,t[0]||"#1a00ff"),this.ctx.fillStyle=i,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let s=.15;if(e.left||e.right){const h=[];e.left&&h.push(e.left),e.right&&h.push(e.right);let f=0;h.forEach(p=>{let g=p.fingerCount||2;p.gesture==="pinch"&&(g=1),f=Math.max(f,g)}),f===1?s=.02:f===2?s=.15:f===3?s=.25:f===4?s=.35:f>=5&&(s=.5),this.rectangles.forEach((p,g)=>{this.gridStructure[g].targetW=p.baseW,this.gridStructure[g].targetH=p.baseH}),h.forEach(p=>{var v,w;const g=(((v=p.position)==null?void 0:v.x)||.5)*this.baseWidth,m=(((w=p.position)==null?void 0:w.y)||.5)*this.baseHeight,y=p.velocity||0;this.rectangles.forEach((_,S)=>{const b=_.baseX+_.baseW/2,C=_.baseY+_.baseH/2,E=g-b,L=m-C,A=Math.sqrt(E*E+L*L),T=Math.max(0,1-A/700);if(T>.1){const F=Math.atan2(L,E),z=1+T*.6,D=Math.min(y*.5,.4),H=z+Math.abs(Math.cos(F))*D,te=z+Math.abs(Math.sin(F))*D;this.gridStructure[S].targetW=_.baseW*H,this.gridStructure[S].targetH=_.baseH*te}})})}else this.rectangles.forEach((h,f)=>{this.gridStructure[f].targetW=h.baseW,this.gridStructure[f].targetH=h.baseH});const o=Math.min(.95,s*xn());this.gridStructure.forEach(h=>{h.w+=(h.targetW-h.w)*o,h.h+=(h.targetH-h.h)*o}),this.normalizeGridPerfectly(),this.rectangles.forEach((h,f)=>{h.currentX=this.gridStructure[f].x,h.currentY=this.gridStructure[f].y,h.currentW=this.gridStructure[f].w,h.currentH=this.gridStructure[f].h});const c=this.canvas.width/this.baseWidth,u=this.canvas.height/this.baseHeight;this.rectangles.forEach(h=>{this.drawRectangle(h,c,u,t)})}normalizeGridPerfectly(){const e=new Map;this.rectangles.forEach((c,u)=>{const h=Math.round(c.baseY/10)*10;e.has(h)||e.set(h,[]),e.get(h).push(u)});const t=Array.from(e.entries()).sort((c,u)=>c[0]-u[0]).map(c=>c[1]);t.forEach(c=>{c.sort((p,g)=>this.rectangles[p].baseX-this.rectangles[g].baseX);const u=c.reduce((p,g)=>p+this.gridStructure[g].w,0),h=this.baseWidth/u;c.forEach(p=>{this.gridStructure[p].w*=h});let f=0;c.forEach(p=>{this.gridStructure[p].x=f,f+=this.gridStructure[p].w})});let i=0;t.forEach(c=>{const u=Math.max(...c.map(h=>this.gridStructure[h].h));c.forEach(h=>{this.gridStructure[h].y=i,this.gridStructure[h].h=u}),i+=u});const s=i,o=this.baseHeight/s;i=0,t.forEach(c=>{const u=this.gridStructure[c[0]].h*o;c.forEach(h=>{this.gridStructure[h].y=i,this.gridStructure[h].h=u}),i+=u})}drawRectangle(e,t,i,s){this.ctx.save();const o=e.currentX*t,c=e.currentY*i,u=e.currentW*t,h=e.currentH*i;let f;e.gradientDirection==="vertical"?(f=this.ctx.createLinearGradient(o,c,o,c+h),f.addColorStop(0,s[2]||"#d9d9d9"),f.addColorStop(1,s[0]||"#1a00ff")):e.gradientDirection==="vertical-reverse"?(f=this.ctx.createLinearGradient(o,c,o,c+h),f.addColorStop(0,s[0]||"#1a00ff"),f.addColorStop(1,s[2]||"#d9d9d9")):(f=this.ctx.createLinearGradient(o,c,o+u,c),f.addColorStop(0,s[2]||"#d9d9d9"),f.addColorStop(1,s[0]||"#1a00ff")),this.ctx.fillStyle=f,this.ctx.fillRect(o,c,u,h),this.ctx.restore()}}class bT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"threeCanvas");U(this,"scene");U(this,"camera");U(this,"renderer");U(this,"linesMesh");U(this,"pointsMesh");U(this,"gridPoints");U(this,"edges");U(this,"originalToSortedMap");U(this,"time",0);U(this,"interactionLevel",.5);U(this,"handX",.5);U(this,"handY",.5);U(this,"GRID_SIZE",10);U(this,"SPACING",1.5);U(this,"TOTAL_POINTS",1e3);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.initThreeJS(),console.log("🕸️ NetworkCubeRenderer initialized"),console.warn=i}initThreeJS(){this.scene=new us,this.scene.fog=new Zo(0,.06),this.camera=new Pn(75,this.canvas.width/this.canvas.height,.1,1e3),this.camera.position.z=20,this.renderer=new hs({canvas:this.threeCanvas,antialias:!0,alpha:!0}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=this.GRID_SIZE*this.GRID_SIZE*this.GRID_SIZE;this.gridPoints=new Float32Array(e*3);const t=[],i=(this.GRID_SIZE-1)*this.SPACING*.5,s=(v,w,_)=>v+w*this.GRID_SIZE+_*this.GRID_SIZE*this.GRID_SIZE;let o=0;for(let v=0;v<this.GRID_SIZE;v++)for(let w=0;w<this.GRID_SIZE;w++)for(let _=0;_<this.GRID_SIZE;_++){this.gridPoints[o++]=_*this.SPACING-i+(Math.random()-.5)*.3,this.gridPoints[o++]=w*this.SPACING-i+(Math.random()-.5)*.3,this.gridPoints[o++]=v*this.SPACING-i+(Math.random()-.5)*.3;const b=s(_,w,v);_<this.GRID_SIZE-1&&t.push(b,s(_+1,w,v)),w<this.GRID_SIZE-1&&t.push(b,s(_,w+1,v)),v<this.GRID_SIZE-1&&t.push(b,s(_,w,v+1)),Math.random()>.8&&_<this.GRID_SIZE-1&&w<this.GRID_SIZE-1&&t.push(b,s(_+1,w+1,v))}this.edges=new Int32Array(t);const c=new Int32Array(e);for(let v=0;v<e;v++)c[v]=v;for(let v=e-1;v>0;v--){const w=Math.floor(Math.random()*(v+1));[c[v],c[w]]=[c[w],c[v]]}const u=new Float32Array(e*3);this.originalToSortedMap=new Int32Array(e);for(let v=0;v<e;v++){const w=c[v];this.originalToSortedMap[w]=v,u[v*3]=this.gridPoints[w*3],u[v*3+1]=this.gridPoints[w*3+1],u[v*3+2]=this.gridPoints[w*3+2]}const h=new cn;h.setAttribute("position",new Sn(u,3));const f=new os({color:16777215,size:.15,transparent:!0,opacity:.9,sizeAttenuation:!0});this.pointsMesh=new Pr(h,f),this.scene.add(this.pointsMesh);const p=new cn,g=this.edges.length*3,m=new Float32Array(g);p.setAttribute("position",new Sn(m,3));const y=new Wo({color:65535,transparent:!0,opacity:.2,blending:Ba});this.linesMesh=new hd(p,y),this.linesMesh.frustumCulled=!1,this.scene.add(this.linesMesh)}updateLogic(e,t){let i=0;const s=e.left||e.right;s?(this.handX+=(s.position.x-this.handX)*.1,this.handY+=(s.position.y-this.handY)*.1,e.clapping?i=1.2:s.gesture==="pinch"?i=.05:i=.2+(s.fingerCount||0)/5*.8):(this.handX+=(.5-this.handX)*.05,this.handY+=(.5-this.handY)*.05,i=.3+Math.sin(this.time*.5)*.1),this.interactionLevel+=(i-this.interactionLevel)*.08;const o=t?t.bass:0,c=t?t.high:0,u=Math.max(0,Math.min(1.5,this.interactionLevel+o*.3)),h=this.pointsMesh.geometry.attributes.position.count,f=50,p=Math.floor(f+u*(h-f));this.pointsMesh.geometry.setDrawRange(0,p);const g=this.linesMesh.geometry.attributes.position.array;let m=0;for(let S=0;S<this.edges.length;S+=2){const b=this.edges[S],C=this.edges[S+1],E=this.originalToSortedMap[b],L=this.originalToSortedMap[C];if(E<p&&L<p){const A=b*3,I=C*3;g[m++]=this.gridPoints[A],g[m++]=this.gridPoints[A+1],g[m++]=this.gridPoints[A+2],g[m++]=this.gridPoints[I],g[m++]=this.gridPoints[I+1],g[m++]=this.gridPoints[I+2]}}this.linesMesh.geometry.setDrawRange(0,m/3),this.linesMesh.geometry.attributes.position.needsUpdate=!0;const y=.6+u*.8;this.scene.rotation.y+=.002+u*.005;const v=(this.handY-.5)*1.5,w=(this.handX-.5)*1.5;this.scene.rotation.x+=(v-this.scene.rotation.x)*.1,this.scene.rotation.z+=(w-this.scene.rotation.z)*.1,this.pointsMesh.scale.setScalar(y),this.linesMesh.scale.setScalar(y);const _=this.pointsMesh.material;_.size=.15+c*.1}render(e,t,i){this.time+=.02*xn();const s=this.renderer.getPixelRatio(),o=Math.floor(this.canvas.width*s),c=Math.floor(this.canvas.height*s);(this.threeCanvas.width!==o||this.threeCanvas.height!==c)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=o,this.threeCanvas.height=c,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix()),this.updateLogic(e,i);const u=new Ke(t[0]||"#ffffff"),h=new Ke(t[1]||"#888888");this.pointsMesh.material.color.lerp(u,.1),this.linesMesh.material.color.lerp(h,.1),this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){Zc(this.scene,this.renderer)}}class ET{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"threeCanvas");U(this,"scene");U(this,"camera");U(this,"renderer");U(this,"mesh");U(this,"points");U(this,"originalPositions");U(this,"currentPositions");U(this,"velocities");U(this,"time",0);U(this,"handX",.5);U(this,"handY",.5);U(this,"isHandPresent",!1);U(this,"pinchStrength",0);U(this,"ROWS",30);U(this,"COLS",30);U(this,"SIZE",12);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.initThreeJS(),console.log("🕸️ ElasticNetRenderer initialized"),console.warn=i}initThreeJS(){this.scene=new us,this.scene.fog=new Zo(0,.08),this.camera=new Pn(75,this.canvas.width/this.canvas.height,.1,1e3),this.camera.position.z=8,this.renderer=new hs({canvas:this.threeCanvas,antialias:!0,alpha:!0}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=new Nr(this.SIZE,this.SIZE,this.COLS,this.ROWS),t=e.attributes.position,i=t.count;this.originalPositions=new Float32Array(i*3),this.currentPositions=new Float32Array(i*3),this.velocities=new Float32Array(i*3);for(let c=0;c<i*3;c++)this.originalPositions[c]=t.array[c],this.currentPositions[c]=t.array[c],this.velocities[c]=0;const s=new Yc({color:65535,wireframe:!0,transparent:!0,opacity:.3,side:Vi});this.mesh=new un(e,s),this.scene.add(this.mesh);const o=new os({color:16777215,size:.15,transparent:!0,opacity:.8});this.points=new Pr(e,o),this.scene.add(this.points)}updatePhysics(e,t){const i=this.mesh.geometry.attributes.position,s=i.count,o=t?t.bass:0,c=t?t.high:0,u=t?t.mid:0;let h=0,f=0,p=0;const g=e.left||e.right;g?(this.isHandPresent=!0,h=(g.position.x-.5)*12,f=-(g.position.y-.5)*10,g.gesture==="pinch"?(this.pinchStrength+=(1-this.pinchStrength)*.1,p=-25):(g.fingerCount||5)>=5?(this.pinchStrength+=(0-this.pinchStrength)*.1,p=15):(this.pinchStrength+=(0-this.pinchStrength)*.1,p=5)):(this.isHandPresent=!1,this.pinchStrength+=(0-this.pinchStrength)*.1);const m=c*.05;for(let y=0;y<s;y++){const v=y*3,w=y*3+1,_=y*3+2,S=this.originalPositions[v],b=this.originalPositions[w],C=this.originalPositions[_];let E=this.currentPositions[v],L=this.currentPositions[w],A=this.currentPositions[_];const I=.05+this.pinchStrength*.2,T=(S-E)*I,F=(b-L)*I,z=(C-A)*I;if(this.velocities[v]+=T,this.velocities[w]+=F,this.velocities[_]+=z,this.isHandPresent){const V=E-h,X=L-f,j=A,ie=V*V+X*X+j*j,Q=Math.sqrt(ie),O=4+o*2;if(Q<O){const ee=1-Q/O,me=V/Q,we=X/Q,ve=j/Q,q=p*ee*.2;this.velocities[v]+=me*q,this.velocities[w]+=we*q,this.velocities[_]+=ve*q}}const D=this.time*(1+u),H=Math.sin(w*.1+D)*.02,te=Math.cos(v*.1+D)*.02,se=Math.sin(v*.1+w*.1+D)*.02;this.velocities[v]+=H,this.velocities[w]+=te,this.velocities[_]+=se,c>.1&&(this.velocities[v]+=(Math.random()-.5)*m,this.velocities[w]+=(Math.random()-.5)*m,this.velocities[_]+=(Math.random()-.5)*m);const W=.9-this.pinchStrength*.05;this.velocities[v]*=W,this.velocities[w]*=W,this.velocities[_]*=W,this.currentPositions[v]+=this.velocities[v],this.currentPositions[w]+=this.velocities[w],this.currentPositions[_]+=this.velocities[_],i.setXYZ(y,this.currentPositions[v],this.currentPositions[w],this.currentPositions[_])}i.needsUpdate=!0}render(e,t,i){this.time+=.01*xn();const s=this.renderer.getPixelRatio(),o=Math.floor(this.canvas.width*s),c=Math.floor(this.canvas.height*s);(this.threeCanvas.width!==o||this.threeCanvas.height!==c)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=o,this.threeCanvas.height=c,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix()),this.updatePhysics(e,i);const u=new Ke(t[0]||"#00ffff"),h=new Ke(t[1]||"#ff00ff"),f=this.mesh.material;f.color.lerp(u,.1),f.opacity=.2+((i==null?void 0:i.bass)||0)*.3;const p=this.points.material;p.color.lerp(h,.1),p.size=.1+((i==null?void 0:i.high)||0)*.2,this.camera.position.x=Math.sin(this.time*.2)*.5,this.camera.position.y=Math.cos(this.time*.2)*.5,this.camera.lookAt(0,0,0),this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){Zc(this.scene,this.renderer)}}const gd={chaos:{idle:.06,range:.45,openness:.6,velocity:.4,clap:.5,audio:.3,ease:.03},strips:{base:10,chaos:20,blocks:5,blocksChaos:15},speed:{base:.05,variation:.1,chaos:.35}};class TT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"threeCanvas");U(this,"scene");U(this,"camera");U(this,"renderer");U(this,"composer");U(this,"material");U(this,"plane");U(this,"chaosLevel",0);U(this,"cfg",gd);U(this,"uniforms",{uTime:{value:0},uColor1:{value:new Z(.5,0,1)},uColor2:{value:new Z(0,0,0)},uColor3:{value:new Z(.8,.9,1)},uChaos:{value:0},uStrips:{value:10},uStripsChaos:{value:20},uBlocks:{value:5},uBlocksChaos:{value:15},uSpeedBase:{value:.05},uSpeedVar:{value:.1},uSpeedChaos:{value:.35},uAudioLow:{value:0},uAudioMid:{value:0},uAudioHigh:{value:0}});U(this,"geometry",new Nr(20,12));this.canvas=e,this.ctx=t,this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.scene=new us,this.camera=new Pn(75,e.width/e.height,.1,100),this.camera.position.z=2,this.renderer=new hs({canvas:this.threeCanvas,alpha:!0,antialias:!0}),this.renderer.setSize(e.width,e.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.material=new ln({uniforms:this.uniforms,vertexShader:`
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
      `,side:Vi});const i=new Nr(20,12);this.plane=new un(i,this.material),this.scene.add(this.plane);const s=new rv(this.scene,this.camera),o=new Vs(new ht(e.width,e.height),1.5,.4,.85);this.composer=new iv(this.renderer),this.composer.addPass(s),this.composer.addPass(o),console.log("📼 DigitalBlockRenderer initialized")}setParams(e){this.cfg=Ri(gd,e)}render(e,t,i){(this.threeCanvas.width!==this.canvas.width||this.threeCanvas.height!==this.canvas.height)&&(this.threeCanvas.width=this.canvas.width,this.threeCanvas.height=this.canvas.height,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.canvas.width,this.canvas.height,!1),this.composer.setSize(this.canvas.width,this.canvas.height));const s=performance.now()*.001;this.uniforms.uTime.value=s;const o=i?i.bass:0,c=i?i.mid:0,u=i?i.high:0;this.uniforms.uAudioLow.value=ss.lerp(this.uniforms.uAudioLow.value,o,.2),this.uniforms.uAudioMid.value=c,this.uniforms.uAudioHigh.value=u;const h=this.cfg.chaos,f=e.right??e.left;let p=h.idle;if(f){const y=f.fingerCount??(f.gesture==="open"?5:0),v=Math.min(1,Math.max(0,y/5)),w=Math.min(1,Math.max(0,f.velocity??0));p=h.idle+(v*h.openness+w*h.velocity)*h.range}else o>.6&&(p=h.idle+o*h.audio);e.clapping&&(p+=h.clap*(e.clapIntensity??1)),p=Math.min(h.range,p),this.chaosLevel=ss.lerp(this.chaosLevel,p,h.ease),this.uniforms.uChaos.value=this.chaosLevel;const g=this.cfg.strips,m=this.cfg.speed;if(this.uniforms.uStrips.value=g.base,this.uniforms.uStripsChaos.value=g.chaos,this.uniforms.uBlocks.value=g.blocks,this.uniforms.uBlocksChaos.value=g.blocksChaos,this.uniforms.uSpeedBase.value=m.base,this.uniforms.uSpeedVar.value=m.variation,this.uniforms.uSpeedChaos.value=m.chaos,t&&t.length>=3){const y=new Ke(t[0]),v=new Ke(t[3]||"#000000"),w=new Ke(t[1]);this.uniforms.uColor1.value.lerp(new Z(y.r,y.g,y.b),.1),this.uniforms.uColor2.value.lerp(new Z(v.r,v.g,v.b),.1),this.uniforms.uColor3.value.lerp(new Z(w.r,w.g,w.b),.1)}this.composer.render(),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){var e;this.composer.dispose(),(e=this.geometry)==null||e.dispose(),this.material.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),console.log("📼 DigitalBlockRenderer destroyed")}}const xd={stamp:{radius:.075,strength:.55,fingerScale:.45,audioSwell:.5},field:{decay:.965,spread:1.6},refraction:{amount:.09,dispersion:.35},highlight:{amount:.9,sharpness:3.5,tint:.35},fallback:{fieldBrightness:.85}},CT=`#version 300 es
out vec2 vUv;
void main() {
  // 0,0 / 2,0 / 0,2 — one oversized triangle, clipped to the viewport.
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  vUv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`,AT=`#version 300 es
precision highp float;
in vec2 vUv;
out vec4 fragColor;
uniform sampler2D uTex;
uniform vec2 uResolution;
uniform float uTime;
`;function $g(a,e,t){const i=a.createShader(e);if(!i)throw new Error("Could not create shader");if(a.shaderSource(i,t),a.compileShader(i),!a.getShaderParameter(i,a.COMPILE_STATUS)){const s=a.getShaderInfoLog(i);a.deleteShader(i);const o=t.split(`
`).map((c,u)=>`${String(u+1).padStart(3)} | ${c}`).join(`
`);throw new Error(`Shader failed to compile: ${s}
${o}`)}return i}function mi(a,e){const t=$g(a,a.VERTEX_SHADER,CT),i=$g(a,a.FRAGMENT_SHADER,AT+e),s=a.createProgram();if(!s)throw new Error("Could not create program");if(a.attachShader(s,t),a.attachShader(s,i),a.linkProgram(s),a.deleteShader(t),a.deleteShader(i),!a.getProgramParameter(s,a.LINK_STATUS)){const o=a.getProgramInfoLog(s);throw a.deleteProgram(s),new Error(`Program failed to link: ${o}`)}return s}function Fa(a,e,t){const i=a.createTexture();a.bindTexture(a.TEXTURE_2D,i),a.texImage2D(a.TEXTURE_2D,0,a.RGBA8,e,t,0,a.RGBA,a.UNSIGNED_BYTE,null),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);const s=a.createFramebuffer();return a.bindFramebuffer(a.FRAMEBUFFER,s),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,i,0),a.bindFramebuffer(a.FRAMEBUFFER,null),{framebuffer:s,texture:i,width:e,height:t}}function Ua(a,e,t,i){e.width===t&&e.height===i||(a.bindTexture(a.TEXTURE_2D,e.texture),a.texImage2D(a.TEXTURE_2D,0,a.RGBA8,t,i,0,a.RGBA,a.UNSIGNED_BYTE,null),e.width=t,e.height=i)}function Da(a,e){a.deleteFramebuffer(e.framebuffer),a.deleteTexture(e.texture)}function Yn(a,e,t,i){a.bindFramebuffer(a.FRAMEBUFFER,e?e.framebuffer:null),a.viewport(0,0,e?e.width:t,e?e.height:i),a.drawArrays(a.TRIANGLES,0,3)}function Rn(a,e,t,i,s){a.activeTexture(a.TEXTURE0+s),a.bindTexture(a.TEXTURE_2D,i),a.uniform1i(a.getUniformLocation(e,t),s)}const Xc=10,RT=`
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
}`,PT=`
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
}`;class LT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"glCanvas");U(this,"gl");U(this,"cfg",xd);U(this,"fieldProgram");U(this,"refractProgram");U(this,"fields");U(this,"ping",0);U(this,"videoTexture");U(this,"video",null);this.canvas=e,this.ctx=t,this.glCanvas=document.createElement("canvas"),this.glCanvas.width=e.width,this.glCanvas.height=e.height;const i=this.glCanvas.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1});if(!i)throw new Error("WebGL2 is not available");this.gl=i,this.fieldProgram=mi(i,RT),this.refractProgram=mi(i,PT),this.fields=[Fa(i,e.width,e.height),Fa(i,e.width,e.height)],this.videoTexture=i.createTexture(),i.bindTexture(i.TEXTURE_2D,this.videoTexture),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}setParams(e){this.cfg=Ri(xd,e)}setVideoElement(e){this.video=e}collectStamps(e,t){const i=1+((t==null?void 0:t.bass)??0)*this.cfg.stamp.audioSwell,s=this.cfg.stamp.radius*i,o=[];for(const c of[e.left,e.right]){if(!c||o.length/3>=Xc)continue;o.push(c.position.x,1-c.position.y,s);const u=c.landmarks;if(u&&this.cfg.stamp.fingerScale>0)for(const h of[8,12,16,20]){if(o.length/3>=Xc)break;const f=u[h];f&&o.push(f.x,1-f.y,s*this.cfg.stamp.fingerScale)}}return o}render(e,t,i){const s=this.gl,o=this.canvas.width,c=this.canvas.height;if(o===0||c===0)return;(this.glCanvas.width!==o||this.glCanvas.height!==c)&&(this.glCanvas.width=o,this.glCanvas.height=c,Ua(s,this.fields[0],o,c),Ua(s,this.fields[1],o,c));const u=this.fields[this.ping];this.ping^=1;const h=this.fields[this.ping],f=this.collectStamps(e,i),p=i!=null&&i.beat?1+(i.beatIntensity??0):1;s.useProgram(this.fieldProgram),s.uniform2f(s.getUniformLocation(this.fieldProgram,"uResolution"),o,c),Rn(s,this.fieldProgram,"uField",u.texture,0),s.uniform1i(s.getUniformLocation(this.fieldProgram,"uStampCount"),f.length/3),f.length>0&&s.uniform3fv(s.getUniformLocation(this.fieldProgram,"uStamps"),f),s.uniform1f(s.getUniformLocation(this.fieldProgram,"uDecay"),this.cfg.field.decay),s.uniform1f(s.getUniformLocation(this.fieldProgram,"uSpread"),this.cfg.field.spread),s.uniform1f(s.getUniformLocation(this.fieldProgram,"uStrength"),this.cfg.stamp.strength*p),Yn(s,h,o,c);const g=this.video&&this.video.readyState>=2&&this.video.videoWidth>0;g&&(s.bindTexture(s.TEXTURE_2D,this.videoTexture),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!0),s.texImage2D(s.TEXTURE_2D,0,s.RGBA,s.RGBA,s.UNSIGNED_BYTE,this.video));const m=IT(t[0]??"#ffffff");s.useProgram(this.refractProgram),s.uniform2f(s.getUniformLocation(this.refractProgram,"uResolution"),o,c),Rn(s,this.refractProgram,"uField",h.texture,0),Rn(s,this.refractProgram,"uVideo",this.videoTexture,1),s.uniform1f(s.getUniformLocation(this.refractProgram,"uHasVideo"),g?1:0),s.uniform3f(s.getUniformLocation(this.refractProgram,"uColor"),m[0],m[1],m[2]),s.uniform1f(s.getUniformLocation(this.refractProgram,"uRefract"),this.cfg.refraction.amount),s.uniform1f(s.getUniformLocation(this.refractProgram,"uDispersion"),this.cfg.refraction.dispersion),s.uniform1f(s.getUniformLocation(this.refractProgram,"uGloss"),this.cfg.highlight.amount),s.uniform1f(s.getUniformLocation(this.refractProgram,"uSharpness"),this.cfg.highlight.sharpness),s.uniform1f(s.getUniformLocation(this.refractProgram,"uTint"),this.cfg.highlight.tint),s.uniform1f(s.getUniformLocation(this.refractProgram,"uFieldBrightness"),this.cfg.fallback.fieldBrightness),Yn(s,null,o,c),this.ctx.clearRect(0,0,o,c),this.ctx.drawImage(this.glCanvas,0,0,o,c)}destroy(){var t;const e=this.gl;e.deleteProgram(this.fieldProgram),e.deleteProgram(this.refractProgram),e.deleteTexture(this.videoTexture),Da(e,this.fields[0]),Da(e,this.fields[1]),(t=e.getExtension("WEBGL_lose_context"))==null||t.loseContext()}}function IT(a){const e=a.replace("#","");return e.length<6?[1,1,1]:[parseInt(e.slice(0,2),16)/255,parseInt(e.slice(2,4),16)/255,parseInt(e.slice(4,6),16)/255]}const vd={mode:0,type:{fit:.82,weight:700,tracking:.08,outline:0,strokeWidth:1.5},grid:{columns:14,rows:26,spread:1,breathe:0,breatheSpeed:.4},mask:{reach:.18,threshold:.5,softness:.25,invert:0},radial:{strength:.6,power:2,ring:.55,ringDensity:3.2,twist:.5},wave:{amplitude:.12,frequency:1.5,speed:1,scaleWave:0},depth:{speed:.35,spread:1.4,curve:1.6,size:.1,horizon:.12,steps:18},scatter:{amount:.6,spiral:0,stagger:.35,drift:.5,size:.12},color:{rainbow:0,step:37,cycleSpeed:.3},motion:{handInfluence:1},audio:{bassScale:.3,beatKick:.5},trail:{fadeAlpha:1}},Kg="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",NT=1400;class FT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"cfg",vd);U(this,"text","N4TH");U(this,"aim",{x:.5,y:.5});U(this,"openness",.25);U(this,"ringEnergy",0);U(this,"ringPhase",0);this.canvas=e,this.ctx=t}setParams(e){this.cfg=Ri(vd,e)}setText(e){const t=e.trim()||"N4TH";t!==this.text&&(this.text=t)}static noise(e){const t=Math.sin(e*12.9898)*43758.5453;return t-Math.floor(t)}colorFor(e,t,i){const{color:s}=this.cfg;return s.rainbow>=.5?`hsl(${(e*s.step+t*s.cycleSpeed*60)%360}, 100%, 62%)`:i[e%Math.max(1,i.length)]??"#ffffff"}stamp(e,t,i,s,o=1,c=this.text,u=this.cfg.type.tracking){const{ctx:h,cfg:f}=this;h.globalAlpha=Math.min(1,Math.max(0,o)),h.font=`${Math.round(f.type.weight)} ${Math.max(1,i)}px ${Kg}`;try{h.letterSpacing=`${u}em`}catch{}f.type.outline>=.5?(h.strokeStyle=s,h.lineWidth=Math.max(.5,f.type.strokeWidth),h.strokeText(c,e,t)):(h.fillStyle=s,h.fillText(c,e,t)),h.globalAlpha=1}fitSize(e,t){const{ctx:i,cfg:s}=this;i.font=`${Math.round(s.type.weight)} 100px ${Kg}`;try{i.letterSpacing=`${s.type.tracking}em`}catch{}const o=i.measureText(e).width;return o>0?t/o*100:10}handPoints(e){const t=[];for(const i of[e.left,e.right]){if(!i)continue;t.push(i.position);const s=i.landmarks;if(s)for(const o of[4,8,12,16,20]){const c=s[o];c&&t.push({x:c.x,y:c.y})}}return t}render(e,t,i){const{ctx:s,cfg:o}=this,c=this.canvas.width,u=this.canvas.height;if(c===0||u===0)return;s.globalCompositeOperation="source-over",s.fillStyle=o.trail.fadeAlpha>=1?"#000":`#000000${ri(o.trail.fadeAlpha*255)}`,s.fillRect(0,0,c,u);const h=Ko(),f=(i==null?void 0:i.bass)??0,p=this.handPoints(e);if(p.length>0){const w=p.reduce((S,b)=>S+b.x,0)/p.length,_=p.reduce((S,b)=>S+b.y,0)/p.length;this.aim.x+=(w-this.aim.x)*.16,this.aim.y+=(_-this.aim.y)*.16}const g=[e.left,e.right].filter(Boolean),m=g.length?Math.max(...g.map(w=>w.fingerCount??2)):2;this.openness+=((m-1)/4-this.openness)*.1;const y=Math.max(i!=null&&i.beat?i.beatIntensity:0,((i==null?void 0:i.onset)??0)*.8,e.clapping?e.clapIntensity??1:0);this.ringEnergy=Math.max(this.ringEnergy*.94,y),y>this.ringEnergy*.98&&(this.ringPhase=0),this.ringPhase=(this.ringPhase+.012*xn())%1;const v=1+f*o.audio.bassScale;s.textAlign="center",s.textBaseline="middle",s.lineJoin="round",this.radial(c,u,v,h,t)}spacing(e,t,i){const{cfg:s}=this,o=1+Math.sin(i*s.grid.breatheSpeed)*s.grid.breathe,c=Math.max(1,Math.round(s.grid.columns)),u=Math.max(1,Math.round(s.grid.rows)),h=s.grid.spread*o;return{cols:c,rows:Math.min(u,Math.max(1,Math.floor(NT/c))),dx:e/c*h,dy:t/u*h}}radial(e,t,i,s,o){const{cfg:c}=this,{cols:u,rows:h,dx:f,dy:p}=this.spacing(e,t,s),g=this.fitSize(this.text,f*c.type.fit)*i,m=c.motion.handInfluence,y=.5+(this.aim.x-.5)*m,v=.5+(this.aim.y-.5)*m,w=c.radial.twist*this.openness,_=c.radial.strength*(1+this.ringEnergy*.8);let S=0;for(let b=0;b<h;b++)for(let C=0;C<u;C++,S++){const E=(C+.5)/u,L=(b+.5)/h,A=E-y,I=L-v,T=Math.hypot(A,I),F=Math.min(1,T*1.42),z=Math.cos((T-this.ringPhase)*c.radial.ringDensity*Math.PI*2),D=this.ringEnergy*c.radial.ring*Math.max(0,z),H=1+Math.pow(F,c.radial.power)*_+D,te=Math.atan2(I,A)+w*F,se=T*H,W=(y+Math.cos(te)*se)*e,V=(v+Math.sin(te)*se)*t;W<-f||W>e+f||V<-p||V>t+p||this.stamp(W,V,g,this.colorFor(S,s,o))}}}const _d={frame:{zoom:1,spreadZoom:.5,handDrift:.12,mirror:0},slice:{count:12,offset:.06,speed:.8,beatKick:1.5},look:{tint:0,gain:1},trail:{fadeAlpha:1}};class UT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"cfg",_d);U(this,"video",null);U(this,"url",null);U(this,"drift",{x:0,y:0});this.canvas=e,this.ctx=t}setParams(e){this.cfg=Ri(_d,e)}setClipUrl(e){var i;if(e===this.url||(this.url=e,(i=this.video)==null||i.pause(),this.video=null,!e))return;const t=document.createElement("video");t.src=e,t.loop=!0,t.muted=!0,t.playsInline=!0,t.play().catch(()=>{}),this.video=t}followTempo(e){const t=Math.min(4,Math.max(.25,xn()));if(Math.abs(e.playbackRate-t)>.02)try{e.playbackRate=t}catch{}}destroy(){var e;(e=this.video)==null||e.pause(),this.video=null}render(e,t,i){const{ctx:s,cfg:o}=this,c=this.canvas.width,u=this.canvas.height;if(c===0||u===0)return;o.trail.fadeAlpha>=1?(s.globalCompositeOperation="source-over",s.fillStyle="#000",s.fillRect(0,0,c,u)):(s.fillStyle=`#000000${ri(o.trail.fadeAlpha*255)}`,s.fillRect(0,0,c,u));const h=this.video,f=h&&h.readyState>=2&&h.videoWidth>0;if(h&&this.followTempo(h),!f){s.fillStyle=`${t[0]??"#ffffff"}66`,s.font="500 14px ui-monospace, monospace",s.textAlign="center",s.fillText(this.url?"LOADING CLIP…":"NO CLIP — UPLOAD ONE IN THE LIBRARY",c/2,u/2);return}const p=[e.left,e.right].filter(Boolean);let g=0,m=0;if(p.length>0){const T=p.reduce((z,D)=>z+D.position.x,0)/p.length,F=p.reduce((z,D)=>z+D.position.y,0)/p.length;g=(T-.5)*2,m=(F-.5)*2}this.drift.x+=(g-this.drift.x)*.1,this.drift.y+=(m-this.drift.y)*.1;const y=e.distanceBetweenHands??.4,v=Math.max(.05,o.frame.zoom*(1+(y-.4)*o.frame.spreadZoom)),w=Math.max(c/h.videoWidth,u/h.videoHeight),_=h.videoWidth*w*v,S=h.videoHeight*w*v,b=(c-_)/2+this.drift.x*c*o.frame.handDrift,C=(u-S)/2+this.drift.y*u*o.frame.handDrift,E=Ko(),L=i!=null&&i.beat?o.slice.beatKick:1,A=Math.max(1,Math.round(o.slice.count)),I=u/A;s.save(),o.frame.mirror>=.5&&(s.translate(c,0),s.scale(-1,1));for(let T=0;T<A;T++){const F=T/A*Math.PI*2,z=A<2?0:Math.sin(E*o.slice.speed+F)*c*o.slice.offset*L*(1+Math.abs(this.drift.x)),D=T*I;s.save(),s.beginPath(),s.rect(0,D,c,I+1),s.clip(),s.drawImage(h,b+z,C,_,S),s.restore()}s.restore(),o.look.tint>0&&(s.globalCompositeOperation="overlay",s.fillStyle=`${t[0]??"#ffffff"}${ri(o.look.tint*255)}`,s.fillRect(0,0,c,u),s.globalCompositeOperation="source-over"),o.look.gain>1&&(s.globalCompositeOperation="lighter",s.globalAlpha=Math.min(1,o.look.gain-1),s.drawImage(this.canvas,0,0),s.globalAlpha=1,s.globalCompositeOperation="source-over")}}const yd={mode:0,grid:{columns:48,cellAspect:1.15,fill:.95,spreadDensity:.35},tone:{brightness:0,contrast:1.3,floor:.08,invert:0},letters:{ramp:0,weight:600,outline:0},shape:{rotate:0,anchor:0,minimum:.05},warp:{handPush:.04,ripple:0,rippleSpeed:.6},colour:{fromSource:0,spread:1},audio:{bassScale:.35,beatKick:.25},trail:{fadeAlpha:1}},Zg="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",gf=" .:-=+*#%@",xf=6e3;class DT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"cfg",yd);U(this,"url",null);U(this,"kind","video");U(this,"video",null);U(this,"image",null);U(this,"failed",!1);U(this,"sampler");U(this,"samplerCtx");U(this,"text","N4TH");U(this,"aim",{x:.5,y:.5});this.canvas=e,this.ctx=t,this.sampler=document.createElement("canvas"),this.samplerCtx=this.sampler.getContext("2d",{willReadFrequently:!0})}setParams(e){this.cfg=Ri(yd,e)}setText(e){this.text=e.trim()||"N4TH"}setClipUrl(e,t="video"){var s;if(e===this.url&&t===this.kind||(this.url=e,this.kind=t,this.failed=!1,(s=this.video)==null||s.pause(),this.video=null,this.image=null,!e))return;if(t==="image"){const o=new Image;o.onerror=()=>{this.failed=!0},o.src=e,this.image=o;return}const i=document.createElement("video");i.src=e,i.loop=!0,i.muted=!0,i.playsInline=!0,i.onerror=()=>{this.failed=!0},i.play().catch(()=>{}),this.video=i}followTempo(e){const t=Math.min(4,Math.max(.25,xn()));if(Math.abs(e.playbackRate-t)>.02)try{e.playbackRate=t}catch{}}destroy(){var e;(e=this.video)==null||e.pause(),this.video=null,this.image=null}source(){const{video:e,image:t}=this;return e&&this.followTempo(e),e&&e.readyState>=2&&e.videoWidth>0?{el:e,w:e.videoWidth,h:e.videoHeight}:t&&t.complete&&t.naturalWidth>0?{el:t,w:t.naturalWidth,h:t.naturalHeight}:null}notice(e,t,i){const{ctx:s}=this;s.fillStyle=`${i[0]??"#ffffff"}66`,s.font="500 14px ui-monospace, monospace",s.textAlign="center",s.textBaseline="middle",s.fillText(this.failed?"THAT FILE WOULD NOT OPEN":this.url?"LOADING…":"NO FILE — UPLOAD ONE IN THE LIBRARY",e/2,t/2)}colorFor(e,t,i,s,o){const{colour:c}=this.cfg,u=Math.max(1,Math.round(c.spread)),h=o[Math.floor(e/u)%Math.max(1,o.length)]??"#ffffff";if(c.fromSource<=0)return h;if(c.fromSource>=1)return`rgb(${t}, ${i}, ${s})`;const f=h.replace("#",""),p=f.length===3?f.split("").map(_=>_+_).join(""):f,g=parseInt(p.slice(0,2),16)||0,m=parseInt(p.slice(2,4),16)||0,y=parseInt(p.slice(4,6),16)||0,v=c.fromSource,w=(_,S)=>Math.round(_+(S-_)*v);return`rgb(${w(g,t)}, ${w(m,i)}, ${w(y,s)})`}render(e,t,i){const{ctx:s,cfg:o}=this,c=this.canvas.width,u=this.canvas.height;if(c===0||u===0)return;s.globalCompositeOperation="source-over",s.fillStyle=o.trail.fadeAlpha>=1?"#000":`#000000${ri(o.trail.fadeAlpha*255)}`,s.fillRect(0,0,c,u);const h=this.source();if(!h){this.notice(c,u,t);return}const f=[e.left,e.right].filter(Boolean);if(f.length>0){const se=f.reduce((V,X)=>V+X.position.x,0)/f.length,W=f.reduce((V,X)=>V+X.position.y,0)/f.length;this.aim.x+=(se-this.aim.x)*.08,this.aim.y+=(W-this.aim.y)*.08}const g=1-((e.distanceBetweenHands??.4)-.4)*o.grid.spreadDensity;let m=Math.max(2,Math.round(o.grid.columns*Math.max(.25,g)));const v=c/m*Math.max(.2,o.grid.cellAspect);let w=Math.max(2,Math.round(u/v));m*w>xf&&(w=Math.max(2,Math.floor(xf/m)),m=Math.max(2,Math.min(m,Math.floor(xf/w))));const _=this.samplerCtx;if(!_)return;(this.sampler.width!==m||this.sampler.height!==w)&&(this.sampler.width=m,this.sampler.height=w);const S=Math.max(m/h.w,w/h.h),b=h.w*S,C=h.h*S;_.drawImage(h.el,(m-b)/2,(w-C)/2,b,C);let E;try{E=_.getImageData(0,0,m,w).data}catch{this.notice(c,u,t);return}const L=Ko(),A=(i==null?void 0:i.bass)??0,I=i!=null&&i.beat?o.audio.beatKick:0,T=1+A*o.audio.bassScale+I,F=Math.round(o.mode),z=this.text,D=c/m,H=u/w,te=Math.min(D,H)*o.grid.fill*T;if(s.textAlign="center",s.textBaseline="middle",s.lineJoin="round",F===0){s.font=`${Math.round(o.letters.weight)} 100px ${Zg}`;const se=s.measureText("M").width||60,W=Math.max(1,D*o.grid.fill*T/(se/100));s.font=`${Math.round(o.letters.weight)} ${W}px ${Zg}`,s.lineWidth=Math.max(.5,W*.06)}for(let se=0;se<w;se++)for(let W=0;W<m;W++){const V=(se*m+W)*4,X=E[V],j=E[V+1],ie=E[V+2];let Q=(.2126*X+.7152*j+.0722*ie)/255;if(Q=(Q-.5)*o.tone.contrast+.5+o.tone.brightness,o.tone.invert>=.5&&(Q=1-Q),Q=Math.min(1,Math.max(0,Q)),Q<=o.tone.floor)continue;const O=(Q-o.tone.floor)/(1-o.tone.floor);let ee=(W+.5)*D,me=(se+.5)*H;if(o.warp.handPush!==0&&f.length>0){const q=ee/c-this.aim.x,pe=me/u-this.aim.y,oe=Math.exp(-(q*q+pe*pe)*8);ee+=q*oe*c*o.warp.handPush,me+=pe*oe*u*o.warp.handPush}o.warp.ripple!==0&&(me+=Math.sin(W*.35+L*o.warp.rippleSpeed)*H*o.warp.ripple);const we=se*m+W,ve=this.colorFor(we,X,j,ie,t);switch(F){case 1:{const q=te/2*Math.max(o.shape.minimum,O);s.fillStyle=ve,s.beginPath(),s.arc(ee,me,q,0,Math.PI*2),s.fill();break}case 2:{const q=te*Math.max(o.shape.minimum,O);s.fillStyle=ve,o.shape.rotate!==0?(s.save(),s.translate(ee,me),s.rotate(o.shape.rotate*Math.PI*.25),s.fillRect(-q/2,-q/2,q,q),s.restore()):s.fillRect(ee-q/2,me-q/2,q,q);break}case 3:{const q=Math.max(1,D*o.grid.fill*.6),pe=H*o.grid.fill*T*Math.max(o.shape.minimum,O),oe=o.shape.anchor>=.5?(se+1)*H-pe+(me-(se+.5)*H):me-pe/2;s.fillStyle=ve,s.fillRect(ee-q/2,oe,q,pe);break}default:{const q=o.letters.ramp>=.5?z[we%z.length]:gf[Math.min(gf.length-1,Math.round(O*(gf.length-1)))];if(!q||q===" ")break;o.letters.outline>=.5?(s.strokeStyle=ve,s.strokeText(q,ee,me)):(s.globalAlpha=o.letters.ramp>=.5?O:1,s.fillStyle=ve,s.fillText(q,ee,me),s.globalAlpha=1);break}}}}}const Sd={form:{lobes:7,spread:1.3,size:.72,blend:.82,ripple:.2,rippleScale:1.5},motion:{drift:.24,churn:.35,spin:.08},material:{dispersion:.85,rimTightness:2,split:.1,silver:.92,facing:.05,polish:52},light:{keyX:-.55,keyY:.72,key:2.1,fill:.3,ambient:.03},hands:{push:.55,spread:.45,kick:.55},look:{grain:.055,gain:1}},kT=`#version 300 es
in vec2 p;
void main() { gl_Position = vec4(p, 0.0, 1.0); }`,OT=`#version 300 es
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
}`;class zT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"cfg",Sd);U(this,"gl",null);U(this,"surface");U(this,"program",null);U(this,"uniforms",{});U(this,"aim",{x:0,y:0});U(this,"kick",0);U(this,"swell",0);U(this,"openness",.25);U(this,"failed",!1);this.canvas=e,this.ctx=t,this.surface=document.createElement("canvas"),this.init()}setParams(e){this.cfg=Ri(Sd,e)}init(){const e=this.surface.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"high-performance"});if(!e){this.failed=!0;return}this.gl=e;const t=(h,f)=>{const p=e.createShader(h);return e.shaderSource(p,f),e.compileShader(p),e.getShaderParameter(p,e.COMPILE_STATUS)?p:(console.error("Chrome shader:",e.getShaderInfoLog(p)),null)},i=t(e.VERTEX_SHADER,kT),s=t(e.FRAGMENT_SHADER,OT);if(!i||!s){this.failed=!0;return}const o=e.createProgram();if(e.attachShader(o,i),e.attachShader(o,s),e.linkProgram(o),!e.getProgramParameter(o,e.LINK_STATUS)){console.error("Chrome link:",e.getProgramInfoLog(o)),this.failed=!0;return}this.program=o,e.useProgram(o);const c=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,c),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW);const u=e.getAttribLocation(o,"p");e.enableVertexAttribArray(u),e.vertexAttribPointer(u,2,e.FLOAT,!1,0,0);for(const h of["uSize","uTime","uLobes","uSpread","uSize2","uBlend","uRipple","uRippleScale","uDrift","uChurn","uSpin","uDispersion","uRimTight","uSplit","uSilver","uFacing","uPolish","uKey","uKeyGain","uFill","uAmbient","uPush","uKick","uGrain","uGain","uHue"])this.uniforms[h]=e.getUniformLocation(o,h)}destroy(){var t;const e=this.gl;e&&(this.program&&e.deleteProgram(this.program),(t=e.getExtension("WEBGL_lose_context"))==null||t.loseContext(),this.gl=null,this.program=null)}hueFrom(e){const t=(e[0]??"#8888ff").replace("#",""),i=t.length===3?t.split("").map(u=>u+u).join(""):t,s=(parseInt(i.slice(0,2),16)||0)/255,o=(parseInt(i.slice(2,4),16)||0)/255,c=(parseInt(i.slice(4,6),16)||0)/255;return Math.atan2(Math.sqrt(3)*(o-c),2*s-o-c)-2.2}render(e,t,i){const{ctx:s,cfg:o}=this,c=this.canvas.width,u=this.canvas.height;if(c===0||u===0)return;const h=this.gl;if(this.failed||!h||!this.program){s.fillStyle="#000",s.fillRect(0,0,c,u),s.fillStyle="rgba(255,255,255,0.4)",s.font="500 14px ui-monospace, monospace",s.textAlign="center",s.fillText("CHROME NEEDS WEBGL2",c/2,u/2);return}const f=.6,p=Math.max(2,Math.round(c*f)),g=Math.max(2,Math.round(u*f));(this.surface.width!==p||this.surface.height!==g)&&(this.surface.width=p,this.surface.height=g),h.viewport(0,0,p,g),h.useProgram(this.program);const m=[e.left,e.right].filter(Boolean),y=m.length?Math.max(...m.map(L=>L.fingerCount??2)):2;this.openness+=((y-1)/4-this.openness)*.08;let v=0,w=0;if(m.length>0){const L=m.reduce((I,T)=>I+T.position.x,0)/m.length,A=m.reduce((I,T)=>I+T.position.y,0)/m.length;v=(L-.5)*2,w=(.5-A)*2}this.aim.x+=(v-this.aim.x)*.14,this.aim.y+=(w-this.aim.y)*.14;const _=Math.min(1,((i==null?void 0:i.bass)??0)*.8+((i==null?void 0:i.onset)??0)*.35);this.swell+=(_-this.swell)*(_>this.swell?.035:.012);const S=e.clapping?e.clapIntensity??1:0;this.kick=Math.max(this.kick*.94,S);const b=e.distanceBetweenHands??.4,C=this.uniforms,E=(L,A)=>h.uniform1f(C[L],A);h.uniform2f(C.uSize,p,g),E("uTime",Ko()),E("uLobes",Math.max(1,Math.min(7,Math.round(o.form.lobes)))),E("uSpread",o.form.spread*(1+(b-.4)*o.hands.spread+(this.openness-.25)*.55)+this.kick*o.hands.kick*.35),E("uSize2",o.form.size*(1+this.swell*.3)),E("uBlend",Math.max(.05,o.form.blend)),E("uRipple",o.form.ripple*(1.35-this.openness*.7+this.kick*o.hands.kick*1.6)),E("uRippleScale",o.form.rippleScale),E("uDrift",o.motion.drift*(1+this.swell*.5)),E("uChurn",o.motion.churn),E("uSpin",o.motion.spin),E("uDispersion",o.material.dispersion*(1+this.swell*.4+this.kick*.35)),E("uRimTight",Math.max(.5,o.material.rimTightness)),E("uSplit",o.material.split),E("uSilver",o.material.silver),E("uFacing",o.material.facing),E("uPolish",Math.max(2,o.material.polish)),h.uniform2f(C.uKey,o.light.keyX,o.light.keyY),E("uKeyGain",o.light.key),E("uFill",o.light.fill),E("uAmbient",o.light.ambient),h.uniform2f(C.uPush,this.aim.x*o.hands.push,this.aim.y*o.hands.push),E("uKick",this.kick),E("uGrain",o.look.grain),E("uGain",o.look.gain),E("uHue",this.hueFrom(t)),h.drawArrays(h.TRIANGLES,0,3),s.globalCompositeOperation="source-over",s.fillStyle="#000",s.fillRect(0,0,c,u),s.imageSmoothingEnabled=!0,s.drawImage(this.surface,0,0,c,u)}}function sv(a,e,t,i){var o,c;let s;switch(a){case"geometric":s=new N0(e,t);break;case"particles":s=new dy(e,t);break;case"waves":s=new py(e,t);break;case"glitch":s=new my(e,t);break;case"technical":s=new gy(e,t);break;case"lottie":s=new xy(e,t);break;case"lottie-classic":s=new wT(e,t);break;case"linefield":s=new Sy(e,t);break;case"thicklines":s=new yT(e,t);break;case"flowfield":s=new ST(e,t);break;case"liquidchrome":s=new MT(e,t);break;case"chromatic":s=new vy(e,t);break;case"halftone":s=new _y(e,t);break;case"matrix":s=new yy(e,t);break;case"distortedcamera":s=new iT(e,t),i&&((o=s.setVideoElement)==null||o.call(s,i));break;case"cyberstream":s=new rT(e,t);break;case"facecloud":s=new sT(e,t);break;case"face":s=new md(e,t);break;case"morphing":s=new aT(e,t);break;case"cubewall":s=new oT(e,t);break;case"smokehand-torus":s=new Wc(e,t);break;case"smokehand-hand":s=new Wc(e,t),(c=s.setSmokeHandModel)==null||c.call(s,"hand");break;case"network-cube":s=new bT(e,t);break;case"elastic-net":s=new ET(e,t);break;case"text":s=new FT(e,t);break;case"video":s=new UT(e,t);break;case"mosaic":s=new DT(e,t);break;case"chrome":s=new zT(e,t);break;case"ripple":s=new LT(e,t);break;case"digitalblocks":s=new TT(e,t);break;default:s=new N0(e,t);break}return s}const Qg=[.35,.45,.8,1.15,1.5,1.9],BT=3.6,HT=2.2,GT=6;function VT(){return{rate:1,clap:0}}function Jg(a){if(!a)return null;if(a.gesture==="fist")return Qg[0];const e=a.fingerCount;return e===void 0?null:Qg[Math.min(5,Math.max(1,Math.round(e)))]}function WT(a,e,t){const i=[Jg(a.left),Jg(a.right)].filter(c=>c!==null),s=i.length?Math.max(...i):1,o=Math.min(1,t*GT);return e.rate+=(s-e.rate)*o,a.clapping&&(e.clap=Math.max(e.clap,BT*Math.max(.5,a.clapIntensity??1))),e.clap=Math.max(0,e.clap-e.clap*HT*t),e.rate+e.clap}const Xa={master:{enabled:1},transition:{enabled:1,duration:1},feedback:{enabled:1,mix:1,amount:0,zoom:1,rotate:0,offsetX:0,offsetY:0,hueShift:0},colour:{enabled:1,mix:1,hue:0,saturation:1},displace:{enabled:1,mix:1,amount:0,scale:3,speed:.2},rgbSplit:{enabled:1,mix:1,amount:0},kaleido:{enabled:1,mix:1,segments:0,spin:0},pixelate:{enabled:1,mix:1,pixel:0,levels:0},noiseTile:{enabled:1,mix:1,size:0,grain:.35,drift:.4},echo:{enabled:1,mix:1,count:0,depth:.18,fade:.68,speed:.25},fluted:{enabled:1,mix:1,ribs:0,bend:.5,shine:.35,vertical:1}},Qc=`
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
`,XT=`${Qc}
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
}`,jT=`${Qc}
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
}`,QT=`${Qc}
uniform float uHue;
uniform float uSaturation;
uniform float uMix;

void main() {
  vec3 src = texture(uTex, vUv).rgb;
  vec3 wet = hueRotate(src, uHue);
  float grey = dot(wet, vec3(0.299, 0.587, 0.114));
  wet = mix(vec3(grey), wet, uSaturation);
  fragColor = vec4(mix(src, clamp(wet, 0.0, 1.0), uMix), 1.0);
}`,JT=`${Qc}
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
}`;function yn(a,e){return a.enabled>=.5&&a.mix>0&&e}function nC(a,e){const t=Ri(Xa,e);switch(a){case"feedback":return yn(t.feedback,t.feedback.amount>0);case"colour":return yn(t.colour,t.colour.hue!==0||t.colour.saturation!==1);case"displace":return yn(t.displace,t.displace.amount>0);case"rgbSplit":return yn(t.rgbSplit,t.rgbSplit.amount>0);case"kaleido":return yn(t.kaleido,t.kaleido.segments>=2);case"pixelate":return yn(t.pixelate,t.pixelate.pixel>1||t.pixelate.levels>=2);case"noiseTile":return yn(t.noiseTile,t.noiseTile.size>1);case"echo":return yn(t.echo,t.echo.count>=1);case"fluted":return yn(t.fluted,t.fluted.ribs>=1);case"transition":return t.transition.enabled>=.5;default:return!1}}function av(a){const e=Ri(Xa,a);return e.master.enabled<.5?!1:yn(e.colour,e.colour.hue!==0||e.colour.saturation!==1)||yn(e.feedback,e.feedback.amount>0)||yn(e.displace,e.displace.amount>0)||yn(e.rgbSplit,e.rgbSplit.amount>0)||yn(e.kaleido,e.kaleido.segments>=2)||yn(e.pixelate,e.pixelate.pixel>1||e.pixelate.levels>=2)||yn(e.noiseTile,e.noiseTile.size>1)||yn(e.echo,e.echo.count>=1)||yn(e.fluted,e.fluted.ribs>=1)}class iC{constructor(e){U(this,"gl");U(this,"cfg",Xa);U(this,"programs",{});U(this,"sourceTexture");U(this,"previousTexture");U(this,"blendTarget");U(this,"targets");U(this,"feedback");U(this,"width",1);U(this,"height",1);U(this,"ping",0);U(this,"feedbackPrimed",!1);const t=e.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,powerPreference:"high-performance"});if(!t)throw new Error("WebGL2 is not available");this.gl=t,this.programs={colour:mi(t,QT),copy:mi(t,ZT),feedback:mi(t,XT),displace:mi(t,jT),rgbSplit:mi(t,qT),kaleido:mi(t,YT),pixelate:mi(t,$T),blend:mi(t,KT),noiseTile:mi(t,JT),echo:mi(t,eC),fluted:mi(t,tC)},t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),this.sourceTexture=t.createTexture(),this.previousTexture=t.createTexture();for(const i of[this.sourceTexture,this.previousTexture])t.bindTexture(t.TEXTURE_2D,i),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE);this.blendTarget=Fa(t,1,1),this.targets=[Fa(t,1,1),Fa(t,1,1)],this.feedback=Fa(t,1,1)}setParams(e){this.cfg=Ri(Xa,e)}live(e,t){return this.cfg.master.enabled>=.5&&yn(e,t)}get active(){const e=this.cfg;return e.master.enabled<.5?!1:this.live(e.colour,e.colour.hue!==0||e.colour.saturation!==1)||this.live(e.feedback,e.feedback.amount>0)||this.live(e.displace,e.displace.amount>0)||this.live(e.rgbSplit,e.rgbSplit.amount>0)||this.live(e.kaleido,e.kaleido.segments>=2)||this.live(e.pixelate,e.pixelate.pixel>1||e.pixelate.levels>=2)||this.live(e.noiseTile,e.noiseTile.size>1)||this.live(e.echo,e.echo.count>=1)||this.live(e.fluted,e.fluted.ribs>=1)}resize(e,t){if(this.width===e&&this.height===t)return;const i=this.gl;this.width=e,this.height=t,Ua(i,this.targets[0],e,t),Ua(i,this.targets[1],e,t),Ua(i,this.feedback,e,t),Ua(i,this.blendTarget,e,t),this.feedbackPrimed=!1}use(e,t=this.width,i=this.height,s=0){const o=this.gl,c=this.programs[e];return o.useProgram(c),o.uniform2f(o.getUniformLocation(c,"uResolution"),t,i),o.uniform1f(o.getUniformLocation(c,"uTime"),s),o.uniform1f(o.getUniformLocation(c,"uMix"),1),c}next(){return this.ping^=1,this.targets[this.ping]}render(e,t,i,s=1){const o=this.gl,c=e.width,u=e.height;if(c===0||u===0)return;const h=o.canvas;(h.width!==c||h.height!==u)&&(h.width=c,h.height=u),this.resize(c,u),o.bindTexture(o.TEXTURE_2D,this.sourceTexture),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,o.RGBA,o.UNSIGNED_BYTE,e);let f=this.sourceTexture;if(i&&s<1&&i.width===c&&i.height===u){o.bindTexture(o.TEXTURE_2D,this.previousTexture),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,o.RGBA,o.UNSIGNED_BYTE,i);const v=this.use("blend");Rn(o,v,"uTex",this.previousTexture,0),Rn(o,v,"uNext",this.sourceTexture,1),o.uniform1f(o.getUniformLocation(v,"uMix"),s),Yn(o,this.blendTarget,c,u),f=this.blendTarget.texture}if(!this.active){this.feedbackPrimed&&(this.feedbackPrimed=!1);const v=this.use("copy");Rn(o,v,"uTex",f,0),Yn(o,null,c,u);return}const p=this.cfg;let g=f,m;if(this.live(p.colour,p.colour.hue!==0||p.colour.saturation!==1)){const v=this.use("colour");Rn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uHue"),p.colour.hue),o.uniform1f(o.getUniformLocation(v,"uSaturation"),p.colour.saturation),o.uniform1f(o.getUniformLocation(v,"uMix"),p.colour.mix),m=this.next(),Yn(o,m,c,u),g=m.texture}if(this.live(p.feedback,p.feedback.amount>0)){const v=this.use("feedback");Rn(o,v,"uTex",g,0),Rn(o,v,"uFeedback",this.feedback.texture,1),o.uniform1f(o.getUniformLocation(v,"uAmount"),this.feedbackPrimed?p.feedback.amount:0),o.uniform1f(o.getUniformLocation(v,"uZoom"),p.feedback.zoom),o.uniform1f(o.getUniformLocation(v,"uRotate"),p.feedback.rotate),o.uniform2f(o.getUniformLocation(v,"uOffset"),p.feedback.offsetX,p.feedback.offsetY),o.uniform1f(o.getUniformLocation(v,"uHueShift"),p.feedback.hueShift),o.uniform1f(o.getUniformLocation(v,"uMix"),p.feedback.mix),m=this.next(),Yn(o,m,c,u),g=m.texture}if(this.live(p.displace,p.displace.amount>0)){const v=this.use("displace",c,u,t);Rn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uAmount"),p.displace.amount),o.uniform1f(o.getUniformLocation(v,"uScale"),p.displace.scale),o.uniform1f(o.getUniformLocation(v,"uSpeed"),p.displace.speed),o.uniform1f(o.getUniformLocation(v,"uMix"),p.displace.mix),m=this.next(),Yn(o,m,c,u),g=m.texture}if(this.live(p.rgbSplit,p.rgbSplit.amount>0)){const v=this.use("rgbSplit");Rn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uAmount"),p.rgbSplit.amount),o.uniform1f(o.getUniformLocation(v,"uMix"),p.rgbSplit.mix),m=this.next(),Yn(o,m,c,u),g=m.texture}if(this.live(p.kaleido,p.kaleido.segments>=2)){const v=this.use("kaleido");Rn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uSegments"),Math.round(p.kaleido.segments)),o.uniform1f(o.getUniformLocation(v,"uSpin"),p.kaleido.spin),o.uniform1f(o.getUniformLocation(v,"uMix"),p.kaleido.mix),m=this.next(),Yn(o,m,c,u),g=m.texture}if(this.live(p.pixelate,p.pixelate.pixel>1||p.pixelate.levels>=2)){const v=this.use("pixelate");Rn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uPixel"),p.pixelate.pixel),o.uniform1f(o.getUniformLocation(v,"uLevels"),p.pixelate.levels),o.uniform1f(o.getUniformLocation(v,"uMix"),p.pixelate.mix),m=this.next(),Yn(o,m,c,u),g=m.texture}if(this.live(p.noiseTile,p.noiseTile.size>1)){const v=this.use("noiseTile",c,u,t);Rn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uSize"),p.noiseTile.size),o.uniform1f(o.getUniformLocation(v,"uGrain"),p.noiseTile.grain),o.uniform1f(o.getUniformLocation(v,"uDrift"),p.noiseTile.drift),o.uniform1f(o.getUniformLocation(v,"uMix"),p.noiseTile.mix),m=this.next(),Yn(o,m,c,u),g=m.texture}if(this.live(p.echo,p.echo.count>=1)){const v=this.use("echo",c,u,t);Rn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uCount"),p.echo.count),o.uniform1f(o.getUniformLocation(v,"uDepth"),p.echo.depth),o.uniform1f(o.getUniformLocation(v,"uFade"),p.echo.fade),o.uniform1f(o.getUniformLocation(v,"uSpeed"),p.echo.speed),o.uniform1f(o.getUniformLocation(v,"uMix"),p.echo.mix),m=this.next(),Yn(o,m,c,u),g=m.texture}if(this.live(p.fluted,p.fluted.ribs>=1)){const v=this.use("fluted",c,u,t);Rn(o,v,"uTex",g,0),o.uniform1f(o.getUniformLocation(v,"uRibs"),p.fluted.ribs),o.uniform1f(o.getUniformLocation(v,"uBend"),p.fluted.bend),o.uniform1f(o.getUniformLocation(v,"uShine"),p.fluted.shine),o.uniform1f(o.getUniformLocation(v,"uVertical"),p.fluted.vertical),o.uniform1f(o.getUniformLocation(v,"uMix"),p.fluted.mix),m=this.next(),Yn(o,m,c,u),g=m.texture}const y=this.use("copy");Rn(o,y,"uTex",g,0),Yn(o,this.feedback,c,u),this.feedbackPrimed=!0,Rn(o,y,"uTex",g,0),Yn(o,null,c,u)}destroy(){var t;const e=this.gl;for(const i of Object.values(this.programs))e.deleteProgram(i);e.deleteTexture(this.sourceTexture),e.deleteTexture(this.previousTexture),Da(e,this.blendTarget),Da(e,this.targets[0]),Da(e,this.targets[1]),Da(e,this.feedback),(t=e.getExtension("WEBGL_lose_context"))==null||t.loseContext()}}const rC="screen";function ex(a,e){return a.duration<=0?1:Math.min(1,(e-a.fadeStart)/1e3/a.duration)}function sC({handData:a,layerColors:e,layers:t,videoElement:i,audioData:s,layerParams:o,layerFx:c,content:u,motion:h,onCanvasReady:f}){const p=he.useRef(null),g=he.useRef(null),m=he.useRef(f);m.current=f;const y=he.useCallback(V=>{var X;p.current=V,_.current=V?V.getContext("2d"):null,(X=m.current)==null||X.call(m,V)},[]),v=he.useRef([]),w=he.useRef([]),_=he.useRef(null),[S,b]=he.useState(!1),C=he.useRef([]),E=he.useRef(t),L=he.useRef(null),A=he.useRef(a),I=he.useRef(e),T=he.useRef(i??null),F=he.useRef(s),z=he.useRef(o),D=he.useRef(c),H=he.useRef(u),te=he.useRef(h),se=he.useRef(VT());he.useEffect(()=>{A.current=a,I.current=e,T.current=i??null,F.current=s,z.current=o,E.current=t,D.current=c,H.current=u,te.current=h},[a,e,i,s,o,t,c,u,h]),he.useEffect(()=>{var V,X,j,ie;for(const Q of C.current){if(!Q)continue;const O=u.clips[Q.current.pattern];(X=(V=Q.current.renderer).setText)==null||X.call(V,u.text),(ie=(j=Q.current.renderer).setClipUrl)==null||ie.call(j,(O==null?void 0:O.url)??null,O==null?void 0:O.kind)}},[u]),he.useEffect(()=>{C.current.forEach((V,X)=>{var j,ie;(ie=V==null?void 0:(j=V.current.renderer).setParams)==null||ie.call(j,(o==null?void 0:o[X])??{})})},[o]),he.useEffect(()=>{v.current.forEach((V,X)=>{V==null||V.setParams((c==null?void 0:c[X])??{})})},[c]);const W=he.useCallback(V=>{var j;const X=v.current[V];if(X)return X;if(S)return null;try{const ie=document.createElement("canvas"),Q=new iC(ie);return Q.setParams(((j=D.current)==null?void 0:j[V])??{}),v.current[V]=Q,w.current[V]=ie,Q}catch(ie){return console.error("Post pipeline unavailable; this layer plays without effects:",ie),b(!0),null}},[S]);return he.useEffect(()=>{const V=document.createElement("canvas");L.current=V.getContext("2d");const X=()=>{const me=window.innerWidth,we=window.innerHeight;V.width=me,V.height=we;for(const q of C.current)for(const pe of[q==null?void 0:q.current,q==null?void 0:q.outgoing])pe&&(pe.canvas.width=me,pe.canvas.height=we);const ve=p.current;ve&&(ve.width=me,ve.height=we)};X(),window.addEventListener("resize",X);const j=(me,we)=>{var ve,q;try{T.current&&((q=(ve=me.renderer).setVideoElement)==null||q.call(ve,T.current));const pe=E.current[we];me.renderer.render(A.current,I.current[we]??I.current[0]??[],F.current,pe==null?void 0:pe.colorMode)}catch(pe){me.reportedError||(me.reportedError=!0,console.error(`Renderer "${me.pattern}" threw while drawing:`,pe))}};let ie=!1;const Q=(me,we)=>{me.globalCompositeOperation="source-over",me.globalAlpha=1,me.fillStyle="#000",me.fillRect(0,0,me.canvas.width,me.canvas.height),C.current.forEach((ve,q)=>{var yt,lt,St;if(!ve)return;const pe=q===0,oe=((yt=E.current[q])==null?void 0:yt.opacity)??1;if(oe<=0)return;const Me=ve.outgoing?ex(ve.outgoing,we):1,ze=av(((lt=D.current)==null?void 0:lt[q])??{});let Ve=null;if(ze){const Rt=W(q);if(Rt)try{Rt.render(ve.current.canvas,we/1e3,((St=ve.outgoing)==null?void 0:St.canvas)??null,Me),Ve=w.current[q]??null}catch(gt){ie||(ie=!0,console.error("Post pipeline threw while presenting:",gt))}}me.globalCompositeOperation=pe?"source-over":rC,Ve?(me.globalAlpha=oe,me.drawImage(Ve,0,0,me.canvas.width,me.canvas.height)):(ve.outgoing&&(me.globalAlpha=oe*(pe?1:1-Me),me.drawImage(ve.outgoing.canvas,0,0)),me.globalAlpha=oe*Me,me.drawImage(ve.current.canvas,0,0))}),me.globalAlpha=1,me.globalCompositeOperation="source-over"};let O=performance.now();const ee=()=>{var pe;const me=performance.now(),we=L.current,ve=Math.min(.1,(me-O)/1e3);O=me;const q=WT(A.current,se.current,ve);fy(ve,te.current*q),C.current.forEach((oe,Me)=>{var ze,Ve;oe&&(j(oe.current,Me),oe.outgoing&&(ex(oe.outgoing,me)>=1?((Ve=(ze=oe.outgoing.renderer).destroy)==null||Ve.call(ze),oe.outgoing=null):j(oe.outgoing,Me)))}),we&&C.current.length>0&&(Q(we,me),(pe=_.current)==null||pe.drawImage(we.canvas,0,0)),g.current=requestAnimationFrame(ee)};return ee(),()=>{var me,we,ve,q,pe;window.removeEventListener("resize",X),g.current&&cancelAnimationFrame(g.current);for(const oe of v.current)oe==null||oe.destroy();v.current=[],w.current=[];for(const oe of C.current)(ve=(me=oe==null?void 0:oe.outgoing)==null?void 0:(we=me.renderer).destroy)==null||ve.call(we),(pe=oe==null?void 0:(q=oe.current.renderer).destroy)==null||pe.call(q);C.current=[],L.current=null}},[]),he.useEffect(()=>{var ie,Q,O,ee,me;const V=C.current,X=Xa.transition.duration,j=(we,ve)=>{var ze,Ve,yt,lt;const q=document.createElement("canvas");q.width=window.innerWidth,q.height=window.innerHeight;const pe=q.getContext("2d");if(!pe)return null;let oe;try{oe=sv(we,q,pe,T.current)}catch(St){return console.error("Failed to create renderer for pattern:",we,St),null}(Ve=oe.setParams)==null||Ve.call(oe,((ze=z.current)==null?void 0:ze[ve])??{}),(yt=oe.setText)==null||yt.call(oe,H.current.text);const Me=H.current.clips[we];return(lt=oe.setClipUrl)==null||lt.call(oe,(Me==null?void 0:Me.url)??null,Me==null?void 0:Me.kind),{renderer:oe,canvas:q,pattern:we}};t.forEach(({pattern:we},ve)=>{var oe,Me,ze,Ve,yt;const q=V[ve];if((q==null?void 0:q.current.pattern)===we)return;const pe=j(we,ve);if(pe){if(!q){V[ve]={current:pe,outgoing:null};return}(ze=(oe=q.outgoing)==null?void 0:(Me=oe.renderer).destroy)==null||ze.call(Me),X>0?q.outgoing={...q.current,fadeStart:performance.now(),duration:X}:((yt=(Ve=q.current.renderer).destroy)==null||yt.call(Ve),q.outgoing=null),q.current=pe}});for(const we of V.splice(t.length))(O=(ie=we==null?void 0:we.outgoing)==null?void 0:(Q=ie.renderer).destroy)==null||O.call(Q),(me=we==null?void 0:(ee=we.current.renderer).destroy)==null||me.call(ee)},[t.map(V=>V.pattern).join("|")]),G.jsx("canvas",{ref:y,className:"absolute inset-0 w-full h-full z-0"})}const ov={bass:[20,160],lowMid:[160,800],mid:[800,4e3],high:[4e3,12e3]},aC=Object.keys(ov),oC=.002,lC=.04,cC=.25,uC=.0016,hC=6,fC=90,dC=170,pC=1.9;function mC(){const a=()=>({floor:255,ceiling:0});return{envelopes:{bass:a(),lowMid:a(),mid:a(),high:a()},overall:a(),previous:null,flux:[],lastBeat:0,onset:0}}function tx(a,e){a.floor+=(e-a.floor)*(e>a.floor?oC:lC),a.ceiling+=(e-a.ceiling)*(e>a.ceiling?cC:uC);const t=a.ceiling-a.floor;return t<hC?Math.min(1,e/190):Math.min(1,Math.max(0,(e-a.floor)/t))}function nx(a,e,t){const i=Math.max(0,Math.min(a.length-1,e)),s=Math.max(i+1,Math.min(a.length,t));let o=0;for(let c=i;c<s;c++)o+=a[c];return o/(s-i)}function gC(a,e,t,i,s){const o=e/2/a.length,c=A=>Math.round(A/o),u={};for(const A of aC){const[I,T]=ov[A];u[A]=tx(t.envelopes[A],nx(a,c(I),c(T)))}const h=tx(t.overall,nx(a,c(20),c(12e3))),f=c(1e4),p=new Float32Array(f);for(let A=0;A<f&&A<a.length;A++)p[A]=a[A];let g=0;if(t.previous){for(let A=0;A<p.length;A++){const I=p[A]-(t.previous[A]??0);I>0&&(g+=I)}g/=p.length}t.previous=p,t.flux.push(g),t.flux.length>fC&&t.flux.shift();const m=t.flux.reduce((A,I)=>A+I,0)/Math.max(1,t.flux.length);let y=0;for(const A of t.flux)y+=(A-m)**2;const v=Math.sqrt(y/Math.max(1,t.flux.length)),w=pC*(1.4-i*.8),_=m+v*w,b=t.flux.length>=20&&g>_&&g>.35&&s-t.lastBeat>dC;b&&(t.lastBeat=s);const C=_>0?Math.min(1,(g-_)/(_+.6)):0;t.onset=Math.max(t.onset*.9,b?Math.max(.35,C):0);const E=.55+i*.9,L=A=>Math.min(1,A*E);return{bass:L(u.bass),lowMid:L(u.lowMid),mid:L(u.mid),high:L(u.high),overall:L(h),beat:b,beatIntensity:b?Math.min(1,Math.max(.3,C)):0,onset:t.onset}}function xC({onAudioData:a,onStream:e,enabled:t,sensitivity:i}){const s=he.useRef(null),o=he.useRef(null),c=he.useRef(null),u=he.useRef(null),h=he.useRef(null),f=he.useRef(mC()),[p,g]=he.useState(null),m=he.useRef(e);m.current=e;const y=he.useRef(i);return y.current=i,he.useEffect(()=>{let v=!1;const w=()=>{var C;v=!0,h.current!==null&&(cancelAnimationFrame(h.current),h.current=null),u.current&&(u.current.getTracks().forEach(E=>E.stop()),u.current=null,(C=m.current)==null||C.call(m,null));const b=s.current;s.current=null,b&&b.state!=="closed"&&b.close(),o.current=null,c.current=null};if(!t){w(),a({bass:0,lowMid:0,mid:0,high:0,overall:0,beat:!1,beatIntensity:0,onset:0});return}const _=async()=>{var b;try{const C=await navigator.mediaDevices.getUserMedia({audio:!0});if(v){C.getTracks().forEach(F=>F.stop());return}u.current=C,(b=m.current)==null||b.call(m,C);const E=new AudioContext;s.current=E;const L=E.createAnalyser();L.fftSize=2048,L.smoothingTimeConstant=.55,o.current=L,E.createMediaStreamSource(C).connect(L);const I=L.frequencyBinCount,T=new Uint8Array(I);c.current=T,g(null),S()}catch(C){if(v)return;g("Microphone access denied"),console.error("Audio initialization error:",C)}},S=()=>{const b=o.current,C=c.current,E=s.current;!b||!C||!E||(b.getByteFrequencyData(C),a(gC(C,E.sampleRate,f.current,y.current,Date.now())),h.current=requestAnimationFrame(S))};return _(),w},[t,a]),p?G.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500/20 border border-red-500 px-4 py-2 rounded",children:G.jsx("p",{className:"text-red-500 font-mono",children:p})}):null}function Md(a,e,t,i){const o={x:a,y:e+.08800000000000001},c=[{...o,z:0}];return[{angle:-1.05,length:.62},{angle:-.34,length:.95},{angle:-.1,length:1},{angle:.14,length:.92},{angle:.38,length:.76}].forEach((h,f)=>{const p=.25+Math.sin(t*.6+i+f)*.2;for(let g=1;g<=4;g++){const m=g/4,y=h.angle+p*m*.5,v=.16*h.length*m;c.push({x:o.x+Math.sin(y)*v,y:o.y-Math.cos(y)*v,z:0})}}),c}function lv(a){const e=(t,i)=>{const s={x:i+Math.sin(a*.23+t)*.18,y:.5+Math.sin(a*.31+t*1.7)*.22};return{position:s,gesture:"open",fingerCount:3+Math.round(1.5+Math.sin(a*.11+t)*1.5),velocity:.25+Math.sin(a*.37+t)*.15,holdDuration:1,landmarks:Md(s.x,s.y,a,t)}};return{left:e(0,.32),right:e(Math.PI,.68),distanceBetweenHands:.36}}const cv="vj-text",vC="n4thvj",ir="clips",vf="clip",_C=["video","mosaic"],wd="N4TH";function yC(){try{return localStorage.getItem(cv)??wd}catch{return wd}}function SC(a){try{localStorage.setItem(cv,a)}catch{}}function qd(){return new Promise((a,e)=>{const t=indexedDB.open(vC,1);t.onupgradeneeded=()=>{t.result.objectStoreNames.contains(ir)||t.result.createObjectStore(ir)},t.onsuccess=()=>a(t.result),t.onerror=()=>e(t.error)})}function ix(a){return a.type.startsWith("image/")?"image":"video"}async function uv(a,e,t){const i=await qd();await new Promise((s,o)=>{const c=i.transaction(ir,"readwrite");c.objectStore(ir).put({file:e,name:t},a),c.oncomplete=()=>s(),c.onerror=()=>o(c.error)}),i.close()}function MC(a,e){return new Promise(t=>{const i=a.get(e);i.onsuccess=()=>{const s=i.result;if(!s||typeof s!="object")return t(null);const{file:o,name:c}=s;if(!(o instanceof Blob))return t(null);t({file:o,name:typeof c=="string"?c:"clip"})},i.onerror=()=>t(null)})}async function wC(){try{const a=await qd(),e=await new Promise((c,u)=>{const h=a.transaction(ir,"readonly").objectStore(ir).getAllKeys();h.onsuccess=()=>c(h.result),h.onerror=()=>u(h.error)}),t={},s=a.transaction(ir,"readonly").objectStore(ir);for(const c of e){if(typeof c!="string")continue;const u=await MC(s,c);u&&(t[c]=u)}a.close();const o=t[vf];if(o){delete t[vf];for(const c of _C)t[c]||(t[c]=o,uv(c,o.file,o.name).catch(()=>{}));hv(vf).catch(()=>{})}return t}catch{return{}}}async function hv(a){try{const e=await qd();await new Promise(t=>{const i=e.transaction(ir,"readwrite");i.objectStore(ir).delete(a),i.oncomplete=()=>t(),i.onerror=()=>t()}),e.close()}catch{}}const bC=4,EC=14,rx=45,TC=480,CC=300,AC=["#ffffff","#d4d4d4","#ffffff","#a3a3a3"],RC={"2D":"text-cyan-300 border-cyan-400/30 bg-cyan-400/10","3D":"text-violet-300 border-violet-400/30 bg-violet-400/10",TD:"text-emerald-300 border-emerald-400/30 bg-emerald-400/10"},sx=Object.values(ar),PC=["2D","3D","TD"];function LC({set:a,onSetChange:e,onStart:t,text:i,onTextChange:s,clips:o,onClipChange:c}){const[u,h]=he.useState("ALL"),[f,p]=he.useState(null),g=he.useRef(new Map),m=he.useRef(new Set),y=he.useRef(null),v=he.useRef(a);v.current=a;const w=he.useRef({text:i,clips:o});w.current={text:i,clips:o};const _=u==="ALL"?sx:sx.filter(A=>A.category===u),S=he.useCallback(A=>{const I=v.current;if(I.indexOf(A)!==-1){e(I.filter(F=>F!==A));return}I.length>=Us||e([...I,A])},[e]),b=he.useCallback((A,I)=>{const T=v.current.filter(D=>D!==A),F=Math.min(I,T.length);if(F>=Us)return;const z=[...T];z.splice(F,0,A),e(z.slice(0,Us))},[e]);he.useEffect(()=>{const A=I=>{if(I.ctrlKey||I.metaKey||I.altKey)return;if(I.key==="Enter"&&v.current.length>0){t();return}if(!f)return;const T=_f(I.key);T!==-1&&(I.preventDefault(),b(f,T))};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[f,b,t]),he.useEffect(()=>{y.current=new IntersectionObserver(T=>{for(const F of T){const z=F.target.getAttribute("data-pattern");z&&(F.isIntersecting?m.current.add(z):m.current.delete(z))}},{rootMargin:"250px 0px"});for(const T of g.current.values())y.current.observe(T.canvas);let A=0;const I=()=>{var H,te,se,W,V,X,j,ie;if(A=requestAnimationFrame(I),document.hidden)return;const T=lv(Date.now()/1e3);let F=0,z=0;const D=[...g.current].sort(([,Q],[,O])=>{const ee=Q.frames<rx?0:1,me=O.frames<rx?0:1;return ee-me});for(const[Q,O]of D){const ee=ar[Q].category!=="2D",me=ee?F<bC:z<EC;if(m.current.has(Q)&&me&&!O.failed){if(!O.renderer)try{O.renderer=sv(Q,O.canvas,O.ctx,null)}catch{O.failed=!0;continue}try{(te=(H=O.renderer).setText)==null||te.call(H,w.current.text);const ve=w.current.clips[Q];(W=(se=O.renderer).setClipUrl)==null||W.call(se,(ve==null?void 0:ve.url)??null,ve==null?void 0:ve.kind),O.renderer.render(T,AC,void 0,"contrast")}catch{O.failed=!0,(X=(V=O.renderer).destroy)==null||X.call(V),O.renderer=null;continue}O.frames++,ee?F++:z++}else O.renderer&&((ie=(j=O.renderer).destroy)==null||ie.call(j),O.renderer=null)}};return A=requestAnimationFrame(I),()=>{var T,F,z;cancelAnimationFrame(A),(T=y.current)==null||T.disconnect();for(const D of g.current.values())(z=(F=D.renderer)==null?void 0:F.destroy)==null||z.call(F);g.current.clear()}},[]);const C=he.useRef(new Map),E=A=>{let I=C.current.get(A);return I||(I=T=>L(A,T),C.current.set(A,I)),I},L=he.useCallback((A,I)=>{var F,z,D;if(!I){const H=g.current.get(A);(z=(F=H==null?void 0:H.renderer)==null?void 0:F.destroy)==null||z.call(F),g.current.delete(A),m.current.delete(A);return}if(g.current.has(A))return;I.width=TC,I.height=CC;const T=I.getContext("2d");T&&(g.current.set(A,{canvas:I,ctx:T,renderer:null,frames:0}),(D=y.current)==null||D.observe(I))},[]);return G.jsxs("div",{className:"min-h-screen w-full bg-[#07070a] text-white font-mono",children:[G.jsx("div",{"aria-hidden":!0,className:"pointer-events-none fixed inset-0 opacity-70",style:{background:"radial-gradient(60rem 40rem at 50% -10%, rgba(99,102,241,0.18), transparent 70%),radial-gradient(40rem 30rem at 85% 15%, rgba(217,70,239,0.10), transparent 70%)"}}),G.jsxs("div",{className:"relative mx-auto max-w-[1500px] px-6 pb-40 pt-14",children:[G.jsx("header",{className:"mb-10",children:G.jsxs("div",{className:"flex flex-wrap items-end justify-between gap-6",children:[G.jsxs("div",{children:[G.jsx("h1",{className:"text-2xl font-semibold tracking-[-0.02em] sm:text-3xl",children:"<N4TH>"}),G.jsxs("p",{className:"mt-3 max-w-xl text-sm leading-relaxed text-white/45",children:["Every visual, running. Pick up to ",Us," and they become your keyboard — click to add, or hover one and press the number you want it on."]})]}),G.jsx("nav",{className:"flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] p-1.5",children:["ALL",...PC].map(A=>G.jsx("button",{onClick:()=>h(A),className:`rounded-full px-4 py-1.5 text-[11px] tracking-wider transition-all ${u===A?"bg-white text-black":"text-white/45 hover:bg-white/5 hover:text-white/80"}`,children:A},A))})]})}),G.jsx("div",{className:"grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:_.map(A=>{var D;const I=a.indexOf(A.pattern),T=I!==-1,F=a.length>=Us&&!T,z=A.pattern==="text"?"text":A.pattern==="video"||A.pattern==="mosaic"?"file":null;return G.jsxs("div",{onMouseEnter:()=>p(A.pattern),onMouseLeave:()=>p(H=>H===A.pattern?null:H),className:`group relative overflow-hidden rounded-2xl border text-left transition-all duration-200 ${T?"border-white/70 bg-white/[0.06] shadow-[0_0_0_1px_rgba(255,255,255,0.35),0_18px_50px_-20px_rgba(255,255,255,0.35)]":F?"border-white/5 opacity-35":"border-white/10 bg-white/[0.02] hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.05]"}`,children:[G.jsxs("button",{onClick:()=>S(A.pattern),disabled:F,title:F?"The set is full — take one off first":`${A.description}${T?"":" · click to add"}`,className:`block w-full text-left ${F?"cursor-not-allowed":""}`,children:[G.jsxs("div",{className:"relative aspect-[16/10] w-full overflow-hidden bg-black",children:[G.jsx("canvas",{"data-pattern":A.pattern,ref:E(A.pattern),className:"h-full w-full object-cover"}),G.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/85 to-transparent"}),T&&G.jsx("div",{className:"absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-base font-semibold text-black shadow-lg",children:Xo(I)})]}),G.jsxs("div",{className:"flex items-center justify-between gap-3 px-4 pb-3 pt-3",children:[G.jsxs("div",{className:"min-w-0",children:[G.jsx("div",{className:"truncate text-[13px] tracking-wide text-white/90",children:A.name}),G.jsx("div",{className:"mt-0.5 truncate text-[10px] text-white/35",children:A.description})]}),G.jsx("span",{className:`shrink-0 rounded border px-1.5 py-0.5 text-[9px] tracking-widest ${RC[A.category]}`,children:A.category})]})]}),z==="text"&&G.jsx("div",{className:"px-4 pb-4",children:G.jsx("input",{value:i,onChange:H=>s(H.target.value),onKeyDown:H=>H.stopPropagation(),placeholder:wd,maxLength:48,"aria-label":"Words for Kinetic Type",className:"w-full rounded-lg border border-white/15 bg-black/60 px-3 py-2 text-[12px] tracking-wide text-white placeholder:text-white/25 focus:border-white/45 focus:outline-none"})}),z==="file"&&G.jsxs("div",{className:"flex items-center gap-2 px-4 pb-4",children:[G.jsxs("label",{className:"cursor-pointer rounded-lg border border-white/15 bg-black/60 px-3 py-2 text-[11px] tracking-wider text-white/75 transition-colors hover:border-white/45 hover:text-white",children:[o[A.pattern]?"REPLACE":"UPLOAD",G.jsx("input",{type:"file",accept:"video/*,image/*",className:"hidden",onChange:H=>{var se;const te=(se=H.target.files)==null?void 0:se[0];te&&c(A.pattern,te),H.target.value=""}})]}),G.jsx("span",{className:"min-w-0 flex-1 truncate text-[10px] text-white/35",children:((D=o[A.pattern])==null?void 0:D.name)??"no file yet"}),o[A.pattern]&&G.jsx("button",{onClick:()=>c(A.pattern,null),title:"Remove this visual's file",className:"shrink-0 px-1 text-white/25 transition-colors hover:text-white/80",children:"×"})]})]},A.pattern)})})]}),G.jsx("footer",{className:"fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/80 backdrop-blur-xl",children:G.jsxs("div",{className:"mx-auto flex max-w-[1500px] flex-wrap items-center gap-4 px-6 py-4",children:[G.jsxs("div",{className:"flex min-w-0 flex-1 flex-wrap items-center gap-2",children:[G.jsxs("span",{className:"mr-1 text-[10px] tracking-widest text-white/35",children:["SET ",a.length,"/",Us]}),a.length===0&&G.jsx("span",{className:"text-[11px] text-white/30",children:"Nothing chosen yet — pick a visual to start building the row."}),a.map((A,I)=>G.jsxs("button",{onClick:()=>S(A),title:"Take off the set",className:"group flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] py-1 pl-1 pr-3 transition-all hover:border-white/40 hover:bg-white/10",children:[G.jsx("span",{className:"flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-black",children:Xo(I)}),G.jsx("span",{className:"text-[11px] text-white/80",children:ar[A].name}),G.jsx("span",{className:"text-white/25 transition-colors group-hover:text-white/70",children:"×"})]},A))]}),G.jsxs("div",{className:"flex shrink-0 items-center gap-3",children:[a.length>0&&G.jsx("button",{onClick:()=>e([]),className:"rounded-full px-3 py-2 text-[11px] tracking-wider text-white/40 transition-colors hover:text-white/80",children:"CLEAR"}),G.jsx("button",{onClick:t,disabled:a.length===0,className:`rounded-full px-7 py-3 text-[12px] font-semibold tracking-[0.18em] transition-all ${a.length===0?"cursor-not-allowed bg-white/10 text-white/25":"bg-white text-black hover:scale-[1.03] hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.6)]"}`,children:"START SET →"})]})]})})]})}function IC(a,e){const t=Math.max(0,Math.ceil(-Math.log10(e)));return a.toFixed(Math.min(t,4))}function fv({spec:a,value:e,isDefault:t,inert:i,onChange:s,onReset:o}){var u;const c=(e-a.min)/(a.max-a.min)*100;return G.jsxs("div",{className:`group ${i?"opacity-40":""}`,title:i?`Does nothing until ${a.needs} is above zero`:void 0,children:[G.jsxs("div",{className:"flex justify-between items-baseline text-[9px] leading-tight",children:[G.jsxs("button",{onClick:o,title:t?a.hint??a.path:`${a.path} — click to reset`,className:`text-left transition-colors ${t?"text-white/50 hover:text-white/70":"text-cyan-300 hover:text-cyan-200"}`,children:[a.label,!t&&G.jsx("span",{className:"ml-1 opacity-60",children:"•"})]}),G.jsx("span",{className:`text-white ${a.labels?"":"tabular-nums"}`,children:((u=a.labels)==null?void 0:u[Math.round(e)])??IC(e,a.step)})]}),G.jsx("input",{type:"range",className:"vj-slider w-full h-1 mt-1 mb-2 rounded-full appearance-none cursor-pointer focus:outline-none",min:a.min,max:a.max,step:a.step,value:e,onChange:h=>s(parseFloat(h.target.value)),style:{backgroundImage:`linear-gradient(to right, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.85) ${c}%, rgba(255,255,255,0.2) ${c}%)`}})]})}function NC({sections:a,header:e}){var f;const[t,i]=he.useState(!1),[s,o]=he.useState((f=a[0])==null?void 0:f.key),c=a.filter(p=>p.entry.groups.length>0);if(c.length===0)return null;const u=c.find(p=>p.key===s)??c[0],h=u.entry.groups.some(p=>p.params.some(g=>u.values[g.path]!==void 0));return G.jsx("div",{className:"absolute left-6 top-24 bottom-32 z-50 w-[168px] flex flex-col font-mono pointer-events-auto",children:G.jsxs("div",{className:"bg-black/70 backdrop-blur-sm rounded-xl border border-white/20 flex flex-col min-h-0",children:[e&&G.jsx("div",{className:"border-b border-white/10",children:e}),G.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-2 border-b border-white/10",children:[G.jsx("button",{onClick:()=>i(p=>!p),className:"text-white/60 hover:text-white transition-colors shrink-0",title:t?"Show parameters":"Hide parameters",children:G.jsx(I_,{className:"w-3.5 h-3.5"})}),G.jsx("div",{className:"flex gap-1 flex-1 min-w-0",children:c.map(p=>{const g=p.entry.groups.some(m=>m.params.some(y=>p.values[y.path]!==void 0));return G.jsxs("button",{onClick:()=>{o(p.key),i(!1)},className:`px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider transition-all ${p.key===u.key?"bg-white/20 text-white":"text-white/40 hover:text-white/70"}`,children:[p.label,g&&G.jsx("span",{className:"ml-1 text-cyan-300",children:"•"})]},p.key)})}),h&&G.jsx("button",{onClick:()=>u.onReset(),title:`Reset every ${u.label} parameter`,className:"text-white/40 hover:text-white transition-colors shrink-0",children:G.jsx(px,{className:"w-3 h-3"})})]}),!t&&G.jsx("div",{className:"overflow-y-auto px-3 py-2 min-h-0",children:u.entry.groups.map(p=>{if(p.visibleWhen){const y=u.values[p.visibleWhen.path]??Cr(u.entry.config,p.visibleWhen.path)??0;if(!p.visibleWhen.equals.includes(Math.round(y)))return null}const m=(p.togglePath?u.values[p.togglePath]??Cr(u.entry.config,p.togglePath)??1:1)>=.5;return G.jsxs("div",{className:"mb-3 last:mb-1",children:[p.togglePath?G.jsxs("button",{onClick:()=>u.onChange(p.togglePath,m?0:1),title:m?`Bypass ${p.name}`:`Enable ${p.name}`,className:"flex items-center gap-1.5 w-full mb-1.5 group/head",children:[G.jsx("span",{className:`w-1.5 h-1.5 rounded-full transition-colors ${m?"bg-cyan-300":"bg-white/20"}`}),G.jsx("span",{className:`text-[8px] tracking-widest uppercase transition-colors ${m?"text-white/55 group-hover/head:text-white/80":"text-white/25"}`,children:p.name})]}):G.jsx("div",{className:"text-[8px] text-white/35 tracking-widest uppercase mb-1.5",children:p.name}),G.jsx("div",{className:m?"":"opacity-35 pointer-events-none",children:p.params.map(y=>{const v=Cr(u.entry.config,y.path);if(v===void 0)return null;const w=u.values[y.path]??v,_=y.needs?u.values[y.needs]??Cr(u.entry.config,y.needs)??0:1;return G.jsx(fv,{spec:y,inert:!(_>0),value:w,isDefault:u.values[y.path]===void 0,onChange:S=>u.onChange(y.path,S),onReset:()=>u.onReset(y.path)},y.path)})})]},p.name)})})]})})}function Pa(a,e,t){const i=u=>t[u]??Cr(e.config,u)??0,s=a.togglePath?i(a.togglePath)>=.5:!0,o=a.stage?nC(a.stage,t):!1,c=a.params.some(u=>t[u.path]!==void 0);return{on:s,live:o,touched:c}}function FC({entry:a,values:e,onChange:t,onReset:i,layerLabel:s,openName:o,onOpen:c}){const u=a.groups,h=u.find(g=>g.name===o)??null,f=(e["master.enabled"]??1)>=.5,p=u.some(g=>g.params.some(m=>e[m.path]!==void 0));return G.jsx("div",{className:"absolute right-6 top-24 z-50 w-[178px] font-mono pointer-events-auto",children:G.jsxs("div",{className:"bg-black/70 backdrop-blur-sm rounded-xl border border-white/20 flex flex-col",children:[G.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-2 border-b border-white/10",children:[G.jsx("button",{onClick:()=>t("master.enabled",f?0:1),title:f?"Bypass every effect on this layer (X)":"Bring the effects back (X)",className:`shrink-0 transition-colors ${f?"text-cyan-300 hover:text-cyan-200":"text-white/25 hover:text-white/60"}`,children:G.jsx(C_,{className:"w-3.5 h-3.5"})}),G.jsxs("span",{className:"flex-1 min-w-0 truncate text-[9px] tracking-widest text-white/55",children:["FX · ",s]}),p&&G.jsx("button",{onClick:()=>i(),title:"Clear every effect on this layer",className:"shrink-0 text-white/40 hover:text-white transition-colors",children:G.jsx(px,{className:"w-3 h-3"})})]}),G.jsx("div",{className:`grid grid-cols-2 gap-1 p-2 ${f?"":"opacity-35"}`,children:u.map(g=>{const{live:m,touched:y}=Pa(g,a,e),v=g.name===(h==null?void 0:h.name);return G.jsxs("button",{onClick:()=>{if(!m){g.togglePath&&t(g.togglePath,1);for(const[w,_]of Object.entries(g.turnOn??{}))t(w,_);c(g.name);return}if(!v){c(g.name);return}for(const w of Object.keys(g.turnOn??{}))t(w,Cr(a.config,w)??0);c(null)},title:m?v?`${g.name} — running. Click to switch it off`:`${g.name} — running. Click to show its controls`:`${g.name} — click to switch it on`,className:`flex items-center gap-1 rounded px-1.5 py-1 text-left text-[8.5px] leading-tight tracking-wide transition-all ${v?"bg-white text-black":m?"bg-white/15 text-white":"text-white/40 hover:bg-white/10 hover:text-white/70"}`,children:[G.jsx("span",{className:`w-1 h-1 shrink-0 rounded-full ${m?v?"bg-black":"bg-cyan-300":v?"bg-black/30":"bg-white/20"}`}),G.jsx("span",{className:"min-w-0 truncate",children:g.name}),y&&!v&&G.jsx("span",{className:"text-cyan-300",children:"·"})]},g.name)})}),h&&G.jsxs("div",{className:`border-t border-white/10 px-3 py-2 ${f?"":"opacity-35"}`,children:[h.togglePath&&G.jsxs("button",{onClick:()=>t(h.togglePath,Pa(h,a,e).on?0:1),className:"flex items-center gap-1.5 w-full mb-2 group/head",title:Pa(h,a,e).on?`Bypass ${h.name}`:`Enable ${h.name}`,children:[G.jsx("span",{className:`w-1.5 h-1.5 rounded-full transition-colors ${Pa(h,a,e).on?"bg-cyan-300":"bg-white/20"}`}),G.jsx("span",{className:"text-[8px] tracking-widest uppercase text-white/55 group-hover/head:text-white/80",children:Pa(h,a,e).on?"on":"bypassed"})]}),G.jsx("div",{className:Pa(h,a,e).on?"":"opacity-35 pointer-events-none",children:h.params.map(g=>{const m=Cr(a.config,g.path);if(m===void 0)return null;const y=g.needs?e[g.needs]??Cr(a.config,g.needs)??0:1;return G.jsx(fv,{spec:g,inert:!(y>0),value:e[g.path]??m,isDefault:e[g.path]===void 0,onChange:v=>t(g.path,v),onReset:()=>i(g.path)},g.path)})})]})]})})}function UC({layers:a,selectedLayer:e,set:t,onSelect:i,onOpacityChange:s,onRemove:o}){return G.jsxs("div",{className:"px-3 pt-2 pb-1",children:[G.jsxs("div",{className:"mb-1.5 flex items-baseline justify-between",children:[G.jsx("span",{className:"text-[8px] uppercase tracking-widest text-white/35",children:"Layers"}),G.jsx("span",{className:"text-[8px] text-white/25",children:"L cycles · [ ] fade"})]}),a.map((c,u)=>{const h=u===e,f=t.indexOf(c.pattern);return G.jsxs("div",{className:`mb-1 rounded px-1.5 py-1 transition-colors ${h?"bg-white/[0.11]":"hover:bg-white/[0.05]"}`,children:[G.jsxs("div",{className:"flex items-center gap-1.5",children:[G.jsxs("button",{onClick:()=>i(u),title:h?"Editing this layer":"Edit this layer",className:"flex min-w-0 flex-1 items-center gap-1.5 text-left",children:[G.jsx("span",{className:`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[8px] ${h?"bg-white text-black":"bg-white/15 text-white/60"}`,children:f===-1?"·":Xo(f)}),G.jsx("span",{className:`truncate text-[9px] ${h?"text-white":"text-white/55"}`,children:ar[c.pattern].short})]}),G.jsxs("span",{className:"shrink-0 text-[8px] tabular-nums text-white/45",children:[Math.round(c.opacity*100),"%"]}),a.length>1&&G.jsx("button",{onClick:()=>o(u),title:"Take this layer off",className:"shrink-0 px-0.5 text-[10px] leading-none text-white/25 transition-colors hover:text-white/80",children:"×"})]}),G.jsx("input",{type:"range","aria-label":`${ar[c.pattern].name} opacity`,className:"vj-slider mt-1 h-1 w-full cursor-pointer appearance-none rounded-full focus:outline-none",min:0,max:1,step:.01,value:c.opacity,onChange:p=>s(u,parseFloat(p.target.value)),onPointerDown:()=>i(u),style:{background:`linear-gradient(to right, rgba(255,255,255,${h?.85:.4}) ${c.opacity*100}%, rgba(255,255,255,0.12) ${c.opacity*100}%)`}})]},`${c.pattern}-${u}`)})]})}const ax={geometric:{config:Sf,groups:[{name:"Shape",params:[{path:"polygon.baseSize",label:"Size",min:20,max:400,step:5},{path:"polygon.strokeWidth",label:"Stroke",min:.5,max:20,step:.5},{path:"complexity.baseSides",label:"Sides",min:3,max:12,step:1,hint:"with no hands"},{path:"complexity.maxSides",label:"Max sides",min:3,max:24,step:1}]},{name:"Layers",params:[{path:"layers.count",label:"Count",min:1,max:20,step:1},{path:"layers.sizeGrowth",label:"Growth",min:0,max:1.5,step:.01},{path:"layers.rotationOffset",label:"Twist",min:0,max:2,step:.01},{path:"layers.baseOpacity",label:"Opacity",min:0,max:1,step:.01},{path:"layers.opacityFade",label:"Fade",min:0,max:.3,step:.005}]},{name:"Motion",params:[{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"},{path:"animation.baseRotationMultiplier",label:"Spin",min:0,max:.1,step:.001}]},{name:"Bridge & clap",params:[{path:"bridge.thickness",label:"Bridge",min:0,max:30,step:.5},{path:"bridge.waveAmplitude",label:"Bridge wave",min:0,max:150,step:1},{path:"vibration.shakeAmountX",label:"Shake X",min:0,max:200,step:1},{path:"vibration.shakeAmountY",label:"Shake Y",min:0,max:200,step:1},{path:"vibration.flashDuration",label:"Flash",min:0,max:3,step:.05}]}]},particles:{config:yf,groups:[{name:"Emission",params:[{path:"limits.maxParticles",label:"Max",min:5,max:500,step:5},{path:"emission.openHandRate",label:"Open hand",min:0,max:1,step:.01},{path:"emission.closedHandRate",label:"Closed hand",min:0,max:1,step:.01},{path:"controls.fadeOutRate",label:"Fade out",min:.005,max:.5,step:.005}]},{name:"Motion",params:[{path:"physics.initialVelocity",label:"Velocity",min:.5,max:20,step:.5},{path:"physics.damping",label:"Damping",min:.8,max:1,step:.005,hint:"1 = never slows"},{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"}]},{name:"Size",params:[{path:"size.baseRange.0",label:"Radius min",min:2,max:300,step:2},{path:"size.baseRange.1",label:"Radius max",min:2,max:400,step:2},{path:"size.growthMultiplier",label:"Grow",min:.2,max:6,step:.1},{path:"size.shrinkMultiplier",label:"Shrink",min:.05,max:2,step:.05},{path:"size.transitionSpeed",label:"Ease",min:.02,max:1,step:.01}]},{name:"Glow",params:[{path:"glow.layers",label:"Layers",min:0,max:8,step:1},{path:"glow.expansion",label:"Spread",min:0,max:2,step:.05},{path:"glow.layerFade",label:"Fade",min:0,max:1,step:.01}]},{name:"Clap",params:[{path:"explosion.particleCount",label:"Burst",min:0,max:300,step:5},{path:"explosion.forceMultiplier",label:"Force",min:0,max:50,step:1},{path:"explosion.sizeMultiplier",label:"Size",min:.2,max:6,step:.1}]}]},ripple:{config:xd,groups:[{name:"Hand",params:[{path:"stamp.radius",label:"Size",min:.01,max:.3,step:.005},{path:"stamp.strength",label:"Weight",min:.05,max:1,step:.01},{path:"stamp.fingerScale",label:"Fingers",min:0,max:1,step:.05,hint:"0 = palm only"},{path:"stamp.audioSwell",label:"Bass swell",min:0,max:3,step:.05}]},{name:"Trail",params:[{path:"field.decay",label:"Length",min:.8,max:.998,step:.002,hint:"higher = lingers"},{path:"field.spread",label:"Spread",min:.2,max:8,step:.1}]},{name:"Water",params:[{path:"refraction.amount",label:"Refraction",min:0,max:.4,step:.005},{path:"refraction.dispersion",label:"Dispersion",min:0,max:1.5,step:.05}]},{name:"Gloss",params:[{path:"highlight.amount",label:"Amount",min:0,max:3,step:.05},{path:"highlight.sharpness",label:"Sharpness",min:.5,max:20,step:.5},{path:"highlight.tint",label:"Tint",min:0,max:1,step:.05,hint:"palette into the gloss"}]}]},text:{config:vd,groups:[{name:"Field",params:[{path:"motion.handInfluence",label:"Hands",min:0,max:3,step:.05,hint:"how far the field follows"},{path:"radial.strength",label:"Warp",min:-2,max:3,step:.05,hint:"negative pinches"},{path:"radial.twist",label:"Twist",min:-3,max:3,step:.05,hint:"opens with the hand"},{path:"radial.power",label:"Bite",min:.4,max:5,step:.1},{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"}]},{name:"Beat",params:[{path:"radial.ring",label:"Ring",min:0,max:2,step:.05,hint:"thrown out on each onset"},{path:"radial.ringDensity",label:"Rings",min:.5,max:8,step:.1},{path:"audio.bassScale",label:"Bass swell",min:0,max:2,step:.05}]},{name:"Type",params:[{path:"type.fit",label:"Fit",min:.2,max:1.6,step:.02,hint:"word width in its cell"},{path:"type.weight",label:"Weight",min:100,max:900,step:100},{path:"type.tracking",label:"Tracking",min:-.1,max:1.2,step:.01},{path:"type.outline",label:"Outline",min:0,max:1,step:1,hint:"filled or hollow"}]},{name:"Grid",params:[{path:"grid.columns",label:"Columns",min:1,max:40,step:1},{path:"grid.rows",label:"Rows",min:1,max:60,step:1},{path:"grid.spread",label:"Spread",min:.2,max:3,step:.02}]},{name:"Colour",params:[{path:"color.rainbow",label:"Rainbow",min:0,max:1,step:1,hint:"ignores the palette"},{path:"color.step",label:"Hue step",min:0,max:120,step:1},{path:"color.cycleSpeed",label:"Cycle",min:0,max:3,step:.05}]}]},video:{config:_d,groups:[{name:"Frame",params:[{path:"frame.zoom",label:"Zoom",min:.2,max:4,step:.05},{path:"frame.spreadZoom",label:"Spread zoom",min:0,max:3,step:.05},{path:"frame.handDrift",label:"Hand drift",min:0,max:.6,step:.01},{path:"frame.mirror",label:"Mirror",min:0,max:1,step:1}]},{name:"Slice",params:[{path:"slice.count",label:"Bands",min:1,max:60,step:1,hint:"1 = whole frame"},{path:"slice.offset",label:"Shear",min:0,max:.4,step:.005},{path:"slice.speed",label:"Speed",min:0,max:5,step:.05},{path:"slice.beatKick",label:"Beat kick",min:1,max:6,step:.1}]},{name:"Look",params:[{path:"look.tint",label:"Tint",min:0,max:1,step:.02,hint:"palette over the clip"},{path:"look.gain",label:"Gain",min:1,max:3,step:.05},{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"}]}]},chrome:{config:Sd,groups:[{name:"Form",params:[{path:"form.lobes",label:"Lobes",min:1,max:7,step:1},{path:"form.spread",label:"Spread",min:.2,max:2.4,step:.05,hint:"wider pulls tendrils out"},{path:"form.size",label:"Mass",min:.2,max:1.2,step:.02},{path:"form.blend",label:"Melt",min:.05,max:1.4,step:.05,hint:"higher closes the holes"},{path:"form.ripple",label:"Ripple",min:0,max:.4,step:.005},{path:"form.rippleScale",label:"Ripple scale",min:.5,max:9,step:.1}]},{name:"Motion",params:[{path:"motion.drift",label:"Drift",min:0,max:1.2,step:.01},{path:"motion.churn",label:"Churn",min:0,max:2,step:.02},{path:"motion.spin",label:"Spin",min:-.6,max:.6,step:.01}]},{name:"Chrome",params:[{path:"material.dispersion",label:"Rainbow",min:0,max:2.5,step:.05},{path:"material.split",label:"Spread",min:0,max:.3,step:.005,hint:"width of the rainbow"},{path:"material.rimTightness",label:"Rim",min:.5,max:8,step:.1,hint:"higher = thinner band"},{path:"material.silver",label:"Silver",min:0,max:1.5,step:.02},{path:"material.facing",label:"Face-on",min:0,max:.6,step:.01,hint:"low keeps the middles dark"},{path:"material.polish",label:"Polish",min:4,max:260,step:2}]},{name:"Light",params:[{path:"light.keyX",label:"Key X",min:-1,max:1,step:.02},{path:"light.keyY",label:"Key Y",min:-1,max:1,step:.02},{path:"light.key",label:"Key",min:0,max:3,step:.05},{path:"light.fill",label:"Fill",min:0,max:1.5,step:.02},{path:"light.ambient",label:"Ambient",min:0,max:.3,step:.005}]},{name:"Hands and sound",params:[{path:"hands.push",label:"Hand push",min:0,max:2,step:.05},{path:"hands.spread",label:"Hand spread",min:0,max:1.5,step:.05},{path:"hands.kick",label:"Beat throw",min:0,max:2,step:.05},{path:"look.gain",label:"Exposure",min:.2,max:2.5,step:.05},{path:"look.grain",label:"Grain",min:0,max:.2,step:.005}]}]},mosaic:{config:yd,groups:[{name:"Mark",params:[{path:"mode",label:"Mode",min:0,max:3,step:1,labels:["Letters","Dots","Blocks","Bars"]},{path:"grid.columns",label:"Detail",min:8,max:140,step:1,hint:"cells across"},{path:"grid.fill",label:"Weight",min:.2,max:1.8,step:.05},{path:"grid.cellAspect",label:"Cell shape",min:.4,max:2.5,step:.05,hint:"above 1 = taller"},{path:"grid.spreadDensity",label:"Spread coarsens",min:0,max:1.5,step:.05}]},{name:"Image",params:[{path:"tone.contrast",label:"Contrast",min:.2,max:4,step:.05},{path:"tone.brightness",label:"Brightness",min:-.5,max:.5,step:.02},{path:"tone.floor",label:"Cut",min:0,max:.9,step:.01,hint:"darker cells draw nothing"},{path:"tone.invert",label:"Invert",min:0,max:1,step:1}]},{name:"Letters",visibleWhen:{path:"mode",equals:[0]},params:[{path:"letters.ramp",label:"Glyphs",min:0,max:1,step:1,labels:["Density ramp","Your word"]},{path:"letters.weight",label:"Weight",min:100,max:900,step:100},{path:"letters.outline",label:"Hollow",min:0,max:1,step:1}]},{name:"Shape",visibleWhen:{path:"mode",equals:[1,2,3]},params:[{path:"shape.minimum",label:"Floor",min:0,max:.6,step:.01,hint:"size of the faintest mark"},{path:"shape.rotate",label:"Turn",min:0,max:1,step:.02,hint:"blocks towards diamonds"},{path:"shape.anchor",label:"From the floor",min:0,max:1,step:1,hint:"bars only"}]},{name:"Warp",params:[{path:"warp.handPush",label:"Hand push",min:0,max:.3,step:.005},{path:"warp.ripple",label:"Ripple",min:0,max:2,step:.05},{path:"warp.rippleSpeed",label:"Ripple speed",min:0,max:4,step:.05}]},{name:"Colour",params:[{path:"colour.fromSource",label:"Own colour",min:0,max:1,step:.02,hint:"0 = your palette"},{path:"colour.spread",label:"Palette run",min:1,max:40,step:1},{path:"audio.bassScale",label:"Bass swell",min:0,max:2,step:.05},{path:"audio.beatKick",label:"Beat kick",min:0,max:1.5,step:.05},{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"}]}]},digitalblocks:{config:gd,groups:[{name:"Hands",params:[{path:"chaos.range",label:"Ceiling",min:.05,max:1,step:.01,hint:"how wild it can get"},{path:"chaos.openness",label:"Open hand",min:0,max:1,step:.02},{path:"chaos.velocity",label:"Hand speed",min:0,max:1,step:.02},{path:"chaos.clap",label:"Clap",min:0,max:1,step:.02},{path:"chaos.ease",label:"Ease",min:.005,max:.3,step:.005,hint:"lower = calmer"},{path:"chaos.idle",label:"Idle",min:0,max:.5,step:.01}]},{name:"Motion",params:[{path:"speed.base",label:"Drift",min:0,max:.4,step:.005},{path:"speed.variation",label:"Spread",min:0,max:.5,step:.005},{path:"speed.chaos",label:"Chaos speed",min:0,max:1.5,step:.02}]},{name:"Grid",params:[{path:"strips.base",label:"Columns",min:2,max:60,step:1},{path:"strips.chaos",label:"Columns +",min:0,max:60,step:1},{path:"strips.blocks",label:"Blocks",min:1,max:40,step:1},{path:"strips.blocksChaos",label:"Blocks +",min:0,max:40,step:1}]}]},waves:{config:Mf,groups:[{name:"Wave",params:[{path:"waveCount.active",label:"Count",min:1,max:24,step:1,hint:"hands present"},{path:"waveCount.idle",label:"Count idle",min:1,max:24,step:1},{path:"wave.baseAmplitude",label:"Amplitude",min:0,max:400,step:5},{path:"wave.maxAmplitude",label:"Max amp",min:10,max:800,step:10},{path:"wave.baseFrequency",label:"Frequency",min:.001,max:.1,step:.001},{path:"wave.maxFrequency",label:"Max freq",min:.001,max:.2,step:.001}]},{name:"Line",params:[{path:"wave.segments",label:"Segments",min:20,max:600,step:10,hint:"lower = angular"},{path:"wave.lineThickness",label:"Thickness",min:.5,max:20,step:.5},{path:"visual.fillOpacity",label:"Fill",min:0,max:255,step:1}]},{name:"Layers",params:[{path:"layers.primarySpeed",label:"Speed 1",min:0,max:10,step:.1},{path:"layers.secondarySpeed",label:"Speed 2",min:0,max:10,step:.1},{path:"layers.tertiarySpeed",label:"Speed 3",min:0,max:10,step:.1},{path:"layers.secondaryAmplitude",label:"Amp 2",min:0,max:2,step:.01},{path:"layers.tertiaryAmplitude",label:"Amp 3",min:0,max:2,step:.01},{path:"fingerCountSpeed.maxSpeed",label:"Speed cap",min:.1,max:10,step:.1}]},{name:"Hands & focus",params:[{path:"handInfluence.strength",label:"Pull",min:0,max:3,step:.05},{path:"handInfluence.radius",label:"Reach",min:20,max:800,step:10},{path:"focalPoint.baseSize",label:"Dot size",min:0,max:100,step:1},{path:"focalPoint.pulseSpeed",label:"Pulse",min:0,max:20,step:.5},{path:"focalPoint.pulseAmount",label:"Pulse depth",min:0,max:1,step:.01},{path:"focalPoint.glowLayers",label:"Dot glow",min:0,max:10,step:1}]}]}},DC={config:Xa,groups:[{name:"Feedback",stage:"feedback",turnOn:{"feedback.amount":.72,"feedback.zoom":1.02},togglePath:"feedback.enabled",params:[{path:"feedback.amount",label:"Trail",min:0,max:.99,step:.01,hint:"how long the image hangs on"},{needs:"feedback.amount",path:"feedback.zoom",label:"Tunnel",min:.9,max:1.1,step:.001,hint:"above the middle pushes outward"},{needs:"feedback.amount",path:"feedback.rotate",label:"Spiral",min:-.05,max:.05,step:5e-4}]},{name:"Colour",stage:"colour",turnOn:{"colour.hue":1.1},togglePath:"colour.enabled",params:[{path:"colour.hue",label:"Hue",min:-3.14,max:3.14,step:.01,hint:"turns the whole frame"},{path:"colour.saturation",label:"Saturation",min:0,max:2,step:.01,hint:"1 = untouched"}]},{name:"Displace",stage:"displace",turnOn:{"displace.amount":.08},togglePath:"displace.enabled",params:[{path:"displace.amount",label:"Warp",min:0,max:.3,step:.002},{path:"displace.scale",label:"Scale",min:.5,max:40,step:.5},{path:"displace.speed",label:"Speed",min:0,max:3,step:.02}]},{name:"Chromatic",stage:"rgbSplit",turnOn:{"rgbSplit.amount":.022},togglePath:"rgbSplit.enabled",params:[{path:"rgbSplit.amount",label:"Split",min:0,max:.1,step:.001}]},{name:"Kaleido",stage:"kaleido",turnOn:{"kaleido.segments":4},togglePath:"kaleido.enabled",params:[{path:"kaleido.segments",label:"Mirrors",min:0,max:4,step:1,labels:["Off","Off","2","3","4"]},{needs:"kaleido.segments",path:"kaleido.spin",label:"Angle",min:-3.14,max:3.14,step:.01}]},{name:"Pixelate",stage:"pixelate",turnOn:{"pixelate.pixel":14},togglePath:"pixelate.enabled",params:[{path:"pixelate.pixel",label:"Block",min:0,max:64,step:1,hint:"0 = off"},{path:"pixelate.levels",label:"Colours",min:0,max:16,step:1,hint:"steps per channel"}]},{name:"Noise",stage:"noiseTile",turnOn:{"noiseTile.size":2},togglePath:"noiseTile.enabled",params:[{path:"noiseTile.grain",label:"Grain",min:0,max:1,step:.02,hint:"coarse noise over the dither"}]},{name:"Echo",stage:"echo",turnOn:{"echo.count":4},togglePath:"echo.enabled",params:[{path:"echo.count",label:"Echoes",min:0,max:6,step:1,hint:"0 = off"},{needs:"echo.count",path:"echo.depth",label:"Depth",min:.02,max:.6,step:.01},{needs:"echo.count",path:"echo.speed",label:"Travel",min:0,max:1.5,step:.01,hint:"loops seamlessly"}]},{name:"Fluted",stage:"fluted",turnOn:{"fluted.ribs":26},togglePath:"fluted.enabled",params:[{path:"fluted.ribs",label:"Ribs",min:0,max:80,step:1,hint:"0 = off"},{needs:"fluted.ribs",path:"fluted.bend",label:"Bend",min:0,max:2,step:.02},{needs:"fluted.ribs",path:"fluted.shine",label:"Shine",min:0,max:1,step:.02}]}]},dv=1,ox=0,lx=2;function kC(a){return Math.min(1,.06+a*.94)}function pv(a){return .55+a*.45}function cx(a,e,t){var h;const i=kC(t),s=pv(t),o=e?{x:.5+(e.position.x-.5)/s,y:.5+(e.position.y-.5)/s}:a.position,c=o.x+(a.position.x-o.x)*i,u=o.y+(a.position.y-o.y)*i;return{...a,position:{x:.5+(c-.5)*s,y:.5+(u-.5)*s},velocity:a.velocity===void 0?void 0:a.velocity*t,landmarks:(h=a.landmarks)==null?void 0:h.map(f=>({...f,x:.5+(f.x-.5)*s,y:.5+(f.y-.5)*s}))}}function OC(a,e,t){return t===dv?a:{...a,left:a.left?cx(a.left,(e==null?void 0:e.left)??null,t):null,right:a.right?cx(a.right,(e==null?void 0:e.right)??null,t):null,clapIntensity:a.clapIntensity===void 0?void 0:a.clapIntensity*t,distanceBetweenHands:a.distanceBetweenHands===void 0?void 0:.4+(a.distanceBetweenHands-.4)*pv(t)}}function zo(a,e,t){const i=e/100,s=t/100,o=(1-Math.abs(2*s-1))*i,c=o*(1-Math.abs(a/60%2-1)),u=s-o/2;let h=0,f=0,p=0;a<60?[h,f,p]=[o,c,0]:a<120?[h,f,p]=[c,o,0]:a<180?[h,f,p]=[0,o,c]:a<240?[h,f,p]=[0,c,o]:a<300?[h,f,p]=[c,0,o]:[h,f,p]=[o,0,c];const g=m=>Math.round((m+u)*255).toString(16).padStart(2,"0");return`#${g(h)}${g(f)}${g(p)}`}function zC(a,e,t){if(t==="grayscale")return["#FFFFFF","#000000","#FFFFFF","#000000"];if(t==="black")return[zo(a,e,50),"#FFFFFF",zo(a,e*.6,70),zo(a,e*.8,35)];const i=zo(a,e,50),s=zo((a+180)%360,e,50);return[i,s,i,s]}const BC=["video/mp4;codecs=avc1.42E01E,mp4a.40.2","video/mp4","video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"],HC=30,GC=12e6;function mv(){if(!(typeof MediaRecorder>"u")){for(const a of BC)if(MediaRecorder.isTypeSupported(a))return a}}function VC(){return typeof MediaRecorder<"u"&&typeof HTMLCanvasElement.prototype.captureStream=="function"&&mv()!==void 0}class WC{constructor(e){U(this,"sources");U(this,"frame",null);U(this,"ctx",null);U(this,"recorder",null);U(this,"chunks",[]);U(this,"raf",0);U(this,"startedAt",0);U(this,"format","");U(this,"draw",()=>{this.raf=requestAnimationFrame(this.draw);const{ctx:e,frame:t}=this;if(!e||!t)return;const i=this.sources.canvas();if(!i)return;e.fillStyle="#000",e.fillRect(0,0,t.width,t.height);const s=Math.min(t.width/i.width,t.height/i.height),o=i.width*s,c=i.height*s;try{e.drawImage(i,(t.width-o)/2,(t.height-c)/2,o,c)}catch{return}const u=this.sources.camera();u&&u.readyState>=2&&u.videoWidth>0&&this.drawCamera(e,t,u)});this.sources=e}get recording(){return this.recorder!==null&&this.recorder.state==="recording"}get elapsed(){return this.startedAt?(performance.now()-this.startedAt)/1e3:0}start(e){if(this.recording)return;const t=this.sources.canvas(),i=mv();if(!t||!i)return;this.format=i;const s=document.createElement("canvas");s.width=Math.max(2,t.width-t.width%2),s.height=Math.max(2,t.height-t.height%2);const o=s.getContext("2d",{alpha:!1});if(!o)return;this.frame=s,this.ctx=o;const c=s.captureStream(HC);if(e)for(const h of e.getAudioTracks())c.addTrack(h);const u=new MediaRecorder(c,{mimeType:i,videoBitsPerSecond:GC});this.chunks=[],u.ondataavailable=h=>{h.data.size>0&&this.chunks.push(h.data)},u.start(1e3),this.recorder=u,this.startedAt=performance.now(),this.draw()}stop(){const e=this.recorder;if(!e||e.state==="inactive")return Promise.resolve(null);const t=this.elapsed;return new Promise(i=>{e.onstop=()=>{cancelAnimationFrame(this.raf),this.raf=0,this.recorder=null,this.startedAt=0,this.frame=null,this.ctx=null;const s=new Blob(this.chunks,{type:this.format});this.chunks=[],i(s.size>0?{blob:s,extension:this.format.startsWith("video/mp4")?"mp4":"webm",seconds:t}:null)},e.stop()})}drawCamera(e,t,i){const s=Math.round(t.width*.014),o=Math.round(t.width*.17),c=Math.round(o*i.videoHeight/i.videoWidth),u=t.width-o-s,h=s,f=Math.round(o*.06);e.save(),e.beginPath(),typeof e.roundRect=="function"?e.roundRect(u,h,o,c,f):e.rect(u,h,o,c),e.clip(),e.translate(u+o,h),e.scale(-1,1),e.drawImage(i,0,0,o,c),e.restore(),e.save(),e.strokeStyle="rgba(255, 255, 255, 0.35)",e.lineWidth=Math.max(1,t.width*.001),e.beginPath(),typeof e.roundRect=="function"?e.roundRect(u,h,o,c,f):e.rect(u,h,o,c),e.stroke(),e.restore()}}function ux(a){const e=new Date().toISOString().slice(0,19).replace("T","-").replace(/:/g,""),t=URL.createObjectURL(a.blob),i=document.createElement("a");i.href=t,i.download=`n4thvj-${e}.${a.extension}`,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),6e4)}const XC=60,jC=`<!doctype html>
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
</html>`;class qC{constructor(e){U(this,"win",null);U(this,"stream",null);U(this,"onClose");U(this,"poll",0);this.onClose=e}get open(){return this.win!==null&&!this.win.closed}show(e){var i;if(this.open)return(i=this.win)==null||i.focus(),null;if(!e)return"The visuals are not running yet.";if(typeof e.captureStream!="function")return"This browser cannot send a canvas to a second window.";const t=window.open("","n4thvj-output","width=1280,height=720");return t?(t.document.open(),t.document.write(jC),t.document.close(),this.win=t,this.attach(e),this.poll=window.setInterval(()=>{this.win&&this.win.closed&&this.close()},500),null):"The browser blocked the window. Allow pop-ups for this page and try again."}attach(e){var s;const t=this.win;if(!t||t.closed||!e||typeof e.captureStream!="function")return;const i=t.document.getElementById("out");if(i){for(const o of((s=this.stream)==null?void 0:s.getTracks())??[])o.stop();this.stream=e.captureStream(XC),i.srcObject=this.stream,i.play().catch(()=>{})}}close(){var t;clearInterval(this.poll),this.poll=0;for(const i of((t=this.stream)==null?void 0:t.getTracks())??[])i.stop();this.stream=null;const e=this.win;this.win=null,e&&!e.closed&&e.close(),this.onClose()}}function za(a,e,t){try{const i=localStorage.getItem(a);if(i===null)return e;const s=JSON.parse(i);return t(s)?s:e}catch{return e}}function La(a,e){try{localStorage.setItem(a,JSON.stringify(e))}catch{}}const bd=(a,e)=>t=>typeof t=="number"&&Number.isFinite(t)&&t>=a&&t<=e;function hx(){return{hue:za("vj-hue",245,bd(0,360)),saturation:za("vj-saturation",100,bd(0,100)),colorMode:za("vj-color-mode","contrast",a=>a==="black"||a==="contrast"||a==="grayscale")}}function YC(){const[a,e]=he.useState(()=>[{pattern:"geometric",opacity:1,...hx()}]),[t,i]=he.useState(0),s=(a[t]??a[0]).pattern,o=he.useCallback(Se=>{const Ie=a.findIndex(Ae=>Ae.pattern===Se);if(Ie!==-1){i(Ie);return}e(Ae=>Ae.map((je,It)=>It===t?{...je,pattern:Se}:je))},[a,t]),c=he.useCallback(Se=>{const Ie=a.findIndex(je=>je.pattern===Se);if(Ie!==-1){if(a.length===1)return;e(a.filter((je,It)=>It!==Ie)),i(je=>je>Ie?je-1:Math.min(je,a.length-2));return}if(a.length>=j_)return;const Ae=a[t]??a[0];e([...a,{pattern:Se,opacity:q_,hue:Ae.hue,saturation:Ae.saturation,colorMode:Ae.colorMode}]),i(a.length)},[a,t]),u=he.useCallback(()=>{i(Se=>(Se+1)%a.length)},[a.length]),h=he.useCallback((Se,Ie)=>{e(Ae=>Ae.map((je,It)=>It===Se?{...je,opacity:Ie}:je))},[]),f=he.useCallback(Se=>{e(Ie=>Ie.length===1?Ie:Ie.filter((Ae,je)=>je!==Se)),i(Ie=>Ie>Se?Ie-1:Math.min(Ie,a.length-2))},[a.length]),p=he.useCallback(Se=>{e(Ie=>Ie.map((Ae,je)=>je===t?{...Ae,opacity:Math.min(1,Math.max(0,Math.round((Ae.opacity+Se)*100)/100))}:Ae))},[t]),[g,m]=he.useState(!1),[y,v]=he.useState(!0),w=a[t]??a[0],{hue:_,saturation:S,colorMode:b}=w;he.useCallback(Se=>{e(Ie=>Ie.map((Ae,je)=>je===t?{...Ae,...Se}:Ae))},[t]);const C=(Se,Ie)=>typeof Se=="function"?Se(Ie):Se,E=he.useCallback(Se=>{e(Ie=>Ie.map((Ae,je)=>je===t?{...Ae,hue:C(Se,Ae.hue)}:Ae))},[t]),L=he.useCallback(Se=>{e(Ie=>Ie.map((Ae,je)=>je===t?{...Ae,saturation:C(Se,Ae.saturation)}:Ae))},[t]),A=he.useCallback(Se=>{e(Ie=>Ie.map((Ae,je)=>je===t?{...Ae,colorMode:C(Se,Ae.colorMode)}:Ae))},[t]),I=he.useMemo(()=>a.map(Se=>zC(Se.hue,Se.saturation,Se.colorMode)),[a]),T=I[t]??I[0],[F,z]=he.useState(!1),[D,H]=he.useState(()=>za("vj-motion",dv,bd(ox,lx)));he.useEffect(()=>{La("vj-motion",D)},[D]);const te=he.useCallback(Se=>{H(Ie=>Math.min(lx,Math.max(ox,Math.round((Ie+Se)*100)/100)))},[]),[se,W]=he.useState(yC),[V,X]=he.useState({});he.useEffect(()=>{SC(se)},[se]),he.useEffect(()=>{const Se=[];let Ie=!1;return wC().then(Ae=>{if(Ie)return;const je={};for(const[It,{file:qi,name:N}]of Object.entries(Ae)){const ne=URL.createObjectURL(qi);Se.push(ne),je[It]={url:ne,name:N,kind:ix(qi)}}X(je)}),()=>{Ie=!0,Se.forEach(Ae=>URL.revokeObjectURL(Ae))}},[]);const j=he.useCallback((Se,Ie)=>{X(Ae=>{const je=Ae[Se];je&&URL.revokeObjectURL(je.url);const It={...Ae};return Ie?It[Se]={url:URL.createObjectURL(Ie),name:Ie.name,kind:ix(Ie)}:delete It[Se],It}),Ie?uv(Se,Ie,Ie.name).catch(()=>{}):hv(Se).catch(()=>{})},[]),ie=he.useMemo(()=>({text:se,clips:V}),[se,V]),Q=he.useRef(null),O=he.useRef(null),ee=he.useRef(null),me=he.useRef(!1),[we,ve]=he.useState(!1),[q,pe]=he.useState(0),oe=he.useMemo(()=>VC(),[]),Me=he.useRef(null);!Me.current&&oe&&(Me.current=new WC({canvas:()=>Q.current,camera:()=>me.current?ee.current:null}));const[ze,Ve]=he.useState(()=>{try{const Se=localStorage.getItem("vj-sound");return Se==="music"||Se==="off"||Se==="mic"?Se:"mic"}catch{return"mic"}});he.useEffect(()=>{try{localStorage.setItem("vj-sound",ze)}catch{}},[ze]);const yt=he.useRef(null),[lt,St]=he.useState(null),Rt=he.useCallback(async()=>{var Ae;const Se=Me.current;if(!Se)return;if(Se.recording){ve(!1);const je=await Se.stop();for(const It of((Ae=yt.current)==null?void 0:Ae.getTracks())??[])It.stop();yt.current=null,je&&ux(je);return}St(null);const Ie=await K_(ze,O.current);Ie.problem&&St(Ie.problem),yt.current=Ie.owned?Ie.stream:null,Se.start(Ie.stream),ve(Se.recording)},[ze]);he.useEffect(()=>{if(!lt)return;const Se=setTimeout(()=>St(null),9e3);return()=>clearTimeout(Se)},[lt]);const[gt,Xt]=he.useState(!1),[kt,hn]=he.useState(null),K=he.useRef(null);K.current||(K.current=new qC(()=>Xt(!1)));const Ot=he.useCallback(()=>{const Se=K.current;if(!Se)return;if(Se.open){Se.close();return}const Ie=Se.show(Q.current);hn(Ie),Xt(Se.open)},[]);he.useEffect(()=>{if(!kt)return;const Se=setTimeout(()=>hn(null),9e3);return()=>clearTimeout(Se)},[kt]),he.useEffect(()=>()=>{var Se;return(Se=K.current)==null?void 0:Se.close()},[]),he.useEffect(()=>{if(!we){pe(0);return}const Se=setInterval(()=>{var Ie;pe(((Ie=Me.current)==null?void 0:Ie.elapsed)??0)},500);return()=>clearInterval(Se)},[we]),he.useEffect(()=>{const Se=()=>{var Ie;(Ie=Me.current)!=null&&Ie.recording&&Me.current.stop().then(Ae=>Ae&&ux(Ae))};return window.addEventListener("pagehide",Se),()=>window.removeEventListener("pagehide",Se)},[]);const[xt,Ut]=he.useState(!0),[Be,Wt]=he.useState(()=>I0(za("vj-params",{},()=>!0))),[k,R]=he.useState(null),[re,_e]=he.useState(()=>{const Se=I0(za("vj-fx",{},()=>!0));return Se.fx&&Object.keys(Se.fx).length>0&&!Se[0]?{0:Se.fx}:Se}),be=re[String(t)]??{},Pe=he.useCallback((Se,Ie)=>{_e(Ae=>{const je=String(t);return{...Ae,[je]:{...Ae[je]??{},[Se]:Ie}}})},[t]),Oe=he.useMemo(()=>a.map((Se,Ie)=>re[String(Ie)]??{}),[a,re]),ge=(be["master.enabled"]??1)>=.5,ye=he.useCallback(()=>{_e(Se=>{const Ie=String(t),Ae=Se[Ie]??{};return{...Se,[Ie]:{...Ae,"master.enabled":(Ae["master.enabled"]??1)>=.5?0:1}}})},[t]),We=he.useCallback(Se=>{_e(Ie=>{const Ae=String(t);if(Se===void 0)return{...Ie,[Ae]:{}};const{[Se]:je,...It}=Ie[Ae]??{};return{...Ie,[Ae]:It}})},[t]),qe=he.useCallback((Se,Ie)=>{Wt(Ae=>({...Ae,[s]:{...Ae[s],[Se]:Ie}}))},[s]),Ue=he.useCallback(Se=>{Wt(Ie=>{if(Se===void 0){const{[s]:It,...qi}=Ie;return qi}const{[Se]:Ae,...je}=Ie[s]??{};return{...Ie,[s]:je}})},[s]),Ne=he.useMemo(()=>a.map(Se=>Be[Se.pattern]),[a,Be]),[Qe,pt]=he.useState(J_),[wt,Y]=he.useState("library"),[Le,xe]=he.useState({left:null,right:null}),[Ge,De]=he.useState(null);he.useEffect(()=>{ee.current=Ge,me.current=g},[Ge,g]);const[Ee,et]=he.useState(!1),[ft,zt]=he.useState(!1),[ot,Ln]=he.useState({bass:0,lowMid:0,mid:0,high:0,overall:0,beat:!1,beatIntensity:0,onset:0}),[Vn,Pi]=he.useState(.5),[$n,lr]=he.useState(0),cr=Le.left!==null||Le.right!==null,yi=wt==="vj"&&(ft||xt&&!cr);he.useEffect(()=>{if(!yi)return;let Se;const Ie=()=>{lr(Date.now()/1e3),Se=requestAnimationFrame(Ie)};return Ie(),()=>cancelAnimationFrame(Se)},[yi]),he.useEffect(()=>{if(!F)return;const Se=setInterval(()=>{E(Ie=>(Ie+1)%360)},50);return()=>clearInterval(Se)},[F]);const fs=ft?{left:{position:{x:.3+Math.sin($n)*.2*ot.mid,y:.5+ot.bass*.3},gesture:ot.overall>.25?"open":"fist",fingerCount:1+Math.round(Math.min(1,ot.mid+ot.high*.6)*4),velocity:Math.min(1,ot.mid*.7+ot.onset*.6),landmarks:Md(.3+Math.sin($n)*.2*ot.mid,.5+ot.bass*.3,$n,0)},right:{position:{x:.7-Math.sin($n)*.2*ot.mid,y:.5+ot.bass*.3},gesture:ot.overall>.25?"open":"fist",fingerCount:1+Math.round(Math.min(1,ot.mid+ot.high*.6)*4),velocity:Math.min(1,ot.mid*.7+ot.onset*.6),landmarks:Md(.7-Math.sin($n)*.2*ot.mid,.5+ot.bass*.3,$n,Math.PI)},clapping:ot.beat,clapIntensity:ot.beatIntensity,distanceBetweenHands:.45-ot.bass*.3}:cr||!xt?Le:lv($n),ds=he.useRef(null),oi=OC(fs,ds.current,D);ds.current=oi,he.useEffect(()=>{La("vj-hue",_),La("vj-saturation",S),La("vj-color-mode",b)},[_,S,b]),he.useEffect(()=>{La("vj-params",Be)},[Be]),he.useEffect(()=>{La("vj-fx",re)},[re]),he.useEffect(()=>{ey(Qe)},[Qe]);const ur=he.useCallback(()=>{Qe.length!==0&&(e([{pattern:Qe[0],opacity:1,...hx()}]),i(0),Y("vj"))},[Qe]),hr=he.useCallback(Se=>{if(Qe.length===0)return;const Ie=Qe.indexOf(s),je=Ie===-1?Se==="next"?0:Qe.length-1:(Ie+(Se==="next"?1:-1)+Qe.length)%Qe.length;o(Qe[je])},[s,Qe,o]),li=he.useRef(null);he.useEffect(()=>{const Se=Ae=>{if(Ae.key==="Control"){A("contrast");return}if(Ae.key==="Alt"){A("grayscale");return}if(Ae.key==="Meta"){A("black");return}if(Ae.ctrlKey||Ae.metaKey||Ae.altKey)return;if(Ae.key.toLowerCase()==="c"){m(It=>!It);return}if(Ae.key.toLowerCase()==="a"){zt(It=>!It);return}if(Ae.key.toLowerCase()==="r"){Rt();return}if(Ae.key.toLowerCase()==="s"){Ve(C0);return}if(Ae.key.toLowerCase()==="o"){Ot();return}if(Ae.key.toLowerCase()==="x"){ye();return}if(Ae.key.toLowerCase()==="i"){Ut(It=>!It);return}if(Ae.key.toLowerCase()==="d"){o("flowfield");return}if(Ae.key==="Escape"){Y("library");return}if(Ae.key.toLowerCase()==="l"){u();return}if(Ae.key==="-"){te(-.1);return}if(Ae.key==="="||Ae.key==="+"){te(.1);return}if(Ae.key==="["){p(-.1);return}if(Ae.key==="]"){p(.1);return}const je=Qe[_f(Ae.key)];if(je){if(Ae.repeat||li.current)return;li.current={key:Ae.key.toLowerCase(),fired:!1,timer:window.setTimeout(()=>{li.current&&(li.current.fired=!0),c(je)},mx)};return}switch(Ae.key){case"ArrowLeft":Ae.preventDefault(),hr("prev");break;case"ArrowRight":Ae.preventDefault(),hr("next");break;case"ArrowUp":Ae.preventDefault(),L(It=>Math.min(100,It+5));break;case"ArrowDown":Ae.preventDefault(),L(It=>Math.max(0,It-5));break}},Ie=Ae=>{const je=li.current;if(!je||je.key!==Ae.key.toLowerCase()||(clearTimeout(je.timer),li.current=null,je.fired))return;const It=Qe[_f(Ae.key)];It&&o(It)};return window.addEventListener("keydown",Se),window.addEventListener("keyup",Ie),()=>{window.removeEventListener("keydown",Se),window.removeEventListener("keyup",Ie)}},[Qe,hr,ye,o,c,u,p,te,Rt,Ot]),he.useEffect(()=>{const Se=Ie=>{Ie.preventDefault(),v(Ae=>!Ae)};return window.addEventListener("contextmenu",Se),()=>window.removeEventListener("contextmenu",Se)},[]),he.useEffect(()=>{(s==="face"||s.startsWith("smokehand"))&&m(!0)},[s]);const ps=()=>{et(!1)},ms=()=>{et(!1)},gs=ot;return wt==="library"?G.jsx(LC,{set:Qe,onSetChange:pt,onStart:ur,text:se,onTextChange:W,clips:V,onClipChange:j}):G.jsxs("div",{className:"relative w-screen h-screen overflow-hidden bg-black",children:[Ee&&G.jsx(hy,{onGrant:ps,onSkip:ms}),G.jsx(sC,{handData:oi,layerColors:I,layers:a,videoElement:Ge,audioData:gs,layerParams:Ne,content:ie,motion:D,layerFx:Oe,onCanvasReady:Se=>{var Ie;Q.current=Se,(Ie=K.current)==null||Ie.attach(Se)}}),G.jsx("div",{className:`absolute top-4 right-4 ${g?"opacity-100":"opacity-0 pointer-events-none"}`,children:G.jsx(X_,{onVideoReady:De})}),Ge&&s!=="face"&&G.jsx(oy,{videoElement:Ge,onHandData:xe}),G.jsx(xC,{enabled:ft,sensitivity:Vn,onAudioData:Ln,onStream:Se=>{O.current=Se}}),y&&G.jsx(NC,{header:G.jsx(UC,{layers:a,selectedLayer:t,set:Qe,onSelect:i,onOpacityChange:h,onRemove:f}),sections:ax[s]?[{key:"shape",label:"SHAPE",entry:ax[s],values:Be[s]??{},onChange:qe,onReset:Ue}]:[]}),y&&G.jsx(FC,{entry:DC,values:be,onChange:Pe,onReset:We,openName:k,onOpen:R,layerLabel:a.length>1?`L${t+1} ${ar[s].short}`:ar[s].short}),y&&G.jsx(ry,{currentPattern:s,onPatternChange:o,layers:a,selectedLayer:t,onPatternHold:c,onLayerCycle:u,showCamera:g,onCameraToggle:()=>m(!g),handData:Le,selectedColors:T,colorMode:b,hue:_,saturation:S,onHueChange:E,onSaturationChange:L,onColorModeChange:A,autoHueEnabled:F,onAutoHueToggle:()=>z(Se=>!Se),set:Qe,onOpenLibrary:()=>Y("library"),audioEnabled:ft,onAudioToggle:()=>zt(!ft),audioSensitivity:Vn,onAudioSensitivityChange:Pi,audioLevels:gs,motion:D,onMotionChange:H,idleDrive:xt,onIdleDriveToggle:()=>Ut(Se=>!Se),fxEnabled:ge,fxActive:av(be),onFxToggle:ye,canRecord:oe,recording:we,recordSeconds:q,onRecordToggle:()=>void Rt(),sound:ze,onSoundCycle:()=>Ve(C0),output:gt,onOutputToggle:Ot}),(lt||kt)&&G.jsx("div",{className:"pointer-events-none absolute bottom-28 left-1/2 z-[60] w-[min(34rem,90vw)] -translate-x-1/2",children:G.jsx("div",{className:"rounded-xl border border-amber-300/30 bg-black/85 px-4 py-3 text-center font-mono text-[11px] leading-relaxed text-amber-200/90 backdrop-blur-sm",children:lt??kt})})]})}const gv=document.getElementById("root");if(!gv)throw new Error("Root element #root not found");s_.createRoot(gv).render(G.jsx(YC,{}));try{sessionStorage.removeItem("vj-stale-bundle-reload")}catch{}
