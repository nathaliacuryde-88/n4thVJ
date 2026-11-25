var d_=Object.defineProperty;var p_=(s,e,t)=>e in s?d_(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var ue=(s,e,t)=>p_(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Vu={exports:{}},Jo={},Gu={exports:{}},yt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm;function m_(){if(cm)return yt;cm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function g(L){return L===null||typeof L!="object"?null:(L=_&&L[_]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,C={};function x(L,H,xe){this.props=L,this.context=H,this.refs=C,this.updater=xe||M}x.prototype.isReactComponent={},x.prototype.setState=function(L,H){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,H,"setState")},x.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function S(){}S.prototype=x.prototype;function R(L,H,xe){this.props=L,this.context=H,this.refs=C,this.updater=xe||M}var I=R.prototype=new S;I.constructor=R,E(I,x.prototype),I.isPureReactComponent=!0;var b=Array.isArray,V=Object.prototype.hasOwnProperty,D={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function w(L,H,xe){var _e,ve={},X=null,ce=null;if(H!=null)for(_e in H.ref!==void 0&&(ce=H.ref),H.key!==void 0&&(X=""+H.key),H)V.call(H,_e)&&!k.hasOwnProperty(_e)&&(ve[_e]=H[_e]);var fe=arguments.length-2;if(fe===1)ve.children=xe;else if(1<fe){for(var Ae=Array(fe),De=0;De<fe;De++)Ae[De]=arguments[De+2];ve.children=Ae}if(L&&L.defaultProps)for(_e in fe=L.defaultProps,fe)ve[_e]===void 0&&(ve[_e]=fe[_e]);return{$$typeof:s,type:L,key:X,ref:ce,props:ve,_owner:D.current}}function N(L,H){return{$$typeof:s,type:L.type,key:H,ref:L.ref,props:L.props,_owner:L._owner}}function q(L){return typeof L=="object"&&L!==null&&L.$$typeof===s}function B(L){var H={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(xe){return H[xe]})}var z=/\/+/g;function Q(L,H){return typeof L=="object"&&L!==null&&L.key!=null?B(""+L.key):H.toString(36)}function te(L,H,xe,_e,ve){var X=typeof L;(X==="undefined"||X==="boolean")&&(L=null);var ce=!1;if(L===null)ce=!0;else switch(X){case"string":case"number":ce=!0;break;case"object":switch(L.$$typeof){case s:case e:ce=!0}}if(ce)return ce=L,ve=ve(ce),L=_e===""?"."+Q(ce,0):_e,b(ve)?(xe="",L!=null&&(xe=L.replace(z,"$&/")+"/"),te(ve,H,xe,"",function(De){return De})):ve!=null&&(q(ve)&&(ve=N(ve,xe+(!ve.key||ce&&ce.key===ve.key?"":(""+ve.key).replace(z,"$&/")+"/")+L)),H.push(ve)),1;if(ce=0,_e=_e===""?".":_e+":",b(L))for(var fe=0;fe<L.length;fe++){X=L[fe];var Ae=_e+Q(X,fe);ce+=te(X,H,xe,Ae,ve)}else if(Ae=g(L),typeof Ae=="function")for(L=Ae.call(L),fe=0;!(X=L.next()).done;)X=X.value,Ae=_e+Q(X,fe++),ce+=te(X,H,xe,Ae,ve);else if(X==="object")throw H=String(L),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return ce}function G(L,H,xe){if(L==null)return L;var _e=[],ve=0;return te(L,_e,"","",function(X){return H.call(xe,X,ve++)}),_e}function $(L){if(L._status===-1){var H=L._result;H=H(),H.then(function(xe){(L._status===0||L._status===-1)&&(L._status=1,L._result=xe)},function(xe){(L._status===0||L._status===-1)&&(L._status=2,L._result=xe)}),L._status===-1&&(L._status=0,L._result=H)}if(L._status===1)return L._result.default;throw L._result}var W={current:null},Y={transition:null},F={ReactCurrentDispatcher:W,ReactCurrentBatchConfig:Y,ReactCurrentOwner:D};function ee(){throw Error("act(...) is not supported in production builds of React.")}return yt.Children={map:G,forEach:function(L,H,xe){G(L,function(){H.apply(this,arguments)},xe)},count:function(L){var H=0;return G(L,function(){H++}),H},toArray:function(L){return G(L,function(H){return H})||[]},only:function(L){if(!q(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},yt.Component=x,yt.Fragment=t,yt.Profiler=a,yt.PureComponent=R,yt.StrictMode=r,yt.Suspense=p,yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,yt.act=ee,yt.cloneElement=function(L,H,xe){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var _e=E({},L.props),ve=L.key,X=L.ref,ce=L._owner;if(H!=null){if(H.ref!==void 0&&(X=H.ref,ce=D.current),H.key!==void 0&&(ve=""+H.key),L.type&&L.type.defaultProps)var fe=L.type.defaultProps;for(Ae in H)V.call(H,Ae)&&!k.hasOwnProperty(Ae)&&(_e[Ae]=H[Ae]===void 0&&fe!==void 0?fe[Ae]:H[Ae])}var Ae=arguments.length-2;if(Ae===1)_e.children=xe;else if(1<Ae){fe=Array(Ae);for(var De=0;De<Ae;De++)fe[De]=arguments[De+2];_e.children=fe}return{$$typeof:s,type:L.type,key:ve,ref:X,props:_e,_owner:ce}},yt.createContext=function(L){return L={$$typeof:u,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:l,_context:L},L.Consumer=L},yt.createElement=w,yt.createFactory=function(L){var H=w.bind(null,L);return H.type=L,H},yt.createRef=function(){return{current:null}},yt.forwardRef=function(L){return{$$typeof:h,render:L}},yt.isValidElement=q,yt.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:$}},yt.memo=function(L,H){return{$$typeof:d,type:L,compare:H===void 0?null:H}},yt.startTransition=function(L){var H=Y.transition;Y.transition={};try{L()}finally{Y.transition=H}},yt.unstable_act=ee,yt.useCallback=function(L,H){return W.current.useCallback(L,H)},yt.useContext=function(L){return W.current.useContext(L)},yt.useDebugValue=function(){},yt.useDeferredValue=function(L){return W.current.useDeferredValue(L)},yt.useEffect=function(L,H){return W.current.useEffect(L,H)},yt.useId=function(){return W.current.useId()},yt.useImperativeHandle=function(L,H,xe){return W.current.useImperativeHandle(L,H,xe)},yt.useInsertionEffect=function(L,H){return W.current.useInsertionEffect(L,H)},yt.useLayoutEffect=function(L,H){return W.current.useLayoutEffect(L,H)},yt.useMemo=function(L,H){return W.current.useMemo(L,H)},yt.useReducer=function(L,H,xe){return W.current.useReducer(L,H,xe)},yt.useRef=function(L){return W.current.useRef(L)},yt.useState=function(L){return W.current.useState(L)},yt.useSyncExternalStore=function(L,H,xe){return W.current.useSyncExternalStore(L,H,xe)},yt.useTransition=function(){return W.current.useTransition()},yt.version="18.3.1",yt}var um;function Th(){return um||(um=1,Gu.exports=m_()),Gu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm;function g_(){if(fm)return Jo;fm=1;var s=Th(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(h,p,d){var v,_={},g=null,M=null;d!==void 0&&(g=""+d),p.key!==void 0&&(g=""+p.key),p.ref!==void 0&&(M=p.ref);for(v in p)r.call(p,v)&&!l.hasOwnProperty(v)&&(_[v]=p[v]);if(h&&h.defaultProps)for(v in p=h.defaultProps,p)_[v]===void 0&&(_[v]=p[v]);return{$$typeof:e,type:h,key:g,ref:M,props:_,_owner:a.current}}return Jo.Fragment=t,Jo.jsx=u,Jo.jsxs=u,Jo}var hm;function v_(){return hm||(hm=1,Vu.exports=g_()),Vu.exports}var $e=v_(),en=Th(),_l={},Wu={exports:{}},Yn={},Xu={exports:{}},ju={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function __(){return dm||(dm=1,(function(s){function e(Y,F){var ee=Y.length;Y.push(F);e:for(;0<ee;){var L=ee-1>>>1,H=Y[L];if(0<a(H,F))Y[L]=F,Y[ee]=H,ee=L;else break e}}function t(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var F=Y[0],ee=Y.pop();if(ee!==F){Y[0]=ee;e:for(var L=0,H=Y.length,xe=H>>>1;L<xe;){var _e=2*(L+1)-1,ve=Y[_e],X=_e+1,ce=Y[X];if(0>a(ve,ee))X<H&&0>a(ce,ve)?(Y[L]=ce,Y[X]=ee,L=X):(Y[L]=ve,Y[_e]=ee,L=_e);else if(X<H&&0>a(ce,ee))Y[L]=ce,Y[X]=ee,L=X;else break e}}return F}function a(Y,F){var ee=Y.sortIndex-F.sortIndex;return ee!==0?ee:Y.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,h=u.now();s.unstable_now=function(){return u.now()-h}}var p=[],d=[],v=1,_=null,g=3,M=!1,E=!1,C=!1,x=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(Y){for(var F=t(d);F!==null;){if(F.callback===null)r(d);else if(F.startTime<=Y)r(d),F.sortIndex=F.expirationTime,e(p,F);else break;F=t(d)}}function b(Y){if(C=!1,I(Y),!E)if(t(p)!==null)E=!0,$(V);else{var F=t(d);F!==null&&W(b,F.startTime-Y)}}function V(Y,F){E=!1,C&&(C=!1,S(w),w=-1),M=!0;var ee=g;try{for(I(F),_=t(p);_!==null&&(!(_.expirationTime>F)||Y&&!B());){var L=_.callback;if(typeof L=="function"){_.callback=null,g=_.priorityLevel;var H=L(_.expirationTime<=F);F=s.unstable_now(),typeof H=="function"?_.callback=H:_===t(p)&&r(p),I(F)}else r(p);_=t(p)}if(_!==null)var xe=!0;else{var _e=t(d);_e!==null&&W(b,_e.startTime-F),xe=!1}return xe}finally{_=null,g=ee,M=!1}}var D=!1,k=null,w=-1,N=5,q=-1;function B(){return!(s.unstable_now()-q<N)}function z(){if(k!==null){var Y=s.unstable_now();q=Y;var F=!0;try{F=k(!0,Y)}finally{F?Q():(D=!1,k=null)}}else D=!1}var Q;if(typeof R=="function")Q=function(){R(z)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,G=te.port2;te.port1.onmessage=z,Q=function(){G.postMessage(null)}}else Q=function(){x(z,0)};function $(Y){k=Y,D||(D=!0,Q())}function W(Y,F){w=x(function(){Y(s.unstable_now())},F)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Y){Y.callback=null},s.unstable_continueExecution=function(){E||M||(E=!0,$(V))},s.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<Y?Math.floor(1e3/Y):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(Y){switch(g){case 1:case 2:case 3:var F=3;break;default:F=g}var ee=g;g=F;try{return Y()}finally{g=ee}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Y,F){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var ee=g;g=Y;try{return F()}finally{g=ee}},s.unstable_scheduleCallback=function(Y,F,ee){var L=s.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?L+ee:L):ee=L,Y){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=ee+H,Y={id:v++,callback:F,priorityLevel:Y,startTime:ee,expirationTime:H,sortIndex:-1},ee>L?(Y.sortIndex=ee,e(d,Y),t(p)===null&&Y===t(d)&&(C?(S(w),w=-1):C=!0,W(b,ee-L))):(Y.sortIndex=H,e(p,Y),E||M||(E=!0,$(V))),Y},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(Y){var F=g;return function(){var ee=g;g=F;try{return Y.apply(this,arguments)}finally{g=ee}}}})(ju)),ju}var pm;function x_(){return pm||(pm=1,Xu.exports=__()),Xu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm;function S_(){if(mm)return Yn;mm=1;var s=Th(),e=x_();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function g(n){return p.call(_,n)?!0:p.call(v,n)?!1:d.test(n)?_[n]=!0:(v[n]=!0,!1)}function M(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,o,c){if(i===null||typeof i>"u"||M(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,o,c,f,m,A){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=A}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(S,R);x[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(S,R);x[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(S,R);x[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function I(n,i,o,c){var f=x.hasOwnProperty(i)?x[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,o,f,c)&&(o=null),c||f===null?g(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):f.mustUseProperty?n[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,c=f.attributeNamespace,o===null?n.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),D=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),q=Symbol.for("react.provider"),B=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),Y=Symbol.iterator;function F(n){return n===null||typeof n!="object"?null:(n=Y&&n[Y]||n["@@iterator"],typeof n=="function"?n:null)}var ee=Object.assign,L;function H(n){if(L===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);L=i&&i[1]||""}return`
`+L+n}var xe=!1;function _e(n,i){if(!n||xe)return"";xe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(he){var c=he}Reflect.construct(n,[],i)}else{try{i.call()}catch(he){c=he}n.call(i.prototype)}else{try{throw Error()}catch(he){c=he}n()}}catch(he){if(he&&c&&typeof he.stack=="string"){for(var f=he.stack.split(`
`),m=c.stack.split(`
`),A=f.length-1,O=m.length-1;1<=A&&0<=O&&f[A]!==m[O];)O--;for(;1<=A&&0<=O;A--,O--)if(f[A]!==m[O]){if(A!==1||O!==1)do if(A--,O--,0>O||f[A]!==m[O]){var K=`
`+f[A].replace(" at new "," at ");return n.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",n.displayName)),K}while(1<=A&&0<=O);break}}}finally{xe=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?H(n):""}function ve(n){switch(n.tag){case 5:return H(n.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return n=_e(n.type,!1),n;case 11:return n=_e(n.type.render,!1),n;case 1:return n=_e(n.type,!0),n;default:return""}}function X(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case D:return"Portal";case N:return"Profiler";case w:return"StrictMode";case Q:return"Suspense";case te:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case q:return(n._context.displayName||"Context")+".Provider";case z:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case G:return i=n.displayName||null,i!==null?i:X(n.type)||"Memo";case $:i=n._payload,n=n._init;try{return X(n(i))}catch{}}return null}function ce(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return X(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function fe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ae(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function De(n){var i=Ae(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(A){c=""+A,m.call(this,A)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Be(n){n._valueTracker||(n._valueTracker=De(n))}function At(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=Ae(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function tt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ht(n,i){var o=i.checked;return ee({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function _t(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=fe(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ft(n,i){i=i.checked,i!=null&&I(n,"checked",i,!1)}function wt(n,i){ft(n,i);var o=fe(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Rt(n,i.type,o):i.hasOwnProperty("defaultValue")&&Rt(n,i.type,fe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Lt(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Rt(n,i,o){(i!=="number"||tt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var U=Array.isArray;function xt(n,i,o,c){if(n=n.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=i.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&c&&(n[o].defaultSelected=!0)}else{for(o=""+fe(o),i=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function nt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ee({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function It(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(U(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:fe(o)}}function Fe(n,i){var o=fe(i.value),c=fe(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function Ot(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function P(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function y(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?P(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ne,ge=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ne=ne||document.createElement("div"),ne.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ne.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Se(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Ce={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Re=["Webkit","ms","Moz","O"];Object.keys(Ce).forEach(function(n){Re.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ce[i]=Ce[n]})});function de(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ce.hasOwnProperty(n)&&Ce[n]?(""+i).trim():i+"px"}function pe(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,f=de(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,f):n[o]=f}}var Oe=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ve(n,i){if(i){if(Oe[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Le(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function at(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var lt=null,pt=null,j=null;function Pe(n){if(n=Oo(n)){if(typeof lt!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Da(i),lt(n.stateNode,n.type,i))}}function me(n){pt?j?j.push(n):j=[n]:pt=n}function Ge(){if(pt){var n=pt,i=j;if(j=pt=null,Pe(n),i)for(n=0;n<i.length;n++)Pe(i[n])}}function Ne(n,i){return n(i)}function Me(){}var We=!1;function ze(n,i,o){if(We)return n(i,o);We=!0;try{return Ne(n,i,o)}finally{We=!1,(pt!==null||j!==null)&&(Me(),Ge())}}function mt(n,i){var o=n.stateNode;if(o===null)return null;var c=Da(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var Ct=!1;if(h)try{var an={};Object.defineProperty(an,"passive",{get:function(){Ct=!0}}),window.addEventListener("test",an,an),window.removeEventListener("test",an,an)}catch{Ct=!1}function Nn(n,i,o,c,f,m,A,O,K){var he=Array.prototype.slice.call(arguments,3);try{i.apply(o,he)}catch(Ee){this.onError(Ee)}}var Si=!1,Zi=null,Mi=!1,Qi=null,Qn={onError:function(n){Si=!0,Zi=n}};function jr(n,i,o,c,f,m,A,O,K){Si=!1,Zi=null,Nn.apply(Qn,arguments)}function Ms(n,i,o,c,f,m,A,O,K){if(jr.apply(this,arguments),Si){if(Si){var he=Zi;Si=!1,Zi=null}else throw Error(t(198));Mi||(Mi=!0,Qi=he)}}function ln(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function wn(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Un(n){if(ln(n)!==n)throw Error(t(188))}function Tn(n){var i=n.alternate;if(!i){if(i=ln(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return Un(f),n;if(m===c)return Un(f),i;m=m.sibling}throw Error(t(188))}if(o.return!==c.return)o=f,c=m;else{for(var A=!1,O=f.child;O;){if(O===o){A=!0,o=f,c=m;break}if(O===c){A=!0,c=f,o=m;break}O=O.sibling}if(!A){for(O=m.child;O;){if(O===o){A=!0,o=m,c=f;break}if(O===c){A=!0,c=m,o=f;break}O=O.sibling}if(!A)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function Fn(n){return n=Tn(n),n!==null?On(n):null}function On(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=On(n);if(i!==null)return i;n=n.sibling}return null}var Kr=e.unstable_scheduleCallback,Yr=e.unstable_cancelCallback,oi=e.unstable_shouldYield,ai=e.unstable_requestPaint,Xt=e.unstable_now,So=e.unstable_getCurrentPriorityLevel,tn=e.unstable_ImmediatePriority,T=e.unstable_UserBlockingPriority,J=e.unstable_NormalPriority,ae=e.unstable_LowPriority,oe=e.unstable_IdlePriority,se=null,Ue=null;function ke(n){if(Ue&&typeof Ue.onCommitFiberRoot=="function")try{Ue.onCommitFiberRoot(se,n,void 0,(n.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:it,Ke=Math.log,Ye=Math.LN2;function it(n){return n>>>=0,n===0?32:31-(Ke(n)/Ye|0)|0}var rt=64,Ze=4194304;function Mt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ut(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,f=n.suspendedLanes,m=n.pingedLanes,A=o&268435455;if(A!==0){var O=A&~f;O!==0?c=Mt(O):(m&=A,m!==0&&(c=Mt(m)))}else A=o&~f,A!==0?c=Mt(A):m!==0&&(c=Mt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-Te(i),f=1<<o,c|=n[o],i&=~f;return c}function Vt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ft(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes;0<m;){var A=31-Te(m),O=1<<A,K=f[A];K===-1?((O&o)===0||(O&c)!==0)&&(f[A]=Vt(O,i)):K<=i&&(n.expiredLanes|=O),m&=~O}}function Zt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Xe(){var n=rt;return rt<<=1,(rt&4194240)===0&&(rt=64),n}function nn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function gt(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Te(i),n[i]=o}function gn(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var f=31-Te(o),m=1<<f;i[f]=0,c[f]=-1,n[f]=-1,o&=~m}}function yn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-Te(o),f=1<<c;f&i|n[c]&i&&(n[c]|=i),o&=~f}}var dt=0;function Jn(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var kt,jt,yi,zt,Ei,Oi=!1,qr=[],vr=null,_r=null,xr=null,Mo=new Map,yo=new Map,Sr=[],Ug="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jh(n,i){switch(n){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":Mo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(i.pointerId)}}function Eo(n,i,o,c,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Oo(i),i!==null&&jt(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function Fg(n,i,o,c,f){switch(i){case"focusin":return vr=Eo(vr,n,i,o,c,f),!0;case"dragenter":return _r=Eo(_r,n,i,o,c,f),!0;case"mouseover":return xr=Eo(xr,n,i,o,c,f),!0;case"pointerover":var m=f.pointerId;return Mo.set(m,Eo(Mo.get(m)||null,n,i,o,c,f)),!0;case"gotpointercapture":return m=f.pointerId,yo.set(m,Eo(yo.get(m)||null,n,i,o,c,f)),!0}return!1}function Kh(n){var i=Zr(n.target);if(i!==null){var o=ln(i);if(o!==null){if(i=o.tag,i===13){if(i=wn(o),i!==null){n.blockedOn=i,Ei(n.priority,function(){yi(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function xa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=mc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);be=c,o.target.dispatchEvent(c),be=null}else return i=Oo(o),i!==null&&jt(i),n.blockedOn=o,!1;i.shift()}return!0}function Yh(n,i,o){xa(n)&&o.delete(i)}function Og(){Oi=!1,vr!==null&&xa(vr)&&(vr=null),_r!==null&&xa(_r)&&(_r=null),xr!==null&&xa(xr)&&(xr=null),Mo.forEach(Yh),yo.forEach(Yh)}function Ao(n,i){n.blockedOn===i&&(n.blockedOn=null,Oi||(Oi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Og)))}function wo(n){function i(f){return Ao(f,n)}if(0<qr.length){Ao(qr[0],n);for(var o=1;o<qr.length;o++){var c=qr[o];c.blockedOn===n&&(c.blockedOn=null)}}for(vr!==null&&Ao(vr,n),_r!==null&&Ao(_r,n),xr!==null&&Ao(xr,n),Mo.forEach(i),yo.forEach(i),o=0;o<Sr.length;o++)c=Sr[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<Sr.length&&(o=Sr[0],o.blockedOn===null);)Kh(o),o.blockedOn===null&&Sr.shift()}var ys=b.ReactCurrentBatchConfig,Sa=!0;function kg(n,i,o,c){var f=dt,m=ys.transition;ys.transition=null;try{dt=1,pc(n,i,o,c)}finally{dt=f,ys.transition=m}}function Bg(n,i,o,c){var f=dt,m=ys.transition;ys.transition=null;try{dt=4,pc(n,i,o,c)}finally{dt=f,ys.transition=m}}function pc(n,i,o,c){if(Sa){var f=mc(n,i,o,c);if(f===null)Ic(n,i,c,Ma,o),jh(n,c);else if(Fg(f,n,i,o,c))c.stopPropagation();else if(jh(n,c),i&4&&-1<Ug.indexOf(n)){for(;f!==null;){var m=Oo(f);if(m!==null&&kt(m),m=mc(n,i,o,c),m===null&&Ic(n,i,c,Ma,o),m===f)break;f=m}f!==null&&c.stopPropagation()}else Ic(n,i,c,null,o)}}var Ma=null;function mc(n,i,o,c){if(Ma=null,n=at(c),n=Zr(n),n!==null)if(i=ln(n),i===null)n=null;else if(o=i.tag,o===13){if(n=wn(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ma=n,null}function qh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(So()){case tn:return 1;case T:return 4;case J:case ae:return 16;case oe:return 536870912;default:return 16}default:return 16}}var Mr=null,gc=null,ya=null;function Zh(){if(ya)return ya;var n,i=gc,o=i.length,c,f="value"in Mr?Mr.value:Mr.textContent,m=f.length;for(n=0;n<o&&i[n]===f[n];n++);var A=o-n;for(c=1;c<=A&&i[o-c]===f[m-c];c++);return ya=f.slice(n,1<c?1-c:void 0)}function Ea(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Aa(){return!0}function Qh(){return!1}function $n(n){function i(o,c,f,m,A){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=m,this.target=A,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(o=n[O],this[O]=o?o(m):m[O]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Aa:Qh,this.isPropagationStopped=Qh,this}return ee(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Aa)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Aa)},persist:function(){},isPersistent:Aa}),i}var Es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vc=$n(Es),To=ee({},Es,{view:0,detail:0}),zg=$n(To),_c,xc,Co,wa=ee({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Co&&(Co&&n.type==="mousemove"?(_c=n.screenX-Co.screenX,xc=n.screenY-Co.screenY):xc=_c=0,Co=n),_c)},movementY:function(n){return"movementY"in n?n.movementY:xc}}),Jh=$n(wa),Hg=ee({},wa,{dataTransfer:0}),Vg=$n(Hg),Gg=ee({},To,{relatedTarget:0}),Sc=$n(Gg),Wg=ee({},Es,{animationName:0,elapsedTime:0,pseudoElement:0}),Xg=$n(Wg),jg=ee({},Es,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Kg=$n(jg),Yg=ee({},Es,{data:0}),$h=$n(Yg),qg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Qg[n])?!!i[n]:!1}function Mc(){return Jg}var $g=ee({},To,{key:function(n){if(n.key){var i=qg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ea(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Zg[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mc,charCode:function(n){return n.type==="keypress"?Ea(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ea(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),ev=$n($g),tv=ee({},wa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ed=$n(tv),nv=ee({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mc}),iv=$n(nv),rv=ee({},Es,{propertyName:0,elapsedTime:0,pseudoElement:0}),sv=$n(rv),ov=ee({},wa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),av=$n(ov),lv=[9,13,27,32],yc=h&&"CompositionEvent"in window,Ro=null;h&&"documentMode"in document&&(Ro=document.documentMode);var cv=h&&"TextEvent"in window&&!Ro,td=h&&(!yc||Ro&&8<Ro&&11>=Ro),nd=" ",id=!1;function rd(n,i){switch(n){case"keyup":return lv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var As=!1;function uv(n,i){switch(n){case"compositionend":return sd(i);case"keypress":return i.which!==32?null:(id=!0,nd);case"textInput":return n=i.data,n===nd&&id?null:n;default:return null}}function fv(n,i){if(As)return n==="compositionend"||!yc&&rd(n,i)?(n=Zh(),ya=gc=Mr=null,As=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return td&&i.locale!=="ko"?null:i.data;default:return null}}var hv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function od(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!hv[n.type]:i==="textarea"}function ad(n,i,o,c){me(c),i=Pa(i,"onChange"),0<i.length&&(o=new vc("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var bo=null,Po=null;function dv(n){wd(n,0)}function Ta(n){var i=bs(n);if(At(i))return n}function pv(n,i){if(n==="change")return i}var ld=!1;if(h){var Ec;if(h){var Ac="oninput"in document;if(!Ac){var cd=document.createElement("div");cd.setAttribute("oninput","return;"),Ac=typeof cd.oninput=="function"}Ec=Ac}else Ec=!1;ld=Ec&&(!document.documentMode||9<document.documentMode)}function ud(){bo&&(bo.detachEvent("onpropertychange",fd),Po=bo=null)}function fd(n){if(n.propertyName==="value"&&Ta(Po)){var i=[];ad(i,Po,n,at(n)),ze(dv,i)}}function mv(n,i,o){n==="focusin"?(ud(),bo=i,Po=o,bo.attachEvent("onpropertychange",fd)):n==="focusout"&&ud()}function gv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ta(Po)}function vv(n,i){if(n==="click")return Ta(i)}function _v(n,i){if(n==="input"||n==="change")return Ta(i)}function xv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Ai=typeof Object.is=="function"?Object.is:xv;function Lo(n,i){if(Ai(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!p.call(i,f)||!Ai(n[f],i[f]))return!1}return!0}function hd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function dd(n,i){var o=hd(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=hd(o)}}function pd(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?pd(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function md(){for(var n=window,i=tt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=tt(n.document)}return i}function wc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Sv(n){var i=md(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&pd(o.ownerDocument.documentElement,o)){if(c!==null&&wc(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=o.textContent.length,m=Math.min(c.start,f);c=c.end===void 0?m:Math.min(c.end,f),!n.extend&&m>c&&(f=c,c=m,m=f),f=dd(o,m);var A=dd(o,c);f&&A&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(A.node,A.offset)):(i.setEnd(A.node,A.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Mv=h&&"documentMode"in document&&11>=document.documentMode,ws=null,Tc=null,Io=null,Cc=!1;function gd(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Cc||ws==null||ws!==tt(c)||(c=ws,"selectionStart"in c&&wc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Io&&Lo(Io,c)||(Io=c,c=Pa(Tc,"onSelect"),0<c.length&&(i=new vc("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=ws)))}function Ca(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var Ts={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionend:Ca("Transition","TransitionEnd")},Rc={},vd={};h&&(vd=document.createElement("div").style,"AnimationEvent"in window||(delete Ts.animationend.animation,delete Ts.animationiteration.animation,delete Ts.animationstart.animation),"TransitionEvent"in window||delete Ts.transitionend.transition);function Ra(n){if(Rc[n])return Rc[n];if(!Ts[n])return n;var i=Ts[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in vd)return Rc[n]=i[o];return n}var _d=Ra("animationend"),xd=Ra("animationiteration"),Sd=Ra("animationstart"),Md=Ra("transitionend"),yd=new Map,Ed="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yr(n,i){yd.set(n,i),l(i,[n])}for(var bc=0;bc<Ed.length;bc++){var Pc=Ed[bc],yv=Pc.toLowerCase(),Ev=Pc[0].toUpperCase()+Pc.slice(1);yr(yv,"on"+Ev)}yr(_d,"onAnimationEnd"),yr(xd,"onAnimationIteration"),yr(Sd,"onAnimationStart"),yr("dblclick","onDoubleClick"),yr("focusin","onFocus"),yr("focusout","onBlur"),yr(Md,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Av=new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));function Ad(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,Ms(c,i,void 0,n),n.currentTarget=null}function wd(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],f=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var A=c.length-1;0<=A;A--){var O=c[A],K=O.instance,he=O.currentTarget;if(O=O.listener,K!==m&&f.isPropagationStopped())break e;Ad(f,O,he),m=K}else for(A=0;A<c.length;A++){if(O=c[A],K=O.instance,he=O.currentTarget,O=O.listener,K!==m&&f.isPropagationStopped())break e;Ad(f,O,he),m=K}}}if(Mi)throw n=Qi,Mi=!1,Qi=null,n}function Kt(n,i){var o=i[kc];o===void 0&&(o=i[kc]=new Set);var c=n+"__bubble";o.has(c)||(Td(i,n,2,!1),o.add(c))}function Lc(n,i,o){var c=0;i&&(c|=4),Td(o,n,c,i)}var ba="_reactListening"+Math.random().toString(36).slice(2);function No(n){if(!n[ba]){n[ba]=!0,r.forEach(function(o){o!=="selectionchange"&&(Av.has(o)||Lc(o,!1,n),Lc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ba]||(i[ba]=!0,Lc("selectionchange",!1,i))}}function Td(n,i,o,c){switch(qh(i)){case 1:var f=kg;break;case 4:f=Bg;break;default:f=pc}o=f.bind(null,i,o,n),f=void 0,!Ct||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,o,{capture:!0,passive:f}):n.addEventListener(i,o,!0):f!==void 0?n.addEventListener(i,o,{passive:f}):n.addEventListener(i,o,!1)}function Ic(n,i,o,c,f){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var O=c.stateNode.containerInfo;if(O===f||O.nodeType===8&&O.parentNode===f)break;if(A===4)for(A=c.return;A!==null;){var K=A.tag;if((K===3||K===4)&&(K=A.stateNode.containerInfo,K===f||K.nodeType===8&&K.parentNode===f))return;A=A.return}for(;O!==null;){if(A=Zr(O),A===null)return;if(K=A.tag,K===5||K===6){c=m=A;continue e}O=O.parentNode}}c=c.return}ze(function(){var he=m,Ee=at(o),we=[];e:{var ye=yd.get(n);if(ye!==void 0){var je=vc,Qe=n;switch(n){case"keypress":if(Ea(o)===0)break e;case"keydown":case"keyup":je=ev;break;case"focusin":Qe="focus",je=Sc;break;case"focusout":Qe="blur",je=Sc;break;case"beforeblur":case"afterblur":je=Sc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":je=Jh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":je=Vg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":je=iv;break;case _d:case xd:case Sd:je=Xg;break;case Md:je=sv;break;case"scroll":je=zg;break;case"wheel":je=av;break;case"copy":case"cut":case"paste":je=Kg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":je=ed}var Je=(i&4)!==0,rn=!Je&&n==="scroll",re=Je?ye!==null?ye+"Capture":null:ye;Je=[];for(var Z=he,le;Z!==null;){le=Z;var Ie=le.stateNode;if(le.tag===5&&Ie!==null&&(le=Ie,re!==null&&(Ie=mt(Z,re),Ie!=null&&Je.push(Uo(Z,Ie,le)))),rn)break;Z=Z.return}0<Je.length&&(ye=new je(ye,Qe,null,o,Ee),we.push({event:ye,listeners:Je}))}}if((i&7)===0){e:{if(ye=n==="mouseover"||n==="pointerover",je=n==="mouseout"||n==="pointerout",ye&&o!==be&&(Qe=o.relatedTarget||o.fromElement)&&(Zr(Qe)||Qe[Ji]))break e;if((je||ye)&&(ye=Ee.window===Ee?Ee:(ye=Ee.ownerDocument)?ye.defaultView||ye.parentWindow:window,je?(Qe=o.relatedTarget||o.toElement,je=he,Qe=Qe?Zr(Qe):null,Qe!==null&&(rn=ln(Qe),Qe!==rn||Qe.tag!==5&&Qe.tag!==6)&&(Qe=null)):(je=null,Qe=he),je!==Qe)){if(Je=Jh,Ie="onMouseLeave",re="onMouseEnter",Z="mouse",(n==="pointerout"||n==="pointerover")&&(Je=ed,Ie="onPointerLeave",re="onPointerEnter",Z="pointer"),rn=je==null?ye:bs(je),le=Qe==null?ye:bs(Qe),ye=new Je(Ie,Z+"leave",je,o,Ee),ye.target=rn,ye.relatedTarget=le,Ie=null,Zr(Ee)===he&&(Je=new Je(re,Z+"enter",Qe,o,Ee),Je.target=le,Je.relatedTarget=rn,Ie=Je),rn=Ie,je&&Qe)t:{for(Je=je,re=Qe,Z=0,le=Je;le;le=Cs(le))Z++;for(le=0,Ie=re;Ie;Ie=Cs(Ie))le++;for(;0<Z-le;)Je=Cs(Je),Z--;for(;0<le-Z;)re=Cs(re),le--;for(;Z--;){if(Je===re||re!==null&&Je===re.alternate)break t;Je=Cs(Je),re=Cs(re)}Je=null}else Je=null;je!==null&&Cd(we,ye,je,Je,!1),Qe!==null&&rn!==null&&Cd(we,rn,Qe,Je,!0)}}e:{if(ye=he?bs(he):window,je=ye.nodeName&&ye.nodeName.toLowerCase(),je==="select"||je==="input"&&ye.type==="file")var et=pv;else if(od(ye))if(ld)et=_v;else{et=gv;var st=mv}else(je=ye.nodeName)&&je.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(et=vv);if(et&&(et=et(n,he))){ad(we,et,o,Ee);break e}st&&st(n,ye,he),n==="focusout"&&(st=ye._wrapperState)&&st.controlled&&ye.type==="number"&&Rt(ye,"number",ye.value)}switch(st=he?bs(he):window,n){case"focusin":(od(st)||st.contentEditable==="true")&&(ws=st,Tc=he,Io=null);break;case"focusout":Io=Tc=ws=null;break;case"mousedown":Cc=!0;break;case"contextmenu":case"mouseup":case"dragend":Cc=!1,gd(we,o,Ee);break;case"selectionchange":if(Mv)break;case"keydown":case"keyup":gd(we,o,Ee)}var ot;if(yc)e:{switch(n){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else As?rd(n,o)&&(ut="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ut="onCompositionStart");ut&&(td&&o.locale!=="ko"&&(As||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&As&&(ot=Zh()):(Mr=Ee,gc="value"in Mr?Mr.value:Mr.textContent,As=!0)),st=Pa(he,ut),0<st.length&&(ut=new $h(ut,n,null,o,Ee),we.push({event:ut,listeners:st}),ot?ut.data=ot:(ot=sd(o),ot!==null&&(ut.data=ot)))),(ot=cv?uv(n,o):fv(n,o))&&(he=Pa(he,"onBeforeInput"),0<he.length&&(Ee=new $h("onBeforeInput","beforeinput",null,o,Ee),we.push({event:Ee,listeners:he}),Ee.data=ot))}wd(we,i)})}function Uo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Pa(n,i){for(var o=i+"Capture",c=[];n!==null;){var f=n,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=mt(n,o),m!=null&&c.unshift(Uo(n,m,f)),m=mt(n,i),m!=null&&c.push(Uo(n,m,f))),n=n.return}return c}function Cs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Cd(n,i,o,c,f){for(var m=i._reactName,A=[];o!==null&&o!==c;){var O=o,K=O.alternate,he=O.stateNode;if(K!==null&&K===c)break;O.tag===5&&he!==null&&(O=he,f?(K=mt(o,m),K!=null&&A.unshift(Uo(o,K,O))):f||(K=mt(o,m),K!=null&&A.push(Uo(o,K,O)))),o=o.return}A.length!==0&&n.push({event:i,listeners:A})}var wv=/\r\n?/g,Tv=/\u0000|\uFFFD/g;function Rd(n){return(typeof n=="string"?n:""+n).replace(wv,`
`).replace(Tv,"")}function La(n,i,o){if(i=Rd(i),Rd(n)!==i&&o)throw Error(t(425))}function Ia(){}var Dc=null,Nc=null;function Uc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Fc=typeof setTimeout=="function"?setTimeout:void 0,Cv=typeof clearTimeout=="function"?clearTimeout:void 0,bd=typeof Promise=="function"?Promise:void 0,Rv=typeof queueMicrotask=="function"?queueMicrotask:typeof bd<"u"?function(n){return bd.resolve(null).then(n).catch(bv)}:Fc;function bv(n){setTimeout(function(){throw n})}function Oc(n,i){var o=i,c=0;do{var f=o.nextSibling;if(n.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(c===0){n.removeChild(f),wo(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=f}while(o);wo(i)}function Er(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Pd(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var Rs=Math.random().toString(36).slice(2),ki="__reactFiber$"+Rs,Fo="__reactProps$"+Rs,Ji="__reactContainer$"+Rs,kc="__reactEvents$"+Rs,Pv="__reactListeners$"+Rs,Lv="__reactHandles$"+Rs;function Zr(n){var i=n[ki];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Ji]||o[ki]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Pd(n);n!==null;){if(o=n[ki])return o;n=Pd(n)}return i}n=o,o=n.parentNode}return null}function Oo(n){return n=n[ki]||n[Ji],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function bs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Da(n){return n[Fo]||null}var Bc=[],Ps=-1;function Ar(n){return{current:n}}function Yt(n){0>Ps||(n.current=Bc[Ps],Bc[Ps]=null,Ps--)}function Gt(n,i){Ps++,Bc[Ps]=n.current,n.current=i}var wr={},Cn=Ar(wr),Gn=Ar(!1),Qr=wr;function Ls(n,i){var o=n.type.contextTypes;if(!o)return wr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in o)f[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Wn(n){return n=n.childContextTypes,n!=null}function Na(){Yt(Gn),Yt(Cn)}function Ld(n,i,o){if(Cn.current!==wr)throw Error(t(168));Gt(Cn,i),Gt(Gn,o)}function Id(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,ce(n)||"Unknown",f));return ee({},o,c)}function Ua(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||wr,Qr=Cn.current,Gt(Cn,n),Gt(Gn,Gn.current),!0}function Dd(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=Id(n,i,Qr),c.__reactInternalMemoizedMergedChildContext=n,Yt(Gn),Yt(Cn),Gt(Cn,n)):Yt(Gn),Gt(Gn,o)}var $i=null,Fa=!1,zc=!1;function Nd(n){$i===null?$i=[n]:$i.push(n)}function Iv(n){Fa=!0,Nd(n)}function Tr(){if(!zc&&$i!==null){zc=!0;var n=0,i=dt;try{var o=$i;for(dt=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}$i=null,Fa=!1}catch(f){throw $i!==null&&($i=$i.slice(n+1)),Kr(tn,Tr),f}finally{dt=i,zc=!1}}return null}var Is=[],Ds=0,Oa=null,ka=0,li=[],ci=0,Jr=null,er=1,tr="";function $r(n,i){Is[Ds++]=ka,Is[Ds++]=Oa,Oa=n,ka=i}function Ud(n,i,o){li[ci++]=er,li[ci++]=tr,li[ci++]=Jr,Jr=n;var c=er;n=tr;var f=32-Te(c)-1;c&=~(1<<f),o+=1;var m=32-Te(i)+f;if(30<m){var A=f-f%5;m=(c&(1<<A)-1).toString(32),c>>=A,f-=A,er=1<<32-Te(i)+f|o<<f|c,tr=m+n}else er=1<<m|o<<f|c,tr=n}function Hc(n){n.return!==null&&($r(n,1),Ud(n,1,0))}function Vc(n){for(;n===Oa;)Oa=Is[--Ds],Is[Ds]=null,ka=Is[--Ds],Is[Ds]=null;for(;n===Jr;)Jr=li[--ci],li[ci]=null,tr=li[--ci],li[ci]=null,er=li[--ci],li[ci]=null}var ei=null,ti=null,qt=!1,wi=null;function Fd(n,i){var o=di(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Od(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ei=n,ti=Er(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ei=n,ti=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Jr!==null?{id:er,overflow:tr}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=di(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,ei=n,ti=null,!0):!1;default:return!1}}function Gc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Wc(n){if(qt){var i=ti;if(i){var o=i;if(!Od(n,i)){if(Gc(n))throw Error(t(418));i=Er(o.nextSibling);var c=ei;i&&Od(n,i)?Fd(c,o):(n.flags=n.flags&-4097|2,qt=!1,ei=n)}}else{if(Gc(n))throw Error(t(418));n.flags=n.flags&-4097|2,qt=!1,ei=n}}}function kd(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ei=n}function Ba(n){if(n!==ei)return!1;if(!qt)return kd(n),qt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Uc(n.type,n.memoizedProps)),i&&(i=ti)){if(Gc(n))throw Bd(),Error(t(418));for(;i;)Fd(n,i),i=Er(i.nextSibling)}if(kd(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){ti=Er(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}ti=null}}else ti=ei?Er(n.stateNode.nextSibling):null;return!0}function Bd(){for(var n=ti;n;)n=Er(n.nextSibling)}function Ns(){ti=ei=null,qt=!1}function Xc(n){wi===null?wi=[n]:wi.push(n)}var Dv=b.ReactCurrentBatchConfig;function ko(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var f=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(A){var O=f.refs;A===null?delete O[m]:O[m]=A},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function za(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function zd(n){var i=n._init;return i(n._payload)}function Hd(n){function i(re,Z){if(n){var le=re.deletions;le===null?(re.deletions=[Z],re.flags|=16):le.push(Z)}}function o(re,Z){if(!n)return null;for(;Z!==null;)i(re,Z),Z=Z.sibling;return null}function c(re,Z){for(re=new Map;Z!==null;)Z.key!==null?re.set(Z.key,Z):re.set(Z.index,Z),Z=Z.sibling;return re}function f(re,Z){return re=Nr(re,Z),re.index=0,re.sibling=null,re}function m(re,Z,le){return re.index=le,n?(le=re.alternate,le!==null?(le=le.index,le<Z?(re.flags|=2,Z):le):(re.flags|=2,Z)):(re.flags|=1048576,Z)}function A(re){return n&&re.alternate===null&&(re.flags|=2),re}function O(re,Z,le,Ie){return Z===null||Z.tag!==6?(Z=Fu(le,re.mode,Ie),Z.return=re,Z):(Z=f(Z,le),Z.return=re,Z)}function K(re,Z,le,Ie){var et=le.type;return et===k?Ee(re,Z,le.props.children,Ie,le.key):Z!==null&&(Z.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===$&&zd(et)===Z.type)?(Ie=f(Z,le.props),Ie.ref=ko(re,Z,le),Ie.return=re,Ie):(Ie=ul(le.type,le.key,le.props,null,re.mode,Ie),Ie.ref=ko(re,Z,le),Ie.return=re,Ie)}function he(re,Z,le,Ie){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==le.containerInfo||Z.stateNode.implementation!==le.implementation?(Z=Ou(le,re.mode,Ie),Z.return=re,Z):(Z=f(Z,le.children||[]),Z.return=re,Z)}function Ee(re,Z,le,Ie,et){return Z===null||Z.tag!==7?(Z=as(le,re.mode,Ie,et),Z.return=re,Z):(Z=f(Z,le),Z.return=re,Z)}function we(re,Z,le){if(typeof Z=="string"&&Z!==""||typeof Z=="number")return Z=Fu(""+Z,re.mode,le),Z.return=re,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case V:return le=ul(Z.type,Z.key,Z.props,null,re.mode,le),le.ref=ko(re,null,Z),le.return=re,le;case D:return Z=Ou(Z,re.mode,le),Z.return=re,Z;case $:var Ie=Z._init;return we(re,Ie(Z._payload),le)}if(U(Z)||F(Z))return Z=as(Z,re.mode,le,null),Z.return=re,Z;za(re,Z)}return null}function ye(re,Z,le,Ie){var et=Z!==null?Z.key:null;if(typeof le=="string"&&le!==""||typeof le=="number")return et!==null?null:O(re,Z,""+le,Ie);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case V:return le.key===et?K(re,Z,le,Ie):null;case D:return le.key===et?he(re,Z,le,Ie):null;case $:return et=le._init,ye(re,Z,et(le._payload),Ie)}if(U(le)||F(le))return et!==null?null:Ee(re,Z,le,Ie,null);za(re,le)}return null}function je(re,Z,le,Ie,et){if(typeof Ie=="string"&&Ie!==""||typeof Ie=="number")return re=re.get(le)||null,O(Z,re,""+Ie,et);if(typeof Ie=="object"&&Ie!==null){switch(Ie.$$typeof){case V:return re=re.get(Ie.key===null?le:Ie.key)||null,K(Z,re,Ie,et);case D:return re=re.get(Ie.key===null?le:Ie.key)||null,he(Z,re,Ie,et);case $:var st=Ie._init;return je(re,Z,le,st(Ie._payload),et)}if(U(Ie)||F(Ie))return re=re.get(le)||null,Ee(Z,re,Ie,et,null);za(Z,Ie)}return null}function Qe(re,Z,le,Ie){for(var et=null,st=null,ot=Z,ut=Z=0,xn=null;ot!==null&&ut<le.length;ut++){ot.index>ut?(xn=ot,ot=null):xn=ot.sibling;var Dt=ye(re,ot,le[ut],Ie);if(Dt===null){ot===null&&(ot=xn);break}n&&ot&&Dt.alternate===null&&i(re,ot),Z=m(Dt,Z,ut),st===null?et=Dt:st.sibling=Dt,st=Dt,ot=xn}if(ut===le.length)return o(re,ot),qt&&$r(re,ut),et;if(ot===null){for(;ut<le.length;ut++)ot=we(re,le[ut],Ie),ot!==null&&(Z=m(ot,Z,ut),st===null?et=ot:st.sibling=ot,st=ot);return qt&&$r(re,ut),et}for(ot=c(re,ot);ut<le.length;ut++)xn=je(ot,re,ut,le[ut],Ie),xn!==null&&(n&&xn.alternate!==null&&ot.delete(xn.key===null?ut:xn.key),Z=m(xn,Z,ut),st===null?et=xn:st.sibling=xn,st=xn);return n&&ot.forEach(function(Ur){return i(re,Ur)}),qt&&$r(re,ut),et}function Je(re,Z,le,Ie){var et=F(le);if(typeof et!="function")throw Error(t(150));if(le=et.call(le),le==null)throw Error(t(151));for(var st=et=null,ot=Z,ut=Z=0,xn=null,Dt=le.next();ot!==null&&!Dt.done;ut++,Dt=le.next()){ot.index>ut?(xn=ot,ot=null):xn=ot.sibling;var Ur=ye(re,ot,Dt.value,Ie);if(Ur===null){ot===null&&(ot=xn);break}n&&ot&&Ur.alternate===null&&i(re,ot),Z=m(Ur,Z,ut),st===null?et=Ur:st.sibling=Ur,st=Ur,ot=xn}if(Dt.done)return o(re,ot),qt&&$r(re,ut),et;if(ot===null){for(;!Dt.done;ut++,Dt=le.next())Dt=we(re,Dt.value,Ie),Dt!==null&&(Z=m(Dt,Z,ut),st===null?et=Dt:st.sibling=Dt,st=Dt);return qt&&$r(re,ut),et}for(ot=c(re,ot);!Dt.done;ut++,Dt=le.next())Dt=je(ot,re,ut,Dt.value,Ie),Dt!==null&&(n&&Dt.alternate!==null&&ot.delete(Dt.key===null?ut:Dt.key),Z=m(Dt,Z,ut),st===null?et=Dt:st.sibling=Dt,st=Dt);return n&&ot.forEach(function(h_){return i(re,h_)}),qt&&$r(re,ut),et}function rn(re,Z,le,Ie){if(typeof le=="object"&&le!==null&&le.type===k&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case V:e:{for(var et=le.key,st=Z;st!==null;){if(st.key===et){if(et=le.type,et===k){if(st.tag===7){o(re,st.sibling),Z=f(st,le.props.children),Z.return=re,re=Z;break e}}else if(st.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===$&&zd(et)===st.type){o(re,st.sibling),Z=f(st,le.props),Z.ref=ko(re,st,le),Z.return=re,re=Z;break e}o(re,st);break}else i(re,st);st=st.sibling}le.type===k?(Z=as(le.props.children,re.mode,Ie,le.key),Z.return=re,re=Z):(Ie=ul(le.type,le.key,le.props,null,re.mode,Ie),Ie.ref=ko(re,Z,le),Ie.return=re,re=Ie)}return A(re);case D:e:{for(st=le.key;Z!==null;){if(Z.key===st)if(Z.tag===4&&Z.stateNode.containerInfo===le.containerInfo&&Z.stateNode.implementation===le.implementation){o(re,Z.sibling),Z=f(Z,le.children||[]),Z.return=re,re=Z;break e}else{o(re,Z);break}else i(re,Z);Z=Z.sibling}Z=Ou(le,re.mode,Ie),Z.return=re,re=Z}return A(re);case $:return st=le._init,rn(re,Z,st(le._payload),Ie)}if(U(le))return Qe(re,Z,le,Ie);if(F(le))return Je(re,Z,le,Ie);za(re,le)}return typeof le=="string"&&le!==""||typeof le=="number"?(le=""+le,Z!==null&&Z.tag===6?(o(re,Z.sibling),Z=f(Z,le),Z.return=re,re=Z):(o(re,Z),Z=Fu(le,re.mode,Ie),Z.return=re,re=Z),A(re)):o(re,Z)}return rn}var Us=Hd(!0),Vd=Hd(!1),Ha=Ar(null),Va=null,Fs=null,jc=null;function Kc(){jc=Fs=Va=null}function Yc(n){var i=Ha.current;Yt(Ha),n._currentValue=i}function qc(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function Os(n,i){Va=n,jc=Fs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Xn=!0),n.firstContext=null)}function ui(n){var i=n._currentValue;if(jc!==n)if(n={context:n,memoizedValue:i,next:null},Fs===null){if(Va===null)throw Error(t(308));Fs=n,Va.dependencies={lanes:0,firstContext:n}}else Fs=Fs.next=n;return i}var es=null;function Zc(n){es===null?es=[n]:es.push(n)}function Gd(n,i,o,c){var f=i.interleaved;return f===null?(o.next=o,Zc(i)):(o.next=f.next,f.next=o),i.interleaved=o,nr(n,c)}function nr(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Cr=!1;function Qc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wd(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ir(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Rr(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(bt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,nr(n,o)}return f=c.interleaved,f===null?(i.next=i,Zc(c)):(i.next=f.next,f.next=i),c.interleaved=i,nr(n,o)}function Ga(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,yn(n,o)}}function Xd(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var A={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?f=m=A:m=m.next=A,o=o.next}while(o!==null);m===null?f=m=i:m=m.next=i}else f=m=i;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Wa(n,i,o,c){var f=n.updateQueue;Cr=!1;var m=f.firstBaseUpdate,A=f.lastBaseUpdate,O=f.shared.pending;if(O!==null){f.shared.pending=null;var K=O,he=K.next;K.next=null,A===null?m=he:A.next=he,A=K;var Ee=n.alternate;Ee!==null&&(Ee=Ee.updateQueue,O=Ee.lastBaseUpdate,O!==A&&(O===null?Ee.firstBaseUpdate=he:O.next=he,Ee.lastBaseUpdate=K))}if(m!==null){var we=f.baseState;A=0,Ee=he=K=null,O=m;do{var ye=O.lane,je=O.eventTime;if((c&ye)===ye){Ee!==null&&(Ee=Ee.next={eventTime:je,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var Qe=n,Je=O;switch(ye=i,je=o,Je.tag){case 1:if(Qe=Je.payload,typeof Qe=="function"){we=Qe.call(je,we,ye);break e}we=Qe;break e;case 3:Qe.flags=Qe.flags&-65537|128;case 0:if(Qe=Je.payload,ye=typeof Qe=="function"?Qe.call(je,we,ye):Qe,ye==null)break e;we=ee({},we,ye);break e;case 2:Cr=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,ye=f.effects,ye===null?f.effects=[O]:ye.push(O))}else je={eventTime:je,lane:ye,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Ee===null?(he=Ee=je,K=we):Ee=Ee.next=je,A|=ye;if(O=O.next,O===null){if(O=f.shared.pending,O===null)break;ye=O,O=ye.next,ye.next=null,f.lastBaseUpdate=ye,f.shared.pending=null}}while(!0);if(Ee===null&&(K=we),f.baseState=K,f.firstBaseUpdate=he,f.lastBaseUpdate=Ee,i=f.shared.interleaved,i!==null){f=i;do A|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);is|=A,n.lanes=A,n.memoizedState=we}}function jd(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=o,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Bo={},Bi=Ar(Bo),zo=Ar(Bo),Ho=Ar(Bo);function ts(n){if(n===Bo)throw Error(t(174));return n}function Jc(n,i){switch(Gt(Ho,i),Gt(zo,n),Gt(Bi,Bo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:y(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=y(i,n)}Yt(Bi),Gt(Bi,i)}function ks(){Yt(Bi),Yt(zo),Yt(Ho)}function Kd(n){ts(Ho.current);var i=ts(Bi.current),o=y(i,n.type);i!==o&&(Gt(zo,n),Gt(Bi,o))}function $c(n){zo.current===n&&(Yt(Bi),Yt(zo))}var Qt=Ar(0);function Xa(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var eu=[];function tu(){for(var n=0;n<eu.length;n++)eu[n]._workInProgressVersionPrimary=null;eu.length=0}var ja=b.ReactCurrentDispatcher,nu=b.ReactCurrentBatchConfig,ns=0,Jt=null,fn=null,vn=null,Ka=!1,Vo=!1,Go=0,Nv=0;function Rn(){throw Error(t(321))}function iu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!Ai(n[o],i[o]))return!1;return!0}function ru(n,i,o,c,f,m){if(ns=m,Jt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,ja.current=n===null||n.memoizedState===null?kv:Bv,n=o(c,f),Vo){m=0;do{if(Vo=!1,Go=0,25<=m)throw Error(t(301));m+=1,vn=fn=null,i.updateQueue=null,ja.current=zv,n=o(c,f)}while(Vo)}if(ja.current=Za,i=fn!==null&&fn.next!==null,ns=0,vn=fn=Jt=null,Ka=!1,i)throw Error(t(300));return n}function su(){var n=Go!==0;return Go=0,n}function zi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?Jt.memoizedState=vn=n:vn=vn.next=n,vn}function fi(){if(fn===null){var n=Jt.alternate;n=n!==null?n.memoizedState:null}else n=fn.next;var i=vn===null?Jt.memoizedState:vn.next;if(i!==null)vn=i,fn=n;else{if(n===null)throw Error(t(310));fn=n,n={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},vn===null?Jt.memoizedState=vn=n:vn=vn.next=n}return vn}function Wo(n,i){return typeof i=="function"?i(n):i}function ou(n){var i=fi(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=fn,f=c.baseQueue,m=o.pending;if(m!==null){if(f!==null){var A=f.next;f.next=m.next,m.next=A}c.baseQueue=f=m,o.pending=null}if(f!==null){m=f.next,c=c.baseState;var O=A=null,K=null,he=m;do{var Ee=he.lane;if((ns&Ee)===Ee)K!==null&&(K=K.next={lane:0,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),c=he.hasEagerState?he.eagerState:n(c,he.action);else{var we={lane:Ee,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null};K===null?(O=K=we,A=c):K=K.next=we,Jt.lanes|=Ee,is|=Ee}he=he.next}while(he!==null&&he!==m);K===null?A=c:K.next=O,Ai(c,i.memoizedState)||(Xn=!0),i.memoizedState=c,i.baseState=A,i.baseQueue=K,o.lastRenderedState=c}if(n=o.interleaved,n!==null){f=n;do m=f.lane,Jt.lanes|=m,is|=m,f=f.next;while(f!==n)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function au(n){var i=fi(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,f=o.pending,m=i.memoizedState;if(f!==null){o.pending=null;var A=f=f.next;do m=n(m,A.action),A=A.next;while(A!==f);Ai(m,i.memoizedState)||(Xn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,c]}function Yd(){}function qd(n,i){var o=Jt,c=fi(),f=i(),m=!Ai(c.memoizedState,f);if(m&&(c.memoizedState=f,Xn=!0),c=c.queue,lu(Jd.bind(null,o,c,n),[n]),c.getSnapshot!==i||m||vn!==null&&vn.memoizedState.tag&1){if(o.flags|=2048,Xo(9,Qd.bind(null,o,c,f,i),void 0,null),_n===null)throw Error(t(349));(ns&30)!==0||Zd(o,i,f)}return f}function Zd(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Jt.updateQueue,i===null?(i={lastEffect:null,stores:null},Jt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Qd(n,i,o,c){i.value=o,i.getSnapshot=c,$d(i)&&ep(n)}function Jd(n,i,o){return o(function(){$d(i)&&ep(n)})}function $d(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!Ai(n,o)}catch{return!0}}function ep(n){var i=nr(n,1);i!==null&&bi(i,n,1,-1)}function tp(n){var i=zi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:n},i.queue=n,n=n.dispatch=Ov.bind(null,Jt,n),[i.memoizedState,n]}function Xo(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=Jt.updateQueue,i===null?(i={lastEffect:null,stores:null},Jt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function np(){return fi().memoizedState}function Ya(n,i,o,c){var f=zi();Jt.flags|=n,f.memoizedState=Xo(1|i,o,void 0,c===void 0?null:c)}function qa(n,i,o,c){var f=fi();c=c===void 0?null:c;var m=void 0;if(fn!==null){var A=fn.memoizedState;if(m=A.destroy,c!==null&&iu(c,A.deps)){f.memoizedState=Xo(i,o,m,c);return}}Jt.flags|=n,f.memoizedState=Xo(1|i,o,m,c)}function ip(n,i){return Ya(8390656,8,n,i)}function lu(n,i){return qa(2048,8,n,i)}function rp(n,i){return qa(4,2,n,i)}function sp(n,i){return qa(4,4,n,i)}function op(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function ap(n,i,o){return o=o!=null?o.concat([n]):null,qa(4,4,op.bind(null,i,n),o)}function cu(){}function lp(n,i){var o=fi();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&iu(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function cp(n,i){var o=fi();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&iu(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function up(n,i,o){return(ns&21)===0?(n.baseState&&(n.baseState=!1,Xn=!0),n.memoizedState=o):(Ai(o,i)||(o=Xe(),Jt.lanes|=o,is|=o,n.baseState=!0),i)}function Uv(n,i){var o=dt;dt=o!==0&&4>o?o:4,n(!0);var c=nu.transition;nu.transition={};try{n(!1),i()}finally{dt=o,nu.transition=c}}function fp(){return fi().memoizedState}function Fv(n,i,o){var c=Ir(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},hp(n))dp(i,o);else if(o=Gd(n,i,o,c),o!==null){var f=Bn();bi(o,n,c,f),pp(o,i,c)}}function Ov(n,i,o){var c=Ir(n),f={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(hp(n))dp(i,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var A=i.lastRenderedState,O=m(A,o);if(f.hasEagerState=!0,f.eagerState=O,Ai(O,A)){var K=i.interleaved;K===null?(f.next=f,Zc(i)):(f.next=K.next,K.next=f),i.interleaved=f;return}}catch{}finally{}o=Gd(n,i,f,c),o!==null&&(f=Bn(),bi(o,n,c,f),pp(o,i,c))}}function hp(n){var i=n.alternate;return n===Jt||i!==null&&i===Jt}function dp(n,i){Vo=Ka=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function pp(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,yn(n,o)}}var Za={readContext:ui,useCallback:Rn,useContext:Rn,useEffect:Rn,useImperativeHandle:Rn,useInsertionEffect:Rn,useLayoutEffect:Rn,useMemo:Rn,useReducer:Rn,useRef:Rn,useState:Rn,useDebugValue:Rn,useDeferredValue:Rn,useTransition:Rn,useMutableSource:Rn,useSyncExternalStore:Rn,useId:Rn,unstable_isNewReconciler:!1},kv={readContext:ui,useCallback:function(n,i){return zi().memoizedState=[n,i===void 0?null:i],n},useContext:ui,useEffect:ip,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Ya(4194308,4,op.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Ya(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ya(4,2,n,i)},useMemo:function(n,i){var o=zi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=zi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Fv.bind(null,Jt,n),[c.memoizedState,n]},useRef:function(n){var i=zi();return n={current:n},i.memoizedState=n},useState:tp,useDebugValue:cu,useDeferredValue:function(n){return zi().memoizedState=n},useTransition:function(){var n=tp(!1),i=n[0];return n=Uv.bind(null,n[1]),zi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=Jt,f=zi();if(qt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),_n===null)throw Error(t(349));(ns&30)!==0||Zd(c,i,o)}f.memoizedState=o;var m={value:o,getSnapshot:i};return f.queue=m,ip(Jd.bind(null,c,m,n),[n]),c.flags|=2048,Xo(9,Qd.bind(null,c,m,o,i),void 0,null),o},useId:function(){var n=zi(),i=_n.identifierPrefix;if(qt){var o=tr,c=er;o=(c&~(1<<32-Te(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=Go++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Nv++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Bv={readContext:ui,useCallback:lp,useContext:ui,useEffect:lu,useImperativeHandle:ap,useInsertionEffect:rp,useLayoutEffect:sp,useMemo:cp,useReducer:ou,useRef:np,useState:function(){return ou(Wo)},useDebugValue:cu,useDeferredValue:function(n){var i=fi();return up(i,fn.memoizedState,n)},useTransition:function(){var n=ou(Wo)[0],i=fi().memoizedState;return[n,i]},useMutableSource:Yd,useSyncExternalStore:qd,useId:fp,unstable_isNewReconciler:!1},zv={readContext:ui,useCallback:lp,useContext:ui,useEffect:lu,useImperativeHandle:ap,useInsertionEffect:rp,useLayoutEffect:sp,useMemo:cp,useReducer:au,useRef:np,useState:function(){return au(Wo)},useDebugValue:cu,useDeferredValue:function(n){var i=fi();return fn===null?i.memoizedState=n:up(i,fn.memoizedState,n)},useTransition:function(){var n=au(Wo)[0],i=fi().memoizedState;return[n,i]},useMutableSource:Yd,useSyncExternalStore:qd,useId:fp,unstable_isNewReconciler:!1};function Ti(n,i){if(n&&n.defaultProps){i=ee({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function uu(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:ee({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Qa={isMounted:function(n){return(n=n._reactInternals)?ln(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=Bn(),f=Ir(n),m=ir(c,f);m.payload=i,o!=null&&(m.callback=o),i=Rr(n,m,f),i!==null&&(bi(i,n,f,c),Ga(i,n,f))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=Bn(),f=Ir(n),m=ir(c,f);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=Rr(n,m,f),i!==null&&(bi(i,n,f,c),Ga(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Bn(),c=Ir(n),f=ir(o,c);f.tag=2,i!=null&&(f.callback=i),i=Rr(n,f,c),i!==null&&(bi(i,n,c,o),Ga(i,n,c))}};function mp(n,i,o,c,f,m,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,A):i.prototype&&i.prototype.isPureReactComponent?!Lo(o,c)||!Lo(f,m):!0}function gp(n,i,o){var c=!1,f=wr,m=i.contextType;return typeof m=="object"&&m!==null?m=ui(m):(f=Wn(i)?Qr:Cn.current,c=i.contextTypes,m=(c=c!=null)?Ls(n,f):wr),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Qa,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=m),i}function vp(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&Qa.enqueueReplaceState(i,i.state,null)}function fu(n,i,o,c){var f=n.stateNode;f.props=o,f.state=n.memoizedState,f.refs={},Qc(n);var m=i.contextType;typeof m=="object"&&m!==null?f.context=ui(m):(m=Wn(i)?Qr:Cn.current,f.context=Ls(n,m)),f.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(uu(n,i,m,o),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Qa.enqueueReplaceState(f,f.state,null),Wa(n,o,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Bs(n,i){try{var o="",c=i;do o+=ve(c),c=c.return;while(c);var f=o}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:f,digest:null}}function hu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function du(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Hv=typeof WeakMap=="function"?WeakMap:Map;function _p(n,i,o){o=ir(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){rl||(rl=!0,Ru=c),du(n,i)},o}function xp(n,i,o){o=ir(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;o.payload=function(){return c(f)},o.callback=function(){du(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){du(n,i),typeof c!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var A=i.stack;this.componentDidCatch(i.value,{componentStack:A!==null?A:""})}),o}function Sp(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new Hv;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(o)||(f.add(o),n=t_.bind(null,n,i,o),i.then(n,n))}function Mp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function yp(n,i,o,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=ir(-1,1),i.tag=2,Rr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var Vv=b.ReactCurrentOwner,Xn=!1;function kn(n,i,o,c){i.child=n===null?Vd(i,null,o,c):Us(i,n.child,o,c)}function Ep(n,i,o,c,f){o=o.render;var m=i.ref;return Os(i,f),c=ru(n,i,o,c,m,f),o=su(),n!==null&&!Xn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,rr(n,i,f)):(qt&&o&&Hc(i),i.flags|=1,kn(n,i,c,f),i.child)}function Ap(n,i,o,c,f){if(n===null){var m=o.type;return typeof m=="function"&&!Uu(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,wp(n,i,m,c,f)):(n=ul(o.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&f)===0){var A=m.memoizedProps;if(o=o.compare,o=o!==null?o:Lo,o(A,c)&&n.ref===i.ref)return rr(n,i,f)}return i.flags|=1,n=Nr(m,c),n.ref=i.ref,n.return=i,i.child=n}function wp(n,i,o,c,f){if(n!==null){var m=n.memoizedProps;if(Lo(m,c)&&n.ref===i.ref)if(Xn=!1,i.pendingProps=c=m,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Xn=!0);else return i.lanes=n.lanes,rr(n,i,f)}return pu(n,i,o,c,f)}function Tp(n,i,o){var c=i.pendingProps,f=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(Hs,ni),ni|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Gt(Hs,ni),ni|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:o,Gt(Hs,ni),ni|=c}else m!==null?(c=m.baseLanes|o,i.memoizedState=null):c=o,Gt(Hs,ni),ni|=c;return kn(n,i,f,o),i.child}function Cp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function pu(n,i,o,c,f){var m=Wn(o)?Qr:Cn.current;return m=Ls(i,m),Os(i,f),o=ru(n,i,o,c,m,f),c=su(),n!==null&&!Xn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,rr(n,i,f)):(qt&&c&&Hc(i),i.flags|=1,kn(n,i,o,f),i.child)}function Rp(n,i,o,c,f){if(Wn(o)){var m=!0;Ua(i)}else m=!1;if(Os(i,f),i.stateNode===null)$a(n,i),gp(i,o,c),fu(i,o,c,f),c=!0;else if(n===null){var A=i.stateNode,O=i.memoizedProps;A.props=O;var K=A.context,he=o.contextType;typeof he=="object"&&he!==null?he=ui(he):(he=Wn(o)?Qr:Cn.current,he=Ls(i,he));var Ee=o.getDerivedStateFromProps,we=typeof Ee=="function"||typeof A.getSnapshotBeforeUpdate=="function";we||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(O!==c||K!==he)&&vp(i,A,c,he),Cr=!1;var ye=i.memoizedState;A.state=ye,Wa(i,c,A,f),K=i.memoizedState,O!==c||ye!==K||Gn.current||Cr?(typeof Ee=="function"&&(uu(i,o,Ee,c),K=i.memoizedState),(O=Cr||mp(i,o,O,c,ye,K,he))?(we||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(i.flags|=4194308)):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=K),A.props=c,A.state=K,A.context=he,c=O):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{A=i.stateNode,Wd(n,i),O=i.memoizedProps,he=i.type===i.elementType?O:Ti(i.type,O),A.props=he,we=i.pendingProps,ye=A.context,K=o.contextType,typeof K=="object"&&K!==null?K=ui(K):(K=Wn(o)?Qr:Cn.current,K=Ls(i,K));var je=o.getDerivedStateFromProps;(Ee=typeof je=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(O!==we||ye!==K)&&vp(i,A,c,K),Cr=!1,ye=i.memoizedState,A.state=ye,Wa(i,c,A,f);var Qe=i.memoizedState;O!==we||ye!==Qe||Gn.current||Cr?(typeof je=="function"&&(uu(i,o,je,c),Qe=i.memoizedState),(he=Cr||mp(i,o,he,c,ye,Qe,K)||!1)?(Ee||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(c,Qe,K),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(c,Qe,K)),typeof A.componentDidUpdate=="function"&&(i.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof A.componentDidUpdate!="function"||O===n.memoizedProps&&ye===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&ye===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Qe),A.props=c,A.state=Qe,A.context=K,c=he):(typeof A.componentDidUpdate!="function"||O===n.memoizedProps&&ye===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&ye===n.memoizedState||(i.flags|=1024),c=!1)}return mu(n,i,o,c,m,f)}function mu(n,i,o,c,f,m){Cp(n,i);var A=(i.flags&128)!==0;if(!c&&!A)return f&&Dd(i,o,!1),rr(n,i,m);c=i.stateNode,Vv.current=i;var O=A&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&A?(i.child=Us(i,n.child,null,m),i.child=Us(i,null,O,m)):kn(n,i,O,m),i.memoizedState=c.state,f&&Dd(i,o,!0),i.child}function bp(n){var i=n.stateNode;i.pendingContext?Ld(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Ld(n,i.context,!1),Jc(n,i.containerInfo)}function Pp(n,i,o,c,f){return Ns(),Xc(f),i.flags|=256,kn(n,i,o,c),i.child}var gu={dehydrated:null,treeContext:null,retryLane:0};function vu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Lp(n,i,o){var c=i.pendingProps,f=Qt.current,m=!1,A=(i.flags&128)!==0,O;if((O=A)||(O=n!==null&&n.memoizedState===null?!1:(f&2)!==0),O?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Gt(Qt,f&1),n===null)return Wc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(A=c.children,n=c.fallback,m?(c=i.mode,m=i.child,A={mode:"hidden",children:A},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=A):m=fl(A,c,0,null),n=as(n,c,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=vu(o),i.memoizedState=gu,n):_u(i,A));if(f=n.memoizedState,f!==null&&(O=f.dehydrated,O!==null))return Gv(n,i,A,c,O,f,o);if(m){m=c.fallback,A=i.mode,f=n.child,O=f.sibling;var K={mode:"hidden",children:c.children};return(A&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=K,i.deletions=null):(c=Nr(f,K),c.subtreeFlags=f.subtreeFlags&14680064),O!==null?m=Nr(O,m):(m=as(m,A,o,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,A=n.child.memoizedState,A=A===null?vu(o):{baseLanes:A.baseLanes|o,cachePool:null,transitions:A.transitions},m.memoizedState=A,m.childLanes=n.childLanes&~o,i.memoizedState=gu,c}return m=n.child,n=m.sibling,c=Nr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function _u(n,i){return i=fl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ja(n,i,o,c){return c!==null&&Xc(c),Us(i,n.child,null,o),n=_u(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Gv(n,i,o,c,f,m,A){if(o)return i.flags&256?(i.flags&=-257,c=hu(Error(t(422))),Ja(n,i,A,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,f=i.mode,c=fl({mode:"visible",children:c.children},f,0,null),m=as(m,f,A,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Us(i,n.child,null,A),i.child.memoizedState=vu(A),i.memoizedState=gu,m);if((i.mode&1)===0)return Ja(n,i,A,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var O=c.dgst;return c=O,m=Error(t(419)),c=hu(m,c,void 0),Ja(n,i,A,c)}if(O=(A&n.childLanes)!==0,Xn||O){if(c=_n,c!==null){switch(A&-A){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|A))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,nr(n,f),bi(c,n,f,-1))}return Nu(),c=hu(Error(t(421))),Ja(n,i,A,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=n_.bind(null,n),f._reactRetry=i,null):(n=m.treeContext,ti=Er(f.nextSibling),ei=i,qt=!0,wi=null,n!==null&&(li[ci++]=er,li[ci++]=tr,li[ci++]=Jr,er=n.id,tr=n.overflow,Jr=i),i=_u(i,c.children),i.flags|=4096,i)}function Ip(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),qc(n.return,i,o)}function xu(n,i,o,c,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=o,m.tailMode=f)}function Dp(n,i,o){var c=i.pendingProps,f=c.revealOrder,m=c.tail;if(kn(n,i,c.children,o),c=Qt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ip(n,o,i);else if(n.tag===19)Ip(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Gt(Qt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)n=o.alternate,n!==null&&Xa(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),xu(i,!1,f,o,m);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Xa(n)===null){i.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}xu(i,!0,o,null,m);break;case"together":xu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function $a(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function rr(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),is|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=Nr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=Nr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function Wv(n,i,o){switch(i.tag){case 3:bp(i),Ns();break;case 5:Kd(i);break;case 1:Wn(i.type)&&Ua(i);break;case 4:Jc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Gt(Ha,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Gt(Qt,Qt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Lp(n,i,o):(Gt(Qt,Qt.current&1),n=rr(n,i,o),n!==null?n.sibling:null);Gt(Qt,Qt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Dp(n,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Gt(Qt,Qt.current),c)break;return null;case 22:case 23:return i.lanes=0,Tp(n,i,o)}return rr(n,i,o)}var Np,Su,Up,Fp;Np=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Su=function(){},Up=function(n,i,o,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,ts(Bi.current);var m=null;switch(o){case"input":f=ht(n,f),c=ht(n,c),m=[];break;case"select":f=ee({},f,{value:void 0}),c=ee({},c,{value:void 0}),m=[];break;case"textarea":f=nt(n,f),c=nt(n,c),m=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Ia)}Ve(o,c);var A;o=null;for(he in f)if(!c.hasOwnProperty(he)&&f.hasOwnProperty(he)&&f[he]!=null)if(he==="style"){var O=f[he];for(A in O)O.hasOwnProperty(A)&&(o||(o={}),o[A]="")}else he!=="dangerouslySetInnerHTML"&&he!=="children"&&he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&he!=="autoFocus"&&(a.hasOwnProperty(he)?m||(m=[]):(m=m||[]).push(he,null));for(he in c){var K=c[he];if(O=f!=null?f[he]:void 0,c.hasOwnProperty(he)&&K!==O&&(K!=null||O!=null))if(he==="style")if(O){for(A in O)!O.hasOwnProperty(A)||K&&K.hasOwnProperty(A)||(o||(o={}),o[A]="");for(A in K)K.hasOwnProperty(A)&&O[A]!==K[A]&&(o||(o={}),o[A]=K[A])}else o||(m||(m=[]),m.push(he,o)),o=K;else he==="dangerouslySetInnerHTML"?(K=K?K.__html:void 0,O=O?O.__html:void 0,K!=null&&O!==K&&(m=m||[]).push(he,K)):he==="children"?typeof K!="string"&&typeof K!="number"||(m=m||[]).push(he,""+K):he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&(a.hasOwnProperty(he)?(K!=null&&he==="onScroll"&&Kt("scroll",n),m||O===K||(m=[])):(m=m||[]).push(he,K))}o&&(m=m||[]).push("style",o);var he=m;(i.updateQueue=he)&&(i.flags|=4)}},Fp=function(n,i,o,c){o!==c&&(i.flags|=4)};function jo(n,i){if(!qt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function bn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function Xv(n,i,o){var c=i.pendingProps;switch(Vc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bn(i),null;case 1:return Wn(i.type)&&Na(),bn(i),null;case 3:return c=i.stateNode,ks(),Yt(Gn),Yt(Cn),tu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ba(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,wi!==null&&(Lu(wi),wi=null))),Su(n,i),bn(i),null;case 5:$c(i);var f=ts(Ho.current);if(o=i.type,n!==null&&i.stateNode!=null)Up(n,i,o,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return bn(i),null}if(n=ts(Bi.current),Ba(i)){c=i.stateNode,o=i.type;var m=i.memoizedProps;switch(c[ki]=i,c[Fo]=m,n=(i.mode&1)!==0,o){case"dialog":Kt("cancel",c),Kt("close",c);break;case"iframe":case"object":case"embed":Kt("load",c);break;case"video":case"audio":for(f=0;f<Do.length;f++)Kt(Do[f],c);break;case"source":Kt("error",c);break;case"img":case"image":case"link":Kt("error",c),Kt("load",c);break;case"details":Kt("toggle",c);break;case"input":_t(c,m),Kt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Kt("invalid",c);break;case"textarea":It(c,m),Kt("invalid",c)}Ve(o,m),f=null;for(var A in m)if(m.hasOwnProperty(A)){var O=m[A];A==="children"?typeof O=="string"?c.textContent!==O&&(m.suppressHydrationWarning!==!0&&La(c.textContent,O,n),f=["children",O]):typeof O=="number"&&c.textContent!==""+O&&(m.suppressHydrationWarning!==!0&&La(c.textContent,O,n),f=["children",""+O]):a.hasOwnProperty(A)&&O!=null&&A==="onScroll"&&Kt("scroll",c)}switch(o){case"input":Be(c),Lt(c,m,!0);break;case"textarea":Be(c),Ot(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Ia)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{A=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=P(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=A.createElement(o,{is:c.is}):(n=A.createElement(o),o==="select"&&(A=n,c.multiple?A.multiple=!0:c.size&&(A.size=c.size))):n=A.createElementNS(n,o),n[ki]=i,n[Fo]=c,Np(n,i,!1,!1),i.stateNode=n;e:{switch(A=Le(o,c),o){case"dialog":Kt("cancel",n),Kt("close",n),f=c;break;case"iframe":case"object":case"embed":Kt("load",n),f=c;break;case"video":case"audio":for(f=0;f<Do.length;f++)Kt(Do[f],n);f=c;break;case"source":Kt("error",n),f=c;break;case"img":case"image":case"link":Kt("error",n),Kt("load",n),f=c;break;case"details":Kt("toggle",n),f=c;break;case"input":_t(n,c),f=ht(n,c),Kt("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=ee({},c,{value:void 0}),Kt("invalid",n);break;case"textarea":It(n,c),f=nt(n,c),Kt("invalid",n);break;default:f=c}Ve(o,f),O=f;for(m in O)if(O.hasOwnProperty(m)){var K=O[m];m==="style"?pe(n,K):m==="dangerouslySetInnerHTML"?(K=K?K.__html:void 0,K!=null&&ge(n,K)):m==="children"?typeof K=="string"?(o!=="textarea"||K!=="")&&Se(n,K):typeof K=="number"&&Se(n,""+K):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?K!=null&&m==="onScroll"&&Kt("scroll",n):K!=null&&I(n,m,K,A))}switch(o){case"input":Be(n),Lt(n,c,!1);break;case"textarea":Be(n),Ot(n);break;case"option":c.value!=null&&n.setAttribute("value",""+fe(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?xt(n,!!c.multiple,m,!1):c.defaultValue!=null&&xt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Ia)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return bn(i),null;case 6:if(n&&i.stateNode!=null)Fp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=ts(Ho.current),ts(Bi.current),Ba(i)){if(c=i.stateNode,o=i.memoizedProps,c[ki]=i,(m=c.nodeValue!==o)&&(n=ei,n!==null))switch(n.tag){case 3:La(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&La(c.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[ki]=i,i.stateNode=c}return bn(i),null;case 13:if(Yt(Qt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(qt&&ti!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Bd(),Ns(),i.flags|=98560,m=!1;else if(m=Ba(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[ki]=i}else Ns(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;bn(i),m=!1}else wi!==null&&(Lu(wi),wi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Qt.current&1)!==0?hn===0&&(hn=3):Nu())),i.updateQueue!==null&&(i.flags|=4),bn(i),null);case 4:return ks(),Su(n,i),n===null&&No(i.stateNode.containerInfo),bn(i),null;case 10:return Yc(i.type._context),bn(i),null;case 17:return Wn(i.type)&&Na(),bn(i),null;case 19:if(Yt(Qt),m=i.memoizedState,m===null)return bn(i),null;if(c=(i.flags&128)!==0,A=m.rendering,A===null)if(c)jo(m,!1);else{if(hn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(A=Xa(n),A!==null){for(i.flags|=128,jo(m,!1),c=A.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)m=o,n=c,m.flags&=14680066,A=m.alternate,A===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=A.childLanes,m.lanes=A.lanes,m.child=A.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=A.memoizedProps,m.memoizedState=A.memoizedState,m.updateQueue=A.updateQueue,m.type=A.type,n=A.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Gt(Qt,Qt.current&1|2),i.child}n=n.sibling}m.tail!==null&&Xt()>Vs&&(i.flags|=128,c=!0,jo(m,!1),i.lanes=4194304)}else{if(!c)if(n=Xa(A),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),jo(m,!0),m.tail===null&&m.tailMode==="hidden"&&!A.alternate&&!qt)return bn(i),null}else 2*Xt()-m.renderingStartTime>Vs&&o!==1073741824&&(i.flags|=128,c=!0,jo(m,!1),i.lanes=4194304);m.isBackwards?(A.sibling=i.child,i.child=A):(o=m.last,o!==null?o.sibling=A:i.child=A,m.last=A)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Xt(),i.sibling=null,o=Qt.current,Gt(Qt,c?o&1|2:o&1),i):(bn(i),null);case 22:case 23:return Du(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ni&1073741824)!==0&&(bn(i),i.subtreeFlags&6&&(i.flags|=8192)):bn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function jv(n,i){switch(Vc(i),i.tag){case 1:return Wn(i.type)&&Na(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ks(),Yt(Gn),Yt(Cn),tu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return $c(i),null;case 13:if(Yt(Qt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ns()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Yt(Qt),null;case 4:return ks(),null;case 10:return Yc(i.type._context),null;case 22:case 23:return Du(),null;case 24:return null;default:return null}}var el=!1,Pn=!1,Kv=typeof WeakSet=="function"?WeakSet:Set,qe=null;function zs(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){$t(n,i,c)}else o.current=null}function Mu(n,i,o){try{o()}catch(c){$t(n,i,c)}}var Op=!1;function Yv(n,i){if(Dc=Sa,n=md(),wc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var A=0,O=-1,K=-1,he=0,Ee=0,we=n,ye=null;t:for(;;){for(var je;we!==o||f!==0&&we.nodeType!==3||(O=A+f),we!==m||c!==0&&we.nodeType!==3||(K=A+c),we.nodeType===3&&(A+=we.nodeValue.length),(je=we.firstChild)!==null;)ye=we,we=je;for(;;){if(we===n)break t;if(ye===o&&++he===f&&(O=A),ye===m&&++Ee===c&&(K=A),(je=we.nextSibling)!==null)break;we=ye,ye=we.parentNode}we=je}o=O===-1||K===-1?null:{start:O,end:K}}else o=null}o=o||{start:0,end:0}}else o=null;for(Nc={focusedElem:n,selectionRange:o},Sa=!1,qe=i;qe!==null;)if(i=qe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,qe=n;else for(;qe!==null;){i=qe;try{var Qe=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Qe!==null){var Je=Qe.memoizedProps,rn=Qe.memoizedState,re=i.stateNode,Z=re.getSnapshotBeforeUpdate(i.elementType===i.type?Je:Ti(i.type,Je),rn);re.__reactInternalSnapshotBeforeUpdate=Z}break;case 3:var le=i.stateNode.containerInfo;le.nodeType===1?le.textContent="":le.nodeType===9&&le.documentElement&&le.removeChild(le.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ie){$t(i,i.return,Ie)}if(n=i.sibling,n!==null){n.return=i.return,qe=n;break}qe=i.return}return Qe=Op,Op=!1,Qe}function Ko(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var m=f.destroy;f.destroy=void 0,m!==void 0&&Mu(i,o,m)}f=f.next}while(f!==c)}}function tl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function yu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function kp(n){var i=n.alternate;i!==null&&(n.alternate=null,kp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[ki],delete i[Fo],delete i[kc],delete i[Pv],delete i[Lv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Bp(n){return n.tag===5||n.tag===3||n.tag===4}function zp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Bp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Eu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Ia));else if(c!==4&&(n=n.child,n!==null))for(Eu(n,i,o),n=n.sibling;n!==null;)Eu(n,i,o),n=n.sibling}function Au(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Au(n,i,o),n=n.sibling;n!==null;)Au(n,i,o),n=n.sibling}var En=null,Ci=!1;function br(n,i,o){for(o=o.child;o!==null;)Hp(n,i,o),o=o.sibling}function Hp(n,i,o){if(Ue&&typeof Ue.onCommitFiberUnmount=="function")try{Ue.onCommitFiberUnmount(se,o)}catch{}switch(o.tag){case 5:Pn||zs(o,i);case 6:var c=En,f=Ci;En=null,br(n,i,o),En=c,Ci=f,En!==null&&(Ci?(n=En,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):En.removeChild(o.stateNode));break;case 18:En!==null&&(Ci?(n=En,o=o.stateNode,n.nodeType===8?Oc(n.parentNode,o):n.nodeType===1&&Oc(n,o),wo(n)):Oc(En,o.stateNode));break;case 4:c=En,f=Ci,En=o.stateNode.containerInfo,Ci=!0,br(n,i,o),En=c,Ci=f;break;case 0:case 11:case 14:case 15:if(!Pn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var m=f,A=m.destroy;m=m.tag,A!==void 0&&((m&2)!==0||(m&4)!==0)&&Mu(o,i,A),f=f.next}while(f!==c)}br(n,i,o);break;case 1:if(!Pn&&(zs(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(O){$t(o,i,O)}br(n,i,o);break;case 21:br(n,i,o);break;case 22:o.mode&1?(Pn=(c=Pn)||o.memoizedState!==null,br(n,i,o),Pn=c):br(n,i,o);break;default:br(n,i,o)}}function Vp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new Kv),i.forEach(function(c){var f=i_.bind(null,n,c);o.has(c)||(o.add(c),c.then(f,f))})}}function Ri(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c];try{var m=n,A=i,O=A;e:for(;O!==null;){switch(O.tag){case 5:En=O.stateNode,Ci=!1;break e;case 3:En=O.stateNode.containerInfo,Ci=!0;break e;case 4:En=O.stateNode.containerInfo,Ci=!0;break e}O=O.return}if(En===null)throw Error(t(160));Hp(m,A,f),En=null,Ci=!1;var K=f.alternate;K!==null&&(K.return=null),f.return=null}catch(he){$t(f,i,he)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Gp(i,n),i=i.sibling}function Gp(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ri(i,n),Hi(n),c&4){try{Ko(3,n,n.return),tl(3,n)}catch(Je){$t(n,n.return,Je)}try{Ko(5,n,n.return)}catch(Je){$t(n,n.return,Je)}}break;case 1:Ri(i,n),Hi(n),c&512&&o!==null&&zs(o,o.return);break;case 5:if(Ri(i,n),Hi(n),c&512&&o!==null&&zs(o,o.return),n.flags&32){var f=n.stateNode;try{Se(f,"")}catch(Je){$t(n,n.return,Je)}}if(c&4&&(f=n.stateNode,f!=null)){var m=n.memoizedProps,A=o!==null?o.memoizedProps:m,O=n.type,K=n.updateQueue;if(n.updateQueue=null,K!==null)try{O==="input"&&m.type==="radio"&&m.name!=null&&ft(f,m),Le(O,A);var he=Le(O,m);for(A=0;A<K.length;A+=2){var Ee=K[A],we=K[A+1];Ee==="style"?pe(f,we):Ee==="dangerouslySetInnerHTML"?ge(f,we):Ee==="children"?Se(f,we):I(f,Ee,we,he)}switch(O){case"input":wt(f,m);break;case"textarea":Fe(f,m);break;case"select":var ye=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var je=m.value;je!=null?xt(f,!!m.multiple,je,!1):ye!==!!m.multiple&&(m.defaultValue!=null?xt(f,!!m.multiple,m.defaultValue,!0):xt(f,!!m.multiple,m.multiple?[]:"",!1))}f[Fo]=m}catch(Je){$t(n,n.return,Je)}}break;case 6:if(Ri(i,n),Hi(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,m=n.memoizedProps;try{f.nodeValue=m}catch(Je){$t(n,n.return,Je)}}break;case 3:if(Ri(i,n),Hi(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{wo(i.containerInfo)}catch(Je){$t(n,n.return,Je)}break;case 4:Ri(i,n),Hi(n);break;case 13:Ri(i,n),Hi(n),f=n.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(Cu=Xt())),c&4&&Vp(n);break;case 22:if(Ee=o!==null&&o.memoizedState!==null,n.mode&1?(Pn=(he=Pn)||Ee,Ri(i,n),Pn=he):Ri(i,n),Hi(n),c&8192){if(he=n.memoizedState!==null,(n.stateNode.isHidden=he)&&!Ee&&(n.mode&1)!==0)for(qe=n,Ee=n.child;Ee!==null;){for(we=qe=Ee;qe!==null;){switch(ye=qe,je=ye.child,ye.tag){case 0:case 11:case 14:case 15:Ko(4,ye,ye.return);break;case 1:zs(ye,ye.return);var Qe=ye.stateNode;if(typeof Qe.componentWillUnmount=="function"){c=ye,o=ye.return;try{i=c,Qe.props=i.memoizedProps,Qe.state=i.memoizedState,Qe.componentWillUnmount()}catch(Je){$t(c,o,Je)}}break;case 5:zs(ye,ye.return);break;case 22:if(ye.memoizedState!==null){jp(we);continue}}je!==null?(je.return=ye,qe=je):jp(we)}Ee=Ee.sibling}e:for(Ee=null,we=n;;){if(we.tag===5){if(Ee===null){Ee=we;try{f=we.stateNode,he?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(O=we.stateNode,K=we.memoizedProps.style,A=K!=null&&K.hasOwnProperty("display")?K.display:null,O.style.display=de("display",A))}catch(Je){$t(n,n.return,Je)}}}else if(we.tag===6){if(Ee===null)try{we.stateNode.nodeValue=he?"":we.memoizedProps}catch(Je){$t(n,n.return,Je)}}else if((we.tag!==22&&we.tag!==23||we.memoizedState===null||we===n)&&we.child!==null){we.child.return=we,we=we.child;continue}if(we===n)break e;for(;we.sibling===null;){if(we.return===null||we.return===n)break e;Ee===we&&(Ee=null),we=we.return}Ee===we&&(Ee=null),we.sibling.return=we.return,we=we.sibling}}break;case 19:Ri(i,n),Hi(n),c&4&&Vp(n);break;case 21:break;default:Ri(i,n),Hi(n)}}function Hi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(Bp(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(Se(f,""),c.flags&=-33);var m=zp(n);Au(n,m,f);break;case 3:case 4:var A=c.stateNode.containerInfo,O=zp(n);Eu(n,O,A);break;default:throw Error(t(161))}}catch(K){$t(n,n.return,K)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function qv(n,i,o){qe=n,Wp(n)}function Wp(n,i,o){for(var c=(n.mode&1)!==0;qe!==null;){var f=qe,m=f.child;if(f.tag===22&&c){var A=f.memoizedState!==null||el;if(!A){var O=f.alternate,K=O!==null&&O.memoizedState!==null||Pn;O=el;var he=Pn;if(el=A,(Pn=K)&&!he)for(qe=f;qe!==null;)A=qe,K=A.child,A.tag===22&&A.memoizedState!==null?Kp(f):K!==null?(K.return=A,qe=K):Kp(f);for(;m!==null;)qe=m,Wp(m),m=m.sibling;qe=f,el=O,Pn=he}Xp(n)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,qe=m):Xp(n)}}function Xp(n){for(;qe!==null;){var i=qe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Pn||tl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Pn)if(o===null)c.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:Ti(i.type,o.memoizedProps);c.componentDidUpdate(f,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&jd(i,m,c);break;case 3:var A=i.updateQueue;if(A!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}jd(i,A,o)}break;case 5:var O=i.stateNode;if(o===null&&i.flags&4){o=O;var K=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":K.autoFocus&&o.focus();break;case"img":K.src&&(o.src=K.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var he=i.alternate;if(he!==null){var Ee=he.memoizedState;if(Ee!==null){var we=Ee.dehydrated;we!==null&&wo(we)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Pn||i.flags&512&&yu(i)}catch(ye){$t(i,i.return,ye)}}if(i===n){qe=null;break}if(o=i.sibling,o!==null){o.return=i.return,qe=o;break}qe=i.return}}function jp(n){for(;qe!==null;){var i=qe;if(i===n){qe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,qe=o;break}qe=i.return}}function Kp(n){for(;qe!==null;){var i=qe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{tl(4,i)}catch(K){$t(i,o,K)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(K){$t(i,f,K)}}var m=i.return;try{yu(i)}catch(K){$t(i,m,K)}break;case 5:var A=i.return;try{yu(i)}catch(K){$t(i,A,K)}}}catch(K){$t(i,i.return,K)}if(i===n){qe=null;break}var O=i.sibling;if(O!==null){O.return=i.return,qe=O;break}qe=i.return}}var Zv=Math.ceil,nl=b.ReactCurrentDispatcher,wu=b.ReactCurrentOwner,hi=b.ReactCurrentBatchConfig,bt=0,_n=null,cn=null,An=0,ni=0,Hs=Ar(0),hn=0,Yo=null,is=0,il=0,Tu=0,qo=null,jn=null,Cu=0,Vs=1/0,sr=null,rl=!1,Ru=null,Pr=null,sl=!1,Lr=null,ol=0,Zo=0,bu=null,al=-1,ll=0;function Bn(){return(bt&6)!==0?Xt():al!==-1?al:al=Xt()}function Ir(n){return(n.mode&1)===0?1:(bt&2)!==0&&An!==0?An&-An:Dv.transition!==null?(ll===0&&(ll=Xe()),ll):(n=dt,n!==0||(n=window.event,n=n===void 0?16:qh(n.type)),n)}function bi(n,i,o,c){if(50<Zo)throw Zo=0,bu=null,Error(t(185));gt(n,o,c),((bt&2)===0||n!==_n)&&(n===_n&&((bt&2)===0&&(il|=o),hn===4&&Dr(n,An)),Kn(n,c),o===1&&bt===0&&(i.mode&1)===0&&(Vs=Xt()+500,Fa&&Tr()))}function Kn(n,i){var o=n.callbackNode;Ft(n,i);var c=Ut(n,n===_n?An:0);if(c===0)o!==null&&Yr(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&Yr(o),i===1)n.tag===0?Iv(qp.bind(null,n)):Nd(qp.bind(null,n)),Rv(function(){(bt&6)===0&&Tr()}),o=null;else{switch(Jn(c)){case 1:o=tn;break;case 4:o=T;break;case 16:o=J;break;case 536870912:o=oe;break;default:o=J}o=im(o,Yp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function Yp(n,i){if(al=-1,ll=0,(bt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Gs()&&n.callbackNode!==o)return null;var c=Ut(n,n===_n?An:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=cl(n,c);else{i=c;var f=bt;bt|=2;var m=Qp();(_n!==n||An!==i)&&(sr=null,Vs=Xt()+500,ss(n,i));do try{$v();break}catch(O){Zp(n,O)}while(!0);Kc(),nl.current=m,bt=f,cn!==null?i=0:(_n=null,An=0,i=hn)}if(i!==0){if(i===2&&(f=Zt(n),f!==0&&(c=f,i=Pu(n,f))),i===1)throw o=Yo,ss(n,0),Dr(n,c),Kn(n,Xt()),o;if(i===6)Dr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!Qv(f)&&(i=cl(n,c),i===2&&(m=Zt(n),m!==0&&(c=m,i=Pu(n,m))),i===1))throw o=Yo,ss(n,0),Dr(n,c),Kn(n,Xt()),o;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:os(n,jn,sr);break;case 3:if(Dr(n,c),(c&130023424)===c&&(i=Cu+500-Xt(),10<i)){if(Ut(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){Bn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Fc(os.bind(null,n,jn,sr),i);break}os(n,jn,sr);break;case 4:if(Dr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var A=31-Te(c);m=1<<A,A=i[A],A>f&&(f=A),c&=~m}if(c=f,c=Xt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Zv(c/1960))-c,10<c){n.timeoutHandle=Fc(os.bind(null,n,jn,sr),c);break}os(n,jn,sr);break;case 5:os(n,jn,sr);break;default:throw Error(t(329))}}}return Kn(n,Xt()),n.callbackNode===o?Yp.bind(null,n):null}function Pu(n,i){var o=qo;return n.current.memoizedState.isDehydrated&&(ss(n,i).flags|=256),n=cl(n,i),n!==2&&(i=jn,jn=o,i!==null&&Lu(i)),n}function Lu(n){jn===null?jn=n:jn.push.apply(jn,n)}function Qv(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var f=o[c],m=f.getSnapshot;f=f.value;try{if(!Ai(m(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Dr(n,i){for(i&=~Tu,i&=~il,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-Te(i),c=1<<o;n[o]=-1,i&=~c}}function qp(n){if((bt&6)!==0)throw Error(t(327));Gs();var i=Ut(n,0);if((i&1)===0)return Kn(n,Xt()),null;var o=cl(n,i);if(n.tag!==0&&o===2){var c=Zt(n);c!==0&&(i=c,o=Pu(n,c))}if(o===1)throw o=Yo,ss(n,0),Dr(n,i),Kn(n,Xt()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,os(n,jn,sr),Kn(n,Xt()),null}function Iu(n,i){var o=bt;bt|=1;try{return n(i)}finally{bt=o,bt===0&&(Vs=Xt()+500,Fa&&Tr())}}function rs(n){Lr!==null&&Lr.tag===0&&(bt&6)===0&&Gs();var i=bt;bt|=1;var o=hi.transition,c=dt;try{if(hi.transition=null,dt=1,n)return n()}finally{dt=c,hi.transition=o,bt=i,(bt&6)===0&&Tr()}}function Du(){ni=Hs.current,Yt(Hs)}function ss(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,Cv(o)),cn!==null)for(o=cn.return;o!==null;){var c=o;switch(Vc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Na();break;case 3:ks(),Yt(Gn),Yt(Cn),tu();break;case 5:$c(c);break;case 4:ks();break;case 13:Yt(Qt);break;case 19:Yt(Qt);break;case 10:Yc(c.type._context);break;case 22:case 23:Du()}o=o.return}if(_n=n,cn=n=Nr(n.current,null),An=ni=i,hn=0,Yo=null,Tu=il=is=0,jn=qo=null,es!==null){for(i=0;i<es.length;i++)if(o=es[i],c=o.interleaved,c!==null){o.interleaved=null;var f=c.next,m=o.pending;if(m!==null){var A=m.next;m.next=f,c.next=A}o.pending=c}es=null}return n}function Zp(n,i){do{var o=cn;try{if(Kc(),ja.current=Za,Ka){for(var c=Jt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Ka=!1}if(ns=0,vn=fn=Jt=null,Vo=!1,Go=0,wu.current=null,o===null||o.return===null){hn=1,Yo=i,cn=null;break}e:{var m=n,A=o.return,O=o,K=i;if(i=An,O.flags|=32768,K!==null&&typeof K=="object"&&typeof K.then=="function"){var he=K,Ee=O,we=Ee.tag;if((Ee.mode&1)===0&&(we===0||we===11||we===15)){var ye=Ee.alternate;ye?(Ee.updateQueue=ye.updateQueue,Ee.memoizedState=ye.memoizedState,Ee.lanes=ye.lanes):(Ee.updateQueue=null,Ee.memoizedState=null)}var je=Mp(A);if(je!==null){je.flags&=-257,yp(je,A,O,m,i),je.mode&1&&Sp(m,he,i),i=je,K=he;var Qe=i.updateQueue;if(Qe===null){var Je=new Set;Je.add(K),i.updateQueue=Je}else Qe.add(K);break e}else{if((i&1)===0){Sp(m,he,i),Nu();break e}K=Error(t(426))}}else if(qt&&O.mode&1){var rn=Mp(A);if(rn!==null){(rn.flags&65536)===0&&(rn.flags|=256),yp(rn,A,O,m,i),Xc(Bs(K,O));break e}}m=K=Bs(K,O),hn!==4&&(hn=2),qo===null?qo=[m]:qo.push(m),m=A;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var re=_p(m,K,i);Xd(m,re);break e;case 1:O=K;var Z=m.type,le=m.stateNode;if((m.flags&128)===0&&(typeof Z.getDerivedStateFromError=="function"||le!==null&&typeof le.componentDidCatch=="function"&&(Pr===null||!Pr.has(le)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ie=xp(m,O,i);Xd(m,Ie);break e}}m=m.return}while(m!==null)}$p(o)}catch(et){i=et,cn===o&&o!==null&&(cn=o=o.return);continue}break}while(!0)}function Qp(){var n=nl.current;return nl.current=Za,n===null?Za:n}function Nu(){(hn===0||hn===3||hn===2)&&(hn=4),_n===null||(is&268435455)===0&&(il&268435455)===0||Dr(_n,An)}function cl(n,i){var o=bt;bt|=2;var c=Qp();(_n!==n||An!==i)&&(sr=null,ss(n,i));do try{Jv();break}catch(f){Zp(n,f)}while(!0);if(Kc(),bt=o,nl.current=c,cn!==null)throw Error(t(261));return _n=null,An=0,hn}function Jv(){for(;cn!==null;)Jp(cn)}function $v(){for(;cn!==null&&!oi();)Jp(cn)}function Jp(n){var i=nm(n.alternate,n,ni);n.memoizedProps=n.pendingProps,i===null?$p(n):cn=i,wu.current=null}function $p(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=Xv(o,i,ni),o!==null){cn=o;return}}else{if(o=jv(o,i),o!==null){o.flags&=32767,cn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{hn=6,cn=null;return}}if(i=i.sibling,i!==null){cn=i;return}cn=i=n}while(i!==null);hn===0&&(hn=5)}function os(n,i,o){var c=dt,f=hi.transition;try{hi.transition=null,dt=1,e_(n,i,o,c)}finally{hi.transition=f,dt=c}return null}function e_(n,i,o,c){do Gs();while(Lr!==null);if((bt&6)!==0)throw Error(t(327));o=n.finishedWork;var f=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(gn(n,m),n===_n&&(cn=_n=null,An=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||sl||(sl=!0,im(J,function(){return Gs(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=hi.transition,hi.transition=null;var A=dt;dt=1;var O=bt;bt|=4,wu.current=null,Yv(n,o),Gp(o,n),Sv(Nc),Sa=!!Dc,Nc=Dc=null,n.current=o,qv(o),ai(),bt=O,dt=A,hi.transition=m}else n.current=o;if(sl&&(sl=!1,Lr=n,ol=f),m=n.pendingLanes,m===0&&(Pr=null),ke(o.stateNode),Kn(n,Xt()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)f=i[o],c(f.value,{componentStack:f.stack,digest:f.digest});if(rl)throw rl=!1,n=Ru,Ru=null,n;return(ol&1)!==0&&n.tag!==0&&Gs(),m=n.pendingLanes,(m&1)!==0?n===bu?Zo++:(Zo=0,bu=n):Zo=0,Tr(),null}function Gs(){if(Lr!==null){var n=Jn(ol),i=hi.transition,o=dt;try{if(hi.transition=null,dt=16>n?16:n,Lr===null)var c=!1;else{if(n=Lr,Lr=null,ol=0,(bt&6)!==0)throw Error(t(331));var f=bt;for(bt|=4,qe=n.current;qe!==null;){var m=qe,A=m.child;if((qe.flags&16)!==0){var O=m.deletions;if(O!==null){for(var K=0;K<O.length;K++){var he=O[K];for(qe=he;qe!==null;){var Ee=qe;switch(Ee.tag){case 0:case 11:case 15:Ko(8,Ee,m)}var we=Ee.child;if(we!==null)we.return=Ee,qe=we;else for(;qe!==null;){Ee=qe;var ye=Ee.sibling,je=Ee.return;if(kp(Ee),Ee===he){qe=null;break}if(ye!==null){ye.return=je,qe=ye;break}qe=je}}}var Qe=m.alternate;if(Qe!==null){var Je=Qe.child;if(Je!==null){Qe.child=null;do{var rn=Je.sibling;Je.sibling=null,Je=rn}while(Je!==null)}}qe=m}}if((m.subtreeFlags&2064)!==0&&A!==null)A.return=m,qe=A;else e:for(;qe!==null;){if(m=qe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Ko(9,m,m.return)}var re=m.sibling;if(re!==null){re.return=m.return,qe=re;break e}qe=m.return}}var Z=n.current;for(qe=Z;qe!==null;){A=qe;var le=A.child;if((A.subtreeFlags&2064)!==0&&le!==null)le.return=A,qe=le;else e:for(A=Z;qe!==null;){if(O=qe,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:tl(9,O)}}catch(et){$t(O,O.return,et)}if(O===A){qe=null;break e}var Ie=O.sibling;if(Ie!==null){Ie.return=O.return,qe=Ie;break e}qe=O.return}}if(bt=f,Tr(),Ue&&typeof Ue.onPostCommitFiberRoot=="function")try{Ue.onPostCommitFiberRoot(se,n)}catch{}c=!0}return c}finally{dt=o,hi.transition=i}}return!1}function em(n,i,o){i=Bs(o,i),i=_p(n,i,1),n=Rr(n,i,1),i=Bn(),n!==null&&(gt(n,1,i),Kn(n,i))}function $t(n,i,o){if(n.tag===3)em(n,n,o);else for(;i!==null;){if(i.tag===3){em(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Pr===null||!Pr.has(c))){n=Bs(o,n),n=xp(i,n,1),i=Rr(i,n,1),n=Bn(),i!==null&&(gt(i,1,n),Kn(i,n));break}}i=i.return}}function t_(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=Bn(),n.pingedLanes|=n.suspendedLanes&o,_n===n&&(An&o)===o&&(hn===4||hn===3&&(An&130023424)===An&&500>Xt()-Cu?ss(n,0):Tu|=o),Kn(n,i)}function tm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ze,Ze<<=1,(Ze&130023424)===0&&(Ze=4194304)));var o=Bn();n=nr(n,i),n!==null&&(gt(n,i,o),Kn(n,o))}function n_(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),tm(n,o)}function i_(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),tm(n,o)}var nm;nm=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Gn.current)Xn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Xn=!1,Wv(n,i,o);Xn=(n.flags&131072)!==0}else Xn=!1,qt&&(i.flags&1048576)!==0&&Ud(i,ka,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;$a(n,i),n=i.pendingProps;var f=Ls(i,Cn.current);Os(i,o),f=ru(null,i,c,n,f,o);var m=su();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Wn(c)?(m=!0,Ua(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Qc(i),f.updater=Qa,i.stateNode=f,f._reactInternals=i,fu(i,c,n,o),i=mu(null,i,c,!0,m,o)):(i.tag=0,qt&&m&&Hc(i),kn(null,i,f,o),i=i.child),i;case 16:c=i.elementType;e:{switch($a(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=s_(c),n=Ti(c,n),f){case 0:i=pu(null,i,c,n,o);break e;case 1:i=Rp(null,i,c,n,o);break e;case 11:i=Ep(null,i,c,n,o);break e;case 14:i=Ap(null,i,c,Ti(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Ti(c,f),pu(n,i,c,f,o);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Ti(c,f),Rp(n,i,c,f,o);case 3:e:{if(bp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,f=m.element,Wd(n,i),Wa(i,c,null,o);var A=i.memoizedState;if(c=A.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=Bs(Error(t(423)),i),i=Pp(n,i,c,o,f);break e}else if(c!==f){f=Bs(Error(t(424)),i),i=Pp(n,i,c,o,f);break e}else for(ti=Er(i.stateNode.containerInfo.firstChild),ei=i,qt=!0,wi=null,o=Vd(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ns(),c===f){i=rr(n,i,o);break e}kn(n,i,c,o)}i=i.child}return i;case 5:return Kd(i),n===null&&Wc(i),c=i.type,f=i.pendingProps,m=n!==null?n.memoizedProps:null,A=f.children,Uc(c,f)?A=null:m!==null&&Uc(c,m)&&(i.flags|=32),Cp(n,i),kn(n,i,A,o),i.child;case 6:return n===null&&Wc(i),null;case 13:return Lp(n,i,o);case 4:return Jc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Us(i,null,c,o):kn(n,i,c,o),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Ti(c,f),Ep(n,i,c,f,o);case 7:return kn(n,i,i.pendingProps,o),i.child;case 8:return kn(n,i,i.pendingProps.children,o),i.child;case 12:return kn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,m=i.memoizedProps,A=f.value,Gt(Ha,c._currentValue),c._currentValue=A,m!==null)if(Ai(m.value,A)){if(m.children===f.children&&!Gn.current){i=rr(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var O=m.dependencies;if(O!==null){A=m.child;for(var K=O.firstContext;K!==null;){if(K.context===c){if(m.tag===1){K=ir(-1,o&-o),K.tag=2;var he=m.updateQueue;if(he!==null){he=he.shared;var Ee=he.pending;Ee===null?K.next=K:(K.next=Ee.next,Ee.next=K),he.pending=K}}m.lanes|=o,K=m.alternate,K!==null&&(K.lanes|=o),qc(m.return,o,i),O.lanes|=o;break}K=K.next}}else if(m.tag===10)A=m.type===i.type?null:m.child;else if(m.tag===18){if(A=m.return,A===null)throw Error(t(341));A.lanes|=o,O=A.alternate,O!==null&&(O.lanes|=o),qc(A,o,i),A=m.sibling}else A=m.child;if(A!==null)A.return=m;else for(A=m;A!==null;){if(A===i){A=null;break}if(m=A.sibling,m!==null){m.return=A.return,A=m;break}A=A.return}m=A}kn(n,i,f.children,o),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Os(i,o),f=ui(f),c=c(f),i.flags|=1,kn(n,i,c,o),i.child;case 14:return c=i.type,f=Ti(c,i.pendingProps),f=Ti(c.type,f),Ap(n,i,c,f,o);case 15:return wp(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Ti(c,f),$a(n,i),i.tag=1,Wn(c)?(n=!0,Ua(i)):n=!1,Os(i,o),gp(i,c,f),fu(i,c,f,o),mu(null,i,c,!0,n,o);case 19:return Dp(n,i,o);case 22:return Tp(n,i,o)}throw Error(t(156,i.tag))};function im(n,i){return Kr(n,i)}function r_(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(n,i,o,c){return new r_(n,i,o,c)}function Uu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function s_(n){if(typeof n=="function")return Uu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===z)return 11;if(n===G)return 14}return 2}function Nr(n,i){var o=n.alternate;return o===null?(o=di(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function ul(n,i,o,c,f,m){var A=2;if(c=n,typeof n=="function")Uu(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case k:return as(o.children,f,m,i);case w:A=8,f|=8;break;case N:return n=di(12,o,i,f|2),n.elementType=N,n.lanes=m,n;case Q:return n=di(13,o,i,f),n.elementType=Q,n.lanes=m,n;case te:return n=di(19,o,i,f),n.elementType=te,n.lanes=m,n;case W:return fl(o,f,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case q:A=10;break e;case B:A=9;break e;case z:A=11;break e;case G:A=14;break e;case $:A=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=di(A,o,i,f),i.elementType=n,i.type=c,i.lanes=m,i}function as(n,i,o,c){return n=di(7,n,c,i),n.lanes=o,n}function fl(n,i,o,c){return n=di(22,n,c,i),n.elementType=W,n.lanes=o,n.stateNode={isHidden:!1},n}function Fu(n,i,o){return n=di(6,n,null,i),n.lanes=o,n}function Ou(n,i,o){return i=di(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function o_(n,i,o,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nn(0),this.expirationTimes=nn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nn(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function ku(n,i,o,c,f,m,A,O,K){return n=new o_(n,i,o,O,K),i===1?(i=1,m===!0&&(i|=8)):i=0,m=di(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qc(m),n}function a_(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function rm(n){if(!n)return wr;n=n._reactInternals;e:{if(ln(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Wn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Wn(o))return Id(n,o,i)}return i}function sm(n,i,o,c,f,m,A,O,K){return n=ku(o,c,!0,n,f,m,A,O,K),n.context=rm(null),o=n.current,c=Bn(),f=Ir(o),m=ir(c,f),m.callback=i??null,Rr(o,m,f),n.current.lanes=f,gt(n,f,c),Kn(n,c),n}function hl(n,i,o,c){var f=i.current,m=Bn(),A=Ir(f);return o=rm(o),i.context===null?i.context=o:i.pendingContext=o,i=ir(m,A),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Rr(f,i,A),n!==null&&(bi(n,f,A,m),Ga(n,f,A)),A}function dl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function om(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Bu(n,i){om(n,i),(n=n.alternate)&&om(n,i)}function l_(){return null}var am=typeof reportError=="function"?reportError:function(n){console.error(n)};function zu(n){this._internalRoot=n}pl.prototype.render=zu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));hl(n,i,null,null)},pl.prototype.unmount=zu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;rs(function(){hl(null,n,null,null)}),i[Ji]=null}};function pl(n){this._internalRoot=n}pl.prototype.unstable_scheduleHydration=function(n){if(n){var i=zt();n={blockedOn:null,target:n,priority:i};for(var o=0;o<Sr.length&&i!==0&&i<Sr[o].priority;o++);Sr.splice(o,0,n),o===0&&Kh(n)}};function Hu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ml(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function lm(){}function c_(n,i,o,c,f){if(f){if(typeof c=="function"){var m=c;c=function(){var he=dl(A);m.call(he)}}var A=sm(i,c,n,0,null,!1,!1,"",lm);return n._reactRootContainer=A,n[Ji]=A.current,No(n.nodeType===8?n.parentNode:n),rs(),A}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var O=c;c=function(){var he=dl(K);O.call(he)}}var K=ku(n,0,!1,null,null,!1,!1,"",lm);return n._reactRootContainer=K,n[Ji]=K.current,No(n.nodeType===8?n.parentNode:n),rs(function(){hl(i,K,o,c)}),K}function gl(n,i,o,c,f){var m=o._reactRootContainer;if(m){var A=m;if(typeof f=="function"){var O=f;f=function(){var K=dl(A);O.call(K)}}hl(i,A,n,f)}else A=c_(o,i,n,f,c);return dl(A)}kt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=Mt(i.pendingLanes);o!==0&&(yn(i,o|1),Kn(i,Xt()),(bt&6)===0&&(Vs=Xt()+500,Tr()))}break;case 13:rs(function(){var c=nr(n,1);if(c!==null){var f=Bn();bi(c,n,1,f)}}),Bu(n,1)}},jt=function(n){if(n.tag===13){var i=nr(n,134217728);if(i!==null){var o=Bn();bi(i,n,134217728,o)}Bu(n,134217728)}},yi=function(n){if(n.tag===13){var i=Ir(n),o=nr(n,i);if(o!==null){var c=Bn();bi(o,n,i,c)}Bu(n,i)}},zt=function(){return dt},Ei=function(n,i){var o=dt;try{return dt=n,i()}finally{dt=o}},lt=function(n,i,o){switch(i){case"input":if(wt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var f=Da(c);if(!f)throw Error(t(90));At(c),wt(c,f)}}}break;case"textarea":Fe(n,o);break;case"select":i=o.value,i!=null&&xt(n,!!o.multiple,i,!1)}},Ne=Iu,Me=rs;var u_={usingClientEntryPoint:!1,Events:[Oo,bs,Da,me,Ge,Iu]},Qo={findFiberByHostInstance:Zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},f_={bundleType:Qo.bundleType,version:Qo.version,rendererPackageName:Qo.rendererPackageName,rendererConfig:Qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Fn(n),n===null?null:n.stateNode},findFiberByHostInstance:Qo.findFiberByHostInstance||l_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{se=vl.inject(f_),Ue=vl}catch{}}return Yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u_,Yn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hu(i))throw Error(t(200));return a_(n,i,null,o)},Yn.createRoot=function(n,i){if(!Hu(n))throw Error(t(299));var o=!1,c="",f=am;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=ku(n,1,!1,null,null,o,!1,c,f),n[Ji]=i.current,No(n.nodeType===8?n.parentNode:n),new zu(i)},Yn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Fn(i),n=n===null?null:n.stateNode,n},Yn.flushSync=function(n){return rs(n)},Yn.hydrate=function(n,i,o){if(!ml(i))throw Error(t(200));return gl(null,n,i,!0,o)},Yn.hydrateRoot=function(n,i,o){if(!Hu(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,f=!1,m="",A=am;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(A=o.onRecoverableError)),i=sm(i,null,n,1,o??null,f,!1,m,A),n[Ji]=i.current,No(n),c)for(n=0;n<c.length;n++)o=c[n],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new pl(i)},Yn.render=function(n,i,o){if(!ml(i))throw Error(t(200));return gl(null,n,i,!1,o)},Yn.unmountComponentAtNode=function(n){if(!ml(n))throw Error(t(40));return n._reactRootContainer?(rs(function(){gl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ji]=null})}),!0):!1},Yn.unstable_batchedUpdates=Iu,Yn.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!ml(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return gl(n,i,o,!1,c)},Yn.version="18.3.1-next-f1338f8080-20240426",Yn}var gm;function M_(){if(gm)return Wu.exports;gm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Wu.exports=S_(),Wu.exports}var vm;function y_(){if(vm)return _l;vm=1;var s=M_();return _l.createRoot=s.createRoot,_l.hydrateRoot=s.hydrateRoot,_l}var E_=y_();const _m={field:{count:1400,size:1,drift:1},look:{trail:.35,grain:.5,glow:1},form:{circle:0},hands:{reach:1,clap:1},sound:{beat:1,sparks:1,bass:1}};function A_(s,e){let t=s;for(const r of e.split(".")){if(typeof t!="object"||t===null)return;t=t[r]}return typeof t=="number"?t:void 0}function Ch(s,e){const t=structuredClone(s);for(const[r,a]of Object.entries(e)){if(!Number.isFinite(a)||A_(s,r)===void 0)continue;const l=r.split("."),u=l.pop();let h=t;for(const p of l)h=h[p];h[u]=a}return t}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Rh="184",w_=0,xm=1,T_=2,jl=1,C_=2,la=3,Xr=0,qn=1,Ni=2,hr=0,co=1,Sm=2,Mm=3,ym=4,R_=5,ds=100,b_=101,P_=102,L_=103,I_=104,D_=200,N_=201,U_=202,F_=203,Ff=204,Of=205,O_=206,k_=207,B_=208,z_=209,H_=210,V_=211,G_=212,W_=213,X_=214,kf=0,Bf=1,zf=2,fo=3,Hf=4,Vf=5,Gf=6,Wf=7,j0=0,j_=1,K_=2,ji=0,K0=1,Y0=2,q0=3,Z0=4,Q0=5,J0=6,$0=7,eg=300,vs=301,ho=302,Ku=303,Yu=304,cc=306,$l=1e3,fr=1001,Xf=1002,dn=1003,Y_=1004,xl=1005,Mn=1006,qu=1007,ms=1008,vi=1009,tg=1010,ng=1011,da=1012,bh=1013,qi=1014,Fi=1015,mr=1016,Ph=1017,Lh=1018,pa=1020,ig=35902,rg=35899,sg=1021,og=1022,_i=1023,gr=1026,gs=1027,ag=1028,Ih=1029,_s=1030,Dh=1031,Nh=1033,Kl=33776,Yl=33777,ql=33778,Zl=33779,jf=35840,Kf=35841,Yf=35842,qf=35843,Zf=36196,Qf=37492,Jf=37496,$f=37488,eh=37489,ec=37490,th=37491,nh=37808,ih=37809,rh=37810,sh=37811,oh=37812,ah=37813,lh=37814,ch=37815,uh=37816,fh=37817,hh=37818,dh=37819,ph=37820,mh=37821,gh=36492,vh=36494,_h=36495,xh=36283,Sh=36284,tc=36285,Mh=36286,q_=3200,Em=0,Z_=1,Gr="",mi="srgb",nc="srgb-linear",ic="linear",Ht="srgb",Ws=7680,Am=519,Q_=512,J_=513,$_=514,Uh=515,ex=516,tx=517,Fh=518,nx=519,wm=35044,Tm="300 es",Xi=2e3,rc=2001;function ix(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function sc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function rx(){const s=sc("canvas");return s.style.display="block",s}const Cm={};function Rm(...s){const e="THREE."+s.shift();console.log(e,...s)}function lg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ct(...s){s=lg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Pt(...s){s=lg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function yh(...s){const e=s.join(" ");e in Cm||(Cm[e]=!0,ct(...s))}function sx(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const ox={[kf]:Bf,[zf]:Gf,[Hf]:Wf,[fo]:Vf,[Bf]:kf,[Gf]:zf,[Wf]:Hf,[Vf]:fo};class Ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let bm=1234567;const fa=Math.PI/180,ma=180/Math.PI;function go(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]).toLowerCase()}function Et(s,e,t){return Math.max(e,Math.min(t,s))}function Oh(s,e){return(s%e+e)%e}function ax(s,e,t,r,a){return r+(s-e)*(a-r)/(t-e)}function lx(s,e,t){return s!==e?(t-s)/(e-s):0}function ha(s,e,t){return(1-t)*s+t*e}function cx(s,e,t,r){return ha(s,e,1-Math.exp(-t*r))}function ux(s,e=1){return e-Math.abs(Oh(s,e*2)-e)}function fx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function hx(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function dx(s,e){return s+Math.floor(Math.random()*(e-s+1))}function px(s,e){return s+Math.random()*(e-s)}function mx(s){return s*(.5-Math.random())}function gx(s){s!==void 0&&(bm=s);let e=bm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vx(s){return s*fa}function _x(s){return s*ma}function xx(s){return(s&s-1)===0&&s!==0}function Sx(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Mx(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function yx(s,e,t,r,a){const l=Math.cos,u=Math.sin,h=l(t/2),p=u(t/2),d=l((e+r)/2),v=u((e+r)/2),_=l((e-r)/2),g=u((e-r)/2),M=l((r-e)/2),E=u((r-e)/2);switch(a){case"XYX":s.set(h*v,p*_,p*g,h*d);break;case"YZY":s.set(p*g,h*v,p*_,h*d);break;case"ZXZ":s.set(p*_,p*g,h*v,h*d);break;case"XZX":s.set(h*v,p*E,p*M,h*d);break;case"YXY":s.set(p*M,h*v,p*E,h*d);break;case"ZYZ":s.set(p*E,p*M,h*v,h*d);break;default:ct("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function so(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function zn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Zu={DEG2RAD:fa,RAD2DEG:ma,generateUUID:go,clamp:Et,euclideanModulo:Oh,mapLinear:ax,inverseLerp:lx,lerp:ha,damp:cx,pingpong:ux,smoothstep:fx,smootherstep:hx,randInt:dx,randFloat:px,randFloatSpread:mx,seededRandom:gx,degToRad:vx,radToDeg:_x,isPowerOfTwo:xx,ceilPowerOfTwo:Sx,floorPowerOfTwo:Mx,setQuaternionFromProperEuler:yx,normalize:zn,denormalize:so},Hh=class Hh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*a+e.x,this.y=l*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hh.prototype.isVector2=!0;let Nt=Hh;class dr{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,u,h){let p=r[a+0],d=r[a+1],v=r[a+2],_=r[a+3],g=l[u+0],M=l[u+1],E=l[u+2],C=l[u+3];if(_!==C||p!==g||d!==M||v!==E){let x=p*g+d*M+v*E+_*C;x<0&&(g=-g,M=-M,E=-E,C=-C,x=-x);let S=1-h;if(x<.9995){const R=Math.acos(x),I=Math.sin(R);S=Math.sin(S*R)/I,h=Math.sin(h*R)/I,p=p*S+g*h,d=d*S+M*h,v=v*S+E*h,_=_*S+C*h}else{p=p*S+g*h,d=d*S+M*h,v=v*S+E*h,_=_*S+C*h;const R=1/Math.sqrt(p*p+d*d+v*v+_*_);p*=R,d*=R,v*=R,_*=R}}e[t]=p,e[t+1]=d,e[t+2]=v,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,a,l,u){const h=r[a],p=r[a+1],d=r[a+2],v=r[a+3],_=l[u],g=l[u+1],M=l[u+2],E=l[u+3];return e[t]=h*E+v*_+p*M-d*g,e[t+1]=p*E+v*g+d*_-h*M,e[t+2]=d*E+v*M+h*g-p*_,e[t+3]=v*E-h*_-p*g-d*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,u=e._order,h=Math.cos,p=Math.sin,d=h(r/2),v=h(a/2),_=h(l/2),g=p(r/2),M=p(a/2),E=p(l/2);switch(u){case"XYZ":this._x=g*v*_+d*M*E,this._y=d*M*_-g*v*E,this._z=d*v*E+g*M*_,this._w=d*v*_-g*M*E;break;case"YXZ":this._x=g*v*_+d*M*E,this._y=d*M*_-g*v*E,this._z=d*v*E-g*M*_,this._w=d*v*_+g*M*E;break;case"ZXY":this._x=g*v*_-d*M*E,this._y=d*M*_+g*v*E,this._z=d*v*E+g*M*_,this._w=d*v*_-g*M*E;break;case"ZYX":this._x=g*v*_-d*M*E,this._y=d*M*_+g*v*E,this._z=d*v*E-g*M*_,this._w=d*v*_+g*M*E;break;case"YZX":this._x=g*v*_+d*M*E,this._y=d*M*_+g*v*E,this._z=d*v*E-g*M*_,this._w=d*v*_-g*M*E;break;case"XZY":this._x=g*v*_-d*M*E,this._y=d*M*_-g*v*E,this._z=d*v*E+g*M*_,this._w=d*v*_+g*M*E;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],u=t[1],h=t[5],p=t[9],d=t[2],v=t[6],_=t[10],g=r+h+_;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(v-p)*M,this._y=(l-d)*M,this._z=(u-a)*M}else if(r>h&&r>_){const M=2*Math.sqrt(1+r-h-_);this._w=(v-p)/M,this._x=.25*M,this._y=(a+u)/M,this._z=(l+d)/M}else if(h>_){const M=2*Math.sqrt(1+h-r-_);this._w=(l-d)/M,this._x=(a+u)/M,this._y=.25*M,this._z=(p+v)/M}else{const M=2*Math.sqrt(1+_-r-h);this._w=(u-a)/M,this._x=(l+d)/M,this._y=(p+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,u=e._w,h=t._x,p=t._y,d=t._z,v=t._w;return this._x=r*v+u*h+a*d-l*p,this._y=a*v+u*p+l*h-r*d,this._z=l*v+u*d+r*p-a*h,this._w=u*v-r*h-a*p-l*d,this._onChangeCallback(),this}slerp(e,t){let r=e._x,a=e._y,l=e._z,u=e._w,h=this.dot(e);h<0&&(r=-r,a=-a,l=-l,u=-u,h=-h);let p=1-t;if(h<.9995){const d=Math.acos(h),v=Math.sin(d);p=Math.sin(p*d)/v,t=Math.sin(t*d)/v,this._x=this._x*p+r*t,this._y=this._y*p+a*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this._onChangeCallback()}else this._x=this._x*p+r*t,this._y=this._y*p+a*t,this._z=this._z*p+l*t,this._w=this._w*p+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Vh=class Vh{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,u=e.y,h=e.z,p=e.w,d=2*(u*a-h*r),v=2*(h*t-l*a),_=2*(l*r-u*t);return this.x=t+p*d+u*_-h*v,this.y=r+p*v+h*d-l*_,this.z=a+p*_+l*v-u*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,u=t.x,h=t.y,p=t.z;return this.x=a*p-l*h,this.y=l*u-r*p,this.z=r*h-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Qu.copy(this).projectOnVector(e),this.sub(Qu)}reflect(e){return this.sub(Qu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vh.prototype.isVector3=!0;let ie=Vh;const Qu=new ie,Pm=new dr,Gh=class Gh{constructor(e,t,r,a,l,u,h,p,d){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,h,p,d)}set(e,t,r,a,l,u,h,p,d){const v=this.elements;return v[0]=e,v[1]=a,v[2]=h,v[3]=t,v[4]=l,v[5]=p,v[6]=r,v[7]=u,v[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],h=r[3],p=r[6],d=r[1],v=r[4],_=r[7],g=r[2],M=r[5],E=r[8],C=a[0],x=a[3],S=a[6],R=a[1],I=a[4],b=a[7],V=a[2],D=a[5],k=a[8];return l[0]=u*C+h*R+p*V,l[3]=u*x+h*I+p*D,l[6]=u*S+h*b+p*k,l[1]=d*C+v*R+_*V,l[4]=d*x+v*I+_*D,l[7]=d*S+v*b+_*k,l[2]=g*C+M*R+E*V,l[5]=g*x+M*I+E*D,l[8]=g*S+M*b+E*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],h=e[5],p=e[6],d=e[7],v=e[8];return t*u*v-t*h*d-r*l*v+r*h*p+a*l*d-a*u*p}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],h=e[5],p=e[6],d=e[7],v=e[8],_=v*u-h*d,g=h*p-v*l,M=d*l-u*p,E=t*_+r*g+a*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=_*C,e[1]=(a*d-v*r)*C,e[2]=(h*r-a*u)*C,e[3]=g*C,e[4]=(v*t-a*p)*C,e[5]=(a*l-h*t)*C,e[6]=M*C,e[7]=(r*p-d*t)*C,e[8]=(u*t-r*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,u,h){const p=Math.cos(l),d=Math.sin(l);return this.set(r*p,r*d,-r*(p*u+d*h)+u+e,-a*d,a*p,-a*(-d*u+p*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(Ju.makeScale(e,t)),this}rotate(e){return this.premultiply(Ju.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ju.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gh.prototype.isMatrix3=!0;let vt=Gh;const Ju=new vt,Lm=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Im=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ex(){const s={enabled:!0,workingColorSpace:nc,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ht&&(a.r=pr(a.r),a.g=pr(a.g),a.b=pr(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ht&&(a.r=uo(a.r),a.g=uo(a.g),a.b=uo(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Gr?ic:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return yh("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return yh("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[nc]:{primaries:e,whitePoint:r,transfer:ic,toXYZ:Lm,fromXYZ:Im,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:r,transfer:Ht,toXYZ:Lm,fromXYZ:Im,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),s}const Tt=Ex();function pr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function uo(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Xs;class Ax{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Xs===void 0&&(Xs=sc("canvas")),Xs.width=e.width,Xs.height=e.height;const a=Xs.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Xs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=pr(l[u]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(pr(t[r]/255)*255):t[r]=pr(t[r]);return{data:t,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wx=0;class kh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wx++}),this.uuid=go(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,h=a.length;u<h;u++)a[u].isDataTexture?l.push($u(a[u].image)):l.push($u(a[u]))}else l=$u(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function $u(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ax.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let Tx=0;const ef=new ie;class Dn extends Ss{constructor(e=Dn.DEFAULT_IMAGE,t=Dn.DEFAULT_MAPPING,r=fr,a=fr,l=Mn,u=ms,h=_i,p=vi,d=Dn.DEFAULT_ANISOTROPY,v=Gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=go(),this.name="",this.source=new kh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=d,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ef).x}get height(){return this.source.getSize(ef).y}get depth(){return this.source.getSize(ef).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ct(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ct(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==eg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $l:e.x=e.x-Math.floor(e.x);break;case fr:e.x=e.x<0?0:1;break;case Xf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $l:e.y=e.y-Math.floor(e.y);break;case fr:e.y=e.y<0?0:1;break;case Xf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dn.DEFAULT_IMAGE=null;Dn.DEFAULT_MAPPING=eg;Dn.DEFAULT_ANISOTROPY=1;const Wh=class Wh{constructor(e=0,t=0,r=0,a=1){this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*a+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*a+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*a+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const p=e.elements,d=p[0],v=p[4],_=p[8],g=p[1],M=p[5],E=p[9],C=p[2],x=p[6],S=p[10];if(Math.abs(v-g)<.01&&Math.abs(_-C)<.01&&Math.abs(E-x)<.01){if(Math.abs(v+g)<.1&&Math.abs(_+C)<.1&&Math.abs(E+x)<.1&&Math.abs(d+M+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(d+1)/2,b=(M+1)/2,V=(S+1)/2,D=(v+g)/4,k=(_+C)/4,w=(E+x)/4;return I>b&&I>V?I<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(I),a=D/r,l=k/r):b>V?b<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(b),r=D/a,l=w/a):V<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(V),r=k/l,a=w/l),this.set(r,a,l,t),this}let R=Math.sqrt((x-E)*(x-E)+(_-C)*(_-C)+(g-v)*(g-v));return Math.abs(R)<.001&&(R=1),this.x=(x-E)/R,this.y=(_-C)/R,this.z=(g-v)/R,this.w=Math.acos((d+M+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this.w=Et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this.w=Et(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wh.prototype.isVector4=!0;let sn=Wh;class Cx extends Ss{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new sn(0,0,e,t),this.scissorTest=!1,this.viewport=new sn(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:r.depth},l=new Dn(a),u=r.count;for(let h=0;h<u;h++)this.textures[h]=l.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new kh(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends Cx{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class cg extends Dn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=dn,this.minFilter=dn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rx extends Dn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=dn,this.minFilter=dn,this.wrapR=fr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lc=class lc{constructor(e,t,r,a,l,u,h,p,d,v,_,g,M,E,C,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,h,p,d,v,_,g,M,E,C,x)}set(e,t,r,a,l,u,h,p,d,v,_,g,M,E,C,x){const S=this.elements;return S[0]=e,S[4]=t,S[8]=r,S[12]=a,S[1]=l,S[5]=u,S[9]=h,S[13]=p,S[2]=d,S[6]=v,S[10]=_,S[14]=g,S[3]=M,S[7]=E,S[11]=C,S[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,a=1/js.setFromMatrixColumn(e,0).length(),l=1/js.setFromMatrixColumn(e,1).length(),u=1/js.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,u=Math.cos(r),h=Math.sin(r),p=Math.cos(a),d=Math.sin(a),v=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const g=u*v,M=u*_,E=h*v,C=h*_;t[0]=p*v,t[4]=-p*_,t[8]=d,t[1]=M+E*d,t[5]=g-C*d,t[9]=-h*p,t[2]=C-g*d,t[6]=E+M*d,t[10]=u*p}else if(e.order==="YXZ"){const g=p*v,M=p*_,E=d*v,C=d*_;t[0]=g+C*h,t[4]=E*h-M,t[8]=u*d,t[1]=u*_,t[5]=u*v,t[9]=-h,t[2]=M*h-E,t[6]=C+g*h,t[10]=u*p}else if(e.order==="ZXY"){const g=p*v,M=p*_,E=d*v,C=d*_;t[0]=g-C*h,t[4]=-u*_,t[8]=E+M*h,t[1]=M+E*h,t[5]=u*v,t[9]=C-g*h,t[2]=-u*d,t[6]=h,t[10]=u*p}else if(e.order==="ZYX"){const g=u*v,M=u*_,E=h*v,C=h*_;t[0]=p*v,t[4]=E*d-M,t[8]=g*d+C,t[1]=p*_,t[5]=C*d+g,t[9]=M*d-E,t[2]=-d,t[6]=h*p,t[10]=u*p}else if(e.order==="YZX"){const g=u*p,M=u*d,E=h*p,C=h*d;t[0]=p*v,t[4]=C-g*_,t[8]=E*_+M,t[1]=_,t[5]=u*v,t[9]=-h*v,t[2]=-d*v,t[6]=M*_+E,t[10]=g-C*_}else if(e.order==="XZY"){const g=u*p,M=u*d,E=h*p,C=h*d;t[0]=p*v,t[4]=-_,t[8]=d*v,t[1]=g*_+C,t[5]=u*v,t[9]=M*_-E,t[2]=E*_-M,t[6]=h*v,t[10]=C*_+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bx,e,Px)}lookAt(e,t,r){const a=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Fr.crossVectors(r,ii),Fr.lengthSq()===0&&(Math.abs(r.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Fr.crossVectors(r,ii)),Fr.normalize(),Sl.crossVectors(ii,Fr),a[0]=Fr.x,a[4]=Sl.x,a[8]=ii.x,a[1]=Fr.y,a[5]=Sl.y,a[9]=ii.y,a[2]=Fr.z,a[6]=Sl.z,a[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],h=r[4],p=r[8],d=r[12],v=r[1],_=r[5],g=r[9],M=r[13],E=r[2],C=r[6],x=r[10],S=r[14],R=r[3],I=r[7],b=r[11],V=r[15],D=a[0],k=a[4],w=a[8],N=a[12],q=a[1],B=a[5],z=a[9],Q=a[13],te=a[2],G=a[6],$=a[10],W=a[14],Y=a[3],F=a[7],ee=a[11],L=a[15];return l[0]=u*D+h*q+p*te+d*Y,l[4]=u*k+h*B+p*G+d*F,l[8]=u*w+h*z+p*$+d*ee,l[12]=u*N+h*Q+p*W+d*L,l[1]=v*D+_*q+g*te+M*Y,l[5]=v*k+_*B+g*G+M*F,l[9]=v*w+_*z+g*$+M*ee,l[13]=v*N+_*Q+g*W+M*L,l[2]=E*D+C*q+x*te+S*Y,l[6]=E*k+C*B+x*G+S*F,l[10]=E*w+C*z+x*$+S*ee,l[14]=E*N+C*Q+x*W+S*L,l[3]=R*D+I*q+b*te+V*Y,l[7]=R*k+I*B+b*G+V*F,l[11]=R*w+I*z+b*$+V*ee,l[15]=R*N+I*Q+b*W+V*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],u=e[1],h=e[5],p=e[9],d=e[13],v=e[2],_=e[6],g=e[10],M=e[14],E=e[3],C=e[7],x=e[11],S=e[15],R=p*M-d*g,I=h*M-d*_,b=h*g-p*_,V=u*M-d*v,D=u*g-p*v,k=u*_-h*v;return t*(C*R-x*I+S*b)-r*(E*R-x*V+S*D)+a*(E*I-C*V+S*k)-l*(E*b-C*D+x*k)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],h=e[5],p=e[6],d=e[7],v=e[8],_=e[9],g=e[10],M=e[11],E=e[12],C=e[13],x=e[14],S=e[15],R=t*h-r*u,I=t*p-a*u,b=t*d-l*u,V=r*p-a*h,D=r*d-l*h,k=a*d-l*p,w=v*C-_*E,N=v*x-g*E,q=v*S-M*E,B=_*x-g*C,z=_*S-M*C,Q=g*S-M*x,te=R*Q-I*z+b*B+V*q-D*N+k*w;if(te===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/te;return e[0]=(h*Q-p*z+d*B)*G,e[1]=(a*z-r*Q-l*B)*G,e[2]=(C*k-x*D+S*V)*G,e[3]=(g*D-_*k-M*V)*G,e[4]=(p*q-u*Q-d*N)*G,e[5]=(t*Q-a*q+l*N)*G,e[6]=(x*b-E*k-S*I)*G,e[7]=(v*k-g*b+M*I)*G,e[8]=(u*z-h*q+d*w)*G,e[9]=(r*q-t*z-l*w)*G,e[10]=(E*D-C*b+S*R)*G,e[11]=(_*b-v*D-M*R)*G,e[12]=(h*N-u*B-p*w)*G,e[13]=(t*B-r*N+a*w)*G,e[14]=(C*I-E*V-x*R)*G,e[15]=(v*V-_*I+g*R)*G,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,u=e.x,h=e.y,p=e.z,d=l*u,v=l*h;return this.set(d*u+r,d*h-a*p,d*p+a*h,0,d*h+a*p,v*h+r,v*p-a*u,0,d*p-a*h,v*p+a*u,l*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,u){return this.set(1,r,l,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,u=t._y,h=t._z,p=t._w,d=l+l,v=u+u,_=h+h,g=l*d,M=l*v,E=l*_,C=u*v,x=u*_,S=h*_,R=p*d,I=p*v,b=p*_,V=r.x,D=r.y,k=r.z;return a[0]=(1-(C+S))*V,a[1]=(M+b)*V,a[2]=(E-I)*V,a[3]=0,a[4]=(M-b)*D,a[5]=(1-(g+S))*D,a[6]=(x+R)*D,a[7]=0,a[8]=(E+I)*k,a[9]=(x-R)*k,a[10]=(1-(g+C))*k,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let u=js.set(a[0],a[1],a[2]).length();const h=js.set(a[4],a[5],a[6]).length(),p=js.set(a[8],a[9],a[10]).length();l<0&&(u=-u),Pi.copy(this);const d=1/u,v=1/h,_=1/p;return Pi.elements[0]*=d,Pi.elements[1]*=d,Pi.elements[2]*=d,Pi.elements[4]*=v,Pi.elements[5]*=v,Pi.elements[6]*=v,Pi.elements[8]*=_,Pi.elements[9]*=_,Pi.elements[10]*=_,t.setFromRotationMatrix(Pi),r.x=u,r.y=h,r.z=p,this}makePerspective(e,t,r,a,l,u,h=Xi,p=!1){const d=this.elements,v=2*l/(t-e),_=2*l/(r-a),g=(t+e)/(t-e),M=(r+a)/(r-a);let E,C;if(p)E=l/(u-l),C=u*l/(u-l);else if(h===Xi)E=-(u+l)/(u-l),C=-2*u*l/(u-l);else if(h===rc)E=-u/(u-l),C=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=v,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=_,d[9]=M,d[13]=0,d[2]=0,d[6]=0,d[10]=E,d[14]=C,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,r,a,l,u,h=Xi,p=!1){const d=this.elements,v=2/(t-e),_=2/(r-a),g=-(t+e)/(t-e),M=-(r+a)/(r-a);let E,C;if(p)E=1/(u-l),C=u/(u-l);else if(h===Xi)E=-2/(u-l),C=-(u+l)/(u-l);else if(h===rc)E=-1/(u-l),C=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=v,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=_,d[9]=0,d[13]=M,d[2]=0,d[6]=0,d[10]=E,d[14]=C,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};lc.prototype.isMatrix4=!0;let on=lc;const js=new ie,Pi=new on,bx=new ie(0,0,0),Px=new ie(1,1,1),Fr=new ie,Sl=new ie,ii=new ie,Dm=new on,Nm=new dr;class xs{constructor(e=0,t=0,r=0,a=xs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],u=a[4],h=a[8],p=a[1],d=a[5],v=a[9],_=a[2],g=a[6],M=a[10];switch(t){case"XYZ":this._y=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-u,d)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-Et(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-u,d));break;case"YZX":this._z=Math.asin(Et(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,d),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Dm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nm.setFromEuler(this),this.setFromQuaternion(Nm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xs.DEFAULT_ORDER="XYZ";class ug{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lx=0;const Um=new ie,Ks=new dr,or=new on,Ml=new ie,$o=new ie,Ix=new ie,Dx=new dr,Fm=new ie(1,0,0),Om=new ie(0,1,0),km=new ie(0,0,1),Bm={type:"added"},Nx={type:"removed"},Ys={type:"childadded",child:null},tf={type:"childremoved",child:null};class Vn extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=go(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vn.DEFAULT_UP.clone();const e=new ie,t=new xs,r=new dr,a=new ie(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new on},normalMatrix:{value:new vt}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ug,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.multiply(Ks),this}rotateOnWorldAxis(e,t){return Ks.setFromAxisAngle(e,t),this.quaternion.premultiply(Ks),this}rotateX(e){return this.rotateOnAxis(Fm,e)}rotateY(e){return this.rotateOnAxis(Om,e)}rotateZ(e){return this.rotateOnAxis(km,e)}translateOnAxis(e,t){return Um.copy(e).applyQuaternion(this.quaternion),this.position.add(Um.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fm,e)}translateY(e){return this.translateOnAxis(Om,e)}translateZ(e){return this.translateOnAxis(km,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(or.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Ml.copy(e):Ml.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),$o.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?or.lookAt($o,Ml,this.up):or.lookAt(Ml,$o,this.up),this.quaternion.setFromRotationMatrix(or),a&&(or.extractRotation(a.matrixWorld),Ks.setFromRotationMatrix(or),this.quaternion.premultiply(Ks.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bm),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Nx),tf.child=e,this.dispatchEvent(tf),tf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),or.multiply(e.parent.matrixWorld)),e.applyMatrix4(or),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bm),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,e,Ix),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($o,Dx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,a=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*a,l[13]+=r-l[1]*t-l[5]*r-l[9]*a,l[14]+=a-l[2]*t-l[6]*r-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(h=>({...h})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let d=0,v=p.length;d<v;d++){const _=p[d];l(e.shapes,_)}else l(e.shapes,p)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,d=this.material.length;p<d;p++)h.push(l(e.materials,this.material[p]));a.material=h}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let h=0;h<this.children.length;h++)a.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];a.animations.push(l(e.animations,p))}}if(t){const h=u(e.geometries),p=u(e.materials),d=u(e.textures),v=u(e.images),_=u(e.shapes),g=u(e.skeletons),M=u(e.animations),E=u(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),d.length>0&&(r.textures=d),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=a,r;function u(h){const p=[];for(const d in h){const v=h[d];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Vn.DEFAULT_UP=new ie(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ao extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ux={type:"move"};class nf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ao,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ao,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ao,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,u=null;const h=this._targetRay,p=this._grip,d=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(d&&e.hand){u=!0;for(const C of e.hand.values()){const x=t.getJointPose(C,r),S=this._getHandJoint(d,C);x!==null&&(S.matrix.fromArray(x.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=x.radius),S.visible=x!==null}const v=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],g=v.position.distanceTo(_.position),M=.02,E=.005;d.inputState.pinching&&g>M+E?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&g<=M-E&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Ux)))}return h!==null&&(h.visible=a!==null),p!==null&&(p.visible=l!==null),d!==null&&(d.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ao;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const fg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Or={h:0,s:0,l:0},yl={h:0,s:0,l:0};function rf(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Bt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Tt.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=Tt.workingColorSpace){if(e=Oh(e,1),t=Et(t,0,1),r=Et(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=rf(u,l,e+1/3),this.g=rf(u,l,e),this.b=rf(u,l,e-1/3)}return Tt.colorSpaceToWorking(this,a),this}setStyle(e,t=mi){function r(l){l!==void 0&&parseFloat(l)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],h=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:ct("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mi){const r=fg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}copyLinearToSRGB(e){return this.r=uo(e.r),this.g=uo(e.g),this.b=uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return Tt.workingToColorSpace(In.copy(this),e),Math.round(Et(In.r*255,0,255))*65536+Math.round(Et(In.g*255,0,255))*256+Math.round(Et(In.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(In.copy(this),t);const r=In.r,a=In.g,l=In.b,u=Math.max(r,a,l),h=Math.min(r,a,l);let p,d;const v=(h+u)/2;if(h===u)p=0,d=0;else{const _=u-h;switch(d=v<=.5?_/(u+h):_/(2-u-h),u){case r:p=(a-l)/_+(a<l?6:0);break;case a:p=(l-r)/_+2;break;case l:p=(r-a)/_+4;break}p/=6}return e.h=p,e.s=d,e.l=v,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(In.copy(this),t),e.r=In.r,e.g=In.g,e.b=In.b,e}getStyle(e=mi){Tt.workingToColorSpace(In.copy(this),e);const t=In.r,r=In.g,a=In.b;return e!==mi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Or),this.setHSL(Or.h+e,Or.s+t,Or.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Or),e.getHSL(yl);const r=ha(Or.h,yl.h,t),a=ha(Or.s,yl.s,t),l=ha(Or.l,yl.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const In=new Bt;Bt.NAMES=fg;class Fx extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xs,this.environmentIntensity=1,this.environmentRotation=new xs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Li=new ie,ar=new ie,sf=new ie,lr=new ie,qs=new ie,Zs=new ie,zm=new ie,of=new ie,af=new ie,lf=new ie,cf=new sn,uf=new sn,ff=new sn;class Ui{constructor(e=new ie,t=new ie,r=new ie){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),Li.subVectors(e,t),a.cross(Li);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){Li.subVectors(a,t),ar.subVectors(r,t),sf.subVectors(e,t);const u=Li.dot(Li),h=Li.dot(ar),p=Li.dot(sf),d=ar.dot(ar),v=ar.dot(sf),_=u*d-h*h;if(_===0)return l.set(0,0,0),null;const g=1/_,M=(d*p-h*v)*g,E=(u*v-h*p)*g;return l.set(1-M-E,E,M)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,lr)===null?!1:lr.x>=0&&lr.y>=0&&lr.x+lr.y<=1}static getInterpolation(e,t,r,a,l,u,h,p){return this.getBarycoord(e,t,r,a,lr)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,lr.x),p.addScaledVector(u,lr.y),p.addScaledVector(h,lr.z),p)}static getInterpolatedAttribute(e,t,r,a,l,u){return cf.setScalar(0),uf.setScalar(0),ff.setScalar(0),cf.fromBufferAttribute(e,t),uf.fromBufferAttribute(e,r),ff.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(cf,l.x),u.addScaledVector(uf,l.y),u.addScaledVector(ff,l.z),u}static isFrontFacing(e,t,r,a){return Li.subVectors(r,t),ar.subVectors(e,t),Li.cross(ar).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Li.subVectors(this.c,this.b),ar.subVectors(this.a,this.b),Li.cross(ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ui.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return Ui.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let u,h;qs.subVectors(a,r),Zs.subVectors(l,r),of.subVectors(e,r);const p=qs.dot(of),d=Zs.dot(of);if(p<=0&&d<=0)return t.copy(r);af.subVectors(e,a);const v=qs.dot(af),_=Zs.dot(af);if(v>=0&&_<=v)return t.copy(a);const g=p*_-v*d;if(g<=0&&p>=0&&v<=0)return u=p/(p-v),t.copy(r).addScaledVector(qs,u);lf.subVectors(e,l);const M=qs.dot(lf),E=Zs.dot(lf);if(E>=0&&M<=E)return t.copy(l);const C=M*d-p*E;if(C<=0&&d>=0&&E<=0)return h=d/(d-E),t.copy(r).addScaledVector(Zs,h);const x=v*E-M*_;if(x<=0&&_-v>=0&&M-E>=0)return zm.subVectors(l,a),h=(_-v)/(_-v+(M-E)),t.copy(a).addScaledVector(zm,h);const S=1/(x+C+g);return u=C*S,h=g*S,t.copy(r).addScaledVector(qs,u).addScaledVector(Zs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ga{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=l.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,Ii):Ii.fromBufferAttribute(l,u),Ii.applyMatrix4(e.matrixWorld),this.expandByPoint(Ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),El.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),El.copy(r.boundingBox)),El.applyMatrix4(e.matrixWorld),this.union(El)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ii),Ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ea),Al.subVectors(this.max,ea),Qs.subVectors(e.a,ea),Js.subVectors(e.b,ea),$s.subVectors(e.c,ea),kr.subVectors(Js,Qs),Br.subVectors($s,Js),ls.subVectors(Qs,$s);let t=[0,-kr.z,kr.y,0,-Br.z,Br.y,0,-ls.z,ls.y,kr.z,0,-kr.x,Br.z,0,-Br.x,ls.z,0,-ls.x,-kr.y,kr.x,0,-Br.y,Br.x,0,-ls.y,ls.x,0];return!hf(t,Qs,Js,$s,Al)||(t=[1,0,0,0,1,0,0,0,1],!hf(t,Qs,Js,$s,Al))?!1:(wl.crossVectors(kr,Br),t=[wl.x,wl.y,wl.z],hf(t,Qs,Js,$s,Al))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const cr=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],Ii=new ie,El=new ga,Qs=new ie,Js=new ie,$s=new ie,kr=new ie,Br=new ie,ls=new ie,ea=new ie,Al=new ie,wl=new ie,cs=new ie;function hf(s,e,t,r,a){for(let l=0,u=s.length-3;l<=u;l+=3){cs.fromArray(s,l);const h=a.x*Math.abs(cs.x)+a.y*Math.abs(cs.y)+a.z*Math.abs(cs.z),p=e.dot(cs),d=t.dot(cs),v=r.dot(cs);if(Math.max(-Math.max(p,d,v),Math.min(p,d,v))>h)return!1}return!0}const un=new ie,Tl=new Nt;let Ox=0;class Wt extends Ss{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ox++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=wm,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Tl.fromBufferAttribute(this,t),Tl.applyMatrix3(e),this.setXY(t,Tl.x,Tl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=so(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=zn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=so(t,this.array)),t}setX(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=so(t,this.array)),t}setY(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=so(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=so(t,this.array)),t}setW(e,t){return this.normalized&&(t=zn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),r=zn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),r=zn(r,this.array),a=zn(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=zn(t,this.array),r=zn(r,this.array),a=zn(a,this.array),l=zn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class hg extends Wt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class dg extends Wt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Yi extends Wt{constructor(e,t,r){super(new Float32Array(e),t,r)}}const kx=new ga,ta=new ie,df=new ie;class vo{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):kx.setFromPoints(e).getCenter(r);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ta.subVectors(e,this.center);const t=ta.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(ta,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(df.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ta.copy(e.center).add(df)),this.expandByPoint(ta.copy(e.center).sub(df))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Bx=0;const pi=new on,pf=new Vn,eo=new ie,ri=new ga,na=new ga,Sn=new ie;class Zn extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=go(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ix(e)?dg:hg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new vt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,r){return pi.makeTranslation(e,t,r),this.applyMatrix4(pi),this}scale(e,t,r){return pi.makeScale(e,t,r),this.applyMatrix4(pi),this}lookAt(e){return pf.lookAt(e),pf.updateMatrix(),this.applyMatrix4(pf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Yi(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ga);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];ri.setFromBufferAttribute(l),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const h=t[l];na.setFromBufferAttribute(h),this.morphTargetsRelative?(Sn.addVectors(ri.min,na.min),ri.expandByPoint(Sn),Sn.addVectors(ri.max,na.max),ri.expandByPoint(Sn)):(ri.expandByPoint(na.min),ri.expandByPoint(na.max))}ri.getCenter(r);let a=0;for(let l=0,u=e.count;l<u;l++)Sn.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(Sn));if(t)for(let l=0,u=t.length;l<u;l++){const h=t[l],p=this.morphTargetsRelative;for(let d=0,v=h.count;d<v;d++)Sn.fromBufferAttribute(h,d),p&&(eo.fromBufferAttribute(e,d),Sn.add(eo)),a=Math.max(a,r.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wt(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),h=[],p=[];for(let w=0;w<r.count;w++)h[w]=new ie,p[w]=new ie;const d=new ie,v=new ie,_=new ie,g=new Nt,M=new Nt,E=new Nt,C=new ie,x=new ie;function S(w,N,q){d.fromBufferAttribute(r,w),v.fromBufferAttribute(r,N),_.fromBufferAttribute(r,q),g.fromBufferAttribute(l,w),M.fromBufferAttribute(l,N),E.fromBufferAttribute(l,q),v.sub(d),_.sub(d),M.sub(g),E.sub(g);const B=1/(M.x*E.y-E.x*M.y);isFinite(B)&&(C.copy(v).multiplyScalar(E.y).addScaledVector(_,-M.y).multiplyScalar(B),x.copy(_).multiplyScalar(M.x).addScaledVector(v,-E.x).multiplyScalar(B),h[w].add(C),h[N].add(C),h[q].add(C),p[w].add(x),p[N].add(x),p[q].add(x))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let w=0,N=R.length;w<N;++w){const q=R[w],B=q.start,z=q.count;for(let Q=B,te=B+z;Q<te;Q+=3)S(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const I=new ie,b=new ie,V=new ie,D=new ie;function k(w){V.fromBufferAttribute(a,w),D.copy(V);const N=h[w];I.copy(N),I.sub(V.multiplyScalar(V.dot(N))).normalize(),b.crossVectors(D,N);const B=b.dot(p[w])<0?-1:1;u.setXYZW(w,I.x,I.y,I.z,B)}for(let w=0,N=R.length;w<N;++w){const q=R[w],B=q.start,z=q.count;for(let Q=B,te=B+z;Q<te;Q+=3)k(e.getX(Q+0)),k(e.getX(Q+1)),k(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Wt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const a=new ie,l=new ie,u=new ie,h=new ie,p=new ie,d=new ie,v=new ie,_=new ie;if(e)for(let g=0,M=e.count;g<M;g+=3){const E=e.getX(g+0),C=e.getX(g+1),x=e.getX(g+2);a.fromBufferAttribute(t,E),l.fromBufferAttribute(t,C),u.fromBufferAttribute(t,x),v.subVectors(u,l),_.subVectors(a,l),v.cross(_),h.fromBufferAttribute(r,E),p.fromBufferAttribute(r,C),d.fromBufferAttribute(r,x),h.add(v),p.add(v),d.add(v),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(x,d.x,d.y,d.z)}else for(let g=0,M=t.count;g<M;g+=3)a.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),v.subVectors(u,l),_.subVectors(a,l),v.cross(_),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Sn.fromBufferAttribute(e,t),Sn.normalize(),e.setXYZ(t,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(h,p){const d=h.array,v=h.itemSize,_=h.normalized,g=new d.constructor(p.length*v);let M=0,E=0;for(let C=0,x=p.length;C<x;C++){h.isInterleavedBufferAttribute?M=p[C]*h.data.stride+h.offset:M=p[C]*v;for(let S=0;S<v;S++)g[E++]=d[M++]}return new Wt(g,v,_)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zn,r=this.index.array,a=this.attributes;for(const h in a){const p=a[h],d=e(p,r);t.setAttribute(h,d)}const l=this.morphAttributes;for(const h in l){const p=[],d=l[h];for(let v=0,_=d.length;v<_;v++){const g=d[v],M=e(g,r);p.push(M)}t.morphAttributes[h]=p}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,p=u.length;h<p;h++){const d=u[h];t.addGroup(d.start,d.count,d.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(e[d]=p[d]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const d=r[p];e.data.attributes[p]=d.toJSON(e.data)}const a={};let l=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],v=[];for(let _=0,g=d.length;_<g;_++){const M=d[_];v.push(M.toJSON(e.data))}v.length>0&&(a[p]=v,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const d in a){const v=a[d];this.setAttribute(d,v.clone(t))}const l=e.morphAttributes;for(const d in l){const v=[],_=l[d];for(let g=0,M=_.length;g<M;g++)v.push(_[g].clone(t));this.morphAttributes[d]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let d=0,v=u.length;d<v;d++){const _=u[d];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let zx=0;class _o extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=go(),this.name="",this.type="Material",this.blending=co,this.side=Xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ff,this.blendDst=Of,this.blendEquation=ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=fo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Am,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ct(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){ct(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==co&&(r.blending=this.blending),this.side!==Xr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ff&&(r.blendSrc=this.blendSrc),this.blendDst!==Of&&(r.blendDst=this.blendDst),this.blendEquation!==ds&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==fo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Am&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const u=[];for(const h in l){const p=l[h];delete p.metadata,u.push(p)}return u}if(t){const l=a(e.textures),u=a(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ur=new ie,mf=new ie,Cl=new ie,zr=new ie,gf=new ie,Rl=new ie,vf=new ie;class Bh{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ur)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ur.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ur.copy(this.origin).addScaledVector(this.direction,t),ur.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){mf.copy(e).add(t).multiplyScalar(.5),Cl.copy(t).sub(e).normalize(),zr.copy(this.origin).sub(mf);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Cl),h=zr.dot(this.direction),p=-zr.dot(Cl),d=zr.lengthSq(),v=Math.abs(1-u*u);let _,g,M,E;if(v>0)if(_=u*p-h,g=u*h-p,E=l*v,_>=0)if(g>=-E)if(g<=E){const C=1/v;_*=C,g*=C,M=_*(_+u*g+2*h)+g*(u*_+g+2*p)+d}else g=l,_=Math.max(0,-(u*g+h)),M=-_*_+g*(g+2*p)+d;else g=-l,_=Math.max(0,-(u*g+h)),M=-_*_+g*(g+2*p)+d;else g<=-E?(_=Math.max(0,-(-u*l+h)),g=_>0?-l:Math.min(Math.max(-l,-p),l),M=-_*_+g*(g+2*p)+d):g<=E?(_=0,g=Math.min(Math.max(-l,-p),l),M=g*(g+2*p)+d):(_=Math.max(0,-(u*l+h)),g=_>0?l:Math.min(Math.max(-l,-p),l),M=-_*_+g*(g+2*p)+d);else g=u>0?-l:l,_=Math.max(0,-(u*g+h)),M=-_*_+g*(g+2*p)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(mf).addScaledVector(Cl,g),M}intersectSphere(e,t){ur.subVectors(e.center,this.origin);const r=ur.dot(this.direction),a=ur.dot(ur)-r*r,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),h=r-u,p=r+u;return p<0?null:h<0?this.at(p,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,u,h,p;const d=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,g=this.origin;return d>=0?(r=(e.min.x-g.x)*d,a=(e.max.x-g.x)*d):(r=(e.max.x-g.x)*d,a=(e.min.x-g.x)*d),v>=0?(l=(e.min.y-g.y)*v,u=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,u=(e.min.y-g.y)*v),r>u||l>a||((l>r||isNaN(r))&&(r=l),(u<a||isNaN(a))&&(a=u),_>=0?(h=(e.min.z-g.z)*_,p=(e.max.z-g.z)*_):(h=(e.max.z-g.z)*_,p=(e.min.z-g.z)*_),r>p||h>a)||((h>r||r!==r)&&(r=h),(p<a||a!==a)&&(a=p),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,ur)!==null}intersectTriangle(e,t,r,a,l){gf.subVectors(t,e),Rl.subVectors(r,e),vf.crossVectors(gf,Rl);let u=this.direction.dot(vf),h;if(u>0){if(a)return null;h=1}else if(u<0)h=-1,u=-u;else return null;zr.subVectors(this.origin,e);const p=h*this.direction.dot(Rl.crossVectors(zr,Rl));if(p<0)return null;const d=h*this.direction.dot(gf.cross(zr));if(d<0||p+d>u)return null;const v=-h*zr.dot(vf);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pg extends _o{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xs,this.combine=j0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Hm=new on,us=new Bh,bl=new vo,Vm=new ie,Pl=new ie,Ll=new ie,Il=new ie,_f=new ie,Dl=new ie,Gm=new ie,Nl=new ie;class si extends Vn{constructor(e=new Zn,t=new pg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const h=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const h=this.morphTargetInfluences;if(l&&h){Dl.set(0,0,0);for(let p=0,d=l.length;p<d;p++){const v=h[p],_=l[p];v!==0&&(_f.fromBufferAttribute(_,e),u?Dl.addScaledVector(_f,v):Dl.addScaledVector(_f.sub(t),v))}t.add(Dl)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),bl.copy(r.boundingSphere),bl.applyMatrix4(l),us.copy(e.ray).recast(e.near),!(bl.containsPoint(us.origin)===!1&&(us.intersectSphere(bl,Vm)===null||us.origin.distanceToSquared(Vm)>(e.far-e.near)**2))&&(Hm.copy(l).invert(),us.copy(e.ray).applyMatrix4(Hm),!(r.boundingBox!==null&&us.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,us)))}_computeIntersections(e,t,r){let a;const l=this.geometry,u=this.material,h=l.index,p=l.attributes.position,d=l.attributes.uv,v=l.attributes.uv1,_=l.attributes.normal,g=l.groups,M=l.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,C=g.length;E<C;E++){const x=g[E],S=u[x.materialIndex],R=Math.max(x.start,M.start),I=Math.min(h.count,Math.min(x.start+x.count,M.start+M.count));for(let b=R,V=I;b<V;b+=3){const D=h.getX(b),k=h.getX(b+1),w=h.getX(b+2);a=Ul(this,S,e,r,d,v,_,D,k,w),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const E=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let x=E,S=C;x<S;x+=3){const R=h.getX(x),I=h.getX(x+1),b=h.getX(x+2);a=Ul(this,u,e,r,d,v,_,R,I,b),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}else if(p!==void 0)if(Array.isArray(u))for(let E=0,C=g.length;E<C;E++){const x=g[E],S=u[x.materialIndex],R=Math.max(x.start,M.start),I=Math.min(p.count,Math.min(x.start+x.count,M.start+M.count));for(let b=R,V=I;b<V;b+=3){const D=b,k=b+1,w=b+2;a=Ul(this,S,e,r,d,v,_,D,k,w),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const E=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let x=E,S=C;x<S;x+=3){const R=x,I=x+1,b=x+2;a=Ul(this,u,e,r,d,v,_,R,I,b),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}}}function Hx(s,e,t,r,a,l,u,h){let p;if(e.side===qn?p=r.intersectTriangle(u,l,a,!0,h):p=r.intersectTriangle(a,l,u,e.side===Xr,h),p===null)return null;Nl.copy(h),Nl.applyMatrix4(s.matrixWorld);const d=t.ray.origin.distanceTo(Nl);return d<t.near||d>t.far?null:{distance:d,point:Nl.clone(),object:s}}function Ul(s,e,t,r,a,l,u,h,p,d){s.getVertexPosition(h,Pl),s.getVertexPosition(p,Ll),s.getVertexPosition(d,Il);const v=Hx(s,e,t,r,Pl,Ll,Il,Gm);if(v){const _=new ie;Ui.getBarycoord(Gm,Pl,Ll,Il,_),a&&(v.uv=Ui.getInterpolatedAttribute(a,h,p,d,_,new Nt)),l&&(v.uv1=Ui.getInterpolatedAttribute(l,h,p,d,_,new Nt)),u&&(v.normal=Ui.getInterpolatedAttribute(u,h,p,d,_,new ie),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:h,b:p,c:d,normal:new ie,materialIndex:0};Ui.getNormal(Pl,Ll,Il,g.normal),v.face=g,v.barycoord=_}return v}class mg extends Dn{constructor(e=null,t=1,r=1,a,l,u,h,p,d=dn,v=dn,_,g){super(null,u,h,p,d,v,a,l,_,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xf=new ie,Vx=new ie,Gx=new vt;class hs{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=xf.subVectors(r,t).cross(Vx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const a=e.delta(xf),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(a,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Gx.getNormalMatrix(e),a=this.coplanarPoint(xf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fs=new vo,Wx=new Nt(.5,.5),Fl=new ie;class gg{constructor(e=new hs,t=new hs,r=new hs,a=new hs,l=new hs,u=new hs){this.planes=[e,t,r,a,l,u]}set(e,t,r,a,l,u){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(r),h[3].copy(a),h[4].copy(l),h[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Xi,r=!1){const a=this.planes,l=e.elements,u=l[0],h=l[1],p=l[2],d=l[3],v=l[4],_=l[5],g=l[6],M=l[7],E=l[8],C=l[9],x=l[10],S=l[11],R=l[12],I=l[13],b=l[14],V=l[15];if(a[0].setComponents(d-u,M-v,S-E,V-R).normalize(),a[1].setComponents(d+u,M+v,S+E,V+R).normalize(),a[2].setComponents(d+h,M+_,S+C,V+I).normalize(),a[3].setComponents(d-h,M-_,S-C,V-I).normalize(),r)a[4].setComponents(p,g,x,b).normalize(),a[5].setComponents(d-p,M-g,S-x,V-b).normalize();else if(a[4].setComponents(d-p,M-g,S-x,V-b).normalize(),t===Xi)a[5].setComponents(d+p,M+g,S+x,V+b).normalize();else if(t===rc)a[5].setComponents(p,g,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){fs.center.set(0,0,0);const t=Wx.distanceTo(e.center);return fs.radius=.7071067811865476+t,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Fl.x=a.normal.x>0?e.max.x:e.min.x,Fl.y=a.normal.y>0?e.max.y:e.min.y,Fl.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Fl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xx extends _o{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const oc=new ie,ac=new ie,Wm=new on,ia=new Bh,Ol=new vo,Sf=new ie,Xm=new ie;class jx extends Vn{constructor(e=new Zn,t=new Xx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let a=1,l=t.count;a<l;a++)oc.fromBufferAttribute(t,a-1),ac.fromBufferAttribute(t,a),r[a]=r[a-1],r[a]+=oc.distanceTo(ac);e.setAttribute("lineDistance",new Yi(r,1))}else ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ol.copy(r.boundingSphere),Ol.applyMatrix4(a),Ol.radius+=l,e.ray.intersectsSphere(Ol)===!1)return;Wm.copy(a).invert(),ia.copy(e.ray).applyMatrix4(Wm);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=this.isLineSegments?2:1,v=r.index,g=r.attributes.position;if(v!==null){const M=Math.max(0,u.start),E=Math.min(v.count,u.start+u.count);for(let C=M,x=E-1;C<x;C+=d){const S=v.getX(C),R=v.getX(C+1),I=kl(this,e,ia,p,S,R,C);I&&t.push(I)}if(this.isLineLoop){const C=v.getX(E-1),x=v.getX(M),S=kl(this,e,ia,p,C,x,E-1);S&&t.push(S)}}else{const M=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let C=M,x=E-1;C<x;C+=d){const S=kl(this,e,ia,p,C,C+1,C);S&&t.push(S)}if(this.isLineLoop){const C=kl(this,e,ia,p,E-1,M,E-1);C&&t.push(C)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const h=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function kl(s,e,t,r,a,l,u){const h=s.geometry.attributes.position;if(oc.fromBufferAttribute(h,a),ac.fromBufferAttribute(h,l),t.distanceSqToSegment(oc,ac,Sf,Xm)>r)return;Sf.applyMatrix4(s.matrixWorld);const d=e.ray.origin.distanceTo(Sf);if(!(d<e.near||d>e.far))return{distance:d,point:Xm.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}class Kx extends _o{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const jm=new on,Eh=new Bh,Bl=new vo,zl=new ie;class Yx extends Vn{constructor(e=new Zn,t=new Kx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Bl.copy(r.boundingSphere),Bl.applyMatrix4(a),Bl.radius+=l,e.ray.intersectsSphere(Bl)===!1)return;jm.copy(a).invert(),Eh.copy(e.ray).applyMatrix4(jm);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,d=r.index,_=r.attributes.position;if(d!==null){const g=Math.max(0,u.start),M=Math.min(d.count,u.start+u.count);for(let E=g,C=M;E<C;E++){const x=d.getX(E);zl.fromBufferAttribute(_,x),Km(zl,x,p,a,e,t,this)}}else{const g=Math.max(0,u.start),M=Math.min(_.count,u.start+u.count);for(let E=g,C=M;E<C;E++)zl.fromBufferAttribute(_,E),Km(zl,E,p,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const h=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function Km(s,e,t,r,a,l,u){const h=Eh.distanceSqToPoint(s);if(h<t){const p=new ie;Eh.closestPointToPoint(s,p),p.applyMatrix4(r);const d=a.ray.origin.distanceTo(p);if(d<a.near||d>a.far)return;l.push({distance:d,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class vg extends Dn{constructor(e=[],t=vs,r,a,l,u,h,p,d,v){super(e,t,r,a,l,u,h,p,d,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class qx extends Dn{constructor(e,t,r,a,l,u,h,p,d){super(e,t,r,a,l,u,h,p,d),this.isCanvasTexture=!0,this.needsUpdate=!0}}class po extends Dn{constructor(e,t,r=qi,a,l,u,h=dn,p=dn,d,v=gr,_=1){if(v!==gr&&v!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:_};super(g,a,l,u,h,p,v,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new kh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Zx extends po{constructor(e,t=qi,r=vs,a,l,u=dn,h=dn,p,d=gr){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,t,r,a,l,u,h,p,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class _g extends Dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class va extends Zn{constructor(e=1,t=1,r=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:u};const h=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const p=[],d=[],v=[],_=[];let g=0,M=0;E("z","y","x",-1,-1,r,t,e,u,l,0),E("z","y","x",1,-1,r,t,-e,u,l,1),E("x","z","y",1,1,e,r,t,a,u,2),E("x","z","y",1,-1,e,r,-t,a,u,3),E("x","y","z",1,-1,e,t,r,a,l,4),E("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(p),this.setAttribute("position",new Yi(d,3)),this.setAttribute("normal",new Yi(v,3)),this.setAttribute("uv",new Yi(_,2));function E(C,x,S,R,I,b,V,D,k,w,N){const q=b/k,B=V/w,z=b/2,Q=V/2,te=D/2,G=k+1,$=w+1;let W=0,Y=0;const F=new ie;for(let ee=0;ee<$;ee++){const L=ee*B-Q;for(let H=0;H<G;H++){const xe=H*q-z;F[C]=xe*R,F[x]=L*I,F[S]=te,d.push(F.x,F.y,F.z),F[C]=0,F[x]=0,F[S]=D>0?1:-1,v.push(F.x,F.y,F.z),_.push(H/k),_.push(1-ee/w),W+=1}}for(let ee=0;ee<w;ee++)for(let L=0;L<k;L++){const H=g+L+G*ee,xe=g+L+G*(ee+1),_e=g+(L+1)+G*(ee+1),ve=g+(L+1)+G*ee;p.push(H,xe,ve),p.push(xe,_e,ve),Y+=6}h.addGroup(M,Y,N),M+=Y,g+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new va(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class uc extends Zn{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,u=t/2,h=Math.floor(r),p=Math.floor(a),d=h+1,v=p+1,_=e/h,g=t/p,M=[],E=[],C=[],x=[];for(let S=0;S<v;S++){const R=S*g-u;for(let I=0;I<d;I++){const b=I*_-l;E.push(b,-R,0),C.push(0,0,1),x.push(I/h),x.push(1-S/p)}}for(let S=0;S<p;S++)for(let R=0;R<h;R++){const I=R+d*S,b=R+d*(S+1),V=R+1+d*(S+1),D=R+1+d*S;M.push(I,b,D),M.push(b,V,D)}this.setIndex(M),this.setAttribute("position",new Yi(E,3)),this.setAttribute("normal",new Yi(C,3)),this.setAttribute("uv",new Yi(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uc(e.width,e.height,e.widthSegments,e.heightSegments)}}function mo(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];if(Ym(a))a.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone();else if(Array.isArray(a))if(Ym(a[0])){const l=[];for(let u=0,h=a.length;u<h;u++)l[u]=a[u].clone();e[t][r]=l}else e[t][r]=a.slice();else e[t][r]=a}}return e}function Hn(s){const e={};for(let t=0;t<s.length;t++){const r=mo(s[t]);for(const a in r)e[a]=r[a]}return e}function Ym(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function Qx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function xg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const Jx={clone:mo,merge:Hn};var $x=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends _o{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$x,this.fragmentShader=eS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mo(e.uniforms),this.uniformsGroups=Qx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class tS extends xi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nS extends _o{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=q_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iS extends _o{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hl=new ie,Vl=new dr,Vi=new ie;class Sg extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hl,Vl,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hl,Vl,Vi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Hl,Vl,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hl,Vl,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Hr=new ie,qm=new Nt,Zm=new Nt;class gi extends Sg{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ma*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ma*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z),Hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z)}getViewSize(e,t){return this.getViewBounds(e,qm,Zm),t.subVectors(Zm,qm)}setViewOffset(e,t,r,a,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fa*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const p=u.fullWidth,d=u.fullHeight;l+=u.offsetX*a/p,t-=u.offsetY*r/d,a*=u.width/p,r*=u.height/d}const h=this.filmOffset;h!==0&&(l+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Mg extends Sg{constructor(e=-1,t=1,r=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,u=r+e,h=a+t,p=a-t;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,u=l+d*this.view.width,h-=v*this.view.offsetY,p=h-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const to=-90,no=1;class rS extends Vn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new gi(to,no,e,t);a.layers=this.layers,this.add(a);const l=new gi(to,no,e,t);l.layers=this.layers,this.add(l);const u=new gi(to,no,e,t);u.layers=this.layers,this.add(u);const h=new gi(to,no,e,t);h.layers=this.layers,this.add(h);const p=new gi(to,no,e,t);p.layers=this.layers,this.add(p);const d=new gi(to,no,e,t);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,u,h,p]=t;for(const d of t)this.remove(d);if(e===Xi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===rc)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of t)this.add(d),d.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,h,p,d,v]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,3,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(r,4,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(_,g,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class sS extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Xh=class Xh{constructor(e,t,r,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,a){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=a,this}};Xh.prototype.isMatrix2=!0;let Qm=Xh;function Jm(s,e,t,r){const a=oS(r);switch(t){case sg:return s*e;case ag:return s*e/a.components*a.byteLength;case Ih:return s*e/a.components*a.byteLength;case _s:return s*e*2/a.components*a.byteLength;case Dh:return s*e*2/a.components*a.byteLength;case og:return s*e*3/a.components*a.byteLength;case _i:return s*e*4/a.components*a.byteLength;case Nh:return s*e*4/a.components*a.byteLength;case Kl:case Yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ql:case Zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kf:case qf:return Math.max(s,16)*Math.max(e,8)/4;case jf:case Yf:return Math.max(s,8)*Math.max(e,8)/2;case Zf:case Qf:case $f:case eh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Jf:case ec:case th:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case nh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ih:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case rh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case sh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case oh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ah:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case lh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ch:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case uh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case fh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case hh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case dh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ph:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case mh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case gh:case vh:case _h:return Math.ceil(s/4)*Math.ceil(e/4)*16;case xh:case Sh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case tc:case Mh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function oS(s){switch(s){case vi:case tg:return{byteLength:1,components:1};case da:case ng:case mr:return{byteLength:2,components:1};case Ph:case Lh:return{byteLength:2,components:4};case qi:case bh:case Fi:return{byteLength:4,components:1};case ig:case rg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rh}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yg(){let s=null,e=!1,t=null,r=null;function a(l,u){t(l,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function aS(s){const e=new WeakMap;function t(h,p){const d=h.array,v=h.usage,_=d.byteLength,g=s.createBuffer();s.bindBuffer(p,g),s.bufferData(p,d,v),h.onUploadCallback();let M;if(d instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)M=s.HALF_FLOAT;else if(d instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)M=s.SHORT;else if(d instanceof Uint32Array)M=s.UNSIGNED_INT;else if(d instanceof Int32Array)M=s.INT;else if(d instanceof Int8Array)M=s.BYTE;else if(d instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:M,bytesPerElement:d.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,p,d){const v=p.array,_=p.updateRanges;if(s.bindBuffer(d,h),_.length===0)s.bufferSubData(d,0,v);else{_.sort((M,E)=>M.start-E.start);let g=0;for(let M=1;M<_.length;M++){const E=_[g],C=_[M];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++g,_[g]=C)}_.length=g+1;for(let M=0,E=_.length;M<E;M++){const C=_[M];s.bufferSubData(d,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(s.deleteBuffer(p.buffer),e.delete(h))}function u(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const d=e.get(h);if(d===void 0)e.set(h,t(h,p));else if(d.version<h.version){if(d.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,h,p),d.version=h.version}}return{get:a,remove:l,update:u}}var lS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cS=`#ifdef USE_ALPHAHASH
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
#endif`,uS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pS=`#ifdef USE_AOMAP
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
#endif`,mS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gS=`#ifdef USE_BATCHING
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
#endif`,vS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_S=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,MS=`#ifdef USE_IRIDESCENCE
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
#endif`,yS=`#ifdef USE_BUMPMAP
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
#endif`,ES=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,RS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,PS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,LS=`#define PI 3.141592653589793
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
} // validated`,IS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,DS=`vec3 transformedNormal = objectNormal;
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
#endif`,NS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,US=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,FS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kS="gl_FragColor = linearToOutputTexel( gl_FragColor );",BS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zS=`#ifdef USE_ENVMAP
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
#endif`,HS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,VS=`#ifdef USE_ENVMAP
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
#endif`,GS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,WS=`#ifdef USE_ENVMAP
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
#endif`,XS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,KS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,YS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qS=`#ifdef USE_GRADIENTMAP
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
}`,ZS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,QS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,JS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$S=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,eM=`#ifdef USE_ENVMAP
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
#endif`,tM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sM=`PhysicalMaterial material;
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
#endif`,oM=`uniform sampler2D dfgLUT;
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
}`,aM=`
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
#endif`,lM=`#if defined( RE_IndirectDiffuse )
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
#endif`,cM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uM=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,fM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_M=`#if defined( USE_POINTS_UV )
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
#endif`,xM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,SM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,MM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,AM=`#ifdef USE_MORPHTARGETS
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
#endif`,wM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,CM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,RM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,LM=`#ifdef USE_NORMALMAP
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
#endif`,IM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,HM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,KM=`float getShadowMask() {
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
}`,YM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qM=`#ifdef USE_SKINNING
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
#endif`,ZM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QM=`#ifdef USE_SKINNING
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
#endif`,JM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$M=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ey=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ty=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ny=`#ifdef USE_TRANSMISSION
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
#endif`,iy=`#ifdef USE_TRANSMISSION
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
#endif`,ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ay=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ly=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cy=`uniform sampler2D t2D;
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
}`,uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,py=`#include <common>
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
}`,my=`#if DEPTH_PACKING == 3200
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
}`,gy=`#define DISTANCE
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
}`,vy=`#define DISTANCE
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
}`,_y=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sy=`uniform float scale;
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
}`,My=`uniform vec3 diffuse;
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
}`,yy=`#include <common>
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
}`,Ey=`uniform vec3 diffuse;
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
}`,Ay=`#define LAMBERT
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
}`,wy=`#define LAMBERT
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
}`,Ty=`#define MATCAP
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
}`,Cy=`#define MATCAP
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
}`,Ry=`#define NORMAL
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
}`,by=`#define NORMAL
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
}`,Py=`#define PHONG
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
}`,Ly=`#define PHONG
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
}`,Iy=`#define STANDARD
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
}`,Dy=`#define STANDARD
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
}`,Ny=`#define TOON
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
}`,Uy=`#define TOON
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
}`,Fy=`uniform float size;
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
}`,Oy=`uniform vec3 diffuse;
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
}`,ky=`#include <common>
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
}`,By=`uniform vec3 color;
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
}`,zy=`uniform float rotation;
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
}`,Hy=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:lS,alphahash_pars_fragment:cS,alphamap_fragment:uS,alphamap_pars_fragment:fS,alphatest_fragment:hS,alphatest_pars_fragment:dS,aomap_fragment:pS,aomap_pars_fragment:mS,batching_pars_vertex:gS,batching_vertex:vS,begin_vertex:_S,beginnormal_vertex:xS,bsdfs:SS,iridescence_fragment:MS,bumpmap_pars_fragment:yS,clipping_planes_fragment:ES,clipping_planes_pars_fragment:AS,clipping_planes_pars_vertex:wS,clipping_planes_vertex:TS,color_fragment:CS,color_pars_fragment:RS,color_pars_vertex:bS,color_vertex:PS,common:LS,cube_uv_reflection_fragment:IS,defaultnormal_vertex:DS,displacementmap_pars_vertex:NS,displacementmap_vertex:US,emissivemap_fragment:FS,emissivemap_pars_fragment:OS,colorspace_fragment:kS,colorspace_pars_fragment:BS,envmap_fragment:zS,envmap_common_pars_fragment:HS,envmap_pars_fragment:VS,envmap_pars_vertex:GS,envmap_physical_pars_fragment:eM,envmap_vertex:WS,fog_vertex:XS,fog_pars_vertex:jS,fog_fragment:KS,fog_pars_fragment:YS,gradientmap_pars_fragment:qS,lightmap_pars_fragment:ZS,lights_lambert_fragment:QS,lights_lambert_pars_fragment:JS,lights_pars_begin:$S,lights_toon_fragment:tM,lights_toon_pars_fragment:nM,lights_phong_fragment:iM,lights_phong_pars_fragment:rM,lights_physical_fragment:sM,lights_physical_pars_fragment:oM,lights_fragment_begin:aM,lights_fragment_maps:lM,lights_fragment_end:cM,lightprobes_pars_fragment:uM,logdepthbuf_fragment:fM,logdepthbuf_pars_fragment:hM,logdepthbuf_pars_vertex:dM,logdepthbuf_vertex:pM,map_fragment:mM,map_pars_fragment:gM,map_particle_fragment:vM,map_particle_pars_fragment:_M,metalnessmap_fragment:xM,metalnessmap_pars_fragment:SM,morphinstance_vertex:MM,morphcolor_vertex:yM,morphnormal_vertex:EM,morphtarget_pars_vertex:AM,morphtarget_vertex:wM,normal_fragment_begin:TM,normal_fragment_maps:CM,normal_pars_fragment:RM,normal_pars_vertex:bM,normal_vertex:PM,normalmap_pars_fragment:LM,clearcoat_normal_fragment_begin:IM,clearcoat_normal_fragment_maps:DM,clearcoat_pars_fragment:NM,iridescence_pars_fragment:UM,opaque_fragment:FM,packing:OM,premultiplied_alpha_fragment:kM,project_vertex:BM,dithering_fragment:zM,dithering_pars_fragment:HM,roughnessmap_fragment:VM,roughnessmap_pars_fragment:GM,shadowmap_pars_fragment:WM,shadowmap_pars_vertex:XM,shadowmap_vertex:jM,shadowmask_pars_fragment:KM,skinbase_vertex:YM,skinning_pars_vertex:qM,skinning_vertex:ZM,skinnormal_vertex:QM,specularmap_fragment:JM,specularmap_pars_fragment:$M,tonemapping_fragment:ey,tonemapping_pars_fragment:ty,transmission_fragment:ny,transmission_pars_fragment:iy,uv_pars_fragment:ry,uv_pars_vertex:sy,uv_vertex:oy,worldpos_vertex:ay,background_vert:ly,background_frag:cy,backgroundCube_vert:uy,backgroundCube_frag:fy,cube_vert:hy,cube_frag:dy,depth_vert:py,depth_frag:my,distance_vert:gy,distance_frag:vy,equirect_vert:_y,equirect_frag:xy,linedashed_vert:Sy,linedashed_frag:My,meshbasic_vert:yy,meshbasic_frag:Ey,meshlambert_vert:Ay,meshlambert_frag:wy,meshmatcap_vert:Ty,meshmatcap_frag:Cy,meshnormal_vert:Ry,meshnormal_frag:by,meshphong_vert:Py,meshphong_frag:Ly,meshphysical_vert:Iy,meshphysical_frag:Dy,meshtoon_vert:Ny,meshtoon_frag:Uy,points_vert:Fy,points_frag:Oy,shadow_vert:ky,shadow_frag:By,sprite_vert:zy,sprite_frag:Hy},He={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Wi={basic:{uniforms:Hn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:Hn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:Hn([He.common,He.specularmap,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.fog,He.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:Hn([He.common,He.envmap,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.roughnessmap,He.metalnessmap,He.fog,He.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:Hn([He.common,He.aomap,He.lightmap,He.emissivemap,He.bumpmap,He.normalmap,He.displacementmap,He.gradientmap,He.fog,He.lights,{emissive:{value:new Bt(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:Hn([He.common,He.bumpmap,He.normalmap,He.displacementmap,He.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:Hn([He.points,He.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:Hn([He.common,He.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:Hn([He.common,He.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:Hn([He.common,He.bumpmap,He.normalmap,He.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:Hn([He.sprite,He.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distance:{uniforms:Hn([He.common,He.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distance_vert,fragmentShader:St.distance_frag},shadow:{uniforms:Hn([He.lights,He.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};Wi.physical={uniforms:Hn([Wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const Gl={r:0,b:0,g:0},Vy=new on,Eg=new vt;Eg.set(-1,0,0,0,1,0,0,0,1);function Gy(s,e,t,r,a,l){const u=new Bt(0);let h=a===!0?0:1,p,d,v=null,_=0,g=null;function M(R){let I=R.isScene===!0?R.background:null;if(I&&I.isTexture){const b=R.backgroundBlurriness>0;I=e.get(I,b)}return I}function E(R){let I=!1;const b=M(R);b===null?x(u,h):b&&b.isColor&&(x(b,1),I=!0);const V=s.xr.getEnvironmentBlendMode();V==="additive"?t.buffers.color.setClear(0,0,0,1,l):V==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(R,I){const b=M(I);b&&(b.isCubeTexture||b.mapping===cc)?(d===void 0&&(d=new si(new va(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:mo(Wi.backgroundCube.uniforms),vertexShader:Wi.backgroundCube.vertexShader,fragmentShader:Wi.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(V,D,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=b,d.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Vy.makeRotationFromEuler(I.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&d.material.uniforms.backgroundRotation.value.premultiply(Eg),d.material.toneMapped=Tt.getTransfer(b.colorSpace)!==Ht,(v!==b||_!==b.version||g!==s.toneMapping)&&(d.material.needsUpdate=!0,v=b,_=b.version,g=s.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null)):b&&b.isTexture&&(p===void 0&&(p=new si(new uc(2,2),new xi({name:"BackgroundMaterial",uniforms:mo(Wi.background.uniforms),vertexShader:Wi.background.vertexShader,fragmentShader:Wi.background.fragmentShader,side:Xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=b,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.toneMapped=Tt.getTransfer(b.colorSpace)!==Ht,b.matrixAutoUpdate===!0&&b.updateMatrix(),p.material.uniforms.uvTransform.value.copy(b.matrix),(v!==b||_!==b.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,v=b,_=b.version,g=s.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null))}function x(R,I){R.getRGB(Gl,xg(s)),t.buffers.color.setClear(Gl.r,Gl.g,Gl.b,I,l)}function S(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return u},setClearColor:function(R,I=1){u.set(R),h=I,x(u,h)},getClearAlpha:function(){return h},setClearAlpha:function(R){h=R,x(u,h)},render:E,addToRenderList:C,dispose:S}}function Wy(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=g(null);let l=a,u=!1;function h(B,z,Q,te,G){let $=!1;const W=_(B,te,Q,z);l!==W&&(l=W,d(l.object)),$=M(B,te,Q,G),$&&E(B,te,Q,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),($||u)&&(u=!1,b(B,z,Q,te),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function p(){return s.createVertexArray()}function d(B){return s.bindVertexArray(B)}function v(B){return s.deleteVertexArray(B)}function _(B,z,Q,te){const G=te.wireframe===!0;let $=r[z.id];$===void 0&&($={},r[z.id]=$);const W=B.isInstancedMesh===!0?B.id:0;let Y=$[W];Y===void 0&&(Y={},$[W]=Y);let F=Y[Q.id];F===void 0&&(F={},Y[Q.id]=F);let ee=F[G];return ee===void 0&&(ee=g(p()),F[G]=ee),ee}function g(B){const z=[],Q=[],te=[];for(let G=0;G<t;G++)z[G]=0,Q[G]=0,te[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Q,attributeDivisors:te,object:B,attributes:{},index:null}}function M(B,z,Q,te){const G=l.attributes,$=z.attributes;let W=0;const Y=Q.getAttributes();for(const F in Y)if(Y[F].location>=0){const L=G[F];let H=$[F];if(H===void 0&&(F==="instanceMatrix"&&B.instanceMatrix&&(H=B.instanceMatrix),F==="instanceColor"&&B.instanceColor&&(H=B.instanceColor)),L===void 0||L.attribute!==H||H&&L.data!==H.data)return!0;W++}return l.attributesNum!==W||l.index!==te}function E(B,z,Q,te){const G={},$=z.attributes;let W=0;const Y=Q.getAttributes();for(const F in Y)if(Y[F].location>=0){let L=$[F];L===void 0&&(F==="instanceMatrix"&&B.instanceMatrix&&(L=B.instanceMatrix),F==="instanceColor"&&B.instanceColor&&(L=B.instanceColor));const H={};H.attribute=L,L&&L.data&&(H.data=L.data),G[F]=H,W++}l.attributes=G,l.attributesNum=W,l.index=te}function C(){const B=l.newAttributes;for(let z=0,Q=B.length;z<Q;z++)B[z]=0}function x(B){S(B,0)}function S(B,z){const Q=l.newAttributes,te=l.enabledAttributes,G=l.attributeDivisors;Q[B]=1,te[B]===0&&(s.enableVertexAttribArray(B),te[B]=1),G[B]!==z&&(s.vertexAttribDivisor(B,z),G[B]=z)}function R(){const B=l.newAttributes,z=l.enabledAttributes;for(let Q=0,te=z.length;Q<te;Q++)z[Q]!==B[Q]&&(s.disableVertexAttribArray(Q),z[Q]=0)}function I(B,z,Q,te,G,$,W){W===!0?s.vertexAttribIPointer(B,z,Q,G,$):s.vertexAttribPointer(B,z,Q,te,G,$)}function b(B,z,Q,te){C();const G=te.attributes,$=Q.getAttributes(),W=z.defaultAttributeValues;for(const Y in $){const F=$[Y];if(F.location>=0){let ee=G[Y];if(ee===void 0&&(Y==="instanceMatrix"&&B.instanceMatrix&&(ee=B.instanceMatrix),Y==="instanceColor"&&B.instanceColor&&(ee=B.instanceColor)),ee!==void 0){const L=ee.normalized,H=ee.itemSize,xe=e.get(ee);if(xe===void 0)continue;const _e=xe.buffer,ve=xe.type,X=xe.bytesPerElement,ce=ve===s.INT||ve===s.UNSIGNED_INT||ee.gpuType===bh;if(ee.isInterleavedBufferAttribute){const fe=ee.data,Ae=fe.stride,De=ee.offset;if(fe.isInstancedInterleavedBuffer){for(let Be=0;Be<F.locationSize;Be++)S(F.location+Be,fe.meshPerAttribute);B.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Be=0;Be<F.locationSize;Be++)x(F.location+Be);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let Be=0;Be<F.locationSize;Be++)I(F.location+Be,H/F.locationSize,ve,L,Ae*X,(De+H/F.locationSize*Be)*X,ce)}else{if(ee.isInstancedBufferAttribute){for(let fe=0;fe<F.locationSize;fe++)S(F.location+fe,ee.meshPerAttribute);B.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let fe=0;fe<F.locationSize;fe++)x(F.location+fe);s.bindBuffer(s.ARRAY_BUFFER,_e);for(let fe=0;fe<F.locationSize;fe++)I(F.location+fe,H/F.locationSize,ve,L,H*X,H/F.locationSize*fe*X,ce)}}else if(W!==void 0){const L=W[Y];if(L!==void 0)switch(L.length){case 2:s.vertexAttrib2fv(F.location,L);break;case 3:s.vertexAttrib3fv(F.location,L);break;case 4:s.vertexAttrib4fv(F.location,L);break;default:s.vertexAttrib1fv(F.location,L)}}}}R()}function V(){N();for(const B in r){const z=r[B];for(const Q in z){const te=z[Q];for(const G in te){const $=te[G];for(const W in $)v($[W].object),delete $[W];delete te[G]}}delete r[B]}}function D(B){if(r[B.id]===void 0)return;const z=r[B.id];for(const Q in z){const te=z[Q];for(const G in te){const $=te[G];for(const W in $)v($[W].object),delete $[W];delete te[G]}}delete r[B.id]}function k(B){for(const z in r){const Q=r[z];for(const te in Q){const G=Q[te];if(G[B.id]===void 0)continue;const $=G[B.id];for(const W in $)v($[W].object),delete $[W];delete G[B.id]}}}function w(B){for(const z in r){const Q=r[z],te=B.isInstancedMesh===!0?B.id:0,G=Q[te];if(G!==void 0){for(const $ in G){const W=G[$];for(const Y in W)v(W[Y].object),delete W[Y];delete G[$]}delete Q[te],Object.keys(Q).length===0&&delete r[z]}}}function N(){q(),u=!0,l!==a&&(l=a,d(l.object))}function q(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:h,reset:N,resetDefaultState:q,dispose:V,releaseStatesOfGeometry:D,releaseStatesOfObject:w,releaseStatesOfProgram:k,initAttributes:C,enableAttribute:x,disableUnusedAttributes:R}}function Xy(s,e,t){let r;function a(p){r=p}function l(p,d){s.drawArrays(r,p,d),t.update(d,r,1)}function u(p,d,v){v!==0&&(s.drawArraysInstanced(r,p,d,v),t.update(d,r,v))}function h(p,d,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,d,0,v);let g=0;for(let M=0;M<v;M++)g+=d[M];t.update(g,r,1)}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=h}function jy(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(k){return!(k!==_i&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(k){const w=k===mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==vi&&r.convert(k)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==Fi&&!w)}function p(k){if(k==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=t.precision!==void 0?t.precision:"highp";const v=p(d);v!==d&&(ct("WebGLRenderer:",d,"not supported, using",v,"instead."),d=v);const _=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),S=s.getParameter(s.MAX_VERTEX_ATTRIBS),R=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),V=s.getParameter(s.MAX_SAMPLES),D=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:u,textureTypeReadable:h,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:x,maxAttributes:S,maxVertexUniforms:R,maxVaryings:I,maxFragmentUniforms:b,maxSamples:V,samples:D}}function Ky(s){const e=this;let t=null,r=0,a=!1,l=!1;const u=new hs,h=new vt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const M=_.length!==0||g||r!==0||a;return a=g,r=_.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,g){t=v(_,g,0)},this.setState=function(_,g,M){const E=_.clippingPlanes,C=_.clipIntersection,x=_.clipShadows,S=s.get(_);if(!a||E===null||E.length===0||l&&!x)l?v(null):d();else{const R=l?0:r,I=R*4;let b=S.clippingState||null;p.value=b,b=v(E,g,I,M);for(let V=0;V!==I;++V)b[V]=t[V];S.clippingState=b,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=R}};function d(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,g,M,E){const C=_!==null?_.length:0;let x=null;if(C!==0){if(x=p.value,E!==!0||x===null){const S=M+C*4,R=g.matrixWorldInverse;h.getNormalMatrix(R),(x===null||x.length<S)&&(x=new Float32Array(S));for(let I=0,b=M;I!==C;++I,b+=4)u.copy(_[I]).applyMatrix4(R,h),u.normal.toArray(x,b),x[b+3]=u.constant}p.value=x,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,x}}const Wr=4,$m=[.125,.215,.35,.446,.526,.582],ps=20,Yy=256,ra=new Mg,e0=new Bt;let Mf=null,yf=0,Ef=0,Af=!1;const qy=new ie;class t0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,a=100,l={}){const{size:u=256,position:h=qy}=l;Mf=this._renderer.getRenderTarget(),yf=this._renderer.getActiveCubeFace(),Ef=this._renderer.getActiveMipmapLevel(),Af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,a,p,h),t>0&&this._blur(p,0,0,t),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=r0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=i0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Mf,yf,Ef),this._renderer.xr.enabled=Af,e.scissorTest=!1,io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vs||e.mapping===ho?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Mf=this._renderer.getRenderTarget(),yf=this._renderer.getActiveCubeFace(),Ef=this._renderer.getActiveMipmapLevel(),Af=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:mr,format:_i,colorSpace:nc,depthBuffer:!1},a=n0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=n0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Zy(l)),this._blurMaterial=Jy(l,e,t),this._ggxMaterial=Qy(l,e,t)}return a}_compileMaterial(e){const t=new si(new Zn,e);this._renderer.compile(t,ra)}_sceneToCubeUV(e,t,r,a,l){const p=new gi(90,1,t,r),d=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,M=_.toneMapping;_.getClearColor(e0),_.toneMapping=ji,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(a),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new si(new va,new pg({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,x=C.material;let S=!1;const R=e.background;R?R.isColor&&(x.color.copy(R),e.background=null,S=!0):(x.color.copy(e0),S=!0);for(let I=0;I<6;I++){const b=I%3;b===0?(p.up.set(0,d[I],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+v[I],l.y,l.z)):b===1?(p.up.set(0,0,d[I]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+v[I],l.z)):(p.up.set(0,d[I],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+v[I]));const V=this._cubeSize;io(a,b*V,I>2?V:0,V,V),_.setRenderTarget(a),S&&_.render(C,p),_.render(e,p)}_.toneMapping=M,_.autoClear=g,e.background=R}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===vs||e.mapping===ho;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=r0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=i0());const l=a?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const h=l.uniforms;h.envMap.value=e;const p=this._cubeSize;io(t,0,0,3*p,2*p),r.setRenderTarget(t),r.render(u,ra)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const a=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,h=this._lodMeshes[r];h.material=u;const p=u.uniforms,d=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),_=Math.sqrt(d*d-v*v),g=0+d*1.25,M=_*g,{_lodMax:E}=this,C=this._sizeLods[r],x=3*C*(r>E-Wr?r-E+Wr:0),S=4*(this._cubeSize-C);p.envMap.value=e.texture,p.roughness.value=M,p.mipInt.value=E-t,io(l,x,S,3*C,2*C),a.setRenderTarget(l),a.render(h,ra),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=E-r,io(e,x,S,3*C,2*C),a.setRenderTarget(e),a.render(h,ra)}_blur(e,t,r,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,a,"latitudinal",l),this._halfBlur(u,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,u,h){const p=this._renderer,d=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[a];_.material=d;const g=d.uniforms,M=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*ps-1),C=l/E,x=isFinite(l)?1+Math.floor(v*C):ps;x>ps&&ct(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ps}`);const S=[];let R=0;for(let k=0;k<ps;++k){const w=k/C,N=Math.exp(-w*w/2);S.push(N),k===0?R+=N:k<x&&(R+=2*N)}for(let k=0;k<S.length;k++)S[k]=S[k]/R;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=S,g.latitudinal.value=u==="latitudinal",h&&(g.poleAxis.value=h);const{_lodMax:I}=this;g.dTheta.value=E,g.mipInt.value=I-r;const b=this._sizeLods[a],V=3*b*(a>I-Wr?a-I+Wr:0),D=4*(this._cubeSize-b);io(t,V,D,3*b,2*b),p.setRenderTarget(t),p.render(_,ra)}}function Zy(s){const e=[],t=[],r=[];let a=s;const l=s-Wr+1+$m.length;for(let u=0;u<l;u++){const h=Math.pow(2,a);e.push(h);let p=1/h;u>s-Wr?p=$m[u-s+Wr-1]:u===0&&(p=0),t.push(p);const d=1/(h-2),v=-d,_=1+d,g=[v,v,_,v,_,_,v,v,_,_,v,_],M=6,E=6,C=3,x=2,S=1,R=new Float32Array(C*E*M),I=new Float32Array(x*E*M),b=new Float32Array(S*E*M);for(let D=0;D<M;D++){const k=D%3*2/3-1,w=D>2?0:-1,N=[k,w,0,k+2/3,w,0,k+2/3,w+1,0,k,w,0,k+2/3,w+1,0,k,w+1,0];R.set(N,C*E*D),I.set(g,x*E*D);const q=[D,D,D,D,D,D];b.set(q,S*E*D)}const V=new Zn;V.setAttribute("position",new Wt(R,C)),V.setAttribute("uv",new Wt(I,x)),V.setAttribute("faceIndex",new Wt(b,S)),r.push(new si(V,null)),a>Wr&&a--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function n0(s,e,t){const r=new Ki(s,e,t);return r.texture.mapping=cc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function io(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function Qy(s,e,t){return new xi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Yy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:fc(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Jy(s,e,t){const r=new Float32Array(ps),a=new ie(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:fc(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function i0(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function r0(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function fc(){return`

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
	`}class Ag extends Ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new vg(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new va(5,5,5),l=new xi({name:"CubemapFromEquirect",uniforms:mo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:qn,blending:hr});l.uniforms.tEquirect.value=t;const u=new si(a,l),h=t.minFilter;return t.minFilter===ms&&(t.minFilter=Mn),new rS(1,10,this).update(e,u),t.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,a);e.setRenderTarget(l)}}function $y(s){let e=new WeakMap,t=new WeakMap,r=null;function a(g,M=!1){return g==null?null:M?u(g):l(g)}function l(g){if(g&&g.isTexture){const M=g.mapping;if(M===Ku||M===Yu)if(e.has(g)){const E=e.get(g).texture;return h(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const C=new Ag(E.height);return C.fromEquirectangularTexture(s,g),e.set(g,C),g.addEventListener("dispose",d),h(C.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const M=g.mapping,E=M===Ku||M===Yu,C=M===vs||M===ho;if(E||C){let x=t.get(g);const S=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return r===null&&(r=new t0(s)),x=E?r.fromEquirectangular(g,x):r.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),x.texture;if(x!==void 0)return x.texture;{const R=g.image;return E&&R&&R.height>0||C&&R&&p(R)?(r===null&&(r=new t0(s)),x=E?r.fromEquirectangular(g):r.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),g.addEventListener("dispose",v),x.texture):null}}}return g}function h(g,M){return M===Ku?g.mapping=vs:M===Yu&&(g.mapping=ho),g}function p(g){let M=0;const E=6;for(let C=0;C<E;C++)g[C]!==void 0&&M++;return M===E}function d(g){const M=g.target;M.removeEventListener("dispose",d);const E=e.get(M);E!==void 0&&(e.delete(M),E.dispose())}function v(g){const M=g.target;M.removeEventListener("dispose",v);const E=t.get(M);E!==void 0&&(t.delete(M),E.dispose())}function _(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:_}}function eE(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const a=s.getExtension(r);return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&yh("WebGLRenderer: "+r+" extension not supported."),a}}}function tE(s,e,t,r){const a={},l=new WeakMap;function u(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",u),delete a[g.id];const M=l.get(g);M&&(e.remove(M),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function h(_,g){return a[g.id]===!0||(g.addEventListener("dispose",u),a[g.id]=!0,t.memory.geometries++),g}function p(_){const g=_.attributes;for(const M in g)e.update(g[M],s.ARRAY_BUFFER)}function d(_){const g=[],M=_.index,E=_.attributes.position;let C=0;if(E===void 0)return;if(M!==null){const R=M.array;C=M.version;for(let I=0,b=R.length;I<b;I+=3){const V=R[I+0],D=R[I+1],k=R[I+2];g.push(V,D,D,k,k,V)}}else{const R=E.array;C=E.version;for(let I=0,b=R.length/3-1;I<b;I+=3){const V=I+0,D=I+1,k=I+2;g.push(V,D,D,k,k,V)}}const x=new(E.count>=65535?dg:hg)(g,1);x.version=C;const S=l.get(_);S&&e.remove(S),l.set(_,x)}function v(_){const g=l.get(_);if(g){const M=_.index;M!==null&&g.version<M.version&&d(_)}else d(_);return l.get(_)}return{get:h,update:p,getWireframeAttribute:v}}function nE(s,e,t){let r;function a(_){r=_}let l,u;function h(_){l=_.type,u=_.bytesPerElement}function p(_,g){s.drawElements(r,g,l,_*u),t.update(g,r,1)}function d(_,g,M){M!==0&&(s.drawElementsInstanced(r,g,l,_*u,M),t.update(g,r,M))}function v(_,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,_,0,M);let C=0;for(let x=0;x<M;x++)C+=g[x];t.update(C,r,1)}this.setMode=a,this.setIndex=h,this.render=p,this.renderInstances=d,this.renderMultiDraw=v}function iE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,h){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=h*(l/3);break;case s.LINES:t.lines+=h*(l/2);break;case s.LINE_STRIP:t.lines+=h*(l-1);break;case s.LINE_LOOP:t.lines+=h*l;break;case s.POINTS:t.points+=h*l;break;default:Pt("WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function rE(s,e,t){const r=new WeakMap,a=new sn;function l(u,h,p){const d=u.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=v!==void 0?v.length:0;let g=r.get(h);if(g===void 0||g.count!==_){let N=function(){k.dispose(),r.delete(h),h.removeEventListener("dispose",N)};g!==void 0&&g.texture.dispose();const M=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,x=h.morphAttributes.position||[],S=h.morphAttributes.normal||[],R=h.morphAttributes.color||[];let I=0;M===!0&&(I=1),E===!0&&(I=2),C===!0&&(I=3);let b=h.attributes.position.count*I,V=1;b>e.maxTextureSize&&(V=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const D=new Float32Array(b*V*4*_),k=new cg(D,b,V,_);k.type=Fi,k.needsUpdate=!0;const w=I*4;for(let q=0;q<_;q++){const B=x[q],z=S[q],Q=R[q],te=b*V*4*q;for(let G=0;G<B.count;G++){const $=G*w;M===!0&&(a.fromBufferAttribute(B,G),D[te+$+0]=a.x,D[te+$+1]=a.y,D[te+$+2]=a.z,D[te+$+3]=0),E===!0&&(a.fromBufferAttribute(z,G),D[te+$+4]=a.x,D[te+$+5]=a.y,D[te+$+6]=a.z,D[te+$+7]=0),C===!0&&(a.fromBufferAttribute(Q,G),D[te+$+8]=a.x,D[te+$+9]=a.y,D[te+$+10]=a.z,D[te+$+11]=Q.itemSize===4?a.w:1)}}g={count:_,texture:k,size:new Nt(b,V)},r.set(h,g),h.addEventListener("dispose",N)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let M=0;for(let C=0;C<d.length;C++)M+=d[C];const E=h.morphTargetsRelative?1:1-M;p.getUniforms().setValue(s,"morphTargetBaseInfluence",E),p.getUniforms().setValue(s,"morphTargetInfluences",d)}p.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function sE(s,e,t,r,a){let l=new WeakMap;function u(d){const v=a.render.frame,_=d.geometry,g=e.get(d,_);if(l.get(g)!==v&&(e.update(g),l.set(g,v)),d.isInstancedMesh&&(d.hasEventListener("dispose",p)===!1&&d.addEventListener("dispose",p),l.get(d)!==v&&(t.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,s.ARRAY_BUFFER),l.set(d,v))),d.isSkinnedMesh){const M=d.skeleton;l.get(M)!==v&&(M.update(),l.set(M,v))}return g}function h(){l=new WeakMap}function p(d){const v=d.target;v.removeEventListener("dispose",p),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:h}}const oE={[K0]:"LINEAR_TONE_MAPPING",[Y0]:"REINHARD_TONE_MAPPING",[q0]:"CINEON_TONE_MAPPING",[Z0]:"ACES_FILMIC_TONE_MAPPING",[J0]:"AGX_TONE_MAPPING",[$0]:"NEUTRAL_TONE_MAPPING",[Q0]:"CUSTOM_TONE_MAPPING"};function aE(s,e,t,r,a){const l=new Ki(e,t,{type:s,depthBuffer:r,stencilBuffer:a,depthTexture:r?new po(e,t):void 0}),u=new Ki(e,t,{type:mr,depthBuffer:!1,stencilBuffer:!1}),h=new Zn;h.setAttribute("position",new Yi([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Yi([0,2,0,0,2,0],2));const p=new tS({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new si(h,p),v=new Mg(-1,1,1,-1,0,1);let _=null,g=null,M=!1,E,C=null,x=[],S=!1;this.setSize=function(R,I){l.setSize(R,I),u.setSize(R,I);for(let b=0;b<x.length;b++){const V=x[b];V.setSize&&V.setSize(R,I)}},this.setEffects=function(R){x=R,S=x.length>0&&x[0].isRenderPass===!0;const I=l.width,b=l.height;for(let V=0;V<x.length;V++){const D=x[V];D.setSize&&D.setSize(I,b)}},this.begin=function(R,I){if(M||R.toneMapping===ji&&x.length===0)return!1;if(C=I,I!==null){const b=I.width,V=I.height;(l.width!==b||l.height!==V)&&this.setSize(b,V)}return S===!1&&R.setRenderTarget(l),E=R.toneMapping,R.toneMapping=ji,!0},this.hasRenderPass=function(){return S},this.end=function(R,I){R.toneMapping=E,M=!0;let b=l,V=u;for(let D=0;D<x.length;D++){const k=x[D];if(k.enabled!==!1&&(k.render(R,V,b,I),k.needsSwap!==!1)){const w=b;b=V,V=w}}if(_!==R.outputColorSpace||g!==R.toneMapping){_=R.outputColorSpace,g=R.toneMapping,p.defines={},Tt.getTransfer(_)===Ht&&(p.defines.SRGB_TRANSFER="");const D=oE[g];D&&(p.defines[D]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=b.texture,R.setRenderTarget(C),R.render(d,v),C=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){l.depthTexture&&l.depthTexture.dispose(),l.dispose(),u.dispose(),h.dispose(),p.dispose()}}const wg=new Dn,Ah=new po(1,1),Tg=new cg,Cg=new Rx,Rg=new vg,s0=[],o0=[],a0=new Float32Array(16),l0=new Float32Array(9),c0=new Float32Array(4);function xo(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=s0[a];if(l===void 0&&(l=new Float32Array(a),s0[a]=l),e!==0){r.toArray(l,0);for(let u=1,h=0;u!==e;++u)h+=t,s[u].toArray(l,h)}return l}function pn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function mn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function hc(s,e){let t=o0[e];t===void 0&&(t=new Int32Array(e),o0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function lE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function cE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;s.uniform2fv(this.addr,e),mn(t,e)}}function uE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;s.uniform3fv(this.addr,e),mn(t,e)}}function fE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;s.uniform4fv(this.addr,e),mn(t,e)}}function hE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;c0.set(r),s.uniformMatrix2fv(this.addr,!1,c0),mn(t,r)}}function dE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;l0.set(r),s.uniformMatrix3fv(this.addr,!1,l0),mn(t,r)}}function pE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;a0.set(r),s.uniformMatrix4fv(this.addr,!1,a0),mn(t,r)}}function mE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function gE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;s.uniform2iv(this.addr,e),mn(t,e)}}function vE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;s.uniform3iv(this.addr,e),mn(t,e)}}function _E(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;s.uniform4iv(this.addr,e),mn(t,e)}}function xE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function SE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;s.uniform2uiv(this.addr,e),mn(t,e)}}function ME(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;s.uniform3uiv(this.addr,e),mn(t,e)}}function yE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;s.uniform4uiv(this.addr,e),mn(t,e)}}function EE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(Ah.compareFunction=t.isReversedDepthBuffer()?Fh:Uh,l=Ah):l=wg,t.setTexture2D(e||l,a)}function AE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Cg,a)}function wE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Rg,a)}function TE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Tg,a)}function CE(s){switch(s){case 5126:return lE;case 35664:return cE;case 35665:return uE;case 35666:return fE;case 35674:return hE;case 35675:return dE;case 35676:return pE;case 5124:case 35670:return mE;case 35667:case 35671:return gE;case 35668:case 35672:return vE;case 35669:case 35673:return _E;case 5125:return xE;case 36294:return SE;case 36295:return ME;case 36296:return yE;case 35678:case 36198:case 36298:case 36306:case 35682:return EE;case 35679:case 36299:case 36307:return AE;case 35680:case 36300:case 36308:case 36293:return wE;case 36289:case 36303:case 36311:case 36292:return TE}}function RE(s,e){s.uniform1fv(this.addr,e)}function bE(s,e){const t=xo(e,this.size,2);s.uniform2fv(this.addr,t)}function PE(s,e){const t=xo(e,this.size,3);s.uniform3fv(this.addr,t)}function LE(s,e){const t=xo(e,this.size,4);s.uniform4fv(this.addr,t)}function IE(s,e){const t=xo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function DE(s,e){const t=xo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function NE(s,e){const t=xo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function UE(s,e){s.uniform1iv(this.addr,e)}function FE(s,e){s.uniform2iv(this.addr,e)}function OE(s,e){s.uniform3iv(this.addr,e)}function kE(s,e){s.uniform4iv(this.addr,e)}function BE(s,e){s.uniform1uiv(this.addr,e)}function zE(s,e){s.uniform2uiv(this.addr,e)}function HE(s,e){s.uniform3uiv(this.addr,e)}function VE(s,e){s.uniform4uiv(this.addr,e)}function GE(s,e,t){const r=this.cache,a=e.length,l=hc(t,a);pn(r,l)||(s.uniform1iv(this.addr,l),mn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=Ah:u=wg;for(let h=0;h!==a;++h)t.setTexture2D(e[h]||u,l[h])}function WE(s,e,t){const r=this.cache,a=e.length,l=hc(t,a);pn(r,l)||(s.uniform1iv(this.addr,l),mn(r,l));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||Cg,l[u])}function XE(s,e,t){const r=this.cache,a=e.length,l=hc(t,a);pn(r,l)||(s.uniform1iv(this.addr,l),mn(r,l));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||Rg,l[u])}function jE(s,e,t){const r=this.cache,a=e.length,l=hc(t,a);pn(r,l)||(s.uniform1iv(this.addr,l),mn(r,l));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||Tg,l[u])}function KE(s){switch(s){case 5126:return RE;case 35664:return bE;case 35665:return PE;case 35666:return LE;case 35674:return IE;case 35675:return DE;case 35676:return NE;case 5124:case 35670:return UE;case 35667:case 35671:return FE;case 35668:case 35672:return OE;case 35669:case 35673:return kE;case 5125:return BE;case 36294:return zE;case 36295:return HE;case 36296:return VE;case 35678:case 36198:case 36298:case 36306:case 35682:return GE;case 35679:case 36299:case 36307:return WE;case 35680:case 36300:case 36308:case 36293:return XE;case 36289:case 36303:case 36311:case 36292:return jE}}class YE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=CE(t.type)}}class qE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=KE(t.type)}}class ZE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const h=a[l];h.setValue(e,t[h.id],r)}}}const wf=/(\w+)(\])?(\[|\.)?/g;function u0(s,e){s.seq.push(e),s.map[e.id]=e}function QE(s,e,t){const r=s.name,a=r.length;for(wf.lastIndex=0;;){const l=wf.exec(r),u=wf.lastIndex;let h=l[1];const p=l[2]==="]",d=l[3];if(p&&(h=h|0),d===void 0||d==="["&&u+2===a){u0(t,d===void 0?new YE(h,s,e):new qE(h,s,e));break}else{let _=t.map[h];_===void 0&&(_=new ZE(h),u0(t,_)),t=_}}}class Ql{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const h=e.getActiveUniform(t,u),p=e.getUniformLocation(t,h.name);QE(h,p,this)}const a=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(u):l.push(u);a.length>0&&(this.seq=a.concat(l))}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,u=t.length;l!==u;++l){const h=t[l],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in t&&r.push(u)}return r}}function f0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const JE=37297;let $E=0;function e1(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=a;u<l;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${t[u]}`)}return r.join(`
`)}const h0=new vt;function t1(s){Tt._getMatrix(h0,Tt.workingColorSpace,s);const e=`mat3( ${h0.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(s)){case ic:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function d0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+e1(s.getShaderSource(e),h)}else return l}function n1(s,e){const t=t1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const i1={[K0]:"Linear",[Y0]:"Reinhard",[q0]:"Cineon",[Z0]:"ACESFilmic",[J0]:"AgX",[$0]:"Neutral",[Q0]:"Custom"};function r1(s,e){const t=i1[e];return t===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wl=new ie;function s1(){Tt.getLuminanceCoefficients(Wl);const s=Wl.x.toFixed(4),e=Wl.y.toFixed(4),t=Wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function a1(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function l1(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),u=l.name;let h=1;l.type===s.FLOAT_MAT2&&(h=2),l.type===s.FLOAT_MAT3&&(h=3),l.type===s.FLOAT_MAT4&&(h=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:h}}return t}function ca(s){return s!==""}function p0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function m0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const c1=/^[ \t]*#include +<([\w\d./]+)>/gm;function wh(s){return s.replace(c1,f1)}const u1=new Map;function f1(s,e){let t=St[e];if(t===void 0){const r=u1.get(e);if(r!==void 0)t=St[r],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return wh(t)}const h1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function g0(s){return s.replace(h1,d1)}function d1(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function v0(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const p1={[jl]:"SHADOWMAP_TYPE_PCF",[la]:"SHADOWMAP_TYPE_VSM"};function m1(s){return p1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const g1={[vs]:"ENVMAP_TYPE_CUBE",[ho]:"ENVMAP_TYPE_CUBE",[cc]:"ENVMAP_TYPE_CUBE_UV"};function v1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":g1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const _1={[ho]:"ENVMAP_MODE_REFRACTION"};function x1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":_1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const S1={[j0]:"ENVMAP_BLENDING_MULTIPLY",[j_]:"ENVMAP_BLENDING_MIX",[K_]:"ENVMAP_BLENDING_ADD"};function M1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":S1[s.combine]||"ENVMAP_BLENDING_NONE"}function y1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function E1(s,e,t,r){const a=s.getContext(),l=t.defines;let u=t.vertexShader,h=t.fragmentShader;const p=m1(t),d=v1(t),v=x1(t),_=M1(t),g=y1(t),M=o1(t),E=a1(l),C=a.createProgram();let x,S,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ca).join(`
`),x.length>0&&(x+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(ca).join(`
`),S.length>0&&(S+=`
`)):(x=[v0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),S=[v0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.envMap?"#define "+v:"",t.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ji?"#define TONE_MAPPING":"",t.toneMapping!==ji?St.tonemapping_pars_fragment:"",t.toneMapping!==ji?r1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,n1("linearToOutputTexel",t.outputColorSpace),s1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ca).join(`
`)),u=wh(u),u=p0(u,t),u=m0(u,t),h=wh(h),h=p0(h,t),h=m0(h,t),u=g0(u),h=g0(h),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,S=["#define varying in",t.glslVersion===Tm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Tm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const I=R+x+u,b=R+S+h,V=f0(a,a.VERTEX_SHADER,I),D=f0(a,a.FRAGMENT_SHADER,b);a.attachShader(C,V),a.attachShader(C,D),t.index0AttributeName!==void 0?a.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(C,0,"position"),a.linkProgram(C);function k(B){if(s.debug.checkShaderErrors){const z=a.getProgramInfoLog(C)||"",Q=a.getShaderInfoLog(V)||"",te=a.getShaderInfoLog(D)||"",G=z.trim(),$=Q.trim(),W=te.trim();let Y=!0,F=!0;if(a.getProgramParameter(C,a.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,C,V,D);else{const ee=d0(a,V,"vertex"),L=d0(a,D,"fragment");Pt("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(C,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+G+`
`+ee+`
`+L)}else G!==""?ct("WebGLProgram: Program Info Log:",G):($===""||W==="")&&(F=!1);F&&(B.diagnostics={runnable:Y,programLog:G,vertexShader:{log:$,prefix:x},fragmentShader:{log:W,prefix:S}})}a.deleteShader(V),a.deleteShader(D),w=new Ql(a,C),N=l1(a,C)}let w;this.getUniforms=function(){return w===void 0&&k(this),w};let N;this.getAttributes=function(){return N===void 0&&k(this),N};let q=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return q===!1&&(q=a.getProgramParameter(C,JE)),q},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$E++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=V,this.fragmentShader=D,this}let A1=0;class w1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new T1(e),t.set(e,r)),r}}class T1{constructor(e){this.id=A1++,this.code=e,this.usedTimes=0}}function C1(s){return s===_s||s===ec||s===tc}function R1(s,e,t,r,a,l){const u=new ug,h=new w1,p=new Set,d=[],v=new Map,_=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(w){return p.add(w),w===0?"uv":`uv${w}`}function C(w,N,q,B,z,Q){const te=B.fog,G=z.geometry,$=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,W=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,Y=e.get(w.envMap||$,W),F=Y&&Y.mapping===cc?Y.image.height:null,ee=M[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&ct("WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const L=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,H=L!==void 0?L.length:0;let xe=0;G.morphAttributes.position!==void 0&&(xe=1),G.morphAttributes.normal!==void 0&&(xe=2),G.morphAttributes.color!==void 0&&(xe=3);let _e,ve,X,ce;if(ee){const ze=Wi[ee];_e=ze.vertexShader,ve=ze.fragmentShader}else _e=w.vertexShader,ve=w.fragmentShader,h.update(w),X=h.getVertexShaderID(w),ce=h.getFragmentShaderID(w);const fe=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),De=z.isInstancedMesh===!0,Be=z.isBatchedMesh===!0,At=!!w.map,tt=!!w.matcap,ht=!!Y,_t=!!w.aoMap,ft=!!w.lightMap,wt=!!w.bumpMap,Lt=!!w.normalMap,Rt=!!w.displacementMap,U=!!w.emissiveMap,xt=!!w.metalnessMap,nt=!!w.roughnessMap,It=w.anisotropy>0,Fe=w.clearcoat>0,Ot=w.dispersion>0,P=w.iridescence>0,y=w.sheen>0,ne=w.transmission>0,ge=It&&!!w.anisotropyMap,Se=Fe&&!!w.clearcoatMap,Ce=Fe&&!!w.clearcoatNormalMap,Re=Fe&&!!w.clearcoatRoughnessMap,de=P&&!!w.iridescenceMap,pe=P&&!!w.iridescenceThicknessMap,Oe=y&&!!w.sheenColorMap,Ve=y&&!!w.sheenRoughnessMap,Le=!!w.specularMap,be=!!w.specularColorMap,at=!!w.specularIntensityMap,lt=ne&&!!w.transmissionMap,pt=ne&&!!w.thicknessMap,j=!!w.gradientMap,Pe=!!w.alphaMap,me=w.alphaTest>0,Ge=!!w.alphaHash,Ne=!!w.extensions;let Me=ji;w.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Me=s.toneMapping);const We={shaderID:ee,shaderType:w.type,shaderName:w.name,vertexShader:_e,fragmentShader:ve,defines:w.defines,customVertexShaderID:X,customFragmentShaderID:ce,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:Be,batchingColor:Be&&z._colorsTexture!==null,instancing:De,instancingColor:De&&z.instanceColor!==null,instancingMorph:De&&z.morphTexture!==null,outputColorSpace:fe===null?s.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Tt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:At,matcap:tt,envMap:ht,envMapMode:ht&&Y.mapping,envMapCubeUVHeight:F,aoMap:_t,lightMap:ft,bumpMap:wt,normalMap:Lt,displacementMap:Rt,emissiveMap:U,normalMapObjectSpace:Lt&&w.normalMapType===Z_,normalMapTangentSpace:Lt&&w.normalMapType===Em,packedNormalMap:Lt&&w.normalMapType===Em&&C1(w.normalMap.format),metalnessMap:xt,roughnessMap:nt,anisotropy:It,anisotropyMap:ge,clearcoat:Fe,clearcoatMap:Se,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Re,dispersion:Ot,iridescence:P,iridescenceMap:de,iridescenceThicknessMap:pe,sheen:y,sheenColorMap:Oe,sheenRoughnessMap:Ve,specularMap:Le,specularColorMap:be,specularIntensityMap:at,transmission:ne,transmissionMap:lt,thicknessMap:pt,gradientMap:j,opaque:w.transparent===!1&&w.blending===co&&w.alphaToCoverage===!1,alphaMap:Pe,alphaTest:me,alphaHash:Ge,combine:w.combine,mapUv:At&&E(w.map.channel),aoMapUv:_t&&E(w.aoMap.channel),lightMapUv:ft&&E(w.lightMap.channel),bumpMapUv:wt&&E(w.bumpMap.channel),normalMapUv:Lt&&E(w.normalMap.channel),displacementMapUv:Rt&&E(w.displacementMap.channel),emissiveMapUv:U&&E(w.emissiveMap.channel),metalnessMapUv:xt&&E(w.metalnessMap.channel),roughnessMapUv:nt&&E(w.roughnessMap.channel),anisotropyMapUv:ge&&E(w.anisotropyMap.channel),clearcoatMapUv:Se&&E(w.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&E(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&E(w.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&E(w.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&E(w.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&E(w.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&E(w.sheenRoughnessMap.channel),specularMapUv:Le&&E(w.specularMap.channel),specularColorMapUv:be&&E(w.specularColorMap.channel),specularIntensityMapUv:at&&E(w.specularIntensityMap.channel),transmissionMapUv:lt&&E(w.transmissionMap.channel),thicknessMapUv:pt&&E(w.thicknessMap.channel),alphaMapUv:Pe&&E(w.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Lt||It),vertexNormals:!!G.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!G.attributes.uv&&(At||Pe),fog:!!te,useFog:w.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||G.attributes.normal===void 0&&Lt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ae,skinning:z.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:xe,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numLightProbeGrids:Q.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&q.length>0,shadowMapType:s.shadowMap.type,toneMapping:Me,decodeVideoTexture:At&&w.map.isVideoTexture===!0&&Tt.getTransfer(w.map.colorSpace)===Ht,decodeVideoTextureEmissive:U&&w.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(w.emissiveMap.colorSpace)===Ht,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ni,flipSided:w.side===qn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ne&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&w.extensions.multiDraw===!0||Be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return We.vertexUv1s=p.has(1),We.vertexUv2s=p.has(2),We.vertexUv3s=p.has(3),p.clear(),We}function x(w){const N=[];if(w.shaderID?N.push(w.shaderID):(N.push(w.customVertexShaderID),N.push(w.customFragmentShaderID)),w.defines!==void 0)for(const q in w.defines)N.push(q),N.push(w.defines[q]);return w.isRawShaderMaterial===!1&&(S(N,w),R(N,w),N.push(s.outputColorSpace)),N.push(w.customProgramCacheKey),N.join()}function S(w,N){w.push(N.precision),w.push(N.outputColorSpace),w.push(N.envMapMode),w.push(N.envMapCubeUVHeight),w.push(N.mapUv),w.push(N.alphaMapUv),w.push(N.lightMapUv),w.push(N.aoMapUv),w.push(N.bumpMapUv),w.push(N.normalMapUv),w.push(N.displacementMapUv),w.push(N.emissiveMapUv),w.push(N.metalnessMapUv),w.push(N.roughnessMapUv),w.push(N.anisotropyMapUv),w.push(N.clearcoatMapUv),w.push(N.clearcoatNormalMapUv),w.push(N.clearcoatRoughnessMapUv),w.push(N.iridescenceMapUv),w.push(N.iridescenceThicknessMapUv),w.push(N.sheenColorMapUv),w.push(N.sheenRoughnessMapUv),w.push(N.specularMapUv),w.push(N.specularColorMapUv),w.push(N.specularIntensityMapUv),w.push(N.transmissionMapUv),w.push(N.thicknessMapUv),w.push(N.combine),w.push(N.fogExp2),w.push(N.sizeAttenuation),w.push(N.morphTargetsCount),w.push(N.morphAttributeCount),w.push(N.numDirLights),w.push(N.numPointLights),w.push(N.numSpotLights),w.push(N.numSpotLightMaps),w.push(N.numHemiLights),w.push(N.numRectAreaLights),w.push(N.numDirLightShadows),w.push(N.numPointLightShadows),w.push(N.numSpotLightShadows),w.push(N.numSpotLightShadowsWithMaps),w.push(N.numLightProbes),w.push(N.shadowMapType),w.push(N.toneMapping),w.push(N.numClippingPlanes),w.push(N.numClipIntersection),w.push(N.depthPacking)}function R(w,N){u.disableAll(),N.instancing&&u.enable(0),N.instancingColor&&u.enable(1),N.instancingMorph&&u.enable(2),N.matcap&&u.enable(3),N.envMap&&u.enable(4),N.normalMapObjectSpace&&u.enable(5),N.normalMapTangentSpace&&u.enable(6),N.clearcoat&&u.enable(7),N.iridescence&&u.enable(8),N.alphaTest&&u.enable(9),N.vertexColors&&u.enable(10),N.vertexAlphas&&u.enable(11),N.vertexUv1s&&u.enable(12),N.vertexUv2s&&u.enable(13),N.vertexUv3s&&u.enable(14),N.vertexTangents&&u.enable(15),N.anisotropy&&u.enable(16),N.alphaHash&&u.enable(17),N.batching&&u.enable(18),N.dispersion&&u.enable(19),N.batchingColor&&u.enable(20),N.gradientMap&&u.enable(21),N.packedNormalMap&&u.enable(22),N.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),N.fog&&u.enable(0),N.useFog&&u.enable(1),N.flatShading&&u.enable(2),N.logarithmicDepthBuffer&&u.enable(3),N.reversedDepthBuffer&&u.enable(4),N.skinning&&u.enable(5),N.morphTargets&&u.enable(6),N.morphNormals&&u.enable(7),N.morphColors&&u.enable(8),N.premultipliedAlpha&&u.enable(9),N.shadowMapEnabled&&u.enable(10),N.doubleSided&&u.enable(11),N.flipSided&&u.enable(12),N.useDepthPacking&&u.enable(13),N.dithering&&u.enable(14),N.transmission&&u.enable(15),N.sheen&&u.enable(16),N.opaque&&u.enable(17),N.pointsUvs&&u.enable(18),N.decodeVideoTexture&&u.enable(19),N.decodeVideoTextureEmissive&&u.enable(20),N.alphaToCoverage&&u.enable(21),N.numLightProbeGrids>0&&u.enable(22),w.push(u.mask)}function I(w){const N=M[w.type];let q;if(N){const B=Wi[N];q=Jx.clone(B.uniforms)}else q=w.uniforms;return q}function b(w,N){let q=v.get(N);return q!==void 0?++q.usedTimes:(q=new E1(s,N,w,a),d.push(q),v.set(N,q)),q}function V(w){if(--w.usedTimes===0){const N=d.indexOf(w);d[N]=d[d.length-1],d.pop(),v.delete(w.cacheKey),w.destroy()}}function D(w){h.remove(w)}function k(){h.dispose()}return{getParameters:C,getProgramCacheKey:x,getUniforms:I,acquireProgram:b,releaseProgram:V,releaseShaderCache:D,programs:d,dispose:k}}function b1(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let h=s.get(u);return h===void 0&&(h={},s.set(u,h)),h}function r(u){s.delete(u)}function a(u,h,p){s.get(u)[h]=p}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function P1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function _0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function x0(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function u(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function h(g,M,E,C,x,S){let R=s[e];return R===void 0?(R={id:g.id,object:g,geometry:M,material:E,materialVariant:u(g),groupOrder:C,renderOrder:g.renderOrder,z:x,group:S},s[e]=R):(R.id=g.id,R.object=g,R.geometry=M,R.material=E,R.materialVariant=u(g),R.groupOrder=C,R.renderOrder=g.renderOrder,R.z=x,R.group=S),e++,R}function p(g,M,E,C,x,S){const R=h(g,M,E,C,x,S);E.transmission>0?r.push(R):E.transparent===!0?a.push(R):t.push(R)}function d(g,M,E,C,x,S){const R=h(g,M,E,C,x,S);E.transmission>0?r.unshift(R):E.transparent===!0?a.unshift(R):t.unshift(R)}function v(g,M){t.length>1&&t.sort(g||P1),r.length>1&&r.sort(M||_0),a.length>1&&a.sort(M||_0)}function _(){for(let g=e,M=s.length;g<M;g++){const E=s[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:p,unshift:d,finish:_,sort:v}}function L1(){let s=new WeakMap;function e(r,a){const l=s.get(r);let u;return l===void 0?(u=new x0,s.set(r,[u])):a>=l.length?(u=new x0,l.push(u)):u=l[a],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function I1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new Bt};break;case"SpotLight":t={position:new ie,direction:new ie,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":t={color:new Bt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return s[e.id]=t,t}}}function D1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let N1=0;function U1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function F1(s){const e=new I1,t=D1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new ie);const a=new ie,l=new on,u=new on;function h(d){let v=0,_=0,g=0;for(let N=0;N<9;N++)r.probe[N].set(0,0,0);let M=0,E=0,C=0,x=0,S=0,R=0,I=0,b=0,V=0,D=0,k=0;d.sort(U1);for(let N=0,q=d.length;N<q;N++){const B=d[N],z=B.color,Q=B.intensity,te=B.distance;let G=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===_s?G=B.shadow.map.texture:G=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)v+=z.r*Q,_+=z.g*Q,g+=z.b*Q;else if(B.isLightProbe){for(let $=0;$<9;$++)r.probe[$].addScaledVector(B.sh.coefficients[$],Q);k++}else if(B.isDirectionalLight){const $=e.get(B);if($.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const W=B.shadow,Y=t.get(B);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=G,r.directionalShadowMatrix[M]=B.shadow.matrix,R++}r.directional[M]=$,M++}else if(B.isSpotLight){const $=e.get(B);$.position.setFromMatrixPosition(B.matrixWorld),$.color.copy(z).multiplyScalar(Q),$.distance=te,$.coneCos=Math.cos(B.angle),$.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),$.decay=B.decay,r.spot[C]=$;const W=B.shadow;if(B.map&&(r.spotLightMap[V]=B.map,V++,W.updateMatrices(B),B.castShadow&&D++),r.spotLightMatrix[C]=W.matrix,B.castShadow){const Y=t.get(B);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,r.spotShadow[C]=Y,r.spotShadowMap[C]=G,b++}C++}else if(B.isRectAreaLight){const $=e.get(B);$.color.copy(z).multiplyScalar(Q),$.halfWidth.set(B.width*.5,0,0),$.halfHeight.set(0,B.height*.5,0),r.rectArea[x]=$,x++}else if(B.isPointLight){const $=e.get(B);if($.color.copy(B.color).multiplyScalar(B.intensity),$.distance=B.distance,$.decay=B.decay,B.castShadow){const W=B.shadow,Y=t.get(B);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,Y.shadowCameraNear=W.camera.near,Y.shadowCameraFar=W.camera.far,r.pointShadow[E]=Y,r.pointShadowMap[E]=G,r.pointShadowMatrix[E]=B.shadow.matrix,I++}r.point[E]=$,E++}else if(B.isHemisphereLight){const $=e.get(B);$.skyColor.copy(B.color).multiplyScalar(Q),$.groundColor.copy(B.groundColor).multiplyScalar(Q),r.hemi[S]=$,S++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=He.LTC_FLOAT_1,r.rectAreaLTC2=He.LTC_FLOAT_2):(r.rectAreaLTC1=He.LTC_HALF_1,r.rectAreaLTC2=He.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=g;const w=r.hash;(w.directionalLength!==M||w.pointLength!==E||w.spotLength!==C||w.rectAreaLength!==x||w.hemiLength!==S||w.numDirectionalShadows!==R||w.numPointShadows!==I||w.numSpotShadows!==b||w.numSpotMaps!==V||w.numLightProbes!==k)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=x,r.point.length=E,r.hemi.length=S,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=b+V-D,r.spotLightMap.length=V,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=k,w.directionalLength=M,w.pointLength=E,w.spotLength=C,w.rectAreaLength=x,w.hemiLength=S,w.numDirectionalShadows=R,w.numPointShadows=I,w.numSpotShadows=b,w.numSpotMaps=V,w.numLightProbes=k,r.version=N1++)}function p(d,v){let _=0,g=0,M=0,E=0,C=0;const x=v.matrixWorldInverse;for(let S=0,R=d.length;S<R;S++){const I=d[S];if(I.isDirectionalLight){const b=r.directional[_];b.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(x),_++}else if(I.isSpotLight){const b=r.spot[M];b.position.setFromMatrixPosition(I.matrixWorld),b.position.applyMatrix4(x),b.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(x),M++}else if(I.isRectAreaLight){const b=r.rectArea[E];b.position.setFromMatrixPosition(I.matrixWorld),b.position.applyMatrix4(x),u.identity(),l.copy(I.matrixWorld),l.premultiply(x),u.extractRotation(l),b.halfWidth.set(I.width*.5,0,0),b.halfHeight.set(0,I.height*.5,0),b.halfWidth.applyMatrix4(u),b.halfHeight.applyMatrix4(u),E++}else if(I.isPointLight){const b=r.point[g];b.position.setFromMatrixPosition(I.matrixWorld),b.position.applyMatrix4(x),g++}else if(I.isHemisphereLight){const b=r.hemi[C];b.direction.setFromMatrixPosition(I.matrixWorld),b.direction.transformDirection(x),C++}}}return{setup:h,setupView:p,state:r}}function S0(s){const e=new F1(s),t=[],r=[],a=[];function l(g){_.camera=g,t.length=0,r.length=0,a.length=0}function u(g){t.push(g)}function h(g){r.push(g)}function p(g){a.push(g)}function d(){e.setup(t)}function v(g){e.setupView(t,g)}const _={lightsArray:t,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:_,setupLights:d,setupLightsView:v,pushLight:u,pushShadow:h,pushLightProbeGrid:p}}function O1(s){let e=new WeakMap;function t(a,l=0){const u=e.get(a);let h;return u===void 0?(h=new S0(s),e.set(a,[h])):l>=u.length?(h=new S0(s),u.push(h)):h=u[l],h}function r(){e=new WeakMap}return{get:t,dispose:r}}const k1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B1=`uniform sampler2D shadow_pass;
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
}`,z1=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],H1=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],M0=new on,sa=new ie,Tf=new ie;function V1(s,e,t){let r=new gg;const a=new Nt,l=new Nt,u=new sn,h=new nS,p=new iS,d={},v=t.maxTextureSize,_={[Xr]:qn,[qn]:Xr,[Ni]:Ni},g=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:k1,fragmentShader:B1}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const E=new Zn;E.setAttribute("position",new Wt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new si(E,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jl;let S=this.type;this.render=function(D,k,w){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||D.length===0)return;this.type===C_&&(ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=jl);const N=s.getRenderTarget(),q=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),z=s.state;z.setBlending(hr),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const Q=S!==this.type;Q&&k.traverse(function(te){te.material&&(Array.isArray(te.material)?te.material.forEach(G=>G.needsUpdate=!0):te.material.needsUpdate=!0)});for(let te=0,G=D.length;te<G;te++){const $=D[te],W=$.shadow;if(W===void 0){ct("WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);const Y=W.getFrameExtents();a.multiply(Y),l.copy(W.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(l.x=Math.floor(v/Y.x),a.x=l.x*Y.x,W.mapSize.x=l.x),a.y>v&&(l.y=Math.floor(v/Y.y),a.y=l.y*Y.y,W.mapSize.y=l.y));const F=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=F,W.map===null||Q===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===la){if($.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Ki(a.x,a.y,{format:_s,type:mr,minFilter:Mn,magFilter:Mn,generateMipmaps:!1}),W.map.texture.name=$.name+".shadowMap",W.map.depthTexture=new po(a.x,a.y,Fi),W.map.depthTexture.name=$.name+".shadowMapDepth",W.map.depthTexture.format=gr,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=dn,W.map.depthTexture.magFilter=dn}else $.isPointLight?(W.map=new Ag(a.x),W.map.depthTexture=new Zx(a.x,qi)):(W.map=new Ki(a.x,a.y),W.map.depthTexture=new po(a.x,a.y,qi)),W.map.depthTexture.name=$.name+".shadowMap",W.map.depthTexture.format=gr,this.type===jl?(W.map.depthTexture.compareFunction=F?Fh:Uh,W.map.depthTexture.minFilter=Mn,W.map.depthTexture.magFilter=Mn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=dn,W.map.depthTexture.magFilter=dn);W.camera.updateProjectionMatrix()}const ee=W.map.isWebGLCubeRenderTarget?6:1;for(let L=0;L<ee;L++){if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,L),s.clear();else{L===0&&(s.setRenderTarget(W.map),s.clear());const H=W.getViewport(L);u.set(l.x*H.x,l.y*H.y,l.x*H.z,l.y*H.w),z.viewport(u)}if($.isPointLight){const H=W.camera,xe=W.matrix,_e=$.distance||H.far;_e!==H.far&&(H.far=_e,H.updateProjectionMatrix()),sa.setFromMatrixPosition($.matrixWorld),H.position.copy(sa),Tf.copy(H.position),Tf.add(z1[L]),H.up.copy(H1[L]),H.lookAt(Tf),H.updateMatrixWorld(),xe.makeTranslation(-sa.x,-sa.y,-sa.z),M0.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),W._frustum.setFromProjectionMatrix(M0,H.coordinateSystem,H.reversedDepth)}else W.updateMatrices($);r=W.getFrustum(),b(k,w,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===la&&R(W,w),W.needsUpdate=!1}S=this.type,x.needsUpdate=!1,s.setRenderTarget(N,q,B)};function R(D,k){const w=e.update(C);g.defines.VSM_SAMPLES!==D.blurSamples&&(g.defines.VSM_SAMPLES=D.blurSamples,M.defines.VSM_SAMPLES=D.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Ki(a.x,a.y,{format:_s,type:mr})),g.uniforms.shadow_pass.value=D.map.depthTexture,g.uniforms.resolution.value=D.mapSize,g.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(k,null,w,g,C,null),M.uniforms.shadow_pass.value=D.mapPass.texture,M.uniforms.resolution.value=D.mapSize,M.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(k,null,w,M,C,null)}function I(D,k,w,N){let q=null;const B=w.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(B!==void 0)q=B;else if(q=w.isPointLight===!0?p:h,s.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const z=q.uuid,Q=k.uuid;let te=d[z];te===void 0&&(te={},d[z]=te);let G=te[Q];G===void 0&&(G=q.clone(),te[Q]=G,k.addEventListener("dispose",V)),q=G}if(q.visible=k.visible,q.wireframe=k.wireframe,N===la?q.side=k.shadowSide!==null?k.shadowSide:k.side:q.side=k.shadowSide!==null?k.shadowSide:_[k.side],q.alphaMap=k.alphaMap,q.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,q.map=k.map,q.clipShadows=k.clipShadows,q.clippingPlanes=k.clippingPlanes,q.clipIntersection=k.clipIntersection,q.displacementMap=k.displacementMap,q.displacementScale=k.displacementScale,q.displacementBias=k.displacementBias,q.wireframeLinewidth=k.wireframeLinewidth,q.linewidth=k.linewidth,w.isPointLight===!0&&q.isMeshDistanceMaterial===!0){const z=s.properties.get(q);z.light=w}return q}function b(D,k,w,N,q){if(D.visible===!1)return;if(D.layers.test(k.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&q===la)&&(!D.frustumCulled||r.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,D.matrixWorld);const Q=e.update(D),te=D.material;if(Array.isArray(te)){const G=Q.groups;for(let $=0,W=G.length;$<W;$++){const Y=G[$],F=te[Y.materialIndex];if(F&&F.visible){const ee=I(D,F,N,q);D.onBeforeShadow(s,D,k,w,Q,ee,Y),s.renderBufferDirect(w,null,Q,ee,D,Y),D.onAfterShadow(s,D,k,w,Q,ee,Y)}}}else if(te.visible){const G=I(D,te,N,q);D.onBeforeShadow(s,D,k,w,Q,G,null),s.renderBufferDirect(w,null,Q,G,D,null),D.onAfterShadow(s,D,k,w,Q,G,null)}}const z=D.children;for(let Q=0,te=z.length;Q<te;Q++)b(z[Q],k,w,N,q)}function V(D){D.target.removeEventListener("dispose",V);for(const w in d){const N=d[w],q=D.target.uuid;q in N&&(N[q].dispose(),delete N[q])}}}function G1(s,e){function t(){let j=!1;const Pe=new sn;let me=null;const Ge=new sn(0,0,0,0);return{setMask:function(Ne){me!==Ne&&!j&&(s.colorMask(Ne,Ne,Ne,Ne),me=Ne)},setLocked:function(Ne){j=Ne},setClear:function(Ne,Me,We,ze,mt){mt===!0&&(Ne*=ze,Me*=ze,We*=ze),Pe.set(Ne,Me,We,ze),Ge.equals(Pe)===!1&&(s.clearColor(Ne,Me,We,ze),Ge.copy(Pe))},reset:function(){j=!1,me=null,Ge.set(-1,0,0,0)}}}function r(){let j=!1,Pe=!1,me=null,Ge=null,Ne=null;return{setReversed:function(Me){if(Pe!==Me){const We=e.get("EXT_clip_control");Me?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Pe=Me;const ze=Ne;Ne=null,this.setClear(ze)}},getReversed:function(){return Pe},setTest:function(Me){Me?fe(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(Me){me!==Me&&!j&&(s.depthMask(Me),me=Me)},setFunc:function(Me){if(Pe&&(Me=ox[Me]),Ge!==Me){switch(Me){case kf:s.depthFunc(s.NEVER);break;case Bf:s.depthFunc(s.ALWAYS);break;case zf:s.depthFunc(s.LESS);break;case fo:s.depthFunc(s.LEQUAL);break;case Hf:s.depthFunc(s.EQUAL);break;case Vf:s.depthFunc(s.GEQUAL);break;case Gf:s.depthFunc(s.GREATER);break;case Wf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ge=Me}},setLocked:function(Me){j=Me},setClear:function(Me){Ne!==Me&&(Ne=Me,Pe&&(Me=1-Me),s.clearDepth(Me))},reset:function(){j=!1,me=null,Ge=null,Ne=null,Pe=!1}}}function a(){let j=!1,Pe=null,me=null,Ge=null,Ne=null,Me=null,We=null,ze=null,mt=null;return{setTest:function(Ct){j||(Ct?fe(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(Ct){Pe!==Ct&&!j&&(s.stencilMask(Ct),Pe=Ct)},setFunc:function(Ct,an,Nn){(me!==Ct||Ge!==an||Ne!==Nn)&&(s.stencilFunc(Ct,an,Nn),me=Ct,Ge=an,Ne=Nn)},setOp:function(Ct,an,Nn){(Me!==Ct||We!==an||ze!==Nn)&&(s.stencilOp(Ct,an,Nn),Me=Ct,We=an,ze=Nn)},setLocked:function(Ct){j=Ct},setClear:function(Ct){mt!==Ct&&(s.clearStencil(Ct),mt=Ct)},reset:function(){j=!1,Pe=null,me=null,Ge=null,Ne=null,Me=null,We=null,ze=null,mt=null}}}const l=new t,u=new r,h=new a,p=new WeakMap,d=new WeakMap;let v={},_={},g={},M=new WeakMap,E=[],C=null,x=!1,S=null,R=null,I=null,b=null,V=null,D=null,k=null,w=new Bt(0,0,0),N=0,q=!1,B=null,z=null,Q=null,te=null,G=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Y=0;const F=s.getParameter(s.VERSION);F.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(F)[1]),W=Y>=1):F.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),W=Y>=2);let ee=null,L={};const H=s.getParameter(s.SCISSOR_BOX),xe=s.getParameter(s.VIEWPORT),_e=new sn().fromArray(H),ve=new sn().fromArray(xe);function X(j,Pe,me,Ge){const Ne=new Uint8Array(4),Me=s.createTexture();s.bindTexture(j,Me),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let We=0;We<me;We++)j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?s.texImage3D(Pe,0,s.RGBA,1,1,Ge,0,s.RGBA,s.UNSIGNED_BYTE,Ne):s.texImage2D(Pe+We,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ne);return Me}const ce={};ce[s.TEXTURE_2D]=X(s.TEXTURE_2D,s.TEXTURE_2D,1),ce[s.TEXTURE_CUBE_MAP]=X(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ce[s.TEXTURE_2D_ARRAY]=X(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ce[s.TEXTURE_3D]=X(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),h.setClear(0),fe(s.DEPTH_TEST),u.setFunc(fo),wt(!1),Lt(xm),fe(s.CULL_FACE),_t(hr);function fe(j){v[j]!==!0&&(s.enable(j),v[j]=!0)}function Ae(j){v[j]!==!1&&(s.disable(j),v[j]=!1)}function De(j,Pe){return g[j]!==Pe?(s.bindFramebuffer(j,Pe),g[j]=Pe,j===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Pe),j===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Be(j,Pe){let me=E,Ge=!1;if(j){me=M.get(Pe),me===void 0&&(me=[],M.set(Pe,me));const Ne=j.textures;if(me.length!==Ne.length||me[0]!==s.COLOR_ATTACHMENT0){for(let Me=0,We=Ne.length;Me<We;Me++)me[Me]=s.COLOR_ATTACHMENT0+Me;me.length=Ne.length,Ge=!0}}else me[0]!==s.BACK&&(me[0]=s.BACK,Ge=!0);Ge&&s.drawBuffers(me)}function At(j){return C!==j?(s.useProgram(j),C=j,!0):!1}const tt={[ds]:s.FUNC_ADD,[b_]:s.FUNC_SUBTRACT,[P_]:s.FUNC_REVERSE_SUBTRACT};tt[L_]=s.MIN,tt[I_]=s.MAX;const ht={[D_]:s.ZERO,[N_]:s.ONE,[U_]:s.SRC_COLOR,[Ff]:s.SRC_ALPHA,[H_]:s.SRC_ALPHA_SATURATE,[B_]:s.DST_COLOR,[O_]:s.DST_ALPHA,[F_]:s.ONE_MINUS_SRC_COLOR,[Of]:s.ONE_MINUS_SRC_ALPHA,[z_]:s.ONE_MINUS_DST_COLOR,[k_]:s.ONE_MINUS_DST_ALPHA,[V_]:s.CONSTANT_COLOR,[G_]:s.ONE_MINUS_CONSTANT_COLOR,[W_]:s.CONSTANT_ALPHA,[X_]:s.ONE_MINUS_CONSTANT_ALPHA};function _t(j,Pe,me,Ge,Ne,Me,We,ze,mt,Ct){if(j===hr){x===!0&&(Ae(s.BLEND),x=!1);return}if(x===!1&&(fe(s.BLEND),x=!0),j!==R_){if(j!==S||Ct!==q){if((R!==ds||V!==ds)&&(s.blendEquation(s.FUNC_ADD),R=ds,V=ds),Ct)switch(j){case co:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sm:s.blendFunc(s.ONE,s.ONE);break;case Mm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ym:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Pt("WebGLState: Invalid blending: ",j);break}else switch(j){case co:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Sm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Mm:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ym:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",j);break}I=null,b=null,D=null,k=null,w.set(0,0,0),N=0,S=j,q=Ct}return}Ne=Ne||Pe,Me=Me||me,We=We||Ge,(Pe!==R||Ne!==V)&&(s.blendEquationSeparate(tt[Pe],tt[Ne]),R=Pe,V=Ne),(me!==I||Ge!==b||Me!==D||We!==k)&&(s.blendFuncSeparate(ht[me],ht[Ge],ht[Me],ht[We]),I=me,b=Ge,D=Me,k=We),(ze.equals(w)===!1||mt!==N)&&(s.blendColor(ze.r,ze.g,ze.b,mt),w.copy(ze),N=mt),S=j,q=!1}function ft(j,Pe){j.side===Ni?Ae(s.CULL_FACE):fe(s.CULL_FACE);let me=j.side===qn;Pe&&(me=!me),wt(me),j.blending===co&&j.transparent===!1?_t(hr):_t(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),u.setFunc(j.depthFunc),u.setTest(j.depthTest),u.setMask(j.depthWrite),l.setMask(j.colorWrite);const Ge=j.stencilWrite;h.setTest(Ge),Ge&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),U(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function wt(j){B!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),B=j)}function Lt(j){j!==w_?(fe(s.CULL_FACE),j!==z&&(j===xm?s.cullFace(s.BACK):j===T_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),z=j}function Rt(j){j!==Q&&(W&&s.lineWidth(j),Q=j)}function U(j,Pe,me){j?(fe(s.POLYGON_OFFSET_FILL),(te!==Pe||G!==me)&&(te=Pe,G=me,u.getReversed()&&(Pe=-Pe),s.polygonOffset(Pe,me))):Ae(s.POLYGON_OFFSET_FILL)}function xt(j){j?fe(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function nt(j){j===void 0&&(j=s.TEXTURE0+$-1),ee!==j&&(s.activeTexture(j),ee=j)}function It(j,Pe,me){me===void 0&&(ee===null?me=s.TEXTURE0+$-1:me=ee);let Ge=L[me];Ge===void 0&&(Ge={type:void 0,texture:void 0},L[me]=Ge),(Ge.type!==j||Ge.texture!==Pe)&&(ee!==me&&(s.activeTexture(me),ee=me),s.bindTexture(j,Pe||ce[j]),Ge.type=j,Ge.texture=Pe)}function Fe(){const j=L[ee];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function Ot(){try{s.compressedTexImage2D(...arguments)}catch(j){Pt("WebGLState:",j)}}function P(){try{s.compressedTexImage3D(...arguments)}catch(j){Pt("WebGLState:",j)}}function y(){try{s.texSubImage2D(...arguments)}catch(j){Pt("WebGLState:",j)}}function ne(){try{s.texSubImage3D(...arguments)}catch(j){Pt("WebGLState:",j)}}function ge(){try{s.compressedTexSubImage2D(...arguments)}catch(j){Pt("WebGLState:",j)}}function Se(){try{s.compressedTexSubImage3D(...arguments)}catch(j){Pt("WebGLState:",j)}}function Ce(){try{s.texStorage2D(...arguments)}catch(j){Pt("WebGLState:",j)}}function Re(){try{s.texStorage3D(...arguments)}catch(j){Pt("WebGLState:",j)}}function de(){try{s.texImage2D(...arguments)}catch(j){Pt("WebGLState:",j)}}function pe(){try{s.texImage3D(...arguments)}catch(j){Pt("WebGLState:",j)}}function Oe(j){return _[j]!==void 0?_[j]:s.getParameter(j)}function Ve(j,Pe){_[j]!==Pe&&(s.pixelStorei(j,Pe),_[j]=Pe)}function Le(j){_e.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),_e.copy(j))}function be(j){ve.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),ve.copy(j))}function at(j,Pe){let me=d.get(Pe);me===void 0&&(me=new WeakMap,d.set(Pe,me));let Ge=me.get(j);Ge===void 0&&(Ge=s.getUniformBlockIndex(Pe,j.name),me.set(j,Ge))}function lt(j,Pe){const Ge=d.get(Pe).get(j);p.get(Pe)!==Ge&&(s.uniformBlockBinding(Pe,Ge,j.__bindingPointIndex),p.set(Pe,Ge))}function pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},_={},ee=null,L={},g={},M=new WeakMap,E=[],C=null,x=!1,S=null,R=null,I=null,b=null,V=null,D=null,k=null,w=new Bt(0,0,0),N=0,q=!1,B=null,z=null,Q=null,te=null,G=null,_e.set(0,0,s.canvas.width,s.canvas.height),ve.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),h.reset()}return{buffers:{color:l,depth:u,stencil:h},enable:fe,disable:Ae,bindFramebuffer:De,drawBuffers:Be,useProgram:At,setBlending:_t,setMaterial:ft,setFlipSided:wt,setCullFace:Lt,setLineWidth:Rt,setPolygonOffset:U,setScissorTest:xt,activeTexture:nt,bindTexture:It,unbindTexture:Fe,compressedTexImage2D:Ot,compressedTexImage3D:P,texImage2D:de,texImage3D:pe,pixelStorei:Ve,getParameter:Oe,updateUBOMapping:at,uniformBlockBinding:lt,texStorage2D:Ce,texStorage3D:Re,texSubImage2D:y,texSubImage3D:ne,compressedTexSubImage2D:ge,compressedTexSubImage3D:Se,scissor:Le,viewport:be,reset:pt}}function W1(s,e,t,r,a,l,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Nt,v=new WeakMap,_=new Set;let g;const M=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(P,y){return E?new OffscreenCanvas(P,y):sc("canvas")}function x(P,y,ne){let ge=1;const Se=Ot(P);if((Se.width>ne||Se.height>ne)&&(ge=ne/Math.max(Se.width,Se.height)),ge<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Ce=Math.floor(ge*Se.width),Re=Math.floor(ge*Se.height);g===void 0&&(g=C(Ce,Re));const de=y?C(Ce,Re):g;return de.width=Ce,de.height=Re,de.getContext("2d").drawImage(P,0,0,Ce,Re),ct("WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+Ce+"x"+Re+")."),de}else return"data"in P&&ct("WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),P;return P}function S(P){return P.generateMipmaps}function R(P){s.generateMipmap(P)}function I(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(P,y,ne,ge,Se,Ce=!1){if(P!==null){if(s[P]!==void 0)return s[P];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Re;ge&&(Re=e.get("EXT_texture_norm16"),Re||ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=y;if(y===s.RED&&(ne===s.FLOAT&&(de=s.R32F),ne===s.HALF_FLOAT&&(de=s.R16F),ne===s.UNSIGNED_BYTE&&(de=s.R8),ne===s.UNSIGNED_SHORT&&Re&&(de=Re.R16_EXT),ne===s.SHORT&&Re&&(de=Re.R16_SNORM_EXT)),y===s.RED_INTEGER&&(ne===s.UNSIGNED_BYTE&&(de=s.R8UI),ne===s.UNSIGNED_SHORT&&(de=s.R16UI),ne===s.UNSIGNED_INT&&(de=s.R32UI),ne===s.BYTE&&(de=s.R8I),ne===s.SHORT&&(de=s.R16I),ne===s.INT&&(de=s.R32I)),y===s.RG&&(ne===s.FLOAT&&(de=s.RG32F),ne===s.HALF_FLOAT&&(de=s.RG16F),ne===s.UNSIGNED_BYTE&&(de=s.RG8),ne===s.UNSIGNED_SHORT&&Re&&(de=Re.RG16_EXT),ne===s.SHORT&&Re&&(de=Re.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(ne===s.UNSIGNED_BYTE&&(de=s.RG8UI),ne===s.UNSIGNED_SHORT&&(de=s.RG16UI),ne===s.UNSIGNED_INT&&(de=s.RG32UI),ne===s.BYTE&&(de=s.RG8I),ne===s.SHORT&&(de=s.RG16I),ne===s.INT&&(de=s.RG32I)),y===s.RGB_INTEGER&&(ne===s.UNSIGNED_BYTE&&(de=s.RGB8UI),ne===s.UNSIGNED_SHORT&&(de=s.RGB16UI),ne===s.UNSIGNED_INT&&(de=s.RGB32UI),ne===s.BYTE&&(de=s.RGB8I),ne===s.SHORT&&(de=s.RGB16I),ne===s.INT&&(de=s.RGB32I)),y===s.RGBA_INTEGER&&(ne===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),ne===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),ne===s.UNSIGNED_INT&&(de=s.RGBA32UI),ne===s.BYTE&&(de=s.RGBA8I),ne===s.SHORT&&(de=s.RGBA16I),ne===s.INT&&(de=s.RGBA32I)),y===s.RGB&&(ne===s.UNSIGNED_SHORT&&Re&&(de=Re.RGB16_EXT),ne===s.SHORT&&Re&&(de=Re.RGB16_SNORM_EXT),ne===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),ne===s.UNSIGNED_INT_10F_11F_11F_REV&&(de=s.R11F_G11F_B10F)),y===s.RGBA){const pe=Ce?ic:Tt.getTransfer(Se);ne===s.FLOAT&&(de=s.RGBA32F),ne===s.HALF_FLOAT&&(de=s.RGBA16F),ne===s.UNSIGNED_BYTE&&(de=pe===Ht?s.SRGB8_ALPHA8:s.RGBA8),ne===s.UNSIGNED_SHORT&&Re&&(de=Re.RGBA16_EXT),ne===s.SHORT&&Re&&(de=Re.RGBA16_SNORM_EXT),ne===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),ne===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function V(P,y){let ne;return P?y===null||y===qi||y===pa?ne=s.DEPTH24_STENCIL8:y===Fi?ne=s.DEPTH32F_STENCIL8:y===da&&(ne=s.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===qi||y===pa?ne=s.DEPTH_COMPONENT24:y===Fi?ne=s.DEPTH_COMPONENT32F:y===da&&(ne=s.DEPTH_COMPONENT16),ne}function D(P,y){return S(P)===!0||P.isFramebufferTexture&&P.minFilter!==dn&&P.minFilter!==Mn?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function k(P){const y=P.target;y.removeEventListener("dispose",k),N(y),y.isVideoTexture&&v.delete(y),y.isHTMLTexture&&_.delete(y)}function w(P){const y=P.target;y.removeEventListener("dispose",w),B(y)}function N(P){const y=r.get(P);if(y.__webglInit===void 0)return;const ne=P.source,ge=M.get(ne);if(ge){const Se=ge[y.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&q(P),Object.keys(ge).length===0&&M.delete(ne)}r.remove(P)}function q(P){const y=r.get(P);s.deleteTexture(y.__webglTexture);const ne=P.source,ge=M.get(ne);delete ge[y.__cacheKey],u.memory.textures--}function B(P){const y=r.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),r.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(y.__webglFramebuffer[ge]))for(let Se=0;Se<y.__webglFramebuffer[ge].length;Se++)s.deleteFramebuffer(y.__webglFramebuffer[ge][Se]);else s.deleteFramebuffer(y.__webglFramebuffer[ge]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[ge])}else{if(Array.isArray(y.__webglFramebuffer))for(let ge=0;ge<y.__webglFramebuffer.length;ge++)s.deleteFramebuffer(y.__webglFramebuffer[ge]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let ge=0;ge<y.__webglColorRenderbuffer.length;ge++)y.__webglColorRenderbuffer[ge]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[ge]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const ne=P.textures;for(let ge=0,Se=ne.length;ge<Se;ge++){const Ce=r.get(ne[ge]);Ce.__webglTexture&&(s.deleteTexture(Ce.__webglTexture),u.memory.textures--),r.remove(ne[ge])}r.remove(P)}let z=0;function Q(){z=0}function te(){return z}function G(P){z=P}function $(){const P=z;return P>=a.maxTextures&&ct("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+a.maxTextures),z+=1,P}function W(P){const y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function Y(P,y){const ne=r.get(P);if(P.isVideoTexture&&It(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&ne.__version!==P.version){const ge=P.image;if(ge===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(ne,P,y);return}}else P.isExternalTexture&&(ne.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ne.__webglTexture,s.TEXTURE0+y)}function F(P,y){const ne=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&ne.__version!==P.version){Ae(ne,P,y);return}else P.isExternalTexture&&(ne.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ne.__webglTexture,s.TEXTURE0+y)}function ee(P,y){const ne=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&ne.__version!==P.version){Ae(ne,P,y);return}t.bindTexture(s.TEXTURE_3D,ne.__webglTexture,s.TEXTURE0+y)}function L(P,y){const ne=r.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&ne.__version!==P.version){De(ne,P,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ne.__webglTexture,s.TEXTURE0+y)}const H={[$l]:s.REPEAT,[fr]:s.CLAMP_TO_EDGE,[Xf]:s.MIRRORED_REPEAT},xe={[dn]:s.NEAREST,[Y_]:s.NEAREST_MIPMAP_NEAREST,[xl]:s.NEAREST_MIPMAP_LINEAR,[Mn]:s.LINEAR,[qu]:s.LINEAR_MIPMAP_NEAREST,[ms]:s.LINEAR_MIPMAP_LINEAR},_e={[Q_]:s.NEVER,[nx]:s.ALWAYS,[J_]:s.LESS,[Uh]:s.LEQUAL,[$_]:s.EQUAL,[Fh]:s.GEQUAL,[ex]:s.GREATER,[tx]:s.NOTEQUAL};function ve(P,y){if(y.type===Fi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Mn||y.magFilter===qu||y.magFilter===xl||y.magFilter===ms||y.minFilter===Mn||y.minFilter===qu||y.minFilter===xl||y.minFilter===ms)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,H[y.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,H[y.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,H[y.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,xe[y.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,xe[y.minFilter]),y.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,_e[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===dn||y.minFilter!==xl&&y.minFilter!==ms||y.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const ne=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function X(P,y){let ne=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",k));const ge=y.source;let Se=M.get(ge);Se===void 0&&(Se={},M.set(ge,Se));const Ce=W(y);if(Ce!==P.__cacheKey){Se[Ce]===void 0&&(Se[Ce]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,ne=!0),Se[Ce].usedTimes++;const Re=Se[P.__cacheKey];Re!==void 0&&(Se[P.__cacheKey].usedTimes--,Re.usedTimes===0&&q(y)),P.__cacheKey=Ce,P.__webglTexture=Se[Ce].texture}return ne}function ce(P,y,ne){return Math.floor(Math.floor(P/ne)/y)}function fe(P,y,ne,ge){const Ce=P.updateRanges;if(Ce.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,ne,ge,y.data);else{Ce.sort((Ve,Le)=>Ve.start-Le.start);let Re=0;for(let Ve=1;Ve<Ce.length;Ve++){const Le=Ce[Re],be=Ce[Ve],at=Le.start+Le.count,lt=ce(be.start,y.width,4),pt=ce(Le.start,y.width,4);be.start<=at+1&&lt===pt&&ce(be.start+be.count-1,y.width,4)===lt?Le.count=Math.max(Le.count,be.start+be.count-Le.start):(++Re,Ce[Re]=be)}Ce.length=Re+1;const de=t.getParameter(s.UNPACK_ROW_LENGTH),pe=t.getParameter(s.UNPACK_SKIP_PIXELS),Oe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let Ve=0,Le=Ce.length;Ve<Le;Ve++){const be=Ce[Ve],at=Math.floor(be.start/4),lt=Math.ceil(be.count/4),pt=at%y.width,j=Math.floor(at/y.width),Pe=lt,me=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,pt),t.pixelStorei(s.UNPACK_SKIP_ROWS,j),t.texSubImage2D(s.TEXTURE_2D,0,pt,j,Pe,me,ne,ge,y.data)}P.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,de),t.pixelStorei(s.UNPACK_SKIP_PIXELS,pe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Oe)}}function Ae(P,y,ne){let ge=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(ge=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(ge=s.TEXTURE_3D);const Se=X(P,y),Ce=y.source;t.bindTexture(ge,P.__webglTexture,s.TEXTURE0+ne);const Re=r.get(Ce);if(Ce.version!==Re.__version||Se===!0){if(t.activeTexture(s.TEXTURE0+ne),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const me=Tt.getPrimaries(Tt.workingColorSpace),Ge=y.colorSpace===Gr?null:Tt.getPrimaries(y.colorSpace),Ne=y.colorSpace===Gr||me===Ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let pe=x(y.image,!1,a.maxTextureSize);pe=Fe(y,pe);const Oe=l.convert(y.format,y.colorSpace),Ve=l.convert(y.type);let Le=b(y.internalFormat,Oe,Ve,y.normalized,y.colorSpace,y.isVideoTexture);ve(ge,y);let be;const at=y.mipmaps,lt=y.isVideoTexture!==!0,pt=Re.__version===void 0||Se===!0,j=Ce.dataReady,Pe=D(y,pe);if(y.isDepthTexture)Le=V(y.format===gs,y.type),pt&&(lt?t.texStorage2D(s.TEXTURE_2D,1,Le,pe.width,pe.height):t.texImage2D(s.TEXTURE_2D,0,Le,pe.width,pe.height,0,Oe,Ve,null));else if(y.isDataTexture)if(at.length>0){lt&&pt&&t.texStorage2D(s.TEXTURE_2D,Pe,Le,at[0].width,at[0].height);for(let me=0,Ge=at.length;me<Ge;me++)be=at[me],lt?j&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,be.width,be.height,Oe,Ve,be.data):t.texImage2D(s.TEXTURE_2D,me,Le,be.width,be.height,0,Oe,Ve,be.data);y.generateMipmaps=!1}else lt?(pt&&t.texStorage2D(s.TEXTURE_2D,Pe,Le,pe.width,pe.height),j&&fe(y,pe,Oe,Ve)):t.texImage2D(s.TEXTURE_2D,0,Le,pe.width,pe.height,0,Oe,Ve,pe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){lt&&pt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,Le,at[0].width,at[0].height,pe.depth);for(let me=0,Ge=at.length;me<Ge;me++)if(be=at[me],y.format!==_i)if(Oe!==null)if(lt){if(j)if(y.layerUpdates.size>0){const Ne=Jm(be.width,be.height,y.format,y.type);for(const Me of y.layerUpdates){const We=be.data.subarray(Me*Ne/be.data.BYTES_PER_ELEMENT,(Me+1)*Ne/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,Me,be.width,be.height,1,Oe,We)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,be.width,be.height,pe.depth,Oe,be.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,me,Le,be.width,be.height,pe.depth,0,be.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?j&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,be.width,be.height,pe.depth,Oe,Ve,be.data):t.texImage3D(s.TEXTURE_2D_ARRAY,me,Le,be.width,be.height,pe.depth,0,Oe,Ve,be.data)}else{lt&&pt&&t.texStorage2D(s.TEXTURE_2D,Pe,Le,at[0].width,at[0].height);for(let me=0,Ge=at.length;me<Ge;me++)be=at[me],y.format!==_i?Oe!==null?lt?j&&t.compressedTexSubImage2D(s.TEXTURE_2D,me,0,0,be.width,be.height,Oe,be.data):t.compressedTexImage2D(s.TEXTURE_2D,me,Le,be.width,be.height,0,be.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?j&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,be.width,be.height,Oe,Ve,be.data):t.texImage2D(s.TEXTURE_2D,me,Le,be.width,be.height,0,Oe,Ve,be.data)}else if(y.isDataArrayTexture)if(lt){if(pt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Pe,Le,pe.width,pe.height,pe.depth),j)if(y.layerUpdates.size>0){const me=Jm(pe.width,pe.height,y.format,y.type);for(const Ge of y.layerUpdates){const Ne=pe.data.subarray(Ge*me/pe.data.BYTES_PER_ELEMENT,(Ge+1)*me/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ge,pe.width,pe.height,1,Oe,Ve,Ne)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Oe,Ve,pe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Le,pe.width,pe.height,pe.depth,0,Oe,Ve,pe.data);else if(y.isData3DTexture)lt?(pt&&t.texStorage3D(s.TEXTURE_3D,Pe,Le,pe.width,pe.height,pe.depth),j&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Oe,Ve,pe.data)):t.texImage3D(s.TEXTURE_3D,0,Le,pe.width,pe.height,pe.depth,0,Oe,Ve,pe.data);else if(y.isFramebufferTexture){if(pt)if(lt)t.texStorage2D(s.TEXTURE_2D,Pe,Le,pe.width,pe.height);else{let me=pe.width,Ge=pe.height;for(let Ne=0;Ne<Pe;Ne++)t.texImage2D(s.TEXTURE_2D,Ne,Le,me,Ge,0,Oe,Ve,null),me>>=1,Ge>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){const me=s.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),pe.parentNode!==me){me.appendChild(pe),_.add(y),me.onpaint=ze=>{const mt=ze.changedElements;for(const Ct of _)mt.includes(Ct.image)&&(Ct.needsUpdate=!0)},me.requestPaint();return}const Ge=0,Ne=s.RGBA,Me=s.RGBA,We=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,Ge,Ne,Me,We,pe),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(at.length>0){if(lt&&pt){const me=Ot(at[0]);t.texStorage2D(s.TEXTURE_2D,Pe,Le,me.width,me.height)}for(let me=0,Ge=at.length;me<Ge;me++)be=at[me],lt?j&&t.texSubImage2D(s.TEXTURE_2D,me,0,0,Oe,Ve,be):t.texImage2D(s.TEXTURE_2D,me,Le,Oe,Ve,be);y.generateMipmaps=!1}else if(lt){if(pt){const me=Ot(pe);t.texStorage2D(s.TEXTURE_2D,Pe,Le,me.width,me.height)}j&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,Ve,pe)}else t.texImage2D(s.TEXTURE_2D,0,Le,Oe,Ve,pe);S(y)&&R(ge),Re.__version=Ce.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function De(P,y,ne){if(y.image.length!==6)return;const ge=X(P,y),Se=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+ne);const Ce=r.get(Se);if(Se.version!==Ce.__version||ge===!0){t.activeTexture(s.TEXTURE0+ne);const Re=Tt.getPrimaries(Tt.workingColorSpace),de=y.colorSpace===Gr?null:Tt.getPrimaries(y.colorSpace),pe=y.colorSpace===Gr||Re===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Oe=y.isCompressedTexture||y.image[0].isCompressedTexture,Ve=y.image[0]&&y.image[0].isDataTexture,Le=[];for(let Me=0;Me<6;Me++)!Oe&&!Ve?Le[Me]=x(y.image[Me],!0,a.maxCubemapSize):Le[Me]=Ve?y.image[Me].image:y.image[Me],Le[Me]=Fe(y,Le[Me]);const be=Le[0],at=l.convert(y.format,y.colorSpace),lt=l.convert(y.type),pt=b(y.internalFormat,at,lt,y.normalized,y.colorSpace),j=y.isVideoTexture!==!0,Pe=Ce.__version===void 0||ge===!0,me=Se.dataReady;let Ge=D(y,be);ve(s.TEXTURE_CUBE_MAP,y);let Ne;if(Oe){j&&Pe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ge,pt,be.width,be.height);for(let Me=0;Me<6;Me++){Ne=Le[Me].mipmaps;for(let We=0;We<Ne.length;We++){const ze=Ne[We];y.format!==_i?at!==null?j?me&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We,0,0,ze.width,ze.height,at,ze.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We,pt,ze.width,ze.height,0,ze.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We,0,0,ze.width,ze.height,at,lt,ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We,pt,ze.width,ze.height,0,at,lt,ze.data)}}}else{if(Ne=y.mipmaps,j&&Pe){Ne.length>0&&Ge++;const Me=Ot(Le[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ge,pt,Me.width,Me.height)}for(let Me=0;Me<6;Me++)if(Ve){j?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,Le[Me].width,Le[Me].height,at,lt,Le[Me].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,pt,Le[Me].width,Le[Me].height,0,at,lt,Le[Me].data);for(let We=0;We<Ne.length;We++){const mt=Ne[We].image[Me].image;j?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We+1,0,0,mt.width,mt.height,at,lt,mt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We+1,pt,mt.width,mt.height,0,at,lt,mt.data)}}else{j?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,0,0,at,lt,Le[Me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,pt,at,lt,Le[Me]);for(let We=0;We<Ne.length;We++){const ze=Ne[We];j?me&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We+1,0,0,at,lt,ze.image[Me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Me,We+1,pt,at,lt,ze.image[Me])}}}S(y)&&R(s.TEXTURE_CUBE_MAP),Ce.__version=Se.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function Be(P,y,ne,ge,Se,Ce){const Re=l.convert(ne.format,ne.colorSpace),de=l.convert(ne.type),pe=b(ne.internalFormat,Re,de,ne.normalized,ne.colorSpace),Oe=r.get(y),Ve=r.get(ne);if(Ve.__renderTarget=y,!Oe.__hasExternalTextures){const Le=Math.max(1,y.width>>Ce),be=Math.max(1,y.height>>Ce);Se===s.TEXTURE_3D||Se===s.TEXTURE_2D_ARRAY?t.texImage3D(Se,Ce,pe,Le,be,y.depth,0,Re,de,null):t.texImage2D(Se,Ce,pe,Le,be,0,Re,de,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),nt(y)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,Se,Ve.__webglTexture,0,xt(y)):(Se===s.TEXTURE_2D||Se>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ge,Se,Ve.__webglTexture,Ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function At(P,y,ne){if(s.bindRenderbuffer(s.RENDERBUFFER,P),y.depthBuffer){const ge=y.depthTexture,Se=ge&&ge.isDepthTexture?ge.type:null,Ce=V(y.stencilBuffer,Se),Re=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;nt(y)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xt(y),Ce,y.width,y.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,xt(y),Ce,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Ce,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Re,s.RENDERBUFFER,P)}else{const ge=y.textures;for(let Se=0;Se<ge.length;Se++){const Ce=ge[Se],Re=l.convert(Ce.format,Ce.colorSpace),de=l.convert(Ce.type),pe=b(Ce.internalFormat,Re,de,Ce.normalized,Ce.colorSpace);nt(y)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xt(y),pe,y.width,y.height):ne?s.renderbufferStorageMultisample(s.RENDERBUFFER,xt(y),pe,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,pe,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function tt(P,y,ne){const ge=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Se=r.get(y.depthTexture);if(Se.__renderTarget=y,(!Se.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ge){if(Se.__webglInit===void 0&&(Se.__webglInit=!0,y.depthTexture.addEventListener("dispose",k)),Se.__webglTexture===void 0){Se.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,Se.__webglTexture),ve(s.TEXTURE_CUBE_MAP,y.depthTexture);const Oe=l.convert(y.depthTexture.format),Ve=l.convert(y.depthTexture.type);let Le;y.depthTexture.format===gr?Le=s.DEPTH_COMPONENT24:y.depthTexture.format===gs&&(Le=s.DEPTH24_STENCIL8);for(let be=0;be<6;be++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Le,y.width,y.height,0,Oe,Ve,null)}}else Y(y.depthTexture,0);const Ce=Se.__webglTexture,Re=xt(y),de=ge?s.TEXTURE_CUBE_MAP_POSITIVE_X+ne:s.TEXTURE_2D,pe=y.depthTexture.format===gs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===gr)nt(y)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,de,Ce,0,Re):s.framebufferTexture2D(s.FRAMEBUFFER,pe,de,Ce,0);else if(y.depthTexture.format===gs)nt(y)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,pe,de,Ce,0,Re):s.framebufferTexture2D(s.FRAMEBUFFER,pe,de,Ce,0);else throw new Error("Unknown depthTexture format")}function ht(P){const y=r.get(P),ne=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){const ge=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),ge){const Se=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,ge.removeEventListener("dispose",Se)};ge.addEventListener("dispose",Se),y.__depthDisposeCallback=Se}y.__boundDepthTexture=ge}if(P.depthTexture&&!y.__autoAllocateDepthBuffer)if(ne)for(let ge=0;ge<6;ge++)tt(y.__webglFramebuffer[ge],P,ge);else{const ge=P.texture.mipmaps;ge&&ge.length>0?tt(y.__webglFramebuffer[0],P,0):tt(y.__webglFramebuffer,P,0)}else if(ne){y.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[ge]),y.__webglDepthbuffer[ge]===void 0)y.__webglDepthbuffer[ge]=s.createRenderbuffer(),At(y.__webglDepthbuffer[ge],P,!1);else{const Se=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=y.__webglDepthbuffer[ge];s.bindRenderbuffer(s.RENDERBUFFER,Ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,Ce)}}else{const ge=P.texture.mipmaps;if(ge&&ge.length>0?t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),At(y.__webglDepthbuffer,P,!1);else{const Se=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,Se,s.RENDERBUFFER,Ce)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function _t(P,y,ne){const ge=r.get(P);y!==void 0&&Be(ge.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ne!==void 0&&ht(P)}function ft(P){const y=P.texture,ne=r.get(P),ge=r.get(y);P.addEventListener("dispose",w);const Se=P.textures,Ce=P.isWebGLCubeRenderTarget===!0,Re=Se.length>1;if(Re||(ge.__webglTexture===void 0&&(ge.__webglTexture=s.createTexture()),ge.__version=y.version,u.memory.textures++),Ce){ne.__webglFramebuffer=[];for(let de=0;de<6;de++)if(y.mipmaps&&y.mipmaps.length>0){ne.__webglFramebuffer[de]=[];for(let pe=0;pe<y.mipmaps.length;pe++)ne.__webglFramebuffer[de][pe]=s.createFramebuffer()}else ne.__webglFramebuffer[de]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){ne.__webglFramebuffer=[];for(let de=0;de<y.mipmaps.length;de++)ne.__webglFramebuffer[de]=s.createFramebuffer()}else ne.__webglFramebuffer=s.createFramebuffer();if(Re)for(let de=0,pe=Se.length;de<pe;de++){const Oe=r.get(Se[de]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=s.createTexture(),u.memory.textures++)}if(P.samples>0&&nt(P)===!1){ne.__webglMultisampledFramebuffer=s.createFramebuffer(),ne.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let de=0;de<Se.length;de++){const pe=Se[de];ne.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ne.__webglColorRenderbuffer[de]);const Oe=l.convert(pe.format,pe.colorSpace),Ve=l.convert(pe.type),Le=b(pe.internalFormat,Oe,Ve,pe.normalized,pe.colorSpace,P.isXRRenderTarget===!0),be=xt(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,be,Le,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,ne.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(ne.__webglDepthRenderbuffer=s.createRenderbuffer(),At(ne.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ce){t.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),ve(s.TEXTURE_CUBE_MAP,y);for(let de=0;de<6;de++)if(y.mipmaps&&y.mipmaps.length>0)for(let pe=0;pe<y.mipmaps.length;pe++)Be(ne.__webglFramebuffer[de][pe],P,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe);else Be(ne.__webglFramebuffer[de],P,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);S(y)&&R(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let de=0,pe=Se.length;de<pe;de++){const Oe=Se[de],Ve=r.get(Oe);let Le=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Le=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Le,Ve.__webglTexture),ve(Le,Oe),Be(ne.__webglFramebuffer,P,Oe,s.COLOR_ATTACHMENT0+de,Le,0),S(Oe)&&R(Le)}t.unbindTexture()}else{let de=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(de=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(de,ge.__webglTexture),ve(de,y),y.mipmaps&&y.mipmaps.length>0)for(let pe=0;pe<y.mipmaps.length;pe++)Be(ne.__webglFramebuffer[pe],P,y,s.COLOR_ATTACHMENT0,de,pe);else Be(ne.__webglFramebuffer,P,y,s.COLOR_ATTACHMENT0,de,0);S(y)&&R(de),t.unbindTexture()}P.depthBuffer&&ht(P)}function wt(P){const y=P.textures;for(let ne=0,ge=y.length;ne<ge;ne++){const Se=y[ne];if(S(Se)){const Ce=I(P),Re=r.get(Se).__webglTexture;t.bindTexture(Ce,Re),R(Ce),t.unbindTexture()}}}const Lt=[],Rt=[];function U(P){if(P.samples>0){if(nt(P)===!1){const y=P.textures,ne=P.width,ge=P.height;let Se=s.COLOR_BUFFER_BIT;const Ce=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=r.get(P),de=y.length>1;if(de)for(let Oe=0;Oe<y.length;Oe++)t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const pe=P.texture.mipmaps;pe&&pe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Oe=0;Oe<y.length;Oe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(Se|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(Se|=s.STENCIL_BUFFER_BIT)),de){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Re.__webglColorRenderbuffer[Oe]);const Ve=r.get(y[Oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ve,0)}s.blitFramebuffer(0,0,ne,ge,0,0,ne,ge,Se,s.NEAREST),p===!0&&(Lt.length=0,Rt.length=0,Lt.push(s.COLOR_ATTACHMENT0+Oe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Lt.push(Ce),Rt.push(Ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Rt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Lt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let Oe=0;Oe<y.length;Oe++){t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.RENDERBUFFER,Re.__webglColorRenderbuffer[Oe]);const Ve=r.get(y[Oe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Oe,s.TEXTURE_2D,Ve,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&p){const y=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function xt(P){return Math.min(a.maxSamples,P.samples)}function nt(P){const y=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function It(P){const y=u.render.frame;v.get(P)!==y&&(v.set(P,y),P.update())}function Fe(P,y){const ne=P.colorSpace,ge=P.format,Se=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||ne!==nc&&ne!==Gr&&(Tt.getTransfer(ne)===Ht?(ge!==_i||Se!==vi)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",ne)),y}function Ot(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(d.width=P.naturalWidth||P.width,d.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(d.width=P.displayWidth,d.height=P.displayHeight):(d.width=P.width,d.height=P.height),d}this.allocateTextureUnit=$,this.resetTextureUnits=Q,this.getTextureUnits=te,this.setTextureUnits=G,this.setTexture2D=Y,this.setTexture2DArray=F,this.setTexture3D=ee,this.setTextureCube=L,this.rebindTextures=_t,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=U,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=nt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function X1(s,e){function t(r,a=Gr){let l;const u=Tt.getTransfer(a);if(r===vi)return s.UNSIGNED_BYTE;if(r===Ph)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Lh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===ig)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===rg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===tg)return s.BYTE;if(r===ng)return s.SHORT;if(r===da)return s.UNSIGNED_SHORT;if(r===bh)return s.INT;if(r===qi)return s.UNSIGNED_INT;if(r===Fi)return s.FLOAT;if(r===mr)return s.HALF_FLOAT;if(r===sg)return s.ALPHA;if(r===og)return s.RGB;if(r===_i)return s.RGBA;if(r===gr)return s.DEPTH_COMPONENT;if(r===gs)return s.DEPTH_STENCIL;if(r===ag)return s.RED;if(r===Ih)return s.RED_INTEGER;if(r===_s)return s.RG;if(r===Dh)return s.RG_INTEGER;if(r===Nh)return s.RGBA_INTEGER;if(r===Kl||r===Yl||r===ql||r===Zl)if(u===Ht)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Kl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Yl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Kl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Yl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ql)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Zl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===jf||r===Kf||r===Yf||r===qf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===jf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Kf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Yf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===qf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Zf||r===Qf||r===Jf||r===$f||r===eh||r===ec||r===th)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Zf||r===Qf)return u===Ht?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Jf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===$f)return l.COMPRESSED_R11_EAC;if(r===eh)return l.COMPRESSED_SIGNED_R11_EAC;if(r===ec)return l.COMPRESSED_RG11_EAC;if(r===th)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===nh||r===ih||r===rh||r===sh||r===oh||r===ah||r===lh||r===ch||r===uh||r===fh||r===hh||r===dh||r===ph||r===mh)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===nh)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ih)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===rh)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===sh)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===oh)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ah)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===lh)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===ch)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===uh)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===fh)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===hh)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===dh)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ph)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===mh)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===gh||r===vh||r===_h)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===gh)return u===Ht?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===vh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===_h)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===xh||r===Sh||r===tc||r===Mh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===xh)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Sh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===tc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Mh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===pa?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const j1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K1=`
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

}`;class Y1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new _g(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new xi({vertexShader:j1,fragmentShader:K1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new si(new uc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class q1 extends Ss{constructor(e,t){super();const r=this;let a=null,l=1,u=null,h="local-floor",p=1,d=null,v=null,_=null,g=null,M=null,E=null;const C=typeof XRWebGLBinding<"u",x=new Y1,S={},R=t.getContextAttributes();let I=null,b=null;const V=[],D=[],k=new Nt;let w=null;const N=new gi;N.viewport=new sn;const q=new gi;q.viewport=new sn;const B=[N,q],z=new sS;let Q=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ce=V[X];return ce===void 0&&(ce=new nf,V[X]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(X){let ce=V[X];return ce===void 0&&(ce=new nf,V[X]=ce),ce.getGripSpace()},this.getHand=function(X){let ce=V[X];return ce===void 0&&(ce=new nf,V[X]=ce),ce.getHandSpace()};function G(X){const ce=D.indexOf(X.inputSource);if(ce===-1)return;const fe=V[ce];fe!==void 0&&(fe.update(X.inputSource,X.frame,d||u),fe.dispatchEvent({type:X.type,data:X.inputSource}))}function $(){a.removeEventListener("select",G),a.removeEventListener("selectstart",G),a.removeEventListener("selectend",G),a.removeEventListener("squeeze",G),a.removeEventListener("squeezestart",G),a.removeEventListener("squeezeend",G),a.removeEventListener("end",$),a.removeEventListener("inputsourceschange",W);for(let X=0;X<V.length;X++){const ce=D[X];ce!==null&&(D[X]=null,V[X].disconnect(ce))}Q=null,te=null,x.reset();for(const X in S)delete S[X];e.setRenderTarget(I),M=null,g=null,_=null,a=null,b=null,ve.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){l=X,r.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){h=X,r.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||u},this.setReferenceSpace=function(X){d=X},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(a,t)),_},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(X){if(a=X,a!==null){if(I=e.getRenderTarget(),a.addEventListener("select",G),a.addEventListener("selectstart",G),a.addEventListener("selectend",G),a.addEventListener("squeeze",G),a.addEventListener("squeezestart",G),a.addEventListener("squeezeend",G),a.addEventListener("end",$),a.addEventListener("inputsourceschange",W),R.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(k),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ae=null,De=null;R.depth&&(De=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=R.stencil?gs:gr,Ae=R.stencil?pa:qi);const Be={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:l};_=this.getBinding(),g=_.createProjectionLayer(Be),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),b=new Ki(g.textureWidth,g.textureHeight,{format:_i,type:vi,depthTexture:new po(g.textureWidth,g.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const fe={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(a,t,fe),a.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),b=new Ki(M.framebufferWidth,M.framebufferHeight,{format:_i,type:vi,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(p),d=null,u=await a.requestReferenceSpace(h),ve.setContext(a),ve.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W(X){for(let ce=0;ce<X.removed.length;ce++){const fe=X.removed[ce],Ae=D.indexOf(fe);Ae>=0&&(D[Ae]=null,V[Ae].disconnect(fe))}for(let ce=0;ce<X.added.length;ce++){const fe=X.added[ce];let Ae=D.indexOf(fe);if(Ae===-1){for(let Be=0;Be<V.length;Be++)if(Be>=D.length){D.push(fe),Ae=Be;break}else if(D[Be]===null){D[Be]=fe,Ae=Be;break}if(Ae===-1)break}const De=V[Ae];De&&De.connect(fe)}}const Y=new ie,F=new ie;function ee(X,ce,fe){Y.setFromMatrixPosition(ce.matrixWorld),F.setFromMatrixPosition(fe.matrixWorld);const Ae=Y.distanceTo(F),De=ce.projectionMatrix.elements,Be=fe.projectionMatrix.elements,At=De[14]/(De[10]-1),tt=De[14]/(De[10]+1),ht=(De[9]+1)/De[5],_t=(De[9]-1)/De[5],ft=(De[8]-1)/De[0],wt=(Be[8]+1)/Be[0],Lt=At*ft,Rt=At*wt,U=Ae/(-ft+wt),xt=U*-ft;if(ce.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(xt),X.translateZ(U),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),De[10]===-1)X.projectionMatrix.copy(ce.projectionMatrix),X.projectionMatrixInverse.copy(ce.projectionMatrixInverse);else{const nt=At+U,It=tt+U,Fe=Lt-xt,Ot=Rt+(Ae-xt),P=ht*tt/It*nt,y=_t*tt/It*nt;X.projectionMatrix.makePerspective(Fe,Ot,P,y,nt,It),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function L(X,ce){ce===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ce.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(a===null)return;let ce=X.near,fe=X.far;x.texture!==null&&(x.depthNear>0&&(ce=x.depthNear),x.depthFar>0&&(fe=x.depthFar)),z.near=q.near=N.near=ce,z.far=q.far=N.far=fe,(Q!==z.near||te!==z.far)&&(a.updateRenderState({depthNear:z.near,depthFar:z.far}),Q=z.near,te=z.far),z.layers.mask=X.layers.mask|6,N.layers.mask=z.layers.mask&-5,q.layers.mask=z.layers.mask&-3;const Ae=X.parent,De=z.cameras;L(z,Ae);for(let Be=0;Be<De.length;Be++)L(De[Be],Ae);De.length===2?ee(z,N,q):z.projectionMatrix.copy(N.projectionMatrix),H(X,z,Ae)};function H(X,ce,fe){fe===null?X.matrix.copy(ce.matrixWorld):(X.matrix.copy(fe.matrixWorld),X.matrix.invert(),X.matrix.multiply(ce.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ce.projectionMatrix),X.projectionMatrixInverse.copy(ce.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ma*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(g===null&&M===null))return p},this.setFoveation=function(X){p=X,g!==null&&(g.fixedFoveation=X),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(z)},this.getCameraTexture=function(X){return S[X]};let xe=null;function _e(X,ce){if(v=ce.getViewerPose(d||u),E=ce,v!==null){const fe=v.views;M!==null&&(e.setRenderTargetFramebuffer(b,M.framebuffer),e.setRenderTarget(b));let Ae=!1;fe.length!==z.cameras.length&&(z.cameras.length=0,Ae=!0);for(let tt=0;tt<fe.length;tt++){const ht=fe[tt];let _t=null;if(M!==null)_t=M.getViewport(ht);else{const wt=_.getViewSubImage(g,ht);_t=wt.viewport,tt===0&&(e.setRenderTargetTextures(b,wt.colorTexture,wt.depthStencilTexture),e.setRenderTarget(b))}let ft=B[tt];ft===void 0&&(ft=new gi,ft.layers.enable(tt),ft.viewport=new sn,B[tt]=ft),ft.matrix.fromArray(ht.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(ht.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(_t.x,_t.y,_t.width,_t.height),tt===0&&(z.matrix.copy(ft.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ae===!0&&z.cameras.push(ft)}const De=a.enabledFeatures;if(De&&De.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const tt=_.getDepthInformation(fe[0]);tt&&tt.isValid&&tt.texture&&x.init(tt,a.renderState)}if(De&&De.includes("camera-access")&&C){e.state.unbindTexture(),_=r.getBinding();for(let tt=0;tt<fe.length;tt++){const ht=fe[tt].camera;if(ht){let _t=S[ht];_t||(_t=new _g,S[ht]=_t);const ft=_.getCameraImage(ht);_t.sourceTexture=ft}}}}for(let fe=0;fe<V.length;fe++){const Ae=D[fe],De=V[fe];Ae!==null&&De!==void 0&&De.update(Ae,ce,d||u)}xe&&xe(X,ce),ce.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ce}),E=null}const ve=new yg;ve.setAnimationLoop(_e),this.setAnimationLoop=function(X){xe=X},this.dispose=function(){}}}const Z1=new on,bg=new vt;bg.set(-1,0,0,0,1,0,0,0,1);function Q1(s,e){function t(x,S){x.matrixAutoUpdate===!0&&x.updateMatrix(),S.value.copy(x.matrix)}function r(x,S){S.color.getRGB(x.fogColor.value,xg(s)),S.isFog?(x.fogNear.value=S.near,x.fogFar.value=S.far):S.isFogExp2&&(x.fogDensity.value=S.density)}function a(x,S,R,I,b){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?l(x,S):S.isMeshLambertMaterial?(l(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(x,S),_(x,S)):S.isMeshPhongMaterial?(l(x,S),v(x,S),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(x,S),g(x,S),S.isMeshPhysicalMaterial&&M(x,S,b)):S.isMeshMatcapMaterial?(l(x,S),E(x,S)):S.isMeshDepthMaterial?l(x,S):S.isMeshDistanceMaterial?(l(x,S),C(x,S)):S.isMeshNormalMaterial?l(x,S):S.isLineBasicMaterial?(u(x,S),S.isLineDashedMaterial&&h(x,S)):S.isPointsMaterial?p(x,S,R,I):S.isSpriteMaterial?d(x,S):S.isShadowMaterial?(x.color.value.copy(S.color),x.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(x,S){x.opacity.value=S.opacity,S.color&&x.diffuse.value.copy(S.color),S.emissive&&x.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.bumpMap&&(x.bumpMap.value=S.bumpMap,t(S.bumpMap,x.bumpMapTransform),x.bumpScale.value=S.bumpScale,S.side===qn&&(x.bumpScale.value*=-1)),S.normalMap&&(x.normalMap.value=S.normalMap,t(S.normalMap,x.normalMapTransform),x.normalScale.value.copy(S.normalScale),S.side===qn&&x.normalScale.value.negate()),S.displacementMap&&(x.displacementMap.value=S.displacementMap,t(S.displacementMap,x.displacementMapTransform),x.displacementScale.value=S.displacementScale,x.displacementBias.value=S.displacementBias),S.emissiveMap&&(x.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,x.emissiveMapTransform)),S.specularMap&&(x.specularMap.value=S.specularMap,t(S.specularMap,x.specularMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest);const R=e.get(S),I=R.envMap,b=R.envMapRotation;I&&(x.envMap.value=I,x.envMapRotation.value.setFromMatrix4(Z1.makeRotationFromEuler(b)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(bg),x.reflectivity.value=S.reflectivity,x.ior.value=S.ior,x.refractionRatio.value=S.refractionRatio),S.lightMap&&(x.lightMap.value=S.lightMap,x.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,x.lightMapTransform)),S.aoMap&&(x.aoMap.value=S.aoMap,x.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,x.aoMapTransform))}function u(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform))}function h(x,S){x.dashSize.value=S.dashSize,x.totalSize.value=S.dashSize+S.gapSize,x.scale.value=S.scale}function p(x,S,R,I){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.size.value=S.size*R,x.scale.value=I*.5,S.map&&(x.map.value=S.map,t(S.map,x.uvTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function d(x,S){x.diffuse.value.copy(S.color),x.opacity.value=S.opacity,x.rotation.value=S.rotation,S.map&&(x.map.value=S.map,t(S.map,x.mapTransform)),S.alphaMap&&(x.alphaMap.value=S.alphaMap,t(S.alphaMap,x.alphaMapTransform)),S.alphaTest>0&&(x.alphaTest.value=S.alphaTest)}function v(x,S){x.specular.value.copy(S.specular),x.shininess.value=Math.max(S.shininess,1e-4)}function _(x,S){S.gradientMap&&(x.gradientMap.value=S.gradientMap)}function g(x,S){x.metalness.value=S.metalness,S.metalnessMap&&(x.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,x.metalnessMapTransform)),x.roughness.value=S.roughness,S.roughnessMap&&(x.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,x.roughnessMapTransform)),S.envMap&&(x.envMapIntensity.value=S.envMapIntensity)}function M(x,S,R){x.ior.value=S.ior,S.sheen>0&&(x.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),x.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(x.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,x.sheenColorMapTransform)),S.sheenRoughnessMap&&(x.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,x.sheenRoughnessMapTransform))),S.clearcoat>0&&(x.clearcoat.value=S.clearcoat,x.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(x.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,x.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(x.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===qn&&x.clearcoatNormalScale.value.negate())),S.dispersion>0&&(x.dispersion.value=S.dispersion),S.iridescence>0&&(x.iridescence.value=S.iridescence,x.iridescenceIOR.value=S.iridescenceIOR,x.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(x.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,x.iridescenceMapTransform)),S.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),S.transmission>0&&(x.transmission.value=S.transmission,x.transmissionSamplerMap.value=R.texture,x.transmissionSamplerSize.value.set(R.width,R.height),S.transmissionMap&&(x.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,x.transmissionMapTransform)),x.thickness.value=S.thickness,S.thicknessMap&&(x.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=S.attenuationDistance,x.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(x.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(x.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=S.specularIntensity,x.specularColor.value.copy(S.specularColor),S.specularColorMap&&(x.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,x.specularColorMapTransform)),S.specularIntensityMap&&(x.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,S){S.matcap&&(x.matcap.value=S.matcap)}function C(x,S){const R=e.get(S).light;x.referencePosition.value.setFromMatrixPosition(R.matrixWorld),x.nearDistance.value=R.shadow.camera.near,x.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function J1(s,e,t,r){let a={},l={},u=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(R,I){const b=I.program;r.uniformBlockBinding(R,b)}function d(R,I){let b=a[R.id];b===void 0&&(E(R),b=v(R),a[R.id]=b,R.addEventListener("dispose",x));const V=I.program;r.updateUBOMapping(R,V);const D=e.render.frame;l[R.id]!==D&&(g(R),l[R.id]=D)}function v(R){const I=_();R.__bindingPointIndex=I;const b=s.createBuffer(),V=R.__size,D=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,V,D),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,I,b),b}function _(){for(let R=0;R<h;R++)if(u.indexOf(R)===-1)return u.push(R),R;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const I=a[R.id],b=R.uniforms,V=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let D=0,k=b.length;D<k;D++){const w=Array.isArray(b[D])?b[D]:[b[D]];for(let N=0,q=w.length;N<q;N++){const B=w[N];if(M(B,D,N,V)===!0){const z=B.__offset,Q=Array.isArray(B.value)?B.value:[B.value];let te=0;for(let G=0;G<Q.length;G++){const $=Q[G],W=C($);typeof $=="number"||typeof $=="boolean"?(B.__data[0]=$,s.bufferSubData(s.UNIFORM_BUFFER,z+te,B.__data)):$.isMatrix3?(B.__data[0]=$.elements[0],B.__data[1]=$.elements[1],B.__data[2]=$.elements[2],B.__data[3]=0,B.__data[4]=$.elements[3],B.__data[5]=$.elements[4],B.__data[6]=$.elements[5],B.__data[7]=0,B.__data[8]=$.elements[6],B.__data[9]=$.elements[7],B.__data[10]=$.elements[8],B.__data[11]=0):ArrayBuffer.isView($)?B.__data.set(new $.constructor($.buffer,$.byteOffset,B.__data.length)):($.toArray(B.__data,te),te+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(R,I,b,V){const D=R.value,k=I+"_"+b;if(V[k]===void 0)return typeof D=="number"||typeof D=="boolean"?V[k]=D:ArrayBuffer.isView(D)?V[k]=D.slice():V[k]=D.clone(),!0;{const w=V[k];if(typeof D=="number"||typeof D=="boolean"){if(w!==D)return V[k]=D,!0}else{if(ArrayBuffer.isView(D))return!0;if(w.equals(D)===!1)return w.copy(D),!0}}return!1}function E(R){const I=R.uniforms;let b=0;const V=16;for(let k=0,w=I.length;k<w;k++){const N=Array.isArray(I[k])?I[k]:[I[k]];for(let q=0,B=N.length;q<B;q++){const z=N[q],Q=Array.isArray(z.value)?z.value:[z.value];for(let te=0,G=Q.length;te<G;te++){const $=Q[te],W=C($),Y=b%V,F=Y%W.boundary,ee=Y+F;b+=F,ee!==0&&V-ee<W.storage&&(b+=V-ee),z.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=b,b+=W.storage}}}const D=b%V;return D>0&&(b+=V-D),R.__size=b,R.__cache={},this}function C(R){const I={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(I.boundary=4,I.storage=4):R.isVector2?(I.boundary=8,I.storage=8):R.isVector3||R.isColor?(I.boundary=16,I.storage=12):R.isVector4?(I.boundary=16,I.storage=16):R.isMatrix3?(I.boundary=48,I.storage=48):R.isMatrix4?(I.boundary=64,I.storage=64):R.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(I.boundary=16,I.storage=R.byteLength):ct("WebGLRenderer: Unsupported uniform value type.",R),I}function x(R){const I=R.target;I.removeEventListener("dispose",x);const b=u.indexOf(I.__bindingPointIndex);u.splice(b,1),s.deleteBuffer(a[I.id]),delete a[I.id],delete l[I.id]}function S(){for(const R in a)s.deleteBuffer(a[R]);u=[],a={},l={}}return{bind:p,update:d,dispose:S}}const $1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gi=null;function eA(){return Gi===null&&(Gi=new mg($1,16,16,_s,mr),Gi.name="DFG_LUT",Gi.minFilter=Mn,Gi.magFilter=Mn,Gi.wrapS=fr,Gi.wrapT=fr,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}class tA{constructor(e={}){const{canvas:t=rx(),context:r=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:M=vi}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=u;const C=M,x=new Set([Nh,Dh,Ih]),S=new Set([vi,qi,da,pa,Ph,Lh]),R=new Uint32Array(4),I=new Int32Array(4),b=new ie;let V=null,D=null;const k=[],w=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ji,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const q=this;let B=!1,z=null;this._outputColorSpace=mi;let Q=0,te=0,G=null,$=-1,W=null;const Y=new sn,F=new sn;let ee=null;const L=new Bt(0);let H=0,xe=t.width,_e=t.height,ve=1,X=null,ce=null;const fe=new sn(0,0,xe,_e),Ae=new sn(0,0,xe,_e);let De=!1;const Be=new gg;let At=!1,tt=!1;const ht=new on,_t=new ie,ft=new sn,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Lt=!1;function Rt(){return G===null?ve:1}let U=r;function xt(T,J){return t.getContext(T,J)}try{const T={alpha:!0,depth:a,stencil:l,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Rh}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",ze,!1),U===null){const J="webgl2";if(U=xt(J,T),U===null)throw xt(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw Pt("WebGLRenderer: "+T.message),T}let nt,It,Fe,Ot,P,y,ne,ge,Se,Ce,Re,de,pe,Oe,Ve,Le,be,at,lt,pt,j,Pe,me;function Ge(){nt=new eE(U),nt.init(),j=new X1(U,nt),It=new jy(U,nt,e,j),Fe=new G1(U,nt),It.reversedDepthBuffer&&g&&Fe.buffers.depth.setReversed(!0),Ot=new iE(U),P=new b1,y=new W1(U,nt,Fe,P,It,j,Ot),ne=new $y(q),ge=new aS(U),Pe=new Wy(U,ge),Se=new tE(U,ge,Ot,Pe),Ce=new sE(U,Se,ge,Pe,Ot),at=new rE(U,It,y),Ve=new Ky(P),Re=new R1(q,ne,nt,It,Pe,Ve),de=new Q1(q,P),pe=new L1,Oe=new O1(nt),be=new Gy(q,ne,Fe,Ce,E,p),Le=new V1(q,Ce,It),me=new J1(U,Ot,It,Fe),lt=new Xy(U,nt,Ot),pt=new nE(U,nt,Ot),Ot.programs=Re.programs,q.capabilities=It,q.extensions=nt,q.properties=P,q.renderLists=pe,q.shadowMap=Le,q.state=Fe,q.info=Ot}Ge(),C!==vi&&(N=new aE(C,t.width,t.height,a,l));const Ne=new q1(q,U);this.xr=Ne,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=nt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=nt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(T){T!==void 0&&(ve=T,this.setSize(xe,_e,!1))},this.getSize=function(T){return T.set(xe,_e)},this.setSize=function(T,J,ae=!0){if(Ne.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=T,_e=J,t.width=Math.floor(T*ve),t.height=Math.floor(J*ve),ae===!0&&(t.style.width=T+"px",t.style.height=J+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,T,J)},this.getDrawingBufferSize=function(T){return T.set(xe*ve,_e*ve).floor()},this.setDrawingBufferSize=function(T,J,ae){xe=T,_e=J,ve=ae,t.width=Math.floor(T*ae),t.height=Math.floor(J*ae),this.setViewport(0,0,T,J)},this.setEffects=function(T){if(C===vi){Pt("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let J=0;J<T.length;J++)if(T[J].isOutputPass===!0){ct("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(Y)},this.getViewport=function(T){return T.copy(fe)},this.setViewport=function(T,J,ae,oe){T.isVector4?fe.set(T.x,T.y,T.z,T.w):fe.set(T,J,ae,oe),Fe.viewport(Y.copy(fe).multiplyScalar(ve).round())},this.getScissor=function(T){return T.copy(Ae)},this.setScissor=function(T,J,ae,oe){T.isVector4?Ae.set(T.x,T.y,T.z,T.w):Ae.set(T,J,ae,oe),Fe.scissor(F.copy(Ae).multiplyScalar(ve).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(T){Fe.setScissorTest(De=T)},this.setOpaqueSort=function(T){X=T},this.setTransparentSort=function(T){ce=T},this.getClearColor=function(T){return T.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(T=!0,J=!0,ae=!0){let oe=0;if(T){let se=!1;if(G!==null){const Ue=G.texture.format;se=x.has(Ue)}if(se){const Ue=G.texture.type,ke=S.has(Ue),Te=be.getClearColor(),Ke=be.getClearAlpha(),Ye=Te.r,it=Te.g,rt=Te.b;ke?(R[0]=Ye,R[1]=it,R[2]=rt,R[3]=Ke,U.clearBufferuiv(U.COLOR,0,R)):(I[0]=Ye,I[1]=it,I[2]=rt,I[3]=Ke,U.clearBufferiv(U.COLOR,0,I))}else oe|=U.COLOR_BUFFER_BIT}J&&(oe|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ae&&(oe|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),oe!==0&&U.clear(oe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),z=T},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),be.dispose(),pe.dispose(),Oe.dispose(),P.dispose(),ne.dispose(),Ce.dispose(),Pe.dispose(),me.dispose(),Re.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",Mi),Ne.removeEventListener("sessionend",Qi),Qn.stop()};function Me(T){T.preventDefault(),Rm("WebGLRenderer: Context Lost."),B=!0}function We(){Rm("WebGLRenderer: Context Restored."),B=!1;const T=Ot.autoReset,J=Le.enabled,ae=Le.autoUpdate,oe=Le.needsUpdate,se=Le.type;Ge(),Ot.autoReset=T,Le.enabled=J,Le.autoUpdate=ae,Le.needsUpdate=oe,Le.type=se}function ze(T){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function mt(T){const J=T.target;J.removeEventListener("dispose",mt),Ct(J)}function Ct(T){an(T),P.remove(T)}function an(T){const J=P.get(T).programs;J!==void 0&&(J.forEach(function(ae){Re.releaseProgram(ae)}),T.isShaderMaterial&&Re.releaseShaderCache(T))}this.renderBufferDirect=function(T,J,ae,oe,se,Ue){J===null&&(J=wt);const ke=se.isMesh&&se.matrixWorld.determinant()<0,Te=Yr(T,J,ae,oe,se);Fe.setMaterial(oe,ke);let Ke=ae.index,Ye=1;if(oe.wireframe===!0){if(Ke=Se.getWireframeAttribute(ae),Ke===void 0)return;Ye=2}const it=ae.drawRange,rt=ae.attributes.position;let Ze=it.start*Ye,Mt=(it.start+it.count)*Ye;Ue!==null&&(Ze=Math.max(Ze,Ue.start*Ye),Mt=Math.min(Mt,(Ue.start+Ue.count)*Ye)),Ke!==null?(Ze=Math.max(Ze,0),Mt=Math.min(Mt,Ke.count)):rt!=null&&(Ze=Math.max(Ze,0),Mt=Math.min(Mt,rt.count));const Ut=Mt-Ze;if(Ut<0||Ut===1/0)return;Pe.setup(se,oe,Te,ae,Ke);let Vt,Ft=lt;if(Ke!==null&&(Vt=ge.get(Ke),Ft=pt,Ft.setIndex(Vt)),se.isMesh)oe.wireframe===!0?(Fe.setLineWidth(oe.wireframeLinewidth*Rt()),Ft.setMode(U.LINES)):Ft.setMode(U.TRIANGLES);else if(se.isLine){let Zt=oe.linewidth;Zt===void 0&&(Zt=1),Fe.setLineWidth(Zt*Rt()),se.isLineSegments?Ft.setMode(U.LINES):se.isLineLoop?Ft.setMode(U.LINE_LOOP):Ft.setMode(U.LINE_STRIP)}else se.isPoints?Ft.setMode(U.POINTS):se.isSprite&&Ft.setMode(U.TRIANGLES);if(se.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))Ft.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const Zt=se._multiDrawStarts,Xe=se._multiDrawCounts,nn=se._multiDrawCount,gt=Ke?ge.get(Ke).bytesPerElement:1,gn=P.get(oe).currentProgram.getUniforms();for(let yn=0;yn<nn;yn++)gn.setValue(U,"_gl_DrawID",yn),Ft.render(Zt[yn]/gt,Xe[yn])}else if(se.isInstancedMesh)Ft.renderInstances(Ze,Ut,se.count);else if(ae.isInstancedBufferGeometry){const Zt=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Xe=Math.min(ae.instanceCount,Zt);Ft.renderInstances(Ze,Ut,Xe)}else Ft.render(Ze,Ut)};function Nn(T,J,ae){T.transparent===!0&&T.side===Ni&&T.forceSinglePass===!1?(T.side=qn,T.needsUpdate=!0,Tn(T,J,ae),T.side=Xr,T.needsUpdate=!0,Tn(T,J,ae),T.side=Ni):Tn(T,J,ae)}this.compile=function(T,J,ae=null){ae===null&&(ae=T),D=Oe.get(ae),D.init(J),w.push(D),ae.traverseVisible(function(se){se.isLight&&se.layers.test(J.layers)&&(D.pushLight(se),se.castShadow&&D.pushShadow(se))}),T!==ae&&T.traverseVisible(function(se){se.isLight&&se.layers.test(J.layers)&&(D.pushLight(se),se.castShadow&&D.pushShadow(se))}),D.setupLights();const oe=new Set;return T.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Ue=se.material;if(Ue)if(Array.isArray(Ue))for(let ke=0;ke<Ue.length;ke++){const Te=Ue[ke];Nn(Te,ae,se),oe.add(Te)}else Nn(Ue,ae,se),oe.add(Ue)}),D=w.pop(),oe},this.compileAsync=function(T,J,ae=null){const oe=this.compile(T,J,ae);return new Promise(se=>{function Ue(){if(oe.forEach(function(ke){P.get(ke).currentProgram.isReady()&&oe.delete(ke)}),oe.size===0){se(T);return}setTimeout(Ue,10)}nt.get("KHR_parallel_shader_compile")!==null?Ue():setTimeout(Ue,10)})};let Si=null;function Zi(T){Si&&Si(T)}function Mi(){Qn.stop()}function Qi(){Qn.start()}const Qn=new yg;Qn.setAnimationLoop(Zi),typeof self<"u"&&Qn.setContext(self),this.setAnimationLoop=function(T){Si=T,Ne.setAnimationLoop(T),T===null?Qn.stop():Qn.start()},Ne.addEventListener("sessionstart",Mi),Ne.addEventListener("sessionend",Qi),this.render=function(T,J){if(J!==void 0&&J.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;z!==null&&z.renderStart(T,J);const ae=Ne.enabled===!0&&Ne.isPresenting===!0,oe=N!==null&&(G===null||ae)&&N.begin(q,G);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(J),J=Ne.getCamera()),T.isScene===!0&&T.onBeforeRender(q,T,J,G),D=Oe.get(T,w.length),D.init(J),D.state.textureUnits=y.getTextureUnits(),w.push(D),ht.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),Be.setFromProjectionMatrix(ht,Xi,J.reversedDepth),tt=this.localClippingEnabled,At=Ve.init(this.clippingPlanes,tt),V=pe.get(T,k.length),V.init(),k.push(V),Ne.enabled===!0&&Ne.isPresenting===!0){const ke=q.xr.getDepthSensingMesh();ke!==null&&jr(ke,J,-1/0,q.sortObjects)}jr(T,J,0,q.sortObjects),V.finish(),q.sortObjects===!0&&V.sort(X,ce),Lt=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,Lt&&be.addToRenderList(V,T),this.info.render.frame++,At===!0&&Ve.beginShadows();const se=D.state.shadowsArray;if(Le.render(se,T,J),At===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),(oe&&N.hasRenderPass())===!1){const ke=V.opaque,Te=V.transmissive;if(D.setupLights(),J.isArrayCamera){const Ke=J.cameras;if(Te.length>0)for(let Ye=0,it=Ke.length;Ye<it;Ye++){const rt=Ke[Ye];ln(ke,Te,T,rt)}Lt&&be.render(T);for(let Ye=0,it=Ke.length;Ye<it;Ye++){const rt=Ke[Ye];Ms(V,T,rt,rt.viewport)}}else Te.length>0&&ln(ke,Te,T,J),Lt&&be.render(T),Ms(V,T,J)}G!==null&&te===0&&(y.updateMultisampleRenderTarget(G),y.updateRenderTargetMipmap(G)),oe&&N.end(q),T.isScene===!0&&T.onAfterRender(q,T,J),Pe.resetDefaultState(),$=-1,W=null,w.pop(),w.length>0?(D=w[w.length-1],y.setTextureUnits(D.state.textureUnits),At===!0&&Ve.setGlobalState(q.clippingPlanes,D.state.camera)):D=null,k.pop(),k.length>0?V=k[k.length-1]:V=null,z!==null&&z.renderEnd()};function jr(T,J,ae,oe){if(T.visible===!1)return;if(T.layers.test(J.layers)){if(T.isGroup)ae=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(J);else if(T.isLightProbeGrid)D.pushLightProbeGrid(T);else if(T.isLight)D.pushLight(T),T.castShadow&&D.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Be.intersectsSprite(T)){oe&&ft.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ht);const ke=Ce.update(T),Te=T.material;Te.visible&&V.push(T,ke,Te,ae,ft.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Be.intersectsObject(T))){const ke=Ce.update(T),Te=T.material;if(oe&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ft.copy(T.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),ft.copy(ke.boundingSphere.center)),ft.applyMatrix4(T.matrixWorld).applyMatrix4(ht)),Array.isArray(Te)){const Ke=ke.groups;for(let Ye=0,it=Ke.length;Ye<it;Ye++){const rt=Ke[Ye],Ze=Te[rt.materialIndex];Ze&&Ze.visible&&V.push(T,ke,Ze,ae,ft.z,rt)}}else Te.visible&&V.push(T,ke,Te,ae,ft.z,null)}}const Ue=T.children;for(let ke=0,Te=Ue.length;ke<Te;ke++)jr(Ue[ke],J,ae,oe)}function Ms(T,J,ae,oe){const{opaque:se,transmissive:Ue,transparent:ke}=T;D.setupLightsView(ae),At===!0&&Ve.setGlobalState(q.clippingPlanes,ae),oe&&Fe.viewport(Y.copy(oe)),se.length>0&&wn(se,J,ae),Ue.length>0&&wn(Ue,J,ae),ke.length>0&&wn(ke,J,ae),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function ln(T,J,ae,oe){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[oe.id]===void 0){const Ze=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[oe.id]=new Ki(1,1,{generateMipmaps:!0,type:Ze?mr:vi,minFilter:ms,samples:Math.max(4,It.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Ue=D.state.transmissionRenderTarget[oe.id],ke=oe.viewport||Y;Ue.setSize(ke.z*q.transmissionResolutionScale,ke.w*q.transmissionResolutionScale);const Te=q.getRenderTarget(),Ke=q.getActiveCubeFace(),Ye=q.getActiveMipmapLevel();q.setRenderTarget(Ue),q.getClearColor(L),H=q.getClearAlpha(),H<1&&q.setClearColor(16777215,.5),q.clear(),Lt&&be.render(ae);const it=q.toneMapping;q.toneMapping=ji;const rt=oe.viewport;if(oe.viewport!==void 0&&(oe.viewport=void 0),D.setupLightsView(oe),At===!0&&Ve.setGlobalState(q.clippingPlanes,oe),wn(T,ae,oe),y.updateMultisampleRenderTarget(Ue),y.updateRenderTargetMipmap(Ue),nt.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Mt=0,Ut=J.length;Mt<Ut;Mt++){const Vt=J[Mt],{object:Ft,geometry:Zt,material:Xe,group:nn}=Vt;if(Xe.side===Ni&&Ft.layers.test(oe.layers)){const gt=Xe.side;Xe.side=qn,Xe.needsUpdate=!0,Un(Ft,ae,oe,Zt,Xe,nn),Xe.side=gt,Xe.needsUpdate=!0,Ze=!0}}Ze===!0&&(y.updateMultisampleRenderTarget(Ue),y.updateRenderTargetMipmap(Ue))}q.setRenderTarget(Te,Ke,Ye),q.setClearColor(L,H),rt!==void 0&&(oe.viewport=rt),q.toneMapping=it}function wn(T,J,ae){const oe=J.isScene===!0?J.overrideMaterial:null;for(let se=0,Ue=T.length;se<Ue;se++){const ke=T[se],{object:Te,geometry:Ke,group:Ye}=ke;let it=ke.material;it.allowOverride===!0&&oe!==null&&(it=oe),Te.layers.test(ae.layers)&&Un(Te,J,ae,Ke,it,Ye)}}function Un(T,J,ae,oe,se,Ue){T.onBeforeRender(q,J,ae,oe,se,Ue),T.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),se.onBeforeRender(q,J,ae,oe,T,Ue),se.transparent===!0&&se.side===Ni&&se.forceSinglePass===!1?(se.side=qn,se.needsUpdate=!0,q.renderBufferDirect(ae,J,oe,se,T,Ue),se.side=Xr,se.needsUpdate=!0,q.renderBufferDirect(ae,J,oe,se,T,Ue),se.side=Ni):q.renderBufferDirect(ae,J,oe,se,T,Ue),T.onAfterRender(q,J,ae,oe,se,Ue)}function Tn(T,J,ae){J.isScene!==!0&&(J=wt);const oe=P.get(T),se=D.state.lights,Ue=D.state.shadowsArray,ke=se.state.version,Te=Re.getParameters(T,se.state,Ue,J,ae,D.state.lightProbeGridArray),Ke=Re.getProgramCacheKey(Te);let Ye=oe.programs;oe.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?J.environment:null,oe.fog=J.fog;const it=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;oe.envMap=ne.get(T.envMap||oe.environment,it),oe.envMapRotation=oe.environment!==null&&T.envMap===null?J.environmentRotation:T.envMapRotation,Ye===void 0&&(T.addEventListener("dispose",mt),Ye=new Map,oe.programs=Ye);let rt=Ye.get(Ke);if(rt!==void 0){if(oe.currentProgram===rt&&oe.lightsStateVersion===ke)return On(T,Te),rt}else Te.uniforms=Re.getUniforms(T),z!==null&&T.isNodeMaterial&&z.build(T,ae,Te),T.onBeforeCompile(Te,q),rt=Re.acquireProgram(Te,Ke),Ye.set(Ke,rt),oe.uniforms=Te.uniforms;const Ze=oe.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ze.clippingPlanes=Ve.uniform),On(T,Te),oe.needsLights=ai(T),oe.lightsStateVersion=ke,oe.needsLights&&(Ze.ambientLightColor.value=se.state.ambient,Ze.lightProbe.value=se.state.probe,Ze.directionalLights.value=se.state.directional,Ze.directionalLightShadows.value=se.state.directionalShadow,Ze.spotLights.value=se.state.spot,Ze.spotLightShadows.value=se.state.spotShadow,Ze.rectAreaLights.value=se.state.rectArea,Ze.ltc_1.value=se.state.rectAreaLTC1,Ze.ltc_2.value=se.state.rectAreaLTC2,Ze.pointLights.value=se.state.point,Ze.pointLightShadows.value=se.state.pointShadow,Ze.hemisphereLights.value=se.state.hemi,Ze.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Ze.spotLightMatrix.value=se.state.spotLightMatrix,Ze.spotLightMap.value=se.state.spotLightMap,Ze.pointShadowMatrix.value=se.state.pointShadowMatrix),oe.lightProbeGrid=D.state.lightProbeGridArray.length>0,oe.currentProgram=rt,oe.uniformsList=null,rt}function Fn(T){if(T.uniformsList===null){const J=T.currentProgram.getUniforms();T.uniformsList=Ql.seqWithValue(J.seq,T.uniforms)}return T.uniformsList}function On(T,J){const ae=P.get(T);ae.outputColorSpace=J.outputColorSpace,ae.batching=J.batching,ae.batchingColor=J.batchingColor,ae.instancing=J.instancing,ae.instancingColor=J.instancingColor,ae.instancingMorph=J.instancingMorph,ae.skinning=J.skinning,ae.morphTargets=J.morphTargets,ae.morphNormals=J.morphNormals,ae.morphColors=J.morphColors,ae.morphTargetsCount=J.morphTargetsCount,ae.numClippingPlanes=J.numClippingPlanes,ae.numIntersection=J.numClipIntersection,ae.vertexAlphas=J.vertexAlphas,ae.vertexTangents=J.vertexTangents,ae.toneMapping=J.toneMapping}function Kr(T,J){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;b.setFromMatrixPosition(J.matrixWorld);for(let ae=0,oe=T.length;ae<oe;ae++){const se=T[ae];if(se.texture!==null&&se.boundingBox.containsPoint(b))return se}return null}function Yr(T,J,ae,oe,se){J.isScene!==!0&&(J=wt),y.resetTextureUnits();const Ue=J.fog,ke=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial?J.environment:null,Te=G===null?q.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:Tt.workingColorSpace,Ke=oe.isMeshStandardMaterial||oe.isMeshLambertMaterial&&!oe.envMap||oe.isMeshPhongMaterial&&!oe.envMap,Ye=ne.get(oe.envMap||ke,Ke),it=oe.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,rt=!!ae.attributes.tangent&&(!!oe.normalMap||oe.anisotropy>0),Ze=!!ae.morphAttributes.position,Mt=!!ae.morphAttributes.normal,Ut=!!ae.morphAttributes.color;let Vt=ji;oe.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Vt=q.toneMapping);const Ft=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Zt=Ft!==void 0?Ft.length:0,Xe=P.get(oe),nn=D.state.lights;if(At===!0&&(tt===!0||T!==W)){const zt=T===W&&oe.id===$;Ve.setState(oe,T,zt)}let gt=!1;oe.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==nn.state.version||Xe.outputColorSpace!==Te||se.isBatchedMesh&&Xe.batching===!1||!se.isBatchedMesh&&Xe.batching===!0||se.isBatchedMesh&&Xe.batchingColor===!0&&se.colorTexture===null||se.isBatchedMesh&&Xe.batchingColor===!1&&se.colorTexture!==null||se.isInstancedMesh&&Xe.instancing===!1||!se.isInstancedMesh&&Xe.instancing===!0||se.isSkinnedMesh&&Xe.skinning===!1||!se.isSkinnedMesh&&Xe.skinning===!0||se.isInstancedMesh&&Xe.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Xe.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&Xe.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&Xe.instancingMorph===!1&&se.morphTexture!==null||Xe.envMap!==Ye||oe.fog===!0&&Xe.fog!==Ue||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==Ve.numPlanes||Xe.numIntersection!==Ve.numIntersection)||Xe.vertexAlphas!==it||Xe.vertexTangents!==rt||Xe.morphTargets!==Ze||Xe.morphNormals!==Mt||Xe.morphColors!==Ut||Xe.toneMapping!==Vt||Xe.morphTargetsCount!==Zt||!!Xe.lightProbeGrid!=D.state.lightProbeGridArray.length>0)&&(gt=!0):(gt=!0,Xe.__version=oe.version);let gn=Xe.currentProgram;gt===!0&&(gn=Tn(oe,J,se),z&&oe.isNodeMaterial&&z.onUpdateProgram(oe,gn,Xe));let yn=!1,dt=!1,Jn=!1;const kt=gn.getUniforms(),jt=Xe.uniforms;if(Fe.useProgram(gn.program)&&(yn=!0,dt=!0,Jn=!0),oe.id!==$&&($=oe.id,dt=!0),Xe.needsLights){const zt=Kr(D.state.lightProbeGridArray,se);Xe.lightProbeGrid!==zt&&(Xe.lightProbeGrid=zt,dt=!0)}if(yn||W!==T){Fe.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),kt.setValue(U,"projectionMatrix",T.projectionMatrix),kt.setValue(U,"viewMatrix",T.matrixWorldInverse);const Ei=kt.map.cameraPosition;Ei!==void 0&&Ei.setValue(U,_t.setFromMatrixPosition(T.matrixWorld)),It.logarithmicDepthBuffer&&kt.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(oe.isMeshPhongMaterial||oe.isMeshToonMaterial||oe.isMeshLambertMaterial||oe.isMeshBasicMaterial||oe.isMeshStandardMaterial||oe.isShaderMaterial)&&kt.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),W!==T&&(W=T,dt=!0,Jn=!0)}if(Xe.needsLights&&(nn.state.directionalShadowMap.length>0&&kt.setValue(U,"directionalShadowMap",nn.state.directionalShadowMap,y),nn.state.spotShadowMap.length>0&&kt.setValue(U,"spotShadowMap",nn.state.spotShadowMap,y),nn.state.pointShadowMap.length>0&&kt.setValue(U,"pointShadowMap",nn.state.pointShadowMap,y)),se.isSkinnedMesh){kt.setOptional(U,se,"bindMatrix"),kt.setOptional(U,se,"bindMatrixInverse");const zt=se.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),kt.setValue(U,"boneTexture",zt.boneTexture,y))}se.isBatchedMesh&&(kt.setOptional(U,se,"batchingTexture"),kt.setValue(U,"batchingTexture",se._matricesTexture,y),kt.setOptional(U,se,"batchingIdTexture"),kt.setValue(U,"batchingIdTexture",se._indirectTexture,y),kt.setOptional(U,se,"batchingColorTexture"),se._colorsTexture!==null&&kt.setValue(U,"batchingColorTexture",se._colorsTexture,y));const yi=ae.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)&&at.update(se,ae,gn),(dt||Xe.receiveShadow!==se.receiveShadow)&&(Xe.receiveShadow=se.receiveShadow,kt.setValue(U,"receiveShadow",se.receiveShadow)),(oe.isMeshStandardMaterial||oe.isMeshLambertMaterial||oe.isMeshPhongMaterial)&&oe.envMap===null&&J.environment!==null&&(jt.envMapIntensity.value=J.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=eA()),dt){if(kt.setValue(U,"toneMappingExposure",q.toneMappingExposure),Xe.needsLights&&oi(jt,Jn),Ue&&oe.fog===!0&&de.refreshFogUniforms(jt,Ue),de.refreshMaterialUniforms(jt,oe,ve,_e,D.state.transmissionRenderTarget[T.id]),Xe.needsLights&&Xe.lightProbeGrid){const zt=Xe.lightProbeGrid;jt.probesSH.value=zt.texture,jt.probesMin.value.copy(zt.boundingBox.min),jt.probesMax.value.copy(zt.boundingBox.max),jt.probesResolution.value.copy(zt.resolution)}Ql.upload(U,Fn(Xe),jt,y)}if(oe.isShaderMaterial&&oe.uniformsNeedUpdate===!0&&(Ql.upload(U,Fn(Xe),jt,y),oe.uniformsNeedUpdate=!1),oe.isSpriteMaterial&&kt.setValue(U,"center",se.center),kt.setValue(U,"modelViewMatrix",se.modelViewMatrix),kt.setValue(U,"normalMatrix",se.normalMatrix),kt.setValue(U,"modelMatrix",se.matrixWorld),oe.uniformsGroups!==void 0){const zt=oe.uniformsGroups;for(let Ei=0,Oi=zt.length;Ei<Oi;Ei++){const qr=zt[Ei];me.update(qr,gn),me.bind(qr,gn)}}return gn}function oi(T,J){T.ambientLightColor.needsUpdate=J,T.lightProbe.needsUpdate=J,T.directionalLights.needsUpdate=J,T.directionalLightShadows.needsUpdate=J,T.pointLights.needsUpdate=J,T.pointLightShadows.needsUpdate=J,T.spotLights.needsUpdate=J,T.spotLightShadows.needsUpdate=J,T.rectAreaLights.needsUpdate=J,T.hemisphereLights.needsUpdate=J}function ai(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return te},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(T,J,ae){const oe=P.get(T);oe.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,oe.__autoAllocateDepthBuffer===!1&&(oe.__useRenderToTexture=!1),P.get(T.texture).__webglTexture=J,P.get(T.depthTexture).__webglTexture=oe.__autoAllocateDepthBuffer?void 0:ae,oe.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,J){const ae=P.get(T);ae.__webglFramebuffer=J,ae.__useDefaultFramebuffer=J===void 0};const Xt=U.createFramebuffer();this.setRenderTarget=function(T,J=0,ae=0){G=T,Q=J,te=ae;let oe=null,se=!1,Ue=!1;if(T){const Te=P.get(T);if(Te.__useDefaultFramebuffer!==void 0){Fe.bindFramebuffer(U.FRAMEBUFFER,Te.__webglFramebuffer),Y.copy(T.viewport),F.copy(T.scissor),ee=T.scissorTest,Fe.viewport(Y),Fe.scissor(F),Fe.setScissorTest(ee),$=-1;return}else if(Te.__webglFramebuffer===void 0)y.setupRenderTarget(T);else if(Te.__hasExternalTextures)y.rebindTextures(T,P.get(T.texture).__webglTexture,P.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const it=T.depthTexture;if(Te.__boundDepthTexture!==it){if(it!==null&&P.has(it)&&(T.width!==it.image.width||T.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");y.setupDepthRenderbuffer(T)}}const Ke=T.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ue=!0);const Ye=P.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ye[J])?oe=Ye[J][ae]:oe=Ye[J],se=!0):T.samples>0&&y.useMultisampledRTT(T)===!1?oe=P.get(T).__webglMultisampledFramebuffer:Array.isArray(Ye)?oe=Ye[ae]:oe=Ye,Y.copy(T.viewport),F.copy(T.scissor),ee=T.scissorTest}else Y.copy(fe).multiplyScalar(ve).floor(),F.copy(Ae).multiplyScalar(ve).floor(),ee=De;if(ae!==0&&(oe=Xt),Fe.bindFramebuffer(U.FRAMEBUFFER,oe)&&Fe.drawBuffers(T,oe),Fe.viewport(Y),Fe.scissor(F),Fe.setScissorTest(ee),se){const Te=P.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+J,Te.__webglTexture,ae)}else if(Ue){const Te=J;for(let Ke=0;Ke<T.textures.length;Ke++){const Ye=P.get(T.textures[Ke]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ke,Ye.__webglTexture,ae,Te)}}else if(T!==null&&ae!==0){const Te=P.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Te.__webglTexture,ae)}$=-1},this.readRenderTargetPixels=function(T,J,ae,oe,se,Ue,ke,Te=0){if(!(T&&T.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=P.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ke!==void 0&&(Ke=Ke[ke]),Ke){Fe.bindFramebuffer(U.FRAMEBUFFER,Ke);try{const Ye=T.textures[Te],it=Ye.format,rt=Ye.type;if(T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Te),!It.textureFormatReadable(it)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(rt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=T.width-oe&&ae>=0&&ae<=T.height-se&&U.readPixels(J,ae,oe,se,j.convert(it),j.convert(rt),Ue)}finally{const Ye=G!==null?P.get(G).__webglFramebuffer:null;Fe.bindFramebuffer(U.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(T,J,ae,oe,se,Ue,ke,Te=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=P.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ke!==void 0&&(Ke=Ke[ke]),Ke)if(J>=0&&J<=T.width-oe&&ae>=0&&ae<=T.height-se){Fe.bindFramebuffer(U.FRAMEBUFFER,Ke);const Ye=T.textures[Te],it=Ye.format,rt=Ye.type;if(T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Te),!It.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ze),U.bufferData(U.PIXEL_PACK_BUFFER,Ue.byteLength,U.STREAM_READ),U.readPixels(J,ae,oe,se,j.convert(it),j.convert(rt),0);const Mt=G!==null?P.get(G).__webglFramebuffer:null;Fe.bindFramebuffer(U.FRAMEBUFFER,Mt);const Ut=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await sx(U,Ut,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ze),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ue),U.deleteBuffer(Ze),U.deleteSync(Ut),Ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,J=null,ae=0){const oe=Math.pow(2,-ae),se=Math.floor(T.image.width*oe),Ue=Math.floor(T.image.height*oe),ke=J!==null?J.x:0,Te=J!==null?J.y:0;y.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,ae,0,0,ke,Te,se,Ue),Fe.unbindTexture()};const So=U.createFramebuffer(),tn=U.createFramebuffer();this.copyTextureToTexture=function(T,J,ae=null,oe=null,se=0,Ue=0){let ke,Te,Ke,Ye,it,rt,Ze,Mt,Ut;const Vt=T.isCompressedTexture?T.mipmaps[Ue]:T.image;if(ae!==null)ke=ae.max.x-ae.min.x,Te=ae.max.y-ae.min.y,Ke=ae.isBox3?ae.max.z-ae.min.z:1,Ye=ae.min.x,it=ae.min.y,rt=ae.isBox3?ae.min.z:0;else{const jt=Math.pow(2,-se);ke=Math.floor(Vt.width*jt),Te=Math.floor(Vt.height*jt),T.isDataArrayTexture?Ke=Vt.depth:T.isData3DTexture?Ke=Math.floor(Vt.depth*jt):Ke=1,Ye=0,it=0,rt=0}oe!==null?(Ze=oe.x,Mt=oe.y,Ut=oe.z):(Ze=0,Mt=0,Ut=0);const Ft=j.convert(J.format),Zt=j.convert(J.type);let Xe;J.isData3DTexture?(y.setTexture3D(J,0),Xe=U.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(y.setTexture2DArray(J,0),Xe=U.TEXTURE_2D_ARRAY):(y.setTexture2D(J,0),Xe=U.TEXTURE_2D),Fe.activeTexture(U.TEXTURE0),Fe.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,J.flipY),Fe.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),Fe.pixelStorei(U.UNPACK_ALIGNMENT,J.unpackAlignment);const nn=Fe.getParameter(U.UNPACK_ROW_LENGTH),gt=Fe.getParameter(U.UNPACK_IMAGE_HEIGHT),gn=Fe.getParameter(U.UNPACK_SKIP_PIXELS),yn=Fe.getParameter(U.UNPACK_SKIP_ROWS),dt=Fe.getParameter(U.UNPACK_SKIP_IMAGES);Fe.pixelStorei(U.UNPACK_ROW_LENGTH,Vt.width),Fe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Vt.height),Fe.pixelStorei(U.UNPACK_SKIP_PIXELS,Ye),Fe.pixelStorei(U.UNPACK_SKIP_ROWS,it),Fe.pixelStorei(U.UNPACK_SKIP_IMAGES,rt);const Jn=T.isDataArrayTexture||T.isData3DTexture,kt=J.isDataArrayTexture||J.isData3DTexture;if(T.isDepthTexture){const jt=P.get(T),yi=P.get(J),zt=P.get(jt.__renderTarget),Ei=P.get(yi.__renderTarget);Fe.bindFramebuffer(U.READ_FRAMEBUFFER,zt.__webglFramebuffer),Fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let Oi=0;Oi<Ke;Oi++)Jn&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,P.get(T).__webglTexture,se,rt+Oi),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,P.get(J).__webglTexture,Ue,Ut+Oi)),U.blitFramebuffer(Ye,it,ke,Te,Ze,Mt,ke,Te,U.DEPTH_BUFFER_BIT,U.NEAREST);Fe.bindFramebuffer(U.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(se!==0||T.isRenderTargetTexture||P.has(T)){const jt=P.get(T),yi=P.get(J);Fe.bindFramebuffer(U.READ_FRAMEBUFFER,So),Fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,tn);for(let zt=0;zt<Ke;zt++)Jn?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,jt.__webglTexture,se,rt+zt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,jt.__webglTexture,se),kt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yi.__webglTexture,Ue,Ut+zt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,yi.__webglTexture,Ue),se!==0?U.blitFramebuffer(Ye,it,ke,Te,Ze,Mt,ke,Te,U.COLOR_BUFFER_BIT,U.NEAREST):kt?U.copyTexSubImage3D(Xe,Ue,Ze,Mt,Ut+zt,Ye,it,ke,Te):U.copyTexSubImage2D(Xe,Ue,Ze,Mt,Ye,it,ke,Te);Fe.bindFramebuffer(U.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else kt?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Xe,Ue,Ze,Mt,Ut,ke,Te,Ke,Ft,Zt,Vt.data):J.isCompressedArrayTexture?U.compressedTexSubImage3D(Xe,Ue,Ze,Mt,Ut,ke,Te,Ke,Ft,Vt.data):U.texSubImage3D(Xe,Ue,Ze,Mt,Ut,ke,Te,Ke,Ft,Zt,Vt):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Ue,Ze,Mt,ke,Te,Ft,Zt,Vt.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Ue,Ze,Mt,Vt.width,Vt.height,Ft,Vt.data):U.texSubImage2D(U.TEXTURE_2D,Ue,Ze,Mt,ke,Te,Ft,Zt,Vt);Fe.pixelStorei(U.UNPACK_ROW_LENGTH,nn),Fe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,gt),Fe.pixelStorei(U.UNPACK_SKIP_PIXELS,gn),Fe.pixelStorei(U.UNPACK_SKIP_ROWS,yn),Fe.pixelStorei(U.UNPACK_SKIP_IMAGES,dt),Ue===0&&J.generateMipmaps&&U.generateMipmap(Xe),Fe.unbindTexture()},this.initRenderTarget=function(T){P.get(T).__webglFramebuffer===void 0&&y.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?y.setTextureCube(T,0):T.isData3DTexture?y.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?y.setTexture2DArray(T,0):y.setTexture2D(T,0),Fe.unbindTexture()},this.resetState=function(){Q=0,te=0,G=null,Fe.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}function oa(s,e,t){const r=e/100,a=t/100,l=(1-Math.abs(2*a-1))*r,u=l*(1-Math.abs(s/60%2-1)),h=a-l/2;let p=0,d=0,v=0;s<60?[p,d,v]=[l,u,0]:s<120?[p,d,v]=[u,l,0]:s<180?[p,d,v]=[0,l,u]:s<240?[p,d,v]=[0,u,l]:s<300?[p,d,v]=[u,0,l]:[p,d,v]=[l,0,u];const _=g=>Math.round((g+h)*255).toString(16).padStart(2,"0");return`#${_(p)}${_(d)}${_(v)}`}function Jl(s,e,t){if(t==="grayscale")return["#FFFFFF","#000000","#FFFFFF","#000000"];if(t==="black")return[oa(s,e,50),"#FFFFFF",oa(s,e*.6,70),oa(s,e*.8,35)];const r=oa(s,e,50),a=oa((s+180)%360,e,50);return[r,a,r,a]}const y0=[1],ua=[0];let Pg=0;const nA=new Set;function iA(s,e){for(let t=0;t<e.length;t++){const r=e[t]??1;y0[t]=r,ua[t]=(ua[t]??0)+s*r}for(const t of nA)ua[t]=(ua[t]??0)+s*(y0[t]??1)}function rA(s){Pg=s}function sA(){return ua[Pg]??0}const oA=12,Vr=Math.PI*2;function aA(s,e){if(e<=0)return 0;const t=Math.min(2.2,10/e);return Math.min(e,1+Math.floor(s/t))}const Xl=[[[0,"#5ea733"],[.1,"#a9c97a"],[.17,"#efe6c6"],[.26,"#f2b2c5"],[.36,"#df4a67"],[.45,"#b81f3d"],[.53,"#1a0d33"],[.61,"#2e44d8"],[.7,"#5f78f0"],[.79,"#dfe4f4"],[.87,"#eee6c4"],[.94,"#9cc46c"],[1,"#5ea733"]],[[0,"#e0a82e"],[.1,"#f0cd7a"],[.17,"#f6ead0"],[.26,"#f6b49a"],[.36,"#e8573a"],[.45,"#b52a1c"],[.53,"#2a0a0c"],[.61,"#a8401c"],[.7,"#e8823e"],[.79,"#f7dcc4"],[.87,"#f4e8c8"],[.94,"#e9c060"],[1,"#e0a82e"]],[[0,"#1f9a8a"],[.1,"#86d1bf"],[.17,"#eaf2e2"],[.26,"#9fe3e8"],[.36,"#25b5d4"],[.45,"#13708f"],[.53,"#0b1430"],[.61,"#5a35c8"],[.7,"#9a7cf0"],[.79,"#e6e0f6"],[.87,"#e4f2ea"],[.94,"#5cc2a6"],[1,"#1f9a8a"]],[[0,"#2b3f8f"],[.1,"#7d8fd0"],[.17,"#eef0f6"],[.26,"#c9d0ea"],[.36,"#5266b8"],[.45,"#22307a"],[.53,"#070a1c"],[.61,"#26357e"],[.7,"#6a7cc6"],[.79,"#e8ebf5"],[.87,"#f4f3ee"],[.94,"#8a9ad6"],[1,"#2b3f8f"]]],lA=["Inflated","Paper","Line","Print"],cA=`
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
}`,uA=`
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
}`;function dc(s){const e=s.replace("#",""),t=e.length===3?e.split("").map(g=>g+g).join(""):e,r=(parseInt(t.slice(0,2),16)||0)/255,a=(parseInt(t.slice(2,4),16)||0)/255,l=(parseInt(t.slice(4,6),16)||0)/255,u=Math.max(r,a,l),h=Math.min(r,a,l),p=(u+h)/2;if(u===h)return[0,0,p];const d=u-h,v=p>.5?d/(2-u-h):d/(u+h);let _;return u===r?_=((a-l)/d+(a<l?6:0))*60:u===a?_=((l-r)/d+2)*60:_=((r-a)/d+4)*60,[_,v,p]}function Lg(s,e,t){return`hsl(${(s%360+360)%360} ${Math.max(0,Math.min(1,e))*100}% ${t*100}%)`}const E0=dc(Jl(245,100,"contrast")[0]);function fA(s){const[e,t]=dc(s[0]??"#000000");return t===0?{hue:0,sat:0}:{hue:e-E0[0],sat:t/(E0[1]||1)}}function A0(s,e){const t=document.createElement("canvas");t.width=512,t.height=1;const r=t.getContext("2d"),a=r.createLinearGradient(0,0,512,0);for(const[u,h]of s){const[p,d,v]=dc(h);a.addColorStop(u,Lg(p+e.hue,d*e.sat,v))}r.fillStyle=a,r.fillRect(0,0,512,1);const l=new qx(t);return l.wrapS=$l,l.magFilter=Mn,l.minFilter=Mn,l.generateMipmaps=!1,l}class hA{constructor(){ue(this,"textures");ue(this,"turnKey","#reference");ue(this,"palFrom",0);ue(this,"palTo",0);ue(this,"palMix",1);ue(this,"styleUniform",{value:0});ue(this,"turn",{hue:0,sat:1});this.textures=Xl.map(e=>A0(e,{hue:0,sat:1}))}shared(){return{uPalA:{value:this.textures[0]},uPalB:{value:this.textures[0]},uPalMix:{value:0},uT:{value:0},uOff:{value:0},uWA:{value:0},uWB:{value:0},uWC:{value:0},uDepth:{value:.32},uSpec:{value:.16},uCenter:{value:new ie}}}material(e,t,r={}){return new xi({vertexShader:cA,fragmentShader:uA,side:Ni,uniforms:{...t,uStyle:this.styleUniform,uMode:{value:e},uAng:{value:0},uWS:{value:1},...r}})}update(e,t,r,a,l=0){this.styleUniform.value=Math.max(0,Math.min(lA.length-1,Math.round(l)));const u=e[0]??"";if(u!==this.turnKey){this.turnKey=u;const p=fA(e);this.turn=p;const d=this.textures;this.textures=Xl.map(v=>A0(v,p));for(const v of d)v.dispose()}const h=Math.max(0,Math.min(Xl.length-1,Math.round(t)));a&&(this.palFrom=this.palTo=h,this.palMix=1),h!==this.palTo&&(this.palFrom=this.palMix<.5?this.palFrom:this.palTo,this.palTo=h,this.palMix=0),this.palMix=Math.min(1,this.palMix+r)}apply(e,t,r){e.uPalA.value=this.textures[this.palFrom],e.uPalB.value=this.textures[this.palTo],e.uPalMix.value=this.palMix,e.uDepth.value=t,e.uSpec.value=r}backdrop(e,t,r,a){const l=this.styleUniform.value;if(l===0){Ig(e,t,r,a);return}const u=Math.max(0,Math.min(1,a));if(e.globalCompositeOperation="source-over",e.globalAlpha=1,e.fillStyle="#000",e.fillRect(0,0,t,r),l===2||u<=0)return;const h=Xl[this.palTo],p=h.find(([g])=>g===(l===1?.53:.17))??h[0],[d,v,_]=dc(p[1]);e.globalAlpha=u,e.fillStyle=Lg(d+this.turn.hue,v*this.turn.sat,l===1?_*1.25:_),e.fillRect(0,0,t,r),e.globalAlpha=1}dispose(){for(const e of this.textures)e.dispose();this.textures=[]}}function dA(s,e,t){const r=e/t,a=30,l=Math.tan(a/2*Math.PI/180),u=r<16/9?2*Math.atan(l*(16/9)/r)*180/Math.PI:a;(s.aspect!==r||s.fov!==u)&&(s.aspect=r,s.fov=u,s.updateProjectionMatrix())}function Ig(s,e,t,r){const a=Math.max(0,Math.min(1,r)),l=u=>{const h=parseInt(u.slice(1),16),p=Math.round((h>>16&255)*a),d=Math.round((h>>8&255)*a),v=Math.round((h&255)*a);return`rgb(${p},${d},${v})`};if(s.globalCompositeOperation="source-over",s.globalAlpha=1,a<=0)s.fillStyle="#000";else{const u=s.createLinearGradient(0,0,0,t);u.addColorStop(0,l("#8e94a2")),u.addColorStop(.2,l("#bfc3d0")),u.addColorStop(.42,l("#dde1ec")),u.addColorStop(.68,l("#d9dde9")),u.addColorStop(1,l("#9ea2af")),s.fillStyle=u}s.fillRect(0,0,e,t)}function pA(s){const e=new tA({canvas:s,antialias:!0,alpha:!0,powerPreference:"high-performance"});return e.setPixelRatio(1),e.setClearColor(0,0),e}function mA(s,e,t,r){s.fillStyle="#000",s.fillRect(0,0,e,t),s.fillStyle="rgba(255,255,255,0.4)",s.font="500 14px ui-monospace, monospace",s.textAlign="center",s.fillText(`${r} NEEDS WEBGL`,e/2,t/2)}class zh{constructor(e){ue(this,"dt",1/60);ue(this,"step",0);ue(this,"openness");ue(this,"aim",{x:0,y:0});ue(this,"spread",.4);ue(this,"depth",.35);ue(this,"turn",0);ue(this,"pinch",0);ue(this,"fist",0);ue(this,"clapped",!1);ue(this,"clapStrength",0);ue(this,"wasClapping",!1);ue(this,"burst",0);ue(this,"bump",0);ue(this,"bass",0);ue(this,"mid",0);ue(this,"high",0);ue(this,"kick",0);ue(this,"snare",0);ue(this,"hat",0);ue(this,"energy",.5);ue(this,"build",0);ue(this,"drop",0);ue(this,"bright",.5);ue(this,"lastClock",null);ue(this,"lastFrame",0);this.rest=e,this.openness=e}read(e,t){const r=performance.now(),a=this.lastFrame?Math.min(.1,(r-this.lastFrame)/1e3):1/60;this.lastFrame=r;const l=sA();this.step=this.lastClock===null?0:Math.max(-.2,Math.min(.2,l-this.lastClock)),this.lastClock=l,this.dt=a;const u=[e.left,e.right].filter(Boolean);let h=this.rest;if(u.length){const R=Math.max(...u.map(I=>I.gesture==="fist"?0:I.fingerCount??3));h=Math.max(0,Math.min(1,R/5))}this.openness+=(h-this.openness)*(1-Math.exp(-a*5));let p=0,d=0;u.length&&(p=(u.reduce((R,I)=>R+I.position.x,0)/u.length-.5)*2,d=(.5-u.reduce((R,I)=>R+I.position.y,0)/u.length)*2);const v=1-Math.exp(-a*4);this.aim.x+=(p-this.aim.x)*v,this.aim.y+=(d-this.aim.y)*v,this.spread+=((e.distanceBetweenHands??.4)-this.spread)*v;const _=u.map(R=>R.depth).filter(R=>R!==void 0);this.depth+=((_.length?Math.max(..._):.35)-this.depth)*v;const g=e.twist??(u.length===1?u[0].angle??0:0);this.turn+=(g-this.turn)*v;const M=u.length?Math.max(...u.map(R=>R.pinch??0)):0;this.pinch+=(M-this.pinch)*(1-Math.exp(-a*10));const E=u.length?Math.max(...u.map(R=>R.openness!==void 0?1-R.openness:R.gesture==="fist"?1:0)):0;this.fist+=(Math.min(1,Math.max(0,(E-.35)/.4))-this.fist)*(1-Math.exp(-a*8));const C=!!e.clapping&&!e.synthetic;this.clapped=C&&!this.wasClapping,this.clapStrength=this.clapped?Math.max(.6,e.clapIntensity??1):0,this.wasClapping=C;const x=e.clapping?e.clapIntensity??1:0;this.burst=Math.max(this.burst*Math.exp(-a*2.2),x);const S=(R,I,b,V)=>R+(I-R)*(1-Math.exp(-a*(I>R?b:V)));this.bass=S(this.bass,(t==null?void 0:t.bass)??0,6,1.5),this.mid=S(this.mid,(t==null?void 0:t.mid)??0,4,1),this.high=S(this.high,(t==null?void 0:t.high)??0,8,2.5),this.bump*=Math.exp(-a/.07),t!=null&&t.beat&&(this.bump=Math.max(this.bump,t.beatIntensity||1)),this.kick=(t==null?void 0:t.kick)??0,this.bump=Math.max(this.bump,this.kick*.9),this.snare=(t==null?void 0:t.snare)??0,this.hat=(t==null?void 0:t.hat)??0,this.energy=S(this.energy,t!=null&&t.live?t.energy??.5:.5,1,1),this.build=(t==null?void 0:t.build)??0,this.drop=(t==null?void 0:t.drop)??0,this.bright=S(this.bright,(t==null?void 0:t.bright)??.5,1,1)}}class gA{constructor(e,t){ue(this,"canvas");ue(this,"ctx");ue(this,"cfg",_m);ue(this,"playing",new zh(.6));ue(this,"n",0);ue(this,"x",new Float32Array(0));ue(this,"y",new Float32Array(0));ue(this,"z",new Float32Array(0));ue(this,"vx",new Float32Array(0));ue(this,"vy",new Float32Array(0));ue(this,"light",new Float32Array(0));ue(this,"phase",new Float32Array(0));ue(this,"time",0);ue(this,"events",[]);ue(this,"lastKick",0);ue(this,"lastSnare",0);ue(this,"lastHat",0);ue(this,"kicks",0);ue(this,"flow",[Math.random()*10,Math.random()*10,Math.random()*10]);ue(this,"flowTo",[...this.flow]);ue(this,"gather",0);ue(this,"breath",0);ue(this,"grain",document.createElement("canvas"));ue(this,"aspect",16/9);this.canvas=e,this.ctx=t,this.grain.width=this.grain.height=256;const r=this.grain.getContext("2d"),a=r.createImageData(256,256);for(let l=0;l<a.data.length;l+=4){const u=Math.random()<.5?0:255;a.data[l]=a.data[l+1]=a.data[l+2]=u,a.data[l+3]=Math.random()<.35?255:0}r.putImageData(a,0,0)}setParams(e){this.cfg=Ch(_m,e)}resize(e){const t=Math.min(this.n,e),r=a=>{const l=new Float32Array(e);return l.set(a.subarray(0,t)),l};this.x=r(this.x),this.y=r(this.y),this.z=r(this.z),this.vx=r(this.vx),this.vy=r(this.vy),this.light=r(this.light),this.phase=r(this.phase);for(let a=t;a<e;a++)this.x[a]=Math.random()*this.aspect,this.y[a]=Math.random(),this.z[a]=.25+.75*Math.pow(Math.random(),2.2),this.phase[a]=Math.random()*Math.PI*2,this.light[a]=0;this.n=e}angleAt(e,t,r){const[a,l,u]=this.flow;return Math.sin(e*1.3+a+r*.05)*1.7+Math.cos(t*1.7-l+r*.04)*1.5+Math.sin((e+t)*.8+u)*1.2}render(e,t,r){const{canvas:a,ctx:l,cfg:u}=this,h=a.width,p=a.height;if(!h||!p)return;this.aspect=h/p;const d=this.aspect,v=this.playing;v.read(e,r);const _=Math.min(.1,v.dt),g=Math.min(.08,Math.max(0,v.step));this.time+=g;const M=Math.max(50,Math.min(6e3,Math.round(u.field.count)));M!==this.n&&this.resize(M);const E=!!(r!=null&&r.live),C=F=>1-Math.exp(-_*F),x=Math.max(v.kick,v.bump)*u.sound.beat;if(x>.45&&this.lastKick<=.45){this.kicks+=1;const F=Math.random(),ee=(.5+.6*Math.random())*Math.min(1.4,x),L=F<.5?0:F<.82?1:2;this.events.push({kind:L,x:Math.random()*d,y:.1+.8*Math.random(),age:0,strength:ee,angle:Math.random()*Math.PI,reach:.2+.5*Math.random()}),this.kicks%(6+Math.floor(Math.random()*6))===0&&(this.flowTo=this.flowTo.map(H=>H+(Math.random()-.5)*4))}this.lastKick=x;const S=(F,ee)=>{for(let L=0;L<F;L++){const H=Math.floor(Math.random()*this.n);this.light[H]=Math.max(this.light[H],ee)}},R=v.snare*u.sound.sparks;R>.5&&this.lastSnare<=.5&&S(Math.round(this.n*.012),1.1),this.lastSnare=R;const I=v.hat*u.sound.sparks;if(I>.5&&this.lastHat<=.5&&S(Math.round(this.n*.004),.7),this.lastHat=I,!E&&Math.random()<_*.35&&this.events.push({kind:0,x:Math.random()*d,y:Math.random(),age:0,strength:.45,angle:0,reach:.4}),v.clapped&&u.hands.clap>0)for(let F=0;F<this.n;F++){this.light[F]=Math.max(this.light[F],1.2*u.hands.clap);const ee=this.x[F]-d/2,L=this.y[F]-.5,H=Math.hypot(ee,L)+.05;this.vx[F]+=ee/H*.25*u.hands.clap,this.vy[F]+=L/H*.25*u.hands.clap}this.breath+=(v.bass*u.sound.bass-this.breath)*C(4);for(let F=0;F<3;F++)this.flow[F]+=(this.flowTo[F]-this.flow[F])*C(.3);const V=!e.synthetic?[e.left,e.right].filter(F=>!!F):[],D=V.length?v.fist:0,k=Math.max(Math.min(1,u.form.circle),D*Math.min(1,u.hands.reach));this.gather+=(k-this.gather)*C(k>this.gather?.9:.6);const w=.018*u.field.drift,N=this.time,q=d/2,B=.5,z=.3,Q=N*.04,te=Math.exp(-_*2.2);for(let F=0;F<this.n;F++){const ee=this.z[F],L=this.angleAt(this.x[F],this.y[F],N);let H=this.x[F]+(Math.cos(L)*w*ee+this.vx[F])*g,xe=this.y[F]+(Math.sin(L)*w*ee+this.vy[F])*g;H+=(H-q)*this.breath*.004*ee,xe+=(xe-B)*this.breath*.004*ee;for(const _e of V){const ve=_e.position.x*d,X=_e.position.y,ce=H-ve,fe=xe-X,Ae=ce*ce+fe*fe,De=Math.exp(-Ae/.02)*(1-D)*u.hands.reach;if(De>.01){const Be=Math.sqrt(Ae)+.01;H+=ce/Be*De*.006,xe+=fe/Be*De*.006,this.light[F]=Math.max(this.light[F],De*.9)}}if(this.gather>.002){const _e=this.phase[F]+Q,ve=z*(.94+.12*(F*.618%1))*(1+.06*this.breath),X=q+Math.cos(_e)*ve,ce=B+Math.sin(_e)*ve,fe=this.gather*this.gather*C(1.6);H+=(X-H)*fe,xe+=(ce-xe)*fe}H<-.02?H+=d+.04:H>d+.02&&(H-=d+.04),xe<-.02?xe+=1.04:xe>1.02&&(xe-=1.04),this.x[F]=H,this.y[F]=xe,this.vx[F]*=te,this.vy[F]*=te,this.light[F]*=Math.exp(-_*(1.6+.8*Math.random()))}for(const F of this.events){F.age+=_;const ee=F.age*.55;for(let L=0;L<this.n;L++){const H=this.x[L]-F.x,xe=this.y[L]-F.y;let _e=0;if(F.kind===0){const ve=Math.hypot(H,xe)-ee;_e=Math.exp(-(ve*ve)/.0012)}else if(F.kind===1)F.age<_*1.5&&Math.hypot(H,xe)<F.reach*.6&&Math.random()<.35&&(_e=.6+Math.random()*.6);else{const ve=Math.cos(F.angle),X=Math.sin(F.angle),ce=H*-X+xe*ve-(F.age-.6)*.08;_e=Math.exp(-(ce*ce)/25e-5)*(Math.abs(H*ve+xe*X)<F.age*1.4?1:0)}_e>.02&&(this.light[L]=Math.max(this.light[L],1.6*_e*F.strength*(1-F.age/2.2)))}}this.events=this.events.filter(F=>F.age<2.2),l.globalCompositeOperation="source-over",l.globalAlpha=1-.92*Math.max(0,Math.min(1,u.look.trail)),l.fillStyle="#000",l.fillRect(0,0,h,p),l.globalAlpha=1;const G=8,$=[];for(let F=0;F<G;F++)$.push(new Path2D);const W=Math.max(.6,p/720*1.6*u.field.size),Y=.2*u.look.glow;for(let F=0;F<this.n;F++){const ee=this.z[F],L=.6+.4*Math.sin(N*.7+this.phase[F]*5),H=Math.min(1,(Y*L+this.light[F])*(.35+.65*ee)+.2*this.gather*ee);if(H<.03)continue;const xe=Math.min(G-1,Math.floor(H*G)),_e=W*(.5+ee)*(1+.6*Math.min(1,this.light[F]));$[xe].rect(this.x[F]*p-_e/2,this.y[F]*p-_e/2,_e,_e)}for(let F=0;F<G;F++)l.globalAlpha=(F+.5)/G,l.fillStyle="#fff",l.fill($[F]);if(u.look.grain>.01){l.globalCompositeOperation="lighter",l.globalAlpha=.05*u.look.grain;const F=Math.floor(Math.random()*256),ee=Math.floor(Math.random()*256),L=l.createPattern(this.grain,"repeat");L&&(l.save(),l.translate(-F,-ee),l.fillStyle=L,l.fillRect(F,ee,h,p),l.restore())}l.globalAlpha=1,l.globalCompositeOperation="source-over"}}const w0={line:{count:14,weight:1,wave:1,birth:1,zoom:1,speed:1},hands:{open:1,pull:1,clap:1},sound:{beat:1,bass:1,grow:1}},T0=110,vA=5;function C0(s){const e=s.replace("#",""),t=e.length===3?e.split("").map(r=>r+r).join(""):e;return[parseInt(t.slice(0,2),16)||0,parseInt(t.slice(2,4),16)||0,parseInt(t.slice(4,6),16)||0]}class _A{constructor(e,t){ue(this,"canvas");ue(this,"ctx");ue(this,"cfg",w0);ue(this,"playing",new zh(.5));ue(this,"age",0);ue(this,"time",0);ue(this,"unfold",0);ue(this,"breath",0);ue(this,"shiver",0);ue(this,"pulses",[]);ue(this,"lastKick",0);ue(this,"hand",{x:.5,y:.5,hold:0});ue(this,"idle",0);this.canvas=e,this.ctx=t}setParams(e){this.cfg=Ch(w0,e)}render(e,t,r){const{canvas:a,ctx:l,cfg:u}=this,h=a.width,p=a.height;if(!h||!p)return;const d=this.playing;d.read(e,r);const{dt:v}=d,_=Math.max(0,d.step);this.age+=_,this.time+=_*Math.max(0,u.line.speed),this.idle+=v;const g=F=>1-Math.exp(-v*F),M=[e.left,e.right].filter(Boolean),E=M.length>0&&!e.synthetic,C=!!(r!=null&&r.live);let x;E?x=(1-d.fist)*u.hands.open:C?x=(.12+.88*d.energy)*u.sound.grow:x=.35+.3*Math.sin(this.idle*.21),this.unfold+=(Math.min(1,Math.max(0,x))-this.unfold)*g(E?5:.8),this.breath+=(d.bass*u.sound.bass-this.breath)*g(3),d.clapped&&(this.shiver=Math.min(1.4,d.clapStrength*1.3*u.hands.clap)),this.shiver*=Math.exp(-v*2.4);const S=Math.max(d.kick,d.bump)*u.sound.beat;S>.45&&this.lastKick<=.45&&(this.pulses.push({at:0,strength:Math.min(1.2,S)}),this.pulses.length>vA&&this.pulses.shift()),this.lastKick=S;for(const F of this.pulses)F.at+=v*.75;if(this.pulses=this.pulses.filter(F=>F.at<.75),M.length){const F=M.reduce((L,H)=>L+H.position.x,0)/M.length,ee=M.reduce((L,H)=>L+H.position.y,0)/M.length;this.hand.x+=(F-this.hand.x)*g(8),this.hand.y+=(ee-this.hand.y)*g(8)}this.hand.hold+=((E?u.hands.pull:0)-this.hand.hold)*g(4);const R=u.line.birth,I=R<=0?1:Math.min(1,Math.max(0,(this.age-1.6*R)/(5*R))),b=I*I*(3-2*I),V=R<=0?0:Math.max(0,1-this.age/(2.4*R));l.globalCompositeOperation="source-over",l.globalAlpha=1,l.fillStyle="#000",l.fillRect(0,0,h,p);const D=Math.max(1,Math.round(u.line.count)),[k,w,N]=C0(t[0]??"#8899ff"),[q,B,z]=C0(t[2]??t[1]??"#ffffff"),Q=Math.max(.1,u.line.zoom),te=p*Q,G=p/720*Q,$=te*.74*this.unfold*(1+.12*this.breath),W=u.line.wave,Y=this.time;if(l.lineCap="round",l.lineJoin="round",l.globalCompositeOperation="lighter",V>.01){const F=(3+2.5*Math.sin(this.idle*2.2))*G*(1+this.breath);l.globalAlpha=Math.min(1,V*1.4),l.fillStyle="#fff",l.beginPath(),l.arc(h/2,p/2,Math.max(1,F),0,Math.PI*2),l.fill()}if(b>.002){const F=.5-.5*b,ee=.5+.5*b;for(let L=0;L<D;L++){const H=D===1?0:L/(D-1)*2-1,xe=H*2.6*this.unfold,_e=this.shiver*Math.sin(L*12.9898)*43758.5453,ve=(_e-Math.floor(_e)-.5)*this.shiver*te*.09;l.beginPath();let X=0,ce=0;for(let ht=0;ht<=T0;ht++){const _t=F+(ee-F)*(ht/T0),ft=Math.sin(Math.PI*_t);let wt=p/2+H*$*.5;wt+=(Math.sin(_t*6.2+Y*.55+xe)*.6+Math.sin(_t*13.7-Y*.38+xe*1.7)*.25)*te*.035*W*ft*(.35+.65*this.unfold+this.breath*.6),wt+=ve*ft*Math.sin(_t*20+L);for(const Rt of this.pulses){const U=Math.abs(_t-.5)-Rt.at;wt-=Math.exp(-(U*U)/.0016)*Rt.strength*te*.05*(1-Rt.at/.75)*(H===0?1:Math.sign(H)*-1)}if(this.hand.hold>.01){const Rt=_t-this.hand.x,U=Math.exp(-(Rt*Rt)/.022)*Math.min(1,this.hand.hold)*.85;wt+=(this.hand.y*p-wt)*U}const Lt=_t*h;ht===0?l.moveTo(Lt,wt):l.quadraticCurveTo(X,ce,(X+Lt)/2,(ce+wt)/2),X=Lt,ce=wt}l.lineTo(X,ce);const fe=Math.abs(H)*this.unfold,Ae=Math.round(255+(k+(q-k)*(H*.5+.5)-255)*fe),De=Math.round(255+(w+(B-w)*(H*.5+.5)-255)*fe),Be=Math.round(255+(N+(z-N)*(H*.5+.5)-255)*fe),At=1/(1+(D-1)*(1-this.unfold)),tt=u.line.weight*G*(1+.35*S);l.strokeStyle=`rgb(${Ae},${De},${Be})`,l.globalAlpha=Math.min(1,.16*At*2.2),l.lineWidth=7*tt,l.stroke(),l.globalAlpha=Math.min(1,.95*Math.max(At,.3+.7*this.unfold)),l.lineWidth=1.5*tt,l.stroke()}}l.globalAlpha=1,l.globalCompositeOperation="source-over"}}const R0={colour:{speed:1,offset:0,palette:0,depth:.32},field:{count:3,zoom:1,sway:1,bounce:0,drift:.2,backdrop:1},hands:{wind:1,release:1,follow:1,clap:1},sound:{wind:1,gust:1,mid:1,high:1}};function xA(s,e){s.traverse(t=>{if(t instanceof si||t instanceof Yx||t instanceof jx){t.geometry.dispose();const r=t.material;Array.isArray(r)?r.forEach(a=>a.dispose()):r.dispose()}}),s.clear(),e.dispose(),e.forceContextLoss()}const SA=""+new URL("dandelion-hJsSsoAd.bin",import.meta.url).href;let aa=null;function MA(){return aa||(aa=fetch(SA).then(s=>{if(!s.ok)throw new Error(`dandelion.bin: ${s.status}`);return s.arrayBuffer()}).then(yA),aa.catch(()=>{aa=null})),aa}function yA(s){const e=new DataView(s);if(String.fromCharCode(e.getUint8(0),e.getUint8(1),e.getUint8(2),e.getUint8(3))!=="DNDL")throw new Error("Not a dandelion file");const r=e.getUint32(4,!0),a=JSON.parse(new TextDecoder().decode(new Uint8Array(s,8,r))),l=8+r,u=(X,ce)=>new Float32Array(s.slice(l+X,l+X+ce*4)),h=(X,ce)=>new Int8Array(s.slice(l+X,l+X+ce)),p=(X,ce)=>new Uint8Array(s.slice(l+X,l+X+ce)),d=(X,ce)=>new Uint32Array(s.slice(l+X,l+X+ce*4)),v=X=>{const ce=a.parts[X],fe=u(ce.pos,ce.count*3),Ae=h(ce.nrm,ce.count*3),De=new Float32Array(ce.count*3);for(let Be=0;Be<De.length;Be++)De[Be]=Ae[Be]/127;return{p:ce,position:fe,normal:De,index:d(ce.idx,ce.index)}},_=["stem","base","bracts"].map(v);let g=0,M=0;for(const X of _)g+=X.p.count,M+=X.index.length;const E=new Float32Array(g*3),C=new Float32Array(g*3),x=new Float32Array(g),S=new Uint32Array(M);let R=0;{let X=0,ce=0;_.forEach((fe,Ae)=>{E.set(fe.position,X*3),C.set(fe.normal,X*3),x.fill(Ae===0?0:1,X,X+fe.p.count);for(let De=0;De<fe.index.length;De++)S[ce+De]=fe.index[De]+X;if(Ae===0)for(let De=1;De<fe.position.length;De+=3)R=Math.min(R,fe.position[De]);X+=fe.p.count,ce+=fe.index.length})}const I=new Zn;I.setAttribute("position",new Wt(E,3)),I.setAttribute("normal",new Wt(C,3)),I.setAttribute("aRigid",new Wt(x,1)),I.setIndex(new Wt(S,1));const b=a.seeds,V=u(b.pivot,b.count*3),D=u(b.axis,b.count*3),k=v("achenes"),w=p(a.parts.achenes.seed,k.p.count),N=new Float32Array(k.p.count),q=new Float32Array(k.p.count*3);for(let X=0;X<k.p.count;X++){const ce=w[X];N[X]=ce,q[X*3]=V[ce*3],q[X*3+1]=V[ce*3+1],q[X*3+2]=V[ce*3+2]}const B=new Zn;B.setAttribute("position",new Wt(k.position,3)),B.setAttribute("normal",new Wt(k.normal,3)),B.setAttribute("aSeed",new Wt(N,1)),B.setAttribute("aPivot",new Wt(q,3)),B.setIndex(new Wt(k.index,1));const z=b.segments,Q=u(b.a,z*3),te=u(b.b,z*3),G=p(b.seed,z),$=u(b.ta,z),W=u(b.tb,z),Y=new Float32Array(z*4*3),F=new Float32Array(z*4*3),ee=new Float32Array(z*4*3),L=new Float32Array(z*4*2),H=new Float32Array(z*4),xe=new Float32Array(z*4),_e=new Uint32Array(z*6);for(let X=0;X<z;X++){const ce=G[X];for(let Ae=0;Ae<4;Ae++){const De=X*4+Ae;Y.set(Q.subarray(X*3,X*3+3),De*3),F.set(te.subarray(X*3,X*3+3),De*3),ee.set(V.subarray(ce*3,ce*3+3),De*3);const Be=Ae>>1,At=Ae&1?1:-1;L[De*2]=Be,L[De*2+1]=At,H[De]=ce,xe[De]=Be?W[X]:$[X]}const fe=X*4;_e.set([fe,fe+1,fe+2,fe+2,fe+1,fe+3],X*6)}const ve=new Zn;ve.setAttribute("position",new Wt(Y,3)),ve.setAttribute("aB",new Wt(F,3)),ve.setAttribute("aPivot",new Wt(ee,3)),ve.setAttribute("aCorner",new Wt(L,2)),ve.setAttribute("aSeed",new Wt(H,1)),ve.setAttribute("aT",new Wt(xe,1)),ve.setIndex(new Wt(_e,1));for(const X of[I,B,ve])X.boundingSphere=new vo(new ie(0,-5,0),1e4);return{body:I,achenes:B,strokes:ve,seeds:b.count,pivot:V,axis:D,foot:R}}const oo=20,Cf=[1.4,3.2],Rf=[2.6,4.6],_a=`
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
`,EA=`
${_a}
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
}`,b0=`
${_a}
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
}`,AA=`
${_a}
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
}`,wA=`
${_a}
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
}`,TA=`
${_a}
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
}`;function bf(s,e){let t=0,r=1/e;for(;s>0;)t+=s%e*r,s=Math.floor(s/e),r/=e;return t}function Di(s){const e=Math.sin(s*127.1+311.7)*43758.5453;return e-Math.floor(e)}const Pf=Array.from({length:oo},(s,e)=>({x:e===0?0:bf(e+1,2)*2-1,z:e===0?0:-4.6+bf(e,3)*6,y:e===0?.3:-.4+bf(e,5)*1.9,k:e===0?1:.85+Di(e)*.3,yaw:Di(e+40)*Vr,ph:Di(e+80)*Vr,off:e*.137%1}));class CA{constructor(e,t,r=null){ue(this,"canvas");ue(this,"ctx");ue(this,"cfg",R0);ue(this,"surface");ue(this,"renderer",null);ue(this,"host");ue(this,"scene");ue(this,"camera");ue(this,"group",new ao);ue(this,"depth",0);ue(this,"scale",1);ue(this,"look",null);ue(this,"playing",new zh(.5));ue(this,"failed",!1);ue(this,"model",null);ue(this,"flowers",[]);ue(this,"materials",[]);ue(this,"started",!1);ue(this,"since",0);ue(this,"seedTex",null);ue(this,"seedData",new Float32Array(0));ue(this,"off",new Float32Array(0));ue(this,"vel",new Float32Array(0));ue(this,"turn",new Float32Array(0));ue(this,"hold",new Float32Array(0));ue(this,"away",new Uint8Array(0));ue(this,"thresh",new Float32Array(0));ue(this,"flight",new Float32Array(0));ue(this,"dest",new Float32Array(0));ue(this,"phase",new Float32Array(0));ue(this,"motionTime",0);ue(this,"colourTime",0);ue(this,"gust",0);ue(this,"lastBeat",!1);ue(this,"lastClap",!1);ue(this,"hop",0);ue(this,"dance",0);ue(this,"sinceClap",99);ue(this,"lastAim",{x:0,y:0});ue(this,"swipe",new Nt);ue(this,"present",0);ue(this,"strokeWidth",null);ue(this,"viewport",null);ue(this,"time",null);this.canvas=e,this.ctx=t,this.host=r,this.scene=r?r.scene:new Fx,this.camera=r?r.camera:new gi(30,16/9,.1,200),this.surface=document.createElement("canvas");try{r||(this.renderer=pA(this.surface)),this.look=r?r.look:new hA}catch(a){console.error("Dandelion could not start:",a),this.failed=!0;return}MA().then(a=>{this.look&&this.build(a)}).catch(a=>{console.error("Dandelion model failed to load:",a),this.failed=!0})}setParams(e){this.cfg=Ch(R0,e)}isReady(){return this.model!==null||this.failed}build(e){const t=this.look,r=e.seeds,a=r*oo;this.seedData=new Float32Array(r*2*oo*4),this.seedTex=new mg(this.seedData,r*2,oo,_i,Fi),this.seedTex.magFilter=dn,this.seedTex.minFilter=dn,this.seedTex.needsUpdate=!0,this.off=new Float32Array(a*3),this.vel=new Float32Array(a*3),this.turn=new Float32Array(a*4);for(let v=0;v<a;v++)this.turn[v*4+3]=1;this.hold=new Float32Array(a),this.away=new Uint8Array(a),this.thresh=new Float32Array(a),this.flight=new Float32Array(a),this.dest=new Float32Array(a*3),this.phase=new Float32Array(a);for(let v=0;v<a;v++)this.thresh[v]=.12+Di(v*3.7+1)*1,this.phase[v]=Di(v*1.3+7)*Vr;const l={value:new Nt(1,1)},u={value:0},h={value:e.foot},p={value:this.seedTex},d={value:1.5};this.strokeWidth=d,this.viewport=l,this.time=u;for(let v=0;v<oo;v++){const _=t.shared(),g={uBend:{value:new ie},uWave:{value:new Nt},uWavePhase:{value:0},uRow:{value:v},uShimmer:{value:0}},M={..._,...g,uViewport:l,uTime:u,uFoot:h,uSeeds:p},E=(S,R,I={})=>{const b=new xi({vertexShader:S,fragmentShader:R,uniforms:{...M,...I},side:Ni});return this.materials.push(b),b},C=new ao;C.add(new si(e.body,E(EA,b0))),C.add(new si(e.achenes,E(AA,b0)));const x=E(wA,TA,{uWidth:d});x.transparent=!0,x.depthWrite=!1,C.add(new si(e.strokes,x));for(const S of C.children)S.frustumCulled=!1;C.visible=!1,this.group.add(C),this.flowers.push({root:C,shared:_,u:g,presence:0,at:new ie,size:1,placed:!1,bend:new Nt})}this.scene.add(this.group),this.model=e}pickDestination(e,t,r){const a=-4+Math.random()*6,l=(15.5-a)*t;this.dest[e*3]=(Math.random()*2-1)*l*r*.92,this.dest[e*3+1]=.1+(Math.random()*1.75-.85)*l,this.dest[e*3+2]=a}destroy(){var e,t;this.host||(e=this.look)==null||e.dispose(),this.look=null,(t=this.seedTex)==null||t.dispose();for(const r of this.materials)r.dispose();for(const r of this.flowers)r.root.clear();this.scene.remove(this.group),this.renderer&&xA(this.scene,this.renderer),this.renderer=null}render(e,t,r){const{ctx:a,cfg:l}=this,u=this.canvas.width,h=this.canvas.height;if(u===0||h===0)return;const p=this.renderer;if(this.failed||!p||!this.look){mA(a,u,h,"DANDELION");return}Ig(a,u,h,l.field.backdrop),this.model&&(dA(this.camera,u,h),this.camera.position.set(0,.5,15.5/Math.max(.3,l.field.zoom)),this.camera.lookAt(0,.1,0),this.update(e,t,r,u,h),(this.surface.width!==u||this.surface.height!==h)&&p.setSize(u,h,!1),p.render(this.scene,this.camera),a.drawImage(this.surface,0,0,u,h))}update(e,t,r,a,l){const{cfg:u}=this,h=this.look,p=this.model;if(!h||!p||this.failed)return;const d=this.playing;d.read(e,r);const{dt:v}=d,_=Math.max(0,d.step),g=e.left||e.right?1:0;this.present+=(g-this.present)*(1-Math.exp(-v*3));const M=Math.min(1,((r==null?void 0:r.overall)??0)*1.4)*u.sound.wind;this.motionTime+=_,this.colourTime+=(_*u.colour.speed*(1+d.mid*u.sound.mid*1.2)+v*d.burst*u.hands.clap*.9)/oA;const E=this.motionTime,C=!!(r!=null&&r.beat),x=C&&!this.lastBeat,S=x&&u.sound.gust>0;this.hop=Math.max(this.hop*Math.exp(-v*5),x?(r==null?void 0:r.beatIntensity)||1:0),this.dance+=_,this.lastBeat=C,S&&(this.gust=Math.max(this.gust,((r==null?void 0:r.beatIntensity)||1)*u.sound.gust)),this.gust*=Math.exp(-v*2.5);const R=!!e.clapping&&u.hands.clap>0,I=R&&!this.lastClap;this.lastClap=R,this.sinceClap+=v;const b=Math.min(1,this.sinceClap/4)**3;I&&(this.sinceClap=0);const V=d.aim.x-this.lastAim.x,D=d.aim.y-this.lastAim.y;this.lastAim={x:d.aim.x,y:d.aim.y};const k=g?V/Math.max(v,.001):0,w=g?D/Math.max(v,.001):0;this.swipe.x+=(k-this.swipe.x)*(1-Math.exp(-v*6)),this.swipe.y+=(w-this.swipe.y)*(1-Math.exp(-v*6));const N=.5*Math.sin(E*.11)+.25*Math.sin(E*.27+1.3),q=.25+M*1.6+this.gust*1.2,B=new ie(Math.cos(N)*q,.15*Math.sin(E*.19),Math.sin(N)*q*.4);B.x+=Zu.clamp(this.swipe.x,-4,4)*1.6*u.hands.wind,B.y+=Zu.clamp(this.swipe.y,-4,4)*1*u.hands.wind;const z=g?Zu.clamp((d.openness-.6)/.4,-1,1)*u.hands.release:0,Q=u.field.drift,te=Math.min(1,Q*2),G=Math.sqrt(Math.min(1,3/Math.max(1,Math.round(u.field.count)))),$=Math.min(.72,G*(Q*(.25+M*.45)+z*.3*this.present*te)),W=b*Math.min(1,u.hands.clap)*te*G,Y=Math.min(1,$*5),F=g&&d.openness<.15&&u.hands.release>0,ee=!this.started;this.host||h.update(t,u.colour.palette,v,ee);const L=Math.tan(this.camera.fov/2*Math.PI/180),H=a/l,xe=Math.max(0,Math.min(oo,Math.round(u.field.count))),_e=Math.max(1,xe);this.since+=v;const ve=aA(this.since,xe),X=2.2*Math.pow(_e,-.42)*this.scale;let ce=0;for(let U=0;U<_e;U++)ce+=Pf[U].x;ce/=_e;let fe=0;for(let U=0;U<_e;U++)fe=Math.max(fe,Math.abs(Pf[U].x-ce));const Ae=new ie(d.aim.x*5.2,.1+d.aim.y*3,2),De=1.2*Math.max(.4,1+(d.spread-.4)*1.6),Be=p.seeds,At=new ie,tt=new dr,ht=new dr,_t=new dr,ft=new ie,wt=new ie(0,1,0),Lt=new ie(1,0,0),Rt=this.seedData;this.flowers.forEach((U,xt)=>{const nt=Pf[xt],It=xt<ve;if(U.presence+=((It?1:0)-U.presence)*(1-Math.exp(-v*1.4)),ee&&(U.presence=0),!It&&U.presence<.004&&(U.presence=0),U.root.visible=U.presence>.002,!U.root.visible){U.placed=!1,this.off.fill(0,xt*Be*3,(xt+1)*Be*3),this.vel.fill(0,xt*Be*3,(xt+1)*Be*3),this.away.fill(0,xt*Be,(xt+1)*Be),this.flight.fill(0,xt*Be,(xt+1)*Be);return}const Fe=X*nt.k,Ot=(_e===1?0:nt.z)+this.depth,P=(15.5-Ot)*L*H,y=_e===1?0:(nt.x-ce)/Math.max(.5,fe)*P*(.66+.24*Math.min(1,(_e-1)/12)),ne=.1-(15.5-Ot)*L,ge=.1+(15.5-Ot)*L;let Se=_e===1?nt.y:nt.y*Math.min(1,.5+_e*.1);Se=Math.min(Se,ne-p.foot*Fe-.4,ge-Fe*1.5),At.set(y,Se,Ot),U.placed||(U.at.copy(At),U.size=Fe,U.placed=!0),U.at.lerp(At,1-Math.exp(-v*1.2)),U.size+=(Fe-U.size)*(1-Math.exp(-v*1.2));const Ce=1-Math.pow(1-U.presence,3);U.root.position.set(U.at.x,U.at.y-(1-Ce)*-p.foot*U.size*.8,U.at.z),U.root.rotation.y=nt.yaw,U.root.scale.setScalar(U.size*(.6+.4*Ce));const Re=U.root.scale.x,de=Math.cos(nt.yaw),pe=Math.sin(nt.yaw),Oe=this.dance,Ve=U.at.x*.35,Le=u.field.sway*(.45+M*1),be=Le*(.85*Math.sin(Vr*Oe/5.2-Ve+nt.ph*.3)+.15*Math.sin(Vr*Oe/3.3+nt.ph*1.7))+B.x*.22+this.gust*.5,at=Le*.3*Math.sin(Vr*Oe/7.1+nt.ph*2.3)+B.z*.22;U.bend.x+=(be-U.bend.x)*(1-Math.exp(-v*1.6)),U.bend.y+=(at-U.bend.y)*(1-Math.exp(-v*1.6));const lt=U.bend.x,pt=U.bend.y;U.u.uBend.value.set(lt*de-pt*pe,0,lt*pe+pt*de);const j=u.field.sway*(.12+M*.3);U.u.uWave.value.set(j*de,j*pe),U.u.uWavePhase.value=Vr*Oe/1.6-Ve*2+nt.ph;const Pe=u.field.bounce*U.size*((.08+M*.22)*Math.sin(Vr*Oe/1.2-Ve+nt.ph)+.3*this.hop*(.6+.4*Di(xt+7)));U.root.position.y+=Pe,U.u.uShimmer.value=d.high*u.sound.high*2;const me=U.root.position.x+lt*Re,Ge=U.root.position.y,Ne=U.root.position.z+pt*Re;for(let We=0;We<Be;We++){const ze=xt*Be+We,mt=ze*3;I&&Di(ze*1.37+E*7.3)<W?this.hold[ze]=Rf[0]+Di(ze+E)*(Rf[1]-Rf[0]):S&&Di(ze*.71+E*13.1)<.008*u.sound.gust*Q*G&&(this.hold[ze]=Cf[0]+Di(ze+E*3.1)*(Cf[1]-Cf[0])),this.hold[ze]=Math.max(0,this.hold[ze]-v);const Ct=.06*Y*Math.sin(E*.37+this.phase[ze]);F&&(this.flight[ze]=0);const an=!F&&(this.hold[ze]>0||this.flight[ze]>0||$+Ct>this.thresh[ze]),Nn=p.pivot[We*3],Si=p.pivot[We*3+1],Zi=p.pivot[We*3+2],Mi=p.axis[We*3],Qi=p.axis[We*3+1],Qn=p.axis[We*3+2],jr=Mi*de+Qn*pe,Ms=-Mi*pe+Qn*de;if(an&&!this.away[ze]){this.flight[ze]=6+Math.random()*6,this.pickDestination(ze,L,H);const tn=.4+(I&&this.hold[ze]>0?3.2*u.hands.clap*b:0);this.vel[mt]+=jr*tn,this.vel[mt+1]+=Qi*tn+.2,this.vel[mt+2]+=Ms*tn}this.away[ze]=an?1:0;let ln=this.off[mt],wn=this.off[mt+1],Un=this.off[mt+2],Tn=this.vel[mt],Fn=this.vel[mt+1],On=this.vel[mt+2];if(_>0||an){const tn=Math.max(_,0),T=me+(Nn*de+Zi*pe)*Re+ln,J=Ge+Si*Re+wn,ae=Ne+(-Nn*pe+Zi*de)*Re+Un,oe=Math.sin(J*.9+E*.7+this.phase[ze])*.6,se=Math.sin(T*.7-E*.5+this.phase[ze]*.5)*.45,Ue=Math.sin(ae*.8+T*.5+E*.6)*.4;if(an){this.flight[ze]=Math.max(0,this.flight[ze]-tn);const ke=ze*3;let Te=this.dest[ke]-T,Ke=this.dest[ke+1]-J,Ye=this.dest[ke+2]-ae;const it=Math.hypot(Te,Ke,Ye);it<.8&&this.pickDestination(ze,L,H);const rt=(1.2+.9*Di(ze*2.9))*Math.min(1,it/2);Te=Te/Math.max(it,.001)*rt,Ke=Ke/Math.max(it,.001)*rt,Ye=Ye/Math.max(it,.001)*rt;let Ze=(Te-Tn)*.7+B.x*.3+oe*.8,Mt=(Ke-Fn)*.7+B.y*.3+se*.8+.05,Ut=(Ye-On)*.7+B.z*.3+Ue*.6;if(this.present>.01&&u.hands.follow>0){const gt=Ae.x-T,gn=Ae.y-J,yn=Ae.z-ae,dt=Math.hypot(gt,gn,yn)+.001,Jn=this.present*u.hands.follow*Math.min(1,dt/De-.6);Ze+=gt/dt*Jn*2.2-gn/dt*this.present*u.hands.follow*1.4,Mt+=gn/dt*Jn*2.2+gt/dt*this.present*u.hands.follow*1.4,Ut+=yn/dt*Jn*1.2}const Vt=(15.5-ae)*L,Ft=Vt*H,Zt=Math.abs(T)-Ft*1.02;Zt>0&&(Ze-=Math.sign(T)*Zt*1.5);const Xe=Math.abs(J-.1)-Vt*1.02;Xe>0&&(Mt-=Math.sign(J-.1)*Xe*1.5),ae>6&&(Ut-=(ae-6)*1.5),ae<-8&&(Ut+=(-8-ae)*1.5),Tn+=Ze*tn*1.6,Fn+=Mt*tn*1.6,On+=Ut*tn*1.6;const nn=Math.exp(-tn*.5);Tn*=nn,Fn*=nn,On*=nn}else{const ke=Math.hypot(ln,wn,Un),Te=Math.min(1.8,ke*.9)/Math.max(ke,1e-4),Ke=-ln*Te+oe*Math.min(1,ke)*.6,Ye=-wn*Te+se*Math.min(1,ke)*.6,it=-Un*Te+Ue*Math.min(1,ke)*.6,rt=1-Math.exp(-tn*2.4);Tn+=(Ke-Tn)*rt,Fn+=(Ye-Fn)*rt,On+=(it-On)*rt,ke<.004&&Math.hypot(Tn,Fn,On)<.02&&(ln=wn=Un=Tn=Fn=On=0)}ln+=Tn*tn,wn+=Fn*tn,Un+=On*tn}this.off[mt]=ln,this.off[mt+1]=wn,this.off[mt+2]=Un,this.vel[mt]=Tn,this.vel[mt+1]=Fn,this.vel[mt+2]=On;const Kr=Math.hypot(ln,wn,Un)/Re,Yr=Math.min(1,Kr/.8),oi=this.turn.subarray(ze*4,ze*4+4);if(tt.set(oi[0],oi[1],oi[2],oi[3]),Yr>.001){ft.set(Mi,Qi,Qn),_t.setFromUnitVectors(ft,wt);const tn=E*.6+this.phase[ze];ht.setFromAxisAngle(wt,tn),_t.premultiply(ht),ht.setFromAxisAngle(Lt,.3*Math.sin(E*1.3+this.phase[ze]*2)),_t.premultiply(ht),ht.identity().slerp(_t,Yr),tt.slerp(ht,1-Math.exp(-v*3))}else tt.slerp(ht.identity(),1-Math.exp(-v*6));oi[0]=tt.x,oi[1]=tt.y,oi[2]=tt.z,oi[3]=tt.w;const ai=(xt*Be*2+We*2)*4,Xt=(ln*de-Un*pe)/Re,So=(ln*pe+Un*de)/Re;Rt[ai]=Xt,Rt[ai+1]=wn/Re,Rt[ai+2]=So,Rt[ai+3]=1-Math.min(1,Kr/.6),Rt[ai+4]=tt.x,Rt[ai+5]=tt.y,Rt[ai+6]=tt.z,Rt[ai+7]=tt.w}const Me=U.shared;Me.uT.value=this.colourTime,Me.uOff.value=nt.off+u.colour.offset,h.apply(Me,u.colour.depth,.16*(1+d.high*u.sound.high*2))}),this.started=!0,this.seedTex.needsUpdate=!0,this.viewport.value.set(a,l),this.time.value=E,this.strokeWidth.value=Math.max(1,l/620)}}const RA=1.4,bA=14,PA=1.2,P0=(s,e)=>1/(1+1/(2*Math.PI*s)/e);class ro{constructor(e=RA,t=bA){ue(this,"value",null);ue(this,"speed",0);this.minCutoff=e,this.beta=t}next(e,t){if(this.value===null||t<=0)return this.value=e,this.speed=0,e;const r=(e-this.value)/t;this.speed+=(r-this.speed)*P0(PA,t);const a=this.minCutoff+this.beta*Math.abs(this.speed);return this.value+=(e-this.value)*P0(a,t),this.value}reset(){this.value=null,this.speed=0}}class LA{constructor(e=5){ue(this,"recent",[]);ue(this,"held",null);this.size=e}next(e){this.recent.push(e),this.recent.length>this.size&&this.recent.shift();const t=new Map;let r=e,a=0;for(const l of this.recent){const u=(t.get(l)??0)+1;t.set(l,u),(u>a||u===a&&l===this.held)&&(r=l,a=u)}return this.held=r,r}reset(){this.recent=[],this.held=null}}const L0=[{tip:8,pip:6},{tip:12,pip:10},{tip:16,pip:14},{tip:20,pip:18}];function IA(s,e){if(!s||s.length<21)return null;const t=(_,g)=>Math.hypot((_.x-g.x)*e,_.y-g.y,(_.z-g.z)*e),r=(_,g)=>Math.hypot((_.x-g.x)*e,_.y-g.y),a=s[0],l=s[9],u=r(a,l);if(u<1e-4)return null;let h=0,p=0;for(const _ of L0){const g=t(s[_.tip],a),M=t(s[_.pip],a);g>M*1.12&&h++,p+=Math.min(1,Math.max(0,(g/u-1.05)/.85))}const d=s[17];return t(s[4],d)>t(s[3],d)*1.12&&h++,{fingers:h,pinchGap:t(s[4],s[8])/u,openness:p/L0.length,size:u,angle:Math.atan2((l.x-a.x)*e,a.y-l.y)}}const I0=.32,Lf=.5,DA=180,D0=30,N0=.08,NA=.32,UA=.115,U0=.16,FA=1.3,OA=.2,kA=.28,BA=.7,zA=200,HA=.3,VA=450,GA=140;class F0{constructor(){ue(this,"points",Array.from({length:21},()=>({x:new ro,y:new ro,z:new ro(1,6)})));ue(this,"size",new ro(1,4));ue(this,"angle",new ro(1.2,3));ue(this,"open",new ro(2,6));ue(this,"fingers",new LA(5));ue(this,"pinched",!1);ue(this,"gesture","none");ue(this,"gestureSince",0);ue(this,"lastAngle",0);ue(this,"lastAt",0);ue(this,"hand",null);ue(this,"seenAt",0)}read(e,t,r){const a=this.lastAt?Math.min(.2,Math.max(.001,(t-this.lastAt)/1e3)):0;this.lastAt=t;const l=e.map((C,x)=>({x:this.points[x].x.next(C.x,a),y:this.points[x].y.next(C.y,a),z:this.points[x].z.next(C.z,a)})),u=IA(e,r);if(!u)return this.hand;const h=this.fingers.next(u.fingers);this.pinched=u.pinchGap<(this.pinched?Lf:I0);const p=Math.max(0,h-1),d=this.pinched?"pinch":u.openness>.62?"open":u.openness<.28?"fist":p>=3?"open":p<=0?"fist":"none";d!==this.gesture&&(this.gesture=d,this.gestureSince=t);let v=u.angle;for(;v-this.lastAngle>Math.PI;)v-=2*Math.PI;for(;v-this.lastAngle<-Math.PI;)v+=2*Math.PI;this.lastAngle=this.angle.next(v,a);const _=Math.atan2(Math.sin(this.lastAngle),Math.cos(this.lastAngle)),g=this.size.next(u.size,a),M=this.points[9],E=Math.hypot(M.x.speed,M.y.speed);return this.seenAt=t,this.hand={position:{x:l[9].x,y:l[9].y},gesture:d,pinchDistance:this.pinched?u.pinchGap*u.size:void 0,velocity:Math.min(3,E*2),holdDuration:(t-this.gestureSince)/1e3,fingerCount:h,landmarks:l,pinch:Math.min(1,Math.max(0,(Lf+.25-u.pinchGap)/(Lf+.25-I0*.6))),openness:Math.min(1,Math.max(0,this.open.next(u.openness,a))),depth:Math.min(1,Math.max(0,(g-N0)/(NA-N0))),angle:_},this.hand}forget(){for(const e of this.points)e.x.reset(),e.y.reset(),e.z.reset();this.size.reset(),this.angle.reset(),this.open.reset(),this.fingers.reset(),this.pinched=!1,this.gesture="none",this.lastAt=0,this.lastAngle=0,this.hand=null}}class WA{constructor(){ue(this,"kept",{left:new F0,right:new F0});ue(this,"trail",[]);ue(this,"lastAt",0);ue(this,"clapAt",-1e9);ue(this,"clapStrength",0);ue(this,"gap",1);ue(this,"gapAt",-1e9);ue(this,"closing",0);ue(this,"counted",!1);ue(this,"held",!1)}next(e,t,r){const a={};(e.landmarks??[]).forEach((d,v)=>{var E,C,x,S;if(!d||d.length<21)return;const _=d.map(R=>({x:1-R.x,y:R.y,z:R.z}));let M=((S=(x=(C=(E=e.handedness)==null?void 0:E[v])==null?void 0:C[0])==null?void 0:x.categoryName)==null?void 0:S.toLowerCase())==="left"?"right":"left";if(a[M]){const R=a[M],I=_[9].x<R[9].x;a.left=I?_:R,a.right=I?R:_;return}a[M]=_});const u={left:null,right:null};for(const d of["left","right"]){const v=this.kept[d];a[d]?(u[d]=v.read(a[d],t,r),u[d]&&this.trail.push({...u[d].position,hand:d})):v.hand&&t-v.seenAt<=DA?u[d]=v.hand:v.hand&&v.forget()}this.trail.length>D0&&(this.trail=this.trail.slice(-D0)),u.gestureTrail=[...this.trail];const h=this.lastAt?Math.min(.2,Math.max(.001,(t-this.lastAt)/1e3)):0;this.lastAt=t;const p=d=>{this.counted||t-this.clapAt<VA||(this.counted=!0,this.clapAt=t,this.clapStrength=Math.min(1,Math.max(.7,d)))};if(u.left&&u.right){const d=u.right.position.x-u.left.position.x,v=u.right.position.y-u.left.position.y;u.distanceBetweenHands=Math.hypot(d,v),u.twist=Math.atan2(v,d*r)}if(a.left&&a.right){const d=a.left[9],v=a.right[9],_=Math.hypot(v.x-d.x,v.y-d.y),g=(t-this.gapAt)/1e3,M=g>0&&g<.15?(this.gap-_)/g:0;this.closing=Math.max(M,this.closing*Math.exp(-h*12)),this.gap=_,this.gapAt=t,_>HA&&(this.counted=!1),_<OA&&this.closing>FA&&p(this.closing/2.2),this.held=_<(this.held?U0:UA),this.held&&(p(.7+this.closing/3),u.clapping=!0,u.clapIntensity=Math.max(.6,1-_/U0))}else t-this.gapAt<zA&&this.gap<kA&&this.closing>BA&&p(.75+this.closing/3),this.closing*=Math.exp(-h*6),this.held=!1,t-this.gapAt>1200&&(this.counted=!1);return t-this.clapAt<=GA&&(u.clapping=!0,u.clapIntensity=Math.max(u.clapIntensity??0,this.clapStrength)),u}}let XA=0;function jA(){return XA>0}function KA(s,e,t){if(s.length<e*t)return;const r=new Uint8Array(e*t);for(let a=0;a<t;a++)for(let l=0;l<e;l++)r[a*e+l]=s[a*e+(e-1-l)];performance.now()}const YA=25e3,qA=5e3,ZA=2e4,QA=6e4,O0=640,JA="https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",k0="https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14";function $A({videoElement:s,onHandData:e}){const t=en.useRef(new WA);return en.useEffect(()=>{let r=!0,a=0,l=-1,u=null,h=null,p=0,d=0;const v=()=>s.videoWidth&&s.videoHeight?s.videoWidth/s.videoHeight:16/9,_=(x,S)=>{r&&e(t.current.next(x,S,v()))},g=async()=>{if(!(!r||h))try{const x=await import(k0),S=await x.FilesetResolver.forVisionTasks(`${k0}/wasm`),R=await x.HandLandmarker.createFromOptions(S,{baseOptions:{modelAssetPath:JA,delegate:"GPU"},runningMode:"VIDEO",numHands:2,minHandDetectionConfidence:.5,minHandPresenceConfidence:.5,minTrackingConfidence:.5});if(!r){R.close();return}h=R,console.log("✋ Hand tracking is running on the page.");const I=()=>{if(!(!r||!h)&&(a=requestAnimationFrame(I),s.currentTime!==l)){l=s.currentTime;try{const b=performance.now();_(h.detectForVideo(s,b),b)}catch(b){console.error("Hand detection error:",b)}}};I()}catch(x){console.error("Hand tracking could not start:",x)}},M=x=>{u&&(console.warn(`Hand tracking is moving to the page: ${x}`),window.clearTimeout(p),cancelAnimationFrame(a),u.terminate(),u=null,g())},E=()=>{if(typeof Worker>"u"||typeof createImageBitmap!="function"||typeof OffscreenCanvas>"u"){g();return}try{u=new Worker("./hand-worker.js")}catch{g();return}let x=!1,S=!1,R=!1,I=!1,b=!1;p=window.setTimeout(()=>{x||M("it took too long to start")},YA);const V=()=>{if(!r||!u)return;if(a=requestAnimationFrame(V),S){performance.now()-d>(b?QA:R?qA:ZA)&&M("the worker stopped answering");return}if(s.currentTime===l||s.readyState<2)return;l=s.currentTime,S=!0,d=performance.now();const D=d,k=Math.min(O0,s.videoWidth||O0);createImageBitmap(s,{resizeWidth:k,resizeHeight:Math.max(1,Math.round(k/v())),resizeQuality:"low"}).then(w=>{if(!u){w.close();return}const N=jA();u.postMessage({type:"frame",bitmap:w,time:D,mask:N},[w])}).catch(()=>{S=!1})};u.onmessage=D=>{const k=D.data;k.type==="ready"?(x=!0,window.clearTimeout(p),console.log("✋ Hand tracking is running in a worker."),V()):k.type==="hands"?(S=!1,R=!0,k.mask&&(b=!1,KA(k.mask.data,k.mask.width,k.mask.height)),_({landmarks:k.landmarks,handedness:k.handedness},k.time)):k.type==="note"?(b=!1,console.warn(k.reason)):k.type==="failed"?M(k.reason):k.type==="error"&&(S=!1,I||(I=!0,console.warn("Hand tracking worker:",k.reason)),R||M(k.reason))},u.onerror=D=>M(D.message||"the worker failed"),u.postMessage({type:"init"})},C=()=>{r&&(s.readyState>=2?E():window.setTimeout(C,100))};return C(),()=>{r=!1,window.clearTimeout(p),cancelAnimationFrame(a),u==null||u.terminate(),u=null;try{h==null||h.close()}catch(x){console.warn("Error closing hand landmarker:",x)}h=null}},[s,e]),null}const ew=40;class If{constructor(e,t){ue(this,"history",[]);ue(this,"last",0);ue(this,"pulse",0);ue(this,"threshold",0);ue(this,"recent",[]);ue(this,"peak",0);ue(this,"flux",0);this.refractory=e,this.decay=t}measure(e,t,r,a){for(this.recent.push({at:r,rise:e,heard:t});this.recent.length&&r-this.recent[0].at>ew;)this.recent.shift();let l=0,u=0;for(const g of this.recent)l+=g.rise,u+=g.heard;this.history.push(l),this.history.length>90&&this.history.shift();const h=this.history.length;let p=0;for(const g of this.history)p+=g;p/=h;let d=0;for(const g of this.history)d+=(g-p)**2;const v=Math.sqrt(d/h);return this.threshold=p+v*1.9*(1.5-a),this.flux=l,this.peak=Math.max(l,this.peak*.9985),h>=20&&l>this.threshold&&l>this.peak*.5&&u>1.2*(1.3-a*.8)&&r-this.last>this.refractory?l/Math.max(1e-9,this.threshold):0}commit(e,t,r){e&&(this.last=t);const a=this.peak>0?Math.min(1,this.flux/this.peak):0;this.pulse=Math.max(this.pulse*Math.exp(-r/this.decay),e?Math.max(.4,a):0)}}function tw(s,e,t,r){const a=s.map(u=>u.hits.measure(u.flux,u.audible,e,r)),l=Math.max(...a);s.forEach((u,h)=>u.hits.commit(a[h]>0&&a[h]>=l*.7,e,t))}class B0{constructor(e){ue(this,"ceiling",-100);ue(this,"floor",0);ue(this,"seen",!1);this.minSpan=e}place(e,t){this.seen||(this.seen=!0,this.ceiling=e,this.floor=e);const r=l=>1-Math.exp(-t/l);this.ceiling+=(e-this.ceiling)*r(e>this.ceiling?.5:60),this.floor+=(e-this.floor)*r(e<this.floor?2:60);const a=Math.min(this.floor,this.ceiling-this.minSpan);return Math.min(1,Math.max(0,(e-a)/(this.ceiling-a)))}}function nw(){return{overall:new B0(14),bass:new B0(14),overallSlow:0,bassMid:0,highFast:0,highSlow:0,out:0,onsets:[],energy:0,build:0,drop:0,bright:.5,heard:0}}const z0=-75,iw=2.5;function rw(s,e,t,r){const a=C=>1-Math.exp(-r/C),l=C=>Math.pow(10,C/10),u=C=>C>1e-10?10*Math.log10(C):-100;if(s.overallSlow+=(l(e.overall)-s.overallSlow)*a(2),s.bassMid+=(l(e.bass)-s.bassMid)*a(.5),s.highFast+=(e.high-s.highFast)*a(1),s.drop*=Math.exp(-r/1.2),s.heard+=r,s.heard<iw){s.highSlow=s.highFast,s.energy=.5;return}s.highSlow+=(e.high-s.highSlow)*a(8);const h=u(s.overallSlow)>z0;s.energy=h?s.overall.place(u(s.overallSlow),r):0;const p=s.bass.place(u(s.bassMid),r),d=s.bass.ceiling>z0;for(e.onset&&s.onsets.push(t);s.onsets.length&&t-s.onsets[0]>2e3;)s.onsets.shift();let v=!1;d&&p<.4?s.out=Math.min(30,s.out+r):p>.65&&(s.out>=2&&(s.drop=Math.max(s.drop,Math.min(1,.55+s.out/14)),v=!0),s.out=0);const _=Math.min(1,Math.max(0,(s.highFast-s.highSlow)/18)),g=Math.min(1,Math.max(0,(s.onsets.length/2-3)/5)),M=Math.min(1,s.out/6),E=h&&s.out>0?M*M*(3-2*M)*Math.max(.1,_,g):0;if(s.build+=(E-s.build)*a(v||E<s.build?.25:.7),e.centroid>0){const C=Math.min(1,Math.max(0,Math.log2(e.centroid/300)/Math.log2(16.666666666666668)));s.bright+=(C-s.bright)*a(1.5)}}const Dg={bass:[20,160],lowMid:[160,800],mid:[800,4e3],high:[4e3,12e3]},sw=Object.keys(Dg),ow=.002,aw=.04,lw=.25,cw=.0016,uw=6,fw=90,hw=170,dw=1.9;function pw(){const s=()=>({floor:255,ceiling:0});return{envelopes:{bass:s(),lowMid:s(),mid:s(),high:s()},overall:s(),previous:null,flux:[],lastBeat:0,onset:0,rise:0,punch:0,lastNow:0,kick:new If(170,.16),snare:new If(170,.13),hat:new If(70,.06),sections:nw()}}const lo=new Float32Array(256);for(let s=0;s<256;s++)lo[s]=Math.pow(10,(s/255*70-100)/20)*1e3;const Df={kick:[30,150],snare:[1500,5e3],hat:[6e3,12e3]};function H0(s,e){s.floor+=(e-s.floor)*(e>s.floor?ow:aw),s.ceiling+=(e-s.ceiling)*(e>s.ceiling?lw:cw);const t=s.ceiling-s.floor;return t<uw?Math.min(1,e/190):Math.min(1,Math.max(0,(e-s.floor)/t))}function Nf(s,e,t){const r=Math.max(0,Math.min(s.length-1,e)),a=Math.max(r+1,Math.min(s.length,t));let l=0;for(let u=r;u<a;u++)l+=s[u];return l/(a-r)}function V0(s,e,t){const r=Math.max(1,Math.min(s.length-1,e)),a=Math.max(r+1,Math.min(s.length,t));let l=0;for(let u=r;u<a;u++)l+=(lo[s[u]]/1e3)**2;return l>0?Math.max(-100,10*Math.log10(l)):-100}function mw(s,e){const t=-100+10*Math.log10(Math.max(1,e))+5;return Math.min(1,Math.max(0,(s-t)/(-32-t)))}function gw(s,e,t,r,a){const l=e/2/s.length,u=W=>Math.round(W/l),h={};for(const W of sw){const[Y,F]=Dg[W];h[W]=H0(t.envelopes[W],Nf(s,u(Y),u(F)))}const p=H0(t.overall,Nf(s,u(20),u(12e3))),d=u(1e4),v=new Float32Array(d);for(let W=0;W<d&&W<s.length;W++)v[W]=s[W];let _=0,g=0;if(t.previous){for(let W=0;W<v.length;W++){const Y=t.previous[W]??0,F=v[W]-Y;F>0&&(_+=F,g+=lo[v[W]]-lo[Y])}_/=v.length}t.punch=g;const M=t.lastNow?Math.min(.1,Math.max(.001,(a-t.lastNow)/1e3)):1/60;t.lastNow=a;const E=W=>{var _e;const Y=t.previous;if(!Y)return{flux:0,audible:0};const F=Math.max(1,u(W[0])),ee=Math.min(s.length,Math.max(F+1,u(W[1])));let L=0,H=0,xe=0;for(let ve=F;ve<ee;ve++){const X=ve<Y.length?Y[ve]:((_e=t.above)==null?void 0:_e[ve-Y.length])??s[ve];L+=lo[s[ve]],H+=lo[X],s[ve]>X&&(xe+=s[ve]-X)}return{flux:Math.max(0,L-H),audible:xe/(ee-F)}},C=E(Df.kick);tw([{hits:t.kick,...C},{hits:t.snare,...E(Df.snare)},{hits:t.hat,...E(Df.hat)}],a,M,r),t.rise=_+C.audible*.5,t.previous=v,t.above=s.slice(d),t.flux.push(_),t.flux.length>fw&&t.flux.shift();const x=t.flux.reduce((W,Y)=>W+Y,0)/Math.max(1,t.flux.length);let S=0;for(const W of t.flux)S+=(W-x)**2;const R=Math.sqrt(S/Math.max(1,t.flux.length)),I=dw*(1.5-r*1),b=x+R*I,D=t.flux.length>=20&&_>b&&_>.35*(1.3-r*.8)&&a-t.lastBeat>hw;D&&(t.lastBeat=a);const k=b>0?Math.min(1,(_-b)/(b+.6)):0;t.onset=Math.max(t.onset*.9,D?Math.max(.35,k):0);let w=0,N=0;const q=Math.min(s.length,u(1e4));for(let W=Math.max(1,u(100));W<q;W++){const Y=(s[W]/255)**2;w+=Y,N+=Y*W*l}const B=V0(s,u(20),u(12e3));rw(t.sections,{overall:B,bass:V0(s,u(30),u(160)),high:Nf(s,u(2e3),u(12e3)),centroid:w>.05?N/w:0,onset:D},a,M);const z=.6+r*1.2,Q=1.5-r,te=1,G=W=>te*Math.min(1,z*Math.pow(Math.max(0,W),Q)),$=D&&te>.15;return{bass:G(h.bass),lowMid:G(h.lowMid),mid:G(h.mid),high:G(h.high),overall:G(p),beat:$,beatIntensity:$?te*Math.min(1,Math.max(.3,k)):0,onset:te*t.onset,kick:te*t.kick.pulse,snare:te*t.snare.pulse,hat:te*t.hat.pulse,energy:te*t.sections.energy,build:te*t.sections.build,drop:te*t.sections.drop,bright:t.sections.bright,input:mw(B,u(12e3)-Math.max(1,u(20)))}}const G0=[.35,.45,.8,1.15,1.5,1.9],vw=3.6,_w=2.2,xw=6;function Sw(){return{rate:1,clap:0}}function W0(s){if(!s)return null;if(s.gesture==="fist")return G0[0];const e=s.fingerCount;return e===void 0?null:G0[Math.min(5,Math.max(1,Math.round(e)))]}function Mw(s,e,t){const r=[W0(s.left),W0(s.right)].filter(u=>u!==null),a=r.length?Math.max(...r):1,l=Math.min(1,t*xw);return e.rate+=(a-e.rate)*l,s.clapping&&(e.clap=Math.max(e.clap,vw*Math.max(.5,s.clapIntensity??1))),e.clap=Math.max(0,e.clap-e.clap*_w*t),e.rate+e.clap}const yw={dust:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD51PXOBSjr0HNJjGAe3fFLz6k0ABBC5oOeMd/SnJI8Uquhw6nIIHepLhmaczSGMmUlzsAUDJ5GAAB9BxQBCFLNgcn0JpXRo5HRl2spIIPr6U9HRmxMZCoBxtI4Pbr2zTFXcRghB79KAG9PQ0oBHp1q8NKuJYY2t40lLMIx5UisXY5IGM5zx6enqKpvDJESHUjkjn260ANwcjPNA78+3FTW8E15PFbwohkY7F5CjJ9SSB+Zpz27szhSSsYwWA3KOmSWHGMnr9KAKw454IoweO1TpHE85WSb7OhxhiDJ/KkGwQjYru7A71KjC88YP/6qAIe2MClx0/nQFJIwcH0qxFbsy8XEKsWKMjPg9Mk+gHbr1oArqrM3AJPp3o6dyeeMd6nuRAZWe0ikS3Zj5fmuGfbnjJAAzjGeKW2vpbJJfs7mKWRShkRypCEYZfTB/pQBE0JWBZGaP5icKHG4Y9R1H41GQc5qZI5ViM4wE+7nI6kenWolxvAfJXPJA5x7UAA+g4o6c+npQeuRwPSkPH0oAMdADS854GKAADgjNHfpzQAAZ9qleFoZADtlAw3ynIwff+fvTXEZdRDubcBkY6N3A9fr+lOliVJGCiQLtBG8YOPWgBAyl2ZBs3NgKGzgfXv6VJdSRzzblt1hwoV9vQuOpAHAz6DimR4UkjJKNkleeP8A9eKsyvc3TRPLO+1VKRCQ5CruJ2gemSeMY5NAFdRvRuQ4QZAPUjPTHaljiacOqJGhRPM5IGQBzyfbPHftVu7jjikkUyW0xIAZ4sBVZiGO0DrjkcYHaokljjidkuTG8ZATEfMgOQfm7AADg/3jQBGbiJrMxGHMgIw6thcDPVQPmPPUn2pYI1nMnzKuzlsybPMGQNqjHJ6fgPap/swvFLIJC5H7hMfewwyOB1wSeoHv2oSOCRHhd5pCIN6Mq7yrLywI4wvXJ5wBnmgCo8SuFaNCiMTt3MDkEnHPr26YpPIkZgY4nG47ce//AOsU5gyXH79RKOVGG4OOOo9KbKrrMwm3iUcENx9KALHk74muDAkcZGxP3hAVxjPbk98f7Qq3GqarFbNd38MIt3jtgkrBSIfmO5cDBC4IOSTll684rXKxxW3lx28mHYMHkGOQMEKAT33Dqeg6VGUkaAs0yKYMbY3b5iDk5A/DJ+ooAnu4IgLiW0tpprXztsVw+chQDgEDjJBBOemMetQ2yxpFcLM0UTjAXzAxP3sEAAEAjrk44XA64qXSjch5Ra3kkMkimIxRhmaVWUhgAODxxg+tVZ4ZkYGY/M43AcHIPOeKAI2RScBwz/dxtI4+pphAB+U575qa2tXuZCqsi7VLEuwUYHYZIyfQDk9qaLeQAkjAAJ+bj9KAI+n9fejtSnk9OKQ4yORQAdunFAB7d6AcDjk0gJzigC1aCNXzJ5uwfe8r7y+/4fhU6LetCvkIj8sq+WA0hBByMdSuAe3HXrVa1nEEgYDD54bdgY7gjuD/AI1Zhv57aWaeCeS0W43xOts+zMbdUAz9zsRnpxQBSjZc5cE8fKQcYPY9OlaFrbG9mULtjVEYmQgkcZOeOQM8fjVaAbZgdp5PHl/NxjkDr29f6VO93LbPLb2pRU8w7QrCRgNpTAfHIwT04PWgBLm4+1xrNHCsflxBZv3jEyncdrHPGcFRxx8ueuaryxr521HUoFUZXOCcc9ff/wCtSJ5gUFBhc8Z+nX3+vamlCjI2QG+8Ce9AGxaWLXq3FqLuGHT7Y+ZJcmMgHoM4xvb5sYUdNxIAyaqSR2n9qrh5IbZuN08ZztI+9hPUY4GevXFQzh1u95TyJIgjDyyflGB8wJ5yTzn1NQt5pbO4s33gc5xk9/rQBOWQWySxNFvMxBUrukwACD0xjt9c1LcTs7JM4LyAbjJPhtx75z75IBz160TXc9zdx3UCi3kEYA8g7dowRxjpkZJ7/wAqrPNG/lrKnllIyCV5LtnqRnqen60AXZmsonYWlzK8JUshmXYd+fQMduVHXnk/iJLSSFNRjFvbbvNHlATShF8zGMiQgAAEq2Tg8cnmqDKt6ryqY4fKjUEEnMpzjI/r2qawlFtcwyxyzR3EbM4WFFbDAfKeTznkH+R6UAMjMlnKkkUhiuIf3u5X2OrZwMe4POBz1PSomlmEZiY+WDl+mS5Iwfm68jt0/Gnxh3uC6RIQrKxiY5D85xj09cfpTjJbvI8kYaCUu7/uhmMA9lU8jALdSe34gEDtuMmyMQgAEqrHGfoTnrUt5cxyTTC3eWSGVg5e4VTKTjnLD3J4+melRTSDA2xxgqqgFM4yBySDySfyznHGKhJCr1U7uc9x7UAIoyc/pRge2e9Jk55FL14z+dACfzNKPXNJnPTHHalCg9KAJUQtEwEeSo3FsgcD69f50szrO4CL5cYHCs5IXjnGfU5NTJNMYhaPJGsKHzFJJZVYjrgcEngHg9hwBUcsclodskUkc4AJWRdpAIBUgEccc59CMUANjaWONipG1uPXP4fjSpGJJGdX2x4yzycBSR0yM55/P2oCgQq0kJAbIDg43D+XBoJSMowLgEZBZeF5wSB0PegC4mnXlxpUl0kMv2eH95gAkAEAFvYcDk/QZ5xPbrpsHkJdEG5S4CujZMTRkcMGUg5HpnBH0qvYyxs6xPOsCIwYSPllVxwGIwSVHPAB7dadIJXa9EdwJosn5xtQOM5DYPb5eg5HHSgCoiC4fdLcqmCAwx8x9cdifrjNWJbJoIfOWzL20jZSVuSO2zIIBOSAR60p3XFtGk6pFDZgpgKeS2TyRyST/KoI7N7mNVg3SyRgsyohIRBjLH8T29KAH8OWiwSsS467VHXIOB2J6mh2mFnFBJNHKvVVDqwGecZ7H8eM0bY4p3aAh0cmMRSn94wI6kDpnPH+TVx7WK3uj9rdA6fLKsbDcjAbcKRkY6HJ64zQBDC8MmntHPHIZFAEUSIPmHzEncTlcZBwAc98Dmktra3SOCU30kbuctsjJKBWOCDnk8Dp6+1RzQm3jhjnlLFC2USUHyx347Z4PuAafZ7Yg264MZQgyQKv31HTvycnoOR1oAikij+zPcQoETIUgzAsWJJGB1xgYPoRyeQKdbRr5aCS7Ft5owAE3Dbzgn3JwPUYz6VA6rM4itkZtzEqAMn8vp25/rVq9aO30+G2WFA7gStui/eLkcAueSCMMAvy8jqc0AUmhmFuZRGxjVtjSgEruxkLnpnAJx3oS4ltxIkMp2yDa2B94fjQsjuDGrEKPmCkk5P4d6iJyxxhec4Ax+lACvHJFI0ciMjqcMGBBH4GkPA/xFS3Mv2i5kmLSMzncTI+9j9T3+tREc5xmgBOD649qU9e3PtQODx0oB4x1oAUEDGCQw65rTOs319FbWl5cNPDA2YEZc+Vk8hB2B9BxkD0FUYPKCSSSru+UqiZI+Yg/NkenX3pkZZJMgHeDgEckfSgCfc22S0Uq8KOXyuCeOM7sAkY7d/SrUeowxZQ2kE3zBkzn5T1AOfvAc/XPJOBVJpprto42b5YsiNGY7UGSxAz0BJJ+pqSGWORpBNIIozG2FEe8E4yqgZ4yQMntz16UARiKJk8zJBOMgdu2fzpgVlQuGHC464PPBA55q5Pd2zQLGIIi7BWd44yhU5OVAzjGMcjFMsZIPP8uZvLilGwuzkBcnqcA5GPXNACg+XZzROuDKq7Qr53HOd3vgdqVn+1yQrDOsQigyDIQnzKCSM9ySDjPPIFQ3EkayMloZfJ4P73aWyPQgevpipg89u6Tl/JuLYLIvzBSBxtI5znJHA5HWgBLLyZGDSxGRi43EOFY5I4GQfz5xnpVkNJZaki3FvFGFhLRiaJeUdSVYgj5zhgQSO49BVaO4uI4iihPMkIm8xQvmA4PRuuMdsjnHFVDIzhlBABIJGc89M5/E/nQBJclZZDIpGHbO3GNv8AjU0V5iVibaLe8ZiPyDHPGQOinGOR9etVwU2hW3K4Jy2Tz6DH+etSXF7NdGFLiUyLEpVM8BQSTwB7nOKAJPtL7AscxjDuPMLNwSDkZA6gdfzqOZnmcqH3BARgLtAAxnA/Cp7W9ksYw/ls3ng7g+CsiZHB7/eXtjpTLW7+z3AuEhhkEYOYpVypzkfjjIP4DrQBFDOIoZISiZYgrJt+ZcZGM+hzyPYdKieQSMWZVyRggDGD9KXz5MDcQwDb8MBjPHNM3fKAFAxnkdTQAhwPyo6HB/8ArUuffrTSfY+9ACjk9eaAB/jSZ4wO1A44zQBMs5WIRqEXnO8L82CMYz6e1Ai3TJGrxyF8AYYgAnjk8VDyMkfnT0fYwbCsc9CuR/8AXoAHXYzLkFgcEg5B+hFW7OzYxPeNbm4ggZfMXcVXnJwW7ZCN3z6A1UjZY2+aJX9mJ/pQZHEZjDHyyQxXPBI6E/r+dAASX7Dk5wBUsE6QxSAR5kZSqtxgAgg8EHsfb1ot7trWdJY44m2c7ZYw6k46lTkH+VNjnZbSW32RMkrK25kBZSucYbqM5OR0PGegoAC6tlY4gWfbjqWB9ue9W47r7DefarWSUyCMoTKoDISCreobjI6dD681TklDj5YUjzj7ue3fr1PrTQfnyVDH0YZoAkad5JIUlLOkfAC4zt9AcH8KdcRES72DRrIokjyAMp0HTHp1xyaYsMvkmaMZRANzL/Bk4APoTimxzNDHLGgTbKAGygJwCDwSMjkdRzjjpQA1mJzuO7vzVhLhrSeQ25IDxtEfMUEgMu1uD06nnqPrUKShIpkMUTmVQoZs5j5ByvPU4xzngn60u6N3VpC5yuDjGSccf0oATKlQNxOOx4/KnPIWt4kMUS7QRvC/M3J6nv1x+FNKYVW3KQewPI+o7UzLcZzgfpQA5ypJ2g4z3PNNHUUdR2xSZ56UAKP1ozj6CkHH8VL0P+FACE8gdqcB+lFFACN1x6DNIDkiiigBSAMflSNkAc9RzRRQAZJY+1OxzRRQAnv74oxljmiigBPQetKflAx2oooAB1/HFL0GfSiigBO+PYUYyM9zRRQAgGTjtQTx9aKKAFxjOO3NLjJC9jRRQB//2Q==",line:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD5tooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKK04vDOuzDMWi6jJ/u2sh/pSyeF9ehGZNE1FB6tayD+lVyS7AZdFSzWs9u22aF4j6OpU/rUWCegzUgFFFFABRRRQAUUYPoaVUZjgDJ9KAEoqzHpl/L/q7K4k/3YmP9KnGgaww40q+P/bu/+FVyvsBn0VqL4X15zhNE1FvpayH+lWY/A3iubHl+GdYfP92xlP8A7LRyS7AYVFdXF8LvHU3KeEtYA9XtHQf+PAVY/wCFSeNVGZdFMH/Xa5hj/wDQnFNU5S2QHGUV2P8AwqvxUDg2+ng+h1W0z/6Npw+EnjNx+60mOf8A643lvJ/6DIaapzeyYHGUV1c/wu8c24JfwpqzD1jtXkH5qDWXceEvEVp/x86DqcP/AF0tJF/mtTyy7Ae+SatZn72q2LD1fxPrLfqIgKYmq6aTtXXdJjb0TxtqMB/8ix4rYfVrUr8ni3TA3oPiJcA/+PQYplnrd+9yEtPEGpXQzjbYeLtOvM/hPGM/jW6qv+rCKVpd391N5dnqusXQ/u2PjOxvx/3zOoJ+lNu9Cv5Z/wDTtJ1WZT31DwZa3wP/AG0tWDH61q6poeqTTia80nVrpGAO6/8ADOmakp/G2cMaoT+H7KFluI9HsYD3KeF9Y0xgf96FmUfhSVRpWA5298NeHPNIu9K8OKc8mXT9X0xvx4ZRVX/hDPBExH+jaCD3EXiK6X9GtSa7m2vPLURK8qbeixeI9ci/8daFq0oZL10B8jWXTpvTVdcnH/jluv8AOnzr+v8AhgOCtfht4WmYG30SC7/643+o3P6R2Y/nWzb/AAy0SFDJD4Vg+Xn99pl8wH/Arm4gX9K65tK1CWDzkF9dxqNzx3kOoFAPrd3kQ/Ssn/innnH7zRtNvVPVm0e3A/8ASh6XOrbfl+YGZFaeHbKTy1TRNPmX30a3wfqzXD1dTUTEu2HWI5R2Ftrcij/yWsAPyNan9q3n+r/tD7dGOn2PWblV/K1sVH5VE817KRsttXUn0v8AxDJ/6DGtHtX/AF/VgM1r65fObi9f/uL663/oMCimiS4kPH21v+33xC3/ALJWgy6geqa0B/108SN/SlW3upDh5NZTPrbeI5P5sKXtL/0v8hlVbO8kHzQ6kAe+3xHJ/hUi6BPOeLK7uT/dk0fVXH5z3aCro8P3E+3yoZr0n+G40TUiPznvFH51Xv8AR7WzYDVfDWm2oHV10vSoz+c925/Oj2jQinceH47Ubr3w9YxL/efSdORv/Ji9Y/mKp7dDgb5FtoSOyjw7F/8AFVc+2+HbNs2WpW9mR2N14fh/lG386kTxJvO2PX2l9Bb6roTH8jCKTqXeoFSMW91hIRNNnjEbeHZP0wKLnwvc48w+G7maM/xS+FdKvB+dvKD+Vac+kXuqWhni03Xb1R1L2Gg3q/khVjWanh+1aJ47rw9ZROOQbj4f3Ab/AL+WsmPyo57jKcnh+zij8w6HZ2zL1Z/B+p2Z/wC+reRhUcV7a2vyi8srbHprWuWf/jrI2KktrnTtLnwJ9KtMdv7S1rSMf8BIIFaa6zp78p4n0yM+n/Cw73+TQk0/aPf+v1EKnii5imAg8XGQ+lp4vsLg/gJoRV68tdU162FwbXX9U/vmez0LUEP4IysRVKLX7zVE8htY1G/B6CHVdCvR+UiKTUJ8Pzeb5svhdrlT/HeeELC7z+NtMP0qOTqMlTw/aNFsuPD1hayL0b/hAbpZD/wO1mI/EVPbWdxajbBb6mE9IIvEVoP++RuFV10SFG3RaUtmfS38I6tbY/78zkVfgs7wDbHcaqo7Kul66B+TXCj9aXKwJ4knchWXX4PcS+Ipf0IX+dXJbDUYYvO2zajaJywv7S52/wDk5fKP0rOmtLi2UveaXFcRf3r7Tdv/AKV3+PzFZq3egQTCSyutJsLkHJ/faNb8/RI52/WnyMC4JvDb3AktrnR9KvwctmTR7dR/3ys7/rV8+IbuU7Z7ptSUDANprF4B/wCStkoqi/iS4uOJNQkvvQ2+sX2PytbJB+Rqu9/dyHKSalGP+u/iOT+QFP2bAtyT3MjEpFrUf0ufEUv8kWmA35GRJrQ/7Z+JD/WqTG6frJfEH+9b+I2/9mpy2tzJ/wA/7Y/6h3iF/wCbilyAX0ju3OGudZUe9l4ik/nIKl/si6kYeTbTX+e1xoGoH9bi7UVnppNw/TS57rHaXw9qLD857tRVe50+ziGb7w/p1sB/F/ZGlQt+dxduf0p+zYF6+sNPt3B1bw1plpjq8emaTC3/AJHunP5iqses6RYP/wAS7W7axA7NqOgwY/74haqkWsadYHFnqdnZkdv7R0G3x+Cwvj86kPjK9Pyx+Ktw9IvFWlL+n2cCjlQi+fHl+SAnjBJPaHxDo5P5G3AqwLzWNdtX/eeJNRYDjyW0C+U/8BAUmqC6nrWpQFVn8Q3o/wCmNxoeog/8B2qTWRLYrE0j6po4UY5bV/AIYfjLat/Kn7PYZej0iFZJRqPh6FcqcvqXw/MxH1ktXx+NULC/0PTr7C3Xhyz5xiPU9W0I/wDfJBAqlpl9oVpcuba68K20g6C11vU9EcfRXBUVq2us6gZs2er6sw/6c/HNldj/AMjrU8oFmfW4EmJt/E1lGp6eR8RmkH5TRE0sfiWRuD4wgUeknji2H6rATWh/betFAZLvxI4xyZNR0CT9StVp/FeoQ5U6/qNqP+m+u6Hbj844iaOUDzp/iv4ev1/0yfWHPcXWkaXdj8zGhNEfjnwK+C8elg+s3g+BT+cVwteMUU/au9wPcF8deCIwCs2kgeieHrhf0+2AU2T4j+B1HNvbT/7nhqM/+jrpv5V4jRT9rID2X/hbPheyffYabfK3rDp2mWv8oJD+tNm+PLFdqWeuMo6A660Q/KGKMCvHKKXtZdAPU5vjdcSjH9k3rj/pr4h1Fv5TCqx+MUrZzoCn03axqJx/5MV5rRS9pID0Y/F6U/8AMvwH/e1TUD/7cVFJ8WJXHHhnST/11mvJf/Qrg159RR7SXcDtpviddPzH4Z8Lxn1OlrKf/IhaoR8UfEcR/wBGXSbP/r30i0T/ANpVx9FJ1JN3uB2g+LvjhT8muvGPRLeFR+QSkPxa8ZuMS6rHOPSayt5B/wCPRmuMoqvbVH9p/eFjsl+JN5Jn7d4e8M3+epl0mJGP4xBD+taWnfE3TrI5XwzJp7f39I1i6s8fQFnH6V53RSVSSA9ktfjFZGMpLrPjOFT/AATXNtqCflNGCaG+I3hu4O6fVJ5T/wBPPhPTZD+YYV43RTdRtWA9i/4T/wAIJz5yE/8ATLwhpyn8y5qVPi3oVmv+i3Otg/8ATDS9Ltv1ETGvGKKFUcdgCiiisgCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9k=",dandelion:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAcFBQYFBAcGBgYIBwcICxILCwoKCxYPEA0SGhYbGhkWGRgcICgiHB4mHhgZIzAkJiorLS4tGyIyNTEsNSgsLSz/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCABkAKADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDovs3tR9m9q1fs3tR9m9q6TMyvs3tR9m9q1fs3tR9m9qAMr7N7UfZvatX7N7UfZvagDK+ze1H2b2rV+ze1H2b2oAyhaknAGSafJYtFjdt59GBrS+z+1Kbb5V4oAyfs3tR9m9q1fs3tR9m9qAMr7N7UfZvatX7N7UfZvagDK+ze1H2b2rV+ze1H2b2oAyvs3tR9m9q1fs3tR9m9qAMr7N7UfZvatX7N7UfZvagDV8gelHkD0q75VHlUgKXkD0o8gelXfKo8qgCkIMnpS+QFbDKeOoq55VHl55NAykYgeigfSneQBFkH5s4xirfkjBx1HIHrS+QAmF+8T0qWrrURSWJQ4JXIB6VOYUVVZCgck5H41MYSAM85HNI0GAp2e+RSd9GgKkke+TJXknpnpTfIHpV9oMHjGKb5VUgKXkD0oFuCcdPrV3yqQxcfWmBTNvtJBHSjyB6Vd8r2o8qgCl5A9KPIHpV3yqPKoApeQPSjyB6Vd8qjyqALvle1Hle1WOKOKQyv5XtSeVUsqoELSHGPekS4hIBVlYdetYutFOxo4JLVjPK9qTyvap0dXGR+tO4rVNNXRmV1hywB4HrStFk468YqcYFHFMCrGjGPBxgdKiWVEuHR2wh4GfX1qa8cRvEgJVC2Wx1I9KqCN5HQMzMHydxOMDNcVWq4+6t0Q30LCtE2QWwR6dMU7y1MhAIJAqOeARjBIGRgsajtilvNt8wEg8++e2KUK0r2Y79y15XtR5VWOKOK7iiv5XtR5XtVjijigCv5XtR5XtVjijigCv5XtR5XtVjijigBM1HcSPHbu6Y3KM0/NFKUeZNCMa4vZp5FSF/l/iGOv+FRvKCXXgRrx8o64/nWu1tCZA4QK47rxUI023DE4PJzivMlhal7p3M3GTGaUJPLdmbK8ADGMf5zWhmmqAihVGAKXNehSh7OCiWlZWFBIOfSjNJmjNaFCmPzTwRuHTIqMxSKFGPmzzn0p4Yg5HBFOMrFcZGfUisJ0eaVwKwM0lxIknQNhQB2Izz61Wn0+SS7DgKAGB3Y6D0q2pK37tz88Y69OD/9epi5PWlUwyk0ybJ7hmjNJmjNdJQuaM0maM0ALmjNJmjNAC5ozSZozQBH5go8wVQ8+jz/AHoA0N42/Wk8wVSeYqQM9AP15pvn0AX/ADBR5gqh59Hn0AX/ADBR5gqh59Hn0AX/ADBR5gqh59Hn0AWZZlS6tzn7xZP/AB3P/stTeYKyL2cqkDg/dnTP0Jx/WrHn1bWiYi/5go8wVQ8+jz6gZf8AMFHmCqHn0efQBf8AMFHmCqHn0efQBf8AMFHmCqHn0efQBn+f70CXcQPXis7z/epbSXdeRc/xZ/Ln+lAF6W4DTOQeMmm+f71m+fnnPWl8/wB6ANHz/ejz/es7z/ejz/egDR8/3o8/3rO8/wB6PP8AegDR8/3o8/3rO8/3o8/3oAsahKTYS4PK4b8mB/pVkz/Mee9ZNzKGtJgxwCjZ/KpBPkA56jNW/gXq/wBCeppef70ef71nef70ef71BRo+f70ef71nef70ef70AaPn+9Hn+9Z3n+9Hn+9AGj5/vR5/vWd5/vR5/vQBR3mprRyLjPorH/x00UUCIN5xS7zRRQMN5o3miigA3mjeaKKADeaN5oooAhu3P2G4/wCuTf8AoJp0EjG2iJ7op/QUUVp9j5k9STeaN5oorMoN5o3miigA3mjeaKKADeaN5oooA//Z"},Ew=[1,2,3,4].map(s=>({src:`./media/show-${s}.mp4`,poster:`./media/show-${s}.jpg`}));function Aw({page:s,onClose:e,onGo:t}){return $e.jsx("div",{className:"page",onClick:e,children:$e.jsxs("article",{onClick:r=>r.stopPropagation(),children:[$e.jsxs("nav",{className:"tabs",children:[["about","instrument","performances","contact"].map(r=>$e.jsx("button",{className:r===s?"on":"",onClick:()=>t(r),children:r},r)),$e.jsx("button",{className:"close",onClick:e,children:"close ×"})]}),s==="about"&&$e.jsxs("section",{children:[$e.jsx("h2",{children:"The machine reads, the hand leads."}),$e.jsx("p",{children:"n4th plays visuals like an instrument. The instrument was built in conversation with AI: a visual tool designed and coded together with it, and played live with the hands."}),$e.jsx("p",{children:"A camera reads the hands — speed in the fingers, a fist that gathers, an open palm that releases, a clap that breaks everything open — while the music sets the pulse. The visuals are not clips: they are played."}),$e.jsx("p",{className:"todo",children:"[ bio — to come ]"})]}),s==="instrument"&&$e.jsxs("section",{children:[$e.jsx("h2",{children:"Built with AI, played by hand."}),$e.jsx("p",{children:"The tool runs in a browser. It listens to the music — its kicks, its builds, its silences — and it watches the hands. Every visual answers both: the sound gives the pulse, the hand gives the decision."}),$e.jsxs("ul",{children:[$e.jsxs("li",{children:[$e.jsx("b",{children:"one finger"})," slow · ",$e.jsx("b",{children:"five"})," fast"]}),$e.jsxs("li",{children:[$e.jsx("b",{children:"a fist"})," gathers · ",$e.jsx("b",{children:"an open palm"})," releases"]}),$e.jsxs("li",{children:[$e.jsx("b",{children:"a clap"})," breaks everything open"]}),$e.jsx("li",{children:"the music: pulse, kicks, build-ups, the drop"})]}),$e.jsx("p",{children:"Every part of it — the visuals, the way they listen, the way they read a gesture — was written in conversation with AI. That is the question the performance stays with: who is listening to whom?"})]}),s==="performances"&&$e.jsxs("section",{children:[$e.jsx("h2",{children:"Performances"}),$e.jsx("p",{className:"sub",children:"Stuttgart, November 2026 — live with a DJ set."}),$e.jsx("div",{className:"shows",children:Ew.map(r=>$e.jsx("video",{src:r.src,poster:r.poster,controls:!0,playsInline:!0,preload:"none"},r.src))})]}),s==="contact"&&$e.jsxs("section",{children:[$e.jsx("h2",{children:"Contact"}),$e.jsx("p",{className:"todo",children:"[ email / instagram — to come ]"})]})]})})}const ww=[{id:"dust",name:"Dust",note:"a fist gathers it into a circle"},{id:"line",name:"Line",note:"an open hand unfolds it"},{id:"dandelion",name:"Dandelion",note:"the hand moves the wind"}],Ng={dust:{colors:Jl(0,0,"grayscale"),params:{"look.glow":1.6,"field.size":1.3}},line:{colors:Jl(268,70,"black"),params:{"line.weight":1.4}},dandelion:{colors:Jl(200,60,"black"),params:{"field.count":3}}},X0=[{name:"Test track · 124 bpm",src:"./tracks/test-124.mp3"}];function Tw(s,e,t){var a;const r=s==="dust"?new gA(e,t):s==="line"?new _A(e,t):new CA(e,t);return(a=r.setParams)==null||a.call(r,Ng[s].params),r}const Cw={left:null,right:null},Rw={bass:0,lowMid:0,mid:0,high:0,overall:0,beat:!1,beatIntensity:0,onset:0};function bw(s,e,t){return{position:{x:s,y:e},gesture:t>.5?"fist":"open",openness:1-t,fingerCount:t>.5?0:3,velocity:0}}const Uf=[{key:"play",text:"Press ▶ to play a track — the visual moves with the music."},{key:"hand",text:"Now play it yourself: allow the camera and raise your hand — or just move the mouse."},{key:"fist",text:"Close your hand (or hold the mouse button) — and open it again."},{key:"clap",text:"Clap (or click quickly)."},{key:"switch",text:"Try another visual below."}];function Pw(){const s=en.useRef(null),[e,t]=en.useState("dust"),r=en.useRef(e);r.current=e;const[a,l]=en.useState(null),[u,h]=en.useState("off"),p=en.useRef(Cw),d=en.useRef({x:.5,y:.5,on:!1,down:0,closed:0,clapAt:0,moved:0}),v=en.useCallback(async()=>{h("asking");try{const z=await navigator.mediaDevices.getUserMedia({video:{width:640,height:360,facingMode:"user"}}),Q=document.createElement("video");Q.muted=!0,Q.playsInline=!0,Q.srcObject=z,await Q.play(),l(Q),h("on")}catch{h("refused")}},[]),_=en.useRef(null),[g,M]=en.useState(null),E=en.useRef(null),C=en.useCallback(z=>{var te;let Q=_.current;if(!Q){Q=new Audio,Q.crossOrigin="anonymous",Q.loop=!0,_.current=Q;const G=new AudioContext,$=G.createMediaElementSource(Q),W=G.createAnalyser();W.fftSize=2048,W.smoothingTimeConstant=.55,$.connect(W),W.connect(G.destination),E.current={ctx:G,analyser:W,data:new Uint8Array(W.frequencyBinCount),state:pw()}}if((te=E.current)==null||te.ctx.resume(),g===z){Q.pause(),M(null);return}Q.src=X0[z].src,Q.play(),M(z)},[g]),[x,S]=en.useState(new Set),[R,I]=en.useState(!0),b=en.useCallback(z=>S(Q=>Q.has(z)?Q:new Set(Q).add(z)),[]);en.useEffect(()=>{g!==null&&b("play")},[g,b]);const V=Uf.find(z=>!x.has(z.key));en.useEffect(()=>{const z=s.current,Q=z.getContext("2d");let te=null,G=1,$=performance.now(),W=0;const Y=Sw(),F=()=>{const L=Math.min(window.devicePixelRatio||1,1920/Math.max(1,window.innerWidth)),H=Math.round(window.innerWidth*L),xe=Math.round(window.innerHeight*L);(z.width!==H||z.height!==xe)&&(z.width=H,z.height=xe)},ee=L=>{var fe,Ae;W=requestAnimationFrame(ee);const H=Math.min(.1,(L-$)/1e3);$=L,F();const xe=r.current;!te||te.v!==xe?(G-=H*3,(G<=0||!te)&&((Ae=te==null?void 0:(fe=te.r).destroy)==null||Ae.call(fe),te={v:xe,r:Tw(xe,z,Q)},G=0)):G=Math.min(1,G+H*1.2);const _e=d.current;_e.closed+=((_e.down&&L-_e.down>220?1:0)-_e.closed)*Math.min(1,H*10);let ve=p.current;!ve.left&&!ve.right&&_e.on&&L-_e.moved<4e3&&(ve={left:bw(_e.x,_e.y,_e.closed),right:null,clapping:L-_e.clapAt<120,clapIntensity:1});let X=Rw;const ce=E.current;ce&&_.current&&!_.current.paused&&(ce.analyser.getByteFrequencyData(ce.data),X={...gw(ce.data,ce.ctx.sampleRate,ce.state,.5,Date.now()),live:!0}),iA(H,[Mw(ve,Y,H)]),rA(0),te.r.render(ve,Ng[te.v].colors,X),G<1&&(Q.globalCompositeOperation="source-over",Q.globalAlpha=1-G,Q.fillStyle="#000",Q.fillRect(0,0,z.width,z.height),Q.globalAlpha=1)};return W=requestAnimationFrame(ee),()=>{var L,H;cancelAnimationFrame(W),(H=te==null?void 0:(L=te.r).destroy)==null||H.call(L)}},[]);const D=z=>{const Q=d.current;Q.x=z.clientX/window.innerWidth,Q.y=z.clientY/window.innerHeight,Q.on=!0,Q.moved=performance.now(),u!=="on"&&b("hand")},k=z=>{D(z),d.current.down=performance.now()},w=()=>{const z=d.current,Q=performance.now()-z.down;z.down&&Q<220&&(z.clapAt=performance.now(),b("clap")),z.down&&Q>400&&b("fist"),z.down=0},N=en.useCallback(z=>{var Q,te;p.current=z,(z.left||z.right)&&b("hand"),(((Q=z.left)==null?void 0:Q.gesture)==="fist"||((te=z.right)==null?void 0:te.gesture)==="fist")&&b("fist"),z.clapping&&b("clap")},[b]),[q,B]=en.useState(null);return $e.jsxs($e.Fragment,{children:[$e.jsx("canvas",{ref:s,className:"stage",onPointerMove:D,onPointerDown:k,onPointerUp:w,onPointerLeave:()=>{d.current.on=!1,d.current.down=0}}),a&&$e.jsx($A,{videoElement:a,onHandData:N}),$e.jsxs("header",{className:"top",children:[$e.jsxs("div",{className:"brand",children:["[N] ",$e.jsx("span",{children:"THE HAND PLAYS"})]}),$e.jsx("nav",{children:["about","instrument","performances","contact"].map(z=>$e.jsx("button",{onClick:()=>B(z),children:z},z))})]}),R&&V&&!q&&$e.jsxs("div",{className:"guide",children:[$e.jsxs("span",{className:"count",children:[Uf.indexOf(V)+1,"/",Uf.length]}),$e.jsx("span",{children:V.text}),V.key==="hand"&&u!=="on"&&$e.jsx("button",{className:"cam",onClick:v,disabled:u==="asking",children:u==="refused"?"camera not allowed — the mouse plays":u==="asking"?"…":"allow camera"}),$e.jsx("button",{className:"x",onClick:()=>I(!1),title:"Hide the guide",children:"×"})]}),$e.jsxs("footer",{className:"desk",children:[$e.jsx("div",{className:"cards",children:ww.map((z,Q)=>$e.jsxs("button",{className:`card ${e===z.id?"on":""}`,onClick:()=>{t(z.id),z.id!=="dust"&&b("switch")},title:z.note,children:[$e.jsx("img",{src:yw[z.id],alt:""}),$e.jsx("span",{className:"num",children:Q+1}),$e.jsx("span",{className:"name",children:z.name})]},z.id))}),$e.jsx("div",{className:"sep"}),$e.jsx("div",{className:"tracks",children:X0.map((z,Q)=>$e.jsxs("button",{className:`track ${g===Q?"on":""}`,onClick:()=>C(Q),children:[$e.jsx("span",{children:g===Q?"❚❚":"▶"})," ",z.name]},z.src))}),$e.jsx("div",{className:"sep"}),$e.jsx("button",{className:`camera ${u==="on"?"on":""}`,onClick:u==="on"?void 0:v,title:"Play with your hand through the camera",children:u==="on"?"● hand":u==="refused"?"mouse":"camera"})]}),q&&$e.jsx(Aw,{page:q,onClose:()=>B(null),onGo:B})]})}E_.createRoot(document.getElementById("root")).render($e.jsx(en.StrictMode,{children:$e.jsx(Pw,{})}));
