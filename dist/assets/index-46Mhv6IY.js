var K1=Object.defineProperty;var Z1=(a,e,t)=>e in a?K1(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var U=(a,e,t)=>Z1(a,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();var Ah={exports:{}},Ro={},Rh={exports:{}},Ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x0;function Q1(){if(x0)return Ct;x0=1;var a=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function m(O){return O===null||typeof O!="object"?null:(O=g&&O[g]||O["@@iterator"],typeof O=="function"?O:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,w={};function _(O,ee,ge){this.props=O,this.context=ee,this.refs=w,this.updater=ge||y}_.prototype.isReactComponent={},_.prototype.setState=function(O,ee){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ee,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function S(){}S.prototype=_.prototype;function b(O,ee,ge){this.props=O,this.context=ee,this.refs=w,this.updater=ge||y}var E=b.prototype=new S;E.constructor=b,x(E,_.prototype),E.isPureReactComponent=!0;var C=Array.isArray,I=Object.prototype.hasOwnProperty,A={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function T(O,ee,ge){var Te,Se={},W=null,me=null;if(ee!=null)for(Te in ee.ref!==void 0&&(me=ee.ref),ee.key!==void 0&&(W=""+ee.key),ee)I.call(ee,Te)&&!N.hasOwnProperty(Te)&&(Se[Te]=ee[Te]);var oe=arguments.length-2;if(oe===1)Se.children=ge;else if(1<oe){for(var Re=Array(oe),Oe=0;Oe<oe;Oe++)Re[Oe]=arguments[Oe+2];Se.children=Re}if(O&&O.defaultProps)for(Te in oe=O.defaultProps,oe)Se[Te]===void 0&&(Se[Te]=oe[Te]);return{$$typeof:a,type:O,key:W,ref:me,props:Se,_owner:A.current}}function F(O,ee){return{$$typeof:a,type:O.type,key:ee,ref:O.ref,props:O.props,_owner:O._owner}}function z(O){return typeof O=="object"&&O!==null&&O.$$typeof===a}function D(O){var ee={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ge){return ee[ge]})}var G=/\/+/g;function ne(O,ee){return typeof O=="object"&&O!==null&&O.key!=null?D(""+O.key):ee.toString(36)}function se(O,ee,ge,Te,Se){var W=typeof O;(W==="undefined"||W==="boolean")&&(O=null);var me=!1;if(O===null)me=!0;else switch(W){case"string":case"number":me=!0;break;case"object":switch(O.$$typeof){case a:case e:me=!0}}if(me)return me=O,Se=Se(me),O=Te===""?"."+ne(me,0):Te,C(Se)?(ge="",O!=null&&(ge=O.replace(G,"$&/")+"/"),se(Se,ee,ge,"",function(Oe){return Oe})):Se!=null&&(z(Se)&&(Se=F(Se,ge+(!Se.key||me&&me.key===Se.key?"":(""+Se.key).replace(G,"$&/")+"/")+O)),ee.push(Se)),1;if(me=0,Te=Te===""?".":Te+":",C(O))for(var oe=0;oe<O.length;oe++){W=O[oe];var Re=Te+ne(W,oe);me+=se(W,ee,ge,Re,Se)}else if(Re=m(O),typeof Re=="function")for(O=Re.call(O),oe=0;!(W=O.next()).done;)W=W.value,Re=Te+ne(W,oe++),me+=se(W,ee,ge,Re,Se);else if(W==="object")throw ee=String(O),Error("Objects are not valid as a React child (found: "+(ee==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ee)+"). If you meant to render a collection of children, use an array instead.");return me}function X(O,ee,ge){if(O==null)return O;var Te=[],Se=0;return se(O,Te,"","",function(W){return ee.call(ge,W,Se++)}),Te}function V(O){if(O._status===-1){var ee=O._result;ee=ee(),ee.then(function(ge){(O._status===0||O._status===-1)&&(O._status=1,O._result=ge)},function(ge){(O._status===0||O._status===-1)&&(O._status=2,O._result=ge)}),O._status===-1&&(O._status=0,O._result=ee)}if(O._status===1)return O._result.default;throw O._result}var Y={current:null},q={transition:null},ie={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:q,ReactCurrentOwner:A};function te(){throw Error("act(...) is not supported in production builds of React.")}return Ct.Children={map:X,forEach:function(O,ee,ge){X(O,function(){ee.apply(this,arguments)},ge)},count:function(O){var ee=0;return X(O,function(){ee++}),ee},toArray:function(O){return X(O,function(ee){return ee})||[]},only:function(O){if(!z(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},Ct.Component=_,Ct.Fragment=t,Ct.Profiler=s,Ct.PureComponent=b,Ct.StrictMode=i,Ct.Suspense=h,Ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ie,Ct.act=te,Ct.cloneElement=function(O,ee,ge){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Te=x({},O.props),Se=O.key,W=O.ref,me=O._owner;if(ee!=null){if(ee.ref!==void 0&&(W=ee.ref,me=A.current),ee.key!==void 0&&(Se=""+ee.key),O.type&&O.type.defaultProps)var oe=O.type.defaultProps;for(Re in ee)I.call(ee,Re)&&!N.hasOwnProperty(Re)&&(Te[Re]=ee[Re]===void 0&&oe!==void 0?oe[Re]:ee[Re])}var Re=arguments.length-2;if(Re===1)Te.children=ge;else if(1<Re){oe=Array(Re);for(var Oe=0;Oe<Re;Oe++)oe[Oe]=arguments[Oe+2];Te.children=oe}return{$$typeof:a,type:O.type,key:Se,ref:W,props:Te,_owner:me}},Ct.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:o,_context:O},O.Consumer=O},Ct.createElement=T,Ct.createFactory=function(O){var ee=T.bind(null,O);return ee.type=O,ee},Ct.createRef=function(){return{current:null}},Ct.forwardRef=function(O){return{$$typeof:u,render:O}},Ct.isValidElement=z,Ct.lazy=function(O){return{$$typeof:p,_payload:{_status:-1,_result:O},_init:V}},Ct.memo=function(O,ee){return{$$typeof:f,type:O,compare:ee===void 0?null:ee}},Ct.startTransition=function(O){var ee=q.transition;q.transition={};try{O()}finally{q.transition=ee}},Ct.unstable_act=te,Ct.useCallback=function(O,ee){return Y.current.useCallback(O,ee)},Ct.useContext=function(O){return Y.current.useContext(O)},Ct.useDebugValue=function(){},Ct.useDeferredValue=function(O){return Y.current.useDeferredValue(O)},Ct.useEffect=function(O,ee){return Y.current.useEffect(O,ee)},Ct.useId=function(){return Y.current.useId()},Ct.useImperativeHandle=function(O,ee,ge){return Y.current.useImperativeHandle(O,ee,ge)},Ct.useInsertionEffect=function(O,ee){return Y.current.useInsertionEffect(O,ee)},Ct.useLayoutEffect=function(O,ee){return Y.current.useLayoutEffect(O,ee)},Ct.useMemo=function(O,ee){return Y.current.useMemo(O,ee)},Ct.useReducer=function(O,ee,ge){return Y.current.useReducer(O,ee,ge)},Ct.useRef=function(O){return Y.current.useRef(O)},Ct.useState=function(O){return Y.current.useState(O)},Ct.useSyncExternalStore=function(O,ee,ge){return Y.current.useSyncExternalStore(O,ee,ge)},Ct.useTransition=function(){return Y.current.useTransition()},Ct.version="18.3.1",Ct}var v0;function Td(){return v0||(v0=1,Rh.exports=Q1()),Rh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0;function J1(){if(_0)return Ro;_0=1;var a=Td(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(u,h,f){var p,g={},m=null,y=null;f!==void 0&&(m=""+f),h.key!==void 0&&(m=""+h.key),h.ref!==void 0&&(y=h.ref);for(p in h)i.call(h,p)&&!o.hasOwnProperty(p)&&(g[p]=h[p]);if(u&&u.defaultProps)for(p in h=u.defaultProps,h)g[p]===void 0&&(g[p]=h[p]);return{$$typeof:e,type:u,key:m,ref:y,props:g,_owner:s.current}}return Ro.Fragment=t,Ro.jsx=c,Ro.jsxs=c,Ro}var y0;function e_(){return y0||(y0=1,Ah.exports=J1()),Ah.exports}var H=e_(),Jl={},Ph={exports:{}},ni={},Lh={exports:{}},Ih={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S0;function t_(){return S0||(S0=1,(function(a){function e(q,ie){var te=q.length;q.push(ie);e:for(;0<te;){var O=te-1>>>1,ee=q[O];if(0<s(ee,ie))q[O]=ie,q[te]=ee,te=O;else break e}}function t(q){return q.length===0?null:q[0]}function i(q){if(q.length===0)return null;var ie=q[0],te=q.pop();if(te!==ie){q[0]=te;e:for(var O=0,ee=q.length,ge=ee>>>1;O<ge;){var Te=2*(O+1)-1,Se=q[Te],W=Te+1,me=q[W];if(0>s(Se,te))W<ee&&0>s(me,Se)?(q[O]=me,q[W]=te,O=W):(q[O]=Se,q[Te]=te,O=Te);else if(W<ee&&0>s(me,te))q[O]=me,q[W]=te,O=W;else break e}}return ie}function s(q,ie){var te=q.sortIndex-ie.sortIndex;return te!==0?te:q.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;a.unstable_now=function(){return o.now()}}else{var c=Date,u=c.now();a.unstable_now=function(){return c.now()-u}}var h=[],f=[],p=1,g=null,m=3,y=!1,x=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(q){for(var ie=t(f);ie!==null;){if(ie.callback===null)i(f);else if(ie.startTime<=q)i(f),ie.sortIndex=ie.expirationTime,e(h,ie);else break;ie=t(f)}}function C(q){if(w=!1,E(q),!x)if(t(h)!==null)x=!0,V(I);else{var ie=t(f);ie!==null&&Y(C,ie.startTime-q)}}function I(q,ie){x=!1,w&&(w=!1,S(T),T=-1),y=!0;var te=m;try{for(E(ie),g=t(h);g!==null&&(!(g.expirationTime>ie)||q&&!D());){var O=g.callback;if(typeof O=="function"){g.callback=null,m=g.priorityLevel;var ee=O(g.expirationTime<=ie);ie=a.unstable_now(),typeof ee=="function"?g.callback=ee:g===t(h)&&i(h),E(ie)}else i(h);g=t(h)}if(g!==null)var ge=!0;else{var Te=t(f);Te!==null&&Y(C,Te.startTime-ie),ge=!1}return ge}finally{g=null,m=te,y=!1}}var A=!1,N=null,T=-1,F=5,z=-1;function D(){return!(a.unstable_now()-z<F)}function G(){if(N!==null){var q=a.unstable_now();z=q;var ie=!0;try{ie=N(!0,q)}finally{ie?ne():(A=!1,N=null)}}else A=!1}var ne;if(typeof b=="function")ne=function(){b(G)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,X=se.port2;se.port1.onmessage=G,ne=function(){X.postMessage(null)}}else ne=function(){_(G,0)};function V(q){N=q,A||(A=!0,ne())}function Y(q,ie){T=_(function(){q(a.unstable_now())},ie)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(q){q.callback=null},a.unstable_continueExecution=function(){x||y||(x=!0,V(I))},a.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<q?Math.floor(1e3/q):5},a.unstable_getCurrentPriorityLevel=function(){return m},a.unstable_getFirstCallbackNode=function(){return t(h)},a.unstable_next=function(q){switch(m){case 1:case 2:case 3:var ie=3;break;default:ie=m}var te=m;m=ie;try{return q()}finally{m=te}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(q,ie){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var te=m;m=q;try{return ie()}finally{m=te}},a.unstable_scheduleCallback=function(q,ie,te){var O=a.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?O+te:O):te=O,q){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=te+ee,q={id:p++,callback:ie,priorityLevel:q,startTime:te,expirationTime:ee,sortIndex:-1},te>O?(q.sortIndex=te,e(f,q),t(h)===null&&q===t(f)&&(w?(S(T),T=-1):w=!0,Y(C,te-O))):(q.sortIndex=ee,e(h,q),x||y||(x=!0,V(I))),q},a.unstable_shouldYield=D,a.unstable_wrapCallback=function(q){var ie=m;return function(){var te=m;m=ie;try{return q.apply(this,arguments)}finally{m=te}}}})(Ih)),Ih}var M0;function n_(){return M0||(M0=1,Lh.exports=t_()),Lh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w0;function i_(){if(w0)return ni;w0=1;var a=Td(),e=n_();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function o(n,r){c(n,r),c(n+"Capture",r)}function c(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function m(n){return h.call(g,n)?!0:h.call(p,n)?!1:f.test(n)?g[n]=!0:(p[n]=!0,!1)}function y(n,r,l,d){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return d?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function x(n,r,l,d){if(r===null||typeof r>"u"||y(n,r,l,d))return!0;if(d)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function w(n,r,l,d,v,M,L){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=d,this.attributeNamespace=v,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=M,this.removeEmptyString=L}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];_[r]=new w(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(S,b);_[r]=new w(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(S,b);_[r]=new w(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(S,b);_[r]=new w(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function E(n,r,l,d){var v=_.hasOwnProperty(r)?_[r]:null;(v!==null?v.type!==0:d||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(x(r,l,v,d)&&(l=null),d||v===null?m(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):v.mustUseProperty?n[v.propertyName]=l===null?v.type===3?!1:"":l:(r=v.attributeName,d=v.attributeNamespace,l===null?n.removeAttribute(r):(v=v.type,l=v===3||v===4&&l===!0?"":""+l,d?n.setAttributeNS(d,r,l):n.setAttribute(r,l))))}var C=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),A=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),D=Symbol.for("react.context"),G=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),V=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),q=Symbol.iterator;function ie(n){return n===null||typeof n!="object"?null:(n=q&&n[q]||n["@@iterator"],typeof n=="function"?n:null)}var te=Object.assign,O;function ee(n){if(O===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var ge=!1;function Te(n,r){if(!n||ge)return"";ge=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(de){var d=de}Reflect.construct(n,[],r)}else{try{r.call()}catch(de){d=de}n.call(r.prototype)}else{try{throw Error()}catch(de){d=de}n()}}catch(de){if(de&&d&&typeof de.stack=="string"){for(var v=de.stack.split(`
`),M=d.stack.split(`
`),L=v.length-1,B=M.length-1;1<=L&&0<=B&&v[L]!==M[B];)B--;for(;1<=L&&0<=B;L--,B--)if(v[L]!==M[B]){if(L!==1||B!==1)do if(L--,B--,0>B||v[L]!==M[B]){var K=`
`+v[L].replace(" at new "," at ");return n.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",n.displayName)),K}while(1<=L&&0<=B);break}}}finally{ge=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?ee(n):""}function Se(n){switch(n.tag){case 5:return ee(n.type);case 16:return ee("Lazy");case 13:return ee("Suspense");case 19:return ee("SuspenseList");case 0:case 2:case 15:return n=Te(n.type,!1),n;case 11:return n=Te(n.type.render,!1),n;case 1:return n=Te(n.type,!0),n;default:return""}}function W(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case A:return"Portal";case F:return"Profiler";case T:return"StrictMode";case ne:return"Suspense";case se:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case D:return(n.displayName||"Context")+".Consumer";case z:return(n._context.displayName||"Context")+".Provider";case G:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case X:return r=n.displayName||null,r!==null?r:W(n.type)||"Memo";case V:r=n._payload,n=n._init;try{return W(n(r))}catch{}}return null}function me(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return W(r);case 8:return r===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function oe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Re(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Oe(n){var r=Re(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),d=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var v=l.get,M=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return v.call(this)},set:function(L){d=""+L,M.call(this,L)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return d},setValue:function(L){d=""+L},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Ce(n){n._valueTracker||(n._valueTracker=Oe(n))}function ht(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),d="";return n&&(d=Re(n)?n.checked?"true":"false":n.value),n=d,n!==l?(r.setValue(n),!0):!1}function Qe(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function pt(n,r){var l=r.checked;return te({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function wt(n,r){var l=r.defaultValue==null?"":r.defaultValue,d=r.checked!=null?r.checked:r.defaultChecked;l=oe(r.value!=null?r.value:l),n._wrapperState={initialChecked:d,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function mt(n,r){r=r.checked,r!=null&&E(n,"checked",r,!1)}function Vt(n,r){mt(n,r);var l=oe(r.value),d=r.type;if(l!=null)d==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(d==="submit"||d==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?cn(n,r.type,l):r.hasOwnProperty("defaultValue")&&cn(n,r.type,oe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ut(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var d=r.type;if(!(d!=="submit"&&d!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function cn(n,r,l){(r!=="number"||Qe(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var Z=Array.isArray;function Dt(n,r,l,d){if(n=n.options,r){r={};for(var v=0;v<l.length;v++)r["$"+l[v]]=!0;for(l=0;l<n.length;l++)v=r.hasOwnProperty("$"+n[l].value),n[l].selected!==v&&(n[l].selected=v),v&&d&&(n[l].defaultSelected=!0)}else{for(l=""+oe(l),r=null,v=0;v<n.length;v++){if(n[v].value===l){n[v].selected=!0,d&&(n[v].defaultSelected=!0);return}r!==null||n[v].disabled||(r=n[v])}r!==null&&(r.selected=!0)}}function vt(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Nt(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(Z(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:oe(l)}}function He(n,r){var l=oe(r.value),d=oe(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),d!=null&&(n.defaultValue=""+d)}function Gt(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function k(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function R(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?k(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var re,_e=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,d,v){MSApp.execUnsafeLocalFunction(function(){return n(r,l,d,v)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(re=re||document.createElement("div"),re.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=re.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function Me(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Ie={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Be=["Webkit","ms","Moz","O"];Object.keys(Ie).forEach(function(n){Be.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ie[r]=Ie[n]})});function xe(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Ie.hasOwnProperty(n)&&Ie[n]?(""+r).trim():r+"px"}function ye(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var d=l.indexOf("--")===0,v=xe(l,r[l],d);l==="float"&&(l="cssFloat"),d?n.setProperty(l,v):n[l]=v}}var We=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function je(n,r){if(r){if(We[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function De(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fe=null;function Ze(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var gt=null,Mt=null,$=null;function Ne(n){if(n=po(n)){if(typeof gt!="function")throw Error(t(280));var r=n.stateNode;r&&(r=pl(r),gt(n.stateNode,n.type,r))}}function ve(n){Mt?$?$.push(n):$=[n]:Mt=n}function Ve(){if(Mt){var n=Mt,r=$;if($=Mt=null,Ne(n),r)for(n=0;n<r.length;n++)Ne(r[n])}}function ke(n,r){return n(r)}function we(){}var et=!1;function ft(n,r,l){if(et)return n(r,l);et=!0;try{return ke(n,r,l)}finally{et=!1,(Mt!==null||$!==null)&&(we(),Ve())}}function kt(n,r){var l=n.stateNode;if(l===null)return null;var d=pl(l);if(d===null)return null;l=d[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(d=!d.disabled)||(n=n.type,d=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!d;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var nt=!1;if(u)try{var Rn={};Object.defineProperty(Rn,"passive",{get:function(){nt=!0}}),window.addEventListener("test",Rn,Rn),window.removeEventListener("test",Rn,Rn)}catch{nt=!1}function Gn(n,r,l,d,v,M,L,B,K){var de=Array.prototype.slice.call(arguments,3);try{r.apply(l,de)}catch(Ee){this.onError(Ee)}}var Ci=!1,Vn=null,sr=!1,Pr=null,Pn={onError:function(n){Ci=!0,Vn=n}};function hs(n,r,l,d,v,M,L,B,K){Ci=!1,Vn=null,Gn.apply(Pn,arguments)}function fs(n,r,l,d,v,M,L,B,K){if(hs.apply(this,arguments),Ci){if(Ci){var de=Vn;Ci=!1,Vn=null}else throw Error(t(198));sr||(sr=!0,Pr=de)}}function ai(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function ar(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Lr(n){if(ai(n)!==n)throw Error(t(188))}function or(n){var r=n.alternate;if(!r){if(r=ai(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,d=r;;){var v=l.return;if(v===null)break;var M=v.alternate;if(M===null){if(d=v.return,d!==null){l=d;continue}break}if(v.child===M.child){for(M=v.child;M;){if(M===l)return Lr(v),n;if(M===d)return Lr(v),r;M=M.sibling}throw Error(t(188))}if(l.return!==d.return)l=v,d=M;else{for(var L=!1,B=v.child;B;){if(B===l){L=!0,l=v,d=M;break}if(B===d){L=!0,d=v,l=M;break}B=B.sibling}if(!L){for(B=M.child;B;){if(B===l){L=!0,l=M,d=v;break}if(B===d){L=!0,d=M,l=v;break}B=B.sibling}if(!L)throw Error(t(189))}}if(l.alternate!==d)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function ds(n){return n=or(n),n!==null?lr(n):null}function lr(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=lr(n);if(r!==null)return r;n=n.sibling}return null}var Ai=e.unstable_scheduleCallback,Ws=e.unstable_cancelCallback,Ka=e.unstable_shouldYield,Xs=e.unstable_requestPaint,pe=e.unstable_now,Le=e.unstable_getCurrentPriorityLevel,Ae=e.unstable_ImmediatePriority,P=e.unstable_UserBlockingPriority,j=e.unstable_NormalPriority,fe=e.unstable_LowPriority,ce=e.unstable_IdlePriority,le=null,Ge=null;function Ke(n){if(Ge&&typeof Ge.onCommitFiberRoot=="function")try{Ge.onCommitFiberRoot(le,n,void 0,(n.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:_t,it=Math.log,ot=Math.LN2;function _t(n){return n>>>=0,n===0?32:31-(it(n)/ot|0)|0}var yt=64,st=4194304;function Pt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Wt(n,r){var l=n.pendingLanes;if(l===0)return 0;var d=0,v=n.suspendedLanes,M=n.pingedLanes,L=l&268435455;if(L!==0){var B=L&~v;B!==0?d=Pt(B):(M&=L,M!==0&&(d=Pt(M)))}else L=l&~v,L!==0?d=Pt(L):M!==0&&(d=Pt(M));if(d===0)return 0;if(r!==0&&r!==d&&(r&v)===0&&(v=d&-d,M=r&-r,v>=M||v===16&&(M&4194240)!==0))return r;if((d&4)!==0&&(d|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=d;0<r;)l=31-ze(r),v=1<<l,d|=n[l],r&=~v;return d}function Zt(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zt(n,r){for(var l=n.suspendedLanes,d=n.pingedLanes,v=n.expirationTimes,M=n.pendingLanes;0<M;){var L=31-ze(M),B=1<<L,K=v[L];K===-1?((B&l)===0||(B&d)!==0)&&(v[L]=Zt(B,r)):K<=r&&(n.expiredLanes|=B),M&=~B}}function un(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function qe(){var n=yt;return yt<<=1,(yt&4194240)===0&&(yt=64),n}function Ln(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function Et(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-ze(r),n[r]=l}function $n(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var d=n.eventTimes;for(n=n.expirationTimes;0<l;){var v=31-ze(l),M=1<<v;r[v]=0,d[v]=-1,n[v]=-1,l&=~M}}function Kn(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var d=31-ze(l),v=1<<d;v&r|n[d]&r&&(n[d]|=r),l&=~v}}var Tt=0;function cr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ot,qt,Ri,Bt,Pi,Xi=!1,ps=[],Ir=null,Nr=null,Fr=null,Za=new Map,Qa=new Map,Ur=[],vv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ep(n,r){switch(n){case"focusin":case"focusout":Ir=null;break;case"dragenter":case"dragleave":Nr=null;break;case"mouseover":case"mouseout":Fr=null;break;case"pointerover":case"pointerout":Za.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qa.delete(r.pointerId)}}function Ja(n,r,l,d,v,M){return n===null||n.nativeEvent!==M?(n={blockedOn:r,domEventName:l,eventSystemFlags:d,nativeEvent:M,targetContainers:[v]},r!==null&&(r=po(r),r!==null&&qt(r)),n):(n.eventSystemFlags|=d,r=n.targetContainers,v!==null&&r.indexOf(v)===-1&&r.push(v),n)}function _v(n,r,l,d,v){switch(r){case"focusin":return Ir=Ja(Ir,n,r,l,d,v),!0;case"dragenter":return Nr=Ja(Nr,n,r,l,d,v),!0;case"mouseover":return Fr=Ja(Fr,n,r,l,d,v),!0;case"pointerover":var M=v.pointerId;return Za.set(M,Ja(Za.get(M)||null,n,r,l,d,v)),!0;case"gotpointercapture":return M=v.pointerId,Qa.set(M,Ja(Qa.get(M)||null,n,r,l,d,v)),!0}return!1}function tp(n){var r=ms(n.target);if(r!==null){var l=ai(r);if(l!==null){if(r=l.tag,r===13){if(r=ar(l),r!==null){n.blockedOn=r,Pi(n.priority,function(){Ri(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function el(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=tu(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var d=new l.constructor(l.type,l);Fe=d,l.target.dispatchEvent(d),Fe=null}else return r=po(l),r!==null&&qt(r),n.blockedOn=l,!1;r.shift()}return!0}function np(n,r,l){el(n)&&l.delete(r)}function yv(){Xi=!1,Ir!==null&&el(Ir)&&(Ir=null),Nr!==null&&el(Nr)&&(Nr=null),Fr!==null&&el(Fr)&&(Fr=null),Za.forEach(np),Qa.forEach(np)}function eo(n,r){n.blockedOn===r&&(n.blockedOn=null,Xi||(Xi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,yv)))}function to(n){function r(v){return eo(v,n)}if(0<ps.length){eo(ps[0],n);for(var l=1;l<ps.length;l++){var d=ps[l];d.blockedOn===n&&(d.blockedOn=null)}}for(Ir!==null&&eo(Ir,n),Nr!==null&&eo(Nr,n),Fr!==null&&eo(Fr,n),Za.forEach(r),Qa.forEach(r),l=0;l<Ur.length;l++)d=Ur[l],d.blockedOn===n&&(d.blockedOn=null);for(;0<Ur.length&&(l=Ur[0],l.blockedOn===null);)tp(l),l.blockedOn===null&&Ur.shift()}var js=C.ReactCurrentBatchConfig,tl=!0;function Sv(n,r,l,d){var v=Tt,M=js.transition;js.transition=null;try{Tt=1,eu(n,r,l,d)}finally{Tt=v,js.transition=M}}function Mv(n,r,l,d){var v=Tt,M=js.transition;js.transition=null;try{Tt=4,eu(n,r,l,d)}finally{Tt=v,js.transition=M}}function eu(n,r,l,d){if(tl){var v=tu(n,r,l,d);if(v===null)vu(n,r,d,nl,l),ep(n,d);else if(_v(v,n,r,l,d))d.stopPropagation();else if(ep(n,d),r&4&&-1<vv.indexOf(n)){for(;v!==null;){var M=po(v);if(M!==null&&Ot(M),M=tu(n,r,l,d),M===null&&vu(n,r,d,nl,l),M===v)break;v=M}v!==null&&d.stopPropagation()}else vu(n,r,d,null,l)}}var nl=null;function tu(n,r,l,d){if(nl=null,n=Ze(d),n=ms(n),n!==null)if(r=ai(n),r===null)n=null;else if(l=r.tag,l===13){if(n=ar(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return nl=n,null}function ip(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Le()){case Ae:return 1;case P:return 4;case j:case fe:return 16;case ce:return 536870912;default:return 16}default:return 16}}var Dr=null,nu=null,il=null;function rp(){if(il)return il;var n,r=nu,l=r.length,d,v="value"in Dr?Dr.value:Dr.textContent,M=v.length;for(n=0;n<l&&r[n]===v[n];n++);var L=l-n;for(d=1;d<=L&&r[l-d]===v[M-d];d++);return il=v.slice(n,1<d?1-d:void 0)}function rl(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function sl(){return!0}function sp(){return!1}function oi(n){function r(l,d,v,M,L){this._reactName=l,this._targetInst=v,this.type=d,this.nativeEvent=M,this.target=L,this.currentTarget=null;for(var B in n)n.hasOwnProperty(B)&&(l=n[B],this[B]=l?l(M):M[B]);return this.isDefaultPrevented=(M.defaultPrevented!=null?M.defaultPrevented:M.returnValue===!1)?sl:sp,this.isPropagationStopped=sp,this}return te(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),r}var qs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},iu=oi(qs),no=te({},qs,{view:0,detail:0}),wv=oi(no),ru,su,io,al=te({},no,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==io&&(io&&n.type==="mousemove"?(ru=n.screenX-io.screenX,su=n.screenY-io.screenY):su=ru=0,io=n),ru)},movementY:function(n){return"movementY"in n?n.movementY:su}}),ap=oi(al),bv=te({},al,{dataTransfer:0}),Ev=oi(bv),Tv=te({},no,{relatedTarget:0}),au=oi(Tv),Cv=te({},qs,{animationName:0,elapsedTime:0,pseudoElement:0}),Av=oi(Cv),Rv=te({},qs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Pv=oi(Rv),Lv=te({},qs,{data:0}),op=oi(Lv),Iv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Uv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Fv[n])?!!r[n]:!1}function ou(){return Uv}var Dv=te({},no,{key:function(n){if(n.key){var r=Iv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=rl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Nv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(n){return n.type==="keypress"?rl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?rl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),kv=oi(Dv),Ov=te({},al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lp=oi(Ov),zv=te({},no,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),Bv=oi(zv),Hv=te({},qs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Gv=oi(Hv),Vv=te({},al,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Wv=oi(Vv),Xv=[9,13,27,32],lu=u&&"CompositionEvent"in window,ro=null;u&&"documentMode"in document&&(ro=document.documentMode);var jv=u&&"TextEvent"in window&&!ro,cp=u&&(!lu||ro&&8<ro&&11>=ro),up=" ",hp=!1;function fp(n,r){switch(n){case"keyup":return Xv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ys=!1;function qv(n,r){switch(n){case"compositionend":return dp(r);case"keypress":return r.which!==32?null:(hp=!0,up);case"textInput":return n=r.data,n===up&&hp?null:n;default:return null}}function Yv(n,r){if(Ys)return n==="compositionend"||!lu&&fp(n,r)?(n=rp(),il=nu=Dr=null,Ys=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return cp&&r.locale!=="ko"?null:r.data;default:return null}}var $v={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pp(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!$v[n.type]:r==="textarea"}function mp(n,r,l,d){ve(d),r=hl(r,"onChange"),0<r.length&&(l=new iu("onChange","change",null,l,d),n.push({event:l,listeners:r}))}var so=null,ao=null;function Kv(n){Np(n,0)}function ol(n){var r=Js(n);if(ht(r))return n}function Zv(n,r){if(n==="change")return r}var gp=!1;if(u){var cu;if(u){var uu="oninput"in document;if(!uu){var xp=document.createElement("div");xp.setAttribute("oninput","return;"),uu=typeof xp.oninput=="function"}cu=uu}else cu=!1;gp=cu&&(!document.documentMode||9<document.documentMode)}function vp(){so&&(so.detachEvent("onpropertychange",_p),ao=so=null)}function _p(n){if(n.propertyName==="value"&&ol(ao)){var r=[];mp(r,ao,n,Ze(n)),ft(Kv,r)}}function Qv(n,r,l){n==="focusin"?(vp(),so=r,ao=l,so.attachEvent("onpropertychange",_p)):n==="focusout"&&vp()}function Jv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return ol(ao)}function e1(n,r){if(n==="click")return ol(r)}function t1(n,r){if(n==="input"||n==="change")return ol(r)}function n1(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Li=typeof Object.is=="function"?Object.is:n1;function oo(n,r){if(Li(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),d=Object.keys(r);if(l.length!==d.length)return!1;for(d=0;d<l.length;d++){var v=l[d];if(!h.call(r,v)||!Li(n[v],r[v]))return!1}return!0}function yp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Sp(n,r){var l=yp(n);n=0;for(var d;l;){if(l.nodeType===3){if(d=n+l.textContent.length,n<=r&&d>=r)return{node:l,offset:r-n};n=d}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=yp(l)}}function Mp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Mp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function wp(){for(var n=window,r=Qe();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=Qe(n.document)}return r}function hu(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function i1(n){var r=wp(),l=n.focusedElem,d=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&Mp(l.ownerDocument.documentElement,l)){if(d!==null&&hu(l)){if(r=d.start,n=d.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var v=l.textContent.length,M=Math.min(d.start,v);d=d.end===void 0?M:Math.min(d.end,v),!n.extend&&M>d&&(v=d,d=M,M=v),v=Sp(l,M);var L=Sp(l,d);v&&L&&(n.rangeCount!==1||n.anchorNode!==v.node||n.anchorOffset!==v.offset||n.focusNode!==L.node||n.focusOffset!==L.offset)&&(r=r.createRange(),r.setStart(v.node,v.offset),n.removeAllRanges(),M>d?(n.addRange(r),n.extend(L.node,L.offset)):(r.setEnd(L.node,L.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var r1=u&&"documentMode"in document&&11>=document.documentMode,$s=null,fu=null,lo=null,du=!1;function bp(n,r,l){var d=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;du||$s==null||$s!==Qe(d)||(d=$s,"selectionStart"in d&&hu(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),lo&&oo(lo,d)||(lo=d,d=hl(fu,"onSelect"),0<d.length&&(r=new iu("onSelect","select",null,r,l),n.push({event:r,listeners:d}),r.target=$s)))}function ll(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var Ks={animationend:ll("Animation","AnimationEnd"),animationiteration:ll("Animation","AnimationIteration"),animationstart:ll("Animation","AnimationStart"),transitionend:ll("Transition","TransitionEnd")},pu={},Ep={};u&&(Ep=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function cl(n){if(pu[n])return pu[n];if(!Ks[n])return n;var r=Ks[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in Ep)return pu[n]=r[l];return n}var Tp=cl("animationend"),Cp=cl("animationiteration"),Ap=cl("animationstart"),Rp=cl("transitionend"),Pp=new Map,Lp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(n,r){Pp.set(n,r),o(r,[n])}for(var mu=0;mu<Lp.length;mu++){var gu=Lp[mu],s1=gu.toLowerCase(),a1=gu[0].toUpperCase()+gu.slice(1);kr(s1,"on"+a1)}kr(Tp,"onAnimationEnd"),kr(Cp,"onAnimationIteration"),kr(Ap,"onAnimationStart"),kr("dblclick","onDoubleClick"),kr("focusin","onFocus"),kr("focusout","onBlur"),kr(Rp,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),o1=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function Ip(n,r,l){var d=n.type||"unknown-event";n.currentTarget=l,fs(d,r,void 0,n),n.currentTarget=null}function Np(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var d=n[l],v=d.event;d=d.listeners;e:{var M=void 0;if(r)for(var L=d.length-1;0<=L;L--){var B=d[L],K=B.instance,de=B.currentTarget;if(B=B.listener,K!==M&&v.isPropagationStopped())break e;Ip(v,B,de),M=K}else for(L=0;L<d.length;L++){if(B=d[L],K=B.instance,de=B.currentTarget,B=B.listener,K!==M&&v.isPropagationStopped())break e;Ip(v,B,de),M=K}}}if(sr)throw n=Pr,sr=!1,Pr=null,n}function Yt(n,r){var l=r[bu];l===void 0&&(l=r[bu]=new Set);var d=n+"__bubble";l.has(d)||(Fp(r,n,2,!1),l.add(d))}function xu(n,r,l){var d=0;r&&(d|=4),Fp(l,n,d,r)}var ul="_reactListening"+Math.random().toString(36).slice(2);function uo(n){if(!n[ul]){n[ul]=!0,i.forEach(function(l){l!=="selectionchange"&&(o1.has(l)||xu(l,!1,n),xu(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[ul]||(r[ul]=!0,xu("selectionchange",!1,r))}}function Fp(n,r,l,d){switch(ip(r)){case 1:var v=Sv;break;case 4:v=Mv;break;default:v=eu}l=v.bind(null,r,l,n),v=void 0,!nt||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(v=!0),d?v!==void 0?n.addEventListener(r,l,{capture:!0,passive:v}):n.addEventListener(r,l,!0):v!==void 0?n.addEventListener(r,l,{passive:v}):n.addEventListener(r,l,!1)}function vu(n,r,l,d,v){var M=d;if((r&1)===0&&(r&2)===0&&d!==null)e:for(;;){if(d===null)return;var L=d.tag;if(L===3||L===4){var B=d.stateNode.containerInfo;if(B===v||B.nodeType===8&&B.parentNode===v)break;if(L===4)for(L=d.return;L!==null;){var K=L.tag;if((K===3||K===4)&&(K=L.stateNode.containerInfo,K===v||K.nodeType===8&&K.parentNode===v))return;L=L.return}for(;B!==null;){if(L=ms(B),L===null)return;if(K=L.tag,K===5||K===6){d=M=L;continue e}B=B.parentNode}}d=d.return}ft(function(){var de=M,Ee=Ze(l),Pe=[];e:{var be=Pp.get(n);if(be!==void 0){var Ye=iu,tt=n;switch(n){case"keypress":if(rl(l)===0)break e;case"keydown":case"keyup":Ye=kv;break;case"focusin":tt="focus",Ye=au;break;case"focusout":tt="blur",Ye=au;break;case"beforeblur":case"afterblur":Ye=au;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ye=ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ye=Ev;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ye=Bv;break;case Tp:case Cp:case Ap:Ye=Av;break;case Rp:Ye=Gv;break;case"scroll":Ye=wv;break;case"wheel":Ye=Wv;break;case"copy":case"cut":case"paste":Ye=Pv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ye=lp}var rt=(r&4)!==0,rn=!rt&&n==="scroll",ae=rt?be!==null?be+"Capture":null:be;rt=[];for(var J=de,ue;J!==null;){ue=J;var Ue=ue.stateNode;if(ue.tag===5&&Ue!==null&&(ue=Ue,ae!==null&&(Ue=kt(J,ae),Ue!=null&&rt.push(ho(J,Ue,ue)))),rn)break;J=J.return}0<rt.length&&(be=new Ye(be,tt,null,l,Ee),Pe.push({event:be,listeners:rt}))}}if((r&7)===0){e:{if(be=n==="mouseover"||n==="pointerover",Ye=n==="mouseout"||n==="pointerout",be&&l!==Fe&&(tt=l.relatedTarget||l.fromElement)&&(ms(tt)||tt[ur]))break e;if((Ye||be)&&(be=Ee.window===Ee?Ee:(be=Ee.ownerDocument)?be.defaultView||be.parentWindow:window,Ye?(tt=l.relatedTarget||l.toElement,Ye=de,tt=tt?ms(tt):null,tt!==null&&(rn=ai(tt),tt!==rn||tt.tag!==5&&tt.tag!==6)&&(tt=null)):(Ye=null,tt=de),Ye!==tt)){if(rt=ap,Ue="onMouseLeave",ae="onMouseEnter",J="mouse",(n==="pointerout"||n==="pointerover")&&(rt=lp,Ue="onPointerLeave",ae="onPointerEnter",J="pointer"),rn=Ye==null?be:Js(Ye),ue=tt==null?be:Js(tt),be=new rt(Ue,J+"leave",Ye,l,Ee),be.target=rn,be.relatedTarget=ue,Ue=null,ms(Ee)===de&&(rt=new rt(ae,J+"enter",tt,l,Ee),rt.target=ue,rt.relatedTarget=rn,Ue=rt),rn=Ue,Ye&&tt)t:{for(rt=Ye,ae=tt,J=0,ue=rt;ue;ue=Zs(ue))J++;for(ue=0,Ue=ae;Ue;Ue=Zs(Ue))ue++;for(;0<J-ue;)rt=Zs(rt),J--;for(;0<ue-J;)ae=Zs(ae),ue--;for(;J--;){if(rt===ae||ae!==null&&rt===ae.alternate)break t;rt=Zs(rt),ae=Zs(ae)}rt=null}else rt=null;Ye!==null&&Up(Pe,be,Ye,rt,!1),tt!==null&&rn!==null&&Up(Pe,rn,tt,rt,!0)}}e:{if(be=de?Js(de):window,Ye=be.nodeName&&be.nodeName.toLowerCase(),Ye==="select"||Ye==="input"&&be.type==="file")var at=Zv;else if(pp(be))if(gp)at=t1;else{at=Jv;var lt=Qv}else(Ye=be.nodeName)&&Ye.toLowerCase()==="input"&&(be.type==="checkbox"||be.type==="radio")&&(at=e1);if(at&&(at=at(n,de))){mp(Pe,at,l,Ee);break e}lt&&lt(n,be,de),n==="focusout"&&(lt=be._wrapperState)&&lt.controlled&&be.type==="number"&&cn(be,"number",be.value)}switch(lt=de?Js(de):window,n){case"focusin":(pp(lt)||lt.contentEditable==="true")&&($s=lt,fu=de,lo=null);break;case"focusout":lo=fu=$s=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,bp(Pe,l,Ee);break;case"selectionchange":if(r1)break;case"keydown":case"keyup":bp(Pe,l,Ee)}var ct;if(lu)e:{switch(n){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else Ys?fp(n,l)&&(xt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(xt="onCompositionStart");xt&&(cp&&l.locale!=="ko"&&(Ys||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&Ys&&(ct=rp()):(Dr=Ee,nu="value"in Dr?Dr.value:Dr.textContent,Ys=!0)),lt=hl(de,xt),0<lt.length&&(xt=new op(xt,n,null,l,Ee),Pe.push({event:xt,listeners:lt}),ct?xt.data=ct:(ct=dp(l),ct!==null&&(xt.data=ct)))),(ct=jv?qv(n,l):Yv(n,l))&&(de=hl(de,"onBeforeInput"),0<de.length&&(Ee=new op("onBeforeInput","beforeinput",null,l,Ee),Pe.push({event:Ee,listeners:de}),Ee.data=ct))}Np(Pe,r)})}function ho(n,r,l){return{instance:n,listener:r,currentTarget:l}}function hl(n,r){for(var l=r+"Capture",d=[];n!==null;){var v=n,M=v.stateNode;v.tag===5&&M!==null&&(v=M,M=kt(n,l),M!=null&&d.unshift(ho(n,M,v)),M=kt(n,r),M!=null&&d.push(ho(n,M,v))),n=n.return}return d}function Zs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Up(n,r,l,d,v){for(var M=r._reactName,L=[];l!==null&&l!==d;){var B=l,K=B.alternate,de=B.stateNode;if(K!==null&&K===d)break;B.tag===5&&de!==null&&(B=de,v?(K=kt(l,M),K!=null&&L.unshift(ho(l,K,B))):v||(K=kt(l,M),K!=null&&L.push(ho(l,K,B)))),l=l.return}L.length!==0&&n.push({event:r,listeners:L})}var l1=/\r\n?/g,c1=/\u0000|\uFFFD/g;function Dp(n){return(typeof n=="string"?n:""+n).replace(l1,`
`).replace(c1,"")}function fl(n,r,l){if(r=Dp(r),Dp(n)!==r&&l)throw Error(t(425))}function dl(){}var _u=null,yu=null;function Su(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Mu=typeof setTimeout=="function"?setTimeout:void 0,u1=typeof clearTimeout=="function"?clearTimeout:void 0,kp=typeof Promise=="function"?Promise:void 0,h1=typeof queueMicrotask=="function"?queueMicrotask:typeof kp<"u"?function(n){return kp.resolve(null).then(n).catch(f1)}:Mu;function f1(n){setTimeout(function(){throw n})}function wu(n,r){var l=r,d=0;do{var v=l.nextSibling;if(n.removeChild(l),v&&v.nodeType===8)if(l=v.data,l==="/$"){if(d===0){n.removeChild(v),to(r);return}d--}else l!=="$"&&l!=="$?"&&l!=="$!"||d++;l=v}while(l);to(r)}function Or(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Op(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),ji="__reactFiber$"+Qs,fo="__reactProps$"+Qs,ur="__reactContainer$"+Qs,bu="__reactEvents$"+Qs,d1="__reactListeners$"+Qs,p1="__reactHandles$"+Qs;function ms(n){var r=n[ji];if(r)return r;for(var l=n.parentNode;l;){if(r=l[ur]||l[ji]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=Op(n);n!==null;){if(l=n[ji])return l;n=Op(n)}return r}n=l,l=n.parentNode}return null}function po(n){return n=n[ji]||n[ur],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Js(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function pl(n){return n[fo]||null}var Eu=[],ea=-1;function zr(n){return{current:n}}function $t(n){0>ea||(n.current=Eu[ea],Eu[ea]=null,ea--)}function Xt(n,r){ea++,Eu[ea]=n.current,n.current=r}var Br={},Un=zr(Br),Zn=zr(!1),gs=Br;function ta(n,r){var l=n.type.contextTypes;if(!l)return Br;var d=n.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===r)return d.__reactInternalMemoizedMaskedChildContext;var v={},M;for(M in l)v[M]=r[M];return d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=v),v}function Qn(n){return n=n.childContextTypes,n!=null}function ml(){$t(Zn),$t(Un)}function zp(n,r,l){if(Un.current!==Br)throw Error(t(168));Xt(Un,r),Xt(Zn,l)}function Bp(n,r,l){var d=n.stateNode;if(r=r.childContextTypes,typeof d.getChildContext!="function")return l;d=d.getChildContext();for(var v in d)if(!(v in r))throw Error(t(108,me(n)||"Unknown",v));return te({},l,d)}function gl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Br,gs=Un.current,Xt(Un,n),Xt(Zn,Zn.current),!0}function Hp(n,r,l){var d=n.stateNode;if(!d)throw Error(t(169));l?(n=Bp(n,r,gs),d.__reactInternalMemoizedMergedChildContext=n,$t(Zn),$t(Un),Xt(Un,n)):$t(Zn),Xt(Zn,l)}var hr=null,xl=!1,Tu=!1;function Gp(n){hr===null?hr=[n]:hr.push(n)}function m1(n){xl=!0,Gp(n)}function Hr(){if(!Tu&&hr!==null){Tu=!0;var n=0,r=Tt;try{var l=hr;for(Tt=1;n<l.length;n++){var d=l[n];do d=d(!0);while(d!==null)}hr=null,xl=!1}catch(v){throw hr!==null&&(hr=hr.slice(n+1)),Ai(Ae,Hr),v}finally{Tt=r,Tu=!1}}return null}var na=[],ia=0,vl=null,_l=0,_i=[],yi=0,xs=null,fr=1,dr="";function vs(n,r){na[ia++]=_l,na[ia++]=vl,vl=n,_l=r}function Vp(n,r,l){_i[yi++]=fr,_i[yi++]=dr,_i[yi++]=xs,xs=n;var d=fr;n=dr;var v=32-ze(d)-1;d&=~(1<<v),l+=1;var M=32-ze(r)+v;if(30<M){var L=v-v%5;M=(d&(1<<L)-1).toString(32),d>>=L,v-=L,fr=1<<32-ze(r)+v|l<<v|d,dr=M+n}else fr=1<<M|l<<v|d,dr=n}function Cu(n){n.return!==null&&(vs(n,1),Vp(n,1,0))}function Au(n){for(;n===vl;)vl=na[--ia],na[ia]=null,_l=na[--ia],na[ia]=null;for(;n===xs;)xs=_i[--yi],_i[yi]=null,dr=_i[--yi],_i[yi]=null,fr=_i[--yi],_i[yi]=null}var li=null,ci=null,Qt=!1,Ii=null;function Wp(n,r){var l=bi(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Xp(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,li=n,ci=Or(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,li=n,ci=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=xs!==null?{id:fr,overflow:dr}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=bi(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,li=n,ci=null,!0):!1;default:return!1}}function Ru(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Pu(n){if(Qt){var r=ci;if(r){var l=r;if(!Xp(n,r)){if(Ru(n))throw Error(t(418));r=Or(l.nextSibling);var d=li;r&&Xp(n,r)?Wp(d,l):(n.flags=n.flags&-4097|2,Qt=!1,li=n)}}else{if(Ru(n))throw Error(t(418));n.flags=n.flags&-4097|2,Qt=!1,li=n}}}function jp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;li=n}function yl(n){if(n!==li)return!1;if(!Qt)return jp(n),Qt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Su(n.type,n.memoizedProps)),r&&(r=ci)){if(Ru(n))throw qp(),Error(t(418));for(;r;)Wp(n,r),r=Or(r.nextSibling)}if(jp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){ci=Or(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}ci=null}}else ci=li?Or(n.stateNode.nextSibling):null;return!0}function qp(){for(var n=ci;n;)n=Or(n.nextSibling)}function ra(){ci=li=null,Qt=!1}function Lu(n){Ii===null?Ii=[n]:Ii.push(n)}var g1=C.ReactCurrentBatchConfig;function mo(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var d=l.stateNode}if(!d)throw Error(t(147,n));var v=d,M=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===M?r.ref:(r=function(L){var B=v.refs;L===null?delete B[M]:B[M]=L},r._stringRef=M,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function Sl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Yp(n){var r=n._init;return r(n._payload)}function $p(n){function r(ae,J){if(n){var ue=ae.deletions;ue===null?(ae.deletions=[J],ae.flags|=16):ue.push(J)}}function l(ae,J){if(!n)return null;for(;J!==null;)r(ae,J),J=J.sibling;return null}function d(ae,J){for(ae=new Map;J!==null;)J.key!==null?ae.set(J.key,J):ae.set(J.index,J),J=J.sibling;return ae}function v(ae,J){return ae=$r(ae,J),ae.index=0,ae.sibling=null,ae}function M(ae,J,ue){return ae.index=ue,n?(ue=ae.alternate,ue!==null?(ue=ue.index,ue<J?(ae.flags|=2,J):ue):(ae.flags|=2,J)):(ae.flags|=1048576,J)}function L(ae){return n&&ae.alternate===null&&(ae.flags|=2),ae}function B(ae,J,ue,Ue){return J===null||J.tag!==6?(J=Mh(ue,ae.mode,Ue),J.return=ae,J):(J=v(J,ue),J.return=ae,J)}function K(ae,J,ue,Ue){var at=ue.type;return at===N?Ee(ae,J,ue.props.children,Ue,ue.key):J!==null&&(J.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===V&&Yp(at)===J.type)?(Ue=v(J,ue.props),Ue.ref=mo(ae,J,ue),Ue.return=ae,Ue):(Ue=Xl(ue.type,ue.key,ue.props,null,ae.mode,Ue),Ue.ref=mo(ae,J,ue),Ue.return=ae,Ue)}function de(ae,J,ue,Ue){return J===null||J.tag!==4||J.stateNode.containerInfo!==ue.containerInfo||J.stateNode.implementation!==ue.implementation?(J=wh(ue,ae.mode,Ue),J.return=ae,J):(J=v(J,ue.children||[]),J.return=ae,J)}function Ee(ae,J,ue,Ue,at){return J===null||J.tag!==7?(J=Ts(ue,ae.mode,Ue,at),J.return=ae,J):(J=v(J,ue),J.return=ae,J)}function Pe(ae,J,ue){if(typeof J=="string"&&J!==""||typeof J=="number")return J=Mh(""+J,ae.mode,ue),J.return=ae,J;if(typeof J=="object"&&J!==null){switch(J.$$typeof){case I:return ue=Xl(J.type,J.key,J.props,null,ae.mode,ue),ue.ref=mo(ae,null,J),ue.return=ae,ue;case A:return J=wh(J,ae.mode,ue),J.return=ae,J;case V:var Ue=J._init;return Pe(ae,Ue(J._payload),ue)}if(Z(J)||ie(J))return J=Ts(J,ae.mode,ue,null),J.return=ae,J;Sl(ae,J)}return null}function be(ae,J,ue,Ue){var at=J!==null?J.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number")return at!==null?null:B(ae,J,""+ue,Ue);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case I:return ue.key===at?K(ae,J,ue,Ue):null;case A:return ue.key===at?de(ae,J,ue,Ue):null;case V:return at=ue._init,be(ae,J,at(ue._payload),Ue)}if(Z(ue)||ie(ue))return at!==null?null:Ee(ae,J,ue,Ue,null);Sl(ae,ue)}return null}function Ye(ae,J,ue,Ue,at){if(typeof Ue=="string"&&Ue!==""||typeof Ue=="number")return ae=ae.get(ue)||null,B(J,ae,""+Ue,at);if(typeof Ue=="object"&&Ue!==null){switch(Ue.$$typeof){case I:return ae=ae.get(Ue.key===null?ue:Ue.key)||null,K(J,ae,Ue,at);case A:return ae=ae.get(Ue.key===null?ue:Ue.key)||null,de(J,ae,Ue,at);case V:var lt=Ue._init;return Ye(ae,J,ue,lt(Ue._payload),at)}if(Z(Ue)||ie(Ue))return ae=ae.get(ue)||null,Ee(J,ae,Ue,at,null);Sl(J,Ue)}return null}function tt(ae,J,ue,Ue){for(var at=null,lt=null,ct=J,xt=J=0,En=null;ct!==null&&xt<ue.length;xt++){ct.index>xt?(En=ct,ct=null):En=ct.sibling;var Ft=be(ae,ct,ue[xt],Ue);if(Ft===null){ct===null&&(ct=En);break}n&&ct&&Ft.alternate===null&&r(ae,ct),J=M(Ft,J,xt),lt===null?at=Ft:lt.sibling=Ft,lt=Ft,ct=En}if(xt===ue.length)return l(ae,ct),Qt&&vs(ae,xt),at;if(ct===null){for(;xt<ue.length;xt++)ct=Pe(ae,ue[xt],Ue),ct!==null&&(J=M(ct,J,xt),lt===null?at=ct:lt.sibling=ct,lt=ct);return Qt&&vs(ae,xt),at}for(ct=d(ae,ct);xt<ue.length;xt++)En=Ye(ct,ae,xt,ue[xt],Ue),En!==null&&(n&&En.alternate!==null&&ct.delete(En.key===null?xt:En.key),J=M(En,J,xt),lt===null?at=En:lt.sibling=En,lt=En);return n&&ct.forEach(function(Kr){return r(ae,Kr)}),Qt&&vs(ae,xt),at}function rt(ae,J,ue,Ue){var at=ie(ue);if(typeof at!="function")throw Error(t(150));if(ue=at.call(ue),ue==null)throw Error(t(151));for(var lt=at=null,ct=J,xt=J=0,En=null,Ft=ue.next();ct!==null&&!Ft.done;xt++,Ft=ue.next()){ct.index>xt?(En=ct,ct=null):En=ct.sibling;var Kr=be(ae,ct,Ft.value,Ue);if(Kr===null){ct===null&&(ct=En);break}n&&ct&&Kr.alternate===null&&r(ae,ct),J=M(Kr,J,xt),lt===null?at=Kr:lt.sibling=Kr,lt=Kr,ct=En}if(Ft.done)return l(ae,ct),Qt&&vs(ae,xt),at;if(ct===null){for(;!Ft.done;xt++,Ft=ue.next())Ft=Pe(ae,Ft.value,Ue),Ft!==null&&(J=M(Ft,J,xt),lt===null?at=Ft:lt.sibling=Ft,lt=Ft);return Qt&&vs(ae,xt),at}for(ct=d(ae,ct);!Ft.done;xt++,Ft=ue.next())Ft=Ye(ct,ae,xt,Ft.value,Ue),Ft!==null&&(n&&Ft.alternate!==null&&ct.delete(Ft.key===null?xt:Ft.key),J=M(Ft,J,xt),lt===null?at=Ft:lt.sibling=Ft,lt=Ft);return n&&ct.forEach(function($1){return r(ae,$1)}),Qt&&vs(ae,xt),at}function rn(ae,J,ue,Ue){if(typeof ue=="object"&&ue!==null&&ue.type===N&&ue.key===null&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case I:e:{for(var at=ue.key,lt=J;lt!==null;){if(lt.key===at){if(at=ue.type,at===N){if(lt.tag===7){l(ae,lt.sibling),J=v(lt,ue.props.children),J.return=ae,ae=J;break e}}else if(lt.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===V&&Yp(at)===lt.type){l(ae,lt.sibling),J=v(lt,ue.props),J.ref=mo(ae,lt,ue),J.return=ae,ae=J;break e}l(ae,lt);break}else r(ae,lt);lt=lt.sibling}ue.type===N?(J=Ts(ue.props.children,ae.mode,Ue,ue.key),J.return=ae,ae=J):(Ue=Xl(ue.type,ue.key,ue.props,null,ae.mode,Ue),Ue.ref=mo(ae,J,ue),Ue.return=ae,ae=Ue)}return L(ae);case A:e:{for(lt=ue.key;J!==null;){if(J.key===lt)if(J.tag===4&&J.stateNode.containerInfo===ue.containerInfo&&J.stateNode.implementation===ue.implementation){l(ae,J.sibling),J=v(J,ue.children||[]),J.return=ae,ae=J;break e}else{l(ae,J);break}else r(ae,J);J=J.sibling}J=wh(ue,ae.mode,Ue),J.return=ae,ae=J}return L(ae);case V:return lt=ue._init,rn(ae,J,lt(ue._payload),Ue)}if(Z(ue))return tt(ae,J,ue,Ue);if(ie(ue))return rt(ae,J,ue,Ue);Sl(ae,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"?(ue=""+ue,J!==null&&J.tag===6?(l(ae,J.sibling),J=v(J,ue),J.return=ae,ae=J):(l(ae,J),J=Mh(ue,ae.mode,Ue),J.return=ae,ae=J),L(ae)):l(ae,J)}return rn}var sa=$p(!0),Kp=$p(!1),Ml=zr(null),wl=null,aa=null,Iu=null;function Nu(){Iu=aa=wl=null}function Fu(n){var r=Ml.current;$t(Ml),n._currentValue=r}function Uu(n,r,l){for(;n!==null;){var d=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,d!==null&&(d.childLanes|=r)):d!==null&&(d.childLanes&r)!==r&&(d.childLanes|=r),n===l)break;n=n.return}}function oa(n,r){wl=n,Iu=aa=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Jn=!0),n.firstContext=null)}function Si(n){var r=n._currentValue;if(Iu!==n)if(n={context:n,memoizedValue:r,next:null},aa===null){if(wl===null)throw Error(t(308));aa=n,wl.dependencies={lanes:0,firstContext:n}}else aa=aa.next=n;return r}var _s=null;function Du(n){_s===null?_s=[n]:_s.push(n)}function Zp(n,r,l,d){var v=r.interleaved;return v===null?(l.next=l,Du(r)):(l.next=v.next,v.next=l),r.interleaved=l,pr(n,d)}function pr(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Gr=!1;function ku(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function mr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Vr(n,r,l){var d=n.updateQueue;if(d===null)return null;if(d=d.shared,(Lt&2)!==0){var v=d.pending;return v===null?r.next=r:(r.next=v.next,v.next=r),d.pending=r,pr(n,l)}return v=d.interleaved,v===null?(r.next=r,Du(d)):(r.next=v.next,v.next=r),d.interleaved=r,pr(n,l)}function bl(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,Kn(n,l)}}function Jp(n,r){var l=n.updateQueue,d=n.alternate;if(d!==null&&(d=d.updateQueue,l===d)){var v=null,M=null;if(l=l.firstBaseUpdate,l!==null){do{var L={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};M===null?v=M=L:M=M.next=L,l=l.next}while(l!==null);M===null?v=M=r:M=M.next=r}else v=M=r;l={baseState:d.baseState,firstBaseUpdate:v,lastBaseUpdate:M,shared:d.shared,effects:d.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function El(n,r,l,d){var v=n.updateQueue;Gr=!1;var M=v.firstBaseUpdate,L=v.lastBaseUpdate,B=v.shared.pending;if(B!==null){v.shared.pending=null;var K=B,de=K.next;K.next=null,L===null?M=de:L.next=de,L=K;var Ee=n.alternate;Ee!==null&&(Ee=Ee.updateQueue,B=Ee.lastBaseUpdate,B!==L&&(B===null?Ee.firstBaseUpdate=de:B.next=de,Ee.lastBaseUpdate=K))}if(M!==null){var Pe=v.baseState;L=0,Ee=de=K=null,B=M;do{var be=B.lane,Ye=B.eventTime;if((d&be)===be){Ee!==null&&(Ee=Ee.next={eventTime:Ye,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var tt=n,rt=B;switch(be=r,Ye=l,rt.tag){case 1:if(tt=rt.payload,typeof tt=="function"){Pe=tt.call(Ye,Pe,be);break e}Pe=tt;break e;case 3:tt.flags=tt.flags&-65537|128;case 0:if(tt=rt.payload,be=typeof tt=="function"?tt.call(Ye,Pe,be):tt,be==null)break e;Pe=te({},Pe,be);break e;case 2:Gr=!0}}B.callback!==null&&B.lane!==0&&(n.flags|=64,be=v.effects,be===null?v.effects=[B]:be.push(B))}else Ye={eventTime:Ye,lane:be,tag:B.tag,payload:B.payload,callback:B.callback,next:null},Ee===null?(de=Ee=Ye,K=Pe):Ee=Ee.next=Ye,L|=be;if(B=B.next,B===null){if(B=v.shared.pending,B===null)break;be=B,B=be.next,be.next=null,v.lastBaseUpdate=be,v.shared.pending=null}}while(!0);if(Ee===null&&(K=Pe),v.baseState=K,v.firstBaseUpdate=de,v.lastBaseUpdate=Ee,r=v.shared.interleaved,r!==null){v=r;do L|=v.lane,v=v.next;while(v!==r)}else M===null&&(v.shared.lanes=0);Ms|=L,n.lanes=L,n.memoizedState=Pe}}function em(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var d=n[r],v=d.callback;if(v!==null){if(d.callback=null,d=l,typeof v!="function")throw Error(t(191,v));v.call(d)}}}var go={},qi=zr(go),xo=zr(go),vo=zr(go);function ys(n){if(n===go)throw Error(t(174));return n}function Ou(n,r){switch(Xt(vo,r),Xt(xo,n),Xt(qi,go),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:R(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=R(r,n)}$t(qi),Xt(qi,r)}function la(){$t(qi),$t(xo),$t(vo)}function tm(n){ys(vo.current);var r=ys(qi.current),l=R(r,n.type);r!==l&&(Xt(xo,n),Xt(qi,l))}function zu(n){xo.current===n&&($t(qi),$t(xo))}var Jt=zr(0);function Tl(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Bu=[];function Hu(){for(var n=0;n<Bu.length;n++)Bu[n]._workInProgressVersionPrimary=null;Bu.length=0}var Cl=C.ReactCurrentDispatcher,Gu=C.ReactCurrentBatchConfig,Ss=0,en=null,mn=null,wn=null,Al=!1,_o=!1,yo=0,x1=0;function Dn(){throw Error(t(321))}function Vu(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!Li(n[l],r[l]))return!1;return!0}function Wu(n,r,l,d,v,M){if(Ss=M,en=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Cl.current=n===null||n.memoizedState===null?S1:M1,n=l(d,v),_o){M=0;do{if(_o=!1,yo=0,25<=M)throw Error(t(301));M+=1,wn=mn=null,r.updateQueue=null,Cl.current=w1,n=l(d,v)}while(_o)}if(Cl.current=Ll,r=mn!==null&&mn.next!==null,Ss=0,wn=mn=en=null,Al=!1,r)throw Error(t(300));return n}function Xu(){var n=yo!==0;return yo=0,n}function Yi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return wn===null?en.memoizedState=wn=n:wn=wn.next=n,wn}function Mi(){if(mn===null){var n=en.alternate;n=n!==null?n.memoizedState:null}else n=mn.next;var r=wn===null?en.memoizedState:wn.next;if(r!==null)wn=r,mn=n;else{if(n===null)throw Error(t(310));mn=n,n={memoizedState:mn.memoizedState,baseState:mn.baseState,baseQueue:mn.baseQueue,queue:mn.queue,next:null},wn===null?en.memoizedState=wn=n:wn=wn.next=n}return wn}function So(n,r){return typeof r=="function"?r(n):r}function ju(n){var r=Mi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=mn,v=d.baseQueue,M=l.pending;if(M!==null){if(v!==null){var L=v.next;v.next=M.next,M.next=L}d.baseQueue=v=M,l.pending=null}if(v!==null){M=v.next,d=d.baseState;var B=L=null,K=null,de=M;do{var Ee=de.lane;if((Ss&Ee)===Ee)K!==null&&(K=K.next={lane:0,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),d=de.hasEagerState?de.eagerState:n(d,de.action);else{var Pe={lane:Ee,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null};K===null?(B=K=Pe,L=d):K=K.next=Pe,en.lanes|=Ee,Ms|=Ee}de=de.next}while(de!==null&&de!==M);K===null?L=d:K.next=B,Li(d,r.memoizedState)||(Jn=!0),r.memoizedState=d,r.baseState=L,r.baseQueue=K,l.lastRenderedState=d}if(n=l.interleaved,n!==null){v=n;do M=v.lane,en.lanes|=M,Ms|=M,v=v.next;while(v!==n)}else v===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function qu(n){var r=Mi(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var d=l.dispatch,v=l.pending,M=r.memoizedState;if(v!==null){l.pending=null;var L=v=v.next;do M=n(M,L.action),L=L.next;while(L!==v);Li(M,r.memoizedState)||(Jn=!0),r.memoizedState=M,r.baseQueue===null&&(r.baseState=M),l.lastRenderedState=M}return[M,d]}function nm(){}function im(n,r){var l=en,d=Mi(),v=r(),M=!Li(d.memoizedState,v);if(M&&(d.memoizedState=v,Jn=!0),d=d.queue,Yu(am.bind(null,l,d,n),[n]),d.getSnapshot!==r||M||wn!==null&&wn.memoizedState.tag&1){if(l.flags|=2048,Mo(9,sm.bind(null,l,d,v,r),void 0,null),bn===null)throw Error(t(349));(Ss&30)!==0||rm(l,r,v)}return v}function rm(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=en.updateQueue,r===null?(r={lastEffect:null,stores:null},en.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function sm(n,r,l,d){r.value=l,r.getSnapshot=d,om(r)&&lm(n)}function am(n,r,l){return l(function(){om(r)&&lm(n)})}function om(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!Li(n,l)}catch{return!0}}function lm(n){var r=pr(n,1);r!==null&&Di(r,n,1,-1)}function cm(n){var r=Yi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:So,lastRenderedState:n},r.queue=n,n=n.dispatch=y1.bind(null,en,n),[r.memoizedState,n]}function Mo(n,r,l,d){return n={tag:n,create:r,destroy:l,deps:d,next:null},r=en.updateQueue,r===null?(r={lastEffect:null,stores:null},en.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(d=l.next,l.next=n,n.next=d,r.lastEffect=n)),n}function um(){return Mi().memoizedState}function Rl(n,r,l,d){var v=Yi();en.flags|=n,v.memoizedState=Mo(1|r,l,void 0,d===void 0?null:d)}function Pl(n,r,l,d){var v=Mi();d=d===void 0?null:d;var M=void 0;if(mn!==null){var L=mn.memoizedState;if(M=L.destroy,d!==null&&Vu(d,L.deps)){v.memoizedState=Mo(r,l,M,d);return}}en.flags|=n,v.memoizedState=Mo(1|r,l,M,d)}function hm(n,r){return Rl(8390656,8,n,r)}function Yu(n,r){return Pl(2048,8,n,r)}function fm(n,r){return Pl(4,2,n,r)}function dm(n,r){return Pl(4,4,n,r)}function pm(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function mm(n,r,l){return l=l!=null?l.concat([n]):null,Pl(4,4,pm.bind(null,r,n),l)}function $u(){}function gm(n,r){var l=Mi();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&Vu(r,d[1])?d[0]:(l.memoizedState=[n,r],n)}function xm(n,r){var l=Mi();r=r===void 0?null:r;var d=l.memoizedState;return d!==null&&r!==null&&Vu(r,d[1])?d[0]:(n=n(),l.memoizedState=[n,r],n)}function vm(n,r,l){return(Ss&21)===0?(n.baseState&&(n.baseState=!1,Jn=!0),n.memoizedState=l):(Li(l,r)||(l=qe(),en.lanes|=l,Ms|=l,n.baseState=!0),r)}function v1(n,r){var l=Tt;Tt=l!==0&&4>l?l:4,n(!0);var d=Gu.transition;Gu.transition={};try{n(!1),r()}finally{Tt=l,Gu.transition=d}}function _m(){return Mi().memoizedState}function _1(n,r,l){var d=qr(n);if(l={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null},ym(n))Sm(r,l);else if(l=Zp(n,r,l,d),l!==null){var v=Xn();Di(l,n,d,v),Mm(l,r,d)}}function y1(n,r,l){var d=qr(n),v={lane:d,action:l,hasEagerState:!1,eagerState:null,next:null};if(ym(n))Sm(r,v);else{var M=n.alternate;if(n.lanes===0&&(M===null||M.lanes===0)&&(M=r.lastRenderedReducer,M!==null))try{var L=r.lastRenderedState,B=M(L,l);if(v.hasEagerState=!0,v.eagerState=B,Li(B,L)){var K=r.interleaved;K===null?(v.next=v,Du(r)):(v.next=K.next,K.next=v),r.interleaved=v;return}}catch{}finally{}l=Zp(n,r,v,d),l!==null&&(v=Xn(),Di(l,n,d,v),Mm(l,r,d))}}function ym(n){var r=n.alternate;return n===en||r!==null&&r===en}function Sm(n,r){_o=Al=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function Mm(n,r,l){if((l&4194240)!==0){var d=r.lanes;d&=n.pendingLanes,l|=d,r.lanes=l,Kn(n,l)}}var Ll={readContext:Si,useCallback:Dn,useContext:Dn,useEffect:Dn,useImperativeHandle:Dn,useInsertionEffect:Dn,useLayoutEffect:Dn,useMemo:Dn,useReducer:Dn,useRef:Dn,useState:Dn,useDebugValue:Dn,useDeferredValue:Dn,useTransition:Dn,useMutableSource:Dn,useSyncExternalStore:Dn,useId:Dn,unstable_isNewReconciler:!1},S1={readContext:Si,useCallback:function(n,r){return Yi().memoizedState=[n,r===void 0?null:r],n},useContext:Si,useEffect:hm,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,Rl(4194308,4,pm.bind(null,r,n),l)},useLayoutEffect:function(n,r){return Rl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Rl(4,2,n,r)},useMemo:function(n,r){var l=Yi();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var d=Yi();return r=l!==void 0?l(r):r,d.memoizedState=d.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},d.queue=n,n=n.dispatch=_1.bind(null,en,n),[d.memoizedState,n]},useRef:function(n){var r=Yi();return n={current:n},r.memoizedState=n},useState:cm,useDebugValue:$u,useDeferredValue:function(n){return Yi().memoizedState=n},useTransition:function(){var n=cm(!1),r=n[0];return n=v1.bind(null,n[1]),Yi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var d=en,v=Yi();if(Qt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),bn===null)throw Error(t(349));(Ss&30)!==0||rm(d,r,l)}v.memoizedState=l;var M={value:l,getSnapshot:r};return v.queue=M,hm(am.bind(null,d,M,n),[n]),d.flags|=2048,Mo(9,sm.bind(null,d,M,l,r),void 0,null),l},useId:function(){var n=Yi(),r=bn.identifierPrefix;if(Qt){var l=dr,d=fr;l=(d&~(1<<32-ze(d)-1)).toString(32)+l,r=":"+r+"R"+l,l=yo++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=x1++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},M1={readContext:Si,useCallback:gm,useContext:Si,useEffect:Yu,useImperativeHandle:mm,useInsertionEffect:fm,useLayoutEffect:dm,useMemo:xm,useReducer:ju,useRef:um,useState:function(){return ju(So)},useDebugValue:$u,useDeferredValue:function(n){var r=Mi();return vm(r,mn.memoizedState,n)},useTransition:function(){var n=ju(So)[0],r=Mi().memoizedState;return[n,r]},useMutableSource:nm,useSyncExternalStore:im,useId:_m,unstable_isNewReconciler:!1},w1={readContext:Si,useCallback:gm,useContext:Si,useEffect:Yu,useImperativeHandle:mm,useInsertionEffect:fm,useLayoutEffect:dm,useMemo:xm,useReducer:qu,useRef:um,useState:function(){return qu(So)},useDebugValue:$u,useDeferredValue:function(n){var r=Mi();return mn===null?r.memoizedState=n:vm(r,mn.memoizedState,n)},useTransition:function(){var n=qu(So)[0],r=Mi().memoizedState;return[n,r]},useMutableSource:nm,useSyncExternalStore:im,useId:_m,unstable_isNewReconciler:!1};function Ni(n,r){if(n&&n.defaultProps){r=te({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Ku(n,r,l,d){r=n.memoizedState,l=l(d,r),l=l==null?r:te({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var Il={isMounted:function(n){return(n=n._reactInternals)?ai(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var d=Xn(),v=qr(n),M=mr(d,v);M.payload=r,l!=null&&(M.callback=l),r=Vr(n,M,v),r!==null&&(Di(r,n,v,d),bl(r,n,v))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var d=Xn(),v=qr(n),M=mr(d,v);M.tag=1,M.payload=r,l!=null&&(M.callback=l),r=Vr(n,M,v),r!==null&&(Di(r,n,v,d),bl(r,n,v))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Xn(),d=qr(n),v=mr(l,d);v.tag=2,r!=null&&(v.callback=r),r=Vr(n,v,d),r!==null&&(Di(r,n,d,l),bl(r,n,d))}};function wm(n,r,l,d,v,M,L){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(d,M,L):r.prototype&&r.prototype.isPureReactComponent?!oo(l,d)||!oo(v,M):!0}function bm(n,r,l){var d=!1,v=Br,M=r.contextType;return typeof M=="object"&&M!==null?M=Si(M):(v=Qn(r)?gs:Un.current,d=r.contextTypes,M=(d=d!=null)?ta(n,v):Br),r=new r(l,M),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Il,n.stateNode=r,r._reactInternals=n,d&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=v,n.__reactInternalMemoizedMaskedChildContext=M),r}function Em(n,r,l,d){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,d),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,d),r.state!==n&&Il.enqueueReplaceState(r,r.state,null)}function Zu(n,r,l,d){var v=n.stateNode;v.props=l,v.state=n.memoizedState,v.refs={},ku(n);var M=r.contextType;typeof M=="object"&&M!==null?v.context=Si(M):(M=Qn(r)?gs:Un.current,v.context=ta(n,M)),v.state=n.memoizedState,M=r.getDerivedStateFromProps,typeof M=="function"&&(Ku(n,r,M,l),v.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof v.getSnapshotBeforeUpdate=="function"||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(r=v.state,typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount(),r!==v.state&&Il.enqueueReplaceState(v,v.state,null),El(n,l,v,d),v.state=n.memoizedState),typeof v.componentDidMount=="function"&&(n.flags|=4194308)}function ca(n,r){try{var l="",d=r;do l+=Se(d),d=d.return;while(d);var v=l}catch(M){v=`
Error generating stack: `+M.message+`
`+M.stack}return{value:n,source:r,stack:v,digest:null}}function Qu(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Ju(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var b1=typeof WeakMap=="function"?WeakMap:Map;function Tm(n,r,l){l=mr(-1,l),l.tag=3,l.payload={element:null};var d=r.value;return l.callback=function(){zl||(zl=!0,ph=d),Ju(n,r)},l}function Cm(n,r,l){l=mr(-1,l),l.tag=3;var d=n.type.getDerivedStateFromError;if(typeof d=="function"){var v=r.value;l.payload=function(){return d(v)},l.callback=function(){Ju(n,r)}}var M=n.stateNode;return M!==null&&typeof M.componentDidCatch=="function"&&(l.callback=function(){Ju(n,r),typeof d!="function"&&(Xr===null?Xr=new Set([this]):Xr.add(this));var L=r.stack;this.componentDidCatch(r.value,{componentStack:L!==null?L:""})}),l}function Am(n,r,l){var d=n.pingCache;if(d===null){d=n.pingCache=new b1;var v=new Set;d.set(r,v)}else v=d.get(r),v===void 0&&(v=new Set,d.set(r,v));v.has(l)||(v.add(l),n=O1.bind(null,n,r,l),r.then(n,n))}function Rm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Pm(n,r,l,d,v){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=mr(-1,1),r.tag=2,Vr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=v,n)}var E1=C.ReactCurrentOwner,Jn=!1;function Wn(n,r,l,d){r.child=n===null?Kp(r,null,l,d):sa(r,n.child,l,d)}function Lm(n,r,l,d,v){l=l.render;var M=r.ref;return oa(r,v),d=Wu(n,r,l,d,M,v),l=Xu(),n!==null&&!Jn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~v,gr(n,r,v)):(Qt&&l&&Cu(r),r.flags|=1,Wn(n,r,d,v),r.child)}function Im(n,r,l,d,v){if(n===null){var M=l.type;return typeof M=="function"&&!Sh(M)&&M.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=M,Nm(n,r,M,d,v)):(n=Xl(l.type,null,d,r,r.mode,v),n.ref=r.ref,n.return=r,r.child=n)}if(M=n.child,(n.lanes&v)===0){var L=M.memoizedProps;if(l=l.compare,l=l!==null?l:oo,l(L,d)&&n.ref===r.ref)return gr(n,r,v)}return r.flags|=1,n=$r(M,d),n.ref=r.ref,n.return=r,r.child=n}function Nm(n,r,l,d,v){if(n!==null){var M=n.memoizedProps;if(oo(M,d)&&n.ref===r.ref)if(Jn=!1,r.pendingProps=d=M,(n.lanes&v)!==0)(n.flags&131072)!==0&&(Jn=!0);else return r.lanes=n.lanes,gr(n,r,v)}return eh(n,r,l,d,v)}function Fm(n,r,l){var d=r.pendingProps,v=d.children,M=n!==null?n.memoizedState:null;if(d.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xt(ha,ui),ui|=l;else{if((l&1073741824)===0)return n=M!==null?M.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Xt(ha,ui),ui|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},d=M!==null?M.baseLanes:l,Xt(ha,ui),ui|=d}else M!==null?(d=M.baseLanes|l,r.memoizedState=null):d=l,Xt(ha,ui),ui|=d;return Wn(n,r,v,l),r.child}function Um(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function eh(n,r,l,d,v){var M=Qn(l)?gs:Un.current;return M=ta(r,M),oa(r,v),l=Wu(n,r,l,d,M,v),d=Xu(),n!==null&&!Jn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~v,gr(n,r,v)):(Qt&&d&&Cu(r),r.flags|=1,Wn(n,r,l,v),r.child)}function Dm(n,r,l,d,v){if(Qn(l)){var M=!0;gl(r)}else M=!1;if(oa(r,v),r.stateNode===null)Fl(n,r),bm(r,l,d),Zu(r,l,d,v),d=!0;else if(n===null){var L=r.stateNode,B=r.memoizedProps;L.props=B;var K=L.context,de=l.contextType;typeof de=="object"&&de!==null?de=Si(de):(de=Qn(l)?gs:Un.current,de=ta(r,de));var Ee=l.getDerivedStateFromProps,Pe=typeof Ee=="function"||typeof L.getSnapshotBeforeUpdate=="function";Pe||typeof L.UNSAFE_componentWillReceiveProps!="function"&&typeof L.componentWillReceiveProps!="function"||(B!==d||K!==de)&&Em(r,L,d,de),Gr=!1;var be=r.memoizedState;L.state=be,El(r,d,L,v),K=r.memoizedState,B!==d||be!==K||Zn.current||Gr?(typeof Ee=="function"&&(Ku(r,l,Ee,d),K=r.memoizedState),(B=Gr||wm(r,l,B,d,be,K,de))?(Pe||typeof L.UNSAFE_componentWillMount!="function"&&typeof L.componentWillMount!="function"||(typeof L.componentWillMount=="function"&&L.componentWillMount(),typeof L.UNSAFE_componentWillMount=="function"&&L.UNSAFE_componentWillMount()),typeof L.componentDidMount=="function"&&(r.flags|=4194308)):(typeof L.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=d,r.memoizedState=K),L.props=d,L.state=K,L.context=de,d=B):(typeof L.componentDidMount=="function"&&(r.flags|=4194308),d=!1)}else{L=r.stateNode,Qp(n,r),B=r.memoizedProps,de=r.type===r.elementType?B:Ni(r.type,B),L.props=de,Pe=r.pendingProps,be=L.context,K=l.contextType,typeof K=="object"&&K!==null?K=Si(K):(K=Qn(l)?gs:Un.current,K=ta(r,K));var Ye=l.getDerivedStateFromProps;(Ee=typeof Ye=="function"||typeof L.getSnapshotBeforeUpdate=="function")||typeof L.UNSAFE_componentWillReceiveProps!="function"&&typeof L.componentWillReceiveProps!="function"||(B!==Pe||be!==K)&&Em(r,L,d,K),Gr=!1,be=r.memoizedState,L.state=be,El(r,d,L,v);var tt=r.memoizedState;B!==Pe||be!==tt||Zn.current||Gr?(typeof Ye=="function"&&(Ku(r,l,Ye,d),tt=r.memoizedState),(de=Gr||wm(r,l,de,d,be,tt,K)||!1)?(Ee||typeof L.UNSAFE_componentWillUpdate!="function"&&typeof L.componentWillUpdate!="function"||(typeof L.componentWillUpdate=="function"&&L.componentWillUpdate(d,tt,K),typeof L.UNSAFE_componentWillUpdate=="function"&&L.UNSAFE_componentWillUpdate(d,tt,K)),typeof L.componentDidUpdate=="function"&&(r.flags|=4),typeof L.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof L.componentDidUpdate!="function"||B===n.memoizedProps&&be===n.memoizedState||(r.flags|=4),typeof L.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&be===n.memoizedState||(r.flags|=1024),r.memoizedProps=d,r.memoizedState=tt),L.props=d,L.state=tt,L.context=K,d=de):(typeof L.componentDidUpdate!="function"||B===n.memoizedProps&&be===n.memoizedState||(r.flags|=4),typeof L.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&be===n.memoizedState||(r.flags|=1024),d=!1)}return th(n,r,l,d,M,v)}function th(n,r,l,d,v,M){Um(n,r);var L=(r.flags&128)!==0;if(!d&&!L)return v&&Hp(r,l,!1),gr(n,r,M);d=r.stateNode,E1.current=r;var B=L&&typeof l.getDerivedStateFromError!="function"?null:d.render();return r.flags|=1,n!==null&&L?(r.child=sa(r,n.child,null,M),r.child=sa(r,null,B,M)):Wn(n,r,B,M),r.memoizedState=d.state,v&&Hp(r,l,!0),r.child}function km(n){var r=n.stateNode;r.pendingContext?zp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&zp(n,r.context,!1),Ou(n,r.containerInfo)}function Om(n,r,l,d,v){return ra(),Lu(v),r.flags|=256,Wn(n,r,l,d),r.child}var nh={dehydrated:null,treeContext:null,retryLane:0};function ih(n){return{baseLanes:n,cachePool:null,transitions:null}}function zm(n,r,l){var d=r.pendingProps,v=Jt.current,M=!1,L=(r.flags&128)!==0,B;if((B=L)||(B=n!==null&&n.memoizedState===null?!1:(v&2)!==0),B?(M=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(v|=1),Xt(Jt,v&1),n===null)return Pu(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(L=d.children,n=d.fallback,M?(d=r.mode,M=r.child,L={mode:"hidden",children:L},(d&1)===0&&M!==null?(M.childLanes=0,M.pendingProps=L):M=jl(L,d,0,null),n=Ts(n,d,l,null),M.return=r,n.return=r,M.sibling=n,r.child=M,r.child.memoizedState=ih(l),r.memoizedState=nh,n):rh(r,L));if(v=n.memoizedState,v!==null&&(B=v.dehydrated,B!==null))return T1(n,r,L,d,B,v,l);if(M){M=d.fallback,L=r.mode,v=n.child,B=v.sibling;var K={mode:"hidden",children:d.children};return(L&1)===0&&r.child!==v?(d=r.child,d.childLanes=0,d.pendingProps=K,r.deletions=null):(d=$r(v,K),d.subtreeFlags=v.subtreeFlags&14680064),B!==null?M=$r(B,M):(M=Ts(M,L,l,null),M.flags|=2),M.return=r,d.return=r,d.sibling=M,r.child=d,d=M,M=r.child,L=n.child.memoizedState,L=L===null?ih(l):{baseLanes:L.baseLanes|l,cachePool:null,transitions:L.transitions},M.memoizedState=L,M.childLanes=n.childLanes&~l,r.memoizedState=nh,d}return M=n.child,n=M.sibling,d=$r(M,{mode:"visible",children:d.children}),(r.mode&1)===0&&(d.lanes=l),d.return=r,d.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=d,r.memoizedState=null,d}function rh(n,r){return r=jl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Nl(n,r,l,d){return d!==null&&Lu(d),sa(r,n.child,null,l),n=rh(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function T1(n,r,l,d,v,M,L){if(l)return r.flags&256?(r.flags&=-257,d=Qu(Error(t(422))),Nl(n,r,L,d)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(M=d.fallback,v=r.mode,d=jl({mode:"visible",children:d.children},v,0,null),M=Ts(M,v,L,null),M.flags|=2,d.return=r,M.return=r,d.sibling=M,r.child=d,(r.mode&1)!==0&&sa(r,n.child,null,L),r.child.memoizedState=ih(L),r.memoizedState=nh,M);if((r.mode&1)===0)return Nl(n,r,L,null);if(v.data==="$!"){if(d=v.nextSibling&&v.nextSibling.dataset,d)var B=d.dgst;return d=B,M=Error(t(419)),d=Qu(M,d,void 0),Nl(n,r,L,d)}if(B=(L&n.childLanes)!==0,Jn||B){if(d=bn,d!==null){switch(L&-L){case 4:v=2;break;case 16:v=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:v=32;break;case 536870912:v=268435456;break;default:v=0}v=(v&(d.suspendedLanes|L))!==0?0:v,v!==0&&v!==M.retryLane&&(M.retryLane=v,pr(n,v),Di(d,n,v,-1))}return yh(),d=Qu(Error(t(421))),Nl(n,r,L,d)}return v.data==="$?"?(r.flags|=128,r.child=n.child,r=z1.bind(null,n),v._reactRetry=r,null):(n=M.treeContext,ci=Or(v.nextSibling),li=r,Qt=!0,Ii=null,n!==null&&(_i[yi++]=fr,_i[yi++]=dr,_i[yi++]=xs,fr=n.id,dr=n.overflow,xs=r),r=rh(r,d.children),r.flags|=4096,r)}function Bm(n,r,l){n.lanes|=r;var d=n.alternate;d!==null&&(d.lanes|=r),Uu(n.return,r,l)}function sh(n,r,l,d,v){var M=n.memoizedState;M===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:d,tail:l,tailMode:v}:(M.isBackwards=r,M.rendering=null,M.renderingStartTime=0,M.last=d,M.tail=l,M.tailMode=v)}function Hm(n,r,l){var d=r.pendingProps,v=d.revealOrder,M=d.tail;if(Wn(n,r,d.children,l),d=Jt.current,(d&2)!==0)d=d&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Bm(n,l,r);else if(n.tag===19)Bm(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}d&=1}if(Xt(Jt,d),(r.mode&1)===0)r.memoizedState=null;else switch(v){case"forwards":for(l=r.child,v=null;l!==null;)n=l.alternate,n!==null&&Tl(n)===null&&(v=l),l=l.sibling;l=v,l===null?(v=r.child,r.child=null):(v=l.sibling,l.sibling=null),sh(r,!1,v,l,M);break;case"backwards":for(l=null,v=r.child,r.child=null;v!==null;){if(n=v.alternate,n!==null&&Tl(n)===null){r.child=v;break}n=v.sibling,v.sibling=l,l=v,v=n}sh(r,!0,l,null,M);break;case"together":sh(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Fl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function gr(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),Ms|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=$r(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=$r(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function C1(n,r,l){switch(r.tag){case 3:km(r),ra();break;case 5:tm(r);break;case 1:Qn(r.type)&&gl(r);break;case 4:Ou(r,r.stateNode.containerInfo);break;case 10:var d=r.type._context,v=r.memoizedProps.value;Xt(Ml,d._currentValue),d._currentValue=v;break;case 13:if(d=r.memoizedState,d!==null)return d.dehydrated!==null?(Xt(Jt,Jt.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?zm(n,r,l):(Xt(Jt,Jt.current&1),n=gr(n,r,l),n!==null?n.sibling:null);Xt(Jt,Jt.current&1);break;case 19:if(d=(l&r.childLanes)!==0,(n.flags&128)!==0){if(d)return Hm(n,r,l);r.flags|=128}if(v=r.memoizedState,v!==null&&(v.rendering=null,v.tail=null,v.lastEffect=null),Xt(Jt,Jt.current),d)break;return null;case 22:case 23:return r.lanes=0,Fm(n,r,l)}return gr(n,r,l)}var Gm,ah,Vm,Wm;Gm=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},ah=function(){},Vm=function(n,r,l,d){var v=n.memoizedProps;if(v!==d){n=r.stateNode,ys(qi.current);var M=null;switch(l){case"input":v=pt(n,v),d=pt(n,d),M=[];break;case"select":v=te({},v,{value:void 0}),d=te({},d,{value:void 0}),M=[];break;case"textarea":v=vt(n,v),d=vt(n,d),M=[];break;default:typeof v.onClick!="function"&&typeof d.onClick=="function"&&(n.onclick=dl)}je(l,d);var L;l=null;for(de in v)if(!d.hasOwnProperty(de)&&v.hasOwnProperty(de)&&v[de]!=null)if(de==="style"){var B=v[de];for(L in B)B.hasOwnProperty(L)&&(l||(l={}),l[L]="")}else de!=="dangerouslySetInnerHTML"&&de!=="children"&&de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&de!=="autoFocus"&&(s.hasOwnProperty(de)?M||(M=[]):(M=M||[]).push(de,null));for(de in d){var K=d[de];if(B=v!=null?v[de]:void 0,d.hasOwnProperty(de)&&K!==B&&(K!=null||B!=null))if(de==="style")if(B){for(L in B)!B.hasOwnProperty(L)||K&&K.hasOwnProperty(L)||(l||(l={}),l[L]="");for(L in K)K.hasOwnProperty(L)&&B[L]!==K[L]&&(l||(l={}),l[L]=K[L])}else l||(M||(M=[]),M.push(de,l)),l=K;else de==="dangerouslySetInnerHTML"?(K=K?K.__html:void 0,B=B?B.__html:void 0,K!=null&&B!==K&&(M=M||[]).push(de,K)):de==="children"?typeof K!="string"&&typeof K!="number"||(M=M||[]).push(de,""+K):de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&(s.hasOwnProperty(de)?(K!=null&&de==="onScroll"&&Yt("scroll",n),M||B===K||(M=[])):(M=M||[]).push(de,K))}l&&(M=M||[]).push("style",l);var de=M;(r.updateQueue=de)&&(r.flags|=4)}},Wm=function(n,r,l,d){l!==d&&(r.flags|=4)};function wo(n,r){if(!Qt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var d=null;l!==null;)l.alternate!==null&&(d=l),l=l.sibling;d===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:d.sibling=null}}function kn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,d=0;if(r)for(var v=n.child;v!==null;)l|=v.lanes|v.childLanes,d|=v.subtreeFlags&14680064,d|=v.flags&14680064,v.return=n,v=v.sibling;else for(v=n.child;v!==null;)l|=v.lanes|v.childLanes,d|=v.subtreeFlags,d|=v.flags,v.return=n,v=v.sibling;return n.subtreeFlags|=d,n.childLanes=l,r}function A1(n,r,l){var d=r.pendingProps;switch(Au(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kn(r),null;case 1:return Qn(r.type)&&ml(),kn(r),null;case 3:return d=r.stateNode,la(),$t(Zn),$t(Un),Hu(),d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null),(n===null||n.child===null)&&(yl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Ii!==null&&(xh(Ii),Ii=null))),ah(n,r),kn(r),null;case 5:zu(r);var v=ys(vo.current);if(l=r.type,n!==null&&r.stateNode!=null)Vm(n,r,l,d,v),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!d){if(r.stateNode===null)throw Error(t(166));return kn(r),null}if(n=ys(qi.current),yl(r)){d=r.stateNode,l=r.type;var M=r.memoizedProps;switch(d[ji]=r,d[fo]=M,n=(r.mode&1)!==0,l){case"dialog":Yt("cancel",d),Yt("close",d);break;case"iframe":case"object":case"embed":Yt("load",d);break;case"video":case"audio":for(v=0;v<co.length;v++)Yt(co[v],d);break;case"source":Yt("error",d);break;case"img":case"image":case"link":Yt("error",d),Yt("load",d);break;case"details":Yt("toggle",d);break;case"input":wt(d,M),Yt("invalid",d);break;case"select":d._wrapperState={wasMultiple:!!M.multiple},Yt("invalid",d);break;case"textarea":Nt(d,M),Yt("invalid",d)}je(l,M),v=null;for(var L in M)if(M.hasOwnProperty(L)){var B=M[L];L==="children"?typeof B=="string"?d.textContent!==B&&(M.suppressHydrationWarning!==!0&&fl(d.textContent,B,n),v=["children",B]):typeof B=="number"&&d.textContent!==""+B&&(M.suppressHydrationWarning!==!0&&fl(d.textContent,B,n),v=["children",""+B]):s.hasOwnProperty(L)&&B!=null&&L==="onScroll"&&Yt("scroll",d)}switch(l){case"input":Ce(d),Ut(d,M,!0);break;case"textarea":Ce(d),Gt(d);break;case"select":case"option":break;default:typeof M.onClick=="function"&&(d.onclick=dl)}d=v,r.updateQueue=d,d!==null&&(r.flags|=4)}else{L=v.nodeType===9?v:v.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=k(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=L.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof d.is=="string"?n=L.createElement(l,{is:d.is}):(n=L.createElement(l),l==="select"&&(L=n,d.multiple?L.multiple=!0:d.size&&(L.size=d.size))):n=L.createElementNS(n,l),n[ji]=r,n[fo]=d,Gm(n,r,!1,!1),r.stateNode=n;e:{switch(L=De(l,d),l){case"dialog":Yt("cancel",n),Yt("close",n),v=d;break;case"iframe":case"object":case"embed":Yt("load",n),v=d;break;case"video":case"audio":for(v=0;v<co.length;v++)Yt(co[v],n);v=d;break;case"source":Yt("error",n),v=d;break;case"img":case"image":case"link":Yt("error",n),Yt("load",n),v=d;break;case"details":Yt("toggle",n),v=d;break;case"input":wt(n,d),v=pt(n,d),Yt("invalid",n);break;case"option":v=d;break;case"select":n._wrapperState={wasMultiple:!!d.multiple},v=te({},d,{value:void 0}),Yt("invalid",n);break;case"textarea":Nt(n,d),v=vt(n,d),Yt("invalid",n);break;default:v=d}je(l,v),B=v;for(M in B)if(B.hasOwnProperty(M)){var K=B[M];M==="style"?ye(n,K):M==="dangerouslySetInnerHTML"?(K=K?K.__html:void 0,K!=null&&_e(n,K)):M==="children"?typeof K=="string"?(l!=="textarea"||K!=="")&&Me(n,K):typeof K=="number"&&Me(n,""+K):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(s.hasOwnProperty(M)?K!=null&&M==="onScroll"&&Yt("scroll",n):K!=null&&E(n,M,K,L))}switch(l){case"input":Ce(n),Ut(n,d,!1);break;case"textarea":Ce(n),Gt(n);break;case"option":d.value!=null&&n.setAttribute("value",""+oe(d.value));break;case"select":n.multiple=!!d.multiple,M=d.value,M!=null?Dt(n,!!d.multiple,M,!1):d.defaultValue!=null&&Dt(n,!!d.multiple,d.defaultValue,!0);break;default:typeof v.onClick=="function"&&(n.onclick=dl)}switch(l){case"button":case"input":case"select":case"textarea":d=!!d.autoFocus;break e;case"img":d=!0;break e;default:d=!1}}d&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return kn(r),null;case 6:if(n&&r.stateNode!=null)Wm(n,r,n.memoizedProps,d);else{if(typeof d!="string"&&r.stateNode===null)throw Error(t(166));if(l=ys(vo.current),ys(qi.current),yl(r)){if(d=r.stateNode,l=r.memoizedProps,d[ji]=r,(M=d.nodeValue!==l)&&(n=li,n!==null))switch(n.tag){case 3:fl(d.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&fl(d.nodeValue,l,(n.mode&1)!==0)}M&&(r.flags|=4)}else d=(l.nodeType===9?l:l.ownerDocument).createTextNode(d),d[ji]=r,r.stateNode=d}return kn(r),null;case 13:if($t(Jt),d=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Qt&&ci!==null&&(r.mode&1)!==0&&(r.flags&128)===0)qp(),ra(),r.flags|=98560,M=!1;else if(M=yl(r),d!==null&&d.dehydrated!==null){if(n===null){if(!M)throw Error(t(318));if(M=r.memoizedState,M=M!==null?M.dehydrated:null,!M)throw Error(t(317));M[ji]=r}else ra(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;kn(r),M=!1}else Ii!==null&&(xh(Ii),Ii=null),M=!0;if(!M)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(d=d!==null,d!==(n!==null&&n.memoizedState!==null)&&d&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Jt.current&1)!==0?gn===0&&(gn=3):yh())),r.updateQueue!==null&&(r.flags|=4),kn(r),null);case 4:return la(),ah(n,r),n===null&&uo(r.stateNode.containerInfo),kn(r),null;case 10:return Fu(r.type._context),kn(r),null;case 17:return Qn(r.type)&&ml(),kn(r),null;case 19:if($t(Jt),M=r.memoizedState,M===null)return kn(r),null;if(d=(r.flags&128)!==0,L=M.rendering,L===null)if(d)wo(M,!1);else{if(gn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(L=Tl(n),L!==null){for(r.flags|=128,wo(M,!1),d=L.updateQueue,d!==null&&(r.updateQueue=d,r.flags|=4),r.subtreeFlags=0,d=l,l=r.child;l!==null;)M=l,n=d,M.flags&=14680066,L=M.alternate,L===null?(M.childLanes=0,M.lanes=n,M.child=null,M.subtreeFlags=0,M.memoizedProps=null,M.memoizedState=null,M.updateQueue=null,M.dependencies=null,M.stateNode=null):(M.childLanes=L.childLanes,M.lanes=L.lanes,M.child=L.child,M.subtreeFlags=0,M.deletions=null,M.memoizedProps=L.memoizedProps,M.memoizedState=L.memoizedState,M.updateQueue=L.updateQueue,M.type=L.type,n=L.dependencies,M.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return Xt(Jt,Jt.current&1|2),r.child}n=n.sibling}M.tail!==null&&pe()>fa&&(r.flags|=128,d=!0,wo(M,!1),r.lanes=4194304)}else{if(!d)if(n=Tl(L),n!==null){if(r.flags|=128,d=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),wo(M,!0),M.tail===null&&M.tailMode==="hidden"&&!L.alternate&&!Qt)return kn(r),null}else 2*pe()-M.renderingStartTime>fa&&l!==1073741824&&(r.flags|=128,d=!0,wo(M,!1),r.lanes=4194304);M.isBackwards?(L.sibling=r.child,r.child=L):(l=M.last,l!==null?l.sibling=L:r.child=L,M.last=L)}return M.tail!==null?(r=M.tail,M.rendering=r,M.tail=r.sibling,M.renderingStartTime=pe(),r.sibling=null,l=Jt.current,Xt(Jt,d?l&1|2:l&1),r):(kn(r),null);case 22:case 23:return _h(),d=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==d&&(r.flags|=8192),d&&(r.mode&1)!==0?(ui&1073741824)!==0&&(kn(r),r.subtreeFlags&6&&(r.flags|=8192)):kn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function R1(n,r){switch(Au(r),r.tag){case 1:return Qn(r.type)&&ml(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return la(),$t(Zn),$t(Un),Hu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return zu(r),null;case 13:if($t(Jt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));ra()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return $t(Jt),null;case 4:return la(),null;case 10:return Fu(r.type._context),null;case 22:case 23:return _h(),null;case 24:return null;default:return null}}var Ul=!1,On=!1,P1=typeof WeakSet=="function"?WeakSet:Set,Je=null;function ua(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(d){tn(n,r,d)}else l.current=null}function oh(n,r,l){try{l()}catch(d){tn(n,r,d)}}var Xm=!1;function L1(n,r){if(_u=tl,n=wp(),hu(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var d=l.getSelection&&l.getSelection();if(d&&d.rangeCount!==0){l=d.anchorNode;var v=d.anchorOffset,M=d.focusNode;d=d.focusOffset;try{l.nodeType,M.nodeType}catch{l=null;break e}var L=0,B=-1,K=-1,de=0,Ee=0,Pe=n,be=null;t:for(;;){for(var Ye;Pe!==l||v!==0&&Pe.nodeType!==3||(B=L+v),Pe!==M||d!==0&&Pe.nodeType!==3||(K=L+d),Pe.nodeType===3&&(L+=Pe.nodeValue.length),(Ye=Pe.firstChild)!==null;)be=Pe,Pe=Ye;for(;;){if(Pe===n)break t;if(be===l&&++de===v&&(B=L),be===M&&++Ee===d&&(K=L),(Ye=Pe.nextSibling)!==null)break;Pe=be,be=Pe.parentNode}Pe=Ye}l=B===-1||K===-1?null:{start:B,end:K}}else l=null}l=l||{start:0,end:0}}else l=null;for(yu={focusedElem:n,selectionRange:l},tl=!1,Je=r;Je!==null;)if(r=Je,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Je=n;else for(;Je!==null;){r=Je;try{var tt=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(tt!==null){var rt=tt.memoizedProps,rn=tt.memoizedState,ae=r.stateNode,J=ae.getSnapshotBeforeUpdate(r.elementType===r.type?rt:Ni(r.type,rt),rn);ae.__reactInternalSnapshotBeforeUpdate=J}break;case 3:var ue=r.stateNode.containerInfo;ue.nodeType===1?ue.textContent="":ue.nodeType===9&&ue.documentElement&&ue.removeChild(ue.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ue){tn(r,r.return,Ue)}if(n=r.sibling,n!==null){n.return=r.return,Je=n;break}Je=r.return}return tt=Xm,Xm=!1,tt}function bo(n,r,l){var d=r.updateQueue;if(d=d!==null?d.lastEffect:null,d!==null){var v=d=d.next;do{if((v.tag&n)===n){var M=v.destroy;v.destroy=void 0,M!==void 0&&oh(r,l,M)}v=v.next}while(v!==d)}}function Dl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var d=l.create;l.destroy=d()}l=l.next}while(l!==r)}}function lh(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function jm(n){var r=n.alternate;r!==null&&(n.alternate=null,jm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[ji],delete r[fo],delete r[bu],delete r[d1],delete r[p1])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function qm(n){return n.tag===5||n.tag===3||n.tag===4}function Ym(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||qm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ch(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=dl));else if(d!==4&&(n=n.child,n!==null))for(ch(n,r,l),n=n.sibling;n!==null;)ch(n,r,l),n=n.sibling}function uh(n,r,l){var d=n.tag;if(d===5||d===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(d!==4&&(n=n.child,n!==null))for(uh(n,r,l),n=n.sibling;n!==null;)uh(n,r,l),n=n.sibling}var In=null,Fi=!1;function Wr(n,r,l){for(l=l.child;l!==null;)$m(n,r,l),l=l.sibling}function $m(n,r,l){if(Ge&&typeof Ge.onCommitFiberUnmount=="function")try{Ge.onCommitFiberUnmount(le,l)}catch{}switch(l.tag){case 5:On||ua(l,r);case 6:var d=In,v=Fi;In=null,Wr(n,r,l),In=d,Fi=v,In!==null&&(Fi?(n=In,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):In.removeChild(l.stateNode));break;case 18:In!==null&&(Fi?(n=In,l=l.stateNode,n.nodeType===8?wu(n.parentNode,l):n.nodeType===1&&wu(n,l),to(n)):wu(In,l.stateNode));break;case 4:d=In,v=Fi,In=l.stateNode.containerInfo,Fi=!0,Wr(n,r,l),In=d,Fi=v;break;case 0:case 11:case 14:case 15:if(!On&&(d=l.updateQueue,d!==null&&(d=d.lastEffect,d!==null))){v=d=d.next;do{var M=v,L=M.destroy;M=M.tag,L!==void 0&&((M&2)!==0||(M&4)!==0)&&oh(l,r,L),v=v.next}while(v!==d)}Wr(n,r,l);break;case 1:if(!On&&(ua(l,r),d=l.stateNode,typeof d.componentWillUnmount=="function"))try{d.props=l.memoizedProps,d.state=l.memoizedState,d.componentWillUnmount()}catch(B){tn(l,r,B)}Wr(n,r,l);break;case 21:Wr(n,r,l);break;case 22:l.mode&1?(On=(d=On)||l.memoizedState!==null,Wr(n,r,l),On=d):Wr(n,r,l);break;default:Wr(n,r,l)}}function Km(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new P1),r.forEach(function(d){var v=B1.bind(null,n,d);l.has(d)||(l.add(d),d.then(v,v))})}}function Ui(n,r){var l=r.deletions;if(l!==null)for(var d=0;d<l.length;d++){var v=l[d];try{var M=n,L=r,B=L;e:for(;B!==null;){switch(B.tag){case 5:In=B.stateNode,Fi=!1;break e;case 3:In=B.stateNode.containerInfo,Fi=!0;break e;case 4:In=B.stateNode.containerInfo,Fi=!0;break e}B=B.return}if(In===null)throw Error(t(160));$m(M,L,v),In=null,Fi=!1;var K=v.alternate;K!==null&&(K.return=null),v.return=null}catch(de){tn(v,r,de)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Zm(r,n),r=r.sibling}function Zm(n,r){var l=n.alternate,d=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ui(r,n),$i(n),d&4){try{bo(3,n,n.return),Dl(3,n)}catch(rt){tn(n,n.return,rt)}try{bo(5,n,n.return)}catch(rt){tn(n,n.return,rt)}}break;case 1:Ui(r,n),$i(n),d&512&&l!==null&&ua(l,l.return);break;case 5:if(Ui(r,n),$i(n),d&512&&l!==null&&ua(l,l.return),n.flags&32){var v=n.stateNode;try{Me(v,"")}catch(rt){tn(n,n.return,rt)}}if(d&4&&(v=n.stateNode,v!=null)){var M=n.memoizedProps,L=l!==null?l.memoizedProps:M,B=n.type,K=n.updateQueue;if(n.updateQueue=null,K!==null)try{B==="input"&&M.type==="radio"&&M.name!=null&&mt(v,M),De(B,L);var de=De(B,M);for(L=0;L<K.length;L+=2){var Ee=K[L],Pe=K[L+1];Ee==="style"?ye(v,Pe):Ee==="dangerouslySetInnerHTML"?_e(v,Pe):Ee==="children"?Me(v,Pe):E(v,Ee,Pe,de)}switch(B){case"input":Vt(v,M);break;case"textarea":He(v,M);break;case"select":var be=v._wrapperState.wasMultiple;v._wrapperState.wasMultiple=!!M.multiple;var Ye=M.value;Ye!=null?Dt(v,!!M.multiple,Ye,!1):be!==!!M.multiple&&(M.defaultValue!=null?Dt(v,!!M.multiple,M.defaultValue,!0):Dt(v,!!M.multiple,M.multiple?[]:"",!1))}v[fo]=M}catch(rt){tn(n,n.return,rt)}}break;case 6:if(Ui(r,n),$i(n),d&4){if(n.stateNode===null)throw Error(t(162));v=n.stateNode,M=n.memoizedProps;try{v.nodeValue=M}catch(rt){tn(n,n.return,rt)}}break;case 3:if(Ui(r,n),$i(n),d&4&&l!==null&&l.memoizedState.isDehydrated)try{to(r.containerInfo)}catch(rt){tn(n,n.return,rt)}break;case 4:Ui(r,n),$i(n);break;case 13:Ui(r,n),$i(n),v=n.child,v.flags&8192&&(M=v.memoizedState!==null,v.stateNode.isHidden=M,!M||v.alternate!==null&&v.alternate.memoizedState!==null||(dh=pe())),d&4&&Km(n);break;case 22:if(Ee=l!==null&&l.memoizedState!==null,n.mode&1?(On=(de=On)||Ee,Ui(r,n),On=de):Ui(r,n),$i(n),d&8192){if(de=n.memoizedState!==null,(n.stateNode.isHidden=de)&&!Ee&&(n.mode&1)!==0)for(Je=n,Ee=n.child;Ee!==null;){for(Pe=Je=Ee;Je!==null;){switch(be=Je,Ye=be.child,be.tag){case 0:case 11:case 14:case 15:bo(4,be,be.return);break;case 1:ua(be,be.return);var tt=be.stateNode;if(typeof tt.componentWillUnmount=="function"){d=be,l=be.return;try{r=d,tt.props=r.memoizedProps,tt.state=r.memoizedState,tt.componentWillUnmount()}catch(rt){tn(d,l,rt)}}break;case 5:ua(be,be.return);break;case 22:if(be.memoizedState!==null){e0(Pe);continue}}Ye!==null?(Ye.return=be,Je=Ye):e0(Pe)}Ee=Ee.sibling}e:for(Ee=null,Pe=n;;){if(Pe.tag===5){if(Ee===null){Ee=Pe;try{v=Pe.stateNode,de?(M=v.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none"):(B=Pe.stateNode,K=Pe.memoizedProps.style,L=K!=null&&K.hasOwnProperty("display")?K.display:null,B.style.display=xe("display",L))}catch(rt){tn(n,n.return,rt)}}}else if(Pe.tag===6){if(Ee===null)try{Pe.stateNode.nodeValue=de?"":Pe.memoizedProps}catch(rt){tn(n,n.return,rt)}}else if((Pe.tag!==22&&Pe.tag!==23||Pe.memoizedState===null||Pe===n)&&Pe.child!==null){Pe.child.return=Pe,Pe=Pe.child;continue}if(Pe===n)break e;for(;Pe.sibling===null;){if(Pe.return===null||Pe.return===n)break e;Ee===Pe&&(Ee=null),Pe=Pe.return}Ee===Pe&&(Ee=null),Pe.sibling.return=Pe.return,Pe=Pe.sibling}}break;case 19:Ui(r,n),$i(n),d&4&&Km(n);break;case 21:break;default:Ui(r,n),$i(n)}}function $i(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(qm(l)){var d=l;break e}l=l.return}throw Error(t(160))}switch(d.tag){case 5:var v=d.stateNode;d.flags&32&&(Me(v,""),d.flags&=-33);var M=Ym(n);uh(n,M,v);break;case 3:case 4:var L=d.stateNode.containerInfo,B=Ym(n);ch(n,B,L);break;default:throw Error(t(161))}}catch(K){tn(n,n.return,K)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function I1(n,r,l){Je=n,Qm(n)}function Qm(n,r,l){for(var d=(n.mode&1)!==0;Je!==null;){var v=Je,M=v.child;if(v.tag===22&&d){var L=v.memoizedState!==null||Ul;if(!L){var B=v.alternate,K=B!==null&&B.memoizedState!==null||On;B=Ul;var de=On;if(Ul=L,(On=K)&&!de)for(Je=v;Je!==null;)L=Je,K=L.child,L.tag===22&&L.memoizedState!==null?t0(v):K!==null?(K.return=L,Je=K):t0(v);for(;M!==null;)Je=M,Qm(M),M=M.sibling;Je=v,Ul=B,On=de}Jm(n)}else(v.subtreeFlags&8772)!==0&&M!==null?(M.return=v,Je=M):Jm(n)}}function Jm(n){for(;Je!==null;){var r=Je;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:On||Dl(5,r);break;case 1:var d=r.stateNode;if(r.flags&4&&!On)if(l===null)d.componentDidMount();else{var v=r.elementType===r.type?l.memoizedProps:Ni(r.type,l.memoizedProps);d.componentDidUpdate(v,l.memoizedState,d.__reactInternalSnapshotBeforeUpdate)}var M=r.updateQueue;M!==null&&em(r,M,d);break;case 3:var L=r.updateQueue;if(L!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}em(r,L,l)}break;case 5:var B=r.stateNode;if(l===null&&r.flags&4){l=B;var K=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":K.autoFocus&&l.focus();break;case"img":K.src&&(l.src=K.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var de=r.alternate;if(de!==null){var Ee=de.memoizedState;if(Ee!==null){var Pe=Ee.dehydrated;Pe!==null&&to(Pe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}On||r.flags&512&&lh(r)}catch(be){tn(r,r.return,be)}}if(r===n){Je=null;break}if(l=r.sibling,l!==null){l.return=r.return,Je=l;break}Je=r.return}}function e0(n){for(;Je!==null;){var r=Je;if(r===n){Je=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Je=l;break}Je=r.return}}function t0(n){for(;Je!==null;){var r=Je;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{Dl(4,r)}catch(K){tn(r,l,K)}break;case 1:var d=r.stateNode;if(typeof d.componentDidMount=="function"){var v=r.return;try{d.componentDidMount()}catch(K){tn(r,v,K)}}var M=r.return;try{lh(r)}catch(K){tn(r,M,K)}break;case 5:var L=r.return;try{lh(r)}catch(K){tn(r,L,K)}}}catch(K){tn(r,r.return,K)}if(r===n){Je=null;break}var B=r.sibling;if(B!==null){B.return=r.return,Je=B;break}Je=r.return}}var N1=Math.ceil,kl=C.ReactCurrentDispatcher,hh=C.ReactCurrentOwner,wi=C.ReactCurrentBatchConfig,Lt=0,bn=null,hn=null,Nn=0,ui=0,ha=zr(0),gn=0,Eo=null,Ms=0,Ol=0,fh=0,To=null,ei=null,dh=0,fa=1/0,xr=null,zl=!1,ph=null,Xr=null,Bl=!1,jr=null,Hl=0,Co=0,mh=null,Gl=-1,Vl=0;function Xn(){return(Lt&6)!==0?pe():Gl!==-1?Gl:Gl=pe()}function qr(n){return(n.mode&1)===0?1:(Lt&2)!==0&&Nn!==0?Nn&-Nn:g1.transition!==null?(Vl===0&&(Vl=qe()),Vl):(n=Tt,n!==0||(n=window.event,n=n===void 0?16:ip(n.type)),n)}function Di(n,r,l,d){if(50<Co)throw Co=0,mh=null,Error(t(185));Et(n,l,d),((Lt&2)===0||n!==bn)&&(n===bn&&((Lt&2)===0&&(Ol|=l),gn===4&&Yr(n,Nn)),ti(n,d),l===1&&Lt===0&&(r.mode&1)===0&&(fa=pe()+500,xl&&Hr()))}function ti(n,r){var l=n.callbackNode;zt(n,r);var d=Wt(n,n===bn?Nn:0);if(d===0)l!==null&&Ws(l),n.callbackNode=null,n.callbackPriority=0;else if(r=d&-d,n.callbackPriority!==r){if(l!=null&&Ws(l),r===1)n.tag===0?m1(i0.bind(null,n)):Gp(i0.bind(null,n)),h1(function(){(Lt&6)===0&&Hr()}),l=null;else{switch(cr(d)){case 1:l=Ae;break;case 4:l=P;break;case 16:l=j;break;case 536870912:l=ce;break;default:l=j}l=h0(l,n0.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function n0(n,r){if(Gl=-1,Vl=0,(Lt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(da()&&n.callbackNode!==l)return null;var d=Wt(n,n===bn?Nn:0);if(d===0)return null;if((d&30)!==0||(d&n.expiredLanes)!==0||r)r=Wl(n,d);else{r=d;var v=Lt;Lt|=2;var M=s0();(bn!==n||Nn!==r)&&(xr=null,fa=pe()+500,bs(n,r));do try{D1();break}catch(B){r0(n,B)}while(!0);Nu(),kl.current=M,Lt=v,hn!==null?r=0:(bn=null,Nn=0,r=gn)}if(r!==0){if(r===2&&(v=un(n),v!==0&&(d=v,r=gh(n,v))),r===1)throw l=Eo,bs(n,0),Yr(n,d),ti(n,pe()),l;if(r===6)Yr(n,d);else{if(v=n.current.alternate,(d&30)===0&&!F1(v)&&(r=Wl(n,d),r===2&&(M=un(n),M!==0&&(d=M,r=gh(n,M))),r===1))throw l=Eo,bs(n,0),Yr(n,d),ti(n,pe()),l;switch(n.finishedWork=v,n.finishedLanes=d,r){case 0:case 1:throw Error(t(345));case 2:Es(n,ei,xr);break;case 3:if(Yr(n,d),(d&130023424)===d&&(r=dh+500-pe(),10<r)){if(Wt(n,0)!==0)break;if(v=n.suspendedLanes,(v&d)!==d){Xn(),n.pingedLanes|=n.suspendedLanes&v;break}n.timeoutHandle=Mu(Es.bind(null,n,ei,xr),r);break}Es(n,ei,xr);break;case 4:if(Yr(n,d),(d&4194240)===d)break;for(r=n.eventTimes,v=-1;0<d;){var L=31-ze(d);M=1<<L,L=r[L],L>v&&(v=L),d&=~M}if(d=v,d=pe()-d,d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3e3>d?3e3:4320>d?4320:1960*N1(d/1960))-d,10<d){n.timeoutHandle=Mu(Es.bind(null,n,ei,xr),d);break}Es(n,ei,xr);break;case 5:Es(n,ei,xr);break;default:throw Error(t(329))}}}return ti(n,pe()),n.callbackNode===l?n0.bind(null,n):null}function gh(n,r){var l=To;return n.current.memoizedState.isDehydrated&&(bs(n,r).flags|=256),n=Wl(n,r),n!==2&&(r=ei,ei=l,r!==null&&xh(r)),n}function xh(n){ei===null?ei=n:ei.push.apply(ei,n)}function F1(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var d=0;d<l.length;d++){var v=l[d],M=v.getSnapshot;v=v.value;try{if(!Li(M(),v))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Yr(n,r){for(r&=~fh,r&=~Ol,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-ze(r),d=1<<l;n[l]=-1,r&=~d}}function i0(n){if((Lt&6)!==0)throw Error(t(327));da();var r=Wt(n,0);if((r&1)===0)return ti(n,pe()),null;var l=Wl(n,r);if(n.tag!==0&&l===2){var d=un(n);d!==0&&(r=d,l=gh(n,d))}if(l===1)throw l=Eo,bs(n,0),Yr(n,r),ti(n,pe()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Es(n,ei,xr),ti(n,pe()),null}function vh(n,r){var l=Lt;Lt|=1;try{return n(r)}finally{Lt=l,Lt===0&&(fa=pe()+500,xl&&Hr())}}function ws(n){jr!==null&&jr.tag===0&&(Lt&6)===0&&da();var r=Lt;Lt|=1;var l=wi.transition,d=Tt;try{if(wi.transition=null,Tt=1,n)return n()}finally{Tt=d,wi.transition=l,Lt=r,(Lt&6)===0&&Hr()}}function _h(){ui=ha.current,$t(ha)}function bs(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,u1(l)),hn!==null)for(l=hn.return;l!==null;){var d=l;switch(Au(d),d.tag){case 1:d=d.type.childContextTypes,d!=null&&ml();break;case 3:la(),$t(Zn),$t(Un),Hu();break;case 5:zu(d);break;case 4:la();break;case 13:$t(Jt);break;case 19:$t(Jt);break;case 10:Fu(d.type._context);break;case 22:case 23:_h()}l=l.return}if(bn=n,hn=n=$r(n.current,null),Nn=ui=r,gn=0,Eo=null,fh=Ol=Ms=0,ei=To=null,_s!==null){for(r=0;r<_s.length;r++)if(l=_s[r],d=l.interleaved,d!==null){l.interleaved=null;var v=d.next,M=l.pending;if(M!==null){var L=M.next;M.next=v,d.next=L}l.pending=d}_s=null}return n}function r0(n,r){do{var l=hn;try{if(Nu(),Cl.current=Ll,Al){for(var d=en.memoizedState;d!==null;){var v=d.queue;v!==null&&(v.pending=null),d=d.next}Al=!1}if(Ss=0,wn=mn=en=null,_o=!1,yo=0,hh.current=null,l===null||l.return===null){gn=1,Eo=r,hn=null;break}e:{var M=n,L=l.return,B=l,K=r;if(r=Nn,B.flags|=32768,K!==null&&typeof K=="object"&&typeof K.then=="function"){var de=K,Ee=B,Pe=Ee.tag;if((Ee.mode&1)===0&&(Pe===0||Pe===11||Pe===15)){var be=Ee.alternate;be?(Ee.updateQueue=be.updateQueue,Ee.memoizedState=be.memoizedState,Ee.lanes=be.lanes):(Ee.updateQueue=null,Ee.memoizedState=null)}var Ye=Rm(L);if(Ye!==null){Ye.flags&=-257,Pm(Ye,L,B,M,r),Ye.mode&1&&Am(M,de,r),r=Ye,K=de;var tt=r.updateQueue;if(tt===null){var rt=new Set;rt.add(K),r.updateQueue=rt}else tt.add(K);break e}else{if((r&1)===0){Am(M,de,r),yh();break e}K=Error(t(426))}}else if(Qt&&B.mode&1){var rn=Rm(L);if(rn!==null){(rn.flags&65536)===0&&(rn.flags|=256),Pm(rn,L,B,M,r),Lu(ca(K,B));break e}}M=K=ca(K,B),gn!==4&&(gn=2),To===null?To=[M]:To.push(M),M=L;do{switch(M.tag){case 3:M.flags|=65536,r&=-r,M.lanes|=r;var ae=Tm(M,K,r);Jp(M,ae);break e;case 1:B=K;var J=M.type,ue=M.stateNode;if((M.flags&128)===0&&(typeof J.getDerivedStateFromError=="function"||ue!==null&&typeof ue.componentDidCatch=="function"&&(Xr===null||!Xr.has(ue)))){M.flags|=65536,r&=-r,M.lanes|=r;var Ue=Cm(M,B,r);Jp(M,Ue);break e}}M=M.return}while(M!==null)}o0(l)}catch(at){r=at,hn===l&&l!==null&&(hn=l=l.return);continue}break}while(!0)}function s0(){var n=kl.current;return kl.current=Ll,n===null?Ll:n}function yh(){(gn===0||gn===3||gn===2)&&(gn=4),bn===null||(Ms&268435455)===0&&(Ol&268435455)===0||Yr(bn,Nn)}function Wl(n,r){var l=Lt;Lt|=2;var d=s0();(bn!==n||Nn!==r)&&(xr=null,bs(n,r));do try{U1();break}catch(v){r0(n,v)}while(!0);if(Nu(),Lt=l,kl.current=d,hn!==null)throw Error(t(261));return bn=null,Nn=0,gn}function U1(){for(;hn!==null;)a0(hn)}function D1(){for(;hn!==null&&!Ka();)a0(hn)}function a0(n){var r=u0(n.alternate,n,ui);n.memoizedProps=n.pendingProps,r===null?o0(n):hn=r,hh.current=null}function o0(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=A1(l,r,ui),l!==null){hn=l;return}}else{if(l=R1(l,r),l!==null){l.flags&=32767,hn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{gn=6,hn=null;return}}if(r=r.sibling,r!==null){hn=r;return}hn=r=n}while(r!==null);gn===0&&(gn=5)}function Es(n,r,l){var d=Tt,v=wi.transition;try{wi.transition=null,Tt=1,k1(n,r,l,d)}finally{wi.transition=v,Tt=d}return null}function k1(n,r,l,d){do da();while(jr!==null);if((Lt&6)!==0)throw Error(t(327));l=n.finishedWork;var v=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var M=l.lanes|l.childLanes;if($n(n,M),n===bn&&(hn=bn=null,Nn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Bl||(Bl=!0,h0(j,function(){return da(),null})),M=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||M){M=wi.transition,wi.transition=null;var L=Tt;Tt=1;var B=Lt;Lt|=4,hh.current=null,L1(n,l),Zm(l,n),i1(yu),tl=!!_u,yu=_u=null,n.current=l,I1(l),Xs(),Lt=B,Tt=L,wi.transition=M}else n.current=l;if(Bl&&(Bl=!1,jr=n,Hl=v),M=n.pendingLanes,M===0&&(Xr=null),Ke(l.stateNode),ti(n,pe()),r!==null)for(d=n.onRecoverableError,l=0;l<r.length;l++)v=r[l],d(v.value,{componentStack:v.stack,digest:v.digest});if(zl)throw zl=!1,n=ph,ph=null,n;return(Hl&1)!==0&&n.tag!==0&&da(),M=n.pendingLanes,(M&1)!==0?n===mh?Co++:(Co=0,mh=n):Co=0,Hr(),null}function da(){if(jr!==null){var n=cr(Hl),r=wi.transition,l=Tt;try{if(wi.transition=null,Tt=16>n?16:n,jr===null)var d=!1;else{if(n=jr,jr=null,Hl=0,(Lt&6)!==0)throw Error(t(331));var v=Lt;for(Lt|=4,Je=n.current;Je!==null;){var M=Je,L=M.child;if((Je.flags&16)!==0){var B=M.deletions;if(B!==null){for(var K=0;K<B.length;K++){var de=B[K];for(Je=de;Je!==null;){var Ee=Je;switch(Ee.tag){case 0:case 11:case 15:bo(8,Ee,M)}var Pe=Ee.child;if(Pe!==null)Pe.return=Ee,Je=Pe;else for(;Je!==null;){Ee=Je;var be=Ee.sibling,Ye=Ee.return;if(jm(Ee),Ee===de){Je=null;break}if(be!==null){be.return=Ye,Je=be;break}Je=Ye}}}var tt=M.alternate;if(tt!==null){var rt=tt.child;if(rt!==null){tt.child=null;do{var rn=rt.sibling;rt.sibling=null,rt=rn}while(rt!==null)}}Je=M}}if((M.subtreeFlags&2064)!==0&&L!==null)L.return=M,Je=L;else e:for(;Je!==null;){if(M=Je,(M.flags&2048)!==0)switch(M.tag){case 0:case 11:case 15:bo(9,M,M.return)}var ae=M.sibling;if(ae!==null){ae.return=M.return,Je=ae;break e}Je=M.return}}var J=n.current;for(Je=J;Je!==null;){L=Je;var ue=L.child;if((L.subtreeFlags&2064)!==0&&ue!==null)ue.return=L,Je=ue;else e:for(L=J;Je!==null;){if(B=Je,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:Dl(9,B)}}catch(at){tn(B,B.return,at)}if(B===L){Je=null;break e}var Ue=B.sibling;if(Ue!==null){Ue.return=B.return,Je=Ue;break e}Je=B.return}}if(Lt=v,Hr(),Ge&&typeof Ge.onPostCommitFiberRoot=="function")try{Ge.onPostCommitFiberRoot(le,n)}catch{}d=!0}return d}finally{Tt=l,wi.transition=r}}return!1}function l0(n,r,l){r=ca(l,r),r=Tm(n,r,1),n=Vr(n,r,1),r=Xn(),n!==null&&(Et(n,1,r),ti(n,r))}function tn(n,r,l){if(n.tag===3)l0(n,n,l);else for(;r!==null;){if(r.tag===3){l0(r,n,l);break}else if(r.tag===1){var d=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof d.componentDidCatch=="function"&&(Xr===null||!Xr.has(d))){n=ca(l,n),n=Cm(r,n,1),r=Vr(r,n,1),n=Xn(),r!==null&&(Et(r,1,n),ti(r,n));break}}r=r.return}}function O1(n,r,l){var d=n.pingCache;d!==null&&d.delete(r),r=Xn(),n.pingedLanes|=n.suspendedLanes&l,bn===n&&(Nn&l)===l&&(gn===4||gn===3&&(Nn&130023424)===Nn&&500>pe()-dh?bs(n,0):fh|=l),ti(n,r)}function c0(n,r){r===0&&((n.mode&1)===0?r=1:(r=st,st<<=1,(st&130023424)===0&&(st=4194304)));var l=Xn();n=pr(n,r),n!==null&&(Et(n,r,l),ti(n,l))}function z1(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),c0(n,l)}function B1(n,r){var l=0;switch(n.tag){case 13:var d=n.stateNode,v=n.memoizedState;v!==null&&(l=v.retryLane);break;case 19:d=n.stateNode;break;default:throw Error(t(314))}d!==null&&d.delete(r),c0(n,l)}var u0;u0=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||Zn.current)Jn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return Jn=!1,C1(n,r,l);Jn=(n.flags&131072)!==0}else Jn=!1,Qt&&(r.flags&1048576)!==0&&Vp(r,_l,r.index);switch(r.lanes=0,r.tag){case 2:var d=r.type;Fl(n,r),n=r.pendingProps;var v=ta(r,Un.current);oa(r,l),v=Wu(null,r,d,n,v,l);var M=Xu();return r.flags|=1,typeof v=="object"&&v!==null&&typeof v.render=="function"&&v.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Qn(d)?(M=!0,gl(r)):M=!1,r.memoizedState=v.state!==null&&v.state!==void 0?v.state:null,ku(r),v.updater=Il,r.stateNode=v,v._reactInternals=r,Zu(r,d,n,l),r=th(null,r,d,!0,M,l)):(r.tag=0,Qt&&M&&Cu(r),Wn(null,r,v,l),r=r.child),r;case 16:d=r.elementType;e:{switch(Fl(n,r),n=r.pendingProps,v=d._init,d=v(d._payload),r.type=d,v=r.tag=G1(d),n=Ni(d,n),v){case 0:r=eh(null,r,d,n,l);break e;case 1:r=Dm(null,r,d,n,l);break e;case 11:r=Lm(null,r,d,n,l);break e;case 14:r=Im(null,r,d,Ni(d.type,n),l);break e}throw Error(t(306,d,""))}return r;case 0:return d=r.type,v=r.pendingProps,v=r.elementType===d?v:Ni(d,v),eh(n,r,d,v,l);case 1:return d=r.type,v=r.pendingProps,v=r.elementType===d?v:Ni(d,v),Dm(n,r,d,v,l);case 3:e:{if(km(r),n===null)throw Error(t(387));d=r.pendingProps,M=r.memoizedState,v=M.element,Qp(n,r),El(r,d,null,l);var L=r.memoizedState;if(d=L.element,M.isDehydrated)if(M={element:d,isDehydrated:!1,cache:L.cache,pendingSuspenseBoundaries:L.pendingSuspenseBoundaries,transitions:L.transitions},r.updateQueue.baseState=M,r.memoizedState=M,r.flags&256){v=ca(Error(t(423)),r),r=Om(n,r,d,l,v);break e}else if(d!==v){v=ca(Error(t(424)),r),r=Om(n,r,d,l,v);break e}else for(ci=Or(r.stateNode.containerInfo.firstChild),li=r,Qt=!0,Ii=null,l=Kp(r,null,d,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(ra(),d===v){r=gr(n,r,l);break e}Wn(n,r,d,l)}r=r.child}return r;case 5:return tm(r),n===null&&Pu(r),d=r.type,v=r.pendingProps,M=n!==null?n.memoizedProps:null,L=v.children,Su(d,v)?L=null:M!==null&&Su(d,M)&&(r.flags|=32),Um(n,r),Wn(n,r,L,l),r.child;case 6:return n===null&&Pu(r),null;case 13:return zm(n,r,l);case 4:return Ou(r,r.stateNode.containerInfo),d=r.pendingProps,n===null?r.child=sa(r,null,d,l):Wn(n,r,d,l),r.child;case 11:return d=r.type,v=r.pendingProps,v=r.elementType===d?v:Ni(d,v),Lm(n,r,d,v,l);case 7:return Wn(n,r,r.pendingProps,l),r.child;case 8:return Wn(n,r,r.pendingProps.children,l),r.child;case 12:return Wn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(d=r.type._context,v=r.pendingProps,M=r.memoizedProps,L=v.value,Xt(Ml,d._currentValue),d._currentValue=L,M!==null)if(Li(M.value,L)){if(M.children===v.children&&!Zn.current){r=gr(n,r,l);break e}}else for(M=r.child,M!==null&&(M.return=r);M!==null;){var B=M.dependencies;if(B!==null){L=M.child;for(var K=B.firstContext;K!==null;){if(K.context===d){if(M.tag===1){K=mr(-1,l&-l),K.tag=2;var de=M.updateQueue;if(de!==null){de=de.shared;var Ee=de.pending;Ee===null?K.next=K:(K.next=Ee.next,Ee.next=K),de.pending=K}}M.lanes|=l,K=M.alternate,K!==null&&(K.lanes|=l),Uu(M.return,l,r),B.lanes|=l;break}K=K.next}}else if(M.tag===10)L=M.type===r.type?null:M.child;else if(M.tag===18){if(L=M.return,L===null)throw Error(t(341));L.lanes|=l,B=L.alternate,B!==null&&(B.lanes|=l),Uu(L,l,r),L=M.sibling}else L=M.child;if(L!==null)L.return=M;else for(L=M;L!==null;){if(L===r){L=null;break}if(M=L.sibling,M!==null){M.return=L.return,L=M;break}L=L.return}M=L}Wn(n,r,v.children,l),r=r.child}return r;case 9:return v=r.type,d=r.pendingProps.children,oa(r,l),v=Si(v),d=d(v),r.flags|=1,Wn(n,r,d,l),r.child;case 14:return d=r.type,v=Ni(d,r.pendingProps),v=Ni(d.type,v),Im(n,r,d,v,l);case 15:return Nm(n,r,r.type,r.pendingProps,l);case 17:return d=r.type,v=r.pendingProps,v=r.elementType===d?v:Ni(d,v),Fl(n,r),r.tag=1,Qn(d)?(n=!0,gl(r)):n=!1,oa(r,l),bm(r,d,v),Zu(r,d,v,l),th(null,r,d,!0,n,l);case 19:return Hm(n,r,l);case 22:return Fm(n,r,l)}throw Error(t(156,r.tag))};function h0(n,r){return Ai(n,r)}function H1(n,r,l,d){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=d,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bi(n,r,l,d){return new H1(n,r,l,d)}function Sh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function G1(n){if(typeof n=="function")return Sh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===G)return 11;if(n===X)return 14}return 2}function $r(n,r){var l=n.alternate;return l===null?(l=bi(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Xl(n,r,l,d,v,M){var L=2;if(d=n,typeof n=="function")Sh(n)&&(L=1);else if(typeof n=="string")L=5;else e:switch(n){case N:return Ts(l.children,v,M,r);case T:L=8,v|=8;break;case F:return n=bi(12,l,r,v|2),n.elementType=F,n.lanes=M,n;case ne:return n=bi(13,l,r,v),n.elementType=ne,n.lanes=M,n;case se:return n=bi(19,l,r,v),n.elementType=se,n.lanes=M,n;case Y:return jl(l,v,M,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case z:L=10;break e;case D:L=9;break e;case G:L=11;break e;case X:L=14;break e;case V:L=16,d=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=bi(L,l,r,v),r.elementType=n,r.type=d,r.lanes=M,r}function Ts(n,r,l,d){return n=bi(7,n,d,r),n.lanes=l,n}function jl(n,r,l,d){return n=bi(22,n,d,r),n.elementType=Y,n.lanes=l,n.stateNode={isHidden:!1},n}function Mh(n,r,l){return n=bi(6,n,null,r),n.lanes=l,n}function wh(n,r,l){return r=bi(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function V1(n,r,l,d,v){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ln(0),this.expirationTimes=Ln(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ln(0),this.identifierPrefix=d,this.onRecoverableError=v,this.mutableSourceEagerHydrationData=null}function bh(n,r,l,d,v,M,L,B,K){return n=new V1(n,r,l,B,K),r===1?(r=1,M===!0&&(r|=8)):r=0,M=bi(3,null,null,r),n.current=M,M.stateNode=n,M.memoizedState={element:d,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},ku(M),n}function W1(n,r,l){var d=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A,key:d==null?null:""+d,children:n,containerInfo:r,implementation:l}}function f0(n){if(!n)return Br;n=n._reactInternals;e:{if(ai(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Qn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(Qn(l))return Bp(n,l,r)}return r}function d0(n,r,l,d,v,M,L,B,K){return n=bh(l,d,!0,n,v,M,L,B,K),n.context=f0(null),l=n.current,d=Xn(),v=qr(l),M=mr(d,v),M.callback=r??null,Vr(l,M,v),n.current.lanes=v,Et(n,v,d),ti(n,d),n}function ql(n,r,l,d){var v=r.current,M=Xn(),L=qr(v);return l=f0(l),r.context===null?r.context=l:r.pendingContext=l,r=mr(M,L),r.payload={element:n},d=d===void 0?null:d,d!==null&&(r.callback=d),n=Vr(v,r,L),n!==null&&(Di(n,v,L,M),bl(n,v,L)),L}function Yl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function p0(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function Eh(n,r){p0(n,r),(n=n.alternate)&&p0(n,r)}function X1(){return null}var m0=typeof reportError=="function"?reportError:function(n){console.error(n)};function Th(n){this._internalRoot=n}$l.prototype.render=Th.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));ql(n,r,null,null)},$l.prototype.unmount=Th.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;ws(function(){ql(null,n,null,null)}),r[ur]=null}};function $l(n){this._internalRoot=n}$l.prototype.unstable_scheduleHydration=function(n){if(n){var r=Bt();n={blockedOn:null,target:n,priority:r};for(var l=0;l<Ur.length&&r!==0&&r<Ur[l].priority;l++);Ur.splice(l,0,n),l===0&&tp(n)}};function Ch(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Kl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function g0(){}function j1(n,r,l,d,v){if(v){if(typeof d=="function"){var M=d;d=function(){var de=Yl(L);M.call(de)}}var L=d0(r,d,n,0,null,!1,!1,"",g0);return n._reactRootContainer=L,n[ur]=L.current,uo(n.nodeType===8?n.parentNode:n),ws(),L}for(;v=n.lastChild;)n.removeChild(v);if(typeof d=="function"){var B=d;d=function(){var de=Yl(K);B.call(de)}}var K=bh(n,0,!1,null,null,!1,!1,"",g0);return n._reactRootContainer=K,n[ur]=K.current,uo(n.nodeType===8?n.parentNode:n),ws(function(){ql(r,K,l,d)}),K}function Zl(n,r,l,d,v){var M=l._reactRootContainer;if(M){var L=M;if(typeof v=="function"){var B=v;v=function(){var K=Yl(L);B.call(K)}}ql(r,L,n,v)}else L=j1(l,r,n,v,d);return Yl(L)}Ot=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=Pt(r.pendingLanes);l!==0&&(Kn(r,l|1),ti(r,pe()),(Lt&6)===0&&(fa=pe()+500,Hr()))}break;case 13:ws(function(){var d=pr(n,1);if(d!==null){var v=Xn();Di(d,n,1,v)}}),Eh(n,1)}},qt=function(n){if(n.tag===13){var r=pr(n,134217728);if(r!==null){var l=Xn();Di(r,n,134217728,l)}Eh(n,134217728)}},Ri=function(n){if(n.tag===13){var r=qr(n),l=pr(n,r);if(l!==null){var d=Xn();Di(l,n,r,d)}Eh(n,r)}},Bt=function(){return Tt},Pi=function(n,r){var l=Tt;try{return Tt=n,r()}finally{Tt=l}},gt=function(n,r,l){switch(r){case"input":if(Vt(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var d=l[r];if(d!==n&&d.form===n.form){var v=pl(d);if(!v)throw Error(t(90));ht(d),Vt(d,v)}}}break;case"textarea":He(n,l);break;case"select":r=l.value,r!=null&&Dt(n,!!l.multiple,r,!1)}},ke=vh,we=ws;var q1={usingClientEntryPoint:!1,Events:[po,Js,pl,ve,Ve,vh]},Ao={findFiberByHostInstance:ms,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Y1={bundleType:Ao.bundleType,version:Ao.version,rendererPackageName:Ao.rendererPackageName,rendererConfig:Ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ds(n),n===null?null:n.stateNode},findFiberByHostInstance:Ao.findFiberByHostInstance||X1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{le=Ql.inject(Y1),Ge=Ql}catch{}}return ni.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q1,ni.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ch(r))throw Error(t(200));return W1(n,r,null,l)},ni.createRoot=function(n,r){if(!Ch(n))throw Error(t(299));var l=!1,d="",v=m0;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(v=r.onRecoverableError)),r=bh(n,1,!1,null,null,l,!1,d,v),n[ur]=r.current,uo(n.nodeType===8?n.parentNode:n),new Th(r)},ni.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ds(r),n=n===null?null:n.stateNode,n},ni.flushSync=function(n){return ws(n)},ni.hydrate=function(n,r,l){if(!Kl(r))throw Error(t(200));return Zl(null,n,r,!0,l)},ni.hydrateRoot=function(n,r,l){if(!Ch(n))throw Error(t(405));var d=l!=null&&l.hydratedSources||null,v=!1,M="",L=m0;if(l!=null&&(l.unstable_strictMode===!0&&(v=!0),l.identifierPrefix!==void 0&&(M=l.identifierPrefix),l.onRecoverableError!==void 0&&(L=l.onRecoverableError)),r=d0(r,null,n,1,l??null,v,!1,M,L),n[ur]=r.current,uo(n),d)for(n=0;n<d.length;n++)l=d[n],v=l._getVersion,v=v(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,v]:r.mutableSourceEagerHydrationData.push(l,v);return new $l(r)},ni.render=function(n,r,l){if(!Kl(r))throw Error(t(200));return Zl(null,n,r,!1,l)},ni.unmountComponentAtNode=function(n){if(!Kl(n))throw Error(t(40));return n._reactRootContainer?(ws(function(){Zl(null,null,n,!1,function(){n._reactRootContainer=null,n[ur]=null})}),!0):!1},ni.unstable_batchedUpdates=vh,ni.unstable_renderSubtreeIntoContainer=function(n,r,l,d){if(!Kl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Zl(n,r,l,!1,d)},ni.version="18.3.1-next-f1338f8080-20240426",ni}var b0;function r_(){if(b0)return Ph.exports;b0=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),Ph.exports=i_(),Ph.exports}var E0;function s_(){if(E0)return Jl;E0=1;var a=r_();return Jl.createRoot=a.createRoot,Jl.hydrateRoot=a.hydrateRoot,Jl}var a_=s_(),he=Td();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),l_=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,i)=>i?i.toUpperCase():t.toLowerCase()),T0=a=>{const e=l_(a);return e.charAt(0).toUpperCase()+e.slice(1)},dx=(...a)=>a.filter((e,t,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var c_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=he.forwardRef(({color:a="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:s="",children:o,iconNode:c,...u},h)=>he.createElement("svg",{ref:h,...c_,width:e,height:e,stroke:a,strokeWidth:i?Number(t)*24/Number(e):t,className:dx("lucide",s),...u},[...c.map(([f,p])=>he.createElement(f,p)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=(a,e)=>{const t=he.forwardRef(({className:i,...s},o)=>he.createElement(u_,{ref:o,iconNode:e,className:dx(`lucide-${o_(T0(a))}`,`lucide-${a}`,i),...s}));return t.displayName=T0(a),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],px=Mn("camera",h_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],d_=Mn("circle-alert",f_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],m_=Mn("circle",p_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=[["path",{d:"M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2",key:"1fvzgz"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2",key:"1kc0my"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8",key:"10h0bg"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]],x_=Mn("hand",g_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],__=Mn("mic-off",v_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]],C0=Mn("mic",y_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z",key:"1pctta"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",key:"x3v2xh"}]],M_=Mn("monitor-play",S_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],b_=Mn("music",w_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]],T_=Mn("orbit",E_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]],A_=Mn("power",C_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],P_=Mn("refresh-cw",R_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],mx=Mn("rotate-ccw",L_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]],N_=Mn("sliders-horizontal",I_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],U_=Mn("sparkles",F_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],k_=Mn("square",D_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196",key:"w8jjjt"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2",key:"1xawa7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],z_=Mn("video-off",O_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]],H_=Mn("video",B_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],V_=Mn("volume-2",G_);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],X_=Mn("volume-x",W_);function j_({onVideoReady:a}){const e=he.useRef(null),[t,i]=he.useState(""),[s,o]=he.useState(!0),[c,u]=he.useState(0),h=async()=>{try{if(o(!0),i(""),!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia)throw new Error("Camera API not supported in this browser. Please use a modern browser like Chrome, Firefox, or Edge.");const g=await navigator.mediaDevices.getUserMedia({video:{width:640,height:480,facingMode:"user"},audio:!1});e.current&&(e.current.srcObject=g,e.current.onloadedmetadata=()=>{var m;(m=e.current)==null||m.play(),a(e.current),o(!1)})}catch(g){o(!1),g instanceof Error&&(g.name==="NotAllowedError"||g.name==="PermissionDeniedError"?i("Camera permission denied. Please click the camera icon in your browser's address bar and allow camera access, then click Retry below."):g.name==="NotFoundError"?i("No camera found. Please connect a camera to your device."):g.name==="NotReadableError"?i("Camera is already in use by another application. Please close other apps using the camera and try again."):g.name==="OverconstrainedError"?(i("Camera does not meet requirements. Trying with default settings..."),setTimeout(()=>{f()},1e3)):i("Error: "+g.message))}},f=async()=>{try{o(!0),i("");const g=await navigator.mediaDevices.getUserMedia({video:!0,audio:!1});e.current&&(e.current.srcObject=g,e.current.onloadedmetadata=()=>{var m;(m=e.current)==null||m.play(),a(e.current),o(!1)})}catch{o(!1),i("Unable to access camera with default settings.")}},p=()=>{u(g=>g+1),h()};return he.useEffect(()=>(h(),()=>{var g;(g=e.current)!=null&&g.srcObject&&e.current.srcObject.getTracks().forEach(y=>y.stop())}),[a]),H.jsxs("div",{className:"relative",children:[H.jsx("video",{ref:e,className:"w-48 h-36 rounded-lg border-2 border-white/20 shadow-lg bg-black",style:{transform:"scaleX(-1)"},playsInline:!0,muted:!0}),t&&H.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center bg-black/95 rounded-lg p-3 gap-2",children:[H.jsx(d_,{className:"w-6 h-6 text-red-400"}),H.jsx("p",{className:"text-[10px] text-red-400 text-center leading-tight",children:t}),H.jsxs("button",{onClick:p,className:"mt-1 px-3 py-1 bg-white/10 hover:bg-white/20 rounded text-[10px] text-white flex items-center gap-1 transition-colors",children:[H.jsx(P_,{className:"w-3 h-3"}),"Retry"]}),H.jsx("a",{href:"https://support.google.com/chrome/answer/2693767",target:"_blank",rel:"noopener noreferrer",className:"text-[9px] text-blue-400 hover:text-blue-300 underline",children:"How to enable camera"})]}),s&&!t&&H.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center bg-black/80 rounded-lg gap-2",children:[H.jsx(px,{className:"w-6 h-6 text-white/60 animate-pulse"}),H.jsx("p",{className:"text-xs text-white/60",children:"Loading camera..."})]})]})}const q_=3,gx=400,Y_=.75,$_={mic:"ROOM",music:"TAB",off:"MUTE"},K_={mic:"Take sound: the room through the microphone, music and all, as it actually sounded (S)",music:"Take sound: straight off a tab or the machine, with no room in it. Asks which, each take (S)",off:"Take sound: none (S)"};function A0(a){return a==="mic"?"music":a==="music"?"off":"mic"}async function Z_(a,e){if(a==="off")return{stream:null,owned:!1};if(a==="mic"){if(e&&e.getAudioTracks().some(t=>t.readyState==="live"))return{stream:e,owned:!1};try{return{stream:await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1}}),owned:!0}}catch{return{stream:null,owned:!1,problem:"The microphone was refused, so this take has no sound."}}}try{const t=await navigator.mediaDevices.getDisplayMedia({video:!0,audio:!0});for(const i of t.getVideoTracks())i.stop();return t.getAudioTracks().length===0?{stream:null,owned:!1,problem:'No sound came through. Chrome asks you to tick "share tab audio" in the picker; other browsers do not offer it at all, so MIC is the one that always works.'}:{stream:t,owned:!0}}catch{return{stream:null,owned:!1,problem:"No source was picked, so this take has no sound."}}}function Q_({selectedColors:a,hue:e,saturation:t,mode:i,onHueChange:s,onModeChange:o,autoHueEnabled:c,onAutoHueToggle:u}){const h=(f,p,g)=>{f=f/360,p=p/100,g=g/100;let m,y,x;if(p===0)m=y=x=g;else{const _=(E,C,I)=>(I<0&&(I+=1),I>1&&(I-=1),I<.16666666666666666?E+(C-E)*6*I:I<.5?C:I<.6666666666666666?E+(C-E)*(.6666666666666666-I)*6:E),S=g<.5?g*(1+p):g+p-g*p,b=2*g-S;m=_(b,S,f+.3333333333333333),y=_(b,S,f),x=_(b,S,f-.3333333333333333)}const w=_=>{const S=Math.round(_*255).toString(16);return S.length===1?"0"+S:S};return`#${w(m)}${w(y)}${w(x)}`};return H.jsxs("div",{className:"w-full flex items-center gap-4 px-6 font-mono",children:[H.jsxs("div",{className:"flex gap-1",children:[H.jsx("button",{onClick:()=>o("black"),className:`px-2 py-1 text-[10px] rounded transition-all ${i==="black"?"bg-white/20 text-white":"bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60"}`,title:"1 Color (Fn key)",children:"1C"}),H.jsx("button",{onClick:()=>o("contrast"),className:`px-2 py-1 text-[10px] rounded transition-all ${i==="contrast"?"bg-white/20 text-white":"bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60"}`,title:"2 Colors (Ctrl key)",children:"2C"}),H.jsx("button",{onClick:()=>o("grayscale"),className:`px-2 py-1 text-[10px] rounded transition-all ${i==="grayscale"?"bg-white/20 text-white":"bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60"}`,title:"Black & White (Option/Alt key)",children:"B/W"})]}),i!=="grayscale"&&H.jsxs("div",{className:"flex-1 relative h-6",children:[H.jsx("div",{className:"absolute inset-0 rounded-full",style:{background:"linear-gradient(to right, #ff0000, #ffff00, #00ff00, #00ffff, #0000ff, #ff00ff, #ff0000)"}}),H.jsx("input",{type:"range",min:"0",max:"360",value:e,onChange:f=>s(Number(f.target.value)),className:"vj-slider-bare absolute inset-0 w-full appearance-none bg-transparent cursor-pointer"}),H.jsx("div",{className:"absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 border-white shadow-lg pointer-events-none",style:{left:`calc(${e/360*100}% - 10px)`,backgroundColor:h(e,t,50)}})]}),i!=="grayscale"&&H.jsx("button",{onClick:u,className:`px-3 py-1 text-[10px] rounded transition-all whitespace-nowrap ${c?"bg-cyan-500/30 text-cyan-300 border border-cyan-400/50":"bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/60"}`,title:"Auto-rotate hue palette",children:c?"⟳ AUTO":"AUTO"})]})}const ir={geometric:{pattern:"geometric",name:"Geometric",short:"Geometric",category:"2D",key:"1",description:"Rotating polygons with trails"},particles:{pattern:"particles",name:"Particles",short:"Particles",category:"2D",key:"2",description:"Dynamic particle system"},waves:{pattern:"waves",name:"Waves",short:"Waves",category:"2D",key:"3",description:"Flowing wave patterns"},technical:{pattern:"technical",name:"Technical Hand Tracker",short:"Tracker",category:"2D",key:"4",description:"Hand tracking visualization"},lottie:{pattern:"lottie",name:"Lottie Inspired",short:"Lottie",category:"2D",key:"5",description:"Animated circular patterns"},"lottie-classic":{pattern:"lottie-classic",name:"Classic Lottie",short:"Lottie 2",category:"2D",key:"Q",description:"Classic Lottie animation"},linefield:{pattern:"linefield",name:"Line Field",short:"Lines",category:"2D",key:"6",description:"Dynamic line fields"},chromatic:{pattern:"chromatic",name:"Chromatic Glow",short:"Chroma",category:"2D",key:"7",description:"RGB chromatic aberration"},halftone:{pattern:"halftone",name:"Halftone Matrix",short:"Halftone",category:"2D",key:"8",description:"Halftone dot patterns"},matrix:{pattern:"matrix",name:"Digital Grid",short:"Grid",category:"2D",key:"9",description:"Matrix-style grid"},distortedcamera:{pattern:"distortedcamera",name:"Distorted Camera",short:"Camera",category:"2D",key:"W",description:"Gesture-controlled camera distortion with chromatic effects"},thicklines:{pattern:"thicklines",name:"Thick Lines",short:"Blocks",category:"2D",key:"=",description:"Rotating blocks with thickness response"},flowfield:{pattern:"flowfield",name:"Flow Field",short:"Flow",category:"2D",key:"D",description:"Flowing vector field"},liquidchrome:{pattern:"liquidchrome",name:"Liquid Chrome",short:"Chrome",category:"2D",key:"-",description:"Iridescent liquid metal simulation"},glitch:{pattern:"glitch",name:"Glitch Network",short:"Glitch",category:"3D",key:"1",description:"Network glitch with perspective effects"},cyberstream:{pattern:"cyberstream",name:"Cyber Stream",short:"Cyber",category:"3D",key:"2",description:"Cyberpunk stream with depth perspective"},morphing:{pattern:"morphing",name:"Morphing Sphere",short:"Sphere",category:"3D",key:"=",description:"Three.js morphing icosphere"},cubewall:{pattern:"cubewall",name:"Cube Wall",short:"Cubes",category:"3D",key:"4",description:"Three.js cube grid waves"},facecloud:{pattern:"facecloud",name:"Op-Art Grid",short:"Op-Art",category:"3D",key:"5",description:"Op-art grid with perspective"},face:{pattern:"face",name:"Face Mesh",short:"Face",category:"3D",key:"-",description:"MediaPipe face tracking with glowing mesh"},"smokehand-torus":{pattern:"smokehand-torus",name:"Smoke Torus",short:"Torus",category:"3D",key:"8",description:"Particle smoke shaped around a torus"},"smokehand-hand":{pattern:"smokehand-hand",name:"Smoke Hand",short:"Hand",category:"3D",key:"7",description:"Particle smoke shaped around a hand model"},"network-cube":{pattern:"network-cube",name:"Network Cube",short:"Network",category:"3D",key:"9",description:"Sparse cubic constellation"},"elastic-net":{pattern:"elastic-net",name:"Elastic Net",short:"Elastic",category:"3D",key:"0",description:"Elastic neural network simulation"},ripple:{pattern:"ripple",name:"Water Ripple",short:"Ripple",category:"TD",key:"1",description:"Camera refracted through a height field your hands leave behind"},text:{pattern:"text",name:"Kinetic Type",short:"Type",category:"TD",key:"2",description:"Your words, extruded and pushed around by your hands"},video:{pattern:"video",name:"Clip",short:"Clip",category:"TD",key:"3",description:"Your own footage, sheared into sliding bands"},chrome:{pattern:"chrome",name:"Chrome",short:"Chrome",category:"TD",key:"5",description:"Liquid metal on black, splitting light into rainbow at its edges"},mosaic:{pattern:"mosaic",name:"Mosaic",short:"Mosaic",category:"TD",key:"4",description:"Your video or photo rebuilt out of letters, dots, blocks or bars"},digitalblocks:{pattern:"digitalblocks",name:"Digital Horizon",short:"Horizon",category:"2D",key:"0",description:"Glitchy digital data sorting"}},Is=10,xx="vj-setlist";function jo(a){return a===9?"0":String(a+1)}function yf(a){return a==="0"?9:a>="1"&&a<="9"?Number(a)-1:-1}const Nh=["geometric","waves","particles","halftone","ripple","flowfield"];function J_(a){return typeof a=="string"&&a in ir}function ey(){try{const a=localStorage.getItem(xx);if(a===null)return Nh;const e=JSON.parse(a);return Array.isArray(e)?e.filter(J_).filter((i,s,o)=>o.indexOf(i)===s).slice(0,Is):Nh}catch{return Nh}}function ty(a){try{localStorage.setItem(xx,JSON.stringify(a))}catch{}}function ny(a){return a.gesture==="pinch"?"PINCH":a.fingerCount===void 0?null:a.fingerCount===2?"MED":a.fingerCount>=5?"FAST":`${a.fingerCount}F`}function R0({label:a,hand:e}){const t=ny(e);return H.jsxs("div",{children:[H.jsx("div",{className:"text-white/90",children:a}),t&&H.jsx("div",{className:"text-cyan-400",children:t})]})}const iy=[{key:"bass",label:"LOW",band:"bass"},{key:"lowMid",label:"L-MID",band:"bass"},{key:"mid",label:"MID",band:"mid"},{key:"high",label:"HIGH",band:"high"}],ry=[{band:"bass",label:"LOWS",hint:"Kick and bassline drive scale, weight and push"},{band:"mid",label:"MIDS",hint:"Melody and voice drive speed and movement"},{band:"high",label:"HIGHS",hint:"Hats and air drive density and detail"},{band:"beat",label:"BEAT",hint:"Onsets hit the visuals, the way a clap does"}];function sy(a){const e=Math.floor(a);return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}function Cs({label:a,active:e,warn:t,onClick:i,title:s,children:o}){return H.jsxs("button",{onClick:i,title:s,className:"flex flex-col items-center gap-1 group/btn",children:[H.jsx("span",{className:`w-8 h-8 rounded-full transition-all flex items-center justify-center group-hover/btn:scale-105 group-active/btn:scale-95 ${e?t?"bg-cyan-400 text-black shadow-lg shadow-cyan-400/40":"bg-white text-black shadow-lg shadow-white/40":"bg-white/10 text-white/60 group-hover/btn:bg-white/20 group-hover/btn:text-white"}`,children:o}),H.jsx("span",{className:`text-[8px] tracking-widest transition-colors ${e?"text-white/80":"text-white/35"}`,children:a})]})}function ay({currentPattern:a,onPatternChange:e,layers:t,selectedLayer:i,onPatternHold:s,onLayerCycle:o,showCamera:c,onCameraToggle:u,handData:h,selectedColors:f,hue:p,saturation:g,colorMode:m,onHueChange:y,onSaturationChange:x,onColorModeChange:w,autoHueEnabled:_,onAutoHueToggle:S,set:b,onOpenLibrary:E,audioEnabled:C,onAudioToggle:I,audioSensitivity:A,onAudioSensitivityChange:N,audioUse:T,onAudioUseToggle:F,audioLevels:z,motion:D,onMotionChange:G,idleDrive:ne,onIdleDriveToggle:se,fxEnabled:X,fxActive:V,onFxToggle:Y,canRecord:q,recording:ie,recordSeconds:te,onRecordToggle:O,sound:ee,onSoundCycle:ge,output:Te,onOutputToggle:Se}){var Oe;const W=he.useRef(null),me=()=>{W.current&&(clearTimeout(W.current.timer),W.current=null)},oe=Ce=>{me(),W.current={pattern:Ce,fired:!1,timer:window.setTimeout(()=>{W.current&&(W.current.fired=!0),s(Ce)},gx)}},Re=Ce=>{const ht=W.current;!ht||ht.pattern!==Ce||(clearTimeout(ht.timer),W.current=null,ht.fired||e(Ce))};return H.jsxs(H.Fragment,{children:[H.jsx("div",{className:"absolute top-4 left-1/2 -translate-x-1/2 z-50",children:H.jsx("div",{className:"bg-black/70 backdrop-blur-sm rounded-full py-2 px-6 border border-white/20 font-mono",children:H.jsxs("div",{className:"flex items-center gap-4",children:[H.jsx("button",{onClick:E,title:"Back to the library to change the set (Esc)",className:"px-3 py-1 rounded text-[10px] tracking-wider text-white/40 transition-all hover:bg-white/10 hover:text-white/80",children:"SET"}),H.jsx("div",{className:"w-px h-6 bg-white/20"}),H.jsx("div",{className:"flex items-center gap-1.5",children:b.map((Ce,ht)=>{const Qe=t.findIndex(mt=>mt.pattern===Ce),pt=Qe===i,wt=Qe!==-1&&!pt;return H.jsxs("button",{onPointerDown:()=>oe(Ce),onPointerUp:()=>Re(Ce),onPointerLeave:me,className:"relative flex w-[46px] shrink-0 flex-col items-center gap-0.5 group/set",title:`${ir[Ce].name} (${jo(ht)})${Qe!==-1?` — layer ${Qe+1}`:""} · hold to stack`,children:[H.jsxs("span",{className:`relative flex h-7 w-7 items-center justify-center rounded-full text-xs transition-all ${pt?"bg-white text-black shadow-lg shadow-white/50":wt?"bg-white/25 text-white ring-1 ring-emerald-400/70":"bg-white/10 text-white/60 group-hover/set:bg-white/20 group-hover/set:text-white/90"}`,children:[jo(ht),Qe!==-1&&t.length>1&&H.jsx("span",{className:"absolute -right-1 -top-1 h-3 w-3 rounded-full bg-emerald-400 text-center text-[7px] leading-3 text-black",children:Qe+1})]}),H.jsx("span",{className:`w-full truncate text-center text-[8px] leading-none transition-colors ${pt?"text-white/85":"text-white/35 group-hover/set:text-white/65"}`,children:ir[Ce].short})]},Ce)})}),H.jsx("div",{className:"w-px h-6 bg-white/20"}),H.jsxs("div",{className:"flex items-center gap-1.5",title:"How hard the hands drive every visual (- and =)",children:[H.jsx("span",{className:"text-[8px] tracking-widest text-white/35",children:"HANDS"}),H.jsx("input",{type:"range","aria-label":"Hand motion",min:0,max:2,step:.05,value:D,onChange:Ce=>G(parseFloat(Ce.target.value)),className:"vj-slider h-1 w-16 cursor-pointer appearance-none rounded-full focus:outline-none",style:{background:`linear-gradient(to right, rgba(255,255,255,0.85) ${D/2*100}%, rgba(255,255,255,0.15) ${D/2*100}%)`}}),H.jsxs("span",{className:`w-7 text-[9px] tabular-nums ${D>1.35?"text-amber-300":D<.65?"text-cyan-300":"text-white/55"}`,children:[Math.round(D*100),"%"]})]}),t.length>1&&H.jsxs(H.Fragment,{children:[H.jsx("div",{className:"w-px h-6 bg-white/20"}),H.jsxs("button",{onClick:o,title:"The layer the sliders and colours act on (L) — fade it with [ and ]",className:"px-2 py-1 rounded text-[10px] whitespace-nowrap bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 transition-all",children:["L",i+1,"/",t.length,H.jsxs("span",{className:"text-emerald-300/60",children:[" ",Math.round((((Oe=t[i])==null?void 0:Oe.opacity)??1)*100),"%"]})]})]})]})})}),H.jsxs("div",{className:"absolute bottom-[25px] left-6 right-6 z-50 flex items-end gap-4 font-mono pointer-events-none",children:[H.jsx("div",{className:"shrink-0 pointer-events-auto",children:H.jsxs("div",{className:"bg-black/70 backdrop-blur-sm rounded-2xl py-2 px-3 border border-white/20 flex items-end gap-2.5 w-fit",children:[H.jsx(Cs,{label:"CAM",active:c,onClick:u,title:"Show the camera preview (C)",children:c?H.jsx(H_,{className:"w-3.5 h-3.5"}):H.jsx(z_,{className:"w-3.5 h-3.5"})}),H.jsx(Cs,{label:"MIC",active:C,onClick:I,title:"Audio-reactive mode: drive the visuals from the microphone (A)",children:C?H.jsx(C0,{className:"w-3.5 h-3.5"}):H.jsx(__,{className:"w-3.5 h-3.5"})}),H.jsx(Cs,{label:"AUTO",active:ne,onClick:se,title:"Auto-motion: keep hand-driven visuals moving when no hands are tracked (I)",children:H.jsx(T_,{className:"w-3.5 h-3.5"})}),H.jsx("div",{className:"w-px h-8 bg-white/15 self-center"}),H.jsx(Cs,{label:"FX",active:X&&V,warn:X&&V,onClick:Y,title:X?"Post effects are on. Click to bypass the whole chain, keeping every setting (X)":"Post effects bypassed. Click to bring them back (X)",children:H.jsx(U_,{className:"w-3.5 h-3.5"})}),H.jsx("div",{className:"w-px h-8 bg-white/15 self-center"}),H.jsx(Cs,{label:"OUT",active:Te,onClick:Se,title:Te?"Close the projector window (O)":"Open a second window with only the visuals in it — drag it onto the projector while these controls stay here (O)",children:H.jsx(M_,{className:"w-3.5 h-3.5"})}),q&&H.jsxs(H.Fragment,{children:[H.jsx(Cs,{label:$_[ee],active:ee!=="off",onClick:ge,title:K_[ee],children:ee==="off"?H.jsx(X_,{className:"w-3.5 h-3.5"}):ee==="music"?H.jsx(b_,{className:"w-3.5 h-3.5"}):H.jsx(V_,{className:"w-3.5 h-3.5"})}),H.jsx(Cs,{label:ie?sy(te):"REC",active:ie,warn:ie,onClick:O,title:ie?"Stop and save the take (R)":"Record the visuals — and the camera if its preview is up — with none of these controls in it (R)",children:ie?H.jsx(k_,{className:"w-3 h-3 fill-current"}):H.jsx(m_,{className:"w-3.5 h-3.5 fill-current text-red-500 group-hover/btn:text-red-400"})})]})]})}),H.jsx("div",{className:"flex-1 min-w-0 flex justify-center pointer-events-none",children:H.jsx("div",{className:"bg-black/70 backdrop-blur-sm rounded-full py-2 px-6 border border-white/20 max-w-4xl w-full pointer-events-auto",children:H.jsx(Q_,{selectedColors:f,hue:p,saturation:g,mode:m,onHueChange:y,onModeChange:w,autoHueEnabled:_,onAutoHueToggle:S})})}),!C&&H.jsxs("div",{className:"shrink-0 bg-black/70 backdrop-blur-sm rounded-lg p-4 border border-white/20 space-y-2 text-xs min-w-[200px] font-mono animate-in fade-in duration-300 pointer-events-auto",children:[H.jsx("div",{className:"text-white/80 mb-2",children:"HAND"}),H.jsxs("div",{className:"space-y-1",children:[h.left&&H.jsx(R0,{label:"L HAND",hand:h.left}),h.right&&H.jsx(R0,{label:"R HAND",hand:h.right}),h.clapping&&H.jsx("div",{className:"text-red-500 text-base animate-bounce",children:"CLAP!"}),!h.left&&!h.right&&H.jsx("div",{className:"text-white/50",children:"NO HANDS"})]}),H.jsxs("div",{className:"text-white/50 text-[10px] mt-2 pt-2 border-t border-white/20",children:["OPEN=FOLLOW",H.jsx("br",{}),"PINCH=SLOW 2F=MED 5F=FAST",H.jsx("br",{}),"CLAP=EXPLODE"]})]}),C&&H.jsx("div",{className:"shrink-0 animate-in slide-in-from-right-5 fade-in duration-300 pointer-events-auto",children:H.jsxs("div",{className:"bg-black/70 backdrop-blur-sm rounded-xl p-4 border border-white/20 font-mono flex flex-col gap-4 w-[160px]",children:[H.jsxs("div",{className:"flex items-center gap-2 border-b border-white/10 pb-2",children:[H.jsx(C0,{className:"w-3.5 h-3.5 text-white/90 animate-pulse"}),H.jsx("span",{className:"text-[10px] font-bold text-white/80 tracking-wider",children:"AUDIO"})]}),H.jsxs("div",{className:"space-y-1 group",children:[H.jsxs("div",{className:"flex justify-between text-[9px] text-white/50 font-medium",children:[H.jsx("span",{className:"group-hover:text-white/80 transition-colors",children:"GAIN"}),H.jsxs("span",{className:"text-white",children:[Math.round(A*100),"%"]})]}),H.jsx("div",{className:"relative h-4 flex items-center",children:H.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:A,onChange:Ce=>N(parseFloat(Ce.target.value)),className:"vj-slider w-full h-1 bg-white/20 rounded-full appearance-none cursor-pointer focus:outline-none",style:{backgroundImage:`linear-gradient(to right, white 0%, white ${A*100}%, rgba(255,255,255,0.2) ${A*100}%)`}})})]}),H.jsxs("div",{className:"space-y-1",children:[H.jsxs("div",{className:"flex justify-between text-[9px] text-white/50 font-medium",children:[H.jsx("span",{children:"LEVELS"}),H.jsx("span",{className:`transition-colors ${z.onset>.05?"text-cyan-300":"text-white/20"}`,children:"●"})]}),H.jsx("div",{className:"flex items-end gap-1 h-10",children:iy.map(({key:Ce,label:ht,band:Qe})=>H.jsxs("div",{className:"flex-1 flex flex-col items-center gap-1",children:[H.jsx("div",{className:"relative w-full h-8 rounded-sm bg-white/10 overflow-hidden",children:H.jsx("div",{className:"absolute inset-x-0 bottom-0 bg-white transition-[height] duration-75",style:{height:`${Math.round(z[Ce]*100)}%`}})}),H.jsx("span",{className:`text-[7px] tracking-wider ${T[Qe]?"text-white/50":"text-white/20"}`,children:ht})]},Ce))})]}),H.jsx("div",{className:"flex flex-col gap-1.5",children:ry.map(({band:Ce,label:ht,hint:Qe})=>H.jsxs("button",{onClick:()=>F(Ce),title:Qe,className:`flex justify-between items-center px-2 py-1.5 rounded-md text-[9px] font-bold transition-all border ${T[Ce]?"bg-white text-black border-white shadow-[0_0_10px_rgba(255,255,255,0.3)]":"bg-transparent text-white/50 border-white/10 hover:bg-white/10 hover:text-white"}`,children:[H.jsx("span",{children:ht}),H.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${T[Ce]?"bg-black":"bg-white/30"}`})]},Ce))})]})})]})]})}const oy="modulepreload",ly=function(a,e){return new URL(a,e).href},P0={},vx=function(e,t,i){let s=Promise.resolve();if(t&&t.length>0){let c=function(p){return Promise.all(p.map(g=>Promise.resolve(g).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};const u=document.getElementsByTagName("link"),h=document.querySelector("meta[property=csp-nonce]"),f=(h==null?void 0:h.nonce)||(h==null?void 0:h.getAttribute("nonce"));s=c(t.map(p=>{if(p=ly(p,i),p in P0)return;P0[p]=!0;const g=p.endsWith(".css"),m=g?'[rel="stylesheet"]':"";if(!!i)for(let w=u.length-1;w>=0;w--){const _=u[w];if(_.href===p&&(!g||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${p}"]${m}`))return;const x=document.createElement("link");if(x.rel=g?"stylesheet":oy,g||(x.as="script"),x.crossOrigin="",x.href=p,f&&x.setAttribute("nonce",f),document.head.appendChild(x),g)return new Promise((w,_)=>{x.addEventListener("load",w),x.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${p}`)))})}))}function o(c){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=c,window.dispatchEvent(u),!u.defaultPrevented)throw c}return s.then(c=>{for(const u of c||[])u.status==="rejected"&&o(u.reason);return e().catch(o)})},L0=30,I0=.15;function cy({videoElement:a,onHandData:e}){const t=he.useRef(null),i=he.useRef(!1),s=he.useRef(-1),o=he.useRef(null),c=he.useRef([]),u=he.useRef([]),h=he.useRef({}),f=he.useRef([]),p=he.useRef(null);return he.useEffect(()=>{let g=!0;const m=async()=>{if(!i.current)try{console.log("✋ Initializing MediaPipe Hand Landmarker (Tasks Vision API)...");const _=await vx(()=>import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14"),[],import.meta.url),{HandLandmarker:S,FilesetResolver:b}=_,E=await b.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm");t.current=await S.createFromOptions(E,{baseOptions:{modelAssetPath:"https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",delegate:"GPU"},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.7,minHandPresenceConfidence:.5,minTrackingConfidence:.5}),console.log("✅ Hand tracking initialized (Tasks Vision API)"),i.current=!0,g&&y()}catch(_){console.error("❌ Error initializing hand tracking:",_)}},y=()=>{const _=()=>{if(!g||!t.current||!a)return;const S=performance.now();if(a.currentTime!==s.current){s.current=a.currentTime;try{const b=t.current.detectForVideo(a,S);x(b)}catch(b){console.error("Hand detection error:",b)}}o.current=requestAnimationFrame(_)};_()},x=_=>{const S=Date.now(),b={left:null,right:null};if(_.landmarks&&_.handedness&&_.landmarks.length>0)if(_.handedness.forEach((E,C)=>{const I=_.landmarks[C],A=E[0].categoryName.toLowerCase(),N=I[9],T={x:1-N.x,y:N.y},F=hy(I),z=uy(I),D=A==="left"?u.current:c.current;let G=0;if(D.length>0){const q=D[D.length-1],ie=T.x-q.position.x,te=T.y-q.position.y,O=Math.sqrt(ie*ie+te*te),ee=(S-q.timestamp)/1e3;G=ee>0?O/ee:0,G=Math.min(G*2,3)}const ne=A==="left"?"right":"left";(D.length>0?D[D.length-1].gesture:null)!==F&&(h.current[ne]=S);const X=h.current[ne]||S,V=(S-X)/1e3;D.push({position:T,gesture:F,timestamp:S}),D.length>10&&D.shift(),f.current.push({x:T.x,y:T.y,hand:ne});const Y={position:T,gesture:F,pinchDistance:F==="pinch"?fy(I):void 0,velocity:G,holdDuration:V,fingerCount:z,landmarks:I.map(q=>({x:1-q.x,y:q.y,z:q.z}))};A==="left"?b.right=Y:b.left=Y}),b.left&&b.right){const E=b.left.position.x-b.right.position.x,C=b.left.position.y-b.right.position.y,I=Math.sqrt(E*E+C*C);b.distanceBetweenHands=I,I<I0&&(b.clapping=!0,b.clapIntensity=1-I/I0)}else p.current=null;f.current.length>L0&&(f.current=f.current.slice(-L0)),b.gestureTrail=[...f.current],e(b)},w=()=>{a&&a.readyState>=2?m():setTimeout(w,100)};return w(),()=>{if(g=!1,o.current!==null&&cancelAnimationFrame(o.current),t.current)try{t.current.close(),t.current=null}catch(_){console.warn("Error closing hand landmarker:",_)}i.current=!1}},[a,e]),null}function uy(a){if(!a||a.length<21)return 0;const e=a[0];a[9];let t=0;const i=a[4];a[3];const s=a[2],o=a[1],c=Math.sqrt(Math.pow(i.x-o.x,2)+Math.pow(i.y-o.y,2)),u=Math.sqrt(Math.pow(s.x-o.x,2)+Math.pow(s.y-o.y,2));c>u*1.2&&t++;const h=[{tip:8,pip:6,mcp:5},{tip:12,pip:10,mcp:9},{tip:16,pip:14,mcp:13},{tip:20,pip:18,mcp:17}],f=a[9];f.y-e.y,f.z-e.z;for(const p of h){const g=a[p.tip],m=a[p.pip],y=a[p.mcp],x=g.y<y.y-.02,w=Math.sqrt(Math.pow(g.x-e.x,2)+Math.pow(g.y-e.y,2)+Math.pow(g.z-e.z,2)),_=Math.sqrt(Math.pow(m.x-e.x,2)+Math.pow(m.y-e.y,2)+Math.pow(m.z-e.z,2)),S=w>_*1.05,b={x:y.x-m.x,y:y.y-m.y,z:y.z-m.z},E={x:g.x-m.x,y:g.y-m.y,z:g.z-m.z},C=Math.sqrt(b.x**2+b.y**2+b.z**2),I=Math.sqrt(E.x**2+E.y**2+E.z**2);if(C>0&&I>0){const N=b.x/C*(E.x/I)+b.y/C*(E.y/I)+b.z/C*(E.z/I)<-.3;(x||S||N)&&t++}else(x||S)&&t++}return t}function hy(a){if(!a||a.length<21)return"none";const e=a[9],t=a[4],i=a[8],s=a[12],o=a[16],c=a[20],u=a[6],h=a[10],f=a[14],p=a[18];if(Math.sqrt(Math.pow(t.x-i.x,2)+Math.pow(t.y-i.y,2)+Math.pow(t.z-i.z,2))<.06)return"pinch";const m=Math.sqrt(Math.pow(i.x-e.x,2)+Math.pow(i.y-e.y,2)+Math.pow(i.z-e.z,2)),y=Math.sqrt(Math.pow(u.x-e.x,2)+Math.pow(u.y-e.y,2)+Math.pow(u.z-e.z,2)),x=m>y*1.1,w=Math.sqrt(Math.pow(s.x-e.x,2)+Math.pow(s.y-e.y,2)+Math.pow(s.z-e.z,2)),_=Math.sqrt(Math.pow(h.x-e.x,2)+Math.pow(h.y-e.y,2)+Math.pow(h.z-e.z,2)),S=w>_*1.1,b=Math.sqrt(Math.pow(o.x-e.x,2)+Math.pow(o.y-e.y,2)+Math.pow(o.z-e.z,2)),E=Math.sqrt(Math.pow(f.x-e.x,2)+Math.pow(f.y-e.y,2)+Math.pow(f.z-e.z,2)),C=b>E*1.1,I=Math.sqrt(Math.pow(c.x-e.x,2)+Math.pow(c.y-e.y,2)+Math.pow(c.z-e.z,2)),A=Math.sqrt(Math.pow(p.x-e.x,2)+Math.pow(p.y-e.y,2)+Math.pow(p.z-e.z,2)),N=I>A*1.1,T=[x,S,C,N].filter(Boolean).length;return T>=3?"open":T<=1?"fist":"none"}function fy(a){const e=a[4],t=a[8];return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2)+Math.pow(e.z-t.z,2))}function dy({onGrant:a,onSkip:e}){return H.jsx("div",{className:"fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center",children:H.jsx("div",{className:"bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-xl rounded-2xl p-8 max-w-md border border-white/20 shadow-2xl",children:H.jsxs("div",{className:"text-center space-y-6",children:[H.jsx("div",{className:"flex justify-center",children:H.jsx("div",{className:"w-20 h-20 bg-purple-600/30 rounded-full flex items-center justify-center",children:H.jsx(px,{className:"w-10 h-10 text-purple-300"})})}),H.jsxs("div",{children:[H.jsx("h2",{className:"text-2xl text-white mb-2",children:"Camera Access Required"}),H.jsx("p",{className:"text-white/70 text-sm",children:"This VJ app needs camera access to track your hand movements and gestures for interactive visual control."})]}),H.jsx("div",{className:"bg-black/30 rounded-lg p-4 space-y-2 text-left",children:H.jsxs("div",{className:"flex items-start gap-3",children:[H.jsx(x_,{className:"w-5 h-5 text-green-400 mt-0.5 flex-shrink-0"}),H.jsxs("div",{className:"text-sm",children:[H.jsx("div",{className:"text-white/90",children:"Hand Tracking"}),H.jsx("div",{className:"text-white/60 text-xs",children:"Real-time gesture recognition"})]})]})}),H.jsxs("div",{className:"flex gap-3",children:[H.jsx("button",{onClick:e,className:"flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all",children:"Skip"}),H.jsx("button",{onClick:a,className:"flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white rounded-lg transition-all font-medium",children:"Allow Access"})]}),H.jsx("p",{className:"text-white/50 text-xs",children:"Your camera feed is processed locally on your device. No data is sent to external servers."})]})})})}function ii(a){return Number.isFinite(a)?Math.round(Math.min(255,Math.max(0,a))).toString(16).padStart(2,"0"):"00"}const Sf={physics:{initialVelocity:4,damping:.98},size:{baseRange:[100,200],growthMultiplier:1.5,shrinkMultiplier:.2,transitionSpeed:.3},glow:{layers:2,expansion:.4,layerFade:.3},emission:{openHandRate:.5,closedHandRate:.05},trail:{fadeAlpha:.3},limits:{maxParticles:50},explosion:{particleCount:50,speedRange:[5,20],sizeMultiplier:1.5,forceMultiplier:10,growthFactor:.8,vibrationDuration:.25,cooldown:1e3,flashDelay:20},controls:{fingerCountSpeed:{oneFinger:.01,twoFingers:1,threeFingers:1.4,fourFingers:1.7,fiveFingers:2},openOpacity:1,closedOpacity:1,fadeOutRate:.08}};function ss(a,e){let t=a;for(const i of e.split(".")){if(typeof t!="object"||t===null)return;t=t[i]}return typeof t=="number"?t:void 0}function vi(a,e){const t=structuredClone(a);for(const[i,s]of Object.entries(e)){if(!Number.isFinite(s)||ss(a,i)===void 0)continue;const o=i.split("."),c=o.pop();let u=t;for(const h of o)u=u[h];u[c]=s}return t}function N0(a){if(typeof a!="object"||a===null||Array.isArray(a))return{};const e={};for(const[t,i]of Object.entries(a)){if(typeof i!="object"||i===null||Array.isArray(i))continue;const s={};for(const[o,c]of Object.entries(i))typeof c=="number"&&Number.isFinite(c)&&(s[o]=c);Object.keys(s).length>0&&(e[t]=s)}return e}let _x=1,yx=0;function py(a,e){_x=e,yx+=a*e}function _n(){return _x}function Zo(){return yx}class Fh{constructor(e,t,i,s,o){U(this,"x");U(this,"y");U(this,"vx");U(this,"vy");U(this,"size");U(this,"color");U(this,"baseSize");U(this,"targetSize");U(this,"alpha",1);this.x=e,this.y=t;const c=o.physics.initialVelocity;this.vx=(Math.random()-.5)*c,this.vy=(Math.random()-.5)*c;const[u,h]=o.size.baseRange;this.baseSize=(u+Math.random()*(h-u))*s,this.size=this.baseSize,this.targetSize=this.baseSize,this.color=i}update(e,t,i,s){e?(this.targetSize=this.baseSize*s.size.growthMultiplier,this.alpha=s.controls.openOpacity,t>0&&(this.vx+=(Math.random()-.5)*t*s.explosion.forceMultiplier*i,this.vy+=(Math.random()-.5)*t*s.explosion.forceMultiplier*i,this.targetSize=this.baseSize*(1.2+t*s.explosion.growthFactor))):(this.targetSize=this.baseSize*s.size.shrinkMultiplier,this.alpha=Math.max(0,this.alpha-s.controls.fadeOutRate)),this.size+=(this.targetSize-this.size)*s.size.transitionSpeed,this.x+=this.vx*i,this.y+=this.vy*i,this.vx*=s.physics.damping,this.vy*=s.physics.damping}}class my{constructor(e,t){U(this,"cfg",Sf);U(this,"canvas");U(this,"ctx");U(this,"particles",[]);U(this,"time",0);U(this,"vibrationTimer",0);U(this,"isExploding",!1);this.canvas=e,this.ctx=t}setParams(e){this.cfg=vi(Sf,e)}render(e,t){this.time+=.016*_n(),this.ctx.fillStyle=`rgba(0, 0, 0, ${this.cfg.trail.fadeAlpha})`,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&!this.isExploding&&(this.createExplosionParticles(t),this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.004,i=Math.max(0,this.vibrationTimer));let s=this.cfg.controls.fingerCountSpeed.twoFingers,o=!1,c=!1,u=0,h=0;e.left&&(o=e.left.gesture==="open",u=e.left.fingerCount||0,e.left.gesture==="pinch"&&(u=1)),e.right&&(c=e.right.gesture==="open",h=e.right.fingerCount||0,e.right.gesture==="pinch"&&(h=1));const f=o||c,p=Math.max(u,h);if(p===1?s=this.cfg.controls.fingerCountSpeed.oneFinger:p===2?s=this.cfg.controls.fingerCountSpeed.twoFingers:p===3?s=this.cfg.controls.fingerCountSpeed.threeFingers:p===4?s=this.cfg.controls.fingerCountSpeed.fourFingers:p>=5&&(s=this.cfg.controls.fingerCountSpeed.fiveFingers),e.left){const m=e.left.gesture==="open"?this.cfg.emission.openHandRate:this.cfg.emission.closedHandRate;Math.random()<m&&this.particles.push(new Fh(e.left.position.x*this.canvas.width,e.left.position.y*this.canvas.height,t[Math.floor(Math.random()*t.length)],1,this.cfg))}if(e.right){const m=e.right.gesture==="open"?this.cfg.emission.openHandRate:this.cfg.emission.closedHandRate;Math.random()<m&&this.particles.push(new Fh(e.right.position.x*this.canvas.width,e.right.position.y*this.canvas.height,t[Math.floor(Math.random()*t.length)],1,this.cfg))}this.particles=this.particles.filter(g=>{if(g.update(f,i,s,this.cfg),g.alpha<.01)return!1;this.ctx.save(),this.ctx.globalAlpha=g.alpha;for(let m=0;m<this.cfg.glow.layers;m++){const y=g.size*(1+m*this.cfg.glow.expansion),x=this.ctx.createRadialGradient(g.x,g.y,0,g.x,g.y,y),w=(1-m*this.cfg.glow.layerFade)*g.alpha;x.addColorStop(0,g.color+ii(w*255)),x.addColorStop(.5,g.color+ii(w*150)),x.addColorStop(1,g.color+"00"),this.ctx.fillStyle=x,this.ctx.beginPath(),this.ctx.arc(g.x,g.y,y,0,Math.PI*2),this.ctx.fill()}return this.ctx.restore(),!0}),this.particles.length>this.cfg.limits.maxParticles&&(this.particles=this.particles.slice(-this.cfg.limits.maxParticles))}createExplosionParticles(e){const t=this.canvas.width/2,i=this.canvas.height/2;for(let s=0;s<this.cfg.explosion.particleCount;s++){const o=Math.random()*Math.PI*2,[c,u]=this.cfg.explosion.speedRange,h=c+Math.random()*(u-c),f=new Fh(t,i,e[Math.floor(Math.random()*e.length)],this.cfg.explosion.sizeMultiplier,this.cfg);f.vx=Math.cos(o)*h,f.vy=Math.sin(o)*h,this.particles.push(f)}this.ctx.fillStyle="#FFFFFFDD",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),setTimeout(()=>{this.ctx.fillStyle=e[0]+"80",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)},this.cfg.explosion.flashDelay),this.vibrationTimer=this.cfg.explosion.vibrationDuration,this.isExploding=!0,setTimeout(()=>{this.isExploding=!1},this.cfg.explosion.cooldown)}}const Mf={trail:{fadeAlpha:.1,lineThickness:2},fingerCountSpeed:{oneFinger:.003,normalFingers:1,fiveFingers:2},fingerCountStrokeWidth:{oneFinger:1,twoFingers:4.5,normalFingers:1.5,fiveFingers:6},complexity:{baseSides:3,leftHandMultiplier:1,rightHandMultiplier:.5,maxSides:12,minSides:3},vibration:{flashDuration:.8,shakeAmountX:40,shakeAmountY:40},polygon:{baseSize:100,strokeWidth:2},layers:{count:5,sizeGrowth:.3,rotationOffset:.5,baseOpacity:.3,opacityFade:.05},bridge:{thickness:5,waveAmplitude:30},animation:{baseRotationMultiplier:.01}};class F0{constructor(e,t){U(this,"cfg",Mf);U(this,"canvas");U(this,"ctx");U(this,"time",0);U(this,"vibrationTimer",0);this.canvas=e,this.ctx=t}setParams(e){this.cfg=vi(Mf,e)}render(e,t){var w,_,S,b;this.time+=.016*_n(),this.ctx.fillStyle=`rgba(0, 0, 0, ${this.cfg.trail.fadeAlpha})`,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&(this.ctx.fillStyle="#FFFFFFCC",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.vibrationTimer=this.cfg.vibration.flashDuration),this.vibrationTimer>0&&(this.vibrationTimer-=.016,i=Math.max(0,this.vibrationTimer));let s=1,o=this.cfg.complexity.baseSides,c=1;if(e.left&&e.left.gesture==="open"){const E=e.left.fingerCount||2;E===1?(s=this.cfg.fingerCountSpeed.oneFinger,c=this.cfg.fingerCountStrokeWidth.oneFinger):E===2?(s=this.cfg.fingerCountSpeed.normalFingers,c=this.cfg.fingerCountStrokeWidth.twoFingers):E===5?(s=this.cfg.fingerCountSpeed.fiveFingers,c=this.cfg.fingerCountStrokeWidth.fiveFingers):(s=this.cfg.fingerCountSpeed.normalFingers,c=this.cfg.fingerCountStrokeWidth.normalFingers),o=Math.floor(this.cfg.complexity.baseSides+E*this.cfg.complexity.leftHandMultiplier)}if(e.left&&e.left.gesture==="pinch"&&(s=this.cfg.fingerCountSpeed.oneFinger,c=this.cfg.fingerCountStrokeWidth.oneFinger,o=Math.floor(this.cfg.complexity.baseSides+1*this.cfg.complexity.leftHandMultiplier)),e.right&&e.right.gesture==="open"){const E=e.right.fingerCount||2;let C,I;E===1?(C=this.cfg.fingerCountSpeed.oneFinger,I=this.cfg.fingerCountStrokeWidth.oneFinger):E===2?(C=this.cfg.fingerCountSpeed.normalFingers,I=this.cfg.fingerCountStrokeWidth.twoFingers):E===5?(C=this.cfg.fingerCountSpeed.fiveFingers,I=this.cfg.fingerCountStrokeWidth.fiveFingers):(C=this.cfg.fingerCountSpeed.normalFingers,I=this.cfg.fingerCountStrokeWidth.normalFingers),s*=C,c=Math.max(c,I),o+=Math.floor(E*this.cfg.complexity.rightHandMultiplier)}e.right&&e.right.gesture==="pinch"&&(s*=this.cfg.fingerCountSpeed.oneFinger,c=Math.max(c,this.cfg.fingerCountStrokeWidth.oneFinger),o+=Math.floor(1*this.cfg.complexity.rightHandMultiplier));const u=this.time*s*this.cfg.animation.baseRotationMultiplier,h=i>0?(Math.random()-.5)*this.cfg.vibration.shakeAmountX*i:0,f=i>0?(Math.random()-.5)*this.cfg.vibration.shakeAmountY*i:0;this.drawGestureTrails(e,t);const p=(w=e.left)!=null&&w.position.x?e.left.position.x*this.canvas.width+h:this.canvas.width/2,g=(_=e.left)!=null&&_.position.y?e.left.position.y*this.canvas.height+f:this.canvas.height/2,m=(S=e.right)!=null&&S.position.x?e.right.position.x*this.canvas.width+h:this.canvas.width/2+100,y=(b=e.right)!=null&&b.position.y?e.right.position.y*this.canvas.height+f:this.canvas.height/2,x=this.cfg.polygon.baseSize*(1+i);for(let E=0;E<this.cfg.layers.count;E++){const C=x*(1+E*this.cfg.layers.sizeGrowth),I=u+E*this.cfg.layers.rotationOffset;e.left&&e.left.gesture==="open"&&this.drawPolygon(p,g,Math.max(this.cfg.complexity.minSides,Math.min(this.cfg.complexity.maxSides,o+E)),C+E*30,I,t[E%t.length],this.cfg.layers.baseOpacity-E*this.cfg.layers.opacityFade,c),e.right&&e.right.gesture==="open"&&this.drawPolygon(m,y,Math.max(this.cfg.complexity.minSides,Math.min(this.cfg.complexity.maxSides,o+E)),C+E*30,-I,t[(E+2)%t.length],this.cfg.layers.baseOpacity-E*this.cfg.layers.opacityFade,c)}e.left&&e.right&&e.left.gesture==="open"&&e.right.gesture==="open"&&this.drawBridge(p,g,m,y,t,x,o)}drawGestureTrails(e,t){if(!e.gestureTrail||e.gestureTrail.length<2)return;const i=e.gestureTrail;for(let s=1;s<i.length;s++){const o=i[s-1],c=i[s],u=s/i.length,h=c.hand==="left"?t[0]:t[2];this.ctx.strokeStyle=h+ii(u*100),this.ctx.lineWidth=this.cfg.trail.lineThickness*u,this.ctx.lineCap="round",this.ctx.beginPath(),this.ctx.moveTo(o.x*this.canvas.width,o.y*this.canvas.height),this.ctx.lineTo(c.x*this.canvas.width,c.y*this.canvas.height),this.ctx.stroke()}}drawPolygon(e,t,i,s,o,c,u,h){this.ctx.save(),this.ctx.translate(e,t),this.ctx.rotate(o),this.ctx.beginPath();for(let p=0;p<=i;p++){const g=p/i*Math.PI*2,m=Math.cos(g)*s,y=Math.sin(g)*s;p===0?this.ctx.moveTo(m,y):this.ctx.lineTo(m,y)}this.ctx.closePath();const f=this.ctx.createRadialGradient(0,0,0,0,0,s);f.addColorStop(0,c+ii(u*255)),f.addColorStop(1,c+"00"),this.ctx.fillStyle=f,this.ctx.fill(),this.ctx.strokeStyle=c+ii(u*200),this.ctx.lineWidth=this.cfg.polygon.strokeWidth*h,this.ctx.stroke(),this.ctx.restore()}drawBridge(e,t,i,s,o,c,u){const h=this.ctx.createLinearGradient(e,t,i,s);o.forEach((f,p)=>{h.addColorStop(p/(o.length-1),f+"80")}),this.ctx.strokeStyle=h,this.ctx.lineWidth=this.cfg.bridge.thickness,this.ctx.lineCap="round",this.ctx.beginPath();for(let f=0;f<=u;f++){const p=f/u,g=e+(i-e)*p,m=t+(s-t)*p,y=Math.sin(p*Math.PI*4+this.time*2)*this.cfg.bridge.waveAmplitude,x=-(s-t)/Math.hypot(i-e,s-t),w=(i-e)/Math.hypot(i-e,s-t);f===0?this.ctx.moveTo(g+x*y,m+w*y):this.ctx.lineTo(g+x*y,m+w*y)}this.ctx.stroke()}}const wf={fingerCountSpeed:{oneFinger:.05,normalFingers:1,fiveFingers:1.5,maxSpeed:2},wave:{baseAmplitude:50,maxAmplitude:250,baseFrequency:.01,maxFrequency:.05,segments:200,lineThickness:3},fingerAmplitude:{oneFingerMultiplier:.1,twoFingersMultiplier:.6,threeFingersMultiplier:1.2,fourFingersMultiplier:2.5,fiveFingersMultiplier:4,normalFingersMultiplier:.3},gesture:{leftOpenHandBoost:3,rightOpenHandBoost:1.5,leftFistAmplitude:20,rightFistReduction:.5,pinchBaseFrequency:.005,pinchLeftMultiplier:.1,pinchRightMultiplier:.05,pinchLeftYOffsetMultiplier:-150,pinchRightYOffsetMultiplier:-150},velocity:{intensityMultiplier:2},hold:{durationThreshold:2,amplitudeBoost:2},distance:{scaleMultiplier:2},waveCount:{active:7,idle:3},layers:{primarySpeed:2,secondarySpeed:3,tertiarySpeed:1,secondaryAmplitude:.5,tertiaryAmplitude:.3},handInfluence:{strength:.5,radius:200},focalPoint:{baseSize:20,pulseSpeed:5,pulseAmount:.1,glowLayers:3},visual:{backgroundTint:"20",clapFlashOpacity:"30",fillOpacity:50}};class gy{constructor(e,t){U(this,"cfg",wf);U(this,"canvas");U(this,"ctx");U(this,"time",0);U(this,"bgGradient",null);U(this,"needsGradientUpdate",!0);this.canvas=e,this.ctx=t}setParams(e){this.cfg=vi(wf,e)}render(e,t){var x,w,_,S;this.time+=.016*_n(),this.time>1e3&&(this.time=this.time%1e3),this.needsGradientUpdate&&(this.bgGradient=this.ctx.createLinearGradient(0,0,0,this.canvas.height),this.bgGradient.addColorStop(0,"#000000"),this.bgGradient.addColorStop(1,t[0]+this.cfg.visual.backgroundTint),this.needsGradientUpdate=!1),this.ctx.fillStyle=this.bgGradient,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=this.cfg.wave.baseAmplitude,s=this.cfg.wave.baseFrequency,o=1,c=1,u=1,h=0;if(e.left){Math.max(0,Math.min(1,e.left.position.x||.5)),Math.max(0,Math.min(1,e.left.position.y||.5));const b=e.left.velocity||0,E=Math.max(0,Math.min(b,1));c*=1+E*this.cfg.velocity.intensityMultiplier;let C=e.left.fingerCount||0;e.left.gesture==="pinch"&&(C=1),C===1?(u=this.cfg.fingerCountSpeed.oneFinger,i*=this.cfg.fingerAmplitude.oneFingerMultiplier):C===2?(u=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.twoFingersMultiplier):C===3?(u=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.threeFingersMultiplier):C===4?(u=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.fourFingersMultiplier):C>=5&&(u=this.cfg.fingerCountSpeed.fiveFingers,i*=this.cfg.fingerAmplitude.fiveFingersMultiplier),(e.left.holdDuration||0)>this.cfg.hold.durationThreshold&&(i*=this.cfg.hold.amplitudeBoost),e.left.gesture==="open"?i*=this.cfg.gesture.leftOpenHandBoost*c:e.left.gesture==="fist"?i=this.cfg.gesture.leftFistAmplitude:e.left.gesture==="pinch"&&(s=this.cfg.gesture.pinchBaseFrequency+(e.left.pinchDistance||0)*this.cfg.gesture.pinchLeftMultiplier,h=(e.left.pinchDistance||0)*this.cfg.gesture.pinchLeftYOffsetMultiplier)}if(e.right){Math.max(0,Math.min(1,e.right.position.x||.5)),Math.max(0,Math.min(1,e.right.position.y||.5));const b=e.right.velocity||0,E=Math.max(0,Math.min(b,1));c*=1+E*this.cfg.velocity.intensityMultiplier;let C=e.right.fingerCount||0;e.right.gesture==="pinch"&&(C=1);let I=1;C===1?(I=this.cfg.fingerCountSpeed.oneFinger,i*=this.cfg.fingerAmplitude.oneFingerMultiplier):C===2?(I=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.twoFingersMultiplier):C===3?(I=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.threeFingersMultiplier):C===4?(I=this.cfg.fingerCountSpeed.normalFingers,i*=this.cfg.fingerAmplitude.fourFingersMultiplier):C>=5&&(I=this.cfg.fingerCountSpeed.fiveFingers,i*=this.cfg.fingerAmplitude.fiveFingersMultiplier),u*=I,(e.right.holdDuration||0)>this.cfg.hold.durationThreshold&&(i*=this.cfg.hold.amplitudeBoost),e.right.gesture==="open"?i*=this.cfg.gesture.rightOpenHandBoost*c:e.right.gesture==="fist"?i*=this.cfg.gesture.rightFistReduction:e.right.gesture==="pinch"&&(s+=(e.right.pinchDistance||0)*this.cfg.gesture.pinchRightMultiplier,h=(e.right.pinchDistance||0)*this.cfg.gesture.pinchRightYOffsetMultiplier)}c=Math.min(c,3),u=Math.min(u,this.cfg.fingerCountSpeed.maxSpeed),i=Math.min(i,this.cfg.wave.maxAmplitude),s=Math.min(s,this.cfg.wave.maxFrequency),isFinite(i)||(i=this.cfg.wave.baseAmplitude),isFinite(s)||(s=this.cfg.wave.baseFrequency),isFinite(u)||(u=1),e.distanceBetweenHands&&(o=.5+e.distanceBetweenHands*this.cfg.distance.scaleMultiplier);const f=e.left||e.right?this.cfg.waveCount.active:this.cfg.waveCount.idle,p=((x=e.left)==null?void 0:x.fingerCount)||0,g=((w=e.right)==null?void 0:w.fingerCount)||0,m=Math.max(p,g);let y=1;m>=4&&(y=.6);for(let b=0;b<f;b++){const E=this.canvas.height/(f+1)*(b+1)+h,C=b/f*Math.PI*2,I=((_=e.left)==null?void 0:_.position.x)??0,A=((S=e.right)==null?void 0:S.position.x)??1,N=Math.max(0,Math.min(1,I))*this.canvas.width,T=Math.max(0,Math.min(1,A))*this.canvas.width;this.drawWave(E,i*o,s,this.time*u+C,t[b%t.length],N,T,b/f,y)}if(e.left){const b=Math.max(0,Math.min(1,e.left.position.x||.5)),E=Math.max(0,Math.min(1,e.left.position.y||.5));this.drawFocalPoint(b*this.canvas.width,E*this.canvas.height,t[0],o,i)}if(e.right){const b=Math.max(0,Math.min(1,e.right.position.x||.5)),E=Math.max(0,Math.min(1,e.right.position.y||.5));this.drawFocalPoint(b*this.canvas.width,E*this.canvas.height,t[2%t.length],o,i)}}drawWave(e,t,i,s,o,c,u,h,f){this.ctx.beginPath();const p=Math.floor(this.cfg.wave.segments*f);t=Math.min(t,150);for(let x=0;x<=p;x++){const w=x/p*this.canvas.width,_=Math.sin(w*i+s*this.cfg.layers.primarySpeed)*t,S=Math.sin(w*i*2+s*this.cfg.layers.secondarySpeed)*(t*this.cfg.layers.secondaryAmplitude),b=Math.sin(w*i*.5+s*this.cfg.layers.tertiarySpeed)*(t*this.cfg.layers.tertiaryAmplitude);let E=0;const C=Math.abs(w-c),I=Math.abs(w-u),A=-C/this.cfg.handInfluence.radius,N=-I/this.cfg.handInfluence.radius;A>-10&&(E+=t*this.cfg.handInfluence.strength*Math.exp(A)),N>-10&&(E+=t*this.cfg.handInfluence.strength*Math.exp(N)),E=Math.min(E,80);let T=e+_+S+b+E;T=Math.max(-50,Math.min(this.canvas.height+50,T)),isFinite(T)&&(x===0?this.ctx.moveTo(w,T):this.ctx.lineTo(w,T))}const g=Math.max(0,Math.min(1,h)),m=this.ctx.createLinearGradient(0,0,this.canvas.width,0);m.addColorStop(0,o+ii(g*100)),m.addColorStop(.5,o+ii(g*255)),m.addColorStop(1,o+ii(g*100)),this.ctx.strokeStyle=m,this.ctx.lineWidth=this.cfg.wave.lineThickness,this.ctx.stroke(),this.ctx.lineTo(this.canvas.width,this.canvas.height),this.ctx.lineTo(0,this.canvas.height),this.ctx.closePath();const y=this.ctx.createLinearGradient(0,e,0,this.canvas.height);y.addColorStop(0,o+ii(g*this.cfg.visual.fillOpacity)),y.addColorStop(1,o+"00"),this.ctx.fillStyle=y,this.ctx.fill()}drawFocalPoint(e,t,i,s,o){const c=this.cfg.focalPoint.baseSize*s+Math.sin(this.time*this.cfg.focalPoint.pulseSpeed)*o*this.cfg.focalPoint.pulseAmount,u=Math.max(.1,c);for(let h=0;h<this.cfg.focalPoint.glowLayers;h++){const f=this.ctx.createRadialGradient(e,t,0,e,t,u*(h+1));f.addColorStop(0,i+"AA"),f.addColorStop(1,i+"00"),this.ctx.fillStyle=f,this.ctx.beginPath(),this.ctx.arc(e,t,u*(h+1),0,Math.PI*2),this.ctx.fill()}}}class xy{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"time",0);U(this,"nodes",[]);U(this,"glitchBlocks",[]);U(this,"pixelSize",20);U(this,"vibrationTimer",0);U(this,"glitchIntensity",0);U(this,"isExploding",!1);this.canvas=e,this.ctx=t;const i=40;for(let s=0;s<i;s++){const o=Math.random()*e.width,c=Math.random()*e.height,u={x:o,y:c,targetX:o,targetY:c,vx:0,vy:0,size:4+Math.random()*8,connections:[],waveform:Array.from({length:50},()=>Math.random()*2-1),attractedToHand:null};this.nodes.push(u)}this.updateConnections()}updateConnections(){this.nodes.forEach(e=>e.connections=[]),this.nodes.forEach((e,t)=>{this.nodes.forEach((i,s)=>{t!==s&&Math.hypot(e.x-i.x,e.y-i.y)<200&&e.connections.length<4&&e.connections.push(s)})})}render(e,t){this.time+=.016*_n(),this.ctx.fillStyle="rgba(0, 0, 0, 0.1)",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&!this.isExploding&&(this.vibrationTimer=1,this.glitchIntensity=1,this.createGlitchExplosion(t),this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.016,i=Math.max(0,this.vibrationTimer)),this.glitchIntensity>0&&(this.glitchIntensity-=.01);let s=1,o=!1,c=0,u=0,h=0,f=0,p=!1,g=!1,m=2,y=2;if(e.left&&e.left.gesture==="open"){o=!0,p=!0;const x=e.left.fingerCount||2;m=x,x===1?s=.01:x===5?s=2:s=1,c=e.left.position.x*this.canvas.width,u=e.left.position.y*this.canvas.height}if(e.left&&e.left.gesture==="pinch"&&(o=!0,p=!0,m=1,s=.01,c=e.left.position.x*this.canvas.width,u=e.left.position.y*this.canvas.height),e.right&&e.right.gesture==="open"){o=!0,g=!0;const x=e.right.fingerCount||2;y=x;let w;x===1?w=.01:x===5?w=2:w=1,s*=w,h=e.right.position.x*this.canvas.width,f=e.right.position.y*this.canvas.height}e.right&&e.right.gesture==="pinch"&&(o=!0,g=!0,y=1,s*=.01,h=e.right.position.x*this.canvas.width,f=e.right.position.y*this.canvas.height),this.nodes.forEach((x,w)=>{if(o){if(p&&g){const b=Math.hypot(x.x-c,x.y-u),E=Math.hypot(x.x-h,x.y-f);b<E?(x.attractedToHand="left",x.targetX=c+Math.cos(w*.5+this.time*s)*100,x.targetY=u+Math.sin(w*.5+this.time*s)*100):(x.attractedToHand="right",x.targetX=h+Math.cos(w*.5+this.time*s)*100,x.targetY=f+Math.sin(w*.5+this.time*s)*100)}else if(p){x.attractedToHand="left";const b=w/this.nodes.length*Math.PI*2+this.time*s,E=50+w%3*60;x.targetX=c+Math.cos(b)*E,x.targetY=u+Math.sin(b)*E}else if(g){x.attractedToHand="right";const b=w/this.nodes.length*Math.PI*2+this.time*s,E=50+w%3*60;x.targetX=h+Math.cos(b)*E,x.targetY=f+Math.sin(b)*E}const _=x.targetX-x.x,S=x.targetY-x.y;x.vx+=_*.05*s,x.vy+=S*.05*s}else{x.targetX+=(Math.random()-.5)*2,x.targetY+=(Math.random()-.5)*2;const _=x.targetX-x.x,S=x.targetY-x.y;x.vx+=_*.01,x.vy+=S*.01}i>0&&(x.vx+=(Math.random()-.5)*i*40,x.vy+=(Math.random()-.5)*i*40),x.vx*=.85,x.vy*=.85,x.x+=x.vx,x.y+=x.vy,x.x<0&&(x.x=this.canvas.width),x.x>this.canvas.width&&(x.x=0),x.y<0&&(x.y=this.canvas.height),x.y>this.canvas.height&&(x.y=0),x.waveform.shift(),x.waveform.push(Math.sin(this.time*s*2+x.x*.01)*(o?2:.5))}),this.time%.5<.016&&this.updateConnections(),this.drawNodeConnections(t,i,p,g,c,u,h,f),this.drawNodes(t,i),this.drawWaveforms(t,s),this.drawHandIndicators(e,t,m,y),this.drawGlitchBlocks(t),this.glitchIntensity>.3&&this.drawScreenGlitch(),o&&Math.random()<.03*s&&this.spawnGlitchBlock(t)}drawNodeConnections(e,t,i,s,o,c,u,h){this.nodes.forEach((f,p)=>{if(f.attractedToHand==="left"&&i){this.ctx.beginPath(),this.ctx.moveTo(f.x,f.y),this.ctx.lineTo(o,c);const g=this.ctx.createLinearGradient(f.x,f.y,o,c);g.addColorStop(0,e[0]+"80"),g.addColorStop(1,e[1]+"FF"),this.ctx.strokeStyle=g,this.ctx.lineWidth=2+t*3,this.ctx.stroke()}if(f.attractedToHand==="right"&&s){this.ctx.beginPath(),this.ctx.moveTo(f.x,f.y),this.ctx.lineTo(u,h);const g=this.ctx.createLinearGradient(f.x,f.y,u,h);g.addColorStop(0,e[2]+"80"),g.addColorStop(1,e[3]+"FF"),this.ctx.strokeStyle=g,this.ctx.lineWidth=2+t*3,this.ctx.stroke()}f.connections.forEach(g=>{const m=this.nodes[g];if(!m)return;this.ctx.beginPath(),this.ctx.moveTo(f.x,f.y),this.ctx.lineTo(m.x,m.y);const y=Math.floor(p/this.nodes.length*e.length);this.ctx.strokeStyle=e[y]+"40",this.ctx.lineWidth=1+t*2,this.ctx.stroke()})})}drawNodes(e,t){this.nodes.forEach((i,s)=>{const o=Math.floor(s/this.nodes.length*e.length),c=i.size*(1+t*.5),u=this.ctx.createRadialGradient(i.x,i.y,0,i.x,i.y,c);u.addColorStop(0,e[o]+"FF"),u.addColorStop(.5,e[(o+1)%e.length]+"AA"),u.addColorStop(1,e[o]+"00"),this.ctx.fillStyle=u,this.ctx.beginPath(),this.ctx.arc(i.x,i.y,c,0,Math.PI*2),this.ctx.fill(),this.ctx.fillStyle="#FFFFFF80",this.ctx.beginPath(),this.ctx.arc(i.x,i.y,c*.3,0,Math.PI*2),this.ctx.fill()})}drawWaveforms(e,t){this.nodes.forEach((i,s)=>{const o=Math.floor(s/this.nodes.length*e.length);this.ctx.beginPath(),this.ctx.strokeStyle=e[o]+"60",this.ctx.lineWidth=2;for(let c=0;c<i.waveform.length-1;c++){const u=i.x+c-i.waveform.length/2,h=i.y+i.waveform[c]*20;c===0?this.ctx.moveTo(u,h):this.ctx.lineTo(u,h)}this.ctx.stroke()})}drawHandIndicators(e,t,i,s){if(e.left&&e.left.gesture==="open"){const o=e.left.position.x*this.canvas.width,c=e.left.position.y*this.canvas.height,u=30+Math.sin(this.time*3)*10;this.ctx.strokeStyle=t[0]+"AA",this.ctx.lineWidth=3,this.ctx.beginPath(),this.ctx.arc(o,c,u,0,Math.PI*2),this.ctx.stroke(),this.ctx.fillStyle=t[0],this.ctx.font="20px monospace",this.ctx.fillText(`${i}`,o-10,c+5)}if(e.right&&e.right.gesture==="open"){const o=e.right.position.x*this.canvas.width,c=e.right.position.y*this.canvas.height,u=30+Math.sin(this.time*3)*10;this.ctx.strokeStyle=t[2]+"AA",this.ctx.lineWidth=3,this.ctx.beginPath(),this.ctx.arc(o,c,u,0,Math.PI*2),this.ctx.stroke(),this.ctx.fillStyle=t[2],this.ctx.font="20px monospace",this.ctx.fillText(`${s}`,o-10,c+5)}}drawGlitchBlocks(e){this.glitchBlocks=this.glitchBlocks.filter(t=>(t.life-=.016,t.life>0?(this.ctx.fillStyle=t.color+ii(t.life*255),this.ctx.fillRect(t.x,t.y,t.width,t.height),!0):!1))}spawnGlitchBlock(e){this.glitchBlocks.push({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height,width:20+Math.random()*100,height:10+Math.random()*50,color:e[Math.floor(Math.random()*e.length)],life:.5+Math.random()*.5})}createGlitchExplosion(e){for(let t=0;t<50;t++)this.spawnGlitchBlock(e);this.ctx.fillStyle="#FFFFFF60",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),this.nodes.forEach(t=>{t.vx=(Math.random()-.5)*50,t.vy=(Math.random()-.5)*50})}drawScreenGlitch(){const e=this.ctx.getImageData(0,0,this.canvas.width,this.canvas.height),t=Math.floor(Math.random()*20)-10;this.ctx.putImageData(e,t,0);for(let i=0;i<5;i++){const s=Math.random()*this.canvas.height,o=5+Math.random()*20,c=this.ctx.getImageData(0,s,this.canvas.width,o),u=(Math.random()-.5)*100;this.ctx.putImageData(c,u,s)}}}class vy{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"fragments",[]);U(this,"hearts",[]);U(this,"glitchIntensity",0);U(this,"lastHandsTouching",!1);U(this,"handsTouchingTime",0);U(this,"gracePeriod",0);this.canvas=e,this.ctx=t}render(e,t){this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);const i=this.checkHandsTouching(e);i?(this.handsTouchingTime+=1,this.gracePeriod=30,this.spawnHearts(e)):this.gracePeriod>0?(this.gracePeriod-=1,this.handsTouchingTime+=1):this.handsTouchingTime=0,this.lastHandsTouching=i,this.updateHearts(),this.renderHearts(),this.glitchIntensity*=.95,e.left&&e.left.landmarks&&this.renderHandFromLandmarks(e.left.landmarks,"left"),e.right&&e.right.landmarks&&this.renderHandFromLandmarks(e.right.landmarks,"right"),this.applyNoiseOverlay(),(this.glitchIntensity>.1||Math.random()<.05)&&this.applyGlitchEffect()}renderHandFromLandmarks(e,t){const s=this.canvas.width/2,o=this.canvas.height/2,c=e.map(p=>({x:s+(p.x*this.canvas.width-s)*1.8,y:o+(p.y*this.canvas.height-o)*1.8,z:p.z})),u=c[0],h=180*1.8,f={x:u.x,y:u.y+h,z:u.z};this.fillHandWithDots(c,u,f),this.drawHandSkeleton(c),this.drawTechnicalMarkers(u.x,u.y)}fillHandWithDots(e,t,i){const c=e.map(m=>m.x),u=e.map(m=>m.y),h=Math.min(...c,i.x)-50,f=Math.max(...c,i.x)+50,p=Math.min(...u)-50,g=Math.max(...u,i.y)+50;for(let m=p;m<g;m+=7)for(let y=h;y<f;y+=7){const x=this.getDistanceToHandSkeleton(y,m,e,t,i);if(x.inside){const S=1-x.distance/45,b=Math.pow(S,1.5),E=x.zDepth,C=b*(.7+E*.3);if(C<.15)continue;const I=Math.floor(C*255),A=Math.max(.3,Math.min(1,C*1.2)),N=(Math.random()-.5)*8*this.glitchIntensity,T=(Math.random()-.5)*8*this.glitchIntensity,F=.8+Math.random()*.2;this.ctx.fillStyle=`rgba(${I}, ${I}, ${I}, ${A*F})`,this.ctx.beginPath(),this.ctx.arc(y+N,m+T,1.5,0,Math.PI*2),this.ctx.fill(),C>.8&&Math.random()<.15&&(this.ctx.fillStyle=`rgba(255, 255, 255, ${A*1.3})`,this.ctx.beginPath(),this.ctx.arc(y+N,m+T,1.5*1.2,0,Math.PI*2),this.ctx.fill())}}}getDistanceToHandSkeleton(e,t,i,s,o){const c=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[0,9],[9,10],[10,11],[11,12],[0,13],[13,14],[14,15],[15,16],[0,17],[17,18],[18,19],[19,20],[5,9],[9,13],[13,17]];let u=1/0,h=0;for(const[m,y]of c){const x=i[m],w=i[y],_=this.distanceToSegment(e,t,x.x,x.y,w.x,w.y);u=Math.min(u,_),h=(x.z+w.z)/2}const f=this.distanceToSegment(e,t,s.x,s.y,o.x,o.y);return u=Math.min(u,f),h=(s.z+o.z)/2,{inside:u<45,distance:u,zDepth:h}}distanceToSegment(e,t,i,s,o,c){const u=o-i,h=c-s,f=u*u+h*h;if(f===0)return Math.sqrt((e-i)*(e-i)+(t-s)*(t-s));let p=((e-i)*u+(t-s)*h)/f;p=Math.max(0,Math.min(1,p));const g=i+p*u,m=s+p*h;return Math.sqrt((e-g)*(e-g)+(t-m)*(t-m))}drawHandSkeleton(e){this.ctx.strokeStyle="rgba(255, 255, 255, 0.3)",this.ctx.lineWidth=1,this.ctx.setLineDash([4,4]);const t=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[0,9],[9,10],[10,11],[11,12],[0,13],[13,14],[14,15],[15,16],[0,17],[17,18],[18,19],[19,20],[5,9],[9,13],[13,17],[17,5]];this.ctx.beginPath();for(const[i,s]of t){const o=e[i],c=e[s],u=(Math.random()-.5)*5*this.glitchIntensity,h=(Math.random()-.5)*5*this.glitchIntensity,f=(Math.random()-.5)*5*this.glitchIntensity,p=(Math.random()-.5)*5*this.glitchIntensity;this.ctx.moveTo(o.x+u,o.y+h),this.ctx.lineTo(c.x+f,c.y+p)}this.ctx.stroke(),this.ctx.setLineDash([]),this.ctx.fillStyle="rgba(255, 255, 255, 0.7)",e.forEach(i=>{this.ctx.beginPath(),this.ctx.arc(i.x,i.y,2,0,Math.PI*2),this.ctx.fill()})}drawTechnicalMarkers(e,t){this.ctx.strokeStyle="rgba(255, 255, 255, 0.5)",this.ctx.lineWidth=1;const i=15,s=80;[[e-s,t-s],[e+s,t-s],[e-s,t+s],[e+s,t+s]].forEach(([u,h])=>{this.ctx.beginPath(),this.ctx.moveTo(u,h),this.ctx.lineTo(u+(u<e?i:-i),h),this.ctx.moveTo(u,h),this.ctx.lineTo(u,h+(h<t?i:-i)),this.ctx.stroke()}),this.ctx.strokeStyle="rgba(255, 255, 255, 0.7)",this.ctx.lineWidth=1.5,this.ctx.beginPath(),this.ctx.moveTo(e-12,t),this.ctx.lineTo(e+12,t),this.ctx.moveTo(e,t-12),this.ctx.lineTo(e,t+12),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.arc(e,t,3,0,Math.PI*2),this.ctx.stroke(),this.ctx.fillStyle="rgba(255, 255, 255, 0.8)",this.ctx.font="11px monospace";const c=`[${Math.floor(e)},${Math.floor(t)}]`;this.ctx.fillText(c,e+s+15,t),this.ctx.fillStyle="rgba(255, 255, 255, 0.6)",this.ctx.font="9px monospace",this.ctx.fillText("TRACKING",e+s+15,t+15)}applyNoiseOverlay(){const e=.03+this.glitchIntensity*.04,t=2,i=.15;for(let s=0;s<this.canvas.width;s+=t*2)for(let o=0;o<this.canvas.height;o+=t*2)if(Math.random()<i){const c=Math.floor(Math.random()*255),u=Math.random()*e;this.ctx.fillStyle=`rgba(${c}, ${c}, ${c}, ${u})`,this.ctx.fillRect(s,o,t,t)}}applyGlitchEffect(){const e=Math.max(this.glitchIntensity,Math.random()*.3),t=15+Math.random()*15,i=Math.floor(this.canvas.height/t);for(let s=0;s<i;s++)if(Math.random()<e*.3){const o=s*t,c=(Math.random()-.5)*60*e;try{const u=this.ctx.getImageData(0,o,this.canvas.width,Math.min(t,this.canvas.height-o));this.ctx.putImageData(u,c,o)}catch{}}if(Math.random()<e*.5)for(let s=0;s<8;s++){const o=Math.random()*this.canvas.width,c=Math.random()*this.canvas.height,u=Math.random()*40+10,h=Math.random()*15+5;this.ctx.fillStyle="rgba(255, 255, 255, 0.3)",this.ctx.fillRect(o,c,u,h)}}checkHandsTouching(e){if(!e.left||!e.right||!e.left.landmarks||!e.right.landmarks)return!1;const t=[e.left.landmarks[0],e.left.landmarks[8],e.left.landmarks[12],e.left.landmarks[4]],i=[e.right.landmarks[0],e.right.landmarks[8],e.right.landmarks[12],e.right.landmarks[4]];for(const s of t)for(const o of i){const c=Math.sqrt(Math.pow(s.x-o.x,2)+Math.pow(s.y-o.y,2));if(c<.08)return console.log("✋ Hands touching! Distance:",c.toFixed(3)),!0}return!1}spawnHearts(e){if(!(Math.random()>.8)){console.log("Spawning hearts! Current count:",this.hearts.length);for(let t=0;t<3;t++){let s=!1;for(let o=0;o<20&&!s;o++){const c=Math.random()*this.canvas.width,u=Math.random()*this.canvas.height,h=20+Math.random()*30,f=h*1.5;let p=!1;for(const g of this.hearts){const m=c-g.x,y=u-g.y;if(Math.sqrt(m*m+y*y)<f+g.size*.75){p=!0;break}}p||(this.hearts.push({x:c,y:u,vx:0,vy:0,size:h,life:1,rotation:0,rotationSpeed:0}),s=!0,console.log("Heart placed at:",c,u,"size:",h))}}}}updateHearts(){this.hearts=this.hearts.filter(e=>(e.life-=.008,e.life>0))}renderHearts(){const e=Zo();this.hearts.forEach(t=>{this.ctx.save(),this.ctx.translate(t.x,t.y);const s=e*2.5%1;let o=1;s<.15?o=1+Math.sin(s/.15*Math.PI)*.2:s>=.2&&s<.3?o=1+Math.sin((s-.2)/.1*Math.PI)*.15:o=1,this.ctx.scale(o,o);const c=Math.max(2,t.size/8),u=t.life*.9,h=[[0,1,1,0,0,1,1,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[0,1,1,1,1,1,1,0],[0,0,1,1,1,1,0,0],[0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0]],f=-4*c,p=-4*c;for(let g=0;g<8;g++)for(let m=0;m<8;m++)h[g][m]===1&&(this.ctx.fillStyle=`rgba(255, 255, 255, ${u})`,this.ctx.fillRect(f+m*c,p+g*c,c,c),this.ctx.strokeStyle=`rgba(255, 255, 255, ${u*.3})`,this.ctx.lineWidth=.5,this.ctx.strokeRect(f+m*c,p+g*c,c,c));this.ctx.restore()})}}class _y{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"rectangles",[]);U(this,"baseWidth",1920);U(this,"baseHeight",1080);U(this,"time",0);U(this,"gridStructure",[]);this.canvas=e,this.ctx=t,this.createVariedLayout()}createVariedLayout(){[{x:0,y:0,w:480,h:360},{x:480,y:0,w:320,h:180},{x:800,y:0,w:320,h:180},{x:1120,y:0,w:400,h:180},{x:1520,y:0,w:400,h:180},{x:480,y:180,w:240,h:180},{x:720,y:180,w:240,h:180},{x:960,y:180,w:160,h:180},{x:1120,y:180,w:240,h:180},{x:1360,y:180,w:280,h:180},{x:1640,y:180,w:280,h:180},{x:0,y:360,w:120,h:360},{x:120,y:360,w:120,h:360},{x:240,y:360,w:120,h:360},{x:360,y:360,w:120,h:360},{x:480,y:360,w:320,h:360},{x:800,y:360,w:320,h:360},{x:1120,y:360,w:200,h:180},{x:1320,y:360,w:200,h:180},{x:1520,y:360,w:200,h:180},{x:1720,y:360,w:200,h:180},{x:1120,y:540,w:160,h:180},{x:1280,y:540,w:160,h:180},{x:1440,y:540,w:240,h:180},{x:1680,y:540,w:240,h:180},{x:0,y:720,w:160,h:360},{x:160,y:720,w:160,h:360},{x:320,y:720,w:160,h:360},{x:480,y:720,w:240,h:360},{x:720,y:720,w:240,h:360},{x:960,y:720,w:160,h:360},{x:1120,y:720,w:400,h:360},{x:1520,y:720,w:400,h:360}].forEach((t,i)=>{let s;const o=i%3;o===0?s="vertical":o===1?s="horizontal":s="vertical-reverse",this.rectangles.push({id:i,baseX:t.x,baseY:t.y,baseW:t.w,baseH:t.h,currentX:t.x,currentY:t.y,currentW:t.w,currentH:t.h,gradientDirection:s,rotation:0,borderRadius:0,opacity:1}),this.gridStructure.push({x:t.x,y:t.y,w:t.w,h:t.h,targetW:t.w,targetH:t.h})})}render(e,t,i,s){this.time+=.016*_n();const o=s==="contrast",c=s==="grayscale";let u=t[0]||"#1a00ff",h=t[1]||"#8b5cf6",f=t[2]||"#d9d9d9";if(c&&(u="#333333",h="#888888",f="#ffffff"),o)this.ctx.fillStyle="#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);else{const C=this.ctx.createLinearGradient(0,0,0,this.canvas.height);c?(C.addColorStop(0,"#ffffff"),C.addColorStop(1,"#cccccc")):(C.addColorStop(0,f),C.addColorStop(1,u)),this.ctx.fillStyle=C,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height)}let p=.1,g="idle",m=0,y=1;const x=i?i.bass:0;i&&i.mid;const w=i?i.high:0,_=i?i.beat:!1;if(e.left||e.right){const C=[];e.left&&C.push(e.left),e.right&&C.push(e.right);let I=0,A=!1;C.forEach(N=>{N.gesture==="pinch"&&(A=!0);const T=N.fingerCount!==void 0?N.fingerCount:5;I=Math.max(I,T)}),A&&(I=0),A?(g="pinch",p=.05,m=20):I<=2?(g="2fingers",p=.2,m=20):I<=4?(g="morph",p=.1,m=100):(g="chaos",p=.4,m=0),this.rectangles.forEach((N,T)=>{this.gridStructure[T].targetW=N.baseW,this.gridStructure[T].targetH=N.baseH}),C.forEach(N=>{var z,D;const T=(((z=N.position)==null?void 0:z.x)||.5)*this.baseWidth,F=(((D=N.position)==null?void 0:D.y)||.5)*this.baseHeight;this.rectangles.forEach((G,ne)=>{const se=G.baseX+G.baseW/2,X=G.baseY+G.baseH/2,V=T-se,Y=F-X,q=Math.sqrt(V*V+Y*Y);if(g==="pinch"){const te=1+Math.sin(q*.05-this.time*5)*.2*(1-Math.min(q/800,1));this.gridStructure[ne].targetW=G.baseW*te,this.gridStructure[ne].targetH=G.baseH*te}else if(g==="2fingers"){const te=1+Math.sin(q*.05-this.time*5)*.2*(1-Math.min(q/800,1));this.gridStructure[ne].targetW=G.baseW*te,this.gridStructure[ne].targetH=G.baseH*te}else if(g==="morph"){if(q<500){const ie=(1-q/500)*.5;this.gridStructure[ne].targetW=G.baseW*(1+ie),this.gridStructure[ne].targetH=G.baseH*(1+ie)}}else if(g==="chaos"&&q<600){const ie=Math.random()*.5;this.gridStructure[ne].targetW=G.baseW*(.8+ie),this.gridStructure[ne].targetH=G.baseH*(.8+ie)}})})}else this.rectangles.forEach((C,I)=>{this.gridStructure[I].targetW=C.baseW,this.gridStructure[I].targetH=C.baseH}),i&&_&&(m=10);i&&(this.gridStructure.forEach(C=>{C.targetW*=1+x*.2,C.targetH*=1+x*.2}),g==="chaos"&&(y=.5+w*.5)),this.gridStructure.forEach((C,I)=>{C.w+=(C.targetW-C.w)*p,C.h+=(C.targetH-C.h)*p}),this.normalizeGridPerfectly(),this.rectangles.forEach((C,I)=>{C.currentX=this.gridStructure[I].x,C.currentY=this.gridStructure[I].y,C.currentW=this.gridStructure[I].w,C.currentH=this.gridStructure[I].h,C.borderRadius+=(m-C.borderRadius)*.1,g==="chaos"?C.rotation+=Math.random()*.2-.1:C.rotation+=(0-C.rotation)*.1,C.opacity+=(y-C.opacity)*.1});const S=this.canvas.width/this.baseWidth,b=this.canvas.height/this.baseHeight,E=[u,h,f];this.rectangles.forEach((C,I)=>{this.drawRectangle(C,S,b,E,o,I,i)})}normalizeGridPerfectly(){const e=new Map;this.rectangles.forEach((c,u)=>{const h=Math.round(c.baseY/10)*10;e.has(h)||e.set(h,[]),e.get(h).push(u)});const t=Array.from(e.entries()).sort((c,u)=>c[0]-u[0]).map(c=>c[1]);t.forEach(c=>{c.sort((p,g)=>this.rectangles[p].baseX-this.rectangles[g].baseX);const u=c.reduce((p,g)=>p+this.gridStructure[g].w,0),h=this.baseWidth/u;let f=0;c.forEach(p=>{this.gridStructure[p].w*=h,this.gridStructure[p].x=f,f+=this.gridStructure[p].w})});let i=0;t.forEach(c=>{const u=Math.max(...c.map(h=>this.gridStructure[h].h));c.forEach(h=>{this.gridStructure[h].y=i,this.gridStructure[h].h=u}),i+=u});const s=i,o=this.baseHeight/s;i=0,t.forEach(c=>{const u=this.gridStructure[c[0]].h*o;c.forEach(h=>{this.gridStructure[h].y=i,this.gridStructure[h].h=u}),i+=u})}drawRectangle(e,t,i,s,o,c,u){this.ctx.save();const h=e.currentX*t,f=e.currentY*i,p=e.currentW*t,g=e.currentH*i;if(Math.abs(e.rotation)>.01){const E=h+p/2,C=f+g/2;this.ctx.translate(E,C),this.ctx.rotate(e.rotation),this.ctx.translate(-E,-C)}this.ctx.globalAlpha=e.opacity;let m;const y=s[0],x=s[1],w=s[2],_=o||c%2===0?y:x,S=o?"#000000":w,b=u!=null&&u.beat&&Math.random()>.7?"#FFFFFF":null;e.gradientDirection==="vertical"?(m=this.ctx.createLinearGradient(h,f,h,f+g),m.addColorStop(0,b||S),m.addColorStop(1,_)):e.gradientDirection==="vertical-reverse"?(m=this.ctx.createLinearGradient(h,f,h,f+g),m.addColorStop(0,_),m.addColorStop(1,b||S)):(m=this.ctx.createLinearGradient(h,f,h+p,f),m.addColorStop(0,b||S),m.addColorStop(1,_)),this.ctx.fillStyle=m,e.borderRadius>0?(this.ctx.beginPath(),this.ctx.roundRect(h,f,p,g,e.borderRadius),this.ctx.fill()):this.ctx.fillRect(h,f,p,g),this.ctx.restore()}}class yy{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"glowObjects",[]);U(this,"time",0);U(this,"vibrationTimer",0);U(this,"glitchIntensity",0);U(this,"isExploding",!1);this.canvas=e,this.ctx=t}render(e,t){if(this.canvas.width===0||this.canvas.height===0)return;this.ctx.fillStyle="rgba(0, 0, 0, 0.02)",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&!this.isExploding&&(this.createExplosion(),this.vibrationTimer=1,this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.016,i=Math.max(0,this.vibrationTimer));let s=null,o=null,c=2,u=!1;if(e.left&&e.left.landmarks){let f=this.countFingers(e.left.landmarks,"left");e.left.gesture==="pinch"&&(f=1),f>=1&&(u=!0,s=e.left.position.x*this.canvas.width,o=e.left.position.y*this.canvas.height,c=f)}if(e.right&&e.right.landmarks){let f=this.countFingers(e.right.landmarks,"right");if(e.right.gesture==="pinch"&&(f=1),f>=1){u=!0;const p=e.right.position.x*this.canvas.width,g=e.right.position.y*this.canvas.height;s!==null?(s=(s+p)/2,o=((o||0)+g)/2,c=Math.max(c,f)):(s=p,o=g,c=f)}}if(u&&s!==null&&o!==null){this.time+=1*_n();let f=4,p=100,g=2,m=60;if(c===1?(f=8,p=60,g=1,m=30):c===2?(f=5,p=100,g=2,m=60):c===3||c===4?(f=4,p=130,g=2,m=80):c>=5&&(f=2,p=180,g=3,m=120),this.time>=f){this.time=0;for(let y=0;y<g;y++)this.glowObjects.push({x:s+(Math.random()-.5)*m,y:o+(Math.random()-.5)*m,size:p+Math.random()*(p*.4),vx:(Math.random()-.5)*1.5,vy:(Math.random()-.5)*1.5-.5,life:1,hue:Math.random()*360,decay:.002+c/10*.002})}}const h=_n();this.glowObjects=this.glowObjects.filter(f=>(f.x+=f.vx*h,f.y+=f.vy*h,f.vx*=Math.pow(.99,h),f.vy*=Math.pow(.99,h),f.life-=f.decay*h,i>0&&(f.x+=(Math.random()-.5)*i*10,f.y+=(Math.random()-.5)*i*10),f.life>0)),this.glowObjects.length>120&&(this.glowObjects=this.glowObjects.slice(-120)),this.glowObjects.forEach(f=>{this.renderChromaticShape(f,i,t)}),this.applyNoiseOverlay(),this.glitchIntensity>.1&&this.applyGlitchEffect()}renderChromaticShape(e,t,i){const s=8+t*20;e.life*.4,this.ctx.globalCompositeOperation="screen";const o=this.ctx.createRadialGradient(e.x-s,e.y,0,e.x-s,e.y,e.size*1.2);o.addColorStop(0,i[0]+"FF"),o.addColorStop(.3,i[0]+"99"),o.addColorStop(.6,i[0]+"44"),o.addColorStop(1,"transparent"),this.ctx.fillStyle=o,this.ctx.beginPath(),this.ctx.arc(e.x-s,e.y,e.size*1.2,0,Math.PI*2),this.ctx.fill();const c=this.ctx.createRadialGradient(e.x,e.y,0,e.x,e.y,e.size*1.2);c.addColorStop(0,i[1]+"FF"),c.addColorStop(.3,i[1]+"BB"),c.addColorStop(.6,i[1]+"66"),c.addColorStop(1,"transparent"),this.ctx.fillStyle=c,this.ctx.beginPath(),this.ctx.arc(e.x,e.y,e.size*1.2,0,Math.PI*2),this.ctx.fill();const u=this.ctx.createRadialGradient(e.x+s,e.y,0,e.x+s,e.y,e.size*1.2);u.addColorStop(0,i[2]+"FF"),u.addColorStop(.3,i[2]+"99"),u.addColorStop(.6,i[2]+"44"),u.addColorStop(1,"transparent"),this.ctx.fillStyle=u,this.ctx.beginPath(),this.ctx.arc(e.x+s,e.y,e.size*1.2,0,Math.PI*2),this.ctx.fill(),this.ctx.globalCompositeOperation="source-over"}countFingers(e,t){if(!e||e.length<21)return 0;const i=e[9],s=e[4],o=e[3],c=Math.sqrt(Math.pow(s.x-i.x,2)+Math.pow(s.y-i.y,2)+Math.pow(s.z-i.z,2)),u=Math.sqrt(Math.pow(o.x-i.x,2)+Math.pow(o.y-i.y,2)+Math.pow(o.z-i.z,2));let h=c>u?1:0;const f=[8,12,16,20],p=[6,10,14,18];for(let g=0;g<4;g++){const m=Math.sqrt(Math.pow(e[f[g]].x-i.x,2)+Math.pow(e[f[g]].y-i.y,2)+Math.pow(e[f[g]].z-i.z,2)),y=Math.sqrt(Math.pow(e[p[g]].x-i.x,2)+Math.pow(e[p[g]].y-i.y,2)+Math.pow(e[p[g]].z-i.z,2));m>y*1.1&&h++}return h}createExplosion(){const e=this.canvas.width/2,t=this.canvas.height/2;for(let i=0;i<40;i++){const s=Math.PI*2*i/40,o=10+Math.random()*20;this.glowObjects.push({x:e,y:t,size:80+Math.random()*100,vx:Math.cos(s)*o,vy:Math.sin(s)*o,life:1,hue:Math.random()*360,decay:.003})}}applyNoiseOverlay(){this.ctx.save(),this.ctx.globalAlpha=.05,this.ctx.fillStyle="white";for(let e=0;e<1e3;e++){const t=Math.random()*this.canvas.width,i=Math.random()*this.canvas.height,s=Math.random()*2;this.ctx.fillRect(t,i,s,s)}this.ctx.restore()}applyGlitchEffect(){this.ctx.save(),this.ctx.globalAlpha=this.glitchIntensity*.5,this.ctx.fillStyle="white";for(let e=0;e<5;e++){const t=Math.random()*this.canvas.width,i=Math.random()*this.canvas.height,s=Math.random()*10;this.ctx.fillRect(t,i,s,this.canvas.height)}for(let e=0;e<5;e++){const t=Math.random()*this.canvas.width,i=Math.random()*this.canvas.height,s=Math.random()*10;this.ctx.fillRect(t,i,this.canvas.width,s)}this.ctx.restore()}}class Sy{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"dots",[]);U(this,"gridSpacing",8);U(this,"vibrationTimer",0);U(this,"isExploding",!1);this.canvas=e,this.ctx=t,this.initializeDots()}initializeDots(){this.dots=[];const e=Math.ceil(this.canvas.width/this.gridSpacing),t=Math.ceil(this.canvas.height/this.gridSpacing);for(let i=0;i<t;i++)for(let s=0;s<e;s++)this.dots.push({x:s*this.gridSpacing,y:i*this.gridSpacing,baseSize:1,currentSize:1,targetSize:1})}render(e,t){if(this.canvas.width===0||this.canvas.height===0)return;this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let i=0;e.clapping&&!this.isExploding&&(this.createExplosion(),this.vibrationTimer=1,this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.016,i=Math.max(0,this.vibrationTimer));let s=null,o=null,c=2,u=!1;if(e.left&&e.left.landmarks){let p=this.countFingers(e.left.landmarks,"left");e.left.gesture==="pinch"&&(p=1),p>=1&&(u=!0,s=e.left.position.x*this.canvas.width,o=e.left.position.y*this.canvas.height,c=p)}if(e.right&&e.right.landmarks){let p=this.countFingers(e.right.landmarks,"right");if(e.right.gesture==="pinch"&&(p=1),p>=1){u=!0;const g=e.right.position.x*this.canvas.width,m=e.right.position.y*this.canvas.height;s!==null?(s=(s+g)/2,o=((o||0)+m)/2,c=Math.max(c,p)):(s=g,o=m,c=p)}}let h=200,f=4;c===1?(h=100,f=2):c>=5&&(h=350,f=6),this.dots.forEach(p=>{if(p.targetSize=p.baseSize,u&&s!==null&&o!==null){const g=p.x-s,m=p.y-o,y=Math.sqrt(g*g+m*m);if(y<h){const x=1-y/h;p.targetSize=p.baseSize+x*f}}p.currentSize+=(p.targetSize-p.currentSize)*Math.min(1,.2*_n()),i>0&&(p.currentSize+=Math.random()*i*3)}),this.ctx.fillStyle="#FFFFFF",this.dots.forEach(p=>{p.currentSize>.5&&(this.ctx.beginPath(),this.ctx.arc(p.x,p.y,p.currentSize,0,Math.PI*2),this.ctx.fill())})}countFingers(e,t){if(!e||e.length<21)return 0;const i=e[9],s=e[4],o=e[3],c=Math.sqrt(Math.pow(s.x-i.x,2)+Math.pow(s.y-i.y,2)+Math.pow(s.z-i.z,2)),u=Math.sqrt(Math.pow(o.x-i.x,2)+Math.pow(o.y-i.y,2)+Math.pow(o.z-i.z,2));let h=c>u?1:0;const f=[8,12,16,20],p=[6,10,14,18];for(let g=0;g<4;g++){const m=Math.sqrt(Math.pow(e[f[g]].x-i.x,2)+Math.pow(e[f[g]].y-i.y,2)+Math.pow(e[f[g]].z-i.z,2)),y=Math.sqrt(Math.pow(e[p[g]].x-i.x,2)+Math.pow(e[p[g]].y-i.y,2)+Math.pow(e[p[g]].z-i.z,2));m>y*1.1&&h++}return h}createExplosion(){if(this.isExploding)return;this.isExploding=!0;const e=this.canvas.width/2,t=this.canvas.height/2;this.dots.forEach(i=>{const s=i.x-e,o=i.y-t,u=Math.sqrt(s*s+o*o)/10;setTimeout(()=>{i.targetSize=8},u)}),setTimeout(()=>{this.isExploding=!1},1e3)}}class My{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"blocks",[]);U(this,"baseBlockSize",40);U(this,"vibrationTimer",0);U(this,"currentBlockSize",40);U(this,"isExploding",!1);this.canvas=e,this.ctx=t,this.initializeGrid()}initializeGrid(){this.blocks=[];const e=Math.ceil(this.canvas.width/this.baseBlockSize),t=Math.ceil(this.canvas.height/this.baseBlockSize);for(let i=0;i<t;i++)for(let s=0;s<e;s++){const o=Math.floor(Math.random()*3);this.blocks.push({x:s*this.baseBlockSize,y:i*this.baseBlockSize,targetX:s*this.baseBlockSize,targetY:i*this.baseBlockSize,size:this.baseBlockSize,colorIndex:o,targetColorIndex:o,hasGrid:Math.random()>.7,gridSize:Math.floor(Math.random()*3)+2,glitchTimer:0,colorChangeTimer:Math.random()*5})}}render(e,t){if(this.canvas.width===0||this.canvas.height===0)return;const i=t[1]&&(t[1].toLowerCase()==="#ffffff"||t[1].toLowerCase()==="#fff");i?this.ctx.fillStyle="#000000":this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let s=0;e.clapping&&!this.isExploding&&(this.createExplosion(),this.vibrationTimer=1,this.isExploding=!0),e.clapping||(this.isExploding=!1),this.vibrationTimer>0&&(this.vibrationTimer-=.016,s=Math.max(0,this.vibrationTimer));let o=0,c=!1;if(e.left){let m=e.left.fingerCount||0;e.left.gesture==="pinch"&&(m=1),c=!0,o=m}if(e.right){let m=e.right.fingerCount||0;e.right.gesture==="pinch"&&(m=1),c=!0,o=Math.max(o,m)}let u=this.currentBlockSize,h=1;c&&(o===1?(u=100,h=.4):o===2?(u=60,h=.5):o===3?(u=45,h=1):o===4?(u=35,h=1.5):o>=5&&(u=25,h=3)),Math.abs(this.currentBlockSize-u)>1&&(this.currentBlockSize=u,this.baseBlockSize=u,this.initializeGrid()),this.blocks.forEach(m=>{m.size=this.currentBlockSize});const f=s>0?10:1;this.blocks.forEach(m=>{if(m.colorChangeTimer>0)m.colorChangeTimer-=.016*h*f;else{const y=Math.floor(Math.random()*3);y!==m.colorIndex&&(m.targetColorIndex=y,m.glitchTimer=.3),m.colorChangeTimer=2+Math.random()*3}m.colorIndex!==m.targetColorIndex&&(m.colorIndex=m.targetColorIndex),m.glitchTimer>0&&(m.glitchTimer-=.016)}),this.blocks.forEach(m=>{const y=m.x,x=m.y,w=s>0?.3+(1-s)*.7:1,_=m.size*w,S=(m.size-_)/2,b=(m.size-_)/2;let E;if(i?E=m.colorIndex%2===0?t[0]:"#000000":E=t[m.colorIndex]||"#FFFFFF",this.ctx.fillStyle=E,this.ctx.fillRect(y+S,x+b,_,_),m.hasGrid&&_>15){this.ctx.strokeStyle=t[3]||"#000000",this.ctx.lineWidth=1;const C=_/m.gridSize;for(let I=0;I<=m.gridSize;I++)this.ctx.beginPath(),this.ctx.moveTo(y+S+I*C,x+b),this.ctx.lineTo(y+S+I*C,x+b+_),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo(y+S,x+b+I*C),this.ctx.lineTo(y+S+_,x+b+I*C),this.ctx.stroke()}if(m.glitchTimer>0||s>.5){let C;i?C=m.colorIndex%2===0?"#000000":t[0]:C=t[(m.colorIndex+1)%3]||"#FFFFFF",this.ctx.strokeStyle=C,this.ctx.lineWidth=s>0?4:3,this.ctx.strokeRect(y+S,x+b,_,_)}}),this.ctx.strokeStyle="rgba(255, 255, 255, 0.1)",this.ctx.lineWidth=1;const p=Math.ceil(this.canvas.width/this.baseBlockSize),g=Math.ceil(this.canvas.height/this.baseBlockSize);for(let m=0;m<=p;m++)this.ctx.beginPath(),this.ctx.moveTo(m*this.baseBlockSize,0),this.ctx.lineTo(m*this.baseBlockSize,this.canvas.height),this.ctx.stroke();for(let m=0;m<=g;m++)this.ctx.beginPath(),this.ctx.moveTo(0,m*this.baseBlockSize),this.ctx.lineTo(this.canvas.width,m*this.baseBlockSize),this.ctx.stroke()}createExplosion(){this.isExploding||(this.isExploding=!0,this.blocks.forEach(e=>{e.targetColorIndex=Math.floor(Math.random()*3),e.colorIndex=e.targetColorIndex,e.glitchTimer=1}),setTimeout(()=>this.isExploding=!1,1e3))}}class wy{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"lines",[]);U(this,"gridSpacing",40);U(this,"lineLength",30);U(this,"isClapping",!1);U(this,"clappingIntensity",0);this.canvas=e,this.ctx=t,this.initializeGrid()}initializeGrid(){this.lines=[];const e=Math.ceil(this.canvas.width/this.gridSpacing)+1,t=Math.ceil(this.canvas.height/this.gridSpacing)+1;for(let i=0;i<t;i++)for(let s=0;s<e;s++)this.lines.push({x:s*this.gridSpacing,y:i*this.gridSpacing,length:this.lineLength,currentAngle:0,targetAngle:0,spinVelocity:0})}render(e,t){t[1]&&(t[1].toLowerCase()==="#ffffff"||t[1].toLowerCase()==="#fff")?this.ctx.fillStyle="#000000":this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),(this.lines.length===0||this.lines[0].x>this.canvas.width||this.lines[0].y>this.canvas.height)&&this.initializeGrid();let s=.1,o=0;const c=[];e.left&&c.push(e.left),e.right&&c.push(e.right),c.forEach(u=>{let h=u.fingerCount||2;u.gesture==="pinch"&&(h=1),o=Math.max(o,h)}),o===1?s=.02:o===2?s=.1:o===3?s=.15:o===4?s=.2:o>=5&&(s=.3),e.clapping?this.isClapping||(this.isClapping=!0,this.clappingIntensity=1):this.isClapping=!1,this.clappingIntensity>0&&(this.clappingIntensity*=.95,this.clappingIntensity<.01&&(this.clappingIntensity=0)),this.lines.forEach(u=>{if(c.length>0){let h=0,f=0,p=0;c.forEach(g=>{var E,C;const m=(((E=g.position)==null?void 0:E.x)||.5)*this.canvas.width,y=(((C=g.position)==null?void 0:C.y)||.5)*this.canvas.height,x=m-u.x,w=y-u.y,S=1/(1+Math.sqrt(x*x+w*w)*.001),b=Math.atan2(w,x);f+=Math.cos(b)*S,p+=Math.sin(b)*S,h+=S}),h>0&&(u.targetAngle=Math.atan2(p,f))}else u.targetAngle=0;if(this.clappingIntensity>0)u.spinVelocity+=this.clappingIntensity*.5,u.currentAngle+=u.spinVelocity,u.spinVelocity*=.9;else{let h=u.targetAngle-u.currentAngle;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;u.currentAngle+=h*s,u.spinVelocity=0}}),this.ctx.strokeStyle=t[0]||"#00ff00",this.ctx.lineWidth=2,this.ctx.lineCap="round",this.lines.forEach(u=>{const h=u.length/2,f=u.x-Math.cos(u.currentAngle)*h,p=u.y-Math.sin(u.currentAngle)*h,g=u.x+Math.cos(u.currentAngle)*h,m=u.y+Math.sin(u.currentAngle)*h;this.ctx.beginPath(),this.ctx.moveTo(f,p),this.ctx.lineTo(g,m),this.ctx.stroke()})}}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cd="184",by=0,U0=1,Ey=2,Ac=1,Ty=2,Bo=3,ls=0,ri=1,Hi=2,tr=0,Da=1,za=2,D0=3,k0=4,Cy=5,Fs=100,Ay=101,Ry=102,Py=103,Ly=104,Iy=200,Ny=201,Fy=202,Uy=203,bf=204,Ef=205,Dy=206,ky=207,Oy=208,zy=209,By=210,Hy=211,Gy=212,Vy=213,Wy=214,Tf=0,Cf=1,Af=2,Ba=3,Rf=4,Pf=5,Lf=6,If=7,Ad=0,Xy=1,jy=2,nr=0,Sx=1,Mx=2,wx=3,bx=4,Ex=5,Tx=6,Cx=7,Ax=300,Os=301,Ha=302,Uh=303,Dh=304,Yc=306,Nf=1e3,br=1001,Ff=1002,Fn=1003,qy=1004,ec=1005,dn=1006,kh=1007,Ds=1008,mi=1009,Rx=1010,Px=1011,qo=1012,Rd=1013,rr=1014,Vi=1015,xi=1016,Pd=1017,Ld=1018,Yo=1020,Lx=35902,Ix=35899,Nx=1021,Fx=1022,gi=1023,Cr=1026,ks=1027,Id=1028,Nd=1029,zs=1030,Fd=1031,Ud=1033,Rc=33776,Pc=33777,Lc=33778,Ic=33779,Uf=35840,Df=35841,kf=35842,Of=35843,zf=36196,Bf=37492,Hf=37496,Gf=37488,Vf=37489,Uc=37490,Wf=37491,Xf=37808,jf=37809,qf=37810,Yf=37811,$f=37812,Kf=37813,Zf=37814,Qf=37815,Jf=37816,ed=37817,td=37818,nd=37819,id=37820,rd=37821,sd=36492,ad=36494,od=36495,ld=36283,cd=36284,Dc=36285,ud=36286,Yy=3200,kc=0,$y=1,rs="",pi="srgb",Oc="srgb-linear",zc="linear",Ht="srgb",pa=7680,O0=519,Ky=512,Zy=513,Qy=514,Dd=515,Jy=516,eS=517,kd=518,tS=519,z0=35044,B0="300 es",Ji=2e3,$o=2001;function nS(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Bc(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function iS(){const a=Bc("canvas");return a.style.display="block",a}const H0={};function G0(...a){const e="THREE."+a.shift();console.log(e,...a)}function Ux(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function dt(...a){a=Ux(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function It(...a){a=Ux(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function hd(...a){const e=a.join(" ");e in H0||(H0[e]=!0,dt(...a))}function rS(a,e,t){return new Promise(function(i,s){function o(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:s();break;case a.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}const sS={[Tf]:Cf,[Af]:Lf,[Rf]:If,[Ba]:Pf,[Cf]:Tf,[Lf]:Af,[If]:Rf,[Pf]:Ba};class Hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,c=s.length;o<c;o++)s[o].call(this,e);e.target=null}}}const zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let V0=1234567;const Go=Math.PI/180,Ko=180/Math.PI;function Xa(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zn[a&255]+zn[a>>8&255]+zn[a>>16&255]+zn[a>>24&255]+"-"+zn[e&255]+zn[e>>8&255]+"-"+zn[e>>16&15|64]+zn[e>>24&255]+"-"+zn[t&63|128]+zn[t>>8&255]+"-"+zn[t>>16&255]+zn[t>>24&255]+zn[i&255]+zn[i>>8&255]+zn[i>>16&255]+zn[i>>24&255]).toLowerCase()}function At(a,e,t){return Math.max(e,Math.min(t,a))}function Od(a,e){return(a%e+e)%e}function aS(a,e,t,i,s){return i+(a-e)*(s-i)/(t-e)}function oS(a,e,t){return a!==e?(t-a)/(e-a):0}function Vo(a,e,t){return(1-t)*a+t*e}function lS(a,e,t,i){return Vo(a,e,1-Math.exp(-t*i))}function cS(a,e=1){return e-Math.abs(Od(a,e*2)-e)}function uS(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function hS(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function fS(a,e){return a+Math.floor(Math.random()*(e-a+1))}function dS(a,e){return a+Math.random()*(e-a)}function pS(a){return a*(.5-Math.random())}function mS(a){a!==void 0&&(V0=a);let e=V0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function gS(a){return a*Go}function xS(a){return a*Ko}function vS(a){return(a&a-1)===0&&a!==0}function _S(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function yS(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function SS(a,e,t,i,s){const o=Math.cos,c=Math.sin,u=o(t/2),h=c(t/2),f=o((e+i)/2),p=c((e+i)/2),g=o((e-i)/2),m=c((e-i)/2),y=o((i-e)/2),x=c((i-e)/2);switch(s){case"XYX":a.set(u*p,h*g,h*m,u*f);break;case"YZY":a.set(h*m,u*p,h*g,u*f);break;case"ZXZ":a.set(h*g,h*m,u*p,u*f);break;case"XZX":a.set(u*p,h*x,h*y,u*f);break;case"YXY":a.set(h*y,u*p,h*x,u*f);break;case"ZYZ":a.set(h*x,h*y,u*p,u*f);break;default:dt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function La(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function jn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const is={DEG2RAD:Go,RAD2DEG:Ko,generateUUID:Xa,clamp:At,euclideanModulo:Od,mapLinear:aS,inverseLerp:oS,lerp:Vo,damp:lS,pingpong:cS,smoothstep:uS,smootherstep:hS,randInt:fS,randFloat:dS,randFloatSpread:pS,seededRandom:mS,degToRad:gS,radToDeg:xS,isPowerOfTwo:vS,ceilPowerOfTwo:_S,floorPowerOfTwo:yS,setQuaternionFromProperEuler:SS,normalize:jn,denormalize:La},$d=class $d{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*i-c*s+e.x,this.y=o*s+c*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$d.prototype.isVector2=!0;let ut=$d;class ja{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,o,c,u){let h=i[s+0],f=i[s+1],p=i[s+2],g=i[s+3],m=o[c+0],y=o[c+1],x=o[c+2],w=o[c+3];if(g!==w||h!==m||f!==y||p!==x){let _=h*m+f*y+p*x+g*w;_<0&&(m=-m,y=-y,x=-x,w=-w,_=-_);let S=1-u;if(_<.9995){const b=Math.acos(_),E=Math.sin(b);S=Math.sin(S*b)/E,u=Math.sin(u*b)/E,h=h*S+m*u,f=f*S+y*u,p=p*S+x*u,g=g*S+w*u}else{h=h*S+m*u,f=f*S+y*u,p=p*S+x*u,g=g*S+w*u;const b=1/Math.sqrt(h*h+f*f+p*p+g*g);h*=b,f*=b,p*=b,g*=b}}e[t]=h,e[t+1]=f,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,s,o,c){const u=i[s],h=i[s+1],f=i[s+2],p=i[s+3],g=o[c],m=o[c+1],y=o[c+2],x=o[c+3];return e[t]=u*x+p*g+h*y-f*m,e[t+1]=h*x+p*m+f*g-u*y,e[t+2]=f*x+p*y+u*m-h*g,e[t+3]=p*x-u*g-h*m-f*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,o=e._z,c=e._order,u=Math.cos,h=Math.sin,f=u(i/2),p=u(s/2),g=u(o/2),m=h(i/2),y=h(s/2),x=h(o/2);switch(c){case"XYZ":this._x=m*p*g+f*y*x,this._y=f*y*g-m*p*x,this._z=f*p*x+m*y*g,this._w=f*p*g-m*y*x;break;case"YXZ":this._x=m*p*g+f*y*x,this._y=f*y*g-m*p*x,this._z=f*p*x-m*y*g,this._w=f*p*g+m*y*x;break;case"ZXY":this._x=m*p*g-f*y*x,this._y=f*y*g+m*p*x,this._z=f*p*x+m*y*g,this._w=f*p*g-m*y*x;break;case"ZYX":this._x=m*p*g-f*y*x,this._y=f*y*g+m*p*x,this._z=f*p*x-m*y*g,this._w=f*p*g+m*y*x;break;case"YZX":this._x=m*p*g+f*y*x,this._y=f*y*g+m*p*x,this._z=f*p*x-m*y*g,this._w=f*p*g-m*y*x;break;case"XZY":this._x=m*p*g-f*y*x,this._y=f*y*g-m*p*x,this._z=f*p*x+m*y*g,this._w=f*p*g+m*y*x;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],o=t[8],c=t[1],u=t[5],h=t[9],f=t[2],p=t[6],g=t[10],m=i+u+g;if(m>0){const y=.5/Math.sqrt(m+1);this._w=.25/y,this._x=(p-h)*y,this._y=(o-f)*y,this._z=(c-s)*y}else if(i>u&&i>g){const y=2*Math.sqrt(1+i-u-g);this._w=(p-h)/y,this._x=.25*y,this._y=(s+c)/y,this._z=(o+f)/y}else if(u>g){const y=2*Math.sqrt(1+u-i-g);this._w=(o-f)/y,this._x=(s+c)/y,this._y=.25*y,this._z=(h+p)/y}else{const y=2*Math.sqrt(1+g-i-u);this._w=(c-s)/y,this._x=(o+f)/y,this._y=(h+p)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,o=e._z,c=e._w,u=t._x,h=t._y,f=t._z,p=t._w;return this._x=i*p+c*u+s*f-o*h,this._y=s*p+c*h+o*u-i*f,this._z=o*p+c*f+i*h-s*u,this._w=c*p-i*u-s*h-o*f,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,o=e._z,c=e._w,u=this.dot(e);u<0&&(i=-i,s=-s,o=-o,c=-c,u=-u);let h=1-t;if(u<.9995){const f=Math.acos(u),p=Math.sin(f);h=Math.sin(h*f)/p,t=Math.sin(t*f)/p,this._x=this._x*h+i*t,this._y=this._y*h+s*t,this._z=this._z*h+o*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+i*t,this._y=this._y*h+s*t,this._z=this._z*h+o*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Kd=class Kd{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(W0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(W0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*s,this.y=o[1]*t+o[4]*i+o[7]*s,this.z=o[2]*t+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=e.elements,c=1/(o[3]*t+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*s+o[12])*c,this.y=(o[1]*t+o[5]*i+o[9]*s+o[13])*c,this.z=(o[2]*t+o[6]*i+o[10]*s+o[14])*c,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,o=e.x,c=e.y,u=e.z,h=e.w,f=2*(c*s-u*i),p=2*(u*t-o*s),g=2*(o*i-c*t);return this.x=t+h*f+c*g-u*p,this.y=i+h*p+u*f-o*g,this.z=s+h*g+o*p-c*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s,this.y=o[1]*t+o[5]*i+o[9]*s,this.z=o[2]*t+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,o=e.z,c=t.x,u=t.y,h=t.z;return this.x=s*h-o*u,this.y=o*c-i*h,this.z=i*u-s*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Oh.copy(this).projectOnVector(e),this.sub(Oh)}reflect(e){return this.sub(Oh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(At(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kd.prototype.isVector3=!0;let Q=Kd;const Oh=new Q,W0=new ja,Zd=class Zd{constructor(e,t,i,s,o,c,u,h,f){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,c,u,h,f)}set(e,t,i,s,o,c,u,h,f){const p=this.elements;return p[0]=e,p[1]=s,p[2]=u,p[3]=t,p[4]=o,p[5]=h,p[6]=i,p[7]=c,p[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,c=i[0],u=i[3],h=i[6],f=i[1],p=i[4],g=i[7],m=i[2],y=i[5],x=i[8],w=s[0],_=s[3],S=s[6],b=s[1],E=s[4],C=s[7],I=s[2],A=s[5],N=s[8];return o[0]=c*w+u*b+h*I,o[3]=c*_+u*E+h*A,o[6]=c*S+u*C+h*N,o[1]=f*w+p*b+g*I,o[4]=f*_+p*E+g*A,o[7]=f*S+p*C+g*N,o[2]=m*w+y*b+x*I,o[5]=m*_+y*E+x*A,o[8]=m*S+y*C+x*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],c=e[4],u=e[5],h=e[6],f=e[7],p=e[8];return t*c*p-t*u*f-i*o*p+i*u*h+s*o*f-s*c*h}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],c=e[4],u=e[5],h=e[6],f=e[7],p=e[8],g=p*c-u*f,m=u*h-p*o,y=f*o-c*h,x=t*g+i*m+s*y;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/x;return e[0]=g*w,e[1]=(s*f-p*i)*w,e[2]=(u*i-s*c)*w,e[3]=m*w,e[4]=(p*t-s*h)*w,e[5]=(s*o-u*t)*w,e[6]=y*w,e[7]=(i*h-f*t)*w,e[8]=(c*t-i*o)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,o,c,u){const h=Math.cos(o),f=Math.sin(o);return this.set(i*h,i*f,-i*(h*c+f*u)+c+e,-s*f,s*h,-s*(-f*c+h*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(zh.makeScale(e,t)),this}rotate(e){return this.premultiply(zh.makeRotation(-e)),this}translate(e,t){return this.premultiply(zh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Zd.prototype.isMatrix3=!0;let St=Zd;const zh=new St,X0=new St().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),j0=new St().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function MS(){const a={enabled:!0,workingColorSpace:Oc,spaces:{},convert:function(s,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===Ht&&(s.r=Er(s.r),s.g=Er(s.g),s.b=Er(s.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ht&&(s.r=ka(s.r),s.g=ka(s.g),s.b=ka(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===rs?zc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,c){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return hd("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return hd("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(s,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return a.define({[Oc]:{primaries:e,whitePoint:i,transfer:zc,toXYZ:X0,fromXYZ:j0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:e,whitePoint:i,transfer:Ht,toXYZ:X0,fromXYZ:j0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),a}const Rt=MS();function Er(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function ka(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let ma;class wS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ma===void 0&&(ma=Bc("canvas")),ma.width=e.width,ma.height=e.height;const s=ma.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ma}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let c=0;c<o.length;c++)o[c]=Er(o[c]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Er(t[i]/255)*255):t[i]=Er(t[i]);return{data:t,width:e.width,height:e.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bS=0;class zd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bS++}),this.uuid=Xa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let c=0,u=s.length;c<u;c++)s[c].isDataTexture?o.push(Bh(s[c].image)):o.push(Bh(s[c]))}else o=Bh(s);i.url=o}return t||(e.images[this.uuid]=i),i}}function Bh(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?wS.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}let ES=0;const Hh=new Q;class Hn extends Hs{constructor(e=Hn.DEFAULT_IMAGE,t=Hn.DEFAULT_MAPPING,i=br,s=br,o=dn,c=Ds,u=gi,h=mi,f=Hn.DEFAULT_ANISOTROPY,p=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=Xa(),this.name="",this.source=new zd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=c,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=h,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Hh).x}get height(){return this.source.getSize(Hh).y}get depth(){return this.source.getSize(Hh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){dt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){dt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ax)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nf:e.x=e.x-Math.floor(e.x);break;case br:e.x=e.x<0?0:1;break;case Ff:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nf:e.y=e.y-Math.floor(e.y);break;case br:e.y=e.y<0?0:1;break;case Ff:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=Ax;Hn.DEFAULT_ANISOTROPY=1;const Qd=class Qd{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*i+c[8]*s+c[12]*o,this.y=c[1]*t+c[5]*i+c[9]*s+c[13]*o,this.z=c[2]*t+c[6]*i+c[10]*s+c[14]*o,this.w=c[3]*t+c[7]*i+c[11]*s+c[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,o;const h=e.elements,f=h[0],p=h[4],g=h[8],m=h[1],y=h[5],x=h[9],w=h[2],_=h[6],S=h[10];if(Math.abs(p-m)<.01&&Math.abs(g-w)<.01&&Math.abs(x-_)<.01){if(Math.abs(p+m)<.1&&Math.abs(g+w)<.1&&Math.abs(x+_)<.1&&Math.abs(f+y+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(f+1)/2,C=(y+1)/2,I=(S+1)/2,A=(p+m)/4,N=(g+w)/4,T=(x+_)/4;return E>C&&E>I?E<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(E),s=A/i,o=N/i):C>I?C<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(C),i=A/s,o=T/s):I<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(I),i=N/o,s=T/o),this.set(i,s,o,t),this}let b=Math.sqrt((_-x)*(_-x)+(g-w)*(g-w)+(m-p)*(m-p));return Math.abs(b)<.001&&(b=1),this.x=(_-x)/b,this.y=(g-w)/b,this.z=(m-p)/b,this.w=Math.acos((f+y+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this.w=At(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this.w=At(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(At(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Qd.prototype.isVector4=!0;let nn=Qd;class TS extends Hs{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new nn(0,0,e,t),this.scissorTest=!1,this.viewport=new nn(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},o=new Hn(s),c=i.count;for(let u=0;u<c;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new zd(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends TS{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Dx extends Hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class CS extends Hn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qc=class qc{constructor(e,t,i,s,o,c,u,h,f,p,g,m,y,x,w,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,c,u,h,f,p,g,m,y,x,w,_)}set(e,t,i,s,o,c,u,h,f,p,g,m,y,x,w,_){const S=this.elements;return S[0]=e,S[4]=t,S[8]=i,S[12]=s,S[1]=o,S[5]=c,S[9]=u,S[13]=h,S[2]=f,S[6]=p,S[10]=g,S[14]=m,S[3]=y,S[7]=x,S[11]=w,S[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,s=1/ga.setFromMatrixColumn(e,0).length(),o=1/ga.setFromMatrixColumn(e,1).length(),c=1/ga.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*c,t[9]=i[9]*c,t[10]=i[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,o=e.z,c=Math.cos(i),u=Math.sin(i),h=Math.cos(s),f=Math.sin(s),p=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const m=c*p,y=c*g,x=u*p,w=u*g;t[0]=h*p,t[4]=-h*g,t[8]=f,t[1]=y+x*f,t[5]=m-w*f,t[9]=-u*h,t[2]=w-m*f,t[6]=x+y*f,t[10]=c*h}else if(e.order==="YXZ"){const m=h*p,y=h*g,x=f*p,w=f*g;t[0]=m+w*u,t[4]=x*u-y,t[8]=c*f,t[1]=c*g,t[5]=c*p,t[9]=-u,t[2]=y*u-x,t[6]=w+m*u,t[10]=c*h}else if(e.order==="ZXY"){const m=h*p,y=h*g,x=f*p,w=f*g;t[0]=m-w*u,t[4]=-c*g,t[8]=x+y*u,t[1]=y+x*u,t[5]=c*p,t[9]=w-m*u,t[2]=-c*f,t[6]=u,t[10]=c*h}else if(e.order==="ZYX"){const m=c*p,y=c*g,x=u*p,w=u*g;t[0]=h*p,t[4]=x*f-y,t[8]=m*f+w,t[1]=h*g,t[5]=w*f+m,t[9]=y*f-x,t[2]=-f,t[6]=u*h,t[10]=c*h}else if(e.order==="YZX"){const m=c*h,y=c*f,x=u*h,w=u*f;t[0]=h*p,t[4]=w-m*g,t[8]=x*g+y,t[1]=g,t[5]=c*p,t[9]=-u*p,t[2]=-f*p,t[6]=y*g+x,t[10]=m-w*g}else if(e.order==="XZY"){const m=c*h,y=c*f,x=u*h,w=u*f;t[0]=h*p,t[4]=-g,t[8]=f*p,t[1]=m*g+w,t[5]=c*p,t[9]=y*g-x,t[2]=x*g-y,t[6]=u*p,t[10]=w*g+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(AS,e,RS)}lookAt(e,t,i){const s=this.elements;return hi.subVectors(e,t),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),Zr.crossVectors(i,hi),Zr.lengthSq()===0&&(Math.abs(i.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),Zr.crossVectors(i,hi)),Zr.normalize(),tc.crossVectors(hi,Zr),s[0]=Zr.x,s[4]=tc.x,s[8]=hi.x,s[1]=Zr.y,s[5]=tc.y,s[9]=hi.y,s[2]=Zr.z,s[6]=tc.z,s[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,c=i[0],u=i[4],h=i[8],f=i[12],p=i[1],g=i[5],m=i[9],y=i[13],x=i[2],w=i[6],_=i[10],S=i[14],b=i[3],E=i[7],C=i[11],I=i[15],A=s[0],N=s[4],T=s[8],F=s[12],z=s[1],D=s[5],G=s[9],ne=s[13],se=s[2],X=s[6],V=s[10],Y=s[14],q=s[3],ie=s[7],te=s[11],O=s[15];return o[0]=c*A+u*z+h*se+f*q,o[4]=c*N+u*D+h*X+f*ie,o[8]=c*T+u*G+h*V+f*te,o[12]=c*F+u*ne+h*Y+f*O,o[1]=p*A+g*z+m*se+y*q,o[5]=p*N+g*D+m*X+y*ie,o[9]=p*T+g*G+m*V+y*te,o[13]=p*F+g*ne+m*Y+y*O,o[2]=x*A+w*z+_*se+S*q,o[6]=x*N+w*D+_*X+S*ie,o[10]=x*T+w*G+_*V+S*te,o[14]=x*F+w*ne+_*Y+S*O,o[3]=b*A+E*z+C*se+I*q,o[7]=b*N+E*D+C*X+I*ie,o[11]=b*T+E*G+C*V+I*te,o[15]=b*F+E*ne+C*Y+I*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],o=e[12],c=e[1],u=e[5],h=e[9],f=e[13],p=e[2],g=e[6],m=e[10],y=e[14],x=e[3],w=e[7],_=e[11],S=e[15],b=h*y-f*m,E=u*y-f*g,C=u*m-h*g,I=c*y-f*p,A=c*m-h*p,N=c*g-u*p;return t*(w*b-_*E+S*C)-i*(x*b-_*I+S*A)+s*(x*E-w*I+S*N)-o*(x*C-w*A+_*N)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],c=e[4],u=e[5],h=e[6],f=e[7],p=e[8],g=e[9],m=e[10],y=e[11],x=e[12],w=e[13],_=e[14],S=e[15],b=t*u-i*c,E=t*h-s*c,C=t*f-o*c,I=i*h-s*u,A=i*f-o*u,N=s*f-o*h,T=p*w-g*x,F=p*_-m*x,z=p*S-y*x,D=g*_-m*w,G=g*S-y*w,ne=m*S-y*_,se=b*ne-E*G+C*D+I*z-A*F+N*T;if(se===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/se;return e[0]=(u*ne-h*G+f*D)*X,e[1]=(s*G-i*ne-o*D)*X,e[2]=(w*N-_*A+S*I)*X,e[3]=(m*A-g*N-y*I)*X,e[4]=(h*z-c*ne-f*F)*X,e[5]=(t*ne-s*z+o*F)*X,e[6]=(_*C-x*N-S*E)*X,e[7]=(p*N-m*C+y*E)*X,e[8]=(c*G-u*z+f*T)*X,e[9]=(i*z-t*G-o*T)*X,e[10]=(x*A-w*C+S*b)*X,e[11]=(g*C-p*A-y*b)*X,e[12]=(u*F-c*D-h*T)*X,e[13]=(t*D-i*F+s*T)*X,e[14]=(w*E-x*I-_*b)*X,e[15]=(p*I-g*E+m*b)*X,this}scale(e){const t=this.elements,i=e.x,s=e.y,o=e.z;return t[0]*=i,t[4]*=s,t[8]*=o,t[1]*=i,t[5]*=s,t[9]*=o,t[2]*=i,t[6]*=s,t[10]*=o,t[3]*=i,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),o=1-i,c=e.x,u=e.y,h=e.z,f=o*c,p=o*u;return this.set(f*c+i,f*u-s*h,f*h+s*u,0,f*u+s*h,p*u+i,p*h-s*c,0,f*h-s*u,p*h+s*c,o*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,o,c){return this.set(1,i,o,0,e,1,c,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,o=t._x,c=t._y,u=t._z,h=t._w,f=o+o,p=c+c,g=u+u,m=o*f,y=o*p,x=o*g,w=c*p,_=c*g,S=u*g,b=h*f,E=h*p,C=h*g,I=i.x,A=i.y,N=i.z;return s[0]=(1-(w+S))*I,s[1]=(y+C)*I,s[2]=(x-E)*I,s[3]=0,s[4]=(y-C)*A,s[5]=(1-(m+S))*A,s[6]=(_+b)*A,s[7]=0,s[8]=(x+E)*N,s[9]=(_-b)*N,s[10]=(1-(m+w))*N,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const o=this.determinant();if(o===0)return i.set(1,1,1),t.identity(),this;let c=ga.set(s[0],s[1],s[2]).length();const u=ga.set(s[4],s[5],s[6]).length(),h=ga.set(s[8],s[9],s[10]).length();o<0&&(c=-c),ki.copy(this);const f=1/c,p=1/u,g=1/h;return ki.elements[0]*=f,ki.elements[1]*=f,ki.elements[2]*=f,ki.elements[4]*=p,ki.elements[5]*=p,ki.elements[6]*=p,ki.elements[8]*=g,ki.elements[9]*=g,ki.elements[10]*=g,t.setFromRotationMatrix(ki),i.x=c,i.y=u,i.z=h,this}makePerspective(e,t,i,s,o,c,u=Ji,h=!1){const f=this.elements,p=2*o/(t-e),g=2*o/(i-s),m=(t+e)/(t-e),y=(i+s)/(i-s);let x,w;if(h)x=o/(c-o),w=c*o/(c-o);else if(u===Ji)x=-(c+o)/(c-o),w=-2*c*o/(c-o);else if(u===$o)x=-c/(c-o),w=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=p,f[4]=0,f[8]=m,f[12]=0,f[1]=0,f[5]=g,f[9]=y,f[13]=0,f[2]=0,f[6]=0,f[10]=x,f[14]=w,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(e,t,i,s,o,c,u=Ji,h=!1){const f=this.elements,p=2/(t-e),g=2/(i-s),m=-(t+e)/(t-e),y=-(i+s)/(i-s);let x,w;if(h)x=1/(c-o),w=c/(c-o);else if(u===Ji)x=-2/(c-o),w=-(c+o)/(c-o);else if(u===$o)x=-1/(c-o),w=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=p,f[4]=0,f[8]=0,f[12]=m,f[1]=0,f[5]=g,f[9]=0,f[13]=y,f[2]=0,f[6]=0,f[10]=x,f[14]=w,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};qc.prototype.isMatrix4=!0;let jt=qc;const ga=new Q,ki=new jt,AS=new Q(0,0,0),RS=new Q(1,1,1),Zr=new Q,tc=new Q,hi=new Q,q0=new jt,Y0=new ja;class Ar{constructor(e=0,t=0,i=0,s=Ar.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,o=s[0],c=s[4],u=s[8],h=s[1],f=s[5],p=s[9],g=s[2],m=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(At(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,y),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-At(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(At(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-At(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(m,y),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-p,f),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-p,y),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return q0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(q0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Y0.setFromEuler(this),this.setFromQuaternion(Y0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ar.DEFAULT_ORDER="XYZ";class kx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let PS=0;const $0=new Q,xa=new ja,vr=new jt,nc=new Q,Po=new Q,LS=new Q,IS=new ja,K0=new Q(1,0,0),Z0=new Q(0,1,0),Q0=new Q(0,0,1),J0={type:"added"},NS={type:"removed"},va={type:"childadded",child:null},Gh={type:"childremoved",child:null};class pn extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=Xa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new Q,t=new Ar,i=new ja,s=new Q(1,1,1);function o(){i.setFromEuler(t,!1)}function c(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new St}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xa.setFromAxisAngle(e,t),this.quaternion.multiply(xa),this}rotateOnWorldAxis(e,t){return xa.setFromAxisAngle(e,t),this.quaternion.premultiply(xa),this}rotateX(e){return this.rotateOnAxis(K0,e)}rotateY(e){return this.rotateOnAxis(Z0,e)}rotateZ(e){return this.rotateOnAxis(Q0,e)}translateOnAxis(e,t){return $0.copy(e).applyQuaternion(this.quaternion),this.position.add($0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(K0,e)}translateY(e){return this.translateOnAxis(Z0,e)}translateZ(e){return this.translateOnAxis(Q0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?nc.copy(e):nc.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vr.lookAt(Po,nc,this.up):vr.lookAt(nc,Po,this.up),this.quaternion.setFromRotationMatrix(vr),s&&(vr.extractRotation(s.matrixWorld),xa.setFromRotationMatrix(vr),this.quaternion.premultiply(xa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(It("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(J0),va.child=e,this.dispatchEvent(va),va.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(NS),Gh.child=e,this.dispatchEvent(Gh),Gh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vr.multiply(e.parent.matrixWorld)),e.applyMatrix4(vr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(J0),va.child=e,this.dispatchEvent(va),va.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const c=this.children[i].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let o=0,c=s.length;o<c;o++)s[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,e,LS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,IS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*i-o[8]*s,o[13]+=i-o[1]*t-o[5]*i-o[9]*s,o[14]+=s-o[2]*t-o[6]*i-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let o=0,c=s.length;o<c;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(u=>({...u})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(u,h){return u[h.uuid]===void 0&&(u[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const h=u.shapes;if(Array.isArray(h))for(let f=0,p=h.length;f<p;f++){const g=h[f];o(e.shapes,g)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let h=0,f=this.material.length;h<f;h++)u.push(o(e.materials,this.material[h]));s.material=u}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const h=this.animations[u];s.animations.push(o(e.animations,h))}}if(t){const u=c(e.geometries),h=c(e.materials),f=c(e.textures),p=c(e.images),g=c(e.shapes),m=c(e.skeletons),y=c(e.animations),x=c(e.nodes);u.length>0&&(i.geometries=u),h.length>0&&(i.materials=h),f.length>0&&(i.textures=f),p.length>0&&(i.images=p),g.length>0&&(i.shapes=g),m.length>0&&(i.skeletons=m),y.length>0&&(i.animations=y),x.length>0&&(i.nodes=x)}return i.object=s,i;function c(u){const h=[];for(const f in u){const p=u[f];delete p.metadata,h.push(p)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}pn.DEFAULT_UP=new Q(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ia extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const FS={type:"move"};class Vh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ia,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ia,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ia,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,o=null,c=null;const u=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){c=!0;for(const w of e.hand.values()){const _=t.getJointPose(w,i),S=this._getHandJoint(f,w);_!==null&&(S.matrix.fromArray(_.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=_.radius),S.visible=_!==null}const p=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],m=p.position.distanceTo(g.position),y=.02,x=.005;f.inputState.pinching&&m>y+x?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&m<=y-x&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));u!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(FS)))}return u!==null&&(u.visible=s!==null),h!==null&&(h.visible=o!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ia;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Ox={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qr={h:0,s:0,l:0},ic={h:0,s:0,l:0};function Wh(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class $e{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Rt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Rt.workingColorSpace){if(e=Od(e,1),t=At(t,0,1),i=At(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,c=2*i-o;this.r=Wh(c,o,e+1/3),this.g=Wh(c,o,e),this.b=Wh(c,o,e-1/3)}return Rt.colorSpaceToWorking(this,s),this}setStyle(e,t=pi){function i(o){o!==void 0&&parseFloat(o)<1&&dt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=s[1],u=s[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:dt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);dt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pi){const i=Ox[e.toLowerCase()];return i!==void 0?this.setHex(i,t):dt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Er(e.r),this.g=Er(e.g),this.b=Er(e.b),this}copyLinearToSRGB(e){return this.r=ka(e.r),this.g=ka(e.g),this.b=ka(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return Rt.workingToColorSpace(Bn.copy(this),e),Math.round(At(Bn.r*255,0,255))*65536+Math.round(At(Bn.g*255,0,255))*256+Math.round(At(Bn.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.workingToColorSpace(Bn.copy(this),t);const i=Bn.r,s=Bn.g,o=Bn.b,c=Math.max(i,s,o),u=Math.min(i,s,o);let h,f;const p=(u+c)/2;if(u===c)h=0,f=0;else{const g=c-u;switch(f=p<=.5?g/(c+u):g/(2-c-u),c){case i:h=(s-o)/g+(s<o?6:0);break;case s:h=(o-i)/g+2;break;case o:h=(i-s)/g+4;break}h/=6}return e.h=h,e.s=f,e.l=p,e}getRGB(e,t=Rt.workingColorSpace){return Rt.workingToColorSpace(Bn.copy(this),t),e.r=Bn.r,e.g=Bn.g,e.b=Bn.b,e}getStyle(e=pi){Rt.workingToColorSpace(Bn.copy(this),e);const t=Bn.r,i=Bn.g,s=Bn.b;return e!==pi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Qr),this.setHSL(Qr.h+e,Qr.s+t,Qr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qr),e.getHSL(ic);const i=Vo(Qr.h,ic.h,t),s=Vo(Qr.s,ic.s,t),o=Vo(Qr.l,ic.l,t);return this.setHSL(i,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*s,this.g=o[1]*t+o[4]*i+o[7]*s,this.b=o[2]*t+o[5]*i+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new $e;$e.NAMES=Ox;class Qo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new $e(e),this.density=t}clone(){return new Qo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class cs extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ar,this.environmentIntensity=1,this.environmentRotation=new Ar,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Oi=new Q,_r=new Q,Xh=new Q,yr=new Q,_a=new Q,ya=new Q,eg=new Q,jh=new Q,qh=new Q,Yh=new Q,$h=new nn,Kh=new nn,Zh=new nn;class Gi{constructor(e=new Q,t=new Q,i=new Q){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Oi.subVectors(e,t),s.cross(Oi);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,i,s,o){Oi.subVectors(s,t),_r.subVectors(i,t),Xh.subVectors(e,t);const c=Oi.dot(Oi),u=Oi.dot(_r),h=Oi.dot(Xh),f=_r.dot(_r),p=_r.dot(Xh),g=c*f-u*u;if(g===0)return o.set(0,0,0),null;const m=1/g,y=(f*h-u*p)*m,x=(c*p-u*h)*m;return o.set(1-y-x,x,y)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,yr)===null?!1:yr.x>=0&&yr.y>=0&&yr.x+yr.y<=1}static getInterpolation(e,t,i,s,o,c,u,h){return this.getBarycoord(e,t,i,s,yr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,yr.x),h.addScaledVector(c,yr.y),h.addScaledVector(u,yr.z),h)}static getInterpolatedAttribute(e,t,i,s,o,c){return $h.setScalar(0),Kh.setScalar(0),Zh.setScalar(0),$h.fromBufferAttribute(e,t),Kh.fromBufferAttribute(e,i),Zh.fromBufferAttribute(e,s),c.setScalar(0),c.addScaledVector($h,o.x),c.addScaledVector(Kh,o.y),c.addScaledVector(Zh,o.z),c}static isFrontFacing(e,t,i,s){return Oi.subVectors(i,t),_r.subVectors(e,t),Oi.cross(_r).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Oi.subVectors(this.c,this.b),_r.subVectors(this.a,this.b),Oi.cross(_r).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,o){return Gi.getInterpolation(e,this.a,this.b,this.c,t,i,s,o)}containsPoint(e){return Gi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,o=this.c;let c,u;_a.subVectors(s,i),ya.subVectors(o,i),jh.subVectors(e,i);const h=_a.dot(jh),f=ya.dot(jh);if(h<=0&&f<=0)return t.copy(i);qh.subVectors(e,s);const p=_a.dot(qh),g=ya.dot(qh);if(p>=0&&g<=p)return t.copy(s);const m=h*g-p*f;if(m<=0&&h>=0&&p<=0)return c=h/(h-p),t.copy(i).addScaledVector(_a,c);Yh.subVectors(e,o);const y=_a.dot(Yh),x=ya.dot(Yh);if(x>=0&&y<=x)return t.copy(o);const w=y*f-h*x;if(w<=0&&f>=0&&x<=0)return u=f/(f-x),t.copy(i).addScaledVector(ya,u);const _=p*x-y*g;if(_<=0&&g-p>=0&&y-x>=0)return eg.subVectors(o,s),u=(g-p)/(g-p+(y-x)),t.copy(s).addScaledVector(eg,u);const S=1/(_+w+m);return c=w*S,u=m*S,t.copy(i).addScaledVector(_a,c).addScaledVector(ya,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Gs{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(zi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(zi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=zi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=o.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,zi):zi.fromBufferAttribute(o,c),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rc.copy(i.boundingBox)),rc.applyMatrix4(e.matrixWorld),this.union(rc)}const s=e.children;for(let o=0,c=s.length;o<c;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Lo),sc.subVectors(this.max,Lo),Sa.subVectors(e.a,Lo),Ma.subVectors(e.b,Lo),wa.subVectors(e.c,Lo),Jr.subVectors(Ma,Sa),es.subVectors(wa,Ma),As.subVectors(Sa,wa);let t=[0,-Jr.z,Jr.y,0,-es.z,es.y,0,-As.z,As.y,Jr.z,0,-Jr.x,es.z,0,-es.x,As.z,0,-As.x,-Jr.y,Jr.x,0,-es.y,es.x,0,-As.y,As.x,0];return!Qh(t,Sa,Ma,wa,sc)||(t=[1,0,0,0,1,0,0,0,1],!Qh(t,Sa,Ma,wa,sc))?!1:(ac.crossVectors(Jr,es),t=[ac.x,ac.y,ac.z],Qh(t,Sa,Ma,wa,sc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Sr=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],zi=new Q,rc=new Gs,Sa=new Q,Ma=new Q,wa=new Q,Jr=new Q,es=new Q,As=new Q,Lo=new Q,sc=new Q,ac=new Q,Rs=new Q;function Qh(a,e,t,i,s){for(let o=0,c=a.length-3;o<=c;o+=3){Rs.fromArray(a,o);const u=s.x*Math.abs(Rs.x)+s.y*Math.abs(Rs.y)+s.z*Math.abs(Rs.z),h=e.dot(Rs),f=t.dot(Rs),p=i.dot(Rs);if(Math.max(-Math.max(h,f,p),Math.min(h,f,p))>u)return!1}return!0}const fn=new Q,oc=new ut;let US=0;class vn extends Hs{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:US++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=z0,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)oc.fromBufferAttribute(this,t),oc.applyMatrix3(e),this.setXY(t,oc.x,oc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix3(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=La(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=jn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=La(t,this.array)),t}setX(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=La(t,this.array)),t}setY(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=La(t,this.array)),t}setZ(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=La(t,this.array)),t}setW(e,t){return this.normalized&&(t=jn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),i=jn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),i=jn(i,this.array),s=jn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e*=this.itemSize,this.normalized&&(t=jn(t,this.array),i=jn(i,this.array),s=jn(s,this.array),o=jn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==z0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class zx extends vn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Bx extends vn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Kt extends vn{constructor(e,t,i){super(new Float32Array(e),t,i)}}const DS=new Gs,Io=new Q,Jh=new Q;class Vs{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):DS.setFromPoints(e).getCenter(i);let s=0;for(let o=0,c=e.length;o<c;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Io.subVectors(e,this.center);const t=Io.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Io,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Io.copy(e.center).add(Jh)),this.expandByPoint(Io.copy(e.center).sub(Jh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let kS=0;const Ei=new jt,ef=new pn,ba=new Q,fi=new Gs,No=new Gs,Tn=new Q;class on extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Xa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nS(e)?Bx:zx)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new St().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ei.makeRotationFromQuaternion(e),this.applyMatrix4(Ei),this}rotateX(e){return Ei.makeRotationX(e),this.applyMatrix4(Ei),this}rotateY(e){return Ei.makeRotationY(e),this.applyMatrix4(Ei),this}rotateZ(e){return Ei.makeRotationZ(e),this.applyMatrix4(Ei),this}translate(e,t,i){return Ei.makeTranslation(e,t,i),this.applyMatrix4(Ei),this}scale(e,t,i){return Ei.makeScale(e,t,i),this.applyMatrix4(Ei),this}lookAt(e){return ef.lookAt(e),ef.updateMatrix(),this.applyMatrix4(ef.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ba).negate(),this.translate(ba.x,ba.y,ba.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,o=e.length;s<o;s++){const c=e[s];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Kt(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];fi.setFromBufferAttribute(o),this.morphTargetsRelative?(Tn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(Tn),Tn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(Tn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const i=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const u=t[o];No.setFromBufferAttribute(u),this.morphTargetsRelative?(Tn.addVectors(fi.min,No.min),fi.expandByPoint(Tn),Tn.addVectors(fi.max,No.max),fi.expandByPoint(Tn)):(fi.expandByPoint(No.min),fi.expandByPoint(No.max))}fi.getCenter(i);let s=0;for(let o=0,c=e.count;o<c;o++)Tn.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(Tn));if(t)for(let o=0,c=t.length;o<c;o++){const u=t[o],h=this.morphTargetsRelative;for(let f=0,p=u.count;f<p;f++)Tn.fromBufferAttribute(u,f),h&&(ba.fromBufferAttribute(e,f),Tn.add(ba)),s=Math.max(s,i.distanceToSquared(Tn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],h=[];for(let T=0;T<i.count;T++)u[T]=new Q,h[T]=new Q;const f=new Q,p=new Q,g=new Q,m=new ut,y=new ut,x=new ut,w=new Q,_=new Q;function S(T,F,z){f.fromBufferAttribute(i,T),p.fromBufferAttribute(i,F),g.fromBufferAttribute(i,z),m.fromBufferAttribute(o,T),y.fromBufferAttribute(o,F),x.fromBufferAttribute(o,z),p.sub(f),g.sub(f),y.sub(m),x.sub(m);const D=1/(y.x*x.y-x.x*y.y);isFinite(D)&&(w.copy(p).multiplyScalar(x.y).addScaledVector(g,-y.y).multiplyScalar(D),_.copy(g).multiplyScalar(y.x).addScaledVector(p,-x.x).multiplyScalar(D),u[T].add(w),u[F].add(w),u[z].add(w),h[T].add(_),h[F].add(_),h[z].add(_))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let T=0,F=b.length;T<F;++T){const z=b[T],D=z.start,G=z.count;for(let ne=D,se=D+G;ne<se;ne+=3)S(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const E=new Q,C=new Q,I=new Q,A=new Q;function N(T){I.fromBufferAttribute(s,T),A.copy(I);const F=u[T];E.copy(F),E.sub(I.multiplyScalar(I.dot(F))).normalize(),C.crossVectors(A,F);const D=C.dot(h[T])<0?-1:1;c.setXYZW(T,E.x,E.y,E.z,D)}for(let T=0,F=b.length;T<F;++T){const z=b[T],D=z.start,G=z.count;for(let ne=D,se=D+G;ne<se;ne+=3)N(e.getX(ne+0)),N(e.getX(ne+1)),N(e.getX(ne+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,y=i.count;m<y;m++)i.setXYZ(m,0,0,0);const s=new Q,o=new Q,c=new Q,u=new Q,h=new Q,f=new Q,p=new Q,g=new Q;if(e)for(let m=0,y=e.count;m<y;m+=3){const x=e.getX(m+0),w=e.getX(m+1),_=e.getX(m+2);s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,w),c.fromBufferAttribute(t,_),p.subVectors(c,o),g.subVectors(s,o),p.cross(g),u.fromBufferAttribute(i,x),h.fromBufferAttribute(i,w),f.fromBufferAttribute(i,_),u.add(p),h.add(p),f.add(p),i.setXYZ(x,u.x,u.y,u.z),i.setXYZ(w,h.x,h.y,h.z),i.setXYZ(_,f.x,f.y,f.z)}else for(let m=0,y=t.count;m<y;m+=3)s.fromBufferAttribute(t,m+0),o.fromBufferAttribute(t,m+1),c.fromBufferAttribute(t,m+2),p.subVectors(c,o),g.subVectors(s,o),p.cross(g),i.setXYZ(m+0,p.x,p.y,p.z),i.setXYZ(m+1,p.x,p.y,p.z),i.setXYZ(m+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Tn.fromBufferAttribute(e,t),Tn.normalize(),e.setXYZ(t,Tn.x,Tn.y,Tn.z)}toNonIndexed(){function e(u,h){const f=u.array,p=u.itemSize,g=u.normalized,m=new f.constructor(h.length*p);let y=0,x=0;for(let w=0,_=h.length;w<_;w++){u.isInterleavedBufferAttribute?y=h[w]*u.data.stride+u.offset:y=h[w]*p;for(let S=0;S<p;S++)m[x++]=f[y++]}return new vn(m,p,g)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new on,i=this.index.array,s=this.attributes;for(const u in s){const h=s[u],f=e(h,i);t.setAttribute(u,f)}const o=this.morphAttributes;for(const u in o){const h=[],f=o[u];for(let p=0,g=f.length;p<g;p++){const m=f[p],y=e(m,i);h.push(y)}t.morphAttributes[u]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,h=c.length;u<h;u++){const f=c[u];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const f=i[h];e.data.attributes[h]=f.toJSON(e.data)}const s={};let o=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],p=[];for(let g=0,m=f.length;g<m;g++){const y=f[g];p.push(y.toJSON(e.data))}p.length>0&&(s[h]=p,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const f in s){const p=s[f];this.setAttribute(f,p.clone(t))}const o=e.morphAttributes;for(const f in o){const p=[],g=o[f];for(let m=0,y=g.length;m<y;m++)p.push(g[m].clone(t));this.morphAttributes[f]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let f=0,p=c.length;f<p;f++){const g=c[f];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let OS=0;class Wi extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=Xa(),this.name="",this.type="Material",this.blending=Da,this.side=ls,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bf,this.blendDst=Ef,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=O0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pa,this.stencilZFail=pa,this.stencilZPass=pa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){dt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){dt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Da&&(i.blending=this.blending),this.side!==ls&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bf&&(i.blendSrc=this.blendSrc),this.blendDst!==Ef&&(i.blendDst=this.blendDst),this.blendEquation!==Fs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ba&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==O0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pa&&(i.stencilFail=this.stencilFail),this.stencilZFail!==pa&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==pa&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}if(t){const o=s(e.textures),c=s(e.images);o.length>0&&(i.textures=o),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Mr=new Q,tf=new Q,lc=new Q,ts=new Q,nf=new Q,cc=new Q,rf=new Q;class Bd{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mr.copy(this.origin).addScaledVector(this.direction,t),Mr.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){tf.copy(e).add(t).multiplyScalar(.5),lc.copy(t).sub(e).normalize(),ts.copy(this.origin).sub(tf);const o=e.distanceTo(t)*.5,c=-this.direction.dot(lc),u=ts.dot(this.direction),h=-ts.dot(lc),f=ts.lengthSq(),p=Math.abs(1-c*c);let g,m,y,x;if(p>0)if(g=c*h-u,m=c*u-h,x=o*p,g>=0)if(m>=-x)if(m<=x){const w=1/p;g*=w,m*=w,y=g*(g+c*m+2*u)+m*(c*g+m+2*h)+f}else m=o,g=Math.max(0,-(c*m+u)),y=-g*g+m*(m+2*h)+f;else m=-o,g=Math.max(0,-(c*m+u)),y=-g*g+m*(m+2*h)+f;else m<=-x?(g=Math.max(0,-(-c*o+u)),m=g>0?-o:Math.min(Math.max(-o,-h),o),y=-g*g+m*(m+2*h)+f):m<=x?(g=0,m=Math.min(Math.max(-o,-h),o),y=m*(m+2*h)+f):(g=Math.max(0,-(c*o+u)),m=g>0?o:Math.min(Math.max(-o,-h),o),y=-g*g+m*(m+2*h)+f);else m=c>0?-o:o,g=Math.max(0,-(c*m+u)),y=-g*g+m*(m+2*h)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(tf).addScaledVector(lc,m),y}intersectSphere(e,t){Mr.subVectors(e.center,this.origin);const i=Mr.dot(this.direction),s=Mr.dot(Mr)-i*i,o=e.radius*e.radius;if(s>o)return null;const c=Math.sqrt(o-s),u=i-c,h=i+c;return h<0?null:u<0?this.at(h,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,o,c,u,h;const f=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,m=this.origin;return f>=0?(i=(e.min.x-m.x)*f,s=(e.max.x-m.x)*f):(i=(e.max.x-m.x)*f,s=(e.min.x-m.x)*f),p>=0?(o=(e.min.y-m.y)*p,c=(e.max.y-m.y)*p):(o=(e.max.y-m.y)*p,c=(e.min.y-m.y)*p),i>c||o>s||((o>i||isNaN(i))&&(i=o),(c<s||isNaN(s))&&(s=c),g>=0?(u=(e.min.z-m.z)*g,h=(e.max.z-m.z)*g):(u=(e.max.z-m.z)*g,h=(e.min.z-m.z)*g),i>h||u>s)||((u>i||i!==i)&&(i=u),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Mr)!==null}intersectTriangle(e,t,i,s,o){nf.subVectors(t,e),cc.subVectors(i,e),rf.crossVectors(nf,cc);let c=this.direction.dot(rf),u;if(c>0){if(s)return null;u=1}else if(c<0)u=-1,c=-c;else return null;ts.subVectors(this.origin,e);const h=u*this.direction.dot(cc.crossVectors(ts,cc));if(h<0)return null;const f=u*this.direction.dot(nf.cross(ts));if(f<0||h+f>c)return null;const p=-u*ts.dot(rf);return p<0?null:this.at(p/c,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $c extends Wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ar,this.combine=Ad,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tg=new jt,Ps=new Bd,uc=new Vs,ng=new Q,hc=new Q,fc=new Q,dc=new Q,sf=new Q,pc=new Q,ig=new Q,mc=new Q;class ln extends pn{constructor(e=new on,t=new $c){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,c=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(o&&u){pc.set(0,0,0);for(let h=0,f=o.length;h<f;h++){const p=u[h],g=o[h];p!==0&&(sf.fromBufferAttribute(g,e),c?pc.addScaledVector(sf,p):pc.addScaledVector(sf.sub(t),p))}t.add(pc)}return t}raycast(e,t){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),uc.copy(i.boundingSphere),uc.applyMatrix4(o),Ps.copy(e.ray).recast(e.near),!(uc.containsPoint(Ps.origin)===!1&&(Ps.intersectSphere(uc,ng)===null||Ps.origin.distanceToSquared(ng)>(e.far-e.near)**2))&&(tg.copy(o).invert(),Ps.copy(e.ray).applyMatrix4(tg),!(i.boundingBox!==null&&Ps.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ps)))}_computeIntersections(e,t,i){let s;const o=this.geometry,c=this.material,u=o.index,h=o.attributes.position,f=o.attributes.uv,p=o.attributes.uv1,g=o.attributes.normal,m=o.groups,y=o.drawRange;if(u!==null)if(Array.isArray(c))for(let x=0,w=m.length;x<w;x++){const _=m[x],S=c[_.materialIndex],b=Math.max(_.start,y.start),E=Math.min(u.count,Math.min(_.start+_.count,y.start+y.count));for(let C=b,I=E;C<I;C+=3){const A=u.getX(C),N=u.getX(C+1),T=u.getX(C+2);s=gc(this,S,e,i,f,p,g,A,N,T),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const x=Math.max(0,y.start),w=Math.min(u.count,y.start+y.count);for(let _=x,S=w;_<S;_+=3){const b=u.getX(_),E=u.getX(_+1),C=u.getX(_+2);s=gc(this,c,e,i,f,p,g,b,E,C),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}else if(h!==void 0)if(Array.isArray(c))for(let x=0,w=m.length;x<w;x++){const _=m[x],S=c[_.materialIndex],b=Math.max(_.start,y.start),E=Math.min(h.count,Math.min(_.start+_.count,y.start+y.count));for(let C=b,I=E;C<I;C+=3){const A=C,N=C+1,T=C+2;s=gc(this,S,e,i,f,p,g,A,N,T),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=_.materialIndex,t.push(s))}}else{const x=Math.max(0,y.start),w=Math.min(h.count,y.start+y.count);for(let _=x,S=w;_<S;_+=3){const b=_,E=_+1,C=_+2;s=gc(this,c,e,i,f,p,g,b,E,C),s&&(s.faceIndex=Math.floor(_/3),t.push(s))}}}}function zS(a,e,t,i,s,o,c,u){let h;if(e.side===ri?h=i.intersectTriangle(c,o,s,!0,u):h=i.intersectTriangle(s,o,c,e.side===ls,u),h===null)return null;mc.copy(u),mc.applyMatrix4(a.matrixWorld);const f=t.ray.origin.distanceTo(mc);return f<t.near||f>t.far?null:{distance:f,point:mc.clone(),object:a}}function gc(a,e,t,i,s,o,c,u,h,f){a.getVertexPosition(u,hc),a.getVertexPosition(h,fc),a.getVertexPosition(f,dc);const p=zS(a,e,t,i,hc,fc,dc,ig);if(p){const g=new Q;Gi.getBarycoord(ig,hc,fc,dc,g),s&&(p.uv=Gi.getInterpolatedAttribute(s,u,h,f,g,new ut)),o&&(p.uv1=Gi.getInterpolatedAttribute(o,u,h,f,g,new ut)),c&&(p.normal=Gi.getInterpolatedAttribute(c,u,h,f,g,new Q),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const m={a:u,b:h,c:f,normal:new Q,materialIndex:0};Gi.getNormal(hc,fc,dc,m.normal),p.face=m,p.barycoord=g}return p}class Hd extends Hn{constructor(e=null,t=1,i=1,s,o,c,u,h,f=Fn,p=Fn,g,m){super(null,c,u,h,f,p,s,o,g,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rg extends vn{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ea=new jt,sg=new jt,xc=[],ag=new Gs,BS=new jt,Fo=new ln,Uo=new Vs;class HS extends ln{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new rg(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,BS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ea),ag.copy(e.boundingBox).applyMatrix4(Ea),this.boundingBox.union(ag)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ea),Uo.copy(e.boundingSphere).applyMatrix4(Ea),this.boundingSphere.union(Uo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,o=i.length+1,c=e*o+1;for(let u=0;u<i.length;u++)i[u]=s[c+u]}raycast(e,t){const i=this.matrixWorld,s=this.count;if(Fo.geometry=this.geometry,Fo.material=this.material,Fo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Uo.copy(this.boundingSphere),Uo.applyMatrix4(i),e.ray.intersectsSphere(Uo)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Ea),sg.multiplyMatrices(i,Ea),Fo.matrixWorld=sg,Fo.raycast(e,xc);for(let c=0,u=xc.length;c<u;c++){const h=xc[c];h.instanceId=o,h.object=this,t.push(h)}xc.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new rg(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Hd(new Float32Array(s*this.count),s,this.count,Id,Vi));const o=this.morphTexture.source.data.data;let c=0;for(let f=0;f<i.length;f++)c+=i[f];const u=this.geometry.morphTargetsRelative?1:1-c,h=s*e;return o[h]=u,o.set(i,h+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const af=new Q,GS=new Q,VS=new St;class Ns{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=af.subVectors(i,t).cross(GS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(af),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return i===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||VS.getNormalMatrix(e),s=this.coplanarPoint(af).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ls=new Vs,WS=new ut(.5,.5),vc=new Q;class Gd{constructor(e=new Ns,t=new Ns,i=new Ns,s=new Ns,o=new Ns,c=new Ns){this.planes=[e,t,i,s,o,c]}set(e,t,i,s,o,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(i),u[3].copy(s),u[4].copy(o),u[5].copy(c),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ji,i=!1){const s=this.planes,o=e.elements,c=o[0],u=o[1],h=o[2],f=o[3],p=o[4],g=o[5],m=o[6],y=o[7],x=o[8],w=o[9],_=o[10],S=o[11],b=o[12],E=o[13],C=o[14],I=o[15];if(s[0].setComponents(f-c,y-p,S-x,I-b).normalize(),s[1].setComponents(f+c,y+p,S+x,I+b).normalize(),s[2].setComponents(f+u,y+g,S+w,I+E).normalize(),s[3].setComponents(f-u,y-g,S-w,I-E).normalize(),i)s[4].setComponents(h,m,_,C).normalize(),s[5].setComponents(f-h,y-m,S-_,I-C).normalize();else if(s[4].setComponents(f-h,y-m,S-_,I-C).normalize(),t===Ji)s[5].setComponents(f+h,y+m,S+_,I+C).normalize();else if(t===$o)s[5].setComponents(h,m,_,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(e){Ls.center.set(0,0,0);const t=WS.distanceTo(e.center);return Ls.radius=.7071067811865476+t,Ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(vc.x=s.normal.x>0?e.max.x:e.min.x,vc.y=s.normal.y>0?e.max.y:e.min.y,vc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(vc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wo extends Wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Hc=new Q,Gc=new Q,og=new jt,Do=new Bd,_c=new Vs,of=new Q,lg=new Q;class Hx extends pn{constructor(e=new on,t=new Wo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,o=t.count;s<o;s++)Hc.fromBufferAttribute(t,s-1),Gc.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Hc.distanceTo(Gc);e.setAttribute("lineDistance",new Kt(i,1))}else dt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_c.copy(i.boundingSphere),_c.applyMatrix4(s),_c.radius+=o,e.ray.intersectsSphere(_c)===!1)return;og.copy(s).invert(),Do.copy(e.ray).applyMatrix4(og);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,f=this.isLineSegments?2:1,p=i.index,m=i.attributes.position;if(p!==null){const y=Math.max(0,c.start),x=Math.min(p.count,c.start+c.count);for(let w=y,_=x-1;w<_;w+=f){const S=p.getX(w),b=p.getX(w+1),E=yc(this,e,Do,h,S,b,w);E&&t.push(E)}if(this.isLineLoop){const w=p.getX(x-1),_=p.getX(y),S=yc(this,e,Do,h,w,_,x-1);S&&t.push(S)}}else{const y=Math.max(0,c.start),x=Math.min(m.count,c.start+c.count);for(let w=y,_=x-1;w<_;w+=f){const S=yc(this,e,Do,h,w,w+1,w);S&&t.push(S)}if(this.isLineLoop){const w=yc(this,e,Do,h,x-1,y,x-1);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function yc(a,e,t,i,s,o,c){const u=a.geometry.attributes.position;if(Hc.fromBufferAttribute(u,s),Gc.fromBufferAttribute(u,o),t.distanceSqToSegment(Hc,Gc,of,lg)>i)return;of.applyMatrix4(a.matrixWorld);const f=e.ray.origin.distanceTo(of);if(!(f<e.near||f>e.far))return{distance:f,point:lg.clone().applyMatrix4(a.matrixWorld),index:c,face:null,faceIndex:null,barycoord:null,object:a}}const cg=new Q,ug=new Q;class fd extends Hx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,o=t.count;s<o;s+=2)cg.fromBufferAttribute(t,s),ug.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+cg.distanceTo(ug);e.setAttribute("lineDistance",new Kt(i,1))}else dt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class as extends Wi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hg=new jt,dd=new Bd,Sc=new Vs,Mc=new Q;class Tr extends pn{constructor(e=new on,t=new as){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,o=e.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Sc.copy(i.boundingSphere),Sc.applyMatrix4(s),Sc.radius+=o,e.ray.intersectsSphere(Sc)===!1)return;hg.copy(s).invert(),dd.copy(e.ray).applyMatrix4(hg);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=u*u,f=i.index,g=i.attributes.position;if(f!==null){const m=Math.max(0,c.start),y=Math.min(f.count,c.start+c.count);for(let x=m,w=y;x<w;x++){const _=f.getX(x);Mc.fromBufferAttribute(g,_),fg(Mc,_,h,s,e,t,this)}}else{const m=Math.max(0,c.start),y=Math.min(g.count,c.start+c.count);for(let x=m,w=y;x<w;x++)Mc.fromBufferAttribute(g,x),fg(Mc,x,h,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=s.length;o<c;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function fg(a,e,t,i,s,o,c){const u=dd.distanceSqToPoint(a);if(u<t){const h=new Q;dd.closestPointToPoint(a,h),h.applyMatrix4(i);const f=s.ray.origin.distanceTo(h);if(f<s.near||f>s.far)return;o.push({distance:f,distanceToRay:Math.sqrt(u),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:c})}}class XS extends Hn{constructor(e,t,i,s,o=dn,c=dn,u,h,f){super(e,t,i,s,o,c,u,h,f),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const p=this;function g(){p.needsUpdate=!0,p._requestVideoFrameCallbackId=e.requestVideoFrameCallback(g)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(g))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class Gx extends Hn{constructor(e=[],t=Os,i,s,o,c,u,h,f,p){super(e,t,i,s,o,c,u,h,f,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ga extends Hn{constructor(e,t,i=rr,s,o,c,u=Fn,h=Fn,f,p=Cr,g=1){if(p!==Cr&&p!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:g};super(m,s,o,c,u,h,p,i,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class jS extends Ga{constructor(e,t=rr,i=Os,s,o,c=Fn,u=Fn,h,f=Cr){const p={width:e,height:e,depth:1},g=[p,p,p,p,p,p];super(e,e,t,i,s,o,c,u,h,f),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Vx extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class qa extends on{constructor(e=1,t=1,i=1,s=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:o,depthSegments:c};const u=this;s=Math.floor(s),o=Math.floor(o),c=Math.floor(c);const h=[],f=[],p=[],g=[];let m=0,y=0;x("z","y","x",-1,-1,i,t,e,c,o,0),x("z","y","x",1,-1,i,t,-e,c,o,1),x("x","z","y",1,1,e,i,t,s,c,2),x("x","z","y",1,-1,e,i,-t,s,c,3),x("x","y","z",1,-1,e,t,i,s,o,4),x("x","y","z",-1,-1,e,t,-i,s,o,5),this.setIndex(h),this.setAttribute("position",new Kt(f,3)),this.setAttribute("normal",new Kt(p,3)),this.setAttribute("uv",new Kt(g,2));function x(w,_,S,b,E,C,I,A,N,T,F){const z=C/N,D=I/T,G=C/2,ne=I/2,se=A/2,X=N+1,V=T+1;let Y=0,q=0;const ie=new Q;for(let te=0;te<V;te++){const O=te*D-ne;for(let ee=0;ee<X;ee++){const ge=ee*z-G;ie[w]=ge*b,ie[_]=O*E,ie[S]=se,f.push(ie.x,ie.y,ie.z),ie[w]=0,ie[_]=0,ie[S]=A>0?1:-1,p.push(ie.x,ie.y,ie.z),g.push(ee/N),g.push(1-te/T),Y+=1}}for(let te=0;te<T;te++)for(let O=0;O<N;O++){const ee=m+O+X*te,ge=m+O+X*(te+1),Te=m+(O+1)+X*(te+1),Se=m+(O+1)+X*te;h.push(ee,ge,Se),h.push(ge,Te,Se),q+=6}u.addGroup(y,q,F),y+=q,m+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Vd extends on{constructor(e=[],t=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:s};const o=[],c=[];u(s),f(i),p(),this.setAttribute("position",new Kt(o,3)),this.setAttribute("normal",new Kt(o.slice(),3)),this.setAttribute("uv",new Kt(c,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function u(b){const E=new Q,C=new Q,I=new Q;for(let A=0;A<t.length;A+=3)y(t[A+0],E),y(t[A+1],C),y(t[A+2],I),h(E,C,I,b)}function h(b,E,C,I){const A=I+1,N=[];for(let T=0;T<=A;T++){N[T]=[];const F=b.clone().lerp(C,T/A),z=E.clone().lerp(C,T/A),D=A-T;for(let G=0;G<=D;G++)G===0&&T===A?N[T][G]=F:N[T][G]=F.clone().lerp(z,G/D)}for(let T=0;T<A;T++)for(let F=0;F<2*(A-T)-1;F++){const z=Math.floor(F/2);F%2===0?(m(N[T][z+1]),m(N[T+1][z]),m(N[T][z])):(m(N[T][z+1]),m(N[T+1][z+1]),m(N[T+1][z]))}}function f(b){const E=new Q;for(let C=0;C<o.length;C+=3)E.x=o[C+0],E.y=o[C+1],E.z=o[C+2],E.normalize().multiplyScalar(b),o[C+0]=E.x,o[C+1]=E.y,o[C+2]=E.z}function p(){const b=new Q;for(let E=0;E<o.length;E+=3){b.x=o[E+0],b.y=o[E+1],b.z=o[E+2];const C=_(b)/2/Math.PI+.5,I=S(b)/Math.PI+.5;c.push(C,1-I)}x(),g()}function g(){for(let b=0;b<c.length;b+=6){const E=c[b+0],C=c[b+2],I=c[b+4],A=Math.max(E,C,I),N=Math.min(E,C,I);A>.9&&N<.1&&(E<.2&&(c[b+0]+=1),C<.2&&(c[b+2]+=1),I<.2&&(c[b+4]+=1))}}function m(b){o.push(b.x,b.y,b.z)}function y(b,E){const C=b*3;E.x=e[C+0],E.y=e[C+1],E.z=e[C+2]}function x(){const b=new Q,E=new Q,C=new Q,I=new Q,A=new ut,N=new ut,T=new ut;for(let F=0,z=0;F<o.length;F+=9,z+=6){b.set(o[F+0],o[F+1],o[F+2]),E.set(o[F+3],o[F+4],o[F+5]),C.set(o[F+6],o[F+7],o[F+8]),A.set(c[z+0],c[z+1]),N.set(c[z+2],c[z+3]),T.set(c[z+4],c[z+5]),I.copy(b).add(E).add(C).divideScalar(3);const D=_(I);w(A,z+0,b,D),w(N,z+2,E,D),w(T,z+4,C,D)}}function w(b,E,C,I){I<0&&b.x===1&&(c[E]=b.x-1),C.x===0&&C.z===0&&(c[E]=I/2/Math.PI+.5)}function _(b){return Math.atan2(b.z,-b.x)}function S(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vd(e.vertices,e.indices,e.radius,e.detail)}}class Wd extends Vd{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Wd(e.radius,e.detail)}}class Rr extends on{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const o=e/2,c=t/2,u=Math.floor(i),h=Math.floor(s),f=u+1,p=h+1,g=e/u,m=t/h,y=[],x=[],w=[],_=[];for(let S=0;S<p;S++){const b=S*m-c;for(let E=0;E<f;E++){const C=E*g-o;x.push(C,-b,0),w.push(0,0,1),_.push(E/u),_.push(1-S/h)}}for(let S=0;S<h;S++)for(let b=0;b<u;b++){const E=b+f*S,C=b+f*(S+1),I=b+1+f*(S+1),A=b+1+f*S;y.push(E,C,A),y.push(C,I,A)}this.setIndex(y),this.setAttribute("position",new Kt(x,3)),this.setAttribute("normal",new Kt(w,3)),this.setAttribute("uv",new Kt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xd extends on{constructor(e=1,t=.4,i=64,s=8,o=2,c=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:s,p:o,q:c},i=Math.floor(i),s=Math.floor(s);const u=[],h=[],f=[],p=[],g=new Q,m=new Q,y=new Q,x=new Q,w=new Q,_=new Q,S=new Q;for(let E=0;E<=i;++E){const C=E/i*o*Math.PI*2;b(C,o,c,e,y),b(C+.01,o,c,e,x),_.subVectors(x,y),S.addVectors(x,y),w.crossVectors(_,S),S.crossVectors(w,_),w.normalize(),S.normalize();for(let I=0;I<=s;++I){const A=I/s*Math.PI*2,N=-t*Math.cos(A),T=t*Math.sin(A);g.x=y.x+(N*S.x+T*w.x),g.y=y.y+(N*S.y+T*w.y),g.z=y.z+(N*S.z+T*w.z),h.push(g.x,g.y,g.z),m.subVectors(g,y).normalize(),f.push(m.x,m.y,m.z),p.push(E/i),p.push(I/s)}}for(let E=1;E<=i;E++)for(let C=1;C<=s;C++){const I=(s+1)*(E-1)+(C-1),A=(s+1)*E+(C-1),N=(s+1)*E+C,T=(s+1)*(E-1)+C;u.push(I,A,T),u.push(A,N,T)}this.setIndex(u),this.setAttribute("position",new Kt(h,3)),this.setAttribute("normal",new Kt(f,3)),this.setAttribute("uv",new Kt(p,2));function b(E,C,I,A,N){const T=Math.cos(E),F=Math.sin(E),z=I/C*E,D=Math.cos(z);N.x=A*(2+D)*.5*T,N.y=A*(2+D)*F*.5,N.z=A*Math.sin(z)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xd(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}function Va(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const s=a[t][i];if(dg(s))s.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(dg(s[0])){const o=[];for(let c=0,u=s.length;c<u;c++)o[c]=s[c].clone();e[t][i]=o}else e[t][i]=s.slice();else e[t][i]=s}}return e}function qn(a){const e={};for(let t=0;t<a.length;t++){const i=Va(a[t]);for(const s in i)e[s]=i[s]}return e}function dg(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function qS(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Wx(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const Vc={clone:Va,merge:qn};var YS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$S=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends Wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YS,this.fragmentShader=$S,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Va(e.uniforms),this.uniformsGroups=qS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?t.uniforms[s]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[s]={type:"m4",value:c.toArray()}:t.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class KS extends an{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xx extends Wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kc,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ar,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ZS extends Wi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new $e(16777215),this.specular=new $e(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kc,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ar,this.combine=Ad,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class QS extends Wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JS extends Wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pg={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(mg(a)||(this.files[a]=e))},get:function(a){if(this.enabled!==!1&&!mg(a))return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};function mg(a){try{const e=a.slice(a.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class eM{constructor(e,t,i){const s=this;let o=!1,c=0,u=0,h;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(p){u++,o===!1&&s.onStart!==void 0&&s.onStart(p,c,u),o=!0},this.itemEnd=function(p){c++,s.onProgress!==void 0&&s.onProgress(p,c,u),c===u&&(o=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(p){s.onError!==void 0&&s.onError(p)},this.resolveURL=function(p){return h?h(p):p},this.setURLModifier=function(p){return h=p,this},this.addHandler=function(p,g){return f.push(p,g),this},this.removeHandler=function(p){const g=f.indexOf(p);return g!==-1&&f.splice(g,2),this},this.getHandler=function(p){for(let g=0,m=f.length;g<m;g+=2){const y=f[g],x=f[g+1];if(y.global&&(y.lastIndex=0),y.test(p))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const tM=new eM;class jd{constructor(e){this.manager=e!==void 0?e:tM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,o){i.load(e,s,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}jd.DEFAULT_MATERIAL_NAME="__DEFAULT";const wr={};class nM extends Error{constructor(e,t){super(e),this.response=t}}class iM extends jd{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=pg.get(`file:${e}`);if(o!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0);return}if(wr[e]!==void 0){wr[e].push({onLoad:t,onProgress:i,onError:s});return}wr[e]=[],wr[e].push({onLoad:t,onProgress:i,onError:s});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),u=this.mimeType,h=this.responseType;fetch(c).then(f=>{if(f.status===200||f.status===0){if(f.status===0&&dt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||f.body===void 0||f.body.getReader===void 0)return f;const p=wr[e],g=f.body.getReader(),m=f.headers.get("X-File-Size")||f.headers.get("Content-Length"),y=m?parseInt(m):0,x=y!==0;let w=0;const _=new ReadableStream({start(S){b();function b(){g.read().then(({done:E,value:C})=>{if(E)S.close();else{w+=C.byteLength;const I=new ProgressEvent("progress",{lengthComputable:x,loaded:w,total:y});for(let A=0,N=p.length;A<N;A++){const T=p[A];T.onProgress&&T.onProgress(I)}S.enqueue(C),b()}},E=>{S.error(E)})}}});return new Response(_)}else throw new nM(`fetch for "${f.url}" responded with ${f.status}: ${f.statusText}`,f)}).then(f=>{switch(h){case"arraybuffer":return f.arrayBuffer();case"blob":return f.blob();case"document":return f.text().then(p=>new DOMParser().parseFromString(p,u));case"json":return f.json();default:if(u==="")return f.text();{const g=/charset="?([^;"\s]*)"?/i.exec(u),m=g&&g[1]?g[1].toLowerCase():void 0,y=new TextDecoder(m);return f.arrayBuffer().then(x=>y.decode(x))}}}).then(f=>{pg.add(`file:${e}`,f);const p=wr[e];delete wr[e];for(let g=0,m=p.length;g<m;g++){const y=p[g];y.onLoad&&y.onLoad(f)}}).catch(f=>{const p=wr[e];if(p===void 0)throw this.manager.itemError(e),f;delete wr[e];for(let g=0,m=p.length;g<m;g++){const y=p[g];y.onError&&y.onError(f)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class qd extends pn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const lf=new jt,gg=new Q,xg=new Q;class jx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gd,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;gg.setFromMatrixPosition(e.matrixWorld),t.position.copy(gg),xg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xg),t.updateMatrixWorld(),lf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===$o||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(lf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const wc=new Q,bc=new ja,Ki=new Q;class qx extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(wc,bc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,bc,Ki.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(wc,bc,Ki),Ki.x===1&&Ki.y===1&&Ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(wc,bc,Ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ns=new Q,vg=new ut,_g=new ut;class An extends qx{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ko*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Go*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ko*2*Math.atan(Math.tan(Go*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,vg,_g),t.subVectors(_g,vg)}setViewOffset(e,t,i,s,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Go*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,o=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,f=c.fullHeight;o+=c.offsetX*s/h,t-=c.offsetY*i/f,s*=c.width/h,i*=c.height/f}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class rM extends jx{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0}}class Wc extends qd{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new rM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Ya extends qx{constructor(e=-1,t=1,i=1,s=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,c=i+e,u=s+t,h=s-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,c=o+f*this.view.width,u-=p*this.view.offsetY,h=u-p*this.view.height}this.projectionMatrix.makeOrthographic(o,c,u,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class sM extends jx{constructor(){super(new Ya(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cf extends qd{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new sM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Yx extends qd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ta=-90,Ca=1;class aM extends pn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new An(Ta,Ca,e,t);s.layers=this.layers,this.add(s);const o=new An(Ta,Ca,e,t);o.layers=this.layers,this.add(o);const c=new An(Ta,Ca,e,t);c.layers=this.layers,this.add(c);const u=new An(Ta,Ca,e,t);u.layers=this.layers,this.add(u);const h=new An(Ta,Ca,e,t);h.layers=this.layers,this.add(h);const f=new An(Ta,Ca,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,o,c,u,h]=t;for(const f of t)this.remove(f);if(e===Ji)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===$o)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,c,u,h,f,p]=this.children,g=e.getRenderTarget(),m=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,1,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,2,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(i,3,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(i,4,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),i.texture.generateMipmaps=w,e.setRenderTarget(i,5,s),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(g,m,y),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class oM extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class lM{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=cM.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function cM(){this._document.hidden===!1&&this.reset()}const Jd=class Jd{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const o=this.elements;return o[0]=e,o[2]=t,o[1]=i,o[3]=s,this}};Jd.prototype.isMatrix2=!0;let yg=Jd;function Sg(a,e,t,i){const s=uM(i);switch(t){case Nx:return a*e;case Id:return a*e/s.components*s.byteLength;case Nd:return a*e/s.components*s.byteLength;case zs:return a*e*2/s.components*s.byteLength;case Fd:return a*e*2/s.components*s.byteLength;case Fx:return a*e*3/s.components*s.byteLength;case gi:return a*e*4/s.components*s.byteLength;case Ud:return a*e*4/s.components*s.byteLength;case Rc:case Pc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Lc:case Ic:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Df:case Of:return Math.max(a,16)*Math.max(e,8)/4;case Uf:case kf:return Math.max(a,8)*Math.max(e,8)/2;case zf:case Bf:case Gf:case Vf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case Hf:case Uc:case Wf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Xf:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case jf:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case qf:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Yf:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case $f:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Kf:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case Zf:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Qf:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Jf:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case ed:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case td:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case nd:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case id:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case rd:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case sd:case ad:case od:return Math.ceil(a/4)*Math.ceil(e/4)*16;case ld:case cd:return Math.ceil(a/4)*Math.ceil(e/4)*8;case Dc:case ud:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function uM(a){switch(a){case mi:case Rx:return{byteLength:1,components:1};case qo:case Px:case xi:return{byteLength:2,components:1};case Pd:case Ld:return{byteLength:2,components:4};case rr:case Rd:case Vi:return{byteLength:4,components:1};case Lx:case Ix:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cd}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $x(){let a=null,e=!1,t=null,i=null;function s(o,c){t(o,c),i=a.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&a!==null&&(i=a.requestAnimationFrame(s),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){a=o}}}function hM(a){const e=new WeakMap;function t(u,h){const f=u.array,p=u.usage,g=f.byteLength,m=a.createBuffer();a.bindBuffer(h,m),a.bufferData(h,f,p),u.onUploadCallback();let y;if(f instanceof Float32Array)y=a.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)y=a.HALF_FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?y=a.HALF_FLOAT:y=a.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=a.SHORT;else if(f instanceof Uint32Array)y=a.UNSIGNED_INT;else if(f instanceof Int32Array)y=a.INT;else if(f instanceof Int8Array)y=a.BYTE;else if(f instanceof Uint8Array)y=a.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:g}}function i(u,h,f){const p=h.array,g=h.updateRanges;if(a.bindBuffer(f,u),g.length===0)a.bufferSubData(f,0,p);else{g.sort((y,x)=>y.start-x.start);let m=0;for(let y=1;y<g.length;y++){const x=g[m],w=g[y];w.start<=x.start+x.count+1?x.count=Math.max(x.count,w.start+w.count-x.start):(++m,g[m]=w)}g.length=m+1;for(let y=0,x=g.length;y<x;y++){const w=g[y];a.bufferSubData(f,w.start*p.BYTES_PER_ELEMENT,p,w.start,w.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const h=e.get(u);h&&(a.deleteBuffer(h.buffer),e.delete(u))}function c(u,h){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const f=e.get(u);if(f===void 0)e.set(u,t(u,h));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,u,h),f.version=u.version}}return{get:s,remove:o,update:c}}var fM=`#ifdef USE_ALPHAHASH
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
}`,bt={alphahash_fragment:fM,alphahash_pars_fragment:dM,alphamap_fragment:pM,alphamap_pars_fragment:mM,alphatest_fragment:gM,alphatest_pars_fragment:xM,aomap_fragment:vM,aomap_pars_fragment:_M,batching_pars_vertex:yM,batching_vertex:SM,begin_vertex:MM,beginnormal_vertex:wM,bsdfs:bM,iridescence_fragment:EM,bumpmap_pars_fragment:TM,clipping_planes_fragment:CM,clipping_planes_pars_fragment:AM,clipping_planes_pars_vertex:RM,clipping_planes_vertex:PM,color_fragment:LM,color_pars_fragment:IM,color_pars_vertex:NM,color_vertex:FM,common:UM,cube_uv_reflection_fragment:DM,defaultnormal_vertex:kM,displacementmap_pars_vertex:OM,displacementmap_vertex:zM,emissivemap_fragment:BM,emissivemap_pars_fragment:HM,colorspace_fragment:GM,colorspace_pars_fragment:VM,envmap_fragment:WM,envmap_common_pars_fragment:XM,envmap_pars_fragment:jM,envmap_pars_vertex:qM,envmap_physical_pars_fragment:rw,envmap_vertex:YM,fog_vertex:$M,fog_pars_vertex:KM,fog_fragment:ZM,fog_pars_fragment:QM,gradientmap_pars_fragment:JM,lightmap_pars_fragment:ew,lights_lambert_fragment:tw,lights_lambert_pars_fragment:nw,lights_pars_begin:iw,lights_toon_fragment:sw,lights_toon_pars_fragment:aw,lights_phong_fragment:ow,lights_phong_pars_fragment:lw,lights_physical_fragment:cw,lights_physical_pars_fragment:uw,lights_fragment_begin:hw,lights_fragment_maps:fw,lights_fragment_end:dw,lightprobes_pars_fragment:pw,logdepthbuf_fragment:mw,logdepthbuf_pars_fragment:gw,logdepthbuf_pars_vertex:xw,logdepthbuf_vertex:vw,map_fragment:_w,map_pars_fragment:yw,map_particle_fragment:Sw,map_particle_pars_fragment:Mw,metalnessmap_fragment:ww,metalnessmap_pars_fragment:bw,morphinstance_vertex:Ew,morphcolor_vertex:Tw,morphnormal_vertex:Cw,morphtarget_pars_vertex:Aw,morphtarget_vertex:Rw,normal_fragment_begin:Pw,normal_fragment_maps:Lw,normal_pars_fragment:Iw,normal_pars_vertex:Nw,normal_vertex:Fw,normalmap_pars_fragment:Uw,clearcoat_normal_fragment_begin:Dw,clearcoat_normal_fragment_maps:kw,clearcoat_pars_fragment:Ow,iridescence_pars_fragment:zw,opaque_fragment:Bw,packing:Hw,premultiplied_alpha_fragment:Gw,project_vertex:Vw,dithering_fragment:Ww,dithering_pars_fragment:Xw,roughnessmap_fragment:jw,roughnessmap_pars_fragment:qw,shadowmap_pars_fragment:Yw,shadowmap_pars_vertex:$w,shadowmap_vertex:Kw,shadowmask_pars_fragment:Zw,skinbase_vertex:Qw,skinning_pars_vertex:Jw,skinning_vertex:eb,skinnormal_vertex:tb,specularmap_fragment:nb,specularmap_pars_fragment:ib,tonemapping_fragment:rb,tonemapping_pars_fragment:sb,transmission_fragment:ab,transmission_pars_fragment:ob,uv_pars_fragment:lb,uv_pars_vertex:cb,uv_vertex:ub,worldpos_vertex:hb,background_vert:fb,background_frag:db,backgroundCube_vert:pb,backgroundCube_frag:mb,cube_vert:gb,cube_frag:xb,depth_vert:vb,depth_frag:_b,distance_vert:yb,distance_frag:Sb,equirect_vert:Mb,equirect_frag:wb,linedashed_vert:bb,linedashed_frag:Eb,meshbasic_vert:Tb,meshbasic_frag:Cb,meshlambert_vert:Ab,meshlambert_frag:Rb,meshmatcap_vert:Pb,meshmatcap_frag:Lb,meshnormal_vert:Ib,meshnormal_frag:Nb,meshphong_vert:Fb,meshphong_frag:Ub,meshphysical_vert:Db,meshphysical_frag:kb,meshtoon_vert:Ob,meshtoon_frag:zb,points_vert:Bb,points_frag:Hb,shadow_vert:Gb,shadow_frag:Vb,sprite_vert:Wb,sprite_frag:Xb},Xe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new St}},envmap:{envMap:{value:null},envMapRotation:{value:new St},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new St}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new St}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new St},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new St},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new St},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new St}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new St}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new St}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}}},Qi={basic:{uniforms:qn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:bt.meshbasic_vert,fragmentShader:bt.meshbasic_frag},lambert:{uniforms:qn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:bt.meshlambert_vert,fragmentShader:bt.meshlambert_frag},phong:{uniforms:qn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:bt.meshphong_vert,fragmentShader:bt.meshphong_frag},standard:{uniforms:qn([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag},toon:{uniforms:qn([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new $e(0)}}]),vertexShader:bt.meshtoon_vert,fragmentShader:bt.meshtoon_frag},matcap:{uniforms:qn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:bt.meshmatcap_vert,fragmentShader:bt.meshmatcap_frag},points:{uniforms:qn([Xe.points,Xe.fog]),vertexShader:bt.points_vert,fragmentShader:bt.points_frag},dashed:{uniforms:qn([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:bt.linedashed_vert,fragmentShader:bt.linedashed_frag},depth:{uniforms:qn([Xe.common,Xe.displacementmap]),vertexShader:bt.depth_vert,fragmentShader:bt.depth_frag},normal:{uniforms:qn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:bt.meshnormal_vert,fragmentShader:bt.meshnormal_frag},sprite:{uniforms:qn([Xe.sprite,Xe.fog]),vertexShader:bt.sprite_vert,fragmentShader:bt.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:bt.background_vert,fragmentShader:bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new St}},vertexShader:bt.backgroundCube_vert,fragmentShader:bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:bt.cube_vert,fragmentShader:bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:bt.equirect_vert,fragmentShader:bt.equirect_frag},distance:{uniforms:qn([Xe.common,Xe.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:bt.distance_vert,fragmentShader:bt.distance_frag},shadow:{uniforms:qn([Xe.lights,Xe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:bt.shadow_vert,fragmentShader:bt.shadow_frag}};Qi.physical={uniforms:qn([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new St},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new St},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new St},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new St},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new St},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new St},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new St},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new St},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new St},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new St},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new St},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new St}}]),vertexShader:bt.meshphysical_vert,fragmentShader:bt.meshphysical_frag};const Ec={r:0,b:0,g:0},jb=new jt,Kx=new St;Kx.set(-1,0,0,0,1,0,0,0,1);function qb(a,e,t,i,s,o){const c=new $e(0);let u=s===!0?0:1,h,f,p=null,g=0,m=null;function y(b){let E=b.isScene===!0?b.background:null;if(E&&E.isTexture){const C=b.backgroundBlurriness>0;E=e.get(E,C)}return E}function x(b){let E=!1;const C=y(b);C===null?_(c,u):C&&C.isColor&&(_(C,1),E=!0);const I=a.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(a.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function w(b,E){const C=y(E);C&&(C.isCubeTexture||C.mapping===Yc)?(f===void 0&&(f=new ln(new qa(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Va(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(I,A,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=C,f.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(jb.makeRotationFromEuler(E.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&f.material.uniforms.backgroundRotation.value.premultiply(Kx),f.material.toneMapped=Rt.getTransfer(C.colorSpace)!==Ht,(p!==C||g!==C.version||m!==a.toneMapping)&&(f.material.needsUpdate=!0,p=C,g=C.version,m=a.toneMapping),f.layers.enableAll(),b.unshift(f,f.geometry,f.material,0,0,null)):C&&C.isTexture&&(h===void 0&&(h=new ln(new Rr(2,2),new an({name:"BackgroundMaterial",uniforms:Va(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:ls,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=C,h.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,h.material.toneMapped=Rt.getTransfer(C.colorSpace)!==Ht,C.matrixAutoUpdate===!0&&C.updateMatrix(),h.material.uniforms.uvTransform.value.copy(C.matrix),(p!==C||g!==C.version||m!==a.toneMapping)&&(h.material.needsUpdate=!0,p=C,g=C.version,m=a.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function _(b,E){b.getRGB(Ec,Wx(a)),t.buffers.color.setClear(Ec.r,Ec.g,Ec.b,E,o)}function S(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(b,E=1){c.set(b),u=E,_(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(b){u=b,_(c,u)},render:x,addToRenderList:w,dispose:S}}function Yb(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},s=m(null);let o=s,c=!1;function u(D,G,ne,se,X){let V=!1;const Y=g(D,se,ne,G);o!==Y&&(o=Y,f(o.object)),V=y(D,se,ne,X),V&&x(D,se,ne,X),X!==null&&e.update(X,a.ELEMENT_ARRAY_BUFFER),(V||c)&&(c=!1,C(D,G,ne,se),X!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function h(){return a.createVertexArray()}function f(D){return a.bindVertexArray(D)}function p(D){return a.deleteVertexArray(D)}function g(D,G,ne,se){const X=se.wireframe===!0;let V=i[G.id];V===void 0&&(V={},i[G.id]=V);const Y=D.isInstancedMesh===!0?D.id:0;let q=V[Y];q===void 0&&(q={},V[Y]=q);let ie=q[ne.id];ie===void 0&&(ie={},q[ne.id]=ie);let te=ie[X];return te===void 0&&(te=m(h()),ie[X]=te),te}function m(D){const G=[],ne=[],se=[];for(let X=0;X<t;X++)G[X]=0,ne[X]=0,se[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:ne,attributeDivisors:se,object:D,attributes:{},index:null}}function y(D,G,ne,se){const X=o.attributes,V=G.attributes;let Y=0;const q=ne.getAttributes();for(const ie in q)if(q[ie].location>=0){const O=X[ie];let ee=V[ie];if(ee===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor)),O===void 0||O.attribute!==ee||ee&&O.data!==ee.data)return!0;Y++}return o.attributesNum!==Y||o.index!==se}function x(D,G,ne,se){const X={},V=G.attributes;let Y=0;const q=ne.getAttributes();for(const ie in q)if(q[ie].location>=0){let O=V[ie];O===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(O=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(O=D.instanceColor));const ee={};ee.attribute=O,O&&O.data&&(ee.data=O.data),X[ie]=ee,Y++}o.attributes=X,o.attributesNum=Y,o.index=se}function w(){const D=o.newAttributes;for(let G=0,ne=D.length;G<ne;G++)D[G]=0}function _(D){S(D,0)}function S(D,G){const ne=o.newAttributes,se=o.enabledAttributes,X=o.attributeDivisors;ne[D]=1,se[D]===0&&(a.enableVertexAttribArray(D),se[D]=1),X[D]!==G&&(a.vertexAttribDivisor(D,G),X[D]=G)}function b(){const D=o.newAttributes,G=o.enabledAttributes;for(let ne=0,se=G.length;ne<se;ne++)G[ne]!==D[ne]&&(a.disableVertexAttribArray(ne),G[ne]=0)}function E(D,G,ne,se,X,V,Y){Y===!0?a.vertexAttribIPointer(D,G,ne,X,V):a.vertexAttribPointer(D,G,ne,se,X,V)}function C(D,G,ne,se){w();const X=se.attributes,V=ne.getAttributes(),Y=G.defaultAttributeValues;for(const q in V){const ie=V[q];if(ie.location>=0){let te=X[q];if(te===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(te=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(te=D.instanceColor)),te!==void 0){const O=te.normalized,ee=te.itemSize,ge=e.get(te);if(ge===void 0)continue;const Te=ge.buffer,Se=ge.type,W=ge.bytesPerElement,me=Se===a.INT||Se===a.UNSIGNED_INT||te.gpuType===Rd;if(te.isInterleavedBufferAttribute){const oe=te.data,Re=oe.stride,Oe=te.offset;if(oe.isInstancedInterleavedBuffer){for(let Ce=0;Ce<ie.locationSize;Ce++)S(ie.location+Ce,oe.meshPerAttribute);D.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ce=0;Ce<ie.locationSize;Ce++)_(ie.location+Ce);a.bindBuffer(a.ARRAY_BUFFER,Te);for(let Ce=0;Ce<ie.locationSize;Ce++)E(ie.location+Ce,ee/ie.locationSize,Se,O,Re*W,(Oe+ee/ie.locationSize*Ce)*W,me)}else{if(te.isInstancedBufferAttribute){for(let oe=0;oe<ie.locationSize;oe++)S(ie.location+oe,te.meshPerAttribute);D.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let oe=0;oe<ie.locationSize;oe++)_(ie.location+oe);a.bindBuffer(a.ARRAY_BUFFER,Te);for(let oe=0;oe<ie.locationSize;oe++)E(ie.location+oe,ee/ie.locationSize,Se,O,ee*W,ee/ie.locationSize*oe*W,me)}}else if(Y!==void 0){const O=Y[q];if(O!==void 0)switch(O.length){case 2:a.vertexAttrib2fv(ie.location,O);break;case 3:a.vertexAttrib3fv(ie.location,O);break;case 4:a.vertexAttrib4fv(ie.location,O);break;default:a.vertexAttrib1fv(ie.location,O)}}}}b()}function I(){F();for(const D in i){const G=i[D];for(const ne in G){const se=G[ne];for(const X in se){const V=se[X];for(const Y in V)p(V[Y].object),delete V[Y];delete se[X]}}delete i[D]}}function A(D){if(i[D.id]===void 0)return;const G=i[D.id];for(const ne in G){const se=G[ne];for(const X in se){const V=se[X];for(const Y in V)p(V[Y].object),delete V[Y];delete se[X]}}delete i[D.id]}function N(D){for(const G in i){const ne=i[G];for(const se in ne){const X=ne[se];if(X[D.id]===void 0)continue;const V=X[D.id];for(const Y in V)p(V[Y].object),delete V[Y];delete X[D.id]}}}function T(D){for(const G in i){const ne=i[G],se=D.isInstancedMesh===!0?D.id:0,X=ne[se];if(X!==void 0){for(const V in X){const Y=X[V];for(const q in Y)p(Y[q].object),delete Y[q];delete X[V]}delete ne[se],Object.keys(ne).length===0&&delete i[G]}}}function F(){z(),c=!0,o!==s&&(o=s,f(o.object))}function z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:F,resetDefaultState:z,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfObject:T,releaseStatesOfProgram:N,initAttributes:w,enableAttribute:_,disableUnusedAttributes:b}}function $b(a,e,t){let i;function s(h){i=h}function o(h,f){a.drawArrays(i,h,f),t.update(f,i,1)}function c(h,f,p){p!==0&&(a.drawArraysInstanced(i,h,f,p),t.update(f,i,p))}function u(h,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,f,0,p);let m=0;for(let y=0;y<p;y++)m+=f[y];t.update(m,i,1)}this.setMode=s,this.render=o,this.renderInstances=c,this.renderMultiDraw=u}function Kb(a,e,t,i){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");s=a.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(N){return!(N!==gi&&i.convert(N)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(N){const T=N===xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==mi&&i.convert(N)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Vi&&!T)}function h(N){if(N==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const p=h(f);p!==f&&(dt("WebGLRenderer:",f,"not supported, using",p,"instead."),f=p);const g=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&m===!1&&dt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const y=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),x=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=a.getParameter(a.MAX_TEXTURE_SIZE),_=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),S=a.getParameter(a.MAX_VERTEX_ATTRIBS),b=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),E=a.getParameter(a.MAX_VARYING_VECTORS),C=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),I=a.getParameter(a.MAX_SAMPLES),A=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:g,reversedDepthBuffer:m,maxTextures:y,maxVertexTextures:x,maxTextureSize:w,maxCubemapSize:_,maxAttributes:S,maxVertexUniforms:b,maxVaryings:E,maxFragmentUniforms:C,maxSamples:I,samples:A}}function Zb(a){const e=this;let t=null,i=0,s=!1,o=!1;const c=new Ns,u=new St,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,m){const y=g.length!==0||m||i!==0||s;return s=m,i=g.length,y},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,m){t=p(g,m,0)},this.setState=function(g,m,y){const x=g.clippingPlanes,w=g.clipIntersection,_=g.clipShadows,S=a.get(g);if(!s||x===null||x.length===0||o&&!_)o?p(null):f();else{const b=o?0:i,E=b*4;let C=S.clippingState||null;h.value=C,C=p(x,m,E,y);for(let I=0;I!==E;++I)C[I]=t[I];S.clippingState=C,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=b}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(g,m,y,x){const w=g!==null?g.length:0;let _=null;if(w!==0){if(_=h.value,x!==!0||_===null){const S=y+w*4,b=m.matrixWorldInverse;u.getNormalMatrix(b),(_===null||_.length<S)&&(_=new Float32Array(S));for(let E=0,C=y;E!==w;++E,C+=4)c.copy(g[E]).applyMatrix4(b,u),c.normal.toArray(_,C),_[C+3]=c.constant}h.value=_,h.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,_}}const os=4,Mg=[.125,.215,.35,.446,.526,.582],Us=20,Qb=256,ko=new Ya,wg=new $e;let uf=null,hf=0,ff=0,df=!1;const Jb=new Q;class bg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,o={}){const{size:c=256,position:u=Jb}=o;uf=this._renderer.getRenderTarget(),hf=this._renderer.getActiveCubeFace(),ff=this._renderer.getActiveMipmapLevel(),df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,i,s,h,u),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(uf,hf,ff),this._renderer.xr.enabled=df,e.scissorTest=!1,Aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Os||e.mapping===Ha?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uf=this._renderer.getRenderTarget(),hf=this._renderer.getActiveCubeFace(),ff=this._renderer.getActiveMipmapLevel(),df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:xi,format:gi,colorSpace:Oc,depthBuffer:!1},s=Eg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eg(e,t,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=e2(o)),this._blurMaterial=n2(o,e,t),this._ggxMaterial=t2(o,e,t)}return s}_compileMaterial(e){const t=new ln(new on,e);this._renderer.compile(t,ko)}_sceneToCubeUV(e,t,i,s,o){const h=new An(90,1,t,i),f=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,m=g.autoClear,y=g.toneMapping;g.getClearColor(wg),g.toneMapping=nr,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ln(new qa,new $c({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,_=w.material;let S=!1;const b=e.background;b?b.isColor&&(_.color.copy(b),e.background=null,S=!0):(_.color.copy(wg),S=!0);for(let E=0;E<6;E++){const C=E%3;C===0?(h.up.set(0,f[E],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x+p[E],o.y,o.z)):C===1?(h.up.set(0,0,f[E]),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y+p[E],o.z)):(h.up.set(0,f[E],0),h.position.set(o.x,o.y,o.z),h.lookAt(o.x,o.y,o.z+p[E]));const I=this._cubeSize;Aa(s,C*I,E>2?I:0,I,I),g.setRenderTarget(s),S&&g.render(w,h),g.render(e,h)}g.toneMapping=y,g.autoClear=m,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Os||e.mapping===Ha;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tg());const o=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=o;const u=o.uniforms;u.envMap.value=e;const h=this._cubeSize;Aa(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(c,ko)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,o=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[i];u.material=c;const h=c.uniforms,f=i/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),g=Math.sqrt(f*f-p*p),m=0+f*1.25,y=g*m,{_lodMax:x}=this,w=this._sizeLods[i],_=3*w*(i>x-os?i-x+os:0),S=4*(this._cubeSize-w);h.envMap.value=e.texture,h.roughness.value=y,h.mipInt.value=x-t,Aa(o,_,S,3*w,2*w),s.setRenderTarget(o),s.render(u,ko),h.envMap.value=o.texture,h.roughness.value=0,h.mipInt.value=x-i,Aa(e,_,S,3*w,2*w),s.setRenderTarget(e),s.render(u,ko)}_blur(e,t,i,s,o){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,i,s,"latitudinal",o),this._halfBlur(c,e,i,i,s,"longitudinal",o)}_halfBlur(e,t,i,s,o,c,u){const h=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&It("blur direction must be either latitudinal or longitudinal!");const p=3,g=this._lodMeshes[s];g.material=f;const m=f.uniforms,y=this._sizeLods[i]-1,x=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*Us-1),w=o/x,_=isFinite(o)?1+Math.floor(p*w):Us;_>Us&&dt(`sigmaRadians, ${o}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Us}`);const S=[];let b=0;for(let N=0;N<Us;++N){const T=N/w,F=Math.exp(-T*T/2);S.push(F),N===0?b+=F:N<_&&(b+=2*F)}for(let N=0;N<S.length;N++)S[N]=S[N]/b;m.envMap.value=e.texture,m.samples.value=_,m.weights.value=S,m.latitudinal.value=c==="latitudinal",u&&(m.poleAxis.value=u);const{_lodMax:E}=this;m.dTheta.value=x,m.mipInt.value=E-i;const C=this._sizeLods[s],I=3*C*(s>E-os?s-E+os:0),A=4*(this._cubeSize-C);Aa(t,I,A,3*C,2*C),h.setRenderTarget(t),h.render(g,ko)}}function e2(a){const e=[],t=[],i=[];let s=a;const o=a-os+1+Mg.length;for(let c=0;c<o;c++){const u=Math.pow(2,s);e.push(u);let h=1/u;c>a-os?h=Mg[c-a+os-1]:c===0&&(h=0),t.push(h);const f=1/(u-2),p=-f,g=1+f,m=[p,p,g,p,g,g,p,p,g,g,p,g],y=6,x=6,w=3,_=2,S=1,b=new Float32Array(w*x*y),E=new Float32Array(_*x*y),C=new Float32Array(S*x*y);for(let A=0;A<y;A++){const N=A%3*2/3-1,T=A>2?0:-1,F=[N,T,0,N+2/3,T,0,N+2/3,T+1,0,N,T,0,N+2/3,T+1,0,N,T+1,0];b.set(F,w*x*A),E.set(m,_*x*A);const z=[A,A,A,A,A,A];C.set(z,S*x*A)}const I=new on;I.setAttribute("position",new vn(b,w)),I.setAttribute("uv",new vn(E,_)),I.setAttribute("faceIndex",new vn(C,S)),i.push(new ln(I,null)),s>os&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Eg(a,e,t){const i=new si(a,e,t);return i.texture.mapping=Yc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Aa(a,e,t,i,s){a.viewport.set(e,t,i,s),a.scissor.set(e,t,i,s)}function t2(a,e,t){return new an({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Qb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function n2(a,e,t){const i=new Float32Array(Us),s=new Q(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Tg(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Cg(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Kc(){return`

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
	`}class Zx extends si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Gx(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qa(5,5,5),o=new an({name:"CubemapFromEquirect",uniforms:Va(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ri,blending:tr});o.uniforms.tEquirect.value=t;const c=new ln(s,o),u=t.minFilter;return t.minFilter===Ds&&(t.minFilter=dn),new aM(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,i,s);e.setRenderTarget(o)}}function i2(a){let e=new WeakMap,t=new WeakMap,i=null;function s(m,y=!1){return m==null?null:y?c(m):o(m)}function o(m){if(m&&m.isTexture){const y=m.mapping;if(y===Uh||y===Dh)if(e.has(m)){const x=e.get(m).texture;return u(x,m.mapping)}else{const x=m.image;if(x&&x.height>0){const w=new Zx(x.height);return w.fromEquirectangularTexture(a,m),e.set(m,w),m.addEventListener("dispose",f),u(w.texture,m.mapping)}else return null}}return m}function c(m){if(m&&m.isTexture){const y=m.mapping,x=y===Uh||y===Dh,w=y===Os||y===Ha;if(x||w){let _=t.get(m);const S=_!==void 0?_.texture.pmremVersion:0;if(m.isRenderTargetTexture&&m.pmremVersion!==S)return i===null&&(i=new bg(a)),_=x?i.fromEquirectangular(m,_):i.fromCubemap(m,_),_.texture.pmremVersion=m.pmremVersion,t.set(m,_),_.texture;if(_!==void 0)return _.texture;{const b=m.image;return x&&b&&b.height>0||w&&b&&h(b)?(i===null&&(i=new bg(a)),_=x?i.fromEquirectangular(m):i.fromCubemap(m),_.texture.pmremVersion=m.pmremVersion,t.set(m,_),m.addEventListener("dispose",p),_.texture):null}}}return m}function u(m,y){return y===Uh?m.mapping=Os:y===Dh&&(m.mapping=Ha),m}function h(m){let y=0;const x=6;for(let w=0;w<x;w++)m[w]!==void 0&&y++;return y===x}function f(m){const y=m.target;y.removeEventListener("dispose",f);const x=e.get(y);x!==void 0&&(e.delete(y),x.dispose())}function p(m){const y=m.target;y.removeEventListener("dispose",p);const x=t.get(y);x!==void 0&&(t.delete(y),x.dispose())}function g(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:g}}function r2(a){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=a.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&hd("WebGLRenderer: "+i+" extension not supported."),s}}}function s2(a,e,t,i){const s={},o=new WeakMap;function c(g){const m=g.target;m.index!==null&&e.remove(m.index);for(const x in m.attributes)e.remove(m.attributes[x]);m.removeEventListener("dispose",c),delete s[m.id];const y=o.get(m);y&&(e.remove(y),o.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function u(g,m){return s[m.id]===!0||(m.addEventListener("dispose",c),s[m.id]=!0,t.memory.geometries++),m}function h(g){const m=g.attributes;for(const y in m)e.update(m[y],a.ARRAY_BUFFER)}function f(g){const m=[],y=g.index,x=g.attributes.position;let w=0;if(x===void 0)return;if(y!==null){const b=y.array;w=y.version;for(let E=0,C=b.length;E<C;E+=3){const I=b[E+0],A=b[E+1],N=b[E+2];m.push(I,A,A,N,N,I)}}else{const b=x.array;w=x.version;for(let E=0,C=b.length/3-1;E<C;E+=3){const I=E+0,A=E+1,N=E+2;m.push(I,A,A,N,N,I)}}const _=new(x.count>=65535?Bx:zx)(m,1);_.version=w;const S=o.get(g);S&&e.remove(S),o.set(g,_)}function p(g){const m=o.get(g);if(m){const y=g.index;y!==null&&m.version<y.version&&f(g)}else f(g);return o.get(g)}return{get:u,update:h,getWireframeAttribute:p}}function a2(a,e,t){let i;function s(g){i=g}let o,c;function u(g){o=g.type,c=g.bytesPerElement}function h(g,m){a.drawElements(i,m,o,g*c),t.update(m,i,1)}function f(g,m,y){y!==0&&(a.drawElementsInstanced(i,m,o,g*c,y),t.update(m,i,y))}function p(g,m,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,o,g,0,y);let w=0;for(let _=0;_<y;_++)w+=m[_];t.update(w,i,1)}this.setMode=s,this.setIndex=u,this.render=h,this.renderInstances=f,this.renderMultiDraw=p}function o2(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,c,u){switch(t.calls++,c){case a.TRIANGLES:t.triangles+=u*(o/3);break;case a.LINES:t.lines+=u*(o/2);break;case a.LINE_STRIP:t.lines+=u*(o-1);break;case a.LINE_LOOP:t.lines+=u*o;break;case a.POINTS:t.points+=u*o;break;default:It("WebGLInfo: Unknown draw mode:",c);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function l2(a,e,t){const i=new WeakMap,s=new nn;function o(c,u,h){const f=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=p!==void 0?p.length:0;let m=i.get(u);if(m===void 0||m.count!==g){let F=function(){N.dispose(),i.delete(u),u.removeEventListener("dispose",F)};m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,_=u.morphAttributes.position||[],S=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let E=0;y===!0&&(E=1),x===!0&&(E=2),w===!0&&(E=3);let C=u.attributes.position.count*E,I=1;C>e.maxTextureSize&&(I=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const A=new Float32Array(C*I*4*g),N=new Dx(A,C,I,g);N.type=Vi,N.needsUpdate=!0;const T=E*4;for(let z=0;z<g;z++){const D=_[z],G=S[z],ne=b[z],se=C*I*4*z;for(let X=0;X<D.count;X++){const V=X*T;y===!0&&(s.fromBufferAttribute(D,X),A[se+V+0]=s.x,A[se+V+1]=s.y,A[se+V+2]=s.z,A[se+V+3]=0),x===!0&&(s.fromBufferAttribute(G,X),A[se+V+4]=s.x,A[se+V+5]=s.y,A[se+V+6]=s.z,A[se+V+7]=0),w===!0&&(s.fromBufferAttribute(ne,X),A[se+V+8]=s.x,A[se+V+9]=s.y,A[se+V+10]=s.z,A[se+V+11]=ne.itemSize===4?s.w:1)}}m={count:g,texture:N,size:new ut(C,I)},i.set(u,m),u.addEventListener("dispose",F)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(a,"morphTexture",c.morphTexture,t);else{let y=0;for(let w=0;w<f.length;w++)y+=f[w];const x=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(a,"morphTargetBaseInfluence",x),h.getUniforms().setValue(a,"morphTargetInfluences",f)}h.getUniforms().setValue(a,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(a,"morphTargetsTextureSize",m.size)}return{update:o}}function c2(a,e,t,i,s){let o=new WeakMap;function c(f){const p=s.render.frame,g=f.geometry,m=e.get(f,g);if(o.get(m)!==p&&(e.update(m),o.set(m,p)),f.isInstancedMesh&&(f.hasEventListener("dispose",h)===!1&&f.addEventListener("dispose",h),o.get(f)!==p&&(t.update(f.instanceMatrix,a.ARRAY_BUFFER),f.instanceColor!==null&&t.update(f.instanceColor,a.ARRAY_BUFFER),o.set(f,p))),f.isSkinnedMesh){const y=f.skeleton;o.get(y)!==p&&(y.update(),o.set(y,p))}return m}function u(){o=new WeakMap}function h(f){const p=f.target;p.removeEventListener("dispose",h),i.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:c,dispose:u}}const u2={[Sx]:"LINEAR_TONE_MAPPING",[Mx]:"REINHARD_TONE_MAPPING",[wx]:"CINEON_TONE_MAPPING",[bx]:"ACES_FILMIC_TONE_MAPPING",[Tx]:"AGX_TONE_MAPPING",[Cx]:"NEUTRAL_TONE_MAPPING",[Ex]:"CUSTOM_TONE_MAPPING"};function h2(a,e,t,i,s){const o=new si(e,t,{type:a,depthBuffer:i,stencilBuffer:s,depthTexture:i?new Ga(e,t):void 0}),c=new si(e,t,{type:xi,depthBuffer:!1,stencilBuffer:!1}),u=new on;u.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Kt([0,2,0,0,2,0],2));const h=new KS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ln(u,h),p=new Ya(-1,1,1,-1,0,1);let g=null,m=null,y=!1,x,w=null,_=[],S=!1;this.setSize=function(b,E){o.setSize(b,E),c.setSize(b,E);for(let C=0;C<_.length;C++){const I=_[C];I.setSize&&I.setSize(b,E)}},this.setEffects=function(b){_=b,S=_.length>0&&_[0].isRenderPass===!0;const E=o.width,C=o.height;for(let I=0;I<_.length;I++){const A=_[I];A.setSize&&A.setSize(E,C)}},this.begin=function(b,E){if(y||b.toneMapping===nr&&_.length===0)return!1;if(w=E,E!==null){const C=E.width,I=E.height;(o.width!==C||o.height!==I)&&this.setSize(C,I)}return S===!1&&b.setRenderTarget(o),x=b.toneMapping,b.toneMapping=nr,!0},this.hasRenderPass=function(){return S},this.end=function(b,E){b.toneMapping=x,y=!0;let C=o,I=c;for(let A=0;A<_.length;A++){const N=_[A];if(N.enabled!==!1&&(N.render(b,I,C,E),N.needsSwap!==!1)){const T=C;C=I,I=T}}if(g!==b.outputColorSpace||m!==b.toneMapping){g=b.outputColorSpace,m=b.toneMapping,h.defines={},Rt.getTransfer(g)===Ht&&(h.defines.SRGB_TRANSFER="");const A=u2[m];A&&(h.defines[A]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=C.texture,b.setRenderTarget(w),b.render(f,p),w=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),c.dispose(),u.dispose(),h.dispose()}}const Qx=new Hn,pd=new Ga(1,1),Jx=new Dx,ev=new CS,tv=new Gx,Ag=[],Rg=[],Pg=new Float32Array(16),Lg=new Float32Array(9),Ig=new Float32Array(4);function $a(a,e,t){const i=a[0];if(i<=0||i>0)return a;const s=e*t;let o=Ag[s];if(o===void 0&&(o=new Float32Array(s),Ag[s]=o),e!==0){i.toArray(o,0);for(let c=1,u=0;c!==e;++c)u+=t,a[c].toArray(o,u)}return o}function yn(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function Sn(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function Zc(a,e){let t=Rg[e];t===void 0&&(t=new Int32Array(e),Rg[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function f2(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function d2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;a.uniform2fv(this.addr,e),Sn(t,e)}}function p2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yn(t,e))return;a.uniform3fv(this.addr,e),Sn(t,e)}}function m2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;a.uniform4fv(this.addr,e),Sn(t,e)}}function g2(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(yn(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Sn(t,e)}else{if(yn(t,i))return;Ig.set(i),a.uniformMatrix2fv(this.addr,!1,Ig),Sn(t,i)}}function x2(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(yn(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Sn(t,e)}else{if(yn(t,i))return;Lg.set(i),a.uniformMatrix3fv(this.addr,!1,Lg),Sn(t,i)}}function v2(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(yn(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Sn(t,e)}else{if(yn(t,i))return;Pg.set(i),a.uniformMatrix4fv(this.addr,!1,Pg),Sn(t,i)}}function _2(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function y2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;a.uniform2iv(this.addr,e),Sn(t,e)}}function S2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;a.uniform3iv(this.addr,e),Sn(t,e)}}function M2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;a.uniform4iv(this.addr,e),Sn(t,e)}}function w2(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function b2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yn(t,e))return;a.uniform2uiv(this.addr,e),Sn(t,e)}}function E2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yn(t,e))return;a.uniform3uiv(this.addr,e),Sn(t,e)}}function T2(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yn(t,e))return;a.uniform4uiv(this.addr,e),Sn(t,e)}}function C2(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s);let o;this.type===a.SAMPLER_2D_SHADOW?(pd.compareFunction=t.isReversedDepthBuffer()?kd:Dd,o=pd):o=Qx,t.setTexture2D(e||o,s)}function A2(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||ev,s)}function R2(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||tv,s)}function P2(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Jx,s)}function L2(a){switch(a){case 5126:return f2;case 35664:return d2;case 35665:return p2;case 35666:return m2;case 35674:return g2;case 35675:return x2;case 35676:return v2;case 5124:case 35670:return _2;case 35667:case 35671:return y2;case 35668:case 35672:return S2;case 35669:case 35673:return M2;case 5125:return w2;case 36294:return b2;case 36295:return E2;case 36296:return T2;case 35678:case 36198:case 36298:case 36306:case 35682:return C2;case 35679:case 36299:case 36307:return A2;case 35680:case 36300:case 36308:case 36293:return R2;case 36289:case 36303:case 36311:case 36292:return P2}}function I2(a,e){a.uniform1fv(this.addr,e)}function N2(a,e){const t=$a(e,this.size,2);a.uniform2fv(this.addr,t)}function F2(a,e){const t=$a(e,this.size,3);a.uniform3fv(this.addr,t)}function U2(a,e){const t=$a(e,this.size,4);a.uniform4fv(this.addr,t)}function D2(a,e){const t=$a(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function k2(a,e){const t=$a(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function O2(a,e){const t=$a(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function z2(a,e){a.uniform1iv(this.addr,e)}function B2(a,e){a.uniform2iv(this.addr,e)}function H2(a,e){a.uniform3iv(this.addr,e)}function G2(a,e){a.uniform4iv(this.addr,e)}function V2(a,e){a.uniform1uiv(this.addr,e)}function W2(a,e){a.uniform2uiv(this.addr,e)}function X2(a,e){a.uniform3uiv(this.addr,e)}function j2(a,e){a.uniform4uiv(this.addr,e)}function q2(a,e,t){const i=this.cache,s=e.length,o=Zc(t,s);yn(i,o)||(a.uniform1iv(this.addr,o),Sn(i,o));let c;this.type===a.SAMPLER_2D_SHADOW?c=pd:c=Qx;for(let u=0;u!==s;++u)t.setTexture2D(e[u]||c,o[u])}function Y2(a,e,t){const i=this.cache,s=e.length,o=Zc(t,s);yn(i,o)||(a.uniform1iv(this.addr,o),Sn(i,o));for(let c=0;c!==s;++c)t.setTexture3D(e[c]||ev,o[c])}function $2(a,e,t){const i=this.cache,s=e.length,o=Zc(t,s);yn(i,o)||(a.uniform1iv(this.addr,o),Sn(i,o));for(let c=0;c!==s;++c)t.setTextureCube(e[c]||tv,o[c])}function K2(a,e,t){const i=this.cache,s=e.length,o=Zc(t,s);yn(i,o)||(a.uniform1iv(this.addr,o),Sn(i,o));for(let c=0;c!==s;++c)t.setTexture2DArray(e[c]||Jx,o[c])}function Z2(a){switch(a){case 5126:return I2;case 35664:return N2;case 35665:return F2;case 35666:return U2;case 35674:return D2;case 35675:return k2;case 35676:return O2;case 5124:case 35670:return z2;case 35667:case 35671:return B2;case 35668:case 35672:return H2;case 35669:case 35673:return G2;case 5125:return V2;case 36294:return W2;case 36295:return X2;case 36296:return j2;case 35678:case 36198:case 36298:case 36306:case 35682:return q2;case 35679:case 36299:case 36307:return Y2;case 35680:case 36300:case 36308:case 36293:return $2;case 36289:case 36303:case 36311:case 36292:return K2}}class Q2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=L2(t.type)}}class J2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Z2(t.type)}}class eE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let o=0,c=s.length;o!==c;++o){const u=s[o];u.setValue(e,t[u.id],i)}}}const pf=/(\w+)(\])?(\[|\.)?/g;function Ng(a,e){a.seq.push(e),a.map[e.id]=e}function tE(a,e,t){const i=a.name,s=i.length;for(pf.lastIndex=0;;){const o=pf.exec(i),c=pf.lastIndex;let u=o[1];const h=o[2]==="]",f=o[3];if(h&&(u=u|0),f===void 0||f==="["&&c+2===s){Ng(t,f===void 0?new Q2(u,a,e):new J2(u,a,e));break}else{let g=t.map[u];g===void 0&&(g=new eE(u),Ng(t,g)),t=g}}}class Nc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const u=e.getActiveUniform(t,c),h=e.getUniformLocation(t,u.name);tE(u,h,this)}const s=[],o=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(c):o.push(c);s.length>0&&(this.seq=s.concat(o))}setValue(e,t,i,s){const o=this.map[t];o!==void 0&&o.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let o=0,c=t.length;o!==c;++o){const u=t[o],h=i[u.id];h.needsUpdate!==!1&&u.setValue(e,h.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,o=e.length;s!==o;++s){const c=e[s];c.id in t&&i.push(c)}return i}}function Fg(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}const nE=37297;let iE=0;function rE(a,e){const t=a.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=s;c<o;c++){const u=c+1;i.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return i.join(`
`)}const Ug=new St;function sE(a){Rt._getMatrix(Ug,Rt.workingColorSpace,a);const e=`mat3( ${Ug.elements.map(t=>t.toFixed(4))} )`;switch(Rt.getTransfer(a)){case zc:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function Dg(a,e,t){const i=a.getShaderParameter(e,a.COMPILE_STATUS),o=(a.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+o+`

`+rE(a.getShaderSource(e),u)}else return o}function aE(a,e){const t=sE(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const oE={[Sx]:"Linear",[Mx]:"Reinhard",[wx]:"Cineon",[bx]:"ACESFilmic",[Tx]:"AgX",[Cx]:"Neutral",[Ex]:"Custom"};function lE(a,e){const t=oE[e];return t===void 0?(dt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Tc=new Q;function cE(){Rt.getLuminanceCoefficients(Tc);const a=Tc.x.toFixed(4),e=Tc.y.toFixed(4),t=Tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function uE(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ho).join(`
`)}function hE(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function fE(a,e){const t={},i=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=a.getActiveAttrib(e,s),c=o.name;let u=1;o.type===a.FLOAT_MAT2&&(u=2),o.type===a.FLOAT_MAT3&&(u=3),o.type===a.FLOAT_MAT4&&(u=4),t[c]={type:o.type,location:a.getAttribLocation(e,c),locationSize:u}}return t}function Ho(a){return a!==""}function kg(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Og(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dE=/^[ \t]*#include +<([\w\d./]+)>/gm;function md(a){return a.replace(dE,mE)}const pE=new Map;function mE(a,e){let t=bt[e];if(t===void 0){const i=pE.get(e);if(i!==void 0)t=bt[i],dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return md(t)}const gE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zg(a){return a.replace(gE,xE)}function xE(a,e,t,i){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Bg(a){let e=`precision ${a.precision} float;
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
#define LOW_PRECISION`),e}const vE={[Ac]:"SHADOWMAP_TYPE_PCF",[Bo]:"SHADOWMAP_TYPE_VSM"};function _E(a){return vE[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const yE={[Os]:"ENVMAP_TYPE_CUBE",[Ha]:"ENVMAP_TYPE_CUBE",[Yc]:"ENVMAP_TYPE_CUBE_UV"};function SE(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":yE[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const ME={[Ha]:"ENVMAP_MODE_REFRACTION"};function wE(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":ME[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const bE={[Ad]:"ENVMAP_BLENDING_MULTIPLY",[Xy]:"ENVMAP_BLENDING_MIX",[jy]:"ENVMAP_BLENDING_ADD"};function EE(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":bE[a.combine]||"ENVMAP_BLENDING_NONE"}function TE(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function CE(a,e,t,i){const s=a.getContext(),o=t.defines;let c=t.vertexShader,u=t.fragmentShader;const h=_E(t),f=SE(t),p=wE(t),g=EE(t),m=TE(t),y=uE(t),x=hE(o),w=s.createProgram();let _,S,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ho).join(`
`),_.length>0&&(_+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ho).join(`
`),S.length>0&&(S+=`
`)):(_=[Bg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ho).join(`
`),S=[Bg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==nr?"#define TONE_MAPPING":"",t.toneMapping!==nr?bt.tonemapping_pars_fragment:"",t.toneMapping!==nr?lE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",bt.colorspace_pars_fragment,aE("linearToOutputTexel",t.outputColorSpace),cE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ho).join(`
`)),c=md(c),c=kg(c,t),c=Og(c,t),u=md(u),u=kg(u,t),u=Og(u,t),c=zg(c),u=zg(u),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,_=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,S=["#define varying in",t.glslVersion===B0?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===B0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const E=b+_+c,C=b+S+u,I=Fg(s,s.VERTEX_SHADER,E),A=Fg(s,s.FRAGMENT_SHADER,C);s.attachShader(w,I),s.attachShader(w,A),t.index0AttributeName!==void 0?s.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(w,0,"position"),s.linkProgram(w);function N(D){if(a.debug.checkShaderErrors){const G=s.getProgramInfoLog(w)||"",ne=s.getShaderInfoLog(I)||"",se=s.getShaderInfoLog(A)||"",X=G.trim(),V=ne.trim(),Y=se.trim();let q=!0,ie=!0;if(s.getProgramParameter(w,s.LINK_STATUS)===!1)if(q=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(s,w,I,A);else{const te=Dg(s,I,"vertex"),O=Dg(s,A,"fragment");It("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(w,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+te+`
`+O)}else X!==""?dt("WebGLProgram: Program Info Log:",X):(V===""||Y==="")&&(ie=!1);ie&&(D.diagnostics={runnable:q,programLog:X,vertexShader:{log:V,prefix:_},fragmentShader:{log:Y,prefix:S}})}s.deleteShader(I),s.deleteShader(A),T=new Nc(s,w),F=fE(s,w)}let T;this.getUniforms=function(){return T===void 0&&N(this),T};let F;this.getAttributes=function(){return F===void 0&&N(this),F};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(w,nE)),z},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=iE++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=I,this.fragmentShader=A,this}let AE=0;class RE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(i),c=this._getShaderCacheForMaterial(e);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(o)===!1&&(c.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new PE(e),t.set(e,i)),i}}class PE{constructor(e){this.id=AE++,this.code=e,this.usedTimes=0}}function LE(a){return a===zs||a===Uc||a===Dc}function IE(a,e,t,i,s,o){const c=new kx,u=new RE,h=new Set,f=[],p=new Map,g=i.logarithmicDepthBuffer;let m=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(T){return h.add(T),T===0?"uv":`uv${T}`}function w(T,F,z,D,G,ne){const se=D.fog,X=G.geometry,V=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?D.environment:null,Y=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,q=e.get(T.envMap||V,Y),ie=q&&q.mapping===Yc?q.image.height:null,te=y[T.type];T.precision!==null&&(m=i.getMaxPrecision(T.precision),m!==T.precision&&dt("WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const O=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ee=O!==void 0?O.length:0;let ge=0;X.morphAttributes.position!==void 0&&(ge=1),X.morphAttributes.normal!==void 0&&(ge=2),X.morphAttributes.color!==void 0&&(ge=3);let Te,Se,W,me;if(te){const ft=Qi[te];Te=ft.vertexShader,Se=ft.fragmentShader}else Te=T.vertexShader,Se=T.fragmentShader,u.update(T),W=u.getVertexShaderID(T),me=u.getFragmentShaderID(T);const oe=a.getRenderTarget(),Re=a.state.buffers.depth.getReversed(),Oe=G.isInstancedMesh===!0,Ce=G.isBatchedMesh===!0,ht=!!T.map,Qe=!!T.matcap,pt=!!q,wt=!!T.aoMap,mt=!!T.lightMap,Vt=!!T.bumpMap,Ut=!!T.normalMap,cn=!!T.displacementMap,Z=!!T.emissiveMap,Dt=!!T.metalnessMap,vt=!!T.roughnessMap,Nt=T.anisotropy>0,He=T.clearcoat>0,Gt=T.dispersion>0,k=T.iridescence>0,R=T.sheen>0,re=T.transmission>0,_e=Nt&&!!T.anisotropyMap,Me=He&&!!T.clearcoatMap,Ie=He&&!!T.clearcoatNormalMap,Be=He&&!!T.clearcoatRoughnessMap,xe=k&&!!T.iridescenceMap,ye=k&&!!T.iridescenceThicknessMap,We=R&&!!T.sheenColorMap,je=R&&!!T.sheenRoughnessMap,De=!!T.specularMap,Fe=!!T.specularColorMap,Ze=!!T.specularIntensityMap,gt=re&&!!T.transmissionMap,Mt=re&&!!T.thicknessMap,$=!!T.gradientMap,Ne=!!T.alphaMap,ve=T.alphaTest>0,Ve=!!T.alphaHash,ke=!!T.extensions;let we=nr;T.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(we=a.toneMapping);const et={shaderID:te,shaderType:T.type,shaderName:T.name,vertexShader:Te,fragmentShader:Se,defines:T.defines,customVertexShaderID:W,customFragmentShaderID:me,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Ce,batchingColor:Ce&&G._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&G.instanceColor!==null,instancingMorph:Oe&&G.morphTexture!==null,outputColorSpace:oe===null?a.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Rt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:ht,matcap:Qe,envMap:pt,envMapMode:pt&&q.mapping,envMapCubeUVHeight:ie,aoMap:wt,lightMap:mt,bumpMap:Vt,normalMap:Ut,displacementMap:cn,emissiveMap:Z,normalMapObjectSpace:Ut&&T.normalMapType===$y,normalMapTangentSpace:Ut&&T.normalMapType===kc,packedNormalMap:Ut&&T.normalMapType===kc&&LE(T.normalMap.format),metalnessMap:Dt,roughnessMap:vt,anisotropy:Nt,anisotropyMap:_e,clearcoat:He,clearcoatMap:Me,clearcoatNormalMap:Ie,clearcoatRoughnessMap:Be,dispersion:Gt,iridescence:k,iridescenceMap:xe,iridescenceThicknessMap:ye,sheen:R,sheenColorMap:We,sheenRoughnessMap:je,specularMap:De,specularColorMap:Fe,specularIntensityMap:Ze,transmission:re,transmissionMap:gt,thicknessMap:Mt,gradientMap:$,opaque:T.transparent===!1&&T.blending===Da&&T.alphaToCoverage===!1,alphaMap:Ne,alphaTest:ve,alphaHash:Ve,combine:T.combine,mapUv:ht&&x(T.map.channel),aoMapUv:wt&&x(T.aoMap.channel),lightMapUv:mt&&x(T.lightMap.channel),bumpMapUv:Vt&&x(T.bumpMap.channel),normalMapUv:Ut&&x(T.normalMap.channel),displacementMapUv:cn&&x(T.displacementMap.channel),emissiveMapUv:Z&&x(T.emissiveMap.channel),metalnessMapUv:Dt&&x(T.metalnessMap.channel),roughnessMapUv:vt&&x(T.roughnessMap.channel),anisotropyMapUv:_e&&x(T.anisotropyMap.channel),clearcoatMapUv:Me&&x(T.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&x(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&x(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&x(T.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&x(T.iridescenceThicknessMap.channel),sheenColorMapUv:We&&x(T.sheenColorMap.channel),sheenRoughnessMapUv:je&&x(T.sheenRoughnessMap.channel),specularMapUv:De&&x(T.specularMap.channel),specularColorMapUv:Fe&&x(T.specularColorMap.channel),specularIntensityMapUv:Ze&&x(T.specularIntensityMap.channel),transmissionMapUv:gt&&x(T.transmissionMap.channel),thicknessMapUv:Mt&&x(T.thicknessMap.channel),alphaMapUv:Ne&&x(T.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ut||Nt),vertexNormals:!!X.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!X.attributes.uv&&(ht||Ne),fog:!!se,useFog:T.fog===!0,fogExp2:!!se&&se.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||X.attributes.normal===void 0&&Ut===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Re,skinning:G.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ge,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numLightProbeGrids:ne.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&z.length>0,shadowMapType:a.shadowMap.type,toneMapping:we,decodeVideoTexture:ht&&T.map.isVideoTexture===!0&&Rt.getTransfer(T.map.colorSpace)===Ht,decodeVideoTextureEmissive:Z&&T.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(T.emissiveMap.colorSpace)===Ht,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Hi,flipSided:T.side===ri,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ke&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&T.extensions.multiDraw===!0||Ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return et.vertexUv1s=h.has(1),et.vertexUv2s=h.has(2),et.vertexUv3s=h.has(3),h.clear(),et}function _(T){const F=[];if(T.shaderID?F.push(T.shaderID):(F.push(T.customVertexShaderID),F.push(T.customFragmentShaderID)),T.defines!==void 0)for(const z in T.defines)F.push(z),F.push(T.defines[z]);return T.isRawShaderMaterial===!1&&(S(F,T),b(F,T),F.push(a.outputColorSpace)),F.push(T.customProgramCacheKey),F.join()}function S(T,F){T.push(F.precision),T.push(F.outputColorSpace),T.push(F.envMapMode),T.push(F.envMapCubeUVHeight),T.push(F.mapUv),T.push(F.alphaMapUv),T.push(F.lightMapUv),T.push(F.aoMapUv),T.push(F.bumpMapUv),T.push(F.normalMapUv),T.push(F.displacementMapUv),T.push(F.emissiveMapUv),T.push(F.metalnessMapUv),T.push(F.roughnessMapUv),T.push(F.anisotropyMapUv),T.push(F.clearcoatMapUv),T.push(F.clearcoatNormalMapUv),T.push(F.clearcoatRoughnessMapUv),T.push(F.iridescenceMapUv),T.push(F.iridescenceThicknessMapUv),T.push(F.sheenColorMapUv),T.push(F.sheenRoughnessMapUv),T.push(F.specularMapUv),T.push(F.specularColorMapUv),T.push(F.specularIntensityMapUv),T.push(F.transmissionMapUv),T.push(F.thicknessMapUv),T.push(F.combine),T.push(F.fogExp2),T.push(F.sizeAttenuation),T.push(F.morphTargetsCount),T.push(F.morphAttributeCount),T.push(F.numDirLights),T.push(F.numPointLights),T.push(F.numSpotLights),T.push(F.numSpotLightMaps),T.push(F.numHemiLights),T.push(F.numRectAreaLights),T.push(F.numDirLightShadows),T.push(F.numPointLightShadows),T.push(F.numSpotLightShadows),T.push(F.numSpotLightShadowsWithMaps),T.push(F.numLightProbes),T.push(F.shadowMapType),T.push(F.toneMapping),T.push(F.numClippingPlanes),T.push(F.numClipIntersection),T.push(F.depthPacking)}function b(T,F){c.disableAll(),F.instancing&&c.enable(0),F.instancingColor&&c.enable(1),F.instancingMorph&&c.enable(2),F.matcap&&c.enable(3),F.envMap&&c.enable(4),F.normalMapObjectSpace&&c.enable(5),F.normalMapTangentSpace&&c.enable(6),F.clearcoat&&c.enable(7),F.iridescence&&c.enable(8),F.alphaTest&&c.enable(9),F.vertexColors&&c.enable(10),F.vertexAlphas&&c.enable(11),F.vertexUv1s&&c.enable(12),F.vertexUv2s&&c.enable(13),F.vertexUv3s&&c.enable(14),F.vertexTangents&&c.enable(15),F.anisotropy&&c.enable(16),F.alphaHash&&c.enable(17),F.batching&&c.enable(18),F.dispersion&&c.enable(19),F.batchingColor&&c.enable(20),F.gradientMap&&c.enable(21),F.packedNormalMap&&c.enable(22),F.vertexNormals&&c.enable(23),T.push(c.mask),c.disableAll(),F.fog&&c.enable(0),F.useFog&&c.enable(1),F.flatShading&&c.enable(2),F.logarithmicDepthBuffer&&c.enable(3),F.reversedDepthBuffer&&c.enable(4),F.skinning&&c.enable(5),F.morphTargets&&c.enable(6),F.morphNormals&&c.enable(7),F.morphColors&&c.enable(8),F.premultipliedAlpha&&c.enable(9),F.shadowMapEnabled&&c.enable(10),F.doubleSided&&c.enable(11),F.flipSided&&c.enable(12),F.useDepthPacking&&c.enable(13),F.dithering&&c.enable(14),F.transmission&&c.enable(15),F.sheen&&c.enable(16),F.opaque&&c.enable(17),F.pointsUvs&&c.enable(18),F.decodeVideoTexture&&c.enable(19),F.decodeVideoTextureEmissive&&c.enable(20),F.alphaToCoverage&&c.enable(21),F.numLightProbeGrids>0&&c.enable(22),T.push(c.mask)}function E(T){const F=y[T.type];let z;if(F){const D=Qi[F];z=Vc.clone(D.uniforms)}else z=T.uniforms;return z}function C(T,F){let z=p.get(F);return z!==void 0?++z.usedTimes:(z=new CE(a,F,T,s),f.push(z),p.set(F,z)),z}function I(T){if(--T.usedTimes===0){const F=f.indexOf(T);f[F]=f[f.length-1],f.pop(),p.delete(T.cacheKey),T.destroy()}}function A(T){u.remove(T)}function N(){u.dispose()}return{getParameters:w,getProgramCacheKey:_,getUniforms:E,acquireProgram:C,releaseProgram:I,releaseShaderCache:A,programs:f,dispose:N}}function NE(){let a=new WeakMap;function e(c){return a.has(c)}function t(c){let u=a.get(c);return u===void 0&&(u={},a.set(c,u)),u}function i(c){a.delete(c)}function s(c,u,h){a.get(c)[u]=h}function o(){a=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:o}}function FE(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function Hg(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Gg(){const a=[];let e=0;const t=[],i=[],s=[];function o(){e=0,t.length=0,i.length=0,s.length=0}function c(m){let y=0;return m.isInstancedMesh&&(y+=2),m.isSkinnedMesh&&(y+=1),y}function u(m,y,x,w,_,S){let b=a[e];return b===void 0?(b={id:m.id,object:m,geometry:y,material:x,materialVariant:c(m),groupOrder:w,renderOrder:m.renderOrder,z:_,group:S},a[e]=b):(b.id=m.id,b.object=m,b.geometry=y,b.material=x,b.materialVariant=c(m),b.groupOrder=w,b.renderOrder=m.renderOrder,b.z=_,b.group=S),e++,b}function h(m,y,x,w,_,S){const b=u(m,y,x,w,_,S);x.transmission>0?i.push(b):x.transparent===!0?s.push(b):t.push(b)}function f(m,y,x,w,_,S){const b=u(m,y,x,w,_,S);x.transmission>0?i.unshift(b):x.transparent===!0?s.unshift(b):t.unshift(b)}function p(m,y){t.length>1&&t.sort(m||FE),i.length>1&&i.sort(y||Hg),s.length>1&&s.sort(y||Hg)}function g(){for(let m=e,y=a.length;m<y;m++){const x=a[m];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:s,init:o,push:h,unshift:f,finish:g,sort:p}}function UE(){let a=new WeakMap;function e(i,s){const o=a.get(i);let c;return o===void 0?(c=new Gg,a.set(i,[c])):s>=o.length?(c=new Gg,o.push(c)):c=o[s],c}function t(){a=new WeakMap}return{get:e,dispose:t}}function DE(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new $e};break;case"SpotLight":t={position:new Q,direction:new Q,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return a[e.id]=t,t}}}function kE(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let OE=0;function zE(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function BE(a){const e=new DE,t=kE(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new Q);const s=new Q,o=new jt,c=new jt;function u(f){let p=0,g=0,m=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let y=0,x=0,w=0,_=0,S=0,b=0,E=0,C=0,I=0,A=0,N=0;f.sort(zE);for(let F=0,z=f.length;F<z;F++){const D=f[F],G=D.color,ne=D.intensity,se=D.distance;let X=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===zs?X=D.shadow.map.texture:X=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)p+=G.r*ne,g+=G.g*ne,m+=G.b*ne;else if(D.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(D.sh.coefficients[V],ne);N++}else if(D.isDirectionalLight){const V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const Y=D.shadow,q=t.get(D);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,i.directionalShadow[y]=q,i.directionalShadowMap[y]=X,i.directionalShadowMatrix[y]=D.shadow.matrix,b++}i.directional[y]=V,y++}else if(D.isSpotLight){const V=e.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(G).multiplyScalar(ne),V.distance=se,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,i.spot[w]=V;const Y=D.shadow;if(D.map&&(i.spotLightMap[I]=D.map,I++,Y.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[w]=Y.matrix,D.castShadow){const q=t.get(D);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,i.spotShadow[w]=q,i.spotShadowMap[w]=X,C++}w++}else if(D.isRectAreaLight){const V=e.get(D);V.color.copy(G).multiplyScalar(ne),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),i.rectArea[_]=V,_++}else if(D.isPointLight){const V=e.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity),V.distance=D.distance,V.decay=D.decay,D.castShadow){const Y=D.shadow,q=t.get(D);q.shadowIntensity=Y.intensity,q.shadowBias=Y.bias,q.shadowNormalBias=Y.normalBias,q.shadowRadius=Y.radius,q.shadowMapSize=Y.mapSize,q.shadowCameraNear=Y.camera.near,q.shadowCameraFar=Y.camera.far,i.pointShadow[x]=q,i.pointShadowMap[x]=X,i.pointShadowMatrix[x]=D.shadow.matrix,E++}i.point[x]=V,x++}else if(D.isHemisphereLight){const V=e.get(D);V.skyColor.copy(D.color).multiplyScalar(ne),V.groundColor.copy(D.groundColor).multiplyScalar(ne),i.hemi[S]=V,S++}}_>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Xe.LTC_FLOAT_1,i.rectAreaLTC2=Xe.LTC_FLOAT_2):(i.rectAreaLTC1=Xe.LTC_HALF_1,i.rectAreaLTC2=Xe.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=g,i.ambient[2]=m;const T=i.hash;(T.directionalLength!==y||T.pointLength!==x||T.spotLength!==w||T.rectAreaLength!==_||T.hemiLength!==S||T.numDirectionalShadows!==b||T.numPointShadows!==E||T.numSpotShadows!==C||T.numSpotMaps!==I||T.numLightProbes!==N)&&(i.directional.length=y,i.spot.length=w,i.rectArea.length=_,i.point.length=x,i.hemi.length=S,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=C+I-A,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=N,T.directionalLength=y,T.pointLength=x,T.spotLength=w,T.rectAreaLength=_,T.hemiLength=S,T.numDirectionalShadows=b,T.numPointShadows=E,T.numSpotShadows=C,T.numSpotMaps=I,T.numLightProbes=N,i.version=OE++)}function h(f,p){let g=0,m=0,y=0,x=0,w=0;const _=p.matrixWorldInverse;for(let S=0,b=f.length;S<b;S++){const E=f[S];if(E.isDirectionalLight){const C=i.directional[g];C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(_),g++}else if(E.isSpotLight){const C=i.spot[y];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(_),C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(_),y++}else if(E.isRectAreaLight){const C=i.rectArea[x];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(_),c.identity(),o.copy(E.matrixWorld),o.premultiply(_),c.extractRotation(o),C.halfWidth.set(E.width*.5,0,0),C.halfHeight.set(0,E.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),x++}else if(E.isPointLight){const C=i.point[m];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(_),m++}else if(E.isHemisphereLight){const C=i.hemi[w];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(_),w++}}}return{setup:u,setupView:h,state:i}}function Vg(a){const e=new BE(a),t=[],i=[],s=[];function o(m){g.camera=m,t.length=0,i.length=0,s.length=0}function c(m){t.push(m)}function u(m){i.push(m)}function h(m){s.push(m)}function f(){e.setup(t)}function p(m){e.setupView(t,m)}const g={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:g,setupLights:f,setupLightsView:p,pushLight:c,pushShadow:u,pushLightProbeGrid:h}}function HE(a){let e=new WeakMap;function t(s,o=0){const c=e.get(s);let u;return c===void 0?(u=new Vg(a),e.set(s,[u])):o>=c.length?(u=new Vg(a),c.push(u)):u=c[o],u}function i(){e=new WeakMap}return{get:t,dispose:i}}const GE=`void main() {
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
}`,WE=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],XE=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],Wg=new jt,Oo=new Q,mf=new Q;function jE(a,e,t){let i=new Gd;const s=new ut,o=new ut,c=new nn,u=new QS,h=new JS,f={},p=t.maxTextureSize,g={[ls]:ri,[ri]:ls,[Hi]:Hi},m=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:GE,fragmentShader:VE}),y=m.clone();y.defines.HORIZONTAL_PASS=1;const x=new on;x.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new ln(x,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ac;let S=this.type;this.render=function(A,N,T){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||A.length===0)return;this.type===Ty&&(dt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Ac);const F=a.getRenderTarget(),z=a.getActiveCubeFace(),D=a.getActiveMipmapLevel(),G=a.state;G.setBlending(tr),G.buffers.depth.getReversed()===!0?G.buffers.color.setClear(0,0,0,0):G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const ne=S!==this.type;ne&&N.traverse(function(se){se.material&&(Array.isArray(se.material)?se.material.forEach(X=>X.needsUpdate=!0):se.material.needsUpdate=!0)});for(let se=0,X=A.length;se<X;se++){const V=A[se],Y=V.shadow;if(Y===void 0){dt("WebGLShadowMap:",V,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const q=Y.getFrameExtents();s.multiply(q),o.copy(Y.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(o.x=Math.floor(p/q.x),s.x=o.x*q.x,Y.mapSize.x=o.x),s.y>p&&(o.y=Math.floor(p/q.y),s.y=o.y*q.y,Y.mapSize.y=o.y));const ie=a.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=ie,Y.map===null||ne===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Bo){if(V.isPointLight){dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new si(s.x,s.y,{format:zs,type:xi,minFilter:dn,magFilter:dn,generateMipmaps:!1}),Y.map.texture.name=V.name+".shadowMap",Y.map.depthTexture=new Ga(s.x,s.y,Vi),Y.map.depthTexture.name=V.name+".shadowMapDepth",Y.map.depthTexture.format=Cr,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Fn,Y.map.depthTexture.magFilter=Fn}else V.isPointLight?(Y.map=new Zx(s.x),Y.map.depthTexture=new jS(s.x,rr)):(Y.map=new si(s.x,s.y),Y.map.depthTexture=new Ga(s.x,s.y,rr)),Y.map.depthTexture.name=V.name+".shadowMap",Y.map.depthTexture.format=Cr,this.type===Ac?(Y.map.depthTexture.compareFunction=ie?kd:Dd,Y.map.depthTexture.minFilter=dn,Y.map.depthTexture.magFilter=dn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=Fn,Y.map.depthTexture.magFilter=Fn);Y.camera.updateProjectionMatrix()}const te=Y.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<te;O++){if(Y.map.isWebGLCubeRenderTarget)a.setRenderTarget(Y.map,O),a.clear();else{O===0&&(a.setRenderTarget(Y.map),a.clear());const ee=Y.getViewport(O);c.set(o.x*ee.x,o.y*ee.y,o.x*ee.z,o.y*ee.w),G.viewport(c)}if(V.isPointLight){const ee=Y.camera,ge=Y.matrix,Te=V.distance||ee.far;Te!==ee.far&&(ee.far=Te,ee.updateProjectionMatrix()),Oo.setFromMatrixPosition(V.matrixWorld),ee.position.copy(Oo),mf.copy(ee.position),mf.add(WE[O]),ee.up.copy(XE[O]),ee.lookAt(mf),ee.updateMatrixWorld(),ge.makeTranslation(-Oo.x,-Oo.y,-Oo.z),Wg.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Wg,ee.coordinateSystem,ee.reversedDepth)}else Y.updateMatrices(V);i=Y.getFrustum(),C(N,T,Y.camera,V,this.type)}Y.isPointLightShadow!==!0&&this.type===Bo&&b(Y,T),Y.needsUpdate=!1}S=this.type,_.needsUpdate=!1,a.setRenderTarget(F,z,D)};function b(A,N){const T=e.update(w);m.defines.VSM_SAMPLES!==A.blurSamples&&(m.defines.VSM_SAMPLES=A.blurSamples,y.defines.VSM_SAMPLES=A.blurSamples,m.needsUpdate=!0,y.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new si(s.x,s.y,{format:zs,type:xi})),m.uniforms.shadow_pass.value=A.map.depthTexture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,a.setRenderTarget(A.mapPass),a.clear(),a.renderBufferDirect(N,null,T,m,w,null),y.uniforms.shadow_pass.value=A.mapPass.texture,y.uniforms.resolution.value=A.mapSize,y.uniforms.radius.value=A.radius,a.setRenderTarget(A.map),a.clear(),a.renderBufferDirect(N,null,T,y,w,null)}function E(A,N,T,F){let z=null;const D=T.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)z=D;else if(z=T.isPointLight===!0?h:u,a.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const G=z.uuid,ne=N.uuid;let se=f[G];se===void 0&&(se={},f[G]=se);let X=se[ne];X===void 0&&(X=z.clone(),se[ne]=X,N.addEventListener("dispose",I)),z=X}if(z.visible=N.visible,z.wireframe=N.wireframe,F===Bo?z.side=N.shadowSide!==null?N.shadowSide:N.side:z.side=N.shadowSide!==null?N.shadowSide:g[N.side],z.alphaMap=N.alphaMap,z.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,z.map=N.map,z.clipShadows=N.clipShadows,z.clippingPlanes=N.clippingPlanes,z.clipIntersection=N.clipIntersection,z.displacementMap=N.displacementMap,z.displacementScale=N.displacementScale,z.displacementBias=N.displacementBias,z.wireframeLinewidth=N.wireframeLinewidth,z.linewidth=N.linewidth,T.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const G=a.properties.get(z);G.light=T}return z}function C(A,N,T,F,z){if(A.visible===!1)return;if(A.layers.test(N.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&z===Bo)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,A.matrixWorld);const ne=e.update(A),se=A.material;if(Array.isArray(se)){const X=ne.groups;for(let V=0,Y=X.length;V<Y;V++){const q=X[V],ie=se[q.materialIndex];if(ie&&ie.visible){const te=E(A,ie,F,z);A.onBeforeShadow(a,A,N,T,ne,te,q),a.renderBufferDirect(T,null,ne,te,A,q),A.onAfterShadow(a,A,N,T,ne,te,q)}}}else if(se.visible){const X=E(A,se,F,z);A.onBeforeShadow(a,A,N,T,ne,X,null),a.renderBufferDirect(T,null,ne,X,A,null),A.onAfterShadow(a,A,N,T,ne,X,null)}}const G=A.children;for(let ne=0,se=G.length;ne<se;ne++)C(G[ne],N,T,F,z)}function I(A){A.target.removeEventListener("dispose",I);for(const T in f){const F=f[T],z=A.target.uuid;z in F&&(F[z].dispose(),delete F[z])}}}function qE(a,e){function t(){let $=!1;const Ne=new nn;let ve=null;const Ve=new nn(0,0,0,0);return{setMask:function(ke){ve!==ke&&!$&&(a.colorMask(ke,ke,ke,ke),ve=ke)},setLocked:function(ke){$=ke},setClear:function(ke,we,et,ft,kt){kt===!0&&(ke*=ft,we*=ft,et*=ft),Ne.set(ke,we,et,ft),Ve.equals(Ne)===!1&&(a.clearColor(ke,we,et,ft),Ve.copy(Ne))},reset:function(){$=!1,ve=null,Ve.set(-1,0,0,0)}}}function i(){let $=!1,Ne=!1,ve=null,Ve=null,ke=null;return{setReversed:function(we){if(Ne!==we){const et=e.get("EXT_clip_control");we?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),Ne=we;const ft=ke;ke=null,this.setClear(ft)}},getReversed:function(){return Ne},setTest:function(we){we?oe(a.DEPTH_TEST):Re(a.DEPTH_TEST)},setMask:function(we){ve!==we&&!$&&(a.depthMask(we),ve=we)},setFunc:function(we){if(Ne&&(we=sS[we]),Ve!==we){switch(we){case Tf:a.depthFunc(a.NEVER);break;case Cf:a.depthFunc(a.ALWAYS);break;case Af:a.depthFunc(a.LESS);break;case Ba:a.depthFunc(a.LEQUAL);break;case Rf:a.depthFunc(a.EQUAL);break;case Pf:a.depthFunc(a.GEQUAL);break;case Lf:a.depthFunc(a.GREATER);break;case If:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}Ve=we}},setLocked:function(we){$=we},setClear:function(we){ke!==we&&(ke=we,Ne&&(we=1-we),a.clearDepth(we))},reset:function(){$=!1,ve=null,Ve=null,ke=null,Ne=!1}}}function s(){let $=!1,Ne=null,ve=null,Ve=null,ke=null,we=null,et=null,ft=null,kt=null;return{setTest:function(nt){$||(nt?oe(a.STENCIL_TEST):Re(a.STENCIL_TEST))},setMask:function(nt){Ne!==nt&&!$&&(a.stencilMask(nt),Ne=nt)},setFunc:function(nt,Rn,Gn){(ve!==nt||Ve!==Rn||ke!==Gn)&&(a.stencilFunc(nt,Rn,Gn),ve=nt,Ve=Rn,ke=Gn)},setOp:function(nt,Rn,Gn){(we!==nt||et!==Rn||ft!==Gn)&&(a.stencilOp(nt,Rn,Gn),we=nt,et=Rn,ft=Gn)},setLocked:function(nt){$=nt},setClear:function(nt){kt!==nt&&(a.clearStencil(nt),kt=nt)},reset:function(){$=!1,Ne=null,ve=null,Ve=null,ke=null,we=null,et=null,ft=null,kt=null}}}const o=new t,c=new i,u=new s,h=new WeakMap,f=new WeakMap;let p={},g={},m={},y=new WeakMap,x=[],w=null,_=!1,S=null,b=null,E=null,C=null,I=null,A=null,N=null,T=new $e(0,0,0),F=0,z=!1,D=null,G=null,ne=null,se=null,X=null;const V=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,q=0;const ie=a.getParameter(a.VERSION);ie.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(ie)[1]),Y=q>=1):ie.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),Y=q>=2);let te=null,O={};const ee=a.getParameter(a.SCISSOR_BOX),ge=a.getParameter(a.VIEWPORT),Te=new nn().fromArray(ee),Se=new nn().fromArray(ge);function W($,Ne,ve,Ve){const ke=new Uint8Array(4),we=a.createTexture();a.bindTexture($,we),a.texParameteri($,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri($,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let et=0;et<ve;et++)$===a.TEXTURE_3D||$===a.TEXTURE_2D_ARRAY?a.texImage3D(Ne,0,a.RGBA,1,1,Ve,0,a.RGBA,a.UNSIGNED_BYTE,ke):a.texImage2D(Ne+et,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,ke);return we}const me={};me[a.TEXTURE_2D]=W(a.TEXTURE_2D,a.TEXTURE_2D,1),me[a.TEXTURE_CUBE_MAP]=W(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[a.TEXTURE_2D_ARRAY]=W(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),me[a.TEXTURE_3D]=W(a.TEXTURE_3D,a.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),oe(a.DEPTH_TEST),c.setFunc(Ba),Vt(!1),Ut(U0),oe(a.CULL_FACE),wt(tr);function oe($){p[$]!==!0&&(a.enable($),p[$]=!0)}function Re($){p[$]!==!1&&(a.disable($),p[$]=!1)}function Oe($,Ne){return m[$]!==Ne?(a.bindFramebuffer($,Ne),m[$]=Ne,$===a.DRAW_FRAMEBUFFER&&(m[a.FRAMEBUFFER]=Ne),$===a.FRAMEBUFFER&&(m[a.DRAW_FRAMEBUFFER]=Ne),!0):!1}function Ce($,Ne){let ve=x,Ve=!1;if($){ve=y.get(Ne),ve===void 0&&(ve=[],y.set(Ne,ve));const ke=$.textures;if(ve.length!==ke.length||ve[0]!==a.COLOR_ATTACHMENT0){for(let we=0,et=ke.length;we<et;we++)ve[we]=a.COLOR_ATTACHMENT0+we;ve.length=ke.length,Ve=!0}}else ve[0]!==a.BACK&&(ve[0]=a.BACK,Ve=!0);Ve&&a.drawBuffers(ve)}function ht($){return w!==$?(a.useProgram($),w=$,!0):!1}const Qe={[Fs]:a.FUNC_ADD,[Ay]:a.FUNC_SUBTRACT,[Ry]:a.FUNC_REVERSE_SUBTRACT};Qe[Py]=a.MIN,Qe[Ly]=a.MAX;const pt={[Iy]:a.ZERO,[Ny]:a.ONE,[Fy]:a.SRC_COLOR,[bf]:a.SRC_ALPHA,[By]:a.SRC_ALPHA_SATURATE,[Oy]:a.DST_COLOR,[Dy]:a.DST_ALPHA,[Uy]:a.ONE_MINUS_SRC_COLOR,[Ef]:a.ONE_MINUS_SRC_ALPHA,[zy]:a.ONE_MINUS_DST_COLOR,[ky]:a.ONE_MINUS_DST_ALPHA,[Hy]:a.CONSTANT_COLOR,[Gy]:a.ONE_MINUS_CONSTANT_COLOR,[Vy]:a.CONSTANT_ALPHA,[Wy]:a.ONE_MINUS_CONSTANT_ALPHA};function wt($,Ne,ve,Ve,ke,we,et,ft,kt,nt){if($===tr){_===!0&&(Re(a.BLEND),_=!1);return}if(_===!1&&(oe(a.BLEND),_=!0),$!==Cy){if($!==S||nt!==z){if((b!==Fs||I!==Fs)&&(a.blendEquation(a.FUNC_ADD),b=Fs,I=Fs),nt)switch($){case Da:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case za:a.blendFunc(a.ONE,a.ONE);break;case D0:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case k0:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:It("WebGLState: Invalid blending: ",$);break}else switch($){case Da:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case za:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case D0:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case k0:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",$);break}E=null,C=null,A=null,N=null,T.set(0,0,0),F=0,S=$,z=nt}return}ke=ke||Ne,we=we||ve,et=et||Ve,(Ne!==b||ke!==I)&&(a.blendEquationSeparate(Qe[Ne],Qe[ke]),b=Ne,I=ke),(ve!==E||Ve!==C||we!==A||et!==N)&&(a.blendFuncSeparate(pt[ve],pt[Ve],pt[we],pt[et]),E=ve,C=Ve,A=we,N=et),(ft.equals(T)===!1||kt!==F)&&(a.blendColor(ft.r,ft.g,ft.b,kt),T.copy(ft),F=kt),S=$,z=!1}function mt($,Ne){$.side===Hi?Re(a.CULL_FACE):oe(a.CULL_FACE);let ve=$.side===ri;Ne&&(ve=!ve),Vt(ve),$.blending===Da&&$.transparent===!1?wt(tr):wt($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),c.setFunc($.depthFunc),c.setTest($.depthTest),c.setMask($.depthWrite),o.setMask($.colorWrite);const Ve=$.stencilWrite;u.setTest(Ve),Ve&&(u.setMask($.stencilWriteMask),u.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),u.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),Z($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?oe(a.SAMPLE_ALPHA_TO_COVERAGE):Re(a.SAMPLE_ALPHA_TO_COVERAGE)}function Vt($){D!==$&&($?a.frontFace(a.CW):a.frontFace(a.CCW),D=$)}function Ut($){$!==by?(oe(a.CULL_FACE),$!==G&&($===U0?a.cullFace(a.BACK):$===Ey?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Re(a.CULL_FACE),G=$}function cn($){$!==ne&&(Y&&a.lineWidth($),ne=$)}function Z($,Ne,ve){$?(oe(a.POLYGON_OFFSET_FILL),(se!==Ne||X!==ve)&&(se=Ne,X=ve,c.getReversed()&&(Ne=-Ne),a.polygonOffset(Ne,ve))):Re(a.POLYGON_OFFSET_FILL)}function Dt($){$?oe(a.SCISSOR_TEST):Re(a.SCISSOR_TEST)}function vt($){$===void 0&&($=a.TEXTURE0+V-1),te!==$&&(a.activeTexture($),te=$)}function Nt($,Ne,ve){ve===void 0&&(te===null?ve=a.TEXTURE0+V-1:ve=te);let Ve=O[ve];Ve===void 0&&(Ve={type:void 0,texture:void 0},O[ve]=Ve),(Ve.type!==$||Ve.texture!==Ne)&&(te!==ve&&(a.activeTexture(ve),te=ve),a.bindTexture($,Ne||me[$]),Ve.type=$,Ve.texture=Ne)}function He(){const $=O[te];$!==void 0&&$.type!==void 0&&(a.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function Gt(){try{a.compressedTexImage2D(...arguments)}catch($){It("WebGLState:",$)}}function k(){try{a.compressedTexImage3D(...arguments)}catch($){It("WebGLState:",$)}}function R(){try{a.texSubImage2D(...arguments)}catch($){It("WebGLState:",$)}}function re(){try{a.texSubImage3D(...arguments)}catch($){It("WebGLState:",$)}}function _e(){try{a.compressedTexSubImage2D(...arguments)}catch($){It("WebGLState:",$)}}function Me(){try{a.compressedTexSubImage3D(...arguments)}catch($){It("WebGLState:",$)}}function Ie(){try{a.texStorage2D(...arguments)}catch($){It("WebGLState:",$)}}function Be(){try{a.texStorage3D(...arguments)}catch($){It("WebGLState:",$)}}function xe(){try{a.texImage2D(...arguments)}catch($){It("WebGLState:",$)}}function ye(){try{a.texImage3D(...arguments)}catch($){It("WebGLState:",$)}}function We($){return g[$]!==void 0?g[$]:a.getParameter($)}function je($,Ne){g[$]!==Ne&&(a.pixelStorei($,Ne),g[$]=Ne)}function De($){Te.equals($)===!1&&(a.scissor($.x,$.y,$.z,$.w),Te.copy($))}function Fe($){Se.equals($)===!1&&(a.viewport($.x,$.y,$.z,$.w),Se.copy($))}function Ze($,Ne){let ve=f.get(Ne);ve===void 0&&(ve=new WeakMap,f.set(Ne,ve));let Ve=ve.get($);Ve===void 0&&(Ve=a.getUniformBlockIndex(Ne,$.name),ve.set($,Ve))}function gt($,Ne){const Ve=f.get(Ne).get($);h.get(Ne)!==Ve&&(a.uniformBlockBinding(Ne,Ve,$.__bindingPointIndex),h.set(Ne,Ve))}function Mt(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),c.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),p={},g={},te=null,O={},m={},y=new WeakMap,x=[],w=null,_=!1,S=null,b=null,E=null,C=null,I=null,A=null,N=null,T=new $e(0,0,0),F=0,z=!1,D=null,G=null,ne=null,se=null,X=null,Te.set(0,0,a.canvas.width,a.canvas.height),Se.set(0,0,a.canvas.width,a.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:oe,disable:Re,bindFramebuffer:Oe,drawBuffers:Ce,useProgram:ht,setBlending:wt,setMaterial:mt,setFlipSided:Vt,setCullFace:Ut,setLineWidth:cn,setPolygonOffset:Z,setScissorTest:Dt,activeTexture:vt,bindTexture:Nt,unbindTexture:He,compressedTexImage2D:Gt,compressedTexImage3D:k,texImage2D:xe,texImage3D:ye,pixelStorei:je,getParameter:We,updateUBOMapping:Ze,uniformBlockBinding:gt,texStorage2D:Ie,texStorage3D:Be,texSubImage2D:R,texSubImage3D:re,compressedTexSubImage2D:_e,compressedTexSubImage3D:Me,scissor:De,viewport:Fe,reset:Mt}}function YE(a,e,t,i,s,o,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new ut,p=new WeakMap,g=new Set;let m;const y=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(k,R){return x?new OffscreenCanvas(k,R):Bc("canvas")}function _(k,R,re){let _e=1;const Me=Gt(k);if((Me.width>re||Me.height>re)&&(_e=re/Math.max(Me.width,Me.height)),_e<1)if(typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&k instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&k instanceof ImageBitmap||typeof VideoFrame<"u"&&k instanceof VideoFrame){const Ie=Math.floor(_e*Me.width),Be=Math.floor(_e*Me.height);m===void 0&&(m=w(Ie,Be));const xe=R?w(Ie,Be):m;return xe.width=Ie,xe.height=Be,xe.getContext("2d").drawImage(k,0,0,Ie,Be),dt("WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+Ie+"x"+Be+")."),xe}else return"data"in k&&dt("WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),k;return k}function S(k){return k.generateMipmaps}function b(k){a.generateMipmap(k)}function E(k){return k.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:k.isWebGL3DRenderTarget?a.TEXTURE_3D:k.isWebGLArrayRenderTarget||k.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function C(k,R,re,_e,Me,Ie=!1){if(k!==null){if(a[k]!==void 0)return a[k];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+k+"'")}let Be;_e&&(Be=e.get("EXT_texture_norm16"),Be||dt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let xe=R;if(R===a.RED&&(re===a.FLOAT&&(xe=a.R32F),re===a.HALF_FLOAT&&(xe=a.R16F),re===a.UNSIGNED_BYTE&&(xe=a.R8),re===a.UNSIGNED_SHORT&&Be&&(xe=Be.R16_EXT),re===a.SHORT&&Be&&(xe=Be.R16_SNORM_EXT)),R===a.RED_INTEGER&&(re===a.UNSIGNED_BYTE&&(xe=a.R8UI),re===a.UNSIGNED_SHORT&&(xe=a.R16UI),re===a.UNSIGNED_INT&&(xe=a.R32UI),re===a.BYTE&&(xe=a.R8I),re===a.SHORT&&(xe=a.R16I),re===a.INT&&(xe=a.R32I)),R===a.RG&&(re===a.FLOAT&&(xe=a.RG32F),re===a.HALF_FLOAT&&(xe=a.RG16F),re===a.UNSIGNED_BYTE&&(xe=a.RG8),re===a.UNSIGNED_SHORT&&Be&&(xe=Be.RG16_EXT),re===a.SHORT&&Be&&(xe=Be.RG16_SNORM_EXT)),R===a.RG_INTEGER&&(re===a.UNSIGNED_BYTE&&(xe=a.RG8UI),re===a.UNSIGNED_SHORT&&(xe=a.RG16UI),re===a.UNSIGNED_INT&&(xe=a.RG32UI),re===a.BYTE&&(xe=a.RG8I),re===a.SHORT&&(xe=a.RG16I),re===a.INT&&(xe=a.RG32I)),R===a.RGB_INTEGER&&(re===a.UNSIGNED_BYTE&&(xe=a.RGB8UI),re===a.UNSIGNED_SHORT&&(xe=a.RGB16UI),re===a.UNSIGNED_INT&&(xe=a.RGB32UI),re===a.BYTE&&(xe=a.RGB8I),re===a.SHORT&&(xe=a.RGB16I),re===a.INT&&(xe=a.RGB32I)),R===a.RGBA_INTEGER&&(re===a.UNSIGNED_BYTE&&(xe=a.RGBA8UI),re===a.UNSIGNED_SHORT&&(xe=a.RGBA16UI),re===a.UNSIGNED_INT&&(xe=a.RGBA32UI),re===a.BYTE&&(xe=a.RGBA8I),re===a.SHORT&&(xe=a.RGBA16I),re===a.INT&&(xe=a.RGBA32I)),R===a.RGB&&(re===a.UNSIGNED_SHORT&&Be&&(xe=Be.RGB16_EXT),re===a.SHORT&&Be&&(xe=Be.RGB16_SNORM_EXT),re===a.UNSIGNED_INT_5_9_9_9_REV&&(xe=a.RGB9_E5),re===a.UNSIGNED_INT_10F_11F_11F_REV&&(xe=a.R11F_G11F_B10F)),R===a.RGBA){const ye=Ie?zc:Rt.getTransfer(Me);re===a.FLOAT&&(xe=a.RGBA32F),re===a.HALF_FLOAT&&(xe=a.RGBA16F),re===a.UNSIGNED_BYTE&&(xe=ye===Ht?a.SRGB8_ALPHA8:a.RGBA8),re===a.UNSIGNED_SHORT&&Be&&(xe=Be.RGBA16_EXT),re===a.SHORT&&Be&&(xe=Be.RGBA16_SNORM_EXT),re===a.UNSIGNED_SHORT_4_4_4_4&&(xe=a.RGBA4),re===a.UNSIGNED_SHORT_5_5_5_1&&(xe=a.RGB5_A1)}return(xe===a.R16F||xe===a.R32F||xe===a.RG16F||xe===a.RG32F||xe===a.RGBA16F||xe===a.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function I(k,R){let re;return k?R===null||R===rr||R===Yo?re=a.DEPTH24_STENCIL8:R===Vi?re=a.DEPTH32F_STENCIL8:R===qo&&(re=a.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===rr||R===Yo?re=a.DEPTH_COMPONENT24:R===Vi?re=a.DEPTH_COMPONENT32F:R===qo&&(re=a.DEPTH_COMPONENT16),re}function A(k,R){return S(k)===!0||k.isFramebufferTexture&&k.minFilter!==Fn&&k.minFilter!==dn?Math.log2(Math.max(R.width,R.height))+1:k.mipmaps!==void 0&&k.mipmaps.length>0?k.mipmaps.length:k.isCompressedTexture&&Array.isArray(k.image)?R.mipmaps.length:1}function N(k){const R=k.target;R.removeEventListener("dispose",N),F(R),R.isVideoTexture&&p.delete(R),R.isHTMLTexture&&g.delete(R)}function T(k){const R=k.target;R.removeEventListener("dispose",T),D(R)}function F(k){const R=i.get(k);if(R.__webglInit===void 0)return;const re=k.source,_e=y.get(re);if(_e){const Me=_e[R.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&z(k),Object.keys(_e).length===0&&y.delete(re)}i.remove(k)}function z(k){const R=i.get(k);a.deleteTexture(R.__webglTexture);const re=k.source,_e=y.get(re);delete _e[R.__cacheKey],c.memory.textures--}function D(k){const R=i.get(k);if(k.depthTexture&&(k.depthTexture.dispose(),i.remove(k.depthTexture)),k.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(R.__webglFramebuffer[_e]))for(let Me=0;Me<R.__webglFramebuffer[_e].length;Me++)a.deleteFramebuffer(R.__webglFramebuffer[_e][Me]);else a.deleteFramebuffer(R.__webglFramebuffer[_e]);R.__webglDepthbuffer&&a.deleteRenderbuffer(R.__webglDepthbuffer[_e])}else{if(Array.isArray(R.__webglFramebuffer))for(let _e=0;_e<R.__webglFramebuffer.length;_e++)a.deleteFramebuffer(R.__webglFramebuffer[_e]);else a.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&a.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&a.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let _e=0;_e<R.__webglColorRenderbuffer.length;_e++)R.__webglColorRenderbuffer[_e]&&a.deleteRenderbuffer(R.__webglColorRenderbuffer[_e]);R.__webglDepthRenderbuffer&&a.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const re=k.textures;for(let _e=0,Me=re.length;_e<Me;_e++){const Ie=i.get(re[_e]);Ie.__webglTexture&&(a.deleteTexture(Ie.__webglTexture),c.memory.textures--),i.remove(re[_e])}i.remove(k)}let G=0;function ne(){G=0}function se(){return G}function X(k){G=k}function V(){const k=G;return k>=s.maxTextures&&dt("WebGLTextures: Trying to use "+k+" texture units while this GPU supports only "+s.maxTextures),G+=1,k}function Y(k){const R=[];return R.push(k.wrapS),R.push(k.wrapT),R.push(k.wrapR||0),R.push(k.magFilter),R.push(k.minFilter),R.push(k.anisotropy),R.push(k.internalFormat),R.push(k.format),R.push(k.type),R.push(k.generateMipmaps),R.push(k.premultiplyAlpha),R.push(k.flipY),R.push(k.unpackAlignment),R.push(k.colorSpace),R.join()}function q(k,R){const re=i.get(k);if(k.isVideoTexture&&Nt(k),k.isRenderTargetTexture===!1&&k.isExternalTexture!==!0&&k.version>0&&re.__version!==k.version){const _e=k.image;if(_e===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(re,k,R);return}}else k.isExternalTexture&&(re.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,re.__webglTexture,a.TEXTURE0+R)}function ie(k,R){const re=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&re.__version!==k.version){Re(re,k,R);return}else k.isExternalTexture&&(re.__webglTexture=k.sourceTexture?k.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,re.__webglTexture,a.TEXTURE0+R)}function te(k,R){const re=i.get(k);if(k.isRenderTargetTexture===!1&&k.version>0&&re.__version!==k.version){Re(re,k,R);return}t.bindTexture(a.TEXTURE_3D,re.__webglTexture,a.TEXTURE0+R)}function O(k,R){const re=i.get(k);if(k.isCubeDepthTexture!==!0&&k.version>0&&re.__version!==k.version){Oe(re,k,R);return}t.bindTexture(a.TEXTURE_CUBE_MAP,re.__webglTexture,a.TEXTURE0+R)}const ee={[Nf]:a.REPEAT,[br]:a.CLAMP_TO_EDGE,[Ff]:a.MIRRORED_REPEAT},ge={[Fn]:a.NEAREST,[qy]:a.NEAREST_MIPMAP_NEAREST,[ec]:a.NEAREST_MIPMAP_LINEAR,[dn]:a.LINEAR,[kh]:a.LINEAR_MIPMAP_NEAREST,[Ds]:a.LINEAR_MIPMAP_LINEAR},Te={[Ky]:a.NEVER,[tS]:a.ALWAYS,[Zy]:a.LESS,[Dd]:a.LEQUAL,[Qy]:a.EQUAL,[kd]:a.GEQUAL,[Jy]:a.GREATER,[eS]:a.NOTEQUAL};function Se(k,R){if(R.type===Vi&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===dn||R.magFilter===kh||R.magFilter===ec||R.magFilter===Ds||R.minFilter===dn||R.minFilter===kh||R.minFilter===ec||R.minFilter===Ds)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(k,a.TEXTURE_WRAP_S,ee[R.wrapS]),a.texParameteri(k,a.TEXTURE_WRAP_T,ee[R.wrapT]),(k===a.TEXTURE_3D||k===a.TEXTURE_2D_ARRAY)&&a.texParameteri(k,a.TEXTURE_WRAP_R,ee[R.wrapR]),a.texParameteri(k,a.TEXTURE_MAG_FILTER,ge[R.magFilter]),a.texParameteri(k,a.TEXTURE_MIN_FILTER,ge[R.minFilter]),R.compareFunction&&(a.texParameteri(k,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(k,a.TEXTURE_COMPARE_FUNC,Te[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Fn||R.minFilter!==ec&&R.minFilter!==Ds||R.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");a.texParameterf(k,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function W(k,R){let re=!1;k.__webglInit===void 0&&(k.__webglInit=!0,R.addEventListener("dispose",N));const _e=R.source;let Me=y.get(_e);Me===void 0&&(Me={},y.set(_e,Me));const Ie=Y(R);if(Ie!==k.__cacheKey){Me[Ie]===void 0&&(Me[Ie]={texture:a.createTexture(),usedTimes:0},c.memory.textures++,re=!0),Me[Ie].usedTimes++;const Be=Me[k.__cacheKey];Be!==void 0&&(Me[k.__cacheKey].usedTimes--,Be.usedTimes===0&&z(R)),k.__cacheKey=Ie,k.__webglTexture=Me[Ie].texture}return re}function me(k,R,re){return Math.floor(Math.floor(k/re)/R)}function oe(k,R,re,_e){const Ie=k.updateRanges;if(Ie.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,R.width,R.height,re,_e,R.data);else{Ie.sort((je,De)=>je.start-De.start);let Be=0;for(let je=1;je<Ie.length;je++){const De=Ie[Be],Fe=Ie[je],Ze=De.start+De.count,gt=me(Fe.start,R.width,4),Mt=me(De.start,R.width,4);Fe.start<=Ze+1&&gt===Mt&&me(Fe.start+Fe.count-1,R.width,4)===gt?De.count=Math.max(De.count,Fe.start+Fe.count-De.start):(++Be,Ie[Be]=Fe)}Ie.length=Be+1;const xe=t.getParameter(a.UNPACK_ROW_LENGTH),ye=t.getParameter(a.UNPACK_SKIP_PIXELS),We=t.getParameter(a.UNPACK_SKIP_ROWS);t.pixelStorei(a.UNPACK_ROW_LENGTH,R.width);for(let je=0,De=Ie.length;je<De;je++){const Fe=Ie[je],Ze=Math.floor(Fe.start/4),gt=Math.ceil(Fe.count/4),Mt=Ze%R.width,$=Math.floor(Ze/R.width),Ne=gt,ve=1;t.pixelStorei(a.UNPACK_SKIP_PIXELS,Mt),t.pixelStorei(a.UNPACK_SKIP_ROWS,$),t.texSubImage2D(a.TEXTURE_2D,0,Mt,$,Ne,ve,re,_e,R.data)}k.clearUpdateRanges(),t.pixelStorei(a.UNPACK_ROW_LENGTH,xe),t.pixelStorei(a.UNPACK_SKIP_PIXELS,ye),t.pixelStorei(a.UNPACK_SKIP_ROWS,We)}}function Re(k,R,re){let _e=a.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(_e=a.TEXTURE_2D_ARRAY),R.isData3DTexture&&(_e=a.TEXTURE_3D);const Me=W(k,R),Ie=R.source;t.bindTexture(_e,k.__webglTexture,a.TEXTURE0+re);const Be=i.get(Ie);if(Ie.version!==Be.__version||Me===!0){if(t.activeTexture(a.TEXTURE0+re),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){const ve=Rt.getPrimaries(Rt.workingColorSpace),Ve=R.colorSpace===rs?null:Rt.getPrimaries(R.colorSpace),ke=R.colorSpace===rs||ve===Ve?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(a.UNPACK_ALIGNMENT,R.unpackAlignment);let ye=_(R.image,!1,s.maxTextureSize);ye=He(R,ye);const We=o.convert(R.format,R.colorSpace),je=o.convert(R.type);let De=C(R.internalFormat,We,je,R.normalized,R.colorSpace,R.isVideoTexture);Se(_e,R);let Fe;const Ze=R.mipmaps,gt=R.isVideoTexture!==!0,Mt=Be.__version===void 0||Me===!0,$=Ie.dataReady,Ne=A(R,ye);if(R.isDepthTexture)De=I(R.format===ks,R.type),Mt&&(gt?t.texStorage2D(a.TEXTURE_2D,1,De,ye.width,ye.height):t.texImage2D(a.TEXTURE_2D,0,De,ye.width,ye.height,0,We,je,null));else if(R.isDataTexture)if(Ze.length>0){gt&&Mt&&t.texStorage2D(a.TEXTURE_2D,Ne,De,Ze[0].width,Ze[0].height);for(let ve=0,Ve=Ze.length;ve<Ve;ve++)Fe=Ze[ve],gt?$&&t.texSubImage2D(a.TEXTURE_2D,ve,0,0,Fe.width,Fe.height,We,je,Fe.data):t.texImage2D(a.TEXTURE_2D,ve,De,Fe.width,Fe.height,0,We,je,Fe.data);R.generateMipmaps=!1}else gt?(Mt&&t.texStorage2D(a.TEXTURE_2D,Ne,De,ye.width,ye.height),$&&oe(R,ye,We,je)):t.texImage2D(a.TEXTURE_2D,0,De,ye.width,ye.height,0,We,je,ye.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){gt&&Mt&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Ne,De,Ze[0].width,Ze[0].height,ye.depth);for(let ve=0,Ve=Ze.length;ve<Ve;ve++)if(Fe=Ze[ve],R.format!==gi)if(We!==null)if(gt){if($)if(R.layerUpdates.size>0){const ke=Sg(Fe.width,Fe.height,R.format,R.type);for(const we of R.layerUpdates){const et=Fe.data.subarray(we*ke/Fe.data.BYTES_PER_ELEMENT,(we+1)*ke/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ve,0,0,we,Fe.width,Fe.height,1,We,et)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,ve,0,0,0,Fe.width,Fe.height,ye.depth,We,Fe.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,ve,De,Fe.width,Fe.height,ye.depth,0,Fe.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else gt?$&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,ve,0,0,0,Fe.width,Fe.height,ye.depth,We,je,Fe.data):t.texImage3D(a.TEXTURE_2D_ARRAY,ve,De,Fe.width,Fe.height,ye.depth,0,We,je,Fe.data)}else{gt&&Mt&&t.texStorage2D(a.TEXTURE_2D,Ne,De,Ze[0].width,Ze[0].height);for(let ve=0,Ve=Ze.length;ve<Ve;ve++)Fe=Ze[ve],R.format!==gi?We!==null?gt?$&&t.compressedTexSubImage2D(a.TEXTURE_2D,ve,0,0,Fe.width,Fe.height,We,Fe.data):t.compressedTexImage2D(a.TEXTURE_2D,ve,De,Fe.width,Fe.height,0,Fe.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?$&&t.texSubImage2D(a.TEXTURE_2D,ve,0,0,Fe.width,Fe.height,We,je,Fe.data):t.texImage2D(a.TEXTURE_2D,ve,De,Fe.width,Fe.height,0,We,je,Fe.data)}else if(R.isDataArrayTexture)if(gt){if(Mt&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Ne,De,ye.width,ye.height,ye.depth),$)if(R.layerUpdates.size>0){const ve=Sg(ye.width,ye.height,R.format,R.type);for(const Ve of R.layerUpdates){const ke=ye.data.subarray(Ve*ve/ye.data.BYTES_PER_ELEMENT,(Ve+1)*ve/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,Ve,ye.width,ye.height,1,We,je,ke)}R.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,We,je,ye.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,De,ye.width,ye.height,ye.depth,0,We,je,ye.data);else if(R.isData3DTexture)gt?(Mt&&t.texStorage3D(a.TEXTURE_3D,Ne,De,ye.width,ye.height,ye.depth),$&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,We,je,ye.data)):t.texImage3D(a.TEXTURE_3D,0,De,ye.width,ye.height,ye.depth,0,We,je,ye.data);else if(R.isFramebufferTexture){if(Mt)if(gt)t.texStorage2D(a.TEXTURE_2D,Ne,De,ye.width,ye.height);else{let ve=ye.width,Ve=ye.height;for(let ke=0;ke<Ne;ke++)t.texImage2D(a.TEXTURE_2D,ke,De,ve,Ve,0,We,je,null),ve>>=1,Ve>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in a){const ve=a.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),ye.parentNode!==ve){ve.appendChild(ye),g.add(R),ve.onpaint=ft=>{const kt=ft.changedElements;for(const nt of g)kt.includes(nt.image)&&(nt.needsUpdate=!0)},ve.requestPaint();return}const Ve=0,ke=a.RGBA,we=a.RGBA,et=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,Ve,ke,we,et,ye),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(Ze.length>0){if(gt&&Mt){const ve=Gt(Ze[0]);t.texStorage2D(a.TEXTURE_2D,Ne,De,ve.width,ve.height)}for(let ve=0,Ve=Ze.length;ve<Ve;ve++)Fe=Ze[ve],gt?$&&t.texSubImage2D(a.TEXTURE_2D,ve,0,0,We,je,Fe):t.texImage2D(a.TEXTURE_2D,ve,De,We,je,Fe);R.generateMipmaps=!1}else if(gt){if(Mt){const ve=Gt(ye);t.texStorage2D(a.TEXTURE_2D,Ne,De,ve.width,ve.height)}$&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,We,je,ye)}else t.texImage2D(a.TEXTURE_2D,0,De,We,je,ye);S(R)&&b(_e),Be.__version=Ie.version,R.onUpdate&&R.onUpdate(R)}k.__version=R.version}function Oe(k,R,re){if(R.image.length!==6)return;const _e=W(k,R),Me=R.source;t.bindTexture(a.TEXTURE_CUBE_MAP,k.__webglTexture,a.TEXTURE0+re);const Ie=i.get(Me);if(Me.version!==Ie.__version||_e===!0){t.activeTexture(a.TEXTURE0+re);const Be=Rt.getPrimaries(Rt.workingColorSpace),xe=R.colorSpace===rs?null:Rt.getPrimaries(R.colorSpace),ye=R.colorSpace===rs||Be===xe?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(a.UNPACK_ALIGNMENT,R.unpackAlignment),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const We=R.isCompressedTexture||R.image[0].isCompressedTexture,je=R.image[0]&&R.image[0].isDataTexture,De=[];for(let we=0;we<6;we++)!We&&!je?De[we]=_(R.image[we],!0,s.maxCubemapSize):De[we]=je?R.image[we].image:R.image[we],De[we]=He(R,De[we]);const Fe=De[0],Ze=o.convert(R.format,R.colorSpace),gt=o.convert(R.type),Mt=C(R.internalFormat,Ze,gt,R.normalized,R.colorSpace),$=R.isVideoTexture!==!0,Ne=Ie.__version===void 0||_e===!0,ve=Me.dataReady;let Ve=A(R,Fe);Se(a.TEXTURE_CUBE_MAP,R);let ke;if(We){$&&Ne&&t.texStorage2D(a.TEXTURE_CUBE_MAP,Ve,Mt,Fe.width,Fe.height);for(let we=0;we<6;we++){ke=De[we].mipmaps;for(let et=0;et<ke.length;et++){const ft=ke[et];R.format!==gi?Ze!==null?$?ve&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,et,0,0,ft.width,ft.height,Ze,ft.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,et,Mt,ft.width,ft.height,0,ft.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?ve&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,et,0,0,ft.width,ft.height,Ze,gt,ft.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,et,Mt,ft.width,ft.height,0,Ze,gt,ft.data)}}}else{if(ke=R.mipmaps,$&&Ne){ke.length>0&&Ve++;const we=Gt(De[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,Ve,Mt,we.width,we.height)}for(let we=0;we<6;we++)if(je){$?ve&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,De[we].width,De[we].height,Ze,gt,De[we].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Mt,De[we].width,De[we].height,0,Ze,gt,De[we].data);for(let et=0;et<ke.length;et++){const kt=ke[et].image[we].image;$?ve&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,et+1,0,0,kt.width,kt.height,Ze,gt,kt.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,et+1,Mt,kt.width,kt.height,0,Ze,gt,kt.data)}}else{$?ve&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Ze,gt,De[we]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Mt,Ze,gt,De[we]);for(let et=0;et<ke.length;et++){const ft=ke[et];$?ve&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,et+1,0,0,Ze,gt,ft.image[we]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+we,et+1,Mt,Ze,gt,ft.image[we])}}}S(R)&&b(a.TEXTURE_CUBE_MAP),Ie.__version=Me.version,R.onUpdate&&R.onUpdate(R)}k.__version=R.version}function Ce(k,R,re,_e,Me,Ie){const Be=o.convert(re.format,re.colorSpace),xe=o.convert(re.type),ye=C(re.internalFormat,Be,xe,re.normalized,re.colorSpace),We=i.get(R),je=i.get(re);if(je.__renderTarget=R,!We.__hasExternalTextures){const De=Math.max(1,R.width>>Ie),Fe=Math.max(1,R.height>>Ie);Me===a.TEXTURE_3D||Me===a.TEXTURE_2D_ARRAY?t.texImage3D(Me,Ie,ye,De,Fe,R.depth,0,Be,xe,null):t.texImage2D(Me,Ie,ye,De,Fe,0,Be,xe,null)}t.bindFramebuffer(a.FRAMEBUFFER,k),vt(R)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,_e,Me,je.__webglTexture,0,Dt(R)):(Me===a.TEXTURE_2D||Me>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,_e,Me,je.__webglTexture,Ie),t.bindFramebuffer(a.FRAMEBUFFER,null)}function ht(k,R,re){if(a.bindRenderbuffer(a.RENDERBUFFER,k),R.depthBuffer){const _e=R.depthTexture,Me=_e&&_e.isDepthTexture?_e.type:null,Ie=I(R.stencilBuffer,Me),Be=R.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;vt(R)?u.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Dt(R),Ie,R.width,R.height):re?a.renderbufferStorageMultisample(a.RENDERBUFFER,Dt(R),Ie,R.width,R.height):a.renderbufferStorage(a.RENDERBUFFER,Ie,R.width,R.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Be,a.RENDERBUFFER,k)}else{const _e=R.textures;for(let Me=0;Me<_e.length;Me++){const Ie=_e[Me],Be=o.convert(Ie.format,Ie.colorSpace),xe=o.convert(Ie.type),ye=C(Ie.internalFormat,Be,xe,Ie.normalized,Ie.colorSpace);vt(R)?u.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Dt(R),ye,R.width,R.height):re?a.renderbufferStorageMultisample(a.RENDERBUFFER,Dt(R),ye,R.width,R.height):a.renderbufferStorage(a.RENDERBUFFER,ye,R.width,R.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function Qe(k,R,re){const _e=R.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,k),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Me=i.get(R.depthTexture);if(Me.__renderTarget=R,(!Me.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),_e){if(Me.__webglInit===void 0&&(Me.__webglInit=!0,R.depthTexture.addEventListener("dispose",N)),Me.__webglTexture===void 0){Me.__webglTexture=a.createTexture(),t.bindTexture(a.TEXTURE_CUBE_MAP,Me.__webglTexture),Se(a.TEXTURE_CUBE_MAP,R.depthTexture);const We=o.convert(R.depthTexture.format),je=o.convert(R.depthTexture.type);let De;R.depthTexture.format===Cr?De=a.DEPTH_COMPONENT24:R.depthTexture.format===ks&&(De=a.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,De,R.width,R.height,0,We,je,null)}}else q(R.depthTexture,0);const Ie=Me.__webglTexture,Be=Dt(R),xe=_e?a.TEXTURE_CUBE_MAP_POSITIVE_X+re:a.TEXTURE_2D,ye=R.depthTexture.format===ks?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(R.depthTexture.format===Cr)vt(R)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ye,xe,Ie,0,Be):a.framebufferTexture2D(a.FRAMEBUFFER,ye,xe,Ie,0);else if(R.depthTexture.format===ks)vt(R)?u.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ye,xe,Ie,0,Be):a.framebufferTexture2D(a.FRAMEBUFFER,ye,xe,Ie,0);else throw new Error("Unknown depthTexture format")}function pt(k){const R=i.get(k),re=k.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==k.depthTexture){const _e=k.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),_e){const Me=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,_e.removeEventListener("dispose",Me)};_e.addEventListener("dispose",Me),R.__depthDisposeCallback=Me}R.__boundDepthTexture=_e}if(k.depthTexture&&!R.__autoAllocateDepthBuffer)if(re)for(let _e=0;_e<6;_e++)Qe(R.__webglFramebuffer[_e],k,_e);else{const _e=k.texture.mipmaps;_e&&_e.length>0?Qe(R.__webglFramebuffer[0],k,0):Qe(R.__webglFramebuffer,k,0)}else if(re){R.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(a.FRAMEBUFFER,R.__webglFramebuffer[_e]),R.__webglDepthbuffer[_e]===void 0)R.__webglDepthbuffer[_e]=a.createRenderbuffer(),ht(R.__webglDepthbuffer[_e],k,!1);else{const Me=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ie=R.__webglDepthbuffer[_e];a.bindRenderbuffer(a.RENDERBUFFER,Ie),a.framebufferRenderbuffer(a.FRAMEBUFFER,Me,a.RENDERBUFFER,Ie)}}else{const _e=k.texture.mipmaps;if(_e&&_e.length>0?t.bindFramebuffer(a.FRAMEBUFFER,R.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=a.createRenderbuffer(),ht(R.__webglDepthbuffer,k,!1);else{const Me=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ie=R.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Ie),a.framebufferRenderbuffer(a.FRAMEBUFFER,Me,a.RENDERBUFFER,Ie)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function wt(k,R,re){const _e=i.get(k);R!==void 0&&Ce(_e.__webglFramebuffer,k,k.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),re!==void 0&&pt(k)}function mt(k){const R=k.texture,re=i.get(k),_e=i.get(R);k.addEventListener("dispose",T);const Me=k.textures,Ie=k.isWebGLCubeRenderTarget===!0,Be=Me.length>1;if(Be||(_e.__webglTexture===void 0&&(_e.__webglTexture=a.createTexture()),_e.__version=R.version,c.memory.textures++),Ie){re.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(R.mipmaps&&R.mipmaps.length>0){re.__webglFramebuffer[xe]=[];for(let ye=0;ye<R.mipmaps.length;ye++)re.__webglFramebuffer[xe][ye]=a.createFramebuffer()}else re.__webglFramebuffer[xe]=a.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){re.__webglFramebuffer=[];for(let xe=0;xe<R.mipmaps.length;xe++)re.__webglFramebuffer[xe]=a.createFramebuffer()}else re.__webglFramebuffer=a.createFramebuffer();if(Be)for(let xe=0,ye=Me.length;xe<ye;xe++){const We=i.get(Me[xe]);We.__webglTexture===void 0&&(We.__webglTexture=a.createTexture(),c.memory.textures++)}if(k.samples>0&&vt(k)===!1){re.__webglMultisampledFramebuffer=a.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let xe=0;xe<Me.length;xe++){const ye=Me[xe];re.__webglColorRenderbuffer[xe]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,re.__webglColorRenderbuffer[xe]);const We=o.convert(ye.format,ye.colorSpace),je=o.convert(ye.type),De=C(ye.internalFormat,We,je,ye.normalized,ye.colorSpace,k.isXRRenderTarget===!0),Fe=Dt(k);a.renderbufferStorageMultisample(a.RENDERBUFFER,Fe,De,k.width,k.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+xe,a.RENDERBUFFER,re.__webglColorRenderbuffer[xe])}a.bindRenderbuffer(a.RENDERBUFFER,null),k.depthBuffer&&(re.__webglDepthRenderbuffer=a.createRenderbuffer(),ht(re.__webglDepthRenderbuffer,k,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Ie){t.bindTexture(a.TEXTURE_CUBE_MAP,_e.__webglTexture),Se(a.TEXTURE_CUBE_MAP,R);for(let xe=0;xe<6;xe++)if(R.mipmaps&&R.mipmaps.length>0)for(let ye=0;ye<R.mipmaps.length;ye++)Ce(re.__webglFramebuffer[xe][ye],k,R,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ye);else Ce(re.__webglFramebuffer[xe],k,R,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);S(R)&&b(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let xe=0,ye=Me.length;xe<ye;xe++){const We=Me[xe],je=i.get(We);let De=a.TEXTURE_2D;(k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(De=k.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(De,je.__webglTexture),Se(De,We),Ce(re.__webglFramebuffer,k,We,a.COLOR_ATTACHMENT0+xe,De,0),S(We)&&b(De)}t.unbindTexture()}else{let xe=a.TEXTURE_2D;if((k.isWebGL3DRenderTarget||k.isWebGLArrayRenderTarget)&&(xe=k.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(xe,_e.__webglTexture),Se(xe,R),R.mipmaps&&R.mipmaps.length>0)for(let ye=0;ye<R.mipmaps.length;ye++)Ce(re.__webglFramebuffer[ye],k,R,a.COLOR_ATTACHMENT0,xe,ye);else Ce(re.__webglFramebuffer,k,R,a.COLOR_ATTACHMENT0,xe,0);S(R)&&b(xe),t.unbindTexture()}k.depthBuffer&&pt(k)}function Vt(k){const R=k.textures;for(let re=0,_e=R.length;re<_e;re++){const Me=R[re];if(S(Me)){const Ie=E(k),Be=i.get(Me).__webglTexture;t.bindTexture(Ie,Be),b(Ie),t.unbindTexture()}}}const Ut=[],cn=[];function Z(k){if(k.samples>0){if(vt(k)===!1){const R=k.textures,re=k.width,_e=k.height;let Me=a.COLOR_BUFFER_BIT;const Ie=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Be=i.get(k),xe=R.length>1;if(xe)for(let We=0;We<R.length;We++)t.bindFramebuffer(a.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+We,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,Be.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+We,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);const ye=k.texture.mipmaps;ye&&ye.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let We=0;We<R.length;We++){if(k.resolveDepthBuffer&&(k.depthBuffer&&(Me|=a.DEPTH_BUFFER_BIT),k.stencilBuffer&&k.resolveStencilBuffer&&(Me|=a.STENCIL_BUFFER_BIT)),xe){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Be.__webglColorRenderbuffer[We]);const je=i.get(R[We]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,je,0)}a.blitFramebuffer(0,0,re,_e,0,0,re,_e,Me,a.NEAREST),h===!0&&(Ut.length=0,cn.length=0,Ut.push(a.COLOR_ATTACHMENT0+We),k.depthBuffer&&k.resolveDepthBuffer===!1&&(Ut.push(Ie),cn.push(Ie),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,cn)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,Ut))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),xe)for(let We=0;We<R.length;We++){t.bindFramebuffer(a.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+We,a.RENDERBUFFER,Be.__webglColorRenderbuffer[We]);const je=i.get(R[We]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,Be.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+We,a.TEXTURE_2D,je,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(k.depthBuffer&&k.resolveDepthBuffer===!1&&h){const R=k.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[R])}}}function Dt(k){return Math.min(s.maxSamples,k.samples)}function vt(k){const R=i.get(k);return k.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Nt(k){const R=c.render.frame;p.get(k)!==R&&(p.set(k,R),k.update())}function He(k,R){const re=k.colorSpace,_e=k.format,Me=k.type;return k.isCompressedTexture===!0||k.isVideoTexture===!0||re!==Oc&&re!==rs&&(Rt.getTransfer(re)===Ht?(_e!==gi||Me!==mi)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",re)),R}function Gt(k){return typeof HTMLImageElement<"u"&&k instanceof HTMLImageElement?(f.width=k.naturalWidth||k.width,f.height=k.naturalHeight||k.height):typeof VideoFrame<"u"&&k instanceof VideoFrame?(f.width=k.displayWidth,f.height=k.displayHeight):(f.width=k.width,f.height=k.height),f}this.allocateTextureUnit=V,this.resetTextureUnits=ne,this.getTextureUnits=se,this.setTextureUnits=X,this.setTexture2D=q,this.setTexture2DArray=ie,this.setTexture3D=te,this.setTextureCube=O,this.rebindTextures=wt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Z,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=vt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function $E(a,e){function t(i,s=rs){let o;const c=Rt.getTransfer(s);if(i===mi)return a.UNSIGNED_BYTE;if(i===Pd)return a.UNSIGNED_SHORT_4_4_4_4;if(i===Ld)return a.UNSIGNED_SHORT_5_5_5_1;if(i===Lx)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===Ix)return a.UNSIGNED_INT_10F_11F_11F_REV;if(i===Rx)return a.BYTE;if(i===Px)return a.SHORT;if(i===qo)return a.UNSIGNED_SHORT;if(i===Rd)return a.INT;if(i===rr)return a.UNSIGNED_INT;if(i===Vi)return a.FLOAT;if(i===xi)return a.HALF_FLOAT;if(i===Nx)return a.ALPHA;if(i===Fx)return a.RGB;if(i===gi)return a.RGBA;if(i===Cr)return a.DEPTH_COMPONENT;if(i===ks)return a.DEPTH_STENCIL;if(i===Id)return a.RED;if(i===Nd)return a.RED_INTEGER;if(i===zs)return a.RG;if(i===Fd)return a.RG_INTEGER;if(i===Ud)return a.RGBA_INTEGER;if(i===Rc||i===Pc||i===Lc||i===Ic)if(c===Ht)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Rc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Pc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Lc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ic)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Rc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Pc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Lc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ic)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Uf||i===Df||i===kf||i===Of)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Uf)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Df)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kf)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Of)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===zf||i===Bf||i===Hf||i===Gf||i===Vf||i===Uc||i===Wf)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===zf||i===Bf)return c===Ht?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Hf)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===Gf)return o.COMPRESSED_R11_EAC;if(i===Vf)return o.COMPRESSED_SIGNED_R11_EAC;if(i===Uc)return o.COMPRESSED_RG11_EAC;if(i===Wf)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Xf||i===jf||i===qf||i===Yf||i===$f||i===Kf||i===Zf||i===Qf||i===Jf||i===ed||i===td||i===nd||i===id||i===rd)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Xf)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===jf)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qf)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Yf)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$f)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Kf)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zf)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qf)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Jf)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ed)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===td)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nd)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===id)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rd)return c===Ht?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sd||i===ad||i===od)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===sd)return c===Ht?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ad)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===od)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ld||i===cd||i===Dc||i===ud)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===ld)return o.COMPRESSED_RED_RGTC1_EXT;if(i===cd)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Dc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ud)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Yo?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:t}}const KE=`
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

}`;class QE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Vx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new an({vertexShader:KE,fragmentShader:ZE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ln(new Rr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class JE extends Hs{constructor(e,t){super();const i=this;let s=null,o=1,c=null,u="local-floor",h=1,f=null,p=null,g=null,m=null,y=null,x=null;const w=typeof XRWebGLBinding<"u",_=new QE,S={},b=t.getContextAttributes();let E=null,C=null;const I=[],A=[],N=new ut;let T=null;const F=new An;F.viewport=new nn;const z=new An;z.viewport=new nn;const D=[F,z],G=new oM;let ne=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let me=I[W];return me===void 0&&(me=new Vh,I[W]=me),me.getTargetRaySpace()},this.getControllerGrip=function(W){let me=I[W];return me===void 0&&(me=new Vh,I[W]=me),me.getGripSpace()},this.getHand=function(W){let me=I[W];return me===void 0&&(me=new Vh,I[W]=me),me.getHandSpace()};function X(W){const me=A.indexOf(W.inputSource);if(me===-1)return;const oe=I[me];oe!==void 0&&(oe.update(W.inputSource,W.frame,f||c),oe.dispatchEvent({type:W.type,data:W.inputSource}))}function V(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",Y);for(let W=0;W<I.length;W++){const me=A[W];me!==null&&(A[W]=null,I[W].disconnect(me))}ne=null,se=null,_.reset();for(const W in S)delete S[W];e.setRenderTarget(E),y=null,m=null,g=null,s=null,C=null,Se.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){o=W,i.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){u=W,i.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(W){f=W},this.getBaseLayer=function(){return m!==null?m:y},this.getBinding=function(){return g===null&&w&&(g=new XRWebGLBinding(s,t)),g},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",V),s.addEventListener("inputsourceschange",Y),b.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(N),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Re=null,Oe=null;b.depth&&(Oe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=b.stencil?ks:Cr,Re=b.stencil?Yo:rr);const Ce={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:o};g=this.getBinding(),m=g.createProjectionLayer(Ce),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),C=new si(m.textureWidth,m.textureHeight,{format:gi,type:mi,depthTexture:new Ga(m.textureWidth,m.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const oe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),C=new si(y.framebufferWidth,y.framebufferHeight,{format:gi,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(h),f=null,c=await s.requestReferenceSpace(u),Se.setContext(s),Se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(W){for(let me=0;me<W.removed.length;me++){const oe=W.removed[me],Re=A.indexOf(oe);Re>=0&&(A[Re]=null,I[Re].disconnect(oe))}for(let me=0;me<W.added.length;me++){const oe=W.added[me];let Re=A.indexOf(oe);if(Re===-1){for(let Ce=0;Ce<I.length;Ce++)if(Ce>=A.length){A.push(oe),Re=Ce;break}else if(A[Ce]===null){A[Ce]=oe,Re=Ce;break}if(Re===-1)break}const Oe=I[Re];Oe&&Oe.connect(oe)}}const q=new Q,ie=new Q;function te(W,me,oe){q.setFromMatrixPosition(me.matrixWorld),ie.setFromMatrixPosition(oe.matrixWorld);const Re=q.distanceTo(ie),Oe=me.projectionMatrix.elements,Ce=oe.projectionMatrix.elements,ht=Oe[14]/(Oe[10]-1),Qe=Oe[14]/(Oe[10]+1),pt=(Oe[9]+1)/Oe[5],wt=(Oe[9]-1)/Oe[5],mt=(Oe[8]-1)/Oe[0],Vt=(Ce[8]+1)/Ce[0],Ut=ht*mt,cn=ht*Vt,Z=Re/(-mt+Vt),Dt=Z*-mt;if(me.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Dt),W.translateZ(Z),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Oe[10]===-1)W.projectionMatrix.copy(me.projectionMatrix),W.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const vt=ht+Z,Nt=Qe+Z,He=Ut-Dt,Gt=cn+(Re-Dt),k=pt*Qe/Nt*vt,R=wt*Qe/Nt*vt;W.projectionMatrix.makePerspective(He,Gt,k,R,vt,Nt),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function O(W,me){me===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(me.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let me=W.near,oe=W.far;_.texture!==null&&(_.depthNear>0&&(me=_.depthNear),_.depthFar>0&&(oe=_.depthFar)),G.near=z.near=F.near=me,G.far=z.far=F.far=oe,(ne!==G.near||se!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),ne=G.near,se=G.far),G.layers.mask=W.layers.mask|6,F.layers.mask=G.layers.mask&-5,z.layers.mask=G.layers.mask&-3;const Re=W.parent,Oe=G.cameras;O(G,Re);for(let Ce=0;Ce<Oe.length;Ce++)O(Oe[Ce],Re);Oe.length===2?te(G,F,z):G.projectionMatrix.copy(F.projectionMatrix),ee(W,G,Re)};function ee(W,me,oe){oe===null?W.matrix.copy(me.matrixWorld):(W.matrix.copy(oe.matrixWorld),W.matrix.invert(),W.matrix.multiply(me.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(me.projectionMatrix),W.projectionMatrixInverse.copy(me.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ko*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(m===null&&y===null))return h},this.setFoveation=function(W){h=W,m!==null&&(m.fixedFoveation=W),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(G)},this.getCameraTexture=function(W){return S[W]};let ge=null;function Te(W,me){if(p=me.getViewerPose(f||c),x=me,p!==null){const oe=p.views;y!==null&&(e.setRenderTargetFramebuffer(C,y.framebuffer),e.setRenderTarget(C));let Re=!1;oe.length!==G.cameras.length&&(G.cameras.length=0,Re=!0);for(let Qe=0;Qe<oe.length;Qe++){const pt=oe[Qe];let wt=null;if(y!==null)wt=y.getViewport(pt);else{const Vt=g.getViewSubImage(m,pt);wt=Vt.viewport,Qe===0&&(e.setRenderTargetTextures(C,Vt.colorTexture,Vt.depthStencilTexture),e.setRenderTarget(C))}let mt=D[Qe];mt===void 0&&(mt=new An,mt.layers.enable(Qe),mt.viewport=new nn,D[Qe]=mt),mt.matrix.fromArray(pt.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(pt.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(wt.x,wt.y,wt.width,wt.height),Qe===0&&(G.matrix.copy(mt.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Re===!0&&G.cameras.push(mt)}const Oe=s.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&w){g=i.getBinding();const Qe=g.getDepthInformation(oe[0]);Qe&&Qe.isValid&&Qe.texture&&_.init(Qe,s.renderState)}if(Oe&&Oe.includes("camera-access")&&w){e.state.unbindTexture(),g=i.getBinding();for(let Qe=0;Qe<oe.length;Qe++){const pt=oe[Qe].camera;if(pt){let wt=S[pt];wt||(wt=new Vx,S[pt]=wt);const mt=g.getCameraImage(pt);wt.sourceTexture=mt}}}}for(let oe=0;oe<I.length;oe++){const Re=A[oe],Oe=I[oe];Re!==null&&Oe!==void 0&&Oe.update(Re,me,f||c)}ge&&ge(W,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),x=null}const Se=new $x;Se.setAnimationLoop(Te),this.setAnimationLoop=function(W){ge=W},this.dispose=function(){}}}const eT=new jt,nv=new St;nv.set(-1,0,0,0,1,0,0,0,1);function tT(a,e){function t(_,S){_.matrixAutoUpdate===!0&&_.updateMatrix(),S.value.copy(_.matrix)}function i(_,S){S.color.getRGB(_.fogColor.value,Wx(a)),S.isFog?(_.fogNear.value=S.near,_.fogFar.value=S.far):S.isFogExp2&&(_.fogDensity.value=S.density)}function s(_,S,b,E,C){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?o(_,S):S.isMeshLambertMaterial?(o(_,S),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(o(_,S),g(_,S)):S.isMeshPhongMaterial?(o(_,S),p(_,S),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(o(_,S),m(_,S),S.isMeshPhysicalMaterial&&y(_,S,C)):S.isMeshMatcapMaterial?(o(_,S),x(_,S)):S.isMeshDepthMaterial?o(_,S):S.isMeshDistanceMaterial?(o(_,S),w(_,S)):S.isMeshNormalMaterial?o(_,S):S.isLineBasicMaterial?(c(_,S),S.isLineDashedMaterial&&u(_,S)):S.isPointsMaterial?h(_,S,b,E):S.isSpriteMaterial?f(_,S):S.isShadowMaterial?(_.color.value.copy(S.color),_.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function o(_,S){_.opacity.value=S.opacity,S.color&&_.diffuse.value.copy(S.color),S.emissive&&_.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(_.map.value=S.map,t(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.bumpMap&&(_.bumpMap.value=S.bumpMap,t(S.bumpMap,_.bumpMapTransform),_.bumpScale.value=S.bumpScale,S.side===ri&&(_.bumpScale.value*=-1)),S.normalMap&&(_.normalMap.value=S.normalMap,t(S.normalMap,_.normalMapTransform),_.normalScale.value.copy(S.normalScale),S.side===ri&&_.normalScale.value.negate()),S.displacementMap&&(_.displacementMap.value=S.displacementMap,t(S.displacementMap,_.displacementMapTransform),_.displacementScale.value=S.displacementScale,_.displacementBias.value=S.displacementBias),S.emissiveMap&&(_.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,_.emissiveMapTransform)),S.specularMap&&(_.specularMap.value=S.specularMap,t(S.specularMap,_.specularMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest);const b=e.get(S),E=b.envMap,C=b.envMapRotation;E&&(_.envMap.value=E,_.envMapRotation.value.setFromMatrix4(eT.makeRotationFromEuler(C)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(nv),_.reflectivity.value=S.reflectivity,_.ior.value=S.ior,_.refractionRatio.value=S.refractionRatio),S.lightMap&&(_.lightMap.value=S.lightMap,_.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,_.lightMapTransform)),S.aoMap&&(_.aoMap.value=S.aoMap,_.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,_.aoMapTransform))}function c(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,S.map&&(_.map.value=S.map,t(S.map,_.mapTransform))}function u(_,S){_.dashSize.value=S.dashSize,_.totalSize.value=S.dashSize+S.gapSize,_.scale.value=S.scale}function h(_,S,b,E){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.size.value=S.size*b,_.scale.value=E*.5,S.map&&(_.map.value=S.map,t(S.map,_.uvTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function f(_,S){_.diffuse.value.copy(S.color),_.opacity.value=S.opacity,_.rotation.value=S.rotation,S.map&&(_.map.value=S.map,t(S.map,_.mapTransform)),S.alphaMap&&(_.alphaMap.value=S.alphaMap,t(S.alphaMap,_.alphaMapTransform)),S.alphaTest>0&&(_.alphaTest.value=S.alphaTest)}function p(_,S){_.specular.value.copy(S.specular),_.shininess.value=Math.max(S.shininess,1e-4)}function g(_,S){S.gradientMap&&(_.gradientMap.value=S.gradientMap)}function m(_,S){_.metalness.value=S.metalness,S.metalnessMap&&(_.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,_.metalnessMapTransform)),_.roughness.value=S.roughness,S.roughnessMap&&(_.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,_.roughnessMapTransform)),S.envMap&&(_.envMapIntensity.value=S.envMapIntensity)}function y(_,S,b){_.ior.value=S.ior,S.sheen>0&&(_.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),_.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(_.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,_.sheenColorMapTransform)),S.sheenRoughnessMap&&(_.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,_.sheenRoughnessMapTransform))),S.clearcoat>0&&(_.clearcoat.value=S.clearcoat,_.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(_.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,_.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(_.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ri&&_.clearcoatNormalScale.value.negate())),S.dispersion>0&&(_.dispersion.value=S.dispersion),S.iridescence>0&&(_.iridescence.value=S.iridescence,_.iridescenceIOR.value=S.iridescenceIOR,_.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(_.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,_.iridescenceMapTransform)),S.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),S.transmission>0&&(_.transmission.value=S.transmission,_.transmissionSamplerMap.value=b.texture,_.transmissionSamplerSize.value.set(b.width,b.height),S.transmissionMap&&(_.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,_.transmissionMapTransform)),_.thickness.value=S.thickness,S.thicknessMap&&(_.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=S.attenuationDistance,_.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(_.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(_.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=S.specularIntensity,_.specularColor.value.copy(S.specularColor),S.specularColorMap&&(_.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,_.specularColorMapTransform)),S.specularIntensityMap&&(_.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,S){S.matcap&&(_.matcap.value=S.matcap)}function w(_,S){const b=e.get(S).light;_.referencePosition.value.setFromMatrixPosition(b.matrixWorld),_.nearDistance.value=b.shadow.camera.near,_.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function nT(a,e,t,i){let s={},o={},c=[];const u=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function h(b,E){const C=E.program;i.uniformBlockBinding(b,C)}function f(b,E){let C=s[b.id];C===void 0&&(x(b),C=p(b),s[b.id]=C,b.addEventListener("dispose",_));const I=E.program;i.updateUBOMapping(b,I);const A=e.render.frame;o[b.id]!==A&&(m(b),o[b.id]=A)}function p(b){const E=g();b.__bindingPointIndex=E;const C=a.createBuffer(),I=b.__size,A=b.usage;return a.bindBuffer(a.UNIFORM_BUFFER,C),a.bufferData(a.UNIFORM_BUFFER,I,A),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,E,C),C}function g(){for(let b=0;b<u;b++)if(c.indexOf(b)===-1)return c.push(b),b;return It("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(b){const E=s[b.id],C=b.uniforms,I=b.__cache;a.bindBuffer(a.UNIFORM_BUFFER,E);for(let A=0,N=C.length;A<N;A++){const T=Array.isArray(C[A])?C[A]:[C[A]];for(let F=0,z=T.length;F<z;F++){const D=T[F];if(y(D,A,F,I)===!0){const G=D.__offset,ne=Array.isArray(D.value)?D.value:[D.value];let se=0;for(let X=0;X<ne.length;X++){const V=ne[X],Y=w(V);typeof V=="number"||typeof V=="boolean"?(D.__data[0]=V,a.bufferSubData(a.UNIFORM_BUFFER,G+se,D.__data)):V.isMatrix3?(D.__data[0]=V.elements[0],D.__data[1]=V.elements[1],D.__data[2]=V.elements[2],D.__data[3]=0,D.__data[4]=V.elements[3],D.__data[5]=V.elements[4],D.__data[6]=V.elements[5],D.__data[7]=0,D.__data[8]=V.elements[6],D.__data[9]=V.elements[7],D.__data[10]=V.elements[8],D.__data[11]=0):ArrayBuffer.isView(V)?D.__data.set(new V.constructor(V.buffer,V.byteOffset,D.__data.length)):(V.toArray(D.__data,se),se+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(a.UNIFORM_BUFFER,G,D.__data)}}}a.bindBuffer(a.UNIFORM_BUFFER,null)}function y(b,E,C,I){const A=b.value,N=E+"_"+C;if(I[N]===void 0)return typeof A=="number"||typeof A=="boolean"?I[N]=A:ArrayBuffer.isView(A)?I[N]=A.slice():I[N]=A.clone(),!0;{const T=I[N];if(typeof A=="number"||typeof A=="boolean"){if(T!==A)return I[N]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(T.equals(A)===!1)return T.copy(A),!0}}return!1}function x(b){const E=b.uniforms;let C=0;const I=16;for(let N=0,T=E.length;N<T;N++){const F=Array.isArray(E[N])?E[N]:[E[N]];for(let z=0,D=F.length;z<D;z++){const G=F[z],ne=Array.isArray(G.value)?G.value:[G.value];for(let se=0,X=ne.length;se<X;se++){const V=ne[se],Y=w(V),q=C%I,ie=q%Y.boundary,te=q+ie;C+=ie,te!==0&&I-te<Y.storage&&(C+=I-te),G.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=C,C+=Y.storage}}}const A=C%I;return A>0&&(C+=I-A),b.__size=C,b.__cache={},this}function w(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(E.boundary=16,E.storage=b.byteLength):dt("WebGLRenderer: Unsupported uniform value type.",b),E}function _(b){const E=b.target;E.removeEventListener("dispose",_);const C=c.indexOf(E.__bindingPointIndex);c.splice(C,1),a.deleteBuffer(s[E.id]),delete s[E.id],delete o[E.id]}function S(){for(const b in s)a.deleteBuffer(s[b]);c=[],s={},o={}}return{bind:h,update:f,dispose:S}}const iT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zi=null;function rT(){return Zi===null&&(Zi=new Hd(iT,16,16,zs,xi),Zi.name="DFG_LUT",Zi.minFilter=dn,Zi.magFilter=dn,Zi.wrapS=br,Zi.wrapT=br,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}class us{constructor(e={}){const{canvas:t=iS(),context:i=null,depth:s=!0,stencil:o=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:m=!1,outputBufferType:y=mi}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=c;const w=y,_=new Set([Ud,Fd,Nd]),S=new Set([mi,rr,qo,Yo,Pd,Ld]),b=new Uint32Array(4),E=new Int32Array(4),C=new Q;let I=null,A=null;const N=[],T=[];let F=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=nr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let D=!1,G=null;this._outputColorSpace=pi;let ne=0,se=0,X=null,V=-1,Y=null;const q=new nn,ie=new nn;let te=null;const O=new $e(0);let ee=0,ge=t.width,Te=t.height,Se=1,W=null,me=null;const oe=new nn(0,0,ge,Te),Re=new nn(0,0,ge,Te);let Oe=!1;const Ce=new Gd;let ht=!1,Qe=!1;const pt=new jt,wt=new Q,mt=new nn,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function cn(){return X===null?Se:1}let Z=i;function Dt(P,j){return t.getContext(P,j)}try{const P={alpha:!0,depth:s,stencil:o,antialias:u,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cd}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",et,!1),t.addEventListener("webglcontextcreationerror",ft,!1),Z===null){const j="webgl2";if(Z=Dt(j,P),Z===null)throw Dt(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw It("WebGLRenderer: "+P.message),P}let vt,Nt,He,Gt,k,R,re,_e,Me,Ie,Be,xe,ye,We,je,De,Fe,Ze,gt,Mt,$,Ne,ve;function Ve(){vt=new r2(Z),vt.init(),$=new $E(Z,vt),Nt=new Kb(Z,vt,e,$),He=new qE(Z,vt),Nt.reversedDepthBuffer&&m&&He.buffers.depth.setReversed(!0),Gt=new o2(Z),k=new NE,R=new YE(Z,vt,He,k,Nt,$,Gt),re=new i2(z),_e=new hM(Z),Ne=new Yb(Z,_e),Me=new s2(Z,_e,Gt,Ne),Ie=new c2(Z,Me,_e,Ne,Gt),Ze=new l2(Z,Nt,R),je=new Zb(k),Be=new IE(z,re,vt,Nt,Ne,je),xe=new tT(z,k),ye=new UE,We=new HE(vt),Fe=new qb(z,re,He,Ie,x,h),De=new jE(z,Ie,Nt),ve=new nT(Z,Gt,Nt,He),gt=new $b(Z,vt,Gt),Mt=new a2(Z,vt,Gt),Gt.programs=Be.programs,z.capabilities=Nt,z.extensions=vt,z.properties=k,z.renderLists=ye,z.shadowMap=De,z.state=He,z.info=Gt}Ve(),w!==mi&&(F=new h2(w,t.width,t.height,s,o));const ke=new JE(z,Z);this.xr=ke,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const P=vt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=vt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(P){P!==void 0&&(Se=P,this.setSize(ge,Te,!1))},this.getSize=function(P){return P.set(ge,Te)},this.setSize=function(P,j,fe=!0){if(ke.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}ge=P,Te=j,t.width=Math.floor(P*Se),t.height=Math.floor(j*Se),fe===!0&&(t.style.width=P+"px",t.style.height=j+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,P,j)},this.getDrawingBufferSize=function(P){return P.set(ge*Se,Te*Se).floor()},this.setDrawingBufferSize=function(P,j,fe){ge=P,Te=j,Se=fe,t.width=Math.floor(P*fe),t.height=Math.floor(j*fe),this.setViewport(0,0,P,j)},this.setEffects=function(P){if(w===mi){It("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(P){for(let j=0;j<P.length;j++)if(P[j].isOutputPass===!0){dt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(P||[])},this.getCurrentViewport=function(P){return P.copy(q)},this.getViewport=function(P){return P.copy(oe)},this.setViewport=function(P,j,fe,ce){P.isVector4?oe.set(P.x,P.y,P.z,P.w):oe.set(P,j,fe,ce),He.viewport(q.copy(oe).multiplyScalar(Se).round())},this.getScissor=function(P){return P.copy(Re)},this.setScissor=function(P,j,fe,ce){P.isVector4?Re.set(P.x,P.y,P.z,P.w):Re.set(P,j,fe,ce),He.scissor(ie.copy(Re).multiplyScalar(Se).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(P){He.setScissorTest(Oe=P)},this.setOpaqueSort=function(P){W=P},this.setTransparentSort=function(P){me=P},this.getClearColor=function(P){return P.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(P=!0,j=!0,fe=!0){let ce=0;if(P){let le=!1;if(X!==null){const Ge=X.texture.format;le=_.has(Ge)}if(le){const Ge=X.texture.type,Ke=S.has(Ge),ze=Fe.getClearColor(),it=Fe.getClearAlpha(),ot=ze.r,_t=ze.g,yt=ze.b;Ke?(b[0]=ot,b[1]=_t,b[2]=yt,b[3]=it,Z.clearBufferuiv(Z.COLOR,0,b)):(E[0]=ot,E[1]=_t,E[2]=yt,E[3]=it,Z.clearBufferiv(Z.COLOR,0,E))}else ce|=Z.COLOR_BUFFER_BIT}j&&(ce|=Z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(ce|=Z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ce!==0&&Z.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(P){P.setRenderer(this),G=P},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",et,!1),t.removeEventListener("webglcontextcreationerror",ft,!1),Fe.dispose(),ye.dispose(),We.dispose(),k.dispose(),re.dispose(),Ie.dispose(),Ne.dispose(),ve.dispose(),Be.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",sr),ke.removeEventListener("sessionend",Pr),Pn.stop()};function we(P){P.preventDefault(),G0("WebGLRenderer: Context Lost."),D=!0}function et(){G0("WebGLRenderer: Context Restored."),D=!1;const P=Gt.autoReset,j=De.enabled,fe=De.autoUpdate,ce=De.needsUpdate,le=De.type;Ve(),Gt.autoReset=P,De.enabled=j,De.autoUpdate=fe,De.needsUpdate=ce,De.type=le}function ft(P){It("WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function kt(P){const j=P.target;j.removeEventListener("dispose",kt),nt(j)}function nt(P){Rn(P),k.remove(P)}function Rn(P){const j=k.get(P).programs;j!==void 0&&(j.forEach(function(fe){Be.releaseProgram(fe)}),P.isShaderMaterial&&Be.releaseShaderCache(P))}this.renderBufferDirect=function(P,j,fe,ce,le,Ge){j===null&&(j=Vt);const Ke=le.isMesh&&le.matrixWorld.determinant()<0,ze=Ws(P,j,fe,ce,le);He.setMaterial(ce,Ke);let it=fe.index,ot=1;if(ce.wireframe===!0){if(it=Me.getWireframeAttribute(fe),it===void 0)return;ot=2}const _t=fe.drawRange,yt=fe.attributes.position;let st=_t.start*ot,Pt=(_t.start+_t.count)*ot;Ge!==null&&(st=Math.max(st,Ge.start*ot),Pt=Math.min(Pt,(Ge.start+Ge.count)*ot)),it!==null?(st=Math.max(st,0),Pt=Math.min(Pt,it.count)):yt!=null&&(st=Math.max(st,0),Pt=Math.min(Pt,yt.count));const Wt=Pt-st;if(Wt<0||Wt===1/0)return;Ne.setup(le,ce,ze,fe,it);let Zt,zt=gt;if(it!==null&&(Zt=_e.get(it),zt=Mt,zt.setIndex(Zt)),le.isMesh)ce.wireframe===!0?(He.setLineWidth(ce.wireframeLinewidth*cn()),zt.setMode(Z.LINES)):zt.setMode(Z.TRIANGLES);else if(le.isLine){let un=ce.linewidth;un===void 0&&(un=1),He.setLineWidth(un*cn()),le.isLineSegments?zt.setMode(Z.LINES):le.isLineLoop?zt.setMode(Z.LINE_LOOP):zt.setMode(Z.LINE_STRIP)}else le.isPoints?zt.setMode(Z.POINTS):le.isSprite&&zt.setMode(Z.TRIANGLES);if(le.isBatchedMesh)if(vt.get("WEBGL_multi_draw"))zt.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{const un=le._multiDrawStarts,qe=le._multiDrawCounts,Ln=le._multiDrawCount,Et=it?_e.get(it).bytesPerElement:1,$n=k.get(ce).currentProgram.getUniforms();for(let Kn=0;Kn<Ln;Kn++)$n.setValue(Z,"_gl_DrawID",Kn),zt.render(un[Kn]/Et,qe[Kn])}else if(le.isInstancedMesh)zt.renderInstances(st,Wt,le.count);else if(fe.isInstancedBufferGeometry){const un=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,qe=Math.min(fe.instanceCount,un);zt.renderInstances(st,Wt,qe)}else zt.render(st,Wt)};function Gn(P,j,fe){P.transparent===!0&&P.side===Hi&&P.forceSinglePass===!1?(P.side=ri,P.needsUpdate=!0,or(P,j,fe),P.side=ls,P.needsUpdate=!0,or(P,j,fe),P.side=Hi):or(P,j,fe)}this.compile=function(P,j,fe=null){fe===null&&(fe=P),A=We.get(fe),A.init(j),T.push(A),fe.traverseVisible(function(le){le.isLight&&le.layers.test(j.layers)&&(A.pushLight(le),le.castShadow&&A.pushShadow(le))}),P!==fe&&P.traverseVisible(function(le){le.isLight&&le.layers.test(j.layers)&&(A.pushLight(le),le.castShadow&&A.pushShadow(le))}),A.setupLights();const ce=new Set;return P.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;const Ge=le.material;if(Ge)if(Array.isArray(Ge))for(let Ke=0;Ke<Ge.length;Ke++){const ze=Ge[Ke];Gn(ze,fe,le),ce.add(ze)}else Gn(Ge,fe,le),ce.add(Ge)}),A=T.pop(),ce},this.compileAsync=function(P,j,fe=null){const ce=this.compile(P,j,fe);return new Promise(le=>{function Ge(){if(ce.forEach(function(Ke){k.get(Ke).currentProgram.isReady()&&ce.delete(Ke)}),ce.size===0){le(P);return}setTimeout(Ge,10)}vt.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let Ci=null;function Vn(P){Ci&&Ci(P)}function sr(){Pn.stop()}function Pr(){Pn.start()}const Pn=new $x;Pn.setAnimationLoop(Vn),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(P){Ci=P,ke.setAnimationLoop(P),P===null?Pn.stop():Pn.start()},ke.addEventListener("sessionstart",sr),ke.addEventListener("sessionend",Pr),this.render=function(P,j){if(j!==void 0&&j.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;G!==null&&G.renderStart(P,j);const fe=ke.enabled===!0&&ke.isPresenting===!0,ce=F!==null&&(X===null||fe)&&F.begin(z,X);if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(j),j=ke.getCamera()),P.isScene===!0&&P.onBeforeRender(z,P,j,X),A=We.get(P,T.length),A.init(j),A.state.textureUnits=R.getTextureUnits(),T.push(A),pt.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Ce.setFromProjectionMatrix(pt,Ji,j.reversedDepth),Qe=this.localClippingEnabled,ht=je.init(this.clippingPlanes,Qe),I=ye.get(P,N.length),I.init(),N.push(I),ke.enabled===!0&&ke.isPresenting===!0){const Ke=z.xr.getDepthSensingMesh();Ke!==null&&hs(Ke,j,-1/0,z.sortObjects)}hs(P,j,0,z.sortObjects),I.finish(),z.sortObjects===!0&&I.sort(W,me),Ut=ke.enabled===!1||ke.isPresenting===!1||ke.hasDepthSensing()===!1,Ut&&Fe.addToRenderList(I,P),this.info.render.frame++,ht===!0&&je.beginShadows();const le=A.state.shadowsArray;if(De.render(le,P,j),ht===!0&&je.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ce&&F.hasRenderPass())===!1){const Ke=I.opaque,ze=I.transmissive;if(A.setupLights(),j.isArrayCamera){const it=j.cameras;if(ze.length>0)for(let ot=0,_t=it.length;ot<_t;ot++){const yt=it[ot];ai(Ke,ze,P,yt)}Ut&&Fe.render(P);for(let ot=0,_t=it.length;ot<_t;ot++){const yt=it[ot];fs(I,P,yt,yt.viewport)}}else ze.length>0&&ai(Ke,ze,P,j),Ut&&Fe.render(P),fs(I,P,j)}X!==null&&se===0&&(R.updateMultisampleRenderTarget(X),R.updateRenderTargetMipmap(X)),ce&&F.end(z),P.isScene===!0&&P.onAfterRender(z,P,j),Ne.resetDefaultState(),V=-1,Y=null,T.pop(),T.length>0?(A=T[T.length-1],R.setTextureUnits(A.state.textureUnits),ht===!0&&je.setGlobalState(z.clippingPlanes,A.state.camera)):A=null,N.pop(),N.length>0?I=N[N.length-1]:I=null,G!==null&&G.renderEnd()};function hs(P,j,fe,ce){if(P.visible===!1)return;if(P.layers.test(j.layers)){if(P.isGroup)fe=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(j);else if(P.isLightProbeGrid)A.pushLightProbeGrid(P);else if(P.isLight)A.pushLight(P),P.castShadow&&A.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Ce.intersectsSprite(P)){ce&&mt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(pt);const Ke=Ie.update(P),ze=P.material;ze.visible&&I.push(P,Ke,ze,fe,mt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Ce.intersectsObject(P))){const Ke=Ie.update(P),ze=P.material;if(ce&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),mt.copy(P.boundingSphere.center)):(Ke.boundingSphere===null&&Ke.computeBoundingSphere(),mt.copy(Ke.boundingSphere.center)),mt.applyMatrix4(P.matrixWorld).applyMatrix4(pt)),Array.isArray(ze)){const it=Ke.groups;for(let ot=0,_t=it.length;ot<_t;ot++){const yt=it[ot],st=ze[yt.materialIndex];st&&st.visible&&I.push(P,Ke,st,fe,mt.z,yt)}}else ze.visible&&I.push(P,Ke,ze,fe,mt.z,null)}}const Ge=P.children;for(let Ke=0,ze=Ge.length;Ke<ze;Ke++)hs(Ge[Ke],j,fe,ce)}function fs(P,j,fe,ce){const{opaque:le,transmissive:Ge,transparent:Ke}=P;A.setupLightsView(fe),ht===!0&&je.setGlobalState(z.clippingPlanes,fe),ce&&He.viewport(q.copy(ce)),le.length>0&&ar(le,j,fe),Ge.length>0&&ar(Ge,j,fe),Ke.length>0&&ar(Ke,j,fe),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function ai(P,j,fe,ce){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[ce.id]===void 0){const st=vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[ce.id]=new si(1,1,{generateMipmaps:!0,type:st?xi:mi,minFilter:Ds,samples:Math.max(4,Nt.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Ge=A.state.transmissionRenderTarget[ce.id],Ke=ce.viewport||q;Ge.setSize(Ke.z*z.transmissionResolutionScale,Ke.w*z.transmissionResolutionScale);const ze=z.getRenderTarget(),it=z.getActiveCubeFace(),ot=z.getActiveMipmapLevel();z.setRenderTarget(Ge),z.getClearColor(O),ee=z.getClearAlpha(),ee<1&&z.setClearColor(16777215,.5),z.clear(),Ut&&Fe.render(fe);const _t=z.toneMapping;z.toneMapping=nr;const yt=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),A.setupLightsView(ce),ht===!0&&je.setGlobalState(z.clippingPlanes,ce),ar(P,fe,ce),R.updateMultisampleRenderTarget(Ge),R.updateRenderTargetMipmap(Ge),vt.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let Pt=0,Wt=j.length;Pt<Wt;Pt++){const Zt=j[Pt],{object:zt,geometry:un,material:qe,group:Ln}=Zt;if(qe.side===Hi&&zt.layers.test(ce.layers)){const Et=qe.side;qe.side=ri,qe.needsUpdate=!0,Lr(zt,fe,ce,un,qe,Ln),qe.side=Et,qe.needsUpdate=!0,st=!0}}st===!0&&(R.updateMultisampleRenderTarget(Ge),R.updateRenderTargetMipmap(Ge))}z.setRenderTarget(ze,it,ot),z.setClearColor(O,ee),yt!==void 0&&(ce.viewport=yt),z.toneMapping=_t}function ar(P,j,fe){const ce=j.isScene===!0?j.overrideMaterial:null;for(let le=0,Ge=P.length;le<Ge;le++){const Ke=P[le],{object:ze,geometry:it,group:ot}=Ke;let _t=Ke.material;_t.allowOverride===!0&&ce!==null&&(_t=ce),ze.layers.test(fe.layers)&&Lr(ze,j,fe,it,_t,ot)}}function Lr(P,j,fe,ce,le,Ge){P.onBeforeRender(z,j,fe,ce,le,Ge),P.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),le.onBeforeRender(z,j,fe,ce,P,Ge),le.transparent===!0&&le.side===Hi&&le.forceSinglePass===!1?(le.side=ri,le.needsUpdate=!0,z.renderBufferDirect(fe,j,ce,le,P,Ge),le.side=ls,le.needsUpdate=!0,z.renderBufferDirect(fe,j,ce,le,P,Ge),le.side=Hi):z.renderBufferDirect(fe,j,ce,le,P,Ge),P.onAfterRender(z,j,fe,ce,le,Ge)}function or(P,j,fe){j.isScene!==!0&&(j=Vt);const ce=k.get(P),le=A.state.lights,Ge=A.state.shadowsArray,Ke=le.state.version,ze=Be.getParameters(P,le.state,Ge,j,fe,A.state.lightProbeGridArray),it=Be.getProgramCacheKey(ze);let ot=ce.programs;ce.environment=P.isMeshStandardMaterial||P.isMeshLambertMaterial||P.isMeshPhongMaterial?j.environment:null,ce.fog=j.fog;const _t=P.isMeshStandardMaterial||P.isMeshLambertMaterial&&!P.envMap||P.isMeshPhongMaterial&&!P.envMap;ce.envMap=re.get(P.envMap||ce.environment,_t),ce.envMapRotation=ce.environment!==null&&P.envMap===null?j.environmentRotation:P.envMapRotation,ot===void 0&&(P.addEventListener("dispose",kt),ot=new Map,ce.programs=ot);let yt=ot.get(it);if(yt!==void 0){if(ce.currentProgram===yt&&ce.lightsStateVersion===Ke)return lr(P,ze),yt}else ze.uniforms=Be.getUniforms(P),G!==null&&P.isNodeMaterial&&G.build(P,fe,ze),P.onBeforeCompile(ze,z),yt=Be.acquireProgram(ze,it),ot.set(it,yt),ce.uniforms=ze.uniforms;const st=ce.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(st.clippingPlanes=je.uniform),lr(P,ze),ce.needsLights=Xs(P),ce.lightsStateVersion=Ke,ce.needsLights&&(st.ambientLightColor.value=le.state.ambient,st.lightProbe.value=le.state.probe,st.directionalLights.value=le.state.directional,st.directionalLightShadows.value=le.state.directionalShadow,st.spotLights.value=le.state.spot,st.spotLightShadows.value=le.state.spotShadow,st.rectAreaLights.value=le.state.rectArea,st.ltc_1.value=le.state.rectAreaLTC1,st.ltc_2.value=le.state.rectAreaLTC2,st.pointLights.value=le.state.point,st.pointLightShadows.value=le.state.pointShadow,st.hemisphereLights.value=le.state.hemi,st.directionalShadowMatrix.value=le.state.directionalShadowMatrix,st.spotLightMatrix.value=le.state.spotLightMatrix,st.spotLightMap.value=le.state.spotLightMap,st.pointShadowMatrix.value=le.state.pointShadowMatrix),ce.lightProbeGrid=A.state.lightProbeGridArray.length>0,ce.currentProgram=yt,ce.uniformsList=null,yt}function ds(P){if(P.uniformsList===null){const j=P.currentProgram.getUniforms();P.uniformsList=Nc.seqWithValue(j.seq,P.uniforms)}return P.uniformsList}function lr(P,j){const fe=k.get(P);fe.outputColorSpace=j.outputColorSpace,fe.batching=j.batching,fe.batchingColor=j.batchingColor,fe.instancing=j.instancing,fe.instancingColor=j.instancingColor,fe.instancingMorph=j.instancingMorph,fe.skinning=j.skinning,fe.morphTargets=j.morphTargets,fe.morphNormals=j.morphNormals,fe.morphColors=j.morphColors,fe.morphTargetsCount=j.morphTargetsCount,fe.numClippingPlanes=j.numClippingPlanes,fe.numIntersection=j.numClipIntersection,fe.vertexAlphas=j.vertexAlphas,fe.vertexTangents=j.vertexTangents,fe.toneMapping=j.toneMapping}function Ai(P,j){if(P.length===0)return null;if(P.length===1)return P[0].texture!==null?P[0]:null;C.setFromMatrixPosition(j.matrixWorld);for(let fe=0,ce=P.length;fe<ce;fe++){const le=P[fe];if(le.texture!==null&&le.boundingBox.containsPoint(C))return le}return null}function Ws(P,j,fe,ce,le){j.isScene!==!0&&(j=Vt),R.resetTextureUnits();const Ge=j.fog,Ke=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial?j.environment:null,ze=X===null?z.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Rt.workingColorSpace,it=ce.isMeshStandardMaterial||ce.isMeshLambertMaterial&&!ce.envMap||ce.isMeshPhongMaterial&&!ce.envMap,ot=re.get(ce.envMap||Ke,it),_t=ce.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,yt=!!fe.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),st=!!fe.morphAttributes.position,Pt=!!fe.morphAttributes.normal,Wt=!!fe.morphAttributes.color;let Zt=nr;ce.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Zt=z.toneMapping);const zt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,un=zt!==void 0?zt.length:0,qe=k.get(ce),Ln=A.state.lights;if(ht===!0&&(Qe===!0||P!==Y)){const Bt=P===Y&&ce.id===V;je.setState(ce,P,Bt)}let Et=!1;ce.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Ln.state.version||qe.outputColorSpace!==ze||le.isBatchedMesh&&qe.batching===!1||!le.isBatchedMesh&&qe.batching===!0||le.isBatchedMesh&&qe.batchingColor===!0&&le.colorTexture===null||le.isBatchedMesh&&qe.batchingColor===!1&&le.colorTexture!==null||le.isInstancedMesh&&qe.instancing===!1||!le.isInstancedMesh&&qe.instancing===!0||le.isSkinnedMesh&&qe.skinning===!1||!le.isSkinnedMesh&&qe.skinning===!0||le.isInstancedMesh&&qe.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&qe.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&qe.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&qe.instancingMorph===!1&&le.morphTexture!==null||qe.envMap!==ot||ce.fog===!0&&qe.fog!==Ge||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==je.numPlanes||qe.numIntersection!==je.numIntersection)||qe.vertexAlphas!==_t||qe.vertexTangents!==yt||qe.morphTargets!==st||qe.morphNormals!==Pt||qe.morphColors!==Wt||qe.toneMapping!==Zt||qe.morphTargetsCount!==un||!!qe.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(Et=!0):(Et=!0,qe.__version=ce.version);let $n=qe.currentProgram;Et===!0&&($n=or(ce,j,le),G&&ce.isNodeMaterial&&G.onUpdateProgram(ce,$n,qe));let Kn=!1,Tt=!1,cr=!1;const Ot=$n.getUniforms(),qt=qe.uniforms;if(He.useProgram($n.program)&&(Kn=!0,Tt=!0,cr=!0),ce.id!==V&&(V=ce.id,Tt=!0),qe.needsLights){const Bt=Ai(A.state.lightProbeGridArray,le);qe.lightProbeGrid!==Bt&&(qe.lightProbeGrid=Bt,Tt=!0)}if(Kn||Y!==P){He.buffers.depth.getReversed()&&P.reversedDepth!==!0&&(P._reversedDepth=!0,P.updateProjectionMatrix()),Ot.setValue(Z,"projectionMatrix",P.projectionMatrix),Ot.setValue(Z,"viewMatrix",P.matrixWorldInverse);const Pi=Ot.map.cameraPosition;Pi!==void 0&&Pi.setValue(Z,wt.setFromMatrixPosition(P.matrixWorld)),Nt.logarithmicDepthBuffer&&Ot.setValue(Z,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&Ot.setValue(Z,"isOrthographic",P.isOrthographicCamera===!0),Y!==P&&(Y=P,Tt=!0,cr=!0)}if(qe.needsLights&&(Ln.state.directionalShadowMap.length>0&&Ot.setValue(Z,"directionalShadowMap",Ln.state.directionalShadowMap,R),Ln.state.spotShadowMap.length>0&&Ot.setValue(Z,"spotShadowMap",Ln.state.spotShadowMap,R),Ln.state.pointShadowMap.length>0&&Ot.setValue(Z,"pointShadowMap",Ln.state.pointShadowMap,R)),le.isSkinnedMesh){Ot.setOptional(Z,le,"bindMatrix"),Ot.setOptional(Z,le,"bindMatrixInverse");const Bt=le.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),Ot.setValue(Z,"boneTexture",Bt.boneTexture,R))}le.isBatchedMesh&&(Ot.setOptional(Z,le,"batchingTexture"),Ot.setValue(Z,"batchingTexture",le._matricesTexture,R),Ot.setOptional(Z,le,"batchingIdTexture"),Ot.setValue(Z,"batchingIdTexture",le._indirectTexture,R),Ot.setOptional(Z,le,"batchingColorTexture"),le._colorsTexture!==null&&Ot.setValue(Z,"batchingColorTexture",le._colorsTexture,R));const Ri=fe.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&Ze.update(le,fe,$n),(Tt||qe.receiveShadow!==le.receiveShadow)&&(qe.receiveShadow=le.receiveShadow,Ot.setValue(Z,"receiveShadow",le.receiveShadow)),(ce.isMeshStandardMaterial||ce.isMeshLambertMaterial||ce.isMeshPhongMaterial)&&ce.envMap===null&&j.environment!==null&&(qt.envMapIntensity.value=j.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=rT()),Tt){if(Ot.setValue(Z,"toneMappingExposure",z.toneMappingExposure),qe.needsLights&&Ka(qt,cr),Ge&&ce.fog===!0&&xe.refreshFogUniforms(qt,Ge),xe.refreshMaterialUniforms(qt,ce,Se,Te,A.state.transmissionRenderTarget[P.id]),qe.needsLights&&qe.lightProbeGrid){const Bt=qe.lightProbeGrid;qt.probesSH.value=Bt.texture,qt.probesMin.value.copy(Bt.boundingBox.min),qt.probesMax.value.copy(Bt.boundingBox.max),qt.probesResolution.value.copy(Bt.resolution)}Nc.upload(Z,ds(qe),qt,R)}if(ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Nc.upload(Z,ds(qe),qt,R),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&Ot.setValue(Z,"center",le.center),Ot.setValue(Z,"modelViewMatrix",le.modelViewMatrix),Ot.setValue(Z,"normalMatrix",le.normalMatrix),Ot.setValue(Z,"modelMatrix",le.matrixWorld),ce.uniformsGroups!==void 0){const Bt=ce.uniformsGroups;for(let Pi=0,Xi=Bt.length;Pi<Xi;Pi++){const ps=Bt[Pi];ve.update(ps,$n),ve.bind(ps,$n)}}return $n}function Ka(P,j){P.ambientLightColor.needsUpdate=j,P.lightProbe.needsUpdate=j,P.directionalLights.needsUpdate=j,P.directionalLightShadows.needsUpdate=j,P.pointLights.needsUpdate=j,P.pointLightShadows.needsUpdate=j,P.spotLights.needsUpdate=j,P.spotLightShadows.needsUpdate=j,P.rectAreaLights.needsUpdate=j,P.hemisphereLights.needsUpdate=j}function Xs(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(P,j,fe){const ce=k.get(P);ce.__autoAllocateDepthBuffer=P.resolveDepthBuffer===!1,ce.__autoAllocateDepthBuffer===!1&&(ce.__useRenderToTexture=!1),k.get(P.texture).__webglTexture=j,k.get(P.depthTexture).__webglTexture=ce.__autoAllocateDepthBuffer?void 0:fe,ce.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(P,j){const fe=k.get(P);fe.__webglFramebuffer=j,fe.__useDefaultFramebuffer=j===void 0};const pe=Z.createFramebuffer();this.setRenderTarget=function(P,j=0,fe=0){X=P,ne=j,se=fe;let ce=null,le=!1,Ge=!1;if(P){const ze=k.get(P);if(ze.__useDefaultFramebuffer!==void 0){He.bindFramebuffer(Z.FRAMEBUFFER,ze.__webglFramebuffer),q.copy(P.viewport),ie.copy(P.scissor),te=P.scissorTest,He.viewport(q),He.scissor(ie),He.setScissorTest(te),V=-1;return}else if(ze.__webglFramebuffer===void 0)R.setupRenderTarget(P);else if(ze.__hasExternalTextures)R.rebindTextures(P,k.get(P.texture).__webglTexture,k.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const _t=P.depthTexture;if(ze.__boundDepthTexture!==_t){if(_t!==null&&k.has(_t)&&(P.width!==_t.image.width||P.height!==_t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(P)}}const it=P.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Ge=!0);const ot=k.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(ot[j])?ce=ot[j][fe]:ce=ot[j],le=!0):P.samples>0&&R.useMultisampledRTT(P)===!1?ce=k.get(P).__webglMultisampledFramebuffer:Array.isArray(ot)?ce=ot[fe]:ce=ot,q.copy(P.viewport),ie.copy(P.scissor),te=P.scissorTest}else q.copy(oe).multiplyScalar(Se).floor(),ie.copy(Re).multiplyScalar(Se).floor(),te=Oe;if(fe!==0&&(ce=pe),He.bindFramebuffer(Z.FRAMEBUFFER,ce)&&He.drawBuffers(P,ce),He.viewport(q),He.scissor(ie),He.setScissorTest(te),le){const ze=k.get(P.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_CUBE_MAP_POSITIVE_X+j,ze.__webglTexture,fe)}else if(Ge){const ze=j;for(let it=0;it<P.textures.length;it++){const ot=k.get(P.textures[it]);Z.framebufferTextureLayer(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0+it,ot.__webglTexture,fe,ze)}}else if(P!==null&&fe!==0){const ze=k.get(P.texture);Z.framebufferTexture2D(Z.FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,ze.__webglTexture,fe)}V=-1},this.readRenderTargetPixels=function(P,j,fe,ce,le,Ge,Ke,ze=0){if(!(P&&P.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=k.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ke!==void 0&&(it=it[Ke]),it){He.bindFramebuffer(Z.FRAMEBUFFER,it);try{const ot=P.textures[ze],_t=ot.format,yt=ot.type;if(P.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+ze),!Nt.textureFormatReadable(_t)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Nt.textureTypeReadable(yt)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=P.width-ce&&fe>=0&&fe<=P.height-le&&Z.readPixels(j,fe,ce,le,$.convert(_t),$.convert(yt),Ge)}finally{const ot=X!==null?k.get(X).__webglFramebuffer:null;He.bindFramebuffer(Z.FRAMEBUFFER,ot)}}},this.readRenderTargetPixelsAsync=async function(P,j,fe,ce,le,Ge,Ke,ze=0){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let it=k.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ke!==void 0&&(it=it[Ke]),it)if(j>=0&&j<=P.width-ce&&fe>=0&&fe<=P.height-le){He.bindFramebuffer(Z.FRAMEBUFFER,it);const ot=P.textures[ze],_t=ot.format,yt=ot.type;if(P.textures.length>1&&Z.readBuffer(Z.COLOR_ATTACHMENT0+ze),!Nt.textureFormatReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Nt.textureTypeReadable(yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const st=Z.createBuffer();Z.bindBuffer(Z.PIXEL_PACK_BUFFER,st),Z.bufferData(Z.PIXEL_PACK_BUFFER,Ge.byteLength,Z.STREAM_READ),Z.readPixels(j,fe,ce,le,$.convert(_t),$.convert(yt),0);const Pt=X!==null?k.get(X).__webglFramebuffer:null;He.bindFramebuffer(Z.FRAMEBUFFER,Pt);const Wt=Z.fenceSync(Z.SYNC_GPU_COMMANDS_COMPLETE,0);return Z.flush(),await rS(Z,Wt,4),Z.bindBuffer(Z.PIXEL_PACK_BUFFER,st),Z.getBufferSubData(Z.PIXEL_PACK_BUFFER,0,Ge),Z.deleteBuffer(st),Z.deleteSync(Wt),Ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(P,j=null,fe=0){const ce=Math.pow(2,-fe),le=Math.floor(P.image.width*ce),Ge=Math.floor(P.image.height*ce),Ke=j!==null?j.x:0,ze=j!==null?j.y:0;R.setTexture2D(P,0),Z.copyTexSubImage2D(Z.TEXTURE_2D,fe,0,0,Ke,ze,le,Ge),He.unbindTexture()};const Le=Z.createFramebuffer(),Ae=Z.createFramebuffer();this.copyTextureToTexture=function(P,j,fe=null,ce=null,le=0,Ge=0){let Ke,ze,it,ot,_t,yt,st,Pt,Wt;const Zt=P.isCompressedTexture?P.mipmaps[Ge]:P.image;if(fe!==null)Ke=fe.max.x-fe.min.x,ze=fe.max.y-fe.min.y,it=fe.isBox3?fe.max.z-fe.min.z:1,ot=fe.min.x,_t=fe.min.y,yt=fe.isBox3?fe.min.z:0;else{const qt=Math.pow(2,-le);Ke=Math.floor(Zt.width*qt),ze=Math.floor(Zt.height*qt),P.isDataArrayTexture?it=Zt.depth:P.isData3DTexture?it=Math.floor(Zt.depth*qt):it=1,ot=0,_t=0,yt=0}ce!==null?(st=ce.x,Pt=ce.y,Wt=ce.z):(st=0,Pt=0,Wt=0);const zt=$.convert(j.format),un=$.convert(j.type);let qe;j.isData3DTexture?(R.setTexture3D(j,0),qe=Z.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(R.setTexture2DArray(j,0),qe=Z.TEXTURE_2D_ARRAY):(R.setTexture2D(j,0),qe=Z.TEXTURE_2D),He.activeTexture(Z.TEXTURE0),He.pixelStorei(Z.UNPACK_FLIP_Y_WEBGL,j.flipY),He.pixelStorei(Z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),He.pixelStorei(Z.UNPACK_ALIGNMENT,j.unpackAlignment);const Ln=He.getParameter(Z.UNPACK_ROW_LENGTH),Et=He.getParameter(Z.UNPACK_IMAGE_HEIGHT),$n=He.getParameter(Z.UNPACK_SKIP_PIXELS),Kn=He.getParameter(Z.UNPACK_SKIP_ROWS),Tt=He.getParameter(Z.UNPACK_SKIP_IMAGES);He.pixelStorei(Z.UNPACK_ROW_LENGTH,Zt.width),He.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Zt.height),He.pixelStorei(Z.UNPACK_SKIP_PIXELS,ot),He.pixelStorei(Z.UNPACK_SKIP_ROWS,_t),He.pixelStorei(Z.UNPACK_SKIP_IMAGES,yt);const cr=P.isDataArrayTexture||P.isData3DTexture,Ot=j.isDataArrayTexture||j.isData3DTexture;if(P.isDepthTexture){const qt=k.get(P),Ri=k.get(j),Bt=k.get(qt.__renderTarget),Pi=k.get(Ri.__renderTarget);He.bindFramebuffer(Z.READ_FRAMEBUFFER,Bt.__webglFramebuffer),He.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let Xi=0;Xi<it;Xi++)cr&&(Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,k.get(P).__webglTexture,le,yt+Xi),Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,k.get(j).__webglTexture,Ge,Wt+Xi)),Z.blitFramebuffer(ot,_t,Ke,ze,st,Pt,Ke,ze,Z.DEPTH_BUFFER_BIT,Z.NEAREST);He.bindFramebuffer(Z.READ_FRAMEBUFFER,null),He.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else if(le!==0||P.isRenderTargetTexture||k.has(P)){const qt=k.get(P),Ri=k.get(j);He.bindFramebuffer(Z.READ_FRAMEBUFFER,Le),He.bindFramebuffer(Z.DRAW_FRAMEBUFFER,Ae);for(let Bt=0;Bt<it;Bt++)cr?Z.framebufferTextureLayer(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,qt.__webglTexture,le,yt+Bt):Z.framebufferTexture2D(Z.READ_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,qt.__webglTexture,le),Ot?Z.framebufferTextureLayer(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Ri.__webglTexture,Ge,Wt+Bt):Z.framebufferTexture2D(Z.DRAW_FRAMEBUFFER,Z.COLOR_ATTACHMENT0,Z.TEXTURE_2D,Ri.__webglTexture,Ge),le!==0?Z.blitFramebuffer(ot,_t,Ke,ze,st,Pt,Ke,ze,Z.COLOR_BUFFER_BIT,Z.NEAREST):Ot?Z.copyTexSubImage3D(qe,Ge,st,Pt,Wt+Bt,ot,_t,Ke,ze):Z.copyTexSubImage2D(qe,Ge,st,Pt,ot,_t,Ke,ze);He.bindFramebuffer(Z.READ_FRAMEBUFFER,null),He.bindFramebuffer(Z.DRAW_FRAMEBUFFER,null)}else Ot?P.isDataTexture||P.isData3DTexture?Z.texSubImage3D(qe,Ge,st,Pt,Wt,Ke,ze,it,zt,un,Zt.data):j.isCompressedArrayTexture?Z.compressedTexSubImage3D(qe,Ge,st,Pt,Wt,Ke,ze,it,zt,Zt.data):Z.texSubImage3D(qe,Ge,st,Pt,Wt,Ke,ze,it,zt,un,Zt):P.isDataTexture?Z.texSubImage2D(Z.TEXTURE_2D,Ge,st,Pt,Ke,ze,zt,un,Zt.data):P.isCompressedTexture?Z.compressedTexSubImage2D(Z.TEXTURE_2D,Ge,st,Pt,Zt.width,Zt.height,zt,Zt.data):Z.texSubImage2D(Z.TEXTURE_2D,Ge,st,Pt,Ke,ze,zt,un,Zt);He.pixelStorei(Z.UNPACK_ROW_LENGTH,Ln),He.pixelStorei(Z.UNPACK_IMAGE_HEIGHT,Et),He.pixelStorei(Z.UNPACK_SKIP_PIXELS,$n),He.pixelStorei(Z.UNPACK_SKIP_ROWS,Kn),He.pixelStorei(Z.UNPACK_SKIP_IMAGES,Tt),Ge===0&&j.generateMipmaps&&Z.generateMipmap(qe),He.unbindTexture()},this.initRenderTarget=function(P){k.get(P).__webglFramebuffer===void 0&&R.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?R.setTextureCube(P,0):P.isData3DTexture?R.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?R.setTexture2DArray(P,0):R.setTexture2D(P,0),He.unbindTexture()},this.resetState=function(){ne=0,se=0,X=null,He.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Rt._getUnpackColorSpace()}}class sT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"threeCanvas");U(this,"scene");U(this,"camera");U(this,"renderer");U(this,"videoTexture",null);U(this,"videoElement",null);U(this,"plane",null);U(this,"time",0);U(this,"uniforms");U(this,"targetAmplitude",.3);U(this,"targetFrequency",100);U(this,"currentAmplitude",.3);U(this,"currentFrequency",100);U(this,"clapVibration",0);this.canvas=e,this.ctx=t,this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.scene=new cs,this.camera=new Ya(-1,1,1,-1,0,1),this.renderer=new us({canvas:this.threeCanvas,alpha:!1,antialias:!1}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const i=new Hd(new Uint8Array([0,0,0,255]),1,1,gi);i.needsUpdate=!0,this.uniforms={uTime:{value:0},uTexture:{value:i},uAmplitude:{value:.3},uFrequency:{value:100},uColorIntensity:{value:.8},uColor1:{value:new $e("#6366f1")},uColor2:{value:new $e("#8b5cf6")},uColor3:{value:new $e("#d946ef")},uColor4:{value:new $e("#ec4899")},uColor5:{value:new $e("#f43f5e")}};const s=new an({uniforms:this.uniforms,vertexShader:this.getVertexShader(),fragmentShader:this.getFragmentShader()}),o=new Rr(2,2);this.plane=new ln(o,s),this.scene.add(this.plane),console.log("🎥 DistortedCameraRenderer initialized")}setVideoElement(e){if(!e){console.warn("DistortedCameraRenderer: No video element provided");return}this.videoElement===e&&this.videoTexture||(this.videoElement=e,this.videoTexture&&this.videoTexture.dispose(),this.videoTexture=new XS(e),this.videoTexture.minFilter=dn,this.videoTexture.magFilter=dn,this.videoTexture.format=gi,this.uniforms.uTexture.value=this.videoTexture,console.log("✅ DistortedCameraRenderer: Video texture created"))}getVertexShader(){return`
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
    `}render(e,t,i){if(!this.plane)return;(this.canvas.width!==this.threeCanvas.width||this.canvas.height!==this.threeCanvas.height)&&(this.threeCanvas.width=this.canvas.width,this.threeCanvas.height=this.canvas.height,this.renderer.setSize(this.canvas.width,this.canvas.height)),this.time+=.016*_n(),this.uniforms.uTime.value=this.time,t&&t.length>0&&(this.uniforms.uColor1.value.set(t[0]),this.uniforms.uColor2.value.set(t[1]||t[0]),this.uniforms.uColor3.value.set(t[2]||t[0]),this.uniforms.uColor4.value.set(t[3]||t[0]),this.uniforms.uColor5.value.set(t[4]||t[0]));const s=e.left,o=e.right;if(s||o)if(e.clapping)this.targetAmplitude=2,this.targetFrequency=300,this.clapVibration=1;else{const u=s||o;if(u){const f=50+Math.max(0,Math.min(1,u.position.x))*350,g=Math.max(0,Math.min(1,1-u.position.y))*1.5,m=u.fingerCount||0;u.gesture==="pinch"||m<=1?(this.targetAmplitude=g*.2,this.targetFrequency=f*.5):(this.targetAmplitude=g,this.targetFrequency=f)}}else this.targetAmplitude=.5,this.targetFrequency=150;this.currentAmplitude+=(this.targetAmplitude-this.currentAmplitude)*.1,this.currentFrequency+=(this.targetFrequency-this.currentFrequency)*.1,this.clapVibration*=.95;const c=this.currentAmplitude+this.clapVibration*Math.sin(this.time*50)*.5;this.uniforms.uAmplitude.value=c,this.uniforms.uFrequency.value=this.currentFrequency,this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){this.videoTexture&&this.videoTexture.dispose(),this.plane&&(this.plane.geometry.dispose(),this.plane.material instanceof Wi&&this.plane.material.dispose()),this.renderer.dispose(),this.renderer.forceContextLoss(),console.log("🎥 DistortedCameraRenderer destroyed")}}class aT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"streams",[]);U(this,"vanishingPoint",{x:0,y:0});U(this,"targetVanishingPoint",{x:0,y:0});U(this,"vanishingPointRight",{x:0,y:0});U(this,"targetVanishingPointRight",{x:0,y:0});U(this,"scanLineOffset",0);U(this,"clapAccumulation",0);U(this,"shakeIntensity",0);U(this,"time",0);U(this,"lastFingerCount",5);this.canvas=e,this.ctx=t,this.vanishingPoint.x=e.width*.3,this.vanishingPoint.y=e.height/2,this.targetVanishingPoint.x=this.vanishingPoint.x,this.targetVanishingPoint.y=this.vanishingPoint.y,this.vanishingPointRight.x=e.width*.7,this.vanishingPointRight.y=e.height/2,this.targetVanishingPointRight.x=this.vanishingPointRight.x,this.targetVanishingPointRight.y=this.vanishingPointRight.y;for(let i=0;i<6;i++)this.streams.push({angle:i/6*Math.PI*2,speed:1,packets:[],branchLevel:0})}render(e,t){const{width:i,height:s}=this.canvas;this.time+=.016*_n();const o=e.left,c=e.right,u=e.clapping||!1,h=e.clapIntensity||0;let f=1,p=1,g=5;o&&c?g=Math.floor(((o.fingerCount||5)+(c.fingerCount||5))/2):(o||c)&&(g=(o||c).fingerCount||5),this.lastFingerCount=g,g===1?(f=.003,p=.3):g===2?(f=.5,p=.7):(f=2,p=2.5),u?(this.clapAccumulation=Math.min(10,this.clapAccumulation+h*2),this.shakeIntensity=this.clapAccumulation*3,this.clapAccumulation>2&&Math.random()<.3&&this.spawnFractalBranch()):(this.clapAccumulation*=.98,this.shakeIntensity*=.9),o?(this.targetVanishingPoint.x=o.position.x*i,this.targetVanishingPoint.y=o.position.y*s):(this.targetVanishingPoint.x=i*.3,this.targetVanishingPoint.y=s/2),c?(this.targetVanishingPointRight.x=c.position.x*i,this.targetVanishingPointRight.y=c.position.y*s):(this.targetVanishingPointRight.x=i*.7,this.targetVanishingPointRight.y=s/2),this.vanishingPoint.x+=(this.targetVanishingPoint.x-this.vanishingPoint.x)*.05,this.vanishingPoint.y+=(this.targetVanishingPoint.y-this.vanishingPoint.y)*.05,this.vanishingPointRight.x+=(this.targetVanishingPointRight.x-this.vanishingPointRight.x)*.05,this.vanishingPointRight.y+=(this.targetVanishingPointRight.y-this.vanishingPointRight.y)*.05;let m=0,y=0;this.shakeIntensity>.5&&(m=(Math.random()-.5)*this.shakeIntensity,y=(Math.random()-.5)*this.shakeIntensity),this.ctx.fillStyle="rgba(0, 0, 0, 0.15)",this.ctx.fillRect(0,0,i,s),this.ctx.save(),this.ctx.translate(m,y),this.streams.forEach((_,S)=>{const b=.05*p*(_.branchLevel===0?1:.5);if(Math.random()<b){const E=["rect","hex","diamond"];_.packets.push({x:this.vanishingPoint.x,y:this.vanishingPoint.y,z:0,width:4+Math.random()*8,height:20+Math.random()*40,rotation:_.angle+(Math.random()-.5)*.3,rotationSpeed:(Math.random()-.5)*.02*f,streamIndex:S,age:0,hue:Math.random()*360,shimmerPhase:Math.random()*Math.PI*2,panelType:E[Math.floor(Math.random()*3)],waveAmplitude:Math.random()*10,waveFrequency:Math.random()*2+1,quantumPhase:Math.random()*Math.PI*2,particleCloud:[]})}_.packets=_.packets.filter(E=>{E.age+=.016*f,E.z+=.01*f*(1+_.branchLevel*.2),E.rotation+=E.rotationSpeed;const C=200*E.z,I=Math.sin(E.age*2+S)*30*E.z;return E.x=this.vanishingPoint.x+Math.cos(_.angle)*C+Math.sin(E.age*3)*I,E.y=this.vanishingPoint.y+Math.sin(_.angle)*C+Math.cos(E.age*2.5)*I,E.z<1&&E.x>-100&&E.x<i+100&&E.y>-100&&E.y<s+100})});const x=this.streams.flatMap(_=>_.packets);x.sort((_,S)=>_.z-S.z),x.forEach(_=>{const S=.2+_.z*.8,b=.3+_.z*.7,E=Math.sin(this.time*10+_.quantumPhase)*3*(1-_.z),C=Math.cos(_.age*_.waveFrequency)*E,I=Math.sin(_.age*_.waveFrequency)*E;this.ctx.save(),this.ctx.translate(_.x+C,_.y+I);const A=Math.floor(_.streamIndex%t.length),N=t[A],T=_.width*S,F=_.height*S;_.particleCloud.length<20&&Math.random()<.3&&_.particleCloud.push({dx:(Math.random()-.5)*T*2,dy:(Math.random()-.5)*F*2,life:1}),_.particleCloud=_.particleCloud.filter(D=>{if(D.life-=.02,D.life>0){const G=Math.sin(this.time*5+D.dx+D.dy)*.5+.5;return this.ctx.globalAlpha=b*D.life*.4*G,this.ctx.fillStyle=N,this.ctx.beginPath(),this.ctx.arc(D.dx,D.dy,1.5*S,0,Math.PI*2),this.ctx.fill(),!0}return!1}),this.ctx.globalAlpha=b*.8;const z=this.ctx.createRadialGradient(0,0,0,0,0,Math.max(T,F));z.addColorStop(0,this.addAlpha(N,.8)),z.addColorStop(.3,this.addAlpha(N,.4)),z.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.fillStyle=z,this.ctx.beginPath(),this.ctx.arc(0,0,Math.max(T,F),0,Math.PI*2),this.ctx.fill(),this.ctx.globalAlpha=b*.6,this.ctx.strokeStyle=N,this.ctx.lineWidth=1.5*S;for(let D=0;D<3;D++){this.ctx.beginPath();const G=D*Math.PI*.66,ne=(this.time*50+_.age*30+G*20)%(Math.max(T,F)*2);ne>0&&(this.ctx.globalAlpha=b*(1-ne/(Math.max(T,F)*2))*.5,this.ctx.arc(0,0,ne,0,Math.PI*2),this.ctx.stroke())}this.ctx.globalAlpha=b*.4,this.ctx.strokeStyle=N,this.ctx.lineWidth=.8*S;for(let D=0;D<6;D++){const G=D/6*Math.PI*2+this.time*.5,ne=(Math.sin(this.time*2+D)*.5+1)*F*.8;this.ctx.beginPath(),this.ctx.moveTo(0,0);const se=Math.cos(G+.3)*ne*.6,X=Math.sin(G+.3)*ne*.6,V=Math.cos(G)*ne,Y=Math.sin(G)*ne;this.ctx.quadraticCurveTo(se,X,V,Y),this.ctx.stroke(),this.ctx.globalAlpha=b*.8,this.ctx.fillStyle=N,this.ctx.beginPath(),this.ctx.arc(V,Y,2*S,0,Math.PI*2),this.ctx.fill()}if(this.ctx.shadowBlur=20*S,this.ctx.shadowColor=N,this.ctx.globalAlpha=b,this.ctx.fillStyle=N,this.ctx.beginPath(),this.ctx.arc(0,0,3*S,0,Math.PI*2),this.ctx.fill(),this.ctx.shadowBlur=0,this.ctx.globalAlpha=b*.9,this.ctx.fillStyle="white",this.ctx.beginPath(),this.ctx.arc(0,0,1.5*S,0,Math.PI*2),this.ctx.fill(),Math.random()<.05){const D=Math.random()*Math.PI*2,G=Math.random()*Math.max(T,F)*1.5;this.ctx.globalAlpha=b*.6,this.ctx.strokeStyle=N,this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(0,0),this.ctx.lineTo(Math.cos(D)*G,Math.sin(D)*G),this.ctx.stroke()}this.ctx.restore()}),this.ctx.globalAlpha=.05;for(let _=0;_<8;_++){const S=_/8*Math.PI*2,b=Math.max(i,s);this.ctx.strokeStyle=t[_%t.length]||"#00ffff",this.ctx.lineWidth=1,this.ctx.beginPath(),this.ctx.moveTo(this.vanishingPoint.x,this.vanishingPoint.y);const E=50;for(let C=0;C<=E;C++){const I=C/E,A=b*I,N=Math.sin(I*10+this.time*2)*20,T=this.vanishingPoint.x+Math.cos(S)*A+Math.cos(S+Math.PI/2)*N,F=this.vanishingPoint.y+Math.sin(S)*A+Math.sin(S+Math.PI/2)*N;C===0?this.ctx.moveTo(T,F):this.ctx.lineTo(T,F)}this.ctx.stroke()}for(let _=50;_<Math.max(i,s);_+=80){const S=_/100,b=Math.sin(this.time*2+S)*5;this.ctx.globalAlpha=.04,this.ctx.strokeStyle=t[Math.floor(S)%t.length]||"#00ffff",this.ctx.lineWidth=1,this.ctx.beginPath();const E=60;for(let C=0;C<=E;C++){const I=C/E*Math.PI*2,A=_+Math.sin(I*6+this.time*3)*b,N=this.vanishingPoint.x+Math.cos(I)*A,T=this.vanishingPoint.y+Math.sin(I)*A;C===0?this.ctx.moveTo(N,T):this.ctx.lineTo(N,T)}this.ctx.closePath(),this.ctx.stroke()}this.ctx.restore(),this.ctx.globalAlpha=.02;for(let _=0;_<100;_++){const S=Math.random()*i,b=Math.random()*s;Math.sin(this.time*20+_)*.5+.5>.7&&(this.ctx.fillStyle=t[_%t.length]||"#00ffff",this.ctx.beginPath(),this.ctx.arc(S,b,1,0,Math.PI*2),this.ctx.fill())}if(this.shakeIntensity>5){this.ctx.globalCompositeOperation="screen";for(let _=0;_<3;_++){this.ctx.globalAlpha=.05;const S=this.ctx.createRadialGradient(this.vanishingPoint.x,this.vanishingPoint.y,0,this.vanishingPoint.x,this.vanishingPoint.y,Math.max(i,s)*(.3+_*.2)),b=(this.time*100+_*120)%360;S.addColorStop(0,`hsla(${b}, 100%, 50%, 0.3)`),S.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.fillStyle=S,this.ctx.fillRect(0,0,i,s)}this.ctx.globalCompositeOperation="source-over"}const w=(_,S,b,E,C)=>{const I=5+Math.sin(this.time*4)*3,A=t[b]||"#00ffff";for(let T=0;T<3;T++){const F=I*(2+T),z=.3-T*.1;this.ctx.globalAlpha=z,this.ctx.strokeStyle=A,this.ctx.lineWidth=2,this.ctx.beginPath(),this.ctx.arc(_,S,F,this.time*(1+T*.5),this.time*(1+T*.5)+Math.PI*1.5),this.ctx.stroke()}const N=this.ctx.createRadialGradient(_,S,0,_,S,I*4);if(N.addColorStop(0,this.addAlpha(A,.9)),N.addColorStop(.5,this.addAlpha(A,.5)),N.addColorStop(1,"rgba(0, 0, 0, 0)"),this.ctx.globalAlpha=.9,this.ctx.fillStyle=N,this.ctx.beginPath(),this.ctx.arc(_,S,I*4,0,Math.PI*2),this.ctx.fill(),this.ctx.globalAlpha=1,this.ctx.fillStyle="white",this.ctx.shadowBlur=15,this.ctx.shadowColor=A,this.ctx.beginPath(),this.ctx.arc(_,S,I,0,Math.PI*2),this.ctx.fill(),this.ctx.shadowBlur=0,this.clapAccumulation>.5){const T=this.clapAccumulation/10;for(let F=0;F<5;F++){const z=(this.time*3+F*.5)%2,D=20+z*100+this.clapAccumulation*20,G=(1-z/2)*T;this.ctx.globalAlpha=G*.5,this.ctx.strokeStyle=t[F%t.length]||"#00ffff",this.ctx.lineWidth=3,this.ctx.beginPath(),this.ctx.arc(_,S,D,0,Math.PI*2),this.ctx.stroke()}for(let F=0;F<Math.floor(this.clapAccumulation*5);F++){const z=F/(this.clapAccumulation*5)*Math.PI*2,D=30+Math.sin(this.time*5+F)*20,G=_+Math.cos(z+this.time*2)*D,ne=S+Math.sin(z+this.time*2)*D;this.ctx.globalAlpha=T*.7,this.ctx.fillStyle=t[F%t.length]||"#00ffff",this.ctx.beginPath(),this.ctx.arc(G,ne,2,0,Math.PI*2),this.ctx.fill()}}if(E){this.ctx.globalAlpha=1,this.ctx.fillStyle="white",this.ctx.font="12px monospace",this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.ctx.shadowBlur=8,this.ctx.shadowColor="rgba(0, 0, 0, 0.8)";const T=`X:${Math.floor(_)} Y:${Math.floor(S)}`;this.ctx.fillText(T,_,S-8);const F=new Date,z=F.toLocaleDateString("en-US",{month:"2-digit",day:"2-digit",year:"numeric"}),D=F.toLocaleTimeString("en-US",{hour12:!1}),G=`${z} - ${D}`;this.ctx.fillText(G,_,S+8),this.ctx.shadowBlur=0}};w(this.vanishingPoint.x,this.vanishingPoint.y,0,!!o),c&&w(this.vanishingPointRight.x,this.vanishingPointRight.y,1,!0)}spawnFractalBranch(){if(this.streams.length>30)return;const e=this.streams[Math.floor(Math.random()*Math.min(6,this.streams.length))],t=e.angle+(Math.random()-.5)*.8;this.streams.push({angle:t,speed:1.2,packets:[],branchLevel:(e.branchLevel||0)+1,parentAngle:e.angle})}drawHexagon(e,t,i){this.ctx.beginPath();for(let s=0;s<6;s++){const o=Math.PI/3*s,c=e+i*Math.cos(o),u=t+i*Math.sin(o);s===0?this.ctx.moveTo(c,u):this.ctx.lineTo(c,u)}this.ctx.closePath()}addAlpha(e,t){if(e.startsWith("#")){const i=parseInt(e.slice(1,3),16),s=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16);return`rgba(${i}, ${s}, ${o}, ${t})`}return e}}class oT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"particles",[]);U(this,"config",{baseSize:1.5,gridSpacing:8,distortionRadius:200,distortionStrength:0,friction:.9,ease:.1});U(this,"faceData",[[60,100,1],[70,100,1],[50,110,1],[60,110,1],[70,110,1],[80,110,1],[40,120,1],[50,120,2],[60,120,1],[70,120,1],[80,120,2],[90,120,1],[40,130,2],[50,130,3],[60,130,1],[70,130,1],[80,130,3],[90,130,2],[30,140,2],[40,140,3],[50,140,4],[60,140,1],[70,140,1],[80,140,4],[90,140,3],[100,140,2],[20,150,2],[30,150,3],[40,150,3],[50,150,3],[60,150,1],[70,150,1],[80,150,3],[90,150,3],[100,150,3],[110,150,2],[30,160,2],[40,160,3],[50,160,2],[80,160,2],[90,160,3],[100,160,2],[40,170,2],[50,170,2],[80,170,2],[90,170,2],[40,180,1],[50,180,1],[80,180,1],[90,180,1],[40,190,1],[50,190,2],[80,190,2],[90,190,1],[50,200,2],[80,200,2],[50,210,1],[60,210,1],[70,210,1],[80,210,1],[50,220,1],[60,220,2],[70,220,2],[80,220,1],[60,230,3],[70,230,3],[60,240,4],[70,240,4],[60,250,3],[70,250,3],[60,260,2],[70,260,2]]);this.canvas=e,this.ctx=t,this.createParticles()}createParticles(){this.particles=[];const e=this.canvas.width/2,t=this.canvas.height/2,i=275,s=14,o=1.2,c=this.config.baseSize*o;for(let u=t-i;u<t+i;u+=s)for(let h=e-i;h<e+i;h+=s)Math.sqrt((h-e)**2+(u-t)**2)<i&&this.particles.push({originX:h,originY:u,x:h,y:u,vx:0,vy:0,intensity:o,size:c,currentSize:c})}render(e,t){var c,u;t[1]&&(t[1].toLowerCase()==="#ffffff"||t[1].toLowerCase()==="#fff")?this.ctx.fillStyle="#000000":this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);const s=e.left||e.right;if(s){const h=(((c=s.position)==null?void 0:c.x)||.5)*this.canvas.width,f=(((u=s.position)==null?void 0:u.y)||.5)*this.canvas.height;let p=0;const g=s.fingerCount||2;s.gesture==="pinch"||g===1?p=5:g===2?p=20:g>=5?p=50:p=15+(g-2)*10,this.config.distortionStrength+=(p-this.config.distortionStrength)*.1,this.particles.forEach(m=>{const y=h-m.x,x=f-m.y,w=Math.sqrt(y*y+x*x);if(w<this.config.distortionRadius){const b=(this.config.distortionRadius-w)/this.config.distortionRadius,E=Math.atan2(x,y),C=Math.cos(E)*b*this.config.distortionStrength,I=Math.sin(E)*b*this.config.distortionStrength;m.vx-=C,m.vy-=I,m.currentSize=m.size+b*4*Math.abs(this.config.distortionStrength/10)}else m.currentSize=m.size;const _=m.originX-m.x,S=m.originY-m.y;m.vx+=_*this.config.ease,m.vy+=S*this.config.ease,m.vx*=this.config.friction,m.vy*=this.config.friction,m.x+=m.vx,m.y+=m.vy})}else this.config.distortionStrength*=.9,this.particles.forEach(h=>{const f=h.originX-h.x,p=h.originY-h.y;h.vx+=f*this.config.ease,h.vy+=p*this.config.ease,h.vx*=this.config.friction,h.vy*=this.config.friction,h.x+=h.vx,h.y+=h.vy,h.currentSize=h.size});if(e.clapping){const h=this.canvas.width/2,f=this.canvas.height/2;this.particles.forEach(p=>{const g=p.x-h,m=p.y-f,y=Math.sqrt(g*g+m*m),x=30;p.vx+=g/(y+1)*x,p.vy+=m/(y+1)*x})}const o=t[0]||"#FFFFFF";this.particles.forEach(h=>{this.ctx.fillStyle=o,this.ctx.globalAlpha=.85;const f=Math.max(.5,h.currentSize);this.ctx.fillRect(h.x-f/2,h.y-f/2,f,f)}),this.ctx.globalAlpha=1}}const sn=class sn{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"faceLandmarker",null);U(this,"isLoading",!0);U(this,"lastVideoTime",-1);U(this,"results");U(this,"video",null);U(this,"hasFailed",!1);U(this,"isLocalInitializing",!1);U(this,"drawingUtils",null);U(this,"initAttempts",0);U(this,"maxInitAttempts",60);U(this,"FACE_TESSELATION",[[127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,129],[129,49],[49,209],[131,29],[29,52],[52,131],[43,106],[106,204],[204,43],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[33,168],[168,8],[8,33],[228,117],[117,31],[31,228],[107,189],[189,55],[55,107],[126,217],[217,1],[1,126],[233,79],[79,218],[218,233],[35,154],[154,26],[26,35],[125,129],[129,49],[49,125],[52,131],[131,29],[29,52],[169,106],[106,43],[43,169],[6,74],[74,184],[184,6],[191,80],[80,183],[183,191],[43,106],[106,204],[204,43]]);this.canvas=e,this.ctx=t,console.log("👤 FaceRenderer initialized"),this.initializeMediaPipe()}async initializeMediaPipe(){if(!(this.isLocalInitializing||this.hasFailed)){this.isLocalInitializing=!0;try{if(this.initAttempts++,this.video=document.querySelector("video"),!this.video||!this.video.srcObject){this.isLocalInitializing=!1,this.initAttempts<this.maxInitAttempts?setTimeout(()=>this.initializeMediaPipe(),1e3):(console.error("❌ Max retry attempts reached."),this.hasFailed=!0,this.isLoading=!1);return}if(sn.isGlobalInitializing){console.log("⏳ Waiting for global init..."),this.isLocalInitializing=!1,setTimeout(()=>this.initializeMediaPipe(),500);return}if(!sn.filesetResolver){sn.isGlobalInitializing=!0,console.log("📦 Loading MediaPipe modules...");const t=await vx(()=>import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14"),[],import.meta.url);sn.faceLandmarkerClass=t.FaceLandmarker,sn.drawingUtilsClass=t.DrawingUtils,sn.filesetResolver=await t.FilesetResolver.forVisionTasks("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm"),console.log("🔧 WASM initialized"),sn.isGlobalInitializing=!1}const e="https://raw.githubusercontent.com/NPC-88/3dfiles/9d9b1c903c6397d41d71ad993f114bbce9fe5db6/face_landmarker.task";if(!this.faceLandmarker)try{this.faceLandmarker=await sn.faceLandmarkerClass.createFromOptions(sn.filesetResolver,{baseOptions:{modelAssetPath:e,delegate:"GPU"},outputFaceBlendshapes:!1,outputFacialTransformationMatrixes:!1,runningMode:"VIDEO",numFaces:1}),console.log("✅ Face tracking initialized (GPU)")}catch{console.warn("GPU failed, trying CPU..."),this.faceLandmarker=await sn.faceLandmarkerClass.createFromOptions(sn.filesetResolver,{baseOptions:{modelAssetPath:e,delegate:"CPU"},outputFaceBlendshapes:!1,outputFacialTransformationMatrixes:!1,runningMode:"VIDEO",numFaces:1}),console.log("✅ Face tracking initialized (CPU)")}sn.drawingUtilsClass&&(this.drawingUtils=new sn.drawingUtilsClass(this.ctx)),this.isLoading=!1,this.isLocalInitializing=!1}catch(e){console.error("❌ Failed to initialize MediaPipe:",e),this.hasFailed=!0,this.isLoading=!1,this.isLocalInitializing=!1,sn.isGlobalInitializing=!1}}}render(e,t,i){if(this.hasFailed){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#ff4444",this.ctx.font="18px monospace",this.ctx.textAlign="center",this.ctx.fillText("Initialization Failed",this.canvas.width/2,this.canvas.height/2),this.ctx.font="14px monospace",this.ctx.fillStyle="#ff8888",this.ctx.fillText("Refresh the page to try again",this.canvas.width/2,this.canvas.height/2+30);return}if(this.isLoading){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#666666",this.ctx.font="20px monospace",this.ctx.textAlign="center",this.ctx.fillText("Initializing Face Model...",this.canvas.width/2,this.canvas.height/2),this.ctx.font="14px monospace",this.ctx.fillStyle="#888888",this.ctx.fillText("Press Q to enable camera if needed",this.canvas.width/2,this.canvas.height/2+30);return}if(!this.faceLandmarker||!this.video||!this.drawingUtils){if(!this.isLocalInitializing&&!this.hasFailed){const p=document.querySelector("video");p&&p.srcObject&&(console.log("📹 Video found during render, triggering init once..."),this.initializeMediaPipe())}this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.fillStyle="#666666",this.ctx.font="18px monospace",this.ctx.textAlign="center",this.ctx.fillText("Waiting for camera...",this.canvas.width/2,this.canvas.height/2),this.ctx.font="14px monospace",this.ctx.fillStyle="#888888",this.ctx.fillText("Press Q to enable camera",this.canvas.width/2,this.canvas.height/2+30);return}const s=performance.now();if(this.lastVideoTime!==this.video.currentTime){this.lastVideoTime=this.video.currentTime;try{this.results=this.faceLandmarker.detectForVideo(this.video,s)}catch(p){console.error("Face detection error:",p)}}this.ctx.save(),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);const o=performance.now(),c=Math.abs(Math.sin(o*.002)),u=.1+.6*c,h=15*c,f=t[0]||"#00d2ff";if(this.results&&this.results.faceLandmarks&&this.results.faceLandmarks.length>0)for(const p of this.results.faceLandmarks)this.ctx.shadowColor=f,this.ctx.shadowBlur=h,this.drawingUtils.drawConnectors(p,sn.faceLandmarkerClass.FACE_LANDMARKS_TESSELATION,{color:`rgba(255, 255, 255, ${u})`,lineWidth:1}),this.ctx.shadowBlur=0;else this.ctx.fillStyle="#666666",this.ctx.font="16px monospace",this.ctx.textAlign="center",this.ctx.fillText("No Face Detected",this.canvas.width/2,this.canvas.height/2),this.ctx.font="12px monospace",this.ctx.fillStyle="#888888",this.ctx.fillText("Position your face in front of the camera",this.canvas.width/2,this.canvas.height/2+25);this.ctx.restore()}resize(e,t){}destroy(){this.faceLandmarker&&(this.faceLandmarker.close(),this.faceLandmarker=null),console.log("👤 FaceRenderer destroyed")}};U(sn,"filesetResolver",null),U(sn,"faceLandmarkerClass",null),U(sn,"drawingUtilsClass",null),U(sn,"isGlobalInitializing",!1);let gd=sn;function Qc(a,e){a.traverse(t=>{if(t instanceof ln||t instanceof Tr||t instanceof Hx){t.geometry.dispose();const i=t.material;Array.isArray(i)?i.forEach(s=>s.dispose()):i.dispose()}}),a.clear(),e.dispose(),e.forceContextLoss()}class lT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"threeCanvas");U(this,"scene");U(this,"camera");U(this,"renderer");U(this,"sphere");U(this,"particleMesh");U(this,"pointLight");U(this,"pointLight2");U(this,"originalPositions",[]);U(this,"time",0);U(this,"handX",.5);U(this,"handY",.5);U(this,"pinchDistance",1);U(this,"SPHERE_RADIUS",1.5);U(this,"DETAIL",4);U(this,"CHAOS_MULTIPLIER",1.5);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances of Three")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.initThreeJS(),console.log("🌐 MorphingSphereRenderer initialized with Three.js"),console.warn=i}initThreeJS(){this.scene=new cs,this.scene.fog=new Qo(0,.05),this.camera=new An(75,this.canvas.width/this.canvas.height,.1,1e3),this.camera.position.set(0,0,5),this.camera.lookAt(0,0,0),this.renderer=new us({canvas:this.threeCanvas,antialias:!0,alpha:!0}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=new Yx(4210752);this.scene.add(e),this.pointLight=new Wc(65484,2,50),this.pointLight.position.set(5,5,5),this.scene.add(this.pointLight),this.pointLight2=new Wc(3342591,2,50),this.pointLight2.position.set(-5,-5,5),this.scene.add(this.pointLight2);const t=new Wd(this.SPHERE_RADIUS,this.DETAIL),i=t.attributes.position;for(let f=0;f<i.count;f++)this.originalPositions.push(new Q(i.getX(f),i.getY(f),i.getZ(f)));const s=new Xx({color:1118481,wireframe:!0,emissive:3342591,emissiveIntensity:.5,roughness:.4,metalness:.8});this.sphere=new ln(t,s),this.scene.add(this.sphere);const o=new on,c=1e3,u=new Float32Array(c*3);for(let f=0;f<c*3;f++)u[f]=(Math.random()-.5)*20;o.setAttribute("position",new vn(u,3));const h=new as({size:.02,color:16777215,transparent:!0,opacity:.5});this.particleMesh=new Tr(o,h),this.scene.add(this.particleMesh)}noise(e,t,i){return Math.sin(e)*Math.cos(t)*Math.sin(i)}calculatePinch(e){if(!e||!e.landmarks)return 1;const t=e.landmarks[4],i=e.landmarks[8],s=Math.sqrt(Math.pow(t.x-i.x,2)+Math.pow(t.y-i.y,2));return Math.min(Math.max((s-.02)*5,0),1)}updateState(e){const t=e.left,i=e.right,s=this.calculatePinch(t),o=this.calculatePinch(i),u=Math.min(s,o);this.pinchDistance+=(u-this.pinchDistance)*.1;let h=.5,f=.5;t&&t.position?(h=t.position.x,f=t.position.y):i&&i.position&&(h=i.position.x,f=i.position.y),this.handX+=(h-this.handX)*.1,this.handY+=(f-this.handY)*.1,!t&&!i&&(this.handX+=(.5-this.handX)*.05,this.handY+=(.5-this.handY)*.05,this.pinchDistance+=(1-this.pinchDistance)*.05)}render(e,t){this.time+=.02*_n(),this.updateState(e);const i=this.renderer.getPixelRatio(),s=Math.floor(this.canvas.width*i),o=Math.floor(this.canvas.height*i);(this.threeCanvas.width!==s||this.threeCanvas.height!==o)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=s,this.threeCanvas.height=o,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix()),this.renderer.clear();const c=(this.handX-.5)*4,u=(.5-this.handY)*3;this.sphere.position.x+=(c-this.sphere.position.x)*.15,this.sphere.position.y+=(u-this.sphere.position.y)*.15;const h=(this.handY-.5)*2,f=(this.handX-.5)*2;this.sphere.rotation.x+=(h-this.sphere.rotation.x)*.05,this.sphere.rotation.y+=(f-this.sphere.rotation.y)*.05,this.sphere.rotation.z+=.005;const p=this.sphere.geometry.attributes.position,g=(1-this.pinchDistance)*this.CHAOS_MULTIPLIER,m=Math.sin(this.time)*.1;for(let x=0;x<p.count;x++){const w=this.originalPositions[x],_=this.noise(w.x*2+this.time,w.y*2+this.time,w.z*2),S=1+m+_*g;p.setXYZ(x,w.x*S,w.y*S,w.z*S)}p.needsUpdate=!0;const y=this.sphere.material;if(t&&t.length>0)try{const x=new $e(t[0]),w=new $e(t[0]);y.color=x,y.emissive=w.multiplyScalar(.3+g*.4);const _=new $e(t[0]),S=t.length>1?new $e(t[1]):new $e(t[0]);this.pointLight.color=_,this.pointLight2.color=S}catch{y.color.setHex(65484),y.emissive.setHex(13107),this.pointLight.color.setHex(65484),this.pointLight2.color.setHex(3342591)}else y.color.setHex(65484),y.emissive.setHex(13107),this.pointLight.color.setHex(65484),this.pointLight2.color.setHex(3342591);this.pointLight.position.x=(this.handX-.5)*10,this.pointLight.position.y=(.5-this.handY)*10,this.particleMesh.rotation.y=-this.time*.1,this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){Qc(this.scene,this.renderer)}}class cT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"threeCanvas");U(this,"scene");U(this,"camera");U(this,"renderer");U(this,"instancedMesh");U(this,"gridWidth");U(this,"gridHeight");U(this,"cubePositions",[]);U(this,"time",0);U(this,"hands",[]);U(this,"speedMultiplier",1);U(this,"handsTogetherBoost",1);U(this,"currentFingerMode","slow");U(this,"GRID_WIDTH",120);U(this,"GRID_HEIGHT",90);U(this,"SPACING",.12);U(this,"WAVE_AMPLITUDE",2.5);U(this,"CUBE_SIZE",.03);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances of Three")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.gridWidth=this.GRID_WIDTH,this.gridHeight=this.GRID_HEIGHT,this.initThreeJS(),console.log("🧊 CubeWallRenderer initialized with Three.js"),console.warn=i}initThreeJS(){this.scene=new cs,this.scene.background=new $e(0),this.camera=new An(60,this.canvas.width/this.canvas.height,.1,100),this.camera.position.set(0,0,4.5),this.camera.lookAt(0,0,0),this.renderer=new us({canvas:this.threeCanvas,antialias:!0,alpha:!1}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=new Yx(2105376,.3);this.scene.add(e);const t=new cf(16777215,.8);t.position.set(3,5,8),this.scene.add(t);const i=new cf(4474111,.4);i.position.set(-5,-3,5),this.scene.add(i);const s=new Wc(65484,.6,50);s.position.set(5,5,5),this.scene.add(s);const o=new qa(this.CUBE_SIZE,this.CUBE_SIZE,this.CUBE_SIZE),c=new Xx({color:65535,emissive:8738,emissiveIntensity:.2,metalness:.6,roughness:.4,flatShading:!0}),u=this.gridWidth*this.gridHeight;this.instancedMesh=new HS(o,c,u),this.scene.add(this.instancedMesh);const h=new pn;let f=0;for(let p=0;p<this.gridHeight;p++)for(let g=0;g<this.gridWidth;g++){const m=(g-this.gridWidth/2)*this.SPACING,y=(p-this.gridHeight/2)*this.SPACING,x=0;this.cubePositions.push(new Q(m,y,x)),h.position.set(m,y,x),h.updateMatrix(),this.instancedMesh.setMatrixAt(f,h.matrix),f++}this.instancedMesh.instanceMatrix.needsUpdate=!0}getFingerSpeedMultiplier(e){if(!e||!e.fingerCount)return 0;const t=e.fingerCount;return t<=1?.05:t===2?.3:t>=5?1.5:.3+(t-2)/3*1.2}updateHandData(e){this.hands=[];let t=1;if(e.left){const s=this.getFingerSpeedMultiplier(e.left);t=Math.max(t,s),this.hands.push({x:e.left.position.x,y:1-e.left.position.y,intensity:1,fingerCount:e.left.fingerCount||0})}if(e.right){const s=this.getFingerSpeedMultiplier(e.right);t=Math.max(t,s),this.hands.push({x:e.right.position.x,y:1-e.right.position.y,intensity:1,fingerCount:e.right.fingerCount||0})}this.speedMultiplier+=(t-this.speedMultiplier)*.1;const i=e.clapping||e.distanceBetweenHands&&e.distanceBetweenHands<.15?3:1;if(this.handsTogetherBoost+=(i-this.handsTogetherBoost)*.15,this.hands.length>0){const s=this.hands.reduce((o,c)=>o+c.fingerCount,0);s<=1?this.currentFingerMode="pinch":s>=5?this.currentFingerMode="fast":this.currentFingerMode="slow"}}calculateDisplacement(e,t){let i=0;const s=Math.sin(e*8+this.time)*Math.cos(t*8+this.time)*.05;i+=s;for(const o of this.hands){const c=(o.x-.5)*this.gridWidth*this.SPACING*.8,u=(o.y-.5)*this.gridHeight*this.SPACING*.8,h=e-c,f=t-u,p=Math.sqrt(h*h+f*f),g=Math.sin(p*6-this.time*4)/(p*.5+.5);i+=g*o.intensity*this.WAVE_AMPLITUDE}return i*=this.speedMultiplier*this.handsTogetherBoost,i}render(e,t){this.time+=.016*this.speedMultiplier*_n(),this.updateHandData(e);const i=this.renderer.getPixelRatio(),s=Math.floor(this.canvas.width*i),o=Math.floor(this.canvas.height*i);(this.threeCanvas.width!==s||this.threeCanvas.height!==o)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=s,this.threeCanvas.height=o,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix());const c=new pn;let u=0,h=.5,f=.2;this.currentFingerMode==="pinch"?(h=.02,f=.01):this.currentFingerMode==="slow"?(h=.5,f=.25):this.currentFingerMode==="fast"&&(h=.9,f=.4);for(let p=0;p<this.gridHeight;p++)for(let g=0;g<this.gridWidth;g++){const m=this.cubePositions[u],y=this.calculateDisplacement(m.x,m.y);c.position.set(m.x,m.y,m.z+y),c.rotation.x=y*h,c.rotation.y=y*h*.7,c.rotation.z=y*h*.4;const x=1+Math.abs(y)*f;c.scale.set(x,x,x),c.updateMatrix(),this.instancedMesh.setMatrixAt(u,c.matrix),u++}if(this.instancedMesh.instanceMatrix.needsUpdate=!0,t&&t.length>0)try{const p=this.instancedMesh.material,g=new $e(t[0]);if(p.color=g,p.emissive=new $e(t[0]).multiplyScalar(.3),t.length>1){const m=this.scene.children.find(x=>x instanceof cf&&x.position.x<0),y=this.scene.children.find(x=>x instanceof Wc);m&&(m.color=new $e(t[1])),y&&(y.color=new $e(t.length>2?t[2]:t[1]))}}catch{const g=this.instancedMesh.material;g.color.setHex(65535),g.emissive.setHex(13107)}this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){Qc(this.scene,this.renderer)}}const Fc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Jo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const uT=new Ya(-1,1,1,-1,0,1);class hT extends on{constructor(){super(),this.setAttribute("position",new Kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Kt([0,2,0,0,2,0],2))}}const fT=new hT;class iv{constructor(e){this._mesh=new ln(fT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,uT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class dT extends Jo{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof an?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Vc.clone(e.uniforms),this.material=new an({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new iv(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Xg extends Jo{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const s=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let c,u;this.inverse?(c=0,u=1):(c=1,u=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,c,4294967295),o.buffers.stencil.setClear(u),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class pT extends Jo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class rv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new ut);this._width=i.width,this._height=i.height,t=new si(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new dT(Fc),this.copyPass.material.blending=tr,this.timer=new lM}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let s=0,o=this.passes.length;s<o;s++){const c=this.passes[s];if(c.enabled!==!1){if(c.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),c.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),c.needsSwap){if(i){const u=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(u.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(u.EQUAL,1,4294967295)}this.swapBuffers()}Xg!==void 0&&(c instanceof Xg?i=!0:c instanceof pT&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ut);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class sv extends Jo{constructor(e,t,i=null,s=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new $e}render(e,t,i){const s=e.autoClear;e.autoClear=!1;let o,c;this.overrideMaterial!==null&&(c=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=c),e.autoClear=s}}const mT={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new $e(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Bs extends Jo{constructor(e,t=1,i,s){super(),this.strength=t,this.radius=i,this.threshold=s,this.resolution=e!==void 0?new ut(e.x,e.y):new ut(256,256),this.clearColor=new $e(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);this.renderTargetBright=new si(o,c,{type:xi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let p=0;p<this.nMips;p++){const g=new si(o,c,{type:xi});g.texture.name="UnrealBloomPass.h"+p,g.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(g);const m=new si(o,c,{type:xi});m.texture.name="UnrealBloomPass.v"+p,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),o=Math.round(o/2),c=Math.round(c/2)}const u=mT;this.highPassUniforms=Vc.clone(u.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new an({uniforms:this.highPassUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader}),this.separableBlurMaterials=[];const h=[6,10,14,18,22];o=Math.round(this.resolution.x/2),c=Math.round(this.resolution.y/2);for(let p=0;p<this.nMips;p++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(h[p])),this.separableBlurMaterials[p].uniforms.invSize.value=new ut(1/o,1/c),o=Math.round(o/2),c=Math.round(c/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const f=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=f,this.bloomTintColors=[new Q(1,1,1),new Q(1,1,1),new Q(1,1,1),new Q(1,1,1),new Q(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Vc.clone(Fc.uniforms),this.blendMaterial=new an({uniforms:this.copyUniforms,vertexShader:Fc.vertexShader,fragmentShader:Fc.fragmentShader,premultipliedAlpha:!0,blending:za,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new $e,this._oldClearAlpha=1,this._basic=new $c,this._fsQuad=new iv(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(i,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,s),this.renderTargetsVertical[o].setSize(i,s),this.separableBlurMaterials[o].uniforms.invSize.value=new ut(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(e,t,i,s,o){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const c=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let u=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this._fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=u.texture,this.separableBlurMaterials[h].uniforms.direction.value=Bs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[h]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=Bs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[h]),e.clear(),this._fsQuad.render(e),u=this.renderTargetsVertical[h];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=c}_getSeparableBlurMaterial(e){const t=[],i=e/3;for(let s=0;s<e;s++)t.push(.39894*Math.exp(-.5*s*s/(i*i))/i);return new an({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ut(.5,.5)},direction:{value:new ut(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new an({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}}Bs.BlurDirectionX=new ut(1,0);Bs.BlurDirectionY=new ut(0,1);const gT=/^[og]\s*(.+)?/,xT=/^mtllib /,vT=/^usemtl /,_T=/^usemap /,jg=/\s+/,qg=new Q,gf=new Q,Yg=new Q,$g=new Q,Ti=new Q,Cc=new $e;function yT(){const a={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}const i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(s,o){const c=this._finalize(!1);c&&(c.inherited||c.groupCount<=0)&&this.materials.splice(c.index,1);const u={index:this.materials.length,name:s||"",mtllib:Array.isArray(o)&&o.length>0?o[o.length-1]:"",smooth:c!==void 0?c.smooth:this.smooth,groupStart:c!==void 0?c.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(h){const f={index:typeof h=="number"?h:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return f.clone=this.clone.bind(f),f}};return this.materials.push(u),u},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(s){const o=this.currentMaterial();if(o&&o.groupEnd===-1&&(o.groupEnd=this.geometry.vertices.length/3,o.groupCount=o.groupEnd-o.groupStart,o.inherited=!1),s&&this.materials.length>1)for(let c=this.materials.length-1;c>=0;c--)this.materials[c].groupCount<=0&&this.materials.splice(c,1);return s&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),o}},i&&i.name&&typeof i.clone=="function"){const s=i.clone(0);s.inherited=!0,this.object.materials.push(s)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){const i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){const s=this.vertices,o=this.object.geometry.vertices;o.push(s[e+0],s[e+1],s[e+2]),o.push(s[t+0],s[t+1],s[t+2]),o.push(s[i+0],s[i+1],s[i+2])},addVertexPoint:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){const t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){const s=this.normals,o=this.object.geometry.normals;o.push(s[e+0],s[e+1],s[e+2]),o.push(s[t+0],s[t+1],s[t+2]),o.push(s[i+0],s[i+1],s[i+2])},addFaceNormal:function(e,t,i){const s=this.vertices,o=this.object.geometry.normals;qg.fromArray(s,e),gf.fromArray(s,t),Yg.fromArray(s,i),Ti.subVectors(Yg,gf),$g.subVectors(qg,gf),Ti.cross($g),Ti.normalize(),o.push(Ti.x,Ti.y,Ti.z),o.push(Ti.x,Ti.y,Ti.z),o.push(Ti.x,Ti.y,Ti.z)},addColor:function(e,t,i){const s=this.colors,o=this.object.geometry.colors;s[e]!==void 0&&o.push(s[e+0],s[e+1],s[e+2]),s[t]!==void 0&&o.push(s[t+0],s[t+1],s[t+2]),s[i]!==void 0&&o.push(s[i+0],s[i+1],s[i+2])},addUV:function(e,t,i){const s=this.uvs,o=this.object.geometry.uvs;o.push(s[e+0],s[e+1]),o.push(s[t+0],s[t+1]),o.push(s[i+0],s[i+1])},addDefaultUV:function(){const e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){const t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,s,o,c,u,h,f){const p=this.vertices.length;let g=this.parseVertexIndex(e,p),m=this.parseVertexIndex(t,p),y=this.parseVertexIndex(i,p);if(this.addVertex(g,m,y),this.addColor(g,m,y),u!==void 0&&u!==""){const x=this.normals.length;g=this.parseNormalIndex(u,x),m=this.parseNormalIndex(h,x),y=this.parseNormalIndex(f,x),this.addNormal(g,m,y)}else this.addFaceNormal(g,m,y);if(s!==void 0&&s!==""){const x=this.uvs.length;g=this.parseUVIndex(s,x),m=this.parseUVIndex(o,x),y=this.parseUVIndex(c,x),this.addUV(g,m,y),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";const t=this.vertices.length;for(let i=0,s=e.length;i<s;i++){const o=this.parseVertexIndex(e[i],t);this.addVertexPoint(o),this.addColor(o)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";const i=this.vertices.length,s=this.uvs.length;for(let o=0,c=e.length;o<c;o++)this.addVertexLine(this.parseVertexIndex(e[o],i));for(let o=0,c=t.length;o<c;o++)this.addUVLine(this.parseUVIndex(t[o],s))}};return a.startObject("",!1),a}class ST extends jd{constructor(e){super(e),this.materials=null}load(e,t,i,s){const o=this,c=new iM(this.manager);c.setPath(this.path),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{t(o.parse(u))}catch(h){s?s(h):console.error(h),o.manager.itemError(e)}},i,s)}setMaterials(e){return this.materials=e,this}parse(e){const t=new yT;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));const i=e.split(`
`);let s=[];for(let u=0,h=i.length;u<h;u++){const f=i[u].trimStart();if(f.length===0)continue;const p=f.charAt(0);if(p!=="#")if(p==="v"){const g=f.split(jg);switch(g[0]){case"v":t.vertices.push(parseFloat(g[1]),parseFloat(g[2]),parseFloat(g[3])),g.length>=7?(Cc.setRGB(parseFloat(g[4]),parseFloat(g[5]),parseFloat(g[6]),pi),t.colors.push(Cc.r,Cc.g,Cc.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(g[1]),parseFloat(g[2]),parseFloat(g[3]));break;case"vt":t.uvs.push(parseFloat(g[1]),parseFloat(g[2]));break}}else if(p==="f"){const m=f.slice(1).trim().split(jg),y=[];for(let w=0,_=m.length;w<_;w++){const S=m[w];if(S.length>0){const b=S.split("/");y.push(b)}}const x=y[0];for(let w=1,_=y.length-1;w<_;w++){const S=y[w],b=y[w+1];t.addFace(x[0],S[0],b[0],x[1],S[1],b[1],x[2],S[2],b[2])}}else if(p==="l"){const g=f.substring(1).trim().split(" ");let m=[];const y=[];if(f.indexOf("/")===-1)m=g;else for(let x=0,w=g.length;x<w;x++){const _=g[x].split("/");_[0]!==""&&m.push(_[0]),_[1]!==""&&y.push(_[1])}t.addLineGeometry(m,y)}else if(p==="p"){const m=f.slice(1).trim().split(" ");t.addPointGeometry(m)}else if((s=gT.exec(f))!==null){const g=(" "+s[0].slice(1).trim()).slice(1);t.startObject(g)}else if(vT.test(f))t.object.startMaterial(f.substring(7).trim(),t.materialLibraries);else if(xT.test(f))t.materialLibraries.push(f.substring(7).trim());else if(_T.test(f))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(p==="s"){if(s=f.split(" "),s.length>1){const m=s[1].trim().toLowerCase();t.object.smooth=m!=="0"&&m!=="off"}else t.object.smooth=!0;const g=t.object.currentMaterial();g&&(g.smooth=t.object.smooth)}else{if(f==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+f+'"')}}t.finalize();const o=new Ia;if(o.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let u=0,h=t.objects.length;u<h;u++){const f=t.objects[u],p=f.geometry,g=f.materials,m=p.type==="Line",y=p.type==="Points";let x=!1;if(p.vertices.length===0)continue;const w=new on;w.setAttribute("position",new Kt(p.vertices,3)),p.normals.length>0&&w.setAttribute("normal",new Kt(p.normals,3)),p.colors.length>0&&(x=!0,w.setAttribute("color",new Kt(p.colors,3))),p.hasUVIndices===!0&&w.setAttribute("uv",new Kt(p.uvs,2));const _=[];for(let b=0,E=g.length;b<E;b++){const C=g[b],I=C.name+"_"+C.smooth+"_"+x;let A=t.materials[I];if(this.materials!==null){if(A=this.materials.create(C.name),m&&A&&!(A instanceof Wo)){const N=new Wo;Wi.prototype.copy.call(N,A),N.color.copy(A.color),A=N}else if(y&&A&&!(A instanceof as)){const N=new as({size:10,sizeAttenuation:!1});Wi.prototype.copy.call(N,A),N.color.copy(A.color),N.map=A.map,A=N}}A===void 0&&(m?A=new Wo:y?A=new as({size:1,sizeAttenuation:!1}):A=new ZS,A.name=C.name,A.flatShading=!C.smooth,A.vertexColors=x,t.materials[I]=A),_.push(A)}let S;if(_.length>1){for(let b=0,E=g.length;b<E;b++){const C=g[b];w.addGroup(C.groupStart,C.groupCount,b)}m?S=new fd(w,_):y?S=new Tr(w,_):S=new ln(w,_)}else m?S=new fd(w,_[0]):y?S=new Tr(w,_[0]):S=new ln(w,_[0]);S.name=f.name,o.add(S)}else if(t.vertices.length>0){const u=new as({size:1,sizeAttenuation:!1}),h=new on;h.setAttribute("position",new Kt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(h.setAttribute("color",new Kt(t.colors,3)),u.vertexColors=!0);const f=new Tr(h,u);o.add(f)}return o}}const Bi=class Bi{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"threeCanvas");U(this,"scene");U(this,"camera");U(this,"renderer");U(this,"composer");U(this,"handGroup",null);U(this,"backgroundParticles",null);U(this,"pinchStrength",0);U(this,"baseScale",1);U(this,"currentModel","torus");U(this,"disposed",!1);U(this,"uniforms",{uTime:{value:0},uPinch:{value:0},uColor:{value:new Q(0,.53,1)}});U(this,"bgUniforms",{uTime:{value:0},uColor:{value:new Q(.5,.7,1)}});this.canvas=e,this.ctx=t,this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.scene=new cs;const i=this.threeCanvas.width/this.threeCanvas.height;this.camera=new An(50,i,.1,100),this.camera.position.z=10,this.renderer=new us({canvas:this.threeCanvas,alpha:!0,antialias:!0}),this.renderer.setSize(this.threeCanvas.width,this.threeCanvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const s=new sv(this.scene,this.camera),o=new Bs(new ut(this.threeCanvas.width,this.threeCanvas.height),3,1,0);this.composer=new rv(this.renderer),this.composer.addPass(s),this.composer.addPass(o),this.createBackgroundDust(),this.createTorusGeometry(),console.log("💨 SmokeHandRenderer initialized")}static loadHandGeometry(){return Bi.handGeometry||(Bi.handGeometry=new Promise((e,t)=>{new ST().load(Bi.HAND_MODEL_URL,i=>{const s=[];i.traverse(c=>{c instanceof ln&&s.push(c)});const o=s[s.length-1];o!=null&&o.geometry?e(o.geometry):t(new Error("No mesh in the hand model"))},void 0,t)}),Bi.handGeometry.catch(()=>{Bi.handGeometry=null})),Bi.handGeometry}createBackgroundDust(){const t=new Float32Array(6e3),i=new Float32Array(2e3*3);for(let c=0;c<2e3;c++)t[c*3]=(Math.random()-.5)*40,t[c*3+1]=(Math.random()-.5)*30,t[c*3+2]=-5-Math.random()*20,i[c*3]=Math.random(),i[c*3+1]=Math.random(),i[c*3+2]=Math.random();const s=new on;s.setAttribute("position",new vn(t,3)),s.setAttribute("aRandom",new vn(i,3));const o=new an({uniforms:this.bgUniforms,transparent:!0,depthWrite:!1,blending:za,vertexShader:`
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
      `});this.backgroundParticles=new Tr(s,o),this.scene.add(this.backgroundParticles)}createTorusGeometry(){const e=new Xd(1.5,.45,900,150);this.createParticleSystem(e)}createParticleSystem(e){this.handGroup&&this.scene.remove(this.handGroup),this.handGroup=new Ia;const t=e.getAttribute("position").count,i=e.getAttribute("position").array,s=new Float32Array(t*3),o=new Float32Array(t*3);for(let f=0;f<t;f++)s[f*3]=i[f*3],s[f*3+1]=i[f*3+1],s[f*3+2]=i[f*3+2],o[f*3]=Math.random(),o[f*3+1]=Math.random(),o[f*3+2]=Math.random();const c=new on;c.setAttribute("position",new vn(s,3)),c.setAttribute("aRandom",new vn(o,3)),c.setAttribute("aOriginalPos",new vn(i,3));const u=new an({uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:za,vertexShader:`
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
      `}),h=new Tr(c,u);if(h.geometry.computeBoundingSphere(),h.geometry.boundingSphere){const f=h.geometry.boundingSphere.center;h.position.sub(f);const p=h.geometry.boundingSphere.radius;this.baseScale=2.5/p,this.handGroup.scale.set(this.baseScale,this.baseScale,this.baseScale)}this.handGroup.add(h),this.scene.add(this.handGroup)}render(e,t,i){const s=performance.now()*.001;this.uniforms.uTime.value=s,this.bgUniforms.uTime.value=s;const o=new $e(t[0]||"#0088ff");this.uniforms.uColor.value.set(o.r,o.g,o.b);const c=new $e(t[1]||t[0]||"#5588ff");this.bgUniforms.uColor.value.set(c.r*.5,c.g*.7,c.b);let u=0;if(e.right&&e.right.gesture==="open"&&e.right.landmarks){const h=e.right.landmarks,f=h[8],p=h[4],g=f.x*2-1,m=-(f.y*2-1),y=new Q(g,m,.5);y.unproject(this.camera);const x=y.sub(this.camera.position).normalize(),w=(0-this.camera.position.z)/x.z,_=this.camera.position.clone().add(x.multiplyScalar(w));this.handGroup&&(this.handGroup.position.lerp(_,.15),this.handGroup.rotation.y=g*.8,this.handGroup.rotation.x=-m*.8);const S=f.x-p.x,b=f.y-p.y,E=Math.sqrt(S*S+b*b);u=is.mapLinear(E,.02,.15,0,1),u=is.clamp(u,0,1)}else if(e.left&&e.left.gesture==="open"&&e.left.landmarks){const h=e.left.landmarks,f=h[8],p=h[4],g=f.x*2-1,m=-(f.y*2-1),y=new Q(g,m,.5);y.unproject(this.camera);const x=y.sub(this.camera.position).normalize(),w=(0-this.camera.position.z)/x.z,_=this.camera.position.clone().add(x.multiplyScalar(w));this.handGroup&&(this.handGroup.position.lerp(_,.15),this.handGroup.rotation.y=g*.8,this.handGroup.rotation.x=-m*.8);const S=f.x-p.x,b=f.y-p.y,E=Math.sqrt(S*S+b*b);u=is.mapLinear(E,.02,.15,0,1),u=is.clamp(u,0,1)}else this.handGroup&&(this.handGroup.rotation.y+=.005,this.handGroup.rotation.z=Math.sin(s*.5)*.1,this.handGroup.position.lerp(new Q(0,0,0),.05));if(this.pinchStrength=is.lerp(this.pinchStrength,u,.1),this.uniforms.uPinch.value=this.pinchStrength,this.handGroup){const h=this.baseScale*(1+this.pinchStrength*.5),f=this.handGroup.scale.x,p=is.lerp(f,h,.1);this.handGroup.scale.set(p,p,p)}this.composer.render(),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}resize(e,t){this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t),this.composer.setSize(e,t),this.threeCanvas.width=e,this.threeCanvas.height=t}setSmokeHandModel(e){if(this.currentModel!==e){if(this.currentModel=e,e==="torus"){this.createTorusGeometry();return}this.createTorusGeometry(),Bi.loadHandGeometry().then(t=>{this.currentModel==="hand"&&!this.disposed&&this.createParticleSystem(t)},t=>{console.error("Hand model unavailable, staying on the torus:",t)})}}destroy(){this.disposed=!0,this.handGroup&&this.scene.remove(this.handGroup),this.backgroundParticles&&this.scene.remove(this.backgroundParticles),this.composer.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),console.log("💨 SmokeHandRenderer destroyed")}};U(Bi,"handGeometry",null),U(Bi,"HAND_MODEL_URL","https://raw.githubusercontent.com/NPC-88/3dfiles/195a81cd4607a3176f231766b5bd2dd4b4d216fb/16834_hand_v1_NEW.obj");let Xc=Bi;class MT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"lines",[]);U(this,"gridSpacing",30);U(this,"lineLength",22);U(this,"isClapping",!1);U(this,"clappingIntensity",0);this.canvas=e,this.ctx=t,this.initializeGrid(),console.log("✅ ThickLineRenderer initialized")}initializeGrid(){this.lines=[];const e=Math.ceil(this.canvas.width/this.gridSpacing)+1,t=Math.ceil(this.canvas.height/this.gridSpacing)+1;for(let i=0;i<t;i++)for(let s=0;s<e;s++)this.lines.push({x:s*this.gridSpacing,y:i*this.gridSpacing,length:this.lineLength,currentAngle:0,targetAngle:0,spinVelocity:0})}render(e,t){t[1]&&(t[1].toLowerCase()==="#ffffff"||t[1].toLowerCase()==="#fff")?this.ctx.fillStyle="#000000":this.ctx.fillStyle=t[3]||"#000000",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),(this.lines.length===0||this.lines[0].x>this.canvas.width||this.lines[0].y>this.canvas.height)&&this.initializeGrid();let s=.12,o=0;const c=[];e.left&&c.push(e.left),e.right&&c.push(e.right),c.forEach(h=>{let f=h.fingerCount||2;h.gesture==="pinch"&&(f=1),o=Math.max(o,f)}),o===1?s=.03:o>=4&&(s=.25),e.clapping?this.isClapping||(this.isClapping=!0,this.clappingIntensity=1):this.isClapping=!1,this.clappingIntensity>0&&(this.clappingIntensity*=.95,this.clappingIntensity<.01&&(this.clappingIntensity=0));const u=t[0]||"#ffffff";this.lines.forEach(h=>{if(c.length>0){let p=0,g=0,m=0;c.forEach(y=>{var I,A;const x=(((I=y.position)==null?void 0:I.x)||.5)*this.canvas.width,w=(((A=y.position)==null?void 0:A.y)||.5)*this.canvas.height,_=x-h.x,S=w-h.y,E=1/(1+Math.sqrt(_*_+S*S)*.005),C=Math.atan2(S,_);g+=Math.cos(C)*E,m+=Math.sin(C)*E,p+=E}),p>0&&(h.targetAngle=Math.atan2(m,g))}else h.targetAngle=0;if(this.clappingIntensity>0)h.spinVelocity+=this.clappingIntensity*.8,h.currentAngle+=h.spinVelocity,h.spinVelocity*=.9;else{let p=h.targetAngle-h.currentAngle;for(;p>Math.PI;)p-=Math.PI*2;for(;p<-Math.PI;)p+=Math.PI*2;h.currentAngle+=p*s,h.spinVelocity=0}let f=2;if(c.length>0){let p=1/0;c.forEach(x=>{var b,E;const w=(((b=x.position)==null?void 0:b.x)||.5)*this.canvas.width,_=(((E=x.position)==null?void 0:E.y)||.5)*this.canvas.height,S=Math.hypot(w-h.x,_-h.y);S<p&&(p=S)});const g=35,m=2,y=600;if(p<y){const x=Math.pow(1-p/y,3);f=m+(g-m)*x}}this.ctx.save(),this.ctx.translate(h.x,h.y),this.ctx.rotate(h.currentAngle),this.ctx.fillStyle=u,this.ctx.fillRect(-h.length/2,-f/2,h.length,f),this.ctx.restore()})}}class wT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"elements",[]);U(this,"gridSpacing",20);U(this,"elementLength",12);U(this,"elementWidth",3);U(this,"time",0);U(this,"isClapping",!1);this.canvas=e,this.ctx=t,this.initializeField(),console.log("✅ FlowFieldRenderer initialized")}initializeField(){this.elements=[];const e=Math.ceil(this.canvas.width/this.gridSpacing)+1,t=Math.ceil(this.canvas.height/this.gridSpacing)+1;for(let i=0;i<t;i++)for(let s=0;s<e;s++)this.elements.push({x:s*this.gridSpacing,y:i*this.gridSpacing,angle:Math.random()*Math.PI*2,velocity:0,targetAngle:0})}noise(e,t,i){return Math.sin(e*.01+i)+Math.sin(t*.01+i)+Math.sin((e+t)*.01+i)}render(e,t,i){const s=.01+(i?i.mid*.05:0);this.time+=s*_n(),t[4]&&t[4]+"",e.clapping?this.ctx.fillStyle="#222222":this.ctx.fillStyle="#000510",this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height),(this.elements.length===0||this.elements[0].x>this.canvas.width)&&this.initializeField();const o=[];e.left&&o.push(e.left),e.right&&o.push(e.right);const c=i?i.bass:0,u=i?i.high:0,h=i?i.beat:!1,f=this.elementLength*(1+c*1.5),p=this.elementWidth*(1+c*.5);this.ctx.save(),this.elements.forEach((g,m)=>{let x=this.noise(g.x,g.y,this.time)*Math.PI,w=null;if(u>.2&&(x+=(Math.random()-.5)*u),o.length>0){let S=0,b=0,E="none";if(o.forEach(C=>{var ne,se;const I=(((ne=C.position)==null?void 0:ne.x)||.5)*this.canvas.width,A=(((se=C.position)==null?void 0:se.y)||.5)*this.canvas.height,N=I-g.x,T=A-g.y,F=Math.sqrt(N*N+T*T),z=Math.atan2(T,N),G=Math.max(0,1-F/800);if(G>b){b=G;const X=C.fingerCount??5;C.gesture==="pinch"?(S=z,E="pinch"):X<=2?(S=z+Math.PI/2,E="2fingers"):(S=z+Math.PI,E="5fingers")}}),b>.1){let C=S-x;for(;C>Math.PI;)C-=Math.PI*2;for(;C<-Math.PI;)C+=Math.PI*2;x+=C*(b*.95),b>.3&&(E==="pinch"?w=t[1]||"#ff00ff":E==="5fingers"?w=t[2]||"#00ffff":E==="2fingers"&&(w=t[0]||"#ffffff"))}}if(e.clapping||h){const S=this.canvas.width/2,b=this.canvas.height/2,E=g.x-S,C=g.y-b,I=Math.atan2(C,E),A=(e.clapping?.9:0)+(h?.4:0);if(A>0){let N=I-x;for(;N>Math.PI;)N-=Math.PI*2;for(;N<-Math.PI;)N+=Math.PI*2;x+=N*A,e.clapping&&(w="#ffffff")}}let _=x-g.angle;for(;_>Math.PI;)_-=Math.PI*2;for(;_<-Math.PI;)_+=Math.PI*2;g.angle+=_*.25,this.ctx.translate(g.x,g.y),this.ctx.rotate(g.angle),w?this.ctx.fillStyle=w:this.ctx.fillStyle=h&&Math.random()>.7?"#ffffff":t[0]||"#ffffff",this.ctx.fillRect(-f/2,-p/2,f,p),this.ctx.rotate(-g.angle),this.ctx.translate(-g.x,-g.y)}),this.ctx.restore()}}class bT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"threeCanvas");U(this,"scene");U(this,"camera");U(this,"renderer");U(this,"material");U(this,"time",0);U(this,"hand1",new ut(.5,.5));U(this,"hand2",new ut(.5,.5));U(this,"h1Radius",.3);U(this,"h1Strength",0);U(this,"h2Radius",.3);U(this,"h2Strength",0);U(this,"vertexShader",`
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
  `);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.initThreeJS(),console.log("💧 LiquidChromeRenderer initialized"),console.warn=i}initThreeJS(){this.scene=new cs,this.camera=new Ya(-1,1,1,-1,0,1),this.renderer=new us({canvas:this.threeCanvas,antialias:!1,alpha:!0}),this.renderer.setSize(this.canvas.width,this.canvas.height);const e=new Rr(2,2);this.material=new an({vertexShader:this.vertexShader,fragmentShader:this.fragmentShader,uniforms:{uTime:{value:0},uResolution:{value:new ut(this.canvas.width,this.canvas.height)},uHand1Pos:{value:new ut(.5,.5)},uHand1Radius:{value:.3},uHand1Strength:{value:0},uHand2Pos:{value:new ut(.5,.5)},uHand2Radius:{value:.3},uHand2Strength:{value:0},uColor1:{value:new $e(6514417)},uColor2:{value:new $e(9133302)},uColor3:{value:new $e(14239471)}}});const t=new ln(e,this.material);this.scene.add(t)}getHandParams(e){return e?e.gesture==="pinch"?{radius:.15,strength:2.5}:(e.fingerCount!==void 0?e.fingerCount:5)<=2?{radius:.3,strength:1.5}:{radius:.6,strength:1}:{radius:.3,strength:0}}render(e,t){this.time+=.01*_n(),(this.threeCanvas.width!==this.canvas.width||this.threeCanvas.height!==this.canvas.height)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=this.canvas.width,this.threeCanvas.height=this.canvas.height,this.material.uniforms.uResolution.value.set(this.canvas.width,this.canvas.height)),this.material.uniforms.uTime.value=this.time;const i=this.canvas.width/this.canvas.height;if(e.clapping){const o=3+Math.sin(this.time*20)*.5;this.h1Radius+=(1.5-this.h1Radius)*.1,this.h1Strength+=(o-this.h1Strength)*.1,this.h2Radius+=(1.5-this.h2Radius)*.1,this.h2Strength+=(o-this.h2Strength)*.1}else{if(e.left){const s=this.getHandParams(e.left);this.h1Radius+=(s.radius-this.h1Radius)*.1,this.h1Strength+=(s.strength-this.h1Strength)*.1;const o=e.left.position.x*i*.8,c=(1-e.left.position.y)*.8;this.material.uniforms.uHand1Pos.value.set(o,c)}else this.h1Strength*=.9;if(e.right){const s=this.getHandParams(e.right);this.h2Radius+=(s.radius-this.h2Radius)*.1,this.h2Strength+=(s.strength-this.h2Strength)*.1;const o=e.right.position.x*i*.8,c=(1-e.right.position.y)*.8;this.material.uniforms.uHand2Pos.value.set(o,c)}else this.h2Strength*=.9}this.material.uniforms.uHand1Radius.value=this.h1Radius,this.material.uniforms.uHand1Strength.value=this.h1Strength,this.material.uniforms.uHand2Radius.value=this.h2Radius,this.material.uniforms.uHand2Strength.value=this.h2Strength,t&&t.length>=3&&(this.material.uniforms.uColor1.value.set(t[0]),this.material.uniforms.uColor2.value.set(t[1]),this.material.uniforms.uColor3.value.set(t[2])),this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0)}destroy(){this.renderer.dispose(),this.renderer.forceContextLoss(),this.material.dispose()}}class ET{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"rectangles",[]);U(this,"baseWidth",1920);U(this,"baseHeight",1080);U(this,"gridStructure",[]);this.canvas=e,this.ctx=t,this.createVariedLayout()}createVariedLayout(){[{x:0,y:0,w:480,h:360},{x:480,y:0,w:320,h:180},{x:800,y:0,w:320,h:180},{x:1120,y:0,w:400,h:180},{x:1520,y:0,w:400,h:180},{x:480,y:180,w:240,h:180},{x:720,y:180,w:240,h:180},{x:960,y:180,w:160,h:180},{x:1120,y:180,w:240,h:180},{x:1360,y:180,w:280,h:180},{x:1640,y:180,w:280,h:180},{x:0,y:360,w:120,h:360},{x:120,y:360,w:120,h:360},{x:240,y:360,w:120,h:360},{x:360,y:360,w:120,h:360},{x:480,y:360,w:320,h:360},{x:800,y:360,w:320,h:360},{x:1120,y:360,w:200,h:180},{x:1320,y:360,w:200,h:180},{x:1520,y:360,w:200,h:180},{x:1720,y:360,w:200,h:180},{x:1120,y:540,w:160,h:180},{x:1280,y:540,w:160,h:180},{x:1440,y:540,w:240,h:180},{x:1680,y:540,w:240,h:180},{x:0,y:720,w:160,h:360},{x:160,y:720,w:160,h:360},{x:320,y:720,w:160,h:360},{x:480,y:720,w:240,h:360},{x:720,y:720,w:240,h:360},{x:960,y:720,w:160,h:360},{x:1120,y:720,w:400,h:360},{x:1520,y:720,w:400,h:360}].forEach((t,i)=>{let s;const o=i%3;o===0?s="vertical":o===1?s="horizontal":s="vertical-reverse",this.rectangles.push({id:i,baseX:t.x,baseY:t.y,baseW:t.w,baseH:t.h,currentX:t.x,currentY:t.y,currentW:t.w,currentH:t.h,gradientDirection:s}),this.gridStructure.push({x:t.x,y:t.y,w:t.w,h:t.h,targetW:t.w,targetH:t.h})})}render(e,t){const i=this.ctx.createLinearGradient(0,0,0,this.canvas.height);i.addColorStop(0,t[2]||"#d9d9d9"),i.addColorStop(1,t[0]||"#1a00ff"),this.ctx.fillStyle=i,this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);let s=.15;if(e.left||e.right){const h=[];e.left&&h.push(e.left),e.right&&h.push(e.right);let f=0;h.forEach(p=>{let g=p.fingerCount||2;p.gesture==="pinch"&&(g=1),f=Math.max(f,g)}),f===1?s=.02:f===2?s=.15:f===3?s=.25:f===4?s=.35:f>=5&&(s=.5),this.rectangles.forEach((p,g)=>{this.gridStructure[g].targetW=p.baseW,this.gridStructure[g].targetH=p.baseH}),h.forEach(p=>{var x,w;const g=(((x=p.position)==null?void 0:x.x)||.5)*this.baseWidth,m=(((w=p.position)==null?void 0:w.y)||.5)*this.baseHeight,y=p.velocity||0;this.rectangles.forEach((_,S)=>{const b=_.baseX+_.baseW/2,E=_.baseY+_.baseH/2,C=g-b,I=m-E,A=Math.sqrt(C*C+I*I),T=Math.max(0,1-A/700);if(T>.1){const F=Math.atan2(I,C),z=1+T*.6,D=Math.min(y*.5,.4),G=z+Math.abs(Math.cos(F))*D,ne=z+Math.abs(Math.sin(F))*D;this.gridStructure[S].targetW=_.baseW*G,this.gridStructure[S].targetH=_.baseH*ne}})})}else this.rectangles.forEach((h,f)=>{this.gridStructure[f].targetW=h.baseW,this.gridStructure[f].targetH=h.baseH});const o=Math.min(.95,s*_n());this.gridStructure.forEach(h=>{h.w+=(h.targetW-h.w)*o,h.h+=(h.targetH-h.h)*o}),this.normalizeGridPerfectly(),this.rectangles.forEach((h,f)=>{h.currentX=this.gridStructure[f].x,h.currentY=this.gridStructure[f].y,h.currentW=this.gridStructure[f].w,h.currentH=this.gridStructure[f].h});const c=this.canvas.width/this.baseWidth,u=this.canvas.height/this.baseHeight;this.rectangles.forEach(h=>{this.drawRectangle(h,c,u,t)})}normalizeGridPerfectly(){const e=new Map;this.rectangles.forEach((c,u)=>{const h=Math.round(c.baseY/10)*10;e.has(h)||e.set(h,[]),e.get(h).push(u)});const t=Array.from(e.entries()).sort((c,u)=>c[0]-u[0]).map(c=>c[1]);t.forEach(c=>{c.sort((p,g)=>this.rectangles[p].baseX-this.rectangles[g].baseX);const u=c.reduce((p,g)=>p+this.gridStructure[g].w,0),h=this.baseWidth/u;c.forEach(p=>{this.gridStructure[p].w*=h});let f=0;c.forEach(p=>{this.gridStructure[p].x=f,f+=this.gridStructure[p].w})});let i=0;t.forEach(c=>{const u=Math.max(...c.map(h=>this.gridStructure[h].h));c.forEach(h=>{this.gridStructure[h].y=i,this.gridStructure[h].h=u}),i+=u});const s=i,o=this.baseHeight/s;i=0,t.forEach(c=>{const u=this.gridStructure[c[0]].h*o;c.forEach(h=>{this.gridStructure[h].y=i,this.gridStructure[h].h=u}),i+=u})}drawRectangle(e,t,i,s){this.ctx.save();const o=e.currentX*t,c=e.currentY*i,u=e.currentW*t,h=e.currentH*i;let f;e.gradientDirection==="vertical"?(f=this.ctx.createLinearGradient(o,c,o,c+h),f.addColorStop(0,s[2]||"#d9d9d9"),f.addColorStop(1,s[0]||"#1a00ff")):e.gradientDirection==="vertical-reverse"?(f=this.ctx.createLinearGradient(o,c,o,c+h),f.addColorStop(0,s[0]||"#1a00ff"),f.addColorStop(1,s[2]||"#d9d9d9")):(f=this.ctx.createLinearGradient(o,c,o+u,c),f.addColorStop(0,s[2]||"#d9d9d9"),f.addColorStop(1,s[0]||"#1a00ff")),this.ctx.fillStyle=f,this.ctx.fillRect(o,c,u,h),this.ctx.restore()}}class TT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"threeCanvas");U(this,"scene");U(this,"camera");U(this,"renderer");U(this,"linesMesh");U(this,"pointsMesh");U(this,"gridPoints");U(this,"edges");U(this,"originalToSortedMap");U(this,"time",0);U(this,"interactionLevel",.5);U(this,"handX",.5);U(this,"handY",.5);U(this,"GRID_SIZE",10);U(this,"SPACING",1.5);U(this,"TOTAL_POINTS",1e3);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.initThreeJS(),console.log("🕸️ NetworkCubeRenderer initialized"),console.warn=i}initThreeJS(){this.scene=new cs,this.scene.fog=new Qo(0,.06),this.camera=new An(75,this.canvas.width/this.canvas.height,.1,1e3),this.camera.position.z=20,this.renderer=new us({canvas:this.threeCanvas,antialias:!0,alpha:!0}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=this.GRID_SIZE*this.GRID_SIZE*this.GRID_SIZE;this.gridPoints=new Float32Array(e*3);const t=[],i=(this.GRID_SIZE-1)*this.SPACING*.5,s=(x,w,_)=>x+w*this.GRID_SIZE+_*this.GRID_SIZE*this.GRID_SIZE;let o=0;for(let x=0;x<this.GRID_SIZE;x++)for(let w=0;w<this.GRID_SIZE;w++)for(let _=0;_<this.GRID_SIZE;_++){this.gridPoints[o++]=_*this.SPACING-i+(Math.random()-.5)*.3,this.gridPoints[o++]=w*this.SPACING-i+(Math.random()-.5)*.3,this.gridPoints[o++]=x*this.SPACING-i+(Math.random()-.5)*.3;const b=s(_,w,x);_<this.GRID_SIZE-1&&t.push(b,s(_+1,w,x)),w<this.GRID_SIZE-1&&t.push(b,s(_,w+1,x)),x<this.GRID_SIZE-1&&t.push(b,s(_,w,x+1)),Math.random()>.8&&_<this.GRID_SIZE-1&&w<this.GRID_SIZE-1&&t.push(b,s(_+1,w+1,x))}this.edges=new Int32Array(t);const c=new Int32Array(e);for(let x=0;x<e;x++)c[x]=x;for(let x=e-1;x>0;x--){const w=Math.floor(Math.random()*(x+1));[c[x],c[w]]=[c[w],c[x]]}const u=new Float32Array(e*3);this.originalToSortedMap=new Int32Array(e);for(let x=0;x<e;x++){const w=c[x];this.originalToSortedMap[w]=x,u[x*3]=this.gridPoints[w*3],u[x*3+1]=this.gridPoints[w*3+1],u[x*3+2]=this.gridPoints[w*3+2]}const h=new on;h.setAttribute("position",new vn(u,3));const f=new as({color:16777215,size:.15,transparent:!0,opacity:.9,sizeAttenuation:!0});this.pointsMesh=new Tr(h,f),this.scene.add(this.pointsMesh);const p=new on,g=this.edges.length*3,m=new Float32Array(g);p.setAttribute("position",new vn(m,3));const y=new Wo({color:65535,transparent:!0,opacity:.2,blending:za});this.linesMesh=new fd(p,y),this.linesMesh.frustumCulled=!1,this.scene.add(this.linesMesh)}updateLogic(e,t){let i=0;const s=e.left||e.right;s?(this.handX+=(s.position.x-this.handX)*.1,this.handY+=(s.position.y-this.handY)*.1,e.clapping?i=1.2:s.gesture==="pinch"?i=.05:i=.2+(s.fingerCount||0)/5*.8):(this.handX+=(.5-this.handX)*.05,this.handY+=(.5-this.handY)*.05,i=.3+Math.sin(this.time*.5)*.1),this.interactionLevel+=(i-this.interactionLevel)*.08;const o=t?t.bass:0,c=t?t.high:0,u=Math.max(0,Math.min(1.5,this.interactionLevel+o*.3)),h=this.pointsMesh.geometry.attributes.position.count,f=50,p=Math.floor(f+u*(h-f));this.pointsMesh.geometry.setDrawRange(0,p);const g=this.linesMesh.geometry.attributes.position.array;let m=0;for(let S=0;S<this.edges.length;S+=2){const b=this.edges[S],E=this.edges[S+1],C=this.originalToSortedMap[b],I=this.originalToSortedMap[E];if(C<p&&I<p){const A=b*3,N=E*3;g[m++]=this.gridPoints[A],g[m++]=this.gridPoints[A+1],g[m++]=this.gridPoints[A+2],g[m++]=this.gridPoints[N],g[m++]=this.gridPoints[N+1],g[m++]=this.gridPoints[N+2]}}this.linesMesh.geometry.setDrawRange(0,m/3),this.linesMesh.geometry.attributes.position.needsUpdate=!0;const y=.6+u*.8;this.scene.rotation.y+=.002+u*.005;const x=(this.handY-.5)*1.5,w=(this.handX-.5)*1.5;this.scene.rotation.x+=(x-this.scene.rotation.x)*.1,this.scene.rotation.z+=(w-this.scene.rotation.z)*.1,this.pointsMesh.scale.setScalar(y),this.linesMesh.scale.setScalar(y);const _=this.pointsMesh.material;_.size=.15+c*.1}render(e,t,i){this.time+=.02*_n();const s=this.renderer.getPixelRatio(),o=Math.floor(this.canvas.width*s),c=Math.floor(this.canvas.height*s);(this.threeCanvas.width!==o||this.threeCanvas.height!==c)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=o,this.threeCanvas.height=c,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix()),this.updateLogic(e,i);const u=new $e(t[0]||"#ffffff"),h=new $e(t[1]||"#888888");this.pointsMesh.material.color.lerp(u,.1),this.linesMesh.material.color.lerp(h,.1),this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){Qc(this.scene,this.renderer)}}class CT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"threeCanvas");U(this,"scene");U(this,"camera");U(this,"renderer");U(this,"mesh");U(this,"points");U(this,"originalPositions");U(this,"currentPositions");U(this,"velocities");U(this,"time",0);U(this,"handX",.5);U(this,"handY",.5);U(this,"isHandPresent",!1);U(this,"pinchStrength",0);U(this,"ROWS",30);U(this,"COLS",30);U(this,"SIZE",12);this.canvas=e,this.ctx=t;const i=console.warn;console.warn=(...s)=>{typeof s[0]=="string"&&s[0].includes("Multiple instances")||i.apply(console,s)},this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.initThreeJS(),console.log("🕸️ ElasticNetRenderer initialized"),console.warn=i}initThreeJS(){this.scene=new cs,this.scene.fog=new Qo(0,.08),this.camera=new An(75,this.canvas.width/this.canvas.height,.1,1e3),this.camera.position.z=8,this.renderer=new us({canvas:this.threeCanvas,antialias:!0,alpha:!0}),this.renderer.setSize(this.canvas.width,this.canvas.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=new Rr(this.SIZE,this.SIZE,this.COLS,this.ROWS),t=e.attributes.position,i=t.count;this.originalPositions=new Float32Array(i*3),this.currentPositions=new Float32Array(i*3),this.velocities=new Float32Array(i*3);for(let c=0;c<i*3;c++)this.originalPositions[c]=t.array[c],this.currentPositions[c]=t.array[c],this.velocities[c]=0;const s=new $c({color:65535,wireframe:!0,transparent:!0,opacity:.3,side:Hi});this.mesh=new ln(e,s),this.scene.add(this.mesh);const o=new as({color:16777215,size:.15,transparent:!0,opacity:.8});this.points=new Tr(e,o),this.scene.add(this.points)}updatePhysics(e,t){const i=this.mesh.geometry.attributes.position,s=i.count,o=t?t.bass:0,c=t?t.high:0,u=t?t.mid:0;let h=0,f=0,p=0;const g=e.left||e.right;g?(this.isHandPresent=!0,h=(g.position.x-.5)*12,f=-(g.position.y-.5)*10,g.gesture==="pinch"?(this.pinchStrength+=(1-this.pinchStrength)*.1,p=-25):(g.fingerCount||5)>=5?(this.pinchStrength+=(0-this.pinchStrength)*.1,p=15):(this.pinchStrength+=(0-this.pinchStrength)*.1,p=5)):(this.isHandPresent=!1,this.pinchStrength+=(0-this.pinchStrength)*.1);const m=c*.05;for(let y=0;y<s;y++){const x=y*3,w=y*3+1,_=y*3+2,S=this.originalPositions[x],b=this.originalPositions[w],E=this.originalPositions[_];let C=this.currentPositions[x],I=this.currentPositions[w],A=this.currentPositions[_];const N=.05+this.pinchStrength*.2,T=(S-C)*N,F=(b-I)*N,z=(E-A)*N;if(this.velocities[x]+=T,this.velocities[w]+=F,this.velocities[_]+=z,this.isHandPresent){const V=C-h,Y=I-f,q=A,ie=V*V+Y*Y+q*q,te=Math.sqrt(ie),O=4+o*2;if(te<O){const ee=1-te/O,ge=V/te,Te=Y/te,Se=q/te,W=p*ee*.2;this.velocities[x]+=ge*W,this.velocities[w]+=Te*W,this.velocities[_]+=Se*W}}const D=this.time*(1+u),G=Math.sin(w*.1+D)*.02,ne=Math.cos(x*.1+D)*.02,se=Math.sin(x*.1+w*.1+D)*.02;this.velocities[x]+=G,this.velocities[w]+=ne,this.velocities[_]+=se,c>.1&&(this.velocities[x]+=(Math.random()-.5)*m,this.velocities[w]+=(Math.random()-.5)*m,this.velocities[_]+=(Math.random()-.5)*m);const X=.9-this.pinchStrength*.05;this.velocities[x]*=X,this.velocities[w]*=X,this.velocities[_]*=X,this.currentPositions[x]+=this.velocities[x],this.currentPositions[w]+=this.velocities[w],this.currentPositions[_]+=this.velocities[_],i.setXYZ(y,this.currentPositions[x],this.currentPositions[w],this.currentPositions[_])}i.needsUpdate=!0}render(e,t,i){this.time+=.01*_n();const s=this.renderer.getPixelRatio(),o=Math.floor(this.canvas.width*s),c=Math.floor(this.canvas.height*s);(this.threeCanvas.width!==o||this.threeCanvas.height!==c)&&(this.renderer.setSize(this.canvas.width,this.canvas.height),this.threeCanvas.width=o,this.threeCanvas.height=c,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix()),this.updatePhysics(e,i);const u=new $e(t[0]||"#00ffff"),h=new $e(t[1]||"#ff00ff"),f=this.mesh.material;f.color.lerp(u,.1),f.opacity=.2+((i==null?void 0:i.bass)||0)*.3;const p=this.points.material;p.color.lerp(h,.1),p.size=.1+((i==null?void 0:i.high)||0)*.2,this.camera.position.x=Math.sin(this.time*.2)*.5,this.camera.position.y=Math.cos(this.time*.2)*.5,this.camera.lookAt(0,0,0),this.renderer.render(this.scene,this.camera),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){Qc(this.scene,this.renderer)}}const xd={chaos:{idle:.06,range:.45,openness:.6,velocity:.4,clap:.5,audio:.3,ease:.03},strips:{base:10,chaos:20,blocks:5,blocksChaos:15},speed:{base:.05,variation:.1,chaos:.35}};class AT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"threeCanvas");U(this,"scene");U(this,"camera");U(this,"renderer");U(this,"composer");U(this,"material");U(this,"plane");U(this,"chaosLevel",0);U(this,"cfg",xd);U(this,"uniforms",{uTime:{value:0},uColor1:{value:new Q(.5,0,1)},uColor2:{value:new Q(0,0,0)},uColor3:{value:new Q(.8,.9,1)},uChaos:{value:0},uStrips:{value:10},uStripsChaos:{value:20},uBlocks:{value:5},uBlocksChaos:{value:15},uSpeedBase:{value:.05},uSpeedVar:{value:.1},uSpeedChaos:{value:.35},uAudioLow:{value:0},uAudioMid:{value:0},uAudioHigh:{value:0}});U(this,"geometry",new Rr(20,12));this.canvas=e,this.ctx=t,this.threeCanvas=document.createElement("canvas"),this.threeCanvas.width=e.width,this.threeCanvas.height=e.height,this.scene=new cs,this.camera=new An(75,e.width/e.height,.1,100),this.camera.position.z=2,this.renderer=new us({canvas:this.threeCanvas,alpha:!0,antialias:!0}),this.renderer.setSize(e.width,e.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.material=new an({uniforms:this.uniforms,vertexShader:`
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
      `,side:Hi});const i=new Rr(20,12);this.plane=new ln(i,this.material),this.scene.add(this.plane);const s=new sv(this.scene,this.camera),o=new Bs(new ut(e.width,e.height),1.5,.4,.85);this.composer=new rv(this.renderer),this.composer.addPass(s),this.composer.addPass(o),console.log("📼 DigitalBlockRenderer initialized")}setParams(e){this.cfg=vi(xd,e)}render(e,t,i){(this.threeCanvas.width!==this.canvas.width||this.threeCanvas.height!==this.canvas.height)&&(this.threeCanvas.width=this.canvas.width,this.threeCanvas.height=this.canvas.height,this.camera.aspect=this.canvas.width/this.canvas.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.canvas.width,this.canvas.height,!1),this.composer.setSize(this.canvas.width,this.canvas.height));const s=performance.now()*.001;this.uniforms.uTime.value=s;const o=i?i.bass:0,c=i?i.mid:0,u=i?i.high:0;this.uniforms.uAudioLow.value=is.lerp(this.uniforms.uAudioLow.value,o,.2),this.uniforms.uAudioMid.value=c,this.uniforms.uAudioHigh.value=u;const h=this.cfg.chaos,f=e.right??e.left;let p=h.idle;if(f){const y=f.fingerCount??(f.gesture==="open"?5:0),x=Math.min(1,Math.max(0,y/5)),w=Math.min(1,Math.max(0,f.velocity??0));p=h.idle+(x*h.openness+w*h.velocity)*h.range}else o>.6&&(p=h.idle+o*h.audio);e.clapping&&(p+=h.clap*(e.clapIntensity??1)),p=Math.min(h.range,p),this.chaosLevel=is.lerp(this.chaosLevel,p,h.ease),this.uniforms.uChaos.value=this.chaosLevel;const g=this.cfg.strips,m=this.cfg.speed;if(this.uniforms.uStrips.value=g.base,this.uniforms.uStripsChaos.value=g.chaos,this.uniforms.uBlocks.value=g.blocks,this.uniforms.uBlocksChaos.value=g.blocksChaos,this.uniforms.uSpeedBase.value=m.base,this.uniforms.uSpeedVar.value=m.variation,this.uniforms.uSpeedChaos.value=m.chaos,t&&t.length>=3){const y=new $e(t[0]),x=new $e(t[3]||"#000000"),w=new $e(t[1]);this.uniforms.uColor1.value.lerp(new Q(y.r,y.g,y.b),.1),this.uniforms.uColor2.value.lerp(new Q(x.r,x.g,x.b),.1),this.uniforms.uColor3.value.lerp(new Q(w.r,w.g,w.b),.1)}this.composer.render(),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.drawImage(this.threeCanvas,0,0,this.canvas.width,this.canvas.height)}destroy(){var e;this.composer.dispose(),(e=this.geometry)==null||e.dispose(),this.material.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),console.log("📼 DigitalBlockRenderer destroyed")}}const vd={stamp:{radius:.075,strength:.55,fingerScale:.45,audioSwell:.5},field:{decay:.965,spread:1.6},refraction:{amount:.09,dispersion:.35},highlight:{amount:.9,sharpness:3.5,tint:.35},fallback:{fieldBrightness:.85}},RT=`#version 300 es
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
`;function Kg(a,e,t){const i=a.createShader(e);if(!i)throw new Error("Could not create shader");if(a.shaderSource(i,t),a.compileShader(i),!a.getShaderParameter(i,a.COMPILE_STATUS)){const s=a.getShaderInfoLog(i);a.deleteShader(i);const o=t.split(`
`).map((c,u)=>`${String(u+1).padStart(3)} | ${c}`).join(`
`);throw new Error(`Shader failed to compile: ${s}
${o}`)}return i}function di(a,e){const t=Kg(a,a.VERTEX_SHADER,RT),i=Kg(a,a.FRAGMENT_SHADER,PT+e),s=a.createProgram();if(!s)throw new Error("Could not create program");if(a.attachShader(s,t),a.attachShader(s,i),a.linkProgram(s),a.deleteShader(t),a.deleteShader(i),!a.getProgramParameter(s,a.LINK_STATUS)){const o=a.getProgramInfoLog(s);throw a.deleteProgram(s),new Error(`Program failed to link: ${o}`)}return s}function Na(a,e,t){const i=a.createTexture();a.bindTexture(a.TEXTURE_2D,i),a.texImage2D(a.TEXTURE_2D,0,a.RGBA8,e,t,0,a.RGBA,a.UNSIGNED_BYTE,null),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);const s=a.createFramebuffer();return a.bindFramebuffer(a.FRAMEBUFFER,s),a.framebufferTexture2D(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,i,0),a.bindFramebuffer(a.FRAMEBUFFER,null),{framebuffer:s,texture:i,width:e,height:t}}function Fa(a,e,t,i){e.width===t&&e.height===i||(a.bindTexture(a.TEXTURE_2D,e.texture),a.texImage2D(a.TEXTURE_2D,0,a.RGBA8,t,i,0,a.RGBA,a.UNSIGNED_BYTE,null),e.width=t,e.height=i)}function Ua(a,e){a.deleteFramebuffer(e.framebuffer),a.deleteTexture(e.texture)}function Yn(a,e,t,i){a.bindFramebuffer(a.FRAMEBUFFER,e?e.framebuffer:null),a.viewport(0,0,e?e.width:t,e?e.height:i),a.drawArrays(a.TRIANGLES,0,3)}function Cn(a,e,t,i,s){a.activeTexture(a.TEXTURE0+s),a.bindTexture(a.TEXTURE_2D,i),a.uniform1i(a.getUniformLocation(e,t),s)}const jc=10,LT=`
uniform sampler2D uField;
uniform vec3 uStamps[${jc}];   // x, y, radius
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
  for (int i = 0; i < ${jc}; i++) {
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
}`;class NT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"glCanvas");U(this,"gl");U(this,"cfg",vd);U(this,"fieldProgram");U(this,"refractProgram");U(this,"fields");U(this,"ping",0);U(this,"videoTexture");U(this,"video",null);this.canvas=e,this.ctx=t,this.glCanvas=document.createElement("canvas"),this.glCanvas.width=e.width,this.glCanvas.height=e.height;const i=this.glCanvas.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1});if(!i)throw new Error("WebGL2 is not available");this.gl=i,this.fieldProgram=di(i,LT),this.refractProgram=di(i,IT),this.fields=[Na(i,e.width,e.height),Na(i,e.width,e.height)],this.videoTexture=i.createTexture(),i.bindTexture(i.TEXTURE_2D,this.videoTexture),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}setParams(e){this.cfg=vi(vd,e)}setVideoElement(e){this.video=e}collectStamps(e,t){const i=1+((t==null?void 0:t.bass)??0)*this.cfg.stamp.audioSwell,s=this.cfg.stamp.radius*i,o=[];for(const c of[e.left,e.right]){if(!c||o.length/3>=jc)continue;o.push(c.position.x,1-c.position.y,s);const u=c.landmarks;if(u&&this.cfg.stamp.fingerScale>0)for(const h of[8,12,16,20]){if(o.length/3>=jc)break;const f=u[h];f&&o.push(f.x,1-f.y,s*this.cfg.stamp.fingerScale)}}return o}render(e,t,i){const s=this.gl,o=this.canvas.width,c=this.canvas.height;if(o===0||c===0)return;(this.glCanvas.width!==o||this.glCanvas.height!==c)&&(this.glCanvas.width=o,this.glCanvas.height=c,Fa(s,this.fields[0],o,c),Fa(s,this.fields[1],o,c));const u=this.fields[this.ping];this.ping^=1;const h=this.fields[this.ping],f=this.collectStamps(e,i),p=i!=null&&i.beat?1+(i.beatIntensity??0):1;s.useProgram(this.fieldProgram),s.uniform2f(s.getUniformLocation(this.fieldProgram,"uResolution"),o,c),Cn(s,this.fieldProgram,"uField",u.texture,0),s.uniform1i(s.getUniformLocation(this.fieldProgram,"uStampCount"),f.length/3),f.length>0&&s.uniform3fv(s.getUniformLocation(this.fieldProgram,"uStamps"),f),s.uniform1f(s.getUniformLocation(this.fieldProgram,"uDecay"),this.cfg.field.decay),s.uniform1f(s.getUniformLocation(this.fieldProgram,"uSpread"),this.cfg.field.spread),s.uniform1f(s.getUniformLocation(this.fieldProgram,"uStrength"),this.cfg.stamp.strength*p),Yn(s,h,o,c);const g=this.video&&this.video.readyState>=2&&this.video.videoWidth>0;g&&(s.bindTexture(s.TEXTURE_2D,this.videoTexture),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!0),s.texImage2D(s.TEXTURE_2D,0,s.RGBA,s.RGBA,s.UNSIGNED_BYTE,this.video));const m=FT(t[0]??"#ffffff");s.useProgram(this.refractProgram),s.uniform2f(s.getUniformLocation(this.refractProgram,"uResolution"),o,c),Cn(s,this.refractProgram,"uField",h.texture,0),Cn(s,this.refractProgram,"uVideo",this.videoTexture,1),s.uniform1f(s.getUniformLocation(this.refractProgram,"uHasVideo"),g?1:0),s.uniform3f(s.getUniformLocation(this.refractProgram,"uColor"),m[0],m[1],m[2]),s.uniform1f(s.getUniformLocation(this.refractProgram,"uRefract"),this.cfg.refraction.amount),s.uniform1f(s.getUniformLocation(this.refractProgram,"uDispersion"),this.cfg.refraction.dispersion),s.uniform1f(s.getUniformLocation(this.refractProgram,"uGloss"),this.cfg.highlight.amount),s.uniform1f(s.getUniformLocation(this.refractProgram,"uSharpness"),this.cfg.highlight.sharpness),s.uniform1f(s.getUniformLocation(this.refractProgram,"uTint"),this.cfg.highlight.tint),s.uniform1f(s.getUniformLocation(this.refractProgram,"uFieldBrightness"),this.cfg.fallback.fieldBrightness),Yn(s,null,o,c),this.ctx.clearRect(0,0,o,c),this.ctx.drawImage(this.glCanvas,0,0,o,c)}destroy(){var t;const e=this.gl;e.deleteProgram(this.fieldProgram),e.deleteProgram(this.refractProgram),e.deleteTexture(this.videoTexture),Ua(e,this.fields[0]),Ua(e,this.fields[1]),(t=e.getExtension("WEBGL_lose_context"))==null||t.loseContext()}}function FT(a){const e=a.replace("#","");return e.length<6?[1,1,1]:[parseInt(e.slice(0,2),16)/255,parseInt(e.slice(2,4),16)/255,parseInt(e.slice(4,6),16)/255]}const _d={mode:0,type:{fit:.82,weight:700,tracking:.08,outline:0,strokeWidth:1.5},grid:{columns:14,rows:26,spread:1,breathe:0,breatheSpeed:.4},mask:{reach:.18,threshold:.5,softness:.25,invert:0},radial:{strength:.6,power:2,pulse:.5,pulseSpeed:.5},wave:{amplitude:.12,frequency:1.5,speed:1,scaleWave:0},depth:{speed:.35,spread:1.4,curve:1.6,size:.1,horizon:.12,steps:18},scatter:{amount:.6,spiral:0,stagger:.35,drift:.5,size:.12},color:{rainbow:0,step:37,cycleSpeed:.3},motion:{handInfluence:1},audio:{bassScale:.3,beatKick:.5},trail:{fadeAlpha:1}},Zg="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",UT=1400;class Xo{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"cfg",_d);U(this,"text","N4TH");U(this,"aim",{x:.5,y:.5});U(this,"targets",[]);this.canvas=e,this.ctx=t}setParams(e){this.cfg=vi(_d,e)}setText(e){const t=e.trim()||"N4TH";t!==this.text&&(this.text=t,this.targets=[])}static noise(e){const t=Math.sin(e*12.9898)*43758.5453;return t-Math.floor(t)}colorFor(e,t,i){const{color:s}=this.cfg;return s.rainbow>=.5?`hsl(${(e*s.step+t*s.cycleSpeed*60)%360}, 100%, 62%)`:i[e%Math.max(1,i.length)]??"#ffffff"}stamp(e,t,i,s,o=1,c=this.text,u=this.cfg.type.tracking){const{ctx:h,cfg:f}=this;h.globalAlpha=Math.min(1,Math.max(0,o)),h.font=`${Math.round(f.type.weight)} ${Math.max(1,i)}px ${Zg}`;try{h.letterSpacing=`${u}em`}catch{}f.type.outline>=.5?(h.strokeStyle=s,h.lineWidth=Math.max(.5,f.type.strokeWidth),h.strokeText(c,e,t)):(h.fillStyle=s,h.fillText(c,e,t)),h.globalAlpha=1}fitSize(e,t){const{ctx:i,cfg:s}=this;i.font=`${Math.round(s.type.weight)} 100px ${Zg}`;try{i.letterSpacing=`${s.type.tracking}em`}catch{}const o=i.measureText(e).width;return o>0?t/o*100:10}handPoints(e){const t=[];for(const i of[e.left,e.right]){if(!i)continue;t.push(i.position);const s=i.landmarks;if(s)for(const o of[4,8,12,16,20]){const c=s[o];c&&t.push({x:c.x,y:c.y})}}return t}render(e,t,i){const{ctx:s,cfg:o}=this,c=this.canvas.width,u=this.canvas.height;if(c===0||u===0)return;s.globalCompositeOperation="source-over",s.fillStyle=o.trail.fadeAlpha>=1?"#000":`#000000${ii(o.trail.fadeAlpha*255)}`,s.fillRect(0,0,c,u);const h=Zo(),f=(i==null?void 0:i.bass)??0,p=i!=null&&i.beat?o.audio.beatKick:0,g=this.handPoints(e);if(g.length>0){const y=g.reduce((w,_)=>w+_.x,0)/g.length,x=g.reduce((w,_)=>w+_.y,0)/g.length;this.aim.x+=(y-this.aim.x)*.08,this.aim.y+=(x-this.aim.y)*.08}const m=1+f*o.audio.bassScale;switch(s.textAlign="center",s.textBaseline="middle",s.lineJoin="round",Math.round(o.mode)){case 1:this.radial(c,u,m,h,p,t);break;case 2:this.wave(c,u,m,h,p,t);break;case 3:this.depth(c,u,m,h,p,t);break;case 4:this.scatter(c,u,m,h,p,t);break;default:this.mask(c,u,m,h,g,t);break}}spacing(e,t,i){const{cfg:s}=this,o=1+Math.sin(i*s.grid.breatheSpeed)*s.grid.breathe,c=Math.max(1,Math.round(s.grid.columns)),u=Math.max(1,Math.round(s.grid.rows)),h=s.grid.spread*o;return{cols:c,rows:Math.min(u,Math.max(1,Math.floor(UT/c))),dx:e/c*h,dy:t/u*h}}mask(e,t,i,s,o,c){const{cfg:u}=this,{cols:h,rows:f,dx:p,dy:g}=this.spacing(e,t,s),m=this.fitSize(this.text,p*u.type.fit)*i,y=Math.max(.01,u.mask.reach),x=e/t;let w=0;for(let _=0;_<f;_++)for(let S=0;S<h;S++,w++){const b=(S+.5)/h,E=(_+.5)/f;let C=0;for(const z of o){const D=(b-z.x)*x,G=E-z.y;C+=Math.exp(-((D*D+G*G)/(y*y)))}const I=u.mask.softness*.5,A=I<=0?C>u.mask.threshold?1:0:Math.min(1,Math.max(0,(C-(u.mask.threshold-I))/(I*2))),N=u.mask.invert>=.5?1-A:A;if(N<=.02)continue;const T=(S+.5)*p+(e-h*p)/2,F=(_+.5)*g+(t-f*g)/2;this.stamp(T,F,m,this.colorFor(w,s,c),N)}}radial(e,t,i,s,o,c){const{cfg:u}=this,{cols:h,rows:f,dx:p,dy:g}=this.spacing(e,t,s),m=this.fitSize(this.text,p*u.type.fit)*i,y=(u.radial.strength+o)*(1+Math.sin(s*u.radial.pulseSpeed)*u.radial.pulse),x=.5+(this.aim.x-.5)*u.motion.handInfluence,w=.5+(this.aim.y-.5)*u.motion.handInfluence;let _=0;for(let S=0;S<f;S++)for(let b=0;b<h;b++,_++){const E=(b+.5)/h,C=(S+.5)/f,I=E-x,A=C-w,N=Math.min(1,Math.hypot(I,A)*1.42),T=1+Math.pow(N,u.radial.power)*y,F=(x+I*T)*e,z=(w+A*T)*t;F<-p||F>e+p||z<-g||z>t+g||this.stamp(F,z,m,this.colorFor(_,s,c))}}wave(e,t,i,s,o,c){const{cfg:u}=this,{cols:h,rows:f,dx:p,dy:g}=this.spacing(e,t,s),m=this.fitSize(this.text,p*u.type.fit)*i,y=e*u.wave.amplitude*(1+o),x=(this.aim.y-.5)*2*u.motion.handInfluence;let w=0;for(let _=0;_<f;_++){const S=_/Math.max(1,f)*u.wave.frequency*Math.PI*2,b=Math.sin(S+s*u.wave.speed+x)*y,E=1+Math.sin(S+s*u.wave.speed)*u.wave.scaleWave;for(let C=0;C<h;C++,w++){const I=(C+.5)*p+(e-h*p)/2+b,A=(_+.5)*g+(t-f*g)/2,N=(I%e+e)%e;this.stamp(N,A,m*E,this.colorFor(w,s,c))}}}depth(e,t,i,s,o,c){const{cfg:u}=this,h=t*u.depth.size*i,f=Math.max(2,Math.round(u.depth.steps)),p=s*u.depth.speed,g=t*(u.depth.horizon+(this.aim.y-.5)*u.motion.handInfluence*.3);for(let m=0;m<f;m++){const y=((m/f+p)%1+1)%1,x=Math.pow(y,u.depth.curve),w=x*(1+o),_=g+x*(t-g)*1.1;_>t+h||w<=.001||this.stamp(e/2,_,Math.max(1,h*w),this.colorFor(m,s,c),Math.min(1,.25+x),this.text,u.type.tracking+x*u.depth.spread)}}scatter(e,t,i,s,o,c){const{cfg:u}=this,h=[...this.text];if(h.length===0)return;this.targets.length!==h.length&&(this.targets=h.map((y,x)=>({x:Xo.noise(x*3.7+1),y:Xo.noise(x*7.1+2),seed:Xo.noise(x*11.3+3)})));const f=Math.max(2,t*u.scatter.size*i),p=Math.min(1,Math.max(0,u.scatter.amount+o+(this.aim.x-.5)*u.motion.handInfluence)),g=f*(.62+u.type.tracking),m=g*h.length;h.forEach((y,x)=>{const w=this.targets[x],_=x*u.scatter.stagger*.1,S=Math.min(1,Math.max(0,p-_)),b=e/2-m/2+g*(x+.5),E=t/2;let C,I;if(u.scatter.spiral>=.5){const A=x/h.length*Math.PI*6+s*u.scatter.drift,N=(.1+x/h.length*.4)*Math.min(e,t);C=e/2+Math.cos(A)*N,I=t/2+Math.sin(A)*N}else{const A=s*u.scatter.drift+w.seed*Math.PI*2;C=(.08+w.x*.84)*e+Math.cos(A)*e*.05,I=(.08+w.y*.84)*t+Math.sin(A)*t*.05}this.stamp(b+(C-b)*S,E+(I-E)*S,f,this.colorFor(x,s,c),1,y)})}}const yd={frame:{zoom:1,spreadZoom:.5,handDrift:.12,mirror:0},slice:{count:12,offset:.06,speed:.8,beatKick:1.5},look:{tint:0,gain:1},trail:{fadeAlpha:1}};class DT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"cfg",yd);U(this,"video",null);U(this,"url",null);U(this,"drift",{x:0,y:0});this.canvas=e,this.ctx=t}setParams(e){this.cfg=vi(yd,e)}setClipUrl(e){var i;if(e===this.url||(this.url=e,(i=this.video)==null||i.pause(),this.video=null,!e))return;const t=document.createElement("video");t.src=e,t.loop=!0,t.muted=!0,t.playsInline=!0,t.play().catch(()=>{}),this.video=t}followTempo(e){const t=Math.min(4,Math.max(.25,_n()));if(Math.abs(e.playbackRate-t)>.02)try{e.playbackRate=t}catch{}}destroy(){var e;(e=this.video)==null||e.pause(),this.video=null}render(e,t,i){const{ctx:s,cfg:o}=this,c=this.canvas.width,u=this.canvas.height;if(c===0||u===0)return;o.trail.fadeAlpha>=1?(s.globalCompositeOperation="source-over",s.fillStyle="#000",s.fillRect(0,0,c,u)):(s.fillStyle=`#000000${ii(o.trail.fadeAlpha*255)}`,s.fillRect(0,0,c,u));const h=this.video,f=h&&h.readyState>=2&&h.videoWidth>0;if(h&&this.followTempo(h),!f){s.fillStyle=`${t[0]??"#ffffff"}66`,s.font="500 14px ui-monospace, monospace",s.textAlign="center",s.fillText(this.url?"LOADING CLIP…":"NO CLIP — UPLOAD ONE IN THE LIBRARY",c/2,u/2);return}const p=[e.left,e.right].filter(Boolean);let g=0,m=0;if(p.length>0){const T=p.reduce((z,D)=>z+D.position.x,0)/p.length,F=p.reduce((z,D)=>z+D.position.y,0)/p.length;g=(T-.5)*2,m=(F-.5)*2}this.drift.x+=(g-this.drift.x)*.1,this.drift.y+=(m-this.drift.y)*.1;const y=e.distanceBetweenHands??.4,x=Math.max(.05,o.frame.zoom*(1+(y-.4)*o.frame.spreadZoom)),w=Math.max(c/h.videoWidth,u/h.videoHeight),_=h.videoWidth*w*x,S=h.videoHeight*w*x,b=(c-_)/2+this.drift.x*c*o.frame.handDrift,E=(u-S)/2+this.drift.y*u*o.frame.handDrift,C=Zo(),I=i!=null&&i.beat?o.slice.beatKick:1,A=Math.max(1,Math.round(o.slice.count)),N=u/A;s.save(),o.frame.mirror>=.5&&(s.translate(c,0),s.scale(-1,1));for(let T=0;T<A;T++){const F=T/A*Math.PI*2,z=A<2?0:Math.sin(C*o.slice.speed+F)*c*o.slice.offset*I*(1+Math.abs(this.drift.x)),D=T*N;s.save(),s.beginPath(),s.rect(0,D,c,N+1),s.clip(),s.drawImage(h,b+z,E,_,S),s.restore()}s.restore(),o.look.tint>0&&(s.globalCompositeOperation="overlay",s.fillStyle=`${t[0]??"#ffffff"}${ii(o.look.tint*255)}`,s.fillRect(0,0,c,u),s.globalCompositeOperation="source-over"),o.look.gain>1&&(s.globalCompositeOperation="lighter",s.globalAlpha=Math.min(1,o.look.gain-1),s.drawImage(this.canvas,0,0),s.globalAlpha=1,s.globalCompositeOperation="source-over")}}const Sd={mode:0,grid:{columns:48,cellAspect:1.15,fill:.95,spreadDensity:.35},tone:{brightness:0,contrast:1.3,floor:.08,invert:0},letters:{ramp:0,weight:600,outline:0},shape:{rotate:0,anchor:0,minimum:.05},warp:{handPush:.04,ripple:0,rippleSpeed:.6},colour:{fromSource:0,spread:1},audio:{bassScale:.35,beatKick:.25},trail:{fadeAlpha:1}},Qg="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",xf=" .:-=+*#%@",vf=6e3;class kT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"cfg",Sd);U(this,"url",null);U(this,"kind","video");U(this,"video",null);U(this,"image",null);U(this,"failed",!1);U(this,"sampler");U(this,"samplerCtx");U(this,"text","N4TH");U(this,"aim",{x:.5,y:.5});this.canvas=e,this.ctx=t,this.sampler=document.createElement("canvas"),this.samplerCtx=this.sampler.getContext("2d",{willReadFrequently:!0})}setParams(e){this.cfg=vi(Sd,e)}setText(e){this.text=e.trim()||"N4TH"}setClipUrl(e,t="video"){var s;if(e===this.url&&t===this.kind||(this.url=e,this.kind=t,this.failed=!1,(s=this.video)==null||s.pause(),this.video=null,this.image=null,!e))return;if(t==="image"){const o=new Image;o.onerror=()=>{this.failed=!0},o.src=e,this.image=o;return}const i=document.createElement("video");i.src=e,i.loop=!0,i.muted=!0,i.playsInline=!0,i.onerror=()=>{this.failed=!0},i.play().catch(()=>{}),this.video=i}followTempo(e){const t=Math.min(4,Math.max(.25,_n()));if(Math.abs(e.playbackRate-t)>.02)try{e.playbackRate=t}catch{}}destroy(){var e;(e=this.video)==null||e.pause(),this.video=null,this.image=null}source(){const{video:e,image:t}=this;return e&&this.followTempo(e),e&&e.readyState>=2&&e.videoWidth>0?{el:e,w:e.videoWidth,h:e.videoHeight}:t&&t.complete&&t.naturalWidth>0?{el:t,w:t.naturalWidth,h:t.naturalHeight}:null}notice(e,t,i){const{ctx:s}=this;s.fillStyle=`${i[0]??"#ffffff"}66`,s.font="500 14px ui-monospace, monospace",s.textAlign="center",s.textBaseline="middle",s.fillText(this.failed?"THAT FILE WOULD NOT OPEN":this.url?"LOADING…":"NO FILE — UPLOAD ONE IN THE LIBRARY",e/2,t/2)}colorFor(e,t,i,s,o){const{colour:c}=this.cfg,u=Math.max(1,Math.round(c.spread)),h=o[Math.floor(e/u)%Math.max(1,o.length)]??"#ffffff";if(c.fromSource<=0)return h;if(c.fromSource>=1)return`rgb(${t}, ${i}, ${s})`;const f=h.replace("#",""),p=f.length===3?f.split("").map(_=>_+_).join(""):f,g=parseInt(p.slice(0,2),16)||0,m=parseInt(p.slice(2,4),16)||0,y=parseInt(p.slice(4,6),16)||0,x=c.fromSource,w=(_,S)=>Math.round(_+(S-_)*x);return`rgb(${w(g,t)}, ${w(m,i)}, ${w(y,s)})`}render(e,t,i){const{ctx:s,cfg:o}=this,c=this.canvas.width,u=this.canvas.height;if(c===0||u===0)return;s.globalCompositeOperation="source-over",s.fillStyle=o.trail.fadeAlpha>=1?"#000":`#000000${ii(o.trail.fadeAlpha*255)}`,s.fillRect(0,0,c,u);const h=this.source();if(!h){this.notice(c,u,t);return}const f=[e.left,e.right].filter(Boolean);if(f.length>0){const se=f.reduce((V,Y)=>V+Y.position.x,0)/f.length,X=f.reduce((V,Y)=>V+Y.position.y,0)/f.length;this.aim.x+=(se-this.aim.x)*.08,this.aim.y+=(X-this.aim.y)*.08}const g=1-((e.distanceBetweenHands??.4)-.4)*o.grid.spreadDensity;let m=Math.max(2,Math.round(o.grid.columns*Math.max(.25,g)));const x=c/m*Math.max(.2,o.grid.cellAspect);let w=Math.max(2,Math.round(u/x));m*w>vf&&(w=Math.max(2,Math.floor(vf/m)),m=Math.max(2,Math.min(m,Math.floor(vf/w))));const _=this.samplerCtx;if(!_)return;(this.sampler.width!==m||this.sampler.height!==w)&&(this.sampler.width=m,this.sampler.height=w);const S=Math.max(m/h.w,w/h.h),b=h.w*S,E=h.h*S;_.drawImage(h.el,(m-b)/2,(w-E)/2,b,E);let C;try{C=_.getImageData(0,0,m,w).data}catch{this.notice(c,u,t);return}const I=Zo(),A=(i==null?void 0:i.bass)??0,N=i!=null&&i.beat?o.audio.beatKick:0,T=1+A*o.audio.bassScale+N,F=Math.round(o.mode),z=this.text,D=c/m,G=u/w,ne=Math.min(D,G)*o.grid.fill*T;if(s.textAlign="center",s.textBaseline="middle",s.lineJoin="round",F===0){s.font=`${Math.round(o.letters.weight)} 100px ${Qg}`;const se=s.measureText("M").width||60,X=Math.max(1,D*o.grid.fill*T/(se/100));s.font=`${Math.round(o.letters.weight)} ${X}px ${Qg}`,s.lineWidth=Math.max(.5,X*.06)}for(let se=0;se<w;se++)for(let X=0;X<m;X++){const V=(se*m+X)*4,Y=C[V],q=C[V+1],ie=C[V+2];let te=(.2126*Y+.7152*q+.0722*ie)/255;if(te=(te-.5)*o.tone.contrast+.5+o.tone.brightness,o.tone.invert>=.5&&(te=1-te),te=Math.min(1,Math.max(0,te)),te<=o.tone.floor)continue;const O=(te-o.tone.floor)/(1-o.tone.floor);let ee=(X+.5)*D,ge=(se+.5)*G;if(o.warp.handPush!==0&&f.length>0){const W=ee/c-this.aim.x,me=ge/u-this.aim.y,oe=Math.exp(-(W*W+me*me)*8);ee+=W*oe*c*o.warp.handPush,ge+=me*oe*u*o.warp.handPush}o.warp.ripple!==0&&(ge+=Math.sin(X*.35+I*o.warp.rippleSpeed)*G*o.warp.ripple);const Te=se*m+X,Se=this.colorFor(Te,Y,q,ie,t);switch(F){case 1:{const W=ne/2*Math.max(o.shape.minimum,O);s.fillStyle=Se,s.beginPath(),s.arc(ee,ge,W,0,Math.PI*2),s.fill();break}case 2:{const W=ne*Math.max(o.shape.minimum,O);s.fillStyle=Se,o.shape.rotate!==0?(s.save(),s.translate(ee,ge),s.rotate(o.shape.rotate*Math.PI*.25),s.fillRect(-W/2,-W/2,W,W),s.restore()):s.fillRect(ee-W/2,ge-W/2,W,W);break}case 3:{const W=Math.max(1,D*o.grid.fill*.6),me=G*o.grid.fill*T*Math.max(o.shape.minimum,O),oe=o.shape.anchor>=.5?(se+1)*G-me+(ge-(se+.5)*G):ge-me/2;s.fillStyle=Se,s.fillRect(ee-W/2,oe,W,me);break}default:{const W=o.letters.ramp>=.5?z[Te%z.length]:xf[Math.min(xf.length-1,Math.round(O*(xf.length-1)))];if(!W||W===" ")break;o.letters.outline>=.5?(s.strokeStyle=Se,s.strokeText(W,ee,ge)):(s.globalAlpha=o.letters.ramp>=.5?O:1,s.fillStyle=Se,s.fillText(W,ee,ge),s.globalAlpha=1);break}}}}}const Md={form:{lobes:7,spread:1.3,size:.72,blend:.82,ripple:.2,rippleScale:1.5},motion:{drift:.24,churn:.35,spin:.08},material:{dispersion:.85,rimTightness:2,split:.1,silver:.92,facing:.05,polish:52},light:{keyX:-.55,keyY:.72,key:2.1,fill:.3,ambient:.03},hands:{push:.55,spread:.45,kick:.55},look:{grain:.055,gain:1}},OT=`#version 300 es
in vec2 p;
void main() { gl_Position = vec4(p, 0.0, 1.0); }`,zT=`#version 300 es
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
}`;class BT{constructor(e,t){U(this,"canvas");U(this,"ctx");U(this,"cfg",Md);U(this,"gl",null);U(this,"surface");U(this,"program",null);U(this,"uniforms",{});U(this,"aim",{x:0,y:0});U(this,"kick",0);U(this,"failed",!1);this.canvas=e,this.ctx=t,this.surface=document.createElement("canvas"),this.init()}setParams(e){this.cfg=vi(Md,e)}init(){const e=this.surface.getContext("webgl2",{alpha:!1,antialias:!1,powerPreference:"high-performance"});if(!e){this.failed=!0;return}this.gl=e;const t=(h,f)=>{const p=e.createShader(h);return e.shaderSource(p,f),e.compileShader(p),e.getShaderParameter(p,e.COMPILE_STATUS)?p:(console.error("Chrome shader:",e.getShaderInfoLog(p)),null)},i=t(e.VERTEX_SHADER,OT),s=t(e.FRAGMENT_SHADER,zT);if(!i||!s){this.failed=!0;return}const o=e.createProgram();if(e.attachShader(o,i),e.attachShader(o,s),e.linkProgram(o),!e.getProgramParameter(o,e.LINK_STATUS)){console.error("Chrome link:",e.getProgramInfoLog(o)),this.failed=!0;return}this.program=o,e.useProgram(o);const c=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,c),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),e.STATIC_DRAW);const u=e.getAttribLocation(o,"p");e.enableVertexAttribArray(u),e.vertexAttribPointer(u,2,e.FLOAT,!1,0,0);for(const h of["uSize","uTime","uLobes","uSpread","uSize2","uBlend","uRipple","uRippleScale","uDrift","uChurn","uSpin","uDispersion","uRimTight","uSplit","uSilver","uFacing","uPolish","uKey","uKeyGain","uFill","uAmbient","uPush","uKick","uGrain","uGain","uHue"])this.uniforms[h]=e.getUniformLocation(o,h)}destroy(){var t;const e=this.gl;e&&(this.program&&e.deleteProgram(this.program),(t=e.getExtension("WEBGL_lose_context"))==null||t.loseContext(),this.gl=null,this.program=null)}hueFrom(e){const t=(e[0]??"#8888ff").replace("#",""),i=t.length===3?t.split("").map(u=>u+u).join(""):t,s=(parseInt(i.slice(0,2),16)||0)/255,o=(parseInt(i.slice(2,4),16)||0)/255,c=(parseInt(i.slice(4,6),16)||0)/255;return Math.atan2(Math.sqrt(3)*(o-c),2*s-o-c)-2.2}render(e,t,i){const{ctx:s,cfg:o}=this,c=this.canvas.width,u=this.canvas.height;if(c===0||u===0)return;const h=this.gl;if(this.failed||!h||!this.program){s.fillStyle="#000",s.fillRect(0,0,c,u),s.fillStyle="rgba(255,255,255,0.4)",s.font="500 14px ui-monospace, monospace",s.textAlign="center",s.fillText("CHROME NEEDS WEBGL2",c/2,u/2);return}const f=.6,p=Math.max(2,Math.round(c*f)),g=Math.max(2,Math.round(u*f));(this.surface.width!==p||this.surface.height!==g)&&(this.surface.width=p,this.surface.height=g),h.viewport(0,0,p,g),h.useProgram(this.program);const m=[e.left,e.right].filter(Boolean);let y=0,x=0;if(m.length>0){const C=m.reduce((A,N)=>A+N.position.x,0)/m.length,I=m.reduce((A,N)=>A+N.position.y,0)/m.length;y=(C-.5)*2,x=(.5-I)*2}this.aim.x+=(y-this.aim.x)*.06,this.aim.y+=(x-this.aim.y)*.06;const w=(e.clapping?e.clapIntensity??1:0)+(i!=null&&i.beat?i.beatIntensity:0)+((i==null?void 0:i.onset)??0)*.5;this.kick=Math.max(this.kick*.92,Math.min(1.6,w));const _=e.distanceBetweenHands??.4,S=(i==null?void 0:i.bass)??0,b=this.uniforms,E=(C,I)=>h.uniform1f(b[C],I);h.uniform2f(b.uSize,p,g),E("uTime",Zo()),E("uLobes",Math.max(1,Math.min(7,Math.round(o.form.lobes)))),E("uSpread",o.form.spread*(1+(_-.4)*o.hands.spread)+this.kick*o.hands.kick*.35),E("uSize2",o.form.size*(1+S*.22)),E("uBlend",Math.max(.05,o.form.blend)),E("uRipple",o.form.ripple*(1+this.kick*o.hands.kick*1.6)),E("uRippleScale",o.form.rippleScale),E("uDrift",o.motion.drift),E("uChurn",o.motion.churn),E("uSpin",o.motion.spin),E("uDispersion",o.material.dispersion*(1+this.kick*.35)),E("uRimTight",Math.max(.5,o.material.rimTightness)),E("uSplit",o.material.split),E("uSilver",o.material.silver),E("uFacing",o.material.facing),E("uPolish",Math.max(2,o.material.polish)),h.uniform2f(b.uKey,o.light.keyX,o.light.keyY),E("uKeyGain",o.light.key),E("uFill",o.light.fill),E("uAmbient",o.light.ambient),h.uniform2f(b.uPush,this.aim.x*o.hands.push,this.aim.y*o.hands.push),E("uKick",this.kick),E("uGrain",o.look.grain),E("uGain",o.look.gain),E("uHue",this.hueFrom(t)),h.drawArrays(h.TRIANGLES,0,3),s.globalCompositeOperation="source-over",s.fillStyle="#000",s.fillRect(0,0,c,u),s.imageSmoothingEnabled=!0,s.drawImage(this.surface,0,0,c,u)}}function av(a,e,t,i){var o,c;let s;switch(a){case"geometric":s=new F0(e,t);break;case"particles":s=new my(e,t);break;case"waves":s=new gy(e,t);break;case"glitch":s=new xy(e,t);break;case"technical":s=new vy(e,t);break;case"lottie":s=new _y(e,t);break;case"lottie-classic":s=new ET(e,t);break;case"linefield":s=new wy(e,t);break;case"thicklines":s=new MT(e,t);break;case"flowfield":s=new wT(e,t);break;case"liquidchrome":s=new bT(e,t);break;case"chromatic":s=new yy(e,t);break;case"halftone":s=new Sy(e,t);break;case"matrix":s=new My(e,t);break;case"distortedcamera":s=new sT(e,t),i&&((o=s.setVideoElement)==null||o.call(s,i));break;case"cyberstream":s=new aT(e,t);break;case"facecloud":s=new oT(e,t);break;case"face":s=new gd(e,t);break;case"morphing":s=new lT(e,t);break;case"cubewall":s=new cT(e,t);break;case"smokehand-torus":s=new Xc(e,t);break;case"smokehand-hand":s=new Xc(e,t),(c=s.setSmokeHandModel)==null||c.call(s,"hand");break;case"network-cube":s=new TT(e,t);break;case"elastic-net":s=new CT(e,t);break;case"text":s=new Xo(e,t);break;case"video":s=new DT(e,t);break;case"mosaic":s=new kT(e,t);break;case"chrome":s=new BT(e,t);break;case"ripple":s=new NT(e,t);break;case"digitalblocks":s=new AT(e,t);break;default:s=new F0(e,t);break}return s}const Jg=[.35,.45,.8,1.15,1.5,1.9],HT=3.6,GT=2.2,VT=6;function WT(){return{rate:1,clap:0}}function ex(a){if(!a)return null;if(a.gesture==="fist")return Jg[0];const e=a.fingerCount;return e===void 0?null:Jg[Math.min(5,Math.max(1,Math.round(e)))]}function XT(a,e,t){const i=[ex(a.left),ex(a.right)].filter(c=>c!==null),s=i.length?Math.max(...i):1,o=Math.min(1,t*VT);return e.rate+=(s-e.rate)*o,a.clapping&&(e.clap=Math.max(e.clap,HT*Math.max(.5,a.clapIntensity??1))),e.clap=Math.max(0,e.clap-e.clap*GT*t),e.rate+e.clap}const Wa={master:{enabled:1},transition:{enabled:1,duration:.6},feedback:{enabled:1,mix:1,amount:0,zoom:1,rotate:0,offsetX:0,offsetY:0,hueShift:0},colour:{enabled:1,mix:1,hue:0,saturation:1},displace:{enabled:1,mix:1,amount:0,scale:3,speed:.2},rgbSplit:{enabled:1,mix:1,amount:0},kaleido:{enabled:1,mix:1,segments:0,spin:0},pixelate:{enabled:1,mix:1,pixel:0,levels:0},noiseTile:{enabled:1,mix:1,size:0,grain:.35,drift:.4},echo:{enabled:1,mix:1,count:0,depth:.18,fade:.68,speed:.25},fluted:{enabled:1,mix:1,ribs:0,bend:.5,shine:.35,vertical:1}},Jc=`
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
`,jT=`${Jc}
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
}`,qT=`${Jc}
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
}`,YT=`
uniform float uAmount;
uniform float uMix;

void main() {
  vec2 dir = (vUv - 0.5) * uAmount;
  vec3 wet = vec3(
    texture(uTex, clamp(vUv + dir, 0.0, 1.0)).r,
    texture(uTex, vUv).g,
    texture(uTex, clamp(vUv - dir, 0.0, 1.0)).b);
  fragColor = vec4(mix(texture(uTex, vUv).rgb, wet, uMix), 1.0);
}`,$T=`
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
}`,KT=`
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
}`,ZT=`
uniform sampler2D uNext;
uniform float uMix;

void main() {
  fragColor = vec4(mix(texture(uTex, vUv).rgb, texture(uNext, vUv).rgb, uMix), 1.0);
}`,QT=`
void main() {
  fragColor = vec4(texture(uTex, vUv).rgb, 1.0);
}`,JT=`${Jc}
uniform float uHue;
uniform float uSaturation;
uniform float uMix;

void main() {
  vec3 src = texture(uTex, vUv).rgb;
  vec3 wet = hueRotate(src, uHue);
  float grey = dot(wet, vec3(0.299, 0.587, 0.114));
  wet = mix(vec3(grey), wet, uSaturation);
  fragColor = vec4(mix(src, clamp(wet, 0.0, 1.0), uMix), 1.0);
}`,eC=`${Jc}
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
}`,tC=`
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
}`,nC=`
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
}`;function xn(a,e){return a.enabled>=.5&&a.mix>0&&e}function iC(a,e){const t=vi(Wa,e);switch(a){case"feedback":return xn(t.feedback,t.feedback.amount>0);case"colour":return xn(t.colour,t.colour.hue!==0||t.colour.saturation!==1);case"displace":return xn(t.displace,t.displace.amount>0);case"rgbSplit":return xn(t.rgbSplit,t.rgbSplit.amount>0);case"kaleido":return xn(t.kaleido,t.kaleido.segments>=2);case"pixelate":return xn(t.pixelate,t.pixelate.pixel>1||t.pixelate.levels>=2);case"noiseTile":return xn(t.noiseTile,t.noiseTile.size>1);case"echo":return xn(t.echo,t.echo.count>=1);case"fluted":return xn(t.fluted,t.fluted.ribs>=1);case"transition":return t.transition.enabled>=.5;default:return!1}}function ov(a){const e=vi(Wa,a);return e.master.enabled<.5?!1:xn(e.colour,e.colour.hue!==0||e.colour.saturation!==1)||xn(e.feedback,e.feedback.amount>0)||xn(e.displace,e.displace.amount>0)||xn(e.rgbSplit,e.rgbSplit.amount>0)||xn(e.kaleido,e.kaleido.segments>=2)||xn(e.pixelate,e.pixelate.pixel>1||e.pixelate.levels>=2)||xn(e.noiseTile,e.noiseTile.size>1)||xn(e.echo,e.echo.count>=1)||xn(e.fluted,e.fluted.ribs>=1)}class rC{constructor(e){U(this,"gl");U(this,"cfg",Wa);U(this,"programs",{});U(this,"sourceTexture");U(this,"previousTexture");U(this,"blendTarget");U(this,"targets");U(this,"feedback");U(this,"width",1);U(this,"height",1);U(this,"ping",0);U(this,"feedbackPrimed",!1);const t=e.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,powerPreference:"high-performance"});if(!t)throw new Error("WebGL2 is not available");this.gl=t,this.programs={colour:di(t,JT),copy:di(t,QT),feedback:di(t,jT),displace:di(t,qT),rgbSplit:di(t,YT),kaleido:di(t,$T),pixelate:di(t,KT),blend:di(t,ZT),noiseTile:di(t,eC),echo:di(t,tC),fluted:di(t,nC)},t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),this.sourceTexture=t.createTexture(),this.previousTexture=t.createTexture();for(const i of[this.sourceTexture,this.previousTexture])t.bindTexture(t.TEXTURE_2D,i),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE);this.blendTarget=Na(t,1,1),this.targets=[Na(t,1,1),Na(t,1,1)],this.feedback=Na(t,1,1)}setParams(e){this.cfg=vi(Wa,e)}live(e,t){return this.cfg.master.enabled>=.5&&xn(e,t)}get active(){const e=this.cfg;return e.master.enabled<.5?!1:this.live(e.colour,e.colour.hue!==0||e.colour.saturation!==1)||this.live(e.feedback,e.feedback.amount>0)||this.live(e.displace,e.displace.amount>0)||this.live(e.rgbSplit,e.rgbSplit.amount>0)||this.live(e.kaleido,e.kaleido.segments>=2)||this.live(e.pixelate,e.pixelate.pixel>1||e.pixelate.levels>=2)||this.live(e.noiseTile,e.noiseTile.size>1)||this.live(e.echo,e.echo.count>=1)||this.live(e.fluted,e.fluted.ribs>=1)}resize(e,t){if(this.width===e&&this.height===t)return;const i=this.gl;this.width=e,this.height=t,Fa(i,this.targets[0],e,t),Fa(i,this.targets[1],e,t),Fa(i,this.feedback,e,t),Fa(i,this.blendTarget,e,t),this.feedbackPrimed=!1}use(e,t=this.width,i=this.height,s=0){const o=this.gl,c=this.programs[e];return o.useProgram(c),o.uniform2f(o.getUniformLocation(c,"uResolution"),t,i),o.uniform1f(o.getUniformLocation(c,"uTime"),s),c}next(){return this.ping^=1,this.targets[this.ping]}render(e,t,i,s=1){const o=this.gl,c=e.width,u=e.height;if(c===0||u===0)return;const h=o.canvas;(h.width!==c||h.height!==u)&&(h.width=c,h.height=u),this.resize(c,u),o.bindTexture(o.TEXTURE_2D,this.sourceTexture),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,o.RGBA,o.UNSIGNED_BYTE,e);let f=this.sourceTexture;if(i&&s<1&&i.width===c&&i.height===u){o.bindTexture(o.TEXTURE_2D,this.previousTexture),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,o.RGBA,o.UNSIGNED_BYTE,i);const x=this.use("blend");Cn(o,x,"uTex",this.previousTexture,0),Cn(o,x,"uNext",this.sourceTexture,1),o.uniform1f(o.getUniformLocation(x,"uMix"),s),Yn(o,this.blendTarget,c,u),f=this.blendTarget.texture}if(!this.active){this.feedbackPrimed&&(this.feedbackPrimed=!1);const x=this.use("copy");Cn(o,x,"uTex",f,0),Yn(o,null,c,u);return}const p=this.cfg;let g=f,m;if(this.live(p.colour,p.colour.hue!==0||p.colour.saturation!==1)){const x=this.use("colour");Cn(o,x,"uTex",g,0),o.uniform1f(o.getUniformLocation(x,"uHue"),p.colour.hue),o.uniform1f(o.getUniformLocation(x,"uSaturation"),p.colour.saturation),o.uniform1f(o.getUniformLocation(x,"uMix"),p.colour.mix),m=this.next(),Yn(o,m,c,u),g=m.texture}if(this.live(p.feedback,p.feedback.amount>0)){const x=this.use("feedback");Cn(o,x,"uTex",g,0),Cn(o,x,"uFeedback",this.feedback.texture,1),o.uniform1f(o.getUniformLocation(x,"uAmount"),this.feedbackPrimed?p.feedback.amount:0),o.uniform1f(o.getUniformLocation(x,"uZoom"),p.feedback.zoom),o.uniform1f(o.getUniformLocation(x,"uRotate"),p.feedback.rotate),o.uniform2f(o.getUniformLocation(x,"uOffset"),p.feedback.offsetX,p.feedback.offsetY),o.uniform1f(o.getUniformLocation(x,"uHueShift"),p.feedback.hueShift),o.uniform1f(o.getUniformLocation(x,"uMix"),p.feedback.mix),m=this.next(),Yn(o,m,c,u),g=m.texture}if(this.live(p.displace,p.displace.amount>0)){const x=this.use("displace",c,u,t);Cn(o,x,"uTex",g,0),o.uniform1f(o.getUniformLocation(x,"uAmount"),p.displace.amount),o.uniform1f(o.getUniformLocation(x,"uScale"),p.displace.scale),o.uniform1f(o.getUniformLocation(x,"uSpeed"),p.displace.speed),o.uniform1f(o.getUniformLocation(x,"uMix"),p.displace.mix),m=this.next(),Yn(o,m,c,u),g=m.texture}if(this.live(p.rgbSplit,p.rgbSplit.amount>0)){const x=this.use("rgbSplit");Cn(o,x,"uTex",g,0),o.uniform1f(o.getUniformLocation(x,"uAmount"),p.rgbSplit.amount),o.uniform1f(o.getUniformLocation(x,"uMix"),p.rgbSplit.mix),m=this.next(),Yn(o,m,c,u),g=m.texture}if(this.live(p.kaleido,p.kaleido.segments>=2)){const x=this.use("kaleido");Cn(o,x,"uTex",g,0),o.uniform1f(o.getUniformLocation(x,"uSegments"),Math.round(p.kaleido.segments)),o.uniform1f(o.getUniformLocation(x,"uSpin"),p.kaleido.spin),o.uniform1f(o.getUniformLocation(x,"uMix"),p.kaleido.mix),m=this.next(),Yn(o,m,c,u),g=m.texture}if(this.live(p.pixelate,p.pixelate.pixel>1||p.pixelate.levels>=2)){const x=this.use("pixelate");Cn(o,x,"uTex",g,0),o.uniform1f(o.getUniformLocation(x,"uPixel"),p.pixelate.pixel),o.uniform1f(o.getUniformLocation(x,"uLevels"),p.pixelate.levels),o.uniform1f(o.getUniformLocation(x,"uMix"),p.pixelate.mix),m=this.next(),Yn(o,m,c,u),g=m.texture}if(this.live(p.noiseTile,p.noiseTile.size>1)){const x=this.use("noiseTile",c,u,t);Cn(o,x,"uTex",g,0),o.uniform1f(o.getUniformLocation(x,"uSize"),p.noiseTile.size),o.uniform1f(o.getUniformLocation(x,"uGrain"),p.noiseTile.grain),o.uniform1f(o.getUniformLocation(x,"uDrift"),p.noiseTile.drift),o.uniform1f(o.getUniformLocation(x,"uMix"),p.noiseTile.mix),m=this.next(),Yn(o,m,c,u),g=m.texture}if(this.live(p.echo,p.echo.count>=1)){const x=this.use("echo",c,u,t);Cn(o,x,"uTex",g,0),o.uniform1f(o.getUniformLocation(x,"uCount"),p.echo.count),o.uniform1f(o.getUniformLocation(x,"uDepth"),p.echo.depth),o.uniform1f(o.getUniformLocation(x,"uFade"),p.echo.fade),o.uniform1f(o.getUniformLocation(x,"uSpeed"),p.echo.speed),o.uniform1f(o.getUniformLocation(x,"uMix"),p.echo.mix),m=this.next(),Yn(o,m,c,u),g=m.texture}if(this.live(p.fluted,p.fluted.ribs>=1)){const x=this.use("fluted",c,u,t);Cn(o,x,"uTex",g,0),o.uniform1f(o.getUniformLocation(x,"uRibs"),p.fluted.ribs),o.uniform1f(o.getUniformLocation(x,"uBend"),p.fluted.bend),o.uniform1f(o.getUniformLocation(x,"uShine"),p.fluted.shine),o.uniform1f(o.getUniformLocation(x,"uVertical"),p.fluted.vertical),m=this.next(),Yn(o,m,c,u),g=m.texture}const y=this.use("copy");Cn(o,y,"uTex",g,0),Yn(o,this.feedback,c,u),this.feedbackPrimed=!0,Cn(o,y,"uTex",g,0),Yn(o,null,c,u)}destroy(){var t;const e=this.gl;for(const i of Object.values(this.programs))e.deleteProgram(i);e.deleteTexture(this.sourceTexture),e.deleteTexture(this.previousTexture),Ua(e,this.blendTarget),Ua(e,this.targets[0]),Ua(e,this.targets[1]),Ua(e,this.feedback),(t=e.getExtension("WEBGL_lose_context"))==null||t.loseContext()}}const sC="screen";function tx(a,e){return a.duration<=0?1:Math.min(1,(e-a.fadeStart)/1e3/a.duration)}function aC({handData:a,layerColors:e,layers:t,videoElement:i,audioData:s,layerParams:o,layerFx:c,content:u,motion:h,onCanvasReady:f}){const p=he.useRef(null),g=he.useRef(null),m=he.useRef(f);m.current=f;const y=he.useCallback(V=>{var Y;p.current=V,_.current=V?V.getContext("2d"):null,(Y=m.current)==null||Y.call(m,V)},[]),x=he.useRef([]),w=he.useRef([]),_=he.useRef(null),[S,b]=he.useState(!1),E=he.useRef([]),C=he.useRef(t),I=he.useRef(null),A=he.useRef(a),N=he.useRef(e),T=he.useRef(i??null),F=he.useRef(s),z=he.useRef(o),D=he.useRef(c),G=he.useRef(u),ne=he.useRef(h),se=he.useRef(WT());he.useEffect(()=>{A.current=a,N.current=e,T.current=i??null,F.current=s,z.current=o,C.current=t,D.current=c,G.current=u,ne.current=h},[a,e,i,s,o,t,c,u,h]),he.useEffect(()=>{var V,Y,q,ie;for(const te of E.current){if(!te)continue;const O=u.clips[te.current.pattern];(Y=(V=te.current.renderer).setText)==null||Y.call(V,u.text),(ie=(q=te.current.renderer).setClipUrl)==null||ie.call(q,(O==null?void 0:O.url)??null,O==null?void 0:O.kind)}},[u]),he.useEffect(()=>{E.current.forEach((V,Y)=>{var q,ie;(ie=V==null?void 0:(q=V.current.renderer).setParams)==null||ie.call(q,(o==null?void 0:o[Y])??{})})},[o]),he.useEffect(()=>{x.current.forEach((V,Y)=>{V==null||V.setParams((c==null?void 0:c[Y])??{})})},[c]);const X=he.useCallback(V=>{var q;const Y=x.current[V];if(Y)return Y;if(S)return null;try{const ie=document.createElement("canvas"),te=new rC(ie);return te.setParams(((q=D.current)==null?void 0:q[V])??{}),x.current[V]=te,w.current[V]=ie,te}catch(ie){return console.error("Post pipeline unavailable; this layer plays without effects:",ie),b(!0),null}},[S]);return he.useEffect(()=>{const V=document.createElement("canvas");I.current=V.getContext("2d");const Y=()=>{const ge=window.innerWidth,Te=window.innerHeight;V.width=ge,V.height=Te;for(const W of E.current)for(const me of[W==null?void 0:W.current,W==null?void 0:W.outgoing])me&&(me.canvas.width=ge,me.canvas.height=Te);const Se=p.current;Se&&(Se.width=ge,Se.height=Te)};Y(),window.addEventListener("resize",Y);const q=(ge,Te)=>{var Se,W;try{T.current&&((W=(Se=ge.renderer).setVideoElement)==null||W.call(Se,T.current));const me=C.current[Te];ge.renderer.render(A.current,N.current[Te]??N.current[0]??[],F.current,me==null?void 0:me.colorMode)}catch(me){ge.reportedError||(ge.reportedError=!0,console.error(`Renderer "${ge.pattern}" threw while drawing:`,me))}};let ie=!1;const te=(ge,Te)=>{ge.globalCompositeOperation="source-over",ge.globalAlpha=1,ge.fillStyle="#000",ge.fillRect(0,0,ge.canvas.width,ge.canvas.height),E.current.forEach((Se,W)=>{var ht,Qe,pt;if(!Se)return;const me=W===0,oe=((ht=C.current[W])==null?void 0:ht.opacity)??1;if(oe<=0)return;const Re=Se.outgoing?tx(Se.outgoing,Te):1,Oe=ov(((Qe=D.current)==null?void 0:Qe[W])??{});let Ce=null;if(Oe){const wt=X(W);if(wt)try{wt.render(Se.current.canvas,Te/1e3,((pt=Se.outgoing)==null?void 0:pt.canvas)??null,Re),Ce=w.current[W]??null}catch(mt){ie||(ie=!0,console.error("Post pipeline threw while presenting:",mt))}}ge.globalCompositeOperation=me?"source-over":sC,Ce?(ge.globalAlpha=oe,ge.drawImage(Ce,0,0,ge.canvas.width,ge.canvas.height)):(Se.outgoing&&(ge.globalAlpha=oe*(me?1:1-Re),ge.drawImage(Se.outgoing.canvas,0,0)),ge.globalAlpha=oe*Re,ge.drawImage(Se.current.canvas,0,0))}),ge.globalAlpha=1,ge.globalCompositeOperation="source-over"};let O=performance.now();const ee=()=>{var me;const ge=performance.now(),Te=I.current,Se=Math.min(.1,(ge-O)/1e3);O=ge;const W=XT(A.current,se.current,Se);py(Se,ne.current*W),E.current.forEach((oe,Re)=>{var Oe,Ce;oe&&(q(oe.current,Re),oe.outgoing&&(tx(oe.outgoing,ge)>=1?((Ce=(Oe=oe.outgoing.renderer).destroy)==null||Ce.call(Oe),oe.outgoing=null):q(oe.outgoing,Re)))}),Te&&E.current.length>0&&(te(Te,ge),(me=_.current)==null||me.drawImage(Te.canvas,0,0)),g.current=requestAnimationFrame(ee)};return ee(),()=>{var ge,Te,Se,W,me;window.removeEventListener("resize",Y),g.current&&cancelAnimationFrame(g.current);for(const oe of x.current)oe==null||oe.destroy();x.current=[],w.current=[];for(const oe of E.current)(Se=(ge=oe==null?void 0:oe.outgoing)==null?void 0:(Te=ge.renderer).destroy)==null||Se.call(Te),(me=oe==null?void 0:(W=oe.current.renderer).destroy)==null||me.call(W);E.current=[],I.current=null}},[]),he.useEffect(()=>{var te,O,ee,ge,Te,Se;const V=E.current,Y=vi(Wa,((te=D.current)==null?void 0:te[0])??{}).transition,q=Y.enabled>=.5?Y.duration:0,ie=(W,me)=>{var ht,Qe,pt,wt;const oe=document.createElement("canvas");oe.width=window.innerWidth,oe.height=window.innerHeight;const Re=oe.getContext("2d");if(!Re)return null;let Oe;try{Oe=av(W,oe,Re,T.current)}catch(mt){return console.error("Failed to create renderer for pattern:",W,mt),null}(Qe=Oe.setParams)==null||Qe.call(Oe,((ht=z.current)==null?void 0:ht[me])??{}),(pt=Oe.setText)==null||pt.call(Oe,G.current.text);const Ce=G.current.clips[W];return(wt=Oe.setClipUrl)==null||wt.call(Oe,(Ce==null?void 0:Ce.url)??null,Ce==null?void 0:Ce.kind),{renderer:Oe,canvas:oe,pattern:W}};t.forEach(({pattern:W},me)=>{var Oe,Ce,ht,Qe,pt;const oe=V[me];if((oe==null?void 0:oe.current.pattern)===W)return;const Re=ie(W,me);if(Re){if(!oe){V[me]={current:Re,outgoing:null};return}(ht=(Oe=oe.outgoing)==null?void 0:(Ce=Oe.renderer).destroy)==null||ht.call(Ce),q>0?oe.outgoing={...oe.current,fadeStart:performance.now(),duration:q}:((pt=(Qe=oe.current.renderer).destroy)==null||pt.call(Qe),oe.outgoing=null),oe.current=Re}});for(const W of V.splice(t.length))(ge=(O=W==null?void 0:W.outgoing)==null?void 0:(ee=O.renderer).destroy)==null||ge.call(ee),(Se=W==null?void 0:(Te=W.current.renderer).destroy)==null||Se.call(Te)},[t.map(V=>V.pattern).join("|")]),H.jsx("canvas",{ref:y,className:"absolute inset-0 w-full h-full z-0"})}const lv={bass:[20,160],lowMid:[160,800],mid:[800,4e3],high:[4e3,12e3]},oC=Object.keys(lv),lC=.002,cC=.04,uC=.25,hC=.0016,fC=6,dC=90,pC=170,mC=1.9;function gC(){const a=()=>({floor:255,ceiling:0});return{envelopes:{bass:a(),lowMid:a(),mid:a(),high:a()},overall:a(),previous:null,flux:[],lastBeat:0,onset:0}}function nx(a,e){a.floor+=(e-a.floor)*(e>a.floor?lC:cC),a.ceiling+=(e-a.ceiling)*(e>a.ceiling?uC:hC);const t=a.ceiling-a.floor;return t<fC?Math.min(1,e/190):Math.min(1,Math.max(0,(e-a.floor)/t))}function ix(a,e,t){const i=Math.max(0,Math.min(a.length-1,e)),s=Math.max(i+1,Math.min(a.length,t));let o=0;for(let c=i;c<s;c++)o+=a[c];return o/(s-i)}function xC(a,e,t,i,s){const o=e/2/a.length,c=A=>Math.round(A/o),u={};for(const A of oC){const[N,T]=lv[A];u[A]=nx(t.envelopes[A],ix(a,c(N),c(T)))}const h=nx(t.overall,ix(a,c(20),c(12e3))),f=c(1e4),p=new Float32Array(f);for(let A=0;A<f&&A<a.length;A++)p[A]=a[A];let g=0;if(t.previous){for(let A=0;A<p.length;A++){const N=p[A]-(t.previous[A]??0);N>0&&(g+=N)}g/=p.length}t.previous=p,t.flux.push(g),t.flux.length>dC&&t.flux.shift();const m=t.flux.reduce((A,N)=>A+N,0)/Math.max(1,t.flux.length);let y=0;for(const A of t.flux)y+=(A-m)**2;const x=Math.sqrt(y/Math.max(1,t.flux.length)),w=mC*(1.4-i*.8),_=m+x*w,b=t.flux.length>=20&&g>_&&g>.35&&s-t.lastBeat>pC;b&&(t.lastBeat=s);const E=_>0?Math.min(1,(g-_)/(_+.6)):0;t.onset=Math.max(t.onset*.9,b?Math.max(.35,E):0);const C=.55+i*.9,I=A=>Math.min(1,A*C);return{bass:I(u.bass),lowMid:I(u.lowMid),mid:I(u.mid),high:I(u.high),overall:I(h),beat:b,beatIntensity:b?Math.min(1,Math.max(.3,E)):0,onset:t.onset}}function vC({onAudioData:a,onStream:e,enabled:t,sensitivity:i}){const s=he.useRef(null),o=he.useRef(null),c=he.useRef(null),u=he.useRef(null),h=he.useRef(null),f=he.useRef(gC()),[p,g]=he.useState(null),m=he.useRef(e);m.current=e;const y=he.useRef(i);return y.current=i,he.useEffect(()=>{let x=!1;const w=()=>{var E;x=!0,h.current!==null&&(cancelAnimationFrame(h.current),h.current=null),u.current&&(u.current.getTracks().forEach(C=>C.stop()),u.current=null,(E=m.current)==null||E.call(m,null));const b=s.current;s.current=null,b&&b.state!=="closed"&&b.close(),o.current=null,c.current=null};if(!t){w(),a({bass:0,lowMid:0,mid:0,high:0,overall:0,beat:!1,beatIntensity:0,onset:0});return}const _=async()=>{var b;try{const E=await navigator.mediaDevices.getUserMedia({audio:!0});if(x){E.getTracks().forEach(F=>F.stop());return}u.current=E,(b=m.current)==null||b.call(m,E);const C=new AudioContext;s.current=C;const I=C.createAnalyser();I.fftSize=2048,I.smoothingTimeConstant=.55,o.current=I,C.createMediaStreamSource(E).connect(I);const N=I.frequencyBinCount,T=new Uint8Array(N);c.current=T,g(null),S()}catch(E){if(x)return;g("Microphone access denied"),console.error("Audio initialization error:",E)}},S=()=>{const b=o.current,E=c.current,C=s.current;!b||!E||!C||(b.getByteFrequencyData(E),a(xC(E,C.sampleRate,f.current,y.current,Date.now())),h.current=requestAnimationFrame(S))};return _(),w},[t,a]),p?H.jsx("div",{className:"fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-500/20 border border-red-500 px-4 py-2 rounded",children:H.jsx("p",{className:"text-red-500 font-mono",children:p})}):null}function wd(a,e,t,i){const o={x:a,y:e+.08800000000000001},c=[{...o,z:0}];return[{angle:-1.05,length:.62},{angle:-.34,length:.95},{angle:-.1,length:1},{angle:.14,length:.92},{angle:.38,length:.76}].forEach((h,f)=>{const p=.25+Math.sin(t*.6+i+f)*.2;for(let g=1;g<=4;g++){const m=g/4,y=h.angle+p*m*.5,x=.16*h.length*m;c.push({x:o.x+Math.sin(y)*x,y:o.y-Math.cos(y)*x,z:0})}}),c}function cv(a){const e=(t,i)=>{const s={x:i+Math.sin(a*.23+t)*.18,y:.5+Math.sin(a*.31+t*1.7)*.22};return{position:s,gesture:"open",fingerCount:3+Math.round(1.5+Math.sin(a*.11+t)*1.5),velocity:.25+Math.sin(a*.37+t)*.15,holdDuration:1,landmarks:wd(s.x,s.y,a,t)}};return{left:e(0,.32),right:e(Math.PI,.68),distanceBetweenHands:.36}}const uv="vj-text",_C="n4thvj",er="clips",_f="clip",yC=["video","mosaic"],bd="N4TH";function SC(){try{return localStorage.getItem(uv)??bd}catch{return bd}}function MC(a){try{localStorage.setItem(uv,a)}catch{}}function Yd(){return new Promise((a,e)=>{const t=indexedDB.open(_C,1);t.onupgradeneeded=()=>{t.result.objectStoreNames.contains(er)||t.result.createObjectStore(er)},t.onsuccess=()=>a(t.result),t.onerror=()=>e(t.error)})}function rx(a){return a.type.startsWith("image/")?"image":"video"}async function hv(a,e,t){const i=await Yd();await new Promise((s,o)=>{const c=i.transaction(er,"readwrite");c.objectStore(er).put({file:e,name:t},a),c.oncomplete=()=>s(),c.onerror=()=>o(c.error)}),i.close()}function wC(a,e){return new Promise(t=>{const i=a.get(e);i.onsuccess=()=>{const s=i.result;if(!s||typeof s!="object")return t(null);const{file:o,name:c}=s;if(!(o instanceof Blob))return t(null);t({file:o,name:typeof c=="string"?c:"clip"})},i.onerror=()=>t(null)})}async function bC(){try{const a=await Yd(),e=await new Promise((c,u)=>{const h=a.transaction(er,"readonly").objectStore(er).getAllKeys();h.onsuccess=()=>c(h.result),h.onerror=()=>u(h.error)}),t={},s=a.transaction(er,"readonly").objectStore(er);for(const c of e){if(typeof c!="string")continue;const u=await wC(s,c);u&&(t[c]=u)}a.close();const o=t[_f];if(o){delete t[_f];for(const c of yC)t[c]||(t[c]=o,hv(c,o.file,o.name).catch(()=>{}));fv(_f).catch(()=>{})}return t}catch{return{}}}async function fv(a){try{const e=await Yd();await new Promise(t=>{const i=e.transaction(er,"readwrite");i.objectStore(er).delete(a),i.oncomplete=()=>t(),i.onerror=()=>t()}),e.close()}catch{}}const EC=4,TC=14,sx=45,CC=480,AC=300,RC=["#ffffff","#d4d4d4","#ffffff","#a3a3a3"],PC={"2D":"text-cyan-300 border-cyan-400/30 bg-cyan-400/10","3D":"text-violet-300 border-violet-400/30 bg-violet-400/10",TD:"text-emerald-300 border-emerald-400/30 bg-emerald-400/10"},ax=Object.values(ir),LC=["2D","3D","TD"];function IC({set:a,onSetChange:e,onStart:t,text:i,onTextChange:s,clips:o,onClipChange:c}){const[u,h]=he.useState("ALL"),[f,p]=he.useState(null),g=he.useRef(new Map),m=he.useRef(new Set),y=he.useRef(null),x=he.useRef(a);x.current=a;const w=he.useRef({text:i,clips:o});w.current={text:i,clips:o};const _=u==="ALL"?ax:ax.filter(A=>A.category===u),S=he.useCallback(A=>{const N=x.current;if(N.indexOf(A)!==-1){e(N.filter(F=>F!==A));return}N.length>=Is||e([...N,A])},[e]),b=he.useCallback((A,N)=>{const T=x.current.filter(D=>D!==A),F=Math.min(N,T.length);if(F>=Is)return;const z=[...T];z.splice(F,0,A),e(z.slice(0,Is))},[e]);he.useEffect(()=>{const A=N=>{if(N.ctrlKey||N.metaKey||N.altKey)return;if(N.key==="Enter"&&x.current.length>0){t();return}if(!f)return;const T=yf(N.key);T!==-1&&(N.preventDefault(),b(f,T))};return window.addEventListener("keydown",A),()=>window.removeEventListener("keydown",A)},[f,b,t]),he.useEffect(()=>{y.current=new IntersectionObserver(T=>{for(const F of T){const z=F.target.getAttribute("data-pattern");z&&(F.isIntersecting?m.current.add(z):m.current.delete(z))}},{rootMargin:"250px 0px"});for(const T of g.current.values())y.current.observe(T.canvas);let A=0;const N=()=>{var G,ne,se,X,V,Y,q,ie;if(A=requestAnimationFrame(N),document.hidden)return;const T=cv(Date.now()/1e3);let F=0,z=0;const D=[...g.current].sort(([,te],[,O])=>{const ee=te.frames<sx?0:1,ge=O.frames<sx?0:1;return ee-ge});for(const[te,O]of D){const ee=ir[te].category!=="2D",ge=ee?F<EC:z<TC;if(m.current.has(te)&&ge&&!O.failed){if(!O.renderer)try{O.renderer=av(te,O.canvas,O.ctx,null)}catch{O.failed=!0;continue}try{(ne=(G=O.renderer).setText)==null||ne.call(G,w.current.text);const Se=w.current.clips[te];(X=(se=O.renderer).setClipUrl)==null||X.call(se,(Se==null?void 0:Se.url)??null,Se==null?void 0:Se.kind),O.renderer.render(T,RC,void 0,"contrast")}catch{O.failed=!0,(Y=(V=O.renderer).destroy)==null||Y.call(V),O.renderer=null;continue}O.frames++,ee?F++:z++}else O.renderer&&((ie=(q=O.renderer).destroy)==null||ie.call(q),O.renderer=null)}};return A=requestAnimationFrame(N),()=>{var T,F,z;cancelAnimationFrame(A),(T=y.current)==null||T.disconnect();for(const D of g.current.values())(z=(F=D.renderer)==null?void 0:F.destroy)==null||z.call(F);g.current.clear()}},[]);const E=he.useRef(new Map),C=A=>{let N=E.current.get(A);return N||(N=T=>I(A,T),E.current.set(A,N)),N},I=he.useCallback((A,N)=>{var F,z,D;if(!N){const G=g.current.get(A);(z=(F=G==null?void 0:G.renderer)==null?void 0:F.destroy)==null||z.call(F),g.current.delete(A),m.current.delete(A);return}if(g.current.has(A))return;N.width=CC,N.height=AC;const T=N.getContext("2d");T&&(g.current.set(A,{canvas:N,ctx:T,renderer:null,frames:0}),(D=y.current)==null||D.observe(N))},[]);return H.jsxs("div",{className:"min-h-screen w-full bg-[#07070a] text-white font-mono",children:[H.jsx("div",{"aria-hidden":!0,className:"pointer-events-none fixed inset-0 opacity-70",style:{background:"radial-gradient(60rem 40rem at 50% -10%, rgba(99,102,241,0.18), transparent 70%),radial-gradient(40rem 30rem at 85% 15%, rgba(217,70,239,0.10), transparent 70%)"}}),H.jsxs("div",{className:"relative mx-auto max-w-[1500px] px-6 pb-40 pt-14",children:[H.jsx("header",{className:"mb-10",children:H.jsxs("div",{className:"flex flex-wrap items-end justify-between gap-6",children:[H.jsxs("div",{children:[H.jsx("h1",{className:"text-2xl font-semibold tracking-[-0.02em] sm:text-3xl",children:"<N4TH>"}),H.jsxs("p",{className:"mt-3 max-w-xl text-sm leading-relaxed text-white/45",children:["Every visual, running. Pick up to ",Is," and they become your keyboard — click to add, or hover one and press the number you want it on."]})]}),H.jsx("nav",{className:"flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] p-1.5",children:["ALL",...LC].map(A=>H.jsx("button",{onClick:()=>h(A),className:`rounded-full px-4 py-1.5 text-[11px] tracking-wider transition-all ${u===A?"bg-white text-black":"text-white/45 hover:bg-white/5 hover:text-white/80"}`,children:A},A))})]})}),H.jsx("div",{className:"grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:_.map(A=>{var D;const N=a.indexOf(A.pattern),T=N!==-1,F=a.length>=Is&&!T,z=A.pattern==="text"?"text":A.pattern==="video"||A.pattern==="mosaic"?"file":null;return H.jsxs("div",{onMouseEnter:()=>p(A.pattern),onMouseLeave:()=>p(G=>G===A.pattern?null:G),className:`group relative overflow-hidden rounded-2xl border text-left transition-all duration-200 ${T?"border-white/70 bg-white/[0.06] shadow-[0_0_0_1px_rgba(255,255,255,0.35),0_18px_50px_-20px_rgba(255,255,255,0.35)]":F?"border-white/5 opacity-35":"border-white/10 bg-white/[0.02] hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.05]"}`,children:[H.jsxs("button",{onClick:()=>S(A.pattern),disabled:F,title:F?"The set is full — take one off first":`${A.description}${T?"":" · click to add"}`,className:`block w-full text-left ${F?"cursor-not-allowed":""}`,children:[H.jsxs("div",{className:"relative aspect-[16/10] w-full overflow-hidden bg-black",children:[H.jsx("canvas",{"data-pattern":A.pattern,ref:C(A.pattern),className:"h-full w-full object-cover"}),H.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/85 to-transparent"}),T&&H.jsx("div",{className:"absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-base font-semibold text-black shadow-lg",children:jo(N)})]}),H.jsxs("div",{className:"flex items-center justify-between gap-3 px-4 pb-3 pt-3",children:[H.jsxs("div",{className:"min-w-0",children:[H.jsx("div",{className:"truncate text-[13px] tracking-wide text-white/90",children:A.name}),H.jsx("div",{className:"mt-0.5 truncate text-[10px] text-white/35",children:A.description})]}),H.jsx("span",{className:`shrink-0 rounded border px-1.5 py-0.5 text-[9px] tracking-widest ${PC[A.category]}`,children:A.category})]})]}),z==="text"&&H.jsx("div",{className:"px-4 pb-4",children:H.jsx("input",{value:i,onChange:G=>s(G.target.value),onKeyDown:G=>G.stopPropagation(),placeholder:bd,maxLength:48,"aria-label":"Words for Kinetic Type",className:"w-full rounded-lg border border-white/15 bg-black/60 px-3 py-2 text-[12px] tracking-wide text-white placeholder:text-white/25 focus:border-white/45 focus:outline-none"})}),z==="file"&&H.jsxs("div",{className:"flex items-center gap-2 px-4 pb-4",children:[H.jsxs("label",{className:"cursor-pointer rounded-lg border border-white/15 bg-black/60 px-3 py-2 text-[11px] tracking-wider text-white/75 transition-colors hover:border-white/45 hover:text-white",children:[o[A.pattern]?"REPLACE":"UPLOAD",H.jsx("input",{type:"file",accept:"video/*,image/*",className:"hidden",onChange:G=>{var se;const ne=(se=G.target.files)==null?void 0:se[0];ne&&c(A.pattern,ne),G.target.value=""}})]}),H.jsx("span",{className:"min-w-0 flex-1 truncate text-[10px] text-white/35",children:((D=o[A.pattern])==null?void 0:D.name)??"no file yet"}),o[A.pattern]&&H.jsx("button",{onClick:()=>c(A.pattern,null),title:"Remove this visual's file",className:"shrink-0 px-1 text-white/25 transition-colors hover:text-white/80",children:"×"})]})]},A.pattern)})})]}),H.jsx("footer",{className:"fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/80 backdrop-blur-xl",children:H.jsxs("div",{className:"mx-auto flex max-w-[1500px] flex-wrap items-center gap-4 px-6 py-4",children:[H.jsxs("div",{className:"flex min-w-0 flex-1 flex-wrap items-center gap-2",children:[H.jsxs("span",{className:"mr-1 text-[10px] tracking-widest text-white/35",children:["SET ",a.length,"/",Is]}),a.length===0&&H.jsx("span",{className:"text-[11px] text-white/30",children:"Nothing chosen yet — pick a visual to start building the row."}),a.map((A,N)=>H.jsxs("button",{onClick:()=>S(A),title:"Take off the set",className:"group flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] py-1 pl-1 pr-3 transition-all hover:border-white/40 hover:bg-white/10",children:[H.jsx("span",{className:"flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] font-semibold text-black",children:jo(N)}),H.jsx("span",{className:"text-[11px] text-white/80",children:ir[A].name}),H.jsx("span",{className:"text-white/25 transition-colors group-hover:text-white/70",children:"×"})]},A))]}),H.jsxs("div",{className:"flex shrink-0 items-center gap-3",children:[a.length>0&&H.jsx("button",{onClick:()=>e([]),className:"rounded-full px-3 py-2 text-[11px] tracking-wider text-white/40 transition-colors hover:text-white/80",children:"CLEAR"}),H.jsx("button",{onClick:t,disabled:a.length===0,className:`rounded-full px-7 py-3 text-[12px] font-semibold tracking-[0.18em] transition-all ${a.length===0?"cursor-not-allowed bg-white/10 text-white/25":"bg-white text-black hover:scale-[1.03] hover:shadow-[0_0_40px_-8px_rgba(255,255,255,0.6)]"}`,children:"START SET →"})]})]})})]})}function NC(a,e){const t=Math.max(0,Math.ceil(-Math.log10(e)));return a.toFixed(Math.min(t,4))}function dv({spec:a,value:e,isDefault:t,inert:i,onChange:s,onReset:o}){var u;const c=(e-a.min)/(a.max-a.min)*100;return H.jsxs("div",{className:`group ${i?"opacity-40":""}`,title:i?`Does nothing until ${a.needs} is above zero`:void 0,children:[H.jsxs("div",{className:"flex justify-between items-baseline text-[9px] leading-tight",children:[H.jsxs("button",{onClick:o,title:t?a.hint??a.path:`${a.path} — click to reset`,className:`text-left transition-colors ${t?"text-white/50 hover:text-white/70":"text-cyan-300 hover:text-cyan-200"}`,children:[a.label,!t&&H.jsx("span",{className:"ml-1 opacity-60",children:"•"})]}),H.jsx("span",{className:`text-white ${a.labels?"":"tabular-nums"}`,children:((u=a.labels)==null?void 0:u[Math.round(e)])??NC(e,a.step)})]}),H.jsx("input",{type:"range",className:"vj-slider w-full h-1 mt-1 mb-2 rounded-full appearance-none cursor-pointer focus:outline-none",min:a.min,max:a.max,step:a.step,value:e,onChange:h=>s(parseFloat(h.target.value)),style:{backgroundImage:`linear-gradient(to right, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.85) ${c}%, rgba(255,255,255,0.2) ${c}%)`}})]})}function FC({sections:a,header:e}){var f;const[t,i]=he.useState(!1),[s,o]=he.useState((f=a[0])==null?void 0:f.key),c=a.filter(p=>p.entry.groups.length>0);if(c.length===0)return null;const u=c.find(p=>p.key===s)??c[0],h=u.entry.groups.some(p=>p.params.some(g=>u.values[g.path]!==void 0));return H.jsx("div",{className:"absolute left-6 top-24 bottom-32 z-50 w-[168px] flex flex-col font-mono pointer-events-auto",children:H.jsxs("div",{className:"bg-black/70 backdrop-blur-sm rounded-xl border border-white/20 flex flex-col min-h-0",children:[e&&H.jsx("div",{className:"border-b border-white/10",children:e}),H.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-2 border-b border-white/10",children:[H.jsx("button",{onClick:()=>i(p=>!p),className:"text-white/60 hover:text-white transition-colors shrink-0",title:t?"Show parameters":"Hide parameters",children:H.jsx(N_,{className:"w-3.5 h-3.5"})}),H.jsx("div",{className:"flex gap-1 flex-1 min-w-0",children:c.map(p=>{const g=p.entry.groups.some(m=>m.params.some(y=>p.values[y.path]!==void 0));return H.jsxs("button",{onClick:()=>{o(p.key),i(!1)},className:`px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider transition-all ${p.key===u.key?"bg-white/20 text-white":"text-white/40 hover:text-white/70"}`,children:[p.label,g&&H.jsx("span",{className:"ml-1 text-cyan-300",children:"•"})]},p.key)})}),h&&H.jsx("button",{onClick:()=>u.onReset(),title:`Reset every ${u.label} parameter`,className:"text-white/40 hover:text-white transition-colors shrink-0",children:H.jsx(mx,{className:"w-3 h-3"})})]}),!t&&H.jsx("div",{className:"overflow-y-auto px-3 py-2 min-h-0",children:u.entry.groups.map(p=>{if(p.visibleWhen){const y=u.values[p.visibleWhen.path]??ss(u.entry.config,p.visibleWhen.path)??0;if(!p.visibleWhen.equals.includes(Math.round(y)))return null}const m=(p.togglePath?u.values[p.togglePath]??ss(u.entry.config,p.togglePath)??1:1)>=.5;return H.jsxs("div",{className:"mb-3 last:mb-1",children:[p.togglePath?H.jsxs("button",{onClick:()=>u.onChange(p.togglePath,m?0:1),title:m?`Bypass ${p.name}`:`Enable ${p.name}`,className:"flex items-center gap-1.5 w-full mb-1.5 group/head",children:[H.jsx("span",{className:`w-1.5 h-1.5 rounded-full transition-colors ${m?"bg-cyan-300":"bg-white/20"}`}),H.jsx("span",{className:`text-[8px] tracking-widest uppercase transition-colors ${m?"text-white/55 group-hover/head:text-white/80":"text-white/25"}`,children:p.name})]}):H.jsx("div",{className:"text-[8px] text-white/35 tracking-widest uppercase mb-1.5",children:p.name}),H.jsx("div",{className:m?"":"opacity-35 pointer-events-none",children:p.params.map(y=>{const x=ss(u.entry.config,y.path);if(x===void 0)return null;const w=u.values[y.path]??x,_=y.needs?u.values[y.needs]??ss(u.entry.config,y.needs)??0:1;return H.jsx(dv,{spec:y,inert:!(_>0),value:w,isDefault:u.values[y.path]===void 0,onChange:S=>u.onChange(y.path,S),onReset:()=>u.onReset(y.path)},y.path)})})]},p.name)})})]})})}function Ra(a,e,t){const i=u=>t[u]??ss(e.config,u)??0,s=a.togglePath?i(a.togglePath)>=.5:!0,o=a.stage?iC(a.stage,t):!1,c=a.params.some(u=>t[u.path]!==void 0);return{on:s,live:o,touched:c}}function UC({entry:a,values:e,onChange:t,onReset:i,layerLabel:s,openName:o,onOpen:c}){const u=a.groups,h=u.find(g=>g.name===o)??null,f=(e["master.enabled"]??1)>=.5,p=u.some(g=>g.params.some(m=>e[m.path]!==void 0));return H.jsx("div",{className:"absolute right-6 top-24 z-50 w-[178px] font-mono pointer-events-auto",children:H.jsxs("div",{className:"bg-black/70 backdrop-blur-sm rounded-xl border border-white/20 flex flex-col",children:[H.jsxs("div",{className:"flex items-center gap-1.5 px-3 py-2 border-b border-white/10",children:[H.jsx("button",{onClick:()=>t("master.enabled",f?0:1),title:f?"Bypass every effect on this layer (X)":"Bring the effects back (X)",className:`shrink-0 transition-colors ${f?"text-cyan-300 hover:text-cyan-200":"text-white/25 hover:text-white/60"}`,children:H.jsx(A_,{className:"w-3.5 h-3.5"})}),H.jsxs("span",{className:"flex-1 min-w-0 truncate text-[9px] tracking-widest text-white/55",children:["FX · ",s]}),p&&H.jsx("button",{onClick:()=>i(),title:"Clear every effect on this layer",className:"shrink-0 text-white/40 hover:text-white transition-colors",children:H.jsx(mx,{className:"w-3 h-3"})})]}),H.jsx("div",{className:`grid grid-cols-2 gap-1 p-2 ${f?"":"opacity-35"}`,children:u.map(g=>{const{on:m,live:y,touched:x}=Ra(g,a,e),w=g.name===(h==null?void 0:h.name);return H.jsxs("button",{onClick:()=>c(w?null:g.name),title:`${g.name} — ${y?"running":m?"idle":"bypassed"}`,className:`flex items-center gap-1 rounded px-1.5 py-1 text-left text-[8.5px] leading-tight tracking-wide transition-all ${w?"bg-white text-black":y?"bg-white/15 text-white":"text-white/40 hover:bg-white/10 hover:text-white/70"}`,children:[H.jsx("span",{className:`w-1 h-1 shrink-0 rounded-full ${y?w?"bg-black":"bg-cyan-300":w?"bg-black/30":"bg-white/20"}`}),H.jsx("span",{className:"min-w-0 truncate",children:g.name}),x&&!w&&H.jsx("span",{className:"text-cyan-300",children:"·"})]},g.name)})}),h&&H.jsxs("div",{className:`border-t border-white/10 px-3 py-2 ${f?"":"opacity-35"}`,children:[h.togglePath&&H.jsxs("button",{onClick:()=>t(h.togglePath,Ra(h,a,e).on?0:1),className:"flex items-center gap-1.5 w-full mb-2 group/head",title:Ra(h,a,e).on?`Bypass ${h.name}`:`Enable ${h.name}`,children:[H.jsx("span",{className:`w-1.5 h-1.5 rounded-full transition-colors ${Ra(h,a,e).on?"bg-cyan-300":"bg-white/20"}`}),H.jsx("span",{className:"text-[8px] tracking-widest uppercase text-white/55 group-hover/head:text-white/80",children:Ra(h,a,e).on?"on":"bypassed"})]}),H.jsx("div",{className:Ra(h,a,e).on?"":"opacity-35 pointer-events-none",children:h.params.map(g=>{const m=ss(a.config,g.path);if(m===void 0)return null;const y=g.needs?e[g.needs]??ss(a.config,g.needs)??0:1;return H.jsx(dv,{spec:g,inert:!(y>0),value:e[g.path]??m,isDefault:e[g.path]===void 0,onChange:x=>t(g.path,x),onReset:()=>i(g.path)},g.path)})})]})]})})}function DC({layers:a,selectedLayer:e,set:t,onSelect:i,onOpacityChange:s,onRemove:o}){return H.jsxs("div",{className:"px-3 pt-2 pb-1",children:[H.jsxs("div",{className:"mb-1.5 flex items-baseline justify-between",children:[H.jsx("span",{className:"text-[8px] uppercase tracking-widest text-white/35",children:"Layers"}),H.jsx("span",{className:"text-[8px] text-white/25",children:"L cycles · [ ] fade"})]}),a.map((c,u)=>{const h=u===e,f=t.indexOf(c.pattern);return H.jsxs("div",{className:`mb-1 rounded px-1.5 py-1 transition-colors ${h?"bg-white/[0.11]":"hover:bg-white/[0.05]"}`,children:[H.jsxs("div",{className:"flex items-center gap-1.5",children:[H.jsxs("button",{onClick:()=>i(u),title:h?"Editing this layer":"Edit this layer",className:"flex min-w-0 flex-1 items-center gap-1.5 text-left",children:[H.jsx("span",{className:`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[8px] ${h?"bg-white text-black":"bg-white/15 text-white/60"}`,children:f===-1?"·":jo(f)}),H.jsx("span",{className:`truncate text-[9px] ${h?"text-white":"text-white/55"}`,children:ir[c.pattern].short})]}),H.jsxs("span",{className:"shrink-0 text-[8px] tabular-nums text-white/45",children:[Math.round(c.opacity*100),"%"]}),a.length>1&&H.jsx("button",{onClick:()=>o(u),title:"Take this layer off",className:"shrink-0 px-0.5 text-[10px] leading-none text-white/25 transition-colors hover:text-white/80",children:"×"})]}),H.jsx("input",{type:"range","aria-label":`${ir[c.pattern].name} opacity`,className:"vj-slider mt-1 h-1 w-full cursor-pointer appearance-none rounded-full focus:outline-none",min:0,max:1,step:.01,value:c.opacity,onChange:p=>s(u,parseFloat(p.target.value)),onPointerDown:()=>i(u),style:{background:`linear-gradient(to right, rgba(255,255,255,${h?.85:.4}) ${c.opacity*100}%, rgba(255,255,255,0.12) ${c.opacity*100}%)`}})]},`${c.pattern}-${u}`)})]})}const ox={geometric:{config:Mf,groups:[{name:"Shape",params:[{path:"polygon.baseSize",label:"Size",min:20,max:400,step:5},{path:"polygon.strokeWidth",label:"Stroke",min:.5,max:20,step:.5},{path:"complexity.baseSides",label:"Sides",min:3,max:12,step:1,hint:"with no hands"},{path:"complexity.maxSides",label:"Max sides",min:3,max:24,step:1}]},{name:"Layers",params:[{path:"layers.count",label:"Count",min:1,max:20,step:1},{path:"layers.sizeGrowth",label:"Growth",min:0,max:1.5,step:.01},{path:"layers.rotationOffset",label:"Twist",min:0,max:2,step:.01},{path:"layers.baseOpacity",label:"Opacity",min:0,max:1,step:.01},{path:"layers.opacityFade",label:"Fade",min:0,max:.3,step:.005}]},{name:"Motion",params:[{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"},{path:"animation.baseRotationMultiplier",label:"Spin",min:0,max:.1,step:.001}]},{name:"Bridge & clap",params:[{path:"bridge.thickness",label:"Bridge",min:0,max:30,step:.5},{path:"bridge.waveAmplitude",label:"Bridge wave",min:0,max:150,step:1},{path:"vibration.shakeAmountX",label:"Shake X",min:0,max:200,step:1},{path:"vibration.shakeAmountY",label:"Shake Y",min:0,max:200,step:1},{path:"vibration.flashDuration",label:"Flash",min:0,max:3,step:.05}]}]},particles:{config:Sf,groups:[{name:"Emission",params:[{path:"limits.maxParticles",label:"Max",min:5,max:500,step:5},{path:"emission.openHandRate",label:"Open hand",min:0,max:1,step:.01},{path:"emission.closedHandRate",label:"Closed hand",min:0,max:1,step:.01},{path:"controls.fadeOutRate",label:"Fade out",min:.005,max:.5,step:.005}]},{name:"Motion",params:[{path:"physics.initialVelocity",label:"Velocity",min:.5,max:20,step:.5},{path:"physics.damping",label:"Damping",min:.8,max:1,step:.005,hint:"1 = never slows"},{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"}]},{name:"Size",params:[{path:"size.baseRange.0",label:"Radius min",min:2,max:300,step:2},{path:"size.baseRange.1",label:"Radius max",min:2,max:400,step:2},{path:"size.growthMultiplier",label:"Grow",min:.2,max:6,step:.1},{path:"size.shrinkMultiplier",label:"Shrink",min:.05,max:2,step:.05},{path:"size.transitionSpeed",label:"Ease",min:.02,max:1,step:.01}]},{name:"Glow",params:[{path:"glow.layers",label:"Layers",min:0,max:8,step:1},{path:"glow.expansion",label:"Spread",min:0,max:2,step:.05},{path:"glow.layerFade",label:"Fade",min:0,max:1,step:.01}]},{name:"Clap",params:[{path:"explosion.particleCount",label:"Burst",min:0,max:300,step:5},{path:"explosion.forceMultiplier",label:"Force",min:0,max:50,step:1},{path:"explosion.sizeMultiplier",label:"Size",min:.2,max:6,step:.1}]}]},ripple:{config:vd,groups:[{name:"Hand",params:[{path:"stamp.radius",label:"Size",min:.01,max:.3,step:.005},{path:"stamp.strength",label:"Weight",min:.05,max:1,step:.01},{path:"stamp.fingerScale",label:"Fingers",min:0,max:1,step:.05,hint:"0 = palm only"},{path:"stamp.audioSwell",label:"Bass swell",min:0,max:3,step:.05}]},{name:"Trail",params:[{path:"field.decay",label:"Length",min:.8,max:.998,step:.002,hint:"higher = lingers"},{path:"field.spread",label:"Spread",min:.2,max:8,step:.1}]},{name:"Water",params:[{path:"refraction.amount",label:"Refraction",min:0,max:.4,step:.005},{path:"refraction.dispersion",label:"Dispersion",min:0,max:1.5,step:.05}]},{name:"Gloss",params:[{path:"highlight.amount",label:"Amount",min:0,max:3,step:.05},{path:"highlight.sharpness",label:"Sharpness",min:.5,max:20,step:.5},{path:"highlight.tint",label:"Tint",min:0,max:1,step:.05,hint:"palette into the gloss"}]}]},text:{config:_d,groups:[{name:"Movement",params:[{path:"mode",label:"Mode",min:0,max:4,step:1,labels:["Mask","Radial","Wave","Depth","Scatter"],hint:"each mode brings its own controls"},{path:"motion.handInfluence",label:"Hands",min:0,max:3,step:.05},{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"}]},{name:"Type",params:[{path:"type.fit",label:"Fit",min:.2,max:1.6,step:.02,hint:"word width in its cell"},{path:"type.weight",label:"Weight",min:100,max:900,step:100},{path:"type.tracking",label:"Tracking",min:-.1,max:1.2,step:.01},{path:"type.outline",label:"Outline",min:0,max:1,step:1,hint:"filled or hollow"},{path:"type.strokeWidth",label:"Stroke",min:.5,max:8,step:.5}]},{name:"Grid",visibleWhen:{path:"mode",equals:[0,1,2]},params:[{path:"grid.columns",label:"Columns",min:1,max:40,step:1},{path:"grid.rows",label:"Rows",min:1,max:60,step:1},{path:"grid.spread",label:"Spread",min:.2,max:3,step:.02},{path:"grid.breathe",label:"Breathe",min:0,max:1,step:.02},{path:"grid.breatheSpeed",label:"Breath speed",min:0,max:3,step:.05}]},{name:"Mask",visibleWhen:{path:"mode",equals:[0]},params:[{path:"mask.reach",label:"Reach",min:.02,max:.8,step:.01,hint:"hand size"},{path:"mask.threshold",label:"Threshold",min:.02,max:2,step:.02,hint:"lower fills more"},{path:"mask.softness",label:"Softness",min:0,max:1,step:.02,hint:"0 = hard cut"},{path:"mask.invert",label:"Invert",min:0,max:1,step:1}]},{name:"Radial",visibleWhen:{path:"mode",equals:[1]},params:[{path:"radial.strength",label:"Warp",min:-2,max:3,step:.05,hint:"negative pinches"},{path:"radial.power",label:"Bite",min:.4,max:5,step:.1},{path:"radial.pulse",label:"Pulse",min:0,max:2,step:.05},{path:"radial.pulseSpeed",label:"Pulse speed",min:0,max:3,step:.05}]},{name:"Wave",visibleWhen:{path:"mode",equals:[2]},params:[{path:"wave.amplitude",label:"Amount",min:0,max:.6,step:.01},{path:"wave.frequency",label:"Waves",min:.2,max:8,step:.1},{path:"wave.speed",label:"Speed",min:-4,max:4,step:.05},{path:"wave.scaleWave",label:"Swell",min:0,max:1,step:.02}]},{name:"Depth",visibleWhen:{path:"mode",equals:[3]},params:[{path:"depth.speed",label:"Fly",min:-2,max:2,step:.02},{path:"depth.spread",label:"Open",min:0,max:4,step:.05,hint:"tracking with distance"},{path:"depth.curve",label:"Curve",min:.5,max:4,step:.05},{path:"depth.steps",label:"Rows",min:2,max:40,step:1},{path:"depth.size",label:"Size",min:.02,max:.5,step:.005},{path:"depth.horizon",label:"Horizon",min:-.2,max:.8,step:.01}]},{name:"Scatter",visibleWhen:{path:"mode",equals:[4]},params:[{path:"scatter.amount",label:"Spread",min:0,max:1.5,step:.02,hint:"0 = readable"},{path:"scatter.spiral",label:"Spiral",min:0,max:1,step:1},{path:"scatter.stagger",label:"Stagger",min:0,max:2,step:.05},{path:"scatter.drift",label:"Drift",min:0,max:3,step:.05},{path:"scatter.size",label:"Letter size",min:.02,max:.5,step:.005}]},{name:"Colour",params:[{path:"color.rainbow",label:"Rainbow",min:0,max:1,step:1,hint:"ignores the palette"},{path:"color.step",label:"Hue step",min:0,max:120,step:1},{path:"color.cycleSpeed",label:"Cycle",min:0,max:3,step:.05}]},{name:"Audio",params:[{path:"audio.bassScale",label:"Bass swell",min:0,max:2,step:.05},{path:"audio.beatKick",label:"Beat kick",min:0,max:3,step:.05}]}]},video:{config:yd,groups:[{name:"Frame",params:[{path:"frame.zoom",label:"Zoom",min:.2,max:4,step:.05},{path:"frame.spreadZoom",label:"Spread zoom",min:0,max:3,step:.05},{path:"frame.handDrift",label:"Hand drift",min:0,max:.6,step:.01},{path:"frame.mirror",label:"Mirror",min:0,max:1,step:1}]},{name:"Slice",params:[{path:"slice.count",label:"Bands",min:1,max:60,step:1,hint:"1 = whole frame"},{path:"slice.offset",label:"Shear",min:0,max:.4,step:.005},{path:"slice.speed",label:"Speed",min:0,max:5,step:.05},{path:"slice.beatKick",label:"Beat kick",min:1,max:6,step:.1}]},{name:"Look",params:[{path:"look.tint",label:"Tint",min:0,max:1,step:.02,hint:"palette over the clip"},{path:"look.gain",label:"Gain",min:1,max:3,step:.05},{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"}]}]},chrome:{config:Md,groups:[{name:"Form",params:[{path:"form.lobes",label:"Lobes",min:1,max:7,step:1},{path:"form.spread",label:"Spread",min:.2,max:2.4,step:.05,hint:"wider pulls tendrils out"},{path:"form.size",label:"Mass",min:.2,max:1.2,step:.02},{path:"form.blend",label:"Melt",min:.05,max:1.4,step:.05,hint:"higher closes the holes"},{path:"form.ripple",label:"Ripple",min:0,max:.4,step:.005},{path:"form.rippleScale",label:"Ripple scale",min:.5,max:9,step:.1}]},{name:"Motion",params:[{path:"motion.drift",label:"Drift",min:0,max:1.2,step:.01},{path:"motion.churn",label:"Churn",min:0,max:2,step:.02},{path:"motion.spin",label:"Spin",min:-.6,max:.6,step:.01}]},{name:"Chrome",params:[{path:"material.dispersion",label:"Rainbow",min:0,max:2.5,step:.05},{path:"material.split",label:"Spread",min:0,max:.3,step:.005,hint:"width of the rainbow"},{path:"material.rimTightness",label:"Rim",min:.5,max:8,step:.1,hint:"higher = thinner band"},{path:"material.silver",label:"Silver",min:0,max:1.5,step:.02},{path:"material.facing",label:"Face-on",min:0,max:.6,step:.01,hint:"low keeps the middles dark"},{path:"material.polish",label:"Polish",min:4,max:260,step:2}]},{name:"Light",params:[{path:"light.keyX",label:"Key X",min:-1,max:1,step:.02},{path:"light.keyY",label:"Key Y",min:-1,max:1,step:.02},{path:"light.key",label:"Key",min:0,max:3,step:.05},{path:"light.fill",label:"Fill",min:0,max:1.5,step:.02},{path:"light.ambient",label:"Ambient",min:0,max:.3,step:.005}]},{name:"Hands and sound",params:[{path:"hands.push",label:"Hand push",min:0,max:2,step:.05},{path:"hands.spread",label:"Hand spread",min:0,max:1.5,step:.05},{path:"hands.kick",label:"Beat throw",min:0,max:2,step:.05},{path:"look.gain",label:"Exposure",min:.2,max:2.5,step:.05},{path:"look.grain",label:"Grain",min:0,max:.2,step:.005}]}]},mosaic:{config:Sd,groups:[{name:"Mark",params:[{path:"mode",label:"Mode",min:0,max:3,step:1,labels:["Letters","Dots","Blocks","Bars"]},{path:"grid.columns",label:"Detail",min:8,max:140,step:1,hint:"cells across"},{path:"grid.fill",label:"Weight",min:.2,max:1.8,step:.05},{path:"grid.cellAspect",label:"Cell shape",min:.4,max:2.5,step:.05,hint:"above 1 = taller"},{path:"grid.spreadDensity",label:"Spread coarsens",min:0,max:1.5,step:.05}]},{name:"Image",params:[{path:"tone.contrast",label:"Contrast",min:.2,max:4,step:.05},{path:"tone.brightness",label:"Brightness",min:-.5,max:.5,step:.02},{path:"tone.floor",label:"Cut",min:0,max:.9,step:.01,hint:"darker cells draw nothing"},{path:"tone.invert",label:"Invert",min:0,max:1,step:1}]},{name:"Letters",visibleWhen:{path:"mode",equals:[0]},params:[{path:"letters.ramp",label:"Glyphs",min:0,max:1,step:1,labels:["Density ramp","Your word"]},{path:"letters.weight",label:"Weight",min:100,max:900,step:100},{path:"letters.outline",label:"Hollow",min:0,max:1,step:1}]},{name:"Shape",visibleWhen:{path:"mode",equals:[1,2,3]},params:[{path:"shape.minimum",label:"Floor",min:0,max:.6,step:.01,hint:"size of the faintest mark"},{path:"shape.rotate",label:"Turn",min:0,max:1,step:.02,hint:"blocks towards diamonds"},{path:"shape.anchor",label:"From the floor",min:0,max:1,step:1,hint:"bars only"}]},{name:"Warp",params:[{path:"warp.handPush",label:"Hand push",min:0,max:.3,step:.005},{path:"warp.ripple",label:"Ripple",min:0,max:2,step:.05},{path:"warp.rippleSpeed",label:"Ripple speed",min:0,max:4,step:.05}]},{name:"Colour",params:[{path:"colour.fromSource",label:"Own colour",min:0,max:1,step:.02,hint:"0 = your palette"},{path:"colour.spread",label:"Palette run",min:1,max:40,step:1},{path:"audio.bassScale",label:"Bass swell",min:0,max:2,step:.05},{path:"audio.beatKick",label:"Beat kick",min:0,max:1.5,step:.05},{path:"trail.fadeAlpha",label:"Trail",min:.02,max:1,step:.01,hint:"lower = longer"}]}]},digitalblocks:{config:xd,groups:[{name:"Hands",params:[{path:"chaos.range",label:"Ceiling",min:.05,max:1,step:.01,hint:"how wild it can get"},{path:"chaos.openness",label:"Open hand",min:0,max:1,step:.02},{path:"chaos.velocity",label:"Hand speed",min:0,max:1,step:.02},{path:"chaos.clap",label:"Clap",min:0,max:1,step:.02},{path:"chaos.ease",label:"Ease",min:.005,max:.3,step:.005,hint:"lower = calmer"},{path:"chaos.idle",label:"Idle",min:0,max:.5,step:.01}]},{name:"Motion",params:[{path:"speed.base",label:"Drift",min:0,max:.4,step:.005},{path:"speed.variation",label:"Spread",min:0,max:.5,step:.005},{path:"speed.chaos",label:"Chaos speed",min:0,max:1.5,step:.02}]},{name:"Grid",params:[{path:"strips.base",label:"Columns",min:2,max:60,step:1},{path:"strips.chaos",label:"Columns +",min:0,max:60,step:1},{path:"strips.blocks",label:"Blocks",min:1,max:40,step:1},{path:"strips.blocksChaos",label:"Blocks +",min:0,max:40,step:1}]}]},waves:{config:wf,groups:[{name:"Wave",params:[{path:"waveCount.active",label:"Count",min:1,max:24,step:1,hint:"hands present"},{path:"waveCount.idle",label:"Count idle",min:1,max:24,step:1},{path:"wave.baseAmplitude",label:"Amplitude",min:0,max:400,step:5},{path:"wave.maxAmplitude",label:"Max amp",min:10,max:800,step:10},{path:"wave.baseFrequency",label:"Frequency",min:.001,max:.1,step:.001},{path:"wave.maxFrequency",label:"Max freq",min:.001,max:.2,step:.001}]},{name:"Line",params:[{path:"wave.segments",label:"Segments",min:20,max:600,step:10,hint:"lower = angular"},{path:"wave.lineThickness",label:"Thickness",min:.5,max:20,step:.5},{path:"visual.fillOpacity",label:"Fill",min:0,max:255,step:1}]},{name:"Layers",params:[{path:"layers.primarySpeed",label:"Speed 1",min:0,max:10,step:.1},{path:"layers.secondarySpeed",label:"Speed 2",min:0,max:10,step:.1},{path:"layers.tertiarySpeed",label:"Speed 3",min:0,max:10,step:.1},{path:"layers.secondaryAmplitude",label:"Amp 2",min:0,max:2,step:.01},{path:"layers.tertiaryAmplitude",label:"Amp 3",min:0,max:2,step:.01},{path:"fingerCountSpeed.maxSpeed",label:"Speed cap",min:.1,max:10,step:.1}]},{name:"Hands & focus",params:[{path:"handInfluence.strength",label:"Pull",min:0,max:3,step:.05},{path:"handInfluence.radius",label:"Reach",min:20,max:800,step:10},{path:"focalPoint.baseSize",label:"Dot size",min:0,max:100,step:1},{path:"focalPoint.pulseSpeed",label:"Pulse",min:0,max:20,step:.5},{path:"focalPoint.pulseAmount",label:"Pulse depth",min:0,max:1,step:.01},{path:"focalPoint.glowLayers",label:"Dot glow",min:0,max:10,step:1}]}]}},kC={config:Wa,groups:[{name:"Feedback",stage:"feedback",togglePath:"feedback.enabled",params:[{path:"feedback.amount",label:"Trail",min:0,max:.99,step:.01,hint:"how long the image hangs on"},{needs:"feedback.amount",path:"feedback.zoom",label:"Tunnel",min:.9,max:1.1,step:.001,hint:"above the middle pushes outward"},{needs:"feedback.amount",path:"feedback.rotate",label:"Spiral",min:-.05,max:.05,step:5e-4}]},{name:"Colour",stage:"colour",togglePath:"colour.enabled",params:[{path:"colour.hue",label:"Hue",min:-3.14,max:3.14,step:.01,hint:"turns the whole frame"},{path:"colour.saturation",label:"Saturation",min:0,max:2,step:.01,hint:"1 = untouched"}]},{name:"Displace",stage:"displace",togglePath:"displace.enabled",params:[{path:"displace.amount",label:"Warp",min:0,max:.3,step:.002},{path:"displace.scale",label:"Scale",min:.5,max:40,step:.5},{path:"displace.speed",label:"Speed",min:0,max:3,step:.02}]},{name:"Chromatic",stage:"rgbSplit",togglePath:"rgbSplit.enabled",params:[{path:"rgbSplit.amount",label:"Split",min:0,max:.1,step:.001}]},{name:"Kaleido",stage:"kaleido",togglePath:"kaleido.enabled",params:[{path:"kaleido.segments",label:"Mirrors",min:0,max:4,step:1,labels:["Off","Off","2","3","4"]},{needs:"kaleido.segments",path:"kaleido.spin",label:"Angle",min:-3.14,max:3.14,step:.01}]},{name:"Pixelate",stage:"pixelate",togglePath:"pixelate.enabled",params:[{path:"pixelate.pixel",label:"Block",min:0,max:64,step:1,hint:"0 = off"},{path:"pixelate.levels",label:"Colours",min:0,max:16,step:1,hint:"steps per channel"}]},{name:"Noise",stage:"noiseTile",togglePath:"noiseTile.enabled",params:[{path:"noiseTile.size",label:"Tile",min:0,max:24,step:1,hint:"0 = off"},{needs:"noiseTile.size",path:"noiseTile.grain",label:"Grain",min:0,max:1,step:.02,hint:"0 is a clean grid"},{needs:"noiseTile.size",path:"noiseTile.drift",label:"Crawl",min:0,max:2,step:.02}]},{name:"Echo",stage:"echo",togglePath:"echo.enabled",params:[{path:"echo.count",label:"Echoes",min:0,max:6,step:1,hint:"0 = off"},{needs:"echo.count",path:"echo.depth",label:"Depth",min:.02,max:.6,step:.01},{needs:"echo.count",path:"echo.speed",label:"Travel",min:0,max:1.5,step:.01,hint:"loops seamlessly"}]},{name:"Fluted",stage:"fluted",togglePath:"fluted.enabled",params:[{path:"fluted.ribs",label:"Ribs",min:0,max:80,step:1,hint:"0 = off"},{needs:"fluted.ribs",path:"fluted.bend",label:"Bend",min:0,max:2,step:.02},{needs:"fluted.ribs",path:"fluted.shine",label:"Shine",min:0,max:1,step:.02}]},{name:"Crossfade",stage:"transition",togglePath:"transition.enabled",params:[{path:"transition.duration",label:"Crossfade",min:.05,max:5,step:.05,hint:"seconds between visuals"}]}]},pv=1,lx=0,cx=2;function OC(a){return Math.min(1,.06+a*.94)}function mv(a){return .55+a*.45}function ux(a,e,t){var h;const i=OC(t),s=mv(t),o=e?{x:.5+(e.position.x-.5)/s,y:.5+(e.position.y-.5)/s}:a.position,c=o.x+(a.position.x-o.x)*i,u=o.y+(a.position.y-o.y)*i;return{...a,position:{x:.5+(c-.5)*s,y:.5+(u-.5)*s},velocity:a.velocity===void 0?void 0:a.velocity*t,landmarks:(h=a.landmarks)==null?void 0:h.map(f=>({...f,x:.5+(f.x-.5)*s,y:.5+(f.y-.5)*s}))}}function zC(a,e,t){return t===pv?a:{...a,left:a.left?ux(a.left,(e==null?void 0:e.left)??null,t):null,right:a.right?ux(a.right,(e==null?void 0:e.right)??null,t):null,clapIntensity:a.clapIntensity===void 0?void 0:a.clapIntensity*t,distanceBetweenHands:a.distanceBetweenHands===void 0?void 0:.4+(a.distanceBetweenHands-.4)*mv(t)}}function zo(a,e,t){const i=e/100,s=t/100,o=(1-Math.abs(2*s-1))*i,c=o*(1-Math.abs(a/60%2-1)),u=s-o/2;let h=0,f=0,p=0;a<60?[h,f,p]=[o,c,0]:a<120?[h,f,p]=[c,o,0]:a<180?[h,f,p]=[0,o,c]:a<240?[h,f,p]=[0,c,o]:a<300?[h,f,p]=[c,0,o]:[h,f,p]=[o,0,c];const g=m=>Math.round((m+u)*255).toString(16).padStart(2,"0");return`#${g(h)}${g(f)}${g(p)}`}function BC(a,e,t){if(t==="grayscale")return["#FFFFFF","#000000","#FFFFFF","#000000"];if(t==="black")return[zo(a,e,50),"#FFFFFF",zo(a,e*.6,70),zo(a,e*.8,35)];const i=zo(a,e,50),s=zo((a+180)%360,e,50);return[i,s,i,s]}const HC=["video/mp4;codecs=avc1.42E01E,mp4a.40.2","video/mp4","video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"],GC=30,VC=12e6;function gv(){if(!(typeof MediaRecorder>"u")){for(const a of HC)if(MediaRecorder.isTypeSupported(a))return a}}function WC(){return typeof MediaRecorder<"u"&&typeof HTMLCanvasElement.prototype.captureStream=="function"&&gv()!==void 0}class XC{constructor(e){U(this,"sources");U(this,"frame",null);U(this,"ctx",null);U(this,"recorder",null);U(this,"chunks",[]);U(this,"raf",0);U(this,"startedAt",0);U(this,"format","");U(this,"draw",()=>{this.raf=requestAnimationFrame(this.draw);const{ctx:e,frame:t}=this;if(!e||!t)return;const i=this.sources.canvas();if(!i)return;e.fillStyle="#000",e.fillRect(0,0,t.width,t.height);const s=Math.min(t.width/i.width,t.height/i.height),o=i.width*s,c=i.height*s;try{e.drawImage(i,(t.width-o)/2,(t.height-c)/2,o,c)}catch{return}const u=this.sources.camera();u&&u.readyState>=2&&u.videoWidth>0&&this.drawCamera(e,t,u)});this.sources=e}get recording(){return this.recorder!==null&&this.recorder.state==="recording"}get elapsed(){return this.startedAt?(performance.now()-this.startedAt)/1e3:0}start(e){if(this.recording)return;const t=this.sources.canvas(),i=gv();if(!t||!i)return;this.format=i;const s=document.createElement("canvas");s.width=Math.max(2,t.width-t.width%2),s.height=Math.max(2,t.height-t.height%2);const o=s.getContext("2d",{alpha:!1});if(!o)return;this.frame=s,this.ctx=o;const c=s.captureStream(GC);if(e)for(const h of e.getAudioTracks())c.addTrack(h);const u=new MediaRecorder(c,{mimeType:i,videoBitsPerSecond:VC});this.chunks=[],u.ondataavailable=h=>{h.data.size>0&&this.chunks.push(h.data)},u.start(1e3),this.recorder=u,this.startedAt=performance.now(),this.draw()}stop(){const e=this.recorder;if(!e||e.state==="inactive")return Promise.resolve(null);const t=this.elapsed;return new Promise(i=>{e.onstop=()=>{cancelAnimationFrame(this.raf),this.raf=0,this.recorder=null,this.startedAt=0,this.frame=null,this.ctx=null;const s=new Blob(this.chunks,{type:this.format});this.chunks=[],i(s.size>0?{blob:s,extension:this.format.startsWith("video/mp4")?"mp4":"webm",seconds:t}:null)},e.stop()})}drawCamera(e,t,i){const s=Math.round(t.width*.014),o=Math.round(t.width*.17),c=Math.round(o*i.videoHeight/i.videoWidth),u=t.width-o-s,h=s,f=Math.round(o*.06);e.save(),e.beginPath(),typeof e.roundRect=="function"?e.roundRect(u,h,o,c,f):e.rect(u,h,o,c),e.clip(),e.translate(u+o,h),e.scale(-1,1),e.drawImage(i,0,0,o,c),e.restore(),e.save(),e.strokeStyle="rgba(255, 255, 255, 0.35)",e.lineWidth=Math.max(1,t.width*.001),e.beginPath(),typeof e.roundRect=="function"?e.roundRect(u,h,o,c,f):e.rect(u,h,o,c),e.stroke(),e.restore()}}function hx(a){const e=new Date().toISOString().slice(0,19).replace("T","-").replace(/:/g,""),t=URL.createObjectURL(a.blob),i=document.createElement("a");i.href=t,i.download=`n4thvj-${e}.${a.extension}`,document.body.appendChild(i),i.click(),i.remove(),setTimeout(()=>URL.revokeObjectURL(t),6e4)}const jC=60,qC=`<!doctype html>
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
</html>`;class YC{constructor(e){U(this,"win",null);U(this,"stream",null);U(this,"onClose");U(this,"poll",0);this.onClose=e}get open(){return this.win!==null&&!this.win.closed}show(e){var i;if(this.open)return(i=this.win)==null||i.focus(),null;if(!e)return"The visuals are not running yet.";if(typeof e.captureStream!="function")return"This browser cannot send a canvas to a second window.";const t=window.open("","n4thvj-output","width=1280,height=720");return t?(t.document.open(),t.document.write(qC),t.document.close(),this.win=t,this.attach(e),this.poll=window.setInterval(()=>{this.win&&this.win.closed&&this.close()},500),null):"The browser blocked the window. Allow pop-ups for this page and try again."}attach(e){var s;const t=this.win;if(!t||t.closed||!e||typeof e.captureStream!="function")return;const i=t.document.getElementById("out");if(i){for(const o of((s=this.stream)==null?void 0:s.getTracks())??[])o.stop();this.stream=e.captureStream(jC),i.srcObject=this.stream,i.play().catch(()=>{})}}close(){var t;clearInterval(this.poll),this.poll=0;for(const i of((t=this.stream)==null?void 0:t.getTracks())??[])i.stop();this.stream=null;const e=this.win;this.win=null,e&&!e.closed&&e.close(),this.onClose()}}function Oa(a,e,t){try{const i=localStorage.getItem(a);if(i===null)return e;const s=JSON.parse(i);return t(s)?s:e}catch{return e}}function Pa(a,e){try{localStorage.setItem(a,JSON.stringify(e))}catch{}}const Ed=(a,e)=>t=>typeof t=="number"&&Number.isFinite(t)&&t>=a&&t<=e;function fx(){return{hue:Oa("vj-hue",245,Ed(0,360)),saturation:Oa("vj-saturation",100,Ed(0,100)),colorMode:Oa("vj-color-mode","contrast",a=>a==="black"||a==="contrast"||a==="grayscale")}}function $C(){const[a,e]=he.useState(()=>[{pattern:"geometric",opacity:1,...fx()}]),[t,i]=he.useState(0),s=(a[t]??a[0]).pattern,o=he.useCallback(pe=>{const Le=a.findIndex(Ae=>Ae.pattern===pe);if(Le!==-1){i(Le);return}e(Ae=>Ae.map((P,j)=>j===t?{...P,pattern:pe}:P))},[a,t]),c=he.useCallback(pe=>{const Le=a.findIndex(P=>P.pattern===pe);if(Le!==-1){if(a.length===1)return;e(a.filter((P,j)=>j!==Le)),i(P=>P>Le?P-1:Math.min(P,a.length-2));return}if(a.length>=q_)return;const Ae=a[t]??a[0];e([...a,{pattern:pe,opacity:Y_,hue:Ae.hue,saturation:Ae.saturation,colorMode:Ae.colorMode}]),i(a.length)},[a,t]),u=he.useCallback(()=>{i(pe=>(pe+1)%a.length)},[a.length]),h=he.useCallback((pe,Le)=>{e(Ae=>Ae.map((P,j)=>j===pe?{...P,opacity:Le}:P))},[]),f=he.useCallback(pe=>{e(Le=>Le.length===1?Le:Le.filter((Ae,P)=>P!==pe)),i(Le=>Le>pe?Le-1:Math.min(Le,a.length-2))},[a.length]),p=he.useCallback(pe=>{e(Le=>Le.map((Ae,P)=>P===t?{...Ae,opacity:Math.min(1,Math.max(0,Math.round((Ae.opacity+pe)*100)/100))}:Ae))},[t]),[g,m]=he.useState(!1),[y,x]=he.useState(!0),w=a[t]??a[0],{hue:_,saturation:S,colorMode:b}=w;he.useCallback(pe=>{e(Le=>Le.map((Ae,P)=>P===t?{...Ae,...pe}:Ae))},[t]);const E=(pe,Le)=>typeof pe=="function"?pe(Le):pe,C=he.useCallback(pe=>{e(Le=>Le.map((Ae,P)=>P===t?{...Ae,hue:E(pe,Ae.hue)}:Ae))},[t]),I=he.useCallback(pe=>{e(Le=>Le.map((Ae,P)=>P===t?{...Ae,saturation:E(pe,Ae.saturation)}:Ae))},[t]),A=he.useCallback(pe=>{e(Le=>Le.map((Ae,P)=>P===t?{...Ae,colorMode:E(pe,Ae.colorMode)}:Ae))},[t]),N=he.useMemo(()=>a.map(pe=>BC(pe.hue,pe.saturation,pe.colorMode)),[a]),T=N[t]??N[0],[F,z]=he.useState(!1),[D,G]=he.useState(()=>Oa("vj-motion",pv,Ed(lx,cx)));he.useEffect(()=>{Pa("vj-motion",D)},[D]);const ne=he.useCallback(pe=>{G(Le=>Math.min(cx,Math.max(lx,Math.round((Le+pe)*100)/100)))},[]),[se,X]=he.useState(SC),[V,Y]=he.useState({});he.useEffect(()=>{MC(se)},[se]),he.useEffect(()=>{const pe=[];let Le=!1;return bC().then(Ae=>{if(Le)return;const P={};for(const[j,{file:fe,name:ce}]of Object.entries(Ae)){const le=URL.createObjectURL(fe);pe.push(le),P[j]={url:le,name:ce,kind:rx(fe)}}Y(P)}),()=>{Le=!0,pe.forEach(Ae=>URL.revokeObjectURL(Ae))}},[]);const q=he.useCallback((pe,Le)=>{Y(Ae=>{const P=Ae[pe];P&&URL.revokeObjectURL(P.url);const j={...Ae};return Le?j[pe]={url:URL.createObjectURL(Le),name:Le.name,kind:rx(Le)}:delete j[pe],j}),Le?hv(pe,Le,Le.name).catch(()=>{}):fv(pe).catch(()=>{})},[]),ie=he.useMemo(()=>({text:se,clips:V}),[se,V]),te=he.useRef(null),O=he.useRef(null),ee=he.useRef(null),ge=he.useRef(!1),[Te,Se]=he.useState(!1),[W,me]=he.useState(0),oe=he.useMemo(()=>WC(),[]),Re=he.useRef(null);!Re.current&&oe&&(Re.current=new XC({canvas:()=>te.current,camera:()=>ge.current?ee.current:null}));const[Oe,Ce]=he.useState(()=>{try{const pe=localStorage.getItem("vj-sound");return pe==="music"||pe==="off"||pe==="mic"?pe:"mic"}catch{return"mic"}});he.useEffect(()=>{try{localStorage.setItem("vj-sound",Oe)}catch{}},[Oe]);const ht=he.useRef(null),[Qe,pt]=he.useState(null),wt=he.useCallback(async()=>{var Ae;const pe=Re.current;if(!pe)return;if(pe.recording){Se(!1);const P=await pe.stop();for(const j of((Ae=ht.current)==null?void 0:Ae.getTracks())??[])j.stop();ht.current=null,P&&hx(P);return}pt(null);const Le=await Z_(Oe,O.current);Le.problem&&pt(Le.problem),ht.current=Le.owned?Le.stream:null,pe.start(Le.stream),Se(pe.recording)},[Oe]);he.useEffect(()=>{if(!Qe)return;const pe=setTimeout(()=>pt(null),9e3);return()=>clearTimeout(pe)},[Qe]);const[mt,Vt]=he.useState(!1),[Ut,cn]=he.useState(null),Z=he.useRef(null);Z.current||(Z.current=new YC(()=>Vt(!1)));const Dt=he.useCallback(()=>{const pe=Z.current;if(!pe)return;if(pe.open){pe.close();return}const Le=pe.show(te.current);cn(Le),Vt(pe.open)},[]);he.useEffect(()=>{if(!Ut)return;const pe=setTimeout(()=>cn(null),9e3);return()=>clearTimeout(pe)},[Ut]),he.useEffect(()=>()=>{var pe;return(pe=Z.current)==null?void 0:pe.close()},[]),he.useEffect(()=>{if(!Te){me(0);return}const pe=setInterval(()=>{var Le;me(((Le=Re.current)==null?void 0:Le.elapsed)??0)},500);return()=>clearInterval(pe)},[Te]),he.useEffect(()=>{const pe=()=>{var Le;(Le=Re.current)!=null&&Le.recording&&Re.current.stop().then(Ae=>Ae&&hx(Ae))};return window.addEventListener("pagehide",pe),()=>window.removeEventListener("pagehide",pe)},[]);const[vt,Nt]=he.useState(!0),[He,Gt]=he.useState(()=>N0(Oa("vj-params",{},()=>!0))),[k,R]=he.useState(null),[re,_e]=he.useState(()=>{const pe=N0(Oa("vj-fx",{},()=>!0));return pe.fx&&Object.keys(pe.fx).length>0&&!pe[0]?{0:pe.fx}:pe}),Me=re[String(t)]??{},Ie=he.useCallback((pe,Le)=>{_e(Ae=>{const P=String(t);return{...Ae,[P]:{...Ae[P]??{},[pe]:Le}}})},[t]),Be=he.useMemo(()=>a.map((pe,Le)=>re[String(Le)]??{}),[a,re]),xe=(Me["master.enabled"]??1)>=.5,ye=he.useCallback(()=>{_e(pe=>{const Le=String(t),Ae=pe[Le]??{};return{...pe,[Le]:{...Ae,"master.enabled":(Ae["master.enabled"]??1)>=.5?0:1}}})},[t]),We=he.useCallback(pe=>{_e(Le=>{const Ae=String(t);if(pe===void 0)return{...Le,[Ae]:{}};const{[pe]:P,...j}=Le[Ae]??{};return{...Le,[Ae]:j}})},[t]),je=he.useCallback((pe,Le)=>{Gt(Ae=>({...Ae,[s]:{...Ae[s],[pe]:Le}}))},[s]),De=he.useCallback(pe=>{Gt(Le=>{if(pe===void 0){const{[s]:j,...fe}=Le;return fe}const{[pe]:Ae,...P}=Le[s]??{};return{...Le,[s]:P}})},[s]),Fe=he.useMemo(()=>a.map(pe=>He[pe.pattern]),[a,He]),[Ze,gt]=he.useState(ey),[Mt,$]=he.useState("library"),[Ne,ve]=he.useState({left:null,right:null}),[Ve,ke]=he.useState(null);he.useEffect(()=>{ee.current=Ve,ge.current=g},[Ve,g]);const[we,et]=he.useState(!1),[ft,kt]=he.useState(!1),[nt,Rn]=he.useState({bass:0,lowMid:0,mid:0,high:0,overall:0,beat:!1,beatIntensity:0,onset:0}),[Gn,Ci]=he.useState(.5),[Vn,sr]=he.useState({bass:!0,mid:!0,high:!0,beat:!0}),Pr=he.useCallback(pe=>{sr(Le=>({...Le,[pe]:!Le[pe]}))},[]),[Pn,hs]=he.useState(0),fs=Ne.left!==null||Ne.right!==null,ai=Mt==="vj"&&(ft||vt&&!fs);he.useEffect(()=>{if(!ai)return;let pe;const Le=()=>{hs(Date.now()/1e3),pe=requestAnimationFrame(Le)};return Le(),()=>cancelAnimationFrame(pe)},[ai]),he.useEffect(()=>{if(!F)return;const pe=setInterval(()=>{C(Le=>(Le+1)%360)},50);return()=>clearInterval(pe)},[F]);const ar=ft?{left:{position:{x:.3+Math.sin(Pn)*.2*nt.mid,y:.5+nt.bass*.3},gesture:nt.overall>.25?"open":"fist",fingerCount:1+Math.round(Math.min(1,nt.mid+nt.high*.6)*4),velocity:Math.min(1,nt.mid*.7+nt.onset*.6),landmarks:wd(.3+Math.sin(Pn)*.2*nt.mid,.5+nt.bass*.3,Pn,0)},right:{position:{x:.7-Math.sin(Pn)*.2*nt.mid,y:.5+nt.bass*.3},gesture:nt.overall>.25?"open":"fist",fingerCount:1+Math.round(Math.min(1,nt.mid+nt.high*.6)*4),velocity:Math.min(1,nt.mid*.7+nt.onset*.6),landmarks:wd(.7-Math.sin(Pn)*.2*nt.mid,.5+nt.bass*.3,Pn,Math.PI)},clapping:nt.beat,clapIntensity:nt.beatIntensity,distanceBetweenHands:.45-nt.bass*.3}:fs||!vt?Ne:cv(Pn),Lr=he.useRef(null),or=zC(ar,Lr.current,D);Lr.current=or,he.useEffect(()=>{Pa("vj-hue",_),Pa("vj-saturation",S),Pa("vj-color-mode",b)},[_,S,b]),he.useEffect(()=>{Pa("vj-params",He)},[He]),he.useEffect(()=>{Pa("vj-fx",re)},[re]),he.useEffect(()=>{ty(Ze)},[Ze]);const ds=he.useCallback(()=>{Ze.length!==0&&(e([{pattern:Ze[0],opacity:1,...fx()}]),i(0),$("vj"))},[Ze]),lr=he.useCallback(pe=>{if(Ze.length===0)return;const Le=Ze.indexOf(s),P=Le===-1?pe==="next"?0:Ze.length-1:(Le+(pe==="next"?1:-1)+Ze.length)%Ze.length;o(Ze[P])},[s,Ze,o]),Ai=he.useRef(null);he.useEffect(()=>{const pe=Ae=>{if(Ae.key==="Control"){A("contrast");return}if(Ae.key==="Alt"){A("grayscale");return}if(Ae.key==="Meta"){A("black");return}if(Ae.ctrlKey||Ae.metaKey||Ae.altKey)return;if(Ae.key.toLowerCase()==="c"){m(j=>!j);return}if(Ae.key.toLowerCase()==="a"){kt(j=>!j);return}if(Ae.key.toLowerCase()==="r"){wt();return}if(Ae.key.toLowerCase()==="s"){Ce(A0);return}if(Ae.key.toLowerCase()==="o"){Dt();return}if(Ae.key.toLowerCase()==="x"){ye();return}if(Ae.key.toLowerCase()==="i"){Nt(j=>!j);return}if(Ae.key.toLowerCase()==="d"){o("flowfield");return}if(Ae.key==="Escape"){$("library");return}if(Ae.key.toLowerCase()==="l"){u();return}if(Ae.key==="-"){ne(-.1);return}if(Ae.key==="="||Ae.key==="+"){ne(.1);return}if(Ae.key==="["){p(-.1);return}if(Ae.key==="]"){p(.1);return}const P=Ze[yf(Ae.key)];if(P){if(Ae.repeat||Ai.current)return;Ai.current={key:Ae.key.toLowerCase(),fired:!1,timer:window.setTimeout(()=>{Ai.current&&(Ai.current.fired=!0),c(P)},gx)};return}switch(Ae.key){case"ArrowLeft":Ae.preventDefault(),lr("prev");break;case"ArrowRight":Ae.preventDefault(),lr("next");break;case"ArrowUp":Ae.preventDefault(),I(j=>Math.min(100,j+5));break;case"ArrowDown":Ae.preventDefault(),I(j=>Math.max(0,j-5));break}},Le=Ae=>{const P=Ai.current;if(!P||P.key!==Ae.key.toLowerCase()||(clearTimeout(P.timer),Ai.current=null,P.fired))return;const j=Ze[yf(Ae.key)];j&&o(j)};return window.addEventListener("keydown",pe),window.addEventListener("keyup",Le),()=>{window.removeEventListener("keydown",pe),window.removeEventListener("keyup",Le)}},[Ze,lr,ye,o,c,u,p,ne,wt,Dt]),he.useEffect(()=>{const pe=Le=>{Le.preventDefault(),x(Ae=>!Ae)};return window.addEventListener("contextmenu",pe),()=>window.removeEventListener("contextmenu",pe)},[]),he.useEffect(()=>{(s==="face"||s.startsWith("smokehand"))&&m(!0)},[s]);const Ws=()=>{et(!1)},Ka=()=>{et(!1)},Xs={...nt,bass:Vn.bass?nt.bass:0,lowMid:Vn.bass?nt.lowMid:0,mid:Vn.mid?nt.mid:0,high:Vn.high?nt.high:0,beat:Vn.beat?nt.beat:!1,beatIntensity:Vn.beat?nt.beatIntensity:0,onset:Vn.beat?nt.onset:0};return Mt==="library"?H.jsx(IC,{set:Ze,onSetChange:gt,onStart:ds,text:se,onTextChange:X,clips:V,onClipChange:q}):H.jsxs("div",{className:"relative w-screen h-screen overflow-hidden bg-black",children:[we&&H.jsx(dy,{onGrant:Ws,onSkip:Ka}),H.jsx(aC,{handData:or,layerColors:N,layers:a,videoElement:Ve,audioData:Xs,layerParams:Fe,content:ie,motion:D,layerFx:Be,onCanvasReady:pe=>{var Le;te.current=pe,(Le=Z.current)==null||Le.attach(pe)}}),H.jsx("div",{className:`absolute top-4 right-4 ${g?"opacity-100":"opacity-0 pointer-events-none"}`,children:H.jsx(j_,{onVideoReady:ke})}),Ve&&s!=="face"&&H.jsx(cy,{videoElement:Ve,onHandData:ve}),H.jsx(vC,{enabled:ft,sensitivity:Gn,onAudioData:Rn,onStream:pe=>{O.current=pe}}),y&&H.jsx(FC,{header:H.jsx(DC,{layers:a,selectedLayer:t,set:Ze,onSelect:i,onOpacityChange:h,onRemove:f}),sections:ox[s]?[{key:"shape",label:"SHAPE",entry:ox[s],values:He[s]??{},onChange:je,onReset:De}]:[]}),y&&H.jsx(UC,{entry:kC,values:Me,onChange:Ie,onReset:We,openName:k,onOpen:R,layerLabel:a.length>1?`L${t+1} ${ir[s].short}`:ir[s].short}),y&&H.jsx(ay,{currentPattern:s,onPatternChange:o,layers:a,selectedLayer:t,onPatternHold:c,onLayerCycle:u,showCamera:g,onCameraToggle:()=>m(!g),handData:Ne,selectedColors:T,colorMode:b,hue:_,saturation:S,onHueChange:C,onSaturationChange:I,onColorModeChange:A,autoHueEnabled:F,onAutoHueToggle:()=>z(pe=>!pe),set:Ze,onOpenLibrary:()=>$("library"),audioEnabled:ft,onAudioToggle:()=>kt(!ft),audioSensitivity:Gn,onAudioSensitivityChange:Ci,audioUse:Vn,onAudioUseToggle:Pr,audioLevels:Xs,motion:D,onMotionChange:G,idleDrive:vt,onIdleDriveToggle:()=>Nt(pe=>!pe),fxEnabled:xe,fxActive:ov(Me),onFxToggle:ye,canRecord:oe,recording:Te,recordSeconds:W,onRecordToggle:()=>void wt(),sound:Oe,onSoundCycle:()=>Ce(A0),output:mt,onOutputToggle:Dt}),(Qe||Ut)&&H.jsx("div",{className:"pointer-events-none absolute bottom-28 left-1/2 z-[60] w-[min(34rem,90vw)] -translate-x-1/2",children:H.jsx("div",{className:"rounded-xl border border-amber-300/30 bg-black/85 px-4 py-3 text-center font-mono text-[11px] leading-relaxed text-amber-200/90 backdrop-blur-sm",children:Qe??Ut})})]})}const xv=document.getElementById("root");if(!xv)throw new Error("Root element #root not found");a_.createRoot(xv).render(H.jsx($C,{}));try{sessionStorage.removeItem("vj-stale-bundle-reload")}catch{}
